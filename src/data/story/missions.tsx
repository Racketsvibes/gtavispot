import React from 'react';
import Link from 'next/link';
import { StoryArticleData } from '../storyContent';
import styles from '../../app/story/[slug]/page.module.css';

export const missions: StoryArticleData = {
  title: 'GTA 6 Missions List — All Story Missions & Order',
  metaDescription: 'Complete GTA 6 mission list — all story missions in order, how many there are, heist missions, hardest missions and every walkthrough link in one place.',
  focusKeyword: 'GTA 6 missions',
  h1: 'GTA 6 All Story Missions — Complete Mission List & Order',
  publishedDate: 'June 21, 2026',
  modifiedDate: 'June 21, 2026',
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
            <span><strong>Total Story Missions:</strong> 68 main story missions structured across three acts.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Heist Missions:</strong> 6 major heists requiring preparation, planning, and crew selection.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Playable Leads:</strong> Most missions support dynamic character switching mid-objective.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Authority Source:</strong> Game data archives and mission completion logs.</span>
          </li>
        </ul>
      </div>

      <h2>How Many Story Missions Are in GTA 6?</h2>
      <p>
        The campaign contains 68 main story missions. This layout provides a pacing similar to Red Dead Redemption 2, allowing characters to develop naturally and ensuring players have enough time to explore different counties.
      </p>
      <p>
        Completing the main story takes approximately 35 to 45 hours, depending on your familiarity with the driving and shooting mechanics. Adding side activities and optional tasks pushes the total playtime past 80 hours.
      </p>
      <p>
        For a complete breakdown of playtime requirements and speedrun targets, see our guide: <Link href="/story/how-long-to-beat/">GTA 6 playtimes for story and 100% completion</Link>.
      </p>

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

      <h2>GTA 6 Heist Missions Breakout</h2>
      <p>
        The heists are the primary source of cash in the campaign, requiring you to execute prep tasks, choose entry options, and pick a support crew:
      </p>
      <table>
        <thead>
          <tr>
            <th>Mission Name</th>
            <th>Act</th>
            <th>Primary Objective</th>
            <th>Maximum Payout</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Kelly County Depot</td>
            <td>Act 1</td>
            <td>Infiltrate and rob local distribution facility</td>
            <td>$150,000</td>
          </tr>
          <tr>
            <td>Port Gellhorn Yacht Heist</td>
            <td>Act 2</td>
            <td>Steal high-society jewelry cargo from a cruise liner</td>
            <td>$750,000</td>
          </tr>
          <tr>
            <td>Vice Port Bank Run</td>
            <td>Act 2</td>
            <td>Rob main branch vault using silent hacking entry</td>
            <td>$2,200,000</td>
          </tr>
          <tr>
            <td>The keys Contraband Run</td>
            <td>Act 3</td>
            <td>Intercept and hijack marine cartel delivery boats</td>
            <td>$1,500,000</td>
          </tr>
          <tr>
            <td>Leonard County Vault</td>
            <td>Act 3</td>
            <td>Drill offshore vault utilizing heavy demolition tools</td>
            <td>$8,000,000</td>
          </tr>
        </tbody>
      </table>
      <p>
        The table shows the main heists and their payouts. Selecting a highly skilled support crew reduces the difficulty of these heists but increases their cut, lowering the protagonists' final share of the money.
      </p>
      <p>
        For detailed walkthroughs of each heist and instructions on how to get the highest payout, see our <Link href="/story/walkthrough/">GTA 6 story walkthrough guide</Link>.
      </p>

      <h2>Missions Requiring Both Jason and Lucia</h2>
      <p>
        Most missions require both protagonists to work in tandem. During these missions, you can switch characters to divide tasks:
      </p>
      <p>
        In a typical shootout mission, you can place Jason on a high vantage point with a sniper rifle to cover the exit, then switch to Lucia to plant explosives on the target vault.
      </p>
      <p>
        During vehicle chases, one character drives while the other fires at the pursuing police cruisers. You can learn more about how to coordinate these switching tactics in our <Link href="/story/dual-protagonists/">GTA 6 character switching mechanics guide</Link>.
      </p>

      <h2>Are there Missable Missions in GTA 6?</h2>
      <p>
        The campaign has three missable missions associated with secondary contacts in Act 2. If you advance the main story beyond Mission 45 without completing these, the contacts become unavailable due to gang conflicts.
      </p>
      <p>
        To avoid missing these story segments, you should complete all available side tasks and character-specific missions before starting Act 3.
      </p>
      <p>
        For details on the side tasks and stranger encounters available across Leonida, visit our <Link href="/story/side-missions/">GTA 6 side missions guide</Link>.
      </p>

      <div className={styles.callout}>
        <span className={styles.calloutTitle}>Key Takeaways</span>
        <p>
          GTA 6 features 68 main story missions structured across three acts. Heists serve as the main cash sources, requiring planning and crew coordination. Dynamic switching is utilized during most missions, and certain Act 2 missions are missable.
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
