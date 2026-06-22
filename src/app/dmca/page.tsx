import styles from '../utility.module.css';

export const metadata = {
  title: 'DMCA Copyright Policy | GTA Vi Spot',
  description: 'Review the DMCA Copyright Policy for GTA Vi Spot. Find instructions on how to submit a copyright infringement notice to our designated agent.',
  alternates: {
    canonical: 'https://gtavispot.com/dmca/',
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
            Last Updated: June 22, 2026. Copyright protection policy and instructions for submitting digital copyright infringement claims.
          </p>
        </div>
      </header>

      <main className={`container ${styles.content} ${styles.richText}`}>
        <p>
          At <strong>GTA Vi Spot</strong>, we respect the intellectual property rights of others and expect our users to do the same. In accordance with the Digital Millennium Copyright Act (DMCA) of 1998, we will respond quickly to claims of copyright infringement committed on our site.
        </p>

        <h2>DMCA Infringement Notices</h2>
        <p>
          If you are a copyright owner, or authorized to act on behalf of one, please report alleged copyright infringements taking place on our website by sending a written notice to our designated copyright agent at: <code>admin@gtavispot.com</code>.
        </p>
        <p>
          To be effective under the DMCA, your notice must include all of the following:
        </p>
        <ol>
          <li>A physical or electronic signature of the copyright owner or a person authorized to act on their behalf.</li>
          <li>Identification of the copyrighted work claimed to have been infringed (e.g., links to your original artwork, screenshot, or text).</li>
          <li>Identification of the material on our website that you claim is infringing, with specific URLs so we can locate it (e.g., <code>https://gtavispot.com/images/...</code>).</li>
          <li>Your contact information, including your physical address, telephone number, and email address.</li>
          <li>A statement by you that you have a "good faith belief" that the disputed use of the material is not authorized by the copyright owner, its agent, or the law.</li>
          <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are the owner or authorized to act on behalf of the owner of the copyright that is allegedly infringed.</li>
        </ol>

        <h2>Where to Send Your Claim</h2>
        <p>
          Please email your completed DMCA notice to:
          <br />
          📩 <strong>Email:</strong> <code>admin@gtavispot.com</code>
          <br />
          Subject line: <strong>DMCA Copyright Infringement Notice</strong>
        </p>

        <h2>Action Taken</h2>
        <p>
          Upon receipt of a valid and complete DMCA notice, we will:
        </p>
        <ul>
          <li>Remove or disable access to the infringing material.</li>
          <li>Notify the user or contributor who posted the material (if applicable) so they have an opportunity to file a counter-notification.</li>
        </ul>

        <h2>Repeat Infringer Policy</h2>
        <p>
          We take copyright protection seriously. If we find that a user or contributor repeatedly uploads infringing content, we will terminate their access to submit tips, comments, or register on our site.
        </p>
      </main>
    </div>
  );
}
