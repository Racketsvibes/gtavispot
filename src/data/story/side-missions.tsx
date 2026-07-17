import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StoryArticleData } from '../storyContent';
import styles from '../../app/story/[slug]/page.module.css';

export const sideMissions: StoryArticleData = {
  title: 'GTA 6 Side Missions Guide: Strangers & Optional Quests',
  metaDescription: 'Every GTA 6 side mission listed: optional quests, stranger tasks, random events, and GTA V comparisons for 100% completion.',
  focusKeyword: 'GTA 6 side missions',
  h1: 'GTA 6 Side Missions: All Optional Quests, Strangers & Events',
  publishedDate: 'June 21, 2026',
  modifiedDate: 'July 17, 2026',
  author: 'Marcus Vance',
  featureImage: '/images/GTA_6_Shop_view.webp',
  content: (
    <>
      <p>
        The open world of Leonida features an extensive list of <strong>GTA 6 side missions</strong>, giving players a variety of optional activities to complete outside the main campaign. From stranger tasks to random roadside events and corporate assassination contracts, these optional missions reward you with unique vehicles, weapon upgrades, and cash.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Answer: Side Content Summary</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Total Side Activities:</strong> 42 stranger missions and 90+ dynamic random events.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>100% Completion:</strong> Yes, completing specific stranger quests is required for the Platinum trophy.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Primary Rewards:</strong> Custom weapons, marina docks, unique vehicle mods, and heist crew contacts.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Authority Source:</strong> Achievement databases and the GTAbites.com/missions side activities catalog.</span>
          </li>
        </ul>
      </div>

      <h2>How Many Side Missions Are in GTA 6?</h2>
      <p>
        The game features 42 stranger missions (the equivalent of "Strangers and Freaks" in previous entries) and over 90 dynamic random encounters. 
        According to the GTAbites.com/missions side activity log, these optional events are distributed across the city districts, agricultural outposts, and keys. 
        This is a substantial increase in dynamic content compared to GTA V.
      </p>

      <p>
        GTA V featured 58 Strangers & Freaks missions and 57 random events. 
        GTA 6 expands on this by offering a more organic environment where random events feel connected to local gang activities and commercial outlets. 
        Here is the comparison table detailing how optional activities stack up against GTA V:
      </p>

      <table className={styles.compareTable || ''} style={{ width: '100%', margin: '24px 0', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid var(--border)' }}>
            <th style={{ padding: '12px', textAlign: 'left' }}>Content Type</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>GTA V (Previous Version)</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>GTA VI (Leonida Version)</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
            <td style={{ padding: '12px' }}>Stranger Missions</td>
            <td style={{ padding: '12px' }}>58 Strangers & Freaks</td>
            <td style={{ padding: '12px' }}>42+ Stranger Tasks</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
            <td style={{ padding: '12px' }}>Random Encounters</td>
            <td style={{ padding: '12px' }}>57 Dynamic Events</td>
            <td style={{ padding: '12px' }}>90+ Dynamic Random Events</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
            <td style={{ padding: '12px' }}>Hobbies & Mini-Games</td>
            <td style={{ padding: '12px' }}>Tennis, Golf, Triathlons, Darts</td>
            <td style={{ padding: '12px' }}>Cage Fighting, Scuba, Kayaking, Golf, Mini Golf, Darts, Pool, Basketball, Gym</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
            <td style={{ padding: '12px' }}>Ultimate Exclusives</td>
            <td style={{ padding: '12px' }}>None</td>
            <td style={{ padding: '12px' }}>PTT Youngin$ Compound, Wyman's Classic Cars</td>
          </tr>
        </tbody>
      </table>

      <div className={styles.featureImageContainer}>
        <Image 
          src="/images/GTAVI_Screenshots/Places/Vice_City/Vice_City_03.webp" 
          alt="Sports cars racing on Vice City highway at night in GTA 6" 
          width={1200}
          height={630}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          className={styles.featureImage} 
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Vice City highways host street racing circuits and night-time activities. (Image credit: Rockstar Games)
        </div>
      </div>

      <h2>Confirmed Hobbies and Activities in Leonida</h2>
      <p>
        Rockstar has incorporated 14 distinct hobbies and side activities throughout the state. 
        These activities provide repeatable gameplay challenges and are required to reach 100% completion. 
        The confirmed activities are:
      </p>
      <ul>
        <li><strong>Gym & Working Out:</strong> Lift weights and run on treadmills to increase stamina and muscle mass.</li>
        <li><strong>Fishing:</strong> Settle in the local rivers or oceans to catch multiple fish species using custom rods.</li>
        <li><strong>Basketball:</strong> Play pickup court games in urban playgrounds to test shooting timing.</li>
        <li><strong>Golf:</strong> Visit local country clubs to play full nine-hole matches.</li>
        <li><strong>Mini Golf:</strong> A casual alternative available at family entertainment parks.</li>
        <li><strong>Kayaking:</strong> Paddle through swift rivers in national parks.</li>
        <li><strong>Scuba Diving:</strong> Explore coral reefs and shipwrecks off the coast.</li>
        <li><strong>Pool (Billiards):</strong> Play classic table games in local dive bars.</li>
        <li><strong>Darts:</strong> Throw projectiles in neighborhood pubs.</li>
        <li><strong>Cage Fighting / MMA:</strong> Underground fighting tournaments testing hand-to-hand combos.</li>
        <li><strong>Nightclub Scene:</strong> Dance and manage businesses in urban nightspots.</li>
        <li><strong>Street Racing:</strong> Classic illegal circuits and drag races across city districts.</li>
        <li><strong>Gambling:</strong> Play cards and table games at local casinos.</li>
        <li><strong>Hunting:</strong> Track wildlife across Kelly County forest reserves.</li>
      </ul>

      <div className={styles.featureImageContainer}>
        <Image 
          src="/images/GTAVI_Screenshots/Places/Grassrivers/Grassrivers_01.webp" 
          alt="Everglades swamp airboat and wildlife environment in GTA 6" 
          width={1200}
          height={630}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          className={styles.featureImage} 
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          The Everglades swampland is the primary setting for hunting and wildlife events. (Image credit: Rockstar Games)
        </div>
      </div>

      <h2>Stranger Tasks: Leonida's Weirdest Residents</h2>
      <p>
        Stranger missions are marked on the map by a question mark (?) when you approach their location. 
        These missions are character-specific, requiring you to play as either Jason or Lucia to trigger them:
      </p>
      <ul>
        <li><strong>Leonida Wildlife League:</strong> A series of poaching and capturing contracts hosted by an eccentric swamp ranger in Grassrivers. Completing these unlocks the airboat custom shop.</li>
        <li><strong>Biker contraband runs:</strong> Optional delivery missions for outlaw motorcycle clubs in Kelly County, rewarding you with custom chopper motorcycles.</li>
        <li><strong>Street Racing League:</strong> High-speed street races across Vice City districts, unlocking engine modifications and performance tires.</li>
        <li><strong>Social Media stunts:</strong> Challenges hosted by local streamers that require you to perform high-speed drifts, jumps, and stunt runs for viral clout and cash prizes.</li>
      </ul>
      <p>
        These stranger quests offer a break from the main heist narrative, highlighting the game's satirical take on modern internet culture.
      </p>

      <h2>Assassination Contracts: High-Paying Hits</h2>
      <p>
        During Act 2, you'll unlock assassination contracts from a contact operating in Downtown Vice City. 
        These missions require you to eliminate corrupt corporate figures, stock manipulators, and rival cartel bosses:
      </p>
      <table>
        <thead>
          <tr>
            <th>Contract Name</th>
            <th>Target Location</th>
            <th>Primary Reward</th>
            <th>Strategic Tip</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Shoreline Hit</td>
            <td>Ocean Beach Boardwalk</td>
            <td>$45,000</td>
            <td>Use a sniper rifle from a nearby hotel balcony</td>
          </tr>
          <tr>
            <td>The Port Executive</td>
            <td>Vice Port Container Docks</td>
            <td>$60,000</td>
            <td>Plant sticky bombs on the target's vehicle before departure</td>
          </tr>
          <tr>
            <td>The Keys Syndicate</td>
            <td>Leonida Keys Marina</td>
            <td>$75,000</td>
            <td>Use a jet ski to escape the harbor patrol units</td>
          </tr>
          <tr>
            <td>The Sugar King</td>
            <td>Ambrosia Refinery</td>
            <td>$90,000</td>
            <td>Use Lucia's hacking ability to disable security cameras</td>
          </tr>
        </tbody>
      </table>
      <p>
        The table shows the main assassination contracts and their locations. 
        Completing these hits alters the stock market prices, allowing players to purchase shares before launching the mission to maximize their returns.
      </p>
      <p>
        To see details on the main objectives and locations where these heists and hits occur, check our <Link href="/story/missions/">GTA 6 story missions list</Link>.
      </p>

      <h2>Are Side Missions Missable in GTA 6?</h2>
      <p>
        The majority of stranger quests can be completed after finishing the main story. 
        However, four specific biker delivery missions in Act 2 must be completed before starting Mission 48, as the contact becomes unavailable in later chapters due to story events. 
        Players aiming for 100% completion should monitor their quest logs regularly, ensuring they clear all Kelly County stranger icons before advancing to the final heists in the Keys.
      </p>

      <div className={styles.callout}>
        <span className={styles.calloutTitle}>Key Takeaways</span>
        <p>
          GTA 6 features 42 stranger missions and 90+ random events. Completing stranger quests is required for 100% completion and unlocks heist crew contacts. Hobbies like cage fighting and scuba diving expand on GTA V's options.
        </p>
      </div>

      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Do side missions give heist crew contacts?</h3>
          <p className={styles.faqAnswer}>
            Yes, helping specific characters during stranger quests and random events unlocks them as skilled drivers, shooters, or hackers for heists.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Can you do side missions as both characters?</h3>
          <p className={styles.faqAnswer}>
            Certain stranger missions are locked to either Jason or Lucia, matching their individual backgrounds and skills, while others allow both.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>What happens when you complete all side missions?</h3>
          <p className={styles.faqAnswer}>
            Clearing all optional content unlocks the "Leonida Legend" achievement, custom clothing options, and a high-performance military helicopter.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Are there street races in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Yes, a series of off-road races in Kelly County and sports car street circuits in Vice City are available as repeatable side activities.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Can you rob stores outside of missions?</h3>
          <p className={styles.faqAnswer}>
            Yes, you can hold up convenience stores, gun shops, and diners in free-roam, which serves as a repeatable way to earn quick cash.
          </p>
        </div>
      </section>
    </>
  ),
};
