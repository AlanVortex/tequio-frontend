import pkg from "@stellar/stellar-sdk";
const { Contract, SorobanRpc, Keypair, TransactionBuilder, Networks, BASE_FEE } = pkg;
import dotenv from "dotenv";

dotenv.config();

const server = new SorobanRpc.Server("https://soroban-testnet.stellar.org");
const networkPassphrase = Networks.TESTNET;

const sourceSecret = process.env.SOURCE_SECRET;
const sourceKeypair = Keypair.fromSecret(sourceSecret);

export const invokeIncrement = async (req, res) => {
  try {
    const { user, value } = req.body;

    const contractId = "CDYPR66BKUYEMTBGY7XKIDYBKF664DYMNTGSHFBXQS524UIRY2LBW4XD";
    const account = await server.getAccount(sourceKeypair.publicKey());

    const contract = new Contract(contractId);

    let tx = new TransactionBuilder(account, {
      fee: BASE_FEE,
      networkPassphrase,
    })
      .addOperation(
        contract.call("increment", {
          user,                 // dirección pública
          value: Number(value), // valor numérico
        })
      )
      .setTimeout(30)
      .build();

    tx.sign(sourceKeypair);

    const sim = await server.simulateTransaction(tx);
    if (SorobanRpc.Api.isSimulationError(sim)) {
      throw new Error("Error en simulación: " + JSON.stringify(sim));
    }

    const sendResponse = await server.sendTransaction(tx);
    if (sendResponse.status !== "PENDING") {
      throw new Error("Error al enviar transacción: " + JSON.stringify(sendResponse));
    }

    res.json({
      message: "Transacción enviada correctamente",
      txId: sendResponse.id,
      status: sendResponse.status,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
