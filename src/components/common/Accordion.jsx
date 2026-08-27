import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';

export default function Accordion({
  items = [],
  allowMultiple = false,
  className = '',
}) {
  const [openIndexes, setOpenIndexes] = useState([0]); // First open by default

  const toggleItem = (index) => {
    if (allowMultiple) {
      if (openIndexes.includes(index)) {
        setOpenIndexes(openIndexes.filter((i) => i !== index));
      } else {
        setOpenIndexes([...openIndexes, index]);
      }
    } else {
      setOpenIndexes(openIndexes.includes(index) ? [] : [index]);
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div
            key={item.id || index}
            className={`
              rounded-2xl border transition-all duration-300 overflow-hidden
              ${isOpen ? 'border-brand-300/80 bg-white shadow-md' : 'border-slate-200 bg-white/80 hover:border-slate-300'}
            `}
          >
            <button
              type="button"
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4.5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none select-none"
            >
              <div className="flex items-center gap-3">
                {item.icon && (
                  <div className={`p-2 rounded-xl transition-colors ${isOpen ? 'bg-brand-100 text-brand-900' : 'bg-slate-100 text-slate-600'}`}>
                    {item.icon}
                  </div>
                )}
                <span className={`font-display font-bold text-base md:text-lg transition-colors ${isOpen ? 'text-brand-900' : 'text-slate-800'}`}>
                  {item.title}
                </span>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className={`p-1.5 rounded-full shrink-0 ${isOpen ? 'bg-brand-50 text-brand-700' : 'text-slate-400'}`}
              >
                <HiChevronDown className="w-5 h-5" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-100">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
