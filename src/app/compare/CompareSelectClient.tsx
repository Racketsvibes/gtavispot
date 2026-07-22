'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { GitCompare, Sparkles, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface SelectorEntity {
  id: string;
  name: string;
  slug: string;
  type: string;
}

interface CompareSelectClientProps {
  entities: {
    character: SelectorEntity[];
    location: SelectorEntity[];
    vehicle: SelectorEntity[];
    weapon: SelectorEntity[];
    business: SelectorEntity[];
  };
}

export default function CompareSelectClient({ entities }: CompareSelectClientProps) {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<keyof typeof entities>('character');

  const [entityA, setEntityA] = useState('');
  const [entityB, setEntityB] = useState('');

  const currentList = entities[activeCategory] || [];

  const handleCompare = () => {
    if (!entityA || !entityB || entityA === entityB) return;
    router.push(`/compare/${entityA}-vs-${entityB}`);
  };

  return (
    <div className="min-h-screen bg-[#090b0e] text-white px-4 py-12 md:px-8">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-pink-500 bg-pink-500/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <GitCompare className="h-4 w-4" />
            <span>Comparison Engine</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            GTA VI Entity Comparison
          </h1>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            Select any two official Leonida characters, locations, or vehicles to compare their facts, statistics, and timeline connections side-by-side.
          </p>
        </div>

        {/* Categories Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 border-b border-white/5 pb-6">
          {[
            { id: 'character', label: 'Characters' },
            { id: 'location', label: 'Locations' },
            { id: 'vehicle', label: 'Vehicles' },
            { id: 'weapon', label: 'Weapons' },
            { id: 'business', label: 'Businesses' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveCategory(tab.id as any);
                setEntityA('');
                setEntityB('');
              }}
              className={`rounded-xl border px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                activeCategory === tab.id
                  ? 'border-pink-500/30 bg-pink-500/10 text-pink-400'
                  : 'border-white/5 bg-[#12141c]/40 text-gray-400 hover:bg-[#151924]/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dropdowns Selector Form Card */}
        <div className="rounded-3xl border border-white/5 bg-[#12141c]/40 p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Entity A */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                Select First Entity
              </label>
              <select
                value={entityA}
                onChange={(e) => setEntityA(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-[#0d0e12] py-3.5 px-4 text-sm text-gray-200 outline-none focus:border-pink-500/50 cursor-pointer"
              >
                <option value="">Choose item...</option>
                {currentList.map((item) => (
                  <option key={item.id} value={item.slug}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Entity B */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                Select Second Entity
              </label>
              <select
                value={entityB}
                onChange={(e) => setEntityB(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-[#0d0e12] py-3.5 px-4 text-sm text-gray-200 outline-none focus:border-pink-500/50 cursor-pointer"
              >
                <option value="">Choose item...</option>
                {currentList.map((item) => (
                  <option key={item.id} value={item.slug}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={handleCompare}
            disabled={!entityA || !entityB || entityA === entityB}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-pink-500 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-pink-600 active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-pink-500/10"
          >
            <GitCompare className="h-5 w-5" />
            Compare Entities Side-by-Side
          </button>
        </div>

        {/* Featured Comparative Presets (Discovery Center) */}
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block text-center">
            Suggested Comparisons
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Lucia vs Jason', href: '/compare/lucia-vs-jason', cat: 'Characters' },
              { label: 'Vice City vs Port Gellhorn', href: '/compare/vice-city-vs-port-gellhorn', cat: 'Locations' },
              { label: 'Cheetah vs Infernus', href: '/compare/cheetah-vs-infernus', cat: 'Vehicles' },
            ].map((preset) => (
              <Link
                key={preset.label}
                href={preset.href}
                className="rounded-2xl border border-white/5 bg-[#12141c]/20 hover:bg-[#181d28]/60 p-4 text-center hover:border-pink-500/25 transition-all flex flex-col justify-between"
              >
                <span className="text-xxs font-bold text-pink-500 uppercase block mb-1">
                  {preset.cat}
                </span>
                <span className="font-bold text-gray-200">{preset.label}</span>
                <span className="text-xxs text-gray-500 mt-2 block">Compare &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
