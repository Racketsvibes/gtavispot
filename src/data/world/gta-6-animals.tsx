import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArticleData } from '../techContent'; // Reusing ArticleData interface
import styles from '../../app/news/[slug]/page.module.css';

export const gta6Animals: ArticleData = {
  title: 'GTA 6 Animals List: Confirmed Leonida Wildlife & Pets',
  metaDescription: 'Explore the complete GTA 6 Animals list. Discover confirmed Leonida wildlife, invasive species, and domestic pet breeds from the official trailers now.',
  focusKeyword: 'GTA 6 Animals',
  h1: 'GTA 6 Animals: Confirmed Leonida Wildlife & Pets',
  publishedDate: 'August 13, 2026',
  modifiedDate: 'August 13, 2026',
  author: 'Marcus Vance',
  featureImage: '/images/world/gta-6-animals-feature.webp',
  featureImageAlt: 'GTA 6 Animals feature showcasing a roseate spoonbill, Florida panther, and American alligator against a Vice City sunset',
  videoSchema: {
    name: 'GTA 6 Animals List - Confirmed Wildlife Spotted So Far',
    description: 'Check out every confirmed animal, bird, and marine creature spotted in the official Grand Theft Auto VI trailers and promotional screenshots.',
    thumbnailUrl: ['https://img.youtube.com/vi/JApbyMeOcFI/maxresdefault.jpg'],
    uploadDate: '2024-05-15',
    duration: 'PT2M15S',
    contentUrl: 'https://www.youtube.com/watch?v=JApbyMeOcFI',
    embedUrl: 'https://www.youtube.com/embed/JApbyMeOcFI'
  },
  content: (
    <>
      <p>
        Grand Theft Auto VI is set to feature a rich, living sandbox populated by a massive variety of <strong>gta 6 animals</strong>, bringing the fictional state of Leonida to life like never before. From urban areas overrun by invasive reptiles to the deep wetlands of the <Link href="/map/grassrivers/">Grassrivers Everglades guide</Link>, the wildlife ecosystem builds directly upon the groundbreaking animal AI systems introduced in Red Dead Redemption 2.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Guide: GTA 6 Wildlife Facts</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Total Confirmed Species:</strong> Over 25+ distinct animal species identified across official media.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Ecosystem Mechanics:</strong> Highly interactive wildlife behavior, poacher camps, and domestic pet interactions.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Invasive Focus:</strong> Key campaign elements center around invasive species like green iguanas and Burmese pythons.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Authentic Source:</strong> Community database updates on the <a href="https://gta6bible.com/gta-6-animals-list-every-animal-spotted-so-far/" target="_blank" rel="noopener noreferrer">GTA 6 Bible Animals List</a> confirm extensive biodiversity.</span>
          </li>
        </ul>
      </div>

      <p>
        Rockstar Games has designed Leonida to feel like a living, breathing representation of modern Florida, where wildlife conflicts are a daily reality. This design extends beyond cosmetic background details, integrating animals directly into missions, urban random events, and open-world activities.
      </p>

      <h2>GTA 6 Animals: Confirmed Wildlife List</h2>
      <p>
        Official trailers and screenshots have confirmed an extensive list of terrestrial, avian, and aquatic fauna. According to real-world data from the Florida Fish and Wildlife Conservation Commission (FWC), Florida is home to over 700 land vertebrates and thousands of marine species. Rockstar has mirrored this massive biodiversity in the game, creating a highly detailed food chain where predators hunt prey and species react dynamically to your presence.
      </p>

      <p>
        Below, we break down every confirmed category of <strong>gta 6 animals</strong> spotted in official media so far.
      </p>

      <h2>Land Mammals, Predators, and Domestic Pets</h2>
      <p>
        The terrestrial wildlife in Leonida ranges from small suburban critters to apex predators stalking the forests of the <Link href="/map/mount-kalaga/">Mount Kalaga Peak guide</Link>. Rockstar's advanced AI engine ensures that these animals display realistic behaviors—bobcats slip away when startled, deer run in herds, and domestic pets interact directly with their owners in urban spaces.
      </p>

      <h3>Florida Panther & Cougar</h3>
      <p>
        Florida panthers represent one of the most critical apex predators in the southern Leonida wilderness. They can be seen prowling through dense pine flatwoods and cypress swamps, hunting white-tailed deer and keeping players on alert during nighttime exploration.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/world/gta-6-cougar-wilderness.webp"
          alt="A Florida panther stalking through the undergrowth of Mount Kalaga National Park in GTA 6"
          width={1024}
          height={576}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Panthers and cougars stalk the remote wilderness areas of Leonida. (Image credit: Rockstar Games)
        </div>
      </div>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/world/gta-6-cougar-hunting.webp"
          alt="A cougar hunting white-tailed deer near the base of Mount Kalaga in GTA 6"
          width={1024}
          height={576}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Ecosystem AI shows cougars actively tracking prey in real-time. (Image credit: Rockstar Games)
        </div>
      </div>

      <h3>White-Tailed Deer & Bobcats</h3>
      <p>
        White-tailed deer are common throughout the northern regions of the map, serving as the primary prey for larger wild cats. Meanwhile, bobcats roam forest edges and scrublands, feeding on squirrels and rabbits while avoiding human contact.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/world/gta-6-white-tailed-deer.webp"
          alt="White-tailed deer grazing in a forest clearing in GTA 6"
          width={1024}
          height={576}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Deer populations are highly concentrated around forests and parklands. (Image credit: Rockstar Games)
        </div>
      </div>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/world/gta-6-bobcat-wildlife.webp"
          alt="A bobcat captured near a backcountry poacher bench in GTA 6"
          width={1024}
          height={576}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Bobcats are small but highly agile predators in the Leonida backcountry. (Image credit: Rockstar Games)
        </div>
      </div>

      <h3>Domestic Dogs & Cats</h3>
      <p>
        Leonida's cities are filled with domestic pets. Dog breeds like Dobermans, Rottweilers, German Shepherds, and Chihuahuas can be seen walking on leashes along Ocean Beach or roaming suburban yards. Feral cats also inhabit alleys, occasionally seen catching mice or cleaning themselves on top of ATMs.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/world/gta-6-doberman-dog.webp"
          alt="A Doberman dog sitting next to its owner in a Vice City suburb in GTA 6"
          width={1024}
          height={576}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Dobermans serve as guard dogs and pets in residential districts. (Image credit: Rockstar Games)
        </div>
      </div>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/world/gta-6-rottweiler-dog.webp"
          alt="A Rottweiler walking off-leash in an urban park in GTA 6"
          width={1024}
          height={576}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Detailed dog breeds return to populate city parks and beaches. (Image credit: Rockstar Games)
        </div>
      </div>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/world/gta-6-domestic-cat.webp"
          alt="A stray domestic cat sitting outside a convenience store in GTA 6"
          width={1024}
          height={576}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Stray cats react to garbage bins, NPCs, and urban traffic. (Image credit: Rockstar Games)
        </div>
      </div>

      <h3>Urban Scavengers: Raccoons, Squirrels & Foxes</h3>
      <p>
        In residential neighborhoods, small mammals have adapted to city life. Raccoons can be spotted at night tipping over trash cans in alleys, while grey squirrels scatter up oak trees in public plazas, and red foxes dart across suburban streets in search of small prey.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/world/gta-6-raccoons-trash.webp"
          alt="A raccoon searching for food next to a dumpster in a Vice City alley in GTA 6"
          width={1024}
          height={576}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Raccoons scavenge trash piles behind commercial venues at night. (Image credit: Rockstar Games)
        </div>
      </div>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/world/gta-6-squirrel-park.webp"
          alt="A squirrel perched on a tree branch in a public park in GTA 6"
          width={1024}
          height={576}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Squirrels add small-scale life to urban parks and forest paths. (Image credit: Rockstar Games)
        </div>
      </div>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/world/gta-6-red-fox.webp"
          alt="A red fox trotting along a country road at dusk in GTA 6"
          width={1024}
          height={576}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Foxes occupy the suburban and rural fringes of Leonida. (Image credit: Rockstar Games)
        </div>
      </div>

      <h2>Reptiles and Invasive Floridian Species</h2>
      <p>
        Leonida's swampy climate is a paradise for cold-blooded reptiles. In real-world Florida, invasive reptiles cause significant ecological disruptions. FWC records note over **30,000 green iguanas** in the Florida Keys alone, and Rockstar has captured this ecological battle by introducing invasive wrangling mechanics and random alligator encounters in commercial buildings.
      </p>

      <h3>American Alligator</h3>
      <p>
        American alligators are the ultimate symbol of the Leonida wetlands. With an estimated **1.3 million wild alligators** living in the real-world state of Florida, players will find them everywhere: floating silently in swamp waters, basking on muddy banks, and even wandering into suburban swimming pools and convenience stores.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/world/gta-6-alligator-animal-control.webp"
          alt="Animal control officers capturing a large alligator in a suburban swimming pool in GTA 6"
          width={1024}
          height={576}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Alligators wander into populated zones, triggering animal control responses. (Image credit: Rockstar Games)
        </div>
      </div>

      <h3>Invasive Iguanas & Pythons</h3>
      <p>
        Green iguanas sun themselves on rooftops and garden walls in tropical urban areas, occasionally dropping from trees during cold snaps. Burmese pythons inhabit the deep swamplands, wrapping around poachers or swimming silently through shallow waterways.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/world/gta-6-iguana-invasive.webp"
          alt="A green iguana resting on a stone wall in the Leonida Keys in GTA 6"
          width={1024}
          height={576}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Invasive green iguanas populate urban gardens and brick walls. (Image credit: Rockstar Games)
        </div>
      </div>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/world/gta-6-python-pet-snake.webp"
          alt="A poacher handling a massive Burmese python in the Leonida swamplands in GTA 6"
          width={1024}
          height={576}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Large pythons can be found in swamps or handled by backcountry residents. (Image credit: Rockstar Games)
        </div>
      </div>

      <h2>Leonida's Avian Ecosystem: Birds of the Skies</h2>
      <p>
        The skies and wetlands of Leonida are dominated by a massive variety of bird species. Large flocks of pink roseate spoonbills, flamingos, and whooping cranes fly overhead in formation, while brown pelicans dive-bomb for fish near coastal bridges, and seagulls crowd beachside boardwalks trying to steal food from NPCs.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/world/gta-6-roseate-spoonbill.webp"
          alt="A roseate spoonbill displaying its bright pink feathers in the Leonida wetlands in GTA 6"
          width={1024}
          height={576}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Roseate spoonbills gather in large flocks in marshy areas. (Image credit: Rockstar Games)
        </div>
      </div>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/world/gta-6-whooping-crane.webp"
          alt="Whooping cranes flying over the Grassrivers marshes in GTA 6"
          width={1024}
          height={576}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Flocks of cranes react to boats and low-flying aircraft. (Image credit: Rockstar Games)
        </div>
      </div>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/world/gta-6-heron-bird.webp"
          alt="A blue heron standing in shallow water waiting for fish in GTA 6"
          width={1024}
          height={576}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Herons stand motionless in shallow waters hunting small fish. (Image credit: Rockstar Games)
        </div>
      </div>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/world/gta-6-seagull-coastal.webp"
          alt="A seagull perched on a wooden post near Ocean Beach in GTA 6"
          width={1024}
          height={576}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Seagulls gather in coastal ports and boardwalks. (Image credit: Rockstar Games)
        </div>
      </div>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/world/gta-6-seagulls-beach.webp"
          alt="Two seagulls walking on the sand at Vice Beach in GTA 6"
          width={1024}
          height={576}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Beachside birds will scavenge food discarded by beachgoers. (Image credit: Rockstar Games)
        </div>
      </div>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/world/gta-6-ducks-leonida.webp"
          alt="A pair of wild ducks resting near a pond in a suburban area in GTA 6"
          width={1024}
          height={576}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Ducks populate both swamp ponds and residential golf courses. (Image credit: Rockstar Games)
        </div>
      </div>

      <h2>Deep Ocean and Marine Habitats</h2>
      <p>
        The waters surrounding the <Link href="/map/leonida-keys/">Leonida Keys islands guide</Link> are home to an advanced underwater simulation. Scuba diving reveals tiger sharks circling shipwrecks, stingrays gliding over sandy bottoms, sea turtles swimming through coral reefs, and gentle West Indian manatees grazing in warm coastal estuaries.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/world/gta-6-leonida-keys-manatee.webp"
          alt="A West Indian manatee swimming alongside boaters in the shallow Leonida Keys waters in GTA 6"
          width={1024}
          height={576}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Gentle manatees navigate the shallow warm waters of the Keys. (Image credit: Rockstar Games)
        </div>
      </div>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/world/gta-6-sea-turtle.webp"
          alt="A green sea turtle swimming over a coral reef in GTA 6"
          width={1024}
          height={576}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Sea turtles populate deep-sea reefs and shallow sandy shores. (Image credit: Rockstar Games)
        </div>
      </div>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/world/gta-6-tiger-shark.webp"
          alt="A tiger shark swimming in deep ocean waters off the coast of Vice City in GTA 6"
          width={1024}
          height={576}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Tiger sharks patrol deep waters, posing a threat to swimmers. (Image credit: Rockstar Games)
        </div>
      </div>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/world/gta-6-eel-marine-life.webp"
          alt="A moray eel hidden inside a coral crevice in GTA 6"
          width={1024}
          height={576}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          Eels hide inside coral caves, waiting to strike at small prey. (Image credit: Rockstar Games)
        </div>
      </div>

      <h2>Confirmed Wildlife Video Breakdown</h2>
      <p>
        To see these creatures in action, watch our detailed video analysis highlighting the realistic animal animations, flocking behaviors, and swamp habitats captured in the game's footage:
      </p>

      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', margin: '24px 0', borderRadius: '8px', border: '1px solid var(--border)' }}>
        <iframe 
          src="https://www.youtube.com/embed/JApbyMeOcFI"
          title="GTA 6 Animals List - Confirmed Wildlife Video Breakdown"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <h2>Is There a Hunting and Fishing System in GTA 6?</h2>
      <p>
        While GTA 5 featured basic hunting missions with Trevor, fans expect GTA 6 to integrate a much deeper system. GTA 6's engine draws heavily from Red Dead Redemption 2's wildlife framework. Players have spotted poacher camps, animal skinning tables, and poacher benches in rural areas. This suggests that hunting, poacher bounties, and legendary beast challenges will form a significant part of open-world activities.
      </p>
      <p>
        Take-Two Interactive's franchise history shows a commitment to deep, organic world-building. With the GTA franchise generating over **$10 billion in revenue** and selling **475 million copies** overall, Rockstar has the budget to deliver a highly interactive ecosystem. Hunting is expected to tie into local trade networks, cooking recipes, and custom clothing unlocks.
      </p>

      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Will GTA 6 have a hunting system like RDR2?</h3>
          <p className={styles.faqAnswer}>
            Yes, GTA 6 is expected to feature a detailed hunting and fishing system based on RDR2's mechanics. Swampland screenshots show poacher benches, skinning boards, and poacher camps, suggesting that players can track, harvest, and sell wildlife resources.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Can you own or interact with pets in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Official trailers show multiple domestic dog breeds on leashes and stray cats in store environments. While it is unconfirmed if players can purchase pets, you can interact with dogs on the street, and custom safehouses may allow pet ownership.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>What is the most dangerous animal in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Apex predators like the American Alligator, the Florida Panther, and Tiger Sharks are the most dangerous. Alligators inhabit swamplands and golf courses, panthers stalk forests, and tiger sharks patrol deep-sea diving zones.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Are there legendary animals in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            While Rockstar has not officially confirmed legendary animals, community poacher logs and swamp missions suggest unique beast hunts will reward players with exclusive clothing materials and weapon skins.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Which dog breeds are confirmed in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            German Shepherds, Rottweilers, Dobermans, Chihuahuas, and Miniature Pinschers have all been spotted walking on Ocean Beach or guarding residential properties in trailers.
          </p>
        </div>
      </section>

      <p>
        Whether you are wrangling pythons in the swamplands or scuba diving in deep reefs, the rich variety of <strong>gta 6 animals</strong> ensures that Leonida's wilderness will be just as chaotic, dangerous, and rewarding as its neon city streets.
      </p>
    </>
  )
};
