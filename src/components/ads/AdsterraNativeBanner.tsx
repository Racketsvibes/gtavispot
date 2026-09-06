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
      className={`adsterra-native-banner-slot ${className}`}
      style={{ margin: '40px auto', width: '100%', maxWidth: '840px', textAlign: 'center', minHeight: '160px' }}
    >
      <div className="adsterra-label" style={{ marginBottom: '8px' }}>
        Sponsored Stories
      </div>
      <div 
        ref={containerRef}
        className="adsterra-iframe-frame"
        style={{ width: '100%', minHeight: '140px', padding: '8px' }}
      >
        <div id={config.containerId} />
      </div>
    </div>
  );
}
