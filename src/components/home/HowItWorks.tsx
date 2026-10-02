import React from 'react';
import { HowItWorksStep } from '@/types';
import { StepCard } from './StepCard';

interface HowItWorksProps {
  steps: HowItWorksStep[];
}

export function HowItWorks({ steps }: HowItWorksProps) {
  return (
    <section className="py-6 sm:py-8 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-xl mb-6">
        <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
          Execution Flow
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          How It Works
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          A frictionless 3-step pipeline designed for immediate results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
        {steps.map((step, index) => (
          <StepCard
            key={step.step}
            step={step}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
