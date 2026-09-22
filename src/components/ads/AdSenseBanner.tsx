'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();
  const insRef = useRef<HTMLModElement>(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!ADSENSE_CONFIG.ENABLED) return;

    pushedRef.current = false;

    const pushAd = () => {
      if (pushedRef.current) return;
      if (!insRef.current) return;

      // Avoid re-pushing if already processed by AdSense
      if (insRef.current.getAttribute('data-adsbygoogle-status')) {
        return;
      }

      try {
        pushedRef.current = true;
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch (e) {
        console.warn('AdSense push notice:', e);
      }
    };

    pushAd();
  }, [pathname, slot]);

  if (!ADSENSE_CONFIG.ENABLED) return null;

  return (
    <div
      key={`adsense-${pathname}-${slot}`}
      className={`adsense-banner-wrapper ${className}`}
      style={{
        margin: '1.5rem auto',
        textAlign: 'center',
        width: '100%',
        maxWidth: '100%',
      }}
    >
      <div
        className="adsense-label"
        style={{
          fontSize: '0.65rem',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          color: 'var(--text-muted, #888)',
          marginBottom: '6px',
        }}
      >
        ADVERTISEMENT
      </div>
      <ins
        ref={insRef}
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
