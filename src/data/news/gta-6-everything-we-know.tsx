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

export const gta6EverythingWeKnow: ArticleData = {
  title: 'Everything We Know About GTA 6 (Updated Daily)',
  metaDescription: 'Everything we know about GTA 6: the November 19, 2026 release date, Jason and Lucia, Leonida, new gameplay systems, pricing, and what is still unknown.',
  focusKeyword: 'everything we know about gta 6',
  h1: 'Everything We Know About GTA 6',
  publishedDate: 'October 16, 2026',
  modifiedDate: 'October 16, 2026',
  author: 'Editorial Staff',
  featureImage: '/images/Official_Cover_Art/Official_Cover_Art_landscape.webp',
  featureImageAlt: 'Official GTA 6 cover art showing Jason Duval and Lucia Caminos above Vice City.',
  content: (
    <ImageLightbox>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/Official_Cover_Art/Official_Cover_Art_landscape.webp"
          alt="Official GTA 6 cover art showing Jason Duval and Lucia Caminos above Vice City."
          width={1200}
          height={630}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          className={styles.featureImage}
        />
      </div>

      <p>
        <strong>GTA 6 launches on November 19, 2026</strong> for PlayStation 5 and Xbox Series X|S. This page is our living GTA 6 hub: everything we know about GTA 6 in one place, from Jason Duval and Lucia Caminos to the Leonida map, the new gameplay systems, pricing, the launch trailer, and the questions Rockstar still has not answered. We refresh it daily as new facts land.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>GTA 6 at a Glance</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Release date:</strong> November 19, 2026, on PS5 and Xbox Series X|S</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Main characters:</strong> Jason Duval and Lucia Caminos</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Setting:</strong> Leonida, with Vice City, about twice the size of GTA 5</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Price:</strong> $79.99 Standard, $99.99 Ultimate</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Latest news:</strong> launch trailer released October 15, 2026</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>PC version:</strong> not announced</span>
          </li>
        </ul>
      </div>

      <div className={styles.callout}>
        <span className={styles.calloutTitle}>Key Takeaways</span>
        <p>
          November 19, 2026 is the confirmed date after two delays, with a single-player launch on PS5 and Xbox Series X|S. No PC version has been announced, the reported 80-hour story length is not a promise, and the biggest open questions (60fps, crossplay, GTA 6 Online timing) all sit with Rockstar. Every claim below links to its full guide, and this hub gets a freshness pass every day until launch.
        </p>
      </div>

      <h2>When Does GTA 6 Come Out?</h2>
      <p>
        Rockstar set the GTA 6 release date as <strong>November 19, 2026</strong>, and it has held through two delays. Rockstar first pushed the game out of 2025 in May 2025, then announced the second delay on November 6, 2025, moving the game from May 26 to November 19. The launch covers PlayStation 5 and Xbox Series X|S only.
      </p>
      <p>
        Pre-loading is <strong>reported</strong> to begin on November 12, 2026, based on PlayStation Store listings. Rockstar has not confirmed that date, so treat it as reported, not official. Boxed copies are expected on store shelves around the same time, with a midnight local unlock expected in most regions. Our <Link href="/guides/gta-6-preload-unlock-times/">GTA 6 pre-load and unlock times guide</Link> tracks the region-by-region picture, and our <Link href="/news/gta-6-release-date/">release date hub</Link> covers every delay and announcement.
      </p>
      <table>
        <thead>
          <tr>
            <th>Edition</th>
            <th>Price</th>
            <th>What you get</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Standard</td>
            <td>$79.99</td>
            <td>Base game</td>
          </tr>
          <tr>
            <td>Ultimate</td>
            <td>$99.99</td>
            <td>Digital extras on top of the base game</td>
          </tr>
          <tr>
            <td>Collector&apos;s Box</td>
            <td>$399.99</td>
            <td>Physical merchandise; the box holds a download code, not a disc</td>
          </tr>
        </tbody>
      </table>
      <p>
        Pre-orders opened on June 25, 2026, with a Vintage Vice City Pack bonus for orders placed by November 20. Note the physical detail: boxed copies contain a download code rather than a game disc. Regional prices vary widely, from about $58 in Korea to over $100 in Israel. Our <Link href="/news/gta-6-price/">GTA 6 price guide</Link> has the full regional table.
      </p>

      <h2>Who Are Jason and Lucia?</h2>
      <p>
        GTA 6 follows <strong>Jason Duval and Lucia Caminos</strong>, two criminals in the state of Leonida whose story plays out in a modern Bonnie-and-Clyde style. A heist gone wrong pulls them back together, and the October 15 launch trailer leans into that partnership. The trailer hints at Jason&apos;s military past, while Lucia&apos;s ankle monitor, visible in the official key art, points to a story that starts just after her release from prison.
      </p>
      <p>
        Rockstar has said the romance between the two is <strong>completely optional</strong>, so players who want a pure crime story can keep it that way. Our <Link href="/story/gta-6-romance-system/">GTA 6 romance system guide</Link> explains how the relationship works and what it changes.
      </p>
      <p>
        On story length, Rockstar&apos;s Rob Nelson has put the main campaign at around <strong>80 hours</strong>. Treat that as a reported figure rather than a promise: Rockstar has not published an official length. Our <Link href="/story/how-long-to-beat/">how long to beat guide</Link> adds the context and the skepticism that number deserves.
      </p>
      <p>
        The wider cast is still filling in. Stephen Root&apos;s involvement is confirmed (he confirmed it to the Associated Press), though his character remains unnamed. Our <Link href="/story/gta-6-characters/">GTA 6 characters guide</Link> separates the confirmed names from the rumoured ones with a confirmed-vs-rumoured table.
      </p>

      <h2>Where Is GTA 6 Set?</h2>
      <p>
        GTA 6 is set in <strong>Leonida</strong>, Rockstar&apos;s take on Florida, with Vice City at its heart. Rockstar told Game Informer on September 29, 2026 that Leonida is roughly <strong>twice the size of GTA 5&apos;s map</strong> and the largest world the studio has ever built.
      </p>
      <p>
        The state is organized into six counties. Here is what each one&apos;s status looks like right now:
      </p>
      <table>
        <thead>
          <tr>
            <th>County</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Vice-Dale</td>
            <td>Seen in trailers</td>
          </tr>
          <tr>
            <td>Leonard</td>
            <td>Seen in trailers</td>
          </tr>
          <tr>
            <td>Kelly</td>
            <td>Seen in trailers</td>
          </tr>
          <tr>
            <td>Mariana</td>
            <td>Seen in trailers</td>
          </tr>
          <tr>
            <td>Ambrosia</td>
            <td>Official region; county status comes from the mapping community</td>
          </tr>
          <tr>
            <td>Lummox</td>
            <td>Reported only</td>
          </tr>
        </tbody>
      </table>
      <p>
        Fan mapping projects estimate the landmass at around 160 square kilometers, a reported figure, not an official one. More than 700 enterable interiors have also been reported. Our <Link href="/map/size/">GTA 6 map size guide</Link> carries the county taxonomy, the comparison table against GTA 5 and Red Dead Redemption 2, and the honest caveats.
      </p>

      <h2>What Are the New Gameplay Systems?</h2>
      <p>
        The biggest mechanical shift is law enforcement. GTA 6 runs a <strong>six-star wanted system</strong> with a Heat mechanic and a Criminal Profile that tracks your crimes, and police now coordinate roadblocks instead of spawning next to you. Our <Link href="/guides/gta-6-wanted-system/">wanted system guide</Link> breaks down all six stars and the escape methods.
      </p>
      <p>
        You switch between Jason and Lucia on two levels, including mid-mission, and instant switching has been reported. Combat adds a Dead Eye-style Focus meter, prone movement, and trunk weapon storage, while a body system shapes how your character handles. The <Link href="/weapons/">weapons hub</Link> tracks every confirmed gun by category, plus Phil&apos;s Ammu-Nation and customization, and the <Link href="/vehicles/">vehicles hub</Link> tracks the 283 to 294 vehicles the community has identified, a reported count, alongside vehicle security levels like the Slim Jim and the tracker jammer.
      </p>
      <p>
        Away from crime, side activities range from kayaking and fishing to hunting and gyms, and some of them build the bond between Jason and Lucia. Our <Link href="/guides/gta-6-side-activities/">side activities guide</Link> lists what is confirmed and cites the source for each one. On cheats, the honest answer is that <strong>zero cheat codes are confirmed</strong>; our <Link href="/cheats/">cheats page</Link> explains why and how to spot fake cheat sites.
      </p>

      <h2>What Is the Latest GTA 6 News?</h2>
      <p>
        Rockstar released the <strong>GTA 6 launch trailer on October 15, 2026</strong>, with gameplay footage captured on PlayStation 5. The trailer debuted a new original song, &ldquo;Flower in a Hurricane,&rdquo; by Justice featuring Tame Impala, SZA and King Gizzard and the Lizard Wizard, and it confirmed <strong>Justice as the composer of the game&apos;s original score</strong>. Our <Link href="/news/gta-6-launch-trailer/">launch trailer breakdown</Link> has the full shot-by-shot details.
      </p>
      <p>
        The trailer landed just inside The Game Awards 2026 eligibility window: games must be commercially available by 9 PM PT on November 20, and GTA 6 releases on November 19. The ceremony takes place on December 10, 2026, at the Peacock Theater in Los Angeles. Fans were quick to note that timing.
      </p>
      <p>
        On the leak front, the anonymous Cyberleek account said on October 14, 2026 that it would <strong>not</strong> release the &ldquo;full playable build&rdquo; of GTA 6 it had been promoting, after its linked token failed to reach the $30 million market cap it had set as the condition. Outlets including IGN, PCMag UK and GamesIndustry.biz covered the reversal. Our <Link href="/news/gta-6-build-leak-threat/">build leak threat tracker</Link> has the full timeline.
      </p>
      <p>
        Xbox&apos;s Matthew Ball posted on October 7 that GTA 6 has no exclusive Xbox streaming arrangement and <strong>will not stream to PC</strong> through cloud gaming, closing off the cloud as a back door to a PC launch. Rockstar&apos;s own support pages still list only PlayStation 5 and Xbox Series X|S. Our <Link href="/news/gta-6-pc-release-date/">PC release date guide</Link> tracks that side of the story.
      </p>

      <h2>What Do We Still Not Know About GTA 6?</h2>
      <p>
        Plenty. Here is the honest split between what is confirmed and what Rockstar still has not said:
      </p>
      <table>
        <thead>
          <tr>
            <th>Confirmed</th>
            <th>Not yet confirmed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>November 19, 2026 release on PS5 and Xbox Series X|S</td>
            <td>PC release date (no version announced)</td>
          </tr>
          <tr>
            <td>$79.99 / $99.99 pricing</td>
            <td>60fps or a performance mode (Rob Nelson: current builds run 30fps, 60fps undecided)</td>
          </tr>
          <tr>
            <td>ESRB Mature 17+ rating</td>
            <td>Crossplay and cross-save</td>
          </tr>
          <tr>
            <td>Single-player at launch</td>
            <td>GTA 6 Online timing (a 2027 window is reported)</td>
          </tr>
          <tr>
            <td>Six-star wanted system with Heat</td>
            <td>Story DLC plans</td>
          </tr>
          <tr>
            <td>Justice composing the original score</td>
            <td>Switch 2 port (Nintendo says it is Rockstar and Take-Two&apos;s call)</td>
          </tr>
        </tbody>
      </table>
      <p>
        The performance question matters most to console players: our <Link href="/tech/gta-6-graphics/">graphics guide</Link> covers the 30fps quote and PS5 Pro expectations, our <Link href="/tech/gta-6-crossplay/">crossplay guide</Link> explains why 13 years of GTA Online with zero crossplay is the honest precedent, and our <Link href="/online/gta-6-online-release-date/">GTA 6 Online guide</Link> tracks the 2027 reports. For PC players, the key number is the install: expect 150 to 200GB with 250GB free recommended, per our <Link href="/tech/gta-6-system-requirements/">system requirements guide</Link>.
      </p>

      <NewsCTAButton href="/news/gta-6-release-date/">
        GTA 6 Release Date: Every Confirmed Detail
      </NewsCTAButton>

      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions About GTA 6</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>When does GTA 6 come out?</h3>
          <p className={styles.faqAnswer}>
            GTA 6 releases on November 19, 2026, for PlayStation 5 and Xbox Series X|S. Rockstar announced the date with its second delay on November 6, 2025, after first pushing the game out of 2025 in May 2025.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Is GTA 6 coming to PC?</h3>
          <p className={styles.faqAnswer}>
            No PC version has been announced. Rockstar&apos;s official listings cover PlayStation 5 and Xbox Series X|S only, and Xbox has confirmed the game will not stream to PC through cloud gaming either. Our PC release date guide tracks every signal.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>How much will GTA 6 cost?</h3>
          <p className={styles.faqAnswer}>
            The Standard edition costs $79.99 and the Ultimate edition costs $99.99, with a $399.99 Collector&apos;s Box for physical merchandise. Boxed copies contain a download code, not a game disc.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>How long is GTA 6&apos;s story?</h3>
          <p className={styles.faqAnswer}>
            Around 80 hours has been reported via Rockstar&apos;s Rob Nelson, but treat that as a reported figure, not a promise. Rockstar has not published an official campaign length.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Will GTA 6 have online multiplayer at launch?</h3>
          <p className={styles.faqAnswer}>
            No online mode has been confirmed for launch day. Reports point to a 2027 window for GTA 6&apos;s online component, and the ESRB rating notably lacks the &ldquo;Users Interact&rdquo; label that an online mode would carry.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Will there be another GTA 6 trailer?</h3>
          <p className={styles.faqAnswer}>
            Rockstar has not said. The October 15, 2026 launch trailer is the latest footage, and outlets describe it as likely the final trailer before the November 19 release.
          </p>
        </div>
      </section>

      <p>
        Bookmark this page. We update this GTA 6 hub every day until launch, and every section links to its full guide above, so anything that changes here gets the deep treatment there too.
      </p>

      <p>
        Last checked: October 16, 2026. Launch trailer details verified against October 15 coverage (AltChar, Gadgets360, Game8); Cyberleek cancellation reported by IGN, PCMag UK and GamesIndustry.biz; Xbox cloud statement via Matthew Ball&apos;s October 7 post on X.
      </p>
    </ImageLightbox>
  ),
};
