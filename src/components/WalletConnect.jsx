// src/components/WalletConnect.jsx
import React from "react";
import {
  StellarWalletsKit,
  WalletNetwork,
  allowAllModules,
  
} from "@creit.tech/stellar-wallets-kit";

export default function WalletConnect() {
  const handleConnect = async () => {
    // 1. Inicializamos el kit
    const kit = new StellarWalletsKit({
      network: WalletNetwork.TESTNET, // O MAINNET
      modules: allowAllModules(), // incluye Freighter, xBull, Albedo, etc.
    });

    // 2. Abrimos el modal
    await kit.openModal({
      modalTitle: "Conecta tu wallet Stellar",
      onWalletSelected: async (wallet) => {
        // 3. Guardamos la wallet seleccionada
        kit.setWallet(wallet.id);

        // 4. Obtenemos la dirección pública
        const { address } = await kit.getAddress();
        console.log("✅ Wallet conectada:", wallet.name);
        console.log("👛 Dirección pública:", address);
      },
      onClosed: (err) => {
        if (err) console.error("❌ Modal cerrado con error:", err);
        else console.log("Modal cerrado por el usuario");
      },
    });
  };

  return (
    <div className="p-4">
      <button
        onClick={handleConnect}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
      >
        Conectar Wallet Stellar
      </button>
    </div>
  );
}
