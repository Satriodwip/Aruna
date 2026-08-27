import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiOutlineSearch,
  HiOutlineCalendar,
  HiOutlineUserGroup,
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
  HiOutlineClipboardCheck,
  HiOutlineClock,
  HiOutlineSparkles,
  HiOutlineExternalLink,
  HiOutlineInformationCircle,
  HiOutlineLightBulb,
} from 'react-icons/hi';
import { Spinner } from '../components/common/Spinner';
import { checkGugusByNIM } from '../services/gugusService';
import {
  mockJadwalHarian,
  mockPanduanPenugasan,
  mockPerlengkapanDanBekal,
} from '../data/mockData';
import { nayaSittingSmile, nayaSuitSmile, nayaHeadChat } from '../assets';

export default function Aktivitas() {
  const [activeMainTab, setActiveMainTab] = useState('cek-kelompok'); // 'cek-kelompok', 'rundown', 'penugasan', 'bekal-riddle', 'dresscode'
  const [nimInput, setNimInput] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [searchError, setSearchError] = useState(null);

  // Rundown Day Sub-tab
  const [activeRundownDay, setActiveRundownDay] = useState('day1'); // 'pra', 'day1', 'lastDay'

  // Penugasan Filter Sub-tab
  const [activeTaskFilter, setActiveTaskFilter] = useState('Semua'); // 'Semua', 'Pra-ORMIK', 'Last Day', 'Individu', 'Kelompok'

  // Riddle Reveals & Checklists
  const [revealedRiddles, setRevealedRiddles] = useState({});
  const [checkedItems, setCheckedItems] = useState({});

  const sampleNIMs = [
    { label: 'Teknik Informatika (TI)', nim: '0110226001' },
    { label: 'Sistem Informasi (SI)', nim: '0110126045' },
    { label: 'Bisnis Digital (BD)', nim: '0110326089' },
  ];

  const handleSearch = async (e) => {
    if (e) e.preventDefault();
    if (!nimInput.trim()) {
      setSearchError('Silakan masukkan NIM resmi Anda.');
      setSearchResult(null);
      return;
    }

    setIsSearching(true);
    setSearchError(null);
    setSearchResult(null);

    try {
      const response = await checkGugusByNIM(nimInput);
      setSearchResult(response.data);
    } catch (err) {
      setSearchError(err.message || 'Data kelompok tidak ditemukan.');
    } finally {
      setIsSearching(false);
    }
  };

  const toggleRiddle = (idx) => {
    setRevealedRiddles((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const toggleCheckItem = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredTasks = mockPanduanPenugasan.filter((task) => {
    if (activeTaskFilter === 'Semua') return true;
    if (activeTaskFilter === 'Pra-ORMIK') return task.fase === 'Pra-ORMIK';
    if (activeTaskFilter === 'Last Day') return task.fase === 'Last Day';
    if (activeTaskFilter === 'Individu') return task.jenis === 'Individu';
    if (activeTaskFilter === 'Kelompok') return task.jenis === 'Kelompok';
    return true;
  });

  return (
    <div className="w-full py-10 px-4 sm:px-8 xl:px-20 space-y-12 relative bg-white">
      {/* Header Section */}
      <section className="text-center max-w-4xl mx-auto space-y-4 relative z-10">
        <span className="px-4 py-1 rounded-full bg-[#FFF1EC] text-[#FF5722] text-xs font-black uppercase tracking-wider border border-[#FF5722]/30">
          Pusat Operasional Peserta ORMIK ARUNA 2026
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-neutral-900 tracking-tight">
          Aktivitas, Penugasan & Rundown
        </h1>
        <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
          Akses mandiri pembagian kelompok mentor, jadwal rangkaian acara Pra-ORMIK hingga Last Day, panduan penugasan, teka-teki bekal, dan tata tertib dresscode.
        </p>
      </section>

      {/* Main Feature Navigation Tabs */}
      <div className="max-w-5xl mx-auto flex justify-center relative z-10">
        <div className="inline-flex p-1.5 bg-neutral-100 rounded-2xl max-w-full overflow-x-auto gap-1 border border-neutral-200">
          {[
            { key: 'cek-kelompok', label: '⚡ Cek Kelompok' },
            { key: 'rundown', label: '📅 Jadwal & Rundown' },
            { key: 'penugasan', label: '📋 Panduan Penugasan' },
            { key: 'bekal-riddle', label: '🍱 Bekal & Riddle' },
            { key: 'dresscode', label: '👔 Ketentuan Dresscode' },
          ].map((tab) => {
            const isActive = activeMainTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveMainTab(tab.key)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#FF5722] text-white shadow-md'
                    : 'text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          TAB 1: CEK KELOMPOK & MENTOR (NIM SEARCH)
         ========================================================================= */}
      {activeMainTab === 'cek-kelompok' && (
        <section className="max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="rounded-3xl p-2 bg-linear-to-r from-[#FF5722] via-[#FFC700] to-[#00C49F] shadow-xl">
            <div className="rounded-2xl p-6 sm:p-10 bg-white space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 p-1 flex items-center justify-center border border-orange-200 shadow-xs">
                    <img src={nayaSittingSmile} alt="Naya Mascot" className="w-10 h-10 object-contain" />
                  </div>
                  <div>
                    <h2 className="font-display font-black text-xl text-neutral-900">
                      Pencarian Kelompok & Mentor Mahasiswa Baru
                    </h2>
                    <p className="text-xs text-neutral-500 font-sans">
                      Ketik NIM resmi Anda untuk melihat nama kelompok, mentor, dan ruang berkumpul di Kampus B.
                    </p>
                  </div>
                </div>
              </div>

              {/* Input Form */}
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <HiOutlineSearch className="absolute left-4 top-4 w-5 h-5 text-neutral-400" />
                    <input
                      type="text"
                      value={nimInput}
                      onChange={(e) => setNimInput(e.target.value)}
                      placeholder="Masukkan NIM Anda (contoh: 0110226001)"
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-neutral-300 focus:outline-hidden focus:ring-2 focus:ring-[#FF5722] text-sm bg-neutral-50 focus:bg-white font-medium"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSearching}
                    className="px-8 py-3.5 rounded-xl bg-[#FF5722] hover:bg-[#E64A19] text-white font-black text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSearching ? <Spinner size="sm" /> : <span>Cari Kelompok →</span>}
                  </button>
                </div>

                {/* Sample NIM Shortcut Chips */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="text-xs text-neutral-500 font-medium">Contoh NIM:</span>
                  {sampleNIMs.map((sample) => (
                    <button
                      key={sample.nim}
                      type="button"
                      onClick={() => {
                        setNimInput(sample.nim);
                        setTimeout(() => handleSearch(), 50);
                      }}
                      className="px-2.5 py-1 rounded-lg bg-neutral-100 hover:bg-orange-100 border border-neutral-200 text-neutral-700 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      {sample.label}: <strong className="text-[#FF5722]">{sample.nim}</strong>
                    </button>
                  ))}
                </div>
              </form>

              {/* Error Message */}
              {searchError && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2"
                >
                  <HiOutlineExclamationCircle className="w-5 h-5 shrink-0" />
                  <span>{searchError}</span>
                </motion.div>
              )}

              {/* Search Results Display */}
              {searchResult && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl bg-neutral-50 border-2 border-orange-200 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200 pb-3">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#FF5722] block">
                        Hasil Verifikasi Peserta
                      </span>
                      <h3 className="font-display font-black text-xl text-neutral-900">
                        {searchResult.mahasiswa.nama}
                      </h3>
                      <p className="text-xs text-neutral-500 font-sans">
                        NIM: {searchResult.mahasiswa.nim} • Jalur: {searchResult.mahasiswa.jalur}
                      </p>
                    </div>
                    <span className="px-3.5 py-1 rounded-full bg-[#0B2545] text-[#FFC700] text-xs font-bold w-fit">
                      {searchResult.gugus.colorTag}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                    <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1">
                      <p className="text-neutral-400 font-bold uppercase text-[10px]">Nama Kelompok:</p>
                      <p className="text-sm font-black text-neutral-900">{searchResult.gugus.nama}</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1">
                      <p className="text-neutral-400 font-bold uppercase text-[10px]">Ruang Berkumpul (Kampus B):</p>
                      <p className="text-sm font-bold text-neutral-900">{searchResult.gugus.ruang}</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1">
                      <p className="text-neutral-400 font-bold uppercase text-[10px]">Mentor Pendamping:</p>
                      <p className="text-sm font-bold text-neutral-900">{searchResult.gugus.mentor}</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1">
                      <p className="text-neutral-400 font-bold uppercase text-[10px]">Kontak WhatsApp Mentor:</p>
                      <a
                        href={`https://wa.me/${searchResult.gugus.kontakMentor.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-black text-[#00C49F] hover:underline flex items-center gap-1"
                      >
                        <span>{searchResult.gugus.kontakMentor}</span>
                        <HiOutlinePhone className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          TAB 2: JADWAL & RUNDOWN KEGIATAN (PRA-ORMIK, DAY 1, LAST DAY)
         ========================================================================= */}
      {activeMainTab === 'rundown' && (
        <section className="max-w-5xl mx-auto space-y-6 relative z-10">
          {/* Day Sub-tabs */}
          <div className="flex justify-center gap-2">
            {[
              { key: 'pra', label: 'Pra-ORMIK (1 Sept 2026)', desc: 'Kampus B' },
              { key: 'day1', label: 'Day 1 (7 Sept 2026)', desc: 'Grand Opening' },
              { key: 'lastDay', label: 'Last Day (12 Sept 2026)', desc: 'Expo & Inagurasi' },
            ].map((day) => {
              const isActive = activeRundownDay === day.key;
              return (
                <button
                  key={day.key}
                  type="button"
                  onClick={() => setActiveRundownDay(day.key)}
                  className={`px-5 py-3 rounded-2xl text-left border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0B2545] text-white border-[#FFC700] shadow-md font-bold'
                      : 'bg-white hover:bg-neutral-50 border-neutral-200 text-neutral-800'
                  }`}
                >
                  <span className="text-xs block opacity-80">{day.desc}</span>
                  <span className="text-sm font-display font-black block">{day.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Day Header Banner */}
          {(() => {
            const currentSchedule =
              activeRundownDay === 'pra'
                ? mockJadwalHarian.praOrmik
                : activeRundownDay === 'day1'
                ? mockJadwalHarian.day1
                : mockJadwalHarian.lastDay;

            return (
              <div className="rounded-3xl p-6 bg-white border border-neutral-200 shadow-md space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4">
                  <div>
                    <span className="text-[10px] font-black uppercase text-[#FF5722] tracking-wider">
                      Jadwal Resmi Berdasarkan Juknis CSV
                    </span>
                    <h3 className="font-display font-black text-2xl text-neutral-900">
                      {currentSchedule.tanggal}
                    </h3>
                    <p className="text-xs text-neutral-500 font-sans">
                      📍 Lokasi: {currentSchedule.lokasi} • Waktu: {currentSchedule.waktu}
                    </p>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-xl bg-orange-100 text-[#FF5722] font-black text-xs w-fit">
                    {currentSchedule.sesi.length} Sesi Terjadwal
                  </span>
                </div>

                {/* Timeline Table */}
                <div className="divide-y divide-neutral-100">
                  {currentSchedule.sesi.map((sesi, sIdx) => (
                    <div
                      key={sIdx}
                      className="py-3 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-orange-50/50 px-2 rounded-xl transition-colors"
                    >
                      <div className="flex items-start sm:items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-800 font-bold text-xs flex items-center justify-center shrink-0">
                          {sIdx + 1}
                        </span>
                        <div>
                          <h4 className="font-display font-bold text-sm sm:text-base text-neutral-900">
                            {sesi.kegiatan}
                          </h4>
                          <p className="text-xs text-neutral-500 font-sans">
                            Pelaksana / Pemateri: <strong className="text-neutral-800">{sesi.pemateri}</strong>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 sm:text-right shrink-0 pl-11 sm:pl-0">
                        <span className="px-2.5 py-1 rounded-md bg-[#FFF1EC] text-[#FF5722] text-xs font-black">
                          {sesi.waktu}
                        </span>
                        <span className="text-[11px] text-neutral-400 font-medium">({sesi.durasi})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </section>
      )}

      {/* =========================================================================
          TAB 3: PANDUAN PENUGASAN (PRA-ORMIK & LAST DAY)
         ========================================================================= */}
      {activeMainTab === 'penugasan' && (
        <section className="max-w-5xl mx-auto space-y-6 relative z-10">
          {/* Sub-filter chips */}
          <div className="flex justify-center gap-2">
            {['Semua', 'Pra-ORMIK', 'Last Day', 'Individu', 'Kelompok'].map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActiveTaskFilter(f)}
                className={`px-4 py-2 rounded-xl font-display font-bold text-xs transition-all cursor-pointer ${
                  activeTaskFilter === f
                    ? 'bg-[#0B2545] text-[#FFC700] shadow-sm'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTasks.map((task) => (
              <div
                key={task.id}
                className="p-6 rounded-3xl bg-white border-2 border-neutral-200 hover:border-[#FF5722] shadow-md hover:shadow-xl transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-orange-100 text-[#FF5722] text-[10px] font-black uppercase tracking-wider">
                      {task.fase} • {task.jenis}
                    </span>
                    {task.id === 'tugas-6' || task.id === 'tugas-7' ? (
                      <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 text-[10px] font-black">
                        🚫 NO AI
                      </span>
                    ) : null}
                  </div>

                  <h3 className="font-display font-black text-lg text-neutral-900">
                    {task.judul}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                    {task.deskripsi}
                  </p>

                  <div className="p-3 rounded-xl bg-neutral-50 space-y-1.5 text-xs font-sans border border-neutral-100">
                    <p className="font-bold text-neutral-900">📌 Ketentuan Pengerjaan:</p>
                    <ul className="list-disc list-inside space-y-1 text-neutral-600">
                      {task.ketentuan.map((k, kIdx) => (
                        <li key={kIdx}>{k}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {task.id === 'tugas-9' && (
                  <a
                    href="https://heyzine.com/flip-book/5bdf1ab27d.html"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#00C49F] hover:bg-[#00A887] text-neutral-950 font-black text-xs uppercase tracking-wider transition-all shadow-sm"
                  >
                    <span>📖 Buka Contoh Flipbook Buku Jejak Aruna</span>
                    <HiOutlineExternalLink className="w-4 h-4 font-bold" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* =========================================================================
          TAB 4: BEKAL & RIDDLE (SOLVER & CHECKLIST)
         ========================================================================= */}
      {activeMainTab === 'bekal-riddle' && (
        <section className="max-w-5xl mx-auto space-y-8 relative z-10">
          {/* Day 1 Bekal Riddles */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white border-2 border-orange-200 shadow-md space-y-6">
            <div className="flex items-center gap-3 border-b pb-3">
              <span className="text-3xl">🍱</span>
              <div>
                <h3 className="font-display font-black text-xl text-neutral-900">
                  Teka-Teki Bekal Day 1 (Senin, 7 September 2026)
                </h3>
                <p className="text-xs text-neutral-500 font-sans">
                  Klik kartu untuk melihat bocoran makna teka-teki makanan/minuman yang wajib dibawa.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockPerlengkapanDanBekal.bekalDay1.map((item, idx) => {
                const isRevealed = revealedRiddles[`day1-${idx}`];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleRiddle(`day1-${idx}`)}
                    className={`p-4 rounded-2xl border-2 transition-all cursor-pointer select-none space-y-2 ${
                      isRevealed
                        ? 'bg-emerald-50 border-emerald-400'
                        : 'bg-orange-50/60 border-orange-300 hover:border-[#FF5722]'
                    }`}
                  >
                    <span className="text-[10px] font-black uppercase text-neutral-500 block">
                      {item.kategori}
                    </span>
                    <h4 className="font-display font-black text-sm text-neutral-900">
                      "{item.riddle}"
                    </h4>
                    <div className="pt-2 border-t border-neutral-200/60 text-xs">
                      {isRevealed ? (
                        <p className="font-bold text-emerald-800">
                          ✅ Artinya: <strong>{item.arti}</strong>
                        </p>
                      ) : (
                        <span className="text-[#FF5722] font-bold flex items-center gap-1">
                          <HiOutlineLightBulb className="w-4 h-4" /> Klik untuk buka bocoran
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Last Day Bekal Riddles */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white border-2 border-amber-200 shadow-md space-y-6">
            <div className="flex items-center gap-3 border-b pb-3">
              <span className="text-3xl">🎉</span>
              <div>
                <h3 className="font-display font-black text-xl text-neutral-900">
                  Teka-Teki Bekal Last Day (Sabtu, 12 September 2026)
                </h3>
                <p className="text-xs text-neutral-500 font-sans">
                  Bekal dan snack untuk perayaan inagurasi penutupan ORMIK.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockPerlengkapanDanBekal.bekalLastDay.map((item, idx) => {
                const isRevealed = revealedRiddles[`last-${idx}`];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleRiddle(`last-${idx}`)}
                    className={`p-4 rounded-2xl border-2 transition-all cursor-pointer select-none space-y-2 ${
                      isRevealed
                        ? 'bg-emerald-50 border-emerald-400'
                        : 'bg-amber-50/60 border-amber-300 hover:border-amber-500'
                    }`}
                  >
                    <span className="text-[10px] font-black uppercase text-neutral-500 block">
                      {item.kategori}
                    </span>
                    <h4 className="font-display font-black text-sm text-neutral-900">
                      "{item.riddle}"
                    </h4>
                    <div className="pt-2 border-t border-neutral-200/60 text-xs">
                      {isRevealed ? (
                        <p className="font-bold text-emerald-800">
                          ✅ Artinya: <strong>{item.arti}</strong>
                        </p>
                      ) : (
                        <span className="text-amber-700 font-bold flex items-center gap-1">
                          <HiOutlineLightBulb className="w-4 h-4" /> Klik untuk buka bocoran
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Checklist of Mandatory Items */}
          <div className="rounded-3xl p-6 sm:p-8 bg-[#0B2545] text-white shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <h3 className="font-display font-black text-xl text-white">
                  Checklist Barang Bawaan Wajib Mahasiswa
                </h3>
                <p className="text-xs text-slate-300 font-sans">
                  Centang perlengkapan yang sudah kamu siapkan agar tidak terkena sanksi kedisiplinan.
                </p>
              </div>
              <span className="px-3.5 py-1 rounded-full bg-[#FFC700] text-[#0B2545] font-black text-xs">
                {Object.values(checkedItems).filter(Boolean).length} / {mockPerlengkapanDanBekal.barangBawaanWajib.length} Siap
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {mockPerlengkapanDanBekal.barangBawaanWajib.map((item, idx) => {
                const isChecked = checkedItems[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleCheckItem(idx)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${
                      isChecked
                        ? 'bg-[#00C49F]/20 border-[#00C49F] text-white'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={!!isChecked}
                      onChange={() => {}}
                      className="w-4 h-4 rounded-md accent-[#FF5722] cursor-pointer"
                    />
                    <span className={`text-xs font-sans ${isChecked ? 'line-through opacity-80' : 'font-medium'}`}>
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          TAB 5: KETENTUAN DRESSCODE & ATRIBUT RESMI
         ========================================================================= */}
      {activeMainTab === 'dresscode' && (
        <section className="max-w-5xl mx-auto space-y-8 relative z-10">
          {/* Name Tag Specification Card */}
          <div className="rounded-3xl p-6 sm:p-8 bg-linear-to-r from-[#FF5722] to-[#FFC700] text-white shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🪪</span>
              <div>
                <h3 className="font-display font-black text-xl sm:text-2xl">
                  {mockPerlengkapanDanBekal.nameTag.judul}
                </h3>
                <p className="text-xs text-orange-100 font-sans">
                  Warna tali dan kertas name tag wajib sesuai dengan program studi mahasiswa baru.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-white text-neutral-900 border-2 border-orange-500 shadow-md">
                <span className="px-2.5 py-0.5 rounded-md bg-[#FF5722] text-white text-[10px] font-black uppercase">
                  Sistem Informasi (SI)
                </span>
                <p className="text-xs font-bold text-neutral-900 mt-2">Warna Tali: ORANYE</p>
              </div>
              <div className="p-4 rounded-2xl bg-white text-neutral-900 border-2 border-blue-600 shadow-md">
                <span className="px-2.5 py-0.5 rounded-md bg-blue-700 text-white text-[10px] font-black uppercase">
                  Teknik Informatika (TI & RPL)
                </span>
                <p className="text-xs font-bold text-neutral-900 mt-2">Warna Tali: BIRU TUA</p>
              </div>
              <div className="p-4 rounded-2xl bg-white text-neutral-900 border-2 border-red-600 shadow-md">
                <span className="px-2.5 py-0.5 rounded-md bg-red-600 text-white text-[10px] font-black uppercase">
                  Bisnis Digital (BD)
                </span>
                <p className="text-xs font-bold text-neutral-900 mt-2">Warna Tali: MERAH</p>
              </div>
            </div>
          </div>

          {/* 3 Days Dresscode Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pra-ORMIK */}
            <div className="p-6 rounded-3xl bg-white border-2 border-neutral-200 shadow-md space-y-4">
              <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-black uppercase tracking-wider block w-fit">
                Pra-ORMIK (1 Sept 2026)
              </span>
              <div className="space-y-3 text-xs font-sans">
                <div className="p-3 rounded-xl bg-orange-50 border border-orange-100 space-y-1">
                  <p className="font-black text-[#FF5722] uppercase text-[10px]">👔 Ikhwan (Putra):</p>
                  <p className="text-neutral-800">{mockPerlengkapanDanBekal.dresscode.praOrmik.ikhwan}</p>
                </div>
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-100 space-y-1">
                  <p className="font-black text-amber-800 uppercase text-[10px]">🧕 Akhwat (Putri):</p>
                  <p className="text-neutral-800">{mockPerlengkapanDanBekal.dresscode.praOrmik.akhwat}</p>
                </div>
              </div>
            </div>

            {/* Day 1 */}
            <div className="p-6 rounded-3xl bg-white border-2 border-[#FF5722] shadow-md space-y-4">
              <span className="px-3 py-1 rounded-full bg-[#FFF1EC] text-[#FF5722] text-xs font-black uppercase tracking-wider block w-fit">
                Day 1 (7 Sept 2026)
              </span>
              <div className="space-y-3 text-xs font-sans">
                <div className="p-3 rounded-xl bg-orange-50 border border-orange-100 space-y-1">
                  <p className="font-black text-[#FF5722] uppercase text-[10px]">👔 Ikhwan (Putra):</p>
                  <p className="text-neutral-800">{mockPerlengkapanDanBekal.dresscode.day1.ikhwan}</p>
                </div>
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-100 space-y-1">
                  <p className="font-black text-amber-800 uppercase text-[10px]">🧕 Akhwat (Putri):</p>
                  <p className="text-neutral-800">{mockPerlengkapanDanBekal.dresscode.day1.akhwat}</p>
                </div>
              </div>
            </div>

            {/* Last Day */}
            <div className="p-6 rounded-3xl bg-white border-2 border-emerald-500 shadow-md space-y-4">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider block w-fit">
                Last Day (12 Sept 2026)
              </span>
              <div className="space-y-3 text-xs font-sans">
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 space-y-1">
                  <p className="font-black text-emerald-800 uppercase text-[10px]">👔 Ikhwan (Putra):</p>
                  <p className="text-neutral-800">{mockPerlengkapanDanBekal.dresscode.lastDay.ikhwan}</p>
                </div>
                <div className="p-3 rounded-xl bg-teal-50 border border-teal-100 space-y-1">
                  <p className="font-black text-teal-800 uppercase text-[10px]">🧕 Akhwat (Putri):</p>
                  <p className="text-neutral-800">{mockPerlengkapanDanBekal.dresscode.lastDay.akhwat}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
