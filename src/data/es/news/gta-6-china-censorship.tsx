import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImageLightbox from '@/components/ui/ImageLightbox';
import { ArticleData } from '../../newsContent';
import styles from '../../../app/news/[slug]/page.module.css';

const NewsCTAButton = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <div style={{ margin: '1.25rem 0 1.75rem 0' }}>
      <Link href={href} className="news-cta-btn">
        <span>{children}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </Link>
    </div>
  );
};

export const gta6ChinaCensorshipEs: ArticleData = {
  title: 'Rockstar Censura el Tráiler de GTA 6 en China: Escenas Borrosas y Cambios',
  metaDescription: 'Rockstar Games publica una versión censurada del tráiler de GTA 6 en China en Bilibili. Mira qué escenas fueron difuminadas, desde discotecas hasta sangre y tabaco.',
  focusKeyword: 'Rockstar censura tráiler GTA 6 China',
  h1: 'Rockstar Censura el Tráiler Extended Look de GTA 6 en China: Todas las Escenas Borrosas Explicadas',
  publishedDate: 'September 5, 2026',
  modifiedDate: 'September 5, 2026',
  author: 'Marcus Vance',
  featureImage: '/images/news/gta-6-extended-look-feature.webp',
  featureImageAlt: 'Rockstar censura el tráiler de GTA 6 en China con desenfoques en escenas de discotecas y jugabilidad en Bilibili',
  videoSchema: {
    name: 'Censura del Tráiler de GTA 6 Extended Look en China',
    description: 'Análisis detallado de las escenas censuradas y difuminadas en el tráiler oficial de Grand Theft Auto 6 publicado en Bilibili (China).',
    thumbnailUrl: ['https://www.gtavispot.com/images/news/gta-6-extended-look-feature.webp'],
    uploadDate: '2026-09-05',
    duration: 'PT26M',
    contentUrl: 'https://www.gtavispot.com/es/news/gta-6-china-censorship/',
    embedUrl: 'https://www.youtube.com/embed/QdBZY2fkU-0'
  },
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
        .comparison-table-wrap {
          overflow-x: auto;
          margin: 1.75rem 0;
          border-radius: 12px;
          border: 1px solid var(--border, #e2e8f0);
          box-shadow: 0 4px 14px rgba(0,0,0,0.04);
        }
        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.95rem;
          text-align: left;
          background: var(--bg-surface, #ffffff);
        }
        .comparison-table th {
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
        .comparison-table td {
          padding: 12px 16px;
          border-bottom: 1px solid var(--border, #e2e8f0);
          color: var(--text-secondary, #475569);
          line-height: 1.5;
        }
        .comparison-table tr:last-child td {
          border-bottom: none;
        }
        .censor-badge-heavy {
          display: inline-block;
          padding: 3px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 700;
          background: rgba(220, 38, 38, 0.12);
          color: #dc2626;
          text-transform: uppercase;
        }
        .censor-badge-moderate {
          display: inline-block;
          padding: 3px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 700;
          background: rgba(245, 134, 52, 0.12);
          color: #d97706;
          text-transform: uppercase;
        }
        .censor-badge-none {
          display: inline-block;
          padding: 3px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 700;
          background: rgba(16, 185, 129, 0.12);
          color: #059669;
          text-transform: uppercase;
        }
      `}} />

      <p>
        En un llamativo giro de localización regional, <strong>Rockstar Games y su empresa matriz Take-Two Interactive han publicado una versión fuertemente censurada del tráiler <em>Extended Look de Grand Theft Auto VI</em> en China</strong>. La versión editada, subida directamente al canal verificado de Rockstar en la plataforma de vídeo <strong>Bilibili</strong> (el equivalente chino a YouTube), aplica agresivos bloques de desenfoque gaussiano sobre casi cualquier contenido para adultos: bailarinas de discoteca, escotes pronunciados, consumo de tabaco y charcos de sangre.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Puntos Clave: La Censura de GTA 6 en China</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Plataforma Afectada:</strong> El espacio oficial de Rockstar Games en <strong>Bilibili</strong> en China continental.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Elementos Censurados:</strong> Ropa femenina reveladora (escotes, bikinis, lencería), bailes sugerentes en discotecas, cigarrillos/puros y manchas de sangre gráfica.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>La Escena del Club Nocturno:</strong> Cuando el protagonista Jason Duval camina por la discoteca de Vice City, prácticamente toda la pantalla queda cubierta por filtros borrosos.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>La Gran Paradoja:</strong> La versión sin censura en 4K sigue disponible en el sitio web oficial de Rockstar en China sin necesidad de VPN, y el Tráiler 1 en Bilibili nunca fue editado.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Reclamaciones por Copyright:</strong> Take-Two está enviando avisos de derechos de autor contra creadores chinos que suben el tráiler original sin censura.</span>
          </li>
        </ul>
      </div>

      <h2>¿Cómo se descubrió la censura en Bilibili?</h2>
      <p>
        La censura fue detectada inicialmente por el usuario <strong>BDF</strong> en los foros de <em>GTA Forums</em> y rápidamente difundida por el reconocido creador de la comunidad <strong>BenVideoTech</strong> (videotechuk_).
      </p>
      <p>
        Según los registros de la plataforma, Rockstar subió en un primer momento el metraje original de 26 minutos sin ningún tipo de recorte tras su estreno mundial en Netflix. Ese vídeo permaneció público hasta el 31 de agosto de 2026, fecha en la que fue sustituido discretamente por la versión modificada con censura visual.
      </p>
      <p>
        El cambio generó un gran impacto en las redes asiáticas. Mientras los jugadores occidentales disfrutaban de una visión hiperrealista de la vida nocturna de Vice City, los usuarios chinos se encontraron con rectángulos pixelados que cubrían gran parte de los modelados de personajes y del entorno.
      </p>

      <div className={styles.featureImageContainer}>
        <Image 
          src="/images/Extended_Look_1.webp" 
          alt="Comparación del tráiler Extended Look de GTA 6" 
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>

      <NewsCTAButton href="/news/gta-6-extended-look/">
        Ver Análisis Completo del Extended Look en Netflix
      </NewsCTAButton>

      <h2>Las 4 Categorías Principales Censuradas por Rockstar</h2>
      <p>
        Una comparativa fotograma a fotograma entre la emisión mundial de YouTube/Netflix y el vídeo de Bilibili revela cuatro categorías concretas de contenido alteradas:
      </p>

      <div className="comparison-table-wrap">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Elemento Visual</th>
              <th>Versión Global (EE. UU. / Europa)</th>
              <th>Versión China (Bilibili)</th>
              <th>Nivel de Censura</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Bailarinas y Ropa de Discoteca</strong></td>
              <td>Bailarinas en bikini, lencería y vestidos ajustados</td>
              <td>Intenso desenfoque gaussiano cubriendo torsos y movimientos</td>
              <td><span className="censor-badge-heavy">Extremo</span></td>
            </tr>
            <tr>
              <td><strong>Tabaco y Cigarrillos</strong></td>
              <td>Personajes fumando cigarrillos y puros en cinemáticas</td>
              <td>Filtros borrosos sobre cigarrillos, labios y nubes de humo</td>
              <td><span className="censor-badge-heavy">Alto</span></td>
            </tr>
            <tr>
              <td><strong>Sangre y Violencia de Combate</strong></td>
              <td>Heridas de bala, sangre en el asfalto y salpicaduras</td>
              <td>Manchas de sangre difuminadas y texturas oscurecidas</td>
              <td><span className="censor-badge-moderate">Moderado</span></td>
            </tr>
            <tr>
              <td><strong>Escotes y Bikinis Femeninos</strong></td>
              <td>Bañadores naturales en transeúntes de Ocean Drive</td>
              <td>Cajas de desenfoque dinámicas siguiendo a los personajes</td>
              <td><span className="censor-badge-heavy">Alto</span></td>
            </tr>
            <tr>
              <td><strong>Tiroteos y Persecuciones Policiales</strong></td>
              <td>Acción táctica completa y choques a gran velocidad</td>
              <td>Jugabilidad, físicas de conducción y armas sin alterar</td>
              <td><span className="censor-badge-none">Ninguno</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>1. Vestimenta Femenina y Bailes Provocativos</h3>
      <p>
        Los cambios más notorios ocurren durante el recorrido de Jason por una exclusiva discoteca de Leonida. En la versión occidental, esta secuencia presume de la densidad de multitudes y la física de telas de nueva generación de Rockstar. En Bilibili, casi todas las bailarinas del escenario y los clientes cercanos tienen parches borrosos anclados a sus caderas y torsos.
      </p>

      <h3>2. Gestos de Fumar y Cigarrillos</h3>
      <p>
        Cumpliendo con la estricta normativa de retransmisión china contra el fomento del tabaquismo, cualquier personaje que sostenga un cigarrillo o exhale humo tiene la mano y la boca difuminadas digitalmente.
      </p>

      <h3>3. Salpicaduras de Sangre y Cuerpos Caídos</h3>
      <p>
        Durante los asaltos a tiendas y demostraciones de armas de fuego, las calcomanías de sangre sobre las paredes y el suelo han sido suavizadas y desaturadas para mitigar el impacto visual de violencia explícita, conforme a las directrices de la Administración Nacional de Radio y Televisión de China (NRTA).
      </p>

      <div className={styles.featureImageContainer}>
        <Image 
          src="/images/Extended_Look_2.webp" 
          alt="Secuencia de misión en el gameplay de GTA 6" 
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>

      <NewsCTAButton href="/es/gta-6-gameplay/">
        Conoce Todas las Mecánicas Confirmadas de GTA 6
      </NewsCTAButton>

      <h2>La Paradoja: El Tráiler Sigue Intacto en la Web de Rockstar</h2>
      <p>
        Lo más curioso del caso es la disparidad con la que se aplica esta censura. Mientras que el vídeo de Bilibili está modificado hasta el extremo, <strong>cualquier usuario en China continental puede entrar en la web oficial de Rockstar (rockstargames.com) sin VPN</strong> y ver el tráiler original en 4K con subtítulos oficiales en chino simplificado.
      </p>
      <p>
        Además, el primer tráiler oficial de <em>GTA 6</em> publicado en Bilibili en diciembre de 2023 continúa disponible sin censura alguna, a pesar de contener escenas en tejados con bikinis y exteriores de clubes para adultos.
      </p>
      <p>
        Los analistas de la industria señalan que esta diferencia se debe a la responsabilidad legal directa que tienen las <strong>redes sociales locales chinas</strong> ante la Administración del Ciberespacio de China (CAC), a diferencia de las webs corporativas extranjeras. Con la autocensura en Bilibili, Rockstar protege su canal corporativo de sanciones o cierres repentinos.
      </p>

      <h2>Reacciones de la Comunidad China y Reclamaciones de Take-Two</h2>
      <p>
        La comunidad de jugadores en foros chinos como Tieba, Weibo y Bilibili ha reaccionado de forma dividida:
      </p>
      <ul>
        <li>
          <strong>Postura de Cumplimiento:</strong> Muchos jugadores comprenden que se trata de un trámite rutinario para evitar bloqueos automatizados por parte de los filtros de moderación por IA de las plataformas chinas.
        </li>
        <li>
          <strong>Crítica al Exceso de Censura:</strong> Otros usuarios señalan que Take-Two ha sido innecesariamente prudente, creando una experiencia visual cómica que refleja una visión anticuada sobre la tolerancia del público adulto en el país.
        </li>
      </ul>
      <p>
        La polémica aumentó cuando varios creadores de contenido chinos que resubieron el tráiler original o hicieron vídeos de reacción comenzaron a recibir <strong>reclamaciones de derechos de autor por parte de Take-Two Interactive</strong>, obligándoles a compartir el material original mediante servidores en la nube y enlaces privados.
      </p>

      <div className={styles.featureImageContainer}>
        <Image 
          src="/images/Extanded Look/gta-6-grand-theft-auto-6-official-extended-gameplay.png" 
          alt="Arte promocional de GTA 6 Extended Look" 
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>

      <NewsCTAButton href="/news/gta-6-region-lock/">
        Consulta la Guía de Bloqueo Regional en PS5 y Xbox
      </NewsCTAButton>

      <h2>¿Qué Significa Esto Para el Lanzamiento de GTA 6 en Asia?</h2>
      <p>
        Esta situación ha reabierto el debate sobre cómo llegará la versión final de <em>Grand Theft Auto VI</em> a los mercados asiáticos el <strong>19 de noviembre de 2026</strong>.
      </p>
      <p>
        Dado que China continental no permite el lanzamiento comercial de títulos para adultos sin censura, los jugadores locales recurren habitualmente a la importación de discos físicos desde Hong Kong, Taiwán o Japón, o utilizan cuentas extranjeras en PlayStation Network y Xbox.
      </p>
      <p>
        Como explicamos en nuestra guía sobre el <Link href="/news/gta-6-region-lock/">bloqueo regional de GTA 6 en PS5</Link>, las ediciones físicas en disco no cuentan con bloqueo por región, por lo que los usuarios podrán disfrutar de la historia íntegra de <Link href="/es/story/gta-6-lucia-voice-actress/">Lucia Caminos</Link> y <Link href="/story/jason/">Jason Duval</Link> con todo su contenido adulto y visual sin recortes.
      </p>

      <h2>Preguntas Frecuentes</h2>
      <div className={styles.faqSection}>
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Por qué Rockstar censuró el tráiler de GTA 6 en China?</h3>
          <p className={styles.faqAnswer}>
            Para cumplir con las normativas locales de retransmisión digital en plataformas chinas como Bilibili sobre violencia, desnudez, bailes sugerentes y tabaco, protegiendo su canal oficial de posibles sanciones.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Qué partes exactas están borrosas en el tráiler de Bilibili?</h3>
          <p className={styles.faqAnswer}>
            Se han difuminado los escotes y bikinis de los personajes femeninos, los bailes de las discotecas, los cigarrillos encendidos y los charcos de sangre en las escenas de tiroteos.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Se puede ver el tráiler sin censura en China?</h3>
          <p className={styles.faqAnswer}>
            Sí. El sitio web oficial de Rockstar Games sigue accesible directamente en China sin VPN, mostrando el tráiler completo en 4K con subtítulos en chino simplificado.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Estará censurado el juego final de GTA 6 en el resto del mundo?</h3>
          <p className={styles.faqAnswer}>
            No. El lanzamiento global para PS5 y Xbox Series X|S mantiene las clasificaciones para mayores de edad (ESRB M y PEGI 18) con toda su violencia, humor adulto y temática criminal intactas.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Cuándo sale oficialmente GTA 6?</h3>
          <p className={styles.faqAnswer}>
            Grand Theft Auto VI saldrá a la venta en todo el mundo el 19 de noviembre de 2026 para PlayStation 5 y Xbox Series X|S.
          </p>
        </div>
      </div>

      <NewsCTAButton href="/es/gta-6-timeline/">
        Revisa la Cronología Completa del Desarrollo de GTA 6
      </NewsCTAButton>
    </ImageLightbox>
  )
};
