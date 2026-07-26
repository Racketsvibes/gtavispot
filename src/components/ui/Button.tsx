'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyle = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-brand-pink/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';
  
  const variants = {
    primary: 'bg-brand-pink hover:bg-brand-pink/90 text-white shadow-lg shadow-brand-pink/10 border border-brand-pink/20',
    secondary: 'bg-bg-secondary hover:bg-bg-tertiary text-gray-200 border border-white/5',
    ghost: 'hover:bg-white/5 text-gray-400 hover:text-white',
    icon: 'p-2 rounded-lg bg-bg-secondary hover:bg-bg-tertiary border border-white/5 text-gray-400 hover:text-white',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${variant === 'icon' ? '' : sizes[size]} ${className}`}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
};
