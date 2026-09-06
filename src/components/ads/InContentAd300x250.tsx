'use client';

import React from 'react';
import AdsterraBanner from './AdsterraBanner';
import { ADSTERRA_CONFIG } from '@/config/adsterra';

interface InContentAd300x250Props {
  className?: string;
  label?: string;
}

export default function InContentAd300x250({
  className = '',
  label = 'Advertisement',
}: InContentAd300x250Props) {
  const config = ADSTERRA_CONFIG.banner300x250;
  if (!ADSTERRA_CONFIG.ENABLED || !config.enabled) return null;

  return (
    <div className={`in-content-ad-300x250 my-6 flex justify-center w-full clear-both ${className}`}>
      <AdsterraBanner
        adKey={config.key}
        width={config.width}
        height={config.height}
        scriptSrc={config.scriptSrc}
        enabled={config.enabled}
        label={label}
      />
    </div>
  );
}
