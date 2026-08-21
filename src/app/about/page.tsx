import Link from 'next/link';
import styles from '../utility.module.css';

export const metadata = {
  title: 'About GTA Vi Spot | Independent GTA 6 Fan Guide & News',
  description: 'Learn about GTA Vi Spot. Meet Qamar Farooq, Marcus Vance, and our editorial team. Read about our mission, verification process, and how we fund our independent GTA 6 coverage.',
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
            Last Updated: July 25, 2026. An independent fan resource built to cut through the noise and provide verified Grand Theft Auto 6 news, guides, and map insights.
          </p>
        </div>
      </header>

      <main className={`container ${styles.content} ${styles.richText}`}>
        <p>
          Welcome to <strong>GTA Vi Spot</strong>, your premier independent destination for all things Grand Theft Auto 6. Established by passionate gamers, this dedicated fan site is designed to deliver verified news, comprehensive interactive map guides, and extensive launch coverage. We understand the immense anticipation surrounding the release of GTA 6 and strive to be the ultimate resource for fans who want direct, factual answers without the clutter of clickbait, unverified rumors, or misleading social media posts.
        </p>

        <h2>Who We Are</h2>
        <p>
          At our core, we are a small but highly dedicated group of gamers, writers, and developer fans who have practically lived and breathed the Grand Theft Auto franchise for decades. From the original top-down entries to the groundbreaking 3D universe of GTA III, Vice City, and San Andreas, all the way to the breathtaking realism of GTA V and Red Dead Redemption 2, we have played them all extensively. Our collective journey has now brought us to the highly anticipated era of GTA 6, and we are more excited than ever to document this new chapter in gaming history.
        </p>
        <p>
          We are an entirely independent project, fundamentally separate from corporate gaming journalism conglomerates and publisher public relations departments. This steadfast independence allows us to maintain a raw, unfiltered perspective on the game's ongoing development. If a highly anticipated feature falls short of expectations, if a delay is poorly communicated by the publisher, or if a collector's edition simply does not justify its premium price tag, we will explicitly say so. We prioritize our readers' and players' interests above all else.
        </p>

        <h2>Our Editorial Team</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
          <div>
            <strong>Qamar Farooq (Founder & Lead Editor)</strong> — <a href="https://x.com/QamarFarooq79" target="_blank" rel="noopener noreferrer">@QamarFarooq79</a><br />
            Qamar is the founder of GTA Vi Spot, an independent web creator and SEO specialist who has built and managed popular gaming resources. He oversees the technical performance, overall strategy, and news verification operations of the site.
          </div>
          <div>
            <strong>Marcus Vance (Senior Editor & Lead Writer)</strong><br />
            Marcus has over a decade of professional gaming journalism experience, specializing in open-world game design, community culture, and the evolution of the Grand Theft Auto series. He leads the development of our detailed gameplay guides, comparison pieces, and deep-dive lore analysis.
          </div>
          <div>
            <strong>GTA Vi Spot Editorial (Newsroom Brand)</strong><br />
            Our collective brand name used for breaking news updates, collaborative guides, and community roundups compiled by multiple members of our content team.
          </div>
        </div>

        <h2>Our Mission</h2>
        <p>
          Our overarching mission is incredibly simple yet vital: to provide the most accurate, reliable, and user-friendly GTA 6 resource on the entire internet. We aim to aggressively filter out the relentless noise of social media rumors, fabricated forum leaks, and deceptive YouTube thumbnails. When you visit GTA Vi Spot, you are getting meticulously researched information that has been thoroughly vetted by experts. We want to empower players with the precise knowledge they need to maximize their enjoyment and mastery of the game, whether they are exploring the sun-drenched, neon-lit streets of Vice City, navigating the treacherous swamps of Leonida, or optimizing their criminal empires.
        </p>

        <h2>Editorial Standards & Verification Process</h2>
        <p>
          The internet is unfortunately rife with fake GTA 6 leaks, modded gameplay footage passed off as real, and blatant clickbait. We deeply respect your time and your intelligence, which is exactly why we employ a strict and rigorous verification process before publishing any information. Here is precisely how we ensure our content is consistently trustworthy:
        </p>
        <ul>
          <li><strong>Direct Source Checks:</strong> We flatly refuse to rely on dubious second-hand information or anonymous forum posts. We meticulously link directly to official Take-Two Interactive investor documentation, Rockstar Newswire press releases, verified developer communications, and accredited financial reports.</li>
          <li><strong>Frame-by-Frame Analysis:</strong> When new trailers, teasers, or official screenshots are released by Rockstar, our editorial team conducts meticulous, high-fidelity frame-by-frame analysis. This painstaking process allows us to accurately identify new map markers, returning character models, unannounced vehicles, and potential new gameplay mechanics.</li>
          <li><strong>Zero Clickbait Tolerance:</strong> We absolutely despise clickbait as much as you do. If a trending rumor is unverified, it is explicitly and boldly labeled as such, or we simply choose not to cover it at all. We prefer to focus our energy on concrete facts and verified developments. Read our transparent responses to common questions on our <Link href="/news/gta-6-release-date/">GTA 6 Release Date</Link> coverage and our comprehensive <Link href="/faq/">GTA 6 FAQ page</Link>.</li>
        </ul>

        <h2>How We Fund The Site</h2>
        <p>
          Running a high-traffic, media-rich website like GTA Vi Spot requires significant financial and technical resources. We are firmly committed to keeping our core guides, interactive maps, and news coverage completely free for all users. To fund our server infrastructure costs, extensive development time, and compensate our editorial team, we utilize two primary and transparent monetization methods:
        </p>
        <ol>
          <li><strong>Display Advertising:</strong> We carefully implement small, non-intrusive advertisements on our article and guide pages. We work exclusively with premium ad networks, such as Google AdSense, to ensure these ads do not disrupt your reading or browsing experience.</li>
          <li><strong>Affiliate Referrals:</strong> Our articles and hardware guides may occasionally contain affiliate links to relevant products such as game preorders, console accessories, gaming PCs, or gaming hardware. If you make a purchase after clicking through these links, we may earn a small commission from the retailer at absolutely no extra cost to you. This is a vital source of revenue that supports our ongoing independent coverage.</li>
        </ol>
        <p>
          Please note that these monetization strategies have absolutely zero influence on our editorial content, opinions, or reviews. Our integrity cannot be bought. For more detailed information on how we handle user data, track analytics, and our legal disclaimers, please take the time to read our complete <Link href="/privacy-policy/">Privacy Policy</Link> and our official <Link href="/disclaimer/">Disclaimer</Link>.
        </p>

        <h2>Contact & Community</h2>
        <p>
          We are building this expansive resource directly for the GTA community, and we highly value your ongoing input. Do you have feedback on a specific guide? Did you spot a typographical error or factual mistake that needs correcting? Or do you simply want to share a verified news tip with our editorial desk? We strongly encourage you to reach out to us. 
        </p>
        <p>
          Use our official <Link href="/contact/">Contact Page</Link> to get in touch with Qamar Farooq, Marcus Vance, and the rest of the editorial team. We make it a daily priority to read all user submissions and we typically respond to all legitimate emails within 48 hours. Let's prepare to explore the massive state of Leonida together!
        </p>
      </main>
    </div>
  );
}
