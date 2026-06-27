import Link from 'next/link';
import Image from 'next/image';
import Countdown from '@/components/Countdown';
import YoutubePlayer from '@/components/YoutubePlayer';
import FAQAccordion from '@/components/FAQAccordion';
import HeroWatchTrailer from '@/components/HeroWatchTrailer';
import NewsletterForm from '@/components/NewsletterForm';
import {
  getWebSiteSchema,
  getOrganizationSchema,
  getFAQSchema,
  getBreadcrumbsSchema
} from '@/lib/schema';
import styles from './page.module.css';

/* ── Static Data ── */
const latestNews = [
  {
    title: 'GTA 6 Pre-Order Guide: Editions & Bonuses Live',
    desc: 'Compare Standard and Ultimate editions, explore pre-order bonuses, and lock in the Vintage Vice City Pack.',
    date: 'June 25, 2026',
    tag: 'PRE-ORDER',
    href: '/news/gta-6-pre-order/',
    img: '/ultimate edition and Bounses/GTA 6 Ultimate Edition.webp',
  },
  {
    title: 'GTA VI Official Trailer Breaks Internet Records',
    desc: 'The official reveal trailer becomes the most viewed video in 24 hours on YouTube.',
    date: 'May 15, 2024',
    tag: 'NEWS',
    href: '/news/gta-6-trailer-3/',
    img: '/images/Cluster_1/GTA_Vi_Trailer_3.webp',
  },
  {
    title: 'Welcome to Vice City',
    desc: 'A modern take on the iconic city with stunning visuals and incredible detail.',
    date: 'May 10, 2024',
    tag: 'NEWS',
    href: '/map/vice-city/',
    img: '/images/GTAVI_Screenshots/Places/Vice_City/Vice_City_01.webp',
  },
];

const mainCharacters = [
  {
    name: 'Jason',
    desc: 'A former soldier trying to leave his past behind.',
    href: '/story/jason/',
    img: '/images/GTAVI_Screenshots/People/Jason_Duval/Jason_Duval_01.webp',
  },
  {
    name: 'Lucia',
    desc: 'A street-smart fighter with big dreams and a fearless attitude.',
    href: '/story/lucia/',
    img: '/images/GTAVI_Screenshots/People/Lucia_Caminos/Lucia_Caminos_03.webp',
  },
];

const gameplayFeatures = [
  { title: 'Living World', desc: 'A dynamic world with changing weather, events, and a vibrant economy.', icon: '🌐' },
  { title: 'Stunning Graphics', desc: 'Built for next-gen consoles with breathtaking realism and detail.', icon: '🖥️' },
  { title: 'Engaging Story', desc: 'An intense crime saga with two protagonists and a deep narrative.', icon: '🎬' },
  { title: 'Online Experience', desc: 'An evolving online world with new ways to play and connect.', icon: '📡' },
];

const latestGuides = [
  {
    title: 'GTA VI Beginner Guide',
    desc: 'Everything new players need to know.',
    href: '/story/walkthrough/',
    img: '/images/GTA_6_Fight.webp',
  },
  {
    title: 'How to Make Money Fast',
    desc: 'Best ways to earn money in GTA VI.',
    href: '/story/missions/',
    img: '/images/GTA_6_Shop_view.webp',
  },
  {
    title: 'Best Vehicles in GTA VI',
    desc: 'Top cars, bikes, boats & where to find them.',
    href: '/vehicles/',
    img: '/images/GTA_6_Vehicles.webp',
  },
];

const faqs = [
  {
    q: 'When is the GTA VI release date?',
    a: 'Grand Theft Auto VI is officially scheduled to release in Fall 2025. Rockstar Games confirmed this window in recent parent company financial reports.',
  },
  {
    q: 'What platforms will GTA VI be on?',
    a: 'GTA VI will launch on PlayStation 5 and Xbox Series X|S. A PC release has not been dated yet but is expected to follow later, consistent with Rockstar\'s previous release patterns.',
  },
  {
    q: 'Will GTA VI have a multiplayer mode?',
    a: 'Yes, a next-generation multiplayer experience (likely the next evolution of GTA Online) is in development. It will launch alongside or shortly after the single-player campaign.',
  },
  {
    q: 'Where is GTA VI set?',
    a: 'GTA VI is set in the fictional state of Leonida, modeled after Florida. The game will center around the neon-drenched metropolis of Vice City and expand into surrounding bays, keys, and marshlands.',
  },
  {
    q: 'How much will GTA VI cost?',
    a: 'GTA 6 Standard Edition is officially priced at $79.99, while the Ultimate Edition is available for $99.99. Both packages are live for pre-order on official digital storefronts.',
  },

];

/* ── Page Component ── */
export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* Search & Brand Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebSiteSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
      />
      
      {/* Breadcrumbs Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbsSchema([
              { name: 'Home', url: 'https://gtavispot.com' }
            ])
          )
        }}
      />

      {/* FAQ Schema */}
      {(() => {
        const homeFaqs = faqs.map(f => ({ question: f.q, answer: f.a }));
        const faqSchema = getFAQSchema(homeFaqs);
        return faqSchema ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        ) : null;
      })()}

      {/* VideoObject Schema for SEO indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Grand Theft Auto VI Trailer 1",
            "description": "Watch the official reveal trailer for Grand Theft Auto VI, heading to the neon-soaked streets of Vice City and beyond.",
            "thumbnailUrl": [
              "https://img.youtube.com/vi/QdBZY2fkU-0/maxresdefault.jpg",
              "https://img.youtube.com/vi/QdBZY2fkU-0/sddefault.jpg",
              "https://img.youtube.com/vi/QdBZY2fkU-0/hqdefault.jpg"
            ],
            "uploadDate": "2023-12-05T00:10:00Z",
            "duration": "PT1M31S",
            "embedUrl": "https://www.youtube.com/embed/QdBZY2fkU-0",
            "interactionCount": "210000000",
            "publisher": {
              "@type": "Organization",
              "name": "Rockstar Games",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.rockstargames.com/favicon.ico"
              }
            }
          })
        }}
      />


      {/* ════════════════════════════════════════
          HERO SECTION
          ════════════════════════════════════════ */}
      <section className={styles.hero}>
        <Image
          src="/images/desktop.webp"
          alt="GTA 6 Vice City background artwork"
          fill
          priority
          sizes="100vw"
          quality={85}
          className={styles.heroBg}
        />
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <span className={styles.heroSubtitle}>Rockstar Games Presents</span>
            <h1 className={styles.heroTitle}>
              Grand Theft<br />Auto <span className="text-gradient">VI</span>
            </h1>
            <span className={styles.heroWelcome}>Welcome to Vice City</span>
            <p className={styles.heroDesc}>
              Grand Theft Auto VI heads to the neon-soaked streets of
              Vice City and beyond in the biggest evolution of the
              open-world series yet.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/news/gta-6-pre-order/" className={styles.ctaPreOrder}>
                Pre-Order Now
              </Link>
              <Link href="/news/" className={styles.ctaPrimary}>
                Explore GTA VI
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <HeroWatchTrailer />
            </div>
            <div className={styles.heroWishlist}>
              <div className={styles.staticPlatformBadge}>
                <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M15.858 11.451c-.313.395-1.079.676-1.079.676l-5.696 2.046v-1.509l4.192-1.493c.476-.17.549-.412.162-.538-.386-.127-1.085-.09-1.56.08l-2.794.984v-1.566l.161-.054s.807-.286 1.942-.412c1.135-.125 2.525.017 3.616.43 1.23.39 1.368.962 1.056 1.356M9.625 8.883v-3.86c0-.453-.083-.87-.508-.988-.326-.105-.528.198-.528.65v9.664l-2.606-.827V2c1.108.206 2.722.692 3.59.985 2.207.757 2.955 1.7 2.955 3.825 0 2.071-1.278 2.856-2.903 2.072Zm-8.424 3.625C-.061 12.15-.271 11.41.304 10.984c.532-.394 1.436-.69 1.436-.69l3.737-1.33v1.515l-2.69.963c-.474.17-.547.411-.161.538.386.126 1.085.09 1.56-.08l1.29-.469v1.356l-.257.043a8.45 8.45 0 0 1-4.018-.323Z"/>
                </svg>
                PS5
              </div>
              <div className={styles.staticPlatformBadge}>
                <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M7.202 15.967a8 8 0 0 1-3.552-1.26c-.898-.585-1.101-.826-1.101-1.306 0-.965 1.062-2.656 2.879-4.583C6.459 7.723 7.897 6.44 8.052 6.475c.302.068 2.718 2.423 3.622 3.531 1.43 1.753 2.088 3.189 1.754 3.829-.254.486-1.83 1.437-2.987 1.802-.954.301-2.207.429-3.239.33m-5.866-3.57C.589 11.253.212 10.127.03 8.497c-.06-.539-.038-.846.137-1.95.218-1.377 1.002-2.97 1.945-3.95.401-.417.437-.427.926-.263.595.2 1.23.638 2.213 1.528l.574.519-.313.385C4.056 6.553 2.52 9.086 1.94 10.653c-.315.852-.442 1.707-.306 2.063.091.24.007.15-.3-.319Zm13.101.195c.074-.36-.019-1.02-.238-1.687-.473-1.443-2.055-4.128-3.508-5.953l-.457-.575.494-.454c.646-.593 1.095-.948 1.58-1.25.381-.237.927-.448 1.161-.448.145 0 .654.528 1.065 1.104a8.4 8.4 0 0 1 1.343 3.102c.153.728.166 2.286.024 3.012a9.5 9.5 0 0 1-.6 1.893c-.179.393-.624 1.156-.82 1.404-.1.128-.1.127-.043-.148ZM7.335 1.952c-.67-.34-1.704-.705-2.276-.803a4 4 0 0 0-.759-.043c-.471.024-.45 0 .306-.358A7.8 7.8 0 0 1 6.47.128c.8-.169 2.306-.17 3.094-.005.85.18 1.853.552 2.418.9l.168.103-.385-.02c-.766-.038-1.88.27-3.078.853-.361.176-.676.316-.699.312a12 12 0 0 1-.654-.319Z"/>
                </svg>
                Xbox Series X|S
              </div>
            </div>

          </div>
          <Countdown />
        </div>
      </section>

      {/* ════════════════════════════════════════
          LATEST TRAILER & NEWS
          ════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.trailerNewsGrid}>
            {/* Left — Trailer */}
            <div className={styles.trailerColumn}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Latest Trailer</h2>
              </div>
              <div className={styles.trailerCard}>
                <YoutubePlayer
                  videoId="QdBZY2fkU-0"
                  thumbnailUrl="/images/Cluster_1/GTA_Vi_Trailer_3.webp"
                  title="Grand Theft Auto VI Trailer 1"
                />
                <div className={styles.trailerContent}>
                  <h3 className={styles.trailerTitle}>Grand Theft Auto VI Trailer 1</h3>
                  <p className={styles.trailerDesc}>Watch the official reveal trailer.</p>
                </div>
              </div>
            </div>

            {/* Right — News Grid */}
            <div>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Latest News</h2>
                <Link href="/news/" className={styles.viewAll}>View All News →</Link>
              </div>
              <div className={styles.newsGrid}>
                {latestNews.map((news) => (
                  <Link href={news.href} key={news.title} className={styles.newsCard}>
                    <div className={styles.newsImgWrap}>
                      <Image src={news.img} alt={news.title} fill sizes="(max-width: 768px) 100vw, 25vw" />
                    </div>
                    <div className={styles.newsBody}>
                      <div className={styles.newsMeta}>
                        <span className={styles.newsTag}>{news.tag}</span>
                        <span className={styles.newsDate}>{news.date}</span>
                      </div>
                      <h3 className={styles.newsTitle}>{news.title}</h3>
                      <p className={styles.newsDesc}>{news.desc}</p>
                      <span className={styles.readMore}>Read More →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          MEET THE MAIN CHARACTERS
          ════════════════════════════════════════ */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Meet the Main Characters</h2>
            <Link href="/story/" className={styles.viewAll}>View All →</Link>
          </div>
          <div className={styles.charactersGrid}>
            {mainCharacters.map((char) => (
              <div key={char.name} className={styles.characterCard}>
                <div className={styles.characterImgWrap}>
                  <Image src={char.img} alt={char.name} fill sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className={styles.characterBody}>
                  <h3 className={styles.characterName}>{char.name}</h3>
                  <p className={styles.characterDesc}>{char.desc}</p>
                  <Link href={char.href} className={styles.readMore}>View Profile →</Link>
                </div>
              </div>
            ))}
            {/* More Characters Card */}
            <div className={styles.characterCard}>
              <div className={styles.characterImgWrap}>
                <Image src="/images/GTAVI_Artwork_images/Jason_and_Lucia_02/Jason_and_Lucia_02_landscape.webp" alt="More Characters" fill sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className={styles.characterBody}>
                <h3 className={styles.characterName}>More Characters</h3>
                <p className={styles.characterDesc}>Discover supporting characters.</p>
                <Link href="/story/" className={styles.readMore}>View All →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          QUICK LINKS BAR
          ════════════════════════════════════════ */}
      <section className={styles.quickLinksBar}>
        <div className="container">
          <div className={styles.quickLinksGrid}>
            <Link href="/map/" className={styles.quickLinkItem}>
              <div className={styles.quickLinkIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" /><line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" /></svg>
              </div>
              <div className={styles.quickLinkText}>
                <span className={styles.quickLinkTitle}>Explore Map</span>
                <span className={styles.quickLinkDesc}>Discover Vice City and beyond</span>
              </div>
            </Link>
            <Link href="/vehicles/" className={styles.quickLinkItem}>
              <div className={styles.quickLinkIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17h14v-5l-2-5H7l-2 5v5z" /><circle cx="7.5" cy="17.5" r="1.5" /><circle cx="16.5" cy="17.5" r="1.5" /></svg>
              </div>
              <div className={styles.quickLinkText}>
                <span className={styles.quickLinkTitle}>Browse Vehicles</span>
                <span className={styles.quickLinkDesc}>Cars, bikes, boats and aircraft</span>
              </div>
            </Link>
            <Link href="/weapons/" className={styles.quickLinkItem}>
              <div className={styles.quickLinkIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h6l4-8v16l4-8h6" /></svg>
              </div>
              <div className={styles.quickLinkText}>
                <span className={styles.quickLinkTitle}>See Weapons</span>
                <span className={styles.quickLinkDesc}>Full arsenal of weapons</span>
              </div>
            </Link>
            <Link href="/news/" className={styles.quickLinkItem}>
              <div className={styles.quickLinkIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" /><line x1="6" y1="8" x2="18" y2="8" /><line x1="6" y1="12" x2="14" y2="12" /><line x1="6" y1="16" x2="10" y2="16" /></svg>
              </div>
              <div className={styles.quickLinkText}>
                <span className={styles.quickLinkTitle}>Latest News</span>
                <span className={styles.quickLinkDesc}>Updates, announcements and more</span>
              </div>
            </Link>
            <Link href="/guides/" className={styles.quickLinkItem}>
              <div className={styles.quickLinkIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>
              </div>
              <div className={styles.quickLinkText}>
                <span className={styles.quickLinkTitle}>Game Guides</span>
                <span className={styles.quickLinkDesc}>Tips, tricks and walkthroughs</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          VICE CITY MAP & VEHICLES
          ════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.mapVehiclesGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureImgWrap}>
                <Image src="/images/GTA_6_MAp.webp" alt="Vice City Map" fill sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className={styles.featureBody}>
                <h2 className={styles.featureTitle}>Vice City Map</h2>
                <p className={styles.featureDesc}>
                  Explore a massive open world featuring Vice City, surrounding
                  beaches, swamps, and more.
                </p>
                <Link href="/map/" className={styles.ctaPrimary}>Explore Map →</Link>
              </div>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureImgWrap}>
                <Image src="/images/GTA_6_Vehicles.webp" alt="Vehicles" fill sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className={styles.featureBody}>
                <h2 className={styles.featureTitle}>Vehicles</h2>
                <p className={styles.featureDesc}>
                  From high-performance supercars to boats and
                  helicopters, the choices are endless.
                </p>
                <Link href="/vehicles/" className={styles.ctaPrimary}>Browse Vehicles →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          NEXT-LEVEL GAMEPLAY
          ════════════════════════════════════════ */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Next-Level Gameplay</h2>
          </div>
          <div className={styles.gameplayGrid}>
            {gameplayFeatures.map((feat) => (
              <div key={feat.title} className={styles.gameplayItem}>
                <div className={styles.gameplayIcon}>{feat.icon}</div>
                <div className={styles.gameplayText}>
                  <h3 className={styles.gameplayTitle}>{feat.title}</h3>
                  <p className={styles.gameplayDesc}>{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          LATEST GUIDES & FAQ
          ════════════════════════════════════════ */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.guidesFaqGrid}>
            {/* Left — Guides */}
            <div>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Latest Guides</h2>
                <Link href="/guides/" className={styles.viewAll}>View All Guides →</Link>
              </div>
              <div className={styles.guidesGrid}>
                {latestGuides.map((guide) => (
                  <Link href={guide.href} key={guide.title} className={styles.guideCard}>
                    <div className={styles.guideImgWrap}>
                      <Image src={guide.img} alt={guide.title} fill sizes="(max-width: 768px) 100vw, 20vw" />
                    </div>
                    <div className={styles.guideBody}>
                      <h3 className={styles.guideTitle}>{guide.title}</h3>
                      <p className={styles.guideDesc}>{guide.desc}</p>
                      <span className={styles.readMore}>Read More →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right — FAQ */}
            <div>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>FAQ</h2>
                <Link href="/faq/" className={styles.viewAll}>View All FAQ →</Link>
              </div>
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          NEWSLETTER / STAY UPDATED
          ════════════════════════════════════════ */}
      <section className={styles.newsletterSection}>
        <div className={`container ${styles.newsletterInner}`}>
          <div className={styles.newsletterLeft}>
            <div className={styles.newsletterIcon}>🌴</div>
            <div className={styles.newsletterText}>
              <h2 className={styles.newsletterTitle}>Stay Updated</h2>
              <p className={styles.newsletterDesc}>Subscribe to our newsletter for the latest GTA VI news, trailers, and exclusive updates.</p>
            </div>
          </div>
          <NewsletterForm />
        </div>
      </section>

    </div>
  );
}
