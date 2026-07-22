import React, { Suspense } from 'react';
import { Metadata } from 'next';
import * as fs from 'fs';
import * as path from 'path';
import { db } from '@/backend/db';
import {
  characters,
  locations,
  vehicles,
  weapons,
  businesses,
  media,
  relationships,
  mapMarkers,
  sources
} from '@/backend/db/schema';
import { isNull, sql } from 'drizzle-orm';
import PlatformClient from './PlatformClient';

export const metadata: Metadata = {
  title: 'Platform Operations & Automation Suite | GTA VI Spot',
  description: 'Operations cockpit validating system health, database schemas, SEO canoncal rules, and Rockstar Asset imports.',
  robots: {
    index: false,
    follow: false,
  },
};

// Next.js ISR: Revalidate platform dashboard hourly
export const revalidate = 3600;

export default async function PlatformAdminPage() {
  // 1. Load Rockstar Import report JSON
  let importReport: any = {
    characters: 8,
    locations: 6,
    vehicles: 7,
    weapons: 19,
    businesses: 3,
    images: 457,
    relationships: 452,
    warnings: []
  };

  try {
    const reportPath = path.join(process.cwd(), 'backend-foundation', 'import-report.json');
    if (fs.existsSync(reportPath)) {
      importReport = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
    }
  } catch (err) {
    console.error('Error reading import-report.json:', err);
  }

  // 2. Query live database counts & health validations
  const [
    dbChars,
    dbLocs,
    dbVehs,
    dbWeaps,
    dbBus,
    dbMedia,
    dbRelations,
    dbMarkers,
    dbSources
  ] = await Promise.all([
    db.select().from(characters).catch(() => []),
    db.select().from(locations).catch(() => []),
    db.select().from(vehicles).catch(() => []),
    db.select().from(weapons).catch(() => []),
    db.select().from(businesses).catch(() => []),
    db.select().from(media).catch(() => []),
    db.select().from(relationships).catch(() => []),
    db.select().from(mapMarkers).catch(() => []),
    db.select().from(sources).catch(() => [])
  ]);

  // Media validation checks
  const missingAltTextCount = dbMedia.filter((m: any) => !m.altText || m.altText.trim() === '').length;
  
  // Hash duplicates checks
  const hashCounts: Record<string, number> = {};
  dbMedia.forEach((m: any) => {
    if (m.hash) {
      hashCounts[m.hash] = (hashCounts[m.hash] || 0) + 1;
    }
  });
  const duplicateImagesCount = Object.values(hashCounts).filter((cnt) => cnt > 1).length;

  // Entity validation checks
  const relationEntityIds = new Set([
    ...dbRelations.map((r: any) => r.fromEntityId),
    ...dbRelations.map((r: any) => r.toEntityId)
  ]);

  const entitiesWithoutRelations = [
    ...dbChars.filter((c: any) => !relationEntityIds.has(c.id)),
    ...dbLocs.filter((l: any) => !relationEntityIds.has(l.id)),
    ...dbVehs.filter((v: any) => !relationEntityIds.has(v.id)),
    ...dbWeaps.filter((w: any) => !relationEntityIds.has(w.id)),
    ...dbBus.filter((b: any) => !relationEntityIds.has(b.id))
  ].length;

  // Description check
  const entitiesWithoutDescription = [
    ...dbChars.filter((c: any) => !c.shortDescription && !c.officialDescription),
    ...dbLocs.filter((l: any) => !l.description),
    ...dbVehs.filter((v: any) => !v.description),
    ...dbWeaps.filter((w: any) => !w.description),
    ...dbBus.filter((b: any) => !b.description)
  ].length;

  // Map markers checks
  const activeLocationIds = new Set(dbLocs.map((l: any) => l.id));
  const markersWithoutLocations = dbMarkers.filter((m: any) => !activeLocationIds.has(m.locationId)).length;

  const summary = {
    counts: {
      characters: dbChars.length,
      locations: dbLocs.length,
      vehicles: dbVehs.length,
      weapons: dbWeaps.length,
      businesses: dbBus.length,
      media: dbMedia.length,
      relationships: dbRelations.length,
      markers: dbMarkers.length,
      sources: dbSources.length,
    },
    mediaValidation: {
      missingAltText: missingAltTextCount,
      duplicateImages: duplicateImagesCount,
    },
    entityValidation: {
      withoutRelations: entitiesWithoutRelations,
      withoutDescription: entitiesWithoutDescription,
    },
    mapValidation: {
      orphanedMarkers: markersWithoutLocations,
    },
    importReport,
  };

  return (
    <Suspense fallback={
      <div className="flex h-screen w-screen items-center justify-center bg-[#090b0e]">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-pink-500 border-t-transparent" />
      </div>
    }>
      <PlatformClient summary={summary} />
    </Suspense>
  );
}
