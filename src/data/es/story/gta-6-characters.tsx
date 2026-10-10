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

export const gta6CharactersEs: StoryArticleData = {
  title: 'GTA 6 Personajes: Protagonistas, Elenco y Rumores',
  metaDescription: 'Guía de los personajes de GTA 6: Lucia y Jason como protagonistas, más Boobie Ike, Brian Heder y el resto del elenco. Actores confirmados y rumores.',
  focusKeyword: 'gta 6 personajes',
  h1: 'GTA 6 Personajes: Protagonistas, Elenco y Rumores',
  publishedDate: 'October 10, 2026',
  modifiedDate: 'October 10, 2026',
  author: 'Editorial Staff',
  featureImage: '/images/GTAVI_Screenshots/People/gta-6-characters-feature.webp',
  featureImageAlt: 'Grupo de personajes de GTA 6, el elenco principal reunido',
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
        Grand Theft Auto 6 presenta un elenco fresco de criminales, buscavidas y funcionarios corruptos en todo el estado de Leonida. Esta guía desglosa los <strong>personajes de GTA 6</strong> confirmados, sus historias y los actores de la vida real que los rumores vinculan con ellos.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Respuesta Rápida: Personajes de Vistazo</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Protagonistas:</strong> Lucia (primera protagonista femenina de la era HD) y Jason son pareja.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Rumores de la vida real:</strong> Manni L. Perez suena para Lucia y Gregory Connors para Jason.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Reparto secundario:</strong> Raul Bautista, Boobie Ike, Brian Heder, Cal Hampton, DreQuan Priest y Real Dimez.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Fuente:</strong> Tráilers oficiales de Rockstar Games y versiones filtradas de desarrollo.</span>
          </li>
        </ul>
      </div>

      <p>Última revisión: 10 de octubre de 2026.</p>

      <h2>¿Quiénes Son los Personajes Confirmados de GTA 6?</h2>
      <p>
        La campaña gira en torno a una dupla de personajes. A diferencia de entregas anteriores, estos <strong>protagonistas de GTA 6</strong> comparten un vínculo cercano que afecta directamente el ciclo de atracos.
      </p>

      <h3>Lucia Caminos (Protagonista)</h3>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/GTAVI_Screenshots/People/Lucia_Caminos/Lucia_Caminos_03.webp"
          alt="Lucia, protagonista femenina de GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        Lucia es una mujer astuta con un pasado criminal complicado. La historia empieza justo después de su salida del Centro Correccional del Condado de Leonard. Para conocer más de su historia, lee nuestra <Link href="/es/story/gta-6-lucia-voice-actress/">guía de los antecedentes de Lucia en GTA 6</Link>.
      </p>
      <p>
        En combate destaca hackeando sistemas de seguridad y forzando cerraduras. Puedes ver sus habilidades especiales en nuestra <Link href="/es/story/gta-6-lucia-voice-actress/">guía del personaje de Lucia</Link>.
      </p>
      <ul>
        <li><strong>Salida de prisión:</strong> Empieza la campaña justo después de cumplir condena en el Centro Correccional del Condado de Leonard.</li>
        <li><strong>Hackeo táctico:</strong> Evade alarmas electrónicas y se mueve entre cámaras de seguridad.</li>
        <li><strong>Infiltración sigilosa:</strong> Brilla en entornos silenciosos, forzando cerraduras y moviéndose tras las rutas de los guardias.</li>
        <li><strong>Arquetipo Bonnie y Clyde:</strong> Comparte una relación dinámica y un medidor de confianza con Jason que crece durante los golpes.</li>
      </ul>

      <h3>Jason Duval (Protagonista)</h3>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/GTAVI_Screenshots/People/Jason_Duval/Jason_Duval_03.webp"
          alt="Jason, protagonista masculino de GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        Jason es la pareja romántica de Lucia y su cómplice en los atracos. Aporta habilidades militares con armas y experiencia como conductor de escape a su banda.
      </p>
      <p>
        Su jugabilidad incluye apuntado en cámara lenta para limpiar policías durante persecuciones a alta velocidad. Lee su equipamiento de combate completo en nuestra <Link href="/es/story/gta-6-jason-voice-actor/">guía del personaje de Jason</Link>.
      </p>
      <ul>
        <li><strong>Trasfondo militar:</strong> Es el especialista de combate principal, con mejor control del retroceso y manejo de armas.</li>
        <li><strong>Conductor de escape:</strong> Tiene estadísticas superiores de manejo de vehículos, sobre todo en escapes todoterreno y persecuciones. Puede puentear la mayoría de autos de GTA 6 y motocicletas más rápido que los NPC estándar.</li>
        <li><strong>Habilidad de enfoque en combate:</strong> Activa una ventana de puntería precisa en cámara lenta para neutralizar varios objetivos rápido.</li>
        <li><strong>Especialista en armas:</strong> Empieza con mayor control de armas y maneja armamento pesado como lanzagranadas.</li>
      </ul>

      <h3>Boobie Ike (Reparto Secundario)</h3>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/GTAVI_Screenshots/People/Boobie_Ike/Boobie_Ike_01.webp"
          alt="Boobie Ike, dueño de club nocturno en GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        Boobie Ike es un empresario de Vice City y una leyenda local. Es dueño del club Jack of Hearts y dirige productoras musicales. Actúa como un contacto clave en los atracos, ofreciendo esquemas de lavado para el dinero del dúo.
      </p>
      <ul>
        <li><strong>Magnate de clubes:</strong> Es dueño del famoso club Jack of Hearts en el sur de Vice City.</li>
        <li><strong>Experto en lavado:</strong> Ayuda a limpiar los pagos de los atracos y mueve dinero a través de empresas fantasma.</li>
        <li><strong>Productor musical:</strong> Promueve artistas y gestiona estudios para asegurar conexiones de alto nivel.</li>
        <li><strong>Capo de Leonida:</strong> Guarda información clave sobre rutas de envío de Vice Port y canales de contrabando locales.</li>
      </ul>

      <h3>Brian Heder (Reparto Secundario)</h3>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/GTAVI_Screenshots/People/Brian_Heder/Brian_Heder_01.webp"
          alt="Brian Heder, traficante de GTA 6"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        Brian Heder es un traficante de drogas veterano de los Cayos de Leonida, con la voz oficial del actor veterano <strong>Stephen Root</strong> (<em>Barry</em>, <em>King of the Hill</em>). Es el casero de Jason y le provee refugios en remolques y logística de embarcaciones. Para un análisis a fondo del intérprete, lee nuestra <Link href="/es/story/stephen-root-gta-6/">guía de Stephen Root en GTA 6</Link> o explora la <Link href="/es/story/voice-actors/">lista completa de actores de voz de GTA 6</Link>.
      </p>
      <ul>
        <li><strong>Contrabandista de los Cayos:</strong> Coordina rutas de droga por agua a través del canal de los Cayos de Florida.</li>
        <li><strong>Contacto casero:</strong> Provee a Jason y Lucia sus primeras ubicaciones de refugios móviles.</li>
        <li><strong>Informante del condado:</strong> Avisa a los jugadores sobre próximos retenes policiales del condado de Leonard.</li>
        <li><strong>Coordinador logístico:</strong> Suministra vehículos todoterreno y lanchas rápidas para misiones acuáticas.</li>
      </ul>

      <h3>Cal Hampton (Reparto Secundario)</h3>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/GTAVI_Screenshots/People/Cal_Hampton/Cal_Hampton_01.webp"
          alt="Cal Hampton, amigo de Jason y teórico de la conspiración"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        Cal Hampton es el amigo de la infancia de Jason en el condado de Kelly. Es un teórico de la conspiración que dirige una red de contrabando fuera del radar, ofreciendo modificaciones ilegales de armas.
      </p>
      <ul>
        <li><strong>Amigo de la infancia:</strong> Mantiene una larga historia de negocios callejeros con Jason.</li>
        <li><strong>Teórico de la conspiración:</strong> Cree en redes de vigilancia del gobierno y asesora a la banda sobre cámaras de seguridad.</li>
        <li><strong>Modificador de armas:</strong> Dirige un taller clandestino de armas dentro de un taller mecánico abandonado del condado de Kelly.</li>
        <li><strong>Contacto paranoico:</strong> Ofrece tareas de alto pago pero alto riesgo para sabotear infraestructura estatal.</li>
      </ul>

      <h3>DreQuan Priest (Reparto Secundario)</h3>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/GTAVI_Screenshots/People/DreQuan_Priest/DreQuan_Priest_02.webp"
          alt="DreQuan Priest, rapero y dueño de sello discográfico"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        DreQuan Priest es un magnate musical local dueño de Only Raw Records. Conecta a los protagonistas con la élite adinerada de Vice City mientras usa su sello para enmascarar fondos del cartel.
      </p>
      <ul>
        <li><strong>Dueño del sello:</strong> Dirige Only Raw Records y firma talento local del rap underground.</li>
        <li><strong>Intermediario de Vice City:</strong> Conecta bandas callejeras con administradores de dinero de la alta sociedad.</li>
        <li><strong>Enlace del cartel:</strong> Sirve de intermediario para sindicatos sudamericanos que envían contrabando.</li>
        <li><strong>Vínculos políticos:</strong> Respalda a funcionarios del condado para asegurar patrullas ligeras cerca de sus locales.</li>
      </ul>

      <h3>Raul Bautista (Reparto Secundario)</h3>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/GTAVI_Screenshots/People/Raul_Bautista/Raul_Bautista_01.webp"
          alt="Raul Bautista, atracador de bancos y socio de atracos"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        Raul Bautista es un atracador de bancos veterano con conexiones con carteles sudamericanos. Ayuda a los protagonistas a planear sus robos bancarios de alto perfil. Para un desglose detallado de sus antecedentes, mira nuestro <Link href="/es/story/voice-actors/">perfil completo del personaje de Raul Bautista en GTA 6</Link>.
      </p>
      <ul>
        <li><strong>Veterano de la banda:</strong> Aporta décadas de experiencia en robos bancarios a las sesiones de planificación.</li>
        <li><strong>Músculo del cartel:</strong> Conecta a los protagonistas con distribuidores de armamento pesado en el Caribe.</li>
        <li><strong>Coordinador táctico:</strong> Planea rutas de acceso a bóvedas, anulaciones y turnos de guardias de seguridad.</li>
        <li><strong>Planificador de escapes:</strong> Diseña escapes con señuelos usando túneles de alcantarillado y vías fluviales.</li>
      </ul>

      <h3>Real Dimez (Reparto Secundario)</h3>
      <div className={styles.featureImageContainer}>
        <Image
          src="/images/GTAVI_Screenshots/People/Real_Dimez/Real_Dimez_01.webp"
          alt="Real Dimez, rapero e ícono de redes sociales"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>
      <p>
        Real Dimez es un ícono de redes sociales y rapero firmado por Only Raw Records. Provee tareas de carreras callejeras y ayuda al dúo a escapar de las patrullas policiales.
      </p>
      <ul>
        <li><strong>Estrella de redes:</strong> Publica acrobacias callejeras y contenido de estilo de vida para ganar popularidad.</li>
        <li><strong>Rapero underground:</strong> Firmado por Only Raw Records, reúne a bandas callejeras.</li>
        <li><strong>Corredor callejero:</strong> Organiza arrancones de altas apuestas alrededor de Ocean Beach.</li>
        <li><strong>Distractor policial:</strong> Orquesta tomas callejeras y multitudes relámpago para alejar patrullas de los atracos.</li>
      </ul>

      <StoryCTAButton href="/es/story/gta-6-cast-in-real-life/">
        Ver el Cast de GTA 6 en la Vida Real
      </StoryCTAButton>
      <h2>Personajes de GTA 6 en la Vida Real: ¿Quiénes Son los Actores?</h2>
      <p>
        Rockstar Games usa captura de movimiento avanzada para dar vida al elenco. Aunque el estudio no ha confirmado oficialmente a los actores, la investigación de la comunidad apunta a talentos de voz específicos.
      </p>
      <p>
        Las facciones y el perfil de voz de <strong>Manni L. Perez</strong> coinciden con Lucia Caminos. Los fans la identificaron tras comparar entrevistas y su trabajo previo en dramas de televisión.
      </p>
      <p>
        Para Jason, <strong>Gregory Connors</strong> es el principal candidato. Un crédito por un papel principal en un proyecto de Rockstar Games de 2025 apareció en su portafolio antes de ser eliminado rápidamente. Para leer más sobre el talento de voz, consulta nuestra <Link href="/es/story/voice-actors/">lista de actores de voz de GTA 6</Link>.
      </p>

      <h2>¿Qué Personajes de GTA 6 Están Confirmados y Cuáles Son Rumores?</h2>
      <p>
        Rockstar mantiene en secreto la mayoría de los detalles del casting, así que conviene separar lo confirmado de lo que solo es rumor. La tabla de abajo resume el estado actual de cada nombre importante vinculado a los <strong>personajes de GTA 6</strong>.
      </p>

      <table>
        <thead>
          <tr>
            <th>Actor</th>
            <th>Personaje Vinculado</th>
            <th>Estado</th>
            <th>Evidencia</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stephen Root</td>
            <td>Brian Heder (asociación de este sitio)</td>
            <td><strong>Participación confirmada</strong></td>
            <td>Root confirmó ante Associated Press que participa en GTA 6. No nombró a su personaje; asociarlo con Brian Heder es una inferencia de investigación de este sitio.</td>
          </tr>
          <tr>
            <td>Manni L. Perez</td>
            <td>Lucia Caminos</td>
            <td>Rumor</td>
            <td>La voz y las facciones coinciden con Lucia en los tráilers; identificada por fans a partir de su trabajo en TV. Sin confirmación oficial.</td>
          </tr>
          <tr>
            <td>Gregory Connors</td>
            <td>Jason Duval</td>
            <td>Rumor</td>
            <td>Un crédito de papel principal para un proyecto de Rockstar Games apareció en su portafolio y fue eliminado rápido. Sin confirmación oficial.</td>
          </tr>
          <tr>
            <td>Dylan Rourke</td>
            <td>Jason Duval (teoría alternativa)</td>
            <td>Rumor</td>
            <td>Nombrado en especulación de la comunidad como posible voz de Jason. Evidencia más débil que la lista de Connors.</td>
          </tr>
          <tr>
            <td>Sin anunciar</td>
            <td>Boobie Ike, Cal Hampton, DreQuan Priest, Raul Bautista, Real Dimez</td>
            <td>Sin rumores creíbles</td>
            <td>Ninguna fuente confiable ha vinculado a un intérprete con estos papeles secundarios todavía.</td>
          </tr>
        </tbody>
      </table>

      <p>
        Hasta que Rockstar publique una lista oficial de reparto, trata cada nombre excepto la participación de Stephen Root como no confirmado. Actualizamos esta tabla cada vez que un intérprete confirma un papel o aparece nueva evidencia. Para un desglose más profundo por actor, mira nuestra <Link href="/es/story/gta-6-cast-in-real-life/">guía del cast de GTA 6 en la vida real</Link>.
      </p>

      <h2>Personajes de GTA 5 vs Personajes de GTA 6</h2>
      <p>
        Al comparar el nuevo elenco con los icónicos <strong>personajes de GTA 5</strong>, el estilo narrativo ha evolucionado bastante. Mientras el juego anterior se apoyaba en tres historias distintas que a veces se cruzaban, el nuevo sistema se construye alrededor de una sola campaña cooperativa.
      </p>

      <table>
        <thead>
          <tr>
            <th>Categoría</th>
            <th>Personajes de GTA 5</th>
            <th>Personajes de GTA 6</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Elenco jugable</td>
            <td>Tres protagonistas hombres (Franklin, Michael, Trevor)</td>
            <td>Un protagonista hombre y una mujer (Lucia, Jason)</td>
          </tr>
          <tr>
            <td>Enfoque narrativo</td>
            <td>Jubilación, crisis de mediana edad y guerras de carteles</td>
            <td>Romance de forajidos, confianza y supervivencia mutua</td>
          </tr>
          <tr>
            <td>Sinergia entre personajes</td>
            <td>Alianzas sueltas por objetivos individuales</td>
            <td>Mecánica de confianza estilo Bonnie y Clyde en combate</td>
          </tr>
          <tr>
            <td>Ambientación</td>
            <td>Los Santos y el condado de Blaine</td>
            <td>Vice City y el estado de Leonida</td>
          </tr>
        </tbody>
      </table>

      <p>
        Este cambio a dos personajes muy unidos hace que el diálogo se sienta más íntimo. Tus decisiones en los atracos impactan directamente cómo se comporta el dúo, modificando su sinergia en combate.
      </p>

      <section className={styles.faqSection}>
        <h2>Preguntas Frecuentes</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Quiénes son los personajes principales de GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Los dos protagonistas jugables son Lucia, una astuta ex reclusa, y Jason, un conductor de escape con experiencia militar en combate.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Los personajes de GTA 6 en la vida real están basados en actores reales?</h3>
          <p className={styles.faqAnswer}>
            Sí, Rockstar Games usa escaneos faciales y captura de movimiento. La especulación apunta a Manni L. Perez como la voz de Lucia y a Gregory Connors como la voz de Jason.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Aparece algún personaje de GTA 5 en GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Aunque el juego comparte el mismo universo HD, ningún personaje principal de GTA V está confirmado para regresar en el modo historia.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Cómo funciona el cambio de personaje en GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Puedes cambiar al instante entre Lucia y Jason en el mundo abierto, mientras que los atracos exigen coordinar tareas en tiempo real.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Qué actores de GTA 6 están confirmados y cuáles son solo rumores?</h3>
          <p className={styles.faqAnswer}>
            Stephen Root es el único nombre confirmado, tras decirle a Associated Press que participa en el juego (no nombró a su personaje). Manni L. Perez como Lucia y Gregory Connors como Jason son los rumores más fuertes, respaldados por comparaciones de voz y un crédito eliminado de un portafolio, pero ninguno está confirmado oficialmente.
          </p>
        </div>
      </section>

      <p>
        Los fans pueden seguir nuestra cobertura mientras actualizamos los detalles del elenco completo de <strong>personajes de GTA 6</strong> hasta el lanzamiento del juego.
      </p>

      <p>
        Para más sobre el diseño de la campaña, consulta nuestro desglose de las características de la relación de Jason y Lucia en GTA 6.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "GTA 6 Personajes: Protagonistas, Elenco y Rumores",
            "description": "Guía completa de los personajes de GTA 6: Lucia y Jason como protagonistas, reparto secundario, actores confirmados y rumores.",
            "image": "https://www.gtavispot.com/images/GTAVI_Screenshots/People/gta-6-characters-feature.webp",
            "author": {
              "@type": "Person",
              "name": "Editorial Staff"
            },
            "publisher": {
              "@type": "Organization",
              "name": "GTA Vi Spot",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.gtavispot.com/logo.webp"
              }
            },
            "datePublished": "2026-10-10T00:00:00Z",
            "dateModified": "2026-10-10T00:00:00Z",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.gtavispot.com/es/story/gta-6-characters/"
            }
          })
        }}
      />
    </ImageLightbox>
  ),
};
