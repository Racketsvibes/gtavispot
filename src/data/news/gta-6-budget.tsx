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

export const gta6Budget: ArticleData = {
  title: 'GTA 6 Budget: Is It Really a $2 Billion Game? (2026)',
  metaDescription: 'How much did GTA 6 cost to make? Reported estimates put the GTA 6 budget near $1–2 billion — likely the priciest game ever. See how it compares to GTA 5 & RDR2.',
  focusKeyword: 'GTA 6 budget',
  h1: 'GTA 6 Budget: How Much Did It Cost to Make?',
  publishedDate: 'September 27, 2026',
  modifiedDate: 'September 27, 2026',
  author: 'Marcus Vance',
  featureImage: '/images/news/gta-6-budget-cover-art.webp',
  featureImageAlt: 'GTA 6 official cover art collage with Jason, Lucia and Vice City, illustrating the reported $1-2 billion GTA 6 budget',
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
        .news-cta-btn span { text-decoration: none !important; }
        .news-cta-btn:hover {
          background: linear-gradient(135deg, #d6246e, #f58634);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(245, 134, 52, 0.4);
        }
        .budget-table-wrap {
          overflow-x: auto;
          margin: 1.75rem 0;
          border-radius: 12px;
          border: 1px solid var(--border, #e2e8f0);
          box-shadow: 0 4px 14px rgba(0,0,0,0.04);
        }
        .budget-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.95rem;
          text-align: left;
          background: var(--bg-surface, #ffffff);
        }
        .budget-table th {
          background: var(--bg-secondary, #f8fafc);
          padding: 12px 16px;
          font-family: var(--font-ui), "Barlow Condensed", sans-serif;
          font-size: 1rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          border-bottom: 2px solid var(--border, #e2e8f0);
          color: var(--text-primary, #0f172a);
        }
        .budget-table td {
          padding: 12px 16px;
          border-bottom: 1px solid var(--border-light, #f1f5f9);
          color: var(--text-secondary, #334155);
          vertical-align: middle;
        }
        .budget-table tr:last-child td { border-bottom: none; }
        .budget-table td:nth-child(2) { font-weight: 700; color: var(--brand-magenta, #d6246e); white-space: nowrap; }
        .budget-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1.25rem;
          margin: 1.75rem 0;
        }
        .budget-card {
          background: var(--bg-secondary, #f8fafc);
          border: 1px solid var(--border, #e2e8f0);
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .budget-card-title {
          font-family: var(--font-ui), "Barlow Condensed", sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--brand-magenta, #d6246e);
          text-transform: uppercase;
        }
        .budget-card-desc { font-size: 0.95rem; color: var(--text-secondary, #334155); line-height: 1.5; }
      `}} />

      <p>
        <strong>Grand Theft Auto VI</strong> isn&apos;t just the most anticipated game of the decade — it&apos;s shaping up to be the most expensive one ever made. Reported estimates put the <strong>GTA 6 budget</strong> somewhere between <strong>$1 billion and $2 billion</strong> once development and marketing are added together.
      </p>
      <p>
        Rockstar Games hasn&apos;t published an official number, so treat every figure as an estimate. Here&apos;s what the reporting actually says, why the price tag is this big, and how it stacks up against GTA 5, Red Dead Redemption 2, and other blockbusters.
      </p>

      {/* Quick Answer Block for Google AI Overviews and Snippets */}
      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Answer: How Much Did GTA 6 Cost?</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Estimated GTA 6 budget:</strong> roughly $1 billion to $2 billion (development plus marketing), per industry analysts.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Official figure:</strong> None. Rockstar and Take-Two have never confirmed an exact cost.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>vs GTA 5:</strong> GTA 5 cost about $265 million in 2013 — GTA 6 may cost 4–7x more.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Why so high:</strong> 10+ years of development, a massive Leonida map, and huge marketing.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Record:</strong> If accurate, it&apos;s the priciest video game — and possibly the priciest entertainment product — ever.</span>
          </li>
        </ul>
      </div>

      <h2>How Much Did GTA 6 Cost to Make?</h2>
      <p>
        The honest answer is that nobody outside Rockstar knows the exact number. What we have are <strong>estimates in the $1–2 billion range</strong>, repeated by industry analysts and echoed in Google&apos;s own AI Overview when you search the topic. Most of those estimates fold marketing spend into the total, which is where the top-end $2 billion figure comes from.
      </p>
      <p>
        Take-Two Interactive, Rockstar&apos;s parent company, has stayed quiet on specifics. Some community estimates also blur the line between GTA 6&apos;s cost and Take-Two&apos;s wider studio spending across several years. That&apos;s a big reason the range is so wide instead of a single clean figure.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/gta-6-budget-vice-city-scale.webp"
          alt="GTA 6 Vice City sign at sunset with a jet overhead, representing the scale of the Leonida map behind the GTA 6 budget"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          A world the size of Leonida is a huge part of the bill. (Official Rockstar Games GTA 6 screenshot.)
        </div>
      </div>

      <h2>Why Is the GTA 6 Budget So High?</h2>
      <p>
        A billion-dollar game sounds absurd until you look at what went into it. GTA 6 has been in the works for more than a decade, with full production running for years across multiple Rockstar studios. Time is money, and Rockstar spent a lot of both.
      </p>
      <p>
        Here are the biggest cost drivers behind the price tag:
      </p>

      <div className="budget-grid">
        <div className="budget-card">
          <span className="budget-card-title">A Decade of Development</span>
          <p className="budget-card-desc">Years of salaries for one of the largest teams in gaming add up fast, long before a single copy sells.</p>
        </div>
        <div className="budget-card">
          <span className="budget-card-title">The Size of Leonida</span>
          <p className="budget-card-desc">A sprawling open world built around <Link href="/map/vice-city/">Vice City</Link> and the wider state of Leonida means enormous art and design workloads.</p>
        </div>
        <div className="budget-card">
          <span className="budget-card-title">Next-Gen Detail</span>
          <p className="budget-card-desc">Hundreds of thousands of hand-crafted animations, advanced physics, and dense NPC systems push production costs sky-high.</p>
        </div>
        <div className="budget-card">
          <span className="budget-card-title">Global Marketing</span>
          <p className="budget-card-desc">A worldwide launch campaign for the biggest release of the decade can rival the development cost on its own.</p>
        </div>
      </div>

      <h2>GTA 6 Budget vs GTA 5 Budget</h2>
      <p>
        The clearest way to grasp the jump is to look back at <strong>GTA 5</strong>. When it launched in 2013, its combined development and marketing cost of roughly <strong>$265 million</strong> made it the most expensive game ever made at the time.
      </p>
      <p>
        If GTA 6 really lands near $2 billion, that&apos;s somewhere between four and seven times what its predecessor cost. For a deeper side-by-side of the two games themselves, read our <Link href="/compare/gta-6-vs-gta-5/">GTA 6 vs GTA 5 comparison</Link>.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/gta-6-vs-gta-5-budget-comparison.webp"
          alt="GTA 5 official art of Michael, Franklin and Trevor, whose roughly $265 million budget is dwarfed by the GTA 6 budget"
          width={1200}
          height={750}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          GTA 5 cost about $265 million in 2013 — a fraction of GTA 6&apos;s reported budget.
        </div>
      </div>

      <h2>GTA 6 vs Red Dead Redemption 2 & Other Big Budgets</h2>
      <p>
        GTA 6 doesn&apos;t just tower over GTA 5. It clears the budgets of nearly every big-name game and most Hollywood blockbusters. Here&apos;s how the reported numbers compare — remember these are estimates, not audited figures.
      </p>

      <div className="budget-table-wrap">
        <table className="budget-table">
          <thead>
            <tr>
              <th>Game</th>
              <th>Estimated Budget</th>
              <th>Year</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Grand Theft Auto VI</strong></td>
              <td>$1–2 billion</td>
              <td>2026</td>
              <td>Dev + marketing; unconfirmed. Likely the priciest game ever.</td>
            </tr>
            <tr>
              <td>Star Citizen</td>
              <td>$700M+</td>
              <td>Ongoing</td>
              <td>Crowdfunded over many years, not a traditional budget.</td>
            </tr>
            <tr>
              <td>Red Dead Redemption 2</td>
              <td>~$170–540 million</td>
              <td>2018</td>
              <td>Rockstar&apos;s last epic; estimates vary widely.</td>
            </tr>
            <tr>
              <td>Cyberpunk 2077</td>
              <td>~$174–316 million</td>
              <td>2020</td>
              <td>Includes marketing and post-launch fixes.</td>
            </tr>
            <tr>
              <td>Grand Theft Auto V</td>
              <td>~$265 million</td>
              <td>2013</td>
              <td>Most expensive game ever made at launch.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        For scale, <strong>Red Dead Redemption 2</strong> — Rockstar&apos;s previous benchmark for ambition — is estimated at anywhere from $170 million to over $500 million depending on how marketing is counted. Even at the high end, GTA 6 still doubles it.
      </p>

      <h2>Will GTA 6 Make Its Money Back?</h2>
      <p>
        Almost certainly, and probably fast. GTA 5 has earned an estimated <strong>$8–9 billion</strong> across a decade, making it one of the most profitable entertainment products of all time. That track record is exactly why Rockstar felt safe spending big.
      </p>
      <p>
        Analysts expect GTA 6 to break sales records at launch, helped by strong <Link href="/news/gta-6-pre-order/">pre-order demand</Link> and its <Link href="/news/gta-6-price/">premium pricing</Link>. A billion-dollar bet looks a lot smarter when the last game printed money for ten years straight.
      </p>

      <NewsCTAButton href="/news/gta-6-release-date/">
        See the Full GTA 6 Release Date Breakdown
      </NewsCTAButton>

      {/* Key Takeaways for GEO / Generative Engines */}
      <h2>Key Takeaways</h2>
      <ul style={{ paddingLeft: '20px', margin: '16px 0 24px', lineHeight: 1.7 }}>
        <li>The <strong>GTA 6 budget</strong> is reported at roughly <strong>$1–2 billion</strong>, but Rockstar has never confirmed a figure.</li>
        <li>That would make it the <strong>most expensive video game ever made</strong>, and possibly the priciest entertainment product.</li>
        <li>It dwarfs <strong>GTA 5&apos;s ~$265 million</strong> cost and doubles even the highest <strong>Red Dead Redemption 2</strong> estimates.</li>
        <li>Costs stem from <strong>10+ years of development</strong>, the huge Leonida map, and a global marketing push.</li>
        <li>With GTA 5 earning $8–9 billion, Rockstar&apos;s huge spend is a calculated bet, not a gamble.</li>
      </ul>

      <p>
        Want the full picture before launch day? Check our <Link href="/news/gta-6-price/">GTA 6 price guide</Link>, see why the game took so long in our <Link href="/news/gta-6-delay/">GTA 6 delay history</Link>, or explore the world it paid for on the <Link href="/map/">interactive Leonida map hub</Link>.
      </p>

      {/* FAQs Section — classNames match the FAQ schema parser */}
      <div className={styles.faqSection}>
        <h2>Frequently Asked Questions: GTA 6 Budget</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>How much did GTA 6 cost to make?</h3>
          <p className={styles.faqAnswer}>
            Reported estimates put the GTA 6 budget at roughly $1 billion to $2 billion, including development and marketing. Rockstar Games has not confirmed an official figure, so all numbers are estimates.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Is GTA 6 the most expensive game ever made?</h3>
          <p className={styles.faqAnswer}>
            If the $1–2 billion estimates are accurate, yes — GTA 6 would be the most expensive video game ever made, and possibly the most expensive entertainment product ever, ahead of major Hollywood films.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>How does the GTA 6 budget compare to GTA 5?</h3>
          <p className={styles.faqAnswer}>
            GTA 5 cost about $265 million to develop and market in 2013. At a reported $1–2 billion, GTA 6 may cost roughly four to seven times more than its predecessor.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Why is GTA 6 so expensive to make?</h3>
          <p className={styles.faqAnswer}>
            The main drivers are more than a decade of development, one of the largest teams in gaming, a massive open world based on Leonida and Vice City, hundreds of thousands of animations, and a global marketing campaign.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Did Rockstar confirm the GTA 6 budget?</h3>
          <p className={styles.faqAnswer}>
            No. Rockstar Games and Take-Two Interactive have never publicly confirmed an exact budget for GTA 6. Every figure you see, including the $2 billion headline, is an analyst estimate.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Will GTA 6 make a profit?</h3>
          <p className={styles.faqAnswer}>
            Almost certainly. GTA 5 has earned an estimated $8–9 billion over the years, so analysts widely expect GTA 6 to recover its budget quickly and become hugely profitable after its November 19, 2026 launch.
          </p>
        </div>
      </div>
    </ImageLightbox>
  )
};
