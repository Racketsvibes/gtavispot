import { db } from '@/backend/db';
import { sources } from '@/backend/db/schema';
import { desc } from 'drizzle-orm';

export async function GET() {
  try {
    const allSources = await db
      .select()
      .from(sources)
      .orderBy(desc(sources.officialReleaseDate));

    const items = allSources
      .map((s: any) => `
        <item>
          <title>${escapeXml(s.name)}</title>
          <link>${s.url || 'https://gtavispot.com/newswire'}</link>
          <guid>${s.id}</guid>
          <pubDate>${s.officialReleaseDate ? new Date(s.officialReleaseDate).toUTCString() : new Date().toUTCString()}</pubDate>
          <description>Official update: ${escapeXml(s.name)} from Rockstar Games.</description>
        </item>
      `)
      .join('');

    const xml = `<?xml version="1.0" encoding="UTF-8" ?>
      <rss version="2.0">
        <channel>
          <title>GTA VI Spot — Official Rockstar Newswire</title>
          <link>https://gtavispot.com/newswire</link>
          <description>Stay updated with the latest Grand Theft Auto VI news and trailers from Rockstar Games.</description>
          ${items}
        </channel>
      </rss>`;

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
      },
    });
  } catch (err) {
    console.error('Newswire RSS Feed Error:', err);
    return new Response('<?xml version="1.0" encoding="UTF-8" ?><rss version="2.0"><channel><title>Error</title></channel></rss>', {
      status: 500,
      headers: { 'Content-Type': 'application/xml' },
    });
  }
}

function escapeXml(unsafe: string) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}
