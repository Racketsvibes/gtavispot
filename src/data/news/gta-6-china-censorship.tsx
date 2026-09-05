import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImageLightbox from '@/components/ui/ImageLightbox';
import { ArticleData } from '../newsContent';
import styles from '../../app/news/[slug]/page.module.css';

const NewsCTAButton = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <div style={{ margin: '1.25rem 0 1.75rem 0' }}>
      <Link href={href} className="news-cta-btn">
        <span>{children}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </Link>
    </div>
  );
};

export const gta6ChinaCensorship: ArticleData = {
  title: 'Rockstar Censors GTA 6 Trailer for China: All Changes & Blurred Scenes',
  metaDescription: 'Rockstar Games has published a heavily censored GTA 6 Extended Look trailer in China on Bilibili. See every blurred scene, from nightclub dancers to smoking & blood.',
  focusKeyword: 'Rockstar censors GTA 6 trailer China',
  h1: 'Rockstar Censors GTA 6 Extended Look Trailer in China: Every Blurred Scene Explained',
  publishedDate: 'September 5, 2026',
  modifiedDate: 'September 5, 2026',
  author: 'Marcus Vance',
  featureImage: '/images/news/gta-6-extended-look-feature.webp',
  featureImageAlt: 'Rockstar censors GTA 6 trailer in China with blurred nightclub and gameplay scenes on Bilibili',
  videoSchema: {
    name: 'GTA 6 Extended Look Trailer Censorship in China',
    description: 'Breakdown of the heavily blurred and censored scenes in the official Grand Theft Auto 6 Extended Look trailer published on Bilibili in China.',
    thumbnailUrl: ['https://www.gtavispot.com/images/news/gta-6-extended-look-feature.webp'],
    uploadDate: '2026-09-05',
    duration: 'PT26M',
    contentUrl: 'https://www.gtavispot.com/news/gta-6-china-censorship/',
    embedUrl: 'https://www.youtube.com/embed/QdBZY2fkU-0'
  },
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
        .comparison-table-wrap {
          overflow-x: auto;
          margin: 1.75rem 0;
          border-radius: 12px;
          border: 1px solid var(--border, #e2e8f0);
          box-shadow: 0 4px 14px rgba(0,0,0,0.04);
        }
        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.95rem;
          text-align: left;
          background: var(--bg-surface, #ffffff);
        }
        .comparison-table th {
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
        .comparison-table td {
          padding: 12px 16px;
          border-bottom: 1px solid var(--border, #e2e8f0);
          color: var(--text-secondary, #475569);
          line-height: 1.5;
        }
        .comparison-table tr:last-child td {
          border-bottom: none;
        }
        .censor-badge-heavy {
          display: inline-block;
          padding: 3px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 700;
          background: rgba(220, 38, 38, 0.12);
          color: #dc2626;
          text-transform: uppercase;
        }
        .censor-badge-moderate {
          display: inline-block;
          padding: 3px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 700;
          background: rgba(245, 134, 52, 0.12);
          color: #d97706;
          text-transform: uppercase;
        }
        .censor-badge-none {
          display: inline-block;
          padding: 3px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 700;
          background: rgba(16, 185, 129, 0.12);
          color: #059669;
          text-transform: uppercase;
        }
      `}} />

      <p>
        In an unexpected turn of regional media localization, <strong>Rockstar Games and parent company Take-Two Interactive have published a heavily censored version of the <em>Grand Theft Auto VI Extended Look</em> trailer in China</strong>. Uploaded directly to Rockstar&apos;s verified space on China&apos;s dominant video-sharing network, <strong>Bilibili</strong>, the edited broadcast applies aggressive Gaussian blur blocks across nearly all mature imagery—completely blurring out nightclub dancers, character cleavage, cigarette smoking, and pools of blood.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Key Highlights: Rockstar&apos;s Chinese GTA 6 Censorship</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Platform Affected:</strong> Rockstar&apos;s official channel on <strong>Bilibili</strong> (China&apos;s leading video streaming platform).</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Primary Blurred Elements:</strong> Revealing female clothing (cleavage, bikinis, underwear), provocative club dancing, cigarette/cigar smoking, and graphic blood splatters.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Nightclub Scene Transformation:</strong> As protagonist Jason Duval walks through the neon Vice City club, the majority of the screen is masked behind heavy pixelated blur filters.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>The Bizarre Paradox:</strong> The uncensored 4K trailer remains fully accessible on Rockstar&apos;s official website in China without a VPN, and Trailer 1 on Bilibili was never altered.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Community Backlash &amp; Strikes:</strong> Take-Two is reportedly issuing copyright takedowns against Chinese content creators re-uploading the uncut trailer.</span>
          </li>
        </ul>
      </div>

      <h2>How the Censored Bilibili Trailer Was Discovered</h2>
      <p>
        The censorship was first uncovered by <em>GTA Forums</em> investigator <strong>BDF</strong> and subsequently amplified by prominent Rockstar community archivist <strong>BenVideoTech</strong> (videotechuk_). 
      </p>
      <p>
        According to platform logs, Rockstar originally uploaded the standard, unedited 26-minute gameplay showcase to Bilibili following its worldwide premiere on Netflix. That original video remained accessible until August 31, 2026, when it was quietly removed and replaced with the modified cut.
      </p>
      <p>
        The replacement immediately caused a stir among international observers and Chinese gaming enthusiasts alike. Where Western audiences saw a gritty, photorealistic portrayal of Vice City&apos;s criminal nightlife and dynamic beachgoers, Chinese viewers were greeted with large frosted blur rectangles obscuring character models and environmental details.
      </p>

      <div className={styles.featureImageContainer}>
        <Image 
          src="/images/Extended_Look_1.webp" 
          alt="GTA 6 Extended Look official gameplay showcase frame comparison" 
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>

      <NewsCTAButton href="/news/gta-6-extended-look/">
        Read Full GTA 6 Extended Look &amp; Netflix Breakdown
      </NewsCTAButton>

      <h2>The 4 Major Content Categories Blurred by Rockstar</h2>
      <p>
        A frame-by-frame analysis between the global YouTube/Netflix release and the Bilibili upload reveals four strict categories of content targeted by Rockstar&apos;s editors:
      </p>

      <div className="comparison-table-wrap">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Content Element</th>
              <th>Global Version (US / EU)</th>
              <th>Chinese Bilibili Version</th>
              <th>Censorship Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Nightclub Dancers &amp; Attire</strong></td>
              <td>Uncut dancers in bikinis, lingerie, and revealing dresses</td>
              <td>Heavy Gaussian blur covering dancers, torsos, and movements</td>
              <td><span className="censor-badge-heavy">Extreme</span></td>
            </tr>
            <tr>
              <td><strong>Tobacco &amp; Smoking</strong></td>
              <td>Characters actively smoking cigarettes and cigars in cutscenes</td>
              <td>Digital blur placed over cigarettes, mouths, and smoke plumes</td>
              <td><span className="censor-badge-heavy">Heavy</span></td>
            </tr>
            <tr>
              <td><strong>Blood &amp; Combat Gore</strong></td>
              <td>Gunshot wound decals, blood pools on pavement, and splatter</td>
              <td>Blurred blood pools, diminished impact effects, and darkened textures</td>
              <td><span className="censor-badge-moderate">Moderate</span></td>
            </tr>
            <tr>
              <td><strong>Female Cleavage &amp; Bikinis</strong></td>
              <td>Natural coastal swimwear on Ocean Drive beachgoers</td>
              <td>Targeted blur boxes tracking female characters in low-cut tops</td>
              <td><span className="censor-badge-heavy">Heavy</span></td>
            </tr>
            <tr>
              <td><strong>Gunfire &amp; High-Speed Driving</strong></td>
              <td>Full tactical shootouts and police vehicle chases</td>
              <td>Untouched action gameplay, vehicle handling, and physics</td>
              <td><span className="censor-badge-none">None</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>1. Revealing Attire and Suggestive Dancing</h3>
      <p>
        The most dramatic edits occur during Jason&apos;s stroll through an upscale Leonida nightclub. In the uncensored release, this sequence showcases Rockstar&apos;s cutting-edge crowd density engine, procedural clothing physics, and realistic club lighting. In the Bilibili upload, however, virtually every dancer on stage and multiple background NPCs have large blurred patches tracked directly to their torsos and hips.
      </p>

      <h3>2. Cigarettes and Smoking Gestures</h3>
      <p>
        In accordance with strict Chinese streaming guidelines regarding tobacco consumption, every instance of an NPC or character holding a cigarette or exhaling smoke has been masked. Even static background characters leaning against Vice City alleyway walls have their hands and faces blurred if a cigarette is present.
      </p>

      <h3>3. Blood Splatter and Combat Aftermath</h3>
      <p>
        During close-quarters weapon demonstrations and convenience store stickups, visual blood decals on walls and victims have been blurred out or reduced in contrast to avoid depicting direct physical trauma—a well-known requirement under Chinese National Radio and Television Administration (NRTA) publishing rules.
      </p>

      <div className={styles.featureImageContainer}>
        <Image 
          src="/images/Extended_Look_2.webp" 
          alt="GTA 6 Extended Look in-game mission sequence" 
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>

      <NewsCTAButton href="/gta-6-gameplay/">
        Explore All Verified GTA 6 Gameplay Mechanics
      </NewsCTAButton>

      <h2>The Bizarre Paradox: Uncensored on Rockstar&apos;s Chinese Website</h2>
      <p>
        What makes the situation particularly curious is the inconsistency in how Take-Two is enforcing these rules. While the Bilibili video is censored to an almost comedic degree, <strong>Chinese internet users can freely navigate to Rockstar&apos;s official website (rockstargames.com) without using a VPN or proxy</strong> and stream the complete, unedited 4K trailer accompanied by official Simplified Chinese subtitles.
      </p>
      <p>
        Furthermore, the original <em>GTA 6 Trailer 1</em> uploaded to Rockstar&apos;s Bilibili channel in December 2023 remains completely uncensored to this day, despite featuring bikini-clad women on rooftops and strip club exteriors.
      </p>
      <p>
        Industry analysts suggest this discrepancy stems from how Chinese law distinguishes between <strong>domestic social media video platforms</strong> (which face direct liability from the Cyberspace Administration of China for hosting non-compliant content) and <strong>foreign corporate websites</strong> hosted outside the Great Firewall. By self-censoring on Bilibili, Rockstar protects its official social media channel from administrative strikes or algorithmic shadowbanning while keeping its direct marketing pipeline open.
      </p>

      <h2>Chinese Gamer Reactions &amp; Take-Two Copyright Strikes</h2>
      <p>
        The reaction across Chinese social platforms like Weibo, Tieba, and Bilibili has been mixed, sparking lively debate:
      </p>
      <ul>
        <li>
          <strong>The Compliance Argument:</strong> Many domestic gamers recognized the move as standard operating procedure for Western gaming giants operating in the region. Platforms like Bilibili operate under automated AI scanning algorithms that penalize channels posting uncensored mature content.
        </li>
        <li>
          <strong>The Over-Censorship Critique:</strong> Other players expressed frustration, arguing that Take-Two went beyond what was legally necessary. Comments on BDF&apos;s original forum thread noted that the heavy-handed blurring creates an impression that the publisher viewed Chinese gamers through an outdated, overly restrictive lens.
        </li>
      </ul>
      <p>
        Tensions escalated further when Chinese content creators who uploaded reaction videos or mirrored the global uncut trailer began receiving <strong>copyright strikes and takedown notices from Take-Two Interactive</strong>, compelling users to seek out the uncut footage through external cloud drives and international mirrors.
      </p>

      <div className={styles.featureImageContainer}>
        <Image 
          src="/images/Extanded Look/gta-6-grand-theft-auto-6-official-extended-gameplay.png" 
          alt="GTA 6 Official Extended Look gameplay showcase logo art" 
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>

      <NewsCTAButton href="/news/gta-6-region-lock/">
        Check PS5 &amp; Xbox GTA 6 Region Lock Details
      </NewsCTAButton>

      <h2>What Does This Mean for the Full GTA 6 Game in Asia?</h2>
      <p>
        Rockstar&apos;s trailer edits raise immediate questions about how the final release of <em>Grand Theft Auto VI</em> will be distributed across Asian territories when it launches on <strong>November 19, 2026</strong>.
      </p>
      <p>
        Mainland China does not officially permit the commercial release of unrated adult games like <em>Grand Theft Auto</em>. Historically, Chinese console gamers purchase physical disc copies imported via Hong Kong, Taiwan, or Japan, or register overseas PlayStation Network (PSN) and Xbox accounts.
      </p>
      <p>
        As detailed in our previous analysis of <Link href="/news/gta-6-region-lock/">GTA 6 PS5 region lock policies</Link>, physical disc editions for PlayStation 5 and Xbox Series X are completely region-free, meaning players across Asia will still be able to experience the full, uncut single-player story featuring <Link href="/story/lucia/">Lucia Caminos</Link> and <Link href="/story/jason/">Jason Duval</Link> without built-in gameplay or visual censorship.
      </p>

      <h2>Frequently Asked Questions</h2>
      <div className={styles.faqSection}>
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Why did Rockstar censor the GTA 6 trailer for China?</h3>
          <p className={styles.faqAnswer}>
            Rockstar censored the Extended Look trailer on Bilibili to comply with China&apos;s strict domestic internet broadcast standards regarding nudity, provocative dancing, tobacco depiction, and graphic violence, thereby avoiding platform penalties or bans on their official channel.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>What specific scenes were blurred in the Chinese GTA 6 trailer?</h3>
          <p className={styles.faqAnswer}>
            The Bilibili version blurred out exposed female cleavage and bikinis, provocative nightclub dancers, character cigarette/cigar smoking, and pools of blood during combat sequences.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Can players in China watch the uncensored GTA 6 trailer?</h3>
          <p className={styles.faqAnswer}>
            Yes. The official Rockstar Games website remains accessible in Mainland China without a VPN, streaming the full uncensored 4K trailer with official Simplified Chinese subtitles.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Will the final GTA 6 game be censored worldwide?</h3>
          <p className={styles.faqAnswer}>
            No. The global release on PS5 and Xbox Series X|S is rated ESRB M (Mature 17+) and PEGI 18, retaining all mature themes, realistic violence, adult humor, and narrative scenes intended by Rockstar North.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>When is GTA 6 releasing officially?</h3>
          <p className={styles.faqAnswer}>
            Grand Theft Auto VI is scheduled to launch worldwide on November 19, 2026, for PlayStation 5 and Xbox Series X|S.
          </p>
        </div>
      </div>

      <NewsCTAButton href="/gta-6-timeline/">
        View the Complete GTA 6 Development Timeline
      </NewsCTAButton>
    </ImageLightbox>
  )
};
