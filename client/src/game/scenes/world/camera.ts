import Phaser from "phaser";

import {
  CAMERA_MAX_ZOOM,
  CAMERA_MIN_ZOOM,
  CAMERA_ZOOM,
} from "@const/world/camera";
import { Level } from "@game/scenes/world/level";
import { IWorld } from "@type/world";
import { ICamera } from "@type/world/camera";
import { LEVEL_MAP_SIZE } from "@const/world/level";

export class Camera implements ICamera {
  private scene: IWorld;

  constructor(scene: IWorld) {
    this.scene = scene;
  }

  public zoomOut() {
    this.scene.cameras.main.zoomTo(CAMERA_MIN_ZOOM, 10 * 1000);
  }

  public shake() {
    this.scene.cameras.main.shake(100, 0.0005);
  }

  public focusOn(object: Phaser.GameObjects.Sprite) {
    const camera = this.scene.cameras.main;

    camera.resetFX();
    camera.startFollow(object);

    camera.setZoom(CAMERA_ZOOM * 2);
    if (this.scene.game.device.os.desktop) {
      camera.setZoom(CAMERA_MAX_ZOOM * 2);
      camera.zoomTo(CAMERA_MAX_ZOOM, 200);
    } else {
      camera.setZoom(CAMERA_MIN_ZOOM);
    }
  }

  public focusOnLevel() {
    const camera = this.scene.cameras.main;
    const size = this.scene.level.size - 1;
    const beg = Level.ToWorldPosition({ x: 0, y: size, z: 0 });
    const end = Level.ToWorldPosition({ x: size, y: 0, z: 0 });

    camera.setZoom(CAMERA_ZOOM);
    camera.pan(beg.x + this.scene.sys.canvas.width / 2, beg.y, 0);
    setTimeout(() => {
      camera.pan(end.x - this.scene.sys.canvas.width / 2, end.y, 2 * 60 * 1000);
    }, 0);
  }

  public addZoomControl() {
    if (this.scene.game.device.os.desktop) {
      this.scene.input.on(
        Phaser.Input.Events.POINTER_WHEEL,
        (pointer: Phaser.Input.Pointer) => {
          const force = pointer.deltaY / 500;

          this.updateZoom(force);
        }
      );
    } else {
      this.scene.input.on(Phaser.Input.Events.POINTER_MOVE, () => {
        if (this.scene.game.screen.isJoystickUsing()) {
          return;
        }

        const isMultitouch =
          this.scene.input.pointer1.isDown && this.scene.input.pointer2.isDown;

        if (!isMultitouch) {
          return;
        }

        const distanceStart = Phaser.Math.Distance.Between(
          this.scene.input.pointer1.downX,
          this.scene.input.pointer1.downY,
          this.scene.input.pointer2.downX,
          this.scene.input.pointer2.downY
        );
        const distanceCurrent = Phaser.Math.Distance.BetweenPoints(
          this.scene.input.pointer1.position,
          this.scene.input.pointer2.position
        );
        const force = (distanceStart - distanceCurrent) / 2000;

        this.updateZoom(force);
      });
    }
  }

  private updateZoom(value: number) {
    const camera = this.scene.cameras.main;
    const zoom = camera.zoom - value;
    const clampZoom = Math.min(
      CAMERA_MAX_ZOOM,
      Math.max(CAMERA_MIN_ZOOM, zoom)
    );

    camera.zoomTo(clampZoom, 10);
  }

  public focusOnMapCenterAndZoomOut() {
    const camera = this.scene.cameras.main;
    const size = LEVEL_MAP_SIZE;

    // Calculate the map's center position in world coordinates
    const centerX =
      (Level.ToWorldPosition({ x: 0, y: size, z: 0 }).x +
        Level.ToWorldPosition({ x: size, y: 0, z: 0 }).x) /
      2;
    const centerY =
      (Level.ToWorldPosition({ x: 0, y: size, z: 0 }).y +
        Level.ToWorldPosition({ x: size, y: 0, z: 0 }).y) /
      2;

    // Pan the camera to the center of the map
    camera.pan(centerX, centerY, 0);

    // Perform the zoom out after panning
    setTimeout(() => {
      camera.zoomTo(CAMERA_ZOOM * 0.5, 10 * 1000);
    }, 0);
  }
}
