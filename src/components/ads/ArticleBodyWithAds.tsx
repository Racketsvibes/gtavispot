'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import InContentAd300x250 from './InContentAd300x250';
import AdsterraNativeBanner from './AdsterraNativeBanner';
import MonetagBanner from './MonetagBanner';
import { ADSTERRA_CONFIG } from '@/config/adsterra';
import { MONETAG_CONFIG } from '@/config/monetag';

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
  const [monetagSlot1, setMonetagSlot1] = useState<HTMLElement | null>(null);
  const [monetagSlot2, setMonetagSlot2] = useState<HTMLElement | null>(null);

  useEffect(() => {
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
                           p.closest('.adsterra-slot') ||
                           p.closest('.ad-slot-monetag');
      return !isNestedCard;
    });

    // ── MONETAG IN-POST ADS (1 or 2 Times In Post) ──
    if (MONETAG_CONFIG.ENABLED && MONETAG_CONFIG.inPostCount > 0 && paragraphs.length > 0) {
      // Slot 1: Mid-early narrative (after p3 or p2)
      const pIndex1 = paragraphs.length >= 4 ? 2 : (paragraphs.length >= 2 ? 1 : 0);
      const targetP1 = paragraphs[pIndex1];
      if (targetP1) {
        let slot1 = targetP1.nextElementSibling as HTMLElement | null;
        if (!slot1 || !slot1.classList.contains('ad-slot-monetag-p1')) {
          slot1 = document.createElement('div');
          slot1.className = 'ad-slot-monetag ad-slot-monetag-p1';
          targetP1.parentNode?.insertBefore(slot1, targetP1.nextSibling);
        }
        setMonetagSlot1(slot1);
      }

      // Slot 2: Mid-late narrative (after p7, or toward end if post is medium)
      if (MONETAG_CONFIG.inPostCount >= 2 && paragraphs.length >= 5) {
        const pIndex2 = paragraphs.length >= 8 ? 6 : paragraphs.length - 2;
        const targetP2 = paragraphs[pIndex2];
        if (targetP2 && pIndex2 !== pIndex1) {
          let slot2 = targetP2.nextElementSibling as HTMLElement | null;
          if (!slot2 || !slot2.classList.contains('ad-slot-monetag-p2')) {
            slot2 = document.createElement('div');
            slot2.className = 'ad-slot-monetag ad-slot-monetag-p2';
            targetP2.parentNode?.insertBefore(slot2, targetP2.nextSibling);
          }
          setMonetagSlot2(slot2);
        }
      }
    }

    // ── ADSTERRA SLOTS (Preserved when enabled) ──
    if (ADSTERRA_CONFIG.ENABLED) {
      if (ADSTERRA_CONFIG.banner300x250.enabled && paragraphs.length >= 2) {
        const p2 = paragraphs[1];
        let slot2 = p2.nextElementSibling as HTMLElement | null;
        if (!slot2 || !slot2.classList.contains('ad-slot-incontent-p2')) {
          slot2 = document.createElement('div');
          slot2.className = 'ad-slot-incontent-p2';
          p2.parentNode?.insertBefore(slot2, p2.nextSibling);
        }
        setP2Target(slot2);
      }

      if (ADSTERRA_CONFIG.nativeBanner.enabled) {
        if (paragraphs.length >= 4) {
          const p4 = paragraphs[3];
          let slot4 = p4.nextElementSibling as HTMLElement | null;
          if (!slot4 || !slot4.classList.contains('ad-slot-native-p4')) {
            slot4 = document.createElement('div');
            slot4.className = 'ad-slot-native-p4';
            p4.parentNode?.insertBefore(slot4, p4.nextSibling);
          }
          setP4Target(slot4);
        } else if (paragraphs.length > 0) {
          const lastP = paragraphs[paragraphs.length - 1];
          let slot4 = lastP.nextElementSibling as HTMLElement | null;
          if (!slot4 || !slot4.classList.contains('ad-slot-native-p4')) {
            slot4 = document.createElement('div');
            slot4.className = 'ad-slot-native-p4';
            lastP.parentNode?.insertBefore(slot4, lastP.nextSibling);
          }
          setP4Target(slot4);
        }
      }
    }
  }, []);

  return (
    <>
      <div ref={bodyRef} className={className}>
        {children}
      </div>
      {/* Monetag In-Post Portals */}
      {monetagSlot1 && createPortal(<MonetagBanner slotId="inpost-1" />, monetagSlot1)}
      {monetagSlot2 && createPortal(<MonetagBanner slotId="inpost-2" />, monetagSlot2)}

      {/* Adsterra Dormant Portals */}
      {p2Target && createPortal(<InContentAd300x250 />, p2Target)}
      {p4Target && createPortal(<AdsterraNativeBanner />, p4Target)}
    </>
  );
}
