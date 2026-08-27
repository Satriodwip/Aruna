import React from 'react';

export function Spinner({ size = 'md', className = '', label = 'Memuat data...' }) {
  const sizeMap = {
    sm: 'w-5 h-5 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-3 py-6 ${className}`}>
      <div
        className={`${sizeMap[size]} rounded-full border-brand-200 border-t-brand-700 animate-spin`}
        role="status"
        aria-label="loading"
      />
      {label && <p className="text-xs font-semibold text-slate-500 animate-pulse">{label}</p>}
    </div>
  );
}

export function Skeleton({ className = '', rounded = 'rounded-xl' }) {
  return (
    <div className={`bg-slate-200/80 animate-pulse relative overflow-hidden ${rounded} ${className}`}>
      <div className="absolute inset-0 shimmer-bg" />
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-5 w-16 rounded-full" />
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
      <div className="pt-2 flex items-center gap-3">
        <Skeleton className="h-8 w-24 rounded-lg" />
        <Skeleton className="h-8 w-24 rounded-lg" />
      </div>
    </div>
  );
}
