'use client';

import React from 'react';
import AdsterraBanner from './AdsterraBanner';
import { ADSTERRA_CONFIG } from '@/config/adsterra';

interface SidebarAd160x600Props {
  className?: string;
  label?: string;
}

export default function SidebarAd160x600({
  className = '',
  label = 'Advertisement',
}: SidebarAd160x600Props) {
  const config = ADSTERRA_CONFIG.banner160x600;
  if (!ADSTERRA_CONFIG.ENABLED || !config.enabled) return null;

  return (
    <aside 
      className={`sidebar-ad-160x600 hidden min-[1360px]:block absolute top-0 w-[160px] z-10 ${className}`}
      style={{
        left: 'calc(50% + 440px)',
      }}
    >
      <div className="sticky top-28 w-full flex justify-center">
        <AdsterraBanner
          adKey={config.key}
          width={config.width}
          height={config.height}
          scriptSrc={config.scriptSrc}
          enabled={config.enabled}
          label={label}
        />
      </div>
    </aside>
  );
}
