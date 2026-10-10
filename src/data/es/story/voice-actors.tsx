import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImageLightbox from '@/components/ui/ImageLightbox';
import { StoryArticleData } from '../storyContent';
import styles from '../../../app/story/[slug]/page.module.css';

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

export const voiceActorsEs: StoryArticleData = {
  title: 'Actores de Voz de GTA 6: Doblaje de Lucia y Jason',
  metaDescription: '¿Quiénes son los actores de voz de GTA 6? Guía completa del doblaje: la voz de Lucia, la voz de Jason, Stephen Root confirmado y todo el reparto.',
  focusKeyword: 'gta 6 doblaje',
  h1: 'Actores de Voz de GTA 6: Doblaje Completo y Reparto 2026',
  publishedDate: 'October 10, 2026',
  modifiedDate: 'October 10, 2026',
  author: 'Editorial Staff',
  featureImage: '/images/People/Lucia%20Caminos/Lucia_Caminos_02.webp',
  featureImageAlt: 'Lucia Caminos en una captura de GTA 6, guía de actores de voz',
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
        El elenco de <strong>actores de voz de GTA 6</strong> representa una de las inversiones de talento más grandes en la historia del entretenimiento moderno. Rockstar Games reunió a un grupo diverso de actores, modelos y artistas callejeros para dar vida al estado de Leonida, con tecnologías avanzadas de captura de movimiento para lograr actuaciones realistas. En esta guía del <strong>doblaje de GTA 6</strong> repasamos quién está detrás de cada voz, qué está confirmado y qué sigue siendo un rumor.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Respuesta Rápida: Intérpretes Principales</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Brian Heder:</strong> Interpretado por <strong>Stephen Root</strong> (<em>Barry</em>, <em>King of the Hill</em>), <em>confirmado oficialmente</em>.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Intérprete de Lucia:</strong> Sin confirmar. Manni L. Perez es la candidata más mencionada en los reportes.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Intérprete de Jason:</strong> Sin confirmar (entre los nombres reportados están Gregory Connors y Dylan Rourke).</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Política de casting:</strong> Rockstar prefiere talentos independientes en ascenso antes que grandes estrellas de Hollywood.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Fuentes oficiales:</strong> Listas de créditos, confirmaciones de actores y revelaciones de casting publicadas para Rockstar Games.</span>
          </li>
        </ul>
      </div>

      <p>Última revisión: 10 de octubre de 2026.</p>

      <p>
        ¿Quieres ver cómo se ven estos intérpretes en la vida real? Nuestra <Link href="/es/story/gta-6-cast-in-real-life/">guía del cast de GTA 6 en la vida real</Link> junta a cada actor con su personaje, y califica cada dato de casting con honestidad.
      </p>

      <h2>Lucia Caminos</h2>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/People/Lucia%20Caminos/Lucia_Caminos_02.webp"
          alt="Lucia Caminos, personaje de GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
          priority
        />
      </div>
      <p>
        La intérprete de Lucia no está confirmada. Manni L. Perez es la candidata más mencionada, por la coincidencia en la estructura facial y el registro vocal. Los reportes le atribuyen a Perez las líneas de voz y la actuación de captura de movimiento para el modelo de Lucia, traduciendo expresiones físicas y gestos directamente al juego. La interpretación de Lucia destaca su inteligencia callejera y su vulnerabilidad, dándole a la primera protagonista femenina de la era moderna una personalidad con los pies en la tierra. Si te preguntas <strong>quién hace la voz de Lucia en GTA 6</strong>, consulta nuestra <Link href="/es/story/gta-6-lucia-voice-actress/">investigación completa sobre Manni L. Perez</Link> y la <Link href="/es/story/gta-6-lucia-voice-actress/">guía del personaje de Lucia</Link>.
      </p>
      <div className={styles.galleryGrid}>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Lucia%20Caminos/Lucia_Caminos_01.webp"
            alt="Lucia Caminos con uniforme de prisión"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Lucia%20Caminos/Lucia_Caminos_03.webp"
            alt="Lucia planeando un atraco"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Lucia%20Caminos/Lucia_Caminos_04.webp"
            alt="Lucia escapando de un atraco a un banco"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Lucia%20Caminos/Lucia_Caminos_05.webp"
            alt="Lucia conduciendo un superdeportivo robado"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Lucia%20Caminos/Lucia_Caminos_06.webp"
            alt="Retrato cinematográfico de Lucia en Vice City"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/Jason_Lucia_Motel/Jason_and_Lucia_Motel_landscape.webp"
            alt="Jason y Lucia en el motel, plano cinematográfico"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/Jason_Lucia_Motel/Jason_and_Lucia_Motel_phone.webp"
            alt="Jason y Lucia en el motel, formato móvil"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/Jason_Lucia_Motel/Jason_and_Lucia_Motel_portrait.webp"
            alt="Jason y Lucia en el motel, formato vertical"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', margin: '1.25rem 0 1.75rem 0' }}>
        <StoryCTAButton href="/es/story/gta-6-lucia-voice-actress/">
          Explorar Guía del Personaje de Lucia
        </StoryCTAButton>
        <StoryCTAButton href="/es/story/gta-6-lucia-voice-actress/">
          ¿Quién Hace la Voz de Lucia? Toda la Evidencia
        </StoryCTAButton>
      </div>
      <h2>Jason Duval</h2>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/People/Jason%20Duval/Jason_Duval_04.webp"
          alt="Jason Duval, personaje de GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        El intérprete de Jason no está confirmado (entre los candidatos reportados están Gregory Connors y Dylan Rourke). Gregory Connors llamó la atención por primera vez cuando se filtró un crédito de actor principal en su portafolio. Jason es un veterano militar que se encarga del músculo y la conducción de escape para su banda. Sus líneas de voz resaltan su naturaleza protectora, mostrando su lealtad hacia Lucia y su tensión al lidiar con las autoridades corruptas del estado. La <strong>voz de Jason en GTA 6</strong> sigue siendo uno de los misterios más comentados del reparto. Consulta sus habilidades de tiro y especialidades en nuestra <Link href="/es/story/gta-6-jason-voice-actor/">guía de Jason en GTA 6</Link>.
      </p>
      <div className={styles.galleryGrid}>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Jason%20Duval/Jason_Duval_01.webp"
            alt="Jason Duval disparando un rifle de asalto"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Jason%20Duval/Jason_Duval_02.webp"
            alt="Jason Duval conduciendo un todoterreno de escape"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Jason%20Duval/Jason_Duval_03.webp"
            alt="Jason Duval en sesión de planificación de atraco"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Jason%20Duval/Jason_Duval_05.webp"
            alt="Jason Duval huyendo de una patrulla policial"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Jason%20Duval/Jason_Duval_06.webp"
            alt="Jason Duval en persecución a alta velocidad en Vice City"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/Jason_Lucia_Motel/Jason_and_Lucia_Motel_square.webp"
            alt="Jason y Lucia en el motel, formato cuadrado"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/Jason_Lucia_Motel/Jason_and_Lucia_Motel_tablet.webp"
            alt="Jason y Lucia en el motel, vista de tableta"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/Jason_Lucia_Motel/Jason_and_Lucia_Motel_ultrawide.webp"
            alt="Jason y Lucia en el motel, plano ultrapanorámico"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', margin: '1.25rem 0 1.75rem 0' }}>
        <StoryCTAButton href="/es/story/gta-6-jason-voice-actor/">
          Explorar Guía del Personaje de Jason
        </StoryCTAButton>
        <StoryCTAButton href="/es/story/gta-6-jason-voice-actor/">
          ¿Quién Hace la Voz de Jason? Investigación
        </StoryCTAButton>
      </div>

      <h2>Raul Bautista</h2>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/People/Raul%20Bautista/Raul_Bautista_01.webp"
          alt="Raul Bautista, personaje de GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        Raul Bautista cuenta con la voz de un actor veterano que aporta peso de cartel y sabiduría de atracos a los planes de la banda. Raul es el contacto principal que conecta a Jason y Lucia con golpes bancarios de alto perfil. Coordina rutas de bóvedas, anulación de alarmas y planes de escape con señuelos. Lee sus antecedentes completos y afiliaciones en nuestra <Link href="/es/story/gta-6-characters/">guía de personajes de GTA 6</Link>.
      </p>
      <div className={styles.galleryGrid}>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Raul%20Bautista/Raul_Bautista_02.webp"
            alt="Raul Bautista reunido con carteles"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Raul%20Bautista/Raul_Bautista_03.webp"
            alt="Raul Bautista planeando ruta de escape"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Raul%20Bautista/Raul_Bautista_04.webp"
            alt="Raul Bautista entregando armas del cartel"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
      </div>

      <StoryCTAButton href="/es/story/gta-6-cast-in-real-life/">
        Leer Filtraciones del Reparto de GTA 6
      </StoryCTAButton>

      <h2>Cal Hampton</h2>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/People/Cal%20Hampton/Cal_Hampton_01.webp"
          alt="Cal Hampton, personaje de GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        Cal Hampton cuenta con la voz de un actor de carácter especializado en papeles crudos de crimen. Cal es un sheriff corrupto del condado de Kelly que chantajea a los protagonistas para que hagan trabajo sucio. Usa su placa para obligar al dúo a correr cargamentos ilegales, amenazándolos con la cárcel. Para saber cómo sus misiones afectan la historia, visita nuestra <Link href="/es/story/gta-6-characters/">guía de personajes de GTA 6</Link>.
      </p>
      <div className={styles.galleryGrid}>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Cal%20Hampton/Cal_Hampton_02.webp"
            alt="Cal Hampton confrontando a Jason"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Cal%20Hampton/Cal_Hampton_03.webp"
            alt="Cal Hampton pidiendo retenes policiales"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Cal%20Hampton/Cal_Hampton_04.webp"
            alt="Cal Hampton dentro del departamento del sheriff"
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
          alt="Boobie Ike, personaje de GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        Boobie Ike cuenta con la voz de un actor local de Florida. Boobie es un empresario de clubes nocturnos de Vice City y lavador de dinero que ayuda a limpiar el flujo de efectivo ilegal de la banda. Guarda información clave sobre rutas de envío de Vice Port y canales de contrabando locales. Mira cómo funcionan sus clubes como propiedades en nuestra <Link href="/es/story/gta-6-characters/">guía de personajes de GTA 6</Link>.
      </p>
      <div className={styles.galleryGrid}>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Boobie%20Ike/Boobie_Ike_02.webp"
            alt="Boobie Ike dirigiendo el club Jack of Hearts"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Boobie%20Ike/Boobie_Ike_03.webp"
            alt="Boobie Ike hablando con productores musicales"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Boobie%20Ike/Boobie_Ike_04.webp"
            alt="Boobie Ike en una mesa de póker de altas apuestas"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
      </div>
      <h2>Brian Heder: Con la Voz de Stephen Root (Confirmado)</h2>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/Brain_Herder_Voice_Actor/Brain_Herder_Voice_Actor_-_Stephen_Root.webp"
          alt="El actor Stephen Root, confirmado oficialmente como la voz de Brian Heder en GTA 6"
          title="Stephen Root confirmado como actor de voz de Brian Heder en Grand Theft Auto VI"
          width={800}
          height={448}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        El actor <strong>Stephen Root</strong> es el primer actor de voz confirmado oficialmente para <em>Grand Theft Auto VI</em>, interpretando al narcotraficante y dueño de astillero <strong>Brian Heder</strong>. Root aporta su presencia curtida y su cadencia sureña al bajo mundo criminal de Leonida.
      </p>

      <ul>
        <li>
          <strong>Perfil del actor:</strong> Aclamada estrella nominada al Emmy, conocida por <em>Barry</em> de HBO (Monroe Fuches), <em>King of the Hill</em> de Mike Judge (Bill Dauterive y Buck Strickland), <em>Office Space</em> (Milton Waddams) y <em>Boardwalk Empire</em>.
        </li>
        <li>
          <strong>Papel en el juego:</strong> Es el casero de Jason Duval y su principal socio de contrabando, operando desde los Cayos de Leonida.
        </li>
        <li>
          <strong>Refugios y logística:</strong> Suministra refugios remotos en remolques, escondites de armas y lanchas rápidas para distribuir contrabando por los canales del sur.
        </li>
        <li>
          <strong>Asignaciones de juego:</strong> Coordina recorridos en lancha al inicio del juego, adquisición de equipo marino y estrategias de evasión contra los retenes policiales del condado de Leonard.
        </li>
      </ul>

      <p>
        Para un desglose completo de su confirmación de casting, análisis de audio y video, consulta nuestra <Link href="/es/story/stephen-root-gta-6/">guía dedicada a Stephen Root en GTA 6</Link>. También puedes explorar sus refugios en nuestra <Link href="/es/story/gta-6-characters/">lista de personajes de GTA 6</Link> y seguir sus asignaciones de contrabando en la campaña principal.
      </p>
      <StoryCTAButton href="/es/story/stephen-root-gta-6/">
        Análisis Completo: Stephen Root en GTA 6 (Voz de Brian Heder)
      </StoryCTAButton>
      <div className={styles.galleryGrid}>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Brian%20Heder/Brian_Heder_01.webp"
            alt="Refugio de Brian Heder en parque de remolques en GTA 6"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Brian%20Heder/Brian_Heder_02.webp"
            alt="Sala de coordinación de Brian Heder para rutas de droga"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Brian%20Heder/Brian_Heder_03.webp"
            alt="Preparación de contrabando en lancha de Brian Heder"
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
          alt="DreQuan Priest, personaje de GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        DreQuan Priest cuenta con la voz de un actor profesional con raíces en la escena del hip-hop sureño. DreQuan es el jefe de un sello discográfico que usa su negocio musical para enmascarar actividades del cartel. Conecta a los protagonistas con clientes adinerados de Vice City. Mira sus conexiones en nuestra <Link href="/es/story/gta-6-characters/">guía de personajes de GTA 6</Link>.
      </p>
      <div className={styles.galleryGrid}>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/DreQuan%20Priest/DreQuan_Priest_02.webp"
            alt="Estudio de grabación de DreQuan Priest"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/DreQuan%20Priest/DreQuan_Priest_03.webp"
            alt="Reunión privada de DreQuan Priest"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/DreQuan%20Priest/DreQuan_Priest_04.webp"
            alt="Vista del penthouse de DreQuan Priest en Vice City"
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
          alt="Real Dimez, personaje de GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        Real Dimez cuenta con la voz de un rapero e intérprete de Florida. Real Dimez es un ícono de internet que organiza carreras callejeras y distrae a las patrullas policiales durante los atracos. Publica acrobacias callejeras para ganar popularidad en línea. Mira los eventos de carreras y preparativos de atracos en nuestra <Link href="/es/story/gta-6-characters/">guía de personajes de GTA 6</Link>.
      </p>
      <div className={styles.galleryGrid}>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Real%20Dimez/Real_Dimez_02.webp"
            alt="Real Dimez organizando una toma callejera"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Real%20Dimez/Real_Dimez_03.webp"
            alt="Alineación de carreras callejeras de Real Dimez"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Real%20Dimez/Real_Dimez_04.webp"
            alt="Real Dimez escapando de la policía en un deportivo"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
      </div>

      <h2>El Reparto Completo de Voces de GTA 6 y sus Personajes</h2>
      <p>
        El elenco va más allá de los dos protagonistas principales, con una larga lista de intérpretes que dan voz a los jefes del cartel, la policía corrupta y los locutores de radio de Leonida:
      </p>
      <table>
        <thead>
          <tr>
            <th>Personaje</th>
            <th>Rol del Intérprete</th>
            <th>Afiliación / Papel en la Historia</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lucia</td>
            <td>Actriz principal</td>
            <td>Protagonista; ex reclusa y planificadora de atracos</td>
          </tr>
          <tr>
            <td>Jason</td>
            <td>Actor principal</td>
            <td>Protagonista; veterano militar y conductor de escape</td>
          </tr>
          <tr>
            <td>Raul Bautista</td>
            <td>Voz y captura de movimiento</td>
            <td>Líder del cartel de Vice Port y contacto clave</td>
          </tr>
          <tr>
            <td>Cal Hampton</td>
            <td>Voz y captura de movimiento</td>
            <td>Sheriff corrupto del condado de Kelly y antagonista</td>
          </tr>
          <tr>
            <td>Melissa Jarret</td>
            <td>Actriz de voz</td>
            <td>Locutora de podcast local y comentarista de redes</td>
          </tr>
          <tr>
            <td>DreQuan Priest</td>
            <td>Actor de voz</td>
            <td>Promotor de carreras callejeras de Vice City</td>
          </tr>
        </tbody>
      </table>
      <p>
        Esta tabla muestra a los actores clave que impulsan la campaña principal. Cada personaje secundario pasó por el mismo riguroso proceso de casting, para que el diálogo se mantenga consistente en todo el mapa. Por ejemplo, el actor español Oscar Jaenada ha sido vinculado por los fans al papel del contacto del cartel de Vice Port. Lee nuestro resumen de las <Link href="/es/story/gta-6-cast-in-real-life/">filtraciones del reparto de GTA 6</Link> para ver las últimas comparaciones visuales y publicaciones en redes.
      </p>

      <StoryCTAButton href="/es/story/gta-6-characters/">
        Ver Todos los Personajes de GTA 6
      </StoryCTAButton>

      <h2>El Proceso de Captura de Movimiento y Actuación</h2>
      <p>
        Rockstar Games no usó simples cabinas de voz para los diálogos. El estudio utilizó "captura de actuación" (performance capture), que graba voz, expresiones faciales y movimientos corporales al mismo tiempo:
      </p>
      <p>
        Los actores actuaron juntos en un escenario de captura de movimiento, con trajes con marcadores de seguimiento y cámaras montadas en la cabeza. Esta configuración permite a los desarrolladores capturar interacciones auténticas y contacto físico entre Lucia y Jason, dándole más peso emocional a su relación.
      </p>
      <p>
        El proceso de grabación tomó más de tres años, con los actores pasando cientos de horas en el estudio. Los detalles faciales capturados por las cámaras se procesan con el motor de animación propio de Rockstar, traduciendo movimientos sutiles de ojos y expresiones directamente a los modelos de los personajes. Este detalle técnico es lo que hace que los personajes se sientan humanos, evitando las expresiones robóticas de muchos títulos modernos. Así las cinemáticas fluyen hacia el juego sin romper la inmersión.
      </p>

      <h2>¿Regresa Algún Actor de Voz de GTA 5?</h2>
      <p>
        Rockstar Games mantiene su política de separar las historias entre entregas principales. Aunque GTA 6 existe en el mismo universo HD, ningún personaje principal de GTA 5 regresa en papeles jugables.
      </p>
      <p>
        Puedes esperar pequeñas referencias y apariciones de personajes anteriores como invitados en podcasts, pero Michael, Trevor y Franklin no aparecen en la historia de Leonida. Esto permite que la campaña se sostenga por sí sola, centrada por completo en la nueva dupla. Para saber cómo se desarrolla la historia capítulo por capítulo, consulta nuestra <Link href="/es/story/gta-6-characters/">guía de personajes de GTA 6</Link>.
      </p>

      <StoryCTAButton href="/es/story/gta-6-characters/">Explorar Guía del Modo Historia
      </StoryCTAButton>

      <div className={styles.callout}>
        <span className={styles.calloutTitle}>Puntos Clave</span>
        <p>
          El doblaje de GTA 6 apuesta por actores independientes en ascenso para Lucia y Jason. El juego usa captura de actuación para grabar voz, rostro y cuerpo al mismo tiempo. El reparto secundario incluye artistas de voz locales, y los personajes principales anteriores no regresan.
        </p>
      </div>

      <section className={styles.faqSection}>
        <h2>Preguntas Frecuentes</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Quién hace la voz de Lucia en GTA 6?</h3>
          <p className={styles.faqAnswer}>
            La intérprete de Lucia no está confirmada. Manni L. Perez es la candidata más mencionada: una actriz latina de Nueva York conocida por sus papeles en <em>Law &amp; Order: SVU</em> y <em>Jessica Jones</em>. Los reportes también le atribuyen la captura de movimiento 3D completa y el trabajo físico de acrobacias. Para un análisis completo de escaneos faciales, frecuencias de audio y filtraciones de Rockstar, lee nuestra <Link href="/es/story/gta-6-lucia-voice-actress/">guía de investigación sobre Manni L. Perez</Link>.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Rockstar usó voces generadas por IA en GTA 6?</h3>
          <p className={styles.faqAnswer}>
            No, todo el diálogo de los personajes, incluyendo las voces de fondo de NPCs y locutores de radio, fue grabado por actores humanos reales en estudios profesionales.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Hay cameos de celebridades en el reparto?</h3>
          <p className={styles.faqAnswer}>
            Sí, varios músicos locales de Florida, personalidades de internet y figuras del deporte hacen apariciones como locutores de radio o invitados de programas.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Quién hace la voz del antagonista principal en GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Los antagonistas principales, incluyendo policías corruptos y líderes del cartel, cuentan con las voces de actores de carácter veteranos especializados en dramas criminales.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Dónde se grabaron las líneas de voz?</h3>
          <p className={styles.faqAnswer}>
            La captura de actuación y los diálogos se grabaron en los estudios especializados de captura de movimiento de Rockstar en Nueva York y Londres.
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Actores de Voz y Personajes de GTA 6",
            "description": "Lista de los actores de voz reportados y confirmados, personajes e intérpretes en GTA 6.",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Lucia",
                "description": "Voz y captura de movimiento por Manni L. Perez (rumor)"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Jason",
                "description": "Voz y captura de movimiento por Gregory Connors (rumor)"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Raul Bautista",
                "description": "Voz e interpretación por un actor de carácter profesional"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Cal Hampton",
                "description": "Voz e interpretación por un actor de carácter"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Boobie Ike",
                "description": "Voz e interpretación por un actor de carácter"
              },
              {
                "@type": "ListItem",
                "position": 6,
                "name": "Brian Heder",
                "description": "Voz e interpretación por Stephen Root (confirmado oficialmente)"
              },
              {
                "@type": "ListItem",
                "position": 7,
                "name": "DreQuan Priest",
                "description": "Voz e interpretación por un actor de carácter"
              },
              {
                "@type": "ListItem",
                "position": 8,
                "name": "Real Dimez",
                "description": "Voz e interpretación por un actor de carácter"
              }
            ]
          })
        }}
      />
    </ImageLightbox>
  ),
};
