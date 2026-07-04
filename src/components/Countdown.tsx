'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Countdown.module.css';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const LAUNCH_DATE = new Date('2026-11-19T00:00:00Z').getTime();

export default function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  function calculateTimeLeft(): TimeLeft {
    const difference = LAUNCH_DATE - Date.now();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format with leading zeros for visual alignment
  const formatNum = (num: number) => String(num).padStart(2, '0');

  // SSR Placeholder to prevent layout shift & hydration mismatch
  if (!mounted) {
    return (
      <div className={styles.heroCountdown}>
        <div className={styles.countdownCard}>
          <div className={styles.releaseDateContainer}>
            <span className={styles.releaseDateLabel}>RELEASE DATE</span>
            <h2 className={styles.releaseDateValue}>NOVEMBER 19, 2026</h2>
          </div>
          <div className={styles.countdownGrid}>
            <div className={styles.countdownUnit}>
              <span className={styles.countdownNum}>--</span>
              <span className={styles.countdownLabel}>Days</span>
            </div>
            <span className={styles.countdownSep}>:</span>
            <div className={styles.countdownUnit}>
              <span className={styles.countdownNum}>--</span>
              <span className={styles.countdownLabel}>Hours</span>
            </div>
            <span className={styles.countdownSep}>:</span>
            <div className={styles.countdownUnit}>
              <span className={styles.countdownNum}>--</span>
              <span className={styles.countdownLabel}>Min</span>
            </div>
            <span className={styles.countdownSep}>:</span>
            <div className={styles.countdownUnit}>
              <span className={styles.countdownNum}>--</span>
              <span className={styles.countdownLabel}>Sec</span>
            </div>
          </div>
          <Link href="/news/gta-6-release-date/" className={styles.releaseDateBtn}>
            Release Date
          </Link>
        </div>
      </div>
    );
  }

  const isLaunched = LAUNCH_DATE - Date.now() <= 0;

  return (
    <div className={styles.heroCountdown}>
      <div className={styles.countdownCard}>
        <div className={styles.releaseDateContainer}>
          <span className={styles.releaseDateLabel}>RELEASE DATE</span>
          <h2 className={styles.releaseDateValue}>NOVEMBER 19, 2026</h2>
        </div>
        <div className={styles.countdownGrid}>
          <div className={styles.countdownUnit}>
            <span className={styles.countdownNum}>{formatNum(timeLeft.days)}</span>
            <span className={styles.countdownLabel}>Days</span>
          </div>
          <span className={styles.countdownSep}>:</span>
          <div className={styles.countdownUnit}>
            <span className={styles.countdownNum}>{formatNum(timeLeft.hours)}</span>
            <span className={styles.countdownLabel}>Hours</span>
          </div>
          <span className={styles.countdownSep}>:</span>
          <div className={styles.countdownUnit}>
            <span className={styles.countdownNum}>{formatNum(timeLeft.minutes)}</span>
            <span className={styles.countdownLabel}>Min</span>
          </div>
          <span className={styles.countdownSep}>:</span>
          <div className={styles.countdownUnit}>
            <span className={styles.countdownNum}>{formatNum(timeLeft.seconds)}</span>
            <span className={styles.countdownLabel}>Sec</span>
          </div>
        </div>
        <Link href="/news/gta-6-release-date/" className={styles.releaseDateBtn}>
          Release Date
        </Link>
      </div>
    </div>
  );
}
