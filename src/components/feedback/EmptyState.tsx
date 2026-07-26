'use client';

import React from 'react';
import { HelpCircle } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  description?: string;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No Results Found',
  description = 'Try refining your search terms or adjustments parameters.',
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center p-8 border border-white/5 rounded-3xl bg-bg-secondary/20 max-w-md mx-auto space-y-4 ${className}`}>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-gray-500">
        <HelpCircle className="h-6 w-6" />
      </div>
      <div className="space-y-1.5">
        <h4 className="text-sm font-bold text-white uppercase tracking-wider">
          {title}
        </h4>
        <p className="text-xs text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
