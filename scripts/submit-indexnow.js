const fs = require('fs');
const path = require('path');

const host = 'www.gtavispot.com';
const key = 'df983149e1c44ca1936e0aa306ac2613';
const keyLocation = `https://${host}/${key}.txt`;
const baseUrl = `https://${host}`;

const getSlugs = (dirPath) => {
  const fullPath = path.resolve(__dirname, '..', dirPath);
  if (!fs.existsSync(fullPath)) return [];
  return fs.readdirSync(fullPath)
    .filter(file => (file.endsWith('.tsx') || file.endsWith('.ts')) && !file.startsWith('index'))
    .map(file => file.replace(/\.(tsx|ts)$/, ''));
};

const newsSlugs = getSlugs('src/data/news');
const mapSlugs = getSlugs('src/data/map');
const storySlugs = getSlugs('src/data/story');
const techSlugs = getSlugs('src/data/tech');
const onlineSlugs = getSlugs('src/data/online');
const worldSlugs = getSlugs('src/data/world');
const compareSlugs = getSlugs('src/data/compare');
const esNewsSlugs = getSlugs('src/data/es/news');
const esStorySlugs = getSlugs('src/data/es/story');

const staticRoutes = [
  '/',
  '/quiz/',
  '/gta-6-timeline/',
  '/gta-6-gameplay/',
  '/vehicles/',
  '/vehicles/gta-6-cars/',
  '/vehicles/gta-6-bikes/',
  '/weapons/',
  '/cheats/',
  '/guides/',
  '/map/',
  '/news/',
  '/faq/',
  '/story/',
  '/tech/',
  '/online/',
  '/world/',
  '/compare/',
  '/about/',
  '/contact/',
  '/privacy-policy/',
  '/terms-of-service/',
  '/cookie-policy/',
  '/disclaimer/',
  '/dmca/',
  // Spanish static routes
  '/es/news/',
  '/es/gta-6-timeline/',
  '/es/gta-6-gameplay/'
];

// Deduplicate and filter root slugs that are mounted at root level rather than /news/
const rootNewsSlugs = ['gta-6-gameplay', 'gta-6-timeline'];

const urlSet = new Set([
  ...staticRoutes.map(route => `${baseUrl}${route}`),
  ...newsSlugs.map(slug => rootNewsSlugs.includes(slug) ? `${baseUrl}/${slug}/` : `${baseUrl}/news/${slug}/`),
  ...mapSlugs.map(slug => `${baseUrl}/map/${slug}/`),
  ...storySlugs.map(slug => `${baseUrl}/story/${slug}/`),
  ...techSlugs.map(slug => `${baseUrl}/tech/${slug}/`),
  ...onlineSlugs.map(slug => `${baseUrl}/online/${slug}/`),
  ...worldSlugs.map(slug => `${baseUrl}/world/${slug}/`),
  ...compareSlugs.map(slug => `${baseUrl}/compare/${slug}/`),
  ...esNewsSlugs.map(slug => rootNewsSlugs.includes(slug) ? `${baseUrl}/es/${slug}/` : `${baseUrl}/es/news/${slug}/`),
  ...esStorySlugs.map(slug => `${baseUrl}/es/story/${slug}/`)
]);

const urlList = Array.from(urlSet);

console.log(`Submitting ${urlList.length} unique URLs to IndexNow...`);

const data = JSON.stringify({
  host,
  key,
  keyLocation,
  urlList
});

const endpoints = [
  { name: 'Bing', url: 'https://www.bing.com/indexnow' },
  { name: 'IndexNow Org', url: 'https://api.indexnow.org/indexnow' },
  { name: 'Yandex', url: 'https://yandex.com/indexnow' },
  { name: 'Seznam', url: 'https://search.seznam.cz/indexnow' },
  { name: 'Naver', url: 'https://searchadvisor.naver.com/indexnow' }
];

async function submitForHost(targetHost) {
  const targetBaseUrl = `https://${targetHost}`;
  const targetKeyLocation = `${targetBaseUrl}/${key}.txt`;
  const targetUrls = urlList.map(u => u.replace(/^https?:\/\/[^\/]+/, targetBaseUrl));

  console.log(`\n--- Submitting ${targetUrls.length} URLs for ${targetHost} ---`);

  const payload = JSON.stringify({
    host: targetHost,
    key,
    keyLocation: targetKeyLocation,
    urlList: targetUrls
  });

  for (const endpoint of endpoints) {
    try {
      const res = await fetch(endpoint.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: payload
      });

      if (res.ok || res.status === 200 || res.status === 202) {
        console.log(`✓ [${targetHost}] ${endpoint.name} submission successful! (${res.status})`);
      } else {
        const text = await res.text();
        console.warn(`⚠ [${targetHost}] ${endpoint.name} returned status ${res.status}: ${text}`);
      }
    } catch (err) {
      console.error(`✗ [${targetHost}] Error submitting to ${endpoint.name}:`, err.message);
    }
  }
}

async function run() {
  await submitForHost('www.gtavispot.com');
  await submitForHost('gtavispot.com');
  console.log('\n✓ IndexNow submission completed across all pages and endpoints.');
}

run();

