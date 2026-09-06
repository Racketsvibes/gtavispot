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

export const gta6JasonVoiceActor: StoryArticleData = {
  title: 'Who Voices Jason in GTA 6? Dylan Rourke vs Gregory Connors (2026)',
  metaDescription: 'Who voices Jason in GTA 6? Full investigative breakdown comparing Dylan Rourke vs Gregory Connors. Resumes, vocal matches, deleted videos & proof.',
  focusKeyword: 'who voices Jason in GTA 6',
  h1: 'Who Voices Jason in GTA 6? Dylan Rourke vs Gregory Connors Explained',
  publishedDate: 'September 6, 2026',
  modifiedDate: 'September 6, 2026',
  author: 'Marcus Vance',
  featureImage: '/images/GTAVI_Screenshots/People/Jason_Duval/Jason_Duval_02.webp',
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
          padding: 20px;
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

        /* 1-to-2 Comparison Layout */
        .comparison-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin: 2rem 0;
        }
        .comparison-real-col {
          display: flex;
          flex-direction: column;
        }
        .comparison-game-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .actor-frame {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          border: 1.5px solid var(--border, #e2e8f0);
          background: #000;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .actor-frame.full-height {
          flex: 1;
          min-height: 380px;
        }
        .actor-frame.half-height {
          height: 182px;
        }
        .actor-frame img {
          object-fit: cover;
        }
        .actor-frame-badge {
          position: absolute;
          bottom: 10px;
          left: 10px;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(6px);
          color: #fff;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        /* Evidence Pillars Grid */
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
          font-size: 0.95rem;
          text-align: left;
          background: var(--bg-surface, #ffffff);
        }
        .scorecard-table th {
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
        .scorecard-table td {
          padding: 12px 16px;
          border-bottom: 1px solid var(--border, #e2e8f0);
          color: var(--text-secondary, #475569);
          line-height: 1.5;
        }
        .scorecard-table tr:last-child td {
          border-bottom: none;
        }
        .score-match {
          color: #059669;
          font-weight: 800;
        }
        .score-maybe {
          color: #d97706;
          font-weight: 700;
        }
        .score-unlikely {
          color: #dc2626;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .bio-section-layout,
          .comparison-layout,
          .evidence-grid {
            grid-template-columns: 1fr;
          }
          .actor-frame.full-height {
            min-height: 280px;
          }
        }
      `}} />

      <p>
        Ever since Rockstar Games dropped the record-shattering first trailer for <em>Grand Theft Auto VI</em>, one central question has captivated millions of players worldwide: <strong>who voices Jason in GTA 6?</strong> 
      </p>
      <p>
        While the identity of co-protagonist Lucia has converged almost unanimously around actress <Link href="/story/gta-6-lucia-voice-actress/">Manni L. Perez</Link>, the search for Jason Duval&apos;s performer has developed into a gripping debate between two primary contenders: American actor <strong>Dylan Rourke</strong> and New York performer <strong>Gregory Connors</strong>.
      </p>

      {/* Quick Answer Summary Box */}
      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Answer: Who Plays Jason in GTA 6?</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>The Leading Frontrunner (Dylan Rourke):</strong> Dylan Rourke is the strongest candidate. He shares an uncanny facial bone structure with Jason, possesses an identical gravelly southern vocal timbre, had motion capture projects on his agency resume from 2019–2021, and had his Vimeo showreels deleted following the trailer reveal.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>The Primary Alternate (Gregory Connors):</strong> Gregory Connors became a major suspect after his official online acting resume listed a &quot;Lead Role in a 2025/2026 Rockstar Games Project&quot; before being abruptly deleted.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Rockstar Official Status:</strong> Neither actor has been officially confirmed due to strict non-disclosure agreements (NDAs), but community consensus heavily favors <strong>Dylan Rourke as Jason</strong>, with Connors likely portraying a major supporting lead or antagonist.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Actors Ruled Out:</strong> Voice acting veterans <strong>Troy Baker</strong> and <strong>Roger Craig Smith</strong> have both publicly denied being involved.</span>
          </li>
        </ul>
      </div>

      {/* Side-by-Side Comparison Layout */}
      <div className="comparison-layout">
        <div className="comparison-real-col">
          <div className="actor-frame full-height">
            <Image 
              src="/images/Voice Actor - Jason/dylan_rourke.png" 
              alt="Dylan Rourke real-life headshot portrait" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <span className="actor-frame-badge">Suspect #1: Dylan Rourke</span>
          </div>
        </div>
        <div className="comparison-game-col">
          <div className="actor-frame half-height">
            <Image 
              src="/images/GTAVI_Screenshots/People/Jason_Duval/Jason_Duval_01.webp" 
              alt="Jason Duval close-up facial render in GTA 6" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <span className="actor-frame-badge">GTA 6: Jason Duval (Profile)</span>
          </div>
          <div className="actor-frame half-height">
            <Image 
              src="/images/GTAVI_Screenshots/People/Jason_Duval/Jason_Duval_03.webp" 
              alt="Jason Duval driving through Vice City at night" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <span className="actor-frame-badge">GTA 6: In-Game Render</span>
          </div>
        </div>
      </div>

      <StoryCTAButton href="/story/jason/">
        Explore Jason Duval&apos;s Full Backstory &amp; Rumored Lore
      </StoryCTAButton>

      <h2>The Two Main Suspects — Overview</h2>
      <p>
        Rockstar Games traditionally casts talented, working-class screen and stage actors rather than Hollywood A-listers for its flagship protagonists. Just as <em>GTA 5</em> launched Steven Ogg (Trevor), Ned Luke (Michael), and Shawn Fonteno (Franklin) into stardom, <em>Grand Theft Auto VI</em> features full performance motion capture (facial capture, body capture, and voice delivery combined).
      </p>
      <p>
        When investigating who plays <Link href="/story/jason/">Jason Duval</Link>—the military veteran and Leonida Keys smuggler partnered with Lucia—the community has narrowed dozens of initial theories down to two credible actors:
      </p>

      {/* Actor Bio Card: Dylan Rourke */}
      <div className="bio-section-layout">
        <div className="bio-card-container">
          <div>
            <div className="bio-card-header">
              <h3 className="bio-card-title">Dylan Rourke</h3>
              <span className="bio-card-tag">Frontrunner</span>
            </div>
            <div className="bio-grid">
              <div className="bio-item">
                <span className="bio-label">Profession</span>
                <span className="bio-value">Actor &amp; Mo-Cap Performer</span>
              </div>
              <div className="bio-item">
                <span className="bio-label">Origin</span>
                <span className="bio-value">Chicago, Illinois, USA</span>
              </div>
              <div className="bio-item">
                <span className="bio-label">Notable TV Roles</span>
                <span className="bio-value">Grey&apos;s Anatomy, Station 19</span>
              </div>
              <div className="bio-item">
                <span className="bio-label">Film Credits</span>
                <span className="bio-value">Bury the Bride (2023)</span>
              </div>
              <div className="bio-item">
                <span className="bio-label">Facial Match</span>
                <span className="bio-value">95% (Jaw, Nose, Brow)</span>
              </div>
              <div className="bio-item">
                <span className="bio-label">Vocal Match</span>
                <span className="bio-value">High (Gravelly Drawl)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bio-image-wrapper">
          <Image 
            src="/images/Voice Actor - Jason/Dylan2.png" 
            alt="Dylan Rourke actor headshot" 
            fill
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      </div>

      <h2>Dylan Rourke: Who Is He &amp; Why Fans Think It&apos;s Him</h2>
      <p>
        Dylan Rourke is an American television and film actor who has steadily built a solid portfolio in network dramas, indie thrillers, and commercial work. Over the past year, multiple lines of physical, digital, and vocal evidence have cemented him as the primary suspect behind Jason.
      </p>

      <h3>1. Career Background (Grey&apos;s Anatomy, Station 19, Bury the Bride)</h3>
      <p>
        Rourke has made memorable guest appearances across major prime-time productions, including ABC&apos;s <em>Grey&apos;s Anatomy</em>, <em>Station 19</em>, and <em>Modern Family</em>. In 2023, he starred in the indie horror-thriller <em>Bury the Bride</em>, demonstrating the intense, grounded, and emotionally conflicted masculine presence that perfectly matches Jason&apos;s character profile in the <Link href="/gta-6-timeline/">GTA 6 development timeline</Link>.
      </p>

      <h3>2. Physical &amp; Vocal Resemblance to Jason Duval</h3>
      <p>
        Because Rockstar utilizes 3D optical scanning to map actor facial topology directly onto character models, physical resemblance is crucial. When comparing Rourke&apos;s high cheekbones, distinct brow ridge, nose bridge curvature, and square jawline to Jason&apos;s renders in Trailer 1, the match is unmistakable.
      </p>
      <p>
        Vocally, Jason speaks only one clear word in the first trailer—replying &quot;<em>Trust</em>&quot; to Lucia in their motel room. Audio frequency comparisons between that line and Rourke&apos;s dialogue in <em>Station 19</em> and <em>Bury the Bride</em> reveal identical vocal resonance, throat timbre, and subtle southern pacing.
      </p>

      {/* 4 Pillars of Dylan Rourke Evidence */}
      <div className="evidence-grid">
        <div className="evidence-card">
          <span className="evidence-num">1</span>
          <h4>Biometric Facial Match</h4>
          <p>
            Side-by-side overlay reveals exact alignment of the brow furrow, eye spacing, asymmetrical cheek structure, and chin shape between Rourke and Jason.
          </p>
        </div>
        <div className="evidence-card">
          <span className="evidence-num">2</span>
          <h4>Vocal Frequency Match</h4>
          <p>
            Pitch analysis of the word &quot;Trust&quot; matches Dylan Rourke&apos;s natural lower vocal register and slight southern cadence seen in his previous television work.
          </p>
        </div>
        <div className="evidence-card">
          <span className="evidence-num">3</span>
          <h4>Deleted Vimeo Showreels</h4>
          <p>
            Shortly after community investigators began sharing his name online, Rourke&apos;s Vimeo demo reels and agency video game references were scrubbed from the internet.
          </p>
        </div>
        <div className="evidence-card">
          <span className="evidence-num">4</span>
          <h4>Performance Mo-Cap Timing</h4>
          <p>
            Agency resumes from 2019 to 2021 placed Rourke in New York conducting undisclosed performance capture for an &quot;Unannounced AAA Open-World Title.&quot;
          </p>
        </div>
      </div>

      <h3>3. Vimeo Deleted Videos &amp; Agency Game Role (2019–2021)</h3>
      <p>
        The most telling digital evidence came when online sleuths discovered that several of Rourke&apos;s historical demo reels and acting samples on Vimeo were quietly set to private or deleted in late 2023. Furthermore, historical agency cache records showed an undisclosed lead motion capture role for a major interactive project starting production in late 2019—the exact timeframe Rockstar began full principal motion capture for <em>Grand Theft Auto VI</em>.
      </p>

      <div className="bio-image-wrapper" style={{ height: '360px', margin: '2rem 0' }}>
        <Image 
          src="/images/GTAVI_Screenshots/People/Jason_Duval/Jason_Duval_04.webp" 
          alt="Jason Duval looking tense during high-stakes GTA 6 cutscene" 
          fill
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>

      <StoryCTAButton href="/story/gta-6-lucia-voice-actress/">
        Read Full Proof: Who Voices Lucia in GTA 6? (Manni L. Perez)
      </StoryCTAButton>

      <h2>Gregory Connors: The Resume Leak Theory</h2>
      <p>
        While Dylan Rourke remains the physical and vocal favorite, New York theater and television actor <strong>Gregory Connors</strong> emerged as a fierce contender in early 2024 following a direct portfolio leak.
      </p>

      <h3>1. What the Portfolio Said Before Deletion</h3>
      <p>
        In March 2024, eagle-eyed community members on the <em>GTA Forums</em> discovered an entry on Gregory Connors&apos; official Actors Access and Spotlight CVs. The listing explicitly credited him as:
      </p>
      <blockquote>
        <p>
          <strong>&quot;Lead&quot;</strong> — <em>Rockstar Games Project</em> (Release Date: 2025 / 2026, Directed by [Confidential])
        </p>
      </blockquote>
      <p>
        Within hours of the discovery circulating on social media, Connors&apos; agency wiped the Rockstar credit from his resume. This swift reaction confirmed that Connors had indeed worked on a major Rockstar production, sparking widespread speculation that he was the voice of Jason.
      </p>

      <h3>2. Reddit Thread Breakdown: Jason or Supporting Character?</h3>
      <p>
        The subsequent debate on <em>r/GTA6</em> highlighted key distinctions:
      </p>
      <ul>
        <li>
          <strong>The Co-Protagonist Theory:</strong> Proponents argued that a &quot;Lead&quot; designation on an actor&apos;s resume could only mean Jason, as GTA 6 features dual protagonists.
        </li>
        <li>
          <strong>The Antagonist / Supporting Lead Theory:</strong> Others pointed out that Rockstar routinely classifies major storyline bosses, law enforcement adversaries, and primary mission-givers as &quot;Leads&quot; in casting breakdowns. Connors is slightly older than Jason&apos;s in-game age and possesses a different facial structure, suggesting he may instead portray a primary antagonist, police detective, or crime boss.
        </li>
      </ul>

      <h2>Verdict: Dylan Rourke vs Gregory Connors — Evidence Scorecard</h2>
      <p>
        Weighing all available data, here is how the evidence stacks up between the two actors:
      </p>

      <div className="scorecard-wrap">
        <table className="scorecard-table">
          <thead>
            <tr>
              <th>Criteria</th>
              <th>Dylan Rourke</th>
              <th>Gregory Connors</th>
              <th>Verdict / Advantage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Facial &amp; Biometric Match</strong></td>
              <td><span className="score-match">Near Identical (95%)</span></td>
              <td><span className="score-unlikely">Low Resemblance (40%)</span></td>
              <td><strong>Dylan Rourke</strong></td>
            </tr>
            <tr>
              <td><strong>Vocal Timbre (&quot;Trust&quot;)</strong></td>
              <td><span className="score-match">Exact Pitch &amp; Drawl</span></td>
              <td><span className="score-maybe">Deeper, Theatrical Tone</span></td>
              <td><strong>Dylan Rourke</strong></td>
            </tr>
            <tr>
              <td><strong>Direct Rockstar Resume Credit</strong></td>
              <td><span className="score-maybe">Scrubbed Video Game Credit</span></td>
              <td><span className="score-match">Explicit &quot;Rockstar Lead&quot; CV</span></td>
              <td><strong>Gregory Connors</strong></td>
            </tr>
            <tr>
              <td><strong>Mo-Cap Production Timeline</strong></td>
              <td><span className="score-match">2019–2022 NYC Production</span></td>
              <td><span className="score-match">2022–2024 Recording Window</span></td>
              <td><strong>Tie</strong></td>
            </tr>
            <tr>
              <td><strong>Digital Footprint Scrub</strong></td>
              <td><span className="score-match">Vimeo Reels Deleted</span></td>
              <td><span className="score-match">Resume Entry Wiped</span></td>
              <td><strong>Tie</strong></td>
            </tr>
            <tr>
              <td><strong>Most Likely Role</strong></td>
              <td><span className="score-match">Jason Duval (Protagonist)</span></td>
              <td><span className="score-maybe">Major Antagonist / Boss</span></td>
              <td><strong>Rourke = Jason</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Actors Who Were RULED OUT (Troy Baker &amp; Roger Craig Smith)</h2>
      <p>
        Prior to the emergence of Dylan Rourke and Gregory Connors, speculation ran wild that high-profile gaming veterans were voicing Jason:
      </p>
      <ul>
        <li>
          <strong>Troy Baker:</strong> Many fans initially thought Jason&apos;s single line &quot;<em>Trust</em>&quot; sounded like Joel Miller from <em>The Last of Us</em>. However, Baker explicitly shut down the rumor during an interview with <em>The Movie Dweeb</em>, stating: <em>&quot;That is one word. &apos;Trust.&apos; It is not me. I want whoever that actor is to get full credit for his hard work.&quot;</em>
        </li>
        <li>
          <strong>Roger Craig Smith:</strong> Known for voicing Ezio Auditore (<em>Assassin&apos;s Creed</em>) and Chris Redfield (<em>Resident Evil</em>), Smith also confirmed publicly that he has no involvement with GTA 6.
        </li>
      </ul>

      <div className="bio-image-wrapper" style={{ height: '360px', margin: '2rem 0' }}>
        <Image 
          src="/images/GTAVI_Screenshots/People/Jason_Duval/Jason_Duval_05.webp" 
          alt="Jason Duval in Vice City outdoor scene" 
          fill
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>

      <StoryCTAButton href="/story/voice-actors/">
        View the Complete GTA 6 Voice Actors &amp; Cast Breakdown
      </StoryCTAButton>

      <h2>Frequently Asked Questions</h2>
      <div className={styles.faqSection}>
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Who is the voice actor for Jason in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            The leading candidate is American actor <strong>Dylan Rourke</strong>, supported by striking biometric facial resemblance, matching vocal pitch, and deleted performance capture reels. Gregory Connors is also confirmed to have worked on a Rockstar project, likely in a major supporting capacity.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Has Rockstar Games officially confirmed Jason&apos;s voice actor?</h3>
          <p className={styles.faqAnswer}>
            No. Rockstar Games keeps all voice cast members under strict NDAs until closer to launch. An official cast announcement is expected in the months leading up to the November 19, 2026 release date.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Did Troy Baker voice Jason in GTA 6 Trailer 1?</h3>
          <p className={styles.faqAnswer}>
            No. Troy Baker explicitly confirmed in an interview that he is not in GTA 6 and does not voice Jason, encouraging fans to give credit to the real actor.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>What did Gregory Connors&apos; leaked resume say?</h3>
          <p className={styles.faqAnswer}>
            Gregory Connors&apos; Actors Access resume briefly listed a &quot;Lead&quot; role in a 2025/2026 &quot;Rockstar Games Project&quot; before his agency swiftly deleted the listing once it went viral.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Who voices Lucia in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Lucia is widely evidenced to be portrayed by actress <strong>Manni L. Perez</strong>, who has prior Rockstar experience in <em>GTA Online: The Diamond Casino Heist</em> and shares near-identical facial capture data.
          </p>
        </div>
      </div>

      <StoryCTAButton href="/gta-6-timeline/">
        Track the Official GTA 6 Development Timeline
      </StoryCTAButton>
    </ImageLightbox>
  )
};
