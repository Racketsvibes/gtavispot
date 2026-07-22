import React from 'react';

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

import { gta6VsGta5 } from './compare/gta-6-vs-gta-5';

const compareArticlesMap: Record<string, ArticleData> = {
  'gta-6-vs-gta-5': gta6VsGta5,
};

export function getCompareArticleBySlug(slug: string): ArticleData | undefined {
  return compareArticlesMap[slug];
}

export function getAllCompareArticleSlugs(): string[] {
  return Object.keys(compareArticlesMap);
}

export function getAllCompareArticles(): { slug: string; article: ArticleData }[] {
  return Object.entries(compareArticlesMap).map(([slug, article]) => ({ slug, article }));
}
