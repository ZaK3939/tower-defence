import React from "react";
import { WagmiConfig } from "wagmi";
import { ConnectKitProvider } from "connectkit";
import { wagmiConfig } from "@lib/wagmi";

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <WagmiConfig config={wagmiConfig}>
       <ConnectKitProvider>
        {children}
      </ConnectKitProvider>
    </WagmiConfig>
  );
};
