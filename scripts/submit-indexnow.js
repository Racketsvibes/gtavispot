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
    .filter(file => file.endsWith('.tsx') && !file.startsWith('index'))
    .map(file => file.replace('.tsx', ''));
};

const newsSlugs = getSlugs('src/data/news');
const mapSlugs = getSlugs('src/data/map');
const storySlugs = getSlugs('src/data/story');
const techSlugs = getSlugs('src/data/tech');

const staticRoutes = [
  '/',
  '/vehicles/',
  '/weapons/',
  '/cheats/',
  '/guides/',
  '/map/',
  '/news/',
  '/faq/',
  '/story/',
  '/tech/',
  '/about/',
  '/contact/',
  '/privacy-policy/',
  '/terms-of-service/',
  '/cookie-policy/',
  '/disclaimer/',
  '/dmca/'
];

const urlList = [
  ...staticRoutes.map(route => `${baseUrl}${route}`),
  ...newsSlugs.map(slug => `${baseUrl}/news/${slug}/`),
  ...mapSlugs.map(slug => `${baseUrl}/map/${slug}/`),
  ...storySlugs.map(slug => `${baseUrl}/story/${slug}/`),
  ...techSlugs.map(slug => `${baseUrl}/tech/${slug}/`)
];

console.log(`Submitting ${urlList.length} URLs to IndexNow...`);

const data = JSON.stringify({
  host,
  key,
  keyLocation,
  urlList
});

const endpoints = [
  { name: 'IndexNow Org', url: 'https://api.indexnow.org/indexnow' },
  { name: 'Yandex', url: 'https://yandex.com/indexnow' }
];

endpoints.forEach(endpoint => {
  fetch(endpoint.url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: data
  })
  .then(res => {
    if (res.ok) {
      console.log(`IndexNow submission to ${endpoint.name} successful!`);
    } else {
      res.text().then(text => {
        console.error(`IndexNow submission to ${endpoint.name} failed: ${res.status} - ${text}`);
      });
    }
  })
  .catch(err => {
    console.error(`Error submitting to ${endpoint.name}:`, err);
  });
});
