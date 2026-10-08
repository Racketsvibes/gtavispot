import React from 'react';
import { characterCustomization } from './guides/character-customization';
import { gta6PreloadUnlockTimes } from './guides/gta-6-preload-unlock-times';
import { gta6WantedSystem } from './guides/gta-6-wanted-system';
import { gta6Weapons } from './guides/gta-6-weapons';

export interface VideoSchema {
  name: string;
  description: string;
  thumbnailUrl: string[];
  uploadDate: string;
  duration: string;
  contentUrl: string;
  embedUrl: string;
}

export interface GuideArticleData {
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

const guideArticlesMap: Record<string, GuideArticleData> = {
  'character-customization': characterCustomization,
  'gta-6-preload-unlock-times': gta6PreloadUnlockTimes,
  'gta-6-wanted-system': gta6WantedSystem,
  'gta-6-weapons': gta6Weapons,
};

export function getGuideArticleBySlug(slug: string): GuideArticleData | undefined {
  return guideArticlesMap[slug];
}

export function getAllGuideArticleSlugs(): string[] {
  return Object.keys(guideArticlesMap);
}

export function getAllGuideArticles(): { slug: string; article: GuideArticleData }[] {
  return Object.entries(guideArticlesMap).map(([slug, article]) => ({ slug, article }));
}
