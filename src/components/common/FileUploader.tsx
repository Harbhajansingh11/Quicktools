'use client';

import React, { useState, useRef } from 'react';
import { 
  UploadCloud, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ArrowUp
} from 'lucide-react';
import { Button } from './Button';

export type UploaderState = 
  | 'default'
  | 'dragging'
  | 'uploading'
  | 'processing'
  | 'success'
  | 'error'
  | 'disabled';

interface FileUploaderProps {
  acceptedFormats?: string[];
  maxSizeMB?: number;
  initialState?: UploaderState;
  onFileSelect?: (file: File) => void;
  className?: string;
}

export function FileUploader({
  acceptedFormats = ['JPG', 'PNG', 'WEBP', 'PDF'],
  maxSizeMB = 50,
  initialState = 'default',
  onFileSelect,
  className = '',
}: FileUploaderProps) {
  const [state, setState] = useState<UploaderState>(initialState);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (state === 'disabled' || state === 'processing' || state === 'uploading') return;
    setState('dragging');
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    if (state === 'dragging') {
      setState('default');
    }
  };

  const processFile = (file: File) => {
    // Check format
    const extension = file.name.split('.').pop()?.toUpperCase() || '';
    if (acceptedFormats.length > 0 && !acceptedFormats.includes(extension)) {
      setState('error');
      setErrorMessage(
        `Unsupported format ".${extension.toLowerCase()}". Please upload ${acceptedFormats.join(', ')}.`
      );
      return;
    }

    // Check size
    if (file.size > maxSizeMB * 1024 * 1024) {
      setState('error');
      setErrorMessage(
        `File is too large (${(file.size / (1024 * 1024)).toFixed(1)} MB). Maximum allowed size is ${maxSizeMB} MB.`
      );
      return;
    }

    setSelectedFile(file);
    setState('uploading');
    setProgress(25);

    // Simulate clean state transitions for UI demonstration
    const timer1 = setTimeout(() => {
      setProgress(75);
      setState('processing');
    }, 600);

    const timer2 = setTimeout(() => {
      setProgress(100);
      setState('success');
      if (onFileSelect) onFileSelect(file);
    }, 1200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (state === 'disabled' || state === 'processing' || state === 'uploading') return;
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFile(null);
    setState('default');
    setErrorMessage('');
    setProgress(0);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const formatsText = acceptedFormats.join(' · ');

  return (
    <div className={`w-full max-w-2xl mx-auto ${className}`}>
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleInputChange}
        disabled={state === 'disabled'}
      />

      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => {
          if (state === 'default' || state === 'error') {
            fileInputRef.current?.click();
          }
        }}
        className={`relative flex flex-col items-center justify-center p-8 sm:p-12 text-center rounded-xl border-2 border-dashed transition-all duration-200 select-none ${
          state === 'default'
            ? 'border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-slate-400 dark:hover:border-slate-700 hover:bg-slate-50/50 dark:hover:bg-slate-900/80 cursor-pointer'
            : state === 'dragging'
            ? 'border-blue-500 bg-blue-50/40 dark:bg-blue-950/30 ring-2 ring-blue-500/20 cursor-copy'
            : state === 'uploading' || state === 'processing'
            ? 'border-blue-400 dark:border-blue-600 bg-slate-50 dark:bg-slate-900 cursor-wait'
            : state === 'success'
            ? 'border-emerald-500 dark:border-emerald-600 bg-emerald-50/30 dark:bg-emerald-950/20'
            : state === 'error'
            ? 'border-rose-400 dark:border-rose-600 bg-rose-50/30 dark:bg-rose-950/20 cursor-pointer'
            : 'border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/40 cursor-not-allowed opacity-60'
        }`}
      >
        {/* State: DEFAULT or DRAGGING */}
        {(state === 'default' || state === 'dragging') && (
          <div className="space-y-3.5">
            <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center mx-auto border border-slate-200/60 dark:border-slate-700/60">
              <ArrowUp className={`w-5 h-5 ${state === 'dragging' ? '-translate-y-0.5' : ''}`} />
            </div>

            <div className="space-y-1">
              <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                Drag & drop your file here
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                or click to browse from your computer
              </p>
            </div>

            <div>
              <Button
                variant="primary"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
              >
                Choose File
              </Button>
            </div>

            <p className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider pt-1">
              {formatsText} · Max {maxSizeMB}MB · In-Browser
            </p>
          </div>
        )}

        {/* State: UPLOADING or PROCESSING */}
        {(state === 'uploading' || state === 'processing') && (
          <div className="space-y-4 w-full max-w-sm">
            <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto border border-slate-200 dark:border-slate-700">
              <Loader2 className="w-5 h-5 animate-spin" />
            </div>

            <div className="space-y-1">
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                {state === 'uploading' ? 'Reading file in memory...' : 'Executing WebAssembly engine...'}
              </p>
              <p className="text-xs text-slate-400 font-mono truncate max-w-xs mx-auto">
                {selectedFile?.name}
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-blue-600 dark:bg-blue-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* State: SUCCESS */}
        {state === 'success' && (
          <div className="space-y-3.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-200 dark:border-emerald-800">
              <CheckCircle2 className="w-5 h-5" />
            </div>

            <div className="space-y-0.5">
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                File loaded into memory!
              </p>
              <p className="text-xs text-slate-400 font-mono">
                {selectedFile?.name} ({(selectedFile?.size ? selectedFile.size / 1024 : 0).toFixed(1)} KB)
              </p>
            </div>

            <div className="pt-1">
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
              >
                Choose Another File
              </Button>
            </div>
          </div>
        )}

        {/* State: ERROR */}
        {state === 'error' && (
          <div className="space-y-3 max-w-md">
            <div className="w-10 h-10 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center mx-auto border border-rose-200 dark:border-rose-800">
              <AlertCircle className="w-5 h-5" />
            </div>

            <p className="text-sm font-bold text-slate-900 dark:text-white">
              We couldn&apos;t process this file
            </p>

            <p className="text-xs text-rose-600 dark:text-rose-400 leading-relaxed">
              {errorMessage || 'The file appears to be corrupted or invalid.'}
            </p>

            <div className="pt-1">
              <Button
                variant="secondary"
                size="sm"
                onClick={handleReset}
              >
                Try Another File
              </Button>
            </div>
          </div>
        )}

        {/* State: DISABLED */}
        {state === 'disabled' && (
          <div className="space-y-1">
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-600">
              Uploader is disabled
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
