import { knowledgeEngine } from '../knowledge/engine';
import { StatisticsBuilder } from './statistics.application';
import { AiContextV1 } from './page-contracts';
import { db } from '../db';
import { sources } from '../db/schema';
import { EntityType } from '../types/database';
import { EntityNotFoundError } from '../errors';

export class AiApplication {
  /**
   * Compiles strict database facts (no LLM generation) for an entity,
   * supplying clean prompt context to AI assistants.
   */
  async aiContext(entityType: EntityType, slug: string): Promise<AiContextV1> {
    let vm: any = null;
    switch (entityType) {
      case 'character':
        vm = await knowledgeEngine.character(slug);
        break;
      case 'location':
        vm = await knowledgeEngine.location(slug);
        break;
      case 'vehicle':
        vm = await knowledgeEngine.vehicle(slug);
        break;
      case 'weapon':
        vm = await knowledgeEngine.weapon(slug);
        break;
      case 'business':
        vm = await knowledgeEngine.business(slug);
        break;
      default:
        throw new Error(`Unsupported entity type: "${entityType}"`);
    }

    if (!vm) {
      throw new EntityNotFoundError(entityType, slug);
    }

    const allSources = await db.select().from(sources);
    const statistics = await StatisticsBuilder.buildEntityStats(entityType, vm.id);
    const mediaUrls = (vm.gallery || []).map((m: any) => ({
      title: m.title,
      type: m.mediaType,
      url: m.cdnUrl || m.youtubeId || '',
    }));

    return {
      version: 'v1',
      entityId: vm.id,
      entityType,
      name: vm.name,
      officialDescription: vm.officialDescription || vm.description || '',
      aliases: vm.aliases || [],
      relationships: (vm.relationships || []).map((r: any) => ({
        type: r.relationshipType,
        targetType: r.type,
        targetName: r.name,
      })),
      locations: (vm.locations || []).map((l: any) => l.name),
      businesses: (vm.businesses || []).map((b: any) => b.name),
      vehicles: (vm.vehicles || []).map((v: any) => v.name),
      weapons: [],
      media: mediaUrls,
      sources: allSources,
      statistics,
      breadcrumbs: vm.breadcrumbs,
      seo: vm.seo,
    };
  }
}

export const aiApplication = new AiApplication();
