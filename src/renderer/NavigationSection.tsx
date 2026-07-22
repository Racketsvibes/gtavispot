import React from 'react';
import Link from 'next/link';

interface NavigationSectionProps {
  prevSlug?: string | null;
  nextSlug?: string | null;
  prevName?: string | null;
  nextName?: string | null;
  categoryName: string;
  categoryUrl: string;
}

export default function NavigationSection({
  prevSlug,
  nextSlug,
  prevName,
  nextName,
  categoryName,
  categoryUrl,
}: NavigationSectionProps) {
  return (
    <nav className="flex items-center justify-between border-t border-white/5 py-8" aria-label="Entity Navigation">
      <div>
        {prevSlug ? (
          <Link
            href={`${categoryUrl}/${prevSlug}`}
            className="group flex flex-col items-start gap-1 text-sm transition-colors hover:text-pink-500"
          >
            <span className="text-xs text-gray-500">&larr; Previous</span>
            <span className="font-semibold text-gray-300 group-hover:text-pink-500 truncate max-w-[120px] sm:max-w-none">
              {prevName || prevSlug}
            </span>
          </Link>
        ) : (
          <div className="text-xs text-gray-700">&larr; Start of Category</div>
        )}
      </div>

      <Link
        href={categoryUrl}
        className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-gray-300 transition-all hover:bg-white/10"
      >
        All {categoryName}
      </Link>

      <div>
        {nextSlug ? (
          <Link
            href={`${categoryUrl}/${nextSlug}`}
            className="group flex flex-col items-end gap-1 text-sm transition-colors hover:text-pink-500"
          >
            <span className="text-xs text-gray-500">Next &rarr;</span>
            <span className="font-semibold text-gray-300 group-hover:text-pink-500 truncate max-w-[120px] sm:max-w-none">
              {nextName || nextSlug}
            </span>
          </Link>
        ) : (
          <div className="text-xs text-gray-700">End of Category &rarr;</div>
        )}
      </div>
    </nav>
  );
}
