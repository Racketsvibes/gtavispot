import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImageLightbox from '@/components/ui/ImageLightbox';
import HeatViceCityCountdown from '@/components/HeatViceCityCountdown';
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

export const miamiHeatViceCityNight: ArticleData = {
  title: 'Miami Heat Vice City Night: GTA 6 Event Guide',
  metaDescription: "The Miami Heat become Vice City on Nov 18 in a Rockstar partnership before GTA 6 launches. Court, jerseys, tickets, merch, and the countdown, all here.",
  focusKeyword: 'miami heat vice city night',
  h1: 'Miami Heat Vice City Night: GTA 6 Event Guide',
  publishedDate: 'October 4, 2026',
  modifiedDate: 'October 4, 2026',
  author: 'Qamar Farooq',
  featureImage: '/images/news/kaseya-center-vice-city-rooftop.webp',
  featureImageAlt: 'Kaseya Center rooftop with Welcome to Vice City neon sign, Miami Heat',
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
        .heat-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin: 1.5rem 0; }
        .heat-card { display: block; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
        .heat-card-body { padding: 1rem 1.1rem 1.2rem; }
        .heat-card-body h3 { margin: 0 0 0.4rem; font-size: 1.02rem; }
        .heat-card-body p { margin: 0; font-size: 0.93rem; color: #475569; line-height: 1.55; }
        .heat-quick { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1rem 1.25rem; margin: 1.25rem 0; }
        .heat-quick ul { margin: 0.5rem 0 0; padding-left: 1.2rem; }
        .heat-quick li { margin-bottom: 0.35rem; }
        .heat-table { width: 100%; border-collapse: collapse; margin: 1.25rem 0; font-size: 0.95rem; }
        .heat-table th, .heat-table td { border: 1px solid #e2e8f0; padding: 0.6rem 0.8rem; text-align: left; vertical-align: top; }
        .heat-table th { background: #f1f5f9; width: 34%; font-weight: 700; }
        .heat-merch { margin: 1.25rem 0; padding-left: 1.2rem; }
        .heat-merch li { margin-bottom: 0.45rem; }
        .heat-faq h3 { margin-top: 1.25rem; margin-bottom: 0.35rem; font-size: 1.05rem; }
        .heat-faq p { margin-top: 0; }
        .heat-caption { font-size: 0.82rem; color: #64748b; margin-top: 0.35rem; }
      `}} />

      <p>The Miami Heat will take the floor as <strong>"Vice City" on November 18, 2026</strong>, hosting the Milwaukee Bucks at Kaseya Center in an official partnership with Rockstar Games. It happens one night before GTA 6 launches on November 19. Here is everything confirmed about the game, the theme, the tickets, and the merch.</p>

      <div className="heat-quick">
        <strong>Quick answers</strong>
        <ul>
          <li><strong>What:</strong> Heat vs Bucks, branded "A Night in Vice City"</li>
          <li><strong>When:</strong> Wednesday, November 18, 2026, 7:00 PM ET</li>
          <li><strong>Where:</strong> Kaseya Center, Miami; national TV on ESPN</li>
          <li><strong>Why:</strong> official Rockstar Games partnership, one night before the <Link href="/news/gta-6-release-date/">GTA 6 release date</Link></li>
        </ul>
      </div>

      <HeatViceCityCountdown />

      <h2>What is A Night in Vice City?</h2>
      <p>The Heat announced the event on October 2, 2026 as a <strong>historic partnership with Rockstar Games</strong>. For one night only, the team plays under the Vice City name with a themed court, new uniforms, and special in-arena programming. It is the biggest real-world GTA 6 crossover confirmed so far.</p>
      <p>The buildup started a day earlier. On October 1, a neon "Welcome to Vice City" sign lit up on the arena rooftop, and the city around it is joining in. Miami Beach voted to put "VI" branding on beach chairs and umbrellas from October 15 through December 31.</p>

      <figure>
        <Image src="/images/news/miami-heat-vice-city-arena.webp" alt="Miami Heat A Night in Vice City, Kaseya Center aerial with neon Vice City sign" width={1000} height={666} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
        <figcaption className="heat-caption">Kaseya Center dressed for A Night in Vice City, with the neon rooftop sign leading the takeover.</figcaption>
      </figure>

      <h2>When and where is the game?</h2>
      <table className="heat-table">
        <tbody>
          <tr><th>Date</th><td>Wednesday, November 18, 2026</td></tr>
          <tr><th>Matchup</th><td>Milwaukee Bucks vs. Vice City (Miami Heat)</td></tr>
          <tr><th>Tip-off</th><td>7:00 PM ET</td></tr>
          <tr><th>Venue</th><td>Kaseya Center, Miami, Florida</td></tr>
          <tr><th>TV</th><td>ESPN (national), WPLG Local 10 (South Florida)</td></tr>
          <tr><th>Radio</th><td>104.3 WQAM</td></tr>
          <tr><th>Announced</th><td>October 2, 2026</td></tr>
        </tbody>
      </table>
      <p>Ticketmaster lists the game under the title <strong>"Milwaukee vs. Vice City"</strong>, which tells you how fully the Heat are committing to the theme. If you cannot be in the building, ESPN has the national broadcast.</p>

      <h2>What will the Vice City theme include?</h2>
      <div className="heat-cards">
        <div className="heat-card">
          <div className="heat-card-body">
            <h3>Special hardwood court</h3>
            <p>A one-night-only Vice City court design takes over Kaseya Center. The Heat have only released stylized promo art so far, so the real design is still under wraps.</p>
          </div>
        </div>
        <div className="heat-card">
          <div className="heat-card-body">
            <h3>New uniforms</h3>
            <p>The team will wear a <strong>never previously worn</strong> uniform, shown only as a "Classified Jersey" silhouette. Fans can sign up for the "Uniform Drop" to see it first. These are not the old pink and blue Vice jerseys.</p>
          </div>
        </div>
        <div className="heat-card">
          <div className="heat-card-body">
            <h3>In-arena activations</h3>
            <p>Expect unique game programming and live Vice City elements all night. Related in-arena activities begin on Opening Night (October 21 vs the Timberwolves), with a full activation guide coming at HEAT.com/ViceCity.</p>
          </div>
        </div>
        <div className="heat-card">
          <div className="heat-card-body">
            <h3>Merch collection</h3>
            <p>The 14-piece Court Culture Vice City Collection went on sale October 2 at Miami Heat Stores and MiamiHeatStore.com. Tees and crops run $45 to $55, hoodies are $100, and some items are already selling out.</p>
          </div>
        </div>
      </div>

      <figure>
        <Image src="/images/Places/Vice City/Vice_City_03.webp" alt="GTA 6 Vice City daytime cityscape with a street basketball court" width={1200} height={675} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
        <figcaption className="heat-caption">GTA 6's Vice City, the neon-soaked setting the Heat are celebrating on November 18.</figcaption>
      </figure>

      <h2>What merch is available and what does it cost?</h2>
      <p>The <strong>14-piece Court Culture Vice City Collection</strong> launched October 2 at Miami Heat Stores and online at MiamiHeatStore.com. Confirmed prices from the live store:</p>
      <ul className="heat-merch">
        <li>Tees and crop tops: <strong>$45 to $55</strong></li>
        <li>Hoodie: <strong>$100</strong></li>
        <li>Duvin crewneck (collab piece): <strong>$110</strong></li>
        <li>New Era caps: <strong>$48 to $50</strong> (4 Duvin collab pieces in the drop)</li>
      </ul>
      <p>Some items are reportedly selling out already, so if you want something for game night, do not wait. Note this is separate from Rockstar's own $399.99 Vice City Collection Collector's Box.</p>

      <h2>How do I get tickets?</h2>
      <p>Tickets are <strong>on sale now</strong> through HEAT.com/Tickets, which routes to Ticketmaster. Reported face values run roughly $70 to $500, with resale listings starting near $57 on SeatGeek. Prices are already elevated compared to the November 16 game against the Rockets, so the Vice City theme is clearly driving demand.</p>
      <p>No special Vice City ticket packages have been announced. If you are buying resale, double check the listing says the November 18 Bucks game before you pay.</p>

      <NewsCTAButton href="https://www.ticketmaster.com" isExternal>Check Heat tickets on Ticketmaster</NewsCTAButton>

      <h2>Is Giannis really playing against his old team?</h2>
      <p>Multiple outlets including USA Today, Yahoo Sports, and Hot Hot Hoops report that <strong>Giannis Antetokounmpo is now on the Heat</strong> after a summer blockbuster trade that reportedly sent Tyler Herro, Jaime Jaquez Jr., Kel'el Ware, and Kasparas Jakucionis to Milwaukee. If that holds, November 18 would be his first game against the team that drafted him. Treat this as reported until it is confirmed by official team transactions.</p>
      <p>The storyline writes itself either way. At Media Day, Steven Adams joked that players will be playing GTA VI instead of studying film, which sums up the week in Miami pretty well.</p>

      <figure>
        <Image src="/images/Places/Vice City/Vice_City_08.webp" alt="GTA 6 Vice City arena district at night with neon lights" width={1200} height={675} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
        <figcaption className="heat-caption">The arena district at night in GTA 6's Vice City. On November 18, the real Kaseya Center gets the same treatment.</figcaption>
      </figure>

      <h2>How is Miami turning into Vice City?</h2>
      <p>The game is only the centerpiece. The neon "Welcome to Vice City" rooftop sign lit up October 1 under a roughly $975K deal with Miami-Dade, which owns the arena. Miami Beach commissioners voted 4-3 to brand beach chairs and umbrellas with "VI" from October 15 through December 31. Proposals to rebrand the airport and trains have not been approved.</p>
      <p>Rockstar itself has not posted about the partnership on its own Newswire, and the deal value is undisclosed. Still, an official Heat x Rockstar night one day before launch is the clearest sign yet that <Link href="/news/gta-6-game-informer-cover-story/">GTA 6 launch week</Link> will take over Miami.</p>

      <div className="heat-faq">
        <h2>Frequently Asked Questions</h2>

        <h3>When is A Night in Vice City?</h3>
        <p>Wednesday, November 18, 2026. The Miami Heat host the Milwaukee Bucks at Kaseya Center with tip-off at 7:00 PM ET, one night before GTA 6 launches.</p>

        <h3>What channel is the Heat Vice City game on?</h3>
        <p>ESPN carries it nationally, WPLG Local 10 covers South Florida, and 104.3 WQAM has the radio call.</p>

        <h3>Will the Heat wear Vice City jerseys?</h3>
        <p>Yes, but they are brand new. The team will wear a never previously worn uniform shown only as a "Classified Jersey" silhouette, not the old pink and blue Vice jerseys. Sign up for the "Uniform Drop" for the reveal.</p>

        <h3>How much are tickets for the Vice City game?</h3>
        <p>Reported face values run roughly $70 to $500 via HEAT.com/Tickets and Ticketmaster, with resale from around $57. Prices are already higher than surrounding games.</p>

        <h3>Is Rockstar Games involved in the event?</h3>
        <p>Yes. The Heat announced it as an official partnership with Rockstar Games on October 2, 2026, though Rockstar has not posted about it on its own Newswire and the deal value is undisclosed.</p>
      </div>

      <p>Going to the game or watching from home? Check our <Link href="/guides/gta-6-preload-and-release-times/">GTA 6 pre-load and release times guide</Link> so you are ready the second the clock hits launch night.</p>
    </ImageLightbox>
  ),
};
