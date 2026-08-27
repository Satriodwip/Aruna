import React from 'react';
import { motion } from 'framer-motion';

export default function Card({
  children,
  className = '',
  hoverEffect = true,
  glass = false,
  onClick,
  ...props
}) {
  const isInteractive = Boolean(onClick || hoverEffect);

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : {}}
      onClick={onClick}
      className={`
        rounded-2xl p-6 transition-all duration-300 relative overflow-hidden
        ${glass ? 'glass-card' : 'bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-brand-200'}
        ${isInteractive ? 'cursor-pointer' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}
