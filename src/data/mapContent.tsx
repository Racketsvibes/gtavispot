import React from 'react';
import { viceCity } from './map/vice-city';
import { leonidaKeys } from './map/leonida-keys';
import { grassrivers } from './map/grassrivers';
import { portGellhorn } from './map/port-gellhorn';
import { ambrosia } from './map/ambrosia';
import { mountKalaga } from './map/mount-kalaga';
import { oceanBeach } from './map/ocean-beach';
import { size } from './map/size';
import { interiors } from './map/interiors';
import { secretLocations } from './map/secret-locations';
import { easterEggs } from './map/easter-eggs';
import { underwater } from './map/underwater';

export interface MapArticleData {
  title: string;
  metaDescription: string;
  focusKeyword: string;
  h1: string;
  publishedDate: string;
  modifiedDate: string;
  author: string;
  content: React.ReactNode;
  featureImage?: string;
}

const mapArticlesMap: Record<string, MapArticleData> = {
  'vice-city': viceCity,
  'leonida-keys': leonidaKeys,
  'grassrivers': grassrivers,
  'port-gellhorn': portGellhorn,
  'ambrosia': ambrosia,
  'mount-kalaga': mountKalaga,
  'ocean-beach': oceanBeach,
  'size': size,
  'interiors': interiors,
  'secret-locations': secretLocations,
  'easter-eggs': easterEggs,
  'underwater': underwater,
};

export function getMapArticleBySlug(slug: string): MapArticleData | undefined {
  return mapArticlesMap[slug];
}

export function getAllMapArticleSlugs(): string[] {
  return Object.keys(mapArticlesMap);
}

export function getAllMapArticles(): { slug: string; article: MapArticleData }[] {
  return Object.entries(mapArticlesMap).map(([slug, article]) => ({ slug, article }));
}
