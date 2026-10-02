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

export const gta6SoundtrackAlbum: ArticleData = {
  title: 'GTA 6 Soundtrack: The Album – Songs, Artists & Vinyl',
  metaDescription: 'GTA 6 soundtrack revealed: Rockstar x Atlantic Records\u2019 The Album drops Nov 19 with 34 tracks. All 6 singles, artists, vinyl & CD pre-order prices inside.',
  focusKeyword: 'GTA 6 soundtrack',
  h1: 'GTA 6 Soundtrack: The Album – All Songs & Artists',
  publishedDate: 'October 2, 2026',
  modifiedDate: 'October 2, 2026',
  author: 'Qamar Farooq',
  featureImage: '/images/news/IMG-20261002-WA0011.jpg',
  featureImageAlt: 'Official Grand Theft Auto VI The Album key art with Jason and Lucia leaning on a car against the Vice City skyline at sunset',
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
        .album-table-wrap {
          overflow-x: auto;
          margin: 1.75rem 0;
          border-radius: 12px;
          border: 1px solid var(--border, #e2e8f0);
          box-shadow: 0 4px 14px rgba(0,0,0,0.04);
        }
        .album-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.95rem;
          text-align: left;
          background: var(--bg-surface, #ffffff);
        }
        .album-table th {
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
        .album-table td {
          padding: 12px 16px;
          border-bottom: 1px solid var(--border-light, #f1f5f9);
          color: var(--text-secondary, #334155);
          vertical-align: middle;
        }
        .album-table tr:last-child td {
          border-bottom: none;
        }
        .album-table td:nth-child(2) {
          font-weight: 700;
          color: var(--brand-magenta, #d6246e);
          white-space: nowrap;
        }
      `}} />

      <p>
        Grand Theft Auto VI: The Album arrives November 19, 2026 — the same day GTA 6 launches on PS5 and Xbox Series X|S. Rockstar Games and Atlantic Records announced the 34-track collection of brand-new original songs on September 17, and six singles are already streaming on all major services.
      </p>
      <p>
        Most coverage mixes confirmed songs with guesswork. This page does the opposite: everything below is either confirmed by Rockstar or clearly labeled unrevealed. Six songs you can hear today, 28 Rockstar hasn&apos;t named yet — no filler, no speculation.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/IMG-20261002-WA0011.jpg"
          alt="Official Grand Theft Auto VI The Album key art with Jason and Lucia leaning on a car against the Vice City skyline at sunset"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Official Source: <a href="https://www.rockstargames.com/newswire/article/7599a881942544/announcing-grand-theft-auto-vi-the-album-coming-november-19" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-magenta)', textDecoration: 'underline' }}>Rockstar Games&apos; official announcement</a>
        </div>
      </div>

      {/* Quick Answer Block for Google AI Overviews and Snippets */}
      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Answer: GTA 6 The Album Key Facts</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Release date:</strong> November 19, 2026 — same day as the <Link href="/news/gta-6-release-date/">GTA 6 release date</Link>. Streaming and digital out day one; vinyl editions ship November 20.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Tracklist:</strong> 34 original songs made for the game. 6 singles are streaming now; the other 28 are still unrevealed.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Physical editions:</strong> CD ($19.98), standard vinyl ($49.98), limited liquid-filled vinyl ($124.98) — the limited edition reportedly sold out in under an hour on several storefronts.</span>
          </li>
        </ul>
      </div>

      <h2>Which Songs Are on GTA 6: The Album?</h2>
      <p>
        Six of the 34 tracks are confirmed and streaming now. <strong>These are the only songs Rockstar has officially named so far</strong> — each one an original written for the album, not a licensed oldie:
      </p>
      <ul>
        <li>Yung Lean – &ldquo;That&apos;s It&rdquo; (feat. Future &amp; Metro Boomin)</li>
        <li>Travis Scott – &ldquo;RHYNO&rdquo; (prod. by Guy-Manuel de Homem-Christo of Daft Punk)</li>
        <li>CA7RIEL &amp; Paco Amoroso, PinkPantheress, Fred again.. &amp; Étienne de Crécy – &ldquo;Sexy Magic&rdquo;</li>
        <li>Morgan Wallen – &ldquo;Last Thing You Need&rdquo;</li>
        <li>Rauw Alejandro – &ldquo;Macacoa 2000&rdquo;</li>
        <li>Keith Richards – &ldquo;Bright Lights, Big City&rdquo;</li>
      </ul>
      <p>
        That&apos;s the complete confirmed list as of October 2, 2026. If a song isn&apos;t listed here, Rockstar hasn&apos;t announced it — no matter what social media claims.
      </p>

      <h2>What About the Other 28 Tracks?</h2>
      <p>
        Rockstar has not named the remaining 28 tracks or said when the full tracklist drops. The album is billed as a cross-genre roster spanning hip-hop, Latin, country, rock, pop, and electronic music, built around the world of Vice City and Leonida.
      </p>
      <p>
        Rockstar also teased that more details are coming on the game&apos;s dynamic score and what it calls the next evolution of in-game radio. That&apos;s separate from The Album — treat any in-game radio station tracklists you see online as unconfirmed until Rockstar says otherwise.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/IMG-20261002-WA0010.jpg"
          alt="Official GTA VI The Album vinyl packaging artwork showing the splatter vinyl edition, cover art, and flamingo ice illustration"
          width={800}
          height={800}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Official GTA VI: The Album vinyl artwork — splatter edition, cover art, and exclusive illustrations.
        </div>
      </div>

      <h2>How Much Does The Album Cost on Vinyl and CD?</h2>
      <p>
        The game itself is digital-only — even the boxed edition is a download code, as our <Link href="/news/gta-6-physical-copy/">GTA 6 physical copy</Link> breakdown explains. The Album is the thing you can actually hold. Three editions are up for pre-order:
      </p>

      <div className="album-table-wrap">
        <table className="album-table">
          <thead>
            <tr>
              <th>Edition</th>
              <th>Price</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CD (jewel case)</td>
              <td>$19.98</td>
              <td>Cheapest physical option</td>
            </tr>
            <tr>
              <td>Standard vinyl</td>
              <td>$49.98</td>
              <td>Two transparent magenta discs with blue splatter</td>
            </tr>
            <tr>
              <td>Limited liquid-filled vinyl</td>
              <td>$124.98</td>
              <td>Two magenta discs filled with blue liquid; reportedly sold out in under an hour on several storefronts</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        NME counts 11 vinyl variants and two CD editions across retailers, with store-exclusive colorways at Blood Records, Best Buy, Walmart, Amazon, Target, Urban Outfitters, and independents. The magenta pressings are the official-store exclusives. If you&apos;re collecting launch memorabilia, the <Link href="/news/gta-6-vice-city-collection/">Vice City Collection</Link> box is the other big-ticket item — but unlike the game, the album actually ships on physical media.
      </p>

      <NewsCTAButton href="https://www.rockstargames.com/VI/music" isExternal>
        Pre-Order The Album
      </NewsCTAButton>

      <h2>What Does the Lineup Tell Us About GTA 6&apos;s Sound?</h2>
      <p>
        Read the six singles as a signal, not a tracklist. Hip-hop, reggaeton, country, rock, and French house on one album mirrors the cultural collision of Leonida itself — Rockstar is scoring a place, not a playlist.
      </p>
      <p>
        That cross-genre spread is also why the teased in-game radio revamp matters. GTA built its identity on radio stations, and a 34-track original album suggests music is a headline feature this time. Until Rockstar shares details, that&apos;s informed reading — not confirmation.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/IMG-20261002-WA0012.jpg"
          alt="Official GTA VI The Album vinyl package artwork with Rockstar logo illustration, flamingo art, and liquid-filled vinyl disc"
          width={800}
          height={800}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          The limited liquid-filled vinyl edition with exclusive GTA VI artwork.
        </div>
      </div>

      <h2>Frequently Asked Questions: GTA 6 The Album</h2>

      <div className={styles.faqItem}>
        <h3 className={styles.faqQuestion}>When does Grand Theft Auto VI: The Album release?</h3>
        <p className={styles.faqAnswer}>
          November 19, 2026 — the same day GTA 6 launches on PS5 and Xbox Series X|S. The album hits streaming services and digital stores that day, while physical vinyl editions ship November 20.
        </p>
      </div>

      <div className={styles.faqItem}>
        <h3 className={styles.faqQuestion}>How many songs are on the GTA 6 soundtrack album?</h3>
        <p className={styles.faqAnswer}>
          34 original tracks. Six singles are confirmed and streaming now; Rockstar has not named the remaining 28 yet.
        </p>
      </div>

      <div className={styles.faqItem}>
        <h3 className={styles.faqQuestion}>Which artists are on GTA 6: The Album?</h3>
        <p className={styles.faqAnswer}>
          The confirmed singles come from Yung Lean (feat. Future &amp; Metro Boomin), Travis Scott, CA7RIEL &amp; Paco Amoroso with PinkPantheress, Fred again.. &amp; Étienne de Crécy, Morgan Wallen, Rauw Alejandro, and Keith Richards. The rest of the roster is still unannounced.
        </p>
      </div>

      <div className={styles.faqItem}>
        <h3 className={styles.faqQuestion}>How much does the GTA 6 album cost on vinyl?</h3>
        <p className={styles.faqAnswer}>
          The standard vinyl is $49.98 and the limited liquid-filled edition is $124.98. The CD costs $19.98. The limited edition reportedly sold out in under an hour on several storefronts, though retailer-exclusive variants are still available.
        </p>
      </div>

      <div className={styles.faqItem}>
        <h3 className={styles.faqQuestion}>Is The Album the same as GTA 6&apos;s in-game radio?</h3>
        <p className={styles.faqAnswer}>
          No. The Album is a separate 34-track collection of original songs. Rockstar has teased more details on the game&apos;s dynamic score and in-game radio are coming, but nothing beyond that is confirmed.
        </p>
      </div>

      <p>
        For the other big launch-day collectible, see everything inside the <Link href="/news/gta-6-vice-city-collection/">Vice City Collection box</Link> — or lock in the game itself with our <Link href="/news/gta-6-pre-order/">GTA 6 pre-order guide</Link>.
      </p>
    </ImageLightbox>
  )
};
