import Link from 'next/link';
import styles from './not-found.module.css';

export const metadata = {
  title: '404 - Page Wasted | GTA Vi Spot',
  description: 'The page you are looking for does not exist or has been relocated.',
};

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.wastedBadge}>WASTED</div>
        <h1 className={styles.title}>404 — PAGE NOT FOUND</h1>
        <p className={styles.text}>
          The coordinates you entered do not exist on the Leonida map, or the VCPD has confiscated this page. Return to Vice City safety.
        </p>
        <Link href="/" className={styles.btn}>
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
