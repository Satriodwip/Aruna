import React from 'react';
import { motion } from 'framer-motion';
import { CgSpinner } from 'react-icons/cg';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-bold font-sans tracking-wide rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none select-none relative overflow-hidden';

  const sizeStyles = {
    sm: 'px-3.5 py-2 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5',
  };

  const variantStyles = {
    primary: 'bg-brand-900 hover:bg-brand-800 text-white shadow-md shadow-brand-900/25 hover:shadow-lg hover:shadow-brand-900/40 border border-brand-700/50',
    gold: 'bg-linear-to-r from-gold-500 via-amber-500 to-gold-600 hover:from-gold-400 hover:to-amber-500 text-slate-950 shadow-md shadow-gold-500/25 hover:shadow-xl hover:shadow-gold-500/40 border border-gold-300/60 font-black',
    secondary: 'bg-brand-50 hover:bg-brand-100 text-brand-900 border border-brand-200/80',
    outline: 'bg-transparent hover:bg-slate-100 text-slate-700 border border-slate-300 hover:border-slate-400',
    ghost: 'bg-transparent hover:bg-slate-100 text-slate-700',
    danger: 'bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-600/25',
    white: 'bg-white hover:bg-slate-50 text-slate-900 shadow-md hover:shadow-lg border border-slate-200',
  };

  return (
    <motion.button
      type={type}
      whileHover={disabled || isLoading ? {} : { scale: 1.02, y: -1 }}
      whileTap={disabled || isLoading ? {} : { scale: 0.97 }}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`}
      {...props}
    >
      {isLoading && (
        <CgSpinner className="animate-spin w-4 h-4 shrink-0" />
      )}
      {!isLoading && Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 shrink-0" />
      )}
      <span>{children}</span>
      {!isLoading && Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 shrink-0" />
      )}
    </motion.button>
  );
}
