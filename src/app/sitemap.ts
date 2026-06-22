import { MetadataRoute } from 'next';
import { getAllMapArticleSlugs } from '@/data/mapContent';
import { getAllArticleSlugs } from '@/data/newsContent';
import { getAllStoryArticleSlugs } from '@/data/storyContent';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://gtavispot.com';

  const mapRoutes = getAllMapArticleSlugs().map((slug) => ({
    url: `${baseUrl}/map/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const newsRoutes = getAllArticleSlugs().map((slug) => ({
    url: `${baseUrl}/news/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  const storyRoutes = getAllStoryArticleSlugs().map((slug) => ({
    url: `${baseUrl}/story/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/map/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/news/`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/story/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  return [...staticRoutes, ...mapRoutes, ...newsRoutes, ...storyRoutes];
}
