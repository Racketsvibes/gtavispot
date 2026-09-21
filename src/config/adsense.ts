/**
 * Google AdSense Configuration for gtavispot.com
 * Client: ca-pub-7134755750458767
 *
 * Performance Optimized:
 * - Script loaded lazily (lazyOnload) to prevent blocking Core Web Vitals (LCP, FCP, TBT)
 * - Zero server-side overhead
 * - Clean layout-shift prevention with min-height container
 */

export const ADSENSE_CONFIG = {
  // Master switch
  ENABLED: true,

  // Google AdSense Publisher ID
  client: 'ca-pub-7134755750458767',

  // Custom Display Banner Slot ID (After Post Header)
  bannerSlot: '8152708714',

  /**
   * The 38 Most Traffic Pages identified from Google Analytics export
   * where the Custom Display Banner is rendered directly after the Post Header.
   */
  targetPages: [
    // 1. GTA 6 Voice Actors: Complete Cast & Characters 2026
    'voice-actors',
    // 2. GTA 6 System Requirements: PS5 & Xbox Hardware Specs
    'gta-6-system-requirements',
    // 3. GTA 6 Strip Club Leak: Cyberleek Releases Clip 7 in Crypto Grift
    'gta-6-strip-club-leak',
    // 4. GTA 6 Interiors: All 700+ Enterable Buildings Guide
    'interiors',
    // 5. GTA 6 Ending Explained: All 3 Endings & Secret End 2026
    'ending',
    // 6. GTA 6 Characters: Protagonists, Cast & Real Life Rumors
    'gta-6-characters',
    // 7. GTA 6 Collectors Edition: Price & Details
    'gta-6-collectors-edition',
    // 8. GTA 6 All Missions List: Every Story Mission in Order
    'missions',
    // 9. GTA 6 Physical Copy: Disc Release & Pre-Order Details
    'gta-6-physical-copy',
    // 10. GTA Vi Spot: GTA 6 News, Guides & Interactive Map (Homepage)
    'home',
    // 11. GTA 6 Map Size: How Big Is It vs GTA 5, RDR2 & More
    'size',
    'how-big-will-gta-6-be',
    // 12. GTA 6 Walkthrough: Story Mode Guide & All Missions
    'walkthrough',
    // 13. GTA 6 PC Requirements: Specs, Hardware & RAM Guide
    'gta-6-pc-requirements',
    // 14. GTA 6 Cars List: Real-Life Vehicles & Brands Guide
    'gta-6-cars',
    // 15. GTA 6 Delay History: How Many Times Was It Delayed?
    'gta-6-delay',
    // 16. GTA 6 PC Release Date: When Is It Coming to PC?
    'gta-6-pc-release-date',
    // 17. GTA 6 Lucia Guide: Character, Backstory & Abilities
    'lucia',
    // 18. GTA 6 Jason & Lucia: Relationship, Dynamic & Theme Guide
    'jason-and-lucia',
    // 19. GTA 6 Story & Characters — Full Overview Guide
    'story-hub',
    // 20. GTA 6 Raul Bautista Guide: Heists, Cast & Real Leaks
    'gta-6-raul-bautista',
    // 21. GTA 6 Jason Guide: Character, Backstory & Abilities
    'jason',
    // 22. GTA 6 Mods: Expected Release, Leaks & Custom Tools
    'mods-hub',
    // 23. GTA 6 Lucia Backstory: Liberty City, Origin & Full Lore
    'lucia-backstory',
    // 24. GTA 6 Bikes List: Confirmed Motorcycles & Bicycles
    'gta-6-bikes',
    // 25. GTA 6 How Long to Beat: Story & 100% Playtimes (2026)
    'how-long-to-beat',
    // 26. GTA 6 Weapons List: All Confirmed Guns
    'weapons-hub',
    // 27. GTA 6 Dual Protagonists: Switching System Guide
    'dual-protagonists',
    // 28. GTA 6 Release Date: November 19, 2026 Confirmed
    'gta-6-release-date',
    // 29. GTA 6 Artworks: Official 4K Wallpapers & HD Gallery
    'gta-6-artworks',
    // 30. GTA 6 Graphics: Specs, Requirements & Visual Leaks
    'gta-6-graphics',
    // 31. GTA 6 vs GTA 5: Full Comparison & Key Differences
    'gta-6-vs-gta-5',
    // 32. PS5 vs Xbox Series x — Which to Buy For GTA 6 Specs
    'ps5-vs-xbox-series-x',
    // 33. GTA 6 Side Missions: All Stranger Quests & Rewards 2026
    'side-missions',
    // 34. GTA 6 Vehicles: Confirmed Cars, Bikes, Boats & Planes
    'vehicles-hub',
    // 35. GTA 6 Easter Eggs: Every Secret & Reference Found
    'easter-eggs',
    // 36. GTA 6 Underwater: Secrets, Sharks, Sunken Ships & Guide
    'underwater',
    // 37. GTA 6 Timeline: Complete Development & Trailer History
    'gta-6-timeline',
    // 38. GTA 6 Leaks Get Higher Quality: Cyberleeks Defies Subpoenas
    'gta-6-leaks-escalation',
  ],
};

/**
 * Check if a given slug or identifier is within the top-traffic targeted pages list.
 */
export function isAdSenseTargetPage(slug?: string): boolean {
  if (!ADSENSE_CONFIG.ENABLED || !slug) return false;
  const normalized = slug.trim().toLowerCase();
  return ADSENSE_CONFIG.targetPages.includes(normalized);
}
