'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import CommandInput from './CommandInput';
import CommandResults, { CommandResultItem } from './CommandResults';
import CommandFooter from './CommandFooter';
import RecentSearches from './RecentSearches';
import QuickActions from './QuickActions';

export default function CommandPalette() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<CommandResultItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(0);

  // Local storage recent queries
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const modalRef = useRef<HTMLDivElement>(null);

  // Load recent searches from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('gtavi-recent-searches');
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Global hotkey listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Active keyboard navigation keys listener inside overlay modal
  useEffect(() => {
    if (!isOpen) return;

    const handleNavKeys = (e: KeyboardEvent) => {
      const totalItems = searchQuery.trim() ? searchResults.length : 0;
      if (totalItems === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIdx((prev) => (prev + 1) % totalItems);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIdx((prev) => (prev - 1 + totalItems) % totalItems);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const activeItem = searchResults[selectedIdx];
        if (activeItem) {
          handleItemSelection(activeItem);
        }
      }
    };

    window.addEventListener('keydown', handleNavKeys);
    return () => window.removeEventListener('keydown', handleNavKeys);
  }, [isOpen, searchResults, selectedIdx, searchQuery]);

  // Debounced search queries lookup
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
        if (!res.ok) throw new Error('Search request failed.');
        const json = await res.json();
        if (json.success && json.data) {
          const mapped: CommandResultItem[] = json.data.matches.map((m: any) => ({
            id: m.id || m.slug,
            title: m.name,
            type: m.type,
            description: m.description || '',
            thumbnailUrl: m.heroMedia?.cdnUrl || null,
            slug: m.slug,
          }));
          setSearchResults(mapped);
          setSelectedIdx(0);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }, 250); // 250ms debouncer

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Helper to save recent query term in history list
  const addRecentSearch = (term: string) => {
    let next = [term, ...recentSearches.filter((t) => t !== term)].slice(0, 5);
    setRecentSearches(next);
    localStorage.setItem('gtavi-recent-searches', JSON.stringify(next));
  };

  const removeRecentSearch = (term: string) => {
    const next = recentSearches.filter((t) => t !== term);
    setRecentSearches(next);
    localStorage.setItem('gtavi-recent-searches', JSON.stringify(next));
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('gtavi-recent-searches');
  };

  // Navigates to target entity page url
  const handleItemSelection = (item: CommandResultItem) => {
    addRecentSearch(item.title);
    setIsOpen(false);
    setSearchQuery('');

    // Pluralize category routing matches
    const typeRoute = item.type.toLowerCase() === 'character' ? 'characters' : `${item.type}s`;
    router.push(`/${typeRoute}/${item.slug}`);
  };

  const handleActionClick = (route: string) => {
    setIsOpen(false);
    router.push(route);
  };

  // Click outside modal overlay closer
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* 1. Clickable Trigger Navigation Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#161920]/60 hover:bg-[#1e222c] px-3.5 py-2 text-sm text-gray-400 transition-all active:scale-95 shadow-md"
        aria-label="Open database search command palette"
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline">Search database...</span>
        <kbd className="hidden sm:inline bg-white/5 border border-white/5 px-1.5 py-0.5 rounded text-xxs font-mono text-gray-500">
          ⌘K
        </kbd>
      </button>

      {/* 2. Command Palette Modal Overlay */}
      {isOpen && (
        <div
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-md animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div
            ref={modalRef}
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#0d0e12] shadow-2xl flex flex-col"
          >
            {/* Input bar */}
            <CommandInput
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery('')}
            />

            {/* Results / Help items list */}
            {searchQuery.trim() ? (
              <CommandResults
                results={searchResults}
                selectedIdx={selectedIdx}
                onSelect={handleItemSelection}
                onHoverIndex={setSelectedIdx}
                isLoading={isLoading}
              />
            ) : (
              <div className="flex-1 overflow-y-auto max-h-96">
                <QuickActions onSelectAction={handleActionClick} />
                <RecentSearches
                  searches={recentSearches}
                  onSelect={(term) => setSearchQuery(term)}
                  onRemove={removeRecentSearch}
                  onClear={clearRecentSearches}
                />
              </div>
            )}

            {/* Footer hints */}
            <CommandFooter />
          </div>
        </div>
      )}
    </>
  );
}
