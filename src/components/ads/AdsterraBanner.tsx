'use client';

import React, { useEffect, useRef } from 'react';
import { ADSTERRA_CONFIG } from '@/config/adsterra';

interface AdsterraBannerProps {
  adKey: string;
  width: number;
  height: number;
  scriptSrc: string;
  className?: string;
  label?: string;
  enabled?: boolean;
}

export default function AdsterraBanner({
  adKey,
  width,
  height,
  scriptSrc,
  className = '',
  label = 'Advertisement',
  enabled = true,
}: AdsterraBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ADSTERRA_CONFIG.ENABLED || !enabled) return;
    const container = containerRef.current;
    if (!container) return;

    // Reset container contents
    container.innerHTML = '';

    const iframe = document.createElement('iframe');
    iframe.width = `${width}`;
    iframe.height = `${height}`;
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    iframe.scrolling = 'no';
    iframe.title = label;
    iframe.loading = 'lazy';

    container.appendChild(iframe);

    try {
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (doc) {
        doc.open();
        doc.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
              * { box-sizing: border-box; margin: 0; padding: 0; }
              body { 
                margin: 0; 
                padding: 0; 
                overflow: hidden; 
                display: flex; 
                justify-content: center; 
                align-items: center; 
                background: transparent; 
              }
            </style>
          </head>
          <body>
            <script type="text/javascript">
              atOptions = {
                'key' : '${adKey}',
                'format' : 'iframe',
                'height' : ${height},
                'width' : ${width},
                'params' : {}
              };
            </script>
            <script type="text/javascript" src="${scriptSrc}"></script>
          </body>
          </html>
        `);
        doc.close();
      }
    } catch (err) {
      console.warn('Adsterra banner initialization note:', err);
    }

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [adKey, width, height, scriptSrc, enabled, label]);

  if (!ADSTERRA_CONFIG.ENABLED || !enabled) return null;

  return (
    <div 
      className={`adsterra-banner-slot my-5 flex flex-col items-center justify-center text-center ${className}`}
      style={{ minHeight: `${height + 22}px` }}
    >
      <div 
        className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1.5 select-none"
        style={{ letterSpacing: '0.12em' }}
      >
        {label}
      </div>
      <div
        ref={containerRef}
        style={{ width: `${width}px`, height: `${height}px` }}
        className="flex items-center justify-center overflow-hidden rounded bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 shadow-sm"
      />
    </div>
  );
}
