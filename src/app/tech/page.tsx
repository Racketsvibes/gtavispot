import Link from 'next/link';
import { getAllTechArticles } from '@/data/techContent';
import { getBreadcrumbsSchema } from '@/lib/schema';
import styles from './page.module.css';

export const metadata = {
  title: 'GTA 6 Tech, Specs & Requirements | GTA Vi Spot',
  description: 'Get the latest GTA 6 system requirements, download sizes, supported platforms, and technical engine updates ahead of the November 19, 2026 launch.',
  alternates: {
    canonical: 'https://gtavispot.com/tech/',
  },
};

export default function TechHubPage() {
  const articles = getAllTechArticles();

  // Pinned article is the 'how-big-will-gta-6-be' page
  const pinnedArticle = articles.find(a => a.slug === 'how-big-will-gta-6-be');
  const otherArticles = articles.filter(a => a.slug !== 'how-big-will-gta-6-be');

  return (
    <div className={styles.wrapper}>
      {/* Breadcrumbs Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbsSchema([
              { name: 'Home', url: 'https://gtavispot.com' },
              { name: 'Tech Hub', url: 'https://gtavispot.com/tech/' }
            ])
          )
        }}
      />
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <span className={styles.categoryLabel}>TECH & PLATFORM</span>
          <h1 className={styles.title}>
            GTA 6 <span className="text-gradient">Tech & Platform</span>
          </h1>
          <p className={styles.desc}>
            Platform details, hardware specs, storage requirements, and graphics optimization guides.
            Everything you need to prepare your setup for the November 19, 2026 launch.
          </p>
        </div>
      </header>

      {/* Pinned Tech News Section */}
      {pinnedArticle && (
        <section className={`container ${styles.pinnedSection}`}>
          <div className={styles.pinnedCard}>
            <div className={styles.pinnedBadge}>FEATURED TECH ANALYSIS</div>
            <h2 className={styles.pinnedTitle}>
              <Link href={`/tech/${pinnedArticle.slug}/`} className={styles.pinnedLink}>
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
            <Link href={`/tech/${pinnedArticle.slug}/`} className={styles.pinnedCta}>
              Read Tech Guide
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
                  <span className={styles.cardBadge}>GTA 6 CONFIRMED</span>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>
                    <Link href={`/tech/${slug}/`} className={styles.cardLink}>
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
