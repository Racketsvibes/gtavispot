import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImageLightbox from '@/components/ui/ImageLightbox';
import { ArticleData } from '../newsContent';
import styles from '../../app/news/[slug]/page.module.css';

const NewsCTAButton = ({ href, children, isExternal }: { href: string; children: React.ReactNode; isExternal?: boolean }) => {
  return (
    <div style={{ margin: '1.25rem 0 1.75rem 0' }}>
      <a
        href={href}
        className="news-cta-btn"
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        <span>{children}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
    </div>
  );
};

export const gta6Review: ArticleData = {
  title: 'GTA 6 Pre-Release Review & Extended Look Impressions',
  metaDescription: 'Our GTA 6 review breaks down the Extended Look gameplay. RAGE 9 engine specs, locked 30fps analysis, combat changes, and six-star wanted system.',
  focusKeyword: 'GTA 6 Review',
  h1: 'GTA 6 Pre-Release Review: Analyzing the Extended Look Gameplay',
  publishedDate: 'September 25, 2026',
  modifiedDate: 'September 25, 2026',
  author: 'Qamar Farooq',
  featureImage: '/images/news/gta-6-review-feature.webp',
  featureImageAlt: 'GTA 6 review feature image showing Lucia and Jason looking over Vice City skyline',
  content: (
    <ImageLightbox>
      <style dangerouslySetInnerHTML={{__html: `
        .news-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff !important;
          background: linear-gradient(135deg, #3b1578, #d6246e);
          border-radius: 24px;
          text-decoration: none !important;
          box-shadow: 0 3px 8px rgba(214, 36, 110, 0.25);
          transition: all 0.2s ease;
          font-family: var(--font-ui), "Barlow Condensed", sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          border: 1px solid transparent;
        }
        .news-cta-btn:hover,
        .news-cta-btn:focus,
        .news-cta-btn:active,
        .news-cta-btn:visited {
          text-decoration: none !important;
          color: #ffffff !important;
        }
        .news-cta-btn span {
          text-decoration: none !important;
        }
        .news-cta-btn:hover {
          background: linear-gradient(135deg, #d6246e, #f58634);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(245, 134, 52, 0.4);
        }
      `}} />
      <div className={styles.quickAnswer}>
        <p>
          GTA 6 launches November 19, 2026, delivering a $1.5 billion technical powerhouse running on the new RAGE 9 engine. The 26-minute Extended Look gameplay confirms a map three times larger than Los Santos and a rock-solid 30fps on PS5 hardware. While the $80 base price and lack of a 60fps mode are controversial, the game sets a new industry standard with its forensic six-star wanted system and full ray-traced global illumination.
        </p>
      </div>

      <h2>How Does the Extended Look Gameplay Hold Up?</h2>
      <p>
        Rockstar's August 27 gameplay reveal confirms that the decade-long wait was spent building a true next-generation simulation. The footage shows a meticulously crafted world where every NPC interaction and physical collision has weight. You can see our complete breakdown of that footage in our <Link href="/news/gta-6-extended-look/">Extended Look analysis</Link>.
      </p>
      <p>
        The game operates on a scale that makes its predecessors look like prototypes. With an estimated development budget of $1-1.5 billion, the production values bleed through every frame. First-week revenue projections sit at a staggering $3.25 to $5.2 billion.
      </p>

      <div className={styles.featureImageContainer}>
        <Image 
          src="/images/news/gta-6-review-lucia-jason-robbery.webp" 
          alt="Lucia and Jason in store robbery with bandanas in GTA 6" 
          width={1200} 
          height={675} 
          className={styles.featureImage} 
        />
      </div>

      <h2>How Alive is Leonida and Modern Vice City?</h2>
      <p>
        The new map covers approximately 125 square kilometers, making it 2.7 to 3 times larger than GTA 5's world. This sprawling state includes a fully realized modern Vice City, the swampy Grassrivers, the rural Port Gellhorn, and the verticality of Mount Kalaga. You can check out exact measurements in our <Link href="/map/size/">map size comparison guide</Link>.
      </p>
      <p>
        Exploration feels completely unhindered thanks to the addition of over 700 fully enterable interiors. You transition from glaring Miami sunlight into dimly lit pawn shops and neon-soaked clubs without a single loading screen. The NPCs driving this world have complex daily routines and react to your specific actions in real time.
      </p>
      <p>
        Rockstar also nailed the modern cultural atmosphere with a brutally accurate in-game social media system. Citizens record your crimes on their phones and upload them to a platform heavily satirizing TikTok. This digital footprint directly impacts your <strong>heat levels</strong> across different counties.
      </p>

      <h2>How Do Jason and Lucia Play Together?</h2>
      <p>
        Jason and Lucia anchor the narrative with a grounded, ex-military and ex-convict dynamic. Their relationship echoes the classic Bonnie and Clyde story, bringing emotional stakes that feel entirely new for the franchise. The chemistry is instantly apparent, largely thanks to the phenomenal performances from the game's <Link href="/story/voice-actors/">lead voice actors</Link>.
      </p>
      <p>
        The game allows instant protagonist switching during active combat scenarios. If you get pinned down as Jason, a quick button tap swaps you to Lucia providing sniper overwatch from a nearby roof. This fluidity turns standard firefights into tactical, multi-angle engagements.
      </p>

      <h2>Has Combat and Law Enforcement Evolved?</h2>
      <p>
        Your weapon inventory is now severely restricted to four active slots. You can carry two long weapons, one sidearm, and one melee tool on your person at any time. Your personal vehicle's trunk serves as your primary armory, forcing you to plan your loadout before starting a mission.
      </p>

      <div className={styles.featureImageContainer}>
        <Image 
          src="/images/news/gta-6-review-jason-shootout.webp" 
          alt="Jason in a shootout with 4 wanted stars in GTA 6" 
          width={1200} 
          height={675} 
          className={styles.featureImage} 
        />
      </div>

      <p>
        The revamped six-star wanted system utilizes forensic tracking to hunt you down. Police now use CCTV footage, facial recognition, and vehicle profiling to maintain investigations long after you escape the immediate red zone. Swapping stolen cars and changing clothes are absolute necessities to clear your <strong>wanted status</strong>.
      </p>
      <p>
        Gunplay feels heavier and more lethal thanks to the Euphoria ragdoll evolution. Bullets now penetrate different materials realistically, meaning drywall offers zero protection against heavy assault rifles. NPCs also feature a new weapon stance awareness system, surrendering or fleeing based on the specific gun you point at them.
      </p>

      <div className={styles.featureImageContainer}>
        <Image 
          src="/images/news/gta-6-review-combat-gameplay.webp" 
          alt="Indoor combat and gunfight scene in GTA 6" 
          width={1200} 
          height={675} 
          className={styles.featureImage} 
        />
      </div>

      <h2>What Makes the RAGE 9 Engine Special?</h2>
      <p>
        The RAGE 9 engine pushes real-time rendering further than anything currently on the market. Rockstar completely abandoned baked lightmaps in favor of full ray-traced global illumination. You can read more about these rendering techniques in our deep dive on <Link href="/tech/gta-6-graphics/">GTA 6 graphics</Link>.
      </p>
      <p>
        Character models feature advanced subsurface scattering that simulates skin translucency and realistic sweat pooling during physical exertion. The water physics are equally groundbreaking, featuring fluid dynamics that react accurately to boat wakes and weather patterns. 
      </p>
      <p>
        Performance on the PS5 holds remarkably steady despite the visual complexity. The Extended Look ran at 1440p upscaled to 4K with a locked 30fps target. Digital Foundry analyzed 48,242 frames of the footage and confirmed the frame rate never dropped.
      </p>

      <h2>What Are Critics Saying About the Gameplay?</h2>
      <p>
        The media response to the Extended Look has been overwhelmingly positive across the board. Digital Foundry called the footage "perhaps the most impressive showcase we've ever seen in real-time rendering." They specifically praised the density of the crowds and the complete lack of pop-in during high-speed driving.
      </p>
      <p>
        IGN's exclusive interview with Rockstar's Rob Nelson highlighted how the studio avoided standard "checklist design." The world map hides its activities naturally instead of vomiting hundreds of icons onto your screen. PC Gamer praised the life-sim atmosphere but noted that some scripted missions still feel a bit restrictive.
      </p>

      <h2>What Are the Main Concerns and Controversies?</h2>
      <p>
        The lack of a 60fps performance toggle on PS5 and Xbox Series X is the community's biggest frustration. The heavy CPU demands of the world simulation make a 60fps mode impossible on current console hardware. There are also massive scalability concerns regarding how the weaker Xbox Series S will handle the RAGE 9 engine.
      </p>
      <p>
        Pricing is another major friction point for the upcoming release. The standard edition costs $79.99, while the Ultimate Edition runs $99.99, establishing a new baseline for AAA game pricing. Check out our <Link href="/news/gta-6-price/">price guide</Link> for a full breakdown of what each edition includes.
      </p>
      <p>
        Physical collectors are angry that boxed copies only contain download codes rather than actual discs. PC players are dealing with the usual Rockstar launch cadence, facing an expected 12 to 18-month delay before the game hits Steam. 
      </p>

      <h2>GTA 5 vs GTA 6: How Do the Specs Compare?</h2>
      <p>
        The technical jump from 2013's GTA 5 to 2026's GTA 6 is staggering. We compiled the confirmed numbers from the Extended Look to show exactly how much the technology has scaled.
      </p>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>GTA 5 (Next-Gen)</th>
              <th>GTA 6 (Base PS5/XSX)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Map Size</td>
              <td>~49 sq km</td>
              <td>~125 sq km</td>
            </tr>
            <tr>
              <td>Enterable Interiors</td>
              <td>~100</td>
              <td>700+</td>
            </tr>
            <tr>
              <td>Global Illumination</td>
              <td>Baked Lightmaps</td>
              <td>Full Ray-Traced</td>
            </tr>
            <tr>
              <td>Weapon Inventory</td>
              <td>Infinite Weapon Wheel</td>
              <td>4 Active Slots + Trunk</td>
            </tr>
            <tr>
              <td>Wanted System</td>
              <td>5 Stars (Line of Sight)</td>
              <td>6 Stars (Forensic Tracking)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        
        <div className={styles.faqItem} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <h3 className={styles.faqQuestion} itemProp="name">When does GTA 6 officially release?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div className={styles.faqAnswer} itemProp="text">
              <p>GTA 6 releases globally on November 19, 2026, for the PlayStation 5 and Xbox Series X|S consoles. You can secure your copy early by following our <Link href="/news/gta-6-pre-order/">pre-order guide</Link>.</p>
            </div>
          </div>
        </div>

        <div className={styles.faqItem} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <h3 className={styles.faqQuestion} itemProp="name">Will GTA 6 run at 60fps on PS5?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div className={styles.faqAnswer} itemProp="text">
              <p>No, the game targets a locked 30fps at 1440p upscaled to 4K on the PS5 and Xbox Series X. The heavy physics and AI simulation require too much CPU power to reach 60 frames per second on base consoles.</p>
            </div>
          </div>
        </div>

        <div className={styles.faqItem} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <h3 className={styles.faqQuestion} itemProp="name">How much does GTA 6 cost?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div className={styles.faqAnswer} itemProp="text">
              <p>The standard edition of GTA 6 costs $79.99 on all platforms. Rockstar is also offering an Ultimate Edition for $99.99 that includes early access and exclusive digital content.</p>
            </div>
          </div>
        </div>

        <div className={styles.faqItem} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <h3 className={styles.faqQuestion} itemProp="name">Can I carry all my weapons at once?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div className={styles.faqAnswer} itemProp="text">
              <p>No, the infinite weapon wheel is gone. You can only carry two long weapons, one sidearm, and one melee weapon on your character, while the rest are stored in your vehicle's trunk.</p>
            </div>
          </div>
        </div>

        <div className={styles.faqItem} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <h3 className={styles.faqQuestion} itemProp="name">Are there still traditional cheats and trophies?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div className={styles.faqAnswer} itemProp="text">
              <p>Yes, traditional mechanics remain intact. You can view the full list of unlockables in our <Link href="/trophies/">trophies guide</Link> and find phone numbers in our <Link href="/cheats/">cheats guide</Link>.</p>
            </div>
          </div>
        </div>

        <div className={styles.faqItem} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <h3 className={styles.faqQuestion} itemProp="name">When is the PC version coming out?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div className={styles.faqAnswer} itemProp="text">
              <p>Rockstar has not announced an official PC release date yet. Based on historical release patterns, expect the PC version to launch 12 to 18 months after the console versions.</p>
            </div>
          </div>
        </div>
      </div>

      <p>
        Ready to lock in your copy before launch day?
      </p>

      <NewsCTAButton href="https://www.rockstargames.com/VI" isExternal={true}>
        Pre-order directly from Rockstar Games
      </NewsCTAButton>

    </ImageLightbox>
  ),
};
