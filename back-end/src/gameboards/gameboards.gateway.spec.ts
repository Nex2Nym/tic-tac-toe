import { Test, TestingModule } from '@nestjs/testing';
import { GameboardsGateway } from './gameboards.gateway';
import { GameboardsService } from './gameboards.service';

describe('GameboardsGateway', () => {
  let gateway: GameboardsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameboardsGateway, GameboardsService],
    }).compile();

    gateway = module.get<GameboardsGateway>(GameboardsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
