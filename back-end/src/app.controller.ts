import { Controller, Get, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { GameboardsService } from './gameboards/gameboards.service';
import { GameboardInterface } from './gameboards/interfaces/Gameboard.interface'

//Controllers are responsible for handling incoming requests and returning responses to the client.
//Controllers should handle HTTP requests and delegate more complex tasks to providers.

@Controller('GameBoard')
export class AppController {
  constructor(private readonly gameboardsService: GameboardsService) {}
  
  @Get()
  async getGameBoard(): Promise<GameboardInterface> {
    return this.gameboardsService.findOne('0');
  }

  @Put()
  async updateGameBoard(gameboard){
    return this.gameboardsService.update('0', gameboard)
  }
}
