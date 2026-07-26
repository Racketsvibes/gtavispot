'use client';

import React from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { Badge } from '../ui/Badge';

interface SearchCardProps {
  title: string;
  category: string;
  description?: string;
  onClick?: () => void;
  className?: string;
}

export const SearchCard: React.FC<SearchCardProps> = ({
  title,
  category,
  description,
  onClick,
  className = '',
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-4 rounded-xl border border-white/5 bg-bg-secondary/40 p-4.5 hover:bg-bg-tertiary/60 hover:border-brand-pink/20 transition-all cursor-pointer select-none ${className}`}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-gray-400 shrink-0">
        <Search className="h-4 w-4" />
      </div>

      <div className="flex-1 min-w-0 space-y-1">
        <div className="flex items-center gap-2 flex-wrap">
          <h4 className="text-sm font-bold text-white truncate">{title}</h4>
          <Badge variant="secondary">{category}</Badge>
        </div>
        {description && (
          <p className="text-xs text-gray-500 truncate leading-relaxed">
            {description}
          </p>
        )}
      </div>

      <ChevronRight className="h-4 w-4 text-gray-600 shrink-0" />
    </div>
  );
};
