'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Filter, Info, X, Menu, Compass, Award, ExternalLink } from 'lucide-react';
import InteractiveGraph from './InteractiveGraph';

interface Node {
  id: string;
  name: string;
  slug: string;
  type: string; // e.g. 'character', 'location', 'vehicle', 'weapon', 'business', 'screenshot', 'artwork', 'trailer'
  description: string;
  thumbnailUrl?: string | null;
}

interface Edge {
  id: string;
  source: string;
  target: string;
  type: string;
}

interface RelationshipsClientProps {
  initialNodes: Node[];
  initialEdges: Edge[];
}

export default function RelationshipsClient({ initialNodes, initialEdges }: RelationshipsClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Active Category Filters
  const [activeCategories, setActiveCategories] = useState<string[]>([
    'character', 'location', 'vehicle', 'weapon', 'business', 'screenshot', 'artwork', 'trailer'
  ]);

  const toggleCategory = (cat: string) => {
    setActiveCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  // Filtered Nodes based on categories
  const filteredNodes = useMemo(() => {
    return initialNodes.filter((node) => {
      // 1. Category check
      const typeMatches = activeCategories.includes(node.type) || 
                          (node.type === 'wallpaper' && activeCategories.includes('screenshot'));
      if (!typeMatches) return false;

      // 2. Search query check
      if (searchQuery.trim()) {
        return node.name.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return true;
    });
  }, [initialNodes, activeCategories, searchQuery]);

  // Filtered Edges connecting filtered nodes
  const filteredEdges = useMemo(() => {
    const activeIds = new Set(filteredNodes.map((n) => n.id));
    return initialEdges.filter(
      (edge) => activeIds.has(edge.source) && activeIds.has(edge.target)
    );
  }, [initialEdges, filteredNodes]);

  // Selected Node Details Builder
  const selectedNode = useMemo(() => {
    if (!selectedNodeId) return null;
    return initialNodes.find((n) => n.id === selectedNodeId) || null;
  }, [selectedNodeId, initialNodes]);

  // Calculate Node metrics from graph edges list
  const nodeStats = useMemo(() => {
    if (!selectedNodeId) return null;

    const connectedEdges = initialEdges.filter(
      (e) => e.source === selectedNodeId || e.target === selectedNodeId
    );

    const related: { id: string; name: string; type: string; relationType: string }[] = [];
    connectedEdges.forEach((e) => {
      const otherId = e.source === selectedNodeId ? e.target : e.source;
      const otherNode = initialNodes.find((n) => n.id === otherId);
      if (otherNode) {
        related.push({
          id: otherNode.id,
          name: otherNode.name,
          type: otherNode.type,
          relationType: e.type,
        });
      }
    });

    return {
      relationsCount: connectedEdges.length,
      relatedEntities: related,
    };
  }, [selectedNodeId, initialEdges, initialNodes]);

  // Redirection route builder
  const getEntityUrl = (node: Node) => {
    const type = node.type.toLowerCase();
    if (type === 'character') return `/characters/${node.slug}`;
    if (type === 'location') return `/locations/${node.slug}`;
    if (type === 'vehicle') return `/vehicles/${node.slug}`;
    if (type === 'weapon') return `/weapons/${node.slug}`;
    if (type === 'business') return `/businesses/${node.slug}`;
    return null;
  };

  return (
    <div className="relative flex h-screen w-screen overflow-hidden bg-[#090b0e] text-white">
      {/* 1. Header Toolbar */}
      <div className="absolute left-4 top-4 z-20 flex gap-2">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-[#161920]/80 px-4 text-sm font-medium backdrop-blur-md transition-all hover:bg-[#1f232c]"
        >
          <Menu className="h-5 w-5" />
          <span>Explorer Filters</span>
        </button>
      </div>

      {/* 2. Sidebar Filters Panel */}
      <div
        className={`absolute bottom-0 left-0 top-0 z-10 flex w-full flex-col border-r border-white/5 bg-[#0a0c10]/95 backdrop-blur-lg transition-transform duration-300 sm:w-80 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-20 items-center justify-between px-6 border-b border-white/5 bg-[#07080a]/50">
          <span className="text-lg font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
            RELATIONSHIP GRAPH
          </span>
          <button onClick={() => setIsSidebarOpen(false)} className="rounded-lg p-1.5 hover:bg-white/5 sm:hidden">
            <X className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-white/5">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search entities (e.g. Lucia)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#12141c] py-2.5 pl-10 pr-4 text-sm outline-none transition-all focus:border-pink-500/50"
            />
          </div>
        </div>

        {/* Entity Type Checkboxes */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Render Categories
          </span>
          <div className="space-y-2">
            {[
              { id: 'character', label: 'Characters', color: 'bg-purple-500' },
              { id: 'location', label: 'Locations', color: 'bg-cyan-500' },
              { id: 'vehicle', label: 'Vehicles', color: 'bg-orange-500' },
              { id: 'weapon', label: 'Weapons', color: 'bg-red-500' },
              { id: 'business', label: 'Businesses', color: 'bg-yellow-500' },
              { id: 'screenshot', label: 'Screenshots & Art', color: 'bg-pink-500' },
              { id: 'trailer', label: 'Official Trailers', color: 'bg-emerald-500' },
            ].map((cat) => {
              const isActive = activeCategories.includes(cat.id);
              return (
                <button
                  key={cat.id}
                  onClick={() => toggleCategory(cat.id)}
                  className={`flex w-full items-center justify-between rounded-xl border p-3 text-sm transition-all ${
                    isActive
                      ? 'border-pink-500/30 bg-pink-500/10 text-white'
                      : 'border-white/5 bg-[#12141c]/40 text-gray-400 hover:bg-[#151924]/60'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${cat.color}`} />
                    <span className="font-semibold">{cat.label}</span>
                  </div>
                  <span className="text-xxs uppercase tracking-wider">
                    {isActive ? 'Visible' : 'Hidden'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Main Graph Area */}
      <div className="relative h-full w-full flex-1">
        <InteractiveGraph
          nodes={filteredNodes}
          edges={filteredEdges}
          selectedId={selectedNodeId}
          onSelectNode={setSelectedNodeId}
        />
      </div>

      {/* 4. Node Detail Panel Drawer */}
      <div
        className={`absolute bottom-0 right-0 top-0 z-20 flex w-full flex-col border-l border-white/5 bg-[#0a0c10]/95 shadow-2xl backdrop-blur-xl transition-transform duration-300 sm:w-96 ${
          selectedNode ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {selectedNode && (
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-pink-500">
                  Node Inspector
                </span>
                <h3 className="text-xl font-bold mt-1 text-white">{selectedNode.name}</h3>
              </div>
              <button
                onClick={() => setSelectedNodeId(null)}
                className="rounded-lg p-2 hover:bg-white/5"
              >
                <X className="h-5 w-5 text-gray-400" />
              </button>
            </div>

            {/* Content info card */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Media Thumbnail */}
              {selectedNode.thumbnailUrl && (
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/5 bg-[#0d0e12]">
                  <img
                    src={selectedNode.thumbnailUrl}
                    alt={selectedNode.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              {/* Attributes Card */}
              <div className="rounded-2xl border border-white/5 bg-[#12141c]/40 p-4 space-y-2">
                <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                  <span className="text-gray-400">Type</span>
                  <span className="font-semibold text-white capitalize">{selectedNode.type}</span>
                </div>
                {nodeStats && (
                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-gray-400">Direct Connections</span>
                    <span className="font-semibold text-white">{nodeStats.relationsCount}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              {selectedNode.description && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Description</h4>
                  <p className="text-sm leading-relaxed text-gray-300">
                    {selectedNode.description}
                  </p>
                </div>
              )}

              {/* Connected relations list */}
              {nodeStats && nodeStats.relatedEntities.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Relations</h4>
                  <div className="space-y-2">
                    {nodeStats.relatedEntities.map((rel, idx) => (
                      <div
                        key={`${rel.id}-${idx}`}
                        onClick={() => setSelectedNodeId(rel.id)}
                        className="flex items-center justify-between rounded-xl border border-white/5 bg-[#12141c]/20 hover:bg-[#181d28]/70 hover:border-pink-500/20 p-3 text-sm cursor-pointer transition-all"
                      >
                        <div>
                          <span className="font-bold block text-gray-200">{rel.name}</span>
                          <span className="text-xxs text-gray-500 capitalize">{rel.type}</span>
                        </div>
                        <span className="text-xxs rounded bg-white/5 px-2 py-0.5 font-mono text-gray-400 capitalize">
                          {rel.relationType.replace(/_/g, ' ')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Dynamic details redirect button */}
            {getEntityUrl(selectedNode) && (
              <div className="p-6 border-t border-white/5 bg-[#07080a]/30">
                <Link
                  href={getEntityUrl(selectedNode)!}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-pink-500 py-3 text-sm font-semibold text-white transition-all hover:bg-pink-600 active:scale-95 shadow-lg shadow-pink-500/20"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open Full Profile
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
