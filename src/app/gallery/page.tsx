import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { mediaRepository } from '@/backend/repositories/media.repository';
import { characterApplication } from '@/backend/application/character.application';
import { locationApplication } from '@/backend/application/location.application';
import { vehicleApplication } from '@/backend/application/vehicle.application';
import { businessApplication } from '@/backend/application/business.application';
import { db } from '@/backend/db';
import { entityMedia } from '@/backend/db/schema';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: 'Official Media Gallery | GTA VI Spot',
  description: 'Browse the complete index of official GTA VI screenshots, cover art, 4K wallpapers, and official character artwork from Rockstar Games.',
  alternates: {
    canonical: 'https://gtavispot.com/gallery',
  },
  openGraph: {
    title: 'Official Media Gallery | GTA VI Spot',
    description: 'Explore high-resolution GTA VI screenshots, trailer breakdowns, and official artwork.',
    url: 'https://gtavispot.com/gallery',
    images: ['https://gtavispot.com/images/desktop.webp'],
  },
};

// Next.js ISR: Revalidate gallery page daily
export const revalidate = 86400;

export default async function GalleryPage() {
  // Query data on the server
  const [
    allMedia,
    allEntityMedia,
    chars,
    locs,
    vehs,
    bus
  ] = await Promise.all([
    mediaRepository.findAll().catch(() => []),
    db.select().from(entityMedia).catch(() => []),
    characterApplication.charactersList().catch(() => []),
    locationApplication.locationsList().catch(() => []),
    vehicleApplication.vehiclesList().catch(() => []),
    businessApplication.businessesList().catch(() => [])
  ]);

  // Map all entities to a flat dictionary for quick client lookups
  const entityMap: Record<string, { name: string; slug: string; type: string }> = {};

  chars.forEach((c: any) => { entityMap[c.id] = { name: c.name, slug: c.slug, type: 'character' }; });
  locs.forEach((l: any) => { entityMap[l.id] = { name: l.name, slug: l.slug, type: 'location' }; });
  vehs.forEach((v: any) => { entityMap[v.id] = { name: v.name, slug: v.slug, type: 'vehicle' }; });
  bus.forEach((b: any) => { entityMap[b.id] = { name: b.name, slug: b.slug, type: 'business' }; });

  return (
    <Suspense fallback={
      <div className="flex h-screen w-screen items-center justify-center bg-[#090b0e]">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-pink-500 border-t-transparent" />
      </div>
    }>
      <GalleryClient
        initialMedia={allMedia}
        entityMediaLinks={allEntityMedia}
        entityMap={entityMap}
      />
    </Suspense>
  );
}
