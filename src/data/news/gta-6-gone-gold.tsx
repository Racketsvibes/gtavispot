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

export const gta6GoneGold: ArticleData = {
  title: 'GTA 6 Not Gone Gold Yet, Report Says',
  metaDescription: 'GTA 6 has not gone gold yet, per Bloomberg\'s Jason Schreier. What Rockstar execs said about the final build, certification and the November 19 launch date.',
  focusKeyword: 'gta 6 gone gold',
  h1: 'GTA 6 Not Gone Gold Yet, Report Says',
  publishedDate: 'October 17, 2026',
  modifiedDate: 'October 17, 2026',
  author: 'Editorial Staff',
  featureImage: '/images/news/gta-6-november-launch.jpg',
  featureImageAlt: 'GTA VI November Launch graphic with a sports car on a Vice City style street at sunset',
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
        <span className="fw-flag reported">Reported</span> GTA 6 has not gone gold yet. With five weeks to go before launch, Notebookcheck reports that Rockstar's final master build is still going through bug fixes and polishing, citing Bloomberg reporter Jason Schreier, who spoke with executives and leaders at Rockstar Games about the making of the game.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Answer: GTA 6 Gone Gold Status</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Status:</strong> GTA 6 has reportedly not gone gold as of October 17, 2026. The final master build is still being fixed and polished.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Source:</strong> Notebookcheck, citing Bloomberg's Jason Schreier, who interviewed Rockstar executives including director of technology Phil Hooker.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Certification:</strong> the final build is expected to clear platform certification with Microsoft and Sony (Xbox Series X|S, PS5, PS5 Pro) sometime in November, near the preload window.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Launch:</strong> GTA 6 still launches November 19, 2026, with digital preloads opening November 12. Nothing in the report points to another delay.</span>
          </li>
        </ul>
      </div>

      <h2>Key takeaways</h2>
      <ul>
        <li>GTA 6 has reportedly not gone gold, five weeks before its November 19, 2026 launch.</li>
        <li>The report comes via Bloomberg's Jason Schreier, based on conversations with Rockstar executives and leaders.</li>
        <li>Rockstar director of technology Phil Hooker said development continues "right up until the last moment."</li>
        <li>The final build is expected to clear Microsoft and Sony certification in November, near the November 12 preload window.</li>
        <li>Schreier's reporting says November 19 "does appear to be the real date." The report does not signal another delay.</li>
        <li>The detail comes from Schreier's Bloomberg Businessweek cover story on the making of GTA 6, published October 14.</li>
      </ul>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/gta-6-november-launch.jpg"
          alt="GTA VI November Launch graphic with a sports car on a Vice City style street at sunset"
          width={1376}
          height={768}
          sizes="(max-width: 768px) 100vw, 840px"
          className={styles.featureImage}
          priority
        />
      </div>
      <p className="img-credit">Image: GTA Vispot</p>

      <NewsCTAButton href="/news/gta-6-release-date/">GTA 6 release date: everything confirmed for November 19</NewsCTAButton>

      <h2>What does "gone gold" mean for GTA 6?</h2>
      <p>
        Going gold means the final master build of the game is finished, approved and sent to platform holders. In the disc era it meant the gold master disc was pressed. Today it means the build that Microsoft and Sony certify for release is locked in.
      </p>
      <p>
        Work does not stop at gold. Rockstar will keep building the day-one patch and tuning the game after the gold build ships, and that patch is often where the last round of fixes lands. So a game can be un-gold in October and still hit a November date without trouble.
      </p>

      <h2>What did Rockstar's Phil Hooker tell Bloomberg?</h2>
      <p>
        <span className="fw-flag reported">Reported</span> Rockstar's director of technology, Phil Hooker, told Schreier that development on GTA 6 continues right up to the last moment. Notebookcheck quotes Hooker saying: "The game's never completely settled. We never have an exact blueprint. Even within the last few months, we've changed things."
      </p>
      <p>
        Hooker also said GTA 6 took so long because of a web of interconnected systems that would not fit the original timelines, not because of internal mistakes. He added that the technology, systems and tools built for GTA 6 will let the studio work faster in the future, a point Rockstar's Aaron Garbut echoed: the team "foundationally changed a lot of stuff on this project" and will not "rip it apart." Read our <Link href="/news/rockstar-next-game-after-gta-6/">Rockstar next game report</Link> for what that means for future releases.
      </p>

      <h2>When will GTA 6 go gold and clear certification?</h2>
      <p>
        The report expects the final build to clear platform certification with Microsoft and Sony for Xbox Series X|S, PlayStation 5 and PlayStation 5 Pro sometime in November, close to the preload window. Digital preloads open November 12, so any gold announcement from Rockstar would land in the days before that.
      </p>
      <p>
        This timing is normal. Platform certification is the final gate every console game passes through, and big releases often clear it only weeks before launch day.
      </p>

      <h2>Does this mean GTA 6 could be delayed again?</h2>
      <p>
        Nothing in the report points that way. Schreier's own reporting says November 19 "does appear to be the real date," and Notebookcheck notes the ongoing work is polishing, not a sign of another delay. Rockstar's <Link href="/news/gta-6-launch-trailer/">October 15 launch trailer</Link> also reaffirmed the date.
      </p>
      <p>
        The game was delayed twice before, from fall 2025 to May 26, 2026 and then to November 19, 2026, so fans are right to watch the calendar closely. But gold status alone is not a delay signal.
      </p>

      <h2>What else did the Bloomberg report reveal?</h2>
      <p>
        The gold detail comes from Schreier's Bloomberg Businessweek cover story on the making of GTA 6, published October 14 after a visit to Rockstar North in late September. The report says the project began as "Project Americas," a map spanning North and South America, before Rockstar narrowed it to Leonida and Vice City.
      </p>
      <p>
        Rockstar now employs 4,711 people across 12 offices, up from 2,441 when Red Dead Redemption 2 shipped. Schreier also reported Rockstar's vow to finish GTA 6 without the 60-hour crunch weeks that marked Red Dead Redemption 2, with paid time off for extra hours instead.
      </p>

      <NewsCTAButton href="/news/gta-6-pre-order/">Pre-order GTA 6: editions, prices and where to buy</NewsCTAButton>

      <div className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Has GTA 6 gone gold?</h3>
          <p className={styles.faqAnswer}>
            Reported: no. As of October 17, 2026, the final master build is still being fixed and polished, according to Notebookcheck citing Bloomberg's Jason Schreier. Rockstar has not announced gold status itself.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>What does "going gold" mean?</h3>
          <p className={styles.faqAnswer}>
            Going gold means the final master build is finished and approved by the platform holders, Microsoft and Sony. After gold, the studio keeps working on the day-one patch, which carries the last fixes.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>When will GTA 6 go gold?</h3>
          <p className={styles.faqAnswer}>
            The report expects the final build to clear Microsoft and Sony certification sometime in November, near the November 12 preload window. Rockstar usually announces gold status itself once the build is locked.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Is GTA 6 delayed?</h3>
          <p className={styles.faqAnswer}>
            No. The November 19, 2026 release date stands, and nothing in the Bloomberg reporting suggests a third delay. Schreier writes that November 19 "does appear to be the real date."
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>When do GTA 6 preloads start?</h3>
          <p className={styles.faqAnswer}>
            Digital preloads open November 12, 2026, one week before launch. GTA 6 releases November 19, 2026 on PlayStation 5 and Xbox Series X|S.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Will GTA 6 launch on PC?</h3>
          <p className={styles.faqAnswer}>
            Rockstar has not announced a PC release date. GamesBeat reported the PC version is planned for Q1 2027, but that is unconfirmed. Our <Link href="/news/gta-6-pc-release-date/">GTA 6 PC release date post</Link> tracks every report.
          </p>
        </div>
      </div>

      <p><em>Last checked: October 17, 2026. Every claim in this post was checked today against the sources below. Sources: <a href="https://www.notebookcheck.net/GTA-VI-not-yet-gold-Rockstar-explains-the-final-push-before-launch.1426418.0.html" target="_blank" rel="noopener noreferrer">Notebookcheck</a> (citing Bloomberg's Jason Schreier), <a href="https://leonidascout.com/gta-6-making-of-bloomberg/" target="_blank" rel="noopener noreferrer">LeonidaScout</a>, <a href="https://rockstarintel.com/rockstar-claim-gta-6-means-their-next-game-wont-take-to-make/" target="_blank" rel="noopener noreferrer">rockstarintel</a>, <a href="https://www.rockstargames.com/newswire/article/517572321a549a/watch-the-grand-theft-auto-vi-launch-trailer" target="_blank" rel="noopener noreferrer">Rockstar Games</a>.</em></p>
    </ImageLightbox>
  ),
};
