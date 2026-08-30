import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImageLightbox from '@/components/ui/ImageLightbox';
import { ArticleData } from '../../newsContent';
import styles from '../../../app/news/[slug]/page.module.css';

export const gta6ArtworksEs: ArticleData = {
  title: 'GTA 6 Artworks: Fondos de Pantalla y Arte Oficial 4K',
  metaDescription: 'Obtén la colección oficial de GTA 6 Artworks. Descarga fondos de pantalla 4K para ordenador y móviles de Lucia y Jason en Vice City en este nuevo portal.',
  focusKeyword: 'GTA 6 Artworks',
  h1: 'GTA 6 Artworks: Arte y Fondos de Pantalla Oficiales',
  publishedDate: 'August 27, 2026',
  modifiedDate: 'August 27, 2026',
  author: 'Marcus Vance',
  featureImage: '/images/GTAVI_Artwork_images/Jason_and_Lucia_01/Jason_and_Lucia_01_landscape.webp',
  featureImageAlt: 'Arte oficial de GTA 6 que muestra a los protagonistas Lucia y Jason apoyados en un coche deportivo rosa en Vice City bajo un cielo crepuscular.',
  content: (
    <ImageLightbox>
      <p>
        Rockstar Games ha publicado la colección de <strong>GTA 6 Artworks</strong> oficiales, con diseños de personajes en alta definición e ilustraciones de los parajes de Leonida. 
        Estas ilustraciones están pensadas para generar expectación antes del lanzamiento, ofreciendo a los seguidores un vistazo de la atmósfera y el reparto principal. 
        Te explicamos cómo descargar los archivos oficiales y configurar tu fondo de pantalla en ordenadores o teléfonos móviles.
      </p>

      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Resumen de Arte Oficial</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Formatos Oficiales:</strong> Disponibles en resoluciones 4K para escritorio, orientación vertical y móviles.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Reparto Ilustrado:</strong> Las imágenes muestran a los protagonistas Lucia y Jason junto a sheriffs locales y carteles.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Origen de Descarga:</strong> Los archivos se distribuyen de forma segura en la biblioteca oficial de Rockstar Games.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Formato Técnico:</strong> Las capturas están comprimidas en formato WebP para agilizar la carga del sitio.</span>
          </li>
        </ul>
      </div>

      <h2>¿Dónde Descargar los GTA 6 Artworks Oficiales?</h2>
      <p>
        La opción recomendada para descargar los <strong>GTA 6 Artworks</strong> auténticos es la sección de descargas de la <a href="https://www.rockstargames.com/VI" target="_blank" rel="noopener noreferrer">web oficial de Rockstar Games GTA VI</a>. 
        Allí, la compañía pone a disposición del público los diseños ordenados por resoluciones y plataformas específicas. 
        Evita descargar estas imágenes de portales secundarios para no exponerte a software malicioso o copias generadas por inteligencia artificial.
      </p>
      <p>
        Según las estadísticas oficiales de Rockstar, la ilustración principal ya supera los 10 millones de descargas en todo el mundo. 
        Este arte muestra a Lucia y Jason posando al atardecer, sirviendo como base del marketing oficial de la entrega. 
        Para saber cuándo se publicarán los primeros vídeos oficiales del juego usando estos modelos, lee sobre el próximo <Link href="/news/gta-6-extended-look/">Extended Look de GTA 6 en Netflix</Link>.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/GTAVI_Artwork_images/Jason_and_Lucia_01/Jason_and_Lucia_01_landscape.webp"
          alt="Arte principal de Jason y Lucia en formato horizontal"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
          priority
        />
      </div>

      <h2>¿Qué personajes están retratados en la galería oficial?</h2>
      <p>
        El conjunto de ilustraciones destaca a las figuras más importantes de la campaña en Leonida. 
        Además de la portada del dúo, las capturas individuales presentan a los contactos del juego. 
        Entre ellos se encuentran el sheriff Cal Hampton y el empresario Boobie Ike, cuyos roles describimos en la <Link href="/story/gta-6-characters/">guía de personajes de GTA 6</Link>.
      </p>
      <p>
        Cada diseño cuenta con tonalidades específicas que encajan con la estética urbana de Vice City. 
        Por ejemplo, el retrato de Cal Hampton emplea tonos anaranjados para evocar el entorno rural de Kelly County. 
        Por su parte, el arte de Jason y Lucia se apoya en morados y rosas intensos que representan la vida nocturna.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/images/GTAVI_Artwork_images/Jason_and_Lucia_02/Jason_and_Lucia_02_landscape.webp"
          alt="Jason y Lucia portando armas en una escena nocturna"
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.featureImage}
        />
      </div>

      <h2>Galería de Ilustraciones y Fondos de Pantalla</h2>
      <p>
        Haz clic en cualquiera de las imágenes de desarrollo oficiales expuestas abajo para desplegar el visualizador. 
        Puedes cambiar de captura en pantalla usando las flechas de dirección.
      </p>

      <div className={styles.galleryGrid}>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Jason_and_Lucia_01/Jason_and_Lucia_01_landscape.webp"
            alt="Ilustración principal de Lucia y Jason"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Jason_and_Lucia_01_With_Logos/Jason_and_Lucia_01_With_Logos_landscape.webp"
            alt="Ilustración principal de Lucia y Jason con logotipos oficiales"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Jason_and_Lucia_02/Jason_and_Lucia_02_landscape.webp"
            alt="Ilustración de Lucia y Jason con un coche"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Jason_and_Lucia_02_With_Logos/Jason_and_Lucia_02_With_Logos_landscape.webp"
            alt="Ilustración de Lucia y Jason con coche y logotipos oficiales"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Boobie_Ike/Boobie_Ike_landscape.webp"
            alt="Ilustración oficial del personaje Boobie Ike"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Cal_Hampton/Cal_Hampton_landscape.webp"
            alt="Ilustración del sheriff de Kelly County Cal Hampton"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/DreQuan_Priest/DreQuan_Priest_landscape.webp"
            alt="Ilustración del productor musical DreQuan Priest"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Real_Dimez/Real_Dimez_landscape.webp"
            alt="Ilustración del piloto de carreras Real Dimez"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Brian_Heder/Brian_Heder_landscape.webp"
            alt="Ilustración del casero y colaborador Brian Heder"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Postcards/Ambrosia/Ambrosia_Postcard_landscape.webp"
            alt="Postal ilustrada de Ambrosia"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Postcards/Grassrivers/Grassrivers_Postcard_landscape.webp"
            alt="Postal ilustrada de Grassrivers"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Postcards/Leonida_Keys/Leonida_Keys_Postcard_landscape.webp"
            alt="Postal ilustrada de Leonida Keys"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Postcards/Mount_Kalaga_National_Park/Mount_Kalaga_National_Park_Postcard_landscape.webp"
            alt="Postal ilustrada del parque nacional Mount Kalaga"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Postcards/Port_Gellhorn/Port_Gellhorn_Postcard_landscape.webp"
            alt="Postal ilustrada de Port Gellhorn"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.galleryImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Postcards/Vice_City/Vice_City_Postcard_landscape.webp"
            alt="Postal ilustrada de Vice City"
            width={200}
            height={113}
            sizes="(max-width: 768px) 50vw, 200px"
            className={styles.galleryImage}
          />
        </div>
      </div>

      <h2>¿Cómo elegir el formato adecuado para móvil y PC?</h2>
      <p>
        Para garantizar la mayor definición visual, debes emparejar la descarga con la pantalla de tu dispositivo. 
        Rockstar proporciona variantes ajustadas a resoluciones convencionales y monitores de juego:
      </p>

      <table>
        <thead>
          <tr>
            <th>Tipo de Pantalla</th>
            <th>Resolución Recomendada</th>
            <th>Relación de Aspecto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monitores Ultra HD 4K</td>
            <td>3840 x 2160</td>
            <td>16:9 Horizontal</td>
          </tr>
          <tr>
            <td>Pantalla de Portátiles</td>
            <td>1920 x 1080</td>
            <td>16:9 Horizontal</td>
          </tr>
          <tr>
            <td>Teléfonos Inteligentes</td>
            <td>1080 x 1920</td>
            <td>9:16 Vertical</td>
          </tr>
          <tr>
            <td>Tablet e iPad</td>
            <td>2048 x 2732</td>
            <td>4:3 Vertical</td>
          </tr>
        </tbody>
      </table>

      <h2>Fondos de Pantalla Verticales 9:16 para Móviles</h2>
      <p>
        Presentamos el catálogo completo de fondos de pantalla oficiales en orientación vertical 9:16, adaptados para smartphones y pantallas de bloqueo móviles. 
        Haz clic en cualquiera de las imágenes verticales de abajo para abrirlas en el visualizador en alta definición.
      </p>

      <div className={styles.portraitGalleryGrid}>
        <div className={styles.portraitImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Jason_and_Lucia_01/Jason_and_Lucia_01_portrait.webp"
            alt="Ilustración vertical de Lucia y Jason"
            width={150}
            height={267}
            sizes="(max-width: 768px) 33vw, 150px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.portraitImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Jason_and_Lucia_01_With_Logos/Jason_and_Lucia_01_With_Logos_portrait.webp"
            alt="Ilustración vertical de Lucia y Jason con logotipos oficiales"
            width={150}
            height={267}
            sizes="(max-width: 768px) 33vw, 150px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.portraitImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Jason_and_Lucia_02/Jason_and_Lucia_02_portrait.webp"
            alt="Ilustración vertical de Lucia y Jason con coche"
            width={150}
            height={267}
            sizes="(max-width: 768px) 33vw, 150px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.portraitImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Jason_and_Lucia_02_With_Logos/Jason_and_Lucia_02_With_Logos_portrait.webp"
            alt="Ilustración vertical de Lucia y Jason con coche y logotipos oficiales"
            width={150}
            height={267}
            sizes="(max-width: 768px) 33vw, 150px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.portraitImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Official_Cover_Art/Official_Cover_Art_portrait.webp"
            alt="Portada oficial de GTA 6 en formato vertical"
            width={150}
            height={267}
            sizes="(max-width: 768px) 33vw, 150px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.portraitImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Boobie_Ike/Boobie_Ike_portrait.webp"
            alt="Ilustración vertical del personaje Boobie Ike"
            width={150}
            height={267}
            sizes="(max-width: 768px) 33vw, 150px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.portraitImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Cal_Hampton/Cal_Hampton_portrait.webp"
            alt="Ilustración vertical del sheriff Cal Hampton"
            width={150}
            height={267}
            sizes="(max-width: 768px) 33vw, 150px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.portraitImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/DreQuan_Priest/DreQuan_Priest_portrait.webp"
            alt="Ilustración vertical del productor DreQuan Priest"
            width={150}
            height={267}
            sizes="(max-width: 768px) 33vw, 150px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.portraitImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Real_Dimez/Real_Dimez_portrait.webp"
            alt="Ilustración vertical del piloto Real Dimez"
            width={150}
            height={267}
            sizes="(max-width: 768px) 33vw, 150px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.portraitImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Brian_Heder/Brian_Heder_portrait.webp"
            alt="Ilustración vertical del colaborador Brian Heder"
            width={150}
            height={267}
            sizes="(max-width: 768px) 33vw, 150px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.portraitImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Raul_Bautista/Raul_Bautista_portrait.webp"
            alt="Ilustración vertical del contacto Raúl Bautista"
            width={150}
            height={267}
            sizes="(max-width: 768px) 33vw, 150px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.portraitImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Postcards/Ambrosia/Ambrosia_Postcard_portrait.webp"
            alt="Postal vertical ilustrada de Ambrosia"
            width={150}
            height={267}
            sizes="(max-width: 768px) 33vw, 150px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.portraitImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Postcards/Grassrivers/Grassrivers_Postcard_portrait.webp"
            alt="Postal vertical ilustrada de Grassrivers"
            width={150}
            height={267}
            sizes="(max-width: 768px) 33vw, 150px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.portraitImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Postcards/Leonida_Keys/Leonida_Keys_Postcard_portrait.webp"
            alt="Postal vertical ilustrada de Leonida Keys"
            width={150}
            height={267}
            sizes="(max-width: 768px) 33vw, 150px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.portraitImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Postcards/Mount_Kalaga_National_Park/Mount_Kalaga_National_Park_Postcard_portrait.webp"
            alt="Postal vertical ilustrada de Mount Kalaga"
            width={150}
            height={267}
            sizes="(max-width: 768px) 33vw, 150px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.portraitImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Postcards/Port_Gellhorn/Port_Gellhorn_Postcard_portrait.webp"
            alt="Postal vertical ilustrada de Port Gellhorn"
            width={150}
            height={267}
            sizes="(max-width: 768px) 33vw, 150px"
            className={styles.galleryImage}
          />
        </div>
        <div className={styles.portraitImageContainer}>
          <Image
            src="/images/GTAVI_Artwork_images/Postcards/Vice_City/Vice_City_Postcard_portrait.webp"
            alt="Postal vertical ilustrada de Vice City"
            width={150}
            height={267}
            sizes="(max-width: 768px) 33vw, 150px"
            className={styles.galleryImage}
          />
        </div>
      </div>

      <p>
        Asegúrate de que la imagen incluya las firmas oficiales del desarrollador. 
        Los fondos legítimos integran el logotipo de GTA VI en las esquinas, ayudando a diferenciarlos de recreaciones secundarias. 
        Si prefieres rastrear materiales previos no oficiales, puedes revisar la <Link href="/news/gta-6-leaks-timeline/">cronología de filtraciones de GTA 6</Link>.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', margin: '2rem 0' }}>
        {/* Card 1: Datos Técnicos */}
        <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.5rem', backgroundColor: '#f8fafc' }}>
          <h3 style={{ margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            📥 Datos de Descargas Oficiales
          </h3>
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li><strong>Múltiples encuadres:</strong> Formatos recortados específicamente para teléfonos inteligentes y tabletas.</li>
            <li><strong>Tecnología WebP:</strong> Los archivos emplean algoritmos que reducen el peso de almacenamiento sin perder definición.</li>
            <li><strong>Superposición de logotipos:</strong> Opción de obtener los fondos con o sin el nombre del videojuego impreso.</li>
          </ul>
        </div>
      </div>

      <p>
        El lanzamiento de estos materiales promocionales demuestra el cuidado de Rockstar en la presentación artística de la obra. 
        Con el lanzamiento del juego confirmado para el próximo año, este conjunto establece el estándar de fidelidad que disfrutaremos en consolas, de acuerdo con la <Link href="/es/gta-6-gameplay/">jugabilidad de GTA 6</Link> revelada. 
        No olvides volver a esta página para obtener los nuevos <strong>GTA 6 Artworks</strong> oficiales a medida que se publiquen, o lee nuestro manual para crear logotipos personalizados para tus <Link href="/es/news/rockstar-crews/">crews de Rockstar</Link> en GTA Online.
      </p>

      <section className={styles.faqSection}>
        <h2>Preguntas Frecuentes sobre los GTA 6 Artworks</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Dónde descargar los GTA 6 Artworks oficiales?</h3>
          <p className={styles.faqAnswer}>
            Los archivos legítimos se encuentran alojados en la biblioteca multimedia de la página oficial de Rockstar Games.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Se ofrecen fondos de pantalla en resolución 4K?</h3>
          <p className={styles.faqAnswer}>
            Sí, la distribuidora incluye variantes en Ultra HD 4K para pantallas panorámicas y opciones optimizadas para teléfonos inteligentes.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Existen fondos de pantalla separados para Lucia y Jason?</h3>
          <p className={styles.faqAnswer}>
            Sí, el sitio permite bajar las portadas grupales y también retratos individuales enfocados en cada protagonista.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Puedo usar estas ilustraciones de forma comercial?</h3>
          <p className={styles.faqAnswer}>
            No. Todo el material artístico de los personajes y logotipos está protegido por leyes de propiedad intelectual de Rockstar Games y su uso está limitado al ámbito personal.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Publicará Rockstar más material de arte antes del estreno?</h3>
          <p className={styles.faqAnswer}>
            Sí, se acostumbra a lanzar nuevas ilustraciones con la salida de cada avance de jugabilidad o inicio de reservas.
          </p>
        </div>
      </section>

      <p>
        Para contrastar estas imágenes con el material expuesto de compilaciones previas, visita el reporte de las <Link href="/es/news/gta-6-leaks-escalation/">filtraciones de GTA 6</Link>.
      </p>
    </ImageLightbox>
  ),
};
