import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArticleData } from './newsContent';
import styles from '../app/news/[slug]/page.module.css';

export const gta6Weapons: ArticleData = {
  title: 'GTA 6 Weapons List: All Confirmed Guns',
  metaDescription: 'The official GTA 6 weapons list. Learn how the new limited inventory carry system and weapons wheel work, and compare GTA 5 vs GTA 6 combat gear today.',
  focusKeyword: 'gta 6 weapons',
  h1: 'GTA 6 Weapons List: All Confirmed Guns & Gear',
  publishedDate: 'June 28, 2026',
  modifiedDate: 'June 28, 2026',
  author: 'Marcus Vance',
  featureImage: '/images/gta-6-weapons-wheel.webp',
  featureImageAlt: 'Official GTA 6 Weapons Wheel and loadout screen showing combat gear',
  content: (
    <>
      <p>
        Rockstar Games is shifting toward tactical realism with the confirmed <strong>gta 6 weapons</strong> lineup. Unlike previous entries where characters carried a small army’s worth of hardware in their pockets, this game limits your on-person arsenal. Here is the verified list of what you'll shoot, modify, and carry around Leonida.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Answer: Weapons System Overview</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Carry Limits:</strong> Players carry only two primary rifles, one handgun, and limited throwables.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Trunk Storage:</strong> Vehicles act as mobile armories where you swap heavy loadouts.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Customization:</strong> Deep weapon workbench upgrades including stocks, magazines, and optics.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Parody Brands:</strong> Weapons feature fictional manufacturer names like Girardi, Klose, and Duke.</span>
          </li>
        </ul>
      </div>

      <h2>How Will the gta 6 weapons Carry System Work?</h2>
      <p>
        The biggest change in the combat loop is the introduction of a limited inventory model. Borrowing heavily from Red Dead Redemption 2's saddlebag system, your characters carry a small selection of firearms. You can sling one long gun over your shoulder, strap another to your back, and holster a single handgun.
      </p>
      <p>
        This mechanical shift completely changes how heists play out. You must plan your loadout at your safehouse or from the trunk of your personal vehicle before initiating a shootout. If you bring the wrong rifle to a bank job, you'll have to adapt or fight your way back to your getaway vehicle.
      </p>
      <p>
        During these operations, your partner will cover you. Co-leads <Link href="/story/lucia/">Lucia</Link> and <Link href="/story/jason/">Jason</Link> share ammunition and can throw weapons to each other when pinned down. To explore how their relationships affect combat coordination, check out our guide on <Link href="/story/gta-6-characters/">GTA 6 Characters</Link>.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/gta-6-weapons-wheel.webp"
          alt="GTA 6 weapons wheel layout showing loadout customization in Vice City"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
          priority
        />
      </div>

      <h2>The Official gta 6 weapons List</h2>
      <p>
        Firearms are divided into several distinct categories. The following list details every weapon spotted in the trailers, promotional screenshots, and developmental leaks.
      </p>

      <h3>Handguns & Revolvers</h3>
      <p>
        Handguns remain your primary tool for concealed carry and quick-draw scenarios. They are easily hidden from police officers, which prevents wanted levels when walking through public districts.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/gta-6-girardi-es9-pistol.webp"
          alt="Girardi ES9 semi-automatic pistol in GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>

      <ul>
        <li>
          <strong>Girardi ES9:</strong> Based on the iconic Beretta 92FS. It serves as your standard starting pistol, offering balanced recoil, a 15-round magazine, and highly reliable fire rates.
        </li>
        <li>
          <strong>Klose K17:</strong> A modern polymer handgun inspired by the SIG-Sauer P320. It features a lightweight frame, fast reload cycles, and supports extended magazines.
        </li>
        <li>
          <strong>Capo Pistol:</strong> A classic single-action .45 ACP handgun styled after the M1911. It trades magazine capacity for heavy stopping power.
        </li>
        <li>
          <strong>Mustang .357:</strong> A heavy-duty double-action revolver based on the Colt Python. A single round can stop an armored cop, but the heavy recoil requires careful pacing.
        </li>
        <li>
          <strong>Morgan Revolver:</strong> A vintage, engraved revolver available as a pre-order bonus. It features a custom chrome finish and excellent long-range accuracy.
        </li>
        <li>
          <strong>Nipper .38:</strong> A compact snub-nosed revolver. It is easily hidden, making it a perfect emergency backup weapon during undercover missions.
        </li>
      </ul>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/gta-6-mustang-357-revolver.webp"
          alt="Mustang .357 double-action revolver in GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>

      <h3>Submachine Guns (SMGs)</h3>
      <p>
        Submachine guns are perfect for drive-by shootings and clearing tight interior hallways. They offer high fire rates but suffer from severe bullet spread during sustained fire.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/gta-6-mp5-smg.webp"
          alt="MP5-inspired submachine gun showing iron sights in GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>

      <ul>
        <li>
          <strong>MP5-inspired SMG:</strong> The classic tactical submachine gun. It is the most balanced weapon in its class, supporting silencer modifications and red-dot sights.
        </li>
        <li>
          <strong>MAC-10 SMG:</strong> A compact machine pistol with blistering rates of fire. It is ideal for close-range combat, though the recoil is difficult to manage without a stock.
        </li>
        <li>
          <strong>Micro SMG:</strong> A lightweight SMG that can be fired while driving motorcycles or boats. It is highly effective for close-range pursuits.
        </li>
      </ul>

      <h3>Assault Rifles</h3>
      <p>
        Assault rifles are the standard choice for open engagements. They offer high damage, controllable recoil, and excellent accuracy over medium-to-long distances.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/gta-6-ak-47.webp"
          alt="AK-47 assault rifle with wooden stock in GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>

      <ul>
        <li>
          <strong>AK-47 (Assault Rifle):</strong> The classic rugged assault rifle. It delivers heavy damage and high penetration, making it effective against vehicles and body armor.
        </li>
        <li>
          <strong>Duke Carbine:</strong> A highly modifiable tactical carbine based on the AR-15 platform. It supports advanced optical scopes, under-barrel grips, and compensators.
        </li>
        <li>
          <strong>M1A Rifle:</strong> A semi-automatic marksman rifle. It fires high-caliber rounds, bridging the gap between standard assault rifles and heavy sniper variants.
        </li>
      </ul>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/gta-6-duke-carbine.webp"
          alt="Duke Carbine assault rifle with custom attachments in GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>

      <h3>Shotguns</h3>
      <p>
        For close-quarters combat inside narrow corridors, shotguns are unmatched. A single shell can clear doorway entries, making them highly effective during bank robberies.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/gta-6-benelli-m4-shotgun.webp"
          alt="Benelli M4-inspired semi-automatic tactical shotgun in GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>

      <ul>
        <li>
          <strong>Benelli M4 Shotgun:</strong> A semi-automatic tactical shotgun. It allows you to fire multiple shells in rapid succession, clearing out cartels in seconds.
        </li>
        <li>
          <strong>Remington 870 Shotgun:</strong> The standard pump-action shotgun. It has slower fire rates but offers tighter pellet groupings and extreme reliability.
        </li>
        <li>
          <strong>Double-barreled Shotgun:</strong> A break-action classic. It fires two devastating shots before requiring a manual reload, creating high-risk, high-reward gunfights.
        </li>
      </ul>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/gta-6-double-barreled-shotgun.webp"
          alt="Double-barreled break-action shotgun in GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>

      <h3>Sniper Rifles</h3>
      <p>
        Sniper rifles allow you to control engagements from hundreds of meters away. They are perfect for covering your partner from rooftops during getaway setups.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/gta-6-duke-sniper-rifle.webp"
          alt="Duke sniper rifle with high-powered scope in GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>

      <ul>
        <li>
          <strong>Duke Sniper Rifle:</strong> A heavy bolt-action sniper rifle. It is capable of piercing vehicle engine blocks and dropping targets at extreme ranges.
        </li>
        <li>
          <strong>Remington 700 Rifle:</strong> A bolt-action hunting rifle. It lacks the military scope of the Duke variant but offers excellent handling and clean iron sights.
        </li>
      </ul>

      <h3>Heavy Weapons & Launchers</h3>
      <p>
        Heavy weaponry is reserved for high-wanted levels. You'll use these to bring down police helicopters and destroy armored trucks during primary campaign missions.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/gta-6-grenade-launcher.webp"
          alt="Grenade launcher firing explosive rounds in GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>

      <ul>
        <li>
          <strong>M249 LMG:</strong> A belt-fed light machine gun capable of laying down continuous suppressive fire. It holds 100 rounds per box magazine.
        </li>
        <li>
          <strong>Grenade Launcher:</strong> A break-action launcher that fires 40mm explosive grenades, perfect for clearing police blockades.
        </li>
      </ul>

      <h2>GTA 5 Weapons vs GTA 6 Weapons: The Key Differences</h2>
      <p>
        The shift from GTA 5 to the new engine changes combat dynamics. In the previous title, firefights were arcade-like, allowing players to instantly pull massive rocket launchers from their clothing. The updated game introduces weight, sling physics, and localized damage.
      </p>
      <p>
        Here is how the weapon systems compare between the two titles:
      </p>

      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Grand Theft Auto V</th>
            <th>Grand Theft Auto VI</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Inventory Carry Limit</td>
            <td>Unlimited (carry all owned guns)</td>
            <td>Limited (2 primary rifles, 1 handgun)</td>
          </tr>
          <tr>
            <td>Weapon Storage</td>
            <td>None (all inventory on character)</td>
            <td>Stored in personal vehicle trunks</td>
          </tr>
          <tr>
            <td>Customization Depth</td>
            <td>Basic color tints and silencers</td>
            <td>Custom stocks, barrels, and optics</td>
          </tr>
          <tr>
            <td>Bullet Physics</td>
            <td>Hitscan (instant hits)</td>
            <td>Projectile drop and wind calculation</td>
          </tr>
          <tr>
            <td>Recoil System</td>
            <td>Static camera shake</td>
            <td>Dynamic, pattern-based barrel climb</td>
          </tr>
        </tbody>
      </table>

      <p>
        These changes force you to plan your encounters. If you're going to raid a stash house, choosing the right tool from the <strong>gta 6 weapons List</strong> is the difference between survival and a trip to the local hospital.
      </p>

      <h2>GTA 6 Weapons: Frequently Asked Questions</h2>
      <div className={styles.faqSection}>
        <div className={styles.faqItem}>
          <span className={styles.faqQuestion}>Can you customize weapons in GTA 6?</span>
          <p className={styles.faqAnswer}>
            Yes. You can customize your arsenal at weapon workbenches. Upgrades include optical sights, extended magazines, suppressors, custom grips, and custom skin finishes.
          </p>
        </div>
        <div className={styles.faqItem}>
          <span className={styles.faqQuestion}>How does the trunk weapon storage work?</span>
          <p className={styles.faqAnswer}>
            Your personal vehicles act as mobile gun lockers. You can interact with the trunk to swap your slotted rifles, restock ammunition, and manage your heavier tactical gear.
          </p>
        </div>
        <div className={styles.faqItem}>
          <span className={styles.faqQuestion}>Will weapons have realistic recoil?</span>
          <p className={styles.faqAnswer}>
            Yes. The physics engine introduces dynamic barrel climb and spray patterns. Adding grips and compensators helps reduce this recoil during rapid fire.
          </p>
        </div>
        <div className={styles.faqItem}>
          <span className={styles.faqQuestion}>Can characters share ammunition?</span>
          <p className={styles.faqAnswer}>
            Yes. Lucia and Jason can toss extra magazines or weapon frames to each other when they are pinned down behind the same cover during heists.
          </p>
        </div>
      </div>

      <p>
        Understanding how to manage your loadout and utilize the new <strong>gta 6 weapons Wheel</strong> is crucial for surviving Vice City's streets. For details on how to secure exclusive bonuses like the Morgan Revolver at launch, check out our comprehensive <Link href="/news/gta-6-pre-order/">GTA 6 Pre-Order Guide</Link>.
      </p>
    </>
  )
};
