import { Module, } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from '../db/database-module';
 
@Module({
  imports: [
    DatabaseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        host: configService.get('HOST'),
        port: configService.get('PORT'),
        user: configService.get('USER'),
        password: configService.get('PASSWORD'),
        database: configService.get('DATABASE'),
      }),
    }),
    // ...
  ],
})
export class AppModule {}