import { Interface } from "phaser-react-ui";

import { GameScene } from "@type/game";

import { GameoverUI } from "./interface";
import { Scene } from "..";

export class Gameover extends Scene {
  constructor() {
    super(GameScene.GAMEOVER);
  }

  public create(data: any) {
    new Interface(this, GameoverUI, data);
  }
}
