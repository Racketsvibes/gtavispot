import styles from '../utility.module.css';

export const metadata = {
  title: 'Disclaimer | GTA Vi Spot',
  description: 'Read the Disclaimer for GTA Vi Spot. This page outlines our independent fan status and relationship with Rockstar Games and Take-Two Interactive.',
  alternates: {
    canonical: 'https://gtavispot.com/disclaimer/',
  },
};

export default function DisclaimerPage() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <span className={styles.categoryLabel}>LEGAL DETAILS</span>
          <h1 className={styles.title}>
            Site <span className="text-gradient">Disclaimer</span>
          </h1>
          <p className={styles.desc}>
            Last Updated: June 22, 2026. General disclaimer regarding website content, guides, and independent fan-site status.
          </p>
        </div>
      </header>

      <main className={`container ${styles.content} ${styles.richText}`}>
        <h2>Independent Fan Status</h2>
        <p>
          <strong>GTA Vi Spot</strong> (<a href="https://gtavispot.com">gtavispot.com</a>) is an independent, community-run fan guide, news, and resource website. We are **not** affiliated, associated, authorized, endorsed by, or in any way officially connected with Rockstar Games, Take-Two Interactive, or any of their subsidiaries or affiliates.
        </p>
        <p>
          The official Rockstar Games website can be found at <a href="https://www.rockstargames.com" target="_blank" rel="noopener noreferrer">rockstargames.com</a>.
        </p>

        <h2>Intellectual Property Notice</h2>
        <p>
          All trademarks, service marks, trade names, game logos, character names, and promotional assets relating to Grand Theft Auto, GTA VI, GTA 6, Vice City, and Leonida are the **exclusive property of Rockstar Games, Take-Two Interactive, or their respective owners**.
        </p>
        <p>
          Any use of copyrighted materials, game screenshots, trailer stills, or logo graphics on this website is for **educational, critical, news reporting, and review purposes** under fair use principles.
        </p>

        <h2>No Warranties (As-Is Content)</h2>
        <p>
          The content on GTA Vi Spot is provided "as is" and "as available" for informational and entertainment purposes only. While we do our best to verify news, cross-reference leaks, and write accurate guides, we make no warranties or representations of any kind regarding:
        </p>
        <ul>
          <li>The completeness, accuracy, or reliability of our map markers, guides, or guides.</li>
          <li>Whether game features, launch windows, pricing, console specs, or missions will change at launch.</li>
          <li>The availability or uptime of this website.</li>
        </ul>
        <p>
          Game development is highly dynamic. Rockstar Games can modify, delay, or remove features at any time. Any reliance you place on information found on this website is strictly at your own risk.
        </p>

        <h2>Affiliate & Advertising Disclosure</h2>
        <p>
          This site contains advertising and affiliate links. If you buy a product (such as a game preorder, console accessory, or gaming gear) through our links, we may receive a small affiliate commission from partners (such as Amazon or game retailers) at no additional cost to you. This funding supports server costs and website development.
        </p>
      </main>
    </div>
  );
}
