import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoImg from '../../../public/logo.png';
import styles from './Footer.module.css';

const quickLinks = [
  { label: 'News & Updates', href: '/news/' },
  { label: 'Map & World', href: '/map/' },
  { label: 'Story & Characters', href: '/story/' },
  { label: 'Beginner Guides', href: '/guides/' },
  { label: 'Cheat Codes', href: '/cheats/' },
  { label: 'Vehicles', href: '/vehicles/' },
  { label: 'GTA Online', href: '/online/' },
];

const moreLinks = [
  { label: 'Weapons', href: '/weapons/' },
  { label: 'Tech & Platform', href: '/tech/' },
  { label: 'Trophies', href: '/trophies/' },
  { label: 'Mods', href: '/mods/' },
  { label: 'Comparisons', href: '/compare/' },
  { label: 'World & Activities', href: '/world/' },
  { label: 'FAQ Hub', href: '/faq/' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Terms of Service', href: '/terms-of-service/' },
  { label: 'DMCA Policy', href: '/dmca/' },
  { label: 'Cookie Policy', href: '/cookie-policy/' },
  { label: 'Disclaimer', href: '/disclaimer/' },
  { label: 'Contact Us', href: '/contact/' },
];

const socialIcons: Record<string, React.ReactNode> = {
  x: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  ),
  instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
  ),
  threads: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.518 16.233c-1.34 0-2.5-.233-3.48-.7-.98-.467-1.7-1.116-2.16-1.95a5.53 5.53 0 0 1-.69-2.733c0-1.017.21-1.925.63-2.725.42-.8.995-1.425 1.725-1.875A5.022 5.022 0 0 1 11.233 5.6c.933 0 1.775.212 2.525.638.75.425 1.333 1.008 1.75 1.75.417.742.625 1.575.625 2.5 0 .917-.208 1.717-.625 2.4-.417.683-.975 1.208-1.675 1.575-.7.367-1.5.55-2.4.55-.7 0-1.325-.133-1.875-.4a3.02 3.02 0 0 1-1.25-1.1c-.267-.4-.4-.875-.4-1.425 0-.583.142-1.075.425-1.475.283-.4.675-.7 1.175-.9.5-.2 1.075-.3 1.725-.3.417 0 .825.042 1.225.125.4.083.742.208 1.025.375v-.825c0-.6-.15-1.092-.45-1.475-.3-.383-.75-.575-1.35-.575-.583 0-1.05.158-1.4.475-.35.317-.55.742-.6 1.275h-1.6c.067-.933.45-1.675 1.15-2.225.7-.55 1.633-.825 2.8-.825 1.15 0 2.042.317 2.675.95s.95 1.508.95 2.625v4.2c0 .35.075.633.225.85.15.217.375.325.675.325.267 0 .5-.075.7-.225a1.8 1.8 0 0 0 .5-.6v3.25a3.868 3.868 0 0 1-2.1.6 2.378 2.378 0 0 1-1.7-.6c-.533-.4-.825-.975-.875-1.725a3.91 3.91 0 0 1-1.575 1.575 4.966 4.966 0 0 1-2.225.7z"/></svg>
  ),
  tiktok: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
  ),
  facebook: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  ),
  youtube: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
  ),
  discord: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/></svg>
  ),
  pinterest: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.244 0C5.89 0 .586 5.304.586 11.657C.586 16.5 3.53 20.672 7.72 22.49c-.1-.913-.18-2.312.035-3.303c.195-.837 1.263-5.367 1.263-5.367s-.322-.647-.322-1.603c0-1.502.87-2.623 1.954-2.623c.923 0 1.367.692 1.367 1.523c0 .927-.59 2.315-.894 3.6c-.255 1.077.542 1.957 1.603 1.957c1.926 0 3.4-2.03 3.4-4.96c0-2.593-1.865-4.407-4.526-4.407c-3.083 0-4.893 2.312-4.893 4.7c0 .93.358 1.93.805 2.47c.088.107.1.2.073.308c-.08.33-.258 1.05-.294 1.193c-.047.193-.158.233-.365.137c-1.362-.633-2.213-2.623-2.213-4.22c0-3.435 2.5-6.59 7.192-6.59c3.775 0 6.71 2.69 6.71 6.29c0 3.75-2.36 6.777-5.637 6.777c-1.1 0-2.135-.573-2.49-1.248l-.68 2.59c-.247.95-.915 2.14-1.36 2.87c1.03.32 2.12.49 3.25.49c6.354 0 11.658-5.304 11.658-11.657C23.902 5.304 18.598 0 12.244 0z"/></svg>
  ),
  medium: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42s-3.38-2.88-3.38-6.42 1.51-6.42 3.38-6.42 3.38 2.88 3.38 6.42zm3.04 0c0 3.12-.34 5.66-.75 5.66s-.75-2.54-.75-5.66.34-5.66.75-5.66.75 2.54.75 5.66z"/></svg>
  ),
  tumblr: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14.536 18.106c-1.39.043-2.378-.372-2.378-2.079v-7.14h3.693V5.557h-3.693V0H9.508c-.14 3.703-1.636 5.215-5.183 5.485v3.325h2.296v7.712c0 4.148 2.457 7.426 7.426 7.214a12.44 12.44 0 0 0 3.428-.535l-.837-3.41c-.496.142-.98.243-1.302.275z"/></svg>
  ),
};

const socialLinks = [
  { label: 'Twitter / X', href: 'https://x.com/GTAVISPOT', iconKey: 'x' },
  { label: 'Instagram', href: 'https://www.instagram.com/gtavispot/', iconKey: 'instagram' },
  { label: 'Threads', href: 'https://www.threads.com/@gtavispot', iconKey: 'threads' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@gtavispot', iconKey: 'tiktok' },
  { label: 'Facebook', href: 'https://www.facebook.com/GTAViSpot/', iconKey: 'facebook' },
  { label: 'YouTube', href: 'https://www.youtube.com/@GTAVISpot', iconKey: 'youtube' },
  { label: 'Discord', href: 'https://discord.gg/dbjHxg7zUW', iconKey: 'discord' },
  { label: 'Pinterest', href: 'https://www.pinterest.com/gtavispot/', iconKey: 'pinterest' },
  { label: 'Medium', href: 'https://medium.com/@gtavispot', iconKey: 'medium' },
  { label: 'Tumblr', href: 'https://www.tumblr.com/blog/gtavispot', iconKey: 'tumblr' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.gradientLine} aria-hidden="true" />
      <div className={styles.inner}>
        {/* Top Section */}
        <div className={styles.topGrid}>
          {/* About */}
          <div className={styles.aboutCol}>
            <div className={styles.footerLogoContainer}>
              <Image src={logoImg} alt="GTA Vi Spot Logo" className={styles.footerLogoImg} />
            </div>
            <p className={styles.aboutText}>
              Your ultimate source for GTA 6 news, guides, maps, and everything 
              Vice City. Updated daily with the latest confirmed details ahead of 
              the November 19, 2026 launch.
            </p>
            <div className={styles.socialRow}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                >
                  {socialIcons[s.iconKey]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linkCol}>
            <h3 className={styles.colHeading}>Explore</h3>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div className={styles.linkCol}>
            <h3 className={styles.colHeading}>More</h3>
            <ul className={styles.linkList}>
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className={styles.linkCol}>
            <h3 className={styles.colHeading}>Legal</h3>
            <ul className={styles.linkList}>
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} gtavispot.com. All rights reserved.
          </p>
          <p className={styles.disclaimer}>
            GTA Vi Spot is a fan-made website and is not affiliated with Rockstar Games, 
            Take-Two Interactive, or any of their subsidiaries.
          </p>
        </div>
      </div>
    </footer>
  );
}
