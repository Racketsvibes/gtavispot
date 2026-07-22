import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { characterApplication } from '@/backend/application/character.application';
import { locationApplication } from '@/backend/application/location.application';
import { vehicleApplication } from '@/backend/application/vehicle.application';
import { weaponApplication } from '@/backend/application/weapon.application';
import { businessApplication } from '@/backend/application/business.application';
import CompareDetailsClient from './CompareDetailsClient';
import { getCompareArticleBySlug, getAllCompareArticleSlugs } from '@/data/compareContent';
import ShareButtons from '@/components/ShareButtons';
import RelatedPosts from '@/components/RelatedPosts';
import {
  getBreadcrumbsSchema,
  getArticleSchema,
  getFAQSchema,
  getFaqsFromFile,
  getSEOTitle
} from '@/lib/schema';
import styles from '../../tech/[slug]/page.module.css';

interface ComparePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCompareArticleSlugs().map((slug) => ({ slug }));
}

async function resolveEntity(slug: string) {
  const char = await characterApplication.characterPage(slug).catch(() => null);
  if (char) return { data: char, type: 'character' };

  const loc = await locationApplication.locationPage(slug).catch(() => null);
  if (loc) return { data: loc, type: 'location' };

  const veh = await vehicleApplication.vehiclePage(slug).catch(() => null);
  if (veh) return { data: veh, type: 'vehicle' };

  const weap = await weaponApplication.weaponPage(slug).catch(() => null);
  if (weap) return { data: weap, type: 'weapon' };

  const bus = await businessApplication.businessPage(slug).catch(() => null);
  if (bus) return { data: bus, type: 'business' };

  return null;
}

export async function generateMetadata({ params }: ComparePageProps): Promise<Metadata> {
  const resolvedParams = await params;

  // 1. Check if static comparison article
  const article = getCompareArticleBySlug(resolvedParams.slug);
  if (article) {
    const imageUrl = article.featureImage 
      ? `https://gtavispot.com${article.featureImage}` 
      : 'https://gtavispot.com/images/desktop.webp';

    return {
      title: getSEOTitle(article.title),
      description: article.metaDescription,
      alternates: {
        canonical: `https://gtavispot.com/compare/${resolvedParams.slug}/`,
      },
      openGraph: {
        title: article.title,
        description: article.metaDescription,
        url: `https://gtavispot.com/compare/${resolvedParams.slug}/`,
        type: 'article',
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: article.focusKeyword || article.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: article.title,
        description: article.metaDescription,
        images: [imageUrl],
      },
    };
  }

  // 2. Dynamic entity comparison
  const parts = resolvedParams.slug.split('-vs-');
  if (parts.length !== 2) return { title: 'Comparison' };

  const [entA, entB] = await Promise.all([
    resolveEntity(parts[0]),
    resolveEntity(parts[1]),
  ]);

  if (!entA || !entB) return { title: 'Comparison' };

  const dataA = entA.data as any;
  const dataB = entB.data as any;
  const nameA = dataA.character?.name || dataA.location?.name || dataA.vehicle?.name || dataA.weapon?.name || dataA.business?.name;
  const nameB = dataB.character?.name || dataB.location?.name || dataB.vehicle?.name || dataB.weapon?.name || dataB.business?.name;

  return {
    title: `${nameA} vs ${nameB} Comparison | GTA VI Spot`,
    description: `Side-by-side comparison between ${nameA} and ${nameB} in GTA VI. Compare descriptions, relations, official trailers, media, and statistics.`,
    alternates: {
      canonical: `https://gtavispot.com/compare/${resolvedParams.slug}/`,
    },
    openGraph: {
      title: `${nameA} vs ${nameB} Comparison | GTA VI Spot`,
      description: `Compare ${nameA} and ${nameB} side-by-side.`,
      url: `https://gtavispot.com/compare/${resolvedParams.slug}/`,
    },
  };
}

export default async function CompareSlugPage({ params }: ComparePageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // 1. Check if static comparison article
  const article = getCompareArticleBySlug(slug);
  if (article) {
    const imageUrl = article.featureImage 
      ? `https://gtavispot.com${article.featureImage}` 
      : 'https://gtavispot.com/images/desktop.webp';

    const breadcrumbs = getBreadcrumbsSchema([
      { name: 'Home', url: 'https://gtavispot.com' },
      { name: 'Compare', url: 'https://gtavispot.com/compare/' },
      { name: article.h1, url: `https://gtavispot.com/compare/${slug}/` }
    ]);

    const articleSchema = getArticleSchema({
      headline: article.h1,
      description: article.metaDescription,
      imageUrl,
      datePublished: article.publishedDate,
      dateModified: article.modifiedDate,
      authorName: article.author,
      url: `https://gtavispot.com/compare/${slug}/`
    });

    const faqs = getFaqsFromFile(slug, 'compare');
    const faqSchema = getFAQSchema(faqs);

    return (
      <div className={styles.wrapper}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}

        <div className={`container ${styles.breadcrumbs}`}>
          <Link href="/" className={styles.breadLink}>Home</Link>
          <span className={styles.breadSep}>/</span>
          <Link href="/compare/" className={styles.breadLink}>Compare</Link>
          <span className={styles.breadSep}>/</span>
          <span className={styles.breadCurrent}>{article.h1}</span>
        </div>

        <article className={`container ${styles.article}`}>
          <header className={styles.header}>
            <span className={styles.categoryBadge}>GTA 6 COMPARISON</span>
            <h1 className={styles.title}>{article.h1}</h1>
            <div className={styles.meta}>
              <span className={styles.metaItem}>By <strong>{article.author}</strong></span>
              <span className={styles.metaSep}>•</span>
              <span className={styles.metaItem}>Published: {article.publishedDate}</span>
              <span className={styles.metaSep}>•</span>
              <span className={styles.metaItem}>Last Updated: {article.modifiedDate}</span>
            </div>
          </header>

          <ShareButtons url={`https://gtavispot.com/compare/${slug}/`} title={article.title} isTop />

          <div className={styles.divider} />

          {article.featureImage && (
            <div className={styles.featureImageContainer}>
              <Image 
                src={article.featureImage} 
                alt={article.featureImageAlt || article.focusKeyword || article.title} 
                width={1200}
                height={630}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                className={styles.featureImage} 
              />
            </div>
          )}

          <div className={styles.body}>
            {article.content}
          </div>

          <ShareButtons url={`https://gtavispot.com/compare/${slug}/`} title={article.title} />

          {article.videoSchema && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "VideoObject",
                  "name": article.videoSchema.name,
                  "description": article.videoSchema.description,
                  "thumbnailUrl": article.videoSchema.thumbnailUrl,
                  "uploadDate": article.videoSchema.uploadDate,
                  "duration": article.videoSchema.duration,
                  "contentUrl": article.videoSchema.contentUrl,
                  "embedUrl": article.videoSchema.embedUrl,
                }),
              }}
            />
          )}
        </article>
        <div className="container">
          <RelatedPosts category="compare" currentSlug={slug} />
        </div>
      </div>
    );
  }

  // 2. Dynamic entity comparison
  const parts = slug.split('-vs-');
  if (parts.length !== 2) notFound();

  const [entA, entB] = await Promise.all([
    resolveEntity(parts[0]),
    resolveEntity(parts[1]),
  ]);

  if (!entA || !entB || entA.type !== entB.type) {
    notFound();
  }

  return (
    <CompareDetailsClient
      entityA={entA.data}
      entityB={entB.data}
      category={entA.type}
    />
  );
}
