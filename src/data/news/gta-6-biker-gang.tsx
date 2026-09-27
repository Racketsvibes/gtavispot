import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImageLightbox from '@/components/ui/ImageLightbox';
import { ArticleData } from '../newsContent';
import styles from '../../app/news/[slug]/page.module.css';

const NewsCTAButton = ({ href, children, isExternal }: { href: string; children: React.ReactNode; isExternal?: boolean }) => {
  return (
    <div style={{ margin: '1.25rem 0 1.75rem 0' }}>
      <a
        href={href}
        className="news-cta-btn"
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        <span>{children}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
    </div>
  );
};

export const gta6BikerGang: ArticleData = {
  title: 'GTA 6 Biker Gang: Final Chapter MC & Ambrosia Explained',
  metaDescription: 'Meet the Final Chapter MC — the confirmed GTA 6 biker gang out of Ambrosia. See their patches, roles, territory, and how they stack up against The Lost MC.',
  focusKeyword: 'GTA 6 biker gang',
  h1: 'GTA 6 Biker Gang: The Final Chapter MC Explained',
  publishedDate: 'September 27, 2026',
  modifiedDate: 'September 27, 2026',
  author: 'Marcus Vance',
  featureImage: '/images/news/gta-6-biker-gang-final-chapter-mc.webp',
  featureImageAlt: 'GTA 6 Final Chapter MC biker gang riding motorcycles through Ambrosia County in Leonida wearing winged-skull three-piece cut patches',
  content: (
    <ImageLightbox>
      <style dangerouslySetInnerHTML={{__html: `
        .news-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff !important;
          background: linear-gradient(135deg, #3b1578, #d6246e);
          border-radius: 24px;
          text-decoration: none !important;
          box-shadow: 0 3px 8px rgba(214, 36, 110, 0.25);
          transition: all 0.2s ease;
          font-family: var(--font-ui), "Barlow Condensed", sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          border: 1px solid transparent;
        }
        .news-cta-btn:hover,
        .news-cta-btn:focus,
        .news-cta-btn:active,
        .news-cta-btn:visited {
          text-decoration: none !important;
          color: #ffffff !important;
        }
        .news-cta-btn span { text-decoration: none !important; }
        .news-cta-btn:hover {
          background: linear-gradient(135deg, #d6246e, #f58634);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(245, 134, 52, 0.4);
        }
        .mc-table-wrap {
          overflow-x: auto;
          margin: 1.75rem 0;
          border-radius: 12px;
          border: 1px solid var(--border, #e2e8f0);
          box-shadow: 0 4px 14px rgba(0,0,0,0.04);
        }
        .mc-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.95rem;
          text-align: left;
          background: var(--bg-surface, #ffffff);
        }
        .mc-table th {
          background: var(--bg-secondary, #f8fafc);
          padding: 12px 16px;
          font-family: var(--font-ui), "Barlow Condensed", sans-serif;
          font-size: 1rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          border-bottom: 2px solid var(--border, #e2e8f0);
          color: var(--text-primary, #0f172a);
        }
        .mc-table td {
          padding: 12px 16px;
          border-bottom: 1px solid var(--border-light, #f1f5f9);
          color: var(--text-secondary, #334155);
          vertical-align: middle;
        }
        .mc-table tr:last-child td { border-bottom: none; }
        .mc-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1.25rem;
          margin: 1.75rem 0;
        }
        .mc-card {
          background: var(--bg-secondary, #f8fafc);
          border: 1px solid var(--border, #e2e8f0);
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .mc-card-title {
          font-family: var(--font-ui), "Barlow Condensed", sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--brand-magenta, #d6246e);
          text-transform: uppercase;
        }
        .mc-card-desc { font-size: 0.95rem; color: var(--text-secondary, #334155); line-height: 1.5; }
      `}} />

      <p>
        Every <em>Grand Theft Auto</em> map needs an outlaw motorcycle club, and <strong>Grand Theft Auto VI</strong> has already shown us its answer: the <strong>Final Chapter MC</strong>. This is the <strong>GTA 6 biker gang</strong> spotted in official Rockstar screenshots, rolling deep through the industrial backroads of Ambrosia in three-piece cuts stamped with a winged skull.
      </p>
      <p>
        Here&apos;s everything the footage actually confirms about them, what their patches tell us, and how they line up against The Lost MC from past games.
      </p>

      {/* Quick Answer Block for Google AI Overviews and Snippets */}
      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Answer: The GTA 6 Biker Gang</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Club Name:</strong> The Final Chapter MC — the confirmed biker gang shown in official GTA 6 media.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Home Turf:</strong> Ambrosia — a gritty refinery-and-farmland county in the state of Leonida.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Colors:</strong> A three-piece patch with a winged skull, the &quot;Final Chapter&quot; top rocker, and an &quot;Ambrosia&quot; bottom rocker.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Franchise Link:</strong> They fill the outlaw-MC role held by The Lost MC in GTA IV and GTA V.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Story Role:</strong> Not yet officially confirmed — details land with the <Link href="/news/gta-6-release-date/">November 19, 2026 release</Link>.</span>
          </li>
        </ul>
      </div>

      <h2>Who Are the Final Chapter MC in GTA 6?</h2>
      <p>
        The <strong>Final Chapter MC</strong> is an outlaw motorcycle club based in Ambrosia, one of the rural counties in the fictional state of Leonida. Rockstar hasn&apos;t published a character bio for them yet, but their look does the talking: matte-black leather cuts, a grinning winged skull, and a classic three-piece patch that marks them as a serious one-percenter club rather than a weekend riding group.
      </p>
      <p>
        Read the rockers on their backs and the structure is obvious. The top rocker says <strong>&quot;Final Chapter,&quot;</strong> the center holds the death&apos;s-head club logo, and the bottom rocker reads <strong>&quot;Ambrosia&quot;</strong> — the charter&apos;s home territory. That three-piece layout is real outlaw-MC shorthand, and it tells you this crew claims land and defends it.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/gta-6-biker-gang-final-chapter-mc.webp"
          alt="GTA 6 Final Chapter MC members riding in formation past the Ambrosia County Sheriff's Office wearing winged-skull cuts with Ambrosia bottom rockers"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          The Final Chapter MC riding through Ambrosia — tap to zoom in on the three-piece cut patches. (Official Rockstar Games GTA 6 screenshot.)
        </div>
      </div>

      <h2>What Do the Final Chapter MC Patches and Roles Mean?</h2>
      <p>
        Biker clubs run on hierarchy, and GTA 6 leans into that detail. One close-up shows a heavyset, bearded member wearing an <strong>&quot;Enforcer&quot;</strong> patch — the club officer who handles muscle, protection, and discipline. He&apos;s also sporting a <em>Liberty City Cycles</em> cap, a nod to the East Coast that ties neatly into <Link href="/story/lucia/">Lucia&apos;s Liberty City roots</Link>.
      </p>
      <p>
        If the Final Chapter MC follows standard club structure — and their colors suggest they do — expect a familiar chain of command. Here are the roles that typically define an outlaw MC:
      </p>

      <div className="mc-grid">
        <div className="mc-card">
          <span className="mc-card-title">President</span>
          <p className="mc-card-desc">The club leader who calls the shots, sets the agenda, and answers for the charter.</p>
        </div>
        <div className="mc-card">
          <span className="mc-card-title">Vice President</span>
          <p className="mc-card-desc">Second in command and the President&apos;s right hand, ready to step up when needed.</p>
        </div>
        <div className="mc-card">
          <span className="mc-card-title">Enforcer / Sergeant-at-Arms</span>
          <p className="mc-card-desc">The muscle — confirmed on screen in GTA 6 — who protects members and enforces club law.</p>
        </div>
        <div className="mc-card">
          <span className="mc-card-title">Road Captain</span>
          <p className="mc-card-desc">Plans routes and keeps the pack tight and safe on every run.</p>
        </div>
        <div className="mc-card">
          <span className="mc-card-title">Prospect</span>
          <p className="mc-card-desc">A member-in-waiting earning full colors by proving loyalty to the patch.</p>
        </div>
        <div className="mc-card">
          <span className="mc-card-title">Old Lady</span>
          <p className="mc-card-desc">A member&apos;s partner inside the club&apos;s world — several ride alongside the crew in the footage.</p>
        </div>
      </div>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/gta-6-final-chapter-mc-enforcer.webp"
          alt="GTA 6 Final Chapter MC Enforcer, a bearded biker in a Liberty City Cycles cap holding a revolver beside a tattooed club member"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          A Final Chapter MC &quot;Enforcer&quot; in a Liberty City Cycles cap — the club&apos;s muscle. (Official Rockstar Games GTA 6 screenshot.)
        </div>
      </div>

      <h2>Where Is the Final Chapter MC Based? Ambrosia Territory</h2>
      <p>
        The club&apos;s bottom rocker names their home: <strong>Ambrosia</strong>. It&apos;s a working-class corner of Leonida built around a sprawling oil refinery, farm fields, power lines, and swamp — the kind of overlooked, blue-collar county where an outlaw MC thrives far from the neon of <Link href="/map/vice-city/">Vice City</Link>.
      </p>
      <p>
        Think of it as GTA 6&apos;s answer to Blaine County. The refinery smokestacks, controlled crop burns, and long empty highways give the Final Chapter room to run guns, move product, and stay off the radar of the Ambrosia County Sheriff. You can scout the full area in our <Link href="/map/ambrosia/">GTA 6 Ambrosia location guide</Link>.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', margin: '24px 0' }}>
        <div className={styles.featureImageContainer} style={{ margin: 0 }}>
          <Image
            src="/images/news/gta-6-ambrosia-refinery-skyline.webp"
            alt="GTA 6 Ambrosia refinery skyline at night with lit smokestacks, wetlands, and highway traffic in Leonida"
            width={720}
            height={405}
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.featureImage}
          />
          <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '6px', fontFamily: 'var(--font-ui), sans-serif' }}>
            Ambrosia&apos;s refinery skyline — the club&apos;s industrial backyard.
          </div>
        </div>
        <div className={styles.featureImageContainer} style={{ margin: 0 }}>
          <Image
            src="/images/news/gta-6-ambrosia-leonida-countryside.webp"
            alt="GTA 6 Ambrosia countryside at sunset with farm fields, a controlled burn, power pylons, and a distant refinery in Leonida"
            width={720}
            height={405}
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.featureImage}
          />
          <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '6px', fontFamily: 'var(--font-ui), sans-serif' }}>
            Rural Leonida farmland — open roads made for a pack run.
          </div>
        </div>
      </div>

      <h2>Final Chapter MC vs The Lost MC: How Do They Compare?</h2>
      <p>
        Longtime fans will feel the echo instantly. The <strong>Final Chapter MC</strong> steps into the role held by <strong>The Lost MC</strong>, the outlaw club from <em>GTA IV: The Lost and Damned</em> and <em>GTA V</em>. The Lost gave us Johnny Klebitz and a full biker campaign, so a fresh club in GTA 6 is a natural evolution, not a repeat.
      </p>

      <div className="mc-table-wrap">
        <table className="mc-table">
          <thead>
            <tr>
              <th>Detail</th>
              <th>Final Chapter MC (GTA 6)</th>
              <th>The Lost MC (GTA IV / V)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Game</strong></td>
              <td>Grand Theft Auto VI (2026)</td>
              <td>GTA IV: The Lost and Damned / GTA V</td>
            </tr>
            <tr>
              <td><strong>Home Turf</strong></td>
              <td>Ambrosia, Leonida</td>
              <td>Alderney &amp; Blaine County</td>
            </tr>
            <tr>
              <td><strong>Colors</strong></td>
              <td>Winged skull, black cuts</td>
              <td>Skull &amp; cross, dark cuts</td>
            </tr>
            <tr>
              <td><strong>Known Officer</strong></td>
              <td>Enforcer (confirmed on screen)</td>
              <td>Johnny Klebitz (VP / President)</td>
            </tr>
            <tr>
              <td><strong>Playable Biker Story</strong></td>
              <td>❓ Unconfirmed</td>
              <td>✅ Yes (The Lost and Damned)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Are the Final Chapter MC Tied to Jason and Lucia&apos;s Story?</h2>
      <p>
        This is where we separate fact from theory. Rockstar has confirmed the club exists on the map, but it has <strong>not</strong> confirmed whether the Final Chapter MC are allies, enemies, or business partners in the main campaign. Anyone claiming a locked-in storyline is guessing.
      </p>
      <p>
        The reasonable read is that they&apos;re part of Leonida&apos;s criminal ecosystem. <Link href="/story/jason/">Jason Duval</Link> already has a history running with Keys drug crews, and a rural gun-running MC fits that underworld cleanly. Until launch, treat any Jason-joins-the-club rumor as fan speculation — we&apos;ll update this guide the moment Rockstar confirms more.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/gta-6-ambrosia-vice-city-car-wash.webp"
          alt="GTA 6 Ambrosia Americana scene with a driver at a patriotic charity car wash in Leonida"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-ui), sans-serif' }}>
          The seedy Americana of Ambrosia — exactly the world an outlaw MC calls home. (Official Rockstar Games GTA 6 screenshot.)
        </div>
      </div>

      <h2>Can You Join a Biker Gang in GTA 6?</h2>
      <p>
        There&apos;s no confirmation yet that you can patch into the Final Chapter MC in the single-player campaign. What we do know is that GTA already has deep biker DNA to build on, so the systems exist in the studio&apos;s toolkit.
      </p>
      <p>
        <em>GTA Online</em> shipped a full <strong>Bikers</strong> update in 2016 with clubhouses, president roles, and MC businesses. If GTA 6&apos;s online mode expands on that foundation, riding under your own colors is a strong bet down the line. For the bikes themselves, check our <Link href="/vehicles/gta-6-bikes/">GTA 6 bikes and motorcycles list</Link>.
      </p>

      <NewsCTAButton href="/map/ambrosia/">
        Explore the Ambrosia Location Guide
      </NewsCTAButton>

      {/* Key Takeaways for GEO / Generative Engines */}
      <h2>Key Takeaways</h2>
      <ul style={{ paddingLeft: '20px', margin: '16px 0 24px', lineHeight: 1.7 }}>
        <li>The <strong>Final Chapter MC</strong> is the confirmed GTA 6 biker gang, shown in official Rockstar screenshots.</li>
        <li>Their three-piece cut names <strong>Ambrosia</strong>, a rural refinery county in Leonida, as home turf.</li>
        <li>An <strong>Enforcer</strong> officer is visible on screen, pointing to a full club hierarchy.</li>
        <li>They inherit the outlaw-MC role from <strong>The Lost MC</strong> of GTA IV and GTA V.</li>
        <li>Their exact story role and any playable biker content stay <strong>unconfirmed</strong> until the November 19, 2026 launch.</li>
      </ul>

      <p>
        Want more confirmed factions and faces before launch? Dig into our full <Link href="/story/gta-6-characters/">GTA 6 characters guide</Link>, map every district on the <Link href="/map/">interactive Leonida map hub</Link>, or keep up with the latest drops in the <Link href="/news/">GTA 6 news feed</Link>.
      </p>

      {/* FAQs Section — classNames match the FAQ schema parser */}
      <div className={styles.faqSection}>
        <h2>Frequently Asked Questions: GTA 6 Biker Gang</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>What is the biker gang in GTA 6 called?</h3>
          <p className={styles.faqAnswer}>
            The biker gang shown in official GTA 6 media is the Final Chapter MC. It&apos;s an outlaw motorcycle club based in Ambrosia, a rural county in the state of Leonida.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>What is the Final Chapter MC in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            The Final Chapter MC is a one-percenter motorcycle club with a winged-skull three-piece patch. The top rocker reads &quot;Final Chapter&quot; and the bottom rocker reads &quot;Ambrosia,&quot; marking their home territory.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Where is the Final Chapter MC based in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            They are based in Ambrosia, a blue-collar refinery-and-farmland county in Leonida. Its open highways, swamps, and industrial sprawl make it ideal outlaw-biker territory, similar to Blaine County in GTA 5.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Is the Final Chapter MC the same as The Lost MC?</h3>
          <p className={styles.faqAnswer}>
            No. The Final Chapter MC is a brand-new club for GTA 6, but it fills the same outlaw-motorcycle-club role that The Lost MC held in GTA IV: The Lost and Damned and GTA V.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Can you join a biker gang in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Rockstar has not confirmed whether you can join the Final Chapter MC in the story. GTA Online previously added full biker clubs in its 2016 Bikers update, so member-owned MCs may return in GTA 6&apos;s online mode.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Are the Final Chapter MC connected to Jason and Lucia?</h3>
          <p className={styles.faqAnswer}>
            A direct story connection is not confirmed. Jason Duval&apos;s background with Leonida Keys drug crews fits the biker underworld, but any claim that he joins or works with the club is currently fan speculation.
          </p>
        </div>
      </div>
    </ImageLightbox>
  )
};
