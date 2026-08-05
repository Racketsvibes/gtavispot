import Link from 'next/link';
import Image from 'next/image';
import { gta6CarsArticle } from '@/data/vehicles/gta-6-cars';
import ShareButtons from '@/components/ShareButtons';
import { getBreadcrumbsSchema, getFAQSchema, getSEOTitle } from '@/lib/schema';
import styles from '../page.module.css';

export const metadata = {
  title: getSEOTitle(gta6CarsArticle.title),
  description: gta6CarsArticle.metaDescription,
  alternates: {
    canonical: 'https://gtavispot.com/vehicles/gta-6-cars/',
  },
  openGraph: {
    title: gta6CarsArticle.title,
    description: gta6CarsArticle.metaDescription,
    url: 'https://gtavispot.com/vehicles/gta-6-cars/',
    type: 'article',
    images: [
      {
        url: `https://gtavispot.com${gta6CarsArticle.featureImage}`,
        width: 1200,
        height: 630,
        alt: gta6CarsArticle.featureImageAlt || gta6CarsArticle.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: gta6CarsArticle.title,
    description: gta6CarsArticle.metaDescription,
    images: [`https://gtavispot.com${gta6CarsArticle.featureImage}`],
  },
};

export default function Gta6CarsPage() {
  const breadcrumbs = getBreadcrumbsSchema([
    { name: 'Home', url: 'https://gtavispot.com' },
    { name: 'Vehicles', url: 'https://gtavispot.com/vehicles/' },
    { name: gta6CarsArticle.h1, url: 'https://gtavispot.com/vehicles/gta-6-cars/' }
  ]);

  const faqs = [
    { question: "Will GTA 6 have real cars?", answer: "No, GTA 6 does not feature licensed real-world car brands. Instead, it features fictional parody manufacturers like Grotti (Ferrari), Pegassi (Lamborghini), and Vapid (Ford) that mimic real designs." },
    { question: "How do you get the '67 Vapid Dominator Buggy in GTA 6?", answer: "The '67 Vapid Dominator Buggy is an exclusive vehicle included in the GTA 6 Ultimate Edition. It is stored at the Paradise Garage in Watson Bay once unlocked." },
    { question: "What is the real-life model of the '95 Grotti Cheetah?", answer: "The '95 Grotti Cheetah is styled after the iconic Ferrari Testarossa, bringing a retro-classic look back to Leonida's streets." },
    { question: "Is the Grotti Veleno GT available in the standard edition of GTA 6?", answer: "Yes, the Grotti Veleno GT is available for purchase in-game on Legendary Motorsport for GTA$ 3,850,000 for all players." },
    { question: "Can you customize cars in GTA 6?", answer: "Yes, you can customize vehicles at Rideout Customs and other local shops. Customization includes performance upgrades, paint, suspension height, and specialized liveries." }
  ];
  const faqSchema = getFAQSchema(faqs);

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "GTA 6 Cars & Vehicle Physics Gameplay Trailer Analysis",
    "description": "Watch the complete analysis of the confirmed GTA 6 cars list, real-life models, and the updated RAGE vehicle physics engine in Leonida.",
    "thumbnailUrl": ["https://img.youtube.com/vi/DJIXdaNBwDQ/maxresdefault.jpg"],
    "uploadDate": "2025-12-05",
    "duration": "PT8M42S",
    "contentUrl": "https://www.youtube.com/watch?v=DJIXdaNBwDQ",
    "embedUrl": "https://www.youtube.com/embed/DJIXdaNBwDQ"
  };

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      <div className={`container ${styles.article}`}>
        {/* Breadcrumbs visually */}
        <div className={styles.breadcrumbs}>
          <Link href="/" className={styles.breadLink}>Home</Link>
          <span className={styles.breadSep}>/</span>
          <Link href="/vehicles/" className={styles.breadLink}>Vehicles</Link>
          <span className={styles.breadSep}>/</span>
          <span className={styles.breadCurrent}>{gta6CarsArticle.h1}</span>
        </div>

        <header className={styles.header}>
          <h1 className={styles.title}>{gta6CarsArticle.h1}</h1>
          <div className={styles.meta}>
            <span>By <strong>{gta6CarsArticle.author}</strong></span>
            <span className={styles.metaSep}>•</span>
            <span>Published: {gta6CarsArticle.publishedDate}</span>
          </div>
        </header>

        {/* Share buttons (top) */}
        <ShareButtons isTop={true} url="https://gtavispot.com/vehicles/gta-6-cars/" title={gta6CarsArticle.title} />

        <div className={styles.divider}></div>

        <main className={styles.body}>
          {gta6CarsArticle.content}
        </main>

        <div className={styles.divider} style={{ margin: '48px 0 24px' }}></div>

        {/* Share buttons (bottom) */}
        <ShareButtons isTop={false} url="https://gtavispot.com/vehicles/gta-6-cars/" title={gta6CarsArticle.title} />
      </div>
    </div>
  );
}
