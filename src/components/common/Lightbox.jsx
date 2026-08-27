import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export default function Lightbox({
  isOpen,
  onClose,
  images = [],
  currentIndex = 0,
  onNavigate,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onNavigate && currentIndex > 0) onNavigate(currentIndex - 1);
      if (e.key === 'ArrowRight' && onNavigate && currentIndex < images.length - 1) onNavigate(currentIndex + 1);
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 sm:p-8 select-none">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all z-20"
          aria-label="Tutup Galeri"
        >
          <HiX className="w-6 h-6" />
        </button>

        {/* Prev button */}
        {currentIndex > 0 && (
          <button
            type="button"
            onClick={() => onNavigate(currentIndex - 1)}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all z-20"
            aria-label="Foto Sebelumnya"
          >
            <HiChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next button */}
        {currentIndex < images.length - 1 && (
          <button
            type="button"
            onClick={() => onNavigate(currentIndex + 1)}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all z-20"
            aria-label="Foto Selanjutnya"
          >
            <HiChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Content */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center text-center space-y-4"
        >
          <img
            src={currentImage.url}
            alt={currentImage.title || 'Dokumentasi Orientasi'}
            className="max-h-[70vh] max-w-full rounded-2xl object-contain shadow-2xl border border-white/10"
          />
          <div className="text-white space-y-1">
            <h4 className="text-lg md:text-xl font-bold font-display">{currentImage.title}</h4>
            <p className="text-sm text-slate-300 max-w-xl mx-auto">{currentImage.description}</p>
            <p className="text-xs text-gold-400 font-semibold pt-1">
              Foto {currentIndex + 1} dari {images.length}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
