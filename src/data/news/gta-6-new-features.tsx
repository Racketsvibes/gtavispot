import React from 'react';
import Link from 'next/link';
import { ArticleData } from '../newsContent';
import styles from '../../app/news/[slug]/page.module.css';

export const gta6NewFeatures: ArticleData = {
  title: 'GTA 6 New Features: Every Confirmed Change vs GTA 5',
  metaDescription: 'All confirmed GTA 6 features listed, including new NPC AI, dual protagonists, 700+ interiors, Leonida map, and everything officially revealed so far.',
  focusKeyword: 'GTA 6 new features',
  h1: 'GTA 6 New Features: Confirmed Changes & Upgrades',
  publishedDate: 'June 17, 2026',
  modifiedDate: 'October 17, 2026',
  author: 'Marcus Vance',
  featureImage: '/images/Cluster_1/GTA_6_New_Features.webp',
  featureImageAlt: 'GTA 6 new features artwork comparing gameplay changes to GTA 5',
  content: (
    <>
      <p>
        Grand Theft Auto 6 introduces significant technological upgrades over GTA 5, driven by the new Rockstar Advanced Game Engine (RAGE 9). These <strong>GTA 6 new features</strong> cover character systems, artificial intelligence, wanted systems, and environment layouts. Here is the verified list of every confirmed change and improvement.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Answer: Biggest New Features</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>RAGE 9 Engine:</strong> Real-time global illumination, advanced physics, and fluid water simulation.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>NPC AI Navigation:</strong> Patented AI systems that simulate realistic routing and traffic behavior.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Dual Protagonists:</strong> Lucia and Jason cooperative character swap system.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Authority Source:</strong> Take-Two Interactive software patent filings for advanced AI navigation.</span>
          </li>
        </ul>
      </div>

      <h2>RAGE 9 Engine: Visuals and Physics Overhaul</h2>
      <p>
        The core of GTA 6's upgrades is the RAGE 9 engine. Rockstar's proprietary engine has been rewritten to support next-generation rendering techniques. The engine features real-time global illumination, dynamic ray-traced reflections, and volumetric cloud rendering that changes based on local humidity and wind direction.
      </p>
      <p>
        Physics rendering has also received significant upgrades. Vehicle handling is more realistic, with tire deformation and suspension systems reacting to road surfaces; you can view the full list of rides in our <Link href="/vehicles/">GTA 6 Vehicles</Link> breakdown. Crash physics have been overhauled to show realistic metal crumpling, paint scrapes, and glass shattering, making high-speed pursuits more dangerous.
      </p>
      <p>
        According to Take-Two Interactive's software patent filings detailing advanced AI navigation, the engine also features a dynamic pathfinding network. This system allows NPCs to make intelligent routing decisions based on traffic density and weather conditions. This patented system ensures that the streets of Vice City feel alive and responsive.
      </p>
      <p>
        Water simulation has also been rewritten, which is essential for a game set in the wetlands and coastlines of Leonida. Speedboats will create realistic wakes, and waves will break against coastlines dynamically based on wind speed, improving the atmosphere of coastal chases.
      </p>

      <h2>Dual Protagonist Swap System</h2>
      <p>
        GTA 6 features a dual protagonist system, introducing Lucia and Jason. While GTA 5 featured three characters scattered across Los Santos, GTA 6 keeps the protagonists together. Their stories are linked, and their relationship affects how certain missions play out. To explore the full cast list, check out our guide on <Link href="/story/gta-6-characters/">GTA 6 Characters</Link>.
      </p>
      <p>
        The character swap system has been updated. The swap animation is faster, transitioning viewpoints without the long aerial zoom-out of GTA 5. During cooperative heist missions, players can switch between Lucia and Jason to coordinate tactical approaches.
      </p>
      <p>
        For details on when you can pre-order and secure the game, see our <Link href="/news/gta-6-pre-order/">GTA 6 pre-order guide</Link> for retail listings.
      </p>
      <p>
        When you are not controlling the other protagonist, an improved companion AI takes over. The AI will seek cover, return fire, and assist with objectives without player input. This cooperative system changes how players approach heists and combat, encouraging teamwork between the two characters. This combat overhaul is further supported by the new <Link href="/weapons/">gta 6 weapons</Link> system, which introduces a weapon wheel limit and realistic weight properties.
      </p>

      <h2>Wanted System and Police AI Overhaul</h2>
      <p>
        The wanted system has been updated. In previous games, police officers would spawn nearby and immediately engage the player. In GTA 6, police response is more realistic. Officers will set up roadblocks, search the area where the crime was reported, and use CCTV cameras to track the player.
      </p>
      <p>
        Here is how the wanted system changes compare to GTA 5:
      </p>

      <table>
        <thead>
          <tr>
            <th>Mechanic</th>
            <th>Grand Theft Auto V</th>
            <th>Grand Theft Auto VI</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Police Spawning</td>
            <td>Spawns directly in player's path</td>
            <td>Responds from local stations and roads</td>
          </tr>
          <tr>
            <td>Search Behavior</td>
            <td>Detects player position through walls</td>
            <td>Searches last known area and description</td>
          </tr>
          <tr>
            <td>Escape Mechanics</td>
            <td>Break line-of-sight to lose stars</td>
            <td>Change vehicles and avoid CCTV cameras</td>
          </tr>
          <tr>
            <td>Roadblocks</td>
            <td>Static car placement on main roads</td>
            <td>Tactical placement based on player direction</td>
          </tr>
        </tbody>
      </table>

      <p>
        Police officers will also react to the vehicles players are driving. If a crime is committed in a specific sports car, officers will search for that vehicle model and color. Changing vehicles in an alleyway or a garage is necessary to escape, adding a layer of strategy to police chases.
      </p>
      <p>
        For details on how these wanted system mechanics might affect the game's scheduling, check the <Link href="/news/gta-6-delay/">GTA 6 delay history and reasons</Link>.
      </p>

      <h2>Interior Exploration: Enterable Buildings</h2>
      <p>
        One of the most requested features is the ability to explore building interiors. In GTA 5, most buildings were flat structures with no modeled interiors. GTA 6 resolves this limitation by introducing over 700 fully modeled, enterable building interiors.
      </p>
      <p>
        These interiors include diners, pawnshops, clothing boutiques, and supermarkets. These spaces are fully interactive, letting players walk in, browse items, and execute robberies. The transition between the street and the interior is seamless, with no loading screens or asset pop-in.
      </p>
      <p>
        This level of interior detail changes the gameplay loop. Players can use buildings for cover during gunfights, escape police by running through malls, or search for collectibles in shops, making the city feel like a real place.
      </p>
      <p>
        To see when the next gameplay footage will showcase these interiors, check our <Link href="/news/gta-6-trailer-3/">GTA 6 trailer 3 breakdown</Link>.
      </p>

      <h2>What Side Activities Are Confirmed in GTA 6?</h2>
      <p>
        A large share of GTA 6&apos;s new gameplay happens away from story missions. Rockstar has confirmed or clearly shown around 25 to 30 side activities, drawn from the August 27, 2026 Extended Look on Netflix, Game Informer&apos;s cover story, and Rockstar North co-studio head Rob Nelson&apos;s press interviews. Our full <Link href="/guides/gta-6-side-activities/">GTA 6 side activities guide</Link> tracks every entry with the source behind it. Here is the confirmed core of the list:
      </p>

      <table>
        <thead>
          <tr>
            <th>Activity</th>
            <th>What you do</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Kayaking</strong></td>
            <td>Paddle Leonida&apos;s rivers and keys; counts as a date with the other protagonist</td>
            <td>Extended Look; Nelson via Game Informer</td>
          </tr>
          <tr>
            <td><strong>Fishing</strong></td>
            <td>Red Dead Redemption 2 level depth, but catch and release only; feeds collectibles and challenges</td>
            <td>Nelson, reported via press hands-on</td>
          </tr>
          <tr>
            <td><strong>Hunting</strong></td>
            <td>Track wildlife across Kelly County; earns money outside the crime economy</td>
            <td>Nelson, reported via press hands-on</td>
          </tr>
          <tr>
            <td><strong>Gyms / working out</strong></td>
            <td>Lift weights and use treadmills; visibly builds muscle and raises stamina</td>
            <td>Nelson via WCCFTech</td>
          </tr>
          <tr>
            <td><strong>Zoos</strong></td>
            <td>Visit Leonida&apos;s zoos to blow off steam; doubles as a bond activity</td>
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
            <td>Jump from Leonida&apos;s tallest points; feeds the relationship system</td>
            <td>Game Informer; Nelson via IGN</td>
          </tr>
          <tr>
            <td><strong>Street and off-road racing</strong></td>
            <td>Illegal circuits and drag races plus rally and dirt-bike races</td>
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
            <td><strong>Store robberies</strong></td>
            <td>Three-tier system: hold up stores solo or as a duo, loud or quiet</td>
            <td>Nelson via WCCFTech and GameSpot</td>
          </tr>
          <tr>
            <td><strong>Studying wildlife</strong></td>
            <td>A Red Dead Redemption 2 style animal-study collection mechanic</td>
            <td>Nelson via IGN</td>
          </tr>
          <tr>
            <td><strong>Cage fighting / wrestling</strong></td>
            <td>Underground fighting tournaments (spotted, not named by Rockstar)</td>
            <td>Extended Look footage (spotted)</td>
          </tr>
        </tbody>
      </table>

      <p>
        Two activities connect to money and story. Hunting reportedly earns cash outside the crime economy through a character Jason knows, while fishing is catch and release only, so it pays in collectibles and challenges instead of cash. Several activities also feed the Jason and Lucia relationship system: kayaking, mini golf, pool, zoo visits and duo store robberies all count as time the pair spends together.
      </p>
      <p>
        The October 15, 2026 launch trailer stayed focused on story beats and the Justice score rather than announcing new activities, so the list above remains current. Last checked: October 17, 2026.
      </p>

      <div className={styles.callout}>
        <span className={styles.calloutTitle}>Key Takeaways</span>
        <p>
          GTA 6 features the RAGE 9 engine with advanced physics and lighting. The dual protagonist system features Lucia and Jason. The wanted system is more realistic, and the map features over 700 enterable building interiors.
        </p>
      </div>

      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>What is the new engine in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            The game runs on the Rockstar Advanced Game Engine (RAGE 9), featuring updated lighting, water simulation, and physics.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>How does the character swap system work?</h3>
          <p className={styles.faqAnswer}>
            Players can switch between Lucia and Jason during missions to coordinate tactical positions and share objectives.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Will there be enterable buildings in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Yes, the game is confirmed to feature over 700 fully modeled interiors, including diners, shops, and safehouses.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>How does the new wanted system work?</h3>
          <p className={styles.faqAnswer}>
            Police respond realistically, search last known areas, set up roadblocks, and track players using CCTV coordinates.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Are the physics different from GTA 5?</h3>
          <p className={styles.faqAnswer}>
            Yes, vehicle handling, crash deformation, and environmental destruction are more realistic under the RAGE 9 engine.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Which GTA 6 side activities earn money?</h3>
          <p className={styles.faqAnswer}>
            Hunting is the confirmed earner: press reporting on Rob Nelson&apos;s comments ties it to a character Jason knows and says it pays outside the crime economy. Store robberies pay as well, with a three-tier system for solo or duo jobs. Fishing is recreational only, with no cash payout.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Do GTA 6 side activities count toward 100 percent completion?</h3>
          <p className={styles.faqAnswer}>
            Rockstar has not published the 100 percent completion checklist, so no official list exists yet. In GTA V, hobbies and pastimes were part of the requirement, and the size of this activity list suggests the same here, but that is inference, not confirmation.
          </p>
        </div>
      </section>
    </>
  ),
};
