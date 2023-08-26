import { DIFFICULTY } from "@const/world/difficulty";
import { Building } from "@game/scenes/world/entities/building";
import { Particles } from "@game/scenes/world/effects";
import { GameSettings } from "@type/game";
import { TutorialStep, TutorialStepState } from "@type/tutorial";
import { IWorld } from "@type/world";
import { ParticlesTexture } from "@type/world/effects";
import {
  BuildingParam,
  BuildingTexture,
  BuildingVariant,
  BuildingVariantData,
  BuildingIcon,
} from "@type/world/entities/building";

export class BuildingGenerator extends Building {
  static Name = "Generator";

  static Description = "Generates Ethereum for builds and upgrades";

  static Params: BuildingParam[] = [
    {
      label: "Health",
      value: DIFFICULTY.BUILDING_GENERATOR_HEALTH,
      icon: BuildingIcon.HEALTH,
    },
  ];

  static Texture = BuildingTexture.GENERATOR;

  static Cost = DIFFICULTY.BUILDING_GENERATOR_COST;

  static Health = DIFFICULTY.BUILDING_GENERATOR_HEALTH;

  static Limit = true;

  constructor(scene: IWorld, data: BuildingVariantData) {
    super(scene, {
      ...data,
      variant: BuildingVariant.GENERATOR,
      health: BuildingGenerator.Health,
      texture: BuildingGenerator.Texture,
      delay: {
        default: DIFFICULTY.BUILDING_GENERATOR_DELAY,
        growth: DIFFICULTY.BUILDING_GENERATOR_DELAY_GROWTH,
      },
    });

    if (
      this.scene.game.tutorial.state(TutorialStep.BUILD_GENERATOR) ===
      TutorialStepState.IN_PROGRESS
    ) {
      this.scene.game.tutorial.complete(TutorialStep.BUILD_GENERATOR);
      this.scene.game.tutorial.start(TutorialStep.STOP_BUILD);
    }
  }

  public update() {
    super.update();

    if (!this.isActionAllowed()) {
      return;
    }

    this.generateResource();
    this.pauseActions();
  }

  public getTopCenterByLevel() {
    return {
      x: this.x,
      y: this.y - 6 + (3 - Math.min(this.upgradeLevel, 3)) * 8,
    };
  }

  private generateResource() {
    this.scene.player.giveResources(1);

    if (!this.scene.game.isSettingEnabled(GameSettings.EFFECTS)) {
      return;
    }

    new Particles(this, {
      key: "generate",
      texture: ParticlesTexture.BIT,
      positionAtWorld: this.getTopCenterByLevel(),
      params: {
        duration: 300,
        lifespan: { min: 100, max: 200 },
        scale: { start: 1.0, end: 0.5 },
        alpha: { start: 1.0, end: 0.0 },
        speed: 60,
        maxAliveParticles: 8,
        tint: 0x2dffb2,
      },
    });
  }
}
