import "wagmi/window";
import { createConfig } from "wagmi";
import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";
import { getDefaultConfig } from "connectkit";

// const alchemyId = "";
const walletConnectProjectID = "6c37429d912cb97065107c0f849bc879";

const wagmiConfig = createConfig(
  getDefaultConfig({
    // alchemyId,
    walletConnectProjectId: walletConnectProjectID,
    appName: "Crypto Defense",
    appDescription: "Isometric game. Build and Defence in the onchain crypto world",
    appUrl: "https://tower-defence-gamma.vercel.app",
    appIcon: "https://tower-defence-gamma.vercel.app/assets/logotype.png",
  }),
);

const client = createPublicClient({
  chain: mainnet,
  transport: http()
  // transport: http("https://eth-mainnet.g.alchemy.com/v2/" + alchemyId)
})

export { client, wagmiConfig };
