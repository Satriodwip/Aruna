import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineBell,
  HiOutlineChevronUp,
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineSparkles,
} from 'react-icons/hi';
import { FaInstagram, FaYoutube, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { arunaLogoPetal, nayaHeadChat } from '../assets';
import NayaInteractiveWidget from '../components/common/NayaInteractiveWidget';

// Cheerful Live Announcement Ticker Banner
function AnnouncementTicker() {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;

  return (
    <div className="bg-linear-to-r from-[#FF5722] via-[#FFC700] to-[#FF5722] text-neutral-950 font-bold text-xs py-2.5 px-4 relative z-50 overflow-hidden shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 font-sans">
        <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
          <span className="px-2.5 py-0.5 rounded-full bg-neutral-950 text-[#FFC700] text-[10px] uppercase font-black tracking-wider shrink-0 animate-pulse">
            🔥 PENGUMUMAN
          </span>
          <p className="truncate text-neutral-950 font-bold text-xs sm:text-sm">
            ✨ Selamat Datang Calon Mahasiswa Baru STT Terpadu Nurul Fikri! Cek Kelompok & Mentor Anda sekarang.
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-neutral-950 hover:bg-black/10 p-1 rounded-md transition-colors text-xs shrink-0 cursor-pointer font-bold"
          aria-label="Tutup Pengumuman"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default function MainLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-neutral-900 font-sans selection:bg-[#FF5722] selection:text-white relative">
      {/* Live Announcement Ticker Banner */}
      <AnnouncementTicker />

      {/* Cheerful Floating Header / Navbar */}
      <header className="sticky top-0 z-50 w-full px-3 sm:px-6 py-2.5">
        <nav className="max-w-7xl mx-auto rounded-3xl bg-white/95 backdrop-blur-md px-4 sm:px-6 py-3 shadow-xl border-2 border-orange-100/80 transition-all duration-300">
          <div className="flex items-center justify-between">
            {/* Logo & Cheerful Branding */}
            <Link to="/" className="flex items-center gap-3 group select-none">
              <motion.div
                whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="w-11 h-11 rounded-2xl bg-linear-to-tr from-[#FF5722] via-[#FFC700] to-[#00C49F] p-1.5 flex items-center justify-center shadow-md border-2 border-white"
              >
                <img
                  src={arunaLogoPetal}
                  alt="Logo ORMIK ARUNA 2026"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display font-black text-xl text-[#FF5722] tracking-tight">
                    ARUNA
                  </span>
                  <span className="font-display font-bold text-lg text-neutral-900">
                    2026
                  </span>
                </div>
                <span className="text-[10px] font-bold text-neutral-500 tracking-wider uppercase font-sans">
                  STT Terpadu Nurul Fikri
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 font-semibold text-sm">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-orange-100 text-[#FF5722] font-black shadow-xs'
                      : 'text-neutral-700 hover:text-[#FF5722] hover:bg-neutral-100'
                  }`
                }
              >
                Beranda
              </NavLink>
              <NavLink
                to="/aktivitas"
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-orange-100 text-[#FF5722] font-black shadow-xs'
                      : 'text-neutral-700 hover:text-[#FF5722] hover:bg-neutral-100'
                  }`
                }
              >
                Aktivitas & Rundown
              </NavLink>
              <NavLink
                to="/wawasan"
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-orange-100 text-[#FF5722] font-black shadow-xs'
                      : 'text-neutral-700 hover:text-[#FF5722] hover:bg-neutral-100'
                  }`
                }
              >
                Wawasan & Guidebook
              </NavLink>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-orange-100 text-[#FF5722] font-black shadow-xs'
                      : 'text-neutral-700 hover:text-[#FF5722] hover:bg-neutral-100'
                  }`
                }
              >
                FAQ
              </NavLink>
              <NavLink
                to="/galeri"
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-orange-100 text-[#FF5722] font-black shadow-xs'
                      : 'text-neutral-700 hover:text-[#FF5722] hover:bg-neutral-100'
                  }`
                }
              >
                Galeri
              </NavLink>

              {/* Notification Popover Dropdown */}
              <div className="relative ml-2">
                <button
                  onClick={() => setIsNotifOpen(!isNotifOpen)}
                  className="relative p-2.5 rounded-xl bg-neutral-100 hover:bg-orange-50 text-neutral-700 hover:text-[#FF5722] transition-colors cursor-pointer"
                  aria-label="Notifikasi Pengumuman"
                >
                  <HiOutlineBell className="w-5 h-5" />
                  <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
                  </span>
                </button>

                <AnimatePresence>
                  {isNotifOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-80 sm:w-96 rounded-3xl bg-white p-5 shadow-2xl border-2 border-orange-100 z-50 space-y-3"
                    >
                      <div className="flex items-center justify-between border-b pb-2">
                        <h4 className="font-display font-black text-sm text-neutral-900">
                          Pemberitahuan ORMIK ARUNA
                        </h4>
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-orange-100 text-[#FF5722]">
                          Baru
                        </span>
                      </div>
                      <div className="space-y-2 text-xs font-sans">
                        <div className="p-3 rounded-2xl bg-orange-50/80 border border-orange-100 space-y-1">
                          <p className="font-black text-[#FF5722]">
                            ⚡ Pembagian Kelompok Mentor
                          </p>
                          <p className="text-neutral-600">
                            Cek kelompok mentor dan ruang kumpul Day 1 telah dibuka di menu Aktivitas!
                          </p>
                        </div>
                        <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-100 space-y-1">
                          <p className="font-black text-amber-900">
                            👕 Dresscode & Topi DIY
                          </p>
                          <p className="text-neutral-600">
                            Pastikan membawa name tag tali warna prodi dan topi kuning kreasi sendiri.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Prominent Cheerful CTA Button */}
              <Link
                to="/aktivitas"
                className="ml-3 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-2xl bg-[#FF5722] hover:bg-[#E64A19] text-white font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#FF5722]/30 hover:scale-105 active:scale-95"
              >
                <span>⚡ Cek Kelompok</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-2xl bg-orange-100 text-[#FF5722] transition-colors cursor-pointer"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden border-t border-neutral-100 mt-3 pt-3 space-y-2 overflow-hidden font-sans"
              >
                <div className="flex flex-col space-y-1 font-bold text-sm">
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3.5 py-2.5 rounded-xl hover:bg-orange-50 text-neutral-800"
                  >
                    Beranda
                  </Link>
                  <Link
                    to="/aktivitas"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3.5 py-2.5 rounded-xl hover:bg-orange-50 text-neutral-800"
                  >
                    Aktivitas & Rundown
                  </Link>
                  <Link
                    to="/wawasan"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3.5 py-2.5 rounded-xl hover:bg-orange-50 text-neutral-800"
                  >
                    Wawasan & Guidebook
                  </Link>
                  <Link
                    to="/faq"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3.5 py-2.5 rounded-xl hover:bg-orange-50 text-neutral-800"
                  >
                    FAQ
                  </Link>
                  <Link
                    to="/galeri"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3.5 py-2.5 rounded-xl hover:bg-orange-50 text-neutral-800"
                  >
                    Galeri
                  </Link>
                </div>

                <div className="pt-2 flex flex-col gap-2 border-t border-neutral-100">
                  <Link
                    to="/aktivitas"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full text-center py-3 rounded-2xl bg-[#FF5722] text-white font-black text-xs uppercase tracking-wider shadow-md"
                  >
                    ⚡ Cek Kelompok & Mentor
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Main Page Content */}
      <main className="flex-1 w-full relative">
        <Outlet />
      </main>

      {/* Floating Interactive Naya Mascot Widget */}
      <NayaInteractiveWidget />

      {/* Floating Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-[#FFC700] hover:bg-[#FFD600] text-neutral-950 shadow-2xl border-2 border-white cursor-pointer flex items-center justify-center"
        aria-label="Kembali ke atas"
      >
        <HiOutlineChevronUp className="w-6 h-6 stroke-[3]" />
      </motion.button>

      {/* Cheerful Official Footer */}
      <footer className="w-full bg-[#0B2545] text-white pt-16 pb-12 px-4 sm:px-8 xl:px-20 relative border-t-8 border-[#FF5722]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1 rounded-full bg-[#FF5722] text-white text-xs font-black uppercase tracking-wider font-sans">
                  Orientasi Akademik 2026
                </span>
                <span className="px-3.5 py-1 rounded-full bg-[#FFC700] text-neutral-950 text-xs font-black uppercase tracking-wider font-sans">
                  STT-NF
                </span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight uppercase mt-3">
                ORMIK ARUNA 2026
              </h2>
              <p className="font-bold text-sm text-[#FFC700] mt-1 font-sans">
                "Rise Together, Shine Forever!"
              </p>
              <p className="text-xs sm:text-sm text-slate-300 font-sans mt-2 max-w-lg leading-relaxed">
                Mewujudkan mahasiswa baru yang adaptif, berintegritas, kolaboratif, serta berdaya saing unggul di era transformasi teknologi.
              </p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-200 font-sans">
              <div className="flex items-start gap-3">
                <HiOutlineLocationMarker className="w-5 h-5 shrink-0 text-[#FF5722] mt-0.5" />
                <div>
                  <p className="font-bold text-white">Kampus B (Pusat Kegiatan ORMIK):</p>
                  <p>Jl. Raya Lenteng Agung No.20, Jagakarsa, Jakarta Selatan 12610</p>
                  <p className="font-bold text-white mt-1">Kampus A (Rektorat):</p>
                  <p>Jl. Situ Indah No.116, Tugu, Cimanggis, Depok 16451</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <HiOutlinePhone className="w-5 h-5 shrink-0 text-[#FFC700]" />
                <p>Help Desk ORMIK: +62-812-9000-2026 (WhatsApp)</p>
              </div>
              <div className="flex items-center gap-3">
                <HiOutlineMail className="w-5 h-5 shrink-0 text-[#00C49F]" />
                <p>Email: ormik@nurulfikri.ac.id</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: FaInstagram, href: 'https://instagram.com/sttterpadunf', label: 'Instagram' },
                { icon: FaYoutube, href: 'https://youtube.com/@sttterpadunurulfikri', label: 'YouTube' },
                { icon: FaTiktok, href: 'https://tiktok.com/@sttterpadunf', label: 'TikTok' },
                { icon: FaWhatsapp, href: 'https://wa.me/6281290002026', label: 'WhatsApp' },
              ].map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-2xl bg-white/10 hover:bg-[#FF5722] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                  aria-label={soc.label}
                >
                  <soc.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-3 space-y-4 font-sans">
            <h4 className="font-display font-black text-lg text-[#FFC700] tracking-wider uppercase">
              Tautan Cepat
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <Link to="/aktivitas" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <span>⚡ Cek Kelompok & Mentor</span>
                </Link>
              </li>
              <li>
                <Link to="/aktivitas" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <span>📅 Rundown 3 Hari Kegiatan</span>
                </Link>
              </li>
              <li>
                <Link to="/aktivitas" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <span>🍱 Teka-Teki Bekal & Perlengkapan</span>
                </Link>
              </li>
              <li>
                <Link to="/wawasan" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <span>📖 Tata Tertib & Sanksi</span>
                </Link>
              </li>
              <li>
                <Link to="/wawasan" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <span>💻 Panduan SIAKAD & e-Learning</span>
                </Link>
              </li>
              <li>
                <Link to="/galeri" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <span>📸 Galeri Memori Kampus</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3 space-y-4 font-sans">
            <h4 className="font-display font-black text-lg text-[#FF5722] tracking-wider uppercase">
              Program Studi Unggulan
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <p className="font-bold text-white text-sm">S1 Teknik Informatika</p>
                <p className="text-[11px] text-slate-400">Software Engineering, Cyber Security, Artificial Intelligence</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <p className="font-bold text-white text-sm">S1 Sistem Informasi</p>
                <p className="text-[11px] text-slate-400">Enterprise Systems, Data Science, IT Governance</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <p className="font-bold text-white text-sm">S1 Bisnis Digital</p>
                <p className="text-[11px] text-slate-400">Technopreneurship, E-Commerce, Digital Marketing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-sans">
          <p>© 2026 Panitia ORMIK ARUNA • Sekolah Tinggi Teknologi Terpadu Nurul Fikri.</p>
          <p className="text-[#FFC700] font-bold text-center sm:text-right">
            Satu Hati, Satu Tekad, Menuju Mahasiswa Unggul Berkarakter.
          </p>
        </div>
      </footer>
    </div>
  );
}
