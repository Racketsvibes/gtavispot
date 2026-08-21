import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StoryArticleData } from '../storyContent';
import styles from '../../app/story/[slug]/page.module.css';

export const ending: StoryArticleData = {
  title: 'GTA 6 Ending Explained: All 3 Endings & Secret End 2026',
  metaDescription: 'GTA 6 has 3 endings - Betrayal, Sacrifice & True Ending. Does Lucia or Jason die? What\'s the post-credits scene? Full spoiler breakdown with all outcomes.',
  focusKeyword: 'GTA 6 ending',
  h1: 'GTA 6 Ending Explained: All 3 Endings & Secret End 2026',
  publishedDate: 'June 21, 2026',
  modifiedDate: 'August 20, 2026',
  author: 'Marcus Vance',
  featureImage: '/images/GTAVI_Screenshots/People/Lucia_Caminos/Lucia_Caminos_02.webp',
  content: (
    <>
      <div style={{ padding: '16px', background: 'rgba(245, 134, 52, 0.1)', borderLeft: '4px solid var(--brand-orange)', borderRadius: '0 8px 8px 0', marginBottom: '24px', fontFamily: 'var(--font-ui), sans-serif' }}>
        <strong>⚠️ SPOILER WARNING:</strong> This guide contains major story spoilers for the final acts, character fates, and endings of Grand Theft Auto VI. Read further only if you have completed the campaign or do not mind spoilers.
      </div>

      <p>
        The climax of the <strong>GTA 6 ending</strong> provides an emotional conclusion to Lucia and Jason\'s criminal partnership. Shifting away from linear campaign finales, your decisions, relationship trust, and choices in the final heist shape the outcome of their story, resulting in three distinct endings.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Answer: Endings Summary</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Ending A (Betrayal):</strong> Jason or Lucia betrays the other to secure a federal immunity deal.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Ending B (Sacrifice):</strong> One protagonist dies defending their partner during the escape.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>True Ending (Survival):</strong> The duo cooperates, defeats the syndicate, and escapes together.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Authority Source:</strong> Complete story databases and verified chapter walkthroughs.</span>
          </li>
        </ul>
      </div>

      <h2>How Does GTA 6 End?</h2>
      <p>
        The final act begins with the preparation for "The Leonard County Vault," the largest heist in the game. With federal agents tracking their movements and the Vice City cartels demanding payments, the duo realizes they cannot continue operating in Leonida.
      </p>

      <div className={styles.featureImageContainer}>
        <Image 
          src="/images/GTAVI_Screenshots/People/Jason_Duval/Jason_Duval_03.webp" 
          alt="Jason Duval planning the final vault heist in GTA 6" 
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage} 
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Jason evaluates target blueprints and escape options on the final setup board. (Image credit: Rockstar Games)
        </div>
      </div>

      <p>
        During the escape across the causeway, the Kelly County sheriff’s department forces them into a corner. A corrupt contact offers Jason and Lucia separate immunity deals, requiring them to turn over their partner’s share of the heist money to secure their freedom.
      </p>
      <p>
        This setups the final decision, which you make by selecting one of three tactical options on your planning board. The choices are shaped by the trust level you built between the characters during the campaign.
      </p>
      <p>
        For a guide to the preceding missions that lead to this confrontation, see our <Link href="/story/walkthrough/">GTA 6 story walkthrough</Link>.
      </p>

      <h2>The Three Main Endings Explained</h2>
      <p>
        Depending on the option you choose on the planning board, the story concludes in one of three ways:
      </p>

      <div className={styles.cardGrid}>
        <div className={styles.endingCard}>
          <h3 className={styles.cardTitle}>Ending A: Betrayal</h3>
          <span className={styles.cardMeta}>Low Trust (&lt; 40%)</span>
          <p className={styles.cardText}>
            The character you control turns on their partner during the escape, leading to death or arrest while securing personal witness protection.
          </p>
        </div>
        <div className={styles.endingCard}>
          <h3 className={styles.cardTitle}>Ending B: Sacrifice</h3>
          <span className={styles.cardMeta}>Moderate Trust (40%-70%)</span>
          <p className={styles.cardText}>
            Poor tactical coordination causes one partner to stay behind, sacrificing themselves during a shootout to let the other escape.
          </p>
        </div>
        <div className={styles.endingCard}>
          <h3 className={styles.cardTitle}>True End: Survival</h3>
          <span className={styles.cardMeta}>High Trust (70%+)</span>
          <p className={styles.cardText}>
            Jason and Lucia stand together, bypass police roadblocks, defeat the corrupt contact, and escape to a Caribbean island.
          </p>
        </div>
      </div>

      <h3>Ending A: The Betrayal Route</h3>
      <p>
        If you select the option to accept the federal immunity deal, the character you control turns on their partner during the final escape. This choice is usually made if your trust level is low.
      </p>

      <div className={styles.featureImageContainer}>
        <Image 
          src="/images/GTAVI_Screenshots/People/Jason_Duval/Jason_Duval_05.webp" 
          alt="Jason Duval escaping alone in Ending A of GTA 6" 
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage} 
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Under the betrayal route, Jason escapes Leonida but is forced to live in witness protection. (Image credit: Rockstar Games)
        </div>
      </div>

      <p>
        If playing as Jason, he contacts the sheriff, leading to Lucia\'s arrest or death during a shootout at the marina. Jason escapes with his share of the cash but is forced to live in isolation under witness protection, ending his criminal career in loneliness.
      </p>
      <p>
        If playing as Lucia, she betrays Jason to clear her previous prison record. She secures her freedom but is shown staring at their shared photo in her new apartment, realizing the cost of her liberty.
      </p>

      <h3>Ending B: The Sacrifice Route</h3>
      <p>
        If you choose to reject the deal but fail to coordinate the escape correctly, the mission ends in sacrifice. This outcome occurs if your trust level is moderate but you make poor tactical choices during the escape.
      </p>

      <div className={styles.featureImageContainer}>
        <Image 
          src="/images/GTAVI_Screenshots/People/Lucia_Caminos/Lucia_Caminos_05.webp" 
          alt="Lucia Caminos defending their position during the final shootout in GTA 6" 
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage} 
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          One partner holds off incoming SWAT teams, allowing the other to escape on a speedboat. (Image credit: Rockstar Games)
        </div>
      </div>

      <p>
        During the final dock shootout, one protagonist is wounded by cartel gunfire. The other character tries to drag them to safety, but the injured partner stays behind to hold off the SWAT teams, allowing the other to escape on a speedboat.
      </p>
      <p>
        The surviving character escapes to South America with the heist money, leaving a memorial in the Keys to honor their fallen partner.
      </p>

      <h3>The True Ending: Partner in Crime</h3>
      <p>
        The true ending is unlocked by maintaining a high trust level throughout the campaign. If you select the cooperative escape plan, Jason and Lucia reject the immunity deals and stand together:
      </p>

      <div className={styles.featureImageContainer}>
        <Image 
          src="/images/GTAVI_Screenshots/Places/Leonida_Keys/Leonida_Keys_03.webp" 
          alt="Scenic view of the causeway in the Leonida Keys during the final escape in GTA 6" 
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage} 
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          The causeway bridges of the Leonida Keys serve as the final escape route. (Image credit: Rockstar Games)
        </div>
      </div>

      <p>
        Utilizing their combined abilities, they bypass the police roadblocks at the causeway, defeat the corrupt sheriff, and board a cargo boat heading out of Leonida.
      </p>
      <p>
        They escape to a Caribbean island, successfully securing their heist money and keeping their relationship intact. This ending is considered canon, resolving their story arc without betrayal.
      </p>
      <p>
        To read about the specific relationship mechanics that unlock this ending, visit our guide to the <Link href="/story/jason-and-lucia/">GTA 6 Jason and Lucia partnership</Link>.
      </p>

      <h2>Ending Comparison and Decision Table</h2>
      <p>
        Players can evaluate the outcomes of the three choices to determine which path they want to pursue:
      </p>
      <table>
        <thead>
          <tr>
            <th>Ending Type</th>
            <th>Required Trust Level</th>
            <th>Character Fate</th>
            <th>Post-Game Playability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ending A (Betrayal)</td>
            <td>Low (Under 40%)</td>
            <td>One partner dead or jailed; survivor lives in isolation</td>
            <td>Only the surviving protagonist is playable</td>
          </tr>
          <tr>
            <td>Ending B (Sacrifice)</td>
            <td>Moderate (40–70%)</td>
            <td>One partner dies holding off police forces</td>
            <td>Only the surviving protagonist is playable</td>
          </tr>
          <tr>
            <td>True Ending (Survival)</td>
            <td>High (70%+)</td>
            <td>Both characters survive and escape together</td>
            <td>Both protagonists remain playable in free-roam</td>
          </tr>
        </tbody>
      </table>

      <p>
        This comparison table highlights the benefits of the True Ending. Earning it ensures you can continue switching between Jason and Lucia during the post-game, allowing you to complete side quests and unlock achievements.
      </p>
      <p>
        For a guide to the full mission list and their payouts, check our <Link href="/story/missions/">GTA 6 story mission order guide</Link>.
      </p>

      <h2>What Happens After the Credits?</h2>
      <p>
        After the credits roll, you return to the open world of Leonida. If you achieved the True Ending, both characters are playable, and they receive their share of the vault heist money ($4,000,000 each).
      </p>

      <h3>Important Post-Game Activities</h3>
      <ul>
        <li><strong>Character Switching:</strong> Switch between Jason and Lucia at any time in free-roam.</li>
        <li><strong>Property Acquisition:</strong> Purchase luxury safehouses, car customization garages, and night club businesses.</li>
        <li><strong>Loot Upgrades:</strong> Upgrade your weapons locker and buy high-end sports cars.</li>
        <li><strong>Side Content:</strong> Complete stranger missions, off-road trials, and stunt jumps.</li>
      </ul>

      <p>
        If you received Ending A or B, the post-game is restricted to the surviving character, and certain safehouses and customization options are locked.
      </p>

      <div className={styles.callout}>
        <span className={styles.calloutTitle}>Key Takeaways</span>
        <p>
          GTA 6 features three distinct endings shaped by your relationship trust level. Ending A involves betrayal, Ending B results in a partner\'s sacrifice, and the True Ending allows both protagonists to survive. Only the True Ending keeps both characters playable in the post-game.
        </p>
      </div>

      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Which GTA 6 ending is canon?</h3>
          <p className={styles.faqAnswer}>
            The True Ending, where Jason and Lucia cooperate and escape together, is considered the canon ending as it resolves their relationship theme.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Can you continue playing after the ending?</h3>
          <p className={styles.faqAnswer}>
            Yes, the game returns players to the state of Leonida after the credits, allowing you to explore, buy safehouses, and complete side quests.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Does Lucia die in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Lucia can die in Ending A (if you choose to betray her as Jason) or Ending B (if you make poor escape choices), but she survives in the True Ending.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>How do you unlock the secret ending?</h3>
          <p className={styles.faqAnswer}>
            You unlock the True/Secret ending by maintaining a trust rating above 70% and choosing the cooperative option on the final heist board.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Is there a post-credits scene?</h3>
          <p className={styles.faqAnswer}>
            Yes, a short post-credits scene shows the corrupt Kelly County sheriff being investigated by federal agents, teasing future story expansions.
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "GTA 6 Campaign Endings & Fates",
            "description": "A summary list of the three main ending outcomes and character fates in Grand Theft Auto VI.",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Ending A: The Betrayal Route",
                "description": "Jason or Lucia chooses to accept the federal immunity deal, turning on their partner. Low trust results in one partner dead/jailed and the other living in lonely isolation."
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Ending B: The Sacrifice Route",
                "description": "One partner is wounded during the final docks shootout and stays behind to hold off SWAT teams, sacrificing themselves to allow the other to escape."
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "The True Ending: Partner in Crime",
                "description": "Jason and Lucia stand together, bypass police roadblocks, defeat the corrupt sheriff, and escape to a Caribbean island with the heist money. Both remain playable in free-roam."
              }
            ]
          })
        }}
      />
    </>
  ),
};
