'use client';

import React from 'react';
import { ArrowDown, Download, RefreshCw, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

interface ToolResultProps {
  originalSizeText?: string;
  compressedSizeText?: string;
  percentReduction?: string;
  fileName?: string;
  onDownload?: () => void;
  onReset?: () => void;
  className?: string;
}

export function ToolResult({
  originalSizeText = '4.8 MB',
  compressedSizeText = '1.3 MB',
  percentReduction = '72.9%',
  fileName = 'document-compressed.pdf',
  onDownload,
  onReset,
  className = '',
}: ToolResultProps) {
  return (
    <div
      className={`w-full max-w-lg mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 text-center shadow-xs ${className}`}
    >
      <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
        <CheckCircle2 className="w-5 h-5" />
      </div>

      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
        Ready for Download
      </h3>

      {/* Comparison stats */}
      <div className="flex items-center justify-center gap-6 py-4 px-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200/60 dark:border-slate-700/60 mb-6">
        <div className="text-left">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-600 dark:text-slate-400 block">
            Original
          </span>
          <span className="text-base font-bold text-slate-700 dark:text-slate-300">
            {originalSizeText}
          </span>
        </div>

        <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-2xs border border-slate-200/60 dark:border-slate-600">
          <ArrowDown className="w-4 h-4" />
        </div>

        <div className="text-left">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-emerald-600 dark:text-emerald-400 block">
            Compressed
          </span>
          <span className="text-base font-bold text-slate-900 dark:text-white">
            {compressedSizeText}
          </span>
        </div>
      </div>

      <div className="mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold border border-emerald-200/60 dark:border-emerald-800/60">
          {percentReduction} smaller
        </span>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Button
          variant="primary"
          size="md"
          className="w-full sm:w-auto"
          rightIcon={<Download className="w-4 h-4" />}
          onClick={onDownload || (() => alert(`Downloading ${fileName}...`))}
        >
          Download
        </Button>

        <Button
          variant="secondary"
          size="md"
          className="w-full sm:w-auto"
          leftIcon={<RefreshCw className="w-4 h-4" />}
          onClick={onReset}
        >
          Process Another
        </Button>
      </div>
    </div>
  );
}
