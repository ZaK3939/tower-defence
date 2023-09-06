import { IWorld } from "@type/world";
import { BuildingVariant } from "@type/world/entities/building";
import {
  EnemyVariantData,
  EnemyTexture,
  EnemyParam,
  EnemyVariant,
} from "@type/world/entities/npc/enemy";

import { Enemy } from "../enemy";

export class EnemyGitcoinFighter extends Enemy {
  static Name = "GitcoinFighter";

  static Description = "Basic attack of enemies";
  static Cost = 0;
  static SpawnWaveRange = [8, 10];
  static Params: EnemyParam[] = [];
  static Texture = EnemyTexture.GITCOINFIGHTER;

  constructor(scene: IWorld, data: EnemyVariantData) {
    super(scene, {
      ...data,
      variant: EnemyVariant.GITCOINFIGHTER,
      texture: EnemyTexture.GITCOINFIGHTER,
      multipliers: {
        health: 1.3,
        damage: 0.7,
        speed: 0.9,
      },
    });
  }

  public update() {
    super.update();

    const isVisible = this.scene.builder
      .getBuildingsByVariant(BuildingVariant.RADAR)
      .some((building) => building.actionsAreaContains(this));

    this.setAlpha(isVisible ? 1.0 : 0.5);
  }
}
