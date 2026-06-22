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
