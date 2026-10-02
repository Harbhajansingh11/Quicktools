'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { SearchX, SlidersHorizontal } from 'lucide-react';
import { TOOLS } from '@/data/tools';
import { CATEGORIES } from '@/data/categories';
import { SearchBar } from '@/components/home/SearchBar';
import { ToolCard } from '@/components/home/ToolCard';
import { Button } from '@/components/common/Button';

function ToolsCatalogInner() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = useMemo(() => {
    return TOOLS.filter((tool) => {
      // Category filter
      if (selectedCategory !== 'all' && tool.categoryId !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = tool.name.toLowerCase().includes(q);
        const matchDesc = tool.shortDescription.toLowerCase().includes(q);
        const matchCategory = tool.categoryName.toLowerCase().includes(q);
        const matchTags = tool.tags.some((tag) => tag.toLowerCase().includes(q));
        return matchName || matchDesc || matchCategory || matchTags;
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-8 sm:py-12 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-2xl space-y-2">
        <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
          Tool Index
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          All Online Tools
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          Explore {TOOLS.length} privacy-first browser utilities. No software installation, no cloud queueing, and zero file uploads.
        </p>
      </div>

      {/* Search Input Bar */}
      <div className="max-w-xl">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search all utilities by keyword, format, or task..."
          totalResults={searchQuery ? filteredTools.length : undefined}
          className="w-full"
        />
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 pt-1 border-b border-slate-200 dark:border-slate-800 pb-4">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
            selectedCategory === 'all'
              ? 'bg-blue-600 text-white dark:bg-blue-600 dark:text-white shadow-2xs font-semibold'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
          }`}
        >
          All Utilities ({TOOLS.length})
        </button>

        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.slug;
          const count = TOOLS.filter((t) => t.categoryId === cat.id).length;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                isSelected
                  ? 'bg-blue-600 text-white dark:bg-blue-600 dark:text-white shadow-2xs font-semibold'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {cat.name} ({count})
            </button>
          );
        })}
      </div>

      {/* Filter Results Info */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
        <span>
          Showing {filteredTools.length} {filteredTools.length === 1 ? 'utility' : 'utilities'}
          {selectedCategory !== 'all' && ` in ${CATEGORIES.find((c) => c.slug === selectedCategory)?.name}`}
        </span>
        {(searchQuery || selectedCategory !== 'all') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="text-blue-600 dark:text-blue-400 hover:underline font-sans"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Tool Grid */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-white dark:bg-slate-900 rounded-xl border border-dashed border-slate-300 dark:border-slate-800">
          <div className="w-10 h-10 mx-auto rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 mb-3">
            <SearchX className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">No utilities match your search</h3>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            Try adjusting your search query or reset the category filter.
          </p>
          <div className="mt-5">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
            >
              Reset Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export function ToolsCatalog() {
  return (
    <Suspense fallback={<div className="py-12 text-center text-xs text-slate-400 font-mono">Loading tool directory...</div>}>
      <ToolsCatalogInner />
    </Suspense>
  );
}
