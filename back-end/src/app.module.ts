import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardRelatedController } from './board-related/board-related.controller';
import { GameGateway } from './game.gateway';

@Module({
  imports: [],
  controllers: [AppController, BoardRelatedController],
  providers: [AppService, GameGateway],
})
export class AppModule {}
