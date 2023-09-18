import { LEVEL_TILE_SIZE } from "@const/world/level";
import {
  MovementDirection,
  PlayerSkill,
  PlayerSkillData,
  PlayerSuperskill,
  PlayerSuperskillData,
} from "@type/world/entities/player";
import { DIFFICULTY } from "../difficulty";
import { WAWA_SCALING_FACTOR } from "@const/world";
import { wawaWidth, wawaHeight } from "@lib/wawa-texture";

// note
// gamut is used for collision detection
// width and height are used for prev player sprite system (not used now)

// export const PLAYER_TILE_SIZE = {
//   width: 20,
//   height: 30,
//   gamut: 4,
// };

export const PLAYER_TILE_SIZE = {
  width: wawaWidth * WAWA_SCALING_FACTOR,
  height: wawaHeight * WAWA_SCALING_FACTOR,
  gamut: 4,
};
const { RIGHT, LEFT, UP, DOWN, NONE } = MovementDirection;

export const PLAYER_SKILLS: Record<PlayerSkill, PlayerSkillData> = {
  [PlayerSkill.MAX_HEALTH]: {
    label: "Maximum health",
    description: "Grow health of player and assistant",
    experience: DIFFICULTY.PLAYER_HEALTH_EXPERIENCE_TO_UPGRADE,
    maxLevel: 10,
  },
  [PlayerSkill.SPEED]: {
    label: "Movement speed",
    description: "Grow speed of player and assistant",
    experience: DIFFICULTY.PLAYER_SPEED_EXPERIENCE_TO_UPGRADE,
    maxLevel: 10,
  },
  [PlayerSkill.BUILD_AREA]: {
    label: "Build area",
    description: "Grow radius of build area",
    experience: DIFFICULTY.BUILDER_BUILD_AREA_EXPERIENCE_TO_UPGRADE,
    maxLevel: 10,
  },
  [PlayerSkill.ASSISTANT]: {
    label: "Assistant strength",
    description: "Grow damage, radius and speed attack",
    experience: DIFFICULTY.ASSISTANT_EXPERIENCE_TO_UPGRADE,
    maxLevel: 10,
  },
};

export const PLAYER_SUPERSKILLS: Record<
  PlayerSuperskill,
  PlayerSuperskillData
> = {
  [PlayerSuperskill.FROST]: {
    description: "Freezes all spawned enemies",
    cost: DIFFICULTY.SUPERSKILL_FROST_COST,
    duration: DIFFICULTY.SUPERSKILL_FROST_DURATION,
    cooltime: DIFFICULTY.SUPERSKILL_FROST_COOLTIME,
  },
  [PlayerSuperskill.RAGE]: {
    description: "Doubles towers damage",
    cost: DIFFICULTY.SUPERSKILL_RAGE_COST,
    duration: DIFFICULTY.SUPERSKILL_RAGE_DURATION,
    cooltime: DIFFICULTY.SUPERSKILL_RAGE_COOLTIME,
  },
  [PlayerSuperskill.SHIELD]: {
    description: "Prevents damage to all buildings",
    cost: DIFFICULTY.SUPERSKILL_SHIELD_COST,
    duration: DIFFICULTY.SUPERSKILL_SHIELD_DURATION,
    cooltime: DIFFICULTY.SUPERSKILL_SHIELD_COOLTIME,
  },
  [PlayerSuperskill.FIRE]: {
    description: "Deals damage to all enemies",
    cost: DIFFICULTY.SUPERSKILL_FIRE_COST,
    duration: DIFFICULTY.SUPERSKILL_FIRE_DURATION,
    cooltime: DIFFICULTY.SUPERSKILL_FIRE_COOLTIME,
  },
};

export const PLAYER_MOVE_DIRECTIONS = {
  [`${LEFT}|${UP}`]: 180 + LEVEL_TILE_SIZE.deg,
  [`${LEFT}|${NONE}`]: 180,
  [`${LEFT}|${DOWN}`]: 180 - LEVEL_TILE_SIZE.deg,
  [`${NONE}|${UP}`]: 270,
  [`${NONE}|${DOWN}`]: 90,
  [`${RIGHT}|${UP}`]: -LEVEL_TILE_SIZE.deg,
  [`${RIGHT}|${NONE}`]: 0,
  [`${RIGHT}|${DOWN}`]: LEVEL_TILE_SIZE.deg,
};

export const PLAYER_MOVE_ANIMATIONS = {
  [`${LEFT}|${UP}`]: "move_left_up",
  [`${LEFT}|${NONE}`]: "move_left",
  [`${LEFT}|${DOWN}`]: "move_left_down",
  [`${NONE}|${UP}`]: "move_up",
  [`${NONE}|${DOWN}`]: "move_down",
  [`${RIGHT}|${UP}`]: "move_right_up",
  [`${RIGHT}|${NONE}`]: "move_right",
  [`${RIGHT}|${DOWN}`]: "move_right_down",
};
