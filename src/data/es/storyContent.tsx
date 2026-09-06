import { StoryArticleData } from '../storyContent';
import { gta6LuciaVoiceActressEs } from './story/gta-6-lucia-voice-actress';
import { gta6JasonVoiceActorEs } from './story/gta-6-jason-voice-actor';

export type { StoryArticleData };
export interface StoryArticleDataEs extends StoryArticleData {}

const storyArticlesMapEs: Record<string, StoryArticleData> = {
  'gta-6-lucia-voice-actress': gta6LuciaVoiceActressEs,
  'gta-6-jason-voice-actor': gta6JasonVoiceActorEs,
};

export function getSpanishStoryArticleBySlug(slug: string): StoryArticleData | undefined {
  return storyArticlesMapEs[slug];
}

export function getAllSpanishStoryArticleSlugs(): string[] {
  return Object.keys(storyArticlesMapEs);
}

export function getAllSpanishStoryArticles(): { slug: string; article: StoryArticleData }[] {
  return Object.entries(storyArticlesMapEs).map(([slug, article]) => ({ slug, article }));
}
