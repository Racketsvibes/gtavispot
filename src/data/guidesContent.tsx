import React from 'react';
import { characterCustomization } from './guides/character-customization';
import { gta6PreloadUnlockTimes } from './guides/gta-6-preload-unlock-times';

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
