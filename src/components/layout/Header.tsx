'use client';

import Image from 'next/image';
import logoImg from '../../../public/logo.png';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';

const USFlag = () => (
  <svg width="16" height="12" viewBox="0 0 741 390" style={{ borderRadius: '2px', border: '1px solid rgba(0,0,0,0.15)', display: 'inline-block', flexShrink: 0 }}>
    <rect width="741" height="390" fill="#B22234" />
    <path d="M0,30H741M0,90H741M0,150H741M0,210H741M0,270H741M0,330H741" stroke="#FFFFFF" strokeWidth="30" />
    <rect width="296" height="210" fill="#3C3B6E" />
    <g fill="#FFFFFF">
      <circle cx="30" cy="25" r="8" />
      <circle cx="90" cy="25" r="8" />
      <circle cx="150" cy="25" r="8" />
      <circle cx="210" cy="25" r="8" />
      <circle cx="270" cy="25" r="8" />
      <circle cx="60" cy="65" r="8" />
      <circle cx="120" cy="65" r="8" />
      <circle cx="180" cy="65" r="8" />
      <circle cx="240" cy="65" r="8" />
      <circle cx="30" cy="105" r="8" />
      <circle cx="90" cy="105" r="8" />
      <circle cx="150" cy="105" r="8" />
      <circle cx="210" cy="105" r="8" />
      <circle cx="270" cy="105" r="8" />
      <circle cx="60" cy="145" r="8" />
      <circle cx="120" cy="145" r="8" />
      <circle cx="180" cy="145" r="8" />
      <circle cx="240" cy="145" r="8" />
      <circle cx="30" cy="185" r="8" />
      <circle cx="90" cy="185" r="8" />
      <circle cx="150" cy="185" r="8" />
      <circle cx="210" cy="185" r="8" />
      <circle cx="270" cy="185" r="8" />
    </g>
  </svg>
);

const ESFlag = () => (
  <svg width="16" height="12" viewBox="0 0 750 500" style={{ borderRadius: '2px', border: '1px solid rgba(0,0,0,0.15)', display: 'inline-block', flexShrink: 0 }}>
    <rect width="750" height="500" fill="#C1272D" />
    <rect y="125" width="750" height="250" fill="#FEC60B" />
    <rect x="180" y="190" width="60" height="80" fill="#C1272D" rx="10" />
    <circle cx="210" cy="230" r="15" fill="#3B5998" />
    <circle cx="210" cy="175" r="10" fill="#FEC60B" />
  </svg>
);


const newsSubNav = [
  { label: 'All News & Updates', href: '/news/' },
  { label: 'Netflix Extended Preview', href: '/news/gta-6-extended-look/' },
  { label: 'Release Date Confirmed', href: '/news/gta-6-release-date/' },
  { label: 'Delay History Analysis', href: '/news/gta-6-delay/' },
  { label: 'Trailer 3 Breakdown', href: '/news/gta-6-trailer-3/' },
  { label: 'Leaks Tracker', href: '/news/gta-6-leaks/' },
  { label: 'Price & Editions', href: '/news/gta-6-price/' },
  { label: 'Pre-Order Guide', href: '/news/gta-6-pre-order/' },
  { label: 'Gameplay Features', href: '/news/gta-6-new-features/' },
  { label: 'November Launch Guide', href: '/news/gta-6-november-release/' },
  { label: 'PC Release Window', href: '/news/gta-6-pc-release-date/' },
  { label: 'Cover Art Breakdown', href: '/news/gta-6-cover-art/' },
  { label: 'Developer Updates', href: '/news/rockstar-news/' },
];

const mapSubNav = [
  { label: 'Interactive Map Hub', href: '/map/' },
  { label: 'Vice City Districts', href: '/map/vice-city/' },
  { label: 'Leonida Keys Islands', href: '/map/leonida-keys/' },
  { label: 'Grassrivers Everglades', href: '/map/grassrivers/' },
  { label: 'Port Gellhorn Guide', href: '/map/port-gellhorn/' },
  { label: 'Ambrosia Refinery', href: '/map/ambrosia/' },
  { label: 'Mount Kalaga Peak', href: '/map/mount-kalaga/' },
  { label: 'Ocean Beach Strip', href: '/map/ocean-beach/' },
  { label: 'Map Size Comparison', href: '/map/size/' },
  { label: '700+ Interiors List', href: '/map/interiors/' },
  { label: 'Secret Locations Map', href: '/map/secret-locations/' },
  { label: 'Easter Eggs Tracker', href: '/map/easter-eggs/' },
  { label: 'Underwater Secrets', href: '/map/underwater/' },
];

const storySubNav = [
  { label: 'Story & Plot Overview', href: '/story/' },
  { label: 'Lucia Character Guide', href: '/story/lucia/' },
  { label: 'Jason Character Guide', href: '/story/jason/' },
  { label: 'Lucia\'s Backstory', href: '/story/lucia-backstory/' },
  { label: 'Jason & Lucia Dynamic', href: '/story/jason-and-lucia/' },
  { label: 'Dual Protagonists System', href: '/story/dual-protagonists/' },
  { label: 'Voice Actors', href: '/story/voice-actors/' },
  { label: 'Main Missions', href: '/story/missions/' },
  { label: 'Side Missions', href: '/story/side-missions/' },
  { label: 'Story Walkthrough', href: '/story/walkthrough/' },
  { label: 'How Long to Beat', href: '/story/how-long-to-beat/' },
  { label: 'Ending Explained', href: '/story/ending/' },
];

const vehiclesSubNav = [
  { label: 'Vehicles Hub', href: '/vehicles/' },
  { label: 'GTA 6 Cars & Real Models', href: '/vehicles/gta-6-cars/' },
  { label: 'GTA 6 Bikes & Motorcycles', href: '/vehicles/gta-6-bikes/' },
];

const primaryNav = [
  { label: 'Release Date', href: '/news/gta-6-release-date/' },
  { label: 'Characters', href: '/story/gta-6-characters/' },
  { label: 'Cheats', href: '/cheats/' },
  { label: 'GTA 6 Gameplay', href: '/gta-6-gameplay/' },
];

const moreNav = [
  { label: 'Guides', href: '/guides/' },
  { label: 'Online', href: '/online/' },
  { label: 'Tech & Platform', href: '/tech/' },
  { label: 'Trophies', href: '/trophies/' },
  { label: 'Mods', href: '/mods/' },
  { label: 'Comparisons', href: '/compare/' },
  { label: 'World & Activities', href: '/world/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Weapons', href: '/weapons/' },
];

const policiesNav = [
  { label: 'About Us', href: '/about/' },
  { label: 'Contact Us', href: '/contact/' },
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Terms of Service', href: '/terms-of-service/' },
  { label: 'Cookie Policy', href: '/cookie-policy/' },
  { label: 'Disclaimer', href: '/disclaimer/' },
  { label: 'DMCA Policy', href: '/dmca/' },
];

export default function Header() {
  const pathname = usePathname();
  const isSpanish = pathname?.startsWith('/es');
  const englishLink = isSpanish ? (pathname?.replace(/^\/es/, '') || '/') : pathname || '/';
  const spanishLink = isSpanish ? pathname : `/es${pathname || ''}`;

  const hasTranslation = (() => {
    if (!pathname) return false;
    const cleanPath = pathname.replace(/^\/es/, '').replace(/\/$/, '') || '/';
    const translatedPaths = [
      '/news',
      '/news/gta-6-release-date',
      '/news/gta-6-november-release',
      '/news/gta-6-leaks-escalation',
      '/news/gta-6-leaks-timeline',
      '/news/gta-6-artworks',
      '/news/gta-6-netflix-viewership',
      '/news/gta-6-gameplay',
    ];
    return translatedPaths.includes(cleanPath);
  })();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [policiesOpen, setPoliciesOpen] = useState(false);
  const [vehiclesOpen, setVehiclesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Helper to check if a nav section is active
  const isActive = (basePath: string) => pathname?.startsWith(basePath);
  const getNavClass = (basePath: string) =>
    `${styles.navLink} ${isActive(basePath) ? styles.navLinkActive : ''}`;
  const getDropdownBtnClass = (basePath: string) =>
    `${styles.navLink} ${styles.moreBtn} ${isActive(basePath) ? styles.navLinkActive : ''}`;

  const isPolicyActive = () => 
    ['/about', '/contact', '/privacy-policy', '/terms-of-service', '/cookie-policy', '/disclaimer', '/dmca'].some(path => pathname?.startsWith(path));

  const getPoliciesDropdownBtnClass = () =>
    `${styles.navLink} ${styles.moreBtn} ${isPolicyActive() ? styles.navLinkActive : ''}`;

  const storyRef = useRef<HTMLDivElement>(null);
  const newsRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const vehiclesRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const policiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (storyRef.current && !storyRef.current.contains(target)) {
        setStoryOpen(false);
      }
      if (newsRef.current && !newsRef.current.contains(target)) {
        setNewsOpen(false);
      }
      if (mapRef.current && !mapRef.current.contains(target)) {
        setMapOpen(false);
      }
      if (moreRef.current && !moreRef.current.contains(target)) {
        setMoreOpen(false);
      }
      if (policiesRef.current && !policiesRef.current.contains(target)) {
        setPoliciesOpen(false);
      }
      if (vehiclesRef.current && !vehiclesRef.current.contains(target)) {
        setVehiclesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <a href="#main" className="skip-to-content">Skip to main content</a>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.topBar}>
          <div className={styles.topBarInner}>
            <div className={styles.langSelector}>
              {isSpanish ? (
                <>
                  <Link href={englishLink} className={styles.langItem}>
                    <USFlag /> <span>EN (USA)</span>
                  </Link>
                  <span className={styles.langSep}>|</span>
                  <span className={styles.langItemActive}>
                    <ESFlag /> <span>ES (Español)</span>
                  </span>
                </>
              ) : (
                <>
                  <span className={styles.langItemActive}>
                    <USFlag /> <span>EN (USA)</span>
                  </span>
                  <span className={styles.langSep}>|</span>
                  {hasTranslation ? (
                    <Link href={spanishLink} className={styles.langItem}>
                      <ESFlag /> <span>ES (Español)</span>
                    </Link>
                  ) : (
                    <span className={styles.langItemDisabled} title="Spanish translation coming soon">
                      <ESFlag /> <span>ES (Español)</span>
                    </span>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <div className={styles.inner}>
          <Link href="/" className={styles.logoLink} aria-label="GTA Vi Spot - Home">
            <Image src={logoImg} alt="GTA Vi Spot Logo" className={styles.logoImg} priority />
          </Link>

          <nav className={styles.desktopNav} aria-label="Main navigation">
            {/* Story Dropdown */}
            <div
              className={styles.moreWrapper}
              ref={storyRef}
              onMouseEnter={() => setStoryOpen(true)}
              onMouseLeave={() => setStoryOpen(false)}
            >
              <button
                className={getDropdownBtnClass('/story')}
                onClick={() => setStoryOpen(!storyOpen)}
                aria-expanded={storyOpen}
                aria-haspopup="true"
                type="button"
              >
                Story
                <svg className={`${styles.moreChevron} ${storyOpen ? styles.chevronUp : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {storyOpen && (
                <div className={styles.dropdown}>
                  <div className={styles.dropdownGrid}>
                    {storySubNav.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={styles.dropdownLink}
                        onClick={() => setStoryOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* News Dropdown */}
            <div
              className={styles.moreWrapper}
              ref={newsRef}
              onMouseEnter={() => setNewsOpen(true)}
              onMouseLeave={() => setNewsOpen(false)}
            >
              <button
                className={getDropdownBtnClass('/news')}
                onClick={() => setNewsOpen(!newsOpen)}
                aria-expanded={newsOpen}
                aria-haspopup="true"
                type="button"
              >
                News
                <svg className={`${styles.moreChevron} ${newsOpen ? styles.chevronUp : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {newsOpen && (
                <div className={styles.dropdown}>
                  <div className={styles.dropdownGrid}>
                    {newsSubNav.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={styles.dropdownLink}
                        onClick={() => setNewsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Map Dropdown */}
            <div
              className={styles.moreWrapper}
              ref={mapRef}
              onMouseEnter={() => setMapOpen(true)}
              onMouseLeave={() => setMapOpen(false)}
            >
              <button
                className={getDropdownBtnClass('/map')}
                onClick={() => setMapOpen(!mapOpen)}
                aria-expanded={mapOpen}
                aria-haspopup="true"
                type="button"
              >
                Map
                <svg className={`${styles.moreChevron} ${mapOpen ? styles.chevronUp : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {mapOpen && (
                <div className={styles.dropdown}>
                  <div className={styles.dropdownGrid}>
                    {mapSubNav.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={styles.dropdownLink}
                        onClick={() => setMapOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Vehicles Dropdown */}
            <div
              className={styles.moreWrapper}
              ref={vehiclesRef}
              onMouseEnter={() => setVehiclesOpen(true)}
              onMouseLeave={() => setVehiclesOpen(false)}
            >
              <button
                className={getDropdownBtnClass('/vehicles')}
                onClick={() => setVehiclesOpen(!vehiclesOpen)}
                aria-expanded={vehiclesOpen}
                aria-haspopup="true"
                type="button"
              >
                Vehicles
                <svg className={`${styles.moreChevron} ${vehiclesOpen ? styles.chevronUp : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {vehiclesOpen && (
                <div className={styles.dropdown}>
                  <div className={styles.dropdownGrid}>
                    {vehiclesSubNav.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={styles.dropdownLink}
                        onClick={() => setVehiclesOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Other Primary Items */}
            {primaryNav.map((item) => (
              <Link key={item.href} href={item.href} className={getNavClass(item.href.replace(/\/$/, ''))}>
                {item.label}
              </Link>
            ))}

            {/* More Dropdown */}
            <div
              className={styles.moreWrapper}
              ref={moreRef}
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button
                className={`${styles.navLink} ${styles.moreBtn}`}
                onClick={() => setMoreOpen(!moreOpen)}
                aria-expanded={moreOpen}
                aria-haspopup="true"
                type="button"
              >
                More
                <svg className={`${styles.moreChevron} ${moreOpen ? styles.chevronUp : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {moreOpen && (
                <div className={styles.dropdown}>
                  <div className={styles.dropdownGrid}>
                    {moreNav.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={styles.dropdownLink}
                        onClick={() => setMoreOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* About & Policies Dropdown */}
            <div
              className={styles.moreWrapper}
              ref={policiesRef}
              onMouseEnter={() => setPoliciesOpen(true)}
              onMouseLeave={() => setPoliciesOpen(false)}
            >
              <button
                className={getPoliciesDropdownBtnClass()}
                onClick={() => setPoliciesOpen(!policiesOpen)}
                aria-expanded={policiesOpen}
                aria-haspopup="true"
                type="button"
              >
                About
                <svg className={`${styles.moreChevron} ${policiesOpen ? styles.chevronUp : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {policiesOpen && (
                <div className={styles.dropdown}>
                  <div className={styles.dropdownGrid}>
                    {policiesNav.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={styles.dropdownLink}
                        onClick={() => setPoliciesOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className={styles.actions}>
            <Link href="/news/gta-6-pre-order/" className={styles.preOrderHeaderBtn} aria-label="Pre-Order GTA 6 Now">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.preOrderIcon}>
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <span>Pre-Order Now</span>
            </Link>
            <ThemeToggle />
            <button
              className={styles.hamburger}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              type="button"
            >
              <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.line1Open : ''}`} />
              <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.line2Open : ''}`} />
              <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.line3Open : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileOverlay} ${mobileOpen ? styles.mobileOverlayOpen : ''}`}>
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          <div className={styles.mobileNavSection}>
            <span className={styles.mobileNavLabel}>Story & Characters</span>
            <div className={styles.mobileLinkGrid}>
              {storySubNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.mobileNavSection}>
            <span className={styles.mobileNavLabel}>News & Updates</span>
            <div className={styles.mobileLinkGrid}>
              {newsSubNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.mobileNavSection}>
            <span className={styles.mobileNavLabel}>Map & World</span>
            <div className={styles.mobileLinkGrid}>
              {mapSubNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.mobileNavSection}>
            <span className={styles.mobileNavLabel}>Vehicles & Rides</span>
            <div className={styles.mobileLinkGrid}>
              {vehiclesSubNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.mobileNavSection}>
            <span className={styles.mobileNavLabel}>Other Topics</span>
            <div className={styles.mobileLinkGrid}>
              {[...primaryNav, ...moreNav].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.mobileNavSection}>
            <span className={styles.mobileNavLabel}>About</span>
            <div className={styles.mobileLinkGrid}>
              {policiesNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
