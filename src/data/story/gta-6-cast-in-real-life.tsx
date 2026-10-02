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

export const gta6CastInRealLife: StoryArticleData = {
  title: 'GTA 6 Cast in Real Life: Actors, Photos & Roles',
  metaDescription: "Meet the GTA 6 cast in real life: Stephen Root is confirmed as Brian Heder, while Manni L. Perez and Dylan Rourke are reported. Every claim honestly graded",
  focusKeyword: 'gta 6 cast in real life',
  h1: 'GTA 6 Cast in Real Life: Actors, Photos & Roles',
  publishedDate: 'October 2, 2026',
  modifiedDate: 'October 2, 2026',
  author: 'Marcus Vance',
  featureImage: '/images/People/stephen-root-real-life.webp',
  featureImageAlt: 'Stephen Root in real life — the confirmed GTA 6 voice of Brian Heder',
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
        .cast-badge {
          display: inline-block;
          padding: 5px 14px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .badge-confirmed { background: #166534; color: #ffffff; }
        .badge-reported { background: #b45309; color: #ffffff; }
        .badge-fantheory { background: #4b5563; color: #ffffff; }
        .method-box {
          border: 1px solid #e5e7eb;
          border-left: 4px solid #d6246e;
          border-radius: 10px;
          padding: 18px 22px;
          margin: 1.5rem 0;
          background: #fafafa;
        }
        .method-box h3 {
          margin-top: 0;
          font-size: 1.05rem;
        }
        .method-box ul {
          margin-bottom: 0.5rem;
        }
        .cast-table td:first-child { font-weight: 700; white-space: nowrap; }
      `}} />

      <p>
        Here is the <strong>GTA 6 cast in real life</strong> — with one rule: every actor gets an honest evidence grade. Stephen Root confirmed his role to the Associated Press in September 2026, while Manni L. Perez (Lucia) and Dylan Rourke (Jason) remain widely reported but unconfirmed. No other cast page grades its claims this honestly.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Answer: The GTA 6 Cast in Real Life</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Stephen Root → Brian Heder</strong> — the only publicly <strong>confirmed</strong> casting. He told the AP himself on September 13, 2026.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Manni L. Perez → Lucia</strong> — <strong>widely reported</strong>, not confirmed. She has denied involvement when asked.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Dylan Rourke → Jason</strong> — <strong>reported</strong> by insiders. Gregory Connors is the alternate reported name.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Oscar Jaenada → Raul Bautista</strong> — <strong>fan theory only</strong>. No reporting supports it.</span>
          </li>
        </ul>
      </div>

      <h2>The GTA 6 Cast in Real Life, Graded Honestly</h2>
      <p>
        Rockstar Games has published no official cast list for GTA 6. That is why every row below carries an evidence grade — so you know exactly what is confirmed, what is reported, and what is just fan speculation.
      </p>
      <table className="cast-table">
        <thead>
          <tr>
            <th>Character</th>
            <th>Real-Life Actor</th>
            <th>Evidence Grade</th>
            <th>Key Evidence</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Brian Heder</td>
            <td>Stephen Root</td>
            <td>Confirmed</td>
            <td>Root confirmed his role to AP News on September 13, 2026</td>
          </tr>
          <tr>
            <td>Lucia</td>
            <td>Manni L. Perez</td>
            <td>Widely reported</td>
            <td>Insider report; face/voice match — but Perez denies involvement</td>
          </tr>
          <tr>
            <td>Jason</td>
            <td>Dylan Rourke</td>
            <td>Reported</td>
            <td>Insider report; face/voice match (alternate: Gregory Connors)</td>
          </tr>
          <tr>
            <td>Raul Bautista</td>
            <td>Oscar Jaenada</td>
            <td>Fan theory — unverified</td>
            <td>Fan visual comparisons only; zero reporting</td>
          </tr>
        </tbody>
      </table>

      <div className="method-box">
        <h3>How We Grade Casting Claims</h3>
        <ul>
          <li><strong>Confirmed</strong> — the actor said it themselves, or Rockstar credited them.</li>
          <li><strong>Widely reported</strong> — multiple outlets or insiders report it, but nobody is on record.</li>
          <li><strong>Fan theory</strong> — fans connected the dots; no credible reporting exists.</li>
        </ul>
        <p style={{ marginBottom: 0 }}>
          Performers were reportedly reminded their NDAs run until November 19, so silence proves nothing. Grades change the moment facts change. <strong>Last verified: October 2, 2026.</strong>
        </p>
      </div>

      <h2>Who Plays Brian Heder? Stephen Root — the Only Confirmed Casting</h2>
      <div><span className="cast-badge badge-confirmed">✓ Confirmed</span></div>
      <div className={styles.galleryGrid}>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/stephen-root-real-life.webp"
            alt="Stephen Root in real life — confirmed as Brian Heder in GTA 6"
            width={400}
            height={225}
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Brian%20Heder/Brian_Heder_01.webp"
            alt="Brian Heder character render in GTA 6"
            width={400}
            height={225}
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.galleryImage}
          />
        </div>
      </div>
      <p>
        Stephen Root is the first actor to publicly confirm a GTA 6 role. At the BAFTA TV Tea Party on September 13, 2026, he told the Associated Press: <em>&ldquo;Yeah, you&apos;re gonna see me in it.&rdquo;</em> Rockstar has never published a cast list, so one actor going on record is a genuine event.
      </p>
      <p>
        One honest nuance: Root never named his character to the AP. The Brian Heder pairing comes from voice-matching plus Rockstar&apos;s own character bio — fans identified him by ear long before he spoke. We grade his involvement as confirmed and the Brian Heder role as the near-certain match, per <a href="https://www.polygon.com/gta-6-first-actor-confirmed-stephen-root-widows-bay/" target="_blank" rel="noopener noreferrer">Polygon&apos;s coverage of the AP interview</a>.
      </p>
      <p>
        You know Root from <em>Barry</em> (Monroe Fuches), <em>King of the Hill</em> (Bill Dauterive and Buck Strickland), <em>Office Space</em> (Milton), and <em>NewsRadio</em> — he was Emmy-nominated for <em>Widow&apos;s Bay</em>. Rockstar&apos;s bio describes Brian Heder as a classic drug runner from the golden age of smuggling, still moving product through his Leonida Keys boatyard with his third wife, Lori. In the story, Brian lets Jason live rent-free at one of his properties — as long as Jason helps with local shakedowns. Read our full <Link href="/story/stephen-root-gta-6/">Stephen Root GTA 6 deep-dive</Link>.
      </p>

      <h2>Is Manni L. Perez Really Lucia?</h2>
      <div><span className="cast-badge badge-reported">◐ Widely Reported — Unconfirmed</span></div>
      <div className={styles.galleryGrid}>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/ManniLPerez-VoiceActress.webp"
            alt="Manni L. Perez, widely reported as Lucia's performer in GTA 6 — unconfirmed"
            width={400}
            height={225}
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Lucia%20Caminos/Lucia_Caminos_02.webp"
            alt="Lucia Caminos character render in GTA 6"
            width={400}
            height={225}
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/manni-l-perez-real-life.webp"
            alt="Manni L. Perez in a recording studio — the reported voice of Lucia in GTA 6"
            width={400}
            height={225}
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.galleryImage}
          />
        </div>
      </div>
      <p>
        Manni L. Perez is the most widely reported candidate for Lucia — and she is still unconfirmed. An insider report via YouTuber LegacyKillaHD named Perez as Lucia, and fans have matched her face and voice to the character since the first trailer dropped in December 2023, as <a href="https://www.Dexerto.com/gta/gta-6-jason-and-lucia-actors-finally-revealed-according-to-insider-2691433/" target="_blank" rel="noopener noreferrer">Dexerto reported</a>.
      </p>
      <p>
        Her credits fit Rockstar&apos;s habit of casting working actors over stars: <em>Law &amp; Order: SVU</em> (she won an Imagen Award as Esperanza Morales), <em>Jessica Jones</em>, <em>Blindspot</em>, <em>Chicago P.D.</em>, and <em>The Blacklist</em>. She even has a Rockstar credit already — a blackjack dealer in GTA Online&apos;s Diamond Casino update.
      </p>
      <p>
        The honest caveats: Perez has denied involvement when asked, answering simply &ldquo;no,&rdquo; and Rockstar has confirmed nothing. Until she or the studio says otherwise, this stays <strong>widely reported</strong> — never confirmed. See our <Link href="/story/gta-6-lucia-voice-actress/">Lucia voice actress investigation</Link> and the <Link href="/story/lucia/">GTA 6 Lucia character guide</Link>.
      </p>

      <h2>Who Plays Jason? Dylan Rourke — Reported, Not Confirmed</h2>
      <div><span className="cast-badge badge-reported">◐ Reported — Unconfirmed</span></div>
      <div className={styles.galleryGrid}>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/dylan_rourke.webp"
            alt="Dylan Rourke in real life — the leading reported candidate for Jason in GTA 6"
            width={400}
            height={225}
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Jason%20Duval/Jason_Duval_04.webp"
            alt="Jason Duval character render in GTA 6"
            width={400}
            height={225}
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/dylan-rourke-real-life.webp"
            alt="Dylan Rourke portrait — reported as Jason Duval's performer in GTA 6"
            width={400}
            height={225}
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.galleryImage}
          />
        </div>
      </div>
      <p>
        Dylan Rourke is the leading reported candidate for Jason Duval. The same insider report that named Perez for Lucia named Rourke for Jason, and fans point to matching facial structure and vocal pitch against the trailers.
      </p>
      <p>
        You may recognize him from single-episode appearances on <em>Grey&apos;s Anatomy</em> and <em>Modern Family</em> — the rest of his resume is smaller projects, exactly the low-profile casting pattern Rockstar favors.
      </p>
      <p>
        The alternate reported name is <strong>Gregory Connors</strong>, whose agency resume briefly listed a &ldquo;Lead&rdquo; role in a Rockstar Games project before the listing was deleted. And one name you can cross off: Troy Baker explicitly said he is <em>not</em> Jason. Read our full <Link href="/story/gta-6-jason-voice-actor/">Jason voice actor investigation</Link> and the <Link href="/story/jason/">GTA 6 Jason character guide</Link>.
      </p>

      <h2>Is Oscar Jaenada in GTA 6? Only as a Fan Theory</h2>
      <div><span className="cast-badge badge-fantheory">○ Fan Theory — Unverified</span></div>
      <div className={styles.galleryGrid}>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Oscar-Jaenada-real-life.webp"
            alt="Oscar Jaenada in real life — fan-linked to Raul Bautista in GTA 6, unverified"
            width={400}
            height={225}
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Raul%20Bautista/Raul_Bautista_01.webp"
            alt="Raul Bautista character render in GTA 6"
            width={400}
            height={225}
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.galleryImage}
          />
        </div>
      </div>
      <p>
        Oscar Jaenada as Raul Bautista is a fan theory — <strong>no reporting supports it</strong>. Fans linked the Spanish actor to the Vice Port cartel contact through visual comparisons and social media posts, and that is the entire evidence trail.
      </p>
      <p>
        Jaenada is a genuinely accomplished actor: he won the Goya Award for Best Actor for <em>Camarón</em> (2005), played the Spaniard in <em>Pirates of the Caribbean: On Stranger Tides</em>, and starred in <em>Cantinflas</em>, <em>Rambo: Last Blood</em>, and <em>The Shallows</em>, per <a href="https://en.wikipedia.org/wiki/Óscar_Jaenada" target="_blank" rel="noopener noreferrer">his biography</a>.
      </p>
      <p>
        So why include him? Because the theory is everywhere, and pretending it doesn&apos;t exist helps nobody. The honest grade is <strong>fan theory — unverified</strong>, and it stays there until a credible report says otherwise. See our <Link href="/story/gta-6-raul-bautista/">Raul Bautista character guide</Link>.
      </p>

      <StoryCTAButton href="/story/gta-6-characters/">
        View All GTA 6 Characters & Profiles
      </StoryCTAButton>

      <h2>Frequently Asked Questions</h2>
      <div>
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Is Manni L. Perez confirmed as Lucia?</h3>
          <p className={styles.faqAnswer}>
            No. She is the most widely reported candidate for Lucia — named in an insider report and matched by fans to the character&apos;s face and voice — but she has denied involvement when asked, and neither she nor Rockstar has confirmed it.
          </p>
        </div>
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Who is confirmed in the GTA 6 cast?</h3>
          <p className={styles.faqAnswer}>
            Stephen Root, who told the Associated Press on September 13, 2026 that he appears in GTA 6. He is the only actor to go on record about a role; the Brian Heder pairing comes from voice-matching against Rockstar&apos;s character bio.
          </p>
        </div>
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Is Oscar Jaenada in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            There is no evidence he is. The Raul Bautista link is fan speculation built on visual comparisons, with no reporting behind it. Rockstar has not named any performer for Raul Bautista.
          </p>
        </div>
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Who voices Jason in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Nobody confirmed. Dylan Rourke is the leading reported candidate, and Gregory Connors is the alternate reported name after a leaked resume listing. Troy Baker has explicitly denied voicing Jason.
          </p>
        </div>
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Why hasn&apos;t Rockstar confirmed the GTA 6 cast?</h3>
          <p className={styles.faqAnswer}>
            Rockstar publishes no cast list, and talent were <a href="https://www.gtavice.net/news/rockstar-reportedly-reminds-gta-6-actors-their-ndas-last-until-release-day" target="_blank" rel="noopener noreferrer">reportedly reminded their NDAs run until November 19</a>. Stephen Root&apos;s red-carpet answer remains the exception, not the rule.
          </p>
        </div>
      </div>

      <p>
        That is the GTA 6 cast in real life as of October 2026 — one confirmed, two reported, one fan theory. For the characters behind the actors, see our <Link href="/story/voice-actors/">GTA 6 voice actors guide</Link>.
      </p>
    </ImageLightbox>
  ),
};
