CREATE TABLE IF NOT EXISTS "game" (
	"id" uuid,
	"name" text[],
	"favorite" text,
	"winner_odd" integer,
	"loser_odd" integer,
	"created_at" timestamp,
	"updated_at" timestamp
);
