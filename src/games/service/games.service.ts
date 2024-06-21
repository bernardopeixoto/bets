import { Injectable, Inject } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { game } from 'src/schemas/game.schema';
@Injectable()
export class GamesService {

  constructor(@Inject('betsdb') private drizzle: NodePgDatabase){
  }

  getHello(): string {
    return 'Hello World!';
  }
}
