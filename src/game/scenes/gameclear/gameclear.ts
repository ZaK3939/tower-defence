import { Interface } from "phaser-react-ui";

import { GameScene } from "@type/game";

import { GameclearUI } from "./interface";
import { Scene } from "..";

export class Gameclear extends Scene {
  constructor() {
    super(GameScene.GAMECLEAR);
  }

  public create(data: any) {
    new Interface(this, GameclearUI, data);
  }
}
