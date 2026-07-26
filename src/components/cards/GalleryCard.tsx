'use client';

import React from 'react';
import { Card } from './Card';
import { Badge } from '../ui/Badge';

interface GalleryCardProps {
  src: string;
  alt: string;
  tag?: string;
  dimensions?: string;
  onClick?: () => void;
  className?: string;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({
  src,
  alt,
  tag,
  dimensions,
  onClick,
  className = '',
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative group overflow-hidden rounded-2xl border border-white/5 bg-bg-secondary/40 cursor-pointer select-none aspect-video ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Dynamic details overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        {tag && (
          <Badge variant="pink" className="self-start mb-2">
            {tag}
          </Badge>
        )}
        <div className="flex items-center justify-between gap-2 text-xxs font-bold uppercase text-gray-300 tracking-wider">
          <span className="truncate">{alt}</span>
          {dimensions && <span className="font-mono text-gray-500 shrink-0">{dimensions}</span>}
        </div>
      </div>
    </div>
  );
};
