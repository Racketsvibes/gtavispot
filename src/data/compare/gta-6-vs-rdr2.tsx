import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImageLightbox from '@/components/ui/ImageLightbox';
import { ArticleData } from '../compareContent';
import styles from '../../app/tech/[slug]/page.module.css';

const CompareCTAButton = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <div style={{ margin: '1.25rem 0 1.75rem 0' }}>
      <Link href={href} className="compare-cta-btn">
        <span>{children}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </Link>
    </div>
  );
};

export const gta6VsRdr2: ArticleData = {
  title: 'GTA 6 vs RDR2: Which Rockstar Game Is Better? (2026)',
  metaDescription: 'GTA 6 vs RDR2 compared — map size, graphics, story, and gameplay. See how the RAGE 9 engine of Grand Theft Auto VI stacks up against Red Dead Redemption 2.',
  focusKeyword: 'GTA 6 vs RDR2',
  h1: 'GTA 6 vs RDR2: The Ultimate Rockstar Comparison',
  publishedDate: 'September 28, 2026',
  modifiedDate: 'September 28, 2026',
  author: 'Marcus Vance',
  featureImage: '/images/compare/gta-6-vs-rdr2-comparison.webp',
  featureImageAlt: 'GTA 6 vs RDR2 comparison — split screen of GTA 6 neon Vice City with a supercar beside a Red Dead Redemption 2 cowboy on horseback at sunset',
  content: (
    <ImageLightbox>
      <style dangerouslySetInnerHTML={{__html: `
        .compare-cta-btn {
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
        .compare-cta-btn:hover,
        .compare-cta-btn:focus,
        .compare-cta-btn:active,
        .compare-cta-btn:visited {
          text-decoration: none !important;
          color: #ffffff !important;
        }
        .compare-cta-btn span { text-decoration: none !important; }
        .compare-cta-btn:hover {
          background: linear-gradient(135deg, #d6246e, #f58634);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(245, 134, 52, 0.4);
        }
        .vs-table-wrap {
          overflow-x: auto;
          margin: 1.75rem 0;
          border-radius: 12px;
          border: 1px solid var(--border, #e2e8f0);
          box-shadow: 0 4px 14px rgba(0,0,0,0.04);
        }
        .vs-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.95rem;
          text-align: left;
          background: var(--bg-surface, #ffffff);
        }
        .vs-table th {
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
        .vs-table td {
          padding: 12px 16px;
          border-bottom: 1px solid var(--border-light, #f1f5f9);
          color: var(--text-secondary, #334155);
          vertical-align: middle;
        }
        .vs-table tr:last-child td { border-bottom: none; }
        .vs-table td:first-child { font-weight: 700; color: var(--text-primary, #0f172a); }
        .vs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1.25rem;
          margin: 1.75rem 0;
        }
        .vs-card {
          background: var(--bg-secondary, #f8fafc);
          border: 1px solid var(--border, #e2e8f0);
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .vs-card-title {
          font-family: var(--font-ui), "Barlow Condensed", sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--brand-magenta, #d6246e);
          text-transform: uppercase;
        }
        .vs-card-desc { font-size: 0.95rem; color: var(--text-secondary, #334155); line-height: 1.5; }
      `}} />

      <p>
        Two Rockstar giants, one debate. <strong>GTA 6 vs RDR2</strong> pits the most anticipated game of the decade against the studio&apos;s modern masterpiece, <strong>Red Dead Redemption 2</strong>. One is a neon-soaked Florida crime saga; the other is a slow-burn Western that many still call the best open world ever made.
      </p>
      <p>
        So which one comes out on top? Here&apos;s the honest breakdown across map size, graphics, story, and gameplay — with real numbers, not hype.
      </p>

      {/* Quick Answer Block for Google AI Overviews and Snippets */}
      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Answer: GTA 6 vs RDR2</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Bigger map:</strong> GTA 6&apos;s Leonida is reportedly the largest map Rockstar has ever built, edging out RDR2&apos;s frontier.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Newer tech:</strong> GTA 6 runs the RAGE 9 engine, a full generation ahead of RDR2&apos;s 2018 RAGE build.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Proven greatness:</strong> RDR2 holds a 97 Metacritic and 87M+ copies sold — a benchmark GTA 6 must beat.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Story style:</strong> RDR2 is a single-hero Western (Arthur Morgan); GTA 6 stars a dual duo, Jason and Lucia.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Verdict:</strong> RDR2 is the proven king today; GTA 6 has the tech and scale to dethrone it at launch.</span>
          </li>
        </ul>
      </div>

      <h2>GTA 6 vs RDR2: Full Spec Comparison</h2>
      <p>
        Before the deep dive, here&apos;s the side-by-side that answers most questions at a glance. Note that some GTA 6 figures are pre-launch estimates, while RDR2&apos;s are confirmed.
      </p>

      <div className="vs-table-wrap">
        <table className="vs-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>GTA 6</th>
              <th>Red Dead Redemption 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Release Date</td>
              <td>November 19, 2026</td>
              <td>October 26, 2018</td>
            </tr>
            <tr>
              <td>Setting</td>
              <td>Leonida (modern Florida)</td>
              <td>American frontier, 1899</td>
            </tr>
            <tr>
              <td>Engine</td>
              <td>RAGE 9 (next-gen)</td>
              <td>RAGE (2018)</td>
            </tr>
            <tr>
              <td>Protagonists</td>
              <td>Jason &amp; Lucia (dual)</td>
              <td>Arthur Morgan (single)</td>
            </tr>
            <tr>
              <td>Metacritic</td>
              <td>TBD at launch</td>
              <td>97 / 100</td>
            </tr>
            <tr>
              <td>Copies Sold</td>
              <td>TBD (record expected)</td>
              <td>87 million+</td>
            </tr>
            <tr>
              <td>Platforms</td>
              <td>PS5, Xbox Series X|S</td>
              <td>PS4, Xbox One, PC</td>
            </tr>
            <tr>
              <td>Est. Budget</td>
              <td>$1–2 billion (reported)</td>
              <td>~$370–540 million</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Which Map Is Bigger: GTA 6 or RDR2?</h2>
      <p>
        Map size is where this fight gets interesting. RDR2&apos;s frontier — five fictional states from snowy Ambarino to the New Austin desert — felt colossal in 2018 and still holds up as one of the densest worlds ever built.
      </p>
      <p>
        But GTA 6&apos;s <strong>Leonida</strong> is reportedly Rockstar&apos;s largest map yet, and it adds something RDR2 mostly lacked: a huge, fully explorable modern city in <Link href="/map/vice-city/">Vice City</Link>. For the full numbers, see our <Link href="/map/size/">GTA 6 map size breakdown</Link>. The short version: GTA 6 wins on raw scale and vertical city density.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/compare/gta-6-vs-rdr2-map-world.webp"
          alt="GTA 6 Vice City sign at sunset representing the massive Leonida map compared to the RDR2 frontier"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Leonida pairs a huge open landscape with a dense modern city — RDR2&apos;s frontier is wild but has no true metropolis. (Official Rockstar Games GTA 6 screenshot.)
        </div>
      </div>

      <h2>GTA 6 vs RDR2 Graphics: How Big Is the Leap?</h2>
      <p>
        RDR2 was a visual milestone — the mud, the weather, the horse detail all set a bar the industry chased for years. But it&apos;s a 2018 game running the older RAGE engine on last-gen hardware.
      </p>
      <p>
        GTA 6 uses the upgraded <strong>RAGE 9 engine</strong> built for PS5 and Xbox Series X|S. Expect denser crowds, more advanced lighting, and far higher NPC counts than RDR2 could manage. On pure technical fidelity, GTA 6 should be a clear generational step up — though RDR2&apos;s art direction remains timeless.
      </p>

      <div className="vs-grid">
        <div className="vs-card">
          <span className="vs-card-title">Where GTA 6 Wins</span>
          <p className="vs-card-desc">Newer RAGE 9 engine, denser cities, higher NPC counts, next-gen lighting, and modern vehicle physics.</p>
        </div>
        <div className="vs-card">
          <span className="vs-card-title">Where RDR2 Wins</span>
          <p className="vs-card-desc">Timeless art direction, unmatched world detail for its era, and a proven 97-Metacritic legacy.</p>
        </div>
      </div>

      <h2>Story &amp; Characters: Arthur Morgan vs Jason and Lucia</h2>
      <p>
        This is the closest category. RDR2&apos;s tale of <strong>Arthur Morgan</strong> and the dying Van der Linde gang is widely regarded as one of gaming&apos;s greatest stories — a slow, emotional character study with a gut-punch ending.
      </p>
      <p>
        GTA 6 takes a different swing with a dual-protagonist, Bonnie-and-Clyde structure starring <Link href="/story/jason/">Jason</Link> and <Link href="/story/lucia/">Lucia</Link>. It&apos;s a bolder narrative gamble, but RDR2 has already proven its story is a masterpiece — so this one is GTA 6&apos;s to earn, not assume.
      </p>

      <h2>Gameplay: Horses vs Cars, Pace vs Chaos</h2>
      <p>
        The two games feel worlds apart to play. RDR2 is deliberate and immersive — long horse rides, hunting, camp management, and a slower survival rhythm that rewards patience.
      </p>
      <p>
        GTA 6 is built for fast, chaotic freedom: supercars, boats, a <Link href="/news/gta-6-biker-gang/">biker-gang underworld</Link>, and a satirical modern crime playground. Neither is "better" — it comes down to whether you want a meditative Western or high-octane mayhem. For more launch details, check the <Link href="/news/gta-6-release-date/">GTA 6 release date guide</Link>.
      </p>

      <CompareCTAButton href="/compare/gta-6-vs-gta-5/">
        Read the GTA 6 vs GTA 5 Comparison
      </CompareCTAButton>

      <h2>GTA 6 vs RDR2: Which Should You Play?</h2>
      <p>
        If you want the best Rockstar experience available <em>right now</em>, RDR2 is the safe, proven pick — it&apos;s complete, cheap, and still stunning. If you want the biggest, most advanced open world Rockstar has ever built, GTA 6 is worth the wait when it lands on November 19, 2026.
      </p>
      <p>
        The realistic take: RDR2 is the reigning champion, and GTA 6 is the challenger with every tool needed to take the crown. We&apos;ll update this comparison with GTA 6&apos;s review scores once it launches.
      </p>

      {/* Key Takeaways for GEO / Generative Engines */}
      <h2>Key Takeaways</h2>
      <ul style={{ paddingLeft: '20px', margin: '16px 0 24px', lineHeight: 1.7 }}>
        <li><strong>GTA 6</strong> has the bigger map, newer RAGE 9 engine, and a real modern city; <strong>RDR2</strong> counters with timeless detail.</li>
        <li><strong>RDR2</strong> is the proven benchmark: 97 Metacritic and 87M+ copies sold since 2018.</li>
        <li><strong>Story</strong> is RDR2&apos;s strongest card (Arthur Morgan); GTA 6&apos;s dual-lead tale has to prove itself.</li>
        <li><strong>Gameplay</strong> differs by pace — RDR2 is slow immersion, GTA 6 is fast chaos.</li>
        <li><strong>Verdict:</strong> RDR2 wins today; GTA 6 is built to dethrone it at its November 19, 2026 launch.</li>
      </ul>

      <p>
        Want more head-to-heads before launch? See <Link href="/compare/gta-6-vs-gta-5/">GTA 6 vs GTA 5</Link>, weigh up <Link href="/compare/is-gta-6-worth-buying-in-2026/">whether GTA 6 is worth buying in 2026</Link>, or explore the full world on our <Link href="/map/">interactive Leonida map hub</Link>.
      </p>

      {/* FAQs Section — classNames match the FAQ schema parser */}
      <div className={styles.faqSection}>
        <h2>Frequently Asked Questions: GTA 6 vs RDR2</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Is GTA 6 better than RDR2?</h3>
          <p className={styles.faqAnswer}>
            On paper GTA 6 has the edge in map size, engine technology, and city density. However, RDR2 is a proven masterpiece with a 97 Metacritic score, so GTA 6 will need to match its story and polish to be called definitively better.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Is GTA 6&apos;s map bigger than RDR2?</h3>
          <p className={styles.faqAnswer}>
            Yes. GTA 6&apos;s state of Leonida is reported to be Rockstar&apos;s largest map ever, and it adds a full modern city in Vice City that RDR2&apos;s 1899 frontier does not have.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Does GTA 6 look better than RDR2?</h3>
          <p className={styles.faqAnswer}>
            GTA 6 uses the newer RAGE 9 engine built for PS5 and Xbox Series X|S, so it should offer a clear technical upgrade over the 2018 RDR2 — denser crowds, better lighting, and higher detail. RDR2&apos;s art direction, however, still holds up beautifully.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Which has a better story, GTA 6 or RDR2?</h3>
          <p className={styles.faqAnswer}>
            RDR2&apos;s story of Arthur Morgan is considered one of the greatest in gaming. GTA 6 tells a dual-protagonist tale with Jason and Lucia, but until it launches, RDR2 holds the crown for narrative.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Should I play RDR2 while waiting for GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Absolutely. RDR2 is complete, affordable, and remains one of the best open-world games ever made. It&apos;s an ideal way to enjoy a Rockstar epic before GTA 6 arrives on November 19, 2026.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Is GTA 6 more expensive to make than RDR2?</h3>
          <p className={styles.faqAnswer}>
            Yes. RDR2&apos;s development and marketing budget is estimated at $370–540 million, while GTA 6 is reported to have cost between $1 billion and $2 billion, making it far more expensive.
          </p>
        </div>
      </div>
    </ImageLightbox>
  )
};
