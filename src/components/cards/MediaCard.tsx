'use client';

import React from 'react';
import { Card } from './Card';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

interface MediaCardProps {
  title: string;
  thumbnailSrc: string;
  duration?: string;
  category?: string;
  onClick?: () => void;
  className?: string;
}

export const MediaCard: React.FC<MediaCardProps> = ({
  title,
  thumbnailSrc,
  duration,
  category = 'media',
  onClick,
  className = '',
}) => {
  return (
    <Card onClick={onClick} className={`overflow-hidden p-0 flex flex-col ${className}`}>
      <div className="relative aspect-video overflow-hidden group">
        <img
          src={thumbnailSrc}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Hover overlay and play button */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-full bg-brand-pink p-3 shadow-lg shadow-brand-pink/20 text-white"
          >
            <Play className="h-5 w-5 fill-current" />
          </motion.div>
        </div>

        {duration && (
          <span className="absolute bottom-3 right-3 rounded bg-black/75 px-1.5 py-0.5 text-xxs font-mono font-semibold text-white">
            {duration}
          </span>
        )}
      </div>

      <div className="p-4 space-y-1">
        <span className="text-xxs font-bold text-brand-pink uppercase tracking-widest block font-mono">
          {category}
        </span>
        <h4 className="text-xs font-bold text-white line-clamp-1 leading-snug">
          {title}
        </h4>
      </div>
    </Card>
  );
};
