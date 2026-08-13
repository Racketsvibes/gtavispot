import React from 'react';
import { gta6Animals } from './world/gta-6-animals';

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

const worldArticlesMap: Record<string, ArticleData> = {
  'gta-6-animals': gta6Animals,
};

export function getWorldArticleBySlug(slug: string): ArticleData | undefined {
  return worldArticlesMap[slug];
}

export function getAllWorldArticleSlugs(): string[] {
  return Object.keys(worldArticlesMap);
}

export function getAllWorldArticles(): { slug: string; article: ArticleData }[] {
  return Object.entries(worldArticlesMap).map(([slug, article]) => ({ slug, article }));
}
