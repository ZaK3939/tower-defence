import EventEmitter from "events";

import Phaser from "phaser";

import { DIFFICULTY } from "@const/world/difficulty";

import { IWorld } from "@type/world";
import { AttackerEvents, IAttacker } from "@type/world/attacker";
import {
  EnemyAudio,
  EnemyBuildData,
  EnemySpawnPayload,
  EnemyVariant,
  IEnemy,
} from "@type/world/entities/npc/enemy";

import { ENEMIES } from "@const/world/entities/enemies";
import { NoticeType } from "@type/screen";
import {
  progressionQuadratic,
  progressionQuadraticMixed,
} from "@lib/difficulty";
import { Level } from "./level";
import { Vector2D } from "@type/world/level";
import { INPC } from "@type/world/entities/npc";
import { EntityType } from "@type/world/entities";
import { equalPositions } from "@lib/utils";
import {
  ENEMY_SPAWN_DISTANCE_FROM_BUILDING,
  ENEMY_SPAWN_DISTANCE_FROM_PLAYER,
} from "@const/world/entities/enemy";
import { IBuilding } from "@type/world/entities/building";
import { LEVEL_TILE_SIZE } from "@const/world/level";

export class Attacker extends EventEmitter implements IAttacker {
  readonly scene: IWorld;

  private _isBuild: boolean = false;

  public get isBuild() {
    return this._isBuild;
  }

  private set isBuild(v) {
    this._isBuild = v;
  }

  private enemyPreview: Nullable<Phaser.GameObjects.Image> = null;

  private enemies: Partial<Record<EnemyVariant, IEnemy[]>> = {};

  private _variant: Nullable<EnemyVariant> = null;

  public get variant() {
    return this._variant;
  }

  private set variant(v) {
    this._variant = v;
  }
  constructor(scene: IWorld) {
    super();

    this.scene = scene;

    this.setMaxListeners(0);
    this.handleKeyboard();
  }

  public destroy() {
    this.close();
    this.removeAllListeners();
  }

  public update() {
    if (this.isCanSpawn()) {
      if (this.isBuild) {
        this.updateEnemyPreview();
      } else {
        if (this.scene.wave.isGoing) {
          this.open();
        }
      }
    } else if (this.isBuild) {
      this.close();
    }
  }

  public isEnemyAllowByWave(variant: EnemyVariant) {
    const spawnWaveRange = ENEMIES[variant].SpawnWaveRange;

    if (spawnWaveRange) {
      const currentWave = this.scene.wave.number;
      return (
        currentWave >= spawnWaveRange[0] && currentWave <= spawnWaveRange[1]
      );
    }
    return true;
  }

  public setEnemyVariant(variant: EnemyVariant) {
    if (this.variant === variant) {
      return;
    }

    const EnemyInstance = ENEMIES[variant];

    if (!this.isEnemyAllowByWave(variant)) {
      this.scene.game.screen.notice(
        NoticeType.ERROR,
        `Will be available on ${EnemyInstance.SpawnWaveRange?.join("-")} wave`
      );

      return;
    }

    this.scene.sound.play(EnemyAudio.SELECT);

    this.variant = variant;

    if (this.enemyPreview) {
      this.enemyPreview.setTexture(EnemyInstance.Texture);
    }
  }

  public unsetEnemyVariant() {
    if (this.variant === null) {
      return;
    }

    this.scene.sound.play(EnemyAudio.UNSELECT);

    this.clearEnemyVariant();
  }

  private open() {
    if (this.isBuild) {
      console.log("open", this.isBuild);
      return;
    }

    this.createEnemyPreview();

    this.scene.input.on(
      Phaser.Input.Events.POINTER_UP,
      this.onMouseClick,
      this
    );

    this.isBuild = true;

    this.emit(AttackerEvents.BUILD_START);
  }

  public close() {
    if (!this.isBuild) {
      return;
    }

    this.scene.input.off(Phaser.Input.Events.POINTER_UP, this.onMouseClick);

    this.destroyEnemyPreview();

    this.isBuild = false;

    this.emit(AttackerEvents.BUILD_STOP);
  }

  public getEnemyLimit(variant: EnemyVariant): Nullable<number> {
    if (!ENEMIES[variant].Limit) {
      return null;
    } else {
      const limit = progressionQuadraticMixed({
        defaultValue: ENEMIES[variant].Limit ?? 1,
        scale: DIFFICULTY.WAVE_ENEMIES_COUNT_GROWTH,
        level: this.scene.wave.number,
      });
      return limit;
    }
  }

  public getEnemiesByVariant<T extends IEnemy>(variant: EnemyVariant) {
    return (this.enemies[variant] ?? []) as T[];
  }

  public isEnemyLimitReached(variant: EnemyVariant) {
    const limit = this.getEnemyLimit(variant);
    if (limit) {
      return this.getEnemiesByVariant(variant).length >= limit;
    }

    return false;
  }

  public createEnemy(data: EnemyBuildData) {
    const EnemyInstance = ENEMIES[data.variant];
    const enemy = new EnemyInstance(this.scene, {
      positionAtMatrix: data.positionAtMatrix,
    });

    let list = this.enemies[data.variant];

    if (list) {
      list.push(enemy);
    } else {
      list = [enemy];
      this.enemies[data.variant] = list;
    }

    enemy.on(Phaser.GameObjects.Events.DESTROY, () => {
      if (list) {
        const index = list.indexOf(enemy);

        if (index !== -1) {
          list.splice(index, 1);
        }
      }
    });

    return enemy;
  }

  private updateEnemyPreview() {
    if (!this.enemyPreview) {
      return;
    }

    const positionAtMatrix = this.getAssumedPosition();
    const tilePosition = { ...positionAtMatrix, z: 1 };
    const positionAtWorld = Level.ToWorldPosition(tilePosition);
    const depth = Level.GetTileDepth(positionAtWorld.y, tilePosition.z) + 1;

    this.enemyPreview.setPosition(positionAtWorld.x, positionAtWorld.y);
    this.enemyPreview.setDepth(depth);
    this.enemyPreview.setAlpha(this.isAllowSpawn() ? 1.0 : 0.25);
  }

  private createEnemyPreview() {
    if (!this.variant) {
      return;
    }

    const EnemyInstance = ENEMIES[this.variant];

    this.enemyPreview = this.scene.add.image(0, 0, EnemyInstance.Texture);
    this.enemyPreview.setOrigin(0.5, LEVEL_TILE_SIZE.origin);

    this.updateEnemyPreview();
  }

  private destroyEnemyPreview() {
    if (!this.enemyPreview) {
      return;
    }

    this.enemyPreview.destroy();
    this.enemyPreview = null;
  }

  private onMouseClick(pointer: Phaser.Input.Pointer) {
    if (pointer.button === 0) {
      this.spawn();
    } else if (pointer.button === 2) {
      this.unsetEnemyVariant();
    }
  }

  private isCanSpawn() {
    return this.variant !== null && !this.scene.player.live.isDead();
  }

  private isAllowSpawn() {
    if (!this.scene.wave.isGoing) {
      this.scene.game.screen.notice(
        NoticeType.WARN,
        `You cant spawn enemies before wave start`
      );
      return false;
    }
    const now = this.scene.getTime();

    if (
      this.scene.wave.spawnedEnemiesCount >= this.scene.wave.enemiesMaxCount
    ) {
      this.scene.game.screen.notice(
        NoticeType.WARN,
        `You have maximum ${this.scene.wave.enemiesMaxCount} enemies on this wave`
      );
      return false;
    }
    if (this.scene.wave.nextSpawnTimestamp > now) {
      return false;
    }

    const positionAtMatrix = this.getAssumedPosition();

    const biome = this.scene.level.map.getAt(positionAtMatrix);

    if (!biome?.solid) {
      return false;
    }

    const isFreeFromTile = this.scene.level.isFreePoint({
      ...positionAtMatrix,
      z: 1,
    });

    if (!isFreeFromTile) {
      return false;
    }

    const buildings = this.scene.getEntities<IBuilding>(EntityType.BUILDING);

    const distanceFromPlayer = Phaser.Math.Distance.BetweenPoints(
      positionAtMatrix,
      this.scene.player.positionAtMatrix
    );

    // Calculate if positionAtMatrix is far enough from all buildings
    const isFarFromAllBuildings = buildings.every(
      (building) =>
        Phaser.Math.Distance.BetweenPoints(
          positionAtMatrix,
          building.positionAtMatrix
        ) >= ENEMY_SPAWN_DISTANCE_FROM_BUILDING
    );

    // Check if positionAtMatrix meets both conditions
    if (
      distanceFromPlayer < ENEMY_SPAWN_DISTANCE_FROM_PLAYER ||
      !isFarFromAllBuildings
    ) {
      // positionAtMatrix doesn't meet all conditions
      return false;
    }

    let spritePositionsAtMatrix = this.scene.player.getAllPositionsAtMatrix();

    this.scene.getEntities<INPC>(EntityType.NPC).forEach((npc) => {
      spritePositionsAtMatrix = spritePositionsAtMatrix.concat(
        npc.getAllPositionsAtMatrix()
      );
    });

    const isFreeFromSprite = spritePositionsAtMatrix.every(
      (point) => !equalPositions(positionAtMatrix, point)
    );

    if (!isFreeFromSprite) {
      return false;
    }

    return true;
  }

  private spawn() {
    if (!this.variant || !this.isAllowSpawn()) {
      return;
    }

    const EnemyInstance = ENEMIES[this.variant];

    if (this.isEnemyLimitReached(this.variant)) {
      this.scene.game.screen.notice(
        NoticeType.ERROR,
        `You have maximum ${EnemyInstance.Name}`
      );

      return;
    }

    if (this.scene.player.resources < EnemyInstance.Cost) {
      this.scene.game.screen.notice(NoticeType.ERROR, "Not enough ethereum");
      return;
    }

    this.createEnemy({
      variant: this.variant,
      positionAtMatrix: this.getAssumedPosition(),
    });

    const enemySpawnInfo: EnemySpawnPayload = {
      variant: this.variant,
      positionAtMatrix: this.getAssumedPosition(),
    };

    this.scene.game.network.sendEnemySpawnInfo(enemySpawnInfo);

    const pause = progressionQuadratic({
      defaultValue: DIFFICULTY.WAVE_ENEMIES_SPAWN_PAUSE,
      scale: DIFFICULTY.WAVE_ENEMIES_SPAWN_PAUSE_GROWTH,
      level: this.scene.wave.number,
    });

    this.scene.wave.nextSpawnTimestamp =
      this.scene.getTime() + Math.max(pause, 500);
    this.scene.wave.spawnedEnemiesCount++;

    this.scene.player.takeResources(EnemyInstance.Cost);

    this.scene.sound.play(EnemyAudio.BUILD);
  }

  private clearEnemyVariant() {
    this.close();
    this.variant = null;
  }

  private handleKeyboard() {
    this.scene.input.keyboard?.on(
      Phaser.Input.Keyboard.Events.ANY_KEY_UP,
      (event: KeyboardEvent) => {
        if (this.scene.game.world.wave.isGoing) {
          return;
        }
        if (Number(event.key)) {
          this.switchEnemyVariant(Number(event.key) - 1);
        }
      }
    );
  }

  private getAssumedPosition() {
    return Level.ToMatrixPosition({
      x: this.scene.input.activePointer.worldX,
      y: this.scene.input.activePointer.worldY,
    });
  }

  private switchEnemyVariant(index: number) {
    const variant = Object.values(EnemyVariant)[index];

    if (variant) {
      if (this.variant === variant) {
        this.unsetEnemyVariant();
      } else {
        this.setEnemyVariant(variant);
      }
    }
  }
}
