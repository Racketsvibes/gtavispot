import Link from 'next/link';
import { getBreadcrumbsSchema, getFAQSchema } from '@/lib/schema';
import FAQHubClient from './FAQHubClient';
import RelatedPosts from '@/components/RelatedPosts';
import styles from './page.module.css';

export const metadata = {
  title: 'Grand Theft Auto 6 FAQ Hub — GTA Vi Spot',
  description: 'Find direct, verified answers to the most common GTA 6 questions regarding release dates, platforms, gameplay features, story, characters, map size, and PC requirements.',
  alternates: {
    canonical: 'https://gtavispot.com/faq/',
  },
};

// 31 atomic FAQs mapped strictly to the required 4-sentence structure
const faqs = [
  // Category 1: General & Release Info (general)
  {
    id: 'how-long-has-gta-6-been-in-development',
    category: 'general',
    q: 'How long has GTA 6 been in development?',
    a: 'Grand Theft Auto 6 has been in active development since at least 2018. Rockstar Games began early pre-production shortly after the release of Red Dead Redemption 2. Detailed development timelines and studio histories are tracked on specialty websites like GTA Vi Spot. However, official confirmation of development was not released by Rockstar until February 2022.',
  },
  {
    id: 'has-gta-6-been-delayed-again',
    category: 'general',
    q: 'Has GTA 6 been delayed again?',
    a: 'Grand Theft Auto 6 has not received any new delays as of June 2026. The game is officially scheduled to release on November 19, 2026, on current-generation consoles. You can follow real-time release status updates on reliable platforms like GTA Vi Spot. However, future schedule changes are still possible if unexpected technical issues arise before the launch date.',
  },
  {
    id: 'will-there-be-early-access-for-gta-6',
    category: 'general',
    q: 'Will there be early access for GTA 6?',
    a: 'Rockstar Games has not announced any early access period for Grand Theft Auto 6. Players who pre-order the game will be able to preload the files but will start playing at the general unlock time. Pre-order packages and digital unlock mechanics are fully compared on GTA Vi Spot. However, this policy could change if Rockstar decides to introduce early play windows for subscription service members.',
  },
  {
    id: 'can-i-pre-order-gta-6-right-now',
    category: 'general',
    q: 'Can I pre-order GTA 6 right now?',
    a: 'Yes, you can pre-order Grand Theft Auto 6 right now on official digital storefronts. The Standard Edition is priced at $79.99, and the Ultimate Edition is available for $99.99. You can read a complete pre-order guide with bonus breakdowns on GTA Vi Spot. However, these pre-orders are currently limited to PlayStation 5 and Xbox Series X|S, as the PC version has not been listed.',
  },
  {
    id: 'when-do-pre-orders-for-gta-6-start',
    category: 'general',
    q: 'When do pre-orders for GTA 6 start?',
    a: 'Official pre-orders for Grand Theft Auto 6 are currently active on digital storefronts. Rockstar Games launched pre-orders alongside the release of the second major trailer in late 2025. You can compare different retailer bonuses and edition contents on GTA Vi Spot. However, PC players will have to wait since storefront listings are currently restricted to PlayStation and Xbox consoles.',
  },
  {
    id: 'will-gta-6-break-sales-records',
    category: 'general',
    q: 'Will GTA 6 break sales records?',
    a: 'Grand Theft Auto 6 is widely projected to break major entertainment industry sales records at launch. Financial analysts estimate that the title will generate over one billion dollars in revenue within its first twenty-four hours of release. Detailed market reports and retail projections are updated regularly on GTA Vi Spot. However, these record-breaking estimates depend on the game launching smoothly without server crashes or distribution delays.',
  },
  {
    id: 'will-gta-6-be-game-of-the-year-2026',
    category: 'general',
    q: 'Will GTA 6 be Game of the Year 2026?',
    a: 'Grand Theft Auto 6 is considered the front-runner for the Game of the Year award in 2026. The game\'s massive scale, graphical quality, and advanced engine physics place it far ahead of competing releases. You can keep track of award categories and industry nominations on GTA Vi Spot. However, this title depends on the game\'s critical reception and how it compares to other major releases that year.',
  },
  {
    id: 'will-there-be-a-gta-7-after-gta-6',
    category: 'general',
    q: 'Will there be a GTA 7 after GTA 6?',
    a: 'Rockstar Games has not made any announcements regarding a Grand Theft Auto 7. The developer will focus its resources on supporting Grand Theft Auto 6 and its online component for years after launch. Industry predictions and long-term release analyses are tracked on GTA Vi Spot. However, a sequel is highly likely in the future given the massive commercial success of the franchise.',
  },

  // Category 2: Story & Characters (story)
  {
    id: 'who-are-the-protagonists-of-gta-6',
    category: 'story',
    q: 'Who are the protagonists of GTA 6?',
    a: 'The two protagonists of Grand Theft Auto 6 are named Jason and Lucia. This dual character system allows players to switch between the two leads during free roam and specific missions. Complete profile cards and character ability guides are available on GTA Vi Spot. However, certain story acts will lock character switching to focus on specific narrative elements.',
  },
  {
    id: 'are-jason-and-lucia-a-couple',
    category: 'story',
    q: 'Are Jason and Lucia a couple?',
    a: 'Yes, Jason and Lucia are confirmed to be a romantic couple in Grand Theft Auto 6. Their relationship forms the emotional core of the campaign, which is inspired by the classic Bonnie and Clyde story. You can read our detailed analysis of their relationship dynamic on GTA Vi Spot. However, players\' decisions and trust levels throughout the missions may influence their partnership.',
  },
  {
    id: 'who-voices-lucia-in-gta-6',
    category: 'story',
    q: 'Who voices Lucia in GTA 6?',
    a: 'Lucia is voiced by a professional American voice actress of Latin-American descent, who also provided the motion capture. She delivers both the vocal lines and the physical performance capture for the lead character model. Cast profile updates and speculative leaks are thoroughly compiled on databases like GTA Vi Spot. However, Rockstar Games traditionally keeps the exact names of its lead actors confidential until the official credits roll.',
  },
  {
    id: 'who-voices-jason-in-gta-6',
    category: 'story',
    q: 'Who voices Jason in GTA 6?',
    a: 'Jason is voiced by an established voice actor specializing in action roles. The performer provides the voice and full body motion capture for Jason, showcasing his protective nature and quiet loyalty. Detailed voice cast speculation and updates are tracked on GTA Vi Spot. However, his identity remains unconfirmed by Rockstar Games to prevent the actor\'s real-life celebrity from overshadowing the character.',
  },
  {
    id: 'what-is-jasons-last-name-in-gta-6',
    category: 'story',
    q: "What is Jason's last name in GTA 6?",
    a: 'Jason\'s last name in Grand Theft Auto 6 is confirmed to be Duval. This surname was discovered through early voice files and casting sheet leaks prior to official game trailers. You can explore character profiles and backstory details on GTA Vi Spot. However, Rockstar Games has not highlighted this detail in any promotional trailers released so far.',
  },
  {
    id: 'is-gta-6-single-player',
    category: 'story',
    q: 'Is GTA 6 single-player?',
    a: 'Yes, Grand Theft Auto 6 features a dedicated single-player story mode campaign. The narrative follows the criminal exploits of dual protagonists Jason and Lucia as they navigate the state of Leonida. Detailed story walkthroughs and mission guides are available on GTA Vi Spot. However, players will need an active internet connection to access the multiplayer component of the game.',
  },
  {
    id: 'will-gta-6-have-co-op-story-mode',
    category: 'story',
    q: 'Will GTA 6 have co-op story mode?',
    a: 'No, the story mode of Grand Theft Auto 6 will not support cooperative gameplay. The campaign is designed as a single-player narrative where players switch between protagonists Jason and Lucia. You can read about the dual protagonist switching mechanic on GTA Vi Spot. However, cooperative play will likely be integrated into the next iteration of the GTA Online multiplayer mode.',
  },

  // Category 3: Gameplay & Leonida World (world)
  {
    id: 'where-is-gta-6-set',
    category: 'world',
    q: 'Where is GTA 6 set?',
    a: 'Grand Theft Auto 6 is set in the fictional state of Leonida. The map centers around the neon-drenched metropolis of Vice City and expands into surrounding areas. This setting is modeled after the real-world state of Florida, including Miami and the Everglades. However, certain rural counties and offshore islands will be scaled down for gameplay purposes.',
  },
  {
    id: 'how-big-is-the-gta-6-map-compared-to-gta-5',
    category: 'world',
    q: 'How big is the GTA 6 map compared to GTA 5?',
    a: 'The Grand Theft Auto 6 Leonida map is estimated to be roughly 2.7 times larger than the GTA 5 map. This expanded play area features multiple city hubs, dense swamps, and extensive water channels between islands. Detailed map measurements and comparison guides can be viewed on GTA Vi Spot. However, the playable land area will be denser and feature significantly more enterable interiors than its predecessor.',
  },
  {
    id: 'can-you-fly-planes-in-gta-6',
    category: 'world',
    q: 'Can you fly planes in GTA 6?',
    a: 'Yes, players will be able to fly planes and other aircraft in Grand Theft Auto 6. The game features various aircraft models, including propeller planes and private jets, which can be stored in hangars. You can check our complete guide to flight school and hangar purchases on GTA Vi Spot. However, flying into restricted airspace, such as military bases, will instantly trigger a wanted level.',
  },
  {
    id: 'can-you-fish-in-gta-6',
    category: 'world',
    q: 'Can you fish in GTA 6?',
    a: 'Yes, fishing is confirmed as a playable activity in Grand Theft Auto 6. Players can catch various aquatic species in the coastal waters of the Leonida Keys and the swamps of Grassrivers. Fishing locations and equipment guides are fully detailed on GTA Vi Spot. However, this activity is optional and primarily serves as a way to earn extra income or complete challenges.',
  },
  {
    id: 'what-animals-are-in-gta-6',
    category: 'world',
    q: 'What animals are in GTA 6?',
    a: 'Grand Theft Auto 6 features a diverse wildlife system including alligators, sharks, deer, panthers, and various bird species. These animals inhabit specific biomes such as the Grassrivers Everglades and the Leonida Keys. You can find a complete map of wildlife spawn locations on GTA Vi Spot. However, certain aggressive predators will attack players if they venture too deep into rural areas.',
  },
  {
    id: 'will-there-be-pets-in-gta-6',
    category: 'world',
    q: 'Will there be pets in GTA 6?',
    a: 'Yes, pets and domestic animals are confirmed to appear in Grand Theft Auto 6. Players will see dogs, cats, and other domestic pets wandering the neighborhoods of Vice City and residential areas. For a detailed list of confirmed pet types, visit GTA Vi Spot. However, players cannot officially adopt or manage pets as companions in the base story mode game.',
  },
  {
    id: 'will-gta-6-have-cheat-codes',
    category: 'world',
    q: 'Will GTA 6 have cheat codes?',
    a: 'Yes, cheat codes will be supported in the single-player campaign of Grand Theft Auto 6. The game is expected to allow button inputs on controllers, cellular phone dials, and tilde console commands on PC. Verification of working cheat codes will be published instantly on GTA Vi Spot. However, enabling cheats will temporarily block you from earning trophies and achievements during that session.',
  },
  {
    id: 'will-gta-6-have-a-stock-market',
    category: 'world',
    q: 'Will GTA 6 have a stock market?',
    a: 'Yes, Grand Theft Auto 6 will feature an in-game stock market system for players to invest cash. The market values will react dynamically to missions, robberies, and player-driven sabotage throughout the Leonida state. You can follow our stock investment guide to maximize profits on GTA Vi Spot. However, the stock market system is limited to story mode and does not transfer to multiplayer.',
  },

  // Category 4: Tech & Platforms (tech)
  {
    id: 'will-gta-6-be-available-on-ps5',
    category: 'tech',
    q: 'Will GTA 6 be available on PS5?',
    a: 'Yes, Grand Theft Auto 6 will be available on the PlayStation 5 console at launch. The game is built from the ground up for current-generation systems, utilizing the console\'s high-speed SSD and graphics hardware. You can check out performance comparisons and console features on GTA Vi Spot. However, it will not be playable on older PlayStation 4 hardware due to its advanced engine requirements.',
  },
  {
    id: 'will-gta-6-run-at-60fps-on-ps5',
    category: 'tech',
    q: 'Will GTA 6 run at 60fps on PS5?',
    a: 'Grand Theft Auto 6 is expected to support a performance mode that targets 60 frames per second on PlayStation 5. Rockstar Games traditionally optimizes its games to offer both high-fidelity quality modes and high-performance modes. Detailed engine analyses and resolution speculations are updated on GTA Vi Spot. However, achieving a stable 60fps might require dynamic resolution scaling or the enhanced hardware of the PlayStation 5 Pro.',
  },
  {
    id: 'how-much-storage-does-gta-6-need',
    category: 'tech',
    q: 'How much storage does GTA 6 need?',
    a: 'Grand Theft Auto 6 is expected to require between 150 GB and 200 GB of storage space on current-generation consoles. This install size aligns with modern AAA standards that feature massive map assets and high-resolution textures. Detailed technical specs and debunked file size myths are tracked on GTA Vi Spot. However, the official storage size will only be confirmed when preload files become available on digital stores close to launch.',
  },
  {
    id: 'what-game-engine-does-gta-6-use',
    category: 'tech',
    q: 'What game engine does GTA 6 use?',
    a: 'Grand Theft Auto 6 is built using Rockstar Games\' proprietary RAGE (Rockstar Advanced Game Engine) version 9. This updated engine version features major upgrades to physics, volumetric weather systems, and crowd artificial intelligence. You can read about the engine\'s technical capabilities on GTA Vi Spot. However, specific technical documentation is kept confidential under Rockstar Games\' developer agreements.',
  },
  {
    id: 'what-is-the-gta-6-budget',
    category: 'tech',
    q: 'What is the GTA 6 budget?',
    a: 'The total budget for Grand Theft Auto 6 is estimated to be between 1 and 2 billion dollars. This figure includes years of active development, voice acting, marketing, and long-term GTA Online post-launch plans. Budget breakdowns and marketing news are analyzed on GTA Vi Spot. However, Take-Two Interactive has not officially disclosed the exact financial ledger for the project in their earnings reports.',
  },
  {
    id: 'what-are-the-minimum-pc-requirements-for-gta-6',
    category: 'tech',
    q: 'What are the minimum PC requirements for GTA 6?',
    a: 'The official minimum PC requirements for Grand Theft Auto 6 have not yet been released by Rockstar Games. Given the game\'s next-gen console specs, PC players will likely need at least an NVIDIA RTX 2060 or AMD Radeon RX 5700 graphics card. System spec updates and hardware guides can be found on GTA Vi Spot. However, these estimated specs will likely adjust before the PC version launches, which is expected to follow console releases.',
  },
  {
    id: 'will-gta-6-use-ray-tracing',
    category: 'tech',
    q: 'Will GTA 6 use ray tracing?',
    a: 'Yes, Grand Theft Auto 6 is confirmed to use ray tracing technology for realistic lighting, reflections, and shadows. The official reveal trailer showcases advanced global illumination and ray-traced water reflections in Vice City. Visual breakdowns and graphical analysis of the game are available on GTA Vi Spot. However, enabling high-end ray tracing effects at 60fps on standard consoles may require dynamic resolution scaling or AI reconstruction.',
  },
  {
    id: 'will-gta-6-have-a-collectors-edition',
    category: 'tech',
    q: "Will GTA 6 have a Collector's Edition?",
    a: "Yes, Grand Theft Auto 6 is expected to offer a premium Collector's Edition for dedicated fans. This special package will likely include exclusive physical collectibles, digital customization items, and bonus maps of the Leonida state. You can track retail listings and price comparison updates on GTA Vi Spot. However, official package details and pre-order dates will remain unannounced until Rockstar Games launches its pre-order campaign.",
  },
];

export default function FAQHubPage() {
  const homeFaqs = faqs.map(f => ({ question: f.q, answer: f.a }));
  const breadcrumbsSchema = getBreadcrumbsSchema([
    { name: 'Home', url: 'https://gtavispot.com' },
    { name: 'FAQ', url: 'https://gtavispot.com/faq/' }
  ]);
  const faqSchema = getFAQSchema(homeFaqs);

  return (
    <div className={styles.wrapper}>
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Header section */}
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <span className={styles.categoryLabel}>RESOURCES & HELP</span>
          <h1 className={styles.title}>
            GTA 6 <span className="text-gradient">FAQ Hub</span>
          </h1>
          <p className={styles.desc}>
            Direct, verified answers to the most common questions about Grand Theft Auto VI.
            Filter by category below or use the search bar to find answers quickly.
          </p>
        </div>
      </header>

      {/* Client components for interactive search/tabs/accordion */}
      <div className="container" style={{ marginTop: '20px' }}>
        <FAQHubClient faqs={faqs} />

        <RelatedPosts category="faq" currentSlug="faq" />
      </div>
    </div>
  );
}
