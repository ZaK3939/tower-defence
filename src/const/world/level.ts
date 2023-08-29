import { WorldLayerParams } from "gen-biome";

import { TileMeta, LevelBiomes, LevelPlanet } from "@type/world/level";
import { LEVEL_BIOMES_DUNGEONS } from "./planet/dungeons";
import { LEVEL_BIOMES_CRYPTO } from "./planet/crypto";

export const LEVEL_MAP_SIZE = 40;

export const LEVEL_TILE_SIZE: TileMeta = {
  width: 42,
  height: 48,
  origin: 0.25,
  persperctive: 0.571,
  deg: 29.726,
};

export const LEVEL_MAP_MAX_HEIGHT = 4;

export const LEVEL_SEED_SIZE = 128;

export const LEVEL_SCENERY_TILE_SIZE = {
  width: 42,
  height: 72,
  origin: 0.5,
};

export const LEVEL_BIOME_PARAMETERS: WorldLayerParams = {
  frequencyChange: 0.2,
  heightRedistribution: 0.7,
  borderSmoothness: 0.8,
  falloff: 0.3,
};

export const LEVEL_PLANETS: Record<
  LevelPlanet,
  {
    BIOMES: LevelBiomes;
    SCENERY_DENSITY: number;
    SCENERY_VARIANTS: number;
    CRYSTAL_VARIANTS: number[];
    STAIR_VARIANTS: number[];
  }
> = {
  [LevelPlanet.DUNGEONS]: {
    BIOMES: LEVEL_BIOMES_DUNGEONS,
    SCENERY_DENSITY: 0.3,
    SCENERY_VARIANTS: 4,
    CRYSTAL_VARIANTS: [0, 1],
    STAIR_VARIANTS: [0, 1],
  },
  [LevelPlanet.CRYPTO]: {
    BIOMES: LEVEL_BIOMES_CRYPTO,
    SCENERY_DENSITY: 0.3,
    SCENERY_VARIANTS: 8,
    CRYSTAL_VARIANTS: [2, 3],
    STAIR_VARIANTS: [2, 3],
  },
};
