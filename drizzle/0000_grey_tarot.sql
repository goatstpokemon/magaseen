CREATE TYPE "public"."user_role" AS ENUM('ADMIN', 'WHEREHOUSE_WORKER', 'VIEWER', 'MAINTENANCE', 'SUPERVISOR', 'MANAGER', 'INVENTORY_MANAGER');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "login_logs" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"login_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(255) NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"role" "user_role" DEFAULT 'VIEWER' NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "login_logs" ADD CONSTRAINT "login_logs_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
