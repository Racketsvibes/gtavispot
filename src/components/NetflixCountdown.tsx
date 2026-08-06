'use client';

import React, { useState, useEffect } from 'react';

export default function NetflixCountdown() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date('2026-08-27T19:00:00Z'); // August 27, 2026 at 3 p.m. ET / 12 p.m. PT

    const updateTimer = () => {
      const difference = targetDate.getTime() - Date.now();
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div style={{
        padding: '24px',
        background: '#141222',
        border: '1px solid #30363d',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '32px 0',
        minHeight: '140px'
      }}>
        <span style={{ color: '#b1b1b1', fontSize: '0.95rem' }}>Loading Countdown...</span>
      </div>
    );
  }

  const isExpired = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  return (
    <div style={{
      padding: '24px',
      background: 'linear-gradient(135deg, #141222 0%, #0d0a1b 100%)',
      border: '1px solid var(--border-light, #30363d)',
      borderRadius: '12px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '32px 0',
      boxShadow: '0 8px 32px rgba(229, 9, 20, 0.1)'
    }}>
      {/* Netflix Brand Header */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
        <svg width="18" height="27" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px' }}>
          <path d="M18.8 0H24V36H18.8V0Z" fill="#B81D24"/>
          <path d="M0 0H5.2V36H0V0Z" fill="#B81D24"/>
          <path d="M0 0L18.8 36H24L5.2 0H0Z" fill="#E50914"/>
        </svg>
        <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#E50914', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Netflix Exclusive Gameplay Premiere
        </span>
      </div>

      {isExpired ? (
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff', textAlign: 'center', margin: '8px 0' }}>
          🔴 The Extended Look is Now Live!
        </span>
      ) : (
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', width: '100%', flexWrap: 'wrap' }}>
          {/* Days */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '70px' }}>
            <span style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', fontFamily: 'monospace' }}>
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#b1b1b1', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Days</span>
          </div>
          {/* Divider */}
          <div style={{ fontSize: '2rem', fontWeight: '800', color: '#E50914', alignSelf: 'center', display: timeLeft.days > 0 ? 'block' : 'none' }}>:</div>
          
          {/* Hours */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '70px' }}>
            <span style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', fontFamily: 'monospace' }}>
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#b1b1b1', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Hours</span>
          </div>
          {/* Divider */}
          <div style={{ fontSize: '2rem', fontWeight: '800', color: '#E50914', alignSelf: 'center' }}>:</div>

          {/* Minutes */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '70px' }}>
            <span style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', fontFamily: 'monospace' }}>
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#b1b1b1', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Mins</span>
          </div>
          {/* Divider */}
          <div style={{ fontSize: '2rem', fontWeight: '800', color: '#E50914', alignSelf: 'center' }}>:</div>

          {/* Seconds */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '70px' }}>
            <span style={{ fontSize: '2.2rem', fontWeight: '800', color: '#E50914', fontFamily: 'monospace' }}>
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#b1b1b1', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Secs</span>
          </div>
        </div>
      )}

      <div style={{ marginTop: '16px', fontSize: '0.8rem', color: '#b1b1b1', textAlign: 'center' }}>
        August 27, 2026 — 3:00 PM Eastern Time / 12:00 PM Pacific Time
      </div>
    </div>
  );
}
