import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImageLightbox from '@/components/ui/ImageLightbox';
import { GuideArticleData } from '../guidesContent';
import styles from '../../app/tech/[slug]/page.module.css';

const GuideCTAButton = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <div style={{ margin: '1.25rem 0 1.75rem 0' }}>
      <Link href={href} className="guide-cta-btn">
        <span>{children}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </Link>
    </div>
  );
};

export const characterCustomization: GuideArticleData = {
  title: 'GTA 6 Character Customization: Outfits, Tattoos & Style',
  metaDescription: 'The complete GTA 6 character customization guide — clothing stores, barber shops, tattoo parlors, and the best Lucia & Jason outfits across Vice City and Leonida.',
  focusKeyword: 'GTA 6 character customization',
  h1: 'GTA 6 Character Customization: Outfits, Tattoos & Appearance Guide',
  publishedDate: 'September 28, 2026',
  modifiedDate: 'September 28, 2026',
  author: 'Marcus Vance',
  featureImage: '/images/guides/gta-6-character-customization.webp',
  featureImageAlt: 'GTA 6 character customization menu with appearance, hair, clothing, tattoos and accessories options beside a stylized Vice City character',
  content: (
    <ImageLightbox>
      <style dangerouslySetInnerHTML={{__html: `
        .guide-cta-btn {
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
        .guide-cta-btn:hover,
        .guide-cta-btn:focus,
        .guide-cta-btn:active,
        .guide-cta-btn:visited {
          text-decoration: none !important;
          color: #ffffff !important;
        }
        .guide-cta-btn span { text-decoration: none !important; }
        .guide-cta-btn:hover {
          background: linear-gradient(135deg, #d6246e, #f58634);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(245, 134, 52, 0.4);
        }
        .cc-table-wrap {
          overflow-x: auto;
          margin: 1.75rem 0;
          border-radius: 12px;
          border: 1px solid var(--border, #e2e8f0);
          box-shadow: 0 4px 14px rgba(0,0,0,0.04);
        }
        .cc-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.95rem;
          text-align: left;
          background: var(--bg-surface, #ffffff);
        }
        .cc-table th {
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
        .cc-table td {
          padding: 12px 16px;
          border-bottom: 1px solid var(--border-light, #f1f5f9);
          color: var(--text-secondary, #334155);
          vertical-align: middle;
        }
        .cc-table tr:last-child td { border-bottom: none; }
        .cc-table td:first-child { font-weight: 700; color: var(--text-primary, #0f172a); }
        .cc-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 16px;
          margin: 24px 0;
        }
        .cc-fig { margin: 0; }
        .cc-cap {
          text-align: center;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 6px;
          font-family: var(--font-ui), sans-serif;
        }
      `}} />

      <p>
        Half the fun of Vice City is looking the part. <strong>GTA 6 character customization</strong> lets you reshape Jason and Lucia from head to toe — outfits, haircuts, tattoos, and accessories — using a network of clothing stores, barber shops, and tattoo parlors scattered across the state of Leonida.
      </p>
      <p>
        This guide breaks down every customization type, where to find each store, and how to build standout looks for both protagonists.
      </p>

      {/* Quick Answer Block for Google AI Overviews and Snippets */}
      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Answer: GTA 6 Customization</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>What you can change:</strong> outfits, hairstyles, facial hair, tattoos, nails, and accessories for both Jason and Lucia.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Where:</strong> clothing stores, barber/salon shops, and tattoo parlors across Vice City and greater Leonida.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Two wardrobes:</strong> Jason and Lucia each have separate outfits, saved to their own safehouse wardrobes.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Bonus looks:</strong> pre-order editions include the Vintage Vice City Pack with exclusive outfits.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Note:</strong> exact store counts are still being confirmed by Rockstar ahead of the November 19, 2026 launch.</span>
          </li>
        </ul>
      </div>

      <h2>What Can You Customize in GTA 6?</h2>
      <p>
        GTA 6 offers the deepest appearance system in the series so far. Both protagonists can be styled independently, so <Link href="/story/lucia/">Lucia</Link> and <Link href="/story/jason/">Jason</Link> can each have a completely different vibe — beach-casual, high-fashion, or full crime-lord.
      </p>
      <p>
        Here&apos;s what you can change across the game&apos;s customization shops:
      </p>

      <div className="cc-table-wrap">
        <table className="cc-table">
          <thead>
            <tr>
              <th>Customization</th>
              <th>Where</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Outfits &amp; Clothing</td>
              <td>Clothing stores</td>
              <td>Tops, pants, dresses, jackets, shoes, seasonal drops</td>
            </tr>
            <tr>
              <td>Hairstyles</td>
              <td>Barber shops &amp; salons</td>
              <td>Cuts, colors, braids, extensions</td>
            </tr>
            <tr>
              <td>Facial Hair &amp; Makeup</td>
              <td>Barber shops &amp; salons</td>
              <td>Beards, stubble, lashes, lip and eye makeup</td>
            </tr>
            <tr>
              <td>Tattoos</td>
              <td>Tattoo parlors</td>
              <td>Arms, chest, back, neck, hands</td>
            </tr>
            <tr>
              <td>Nails</td>
              <td>Salons</td>
              <td>Colors, patterns, lengths</td>
            </tr>
            <tr>
              <td>Accessories</td>
              <td>Clothing stores</td>
              <td>Sunglasses, jewelry, watches, hats, bags</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Where Are the Clothing Stores in GTA 6?</h2>
      <p>
        Clothing stores are the backbone of <strong>GTA 6 outfits</strong>, and they&apos;re spread across every major district of Vice City and the wider map. Expect everything from budget beachwear shops on Ocean Beach to high-end boutiques catering to Leonida&apos;s elite.
      </p>
      <p>
        Each store stocks a different style, so building a full wardrobe means shopping around. You can save complete outfits to your wardrobe and swap between them at any safehouse.
      </p>

      <div className="cc-gallery">
        <figure className="cc-fig">
          <Image
            src="/images/guides/gta-6-clothing-store-outfits.webp"
            alt="GTA 6 clothing store style — a character in a leopard-print fur coat posing by a custom art car in Vice City"
            width={720}
            height={560}
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.featureImage}
          />
          <figcaption className="cc-cap">Bold designer looks from Vice City&apos;s high-end boutiques. (Official Rockstar Games GTA 6 image.)</figcaption>
        </figure>
        <figure className="cc-fig">
          <Image
            src="/images/guides/gta-6-jason-outfit-style.webp"
            alt="GTA 6 Jason outfit — Jason in a linen blazer and tinted glasses holding a tropical-pattern weapon at sunset"
            width={720}
            height={405}
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.featureImage}
          />
          <figcaption className="cc-cap">Jason&apos;s Vice City style, complete with a custom weapon finish. (Official Rockstar Games GTA 6 image.)</figcaption>
        </figure>
      </div>

      <h2>Where to Get Haircuts: Barber Shops &amp; Salons</h2>
      <p>
        For hair and beauty, you&apos;ll visit barber shops and salons like <strong>Sara&apos;s Unisex Salon</strong>. These are your one-stop shops for haircuts, coloring, facial hair, makeup, and nail work — everything that changes your character from the neck up.
      </p>
      <p>
        Salons are also one of the most detailed interiors in the game, packed with the kind of ambient detail Rockstar is known for. Lucia&apos;s hairstyles in particular have a huge range, from sleek ponytails to bold colored looks.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/guides/gta-6-saras-unisex-salon-hairstyle.webp"
          alt="GTA 6 Sara's Unisex Salon interior — Lucia in sunglasses getting a manicure at a nail and hair salon in Vice City"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Sara&apos;s Unisex Salon — hairstyles, makeup, and nail customization in one stop. (Official Rockstar Games GTA 6 screenshot.)
        </div>
      </div>

      <h2>Where Are the Tattoo Shops in GTA 6?</h2>
      <p>
        Tattoo parlors like <strong>Electric Fang Tattoo</strong> let you ink Jason and Lucia across the arms, chest, back, neck, and hands. Tattoos are permanent to a save unless you visit a parlor to change them, so they&apos;re a great way to lock in a signature look.
      </p>
      <p>
        Expect a mix of Vice City styles — old-school Americana, tribal, script, and neon-inspired designs that fit the game&apos;s 80s-meets-modern aesthetic.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/guides/gta-6-electric-fang-tattoo-shop.webp"
          alt="GTA 6 tattoo shop — the neon Electric Fang Tattoo wolf sign glowing outside a parlor at night in Vice City"
          width={1200}
          height={1050}
          sizes="(max-width: 768px) 100vw, 600px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Electric Fang Tattoo — one of Leonida&apos;s neon-lit ink parlors. (Official Rockstar Games GTA 6 screenshot.)
        </div>
      </div>

      <h2>Best Lucia and Jason Outfits</h2>
      <p>
        Because the two leads share the spotlight, the community is already hunting for the best <strong>Lucia outfits</strong> and <strong>Jason outfits</strong>. Lucia leans into bold, glamorous Vice City fashion — sequined dresses, fur coats, and statement sunglasses. Jason suits a cooler, laid-back look — linen blazers, tropical shirts, and tinted glasses.
      </p>
      <p>
        The best approach is to build one dressy nightlife outfit and one practical heist outfit per character, then switch based on the mission. Save both to your wardrobe so you&apos;re never caught overdressed for a shootout.
      </p>

      <GuideCTAButton href="/news/gta-6-pre-order/">
        See Pre-Order Editions &amp; the Vintage Vice City Pack
      </GuideCTAButton>

      <h2>Do Pre-Order Bonuses Include Exclusive Outfits?</h2>
      <p>
        Yes. Pre-order and upgraded editions bundle cosmetic bonuses, including the <strong>Vintage Vice City Pack</strong>, which adds exclusive outfits and vehicle looks. If collecting rare cosmetics matters to you, it&apos;s worth checking which edition includes them before launch.
      </p>
      <p>
        For the full breakdown of what each edition includes, read our <Link href="/news/gta-6-ultimate-edition-vs-standard/">GTA 6 editions comparison</Link> and the <Link href="/news/gta-6-price/">GTA 6 price guide</Link>.
      </p>

      {/* Key Takeaways for GEO / Generative Engines */}
      <h2>Key Takeaways</h2>
      <ul style={{ paddingLeft: '20px', margin: '16px 0 24px', lineHeight: 1.7 }}>
        <li><strong>GTA 6 character customization</strong> covers outfits, hair, facial hair, tattoos, nails, and accessories.</li>
        <li>Style your look at <strong>clothing stores, barber shops/salons</strong> (like Sara&apos;s Unisex Salon), and <strong>tattoo parlors</strong> (like Electric Fang Tattoo).</li>
        <li><strong>Jason and Lucia</strong> have separate wardrobes saved to their safehouses.</li>
        <li>Build one nightlife outfit and one practical heist outfit per character for flexibility.</li>
        <li><strong>Pre-order editions</strong> add exclusive looks via the Vintage Vice City Pack.</li>
      </ul>

      <p>
        Ready to plan the rest of your playthrough? Explore the full <Link href="/guides/">GTA 6 guides hub</Link>, map every district on the <Link href="/map/">interactive Leonida map</Link>, or meet the cast in our <Link href="/story/gta-6-characters/">GTA 6 characters guide</Link>.
      </p>

      {/* FAQs Section — classNames match the FAQ schema parser */}
      <div className={styles.faqSection}>
        <h2>Frequently Asked Questions: GTA 6 Customization</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Can you customize your character in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Yes. You can customize both protagonists, Jason and Lucia, with different outfits, hairstyles, facial hair, tattoos, nails, and accessories bought from stores across Vice City and the state of Leonida.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Where are the clothing stores in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Clothing stores are spread across every major district of Vice City and the wider map, ranging from budget beachwear shops to high-end designer boutiques. Each stocks a different style, and outfits save to your wardrobe.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Where can you get tattoos in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Tattoos are applied at tattoo parlors such as Electric Fang Tattoo. You can ink your character&apos;s arms, chest, back, neck, and hands, and change designs later by returning to a parlor.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Can you change your hairstyle in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Yes. Barber shops and salons like Sara&apos;s Unisex Salon let you change haircuts, hair color, facial hair, makeup, and nails for both Jason and Lucia.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Do Jason and Lucia share the same outfits?</h3>
          <p className={styles.faqAnswer}>
            No. Each protagonist has their own separate wardrobe saved to their safehouse, so you can give Jason and Lucia completely different styles.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Are there exclusive outfits in GTA 6 pre-orders?</h3>
          <p className={styles.faqAnswer}>
            Yes. Pre-order and upgraded editions include cosmetic bonuses such as the Vintage Vice City Pack, which adds exclusive outfits and vehicle looks not available in the standard edition at launch.
          </p>
        </div>
      </div>
    </ImageLightbox>
  )
};
