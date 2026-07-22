import { EntityType } from '../types/database';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export class SeoEngine {
  private static BASE_URL = 'https://gtavispot.com';

  /**
   * Generates a fully qualified canonical URL.
   */
  static generateCanonical(path: string): string {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    // Remove trailing slash if present to maintain URL standardization
    const normalizedPath = cleanPath.endsWith('/') && cleanPath.length > 1 
      ? cleanPath.slice(0, -1) 
      : cleanPath;
    return `${this.BASE_URL}${normalizedPath}`;
  }

  /**
   * Generates basic HTML meta tag structures.
   */
  static generateMeta(title: string, description: string, path: string) {
    const canonical = this.generateCanonical(path);
    return {
      title: `${title} | GTA VI Spot`,
      description,
      canonical,
    };
  }

  /**
   * Generates Open Graph metadata objects for social sharing.
   */
  static generateOpenGraph(title: string, description: string, path: string, imageUrl?: string) {
    const canonical = this.generateCanonical(path);
    return {
      'og:title': `${title} | GTA VI Spot`,
      'og:description': description,
      'og:url': canonical,
      'og:type': 'website',
      'og:image': imageUrl || `${this.BASE_URL}/og-default.jpg`,
      'twitter:card': 'summary_large_image',
    };
  }

  /**
   * Generates structured JSON-LD Breadcrumb schemas.
   */
  static generateBreadcrumbs(items: BreadcrumbItem[]) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${this.BASE_URL}${item.url.startsWith('/') ? item.url : `/${item.url}`}`,
      })),
    };
  }

  /**
   * Generates structured JSON-LD Schema.org markup.
   */
  static generateSchema(entityType: EntityType, entity: any) {
    const base = {
      '@context': 'https://schema.org',
      name: entity.name || entity.title || '',
      description: entity.description || entity.shortDescription || '',
      url: `${this.BASE_URL}/${entityType}/${entity.slug}`,
    };

    switch (entityType) {
      case 'character':
        return {
          ...base,
          '@type': 'Person',
          alternateName: entity.nickname || undefined,
        };
      case 'location':
        return {
          ...base,
          '@type': 'Place',
          geo: entity.latitude !== undefined && entity.longitude !== undefined && entity.latitude !== null && entity.longitude !== null ? {
            '@type': 'GeoCoordinates',
            latitude: entity.latitude,
            longitude: entity.longitude,
          } : undefined,
        };
      case 'vehicle':
        return {
          ...base,
          '@type': 'Product',
          category: 'Vehicle',
          brand: entity.brand || undefined,
        };
      case 'weapon':
        return {
          ...base,
          '@type': 'Product',
          category: 'Weapon',
        };
      case 'business':
        return {
          ...base,
          '@type': 'LocalBusiness',
        };
      default:
        return base;
    }
  }
}
