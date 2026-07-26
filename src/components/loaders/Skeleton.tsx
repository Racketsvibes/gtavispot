'use client';

import React from 'react';

interface SkeletonProps {
  variant?: 'text' | 'rect' | 'circle';
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'rect',
  className = '',
}) => {
  const styles = {
    text: 'h-4 w-3/4 rounded',
    rect: 'h-32 w-full rounded-2xl',
    circle: 'h-12 w-12 rounded-full',
  };

  return (
    <div className={`bg-bg-tertiary/60 animate-pulse ${styles[variant]} ${className}`} />
  );
};
