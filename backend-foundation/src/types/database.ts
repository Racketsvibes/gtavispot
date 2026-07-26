import { 
  characters, 
  locations, 
  vehicles, 
  weapons, 
  businesses, 
  media, 
  sources, 
  entityAliases, 
  tags, 
  mapMarkers, 
  relationships 
} from '../db/schema';

// Shared Database Helper Types and Type Aliases

export type UUID = string;

export type Timestamp = string; // ISO 8601 string format

export type Slug = string;

export type EntityStatus = 'draft' | 'published' | 'archived' | 'official';

export type MediaType = 'image' | 'artwork' | 'wallpaper' | 'screenshot' | 'video' | 'trailer' | 'thumbnail';

export type RelationshipType = 
  | 'appears_in' 
  | 'located_in' 
  | 'contains' 
  | 'drives' 
  | 'uses' 
  | 'featured_in' 
  | 'related_to' 
  | 'connected_to' 
  | 'near' 
  | 'belongs_to';

export type EntityMediaRole = 
  | 'hero' 
  | 'gallery' 
  | 'wallpaper' 
  | 'cover' 
  | 'featured' 
  | 'thumbnail' 
  | 'scene';

// ==========================================
// REUSABLE HELPER TYPES (Commit 3)
// ==========================================

export type EntityType = 
  | 'character' 
  | 'location' 
  | 'vehicle' 
  | 'weapon' 
  | 'business' 
  | 'media' 
  | 'tag' 
  | 'map_marker';

export interface EntityReference {
  id: UUID;
  type: EntityType;
}

export interface RelationshipReference {
  from: EntityReference;
  type: RelationshipType;
  to: EntityReference;
}

export interface MediaReference {
  id: UUID;
  role: EntityMediaRole;
}

// ==========================================
// DRIZZLE SCHEMA INFERRED INJECTED SELECTS
// ==========================================

export type DbCharacter = typeof characters.$inferSelect;
export type DbLocation = typeof locations.$inferSelect;
export type DbVehicle = typeof vehicles.$inferSelect;
export type DbWeapon = typeof weapons.$inferSelect;
export type DbBusiness = typeof businesses.$inferSelect;
export type DbMedia = typeof media.$inferSelect;
export type DbSource = typeof sources.$inferSelect;
export type DbAlias = typeof entityAliases.$inferSelect;
export type DbTag = typeof tags.$inferSelect;
export type DbMapMarker = typeof mapMarkers.$inferSelect;
export type DbRelationship = typeof relationships.$inferSelect;

// ==========================================
// RICH HYDRATED RELATION TYPES (Commit 4)
// ==========================================

export interface CharacterWithRelations extends DbCharacter {
  heroMedia?: DbMedia | null;
  gallery: DbMedia[];
  aliases: DbAlias[];
  locations: DbLocation[];
  vehicles: DbVehicle[];
  relationships: {
    relationshipType: RelationshipType;
    entityType: EntityType;
    entityId: string;
    entityName: string;
  }[];
}

export interface LocationWithRelations extends DbLocation {
  heroMedia?: DbMedia | null;
  businesses: DbBusiness[];
  characters: DbCharacter[];
  mapMarkers: DbMapMarker[];
  media: DbMedia[];
}

export interface VehicleWithRelations extends DbVehicle {
  heroMedia?: DbMedia | null;
  gallery: DbMedia[];
  characters: DbCharacter[];
}

export interface WeaponWithRelations extends DbWeapon {
  heroMedia?: DbMedia | null;
  gallery: DbMedia[];
}

export interface BusinessWithRelations extends DbBusiness {
  heroMedia?: DbMedia | null;
  location?: DbLocation | null;
}

export interface MediaWithRelations extends DbMedia {
  source?: DbSource | null;
  entities: {
    id: string;
    type: EntityType;
    name: string;
    role: string;
  }[];
}
