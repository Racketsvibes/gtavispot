import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImageLightbox from '@/components/ui/ImageLightbox';
import { ArticleData } from '../newsContent';
import styles from '../../app/news/[slug]/page.module.css';

export const gta6Timeline: ArticleData = {
  title: 'GTA 6 Timeline: Complete Development & Trailer History',
  metaDescription: 'Track the official GTA 6 timeline from early pre-production to the November 19, 2026 launch date. View the history of trailers, leaks, and delays.',
  focusKeyword: 'gta 6 timeline',
  h1: 'The Official GTA 6 Timeline: Every Announcement in Order',
  publishedDate: 'August 30, 2026',
  modifiedDate: 'August 30, 2026',
  author: 'Marcus Vance',
  featureImage: '/images/gta-6-grand-theft-auto-6-official-extended-gameplay.webp',
  featureImageAlt: 'Grand Theft Auto VI official timeline banner with sunset city background and gameplay logo.',
  content: (
    <ImageLightbox>
      <p>
        Tracking the <strong>gta 6 timeline</strong> is the best way to understand how the most anticipated game of the decade has evolved. 
        From pre-production following GTA V's launch to multiple delays, Rockstar Games has maintained a strict schedule of reveals. 
        Here is the chronological breakdown of every trailer, milestone, and update leading to release.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Essential Milestones</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Development Start:</strong> Active production began in 2018 after Red Dead Redemption 2 wrapped up.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Trailer 1 Debut:</strong> December 5, 2023, breaking the record for the most-viewed gaming video in 24 hours.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Release Date Lock:</strong> Confirmed for November 19, 2026 on PlayStation 5 and Xbox Series X|S.</span>
          </li>
        </ul>
      </div>

      <h2>How did the GTA 6 development start?</h2>
      <p>
        The early phases of the <strong>gta 6 timeline</strong> began shortly after the original GTA V launch. 
        Former developers confirm that Rockstar set up pre-production benches to coordinate ideas for the next map. 
        Full production shifted into gear after the release of Red Dead Redemption 2 in 2018.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', margin: '2.5rem 0', borderLeft: '3px solid #3b1578', paddingLeft: '1.5rem' }}>
        {/* Checkpoint 2014 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>2014</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Concept & Pre-Production Begins</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            Following the release of Grand Theft Auto V on PlayStation 3 and Xbox 360, Rockstar organizers established early conceptual benches for the next installment.
          </p>
        </div>

        {/* Checkpoint 2018 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>2018</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Active Production Underway</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            Upon the completion and shipment of Red Dead Redemption 2, developer assets were reallocated to full active production on the next open-world sandbox.
          </p>
        </div>

        {/* Checkpoint Feb 2022 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>February 4, 2022</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Rockstar Officially Confirms Development</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            Rockstar Games officially confirmed that active development for the next entry in the Grand Theft Auto series was well underway via an official Newswire update.
          </p>
        </div>

        {/* Checkpoint Sep 2022 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>September 18, 2022</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Massive Early Footage Breach</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            An anonymous intrusion led to the leak of 90 early gameplay clips showing raw developer test files, confirming the Vice City setting and the dual protagonists, Jason and Lucia.
          </p>
          <div style={{ marginTop: '0.75rem' }}>
            <Link href="/news/gta-6-leaks-timeline/" className={styles.pinnedCta} style={{ display: 'inline-flex', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
              View Leaks Timeline
            </Link>
          </div>
        </div>
      </div>

      <h2>When did the official announcement phase start?</h2>
      <p>
        The official reveals started in late 2023 with the release of the record-breaking first trailer. 
        Since then, the marketing campaign has expanded with trailers, covers, and gameplay showcases, altering our expectations of the <strong>gta 6 timeline</strong>.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', margin: '2.5rem 0', borderLeft: '3px solid #3b1578', paddingLeft: '1.5rem' }}>
        {/* Checkpoint Dec 5, 2023 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>December 5, 2023</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Trailer 1 Breaks YouTube Records</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            Rockstar Games published the first official Trailer 1, generating 93 million views in 24 hours and establishing the initial 2025 launch target.
          </p>
          <div style={{ marginTop: '0.75rem' }}>
            <Link href="/news/gta-6-trailer-3/" className={styles.pinnedCta} style={{ display: 'inline-flex', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
              View Trailer Details
            </Link>
          </div>
        </div>

        {/* Checkpoint May 2, 2025 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>May 2, 2025</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>First Delay Pushes Target to 2026</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            Parent publisher Take-Two Interactive announced the first official delay during an earnings call, revising the release window to spring 2026.
          </p>
          <div style={{ marginTop: '0.75rem' }}>
            <Link href="/news/gta-6-delay/" className={styles.pinnedCta} style={{ display: 'inline-flex', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
              Read Delay Analysis
            </Link>
          </div>
        </div>

        {/* Checkpoint May 6, 2025 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>May 6, 2025</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Trailer 2 and Website Overhaul</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            The second official preview trailer dropped, showing the updated character profiles for Jason and Lucia alongside six distinct regions of Leonida.
          </p>
        </div>

        {/* Checkpoint Nov 6, 2025 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>November 6, 2025</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Final Launch Locked for November 19, 2026</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            A second schedule update locked the final worldwide release date for November 19, 2026, on consoles to ensure maximum polish.
          </p>
          <div style={{ marginTop: '0.75rem' }}>
            <Link href="/news/gta-6-november-release/" className={styles.pinnedCta} style={{ display: 'inline-flex', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
              Read Launch Details
            </Link>
          </div>
        </div>
      </div>

      <h2>How is the launch campaign progressing in 2026?</h2>
      <p>
        As the release date draws near, marketing campaigns and retail plans are locking into place. 
        Recent technical deep dives verify the features of Vice City's gameplay ahead of the final launch stretch.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', margin: '2.5rem 0', borderLeft: '3px solid #3b1578', paddingLeft: '1.5rem' }}>
        {/* Checkpoint May 21, 2026 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>May 21, 2026</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>November 19 Release Reconfirmed</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            Take-Two Interactive's quarterly earnings call reconfirmed that development has completed critical benchmarks and the release date remains firmly locked.
          </p>
          <div style={{ marginTop: '0.75rem' }}>
            <Link href="/news/gta-6-release-date/" className={styles.pinnedCta} style={{ display: 'inline-flex', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
              Read Release Date Info
            </Link>
          </div>
        </div>

        {/* Checkpoint June 18, 2026 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>June 18, 2026</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Official Cover Art Revealed</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            Rockstar Games unveiled the official cover art, starting physical game pre-orders at retail stores globally.
          </p>
          <div style={{ marginTop: '0.75rem' }}>
            <Link href="/news/gta-6-artworks/" className={styles.pinnedCta} style={{ display: 'inline-flex', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
              View Artworks Gallery
            </Link>
          </div>
        </div>

        {/* Checkpoint Aug 28, 2026 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>August 28, 2026</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Netflix Extended Look Showcase</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            A surprise 26-minute gameplay demonstration aired on Netflix, claiming the No. 1 trending spot and boosting mobile app traffic.
          </p>
          <div style={{ marginTop: '0.75rem' }}>
            <Link href="/news/gta-6-netflix-viewership/" className={styles.pinnedCta} style={{ display: 'inline-flex', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
              Read Viewership Stats
            </Link>
          </div>
        </div>

        {/* Checkpoint Aug 29, 2026 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>August 29, 2026</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Gameplay Mechanics & Grid Unlocked</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            A deep-dive analysis of physical details was published, showcasing 37 high-definition screenshots of police chases, combat, and rollovers.
          </p>
          <div style={{ marginTop: '0.75rem' }}>
            <Link href="/gta-6-gameplay/" className={styles.pinnedCta} style={{ display: 'inline-flex', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
              Explore Gameplay Deep Dive
            </Link>
          </div>
        </div>

        {/* Checkpoint Aug 30, 2026 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>August 30, 2026</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Rockstar Crews & Social Club Update</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            Social Club updated features for crew creation, custom emblem uploads, and matchmaking permissions ahead of the winter launch.
          </p>
          <div style={{ marginTop: '0.75rem' }}>
            <Link href="/news/rockstar-crews/" className={styles.pinnedCta} style={{ display: 'inline-flex', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
              Read Crews Guide
            </Link>
          </div>
        </div>
      </div>

      <h2>How do we verify the official sources?</h2>
      <p>
        Every date and event on this list is cross-referenced with official Take-Two Interactive financial schedules and Rockstar Games press alerts. 
        You can check the original resources directly on the official <a href="https://socialclub.rockstargames.com/" target="_blank" rel="noopener noreferrer">Rockstar Games Social Club</a> portal.
      </p>

      <table>
        <thead>
          <tr>
            <th>Event Group</th>
            <th>Number of Milestones</th>
            <th>Primary Sources Verified</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Development Phase</td>
            <td>4 milestones</td>
            <td>Rockstar Newswire, Take-Two Earnings calls, developer profiles</td>
          </tr>
          <tr>
            <td>Announcements & Trailers</td>
            <td>4 milestones</td>
            <td>Rockstar YouTube channel, official website, SEC financial filings</td>
          </tr>
          <tr>
            <td>Pre-Launch Campaign</td>
            <td>5 milestones</td>
            <td>Netflix streaming data, Social Club portals, retail pre-order logs</td>
          </tr>
        </tbody>
      </table>

      <p>
        As we approach the final launch steps, keep this <strong>gta 6 timeline</strong> bookmarked to track the remaining countdown events.
      </p>

      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions About the GTA 6 Timeline</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>What is the official release date of GTA 6?</h3>
          <p className={styles.faqAnswer}>
            The official release date is locked for November 19, 2026, launching on PlayStation 5 and Xbox Series X|S.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>How many times has GTA 6 been delayed?</h3>
          <p className={styles.faqAnswer}>
            The game has been officially delayed twice: first from late 2025 to spring 2026, and then to its final November 2026 release date.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>When was the first trailer for GTA 6 released?</h3>
          <p className={styles.faqAnswer}>
            Trailer 1 was officially published on December 5, 2023, showcasing the game's setting and the protagonists Lucia and Jason.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Will GTA 6 launch on PC on November 19, 2026?</h3>
          <p className={styles.faqAnswer}>
            No, the console release is prioritized for November 19, 2026. The PC release window is expected to follow in 2027.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Where can I track the official timeline announcements?</h3>
          <p className={styles.faqAnswer}>
            You can verify dates directly through the Rockstar Games Newswire or by tracking our curated development timeline.
          </p>
        </div>
      </section>
    </ImageLightbox>
  ),
};
