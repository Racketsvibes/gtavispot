import { characterService } from '../services/character.service';
import { locationService } from '../services/location.service';
import { vehicleService } from '../services/vehicle.service';
import { weaponService } from '../services/weapon.service';
import { businessService } from '../services/business.service';
import { mediaService } from '../services/media.service';
import { CharacterDomain } from '../domain/character.domain';
import { LocationDomain } from '../domain/location.domain';
import { MediaManager } from '../lib/media-manager';
import { SeoEngine } from '../lib/seo-engine';
import { SearchIndexBuilder } from '../lib/search-index-builder';
import { db } from '../db';
import { characters, locations, vehicles, weapons, businesses, trailers, sources } from '../db/schema';
import { 
  CharacterViewModel, 
  LocationViewModel, 
  VehicleViewModel, 
  WeaponViewModel, 
  BusinessViewModel, 
  SearchViewModel, 
  AiResponseViewModel,
  SearchMatchViewModel
} from '../types/view-models';
import { EntityType, RelationshipType } from '../types/database';
import { EntityNotFoundError } from '../errors';

export class KnowledgeEngine {
  /**
   * Hydrates and returns the view model for a character.
   */
  async character(slug: string): Promise<CharacterViewModel> {
    const charData = await characterService.getCharacterBySlug(slug);
    
    // 1. Business Logic Domain Validation
    CharacterDomain.validate(charData, charData.heroMedia);

    // 2. SEO & Schema Meta Generation
    const breadcrumbs = [
      { name: 'Home', url: '/' },
      { name: 'Characters', url: '/characters' },
      { name: charData.name, url: `/character/${slug}` },
    ];
    const seoSchema = SeoEngine.generateSchema('character', charData);
    const seoMeta = SeoEngine.generateMeta(charData.name, charData.shortDescription || '', `/character/${slug}`);
    const openGraph = SeoEngine.generateOpenGraph(charData.name, charData.shortDescription || '', `/character/${slug}`, charData.heroMedia?.cdnUrl || undefined);

    // 3. Format View Model
    return {
      id: charData.id,
      slug: charData.slug,
      name: charData.name,
      officialName: charData.officialName,
      nickname: charData.nickname,
      shortDescription: charData.shortDescription,
      officialDescription: charData.officialDescription,
      isOfficial: charData.isOfficial,
      displayOrder: charData.displayOrder,
      status: charData.status,
      createdAt: charData.createdAt.toISOString(),
      updatedAt: charData.updatedAt.toISOString(),
      heroMedia: charData.heroMedia || null,
      gallery: MediaManager.getGallery(charData.gallery),
      aliases: charData.aliases,
      locations: charData.locations,
      vehicles: charData.vehicles,
      relationships: charData.relationships.map(r => ({
        id: r.entityId,
        type: r.entityType,
        slug: r.entityId, // Placeholder for target slug, resolved in frontend or queries
        name: r.entityName,
        relationshipType: r.relationshipType,
      })),
      breadcrumbs,
      seo: {
        ...seoMeta,
        openGraph,
        schema: seoSchema,
      },
    };
  }

  /**
   * Hydrates and returns the view model for a location.
   */
  async location(slug: string): Promise<LocationViewModel> {
    const locData = await locationService.getLocationBySlug(slug);

    // 1. Business Logic Domain Validation
    for (const b of locData.businesses) {
      LocationDomain.validateBusiness(b, locData);
    }
    for (const m of locData.mapMarkers) {
      LocationDomain.validateMapMarker(m, locData);
    }

    // 2. SEO Meta Generation
    const breadcrumbs = [
      { name: 'Home', url: '/' },
      { name: 'Locations', url: '/locations' },
      { name: locData.name, url: `/location/${slug}` },
    ];
    const seoSchema = SeoEngine.generateSchema('location', locData);
    const seoMeta = SeoEngine.generateMeta(locData.name, locData.description || '', `/location/${slug}`);
    const openGraph = SeoEngine.generateOpenGraph(locData.name, locData.description || '', `/location/${slug}`, locData.heroMedia?.cdnUrl || undefined);

    return {
      id: locData.id,
      slug: locData.slug,
      name: locData.name,
      region: locData.region,
      category: locData.category,
      description: locData.description,
      latitude: locData.latitude,
      longitude: locData.longitude,
      isOfficial: locData.isOfficial,
      displayOrder: locData.displayOrder,
      status: locData.status,
      createdAt: locData.createdAt.toISOString(),
      updatedAt: locData.updatedAt.toISOString(),
      heroMedia: locData.heroMedia || null,
      businesses: locData.businesses,
      characters: locData.characters,
      mapMarkers: locData.mapMarkers,
      media: locData.media,
      breadcrumbs,
      seo: {
        ...seoMeta,
        openGraph,
        schema: seoSchema,
      },
    };
  }

  /**
   * Hydrates and returns the view model for a vehicle.
   */
  async vehicle(slug: string): Promise<VehicleViewModel> {
    const vehData = await vehicleService.getVehicleBySlug(slug);

    const breadcrumbs = [
      { name: 'Home', url: '/' },
      { name: 'Vehicles', url: '/vehicles' },
      { name: vehData.name, url: `/vehicle/${slug}` },
    ];
    const seoSchema = SeoEngine.generateSchema('vehicle', vehData);
    const seoMeta = SeoEngine.generateMeta(vehData.name, vehData.description || '', `/vehicle/${slug}`);
    const openGraph = SeoEngine.generateOpenGraph(vehData.name, vehData.description || '', `/vehicle/${slug}`, vehData.heroMedia?.cdnUrl || undefined);

    return {
      id: vehData.id,
      slug: vehData.slug,
      name: vehData.name,
      brand: vehData.brand,
      vehicleClass: vehData.vehicleClass,
      description: vehData.description,
      isOfficial: vehData.isOfficial,
      displayOrder: vehData.displayOrder,
      status: vehData.status,
      createdAt: vehData.createdAt.toISOString(),
      updatedAt: vehData.updatedAt.toISOString(),
      heroMedia: vehData.heroMedia || null,
      gallery: MediaManager.getGallery(vehData.gallery),
      characters: vehData.characters,
      breadcrumbs,
      seo: {
        ...seoMeta,
        openGraph,
        schema: seoSchema,
      },
    };
  }

  /**
   * Hydrates and returns the view model for a weapon.
   */
  async weapon(slug: string): Promise<WeaponViewModel> {
    const wepData = await weaponService.getWeaponBySlug(slug);

    const breadcrumbs = [
      { name: 'Home', url: '/' },
      { name: 'Weapons', url: '/weapons' },
      { name: wepData.name, url: `/weapon/${slug}` },
    ];
    const seoSchema = SeoEngine.generateSchema('weapon', wepData);
    const seoMeta = SeoEngine.generateMeta(wepData.name, wepData.description || '', `/weapon/${slug}`);
    const openGraph = SeoEngine.generateOpenGraph(wepData.name, wepData.description || '', `/weapon/${slug}`, wepData.heroMedia?.cdnUrl || undefined);

    return {
      id: wepData.id,
      slug: wepData.slug,
      name: wepData.name,
      weaponClass: wepData.weaponClass,
      description: wepData.description,
      isOfficial: wepData.isOfficial,
      displayOrder: wepData.displayOrder,
      status: wepData.status,
      createdAt: wepData.createdAt.toISOString(),
      updatedAt: wepData.updatedAt.toISOString(),
      heroMedia: wepData.heroMedia || null,
      gallery: MediaManager.getGallery(wepData.gallery),
      breadcrumbs,
      seo: {
        ...seoMeta,
        openGraph,
        schema: seoSchema,
      },
    };
  }

  /**
   * Hydrates and returns the view model for a business.
   */
  async business(slug: string): Promise<BusinessViewModel> {
    const busData = await businessService.getBusinessBySlug(slug);

    const breadcrumbs = [
      { name: 'Home', url: '/' },
      { name: 'Businesses', url: '/businesses' },
      { name: busData.name, url: `/business/${slug}` },
    ];
    const seoSchema = SeoEngine.generateSchema('business', busData);
    const seoMeta = SeoEngine.generateMeta(busData.name, busData.description || '', `/business/${slug}`);
    const openGraph = SeoEngine.generateOpenGraph(busData.name, busData.description || '', `/business/${slug}`, busData.heroMedia?.cdnUrl || undefined);

    return {
      id: busData.id,
      slug: busData.slug,
      name: busData.name,
      businessType: busData.businessType,
      description: busData.description,
      locationId: busData.locationId,
      isOfficial: busData.isOfficial,
      displayOrder: busData.displayOrder,
      status: busData.status,
      createdAt: busData.createdAt.toISOString(),
      updatedAt: busData.updatedAt.toISOString(),
      heroMedia: busData.heroMedia || null,
      location: busData.location || null,
      breadcrumbs,
      seo: {
        ...seoMeta,
        openGraph,
        schema: seoSchema,
      },
    };
  }

  /**
   * High-performance, memory-resolved search matching keywords of entities.
   */
  async search(query: string, limit: number = 20, offset: number = 0): Promise<SearchViewModel> {
    const searchTerms = query.toLowerCase().trim().split(/\s+/).filter(t => t.length > 0);
    const matches: SearchMatchViewModel[] = [];
    const warnings: string[] = [];

    if (searchTerms.length === 0) {
      return { query, limit, offset, total: 0, matches: [], warnings };
    }

    // Load active indices for characters, locations, vehicles, weapons, businesses
    const allCharacters = await db.select({ id: characters.id, name: characters.name, slug: characters.slug }).from(characters);
    const allLocations = await db.select({ id: locations.id, name: locations.name, slug: locations.slug }).from(locations);
    const allVehicles = await db.select({ id: vehicles.id, name: vehicles.name, slug: vehicles.slug }).from(vehicles);
    const allWeapons = await db.select({ id: weapons.id, name: weapons.name, slug: weapons.slug }).from(weapons);
    const allBusinesses = await db.select({ id: businesses.id, name: businesses.name, slug: businesses.slug }).from(businesses);

    const indexItems = [
      ...allCharacters.map(c => ({ id: c.id, type: 'character' as EntityType })),
      ...allLocations.map(l => ({ id: l.id, type: 'location' as EntityType })),
      ...allVehicles.map(v => ({ id: v.id, type: 'vehicle' as EntityType })),
      ...allWeapons.map(w => ({ id: w.id, type: 'weapon' as EntityType })),
      ...allBusinesses.map(b => ({ id: b.id, type: 'business' as EntityType })),
    ];

    for (const item of indexItems) {
      const searchIndex = await SearchIndexBuilder.buildIndex(item.type, item.id);
      if (!searchIndex) continue;

      let score = 0;
      for (const term of searchTerms) {
        if (searchIndex.keywords.some(k => k.includes(term))) {
          score += 1;
        }
      }

      if (score > 0) {
        matches.push({
          id: item.id,
          type: item.type,
          slug: searchIndex.slug,
          title: searchIndex.title,
          snippet: searchIndex.description || `${searchIndex.title} (GTA VI ${item.type})`,
          score: score / searchTerms.length,
        });
      }
    }

    // Sort by match score descending
    matches.sort((a, b) => b.score - a.score);

    const paginated = matches.slice(offset, offset + limit);

    return {
      query,
      limit,
      offset,
      total: matches.length,
      matches: paginated,
      warnings,
    };
  }

  /**
   * Resolves cited Q&A knowledge assistant checks.
   */
  async ask(question: string): Promise<AiResponseViewModel> {
    const qLower = question.toLowerCase();
    
    // Default fallback
    const result: AiResponseViewModel = {
      question,
      answer: "I'm sorry, I couldn't resolve a direct fact about that in the GTA VI database. Is it character, location, or vehicle related?",
      citations: [],
      relatedEntities: [],
      confidenceScore: 0.1,
    };

    // Factual lookup matching keywords in database
    const resolvedSearch = await this.search(question, 3, 0);
    if (resolvedSearch.total > 0) {
      const bestMatch = resolvedSearch.matches[0];
      const targetEntity = await this.character(bestMatch.slug)
        .catch(() => this.location(bestMatch.slug))
        .catch(() => this.vehicle(bestMatch.slug))
        .catch(() => this.weapon(bestMatch.slug))
        .catch(() => this.business(bestMatch.slug))
        .catch(() => null);

      if (targetEntity) {
        // Resolve source trailers for citation
        const dbSources = await db.select().from(sources).limit(1);
        const citations = dbSources.map(s => ({ sourceName: s.name, url: s.url }));

        const entityAny = targetEntity as any;
        result.answer = entityAny.shortDescription || 
                        entityAny.description || 
                        entityAny.officialDescription || 
                        `Factual record found for ${entityAny.name} (GTA VI ${bestMatch.type}).`;
        
        result.citations = citations;
        result.relatedEntities = [{ id: targetEntity.id, type: bestMatch.type, name: entityAny.name, slug: targetEntity.slug }];
        result.confidenceScore = 0.9;
      }
    }

    return result;
  }
}

export const knowledgeEngine = new KnowledgeEngine();
