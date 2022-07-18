import { Controller, Get } from '@nestjs/common';

@Controller('board-related')
export class BoardRelatedController {
    @Get('/msg')
    getBoard() {
        return 'Board data'
    }

    @Get('/pl')
    getPlayer(){
        return 'P1 P2'
    }
}
