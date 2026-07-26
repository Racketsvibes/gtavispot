'use client';

import React from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '../ui/Button';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onClear?: () => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onClear,
  className = '',
  ...props
}) => {
  return (
    <div className={`relative flex items-center w-full ${className}`}>
      <div className="absolute left-4 text-gray-500 pointer-events-none">
        <Search className="h-4.5 w-4.5" />
      </div>
      <input
        value={value}
        type="text"
        className="w-full rounded-xl border border-white/5 bg-bg-secondary/60 py-3 pl-11 pr-12 text-sm text-gray-200 outline-none placeholder-gray-500 focus:border-brand-pink/50 focus:bg-bg-secondary transition-all"
        {...(props as any)}
      />
      {value && onClear && (
        <Button
          variant="ghost"
          onClick={onClear}
          className="absolute right-3 p-1 rounded-lg text-gray-500 hover:text-white"
        >
          <X className="h-3.5 w-3.5" />
        </Button>
      )}
    </div>
  );
};
