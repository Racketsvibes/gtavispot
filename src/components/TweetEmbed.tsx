'use client';

import React, { useEffect, useRef } from 'react';

interface TweetEmbedProps {
  /** Full URL of the X / Twitter post, e.g. https://x.com/user/status/123 */
  url: string;
  /** Optional plain-text fallback shown before the widget hydrates / if JS is off */
  fallbackText?: string;
}

declare global {
  interface Window {
    twttr?: {
      widgets?: { load: (el?: HTMLElement | null) => void };
    };
  }
}

const WIDGETS_SRC = 'https://platform.twitter.com/widgets.js';

export default function TweetEmbed({ url, fallbackText }: TweetEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If the script is already present, just (re)hydrate blockquotes in this container.
    if (window.twttr?.widgets) {
      window.twttr.widgets.load(containerRef.current);
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${WIDGETS_SRC}"]`);
    if (existing) {
      existing.addEventListener('load', () => window.twttr?.widgets?.load(containerRef.current));
      return;
    }

    const script = document.createElement('script');
    script.src = WIDGETS_SRC;
    script.async = true;
    script.charset = 'utf-8';
    script.onload = () => window.twttr?.widgets?.load(containerRef.current);
    document.body.appendChild(script);
  }, [url]);

  return (
    <div
      ref={containerRef}
      style={{ display: 'flex', justifyContent: 'center', margin: '1.75rem 0' }}
    >
      <blockquote
        className="twitter-tweet"
        data-dnt="true"
        data-theme="light"
        style={{ maxWidth: '550px', width: '100%' }}
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          {fallbackText || 'View this post on X'}
        </a>
      </blockquote>
    </div>
  );
}
