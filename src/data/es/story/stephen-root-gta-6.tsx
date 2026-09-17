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

export const stephenRootGta6Es: StoryArticleData = {
  title: 'Stephen Root en GTA 6: Actor de Voz de Brian Heder (2026)',
  metaDescription: '¿Está Stephen Root en GTA 6? ¡Sí! Análisis completo de Stephen Root como Brian Heder en GTA 6: confirmación oficial, biografía, rol y análisis vocal.',
  focusKeyword: 'Stephen Root en GTA 6',
  h1: 'Stephen Root en GTA 6: Actor de Voz Confirmado para Brian Heder',
  publishedDate: 'September 17, 2026',
  modifiedDate: 'September 17, 2026',
  author: 'Qamar Farooq',
  featureImage: '/images/People/Brian%20Heder/stephen-root-gta-6-voice-actor.webp',
  videoSchema: {
    name: 'Stephen Root Confirmado en GTA 6 - Análisis del Actor de Brian Heder',
    description: 'Análisis detallado sobre la incorporación de Stephen Root a Grand Theft Auto VI interpretando a Brian Heder en los Cayos de Leonida.',
    thumbnailUrl: [
      'https://img.youtube.com/vi/JIx1HQmCE6s/maxresdefault.jpg',
      'https://www.gtavispot.com/images/People/Brian%20Heder/stephen-root-gta-6-voice-actor.webp'
    ],
    uploadDate: '2026-09-17T00:00:00Z',
    duration: 'PT3M45S',
    contentUrl: 'https://youtu.be/JIx1HQmCE6s',
    embedUrl: 'https://www.youtube-nocookie.com/embed/JIx1HQmCE6s'
  },
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

        /* Bio Layout: Card + In-Game Image Side-by-Side */
        .bio-section-layout {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 20px;
          align-items: stretch;
          margin: 2rem 0;
        }
        .bio-card-container {
          background: var(--bg-secondary, #f8fafc);
          border: 1.5px solid var(--border, #e2e8f0);
          border-radius: 16px;
          padding: 22px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .bio-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border, #e2e8f0);
        }
        .bio-card-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary, #0f172a);
          margin: 0;
          font-family: var(--font-ui), "Barlow Condensed", sans-serif;
          letter-spacing: 0.02em;
        }
        .bio-card-tag {
          background: rgba(214, 36, 110, 0.12);
          color: var(--brand-magenta, #d6246e);
          padding: 4px 10px;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .bio-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .bio-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .bio-label {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted, #64748b);
        }
        .bio-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary, #0f172a);
        }
        .bio-image-wrapper {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          border: 1.5px solid var(--border, #e2e8f0);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
          min-height: 280px;
        }
        .bio-image-wrapper img {
          object-fit: cover;
        }

        /* Evidence Cards Grid */
        .evidence-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin: 1.5rem 0;
        }
        .evidence-card {
          background: var(--bg-surface, #ffffff);
          border: 1px solid var(--border, #e2e8f0);
          border-radius: 12px;
          padding: 18px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .evidence-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
        }
        .evidence-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--brand-magenta, #d6246e);
          color: #fff;
          font-weight: 800;
          font-size: 0.85rem;
          margin-bottom: 10px;
        }
        .evidence-card h4 {
          margin: 0 0 8px 0;
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-primary, #0f172a);
          font-family: var(--font-ui), "Barlow Condensed", sans-serif;
        }
        .evidence-card p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--text-secondary, #475569);
          line-height: 1.5;
        }

        /* Scorecard Table */
        .scorecard-wrap {
          overflow-x: auto;
          margin: 1.75rem 0;
          border-radius: 12px;
          border: 1px solid var(--border, #e2e8f0);
          box-shadow: 0 4px 14px rgba(0,0,0,0.04);
        }
        .scorecard-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.92rem;
          text-align: left;
        }
        .scorecard-table th {
          background: #0f172a;
          color: #ffffff;
          padding: 14px 16px;
          font-weight: 700;
          letter-spacing: 0.03em;
        }
        .scorecard-table td {
          padding: 12px 16px;
          border-bottom: 1px solid var(--border, #e2e8f0);
          color: var(--text-secondary, #334155);
        }
        .scorecard-table tr:nth-child(even) td {
          background: rgba(0, 0, 0, 0.015);
        }
        .score-match {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #059669;
          font-weight: 700;
        }

        /* Video Embed */
        .video-container {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          border-radius: 16px;
          border: 1.5px solid var(--border, #e2e8f0);
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
          margin: 2rem 0;
          background: #000;
        }
        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        @media (max-width: 768px) {
          .bio-section-layout,
          .evidence-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />

      {/* Gancho para Google AI Overview / Primeras 100 palabras */}
      <p>
        La confirmación del actor <strong>Stephen Root en GTA 6</strong> representa el primer fichaje oficial de Hollywood revelado para el esperado videojuego de Rockstar Games. El aclamado actor de carácter da vida a <strong>Brian Heder</strong>, un veterano contrabandista, dueño de un astillero y contacto clave del bajo mundo ubicado en los Cayos de Leonida. A través de las aguas del sur de Vice City, <strong>Stephen Root en GTA 6</strong> aporta su inconfundible acento sureño y presencia rústica al personaje, coordinando rutas clandestinas marítimas y refugios para los protagonistas Jason y Lucia.
      </p>

      {/* Caja de Respuesta Rápida */}
      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Respuesta Rápida: Stephen Root en GTA 6</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Actor:</strong> Stephen Root (veterano nominado al Emmy, estrella de <em>Barry</em>, <em>King of the Hill</em> y <em>Office Space</em>).</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Personaje en el Juego:</strong> <strong>Brian Heder</strong> – Operador de astilleros, contrabandista de los Cayos y casero de Jason.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Estado de Confirmación:</strong> <strong>Oficialmente Confirmado</strong> como el primer actor anunciado formalmente para Grand Theft Auto VI.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Función en la Jugabilidad:</strong> Proporciona casas rodantes de seguridad, lanchas rápidas y misiones de contrabando costero en el sur de Leonida.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Guías Relacionadas:</strong> Consulta nuestra guía completa de <Link href="/story/voice-actors/">actores de voz de GTA 6</Link> y el directorio de <Link href="/story/gta-6-characters/">personajes de GTA 6</Link>.</span>
          </li>
        </ul>
      </div>

      {/* Perfil del Intérprete */}
      <h2>Stephen Root y Brian Heder: Perfil del Intérprete</h2>
      <div className="bio-section-layout">
        <div className="bio-card-container">
          <div>
            <div className="bio-card-header">
              <h3 className="bio-card-title">Stephen Root</h3>
              <span className="bio-card-tag">Actor Confirmado</span>
            </div>
            <div className="bio-grid">
              <div className="bio-item">
                <span className="bio-label">Rol en GTA 6</span>
                <span className="bio-value">Brian Heder</span>
              </div>
              <div className="bio-item">
                <span className="bio-label">Ocupación del Personaje</span>
                <span className="bio-value">Dueño de Astillero y Contrabandista</span>
              </div>
              <div className="bio-item">
                <span className="bio-label">Papel Icónico en TV</span>
                <span className="bio-value">Monroe Fuches (<em>Barry</em>)</span>
              </div>
              <div className="bio-item">
                <span className="bio-label">Voz de Animación</span>
                <span className="bio-value">Bill y Buck (<em>King of the Hill</em>)</span>
              </div>
              <div className="bio-item">
                <span className="bio-label">Cine de Culto</span>
                <span className="bio-value">Milton Waddams (<em>Office Space</em>)</span>
              </div>
              <div className="bio-item">
                <span className="bio-label">Región Principal</span>
                <span className="bio-value">Cayos de Leonida / Grassrivers</span>
              </div>
            </div>
          </div>
          <p style={{ margin: '14px 0 0 0', fontSize: '0.88rem', color: 'var(--text-muted, #64748b)' }}>
            Stephen Root realiza la captura de voz y movimientos faciales de Brian Heder en GTA 6, estructurando la logística inicial de la historia.
          </p>
        </div>

        <div className="bio-image-wrapper">
          <Image
            src="/images/Brain_Herder_Voice_Actor/Brain_Herder_Voice_Actor_-_Stephen_Root.webp"
            alt="Stephen Root actor de voz confirmado para Brian Heder en GTA 6"
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            priority
          />
        </div>
      </div>

      {/* Sección 1: Quién es Brian Heder */}
      <h2>¿Quién es Brian Heder en GTA 6? Rol Narrativo y Lore</h2>
      <p>
        En <em>Grand Theft Auto VI</em>, <strong>Brian Heder</strong> es un curtido criminal rural asentado en los canales y costas de los <Link href="/map/leonida-keys/">Cayos de Leonida</Link>. A diferencia de los capos de carteles de alto nivel como Raul Bautista o los empresarios nocturnos como Boobie Ike, Heder representa la infraestructura clandestina del mercado negro local que mantiene activo el narcotráfico marítimo en Leonida.
      </p>
      <p>
        Brian Heder funciona como el arrendador y mentor inicial de <Link href="/es/story/gta-6-jason-voice-actor/">Jason</Link>. Les proporciona remolques y refugios seguros donde Jason y <Link href="/es/story/gta-6-lucia-voice-actress/">Lucia</Link> pueden ocultarse de la policía metropolitana de Vice City y de los alguaciles corruptos del condado como el Sheriff Cal Hampton. Además de vivienda, Heder administra un astillero que sirve como tapadera para almacenar cargamentos ilícitos, modificar embarcaciones y organizar entregas en los canales del sur.
      </p>

      <div className={styles.galleryGrid}>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/GTAVI_Screenshots/People/Brian_Heder/Brian_Heder_01.webp"
            alt="Brian Heder hablando con Jason en GTA 6"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/GTAVI_Screenshots/People/Brian_Heder/Brian_Heder_02.webp"
            alt="Astillero y refugio de Brian Heder en los Cayos"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/GTAVI_Screenshots/People/Brian_Heder/Brian_Heder_03.webp"
            alt="Almacén de lanchas rápidas de Brian Heder en GTA 6"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/GTAVI_Screenshots/People/Brian_Heder/Brian_Heder_04.webp"
            alt="Primer plano de Brian Heder en Grand Theft Auto VI"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
      </div>

      <StoryCTAButton href="/story/gta-6-characters/">
        Explora la Lista Completa de Personajes de GTA 6
      </StoryCTAButton>

      {/* Sección 2: Cómo se confirmó el casting */}
      <h2>Stephen Root en GTA 6: Cómo se Confirmó Oficialmente su Participación</h2>
      <p>
        El anuncio de que <strong>Stephen Root</strong> participa en <em>Grand Theft Auto VI</em> generó gran entusiasmo en comunidades como Reddit y portales de noticias de entretenimiento. A pesar del estricto secreto de Rockstar Games, su presencia fue ratificada a través de registros oficiales de casting y coincidencias en archivos de producción sonora.
      </p>

      <div className="evidence-grid">
        <div className="evidence-card">
          <div className="evidence-num">1</div>
          <h4>Divulgación Oficial de Casting</h4>
          <p>
            Los registros de la industria confirmaron a Stephen Root interpretando a Brian Heder, consolidándolo como el primer actor consagrado de Hollywood anunciado formalmente.
          </p>
        </div>

        <div className="evidence-card">
          <div className="evidence-num">2</div>
          <h4>Coincidencia Vocal y Acento</h4>
          <p>
            Los audios extraídos de versiones de desarrollo coinciden exactamente con el timbre vocal rasposo y cadencioso característico de Root en sus papeles sureños.
          </p>
        </div>

        <div className="evidence-card">
          <div className="evidence-num">3</div>
          <h4>Captura de Rendimiento</h4>
          <p>
            Las sesiones de captura de movimiento facial en los estudios de Nueva York trasladaron con precisión los gestos y miradas de Root al modelo tridimensional de Brian Heder.
          </p>
        </div>

        <div className="evidence-card">
          <div className="evidence-num">4</div>
          <h4>Alineación con Fuches y Strickland</h4>
          <p>
            Rockstar buscaba un intérprete con la capacidad de alternar entre la manipulación criminal oscura y el humor satírico excéntrico, especialidad de Root.
          </p>
        </div>
      </div>

      {/* Video Explicativo con Esquema Indexable */}
      <h2>Video Análisis: Stephen Root como Brian Heder</h2>
      <p>
        Mira este análisis detallado donde se explica el papel de Stephen Root como Brian Heder en GTA 6, su trayectoria televisiva y su impacto en la historia:
      </p>

      <div className="video-container">
        <iframe
          src="https://www.youtube-nocookie.com/embed/JIx1HQmCE6s"
          title="Stephen Root en GTA 6 - Análisis del Actor de Brian Heder"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      {/* Sección 3: Trayectoria */}
      <h2>Por Qué Stephen Root Encaja a la Perfección en el Universo de Rockstar</h2>
      <p>
        Stephen Root es considerado uno de los actores de reparto más respetados de la industria. A lo largo de cuatro décadas en cine, televisión y doblaje, ha encarnado personajes con matices de humor negro, ambigüedad moral y peligro latente:
      </p>

      <ul>
        <li>
          <strong>Monroe Fuches en <em>Barry</em> (HBO):</strong> Como el manipulador y desesperado contacto de un asesino a sueldo, Root demostró maestría interpretando a un tutor criminal tóxico, papel que guarda gran paralelismo con Brian Heder.
        </li>
        <li>
          <strong>Buck Strickland y Bill Dauterive en <em>King of the Hill</em>:</strong> Su dominio del dialecto sureño y el tono de empresario corrupto encaja de forma impecable con el ambiente de los pantanos de Leonida.
        </li>
        <li>
          <strong>Milton Waddams en <em>Office Space</em>:</strong> Clásico de comedia que convirtió a un oficinista desatendido en un icono del cine satírico.
        </li>
        <li>
          <strong>Gaston Means en <em>Boardwalk Empire</em>:</strong> Interpretación de un corrupto intermediario de la época de la Prohibición, ideal para tramas de mafia y contrabando.
        </li>
      </ul>

      {/* Tabla Comparativa de Filmografía */}
      <h2>Comparativa: Filmografía de Stephen Root vs. Brian Heder en GTA 6</h2>
      <div className="scorecard-wrap">
        <table className="scorecard-table">
          <thead>
            <tr>
              <th>Proyecto Destacado</th>
              <th>Personaje</th>
              <th>Arquetipo / Rasgo Clave</th>
              <th>Relevancia en Brian Heder (GTA 6)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Barry (HBO)</strong></td>
              <td>Monroe Fuches</td>
              <td>Manipulador Criminal y Mentor</td>
              <td><span className="score-match">Paralelo Directo</span> Guía a Jason en rutas marítimas peligrosas</td>
            </tr>
            <tr>
              <td><strong>King of the Hill</strong></td>
              <td>Buck Strickland / Bill</td>
              <td>Empresario Sureño Corrupto</td>
              <td><span className="score-match">Acento Idéntico</span> Cadencia rural sureña auténtica</td>
            </tr>
            <tr>
              <td><strong>Boardwalk Empire</strong></td>
              <td>Gaston Means</td>
              <td>Intermediario Ilegal</td>
              <td><span className="score-match">Sinergia Criminal</span> Evasión de la ley y logística de mercancía</td>
            </tr>
            <tr>
              <td><strong>Office Space</strong></td>
              <td>Milton Waddams</td>
              <td>Figura de Comedia Oscura</td>
              <td><span className="score-match">Sátira Rockstar</span> Encarna el humor ácido y excéntrico del juego</td>
            </tr>
            <tr>
              <td><strong>Justified</strong></td>
              <td>Juez Mike Reardon</td>
              <td>Figura Judicial Heterodoxa</td>
              <td><span className="score-match">Ambiente Rural</span> Capta el tono áspero y pantanoso de Florida</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Sección 4: Impacto en las Misiones */}
      <h2>Impacto en la Jugabilidad: Trabajando para Brian Heder</h2>
      <p>
        En las misiones iniciales de GTA 6 ambientadas en los Cayos, Brian Heder actúa como asignador de encargos esenciales:
      </p>
      <ul>
        <li>
          <strong>Transporte de Contrabando Acuático:</strong> Conducir lanchas modificadas por canales de manglares en Grassrivers eludiendo radares de guardacostas.
        </li>
        <li>
          <strong>Mejora de Refugios Rodantes:</strong> Habilitar almacenes secretos para guardar armas y despistar a la policía.
        </li>
        <li>
          <strong>Obtención de Vehículos Marítimos:</strong> Robar equipamiento náutico especializado y camionetas todoterreno para operaciones de carga pesada.
        </li>
        <li>
          <strong>Avisos de Controles Policiales:</strong> Recibir alertas por radio sobre bloqueos de patrullas en la autopista Overseas Highway.
        </li>
      </ul>

      <div className="bio-image-wrapper" style={{ height: '360px', margin: '2rem 0' }}>
        <Image 
          src="/images/GTAVI_Screenshots/People/Brian_Heder/Brian_Heder_02.webp" 
          alt="Refugio y centro de operaciones de Brian Heder en GTA 6" 
          fill
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>

      <StoryCTAButton href="/story/voice-actors/">
        Ver el Reparto Completo de Actores de Voz de GTA 6
      </StoryCTAButton>

      {/* Preguntas Frecuentes */}
      <h2>Preguntas Frecuentes (FAQ)</h2>
      <div className={styles.faqSection}>
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Está Stephen Root en GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Sí. Stephen Root está oficialmente confirmado como actor de voz en Grand Theft Auto VI, interpretando al contrabandista y dueño de astillero Brian Heder en los Cayos de Leonida.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Quién hace la voz de Brian Heder en GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Brian Heder es interpretado por el veterano actor nominado al Emmy Stephen Root, reconocido por sus papeles en Barry, King of the Hill, Office Space y Boardwalk Empire.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Quién interpreta a Brian Heder en GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Stephen Root realiza tanto la actuación de voz como la captura de movimiento facial y corporal para dar vida a Brian Heder en GTA 6.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Es Stephen Root el primer actor de voz confirmado para GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Sí. Mientras que los intérpretes de Lucia (Manni L. Perez) y Jason (Dylan Rourke / Gregory Connors) aún no cuentan con confirmación formal de Rockstar, Stephen Root es el primer actor consagrado de Hollywood confirmado en el reparto.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Cuál es el rol de Brian Heder en la historia de GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Brian Heder sirve como casero y contacto criminal inicial de Jason Duval en los Cayos de Leonida, facilitándole remolques de seguridad, embarcaciones rápidas y misiones marítimas.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Ha participado Stephen Root en otros juegos de GTA antes?</h3>
          <p className={styles.faqAnswer}>
            No, GTA 6 supone el debut de Stephen Root en la saga Grand Theft Auto, aportando por primera vez su talento vocal y carisma al universo de Rockstar Games.
          </p>
        </div>
      </div>

      {/* Párrafo Final */}
      <p>
        La incorporación de <strong>Stephen Root en GTA 6</strong> eleva el nivel narrativo y la profundidad de los personajes en Leonida. Ya sea coordinando misiones marítimas o aportando diálogos llenos de humor negro y autenticidad sureña, la presencia de Stephen Root como Brian Heder consolida a Grand Theft Auto VI como uno de los repartos actorales más sólidos de los videojuegos.
      </p>

      <StoryCTAButton href="/es/news/gta-6-release-date/">
        Consulta la Fecha de Lanzamiento y Novedades de GTA 6
      </StoryCTAButton>

      {/* Esquema Estructurado JSON-LD en Español */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://www.gtavispot.com/es/story/stephen-root-gta-6/#person",
                "name": "Stephen Root",
                "jobTitle": "Actor / Actor de Voz",
                "knowsAbout": ["Grand Theft Auto VI", "Barry", "King of the Hill", "Office Space", "Brian Heder"],
                "description": "Aclamado actor estadounidense de carácter oficialmente confirmado como la voz de Brian Heder en Grand Theft Auto VI (GTA 6)."
              },
              {
                "@type": "VideoObject",
                "@id": "https://www.gtavispot.com/es/story/stephen-root-gta-6/#video",
                "name": "Stephen Root Confirmado en GTA 6 - Análisis del Actor de Brian Heder",
                "description": "Análisis detallado sobre la incorporación de Stephen Root a Grand Theft Auto VI interpretando a Brian Heder en los Cayos de Leonida.",
                "thumbnailUrl": [
                  "https://img.youtube.com/vi/JIx1HQmCE6s/maxresdefault.jpg",
                  "https://www.gtavispot.com/images/People/Brian%20Heder/stephen-root-gta-6-voice-actor.webp"
                ],
                "uploadDate": "2026-09-17T00:00:00Z",
                "contentUrl": "https://youtu.be/JIx1HQmCE6s",
                "embedUrl": "https://www.youtube-nocookie.com/embed/JIx1HQmCE6s"
              },
              {
                "@type": "ItemList",
                "name": "Stephen Root en GTA 6: Roles y Evidencias",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Rol de Voz de Brian Heder",
                    "description": "Voz y captura de movimiento por Stephen Root en GTA 6"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Monroe Fuches en Barry",
                    "description": "Papel de mentor criminal nominado al Emmy que establece sinergia con GTA"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Buck Strickland y Bill en King of the Hill",
                    "description": "Dominio de diálogos cómicos sureños acordes con los Cayos de Florida"
                  }
                ]
              }
            ]
          })
        }}
      />
    </ImageLightbox>
  )
};
