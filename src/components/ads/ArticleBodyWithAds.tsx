'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import InContentAd300x250 from './InContentAd300x250';
import AdsterraNativeBanner from './AdsterraNativeBanner';
import { ADSTERRA_CONFIG } from '@/config/adsterra';

interface ArticleBodyWithAdsProps {
  children: React.ReactNode;
  className?: string;
}

export default function ArticleBodyWithAds({
  children,
  className = '',
}: ArticleBodyWithAdsProps) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [p2Target, setP2Target] = useState<HTMLElement | null>(null);
  const [p4Target, setP4Target] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ADSTERRA_CONFIG.ENABLED) return;
    const bodyEl = bodyRef.current;
    if (!bodyEl) return;

    // Filter for legitimate narrative paragraphs (ignore nested cards, bios, etc.)
    const paragraphs = Array.from(bodyEl.querySelectorAll('p')).filter((p) => {
      const parent = p.parentElement;
      if (!parent) return false;
      const isNestedCard = p.closest('.quickAnswer') || 
                           p.closest('.bio-card') || 
                           p.closest('.bio-card-container') ||
                           p.closest('.comparison-table-wrap') ||
                           p.closest('.scorecard-table-wrap') ||
                           p.closest('.faq-item') ||
                           p.closest('.adsterra-slot');
      return !isNestedCard;
    });

    // 1. In-Content 300x250 Ad: Inject directly after the 2nd paragraph
    if (ADSTERRA_CONFIG.banner300x250.enabled && paragraphs.length >= 2) {
      const p2 = paragraphs[1]; // 2nd paragraph (0-indexed)
      let slot2 = p2.nextElementSibling as HTMLElement | null;
      if (!slot2 || !slot2.classList.contains('ad-slot-p2')) {
        slot2 = document.createElement('div');
        slot2.className = 'ad-slot-p2 my-6 flex justify-center w-full clear-both';
        p2.parentNode?.insertBefore(slot2, p2.nextSibling);
      }
      setP2Target(slot2);
    }

    // 2. Native Banner: Inject directly after the 4th paragraph (or after last paragraph if short)
    if (ADSTERRA_CONFIG.nativeBanner.enabled) {
      if (paragraphs.length >= 4) {
        const p4 = paragraphs[3]; // 4th paragraph (0-indexed)
        let slot4 = p4.nextElementSibling as HTMLElement | null;
        if (!slot4 || !slot4.classList.contains('ad-slot-p4')) {
          slot4 = document.createElement('div');
          slot4.className = 'ad-slot-p4 my-8 flex justify-center w-full clear-both';
          p4.parentNode?.insertBefore(slot4, p4.nextSibling);
        }
        setP4Target(slot4);
      } else if (paragraphs.length > 0) {
        const lastP = paragraphs[paragraphs.length - 1];
        let slot4 = lastP.nextElementSibling as HTMLElement | null;
        if (!slot4 || !slot4.classList.contains('ad-slot-p4')) {
          slot4 = document.createElement('div');
          slot4.className = 'ad-slot-p4 my-8 flex justify-center w-full clear-both';
          lastP.parentNode?.insertBefore(slot4, lastP.nextSibling);
        }
        setP4Target(slot4);
      }
    }
  }, []);

  return (
    <>
      <div ref={bodyRef} className={className}>
        {children}
      </div>
      {p2Target && createPortal(<InContentAd300x250 />, p2Target)}
      {p4Target && createPortal(<AdsterraNativeBanner />, p4Target)}
    </>
  );
}
