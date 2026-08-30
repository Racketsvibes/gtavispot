import Link from 'next/link';
import styles from '../utility.module.css';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Read the comprehensive Privacy Policy for GTA Vi Spot. Learn exactly how we handle your data, cookies, analytics, display ads, and contact form details in compliance with CCPA and GDPR.',
  alternates: {
    canonical: 'https://www.gtavispot.com/privacy-policy/',
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
            Last Updated: July 25, 2026. This comprehensive policy explains what information we collect, how we use it, and how we protect your digital privacy.
          </p>
        </div>
      </header>

      <main className={`container ${styles.content} ${styles.richText}`}>
        <p>
          At <strong>GTA Vi Spot</strong>, accessible from <a href="https://www.gtavispot.com">gtavispot.com</a>, the privacy of our readers and visitors is of the utmost importance to us. This comprehensive Privacy Policy document outlines in detail the types of personal information that is received and collected by GTA Vi Spot, how it is recorded, and how we use it to improve your experience on our platform. 
        </p>
        <p>
          We are committed to transparency and to protecting your digital footprint while you utilize our guides, news articles, and interactive maps. If you have additional questions or require more information about our Privacy Policy after reading this document, please do not hesitate to reach out to us by visiting our <Link href="/contact/">Contact Page</Link> or emailing us directly at <code>gtavispot@gmail.com</code>.
        </p>

        <h2>Information We Collect</h2>
        <p>
          In order to provide a functional, personalized, and high-quality website experience, we collect information directly from you when you actively submit details, as well as automatically as you browse and interact with our site's features. The data we collect generally falls into the following categories:
        </p>
        <ul>
          <li><strong>Form Submissions and Direct Contact:</strong> When you send a message through our Contact page, subscribe to a potential newsletter, or participate in site surveys, we may collect personal identifiers such as your name, email address, subject of inquiry, and the specific message content. This data is used exclusively to reply to your inquiry or provide the requested service.</li>
          <li><strong>Standard Server Log Files:</strong> Like almost all modern websites and hosting environments, GTA Vi Spot utilizes standard server log files. The information inside the log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamps, referring and exit pages, and the number of clicks. This information is used to analyze broader trends, administer the site, track user's movement around the site, and gather broad demographic information. Importantly, IP addresses and other such information are not linked to any information that is personally identifiable.</li>
          <li><strong>Cookies & Tracking Technologies:</strong> We use cookies (small text files stored on your browser) and web beacons to analyze web traffic, remember your user preferences (such as your dark mode/light mode choice or text size settings), and serve relevant display advertising. For a deep dive into exactly which cookies we use, please review our detailed <Link href="/cookie-policy/">Cookie Policy</Link>.</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>
          We do not sell your personal information to data brokers. We use the collected data in several specific, limited ways to enhance our platform, including to:
        </p>
        <ul>
          <li>Provide, operate, maintain, and securely host our guide site and news feeds.</li>
          <li>Improve, personalize, and expand your browsing experience by remembering your specific site preferences.</li>
          <li>Understand and analyze how you use our site, which allows us to identify popular topics and write better, more comprehensive GTA 6 guides.</li>
          <li>Develop new products, interactive maps, features, and overall functionality based on user demand.</li>
          <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes (only if you have opted-in).</li>
          <li>Respond accurately and promptly to contact form submissions, business inquiries, and guide correction tips.</li>
          <li>Find and prevent spam, malicious security exploits, and fraudulent activities to keep our community safe.</li>
        </ul>

        <h2>Cookies & Tracking Technologies</h2>
        <p>
          Like any other professional website, GTA Vi Spot uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information. You can choose to disable cookies through your individual browser options. To learn more about cookie management with specific web browsers, it can be found at the browsers' respective websites. You can read our full <Link href="/cookie-policy/">Cookie Policy</Link> for more granular details.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          Our Privacy Policy does not apply to other advertisers or third-party websites. We utilize several trusted third-party services to keep our site running smoothly and to monetize our free content. We advise you to consult the respective Privacy Policies of these third-party ad servers and analytics providers for more detailed information.
        </p>
        <ul>
          <li><strong>Google Analytics:</strong> We use Google Analytics cookies to monitor site performance, track page load times, and analyze traffic patterns. This helps us understand what content our audience enjoys most. You can easily opt out of Google Analytics tracking completely by installing the official Google Analytics Opt-out Browser Add-on.</li>
          <li><strong>Google AdSense and Ad Networks:</strong> Third-party ad servers or ad networks (like Google AdSense) use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on GTA Vi Spot, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit. Note that GTA Vi Spot has no access to or control over these cookies that are used by third-party advertisers.</li>
        </ul>

        <h2>Data Retention</h2>
        <p>
          We will only retain your personal information for as long as is necessary to fulfill the purposes outlined in this Privacy Policy. For example, if you send us an email via our contact form, we will retain that email and your email address only as long as it takes to resolve your inquiry or maintain a necessary record of the correspondence. Server logs are typically purged automatically on a rolling basis, usually within 30 to 90 days.
        </p>

        <h2>Your Privacy Rights (CCPA & GDPR)</h2>
        <p>
          We want to make sure you are fully aware of all of your data protection rights. Depending on your geographic location (such as residents of California under the CCPA or residents of the European Economic Area under the GDPR), you are entitled to the following rights:
        </p>
        <ul>
          <li><strong>The Right to Access:</strong> You have the right to request copies of your personal data that we have collected (such as contact form submissions).</li>
          <li><strong>The Right to Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate, or complete information you believe is incomplete.</li>
          <li><strong>The Right to Erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
          <li><strong>The Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
          <li><strong>The Right to Object to Processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li>
          <li><strong>The Right to Data Portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
        </ul>
        <p>
          If you make a request regarding these rights, we have one month to respond to you. If you would like to exercise any of these rights, please contact us immediately at <code>gtavispot@gmail.com</code>.
        </p>

        <h2>Children's Privacy</h2>
        <p>
          Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
        </p>
        <p>
          GTA Vi Spot does not knowingly collect any Personal Identifiable Information from children under the age of 13 (or 16 in certain EU jurisdictions). If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our active records. Furthermore, as our content pertains to a Mature-rated (M for Mature / PEGI 18) video game, our website is intended for a mature audience.
        </p>

        <h2>International Data Transfers</h2>
        <p>
          GTA Vi Spot is primarily hosted on servers located in the United States. If you are accessing our website from the European Union, Asia, or any other region with laws or regulations governing personal data collection, use, and disclosure that differ from United States laws, please be advised that through your continued use of our website, you are transferring your personal information to the United States and you explicitly consent to that transfer and processing of your data.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update our Privacy Policy from time to time to reflect changes in legal requirements, our site features, or third-party integrations. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this document. We encourage you to review this Privacy Policy periodically for any changes. By continuing to use our website after these changes are posted, you agree to the revised policy. For an overview of our overall terms, please read our <Link href="/terms-of-service/">Terms of Service</Link> and learn more about our team on the <Link href="/about/">About Us</Link> page.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions, concerns, or require further clarification about our Privacy Policy or the data we hold on you, please do not hesitate to contact us. You can email our administrative team at <code>gtavispot@gmail.com</code> or use the secure form on our <Link href="/contact/">Contact Page</Link>.
        </p>
      </main>
    </div>
  );
}
