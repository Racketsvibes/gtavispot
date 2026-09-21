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

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const pushAd = () => {
      try {
        if (insRef.current) {
          // If already requested or filled, do not re-push
          if (insRef.current.getAttribute('data-adsbygoogle-status')) {
            return;
          }
        }
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch (e) {
        console.warn('AdSense push notice:', e);
      }
    };

    // Attempt push immediately, and retry briefly if script is still initializing
    pushAd();
    const timer = setTimeout(pushAd, 500);

    return () => clearTimeout(timer);
  }, [pathname, slot]);

  if (!ADSENSE_CONFIG.ENABLED) return null;

  return (
    <div
      className={`adsense-banner-wrapper ${className}`}
      style={{
        margin: '1.5rem auto',
        textAlign: 'center',
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
          marginBottom: '6px',
        }}
      >
        ADVERTISEMENT
      </div>
      <ins
        ref={insRef}
        key={`${pathname}-${slot}`}
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
