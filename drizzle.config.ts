import { defineConfig } from 'drizzle-kit';
import { ConfigService } from '@nestjs/config';
import 'dotenv/config';
const configService = new ConfigService();

export default defineConfig({
  schema: './src/schemas/database-schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    host: configService.get('HOST'),
    port: configService.get('PORT'),
    user: configService.get('USER'),
    password: configService.get('PASSWORD'),
    database: configService.get('DATABASE'),
    ssl: false,
  },
})
