import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ToolCategory } from '@/types';
import { DynamicIcon } from '@/components/common/DynamicIcon';

interface CategoryCardProps {
  category: ToolCategory;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/tools?category=${category.slug}`}
      className="group relative flex flex-col justify-between p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xs transition-all duration-150 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center border border-slate-200/60 dark:border-slate-700/60 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            <DynamicIcon name={category.iconName} className="w-4 h-4" />
          </div>

          <span className="text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400">
            {category.toolCount} utilities
          </span>
        </div>

        <h3 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight">
          {category.name}
        </h3>

        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          {category.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        <span>Explore category</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
