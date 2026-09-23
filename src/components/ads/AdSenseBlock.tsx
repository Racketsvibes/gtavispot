'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

interface AdSenseBlockProps {
  slot: string;
  client?: string;
  format?: string;
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function AdSenseBlock({
  slot,
  client = 'ca-pub-7134755750458767',
  format = 'rectangle, horizontal',
  responsive = true,
  className = '',
  style,
}: AdSenseBlockProps) {
  const pathname = usePathname();
  const insRef = useRef<HTMLModElement>(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (pushedRef.current) return;

    if (insRef.current && insRef.current.getAttribute('data-adsbygoogle-status')) {
      return;
    }

    try {
      pushedRef.current = true;
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (error) {
      console.error('AdSense push failed:', error);
    }
  }, [pathname, slot]);

  return (
    <div
      key={`${pathname}-${slot}`}
      className={className}
      style={{
        minWidth: '300px',
        minHeight: '250px',
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        ...style,
      }}
    >
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{
          display: 'block',
          minWidth: '300px',
          minHeight: '250px',
          width: '100%',
          height: '100%',
        }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
}
