import { Controller, Get } from '@nestjs/common';

@Controller('games')
export class GamesController {
    @Get()
    getAllGames(): string{
        return 'This action returns all games';
    }
}