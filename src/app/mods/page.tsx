import Link from 'next/link';
import Image from 'next/image';
import { gta6Mods } from '@/data/mods';
import ShareButtons from '@/components/ShareButtons';
import { getBreadcrumbsSchema, getFAQSchema, getItemListSchema, getSEOTitle } from '@/lib/schema';
import styles from './page.module.css';

export const metadata = {
  title: getSEOTitle(gta6Mods.title),
  description: gta6Mods.metaDescription,
  alternates: {
    canonical: 'https://gtavispot.com/mods/',
  },
  openGraph: {
    title: gta6Mods.title,
    description: gta6Mods.metaDescription,
    url: 'https://gtavispot.com/mods/',
    type: 'article',
    images: [
      {
        url: `https://gtavispot.com${gta6Mods.featureImage}`,
        width: 1200,
        height: 630,
        alt: gta6Mods.featureImageAlt || gta6Mods.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: gta6Mods.title,
    description: gta6Mods.metaDescription,
    images: [`https://gtavispot.com${gta6Mods.featureImage}`],
  },
};

export default function ModsPage() {
  // Generate Schemas
  const breadcrumbs = getBreadcrumbsSchema([
    { name: 'Home', url: 'https://gtavispot.com' },
    { name: 'Mods', url: 'https://gtavispot.com/mods/' }
  ]);

  const faqs = [
    {
      question: "Are mods officially supported in GTA 6?",
      answer: "Mods are not officially released or supported at this time. However, Rockstar Games has acquired the Cfx.re team, which indicates they plan to officially support roleplay and scripting mods post-launch."
    },
    {
      question: "Can you mod GTA 6 on PS5 and Xbox Series X?",
      answer: "No, console platforms block filesystem access, making console modding highly unlikely. Modding will be exclusive to the PC version of the game."
    },
    {
      question: "Will mods get you banned from GTA Online?",
      answer: "Yes, using any sandbox modifications or script injectors in multiplayer servers will result in an immediate permanent ban. Mods must only be used in single-player mode."
    },
    {
      question: "What is the FiveM equivalent for GTA 6?",
      answer: "The Cfx.re team (the developers of FiveM) will likely build a dedicated multiplayer roleplay client for the next generation of the game once the PC port launches."
    },
    {
      question: "How do I install mods safely?",
      answer: "Only download scripts from verified community platforms like GTA5-Mods, and ensure you have a clean backup of your game directories before editing."
    }
  ];
  const faqSchema = getFAQSchema(faqs);

  const itemListSchema = getItemListSchema({
    name: 'GTA 6 Expected Mod Categories',
    description: 'Overview of predicted mod types, files, and tools for Grand Theft Auto VI modding.',
    items: [
      { name: 'Basic Trainer / Cheat Menu', description: 'Memory Address Injection for infinite health and vehicle spawning' },
      { name: 'Custom Save Files', description: 'Saved data replacement for instantly unlocking campaign progression' },
      { name: 'Custom Car Replacements', description: 'Fictional models swapped out for real-world automotive brands' },
      { name: 'Graphics Overhauls / Reshades', description: 'Custom shaders and filters that adjust color grading and tone mapping' },
      { name: 'Custom Scripting (LUA/C#)', description: 'Script loader scripts that enable custom missions, mini-games, and roleplay scripts' }
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
          <span className={styles.breadCurrent}>Mods</span>
        </div>

        <header className={styles.header}>
          <span className={styles.categoryBadge}>GTA 6 MODS & ROLEPLAY</span>
          <h1 className={styles.title}>{gta6Mods.h1}</h1>
          <div className={styles.meta}>
            <span>By <strong>{gta6Mods.author}</strong></span>
            <span className={styles.metaSep}>•</span>
            <span>Published: {gta6Mods.publishedDate}</span>
          </div>
        </header>

        {/* Share buttons (top) */}
        <ShareButtons isTop={true} url="https://gtavispot.com/mods/" title={gta6Mods.title} />

        <div className={styles.divider}></div>

        {gta6Mods.featureImage && (
          <div className={styles.featureImageContainer}>
            <Image 
              src={gta6Mods.featureImage} 
              alt={gta6Mods.featureImageAlt || gta6Mods.title} 
              width={1200}
              height={630}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              className={styles.featureImage} 
            />
          </div>
        )}

        <main className={styles.body}>
          {gta6Mods.content}
        </main>

        <div className={styles.divider} style={{ margin: '48px 0 24px' }}></div>

        {/* Share buttons (bottom) */}
        <ShareButtons isTop={false} url="https://gtavispot.com/mods/" title={gta6Mods.title} />
      </div>
    </div>
  );
}
