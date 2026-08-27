import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { HiOutlineEye, HiOutlineExternalLink } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Lightbox from '../common/Lightbox';
import { mockGaleri } from '../../data/mockData';

// 12 Alternating Left/Right Photo Nodes with Center Breathing Corridor
// Left Cluster: x ~ 22%-26% | Right Cluster: x ~ 74%-78% | Center Corridor: 48%-52% open
const TUNNEL_NODES = [
  // Pair 1 (Immediate Foreground: zInit -160px & -380px)
  { id: 't1',  x: '75%',  y: '28%', zInit: -160,  badge: 'Upacara Pembukaan',  badgeColor: 'bg-orange-500 text-white', photoIndex: 0 },
  { id: 't2',  x: '25%',  y: '68%', zInit: -380,  badge: 'Formasi Mozaik',     badgeColor: 'bg-amber-400 text-neutral-950', photoIndex: 1 },

  // Pair 2 (Midground Entry: zInit -620px & -860px)
  { id: 't3',  x: '76%',  y: '20%', zInit: -620,  badge: 'Laboratorium IT',    badgeColor: 'bg-emerald-500 text-white', photoIndex: 2 },
  { id: 't4',  x: '23%',  y: '30%', zInit: -860,  badge: 'Expo ORMAWA',        badgeColor: 'bg-amber-400 text-neutral-950', photoIndex: 3 },
  
  // Pair 3 (Midground Depth: zInit -1100px & -1340px)
  { id: 't5',  x: '77%',  y: '68%', zInit: -1100, badge: 'Green Campus',       badgeColor: 'bg-emerald-500 text-white', photoIndex: 4 },
  { id: 't6',  x: '24%',  y: '76%', zInit: -1340, badge: 'Inagurasi Akbar',    badgeColor: 'bg-orange-500 text-white', photoIndex: 5 },

  // Pair 4 (Deep Midground: zInit -1580px & -1820px)
  { id: 't7',  x: '76%',  y: '24%', zInit: -1580, badge: 'Harmoni Mahasiswa',  badgeColor: 'bg-amber-400 text-neutral-950', photoIndex: 6 },
  { id: 't8',  x: '23%',  y: '48%', zInit: -1820, badge: 'Flashmob Semangat',  badgeColor: 'bg-orange-500 text-white', photoIndex: 7 },

  // Pair 5 (Deep Background: zInit -2060px & -2300px)
  { id: 't9',  x: '77%',  y: '72%', zInit: -2060, badge: 'Parade Nusantara',   badgeColor: 'bg-emerald-500 text-white', photoIndex: 8 },
  { id: 't10', x: '24%',  y: '22%', zInit: -2300, badge: 'Kuliah Inspiratif',  badgeColor: 'bg-amber-400 text-neutral-950', photoIndex: 9 },

  // Pair 6 (Terminal Background: zInit -2540px & -2780px)
  { id: 't11', x: '75%',  y: '46%', zInit: -2540, badge: 'Pesta Cahaya ARUNA', badgeColor: 'bg-emerald-500 text-white', photoIndex: 10 },
  { id: 't12', x: '25%',  y: '34%', zInit: -2780, badge: 'Logo Formasi STT-NF', badgeColor: 'bg-orange-500 text-white', photoIndex: 11 },
];

const TOTAL_DELTA = 3450;

// Pure Memoized 3D Projection Card
const TunnelCard = React.memo(function TunnelCard({
  item,
  scrollProgress,
  onPhotoClick,
}) {
  const photoData = mockGaleri[item.photoIndex] || mockGaleri[0];

  // Continuous 3D translation along Z-axis
  const transform = useTransform(scrollProgress, (p) => {
    const currentZ = item.zInit + p * TOTAL_DELTA;
    return `translate(-50%, -50%) translate3d(0px, 0px, ${currentZ}px)`;
  });

  // Smooth Opacity: active while in camera flight path (-3200px to 160px)
  const opacity = useTransform(scrollProgress, (p) => {
    const currentZ = item.zInit + p * TOTAL_DELTA;
    if (currentZ < -3200) return 0;
    if (currentZ < -2200) return Math.min(1, Math.max(0.2, (currentZ + 3200) / 1000));
    if (currentZ <= 160) return 1;
    if (currentZ <= 280) return Math.max(0, 1 - (currentZ - 160) / 120);
    return 0;
  });

  // Realistic Depth of Field blur
  const filter = useTransform(scrollProgress, (p) => {
    const currentZ = item.zInit + p * TOTAL_DELTA;
    if (currentZ < -1900) return 'blur(3px)';
    if (currentZ < -950) return 'blur(1.5px)';
    return 'blur(0px)';
  });

  const pointerEvents = useTransform(scrollProgress, (p) => {
    const currentZ = item.zInit + p * TOTAL_DELTA;
    if (currentZ >= -1600 && currentZ <= 200) return 'auto';
    return 'none';
  });

  return (
    <motion.div
      style={{
        left: item.x,
        top: item.y,
        transform,
        opacity,
        filter,
        pointerEvents,
        willChange: 'transform, opacity, filter',
      }}
      className="absolute cursor-pointer select-none group"
      onClick={() => onPhotoClick(item.photoIndex)}
    >
      {/* Balanced Card Dimensions: w-[300px] on mobile -> w-[580px] on desktop with clean center corridor */}
      <div className="w-[300px] sm:w-[400px] md:w-[480px] lg:w-[540px] xl:w-[580px] rounded-3xl p-2 sm:p-2.5 bg-white/95 backdrop-blur-md shadow-2xl border-2 border-amber-300/80 hover:border-orange-500 hover:scale-[1.03] transition-all duration-300">
        <div className="bordir-gold-400 rounded-2xl overflow-hidden bg-neutral-950 aspect-16/10 relative">
          <img
            src={photoData.url}
            alt={photoData.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

          {/* Badge Tag */}
          <span className={`absolute top-3 left-3 sm:top-3.5 sm:left-3.5 px-3 py-1 rounded-lg ${item.badgeColor} text-xs font-black uppercase tracking-wider shadow-md`}>
            {item.badge}
          </span>

          {/* Caption on Hover */}
          <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-4 text-white space-y-1">
            <h4 className="font-display font-bold text-sm sm:text-base md:text-lg truncate text-white group-hover:text-amber-300 transition-colors drop-shadow-md">
              {photoData.title}
            </h4>
            <div className="flex items-center justify-between text-xs text-amber-200 pt-0.5">
              <span className="truncate max-w-[200px] sm:max-w-[340px] opacity-90 font-medium">{photoData.description}</span>
              <div className="flex items-center gap-1 shrink-0 font-bold bg-white/20 px-2 py-0.5 rounded-md backdrop-blur-xs">
                <span>Buka</span>
                <HiOutlineEye className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default function FloatingParallaxGallery() {
  const containerRef = useRef(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  // Track scroll throughout the container runway
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth spring inertia for 60fps tracking
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  const handlePhotoClick = (index) => {
    setSelectedPhotoIndex(index);
    setLightboxOpen(true);
  };

  // Opening Title Card Transform: zooms past viewer at start
  const titleTransform = useTransform(smoothProgress, (p) => {
    const currentZ = 60 + p * TOTAL_DELTA;
    return `translate(-50%, -50%) translate3d(0px, 0px, ${currentZ}px)`;
  });
  const titleOpacity = useTransform(smoothProgress, [0, 0.08, 0.16], [1, 1, 0]);

  // Final Invitation Card Transform: emerges from deep tunnel and locks in center
  const finalCardTransform = useTransform(smoothProgress, (p) => {
    const currentZ = -3400 + p * TOTAL_DELTA;
    return `translate(-50%, -50%) translate3d(0px, 0px, ${Math.min(40, currentZ)}px)`;
  });
  const finalCardOpacity = useTransform(smoothProgress, (p) => {
    const currentZ = -3400 + p * TOTAL_DELTA;
    if (currentZ < -2400) return 0;
    if (currentZ < -800) return Math.min(1, (currentZ + 2400) / 1600);
    return 1; // Stays permanently visible at 1.0
  });
  const finalCardFilter = useTransform(smoothProgress, (p) => {
    const currentZ = -3400 + p * TOTAL_DELTA;
    if (currentZ < -1000) return 'blur(2px)';
    return 'blur(0px)';
  });

  return (
    <div
      ref={containerRef}
      className="relative z-12 h-[3400px] sm:h-[4000px] lg:h-[4600px] w-full bg-[#0B2545] select-none"
    >
      {/* 3D Perspective Sticky Viewport */}
      <div
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center"
        style={{ perspective: '600px', perspectiveOrigin: 'center center' }}
      >
        {/* ORMIK ARUNA Deep Tech Navy Depth Background */}
        <div className="absolute inset-0 bg-radial from-[#133A6B]/90 via-[#0B2545] to-[#061528] pointer-events-none" />

        {/* Ambient Volumetric Lighting Glows (Orange, Amber, Emerald) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/25 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Watermark Rings */}
        <div className="absolute top-10 left-10 w-72 h-72 opacity-10 pointer-events-none rounded-full border-4 border-dashed border-orange-300" />
        <div className="absolute bottom-10 right-10 w-80 h-80 opacity-10 pointer-events-none rounded-full border-4 border-dashed border-amber-300" />

        {/* ========================================================
            1. INITIAL TITLE: GALERI ARUNA 2026 (Center 3D Title at Start)
           ======================================================== */}
        <motion.div
          style={{
            left: '50%',
            top: '50%',
            transform: titleTransform,
            opacity: titleOpacity,
            willChange: 'transform, opacity',
          }}
          className="absolute z-40 grid place-items-center pointer-events-none"
        >
          <div className="flex flex-col items-center justify-center gap-2 p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md shadow-2xl border-2 border-orange-400 w-[80vw] sm:w-[55vw] lg:w-[35vw] text-center">
            <span className="px-3.5 py-1 rounded-full bg-orange-500 text-white text-xs font-black uppercase tracking-wider shadow-xs">
              ORMIK ARUNA 2026
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-neutral-900 leading-tight">
              Galeri ARUNA 2026
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-medium">
              Gulir layar ke bawah untuk menembus terowongan 3D formasi & memori orientasi
            </p>
          </div>
        </motion.div>

        {/* ========================================================
            2. 12 FLYING 3D PERSPECTIVE PHOTOS (CENTER CORRIDOR LAYOUT)
           ======================================================== */}
        {TUNNEL_NODES.map((item) => (
          <TunnelCard
            key={item.id}
            item={item}
            scrollProgress={smoothProgress}
            onPhotoClick={handlePhotoClick}
          />
        ))}

        {/* ========================================================
            3. FINAL INVITATION CARD (Docks in Center at Scroll End)
           ======================================================== */}
        <motion.div
          style={{
            left: '50%',
            top: '50%',
            transform: finalCardTransform,
            opacity: finalCardOpacity,
            filter: finalCardFilter,
            willChange: 'transform, opacity, filter',
          }}
          className="absolute z-50 grid place-items-center"
        >
          <div className="rounded-3xl p-2.5 bg-white shadow-2xl w-[350px] sm:w-[460px] md:w-[580px]">
            <div className="bordir-gold-400 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center space-y-4 bg-white">
              <span className="px-3.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-black uppercase tracking-wider">
                Dokumentasi Resmi STT Terpadu Nurul Fikri
              </span>

              <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl text-neutral-900 leading-snug">
                Siapkah dirimu menjadi Ksatria Muda <br />
                <span className="text-orange-600">ORMIK ARUNA 2026?</span>
              </h3>
              
              <p className="text-xs sm:text-sm text-neutral-600 max-w-md">
                Kunjungi katalog galeri lengkap untuk melihat seluruh dokumentasi mozaik, suasana kampus, expo teknologi, dan inagurasi akbar.
              </p>

              <Link
                to="/galeri"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-sm uppercase tracking-wider shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Lihat Galeri Lengkap</span>
                <HiOutlineExternalLink className="w-5 h-5 font-bold" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Scroll Progress Bar at Bottom of Sticky Screen */}
        <div className="absolute bottom-4 z-40 w-72 bg-black/50 p-1 rounded-full backdrop-blur-md flex items-center gap-2 border border-white/10">
          <span className="text-[10px] text-amber-300 font-bold px-2 whitespace-nowrap">
            12 Foto ARUNA
          </span>
          <div className="flex-1 bg-white/20 h-1.5 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: smoothProgress }}
              className="h-full bg-linear-to-r from-orange-500 to-amber-400 origin-left rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={mockGaleri}
        currentIndex={selectedPhotoIndex}
        onNavigate={(newIdx) => setSelectedPhotoIndex(newIdx)}
      />
    </div>
  );
}
