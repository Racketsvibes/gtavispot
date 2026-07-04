import React from 'react';
import { History, X, Trash } from 'lucide-react';

interface RecentSearchesProps {
  searches: string[];
  onSelect: (term: string) => void;
  onRemove: (term: string) => void;
  onClear: () => void;
}

export default function RecentSearches({
  searches,
  onSelect,
  onRemove,
  onClear,
}: RecentSearchesProps) {
  if (searches.length === 0) return null;

  return (
    <div className="space-y-2 p-3">
      <div className="flex items-center justify-between px-2 text-xxs font-bold text-gray-500 uppercase tracking-wider">
        <span>Recent Searches</span>
        <button
          onClick={onClear}
          className="flex items-center gap-1 hover:text-pink-400 transition-colors"
        >
          <Trash className="h-3 w-3" />
          Clear
        </button>
      </div>
      <div className="space-y-1">
        {searches.map((term) => (
          <div
            key={term}
            className="flex items-center justify-between rounded-xl hover:bg-white/5 p-2 text-sm text-gray-300 group cursor-pointer"
          >
            <div
              className="flex items-center gap-3 flex-1"
              onClick={() => onSelect(term)}
            >
              <History className="h-4 w-4 text-gray-500" />
              <span>{term}</span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemove(term);
              }}
              className="opacity-0 group-hover:opacity-100 rounded p-1 text-gray-500 hover:text-white transition-opacity"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
