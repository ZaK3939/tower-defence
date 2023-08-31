import Phaser from "phaser";

import { IWorld } from "@type/world";
import { Vector2D } from "@type/world/level";

export interface IStair extends Phaser.GameObjects.Image {
  readonly scene: IWorld;

  /**
   * Take resources from stair and destroy him.
   */
  pickup(): void;
}

export enum StairTexture {
  STAIR = "stair",
}

export enum StairAudio {
  PICKUP = "stair/pickup",
}

export type StairData = {
  positionAtMatrix: Vector2D;
  variant?: number;
};
