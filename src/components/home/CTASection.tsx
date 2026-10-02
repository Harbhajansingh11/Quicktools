import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export function CTASection() {
  return (
    <section className="my-8 sm:my-12">
      <div className="rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 text-center text-slate-900 dark:text-white">
        <div className="max-w-lg mx-auto space-y-4">
          <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 block font-semibold">
            Instant In-Browser Utilities
          </span>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Ready to get things done faster?
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-md mx-auto">
            Explore QuickTools and find the tool you need in seconds.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/tools"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg transition-colors shadow-2xs shadow-blue-500/20"
            >
              Explore All Tools
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors"
            >
              View Pricing
            </Link>
          </div>

          <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              100% Private
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-blue-400" />
              Zero Uploads
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
