import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gta6BikesArticle } from '@/data/vehicles/gta-6-bikes';
import ShareButtons from '@/components/ShareButtons';
import { getBreadcrumbsSchema, getFAQSchema, getSEOTitle } from '@/lib/schema';
import styles from '../page.module.css';

export const metadata = {
  title: getSEOTitle(gta6BikesArticle.title),
  description: gta6BikesArticle.metaDescription,
  alternates: {
    canonical: 'https://www.gtavispot.com/vehicles/gta-6-bikes/',
  },
  openGraph: {
    title: gta6BikesArticle.title,
    description: gta6BikesArticle.metaDescription,
    url: 'https://www.gtavispot.com/vehicles/gta-6-bikes/',
    type: 'article',
    images: [
      {
        url: `https://www.gtavispot.com${gta6BikesArticle.featureImage}`,
        width: 1200,
        height: 630,
        alt: gta6BikesArticle.featureImageAlt || gta6BikesArticle.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: gta6BikesArticle.title,
    description: gta6BikesArticle.metaDescription,
    images: [`https://www.gtavispot.com${gta6BikesArticle.featureImage}`],
  },
};

export default function Gta6BikesPage() {
  const breadcrumbs = getBreadcrumbsSchema([
    { name: 'Home', url: 'https://www.gtavispot.com' },
    { name: 'Vehicles', url: 'https://www.gtavispot.com/vehicles/' },
    { name: gta6BikesArticle.h1, url: 'https://www.gtavispot.com/vehicles/gta-6-bikes/' }
  ]);

  const faqs = [
    {
      question: "Are there bicycles in GTA 6?",
      answer: "Yes, GTA 6 features multiple bicycle classes, including BMX street bikes, road racing bicycles, and utility electric bikes. Pedaling speeds are dynamically linked to character stamina, allowing players to build physical stats."
    },
    {
      question: "Can you customize motorcycles in GTA 6?",
      answer: "Yes. Customization is handled at local garages like Rideout Customs. Upgrades include custom exhaust pipes, tire types, fender eliminator kits, custom-painted gas tanks, and fairing adjustments."
    },
    {
      question: "What is the fastest motorcycle in GTA 6?",
      answer: "Based on early trailer analyses, the new Principe Alvino V1 (styled after the Ducati Panigale V2) and the returning Nagasaki Carbon RS are the fastest sports motorcycles in the game."
    },
    {
      question: "Is the Maibatsu Sanchez returning?",
      answer: "Yes, the Maibatsu Sanchez returns as the primary off-road dirt bike in GTA 6, featuring long-travel shocks, high mudguards, and lightweight frame handling built for Leonida's wetlands."
    },
    {
      question: "Will rider accidents be fatal in GTA 6?",
      answer: "Accidents at high speed are highly dangerous. Falling off a motorcycle triggers ragdoll physics, and colliding with urban obstacles at maximum speed can result in instant wasted status depending on your health bar."
    }
  ];
  const faqSchema = getFAQSchema(faqs);

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "GTA 6 Bikes & Motorcycle Customization Gameplay Trailer",
    "description": "Watch the breakdown of confirmed motorcycles, dirt bikes, and pedal bicycles in Grand Theft Auto VI, detailing custom exhausts and lever clutch physics.",
    "thumbnailUrl": ["https://img.youtube.com/vi/h__WPV2v6W8/maxresdefault.jpg"],
    "uploadDate": "2025-12-05",
    "duration": "PT2M45S",
    "contentUrl": "https://www.youtube.com/watch?v=h__WPV2v6W8",
    "embedUrl": "https://www.youtube.com/embed/h__WPV2v6W8"
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
          <span className={styles.breadCurrent}>{gta6BikesArticle.h1}</span>
        </div>

        <header className={styles.header}>
          <h1 className={styles.title}>{gta6BikesArticle.h1}</h1>
          <div className={styles.meta}>
            <span>By <strong>{gta6BikesArticle.author}</strong></span>
            <span className={styles.metaSep}>•</span>
            <span>Published: {gta6BikesArticle.publishedDate}</span>
          </div>
        </header>

        {/* Share buttons (top) */}
        <ShareButtons isTop={true} url="https://www.gtavispot.com/vehicles/gta-6-bikes/" title={gta6BikesArticle.title} />

        <div className={styles.divider}></div>

        {gta6BikesArticle.featureImage && (
          <div className={styles.featureImageContainer}>
            <Image
              src={gta6BikesArticle.featureImage}
              alt={gta6BikesArticle.featureImageAlt || gta6BikesArticle.focusKeyword || gta6BikesArticle.title}
              width={800}
              height={450}
              sizes="(max-width: 768px) 100vw, 800px"
              className={styles.featureImage}
              priority
            />
          </div>
        )}

        <main className={styles.body}>
          {gta6BikesArticle.content}
        </main>

        <div className={styles.divider} style={{ margin: '48px 0 24px' }}></div>

        {/* Share buttons (bottom) */}
        <ShareButtons isTop={false} url="https://www.gtavispot.com/vehicles/gta-6-bikes/" title={gta6BikesArticle.title} />
      </div>
    </div>
  );
}
