'use client';

import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  totalResults?: number;
  className?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = 'Search tools by name, format, or task (e.g., pdf, resize, compress)...',
  totalResults,
  className = '',
}: SearchBarProps) {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative flex items-center">
        <div className="absolute left-3.5 pointer-events-none text-slate-400 dark:text-slate-500">
          <Search className="w-4 h-4" />
        </div>

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 focus:outline-hidden focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm sm:text-base transition-all duration-150"
          aria-label="Search tools"
        />

        {value && (
          <button
            type="button"
            onClick={() => onChange('')}
            className="absolute right-3 p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            aria-label="Clear search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {value && totalResults !== undefined && (
        <div className="absolute left-1 -bottom-5 text-xs text-slate-500 dark:text-slate-400">
          Found <span className="font-semibold text-slate-700 dark:text-slate-200">{totalResults}</span> {totalResults === 1 ? 'tool' : 'tools'}
        </div>
      )}
    </div>
  );
}
