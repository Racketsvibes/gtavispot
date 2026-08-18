import { MetadataRoute } from 'next';
import { getAllMapArticleSlugs } from '@/data/mapContent';
import { getAllArticleSlugs } from '@/data/newsContent';
import { getAllStoryArticleSlugs } from '@/data/storyContent';
import { getAllTechArticleSlugs } from '@/data/techContent';
import { getAllOnlineArticleSlugs } from '@/data/onlineContent';
import { getAllWorldArticleSlugs } from '@/data/worldContent';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.gtavispot.com';

  const mapRoutes = getAllMapArticleSlugs().map((slug) => ({
    url: `${baseUrl}/map/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const newsModifiedDates: Record<string, string> = {
    'gta-6-collectors-edition': '2026-08-11',
    'gta-6-extended-look': '2026-08-06',
    'gta-6-region-lock': '2026-07-29',
    'gta-6-hacker': '2026-07-19',
    'gta-6-leaks': '2026-07-19',
    'gta-6-physical-copy': '2026-07-16',
    'gta-6-ultimate-edition-vs-standard': '2026-08-06',
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
    'missions': '2026-08-17',
    'voice-actors': '2026-08-17',
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
      url: `${baseUrl}/vehicles/gta-6-cars/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vehicles/gta-6-bikes/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
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
      url: `${baseUrl}/compare/`,
      lastModified: new Date('2026-07-23'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/compare/gta-6-vs-gta-5/`,
      lastModified: new Date('2026-07-23'),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare/is-gta-6-worth-buying-in-2026/`,
      lastModified: new Date('2026-07-23'),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare/ps5-vs-xbox-series-x/`,
      lastModified: new Date('2026-07-28'),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: new Date('2026-07-25'),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: new Date('2026-07-25'),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy/`,
      lastModified: new Date('2026-07-25'),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service/`,
      lastModified: new Date('2026-07-25'),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy/`,
      lastModified: new Date('2026-07-25'),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer/`,
      lastModified: new Date('2026-07-25'),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/dmca/`,
      lastModified: new Date('2026-07-25'),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/online/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/world/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  const techModifiedDates: Record<string, string> = {
    'gta-6-graphics': '2026-08-18',
    'gta-6-pc-requirements': '2026-07-21',
    'gta-6-system-requirements': '2026-07-20',
  };

  const techRoutes = getAllTechArticleSlugs().map((slug) => {
    const dateStr = techModifiedDates[slug];
    const lastModified = dateStr ? new Date(dateStr) : new Date();
    return {
      url: `${baseUrl}/tech/${slug}/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    };
  });

  const onlineModifiedDates: Record<string, string> = {
    'pegassi-ignus-pursuit': '2026-07-29',
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

  const worldModifiedDates: Record<string, string> = {
    'gta-6-animals': '2026-08-13',
  };

  const worldRoutes = getAllWorldArticleSlugs().map((slug) => {
    const dateStr = worldModifiedDates[slug];
    const lastModified = dateStr ? new Date(dateStr) : new Date();
    return {
      url: `${baseUrl}/world/${slug}/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    };
  });

  return [...staticRoutes, ...mapRoutes, ...newsRoutes, ...storyRoutes, ...techRoutes, ...onlineRoutes, ...worldRoutes];
}
