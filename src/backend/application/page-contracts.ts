import { 
  CharacterViewModel, 
  LocationViewModel, 
  VehicleViewModel, 
  WeaponViewModel, 
  BusinessViewModel, 
  SearchMatchViewModel,
  SeoViewModel,
  BreadcrumbViewModel
} from '../types/view-models';
import { DbMedia, DbCharacter, DbLocation, DbVehicle, DbWeapon, DbBusiness, DbAlias, DbSource, EntityType } from '../types/database';

export interface PageStatisticsV1 {
  imagesCount: number;
  relationshipsCount: number;
  locationsCount?: number;
  vehiclesCount?: number;
  businessesCount?: number;
  charactersCount?: number;
}

export interface RecommendationItemV1 {
  id: string;
  type: EntityType;
  slug: string;
  name: string;
  thumbnailUrl: string | null;
}

// ==========================================
// VERSIONED PAGE CONTRACTS (V1)
// ==========================================

export interface CharacterPageV1 {
  version: 'v1';
  character: CharacterViewModel;
  statistics: PageStatisticsV1;
  recommendations: RecommendationItemV1[];
  relatedCharacters: DbCharacter[];
  relatedLocations: DbLocation[];
}

export interface LocationPageV1 {
  version: 'v1';
  location: LocationViewModel;
  statistics: PageStatisticsV1;
  recommendations: RecommendationItemV1[];
}

export interface VehiclePageV1 {
  version: 'v1';
  vehicle: VehicleViewModel;
  statistics: PageStatisticsV1;
  recommendations: RecommendationItemV1[];
}

export interface WeaponPageV1 {
  version: 'v1';
  weapon: WeaponViewModel;
  statistics: PageStatisticsV1;
  recommendations: RecommendationItemV1[];
}

export interface BusinessPageV1 {
  version: 'v1';
  business: BusinessViewModel;
  statistics: PageStatisticsV1;
  relatedBusinesses: DbBusiness[];
}

export interface SearchPageV1 {
  version: 'v1';
  query: string;
  total: number;
  limit: number;
  offset: number;
  categories: {
    characters: SearchMatchViewModel[];
    locations: SearchMatchViewModel[];
    vehicles: SearchMatchViewModel[];
    weapons: SearchMatchViewModel[];
    businesses: SearchMatchViewModel[];
    media: SearchMatchViewModel[];
  };
  suggestions: string[];
}

export interface AiContextV1 {
  version: 'v1';
  entityId: string;
  entityType: EntityType;
  name: string;
  officialDescription: string | null;
  aliases: DbAlias[];
  relationships: { type: string; targetType: string; targetName: string }[];
  locations: string[];
  businesses: string[];
  vehicles: string[];
  weapons: string[];
  media: { title: string; type: string; url: string }[];
  sources: DbSource[];
  statistics: PageStatisticsV1;
  breadcrumbs: BreadcrumbViewModel[];
  seo: SeoViewModel;
}

export interface MediaCollectionV1 {
  version: 'v1';
  artwork: DbMedia[];
  wallpapers: DbMedia[];
  screenshots: DbMedia[];
  coverArt: DbMedia[];
  featured: DbMedia[];
  latest: DbMedia[];
}
