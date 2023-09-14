import "wagmi/window";
import { configureChains, createConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { mainnet } from "viem/chains";
import { connectorsForWallets, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { zerionWallet } from "@rainbow-me/rainbowkit/wallets";

const alchemyID = "";
const walletConnectProjectID = "6c37429d912cb97065107c0f849bc879";

const { chains, publicClient } = configureChains([mainnet], [alchemyProvider({ apiKey: alchemyID }), publicProvider()]);

const { wallets } = getDefaultWallets({ appName: "Crypto Defense", chains, projectId: walletConnectProjectID });

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Popular",
    wallets: [zerionWallet({ projectId: walletConnectProjectID, chains })],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const client = publicClient({ chainId:mainnet.id })

export { client, chains, wagmiConfig };
