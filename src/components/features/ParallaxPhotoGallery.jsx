import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { HiOutlineEye, HiOutlineExternalLink, HiOutlineSparkles } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import PionirBadge from '../common/PionirBadge';
import Lightbox from '../common/Lightbox';
import { mockGaleri } from '../../data/mockData';

export default function ParallaxPhotoGallery() {
  const containerRef = useRef(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  // Track scroll progress within this gallery section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Smooth springs for fluid inertia
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax translation transforms for multi-depth visual layers
  const yCol1 = useTransform(smoothProgress, [0, 1], [100, -120]);
  const yCol2 = useTransform(smoothProgress, [0, 1], [-60, 80]);
  const yCol3 = useTransform(smoothProgress, [0, 1], [140, -160]);

  // Rotations for dynamic 3D feel
  const rotateLeft = useTransform(smoothProgress, [0, 1], [-4, 5]);
  const rotateRight = useTransform(smoothProgress, [0, 1], [5, -4]);

  const handlePhotoClick = (index) => {
    setSelectedPhotoIndex(index);
    setLightboxOpen(true);
  };

  const col1Photos = [mockGaleri[0], mockGaleri[1], mockGaleri[6]];
  const col2Photos = [mockGaleri[2], mockGaleri[3], mockGaleri[7], mockGaleri[9]];
  const col3Photos = [mockGaleri[4], mockGaleri[5], mockGaleri[8]];

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-linear-to-b from-neutral-50 via-emerald-100/40 to-neutral-100 py-20 sm:py-28 px-4 sm:px-8 xl:px-20 overflow-hidden border-t-2 border-dashed border-emerald-300"
    >
      {/* Ambient Parallax Background Orbs */}
      <motion.div
        style={{ y: useTransform(smoothProgress, [0, 1], [-80, 120]) }}
        className="absolute top-20 left-10 w-96 h-96 bg-amber-300/25 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: useTransform(smoothProgress, [0, 1], [120, -100]) }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Header with Signature PIONIR Tilted Badge */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <PionirBadge variant="lime">Kaleidoskop & Galeri Visual</PionirBadge>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-neutral-900 tracking-tight leading-tight">
            Galeri Formasi Mozaik & Selebrasi PIONIR
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-medium">
            Gulir layar untuk merasakan pengalaman <em>Parallax 3D Perspective</em> momen kemegahan 10.000 Ksatria Gadjah Mada Muda.
          </p>
        </div>

        {/* 3-Column Multi-Speed Parallax Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-6">
          {/* Column 1: Moves upward faster */}
          <motion.div style={{ y: yCol1, rotate: rotateLeft }} className="space-y-6">
            {col1Photos.map((photo, i) => {
              const globalIdx = mockGaleri.findIndex((p) => p.id === photo.id);
              return (
                <div
                  key={photo.id}
                  onClick={() => handlePhotoClick(globalIdx)}
                  className="rounded-3xl p-2 bg-emerald-500 hover:bg-emerald-600 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:scale-[1.03]"
                >
                  <div className="bordir-neutral-100/thin rounded-2xl overflow-hidden bg-neutral-950 aspect-4/3 relative">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />
                    
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-amber-300 text-neutral-950 text-xs font-black uppercase shadow-sm">
                      {photo.kategori}
                    </span>

                    <div className="absolute bottom-0 inset-x-0 p-4 text-white space-y-1">
                      <h4 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-amber-300 transition-colors">
                        {photo.title}
                      </h4>
                      <p className="text-xs text-neutral-300 line-clamp-1">{photo.description}</p>
                      <div className="pt-1 flex items-center justify-between text-[11px] text-amber-300 font-bold">
                        <span className="flex items-center gap-1">
                          <HiOutlineEye className="w-4 h-4" /> Lihat Resolusi Penuh
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Column 2: Moves downward / inverted flow */}
          <motion.div style={{ y: yCol2 }} className="space-y-6 pt-0 md:pt-12">
            {col2Photos.map((photo, i) => {
              const globalIdx = mockGaleri.findIndex((p) => p.id === photo.id);
              return (
                <div
                  key={photo.id}
                  onClick={() => handlePhotoClick(globalIdx)}
                  className="rounded-3xl p-2 bg-amber-300 hover:bg-amber-400 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:scale-[1.03]"
                >
                  <div className="bordir-brown-300 rounded-2xl overflow-hidden bg-neutral-950 aspect-4/3 relative">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />
                    
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-emerald-500 text-white text-xs font-black uppercase shadow-sm">
                      {photo.kategori}
                    </span>

                    <div className="absolute bottom-0 inset-x-0 p-4 text-white space-y-1">
                      <h4 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-amber-200 transition-colors">
                        {photo.title}
                      </h4>
                      <p className="text-xs text-neutral-300 line-clamp-1">{photo.description}</p>
                      <div className="pt-1 flex items-center justify-between text-[11px] text-amber-200 font-bold">
                        <span className="flex items-center gap-1">
                          <HiOutlineEye className="w-4 h-4" /> Lihat Resolusi Penuh
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Column 3: Moves upward */}
          <motion.div style={{ y: yCol3, rotate: rotateRight }} className="space-y-6">
            {col3Photos.map((photo, i) => {
              const globalIdx = mockGaleri.findIndex((p) => p.id === photo.id);
              return (
                <div
                  key={photo.id}
                  onClick={() => handlePhotoClick(globalIdx)}
                  className="rounded-3xl p-2 bg-emerald-500 hover:bg-emerald-600 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:scale-[1.03]"
                >
                  <div className="bordir-neutral-100/thin rounded-2xl overflow-hidden bg-neutral-950 aspect-4/3 relative">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />
                    
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-amber-300 text-neutral-950 text-xs font-black uppercase shadow-sm">
                      {photo.kategori}
                    </span>

                    <div className="absolute bottom-0 inset-x-0 p-4 text-white space-y-1">
                      <h4 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-amber-300 transition-colors">
                        {photo.title}
                      </h4>
                      <p className="text-xs text-neutral-300 line-clamp-1">{photo.description}</p>
                      <div className="pt-1 flex items-center justify-between text-[11px] text-amber-300 font-bold">
                        <span className="flex items-center gap-1">
                          <HiOutlineEye className="w-4 h-4" /> Lihat Resolusi Penuh
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom CTA Box */}
        <div className="text-center pt-8 space-y-4">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-emerald-200 shadow-lg max-w-2xl mx-auto space-y-4">
            <h3 className="font-display font-black text-xl sm:text-2xl text-neutral-900">
              Siapkah dirimu mengukir sejarah di PIONIR 2026?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600">
              Jelajahi dokumentasi lengkap dan filter foto berdasarkan kategori di halaman Galeri resmi.
            </p>
            <div>
              <Link
                to="/galeri"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-amber-300 hover:bg-amber-400 text-neutral-950 font-black text-sm uppercase tracking-wider shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <span>Buka Galeri & Filter Foto</span>
                <HiOutlineExternalLink className="w-4 h-4 font-bold" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Integration */}
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
