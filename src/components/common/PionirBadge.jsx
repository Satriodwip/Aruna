import React from 'react';
import { motion } from 'framer-motion';

export default function PionirBadge({
  children,
  variant = 'white', // 'white', 'lime', 'amber', 'emerald'
  className = '',
}) {
  const variantMap = {
    white: {
      outer: 'bg-white border-gold-300',
      inner: 'bordir-gold-400 text-neutral-900',
    },
    lime: {
      outer: 'bg-lime-500 border-lime-300',
      inner: 'bordir-neutral-100 text-white',
    },
    amber: {
      outer: 'bg-amber-300 border-amber-200',
      inner: 'bordir-brown-300 text-neutral-950',
    },
    emerald: {
      outer: 'bg-emerald-500 border-emerald-300',
      inner: 'bordir-neutral-100 text-white',
    },
  };

  const selected = variantMap[variant] || variantMap.white;

  return (
    <motion.div
      whileHover={{ rotate: 2, scale: 1.04 }}
      className={`relative z-20 rounded-2xl border p-1.5 rotate-[-2deg] drop-shadow-md transition-all duration-300 select-none inline-block ${selected.outer} ${className}`}
    >
      <div className={`relative z-11 h-full w-full px-5 sm:px-6 py-2 sm:py-2.5 flex items-center justify-center ${selected.inner}`}>
        <span className="font-display font-black text-base sm:text-lg tracking-wide uppercase">
          {children}
        </span>
      </div>
    </motion.div>
  );
}
