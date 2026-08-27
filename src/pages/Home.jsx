import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiOutlineChevronRight,
  HiOutlinePlay,
  HiOutlineExternalLink,
  HiOutlineSparkles,
  HiOutlineCheckCircle,
  HiOutlineLightningBolt,
  HiOutlineAcademicCap,
  HiOutlineHeart,
  HiOutlineFire,
  HiOutlineStar,
} from 'react-icons/hi';
import Modal from '../components/common/Modal';
import CountdownTimer from '../components/common/CountdownTimer';
import FloatingParallaxGallery from '../components/features/FloatingParallaxGallery';
import { mockOrmikInfo, mockJadwalHarian } from '../data/mockData';
import {
  nayaSuitHero,
  nayaSittingSmile,
  nayaStanding,
  nayaPosterFase1,
  nayaPosterFase2,
  arunaLogoPetal,
  nayaHeadChat,
} from '../assets';

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedVideoTitle, setSelectedVideoTitle] = useState('');
  const [mascotQuoteIndex, setMascotQuoteIndex] = useState(0);
  const [activeFase, setActiveFase] = useState(1);

  const mascotQuotes = [
    'Hai Ksatria Muda! Selamat datang di STT-NF! 🚀',
    'Sudah cek pembagian kelompok & mentormu belum? ⚡',
    'Yuk siapkan topi kuning DIY dan bekal teka-teki! 🍱',
    'Rise Together, Shine Forever! Semangat! ✨',
  ];

  const openVideo = (title) => {
    setSelectedVideoTitle(title);
    setIsVideoModalOpen(true);
  };

  const handleNextQuote = () => {
    setMascotQuoteIndex((prev) => (prev + 1) % mascotQuotes.length);
  };

  return (
    <div className="w-full space-y-0 relative bg-[#FFFDF9] overflow-hidden">
      {/* ========================================================
          1. CHEERFUL & ENERGETIC HERO SECTION
         ======================================================== */}
      <section className="relative w-full min-h-[92vh] flex flex-col justify-between items-center bg-linear-to-br from-[#FF5722] via-[#FF7A45] to-[#FFC700] pt-12 sm:pt-16 px-4 sm:px-8 text-center overflow-hidden">
        {/* Playful Floating Confetti & Tech Star Elements */}
        <div className="absolute top-12 left-10 text-amber-200 opacity-60 text-2xl animate-spin-slow pointer-events-none">
          ✦
        </div>
        <div className="absolute top-28 right-16 text-white opacity-75 text-3xl animate-bounce-subtle pointer-events-none">
          ★
        </div>
        <div className="absolute bottom-24 left-1/4 text-[#00C49F] opacity-70 text-2xl animate-float pointer-events-none">
          ●
        </div>
        <div className="absolute top-1/3 right-1/4 text-yellow-100 opacity-50 text-4xl pointer-events-none">
          ▲
        </div>

        {/* Dynamic Glow Spheres */}
        <div className="absolute -top-10 -left-10 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[480px] h-[480px] bg-[#FFC700]/30 rounded-full blur-3xl pointer-events-none" />

        {/* Main Hero Container */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2 sm:pt-4">
          
          {/* Left Column: Energetic Slogans, Titles & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Playful Tagline Badge */}
            <div className="inline-flex items-center gap-2 p-1.5 pr-4 rounded-full bg-white/30 backdrop-blur-md border-2 border-white/60 shadow-lg sticker-badge">
              <span className="w-8 h-8 rounded-full bg-[#0B2545] flex items-center justify-center text-sm shadow-xs">
                🔥
              </span>
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-neutral-950 font-sans">
                ORMIK ARUNA 2026 • STT TERPADU NURUL FIKRI
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white leading-[1.08] tracking-tight drop-shadow-md">
              Rise Together, <br />
              <span className="text-[#0B2545] inline-block mt-1 bg-white/90 px-4 py-1 rounded-3xl -rotate-1 shadow-xl">
                Shine Forever! ✨
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-white font-medium drop-shadow-xs max-w-xl font-sans leading-relaxed">
              Selamat datang para <strong>Ksatria Muda</strong>! Mulai petualangan perkuliahanmu di kampus teknologi berkarakter STT-NF dengan semangat inovasi dan persahabatan sejati.
            </p>

            {/* Action Buttons Hub */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-3 font-sans">
              <Link
                to="/aktivitas"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#0B2545] hover:bg-[#061528] text-[#FFC700] font-black text-sm sm:text-base shadow-2xl shadow-[#0B2545]/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border-2 border-[#FFC700]"
              >
                <HiOutlineLightningBolt className="w-5 h-5 text-[#FFC700] stroke-[2.5]" />
                <span>Cek Kelompok & Mentor</span>
                <HiOutlineChevronRight className="w-4 h-4 stroke-[3]" />
              </Link>

              <Link
                to="/wawasan"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white hover:bg-neutral-50 text-neutral-900 font-bold text-sm sm:text-base shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border-2 border-white"
              >
                <span>📖 Panduan & Guidebook</span>
              </Link>
            </div>

            {/* Quick Stat Badges */}
            <div className="grid grid-cols-3 gap-2 pt-2 max-w-lg mx-auto lg:mx-0">
              <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 text-center text-white">
                <span className="font-display font-black text-xl sm:text-2xl text-neutral-950 block">1000+</span>
                <span className="text-[10px] sm:text-xs font-bold font-sans uppercase">Ksatria Muda</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 text-center text-white">
                <span className="font-display font-black text-xl sm:text-2xl text-neutral-950 block">3 Prodi</span>
                <span className="text-[10px] sm:text-xs font-bold font-sans uppercase">TI • SI • BD</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 text-center text-white">
                <span className="font-display font-black text-xl sm:text-2xl text-neutral-950 block">3 Hari</span>
                <span className="text-[10px] sm:text-xs font-bold font-sans uppercase">Momen Seru</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Playful Interactive Naya Mascot with Speech Bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative select-none"
          >
            <div className="relative">
              {/* Cheerful Halo Background */}
              <div className="absolute inset-0 bg-radial from-white/60 via-[#FFC700]/40 to-transparent rounded-full blur-2xl animate-pulse-glow" />

              {/* Floating Stickers around Mascot */}
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [-4, -2, -4] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-6 z-20 px-3.5 py-1.5 rounded-2xl bg-[#00C49F] text-neutral-950 text-xs font-black uppercase tracking-wider shadow-lg border-2 border-white sticker-badge font-sans"
              >
                🌟 Angkatan 2026!
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0], rotate: [4, 6, 4] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute top-1/2 -right-8 z-20 px-3.5 py-1.5 rounded-2xl bg-[#FFC700] text-neutral-950 text-xs font-black uppercase tracking-wider shadow-lg border-2 border-white sticker-badge font-sans"
              >
                🚀 Tech Pioneer
              </motion.div>

              {/* Mascot Floating Character */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 p-2 cursor-pointer"
                onClick={handleNextQuote}
                title="Klik Naya untuk mendengar sapaan seru!"
              >
                <img
                  src={nayaSuitHero}
                  alt="Naya Maskot Resmi ORMIK ARUNA 2026"
                  className="w-64 sm:w-80 md:w-92 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </motion.div>

              {/* Interactive Speech Bubble */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={mascotQuoteIndex}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                  onClick={handleNextQuote}
                  className="absolute -bottom-4 inset-x-0 mx-auto w-11/12 p-3.5 rounded-3xl bg-white/95 backdrop-blur-md border-3 border-[#FF5722] shadow-2xl text-neutral-900 text-center z-30 cursor-pointer hover:bg-orange-50 transition-colors"
                >
                  <div className="flex items-center justify-between border-b border-orange-100 pb-1 mb-1">
                    <span className="text-[10px] font-black uppercase text-[#FF5722] tracking-wider">
                      💬 Naya Berkata (Klik untuk ganti):
                    </span>
                    <span className="text-[10px] font-bold text-neutral-400">✨ Tap!</span>
                  </div>
                  <p className="font-display font-black text-xs sm:text-sm text-neutral-950">
                    "{mascotQuotes[mascotQuoteIndex]}"
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* D-Day Countdown Floating Pill Bar at Bottom */}
        <div className="w-full max-w-4xl mx-auto z-10 mt-8 mb-6">
          <div className="p-4 sm:p-5 rounded-3xl bg-[#0B2545]/90 backdrop-blur-md border-2 border-[#FFC700] text-white shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="px-2.5 py-0.5 rounded-md bg-[#FF5722] text-white text-[10px] font-black uppercase tracking-wider block w-fit mx-auto sm:mx-0">
                D-Day Countdown
              </span>
              <h4 className="font-display font-black text-base sm:text-lg text-white mt-1">
                Menuju Pembukaan ORMIK ARUNA 2026
              </h4>
            </div>
            <CountdownTimer targetDate="2026-09-01T06:30:00+07:00" />
          </div>
        </div>

        {/* Decorative Wave Bottom Divider */}
        <div className="w-full relative z-1">
          <svg className="w-full h-12 sm:h-16 text-[#FFFDF9] preserve-3d" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* ========================================================
          2. PETA PETUALANGAN ARUNA (GAMIFIED LEVEL ROADMAP)
         ======================================================== */}
      <section className="relative w-full py-16 sm:py-24 px-4 sm:px-8 xl:px-20 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-[#FF5722] text-xs font-black uppercase tracking-wider">
              <span>🗺️ Roadmap Orientasi</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-neutral-900">
              Peta Petualangan Ksatria Muda
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-sans leading-relaxed">
              Tiga fase utama yang akan kamu lalui bersama teman sekelompok dan mentor selama ORMIK ARUNA 2026.
            </p>
          </div>

          {/* 3 Interactive Adventure Stages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stage 1 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border-3 border-orange-200 hover:border-[#FF5722] shadow-xl hover:shadow-2xl transition-all card-pop flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-bl-full pointer-events-none -z-0" />
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-2xl bg-[#FF5722] text-white font-black text-lg flex items-center justify-center shadow-md font-display">
                    01
                  </span>
                  <span className="px-3 py-1 rounded-full bg-orange-100 text-[#FF5722] font-black text-xs uppercase font-sans">
                    1 Sept 2026
                  </span>
                </div>
                <h3 className="font-display font-black text-2xl text-neutral-900 group-hover:text-[#FF5722] transition-colors">
                  Pra-ORMIK: The Awakening
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
                  Briefing perdana di Kampus B, pembagian kelompok mentor, pengenalan OSJUR (TI, SI, BD), dan sosialisasi perlengkapan Topi DIY.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#FF5722] font-sans">
                <span>📍 Kampus B (06:30 - 11:35 WIB)</span>
                <span>Level 1 ⚡</span>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border-3 border-amber-300 hover:border-[#FFC700] shadow-xl hover:shadow-2xl transition-all card-pop flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-100 rounded-bl-full pointer-events-none -z-0" />
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-2xl bg-[#FFC700] text-neutral-950 font-black text-lg flex items-center justify-center shadow-md font-display">
                    02
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-black text-xs uppercase font-sans">
                    7 Sept 2026
                  </span>
                </div>
                <h3 className="font-display font-black text-2xl text-neutral-900 group-hover:text-amber-700 transition-colors">
                  Day 1: Grand Quest VMTS
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
                  Grand Opening Tari Ondel-Ondel, materi budaya akademik Kenurulfikrian oleh Waket 1, talkshow kode etik, dan makan siang teka-teki bersama.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-amber-800 font-sans">
                <span>📍 Auditorium (05:30 - 15:35 WIB)</span>
                <span>Level 2 🔥</span>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border-3 border-emerald-300 hover:border-[#00C49F] shadow-xl hover:shadow-2xl transition-all card-pop flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100 rounded-bl-full pointer-events-none -z-0" />
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-2xl bg-[#00C49F] text-neutral-950 font-black text-lg flex items-center justify-center shadow-md font-display">
                    03
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-black text-xs uppercase font-sans">
                    12 Sept 2026
                  </span>
                </div>
                <h3 className="font-display font-black text-2xl text-neutral-900 group-hover:text-emerald-700 transition-colors">
                  Last Day: Expo & Victory
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
                  ARUNA Got Talent, pencak silat, jelajah stand UKM & ORMAWA, pengumpulan Buku Jejak Aruna A5, awarding kelulusan, dan flashmob akbar.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#00C49F] font-sans">
                <span>📍 Lapangan & Hall (05:30 - 16:00 WIB)</span>
                <span>Level 3 🏆</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. BENTO GRID PILAR & NILAI LUHUR ARUNA
         ======================================================== */}
      <section className="relative w-full py-16 sm:py-24 px-4 sm:px-8 xl:px-20 bg-linear-to-b from-[#FFFDF9] via-orange-50/50 to-white">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider font-sans">
              🌟 5 Pilar Nilai Keunggulan
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-neutral-900">
              Visi & Nilai Karakter ARUNA
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-sans leading-relaxed">
              "{mockOrmikInfo.visi}"
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Big Bento Card: Visi Hero */}
            <div className="md:col-span-2 lg:col-span-2 p-8 sm:p-10 rounded-3xl bg-linear-to-br from-[#FF5722] to-[#FF8A50] text-white shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="space-y-4 relative z-10">
                <span className="px-3.5 py-1 rounded-full bg-white/20 text-white font-black text-xs uppercase tracking-wider font-sans">
                  GANTRA ARUNA 2026
                </span>
                <h3 className="font-display font-black text-3xl sm:text-4xl leading-snug">
                  Mencetak Talenta Teknologi yang Adaptif, Kolaboratif & Berintegritas
                </h3>
                <p className="text-xs sm:text-sm text-orange-50 font-sans leading-relaxed">
                  Menjadi jembatan emas bagi mahasiswa baru dalam bertransformasi menjadi calon insinyur software, arsitek sistem, dan digital technopreneur unggulan.
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-white/20 text-xs font-bold text-amber-200 font-sans">
                <span>✨ 100% Bebas Perpeloncoan</span>
                <span>•</span>
                <span>🎓 100% Edukatif & Berbudaya</span>
              </div>
            </div>

            {/* Bento Card 2: Pengetahuan */}
            <div className="p-6 rounded-3xl bg-white border-2 border-neutral-200 hover:border-[#FF5722] shadow-lg card-pop space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-3xl">💻</span>
                <h4 className="font-display font-black text-lg text-neutral-900">
                  Akademik & SIAKAD
                </h4>
                <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                  Kuasai sistem KRS, portal e-Learning, dan fasilitas lab komputer mutakhir.
                </p>
              </div>
              <span className="text-[11px] font-bold text-[#FF5722] font-sans">Aspek 01 →</span>
            </div>

            {/* Bento Card 3: Karakter 6S */}
            <div className="p-6 rounded-3xl bg-white border-2 border-neutral-200 hover:border-[#FFC700] shadow-lg card-pop space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-3xl">🤝</span>
                <h4 className="font-display font-black text-lg text-neutral-900">
                  Budaya Adab 6S
                </h4>
                <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                  Senyum, Salam, Sapa, Sopan, Santun, dan Semangat dalam interaksi kampus.
                </p>
              </div>
              <span className="text-[11px] font-bold text-amber-700 font-sans">Aspek 02 →</span>
            </div>

            {/* Bento Card 4: Kolaborasi */}
            <div className="p-6 rounded-3xl bg-white border-2 border-neutral-200 hover:border-[#00C49F] shadow-lg card-pop space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-3xl">🚀</span>
                <h4 className="font-display font-black text-lg text-neutral-900">
                  Kolaborasi Tim
                </h4>
                <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                  Sinergi kelompok, proyek kreatif, dan jaringan pertemanan lintas program studi.
                </p>
              </div>
              <span className="text-[11px] font-bold text-[#00C49F] font-sans">Aspek 03 →</span>
            </div>

            {/* Bento Card 5: Self Growth */}
            <div className="md:col-span-2 lg:col-span-3 p-6 sm:p-8 rounded-3xl bg-[#0B2545] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <span className="px-3 py-1 rounded-full bg-[#FFC700] text-neutral-950 font-black text-xs uppercase font-sans">
                  Growth Mindset
                </span>
                <h4 className="font-display font-black text-xl text-white">
                  Siap Mengeksplorasi Minat & Bakat Teknologi?
                </h4>
                <p className="text-xs text-slate-300 font-sans max-w-xl">
                  Ikuti seluruh rangkaian kegiatan dan raih penghargaan Kelompok Terkompak, Peserta Terdisiplin, dan Karya Poster Terbaik!
                </p>
              </div>
              <Link
                to="/aktivitas"
                className="px-6 py-3 rounded-2xl bg-[#FF5722] hover:bg-[#E64A19] text-white font-black text-xs uppercase tracking-wider shadow-lg shrink-0 cursor-pointer font-sans"
              >
                Lihat Penugasan →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. PERJALANAN MASKOT NAYA (INTERACTIVE EVOLUTION STAGE)
         ======================================================== */}
      <section className="relative w-full py-16 sm:py-24 px-4 sm:px-8 xl:px-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black uppercase tracking-wider font-sans">
              🌱 Teman Perjalananmu
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-neutral-900">
              Evolusi Karakter "Naya"
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-sans leading-relaxed">
              Naya melambangkan tunas semangat awal calon mahasiswa baru yang siap bertumbuh menjadi pribadi berilmu dan berakhlak mulia.
            </p>
          </div>

          {/* Phase Switcher Buttons */}
          <div className="flex justify-center gap-3 font-sans">
            <button
              onClick={() => setActiveFase(1)}
              className={`px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 ${
                activeFase === 1
                  ? 'bg-[#00C49F] text-neutral-950 shadow-lg scale-105 border-2 border-white font-black'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
              }`}
            >
              <span>🌿 Fase 1: Semangat Awal</span>
            </button>
            <button
              onClick={() => setActiveFase(2)}
              className={`px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 ${
                activeFase === 2
                  ? 'bg-[#FF5722] text-white shadow-lg scale-105 border-2 border-white font-black'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
              }`}
            >
              <span>🔥 Fase 2: Pra-ORMIK Evolution</span>
            </button>
          </div>

          {/* Phase Poster Display */}
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              {activeFase === 1 ? (
                <motion.div
                  key="fase1"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl p-4 bg-linear-to-b from-[#00C49F] via-[#0F766E] to-[#0E3B43] shadow-2xl overflow-hidden"
                >
                  <div className="rounded-2xl overflow-hidden bg-slate-900 aspect-3/4 relative">
                    <img
                      src={nayaPosterFase1}
                      alt="Naya Fase 1 - Semangat Awal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="fase2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl p-4 bg-linear-to-b from-[#FF5722] via-[#FFC700] to-[#EA580C] shadow-2xl overflow-hidden"
                >
                  <div className="rounded-2xl overflow-hidden bg-slate-900 aspect-3/4 relative">
                    <img
                      src={nayaPosterFase2}
                      alt="Naya Fase 2 - Pra-ORMIK Evolution"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. SAMBUTAN VIDEO RESMI PIMPINAN KAMPUS STT-NF
         ======================================================== */}
      <section className="relative w-full py-16 sm:py-24 px-4 sm:px-8 xl:px-20 bg-white">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="px-4 py-1.5 rounded-full bg-orange-100 text-[#FF5722] text-xs font-black uppercase tracking-wider font-sans">
              🎥 Pesan Inspiratif Pimpinan
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-neutral-900">
              Sambutan Sivitas Akademika STT-NF
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-sans">
              Motivasi dan pesan hangat dari Ketua STT-NF, Wakil Ketua I, dan Project Officer ORMIK ARUNA 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Sambutan & Peresmian Ketua STT-NF',
                speaker: 'Dr. Lukman Rosyidi, M.T., M.M.',
                role: 'Ketua STT Terpadu Nurul Fikri',
                duration: '08:30',
              },
              {
                title: 'Materi VMTS & Budaya Kenurulfikrian',
                speaker: 'Salman El Farisi, S.Kom., M.Kom.',
                role: 'Wakil Ketua I Bidang Akademik',
                duration: '09:15',
              },
              {
                title: 'Pengantar & Sambutan Project Officer',
                speaker: 'Deni Yusuf',
                role: 'Project Officer ORMIK ARUNA 2026',
                duration: '05:00',
              },
            ].map((video, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                onClick={() => openVideo(video.title)}
                className="rounded-3xl p-2.5 bg-white border-2 border-neutral-200 hover:border-[#FF5722] shadow-lg cursor-pointer group text-left transition-all"
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
          6. 3D PERSPECTIVE TUNNEL GALLERY (KEPT INTACT AS REQUIRED)
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
