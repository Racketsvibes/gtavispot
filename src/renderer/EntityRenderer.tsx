import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { pageRegistry } from '@/backend/application/registry';
import { EntityType } from '@/backend/types/database';
import EntityLayout from './EntityLayout';
import HeroSection from './HeroSection';
import GallerySection from './GallerySection';
import StatisticsSection from './StatisticsSection';
import BreadcrumbSection from './BreadcrumbSection';
import RelatedSection from './RelatedSection';
import MediaSection from './MediaSection';
import SidebarSection from './SidebarSection';
import SchemaSection from './SchemaSection';
import NavigationSection from './NavigationSection';

// Application layers for sequential list navigation and static params
import { characterApplication } from '@/backend/application/character.application';
import { locationApplication } from '@/backend/application/location.application';
import { vehicleApplication } from '@/backend/application/vehicle.application';
import { weaponApplication } from '@/backend/application/weapon.application';
import { businessApplication } from '@/backend/application/business.application';

interface EntityRendererProps {
  entityType: EntityType;
  slug: string;
}

export default async function EntityRenderer({ entityType, slug }: EntityRendererProps) {
  let payload: any;
  try {
    payload = await pageRegistry.loadPage(entityType, slug);
  } catch (error) {
    console.error(`Error loading page for ${entityType}/${slug}:`, error);
    return notFound();
  }

  if (!payload) return notFound();

  // Resolve polymorphic entity properties
  const details = getEntityDetails(entityType, payload);

  // Resolve sequential list navigation metadata
  const navigationInfo = await getNavigationInfo(entityType, slug);

  return (
    <>
      <SchemaSection schema={payload.seo?.schema} />
      
      <EntityLayout
        breadcrumbs={<BreadcrumbSection items={payload.breadcrumbs} />}
        hero={
          <HeroSection
            title={details.name}
            officialName={details.officialName}
            nickname={details.nickname}
            description={details.description}
            status={details.status}
            isOfficial={details.isOfficial}
            heroMedia={payload.heroMedia}
          />
        }
        statistics={payload.statistics ? <StatisticsSection statistics={payload.statistics} /> : undefined}
        sidebar={<SidebarSection entityType={entityType} data={details.attributes} />}
        mainContent={
          <div className="space-y-10">
            {/* Embed official media reveal video if available */}
            {payload.youtubeId && (
              <MediaSection youtubeId={payload.youtubeId} title={details.name} />
            )}
            
            <GallerySection gallery={payload.gallery || []} />
            
            {payload.recommendations && payload.recommendations.length > 0 && (
              <RelatedSection relationships={payload.recommendations} />
            )}
          </div>
        }
        navigation={
          <NavigationSection
            prevSlug={navigationInfo.prevSlug}
            nextSlug={navigationInfo.nextSlug}
            prevName={navigationInfo.prevName}
            nextName={navigationInfo.nextName}
            categoryName={navigationInfo.categoryName}
            categoryUrl={navigationInfo.categoryUrl}
          />
        }
      />
    </>
  );
}

/**
 * Maps polymorphic entity payloads to standard Hero variables.
 */
function getEntityDetails(type: EntityType, payload: any) {
  switch (type) {
    case 'character':
      return {
        name: payload.character.name,
        officialName: null,
        nickname: payload.character.nickname,
        description: payload.character.description || '',
        status: payload.character.status,
        isOfficial: payload.character.isOfficial,
        attributes: payload.character,
      };
    case 'location':
      return {
        name: payload.location.name,
        officialName: null,
        nickname: null,
        description: payload.location.description || '',
        status: payload.location.status,
        isOfficial: payload.location.isOfficial,
        attributes: payload.location,
      };
    case 'vehicle':
      return {
        name: payload.vehicle.name,
        officialName: payload.vehicle.brand ? `${payload.vehicle.brand} ${payload.vehicle.name}` : null,
        nickname: null,
        description: payload.vehicle.description || '',
        status: payload.vehicle.status,
        isOfficial: payload.vehicle.isOfficial,
        attributes: payload.vehicle,
      };
    case 'weapon':
      return {
        name: payload.weapon.name,
        officialName: null,
        nickname: null,
        description: payload.weapon.description || '',
        status: payload.weapon.status,
        isOfficial: payload.weapon.isOfficial,
        attributes: payload.weapon,
      };
    case 'business':
      return {
        name: payload.business.name,
        officialName: null,
        nickname: null,
        description: payload.business.description || '',
        status: payload.business.status,
        isOfficial: payload.business.isOfficial,
        attributes: payload.business,
      };
    default:
      throw new Error(`Unsupported entity type: ${type}`);
  }
}

/**
 * Computes sequential navigation metadata for prev/next link pointers.
 */
async function getNavigationInfo(type: EntityType, slug: string) {
  let list: { slug: string; name: string }[] = [];
  let categoryName = '';
  let categoryUrl = '';

  switch (type) {
    case 'character':
      const chars = await characterApplication.charactersList();
      list = chars.map(c => ({ slug: c.slug, name: c.name }));
      categoryName = 'Characters';
      categoryUrl = '/characters';
      break;
    case 'location':
      const locs = await locationApplication.locationsList();
      list = locs.map(l => ({ slug: l.slug, name: l.name }));
      categoryName = 'Locations';
      categoryUrl = '/locations';
      break;
    case 'vehicle':
      const vehs = await vehicleApplication.vehiclesList();
      list = vehs.map(v => ({ slug: v.slug, name: v.name }));
      categoryName = 'Vehicles';
      categoryUrl = '/vehicles';
      break;
    case 'weapon':
      const weaps = await weaponApplication.weaponsList();
      list = weaps.map(w => ({ slug: w.slug, name: w.name }));
      categoryName = 'Weapons';
      categoryUrl = '/weapons';
      break;
    case 'business':
      const bus = await businessApplication.businessesList();
      list = bus.map(b => ({ slug: b.slug, name: b.name }));
      categoryName = 'Businesses';
      categoryUrl = '/businesses';
      break;
  }

  const index = list.findIndex(item => item.slug === slug);
  const prevItem = index > 0 ? list[index - 1] : null;
  const nextItem = index >= 0 && index < list.length - 1 ? list[index + 1] : null;

  return {
    prevSlug: prevItem?.slug || null,
    prevName: prevItem?.name || null,
    nextSlug: nextItem?.slug || null,
    nextName: nextItem?.name || null,
    categoryName,
    categoryUrl,
  };
}

/**
 * Static Params Generator for incremental static builds.
 */
export async function generateStaticParamsFor(type: EntityType) {
  try {
    switch (type) {
      case 'character':
        const chars = await characterApplication.charactersList();
        return chars.map(c => ({ slug: c.slug }));
      case 'location':
        const locs = await locationApplication.locationsList();
        return locs.map(l => ({ slug: l.slug }));
      case 'vehicle':
        const vehs = await vehicleApplication.vehiclesList();
        return vehs.map(v => ({ slug: v.slug }));
      case 'weapon':
        const weaps = await weaponApplication.weaponsList();
        return weaps.map(w => ({ slug: w.slug }));
      case 'business':
        const bus = await businessApplication.businessesList();
        return bus.map(b => ({ slug: b.slug }));
      default:
        return [];
    }
  } catch (err) {
    console.error(`Static params resolver failed for ${type}:`, err);
    return [];
  }
}

/**
 * Reusable SEO Metadata compiler for next.js generateMetadata method.
 */
export async function generateMetadataFor(type: EntityType, slug: string): Promise<Metadata> {
  try {
    const payload = await pageRegistry.loadPage(type, slug);
    if (!payload || !payload.seo) return {};

    const { seo, heroMedia } = payload;
    const imageUrl = heroMedia?.cdnUrl || 'https://gtavispot.com/images/desktop.webp';

    return {
      title: seo.title,
      description: seo.description,
      alternates: {
        canonical: seo.canonicalUrl || `https://gtavispot.com/${type}s/${slug}`,
      },
      openGraph: {
        title: seo.title,
        description: seo.description,
        url: seo.canonicalUrl || `https://gtavispot.com/${type}s/${slug}`,
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: seo.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: seo.title,
        description: seo.description,
        images: [imageUrl],
      },
    };
  } catch (err) {
    console.error(`Error generating metadata for ${type}/${slug}:`, err);
    return {};
  }
}
