import { EnemyRedCandle } from "@entity/npc/variants/enemy/variants/redCandle";
import { EnemyBoss } from "@game/scenes/world/entities/npc/variants/enemy/variants/boss";
import { EnemyBoss2 } from "@game/scenes/world/entities/npc/variants/enemy/variants/boss2";
import { EnemySonicBat } from "@game/scenes/world/entities/npc/variants/enemy/variants/sonicBat";
import { EnemyGitcoinFighter } from "@game/scenes/world/entities/npc/variants/enemy/variants/gitcoinFighter";
import { EnemyGnosisTruck } from "@entity/npc/variants/enemy/variants/gnosisTruck";
import { EnemyNounsVehicle } from "@game/scenes/world/entities/npc/variants/enemy/variants/nounsVehicle";
import { EnemyGreenCandle } from "@entity/npc/variants/enemy/variants/greenCandle";
import { EnemyBearMonster } from "@entity/npc/variants/enemy/variants/bearMonster";
import { EnemyAaveDJ } from "@game/scenes/world/entities/npc/variants/enemy/variants/aaveDJ";
import { EnemyVariant, IEnemyFactory } from "@type/world/entities/npc/enemy";

export const ENEMIES: Record<EnemyVariant, IEnemyFactory> = {
  [EnemyVariant.REDCANDLE]: EnemyRedCandle,
  [EnemyVariant.SONICBAT]: EnemySonicBat,
  [EnemyVariant.NOUNSVEHICLE]: EnemyNounsVehicle,
  [EnemyVariant.GREENCANDLE]: EnemyGreenCandle,
  [EnemyVariant.GNOSISTRUCK]: EnemyGnosisTruck,
  [EnemyVariant.BOSS]: EnemyBoss,
  [EnemyVariant.BOSS2]: EnemyBoss2,
  [EnemyVariant.AAVEDJ]: EnemyAaveDJ,
  [EnemyVariant.GITCOINFIGHTER]: EnemyGitcoinFighter,
  [EnemyVariant.BEARMONSTER]: EnemyBearMonster,
};
