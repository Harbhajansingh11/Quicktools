import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'success';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({
  children,
  variant = 'secondary',
  size = 'sm',
  className = '',
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center font-medium rounded-full transition-colors';
  
  const sizeClasses = size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm';

  const variantClasses = {
    primary: 'bg-blue-50 text-blue-700 border border-blue-200/60',
    secondary: 'bg-slate-100 text-slate-700 border border-slate-200/60',
    outline: 'bg-transparent text-slate-600 border border-slate-300',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200/60',
  }[variant];

  return (
    <span className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}>
      {children}
    </span>
  );
}
