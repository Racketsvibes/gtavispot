'use client';

import React, { useEffect, useRef } from 'react';
import { ADSENSE_CONFIG } from '@/config/adsense';

interface AdSenseBannerProps {
  slot?: string;
  client?: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function AdSenseBanner({
  slot = ADSENSE_CONFIG.bannerSlot,
  client = ADSENSE_CONFIG.client,
  format = 'auto',
  responsive = true,
  className = '',
  style = { display: 'block' },
}: AdSenseBannerProps) {
  const isPushedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined' || isPushedRef.current) return;
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      isPushedRef.current = true;
    } catch (e) {
      // Graceful error handling for adblockers or duplicate pushes
    }
  }, []);

  if (!ADSENSE_CONFIG.ENABLED) return null;

  return (
    <div
      className={`adsense-banner-wrapper ${className}`}
      style={{
        margin: '1.25rem auto',
        textAlign: 'center',
        overflow: 'hidden',
        minHeight: '90px',
        width: '100%',
        maxWidth: '100%',
      }}
    >
      <div
        style={{
          fontSize: '0.65rem',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          color: 'var(--text-muted, #888)',
          marginBottom: '4px',
        }}
      >
        ADVERTISEMENT
      </div>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
}
