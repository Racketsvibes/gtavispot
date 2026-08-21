import Link from 'next/link';
import styles from '../utility.module.css';

export const metadata = {
  title: 'Terms of Service',
  description: 'Read the comprehensive Terms of Service for GTA Vi Spot. Review the terms governing website use, content licenses, user responsibilities, and our legal disclaimers.',
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
            Last Updated: July 25, 2026. Please read these terms carefully before browsing our interactive guides or submitting information to our team.
          </p>
        </div>
      </header>

      <main className={`container ${styles.content} ${styles.richText}`}>
        <p>
          Welcome to GTA Vi Spot. These Terms of Service ("Terms") govern your access to and use of the GTA Vi Spot website, located at <a href="https://gtavispot.com">gtavispot.com</a>, including all content, functionality, guides, and services offered on or through the site.
        </p>

        <h2>Agreement to Terms</h2>
        <p>
          By accessing, browsing, and continuing to use <strong>GTA Vi Spot</strong>, you explicitly acknowledge that you have read, understood, and agree to be bound by these Terms of Service, along with our <Link href="/privacy-policy/">Privacy Policy</Link> and <Link href="/disclaimer/">Disclaimer</Link>. These documents collectively form a legally binding agreement between you and the operators of GTA Vi Spot. If you do not agree with any part of these terms, or if you do not have the legal capacity to enter into this agreement, you are strictly prohibited from using or accessing this site and must discontinue use immediately.
        </p>

        <h2>Intellectual Property Rights</h2>
        <p>
          The content published on GTA Vi Spot is protected by international copyright and trademark laws. Unless otherwise explicitly stated, all original written guides, map marker details, editorial articles, site code (HTML, CSS, JavaScript), design layouts, and custom graphics created for the site are the exclusive intellectual property of GTA Vi Spot and its authors, including Qamar Farooq and the editorial team. 
        </p>
        <p>
          We operate as an independent entity (see our <Link href="/about/">About page</Link>). All registered trademarks, game logos, character names, and promotional assets relating to Grand Theft Auto, GTA VI, Vice City, and Leonida remain the exclusive property of Rockstar Games and Take-Two Interactive. We use these assets strictly under Fair Use for educational, critical, and news reporting purposes.
        </p>
        <p>
          You are granted a limited, non-exclusive, non-transferable, and revocable permission to temporarily download or view one copy of the materials on GTA Vi Spot for personal, non-commercial transitory viewing only. Under this strict license, you may absolutely not:
        </p>
        <ul>
          <li>Modify, translate, or heavily paraphrase the materials for your own publications.</li>
          <li>Use the materials, specifically our comprehensive guides and maps, for any commercial purpose, monetization, or public display (commercial or non-commercial).</li>
          <li>Attempt to decompile, reverse-engineer, or extract the source code of any software or interactive maps contained on this website.</li>
          <li>Utilize automated scripts, scrapers, or bots to copy our written guides and map databases to host on another competing website or mobile application.</li>
          <li>Remove any copyright, watermark, or other proprietary notations from the images or text materials.</li>
        </ul>
        <p>
          This use license shall automatically and immediately terminate if you violate any of these restrictions. Upon termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format. For copyright infringement notices, please refer to our <Link href="/dmca/">DMCA Policy</Link>.
        </p>

        <h2>User Responsibilities & Prohibited Activities</h2>
        <p>
          As a user and visitor of this website, you agree to use our platform responsibly and ethically. You explicitly agree not to engage in any of the following prohibited activities:
        </p>
        <ul>
          <li>Using the <Link href="/contact/">Contact form</Link> to send spam, unsolicited promotional material, phishing links, or malicious software attachments.</li>
          <li>Attempting to gain unauthorized access to our secure servers, databases, content management systems, or site infrastructure.</li>
          <li>Engaging in any action that imposes an unreasonable or disproportionately large load on our infrastructure, such as a Denial of Service (DoS) attack.</li>
          <li>Using automated bots, crawlers, or scrapers to extract content from our guides or user comments without our express written permission. Exceptions are made for standard search engine indexing bots (like Googlebot) and responsible LLM crawlers that strictly conform to our `robots.txt` guidelines.</li>
          <li>Impersonating any person or entity, including our staff or Rockstar Games employees, in your communications with us.</li>
        </ul>

        <h2>Content Accuracy & Disclaimer</h2>
        <p>
          The materials appearing on GTA Vi Spot, including news reports, leak coverage, and game guides, are provided on an "as is" basis. While our editorial team strives for accuracy and diligently verifies information as outlined in our standards, the video game industry is highly dynamic. Rockstar Games can and will modify features, release dates, and game mechanics during development.
        </p>
        <p>
          Therefore, GTA Vi Spot makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property. We do not warrant that any of the materials on our website are completely accurate, complete, or current at any given second. We may make changes to the materials contained on our website at any time without prior notice. 
        </p>

        <h2>Third-Party Links</h2>
        <p>
          GTA Vi Spot has not exhaustively reviewed all of the external websites linked to our site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by GTA Vi Spot of the site. Use of any such linked website is entirely at the user's own risk. This includes links provided in user comments or affiliate links leading to retailers. We encourage you to be aware when you leave our site and to read the terms of service of any other site that you visit.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          In no event whatsoever shall GTA Vi Spot, its owners, its authors, or its suppliers be liable for any special, incidental, indirect, or consequential damages (including, without limitation, damages for loss of data, loss of profit, or due to business interruption) arising out of the use or inability to use the materials on our website. This applies even if GTA Vi Spot or an authorized representative has been notified orally or in writing of the possibility of such damage.
        </p>
        <p>
          Because some jurisdictions or countries do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you in their entirety. In such jurisdictions, our liability shall be limited to the greatest extent permitted by law.
        </p>

        <h2>Indemnification</h2>
        <p>
          You agree to defend, indemnify, and hold harmless GTA Vi Spot, its contributors, and its service providers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms of Service or your use of the website, including, but not limited to, any use of the website's content, services, and products other than as expressly authorized in these Terms.
        </p>

        <h2>Governing Law</h2>
        <p>
          Any claim relating to GTA Vi Spot, its content, or these Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the state and federal courts located within the United States for the resolution of any disputes.
        </p>

        <h2>Modifications to Terms</h2>
        <p>
          GTA Vi Spot reserves the right, at our sole discretion, to revise, modify, or update these Terms of Service for its website at any time without prior notice. By continuing to use this website after such changes are made, you are agreeing to be bound by the then-current, revised version of these Terms of Service. We recommend that you check this page periodically to ensure you understand the terms that apply to your use of the site.
        </p>

        <h2>Contact</h2>
        <p>
          If you have any questions or require further clarification regarding these Terms of Service, please do not hesitate to contact our administrative team. You can reach us by email at <code>gtavispot@gmail.com</code> or by utilizing the secure form located on our <Link href="/contact/">Contact Page</Link>.
        </p>
      </main>
    </div>
  );
}
