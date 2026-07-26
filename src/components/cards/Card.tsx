'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hoverable = true,
}) => {
  return (
    <motion.div
      whileHover={hoverable ? { y: -2, borderColor: 'rgba(232, 69, 144, 0.25)' } : {}}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={`rounded-2xl border border-white/5 bg-bg-secondary/40 p-6 backdrop-blur-md ${
        onClick ? 'cursor-pointer select-none' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
};
