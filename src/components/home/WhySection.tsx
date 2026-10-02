import React from 'react';
import { ValueProposition } from '@/types';
import { FeatureCard } from './FeatureCard';

interface WhySectionProps {
  features: ValueProposition[];
}

export function WhySection({ features }: WhySectionProps) {
  return (
    <section className="py-6 sm:py-8 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-xl mb-6">
        <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
          Architecture
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Engineered for Privacy & Performance
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Unlike traditional utility portals that harvest uploads and throttle bandwidth, QuickTools operates natively on your hardware.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
}
