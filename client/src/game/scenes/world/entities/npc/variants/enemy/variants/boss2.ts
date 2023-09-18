import { IWorld } from "@type/world";
import {
  EnemyVariantData,
  EnemyTexture,
  EnemyParam,
  EnemyVariant,
} from "@type/world/entities/npc/enemy";

import { Enemy } from "../enemy";
import { DIFFICULTY } from "@const/world/difficulty";
import { progressionQuadratic } from "@lib/difficulty";

export class EnemyBoss2 extends Enemy {
  static Name = "Boss2";

  static Description = "Basic attack of enemies";
  static Cost = 0;
  static SpawnWaveRange = [10, 10];
  static Params: EnemyParam[] = [];
  static Texture = EnemyTexture.BOSS2;
  static Limit = 1;
  constructor(scene: IWorld, data: EnemyVariantData) {
    super(scene, {
      ...data,
      variant: EnemyVariant.BOSS2,
      texture: EnemyTexture.BOSS2,
      score: 100,
      multipliers: {
        health: 5.0,
        damage: 2.2,
        speed: 0.2,
      },
    });

    const armour = progressionQuadratic({
      defaultValue:
        DIFFICULTY.ENEMY_ARMOUR * scene.game.getDifficultyMultiplier(),
      scale: DIFFICULTY.ENEMY_ARMOUR_GROWTH,
      level: scene.wave.number,
      retardationLevel: DIFFICULTY.ENEMY_ARMOUR_GROWTH_RETARDATION_LEVEL,
    });

    this.live.setMaxArmour(armour);
    this.live.setArmour(armour);

    this.addIndicator({
      color: 0x00d4ff,
      value: () => this.live.armour / this.live.maxArmour,
    });
  }
}
