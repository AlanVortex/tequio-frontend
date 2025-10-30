package utez.edu.mx.api.contracts;

import org.stellar.sdk.KeyPair;
import org.stellar.sdk.Network;
import org.stellar.sdk.SorobanServer;
import org.stellar.sdk.Transaction;
import org.stellar.sdk.TransactionBuilder;
import org.stellar.sdk.TransactionBuilderAccount;
import org.stellar.sdk.operations.InvokeHostFunctionOperation;
import org.stellar.sdk.exception.PrepareTransactionException;
import org.stellar.sdk.exception.NetworkException;
import org.stellar.sdk.responses.sorobanrpc.SendTransactionResponse;
import org.stellar.sdk.scval.Scv;
import org.stellar.sdk.xdr.SCVal;
import okhttp3.OkHttpClient;

import javax.net.ssl.*;
import java.security.SecureRandom;
import java.security.cert.X509Certificate;
import java.time.Duration;
import java.util.*;

public class Send {

    public static OkHttpClient createUnsafeOkHttpClient() {
        try {
            TrustManager[] trustAllCerts = new TrustManager[]{
                    new X509TrustManager() {
                        public X509Certificate[] getAcceptedIssuers() { return new X509Certificate[0]; }
                        public void checkClientTrusted(X509Certificate[] certs, String authType) {}
                        public void checkServerTrusted(X509Certificate[] certs, String authType) {}
                    }
            };

            SSLContext sslContext = SSLContext.getInstance("TLS");
            sslContext.init(null, trustAllCerts, new SecureRandom());
            SSLSocketFactory sslSocketFactory = sslContext.getSocketFactory();

            return new OkHttpClient.Builder()
                    .sslSocketFactory(sslSocketFactory, (X509TrustManager) trustAllCerts[0])
                    .hostnameVerifier((hostname, session) -> true)
                    .callTimeout(Duration.ofSeconds(60))
                    .connectTimeout(Duration.ofSeconds(60))
                    .readTimeout(Duration.ofSeconds(60))
                    .build();

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static void main(String[] args) throws Exception {
        OkHttpClient unsafeClient = createUnsafeOkHttpClient();
        SorobanServer server = new SorobanServer("https://soroban-testnet.stellar.org", unsafeClient);

        try {
            // Claves de tu cuenta de prueba
            String sourceSecretSeed = "SBLP5M7EUAI3CZ2IAVEF2DCUR53I7FPMP7QECVMCWPKFAOLK6MYW45ZW";
            KeyPair sourceKeyPair = KeyPair.fromSecretSeed(sourceSecretSeed);

            // Obtener estado de la cuenta desde Soroban
            TransactionBuilderAccount account = server.getAccount(sourceKeyPair.getAccountId());

            // Datos del contrato
            String contractId = "CCWY7JSYFKKCLUCALC6RR5RM5M6OOA6UUVJU5UMHRRXI3J3HHYB4QG6E";
            String functionName = "hello";


            LinkedHashMap<SCVal, SCVal> map = new LinkedHashMap<SCVal, SCVal>();
            map.put(Scv.toSymbol("value"), Scv.toInt32(10));
            SCVal val = Scv.toMap(map);
            List<SCVal> contractArgs = new ArrayList<>();
            contractArgs.add(val);

            // Crear la operación para invocar el contrato
            InvokeHostFunctionOperation operation =
                    InvokeHostFunctionOperation.invokeContractFunctionOperationBuilder(
                            contractId,
                            functionName,
                            contractArgs
                    ).build();

            // Construir la transacción
            Transaction unpreparedTransaction =
                    new TransactionBuilder(account, Network.TESTNET)
                            .setBaseFee(Transaction.MIN_BASE_FEE)
                            .addOperation(operation)
                            .setTimeout(300)
                            .build();

            // Preparar y simular la transacción
            Transaction transaction;
            try {
                transaction = server.prepareTransaction(unpreparedTransaction);
            } catch (PrepareTransactionException e) {
                throw new RuntimeException("Prepare transaction failed. Verifica que los nombres y tipos de parámetros coincidan con el contrato.", e);
            } catch (NetworkException e) {
                throw new RuntimeException("Error de red al preparar la transacción", e);
            }

            // Firmar la transacción con la cuenta fuente
            transaction.sign(sourceKeyPair);

            // Enviar la transacción
            SendTransactionResponse response = server.sendTransaction(transaction);

            // Mostrar resultados
            System.out.println("Status: " + response.getStatus());
            System.out.println("Transaction Hash: " + response.getHash());
            System.out.println("Latest Ledger: " + response.getLatestLedger());
            System.out.println("Ledger Close Time: " + response.getLatestLedgerCloseTime());

        } catch (Exception e) {
            System.err.println("Ocurrió un error:");
            e.printStackTrace();
        }
    }
}
