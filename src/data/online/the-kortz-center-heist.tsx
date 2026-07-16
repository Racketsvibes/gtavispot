import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArticleData } from '../newsContent';
import YoutubePlayer from '@/components/YoutubePlayer';
import styles from '../../app/news/[slug]/page.module.css';

export const gta6KortzHeist: ArticleData = {
  title: 'The Kortz Center Heist: Payouts, Setup & Nerfs Guide',
  metaDescription: 'Own a Mansion and plan the ultimate heist. Read our guide to The Kortz Center Heist in GTA Online, including Mansion costs, supercars, and payout nerfs.',
  focusKeyword: 'The Kortz Center Heist',
  h1: 'The Kortz Center Heist: Payouts, Setup & Nerfs Guide',
  publishedDate: 'July 16, 2026',
  modifiedDate: 'July 16, 2026',
  author: 'Marcus Vance',
  featureImage: '/images/the-kortz-center-heist.webp',
  featureImageAlt: 'GTA Online characters planning The Kortz Center Heist around a table',
  videoSchema: {
    name: 'GTA Online: The Kortz Center Heist Walkthrough & Guide',
    description: 'Watch the complete video walkthrough of the final GTA Online DLC, covering mansion setups, scouting, and the heist execution.',
    thumbnailUrl: ['https://img.youtube.com/vi/ntDkCCY-r4A/maxresdefault.jpg'],
    uploadDate: '2026-07-14',
    duration: 'PT15M00S',
    contentUrl: 'https://www.youtube.com/watch?v=ntDkCCY-r4A',
    embedUrl: 'https://www.youtube.com/embed/ntDkCCY-r4A',
  },
  content: (
    <>
      <p>
        <strong>The Kortz Center Heist</strong> is now live in GTA Online, bringing the final major story expansion to the long-running multiplayer sandbox. 
        Starting the robbery requires purchasing a luxury <strong>GTA Online Mansion</strong> and installing a custom <strong>Art Studio Upgrade</strong>, 
        demanding a total minimum investment of GTA$ 16.2 million. 
        Here is what you need to know about the setup requirements, new supercars, and the massive payouts nerfs across other classic heists.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Heist Summary</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Setup Cost:</strong> GTA$ 16,200,000 minimum (Mansion property plus the Art Studio).</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Weekly Payout:</strong> GTA$ 2,000,000 for your first completion of the week.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>New Vehicles:</strong> The Grotti Veleno GT and the Benefactor LMC GT.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Heist Nerfs:</strong> Slashed payouts for Cayo Perico, Diamond Casino, and Doomsday.</span>
          </li>
        </ul>
      </div>

      <p>
        Originally teased in community forums and developer listings, this update acts as the final curtain call for GTA Online. 
        Players must transition from simple high-rise apartments to sprawling estate properties in Vinewood Hills to unlock the planning phase. 
        The high financial barrier to entry has divided the community, but the inclusion of custom estates and new mechanics offers a premium sendoff.
      </p>

      <h2>How Do You Unlock the Mansion Art Studio?</h2>
      <p>
        To start the robbery, you need to purchase a Vinewood Hills estate on the Prix Luxury Real Estate site. 
        Estates range from GTA$ 11.5 million to GTA$ 18.2 million depending on the location, view, and garage space. 
        After securing your property, you must purchase the <strong>Art Studio Upgrade</strong> for GTA$ 4,700,000 to launch heist preparations.
      </p>
      
      <p>
        Once the studio is active, entering the estate triggers a cutscene with Mr. Faber and Raf De Angelis. 
        These characters introduce the logistics of stealing fine art and establish the heist planning board inside your studio. 
        Purchasing the upgrade also unlocks optional custom display frames in your estate, allowing you to showcase stolen masterworks.
      </p>

      <div className={styles.featureImageContainer}>
        <Image 
          src="/images/the-kortz-center-heist-setup-board.webp" 
          alt="Planning board inside the Mansion Art Studio upgrade in GTA Online" 
          width={1200}
          height={630}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          className={styles.featureImage} 
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          The Art Studio heist board lets you coordinate setups and plan entry approaches. (Image credit: Rockstar Games)
        </div>
      </div>

      <p>
        If you are looking to offset the upgrade costs, subscribing to <Link href="/online/gta-plus/">GTA+ subscription benefits</Link> can provide monthly cash injections. 
        Active members also receive a 15% discount on the Art Studio purchase. 
        This discount saves you roughly GTA$ 705,000 on the setup phase.
      </p>

      <h2>What Is the Mansion Update GTA Online Payout Structure?</h2>
      <p>
        Completing the robbery for the first time each week rewards you with a GTA$ 2 million primary target bonus. 
        Subsequent completions in the same week trigger a market saturation penalty, dropping the payout to GTA$ 400,000. 
        Each additional run costs a GTA$ 100,000 setup fee, reducing your net take to GTA$ 300,000.
      </p>
      
      <p>
        Unlike older operations, the host cannot adjust the cut percentages for crew members. 
        The system forces an equal 25% split for a four-player crew, or 50% for a duo. 
        This change has frustrated veteran players who prefer to reward players based on setup participation.
      </p>

      <p>
        The heist features a dynamic loot decay system similar to the Casino robbery. 
        Taking physical damage from security guards during the escape degrades the canvas quality of the stolen paintings. 
        This degradation reduces the target value at the final drop-off point.
      </p>

      <h2>The Great Heist Payout Nerf of July 2026</h2>
      <p>
        To encourage players to complete the new mission, Rockstar Games implemented a sweeping <strong>heist payout nerf</strong> across the game. 
        Payouts for older, highly repeatable operations were slashed by 20% to 40%. 
        This adjustment has received significant community backlash on Reddit and the GTAForums.
      </p>
      
      <p>
        According to the <a href="https://www.rockstargames.com/newswire/article/2525o93834o413/the-kortz-center-heist-now-available-in-gta-online" target="_blank" rel="noopener noreferrer">official Rockstar Games Newswire</a>, these cuts are part of experience improvements. 
        The developer wants to reward players for mixing up their routines rather than repeating single activities. 
        Here is the comparison showing the slashed payouts for major operations:
      </p>

      <table className={styles.compareTable || ''} style={{ width: '100%', margin: '24px 0', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid var(--border)' }}>
            <th style={{ padding: '12px', textAlign: 'left' }}>Heist / Target</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Old Payout (GTA$)</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>New Payout (GTA$)</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Reduction Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
            <td style={{ padding: '12px' }}>Cayo Perico (Pink Diamond)</td>
            <td style={{ padding: '12px' }}>$1,300,000</td>
            <td style={{ padding: '12px' }}>$910,000</td>
            <td style={{ padding: '12px' }}>30%</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
            <td style={{ padding: '12px' }}>Cayo Perico (Sinsimito Tequila)</td>
            <td style={{ padding: '12px' }}>$630,000</td>
            <td style={{ padding: '12px' }}>$400,000</td>
            <td style={{ padding: '12px' }}>36.5%</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
            <td style={{ padding: '12px' }}>Diamond Casino Heist (Diamonds)</td>
            <td style={{ padding: '12px' }}>$3,300,000</td>
            <td style={{ padding: '12px' }}>$2,300,000</td>
            <td style={{ padding: '12px' }}>30.3%</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
            <td style={{ padding: '12px' }}>Diamond Casino Heist (Gold)</td>
            <td style={{ padding: '12px' }}>$2,600,000</td>
            <td style={{ padding: '12px' }}>$1,800,000</td>
            <td style={{ padding: '12px' }}>30.7%</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
            <td style={{ padding: '12px' }}>Doomsday Heist (Act III Finale)</td>
            <td style={{ padding: '12px' }}>$1,800,000</td>
            <td style={{ padding: '12px' }}>$1,000,000</td>
            <td style={{ padding: '12px' }}>44.4%</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
            <td style={{ padding: '12px' }}>The Contract (Dre Finale)</td>
            <td style={{ padding: '12px' }}>$1,000,000</td>
            <td style={{ padding: '12px' }}>$900,000</td>
            <td style={{ padding: '12px' }}>10%</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
            <td style={{ padding: '12px' }}>Cluckin Bell Farm Raid</td>
            <td style={{ padding: '12px' }}>$500,000</td>
            <td style={{ padding: '12px' }}>$400,000</td>
            <td style={{ padding: '12px' }}>20%</td>
          </tr>
        </tbody>
      </table>

      <p>
        These nerfs apply whether you buy a standard version or a premium package. 
        To understand the differences in gaming client options, check our <Link href="/news/gta-6-ultimate-edition-vs-standard/">GTA 6 Ultimate Edition vs Standard comparison</Link>. 
        Many players have uninstalled the game due to these reductions, arguing the changes destroy the grinding balance.
      </p>

      <h2>What New Vehicles Are Added in the Update?</h2>
      <p>
        The expansion introduces several high-performance vehicles, led by the new <strong>Grotti Veleno GT</strong>. 
        This Italian supercar features exceptional top speeds and handles sharp corners on the highways of Los Santos. 
        It is available on Legendary Motorsport for a price of GTA$ 3,850,000.
      </p>

      <div className={styles.featureImageContainer}>
        <Image 
          src="/images/grotti-veleno-gt.webp" 
          alt="Grotti Veleno GT supercar driving in Los Santos" 
          width={1200}
          height={630}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          className={styles.featureImage} 
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          The Grotti Veleno GT supercar features aggressive aerodynamics and high customization. (Image credit: Rockstar Games)
        </div>
      </div>

      <p>
        Alongside the Veleno, the update adds the Benefactor LMC GT. 
        This classic racing machine is inspired by legendary touring models and costs GTA$ 3,200,000. 
        It is favored by players who prefer vintage body lines and high customization potential in the garages.
      </p>

      <div className={styles.featureImageContainer}>
        <Image 
          src="/images/benefactor-lmc-gt.webp" 
          alt="Benefactor LMC GT classic sports car showcase" 
          width={1200}
          height={630}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          className={styles.featureImage} 
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          The Benefactor LMC GT brings historic endurance racing style to Southern San Andreas. (Image credit: Rockstar Games)
        </div>
      </div>

      <h2>Step-by-Step Walkthrough: Planning The Kortz Center Heist</h2>
      <p>
        Executing the heist involves three core phases. 
        First, you must complete the mandatory "Scope Out" mission to log entrances and identify security vulnerabilities. 
        We recommend scanning the স্টাফ/Staff Entrance, the Loading Bay, the Sewer outlet, and the glass Skylights on the roof.
      </p>
      
      <p>
        The second phase requires completing three mandatory setup missions. 
        These missions involve stealing security uniforms, hacking security keycards, and sourcing a getaway vehicle. 
        Using the in-game phone lets you call Raf De Angelis to bypass some optional setups for a fee.
      </p>

      <div className={styles.featureImageContainer}>
        <Image 
          src="/images/gta-online-mission-creator.webp" 
          alt="GTA Online mission creator menu with survival elements" 
          width={1200}
          height={630}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          className={styles.featureImage} 
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          The update also introduces custom survival creator options to design your own heist preps. (Image credit: Rockstar Games)
        </div>
      </div>

      <p>
        During the finale, you enter the Kortz Center museum in Pacific Bluffs. 
        Bypass security alarms and laser tripwires by timing your movements past security guards. 
        Once you secure the art targets, you must escape the perimeter while under attack by local corporate mercenary teams.
      </p>

      <div style={{ margin: '32px 0' }}>
        <h3 style={{ marginBottom: '16px', fontFamily: 'var(--font-headline), sans-serif' }}>The Kortz Center Heist Video Walkthrough</h3>
        <YoutubePlayer
          videoId="ntDkCCY-r4A"
          thumbnailUrl="https://img.youtube.com/vi/ntDkCCY-r4A/maxresdefault.jpg"
          title="The Kortz Center Heist Setup & Payout Guide"
        />
      </div>

      <h2>Why Is the Community Refusing to Play the New Heist?</h2>
      <p>
        Community sentiment is negative due to the high startup costs. 
        Many casual players cannot afford the GTA$ 16.2 million required for the property upgrades. 
        This has led to claims that the DLC is designed to encourage Shark Card sales before GTA Online operations wind down.
      </p>
      
      <p>
        Reddit threads criticize the Cayo Perico and Casino nerfs as a forced method to direct players toward the new content. 
        Without the ability to adjust crew cut percentages, matching with random players is difficult. 
        Most users prefer to stay with traditional businesses rather than invest in the expensive art studio.
      </p>

      <section className={styles.faqSection}>
        <h2>FAQs About the Kortz Center Heist</h2>
        <p>
          Here are the answers to the most common questions regarding the Mansion update:
        </p>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Can you do the Kortz Center Heist solo?</h3>
          <p className={styles.faqAnswer}>
            Yes, the heist supports solo play, but it is highly difficult. Bypassing security systems alone takes more time, and your bag capacity limits the quantity of secondary loot you can secure.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>How do you unlock the Art Studio Upgrade?</h3>
          <p className={styles.faqAnswer}>
            The upgrade is purchased on the Prix Luxury Real Estate site after buying a Mansion property. It is located under the property custom options and costs GTA$ 4,700,000.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Why did Rockstar nerf Cayo Perico and Casino payouts?</h3>
          <p className={styles.faqAnswer}>
            The developer slashed payouts to prevent players from grinding single activities. They want players to rotate between different heists and experience the new Kortz Center content.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Does taking damage during the escape affect the heist payout?</h3>
          <p className={styles.faqAnswer}>
            Yes, taking damage degrades the canvas quality of the stolen paintings. This degradation directly reduces the value of the primary target at the final drop-off.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Is the Kortz Center Heist worth the GTA$ 16.2 million cost?</h3>
          <p className={styles.faqAnswer}>
            No, it is not worth it for money-making. The entry price is too high, and the payout drop on subsequent runs makes it a poor method for grinding cash in Southern San Andreas.
          </p>
        </div>
      </section>

      <p>
        Gamers looking to complete <strong>The Kortz Center Heist</strong> should verify their cash reserves before purchasing the Vinewood Hills property. 
        Bypass optional setups to save time, and complete your first run early each week to guarantee the GTA$ 2 million payout bonus.
      </p>
    </>
  )
};
