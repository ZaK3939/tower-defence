import { World, WorldBiomeParams } from "gen-biome";

import { IWorld } from "@type/world";
import { ITileMatrix } from "./tile-matrix";
import { INavigator } from "@type/world/entities/utils/navigator";
import { Effect } from "../../game/scenes/world/effects";

export interface ILevel extends ITileMatrix {
  readonly scene: IWorld;

  /**
   * Path finder.
   */
  readonly navigator: INavigator;

  /**
   * Map manager.
   */
  readonly map: World<LevelBiome>;

  /**
   * Planet type.
   */
  readonly planet: LevelPlanet;

  /**
   * Effects on ground.
   */
  readonly effectsOnGround: Effect[];

  /**
   * Tilemap ground layer.
   */
  readonly groundLayer: Phaser.Tilemaps.TilemapLayer;

  /**
   * Collide grid for navigation.
   */
  readonly gridCollide: boolean[][];

  /**
   * Solid grid for navigation.
   */
  readonly gridSolid: boolean[][];

  /**
   * Let loose map tiles effects.
   */
  looseEffects(): void;

  /**
   * Get spawn positions at matrix.
   * @param target - Spawn target
   * @param grid - Grid size
   */
  readSpawnPositions(target: SpawnTarget, grid?: number): Vector2D[];

  /**
   * Check is presence of tile between world positions.
   * @param positionA - Position at world
   * @param positionB - Position at world
   */
  hasTilesBetweenPositions(positionA: Vector2D, positionB: Vector2D): boolean;

  /**
   * Get biome by type.
   * @param type - Type
   */
  getBiome(type: BiomeType): Nullable<LevelBiome>;
}

export enum TileType {
  MAP = "MAP",
  BUILDING = "BUILDING",
  CRYSTAL = "CRYSTAL",
  SCENERY = "SCENERY",
}

export type TileMeta = {
  origin: number;
  persperctive: number;
  width: number;
  height: number;
  deg: number;
};

export enum SpawnTarget {
  ENEMY = "ENEMY",
  PLAYER = "PLAYER",
  SCENERY = "SCENERY",
  CRYSTAL = "CRYSTAL",
}

export type LevelBiomes = Array<{
  params?: WorldBiomeParams;
  data: LevelBiome;
}>;

export type LevelBiome = {
  type: BiomeType;
  tileIndex: number | [number, number];
  z: number;
  collide: boolean;
  solid: boolean;
  friction?: number;
  spawn: SpawnTarget[];
};

export enum LevelPlanet {
  EARTH = "EARTH",
  MOON = "MOON",
  MARS = "MARS",
}

export enum LevelSceneryTexture {
  EARTH = "level/earth/scenery",
  MOON = "level/moon/scenery",
  MARS = "level/mars/scenery",
}

export enum LevelTilesetTexture {
  EARTH = "level/earth/tileset",
  MOON = "level/moon/tileset",
  MARS = "level/mars/tileset",
}

export enum BiomeType {
  WATER = "WATER",
  SAND = "SAND",
  GRASS = "GRASS",
  RUBBLE = "RUBBLE",
  MOUNT = "MOUNT",
  SNOW = "SNOW",
}

export type Vector2D = {
  x: number;
  y: number;
};

export type Vector3D = {
  x: number;
  y: number;
  z: number;
};
