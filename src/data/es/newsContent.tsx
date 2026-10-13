import { ArticleData } from '../newsContent';
import { gta6ReleaseDateEs } from './news/gta-6-release-date';
import { gta6NovemberReleaseEs } from './news/gta-6-november-release';
import { gta6LeaksEscalationEs } from './news/gta-6-leaks-escalation';
import { gta6LeaksTimelineEs } from './news/gta-6-leaks-timeline';
import { gta6ArtworksEs } from './news/gta-6-artworks';
import { gta6NetflixViewershipEs } from './news/gta-6-netflix-viewership';
import { gta6GameplayEs } from './news/gta-6-gameplay';
import { rockstarCrewsEs } from './news/rockstar-crews';
import { gta6TimelineEs } from './news/gta-6-timeline';
import { gta6ChinaCensorshipEs } from './news/gta-6-china-censorship';
import { gta6Trailer3Es } from './news/gta-6-trailer-3';
import { gta6PcReleaseDateEs } from './news/gta-6-pc-release-date';
import { gta6PriceEs } from './news/gta-6-price';
import { gta6PreOrderEs } from './news/gta-6-pre-order';
import { gta6DelayEs } from './news/gta-6-delay';
import { gta6CollectorsEditionEs } from './news/gta-6-collectors-edition';





const articlesMapEs: Record<string, ArticleData> = {
  'gta-6-release-date': gta6ReleaseDateEs,
  'gta-6-november-release': gta6NovemberReleaseEs,
  'gta-6-leaks-escalation': gta6LeaksEscalationEs,
  'gta-6-leaks-timeline': gta6LeaksTimelineEs,
  'gta-6-artworks': gta6ArtworksEs,
  'gta-6-netflix-viewership': gta6NetflixViewershipEs,
  'gta-6-gameplay': gta6GameplayEs,
  'rockstar-crews': rockstarCrewsEs,
  'gta-6-timeline': gta6TimelineEs,
  'gta-6-china-censorship': gta6ChinaCensorshipEs,
  'gta-6-trailer-3': gta6Trailer3Es,
  'gta-6-pc-release-date': gta6PcReleaseDateEs,
  'gta-6-price': gta6PriceEs,
  'gta-6-pre-order': gta6PreOrderEs,
  'gta-6-delay': gta6DelayEs,
  'gta-6-collectors-edition': gta6CollectorsEditionEs,
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
