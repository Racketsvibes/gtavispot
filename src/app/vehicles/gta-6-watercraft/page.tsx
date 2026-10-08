import Link from 'next/link';
import Image from 'next/image';
import { gta6WatercraftArticle } from '@/data/vehicles/gta-6-watercraft';
import ShareButtons from '@/components/ShareButtons';
import { getBreadcrumbsSchema, getFAQSchema, getSEOTitle } from '@/lib/schema';
import { AdSensePostHeaderAd } from '@/components/ads';
import styles from '../page.module.css';

export const metadata = {
  title: getSEOTitle(gta6WatercraftArticle.title),
  description: gta6WatercraftArticle.metaDescription,
  alternates: {
    canonical: 'https://www.gtavispot.com/vehicles/gta-6-watercraft/',
  },
  openGraph: {
    title: gta6WatercraftArticle.title,
    description: gta6WatercraftArticle.metaDescription,
    url: 'https://www.gtavispot.com/vehicles/gta-6-watercraft/',
    type: 'article',
    images: [
      {
        url: `https://www.gtavispot.com${gta6WatercraftArticle.featureImage}`,
        width: 1200,
        height: 630,
        alt: gta6WatercraftArticle.featureImageAlt || gta6WatercraftArticle.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: gta6WatercraftArticle.title,
    description: gta6WatercraftArticle.metaDescription,
    images: [`https://www.gtavispot.com${gta6WatercraftArticle.featureImage}`],
  },
};

export default function Gta6WatercraftPage() {
  const breadcrumbs = getBreadcrumbsSchema([
    { name: 'Home', url: 'https://www.gtavispot.com' },
    { name: 'Vehicles', url: 'https://www.gtavispot.com/vehicles/' },
    { name: gta6WatercraftArticle.h1, url: 'https://www.gtavispot.com/vehicles/gta-6-watercraft/' }
  ]);

  const faqs = [
    { question: "How many boats are in GTA 6?", answer: "Rockstar has not announced a number. Trailer analysis confirms seven named boats plus around a dozen unnamed watercraft types, from airboats to kayaks. The final roster is still unknown." },
    { question: "What is the fastest boat in GTA 6 so far?", answer: "There is no honest answer yet because Rockstar has shown no speed stats. By design, the offshore racing hulls (Cigarette and Skater styles) and the Pegassi Speeder look like the speed contenders." },
    { question: "Can you buy a yacht in GTA 6?", answer: "Unconfirmed. The Dinka Marquis yacht is confirmed to exist in the world, and GTA Online let players buy yachts, but Rockstar has not confirmed purchases or marinas for GTA 6 yet." },
    { question: "Where do you find a Seashark jet ski?", answer: "The Seashark appears in beach and Keys scenes in the trailers. Following the franchise pattern, expect jet skis near beaches, docks and island shorelines. Exact spawn points are unconfirmed." },
    { question: "Are there airboats in GTA 6?", answer: "Yes, airboats have been spotted in trailer footage over wetland areas. They fit the Grassrivers region, where shallow water makes normal propellers useless. They are identified by design and not officially named yet." },
    { question: "Can you customize boats in GTA 6?", answer: "Unconfirmed. Cars get deep customization in GTA 6, but Rockstar has shown nothing about boat customization. We will update this answer when there is something official." },
    { question: "Do boats have weapons in GTA 6?", answer: "Nothing official. Past games mounted guns on a few military boats, but no armed watercraft has been confirmed for GTA 6 so far." }
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
          <Link href="/vehicles/" className={styles.breadLink}>Vehicles</Link>
          <span className={styles.breadSep}>/</span>
          <span className={styles.breadCurrent}>{gta6WatercraftArticle.h1}</span>
        </div>

        <header className={styles.header}>
          <h1 className={styles.title}>{gta6WatercraftArticle.h1}</h1>
          <div className={styles.meta}>
            <span>By <strong>{gta6WatercraftArticle.author}</strong></span>
            <span className={styles.metaSep}>•</span>
            <span>Published: {gta6WatercraftArticle.publishedDate}</span>
          </div>
        </header>

        {/* Share buttons (top) */}
        <ShareButtons isTop={true} url="https://www.gtavispot.com/vehicles/gta-6-watercraft/" title={gta6WatercraftArticle.title} />

        <div className={styles.divider}></div>

        <AdSensePostHeaderAd slug="gta-6-watercraft" />

        {gta6WatercraftArticle.featureImage && (
          <div className={styles.featureImageContainer}>
            <Image
              src={gta6WatercraftArticle.featureImage}
              alt={gta6WatercraftArticle.featureImageAlt || gta6WatercraftArticle.focusKeyword || gta6WatercraftArticle.title}
              width={800}
              height={450}
              sizes="(max-width: 768px) 100vw, 800px"
              className={styles.featureImage}
              priority
            />
          </div>
        )}

        <main className={styles.body}>
          {gta6WatercraftArticle.content}
        </main>

        <div className={styles.divider} style={{ margin: '48px 0 24px' }}></div>

        {/* Share buttons (bottom) */}
        <ShareButtons isTop={false} url="https://www.gtavispot.com/vehicles/gta-6-watercraft/" title={gta6WatercraftArticle.title} />
      </div>
    </div>
  );
}
