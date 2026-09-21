import React from 'react';
import AdSenseBanner from './AdSenseBanner';
import { isAdSenseTargetPage, ADSENSE_CONFIG } from '@/config/adsense';

interface AdSensePostHeaderAdProps {
  slug?: string;
  force?: boolean;
  className?: string;
}

export default function AdSensePostHeaderAd({
  slug,
  force = false,
  className = '',
}: AdSensePostHeaderAdProps) {
  if (!ADSENSE_CONFIG.ENABLED) return null;
  if (!force && (!slug || !isAdSenseTargetPage(slug))) {
    return null;
  }

  return (
    <div className={`adsense-post-header-slot ${className}`}>
      <AdSenseBanner
        slot={ADSENSE_CONFIG.bannerSlot}
        client={ADSENSE_CONFIG.client}
      />
    </div>
  );
}
