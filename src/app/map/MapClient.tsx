'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Search, Filter, RefreshCw, X, Menu, Info, Layers, Eye, EyeOff } from 'lucide-react';
import InteractiveMap from '../../components/map/InteractiveMap';
import { mapDbMarkerToViewModel, MapMarkerViewModel } from '../../lib/map-config';

function MapClientContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // State
  const [mapData, setMapData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter States (synced with URL)
  const searchQuery = searchParams.get('q') || '';
  const filterOfficial = searchParams.get('official') === 'true';
  const filterLayers = searchParams.get('layers') 
    ? searchParams.get('layers')!.split(',') 
    : ['collectibles', 'stunts', 'shop', 'general', 'character', 'location'];
  const selectedMarkerId = searchParams.get('selected') || null;

  // Selected Marker Details Drawer
  const [selectedEntityDetails, setSelectedEntityDetails] = useState<any>(null);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Mobile Sidebar Toggle
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Fetch initial map markers
  useEffect(() => {
    async function fetchMap() {
      try {
        setLoading(true);
        const res = await fetch('/api/map');
        if (!res.ok) throw new Error('Failed to load map coordinate data.');
        const json = await res.json();
        if (json.success && json.data) {
          setMapData(json.data);
        } else {
          throw new Error('API returned unsuccessful response.');
        }
      } catch (err: any) {
        setError(err.message || 'Connection error.');
      } finally {
        setLoading(false);
      }
    }
    fetchMap();
  }, []);

  // Fetch detailed entity info when a marker is selected
  useEffect(() => {
    if (!selectedMarkerId || !mapData) {
      setSelectedEntityDetails(null);
      setIsDrawerOpen(false);
      return;
    }

    const marker = mapData.markers.find((m: any) => m.id === selectedMarkerId);
    if (!marker) return;

    const loc = mapData.locations.find((l: any) => l.id === marker.locationId);
    if (!loc) return;

    async function fetchDetails() {
      try {
        setDetailsLoading(true);
        setIsDrawerOpen(true);
        const res = await fetch(`/api/locations/${loc.slug}`);
        if (!res.ok) throw new Error('Details not found.');
        const json = await res.json();
        if (json.success && json.data) {
          setSelectedEntityDetails(json.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setDetailsLoading(false);
      }
    }
    fetchDetails();
  }, [selectedMarkerId, mapData]);

  // Update URL helper
  const updateUrl = (params: Record<string, string | null>) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    for (const [key, val] of Object.entries(params)) {
      if (val === null) {
        current.delete(key);
      } else {
        current.set(key, val);
      }
    }
    router.replace(`${pathname}?${current.toString()}`);
  };

  const handleSearchChange = (val: string) => {
    updateUrl({ q: val || null });
  };

  const toggleLayer = (layer: string) => {
    let next = [...filterLayers];
    if (next.includes(layer)) {
      next = next.filter(l => l !== layer);
    } else {
      next.push(layer);
    }
    updateUrl({ layers: next.join(',') });
  };

  const toggleOfficial = () => {
    updateUrl({ official: !filterOfficial ? 'true' : null });
  };

  const handleMarkerSelect = (id: string | null) => {
    updateUrl({ selected: id });
  };

  const resetFilters = () => {
    updateUrl({
      q: null,
      official: null,
      layers: null,
      selected: null,
    });
  };

  // Convert raw DB markers to coordinates mapped models
  const filteredMarkers = mapData
    ? mapData.markers
        .map((m: any) => {
          const loc = mapData.locations.find((l: any) => l.id === m.locationId);
          return mapDbMarkerToViewModel(m, loc?.name || 'Unknown Location');
        })
        .filter((vm: MapMarkerViewModel) => {
          if (!filterLayers.includes(vm.layer)) return false;
          if (searchQuery.trim().length > 0) {
            return vm.label.toLowerCase().includes(searchQuery.toLowerCase());
          }
          return true;
        })
    : [];

  return (
    <div className="relative flex h-screen w-screen overflow-hidden bg-[#0d0e12] text-white">
      {/* 1. Header Control Bar (Mobile Toggle) */}
      <div className="absolute left-4 top-4 z-20 flex gap-2">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-[#161920]/80 px-4 text-sm font-medium backdrop-blur-md transition-all hover:bg-[#1f232c] active:scale-95"
        >
          <Menu className="h-5 w-5" />
          <span className="hidden sm:inline">Filters</span>
        </button>
      </div>

      {/* 2. Sidebar Filters Panel */}
      <div
        className={`absolute bottom-0 left-0 top-0 z-10 flex w-full flex-col border-r border-white/5 bg-[#0e1015]/95 backdrop-blur-lg transition-transform duration-300 sm:w-80 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header spacer */}
        <div className="flex h-20 items-center justify-between px-6 border-b border-white/5 bg-[#090b0e]/50">
          <span className="text-lg font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
            GTAVISPOT MAP
          </span>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="rounded-lg p-1.5 hover:bg-white/5 sm:hidden"
          >
            <X className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search location marker..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#141720] py-2.5 pl-10 pr-4 text-sm outline-none transition-all placeholder:text-gray-500 focus:border-pink-500/50"
            />
          </div>
        </div>

        {/* Layer Filters */}
        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Layer Categories
            </span>
            <div className="mt-3 space-y-2">
              {['location', 'character', 'collectibles', 'stunts', 'shop'].map((layer) => {
                const isActive = filterLayers.includes(layer);
                return (
                  <button
                    key={layer}
                    onClick={() => toggleLayer(layer)}
                    className="flex w-full items-center justify-between rounded-xl border border-white/5 bg-[#141720]/40 p-3 text-sm transition-all hover:bg-[#181d28]/70"
                  >
                    <span className="capitalize text-gray-300">{layer}</span>
                    {isActive ? (
                      <Eye className="h-4 w-4 text-pink-500" />
                    ) : (
                      <EyeOff className="h-4 w-4 text-gray-600" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Validity
            </span>
            <div className="mt-3">
              <button
                onClick={toggleOfficial}
                className={`flex w-full items-center justify-between rounded-xl border p-3 text-sm transition-all ${
                  filterOfficial 
                    ? 'border-pink-500/30 bg-pink-500/10 text-pink-400' 
                    : 'border-white/5 bg-[#141720]/40 text-gray-300 hover:bg-[#181d28]/70'
                }`}
              >
                <span>Rockstar Official Only</span>
                <Info className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Reset Actions */}
        <div className="p-4 border-t border-white/5 bg-[#090b0e]/30">
          <button
            onClick={resetFilters}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 py-3 text-sm font-medium transition-all hover:bg-white/10 active:scale-95"
          >
            <RefreshCw className="h-4 w-4" />
            Reset Map Filters
          </button>
        </div>
      </div>

      {/* 3. Interactive Map Canvas */}
      <div className="relative h-full w-full flex-1">
        {loading ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#0d0e12]">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-pink-500 border-t-transparent" />
            <span className="text-sm font-medium text-gray-400">Loading GTA VI Leonida coordinates...</span>
          </div>
        ) : error ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[#0d0e12]">
            <span className="text-red-500 font-semibold">{error}</span>
            <button
              onClick={() => window.location.reload()}
              className="rounded-lg bg-pink-500 px-4 py-2 text-sm font-medium hover:bg-pink-600"
            >
              Retry
            </button>
          </div>
        ) : (
          <InteractiveMap
            markers={filteredMarkers}
            selectedId={selectedMarkerId}
            onSelect={handleMarkerSelect}
          />
        )}
      </div>

      {/* 4. Details Drawer Side Panel */}
      <div
        className={`absolute bottom-0 right-0 top-0 z-20 flex w-full flex-col border-l border-white/5 bg-[#0d0e12]/95 shadow-2xl backdrop-blur-xl transition-transform duration-300 sm:w-96 ${
          isDrawerOpen && selectedEntityDetails ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {detailsLoading ? (
          <div className="flex h-full w-full items-center justify-center">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-pink-500 border-t-transparent" />
          </div>
        ) : (
          selectedEntityDetails && (
            <div className="flex h-full flex-col">
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-pink-500">
                    Location Profile
                  </span>
                  <h3 className="text-xl font-bold mt-1 text-white">{selectedEntityDetails.location.name}</h3>
                </div>
                <button
                  onClick={() => handleMarkerSelect(null)}
                  className="rounded-lg p-2 hover:bg-white/5"
                >
                  <X className="h-5 w-5 text-gray-400" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Hero Media */}
                {selectedEntityDetails.location.heroMedia && (
                  <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/5">
                    <img
                      src={selectedEntityDetails.location.heroMedia.cdnUrl}
                      alt={selectedEntityDetails.location.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}

                {/* Description */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Description</h4>
                  <p className="text-sm leading-relaxed text-gray-300">
                    {selectedEntityDetails.location.description || 'No description seeded for this official location.'}
                  </p>
                </div>

                {/* Coordinates Info */}
                <div className="grid grid-cols-2 gap-4 rounded-2xl border border-white/5 bg-[#141720]/40 p-4">
                  <div>
                    <span className="text-xs text-gray-500 block">Latitude</span>
                    <span className="text-sm font-semibold">{selectedEntityDetails.location.latitude}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block">Longitude</span>
                    <span className="text-sm font-semibold">{selectedEntityDetails.location.longitude}</span>
                  </div>
                </div>

                {/* Businesses present */}
                {selectedEntityDetails.businesses?.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Businesses</h4>
                    <div className="space-y-2">
                      {selectedEntityDetails.businesses.map((b: any) => (
                        <div key={b.id} className="rounded-xl border border-white/5 bg-[#141720]/20 p-3 text-sm">
                          <span className="font-semibold block">{b.name}</span>
                          <span className="text-xs text-gray-500 capitalize">{b.businessType || 'Store'}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default function MapClient() {
  return (
    <Suspense fallback={
      <div className="flex h-screen w-screen items-center justify-center bg-[#0d0e12]">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-pink-500 border-t-transparent" />
      </div>
    }>
      <MapClientContent />
    </Suspense>
  );
}
