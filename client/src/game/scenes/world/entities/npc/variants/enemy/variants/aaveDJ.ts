import { IWorld } from "@type/world";
import {
  EnemyVariantData,
  EnemyTexture,
  EnemyParam,
  EnemyVariant,
} from "@type/world/entities/npc/enemy";

import { Enemy } from "../enemy";

export class EnemyAaveDJ extends Enemy {
  static Name = "AaveDJ";

  static Description = "Basic attack of enemies";
  static Cost = 0;
  static Params: EnemyParam[] = [];
  static Texture = EnemyTexture.AAVEDJ;
  static SpawnWaveRange = [5, 10];

  constructor(scene: IWorld, data: EnemyVariantData) {
    super(scene, {
      ...data,
      variant: EnemyVariant.AAVEDJ,
      texture: EnemyTexture.AAVEDJ,
      multipliers: {
        health: 2.0,
        damage: 0.4,
        speed: 0.7,
      },
    });
  }
}
