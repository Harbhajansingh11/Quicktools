import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, LayoutGrid } from 'lucide-react';
import { CATEGORIES } from '@/data/categories';
import { TOOLS } from '@/data/tools';
import { CategoryCard } from '@/components/home/CategoryCard';

export const metadata: Metadata = {
  title: 'Categories — QuickTools',
  description: 'Explore online utilities categorized by domain: PDF, Images, Documents, QR, and Developer utilities.',
};

export default function CategoriesPage() {
  return (
    <div className="py-10 sm:py-16 space-y-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-2xl space-y-2">
        <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
          Directory
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Tool Categories
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Browse our suite of {TOOLS.length} browser-native utilities organized across {CATEGORIES.length} primary domains.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {CATEGORIES.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      {/* Direct link to all tools */}
      <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-sm">
        <span className="text-slate-500 dark:text-slate-400 text-xs">
          Looking for a specific utility?
        </span>
        <Link
          href="/tools"
          className="inline-flex items-center gap-1.5 font-semibold text-blue-600 dark:text-blue-400 hover:underline text-xs sm:text-sm"
        >
          View complete tool index
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
