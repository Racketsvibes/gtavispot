import React from 'react';
import Link from 'next/link';
import { getAllWorldArticles } from '@/data/worldContent';
import { getBreadcrumbsSchema } from '@/lib/schema';
import styles from '../news/page.module.css'; // Reusing news hub page styles to maintain layout consistency

export const metadata = {
  title: 'GTA 6 World & Activities: Leonida Guide',
  description: 'Explore the immersive open-world details of GTA 6. Read comprehensive guides on the Leonida state, ecosystems, interactive activities, and wildlife.',
  alternates: {
    canonical: 'https://gtavispot.com/world/',
  },
};

export default function WorldHubPage() {
  const articles = getAllWorldArticles();

  return (
    <div className={styles.wrapper}>
      {/* Breadcrumbs Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbsSchema([
              { name: 'Home', url: 'https://gtavispot.com' },
              { name: 'World & Activities Hub', url: 'https://gtavispot.com/world/' }
            ])
          )
        }}
      />
      
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <span className={styles.categoryLabel}>WORLD & ACTIVITIES</span>
          <h1 className={styles.title}>
            Leonida <span className="text-gradient">World Guide</span>
          </h1>
          <p className={styles.desc}>
            Immerse yourself in the ecosystems, interactive sandbox events, wildlife behaviors, 
            and outdoor activities across Vice City and the surrounding counties of Leonida.
          </p>
        </div>
      </header>

      {/* Grid of Articles */}
      <section className={`container ${styles.articlesSection}`}>
        <h2 className={styles.sectionTitle}>World Guides</h2>
        <div className={styles.grid}>
          {articles.map(({ slug, article }) => (
            <article key={slug} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardBadge}>GTA 6 ECOSYSTEM</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  <Link href={`/world/${slug}/`} className={styles.cardLink}>
                    {article.h1}
                  </Link>
                </h3>
                <p className={styles.cardDesc}>
                  {article.metaDescription}
                </p>
                <div className={styles.cardMeta}>
                  <span>By {article.author}</span>
                  <span className={styles.metaSep}>•</span>
                  <span>Last Updated: {article.modifiedDate}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
