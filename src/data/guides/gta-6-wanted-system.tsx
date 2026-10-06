import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GuideArticleData } from '../guidesContent';
import styles from '../../app/tech/[slug]/page.module.css';

export const gta6WantedSystem: GuideArticleData = {
  title: 'GTA 6 Wanted System Explained: 6 Stars, Heat & Escape',
  metaDescription: 'GTA 6 brings back six wanted stars plus a Heat system that tracks your clothes, face, car and partner. How the star states, evidence icons and escapes work.',
  focusKeyword: 'gta 6 wanted system',
  h1: 'GTA 6 Wanted System Explained: 6 Stars, Heat & Escape',
  publishedDate: 'October 6, 2026',
  modifiedDate: 'October 6, 2026',
  author: 'Editorial Staff',
  featureImage: '/images/news/gta-6-wanted-system-feature.webp',
  featureImageAlt: 'Neon-style illustration of the GTA 6 six-star wanted HUD with heat icons over a Vice City night skyline',
  content: (
    <>
      <p>
        <strong>Verdict:</strong> the <strong>GTA 6 wanted system</strong> is confirmed to run to six stars for the first time since Grand Theft Auto: Chinatown Wars, and it sits on top of a new Heat layer that tracks what police actually know about you: your clothes, your face, your vehicle, your weapon, CCTV footage and whether Jason and Lucia are travelling together. A crime only reaches the police if an NPC witnesses it or an alarm goes off, and losing the cops no longer resets everything: you have to change what they know.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Answer: How Does the GTA 6 Wanted System Work?</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Six stars (confirmed):</strong> back from the five-star cap GTA V used; the Extended Look chase shows four filled stars with two empty slots.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Heat icons (confirmed):</strong> evidence indicators under the stars show what police know: your outfit, face, car, weapon and whether you are a pair.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Witnesses required (confirmed):</strong> Rockstar&apos;s Rob Nelson says a crime must be seen by an NPC or trigger an alarm before police respond.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Escape rule (confirmed):</strong> break line of sight, then change the details in your description. Just outrunning the chase is not enough.</span>
          </li>
        </ul>
      </div>

      <h2>What is confirmed vs what is still unknown</h2>
      <p>
        Most of what follows comes from Rockstar North co-studio head Rob Nelson in on-record interviews around the August 2026 Extended Look, from the footage itself, and from Game Informer&apos;s September 29 cover story. Here is the honest split.
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
            <td>Six-star wanted scale; Heat evidence icons; crimes need a witness or an alarm to be reported; white, red and hollow star states; police remember your description after the chase ends; a separate Criminal Profile tracks how you commit crimes</td>
          </tr>
          <tr>
            <td><strong>Not stated</strong></td>
            <td>What each individual star level brings in response terms; how long police memory lasts; what the Criminal Profile actually changes in gameplay; how six stars behave beyond the reported map-wide search</td>
          </tr>
        </tbody>
      </table>

      <h2>How many wanted stars does GTA 6 have?</h2>
      <p>
        Six. GTA V capped the scale at five in 2013, so this is the series&apos; first six-star wanted system in a mainline 3D entry since Grand Theft Auto: Chinatown Wars in 2009. The Extended Look&apos;s police chase shows Jason and Lucia at four stars with two empty slots remaining, which settles the number beyond doubt.
      </p>
      <p>
        Stars do not pile up automatically. Nelson told Famitsu that how many stars a crime earns depends on what it was and how serious, and that the team was careful not to make the assessment too harsh. One star is meant to be easy to shake; six is the classic all-out manhunt. The full per-level response ladder has not been detailed.
      </p>

      <h2>What do the different star colors mean?</h2>
      <p>
        The stars themselves change color to tell you what the police know and what they are doing about it. This is the biggest readability upgrade the system has had since the series went 3D.
      </p>
      <table>
        <thead>
          <tr>
            <th>Star state</th>
            <th>Meaning</th>
            <th>Confidence</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>White</strong></td>
            <td>Active pursuit: patrols can see you right now</td>
            <td>Confirmed (Extended Look)</td>
          </tr>
          <tr>
            <td><strong>Red</strong></td>
            <td>Heat state: contact broken, but police hold your description and are searching the area</td>
            <td>Confirmed (Rockstar to press)</td>
          </tr>
          <tr>
            <td><strong>Hollow/outline</strong></td>
            <td>Police are responding to a reported crime but have no description of the perpetrator</td>
            <td>Confirmed (Extended Look)</td>
          </tr>
          <tr>
            <td><strong>Flashing</strong></td>
            <td>A wanted level is just starting, or line of sight was just broken</td>
            <td>Reported (preview attendees)</td>
          </tr>
        </tbody>
      </table>
      <p>
        When the stars turn red, the game draws a shaded search zone on the minimap instead of showing you individual cops. Officers and their vision cones were removed from the radar, so you read the situation from the stars and the screen-edge flash, or use the Focus ability to see through walls.
      </p>

      <h2>How does the GTA 6 Heat system work?</h2>
      <p>
        Below the stars sits the Heat system: a set of evidence icons showing exactly what the police know about you. The footage shows icons for your clothes, your face, your vehicle, whether you are travelling as a pair, CCTV footage and your weapon. The icons are the point of the redesign: losing the cops is now about <strong>information</strong>, not just distance.
      </p>
      <p>
        Change a detail and the corresponding pressure drops. GameSpot saw the car icon vanish the moment Jason or Lucia hid a car in a garage. Nelson&apos;s own IGN example is blunt: the police know what you are driving, so jump out of the vehicle. They know you are a couple, so split up. A new outfit, a swapped car or a bandana pulled over the face can throw off pursuers as effectively as outrunning them.
      </p>

      <div className={styles.featureImageContainer} style={{ marginBottom: '24px' }}>
        <Image
          src="/images/news/gta-6-wanted-system-feature.webp"
          alt="Neon-style illustration of the GTA 6 six-star wanted HUD with heat icons over a Vice City night skyline"
          width={1200}
          height={630}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Illustration created for GTAVISpot, not official Rockstar artwork.
        </div>
      </div>

      <h2>What gets the cops called on you in GTA 6?</h2>
      <p>
        The old automatic wanted level is gone. Nelson confirmed to IGN that <strong>a crime only gets reported if an NPC actually witnesses it or an alarm triggers</strong>. Rob a store with no one watching and no alarm, and the police never hear about it. Kill the witnesses before they report you and the chain stops cold.
      </p>
      <p>
        CCTV is the witness you cannot punch. TGG&apos;s hands-on notes that police can log CCTV footage of your crimes, which feeds the Heat icons directly. Planning heists in GTA 6 means checking for cameras, managing alarms and keeping your face covered, not just bringing the biggest gun. See our <Link href="/news/gta-6-gameplay/">GTA 6 gameplay</Link> breakdown for how this connects to the other new systems.
      </p>

      <h2>How do you lose the cops in GTA 6? 5 methods</h2>
      <p>
        Every escape follows the same logic: break the pursuit, then break the description. These are the five methods the footage and interviews support.
      </p>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>How it works</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1. Break line of sight</strong></td>
            <td>Getting out of patrols&apos; vision turns white stars red and drops you into the search zone</td>
          </tr>
          <tr>
            <td><strong>2. Swap your vehicle</strong></td>
            <td>Switching cars removes the vehicle icon; a cop car rolled right past Jason and Lucia in the Extended Look after a swap</td>
          </tr>
          <tr>
            <td><strong>3. Change clothes or appearance</strong></td>
            <td>A new outfit or hairstyle attacks the clothing and face icons; spare outfits can be stored in your vehicle</td>
          </tr>
          <tr>
            <td><strong>4. Split up</strong></td>
            <td>Jason and Lucia can go their separate ways, which divides police attention when the pair icon is lit</td>
          </tr>
          <tr>
            <td><strong>5. Clear the heat zone</strong></td>
            <td>Escape the shaded search area and avoid returning to the crime scene: scenes stay hot and can reactivate your wanted level</td>
          </tr>
        </tbody>
      </table>
      <p>
        The split-up method is a genuine co-op mechanic advantage: <Link href="/story/jason-and-lucia/">Jason and Lucia</Link> can be harder to track as two individuals than as a pair. Which protagonist you build up first may matter more than you think, so meet both in our <Link href="/story/gta-6-characters/">GTA 6 characters</Link> guide.
      </p>

      <h2>What is the GTA 6 Criminal Profile?</h2>
      <p>
        The Criminal Profile runs independently of the stars. Rockstar has been unusually direct that this is <strong>not a morality system</strong>. Nelson describes it as closer to professionalism: a clean robbery with minimal unnecessary violence raises the profile, while excessive violence lowers it, no matter who the target was. It even distinguishes self-defence from unprovoked escalation.
      </p>
      <p>
        Two important details. First, it is tracked <strong>per character</strong>: Lucia can be a disciplined professional while Jason spirals, or the reverse. Second, there is no persistent on-screen meter during normal play; it lives in a dedicated stat menu, with the HUD icons shown in footage acting as momentary feedback. What the profile actually changes in gameplay is the one big unknown Rockstar has not explained.
      </p>

      <h2>GTA 6 wanted system vs GTA 5</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>GTA 5</th>
            <th>GTA 6</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Max wanted stars</td>
            <td>5</td>
            <td><strong>6</strong></td>
          </tr>
          <tr>
            <td>How crimes get reported</td>
            <td>Mostly automatic</td>
            <td>Witnessed by NPC or alarm triggered</td>
          </tr>
          <tr>
            <td>Police memory after the chase</td>
            <td>None: escape and you are forgotten</td>
            <td>Yes: description persists until you change it</td>
          </tr>
          <tr>
            <td>Changing clothes or cars</td>
            <td>No effect on the search</td>
            <td>Removes the corresponding evidence icon</td>
          </tr>
          <tr>
            <td>CCTV</td>
            <td>Limited</td>
            <td>Feeds the Heat icons directly</td>
          </tr>
          <tr>
            <td>Cops on the minimap</td>
            <td>Yes</td>
            <td>Removed; search zones shown instead</td>
          </tr>
          <tr>
            <td>Separate criminal profile</td>
            <td>No</td>
            <td>Yes, tracked per character</td>
          </tr>
        </tbody>
      </table>

      <h2>Key Takeaways</h2>
      <ul>
        <li>The GTA 6 wanted system goes to six stars, the first mainline six-star scale since Chinatown Wars in 2009.</li>
        <li>The Heat system tracks what police know about you: clothes, face, car, weapon, CCTV footage and whether Jason and Lucia are together.</li>
        <li>Crimes must be witnessed by an NPC or set off an alarm before police respond at all.</li>
        <li>White stars mean active pursuit; red stars mean you broke contact but are still being hunted inside a search zone; hollow stars mean police have no description of you.</li>
        <li>To escape, break line of sight and then change the details in your description: vehicle, clothes, appearance, or split up.</li>
        <li>The Criminal Profile is a separate per-character record of how professionally you commit crimes, and Rockstar has not yet explained what it changes.</li>
      </ul>

      <h2>GTA 6 Wanted System: Frequently Asked Questions</h2>
      <div className={styles.faqSection}>
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Will GTA 6 have 6 wanted stars?</h3>
          <p className={styles.faqAnswer}>
            Yes, confirmed. GTA 6 restores the six-star wanted level that GTA V dropped in favour of five stars, and it is reportedly hard to reach. At six stars the police reportedly abandon the circular search zones and search the entire map for you.
          </p>
        </div>
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>What does the GTA 6 Heat system track?</h3>
          <p className={styles.faqAnswer}>
            The Heat icons track your clothes, your face, your vehicle, your weapon, CCTV footage of your crimes, and whether Jason and Lucia are travelling together. Removing or changing any of these details lowers what the police know about you and makes you harder to find.
          </p>
        </div>
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>What do red stars mean in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Red stars mean you have broken the police&apos;s line of sight but are still inside their search zone. They hold a description of you, shown by the icons under the stars, and are still actively hunting you. That is different from white stars, which mean the pursuit is still live.
          </p>
        </div>
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Can police remember you in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Yes, and that is the point of the redesign. The Heat icons persist after your wanted stars clear: police keep the description a witness gave them until you actively change what is in it. Change your outfit, your face, your weapon, your vehicle, or split up as Jason and Lucia to make them forget.
          </p>
        </div>
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>What is the GTA 6 Criminal Profile?</h3>
          <p className={styles.faqAnswer}>
            A separate per-character record of how you commit crimes. Clean jobs with minimal violence raise it; excessive violence lowers it, and it distinguishes self-defence from unprovoked escalation. Rockstar says it is not a morality system, and has not explained what it unlocks or changes yet.
          </p>
        </div>
      </div>

      <h2>Where does this information come from?</h2>
      <p>
        Last checked: October 6, 2026. The six-star scale, Heat evidence icons, star states and witness-based reporting come from Rockstar North co-studio head Rob Nelson in interviews with{' '}
        <a href="https://www.gamesradar.com/games/grand-theft-auto/gta-6-wanted-system-goes-up-to-6-stars-and-lets-police-track-your-face-your-clothes-and-your-car/" target="_blank" rel="noopener">GamesRadar+</a>,{' '}
        <a href="https://www.vice-atlas.com/briefings/gta6-wanted-system-expectations/" target="_blank" rel="noopener">Vice Atlas</a> and Famitsu, from the August 27, 2026 Extended Look footage, and from{' '}
        <a href="https://www.playingvi.com/gameplay/gta-6-wanted-system-heat-explained" target="_blank" rel="noopener">PlayingVI</a> and{' '}
        <a href="https://www.gtabase.com/articles/gta-6/gta-6-wanted-level-explained-police-system-guide" target="_blank" rel="noopener">GTABase</a>, who compiled the hands-on previews. Anything marked &quot;reported&quot; above comes from press who attended the preview sessions, not from Rockstar directly. With{' '}
        <Link href="/news/gta-6-release-date/">GTA 6 releasing November 19, 2026</Link>, expect Rockstar to fill in the remaining gaps closer to launch.
      </p>

      <p>
        Bookmark this guide: we will update the star responses, police memory details and Criminal Profile effects the moment Rockstar confirms them. For more mechanics explained, see our <Link href="/weapons/">GTA 6 weapons</Link> hub and the <Link href="/cheats/">GTA 6 cheats</Link> page.
      </p>
    </>
  )
};
