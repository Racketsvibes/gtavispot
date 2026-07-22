'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Filter, Download, Copy, Share2, X, Compass, ExternalLink } from 'lucide-react';

interface MediaItem {
  id: string;
  cdnUrl?: string | null;
  thumbnailUrl?: string | null;
  title?: string | null;
  altText?: string | null;
  mediaType?: string | null; // 'screenshot', 'artwork', 'wallpaper'
  width?: number | null;
  height?: number | null;
  createdAt: string | Date;
}

interface EntityLink {
  id: string;
  entityId: string;
  entityType: string;
  mediaId: string;
  role: string;
}

interface EntityMapVal {
  name: string;
  slug: string;
  type: string;
}

interface GalleryClientProps {
  initialMedia: any[];
  entityMediaLinks: any[];
  entityMap: Record<string, EntityMapVal>;
}

export default function GalleryClient({
  initialMedia,
  entityMediaLinks,
  entityMap,
}: GalleryClientProps) {
  // Filters State
  const [searchQuery, setSearchQuery] = useState('');
  const [activeType, setActiveType] = useState<string>('all'); // 'all', 'artwork', 'screenshot', 'wallpaper'
  const [sortBy, setSortBy] = useState<string>('newest'); // 'newest', 'oldest'

  // Selected lightbox image
  const [selectedMediaId, setSelectedMediaId] = useState<string | null>(null);

  // Pagination page count
  const [visibleCount, setVisibleCount] = useState(16);

  // Copy share feedback
  const [copySuccess, setCopySuccess] = useState(false);

  // 1. Filter and sort media array
  const filteredMedia = useMemo(() => {
    let list = [...initialMedia];

    // Category filter
    if (activeType !== 'all') {
      list = list.filter((m) => m.mediaType?.toLowerCase() === activeType.toLowerCase());
    }

    // Title / Alt Search query matches
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (m) =>
          m.title?.toLowerCase().includes(q) ||
          m.altText?.toLowerCase().includes(q) ||
          m.mediaType?.toLowerCase().includes(q)
      );
    }

    // Sort order
    list.sort((a, b) => {
      const timeA = new Date(a.createdAt).getTime();
      const timeB = new Date(b.createdAt).getTime();
      return sortBy === 'newest' ? timeB - timeA : timeA - timeB;
    });

    return list;
  }, [initialMedia, activeType, searchQuery, sortBy]);

  // Selected media object
  const selectedMedia = useMemo(() => {
    if (!selectedMediaId) return null;
    return initialMedia.find((m) => m.id === selectedMediaId) || null;
  }, [selectedMediaId, initialMedia]);

  // Connected entities for selected image
  const selectedRelations = useMemo(() => {
    if (!selectedMediaId) return [];
    
    // Find all links connecting to this mediaId
    const links = entityMediaLinks.filter((l) => l.mediaId === selectedMediaId);
    
    return links
      .map((l) => entityMap[l.entityId])
      .filter((ent) => ent !== undefined);
  }, [selectedMediaId, entityMediaLinks, entityMap]);

  // Handlers
  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const handleShare = (m: MediaItem) => {
    if (navigator.share) {
      navigator.share({
        title: m.title || 'GTA VI Media',
        text: m.altText || 'GTA VI screenshot reveal',
        url: m.cdnUrl || window.location.href,
      }).catch(console.error);
    }
  };

  const getEntityUrl = (ent: EntityMapVal) => {
    const type = ent.type.toLowerCase();
    return type === 'character' ? `/characters/${ent.slug}` : `/${type}s/${ent.slug}`;
  };

  return (
    <div className="min-h-screen bg-[#090b0e] text-white px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header Title */}
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-pink-500">Official Assets</span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            GTA VI GALLERY
          </h1>
          <p className="text-sm text-gray-400 max-w-xl">
            Explore 4K screenshots, trailer frames, and character artwork populated dynamically by the Knowledge Engine.
          </p>
        </div>

        {/* Filters Controls Panel */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-y border-white/5 py-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Media' },
              { id: 'artwork', label: 'Artworks' },
              { id: 'screenshot', label: 'Screenshots' },
              { id: 'wallpaper', label: 'Wallpapers' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveType(tab.id);
                  setVisibleCount(16); // reset pagination
                }}
                className={`rounded-xl border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeType === tab.id
                    ? 'border-pink-500/30 bg-pink-500/10 text-pink-400'
                    : 'border-white/5 bg-[#12141c]/40 text-gray-400 hover:bg-[#151924]/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search & Sort */}
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search gallery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#12141c] py-2 pl-10 pr-4 text-xs outline-none focus:border-pink-500/50 sm:w-48"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-xl border border-white/10 bg-[#12141c] px-4 py-2.5 text-xs text-gray-400 outline-none cursor-pointer"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>

        {/* Gallery Masonry/Card Grid */}
        {filteredMedia.length === 0 ? (
          <div className="rounded-3xl border border-white/5 bg-[#12141c]/40 p-12 text-center text-gray-500">
            No media files matched your filters.
          </div>
        ) : (
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredMedia.slice(0, visibleCount).map((media) => (
                <div
                  key={media.id}
                  onClick={() => setSelectedMediaId(media.id)}
                  className="group relative aspect-video overflow-hidden rounded-2xl border border-white/5 bg-[#12141c]/60 cursor-pointer transition-all hover:border-pink-500/30 hover:scale-[1.01]"
                >
                  <Image
                    src={media.cdnUrl || media.thumbnailUrl || ''}
                    alt={media.altText || 'GTA VI media file'}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-4">
                    <span className="text-xxs uppercase tracking-wider text-pink-400 font-semibold mb-1">
                      {media.mediaType || 'Official screenshot'}
                    </span>
                    <span className="text-sm font-bold text-white truncate">
                      {media.title || 'Official Asset'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination / Load more */}
            {visibleCount < filteredMedia.length && (
              <div className="flex justify-center">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 12)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-300 hover:bg-white/10 transition-all active:scale-95"
                >
                  Load More Official Media
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Lightbox Media Details Modal */}
      {selectedMedia && (
        <div
          onClick={() => setSelectedMediaId(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#0d0e12] shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Left Column Image Preview */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] md:min-h-0">
              <img
                src={selectedMedia.cdnUrl || selectedMedia.thumbnailUrl || ''}
                alt={selectedMedia.title || 'GTA VI media'}
                className="h-full w-full object-contain max-h-[50vh] md:max-h-[80vh]"
              />
            </div>

            {/* Right Column Metadata Details */}
            <div className="w-full md:w-80 border-t md:border-t-0 md:border-l border-white/5 p-6 flex flex-col justify-between overflow-y-auto bg-[#0a0b0e]">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-bold text-pink-500 uppercase tracking-wide">
                      {selectedMedia.mediaType || 'Asset'}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {selectedMedia.title || 'Official Media'}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedMediaId(null)}
                    className="rounded-lg p-1.5 hover:bg-white/5"
                  >
                    <X className="h-5 w-5 text-gray-400" />
                  </button>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-xxs font-bold text-gray-500 uppercase tracking-wider mb-2">Description</h4>
                  <p className="text-xs leading-relaxed text-gray-300">
                    {selectedMedia.altText || 'Official Rockstar screenshot capture frame.'}
                  </p>
                </div>

                {/* Dimensions specifications */}
                {selectedMedia.width && selectedMedia.height && (
                  <div className="rounded-2xl border border-white/5 bg-[#12141c]/40 p-4">
                    <span className="text-xxs font-bold text-gray-500 uppercase tracking-wider block mb-2">Specification</span>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Resolution</span>
                      <span className="font-semibold">{selectedMedia.width} &times; {selectedMedia.height} px</span>
                    </div>
                  </div>
                )}

                {/* Connected entities profiles */}
                {selectedRelations.length > 0 && (
                  <div>
                    <h4 className="text-xxs font-bold text-gray-500 uppercase tracking-wider mb-3">Linked Entities</h4>
                    <div className="space-y-1.5">
                      {selectedRelations.map((ent, idx) => (
                        <Link
                          key={idx}
                          href={getEntityUrl(ent)}
                          onClick={() => setSelectedMediaId(null)}
                          className="flex items-center justify-between rounded-xl border border-white/5 bg-[#12141c]/20 hover:bg-[#181d28]/60 p-3 text-xs"
                        >
                          <span className="font-bold text-gray-200">{ent.name}</span>
                          <span className="text-xxs text-pink-500 capitalize">{ent.type} &rarr;</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Actions Footer */}
              <div className="mt-8 pt-4 border-t border-white/5 space-y-2">
                <a
                  href={selectedMedia.cdnUrl || ''}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-pink-500 py-3 text-xs font-semibold text-white transition-all hover:bg-pink-600 active:scale-95"
                >
                  <Download className="h-4 w-4" />
                  Download Full 4K Resolution
                </a>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleCopyLink(selectedMedia.cdnUrl || '')}
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-xs text-gray-300 hover:bg-white/10 transition-all active:scale-95"
                  >
                    <Copy className="h-4 w-4" />
                    {copySuccess ? 'Copied!' : 'Copy Link'}
                  </button>
                  <button
                    onClick={() => handleShare(selectedMedia)}
                    className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2.5 text-gray-300 hover:bg-white/10 transition-all active:scale-95"
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
