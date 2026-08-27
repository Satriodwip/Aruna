# TODO List & Task Tracker: Portal Orientasi Mahasiswa

## Phase 1: Inisialisasi & Setup Proyek (Minggu 1)
- [x] Setup *repository* Git dan integrasi awal.
- [x] Inisialisasi proyek React menggunakan Vite.
- [x] Instalasi dan konfigurasi Tailwind CSS.
- [x] Instalasi *library* pendukung: `react-router-dom`, `axios`, `framer-motion`, `react-icons`.
- [x] Setup struktur folder (`src/components`, `src/pages`, dll).
- [x] Setup konfigurasi global (warna tema, font utama di `tailwind.config.js`).

## Phase 2: Komponen Dasar & Layouting (Minggu 1-2)
- [x] Buat komponen `Navbar` (Responsif: Hamburger menu untuk mobile).
- [x] Buat komponen `Footer`.
- [x] Buat komponen `Layout` pembungkus.
- [x] Buat *reusable components*: `Button`, `Card`, `Accordion` (untuk FAQ/Jadwal), `Loader/Spinner`.

## Phase 3: Pengembangan Halaman Statis (Minggu 2)
- [x] **Beranda:** Implementasi *Hero section* dengan teks dan tombol.
- [x] **Beranda:** Tambahkan efek *parallax* (ornamen batik/kampus).
- [x] **Beranda:** Implementasi seksi *Highlight Cards*.
- [x] **Wawasan:** Buat layout daftar fasilitas dan organisasi mahasiswa.
- [x] **Galeri:** Implementasi *grid image* dan *Lightbox* modal.
- [x] **FAQ:** Integrasikan data statis JSON FAQ ke dalam komponen `Accordion`.

## Phase 4: Integrasi Data & Fungsionalitas (Minggu 3)
- [x] **Aktivitas (Jadwal):** Buat UI *Timeline* jadwal. Gunakan *mock data* JSON sementara.
- [x] **Aktivitas (Cek Gugus):** Buat form *input search*.
- [x] Setup file layanan API (`src/services/api.js`) menggunakan Axios.
- [x] Hubungkan form Cek Gugus dengan *endpoint* API (Backend Laravel).
- [x] Implementasikan *state* saat proses *fetch* data: *Loading*, *Success* (tampilkan kartu gugus), *Error* (tampilkan peringatan data tidak ditemukan).

## Phase 5: QA, Optimasi & Deployment (Minggu 4)
- [ ] Kompresi semua aset gambar ke format WebP/AVIF.
- [ ] Lakukan *testing* responsivitas di berbagai ukuran layar (DevTools & perangkat asli).
- [ ] Cek *Console* untuk memastikan tidak ada *error* atau *warning* (terutama masalah *key* di map React).
- [ ] Konfigurasi *environment variables* (`.env`) untuk URL API *production*.
- [ ] Build proyek (`npm run build`).
- [ ] *Deployment* aplikasi ke platform *hosting* (contoh: Vercel, Netlify).
