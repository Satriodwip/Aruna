import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineEye, HiOutlineSparkles, HiOutlineArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import PionirBadge from '../common/PionirBadge';
import Lightbox from '../common/Lightbox';
import { mockGaleri } from '../../data/mockData';

export default function HeroPhotoStream() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Divide photos into two rows for dual flowing marquee ribbons
  const row1 = mockGaleri.slice(0, 5);
  const row2 = mockGaleri.slice(5, 10);

  // Duplicate for seamless infinite loop
  const infiniteRow1 = [...row1, ...row1, ...row1];
  const infiniteRow2 = [...row2, ...row2, ...row2];

  const handlePhotoClick = (photoId) => {
    const idx = mockGaleri.findIndex((p) => p.id === photoId);
    if (idx !== -1) {
      setSelectedPhotoIndex(idx);
      setLightboxOpen(true);
    }
  };

  return (
    <section className="relative w-full bg-linear-to-b from-emerald-100/50 via-white to-white py-12 sm:py-16 overflow-hidden border-b border-emerald-200/60 select-none">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-8 text-center space-y-3 relative z-10">
        <PionirBadge variant="amber">Kaleidoskop & Galeri Visual</PionirBadge>
        <h2 className="font-display font-black text-2xl sm:text-4xl text-neutral-900 tracking-tight">
          Kilas Balik Momen Akbar Gadjah Mada Muda
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 font-medium max-w-xl mx-auto">
          Sentuh atau klik foto untuk melihat dokumentasi kemegahan formasi mozaik dan selebrasi orientasi dalam resolusi tinggi.
        </p>
      </div>

      {/* Flowing Photo Marquee Container */}
      <div
        className="space-y-4 sm:space-y-6 relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* ROW 1: Scrolling Left */}
        <div className="flex overflow-hidden w-full mask-gradient">
          <motion.div
            animate={isPaused ? {} : { x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 25,
            }}
            className="flex gap-4 sm:gap-6 shrink-0"
          >
            {infiniteRow1.map((item, idx) => (
              <div
                key={`r1-${idx}`}
                onClick={() => handlePhotoClick(item.id)}
                className="w-64 sm:w-80 shrink-0 rounded-2xl p-1.5 bg-amber-200 hover:bg-amber-300 shadow-lg cursor-pointer group transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <div className="bordir-neutral-100 rounded-xl overflow-hidden bg-neutral-900 aspect-16/10 relative">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Category Pill */}
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-amber-300 text-neutral-950 text-[10px] font-black uppercase tracking-wider shadow-sm">
                    {item.kategori}
                  </span>

                  {/* Caption & Zoom */}
                  <div className="absolute bottom-0 inset-x-0 p-3 text-white space-y-0.5">
                    <h4 className="font-display font-bold text-xs sm:text-sm truncate text-white group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h4>
                    <div className="flex items-center justify-between text-[10px] text-amber-200">
                      <span className="truncate max-w-[180px]">{item.description}</span>
                      <HiOutlineEye className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ROW 2: Scrolling Right */}
        <div className="flex overflow-hidden w-full mask-gradient">
          <motion.div
            animate={isPaused ? {} : { x: ['-50%', '0%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 25,
            }}
            className="flex gap-4 sm:gap-6 shrink-0"
          >
            {infiniteRow2.map((item, idx) => (
              <div
                key={`r2-${idx}`}
                onClick={() => handlePhotoClick(item.id)}
                className="w-64 sm:w-80 shrink-0 rounded-2xl p-1.5 bg-emerald-500 hover:bg-emerald-600 shadow-lg cursor-pointer group transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <div className="bordir-neutral-100/thin rounded-xl overflow-hidden bg-neutral-900 aspect-16/10 relative">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Category Pill */}
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-emerald-300 text-neutral-950 text-[10px] font-black uppercase tracking-wider shadow-sm">
                    {item.kategori}
                  </span>

                  {/* Caption & Zoom */}
                  <div className="absolute bottom-0 inset-x-0 p-3 text-white space-y-0.5">
                    <h4 className="font-display font-bold text-xs sm:text-sm truncate text-white group-hover:text-amber-200 transition-colors">
                      {item.title}
                    </h4>
                    <div className="flex items-center justify-between text-[10px] text-emerald-200">
                      <span className="truncate max-w-[180px]">{item.description}</span>
                      <HiOutlineEye className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Explore full gallery link */}
      <div className="text-center pt-8 relative z-10">
        <Link
          to="/galeri"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-amber-300 font-bold text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105"
        >
          <span>Buka Seluruh Galeri & Kaleidoskop Mozaik</span>
          <HiOutlineArrowRight className="w-4 h-4 text-white" />
        </Link>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={mockGaleri}
        currentIndex={selectedPhotoIndex}
        onNavigate={(newIdx) => setSelectedPhotoIndex(newIdx)}
      />
    </section>
  );
}
