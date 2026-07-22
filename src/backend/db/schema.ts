import { 
  pgTable, 
  pgEnum, 
  uuid, 
  text, 
  timestamp, 
  integer, 
  doublePrecision, 
  boolean,
  unique,
  index
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// ==========================================
// PostgreSQL ENUMS
// ==========================================

export const entityStatusEnum = pgEnum('entity_status', [
  'draft', 
  'published', 
  'archived', 
  'official'
]);

export const mediaTypeEnum = pgEnum('media_type', [
  'image', 
  'artwork', 
  'wallpaper', 
  'screenshot', 
  'video', 
  'trailer', 
  'thumbnail'
]);

export const relationshipTypeEnum = pgEnum('relationship_type', [
  'appears_in', 
  'located_in', 
  'contains', 
  'drives', 
  'uses', 
  'featured_in', 
  'related_to', 
  'connected_to', 
  'near', 
  'belongs_to'
]);

export const sourceTypeEnum = pgEnum('source_type', [
  'trailer', 
  'artwork', 
  'wallpaper', 
  'screenshot', 
  'character_video', 
  'cover_art', 
  'newswire', 
  'official'
]);

export const aliasTypeEnum = pgEnum('alias_type', [
  'official', 
  'common', 
  'nickname', 
  'abbreviation', 
  'search'
]);

export const entityMediaRoleEnum = pgEnum('entity_media_role', [
  'hero', 
  'gallery', 
  'wallpaper', 
  'cover', 
  'featured', 
  'thumbnail', 
  'scene'
]);

export const queueStatusEnum = pgEnum('queue_status', [
  'pending',
  'processing',
  'completed',
  'failed'
]);

export const queueSizeEnum = pgEnum('queue_size', [
  'thumbnail',
  'medium',
  'large'
]);

// ==========================================
// DATABASE TABLES
// ==========================================

// Table 7: sources
export const sources = pgTable('sources', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  sourceType: sourceTypeEnum('source_type').notNull(),
  url: text('url'),
  officialReleaseDate: timestamp('official_release_date'), // Accessibility / Rockstar releases support
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// Table 8: media
export const media = pgTable('media', {
  id: uuid('id').defaultRandom().primaryKey(),
  slug: text('slug').notNull().unique(),
  title: text('title'),
  mediaType: mediaTypeEnum('media_type').notNull(),
  provider: text('provider').notNull(), // e.g. 'rockstar'
  storageProvider: text('storage_provider').notNull(), // e.g. 'vercel_blob'
  storageKey: text('storage_key').notNull(),
  cdnUrl: text('cdn_url').notNull(),
  thumbnailUrl: text('thumbnail_url'),
  youtubeId: text('youtube_id'),
  width: integer('width'),
  height: integer('height'),
  duration: integer('duration'), // in seconds
  copyright: text('copyright'),
  altText: text('alt_text'), // Image accessibility
  caption: text('caption'), // Image metadata
  hash: text('hash'), // Duplicate checking (SHA256)
  sourceId: uuid('source_id').references(() => sources.id, { onDelete: 'set null' }),
  status: entityStatusEnum('status').notNull().default('draft'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
}, (table) => [
  index('media_status_idx').on(table.status),
  index('media_source_id_idx').on(table.sourceId),
  index('media_youtube_id_idx').on(table.youtubeId),
  index('media_hash_idx').on(table.hash),
]);

// Table 1: characters
export const characters = pgTable('characters', {
  id: uuid('id').defaultRandom().primaryKey(),
  slug: text('slug').notNull().unique(),
  name: text('name').notNull(),
  officialName: text('official_name'),
  nickname: text('nickname'),
  shortDescription: text('short_description'),
  officialDescription: text('official_description'),
  heroMediaId: uuid('hero_media_id').references(() => media.id, { onDelete: 'set null' }),
  isOfficial: boolean('is_official').notNull().default(true), // Rockstar validation
  displayOrder: integer('display_order').notNull().default(0), // Sorting
  status: entityStatusEnum('status').notNull().default('draft'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
}, (table) => [
  index('characters_status_idx').on(table.status),
  index('characters_hero_media_id_idx').on(table.heroMediaId),
]);

// Table 2: locations
export const locations = pgTable('locations', {
  id: uuid('id').defaultRandom().primaryKey(),
  slug: text('slug').notNull().unique(),
  name: text('name').notNull(),
  region: text('region'),
  category: text('category'),
  description: text('description'),
  latitude: doublePrecision('latitude'),
  longitude: doublePrecision('longitude'),
  heroMediaId: uuid('hero_media_id').references(() => media.id, { onDelete: 'set null' }),
  isOfficial: boolean('is_official').notNull().default(true), // Rockstar validation
  displayOrder: integer('display_order').notNull().default(0), // Sorting
  status: entityStatusEnum('status').notNull().default('draft'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
}, (table) => [
  index('locations_status_idx').on(table.status),
  index('locations_hero_media_id_idx').on(table.heroMediaId),
]);

// Table 3: vehicles
export const vehicles = pgTable('vehicles', {
  id: uuid('id').defaultRandom().primaryKey(),
  slug: text('slug').notNull().unique(),
  name: text('name').notNull(),
  brand: text('brand'),
  vehicleClass: text('vehicle_class'),
  description: text('description'),
  heroMediaId: uuid('hero_media_id').references(() => media.id, { onDelete: 'set null' }),
  isOfficial: boolean('is_official').notNull().default(true), // Rockstar validation
  displayOrder: integer('display_order').notNull().default(0), // Sorting
  status: entityStatusEnum('status').notNull().default('draft'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
}, (table) => [
  index('vehicles_status_idx').on(table.status),
  index('vehicles_hero_media_id_idx').on(table.heroMediaId),
]);

// Table 4: weapons
export const weapons = pgTable('weapons', {
  id: uuid('id').defaultRandom().primaryKey(),
  slug: text('slug').notNull().unique(),
  name: text('name').notNull(),
  weaponClass: text('weapon_class'),
  description: text('description'),
  heroMediaId: uuid('hero_media_id').references(() => media.id, { onDelete: 'set null' }),
  isOfficial: boolean('is_official').notNull().default(true), // Rockstar validation
  displayOrder: integer('display_order').notNull().default(0), // Sorting
  status: entityStatusEnum('status').notNull().default('draft'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
}, (table) => [
  index('weapons_status_idx').on(table.status),
  index('weapons_hero_media_id_idx').on(table.heroMediaId),
]);

// Table 5: businesses
export const businesses = pgTable('businesses', {
  id: uuid('id').defaultRandom().primaryKey(),
  slug: text('slug').notNull().unique(),
  name: text('name').notNull(),
  businessType: text('business_type'),
  description: text('description'),
  locationId: uuid('location_id').references(() => locations.id, { onDelete: 'cascade' }),
  heroMediaId: uuid('hero_media_id').references(() => media.id, { onDelete: 'set null' }),
  isOfficial: boolean('is_official').notNull().default(true), // Rockstar validation
  displayOrder: integer('display_order').notNull().default(0), // Sorting
  status: entityStatusEnum('status').notNull().default('draft'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
}, (table) => [
  index('businesses_status_idx').on(table.status),
  index('businesses_hero_media_id_idx').on(table.heroMediaId),
  index('businesses_location_id_idx').on(table.locationId),
]);

// Table 6: trailers
export const trailers = pgTable('trailers', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title').notNull(),
  youtubeId: text('youtube_id').notNull().unique(),
  officialReleaseDate: timestamp('official_release_date'),
  description: text('description'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
}, (table) => [
  index('trailers_youtube_id_idx').on(table.youtubeId),
]);

// Table 9: entity_media (Universal Polymorphic Connector)
export const entityMedia = pgTable('entity_media', {
  id: uuid('id').defaultRandom().primaryKey(),
  entityType: text('entity_type').notNull(), // e.g. 'character', 'location', 'vehicle', 'weapon', 'business'
  entityId: uuid('entity_id').notNull(),
  mediaId: uuid('media_id').notNull().references(() => media.id, { onDelete: 'cascade' }),
  role: entityMediaRoleEnum('role').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
}, (table) => [
  index('entity_media_entity_idx').on(table.entityType, table.entityId),
  index('entity_media_media_id_idx').on(table.mediaId),
  unique('unique_entity_media_role').on(table.entityType, table.entityId, table.mediaId, table.role),
]);

// Table 10: relationships (Universal Polymorphic Directional Relationships)
export const relationships = pgTable('relationships', {
  id: uuid('id').defaultRandom().primaryKey(),
  fromEntityType: text('from_entity_type').notNull(), // e.g. 'character'
  fromEntityId: uuid('from_entity_id').notNull(),
  relationshipType: relationshipTypeEnum('relationship_type').notNull(),
  toEntityType: text('to_entity_type').notNull(), // e.g. 'location'
  toEntityId: uuid('to_entity_id').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
}, (table) => [
  index('relationships_from_entity_idx').on(table.fromEntityType, table.fromEntityId),
  index('relationships_to_entity_idx').on(table.toEntityType, table.toEntityId),
  index('relationships_type_idx').on(table.relationshipType),
  unique('unique_relationship').on(
    table.fromEntityType, 
    table.fromEntityId, 
    table.relationshipType, 
    table.toEntityType, 
    table.toEntityId
  ),
]);

// Table 11: entity_aliases (Universal Aliases)
export const entityAliases = pgTable('entity_aliases', {
  id: uuid('id').defaultRandom().primaryKey(),
  entityType: text('entity_type').notNull(), // e.g. 'character', 'location'
  entityId: uuid('entity_id').notNull(),
  alias: text('alias').notNull(),
  aliasType: aliasTypeEnum('alias_type').notNull(),
  isPrimary: boolean('is_primary').notNull().default(false),
  createdAt: timestamp('created_at').notNull().defaultNow(),
}, (table) => [
  index('entity_aliases_entity_idx').on(table.entityType, table.entityId),
  index('entity_aliases_alias_idx').on(table.alias),
  unique('unique_entity_alias').on(table.entityType, table.entityId, table.alias),
]);

// Table 12: tags
export const tags = pgTable('tags', {
  id: uuid('id').defaultRandom().primaryKey(),
  slug: text('slug').notNull().unique(),
  name: text('name').notNull(),
}, (table) => [
  index('tags_slug_idx').on(table.slug),
]);

// Table 13: entity_tags (Universal Polymorphic Tagging)
export const entityTags = pgTable('entity_tags', {
  id: uuid('id').defaultRandom().primaryKey(),
  entityType: text('entity_type').notNull(),
  entityId: uuid('entity_id').notNull(),
  tagId: uuid('tag_id').notNull().references(() => tags.id, { onDelete: 'cascade' }),
}, (table) => [
  index('entity_tags_entity_idx').on(table.entityType, table.entityId),
  index('entity_tags_tag_id_idx').on(table.tagId),
  unique('unique_entity_tag').on(table.entityType, table.entityId, table.tagId),
]);

// Table 14: map_markers
export const mapMarkers = pgTable('map_markers', {
  id: uuid('id').defaultRandom().primaryKey(),
  locationId: uuid('location_id').notNull().references(() => locations.id, { onDelete: 'cascade' }),
  latitude: doublePrecision('latitude').notNull(),
  longitude: doublePrecision('longitude').notNull(),
  markerType: text('marker_type').notNull(), // e.g. 'collectibles', 'stunts', 'shop'
  priority: integer('priority').notNull().default(0),
  zoomLevel: integer('zoom_level').notNull().default(0), // Marker zoom visibility
  status: entityStatusEnum('status').notNull().default('draft'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
}, (table) => [
  index('map_markers_location_id_idx').on(table.locationId),
  index('map_markers_status_idx').on(table.status),
]);

// Table 15: image_optimization_queue (Future preparation)
export const imageOptimizationQueue = pgTable('image_optimization_queue', {
  id: uuid('id').defaultRandom().primaryKey(),
  mediaId: uuid('media_id').notNull().references(() => media.id, { onDelete: 'cascade' }),
  status: queueStatusEnum('status').notNull().default('pending'),
  targetSize: queueSizeEnum('target_size').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
}, (table) => [
  index('optimization_queue_media_idx').on(table.mediaId),
  index('optimization_queue_status_idx').on(table.status),
]);

// ==========================================
// DRIZZLE RELATIONSHIPS
// ==========================================

export const sourcesRelations = relations(sources, ({ many }) => ({
  media: many(media),
}));

export const mediaRelations = relations(media, ({ one, many }) => ({
  source: one(sources, {
    fields: [media.sourceId],
    references: [sources.id],
  }),
  entityMedia: many(entityMedia),
  characters: many(characters),
  locations: many(locations),
  vehicles: many(vehicles),
  weapons: many(weapons),
  businesses: many(businesses),
  queueTasks: many(imageOptimizationQueue),
}));

export const charactersRelations = relations(characters, ({ one }) => ({
  heroMedia: one(media, {
    fields: [characters.heroMediaId],
    references: [media.id],
  }),
}));

export const locationsRelations = relations(locations, ({ one, many }) => ({
  heroMedia: one(media, {
    fields: [locations.heroMediaId],
    references: [media.id],
  }),
  businesses: many(businesses),
  mapMarkers: many(mapMarkers),
}));

export const vehiclesRelations = relations(vehicles, ({ one }) => ({
  heroMedia: one(media, {
    fields: [vehicles.heroMediaId],
    references: [media.id],
  }),
}));

export const weaponsRelations = relations(weapons, ({ one }) => ({
  heroMedia: one(media, {
    fields: [weapons.heroMediaId],
    references: [media.id],
  }),
}));

export const businessesRelations = relations(businesses, ({ one }) => ({
  heroMedia: one(media, {
    fields: [businesses.heroMediaId],
    references: [media.id],
  }),
  location: one(locations, {
    fields: [businesses.locationId],
    references: [locations.id],
  }),
}));

export const entityMediaRelations = relations(entityMedia, ({ one }) => ({
  media: one(media, {
    fields: [entityMedia.mediaId],
    references: [media.id],
  }),
}));

export const entityTagsRelations = relations(entityTags, ({ one }) => ({
  tag: one(tags, {
    fields: [entityTags.tagId],
    references: [tags.id],
  }),
}));

export const tagsRelations = relations(tags, ({ many }) => ({
  entityTags: many(entityTags),
}));

export const mapMarkersRelations = relations(mapMarkers, ({ one }) => ({
  location: one(locations, {
    fields: [mapMarkers.locationId],
    references: [locations.id],
  }),
}));

export const imageOptimizationQueueRelations = relations(imageOptimizationQueue, ({ one }) => ({
  media: one(media, {
    fields: [imageOptimizationQueue.mediaId],
    references: [media.id],
  }),
}));
