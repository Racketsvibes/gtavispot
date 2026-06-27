import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StoryArticleData } from '../storyContent';
import styles from '../../app/story/[slug]/page.module.css';

export const gta6Characters: StoryArticleData = {
  title: 'GTA 6 Characters: Protagonists, Cast & Real Life Rumors',
  metaDescription: 'Meet the official GTA 6 Characters. Full guide to Lucia, Jason, and the supporting cast, including rumored voice actors and real life comparison.',
  focusKeyword: 'GTA 6 Characters',
  h1: 'GTA 6 Characters: Protagonists, Cast & Real Life Rumors',
  publishedDate: 'June 26, 2026',
  modifiedDate: 'June 26, 2026',
  author: 'Marcus Vance',
  featureImage: '/images/GTAVI_Screenshots/People/gta-6-characters-feature.webp',
  content: (
    <>
      <p>
        Grand Theft Auto 6 introduces a fresh cast of criminals, hustlers, and corrupt officials across the state of Leonida. This guide breaks down the confirmed <strong>GTA 6 Characters</strong>, their backgrounds, and the rumored real-life actors behind them.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Answer: Characters at a Glance</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Protagonists:</strong> Lucia (first female lead in HD era) and Jason are romantic partners.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Real Life Rumors:</strong> Manni L. Perez is rumored for Lucia, and Gregory Connors for Jason.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Supporting Cast:</strong> Raul Bautista, Boobie Ike, Brian Heder, Cal Hampton, DreQuan Priest, and Real Dimez.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Source:</strong> Rockstar Games official trailers and leaked developer builds.</span>
          </li>
        </ul>
      </div>

      <h2>Who Are the Confirmed GTA 6 Characters?</h2>
      <p>
        The campaign revolves around a dual-character setup. Unlike previous entries, these characters share a close bond that directly affects the heist gameplay loop.
      </p>

      <h3>Lucia Caminos (Protagonist)</h3>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/GTAVI_Screenshots/People/Lucia_Caminos/Lucia_Caminos_03.webp"
          alt="Lucia, female protagonist of GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        Lucia is a street-smart woman with a checkered criminal past. The story starts right after her release from the Leonard County Correctional Facility. For a deeper look at her history, read our <Link href="/story/lucia-backstory/">GTA 6 Lucia backstory guide</Link>.
      </p>
      <p>
        In combat, she excels at hacking security systems and lockpicking. You can check her unique special skills in our <Link href="/story/lucia/">Lucia character guide</Link>.
      </p>
      <ul>
        <li><strong>Prison Release:</strong> Starts the campaign directly after serving time at the Leonard County Correctional Facility.</li>
        <li><strong>Tactical Hacking:</strong> Bypasses electronic keypad alarms and routes around security cameras.</li>
        <li><strong>Stealth Infiltration:</strong> Excels in quiet environments, picking locks and navigating behind guard routes.</li>
        <li><strong>Bonnie & Clyde Archetype:</strong> Shares a dynamic relationship and trust meter with Jason that scales during runs.</li>
      </ul>

      <h3>Jason Duval (Protagonist)</h3>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/GTAVI_Screenshots/People/Jason_Duval/Jason_Duval_03.webp"
          alt="Jason, male protagonist in GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        Jason is Lucia's romantic partner and heist accomplice. He brings military weapon skills and getaway driving experience to their crew.
      </p>
      <p>
        His gameplay features bullet-time aiming to clear out police officers during high-speed chases. Read his full combat loadout in our <Link href="/story/jason/">Jason character guide</Link>.
      </p>
      <ul>
        <li><strong>Military Background:</strong> Serves as the primary combat specialist with enhanced recoil control and weapon handling.</li>
        <li><strong>Getaway Driver:</strong> Possesses superior vehicle handling stats, especially for off-road escapes and chases. He can hotwire most <Link href="/vehicles/">GTA 6 cars</Link> and motorcycles faster than standard NPCs.</li>
        <li><strong>Combat Focus Ability:</strong> Triggers a slow-motion precision-aiming window to neutralize multiple targets rapidly.</li>
        <li><strong>Weapon Specialist:</strong> Starts with higher weapon control and handles heavy weaponry like grenade launchers.</li>
      </ul>

      <h3>Boobie Ike (Supporting Cast)</h3>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/GTAVI_Screenshots/People/Boobie_Ike/Boobie_Ike_01.webp"
          alt="Boobie Ike nightclub owner in GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        Boobie Ike is a Vice City entrepreneur and local legend. He owns the Jack of Hearts strip club and runs music production companies. He acts as a key heist contact, offering laundering schemes for the duo's cash.
      </p>
      <ul>
        <li><strong>Nightclub Mogul:</strong> Owns the famous Jack of Hearts club in South Vice City.</li>
        <li><strong>Laundering Expert:</strong> Helps clean heist payouts and runs money through shell companies.</li>
        <li><strong>Music Producer:</strong> Promotes artists and manages studio spaces to secure high-tier connections.</li>
        <li><strong>Leonida Kingpin:</strong> Holds key information on Vice Port shipping routes and local smuggling channels.</li>
      </ul>

      <h3>Brian Heder (Supporting Cast)</h3>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/GTAVI_Screenshots/People/Brian_Heder/Brian_Heder_01.webp"
          alt="Brian Heder drug runner character"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        Brian Heder is a longtime drug runner based in the Leonida Keys. He serves as Jason's landlord and provides safehouse trailers to hide from county police officers.
      </p>
      <ul>
        <li><strong>Keys Smuggler:</strong> Coordinates waterborne drug runs across the Florida Keys channel.</li>
        <li><strong>Landlord Contact:</strong> Provides Jason and Lucia with their initial mobile safehouse locations.</li>
        <li><strong>County Informant:</strong> Tips off the players about upcoming Leonard County police roadblocks.</li>
        <li><strong>Logistics Coordinator:</strong> Supplies off-road vehicles and small speedboats for water missions.</li>
      </ul>

      <h3>Cal Hampton (Supporting Cast)</h3>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/GTAVI_Screenshots/People/Cal_Hampton/Cal_Hampton_01.webp"
          alt="Cal Hampton Jason friend and conspiracy theorist"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        Cal Hampton is Jason's childhood friend from Kelly County. He is a conspiracy theorist who runs an off-grid smuggling ring, offering illegal weapon modifications.
      </p>
      <ul>
        <li><strong>Childhood Friend:</strong> Maintains a long history of street-level hustling with Jason.</li>
        <li><strong>Conspiracy Theorist:</strong> Believes in government tracking grids, advising the crew on CCTV locations.</li>
        <li><strong>Weapon Modder:</strong> Runs a black-market gun workshop inside an abandoned Kelly County auto body shop.</li>
        <li><strong>Paranoid Contact:</strong> Offers high-payout but high-risk tasks to sabotage state infrastructure.</li>
      </ul>

      <h3>DreQuan Priest (Supporting Cast)</h3>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/GTAVI_Screenshots/People/DreQuan_Priest/DreQuan_Priest_02.webp"
          alt="DreQuan Priest rapper and music label owner"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        DreQuan Priest is a local music mogul who owns Only Raw Records. He connects the protagonists to the wealthy Vice City elite while using his label to mask cartel funds.
      </p>
      <ul>
        <li><strong>Label Owner:</strong> Runs Only Raw Records, signing local underground rap talent.</li>
        <li><strong>Vice City Broker:</strong> Connects street-level crews to high-society money managers.</li>
        <li><strong>Cartel Liaison:</strong> Serves as the intermediary for South American syndicates shipping contraband.</li>
        <li><strong>Political Ties:</strong> Backs county officials to secure light police patrols near his music venues.</li>
      </ul>

      <h3>Raul Bautista (Supporting Cast)</h3>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/GTAVI_Screenshots/People/Raul_Bautista/Raul_Bautista_01.webp"
          alt="Raul Bautista bank robber and heist partner"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        Raul Bautista is a veteran bank robber with connections to South American cartels. He assists the protagonists in planning their high-profile bank robberies.
      </p>
      <ul>
        <li><strong>Crew Veteran:</strong> Brings decades of bank robbery experience to heist planning sessions.</li>
        <li><strong>Cartel Muscle:</strong> Connects the protagonists to heavy firepower distributors in the Caribbean.</li>
        <li><strong>Tactical Coordinator:</strong> Plans vault access routes, bypasses, and security guard shifts.</li>
        <li><strong>Getaway Planner:</strong> Designs decoy escapes, utilizing local sewage tunnels and waterways.</li>
      </ul>

      <h3>Real Dimez (Supporting Cast)</h3>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/GTAVI_Screenshots/People/Real_Dimez/Real_Dimez_01.webp"
          alt="Real Dimez rapper and social media icon"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        Real Dimez is a social media icon and rapper signed to Only Raw Records. He provides street racing tasks and assists the duo in escaping police patrols.
      </p>
      <ul>
        <li><strong>Social Media Star:</strong> Posts street stunts and lifestyle content to build online clout.</li>
        <li><strong>Underground Rapper:</strong> Signed to Only Raw Records, bringing street crews together.</li>
        <li><strong>Street Racer:</strong> Hosts high-stakes highway drag races around Ocean Beach.</li>
        <li><strong>Police Distractor:</strong> Orchestrates street takeovers and flash mobs to pull police patrols away from heists.</li>
      </ul>

      <h2>GTA 6 Characters in Real Life: Who Are the Actors?</h2>
      <p>
        Rockstar Games uses advanced motion capture to bring the cast to life. While the studio has not officially confirmed the actors, community research points to specific voice talent.
      </p>
      <p>
        The physical features and voice profile of <strong>Manni L. Perez</strong> match Lucia Caminos. Fans identified her after comparing interviews and her past work in television dramas.
      </p>
      <p>
        For Jason, <strong>Gregory Connors</strong> is the leading candidate. A credit listing for a lead role in a 2025 Rockstar Games project appeared on his portfolio before being quickly deleted. To read more about the voice talent, check out our <Link href="/story/voice-actors/">GTA 6 voice actors list</Link>.
      </p>

      <h2>GTA 5 Characters vs GTA 6 Characters</h2>
      <p>
        When comparing the new cast to the iconic <strong>GTA v Characters</strong>, the storytelling style has evolved significantly. While the previous game relied on three distinct stories that occasionally crossed paths, the new system is built around a single, cooperative campaign.
      </p>

      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>GTA 5 Characters</th>
            <th>GTA 6 Characters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Playable Cast</td>
            <td>Three male leads (Franklin, Michael, Trevor)</td>
            <td>One male, one female lead (Lucia, Jason)</td>
          </tr>
          <tr>
            <td>Narrative Focus</td>
            <td>Retirement, mid-life crisis, and cartel wars</td>
            <td>Outlaw romance, trust, and mutual survival</td>
          </tr>
          <tr>
            <td>Character Synergy</td>
            <td>Loose partnerships for individual goals</td>
            <td>Bonnie-and-Clyde trust mechanic in combat</td>
          </tr>
          <tr>
            <td>Setting</td>
            <td>Los Santos and Blaine County</td>
            <td>Vice City and the state of Leonida</td>
          </tr>
        </tbody>
      </table>

      <p>
        This shift to two closely knit characters means the dialogue feels more intimate. Your choices in heists directly impact how the duo behaves, modifying their combat synergy.
      </p>

      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Who are the main characters in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            The two playable protagonists are Lucia, a street-smart former inmate, and Jason, a getaway driver with military combat experience.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Are the GTA 6 characters in real life based on actual actors?</h3>
          <p className={styles.faqAnswer}>
            Yes, Rockstar Games uses facial scans and motion capture. Speculation points to Manni L. Perez voicing Lucia and Gregory Connors voicing Jason.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Do any GTA 5 characters appear in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            While the game shares the same HD Universe, no main GTA V characters are confirmed to return in the story mode.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>How does character switching work in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            You can switch instantly between Lucia and Jason during free-roam, while heists require you to coordinate tasks in real-time.
          </p>
        </div>
      </section>

      <p>
        Fans can follow our coverage as we update details on the full cast of <strong>GTA 6 Characters</strong> up to the game's launch.
      </p>

      <p>
        For more on the game's campaign design, check out our breakdown of the <Link href="/story/jason-and-lucia/">GTA 6 Jason and Lucia relationship features</Link>.
      </p>
    </>
  ),
};
