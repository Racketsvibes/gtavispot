import React from 'react';
import { storyOverview } from './story/story-overview';
import { lucia } from './story/lucia';
import { jason } from './story/jason';
import { luciaBackstory } from './story/lucia-backstory';
import { jasonAndLucia } from './story/jason-and-lucia';
import { voiceActors } from './story/voice-actors';
import { missions } from './story/missions';
import { walkthrough } from './story/walkthrough';
import { sideMissions } from './story/side-missions';
import { ending } from './story/ending';
import { howLongToBeat } from './story/how-long-to-beat';
import { dualProtagonists } from './story/dual-protagonists';
import { gta6Characters } from './story/gta-6-characters';


export interface VideoSchema {
  name: string;
  description: string;
  thumbnailUrl: string[];
  uploadDate: string;
  duration: string;
  contentUrl: string;
  embedUrl: string;
}

export interface StoryArticleData {
  title: string;
  metaDescription: string;
  focusKeyword: string;
  h1: string;
  publishedDate: string;
  modifiedDate: string;
  author: string;
  content: React.ReactNode;
  featureImage?: string;
  videoSchema?: VideoSchema;
}

const storyArticlesMap: Record<string, StoryArticleData> = {
  'story-overview': storyOverview,
  'lucia': lucia,
  'jason': jason,
  'lucia-backstory': luciaBackstory,
  'jason-and-lucia': jasonAndLucia,
  'voice-actors': voiceActors,
  'missions': missions,
  'walkthrough': walkthrough,
  'side-missions': sideMissions,
  'ending': ending,
  'how-long-to-beat': howLongToBeat,
  'dual-protagonists': dualProtagonists,
  'gta-6-characters': gta6Characters,
};

export function getStoryArticleBySlug(slug: string): StoryArticleData | undefined {
  return storyArticlesMap[slug];
}

export function getAllStoryArticleSlugs(): string[] {
  // Exclude story-overview since it is rendered directly on the /story/ root
  return Object.keys(storyArticlesMap).filter(slug => slug !== 'story-overview');
}

export function getAllStoryArticles(): { slug: string; article: StoryArticleData }[] {
  return Object.entries(storyArticlesMap).map(([slug, article]) => ({ slug, article }));
}
