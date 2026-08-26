import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImageLightbox from '@/components/ui/ImageLightbox';
import { ArticleData } from '../newsContent';
import styles from '../../app/news/[slug]/page.module.css';

export const gta6Artworks: ArticleData = {
  title: 'GTA 6 Artworks: Official 4K Wallpapers & HD Gallery',
  metaDescription: 'Get the official GTA 6 Artworks collection. Download high-definition 4K desktop wallpapers and mobile background designs of Lucia and Jason in Vice City.',
  focusKeyword: 'GTA 6 Artworks',
  h1: 'GTA 6 Artworks: Official Wallpapers & HD Images',
  publishedDate: 'August 27, 2026',
  modifiedDate: 'August 27, 2026',
  author: 'Marcus Vance',
  featureImage: '/images/GTAVI_Artwork_images/Jason_and_Lucia_01/Jason_and_Lucia_01_landscape.webp',
  featureImageAlt: 'Official GTA 6 key art showing protagonists Lucia and Jason leaning against a pink sports car in Vice City under a sunset sky.',
  content: (
    <ImageLightbox>
      <p>
        Rockstar Games has released the <strong>GTA 6 Artworks</strong> collection, featuring high-definition character designs and landscape illustrations of Leonida. 
        These illustrations are designed to build excitement before the official release, giving fans an early glimpse of the game's atmosphere and main cast. 
        Here's how you can download the official files and set up your desktop or mobile wallpaper.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>GTA 6 Artworks Overview</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Official Formats:</strong> Available in 4K desktop landscape, standard portrait, and mobile smartphone layouts.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Featured Characters:</strong> Artworks display protagonists Lucia and Jason, alongside corrupt sheriffs and cartel contacts.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Distribution Source:</strong> Downloads are hosted directly on the official Rockstar Games VI media portal.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Image Formats:</strong> The assets are optimized in high-quality WebP formats to prevent site loading delays.</span>
          </li>
        </ul>
      </div>

      <h2>Where Can You Download Official GTA 6 Artworks?</h2>
      <p>
        The safest and most reliable source to download the official <strong>GTA 6 Artworks</strong> is the media library on the <a href="https://www.rockstargames.com/VI" target="_blank" rel="noopener noreferrer">official Rockstar Games GTA VI website</a>. 
        Rockstar hosts high-resolution downloads for every piece of promotional art, categorized by resolution and aspect ratio. 
        Downloading files from third-party sites can expose your device to malware or low-quality AI-generated mockups.
      </p>
      <p>
        According to official Rockstar Games download statistics, the main key art has surpassed 10 million downloads globally since its debut. 
        This illustration showcases Lucia and Jason in their signature sunset pose, which has become the baseline design for official marketing. 
        For context on when we'll see official gameplay using these models, read our analysis on the upcoming <Link href="/news/gta-6-extended-look/">GTA 6 Netflix showcase</Link>.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/GTAVI_Artwork_images/Jason_and_Lucia_01/Jason_and_Lucia_01_landscape.webp"
          alt="Jason and Lucia key artwork landscape"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
          priority
        />
      </div>

      <h2>Which Characters Are Featured in the Official Gallery?</h2>
      <p>
        The official illustration lineup highlights the major players driving the storyline in Leonida. 
        Aside from the main key art, individual character profiles showcase the diverse cast. 
        This includes corrupt sheriff Cal Hampton and nightclub owner Boobie Ike, whose roles are discussed in our <Link href="/story/gta-6-characters/">GTA 6 characters guide</Link>.
      </p>
      <p>
        Each character design is crafted with deep thematic colors matching the Vice City aesthetic. 
        For instance, the artwork of Cal Hampton features a dusty orange background symbolizing the rural county borders. 
        Meanwhile, the key art of Jason and Lucia relies on hot pink and dark violet gradients to represent the urban nightlife.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/GTAVI_Artwork_images/Jason_and_Lucia_02/Jason_and_Lucia_02_landscape.webp"
          alt="Jason and Lucia holding weapons key artwork landscape"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>

      <h2>Official Character Artworks Gallery</h2>
      <p>
        Click on any of the official character illustrations below to open the interactive lightbox gallery. 
        You can navigate through the high-resolution files using the left and right arrows.
      </p>

      <div className={styles.galleryGrid}>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Boobie_Ike/Boobie_Ike_landscape.webp"
            alt="Boobie Ike character artwork"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Cal_Hampton/Cal_Hampton_landscape.webp"
            alt="Cal Hampton county sheriff artwork"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/DreQuan_Priest/DreQuan_Priest_landscape.webp"
            alt="DreQuan Priest music industry artwork"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Real_Dimez/Real_Dimez_landscape.webp"
            alt="Real Dimez street racing artwork"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Brian_Heder/Brian_Heder_landscape.webp"
            alt="Brian Heder rural smuggler artwork"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
      </div>

      <h2>How Can You Optimize Wallpapers for 4K and Mobile?</h2>
      <p>
        To get the best visual results, you must choose the correct file dimensions for your screen. 
        Rockstar provides optimized versions matching standard monitor and mobile viewports:
      </p>
      
      <table>
        <thead>
          <tr>
            <th>Device Type</th>
            <th>Target Resolution</th>
            <th>Recommended Aspect Ratio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>4K Ultra HD Monitor</td>
            <td>3840 x 2160</td>
            <td>16:9 Landscape</td>
          </tr>
          <tr>
            <td>Widescreen Laptop</td>
            <td>1920 x 1080</td>
            <td>16:9 Landscape</td>
          </tr>
          <tr>
            <td>iOS & Android Mobile</td>
            <td>1080 x 1920</td>
            <td>9:16 Vertical Portrait</td>
          </tr>
          <tr>
            <td>iPad & Tablet Devices</td>
            <td>2048 x 2732</td>
            <td>4:3 Portrait</td>
          </tr>
        </tbody>
      </table>

      <p>
        Always check if the download contains the official watermark. 
        Authentic wallpapers feature the GTA VI logo at the bottom corner, helping you distinguish official designs from fan creations. 
        If you are tracking older developmental leaks rather than official art, check our <Link href="/news/gta-6-leaks-timeline/">GTA 6 leaks timeline</Link> tracker.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', margin: '2rem 0' }}>
        {/* Card 1: Official Download Facts */}
        <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.5rem', backgroundColor: '#f8fafc' }}>
          <h3 style={{ margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            📥 Official Download Facts
          </h3>
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li><strong>Multiple viewports:</strong> High-definition wallpapers are cropped for smartphones, tablets, and ultrawide screens.</li>
            <li><strong>WebP Format:</strong> Official downloads on fan portals use WebP compression to preserve image details while saving disk space.</li>
            <li><strong>Logo overlays:</strong> Artworks are available with or without the game title overlays depending on user preference.</li>
          </ul>
        </div>
      </div>

      <p>
        The release of these marketing designs demonstrates Rockstar's focus on high-fidelity visual presentation. 
        With the console release planned for next year, these assets give the community a clear standard of what to expect in terms of character models and art style. 
        Make sure to bookmark this page to download new official <strong>GTA 6 Artworks</strong> as they launch.
      </p>

      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions About GTA 6 Artworks</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Where can I download official GTA 6 Artworks?</h3>
          <p className={styles.faqAnswer}>
            You can download the official illustrations directly from the media library of the official Rockstar Games website.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Are the wallpapers available in 4K resolution?</h3>
          <p className={styles.faqAnswer}>
            Yes, Rockstar provides 4K Ultra HD landscape wallpapers for desktop setups, alongside high-definition crops for mobile phones.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Are there separate wallpapers for Lucia and Jason?</h3>
          <p className={styles.faqAnswer}>
            Yes, the official download portal includes combined key art as well as individual portrait designs for each protagonist.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Can I use these artworks for commercial projects?</h3>
          <p className={styles.faqAnswer}>
            No, all official character illustrations and logos are copyrighted by Rockstar Games and are intended for personal wallpaper use only.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Will Rockstar release more wallpapers before launch?</h3>
          <p className={styles.faqAnswer}>
            Yes, Rockstar typically publishes new artwork alongside official gameplay trailers and pre-order announcements.
          </p>
        </div>
      </section>

      <p>
        To see how these official visual designs compare to in-development builds, review our <Link href="/news/gta-6-leaks-escalation/">GTA 6 leaks escalation</Link> report.
      </p>
    </ImageLightbox>
  ),
};
