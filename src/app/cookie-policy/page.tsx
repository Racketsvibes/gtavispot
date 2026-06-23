import styles from '../utility.module.css';

export const metadata = {
  title: 'Cookie Policy | GTA Vi Spot',
  description: 'Read the Cookie Policy for GTA Vi Spot. Learn how we use cookies, tracking pixels, and analytics to improve your experience.',
  alternates: {
    canonical: 'https://gtavispot.com/cookie-policy/',
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
            Last Updated: June 22, 2026. This policy explains how we use cookies and similar technologies on GTA Vi Spot.
          </p>
        </div>
      </header>

      <main className={`container ${styles.content} ${styles.richText}`}>
        <h2>What Are Cookies?</h2>
        <p>
          Cookies are small text files placed on your computer or mobile device by websites that you visit. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
        </p>

        <h2>How We Use Cookies</h2>
        <p>
          We use cookies to improve your browsing experience on <strong>GTA Vi Spot</strong>. They help us understand how you interact with our guides, remember your choices, and serve relevant advertising.
        </p>

        <h2>Types of Cookies We Use</h2>
        <p>
          The cookies used on our website are categorized into three groups:
        </p>
        <ul>
          <li><strong>Essential/Functional Cookies:</strong> These are required for the website to function correctly. For example, when you toggle between light and dark theme, we use a cookie or local storage to save your preference so you don't have to reset it on every page.</li>
          <li><strong>Performance & Analytics Cookies:</strong> We use Google Analytics cookies to track how visitors navigate our site. This tells us which guides are most popular, which pages have errors, and how long readers stay. This data is collected anonymously.</li>
          <li><strong>Advertising Cookies:</strong> These cookies are used by our advertising partners to serve ads that are relevant to your interests. They track your browsing activity across different websites to display tailored promotions.</li>
        </ul>

        <h2>Managing & Disabling Cookies</h2>
        <p>
          You can control and manage cookies in several ways. Please note that removing or blocking cookies can impact your user experience, and parts of our site may no longer be fully accessible.
        </p>
        <h3>Browser Settings</h3>
        <p>
          Most web browsers allow you to change your cookie preferences. You can configure your browser to block cookies, delete existing cookies, or alert you when a new cookie is set. To do this, look in your browser's "Settings", "Options", or "Privacy" menu.
        </p>
        <h3>Google Analytics Opt-Out</h3>
        <p>
          To opt out of being tracked by Google Analytics across all websites, you can install the official Google Analytics Opt-out Browser Add-on.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about our use of cookies, please contact us by email at <code>gtavispot@gmail.com</code>.
        </p>
      </main>
    </div>
  );
}
