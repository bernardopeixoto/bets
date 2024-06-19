import { text, timestamp, pgTable, uuid, integer } from "drizzle-orm/pg-core";

export const game = pgTable("game", {
  id: uuid("id"),
  teams: text("name").array(),
  favorite: text("favorite"),
  winnerOdd: integer('winner_odd'),
  loserOdd: integer('loser_odd'),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});
