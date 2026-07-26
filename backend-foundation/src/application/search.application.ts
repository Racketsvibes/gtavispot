import { knowledgeEngine } from '../knowledge/engine';
import { SearchPageV1 } from './page-contracts';
import { SearchMatchViewModel } from '../types/view-models';

export class SearchApplication {
  /**
   * Orchestrates the search routing query, categorizing hits into semantic entity buckets.
   */
  async searchPage(query: string, limit: number = 20, offset: number = 0): Promise<SearchPageV1> {
    const results = await knowledgeEngine.search(query, limit, offset);

    const characters: SearchMatchViewModel[] = [];
    const locations: SearchMatchViewModel[] = [];
    const vehicles: SearchMatchViewModel[] = [];
    const weapons: SearchMatchViewModel[] = [];
    const businesses: SearchMatchViewModel[] = [];
    const media: SearchMatchViewModel[] = [];

    for (const match of results.matches) {
      switch (match.type) {
        case 'character':
          characters.push(match);
          break;
        case 'location':
          locations.push(match);
          break;
        case 'vehicle':
          vehicles.push(match);
          break;
        case 'weapon':
          weapons.push(match);
          break;
        case 'business':
          businesses.push(match);
          break;
        case 'media':
          media.push(match);
          break;
      }
    }

    const suggestions = ['lucia', 'jason', 'vice city', 'gellhorn', 'cheetah'].filter(
      s => s.includes(query.toLowerCase()) && s !== query.toLowerCase()
    );

    return {
      version: 'v1',
      query,
      total: results.total,
      limit,
      offset,
      categories: {
        characters,
        locations,
        vehicles,
        weapons,
        businesses,
        media,
      },
      suggestions,
    };
  }
}

export const searchApplication = new SearchApplication();
