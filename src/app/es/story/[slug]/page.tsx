import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getSpanishStoryArticleBySlug, getAllSpanishStoryArticleSlugs } from '@/data/es/storyContent';
import ShareButtons from '@/components/ShareButtons';
import RelatedPosts from '@/components/RelatedPosts';
import {
  getBreadcrumbsSchema,
  getArticleSchema,
  getFAQSchema,
  getFaqsFromFile,
  getSEOTitle
} from '@/lib/schema';
import { ArticleBodyWithAds, ResponsiveLeaderboardAd, SidebarAd160x600 } from '@/components/ads';
import styles from '@/app/story/[slug]/page.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSpanishStoryArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getSpanishStoryArticleBySlug(slug);
  if (!article) return {};

  const imageUrl = article.featureImage 
    ? `https://www.gtavispot.com${article.featureImage}` 
    : 'https://www.gtavispot.com/images/desktop.webp';

  const canonicalUrl = `https://www.gtavispot.com/es/story/${slug}/`;
  const englishUrl = `https://www.gtavispot.com/story/${slug}/`;
  const spanishUrl = `https://www.gtavispot.com/es/story/${slug}/`;

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

export default async function SpanishStoryArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getSpanishStoryArticleBySlug(slug);
  if (!article) notFound();

  const imageUrl = article.featureImage 
    ? `https://www.gtavispot.com${article.featureImage}` 
    : 'https://www.gtavispot.com/images/desktop.webp';

  const canonicalUrl = `https://www.gtavispot.com/es/story/${slug}/`;

  // Generate Schemas
  const breadcrumbs = getBreadcrumbsSchema([
    { name: 'Inicio', url: 'https://www.gtavispot.com/es/' },
    { name: 'Historia', url: 'https://www.gtavispot.com/story/' },
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

  const faqs = getFaqsFromFile(slug, 'story');
  const faqSchema = getFAQSchema(faqs);

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

      {/* Breadcrumbs */}
      <div className={`container ${styles.breadcrumbs}`}>
        <Link href="/" className={styles.breadLink}>Inicio</Link>
        <span className={styles.breadSep}>/</span>
        <Link href="/story/" className={styles.breadLink}>Historia</Link>
        <span className={styles.breadSep}>/</span>
        <span className={styles.breadCurrent}>{article.h1}</span>
      </div>

      <div className="relative w-full">
        <article className={`container ${styles.article}`}>
          <header className={styles.header}>
            <span className={styles.categoryBadge}>GTA 6 HISTORIA Y PERSONAJES</span>
            <h1 className={styles.title}>{article.h1}</h1>
            <div className={styles.meta}>
              <span className={styles.metaItem}>Por <strong>{article.author}</strong></span>
              <span className={styles.metaSep}>•</span>
              <span className={styles.metaItem}>Publicado: {article.publishedDate}</span>
              <span className={styles.metaSep}>•</span>
              <span className={styles.metaItem}>Actualizado: {article.modifiedDate}</span>
            </div>
          </header>

          <ShareButtons url={`https://www.gtavispot.com/es/story/${slug}/`} title={article.title} isTop />

          <div className={styles.divider} />

          {article.featureImage && (
            <div className={styles.featureImageContainer}>
              <Image 
                src={article.featureImage} 
                alt={article.focusKeyword || article.title} 
                width={1200}
                height={630}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                className={styles.featureImage} 
              />
            </div>
          )}

          <ArticleBodyWithAds className={styles.body}>
            {article.content}
          </ArticleBodyWithAds>

          {/* Responsive Leaderboard Slot (728x90 Desktop / 320x50 Mobile) */}
          <ResponsiveLeaderboardAd label="Publicidad" />

          <ShareButtons url={`https://www.gtavispot.com/es/story/${slug}/`} title={article.title} />

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

        {/* Desktop Floating Sidebar Banner (160x600 in right gutter) */}
        <SidebarAd160x600 label="Publicidad" />
      </div>
      <div className="container">
        <RelatedPosts category="story" currentSlug={slug} />
      </div>
    </div>
  );
}
