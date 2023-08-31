import { DIFFICULTY } from "@const/world/difficulty";
import { Building } from "@game/scenes/world/entities/building";
import { progressionQuadratic } from "@lib/difficulty";
import { getClosest } from "@lib/utils";
import { TutorialStep } from "@type/tutorial";
import { IWorld } from "@type/world";
import { BuilderEvents } from "@type/world/builder";
import { EntityType } from "@type/world/entities";
import {
  BuildingData,
  BuildingIcon,
  BuildingParam,
  BuildingVariant,
  IBuilding,
  IBuildingAmmunition,
  IBuildingTower,
  BuildingAudio,
  BuildingDataPayload,
} from "@type/world/entities/building";
import { IEnemy } from "@type/world/entities/npc/enemy";
import { PlayerSuperskill } from "@type/world/entities/player";
import { IShot, ShotParams } from "@type/world/entities/shot";

export class BuildingTower extends Building implements IBuildingTower {
  private shot: IShot;

  private shotDefaultParams: ShotParams;

  private needReload: boolean = false;

  private _ammo: number = DIFFICULTY.BUIDLING_TOWER_AMMO_AMOUNT;

  public get ammo() {
    return this._ammo;
  }

  private set ammo(v) {
    this._ammo = v;
  }

  constructor(scene: IWorld, data: BuildingData, shot: IShot) {
    super(scene, data);

    shot.setInitiator(this);
    this.shot = shot;
    this.shotDefaultParams = shot.params;

    this.handleAmmunitionRelease();
  }

  public update() {
    super.update();

    if (this.isCanAttack()) {
      this.attack();
    }
  }

  public getInfo() {
    const info: BuildingParam[] = [];
    const params = this.getShotCurrentParams();

    if (params.damage) {
      info.push({
        label: "Damage",
        icon: BuildingIcon.DAMAGE,
        value: params.damage,
      });
    }

    if (params.freeze) {
      info.push({
        label: "Freeze",
        icon: BuildingIcon.DAMAGE,
        value: `${(params.freeze / 1000).toFixed(1)} s`,
      });
    }

    if (params.speed) {
      info.push({
        label: "Speed",
        icon: BuildingIcon.SPEED,
        value: params.speed,
      });
    }

    info.push({
      label: "Ammo",
      icon: BuildingIcon.AMMO,
      attention: this.ammo === 0,
      value: `${this.ammo}/${DIFFICULTY.BUIDLING_TOWER_AMMO_AMOUNT}`,
    });

    return super.getInfo().concat(info);
  }

  public getDataPayload() {
    return {
      ...super.getDataPayload(),
      ammo: this.ammo,
    };
  }

  public loadDataPayload(data: BuildingDataPayload) {
    super.loadDataPayload(data);

    if (data.ammo) {
      this.ammo = data.ammo;
    }
  }

  private isCanAttack() {
    return (
      this.ammo > 0 &&
      this.isActionAllowed() &&
      !this.scene.player.live.isDead()
    );
  }

  private attack() {
    const target = this.getTarget();

    if (!target) {
      return;
    }

    this.shoot(target);
    this.pauseActions();

    this.ammo--;

    if (this.ammo === 0) {
      this.reload();
    }
  }

  private getShotCurrentParams() {
    const params: ShotParams = {
      maxDistance: this.getActionsRadius(),
    };

    if (this.shotDefaultParams.speed) {
      params.speed = progressionQuadratic({
        defaultValue: this.shotDefaultParams.speed,
        scale: DIFFICULTY.BUIDLING_TOWER_SHOT_SPEED_GROWTH,
        level: this.upgradeLevel,
      });
    }

    if (this.shotDefaultParams.damage) {
      const rage = this.scene.player.activeSuperskills[PlayerSuperskill.RAGE];

      params.damage =
        progressionQuadratic({
          defaultValue: this.shotDefaultParams.damage,
          scale: DIFFICULTY.BUIDLING_TOWER_SHOT_DAMAGE_GROWTH,
          level: this.upgradeLevel,
        }) * (rage ? 2 : 1);
    }

    if (this.shotDefaultParams.freeze) {
      params.freeze = progressionQuadratic({
        defaultValue: this.shotDefaultParams.freeze,
        scale: DIFFICULTY.BUIDLING_TOWER_SHOT_FREEZE_GROWTH,
        level: this.upgradeLevel,
      });
    }

    return params;
  }

  private getAmmunition() {
    const ammunitions = this.scene.builder
      .getBuildingsByVariant<IBuildingAmmunition>(BuildingVariant.AMMUNITION)
      .filter(
        (building) =>
          building.ammo > 0 &&
          building.actionsAreaContains(this.getPositionOnGround())
      );

    if (ammunitions.length === 0) {
      return null;
    }

    const priorityAmmunition = ammunitions.reduce((max, current) =>
      max.ammo > current.ammo ? max : current
    );

    return priorityAmmunition;
  }

  private reload() {
    const ammunition = this.getAmmunition();

    if (ammunition) {
      this.ammo += ammunition.use(DIFFICULTY.BUIDLING_TOWER_AMMO_AMOUNT);

      if (this.needReload) {
        this.removeAlertIcon();
        this.needReload = false;

        if (this.scene.game.sound.getAll(BuildingAudio.RELOAD).length === 0) {
          this.scene.game.sound.play(BuildingAudio.RELOAD);
        }

        this.scene.game.tutorial.complete(TutorialStep.RELOAD_TOWER);
      }
    } else if (!this.needReload) {
      this.addAlertIcon();
      this.needReload = true;

      this.scene.game.tutorial.start(TutorialStep.RELOAD_TOWER);
    }
  }

  private getTarget() {
    const enemies = this.scene
      .getEntities<IEnemy>(EntityType.ENEMY)
      .filter((enemy) => {
        if (enemy.alpha < 1.0 || enemy.live.isDead()) {
          return false;
        }

        const position = enemy.getPositionOnGround();

        return (
          this.actionsAreaContains(position) &&
          !this.scene.level.hasTilesBetweenPositions(
            position,
            this.getPositionOnGround()
          )
        );
      });

    return getClosest(enemies, this);
  }

  private shoot(target: IEnemy) {
    this.shot.params = this.getShotCurrentParams();
    this.shot.shoot(target);
  }

  private handleAmmunitionRelease() {
    const handler = (building: IBuilding) => {
      if (this.needReload && building.variant === BuildingVariant.AMMUNITION) {
        this.reload();
      }
    };

    this.scene.builder.on(BuilderEvents.UPGRADE, handler);
    this.scene.builder.on(BuilderEvents.BUILD, handler);

    this.on(Phaser.GameObjects.Events.DESTROY, () => {
      this.scene.builder.off(BuilderEvents.UPGRADE, handler);
      this.scene.builder.off(BuilderEvents.BUILD, handler);
    });
  }
}
