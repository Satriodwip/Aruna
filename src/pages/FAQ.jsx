import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineQuestionMarkCircle,
  HiOutlineSearch,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
} from 'react-icons/hi';
import Accordion from '../components/common/Accordion';
import { mockFAQ } from '../data/mockData';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [feedbackState, setFeedbackState] = useState({});

  const categories = ['Semua', ...new Set(mockFAQ.map((item) => item.kategori))];

  const filteredFAQ = mockFAQ.filter((item) => {
    const matchesCat = activeCategory === 'Semua' || item.kategori === activeCategory;
    const matchesSearch =
      item.pertanyaan.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.jawaban.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleFeedback = (faqId, type) => {
    setFeedbackState((prev) => ({
      ...prev,
      [faqId]: type,
    }));
  };

  return (
    <div className="w-full py-10 px-4 sm:px-8 xl:px-20 space-y-12 relative bg-white">
      {/* Header Banner */}
      <section className="text-center max-w-3xl mx-auto space-y-4 relative z-10">
        <span className="px-4 py-1 rounded-full bg-[#FFF1EC] text-[#FF5722] text-xs font-black uppercase tracking-wider border border-[#FF5722]/30">
          Pusat Bantuan Resmi
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-neutral-900 tracking-tight">
          Tanya Jawab (FAQ) ORMIK ARUNA
        </h1>
        <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-sans">
          Temukan solusi cepat atas pertanyaan seputar teka-teki bekal, warna name tag prodi, izin H-1, Buku Jejak Aruna, dan sanksi kedisiplinan.
        </p>
      </section>

      {/* Search & Filter Bar */}
      <section className="max-w-4xl mx-auto space-y-6 relative z-10">
        <div className="relative">
          <HiOutlineSearch className="absolute left-4 top-4 w-5 h-5 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Ketik pertanyaanmu (contoh: bekal, name tag, izin H-1, Buku Jejak Aruna, dresscode)..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-neutral-300 focus:outline-hidden focus:ring-2 focus:ring-[#FF5722] text-sm bg-neutral-50 focus:bg-white shadow-xs font-medium"
          />
        </div>

        {/* Category Pills */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 bg-neutral-100 rounded-2xl max-w-full overflow-x-auto gap-1 border border-neutral-200">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all cursor-pointer whitespace-nowrap ${
                    isActive ? 'bg-[#FF5722] text-white shadow-xs' : 'text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Accordion List */}
      <section className="max-w-4xl mx-auto space-y-4 relative z-10">
        {filteredFAQ.length > 0 ? (
          <Accordion
            items={filteredFAQ.map((faq) => ({
              id: faq.id,
              title: faq.pertanyaan,
              content: (
                <div className="space-y-4 pt-1 font-sans">
                  <p className="leading-relaxed text-sm sm:text-base text-neutral-700">{faq.jawaban}</p>

                  <div className="flex items-center justify-between pt-3 border-t border-neutral-100 text-xs text-neutral-500">
                    <span>Apakah jawaban ini membantu?</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleFeedback(faq.id, 'yes')}
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg border transition-all cursor-pointer ${
                          feedbackState[faq.id] === 'yes'
                            ? 'bg-emerald-100 border-emerald-400 text-emerald-800 font-bold'
                            : 'bg-neutral-50 hover:bg-neutral-100 border-neutral-200'
                        }`}
                      >
                        <HiOutlineThumbUp className="w-3.5 h-3.5" /> Ya
                      </button>
                      <button
                        type="button"
                        onClick={() => handleFeedback(faq.id, 'no')}
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg border transition-all cursor-pointer ${
                          feedbackState[faq.id] === 'no'
                            ? 'bg-rose-100 border-rose-300 text-rose-800 font-bold'
                            : 'bg-neutral-50 hover:bg-neutral-100 border-neutral-200'
                        }`}
                      >
                        <HiOutlineThumbDown className="w-3.5 h-3.5" /> Tidak
                      </button>
                    </div>
                  </div>
                </div>
              ),
            }))}
          />
        ) : (
          <div className="text-center py-12 bg-white rounded-3xl border border-neutral-200 space-y-3">
            <HiOutlineQuestionMarkCircle className="w-12 h-12 text-neutral-400 mx-auto" />
            <h3 className="font-display font-bold text-lg text-neutral-800">
              Tidak Ada Hasil untuk "{searchQuery}"
            </h3>
            <p className="text-xs text-neutral-500 max-w-sm mx-auto font-sans">
              Coba gunakan kata kunci umum lain atau langsung hubungi tim helpdesk panitia di bawah ini.
            </p>
          </div>
        )}
      </section>

      {/* Helpdesk Contact Banner */}
      <section className="max-w-4xl mx-auto relative z-10">
        <div className="rounded-3xl p-2 bg-linear-to-r from-[#FF5722] to-[#FFC700] shadow-xl">
          <div className="rounded-2xl p-8 sm:p-10 bg-[#0B2545] text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-black uppercase tracking-widest text-[#FFC700] font-sans">
                Pusat Layanan Mahasiswa Baru
              </span>
              <h3 className="text-2xl font-black font-display text-white">
                Help Desk Resmi ORMIK ARUNA 2026
              </h3>
              <p className="text-xs text-slate-300 max-w-md font-sans">
                Panitia ORMIK dan Bagian Kemahasiswaan STT-NF siap melayani kendala teknis dan administrasi peserta.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 font-sans">
              <a
                href="https://wa.me/6281290002026"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF5722] hover:bg-[#E64A19] text-white font-black text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <HiOutlinePhone className="w-4 h-4" />
                WhatsApp Helpdesk
              </a>
              <a
                href="mailto:ormik@nurulfikri.ac.id"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/30 backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
              >
                <HiOutlineMail className="w-4 h-4" />
                Email Panitia
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
