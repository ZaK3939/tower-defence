import { Interface } from "phaser-react-ui";

import { GameScene, GameState } from "@type/game";
import { MenuPage } from "@type/menu";

import { MenuUI } from "./interface";
import { Scene } from "@game/scenes";

export class Menu extends Scene {
  constructor() {
    super(GameScene.MENU);
  }

  public create(data: { page?: MenuPage }) {
    new Interface(this, MenuUI, {
      defaultPage: data.page,
    });

    if (this.game.state === GameState.IDLE) {
      this.game.world.camera.focusOnLevel();
    }
  }
}
