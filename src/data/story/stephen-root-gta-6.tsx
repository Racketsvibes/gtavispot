import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImageLightbox from '@/components/ui/ImageLightbox';
import { StoryArticleData } from '../storyContent';
import styles from '../../app/story/[slug]/page.module.css';

const StoryCTAButton = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <div style={{ margin: '1.25rem 0 1.75rem 0' }}>
      <Link href={href} className="story-cta-btn">
        <span>{children}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </Link>
    </div>
  );
};

export const stephenRootGta6: StoryArticleData = {
  title: 'Stephen Root GTA 6: Brian Heder Voice Actor Confirmed (2026)',
  metaDescription: 'Is Stephen Root in GTA 6? Yes! Full breakdown on Stephen Root as Brian Heder in GTA 6, character role, leak confirmation, filmography & audio analysis.',
  focusKeyword: 'stephen root gta 6',
  h1: 'Stephen Root GTA 6: Voice Actor Confirmed for Brian Heder',
  publishedDate: 'September 17, 2026',
  modifiedDate: 'September 17, 2026',
  author: 'Qamar Farooq',
  featureImage: '/images/People/Brian%20Heder/stephen-root-gta-6-voice-actor.webp',
  videoSchema: {
    name: 'Stephen Root Confirmed in GTA 6 - Brian Heder Voice Actor Breakdown',
    description: 'Detailed analysis of Stephen Root joining Grand Theft Auto VI as Brian Heder, boatyard smuggler and landlord in Leonida Keys.',
    thumbnailUrl: [
      'https://img.youtube.com/vi/JIx1HQmCE6s/maxresdefault.jpg',
      'https://www.gtavispot.com/images/People/Brian%20Heder/stephen-root-gta-6-voice-actor.webp'
    ],
    uploadDate: '2026-09-17T00:00:00Z',
    duration: 'PT3M45S',
    contentUrl: 'https://youtu.be/JIx1HQmCE6s',
    embedUrl: 'https://www.youtube-nocookie.com/embed/JIx1HQmCE6s'
  },
  content: (
    <ImageLightbox>
      <style dangerouslySetInnerHTML={{__html: `
        .story-cta-btn {
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
        .story-cta-btn:hover,
        .story-cta-btn:focus,
        .story-cta-btn:active,
        .story-cta-btn:visited {
          text-decoration: none !important;
          color: #ffffff !important;
        }
        .story-cta-btn span {
          text-decoration: none !important;
        }
        .story-cta-btn:hover {
          background: linear-gradient(135deg, #d6246e, #f58634);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(245, 134, 52, 0.4);
        }

        /* Bio Layout: Card + In-Game Image Side-by-Side */
        .bio-section-layout {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 20px;
          align-items: stretch;
          margin: 2rem 0;
        }
        .bio-card-container {
          background: var(--bg-secondary, #f8fafc);
          border: 1.5px solid var(--border, #e2e8f0);
          border-radius: 16px;
          padding: 22px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .bio-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border, #e2e8f0);
        }
        .bio-card-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary, #0f172a);
          margin: 0;
          font-family: var(--font-ui), "Barlow Condensed", sans-serif;
          letter-spacing: 0.02em;
        }
        .bio-card-tag {
          background: rgba(214, 36, 110, 0.12);
          color: var(--brand-magenta, #d6246e);
          padding: 4px 10px;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .bio-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .bio-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .bio-label {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted, #64748b);
        }
        .bio-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary, #0f172a);
        }
        .bio-image-wrapper {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          border: 1.5px solid var(--border, #e2e8f0);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
          min-height: 280px;
        }
        .bio-image-wrapper img {
          object-fit: cover;
        }

        /* Evidence Cards Grid */
        .evidence-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin: 1.5rem 0;
        }
        .evidence-card {
          background: var(--bg-surface, #ffffff);
          border: 1px solid var(--border, #e2e8f0);
          border-radius: 12px;
          padding: 18px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .evidence-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
        }
        .evidence-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--brand-magenta, #d6246e);
          color: #fff;
          font-weight: 800;
          font-size: 0.85rem;
          margin-bottom: 10px;
        }
        .evidence-card h4 {
          margin: 0 0 8px 0;
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-primary, #0f172a);
          font-family: var(--font-ui), "Barlow Condensed", sans-serif;
        }
        .evidence-card p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--text-secondary, #475569);
          line-height: 1.5;
        }

        /* Scorecard Table */
        .scorecard-wrap {
          overflow-x: auto;
          margin: 1.75rem 0;
          border-radius: 12px;
          border: 1px solid var(--border, #e2e8f0);
          box-shadow: 0 4px 14px rgba(0,0,0,0.04);
        }
        .scorecard-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.92rem;
          text-align: left;
        }
        .scorecard-table th {
          background: #0f172a;
          color: #ffffff;
          padding: 14px 16px;
          font-weight: 700;
          letter-spacing: 0.03em;
        }
        .scorecard-table td {
          padding: 12px 16px;
          border-bottom: 1px solid var(--border, #e2e8f0);
          color: var(--text-secondary, #334155);
        }
        .scorecard-table tr:nth-child(even) td {
          background: rgba(0, 0, 0, 0.015);
        }
        .score-match {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #059669;
          font-weight: 700;
        }

        /* Video Embed */
        .video-container {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          border-radius: 16px;
          border: 1.5px solid var(--border, #e2e8f0);
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
          margin: 2rem 0;
          background: #000;
        }
        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        @media (max-width: 768px) {
          .bio-section-layout,
          .evidence-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />

      {/* Google AI Overview Hook / First 100 Words */}
      <p>
        The casting of <strong>Stephen Root in GTA 6</strong> marks the first officially confirmed Hollywood actor attached to Rockstar Games&apos; highly anticipated open-world title. Renowned character actor Stephen Root portrays <strong>Brian Heder</strong>, a veteran smuggler, boatyard proprietor, and key underworld contact based in the Leonida Keys. As players explore the southern waters of Vice City, <strong>stephen root gta 6</strong> delivers an authentic southern grit to Brian Heder&apos;s dialogue, coordinating vital waterborne contraband runs and safehouses for protagonists Jason and Lucia.
      </p>

      {/* Quick Answer Callout */}
      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Answer: Stephen Root in GTA 6</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Actor:</strong> Stephen Root (Emmy-nominated veteran star of <em>Barry</em>, <em>King of the Hill</em>, <em>Office Space</em>).</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>In-Game Character:</strong> <strong>Brian Heder</strong> – Leonida Keys boatyard operator, drug runner, and Jason&apos;s landlord.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Confirmation Status:</strong> <strong>Officially Confirmed</strong> as the first announced voice actor for Grand Theft Auto VI.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Gameplay Function:</strong> Supplies remote safehouse trailers, speedboats, and waterborne smuggling missions in southern Leonida.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Related Cast Guides:</strong> Read our comprehensive <Link href="/story/voice-actors/">GTA 6 voice actors cast list</Link> and <Link href="/story/gta-6-characters/">GTA 6 characters directory</Link>.</span>
          </li>
        </ul>
      </div>

      {/* Bio Section Card */}
      <h2>Stephen Root &amp; Brian Heder: Performer Profile</h2>
      <div className="bio-section-layout">
        <div className="bio-card-container">
          <div>
            <div className="bio-card-header">
              <h3 className="bio-card-title">Stephen Root</h3>
              <span className="bio-card-tag">Confirmed Performer</span>
            </div>
            <div className="bio-grid">
              <div className="bio-item">
                <span className="bio-label">GTA 6 Role</span>
                <span className="bio-value">Brian Heder</span>
              </div>
              <div className="bio-item">
                <span className="bio-label">Character Occupation</span>
                <span className="bio-value">Boatyard Owner &amp; Smuggler</span>
              </div>
              <div className="bio-item">
                <span className="bio-label">Key TV Roles</span>
                <span className="bio-value">Monroe Fuches (<em>Barry</em>)</span>
              </div>
              <div className="bio-item">
                <span className="bio-label">Iconic Voice Roles</span>
                <span className="bio-value">Bill &amp; Buck (<em>King of the Hill</em>)</span>
              </div>
              <div className="bio-item">
                <span className="bio-label">Cult Film Role</span>
                <span className="bio-value">Milton Waddams (<em>Office Space</em>)</span>
              </div>
              <div className="bio-item">
                <span className="bio-label">Primary Region</span>
                <span className="bio-value">Leonida Keys / Grassrivers</span>
              </div>
            </div>
          </div>
          <p style={{ margin: '14px 0 0 0', fontSize: '0.88rem', color: 'var(--text-muted, #64748b)' }}>
            Stephen Root provides full voice performance capture for Brian Heder in GTA 6, anchoring early-game logistics and safehouse progression.
          </p>
        </div>

        <div className="bio-image-wrapper">
          <Image
            src="/images/Brain_Herder_Voice_Actor/Brain_Herder_Voice_Actor_-_Stephen_Root.webp"
            alt="Stephen Root confirmed voice actor for Brian Heder in GTA 6"
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            priority
          />
        </div>
      </div>

      {/* Section 1: Who is Brian Heder in GTA 6 */}
      <h2>Who is Brian Heder in GTA 6? Character Role &amp; Story Lore</h2>
      <p>
        In <em>Grand Theft Auto VI</em>, <strong>Brian Heder</strong> is an entrenched rural criminal stationed across the waterways of the <Link href="/map/leonida-keys/">Leonida Keys</Link>. Unlike high-society cartel chieftains like <Link href="/story/gta-6-raul-bautista/">Raul Bautista</Link> or nightlife moguls like Boobie Ike, Heder represents the weathered, salt-of-the-earth black market infrastructure that keeps Leonida&apos;s coastal smuggling active.
      </p>
      <p>
        Brian Heder acts as a landlord and early-game benefactor for <Link href="/story/jason/">Jason Duval</Link>. He provides secluded trailer park safehouses where Jason and <Link href="/story/lucia/">Lucia Caminos</Link> can lay low away from Vice City police patrols and corrupt county deputies like Sheriff Cal Hampton. Beyond housing, Heder commands a commercial boatyard that serves as a front for narcotics warehousing, boat modifications, and high-stakes contraband drops across southern channels.
      </p>

      <div className={styles.galleryGrid}>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/GTAVI_Screenshots/People/Brian_Heder/Brian_Heder_01.webp"
            alt="Brian Heder talking with Jason Duval in GTA 6"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/GTAVI_Screenshots/People/Brian_Heder/Brian_Heder_02.webp"
            alt="Brian Heder boatyard safehouse in the Leonida Keys"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/GTAVI_Screenshots/People/Brian_Heder/Brian_Heder_03.webp"
            alt="Brian Heder speedboat contraband storage in GTA 6"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/GTAVI_Screenshots/People/Brian_Heder/Brian_Heder_04.webp"
            alt="Brian Heder character close-up in Grand Theft Auto VI"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
      </div>

      <StoryCTAButton href="/story/gta-6-characters/">
        Browse the Full GTA 6 Characters &amp; Cast Directory
      </StoryCTAButton>

      {/* Section 2: How Stephen Root Casting Was Confirmed */}
      <h2>Stephen Root GTA 6: How the Casting Was Officially Confirmed</h2>
      <p>
        The reveal that <strong>Stephen Root</strong> is in <em>Grand Theft Auto VI</em> sparked massive excitement across gaming communities, with discussions dominating <Link href="/news/gta-6-leaks/">GTA 6 Reddit forums</Link> and entertainment outlets. While Rockstar Games traditionally maintains fierce secrecy around voice talent, Root&apos;s involvement was confirmed through casting listings and production disclosures that matched in-game performance capture files.
      </p>

      <div className="evidence-grid">
        <div className="evidence-card">
          <div className="evidence-num">1</div>
          <h4>Official Casting Disclosure</h4>
          <p>
            Industry casting notices and credit registries verified Stephen Root as the performer behind Brian Heder, confirming his position as the first major veteran actor announced for GTA 6.
          </p>
        </div>

        <div className="evidence-card">
          <div className="evidence-num">2</div>
          <h4>Vocal Timber &amp; Dialect Match</h4>
          <p>
            Audio extractions from leaked developer builds and trailer background dialogues feature Root&apos;s trademark drawl—a raspy, slow-paced southern cadence recognizable from his five-decade career.
          </p>
        </div>

        <div className="evidence-card">
          <div className="evidence-num">3</div>
          <h4>Performance Capture Sessions</h4>
          <p>
            Facial mocap capture in Rockstar&apos;s New York recording studios translated Root&apos;s expressive facial nuances directly onto Brian Heder&apos;s weathered, sun-baked character model.
          </p>
        </div>

        <div className="evidence-card">
          <div className="evidence-num">4</div>
          <h4>Narrative Alignment with Fuches &amp; Strickland</h4>
          <p>
            Rockstar casting directors specifically sought an actor capable of balancing dark underworld manipulation with comedic southern eccentricities—Root&apos;s defining specialty.
          </p>
        </div>
      </div>

      {/* Video Embed Section with Structured Schema */}
      <h2>Video Breakdown: Stephen Root as Brian Heder</h2>
      <p>
        Watch this detailed breakdown examining Stephen Root&apos;s confirmed voice role as Brian Heder in GTA 6, his previous television history, and how his character connects to Jason and Lucia&apos;s criminal campaign:
      </p>

      <div className="video-container">
        <iframe
          src="https://www.youtube-nocookie.com/embed/JIx1HQmCE6s"
          title="Stephen Root in GTA 6 - Brian Heder Voice Actor Confirmed"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      {/* Section 3: Why Stephen Root is Perfect for GTA 6 */}
      <h2>Why Stephen Root is the Perfect Fit for Rockstar&apos;s Satirical World</h2>
      <p>
        Stephen Root is widely regarded as one of Hollywood&apos;s most versatile character actors. Over his 40-year career spanning television, cinema, and animation, Root has mastered characters that combine razor-sharp humor, moral ambiguity, and grounded menace—the exact ingredients that define the Grand Theft Auto narrative universe.
      </p>

      <ul>
        <li>
          <strong>Monroe Fuches in <em>Barry</em> (HBO):</strong> As the treacherous, manipulative handler of hitman Barry Berkman, Root earned widespread critical acclaim and Emmy nominations for playing a desperate, conniving underworld mentor. This character directly mirrors Brian Heder&apos;s role guiding Jason through high-risk contraband assignments.
        </li>
        <li>
          <strong>Buck Strickland &amp; Bill Dauterive in <em>King of the Hill</em>:</strong> Root voiced both the sleazy, corrupt propane tycoon Buck Strickland and the downtrodden Bill Dauterive for over a decade. His mastery of southern dialect and comic timing makes his portrayal of a Florida Keys boat smuggler feel completely organic.
        </li>
        <li>
          <strong>Milton Waddams in <em>Office Space</em>:</strong> Cult classic comedy demonstrated Root&apos;s legendary ability to turn eccentric, overlooked underdogs into unforgettable cultural icons.
        </li>
        <li>
          <strong>Gaston Means in <em>Boardwalk Empire</em>:</strong> Root portrayed a real-life corrupt investigator and fixer during the Prohibition era, proving his capability in period crime dramas.
        </li>
      </ul>

      {/* Career Comparison Scorecard */}
      <h2>Stephen Root Filmography vs. GTA 6 Brian Heder</h2>
      <div className="scorecard-wrap">
        <table className="scorecard-table">
          <thead>
            <tr>
              <th>Notable Project</th>
              <th>Character Portrayed</th>
              <th>Key Trait / Archetype</th>
              <th>Relevance to Brian Heder (GTA 6)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Barry (HBO)</strong></td>
              <td>Monroe Fuches</td>
              <td>Manipulative Criminal Handler</td>
              <td><span className="score-match">Direct Parallel</span> Mentors Jason in dangerous illegal runs</td>
            </tr>
            <tr>
              <td><strong>King of the Hill</strong></td>
              <td>Buck Strickland / Bill</td>
              <td>Corrupt Southern Boss / Drawl</td>
              <td><span className="score-match">Dialect Match</span> Authentic rural southern voice registry</td>
            </tr>
            <tr>
              <td><strong>Boardwalk Empire</strong></td>
              <td>Gaston Means</td>
              <td>Corrupt Fixer &amp; Wirepuller</td>
              <td><span className="score-match">Crime Synergy</span> Navigates law evasion &amp; contraband logistics</td>
            </tr>
            <tr>
              <td><strong>Office Space</strong></td>
              <td>Milton Waddams</td>
              <td>Eccentric Cult Legend</td>
              <td><span className="score-match">Satire Fit</span> Brings Rockstar&apos;s satirical dark comedy to life</td>
            </tr>
            <tr>
              <td><strong>Justified</strong></td>
              <td>Judge Mike Reardon</td>
              <td>Unorthodox Law Figure</td>
              <td><span className="score-match">Regional Grit</span> Captures backwoods Florida/Kentucky grit</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section 4: How Brian Heder Impacts Missions and Gameplay */}
      <h2>Gameplay &amp; Mission Impact: Working for Brian Heder</h2>
      <p>
        In our <Link href="/story/missions/">GTA 6 main missions walkthrough</Link>, Brian Heder serves as the central quest-giver for the initial chapter set in the Florida Keys. His assignments introduce players to essential mechanics:
      </p>
      <ul>
        <li>
          <strong>Waterborne Smuggling Runs:</strong> Navigating speedboats through foggy shallow mangrove swamps in the Grassrivers while avoiding coast guard patrol boats.
        </li>
        <li>
          <strong>Trailer Safehouse Upgrades:</strong> Unlocking new stash houses to store weapons, change outfits, and evade high-level police heat.
        </li>
        <li>
          <strong>Vehicle &amp; Boat Sourcing:</strong> Stealing specialized marine equipment and off-road trucks needed for heavy contraband transport.
        </li>
        <li>
          <strong>Local Intel &amp; Police Roadblock Warnings:</strong> Receiving radio tips on police checkpoints across the Overseas Highway connecting the Keys to Vice City.
        </li>
      </ul>

      <div className="bio-image-wrapper" style={{ height: '360px', margin: '2rem 0' }}>
        <Image 
          src="/images/GTAVI_Screenshots/People/Brian_Heder/Brian_Heder_02.webp" 
          alt="Brian Heder safehouse trailer coordination in GTA 6" 
          fill
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>

      <StoryCTAButton href="/story/voice-actors/">
        View the Complete GTA 6 Voice Actors &amp; Cast Breakdown
      </StoryCTAButton>

      {/* Frequently Asked Questions */}
      <h2>Frequently Asked Questions</h2>
      <div className={styles.faqSection}>
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Is Stephen Root in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Yes. Stephen Root is officially confirmed as a voice actor in Grand Theft Auto VI, portraying the character Brian Heder, a boatyard smuggler and landlord located in the Leonida Keys.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Who voices Brian Heder in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Brian Heder is voiced by veteran Emmy-nominated character actor Stephen Root, acclaimed for his roles in HBO&apos;s Barry, King of the Hill, Office Space, and Boardwalk Empire.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Who plays Brian Heder in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Stephen Root provides both the character voice acting and full-body performance motion capture for Brian Heder in GTA 6.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Is Stephen Root the first officially confirmed voice actor for GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Yes. While actors for Lucia (widely rumored as Manni L. Perez) and Jason (Dylan Rourke / Gregory Connors) remain unannounced by Rockstar Games, Stephen Root is the first veteran Hollywood actor officially confirmed for the cast.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>What is Brian Heder&apos;s role in the GTA 6 storyline?</h3>
          <p className={styles.faqAnswer}>
            Brian Heder serves as Jason Duval&apos;s landlord and early smuggling associate in the Leonida Keys. He provides the protagonists with trailer safehouses, coordinates speedboat contraband operations, and supplies logistical support against Leonard County police.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Did Stephen Root voice characters in previous GTA games?</h3>
          <p className={styles.faqAnswer}>
            No, GTA 6 marks Stephen Root&apos;s debut in the Grand Theft Auto franchise, bringing his seasoned character acting and iconic southern voice work to Rockstar Games for the first time.
          </p>
        </div>
      </div>

      {/* Final Paragraph with Focus Keyword */}
      <p>
        With Rockstar Games gearing up for launch, the addition of <strong>stephen root gta 6</strong> sets a high standard for narrative storytelling and character depth in Leonida. Whether orchestrating coastal boat heists or delivering hilarious, gritty dialogue from his Keys boatyard, Stephen Root&apos;s performance as Brian Heder cements GTA 6 as one of the richest voice casts in gaming history.
      </p>

      <StoryCTAButton href="/gta-6-timeline/">
        Explore the Full GTA 6 Development Timeline &amp; Release History
      </StoryCTAButton>

      {/* Inline Schema: VideoObject, Person, and ItemList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://www.gtavispot.com/story/stephen-root-gta-6/#person",
                "name": "Stephen Root",
                "jobTitle": "Actor / Voice Actor",
                "knowsAbout": ["Grand Theft Auto VI", "Barry", "King of the Hill", "Office Space", "Brian Heder"],
                "description": "Acclaimed American character actor officially confirmed as the voice actor for Brian Heder in Grand Theft Auto VI (GTA 6)."
              },
              {
                "@type": "VideoObject",
                "@id": "https://www.gtavispot.com/story/stephen-root-gta-6/#video",
                "name": "Stephen Root Confirmed in GTA 6 - Brian Heder Voice Actor Breakdown",
                "description": "Detailed analysis of Stephen Root joining Grand Theft Auto VI as Brian Heder, boatyard smuggler and landlord in Leonida Keys.",
                "thumbnailUrl": [
                  "https://img.youtube.com/vi/JIx1HQmCE6s/maxresdefault.jpg",
                  "https://www.gtavispot.com/images/People/Brian%20Heder/stephen-root-gta-6-voice-actor.webp"
                ],
                "uploadDate": "2026-09-17T00:00:00Z",
                "contentUrl": "https://youtu.be/JIx1HQmCE6s",
                "embedUrl": "https://www.youtube-nocookie.com/embed/JIx1HQmCE6s"
              },
              {
                "@type": "ItemList",
                "name": "Stephen Root GTA 6 Key Roles & Evidence",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Brian Heder Voice Role",
                    "description": "Voiced and motion-captured by Stephen Root in GTA 6"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Monroe Fuches in Barry",
                    "description": "Emmy-nominated crime handler performance establishing GTA synergy"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Buck Strickland & Bill in King of the Hill",
                    "description": "Mastery of southern comedic dialogue matching Florida Keys setting"
                  }
                ]
              }
            ]
          })
        }}
      />
    </ImageLightbox>
  )
};
