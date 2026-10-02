import React from 'react';
import { HowItWorksStep } from '@/types';
import { DynamicIcon } from '@/components/common/DynamicIcon';

interface StepCardProps {
  step: HowItWorksStep;
  isLast?: boolean;
}

export function StepCard({ step }: StepCardProps) {
  return (
    <div className="relative flex flex-col p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs">
      <div className="flex items-center justify-between mb-3.5">
        <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-slate-200/60 dark:border-slate-700/60">
          <DynamicIcon name={step.iconName} className="w-4 h-4" />
        </div>

        <span className="font-mono text-xs font-semibold text-slate-400 dark:text-slate-500">
          0{step.step}
        </span>
      </div>

      <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-tight mb-1">
        {step.title}
      </h3>

      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
        {step.description}
      </p>
    </div>
  );
}
