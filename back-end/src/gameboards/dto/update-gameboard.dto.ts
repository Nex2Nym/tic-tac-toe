import { PartialType } from '@nestjs/mapped-types';
import { CreateGameboardDto } from './create-gameboard.dto';
import { GameboardInterface } from '../interfaces/Gameboard.interface';

export class UpdateGameboardDto extends PartialType(CreateGameboardDto) {
  gameboard: GameboardInterface
}
