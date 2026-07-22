import React from 'react';
import Image from 'next/image';
import { DbMedia } from '@/backend/types/database';

interface GallerySectionProps {
  gallery: DbMedia[];
}

export default function GallerySection({ gallery }: GallerySectionProps) {
  if (!gallery || gallery.length === 0) {
    return (
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white tracking-wide uppercase text-xs">Media Gallery</h2>
        <div className="rounded-2xl border border-white/5 bg-[#12141c]/40 p-8 text-center text-gray-500">
          No official screenshots or artwork registered in database.
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-4">
      <h2 className="text-sm font-bold text-gray-400 tracking-wider uppercase">Media Gallery ({gallery.length})</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {gallery.map((media) => (
          <div
            key={media.id}
            className="group relative aspect-video overflow-hidden rounded-2xl border border-white/5 bg-[#12141c]/60 transition-all hover:border-pink-500/30"
          >
            <Image
              src={media.cdnUrl || media.thumbnailUrl || ''}
              alt={media.altText || 'GTA VI screenshot'}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-3">
              <span className="text-xs font-medium text-white truncate max-w-full">
                {media.title || 'Official Screenshot'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
