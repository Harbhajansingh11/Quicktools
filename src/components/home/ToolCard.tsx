import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ToolItem } from '@/types';
import { DynamicIcon } from '@/components/common/DynamicIcon';

interface ToolCardProps {
  tool: ToolItem;
}

export function ToolCard({ tool }: ToolCardProps) {
  // Format extensions
  const formatBadge = {
    pdf: 'PDF',
    image: 'IMG',
    document: 'DOC',
    qr: 'QR',
    developer: 'DEV',
    utilities: 'UTIL',
  }[tool.categoryId] || 'TOOL';

  return (
    <Link
      href={tool.route}
      className="group relative flex flex-col justify-between p-4 sm:p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm transition-all duration-150 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 select-none"
    >
      <div>
        {/* Top Header: Icon & Category Indicator */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center border border-slate-200/60 dark:border-slate-700/60 group-hover:border-slate-300 dark:group-hover:border-slate-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            <DynamicIcon name={tool.iconName} className="w-4 h-4" />
          </div>

          <span className="text-[10px] font-mono font-medium tracking-wider uppercase text-slate-500 dark:text-slate-400 px-1.5 py-0.5 rounded bg-slate-50 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/70">
            {formatBadge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center justify-between">
          <span>{tool.name}</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
        </h3>

        {/* Short description */}
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
          {tool.shortDescription}
        </p>
      </div>

      {/* Footer tags */}
      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 font-mono">
        <span>In-Browser</span>
        <span>{tool.estimatedTime || '< 2s'}</span>
      </div>
    </Link>
  );
}
