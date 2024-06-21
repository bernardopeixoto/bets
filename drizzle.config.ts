import { defineConfig, Config } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/schemas",
  out: "./drizzle",
  dbCredentials: {
    host: process.env.HOST,
    port: parseInt(process.env.PORT, 10),
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  },
}) satisfies Config;

