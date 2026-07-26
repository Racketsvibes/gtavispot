import { z } from 'zod';

export const uuidSchema = z.string().uuid('Invalid UUID format.');

// Strict slug regex: lowercase alphanumeric characters and single hyphens, no trailing/leading hyphens
export const slugSchema = z
  .string()
  .min(1, 'Slug cannot be empty.')
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must consist only of lowercase letters, numbers, and single hyphens.');

export const entityTypeSchema = z.enum([
  'character',
  'location',
  'vehicle',
  'weapon',
  'business',
  'media',
  'tag',
  'map_marker'
]);

export const relationshipTypeSchema = z.enum([
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

export const searchSchema = z.object({
  query: z.string().trim().optional(),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0)
});
