'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './YoutubePlayer.module.css';

interface YoutubePlayerProps {
  videoId: string;
  thumbnailUrl: string;
  title: string;
}

export default function YoutubePlayer({ videoId, thumbnailUrl, title }: YoutubePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className={styles.playerWrapper}>
      {isPlaying ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={styles.iframe}
        />
      ) : (
        <div className={styles.cover} onClick={handlePlay}>
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={styles.thumbnail}
            priority
          />
          <div className={styles.playIcon} aria-label="Play video">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
