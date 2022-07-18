import { Test, TestingModule } from '@nestjs/testing';
import { BoardRelatedController } from './board-related.controller';

describe('BoardRelatedController', () => {
  let controller: BoardRelatedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoardRelatedController],
    }).compile();

    controller = module.get<BoardRelatedController>(BoardRelatedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
