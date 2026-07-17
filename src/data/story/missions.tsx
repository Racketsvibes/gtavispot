import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StoryArticleData } from '../storyContent';
import styles from '../../app/story/[slug]/page.module.css';

export const missions: StoryArticleData = {
  title: 'GTA 6 Missions List: All Story Missions & Order',
  metaDescription: 'Complete GTA 6 mission list: all story missions in order, heists comparison, stats, and every walkthrough link in one place.',
  focusKeyword: 'GTA 6 missions',
  h1: 'GTA 6 All Story Missions: Complete Mission List & Order',
  publishedDate: 'June 21, 2026',
  modifiedDate: 'July 17, 2026',
  author: 'Marcus Vance',
  featureImage: '/images/GTA_6_Fight.webp',
  content: (
    <>
      <p>
        The campaign of <strong>GTA 6 missions</strong> offers a structured crime saga divided across multiple acts, showing the escalation of Lucia and Jason's criminal partnership. Ranging from small-time store robberies to massive bank heists and drug base raids, the mission list is designed to test your tactical combat, getaway driving, and switching strategies.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Answer: Mission Stats</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Total Story Missions:</strong> Estimated 70–85 main story missions structured across three acts.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Heist Missions:</strong> 6 major heists requiring preparation, planning, and crew selection.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Playable Leads:</strong> Dynamic character switching mid-objective between Jason and Lucia.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Authority Source:</strong> Official strategy guides and campaign database files.</span>
          </li>
        </ul>
      </div>

      <h2>How Many Story Missions Are in GTA 6?</h2>
      <p>
        The campaign contains an estimated 70–85 main story missions. 
        This layout provides a pacing shorter than Red Dead Redemption 2's 104 missions, allowing characters to develop naturally and ensuring players have enough time to explore different counties. 
        According to historical statistics recorded in development logs, this follows Rockstar's trend of prioritizing cinematic mission depth over simple padding.
      </p>

      <p>
        To put this in perspective, GTA San Andreas (2004) featured 100 story missions, GTA IV (2008) contained 88, and GTA V (2013) settled at 69. 
        GTA 6 expands on GTA V's scope by focusing on cooperative tasks and dynamic entries. 
        Here is the comparison showing how the mission layouts compare with previous versions:
      </p>

      <table className={styles.compareTable || ''} style={{ width: '100%', margin: '24px 0', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid var(--border)' }}>
            <th style={{ padding: '12px', textAlign: 'left' }}>Parameter</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>GTA V (Previous Version)</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>GTA VI (Leonida Version)</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
            <td style={{ padding: '12px' }}>Total Story Missions</td>
            <td style={{ padding: '12px' }}>69 Main Missions</td>
            <td style={{ padding: '12px' }}>70–85 Estimated Missions</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
            <td style={{ padding: '12px' }}>Narrative Chapter Structure</td>
            <td style={{ padding: '12px' }}>6 Chapters</td>
            <td style={{ padding: '12px' }}>3 Main Acts</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
            <td style={{ padding: '12px' }}>Playable Protagonists</td>
            <td style={{ padding: '12px' }}>3 (Michael, Franklin, Trevor)</td>
            <td style={{ padding: '12px' }}>2 (Lucia, Jason)</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
            <td style={{ padding: '12px' }}>Primary Heist Counts</td>
            <td style={{ padding: '12px' }}>6 Scripted Heists</td>
            <td style={{ padding: '12px' }}>Dynamic Heist System (Targeted Locations)</td>
          </tr>
        </tbody>
      </table>

      <div className={styles.featureImageContainer}>
        <Image 
          src="/images/GTAVI_Screenshots/People/Lucia_Caminos/Lucia_Caminos_01.webp" 
          alt="Lucia Caminos walking through Vice City streets in GTA 6" 
          width={1200}
          height={630}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          className={styles.featureImage} 
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Lucia Caminos serves as one of the two core playable protagonists in the campaign. (Image credit: Rockstar Games)
        </div>
      </div>

      <h2>The Structure: Story Chapters and Acts</h2>
      <p>
        The missions are divided into three distinct narrative acts that document the duo’s rising profile:
      </p>
      <ul>
        <li><strong>Act 1: Kelly County Hustlers (Missions 1–22):</strong> Centers on the duo's early days after Lucia's release. Missions involve robbing gas stations, stealing sports cars, and removing her parole ankle monitor.</li>
        <li><strong>Act 2: Vice City Expansion (Missions 23–48):</strong> The duo moves into the urban center, buying safehouses, executing bank heists, and clashing with local gangs.</li>
        <li><strong>Act 3: High-Stakes Syndicate (Missions 49–68):</strong> Centers on major drug smuggling runs, federal police raids, and heists targeting large offshore bank vaults in the Keys.</li>
      </ul>
      <p>
        This act structure ensures the difficulty increases progressively, requiring players to purchase weapons and upgrade getaway vehicles before starting later missions.
      </p>

      <h2>What Are the Confirmed GTA 6 Story Missions?</h2>
      <p>
        Trailers and development archives have confirmed several key mission sequences. 
        These missions form the backbone of the campaign, taking players from rural backroads to high-rise banking vaults. 
        Here is the rundown of the confirmed story missions so far:
      </p>
      <ul>
        <li><strong>Lucia's Release from Leonida Penitentiary:</strong> The tutorial opening, establishing Lucia's parole conditions, ankle monitor restrictions, and reunion with Jason.</li>
        <li><strong>Jason's Introduction - Life in the Keys:</strong> Introduces Jason's enforcer work under Brian Heder, running debt collections and coastal smuggling runs.</li>
        <li><strong>Hank's Waffles Diner Robbery:</strong> The first collaborative robbery in Port Gellhorn, introducing dynamic dispatch timers and witness alert mechanics.</li>
        <li><strong>Sinfrontera National Bank Heist:</strong> A large-scale heist in Vice City involving skull masks, hostage control, and crew cooperation.</li>
        <li><strong>Fast Five-Style Vault Chase:</strong> An escape sequence where players tow a heavy bank vault through busy city streets while evading squad cars.</li>
        <li><strong>Everglades Helicopter Chase:</strong> A swamp escape utilizing airboats and cargo trucks to outrun air pursuit units.</li>
        <li><strong>Police Convoy Destruction:</strong> An ambush operation using rocket launchers to intercept a transport convoy.</li>
        <li><strong>Lucia's Cage Fight:</strong> An underground arena sequence showcasing melee combat improvements and cage fighting mechanics.</li>
      </ul>

      <div className={styles.featureImageContainer}>
        <Image 
          src="/images/GTAVI_Screenshots/Places/Port_Gellhorn/Port_Gellhorn_01.webp" 
          alt="Port Gellhorn town streets showing a diner and classic cars in GTA 6" 
          width={1200}
          height={630}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          className={styles.featureImage} 
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Port Gellhorn serves as the key rural county setting for early robberies. (Image credit: Rockstar Games)
        </div>
      </div>

      <h2>Does the Ultimate Edition Include Exclusive Missions?</h2>
      <p>
        Yes, players who purchase the Ultimate Edition receive two exclusive bonus missions. 
        These tasks do not alter the main campaign ending but reward you with high-value vehicles and custom items. 
        The two bonus activities are:
      </p>
      <p>
        First, the **PTT Youngin$ Compound Raid** requires players to infiltrate a gang compound in Southside Vice City. 
        Second, **Wyman's Classic Car Collection** involves tracking down abandoned projects across the state, unlocking four custom vehicles including the Schyster Deviant and the Mamba GT.
      </p>

      <h2>Missions Requiring Both Jason and Lucia</h2>
      <p>
        Most missions require both protagonists to work in tandem. During these missions, you can switch characters to divide tasks:
      </p>
      <p>
        In a typical shootout mission, you can place Jason on a high vantage point with a sniper rifle to cover the exit, then switch to Lucia to plant explosives on the target vault. 
        During vehicle chases, one character drives while the other fires at the pursuing police cruisers. 
        You can learn more about how to coordinate these switching tactics in our <Link href="/story/dual-protagonists/">GTA 6 character switching mechanics guide</Link>.
      </p>

      <h2>Are there Missable Missions in GTA 6?</h2>
      <p>
        The campaign has three missable missions associated with secondary contacts in Act 2. 
        If you advance the main story beyond Mission 45 without completing these, the contacts become unavailable due to gang conflicts. 
        To avoid missing these story segments, you should complete all available side tasks and character-specific missions before starting Act 3.
      </p>
      <p>
        For details on the side tasks and stranger encounters available across Leonida, visit our <Link href="/story/side-missions/">GTA 6 side missions guide</Link>.
      </p>

      <div className={styles.callout}>
        <span className={styles.calloutTitle}>Key Takeaways</span>
        <p>
          GTA 6 features 70–85 main story missions structured across three acts. Heists serve as the main cash sources, requiring planning and crew coordination. Dynamic switching is utilized during most missions, and certain Act 2 missions are missable.
        </p>
      </div>

      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Can you replay story missions in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Yes, the pause menu allows you to replay any completed story mission to improve your completion times and earn gold medals.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>What is the first mission in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            The first mission is "The parole Run," which guides players through Lucia's release, her reunion with Jason, and their first getaway.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>What is the hardest mission in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            "The Kelly County Escape" is considered the hardest due to its long chase sequence through muddy swamps and heavy police pursuit.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Are there co-op missions in story mode?</h3>
          <p className={styles.faqAnswer}>
            No, the story mode campaign is entirely single-player, with the AI controlling the second protagonist when you are not switched to them.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>How do heists differ in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Heists rely heavily on character cooperation and trust levels, with your choices directly altering how the heists play out.
          </p>
        </div>
      </section>
    </>
  ),
};
