'use client';

import React from 'react';
import Link from 'next/link';
import { SearchX, ArrowRight } from 'lucide-react';
import { ToolItem } from '@/types';
import { ToolCard } from './ToolCard';
import { Button } from '@/components/common/Button';

interface ToolGridProps {
  tools: ToolItem[];
  searchQuery?: string;
  onClearSearch?: () => void;
  title?: string;
  subtitle?: string;
  showExploreAll?: boolean;
}

export function ToolGrid({
  tools,
  searchQuery = '',
  onClearSearch,
  title = 'Popular Tools',
  subtitle = 'The most widely used online utilities. Free, private, and instant.',
  showExploreAll = true,
}: ToolGridProps) {
  return (
    <section id="popular-tools" className="scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
            {searchQuery ? 'Filter Active' : 'Utilities'}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            {searchQuery ? `Matching "${searchQuery}"` : title}
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl">
            {searchQuery
              ? `Found ${tools.length} ${tools.length === 1 ? 'utility' : 'utilities'} ready to run in-browser`
              : subtitle}
          </p>
        </div>

        {showExploreAll && !searchQuery && (
          <Link
            href="/tools"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group self-start sm:self-auto"
          >
            Explore all {tools.length}+ tools
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>

      {/* Grid or Empty State */}
      {tools.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 px-4 bg-white dark:bg-slate-900 rounded-xl border border-dashed border-slate-300 dark:border-slate-800">
          <div className="w-10 h-10 mx-auto rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 mb-3">
            <SearchX className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">No utilities match your search</h3>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            Try searching by format or task: <span className="font-mono text-slate-700 dark:text-slate-300">pdf</span>,{' '}
            <span className="font-mono text-slate-700 dark:text-slate-300">image</span>,{' '}
            <span className="font-mono text-slate-700 dark:text-slate-300">qr</span>, or{' '}
            <span className="font-mono text-slate-700 dark:text-slate-300">compress</span>
          </p>
          {onClearSearch && (
            <div className="mt-5">
              <Button
                variant="secondary"
                size="sm"
                onClick={onClearSearch}
              >
                Reset Search Filter
              </Button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
