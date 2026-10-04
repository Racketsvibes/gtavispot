'use client';

import React, { useState, useEffect } from 'react';

// Miami Heat vs Milwaukee Bucks — "A Night in Vice City"
// Wednesday, November 18, 2026 — 7:00 PM ET tip-off at Kaseya Center
const EVENT_DATE = new Date('2026-11-19T00:00:00Z').getTime();

export default function HeatViceCityCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const updateTimer = () => {
      const difference = EVENT_DATE - Date.now();
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsLive(true);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds },
  ];

  return (
    <div
      style={{
        margin: '28px 0',
        padding: '26px 20px',
        borderRadius: '20px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        border: '1px solid rgba(255, 45, 149, 0.35)',
        boxShadow: '0 8px 32px rgba(255, 45, 149, 0.15)',
      }}
    >
      <div
        style={{
          fontSize: '0.8rem',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: '#ff9ecb',
          marginBottom: '6px',
          fontWeight: 700,
        }}
      >
        {isLive ? 'Happening now' : 'Countdown to tip-off'}
      </div>
      <div
        style={{
          fontSize: '1.35rem',
          fontWeight: 800,
          color: '#ffffff',
          marginBottom: '18px',
        }}
      >
        A Night in Vice City — Heat vs Bucks, Nov 18
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
        {units.map((u) => (
          <div
            key={u.label}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              padding: '14px 18px',
              borderRadius: '14px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              minWidth: '86px',
            }}
          >
            <span
              style={{
                display: 'block',
                fontSize: '2.1rem',
                fontWeight: 800,
                color: '#ff2d95',
                fontVariantNumeric: 'tabular-nums',
                lineHeight: 1.1,
              }}
            >
              {isMounted ? String(u.value).padStart(2, '0') : '--'}
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                color: 'rgba(255, 255, 255, 0.6)',
              }}
            >
              {u.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
