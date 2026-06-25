import React from 'react';
import Link from 'next/link';
import { StoryArticleData } from '../storyContent';
import styles from '../../app/story/[slug]/page.module.css';

export const walkthrough: StoryArticleData = {
  title: 'GTA 6 Walkthrough: Story Mode Guide & All Missions',
  metaDescription: 'Full GTA 6 story walkthrough: every mission guide, gold medal tips, act-by-act breakdown, and everything you need to complete the story mode 100%.',
  focusKeyword: 'GTA 6 walkthrough',
  h1: 'GTA 6 Walkthrough: Complete Story Mode Guide & All Missions',
  publishedDate: 'June 21, 2026',
  modifiedDate: 'June 25, 2026',
  author: 'Marcus Vance',
  featureImage: '/images/GTA_6_Screenshot.webp',
  videoSchema: {
    name: 'GTA 6 Official Reveal Trailer 1',
    description: 'The record-breaking first official trailer for Grand Theft Auto VI, introducing the modern Vice City setting and protagonists Lucia and Jason.',
    thumbnailUrl: [
      'https://img.youtube.com/vi/QdBZY2fkU-0/maxresdefault.jpg',
      'https://img.youtube.com/vi/QdBZY2fkU-0/hqdefault.jpg'
    ],
    uploadDate: '2023-12-05T00:00:00Z',
    duration: 'PT1M31S',
    contentUrl: 'https://www.youtube.com/watch?v=QdBZY2fkU-0',
    embedUrl: 'https://www.youtube.com/embed/QdBZY2fkU-0'
  },
  content: (
    <>
      <p>
        Navigating the campaign of the modern state of Leonida requires a detailed <strong>GTA 6 walkthrough</strong> to help you coordinate heists, survive police pursuits, and achieve gold medals on all missions. This step-by-step walkthrough guide provides act-by-act instructions, weapon strategies, and character-switching tips for completing the story campaign.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Answer: Walkthrough Overview</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Acts Covered:</strong> Act 1 (Kelly County), Act 2 (Vice City), and Act 3 (The Keys).</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Completion Target:</strong> Gold medals require finishing within specific time limits and landing headshots.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>First Action:</strong> Complete the initial chapter to hack and remove Lucia's ankle monitor.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Authority Source:</strong> Official strategy guides and developer gameplay mechanics archives.</span>
          </li>
        </ul>
      </div>

      <div className={styles.videoContainer}>
        <iframe
          className={styles.videoEmbed}
          src="https://www.youtube.com/embed/QdBZY2fkU-0"
          title="GTA 6 Official Reveal Trailer 1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <h2>How Do You Complete GTA 6 Story Mode?</h2>
      <p>
        The campaign is structured as a series of connected missions that you launch by visiting letter icons on the map. The story focuses on the coordination between Lucia and Jason, requiring players to utilize their individual abilities during missions.
      </p>
      <p>
        To complete the campaign efficiently, you should focus on upgrading your weapons at Ammu-Nation outlets and modifying your getaway cars at local custom shops. Having bulletproof tires and armor modifications makes the later getaway missions significantly easier.
      </p>
      <p>
        For a complete listing of every mission in the game, visit our <Link href="/story/missions/">GTA 6 missions list and order guide</Link>.
      </p>

      <h2>Act-by-Act Walkthrough Strategy</h2>
      <p>
        The story mode progresses through three major narrative blocks, each introducing new mechanics, settings, and challenges:
      </p>

      <h3>Act 1: Kelly County Outposts (Missions 1–22)</h3>
      <p>
        The initial act serves as a tutorial, introducing the shooting, driving, and character-switching mechanics. Lucia begins the act restricted to Kelly County by her ankle monitor.
      </p>
      <p>
        Your main goal is to complete the first heist, "The Kelly County Depot," which rewards the duo with enough cash to hire a black-market hacker. This technician removes her monitor, allowing you to explore the rest of Leonida.
      </p>

      <h3>Act 2: Entering Vice City (Missions 23–48)</h3>
      <p>
        With the state map fully open, the duo establishes safehouses in Vice Port and Ocean Beach. Missions focus on planning robberies, stealing getaway vehicles, and clashing with cartel syndicates.
      </p>
      <p>
        During this act, you'll need to complete three heist prep missions before launching "The Vice Port Bank Run." This heist requires you to hack keypads as Lucia and cover the escape route as Jason.
      </p>

      <h3>Act 3: The Keys Syndicate (Missions 49–68)</h3>
      <p>
        The final act takes place across the southern Leonida Keys. The duo is recruited for major smuggling runs and must evade federal police units who are tracking their operations.
      </p>
      <p>
        The final mission, "The Leonard County Vault," requires you to drill into an offshore vault, triggering a massive police chase that determines the ending of the story.
      </p>

      <h2>Gold Medal Requirements & Walkthrough Tips</h2>
      <p>
        Replaying missions allows you to earn gold medals by completing specific challenges:
      </p>
      <table>
        <thead>
          <tr>
            <th>Challenge Type</th>
            <th>Requirement to Earn Gold</th>
            <th>Strategic Walkthrough Tip</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Time Limit</td>
            <td>Finish the mission within the designated time</td>
            <td>Skip cutscenes and use sports cars for transit</td>
          </tr>
          <tr>
            <td>Accuracy</td>
            <td>Maintain a shooting accuracy of 80% or higher</td>
            <td>Use Jason's Combat Focus ability to slow time</td>
          </tr>
          <tr>
            <td>Headshots</td>
            <td>Land 10+ headshots during combat sequences</td>
            <td>Equip assault rifles with red-dot scopes</td>
          </tr>
          <tr>
            <td>Undamaged</td>
            <td>Complete the mission without losing health or armor</td>
            <td>Stay behind cover and use armor upgrades</td>
          </tr>
        </tbody>
      </table>
      <p>
        This table displays the key parameters for earning gold medals. Replaying missions does not affect your story progress, allowing you to focus on single challenges during each run.
      </p>
      <p>
        To see details on how the character abilities differ and how to use them, visit our <Link href="/story/dual-protagonists/">GTA 6 character abilities and switching guide</Link>.
      </p>

      <h2>How to Prepare for Heists</h2>
      <p>
        Heists require preparation tasks that you must complete before starting the main objective:
      </p>
      <ul>
        <li><strong>Getaway Vehicle:</strong> Steal a four-door vehicle, install bulletproof tires, and park it in an isolated location near the heist target.</li>
        <li><strong>Equipment Setup:</strong> Purchase body armor, masks, and hacking tools from black-market dealers in Vice Port.</li>
        <li><strong>Crew Selection:</strong> Hire hackers, drivers, and shooters from your contact list. Hiring cheap crew members increases your share of the money but increases the difficulty of the heist.</li>
      </ul>
      <p>
        Completing these prep tasks is critical. Choosing poor getaway cars or low-skill crew members often results in failed runs or lost loot during the escape.
      </p>
      <p>
        For a guide to the optional quests and stranger tasks that unlock skilled crew members, see our <Link href="/story/side-missions/">GTA 6 side missions guide</Link>.
      </p>

      <h2>Does the Story Have Multiple Endings?</h2>
      <p>
        Yes, the choices you make during the final act shape the ending of the campaign. Your decisions directly affect the trust level between the protagonists, leading to different narrative outcomes.
      </p>
      <p>
        For a complete explanation of all endings and how to get the secret ending, see our <Link href="/story/ending/">GTA 6 ending guide and analysis</Link>.
      </p>

      <div className={styles.callout}>
        <span className={styles.calloutTitle}>Key Takeaways</span>
        <p>
          The GTA 6 walkthrough spans three acts, guiding players through early tutorials, urban bank runs, and high-stakes Keys heists. Earning gold medals requires meeting time limits and accuracy checks. Heists require careful vehicle, equipment, and crew preparation.
        </p>
      </div>

      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Can you fail missions permanently in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            No, failing a mission objective prompts a checkpoint screen, allowing you to retry the segment or restart the mission from the beginning.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>How do you unlock the full map in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            The map is restricted during the first chapter while Lucia wears her ankle monitor. Completing the Act 1 heist hacks the monitor, opening Leonida.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Can you skip cutscenes during missions?</h3>
          <p className={styles.faqAnswer}>
            Yes, pressing the skip button during dialogue or cutscenes advances the gameplay immediately, which is useful during gold medal speedruns.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Do you get cash rewards for replaying missions?</h3>
          <p className={styles.faqAnswer}>
            No, replaying completed missions is strictly for earning medals and achievements; cash payouts are only awarded on your first playthrough.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Which character is better for getaway driving?</h3>
          <p className={styles.faqAnswer}>
            Jason is the better choice for getaway driving due to his higher starting vehicle control stats and special ability traction buffs.
          </p>
        </div>
      </section>
    </>
  ),
};
