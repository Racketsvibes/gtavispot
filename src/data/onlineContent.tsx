import { ArticleData } from './newsContent';
import { gtaPlusArticle } from './online/gta-plus';

const articlesMap: Record<string, ArticleData> = {
  'gta-plus': gtaPlusArticle,
};

export function getOnlineArticleBySlug(slug: string): ArticleData | undefined {
  return articlesMap[slug];
}

export function getAllOnlineArticleSlugs(): string[] {
  return Object.keys(articlesMap);
}

export function getAllOnlineArticles(): { slug: string; article: ArticleData }[] {
  return Object.entries(articlesMap).map(([slug, article]) => ({ slug, article }));
}
