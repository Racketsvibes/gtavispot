import Link from 'next/link';
import { getAllOnlineArticles } from '@/data/onlineContent';
import { getBreadcrumbsSchema } from '@/lib/schema';
import styles from './page.module.css';

export const metadata = {
  title: 'GTA Online Guides, News & Updates | GTA Vi Spot',
  description: 'Get the latest GTA Online updates, news, guides, and premium membership details for multiplayer gameplay on PlayStation 5, Xbox Series X|S, and PC.',
  alternates: {
    canonical: 'https://gtavispot.com/online/',
  },
};

export default function OnlineHubPage() {
  const articles = getAllOnlineArticles();

  // Pinned article is the 'gta-plus' page
  const pinnedArticle = articles.find(a => a.slug === 'gta-plus');
  const otherArticles = articles.filter(a => a.slug !== 'gta-plus');

  return (
    <div className={styles.wrapper}>
      {/* Breadcrumbs Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbsSchema([
              { name: 'Home', url: 'https://gtavispot.com' },
              { name: 'Online Hub', url: 'https://gtavispot.com/online/' }
            ])
          )
        }}
      />
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <span className={styles.categoryLabel}>GTA ONLINE</span>
          <h1 className={styles.title}>
            GTA Online <span className="text-gradient">Guides & Updates</span>
          </h1>
          <p className={styles.desc}>
            Get the latest guides, expansion breakdowns, patch notes, and subscription benefits.
            Learn everything you need to dominate the streets of Southern San Andreas and beyond.
          </p>
        </div>
      </header>

      {/* Pinned Section */}
      {pinnedArticle && (
        <section className={`container ${styles.pinnedSection}`}>
          <div className={styles.pinnedCard}>
            <div className={styles.pinnedBadge}>FEATURED ARTICLE</div>
            <h2 className={styles.pinnedTitle}>
              <Link href={`/online/${pinnedArticle.slug}/`} className={styles.pinnedLink}>
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
            <Link href={`/online/${pinnedArticle.slug}/`} className={styles.pinnedCta}>
              Read Membership Guide
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
                  <span className={styles.cardBadge}>GTA ONLINE PERKS</span>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>
                    <Link href={`/online/${slug}/`} className={styles.cardLink}>
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
