import EventEmmiter from "events";
import { Client, Room, RoomAvailable } from "colyseus.js";
import { IGame } from "./game";
import { EnemySpawnPayload } from "./world/entities/npc/enemy";
import { ISprite } from "./world/entities/sprite";
import { WaveStartInfo } from "./world/wave";
import { CrystalDataPayload, ICrystal } from "./world/entities/crystal";
import { Vector2D } from "./world/level";

export interface INetwork extends EventEmmiter {
  client: Client;
  room?: Room;
  sessionId?: string;
  connect(arg0: IGame, name?: string): Promise<void>;
  join(arg0: IGame, name?: string): Promise<void>;
  leave(): Promise<void>;
  getAvailableRooms(roomName?: string): Promise<RoomAvailable<any>[]>;
  sendPlayerGameState(state: IGame): void;
  sendPlayerIsDead(): void;
  sendEnemyGameState(state: Phaser.GameObjects.GameObject[]): void;
  sendEnemySpawnInfo(state: EnemySpawnPayload): void;
  sendEntityDestroyInfo(state: ISprite): void;
  sendAssistantDestroyInfo(): void;
  sendWaveStartInfo(state: WaveStartInfo): void;
  sendWaveCompleteInfo(state: number): void;
  sendCrystalSpawnInfo(state: CrystalDataPayload[]): void;
  sendCrystalPickupInfo(state: Vector2D): void;
}
