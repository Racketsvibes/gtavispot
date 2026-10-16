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

export const gta6LaunchTrailer: ArticleData = {
  title: 'GTA 6 Launch Trailer: New Footage, Justice Song Debut',
  metaDescription: 'Rockstar released the GTA 6 launch trailer on October 15: 90 seconds of new PS5 footage plus a new Justice song featuring Tame Impala, SZA and King Gizzard.',
  focusKeyword: 'gta 6 launch trailer',
  h1: 'GTA 6 Launch Trailer: New Footage, Justice Song Debut',
  publishedDate: 'October 16, 2026',
  modifiedDate: 'October 16, 2026',
  author: 'Editorial Staff',
  featureImage: '/images/news/gta-6-launch-trailer-helicopter-night-vice-city.webp',
  featureImageAlt: 'Helicopter escape over Vice City at night from the official GTA 6 launch trailer',
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
        <span className="fw-flag confirmed">Confirmed</span> Rockstar Games released the official Grand Theft Auto 6 Launch Trailer on October 15, 2026, five weeks before the game arrives on November 19. The roughly 90-second video shows new footage of Jason Duval and Lucia Caminos and debuts a brand new song, "Flower in a Hurricane", from the composers of the game's original score.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Answer: GTA 6 Launch Trailer</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>What:</strong> Rockstar released the official GTA 6 Launch Trailer on October 15, 2026, about five weeks before launch.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Footage:</strong> new cinematics and gameplay-style shots of Jason and Lucia, an easy score that goes wrong and a criminal conspiracy across Leonida. Rockstar says the footage was captured on PS5.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Music:</strong> a new single, "Flower in a Hurricane", from French electronic duo Justice, featuring Tame Impala, SZA and King Gizzard &amp; The Lizard Wizard. Justice are composing the game's original score.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Launch:</strong> GTA 6 releases November 19, 2026 on PS5 and Xbox Series X|S. Digital preloads open November 12. No PC release date has been announced.</span>
          </li>
        </ul>
      </div>

      <h2>Key takeaways</h2>
      <ul>
        <li>Rockstar Games released the official GTA 6 Launch Trailer on October 15, 2026.</li>
        <li>The trailer runs about 90 seconds and Rockstar says the footage was captured on PlayStation 5.</li>
        <li>It debuts "Flower in a Hurricane", a new Justice single featuring Tame Impala, SZA and King Gizzard &amp; The Lizard Wizard.</li>
        <li>Rockstar confirmed Justice are composing GTA 6's original score; the song also appears on Grand Theft Auto VI: The Album.</li>
        <li>The Album is available to pre-save on streaming services and to pre-order on vinyl and CD; a separate original score album is planned.</li>
        <li>GTA 6 launches November 19, 2026 on PS5 and Xbox Series X|S, with digital preloads opening November 12. No PC date announced.</li>
      </ul>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/gta-6-launch-trailer-helicopter-night-vice-city.webp"
          alt="Helicopter escape over Vice City at night from the official GTA 6 launch trailer"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 840px"
          className={styles.featureImage}
          priority
        />
      </div>
      <p className="img-credit">Image: Rockstar Games (GTA 6 launch trailer screenshot)</p>

      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', margin: '1.5rem 0', borderRadius: '8px' }}>
        <iframe
          src="https://www.youtube.com/embed/rz1B4B2yBZY"
          title="GTA 6 Launch Trailer - Rockstar Games"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          "name": "GTA 6 Launch Trailer",
          "description": "Rockstar Games released the official GTA 6 launch trailer on October 15, 2026: 90 seconds of new PS5 footage featuring Jason Duval and Lucia Caminos, debuting the song Flower in a Hurricane by Justice.",
          "thumbnailUrl": "https://www.gtavispot.com/images/news/gta-6-launch-trailer-helicopter-night-vice-city.webp",
          "uploadDate": "2026-10-15",
          "duration": "PT1M30S",
          "embedUrl": "https://www.youtube.com/embed/rz1B4B2yBZY",
          "contentUrl": "https://www.youtube.com/watch?v=rz1B4B2yBZY",
          "publisher": {
            "@type": "Organization",
            "name": "Rockstar Games",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.gtavispot.com/images/news/gta-6-launch-trailer-helicopter-night-vice-city.webp"
            }
          }
        })}} />

      <h2>What happens in the GTA 6 launch trailer?</h2>
      <p>
        <span className="fw-flag confirmed">Confirmed</span> The Launch Trailer keeps Jason Duval and Lucia Caminos at the center. Rockstar's story description frames it as an easy score that goes wrong, pulling the pair into a criminal conspiracy that stretches across the state of Leonida, where they have to rely on each other more than ever to make it out alive.
      </p>
      <p>
        The montage mixes bank heists, a helicopter escape, boat and highway chases, and quieter character moments between the two leads. Coverage of the trailer notes shots of Jason reflecting on his troubled past in the army and a phone call that sets up his partnership with Lucia, before the action ramps up through Leonida's streets and waterways.
      </p>
      <p>
        Read our breakdown of <Link href="/story/gta-6-romance-system/">Jason and Lucia's relationship system</Link> for how their bond shapes the story.
      </p>

      <h2>GTA 6 launch trailer screenshots</h2>
      <p>
        Key frames from the official launch trailer, captured on PlayStation 5.
      </p>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/gta-6-launch-trailer-play-has-no-limits.webp"
          alt="Play Has No Limits title card from the GTA 6 launch trailer"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 840px"
          className={styles.featureImage}
          loading="lazy"
        />
      </div>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/gta-6-launch-trailer-november-19-2026-preorder.webp"
          alt="November 19, 2026 release date and pre-order now screen from the GTA 6 launch trailer"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 840px"
          className={styles.featureImage}
          loading="lazy"
        />
      </div>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/gta-6-launch-trailer-helicopter-night-vice-city.webp"
          alt="Helicopter escape over Vice City at night from the GTA 6 launch trailer"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 840px"
          className={styles.featureImage}
          loading="lazy"
        />
      </div>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/gta-6-launch-trailer-jason-leonida-keys.webp"
          alt="Jason looking over the Leonida Keys waterfront from the GTA 6 launch trailer"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 840px"
          className={styles.featureImage}
          loading="lazy"
        />
      </div>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/gta-6-launch-trailer-gta-vi-logo-vice-city.webp"
          alt="GTA VI logo over Vice City skyline from the GTA 6 launch trailer"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 840px"
          className={styles.featureImage}
          loading="lazy"
        />
      </div>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/gta-6-launch-trailer-ps5-plays-best.webp"
          alt="Plays Best on PS5 branding from the GTA 6 launch trailer"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 840px"
          className={styles.featureImage}
          loading="lazy"
        />
      </div>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/gta-6-launch-trailer-character-snake-scene.webp"
          alt="Character scene from the GTA 6 launch trailer"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 840px"
          className={styles.featureImage}
          loading="lazy"
        />
      </div>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/gta-6-launch-trailer-logo-neon.webp"
          alt="Neon GTA logo from the GTA 6 launch trailer"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 840px"
          className={styles.featureImage}
          loading="lazy"
        />
      </div>

      <NewsCTAButton href="/news/gta-6-release-date/">GTA 6 release date: everything confirmed for November 19</NewsCTAButton>

      <h2>What is the song in the GTA 6 launch trailer?</h2>
      <p>
        <span className="fw-flag confirmed">Confirmed</span> The trailer debuts "Flower in a Hurricane", a brand new single from French electronic duo Justice, featuring Tame Impala, SZA and King Gizzard &amp; The Lizard Wizard. The single was released the same day as the trailer, October 15, 2026.
      </p>
      <p>
        The bigger news is behind the song: Rockstar confirmed that Justice are composing the original score for Grand Theft Auto 6. Their music had already appeared in the score of August's Extended Look, but this is the studio's formal announcement. The track also appears on <em>Grand Theft Auto VI: The Album</em>, the game's official soundtrack, alongside songs from Travis Scott, Cardi B, Yung Lean, PinkPantheress, Keith Richards, Rauw Alejandro and Fuerza Regida.
      </p>
      <p>
        The Album is available to pre-save on streaming services and to pre-order on vinyl and CD, with release set for November 19 alongside the game. Rockstar says a separate original score album will follow with further details to come. See our <Link href="/news/gta-6-soundtrack-album/">GTA 6 soundtrack and album guide</Link> for every track announced so far.
      </p>

      <h2>Was the GTA 6 launch trailer captured on PS5?</h2>
      <p>
        <span className="fw-flag confirmed">Confirmed</span> Yes. Rockstar says the Launch Trailer footage was captured on PlayStation 5, which makes this trailer a close look at the game running on current console hardware rather than a cinematic rendered outside the game. Reporting on the trailer notes PS5 branding around the presentation.
      </p>
      <p>
        The trailer does not change the platform plan: GTA 6 is still confirmed for simultaneous launch on PlayStation 5 and Xbox Series X|S. What has not changed either is the PC situation, which Rockstar has still not dated. Our <Link href="/news/gta-6-pc-release-date/">GTA 6 PC release date post</Link> tracks the latest reports.
      </p>

      <h2>When can you play GTA 6 after the launch trailer?</h2>
      <p>
        <span className="fw-flag confirmed">Confirmed</span> GTA 6 launches on November 19, 2026, and Rockstar has confirmed digital preloads open on November 12, so players can download the game a week early and be ready for launch day. The trailer itself carried no hint of another delay; the release date stands as announced.
      </p>
      <p>
        With five weeks to go, the launch trailer is likely the last major video before release. Our <Link href="/news/gta-6-timeline/">GTA 6 timeline</Link> tracks every trailer and milestone, and our <Link href="/news/gta-6-pre-order/">pre-order guide</Link> covers where to secure a copy.
      </p>

      <NewsCTAButton href="/news/gta-6-pre-order/">Pre-order GTA 6: editions, prices and where to buy</NewsCTAButton>

      <div className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>When did Rockstar release the GTA 6 launch trailer?</h3>
          <p className={styles.faqAnswer}>
            Rockstar Games released the official GTA 6 Launch Trailer on October 15, 2026, about five weeks before the game's November 19 launch. It runs roughly 90 seconds and features new footage of Jason Duval and Lucia Caminos.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Where can I watch the GTA 6 launch trailer?</h3>
          <p className={styles.faqAnswer}>
            The trailer is on Rockstar Games' official YouTube channel and the studio's social accounts. The roughly 90-second video is titled the Launch Trailer, and Rockstar says its footage was captured on PlayStation 5.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>What song plays in the GTA 6 launch trailer?</h3>
          <p className={styles.faqAnswer}>
            The trailer debuts "Flower in a Hurricane", a new single from French electronic duo Justice, featuring Tame Impala, SZA and King Gizzard &amp; The Lizard Wizard. Justice are also composing GTA 6's original score, and the song appears on Grand Theft Auto VI: The Album, which releases November 19.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Is GTA 6 still launching on November 19, 2026?</h3>
          <p className={styles.faqAnswer}>
            Yes. The launch trailer confirms the date stands: GTA 6 releases November 19, 2026 on PlayStation 5 and Xbox Series X|S. Digital preloads open November 12. Rockstar has not announced a PC release date.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Did the launch trailer reveal any new story details?</h3>
          <p className={styles.faqAnswer}>
            The trailer sticks to the core setup: Jason and Lucia attempt an easy score that goes wrong, pulling them into a criminal conspiracy across Leonida. It shows new shots of the pair, including Jason's army backstory and the call that sets up their partnership, but reveals no major plot spoilers.
          </p>
        </div>
      </div>

      <p><em>Last checked: October 16, 2026. Sources: <a href="https://thegeek.games/2026/10/15/gta-vis-launch-trailer-is-here-and-rockstar-has-a-major-musical-reveal-too-video/" target="_blank" rel="noopener noreferrer">theGeek.games</a>, <a href="https://consequence.net/2026/10/justice-gta-6-score-flower-in-a-hurricane-tame-impala-sza/" target="_blank" rel="noopener noreferrer">Consequence</a>, <a href="https://www.soleretriever.com/news/articles/grand-theft-auto-6-launch-trailer" target="_blank" rel="noopener noreferrer">soleretriever.com</a>, <a href="https://www.vice-atlas.com/briefings/gta6-trailer-songs/" target="_blank" rel="noopener noreferrer">Vice Atlas</a>, <a href="https://windowsforum.com/news/gta-6-launch-trailer-is-ps5-branded-but-xbox-series-x-s-release-remains-set-for-november-19.448487/" target="_blank" rel="noopener noreferrer">WindowsForum</a>.</em></p>
    </ImageLightbox>
  ),
};
