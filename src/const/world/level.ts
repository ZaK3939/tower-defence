import { WorldLayerParams } from "gen-biome";

import { TileMeta, LevelBiomes, LevelPlanet } from "@type/world/level";
import { LEVEL_BIOMES_EARTH } from "./planet/earth";
import { LEVEL_BIOMES_MARS } from "./planet/mars";

export const LEVEL_MAP_SIZE = 100;

export const LEVEL_TILE_SIZE: TileMeta = {
  width: 42,
  height: 48,
  origin: 0.25,
  persperctive: 0.571,
  deg: 29.726,
};

export const LEVEL_MAP_MAX_HEIGHT = 4;

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
  }
> = {
  [LevelPlanet.EARTH]: {
    BIOMES: LEVEL_BIOMES_EARTH,
    SCENERY_DENSITY: 2.0,
    SCENERY_VARIANTS: 4,
    CRYSTAL_VARIANTS: [1],
  },
  [LevelPlanet.MARS]: {
    BIOMES: LEVEL_BIOMES_MARS,
    SCENERY_DENSITY: 1.5,
    SCENERY_VARIANTS: 8,
    CRYSTAL_VARIANTS: [0, 2],
  },
};
