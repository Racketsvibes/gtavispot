import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getSpanishArticleBySlug, getAllSpanishArticleSlugs } from '@/data/es/newsContent';
import ShareButtons from '@/components/ShareButtons';
import RelatedPosts from '@/components/RelatedPosts';
import {
  getBreadcrumbsSchema,
  getArticleSchema,
  getFAQSchema,
  getFaqsFromFile,
  getSEOTitle
} from '@/lib/schema';
import styles from './page.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSpanishArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getSpanishArticleBySlug(slug);
  if (!article) return {};

  const imageUrl = article.featureImage 
    ? `https://gtavispot.com${article.featureImage}` 
    : 'https://gtavispot.com/images/desktop.webp';

  const isGameplay = slug === 'gta-6-gameplay';
  const canonicalUrl = isGameplay ? 'https://gtavispot.com/es/gta-6-gameplay/' : `https://gtavispot.com/es/news/${slug}/`;
  const englishUrl = isGameplay ? 'https://gtavispot.com/gta-6-gameplay/' : `https://gtavispot.com/news/${slug}/`;
  const spanishUrl = isGameplay ? 'https://gtavispot.com/es/gta-6-gameplay/' : `https://gtavispot.com/es/news/${slug}/`;

  return {
    title: getSEOTitle(article.title),
    description: article.metaDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': englishUrl,
        'es-es': spanishUrl,
        'x-default': englishUrl,
      }
    },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: canonicalUrl,
      type: 'article',
      locale: 'es_ES',
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

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getSpanishArticleBySlug(slug);
  if (!article) notFound();

  const imageUrl = article.featureImage 
    ? `https://gtavispot.com${article.featureImage}` 
    : 'https://gtavispot.com/images/desktop.webp';

  const isGameplay = slug === 'gta-6-gameplay';
  const canonicalUrl = isGameplay ? 'https://gtavispot.com/es/gta-6-gameplay/' : `https://gtavispot.com/es/news/${slug}/`;

  // Generate Schemas
  const breadcrumbs = getBreadcrumbsSchema([
    { name: 'Inicio', url: 'https://gtavispot.com/es/' },
    { name: 'Noticias', url: 'https://gtavispot.com/es/news/' },
    { name: article.h1, url: canonicalUrl }
  ]);

  const articleSchema = getArticleSchema({
    headline: article.h1,
    description: article.metaDescription,
    imageUrl,
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate,
    authorName: article.author,
    url: canonicalUrl
  });

  const faqs = getFaqsFromFile(slug, 'news');
  const faqSchema = getFAQSchema(faqs);

  // Dynamic Event Schema for GTA 6 Release Date
  const launchEventSchema = slug === 'gta-6-release-date' ? {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Lanzamiento Oficial de Grand Theft Auto VI (GTA 6)",
    "startDate": "2026-11-19T00:00:00+01:00",
    "endDate": "2026-11-19T23:59:59+01:00",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "Lanzamiento Mundial de Software (PlayStation 5 & Xbox Series X|S)",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Global",
        "addressCountry": "ES"
      }
    },
    "image": [
      imageUrl
    ],
    "description": "El estreno mundial oficial y salida al mercado del videojuego GTA 6 por Rockstar Games y Take-Two Interactive.",
    "organizer": {
      "@type": "Organization",
      "name": "Rockstar Games",
      "url": "https://www.rockstargames.com"
    }
  } : null;

  return (
    <div className={styles.wrapper}>
      {/* Schema Markups */}
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
      {launchEventSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(launchEventSchema) }}
        />
      )}

      {/* Breadcrumbs */}
      <div className={`container ${styles.breadcrumbs}`}>
        <Link href="/" className={styles.breadLink}>Inicio</Link>
        <span className={styles.breadSep}>/</span>
        <Link href="/news/" className={styles.breadLink}>Noticias</Link>
        <span className={styles.breadSep}>/</span>
        <span className={styles.breadCurrent}>{article.h1}</span>
      </div>

      <article className={`container ${styles.article}`}>
        <header className={styles.header}>
          <span className={styles.categoryBadge}>GTA 6 NOTICIAS</span>
          <h1 className={styles.title}>{article.h1}</h1>
          <div className={styles.meta}>
            <span className={styles.metaItem}>Por <strong>{article.author}</strong></span>
            <span className={styles.metaSep}>•</span>
            <span className={styles.metaItem}>Publicado: {article.publishedDate}</span>
            <span className={styles.metaSep}>•</span>
            <span className={styles.metaItem}>Actualizado: {article.modifiedDate}</span>
          </div>
        </header>

        <ShareButtons url={`https://gtavispot.com/es/news/${slug}/`} title={article.title} isTop />

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

        <ShareButtons url={`https://gtavispot.com/es/news/${slug}/`} title={article.title} />

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
        <RelatedPosts category="news" currentSlug={slug} />
      </div>
    </div>
  );
}
