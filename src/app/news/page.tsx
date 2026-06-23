import Link from 'next/link';
import { getAllArticles } from '@/data/newsContent';
import { getBreadcrumbsSchema } from '@/lib/schema';
import styles from './page.module.css';

export const metadata = {
  title: 'GTA 6 News — Latest Updates, Trailers & Announcements | GTA Vi Spot',
  description: 'Latest GTA 6 news, trailers, leaks and announcements. Updated daily as Rockstar confirms new details ahead of the November 19, 2026 launch.',
  alternates: {
    canonical: 'https://gtavispot.com/news/',
  },
};

export default function NewsHubPage() {
  const articles = getAllArticles();

  // Pinned article is the Release Date page
  const pinnedArticle = articles.find(a => a.slug === 'gta-6-release-date');
  const otherArticles = articles.filter(a => a.slug !== 'gta-6-release-date');

  return (
    <div className={styles.wrapper}>
      {/* Breadcrumbs Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbsSchema([
              { name: 'Home', url: 'https://gtavispot.com' },
              { name: 'News Hub', url: 'https://gtavispot.com/news/' }
            ])
          )
        }}
      />
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <span className={styles.categoryLabel}>LATEST UPDATES</span>
          <h1 className={styles.title}>
            GTA 6 <span className="text-gradient">News Hub</span>
          </h1>
          <p className={styles.desc}>
            Breaking news, trailers, leaks, and developer announcements from Rockstar Games. 
            Updated daily as we count down to the November 19, 2026 launch.
          </p>
        </div>
      </header>

      {/* Pinned Breaking News Section */}
      {pinnedArticle && (
        <section className={`container ${styles.pinnedSection}`}>
          <div className={styles.pinnedCard}>
            <div className={styles.pinnedBadge}>PINNED BREAKING NEWS</div>
            <h2 className={styles.pinnedTitle}>
              <Link href={`/news/${pinnedArticle.slug}/`} className={styles.pinnedLink}>
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
            <Link href={`/news/${pinnedArticle.slug}/`} className={styles.pinnedCta}>
              Read Breaking Update
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </section>
      )}

      {/* Grid of Other Articles */}
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
                  <Link href={`/news/${slug}/`} className={styles.cardLink}>
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
