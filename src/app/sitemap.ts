import { MetadataRoute } from 'next';
import { getAllMapArticleSlugs } from '@/data/mapContent';
import { getAllArticleSlugs } from '@/data/newsContent';
import { getAllStoryArticleSlugs } from '@/data/storyContent';
import { getAllTechArticleSlugs } from '@/data/techContent';
import { getAllOnlineArticleSlugs } from '@/data/onlineContent';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.gtavispot.com';

  const mapRoutes = getAllMapArticleSlugs().map((slug) => ({
    url: `${baseUrl}/map/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const newsModifiedDates: Record<string, string> = {
    'gta-6-physical-copy': '2026-07-16',
    'gta-6-ultimate-edition-vs-standard': '2026-07-16',
    'gta-6-pre-order': '2026-07-16',
    'gta-6-pre-order-sales': '2026-07-14',
    'gta-6-release-date': '2026-06-25',
  };

  const newsRoutes = getAllArticleSlugs().map((slug) => {
    const dateStr = newsModifiedDates[slug];
    const lastModified = dateStr ? new Date(dateStr) : new Date();
    return {
      url: `${baseUrl}/news/${slug}/`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    };
  });

  const storyModifiedDates: Record<string, string> = {
    'missions': '2026-07-17',
    'side-missions': '2026-07-17',
    'walkthrough': '2026-07-17',
  };

  const storyRoutes = getAllStoryArticleSlugs().map((slug) => {
    const dateStr = storyModifiedDates[slug];
    const lastModified = dateStr ? new Date(dateStr) : new Date();
    return {
      url: `${baseUrl}/story/${slug}/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    };
  });

  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/vehicles/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/weapons/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cheats/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
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
      url: `${baseUrl}/faq/`,
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
    {
      url: `${baseUrl}/tech/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/dmca/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/online/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  const techRoutes = getAllTechArticleSlugs().map((slug) => ({
    url: `${baseUrl}/tech/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const onlineModifiedDates: Record<string, string> = {
    'the-kortz-center-heist': '2026-07-16',
    'gta-plus': '2026-07-07',
  };

  const onlineRoutes = getAllOnlineArticleSlugs().map((slug) => {
    const dateStr = onlineModifiedDates[slug];
    const lastModified = dateStr ? new Date(dateStr) : new Date();
    return {
      url: `${baseUrl}/online/${slug}/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    };
  });

  return [...staticRoutes, ...mapRoutes, ...newsRoutes, ...storyRoutes, ...techRoutes, ...onlineRoutes];
}
