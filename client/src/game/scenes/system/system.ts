import { CONTROL_KEY } from "@const/controls";

import { getAssetsPack, loadFontFace, loadAtlas } from "@lib/assets";
import { removeLoading, setLoadingStatus } from "@lib/state";
import { GameScene, GameState } from "@type/game";
import { InterfaceFont } from "@type/interface";
import { Scene } from "..";
import { MenuPage } from "@type/menu";
import { WawaAtlas } from "@type/world/entities/player";

export class System extends Scene {
  constructor() {
    super({
      key: GameScene.SYSTEM,
      pack: getAssetsPack(),
    });

    setLoadingStatus("ASSETS LOADING");
  }

  preload() {
    loadAtlas(this, WawaAtlas);
  }

  public async create() {
    await this.game.loadPayload();
    Promise.all([
      loadFontFace(InterfaceFont.PIXEL_LABEL, "pixel_label.ttf"),
      loadFontFace(InterfaceFont.PIXEL_TEXT, "pixel_text.ttf"),
    ]);

    removeLoading();

    this.scene.launch(GameScene.WORLD);
    this.scene.launch(GameScene.MENU, {
      defaultPage: MenuPage.NEW_GAME,
    });

    this.scene.bringToTop();

    removeLoading();

    if (!this.game.device.os.desktop) {
      this.input.addPointer(1);
    }

    this.input.keyboard?.on(CONTROL_KEY.PAUSE, () => {
      if (this.game.isPaused) {
        // System pause
        return;
      }

      switch (this.game.state) {
        case GameState.FINISHED: {
          this.game.stopGame();
          break;
        }
        case GameState.PAUSED: {
          this.game.resumeGame();
          break;
        }
        case GameState.STARTED: {
          this.game.pauseGame();
          break;
        }
      }
    });
  }
}
