import { StoryArticleData } from '../storyContent';
import { gta6LuciaVoiceActressEs } from './story/gta-6-lucia-voice-actress';
import { gta6JasonVoiceActorEs } from './story/gta-6-jason-voice-actor';
import { stephenRootGta6Es } from './story/stephen-root-gta-6';
import { voiceActorsEs } from './story/voice-actors';
import { gta6CastInRealLifeEs } from './story/gta-6-cast-in-real-life';
import { gta6CharactersEs } from './story/gta-6-characters';

export type { StoryArticleData };
export interface StoryArticleDataEs extends StoryArticleData {}

const storyArticlesMapEs: Record<string, StoryArticleData> = {
  'gta-6-lucia-voice-actress': gta6LuciaVoiceActressEs,
  'gta-6-jason-voice-actor': gta6JasonVoiceActorEs,
  'stephen-root-gta-6': stephenRootGta6Es,
  'voice-actors': voiceActorsEs,
  'gta-6-cast-in-real-life': gta6CastInRealLifeEs,
  'gta-6-characters': gta6CharactersEs,
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
