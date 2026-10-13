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

export const gta6RockstarUnionTribunal: ArticleData = {
  title: 'GTA 6 Dev Firings: Rockstar HR Questioned in Tribunal',
  metaDescription: 'Rockstar HR chief Charlie Kinloch faced a Glasgow tribunal over an alleged Discord mole and the timing of 30+ GTA 6 developer firings. What both sides claim.',
  focusKeyword: 'rockstar union tribunal',
  h1: 'GTA 6 Dev Firings: Rockstar HR Questioned in Tribunal',
  publishedDate: 'October 13, 2026',
  modifiedDate: 'October 13, 2026',
  author: 'Editorial Staff',
  featureImage: '/images/news/gta-6-rockstar-union-tribunal-featured.webp',
  featureImageAlt: 'An empty modern courtroom interior with wooden benches and tall windows, photorealistic editorial photo',
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
        .news-cta-btn:active {
          background: linear-gradient(135deg, #2d1160, #b91e5c);
          box-shadow: 0 5px 14px rgba(214, 36, 110, 0.35);
          transform: translateY(-1px);
        }
        .fw-flag { display: inline-block; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; padding: 2px 10px; border-radius: 20px; margin-bottom: 0.5rem; }
        .fw-flag.confirmed { background: #dcfce7; color: #166534; }
        .fw-flag.reported { background: #fef3c7; color: #92400e; }
        .fw-quote { border-left: 3px solid #d6246e; padding: 0.25rem 0 0.25rem 1rem; margin: 1rem 0; font-style: italic; color: #334155; }
        .fw-quote cite { display: block; margin-top: 0.4rem; font-style: normal; font-size: 0.85rem; color: #64748b; }
        .img-credit { font-size: 0.8rem; color: #64748b; margin-top: 0.35rem; margin-bottom: 1.25rem; }
      `}} />

      <p>
        <span className="fw-flag reported">Reported</span> Rockstar Games HR chief Charlie Kinloch has been questioned in a Glasgow employment tribunal over allegations that the studio spied on union-organizing developers through a Discord mole, and over the timing of more than 30 GTA 6 developer firings that landed days before the game's delay announcement. The hearing, reported by Kotaku, The Times and WDC News 6, pits Rockstar against the Independent Workers' Union of Great Britain (IWGB).
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Answer: The Rockstar union tribunal</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>What happened:</strong> Charlie Kinloch, HR manager and co-studio operations director at Rockstar Lincoln, was cross-examined over claims a junior employee known as "AB" fed union Discord screenshots to HR for about 21 months.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>The core dispute:</strong> 31 former developers, backed by the IWGB, say they were unlawfully fired for union activity. Rockstar says the firings were for gross misconduct over leaked secrets.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Why timing matters:</strong> The firings came at the end of October 2025, about a week before Rockstar announced GTA 6's delay to November 19, 2026.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Status:</strong> No decision has been made. The tribunal is still hearing evidence, and both sides' claims remain unproven.</span>
          </li>
        </ul>
      </div>

      <h2>Key takeaways</h2>
      <ul>
        <li>The case, heard at the Glasgow Tribunals Centre, is brought by 31 former Rockstar developers represented by the IWGB, who allege the studio fired them to crush a union drive.</li>
        <li>Rockstar maintains the developers were dismissed for gross misconduct, including leaking confidential information about GTA 6's development.</li>
        <li>Kinloch was questioned about "AB", an alleged mole who passed union Discord screenshots and recordings to HR starting in early 2023.</li>
        <li>The Times reports Kinloch deleted screenshots from his phone before the firings; he denies trying to destroy evidence.</li>
        <li>The tribunal has not ruled. Nothing in the case changes GTA 6's November 19, 2026 launch date.</li>
      </ul>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/gta-6-rockstar-union-tribunal-featured.webp"
          alt="An empty modern courtroom interior with wooden benches and tall windows, photorealistic editorial photo"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 840px"
          className={styles.featureImage}
        />
      </div>
      <p className="img-credit">Image: AI-generated editorial photo for gtavispot.com</p>

      <h2>What is the Rockstar tribunal about?</h2>
      <p>
        <span className="fw-flag reported">Reported</span> The Independent Workers' Union of Great Britain is backing 31 former Rockstar developers who say they were targeted and unlawfully dismissed for trade union activity in October 2025. The developers claim Rockstar fired them to stop the IWGB gaining a recognized foothold at the company.
      </p>
      <p>
        Rockstar's position is that more than 30 employees were fired for gross misconduct, including the leaking of sensitive information about the development of Grand Theft Auto 6. The studio denies the dismissals had anything to do with union organizing. The case is being heard at the Glasgow Tribunals Centre, and the tribunal has not decided which account is true.
      </p>

      <h2>Who is Charlie Kinloch and why was he questioned?</h2>
      <p>
        <span className="fw-flag reported">Reported</span> Charlie Kinloch is Rockstar's HR manager and co-studio operations director at Rockstar Lincoln. He appeared as a witness and was cross-examined by lawyers acting for the dismissed developers. The questioning focused on two things: what he knew about the union's Discord server, and why Rockstar acted in October 2025 when it had known about the server's contents for far longer.
      </p>
      <p>
        The most striking claim involves a junior employee known only as "AB", who allegedly acted as a mole inside the union's Discord server for about 21 months, feeding screenshots and recordings of union activity to Kinloch. The claimants say this gave management a detailed view of the organizing effort, which was later used to build the case for the firings. Kinloch told the tribunal that disclosures from AB and others who raised concerns were voluntary.
      </p>
      <p>
        Kinloch also acknowledged he had a login to the Discord server and took screenshots of what he found. The Times reports he deleted those screenshots from his phone before the decision to dismiss the staff, saying he had been nervous about the security implications of keeping them on his phone, while denying he tried to destroy evidence.
      </p>

      <h2>Why does the timing of the firings matter?</h2>
      <p>
        <span className="fw-flag reported">Reported</span> The timeline is the IWGB's strongest card. Court filings described in the coverage say management learned the union was just 12 members short of the 10% workforce threshold needed for recognition in early October 2025. The union crossed that threshold by October 18. The firings followed on October 30, 2025. About a week later, Rockstar announced that GTA 6 would be delayed from May 2026 to November 19, 2026.
      </p>
      <p>
        The claimants' lawyer challenged Kinloch on the gap between knowledge and action: the Discord posts at issue dated back to March and June 2025, yet Rockstar only moved in October. As reported by Kotaku, the lawyer asked whether 18 months counted as acting "as quickly as possible", the phrase Kinloch had used in his own statement. Kinloch answered that by October the business was on the cusp of a major commercially sensitive announcement, which changed how he viewed the posts.
      </p>
      <p>
        To be clear: Rockstar has not linked the firings to the delay, and the tribunal has made no finding on the point. The suggestion that the two events are connected is the claimants' allegation, not an established fact.
      </p>

      <NewsCTAButton href="/news/gta-6-release-date/">GTA 6 release date: everything confirmed for November 19</NewsCTAButton>

      <h2>What has Rockstar said in its defense?</h2>
      <p>
        <span className="fw-flag reported">Reported</span> Rockstar's line has been consistent: the dismissals were for gross misconduct, not union busting. Kinloch told the tribunal he had "little interest" in the developers' union membership status and was focused on limiting the risk to Rockstar from potential leaks. He initially said he did not know employees were IWGB members, later adding he had no way of knowing "definitively", a shift the claimants' lawyers alleged was misleading. Kinloch denied any deliberate attempt to mislead the court.
      </p>
      <p>
        He also denied there was any organized monitoring of employee emails at the company, and said the disclosures made to him had been voluntary. Until the tribunal rules, these are competing claims, and neither side's version is proven.
      </p>

      <h2>What happens next in the case?</h2>
      <p>
        <span className="fw-flag reported">Reported</span> The tribunal is still hearing evidence this week, with more witnesses expected to be questioned. No ruling has been issued, and employment tribunal decisions in cases this size typically take weeks or months after the hearing ends.
      </p>
      <p>
        For players, the case changes nothing about the game itself. GTA 6 still launches November 19, 2026 on PlayStation 5, PlayStation 5 Pro, Xbox Series X and Xbox Series S, and the dispute has not affected that date. For the broader story of how the game was made, though, the tribunal is now the most detailed public window into Rockstar's internal handling of the final stretch of GTA 6's development. Our <Link href="/news/rockstar-news/">Rockstar news hub</Link> tracks every official studio update alongside it.
      </p>

      <div className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>What is the Rockstar union tribunal about?</h3>
          <p className={styles.faqAnswer}>
            The IWGB is backing 31 former Rockstar developers who claim they were unlawfully fired for union organizing in October 2025. Rockstar says the firings were for gross misconduct over leaked secrets. The case is being heard at the Glasgow Tribunals Centre and has not been decided.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Who is Charlie Kinloch?</h3>
          <p className={styles.faqAnswer}>
            Charlie Kinloch is Rockstar's HR manager and co-studio operations director at Rockstar Lincoln. He was cross-examined in the tribunal over an alleged Discord mole and the timing of the developer firings.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>What is the Discord mole allegation?</h3>
          <p className={styles.faqAnswer}>
            The claimants allege a junior employee known as "AB" secretly passed screenshots and recordings of union activity in a Discord server to Kinloch for about 21 months, starting in early 2023. Kinloch says the disclosures were voluntary. It remains an allegation, not a tribunal finding.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Were the firings connected to the GTA 6 delay?</h3>
          <p className={styles.faqAnswer}>
            The firings happened on October 30, 2025, about a week before Rockstar announced GTA 6's delay to November 19, 2026. The claimants' lawyers raised the timing in the tribunal, but Rockstar has admitted no connection and says the dismissals were about misconduct. The tribunal has made no finding on this.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Has the tribunal decided the case?</h3>
          <p className={styles.faqAnswer}>
            No. The hearing is still taking evidence, and no ruling has been issued. Everything both sides claim is unproven until the tribunal decides, and a decision in a case this size can take weeks or months after the hearing ends.
          </p>
        </div>
      </div>

      <p><em>Last checked: October 13, 2026. Sources: <a href="https://kotaku.com/rockstar-hr-questioned-over-discord-mole-and-sudden-timing-of-gta-6-dev-firings-in-latest-labor-tribunal-hearing-2000743272" target="_blank" rel="noopener noreferrer">Kotaku</a>, <a href="https://www.thetimes.com/uk/scotland/article/hr-boss-at-grand-theft-auto-maker-denies-trying-to-destroy-evidence-zjzjjnj32" target="_blank" rel="noopener noreferrer">The Times</a>, <a href="https://wdcnews6.com/rockstar-hr-manager-claims-he-had-little-interest-in-staffs-union-membership-status-as-fired-gta-dev-union-busting-trial-heats-up/" target="_blank" rel="noopener noreferrer">WDC News 6</a>.</em></p>
    </ImageLightbox>
  ),
};
