import Link from 'next/link';
import { gta6Weapons } from '@/data/weapons';
import ShareButtons from '@/components/ShareButtons';
import { getBreadcrumbsSchema, getFAQSchema, getItemListSchema, getSEOTitle } from '@/lib/schema';
import styles from './page.module.css';

export const metadata = {
  title: getSEOTitle(gta6Weapons.title),
  description: gta6Weapons.metaDescription,
  alternates: {
    canonical: 'https://www.gtavispot.com/weapons/',
  },
  openGraph: {
    title: gta6Weapons.title,
    description: gta6Weapons.metaDescription,
    url: 'https://www.gtavispot.com/weapons/',
    type: 'article',
    images: [
      {
        url: `https://www.gtavispot.com${gta6Weapons.featureImage}`,
        width: 1200,
        height: 630,
        alt: gta6Weapons.featureImageAlt || gta6Weapons.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: gta6Weapons.title,
    description: gta6Weapons.metaDescription,
    images: [`https://www.gtavispot.com${gta6Weapons.featureImage}`],
  },
};

export default function WeaponsPage() {
  // Generate Schemas
  const breadcrumbs = getBreadcrumbsSchema([
    { name: 'Home', url: 'https://www.gtavispot.com' },
    { name: 'Weapons', url: 'https://www.gtavispot.com/weapons/' }
  ]);

  const faqs = [
    { question: "Can you customize weapons in GTA 6?", answer: "Yes. You can customize your arsenal at weapon workbenches. Upgrades include optical sights, extended magazines, suppressors, custom grips, and custom skin finishes." },
    { question: "How does the trunk weapon storage work?", answer: "Your personal vehicles act as mobile gun lockers. You can interact with the trunk to swap your slotted rifles, restock ammunition, and manage your heavier tactical gear." },
    { question: "Will weapons have realistic recoil?", answer: "Yes. The physics engine introduces dynamic barrel climb and spray patterns. Adding grips and compensators helps reduce this recoil during rapid fire." },
    { question: "Can characters share ammunition?", answer: "Yes. Lucia and Jason can toss extra magazines or weapon frames to each other when they are pinned down behind the same cover during heists." }
  ];
  const faqSchema = getFAQSchema(faqs);

  const itemListSchema = getItemListSchema({
    name: 'GTA 6 Confirmed Weapons List',
    description: 'Complete list of all confirmed firearms, melee weapons, explosives, and heavy weapons in Grand Theft Auto VI.',
    items: [
      { name: 'Hawk & Little Morgan Revolvers', description: 'Dual-wield vintage revolvers with custom wood grips and nickel-plated finish' },
      { name: 'Assault Rifle', description: 'Standard-issue automatic rifle with selectable fire modes and attachment rails' },
      { name: 'Combat Shotgun', description: 'Pump-action close-quarters weapon with high damage and wide pellet spread' },
      { name: 'Sniper Rifle', description: 'Long-range precision rifle with variable zoom scope and suppressor compatibility' },
      { name: 'SMG', description: 'Compact submachine gun with high rate of fire ideal for drive-by shootings' },
      { name: 'RPG Launcher', description: 'Shoulder-fired rocket launcher for destroying armored vehicles and helicopters' },
      { name: 'Machete', description: 'Tropical melee weapon found throughout Leonida for close-range stealth takedowns' },
      { name: 'Grenade', description: 'Standard fragmentation grenade with timed fuse and wide blast radius' },
      { name: 'Molotov Cocktail', description: 'Improvised incendiary weapon that creates a temporary fire zone on impact' },
      { name: 'Vintage Vice City Weapon Pattern', description: 'Exclusive retro-themed weapon skins with neon and art-deco liveries' },
    ],
  });

  return (
    <div className={styles.wrapper}>
      {/* Schema Markups */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <div className={`container ${styles.article}`}>
        {/* Breadcrumbs visually */}
        <div className={styles.breadcrumbs}>
          <Link href="/" className={styles.breadLink}>Home</Link>
          <span className={styles.breadSep}>/</span>
          <span className={styles.breadCurrent}>Weapons</span>
        </div>

        <header className={styles.header}>
          <h1 className={styles.title}>{gta6Weapons.h1}</h1>
          <div className={styles.meta}>
            <span>By <strong>{gta6Weapons.author}</strong></span>
            <span className={styles.metaSep}>•</span>
            <span>Published: {gta6Weapons.publishedDate}</span>
          </div>
        </header>

        {/* Share buttons (top) */}
        <ShareButtons isTop={true} url="https://www.gtavispot.com/weapons/" title={gta6Weapons.title} />

        <div className={styles.divider}></div>

        <main className={styles.body}>
          {gta6Weapons.content}
        </main>

        <div className={styles.divider} style={{ margin: '48px 0 24px' }}></div>

        {/* Share buttons (bottom) */}
        <ShareButtons isTop={false} url="https://www.gtavispot.com/weapons/" title={gta6Weapons.title} />
      </div>
    </div>
  );
}
