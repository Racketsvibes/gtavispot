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

export const rockstarNextGameAfterGta6: ArticleData = {
  title: "Rockstar Says Next Game Won't Take as Long as GTA 6",
  metaDescription: 'Rockstar says its next game after GTA 6 will not take as long. Phil Hooker told Bloomberg the engine, tools and 4,711-strong team will speed up future games.',
  focusKeyword: 'rockstar next game after gta 6',
  h1: "Rockstar Says Its Next Game Won't Take as Long as GTA 6",
  publishedDate: 'October 15, 2026',
  modifiedDate: 'October 15, 2026',
  author: 'Editorial Staff',
  featureImage: '/images/news/rockstar-next-game-after-gta-6-featured.webp',
  featureImageAlt: 'Game developers reviewing a neon Vice City style city skyline on a large studio screen, photorealistic editorial photo',
  content: (
    <ImageLightbox>
      <style dangerouslySetInnerHTML={{__html: `
        .news-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff !important;
          background: linear-gradient(135deg, #3b1578, #d6246e);
          border-radius: 24px;
          text-decoration: none !important;
          box-shadow: 0 3px 8px rgba(214, 36, 110, 0.25);
          transition: all 0.2s ease;
          font-family: var(--font-ui), "Barlow Condensed", sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          border: 1px solid transparent;
        }
        .news-cta-btn:hover,
        .news-cta-btn:focus,
        .news-cta-btn:active {
          background: linear-gradient(135deg, #2d1160, #b91e5c);
          box-shadow: 0 5px 14px rgba(214, 36, 110, 0.35);
          transform: translateY(-1px);
        }
        .fw-flag { display: inline-block; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; padding: 2px 10px; border-radius: 20px; margin-bottom: 0.5rem; }
        .fw-flag.confirmed { background: #dcfce7; color: #166534; }
        .fw-flag.reported { background: #fef3c7; color: #92400e; }
        .fw-quote { border-left: 3px solid #d6246e; padding: 0.25rem 0 0.25rem 1rem; margin: 1rem 0; font-style: italic; color: #334155; }
        .fw-quote cite { display: block; margin-top: 0.4rem; font-style: normal; font-size: 0.85rem; color: #64748b; }
        .img-credit { font-size: 0.8rem; color: #64748b; margin-top: 0.35rem; margin-bottom: 1.25rem; }
      `}} />

      <p>
        <span className="fw-flag confirmed">Confirmed</span> Rockstar Games says its next game after GTA 6 should not take nearly as long to develop. In on-the-record interviews with Bloomberg, the studio's head of development Phil Hooker explained that the engine, tools and team built during GTA 6's production will let Rockstar make future games faster, instead of rebuilding its technology from scratch each time.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Answer: Rockstar's next game</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>What Rockstar said:</strong> head of development Phil Hooker told Bloomberg the engine, tools and team built for GTA 6 will allow the studio to develop its next game more quickly.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>The plan:</strong> build on top of the existing technology, expanding outward rather than ripping it apart, so the studio avoids another 8+ year wait between major releases.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Studio growth:</strong> Bloomberg reports Rockstar grew from 2,441 employees in 2018 to 4,711 across 12 offices by August 2026 while making GTA 6.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>What is NOT confirmed:</strong> Rockstar has not announced what its next game is, and this is not a promise that the next GTA will arrive quickly.</span>
          </li>
        </ul>
      </div>

      <h2>Key takeaways</h2>
      <ul>
        <li>Phil Hooker, Rockstar's head of development, spoke on the record to Bloomberg about the studio's future after GTA 6.</li>
        <li>Hooker said the foundations built during GTA 6's production, the engine, tools and the expanded team, will let Rockstar build future games faster.</li>
        <li>Artist Aaron Garbut added that the studio fundamentally rebuilt its tech on this project and now plans to keep and extend it rather than start over.</li>
        <li>Bloomberg reports staff numbers rose from 2,441 in 2018 to 4,711 by August 2026, including a Los Angeles studio focused on NPCs.</li>
        <li>There is precedent for Rockstar moving fast on existing tech: Vice City followed GTA 3 in under a year.</li>
        <li>None of this is a release date. Rockstar has not announced its next game, and the comments do not confirm a shorter wait for the next GTA specifically.</li>
      </ul>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/rockstar-next-game-after-gta-6-featured.webp"
          alt="Game developers reviewing a neon Vice City style city skyline on a large studio screen, photorealistic editorial photo"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 840px"
          className={styles.featureImage}
        />
      </div>
      <p className="img-credit">Image: AI-generated editorial photo for gtavispot.com</p>

      <h2>What did Rockstar actually say about its next game?</h2>
      <p>
        <span className="fw-flag confirmed">Confirmed</span> The comments come from Bloomberg's making-of feature on GTA 6, reported by Jason Schreier. Phil Hooker, who leads development at Rockstar, explained that the studio spent more than eight years building not just the game but the production foundation behind it. That foundation, the engine, the internal tools and the people, is what the studio plans to carry forward.
      </p>
      <div className="fw-quote">
        "The engine, the tools, and the team we've built during this project will allow us to do things more quickly."
        <cite>Phil Hooker, Rockstar head of development, to Bloomberg</cite>
      </div>
      <p>
        Hooker added that the studio now wants to focus on expanding what it has already created instead of continually rebuilding its technology. Artist Aaron Garbut put it more bluntly: the studio fundamentally changed a lot of its tech on this project, but now that work is done, and they are not going to rip it apart.
      </p>
      <p>
        None of this should be read as an announcement. Rockstar has not named its next game, and the comments do not promise that the next Grand Theft Auto will arrive on any particular schedule. As GameSpot noted in its coverage, they say the systems built for GTA 6 should let Rockstar spend less time solving technical problems the next time around.
      </p>

      <NewsCTAButton href="/news/gta-6-release-date/">GTA 6 release date: everything confirmed for November 19</NewsCTAButton>

      <h2>Why did GTA 6 take so long to develop?</h2>
      <p>
        <span className="fw-flag reported">Reported</span> Bloomberg's account traces the timeline back to around 2015, when creative lead Rob Nelson and other senior staff took a research trip to Miami. The project was code-named Project Americas, because it was first imagined across North and South America before being scoped down to Miami and its surroundings, now known as the state of Leonida.
      </p>
      <p>
        Full development did not begin in earnest until around 2019. By the end of that year, the studio had the skeleton of a Bonnie and Clyde-inspired story about two criminals, Jason Duval and Lucia Caminos. In between, much of Rockstar's staff was pulled onto Red Dead Redemption 2, whose realism and simulation goals delayed GTA 6 by years, and the pandemic disrupted the work further. GTA 6 was then delayed twice, from autumn 2025 to May 2026, and again to November 19, 2026. Our <Link href="/news/gta-6-timeline/">GTA 6 timeline</Link> tracks every milestone.
      </p>

      <h2>How big did Rockstar get while making GTA 6?</h2>
      <p>
        <span className="fw-flag reported">Reported</span> Bloomberg reports Rockstar grew from 2,441 employees in 2018 to 4,711 staff across 12 offices by August 2026. That is nearly double the headcount, and at some point as many as 4,700 people were working on GTA 6 or other projects at once. The expansion included a Los Angeles studio focused exclusively on creating non-player characters.
      </p>
      <p>
        Rockstar withheld the game's budget, but GTA 6 is widely described as gaming's most expensive production ever. Read our breakdown of <Link href="/news/gta-6-budget/">what GTA 6 reportedly cost</Link> and why.
      </p>

      <h2>Could the next GTA really come out faster?</h2>
      <p>
        Rockstar's leadership seems to think the studio can return to something closer to its old rhythm. There is precedent: Grand Theft Auto: Vice City followed GTA 3 in less than a year, because the studio reused the technology and production knowledge it had just built. Leadership hopes the same dynamic applies now that GTA 6's groundwork is complete.
      </p>
      <p>
        A fair amount of caution is warranted. The comments describe a development strategy, not a schedule, and the scale of Rockstar's ambitions has grown enormously since the Vice City days. The 13-year gap between GTA 5 and GTA 6 came from real structural reasons: a detour through Red Dead Redemption 2, the pandemic, two delays, and technology that had to be rebuilt. Some of those factors will not repeat, but Rockstar's next release date is still entirely unannounced. For the latest on the game that is actually coming, see our <Link href="/story/how-long-to-beat/">GTA 6 story length guide</Link> and the <Link href="/news/rockstar-news/">Rockstar news hub</Link>.
      </p>

      <div className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>What did Rockstar say about its next game after GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Head of development Phil Hooker told Bloomberg the studio expects to develop its next game faster, because the engine, tools and team built during GTA 6's production will carry over instead of being rebuilt from scratch.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Has Rockstar announced its next game?</h3>
          <p className={styles.faqAnswer}>
            No. Rockstar has not announced what its next game is, and the comments do not confirm that the next Grand Theft Auto will arrive on any particular schedule. The studio's full attention remains on GTA 6's November 19, 2026 launch.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>How many people work at Rockstar now?</h3>
          <p className={styles.faqAnswer}>
            Bloomberg reports Rockstar grew from 2,441 employees in 2018 to 4,711 staff across 12 offices by August 2026, including a Los Angeles studio focused exclusively on non-player characters. At peak, about 4,700 people were working on GTA 6 or other projects.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>How long did GTA 6 take to develop?</h3>
          <p className={styles.faqAnswer}>
            Early planning began around 2015 with a Miami research trip, but full development started around 2019. The game was delayed twice and launches November 19, 2026, 13 years after GTA 5, following a detour through Red Dead Redemption 2 and the pandemic.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>What was Project Americas?</h3>
          <p className={styles.faqAnswer}>
            Project Americas was GTA 6's code name during early development, so called because it was first imagined across North and South America. The scope was later reduced to Miami and its surroundings, now the game's state of Leonida.
          </p>
        </div>
      </div>

      <p><em>Last checked: October 15, 2026. Sources: <a href="https://www.gamespot.com/articles/rockstar-says-you-wont-have-to-wait-another-8-years-after-gta-6-for-its-next-game/" target="_blank" rel="noopener noreferrer">GameSpot</a>, <a href="https://gamedaily.com/games/rockstar-headcount-gta-6-4711-employees" target="_blank" rel="noopener noreferrer">GameDaily</a>, <a href="https://www.shacknews.com/article/150997/rockstar-games-next-game-after-gta-6" target="_blank" rel="noopener noreferrer">Shacknews</a>, <a href="https://gamedaily.com/games/why-gta-6-took-so-long-development-timeline" target="_blank" rel="noopener noreferrer">GameDaily</a>.</em></p>
    </ImageLightbox>
  ),
};
