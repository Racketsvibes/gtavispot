import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getWorldArticleBySlug, getAllWorldArticleSlugs } from '@/data/worldContent';
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
import styles from '../../news/[slug]/page.module.css'; // Reusing news article page styling for uniformity

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllWorldArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getWorldArticleBySlug(slug);
  if (!article) return {};

  const imageUrl = article.featureImage 
    ? `https://www.gtavispot.com${article.featureImage}` 
    : 'https://www.gtavispot.com/images/desktop.webp';

  return {
    title: getSEOTitle(article.title),
    description: article.metaDescription,
    alternates: {
      canonical: `https://www.gtavispot.com/world/${slug}/`,
    },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: `https://www.gtavispot.com/world/${slug}/`,
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

export default async function WorldArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getWorldArticleBySlug(slug);
  if (!article) notFound();

  const imageUrl = article.featureImage 
    ? `https://www.gtavispot.com${article.featureImage}` 
    : 'https://www.gtavispot.com/images/desktop.webp';

  // Generate Schemas
  const breadcrumbs = getBreadcrumbsSchema([
    { name: 'Home', url: 'https://www.gtavispot.com' },
    { name: 'World & Activities Hub', url: 'https://www.gtavispot.com/world/' },
    { name: article.h1, url: `https://www.gtavispot.com/world/${slug}/` }
  ]);

  const articleSchema = getArticleSchema({
    headline: article.h1,
    description: article.metaDescription,
    imageUrl,
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate,
    authorName: article.author,
    url: `https://www.gtavispot.com/world/${slug}/`
  });

  const faqs = getFaqsFromFile(slug, 'world');
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
        <Link href="/" className={styles.breadLink}>Home</Link>
        <span className={styles.breadSep}>/</span>
        <Link href="/world/" className={styles.breadLink}>World & Activities</Link>
        <span className={styles.breadSep}>/</span>
        <span className={styles.breadCurrent}>{article.h1}</span>
      </div>

      <div className="container flex justify-center gap-8 relative">
        <article className={`container ${styles.article}`}>
          <header className={styles.header}>
            <span className={styles.categoryBadge}>GTA 6 WORLD & ECOSYSTEM</span>
            <h1 className={styles.title}>{article.h1}</h1>
            <div className={styles.meta}>
              <span className={styles.metaItem}>By <strong>{article.author}</strong></span>
              <span className={styles.metaSep}>•</span>
              <span className={styles.metaItem}>Published: {article.publishedDate}</span>
              <span className={styles.metaSep}>•</span>
              <span className={styles.metaItem}>Last Updated: {article.modifiedDate}</span>
            </div>
          </header>

          <ShareButtons url={`https://www.gtavispot.com/world/${slug}/`} title={article.title} isTop />

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

          <ArticleBodyWithAds className={styles.body}>
            {article.content}
          </ArticleBodyWithAds>

          {/* Responsive Leaderboard Slot (728x90 Desktop / 320x50 Mobile) */}
          <ResponsiveLeaderboardAd />

          <ShareButtons url={`https://www.gtavispot.com/world/${slug}/`} title={article.title} />

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

        {/* Desktop Sticky Sidebar Banner (160x600) */}
        <SidebarAd160x600 />
      </div>
      <div className="container">
        <RelatedPosts category="world" currentSlug={slug} />
      </div>
    </div>
  );
}
