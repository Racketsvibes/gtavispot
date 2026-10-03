import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImageLightbox from '@/components/ui/ImageLightbox';
import { ArticleData } from '../newsContent';
import styles from '../../app/news/[slug]/page.module.css';

const NewsCTAButton = ({ href, children, isExternal }: { href: string; children: React.ReactNode; isExternal?: boolean }) => {
  return (
    <div style={{ margin: '1.25rem 0 1.75rem 0' }}>
      <a
        href={href}
        className="news-cta-btn"
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        <span>{children}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
    </div>
  );
};

const coverTimeline = [
  {
    year: '2002',
    game: 'Vice City',
    note: "Game Informer's archive starts here: issue 113. Tommy Vercetti's neon 1980s Vice City gave the series its most stylish cover era.",
    images: [
      { src: '/images/news/archive-113-gta-voice-city.webp', alt: 'Game Informer 2002 Vice City cover, issue 113' },
    ],
  },
  {
    year: '2004',
    game: 'San Andreas',
    note: 'Two covers (issues 134a and 134b) for CJ\'s story across the state of San Andreas, the biggest GTA world of its generation.',
    images: [
      { src: '/images/news/archive-134a-gta-sanandreaz.webp', alt: 'Game Informer 2004 San Andreas cover A, issue 134a' },
      { src: '/images/news/archive-134b-gta-sanadreaz.webp', alt: 'Game Informer 2004 San Andreas cover B, issue 134b' },
    ],
  },
  {
    year: '2007',
    game: 'GTA IV',
    note: 'Issue 169. Niko Bellic\'s Liberty City marked the series\' high-definition debut and its most grounded story yet.',
    images: [
      { src: '/images/news/archive-169-gta-iv.webp', alt: 'Game Informer 2007 GTA IV cover, issue 169' },
    ],
  },
  {
    year: '2012',
    game: 'GTA V',
    note: 'Issue 236. Three protagonists, Los Santos, and the cover story for what became one of the best-selling games ever.',
    images: [
      { src: '/images/news/archive-236-front-gta-5.webp', alt: 'Game Informer 2012 GTA V cover, issue 236' },
    ],
  },
  {
    year: '2026',
    game: 'GTA VI',
    note: 'The new collectible issue. Jason and Lucia return to Vice City, now part of the state of Leonida, on the eve of launch.',
    images: [
      { src: '/images/news/game-informer-GTA-6-Cover-issue.webp', alt: 'Game Informer GTA VI cover issue, 2026' },
    ],
    highlight: true,
  },
];

export const gta6GameInformerCoverStory: ArticleData = {
  title: 'Game Informer GTA 6 Cover Story: 14-Page Exclusive, New Details & Cover Timeline',
  metaDescription: "Game Informer's GTA 6 cover story is a 14-page exclusive with Rockstar interviews and new screenshots. See the biggest reveals plus 20+ years of GTA covers timeline.",
  focusKeyword: 'gta 6 game informer',
  h1: 'Game Informer GTA 6 Cover Story: 14-Page Exclusive, New Details & Cover Timeline',
  publishedDate: 'October 3, 2026',
  modifiedDate: 'October 3, 2026',
  author: 'Qamar Farooq',
  featureImage: '/images/news/game-informer-GTA-6-Cover-issue.webp',
  featureImageAlt: 'Game Informer GTA VI cover issue, 2026 collectible edition',
  content: (
    <ImageLightbox>
      <style dangerouslySetInnerHTML={{__html: `
        .news-cta-btn {
          display: inline-flex;
          align-items: center;
          background: #2563eb;
          color: #fff;
          padding: 0.8rem 1.4rem;
          border-radius: 8px;
          font-weight: 700;
          text-decoration: none;
        }
        .news-cta-btn:hover { background: #1d4ed8; color: #fff; }
        .gi-timeline { display: flex; gap: 1rem; overflow-x: auto; padding: 0.5rem 0 1.25rem 0; scroll-snap-type: x mandatory; }
        .gi-timeline-card { flex: 0 0 240px; scroll-snap-align: start; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.1rem; background: #f8fafc; }
        .gi-timeline-card.gi-highlight { border: 2px solid #2563eb; background: #eff6ff; }
        .gi-timeline-year { font-size: 1.6rem; font-weight: 800; color: #2563eb; margin: 0; }
        .gi-timeline-game { font-size: 1.05rem; font-weight: 700; margin: 0.25rem 0 0.5rem 0; }
        .gi-timeline-note { font-size: 0.9rem; color: #475569; margin: 0.5rem 0 0 0; line-height: 1.55; }
        .gi-timeline-img { border-radius: 8px; overflow: hidden; margin-bottom: 0.25rem; }
      `}} />

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Summary</span>
        <p>
          <strong>Game Informer has published a 14-page GTA VI cover story</strong> in its November issue, built on exclusive interviews with Rockstar developers and more than a dozen never-before-seen screenshots. 
          It is the largest single official information drop since the extended look, covering the map, wildlife, weather, activities, and the Jason and Lucia relationship system. 
          The issue is available as a collectible print edition and digitally, and Game Informer marked the occasion with a timeline of every GTA cover since 2002, which we recreate below.
        </p>
      </div>

      <NewsCTAButton href="https://gameinformer.com/GTAVICoverStory" isExternal>
        View the official Game Informer cover story page
      </NewsCTAButton>

      <h2>What the 14-Page Cover Story Includes</h2>
      <p>
        The cover story is built around on-the-record interviews with Rockstar developers, including Rupert Humphries (senior vice president of narrative), Aaron Garbut (Rockstar North), and Paul MacPherson (senior vice president of environment art). 
        Alongside the interviews came 12+ new screenshots, with four more showing new outfits surfacing shortly after. 
        Here are the details that matter most for players:
      </p>
      <ul>
        <li><strong>Map scale and regions:</strong> Leonida is roughly twice the size of GTA V's map, spread across six regions: Vice City, Ambrosia, Grassrivers, Leonida Keys, Port Gellhorn, and Mount Kalaga National Park. The main story will not take you everywhere, so post-story exploration has a real purpose. Read more in our <Link href="/map/size/">GTA 6 map size guide</Link>.</li>
        <li><strong>Wildlife:</strong> More than 170 animal species, including a "legendary" category. See our <Link href="/world/gta-6-animals/">GTA 6 animals guide</Link> for the full list so far.</li>
        <li><strong>Dynamic weather:</strong> Localized weather systems, including hurricanes. Our <Link href="/world/gta-6-weather/">GTA 6 weather guide</Link> breaks down what is confirmed.</li>
        <li><strong>Character detail:</strong> Tanning and sunburn, plus localized weight gain, track how Jason and Lucia live in the world.</li>
        <li><strong>Activities:</strong> Hunting, fishing, scuba diving, kayaking, mini golf, billiards, and even a zoo visit are confirmed side activities.</li>
        <li><strong>World systems:</strong> A biker gang called the First Chapter, the Snapmatic social media app, RydeMe fast travel, and weapon customization.</li>
        <li><strong>Relationship choice:</strong> The Jason and Lucia relationship can develop as romantic <em>or</em> platonic based on player choice.</li>
      </ul>

      <div className="gi-timeline-img" style={{ margin: '1.5rem 0' }}>
        <Image
          src="/images/GTAVI_Artwork_images/Jason_and_Lucia_01/Jason_and_Lucia_01_landscape.webp"
          alt="Jason and Lucia artwork from GTA VI"
          width={1920}
          height={1080}
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
        />
      </div>

      <h2>20+ Years of GTA Covers: The Timeline</h2>
      <p>
        To mark the new issue, Game Informer's official cover story page walks through its GTA cover history, from 2002's Vice City to the 2026 GTA VI collectible. 
        Here is that timeline, recreated for GTAVISpot readers. Scroll sideways to walk through two decades of covers:
      </p>

      <div className="gi-timeline">
        {coverTimeline.map((entry) => (
          <div key={entry.year} className={`gi-timeline-card${entry.highlight ? ' gi-highlight' : ''}`}>
            {entry.images.map((img) => (
              <div key={img.src} className="gi-timeline-img">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={800}
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
              </div>
            ))}
            <p className="gi-timeline-year">{entry.year}</p>
            <p className="gi-timeline-game">{entry.game}</p>
            <p className="gi-timeline-note">{entry.note}</p>
          </div>
        ))}
      </div>
      <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
        Timeline source: Game Informer's official GTA VI cover story page. Cover scans courtesy of Game Informer.
      </p>

      <h2>How to Read the GTA VI Cover Story</h2>
      <p>
        Game Informer is offering the issue three ways. The <strong>collector's print issue</strong> ships to your mailbox, with international shipping available. 
        <strong>Digital access</strong> unlocks the 14-page exclusive instantly, along with the magazine's full archive going back to 1991. 
        The story is also readable <strong>free in the Game Informer app</strong> on iOS and Android. 
        With launch set for <Link href="/news/gta-6-release-date/">November 19, 2026</Link>, the timing puts the deepest official detail drop of the year right in the final stretch before release.
      </p>

      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>What is in the Game Informer GTA 6 cover story?</h3>
          <p className={styles.faqAnswer}>
            A 14-page exclusive with on-the-record Rockstar developer interviews and 12+ new screenshots, covering the Leonida map, 170+ animal species, dynamic weather with hurricanes, side activities, and the Jason and Lucia relationship system.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>How can I read the GTA 6 Game Informer issue?</h3>
          <p className={styles.faqAnswer}>
            Three ways: the collector's print issue delivered to your mailbox (ships internationally), instant digital access with the full archive since 1991, or free in the Game Informer app on iOS and Android.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Which GTA games got Game Informer covers before GTA VI?</h3>
          <p className={styles.faqAnswer}>
            Per Game Informer's archive: Vice City (2002), San Andreas with two covers (2004), GTA IV (2007), and GTA V (2012). GTA VI's 2026 issue continues a cover tradition spanning more than two decades.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Is the Game Informer GTA 6 information official?</h3>
          <p className={styles.faqAnswer}>
            Yes. The details come directly from Rockstar developers speaking on the record to Game Informer, which makes this one of the most reliable GTA VI information sources available before launch.
          </p>
        </div>
      </section>
    </ImageLightbox>
  ),
};
