import React from 'react';
import Link from 'next/link';
import { getAllCompareArticles } from '@/data/compareContent';
import { getBreadcrumbsSchema } from '@/lib/schema';
import styles from '../tech/page.module.css';

export const metadata = {
  title: 'GTA 6 Comparisons & Key Differences | GTA Vi Spot',
  description: 'Explore side-by-side comparisons of GTA 6 vs GTA 5 and other franchise titles. Compare settings, map size, protagonists, pricing, and system requirements.',
  alternates: {
    canonical: 'https://gtavispot.com/compare/',
  },
};

export default function CompareHubPage() {
  const articles = getAllCompareArticles();

  // Pinned article is 'gta-6-vs-gta-5'
  const pinnedArticle = articles.find(a => a.slug === 'gta-6-vs-gta-5');
  const otherArticles = articles.filter(a => a.slug !== 'gta-6-vs-gta-5');

  return (
    <div className={styles.wrapper}>
      {/* Breadcrumbs Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbsSchema([
              { name: 'Home', url: 'https://gtavispot.com' },
              { name: 'Compare', url: 'https://gtavispot.com/compare/' }
            ])
          )
        }}
      />
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <span className={styles.categoryLabel}>GAME COMPARISONS</span>
          <h1 className={styles.title}>
            GTA 6 <span className="text-gradient">Comparisons</span>
          </h1>
          <p className={styles.desc}>
            Side-by-side breakdowns of Grand Theft Auto VI against GTA V, previous franchise landmarks, and competitor titles. Contrast map sizes, game mechanics, and graphics engines.
          </p>
        </div>
      </header>

      {/* Pinned Compare Article Section */}
      {pinnedArticle && (
        <section className={`container ${styles.pinnedSection}`}>
          <div className={styles.pinnedCard}>
            <div className={styles.pinnedBadge}>FEATURED COMPARISON</div>
            <h2 className={styles.pinnedTitle}>
              <Link href={`/compare/${pinnedArticle.slug}/`} className={styles.pinnedLink}>
                {pinnedArticle.article.h1}
              </Link>
            </h2>
            <p className={styles.pinnedDesc}>
              {pinnedArticle.article.metaDescription}
            </p>
            <div className={styles.pinnedMeta}>
              <span>By <strong>{pinnedArticle.article.author}</strong></span>
              <span className={styles.metaSep}>•</span>
              <span>Last Updated: {pinnedArticle.article.modifiedDate}</span>
            </div>
            <Link href={`/compare/${pinnedArticle.slug}/`} className={styles.pinnedCta}>
              Read Comparison Guide
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </section>
      )}

      {/* Grid of Other Articles */}
      {otherArticles.length > 0 && (
        <section className={`container ${styles.articlesSection}`}>
          <h2 className={styles.sectionTitle}>More Articles</h2>
          <div className={styles.grid}>
            {otherArticles.map(({ slug, article }) => (
              <article key={slug} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardBadge}>GTA 6 COMPARISON</span>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>
                    <Link href={`/compare/${slug}/`} className={styles.cardLink}>
                      {article.h1}
                    </Link>
                  </h3>
                  <p className={styles.cardDesc}>
                    {article.metaDescription}
                  </p>
                  <div className={styles.cardMeta}>
                    <span>By {article.author}</span>
                    <span className={styles.metaSep}>•</span>
                    <span>{article.modifiedDate}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
