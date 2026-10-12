import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArticleData } from '../../newsContent';
import styles from '../../../app/news/[slug]/page.module.css';
import PreOrderWidget from '../../../components/PreOrderWidget';


export const gta6PreOrderEs: ArticleData = {
  title: 'Guía de reserva de GTA 6: ediciones y bonos',
  metaDescription: 'Las reservas de GTA 6 abrieron el 25 de junio de 2026. Compara las ediciones Estándar y Ultimate, descubre los bonos y consigue el Vintage Vice City Pack.',
  focusKeyword: 'reservar GTA 6',
  h1: 'Guía de reserva de GTA 6: ediciones y bonos',
  publishedDate: 'June 25, 2026',
  modifiedDate: 'October 12, 2026',
  author: 'Marcus Vance',
  featureImage: '/ultimate edition and Bounses/GTA 6 Ultimate Edition.webp',
  featureImageAlt: 'Guía oficial de reserva de GTA 6: compara las ediciones Estándar y Ultimate',
  content: (
    <>
      <p>
        Las reservas de GTA 6 están oficialmente abiertas desde el <strong>25 de junio de 2026</strong> para PS5 y Xbox Series X|S. El juego se lanza el 19 de noviembre de 2026, con paquetes estándar y ultimate disponibles en todas las tiendas digitales. Los primeros datos muestran una enorme ola de cifras de preventa que indican que será el lanzamiento mediático más grande de la historia. Puedes reservar tu copia hoy para asegurar tus bonos y prepararte para el regreso a Vice City.
      </p>

      <PreOrderWidget />


      <div className={styles.quickAnswer}>
        <span className={styles.quickAnswerTitle}>Respuesta rápida: datos clave de la reserva</span>
        <ul className={styles.quickAnswerList}>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Fecha de inicio de reservas:</strong> <strong>25 de junio de 2026</strong> (ya disponible en todo el mundo).</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Edición Estándar ($79.99):</strong> contiene el juego base.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Edición Ultimate ($99.99):</strong> añade vehículos premium, armas, cosméticos y garajes personalizados.</span>
          </li>
          <li className={styles.quickAnswerItem}>
            <span className={styles.quickAnswerDot}>•</span>
            <span><strong>Bono de reserva:</strong> Vintage Vice City Pack incluido en las compras realizadas antes del 20 de noviembre de 2026.</span>
          </li>
        </ul>
      </div>

      <h2>¿Cuándo se puede reservar GTA 6?</h2>
      <p>
        Las reservas de GTA 6 empezaron el <strong>25 de junio de 2026</strong>. Rockstar Games hizo el anuncio oficial y fijó el inicio de las reservas en las principales plataformas digitales y tiendas físicas. Puedes comprar el juego en digital, ver los bonos digitales del paquete de la edición deluxe de GTA 6 o reservar una copia física de GTA 6 en tu tienda de videojuegos local.
      </p>
      <p>
        Si compras el juego en digital, puedes cancelar tu reserva con reembolso completo hasta que se abra la ventana de precarga el 17 de noviembre de 2026. Esta política te da flexibilidad si cambian tus planes. Las reservas físicas siguen las políticas de devolución de cada tienda.
      </p>

      <h2>¿Qué incluye la Edición Ultimate de GTA 6?</h2>
      <p>
        La <strong>Edición Ultimate de GTA 6</strong> cuesta $99.99 y reparte contenido premium a lo largo de la historia de Jason y Lucia. En lugar de darte todo al principio, estos bonos se desbloquean de forma dinámica a medida que avanzas por cada capítulo. Estos son los objetos y mejoras principales que desbloquearás en el nivel ultimate:
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/ultimate edition and Bounses/JASON’S SAFEHOUSE VEHICLES.webp"
          alt="Vehículos del piso franco de Jason, incluida la motocicleta Dinka Enduro y el kayak Crest, en la Edición Ultimate de GTA 6"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 840px"
          className={styles.featureImage}
        />
      </div>

      <h3>Grotti Cheetah deportivo</h3>
      <p>
        El legendario <strong>Grotti Cheetah del 95</strong> está de vuelta. Con un diseño retrofuturista de Shore Drive, desbloquearás este deportivo de mediados de los 90 en los capítulos finales de la historia principal. Descubre más sobre los otros modelos disponibles en nuestra lista de vehículos de GTA VI o explora la base de datos completa de motocicletas de GTA 6.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/ultimate edition and Bounses/95 Grotti Cheetah.webp"
          alt="Deportivo Grotti Cheetah de 1995 con diseño exclusivo en la Edición Ultimate de GTA 6"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 840px"
          className={styles.featureImage}
        />
      </div>

      <h3>Revólveres Hawk y Little Morgan</h3>
      <p>
        En cuanto a potencia de fuego, recibirás los <strong>revólveres Hawk y Little Morgan</strong>. Procedentes de la finca Vercetti, estas armas para él y para ella tienen empuñaduras grabadas con palmeras, grabados personalizados y miras de alto rendimiento. También obtienes variantes personalizadas para la pistola Girardi ES9 de Jason y la Klose K17 de Lucia.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/ultimate edition and Bounses/Hawk.webp"
          alt="Revólveres Hawk y Little Morgan con empuñaduras estilo Vice City en la Edición Ultimate de GTA 6"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 840px"
          className={styles.featureImage}
        />
      </div>

      <h3>Vehículos, garajes y kits de modificación</h3>
      <p>
        Obtienes acceso anticipado a vehículos del piso franco como la motocicleta Dinka Enduro y el kayak Crest. El paquete también incluye el kit de modificación Vapid Ganado Retro Build, que te permite convertir la camioneta baja de Jason en una muscle truck personalizada.
      </p>
      <p>
        Los fans del todoterreno reciben el <strong>buggy Vapid Dominator del 67</strong> junto con el garaje Watson Bay Paradise, con armero y punto de entrega para la valla.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/ultimate edition and Bounses/67 VAPID DOMINATOR BUGGY.webp"
          alt="Buggy Vapid Dominator de 1967 estacionado dentro del garaje Watson Bay Paradise en la Edición Ultimate de GTA 6"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 840px"
          className={styles.featureImage}
        />
      </div>

      <h3>Tiendas y servicios exclusivos</h3>
      <p>
        La Edición Ultimate desbloquea varios <strong>negocios exclusivos</strong> en Leonida a los que los jugadores estándar no pueden acceder:
      </p>
      <ul>
        <li><strong>Rideout Customs:</strong> un taller premium de modificaciones con llantas de alta gama, interiores personalizados detallados y clásicas preparaciones donk.</li>
        <li><strong>Sara's Unisex Salon:</strong> un salón con peinados exclusivos, edición de vello facial y opciones de manicura.</li>
        <li><strong>Stock 305:</strong> una tienda de ropa premium en Stockyard con streetwear de nivel alto.</li>
        <li><strong>Electric Fang Tattoo:</strong> el principal estudio de tatuajes de Stockyard, con más de 50 diseños exclusivos creados por el colectivo de artistas FAILE.</li>
        <li><strong>One-Eyed Willie's:</strong> un taller junto al lago Leonida especializado en modificaciones todoterreno pintadas a mano.</li>
      </ul>

      <h3>Exploración y misiones extra</h3>
      <p>
        Para la pesca en alta mar, encontrarás un Shitzu Squalo de Washington Beach personalizado y cargado con una caja de armas explosivas. También desbloqueas el asalto al complejo PTT Youngin$ y el encargo especial de la colección de autos clásicos de Wyman, que te permite rastrear y restaurar autos clásicos.
      </p>

      <h2>¿Cuáles son los bonos de reserva de GTA 6?</h2>
      <p>
        Reservar GTA 6 te da acceso al <strong>Vintage Vice City Pack</strong> sin costo adicional. Este paquete está incluido en todas las reservas y compras realizadas antes del 20 de noviembre de 2026 (el día después del lanzamiento). Incluye cosméticos retro y mejoras para vehículos con el ambiente de los años 80.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/ultimate edition and Bounses/Vehicle & Garage ’55 Vapid Stanier.webp"
          alt="Sedán Vapid Stanier de 1955 frente al garaje Shore Court de Ocean Beach, bono de reserva"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 840px"
          className={styles.featureImage}
        />
      </div>

      <h3>'55 Vapid Stanier y garaje Shore Court</h3>
      <p>
        El paquete incluye el clásico sedán <strong>Vapid Stanier del 55</strong> y el garaje personal Shore Court junto a Ocean Beach. Este garaje cuenta con armero y un punto seguro de entrega para la valla.
      </p>
      <p>
        También recibirás trajes y peinados elegantes para Jason y Lucia, incluido un traje de lino pastel para Jason y un minivestido rojo de lentejuelas para Lucia.
      </p>

      <div className={styles.featureImageContainer}>
        <Image
          src="/ultimate edition and Bounses/Voice city Style .webp"
          alt="Lucia y Jason luciendo los trajes y peinados del bono de reserva Vintage Vice City"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 840px"
          className={styles.featureImage}
        />
      </div>

      <h3>Patrón de arma de Tommy Vercetti</h3>
      <p>
        Para completar el paquete, obtienes un patrón de arma tropical inspirado en la icónica camisa hawaiana de palmeras de Tommy Vercetti. Este patrón se puede aplicar a la mayoría de las armas cortas y rifles personalizables en Ammu-Nation.
      </p>

      <h2>Ediciones comparadas: Estándar vs. Ultimate</h2>
      <p>
        Compara las características y los precios de los dos paquetes confirmados oficialmente abajo. Para un análisis a fondo de cada opción, consulta nuestro desglose de las variaciones entre ediciones y sus características comparadas para tomar tu decisión final. También puedes ver nuestra <Link href="/es/news/gta-6-price/">guía de precios de GTA 6</Link> para más detalles sobre los costos.
      </p>

      <table>
        <thead>
          <tr>
            <th>Característica</th>
            <th>Edición Estándar ($79.99)</th>
            <th>Edición Ultimate ($99.99)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Juego base</td>
            <td>Sí</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>Vintage Vice City Pack</td>
            <td>Sí (solo con reserva)</td>
            <td>Sí (solo con reserva)</td>
          </tr>
          <tr>
            <td>Grotti Cheetah del 95</td>
            <td>No</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>Revólveres Morgan</td>
            <td>No</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>Tiendas de modificación y salón exclusivos</td>
            <td>No</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>Buggy Dominator y garaje</td>
            <td>No</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>Asalto de banda y encargos de Wyman</td>
            <td>No</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>Mejora a Edición Ultimate</td>
            <td>No disponible (PS5) / $20 (Xbox)</td>
            <td>Incluida</td>
          </tr>
        </tbody>
      </table>


      <h2>¿Dónde se puede reservar GTA 6?</h2>
      <p>
        Elegir dónde reservar depende de si quieres una caja física o la comodidad de la descarga digital. Ambas opciones tienen ventajas y desventajas que conviene considerar antes de comprar.
      </p>
      <p>
        Si reservas en digital a través de PlayStation Store o Xbox Games Store, la licencia del juego queda vinculada a tu cuenta. Esta opción te permite precargar el juego a partir del 17 de noviembre de 2026. Los archivos se instalarán y se desbloquearán a las 12:00 AM hora local del 19 de noviembre, para que puedas jugar de inmediato sin esperar la entrega.
      </p>

      <PreOrderWidget />


      <p>
        Si prefieres la caja física, reservar en Amazon es una buena opción por su garantía de precio. Tiendas como GameStop y Best Buy suelen ofrecer cajas metálicas o coleccionables físicos que no están disponibles en las copias digitales. Ten en cuenta que las copias físicas contienen un código de descarga digital en lugar de un disco Blu-ray físico.
      </p>

      <section className={styles.faqSection}>
        <h2>Preguntas frecuentes</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Puedo conseguir el bono de reserva después del lanzamiento?</h3>
          <p className={styles.faqAnswer}>
            No, el Vintage Vice City Pack es un bono por tiempo limitado incluido solo en las reservas y compras realizadas antes del 20 de noviembre de 2026.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Qué incluye la Edición Ultimate de GTA 6?</h3>
          <p className={styles.faqAnswer}>
            La Edición Ultimate incluye el juego base más vehículos premium como el Grotti Cheetah del 95, los revólveres Morgan, ropa personalizada y acceso exclusivo a negocios dentro del juego como Rideout Customs.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿La edición física trae disco?</h3>
          <p className={styles.faqAnswer}>
            No, las cajas físicas que se venden en tiendas contienen un vale con un código de descarga digital en lugar de un disco Blu-ray físico.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>¿Puedo cancelar mi reserva?</h3>
          <p className={styles.faqAnswer}>
            Sí, las reservas digitales se pueden cancelar en PlayStation Store y Microsoft Store con reembolso completo hasta que empiece la ventana de precarga el 17 de noviembre de 2026.
          </p>
        </div>
      </section>

      <p>
        Para saber por qué cambió la ventana de lanzamiento, consulta nuestra línea de tiempo del historial de retrasos de GTA 6. Si buscas un paquete físico premium, lee nuestra guía sobre el estado y el contenido esperado de la Edición Coleccionista de GTA 6.
      </p>
      <p>
        <em>Última revisión: 12 de octubre de 2026</em>
      </p>
    </>
  ),
};
