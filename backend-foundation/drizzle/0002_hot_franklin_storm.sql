CREATE TYPE "public"."queue_size" AS ENUM('thumbnail', 'medium', 'large');--> statement-breakpoint
CREATE TYPE "public"."queue_status" AS ENUM('pending', 'processing', 'completed', 'failed');--> statement-breakpoint
CREATE TABLE "image_optimization_queue" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"media_id" uuid NOT NULL,
	"status" "queue_status" DEFAULT 'pending' NOT NULL,
	"target_size" "queue_size" NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "media" ADD COLUMN "hash" text;--> statement-breakpoint
ALTER TABLE "image_optimization_queue" ADD CONSTRAINT "image_optimization_queue_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "optimization_queue_media_idx" ON "image_optimization_queue" USING btree ("media_id");--> statement-breakpoint
CREATE INDEX "optimization_queue_status_idx" ON "image_optimization_queue" USING btree ("status");--> statement-breakpoint
CREATE INDEX "media_hash_idx" ON "media" USING btree ("hash");