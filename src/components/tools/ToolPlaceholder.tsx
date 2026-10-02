'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu,
  Layers,
  ArrowRight
} from 'lucide-react';
import { ToolItem } from '@/types';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { POPULAR_TOOLS } from '@/data/tools';
import { ToolCard } from '@/components/home/ToolCard';
import { FileUploader } from '@/components/common/FileUploader';
import { ToolResult } from '@/components/common/ToolResult';

interface ToolPlaceholderProps {
  tool: ToolItem;
}

export function ToolPlaceholder({ tool }: ToolPlaceholderProps) {
  const [showDemoResult, setShowDemoResult] = useState(false);
  const relatedTools = POPULAR_TOOLS.filter((t) => t.id !== tool.id).slice(0, 4);

  // Accepted formats determination based on category
  const formatsMap: Record<string, string[]> = {
    pdf: ['PDF'],
    image: ['JPG', 'PNG', 'WEBP', 'SVG'],
    document: ['DOCX', 'XLSX', 'PPTX', 'PDF'],
    qr: ['URL', 'TEXT', 'VCARD', 'WIFI'],
    developer: ['JSON', 'TXT', 'B64'],
    utilities: ['TXT', 'NUM'],
  };
  const acceptedFormats = formatsMap[tool.categoryId] || ['PDF', 'JPG', 'PNG'];

  return (
    <div className="py-8 sm:py-12 max-w-4xl mx-auto space-y-8">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center justify-between text-xs">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
          <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Tools
          </Link>
          <span>/</span>
          <span className="text-slate-700 dark:text-slate-300 font-medium truncate max-w-xs">{tool.name}</span>
        </nav>

        <Link
          href="/tools"
          className="inline-flex items-center gap-1 font-semibold text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to all tools
        </Link>
      </div>

      {/* Tool Header */}
      <div className="space-y-3 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-slate-200/80 dark:border-slate-700/80 shrink-0">
            <DynamicIcon name={tool.iconName} className="w-4 h-4" />
          </div>

          <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/70">
            {tool.categoryName}
          </span>

          <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Client-Side Wasm
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {tool.name}
        </h1>

        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
          {tool.description}
        </p>
      </div>

      {/* Workspace Area: Drop Zone & Engine */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs">
          <span className="font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            Workspace
          </span>
          <button
            onClick={() => setShowDemoResult(!showDemoResult)}
            className="text-blue-600 dark:text-blue-400 hover:underline font-mono"
          >
            {showDemoResult ? '[ Switch to Drop Zone ]' : '[ Preview Result Screen ]'}
          </button>
        </div>

        {showDemoResult ? (
          <ToolResult
            originalSizeText="4.8 MB"
            compressedSizeText="1.3 MB"
            percentReduction="72.9%"
            fileName={`${tool.slug}-result`}
            onReset={() => setShowDemoResult(false)}
          />
        ) : (
          <FileUploader
            acceptedFormats={acceptedFormats}
            maxSizeMB={50}
            onFileSelect={() => {
              setTimeout(() => setShowDemoResult(true), 1300);
            }}
          />
        )}
      </div>

      {/* Technical Status Alert */}
      <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-slate-600 dark:text-slate-300">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
            <Clock className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="font-semibold text-slate-900 dark:text-white">This tool is coming soon. </span>
            <span className="text-slate-500 dark:text-slate-400">
              The high-performance WebAssembly worker is currently undergoing test compilation.
            </span>
          </div>
        </div>

        <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500 shrink-0">
          Target: Q4 2026
        </span>
      </div>

      {/* Planned Capabilities */}
      {tool.features && tool.features.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-xs font-mono font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Engine Specifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {tool.features.map((feat) => (
              <div
                key={feat}
                className="flex items-center gap-2 p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Privacy Guarantee Footer */}
      <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>Local execution in client memory. Files are never transmitted over network.</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400 dark:text-slate-500">
          <Cpu className="w-3.5 h-3.5 text-blue-500" />
          <span>WebAssembly · Multi-threaded</span>
        </div>
      </div>

      {/* Related Utilities */}
      {relatedTools.length > 0 && (
        <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">Other Available Utilities</h2>
            <Link
              href="/tools"
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              View all {POPULAR_TOOLS.length}+ tools &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {relatedTools.map((relTool) => (
              <ToolCard key={relTool.id} tool={relTool} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
