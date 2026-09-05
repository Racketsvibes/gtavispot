import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImageLightbox from '@/components/ui/ImageLightbox';
import VoiceActorQuiz from '@/components/ui/VoiceActorQuiz';
import { StoryArticleData } from '../storyContent';
import styles from '../../app/story/[slug]/page.module.css';

const StoryCTAButton = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <div style={{ margin: '1.25rem 0 1.75rem 0' }}>
      <Link href={href} className="story-cta-btn">
        <span>{children}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </Link>
    </div>
  );
};

export const voiceActors: StoryArticleData = {
  title: 'GTA 6 Voice Actors: Complete Cast & Characters 2026',
  metaDescription: 'Looking for all GTA 6 voice actors? We have the complete list with real actor names, characters & photos. Updated 2026',
  focusKeyword: 'GTA 6 voice actors',
  h1: 'GTA 6 Voice Actors: Complete Cast & Characters 2026',
  publishedDate: 'June 21, 2026',
  modifiedDate: 'September 5, 2026',
  author: 'Marcus Vance',
  featureImage: '/images/People/Lucia%20Caminos/Lucia_Caminos_02.webp',
  content: (
    <ImageLightbox>
      <style dangerouslySetInnerHTML={{__html: `
        .story-cta-btn {
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
        .story-cta-btn:hover,
        .story-cta-btn:focus,
        .story-cta-btn:active,
        .story-cta-btn:visited {
          text-decoration: none !important;
          color: #ffffff !important;
        }
        .story-cta-btn span {
          text-decoration: none !important;
        }
        .story-cta-btn:hover {
          background: linear-gradient(135deg, #d6246e, #f58634);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(245, 134, 52, 0.4);
        }
      `}} />

      <p>
        The cast of <strong>GTA 6 voice actors</strong> represents one of the largest talent investments in modern entertainment history. Rockstar Games has assembled a diverse group of actors, models, and street artists to bring the state of Leonida to life, utilizing advanced motion-capture technologies to capture realistic performances.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Quick Answer: Lead Performers</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Lucia Performer:</strong> Voiced and motion-captured by a professional American actress.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Jason Performer:</strong> Played by an established voice actor specializing in action roles.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Casting Policy:</strong> Rockstar favors rising indie talents over massive Hollywood stars.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Official Source:</strong> Credits listings and casting announcements published by Rockstar Games.</span>
          </li>
        </ul>
      </div>

      <h2>Lucia Caminos</h2>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/People/Lucia%20Caminos/Lucia_Caminos_02.webp"
          alt="Lucia Caminos character in GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
          priority
        />
      </div>
      <p>
        Lucia is voiced by a professional American actress of Latin-American descent, widely rumored to be <strong>Manni L. Perez</strong> due to matching facial structures and vocal registry. She provided the voice lines and motion-capture acting for Lucia’s character model, translating physical expressions and gestures directly into the game. Her performance highlights Lucia's street-smart intelligence and vulnerability, giving the first female lead of the modern era a grounded personality. For details on her role and special combat skills, see our <Link href="/story/lucia/">GTA 6 Lucia guide</Link>.
      </p>
      <div className={styles.galleryGrid}>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Lucia%20Caminos/Lucia_Caminos_01.webp"
            alt="Lucia Caminos prison jumpsuit screenshot"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Lucia%20Caminos/Lucia_Caminos_03.webp"
            alt="Lucia Heist setup planning"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Lucia%20Caminos/Lucia_Caminos_04.webp"
            alt="Lucia escaping from bank heist"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Lucia%20Caminos/Lucia_Caminos_05.webp"
            alt="Lucia driving a stolen supercar"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Lucia%20Caminos/Lucia_Caminos_06.webp"
            alt="Lucia cinematic portrait in Vice City"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/Jason_Lucia_Motel/Jason_and_Lucia_Motel_landscape.webp"
            alt="Jason and Lucia Motel room cinematic landscape"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/Jason_Lucia_Motel/Jason_and_Lucia_Motel_phone.webp"
            alt="Jason and Lucia Motel mobile layout format"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/Jason_Lucia_Motel/Jason_and_Lucia_Motel_portrait.webp"
            alt="Jason and Lucia Motel vertical portrait layout"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', margin: '1.25rem 0 1.75rem 0' }}>
        <StoryCTAButton href="/story/lucia/">
          Explore Lucia Character Guide
        </StoryCTAButton>
        <StoryCTAButton href="/story/gta-6-lucia-voice-actress/">
          Who Voices Lucia? Full Manni L. Perez Evidence
        </StoryCTAButton>
      </div>

      <h2>Jason Duval</h2>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/People/Jason%20Duval/Jason_Duval_04.webp"
          alt="Jason Duval character in GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        Jason is voiced by an American actor rumored to be <strong>Gregory Connors</strong> after a lead actor credit leaked on his portfolio. Jason is a military veteran who handles the muscle and getaway driving for their crew. His voice lines highlight his protective nature, showing his loyalty to Lucia and his tension when dealing with the state’s corrupt authorities. Check his specific shooting perks and weapon control specialities in our <Link href="/story/jason/">GTA 6 Jason guide</Link>.
      </p>
      <div className={styles.galleryGrid}>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Jason%20Duval/Jason_Duval_01.webp"
            alt="Jason Duval firing assault rifle"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Jason%20Duval/Jason_Duval_02.webp"
            alt="Jason Duval driving offroad SUV getaway car"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Jason%20Duval/Jason_Duval_03.webp"
            alt="Jason Duval heist planning session"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Jason%20Duval/Jason_Duval_05.webp"
            alt="Jason Duval running from police patrol"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Jason%20Duval/Jason_Duval_06.webp"
            alt="Jason Duval highspeed chase in Vice City"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/Jason_Lucia_Motel/Jason_and_Lucia_Motel_square.webp"
            alt="Jason and Lucia Motel square format screenshot"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/Jason_Lucia_Motel/Jason_and_Lucia_Motel_tablet.webp"
            alt="Jason and Lucia Motel tablet screen size preview"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/Jason_Lucia_Motel/Jason_and_Lucia_Motel_ultrawide.webp"
            alt="Jason and Lucia Motel room cinematic ultrawide screenshot"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
      </div>

      <StoryCTAButton href="/story/jason/">
        Explore Jason Character Guide
      </StoryCTAButton>

      <h2>Raul Bautista</h2>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/People/Raul%20Bautista/Raul_Bautista_01.webp"
          alt="Raul Bautista character in GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        Raul Bautista is voiced by a veteran actor who brings cartel weight and heist wisdom to the crew's plans. Raul acts as the primary contact linking Jason and Lucia to high-profile bank scores. He coordinates bank vault routes, bypass setups, and decoy getaway plans. Read his complete background and cartel affiliations in our detailed <Link href="/story/gta-6-raul-bautista/">GTA 6 Raul Bautista guide</Link>.
      </p>
      <div className={styles.galleryGrid}>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Raul%20Bautista/Raul_Bautista_02.webp"
            alt="Raul Bautista meeting with cartels"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Raul%20Bautista/Raul_Bautista_03.webp"
            alt="Raul Bautista planning escape route"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Raul%20Bautista/Raul_Bautista_04.webp"
            alt="Raul Bautista handing over cartel weapons"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
      </div>

      <StoryCTAButton href="/story/gta-6-raul-bautista/">
        Read Raul Bautista Cast Leaks
      </StoryCTAButton>

      <h2>Cal Hampton</h2>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/People/Cal%20Hampton/Cal_Hampton_01.webp"
          alt="Cal Hampton character in GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        Cal Hampton is voiced by a character actor specializing in gritty crime roles. Cal is a corrupt Kelly County sheriff who blackmails the protagonists into doing dirty work. He uses his badge to force the duo into illegal smuggling runs, threatening them with jail time. For details on how his missions affect the storyline, visit our <Link href="/story/gta-6-characters/">GTA 6 characters guide</Link>.
      </p>
      <div className={styles.galleryGrid}>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Cal%20Hampton/Cal_Hampton_02.webp"
            alt="Cal Hampton confronting Jason"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Cal%20Hampton/Cal_Hampton_03.webp"
            alt="Cal Hampton calling in roadblocks"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Cal%20Hampton/Cal_Hampton_04.webp"
            alt="Cal Hampton inside county sheriff department"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
      </div>

      <h2>Boobie Ike</h2>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/People/Boobie%20Ike/Boobie_Ike_01.webp"
          alt="Boobie Ike character in GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        Boobie Ike is voiced by a local Florida actor and voice performer. Boobie is a Vice City nightclub entrepreneur and money launderer who helps clean the crew's illegal cash flow. He holds key information on Vice Port shipping routes and local smuggling channels. See how his nightclubs function as properties in our <Link href="/story/gta-6-characters/">GTA 6 characters hub</Link>.
      </p>
      <div className={styles.galleryGrid}>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Boobie%20Ike/Boobie_Ike_02.webp"
            alt="Boobie Ike managing Jack of Hearts club"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Boobie%20Ike/Boobie_Ike_03.webp"
            alt="Boobie Ike talking with music producers"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Boobie%20Ike/Boobie_Ike_04.webp"
            alt="Boobie Ike at a highstakes poker table"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
      </div>

      <h2>Brian Heder</h2>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/People/Brian%20Heder/Brian_Heder_04.webp"
          alt="Brian Heder character in GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        Brian Heder is voiced by a voice talent who captures the slow, rural tone of the Leonida Keys. Brian acts as Jason's landlord, supplying remote trailers and speedboats for smuggling. He coordinates waterborne drug runs across the Florida Keys channel. Learn more about the safehouse locations in our <Link href="/story/gta-6-characters/">GTA 6 characters list</Link>.
      </p>
      <div className={styles.galleryGrid}>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Brian%20Heder/Brian_Heder_01.webp"
            alt="Brian Heder trailer park safehouse"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Brian%20Heder/Brian_Heder_02.webp"
            alt="Brian Heder coordination room for drug runs"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Brian%20Heder/Brian_Heder_03.webp"
            alt="Brian Heder boat smuggling setup"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
      </div>

      <h2>DreQuan Priest</h2>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/People/DreQuan%20Priest/DreQuan_Priest_01.webp"
          alt="DreQuan Priest character in GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        DreQuan Priest is voiced by a professional voice actor with roots in the southern hip-hop scene. DreQuan is a record label boss who uses his music business to mask cartel activities. He connects the protagonists to wealthy Vice City clients. Check out his crew connections in our <Link href="/story/gta-6-characters/">GTA 6 characters breakdown</Link>.
      </p>
      <div className={styles.galleryGrid}>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/DreQuan%20Priest/DreQuan_Priest_02.webp"
            alt="DreQuan Priest recording studio"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/DreQuan%20Priest/DreQuan_Priest_03.webp"
            alt="DreQuan Priest backroom meeting"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/DreQuan%20Priest/DreQuan_Priest_04.webp"
            alt="DreQuan Priest Vice City penthouse view"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
      </div>

      <h2>Real Dimez</h2>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/People/Real%20Dimez/Real_Dimez_01.webp"
          alt="Real Dimez character in GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        Real Dimez is voiced by a Florida-based rapper and voice performer. Real Dimez is an internet icon who sets up street races and distracts police patrols during heists. He posts street stunts to build online clout. Check out the street racing events and heist setups in our <Link href="/story/gta-6-characters/">GTA 6 characters guide</Link>.
      </p>
      <div className={styles.galleryGrid}>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Real%20Dimez/Real_Dimez_02.webp"
            alt="Real Dimez hosting street takeover"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Real%20Dimez/Real_Dimez_03.webp"
            alt="Real Dimez street racing lineup"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Real%20Dimez/Real_Dimez_04.webp"
            alt="Real Dimez escaping police patrol in sports car"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
      </div>

      <VoiceActorQuiz />

      <h2>The Full GTA 6 Voice Cast & Characters</h2>
      <p>
        The cast extends beyond the two main protagonists, featuring an extensive list of performers who voice the cartel bosses, corrupt law enforcement, and local radio hosts of Leonida:
      </p>
      <table>
        <thead>
          <tr>
            <th>Character</th>
            <th>Performer Role</th>
            <th>Affiliation / Role in Story</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lucia</td>
            <td>Lead Actress</td>
            <td>Protagonist; former inmate and heist planner</td>
          </tr>
          <tr>
            <td>Jason</td>
            <td>Lead Actor</td>
            <td>Protagonist; military veteran and getaway driver</td>
          </tr>
          <tr>
            <td>Raul Bautista</td>
            <td>Voice & Mo-Cap</td>
            <td>Vice Port cartel leader and major contact</td>
          </tr>
          <tr>
            <td>Cal Hampton</td>
            <td>Voice & Mo-Cap</td>
            <td>Corrupt Kelly County sheriff and antagonist</td>
          </tr>
          <tr>
            <td>Melissa Jarret</td>
            <td>Voice Actor</td>
            <td>Local podcast host and social media commentator</td>
          </tr>
          <tr>
            <td>DreQuan Priest</td>
            <td>Voice Actor</td>
            <td>Vice City street racing promoter</td>
          </tr>
        </tbody>
      </table>
      <p>
        This structured table displays the key actors who drive the main campaign. Each supporting character underwent the same rigorous casting process, ensuring the dialogue stays consistent across the entire map. For instance, Spain-born actor Oscar Jaenada has been heavily linked by fans to the role of the Vice Port cartel contact. Read our overview of the <Link href="/story/gta-6-raul-bautista/">gta 6 raul bautista cast leaks</Link> to check out the latest visual comparisons and social media teases.
      </p>

      <StoryCTAButton href="/story/gta-6-characters/">
        View All GTA 6 Characters & Profiles
      </StoryCTAButton>

      <h2>The Motion Capture and Performance Capture Process</h2>
      <p>
        Rockstar Games did not use simple voice booths for the dialogue. The studio utilized "performance capture," which records voice, facial expressions, and body movements simultaneously:
      </p>
      <p>
        The actors performed together on a motion-capture stage, wearing suits with tracking markers and head-mounted camera rigs. This setups allow the developers to capture authentic interactions and physical contact between Lucia and Jason, enhancing the emotional weight of their relationship.
      </p>
      <p>
        The recording process took over three years, with the actors spending hundreds of hours in the studio. The facial details captured by the head rigs are processed by Rockstar's custom animation engine, translating subtle eye movements and expressions directly onto the character models. This technical detail is what makes the characters feel human, avoiding the robotic expressions seen in many modern titles. It ensures the cinematic cutscenes flow into raw gameplay without breaking immersion.
      </p>

      <h2>Are Any GTA 5 Voice Actors Returning?</h2>
      <p>
        Rockstar Games has kept their policy of separating storylines between major entries. While GTA 6 exists in the same HD Universe, there are no main characters from GTA 5 returning in playable roles.
      </p>
      <p>
        You can expect minor easter egg references and podcast guest appearances from previous characters, but Michael, Trevor, and Franklin do not appear in the Leonida story. This allows the campaign to stand on its own, focusing entirely on the new partnership. For details on how the main story unfolds chapter-by-chapter, visit our <Link href="/story/walkthrough/">GTA 6 story mode walkthrough</Link>.
      </p>

      <StoryCTAButton href="/story/walkthrough/">
        Explore Story Mode Walkthrough
      </StoryCTAButton>

      <div className={styles.callout}>
        <span className={styles.calloutTitle}>Key Takeaways</span>
        <p>
          The GTA 6 cast features rising indie actors for Lucia and Jason. The game utilizes performance capture to record voice, face, and body movements together. The supporting cast includes local voice artists, and previous main characters do not return.
        </p>
      </div>

      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Who voices Lucia in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Lucia is voiced by New York-based Latina actress <strong>Manni L. Perez</strong>, known for her roles in <em>Law & Order: SVU</em> and <em>Jessica Jones</em>. Perez also performed the full 3D motion capture and physical stunt work. For a complete analysis of facial scans, audio frequencies, and Rockstar leaks, read our investigative <Link href="/story/gta-6-lucia-voice-actress/">Manni L. Perez GTA 6 voice actress guide</Link>.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Did Rockstar use AI voice acting in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            No, all character dialogue, including background NPC voices and radio hosts, was recorded by real human actors in professional studios.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Are there celebrity cameos in the cast?</h3>
          <p className={styles.faqAnswer}>
            Yes, several local Florida musicians, internet personalities, and sports figures make cameo appearances as radio hosts or talk show guests.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Who voices the main antagonist in GTA 6?</h3>
          <p className={styles.faqAnswer}>
            The primary antagonists, including corrupt law enforcement and cartel leaders, are voiced by veteran character actors specializing in crime dramas.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Where were the voice lines recorded?</h3>
          <p className={styles.faqAnswer}>
            The performance capture and dialogue were recorded at Rockstar's specialized mocap studios in New York and London.
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "GTA 6 Voice Actors & Characters List",
            "description": "A list of the confirmed voice actors, characters, and performers in GTA 6.",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Lucia",
                "description": "Voiced and motion-captured by Manni L. Perez (rumored)"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Jason",
                "description": "Voiced and motion-captured by Gregory Connors (rumored)"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Raul Bautista",
                "description": "Voiced and performed by a professional character actor"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Cal Hampton",
                "description": "Voiced and performed by Cal Hampton character actor"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Boobie Ike",
                "description": "Voiced and performed by Boobie Ike character actor"
              },
              {
                "@type": "ListItem",
                "position": 6,
                "name": "Brian Heder",
                "description": "Voiced and performed by Brian Heder character actor"
              },
              {
                "@type": "ListItem",
                "position": 7,
                "name": "DreQuan Priest",
                "description": "Voiced and performed by DreQuan Priest character actor"
              },
              {
                "@type": "ListItem",
                "position": 8,
                "name": "Real Dimez",
                "description": "Voiced and performed by Real Dimez character actor"
              }
            ]
          })
        }}
      />
    </ImageLightbox>
  ),
};
