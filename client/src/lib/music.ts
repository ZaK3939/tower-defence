import { IWorld } from "@type/world";
import { WaveAudio } from "@type/world/wave";

export function stopBattleMusic(scene: IWorld) {
  scene.sound.stopByKey(WaveAudio.BATTLE1);
  scene.sound.stopByKey(WaveAudio.BATTLE2);
  scene.sound.stopByKey(WaveAudio.BATTLE3);
  scene.sound.stopByKey(WaveAudio.Stage1End);
}
