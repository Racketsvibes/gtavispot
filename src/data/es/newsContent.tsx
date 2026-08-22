import { ArticleData } from '../newsContent';
import { gta6ReleaseDateEs } from './news/gta-6-release-date';
import { gta6NovemberReleaseEs } from './news/gta-6-november-release';

const articlesMapEs: Record<string, ArticleData> = {
  'gta-6-release-date': gta6ReleaseDateEs,
  'gta-6-november-release': gta6NovemberReleaseEs,
};

export function getSpanishArticleBySlug(slug: string): ArticleData | undefined {
  return articlesMapEs[slug];
}

export function getAllSpanishArticleSlugs(): string[] {
  return Object.keys(articlesMapEs);
}
