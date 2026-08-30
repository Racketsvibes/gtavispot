import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImageLightbox from '@/components/ui/ImageLightbox';
import { ArticleData } from '../../newsContent';
import styles from '../../../app/news/[slug]/page.module.css';

export const gta6TimelineEs: ArticleData = {
  title: 'Cronología de GTA 6: Historia del Desarrollo y Videos',
  metaDescription: 'Sigue la cronología de GTA 6 desde el desarrollo inicial hasta el estreno del 19 de noviembre de 2026. Fechas de trailers, filtraciones y retrasos.',
  focusKeyword: 'cronología de GTA 6',
  h1: 'La Cronología de GTA 6: Fechas de Videos y Lanzamiento',
  publishedDate: 'August 30, 2026',
  modifiedDate: 'August 30, 2026',
  author: 'Marcus Vance',
  featureImage: '/images/gta-6-grand-theft-auto-6-official-extended-gameplay.webp',
  featureImageAlt: 'Banner oficial de la cronología de Grand Theft Auto VI con fondo de ciudad al atardecer y logotipo del juego.',
  content: (
    <ImageLightbox>
      <p>
        El seguimiento de la <strong>cronología de GTA 6</strong> es la forma idónea de comprender cómo ha evolucionado el desarrollo del videojuego más esperado. 
        Desde la fase conceptual tras el debut de GTA V hasta los sucesivos aplazamientos, Rockstar Games ha seguido un calendario estructurado de anuncios. 
        Revisamos en orden cronológico cada video oficial, hito técnico y filtración antes del lanzamiento.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Hitos Clave del Calendario</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Inicio de Producción:</strong> Los trabajos activos comenzaron en 2018 al concluir Red Dead Redemption 2.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Estreno de Trailer 1:</strong> 5 de diciembre de 2023, rompiendo récords históricos de visualizaciones en YouTube.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Fecha Confirmada:</strong> Fijada definitivamente para el 19 de noviembre de 2026 en PlayStation 5 y Xbox Series X|S.</span>
          </li>
        </ul>
      </div>

      <h2>¿Cómo inició el desarrollo en la cronología de GTA 6?</h2>
      <p>
        Las fases conceptuales iniciales dentro de la <strong>cronología de GTA 6</strong> se remontan a los meses posteriores al estreno de GTA V. 
        Antiguos empleados confirman que Rockstar organizó mesas de diseño preliminares para definir el mapa de juego. 
        La producción activa a gran escala se puso en marcha tras finalizar el desarrollo de Red Dead Redemption 2 en 2018.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', margin: '2.5rem 0', borderLeft: '3px solid #3b1578', paddingLeft: '1.5rem' }}>
        {/* Checkpoint 2014 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>2014</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Fase de Ideas y Preproducción</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            Tras lanzar Grand Theft Auto V en PlayStation 3 y Xbox 360, Rockstar estructuró los primeros equipos de planificación para diseñar las bases del nuevo mundo abierto.
          </p>
        </div>

        {/* Checkpoint 2018 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>2018</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Producción Activa Establecida</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            Con el envío de las copias físicas de Red Dead Redemption 2, los recursos y desarrolladores se reasignaron por completo al nuevo sandbox de Vice City.
          </p>
        </div>

        {/* Checkpoint Feb 2022 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>4 de Febrero de 2022</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Confirmación Oficial de Desarrollo</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            Rockstar Games comunicó de forma oficial que los trabajos para la nueva entrega de la saga Grand Theft Auto progresaban de forma constante a través de un boletín.
          </p>
        </div>

        {/* Checkpoint Sep 2022 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>18 de Septiembre de 2022</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Gran Filtración de Archivos</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            Una intrusión de seguridad expuso 90 grabaciones del desarrollo inicial en Vice City, confirmando la ambientación urbana y a los protagonistas, Lucia y Jason.
          </p>
          <div style={{ marginTop: '0.75rem' }}>
            <Link href="/es/news/gta-6-leaks-timeline/" className={styles.pinnedCta} style={{ display: 'inline-flex', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
              Ver Filtraciones
            </Link>
          </div>
        </div>
      </div>

      <h2>¿Cuándo iniciaron los videos oficiales de presentación?</h2>
      <p>
        La campaña de comunicación oficial se inició en diciembre de 2023. 
        El calendario se ha estructurado con trailers, artes oficiales y demostraciones que han definido la evolución del proyecto.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', margin: '2.5rem 0', borderLeft: '3px solid #3b1578', paddingLeft: '1.5rem' }}>
        {/* Checkpoint Dec 5, 2023 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>5 de Diciembre de 2023</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Trailer 1 Bate Récords en YouTube</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            El lanzamiento del primer video oficial generó 93 millones de visitas en sus primeras 24 horas, estableciendo el año 2025 como ventana de estreno.
          </p>
          <div style={{ marginTop: '0.75rem' }}>
            <Link href="/es/news/gta-6-trailer-3/" className={styles.pinnedCta} style={{ display: 'inline-flex', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
              Ver Análisis de Trailer
            </Link>
          </div>
        </div>

        {/* Checkpoint May 2, 2025 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>2 de Mayo de 2025</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Primer Aplazamiento a 2026</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            Take-Two Interactive comunicó en su balance comercial el primer retraso oficial, situando el estreno en la primavera de 2026.
          </p>
          <div style={{ marginTop: '0.75rem' }}>
            <Link href="/es/news/gta-6-delay/" className={styles.pinnedCta} style={{ display: 'inline-flex', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
              Ver Retraso
            </Link>
          </div>
        </div>

        {/* Checkpoint May 6, 2025 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>6 de Mayo de 2025</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Trailer 2 y Renovación de la Web</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            El segundo avance oficial se publicó junto a la actualización del portal web de Rockstar, detallando los perfiles de los seis condados de Leonida.
          </p>
        </div>

        {/* Checkpoint Nov 6, 2025 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>6 de Noviembre de 2025</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Estreno Fijado para Noviembre de 2026</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            Un segundo ajuste en el calendario comercial definió la fecha final del estreno mundial para el 19 de noviembre de 2026.
          </p>
          <div style={{ marginTop: '0.75rem' }}>
            <Link href="/es/news/gta-6-november-release/" className={styles.pinnedCta} style={{ display: 'inline-flex', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
              Ver Detalles del Estreno
            </Link>
          </div>
        </div>
      </div>

      <h2>¿Cómo progresa la campaña final durante 2026?</h2>
      <p>
        Al entrar en la recta final, los eventos de marketing se aceleran. 
        Los desgloses técnicos verifican los detalles de físicas e interacciones de juego antes de la llegada de las copias físicas a las tiendas.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', margin: '2.5rem 0', borderLeft: '3px solid #3b1578', paddingLeft: '1.5rem' }}>
        {/* Checkpoint May 21, 2026 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>21 de Mayo de 2026</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Lanzamiento del 19 de Noviembre Confirmado</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            La directiva de Take-Two confirmó en su informe de ganancias trimestrales que el juego ha superado los test internos y la fecha está asegurada.
          </p>
          <div style={{ marginTop: '0.75rem' }}>
            <Link href="/es/news/gta-6-release-date/" className={styles.pinnedCta} style={{ display: 'inline-flex', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
              Ver Fecha de Estreno
            </Link>
          </div>
        </div>

        {/* Checkpoint June 18, 2026 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>18 de Junio de 2026</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Diseño de Portada Oficial</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            Rockstar Games presentó la ilustración definitiva de la carátula, abriendo la preventa de las ediciones estándar y coleccionista a escala global.
          </p>
          <div style={{ marginTop: '0.75rem' }}>
            <Link href="/es/news/gta-6-artworks/" className={styles.pinnedCta} style={{ display: 'inline-flex', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
              Ver Galería de Arte
            </Link>
          </div>
        </div>

        {/* Checkpoint Aug 28, 2026 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>28 de Agosto de 2026</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Showcase de Netflix Extended Look</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            Una retransmisión especial de 26 minutos de jugabilidad real debutó en Netflix, posicionándose como tendencia número uno global.
          </p>
          <div style={{ marginTop: '0.75rem' }}>
            <Link href="/es/news/gta-6-netflix-viewership/" className={styles.pinnedCta} style={{ display: 'inline-flex', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
              Ver Datos de Audiencia
            </Link>
          </div>
        </div>

        {/* Checkpoint Aug 29, 2026 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>29 de Agosto de 2026</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Desglose de Jugabilidad y Galería de Capturas</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            Se publicó el informe técnico confirmando el sistema de físicas y una galería de 37 capturas para examinar detalles de la IA policial.
          </p>
          <div style={{ marginTop: '0.75rem' }}>
            <Link href="/es/gta-6-gameplay/" className={styles.pinnedCta} style={{ display: 'inline-flex', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
              Ver Análisis de Físicas
            </Link>
          </div>
        </div>

        {/* Checkpoint Aug 30, 2026 */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-1.95rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b1578', border: '3px solid #fff' }}></div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e84590', textTransform: 'uppercase', letterSpacing: '0.05em' }}>30 de Agosto de 2026</span>
          <h3 style={{ margin: '0.2rem 0 0.5rem 0', fontSize: '1.25rem' }}>Actualización de Crews de Rockstar Games</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a4a68' }}>
            Social Club implementó cambios en la creación de clanes y carga de emblemas personalizados en preparación para el multijugador.
          </p>
          <div style={{ marginTop: '0.75rem' }}>
            <Link href="/es/news/rockstar-crews/" className={styles.pinnedCta} style={{ display: 'inline-flex', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
              Ver Guía de Crews
            </Link>
          </div>
        </div>
      </div>

      <h2>¿Cómo verificamos los hitos de la cronología de GTA 6?</h2>
      <p>
        Cada fecha y evento en esta cronología ha sido verificado con los canales corporativos de Take-Two Interactive y comunicados de prensa. 
        Puedes verificar el estado de los servidores y cuentas en la web oficial del <a href="https://socialclub.rockstargames.com/" target="_blank" rel="noopener noreferrer">Rockstar Games Social Club</a>.
      </p>

      <table>
        <thead>
          <tr>
            <th>Grupo de Eventos</th>
            <th>Cifra de Hitos</th>
            <th>Fuentes de Verificación Primarias</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fase de Desarrollo</td>
            <td>4 hitos</td>
            <td>Rockstar Newswire, informes financieros, perfiles de desarrollo</td>
          </tr>
          <tr>
            <td>Videos y Presentaciones</td>
            <td>4 hitos</td>
            <td>Canal oficial de YouTube, portales web de Rockstar, archivos SEC</td>
          </tr>
          <tr>
            <td>Campaña de Lanzamiento</td>
            <td>5 hitos</td>
            <td>Estadísticas de Netflix, base de datos Social Club, registros de preventa</td>
          </tr>
        </tbody>
      </table>

      <p>
        Al aproximarse los eventos de preventa y distribución física final, mantén guardada esta <strong>cronología de GTA 6</strong> para seguir el calendario.
      </p>

      <section className={styles.faqSection}>
        <h2>Preguntas Frecuentes sobre la Cronología de GTA 6</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Cuál es la fecha oficial de lanzamiento de GTA 6?</h3>
          <p className={styles.faqAnswer}>
            La fecha definitiva del lanzamiento mundial está confirmada para el 19 de noviembre de 2026 en PlayStation 5 y Xbox Series.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Cuántas veces se ha retrasado el juego?</h3>
          <p className={styles.faqAnswer}>
            El juego se ha retrasado oficialmente dos veces: primero de finales de 2025 a la primavera de 2026, y posteriormente a su fecha final de noviembre.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Cuándo se publicó el primer video oficial de GTA 6?</h3>
          <p className={styles.faqAnswer}>
            El Trailer 1 se publicó oficialmente el 5 de diciembre de 2023, mostrando por primera vez a los protagonistas Jason y Lucia en Leonida.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿GTA 6 estará disponible en PC de lanzamiento?</h3>
          <p className={styles.faqAnswer}>
            No, el lanzamiento el 19 de noviembre de 2026 prioriza a las consolas. La versión de PC se publicará posteriormente en una fecha estimada para 2027.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Dónde se publican los anuncios oficiales de Rockstar?</h3>
          <p className={styles.faqAnswer}>
            Puedes seguir los anuncios oficiales directamente a través del Newswire de Rockstar Games o mediante nuestro portal de noticias.
          </p>
        </div>
      </section>
    </ImageLightbox>
  ),
};
