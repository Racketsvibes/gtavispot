'use client';

import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '../ui/Button';

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
  className?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Something Went Wrong',
  description = 'Failed to load data. Please inspect your connection or try again.',
  onRetry,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center p-8 border border-brand-magenta/20 rounded-3xl bg-brand-magenta/5 max-w-md mx-auto space-y-4 ${className}`}>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-magenta/10 text-brand-magenta">
        <AlertTriangle className="h-6 w-6" />
      </div>
      <div className="space-y-1.5">
        <h4 className="text-sm font-bold text-white uppercase tracking-wider">
          {title}
        </h4>
        <p className="text-xs text-brand-magenta/80 leading-relaxed">
          {description}
        </p>
      </div>
      {onRetry && (
        <Button variant="secondary" size="sm" onClick={onRetry} className="gap-2">
          <RefreshCw className="h-3.5 w-3.5" />
          <span>Retry</span>
        </Button>
      )}
    </div>
  );
};
