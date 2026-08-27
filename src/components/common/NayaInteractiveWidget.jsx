import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineX, HiOutlineSparkles, HiOutlineQuestionMarkCircle } from 'react-icons/hi';
import { nayaHeadChat, nayaSuitHero } from '../../assets';

export default function NayaInteractiveWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start select-none">
      {/* Speech Bubble / Help Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 15 }}
            className="mb-3 w-80 sm:w-88 rounded-3xl p-4 bg-white/95 backdrop-blur-md shadow-2xl border-2 border-orange-400 text-neutral-900 space-y-3"
          >
            <div className="flex items-center justify-between border-b border-orange-100 pb-2">
              <div className="flex items-center gap-2">
                <img src={nayaHeadChat} alt="Naya Mascot" className="w-8 h-8 object-contain" />
                <div>
                  <h4 className="font-display font-black text-sm text-neutral-900">
                    Naya • Maskot Resmi
                  </h4>
                  <span className="text-[10px] font-bold text-orange-600 uppercase">
                    ORMIK ARUNA 2026
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-neutral-100 text-neutral-500 text-xs cursor-pointer"
                aria-label="Tutup"
              >
                <HiOutlineX className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-neutral-700 leading-relaxed font-medium">
              "Halo Ksatria Muda! Aku <strong>Naya</strong>, teman perjalananmu selama ORMIK ARUNA 2026. Ada yang bisa Naya bantu?"
            </p>

            {/* Quick Actions */}
            <div className="space-y-1.5 pt-1">
              <Link
                to="/aktivitas"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-xl bg-orange-50 hover:bg-orange-100 border border-orange-200 text-xs font-bold text-orange-950 transition-colors"
              >
                <span>⚡ Cek Kelompok & Mentor</span>
                <span>→</span>
              </Link>
              <Link
                to="/wawasan"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-xs font-bold text-amber-950 transition-colors"
              >
                <span>📖 Panduan SIAKAD & e-Learning</span>
                <span>→</span>
              </Link>
              <a
                href="https://wa.me/6281290002026"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold text-emerald-950 transition-colors"
              >
                <span>💬 WhatsApp Helpdesk Panitia</span>
                <span>↗</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Mascot Button */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
          setHasInteracted(true);
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2.5 p-2 pr-4 rounded-full bg-white/95 backdrop-blur-md shadow-2xl border-2 border-orange-400 text-neutral-900 cursor-pointer group"
      >
        <div className="relative w-12 h-12 rounded-full bg-linear-to-tr from-orange-500 via-amber-400 to-emerald-400 p-0.5 flex items-center justify-center shadow-md">
          <img
            src={nayaSuitHero}
            alt="Naya Mascot"
            className="w-10 h-10 object-contain drop-shadow-sm group-hover:scale-110 transition-transform"
          />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500" />
          </span>
        </div>
        <div className="text-left">
          <span className="font-display font-black text-xs text-neutral-900 block group-hover:text-orange-600 transition-colors">
            Tanya Naya ✨
          </span>
          <span className="text-[10px] text-neutral-500 font-medium">
            Maskot ORMIK 2026
          </span>
        </div>
      </motion.button>
    </div>
  );
}
