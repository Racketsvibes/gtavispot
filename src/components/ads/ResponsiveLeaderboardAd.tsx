'use client';

import React from 'react';
import AdsterraBanner from './AdsterraBanner';
import { ADSTERRA_CONFIG } from '@/config/adsterra';

interface ResponsiveLeaderboardAdProps {
  className?: string;
  label?: string;
}

export default function ResponsiveLeaderboardAd({
  className = '',
  label = 'Advertisement',
}: ResponsiveLeaderboardAdProps) {
  if (!ADSTERRA_CONFIG.ENABLED) return null;

  return (
    <div className={`responsive-leaderboard-container ${className}`}>
      {/* Desktop Slot: 728x90 (visible on screens >= 768px) */}
      <div className="leaderboard-desktop-slot">
        <AdsterraBanner
          adKey={ADSTERRA_CONFIG.banner728x90.key}
          width={ADSTERRA_CONFIG.banner728x90.width}
          height={ADSTERRA_CONFIG.banner728x90.height}
          scriptSrc={ADSTERRA_CONFIG.banner728x90.scriptSrc}
          enabled={ADSTERRA_CONFIG.banner728x90.enabled}
          label={label}
        />
      </div>

      {/* Mobile Slot: 320x50 (visible on screens < 768px) */}
      <div className="leaderboard-mobile-slot">
        <AdsterraBanner
          adKey={ADSTERRA_CONFIG.banner320x50.key}
          width={ADSTERRA_CONFIG.banner320x50.width}
          height={ADSTERRA_CONFIG.banner320x50.height}
          scriptSrc={ADSTERRA_CONFIG.banner320x50.scriptSrc}
          enabled={ADSTERRA_CONFIG.banner320x50.enabled}
          label={label}
        />
      </div>
    </div>
  );
}
