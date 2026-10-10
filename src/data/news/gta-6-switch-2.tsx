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

export const gta6Switch2: ArticleData = {
  title: 'Nintendo President Won’t Rule Out GTA 6 on Switch 2',
  metaDescription: 'Nintendo of America president Devon Pritchard told Variety a GTA 6 Switch 2 port is Take-Two and Rockstar’s call, declining to rule one out.',
  focusKeyword: 'gta 6 switch 2',
  h1: 'Nintendo President Won’t Rule Out GTA 6 on Switch 2',
  publishedDate: 'October 10, 2026',
  modifiedDate: 'October 10, 2026',
  author: 'Editorial Staff',
  featureImage: '/images/news/gta-6-switch-2-featured.webp',
  featureImageAlt: 'A Nintendo Switch 2 style handheld console displaying a neon-lit tropical city, photorealistic editorial photo',
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
        .news-cta-btn:active {
          background: linear-gradient(135deg, #2d1160, #b91e5c);
          box-shadow: 0 5px 14px rgba(214, 36, 110, 0.35);
          transform: translateY(-1px);
        }
        .fw-flag { display: inline-block; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; padding: 2px 10px; border-radius: 20px; margin-bottom: 0.5rem; }
        .fw-flag.confirmed { background: #dcfce7; color: #166534; }
        .fw-flag.reported { background: #fef3c7; color: #92400e; }
        .fw-quote { border-left: 3px solid #d6246e; padding: 0.25rem 0 0.25rem 1rem; margin: 1rem 0; font-style: italic; color: #334155; }
        .fw-quote cite { display: block; margin-top: 0.4rem; font-style: normal; font-size: 0.85rem; color: #64748b; }
        .img-credit { font-size: 0.8rem; color: #64748b; margin-top: 0.35rem; margin-bottom: 1.25rem; }
      `}} />

      <p>
        <span className="fw-flag confirmed">Confirmed</span> Nintendo of America president Devon Pritchard has declined to rule out Grand Theft Auto 6 coming to the Nintendo Switch 2. Asked about a possible port in a new interview with Variety, published October 9, 2026, she said the decision sits with Take-Two Interactive and Rockstar Games, and added that Nintendo has nothing to announce on its end right now.
      </p>
      <div className="fw-quote">
        "That’s going to be a conversation for Take Two and Rockstar, but nothing to announce on my end at this time."
        <cite>Devon Pritchard, president of Nintendo of America, speaking to Variety</cite>
      </div>
      <p>
        The interview was conducted for the upcoming Legend of Zelda live-action movie, and the GTA 6 question was a brief part of a wider conversation. But it is the first time Nintendo's leadership has addressed the Switch 2 question on the record, and the wording matters: she did not say no.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Answer: GTA 6 on Switch 2</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>What happened:</strong> Nintendo of America president Devon Pritchard told Variety that a GTA 6 Switch 2 port would be Take-Two and Rockstar's call, with nothing to announce.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>The takeaway:</strong> She did not confirm a port, but she did not rule one out either. The door stays open.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Launch reality:</strong> GTA 6 arrives November 19, 2026 on PS5, PS5 Pro, Xbox Series X and Series S. No Switch 2 or PC version has been announced.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Why it matters:</strong> Switch 2 is the only current console without GTA 6 on its launch lineup, and Nintendo's hardware has hosted Rockstar titles before.</span>
          </li>
        </ul>
      </div>

      <h2>Key takeaways</h2>
      <ul>
        <li>Devon Pritchard, Nintendo of America president, addressed GTA 6 on Switch 2 in a Variety interview published October 9, 2026.</li>
        <li>She said a port would be "a conversation for Take Two and Rockstar," declining to confirm or deny anything.</li>
        <li>Nintendo confirmed it has nothing to announce on a Switch 2 version right now.</li>
        <li>She also made clear Nintendo welcomes mature games, saying the company is "for ages 5 to 95."</li>
        <li>GTA 6 launches November 19, 2026 on PS5, PS5 Pro, Xbox Series X and Series S, with no Switch 2 or PC date announced.</li>
      </ul>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/news/gta-6-switch-2-featured.webp"
          alt="A Nintendo Switch 2 style handheld console displaying a neon-lit tropical city, photorealistic editorial photo"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 840px"
          className={styles.featureImage}
        />
      </div>
      <p className="img-credit">Image: AI-generated editorial photo for gtavispot.com</p>

      <h2>What did Nintendo's president actually say about GTA 6?</h2>
      <p>
        <span className="fw-flag confirmed">Confirmed</span> Pritchard was direct about where the decision sits. A Switch 2 port is not Nintendo's to announce, so the answer was a clean pass to the publisher. This matches how platform holders normally talk about third-party releases: the publisher decides where its game ships, and the console maker never announces on its behalf.
      </p>
      <p>
        That said, this is the closest thing to an official statement Nintendo has given on the topic, and the framing is deliberate. A flat no would have killed the conversation. Instead, Switch 2 owners got a non-denial from the top of Nintendo of America, which is why the interview made headlines across the gaming press within hours.
      </p>

      <NewsCTAButton href="/news/gta-6-release-date/">GTA 6 release date: everything confirmed for November 19</NewsCTAButton>

      <h2>Which platforms is GTA 6 launching on?</h2>
      <p>
        Rockstar's launch lineup has not changed since the game was moved to November 2026. GTA 6 releases on November 19, 2026 for PlayStation 5, PlayStation 5 Pro, Xbox Series X and Xbox Series S. Neither a PC version nor a Nintendo Switch 2 version appears anywhere on that lineup.
      </p>
      <p>
        That leaves the Switch 2 as the only current console without Grand Theft Auto 6 at launch, and the only one where the question has now been put directly to its leadership. <Link href="/news/gta-6-pc-release-date/">PC players are in the same waiting room</Link>, with no date announced there either.
      </p>

      <h2>Has Rockstar released GTA games on Nintendo consoles before?</h2>
      <p>
        <span className="fw-flag confirmed">Confirmed</span> Yes, several. Nintendo's hardware has a real Rockstar track record: L.A. Noire and Grand Theft Auto: The Trilogy, The Definitive Edition both released on the original Nintendo Switch, and Red Dead Redemption has appeared there as well. Rockstar's relationship with Nintendo is established, which is part of why the Switch 2 question keeps coming up.
      </p>
      <p>
        The counterpoint is GTA 5 itself. The best-selling game in the series has never been ported to any Nintendo hardware, and neither has Red Dead Redemption 2, despite both coming to last-generation PlayStation and Xbox machines. Ports of Rockstar's biggest open worlds are never automatic.
      </p>
      <p>
        <span className="fw-flag reported">Reported</span> There is industry appetite for more. Virtuous, the studio that ported L.A. Noire to the original Switch, has said its team is eager to bring Grand Theft Auto 5 and Red Dead Redemption 2 to the Switch 2, according to Pocket Tactics. That is ambition, not a contract, but it shows porting houses see the hardware as capable.
      </p>

      <h2>Does Nintendo even want mature games like GTA 6?</h2>
      <p>
        <span className="fw-flag confirmed">Confirmed</span> Pritchard addressed that directly too. She told Variety that Nintendo is "for ages 5 to 95," and that the company wants a diversity of experiences on the system. In practice, this means a GTA 6 port would face no philosophical objection from Nintendo. If Rockstar chose to bring the game over, the door at Nintendo's end is open.
      </p>
      <p>
        That matters because GTA 6 carries an M-rated, adults-only tone that some casual observers assume clashes with Nintendo's image. The company's president has now gone on the record saying the opposite: mature titles for older audiences are welcome in the ecosystem.
      </p>

      <h2>When could a GTA 6 Switch 2 port realistically be announced?</h2>
      <p>
        Nothing suggests an announcement is close. Rockstar is fully focused on the November 19 console launch, and Take-Two has given no hint of a Nintendo version. History suggests that if a port ever comes, it would follow well after launch: Rockstar's PC versions typically arrive a year or more behind console, and a Switch 2 adaptation of a game this technically demanding would face an even longer path.
      </p>
      <p>
        The technical question is real. The footage Rockstar has shown suggests a game that will need significant work to run on Nintendo's hardware, and no one outside Rockstar knows what that work would look like. For now, the honest answer to "is GTA 6 coming to Switch 2" remains the one Pritchard gave: ask Take-Two and Rockstar, and stay tuned.
      </p>

      <div className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Is GTA 6 coming to Nintendo Switch 2?</h3>
          <p className={styles.faqAnswer}>
            No version has been announced. Nintendo of America president Devon Pritchard said in an October 2026 Variety interview that a Switch 2 port would be a decision for Take-Two and Rockstar, with nothing to announce. She did not rule one out.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>What did Nintendo's president say about GTA 6 on Switch 2?</h3>
          <p className={styles.faqAnswer}>
            Asked whether GTA 6 could release on Switch 2, Devon Pritchard told Variety: "That’s going to be a conversation for Take Two and Rockstar, but nothing to announce on my end at this time." She neither confirmed nor denied a port.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Which platforms will GTA 6 launch on?</h3>
          <p className={styles.faqAnswer}>
            GTA 6 launches November 19, 2026 on PlayStation 5, PlayStation 5 Pro, Xbox Series X and Xbox Series S. Rockstar has not announced a PC version or a Nintendo Switch 2 version.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Has GTA ever been on a Nintendo console?</h3>
          <p className={styles.faqAnswer}>
            Yes. L.A. Noire and Grand Theft Auto: The Trilogy, The Definitive Edition both released on the original Nintendo Switch, along with Red Dead Redemption. However, GTA 5 itself has never been ported to Nintendo hardware.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Would Nintendo allow a mature game like GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Nintendo of America president Devon Pritchard said the company is "for ages 5 to 95" and wants a diversity of experiences on the system, making clear that mature titles are welcome. A GTA 6 port would face no philosophical objection from Nintendo.
          </p>
        </div>
      </div>

      <p><em>Last checked: October 10, 2026. Sources: <a href="https://kotaku.com/will-gta-6-ever-come-to-switch-2-nintendo-of-america-president-says-go-ask-rockstar-2000743283" target="_blank" rel="noopener noreferrer">Kotaku</a>, <a href="https://www.nintendolife.com/news/2026/10/nintendo-of-americas-president-comments-on-the-possibility-of-gta-6-on-switch-2" target="_blank" rel="noopener noreferrer">Nintendo Life</a>, <a href="https://www.talkesport.com/news/gta-6-switch-2-nintendo-pritchard-rockstar/" target="_blank" rel="noopener noreferrer">TalkEsport</a>, <a href="https://comicbook.com/gaming/news/gta-6-nintendo-switch-2-release-boss-response/" target="_blank" rel="noopener noreferrer">ComicBook.com</a>. Original interview: Variety.</em></p>
    </ImageLightbox>
  ),
};
