import Link from 'next/link';
import styles from '../utility.module.css';

export const metadata = {
  title: 'DMCA Copyright Policy',
  description: 'Review the comprehensive DMCA Copyright Policy for GTA Vi Spot. Find detailed instructions on how to submit a copyright infringement notice or counter-notification.',
  alternates: {
    canonical: 'https://www.gtavispot.com/dmca/',
  },
};

export default function DmcaPage() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <span className={styles.categoryLabel}>LEGAL DETAILS</span>
          <h1 className={styles.title}>
            DMCA <span className="text-gradient">Policy</span>
          </h1>
          <p className={styles.desc}>
            Last Updated: July 25, 2026. Comprehensive copyright protection policy, safe harbor compliance, and instructions for submitting digital copyright infringement claims.
          </p>
        </div>
      </header>

      <main className={`container ${styles.content} ${styles.richText}`}>
        <h2>Our Commitment to Copyright Protection</h2>
        <p>
          At <strong>GTA Vi Spot</strong>, we hold the intellectual property rights of creators, developers, and artists in the highest regard, and we stringently expect our users, readers, and contributors to do the exact same. We operate as an independent fan resource (as detailed on our <Link href="/about/">About page</Link>) and we rely on fair use principles to analyze and report on video game developments. 
        </p>
        <p>
          However, we also strictly comply with the provisions of the Digital Millennium Copyright Act (DMCA) of 1998. It is our policy to respond quickly and decisively to clear notices of alleged copyright infringement that comply with the DMCA. This page describes the information that should be present in these notices and our procedures for handling them.
        </p>

        <h2>Filing a DMCA Takedown Notice</h2>
        <p>
          If you are a copyright owner, or are legally authorized to act on behalf of one, or authorized to act under any exclusive right under copyright, please report alleged copyright infringements taking place on or through the GTA Vi Spot website by completing the following DMCA Notice of Alleged Infringement and delivering it to our Designated Copyright Agent.
        </p>
        <p>
          To be fully effective and actionable under the DMCA, your takedown notice must be a written communication that includes all of the following six distinct requirements:
        </p>
        <ol>
          <li><strong>Physical or Electronic Signature:</strong> A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
          <li><strong>Identification of the Copyrighted Work:</strong> Detailed identification of the copyrighted work claimed to have been infringed. If multiple copyrighted works at a single online site are covered by a single notification, please provide a representative list of such works (e.g., links to your original published artwork, official screenshots, or registered text).</li>
          <li><strong>Identification of the Infringing Material:</strong> Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled. You must provide information reasonably sufficient to permit us to locate the material, such as specific URLs linking directly to the exact page or image (e.g., <code>https://www.gtavispot.com/images/specific-file.jpg</code>). General complaints without specific URLs will be rejected.</li>
          <li><strong>Contact Information:</strong> Information reasonably sufficient to permit our team to contact the complaining party, including an address, telephone number, and, if available, an electronic mail (email) address at which the complaining party may be contacted.</li>
          <li><strong>Good Faith Belief Statement:</strong> A statement that the complaining party has a "good faith belief" that use of the material in the manner complained of is not authorized by the copyright owner, its designated agent, or the law (including fair use exceptions).</li>
          <li><strong>Statement of Accuracy and Perjury:</strong> A statement that the information in the notification is entirely accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
        </ol>

        <h2>Designated Copyright Agent Contact</h2>
        <p>
          Please email your completed DMCA Notice of Alleged Infringement directly to our Designated Agent at the following email address. We prefer email communications for the fastest possible resolution times.
        </p>
        <p>
          📩 <strong>Email:</strong> <code>gtavispot@gmail.com</code>
          <br />
          ⚠️ <strong>Subject line:</strong> DMCA Copyright Infringement Notice
        </p>
        <p>
          Please do not send general inquiries, partnership requests, or site feedback to this inbox using the DMCA subject line. For general communications, please use our standard <Link href="/contact/">Contact Page</Link>.
        </p>

        <h2>Action Taken Upon Receipt of Notice</h2>
        <p>
          Upon receipt of a valid, complete, and legally actionable DMCA notice, GTA Vi Spot management will take the following actions:
        </p>
        <ul>
          <li>We will promptly remove or disable access to the infringing material in question.</li>
          <li>We will take reasonable steps to notify the user, contributor, or author who posted the material (if applicable) that we have removed or disabled access to it, providing them with a copy of the DMCA notice. This allows them the opportunity to file a counter-notification if they believe the removal was in error.</li>
        </ul>

        <h2>Counter-Notification Process</h2>
        <p>
          If you are a user or contributor who believes that your material was removed or disabled by mistake or misidentification, you may file a counter-notification with our Designated Agent. To be effective, a Counter-Notification must be a written communication that includes the following:
        </p>
        <ul>
          <li>Your physical or electronic signature.</li>
          <li>Identification of the material that has been removed or to which access has been disabled and the location (URL) at which the material appeared before it was removed or access to it was disabled.</li>
          <li>A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification of the material to be removed or disabled.</li>
          <li>Your name, physical address, and telephone number, and a statement that you consent to the jurisdiction of the Federal District Court for the judicial district in which your address is located, and that you will accept service of process from the person who provided the original DMCA notification or an agent of such person.</li>
        </ul>
        <p>
          If a valid counter-notice is received, we may send a copy to the original complaining party informing them that we may replace the removed material in 10 business days. Unless the copyright owner files an action seeking a court order against the user, the removed material may be replaced, or access to it restored, in 10 to 14 business days after receipt of the counter-notice.
        </p>

        <h2>Repeat Infringer Policy</h2>
        <p>
          In accordance with the DMCA and other applicable laws, GTA Vi Spot has adopted a strict policy of terminating, in appropriate circumstances and at our sole discretion, the access and privileges of users, commenters, or contributors who are deemed to be repeat infringers of intellectual property. We take copyright protection incredibly seriously and will not harbor those who consistently violate these terms.
        </p>

        <h2>Safe Harbor & Good Faith Requirement</h2>
        <p>
          Please be highly advised that under Section 512(f) of the DMCA, any person who knowingly materially misrepresents that material or activity is infringing, or that material or activity was removed or disabled by mistake or misidentification, may be subject to severe civil liability and damages, including costs and attorneys' fees. 
        </p>
        <p>
          Therefore, if you are unsure whether material on GTA Vi Spot infringes your copyright (for example, whether the use of the material constitutes a legal "fair use" under U.S. copyright law as outlined in our <Link href="/disclaimer/">Disclaimer</Link>), we strongly suggest that you first contact a qualified intellectual property attorney before submitting a formal takedown notice. For all other terms governing the use of this site, please review our <Link href="/terms-of-service/">Terms of Service</Link>.
        </p>
      </main>
    </div>
  );
}
