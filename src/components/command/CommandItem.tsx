import React from 'react';

interface CommandItemProps {
  id: string;
  title: string;
  subtitle?: string | null;
  description?: string | null;
  thumbnailUrl?: string | null;
  isSelected: boolean;
  onSelect: () => void;
  onMouseEnter: () => void;
}

export default function CommandItem({
  title,
  subtitle,
  description,
  thumbnailUrl,
  isSelected,
  onSelect,
  onMouseEnter,
}: CommandItemProps) {
  return (
    <div
      onClick={onSelect}
      onMouseEnter={onMouseEnter}
      className={`flex items-center justify-between rounded-xl p-3 cursor-pointer transition-all border ${
        isSelected
          ? 'bg-pink-500/10 border-pink-500/30'
          : 'bg-[#141720]/20 border-transparent hover:bg-[#181d28]/40'
      }`}
    >
      <div className="flex items-center gap-3 min-w-0 flex-1">
        {thumbnailUrl ? (
          <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg border border-white/10 bg-[#090b0e]">
            <img src={thumbnailUrl} alt={title} className="h-full w-full object-cover" />
          </div>
        ) : (
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-white/5 bg-white/5 text-xs text-gray-500 uppercase tracking-widest font-mono">
            {title.slice(0, 2)}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <span className="block font-bold text-sm text-white truncate">{title}</span>
          {description && (
            <span className="block text-xs text-gray-500 truncate mt-0.5">{description}</span>
          )}
        </div>
      </div>

      {subtitle && (
        <span className="ml-4 rounded-full bg-white/5 border border-white/5 px-2 py-0.5 text-xxs font-semibold uppercase tracking-wider text-gray-400 capitalize">
          {subtitle}
        </span>
      )}
    </div>
  );
}
