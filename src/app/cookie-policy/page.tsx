import Link from 'next/link';
import styles from '../utility.module.css';

export const metadata = {
  title: 'Cookie Policy',
  description: 'Read the comprehensive Cookie Policy for GTA Vi Spot. Learn exactly how we use cookies, tracking pixels, analytics, and manage consent to improve your experience.',
  alternates: {
    canonical: 'https://www.gtavispot.com/cookie-policy/',
  },
};

export default function CookiePolicyPage() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <span className={styles.categoryLabel}>LEGAL DETAILS</span>
          <h1 className={styles.title}>
            Cookie <span className="text-gradient">Policy</span>
          </h1>
          <p className={styles.desc}>
            Last Updated: July 25, 2026. This comprehensive policy explains how and why we use cookies and similar tracking technologies on GTA Vi Spot.
          </p>
        </div>
      </header>

      <main className={`container ${styles.content} ${styles.richText}`}>
        <p>
          This Cookie Policy explains how GTA Vi Spot ("we", "us", and "our") uses cookies and similar tracking technologies to recognize you when you visit our website at <a href="https://www.gtavispot.com">gtavispot.com</a>. It explains what these technologies are and why we use them, as well as your rights to control our use of them. This policy is an integral part of our broader commitment to your privacy, which is fully detailed in our <Link href="/privacy-policy/">Privacy Policy</Link>.
        </p>

        <h2>What Are Cookies?</h2>
        <p>
          Cookies are small text files or pieces of data that are downloaded and placed on your computer, smartphone, tablet, or other internet-enabled mobile device by websites that you visit. They are widely and extensively used in order to make websites work, or work much more efficiently, as well as to provide critical diagnostic and analytical information to the owners of the site.
        </p>
        <p>
          Cookies set by the website owner (in this case, GTA Vi Spot) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., interactive maps, advertising networks, and analytical software). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
        </p>

        <h2>Types of Cookies We Use</h2>
        <p>
          We use cookies for a variety of reasons detailed below. The cookies used on our website are primarily categorized into three distinct groups. To provide maximum transparency, we have broken down these categories:
        </p>

        <h3>1. Essential (Functional) Cookies</h3>
        <p>
          These cookies are absolutely necessary for the core website to function correctly and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms. 
        </p>
        <p>
          For example, when you toggle between our light and dark theme reading modes, we use a localized cookie or browser local storage to save your specific preference. This ensures that you do not have to manually reset your visual preference on every single page load. Without these cookies, some parts of our site may not function properly.
        </p>

        <h3>2. Performance & Analytics Cookies</h3>
        <p>
          These cookies allow us to count visits and traffic sources so we can measure and significantly improve the performance of our site. They help us to know which pages and guides are the most and least popular and see how visitors move around the site. 
        </p>
        <p>
          We predominantly use Google Analytics cookies for this purpose. This tracking tells us which GTA 6 rumor articles generate the most engagement, which interactive map pages have high bounce rates, and how long readers stay to consume our deep-dive content. All information these cookies collect is aggregated and therefore completely anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.
        </p>

        <h3>3. Advertising & Targeting Cookies</h3>
        <p>
          These cookies may be set through our site by our trusted advertising partners (such as Google AdSense). They may be used by those third-party companies to build a profile of your interests and show you highly relevant ads on other sites across the internet. 
        </p>
        <p>
          They do not store directly personal information (like your name or email address), but are based on uniquely identifying your browser and internet device. Advertising cookies track your browsing activity across different websites to display tailored promotions, such as ads for gaming hardware or console preorders. If you do not allow these cookies, you will experience less targeted advertising, but you will still see standard, untargeted ads on the site.
        </p>

        <h2>Third-Party Cookies</h2>
        <p>
          In some special cases, we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.
        </p>
        <ul>
          <li><strong>Google Analytics:</strong> As mentioned, this is one of the most widespread and trusted analytics solutions on the web. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</li>
          <li><strong>Google AdSense:</strong> The Google AdSense service we use to serve advertising uses a DoubleClick cookie to serve more relevant ads across the web and limit the number of times that a given ad is shown to you.</li>
          <li><strong>Social Media Widgets:</strong> We may use social media buttons and/or plugins on this site that allow you to connect with your social network in various ways. For these to work, social networks will set cookies through our site which may be used to enhance your profile on their site or contribute to the data they hold for various purposes outlined in their respective privacy policies.</li>
        </ul>

        <h2>How to Manage and Disable Cookies</h2>
        <p>
          You have the absolute right to decide whether to accept or reject non-essential cookies. You can control and manage cookies in several ways. Please be aware that removing or blocking cookies can negatively impact your user experience, and certain parts of our site, such as personalized theme settings, may no longer be fully accessible or functional.
        </p>
        
        <h3>Browser Specific Instructions</h3>
        <p>
          Most modern web browsers allow you to manage your cookie preferences through their settings menus. You can configure your browser to block all cookies, delete existing cookies, or alert you when a new cookie is being set. Here is how to find these settings in popular browsers:
        </p>
        <ul>
          <li><strong>Google Chrome:</strong> Go to Settings → Privacy and security → Cookies and other site data.</li>
          <li><strong>Mozilla Firefox:</strong> Go to Options → Privacy &amp; Security → Cookies and Site Data.</li>
          <li><strong>Safari:</strong> Go to Preferences → Privacy → Cookies and website data.</li>
          <li><strong>Microsoft Edge:</strong> Go to Settings → Cookies and site permissions → Manage and delete cookies and site data.</li>
        </ul>

        <h3>Google Analytics Opt-Out</h3>
        <p>
          If you specifically wish to opt out of being tracked by Google Analytics across all websites you visit (not just ours), you can download and install the official Google Analytics Opt-out Browser Add-on provided by Google.
        </p>

        <h2>Cookie Consent and Do Not Track Signals</h2>
        <p>
          When you first visit GTA Vi Spot, you may be presented with a cookie consent banner depending on your geographic location (to comply with GDPR or CCPA regulations). By clicking "Accept" or continuing to use the site after seeing the banner, you consent to our use of cookies as described in this policy.
        </p>
        <p>
          Regarding "Do Not Track" (DNT) signals: DNT is a privacy preference you can set in your web browser to indicate that you do not want certain information about your webpage visits collected across websites when you have not interacted with that service on the page. Because there currently isn't an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.
        </p>

        <h2>Changes to This Cookie Policy</h2>
        <p>
          We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies. The "Last Updated" date at the top of this Cookie Policy indicates when it was last revised. Your continued use of our site under our <Link href="/terms-of-service/">Terms of Service</Link> constitutes acceptance of these updates.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions, concerns, or require further clarification about our use of cookies or other tracking technologies, please do not hesitate to contact our team. You can email us directly at <code>gtavispot@gmail.com</code> or reach out via our <Link href="/contact/">Contact Page</Link>.
        </p>
      </main>
    </div>
  );
}
