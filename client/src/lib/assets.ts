import { AssetsSource, AssetsSpriteParams } from "@type/assets";
import Phaser, { Scene } from "phaser";

const ASSETS_PACK: {
  files: Phaser.Types.Loader.FileConfig[];
} = {
  files: [],
};

function normalizeAssetsFiles<T extends string>(files: AssetsSource<T>) {
  if (typeof files === "string") {
    return [files];
  }

  return Object.values(files);
}

export function registerAudioAssets(files: AssetsSource) {
  ASSETS_PACK.files = ASSETS_PACK.files.concat(
    normalizeAssetsFiles(files).map((audio) => ({
      key: audio,
      type: "audio",
      url: `assets/audio/${audio}.mp3`,
    }))
  );
}

export function registerImageAssets(files: AssetsSource) {
  ASSETS_PACK.files = ASSETS_PACK.files.concat(
    normalizeAssetsFiles(files).map((image) => ({
      key: image,
      type: "image",
      url: `assets/sprites/${image}.png`,
    }))
  );
}

export function registerSpriteAssets<T extends string>(
  files: AssetsSource<T>,
  params: AssetsSpriteParams<T>
) {
  ASSETS_PACK.files = ASSETS_PACK.files.concat(
    normalizeAssetsFiles(files).map((sprite) => {
      const { width, height } =
        typeof params === "function" ? params(sprite) : params;

      return {
        key: sprite,
        type: "spritesheet",
        url: `assets/sprites/${sprite}.png`,
        frameConfig: {
          frameWidth: width,
          frameHeight: height,
        },
      };
    })
  );
}

export function getAssetsPack() {
  return ASSETS_PACK;
}

export async function loadFontFace(name: string, file: string) {
  const font = new FontFace(name, `url('assets/fonts/${file}')`);

  return font.load().then(() => {
    document.fonts.add(font);

    return font;
  });
}

// note: Scene's asset pack doesn't support atlas
export function loadAtlas<T extends string>(scene: Scene, files: AssetsSource<T>) {
  normalizeAssetsFiles(files).forEach(name => {
    scene.load.atlas(name, `assets/atlas/${name}.png`, `assets/atlas/${name}.json`);
  });
}
