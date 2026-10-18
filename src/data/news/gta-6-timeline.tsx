import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImageLightbox from '@/components/ui/ImageLightbox';
import { ArticleData } from '../newsContent';
import styles from '../../app/news/[slug]/page.module.css';

const TimelineButton = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <div>
      <Link href={href} className="timeline-btn">
        <span>{children}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </Link>
    </div>
  );
};

export const gta6Timeline: ArticleData = {
  title: 'GTA 6 Timeline: Complete Development & Trailer History',
  metaDescription: 'Track the official GTA 6 timeline from early pre-production to the November 19, 2026 launch date. View the history of trailers, leaks, and delays.',
  focusKeyword: 'gta 6 timeline',
  h1: 'The Official GTA 6 Timeline: Every Announcement in Order',
  publishedDate: 'August 30, 2026',
  modifiedDate: 'October 18, 2026',
  author: 'Marcus Vance',
  featureImage: '/images/gta-6-grand-theft-auto-6-official-extended-gameplay.webp',
  featureImageAlt: 'Grand Theft Auto VI official timeline banner with sunset city background and gameplay logo.',
  content: (
    <ImageLightbox>
      <style dangerouslySetInnerHTML={{__html: `
        .timeline-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 16px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #ffffff !important;
          background: linear-gradient(135deg, #3b1578, #d6246e);
          border-radius: 20px;
          text-decoration: none !important;
          box-shadow: 0 2px 6px rgba(214, 36, 110, 0.25);
          transition: all 0.2s ease;
          font-family: var(--font-ui), "Barlow Condensed", sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          margin-top: 0.75rem;
          border: 1px solid transparent;
        }
        .timeline-btn:hover,
        .timeline-btn:focus,
        .timeline-btn:active,
        .timeline-btn:visited {
          text-decoration: none !important;
          color: #ffffff !important;
        }
        .timeline-btn span {
          text-decoration: none !important;
        }
        .timeline-btn:hover {
          background: linear-gradient(135deg, #d6246e, #f58634);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(245, 134, 52, 0.4);
        }
      `}} />

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
          <TimelineButton href="/news/gta-6-leaks-timeline/">
            View Leaks Timeline
          </TimelineButton>
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
          <TimelineButton href="/news/gta-6-trailer-3/">
            View Trailer Details
          </TimelineButton>
        </div>

        {/* Checkpoint May 2, 2025 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>May 2, 2025</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>First Delay Pushes Target to 2026</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            Parent publisher Take-Two Interactive announced the first official delay during an earnings call, revising the release window to spring 2026.
          </p>
          <TimelineButton href="/news/gta-6-delay/">
            Read Delay Analysis
          </TimelineButton>
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
          <TimelineButton href="/news/gta-6-november-release/">
            Read Launch Details
          </TimelineButton>
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
          <TimelineButton href="/news/gta-6-release-date/">
            Read Release Date Info
          </TimelineButton>
        </div>

        {/* Checkpoint June 18, 2026 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>June 18, 2026</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Official Cover Art Revealed</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            Rockstar Games unveiled the official cover art, starting physical game pre-orders at retail stores globally.
          </p>
          <TimelineButton href="/news/gta-6-artworks/">
            View Artworks Gallery
          </TimelineButton>
        </div>

        {/* Checkpoint Aug 28, 2026 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>August 28, 2026</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Netflix Extended Look Showcase</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            A surprise 26-minute gameplay demonstration aired on Netflix, claiming the No. 1 trending spot and boosting mobile app traffic.
          </p>
          <TimelineButton href="/news/gta-6-netflix-viewership/">
            Read Viewership Stats
          </TimelineButton>
        </div>

        {/* Checkpoint Aug 29, 2026 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>August 29, 2026</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Gameplay Mechanics & Grid Unlocked</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            A deep-dive analysis of physical details was published, showcasing 37 high-definition screenshots of police chases, combat, and rollovers.
          </p>
          <TimelineButton href="/gta-6-gameplay/">
            Explore Gameplay Deep Dive
          </TimelineButton>
        </div>

        {/* Checkpoint Aug 30, 2026 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>August 30, 2026</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Rockstar Crews & Social Club Update</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            Social Club updated features for crew creation, custom emblem uploads, and matchmaking permissions ahead of the winter launch.
          </p>
          <TimelineButton href="/news/rockstar-crews/">
            Read Crews Guide
          </TimelineButton>
        </div>

        {/* Checkpoint Sep 10, 2026 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>September 10, 2026</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Dazed "New Idols" Issue Hits Newsstands</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            Rockstar put GTA 6 on the cover of Dazed's autumn 2026 "New Idols" issue, revealed on August 26 and on sale internationally from September 10. 
            The feature presented seven official screenshots as a fashion editorial and carried an on-record Rockstar interview, the first time the studio 
            handed a fashion magazine a batch of its stills.
          </p>
        </div>

        {/* Checkpoint Sep 17, 2026 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>September 17, 2026</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>GTA VI: The Album Announced</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            Rockstar and Atlantic Records announced Grand Theft Auto VI: The Album: 34 original tracks, released on November 19 alongside the game. 
            Six singles went live the same day, including Travis Scott's "RHYNO" and Yung Lean's "That's It" with Future and Metro Boomin, and vinyl and CD 
            editions went on pre-order. Two more singles, Fuerza Regida's "Suzuki" and Cardi B's "Don't Chart", followed on October 9, bringing the named 
            total to eight of 34.
          </p>
          <TimelineButton href="/news/gta-6-soundtrack-album/">
            View Soundtrack Details
          </TimelineButton>
        </div>

        {/* Checkpoint Oct 1, 2026 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>October 1, 2026</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>ESRB Mature 17+ Rating Finalized</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            Rockstar replaced the long-standing Rating Pending badge on its official GTA VI site with the finalized ESRB Mature 17+ certificate, seven weeks 
            before launch. The listing carries the same seven content descriptors as GTA 5, an In-Game Purchases notice, and no "Users Interact" label, which 
            points to a single-player-only game at launch. Store pages in Europe, Australia, and New Zealand followed in the first days of October.
          </p>
          <TimelineButton href="/news/gta-6-age-rating/">
            Read Age Rating Guide
          </TimelineButton>
        </div>

        {/* Checkpoint Oct 2, 2026 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>October 2, 2026</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Miami Heat Announce "A Night in Vice City"</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            The Miami Heat announced a partnership with Rockstar Games for "A Night in Vice City" on November 18, 2026, the night before launch. The Heat host 
            the Milwaukee Bucks at Kaseya Center at 7:00 PM ET, playing under the Vice City name on a custom court in a brand-new uniform, with the game airing 
            nationally on ESPN and locally on Local 10.
          </p>
          <TimelineButton href="/news/miami-heat-vice-city-night-gta-6/">
            Read Vice City Night Details
          </TimelineButton>
        </div>

        {/* Checkpoint Oct 5, 2026 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>October 5, 2026</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>LOVE Magazine Issue 27 on Sale</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            LOVE magazine's Issue 27 went on sale on October 5, three days after the cover was announced. The original Rockstar illustration of Jason and Lucia 
            carries the tagline "America's Most Wanted" across six cover variants, and the issue sold out within minutes. Inside, Rockstar's writing team talks 
            about a decade of world-building and a more modest American Dream.
          </p>
          <TimelineButton href="/news/gta-6-love-magazine-cover-story/">
            Read LOVE Cover Story
          </TimelineButton>
        </div>

        {/* Checkpoint Oct 15, 2026 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>October 15, 2026</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Launch Trailer Released</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            Rockstar released the 90-second Grand Theft Auto VI Launch Trailer with no advance teaser, its third official trailer. Captured entirely in-game on 
            a PlayStation 5, it leans into Jason and Lucia's story and debuts Justice's new single "Flower in a Hurricane", featuring Tame Impala, SZA, and King 
            Gizzard and the Lizard Wizard. It passed 21 million views on Rockstar's channel in its first day.
          </p>
          <TimelineButton href="/news/gta-6-launch-trailer/">
            Watch Launch Trailer
          </TimelineButton>
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
            <td>11 milestones</td>
            <td>Netflix streaming data, Social Club portals, retail pre-order logs, ESRB/PEGI listings, magazine features, album announcements</td>
          </tr>
        </tbody>
      </table>

      <p>
        <strong>Last checked: October 18, 2026.</strong> The timeline now runs through the October 15 launch trailer, the finalized ESRB rating, the Miami Heat 
        partnership, and the Dazed, LOVE, and album milestones of September and October.
      </p>

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

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>When was GTA 6 officially rated by the ESRB?</h3>
          <p className={styles.faqAnswer}>
            Rockstar replaced the Rating Pending badge with the finalized ESRB Mature 17+ rating on October 1, 2026, about seven weeks before launch. The listing 
            carries the same seven content descriptors as GTA 5 plus an In-Game Purchases notice, and the missing "Users Interact" label points to a single-player-only 
            launch.
          </p>
        </div>
      </section>
    </ImageLightbox>
  ),
};
