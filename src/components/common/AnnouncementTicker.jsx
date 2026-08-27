import React, { useState } from 'react';
import { HiVolumeUp, HiX, HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default function AnnouncementTicker({
  announcements = [
    { text: 'Pembagian Gugus Resmi Telah Dibuka! Silakan cek nomor gugus dan nama pemandu Anda.', link: '/aktivitas' },
    { text: 'Gladi Bersih Upacara Pembukaan dilaksanakan Minggu, 30 Agustus 2026 di Lapangan Pancasila.', link: '/aktivitas' },
    { text: 'Buku Panduan Perlengkapan & Dress Code Mahasiswa Baru dapat diunduh di menu Wawasan.', link: '/wawasan' },
  ],
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isVisible) return null;

  const current = announcements[currentIndex];

  return (
    <aside aria-label="Pengumuman Penting" className="bg-linear-to-r from-brand-950 via-brand-900 to-brand-950 text-slate-100 text-xs py-2 px-4 border-b border-brand-800/80 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 overflow-hidden flex-1">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-gold-500 text-slate-950 font-black text-[10px] uppercase tracking-wider shrink-0">
            <HiVolumeUp className="w-3.5 h-3.5" /> PENGUMUMAN
          </span>
          <p className="truncate text-slate-200 font-medium">
            {current.text}
          </p>
          {current.link && (
            <Link
              to={current.link}
              className="inline-flex items-center gap-1 text-gold-400 font-bold hover:underline shrink-0 text-xs"
            >
              Lihat Detail <HiArrowRight className="w-3 h-3" />
            </Link>
          )}
        </div>

        <button
          type="button"
          onClick={() => setIsVisible(false)}
          className="p-1 text-slate-400 hover:text-white rounded-md hover:bg-brand-800 shrink-0"
          aria-label="Tutup Pengumuman"
        >
          <HiX className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
