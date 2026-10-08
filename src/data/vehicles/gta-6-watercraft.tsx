import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArticleData } from '../newsContent';
import styles from '../../app/news/[slug]/page.module.css';

export const gta6WatercraftArticle: ArticleData = {
  title: 'GTA 6 Watercraft: Every Boat, Yacht & Jet Ski Confirmed',
  metaDescription: 'Every confirmed GTA 6 boat so far: Seashark jet skis, Dinka Marquis yachts, Squalo speedboats and Everglades airboats. Where to find watercraft in Leonida.',
  focusKeyword: 'gta 6 boats',
  h1: 'GTA 6 Watercraft: Confirmed Boats, Yachts & Jet Skis',
  publishedDate: 'October 8, 2026',
  modifiedDate: 'October 8, 2026',
  author: 'Editorial Staff',
  featureImage: '/images/Watercraft_2.webp',
  featureImageAlt: 'GTA 6 watercraft on the ocean near Vice City at sunset',
  content: (
    <>
      <p>
        <strong>Verdict:</strong> Leonida is a water state, so <strong>GTA 6 boats</strong> matter more than in any previous GTA. The trailers confirm returning favorites like the Seashark jet ski, the Dinka Marquis yacht and Shitzu speedboats, plus new sightings: Everglades airboats, luxury yachts, dive boats and fishing trawlers. This guide lists every confirmed watercraft, where each type fits in the world, and how to get on the water.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Answer: GTA 6 Watercraft</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Confirmed boats:</strong> Nagasaki Dinghy, Dinka Marquis yacht, Speedophile Seashark jet ski, Pegassi Speeder, Shitzu Squalo and Shitzu Tropic.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>New sightings:</strong> Everglades airboats, luxury yachts, dive boats, fishing and shrimp boats, kayaks.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Why it matters:</strong> the Leonida Keys, Grassrivers wetlands and open ocean make boats essential, not optional.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>No official total:</strong> Rockstar has not announced how many watercraft GTA 6 will have.</span>
          </li>
        </ul>
      </div>

      <h2>Which Boats Are Confirmed in GTA 6?</h2>
      <p>
        The returning fleet comes from trailer analysis catalogued by the GTA Wiki community and GameRant. Every entry below was spotted in official Rockstar footage. A few carry official in-universe names; the rest are identified by their real-world design until Rockstar names them.
      </p>

      <table>
        <thead>
          <tr>
            <th>Boat</th>
            <th>Maker</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Dinghy</strong></td>
            <td>Nagasaki</td>
            <td>Rigid-hulled inflatable boat, ideal for beaching and quick getaways</td>
          </tr>
          <tr>
            <td><strong>Marquis</strong></td>
            <td>Dinka</td>
            <td>Classic sailing yacht, a Vice City staple returning to Leonida</td>
          </tr>
          <tr>
            <td><strong>Seashark</strong></td>
            <td>Speedophile</td>
            <td>Single-rider personal watercraft (jet ski), perfect for the Keys</td>
          </tr>
          <tr>
            <td><strong>Speeder</strong></td>
            <td>Pegassi</td>
            <td>High-performance speedboat for offshore runs</td>
          </tr>
          <tr>
            <td><strong>Squalo</strong></td>
            <td>Shitzu</td>
            <td>Offshore racing speedboat with deep-V hull</td>
          </tr>
          <tr>
            <td><strong>Tropic</strong></td>
            <td>Shitzu</td>
            <td>Cabin cruiser for coastal cruising</td>
          </tr>
          <tr>
            <td><strong>Reefer</strong></td>
            <td>Unnamed</td>
            <td>Small fishing boat spotted in harbor scenes</td>
          </tr>
        </tbody>
      </table>

      <h2>New Watercraft Spotted in the Trailers</h2>
      <p>
        Beyond the returning names, trailer footage shows a wider working waterfront than any previous GTA. These are identified by design, not officially named:
      </p>
      <ul>
        <li><strong>Everglades airboats:</strong> flat-bottomed boats with aircraft propellers, built for the shallow Grassrivers wetlands where normal propellers would hit bottom.</li>
        <li><strong>Luxury motor yachts:</strong> multi-deck yachts inspired by real Azimut and Riva designs, seen anchored off Vice Beach and the Keys.</li>
        <li><strong>Dive boat:</strong> a dedicated diving support vessel, hinting at expanded underwater exploration.</li>
        <li><strong>Fishing and shrimp boats:</strong> working trawlers in the harbors, suggesting a living commercial waterfront.</li>
        <li><strong>Kayaks:</strong> small paddle craft spotted near mangrove shorelines.</li>
        <li><strong>Cigarette-style speedboats:</strong> offshore racing hulls (Cigarette 38 Top Gun and Skater 388 styles) for high-speed ocean runs.</li>
      </ul>
      <p>
        A large cruise ship also appears on the horizon in ocean shots. It reads as scenery rather than a usable vessel, but Rockstar has surprised players before.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/Watercraft_2.webp"
          alt="GTA 6 watercraft on the ocean near Vice City at sunset"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>

      <h2>Why Watercraft Matter More in GTA 6</h2>
      <p>
        Water is not decoration in Leonida, it is geography. The <Link href="/map/leonida-keys/">Leonida Keys</Link> are a chain of islands reachable only by boat or bridge. The Grassrivers wetlands in the south are a maze of shallow channels where airboats are the only practical transport. And the open ocean wraps the entire east coast.
      </p>
      <p>
        That layout changes what boats are for. In past games they were toys for stunt jumps. Here they look like genuine transport: island hopping in the Keys, smuggling runs past the coast guard, diving expeditions, and getaways where the only road out is blocked. If the wanted system extends to the water the way it does on land, expect marine police patrols too.
      </p>

      <h2>Where to Find and Buy Boats in GTA 6</h2>
      <p>
        Rockstar has not confirmed boat dealerships, so treat this as informed expectation based on the franchise pattern. In GTA 5, boats were bought at docks through the in-game internet and stored at personal marinas. Leonida's harbors, marinas and the Keys docks are the natural equivalents.
      </p>
      <p>
        Expect small craft like the Dinghy and Seashark to be stealable from beaches and docks, mid-range speedboats purchasable online, and yachts like the Marquis as high-end purchases with mooring fees. We will update this section the moment Rockstar confirms the system.
      </p>

      <h2>GTA 5 Boats vs GTA 6 Boats: What Is New</h2>
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
            <td>Role of watercraft</td>
            <td>Mostly recreational, stunt-focused</td>
            <td>Essential transport for islands and wetlands</td>
          </tr>
          <tr>
            <td>Airboats</td>
            <td>Not present</td>
            <td>Spotted, built for the Grassrivers shallows</td>
          </tr>
          <tr>
            <td>Working boats</td>
            <td>A few (Tug, fishing trawler)</td>
            <td>Dive boats, shrimp boats, fishing fleet</td>
          </tr>
          <tr>
            <td>Water physics</td>
            <td>Basic wave model</td>
            <td>Upgraded RAGE water expected, details unconfirmed</td>
          </tr>
        </tbody>
      </table>

      <h2>Key Takeaways</h2>
      <ul>
        <li>Seven named boats are confirmed so far: Dinghy, Marquis, Seashark, Speeder, Squalo, Tropic and Reefer.</li>
        <li>New sightings include Everglades airboats, luxury yachts, dive boats, fishing trawlers and kayaks.</li>
        <li>The Leonida Keys and Grassrivers wetlands make watercraft essential transport, not toys.</li>
        <li>Expect docks and marinas to handle purchases and storage, following the franchise pattern; Rockstar has not confirmed the system yet.</li>
        <li>No official total watercraft count has been announced.</li>
      </ul>

      <h2>GTA 6 Watercraft: Frequently Asked Questions</h2>
      <div className={styles.faqSection}>
        <div className={styles.faqItem}>
          <span className={styles.faqQuestion}>How many boats are in GTA 6?</span>
          <p className={styles.faqAnswer}>
            Rockstar has not announced a number. Trailer analysis confirms seven named boats plus around a dozen unnamed watercraft types, from airboats to kayaks. The final roster is still unknown.
          </p>
        </div>
        <div className={styles.faqItem}>
          <span className={styles.faqQuestion}>What is the fastest boat in GTA 6 so far?</span>
          <p className={styles.faqAnswer}>
            There is no honest answer yet because Rockstar has shown no speed stats. By design, the offshore racing hulls (Cigarette and Skater styles) and the Pegassi Speeder look like the speed contenders. Wait for hands-on coverage before calling anything the fastest.
          </p>
        </div>
        <div className={styles.faqItem}>
          <span className={styles.faqQuestion}>Can you buy a yacht in GTA 6?</span>
          <p className={styles.faqAnswer}>
            Unconfirmed. The Dinka Marquis yacht is confirmed to exist in the world, and GTA Online let players buy yachts, but Rockstar has not confirmed purchases or marinas for GTA 6 yet.
          </p>
        </div>
        <div className={styles.faqItem}>
          <span className={styles.faqQuestion}>Where do you find a Seashark jet ski?</span>
          <p className={styles.faqAnswer}>
            The Seashark appears in beach and Keys scenes in the trailers. Following the franchise pattern, expect jet skis near beaches, docks and island shorelines. Exact spawn points are unconfirmed.
          </p>
        </div>
        <div className={styles.faqItem}>
          <span className={styles.faqQuestion}>Are there airboats in GTA 6?</span>
          <p className={styles.faqAnswer}>
            Yes, airboats have been spotted in trailer footage over wetland areas. They fit the Grassrivers region, where shallow water makes normal propellers useless. They are identified by design and not officially named yet.
          </p>
        </div>
        <div className={styles.faqItem}>
          <span className={styles.faqQuestion}>Can you customize boats in GTA 6?</span>
          <p className={styles.faqAnswer}>
            Unconfirmed. Cars get deep customization in GTA 6, but Rockstar has shown nothing about boat customization. We will update this answer when there is something official.
          </p>
        </div>
        <div className={styles.faqItem}>
          <span className={styles.faqQuestion}>Do boats have weapons in GTA 6?</span>
          <p className={styles.faqAnswer}>
            Nothing official. Past games mounted guns on a few military boats, but no armed watercraft has been confirmed for GTA 6 so far.
          </p>
        </div>
      </div>

      <h2>Where Does This Information Come From?</h2>
      <p>
        Last checked: October 8, 2026. The confirmed boat list comes from trailer analysis catalogued by the GTA Wiki community and GameRant's vehicle tracking. The new sightings (airboats, yachts, working boats) come from frame-by-frame trailer breakdowns. Anything about purchases, marinas or customization is informed expectation based on the franchise pattern, not confirmation. With <Link href="/news/gta-6-release-date/">GTA 6 releasing November 19, 2026</Link>, expect the watercraft list to grow as Rockstar shows more of Leonida's coastline.
      </p>

      <p>
        For the rest of the garage, see our <Link href="/vehicles/gta-6-cars/">GTA 6 cars</Link> and <Link href="/vehicles/gta-6-bikes/">GTA 6 bikes</Link> guides, or browse the full <Link href="/vehicles/">vehicles hub</Link>.
      </p>
    </>
  )
};
