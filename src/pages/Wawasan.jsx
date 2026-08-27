import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineSearch,
  HiOutlineExternalLink,
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
  HiOutlineShieldCheck,
  HiOutlineBookOpen,
} from 'react-icons/hi';
import Modal from '../components/common/Modal';
import {
  mockArunapedia,
  mockOrmawaList,
  mockTataTertibDanSanksi,
  mockGlosarium,
  mockSponsors,
} from '../data/mockData';
import { nayaSittingSmile, nayaSuitSmile, nayaHeadChat } from '../assets';

export default function Wawasan() {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'guidebook', 'arunapedia', 'ormawa', 'glosarium'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFacility, setSelectedFacility] = useState(null);

  const filteredFasilitas = mockArunapedia.filter((f) => {
    return (
      f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const filteredOrmawa = mockOrmawaList.filter((o) => {
    return (
      o.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.deskripsi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.kategori.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const filteredGlosarium = mockGlosarium.filter((g) => {
    return (
      g.istilah.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.definisi.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="w-full py-10 px-4 sm:px-8 xl:px-20 space-y-14 relative bg-white">
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto space-y-4 relative z-10">
        <span className="px-4 py-1 rounded-full bg-[#FFF1EC] text-[#FF5722] text-xs font-black uppercase tracking-wider border border-[#FF5722]/30">
          Official Guidebook & Kampuspedia
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-neutral-900 tracking-tight">
          Guidebook, Wawasan & Tata Tertib
        </h1>
        <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto">
          Pusat wawasan resmi mahasiswa baru STT Terpadu Nurul Fikri mengenai kode etik, aturan kedisiplinan, sistem perizinan H-1, glosarium istilah, dan direktori kelembagaan.
        </p>
      </section>

      {/* Filter Tabs & Search Bar */}
      <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        {/* Category Pills */}
        <div className="inline-flex p-1.5 bg-neutral-100 rounded-2xl w-full md:w-auto gap-1 border border-neutral-200 overflow-x-auto">
          {[
            { key: 'all', label: 'Semua' },
            { key: 'guidebook', label: '📜 Tata Tertib & Sanksi' },
            { key: 'arunapedia', label: '💻 Arunapedia (Fasilitas & Lab)' },
            { key: 'ormawa', label: '👥 ORMAWA & Komunitas IT' },
            { key: 'glosarium', label: '📖 Glosarium' },
          ].map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all cursor-pointer select-none whitespace-nowrap flex-1 md:flex-none ${
                  isActive ? 'bg-[#FF5722] text-white shadow-sm' : 'text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <HiOutlineSearch className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari tata tertib / fasilitas..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-hidden focus:ring-2 focus:ring-[#FF5722] text-xs sm:text-sm bg-white font-medium shadow-xs"
          />
        </div>
      </section>

      {/* =========================================================================
          SEKSI 1: TATA TERTIB, PRINSIP 6S, PERIZINAN & 4 TINGKAT SANKSI
         ========================================================================= */}
      {(activeTab === 'all' || activeTab === 'guidebook') && (
        <section className="max-w-7xl mx-auto space-y-8 relative z-10">
          {/* Prinsip 6S & Tata Tertib Utama */}
          <div className="rounded-3xl p-6 sm:p-8 bg-linear-to-br from-[#0B2545] to-[#071930] text-white shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-black uppercase text-[#FFC700] tracking-widest block font-sans">
                  Budaya Luhur Kampus STT-NF
                </span>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
                  Prinsip 6S & Tata Tertib Peserta
                </h2>
              </div>

              {/* 6S Pills */}
              <div className="flex flex-wrap gap-1.5">
                {mockTataTertibDanSanksi.prinsip6S.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-[#FF5722] text-white font-black text-xs uppercase"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200 font-sans">
              {mockTataTertibDanSanksi.aturanUtama.map((aturan, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <HiOutlineCheckCircle className="w-5 h-5 text-[#00C49F] shrink-0 mt-0.5" />
                  <span>{aturan}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Perizinan H-1 & 4 Tingkatan Sanksi */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Panduan Perizinan H-1 */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-orange-50 border-2 border-orange-200 space-y-4">
              <span className="px-3 py-1 rounded-full bg-[#FF5722] text-white text-[10px] font-black uppercase tracking-wider">
                Prosedur Resmi Izin H-1
              </span>
              <h3 className="font-display font-black text-xl text-neutral-900">
                Ketentuan & Format Surat Izin
              </h3>
              <div className="space-y-3 text-xs font-sans text-neutral-700 leading-relaxed">
                <p>
                  <strong>📌 Izin Saat Acara:</strong> {mockTataTertibDanSanksi.perizinan.diLokasi}
                </p>
                <p>
                  <strong>🚨 Izin Tidak Hadir:</strong> {mockTataTertibDanSanksi.perizinan.tidakHadir}
                </p>
                <div className="p-3 rounded-xl bg-white border border-orange-200 space-y-1">
                  <p className="font-bold text-[#FF5722]">Format Pesan WhatsApp ke Mentor:</p>
                  <code className="text-[11px] font-mono block text-neutral-800 bg-neutral-100 p-2 rounded-lg">
                    {mockTataTertibDanSanksi.perizinan.formatPesan}
                  </code>
                </div>
              </div>
            </div>

            {/* 4 Tingkatan Sanksi (Punishment) */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-display font-black text-xl text-neutral-900">
                4 Tingkatan Sanksi Kedisiplinan
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {mockTataTertibDanSanksi.tingkatanSanksi.map((sanksi, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border-2 space-y-2 shadow-xs ${sanksi.warna}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display font-black text-sm uppercase">
                        Sanksi {sanksi.tingkat}
                      </span>
                      <HiOutlineShieldCheck className="w-5 h-5 opacity-75" />
                    </div>
                    <p className="text-xs font-medium font-sans">
                      <strong>Pelanggaran:</strong> {sanksi.pelanggaran}
                    </p>
                    <p className="text-xs font-bold font-sans border-t border-neutral-300/40 pt-1.5">
                      ⚠️ Konsekuensi: {sanksi.sanksi}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          SEKSI 2: ARUNAPEDIA (FASILITAS & LAB KAMPUS STT-NF)
         ========================================================================= */}
      {(activeTab === 'all' || activeTab === 'arunapedia') && (
        <section className="max-w-7xl mx-auto space-y-6 relative z-10">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-orange-100 text-orange-800 flex items-center justify-center font-bold">
                💻
              </span>
              <h2 className="font-display font-black text-xl sm:text-2xl text-neutral-900">
                Arunapedia (Fasilitas & Sistem Kampus STT-NF)
              </h2>
            </div>
            <span className="text-xs font-bold text-neutral-500 font-sans">
              {filteredFasilitas.length} Panduan Tersedia
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFasilitas.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedFacility(item)}
                className="p-6 rounded-3xl bg-white border border-neutral-200 hover:border-[#FF5722] hover:shadow-xl transition-all cursor-pointer space-y-3 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="px-3 py-0.5 rounded-full bg-orange-100 text-[#FF5722] text-[10px] font-black uppercase tracking-wider font-sans">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-neutral-900 group-hover:text-[#FF5722] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                    {item.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-neutral-100 text-xs text-neutral-400 font-sans">
                  <span>⏱️ {item.readTime}</span>
                  <span className="font-bold text-[#FF5722] group-hover:translate-x-1 transition-transform">
                    Baca Panduan →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* =========================================================================
          SEKSI 3: ORMAWA & KOMUNITAS TEKNOLOGI STT-NF
         ========================================================================= */}
      {(activeTab === 'all' || activeTab === 'ormawa') && (
        <section className="max-w-7xl mx-auto space-y-6 relative z-10">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                👥
              </span>
              <h2 className="font-display font-black text-xl sm:text-2xl text-neutral-900">
                ORMAWA & Komunitas Teknologi STT-NF
              </h2>
            </div>
            <span className="text-xs font-bold text-neutral-500 font-sans">
              {filteredOrmawa.length} Lembaga Terdaftar
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredOrmawa.map((ormawa) => (
              <div
                key={ormawa.id}
                className="p-6 rounded-3xl bg-white border border-neutral-200 hover:border-[#FFC700] hover:shadow-lg transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{ormawa.logo}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-black uppercase font-sans">
                      {ormawa.kategori}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-neutral-900">
                    {ormawa.nama}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                    {ormawa.deskripsi}
                  </p>
                </div>
                <div className="pt-2 text-xs font-bold text-[#FF5722] font-sans">
                  Stand Expo Last Day ✨
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* =========================================================================
          SEKSI 4: GLOSARIUM RESMI ORMIK ARUNA 2026
         ========================================================================= */}
      {(activeTab === 'all' || activeTab === 'glosarium') && (
        <section className="max-w-7xl mx-auto space-y-6 relative z-10">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                📖
              </span>
              <h2 className="font-display font-black text-xl sm:text-2xl text-neutral-900">
                Glosarium Istilah Resmi Kampus & Orientasi
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredGlosarium.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-1.5 font-sans">
                <span className="font-display font-black text-sm text-[#FF5722] block">
                  {item.istilah}
                </span>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {item.definisi}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* =========================================================================
          SEKSI 5: SPONSOR & MITRA RESMI KAMPUS
         ========================================================================= */}
      <section className="max-w-5xl mx-auto p-8 rounded-3xl bg-neutral-100 border border-neutral-200 text-center space-y-6">
        <span className="text-[11px] font-black uppercase text-neutral-500 tracking-widest font-sans">
          Didukung Oleh Mitra & Sponsor Resmi
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {mockSponsors.map((sp, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white shadow-xs border border-neutral-200 space-y-1">
              <span className={`px-2 py-0.5 rounded-md text-[9px] font-black uppercase block ${sp.badge}`}>
                {sp.peran}
              </span>
              <h4 className="font-display font-bold text-xs sm:text-sm text-neutral-900 pt-1">
                {sp.nama}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* Facility Detail Modal */}
      <Modal
        isOpen={!!selectedFacility}
        onClose={() => setSelectedFacility(null)}
        title={selectedFacility?.title || 'Panduan Fasilitas STT-NF'}
      >
        {selectedFacility && (
          <div className="space-y-4 text-neutral-800 text-xs sm:text-sm leading-relaxed font-sans">
            <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 flex items-center gap-3">
              <span className="text-3xl">{selectedFacility.icon}</span>
              <div>
                <span className="text-[10px] font-black text-[#FF5722] uppercase tracking-wider">
                  Kategori: {selectedFacility.category}
                </span>
                <h4 className="font-display font-bold text-base text-neutral-900">
                  {selectedFacility.title}
                </h4>
              </div>
            </div>
            <p>{selectedFacility.excerpt}</p>
            <div className="p-3.5 rounded-xl bg-neutral-100 space-y-2 text-xs">
              <p className="font-bold text-neutral-900">📌 Panduan Akses Mahasiswa:</p>
              <ul className="list-disc list-inside space-y-1 text-neutral-600">
                <li>Gunakan email resmi @student.nurulfikri.ac.id untuk otentikasi.</li>
                <li>Fasilitas laboratorium beroperasi setiap hari Senin - Jumat pukul 08:00 - 17:00 WIB.</li>
                <li>Layanan bantuan teknis dapat menghubungi Divisi IT Support ORMIK ARUNA 2026.</li>
              </ul>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
