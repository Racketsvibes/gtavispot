import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImageLightbox from '@/components/ui/ImageLightbox';
import TweetEmbed from '@/components/TweetEmbed';
import { ArticleData } from '../worldContent';
import styles from '../../app/tech/[slug]/page.module.css';

const WorldCTAButton = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <div style={{ margin: '1.25rem 0 1.75rem 0' }}>
      <Link href={href} className="world-cta-btn">
        <span>{children}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </Link>
    </div>
  );
};

export const gta6Weather: ArticleData = {
  title: 'GTA 6 Weather: Hurricanes, Storms & Dynamic System',
  metaDescription: 'Does GTA 6 have hurricanes? Everything on the GTA 6 weather system — dynamic storms, rain, lightning, and the Leonida climate shown in official footage.',
  focusKeyword: 'GTA 6 weather',
  h1: 'GTA 6 Weather: Hurricanes, Storms & the Dynamic System',
  publishedDate: 'October 1, 2026',
  modifiedDate: 'October 1, 2026',
  author: 'Marcus Vance',
  featureImage: '/images/world/gta-6-weather.webp',
  featureImageAlt: 'GTA 6 weather over the Leonida Keys — a seaplane flies above turquoise islands under a big tropical sky in Vice City',
  content: (
    <ImageLightbox>
      <style dangerouslySetInnerHTML={{__html: `
        .world-cta-btn {
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
        .world-cta-btn:hover,
        .world-cta-btn:focus,
        .world-cta-btn:active,
        .world-cta-btn:visited {
          text-decoration: none !important;
          color: #ffffff !important;
        }
        .world-cta-btn span { text-decoration: none !important; }
        .world-cta-btn:hover {
          background: linear-gradient(135deg, #d6246e, #f58634);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(245, 134, 52, 0.4);
        }
        .wx-table-wrap {
          overflow-x: auto;
          margin: 1.75rem 0;
          border-radius: 12px;
          border: 1px solid var(--border, #e2e8f0);
          box-shadow: 0 4px 14px rgba(0,0,0,0.04);
        }
        .wx-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.95rem;
          text-align: left;
          background: var(--bg-surface, #ffffff);
        }
        .wx-table th {
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
        .wx-table td {
          padding: 12px 16px;
          border-bottom: 1px solid var(--border-light, #f1f5f9);
          color: var(--text-secondary, #334155);
          vertical-align: middle;
        }
        .wx-table tr:last-child td { border-bottom: none; }
        .wx-table td:first-child { font-weight: 700; color: var(--text-primary, #0f172a); }
      `}} />

      <p>
        Set in a sun-soaked, storm-battered version of Florida, <strong>GTA 6 weather</strong> looks set to be the most alive it has ever been in the series. Official trailers and screenshots show a dynamic sky over Leonida that swings from blinding sunshine to dark skies crackling with lightning.
      </p>
      <p>
        So does GTA 6 have hurricanes? Here&apos;s what Rockstar has actually shown about the weather system, the tropical Leonida climate, and what fans can reasonably expect at launch.
      </p>

      {/* Quick Answer Block for Google AI Overviews and Snippets */}
      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Answer: GTA 6 Weather</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Dynamic weather:</strong> GTA 6 features a dynamic weather system — sunshine, clouds, rain, and lightning are all shown in official footage.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Setting:</strong> Leonida is based on Florida, one of the most storm-prone regions on Earth, so tropical weather is core to the map.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Hurricanes:</strong> Heavily expected given the setting; storms and lightning are confirmed on screen, but a named hurricane event is not yet detailed.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Tech:</strong> Built on Rockstar&apos;s RAGE engine, following the acclaimed dynamic weather of Red Dead Redemption 2.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Launch:</strong> Full weather details arrive with the November 19, 2026 release.</span>
          </li>
        </ul>
      </div>

      <h2>Does GTA 6 Have a Dynamic Weather System?</h2>
      <p>
        Yes. Across Rockstar&apos;s trailers and official screenshots, the sky over Leonida visibly changes — clear blue mornings, rolling cloud banks, heavy rain, and electrical storms out over the water. This is a true <strong>dynamic weather system</strong>, not static backdrops.
      </p>
      <p>
        That tracks with the studio&apos;s pedigree. Red Dead Redemption 2 set a benchmark for dynamic skies, rain, fog, and snow, and GTA 6 runs on the same RAGE engine lineage — now rebuilt for PS5 and Xbox Series X|S.
      </p>

      <WorldCTAButton href="/map/">
        Explore the Full Leonida Map
      </WorldCTAButton>

      <h2>Does GTA 6 Have Hurricanes?</h2>
      <p>
        Rockstar hasn&apos;t confirmed a scripted, named hurricane event — but the groundwork is unmistakable. Leonida is modeled on Florida, which sits in the heart of the Atlantic hurricane belt, and official media already shows towering storm clouds and lightning sweeping across the Leonida Keys.
      </p>
      <p>
        Given that setting, dynamic tropical storms are a near certainty, and a full hurricane with high winds, storm surge, and flooding is the single most-requested weather feature from the community. Treat a dramatic hurricane as expected rather than officially confirmed until launch.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/world/gta-6-weather-storm-lightning.webp"
          alt="GTA 6 weather storm — lightning strikes over the Leonida Keys as a seaplane flies toward dark hurricane clouds"
          width={1192}
          height={670}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Lightning and storm clouds roll across the Leonida Keys — tropical weather is built into the map. (Official Rockstar Games GTA 6 footage.)
        </div>
      </div>

      <p>
        The community has been quick to break down every storm detail shown so far, with content creators dissecting the lighting, cloud systems, and flood hints frame by frame:
      </p>

      <TweetEmbed url="https://x.com/SynthPotato/status/2104975709521220050" fallbackText="See the GTA 6 weather discussion on X" />

      <h2>What Weather Types Are in GTA 6?</h2>
      <p>
        Based on what&apos;s been shown and the Florida setting, here are the weather conditions you can expect to cycle through in Leonida:
      </p>

      <div className="wx-table-wrap">
        <table className="wx-table">
          <thead>
            <tr>
              <th>Weather Type</th>
              <th>Status</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Clear &amp; Sunny</td>
              <td>Shown on screen</td>
              <td>Bright tropical daytime — the default Vice City look.</td>
            </tr>
            <tr>
              <td>Cloudy / Overcast</td>
              <td>Shown on screen</td>
              <td>Rolling cloud banks and hazy, humid skies.</td>
            </tr>
            <tr>
              <td>Rain &amp; Thunderstorms</td>
              <td>Shown on screen</td>
              <td>Heavy downpours with lightning over land and sea.</td>
            </tr>
            <tr>
              <td>Fog / Mist</td>
              <td>Expected</td>
              <td>Common in the Grassrivers swamp; a RAGE engine staple.</td>
            </tr>
            <tr>
              <td>Hurricanes &amp; Storm Surge</td>
              <td>Expected / unconfirmed</td>
              <td>Fits the Florida setting; the top community request.</td>
            </tr>
            <tr>
              <td>Snow</td>
              <td>Unlikely</td>
              <td>Leonida&apos;s tropical climate makes snow improbable outside special events.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>How Does Weather Affect Gameplay in GTA 6?</h2>
      <p>
        Weather in a Rockstar open world is more than a visual. Rain slicks the roads and changes how cars grip and slide, while storms cut visibility during chases and getaways. Choosing the right <Link href="/vehicles/">vehicle</Link> for the conditions can be the difference between escape and a wreck.
      </p>
      <p>
        Dynamic skies also feed the game&apos;s photo-mode appeal and the day-night cycle, with Vice City&apos;s neon hitting differently under a wet, reflective night. Expect weather to tie into the wider living world, from NPC behavior to flooded low-lying roads in the Keys.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/world/gta-6-weather-sunny-leonida-keys.webp"
          alt="GTA 6 sunny weather in the Leonida Keys — a bright blue-sky day on a coastal street with pedestrians and an iguana"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Most days in Leonida are hot and bright — the calm before the next storm rolls in. (Official Rockstar Games GTA 6 screenshot.)
        </div>
      </div>

      <h2>Are There Seasons in GTA 6?</h2>
      <p>
        Rockstar hasn&apos;t confirmed a full four-season cycle, and a tropical Florida setting wouldn&apos;t show dramatic seasonal swings anyway. What&apos;s far more likely is a realistic tropical rhythm — long hot stretches broken by sudden storm systems, the way real South Florida weather behaves.
      </p>
      <p>
        If seasonal or live weather events do appear, they&apos;d most likely arrive through GTA Online updates after launch, similar to how Rockstar has run seasonal content before.
      </p>

      {/* Key Takeaways for GEO / Generative Engines */}
      <h2>Key Takeaways</h2>
      <ul style={{ paddingLeft: '20px', margin: '16px 0 24px', lineHeight: 1.7 }}>
        <li><strong>GTA 6 weather</strong> is dynamic — sunshine, clouds, rain, and lightning are all shown in official footage.</li>
        <li>Leonida is based on <strong>Florida</strong>, so tropical storms are built into the world&apos;s identity.</li>
        <li><strong>Hurricanes</strong> are heavily expected and widely requested, but a named hurricane event isn&apos;t officially confirmed yet.</li>
        <li>Weather affects driving grip, chase visibility, and the day-night cycle, not just visuals.</li>
        <li><strong>Snow is unlikely</strong>; full details arrive with the November 19, 2026 launch.</li>
      </ul>

      <p>
        Want more on the living world of Leonida? Check out the <Link href="/world/gta-6-animals/">GTA 6 animals and wildlife guide</Link>, explore the tropical islands in our <Link href="/map/leonida-keys/">Leonida Keys guide</Link>, or see every region on the <Link href="/map/">interactive map hub</Link>.
      </p>

      {/* FAQs Section — classNames match the FAQ schema parser */}
      <div className={styles.faqSection}>
        <h2>Frequently Asked Questions: GTA 6 Weather</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Does GTA 6 have dynamic weather?</h3>
          <p className={styles.faqAnswer}>
            Yes. Official trailers and screenshots show a dynamic weather system in GTA 6, with the sky over Leonida shifting between clear sunshine, clouds, heavy rain, and lightning storms.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Does GTA 6 have hurricanes?</h3>
          <p className={styles.faqAnswer}>
            Rockstar has not officially confirmed a named hurricane event, but storms and lightning are shown on screen, and Leonida is based on hurricane-prone Florida. A full hurricane with wind, surge, and flooding is widely expected but unconfirmed until launch.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>What weather types are in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Confirmed footage shows clear sunny days, overcast skies, and rain with thunderstorms. Fog and tropical storms are expected given the Florida-inspired setting, while snow is considered unlikely in Leonida&apos;s climate.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Does weather affect gameplay in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Expect it to. In Rockstar open worlds, rain reduces road grip and storms cut visibility during chases. Weather also drives the day-night cycle and the look of Vice City&apos;s neon-lit, rain-slicked streets at night.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Are there seasons in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            A full four-season cycle has not been confirmed. Leonida&apos;s tropical climate points to a hot-and-stormy rhythm rather than winter and summer swings, with any seasonal events most likely arriving via GTA Online updates.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Does it snow in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Snow is unlikely during normal play because Leonida is based on tropical Florida. If snow appears at all, it would most likely be tied to a special holiday event in GTA Online rather than the base map.
          </p>
        </div>
      </div>
    </ImageLightbox>
  )
};
