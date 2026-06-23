import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getMapArticleBySlug, getAllMapArticleSlugs } from '@/data/mapContent';
import ShareButtons from '@/components/ShareButtons';
import {
  getBreadcrumbsSchema,
  getArticleSchema,
  getFAQSchema,
  getFaqsFromFile
} from '@/lib/schema';
import styles from './page.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllMapArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getMapArticleBySlug(slug);
  if (!article) return {};

  const imageUrl = article.featureImage 
    ? `https://gtavispot.com${article.featureImage}` 
    : 'https://gtavispot.com/images/desktop.webp';

  return {
    title: `${article.title} | GTA Vi Spot`,
    description: article.metaDescription,
    alternates: {
      canonical: `https://gtavispot.com/map/${slug}/`,
    },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: `https://gtavispot.com/map/${slug}/`,
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

export default async function MapArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getMapArticleBySlug(slug);
  if (!article) notFound();

  const imageUrl = article.featureImage 
    ? `https://gtavispot.com${article.featureImage}` 
    : 'https://gtavispot.com/images/desktop.webp';

  // Generate Schemas
  const breadcrumbs = getBreadcrumbsSchema([
    { name: 'Home', url: 'https://gtavispot.com' },
    { name: 'Map Hub', url: 'https://gtavispot.com/map/' },
    { name: article.h1, url: `https://gtavispot.com/map/${slug}/` }
  ]);

  const articleSchema = getArticleSchema({
    headline: article.h1,
    description: article.metaDescription,
    imageUrl,
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate,
    authorName: article.author,
    url: `https://gtavispot.com/map/${slug}/`
  });

  const faqs = getFaqsFromFile(slug, 'map');
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
        <Link href="/map/" className={styles.breadLink}>Map Hub</Link>
        <span className={styles.breadSep}>/</span>
        <span className={styles.breadCurrent}>{article.h1}</span>
      </div>

      <article className={`container ${styles.article}`}>
        <header className={styles.header}>
          <span className={styles.categoryBadge}>GTA 6 MAP & WORLD</span>
          <h1 className={styles.title}>{article.h1}</h1>
          <div className={styles.meta}>
            <span className={styles.metaItem}>By <strong>{article.author}</strong></span>
            <span className={styles.metaSep}>•</span>
            <span className={styles.metaItem}>Published: {article.publishedDate}</span>
            <span className={styles.metaSep}>•</span>
            <span className={styles.metaItem}>Last Updated: {article.modifiedDate}</span>
          </div>
        </header>

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

        <div className={styles.body}>
          {article.content}
        </div>

        <ShareButtons url={`https://gtavispot.com/map/${slug}/`} title={article.title} />
      </article>
    </div>
  );
}
