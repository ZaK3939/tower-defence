export const factions = {
  prima: 0,
  zook: 1,
  mecha: 2,
  flavo: 3,
} as const;
export type Faction = keyof typeof factions;
export type FactionId = (typeof factions)[Faction];

export const traits = {
  shadows: 1,
  legs: 2,
  body: 3,
  chest: 4,
  headwear: 5,
  eyes: 6,
} as const;
export type Trait = keyof typeof traits;
export type TraitId = (typeof traits)[Trait];

export const tiers = [1, 2, 3, 4, 5, 6, 7, 8] as const;
export type Tier = (typeof tiers)[number];

export const pets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23] as const;
export type PetId = (typeof pets)[number];

export type Swatch = `#${string},#${string}`;

export type Metadata = {
  name: string;
  image: { x1: string; x10: string; x10bg: string };
  swatches: { body: Swatch; headwear: Swatch; eyes: Swatch; chest: Swatch; legs: Swatch; pet: Swatch };
  gene: `0x${string}`;
};

export type Wawa = {
  tokenId: number;
  factionId: FactionId;
  petId: PetId;
  tiers: { headwear: Tier; eyes: Tier; chest: Tier; legs: Tier; };
} & Metadata;

export const defaultWawa: Wawa = {
  tokenId: 0,
  factionId: 0,
  petId: 1,
  tiers: { headwear: 1, eyes: 1, chest: 1, legs: 1, },
  name: "#Wawa WAWAWAWA",
  image: { x1: "", x10: "", x10bg: "" },
  swatches: { body: "#ffcfb5,#f5bc87", headwear: "#226688,#226688", eyes: "#ab40f6,#f83737", chest: "#907f74,#f83737", legs: "#ff8800,#fed41d", pet: "#f2f0ed,#8080ff" },
  gene: "0x0000000000",
}
