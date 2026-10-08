import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArticleData } from './newsContent';
import styles from '../app/news/[slug]/page.module.css';

export const gta6Weapons: ArticleData = {
  title: 'GTA 6 Weapons List: All Guns Seen So Far',
  metaDescription: 'The official GTA 6 weapons list. Learn how the new limited inventory carry system and weapons wheel work, and compare GTA 5 vs GTA 6 combat gear today.',
  focusKeyword: 'gta 6 weapons',
  h1: 'GTA 6 Weapons List: All Confirmed Guns & Gear',
  publishedDate: 'June 28, 2026',
  modifiedDate: 'October 8, 2026',
  author: 'Marcus Vance',
  featureImage: '/images/gta-6-weapons-wheel.webp',
  featureImageAlt: 'Official GTA 6 Weapons Wheel and loadout screen showing combat gear',
  content: (
    <>
      <p>
        Rockstar Games is shifting toward tactical realism with the confirmed <strong>gta 6 weapons</strong> lineup. Unlike previous entries where characters carried a small army's worth of hardware in their pockets, this game limits your on-person arsenal. Here is the verified list of what you'll shoot, modify, and carry around Leonida.
      </p>
      <p>
        <strong>Updated October 8, 2026:</strong> this guide now includes the newly named Duke 556 assault rifle and Moreland 850 shotgun spotted in the Extended Look, Phil's Ammu-Nation from Trailer 2, and the Ultimate Edition exclusive weapons.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Answer: Weapons System Overview</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Named guns (confirmed):</strong> Duke 556 assault rifle, Moreland 850 shotgun, Klose K17 pistol (Lucia's sidearm), Girardi ES9 pistol (Jason's sidearm), Hawk and Little Morgan revolvers (Ultimate Edition).</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Buy them at:</strong> Phil's Ammu-Nation, revealed in Trailer 2 as an in-universe TV commercial.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Carry rule:</strong> two concealed handguns plus two long guns (one on your back, one in your off hand). Extra weapons go in a vehicle trunk or an Ammu-Nation locker.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Customization:</strong> more attachment options than any previous GTA, including suppressors, optics, extended magazines and tints.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>No official total:</strong> Rockstar has not announced how many weapons GTA 6 will have at launch.</span>
          </li>
        </ul>
      </div>

      <h2>How Will the gta 6 weapons Carry System Work?</h2>
      <p>
        The biggest change in the combat loop is the introduction of a limited inventory model. Borrowing heavily from Red Dead Redemption 2's saddlebag system, your characters carry a small selection of firearms. The invisible infinite arsenal is gone: GTA 6 treats weapons as physical objects.
      </p>
      <p>
        Here is the carry rule, confirmed by Rockstar North co-studio head Rob Nelson in on-record interviews around the Extended Look:
      </p>

      <table>
        <thead>
          <tr>
            <th>Slot</th>
            <th>Rule</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Handguns</td>
            <td>Two concealed handguns, always, with no NPC reaction</td>
          </tr>
          <tr>
            <td>Long gun 1</td>
            <td>Carried slung on your back; bystanders mostly do not care</td>
          </tr>
          <tr>
            <td>Long gun 2</td>
            <td>Held visibly in your off hand; people notice, move away, and cops may warn you</td>
          </tr>
          <tr>
            <td>Overflow</td>
            <td>Extra weapons live in any vehicle's trunk, a hideout locker, or an Ammu-Nation locker. Only your personal vehicle keeps the full loadout; a stolen car's trunk is not persistent</td>
          </tr>
        </tbody>
      </table>

      <p>
        This mechanical shift completely changes how heists play out. You must plan your loadout at your safehouse or from the trunk of your personal vehicle before initiating a shootout. If you bring the wrong rifle to a bank job, you'll have to adapt or fight your way back to your getaway vehicle.
      </p>
      <p>
        What you carry is now visible to the world. NPCs react in tiers: a long gun on your back is fine, one in your hands makes people uncomfortable, and holding it ready to fire escalates things fast, including with the police. Our <Link href="/guides/gta-6-wanted-system/">GTA 6 wanted system</Link> guide explains how open carry feeds into the new Heat and Criminal Profile systems.
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
        Firearms are divided into several distinct categories. The following list details every weapon spotted in the trailers, promotional screenshots, and developmental leaks. Each entry below was spotted in a Rockstar trailer, official screenshot, the Extended Look, or confirmed in an on-record interview. A few have official in-universe names; the rest are identified by their real-world design until Rockstar names them.
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
          <strong>Girardi ES9:</strong> Based on the iconic Beretta 92FS. It serves as Jason's personal sidearm, offering balanced recoil, a 15-round magazine, and highly reliable fire rates. Official footage shows extended magazine, suppressor, tints and flashlight options.
        </li>
        <li>
          <strong>Klose K17:</strong> A modern polymer handgun inspired by the SIG-Sauer P320. It is Lucia's personal sidearm, with a lightweight frame, fast reload cycles, and support for suppressors, extended magazines and optics.
        </li>
        <li>
          <strong>Capo Pistol:</strong> A classic single-action .45 ACP handgun styled after the M1911. It trades magazine capacity for heavy stopping power.
        </li>
        <li>
          <strong>Mustang .357:</strong> A heavy-duty double-action revolver based on the Colt Python. A single round can stop an armored cop, but the heavy recoil requires careful pacing.
        </li>
        <li>
          <strong>Hawk & Little Morgan revolvers:</strong> His-and-hers engraved revolvers with palm-tree-etched grips and a high-performance scope, sourced from the Vercetti Estate. Exclusive to the Ultimate Edition (see below).
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
          <strong>MP5-inspired SMG:</strong> The classic tactical submachine gun. It is the most balanced weapon in its class, supporting silencer modifications and red-dot sights. Jason and Lucia both wield it in the Trailer 2 robbery scene.
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
          <strong>Duke 556 assault rifle:</strong> Named rifle from the fictional Duke Arms Company, the clearest AR-pattern rifle confirmed so far, first broken down frame by frame from the Extended Look footage.
        </li>
        <li>
          <strong>AK-47 (Assault Rifle):</strong> The classic rugged assault rifle. It delivers heavy damage and high penetration, making it effective against vehicles and body armor. A whole rack of AK-pattern rifles with different furniture appears inside Ammu-Nation in Trailer 2.
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
          <strong>Moreland 850:</strong> Named shotgun first broken down frame by frame from the Extended Look footage.
        </li>
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
        <li>
          <strong>Molotov cocktail, sticky bomb, grenades and flashbangs:</strong> Consumables spotted in the Extended Look weapon breakdown.
        </li>
      </ul>

      <h3>Melee (seen, not confirmed usable)</h3>
      <p>
        A baseball bat, hammer, minigolf club, pool cue and switchblade knife all appear in official scenes. One caution: a pool cue is visible in a billiards scene, and it is not confirmed the cue is a usable weapon rather than a prop. The same applies to the rest of the melee list. We will mark them confirmed only when Rockstar or hands-on coverage shows them being used.
      </p>

      <h2>Where to Buy Guns in GTA 6: Phil's Ammu-Nation</h2>
      <p>
        Ammu-Nation is back, Leonida style. <strong>Phil's Ammu-Nation</strong> was revealed in Trailer 2 as an in-universe television commercial that plays while Jason watches TV: a heavy-set, loud owner named Phil stands in front of rows of rifles, shotguns and submachine guns and shouts his pitch about having more guns than the law allows.
      </p>
      <p>
        Veteran players immediately connected Phil to Phil Cassidy, the one-armed arms dealer from Vice City. That is fan theory, not confirmation. The original Phil lost an arm in Vice City's story, the Trailer 2 character has both arms, and GTA 6 continues the HD Universe timeline, which Rockstar has never crossed with the 3D Universe games. Until Rockstar names him, treat the Cassidy link as a fun theory, not a fact.
      </p>
      <p>
        Ammu-Nation is also where you <strong>manage</strong> your guns, not just buy them. Rob Nelson told Famitsu that every Ammu-Nation has a weapon locker where you store and retrieve long guns, and that you can have your personal vehicle delivered to you so your loadout is never far away.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/Extended_Look_2.webp"
          alt="GTA 6 Extended Look gameplay screenshot showing armed police pursuit in Vice City"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>

      <h2>Which GTA 6 Weapons Are Exclusive to the Ultimate Edition?</h2>
      <p>
        The $99.99 Ultimate Edition (digital only) reserves three weapon bonuses for its owners, confirmed on the official Rockstar Store listing:
      </p>
      <ul>
        <li><strong>Hawk & Little Morgan revolvers:</strong> his-and-hers revolvers with classic Vice City styling, palm-tree-etched grips, engraved detailing and a high-performance scope, sourced from the Vercetti Estate.</li>
        <li><strong>Personalized Girardi ES9:</strong> Jason's sidearm with detailed engravings.</li>
        <li><strong>Personalized Klose K17:</strong> Lucia's sidearm with detailed engravings.</li>
      </ul>
      <p>
        The bonuses unlock gradually as you progress through the story rather than all at once. See our <Link href="/news/gta-6-ultimate-edition-vs-standard/">Ultimate Edition vs Standard</Link> comparison for the full benefit list.
      </p>

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
            <td>Limited (2 handguns, 2 long guns)</td>
          </tr>
          <tr>
            <td>Weapon Storage</td>
            <td>None (all inventory on character)</td>
            <td>Stored in personal vehicle trunks and Ammu-Nation lockers</td>
          </tr>
          <tr>
            <td>Customization Depth</td>
            <td>Basic color tints and silencers</td>
            <td>Custom stocks, barrels, optics, magazines and finishes</td>
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
        These changes force you to plan your encounters. If you're going to raid a stash house, choosing the right tool from the <strong>gta 6 weapons List</strong> is the difference between survival and a trip to the local hospital. To learn how these combat systems tie into the game's broader mechanics like police bodycams and wanted levels, explore our <Link href="/guides/">GTA 6 features guide</Link>.
      </p>

      <h2>Key Takeaways</h2>
      <ul>
        <li>Rockstar has not announced a total weapon count, but official media confirms dozens of firearms across handguns, SMGs, shotguns, rifles, snipers, heavy weapons and explosives.</li>
        <li>The only officially named guns so far are the Duke 556 assault rifle, Moreland 850 shotgun, Klose K17 pistol, Girardi ES9 pistol and the Hawk & Little Morgan revolvers.</li>
        <li>Phil's Ammu-Nation, revealed in Trailer 2, is where you buy guns; every Ammu-Nation also has a weapon locker for managing long guns.</li>
        <li>You can carry two concealed handguns and two long guns (one on your back, one in your off hand); everything else goes in a vehicle trunk or locker.</li>
        <li>NPCs react to visible weapons in tiers, and police can warn you before things escalate.</li>
        <li>Weapon customization is deeper than ever: suppressors, optics, extended magazines, tints and more. The Hawk & Little Morgan revolvers and engraved sidearms are Ultimate Edition exclusives.</li>
      </ul>

      <h2>GTA 6 Weapons: Frequently Asked Questions</h2>
      <div className={styles.faqSection}>
        <div className={styles.faqItem}>
          <span className={styles.faqQuestion}>How many weapons are in GTA 6?</span>
          <p className={styles.faqAnswer}>
            Rockstar has not announced a number. Official trailers, screenshots and the Extended Look confirm roughly two dozen distinct weapons so far, with more unnamed variants visible on the Ammu-Nation gun rack. The final launch roster is still unknown, so treat any site claiming an exact number as speculation.
          </p>
        </div>
        <div className={styles.faqItem}>
          <span className={styles.faqQuestion}>Where is Ammu-Nation in GTA 6?</span>
          <p className={styles.faqAnswer}>
            Phil's Ammu-Nation appears in Trailer 2 as an in-universe TV commercial, so the store is confirmed to exist in Leonida. Its exact map location has not been revealed. Every Ammu-Nation branch has a weapon locker for storing and swapping long guns.
          </p>
        </div>
        <div className={styles.faqItem}>
          <span className={styles.faqQuestion}>Which weapons are exclusive to the GTA 6 Ultimate Edition?</span>
          <p className={styles.faqAnswer}>
            Three: the Hawk & Little Morgan revolvers (his-and-hers, engraved, scoped) and personalized engraved variants of Jason's Girardi ES9 and Lucia's Klose K17. They unlock gradually through the story, not all at once.
          </p>
        </div>
        <div className={styles.faqItem}>
          <span className={styles.faqQuestion}>Will GTA 6 have a weapon wheel?</span>
          <p className={styles.faqAnswer}>
            Rockstar has not confirmed a weapon wheel. The confirmed system is physical: two concealed handguns, two long guns on your person, and the rest in vehicle trunks or lockers. How you switch between the weapons on your person has not been shown yet.
          </p>
        </div>
        <div className={styles.faqItem}>
          <span className={styles.faqQuestion}>Can you customize weapons in GTA 6?</span>
          <p className={styles.faqAnswer}>
            Yes. You can customize your arsenal at weapon workbenches. Upgrades include optical sights, extended magazines, suppressors, custom grips, and custom skin finishes. Rockstar says customization goes further than any previous GTA, and official footage shows suppressors, optics, extended magazines, tints and flashlights on the confirmed pistols.
          </p>
        </div>
        <div className={styles.faqItem}>
          <span className={styles.faqQuestion}>How does the trunk weapon storage work?</span>
          <p className={styles.faqAnswer}>
            Your personal vehicles act as mobile gun lockers. You can interact with the trunk to swap your slotted rifles, restock ammunition, and manage your heavier tactical gear. Only your personal vehicle keeps the full loadout; a stolen car's trunk is not persistent.
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

      <h2>Where Does This Information Come From?</h2>
      <p>
        Last checked: October 8, 2026. The weapon identifications come from GamesRadar+, ScreenRant and Beebom, who catalogued the trailers, screenshots and Extended Look frame by frame. The carry rules, NPC reactions and customization details come from Rockstar North co-studio head Rob Nelson in interviews with Famitsu and GTABase's compilation of the preview sessions. The Ultimate Edition weapons come from Kotaku's breakdown of the official Rockstar Store listing. Anything marked "reported" above comes from press who attended the preview sessions, not from Rockstar directly. With <Link href="/news/gta-6-release-date/">GTA 6 releasing November 19, 2026</Link>, expect the weapon list to grow as Rockstar shows more.
      </p>

      <p>
        Understanding how to manage your loadout and use the new <strong>gta 6 weapons Wheel</strong> is crucial for surviving Vice City's streets. For details on how to secure exclusive bonuses like the Hawk & Little Morgan revolvers at launch, check out our comprehensive <Link href="/news/gta-6-pre-order/">GTA 6 Pre-Order Guide</Link> or read our projections for custom weapon skins in <Link href="/mods/">gta 6 mods</Link>.
      </p>
    </>
  )
};
