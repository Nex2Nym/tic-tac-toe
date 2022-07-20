import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameGateway } from './game.gateway';
import { GameboardsModule } from './gameboards/gameboards.module';

@Module({
  imports: [GameboardsModule],
  controllers: [AppController],
  providers: [AppService, GameGateway],
})
export class AppModule {}
