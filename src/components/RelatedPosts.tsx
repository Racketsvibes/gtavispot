import Link from 'next/link';
import Image from 'next/image';
import styles from './RelatedPosts.module.css';

const guides = [
  {
    title: 'Leonida Map Guide',
    desc: 'Dive into the districts of Vice City, Grassrivers swamps, and Keys islands.',
    img: '/images/GTA_6_MAp.webp',
    alt: 'GTA 6 Leonida Map Guide',
    href: '/map/',
    cta: 'View Map Hub →',
  },
  {
    title: 'Story & Characters',
    desc: 'Meet Lucia and Jason, explore their dynamic, and read the mission walkthroughs.',
    img: '/images/GTAVI_Screenshots/People/Lucia_Caminos/Lucia_Caminos_03.webp',
    alt: 'GTA 6 Lucia and Jason Story Guide',
    href: '/story/',
    cta: 'Meet Cast →',
  },
  {
    title: 'Cheat Codes Guide',
    desc: 'Check out the expected cell phone dials, controller inputs, and PC codes.',
    img: '/images/gta-6-cheats-feature.webp',
    alt: 'GTA 6 Cheat Codes Guide',
    href: '/cheats/',
    cta: 'Browse Cheats →',
  },
];

export default function RelatedPosts() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Explore More Guides</h2>
      <div className={styles.grid}>
        {guides.map((guide) => (
          <div key={guide.href} className={styles.card}>
            <div className={styles.imgWrap}>
              <Image
                src={guide.img}
                alt={guide.alt}
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.body}>
              <h3 className={styles.title}>{guide.title}</h3>
              <p className={styles.desc}>{guide.desc}</p>
              <Link href={guide.href} className={styles.cta}>
                {guide.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
