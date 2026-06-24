'use client';

import Image from 'next/image';
import logoImg from '../../../public/logo.png';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';

const newsSubNav = [
  { label: 'All News & Updates', href: '/news/' },
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

const primaryNav = [
  { label: 'Guides', href: '/guides/' },
  { label: 'Cheats', href: '/cheats/' },
  { label: 'Weapons', href: '/weapons/' },
  { label: 'Online', href: '/online/' },
  { label: 'Vehicles', href: '/vehicles/' },
];

const moreNav = [
  { label: 'Tech & Platform', href: '/tech/' },
  { label: 'Trophies', href: '/trophies/' },
  { label: 'Mods', href: '/mods/' },
  { label: 'Comparisons', href: '/compare/' },
  { label: 'World & Activities', href: '/world/' },
  { label: 'FAQ', href: '/faq/' },
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [policiesOpen, setPoliciesOpen] = useState(false);
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

            {/* Other Primary Items */}
            {primaryNav.map((item) => (
              <Link key={item.href} href={item.href} className={getNavClass(item.href.replace(/\/$/, ''))}>
                {item.label}
              </Link>
            ))}

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
          </nav>

          <div className={styles.actions}>
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
