import { EnemyRedCandle } from "@entity/npc/variants/enemy/variants/redCandle";
import { EnemyBoss } from "@game/scenes/world/entities/npc/variants/enemy/variants/boss";
import { EnemySonicBat } from "@game/scenes/world/entities/npc/variants/enemy/variants/sonicBat";
import { EnemyGitcoinSpacefighter } from "@game/scenes/world/entities/npc/variants/enemy/variants/gitcoinSpacefighter";
import { EnemyGnosisTruck } from "@entity/npc/variants/enemy/variants/gnosisTruck";
import { EnemyLilNounsVehicle } from "@game/scenes/world/entities/npc/variants/enemy/variants/lilNounsVehicle";
import { EnemyGreenCandle } from "@entity/npc/variants/enemy/variants/greenCandle";
import { EnemyBearMonster } from "@entity/npc/variants/enemy/variants/bearMonster";
import { EnemyAaveDJ } from "@game/scenes/world/entities/npc/variants/enemy/variants/aaveDJ";
import { EnemyVariant, IEnemyFactory } from "@type/world/entities/npc/enemy";

export const ENEMIES: Record<EnemyVariant, IEnemyFactory> = {
  [EnemyVariant.REDCANDLE]: EnemyRedCandle,
  [EnemyVariant.SONICBAT]: EnemySonicBat,
  [EnemyVariant.LILNOUNSVEHICLE]: EnemyLilNounsVehicle,
  [EnemyVariant.GREENCANDLE]: EnemyGreenCandle,
  [EnemyVariant.GNOSISTRUCK]: EnemyGnosisTruck,
  [EnemyVariant.BOSS]: EnemyBoss,
  [EnemyVariant.AAVEDJ]: EnemyAaveDJ,
  [EnemyVariant.GITCOINSPACEFIGHTER]: EnemyGitcoinSpacefighter,
  [EnemyVariant.BEARMONSTER]: EnemyBearMonster,
};
