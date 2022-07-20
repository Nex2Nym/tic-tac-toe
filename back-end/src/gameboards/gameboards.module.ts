import { Module } from '@nestjs/common';
import { GameboardsService } from './gameboards.service';
import { GameboardsGateway } from './gameboards.gateway';

@Module({
  providers: [GameboardsGateway, GameboardsService]
})
export class GameboardsModule {}
