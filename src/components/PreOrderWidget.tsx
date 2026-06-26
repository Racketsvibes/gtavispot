"use client";

import React, { useState, useEffect } from 'react';
import styles from './PreOrderWidget.module.css';

interface PreOrderLinks {
  standard: string;
  ultimate: string;
}

const PS_LINKS: PreOrderLinks = {
  standard: 'https://store.playstation.com/product/EP1004-PPSA01547_00-GTAVISTANDARD001',
  ultimate: 'https://store.playstation.com/product/EP1004-PPSA01547_00-GTAVIULTIMATE001'
};

const XBOX_LINKS: PreOrderLinks = {
  standard: 'https://www.xbox.com/games/store/grand-theft-auto-vi/9P3H4968GRSM/0017/9PWFKCT9JGKL',
  ultimate: 'https://www.xbox.com/games/store/grand-theft-auto-vi-ultimate-edition/9NNZSNHLR63L/0017/9W0CVZDS9RZF'
};

const ROCKSTAR_LINK = 'https://store.rockstargames.com/game/buy-gta-vi';

export default function PreOrderWidget() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activePlatform, setActivePlatform] = useState<'ps' | 'xbox' | null>(null);
  const [hoveredEdition, setHoveredEdition] = useState<'standard' | 'ultimate' | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    if (modalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen]);

  const openModal = (platform: 'ps' | 'xbox') => {
    setActivePlatform(platform);
    setModalOpen(true);
    setHoveredEdition('standard'); // default description to show
  };

  const closeModal = () => {
    setModalOpen(false);
    setActivePlatform(null);
    setHoveredEdition(null);
  };

  const handleSelectEdition = (edition: 'standard' | 'ultimate') => {
    if (!activePlatform) return;
    const links = activePlatform === 'ps' ? PS_LINKS : XBOX_LINKS;
    window.open(links[edition], '_blank', 'noopener,noreferrer');
    closeModal();
  };

  const getPlatformLabel = () => {
    if (activePlatform === 'ps') return 'PlayStation 5';
    if (activePlatform === 'xbox') return 'Xbox Series X|S';
    return '';
  };

  const getDescription = () => {
    if (hoveredEdition === 'ultimate') {
      return 'Get the ultimate edition of Grand Theft Auto VI along with premium vehicles, weapons, cosmetics, and exclusive business storefront access.';
    }
    return 'Get the standard edition of Grand Theft Auto VI along with pre-order bonuses.';
  };

  return (
    <>
      <div className={styles.container}>
        {/* PlayStation 5 Storefront Button */}
        <button 
          onClick={() => openModal('ps')}
          className={styles.preorderBtn}
          aria-label="Pre-Order on PlayStation 5"
        >
          <div className={styles.btnLeft}>
            <div className={styles.logoWrapper}>
              <div className={styles.psLogoContainer}>
                <svg viewBox="0 0 16 16" fill="currentColor" width="22" height="22" aria-hidden="true">
                  <path d="M15.858 11.451c-.313.395-1.079.676-1.079.676l-5.696 2.046v-1.509l4.192-1.493c.476-.17.549-.412.162-.538-.386-.127-1.085-.09-1.56.08l-2.794.984v-1.566l.161-.054s.807-.286 1.942-.412c1.135-.125 2.525.017 3.616.43 1.23.39 1.368.962 1.056 1.356M9.625 8.883v-3.86c0-.453-.083-.87-.508-.988-.326-.105-.528.198-.528.65v9.664l-2.606-.827V2c1.108.206 2.722.692 3.59.985 2.207.757 2.955 1.7 2.955 3.825 0 2.071-1.278 2.856-2.903 2.072Zm-8.424 3.625C-.061 12.15-.271 11.41.304 10.984c.532-.394 1.436-.69 1.436-.69l3.737-1.33v1.515l-2.69.963c-.474.17-.547.411-.161.538.386.126 1.085.09 1.56-.08l1.29-.469v1.356l-.257.043a8.45 8.45 0 0 1-4.018-.323Z"/>
                </svg>
                <span className={styles.psLogoText}>PS5</span>
              </div>
            </div>
            <div className={styles.divider} />
            <span className={styles.btnText}>Digital</span>
          </div>
          <span className={styles.btnArrow}>↗</span>
        </button>

        {/* Xbox Series X|S Storefront Button */}
        <button 
          onClick={() => openModal('xbox')}
          className={styles.preorderBtn}
          aria-label="Pre-Order on Xbox Series X|S"
        >
          <div className={styles.btnLeft}>
            <div className={styles.logoWrapper}>
              <div className={styles.xboxLogoContainer}>
                <svg viewBox="0 0 16 16" fill="currentColor" width="22" height="22" aria-hidden="true">
                  <path d="M7.202 15.967a8 8 0 0 1-3.552-1.26c-.898-.585-1.101-.826-1.101-1.306 0-.965 1.062-2.656 2.879-4.583C6.459 7.723 7.897 6.44 8.052 6.475c.302.068 2.718 2.423 3.622 3.531 1.43 1.753 2.088 3.189 1.754 3.829-.254.486-1.83 1.437-2.987 1.802-.954.301-2.207.429-3.239.33m-5.866-3.57C.589 11.253.212 10.127.03 8.497c-.06-.539-.038-.846.137-1.95.218-1.377 1.002-2.97 1.945-3.95.401-.417.437-.427.926-.263.595.2 1.23.638 2.213 1.528l.574.519-.313.385C4.056 6.553 2.52 9.086 1.94 10.653c-.315.852-.442 1.707-.306 2.063.091.24.007.15-.3-.319Zm13.101.195c.074-.36-.019-1.02-.238-1.687-.473-1.443-2.055-4.128-3.508-5.953l-.457-.575.494-.454c.646-.593 1.095-.948 1.58-1.25.381-.237.927-.448 1.161-.448.145 0 .654.528 1.065 1.104a8.4 8.4 0 0 1 1.343 3.102c.153.728.166 2.286.024 3.012a9.5 9.5 0 0 1-.6 1.893c-.179.393-.624 1.156-.82 1.404-.1.128-.1.127-.043-.148ZM7.335 1.952c-.67-.34-1.704-.705-2.276-.803a4 4 0 0 0-.759-.043c-.471.024-.45 0 .306-.358A7.8 7.8 0 0 1 6.47.128c.8-.169 2.306-.17 3.094-.005.85.18 1.853.552 2.418.9l.168.103-.385-.02c-.766-.038-1.88.27-3.078.853-.361.176-.676.316-.699.312a12 12 0 0 1-.654-.319Z"/>
                </svg>
                <span className={styles.xboxLogoText}>Xbox Series<br />X|S</span>
              </div>
            </div>
            <div className={styles.divider} />
            <span className={styles.btnText}>Digital</span>
          </div>
          <span className={styles.btnArrow}>↗</span>
        </button>

        {/* Rockstar Store Direct Button */}
        <a 
          href={ROCKSTAR_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.preorderBtn}
          aria-label="Buy GTA 6 on Rockstar Store"
        >
          <div className={styles.btnLeft}>
            <div className={styles.logoWrapper}>
              <div className={styles.rockstarLogo}>
                <span className={styles.rockstarLetter}>R</span>
                <span className={styles.rockstarStar}>★</span>
                <span className={styles.rockstarStore}>Store</span>
              </div>
            </div>
            <div className={styles.divider} />
            <span className={styles.btnText}>Code in Box</span>
          </div>
          <span className={styles.btnArrow}>↗</span>
        </a>
      </div>

      {/* Edition Selection Modal Pop-Up */}
      {modalOpen && (
        <div 
          className={styles.modalOverlay}
          onClick={closeModal}
        >
          <div 
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Choose Your Edition</h2>
              <button 
                onClick={closeModal} 
                className={styles.closeBtn}
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            <div className={styles.cardsGrid}>
              {/* Ultimate Edition Card (Outline / Transparent) */}
              <div 
                className={`${styles.editionCard} ${styles.cardUltimate}`}
                onMouseEnter={() => setHoveredEdition('ultimate')}
                onClick={() => handleSelectEdition('ultimate')}
              >
                <h3 className={styles.cardTitle}>Ultimate Edition</h3>
                <span className={styles.cardSubtitle}>Digital</span>
              </div>

              {/* Standard Edition Card (White Fill / Dark text) */}
              <div 
                className={`${styles.editionCard} ${styles.cardStandard}`}
                onMouseEnter={() => setHoveredEdition('standard')}
                onClick={() => handleSelectEdition('standard')}
              >
                <h3 className={styles.cardTitle}>Standard Edition</h3>
                <span className={styles.cardSubtitleStandard}>Digital or Code in Box</span>
              </div>
            </div>

            {/* Dynamic Cover Art Preview */}
            <div className={styles.previewImageContainer}>
              <img 
                src={hoveredEdition === 'ultimate' ? '/ultimate-edition.png' : '/standard-edition.png'} 
                alt={hoveredEdition === 'ultimate' ? 'GTA 6 Ultimate Edition Artwork' : 'GTA 6 Standard Edition Artwork'} 
                className={styles.previewImage}
              />
            </div>

            <p className={styles.modalDesc}>
              {getDescription()}
            </p>

          </div>
        </div>
      )}
    </>
  );
}
