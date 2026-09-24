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

export const gta6ViceCityCollection: ArticleData = {
  title: 'GTA 6 Vice City Collection: $400 Box, Items & Pre-Order',
  metaDescription: 'Rockstar reveals the GTA 6 Goodtime State Vice City Collection collector box for $399.99. See all 11 items, Macca the Gator figure, full map poster & details.',
  focusKeyword: 'GTA 6 Vice City Collection',
  h1: 'GTA 6 Vice City Collection: All 11 Items, Price & Pre-Order Guide',
  publishedDate: 'September 24, 2026',
  modifiedDate: 'September 24, 2026',
  author: 'Qamar Farooq',
  featureImage: '/images/news/gta-6-vice-city-collection-feature.webp',
  featureImageAlt: 'Rockstar Games GTA 6 The Goodtime State Vice City Collection limited edition merchandise box with Leonida map and Macca the Gator items',
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
        .collection-table-wrap {
          overflow-x: auto;
          margin: 1.75rem 0;
          border-radius: 12px;
          border: 1px solid var(--border, #e2e8f0);
          box-shadow: 0 4px 14px rgba(0,0,0,0.04);
        }
        .collection-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.95rem;
          text-align: left;
          background: var(--bg-surface, #ffffff);
        }
        .collection-table th {
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
        .collection-table td {
          padding: 12px 16px;
          border-bottom: 1px solid var(--border-light, #f1f5f9);
          color: var(--text-secondary, #334155);
          vertical-align: middle;
        }
        .collection-table tr:last-child td {
          border-bottom: none;
        }
        .collection-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.25rem;
          margin: 1.75rem 0;
        }
        .collection-card {
          background: var(--bg-secondary, #f8fafc);
          border: 1px solid var(--border, #e2e8f0);
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .collection-card-title {
          font-family: var(--font-ui), "Barlow Condensed", sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--brand-magenta, #d6246e);
          text-transform: uppercase;
        }
        .collection-card-desc {
          font-size: 0.95rem;
          color: var(--text-secondary, #334155);
          line-height: 1.5;
        }
      `}} />

      <p>
        Rockstar Games has officially surprised fans worldwide with the announcement of the <strong>GTA 6 Vice City Collection</strong>—formally titled <em>Grand Theft Auto VI: The Goodtime State – Vice City Collection</em>. Available now for pre-order via the official Rockstar Store for $399.99 (€399.99), this ultra-premium, limited-edition collector box is inspired by Leonida&apos;s wild wetlands and the satirical in-game cartoon universe of <em>Macca the Gator</em>.
      </p>

      {/* Quick Answer Block for Google AI Overviews and Snippets */}
      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Summary: The Goodtime State – Vice City Collection</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Official Name:</strong> Grand Theft Auto VI: The Goodtime State – Vice City Collection.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Price:</strong> $399.99 USD / €399.99 EUR (Strictly limited production run).</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Release &amp; Shipping Date:</strong> November 19, 2026 (ships alongside game launch).</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Is the Game Included?</strong> No. The physical or digital Grand Theft Auto VI game disc is <strong>sold separately</strong>.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Where to Pre-Order:</strong> Exclusively at the official <a href="https://store.rockstargames.com/merchandise/gtavi-goodtime-state-vice-city-collection" target="_blank" rel="noopener noreferrer">Rockstar Store</a> while supplies last.</span>
          </li>
        </ul>
      </div>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/gta-6-vice-city-collection-feature.webp"
          alt="GTA 6 The Goodtime State Vice City Collection official merchandise box and double sided poster"
          width={1200}
          height={630}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
          priority
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Official Source: <a href="https://www.rockstargames.com/newswire/article/9k2a49ook82o57/pre-order-the-goodtime-state-vice-city-collection-now-while-supplies-l" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-magenta)', textDecoration: 'underline' }}>Rockstar Games Newswire Announcement</a>
        </div>
      </div>

      <h2>What Is &quot;The Goodtime State – Vice City Collection&quot;?</h2>
      <p>
        According to the official <a href="https://www.rockstargames.com/newswire/article/9k2a49ook82o57/pre-order-the-goodtime-state-vice-city-collection-now-while-supplies-l" target="_blank" rel="noopener noreferrer">Rockstar Games Newswire</a>, <em>&quot;Macca and his wetland friends&quot;</em> serves as the central promotional tagline for this luxury collector&apos;s bundle. In the world of Grand Theft Auto VI, <strong>Macca the Gator</strong> is a beloved, satirical children&apos;s cartoon and tourism mascot across the state of Leonida.
      </p>
      <p>
        Instead of a standard plastic steelbook edition, Rockstar partnered with top-tier brands—including <strong>Oakley®</strong> and <strong>New Era®</strong>—to craft real-world, high-fashion lifestyle accessories that reflect the tropical, neon aesthetic of Vice City and the Leonida Keys.
      </p>

      <NewsCTAButton href="https://store.rockstargames.com/merchandise/gtavi-goodtime-state-vice-city-collection" isExternal>
        Pre-Order at Official Rockstar Store ($399.99)
      </NewsCTAButton>

      <h2>Complete Breakdown: All 11 Items Included in the $399.99 Collector&apos;s Box</h2>
      <p>
        The collection includes 11 bespoke physical collector items designed for longtime GTA fans and collectors:
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/gta-6-vice-city-collection-map-poster.webp"
          alt="GTA 6 Vice City Collection double sided souvenir poster featuring characters on front and full Leonida map on back"
          width={1440}
          height={810}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Double-Sided Souvenir Poster: Featuring Lucia and Jason on one side and the full Leonida map on the reverse.
        </div>
      </div>

      <div className="collection-grid">
        <div className="collection-card">
          <span className="collection-card-title">1. Macca the Gator 6-Inch Figure</span>
          <p className="collection-card-desc">
            A stylized vinyl figure of Leonida&apos;s mascot featuring a secret hollow stash compartment hidden in the base.
          </p>
        </div>

        <div className="collection-card">
          <span className="collection-card-title">2. Oakley® Frogskins™ Sunglasses</span>
          <p className="collection-card-desc">
            Official Oakley Frogskins with a Matte Black frame, custom Prizm Sapphire polarized lenses, and custom Vice City arm etchings.
          </p>
        </div>

        <div className="collection-card">
          <span className="collection-card-title">3. New Era® 9FORTY Snapback Cap</span>
          <p className="collection-card-desc">
            Premium structured snapback hat featuring raised embroidered Vice City and Leonida state emblems with a tropical underbill.
          </p>
        </div>

        <div className="collection-card">
          <span className="collection-card-title">4. Leonida Keys Ripstop Crossbody Bag</span>
          <p className="collection-card-desc">
            A water-resistant tactical utility bag with heavy-duty zippers, adjustable straps, and Florida Keys tourist styling.
          </p>
        </div>

        <div className="collection-card">
          <span className="collection-card-title">5. Macca the Gator Magnetic Mirror</span>
          <p className="collection-card-desc">
            A retro pink glass mirror with magnetic backing, designed to mount in vanity sets, safehouses, or lockers.
          </p>
        </div>

        <div className="collection-card">
          <span className="collection-card-title">6. Chunkee the Manatee Shot Glass</span>
          <p className="collection-card-desc">
            A heavy-bottom glass barware collectible showcasing Chunkee the Manatee, one of Macca&apos;s cartoon wetland companions.
          </p>
        </div>

        <div className="collection-card">
          <span className="collection-card-title">7. Vice City Collectible Swizzle Spoon</span>
          <p className="collection-card-desc">
            An 80s-inspired metallic bar spoon with a custom neon palm tree finial for mixing tropical cocktails.
          </p>
        </div>

        <div className="collection-card">
          <span className="collection-card-title">8. Vice City Razor Blade Keychain</span>
          <p className="collection-card-desc">
            A solid metal novelty keychain shaped like a classic Vice City razor blade with laser-engraved GTA VI typography.
          </p>
        </div>

        <div className="collection-card">
          <span className="collection-card-title">9. Leonida Keys 9-Piece Enamel Pin Set</span>
          <p className="collection-card-desc">
            Nine premium enamel lapel pins representing iconic Leonida landmarks, housed inside a custom embossed metal tin.
          </p>
        </div>

        <div className="collection-card">
          <span className="collection-card-title">10. Leonida Keys 9-Piece Vinyl Sticker Pack</span>
          <p className="collection-card-desc">
            Nine weather-resistant holographic vinyl decals enclosed inside a resealable water-tight stash bag.
          </p>
        </div>

        <div className="collection-card">
          <span className="collection-card-title">11. Double-Sided Souvenir Poster</span>
          <p className="collection-card-desc">
            Full-color glossy poster displaying <Link href="/story/lucia/">Lucia</Link> and <Link href="/story/jason/">Jason</Link> artwork on one side, and the detailed geographic map of Leonida on the reverse.
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', margin: '24px 0' }}>
        <div className={styles.featureImageContainer} style={{ margin: 0 }}>
          <Image
            src="/images/news/gta-6-vice-city-collection-cap.webp"
            alt="GTA 6 Vice City Collection New Era 9FORTY Snapback Hat front and side angle view"
            width={720}
            height={405}
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.featureImage}
          />
          <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '6px', fontFamily: 'var(--font-ui), sans-serif' }}>
            New Era® 9FORTY Vice City Snapback
          </div>
        </div>

        <div className={styles.featureImageContainer} style={{ margin: 0 }}>
          <Image
            src="/images/news/gta-6-vice-city-collection-pins.webp"
            alt="GTA 6 Leonida Keys 9-piece enamel pin collection in custom metal collector tin"
            width={720}
            height={405}
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.featureImage}
          />
          <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '6px', fontFamily: 'var(--font-ui), sans-serif' }}>
            Leonida Keys Enamel Pin Set &amp; Collector Tin
          </div>
        </div>
      </div>

      <h2>Comparison: Vice City Collection vs Standard &amp; Deluxe Editions</h2>
      <p>
        Many players have asked whether buying <strong>The Goodtime State – Vice City Collection</strong> includes the copy of Grand Theft Auto VI. It is crucial to understand that this is a <strong>standalone merchandise box</strong>. If you want the playable game on PS5 or Xbox Series X/S, you will need to purchase the game separately.
      </p>

      <div className="collection-table-wrap">
        <table className="collection-table">
          <thead>
            <tr>
              <th>Feature / Package</th>
              <th>The Goodtime State Box</th>
              <th><Link href="/news/gta-6-collectors-edition/">Collector&apos;s Edition</Link></th>
              <th><Link href="/news/gta-6-deluxe-edition/">Deluxe Edition</Link></th>
              <th><Link href="/news/gta-6-price/">Standard Game</Link></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Retail Price</strong></td>
              <td>$399.99</td>
              <td>$149.99 – $199.99 (Est.)</td>
              <td>$89.99 – $99.99</td>
              <td>$69.99</td>
            </tr>
            <tr>
              <td><strong>Game Disc / Digital Key</strong></td>
              <td>❌ Not Included</td>
              <td>✅ Included</td>
              <td>✅ Included</td>
              <td>✅ Included</td>
            </tr>
            <tr>
              <td><strong>Oakley Sunglasses &amp; Cap</strong></td>
              <td>✅ Included</td>
              <td>❌ No</td>
              <td>❌ No</td>
              <td>❌ No</td>
            </tr>
            <tr>
              <td><strong>Macca Figure &amp; Glassware</strong></td>
              <td>✅ Included</td>
              <td>❌ No</td>
              <td>❌ No</td>
              <td>❌ No</td>
            </tr>
            <tr>
              <td><strong>Full Leonida Map Poster</strong></td>
              <td>✅ Included</td>
              <td>✅ Included</td>
              <td>❌ Digital Only</td>
              <td>❌ No</td>
            </tr>
            <tr>
              <td><strong>Shipping Date</strong></td>
              <td>November 19, 2026</td>
              <td>November 19, 2026</td>
              <td>November 19, 2026</td>
              <td>November 19, 2026</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>How and Where to Pre-Order Before Supplies Run Out</h2>
      <p>
        Because this set is produced in strictly limited quantities, Rockstar Games has placed an order limit of <strong>one collection per customer / household</strong> on the Rockstar Store.
      </p>
      <ol style={{ paddingLeft: '20px', margin: '16px 0 24px' }}>
        <li>Visit the official <a href="https://store.rockstargames.com/merchandise/gtavi-goodtime-state-vice-city-collection" target="_blank" rel="noopener noreferrer">Rockstar Games Store product page</a>.</li>
        <li>Log in with your verified <strong>Rockstar Games Social Club account</strong>.</li>
        <li>Complete checkout with your regional shipping details ($399.99 + local tax/shipping).</li>
        <li>Your collector box will be prepared for dispatch to arrive at your door on the official release date of <strong>November 19, 2026</strong>.</li>
      </ol>

      <p>
        To prepare your gaming setup for launch, make sure to read our complete <Link href="/news/gta-6-pre-order/">GTA 6 Pre-Order guide</Link>, review the full list of <Link href="/trophies/">GTA 6 Trophies &amp; Achievements</Link>, or explore every verified location on our interactive <Link href="/map/">GTA 6 Leonida Map hub</Link>.
      </p>

      {/* FAQs Section */}
      <div className={styles.faqSection}>
        <h2>Frequently Asked Questions About the GTA 6 Vice City Collection</h2>

        <div className={styles.faqItem}>
          <h3>Does the GTA 6 Vice City Collection come with the game?</h3>
          <p>
            No. The $399.99 Goodtime State – Vice City Collection is strictly a limited-edition physical merchandise set. The game itself (on PS5 or Xbox Series X/S) is sold separately.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>How much does The Goodtime State – Vice City Collection cost?</h3>
          <p>
            The collection retails for $399.99 in the United States and €399.99 in European markets, plus applicable local sales tax and shipping charges.
          </p>
        </div>
        
        <div className={styles.faqItem}>
          <h3>When will the Vice City Collection ship?</h3>
          <p>
            Orders are scheduled to ship out in November 2026 to coincide with the worldwide release of Grand Theft Auto VI on November 19, 2026.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Who is Macca the Gator in GTA 6?</h3>
          <p>
            Macca the Gator is a fictional children&apos;s cartoon star and tourism mascot within GTA 6&apos;s state of Leonida, representing the Florida-inspired swamp culture and Everglades wildlife.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Will the Vice City Collection be sold in retail stores?</h3>
          <p>
            Currently, Rockstar Games has made the collection exclusive to the online Rockstar Store while supplies last. It is not currently planned for standard physical retailers like GameStop or Amazon.
          </p>
        </div>
      </div>
    </ImageLightbox>
  )
};
