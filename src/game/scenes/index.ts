import * as Phaser from "phaser";

import { IScene } from "@type/scene";
import { IGame } from "@type/game";

export class Scene extends Phaser.Scene implements IScene {
  readonly game: IGame;
}
