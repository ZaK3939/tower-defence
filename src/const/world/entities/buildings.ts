import { BuildingAmmunition } from "@game/scenes/world/entities/building/variants/ammunition";
import { BuildingStaking } from "@game/scenes/world/entities/building/variants/staking";
import { BuildingRadar } from "@game/scenes/world/entities/building/variants/radar";
import { BuildingTowerFire } from "@game/scenes/world/entities/building/variants/tower/variants/fire";
import { BuildingTowerFrozen } from "@game/scenes/world/entities/building/variants/tower/variants/frozen";
import { BuildingTowerLazer } from "@game/scenes/world/entities/building/variants/tower/variants/lazer";
import { BuildingWall } from "@game/scenes/world/entities/building/variants/wall";
import {
  BuildingVariant,
  IBuildingFactory,
} from "@type/world/entities/building";

export const BUILDINGS: Record<BuildingVariant, IBuildingFactory> = {
  [BuildingVariant.WALL]: BuildingWall,
  [BuildingVariant.TOWER_FIRE]: BuildingTowerFire,
  [BuildingVariant.TOWER_FROZEN]: BuildingTowerFrozen,
  [BuildingVariant.TOWER_LAZER]: BuildingTowerLazer,
  [BuildingVariant.STAKING]: BuildingStaking,
  [BuildingVariant.AMMUNITION]: BuildingAmmunition,
  [BuildingVariant.RADAR]: BuildingRadar,
};
