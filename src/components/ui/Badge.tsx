'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'pink' | 'orange' | 'green' | 'gold' | 'red';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'secondary',
  className = '',
}) => {
  const styles = {
    primary: 'bg-brand-purple/20 text-brand-purple border border-brand-purple/30',
    secondary: 'bg-white/5 text-gray-400 border border-white/5',
    pink: 'bg-brand-pink/10 text-brand-pink border border-brand-pink/20',
    orange: 'bg-brand-orange/10 text-brand-orange border border-brand-orange/20',
    green: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    gold: 'bg-brand-gold/10 text-brand-gold border border-brand-gold/20',
    red: 'bg-brand-magenta/10 text-brand-magenta border border-brand-magenta/20',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xxs font-bold uppercase tracking-wider border ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
};

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({ children, className = '' }) => {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-bg-secondary border border-white/5 text-gray-300 ${className}`}>
      {children}
    </span>
  );
};

interface ChipProps extends React.HTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children: React.ReactNode;
}

export const Chip: React.FC<ChipProps> = ({
  active = false,
  children,
  className = '',
  ...props
}) => {
  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
        active
          ? 'border-brand-pink/30 bg-brand-pink/10 text-brand-pink'
          : 'border-white/5 bg-bg-secondary text-gray-400 hover:text-white hover:bg-bg-tertiary'
      } ${className}`}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
};
