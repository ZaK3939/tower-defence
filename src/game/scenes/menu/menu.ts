import { Interface } from "phaser-react-ui";

import { GameScene } from "@type/game";
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
    console.log("Menu scene created");
    if (!this.game.isStarted) {
      console.log("Start game", this.game);
      this.game.world.camera.focusOnLevel();
    }
  }
}
