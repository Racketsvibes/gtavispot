import { ArticleData } from '../newsContent';
import { gta6ReleaseDateEs } from './news/gta-6-release-date';
import { gta6NovemberReleaseEs } from './news/gta-6-november-release';
import { gta6LeaksEscalationEs } from './news/gta-6-leaks-escalation';
import { gta6LeaksTimelineEs } from './news/gta-6-leaks-timeline';


const articlesMapEs: Record<string, ArticleData> = {
  'gta-6-release-date': gta6ReleaseDateEs,
  'gta-6-november-release': gta6NovemberReleaseEs,
  'gta-6-leaks-escalation': gta6LeaksEscalationEs,
  'gta-6-leaks-timeline': gta6LeaksTimelineEs,
};

export function getSpanishArticleBySlug(slug: string): ArticleData | undefined {
  return articlesMapEs[slug];
}

export function getAllSpanishArticleSlugs(): string[] {
  return Object.keys(articlesMapEs);
}

export function getAllSpanishArticles(): { slug: string; article: ArticleData }[] {
  return Object.entries(articlesMapEs).map(([slug, article]) => ({ slug, article }));
}
