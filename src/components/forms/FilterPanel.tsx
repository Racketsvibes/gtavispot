'use client';

import React from 'react';

interface FilterOption {
  id: string;
  label: string;
}

interface FilterGroupProps {
  title: string;
  options: FilterOption[];
  selectedIds: string[];
  onChange: (id: string) => void;
  className?: string;
}

export const FilterPanel: React.FC<FilterGroupProps> = ({
  title,
  options,
  selectedIds,
  onChange,
  className = '',
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <span className="text-xxs font-bold text-gray-500 uppercase tracking-widest block font-mono">
        {title}
      </span>
      <div className="space-y-2.5">
        {options.map((opt) => {
          const isChecked = selectedIds.includes(opt.id);
          return (
            <label
              key={opt.id}
              className="flex items-center gap-3 text-xs font-semibold text-gray-400 hover:text-white cursor-pointer select-none"
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => onChange(opt.id)}
                className="h-4 w-4 rounded border-white/5 bg-bg-secondary text-brand-pink focus:ring-brand-pink/50 cursor-pointer accent-brand-pink"
              />
              <span>{opt.label}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};
