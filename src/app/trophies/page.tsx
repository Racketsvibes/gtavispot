import Link from 'next/link';
import { gta6Trophies } from '@/data/trophies';
import ShareButtons from '@/components/ShareButtons';
import RelatedPosts from '@/components/RelatedPosts';
import { getBreadcrumbsSchema, getFAQSchema, getHowToSchema, getArticleSchema, getSEOTitle } from '@/lib/schema';
import { ArticleBodyWithAds, ResponsiveLeaderboardAd, SidebarAd160x600 } from '@/components/ads';
import styles from './page.module.css';

export const metadata = {
  title: getSEOTitle(gta6Trophies.title),
  description: gta6Trophies.metaDescription,
  alternates: {
    canonical: 'https://www.gtavispot.com/trophies/',
  },
  openGraph: {
    title: gta6Trophies.title,
    description: gta6Trophies.metaDescription,
    url: 'https://www.gtavispot.com/trophies/',
    type: 'article',
    images: [
      {
        url: `https://www.gtavispot.com${gta6Trophies.featureImage}`,
        width: 1200,
        height: 630,
        alt: gta6Trophies.featureImageAlt || gta6Trophies.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: gta6Trophies.title,
    description: gta6Trophies.metaDescription,
    images: [`https://www.gtavispot.com${gta6Trophies.featureImage}`],
  },
};

export default function TrophiesPage() {
  // Generate Breadcrumbs Schema
  const breadcrumbs = getBreadcrumbsSchema([
    { name: 'Home', url: 'https://www.gtavispot.com' },
    { name: 'Trophies', url: 'https://www.gtavispot.com/trophies/' }
  ]);

  // Generate Article Schema
  const articleSchema = getArticleSchema({
    headline: gta6Trophies.title,
    description: gta6Trophies.metaDescription,
    imageUrl: `https://www.gtavispot.com${gta6Trophies.featureImage}`,
    datePublished: gta6Trophies.publishedDate,
    dateModified: gta6Trophies.modifiedDate || gta6Trophies.publishedDate,
    authorName: gta6Trophies.author,
    url: 'https://www.gtavispot.com/trophies/',
  });

  // Generate FAQ Schema for Google Rich Snippets / AEO
  const faqs = [
    {
      question: "How many trophies are in GTA 6?",
      answer: "GTA 6 is expected to feature approximately 55 to 60 trophies on PlayStation 5 (including 1 Platinum, 3 Gold, ~12 Silver, and 40+ Bronze) and 1,000 Gamerscore spread across 50+ achievements on Xbox Series X/S."
    },
    {
      question: "How long will it take to get the GTA 6 Platinum trophy?",
      answer: "Earning the Platinum trophy in GTA 6 will take an estimated 80 to 120 hours, covering the single-player campaign, 100% open-world completion, collectibles, and GTA Online rank progression."
    },
    {
      question: "Can you get trophies while playing as both Lucia and Jason?",
      answer: "Yes. GTA 6 features dual protagonists, and specific trophies require performing actions with both characters, such as scoring headshots, completing character-specific side missions, and executing tactical switches in combat."
    },
    {
      question: "Will GTA 6 have multiplayer online trophies?",
      answer: "Yes. Similar to GTA V and Red Dead Redemption 2, GTA 6 includes multiplayer trophies tied to reaching Rank 25, 50, and 100, joining a Social Club crew, and completing online heist finales."
    },
    {
      question: "Does GTA 6 have missable trophies?",
      answer: "No. Rockstar Games features a Mission Replay system in the Game menu, allowing players to replay any story heist or stranger mission at any time to complete Gold Medal requirements without restarting the game."
    },
    {
      question: "Can I use cheats and still get trophies in GTA 6?",
      answer: "No. Entering cheat codes disables trophies and achievements for your active play session. Always save your game to a separate manual save slot before activating any cheat codes."
    }
  ];
  const faqSchema = getFAQSchema(faqs);

  // Generate HowTo Schema for Roadmap
  const howToSchema = getHowToSchema({
    name: 'How to Get the GTA 6 Platinum Trophy and 1000G on Xbox',
    description: 'A 5-phase completionist roadmap to unlock all GTA 6 trophies on PlayStation 5 and achieve 1,000 Gamerscore on Xbox Series X/S.',
    totalTime: 'PT100H',
    image: `https://www.gtavispot.com${gta6Trophies.featureImage}`,
    steps: [
      {
        name: 'Step 1: Complete the Main Story Campaign',
        text: 'Play through Lucia and Jason’s storyline without worrying about missed trophies. Enjoy the narrative, heists, and character-switching mechanics.'
      },
      {
        name: 'Step 2: Unfog the Map and Clear World Events',
        text: 'Explore all regions of Leonida including Vice City, Port Gellhorn, Ambrosia, and the Leonida Keys. Discover points of interest and stranger missions.'
      },
      {
        name: 'Step 3: Reach 100% Game Completion',
        text: 'Collect all hidden packages, underwater caches, complete stunt jumps, and finish all required side activities and mini-games.'
      },
      {
        name: 'Step 4: Complete Combat & Miscellaneous Feats',
        text: 'Survive 5-star wanted levels, perform 50 tactical character switches in combat, and upgrade personal weapons and vehicles.'
      },
      {
        name: 'Step 5: Rank Up in GTA 6 Online',
        text: 'Jump into GTA 6 Online, join a crew, complete multiplayer heist finales, and reach Rank 25, 50, and 100 to pop the final trophies.'
      }
    ],
  });

  return (
    <div className={styles.wrapper}>
      {/* Schema Markups */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="relative w-full">
        <article className={`container ${styles.article}`}>
          {/* Breadcrumbs visually */}
          <div className={styles.breadcrumbs}>
            <Link href="/" className={styles.breadLink}>Home</Link>
            <span className={styles.breadSep}>/</span>
            <span className={styles.breadCurrent}>Trophies</span>
          </div>

          <header className={styles.header}>
            <span className={styles.categoryBadge}>COMPLETIONIST GUIDE</span>
            <h1 className={styles.title}>{gta6Trophies.h1}</h1>
            <div className={styles.meta}>
              <span>By <strong>{gta6Trophies.author}</strong></span>
              <span className={styles.metaSep}>•</span>
              <span>Published: {gta6Trophies.publishedDate}</span>
            </div>
          </header>

          {/* Share buttons (top) */}
          <ShareButtons isTop={true} url="https://www.gtavispot.com/trophies/" title={gta6Trophies.title} />

          <div className={styles.divider}></div>

          <ArticleBodyWithAds className={styles.body}>
            {gta6Trophies.content}
          </ArticleBodyWithAds>

          {/* Responsive Leaderboard Slot (728x90 Desktop / 320x50 Mobile) */}
          <ResponsiveLeaderboardAd />

          <div className={styles.divider} style={{ margin: '48px 0 24px' }}></div>

          {/* Share buttons (bottom) */}
          <ShareButtons isTop={false} url="https://www.gtavispot.com/trophies/" title={gta6Trophies.title} />
        </article>

        {/* Desktop Left and Right Floating Sidebars */}
        <SidebarAd160x600 side="both" />
      </div>
      <div className="container">
        <RelatedPosts category="guides" currentSlug="trophies" />
      </div>
    </div>
  );
}
