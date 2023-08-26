import {
  EnemyTexture,
  EnemyTexturesMeta,
} from "@type/world/entities/npc/enemy";

export const ENEMY_BOSS_SPAWN_WAVE_RATE = 5;

export const ENEMY_SPAWN_POSITIONS = 10;

export const ENEMY_SPAWN_DISTANCE_FROM_PLAYER = 16;

export const ENEMY_SPAWN_DISTANCE_FROM_BUILDING = 8;

export const ENEMY_PATH_BREAKPOINT = 32;

export const ENEMY_SPAWN_POSITIONS_GRID = 4;

export const ENEMY_TEXTURE_META: EnemyTexturesMeta = {
  [EnemyTexture.RedCandle]: {
    frameRate: 4,
    size: {
      width: 35,
      height: 34.29,
      gamut: 4,
    },
  },
  [EnemyTexture.RISPER]: {
    frameRate: 4,
    size: {
      width: 50,
      height: 48.98,
      gamut: 4,
    },
  },
  [EnemyTexture.DEMON]: {
    frameRate: 4,
    size: {
      width: 49,
      height: 45,
      gamut: 4,
    },
  },
  [EnemyTexture.SPIKE]: {
    frameRate: 4,
    size: {
      width: 30,
      height: 36.73,
      gamut: 4,
    },
  },
  [EnemyTexture.UNDEAD]: {
    frameRate: 4,
    size: {
      width: 45,
      height: 45.47,
      gamut: 4,
    },
  },
  [EnemyTexture.OVERLORD]: {
    frameRate: 8,
    size: {
      width: 36,
      height: 50.93,
      gamut: 6,
    },
  },
  [EnemyTexture.IMPURE]: {
    frameRate: 8,
    size: {
      width: 52,
      height: 52,
      gamut: 6,
    },
  },
  [EnemyTexture.TERMER]: {
    frameRate: 4,
    size: {
      width: 65,
      height: 72,
      gamut: 6,
    },
  },
  [EnemyTexture.BOSS]: {
    frameRate: 4,
    size: {
      width: 193,
      height: 216,
      gamut: 12,
    },
  },
};
