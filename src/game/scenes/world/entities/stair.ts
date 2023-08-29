import Phaser from "phaser";

import { LEVEL_TILE_SIZE } from "@const/world/level";
import { registerAudioAssets, registerSpriteAssets } from "@lib/assets";
import { Level } from "@game/scenes/world/level";
import { IWorld } from "@type/world";
import { EntityType } from "@type/world/entities";
import {
  StairTexture,
  StairData,
  StairAudio,
  IStair,
} from "@type/world/entities/stair";
import { TileType } from "@type/world/level";
import { ITile } from "@type/world/level/tile-matrix";

export class Stair extends Phaser.GameObjects.Image implements IStair, ITile {
  readonly scene: IWorld;

  readonly tileType: TileType = TileType.STAIR;

  constructor(scene: IWorld, { positionAtMatrix, variant = 0 }: StairData) {
    const tilePosition = { ...positionAtMatrix, z: 1 };
    const positionAtWorld = Level.ToWorldPosition(tilePosition);

    super(
      scene,
      positionAtWorld.x,
      positionAtWorld.y,
      StairTexture.STAIR,
      variant
    );
    scene.addEntity(EntityType.STAIR, this);

    this.setDepth(Level.GetTileDepth(positionAtWorld.y, tilePosition.z));
    this.setOrigin(0.5, LEVEL_TILE_SIZE.origin);
    this.scene.level.putTile(this, tilePosition);
  }

  public pickup() {
    this.scene.camera.zoomOut();

    this.scene.sound.play(StairAudio.PICKUP);
    this.scene.game.clearGame();
    this.destroy();
  }
}

registerAudioAssets(StairAudio);
registerSpriteAssets(StairTexture, LEVEL_TILE_SIZE);
