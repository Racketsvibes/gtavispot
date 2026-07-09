import Link from 'next/link';
import Image from 'next/image';
import { getAllArticles } from '@/data/newsContent';
import { getAllStoryArticles } from '@/data/storyContent';
import { getAllMapArticles } from '@/data/mapContent';
import { getAllTechArticles } from '@/data/techContent';
import { getAllOnlineArticles } from '@/data/onlineContent';
import styles from './RelatedPosts.module.css';

interface RelatedPostsProps {
  category: string;
  currentSlug: string;
}

interface PostInfo {
  slug: string;
  category: string;
  title: string;
  desc: string;
  img: string;
  href: string;
  cta: string;
}

// Curated "Exact Relevancy" mapping for all content pages
const curatedRelations: Record<string, string[]> = {
  // News articles
  'gta-6-release-date': ['gta-6-delay', 'gta-6-november-release', 'gta-6-pc-release-date'],
  'gta-6-delay': ['gta-6-release-date', 'gta-6-november-release', 'gta-6-pre-order'],
  'gta-6-trailer-3': ['gta-6-cover-art', 'gta-6-new-features', 'rockstar-news'],
  'gta-6-leaks': ['gta-6-new-features', 'gta-6-trailer-3', 'rockstar-news'],
  'gta-6-price': ['gta-6-pre-order', 'gta-6-release-date', 'gta-6-november-release'],
  'gta-6-pre-order': ['gta-6-price', 'gta-6-release-date', 'gta-6-november-release'],
  'gta-6-new-features': ['gta-6-trailer-3', 'gta-6-leaks', 'rockstar-news'],
  'gta-6-november-release': ['gta-6-release-date', 'gta-6-delay', 'gta-6-pc-release-date'],
  'gta-6-pc-release-date': ['gta-6-release-date', 'gta-6-delay', 'gta-6-november-release'],
  'gta-6-cover-art': ['gta-6-trailer-3', 'rockstar-news', 'gta-6-pre-order'],
  'rockstar-news': ['gta-6-trailer-3', 'gta-6-new-features', 'gta-6-cover-art'],

  // Story articles
  'gta-6-characters': ['lucia', 'jason', 'jason-and-lucia'],
  'lucia': ['jason', 'lucia-backstory', 'jason-and-lucia'],
  'jason': ['lucia', 'jason-and-lucia', 'voice-actors'],
  'lucia-backstory': ['lucia', 'jason-and-lucia', 'story-overview'],
  'jason-and-lucia': ['lucia', 'jason', 'dual-protagonists'],
  'voice-actors': ['lucia', 'jason', 'story-overview'],
  'missions': ['walkthrough', 'side-missions', 'ending'],
  'walkthrough': ['missions', 'side-missions', 'how-long-to-beat'],
  'side-missions': ['missions', 'walkthrough', 'ending'],
  'ending': ['walkthrough', 'missions', 'how-long-to-beat'],
  'how-long-to-beat': ['walkthrough', 'missions', 'story-overview'],
  'dual-protagonists': ['jason-and-lucia', 'lucia', 'jason'],
  'gta-6-raul-bautista': ['gta-6-characters', 'voice-actors', 'jason-and-lucia'],

  // Map articles
  'vice-city': ['ocean-beach', 'size', 'interiors'],
  'leonida-keys': ['underwater', 'secret-locations', 'size'],
  'grassrivers': ['mount-kalaga', 'secret-locations', 'easter-eggs'],
  'port-gellhorn': ['ambrosia', 'vice-city', 'size'],
  'ambrosia': ['port-gellhorn', 'mount-kalaga', 'secret-locations'],
  'mount-kalaga': ['grassrivers', 'ambrosia', 'secret-locations'],
  'ocean-beach': ['vice-city', 'leonida-keys', 'size'],
  'size': ['vice-city', 'interiors', 'secret-locations'],
  'interiors': ['size', 'secret-locations', 'easter-eggs'],
  'secret-locations': ['underwater', 'easter-eggs', 'interiors'],
  'easter-eggs': ['secret-locations', 'interiors', 'underwater'],
  'underwater': ['secret-locations', 'leonida-keys', 'easter-eggs'],

  // Online articles
  'gta-plus': ['gta-6-pc-release-date', 'gta-6-price', 'gta-6-pre-order'],

  // Special / Hub Pages
  'cheats': ['guides', 'walkthrough', 'gta-6-release-date'],
  'faq': ['guides', 'gta-6-release-date', 'gta-6-characters'],
  'guides': ['cheats', 'walkthrough', 'gta-6-release-date'],
};

export default function RelatedPosts({ category, currentSlug }: RelatedPostsProps) {
  // 1. Gather all posts into a global catalog
  const catalog: PostInfo[] = [];

  // Add News
  getAllArticles().forEach(({ slug, article }) => {
    catalog.push({
      slug,
      category: 'news',
      title: article.h1 || article.title,
      desc: article.metaDescription,
      img: article.featureImage || '/images/desktop.webp',
      href: `/news/${slug}/`,
      cta: 'Read News →',
    });
  });

  // Add Story
  getAllStoryArticles().forEach(({ slug, article }) => {
    catalog.push({
      slug,
      category: 'story',
      title: article.h1 || article.title,
      desc: article.metaDescription,
      img: article.featureImage || '/images/GTAVI_Screenshots/People/Lucia_Caminos/Lucia_Caminos_03.webp',
      href: `/story/${slug}/`,
      cta: 'Read Guide →',
    });
  });

  // Add Map
  getAllMapArticles().forEach(({ slug, article }) => {
    catalog.push({
      slug,
      category: 'map',
      title: article.h1 || article.title,
      desc: article.metaDescription,
      img: article.featureImage || '/images/GTA_6_MAp.webp',
      href: `/map/${slug}/`,
      cta: 'Explore Map →',
    });
  });

  // Add Tech
  getAllTechArticles().forEach(({ slug, article }) => {
    catalog.push({
      slug,
      category: 'tech',
      title: article.h1 || article.title,
      desc: article.metaDescription,
      img: article.featureImage || '/images/desktop.webp',
      href: `/tech/${slug}/`,
      cta: 'Read Tech Spec →',
    });
  });

  // Add Online
  getAllOnlineArticles().forEach(({ slug, article }) => {
    catalog.push({
      slug,
      category: 'online',
      title: article.h1 || article.title,
      desc: article.metaDescription,
      img: article.featureImage || '/images/desktop.webp',
      href: `/online/${slug}/`,
      cta: 'Read Guide →',
    });
  });

  // Add Cheats Hub
  catalog.push({
    slug: 'cheats',
    category: 'cheats',
    title: 'GTA 6 Cheat Codes Hub',
    desc: 'Browse expected cell phone dials, controller inputs, and PC codes.',
    img: '/images/gta-6-cheats-feature.webp',
    href: '/cheats/',
    cta: 'Browse Cheats →',
  });

  // Add FAQ Hub
  catalog.push({
    slug: 'faq',
    category: 'faq',
    title: 'GTA 6 FAQ Hub',
    desc: 'Direct, verified answers to the most common questions about GTA 6.',
    img: '/images/desktop.webp',
    href: '/faq/',
    cta: 'View FAQ Hub →',
  });

  // Add Guides Hub
  catalog.push({
    slug: 'guides',
    category: 'guides',
    title: 'GTA 6 Ultimate Guide Hub',
    desc: 'Prepare for launch day with confirmed features, protagonist skills, and map layouts.',
    img: '/images/gta-6-guide-feature.webp',
    href: '/guides/',
    cta: 'View Guide Hub →',
  });

  // 2. Select related posts based on currentSlug
  let related: PostInfo[] = [];

  // Check if we have curated relations
  const relatedSlugs = curatedRelations[currentSlug];
  if (relatedSlugs) {
    related = relatedSlugs
      .map((slug) => catalog.find((post) => post.slug === slug))
      .filter((post): post is PostInfo => !!post);
  }

  // Fallback if we don't have enough posts resolved
  if (related.length < 3) {
    // Try to fill with other posts from the same category (excluding current)
    const sameCategoryCandidates = catalog.filter(
      (post) => post.category === category && post.slug !== currentSlug && !related.some(r => r.slug === post.slug)
    );
    related = [...related, ...sameCategoryCandidates].slice(0, 3);
  }

  // Final fallback: fill with generic hub pages if still less than 3
  if (related.length < 3) {
    const globalHubs = catalog.filter(
      (post) => post.slug !== currentSlug && post.slug !== 'faq' && !related.some(r => r.slug === post.slug)
    );
    related = [...related, ...globalHubs].slice(0, 3);
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Related Guides & Posts</h2>
      <div className={styles.grid}>
        {related.map((post) => (
          <div key={post.href} className={styles.card}>
            <div className={styles.imgWrap}>
              <Image
                src={post.img}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.body}>
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.desc}>{post.desc}</p>
              <Link href={post.href} className={styles.cta}>
                {post.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
