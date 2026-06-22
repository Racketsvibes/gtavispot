import Link from 'next/link';
import Image from 'next/image';
import { getStoryArticleBySlug, getAllStoryArticles } from '@/data/storyContent';
import styles from './page.module.css';

export const metadata = {
  title: 'GTA 6 Story & Characters — Full Overview Guide | GTA Vi Spot',
  description: 'Complete GTA 6 story guide — meet Lucia and Jason, explore the Bonnie-and-Clyde-inspired narrative, all missions and everything confirmed about the plot.',
  alternates: {
    canonical: 'https://gtavispot.com/story/',
  },
};

export default function StoryHubPage() {
  const overviewArticle = getStoryArticleBySlug('story-overview');
  const allArticles = getAllStoryArticles();
  
  // Filter out the overview article to list other pages as cards
  const subPages = allArticles.filter(a => a.slug !== 'story-overview');

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <span className={styles.categoryLabel}>STORY & CHARACTERS</span>
          <h1 className={styles.title}>
            GTA 6 <span className="text-gradient">Story Guide</span>
          </h1>
          <p className={styles.desc}>
            Meet Lucia and Jason, explore Leonida's modern criminal underworld, and prepare for Rockstar Games' Bonnie-and-Clyde-inspired narrative campaign.
          </p>
        </div>
      </header>

      {/* Main Overview Article Body */}
      {overviewArticle && (
        <section className={`container ${styles.overviewSection}`}>
          <article className={styles.article}>
            {overviewArticle.featureImage && (
              <div className={styles.featureImageContainer}>
                <Image 
                  src={overviewArticle.featureImage} 
                  alt={overviewArticle.focusKeyword || overviewArticle.title} 
                  width={1200}
                  height={630}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  className={styles.featureImage} 
                />
              </div>
            )}
            <div className={styles.body}>
              {overviewArticle.content}
            </div>
          </article>
        </section>
      )}

      {/* Grid of Other Story Pages */}
      <section className={`container ${styles.subPagesSection}`}>
        <h2 className={styles.sectionTitle}>Character Guides & Walkthroughs</h2>
        <div className={styles.grid}>
          {subPages.map(({ slug, article }) => (
            <article key={slug} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardBadge}>STORY GUIDE</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  <Link href={`/story/${slug}/`} className={styles.cardLink}>
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
