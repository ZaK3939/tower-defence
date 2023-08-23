import { EnemyBat } from "@game/scenes/world/entities/npc/variants/enemy/variants/bat";
import { EnemyBoss } from "@game/scenes/world/entities/npc/variants/enemy/variants/boss";
import { EnemyDemon } from "@game/scenes/world/entities/npc/variants/enemy/variants/demon";
import { EnemyImpure } from "@game/scenes/world/entities/npc/variants/enemy/variants/impure";
import { EnemyOverlord } from "@game/scenes/world/entities/npc/variants/enemy/variants/overlord";
import { EnemyRisper } from "@game/scenes/world/entities/npc/variants/enemy/variants/risper";
import { EnemySpike } from "@game/scenes/world/entities/npc/variants/enemy/variants/spike";
import { EnemyTermer } from "@game/scenes/world/entities/npc/variants/enemy/variants/termer";
import { EnemyUndead } from "@game/scenes/world/entities/npc/variants/enemy/variants/undead";
import { EnemyVariant, IEnemyFactory } from "@type/world/entities/npc/enemy";

export const ENEMIES: Record<EnemyVariant, IEnemyFactory> = {
  [EnemyVariant.BAT]: EnemyBat,
  [EnemyVariant.DEMON]: EnemyDemon,
  [EnemyVariant.RISPER]: EnemyRisper,
  [EnemyVariant.SPIKE]: EnemySpike,
  [EnemyVariant.OVERLORD]: EnemyOverlord,
  [EnemyVariant.BOSS]: EnemyBoss,
  [EnemyVariant.UNDEAD]: EnemyUndead,
  [EnemyVariant.IMPURE]: EnemyImpure,
  [EnemyVariant.TERMER]: EnemyTermer,
};
