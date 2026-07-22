import { GET as getChar } from '../../../src/app/api/characters/[slug]/route';

async function run() {
  console.log('🧪 Testing Next.js API Routes locally...');
  try {
    const req = new Request('http://localhost:3000/api/characters/lucia');
    const res = await getChar(req, { params: Promise.resolve({ slug: 'lucia' }) });

    console.log(`✅ API response status: ${res.status}`);
    console.log(`✅ API headers ETag: ${res.headers.get('etag')}`);
    console.log(`✅ API headers Cache-Control: ${res.headers.get('cache-control')}`);
    
    const body = await res.json();
    console.log('✅ API response body JSON parsed successfully:');
    console.log(JSON.stringify({
      success: body.success,
      slug: body.data.character.slug,
      name: body.data.character.name,
      statistics: body.data.statistics,
    }, null, 2));

    process.exit(0);
  } catch (error) {
    console.error('❌ API Route local verification failed:', error);
    process.exit(1);
  }
}

run();
