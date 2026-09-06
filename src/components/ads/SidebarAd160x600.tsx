'use client';

import React from 'react';
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
  if (!ADSTERRA_CONFIG.ENABLED || !config.enabled) return null;

  return (
    <>
      {/* Left Side Rail (160x600) — Sticks to the left side of the screen as the page is scrolled */}
      {(side === 'left' || side === 'both') && (
        <aside 
          className={`side-rail-ad-left hidden min-[1360px]:flex flex-col items-center justify-center fixed z-30 w-[160px] pointer-events-auto ${className}`}
          style={{
            top: 'calc(50% + 20px)',
            transform: 'translateY(-50%)',
            right: 'calc(50% + 440px)',
          }}
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

      {/* Right Side Rail (160x600) — Sticks to the right side of the screen as the page is scrolled */}
      {(side === 'right' || side === 'both') && (
        <aside 
          className={`side-rail-ad-right hidden min-[1360px]:flex flex-col items-center justify-center fixed z-30 w-[160px] pointer-events-auto ${className}`}
          style={{
            top: 'calc(50% + 20px)',
            transform: 'translateY(-50%)',
            left: 'calc(50% + 440px)',
          }}
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
