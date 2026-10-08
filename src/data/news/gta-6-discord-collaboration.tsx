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

export const gta6DiscordCollaboration: ArticleData = {
  title: 'GTA 6 Discord Event Leaked: Theme, Quest and Dates',
  metaDescription: "A Discord datamine reportedly reveals a GTA 6 'Hexagon' campaign starting Nov 17: themed app icon, Vice City theme, custom font and a quest with unknown reward.",
  focusKeyword: 'gta 6 discord collaboration',
  h1: 'GTA 6 Discord Event Leaked: Theme, Quest and Dates',
  publishedDate: 'October 8, 2026',
  modifiedDate: 'October 8, 2026',
  author: 'Editorial Staff',
  featureImage: '/images/news/gta-6-love-magazine-jason-lucia-neon-bar.webp',
  featureImageAlt: 'Jason and Lucia under red neon light in a bar, from the official GTA 6 LOVE Magazine screenshots',
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
        .news-cta-btn span {
          text-decoration: none !important;
        }
        .news-cta-btn:hover {
          background: linear-gradient(135deg, #d6246e, #f58634);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(245, 134, 52, 0.4);
        }
        .fw-quick { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1rem 1.25rem; margin: 1.25rem 0; }
        .fw-quick ul { margin: 0.5rem 0 0; padding-left: 1.2rem; }
        .fw-quick li { margin-bottom: 0.35rem; }
        .fw-table { width: 100%; border-collapse: collapse; margin: 1.25rem 0; font-size: 0.95rem; }
        .fw-table th, .fw-table td { border: 1px solid #e2e8f0; padding: 0.6rem 0.8rem; text-align: left; vertical-align: top; }
        .fw-table th { background: #f1f5f9; width: 34%; font-weight: 700; }
        .fw-faq h3 { margin-top: 1.25rem; margin-bottom: 0.35rem; font-size: 1.05rem; }
        .fw-faq p { margin-top: 0; }
        .fw-caption { font-size: 0.82rem; color: #64748b; margin-top: 0.35rem; }
        .fw-flag { display: inline-block; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; padding: 2px 10px; border-radius: 20px; margin-bottom: 0.5rem; }
        .fw-flag.confirmed { background: #dcfce7; color: #166534; }
        .fw-flag.reported { background: #fef3c7; color: #92400e; }
        .fw-quote { border-left: 3px solid #d6246e; padding: 0.25rem 0 0.25rem 1rem; margin: 1rem 0; font-style: italic; color: #334155; }
        .fw-quote cite { display: block; margin-top: 0.4rem; font-style: normal; font-size: 0.85rem; color: #64748b; }
      `}} />

      <p><span className="fw-flag reported">Reported</span> Discord dataminer Wumpus Central says references to a GTA 6 collaboration were found inside the latest Discord build. According to the findings, Discord is preparing a limited-time promotional event codenamed "Hexagon" built around Grand Theft Auto VI, with a themed app icon, a Vice City style app theme, a custom display name font, and possibly a quest with an unknown reward.</p>

      <div className="fw-quick">
        <strong>Quick answers</strong>
        <ul>
          <li><span className="fw-flag reported">Reported</span> Wumpus Central found a GTA VI x Discord campaign, codenamed "Hexagon", in Discord's latest build.</li>
          <li><span className="fw-flag reported">Reported</span> The campaign reportedly starts November 17, 2026 at 18:00 UTC, two days before the game's November 19 launch.</li>
          <li><span className="fw-flag reported">Reported</span> It ends December 8, 2026 for free users and runs until February 15, 2027 for Nitro subscribers.</li>
          <li><span className="fw-flag reported">Reported</span> Neither Discord nor Rockstar has officially confirmed the collaboration. Treat all details as reported, not confirmed.</li>
        </ul>
      </div>

      <h2>Key takeaways</h2>
      <ul>
        <li>Discord dataminer Wumpus Central reports finding a GTA VI x Discord promotional campaign, codenamed "Hexagon", inside Discord's latest build.</li>
        <li>The reported contents: a GTA VI themed app icon, a Vice City gradient app theme, a GTA VI style custom display name font, and possibly a quest with an unknown reward.</li>
        <li>Dates found in the code: the campaign starts November 17, 2026 (18:00 UTC), ends December 8, 2026 for free users, and runs until February 15, 2027 for Nitro subscribers.</li>
        <li>Nothing is officially confirmed by Discord or Rockstar, but multiple outlets (Insider Gaming, 80.lv, AltChar, RockstarINTEL) are reporting the same datamine.</li>
      </ul>

      <h2>What did the Discord datamine actually find?</h2>
      <p><span className="fw-flag reported">Reported</span> Wumpus Central, a well known Discord dataminer, shared the findings on social media on October 6, 2026. The references were found in Discord's code, not in any Rockstar file, which means the campaign is Discord's side of a collaboration rather than something hidden in the game itself.</p>
      <table className="fw-table">
        <tbody>
          <tr><th>Found in the code</th><td><strong>Reported detail</strong></td></tr>
          <tr><th>Codename</th><td>"Hexagon", the internal name for the limited-time event.</td></tr>
          <tr><th>App icon</th><td>A GTA VI themed Discord app icon.</td></tr>
          <tr><th>App theme</th><td>A Vice City gradient theme for the Discord app, shown in a leaked desktop screenshot.</td></tr>
          <tr><th>Display name font</th><td>A custom GTA VI style font for display names.</td></tr>
          <tr><th>Quest</th><td>A quest entry exists, but the reward is unknown.</td></tr>
          <tr><th>Official confirmation</th><td>None from Discord or Rockstar Games.</td></tr>
        </tbody>
      </table>
      <p>The leaked preview image of the desktop theme shows Discord dressed in the pink, yellow and neon colors associated with Vice City. That visual match, plus the specific campaign dates, is why outlets are treating this as a genuine find rather than a mockup.</p>

      <h2>When does the GTA 6 Discord campaign start and end?</h2>
      <p><span className="fw-flag reported">Reported</span> The code contains exact dates and times for the campaign:</p>
      <ul>
        <li><strong>Starts:</strong> November 17, 2026 at 18:00 UTC</li>
        <li><strong>Ends for free users:</strong> December 8, 2026</li>
        <li><strong>Ends for Nitro subscribers:</strong> February 15, 2027</li>
      </ul>
      <p>The timing is deliberate. The campaign begins two days before GTA 6 launches on <Link href="/news/gta-6-release-date/">November 19, 2026</Link>, putting the Discord takeover right in the middle of launch week. Free users get about three weeks of the theme, while Nitro subscribers can keep it through mid February. That split is a classic Discord move: a cosmetic reward tied to the paid tier.</p>

      <NewsCTAButton href="/news/gta-6-release-date/">GTA 6 release date: everything confirmed so far</NewsCTAButton>

      <h2>What is a Discord Quest, and what could the GTA 6 reward be?</h2>
      <p>Discord Quests are the platform's rewarded marketing format. Users complete a task, usually playing a game or watching a stream, and earn a reward such as cosmetics, in app currency, or subscription credit. The reported GTA 6 campaign includes a quest entry, but the reward is listed as unknown.</p>
      <p>It is tempting to read an in game reward into this, but there is no evidence of one. Rockstar has previously used Discord for Nitro trials and GTA Online cash, so the realistic range runs from a GTA 6 themed profile cosmetic to shop currency like Discord Orbs. Anything beyond that is speculation. What matters is that the quest exists in the code at all, because it turns the campaign from a simple theme drop into an engagement event.</p>

      <h2>Is the GTA 6 x Discord collaboration officially confirmed?</h2>
      <p><span className="fw-flag reported">Reported</span> No. As of October 8, 2026, neither Discord nor Rockstar Games has announced the collaboration. Everything in this article comes from Wumpus Central's datamine and the outlets reporting it. Datamined campaign references are strong evidence that a promotion is planned, because companies rarely write exact start and end dates into code for fun, but plans can still change before launch.</p>
      <p>One more wrinkle worth knowing: Discord is primarily a PC platform, and GTA 6 is launching as a console only game with <Link href="/news/gta-6-pc-release-date/">no native PC version announced</Link>. A Discord campaign aimed at an audience that cannot play the game on day one is an odd pairing, and it is one more reason to treat the details as reported until either company speaks.</p>

      <h2>Why is the timing important?</h2>
      <p>The campaign's November 17 start lands it squarely in the biggest marketing week in gaming. GTA 6 launches November 19, 2026, and <Link href="/guides/gta-6-preload-unlock-times/">pre-loading opens a week earlier</Link>, so the entire fortnight is saturated with launch activity. A Discord takeover during that window reaches players exactly where they are coordinating launch night sessions.</p>
      <p>It also fits the pattern of Rockstar's launch marketing. Recent weeks have brought the Game Informer cover story, new screenshots, and the extended gameplay look. A Discord campaign is cheap, high reach marketing that costs Rockstar almost nothing while keeping GTA 6 visible in the feeds of millions of gamers.</p>

      <h2>What has Rockstar done with Discord before?</h2>
      <p>This would not be the first Rockstar and Discord crossover. Watching the GTA VI Trailer 1 reveal inside Discord previously earned users a short Nitro subscription, and Rockstar has offered GTA Online cash to players who connected their accounts. Both were small, safe promotions with real rewards, which is the template the reported "Hexagon" campaign appears to follow: cosmetics and engagement first, no risky promises.</p>
      <p>If the quest reward turns out to be GTA Online cash or Nitro credit again, it would match that history exactly. Anything more ambitious, like an in game GTA 6 item, would be new ground for the two companies.</p>

      <div className="fw-faq">
        <h2>Frequently Asked Questions</h2>

        <h3>When does the GTA 6 Discord campaign start?</h3>
        <p>According to the datamined code, the campaign starts on November 17, 2026 at 18:00 UTC, two days before GTA 6 launches on November 19, 2026. This is reported, not officially confirmed.</p>

        <h3>What do you get in the GTA 6 x Discord collaboration?</h3>
        <p>The reported contents are a GTA VI themed app icon, a Vice City gradient app theme, a GTA VI style custom display name font, and possibly a quest with an unknown reward. Free users keep the theme until December 8, 2026; Nitro subscribers keep it until February 15, 2027.</p>

        <h3>Is the GTA 6 Discord Hexagon campaign real?</h3>
        <p>It is real in the sense that a dataminer found genuine campaign references in Discord's code, and multiple outlets are reporting the same findings. But neither Discord nor Rockstar has officially confirmed it, so treat every detail as reported until an announcement lands.</p>

        <h3>Will there be a GTA 6 Discord Quest reward?</h3>
        <p>The code mentions a quest, but the reward is unknown. Based on past Rockstar and Discord promotions, realistic possibilities include profile cosmetics, Discord shop currency, or a Nitro trial. An in game GTA 6 reward has not been found in the datamine.</p>

        <h3>Is the GTA 6 Discord theme free?</h3>
        <p>The campaign itself appears to be free for all Discord users, but the theme only lasts until December 8, 2026 for free users. Nitro subscribers reportedly keep it until February 15, 2027.</p>

        <h3>How do I get the GTA 6 Discord theme when it launches?</h3>
        <p>There is no official signup yet. When Discord Quests and campaigns go live, they usually appear in the app's Quests tab or as a profile customization option. Keep an eye on Discord's official channels around November 17, 2026.</p>
      </div>

      <p>Bottom line: a reputable Discord dataminer found what looks like a genuine GTA 6 launch campaign, codenamed "Hexagon", inside Discord's code, with exact dates, a Vice City theme, and a quest entry. It is not officially confirmed, but the specificity of the dates makes it the most concrete GTA 6 crossover leak of the week.</p>

      <p><em>Last checked: October 8, 2026. Sources: <a href="https://rockstarintel.com/gta-6-leak-reveals-new-collaboration-with-discord/" target="_blank" rel="noopener noreferrer">RockstarINTEL</a>, <a href="https://insider-gaming.com/gta-6-leak-reveals-limited-time-promotion-discord/" target="_blank" rel="noopener noreferrer">Insider Gaming</a> and <a href="https://80.lv/articles/new-gta-6-leak-hints-at-limited-time-collaboration-with-discord" target="_blank" rel="noopener noreferrer">80.lv</a> on the Wumpus Central datamine.</em></p>
    </ImageLightbox>
  ),
};
