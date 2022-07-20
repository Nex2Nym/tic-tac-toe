import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { GameboardsService } from './gameboards.service';
import { CreateGameboardDto } from './dto/create-gameboard.dto';
import { UpdateGameboardDto } from './dto/update-gameboard.dto';

@WebSocketGateway()
export class GameboardsGateway {
  constructor(private readonly gameboardsService: GameboardsService) {}

  @SubscribeMessage('createGameboard')
  create(@MessageBody() createGameboardDto: CreateGameboardDto) {
    return this.gameboardsService.create(createGameboardDto);
  }

  @SubscribeMessage('findAllGameboards')
  findAll() {
    return this.gameboardsService.findAll();
  }

  @SubscribeMessage('findOneGameboard')
  findOne(@MessageBody() id: string) {
    return this.gameboardsService.findOne(id);
  }

  @SubscribeMessage('updateGameboard')
  update(@MessageBody() updateGameboardDto: UpdateGameboardDto) {
    return this.gameboardsService.update(updateGameboardDto.gameboard.id, updateGameboardDto);
  }

  @SubscribeMessage('removeGameboard')
  remove(@MessageBody() id: string) {
    return this.gameboardsService.remove(id);
  }
}
