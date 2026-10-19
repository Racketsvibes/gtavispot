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

export const gta6RockstarStaffTakeTwoStock: ArticleData = {
  title: 'Rockstar Doubled Staff for GTA 6 as Take-Two Stock Falls',
  metaDescription: 'Rockstar grew to 4,711 staff across 12 studios for GTA 6 as Take-Two shares fell 21%. Analysts reportedly expect 40M copies and $3B in revenue.',
  focusKeyword: 'GTA 6 Take-Two stock',
  h1: 'Rockstar Doubled Staff for GTA 6 as Take-Two Stock Falls',
  publishedDate: 'October 19, 2026',
  modifiedDate: 'October 19, 2026',
  author: 'Editorial Staff',
  featureImage: '/images/news/gta-6-rockstar-staff-take-two-stock-featured.webp',
  featureImageAlt: 'NASDAQ ticker screen showing TTWO Take-Two stock down, with a neon Vice City skyline behind it',
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
        .news-cta-btn:active,
        .news-cta-btn:visited {
          text-decoration: none !important;
          color: #ffffff !important;
        }
        .news-cta-btn span {
          text-decoration: none !important;
        }
        .news-cta-btn:hover {
          background: linear-gradient(135deg, #d6246e, #f58634);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(245, 134, 52, 0.4);
        }
      `}} />
      <div className={styles.quickAnswer}>
        <ul>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Rockstar's headcount:</strong> nearly doubled to 4,711 staff across 12 studios for GTA 6, up from 2,441 when Red Dead Redemption 2 shipped in 2018, per Bloomberg Businessweek.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Take-Two stock (TTWO):</strong> closed Friday at $205.28, down about 21% over 12 months, even with GTA 6 launching November 19, 2026.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Analyst expectations:</strong> Bloomberg reports analysts expect roughly 40 million copies sold and $3 billion in revenue within four months of launch. StoneX analyst Mike Hickey holds a Buy rating with a $300 price target.</span>
          </li>
        </ul>
      </div>

      <p>
        <strong>Last checked: October 19, 2026. Every claim in this post was checked today against the sources below. Sources: BeInCrypto (TradingView News), MarketWatch, Bloomberg Businessweek (via Play Observatory breakdown), Rockstar Games, Take-Two Interactive.</strong>
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>Rockstar grew to 4,711 employees across 12 offices for GTA 6, nearly double the 2,441 it had when Red Dead Redemption 2 launched in 2018.</li>
        <li>Take-Two Interactive (NASDAQ: TTWO) closed Friday, October 16 at $205.28, down 1.96% on the day and about 21% over the past year.</li>
        <li>Publishing head Jennifer Kolbe told Bloomberg "we're not going to finish this game by crunching," describing a deliberate overhaul of Rockstar's production culture.</li>
        <li>Analysts reportedly expect about 40 million GTA 6 copies and $3 billion in revenue within four months of the November 19 launch.</li>
        <li>StoneX analyst Mike Hickey maintains a Buy rating on Take-Two with a $300 price target; Take-Two reiterated $8 to $8.2 billion in fiscal 2027 net bookings guidance in August.</li>
      </ul>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/gta-6-rockstar-staff-take-two-stock-featured.webp"
          alt="NASDAQ ticker screen showing TTWO Take-Two stock down, with a neon Vice City skyline behind it"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 840px"
          className={styles.featureImage}
          priority
        />
      </div>
      <p className="img-credit">Image: GTA Vispot</p>

      <h2>How big has Rockstar become for GTA 6?</h2>
      <p>
        In a rare on-record conversation with Bloomberg's Jason Schreier, Rockstar's leadership described a studio transformed. The company now employs 4,711 people across 12 offices, close to double the 2,441 staff it had when Red Dead Redemption 2 shipped in 2018. That number covers writers, producers and directors, including a Los Angeles studio built specifically for NPCs. Bloomberg calls it the first time Rockstar has talked openly about the development struggles behind a game. You can read our breakdown of that interview in our <Link href="/news/rockstar-next-game-after-gta-6/">Rockstar next game report</Link>.
      </p>
      <p>
        The scale of the effort is a big part of why the game has taken more than eight years and survived two delays. GTA 6 launches November 19, 2026 on PlayStation 5 and Xbox Series X|S, as we cover in our <Link href="/news/gta-6-release-date/">GTA 6 release date</Link> page.
      </p>

      <h2>Why did Rockstar double its staff?</h2>
      <p>
        The headcount growth was not just about speed. Rockstar says it rebuilt its production culture to end the crunch that defined its earlier years. "We're not going to finish this game by crunching," head of publishing Jennifer Kolbe told Bloomberg. On the possibility of staff forming a union, she added: "If they want a union, they will have a union." That stance follows Rockstar's union tribunal case in the UK, which we covered in our <Link href="/news/gta-6-rockstar-union-tribunal/">Rockstar union tribunal</Link> report.
      </p>
      <p>
        The investment shows in the game's scope: our <Link href="/news/gta-6-gone-gold/">GTA 6 gold status report</Link> tracks the final certification stretch, and Rockstar's tech lead has said the team will keep improving the game "right up until the last moment."
      </p>

      <NewsCTAButton href="/news/gta-6-release-date/">GTA 6 release date: everything confirmed for November 19</NewsCTAButton>

      <h2>Why is Take-Two's stock falling before launch?</h2>
      <p>
        With a month to go before the biggest launch in the company's history, Take-Two's shares have struggled. The stock closed Friday at $205.28, slipping 1.96% on a down day for the wider market, and it sits roughly 23% below its 52-week high of $265.94 set in early July. Over the past 12 months it is down about 21%, per BeInCrypto's report. A <a href="https://www.marketwatch.com/data-news/take-two-interactive-software-inc-stock-underperforms-friday-when-compared-to-competitors-b41c2fde-5ae6d8f42284" target="_blank" rel="noopener noreferrer">MarketWatch recap of Friday's session</a> noted the slide snapped a two-day winning streak.
      </p>
      <p>
        The pullback is common before a giant release: investors have priced in huge expectations, and any doubt about the November 19 date or the size of the launch window gets punished. Rockstar leadership has publicly stood behind the date, and Bloomberg reports November 19 "does appear to be the real date."
      </p>

      <h2>What are analysts expecting from GTA 6?</h2>
      <p>
        The expectations attached to GTA 6 are staggering. BeInCrypto, citing Bloomberg's reporting, says analysts expect about 40 million copies sold and $3 billion in revenue within four months of launch. For context, that would make GTA 6 one of the fastest-selling entertainment products ever. StoneX analyst Mike Hickey has maintained a Buy rating on Take-Two with a $300 price target, roughly 46% above Friday's close.
      </p>
      <p>
        Take-Two itself is not hedging publicly. In August it reiterated fiscal 2027 net bookings guidance of $8 billion to $8.2 billion, a figure that effectively assumes a record-breaking GTA 6 launch. The next hard data point arrives soon: Take-Two reports earnings on November 5, two weeks before the game ships. Read the <a href="https://www.tradingview.com/news/binance_news:b06fe1b09094b:0-rockstar-rebuilt-for-gta-6-as-take-two-shares-fall-21-86-ahead-of-nov-19-launch/" target="_blank" rel="noopener noreferrer">full BeInCrypto report</a> for the complete business picture, and the <a href="https://playobservatory.com/news/gta-vi-bloomberg-making-of-rockstar-october-2026/" target="_blank" rel="noopener noreferrer">Play Observatory breakdown of the Bloomberg Businessweek feature</a> for the development side.
      </p>

      <p>
        <strong>Last checked: October 19, 2026.</strong> Staff figures (4,711, up from 2,441 in 2018) and the Kolbe quotes are from the October 14, 2026 Bloomberg Businessweek feature, confirmed against the Play Observatory and GTA Intel breakdowns. TTWO price ($205.28 close Friday, 1.96% down), 52-week high ($265.94, July 7) and 1-year return (~21% down) checked against MarketWatch and Finnhub data on October 19, 2026. Analyst expectations (40M copies, $3B revenue, Hickey Buy/$300, $8-8.2B FY27 guidance) are reported claims from BeInCrypto's October 19, 2026 report, not statements by Rockstar or Take-Two.
      </p>

      <div className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>

        <div className={styles.faqItem} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <h3 className={styles.faqQuestion} itemProp="name">How many people work at Rockstar on GTA 6?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div className={styles.faqAnswer} itemProp="text">
              <p>Rockstar now employs 4,711 people across 12 offices, per a Bloomberg Businessweek feature from October 2026. That is nearly double the 2,441 staff it had when Red Dead Redemption 2 shipped in 2018, and it includes a Los Angeles studio of writers, producers and directors built just for GTA 6's NPCs.</p>
            </div>
          </div>
        </div>

        <div className={styles.faqItem} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <h3 className={styles.faqQuestion} itemProp="name">What is Take-Two's stock price before the GTA 6 launch?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div className={styles.faqAnswer} itemProp="text">
              <p>Take-Two Interactive (NASDAQ: TTWO) closed Friday, October 16, 2026 at $205.28, down 1.96% on the day. The stock is down about 21% over the past 12 months and sits roughly 23% below its July 2026 high of $265.94. Prices move constantly, so check a live quote before acting on this.</p>
            </div>
          </div>
        </div>

        <div className={styles.faqItem} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <h3 className={styles.faqQuestion} itemProp="name">How many copies of GTA 6 are analysts expecting?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div className={styles.faqAnswer} itemProp="text">
              <p>Bloomberg's reporting, cited by BeInCrypto, says analysts expect roughly 40 million copies sold and $3 billion in revenue within four months of GTA 6's November 19, 2026 launch. These are analyst estimates, not figures released by Rockstar or Take-Two.</p>
            </div>
          </div>
        </div>

        <div className={styles.faqItem} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <h3 className={styles.faqQuestion} itemProp="name">Did Rockstar end crunch culture for GTA 6?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div className={styles.faqAnswer} itemProp="text">
              <p>Rockstar says so. Head of publishing Jennifer Kolbe told Bloomberg "we're not going to finish this game by crunching," and said staff can unionize if they want one. The company also faced a UK union tribunal in 2026 over alleged union-busting, which is still being followed up.</p>
            </div>
          </div>
        </div>

        <div className={styles.faqItem} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <h3 className={styles.faqQuestion} itemProp="name">When does Take-Two report earnings next?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div className={styles.faqAnswer} itemProp="text">
              <p>Take-Two's next earnings report is scheduled for November 5, 2026, two weeks before GTA 6 launches on November 19. The company's fiscal 2027 net bookings guidance of $8 billion to $8.2 billion will be in focus.</p>
            </div>
          </div>
        </div>
      </div>

      <p>
        Ready to lock in your copy before launch day?
      </p>

      <NewsCTAButton href="https://www.rockstargames.com/VI" isExternal={true}>
        Pre-order directly from Rockstar Games
      </NewsCTAButton>

    </ImageLightbox>
  ),
};
