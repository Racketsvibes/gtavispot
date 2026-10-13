import React from 'react';
import { howBigWillGta6Be } from './tech/how-big-will-gta-6-be';
import { gta6SystemRequirements } from './tech/gta-6-system-requirements';
import { gta6PcRequirements } from './tech/gta-6-pc-requirements';
import { gta6Graphics } from './tech/gta-6-graphics';
import { gta6Crossplay } from './tech/gta-6-crossplay';

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
  'gta-6-pc-requirements': gta6PcRequirements,
  'gta-6-graphics': gta6Graphics,
  'gta-6-crossplay': gta6Crossplay,
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
