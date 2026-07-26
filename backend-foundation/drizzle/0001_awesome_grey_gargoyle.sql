ALTER TABLE "businesses" ADD COLUMN "is_official" boolean DEFAULT true NOT NULL;--> statement-breakpoint
ALTER TABLE "businesses" ADD COLUMN "display_order" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "characters" ADD COLUMN "is_official" boolean DEFAULT true NOT NULL;--> statement-breakpoint
ALTER TABLE "characters" ADD COLUMN "display_order" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "locations" ADD COLUMN "is_official" boolean DEFAULT true NOT NULL;--> statement-breakpoint
ALTER TABLE "locations" ADD COLUMN "display_order" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "map_markers" ADD COLUMN "zoom_level" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "media" ADD COLUMN "alt_text" text;--> statement-breakpoint
ALTER TABLE "media" ADD COLUMN "caption" text;--> statement-breakpoint
ALTER TABLE "sources" ADD COLUMN "official_release_date" timestamp;--> statement-breakpoint
ALTER TABLE "vehicles" ADD COLUMN "is_official" boolean DEFAULT true NOT NULL;--> statement-breakpoint
ALTER TABLE "vehicles" ADD COLUMN "display_order" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "weapons" ADD COLUMN "is_official" boolean DEFAULT true NOT NULL;--> statement-breakpoint
ALTER TABLE "weapons" ADD COLUMN "display_order" integer DEFAULT 0 NOT NULL;