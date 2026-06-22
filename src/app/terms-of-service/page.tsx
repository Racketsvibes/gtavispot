import styles from '../utility.module.css';

export const metadata = {
  title: 'Terms of Service | GTA Vi Spot',
  description: 'Read the Terms of Service for GTA Vi Spot. Review the terms governing website use, content licenses, and user responsibilities.',
  alternates: {
    canonical: 'https://gtavispot.com/terms-of-service/',
  },
};

export default function TermsOfServicePage() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <span className={styles.categoryLabel}>LEGAL DETAILS</span>
          <h1 className={styles.title}>
            Terms of <span className="text-gradient">Service</span>
          </h1>
          <p className={styles.desc}>
            Last Updated: June 22, 2026. Please read these terms carefully before browsing our guides or submitting information.
          </p>
        </div>
      </header>

      <main className={`container ${styles.content} ${styles.richText}`}>
        <h2>Agreement to Terms</h2>
        <p>
          By accessing and using <strong>GTA Vi Spot</strong> (<a href="https://gtavispot.com">gtavispot.com</a>), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you are prohibited from using or accessing this site.
        </p>

        <h2>Use License & Copyright</h2>
        <p>
          Unless otherwise stated, all original written guides, map marker details, site code, design layouts, and custom graphics are the intellectual property of GTA Vi Spot. 
        </p>
        <p>
          You are granted permission to temporarily download one copy of the materials on GTA Vi Spot for personal, non-commercial transitory viewing only. Under this license, you may not:
        </p>
        <ul>
          <li>Modify or copy the materials.</li>
          <li>Use the materials for any commercial purpose or public display.</li>
          <li>Attempt to decompile or reverse-engineer any software contained on this website.</li>
          <li>Scrape or copy our written guides and map databases to host on another website.</li>
          <li>Remove any copyright or other proprietary notations from the materials.</li>
        </ul>
        <p>
          This license shall automatically terminate if you violate any of these restrictions.
        </p>

        <h2>Prohibited User Behavior</h2>
        <p>
          As a user of this website, you agree not to:
        </p>
        <ul>
          <li>Use the Contact form to send spam, unsolicited promotions, or malicious attachments.</li>
          <li>Attempt to gain unauthorized access to our servers, database, or site infrastructure.</li>
          <li>Use automated bots, crawlers, or scrapers to extract content from our guides without permission (except standard search engine indexing bots and LLMs conforming to our `robots.txt` guidelines).</li>
        </ul>

        <h2>Limitations of Liability</h2>
        <p>
          In no event shall GTA Vi Spot or its owners be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we have been notified of the possibility of such damage.
        </p>
        <p>
          Some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, so these limitations may not apply to you.
        </p>

        <h2>Revisions & Errata</h2>
        <p>
          The materials appearing on GTA Vi Spot could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current. We may make changes to the materials contained on our website at any time without notice.
        </p>

        <h2>Governing Law</h2>
        <p>
          Any claim relating to GTA Vi Spot shall be governed by the laws of the United States without regard to its conflict of law provisions.
        </p>
      </main>
    </div>
  );
}
