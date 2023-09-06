import EventEmitter from "events";
import { Client, Room, RoomAvailable } from "colyseus.js";
import { INetwork } from "@type/network";
import { NOTIFICATION_TYPE } from "@const/notification";
import { StorageSavePayload } from "@type/storage";
import { IGame } from "@type/game";
import { WorldEvents } from "@type/world";
import { EnemySpawnPayload, IEnemy } from "@type/world/entities/npc/enemy";
import { ISprite } from "@type/world/entities/sprite";
import { WaveEvents, WaveStartInfo } from "@type/world/wave";
import { CrystalDataPayload, ICrystal } from "@type/world/entities/crystal";
import { Vector2D } from "@type/world/level";

export class Network extends EventEmitter implements INetwork {
  client: Client;
  room?: Room;
  sessionId?: string;

  constructor() {
    super();

    const endpoint =
      IS_DEV_MODE === true
        ? "http://localhost:2567"
        : process.env.COLYSEUS_ENDPOINT;
    this.client = new Client(endpoint);
  }

  async connect(game: IGame) {
    this.room = await this.client.joinOrCreate("my_room", {
      // your join options here...
    });
    this.sessionId = this.room.sessionId;
    console.log("joined successfully", this.room);

    this.room.onMessage(NOTIFICATION_TYPE.PLAYER_IS_READY, (sessionId) => {
      console.log("player is ready", sessionId);
      game.events.emit(WorldEvents.PLAYER_IS_READY, sessionId);
    });

    this.room.onMessage(NOTIFICATION_TYPE.PLAYER_IS_LEFT, (sessionId) => {
      console.log("player is left", sessionId);
      game.events.emit(WorldEvents.PLAYER_IS_LEFT, sessionId);
    });

    this.room.onMessage(NOTIFICATION_TYPE.PLAYER_GAME_STATE, (payload) => {
      game.events.emit(WorldEvents.WORLD_UPDTAE, payload);
    });

    this.room.onMessage(NOTIFICATION_TYPE.ENEMY_ENTITY_UPDATE, (payload) => {
      game.events.emit(WorldEvents.ENEMY_ENTITY_UPDATE, payload);
    });

    this.room.onMessage(NOTIFICATION_TYPE.ENEMY_SPAWN_INFO, (payload) => {
      game.events.emit(WorldEvents.ENEMY_SPAWN_INFO, payload);
    });

    this.room.onMessage(NOTIFICATION_TYPE.ENTITY_DESTROY_INFO, (payload) => {
      game.events.emit(WorldEvents.ENTITY_DESTROY_INFO, payload);
    });

    this.room.onMessage(NOTIFICATION_TYPE.WAVE_START_INFO, (payload) => {
      game.events.emit(WaveEvents.START, payload);
    });

    this.room.onMessage(NOTIFICATION_TYPE.WAVE_COMPLETE_INFO, (payload) => {
      game.events.emit(WaveEvents.COMPLETE, payload);
    });

    this.room.onMessage(NOTIFICATION_TYPE.CRYSTAL_SPAWN_INFO, (payload) => {
      game.events.emit(WorldEvents.CRYSTAL_SPAWN_INFO, payload);
    });

    this.room.onMessage(NOTIFICATION_TYPE.CRYSTAL_PICKUP_INFO, (payload) => {
      game.events.emit(WorldEvents.CRYSTAL_PICKUP_INFO, payload);
    });

    this.room.onStateChange((state) => {
      console.log("state change:", state);
    });

    this.room.onLeave((code) => {
      console.log("left");
    });
  }

  async getAvailableRooms(roomName?: string): Promise<RoomAvailable<any>[]> {
    try {
      const rooms = await this.client.getAvailableRooms(roomName);
      return rooms;
    } catch (error) {
      console.error("Error fetching available rooms:", error);
      return [];
    }
  }

  // initialize() {
  //   if (this.room == null) return;
  //   this.room.onMessage(
  //     NOTIFICATION_TYPE.PLAYER_IS_READY,
  //     (sessionId: string) => {
  //       const player = this.room?.state.players.get(sessionId);
  //       if (player === undefined) return;
  //       console.log(player);
  //       this.emit(WorldEvents.PLAYER_IS_READY, sessionId);
  //     }
  //   );

  //   this.room.onMessage(
  //     NOTIFICATION_TYPE.PLAYER_IS_LEFT,
  //     (sessionId: string) => {
  //       const player = this.room?.state.players.get(sessionId);
  //       if (player === undefined) return;
  //       console.log(player);
  //       this.emit(WorldEvents.PLAYER_IS_LEFT, sessionId);
  //     }
  //   );

  //   this.room.onMessage(
  //     NOTIFICATION_TYPE.PLAYER_GAME_STATE,
  //     (payload: StorageSavePayload) => {
  //       this.emit(WorldEvents.WORLD_UPDTAE, payload);
  //     }
  //   );
  //   this.room.onMessage(
  //     NOTIFICATION_TYPE.ENEMY_ENTITY_UPDATE,
  //     (payload: Phaser.GameObjects.GameObject[]) => {
  //       this.emit(WorldEvents.ENEMY_ENTITY_UPDATE, payload);
  //     }
  //   );
  //   this.room.onMessage(
  //     NOTIFICATION_TYPE.ENEMY_SPAWN_INFO,
  //     (payload: Phaser.GameObjects.GameObject[]) => {
  //       this.emit(WorldEvents.ENEMY_SPAWN_INFO, payload);
  //     }
  //   );
  //   this.room.onMessage(
  //     NOTIFICATION_TYPE.ENTITY_DESTROY_INFO,
  //     (payload: ISprite) => {
  //       this.emit(WorldEvents.ENTITY_DESTROY_INFO, payload);
  //     }
  //   );
  //   this.room.onMessage(
  //     NOTIFICATION_TYPE.ASSISTANT_DESTROY_INFO,
  //     (payload: ISprite) => {
  //       this.emit(WorldEvents.ASSISTANT_DESTROY_INFO, payload);
  //     }
  //   );
  //   this.room.onMessage(NOTIFICATION_TYPE.WAVE_START_INFO, (number: number) => {
  //     this.emit(WaveEvents.START, number);
  //   });
  //   this.room.onMessage(
  //     NOTIFICATION_TYPE.WAVE_COMPLETE_INFO,
  //     (number: number) => {
  //       this.emit(WaveEvents.COMPLETE, number);
  //     }
  //   );
  //   this.room.onMessage(
  //     NOTIFICATION_TYPE.CRYSTAL_SPAWN_INFO,
  //     (payload: CrystalDataPayload[]) => {
  //       this.emit(WorldEvents.CRYSTAL_SPAWN_INFO, payload);
  //     }
  //   );
  //   this.room.onMessage(
  //     NOTIFICATION_TYPE.CRYSTAL_PICKUP_INFO,
  //     (payload: Vector2D) => {
  //       this.emit(WorldEvents.CRYSTAL_PICKUP_INFO, payload);
  //     }
  //   );
  // }

  sendPlayerGameState(state: IGame) {
    const payload: StorageSavePayload = {
      game: state.getDataPayload(),
      world: state.world.getDataPayload(),
      level: state.world.level.getDataPayload(),
      player: state.world.player.getDataPayload(),
      wave: state.world.wave.getDataPayload(),
    };
    this.room?.send(NOTIFICATION_TYPE.PLAYER_GAME_STATE, payload);
  }

  sendEnemyGameState(state: Phaser.GameObjects.GameObject[]) {
    this.room?.send(NOTIFICATION_TYPE.ENEMY_ENTITY_UPDATE, state);
  }

  sendEnemySpawnInfo(state: EnemySpawnPayload) {
    this.room?.send(NOTIFICATION_TYPE.ENEMY_SPAWN_INFO, state);
  }

  sendEntityDestroyInfo(state: ISprite) {
    this.room?.send(NOTIFICATION_TYPE.ENTITY_DESTROY_INFO, state);
  }

  sendAssistantDestroyInfo() {
    this.room?.send(NOTIFICATION_TYPE.ASSISTANT_DESTROY_INFO, {});
  }

  sendWaveStartInfo(state: WaveStartInfo) {
    this.room?.send(NOTIFICATION_TYPE.WAVE_START_INFO, state);
  }

  sendWaveCompleteInfo(state: number) {
    this.room?.send(NOTIFICATION_TYPE.WAVE_COMPLETE_INFO, state);
  }

  sendCrystalSpawnInfo(state: CrystalDataPayload[]) {
    this.room?.send(NOTIFICATION_TYPE.CRYSTAL_SPAWN_INFO, state);
  }

  sendCrystalPickupInfo(state: Vector2D) {
    this.room?.send(NOTIFICATION_TYPE.CRYSTAL_PICKUP_INFO, state);
  }
}
