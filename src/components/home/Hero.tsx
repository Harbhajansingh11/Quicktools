'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Lock,
  Terminal,
  Cpu
} from 'lucide-react';
import { SearchBar } from './SearchBar';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  filteredCount?: number;
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export function Hero({ 
  searchQuery, 
  onSearchChange, 
  filteredCount,
  activeCategory = 'all',
  onCategoryChange 
}: HeroProps) {
  const quickCategories = [
    { id: 'all', label: 'All Tools' },
    { id: 'pdf', label: 'PDF' },
    { id: 'image', label: 'Images' },
    { id: 'qr', label: 'QR & Barcode' },
    { id: 'developer', label: 'Developer' },
    { id: 'utilities', label: 'Utilities' },
  ];

  return (
    <section className="relative pt-10 pb-12 sm:pt-16 sm:pb-16 border-b border-slate-200/80 dark:border-slate-800">
      {/* Subtle technical background grid */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 tech-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_60%,transparent_100%)] pointer-events-none -z-10"
      />

      <div className="max-w-3xl mx-auto text-center space-y-6">
        {/* Hero Heading: Large, Bold/700, tight letter spacing */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
          Everything you need, <br className="hidden sm:inline" />
          <span className="text-blue-600 dark:text-blue-400">all in one place.</span>
        </h1>

        {/* Supporting text */}
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
          QuickTools gives you fast, simple online tools for PDFs, images, documents, QR codes, and everyday tasks. Processed locally with zero cloud uploads.
        </p>

        {/* Prominent Search Bar */}
        <div className="pt-2">
          <SearchBar
            value={searchQuery}
            onChange={onSearchChange}
            totalResults={searchQuery ? filteredCount : undefined}
            className="max-w-xl mx-auto"
          />
        </div>

        {/* Direct Filter Chips */}
        {onCategoryChange && (
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
            {quickCategories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onCategoryChange(cat.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                    isSelected
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                      : 'bg-white text-slate-600 hover:text-slate-900 dark:bg-slate-800/80 dark:text-slate-400 dark:hover:text-white border border-slate-200 dark:border-slate-700/80'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        )}

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/tools"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-2xs shadow-blue-600/20 transition-all duration-150 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            Explore Tools
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href="#popular-tools"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-lg transition-all duration-150"
          >
            Popular Tools
          </a>
        </div>

        {/* Technical Architecture Strip */}
        <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-left max-w-2xl mx-auto border-t border-slate-200/60 dark:border-slate-800/80">
          <div className="p-2.5 rounded-lg bg-slate-50/60 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/50">
            <div className="text-[10px] uppercase font-mono font-medium text-slate-400 dark:text-slate-500">Security</div>
            <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-0.5">Zero File Uploads</div>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-50/60 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/50">
            <div className="text-[10px] uppercase font-mono font-medium text-slate-400 dark:text-slate-500">Latency</div>
            <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-0.5">In-Memory Engine</div>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-50/60 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/50">
            <div className="text-[10px] uppercase font-mono font-medium text-slate-400 dark:text-slate-500">Limits</div>
            <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-0.5">Zero Watermarks</div>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-50/60 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/50">
            <div className="text-[10px] uppercase font-mono font-medium text-slate-400 dark:text-slate-500">Auth</div>
            <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-0.5">No Signup Needed</div>
          </div>
        </div>
      </div>
    </section>
  );
}
