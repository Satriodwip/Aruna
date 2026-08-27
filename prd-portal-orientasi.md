# Product Requirements Document (PRD): Portal Orientasi Mahasiswa
*(Terinspirasi dari Portal PIONIR UGM)*

## 1. Tujuan Produk
Membangun platform website interaktif yang berfungsi sebagai pusat informasi utama dan ensiklopedia bagi mahasiswa baru dalam masa orientasi kampus. Website ini menyajikan jadwal kegiatan, pembagian gugus/kelompok, wawasan fasilitas kampus, serta pusat bantuan (FAQ).

## 2. Target Pengguna
*   **Mahasiswa Baru (User):** Mencari pengumuman, mengakses jadwal hari-H, mencari informasi pembagian kelompok (gugus), mempelajari profil kampus, dan membaca FAQ.
*   **Panitia / Administrator (Admin):** Memperbarui pengumuman, jadwal kegiatan, dan mengelola database mahasiswa (melalui sistem backend).

## 3. Peta Situs (Sitemap)
1. **Beranda (Home)**
2. **Aktivitas** (Cek Gugus & Jadwal Kegiatan Harian)
3. **Wawasan** (Pionirpedia, Booklet Ormawa, Artikel)
4. **Galeri & Kaleidoskop**
5. **FAQ (Tanya Jawab & Pusat Bantuan)**

## 4. Kebutuhan Fungsional
*   **F01. Navigasi & Footer:** 
    *   *Sticky navbar* yang responsif (hamburger menu di mobile). 
    *   Footer dengan kontak Helpdesk, tautan panduan sistem akademik, dan alamat sekretariat.
*   **F02. Beranda:** 
    *   *Hero section* dengan ornamen parallax dan tombol Call-to-Action utama.
    *   Video sambutan pimpinan/ketua pelaksana.
    *   Kartu navigasi (*Highlight cards*) menuju Aktivitas, Wawasan, dan FAQ.
*   **F03. Aktivitas:** 
    *   **Cek Gugus:** Form pencarian berbasis NIM/ID Peserta. Menampilkan hasil berupa Nama, Gugus, Pemandu, dan Lokasi. Harus menangani *error state* jika data tidak ditemukan.
    *   **Jadwal Kegiatan:** *Timeline* atau *Accordion* berisi jadwal per hari, dress code, dan barang bawaan.
*   **F04. Wawasan:** 
    *   Katalog informasi fasilitas kampus.
    *   Direktori/Booklet Organisasi Mahasiswa.
    *   Kumpulan artikel/pengumuman.
*   **F05. Galeri:** Menampilkan dokumentasi kegiatan menggunakan komponen *Lightbox*.
*   **F06. FAQ:** Daftar tanya jawab menggunakan *Accordion* yang dikelompokkan berdasarkan kategori.

## 5. Kebutuhan Non-Fungsional
*   **Responsivitas:** Wajib *Mobile-First*. Layout dan interaksi harus optimal di layar *smartphone*.
*   **Performa:** Penggunaan gambar WebP/AVIF, *lazy loading*, dan optimasi aset agar efek *parallax* tidak menurunkan *framerate*.
*   **UX/State Handling:** Wajib menampilkan *loading spinner* atau *skeleton* saat mengambil data dari API, serta *error handling* yang jelas.
