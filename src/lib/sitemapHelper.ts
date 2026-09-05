import { getAllMapArticleSlugs } from '@/data/mapContent';
import { getAllArticleSlugs } from '@/data/newsContent';
import { getAllStoryArticleSlugs } from '@/data/storyContent';
import { getAllTechArticleSlugs } from '@/data/techContent';
import { getAllOnlineArticleSlugs } from '@/data/onlineContent';
import { getAllWorldArticleSlugs } from '@/data/worldContent';

const baseUrl = 'https://www.gtavispot.com';

const newsModifiedDates: Record<string, string> = {
  'gta-6-timeline': '2026-08-30',
  'rockstar-crews': '2026-08-30',
  'gta-6-gameplay': '2026-08-29',
  'gta-6-netflix-viewership': '2026-08-29',
  'gta-6-artworks': '2026-08-27',
  'gta-6-leaks-timeline': '2026-08-26',
  'gta-6-leaks-escalation': '2026-08-23',
  'gta-6-strip-club-leak': '2026-08-22',
  'gta-6-age-rating': '2026-08-21',
  'gta-6-driving-leak': '2026-08-21',
  'gta-6-gameplay-leaks': '2026-08-20',
  'gta-6-deluxe-edition': '2026-08-18',
  'gta-6-collectors-edition': '2026-08-11',
  'gta-6-extended-look': '2026-08-06',
  'gta-6-region-lock': '2026-07-29',
  'gta-6-hacker': '2026-08-20',
  'gta-6-leaks': '2026-08-20',
  'gta-6-physical-copy': '2026-07-16',
  'gta-6-ultimate-edition-vs-standard': '2026-08-18',
  'gta-6-pre-order': '2026-08-18',
  'gta-6-price': '2026-08-18',
  'gta-6-pre-order-sales': '2026-07-14',
  'gta-6-release-date': '2026-06-25',
  'gta-6-november-release': '2026-06-25',
};

const storyModifiedDates: Record<string, string> = {
  'missions': '2026-08-17',
  'voice-actors': '2026-09-05',
  'lucia': '2026-09-05',
  'lucia-backstory': '2026-09-05',
  'gta-6-lucia-voice-actress': '2026-09-05',
  'side-missions': '2026-08-20',
  'walkthrough': '2026-07-17',
  'ending': '2026-08-20',
  'how-long-to-beat': '2026-08-20',
};

const techModifiedDates: Record<string, string> = {
  'gta-6-system-requirements': '2026-09-01',
  'gta-6-pc-requirements': '2026-07-21',
  'gta-6-pc-release-date': '2026-08-22',
};

const onlineModifiedDates: Record<string, string> = {
  'gta-plus': '2026-07-07',
  'the-kortz-center-heist': '2026-07-16',
  'pegassi-ignus-pursuit': '2026-07-29',
};

const worldModifiedDates: Record<string, string> = {
  'gta-6-animals': '2026-08-13',
};

const mapModifiedDates: Record<string, string> = {
  'size': '2026-09-02',
};

// Currently translated pages in Spanish (slugs)
const SPANISH_TRANSLATED_NEWS_SLUGS = [
  'gta-6-release-date',
  'gta-6-november-release',
  'gta-6-leaks-escalation',
  'gta-6-leaks-timeline',
  'gta-6-artworks',
  'gta-6-netflix-viewership',
  'gta-6-gameplay',
  'rockstar-crews',
  'gta-6-timeline'
];

const SPANISH_TRANSLATED_STORY_SLUGS = [
  'gta-6-lucia-voice-actress'
];

export interface SitemapItem {
  url: string;
  lastmod: string;
  changefreq: string;
  priority: string;
  alternates?: {
    lang: string;
    href: string;
  }[];
}

export function getEnglishUrls(): SitemapItem[] {
  const items: SitemapItem[] = [];
  const nowStr = new Date().toISOString().split('T')[0];

  // Static Routes
  const staticRoutes = [
    { path: '', changefreq: 'daily', priority: '1.0', lastmod: nowStr },
    { path: '/vehicles/', changefreq: 'weekly', priority: '0.9', lastmod: nowStr },
    { path: '/vehicles/gta-6-cars/', changefreq: 'weekly', priority: '0.8', lastmod: nowStr },
    { path: '/vehicles/gta-6-bikes/', changefreq: 'weekly', priority: '0.8', lastmod: nowStr },
    { path: '/weapons/', changefreq: 'weekly', priority: '0.9', lastmod: nowStr },
    { path: '/mods/', changefreq: 'weekly', priority: '0.9', lastmod: '2026-08-20' },
    { path: '/cheats/', changefreq: 'weekly', priority: '0.9', lastmod: nowStr },
    { path: '/guides/', changefreq: 'weekly', priority: '0.9', lastmod: nowStr },
    { path: '/map/', changefreq: 'weekly', priority: '0.9', lastmod: nowStr },
    { path: '/faq/', changefreq: 'daily', priority: '0.9', lastmod: nowStr },
    { path: '/quiz/', changefreq: 'weekly', priority: '0.9', lastmod: nowStr },
    { path: '/story/', changefreq: 'weekly', priority: '0.9', lastmod: nowStr },
    { path: '/tech/', changefreq: 'weekly', priority: '0.9', lastmod: nowStr },
    { path: '/compare/', changefreq: 'weekly', priority: '0.9', lastmod: '2026-07-23' },
    { path: '/compare/gta-6-vs-gta-5/', changefreq: 'weekly', priority: '0.8', lastmod: '2026-07-23' },
    { path: '/compare/is-gta-6-worth-buying-in-2026/', changefreq: 'weekly', priority: '0.8', lastmod: '2026-07-23' },
    { path: '/compare/ps5-vs-xbox-series-x/', changefreq: 'weekly', priority: '0.8', lastmod: '2026-07-28' },
    { path: '/about/', changefreq: 'monthly', priority: '0.5', lastmod: '2026-07-25' },
    { path: '/contact/', changefreq: 'monthly', priority: '0.5', lastmod: '2026-07-25' },
    { path: '/privacy-policy/', changefreq: 'monthly', priority: '0.3', lastmod: '2026-07-25' },
    { path: '/terms-of-service/', changefreq: 'monthly', priority: '0.3', lastmod: '2026-07-25' },
    { path: '/cookie-policy/', changefreq: 'monthly', priority: '0.3', lastmod: '2026-07-25' },
    { path: '/disclaimer/', changefreq: 'monthly', priority: '0.3', lastmod: '2026-07-25' },
    { path: '/dmca/', changefreq: 'monthly', priority: '0.3', lastmod: '2026-07-25' },
    { path: '/online/', changefreq: 'weekly', priority: '0.9', lastmod: nowStr },
    { path: '/world/', changefreq: 'weekly', priority: '0.9', lastmod: nowStr },
  ];

  staticRoutes.forEach(route => {
    items.push({
      url: `${baseUrl}${route.path}`,
      lastmod: route.lastmod,
      changefreq: route.changefreq,
      priority: route.priority
    });
  });

  // News hub with alternates
  items.push({
    url: `${baseUrl}/news/`,
    lastmod: nowStr,
    changefreq: 'daily',
    priority: '0.9',
    alternates: [
      { lang: 'en', href: `${baseUrl}/news/` },
      { lang: 'es-es', href: `${baseUrl}/es/news/` },
      { lang: 'x-default', href: `${baseUrl}/news/` }
    ]
  });

  // Map slugs
  getAllMapArticleSlugs().forEach(slug => {
    const modDate = mapModifiedDates[slug] || nowStr;
    items.push({
      url: `${baseUrl}/map/${slug}/`,
      lastmod: modDate,
      changefreq: 'weekly',
      priority: '0.8'
    });
  });

  // News slugs
  getAllArticleSlugs().forEach(slug => {
    const modDate = newsModifiedDates[slug] || nowStr;
    const hasSpanish = SPANISH_TRANSLATED_NEWS_SLUGS.includes(slug);
    
    const rootSlugs = ['gta-6-gameplay', 'gta-6-timeline'];
    if (rootSlugs.includes(slug)) {
      items.push({
        url: `${baseUrl}/${slug}/`,
        lastmod: modDate,
        changefreq: 'daily',
        priority: '0.8',
        alternates: hasSpanish ? [
          { lang: 'en', href: `${baseUrl}/${slug}/` },
          { lang: 'es-es', href: `${baseUrl}/es/${slug}/` },
          { lang: 'x-default', href: `${baseUrl}/${slug}/` }
        ] : undefined
      });
    } else {
      items.push({
        url: `${baseUrl}/news/${slug}/`,
        lastmod: modDate,
        changefreq: 'daily',
        priority: '0.8',
        alternates: hasSpanish ? [
          { lang: 'en', href: `${baseUrl}/news/${slug}/` },
          { lang: 'es-es', href: `${baseUrl}/es/news/${slug}/` },
          { lang: 'x-default', href: `${baseUrl}/news/${slug}/` }
        ] : undefined
      });
    }
  });

  // Story slugs
  getAllStoryArticleSlugs().forEach(slug => {
    const modDate = storyModifiedDates[slug] || nowStr;
    const hasSpanish = SPANISH_TRANSLATED_STORY_SLUGS.includes(slug);
    items.push({
      url: `${baseUrl}/story/${slug}/`,
      lastmod: modDate,
      changefreq: 'weekly',
      priority: '0.8',
      alternates: hasSpanish ? [
        { lang: 'en', href: `${baseUrl}/story/${slug}/` },
        { lang: 'es-es', href: `${baseUrl}/es/story/${slug}/` },
        { lang: 'x-default', href: `${baseUrl}/story/${slug}/` }
      ] : undefined
    });
  });

  // Tech slugs
  getAllTechArticleSlugs().forEach(slug => {
    const modDate = techModifiedDates[slug] || nowStr;
    items.push({
      url: `${baseUrl}/tech/${slug}/`,
      lastmod: modDate,
      changefreq: 'weekly',
      priority: '0.8'
    });
  });

  // Online slugs
  getAllOnlineArticleSlugs().forEach(slug => {
    const modDate = onlineModifiedDates[slug] || nowStr;
    items.push({
      url: `${baseUrl}/online/${slug}/`,
      lastmod: modDate,
      changefreq: 'weekly',
      priority: '0.8'
    });
  });

  // World slugs
  getAllWorldArticleSlugs().forEach(slug => {
    const modDate = worldModifiedDates[slug] || nowStr;
    items.push({
      url: `${baseUrl}/world/${slug}/`,
      lastmod: modDate,
      changefreq: 'weekly',
      priority: '0.8'
    });
  });

  return items;
}

export function getSpanishUrls(): SitemapItem[] {
  const items: SitemapItem[] = [];
  const nowStr = new Date().toISOString().split('T')[0];

  // Spanish News Hub
  items.push({
    url: `${baseUrl}/es/news/`,
    lastmod: nowStr,
    changefreq: 'daily',
    priority: '0.9',
    alternates: [
      { lang: 'en', href: `${baseUrl}/news/` },
      { lang: 'es-es', href: `${baseUrl}/es/news/` },
      { lang: 'x-default', href: `${baseUrl}/news/` }
    ]
  });

  SPANISH_TRANSLATED_NEWS_SLUGS.forEach(slug => {
    const modDate = newsModifiedDates[slug] || new Date().toISOString().split('T')[0];
    
    const rootSlugs = ['gta-6-gameplay', 'gta-6-timeline'];
    if (rootSlugs.includes(slug)) {
      items.push({
        url: `${baseUrl}/es/${slug}/`,
        lastmod: modDate,
        changefreq: 'weekly',
        priority: '0.8',
        alternates: [
          { lang: 'en', href: `${baseUrl}/${slug}/` },
          { lang: 'es-es', href: `${baseUrl}/es/${slug}/` },
          { lang: 'x-default', href: `${baseUrl}/${slug}/` }
        ]
      });
    } else {
      items.push({
        url: `${baseUrl}/es/news/${slug}/`,
        lastmod: modDate,
        changefreq: 'weekly',
        priority: '0.8',
        alternates: [
          { lang: 'en', href: `${baseUrl}/news/${slug}/` },
          { lang: 'es-es', href: `${baseUrl}/es/news/${slug}/` },
          { lang: 'x-default', href: `${baseUrl}/news/${slug}/` }
        ]
      });
    }
  });

  SPANISH_TRANSLATED_STORY_SLUGS.forEach(slug => {
    const modDate = storyModifiedDates[slug] || nowStr;
    items.push({
      url: `${baseUrl}/es/story/${slug}/`,
      lastmod: modDate,
      changefreq: 'weekly',
      priority: '0.8',
      alternates: [
        { lang: 'en', href: `${baseUrl}/story/${slug}/` },
        { lang: 'es-es', href: `${baseUrl}/es/story/${slug}/` },
        { lang: 'x-default', href: `${baseUrl}/story/${slug}/` }
      ]
    });
  });

  return items;
}
