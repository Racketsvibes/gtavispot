import Link from 'next/link';
import { gta6Guides } from '@/data/guides';
import ShareButtons from '@/components/ShareButtons';
import { getBreadcrumbsSchema, getFAQSchema, getSEOTitle } from '@/lib/schema';
import styles from './page.module.css';

export const metadata = {
  title: getSEOTitle(gta6Guides.title),
  description: gta6Guides.metaDescription,
  alternates: {
    canonical: 'https://gtavispot.com/guides/',
  },
  openGraph: {
    title: gta6Guides.title,
    description: gta6Guides.metaDescription,
    url: 'https://gtavispot.com/guides/',
    type: 'article',
    images: [
      {
        url: `https://gtavispot.com${gta6Guides.featureImage}`,
        width: 1200,
        height: 630,
        alt: gta6Guides.featureImageAlt || gta6Guides.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: gta6Guides.title,
    description: gta6Guides.metaDescription,
    images: [`https://gtavispot.com${gta6Guides.featureImage}`],
  },
};

export default function GuidesPage() {
  // Generate Schemas
  const breadcrumbs = getBreadcrumbsSchema([
    { name: 'Home', url: 'https://gtavispot.com' },
    { name: 'Guides', url: 'https://gtavispot.com/guides/' }
  ]);

  const faqs = [
    { question: "What is the first thing to do in GTA 6?", answer: "Your first step should be configuring your gameplay options. Open your settings menu on PS5 or Xbox Series X/S to adjust camera sensitivities, customize accessibility options, and select 'Performance Mode' to target a smooth 60 FPS before launching the story campaign." },
    { question: "Is there a complete GTA 6 guide available before launch?", answer: "Yes, our platform serves as your complete pre-launch resource, cataloging every verified leak, trailer detail, and developer announcement. We will transition this hub into an interactive walkthrough manual on launch day." },
    { question: "What confirmed features should I know before playing GTA 6?", answer: "Key confirmed features include a dual protagonist trust system, smart NPC memory AI, police bodycam tracking, a returning 6-star wanted level, and over 700 fully enterable interior structures across the state of Leonida." },
    { question: "What is the best money strategy in GTA 6?", answer: "In Story Mode, focus on heist preparations and target high-value interior robberies. For GTA 6 Online, participate in double-money weekly events, register business properties, and execute team-based robberies to maximize your bank roll." },
    { question: "Is this GTA 6 guide suitable for complete beginners?", answer: "Yes. This guide is structured to help both newcomers and veteran players. By following the launch prep steps, heist walkthroughs, and control optimization guidelines in order, beginners can easily navigate the open-world mechanics." },
    { question: "Will my settings and controls from GTA 5 work in GTA 6?", answer: "No, settings do not carry over automatically. Because of the new shooting and driving physics engines, players should manually test and recalibrate camera acceleration, deadzones, and combat comfort options on Day One." },
    { question: "How much storage do I need before downloading GTA 6?", answer: "You will need approximately 150GB of free SSD space to download and install the game client. High-speed solid-state drives are mandatory to prevent slow asset loading and texture pop-ins on consoles and PC." }
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
          <span className={styles.breadCurrent}>Guides</span>
        </div>

        <header className={styles.header}>
          <h1 className={styles.title}>{gta6Guides.h1}</h1>
          <div className={styles.meta}>
            <span>By <strong>{gta6Guides.author}</strong></span>
            <span className={styles.metaSep}>•</span>
            <span>Published: {gta6Guides.publishedDate}</span>
          </div>
        </header>

        {/* Share buttons (top) */}
        <ShareButtons isTop={true} url="https://gtavispot.com/guides/" title={gta6Guides.title} />

        <div className={styles.divider}></div>

        <main className={styles.body}>
          {gta6Guides.content}
        </main>

        <div className={styles.divider} style={{ margin: '48px 0 24px' }}></div>

        {/* Share buttons (bottom) */}
        <ShareButtons isTop={false} url="https://gtavispot.com/guides/" title={gta6Guides.title} />
      </div>
    </div>
  );
}
