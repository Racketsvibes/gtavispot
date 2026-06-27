import Link from 'next/link';
import { gta6Vehicles } from '@/data/vehicles';
import ShareButtons from '@/components/ShareButtons';
import { getBreadcrumbsSchema, getFAQSchema } from '@/lib/schema';
import styles from './page.module.css';

export const metadata = {
  title: 'GTA 6 Vehicles: Confirmed Cars, Bikes, Boats & Planes | GTA Vi Spot',
  description: gta6Vehicles.metaDescription,
  alternates: {
    canonical: 'https://gtavispot.com/vehicles/',
  },
  openGraph: {
    title: gta6Vehicles.title,
    description: gta6Vehicles.metaDescription,
    url: 'https://gtavispot.com/vehicles/',
    type: 'article',
    images: [
      {
        url: `https://gtavispot.com${gta6Vehicles.featureImage}`,
        width: 1200,
        height: 630,
        alt: gta6Vehicles.featureImageAlt || gta6Vehicles.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: gta6Vehicles.title,
    description: gta6Vehicles.metaDescription,
    images: [`https://gtavispot.com${gta6Vehicles.featureImage}`],
  },
};

export default function VehiclesPage() {
  // Generate Schemas
  const breadcrumbs = getBreadcrumbsSchema([
    { name: 'Home', url: 'https://gtavispot.com' },
    { name: 'Vehicles', url: 'https://gtavispot.com/vehicles/' }
  ]);

  const faqs = [
    { question: "How many vehicles are confirmed for GTA 6?", answer: "Trailers and leaked developmental footage have confirmed over 100 unique vehicle models. These span classic sports cars, trucks, SUVs, speedboats, choppers, and civilian aircraft." },
    { question: "Can you customize cars in GTA 6?", answer: "Yes. GTA 6 features deep customization options at local mod shops like Rideout Customs. You can upgrade engine components, customize visual liveries, adjust suspension height, and install armor plating." },
    { question: "Will there be electric vehicles in GTA 6?", answer: "Yes, several electric and hybrid vehicles have been spotted. These feature quiet powertrains, instant torque acceleration, and unique charging meters on their digital dashboard displays." },
    { question: "Can you fly planes and helicopters?", answer: "Yes, both fixed-wing planes and helicopters are fully pilotable. You can steal them from airfields or buy them online to store in your personal hangars." },
    { question: "Will cars require fuel in GTA 6?", answer: "No, rumor leaks suggest cars do not require manual refueling. However, electric vehicles display battery charge levels, and internal combustion cars show functional fuel gauges as visual elements." }
  ];
  const faqSchema = getFAQSchema(faqs);

  return (
    <div className={styles.wrapper}>
      {/* Schema Markups */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className={`container ${styles.article}`}>
        {/* Breadcrumbs visually */}
        <div className={styles.breadcrumbs}>
          <Link href="/" className={styles.breadLink}>Home</Link>
          <span className={styles.breadSep}>/</span>
          <span className={styles.breadCurrent}>Vehicles</span>
        </div>

        <header className={styles.header}>
          <span className={styles.categoryBadge}>VEHICLE CLUSTER</span>
          <h1 className={styles.title}>{gta6Vehicles.h1}</h1>
          <div className={styles.meta}>
            <span>By <strong>{gta6Vehicles.author}</strong></span>
            <span className={styles.metaSep}>•</span>
            <span>Published: {gta6Vehicles.publishedDate}</span>
          </div>
        </header>

        {/* Share buttons (top) */}
        <ShareButtons isTop={true} url="https://gtavispot.com/vehicles/" title={gta6Vehicles.title} />

        <div className={styles.divider}></div>

        <main className={styles.body}>
          {gta6Vehicles.content}
        </main>

        <div className={styles.divider} style={{ margin: '48px 0 24px' }}></div>

        {/* Share buttons (bottom) */}
        <ShareButtons isTop={false} url="https://gtavispot.com/vehicles/" title={gta6Vehicles.title} />
      </div>
    </div>
  );
}
