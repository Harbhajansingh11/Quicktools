import React from 'react';
import { ValueProposition } from '@/types';
import { DynamicIcon } from '@/components/common/DynamicIcon';

interface FeatureCardProps {
  feature: ValueProposition;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="flex flex-col p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs">
      <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-slate-200/60 dark:border-slate-700/60 mb-3.5">
        <DynamicIcon name={feature.iconName} className="w-4 h-4" />
      </div>

      <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-tight mb-1.5">
        {feature.title}
      </h3>

      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}
