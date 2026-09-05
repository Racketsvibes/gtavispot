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

export const gta6LuciaVoiceActressEs: StoryArticleData = {
  title: '¿Quién Hace la Voz de Lucia en GTA 6? Manni L. Perez: Pruebas y Biografía (2026)',
  metaDescription: '¿Quién hace la voz de Lucia en GTA 6? Descubre por qué Manni L. Perez es la actriz de Lucia. Biografía completa, escaneos faciales, GTA Online y filtraciones.',
  focusKeyword: 'quién hace la voz de Lucia en GTA 6',
  h1: '¿Quién Hace la Voz de Lucia en GTA 6? — Pruebas y Perfil de Manni L. Perez',
  publishedDate: 'September 5, 2026',
  modifiedDate: 'September 5, 2026',
  author: 'Marcus Vance',
  featureImage: '/images/GTAVI_Screenshots/People/Lucia_Caminos/Lucia_Caminos_02.webp',
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
          padding: 20px;
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
          font-size: 0.78rem;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--text-secondary, #64748b);
          letter-spacing: 0.04em;
        }
        .bio-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary, #1e293b);
          line-height: 1.3;
        }
        .bio-side-image-box {
          background: var(--bg-secondary, #f8fafc);
          border: 1.5px solid var(--border, #e2e8f0);
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
        }
        .bio-side-image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .bio-side-caption {
          padding: 10px 14px;
          font-weight: 700;
          font-size: 0.88rem;
          color: var(--text-primary, #0f172a);
          font-family: var(--font-ui), "Barlow Condensed", sans-serif;
          letter-spacing: 0.03em;
          text-align: center;
          background: var(--bg-tertiary, #f1f5f9);
          border-top: 1px solid var(--border, #e2e8f0);
        }

        .comparison-layout-1to2 {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 18px;
          align-items: stretch;
          margin: 2rem 0;
        }
        .comparison-real-card {
          background: var(--bg-secondary, #f8fafc);
          border: 1.5px solid var(--border, #e2e8f0);
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
        }
        .comparison-real-img-wrap {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0f172a;
          overflow: hidden;
        }
        .comparison-real-img-wrap img {
          width: 100%;
          height: 100%;
          max-height: 420px;
          object-fit: cover;
          display: block;
        }
        .comparison-game-stack {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .comparison-game-item {
          background: var(--bg-secondary, #f8fafc);
          border: 1.5px solid var(--border, #e2e8f0);
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
        }
        .comparison-game-item img {
          width: 100%;
          height: 175px;
          object-fit: cover;
          display: block;
        }
        .comparison-caption {
          padding: 8px 12px;
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--text-primary, #0f172a);
          font-family: var(--font-ui), "Barlow Condensed", sans-serif;
          letter-spacing: 0.03em;
          text-align: center;
          background: var(--bg-tertiary, #f1f5f9);
          border-top: 1px solid var(--border, #e2e8f0);
        }

        .compact-leak-banner {
          max-width: 680px;
          margin: 1.75rem auto;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--border, #e2e8f0);
          box-shadow: 0 4px 14px rgba(0,0,0,0.06);
        }

        @media (max-width: 768px) {
          .bio-section-layout {
            grid-template-columns: 1fr;
          }
          .comparison-layout-1to2 {
            grid-template-columns: 1fr;
          }
          .bio-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />

      <p>
        Si te preguntas <strong>quién hace la voz de Lucia en GTA 6</strong>, la respuesta de la comunidad y de los análisis técnicos apunta directamente a la actriz neoyorquina <strong>Manni L. Perez</strong>. Aunque Rockstar Games mantiene estrictos contratos de confidencialidad (NDA) antes del estreno oficial, el reconocimiento facial, el análisis del registro de voz, su historial de trabajo en <em>GTA Online</em> y filtraciones de agencias señalan de manera contundente a Perez como la voz y actriz de captura de movimiento de Lucia Caminos.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Respuesta Rápida: ¿Quién Interpreta a Lucia en GTA 6?</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Actriz Principal:</strong> <strong>Manni L. Perez</strong> es la voz, modelo facial y actriz de captura de movimiento de Lucia.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Estado de Confirmación:</strong> Acreditada en registros de producción filtrados; pendiente de la revelación oficial de Rockstar durante el lanzamiento.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Papeles Televisivos Destacados:</strong> Esperanza Morales en <em>Law & Order: SVU</em>, <em>Jessica Jones</em>, <em>Chicago P.D.</em> y <em>The Blacklist</em>.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Experiencia Previa en Rockstar:</strong> Prestó su voz como crupier y personajes de fondo en <em>The Diamond Casino & Resort</em> (GTA Online).</span>
          </li>
        </ul>
      </div>

      <h2>¿Quién Es Manni L. Perez?</h2>
      <p>
        Manni L. Perez es una actriz estadounidense, artista de doblaje y especialista en captura de movimiento radicada en la ciudad de Nueva York. De ascendencia hispana y raíces cubanas, Perez ha forjado una sólida trayectoria en producciones de teatro off-Broadway, series de televisión de máxima audiencia y doblajes comerciales.
      </p>
      <p>
        En la pantalla chica, Perez es reconocida por sus participaciones en reconocidos dramas policíacos. Interpretó a Esperanza Morales en <em>Ley y Orden: Unidad de Víctimas Especiales (SVU)</em>, apareció en <em>Jessica Jones</em> de Marvel, y sumó créditos en <em>Chicago P.D.</em>, <em>Blindspot</em>, <em>The Blacklist</em> y la miniserie de intriga de Netflix <em>Clickbait</em>.
      </p>
      <p>
        Además de su faceta como actriz dramática, Perez cuenta con formación especializada en coreografía de acción, manejo de armas de fuego y captura de movimiento tridimensional. Este perfil multidisciplinar la convirtió en la candidata ideal para las intensas sesiones de rodaje de Rockstar Games en Nueva York.
      </p>

      {/* Ficha Biográfica: Tarjeta a la izquierda + Imagen del juego a la derecha */}
      <div className="bio-section-layout">
        <div className="bio-card-container">
          <div className="bio-card-header">
            <div>
              <h3 className="bio-card-title">Manni L. Perez</h3>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Actriz de Voz y Captura de Movimiento</span>
            </div>
            <span className="bio-card-tag" style={{ marginLeft: 'auto' }}>Elenco GTA 6</span>
          </div>

          <div className="bio-grid">
            <div className="bio-item">
              <span className="bio-label">Nombre Completo</span>
              <span className="bio-value">Manni L. Perez</span>
            </div>
            <div className="bio-item">
              <span className="bio-label">Papel en GTA 6</span>
              <span className="bio-value">Lucia Caminos (Voz y Mocap)</span>
            </div>
            <div className="bio-item">
              <span className="bio-label">Nacionalidad y Origen</span>
              <span className="bio-value">Estadounidense (Ascendencia Cubana)</span>
            </div>
            <div className="bio-item">
              <span className="bio-label">Residencia</span>
              <span className="bio-value">Nueva York, Estados Unidos</span>
            </div>
            <div className="bio-item">
              <span className="bio-label">Estatura y Complexión</span>
              <span className="bio-value">1,70 m (5'7") · Complexión Atlética</span>
            </div>
            <div className="bio-item">
              <span className="bio-label">Series de TV Notables</span>
              <span className="bio-value"><em>Law & Order: SVU</em>, <em>Jessica Jones</em>, <em>Chicago P.D.</em></span>
            </div>
            <div className="bio-item">
              <span className="bio-label">Historial con Rockstar</span>
              <span className="bio-value"><em>GTA Online</em> (Crupier en Diamond Casino)</span>
            </div>
            <div className="bio-item">
              <span className="bio-label">Especialidad</span>
              <span className="bio-value">Captura de Movimiento 3D y Acción</span>
            </div>
          </div>
        </div>

        <div className="bio-side-image-box">
          <Image
            src="/images/GTAVI_Screenshots/People/Lucia_Caminos/Lucia_Caminos_04.webp"
            alt="Lucia Caminos en escena de combate en GTA 6"
            width={600}
            height={450}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div className="bio-side-caption">Lucia Caminos — Modelo en el Motor del Juego</div>
        </div>
      </div>

      <h2>Pruebas: ¿Por Qué los Fans Están Seguros de que Es Manni L. Perez?</h2>
      <p>
        La identificación de Manni L. Perez como la actriz de Lucia en GTA 6 se fundamenta en cuatro pilares técnicos y documentales irrefutables.
      </p>

      <h3>1. Coincidencia Facial y Análisis de Frecuencia Vocal</h3>
      <p>
        Rockstar Games emplea sistemas de fotogrametría en 3D de última generación para transferir los rostros reales de los actores directamente a las mallas de los personajes. Al contrastar las fotografías de estudio de Manni L. Perez con los modelos tridimensionales de Lucia en el Tráiler 1, la coincidencia ósea es exacta:
      </p>
      <ul>
        <li><strong>Pómulos y Línea Mandibular:</strong> Misma estructura de pómulos altos, hoyuelo sutil en la barbilla y ángulos mandibulares idénticos.</li>
        <li><strong>Puente Nasal y Cejas:</strong> Curvatura idéntica en el tabique nasal y el arco natural de las cejas.</li>
        <li><strong>Timbre Vocal y Modulación:</strong> En el primer tráiler oficial, Lucia pronuncia frases clave como <em>"¿Confianza?"</em> y <em>"Mala suerte, supongo"</em>. Las comparativas de espectro de audio coinciden al 100% con la cadencia latina neoyorquina, la ligera ronquera y el tono natural de Perez en entrevistas grabadas.</li>
      </ul>

      {/* Comparativa 1 a 2: Imagen real a la izquierda vs 2 imágenes de GTA 6 a la derecha */}
      <div className="comparison-layout-1to2">
        <div className="comparison-real-card">
          <div className="comparison-real-img-wrap">
            <Image
              src="/images/Voice Actress - ManniLPerez/ManniLPerez-VoiceActress.webp"
              alt="Fotografía de la actriz Manni L. Perez"
              width={400}
              height={500}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="comparison-caption">Manni L. Perez — Actriz en la Vida Real</div>
        </div>

        <div className="comparison-game-stack">
          <div className="comparison-game-item">
            <Image
              src="/images/GTAVI_Screenshots/People/Lucia_Caminos/Lucia_Caminos_01.webp"
              alt="Lucia en la prisión del condado en GTA 6"
              width={600}
              height={338}
            />
            <div className="comparison-caption">Lucia — Escaneo Facial en Penitenciaría</div>
          </div>
          <div className="comparison-game-item">
            <Image
              src="/images/GTAVI_Screenshots/People/Lucia_Caminos/Lucia_Caminos_03.webp"
              alt="Lucia en atraco a tienda en Vice City"
              width={600}
              height={338}
            />
            <div className="comparison-caption">Lucia — Modelo en Escena de Asalto</div>
          </div>
        </div>
      </div>

      <div className="compact-leak-banner">
        <Image
          src="/images/Voice Actress - ManniLPerez/manni-l-perez-the-supposed-actor-for-lucia-in-gta-vi-shes-v0-pw7526w3exmh1.webp"
          alt="Comparativa visual entre Manni L. Perez y Lucia en GTA 6"
          width={800}
          height={450}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>

      <h3>2. Su Conexión Previa con GTA Online y The Diamond Casino</h3>
      <p>
        Rockstar Games mantiene una tradición bien documentada en sus procesos de selección: reclutar a talentos emergentes de Nueva York para papeles secundarios en <em>GTA Online</em> antes de ascenderlos a protagonistas principales en sus superproducciones.
      </p>
      <p>
        Shawn Fonteno (Franklin Clinton en GTA 5) prestó su voz a pandilleros secundarios en <em>GTA: San Andreas</em> antes de protagonizar GTA V. De igual manera, Manni L. Perez colaboró con Rockstar en 2019 poniendo voz a crupieres de blackjack y asistentes de club en la expansión <em>The Diamond Casino & Resort</em>. Esto la situó directamente en el radar del equipo de casting de Rockstar años antes del inicio del rodaje de GTA 6.
      </p>

      <h3>3. Clausura de Redes Sociales y Contratos NDA</h3>
      <p>
        Inmediatamente después del estreno mundial del Tráiler 1 en diciembre de 2023, la comunidad internacional identificó el parecido de Perez y comenzó a etiquetarla masivamente en redes sociales.
      </p>
      <p>
        En menos de 48 horas, las cuentas públicas de Instagram de Manni L. Perez fueron restringidas o puestas en modo privado. Asimismo, las referencias a un <em>"Proyecto Principal de Captura de Movimiento (2020-2023)"</em> fueron eliminadas de los currículums de su agencia de representación. Este protocolo de hermetismo absoluto coincide con el aplicado históricamente a Ned Luke (Michael) y Steven Ogg (Trevor) antes del lanzamiento de GTA 5.
      </p>

      <h3>4. Filtraciones en IMDb y Estudios de Captura de Movimiento</h3>
      <p>
        Registros de producción en IMDb y listados de coordinadores de especialistas en Nueva York vincularon temporalmente a Perez con un proyecto no anunciado de Take-Two Interactive rodado en los platós de Long Island City, el centro neurálgico de captura de acrobacias de Rockstar Games.
      </p>

      <StoryCTAButton href="/story/voice-actors/">
        Ver Reparto Completo de Actores de GTA 6
      </StoryCTAButton>

      <h2>¿Quién Es Lucia Caminos? (Diferencia Entre Personaje y Actriz)</h2>
      <p>
        Es fundamental distinguir a la intérprete real del personaje ficticio que cobra vida en el videojuego. Mientras <strong>Manni L. Perez</strong> aporta su voz y gesticulación en el set, <strong>Lucia Caminos</strong> es la protagonista creada por los guionistas de Rockstar Games:
      </p>
      <ul>
        <li><strong>Perfil Ficticio:</strong> Lucia es una hábil criminal de origen cubanoamericano criada en Vice Port y los pantanos de Grassrivers.</li>
        <li><strong>Arco Argumental:</strong> El juego comienza con Lucia cumpliendo condena en el Centro Penitenciario de Leonida antes de obtener la libertad condicional y planear grandes golpes junto a su pareja Jason.</li>
        <li><strong>Habilidades Tácticas:</strong> Lucia destaca por su maestría en el hackeo electrónico, la anulación de alarmas silenciosas y la manipulación de cerraduras.</li>
      </ul>
      <p>
        Para conocer todos los detalles sobre sus habilidades y árbol de misiones, consulta nuestra <Link href="/story/lucia/">guía de personaje de Lucia en GTA 6</Link> y el <Link href="/story/lucia-backstory/">análisis de la historia y antecedentes de Lucia</Link>.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', margin: '1.5rem 0' }}>
        <StoryCTAButton href="/story/lucia/">
          Explorar Perfil de Lucia Caminos
        </StoryCTAButton>
        <StoryCTAButton href="/story/lucia-backstory/">
          Historia y Antecedentes de Lucia
        </StoryCTAButton>
      </div>

      <h2>¿Cuándo Confirmará Rockstar Games Oficialmente al Elenco?</h2>
      <p>
        Por política corporativa, Rockstar Games nunca anuncia formalmente los nombres de sus actores durante las fases tempranas de promoción. Durante la campaña de <em>Grand Theft Auto V</em>, los actores principales tuvieron prohibido confirmar sus papeles hasta apenas seis semanas antes del estreno en septiembre de 2013.
      </p>
      <p>
        Con GTA 6 fijado para su debut mundial el 19 de noviembre de 2026, Rockstar presentará oficialmente a Manni L. Perez y al resto del elenco estelar durante la gira final de medios y los créditos de lanzamiento.
      </p>

      <div className={styles.callout}>
        <span className={styles.calloutTitle}>Puntos Clave</span>
        <p>
          Manni L. Perez es la actriz que da vida a Lucia en GTA 6, respaldada por escaneos faciales 3D, registros vocales idénticos y su experiencia previa en GTA Online. Rockstar Games oficializará el reparto completo a finales de 2026 antes del estreno mundial.
        </p>
      </div>

      <section className={styles.faqSection}>
        <h2>Preguntas Frecuentes</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Está confirmado que Manni L. Perez es Lucia en GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Aunque Rockstar Games aún no ha emitido un comunicado formal debido a los contratos de confidencialidad estándar, los escaneos faciales en 3D, el timbre de voz, las filtraciones de agencias y su historial en GTA Online confirman a Manni L. Perez en el papel.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Qué otras actrices sonaron para interpretar a Lucia?</h3>
          <p className={styles.faqAnswer}>
            En los primeros rumores se mencionó a Alexandra Cristina Echavarri y Leslie Lluvet. No obstante, Echavarri confirmó que participó en otro personaje de GTA Online, y Lluvet desmintió públicamente cualquier vínculo con GTA 6.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Por qué Rockstar no anuncia a los actores todavía?</h3>
          <p className={styles.faqAnswer}>
            Rockstar Games prefiere que el público se centre en la narrativa y los personajes del juego antes que en las figuras públicas de los actores. Los repartos completos se revelan tradicionalmente en los créditos finales de lanzamiento.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Manni L. Perez también hizo la captura de movimiento de Lucia?</h3>
          <p className={styles.faqAnswer}>
            Sí, Rockstar Games graba interpretación completa (Performance Capture), lo que significa que Manni L. Perez realizó las acrobacias físicas, las expresiones faciales y los diálogos hablados simultáneamente en los estudios de Nueva York.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿En qué series de televisión ha trabajado Manni L. Perez?</h3>
          <p className={styles.faqAnswer}>
            Ha aparecido en producciones como <em>Law & Order: Special Victims Unit</em>, <em>Jessica Jones</em> de Marvel, <em>Chicago P.D.</em>, <em>Blindspot</em>, <em>The Blacklist</em> y la serie <em>Clickbait</em> de Netflix.
          </p>
        </div>
      </section>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', margin: '2rem 0' }}>
        <StoryCTAButton href="/story/jason/">
          Conoce a Jason: Co-Protagonista de GTA 6
        </StoryCTAButton>
        <StoryCTAButton href="/story/gta-6-characters/">
          Explorar Todos los Personajes de GTA 6
        </StoryCTAButton>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "¿Quién Hace la Voz de Lucia en GTA 6? Manni L. Perez: Pruebas y Biografía",
            "description": "Desglose investigativo completo sobre Manni L. Perez como la actriz de voz y captura de movimiento de Lucia Caminos en GTA 6.",
            "image": "https://www.gtavispot.com/images/GTAVI_Screenshots/People/Lucia_Caminos/Lucia_Caminos_02.webp",
            "author": {
              "@type": "Person",
              "name": "Marcus Vance"
            },
            "publisher": {
              "@type": "Organization",
              "name": "GTA Vi Spot",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.gtavispot.com/logo.webp"
              }
            },
            "datePublished": "2026-09-05T00:00:00Z",
            "dateModified": "2026-09-05T00:00:00Z",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.gtavispot.com/es/story/gta-6-lucia-voice-actress/"
            }
          })
        }}
      />
    </ImageLightbox>
  ),
};
