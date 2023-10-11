import EventEmitter from "events";
import { IWorld } from "./world";
import { Vector2D } from "@type/world/level";
import {
  BuildingBuildData,
  BuildingVariant,
  IBuilding,
} from "./entities/building";

export interface IBuilder extends EventEmitter {
  readonly scene: IWorld;

  /**
   * Build state.
   */
  readonly isBuild: boolean;

  /**
   * Selected building variant.
   */
  readonly variant: Nullable<BuildingVariant>;

  /**
   * Radius of build area.
   */
  readonly radius: number;

  /**
   * Current active building.
   */
  selectedBuilding: Nullable<IBuilding>;

  /**
   * Destroy builder.
   */
  destroy(): void;

  /**
   * Toggle build state and update build area.
   */
  update(): void;

  /**
   * Close builder.
   */
  close(): void;

  /**
   * Create building.
   * @param data - Building data
   */
  createBuilding(data: BuildingBuildData): IBuilding;

  /**
   * Set current building variant.
   */
  setBuildingVariant(variant: BuildingVariant): void;

  /**
   * Unset building variant.
   */
  unsetBuildingVariant(force?: boolean): void;

  /**
   * Update radius of build area.
   * @param radius - Radius
   */
  setBuildAreaRadius(radius: number): void;

  /**
   * Add rubble foundation on position.
   * @param position - Position at matrix
   */
  addFoundation(position: Vector2D): void;

  /**
   * Get building limit on current wave.
   * @param variant - Building variant
   */
  getBuildingLimit(variant: BuildingVariant): Nullable<number>;

  /**
   * Check is building limit reached.
   * @param variant - Building variant
   */
  isBuildingLimitReached(variant: BuildingVariant): boolean;

  /**
   * Check is tutorial allow building variant.
   * @param variant - Building variant
   */
  isBuildingAllowByTutorial(variant: BuildingVariant): boolean;

  /**
   * Check is current wave allow building variant.
   * @param variant - Building variant
   */
  isBuildingAllowByWave(variant: BuildingVariant): boolean;

  /**
   * Get list of buildings with a specific variant.
   * @param variant - Varaint
   */
  getBuildingsByVariant<T extends IBuilding>(variant: BuildingVariant): T[];

  /**
   * delete all buildings variant.
   */
  removeAllBuildings(): void;
}

export enum BuilderEvents {
  BUILD = "build",
  BUY_AMMO = "buy_ammo",
  BUILD_START = "build_start",
  BUILD_STOP = "build_stop",
}
