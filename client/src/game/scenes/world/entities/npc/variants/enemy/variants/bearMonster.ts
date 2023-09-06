import { IWorld } from "@type/world";
import {
  EnemyVariantData,
  EnemyTexture,
  EnemyParam,
  EnemyVariant,
} from "@type/world/entities/npc/enemy";

import { Enemy } from "../enemy";

export class EnemyBearMonster extends Enemy {
  static Name = "BearMonster";

  static Description = "Basic attack of enemies";
  static Cost = 0;
  static SpawnWaveRange = [6, 10];
  static Params: EnemyParam[] = [];
  static Texture = EnemyTexture.BEARMONSTER;

  constructor(scene: IWorld, data: EnemyVariantData) {
    super(scene, {
      ...data,
      variant: EnemyVariant.BEARMONSTER,
      texture: EnemyTexture.BEARMONSTER,
      multipliers: {
        health: 1.8,
        damage: 1.0,
        speed: 0.9,
      },
    });
  }
}
