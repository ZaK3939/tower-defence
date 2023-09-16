import { Scene } from "phaser";
import { FactionId, Swatch, Tier, Trait, Wawa } from "@type/wawa";

const [pColor1, pColor2] = ["#ff01ff", "#01ff01"];

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) throw new Error("invalid hex");
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
}

// function replaceColor(ctx: CanvasRenderingContext2D, hexOld: string, hexNew: string) {
//   const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
//   const { r: oldRed, g: oldGreen, b: oldBlue } = hexToRgb(hexOld);
//   const { r: newRed, g: newGreen, b: newBlue } = hexToRgb(hexNew);
//   for (let i = 0; i < imageData.data.length; i += 4) {
//     if (imageData.data[i] === oldRed && imageData.data[i + 1] === oldGreen && imageData.data[i + 2] === oldBlue) {
//       imageData.data[i] = newRed;
//       imageData.data[i + 1] = newGreen;
//       imageData.data[i + 2] = newBlue;
//     }
//   }
//   ctx.putImageData(imageData, 0, 0);
// };

function colorDistance(
  r1: number,
  g1: number,
  b1: number,
  r2: number,
  g2: number,
  b2: number
): number {
  return Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2);
}
function replaceColor(
  ctx: CanvasRenderingContext2D,
  hexOld: string,
  hexNew: string,
  tolerance: number = 2
) {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const { r: oldRed, g: oldGreen, b: oldBlue } = hexToRgb(hexOld);
  const { r: newRed, g: newGreen, b: newBlue } = hexToRgb(hexNew);
  for (let i = 0; i < imageData.data.length; i += 4) {
    if (
      colorDistance(
        imageData.data[i],
        imageData.data[i + 1],
        imageData.data[i + 2],
        oldRed,
        oldGreen,
        oldBlue
      ) <= tolerance
    ) {
      imageData.data[i] = newRed;
      imageData.data[i + 1] = newGreen;
      imageData.data[i + 2] = newBlue;
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

function replaceSwatch(frame: Phaser.Textures.Frame, swatches: Swatch) {
  const canvas = document.createElement("canvas");
  canvas.width = frame.width;
  canvas.height = frame.height;
  const ctx = canvas.getContext("2d");
  if (ctx === null) throw new Error("ctx is null");

  // @ts-ignore
  const { x, y, width, height } = frame.canvasData;
  ctx.drawImage(frame.source.image, x, y, width, height, 0, 0, width, height);

  const swatch = swatches.split(",");
  replaceColor(ctx, pColor1, swatch[0]);
  replaceColor(ctx, pColor2, swatch[1]);

  return canvas;
}

const factionNames = { 0: "prima", 1: "zook", 2: "mecha", 3: "flavo" };
function frameKey(factionId: FactionId, trait: Trait, tier: Tier) {
  return factionNames[factionId] + "-" + trait + "-" + tier.toString() + ".png";
}

export function getWawaTextureKey(wawa: Wawa) {
  return "wawa-" + wawa.tokenId;
}
export function getWawaPetTextureKey(wawa: Wawa) {
  return "wawa-" + wawa.tokenId + "-pet-" + wawa.petId;
}

export const [wawaWidth, wawaHeight, petWidth, petHeight] = [69, 89, 29, 29];

export function registerWawaTexture(scene: Scene, wawa: Wawa) {
  {
    const canvas = document.createElement("canvas");
    canvas.width = wawaWidth;
    canvas.height = wawaHeight;
    const ctx = canvas.getContext("2d");
    if (ctx === null) throw new Error("ctx is null");

    const shadows = scene.textures
      .get(factionNames[wawa.factionId])
      .get(frameKey(wawa.factionId, "shadows", wawa.tiers.legs));
    ctx.drawImage(replaceSwatch(shadows, "#000000,#000000"), 0, 0);
    const legs = scene.textures
      .get(factionNames[wawa.factionId])
      .get(frameKey(wawa.factionId, "legs", wawa.tiers.legs));
    ctx.drawImage(replaceSwatch(legs, wawa.swatches.legs), 0, 0);
    const body = scene.textures
      .get(factionNames[wawa.factionId])
      .get(frameKey(wawa.factionId, "body", 1));
    ctx.drawImage(replaceSwatch(body, wawa.swatches.body), 0, 0);
    const chest = scene.textures
      .get(factionNames[wawa.factionId])
      .get(frameKey(wawa.factionId, "chest", wawa.tiers.chest));
    ctx.drawImage(replaceSwatch(chest, wawa.swatches.chest), 0, 0);
    const headwear = scene.textures
      .get(factionNames[wawa.factionId])
      .get(frameKey(wawa.factionId, "headwear", wawa.tiers.headwear));
    ctx.drawImage(replaceSwatch(headwear, wawa.swatches.headwear), 0, 0);
    const eyes = scene.textures
      .get(factionNames[wawa.factionId])
      .get(frameKey(wawa.factionId, "eyes", wawa.tiers.eyes));
    ctx.drawImage(replaceSwatch(eyes, wawa.swatches.eyes), 0, 0);
    scene.textures.addCanvas(getWawaTextureKey(wawa), canvas);
  }

  if (wawa.petId && wawa.petId > 0) {
    const canvas = document.createElement("canvas");
    canvas.width = petWidth;
    canvas.height = petHeight;
    const ctx = canvas.getContext("2d");
    if (ctx === null) throw new Error("ctx is null");

    const shadows = scene.textures
      .get("pet")
      .get("pet-" + wawa.petId + "-shadows" + ".png");
    ctx.drawImage(replaceSwatch(shadows, "#000000,#000000"), 0, 0);
    const body = scene.textures
      .get("pet")
      .get("pet-" + wawa.petId + "-body" + ".png");
    ctx.drawImage(replaceSwatch(body, wawa.swatches.pet), 0, 0);
    scene.textures.addCanvas(getWawaPetTextureKey(wawa), canvas);
  }
}
