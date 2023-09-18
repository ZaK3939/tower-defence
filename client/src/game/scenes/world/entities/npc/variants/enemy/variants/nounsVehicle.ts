import { IWorld } from "@type/world";
import {
  EnemyVariantData,
  EnemyTexture,
  EnemyParam,
  EnemyVariant,
} from "@type/world/entities/npc/enemy";

import { Enemy } from "../enemy";

export class EnemyNounsVehicle extends Enemy {
  static Name = "NounsVehicle";

  static Description = "Basic attack of enemies";
  static Cost = 0;
  static Params: EnemyParam[] = [];
  static Texture = EnemyTexture.NOUNSVEHICLE;
  static SpawnWaveRange = [3, 7];

  constructor(scene: IWorld, data: EnemyVariantData) {
    super(scene, {
      ...data,
      variant: EnemyVariant.NOUNSVEHICLE,
      texture: EnemyTexture.NOUNSVEHICLE,
      multipliers: {
        health: 0.7,
        damage: 0.4,
        speed: 1.0,
      },
    });
  }
}
