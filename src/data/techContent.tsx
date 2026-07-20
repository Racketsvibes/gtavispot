import React from 'react';
import { howBigWillGta6Be } from './tech/how-big-will-gta-6-be';
import { gta6SystemRequirements } from './tech/gta-6-system-requirements';

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

const techArticlesMap: Record<string, ArticleData> = {
  'how-big-will-gta-6-be': howBigWillGta6Be,
  'gta-6-system-requirements': gta6SystemRequirements,
};

export function getTechArticleBySlug(slug: string): ArticleData | undefined {
  return techArticlesMap[slug];
}

export function getAllTechArticleSlugs(): string[] {
  return Object.keys(techArticlesMap);
}

export function getAllTechArticles(): { slug: string; article: ArticleData }[] {
  return Object.entries(techArticlesMap).map(([slug, article]) => ({ slug, article }));
}
