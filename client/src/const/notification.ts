export const NOTIFICATION_TYPE = {
  // 1 番台はゲーム情報を通知するためのタイプ
  // ゲーム情報を進捗を通知するためのタイプ
  // GAME_PROGRESS: 1,

  // // プレイヤー情報を通知するためのタイプ
  // PLAYER_INFO: 2,

  PLAYER_GAME_STATE: 3,

  PLAYER_IS_READY: 4,

  ENEMY_ENTITY_UPDATE: 5,

  ENEMY_SPAWN_INFO: 6,

  ENTITY_DESTROY_INFO: 7,

  ASSISTANT_DESTROY_INFO: 8,

  WAVE_START_INFO: 9,

  WAVE_COMPLETE_INFO: 10,

  CRYSTAL_SPAWN_INFO: 11,

  CRYSTAL_PICKUP_INFO: 12,

  // DEBUG 用のタイプ
  DEBUG_PLAYER_WIN: 9000, // 通知を送った人が勝利する
  DEBUG_DRAW: 9001, // 引き分けにする
  DEBUG_PLAYER_STATUS_MAX: 9002, // 通知を送った人のステータスを MAX にする
  DEBUG_ALL_PLAYER_STATUS_MAX: 9003, // 全ての人のステータスを MAX にする
  DEBUG_DELETE_ALL_BLOCK: 9004, // 全てのブロックを破壊する
  DEBUG_FREEZE_ALL_CPU: 9005, // 全てのCPUの動きを止める
  DEBUG_UNFREEZE_ALL_CPU: 9006, // 全てのCPUの動きを再開する
};
