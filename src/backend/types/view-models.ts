import { 
  DbCharacter, 
  DbLocation, 
  DbVehicle, 
  DbWeapon, 
  DbBusiness, 
  DbMedia, 
  DbAlias, 
  DbMapMarker,
  EntityType,
  RelationshipType
} from './database';

export interface BreadcrumbViewModel {
  name: string;
  url: string;
}

export interface SeoViewModel {
  title: string;
  description: string;
  canonical: string;
  openGraph: Record<string, string>;
  schema: Record<string, any>;
}

export interface RelatedEntityViewModel {
  id: string;
  type: EntityType;
  slug: string;
  name: string;
  relationshipType: RelationshipType;
}

// ==========================================
// KNOWLEDGE VIEW MODELS
// ==========================================

export interface CharacterViewModel {
  id: string;
  slug: string;
  name: string;
  officialName: string | null;
  nickname: string | null;
  shortDescription: string | null;
  officialDescription: string | null;
  isOfficial: boolean;
  displayOrder: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  heroMedia: DbMedia | null;
  gallery: DbMedia[];
  aliases: DbAlias[];
  locations: DbLocation[];
  vehicles: DbVehicle[];
  relationships: RelatedEntityViewModel[];
  breadcrumbs: BreadcrumbViewModel[];
  seo: SeoViewModel;
}

export interface LocationViewModel {
  id: string;
  slug: string;
  name: string;
  region: string | null;
  category: string | null;
  description: string | null;
  latitude: number | null;
  longitude: number | null;
  isOfficial: boolean;
  displayOrder: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  heroMedia: DbMedia | null;
  businesses: DbBusiness[];
  characters: DbCharacter[];
  mapMarkers: DbMapMarker[];
  media: DbMedia[];
  breadcrumbs: BreadcrumbViewModel[];
  seo: SeoViewModel;
}

export interface VehicleViewModel {
  id: string;
  slug: string;
  name: string;
  brand: string | null;
  vehicleClass: string | null;
  description: string | null;
  isOfficial: boolean;
  displayOrder: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  heroMedia: DbMedia | null;
  gallery: DbMedia[];
  characters: DbCharacter[];
  breadcrumbs: BreadcrumbViewModel[];
  seo: SeoViewModel;
}

export interface WeaponViewModel {
  id: string;
  slug: string;
  name: string;
  weaponClass: string | null;
  description: string | null;
  isOfficial: boolean;
  displayOrder: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  heroMedia: DbMedia | null;
  gallery: DbMedia[];
  breadcrumbs: BreadcrumbViewModel[];
  seo: SeoViewModel;
}

export interface BusinessViewModel {
  id: string;
  slug: string;
  name: string;
  businessType: string | null;
  description: string | null;
  locationId: string | null;
  isOfficial: boolean;
  displayOrder: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  heroMedia: DbMedia | null;
  location: DbLocation | null;
  breadcrumbs: BreadcrumbViewModel[];
  seo: SeoViewModel;
}

// ==========================================
// SEARCH & AI KNOWLEDGE ENGINE VIEW MODELS
// ==========================================

export interface SearchMatchViewModel {
  id: string;
  type: EntityType;
  slug: string;
  title: string;
  snippet: string;
  score: number;
}

export interface SearchViewModel {
  query: string;
  limit: number;
  offset: number;
  total: number;
  matches: SearchMatchViewModel[];
  warnings: string[];
}

export interface CitationViewModel {
  sourceName: string;
  url: string | null;
}

export interface AiResponseViewModel {
  question: string;
  answer: string;
  citations: CitationViewModel[];
  relatedEntities: { id: string; type: EntityType; name: string; slug: string }[];
  confidenceScore: number;
}
