'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Calendar, Tag, ExternalLink, Bookmark, Rss } from 'lucide-react';

interface RelatedEntity {
  name: string;
  slug: string;
  type: string;
}

interface Announcement {
  id: string;
  name: string;
  type: string; // e.g. 'trailer', 'newswire', 'official'
  url: string | null;
  releaseDate: string | Date | null;
  thumbnailUrl: string;
  relatedEntities: RelatedEntity[];
}

interface NewswireClientProps {
  initialAnnouncements: Announcement[];
}

export default function NewswireClient({ initialAnnouncements }: NewswireClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  // 1. Filtered announcements list
  const filteredAnnouncements = useMemo(() => {
    let list = [...initialAnnouncements];

    // Filter by category
    if (activeCategory !== 'all') {
      list = list.filter((a) => a.type.toLowerCase() === activeCategory.toLowerCase());
    }

    // Filter by year
    if (selectedYear !== 'all') {
      list = list.filter((a) => {
        if (!a.releaseDate) return false;
        const year = new Date(a.releaseDate).getFullYear().toString();
        return year === selectedYear;
      });
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.type.toLowerCase().includes(q) ||
          a.relatedEntities.some((ent) => ent.name.toLowerCase().includes(q))
      );
    }

    // Sort newest first
    list.sort((a, b) => {
      const timeA = a.releaseDate ? new Date(a.releaseDate).getTime() : 0;
      const timeB = b.releaseDate ? new Date(b.releaseDate).getTime() : 0;
      return timeB - timeA;
    });

    return list;
  }, [initialAnnouncements, activeCategory, selectedYear, searchQuery]);

  // 2. Resolve Pinned / Featured announcement (newest item overall)
  const pinnedAnnouncement = useMemo(() => {
    if (initialAnnouncements.length === 0) return null;
    const sorted = [...initialAnnouncements].sort((a, b) => {
      const timeA = a.releaseDate ? new Date(a.releaseDate).getTime() : 0;
      const timeB = b.releaseDate ? new Date(b.releaseDate).getTime() : 0;
      return timeB - timeA;
    });
    return sorted[0];
  }, [initialAnnouncements]);

  // 3. Resolve list of unique years in database for Archive filters
  const uniqueYears = useMemo(() => {
    const years = new Set<string>();
    initialAnnouncements.forEach((a) => {
      if (a.releaseDate) {
        years.add(new Date(a.releaseDate).getFullYear().toString());
      }
    });
    return Array.from(years).sort((a, b) => b.localeCompare(a));
  }, [initialAnnouncements]);

  const formatDate = (dateVal: string | Date | null) => {
    if (!dateVal) return 'Announced';
    return new Date(dateVal).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getEntityUrl = (ent: RelatedEntity) => {
    const type = ent.type.toLowerCase();
    return type === 'character' ? `/characters/${ent.slug}` : `/${type}s/${ent.slug}`;
  };

  return (
    <div className="min-h-screen bg-[#090b0e] text-white px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-pink-500">Official updates</span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Newswire & Release Center
            </h1>
            <p className="text-sm text-gray-400 max-w-xl">
              Factual chronicle of every official trailer release, cover art reveals, and news log updates from Rockstar Games.
            </p>
          </div>

          <a
            href="/newswire/feed.xml"
            target="_blank"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-300 hover:bg-white/10 transition-all active:scale-95"
          >
            <Rss className="h-4 w-4 text-orange-400" />
            RSS Feed
          </a>
        </div>

        {/* Highlight Pinned / Pinned Hero Section */}
        {pinnedAnnouncement && !searchQuery && activeCategory === 'all' && selectedYear === 'all' && (
          <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-[#12141c]/40 flex flex-col lg:flex-row gap-6 p-6">
            <div className="relative aspect-video lg:aspect-auto lg:h-[320px] w-full lg:w-[500px] overflow-hidden rounded-2xl border border-white/5 bg-[#0a0b0e]">
              <img
                src={pinnedAnnouncement.thumbnailUrl}
                alt={pinnedAnnouncement.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between py-2">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-xxs font-mono text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded-full">
                    <Bookmark className="h-3 w-3" />
                    <span>PINNED FEATURED</span>
                  </span>
                  <span className="text-xs font-bold text-gray-400 uppercase">
                    {pinnedAnnouncement.type}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white leading-snug">
                  {pinnedAnnouncement.name}
                </h2>
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(pinnedAnnouncement.releaseDate)}</span>
                </div>

                {/* Related entities */}
                {pinnedAnnouncement.relatedEntities.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-xxs font-bold text-gray-500 uppercase tracking-wider block">
                      Connected Entities
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {pinnedAnnouncement.relatedEntities.map((ent, idx) => (
                        <Link
                          key={idx}
                          href={getEntityUrl(ent)}
                          className="inline-flex items-center gap-1 text-xs rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-white/10 text-gray-200"
                        >
                          {ent.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {pinnedAnnouncement.url && (
                <div className="pt-4 border-t border-white/5 mt-4">
                  <a
                    href={pinnedAnnouncement.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-pink-500 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-pink-600 transition-all active:scale-95 shadow-lg shadow-pink-500/20"
                  >
                    Read Official Source
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Filters and Archives Controls */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between border-y border-white/5 py-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All News' },
              { id: 'trailer', label: 'Trailers' },
              { id: 'official', label: 'Announcements' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-xl border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? 'border-pink-500/30 bg-pink-500/10 text-pink-400'
                    : 'border-white/5 bg-[#12141c]/40 text-gray-400 hover:bg-[#151924]/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search, Year Archive Archive dropdown */}
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search announcements..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#12141c] py-2 pl-10 pr-4 text-xs outline-none focus:border-pink-500/50 sm:w-48"
              />
            </div>

            {/* Archive dropdown */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="rounded-xl border border-white/10 bg-[#12141c] px-4 py-2.5 text-xs text-gray-400 outline-none cursor-pointer"
            >
              <option value="all">All Years</option>
              {uniqueYears.map((yr) => (
                <option key={yr} value={yr}>
                  {yr}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Announcement Grid */}
        {filteredAnnouncements.length === 0 ? (
          <div className="rounded-3xl border border-white/5 bg-[#12141c]/40 p-12 text-center text-gray-500">
            No announcements matched your search.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredAnnouncements.map((announcement) => (
              <div
                key={announcement.id}
                className="group border border-white/5 bg-[#12141c]/20 hover:bg-[#151822]/40 rounded-3xl p-5 flex flex-col justify-between gap-5 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Thumbnail */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/5 bg-[#0a0b0e]">
                    <img
                      src={announcement.thumbnailUrl}
                      alt={announcement.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xxs font-bold text-pink-500 uppercase font-mono">
                        {announcement.type}
                      </span>
                      <span className="text-xxs text-gray-500 font-mono">
                        {formatDate(announcement.releaseDate)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {announcement.name}
                    </h3>
                  </div>

                  {/* Connected entities */}
                  {announcement.relatedEntities.length > 0 && (
                    <div className="space-y-1.5">
                      <span className="text-xxs font-bold text-gray-500 uppercase tracking-wider block">
                        Related Profiles
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {announcement.relatedEntities.map((ent, idx) => (
                          <Link
                            key={idx}
                            href={getEntityUrl(ent)}
                            className="inline-flex items-center gap-1 text-xxs rounded-lg border border-white/5 bg-white/5 px-2.5 py-1 hover:bg-white/10 text-gray-300"
                          >
                            {ent.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {announcement.url && (
                  <div className="pt-4 border-t border-white/5">
                    <a
                      href={announcement.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 py-3 text-xs font-bold uppercase text-gray-300 hover:bg-white/10 hover:text-white transition-all active:scale-95"
                    >
                      Open Rockstar Announcement
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
