import Link from 'next/link';
import styles from '../utility.module.css';

export const metadata = {
  title: 'Disclaimer | GTA Vi Spot',
  description: 'Read the comprehensive Disclaimer for GTA Vi Spot. This page outlines our independent fan status, copyright notices, and our relationship with Rockstar Games.',
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
            Last Updated: July 25, 2026. General disclaimer regarding website content, guides, fair use policies, and our independent fan-site status.
          </p>
        </div>
      </header>

      <main className={`container ${styles.content} ${styles.richText}`}>
        <p>
          The information provided on GTA Vi Spot (<a href="https://gtavispot.com">gtavispot.com</a>) is for general informational, educational, and entertainment purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
        </p>

        <h2>Independent Fan Status</h2>
        <p>
          First and foremost, we must clarify our position within the gaming community. <strong>GTA Vi Spot</strong> is a strictly independent, community-run fan guide, news aggregation, and resource website. We are built by fans, for fans. You can learn more about our team on our <Link href="/about/">About Us</Link> page.
        </p>
        <p>
          We are **not** affiliated, associated, authorized, endorsed by, sponsored by, or in any way officially connected with Rockstar Games, Take-Two Interactive Software, Inc., or any of their subsidiaries, parent companies, or affiliates. The official Rockstar Games website, which serves as the ultimate authority on their products, can be found at <a href="https://www.rockstargames.com" target="_blank" rel="noopener noreferrer">rockstargames.com</a>.
        </p>

        <h2>Intellectual Property Notice</h2>
        <p>
          Grand Theft Auto, GTA, GTA VI, GTA 6, Grand Theft Auto Vice City, Leonida, and all related characters, game mechanics, locations, audio tracks, and promotional assets are the **exclusive registered trademarks and intellectual property of Rockstar Games and/or Take-Two Interactive**. 
        </p>
        <p>
          GTA Vi Spot lays absolutely no claim to the ownership of these trademarks or the source material of the video games we cover. Our original written content, unique interactive map code, and site design remain our property, as outlined in our <Link href="/terms-of-service/">Terms of Service</Link>, but the underlying universe of GTA belongs entirely to its creators.
        </p>

        <h2>Fair Use Notice</h2>
        <p>
          This website frequently utilizes copyrighted materials, such as official game screenshots, trailer stills, high-resolution logo graphics, and brief promotional video clips. We assert that any use of these copyrighted materials on GTA Vi Spot constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the US Copyright Law. 
        </p>
        <p>
          The material on this site is distributed without profit to those who have an interest in receiving the included information for **educational, critical, news reporting, analytical, and review purposes**. If you wish to use copyrighted material from this site for purposes of your own that go beyond 'fair use', you must obtain explicit permission from the copyright owner (Rockstar Games). If you believe your intellectual property rights have been violated by our site content, please consult our <Link href="/dmca/">DMCA Policy</Link> for instructions on how to file a takedown notice.
        </p>

        <h2>No Professional Advice</h2>
        <p>
          The information contained on GTA Vi Spot cannot and should not be construed as professional advice. Our guides on in-game economies, hardware requirements, or strategies are based purely on our editorial team's personal experiences, community data gathering, and subjective analysis. We do not offer financial, technical, or legal advice. Any actions you take based upon the information on this website are strictly at your own risk.
        </p>

        <h2>Accuracy of Information & No Warranties</h2>
        <p>
          The content on GTA Vi Spot is provided strictly on an "as-is" and "as available" basis. While we pride ourselves on our rigorous editorial standards and do our absolute best to verify news, cross-reference leaks with credible sources, and write accurate walkthrough guides, we make no warranties or representations of any kind regarding:
        </p>
        <ul>
          <li>The completeness, exact accuracy, or permanent reliability of our map markers, item locations, or mission guides.</li>
          <li>Whether highly anticipated game features, launch windows, pricing structures, console specifications, or narrative missions will remain unchanged at the actual launch date.</li>
          <li>The uninterrupted availability, security, or error-free uptime of this website.</li>
        </ul>
        <p>
          The video game development process is incredibly complex and highly dynamic. Rockstar Games can and frequently does modify, delay, overhaul, or completely remove features at any point during development, right up until launch day and through post-launch patches. Any reliance you place on pre-release information, rumors, or data-mined content found on this website is strictly at your own risk.
        </p>

        <h2>External Links Disclaimer</h2>
        <p>
          The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties, or links to websites and features in banners or other advertising. Such external links are not continuously investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by our team.
        </p>
        <p>
          We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services. Please review our <Link href="/privacy-policy/">Privacy Policy</Link> to understand how external trackers may operate when you click these links.
        </p>

        <h2>Affiliate & Advertising Disclosure</h2>
        <p>
          To maintain the servers and compensate our writing staff, GTA Vi Spot participates in various affiliate marketing programs and utilizes display advertising networks. 
        </p>
        <p>
          This means that this site contains affiliate links. If you click on an affiliate link and subsequently purchase a product (such as a game preorder, console accessory, gaming PC, or gaming gear) through that link, we may receive a small affiliate commission from partners (such as Amazon, Best Buy, or other game retailers) at **no additional cost to you**. 
        </p>
        <p>
          We are committed to transparency. These affiliate partnerships and advertising revenues heavily support our server costs and website development, allowing us to keep our core guides free. However, these financial relationships do not influence our editorial independence. Our reviews, hardware recommendations, and game critiques are driven solely by our honest assessments. We will never recommend a substandard product simply to earn a commission.
        </p>

        <h2>User Responsibility</h2>
        <p>
          By using our website, you accept full responsibility for your actions. It is your responsibility to evaluate the accuracy, completeness, or usefulness of any information, opinion, advice, or other content available through GTA Vi Spot. We shall not be liable for any damages or losses related to your use of this site or the information provided herein.
        </p>

        <h2>Changes to Disclaimer</h2>
        <p>
          We reserve the right to amend this disclaimer at any time without prior, individual notice. When we make significant changes, we will revise the "Last Updated" date at the top of this page. We encourage you to review this disclaimer periodically. Your continued use of the website following the posting of changes will mean you accept those changes.
        </p>

        <h2>Contact</h2>
        <p>
          Should you have any questions, feedback, or concerns regarding this disclaimer or any of our policies, we welcome your inquiries. Please contact us via email at <code>gtavispot@gmail.com</code> or use the secure messaging system on our <Link href="/contact/">Contact Page</Link>.
        </p>
      </main>
    </div>
  );
}
