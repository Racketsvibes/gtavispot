import React from 'react';
import CommandItem from './CommandItem';

export interface CommandResultItem {
  id: string;
  title: string;
  type: string; // e.g. 'character', 'location', 'vehicle', 'weapon', 'business'
  description?: string | null;
  thumbnailUrl?: string | null;
  slug: string;
}

interface CommandResultsProps {
  results: CommandResultItem[];
  selectedIdx: number;
  onSelect: (item: CommandResultItem) => void;
  onHoverIndex: (idx: number) => void;
  isLoading: boolean;
}

export default function CommandResults({
  results,
  selectedIdx,
  onSelect,
  onHoverIndex,
  isLoading,
}: CommandResultsProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-12 gap-3">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-pink-500 border-t-transparent" />
        <span className="text-xs text-gray-500 font-mono">Querying Leonida databases...</span>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="p-12 text-center space-y-2">
        <span className="block text-sm font-bold text-gray-400">No database records matched</span>
        <span className="block text-xs text-gray-600">Try searching for official characters, locations, or weapons.</span>
      </div>
    );
  }

  // Group items by category type
  const grouped: Record<string, CommandResultItem[]> = {};
  results.forEach((item) => {
    if (!grouped[item.type]) {
      grouped[item.type] = [];
    }
    grouped[item.type].push(item);
  });

  // Calculate absolute index mapper
  let currentFlatIdx = 0;

  return (
    <div className="flex-1 overflow-y-auto p-3 space-y-4 max-h-96">
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} className="space-y-1.5">
          <span className="px-2 text-xxs font-bold text-gray-500 uppercase tracking-wider block">
            {category}s ({items.length})
          </span>
          <div className="space-y-1">
            {items.map((item) => {
              const idx = currentFlatIdx;
              currentFlatIdx++;
              return (
                <CommandItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  subtitle={item.type}
                  description={item.description}
                  thumbnailUrl={item.thumbnailUrl}
                  isSelected={selectedIdx === idx}
                  onSelect={() => onSelect(item)}
                  onMouseEnter={() => onHoverIndex(idx)}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
export { default as CommandItem } from './CommandItem';
