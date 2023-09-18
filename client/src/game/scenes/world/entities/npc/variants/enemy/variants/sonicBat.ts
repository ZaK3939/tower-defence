import { IWorld } from "@type/world";
import {
  EnemyVariantData,
  EnemyTexture,
  EnemyParam,
  EnemyVariant,
} from "@type/world/entities/npc/enemy";

import { Enemy } from "../enemy";

export class EnemySonicBat extends Enemy {
  static Name = "SonicBat";

  static Description = "Basic attack of enemies";
  static Cost = 0;
  static Params: EnemyParam[] = [];
  static Texture = EnemyTexture.SONICBAT;
  static SpawnWaveRange = [2, 6];

  constructor(scene: IWorld, data: EnemyVariantData) {
    super(scene, {
      ...data,
      variant: EnemyVariant.SONICBAT,
      texture: EnemyTexture.SONICBAT,
      multipliers: {
        health: 0.4,
        damage: 0.2,
        speed: 1.2,
      },
    });
  }
}
