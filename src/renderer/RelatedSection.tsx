import React from 'react';
import Link from 'next/link';

interface RelatedEntity {
  id: string;
  name: string;
  slug: string;
  type: string; // e.g. 'character', 'location', 'vehicle', 'weapon', 'business'
}

interface RelatedSectionProps {
  relationships: RelatedEntity[];
}

export default function RelatedSection({ relationships }: RelatedSectionProps) {
  if (!relationships || relationships.length === 0) {
    return null;
  }

  // Helper to determine the pluralized category route
  const getCategoryRoute = (type: string) => {
    switch (type.toLowerCase()) {
      case 'character':
        return '/characters';
      case 'location':
        return '/locations';
      case 'vehicle':
        return '/vehicles';
      case 'weapon':
        return '/weapons';
      case 'business':
        return '/businesses';
      default:
        return `/${type}s`;
    }
  };

  return (
    <section className="space-y-4">
      <h2 className="text-sm font-bold text-gray-400 tracking-wider uppercase">Connected Profiles</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {relationships.map((rel) => (
          <Link
            key={rel.id}
            href={`${getCategoryRoute(rel.type)}/${rel.slug}`}
            className="flex items-center justify-between rounded-2xl border border-white/5 bg-[#12141c]/40 p-4 transition-all hover:border-pink-500/30 hover:bg-[#151924]/60 group"
          >
            <div>
              <span className="block font-bold text-white group-hover:text-pink-500 transition-colors">
                {rel.name}
              </span>
              <span className="block mt-0.5 text-xs text-gray-500 capitalize">{rel.type}</span>
            </div>
            <span className="text-xs font-semibold text-pink-500 opacity-0 transition-opacity group-hover:opacity-100">
              View &rarr;
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
