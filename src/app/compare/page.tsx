import React from 'react';
import { Metadata } from 'next';
import { characterApplication } from '@/backend/application/character.application';
import { locationApplication } from '@/backend/application/location.application';
import { vehicleApplication } from '@/backend/application/vehicle.application';
import { weaponApplication } from '@/backend/application/weapon.application';
import { businessApplication } from '@/backend/application/business.application';
import CompareSelectClient from './CompareSelectClient';

export const metadata: Metadata = {
  title: 'Comparison & Discovery Center | GTA VI Spot',
  description: 'Select and compare any GTA 6 Leonida characters, locations, vehicles, weapons, and businesses side-by-side.',
  alternates: {
    canonical: 'https://gtavispot.com/compare',
  },
  openGraph: {
    title: 'Comparison & Discovery Center | GTA VI Spot',
    description: 'Compare GTA 6 characters, locations, and vehicles side-by-side.',
    url: 'https://gtavispot.com/compare',
  },
};

// Next.js ISR: Revalidate compare selector page daily
export const revalidate = 86400;

export default async function ComparePage() {
  const [
    chars,
    locs,
    vehs,
    weaps,
    bus
  ] = await Promise.all([
    characterApplication.charactersList().catch(() => []),
    locationApplication.locationsList().catch(() => []),
    vehicleApplication.vehiclesList().catch(() => []),
    weaponApplication.weaponsList().catch(() => []),
    businessApplication.businessesList().catch(() => [])
  ]);

  const mapList = (items: any[], type: string) =>
    items.map((item: any) => ({
      id: item.id,
      name: item.name,
      slug: item.slug,
      type,
    }));

  const data = {
    character: mapList(chars, 'character'),
    location: mapList(locs, 'location'),
    vehicle: mapList(vehs, 'vehicle'),
    weapon: mapList(weaps, 'weapon'),
    business: mapList(bus, 'business'),
  };

  return <CompareSelectClient entities={data} />;
}
