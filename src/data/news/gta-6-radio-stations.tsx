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

export const gta6RadioStations: ArticleData = {
  title: 'GTA 6 Radio Stations: All 6 Official Stations & Hosts',
  metaDescription: 'Rockstar revealed 6 official GTA 6 radio stations and first-ever on-demand podcasts. Full station list, hosts, sample tracks and how to listen.',
  focusKeyword: 'gta 6 radio stations',
  h1: 'GTA 6 Radio Stations: All 6 Official Stations & Hosts',
  publishedDate: 'October 8, 2026',
  modifiedDate: 'October 8, 2026',
  author: 'Editorial Staff',
  featureImage: '/images/news/gta-6-radio-stations-featured.webp',
  featureImageAlt: 'GTA 6 Vice City highway with traffic, official screenshot from Rockstar Games',
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
        <span className="fw-flag confirmed">Confirmed</span> Rockstar Games has officially revealed the in-game radio stations of Grand Theft Auto VI. The announcement came through the official Rockstar Newswire on October 8, 2026, alongside a post from the Rockstar Games X account, with a dedicated music section added to the GTA VI website where each station can be previewed right now.
      </p>
      <p>
        Six stations were unveiled in this first wave, and Rockstar calls it the biggest and widest-ranging selection of in-game radio yet. For the first time in series history, GTA VI will also feature on-demand podcasts.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Answer: GTA 6 Radio Stations</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Announcement:</strong> Official, via Rockstar Newswire on October 8, 2026.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Stations revealed:</strong> 6 (Cocoteo FM, Back Country Radio, AfroBank FM, The Chamber 106.6, Flash FM, Dirty South Classics).</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>New feature:</strong> First-ever on-demand podcasts in a GTA game.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Listening:</strong> In vehicles and on foot through new headphones and earbuds linked to the in-game smartphone.</span>
          </li>
        </ul>
      </div>

      <h2>Key takeaways</h2>
      <ul>
        <li>Rockstar officially revealed 6 GTA VI radio stations on October 8, 2026, calling it the biggest radio lineup in series history.</li>
        <li>Flash FM returns from Vice City, joined by five new stations covering Latin, country, African music, metal and Southern hip-hop.</li>
        <li>On-demand podcasts debut in GTA VI, a first for the series.</li>
        <li>Radio and podcasts work on foot for the first time, through in-game headphones and earbuds connected to the smartphone.</li>
        <li>This is not the complete list: Rockstar says stations will range from Classic Rock to Talk Radio.</li>
      </ul>

      <h2>What radio stations are confirmed for GTA 6?</h2>
      <p>
        <span className="fw-flag confirmed">Confirmed</span> The six stations below come straight from Rockstar's official GTA VI website music section, as reported by Push Square, Kotaku, 9to5Toys and others on October 8, 2026.
      </p>

      <table>
        <thead>
          <tr>
            <th>Station</th>
            <th>Genre</th>
            <th>Hosts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cocoteo FM</td>
            <td>Modern Latin</td>
            <td>El Martillo and La Gata</td>
          </tr>
          <tr>
            <td>Back Country Radio</td>
            <td>Renegade country</td>
            <td>MW and Delta Dawne</td>
          </tr>
          <tr>
            <td>AfroBank FM</td>
            <td>African music</td>
            <td>Burna and Palmsy</td>
          </tr>
          <tr>
            <td>The Chamber 106.6</td>
            <td>Metal</td>
            <td>DJ Kerry and DJ Tom</td>
          </tr>
          <tr>
            <td>Flash FM</td>
            <td>Pop</td>
            <td>Robyn and Alex</td>
          </tr>
          <tr>
            <td>Dirty South Classics</td>
            <td>Southern rap and hip-hop</td>
            <td>Trick and Trina</td>
          </tr>
        </tbody>
      </table>

      <h3>Cocoteo FM</h3>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/gta-6-radio-cocoteo-fm.webp"
          alt="Cocoteo FM artwork, GTA 6 modern Latin radio station"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 840px"
          className={styles.featureImage}
        />
      </div>
      <p className="img-credit">Image credit: Official Rockstar Games</p>
      <p>
        <span className="fw-flag confirmed">Confirmed</span> Cocoteo FM is Leonida's home for modern Latin music. Hosted by El Martillo and La Gata, it covers bachata, merengue, dembow and reggaeton. Rockstar's tagline for the station: el party que nunca se apaga, the party that never goes out.
      </p>

      <h3>Back Country Radio</h3>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/gta-6-radio-back-country.webp"
          alt="Back Country Radio artwork, GTA 6 renegade country station with airboat"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 840px"
          className={styles.featureImage}
        />
      </div>
      <p className="img-credit">Image credit: Official Rockstar Games</p>
      <p>
        <span className="fw-flag confirmed">Confirmed</span> MW and Delta Dawne blast renegade country music across the Grassrivers, Port Gellhorn and beyond. The station also features a roving reporter and swamp meteorologist, plus Mud Dog Mike, Delta's not-so-secret lover, checking in from the driver's seat of his Grassrivers airboat.
      </p>

      <h3>AfroBank FM</h3>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/gta-6-radio-afro-bank-fm.webp"
          alt="AfroBank FM artwork, GTA 6 African music radio station"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 840px"
          className={styles.featureImage}
        />
      </div>
      <p className="img-credit">Image credit: Official Rockstar Games</p>
      <p>
        <span className="fw-flag confirmed">Confirmed</span> Burna and Palmsy curate the best in African music on AfroBank FM, from 20th-century classics and undiscovered gems to contemporary sounds like amapiano and 3-step. The station's motto: turn up the gbedu.
      </p>

      <h3>The Chamber 106.6</h3>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/gta-6-radio-the-chamber.webp"
          alt="The Chamber 106.6 artwork, GTA 6 metal radio station"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 840px"
          className={styles.featureImage}
        />
      </div>
      <p className="img-credit">Image credit: Official Rockstar Games</p>
      <p>
        <span className="fw-flag confirmed">Confirmed</span> Crushing metal has landed in Leonida. DJ Kerry and DJ Tom spin classic metal from the 80s and beyond, channeling what Rockstar calls Leonida's deep metal roots.
      </p>

      <h3>Flash FM</h3>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/gta-6-radio-flash-fm.webp"
          alt="Flash FM artwork, returning GTA Vice City pop radio station in GTA 6"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 840px"
          className={styles.featureImage}
        />
      </div>
      <p className="img-credit">Image credit: Official Rockstar Games</p>
      <p>
        <span className="fw-flag confirmed">Confirmed</span> The Vice City institution returns. Flash FM delivers pop music with hosts Robyn and Alex, promising grooves no matter where players find themselves in the Goodtime State.
      </p>

      <h3>Dirty South Classics</h3>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/gta-6-radio-dirty-south-classics.webp"
          alt="Dirty South Classics artwork, GTA 6 Southern hip-hop radio station"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 840px"
          className={styles.featureImage}
        />
      </div>
      <p className="img-credit">Image credit: Official Rockstar Games</p>
      <p>
        <span className="fw-flag confirmed">Confirmed</span> Trick and Trina bring Southern hospitality to the airwaves with regional rap and hip-hop classics. From the beach to the block, nobody reps Leonida and the South like they do, according to Rockstar.
      </p>

      <NewsCTAButton href="/news/gta-6-soundtrack-album/">GTA 6 soundtrack album: everything confirmed so far</NewsCTAButton>

      <h2>What are the GTA 6 podcasts?</h2>
      <p>
        <span className="fw-flag confirmed">Confirmed</span> For the first time in series history, GTA VI will feature a series of on-demand podcasts for Jason and Lucia to experience beyond Leonida's terrestrial radio. Rockstar has not yet named the podcast shows or their hosts, so expect a follow-up announcement closer to launch.
      </p>

      <h2>Can you listen to the radio on foot in GTA 6?</h2>
      <p>
        <span className="fw-flag confirmed">Confirmed</span> Yes. Both radio stations and podcasts can be enjoyed in vehicles and on foot through newly introduced headphones and earbuds connected to the characters' smartphones. This is a first for the series, where radio was previously limited to vehicles.
      </p>

      <h2>What songs are confirmed for GTA 6 radio?</h2>
      <p>
        Rockstar's website lets visitors preview each station with sample tracks. These previews were documented by Final Weapon on October 8, 2026 and include:
      </p>
      <table>
        <thead>
          <tr>
            <th>Station</th>
            <th>Sample tracks from the official preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cocoteo FM</td>
            <td>EoO by Bad Bunny; Canalla by Romeo Santos and El Chaval de la Bachata</td>
          </tr>
          <tr>
            <td>Back Country Radio</td>
            <td>Need a Little Time Off for Bad Behavior by David Allan Coe; Don't Come Home A-Drinkin' by Loretta Lynn</td>
          </tr>
          <tr>
            <td>AfroBank FM</td>
            <td>Joha by Asake; Gye Wani by Pat Thomas ft. Ebo Taylor</td>
          </tr>
          <tr>
            <td>The Chamber 106.6</td>
            <td>I by Black Sabbath; Raining Blood by Slayer</td>
          </tr>
          <tr>
            <td>Flash FM</td>
            <td>Good Ones by Charli xcx; Electric Feel by MGMT</td>
          </tr>
          <tr>
            <td>Dirty South Classics</td>
            <td>Like A Pimp by David Banner ft. Lil' Flip; Who Dat by JT Money ft. Sole</td>
          </tr>
        </tbody>
      </table>
      <p>
        These are preview samples, not the full tracklists. The complete song lists will likely be revealed closer to the November 19, 2026 launch.
      </p>

      <h2>Is this the full GTA 6 station list?</h2>
      <p>
        <span className="fw-flag confirmed">Confirmed</span> No. Rockstar says the stations will range from Classic Rock to Talk Radio, which means more stations are still unannounced. PlayStation Universe notes this first wave is not the complete list, so expect further reveals in the coming weeks.
      </p>

      <div className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>How many radio stations will GTA 6 have?</h3>
          <p className={styles.faqAnswer}>
            Rockstar has revealed 6 stations so far and calls it the biggest radio lineup in series history. More stations are expected, since the company says the range will span Classic Rock to Talk Radio.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Will GTA 6 have podcasts?</h3>
          <p className={styles.faqAnswer}>
            Yes. GTA VI will feature on-demand podcasts for the first time in series history. Show names and hosts have not been announced yet.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Can you listen to music on foot in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Yes. New in-game headphones and earbuds connected to the smartphone let Jason and Lucia listen to radio and podcasts while on foot, not just in vehicles.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Is Flash FM coming back in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Yes. Flash FM, the pop station from GTA Vice City, returns in GTA VI with new hosts Robyn and Alex.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Where can I preview the GTA 6 radio stations?</h3>
          <p className={styles.faqAnswer}>
            Rockstar added a music section to the official GTA VI website where each of the six revealed stations can be previewed right now.
          </p>
        </div>
      </div>

      <p><em>Last checked: October 8, 2026. Sources: <a href="https://www.rockstargames.com/newswire/article/o3982oa93a23k4/the-music-of-grand-theft-auto-vi-in-game-radio-stations" target="_blank" rel="noopener noreferrer">Rockstar Games Newswire</a>, <a href="https://x.com/RockstarGames/status/2108197013711958139" target="_blank" rel="noopener noreferrer">Rockstar Games on X</a>, <a href="https://www.pushsquare.com/news/2026/10/gta-6-in-game-radio-stations-announced-and-you-can-preview-them-right-now" target="_blank" rel="noopener noreferrer">Push Square</a> and <a href="https://finalweapon.net/2026/10/08/grand-theft-auto-vi-releases-radio-station-previews/" target="_blank" rel="noopener noreferrer">Final Weapon</a> on the station previews.</em></p>
    </ImageLightbox>
  ),
};
