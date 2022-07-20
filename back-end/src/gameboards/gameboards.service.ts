import { Injectable } from '@nestjs/common';
import { CreateGameboardDto } from './dto/create-gameboard.dto';
import { UpdateGameboardDto } from './dto/update-gameboard.dto';
import { GameboardInterface } from './interfaces/Gameboard.interface'

@Injectable()
export class GameboardsService {
  private readonly gameboardInfo:GameboardInterface;

  create(createGameboardDto: CreateGameboardDto) {
    return 'This action adds a new gameboard';
  }

  findAll() {
    return `This action returns all gameboards`;
  }

  findOne(id: string) {
    console.log("found it!")
    return this.gameboardInfo;
  }

  update(id: string, updateGameboardDto: UpdateGameboardDto) {
    return `This action updates a #${id} gameboard`;
  }

  remove(id: string) {
    return `This action removes a #${id} gameboard`;
  }
}
