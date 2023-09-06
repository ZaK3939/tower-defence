"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyRoom = void 0;
const core_1 = require("@colyseus/core");
const MyRoomState_1 = require("./schema/MyRoomState");
const notification_1 = require("../../../client/src/const/notification");
class MyRoom extends core_1.Room {
    constructor() {
        super(...arguments);
        this.maxClients = 2;
    }
    onCreate(options) {
        this.setState(new MyRoomState_1.MyRoomState());
        this.onMessage(notification_1.NOTIFICATION_TYPE.PLAYER_GAME_STATE, (client, data) => {
            this.broadcast(notification_1.NOTIFICATION_TYPE.PLAYER_GAME_STATE, data);
        });
        this.onMessage(notification_1.NOTIFICATION_TYPE.ENEMY_ENTITY_UPDATE, (client, data) => {
            this.broadcast(notification_1.NOTIFICATION_TYPE.ENEMY_ENTITY_UPDATE, data);
        });
        this.onMessage(notification_1.NOTIFICATION_TYPE.ENEMY_SPAWN_INFO, (client, data) => {
            this.broadcast(notification_1.NOTIFICATION_TYPE.ENEMY_SPAWN_INFO, data);
        });
        this.onMessage(notification_1.NOTIFICATION_TYPE.ENTITY_DESTROY_INFO, (client, data) => {
            this.broadcast(notification_1.NOTIFICATION_TYPE.ENTITY_DESTROY_INFO, data);
        });
        this.onMessage(notification_1.NOTIFICATION_TYPE.ASSISTANT_DESTROY_INFO, (client, data) => {
            this.broadcast(notification_1.NOTIFICATION_TYPE.ASSISTANT_DESTROY_INFO, data);
        });
        this.onMessage(notification_1.NOTIFICATION_TYPE.WAVE_START_INFO, (client, data) => {
            this.broadcast(notification_1.NOTIFICATION_TYPE.WAVE_START_INFO, data);
        });
        this.onMessage(notification_1.NOTIFICATION_TYPE.WAVE_COMPLETE_INFO, (client, data) => {
            this.broadcast(notification_1.NOTIFICATION_TYPE.WAVE_COMPLETE_INFO, data);
        });
        this.onMessage(notification_1.NOTIFICATION_TYPE.CRYSTAL_SPAWN_INFO, (client, data) => {
            this.broadcast(notification_1.NOTIFICATION_TYPE.CRYSTAL_SPAWN_INFO, data);
        });
        this.onMessage(notification_1.NOTIFICATION_TYPE.CRYSTAL_PICKUP_INFO, (client, data) => {
            this.broadcast(notification_1.NOTIFICATION_TYPE.CRYSTAL_PICKUP_INFO, data);
        });
    }
    onJoin(client, options) {
        console.log(client.sessionId, "joined!");
        // Send a welcome message to the client that just joined
        this.broadcast(notification_1.NOTIFICATION_TYPE.PLAYER_IS_READY, client.sessionId);
    }
    onLeave(client, consented) {
        console.log(client.sessionId, "left!");
        // Send a welcome message to the client that just left,
        this.broadcast(notification_1.NOTIFICATION_TYPE.PLAYER_IS_LEFT, client.sessionId);
    }
    onDispose() {
        console.log("room", this.roomId, "disposing...");
    }
}
exports.MyRoom = MyRoom;
