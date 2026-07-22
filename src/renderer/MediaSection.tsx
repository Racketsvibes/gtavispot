import React from 'react';

interface MediaSectionProps {
  youtubeId?: string | null;
  title?: string | null;
}

export default function MediaSection({ youtubeId, title }: MediaSectionProps) {
  if (!youtubeId) return null;

  return (
    <section className="space-y-4">
      <h2 className="text-sm font-bold text-gray-400 tracking-wider uppercase">Official Media Reveal</h2>
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/5 bg-[#12141c]/60 shadow-lg">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title || 'GTA VI Trailer Reveal'}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </section>
  );
}
