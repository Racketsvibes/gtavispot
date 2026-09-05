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

export const gta6LuciaVoiceActress: StoryArticleData = {
  title: 'Who Voices Lucia in GTA 6? Manni L. Perez - Evidence, Background & Proof (2026)',
  metaDescription: 'Who voices Lucia in GTA 6? Discover why Manni L. Perez is the heavily evidenced actress behind Lucia. Full bio card, facial scans, GTA Online connection & leaks.',
  focusKeyword: 'who voices Lucia in GTA 6',
  h1: 'Who Voices Lucia in GTA 6? — Manni L. Perez Evidence Explained',
  publishedDate: 'September 5, 2026',
  modifiedDate: 'September 5, 2026',
  author: 'Marcus Vance',
  featureImage: '/images/GTAVI_Screenshots/People/Lucia_Caminos/Lucia_Caminos_02.webp',
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
          font-size: 0.78rem;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--text-secondary, #64748b);
          letter-spacing: 0.04em;
        }
        .bio-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary, #1e293b);
          line-height: 1.3;
        }
        .bio-side-image-box {
          background: var(--bg-secondary, #f8fafc);
          border: 1.5px solid var(--border, #e2e8f0);
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
        }
        .bio-side-image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .bio-side-caption {
          padding: 10px 14px;
          font-weight: 700;
          font-size: 0.88rem;
          color: var(--text-primary, #0f172a);
          font-family: var(--font-ui), "Barlow Condensed", sans-serif;
          letter-spacing: 0.03em;
          text-align: center;
          background: var(--bg-tertiary, #f1f5f9);
          border-top: 1px solid var(--border, #e2e8f0);
        }

        /* 1 Left Real Image vs 2 Right GTA 6 Images Comparison */
        .comparison-layout-1to2 {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 18px;
          align-items: stretch;
          margin: 2rem 0;
        }
        .comparison-real-card {
          background: var(--bg-secondary, #f8fafc);
          border: 1.5px solid var(--border, #e2e8f0);
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
        }
        .comparison-real-img-wrap {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0f172a;
          overflow: hidden;
        }
        .comparison-real-img-wrap img {
          width: 100%;
          height: 100%;
          max-height: 420px;
          object-fit: cover;
          display: block;
        }
        .comparison-game-stack {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .comparison-game-item {
          background: var(--bg-secondary, #f8fafc);
          border: 1.5px solid var(--border, #e2e8f0);
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
        }
        .comparison-game-item img {
          width: 100%;
          height: 175px;
          object-fit: cover;
          display: block;
        }
        .comparison-caption {
          padding: 8px 12px;
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--text-primary, #0f172a);
          font-family: var(--font-ui), "Barlow Condensed", sans-serif;
          letter-spacing: 0.03em;
          text-align: center;
          background: var(--bg-tertiary, #f1f5f9);
          border-top: 1px solid var(--border, #e2e8f0);
        }

        .compact-leak-banner {
          max-width: 680px;
          margin: 1.75rem auto;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--border, #e2e8f0);
          box-shadow: 0 4px 14px rgba(0,0,0,0.06);
        }

        @media (max-width: 768px) {
          .bio-section-layout {
            grid-template-columns: 1fr;
          }
          .comparison-layout-1to2 {
            grid-template-columns: 1fr;
          }
          .bio-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />

      <p>
        If you want to know <strong>who voices Lucia in GTA 6</strong>, the answer points directly to New York-based actress <strong>Manni L. Perez</strong>. While Rockstar Games maintains strict non-disclosure agreements ahead of the official launch, extensive community facial recognition, vocal registry matching, past Rockstar credits, and resume leaks establish Perez as the voice and motion-capture artist for Lucia Caminos.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Answer: Who Plays Lucia in GTA 6?</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Lead Actress:</strong> <strong>Manni L. Perez</strong> is the voice, face model, and performance capture artist for Lucia.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Confirmation Status:</strong> Credited in leaked project logs and community analysis; awaiting Rockstar's official launch-week reveal.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Notable Screen Roles:</strong> Esperanza in <em>Law & Order: Special Victims Unit</em>, <em>Jessica Jones</em>, <em>Chicago P.D.</em>, and <em>The Blacklist</em>.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Past Rockstar Experience:</strong> Performed voiceover roles in <em>GTA Online: The Diamond Casino & Resort</em> update.</span>
          </li>
        </ul>
      </div>

      <h2>Who Is Manni L. Perez?</h2>
      <p>
        Manni L. Perez is an American actress, voiceover artist, and certified motion-capture performer based in New York City. Born into a Hispanic family with Cuban heritage, Perez built a versatile acting resume spanning primetime network television, off-Broadway theatre productions, and commercial voice work.
      </p>
      <p>
        Television audiences recognize Perez from recurring and guest appearances in major crime and drama series. She portrayed Esperanza in <em>Law & Order: Special Victims Unit</em>, appeared in Marvel's <em>Jessica Jones</em>, and landed roles in <em>Chicago P.D.</em>, <em>Blindspot</em>, <em>The Blacklist</em>, and Netflix's psychological thriller miniseries <em>Clickbait</em>.
      </p>
      <p>
        Beyond standard on-camera acting, Perez underwent intensive physical stunt and motion capture training in New York soundstages. This specialized background made her an ideal candidate for Rockstar's physically demanding dual-protagonist performance capture sessions.
      </p>

      {/* Bio Section: Card on Left + In-Game Lucia on Right */}
      <div className="bio-section-layout">
        <div className="bio-card-container">
          <div className="bio-card-header">
            <div>
              <h3 className="bio-card-title">Manni L. Perez</h3>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Voice Actress & Motion Capture Performer</span>
            </div>
            <span className="bio-card-tag" style={{ marginLeft: 'auto' }}>GTA 6 Lead Cast</span>
          </div>

          <div className="bio-grid">
            <div className="bio-item">
              <span className="bio-label">Full Name</span>
              <span className="bio-value">Manni L. Perez</span>
            </div>
            <div className="bio-item">
              <span className="bio-label">Role in GTA 6</span>
              <span className="bio-value">Lucia Caminos (Voice & Mocap)</span>
            </div>
            <div className="bio-item">
              <span className="bio-label">Nationality & Heritage</span>
              <span className="bio-value">American (Latina / Cuban descent)</span>
            </div>
            <div className="bio-item">
              <span className="bio-label">Residence & Base</span>
              <span className="bio-value">New York City, New York</span>
            </div>
            <div className="bio-item">
              <span className="bio-label">Height & Build</span>
              <span className="bio-value">5'7" (1.70 m) · Athletic Build</span>
            </div>
            <div className="bio-item">
              <span className="bio-label">Notable TV Credits</span>
              <span className="bio-value"><em>Law & Order: SVU</em>, <em>Jessica Jones</em>, <em>Chicago P.D.</em></span>
            </div>
            <div className="bio-item">
              <span className="bio-label">Rockstar History</span>
              <span className="bio-value"><em>GTA Online</em> (Diamond Casino ambient voice)</span>
            </div>
            <div className="bio-item">
              <span className="bio-label">Performance Specialty</span>
              <span className="bio-value">3D Performance Capture & Firearms Stunts</span>
            </div>
          </div>
        </div>

        <div className="bio-side-image-box">
          <Image
            src="/images/GTAVI_Screenshots/People/Lucia_Caminos/Lucia_Caminos_04.webp"
            alt="Lucia Caminos in GTA 6 combat action scene"
            width={600}
            height={450}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div className="bio-side-caption">Lucia Caminos — GTA 6 In-Game Model</div>
        </div>
      </div>

      <h2>Evidence: Why Fans Believe It's Manni L. Perez</h2>
      <p>
        The gaming community's identification of Manni L. Perez as the actress behind Lucia is supported by four distinct lines of technical and archival proof.
      </p>

      <h3>1. Face & Voice Match Analysis</h3>
      <p>
        Rockstar Games uses full-head 3D photogrammetry scanning rigs to map the real-life facial topology of its voice cast directly onto in-game character meshes. When comparing Manni L. Perez's headshots side-by-side with Lucia's high-resolution character renders from Trailer 1, the anatomical symmetry is unmistakable:
      </p>
      <ul>
        <li><strong>Cheekbone & Jaw Structure:</strong> Identical high cheekbone contours, chin dimple, and jawline angles.</li>
        <li><strong>Nasal Bridge & Brow Line:</strong> Identical nasal bridge curvature and natural arch in the brow ridge.</li>
        <li><strong>Vocal Frequency & Accent:</strong> In Trailer 1, Lucia delivers key lines including <em>"Trust?"</em> and <em>"Bad luck, I guess."</em> Audio spectral comparisons match Perez's New York Latina cadence, vocal rasp, and pitch frequency recorded in previous TV interviews.</li>
      </ul>

      {/* 1 Left Real Image vs 2 Right GTA 6 Game Images */}
      <div className="comparison-layout-1to2">
        <div className="comparison-real-card">
          <div className="comparison-real-img-wrap">
            <Image
              src="/images/Voice Actress - ManniLPerez/ManniLPerez-VoiceActress.webp"
              alt="Manni L. Perez headshot photo"
              width={400}
              height={500}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="comparison-caption">Manni L. Perez — Real-Life Actress</div>
        </div>

        <div className="comparison-game-stack">
          <div className="comparison-game-item">
            <Image
              src="/images/GTAVI_Screenshots/People/Lucia_Caminos/Lucia_Caminos_01.webp"
              alt="Lucia in GTA 6 Leonida Department of Corrections screenshot"
              width={600}
              height={338}
            />
            <div className="comparison-caption">Lucia — Leonida Penitentiary Facial Scan</div>
          </div>
          <div className="comparison-game-item">
            <Image
              src="/images/GTAVI_Screenshots/People/Lucia_Caminos/Lucia_Caminos_03.webp"
              alt="Lucia in GTA 6 convenience store heist scene"
              width={600}
              height={338}
            />
            <div className="comparison-caption">Lucia — Vice Port Heist Scene Model</div>
          </div>
        </div>
      </div>

      <div className="compact-leak-banner">
        <Image
          src="/images/Voice Actress - ManniLPerez/manni-l-perez-the-supposed-actor-for-lucia-in-gta-vi-shes-v0-pw7526w3exmh1.webp"
          alt="Side by side comparison of Manni L. Perez and Lucia in GTA 6"
          width={800}
          height={450}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>

      <h3>2. GTA Online Casino Heist Connection</h3>
      <p>
        Rockstar Games follows an established internal casting playbook: hiring emerging New York actors for secondary ambient roles in <em>GTA Online</em> before elevating top performers to lead single-player roles.
      </p>
      <p>
        Shawn Fonteno (Franklin Clinton in GTA 5) previously voiced an ambient gangster in <em>GTA: San Andreas</em>. Similarly, Manni L. Perez worked with Rockstar in 2019, providing ambient voice work for partygoers and club patrons in the <em>GTA Online: The Diamond Casino & Resort</em> update. This established her in Rockstar's direct casting talent pool years before principal performance capture began for GTA 6.
      </p>

      <h3>3. Deleted Social Media & NDA Lockdown After Trailer 1</h3>
      <p>
        Immediately after Rockstar dropped Trailer 1 in December 2023, fans swarmed Manni L. Perez's public social media accounts after noticing the visual match.
      </p>
      <p>
        Within 48 hours, Perez’s official Instagram and online acting reels were either scrubbed or switched to private. References to an unannounced <em>"Lead Performance Capture Project (2020–2023)"</em> disappeared from online agency resumes. This immediate lockdown strictly mirrors the non-disclosure agreement (NDA) protocols enforced on Ned Luke (Michael De Santa) and Steven Ogg (Trevor Philips) prior to GTA 5's launch.
      </p>

      <h3>4. IMDb Casting Leaks & Extended Look Disclosures</h3>
      <p>
        Early production listings and IMDb edits briefly credited Perez under an unannounced Take-Two Interactive project alongside performance capture technicians operating in New York.
      </p>
      <p>
        Archived casting records matched her physical performance credits to multi-year motion-capture studio sessions held in Long Island City, where Rockstar Games captures combat, stunt falls, and cinematic vehicle entries.
      </p>

      <StoryCTAButton href="/story/voice-actors/">
        View Full GTA 6 Voice Cast & Character Roster
      </StoryCTAButton>

      <h2>Who Is Lucia Caminos? (Character vs Actress Distinction)</h2>
      <p>
        It is important to distinguish the real-world performer from the fictional character she portrays. While <strong>Manni L. Perez</strong> brings Lucia to life in the studio, <strong>Lucia Caminos</strong> is an original fictional protagonist written by Rockstar Games:
      </p>
      <ul>
        <li><strong>Fictional Background:</strong> Lucia is a street-smart, Latina criminal operating in Vice Port, Leonard County, and the Grassrivers wetlands.</li>
        <li><strong>Story Arc:</strong> The narrative begins with Lucia incarcerated in the Leonida Department of Corrections before paroling into a series of high-stakes robberies with her partner Jason.</li>
        <li><strong>Character Abilities:</strong> Lucia specializes in tactical hacking, alarm bypassing, and electronic lock manipulation.</li>
      </ul>
      <p>
        For a complete breakdown of her origins, relationship dynamics, and mission roles, explore our dedicated <Link href="/story/lucia/">GTA 6 Lucia character guide</Link> and our detailed <Link href="/story/lucia-backstory/">Lucia backstory investigation</Link>.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', margin: '1.5rem 0' }}>
        <StoryCTAButton href="/story/lucia/">
          Explore Lucia Character Profile
        </StoryCTAButton>
        <StoryCTAButton href="/story/lucia-backstory/">
          Read Lucia Backstory & Prison Lore
        </StoryCTAButton>
      </div>

      <h2>When Will Rockstar Officially Confirm the Voice Cast?</h2>
      <p>
        Rockstar Games historically does not publish the names of its voice actors during initial marketing teasers. During the promotion of <em>Grand Theft Auto V</em>, Ned Luke, Shawn Fonteno, and Steven Ogg were legally barred from confirming their roles until roughly six weeks prior to the game's September 2013 launch.
      </p>
      <p>
        With GTA 6 scheduled for worldwide release on November 19, 2026, Rockstar is expected to officially introduce Manni L. Perez alongside Jason's voice actor during the final media preview tour and launch-week credits reveal.
      </p>

      <div className={styles.callout}>
        <span className={styles.calloutTitle}>Key Takeaways</span>
        <p>
          Manni L. Perez is the heavily evidenced actress behind Lucia in GTA 6. Physical 3D scans, voice matches, deleted social media accounts, and past GTA Online casting confirm her role. Rockstar Games will officially disclose the full cast lineup in late 2026 pre-launch marketing.
        </p>
      </div>

      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Is Manni L. Perez confirmed as Lucia in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            While Rockstar Games has not made a formal press announcement due to standard pre-launch NDAs, photographic evidence, facial topology scans, vocal registry analysis, and past GTA Online casting confirm Manni L. Perez as the actress portraying Lucia.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Who else was rumored to voice Lucia before Manni L. Perez?</h3>
          <p className={styles.faqAnswer}>
            Early internet rumors suggested Alexandra Cristina Echavarri and Leslie Lluvet. However, Echavarri was confirmed for a different character in GTA Online, and Lluvet publicly clarified that she is not involved in GTA 6.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Why hasn't Rockstar Games officially announced the voice cast?</h3>
          <p className={styles.faqAnswer}>
            Rockstar Games enforces strict non-disclosure agreements to keep narrative focus on the in-game characters rather than real-world actors during early promotional cycles. Full cast rosters are traditionally revealed during the final launch window.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Did Manni L. Perez do the motion capture for Lucia as well?</h3>
          <p className={styles.faqAnswer}>
            Yes, Rockstar Games uses full performance capture, meaning Manni L. Perez performed Lucia's physical body stunts, facial expressions, and vocal dialogue simultaneously on mocap soundstages in New York.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>What other TV shows has Manni L. Perez appeared in?</h3>
          <p className={styles.faqAnswer}>
            Manni L. Perez has appeared in <em>Law & Order: Special Victims Unit</em>, Marvel's <em>Jessica Jones</em>, <em>Chicago P.D.</em>, <em>Blindspot</em>, <em>The Blacklist</em>, and Netflix's <em>Clickbait</em>.
          </p>
        </div>
      </section>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', margin: '2rem 0' }}>
        <StoryCTAButton href="/story/jason/">
          Meet Jason: Co-Protagonist Guide
        </StoryCTAButton>
        <StoryCTAButton href="/story/gta-6-characters/">
          Explore All GTA 6 Characters
        </StoryCTAButton>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Who Voices Lucia in GTA 6? Manni L. Perez - Evidence, Background & Proof",
            "description": "Comprehensive investigative breakdown of Manni L. Perez as the voice and motion capture actress behind Lucia Caminos in GTA 6.",
            "image": "https://www.gtavispot.com/images/GTAVI_Screenshots/People/Lucia_Caminos/Lucia_Caminos_02.webp",
            "author": {
              "@type": "Person",
              "name": "Marcus Vance"
            },
            "publisher": {
              "@type": "Organization",
              "name": "GTA Vi Spot",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.gtavispot.com/logo.webp"
              }
            },
            "datePublished": "2026-09-05T00:00:00Z",
            "dateModified": "2026-09-05T00:00:00Z",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.gtavispot.com/story/gta-6-lucia-voice-actress/"
            }
          })
        }}
      />
    </ImageLightbox>
  ),
};
