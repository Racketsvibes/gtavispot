import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GuideArticleData } from '../guidesContent';
import styles from '../../app/tech/[slug]/page.module.css';

export const gta6SideActivities: GuideArticleData = {
  title: 'GTA 6 Side Activities: Everything to Do in Leonida',
  metaDescription: 'Every confirmed GTA 6 side activity: kayaking, fishing, hunting, gyms, zoos and racing. Which earn money, which build the Jason and Lucia bond.',
  focusKeyword: 'gta 6 side activities',
  h1: 'GTA 6 Side Activities: Everything to Do in Leonida',
  publishedDate: 'October 11, 2026',
  modifiedDate: 'October 11, 2026',
  author: 'Editorial Staff',
  featureImage: '/images/news/gta-6-side-activities-featured.webp',
  featureImageAlt: 'Official GTA 6 screenshot of an airboat tour through the Grassrivers swamp, an alligator resting on the boat deck',
  content: (
    <>
      <p>
        <strong>Verdict:</strong> Rockstar has now shown or confirmed 25 to 30 <strong>GTA 6 side activities</strong>, from kayaking and catch-and-release fishing to cage fighting, zoos and dirt-bike racing, and several of them do real work: hunting reportedly earns you money, working out changes your body and stats, and kayaking counts as a date that strengthens Jason and Lucia&apos;s relationship. Below is the full confirmed list with the source for each one, plus the honest split between what Rockstar has actually said and what press footage only suggests.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Answer: GTA 6 Side Activities at a Glance</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>How many (reported):</strong> 30 activities spotted across the trailers, the August 2026 Extended Look and Game Informer&apos;s cover story, per Beebom; SVG counts 25+ confirmed by Rockstar.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Money makers (reported):</strong> hunting is tied to a character Jason knows and pays outside the crime economy; fishing is catch-and-release only and feeds collectibles and challenges instead.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Bond builders (confirmed by Nelson):</strong> kayaking, mini golf, pool, zoo trips, beach walks, diving, skydiving and even store robberies pulled off as a duo all count as quality time for Jason and Lucia.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Body system (confirmed):</strong> working out visibly builds muscle, poor diet adds weight, and sleep habits affect stamina and appearance.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Not quests:</strong> this guide covers activities and minigames. For stranger tasks, random events and contracts, see our <Link href="/story/side-missions/">GTA 6 side missions</Link> guide.</span>
          </li>
        </ul>
      </div>

      <h2>What is confirmed vs what is still unknown</h2>
      <p>
        The activity list below comes from three on-record sources: the August 27, 2026 Extended Look presentation on Netflix, Game Informer&apos;s cover story, and Rockstar North co-studio head Rob Nelson in interviews with IGN, GameSpot and WCCFTech. Anything press saw in footage but Rockstar never named is marked as spotted, not confirmed.
      </p>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Confirmed</strong></td>
            <td>Air boating, base jumping/parachuting, billiards, gyms, jet skiing, mini golf, scuba diving, snorkeling, street and off-road racing, zoos, the physique system (muscle, weight, sleep), animal studying, and the relationship/quality-time system</td>
          </tr>
          <tr>
            <td><strong>Spotted in footage</strong></td>
            <td>Basketball, fishing, kayaking, wrestling, shooting range, amusement parks, sunbathing, strip club, scooters, swimming, tennis, dirt-bike racing, TV/doomscrolling</td>
          </tr>
          <tr>
            <td><strong>Not stated</strong></td>
            <td>How many activities feed 100% completion; which activities are Jason-only or Lucia-only; whether any activity has ranks or tournaments; unlock requirements for each activity</td>
          </tr>
        </tbody>
      </table>

      <h2>Which side activities are confirmed in GTA 6?</h2>
      <p>
        This is the master list, grouped by type, with the source for each entry so you can tell Rockstar&apos;s word apart from footage analysis.
      </p>
      <table>
        <thead>
          <tr>
            <th>Activity</th>
            <th>What it involves</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Kayaking</strong></td>
            <td>Paddle Leonida&apos;s rivers and keys; works as a date with the other protagonist</td>
            <td>Extended Look footage; Nelson via Game Informer</td>
          </tr>
          <tr>
            <td><strong>Fishing</strong></td>
            <td>Red Dead Redemption 2 level depth, but catch-and-release only; recreational, feeds narrative moments, collectibles and challenges</td>
            <td>Nelson, reported via press hands-on (Beebom)</td>
          </tr>
          <tr>
            <td><strong>Hunting</strong></td>
            <td>Track wildlife across Kelly County; tied to a character Jason knows and earns money outside the crime economy</td>
            <td>Nelson, reported via press hands-on (Beebom)</td>
          </tr>
          <tr>
            <td><strong>Gyms / working out</strong></td>
            <td>Lift weights and use treadmills; visibly builds muscle, raises stamina; neglect and poor diet change weight and facial appearance</td>
            <td>Nelson via WCCFTech</td>
          </tr>
          <tr>
            <td><strong>Basketball</strong></td>
            <td>Pickup court games, seen at Jason&apos;s beach house in Trailer 2</td>
            <td>Trailer footage; Extended Look (spotted)</td>
          </tr>
          <tr>
            <td><strong>Zoos</strong></td>
            <td>Visit Leonida&apos;s zoos to, in the devs&apos; words, blow off steam; doubles as a bond activity</td>
            <td>Game Informer cover story</td>
          </tr>
          <tr>
            <td><strong>Airboating</strong></td>
            <td>Pilot airboats through the Grassrivers swamps</td>
            <td>Game Informer; Extended Look</td>
          </tr>
          <tr>
            <td><strong>Scuba diving / snorkeling</strong></td>
            <td>Explore reefs and shipwrecks; also counts as couple quality time</td>
            <td>Game Informer; Nelson via IGN</td>
          </tr>
          <tr>
            <td><strong>Base jumping / parachuting</strong></td>
            <td>Jump from Leonida&apos;s tallest points; parachuting counts toward the relationship</td>
            <td>Game Informer; Nelson via IGN</td>
          </tr>
          <tr>
            <td><strong>Street and off-road racing</strong></td>
            <td>Illegal circuits and drag races plus dedicated supercar tracks and rally/dirt-bike races</td>
            <td>Game Informer; WCCFTech</td>
          </tr>
          <tr>
            <td><strong>Jet skiing</strong></td>
            <td>Water racing and free riding around the Keys</td>
            <td>Game Informer; Extended Look</td>
          </tr>
          <tr>
            <td><strong>Billiards / mini golf</strong></td>
            <td>Dive-bar pool tables and family-park mini golf; both feed the bond system</td>
            <td>Game Informer; Nelson via GameSpot</td>
          </tr>
          <tr>
            <td><strong>Shooting range</strong></td>
            <td>Timed firearm courses</td>
            <td>Extended Look (spotted)</td>
          </tr>
          <tr>
            <td><strong>Cage fighting / wrestling</strong></td>
            <td>Underground fighting tournaments and backyard wrestling</td>
            <td>Extended Look (spotted)</td>
          </tr>
          <tr>
            <td><strong>Store robberies</strong></td>
            <td>A three-tier system: hold up stores solo or as a duo, loud or quiet; duo jobs strengthen the bond</td>
            <td>Nelson via WCCFTech; GameSpot</td>
          </tr>
          <tr>
            <td><strong>Strip clubs / nightlife</strong></td>
            <td>Dance and manage businesses in urban nightspots</td>
            <td>Extended Look (spotted)</td>
          </tr>
          <tr>
            <td><strong>Studying wildlife</strong></td>
            <td>A Red Dead Redemption 2 style animal-study collection mechanic; get info without killing</td>
            <td>Nelson via IGN</td>
          </tr>
          <tr>
            <td><strong>Sunbathing / swimming</strong></td>
            <td>Beach life: tanning, swimming and diving with tricks</td>
            <td>Extended Look (spotted)</td>
          </tr>
          <tr>
            <td><strong>Amusement parks</strong></td>
            <td>Rides and carnival games in Vice City entertainment districts</td>
            <td>Extended Look (spotted)</td>
          </tr>
          <tr>
            <td><strong>Scooter rides</strong></td>
            <td>Electric scooter travel and racing</td>
            <td>Extended Look (spotted)</td>
          </tr>
          <tr>
            <td><strong>Doomscrolling / TV</strong></td>
            <td>In-game social media, watching TV and playing games at home</td>
            <td>Extended Look (spotted)</td>
          </tr>
        </tbody>
      </table>
      <p>
        Not on the list: tennis. Beebom spotted it in trailer footage, but esports.gg still classifies it as unconfirmed, and Rockstar has not named it. The same caution applies to surfing and MMA, which remain rumored only.
      </p>

      <div className={styles.featureImageContainer} style={{ marginBottom: '24px' }}>
        <Image
          src="/images/news/gta-6-side-activities-featured.webp"
          alt="Photorealistic image of two people kayaking a yellow tandem kayak through a Florida-style swamp river at golden hour, an alligator in the distance"
          width={2048}
          height={1152}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Kayaking in Leonida&apos;s backwaters: a confirmed side activity that also counts as a date for Jason and Lucia. Image: illustrative.
        </div>
      </div>

      <h2>Which GTA 6 activities actually earn you money?</h2>
      <p>
        Most activities are for fun, but two matter to your wallet. Hunting is the standout: press reporting on Nelson&apos;s comments says it is connected to a character who knows Jason and gives players a way to earn money outside the crime economy. That detail matters because GTA 6 reportedly ties story progress to cash at certain points, so side income can keep the campaign moving. See our <Link href="/news/gta-6-money-story-missions/">GTA 6 money missions</Link> breakdown for how that system works.
      </p>
      <p>
        Store robberies are the other earner, and they double as the series&apos; first duo activity. The three-tier robbery system lets you hold up virtually any store in Leonida solo or as a pair, loudly or quietly, which determines how the police respond. Pulled off as a duo, robberies also feed the relationship system below.
      </p>
      <p>
        Fishing is the cautionary tale: despite the Red Dead Redemption 2 level depth, it uses catch-and-release, so it pays in collectibles, challenges and narrative moments, not cash.
      </p>

      <h2>How do side activities build Jason and Lucia&apos;s bond?</h2>
      <p>
        This is the biggest surprise in the activity list. Rockstar has built a dedicated relationship system that tracks how much time Jason and Lucia spend together outside story missions, and many side activities feed it directly. Kayaking works as a date. So do mini golf, pool, zoo trips, beach walks, diving and skydiving, and the pair can call and text each other, walk around holding hands (hold R2 when close), and answer messages promptly.
      </p>
      <p>
        Crimes count as quality time too. Robbing stores and banks together strengthens the relationship, which makes the duo robbery system above do double duty. Small decisions feed the system as well: if you play as one character all day, the other may text asking where you are, and ignoring the message weakens the bond slightly.
      </p>
      <p>
        Two guardrails from Nelson. First, the romance is optional: the pair stays partners in crime regardless, and Nelson says he does not want to force the relationship on players who are not interested. Second, closeness offers no specific gameplay advantage. It affects how their story unfolds, not their stats. Meet the pair in our <Link href="/story/jason-and-lucia/">Jason and Lucia</Link> guide and our <Link href="/news/gta-6-gameplay/">GTA 6 gameplay</Link> breakdown for the connected systems.
      </p>

      <h2>What ambient activities fill the world between crimes?</h2>
      <p>
        Leonida&apos;s downtime layer is bigger than anything GTA V offered. The Extended Look showed in-game social media doomscrolling, including a livestreamed car chase with fake viewer comments, plus watching TV and playing games in Jason&apos;s apartment. Rockstar told Game Informer the state holds over 170 animal species, 60-plus bird types, manatees, flamingos, pelicans and alligators, which makes the wildlife-study mechanic a genuine collection hobby on its own.
      </p>
      <p>
        Eating and drinking tie into the physique system, sunbathing and swimming fill the beach hours, and electric scooter rides handle short trips around Vice City&apos;s districts. Taken together, the ambient layer is what makes the map feel lived in rather than a backdrop between missions.
      </p>

      <h2>Do activities count toward 100% completion?</h2>
      <p>
        Rockstar has not published the 100% completion checklist, so treat any claim as unconfirmed. In GTA V, hobbies and pastimes were part of the 100% requirement, and the sheer number of activities here suggests GTA 6 will do the same, but that is inference, not confirmation. We will update this section the moment Rockstar details the checklist.
      </p>
      <p>
        One clarification while you are here: activities are not missions. The 42 stranger tasks, 90-plus random events and assassination contracts are covered in our separate <Link href="/story/side-missions/">GTA 6 side missions</Link> guide.
      </p>

      <h2>Key Takeaways</h2>
      <ul>
        <li>Rockstar has confirmed or shown 25 to 30 GTA 6 side activities, the largest hobby list in series history, per Beebom and SVG.</li>
        <li>Hunting reportedly earns money through a character Jason knows, while fishing is catch-and-release and pays in collectibles and challenges instead.</li>
        <li>Working out visibly builds muscle and stamina, while diet and sleep change weight and appearance: a full physique simulation layer.</li>
        <li>Kayaking, mini golf, pool, zoos, beach walks, diving, skydiving and duo robberies all feed the optional Jason and Lucia relationship system.</li>
        <li>Rockstar has not confirmed the 100% completion checklist or any activity-specific ranks, tournaments or unlock rules yet.</li>
        <li>Tennis, surfing and MMA are spotted or rumored only, not confirmed.</li>
      </ul>

      <h2>GTA 6 Side Activities: Frequently Asked Questions</h2>
      <div className={styles.faqSection}>
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>How many side activities are in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Reported counts vary: Beebom lists 30 activities spotted across the trailers, the Extended Look and Game Informer&apos;s cover story, while SVG counts 25-plus confirmed by Rockstar. Either way it is far more than GTA V&apos;s hobby list, and Rockstar has not given an official total.
          </p>
        </div>
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Can you do side activities as both Jason and Lucia?</h3>
          <p className={styles.faqAnswer}>
            Yes. Several activities are built for the pair: kayaking, gym sessions, mini golf and duo store robberies all work with both protagonists, and the relationship system specifically rewards spending time together outside story missions.
          </p>
        </div>
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Which GTA 6 side activities earn money?</h3>
          <p className={styles.faqAnswer}>
            Hunting is the confirmed earner: press reporting on Rob Nelson&apos;s comments says it is tied to a character Jason knows and pays outside the crime economy. Store robberies pay as well, with a three-tier system for solo or duo jobs. Fishing is recreational only, with no cash payout.
          </p>
        </div>
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Is kayaking a date in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            In a sense, yes. Nelson told press that spending time together, including kayaking and mini golf, has a positive impact on Jason and Lucia&apos;s relationship. It is optional and gives no gameplay advantage, but it shapes how their story unfolds.
          </p>
        </div>
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Are there strip clubs in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Footage in the Extended Look showed a strip club, and Beebom lists strip clubs and nightclub management among the spotted activities. Rockstar has not given details, but nightclub businesses are expected to return as they did in GTA Online.
          </p>
        </div>
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Will GTA 6 have tennis?</h3>
          <p className={styles.faqAnswer}>
            Not confirmed. Beebom spotted what looks like tennis in trailer footage, but esports.gg still classifies it as unconfirmed and Rockstar has not named it. Treat it as likely but unannounced until Rockstar says otherwise.
          </p>
        </div>
      </div>

      <h2>Where does this information come from?</h2>
      <p>
        Last checked: October 11, 2026. The confirmed activity list comes from the August 27, 2026 Extended Look footage, Game Informer&apos;s cover story, and Rockstar North co-studio head Rob Nelson in interviews with{' '}
        <a href="https://www.gamespot.com/articles/new-details-revealed-for-gta-6s-jason-and-lucia-including-physical-intimacy/" target="_blank" rel="noopener">GameSpot</a> and{' '}
        <a href="https://wccftech.com/roundup/gta-6-everything-we-know/" target="_blank" rel="noopener">WCCFTech</a>. The full spotted-activity inventory is compiled from{' '}
        <a href="https://beebom.com/gta-6-activities-list/" target="_blank" rel="noopener">Beebom</a> and{' '}
        <a href="https://www.svg.com/2272709/gta-6-side-activities-confirmed-rockstar/" target="_blank" rel="noopener">SVG</a>, the fishing and hunting depth from{' '}
        <a href="https://beebom.com/gta-6-fishing-and-hunting-will-be-more-detailed-but-have-a-weird-twist/" target="_blank" rel="noopener">Beebom&apos;s fishing breakdown</a>, and the confirmed-vs-unconfirmed minigame split from{' '}
        <a href="https://esports.gg/guides/grand-theft-auto-6/all-mini-games-and-activities-in-gta-6-confirmed-in-the-netflix-showcase/" target="_blank" rel="noopener">esports.gg</a>. Anything marked &quot;spotted&quot; or &quot;reported&quot; above comes from press footage analysis, not from Rockstar directly. With{' '}
        <Link href="/news/gta-6-release-date/">GTA 6 releasing November 19, 2026</Link>, expect Rockstar to fill in the remaining gaps closer to launch.
      </p>

      <p>
        Bookmark this guide: we will update the confirmed list, the money earners and the 100% completion status as Rockstar reveals more. For quest-based side content, see our <Link href="/story/side-missions/">GTA 6 side missions</Link> guide, and for the other new systems, our <Link href="/news/gta-6-gameplay/">GTA 6 gameplay</Link> breakdown.
      </p>
    </>
  )
};
