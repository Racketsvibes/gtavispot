'use client';

import React, { useState } from 'react';
import styles from './ShareButtons.module.css';

interface ShareButtonsProps {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = (shareUrl: string) => {
    window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=400');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className={styles.container}>
      <span className={styles.label}>Share This Article</span>
      <div className={styles.buttonList}>
        {/* Twitter / X */}
        <button
          className={`${styles.shareButton} ${styles.x}`}
          onClick={() => handleShare(`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`)}
          title="Share on X"
          aria-label="Share on X"
        >
          <svg viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </button>

        {/* Facebook */}
        <button
          className={`${styles.shareButton} ${styles.facebook}`}
          onClick={() => handleShare(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`)}
          title="Share on Facebook"
          aria-label="Share on Facebook"
        >
          <svg viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </button>

        {/* Reddit */}
        <button
          className={`${styles.shareButton} ${styles.reddit}`}
          onClick={() => handleShare(`https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`)}
          title="Share on Reddit"
          aria-label="Share on Reddit"
        >
          <svg viewBox="0 0 24 24">
            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
          </svg>
        </button>

        {/* WhatsApp */}
        <button
          className={`${styles.shareButton} ${styles.whatsapp}`}
          onClick={() => handleShare(`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`)}
          title="Share on WhatsApp"
          aria-label="Share on WhatsApp"
        >
          <svg viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.249 8.477 3.517 2.266 2.268 3.512 5.282 3.51 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97-1.861-1.868-4.339-2.897-6.97-2.899-5.437 0-9.862 4.369-9.866 9.802-.001 1.836.486 3.631 1.411 5.2l-.991 3.618 3.733-.967zm12.39-7.39c-.11-.18-.4-.29-.85-.51-.45-.22-2.65-1.3-3.06-1.45-.41-.15-.71-.22-.99.22-.29.43-1.12 1.45-1.37 1.74-.25.29-.5.32-.95.1-.45-.22-1.9-0.7-3.62-2.22-1.34-1.19-2.24-2.66-2.5-3.11-.26-.45-.03-.69.2-.91.2-.2.45-.51.68-.77.22-.25.3-.43.45-.77.15-.34.07-.63-.04-.85-.11-.22-.99-2.39-1.36-3.28-.36-.88-.73-.76-.99-.77-.26-.01-.55-.01-.84-.01-.29 0-.77.11-1.17.55-.4.43-1.53 1.5-1.53 3.66s1.58 4.23 1.8 4.52c.22.29 3.1 4.74 7.51 6.65 1.05.45 1.87.72 2.51.93 1.05.33 2 .28 2.76.17.84-.12 2.65-1.08 3.02-2.13.38-1.04.38-1.93.26-2.13-.11-.19-.41-.3-.86-.52z"/>
          </svg>
        </button>

        {/* Copy Link */}
        <button
          className={`${styles.shareButton} ${styles.copy} ${copied ? styles.copyActive : ''}`}
          onClick={handleCopyLink}
          title="Copy Link"
          aria-label="Copy Link"
        >
          {copied ? (
            <svg viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24">
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
            </svg>
          )}
        </button>

        {copied && <span className={styles.copiedMessage}>Link Copied!</span>}
      </div>
    </div>
  );
}
