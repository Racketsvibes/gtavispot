'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { GitCompare, Calendar, Users, MapPin, Tag, ArrowLeft, Heart, CheckCircle2 } from 'lucide-react';

interface CompareDetailsClientProps {
  entityA: any;
  entityB: any;
  category: string;
}

export default function CompareDetailsClient({ entityA, entityB, category }: CompareDetailsClientProps) {
  // Extract primary properties polymorphically
  const extractPrimary = (payload: any) => {
    switch (category) {
      case 'character':
        return {
          name: payload.character?.name,
          desc: payload.character?.shortDescription || payload.character?.officialDescription,
          role: 'Protagonist',
          stats: payload.statistics || {},
          gallery: payload.gallery || [],
          relations: payload.relationships || [],
          timeline: payload.timeline || [],
        };
      case 'location':
        return {
          name: payload.location?.name,
          desc: payload.location?.description,
          role: payload.location?.region || 'Region',
          stats: payload.statistics || {},
          gallery: payload.gallery || [],
          relations: payload.relationships || [],
          timeline: payload.timeline || [],
        };
      case 'vehicle':
        return {
          name: payload.vehicle?.name,
          desc: payload.vehicle?.description,
          role: payload.vehicle?.brand || 'Brand',
          stats: payload.statistics || {},
          gallery: payload.gallery || [],
          relations: payload.relationships || [],
          timeline: payload.timeline || [],
        };
      case 'weapon':
        return {
          name: payload.weapon?.name,
          desc: payload.weapon?.description,
          role: payload.weapon?.weaponClass || 'Class',
          stats: payload.statistics || {},
          gallery: payload.gallery || [],
          relations: payload.relationships || [],
          timeline: payload.timeline || [],
        };
      case 'business':
        return {
          name: payload.business?.name,
          desc: payload.business?.description,
          role: payload.business?.businessType || 'Type',
          stats: payload.statistics || {},
          gallery: payload.gallery || [],
          relations: payload.relationships || [],
          timeline: payload.timeline || [],
        };
      default:
        return { name: 'Unknown', desc: '', role: '', stats: {}, gallery: [], relations: [], timeline: [] };
    }
  };

  const itemA = useMemo(() => extractPrimary(entityA), [entityA, category]);
  const itemB = useMemo(() => extractPrimary(entityB), [entityB, category]);

  // Dynamic discovery engine: find shared/common attributes
  const sharedAttributes = useMemo(() => {
    const shared: string[] = [];

    // 1. Shared relations
    const namesA = new Set<string>(itemA.relations.map((r: any) => r.name));
    const sharedRelations = itemB.relations.filter((r: any) => namesA.has(r.name));
    if (sharedRelations.length > 0) {
      sharedRelations.forEach((r: any) => {
        shared.push(`Both are connected to "${r.name}" (${r.type || 'relation'}).`);
      });
    }

    // 2. Shared timeline/announcements appearances
    const timeA = new Set<string>(itemA.timeline.map((t: any) => t.title));
    const sharedTimeline = itemB.timeline.filter((t: any) => timeA.has(t.title));
    if (sharedTimeline.length > 0) {
      sharedTimeline.forEach((t: any) => {
        shared.push(`Both appeared in "${t.title}".`);
      });
    }

    return shared;
  }, [itemA, itemB]);

  return (
    <div className="min-h-screen bg-[#090b0e] text-white px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Back Link */}
        <Link
          href="/compare"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-all"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Selection
        </Link>

        {/* Dynamic comparison title headers */}
        <div className="flex flex-col items-center justify-center text-center gap-4 border-b border-white/5 pb-8">
          <div className="flex items-center gap-6 md:gap-12 flex-wrap justify-center">
            <h1 className="text-3xl font-extrabold md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
              {itemA.name}
            </h1>
            <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-pink-500 font-mono">
              VS
            </span>
            <h1 className="text-3xl font-extrabold md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
              {itemB.name}
            </h1>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
            {category} Comparison
          </span>
        </div>

        {/* Discovery Engine Highlights (Smart Recommendations) */}
        {sharedAttributes.length > 0 && (
          <div className="rounded-3xl border border-pink-500/25 bg-pink-500/5 p-6 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-pink-400 flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4" />
              Smart Shared Connections
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-300">
              {sharedAttributes.map((attr, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  <span>{attr}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Side-by-Side Comparison Layout Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Entity A */}
          <div className="space-y-6 border-r border-white/5 pr-0 lg:pr-8">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <h2 className="text-2xl font-extrabold text-white">{itemA.name}</h2>
              <span className="text-xxs font-mono uppercase bg-white/5 px-2.5 py-1 rounded text-gray-400">
                {itemA.role}
              </span>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <span className="text-xxs font-bold text-gray-500 uppercase tracking-wider block">Description</span>
              <p className="text-sm leading-relaxed text-gray-300">{itemA.desc}</p>
            </div>

            {/* Relations */}
            {itemA.relations.length > 0 && (
              <div className="space-y-2">
                <span className="text-xxs font-bold text-gray-500 uppercase tracking-wider block font-mono">
                  Direct Connections
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {itemA.relations.map((rel: any, idx: number) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-xs rounded-xl border border-white/5 bg-[#12141c]/40 px-3 py-1.5 text-gray-300"
                    >
                      {rel.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Stats specifications summary */}
            {itemA.stats && Object.keys(itemA.stats).length > 0 && (
              <div className="rounded-2xl border border-white/5 bg-[#12141c]/20 p-4 space-y-2">
                <span className="text-xxs font-bold text-gray-500 uppercase tracking-wider block">Metrics</span>
                {Object.entries(itemA.stats).map(([k, v]: any) => (
                  <div key={k} className="flex justify-between text-xs py-0.5 border-b border-white/5 last:border-0">
                    <span className="text-gray-400 capitalize">{k.replace(/_/g, ' ')}</span>
                    <span className="font-semibold text-white">{v}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Media Gallery */}
            {itemA.gallery.length > 0 && (
              <div className="space-y-3">
                <span className="text-xxs font-bold text-gray-500 uppercase tracking-wider block">Media Gallery</span>
                <div className="grid grid-cols-2 gap-2">
                  {itemA.gallery.slice(0, 4).map((g: any, idx: number) => (
                    <div key={idx} className="relative aspect-video overflow-hidden rounded-xl bg-black/40">
                      <img src={g.cdnUrl || g.thumbnailUrl} alt="gallery" className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Entity B */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <h2 className="text-2xl font-extrabold text-white">{itemB.name}</h2>
              <span className="text-xxs font-mono uppercase bg-white/5 px-2.5 py-1 rounded text-gray-400">
                {itemB.role}
              </span>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <span className="text-xxs font-bold text-gray-500 uppercase tracking-wider block">Description</span>
              <p className="text-sm leading-relaxed text-gray-300">{itemB.desc}</p>
            </div>

            {/* Relations */}
            {itemB.relations.length > 0 && (
              <div className="space-y-2">
                <span className="text-xxs font-bold text-gray-500 uppercase tracking-wider block font-mono">
                  Direct Connections
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {itemB.relations.map((rel: any, idx: number) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-xs rounded-xl border border-white/5 bg-[#12141c]/40 px-3 py-1.5 text-gray-300"
                    >
                      {rel.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Stats specifications summary */}
            {itemB.stats && Object.keys(itemB.stats).length > 0 && (
              <div className="rounded-2xl border border-white/5 bg-[#12141c]/20 p-4 space-y-2">
                <span className="text-xxs font-bold text-gray-500 uppercase tracking-wider block">Metrics</span>
                {Object.entries(itemB.stats).map(([k, v]: any) => (
                  <div key={k} className="flex justify-between text-xs py-0.5 border-b border-white/5 last:border-0">
                    <span className="text-gray-400 capitalize">{k.replace(/_/g, ' ')}</span>
                    <span className="font-semibold text-white">{v}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Media Gallery */}
            {itemB.gallery.length > 0 && (
              <div className="space-y-3">
                <span className="text-xxs font-bold text-gray-500 uppercase tracking-wider block">Media Gallery</span>
                <div className="grid grid-cols-2 gap-2">
                  {itemB.gallery.slice(0, 4).map((g: any, idx: number) => (
                    <div key={idx} className="relative aspect-video overflow-hidden rounded-xl bg-black/40">
                      <img src={g.cdnUrl || g.thumbnailUrl} alt="gallery" className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
