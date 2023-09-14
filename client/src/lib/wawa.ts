import { parseAbiItem } from "viem";
import { FactionId, PetId, Tier, Swatch, Metadata, Wawa } from "@type/wawa";
import { client } from "./wagmi";

const wawaNftAddress = "0x2d9181b954736971bb74043d4782dFe93b55a9af" as const;
const wawaNftABI = [
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "getWawaInfo",
    outputs: [
      {
        components: [
          {
            components: [
              { internalType: "uint8", name: "headwear", type: "uint8" },
              { internalType: "uint8", name: "eyes", type: "uint8" },
              { internalType: "uint8", name: "chest", type: "uint8" },
              { internalType: "uint8", name: "legs", type: "uint8" },
            ],
            internalType: "struct Trait",
            name: "trait",
            type: "tuple",
          },
          { internalType: "string", name: "tokenURI", type: "string" },
          { internalType: "enum Faction", name: "faction", type: "uint8" },
          { internalType: "uint8", name: "petId", type: "uint8" },
          { internalType: "bytes32", name: "gene", type: "bytes32" },
        ],
        internalType: "struct Wawa",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const filter = (from?: `0x${string}`, to?: `0x${string}`) => ({
  address: wawaNftAddress,
  event: parseAbiItem(["event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)"]),
  fromBlock: BigInt(18089473),
  // todo: set toBlock after mint period
  args: { from, to },
});

export const getERC721TokenIds = async (address: `0x${string}`): Promise<number[]> => {
  const sentLogs = await client.getLogs(filter(address, undefined));
  const receivedLogs = await client.getLogs(filter(undefined, address));
  // @ts-ignore
  const logs = sentLogs.concat(receivedLogs).sort((a, b) => Number(a.blockNumber - b.blockNumber));

  const owned = new Set<number>();
  for (const {
    args: { from, to, tokenId },
  } of logs) {
    if (!(from && to && tokenId)) continue;

    if (to.toLowerCase() === address.toLowerCase()) {
      owned.add(Number(tokenId.toString()));
    } else if (from.toLowerCase() === address.toLowerCase()) {
      owned.delete(Number(tokenId.toString()));
    }
  }

  return Array.from(owned);
};

export async function getMetadata(tokenURI: string): Promise<Metadata> {
  const metadata = (await (await fetch(tokenURI)).json()) as {
    name: string;
    description: string;
    attributes: { trait_type: string; value: string | string[] }[];
    properties: { files: { uri: string; type: string }[]; category: string };
    image: string;
  };
  return {
    name: metadata.name,
    image: {
      x1: metadata.properties.files[2].uri,
      x10: metadata.properties.files[1].uri,
      x10bg: metadata.properties.files[0].uri,
    },
    swatches: {
      body: metadata.attributes[6].value as Swatch,
      headwear: metadata.attributes[7].value as Swatch,
      eyes: metadata.attributes[8].value as Swatch,
      chest: metadata.attributes[9].value as Swatch,
      legs: metadata.attributes[10].value as Swatch,
      pet: metadata.attributes[11].value as Swatch,
    },
    gene: metadata.attributes[12].value as `0x${string}}`,
  };
}

export async function getWawa(tokenId: number): Promise<Wawa> {
  const res = await client.readContract({
    address: wawaNftAddress,
    abi: wawaNftABI,
    functionName: "getWawaInfo",
    args: [BigInt(tokenId)],
  });
  return {
    tokenId,
    factionId: res.faction as FactionId,
    petId: res.petId as PetId,
    tiers: {
      headwear: res.trait.headwear as Tier,
      eyes: res.trait.eyes as Tier,
      chest: res.trait.chest as Tier,
      legs: res.trait.legs as Tier,
    },
    ...(await getMetadata(res.tokenURI)),
  };
}
