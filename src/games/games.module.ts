import { Module } from '@nestjs/common';
import { GamesController } from './controller/games.controller';
import {  GamesService } from './service/games.service';
//import { NestDrizzleModule } from './modules/drizzle/drizzle.module';
import * as game from '../schemas/game.schema';

@Module({
  imports: [],
  controllers: [GamesController],
  providers: [GamesService],
})
export class GamesModule {}
