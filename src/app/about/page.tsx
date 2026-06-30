import Link from 'next/link';
import styles from '../utility.module.css';

export const metadata = {
  title: 'About GTA Vi Spot | Independent GTA 6 Fan Guide & News',
  description: 'Learn about GTA Vi Spot — an independent resource for verified GTA 6 news, interactive map guides, and launch coverage built by die-hard gamers.',
  alternates: {
    canonical: 'https://gtavispot.com/about/',
  },
};

export default function AboutPage() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <span className={styles.categoryLabel}>WHO WE ARE</span>
          <h1 className={styles.title}>
            About <span className="text-gradient">GTA Vi Spot</span>
          </h1>
          <p className={styles.desc}>
            An independent fan resource built to cut through the noise and provide verified Grand Theft Auto 6 news, guides, and map insights.
          </p>
        </div>
      </header>

      <main className={`container ${styles.content} ${styles.richText}`}>
        <p>
          <strong>GTA Vi Spot</strong> is a dedicated GTA 6 fan site created by long-time gamers for fans who want direct answers. We don't waste your time with 10-minute YouTube rumors or fabricated forum leaks. We verify Take-Two earnings reports, Rockstar Games announcements, and checked data files to keep you updated.
        </p>

        <h2>Who Runs This Site?</h2>
        <p>
          We're a small group of gamers, writers, and developer fans who have played every GTA title since the original top-down entries. We've spent years tracking the GTA 6 development lifecycle, analyzing Trailer 1 frame-by-frame, and mapping out the districts of Leonida.
        </p>
        <p>
          This is an independent project. We're not corporate journalists, and we're not tied to publisher PR departments. We say what we think, call out delays when they happen, and point out when preorder editions aren't worth the cash.
        </p>

        <h2>Our Verification Standards</h2>
        <p>
          The internet is full of fake GTA 6 leaks. We filter out the trash so you don't have to. Here is how we verify what we publish:
        </p>
        <ul>
          <li><strong>Direct Source Checks:</strong> We link directly to official Take-Two Interactive investor documentation and Rockstar Newswire releases.</li>
          <li><strong>Frame Analysis:</strong> Graphical assets, screenshots, and trailer clips are analyzed using high-fidelity footage to confirm map markers and car models.</li>
          <li><strong>Zero Clickbait:</strong> If a rumor is unverified, we label it clearly as a rumor or don't write about it at all. Read our responses to common questions on our <Link href="/faq/">GTA 6 FAQ page</Link>.</li>
        </ul>

        <h2>How We Support the Site</h2>
        <p>
          GTA Vi Spot is a free resource. We fund our server bills and development through two sources:
        </p>
        <ol>
          <li><strong>Display Advertising:</strong> Small, non-intrusive ads displayed on our guide pages.</li>
          <li><strong>Affiliate Referrals:</strong> If you buy the game or purchase console gear through our links, we might earn a small commission at no extra cost to you.</li>
        </ol>
        <p>
          None of these partnerships affect our reviews or guides. If a feature in GTA Online is bad, we'll tell you directly.
        </p>

        <h2>Need to Reach Us?</h2>
        <p>
          Have feedback on a guide or want to submit a tip? Use our <Link href="/contact/">Contact Page</Link> to get in touch. We respond to emails within 48 hours.
        </p>
      </main>
    </div>
  );
}
