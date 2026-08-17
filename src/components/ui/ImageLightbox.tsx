'use client';

import React, { useState, useEffect, useRef } from 'react';

// Helper to decode Next.js optimized image URLs back to their original path
const cleanSrc = (src: string): string => {
  try {
    const decoded = decodeURIComponent(src);
    if (decoded.includes('url=')) {
      const url = new URL(decoded, 'https://example.com').searchParams.get('url');
      if (url) return url;
    }
    return decoded;
  } catch (e) {
    return src;
  }
};

export default function ImageLightbox({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSrc, setActiveSrc] = useState('');
  const [activeAlt, setActiveAlt] = useState('');
  const [images, setImages] = useState<{ src: string; alt: string }[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  // Set visual cursor pointer for qualifying images
  useEffect(() => {
    if (containerRef.current) {
      const imgElements = containerRef.current.querySelectorAll('img');
      imgElements.forEach((img) => {
        const rawSrc = img.getAttribute('src') || '';
        const src = cleanSrc(rawSrc);
        if (src.includes('/images/People') || src.includes('/images/Jason_Lucia_Motel')) {
          img.style.cursor = 'pointer';
          img.style.transition = 'transform 0.2s ease';
        }
      });
    }
  }, [children]);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG') {
      const rawSrc = target.getAttribute('src') || '';
      const alt = target.getAttribute('alt') || '';
      const src = cleanSrc(rawSrc);
      
      if (src.includes('/images/People') || src.includes('/images/Jason_Lucia_Motel')) {
        // Rebuild list of images dynamically on click to ensure accurate DOM matching
        const imgElements = containerRef.current?.querySelectorAll('img') || [];
        const imgList: { src: string; alt: string }[] = [];
        
        imgElements.forEach((img) => {
          const imgRawSrc = img.getAttribute('src') || '';
          const imgAlt = img.getAttribute('alt') || '';
          const imgCleanSrc = cleanSrc(imgRawSrc);
          
          if (imgCleanSrc.includes('/images/People') || imgCleanSrc.includes('/images/Jason_Lucia_Motel')) {
            if (!imgList.some(item => item.src === imgCleanSrc)) {
              imgList.push({ src: imgCleanSrc, alt: imgAlt });
            }
          }
        });
        
        setImages(imgList);
        
        const index = imgList.findIndex((img) => img.src === src);
        if (index !== -1) {
          setActiveIndex(index);
          setActiveSrc(src);
          setActiveAlt(alt);
          setIsOpen(true);
          document.body.style.overflow = 'hidden';
        }
      }
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images.length === 0) return;
    const newIndex = (activeIndex - 1 + images.length) % images.length;
    setActiveIndex(newIndex);
    setActiveSrc(images[newIndex].src);
    setActiveAlt(images[newIndex].alt);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images.length === 0) return;
    const newIndex = (activeIndex + 1) % images.length;
    setActiveIndex(newIndex);
    setActiveSrc(images[newIndex].src);
    setActiveAlt(images[newIndex].alt);
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || images.length === 0) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') {
        const newIndex = (activeIndex - 1 + images.length) % images.length;
        setActiveIndex(newIndex);
        setActiveSrc(images[newIndex].src);
        setActiveAlt(images[newIndex].alt);
      }
      if (e.key === 'ArrowRight') {
        const newIndex = (activeIndex + 1) % images.length;
        setActiveIndex(newIndex);
        setActiveSrc(images[newIndex].src);
        setActiveAlt(images[newIndex].alt);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeIndex, images]);

  return (
    <div ref={containerRef} onClick={handleContainerClick}>
      {children}

      {isOpen && (
        <div 
          onClick={handleClose}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '24px',
            userSelect: 'none',
          }}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              color: '#fff',
              fontSize: '28px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s',
              zIndex: 10001,
            }}
          >
            &times;
          </button>

          {/* Navigation Controls */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                style={{
                  position: 'absolute',
                  left: '24px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '56px',
                  height: '56px',
                  color: '#fff',
                  fontSize: '32px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10001,
                }}
              >
                &#8249;
              </button>
              <button
                onClick={handleNext}
                style={{
                  position: 'absolute',
                  right: '24px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '56px',
                  height: '56px',
                  color: '#fff',
                  fontSize: '32px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10001,
                }}
              >
                &#8250;
              </button>
            </>
          )}

          {/* Image Container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '90%',
              maxHeight: '75vh',
              width: 'auto',
              height: 'auto',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={activeSrc}
              alt={activeAlt}
              style={{ 
                maxWidth: '100%', 
                maxHeight: '75vh', 
                objectFit: 'contain',
                borderRadius: '12px',
                border: 'none',
                outline: 'none',
                boxShadow: 'none',
                margin: 0,
              }}
            />
          </div>

          {/* Caption / Alt details */}
          <div style={{ color: '#fff', marginTop: '20px', fontSize: '1.2rem', fontFamily: 'var(--font-body), sans-serif', textAlign: 'center', maxWidth: '80%', fontWeight: 500 }}>
            {activeAlt}
          </div>

          {/* Counter indicator */}
          <div style={{ color: 'rgba(255, 255, 255, 0.5)', marginTop: '8px', fontSize: '0.95rem', fontFamily: 'var(--font-ui), sans-serif', letterSpacing: '0.05em' }}>
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}
