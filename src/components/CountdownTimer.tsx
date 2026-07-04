'use client';

import React, { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const targetDate = new Date('2026-11-19T00:00:00');

    const updateTimer = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // Server-side rendering fallback
  if (!isMounted) {
    return (
      <div style={{ display: 'flex', gap: '12px', margin: '20px 0', flexWrap: 'wrap' }}>
        {['Days', 'Hours', 'Mins', 'Secs'].map((label) => (
          <div
            key={label}
            style={{
              background: 'var(--bg-secondary)',
              padding: '12px 20px',
              borderRadius: '12px',
              border: '1px solid var(--border-light)',
              minWidth: '70px',
              textAlign: 'center',
            }}
          >
            <span
              style={{
                display: 'block',
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: 'var(--brand-magenta)',
              }}
            >
              --
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', gap: '12px', margin: '20px 0', flexWrap: 'wrap' }}>
      <div
        style={{
          background: 'var(--bg-secondary)',
          padding: '12px 20px',
          borderRadius: '12px',
          border: '1px solid var(--border-light)',
          minWidth: '70px',
          textAlign: 'center',
          boxShadow: '0 4px 15px rgba(253, 58, 105, 0.1)',
        }}
      >
        <span
          style={{
            display: 'block',
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: 'var(--brand-magenta)',
            fontFamily: 'var(--font-headline), sans-serif',
          }}
        >
          {timeLeft.days}
        </span>
        <span
          style={{
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-ui), sans-serif',
          }}
        >
          Days
        </span>
      </div>
      <div
        style={{
          background: 'var(--bg-secondary)',
          padding: '12px 20px',
          borderRadius: '12px',
          border: '1px solid var(--border-light)',
          minWidth: '70px',
          textAlign: 'center',
          boxShadow: '0 4px 15px rgba(138, 43, 226, 0.1)',
        }}
      >
        <span
          style={{
            display: 'block',
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: 'var(--brand-purple-light, #bd93f9)',
            fontFamily: 'var(--font-headline), sans-serif',
          }}
        >
          {timeLeft.hours}
        </span>
        <span
          style={{
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-ui), sans-serif',
          }}
        >
          Hours
        </span>
      </div>
      <div
        style={{
          background: 'var(--bg-secondary)',
          padding: '12px 20px',
          borderRadius: '12px',
          border: '1px solid var(--border-light)',
          minWidth: '70px',
          textAlign: 'center',
          boxShadow: '0 4px 15px rgba(253, 58, 105, 0.1)',
        }}
      >
        <span
          style={{
            display: 'block',
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: 'var(--brand-magenta)',
            fontFamily: 'var(--font-headline), sans-serif',
          }}
        >
          {timeLeft.minutes}
        </span>
        <span
          style={{
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-ui), sans-serif',
          }}
        >
          Mins
        </span>
      </div>
      <div
        style={{
          background: 'var(--bg-secondary)',
          padding: '12px 20px',
          borderRadius: '12px',
          border: '1px solid var(--border-light)',
          minWidth: '70px',
          textAlign: 'center',
          boxShadow: '0 4px 15px rgba(138, 43, 226, 0.1)',
        }}
      >
        <span
          style={{
            display: 'block',
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: 'var(--brand-purple-light, #bd93f9)',
            fontFamily: 'var(--font-headline), sans-serif',
          }}
        >
          {timeLeft.seconds}
        </span>
        <span
          style={{
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-ui), sans-serif',
          }}
        >
          Secs
        </span>
      </div>
    </div>
  );
}
