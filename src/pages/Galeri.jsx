import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineEye } from 'react-icons/hi';
import Lightbox from '../components/common/Lightbox';
import { mockGaleri } from '../data/mockData';

export default function Galeri() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ['Semua', 'Upacara', 'Mozaik', 'Aktivitas', 'Seni', 'Lingkungan'];

  const filteredPhotos =
    activeCategory === 'Semua'
      ? mockGaleri
      : mockGaleri.filter((g) => g.kategori === activeCategory);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="w-full py-10 px-4 sm:px-8 xl:px-20 space-y-12 relative">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4 relative z-10">
        <span className="px-4 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-black uppercase tracking-wider">
          Kaleidoskop & Galeri Dokumentasi
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-neutral-900 tracking-tight">
          Dokumentasi Memori ORMIK ARUNA
        </h1>
        <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
          Kilas balik momen bersejarah upacara pembukaan, kreasi formasi mozaik akbar mahasiswa baru, expo lembaga kemahasiswaan, dan selebrasi inagurasi STT Terpadu Nurul Fikri.
        </p>
      </section>

      {/* Category Pills */}
      <div className="flex justify-center relative z-10">
        <div className="inline-flex p-1.5 bg-neutral-100 rounded-2xl max-w-full overflow-x-auto gap-1 border border-neutral-200">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-xl font-display font-bold text-xs sm:text-sm transition-all cursor-pointer whitespace-nowrap ${
                  isActive ? 'bg-orange-500 text-white shadow-xs' : 'text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {filteredPhotos.map((item, idx) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="group cursor-pointer rounded-3xl p-2 bg-white border border-neutral-200 hover:border-orange-500 shadow-md hover:shadow-xl transition-all"
            onClick={() => openLightbox(idx)}
          >
            <div className="rounded-2xl overflow-hidden aspect-4/3 relative bg-neutral-900">
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-orange-500 text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                {item.kategori}
              </span>

              <div className="absolute bottom-0 inset-x-0 p-4 text-white space-y-1">
                <h4 className="font-display font-bold text-sm sm:text-base group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-2">{item.description}</p>
                <div className="pt-1 flex items-center justify-end text-amber-300 text-xs font-bold gap-1">
                  <span>Lihat Penuh</span>
                  <HiOutlineEye className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={filteredPhotos}
        currentIndex={currentImageIndex}
        onNavigate={(newIdx) => setCurrentImageIndex(newIdx)}
      />
    </div>
  );
}
