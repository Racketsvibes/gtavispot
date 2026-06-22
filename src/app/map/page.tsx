import Link from 'next/link';
import { getAllMapArticles } from '@/data/mapContent';
import styles from './page.module.css';

export const metadata = {
  title: 'GTA 6 Map — Full Leonida Interactive Map Guide | GTA Vi Spot',
  description: 'Complete GTA 6 Leonida map guide — all regions, Vice City districts, Grassrivers, Keys and every confirmed location. Interactive map with secrets marked.',
  alternates: {
    canonical: 'https://gtavispot.com/map/',
  },
};

export default function MapHubPage() {
  const articles = getAllMapArticles();

  // Pinned map article is the Map Size page
  const pinnedArticle = articles.find(a => a.slug === 'size');
  const otherArticles = articles.filter(a => a.slug !== 'size');

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <span className={styles.categoryLabel}>WORLD EXPLORATION</span>
          <h1 className={styles.title}>
            GTA 6 <span className="text-gradient">Map Hub</span>
          </h1>
          <p className={styles.desc}>
            Explore the state of Leonida, from the neon-lit beaches of Vice City to the swampy wetlands of Grassrivers. Mapped locations, district guides, secrets, and size comparisons.
          </p>
        </div>
      </header>

      {/* Pinned Feature Map Section */}
      {pinnedArticle && (
        <section className={`container ${styles.pinnedSection}`}>
          <div className={styles.pinnedCard}>
            <div className={styles.pinnedBadge}>FEATURED EXPLORATION GUIDE</div>
            <h2 className={styles.pinnedTitle}>
              <Link href={`/map/${pinnedArticle.slug}/`} className={styles.pinnedLink}>
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
            <Link href={`/map/${pinnedArticle.slug}/`} className={styles.pinnedCta}>
              Explore Map Dimensions
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </section>
      )}

      {/* Grid of Other Map Pages */}
      <section className={`container ${styles.articlesSection}`}>
        <h2 className={styles.sectionTitle}>Explore Regions & Secrets</h2>
        <div className={styles.grid}>
          {otherArticles.map(({ slug, article }) => (
            <article key={slug} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardBadge}>LEONIDA COUNTY</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  <Link href={`/map/${slug}/`} className={styles.cardLink}>
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
    </div>
  );
}
