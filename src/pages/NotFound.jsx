import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineHome } from 'react-icons/hi';

export default function NotFound() {
  return (
    <div className="py-20 text-center space-y-6">
      <div className="text-8xl font-black text-brand-900 font-display">404</div>
      <h1 className="text-2xl font-bold text-slate-800">Halaman Tidak Ditemukan</h1>
      <p className="text-slate-600 max-w-md mx-auto text-sm">
        Halaman yang Anda cari tidak tersedia atau sedang dalam pembaruan panitia.
      </p>
      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-900 text-white rounded-xl font-semibold text-sm hover:bg-brand-800 transition-all"
        >
          <HiOutlineHome className="w-4 h-4" />
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
