import styles from '../utility.module.css';

export const metadata = {
  title: 'Privacy Policy | GTA Vi Spot',
  description: 'Read the Privacy Policy for GTA Vi Spot. Learn how we handle cookies, analytics, display ads, and contact form details on our site.',
  alternates: {
    canonical: 'https://gtavispot.com/privacy-policy/',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <span className={styles.categoryLabel}>LEGAL DETAILS</span>
          <h1 className={styles.title}>
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className={styles.desc}>
            Last Updated: June 22, 2026. This policy explains what information we collect, how we use it, and how we protect your privacy.
          </p>
        </div>
      </header>

      <main className={`container ${styles.content} ${styles.richText}`}>
        <p>
          At <strong>GTA Vi Spot</strong>, accessible from <a href="https://gtavispot.com">gtavispot.com</a>, the privacy of our visitors is highly important. This Privacy Policy document outlines the types of information we collect and record, and how we use it.
        </p>
        <p>
          If you have additional questions or require more information about our Privacy Policy, don't hesitate to contact us at <code>admin@gtavispot.com</code>.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We collect information directly from you when you submit details, as well as automatically as you browse our site.
        </p>
        <ul>
          <li><strong>Form Submissions:</strong> When you send a message through our Contact page, we collect your name, email address, subject, and message content to reply to your inquiry.</li>
          <li><strong>Log Files:</strong> Like most websites, we use standard server log files. This includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamps, referring/exit pages, and click counts. This data is not linked to personally identifiable information.</li>
          <li><strong>Cookies & Tracking:</strong> We use cookies to analyze web traffic, remember user preferences (like your dark mode choice), and serve relevant advertising.</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>
          We use the collected data in several ways, including to:
        </p>
        <ul>
          <li>Provide, operate, and maintain our guide site and news feeds.</li>
          <li>Improve and personalize your browsing experience.</li>
          <li>Understand how you use our site to write better guides.</li>
          <li>Respond to contact form submissions and guide corrections.</li>
          <li>Prevent spam, security exploits, and fraudulent activities.</li>
        </ul>

        <h2>Third-Party Privacy Policies</h2>
        <p>
          Our Privacy Policy does not apply to other advertisers or websites. We advise you to consult the respective Privacy Policies of these third-party servers for detailed information:
        </p>
        <ul>
          <li><strong>Google Analytics:</strong> We use analytics cookies to monitor site performance and traffic. You can opt out of Google Analytics tracking through browser add-ons.</li>
          <li><strong>Ad Networks:</strong> Third-party ad servers use technologies like cookies, JavaScript, or Web Beacons in their advertisements on our site. They automatically receive your IP address to measure ad campaign efficiency.</li>
        </ul>

        <h2>CCPA & GDPR Rights</h2>
        <p>
          We want to make sure you are fully aware of all your data protection rights. Depending on your location, you have the right to request:
        </p>
        <ul>
          <li><strong>Access:</strong> Copies of your personal data collected by us (such as contact submissions).</li>
          <li><strong>Rectification:</strong> Correction of any information you believe is inaccurate.</li>
          <li><strong>Erasure:</strong> Deletion of your personal data under certain conditions.</li>
          <li><strong>Restrict Processing:</strong> Limitations on how we handle your data.</li>
        </ul>
        <p>
          If you make a request, we have one month to respond to you. Please email us at <code>admin@gtavispot.com</code> if you wish to exercise these rights.
        </p>

        <h2>Children's Privacy Protection</h2>
        <p>
          We prioritize adding protection for children using the internet. We do not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think your child provided this information on our website, please contact us immediately, and we will promptly remove it from our records.
        </p>
      </main>
    </div>
  );
}
