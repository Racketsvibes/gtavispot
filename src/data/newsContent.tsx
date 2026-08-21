import React from 'react';
import { gta6ReleaseDate } from './news/gta-6-release-date';
import { gta6Delay } from './news/gta-6-delay';
import { gta6Trailer3 } from './news/gta-6-trailer-3';
import { gta6Leaks } from './news/gta-6-leaks';
import { gta6Price } from './news/gta-6-price';
import { gta6PreOrder } from './news/gta-6-pre-order';
import { gta6NewFeatures } from './news/gta-6-new-features';
import { gta6NovemberRelease } from './news/gta-6-november-release';
import { gta6PcReleaseDate } from './news/gta-6-pc-release-date';
import { gta6CoverArt } from './news/gta-6-cover-art';
import { rockstarNews } from './news/rockstar-news';
import { gta6PreOrderSales } from './news/gta-6-pre-order-sales';
import { gta6UltimateVsStandard } from './news/gta-6-ultimate-edition-vs-standard';
import { gta6PhysicalCopy } from './news/gta-6-physical-copy';
import { gta6Hacker } from './news/gta-6-hacker';
import { gta6RegionLock } from './news/gta-6-region-lock';
import { gta6ExtendedLook } from './news/gta-6-extended-look';
import { gta6CollectorsEdition } from './news/gta-6-collectors-edition';
import { gta6DeluxeEdition } from './news/gta-6-deluxe-edition';
import { gta6GameplayLeaks } from './news/gta-6-gameplay-leaks';
import { gta6DrivingLeak } from './news/gta-6-driving-leak';
import { gta6AgeRating } from './news/gta-6-age-rating';

export interface VideoSchema {
  name: string;
  description: string;
  thumbnailUrl: string[];
  uploadDate: string;
  duration: string;
  contentUrl: string;
  embedUrl: string;
}

export interface ArticleData {
  title: string;
  metaDescription: string;
  focusKeyword: string;
  h1: string;
  publishedDate: string;
  modifiedDate: string;
  author: string;
  content: React.ReactNode;
  featureImage?: string;
  featureImageAlt?: string;
  videoSchema?: VideoSchema;
}

const articlesMap: Record<string, ArticleData> = {
  'gta-6-release-date': gta6ReleaseDate,
  'gta-6-delay': gta6Delay,
  'gta-6-trailer-3': gta6Trailer3,
  'gta-6-leaks': gta6Leaks,
  'gta-6-price': gta6Price,
  'gta-6-pre-order': gta6PreOrder,
  'gta-6-new-features': gta6NewFeatures,
  'gta-6-november-release': gta6NovemberRelease,
  'gta-6-pc-release-date': gta6PcReleaseDate,
  'gta-6-cover-art': gta6CoverArt,
  'rockstar-news': rockstarNews,
  'gta-6-pre-order-sales': gta6PreOrderSales,
  'gta-6-ultimate-edition-vs-standard': gta6UltimateVsStandard,
  'gta-6-physical-copy': gta6PhysicalCopy,
  'gta-6-hacker': gta6Hacker,
  'gta-6-region-lock': gta6RegionLock,
  'gta-6-extended-look': gta6ExtendedLook,
  'gta-6-collectors-edition': gta6CollectorsEdition,
  'gta-6-deluxe-edition': gta6DeluxeEdition,
  'gta-6-gameplay-leaks': gta6GameplayLeaks,
  'gta-6-driving-leak': gta6DrivingLeak,
  'gta-6-age-rating': gta6AgeRating,
};

export function getArticleBySlug(slug: string): ArticleData | undefined {
  return articlesMap[slug];
}

export function getAllArticleSlugs(): string[] {
  return Object.keys(articlesMap);
}

export function getAllArticles(): { slug: string; article: ArticleData }[] {
  return Object.entries(articlesMap).map(([slug, article]) => ({ slug, article }));
}
