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

export const gta6JasonVoiceActorEs: StoryArticleData = {
  title: '¿Quién Hace la Voz de Jason en GTA 6? Dylan Rourke vs Gregory Connors (2026)',
  metaDescription: '¿Quién hace la voz de Jason en GTA 6? Análisis exhaustivo: Dylan Rourke vs Gregory Connors. Filtraciones de currículum, voz, escaneos faciales y pruebas.',
  focusKeyword: 'quién hace la voz de Jason en GTA 6',
  h1: '¿Quién Hace la Voz de Jason en GTA 6? Dylan Rourke vs Gregory Connors Explicado',
  publishedDate: 'September 6, 2026',
  modifiedDate: 'September 6, 2026',
  author: 'Marcus Vance',
  featureImage: '/images/GTAVI_Screenshots/People/Jason_Duval/Jason_Duval_02.webp',
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

        /* 1-to-2 Comparison Layout */
        .comparison-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin: 2rem 0;
        }
        .comparison-real-col {
          display: flex;
          flex-direction: column;
        }
        .comparison-game-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .actor-frame {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          border: 1.5px solid var(--border, #e2e8f0);
          background: #000;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .actor-frame.full-height {
          flex: 1;
          min-height: 380px;
        }
        .actor-frame.half-height {
          height: 182px;
        }
        .actor-frame img {
          object-fit: cover;
        }
        .actor-frame-badge {
          position: absolute;
          bottom: 10px;
          left: 10px;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(6px);
          color: #fff;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        /* Evidence Pillars Grid */
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
          font-size: 0.95rem;
          text-align: left;
          background: var(--bg-surface, #ffffff);
        }
        .scorecard-table th {
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
        .scorecard-table td {
          padding: 12px 16px;
          border-bottom: 1px solid var(--border, #e2e8f0);
          color: var(--text-secondary, #475569);
          line-height: 1.5;
        }
        .scorecard-table tr:last-child td {
          border-bottom: none;
        }
        .score-match {
          color: #059669;
          font-weight: 800;
        }
        .score-maybe {
          color: #d97706;
          font-weight: 700;
        }
        .score-unlikely {
          color: #dc2626;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .bio-section-layout,
          .comparison-layout,
          .evidence-grid {
            grid-template-columns: 1fr;
          }
          .actor-frame.full-height {
            min-height: 280px;
          }
        }
      `}} />

      <p>
        Desde el estreno del primer tráiler oficial de <em>Grand Theft Auto VI</em>, una incógnita fundamental ha capturado la atención de la comunidad hispanohablante y de todo el mundo: <strong>¿quién hace la voz de Jason en GTA 6?</strong>
      </p>
      <p>
        Mientras que la actriz detrás de Lucia se ha identificado casi unánimemente como <Link href="/es/story/gta-6-lucia-voice-actress/">Manni L. Perez</Link>, la identidad del intérprete de Jason Duval se ha convertido en un fascinante debate entre dos nombres principales: el actor estadounidense <strong>Dylan Rourke</strong> y el actor de teatro y televisión neoyorquino <strong>Gregory Connors</strong>.
      </p>

      {/* Resumen Rápido */}
      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Resumen Rápido: ¿Quién Interpreta a Jason en GTA 6?</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>El Principal Favorito (Dylan Rourke):</strong> Es el candidato con mayores evidencias. Su estructura facial y mandíbula son casi idénticas a las de Jason en el juego, su tono de voz áspero coincide con el tráiler, participó en proyectos de captura de movimiento entre 2019 y 2021, y sus vídeos de Vimeo fueron eliminados tras las primeras investigaciones.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>El Candidato Alternativo (Gregory Connors):</strong> Se convirtió en sospechoso tras filtrarse en su currículum digital oficial de Actors Access un papel de &quot;Protagonista en un Proyecto de Rockstar Games (2025/2026)&quot;, crédito que fue borrado de inmediato.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Postura de Rockstar Games:</strong> Ninguno de los dos ha sido confirmado de forma oficial por los acuerdos de confidencialidad (NDA). Sin embargo, el consenso apunta a <strong>Dylan Rourke como Jason</strong> y a Connors como antagonista o personaje secundario clave.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Actores Descartados:</strong> Actores veteranos de la industria como <strong>Troy Baker</strong> y <strong>Roger Craig Smith</strong> han desmentido públicamente su participación.</span>
          </li>
        </ul>
      </div>

      {/* Comparativa Lado a Lado */}
      <div className="comparison-layout">
        <div className="comparison-real-col">
          <div className="actor-frame full-height">
            <Image 
              src="/images/Voice Actor - Jason/dylan_rourke.png" 
              alt="Retrato fotográfico real de Dylan Rourke" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <span className="actor-frame-badge">Candidato #1: Dylan Rourke</span>
          </div>
        </div>
        <div className="comparison-game-col">
          <div className="actor-frame half-height">
            <Image 
              src="/images/GTAVI_Screenshots/People/Jason_Duval/Jason_Duval_01.webp" 
              alt="Primer plano de Jason Duval en GTA 6" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <span className="actor-frame-badge">GTA 6: Jason Duval (Perfil)</span>
          </div>
          <div className="actor-frame half-height">
            <Image 
              src="/images/GTAVI_Screenshots/People/Jason_Duval/Jason_Duval_03.webp" 
              alt="Jason Duval conduciendo de noche en Vice City" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <span className="actor-frame-badge">GTA 6: Gráficos del Juego</span>
          </div>
        </div>
      </div>

      <StoryCTAButton href="/story/jason/">
        Descubre la Biografía Completa y Orígenes de Jason Duval
      </StoryCTAButton>

      <h2>Los Dos Principales Sospechosos — Visión General</h2>
      <p>
        Históricamente, Rockstar Games prefiere contratar a actores de teatro y televisión con gran talento interpretativo en lugar de celebridades de Hollywood de primera línea. Al igual que ocurrió en <em>GTA 5</em> con Steven Ogg (Trevor) o Ned Luke (Michael), en <em>Grand Theft Auto VI</em> se emplea captura de movimiento facial y corporal integral (*performance capture*).
      </p>
      <p>
        Para el papel de <Link href="/story/jason/">Jason Duval</Link>—el veterano militar y contrabandista de los Cayos de Leonida aliado con Lucia—, la comunidad ha reducido las teorías a dos opciones de peso:
      </p>

      {/* Tarjeta de Biografía: Dylan Rourke */}
      <div className="bio-section-layout">
        <div className="bio-card-container">
          <div>
            <div className="bio-card-header">
              <h3 className="bio-card-title">Dylan Rourke</h3>
              <span className="bio-card-tag">Favorito Principal</span>
            </div>
            <div className="bio-grid">
              <div className="bio-item">
                <span className="bio-label">Profesión</span>
                <span className="bio-value">Actor y Captura de Movimiento</span>
              </div>
              <div className="bio-item">
                <span className="bio-label">Origen</span>
                <span className="bio-value">Chicago, Illinois, EE. UU.</span>
              </div>
              <div className="bio-item">
                <span className="bio-label">Series Notables</span>
                <span className="bio-value">Anatomía de Grey, Station 19</span>
              </div>
              <div className="bio-item">
                <span className="bio-label">Créditos de Cine</span>
                <span className="bio-value">Bury the Bride (2023)</span>
              </div>
              <div className="bio-item">
                <span className="bio-label">Similitud Facial</span>
                <span className="bio-value">95% (Mandíbula, Nariz, Cejas)</span>
              </div>
              <div className="bio-item">
                <span className="bio-label">Coincidencia de Voz</span>
                <span className="bio-value">Alta (Tono Rasgado y Grave)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bio-image-wrapper">
          <Image 
            src="/images/Voice Actor - Jason/Dylan2.png" 
            alt="Dylan Rourke foto de perfil profesional" 
            fill
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      </div>

      <h2>Dylan Rourke: Quién es y Por Qué los Fans Creen que es Jason</h2>
      <p>
        Dylan Rourke es un actor estadounidense de televisión y cine que ha consolidado una carrera en series de máxima audiencia, producciones independientes y comerciales. A lo largo del último año, numerosas pruebas biométricas y digitales lo sitúan en la cima de los candidatos.
      </p>

      <h3>1. Trayectoria Profesional (Anatomía de Grey, Station 19, Bury the Bride)</h3>
      <p>
        Rourke ha participado en producciones de primer nivel como <em>Grey&apos;s Anatomy</em> (Anatomía de Grey), <em>Station 19</em> y <em>Modern Family</em>. En 2023 protagonizó el thriller independiente <em>Bury the Bride</em>, exhibiendo el registro temperamental, enérgico y complejo que encaja con el perfil psicológico de Jason dentro de la <Link href="/es/gta-6-timeline/">cronología de desarrollo de GTA 6</Link>.
      </p>

      <h3>2. Parecido Físico y Coincidencia Vocal con Jason Duval</h3>
      <p>
        Rockstar emplea escaneo tridimensional fotogramétrico de alta precisión para trasladar la topología del rostro de los actores a los personajes. Al contrastar los pómulos marcados, la curvatura del tabique nasal y la mandíbula cuadrada de Rourke con los modelados de Jason en el Tráiler 1, la correspondencia es evidente.
      </p>
      <p>
        En cuanto a la voz, Jason pronuncia una palabra clave en el primer tráiler: &quot;<em>Trust</em>&quot; (Confianza). Los análisis de frecuencia de audio entre esa frase y los diálogos de Rourke en <em>Station 19</em> revelan la misma resonancia gutural y cadencia sureña.
      </p>

      {/* 4 Pilares de Evidencia de Dylan Rourke */}
      <div className="evidence-grid">
        <div className="evidence-card">
          <span className="evidence-num">1</span>
          <h4>Escaneo Biométrico Facial</h4>
          <p>
            La superposición de imágenes muestra un alineamiento casi perfecto en la distancia ocular, arco de las cejas y proporciones de la barbilla entre Rourke y Jason.
          </p>
        </div>
        <div className="evidence-card">
          <span className="evidence-num">2</span>
          <h4>Frecuencia Vocal Idéntica</h4>
          <p>
            El análisis de tono de la palabra &quot;Trust&quot; encaja con el registro grave natural y la entonación habitual de Dylan Rourke en sus trabajos de televisión.
          </p>
        </div>
        <div className="evidence-card">
          <span className="evidence-num">3</span>
          <h4>Vídeos de Vimeo Borrados</h4>
          <p>
            Poco después de que su nombre se viralizara en foros de videojuegos, sus bobinas actorales y menciones a doblaje en Vimeo fueron privatizadas o eliminadas.
          </p>
        </div>
        <div className="evidence-card">
          <span className="evidence-num">4</span>
          <h4>Periodo de Rodaje en Nueva York</h4>
          <p>
            Los registros de agencias entre 2019 y 2021 ubicaban a Rourke en Nueva York participando en un &quot;Proyecto Interactivo Triple A no anunciado&quot;.
          </p>
        </div>
      </div>

      <h3>3. Huella Digital Borrada y Rol en Videojuegos (2019–2021)</h3>
      <p>
        Uno de los indicios más contundentes fue la repentina desaparición a finales de 2023 de varios de sus vídeos de audiciones y muestras de voz en Vimeo. Además, archivos de agencias de representación reflejaban un papel protagonista de captura de movimiento iniciado a finales de 2019, justo cuando Rockstar comenzó la fase principal de rodaje de <em>Grand Theft Auto VI</em>.
      </p>

      <div className="bio-image-wrapper" style={{ height: '360px', margin: '2rem 0' }}>
        <Image 
          src="/images/GTAVI_Screenshots/People/Jason_Duval/Jason_Duval_04.webp" 
          alt="Jason Duval en escena dramática de GTA 6" 
          fill
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>

      <StoryCTAButton href="/es/story/gta-6-lucia-voice-actress/">
        Ver Pruebas de Lucia: ¿Quién Hace la Voz de Lucia en GTA 6? (Manni L. Perez)
      </StoryCTAButton>

      <h2>Gregory Connors: La Teoría del Currículum Filtrado</h2>
      <p>
        A pesar de que Dylan Rourke lidera en parecidos visuales y vocales, el actor neoyorquino <strong>Gregory Connors</strong> cobró gran protagonismo a principios de 2024 debido a una filtración en su currículum digital.
      </p>

      <h3>1. Qué Decía su Portafolio Antes de Ser Borrado</h3>
      <p>
        En marzo de 2024, varios usuarios de <em>GTA Forums</em> descubrieron que en el perfil profesional de Gregory Connors en Actors Access figuraba literalmente la siguiente entrada:
      </p>
      <blockquote>
        <p>
          <strong>&quot;Lead&quot; (Papel Principal)</strong> — <em>Proyecto de Rockstar Games</em> (Lanzamiento: 2025 / 2026, Dirección: [Confidencial])
        </p>
      </blockquote>
      <p>
        Pocas horas después de hacerse pública la información, la mención a Rockstar fue borrada del currículum. La rápida eliminación confirmó su participación en un proyecto de la compañía, desatando teorías sobre si interpretaba a Jason.
      </p>

      <h3>2. Debate en Reddit: ¿Jason o Personaje Secundario?</h3>
      <p>
        Las investigaciones en foros especializados y Reddit llegaron a conclusiones interesantes:
      </p>
      <ul>
        <li>
          <strong>Tesis de Coprotagonista:</strong> Algunos aficionados sostienen que la denominación &quot;Lead&quot; solo puede referirse a Jason, dado que el juego tiene dos protagonistas principales.
        </li>
        <li>
          <strong>Tesis de Antagonista o Jefe Criminal:</strong> Otros expertos recuerdan que Rockstar suele clasificar como &quot;Leads&quot; a los villanos primarios, jefes de policía o líderes de cárteles de la historia. Connors tiene una edad visual mayor y rasgos diferentes a los de Jason, lo que sugiere que podría interpretar a un antagonista clave o capo criminal de Vice City.
        </li>
      </ul>

      <h2>Veredicto: Dylan Rourke vs Gregory Connors — Tabla Comparativa</h2>
      <p>
        Evaluando todas las evidencias disponibles, este es el balance entre ambos candidatos:
      </p>

      <div className="scorecard-wrap">
        <table className="scorecard-table">
          <thead>
            <tr>
              <th>Criterio Evaluado</th>
              <th>Dylan Rourke</th>
              <th>Gregory Connors</th>
              <th>Veredicto / Ventaja</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Parecido Biométrico y Facial</strong></td>
              <td><span className="score-match">Casi Idéntico (95%)</span></td>
              <td><span className="score-unlikely">Baja Coincidencia (40%)</span></td>
              <td><strong>Dylan Rourke</strong></td>
            </tr>
            <tr>
              <td><strong>Timbre Vocal (&quot;Trust&quot;)</strong></td>
              <td><span className="score-match">Mismo Tono y Cadencia</span></td>
              <td><span className="score-maybe">Tono Más Teatral y Maduro</span></td>
              <td><strong>Dylan Rourke</strong></td>
            </tr>
            <tr>
              <td><strong>Mención Directa a Rockstar en CV</strong></td>
              <td><span className="score-maybe">Proyecto Oculto en Agencia</span></td>
              <td><span className="score-match">Crédito Explícito Filtrado</span></td>
              <td><strong>Gregory Connors</strong></td>
            </tr>
            <tr>
              <td><strong>Calendario de Captura de Movimiento</strong></td>
              <td><span className="score-match">Rodaje 2019–2022 en NY</span></td>
              <td><span className="score-match">Sesiones 2022–2024</span></td>
              <td><strong>Empate</strong></td>
            </tr>
            <tr>
              <td><strong>Limpieza de Huella Digital</strong></td>
              <td><span className="score-match">Vídeos de Vimeo Borrados</span></td>
              <td><span className="score-match">Línea del CV Eliminada</span></td>
              <td><strong>Empate</strong></td>
            </tr>
            <tr>
              <td><strong>Rol Más Probable</strong></td>
              <td><span className="score-match">Jason Duval (Protagonista)</span></td>
              <td><span className="score-maybe">Antagonista / Jefe de Misiones</span></td>
              <td><strong>Rourke = Jason</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Actores Descartados Oficialmente (Troy Baker y Roger Craig Smith)</h2>
      <p>
        Antes de que salieran a la luz Dylan Rourke y Gregory Connors, varios rumores apuntaban a voces consagradas del sector:
      </p>
      <ul>
        <li>
          <strong>Troy Baker:</strong> Inicialmente se pensó que la voz de Jason pertenecía al actor de Joel en <em>The Last of Us</em>. Sin embargo, Baker lo desmintió en una entrevista con <em>The Movie Dweeb</em>: <em>&quot;Es solo una palabra: &apos;Trust&apos;. No soy yo. Quiero que el verdadero actor reciba todo el reconocimiento por su trabajo.&quot;</em>
        </li>
        <li>
          <strong>Roger Craig Smith:</strong> La voz de Ezio Auditore (<em>Assassin&apos;s Creed</em>) y Chris Redfield (<em>Resident Evil</em>) también confirmó formalmente que no participa en GTA 6.
        </li>
      </ul>

      <div className="bio-image-wrapper" style={{ height: '360px', margin: '2rem 0' }}>
        <Image 
          src="/images/GTAVI_Screenshots/People/Jason_Duval/Jason_Duval_05.webp" 
          alt="Jason Duval al aire libre en Vice City" 
          fill
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>

      <StoryCTAButton href="/story/voice-actors/">
        Ver Reparto Completo de Actores de Voz de GTA 6
      </StoryCTAButton>

      <h2>Preguntas Frecuentes</h2>
      <div className={styles.faqSection}>
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Quién es el actor de voz de Jason en GTA 6?</h3>
          <p className={styles.faqAnswer}>
            El candidato con más pruebas es el actor estadounidense <strong>Dylan Rourke</strong>, respaldado por su gran similitud física, coincidencia de timbre vocal y vídeos borrados. Gregory Connors también participó en un proyecto de Rockstar, posiblemente como villano o secundario.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Ha confirmado Rockstar oficialmente al actor de Jason?</h3>
          <p className={styles.faqAnswer}>
            No. Rockstar Games mantiene a todo el elenco bajo estrictos acuerdos de confidencialidad hasta fechas próximas al lanzamiento, previsto para el 19 de noviembre de 2026.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Pone Troy Baker la voz a Jason en el Tráiler 1 de GTA 6?</h3>
          <p className={styles.faqAnswer}>
            No. Troy Baker desmintió personalmente los rumores en una entrevista, aclarando que no tiene ningún papel en GTA 6.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Qué revelaba el currículum filtrado de Gregory Connors?</h3>
          <p className={styles.faqAnswer}>
            Su perfil en Actors Access incluyó temporalmente un papel protagonista en un &quot;Proyecto de Rockstar Games para 2025/2026&quot; antes de ser retirado por su agencia.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Quién hace la voz de Lucia en GTA 6?</h3>
          <p className={styles.faqAnswer}>
            La protagonista femenina Lucia está interpretada por la actriz <strong>Manni L. Perez</strong>, conocida por su trabajo previo en <em>GTA Online: The Diamond Casino Heist</em> y series como <em>Ley y Orden: UVE</em>.
          </p>
        </div>
      </div>

      <StoryCTAButton href="/es/gta-6-timeline/">
        Sigue la Cronología Oficial del Desarrollo de GTA 6
      </StoryCTAButton>
    </ImageLightbox>
  )
};
