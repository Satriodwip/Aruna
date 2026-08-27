import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HiOutlineChevronRight,
  HiOutlinePlay,
  HiOutlineExternalLink,
  HiOutlineSparkles,
  HiOutlineCheckCircle,
} from 'react-icons/hi';
import Modal from '../components/common/Modal';
import CountdownTimer from '../components/common/CountdownTimer';
import FloatingParallaxGallery from '../components/features/FloatingParallaxGallery';
import { mockOrmikInfo } from '../data/mockData';
import {
  nayaSuitHero,
  nayaSittingSmile,
  nayaStanding,
  nayaPosterFase1,
  nayaPosterFase2,
  arunaLogoPetal,
} from '../assets';

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedVideoTitle, setSelectedVideoTitle] = useState('');

  const openVideo = (title) => {
    setSelectedVideoTitle(title);
    setIsVideoModalOpen(true);
  };

  return (
    <div className="w-full space-y-0 relative">
      {/* ========================================================
          1. HERO SECTION (ORMIK ARUNA 2026 OFFICIAL BRAND PALETTE)
          60% Aruna Orange (#FF5722) | 30% Gold Yellow (#FFC700) | 5% Mint Teal (#00C49F) | 5% Deep Navy (#0B2545)
         ======================================================== */}
      <section className="relative w-full min-h-[94vh] flex flex-col justify-between items-center bg-linear-to-b from-[#FF5722] via-[#FF7A45] to-[#FFC700] pt-14 sm:pt-20 px-4 sm:px-8 text-center overflow-hidden">
        {/* Tech Grid Matrix Overlay (From Moodboard 2) */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:28px_28px]" />

        {/* Ambient Volumetric Glow Orbs */}
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-white/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#FF5722]/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-[#00C49F]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Hero Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 sm:pt-6">
          {/* Left Column: Headlines & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 text-center lg:text-left space-y-5"
          >
            {/* Tagline Slogan Badge (Moodboard 2) */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/30 backdrop-blur-md border border-white/50 text-white shadow-xs">
              <img src={arunaLogoPetal} alt="Aruna Petals" className="w-4 h-4 object-contain" />
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-neutral-950">
                GANTRA ARUNA 2026 • BECOME THE ARCHITECTS OF TRANSFORMATION!
              </span>
            </div>

            {/* Main Headline with Playfair Display Primary Font */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white leading-tight tracking-tight drop-shadow-md">
              ORMIK ARUNA <br />
              <span className="text-[#0B2545] block mt-1 drop-shadow-none text-3xl sm:text-5xl md:text-6xl font-black">
                Bertumbuh, Aktif, & Berkarakter
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-white font-medium drop-shadow-xs max-w-2xl pt-1 leading-relaxed font-sans">
              Selamat datang Ksatria Muda di gerbang awal perkuliahan <strong>Sekolah Tinggi Teknologi Terpadu Nurul Fikri</strong>. Bersiaplah menjadi talenta teknologi yang adaptif, berintegritas, dan berdaya saing global.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 font-sans">
              <Link
                to="/aktivitas"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#0B2545] hover:bg-[#061528] text-[#FFC700] font-black text-sm sm:text-base shadow-xl shadow-[#0B2545]/30 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-[#FFC700]/30"
              >
                <span>⚡ Cek Kelompok & Mentor</span>
                <HiOutlineChevronRight className="w-5 h-5 stroke-[2.5]" />
              </Link>

              <Link
                to="/wawasan"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white/95 hover:bg-white text-neutral-900 font-bold text-sm sm:text-base shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-white"
              >
                <span>📖 Panduan Kampus</span>
                <HiOutlineExternalLink className="w-5 h-5 font-bold" />
              </Link>
            </div>

            {/* D-Day Countdown Overlay Box */}
            <div className="pt-4 max-w-md mx-auto lg:mx-0">
              <div className="p-4 rounded-3xl bg-[#0B2545]/90 backdrop-blur-md border border-[#FFC700]/30 text-white shadow-2xl">
                <span className="text-[11px] uppercase font-black tracking-widest text-[#FFC700] block mb-2 font-sans">
                  Hitung Mundur Pembukaan ORMIK ARUNA 2026
                </span>
                <CountdownTimer targetDate="2026-08-31T07:00:00+07:00" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Floating Naya Mascot Character Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col items-center justify-center relative"
          >
            <div className="relative group">
              {/* Glowing Aura Ring */}
              <div className="absolute inset-0 bg-radial from-[#FFC700]/60 via-[#FF5722]/30 to-transparent rounded-full blur-2xl animate-pulse" />

              {/* Floating Mascot with Gentle Idle Animation */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 p-4"
              >
                <img
                  src={nayaSuitHero}
                  alt="Naya Maskot Resmi ORMIK ARUNA 2026"
                  className="w-56 sm:w-68 md:w-76 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              {/* Floating Speech Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-2 sm:bottom-2 inset-x-0 mx-auto w-fit px-4 py-2 rounded-2xl bg-white/95 backdrop-blur-md border-2 border-[#FF5722] shadow-xl text-neutral-900 text-center z-20"
              >
                <span className="text-[10px] font-black uppercase text-[#FF5722] tracking-wider block font-sans">
                  Maskot Resmi
                </span>
                <span className="font-display font-black text-sm text-neutral-950">
                  Hai! Aku Naya 👋
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Wave Bottom Divider */}
        <div className="w-full relative z-1 mt-8">
          <svg className="w-full h-12 sm:h-16 text-white preserve-3d" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* ========================================================
          2. KENALAN DENGAN NAYA (OFFICIAL MASCOT POSTER SHOWCASE)
         ======================================================== */}
      <section className="relative w-full bg-slate-50 py-16 sm:py-24 px-4 sm:px-8 xl:px-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-4 py-1 rounded-full bg-[#FFF1EC] text-[#FF5722] text-xs font-black uppercase tracking-wider border border-[#FF5722]/30">
              Maskot Resmi ORMIK ARUNA 2026
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-neutral-900">
              Perjalanan Karakter "Naya"
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Naya melambangkan tunas semangat awal calon mahasiswa baru yang siap bertumbuh menjadi pribadi berpengetahuan luas, aktif, dan berkarakter unggul di STT-NF.
            </p>
          </div>

          {/* 2 Official Evolution Posters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Poster Fase 1: Naya Awal */}
            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-3xl p-3 bg-linear-to-b from-[#00C49F] via-[#0F766E] to-[#0E3B43] shadow-xl overflow-hidden group"
            >
              <div className="rounded-2xl overflow-hidden bg-slate-900 aspect-3/4 relative">
                <img
                  src={nayaPosterFase1}
                  alt="Naya Fase 1 - Semangat Awal"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Poster Fase 2: Naya Pra-ORMIK Evolution */}
            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-3xl p-3 bg-linear-to-b from-[#FF5722] via-[#FFC700] to-[#EA580C] shadow-xl overflow-hidden group"
            >
              <div className="rounded-2xl overflow-hidden bg-slate-900 aspect-3/4 relative">
                <img
                  src={nayaPosterFase2}
                  alt="Naya Fase 2 - Pra-ORMIK Evolution"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. FILOSOFI & VISI MISI ORMIK ARUNA 2026 (GRAND DESIGN)
         ======================================================== */}
      <section className="relative w-full bg-white py-16 sm:py-24 px-4 sm:px-8 xl:px-20">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-[#FFF1EC] text-[#FF5722] text-xs font-black uppercase tracking-wider border border-[#FF5722]/30">
              Grand Design Resmi 2026
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-neutral-900">
              Filosofi & Visi Misi ARUNA
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              {mockOrmikInfo.filosofi}
            </p>
          </div>

          {/* Visi Card with Official Aruna Color Ratios (60% Orange, 30% Gold, 5% Teal, 5% Navy) */}
          <div className="rounded-3xl p-3 bg-linear-to-r from-[#FF5722] via-[#FFC700] to-[#00C49F] shadow-xl">
            <div className="rounded-2xl p-8 sm:p-12 bg-white text-center space-y-4">
              <span className="px-4 py-1 rounded-full bg-[#FF5722] text-white font-black text-xs uppercase tracking-widest">
                VISI UTAMA
              </span>
              <h3 className="font-display font-black text-xl sm:text-3xl text-neutral-900 max-w-4xl mx-auto leading-snug">
                "{mockOrmikInfo.visi}"
              </h3>
            </div>
          </div>

          {/* 5 Misi Grid */}
          <div className="space-y-6">
            <div className="text-center">
              <span className="font-display font-bold text-xs uppercase tracking-widest text-[#FF5722]">
                5 Pilar Misi Strategis
              </span>
              <h3 className="font-display font-black text-2xl text-neutral-900">
                Mewujudkan Mahasiswa Unggul & Berkarakter
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockOrmikInfo.misi.map((m) => (
                <div
                  key={m.no}
                  className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-[#FF5722] hover:shadow-lg transition-all space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FF5722] text-white font-black flex items-center justify-center text-sm shadow-xs font-display">
                    0{m.no}
                  </div>
                  <h4 className="font-display font-bold text-base sm:text-lg text-neutral-900">
                    {m.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. 4 ASPEK TUJUAN UTAMA (PENGETAHUAN, PENGEMBANGAN DIRI, KOLABORASI, KARAKTER)
         ======================================================== */}
      <section className="relative w-full bg-[#0B2545] text-white py-16 sm:py-24 px-4 sm:px-8 xl:px-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5722]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00C49F]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-[#FFC700] text-[#0B2545] text-xs font-black uppercase tracking-wider">
              Empat Dimensi Pembinaan
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white">
              Tujuan & Aspek Pengembangan
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-sans">
              Proses orientasi membekali mahasiswa baru pada 4 aspek fundamental kehidupan kampus.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockOrmikInfo.aspekTujuan.map((aspek, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-2 bg-white/10 backdrop-blur-md border border-white/15 hover:border-[#FFC700] transition-all hover:scale-105 group"
              >
                <div className="p-6 rounded-2xl bg-[#071930] h-full flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <span className="px-3 py-1 rounded-full bg-[#FF5722]/20 text-[#FF7A45] text-[11px] font-black uppercase tracking-wider block w-fit font-sans">
                      Aspek 0{idx + 1}
                    </span>
                    <h3 className="font-display font-black text-lg text-white group-hover:text-[#FFC700] transition-colors">
                      {aspek.aspek}
                    </h3>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-300 border-t border-white/10 pt-4 font-sans">
                    {aspek.poin.map((p, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <HiOutlineCheckCircle className="w-4 h-4 text-[#00C49F] shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. SAMBUTAN VIDEO RESMI PIMPINAN KAMPUS STT-NF
         ======================================================== */}
      <section className="relative w-full bg-slate-50 py-16 sm:py-24 px-4 sm:px-8 xl:px-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-[#00C49F]/20 text-[#0F766E] text-xs font-black uppercase tracking-wider border border-[#00C49F]/40">
              Pesan Hangat Sivitas Akademika
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-neutral-900">
              Sambutan Pimpinan STT-NF
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-sans">
              Arahan dan motivasi resmi dari sivitas akademika untuk mahasiswa baru ORMIK ARUNA 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Sambutan & Peresmian Ketua STT Terpadu Nurul Fikri',
                speaker: 'Dr. Lukman Rosyidi, M.T., M.M.',
                role: 'Ketua STT Terpadu Nurul Fikri',
                duration: '08:30',
              },
              {
                title: 'Materi VMTS & Budaya Akademik Kenurulfikrian',
                speaker: 'Salman El Farisi, S.Kom., M.Kom.',
                role: 'Wakil Ketua I Bidang Akademik',
                duration: '09:15',
              },
              {
                title: 'Pengantar & Sambutan Project Officer ARUNA',
                speaker: 'Deni Yusuf',
                role: 'Project Officer ORMIK ARUNA 2026',
                duration: '05:00',
              },
            ].map((video, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                onClick={() => openVideo(video.title)}
                className="rounded-3xl p-2 bg-white border border-neutral-200 shadow-lg cursor-pointer group text-left"
              >
                <div className="bg-neutral-950 rounded-2xl overflow-hidden aspect-video relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-900/60 to-transparent" />
                  
                  {/* Play Pulse Icon */}
                  <div className="w-14 h-14 rounded-full bg-[#FF5722] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform relative z-10">
                    <HiOutlinePlay className="w-7 h-7 ml-0.5" />
                  </div>

                  <span className="absolute bottom-3 right-3 text-[11px] font-bold bg-black/70 text-white px-2.5 py-0.5 rounded-md z-10 font-sans">
                    {video.duration}
                  </span>
                </div>

                <div className="p-4 space-y-1">
                  <h4 className="font-display font-bold text-sm sm:text-base text-neutral-900 group-hover:text-[#FF5722] transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-xs font-semibold text-neutral-700 font-sans">{video.speaker}</p>
                  <p className="text-[11px] text-neutral-400 font-sans">{video.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          6. 3D PERSPECTIVE TUNNEL GALLERY (ORMIK ARUNA 2026 THEME)
         ======================================================== */}
      <FloatingParallaxGallery />

      {/* Video Greeting Modal Dialog */}
      <Modal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        title={selectedVideoTitle || 'Sambutan Resmi ORMIK ARUNA 2026'}
      >
        <div className="space-y-4">
          <div className="aspect-video rounded-2xl bg-neutral-950 flex items-center justify-center text-white border border-neutral-800">
            <div className="text-center p-6 space-y-2">
              <div className="w-14 h-14 rounded-full bg-[#FF5722] text-white flex items-center justify-center mx-auto mb-2 font-bold text-xl">
                ▶
              </div>
              <h4 className="font-display font-bold text-lg text-white">
                {selectedVideoTitle}
              </h4>
              <p className="text-xs text-neutral-400 font-sans">
                ORMIK ARUNA 2026 • Sekolah Tinggi Teknologi Terpadu Nurul Fikri
              </p>
            </div>
          </div>
          <p className="text-xs text-neutral-600 bg-neutral-100 p-3 rounded-xl font-sans">
            💡 Video sambutan resmi juga dapat disaksikan pada kanal YouTube @sttterpadunurulfikri.
          </p>
        </div>
      </Modal>
    </div>
  );
}
