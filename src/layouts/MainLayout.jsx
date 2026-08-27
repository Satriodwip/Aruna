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
} from 'react-icons/hi';
import { FaInstagram, FaYoutube, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { arunaLogoPetal } from '../assets';
import NayaInteractiveWidget from '../components/common/NayaInteractiveWidget';

// Live Announcement Ticker Banner
function AnnouncementTicker() {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;

  return (
    <div className="bg-linear-to-r from-orange-600 via-amber-500 to-orange-600 text-neutral-950 font-bold text-xs py-2 px-4 relative z-50 overflow-hidden shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
          <span className="px-2 py-0.5 rounded-full bg-neutral-950 text-amber-300 text-[10px] uppercase font-black tracking-wider shrink-0 animate-pulse">
            PENGUMUMAN RESMI
          </span>
          <p className="truncate text-white font-medium text-xs sm:text-sm">
            🔥 Selamat Datang Calon Mahasiswa Baru STT Terpadu Nurul Fikri di Portal Resmi ORMIK ARUNA 2026! Cek Kelompok & Mentor Anda sekarang.
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-neutral-950 hover:bg-white/30 p-1 rounded-md transition-colors text-xs shrink-0 cursor-pointer"
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
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-orange-400 selection:text-white relative">
      {/* Live Announcement Ticker Banner */}
      <AnnouncementTicker />

      {/* ORMIK ARUNA Official Navbar */}
      <nav className="sticky top-0 z-50 w-full rounded-b-[1rem] bg-white/95 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-3.5 shadow-sm drop-shadow-md transition-all duration-300 border-b border-orange-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo & Branding with Official Aruna Petals */}
          <Link to="/" className="flex items-center gap-3 group select-none">
            <motion.div
              whileHover={{ rotate: [0, -6, 6, 0], scale: 1.05 }}
              className="w-11 h-11 rounded-2xl bg-linear-to-tr from-orange-500 via-amber-400 to-emerald-400 p-1.5 flex items-center justify-center shadow-md border-2 border-white"
            >
              <img
                src={arunaLogoPetal}
                alt="Logo ORMIK ARUNA 2026"
                className="w-full h-full object-contain drop-shadow-xs"
              />
            </motion.div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="font-display font-black text-lg sm:text-xl text-orange-600 tracking-tight">
                  ORMIK
                </span>
                <span className="font-display font-bold text-lg sm:text-xl text-neutral-900">
                  ARUNA 2026
                </span>
              </div>
              <span className="text-[10px] font-semibold text-neutral-500 tracking-wide uppercase">
                STT Terpadu Nurul Fikri
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1.5 font-medium text-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg transition-all duration-200 hover:font-bold hover:text-orange-600 ${
                  isActive ? 'font-bold text-orange-600 underline underline-offset-8 decoration-2 decoration-orange-500' : 'text-neutral-700'
                }`
              }
            >
              Beranda
            </NavLink>
            <NavLink
              to="/aktivitas"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg transition-all duration-200 hover:font-bold hover:text-orange-600 ${
                  isActive ? 'font-bold text-orange-600 underline underline-offset-8 decoration-2 decoration-orange-500' : 'text-neutral-700'
                }`
              }
            >
              Aktivitas & Rundown
            </NavLink>
            <NavLink
              to="/wawasan"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg transition-all duration-200 hover:font-bold hover:text-orange-600 ${
                  isActive ? 'font-bold text-orange-600 underline underline-offset-8 decoration-2 decoration-orange-500' : 'text-neutral-700'
                }`
              }
            >
              Wawasan & ORMAWA
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg transition-all duration-200 hover:font-bold hover:text-orange-600 ${
                  isActive ? 'font-bold text-orange-600 underline underline-offset-8 decoration-2 decoration-orange-500' : 'text-neutral-700'
                }`
              }
            >
              FAQ
            </NavLink>
            <NavLink
              to="/galeri"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg transition-all duration-200 hover:font-bold hover:text-orange-600 ${
                  isActive ? 'font-bold text-orange-600 underline underline-offset-8 decoration-2 decoration-orange-500' : 'text-neutral-700'
                }`
              }
            >
              Galeri
            </NavLink>

            {/* Special Highlighted Action Buttons */}
            <Link
              to="/wawasan"
              className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-500 text-neutral-950 font-bold text-xs uppercase tracking-wide transition-all shadow-xs"
            >
              <span>🎮 Permainan</span>
            </Link>

            {/* Notification Bell with Red Badge */}
            <div className="relative ml-1">
              <button
                onClick={() => setIsNotifOpen(!isNotifOpen)}
                className="relative p-2 rounded-xl hover:bg-neutral-100 text-neutral-700 hover:text-neutral-950 transition-colors cursor-pointer"
                aria-label="Notifikasi Pengumuman"
              >
                <HiOutlineBell className="w-6 h-6" />
                <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
                </span>
              </button>

              {/* Notification Popover Dropdown */}
              <AnimatePresence>
                {isNotifOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl bg-white p-4 shadow-2xl border border-neutral-100 z-50 space-y-3"
                  >
                    <div className="flex items-center justify-between border-b pb-2">
                      <h4 className="font-display font-bold text-sm text-neutral-900">
                        Pemberitahuan ORMIK ARUNA
                      </h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-800">
                        3 Terbaru
                      </span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-orange-50/70 border border-orange-100 space-y-1">
                        <p className="font-bold text-orange-950">
                          📌 Cek Kelompok Mentor Mahasiswa Baru
                        </p>
                        <p className="text-neutral-600">
                          Daftar pembagian kelompok mentor Day-1 telah dipublikasikan di menu Aktivitas.
                        </p>
                        <span className="text-[10px] text-neutral-400">10 menit yang lalu</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-100 space-y-1">
                        <p className="font-bold text-amber-950">
                          👕 Panduan Atribut & Dresscode Hari Pertama
                        </p>
                        <p className="text-neutral-600">
                          Pastikan membawa name tag terlaminasi dan kemeja putih polos rapi.
                        </p>
                        <span className="text-[10px] text-neutral-400">1 jam yang lalu</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Prominent Aktivitas Action Button */}
            <Link
              to="/aktivitas"
              className="ml-2 inline-flex items-center gap-1.5 px-4.5 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wide transition-all shadow-md shadow-orange-500/20"
            >
              <span>⚡ Cek Kelompok</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition-colors cursor-pointer"
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
              className="lg:hidden border-t border-neutral-100 mt-3 pt-3 space-y-2 overflow-hidden"
            >
              <div className="flex flex-col space-y-1 font-medium text-sm">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-orange-50 text-neutral-800 font-semibold"
                >
                  Beranda
                </Link>
                <Link
                  to="/aktivitas"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-orange-50 text-neutral-800"
                >
                  Aktivitas & Cek Kelompok
                </Link>
                <Link
                  to="/wawasan"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-orange-50 text-neutral-800"
                >
                  Wawasan & ORMAWA
                </Link>
                <Link
                  to="/faq"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-orange-50 text-neutral-800"
                >
                  FAQ (Tanya Jawab)
                </Link>
                <Link
                  to="/galeri"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-orange-50 text-neutral-800"
                >
                  Galeri Dokumentasi
                </Link>
              </div>

              <div className="pt-2 flex flex-col gap-2 border-t border-neutral-100">
                <Link
                  to="/aktivitas"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-xl bg-orange-500 text-white font-bold text-xs uppercase tracking-wider"
                >
                  Cek Kelompok & Mentor
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

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
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-amber-400 hover:bg-amber-500 text-neutral-950 shadow-xl border border-white/50 cursor-pointer flex items-center justify-center"
        aria-label="Kembali ke atas"
      >
        <HiOutlineChevronUp className="w-6 h-6 stroke-[2.5]" />
      </motion.button>

      {/* ORMIK ARUNA Official Footer */}
      <footer className="w-full bg-[#0B2545] text-white pt-14 pb-10 px-4 sm:px-8 xl:px-20 mt-0 relative border-t-4 border-orange-500">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Organization Identity */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-black uppercase tracking-wider">
                  Orientasi Akademik 2026
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-400 text-neutral-950 text-xs font-black uppercase tracking-wider">
                  STT Terpadu Nurul Fikri
                </span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight uppercase mt-3">
                ORMIK ARUNA 2026
              </h2>
              <p className="font-medium text-xs sm:text-sm text-slate-300 mt-1 max-w-lg">
                Mewujudkan mahasiswa baru yang adaptif, berintegritas, kolaboratif, serta memiliki daya saing unggul di era teknologi digital.
              </p>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-200 font-normal">
              <div className="flex items-start gap-3">
                <HiOutlineLocationMarker className="w-5 h-5 shrink-0 text-orange-400 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Kampus B (Pusat Kegiatan ORMIK):</p>
                  <p>Jl. Raya Lenteng Agung No.20, Srengseng Sawah, Jagakarsa, Jakarta Selatan 12610</p>
                  <p className="font-bold text-white mt-1">Kampus A (Rektorat):</p>
                  <p>Jl. Situ Indah No.116, Tugu, Cimanggis, Depok, Jawa Barat 16451</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <HiOutlinePhone className="w-5 h-5 shrink-0 text-amber-400" />
                <p>Help Desk ORMIK: +62-812-9000-2026 (WhatsApp Panitia)</p>
              </div>
              <div className="flex items-center gap-3">
                <HiOutlineMail className="w-5 h-5 shrink-0 text-emerald-400" />
                <p>Email: ormik@nurulfikri.ac.id | info@nurulfikri.ac.id</p>
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
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-orange-500 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                  aria-label={soc.label}
                >
                  <soc.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Middle Column: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-base text-amber-400 tracking-wider uppercase">
              Tautan Cepat
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <Link to="/aktivitas" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <span>→ Cek Kelompok & Mentor</span>
                </Link>
              </li>
              <li>
                <Link to="/aktivitas" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <span>→ Rundown Day 1 - 3</span>
                </Link>
              </li>
              <li>
                <Link to="/wawasan" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <span>→ Panduan SIAKAD & e-Learning</span>
                </Link>
              </li>
              <li>
                <Link to="/wawasan" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <span>→ Profil Prodi TI, SI, & BD</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <span>→ Tanya Jawab (FAQ)</span>
                </Link>
              </li>
              <li>
                <Link to="/galeri" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <span>→ Galeri Memori Kampus</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column: Kampus & Ormawa */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-base text-orange-400 tracking-wider uppercase">
              Program Studi & Layanan
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <p className="font-bold text-white">S1 Teknik Informatika</p>
                <p className="text-[11px] text-slate-400">Software Engineering, Cyber Security, Artificial Intelligence</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <p className="font-bold text-white">S1 Sistem Informasi</p>
                <p className="text-[11px] text-slate-400">Enterprise Systems, Data Science, IT Governance</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <p className="font-bold text-white">S1 Bisnis Digital</p>
                <p className="text-[11px] text-slate-400">Technopreneurship, E-Commerce, Digital Marketing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="max-w-7xl mx-auto border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Panitia ORMIK ARUNA • Sekolah Tinggi Teknologi Terpadu Nurul Fikri.</p>
          <p className="text-slate-400 text-center sm:text-right">
            Satu Hati, Satu Tekad, Menuju Mahasiswa Unggul Berkarakter.
          </p>
        </div>
      </footer>
    </div>
  );
}
