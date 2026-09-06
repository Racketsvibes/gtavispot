'use client';

import React, { useEffect, useRef } from 'react';
import { ADSTERRA_CONFIG } from '@/config/adsterra';

interface AdsterraNativeBannerProps {
  className?: string;
}

export default function AdsterraNativeBanner({ className = '' }: AdsterraNativeBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const config = ADSTERRA_CONFIG.nativeBanner;

  useEffect(() => {
    if (!ADSTERRA_CONFIG.ENABLED || !config.enabled) return;

    const wrapper = containerRef.current;
    if (!wrapper) return;

    // Check if script is already present inside wrapper
    const existingScript = wrapper.querySelector(`script[src="${config.scriptSrc}"]`);
    if (!existingScript) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      script.src = config.scriptSrc;
      wrapper.appendChild(script);
    }
  }, [config.enabled, config.scriptSrc]);

  if (!ADSTERRA_CONFIG.ENABLED || !config.enabled) return null;

  return (
    <div 
      className={`adsterra-native-banner-slot my-8 w-full max-w-[840px] mx-auto text-center ${className}`}
      style={{ minHeight: '160px' }}
    >
      <div 
        className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2 select-none"
        style={{ letterSpacing: '0.12em' }}
      >
        Sponsored Stories
      </div>
      <div 
        ref={containerRef}
        className="w-full overflow-hidden rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 p-2 min-h-[140px]"
      >
        <div id={config.containerId} />
      </div>
    </div>
  );
}
