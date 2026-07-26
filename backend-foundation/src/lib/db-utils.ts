import { EntityType, RelationshipType } from '../types/database';

/**
 * Creates a URL-safe, clean slug from a name or title string.
 */
export function createSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove non-word characters (except spaces and hyphens)
    .replace(/[\s_-]+/g, '-')  // Replace spaces, underscores, and multiple hyphens with a single hyphen
    .replace(/^-+|-+$/g, '');  // Trim leading/trailing hyphens
}

/**
 * Normalizes an alias string by trimming it and collapsing double spaces.
 */
export function normalizeAlias(alias: string): string {
  return alias
    .trim()
    .replace(/\s+/g, ' ');
}

/**
 * Normalizes a tag to lowercase, trimmed, and hyphenated format.
 */
export function normalizeTag(tag: string): string {
  return tag
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-');
}

/**
 * Validates directional entity relationships to enforce semantic checks
 * (e.g. characters can drive vehicles, but locations cannot drive characters).
 */
export function validateRelationship(
  from: EntityType,
  type: RelationshipType,
  to: EntityType
): boolean {
  // Catch-all general links are always valid
  if (type === 'related_to' || type === 'connected_to') {
    return true;
  }

  switch (type) {
    case 'appears_in':
    case 'featured_in':
      // Entities appear/are featured in media
      return (
        (from === 'character' || 
         from === 'location' || 
         from === 'vehicle' || 
         from === 'weapon' || 
         from === 'business') && 
        to === 'media'
      );

    case 'located_in':
      // Entities are located in locations
      return (
        (from === 'character' || 
         from === 'vehicle' || 
         from === 'weapon' || 
         from === 'business' || 
         from === 'location' || 
         from === 'map_marker') && 
        to === 'location'
      );

    case 'contains':
      // Locations can contain locations, businesses, map markers, etc.
      return from === 'location' && (to === 'location' || to === 'business' || to === 'map_marker');

    case 'drives':
      // Characters drive vehicles
      return from === 'character' && to === 'vehicle';

    case 'uses':
      // Characters use weapons
      return from === 'character' && to === 'weapon';

    case 'near':
      // Proximity checks only make sense between locations
      return from === 'location' && to === 'location';

    case 'belongs_to':
      // Businesses belong to characters (owners) or locations; vehicles/weapons belong to characters
      return (
        (from === 'business' && (to === 'character' || to === 'location')) ||
        ((from === 'vehicle' || from === 'weapon') && to === 'character')
      );

    default:
      return false;
  }
}
