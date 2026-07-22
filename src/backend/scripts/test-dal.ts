import { characterApplication } from '../application/character.application';
import { pageRegistry } from '../application/registry';
import { aiApplication } from '../application/ai.application';
import { searchApplication } from '../application/search.application';

async function run() {
  console.log('🧪 Testing Application Layer & Page Contracts...');
  try {
    // 1. Fetch Character Page Payload (V1 Contract)
    const charPage = await characterApplication.characterPage('lucia');
    console.log('✅ 1. Loaded V1 Character Page Payload successfully:');
    console.log(JSON.stringify({
      version: charPage.version,
      name: charPage.character.name,
      imagesCount: charPage.statistics.imagesCount,
      relationshipsCount: charPage.statistics.relationshipsCount,
      recommendations: charPage.recommendations,
    }, null, 2));

    // 2. Test Page Registry Loader
    console.log('\n🗂️ Testing Page Registry routing...');
    const resolvedPage = await pageRegistry.loadPage('character', 'lucia');
    console.log(`✅ 2. Page Registry resolved character loader successfully. Mapped entity ID: "${resolvedPage.character.id}"`);

    // 3. Test AI Context Builder Payload (V1 Contract)
    console.log('\n🤖 Testing AI Context Builder payload...');
    const contextPayload = await aiApplication.aiContext('character', 'lucia');
    console.log('✅ 3. Compiled structured AI prompt context successfully:');
    console.log(JSON.stringify({
      version: contextPayload.version,
      name: contextPayload.name,
      mediaCount: contextPayload.media.length,
      sourcesCount: contextPayload.sources.length,
      aliasesCount: contextPayload.aliases.length,
    }, null, 2));

    // 4. Test Search Page Payload (V1 Contract)
    console.log('\n🔎 Testing Search Application payload...');
    const searchPage = await searchApplication.searchPage('lucia');
    console.log('✅ 4. Loaded V1 Search Page Payload successfully:');
    console.log(JSON.stringify({
      version: searchPage.version,
      query: searchPage.query,
      total: searchPage.total,
      suggestions: searchPage.suggestions,
      charactersMatchesCount: searchPage.categories.characters.length,
    }, null, 2));

    console.log('\n🌟 Application Layer and stable Page Contracts fully verified!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Application Layer verification failed with error:', error);
    process.exit(1);
  }
}

run();
