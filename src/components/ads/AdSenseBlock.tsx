'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

interface AdSenseBlockProps {
  slot: string;
  client?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AdSenseBlock({
  slot,
  client = 'ca-pub-7134755750458767',
  className = '',
  style,
}: AdSenseBlockProps) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const insRef = useRef<HTMLModElement>(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (containerRef.current) {
      containerRef.current.style.cssText =
        'display: block !important; visibility: visible !important; width: 100% !important; min-width: 300px !important; min-height: 250px !important; position: relative !important; float: none !important; clear: both !important;';
    }

    const timer = setTimeout(() => {
      if (pushedRef.current) return;
      if (!insRef.current) return;
      if (insRef.current.getAttribute('data-adsbygoogle-status')) return;

      try {
        pushedRef.current = true;
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch (error) {
        console.error('AdSense push failed:', error);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [pathname, slot]);

  return (
    <div
      ref={containerRef}
      key={`${pathname}-${slot}`}
      className={className}
      style={{
        display: 'block',
        visibility: 'visible',
        width: '100%',
        minWidth: '300px',
        minHeight: '250px',
        position: 'relative',
        float: 'none',
        clear: 'both',
        ...style,
      }}
    >
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: 'block', width: '300px', height: '250px' }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="rectangle"
        data-full-width-responsive="false"
      />
    </div>
  );
}
