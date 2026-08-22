import { NextResponse } from 'next/server';
import { getSpanishUrls } from '@/lib/sitemapHelper';

export async function GET() {
  const urls = getSpanishUrls();
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  urls.forEach(item => {
    xml += `  <url>\n`;
    xml += `    <loc>${item.url}</loc>\n`;
    xml += `    <lastmod>${item.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${item.changefreq}</changefreq>\n`;
    xml += `    <priority>${item.priority}</priority>\n`;
    
    if (item.alternates) {
      item.alternates.forEach(alt => {
        xml += `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.href}" />\n`;
      });
    }
    
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=18000',
    },
  });
}
