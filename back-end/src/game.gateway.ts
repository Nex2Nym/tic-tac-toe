//All event handler are here
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Socket } from "dgram";

@WebSocketGateway()
export class GameGateway{
    @WebSocketServer()
    server;

    // incoming movement
    @SubscribeMessage('Movement')
    handleNewMovement(@MessageBody() data: string, @ConnectedSocket() client: Socket): void{
        this.server.emit('Movement', data)
    }
}