import React from 'react';
import AdSenseBanner from './AdSenseBanner';
import MonetagBanner from './MonetagBanner';
import { isAdSenseTargetPage, ADSENSE_CONFIG } from '@/config/adsense';
import { MONETAG_CONFIG } from '@/config/monetag';

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
  const showAdSense = ADSENSE_CONFIG.ENABLED && (force || (slug && isAdSenseTargetPage(slug)));
  const showMonetag = MONETAG_CONFIG.ENABLED && MONETAG_CONFIG.postHeader;

  if (!showAdSense && !showMonetag) return null;

  return (
    <div className={`post-header-ad-slot ${className}`}>
      {showAdSense && (
        <AdSenseBanner
          slot={ADSENSE_CONFIG.bannerSlot}
          client={ADSENSE_CONFIG.client}
        />
      )}
      {showMonetag && (
        <MonetagBanner slotId={`post-header-${slug || 'default'}`} />
      )}
    </div>
  );
}
