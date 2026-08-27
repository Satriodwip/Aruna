import React from 'react';

export default function Badge({
  children,
  variant = 'brand',
  size = 'md',
  dot = false,
  className = '',
}) {
  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-[10px]',
    md: 'px-3 py-1 text-xs',
    lg: 'px-3.5 py-1.5 text-sm',
  };

  const variantStyles = {
    brand: 'bg-brand-100 text-brand-900 border border-brand-200/80',
    gold: 'bg-gold-100 text-gold-900 border border-gold-300/80',
    emerald: 'bg-emerald-100 text-emerald-900 border border-emerald-200/80',
    rose: 'bg-rose-100 text-rose-900 border border-rose-200/80',
    purple: 'bg-purple-100 text-purple-900 border border-purple-200/80',
    slate: 'bg-slate-100 text-slate-800 border border-slate-200',
    glass: 'bg-white/20 text-white border border-white/30 backdrop-blur-xs',
  };

  const dotColors = {
    brand: 'bg-brand-600',
    gold: 'bg-amber-500',
    emerald: 'bg-emerald-500',
    rose: 'bg-rose-500',
    purple: 'bg-purple-500',
    slate: 'bg-slate-500',
    glass: 'bg-gold-400',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-bold font-sans rounded-full tracking-wide transition-all ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColors[variant]}`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColors[variant]}`}></span>
        </span>
      )}
      <span>{children}</span>
    </span>
  );
}
