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

export const gta6MoneyStoryMissions: ArticleData = {
  title: 'GTA 6 Money Missions: Earn Cash to Advance Story',
  metaDescription: 'Rockstar North’s Rob Nelson confirms GTA 6 ties story progress to cash: at certain points, players must earn money in the open world before missions continue.',
  focusKeyword: 'gta 6 money missions',
  h1: 'GTA 6 Money Missions: Earn Cash to Advance Story',
  publishedDate: 'October 9, 2026',
  modifiedDate: 'October 9, 2026',
  author: 'Editorial Staff',
  featureImage: '/images/news/gta-6-money-missions-featured.webp',
  featureImageAlt: 'Lucia and Jason masked during a store robbery beside a Vice City street shootout with cash counter, official Rockstar Games screenshots',
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
        <span className="fw-flag confirmed">Confirmed</span> Money is not just for buying cars and guns in Grand Theft Auto VI. Rockstar North co-studio head Rob Nelson has confirmed that players will reach points in the story where the missions stop until they go out into the open world and earn cash. The detail comes from IGN's full interview with Nelson, recorded earlier this year and published in full this week.
      </p>
      <p>
        Nelson named two confirmed ways to raise the money: boosting cars and selling them, and sticking places up. If you arrive at one of these checkpoints without enough cash, the mission flow waits until you have earned it.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Answer: GTA 6 Money Missions</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Source:</strong> IGN's full interview with Rob Nelson, Rockstar North co-studio head, published in full this week.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>The rule:</strong> At certain points, story missions will not continue until you have earned enough money in the open world.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Confirmed ways to earn:</strong> Stealing cars and selling them, and robbing stores and other targets.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Not confirmed:</strong> How much cash each checkpoint needs, how often they appear, and which income sources count.</span>
          </li>
        </ul>
      </div>

      <h2>Key takeaways</h2>
      <ul>
        <li>Rob Nelson confirmed GTA 6 gates parts of its story behind earning money in the open world.</li>
        <li>Nelson told IGN: "We have made money matter more in this story than I think it has in previous GTA games."</li>
        <li>Boosting and selling cars, plus robberies, are the two confirmed ways to raise the cash.</li>
        <li>Robbery targets are "very important to the gameplay loop" and can be hit solo or as a pair.</li>
        <li>Rockstar has not said how much cash each checkpoint needs or how often they appear.</li>
      </ul>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/gta-6-money-missions-featured.webp"
          alt="Lucia and Jason masked during a store robbery beside a Vice City street shootout with cash counter, official Rockstar Games screenshots"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 840px"
          className={styles.featureImage}
        />
      </div>
      <p className="img-credit">Image credit: Official Rockstar Games</p>

      <h2>What did Rob Nelson say about money in GTA 6?</h2>
      <p>
        <span className="fw-flag confirmed">Confirmed</span> In the interview, Nelson explained that cash is part of mission progression in GTA 6, not only a resource for buying weapons, vehicles, or property. His full line, as reported by gHacks and others covering the interview:
      </p>
      <div className="fw-quote">
        "We have made money matter more in this story than I think it has in previous GTA games."
        <cite>Rob Nelson, Rockstar North co-studio head, speaking to IGN</cite>
      </div>
      <p>
        The reason fits the story. GTA 6 follows Jason and Lucia, a couple on the run whose finances are central to the plot. Nelson's point is that their need for cash is not background flavor. It is a system the player has to engage with before the story moves forward.
      </p>

      <h2>How will the money checkpoints work in GTA 6?</h2>
      <p>
        <span className="fw-flag confirmed">Confirmed</span> The mechanic is simple. At certain points in the story, the next mission will not unlock until the player has earned enough money in the open world. A player who reaches one of these gates without enough cash will have to stop the story and go make money first.
      </p>
      <p>
        This is a real change from earlier GTA games, where story missions were always available regardless of your bank balance and money was mostly for shopping. In GTA 6, your wallet is part of the critical path. Players planning a story-focused first playthrough should expect to spend time on money-making activities between missions.
      </p>

      <h2>What are the confirmed ways to earn money in GTA 6?</h2>
      <p>
        <span className="fw-flag confirmed">Confirmed</span> Nelson named two specific ways to raise the cash needed at these checkpoints:
      </p>
      <ul>
        <li><strong>Boosting cars and selling them:</strong> stealing cars and selling them on, a classic GTA income stream that now feeds directly into story progress.</li>
        <li><strong>Sticking places up:</strong> robbing stores and other targets. Nelson called robbery targets very important to the gameplay loop, and said players can hit them solo or as a pair, meaning Jason and Lucia can rob together.</li>
      </ul>
      <p>
        The robbery system itself is broader than in past games. Nelson said players can rob "pretty much anything," and coverage of the interview notes targets ranging from small shops to banks. In the demo robbery Nelson described, he tracked down a safe combination and slipped out a back door when the cops showed up, which suggests these open-world robberies have real planning and escape gameplay, not just a hold-up animation.
      </p>

      <NewsCTAButton href="/news/gta-6-price/">GTA 6 price and editions: what the game costs</NewsCTAButton>

      <h2>What has Rockstar not confirmed about the money system?</h2>
      <p>
        Nelson left several key questions unanswered, and no other Rockstar source has filled them in yet:
      </p>
      <ul>
        <li>How much cash each individual checkpoint requires.</li>
        <li>How often these money gates appear across the story.</li>
        <li>Whether other income sources, like businesses or side activities, count toward the requirement.</li>
        <li>Whether the game warns you before a checkpoint so you can save up in advance.</li>
      </ul>
      <p>
        Until Rockstar says more, the safe assumption is to keep a healthy bank balance and treat money-making as part of the main journey, not a side activity.
      </p>

      <div className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Do you need money to finish the GTA 6 story?</h3>
          <p className={styles.faqAnswer}>
            Yes, at certain points. Rockstar North co-studio head Rob Nelson confirmed that parts of the GTA 6 story will not continue until you have earned enough money in the open world. If you reach one of these checkpoints without enough cash, you will have to go earn it before the mission flow resumes.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>What is the fastest way to earn money in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            The two methods Rockstar has confirmed are boosting cars and selling them, and robbing stores and other targets. Nelson described robbery targets as very important to the gameplay loop, and players can rob solo or as a pair with Jason and Lucia together.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Can you rob banks outside of missions in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            It looks that way. Nelson said players can rob "pretty much anything," and coverage of the interview lists banks among the potential open-world targets. This is a step beyond GTA 5, where major robberies were mostly locked to scripted story missions.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Does the money requirement apply to both Jason and Lucia?</h3>
          <p className={styles.faqAnswer}>
            Rockstar has not said whether the checkpoints track a shared wallet or each character separately. What is confirmed is that both characters can earn: robberies can be done solo or as a pair, and most open-world activities feed back into the couple's situation.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>How much money do GTA 6 story checkpoints need?</h3>
          <p className={styles.faqAnswer}>
            Rockstar has not revealed the amounts, how often the checkpoints appear, or which income sources count. Until more is confirmed, keeping a strong bank balance through robberies and car boosting is the safest approach for a smooth story playthrough.
          </p>
        </div>
      </div>

      <p><em>Last checked: October 9, 2026. Sources: <a href="https://www.gtavice.net/news/igns-full-gta-6-interview-reveals-even-more-gameplay-details" target="_blank" rel="noopener noreferrer">GTA Vice (IGN interview coverage)</a>, <a href="https://www.ghacks.net/2026/10/08/rockstar-says-gta-6-will-require-players-to-earn-money-to-advance-story-missions/" target="_blank" rel="noopener noreferrer">gHacks</a>, <a href="https://www.invenglobal.com/articles/26913/gta-6-full-interview-with-rockstars-rob-nelson-reveals-new-details" target="_blank" rel="noopener noreferrer">Inven Global</a>. Quotes from Rob Nelson via IGN.</em></p>
    </ImageLightbox>
  ),
};
