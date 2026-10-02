import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ToolCategory } from '@/types';
import { CategoryCard } from './CategoryCard';

interface CategoryGridProps {
  categories: ToolCategory[];
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <section id="categories" className="scroll-mt-24 pt-4">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
            Browse by Domain
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Tool Categories
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl">
            Specialized browser utility suites organized for fast access.
          </p>
        </div>

        <Link
          href="/tools"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group self-start sm:self-auto"
        >
          View all categories
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
