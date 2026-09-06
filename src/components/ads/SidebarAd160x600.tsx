'use client';

import React, { useEffect, useState } from 'react';
import AdsterraBanner from './AdsterraBanner';
import { ADSTERRA_CONFIG } from '@/config/adsterra';

interface SidebarAd160x600Props {
  className?: string;
  label?: string;
  side?: 'left' | 'right' | 'both';
}

export default function SidebarAd160x600({
  className = '',
  label = 'Advertisement',
  side = 'both',
}: SidebarAd160x600Props) {
  const config = ADSTERRA_CONFIG.banner160x600;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ADSTERRA_CONFIG.ENABLED || !config.enabled) return;

    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const windowScrollY = window.scrollY;

      // 1. Check Top Boundary: Start only after the Feature Image / Header
      const featureImg = document.querySelector('[class*="featureImageContainer"]') ||
                         document.querySelector('[class*="featureImage"]') ||
                         document.querySelector('article header') ||
                         document.querySelector('header');

      // 2. Check Bottom Boundary: Hide when Related Posts or Footer comes into view
      const bottomBoundary = document.querySelector('#related-posts') ||
                             document.querySelector('[class*="RelatedPosts"]') ||
                             document.querySelector('footer');

      let show = true;

      if (featureImg) {
        const featRect = featureImg.getBoundingClientRect();
        // If bottom of feature image is still inside the top 25% of viewport or below it
        if (featRect.bottom > 120) {
          show = false;
        }
      } else if (windowScrollY < 350) {
        // Fallback: Must have scrolled at least 350px
        show = false;
      }

      if (bottomBoundary) {
        const bottomRect = bottomBoundary.getBoundingClientRect();
        // Disappear as soon as Related Posts or Footer enters the bottom of the viewport
        if (bottomRect.top < viewportHeight * 0.75) {
          show = false;
        }
      }

      setIsVisible(show);
    };

    // Run on mount
    handleScroll();

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [config.enabled]);

  if (!ADSTERRA_CONFIG.ENABLED || !config.enabled) return null;

  const visibilityStyles: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    visibility: isVisible ? 'visible' : 'hidden',
    pointerEvents: isVisible ? 'auto' : 'none',
    transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.3s ease',
  };

  return (
    <>
      {/* Left Side Rail (160x600) — Sticks to the left side of the screen alongside content */}
      {(side === 'left' || side === 'both') && (
        <aside 
          className={`side-rail-ad-container side-rail-ad-left ${className}`}
          style={visibilityStyles}
          aria-label="Left Side Rail Advertisement"
        >
          <AdsterraBanner
            adKey={config.key}
            width={config.width}
            height={config.height}
            scriptSrc={config.scriptSrc}
            enabled={config.enabled}
            label={label}
            className="my-0"
          />
        </aside>
      )}

      {/* Right Side Rail (160x600) — Sticks to the right side of the screen alongside content */}
      {(side === 'right' || side === 'both') && (
        <aside 
          className={`side-rail-ad-container side-rail-ad-right ${className}`}
          style={visibilityStyles}
          aria-label="Right Side Rail Advertisement"
        >
          <AdsterraBanner
            adKey={config.key}
            width={config.width}
            height={config.height}
            scriptSrc={config.scriptSrc}
            enabled={config.enabled}
            label={label}
            className="my-0"
          />
        </aside>
      )}
    </>
  );
}

export { SidebarAd160x600 as SideRailAds };
