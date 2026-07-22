import React from 'react';
import Image from 'next/image';
import { DbMedia } from '@/backend/types/database';

interface HeroSectionProps {
  title: string;
  officialName?: string | null;
  nickname?: string | null;
  description: string;
  status: string;
  isOfficial: boolean;
  heroMedia: DbMedia | null;
}

export default function HeroSection({
  title,
  officialName,
  nickname,
  description,
  status,
  isOfficial,
  heroMedia,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/5 bg-[#12141c]/60 p-6 md:p-10 backdrop-blur-md">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 items-center">
        {/* Banner details */}
        <div className="space-y-6 md:col-span-7">
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="rounded-full bg-pink-500/10 px-3 py-1 text-xs font-semibold text-pink-400 border border-pink-500/20 capitalize">
                {status}
              </span>
              {isOfficial && (
                <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-400 border border-orange-500/20">
                  Rockstar Official
                </span>
              )}
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              {title}
            </h1>
            {officialName && (
              <p className="text-sm font-medium text-gray-400">
                Official Designation: <span className="text-gray-200">{officialName}</span>
              </p>
            )}
            {nickname && (
              <p className="text-sm font-medium text-gray-400">
                Alias: <span className="text-gray-200">"{nickname}"</span>
              </p>
            )}
          </div>

          <p className="text-base leading-relaxed text-gray-300">
            {description || 'Official Rockstar description catalog pending details seeds update.'}
          </p>
        </div>

        {/* Hero Banner Media */}
        <div className="md:col-span-5 relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-[#090b0e] shadow-xl">
          {heroMedia ? (
            <Image
              src={heroMedia.cdnUrl || heroMedia.thumbnailUrl || ''}
              alt={heroMedia.altText || title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-gray-600 bg-white/5">
              <span className="text-xs uppercase tracking-wider font-semibold">Hero Media Missing</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
