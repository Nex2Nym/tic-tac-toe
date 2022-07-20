import { Test, TestingModule } from '@nestjs/testing';
import { GameboardsService } from './gameboards.service';

describe('GameboardsService', () => {
  let service: GameboardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameboardsService],
    }).compile();

    service = module.get<GameboardsService>(GameboardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
