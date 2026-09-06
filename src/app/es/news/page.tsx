import Link from 'next/link';
import { getAllSpanishArticles } from '@/data/es/newsContent';
import { getBreadcrumbsSchema } from '@/lib/schema';
import { ResponsiveLeaderboardAd } from '@/components/ads';
import styles from '../../news/page.module.css';

export const metadata = {
  title: 'Noticias de GTA 6: Últimas Novedades y Guías',
  description: 'Lee las últimas noticias de GTA 6, tráileres oficiales, filtraciones de gameplay y comunicados. Actualizado a diario con cobertura de Rockstar Games.',
  alternates: {
    canonical: 'https://www.gtavispot.com/es/news/',
    languages: {
      'en': 'https://www.gtavispot.com/news/',
      'es-es': 'https://www.gtavispot.com/es/news/',
      'x-default': 'https://www.gtavispot.com/news/',
    }
  },
};

export default function SpanishNewsHubPage() {
  const articles = getAllSpanishArticles();

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
              { name: 'Inicio', url: 'https://www.gtavispot.com/es/' },
              { name: 'Portal de Noticias', url: 'https://www.gtavispot.com/es/news/' }
            ])
          )
        }}
      />
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <span className={styles.categoryLabel}>ÚLTIMAS NOVEDADES</span>
          <h1 className={styles.title}>
            GTA 6 <span className="text-gradient">Noticias</span>
          </h1>
          <p className={styles.desc}>
            Noticias de última hora, tráileres, filtraciones y anuncios de desarrollo de Rockstar Games. 
            Actualizado a diario mientras realizamos la cuenta atrás para el lanzamiento el 19 de noviembre de 2026.
          </p>
        </div>
      </header>

      {/* Pinned Breaking News Section */}
      {pinnedArticle && (
        <section className={`container ${styles.pinnedSection}`}>
          <div className={styles.pinnedCard}>
            <div className={styles.pinnedBadge}>NOTICIA DESTACADA</div>
            <h2 className={styles.pinnedTitle}>
              <Link href={`/es/news/${pinnedArticle.slug}/`} className={styles.pinnedLink}>
                {pinnedArticle.article.h1}
              </Link>
            </h2>
            <p className={styles.pinnedDesc}>
              {pinnedArticle.article.metaDescription}
            </p>
            <div className={styles.pinnedMeta}>
              <span>Por <strong>{pinnedArticle.article.author}</strong></span>
              <span className={styles.metaSep}>•</span>
              <span>Actualizado: {pinnedArticle.article.modifiedDate}</span>
            </div>
            <Link href={`/es/news/${pinnedArticle.slug}/`} className={styles.pinnedCta}>
              Leer actualización
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </section>
      )}

      {/* Responsive Leaderboard Slot (728x90 Desktop / 320x50 Mobile) */}
      <div className="container">
        <ResponsiveLeaderboardAd label="Publicidad" />
      </div>

      {/* Grid of Other Articles */}
      <section className={`container ${styles.articlesSection}`}>
        <h2 className={styles.sectionTitle}>Más Artículos</h2>
        <div className={styles.grid}>
          {otherArticles.map(({ slug, article }) => (
            <article key={slug} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardBadge}>GTA 6 CONFIRMADO</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  <Link href={`/es/news/${slug}/`} className={styles.cardLink}>
                    {article.h1}
                  </Link>
                </h3>
                <p className={styles.cardDesc}>
                  {article.metaDescription}
                </p>
                <div className={styles.cardMeta}>
                  <span>Por {article.author}</span>
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
