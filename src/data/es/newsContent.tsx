import { ArticleData } from '../newsContent';
import { gta6ReleaseDateEs } from './news/gta-6-release-date';

const articlesMapEs: Record<string, ArticleData> = {
  'gta-6-release-date': gta6ReleaseDateEs,
};

export function getSpanishArticleBySlug(slug: string): ArticleData | undefined {
  return articlesMapEs[slug];
}

export function getAllSpanishArticleSlugs(): string[] {
  return Object.keys(articlesMapEs);
}
