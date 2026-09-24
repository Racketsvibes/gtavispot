'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { MONETAG_CONFIG } from '@/config/monetag';
import styles from './MonetagBanner.module.css';

interface MonetagBannerProps {
  slotId?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function MonetagBanner({
  slotId = 'banner',
  className = '',
  style,
}: MonetagBannerProps) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const injectedRef = useRef(false);

  useEffect(() => {
    if (!MONETAG_CONFIG.ENABLED) return;
    injectedRef.current = false;
    setShouldLoad(false);

    const el = containerRef.current;
    if (!el) return;

    let timer: NodeJS.Timeout | null = null;
    let observer: IntersectionObserver | null = null;

    const triggerLoad = () => {
      setShouldLoad(true);
      cleanupListeners();
    };

    const cleanupListeners = () => {
      if (timer) clearTimeout(timer);
      if (observer) observer.disconnect();
      ['scroll', 'touchstart', 'mousemove', 'click', 'keydown'].forEach((evt) => {
        window.removeEventListener(evt, triggerLoad);
      });
    };

    // Trigger on first user interaction for high responsiveness
    ['scroll', 'touchstart', 'mousemove', 'click', 'keydown'].forEach((evt) => {
      window.addEventListener(evt, triggerLoad, { passive: true, once: true });
    });

    // Speed Optimization: Observe intersection with a 200px prefetch margin
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            // Slight 200ms delay to ensure critical layout painting finishes first
            timer = setTimeout(triggerLoad, 200);
          }
        },
        { rootMargin: '200px' }
      );
      observer.observe(el);
    } else {
      timer = setTimeout(triggerLoad, 1000);
    }

    return () => {
      cleanupListeners();
    };
  }, [pathname, slotId]);

  useEffect(() => {
    if (!shouldLoad || !MONETAG_CONFIG.ENABLED) return;
    if (injectedRef.current) return;

    const el = containerRef.current;
    if (!el) return;

    injectedRef.current = true;
    el.innerHTML = '';

    const script = document.createElement('script');
    script.src = MONETAG_CONFIG.scriptSrc;
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.setAttribute('data-size', MONETAG_CONFIG.size);
    script.setAttribute('data-category', MONETAG_CONFIG.category);
    script.setAttribute('data-id', MONETAG_CONFIG.id);
    script.setAttribute('data-zone', MONETAG_CONFIG.zoneId);

    el.appendChild(script);

    return () => {
      injectedRef.current = false;
      if (el) el.innerHTML = '';
    };
  }, [shouldLoad, pathname, slotId]);

  if (!MONETAG_CONFIG.ENABLED) return null;

  return (
    <div className={`${styles.monetagWrapper} ${className}`} style={style}>
      <div
        ref={containerRef}
        key={`${pathname}-${slotId}`}
        className={styles.monetagContainer}
        data-monetag-slot={slotId}
      />
    </div>
  );
}
