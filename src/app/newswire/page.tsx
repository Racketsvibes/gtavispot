import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { db } from '@/backend/db';
import { sources, media, entityMedia } from '@/backend/db/schema';
import { characterApplication } from '@/backend/application/character.application';
import { locationApplication } from '@/backend/application/location.application';
import { vehicleApplication } from '@/backend/application/vehicle.application';
import NewswireClient from './NewswireClient';

export const metadata: Metadata = {
  title: 'Newswire & Release Center | GTA VI Spot',
  description: 'Follow every official Rockstar announcement, timeline launch milestones, updates, and trailer breakdowns for GTA VI Leonida.',
  alternates: {
    canonical: 'https://gtavispot.com/newswire',
  },
  openGraph: {
    title: 'Newswire & Release Center | GTA VI Spot',
    description: 'Factual updates on GTA VI timeline announcements, news releases, and patch trailers.',
    url: 'https://gtavispot.com/newswire',
  },
};

// Next.js ISR: Revalidate newswire page daily
export const revalidate = 86400;

export default async function NewswirePage() {
  // Query all database news logs on the server
  const [
    dbSources,
    dbMedia,
    dbEntityMedia,
    chars,
    locs,
    vehs
  ] = await Promise.all([
    db.select().from(sources).catch(() => []),
    db.select().from(media).catch(() => []),
    db.select().from(entityMedia).catch(() => []),
    characterApplication.charactersList().catch(() => []),
    locationApplication.locationsList().catch(() => []),
    vehicleApplication.vehiclesList().catch(() => [])
  ]);

  // Map entities for fast reference checks
  const entityMap: Record<string, { name: string; slug: string; type: string }> = {};
  chars.forEach((c: any) => { entityMap[c.id] = { name: c.name, slug: c.slug, type: 'character' }; });
  locs.forEach((l: any) => { entityMap[l.id] = { name: l.name, slug: l.slug, type: 'location' }; });
  vehs.forEach((v: any) => { entityMap[v.id] = { name: v.name, slug: v.slug, type: 'vehicle' }; });

  // Map each source to its thumbnail and connected entities list
  const announcements = dbSources.map((source: any) => {
    // 1. Resolve media linked to this source
    const sourceMediaList = dbMedia.filter((m: any) => m.sourceId === source.id);
    
    // Pick the best thumbnail (a trailer thumbnail or vercel_blob cdn url)
    const thumbnailObj = sourceMediaList.find((m: any) => m.mediaType === 'trailer' || m.cdnUrl) || sourceMediaList[0];
    const thumbnailUrl = (thumbnailObj ? (thumbnailObj.cdnUrl || thumbnailObj.thumbnailUrl) : null) || '/images/desktop.webp';

    // 2. Resolve related entities linked via entityMedia rows on this source's media
    const mediaIds = sourceMediaList.map((m: any) => m.id);
    const links = dbEntityMedia.filter((em: any) => mediaIds.includes(em.mediaId));
    
    const relatedEntities = Array.from(
      new Set(links.map((l: any) => l.entityId))
    )
      .map((id) => entityMap[id])
      .filter((ent) => ent !== undefined);

    return {
      id: source.id,
      name: source.name,
      type: source.sourceType,
      url: source.url,
      releaseDate: source.officialReleaseDate,
      thumbnailUrl,
      relatedEntities,
    };
  });

  return (
    <Suspense fallback={
      <div className="flex h-screen w-screen items-center justify-center bg-[#090b0e]">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-pink-500 border-t-transparent" />
      </div>
    }>
      <NewswireClient initialAnnouncements={announcements} />
    </Suspense>
  );
}
