import { NextResponse } from 'next/server';
import { getEnglishUrls, getSpanishUrls, SitemapItem } from '@/lib/sitemapHelper';

// Newest real content date inside a child sitemap — used as the index
// <lastmod> instead of stamping "now" on every request.
function newestLastmod(items: SitemapItem[]): string | undefined {
  const dates = items
    .map(item => item.lastmod)
    .filter((d): d is string => Boolean(d))
    .sort();
  return dates[dates.length - 1];
}

export async function GET() {
  const enLastmod = newestLastmod(getEnglishUrls());
  const esLastmod = newestLastmod(getSpanishUrls());

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.gtavispot.com/sitemap-en.xml</loc>
${enLastmod ? `    <lastmod>${enLastmod}</lastmod>\n` : ''}  </sitemap>
  <sitemap>
    <loc>https://www.gtavispot.com/sitemap-es.xml</loc>
${esLastmod ? `    <lastmod>${esLastmod}</lastmod>\n` : ''}  </sitemap>
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=18000',
    },
  });
}
