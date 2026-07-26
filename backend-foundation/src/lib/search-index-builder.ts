import { findEntity, findAliases } from '../queries/helpers';
import { db } from '../db';
import { entityTags, tags } from '../db/schema';
import { eq } from 'drizzle-orm';
import { EntityType } from '../types/database';

export interface SearchIndexPayload {
  id: string;
  type: EntityType;
  slug: string;
  title: string;
  keywords: string[];
  description: string;
}

export class SearchIndexBuilder {
  /**
   * Generates a compiled search index payload for any entity by aggregating
   * names, slugs, descriptions, aliases, and taxonomy tags.
   */
  static async buildIndex(entityType: EntityType, entityId: string): Promise<SearchIndexPayload | null> {
    const entity = await findEntity(entityType, entityId);
    if (!entity) return null;

    const keywords = new Set<string>();

    const name = entity.name || entity.title || '';
    const slug = entity.slug || '';
    const description = entity.shortDescription || entity.description || entity.officialDescription || '';

    if (name) {
      keywords.add(name.toLowerCase());
      name.split(/\s+/).forEach((w: string) => keywords.add(w.toLowerCase().replace(/[^\w]/g, '')));
    }
    if (slug) {
      keywords.add(slug.toLowerCase());
      keywords.add(slug.toLowerCase().replace(/-/g, ' '));
    }

    // 1. Resolve Aliases
    const aliases = await findAliases(entityType, entityId);
    aliases.forEach(a => {
      keywords.add(a.alias.toLowerCase());
      a.alias.split(/\s+/).forEach((w: string) => keywords.add(w.toLowerCase().replace(/[^\w]/g, '')));
    });

    // 2. Resolve Tags
    const dbTags = await db
      .select({ name: tags.name, slug: tags.slug })
      .from(tags)
      .innerJoin(entityTags, eq(entityTags.tagId, tags.id))
      .where(eq(entityTags.entityId, entityId));

    dbTags.forEach(t => {
      keywords.add(t.name.toLowerCase());
      keywords.add(t.slug.toLowerCase());
      keywords.add(t.slug.toLowerCase().replace(/-/g, ' '));
    });

    return {
      id: entityId,
      type: entityType,
      slug,
      title: name,
      keywords: Array.from(keywords).filter(k => k.trim().length > 0),
      description,
    };
  }
}
