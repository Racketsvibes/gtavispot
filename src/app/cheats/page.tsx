import Link from 'next/link';
import { gta6Cheats } from '@/data/cheats';
import ShareButtons from '@/components/ShareButtons';
import RelatedPosts from '@/components/RelatedPosts';
import { getBreadcrumbsSchema, getFAQSchema, getSEOTitle } from '@/lib/schema';
import styles from './page.module.css';

export const metadata = {
  title: getSEOTitle(gta6Cheats.title),
  description: gta6Cheats.metaDescription,
  alternates: {
    canonical: 'https://gtavispot.com/cheats/',
  },
  openGraph: {
    title: gta6Cheats.title,
    description: gta6Cheats.metaDescription,
    url: 'https://gtavispot.com/cheats/',
    type: 'article',
    images: [
      {
        url: `https://gtavispot.com${gta6Cheats.featureImage}`,
        width: 1200,
        height: 630,
        alt: gta6Cheats.featureImageAlt || gta6Cheats.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: gta6Cheats.title,
    description: gta6Cheats.metaDescription,
    images: [`https://gtavispot.com${gta6Cheats.featureImage}`],
  },
};

export default function CheatsPage() {
  // Generate Schemas
  const breadcrumbs = getBreadcrumbsSchema([
    { name: 'Home', url: 'https://gtavispot.com' },
    { name: 'Cheats', url: 'https://gtavispot.com/cheats/' }
  ]);

  const faqs = [
    { question: "Will GTA 6 have a money cheat code?", answer: "Historically, Rockstar Games does not include money cheats in Story Mode to preserve the in-game economy and mission progression. You will need to complete heists and side activities to earn cash." },
    { question: "Does using cheats in GTA 6 lock achievements and trophies?", answer: "Yes, entering cheat codes will lock trophies and achievements for your active play session. It is highly recommended to save your game to a separate slot before activating any codes." },
    { question: "Can you use GTA 6 cheats in the multiplayer online mode?", answer: "No, cheat codes are strictly disabled in GTA 6 Online to prevent exploitation and keep multiplayer matches fair. They only work in the single-player campaign." },
    { question: "What are the expected formats for GTA 6 cheats?", answer: "The codes are expected to be activated using three methods: inputting button combinations on your controller, dialing phone numbers on your in-game smartphone, and typing text keywords into the PC command console." }
  ];
  const faqSchema = getFAQSchema(faqs);

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

      <div className={`container ${styles.article}`}>
        {/* Breadcrumbs visually */}
        <div className={styles.breadcrumbs}>
          <Link href="/" className={styles.breadLink}>Home</Link>
          <span className={styles.breadSep}>/</span>
          <span className={styles.breadCurrent}>Cheats</span>
        </div>

        <header className={styles.header}>
          <h1 className={styles.title}>{gta6Cheats.h1}</h1>
          <div className={styles.meta}>
            <span>By <strong>{gta6Cheats.author}</strong></span>
            <span className={styles.metaSep}>•</span>
            <span>Published: {gta6Cheats.publishedDate}</span>
          </div>
        </header>

        {/* Share buttons (top) */}
        <ShareButtons isTop={true} url="https://gtavispot.com/cheats/" title={gta6Cheats.title} />

        <div className={styles.divider}></div>

        <main className={styles.body}>
          {gta6Cheats.content}
        </main>

        <div className={styles.divider} style={{ margin: '48px 0 24px' }}></div>

        {/* Share buttons (bottom) */}
        <ShareButtons isTop={false} url="https://gtavispot.com/cheats/" title={gta6Cheats.title} />
      </div>
      <div className="container">
        <RelatedPosts category="cheats" currentSlug="cheats" />
      </div>
    </div>
  );
}
