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

export const gta6CastInRealLifeEs: StoryArticleData = {
  title: 'GTA 6 Cast en la Vida Real: Actores y Personajes',
  metaDescription: 'Conoce el gta 6 cast en la vida real: Stephen Root confirmado como Brian Heder; Manni L. Perez y Dylan Rourke, reportados. Datos calificados con honestidad.',
  focusKeyword: 'gta 6 cast',
  h1: 'GTA 6 Cast en la Vida Real: Actores, Fotos y Papeles',
  publishedDate: 'October 10, 2026',
  modifiedDate: 'October 10, 2026',
  author: 'Editorial Staff',
  featureImage: '/images/People/stephen-root-real-life.webp',
  featureImageAlt: 'Stephen Root en la vida real, la voz confirmada de Brian Heder en GTA 6',
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
        .cast-badge {
          display: inline-block;
          padding: 5px 14px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .badge-confirmed { background: #166534; color: #ffffff; }
        .badge-reported { background: #b45309; color: #ffffff; }
        .badge-fantheory { background: #4b5563; color: #ffffff; }
        .method-box {
          border: 1px solid #e5e7eb;
          border-left: 4px solid #d6246e;
          border-radius: 10px;
          padding: 18px 22px;
          margin: 1.5rem 0;
          background: #fafafa;
        }
        .method-box h3 {
          margin-top: 0;
          font-size: 1.05rem;
        }
        .method-box ul {
          margin-bottom: 0.5rem;
        }
        .cast-table td:first-child { font-weight: 700; white-space: nowrap; }
      `}} />

      <p>
        Aquí está el <strong>gta 6 cast en la vida real</strong>, con una sola regla: cada actor recibe una calificación honesta de la evidencia. Stephen Root confirmó su papel ante Associated Press en septiembre de 2026, mientras que Manni L. Perez (Lucia) y Dylan Rourke (Jason) siguen ampliamente reportados pero sin confirmar. Ninguna otra página del elenco califica sus datos con esta honestidad.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Respuesta Rápida: El Cast de GTA 6 en la Vida Real</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Stephen Root → Brian Heder</strong>: el único casting <strong>confirmado</strong> públicamente. Él mismo se lo dijo a AP el 13 de septiembre de 2026.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Manni L. Perez → Lucia</strong>: <strong>ampliamente reportada</strong>, sin confirmar. Ella ha negado su participación cuando se lo preguntaron.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Dylan Rourke → Jason</strong>: <strong>reportado</strong> por fuentes internas. Gregory Connors es el nombre alternativo reportado.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Oscar Jaenada → Raul Bautista</strong>: solo <strong>teoría de fans</strong>. Ningún reporte lo respalda.</span>
          </li>
        </ul>
      </div>

      <p>Última revisión: 10 de octubre de 2026.</p>

      <h2>El Cast de GTA 6 en la Vida Real, Calificado con Honestidad</h2>
      <p>
        Rockstar Games no ha publicado ninguna lista oficial del <strong>reparto de GTA 6</strong>. Por eso cada fila de abajo lleva una calificación de evidencia: para que sepas exactamente qué está confirmado, qué está reportado y qué es solo especulación de fans.
      </p>
      <table className="cast-table">
        <thead>
          <tr>
            <th>Personaje</th>
            <th>Actor en la Vida Real</th>
            <th>Calificación de Evidencia</th>
            <th>Evidencia Clave</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Brian Heder</td>
            <td>Stephen Root</td>
            <td>Confirmado</td>
            <td>Root confirmó su papel ante AP News el 13 de septiembre de 2026</td>
          </tr>
          <tr>
            <td>Lucia</td>
            <td>Manni L. Perez</td>
            <td>Ampliamente reportada</td>
            <td>Reporte interno; coincidencia de rostro y voz, pero Perez niega su participación</td>
          </tr>
          <tr>
            <td>Jason</td>
            <td>Dylan Rourke</td>
            <td>Reportado</td>
            <td>Reporte interno; coincidencia de rostro y voz (alternativo: Gregory Connors)</td>
          </tr>
          <tr>
            <td>Raul Bautista</td>
            <td>Oscar Jaenada</td>
            <td>Teoría de fans, sin verificar</td>
            <td>Solo comparaciones visuales de fans; cero reportes</td>
          </tr>
        </tbody>
      </table>

      <div className="method-box">
        <h3>Cómo Calificamos los Datos de Casting</h3>
        <ul>
          <li><strong>Confirmado</strong>: el actor lo dijo él mismo, o Rockstar lo acreditó.</li>
          <li><strong>Ampliamente reportado</strong>: varios medios o fuentes internas lo reportan, pero nadie está registrado oficialmente.</li>
          <li><strong>Teoría de fans</strong>: los fans conectaron los puntos; no existe ningún reporte creíble.</li>
        </ul>
        <p style={{ marginBottom: 0 }}>
          Según los reportes, a los intérpretes se les recordó que sus acuerdos de confidencialidad duran hasta el 19 de noviembre, así que el silencio no prueba nada. Las calificaciones cambian en cuanto cambian los hechos. <strong>Última verificación: 10 de octubre de 2026.</strong>
        </p>
      </div>

      <h2>¿Quién Interpreta a Brian Heder? Stephen Root, el Único Casting Confirmado</h2>
      <div><span className="cast-badge badge-confirmed">✓ Confirmado</span></div>
      <div className={styles.galleryGrid}>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/stephen-root-real-life.webp"
            alt="Stephen Root en la vida real, confirmado como Brian Heder en GTA 6"
            width={400}
            height={225}
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Brian%20Heder/Brian_Heder_01.webp"
            alt="Brian Heder, personaje de GTA 6"
            width={400}
            height={225}
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.galleryImage}
          />
        </div>
      </div>
      <p>
        Stephen Root es el primer actor en confirmar públicamente un papel en GTA 6. En la fiesta BAFTA TV Tea Party del 13 de septiembre de 2026, le dijo a Associated Press: <em>&ldquo;Sí, me van a ver en el juego.&rdquo;</em> Rockstar nunca ha publicado una lista de reparto, así que un actor hablando oficialmente es un hecho genuino.
      </p>
      <p>
        Un matiz honesto: Root nunca nombró a su personaje ante AP. La conexión con Brian Heder viene de la coincidencia de voz más la propia biografía del personaje de Rockstar: los fans lo identificaron de oído mucho antes de que hablara. Calificamos su participación como confirmada y el papel de Brian Heder como la coincidencia casi segura, según <a href="https://www.polygon.com/gta-6-first-actor-confirmed-stephen-root-widows-bay/" target="_blank" rel="noopener noreferrer">la cobertura de Polygon sobre la entrevista con AP</a>.
      </p>
      <p>
        Conoces a Root por <em>Barry</em> (Monroe Fuches), <em>King of the Hill</em> (Bill Dauterive y Buck Strickland), <em>Office Space</em> (Milton) y <em>NewsRadio</em>; fue nominado al Emmy por <em>Widow&apos;s Bay</em>. La biografía de Rockstar describe a Brian Heder como un clásico traficante de la época dorada del contrabando, que sigue moviendo producto desde su astillero en los Cayos de Leonida junto a su tercera esposa, Lori. En la historia, Brian deja que Jason viva gratis en una de sus propiedades, siempre que Jason ayude con los ajustes de cuentas locales. Lee nuestro <Link href="/es/story/stephen-root-gta-6/">análisis completo de Stephen Root en GTA 6</Link>.
      </p>

      <h2>¿Manni L. Perez Es Realmente Lucia?</h2>
      <div><span className="cast-badge badge-reported">◐ Ampliamente Reportada, Sin Confirmar</span></div>
      <div className={styles.galleryGrid}>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/ManniLPerez-VoiceActress.webp"
            alt="Manni L. Perez, ampliamente reportada como la intérprete de Lucia en GTA 6, sin confirmar"
            width={400}
            height={225}
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Lucia%20Caminos/Lucia_Caminos_02.webp"
            alt="Lucia Caminos, personaje de GTA 6"
            width={400}
            height={225}
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/manni-l-perez-real-life.webp"
            alt="Manni L. Perez en un estudio de grabación, la voz reportada de Lucia en GTA 6"
            width={400}
            height={225}
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.galleryImage}
          />
        </div>
      </div>
      <p>
        Manni L. Perez es la candidata más mencionada para Lucia, y sigue sin confirmar. Un reporte interno vía el youtuber LegacyKillaHD nombró a Perez como Lucia, y los fans han comparado su rostro y su voz con el personaje desde que salió el primer tráiler en diciembre de 2023, como <a href="https://www.Dexerto.com/gta/gta-6-jason-and-lucia-actors-finally-revealed-according-to-insider-2691433/" target="_blank" rel="noopener noreferrer">reportó Dexerto</a>.
      </p>
      <p>
        Sus créditos encajan con la costumbre de Rockstar de contratar actores en activo en lugar de estrellas: <em>Law &amp; Order: SVU</em> (ganó un premio Imagen como Esperanza Morales), <em>Jessica Jones</em>, <em>Blindspot</em>, <em>Chicago P.D.</em> y <em>The Blacklist</em>. Incluso ya tiene un crédito con Rockstar: fue crupier de blackjack en la actualización del Diamond Casino de GTA Online.
      </p>
      <p>
        Las advertencias honestas: Perez ha negado su participación cuando se lo preguntaron, respondiendo simplemente &ldquo;no&rdquo;, y Rockstar no ha confirmado nada. Hasta que ella o el estudio digan lo contrario, esto queda como <strong>ampliamente reportado</strong>, nunca confirmado. Mira nuestra <Link href="/es/story/gta-6-lucia-voice-actress/">investigación sobre la actriz de voz de Lucia</Link> y la <Link href="/es/story/gta-6-lucia-voice-actress/">guía del personaje de Lucia en GTA 6</Link>.
      </p>

      <h2>¿Quién Interpreta a Jason? Dylan Rourke, Reportado Sin Confirmar</h2>
      <div><span className="cast-badge badge-reported">◐ Reportado, Sin Confirmar</span></div>
      <div className={styles.galleryGrid}>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/dylan_rourke.webp"
            alt="Dylan Rourke en la vida real, el principal candidato reportado para Jason en GTA 6"
            width={400}
            height={225}
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Jason%20Duval/Jason_Duval_04.webp"
            alt="Jason Duval, personaje de GTA 6"
            width={400}
            height={225}
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/dylan-rourke-real-life.webp"
            alt="Retrato de Dylan Rourke, reportado como el intérprete de Jason Duval en GTA 6"
            width={400}
            height={225}
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.galleryImage}
          />
        </div>
      </div>
      <p>
        Dylan Rourke es el principal candidato reportado para Jason Duval. El mismo reporte interno que nombró a Perez para Lucia nombró a Rourke para Jason, y los fans señalan la coincidencia en la estructura facial y el tono vocal con los tráilers.
      </p>
      <p>
        Quizá lo reconozcas por apariciones de un episodio en <em>Grey&apos;s Anatomy</em> y <em>Modern Family</em>; el resto de su currículum son proyectos más pequeños, exactamente el patrón de casting discreto que Rockstar prefiere.
      </p>
      <p>
        El nombre alternativo reportado es <strong>Gregory Connors</strong>, cuyo currículum de agencia listó brevemente un papel &ldquo;principal&rdquo; en un proyecto de Rockstar Games antes de que la lista fuera eliminada. Y un nombre que puedes tachar: Troy Baker dijo explícitamente que él <em>no</em> es Jason. Lee nuestra <Link href="/es/story/gta-6-jason-voice-actor/">investigación completa sobre la voz de Jason</Link> y la <Link href="/es/story/gta-6-jason-voice-actor/">guía del personaje de Jason en GTA 6</Link>.
      </p>

      <h2>¿Oscar Jaenada Está en GTA 6? Solo Como Teoría de Fans</h2>
      <div><span className="cast-badge badge-fantheory">○ Teoría de Fans, Sin Verificar</span></div>
      <div className={styles.galleryGrid}>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Oscar-Jaenada-real-life.webp"
            alt="Oscar Jaenada en la vida real, vinculado por fans a Raul Bautista en GTA 6, sin verificar"
            width={400}
            height={225}
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/People/Raul%20Bautista/Raul_Bautista_01.webp"
            alt="Raul Bautista, personaje de GTA 6"
            width={400}
            height={225}
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.galleryImage}
          />
        </div>
      </div>
      <p>
        Oscar Jaenada como Raul Bautista es una teoría de fans: <strong>ningún reporte la respalda</strong>. Los fans vincularon al actor español con el contacto del cartel de Vice Port a través de comparaciones visuales y publicaciones en redes, y esa es toda la evidencia.
      </p>
      <p>
        Jaenada es un actor genuinamente consagrado: ganó el Goya al mejor actor por <em>Camarón</em> (2005), interpretó al español en <em>Pirates of the Caribbean: On Stranger Tides</em> y protagonizó <em>Cantinflas</em>, <em>Rambo: Last Blood</em> y <em>The Shallows</em>, según <a href="https://en.wikipedia.org/wiki/Óscar_Jaenada" target="_blank" rel="noopener noreferrer">su biografía</a>.
      </p>
      <p>
        ¿Por qué incluirlo entonces? Porque la teoría está por todas partes, y fingir que no existe no ayuda a nadie. La calificación honesta es <strong>teoría de fans, sin verificar</strong>, y ahí se queda hasta que un reporte creíble diga lo contrario. Mira nuestra <Link href="/es/story/voice-actors/">guía del personaje de Raul Bautista</Link>.
      </p>

      <StoryCTAButton href="/es/story/gta-6-characters/">
        Ver Todos los Personajes de GTA 6
      </StoryCTAButton>

      <section className={styles.faqSection}>
        <h2>Preguntas Frecuentes</h2>
        <div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>¿Está confirmada Manni L. Perez como Lucia?</h3>
            <p className={styles.faqAnswer}>
              No. Es la candidata más mencionada para Lucia: nombrada en un reporte interno y comparada por los fans con el rostro y la voz del personaje. Pero ella ha negado su participación cuando se lo preguntaron, y ni ella ni Rockstar lo han confirmado.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>¿Quién está confirmado en el cast de GTA 6?</h3>
            <p className={styles.faqAnswer}>
              Stephen Root, quien le dijo a Associated Press el 13 de septiembre de 2026 que aparece en GTA 6. Es el único actor que ha hablado oficialmente sobre un papel; la conexión con Brian Heder viene de la coincidencia de voz con la biografía del personaje de Rockstar.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>¿Oscar Jaenada está en GTA 6?</h3>
            <p className={styles.faqAnswer}>
              No hay evidencia de que lo esté. El vínculo con Raul Bautista es especulación de fans basada en comparaciones visuales, sin ningún reporte detrás. Rockstar no ha nombrado a ningún intérprete para Raul Bautista.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>¿Quién hace la voz de Jason en GTA 6?</h3>
            <p className={styles.faqAnswer}>
              Nadie confirmado. Dylan Rourke es el principal candidato reportado, y Gregory Connors es el nombre alternativo reportado tras una lista filtrada en un currículum. Troy Baker ha negado explícitamente ser la voz de Jason.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>¿Por qué Rockstar no ha confirmado el cast de GTA 6?</h3>
            <p className={styles.faqAnswer}>
              Rockstar no publica listas de reparto, y según los reportes <a href="https://www.gtavice.net/news/rockstar-reportedly-reminds-gta-6-actors-their-ndas-last-until-release-day" target="_blank" rel="noopener noreferrer">a los actores se les recordó que sus acuerdos de confidencialidad duran hasta el 19 de noviembre</a>. La respuesta de Stephen Root en la alfombra roja sigue siendo la excepción, no la regla.
            </p>
          </div>
        </div>
      </section>

      <p>
        Ese es el <strong>elenco de GTA 6</strong> en la vida real hasta octubre de 2026: uno confirmado, dos reportados y una teoría de fans. Para conocer a los personajes detrás de los <strong>actores de GTA 6</strong>, mira nuestra <Link href="/es/story/voice-actors/">guía de actores de voz de GTA 6</Link>.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "GTA 6 Cast en la Vida Real: Actores y Personajes",
            "description": "El cast de GTA 6 en la vida real con calificación honesta de la evidencia: Stephen Root confirmado, Manni L. Perez y Dylan Rourke reportados.",
            "image": "https://www.gtavispot.com/images/People/stephen-root-real-life.webp",
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
              "@id": "https://www.gtavispot.com/es/story/gta-6-cast-in-real-life/"
            }
          })
        }}
      />
    </ImageLightbox>
  ),
};
