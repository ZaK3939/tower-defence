import { BuildingAmmunition } from "@game/scenes/world/entities/building/variants/ammunition";
import { BuildingStaking } from "@game/scenes/world/entities/building/variants/staking";
import { BuildingRadar } from "@game/scenes/world/entities/building/variants/radar";
import { BuildingTowerFire } from "@game/scenes/world/entities/building/variants/tower/variants/fire";
import { BuildingTowerFrozen } from "@game/scenes/world/entities/building/variants/tower/variants/frozen";
import { BuildingTowerLazer } from "@game/scenes/world/entities/building/variants/tower/variants/lazer";
import { BuildingWall } from "@game/scenes/world/entities/building/variants/wall";
import { BuildingStair } from "@game/scenes/world/entities/building/variants/stair";
import {
  BuildingVariant,
  IBuildingFactory,
} from "@type/world/entities/building";
import { BuildingBooster } from "@entity/building/variants/booster";

export const BUILDINGS: Record<BuildingVariant, IBuildingFactory> = {
  [BuildingVariant.TOWER_FIRE]: BuildingTowerFire,
  [BuildingVariant.STAKING]: BuildingStaking,
  [BuildingVariant.WALL]: BuildingWall,
  [BuildingVariant.AMMUNITION]: BuildingAmmunition,
  [BuildingVariant.TOWER_FROZEN]: BuildingTowerFrozen,
  [BuildingVariant.TOWER_LAZER]: BuildingTowerLazer,
  [BuildingVariant.RADAR]: BuildingRadar,
  [BuildingVariant.BOOSTER]: BuildingBooster,
  [BuildingVariant.STAIR]: BuildingStair,
};
