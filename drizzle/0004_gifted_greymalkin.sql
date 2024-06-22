CREATE TABLE IF NOT EXISTS "game" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text[],
	"favorite" text,
	"winner_odd" integer,
	"loser_odd" integer,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text[],
	"created_at" timestamp,
	"updated_at" timestamp
);
