import { Room, Client } from "@colyseus/core";
import { MyRoomState } from "./schema/MyRoomState";
import { NOTIFICATION_TYPE } from "../../../client/src/const/notification";

export class MyRoom extends Room<MyRoomState> {
  maxClients = 4;

  onCreate(options: any) {
    this.setState(new MyRoomState());

    this.onMessage(NOTIFICATION_TYPE.PLAYER_GAME_STATE, (client, data: any) => {
      this.broadcast(NOTIFICATION_TYPE.PLAYER_GAME_STATE, data);
    });

    this.onMessage(
      NOTIFICATION_TYPE.ENEMY_ENTITY_UPDATE,
      (client, data: any) => {
        this.broadcast(NOTIFICATION_TYPE.ENEMY_ENTITY_UPDATE, data);
      }
    );

    this.onMessage(NOTIFICATION_TYPE.ENEMY_SPAWN_INFO, (client, data: any) => {
      this.broadcast(NOTIFICATION_TYPE.ENEMY_SPAWN_INFO, data);
    });

    this.onMessage(
      NOTIFICATION_TYPE.ENTITY_DESTROY_INFO,
      (client, data: any) => {
        this.broadcast(NOTIFICATION_TYPE.ENTITY_DESTROY_INFO, data);
      }
    );

    this.onMessage(
      NOTIFICATION_TYPE.ASSISTANT_DESTROY_INFO,
      (client, data: any) => {
        this.broadcast(NOTIFICATION_TYPE.ASSISTANT_DESTROY_INFO, data);
      }
    );
    this.onMessage(NOTIFICATION_TYPE.WAVE_START_INFO, (client, data: any) => {
      this.broadcast(NOTIFICATION_TYPE.WAVE_START_INFO, data);
    });

    this.onMessage(
      NOTIFICATION_TYPE.WAVE_COMPLETE_INFO,
      (client, data: any) => {
        this.broadcast(NOTIFICATION_TYPE.WAVE_COMPLETE_INFO, data);
      }
    );

    this.onMessage(
      NOTIFICATION_TYPE.CRYSTAL_SPAWN_INFO,
      (client, data: any) => {
        this.broadcast(NOTIFICATION_TYPE.CRYSTAL_SPAWN_INFO, data);
      }
    );

    this.onMessage(
      NOTIFICATION_TYPE.CRYSTAL_PICKUP_INFO,
      (client, data: any) => {
        this.broadcast(NOTIFICATION_TYPE.CRYSTAL_PICKUP_INFO, data);
      }
    );
  }

  onJoin(client: Client, options: any) {
    console.log(client.sessionId, "joined!");

    // Send a welcome message to the client that just joined
    this.broadcast(NOTIFICATION_TYPE.PLAYER_IS_READY, client.sessionId);
  }

  onLeave(client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
    // Send a welcome message to the client that just left,
    this.broadcast(NOTIFICATION_TYPE.PLAYER_IS_LEFT, client.sessionId);
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }
}
