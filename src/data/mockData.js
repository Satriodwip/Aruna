// =========================================================================
// ORMIK ARUNA 2026 OFFICIAL MASTER DATA
// Extracted from Official Guidebook, Rundown CSV, Panduan Penugasan & Perlengkapan
// =========================================================================

export const mockOrmikInfo = {
  nama: 'ORMIK ARUNA 2026',
  tema: 'Rise Together, Shine Forever',
  slogan: 'Gantra Aruna: Become the Architects of Transformation!',
  institusi: 'Sekolah Tinggi Teknologi Terpadu Nurul Fikri (STT-NF)',
  filosofi:
    'Fase transisi pendidikan menuju dunia perkuliahan untuk bertumbuh menjadi individu yang berpengetahuan luas, aktif, dan berkarakter unggul di era transformasi teknologi.',
  visi: 'Mewujudkan mahasiswa baru yang adaptif, berintegritas, kolaboratif, serta memiliki berdaya saing yang baik melalui proses pengenalan dunia kampus sebagai langkah awal menjadi mahasiswa yang unggul.',
  misi: [
    {
      no: 1,
      title: 'Mengenalkan Lingkungan & Budaya Akademik STT-NF',
      desc: 'Membantu mahasiswa baru memahami nilai-nilai luhur kampus, sistem perkuliahan SIAKAD, fasilitas laboratorium, dan etika akademik.',
    },
    {
      no: 2,
      title: 'Menumbuhkan Potensi & Karakter Unggul',
      desc: 'Mendorong mahasiswa baru untuk mengenali dan mengembangkan potensi diri, kepemimpinan adaptif, serta integritas moral yang kokoh.',
    },
    {
      no: 3,
      title: 'Membangun Semangat Kolaborasi & Komunikasi',
      desc: 'Menumbuhkan rasa kebersamaan, toleransi, empati, dan kemampuan bekerja sama lintas program studi.',
    },
    {
      no: 4,
      title: 'Membentuk Sikap Mandiri & Adaptif',
      desc: 'Mempersiapkan mahasiswa baru dalam menghadapi tantangan dunia perkuliahan dan percepatan teknologi digital dengan tangguh.',
    },
    {
      no: 5,
      title: 'Menanamkan Sense of Belonging',
      desc: 'Membangun kebanggaan, tanggung jawab, dan loyalitas terhadap almamater Sekolah Tinggi Teknologi Terpadu Nurul Fikri.',
    },
  ],
  aspekTujuan: [
    {
      aspek: 'Aspek Pengetahuan',
      poin: [
        'Pengenalan visi, misi, dan budaya luhur STT-NF',
        'Pemahaman sistem akademik SIAKAD dan e-Learning',
        'Pengenalan fasilitas laboratorium komputer & inovasi teknologi',
      ],
    },
    {
      aspek: 'Aspek Pengembangan Diri',
      poin: [
        'Pola pikir berkembang (Growth Mindset)',
        'Mengenali minat, bakat, dan potensi diri dalam bidang IT',
        'Manajemen waktu perkuliahan dan proaktivitas',
      ],
    },
    {
      aspek: 'Aspek Kolaborasi',
      poin: [
        'Kerja sama tim dalam tugas kelompok dan proyek kreatif',
        'Komunikasi efektif dan kepemimpinan adaptif',
        'Saling menghargai keberagaman latar belakang',
      ],
    },
    {
      aspek: 'Aspek Karakter',
      poin: [
        'Integritas, kejujuran akademik, dan anti-plagiarisme',
        'Disiplin, tanggung jawab, dan ketepatan waktu',
        'Penerapan 6S (Senyum, Salam, Sapa, Sopan, Santun, Semangat)',
      ],
    },
  ],
};

// Official Rundown Data from Fix Rundown CSV
export const mockJadwalHarian = {
  praOrmik: {
    tanggal: 'Selasa, 1 September 2026',
    lokasi: 'Kampus B STT-NF (Lenteng Agung)',
    waktu: '06:30 - 11:35 WIB',
    sesi: [
      { waktu: '06:30 - 07:00', durasi: '30 menit', kegiatan: 'Kedatangan & Presensi Panitia', pemateri: 'Panitia' },
      { waktu: '07:00 - 07:30', durasi: '30 menit', kegiatan: 'Briefing Panitia', pemateri: 'Panitia' },
      { waktu: '07:30 - 07:40', durasi: '10 menit', kegiatan: 'Mobilisasi Peserta', pemateri: 'LO & Tim Lapangan' },
      { waktu: '07:40 - 07:50', durasi: '10 menit', kegiatan: 'Persiapan dan Presensi Peserta', pemateri: 'Sekretariat & Mentor' },
      { waktu: '07:50 - 08:00', durasi: '10 menit', kegiatan: 'Pembukaan Pra-ORMIK ARUNA 2026', pemateri: 'MC' },
      { waktu: '08:00 - 08:05', durasi: '05 menit', kegiatan: 'Tilawah Al-Qur\'an', pemateri: 'Petugas Tilawah' },
      { waktu: '08:05 - 08:25', durasi: '20 menit', kegiatan: 'Sambutan Project Officer ORMIK ARUNA & Pengenalan OSJUR Kampus', pemateri: 'Deni Yusuf (PO ORMIK 2026)' },
      { waktu: '08:25 - 08:30', durasi: '05 menit', kegiatan: 'Sambutan PO OSJUR Sistem Informasi (SI)', pemateri: 'PO OSJUR SI' },
      { waktu: '08:30 - 08:35', durasi: '05 menit', kegiatan: 'Sambutan PO OSJUR Bisnis Digital (BD)', pemateri: 'PO OSJUR BD' },
      { waktu: '08:35 - 08:40', durasi: '05 menit', kegiatan: 'Sambutan PO OSJUR Teknik Informatika (TI)', pemateri: 'PO OSJUR TI' },
      { waktu: '08:40 - 08:55', durasi: '15 menit', kegiatan: 'Kedisiplinan Time (Sosialisasi Tata Tertib & Atribut)', pemateri: 'Tim Kedisiplinan' },
      { waktu: '08:55 - 09:05', durasi: '10 menit', kegiatan: 'Medis Time (Pencegahan & Protokol Kesehatan)', pemateri: 'Tim Medis' },
      { waktu: '09:05 - 09:35', durasi: '30 menit', kegiatan: 'Kreatif Time (Penjelasan Penugasan & Yel-Yel)', pemateri: 'Divisi Kreatif' },
      { waktu: '09:35 - 09:45', durasi: '10 menit', kegiatan: 'Pembagian Breakout Room / Kelompok', pemateri: 'Divisi Mentor' },
      { waktu: '09:45 - 10:25', durasi: '40 menit', kegiatan: 'Mentor Time (Bonding Kelompok & Perkenalan)', pemateri: 'Mentor Kelompok' },
      { waktu: '10:25 - 10:30', durasi: '05 menit', kegiatan: 'Mobilisasi Peserta OSJUR', pemateri: 'LO' },
      { waktu: '10:30 - 11:10', durasi: '40 menit', kegiatan: 'OSJUR Time (Orientasi Program Studi Masing-Masing)', pemateri: 'Himpunan Jurusan' },
      { waktu: '11:10 - 11:15', durasi: '05 menit', kegiatan: 'Reminder Kedisiplinan & Penugasan H-1', pemateri: 'Tim Kedisiplinan' },
      { waktu: '11:15 - 11:20', durasi: '05 menit', kegiatan: 'Presensi Akhir', pemateri: 'Mentor' },
      { waktu: '11:20 - 11:25', durasi: '05 menit', kegiatan: 'Doa Penutup', pemateri: 'Petugas Doa' },
      { waktu: '11:25 - 11:35', durasi: '10 menit', kegiatan: 'Dokumentasi & Penutupan Pra-ORMIK', pemateri: 'Media & MC' },
    ],
  },
  day1: {
    tanggal: 'Senin, 7 September 2026',
    lokasi: 'Kampus B STT-NF (Auditorium & Ruang Kelas)',
    waktu: '05:30 - 15:35 WIB',
    sesi: [
      { waktu: '05:30 - 06:30', durasi: '60 menit', kegiatan: 'Kedatangan Panitia, Presensi & Briefing Pagi', pemateri: 'Panitia' },
      { waktu: '06:30 - 07:00', durasi: '30 menit', kegiatan: 'Kedatangan, Presensi & Pengecekan Barang Bawaan Peserta', pemateri: 'Tim Kedisiplinan & LO' },
      { waktu: '07:00 - 07:10', durasi: '10 menit', kegiatan: 'Kedisiplinan Time (Pemeriksaan Kerapihan & Atribut)', pemateri: 'Tim Kedisiplinan' },
      { waktu: '07:10 - 07:25', durasi: '15 menit', kegiatan: 'Mobilisasi Peserta ke Main Hall', pemateri: 'LO' },
      { waktu: '07:25 - 07:35', durasi: '10 menit', kegiatan: 'Pembacaan Dzikir Pagi Bersama', pemateri: 'Panitia LDK' },
      { waktu: '07:35 - 07:50', durasi: '15 menit', kegiatan: 'Grand Opening ORMIK ARUNA 2026: Tarian Ondel-Ondel dari FunCraft', pemateri: 'FunCraft Performance' },
      { waktu: '07:50 - 08:00', durasi: '10 menit', kegiatan: 'Pembukaan oleh MC & Tilawah Al-Qur\'an', pemateri: 'MC & Qari' },
      { waktu: '08:00 - 08:10', durasi: '10 menit', kegiatan: 'Pembacaan Pancasila, Lagu Indonesia Raya, Mars & Hymne STT NF', pemateri: 'Seluruh Peserta & Panitia' },
      { waktu: '08:10 - 08:15', durasi: '05 menit', kegiatan: 'Sambutan Project Officer ORMIK ARUNA 2026', pemateri: 'Deni Yusuf' },
      { waktu: '08:15 - 08:25', durasi: '10 menit', kegiatan: 'Sambutan & Peresmian Pembukaan ORMIK 2026 + Dokumentasi', pemateri: 'Dr. Lukman Rosyidi, M.T., M.M. (Ketua STT-NF)' },
      { waktu: '08:25 - 09:15', durasi: '50 menit', kegiatan: 'Materi VMTS, Budaya STT-NF, Kenurulfikrian & Struktur Organisasi', pemateri: 'Salman El Farisi, S.Kom., M.Kom. (Waket 1 Bidang Akademik)' },
      { waktu: '09:15 - 09:30', durasi: '15 menit', kegiatan: 'Sesi Tanya Jawab & Dokumentasi', pemateri: 'Waket 1 & Peserta' },
      { waktu: '09:30 - 09:40', durasi: '10 menit', kegiatan: 'Ice Breaking (Kreatif Time)', pemateri: 'Divisi Kreatif' },
      { waktu: '09:40 - 10:30', durasi: '50 menit', kegiatan: 'Talkshow Penyampaian Kode Etik Mahasiswa & Pengembangan Karir', pemateri: 'Tim Waket 3 & CDC' },
      { waktu: '10:30 - 10:50', durasi: '20 menit', kegiatan: 'Sesi Tanya Jawab, Dokumentasi & Ice Breaking', pemateri: 'CDC & Kreatif' },
      { waktu: '10:50 - 11:40', durasi: '50 menit', kegiatan: 'Talkshow Kode Etik Mahasiswa Terkait Akademik & Kurikulum', pemateri: 'Kepala Program Studi TI, SI, BD' },
      { waktu: '11:40 - 12:00', durasi: '20 menit', kegiatan: 'Sesi Tanya Jawab, Dokumentasi & Mobilisasi', pemateri: 'Kaprodi & LO' },
      { waktu: '12:00 - 13:00', durasi: '60 menit', kegiatan: 'ISHOMA (Istirahat, Sholat Dzuhur & Makan Siang Teka-Teki)', pemateri: 'Mentor & Panitia' },
      { waktu: '13:00 - 13:50', durasi: '50 menit', kegiatan: 'Talkshow Layanan Mahasiswa (BAAK, Perpustakaan, Keuangan)', pemateri: 'Pimpinan Bagian Layanan STT-NF' },
      { waktu: '13:50 - 14:05', durasi: '15 menit', kegiatan: 'Dokumentasi & Ice Breaking', pemateri: 'Kreatif' },
      { waktu: '14:05 - 14:55', durasi: '50 menit', kegiatan: 'Talkshow Fasilitas Mahasiswa (BSP, LTSI, UPT. Laboratorium)', pemateri: 'Kepala UPT Lab & LTSI' },
      { waktu: '14:55 - 15:35', durasi: '40 menit', kegiatan: 'Evaluasi Day 1, Presensi Pulang, Reminder Peralatan Last Day & Penutupan', pemateri: 'Tim Kedisiplinan & PO' },
    ],
  },
  lastDay: {
    tanggal: 'Sabtu, 12 September 2026',
    lokasi: 'Kampus B STT-NF (Lapangan & Hall Utama)',
    waktu: '05:30 - 16:00 WIB',
    sesi: [
      { waktu: '05:30 - 06:30', durasi: '60 menit', kegiatan: 'Kedatangan Panitia, Presensi & Briefing', pemateri: 'Panitia' },
      { waktu: '06:30 - 07:00', durasi: '30 menit', kegiatan: 'Kedatangan, Presensi & Pengecekan Barang Bawaan Peserta', pemateri: 'Tim Kedisiplinan & LO' },
      { waktu: '07:00 - 07:15', durasi: '15 menit', kegiatan: 'Senam Pagi Kebugaran Aruna', pemateri: 'Instruktur Senam' },
      { waktu: '07:15 - 07:25', durasi: '10 menit', kegiatan: 'Performance Pembukaan: Penampilan Pencak Silat', pemateri: 'UKM Pencak Silat STT-NF' },
      { waktu: '07:25 - 07:45', durasi: '20 menit', kegiatan: 'Pembukaan MC, Iklan Sponsor & Tilawah Al-Qur\'an', pemateri: 'MC & Media' },
      { waktu: '07:45 - 07:55', durasi: '10 menit', kegiatan: 'Sambutan Perwakilan Ketua STT NF', pemateri: 'Davied Wahyu Wismanindra, S.Kom., M.M.' },
      { waktu: '07:55 - 08:45', durasi: '50 menit', kegiatan: 'Talkshow Lembaga Mahasiswa (DPM, BEM, LDK SENADA)', pemateri: 'Ketua DPM, Presiden BEM, Ketua LDK' },
      { waktu: '08:45 - 09:50', durasi: '65 menit', kegiatan: 'Talkshow Inspiratif Pemateri Eksternal & Sesi Tanya Jawab', pemateri: 'Guest Speaker Tokoh IT Nasional' },
      { waktu: '09:50 - 10:20', durasi: '30 menit', kegiatan: 'Band Performance & Hiburan Musik', pemateri: 'UKM Musik STT-NF' },
      { waktu: '10:20 - 11:20', durasi: '60 menit', kegiatan: 'ARUNA GOT TALENT (Penampilan Kreatif Terbaik Tiap Kelompok)', pemateri: 'Peserta ORMIK' },
      { waktu: '11:20 - 12:50', durasi: '90 menit', kegiatan: 'Mobilisasi & ISHOMA (Sholat Berjamaah & Makan Siang)', pemateri: 'Seluruh Peserta' },
      { waktu: '12:50 - 14:00', durasi: '70 menit', kegiatan: 'Kunjungan Stand ORMAWA & Expo Komunitas UKM', pemateri: 'Seluruh Stand ORMAWA STT-NF' },
      { waktu: '14:00 - 14:25', durasi: '25 menit', kegiatan: 'Awarding ARUNA (Kelompok Terbaik, Kostum Terbaik, Terdisiplin)', pemateri: 'Panitia ORMIK' },
      { waktu: '14:25 - 14:45', durasi: '20 menit', kegiatan: 'Flashmob Akbar Panitia & Simbolis Penutupan ORMIK ARUNA 2026', pemateri: 'Seluruh Panitia' },
      { waktu: '14:45 - 15:10', durasi: '25 menit', kegiatan: 'Doa Penutup, Presensi Akhir & Sesi Foto Dokumentasi Angkatan', pemateri: 'Media & Tim Dokumentasi' },
      { waktu: '15:10 - 16:00', durasi: '50 menit', kegiatan: 'Operasi Semut (Kebersihan), Sholat Ashar & Dzikir Petang Bersama', pemateri: 'Mentor & Peserta' },
    ],
  },
};

// Official List of Penugasan (Pra-Ormik & Last Day)
export const mockPanduanPenugasan = [
  {
    id: 'tugas-1',
    fase: 'Pra-ORMIK',
    jenis: 'Individu',
    judul: 'Twibbon Resmi ORMIK ARUNA 2026',
    deskripsi: 'Wajib memasang foto profil menggunakan twibbon resmi ORMIK ARUNA 2026 yang disediakan tim Media pada platform Instagram/WhatsApp.',
    ketentuan: [
      'Gunakan template twibbon resolusi tinggi dari panitia Media',
      'Pasang di foto profil atau unggah pada feeds Instagram utama',
      'Wajib tag akun resmi @sttterpadunf dan akun kelompok',
    ],
  },
  {
    id: 'tugas-2',
    fase: 'Pra-ORMIK',
    jenis: 'Kelompok',
    judul: 'Identitas & Akun Instagram Kelompok',
    deskripsi: 'Setiap kelompok membuat akun Instagram khusus dengan feeds yang menarik, rapi, dan mencerminkan karakter nama kelompok Aruna.',
    ketentuan: [
      'Membuat username Instagram resmi kelompok (contoh: @aruna26_kelompok01)',
      'Membuat desain feeds grid 3x3 perkenalan anggota dan karakter kelompok',
      'Mencantumkan logo dan warna identitas kelompok',
    ],
  },
  {
    id: 'tugas-3',
    fase: 'Pra-ORMIK',
    jenis: 'Individu',
    judul: 'Topi DIY Konsep ARUNA',
    deskripsi: 'Membuat topi kreasi buatan tangan (DIY) dengan konsep Aruna menggunakan warna dasar kuning/emas sebagai identitas peserta.',
    ketentuan: [
      'Warna dasar topi dominan kuning/emas',
      'Bahan bebas (kardus, kertas asturo, kain flanel, dsb.)',
      'Kreasi dan ornamen diserahkan ke kreativitas masing-masing peserta',
    ],
  },
  {
    id: 'tugas-4',
    fase: 'Pra-ORMIK',
    jenis: 'Kelompok',
    judul: 'Video Yel-Yel Kelompok',
    deskripsi: 'Merekam video kekompakan dan semangat yel-yel kelompok menyambut ORMIK ARUNA 2026.',
    ketentuan: [
      'Durasi video 1 - 3 menit dengan audio jelas',
      'Menampilkan seluruh anggota kelompok secara kompak',
      'Mentor tidak wajib masuk frame kamera',
      'Gunakan hashtag resmi: #JejakAruna #OrmikAruna #YelYelAruna',
    ],
  },
  {
    id: 'tugas-5',
    fase: 'Pra-ORMIK',
    jenis: 'Individu',
    judul: 'Video Perkenalan Mahasiswa Baru',
    deskripsi: 'Membuat video perkenalan diri berformat Reels/Shorts untuk saling mengenal antar mahasiswa baru.',
    ketentuan: [
      'Wajib memuat: Nama lengkap, Nama panggilan, Jurusan/Prodi, Asal sekolah, Wishlist saat masuk STT-NF, dan Fun fact diri sendiri',
      'Format caption: Kenalan yuk sama salah satu Aruna! [Nama], maba [Jurusan] asal [Asal Sekolah]...',
      'Gunakan hashtag resmi: #JejakAruna #OrmikAruna #ArunaNF',
    ],
  },
  {
    id: 'tugas-6',
    fase: 'Pra-ORMIK',
    jenis: 'Kelompok',
    judul: 'Proyek Sejarah STT-NF (2012 - Sekarang)',
    deskripsi: 'Merangkum sejarah perjalanan kampus STT Terpadu Nurul Fikri sejak berdiri tahun 2012, VMTS, dan identitas kampus.',
    ketentuan: [
      'Pilih format: (A) Desain Infografis A4 dicetak rapi, ATAU (B) Coding Website dengan QR Code/Barcode yang mengarah ke link web sejarah',
      'DILARANG KERAS MENGGUNAKAN AI (NO AI GENERATED CONTENT)',
      'Wajib memuat tonggak sejarah 2012 hingga tahun 2026',
    ],
  },
  {
    id: 'tugas-7',
    fase: 'Pra-ORMIK',
    jenis: 'Kelompok',
    judul: 'Poster "IT Berkarakter"',
    deskripsi: 'Membuat karya desain poster orisinal dengan tema nilai moral, etika, dan integritas praktisi teknologi informasi.',
    ketentuan: [
      'Tema: "IT Berkarakter" (Kejujuran teknologi, etika siber, integritas)',
      'Diunggah di feeds dan story akun Instagram kelompok',
      'DILARANG MENGGUNAKAN AI (NO AI GENERATION)',
    ],
  },
  {
    id: 'tugas-8',
    fase: 'Last Day',
    jenis: 'Individu',
    judul: 'Aruna Reflection: "Apa arti menjadi mahasiswa bagi saya?"',
    deskripsi: 'Menulis satu halaman refleksi mendalam mengenai makna dan tanggung jawab moral sebagai mahasiswa baru STT-NF.',
    ketentuan: [
      'Gunakan kertas berwarna sesuai warna khas prodi (SI = Oranye, TI = Biru Tua, BD = Merah)',
      'DITULIS TANPA NAMA (ANONIM)',
      'Lembar refleksi dimasukkan ke dalam kotak kardus refleksi panitia pada Last Day',
    ],
  },
  {
    id: 'tugas-9',
    fase: 'Last Day',
    jenis: 'Individu',
    judul: 'Buku Jejak Aruna (Ukuran A5)',
    deskripsi: 'Buku dokumentasi perjalanan pribadi mahasiswa baru yang dijilid rapi berukuran A5.',
    ketentuan: [
      'Urutan isi buku: (1) Sampul Jejak Aruna, (2) Profil Diri, (3) Alasan Memilih Jurusan, (4) Target 4 Tahun ke Depan, (5) 5 Hal Ingin Diperbaiki dari 3 Tahun Terakhir, (6) Refleksi 3 Hari ORMIK, (7) Kolom TTD 4 Panitia (Teman dekat, Mentor, 3 Panitia Bebas + 1 Panitia Kedisiplinan)',
      'Format A5: Boleh cetak template panitia atau scrapbook tulisan tangan kreatif',
      'Link contoh flipbook resmi: https://heyzine.com/flip-book/5bdf1ab27d.html',
    ],
  },
];

// Teka-Teki Bekal & Perlengkapan Wajib (Decoded & Interactive Checklist)
export const mockPerlengkapanDanBekal = {
  nameTag: {
    judul: 'Name Tag & Tali Identitas Prodi',
    ketentuan: [
      'Sistem Informasi (SI) = Kertas & Tali Warna ORANYE',
      'Teknik Informatika (TI) & RPL = Kertas & Tali Warna BIRU TUA',
      'Bisnis Digital (BD) = Kertas & Tali Warna MERAH',
      'Isi Name Tag: Nama Kelompok, Nama Lengkap, Pas Foto 3x4, Prodi, Asal Daerah, Cita-cita / Motto Hidup, Logo Kelompok',
      'Dilaminasi rapi agar tahan air dan robek',
    ],
  },
  dresscode: {
    praOrmik: {
      ikhwan: 'Kemeja Putih Seragam Sekolah (panjang/pendek), Celana Hitam Bahan (tidak ketat), Ikat Pinggang Hitam, Sepatu Hitam.',
      akhwat: 'Kemeja Putih Seragam Sekolah panjang, Rok Hitam Bahan (tidak span), Hijab Segiempat Hitam (+ Ciput), Ikat Pinggang.',
    },
    day1: {
      ikhwan: 'Kemeja Putih, Celana Abu-Abu Seragam Sekolah (tidak ketat, no levis), Ikat Pinggang, Kaos Kaki Putih di atas mata kaki, Sepatu Dominan Hitam, Topi DIY.',
      akhwat: 'Kemeja Putih, Rok Abu-Abu Seragam Sekolah (tidak span), Hijab Segiempat Putih (+ Ciput), Kaos Kaki Putih, Sepatu Dominan Hitam, Topi DIY.',
    },
    lastDay: {
      ikhwan: 'Kemeja Batik, Celana Hitam Bahan (tidak ketat), Kaos Kaki Putih di atas mata kaki, Sepatu Dominan Hitam, Topi Caping DIY.',
      akhwat: 'Kemeja Batik, Rok Hitam Bahan (tidak span), Hijab Segiempat Hitam (+ Ciput), Kaos Kaki Putih, Sepatu Dominan Hitam, Topi Caping DIY.',
    },
  },
  bekalDay1: [
    { riddle: 'Pasir Rakyat Jelata + Telur Mata Kedip', arti: 'Nasi Putih + Telur Mata Sapi dalam kotak makan pribadi', kategori: 'Bekal Utama' },
    { riddle: 'Air Lumpur', arti: 'Susu Kotak Rasa Cokelat (Ultra Milk / Milo)', kategori: 'Susu' },
    { riddle: 'Bantal Sobek Isinya Tanah Liat', arti: 'Roti Sobek Isi Cokelat (Sari Roti / sejenis)', kategori: 'Snack 1' },
    { riddle: 'Snack Monyet Petualang', arti: 'Chiki Merek Taro (Net Seaweed / BBQ)', kategori: 'Snack 2' },
    { riddle: 'Biskuit 3 Rahasia', arti: 'Biskuit Merek Oreo Cokelat', kategori: 'Snack 3' },
  ],
  bekalLastDay: [
    { riddle: 'Nasi Perang', arti: 'Nasi Bungkus / Nasi Liwet Perang', kategori: 'Bekal Utama' },
    { riddle: 'Air Bening', arti: 'Air Mineral dalam Tumbler', kategori: 'Minuman' },
    { riddle: 'Air Putih Susu', arti: 'Susu UHT Putih / Full Cream', kategori: 'Susu' },
    { riddle: 'Singkong I Love You', arti: 'Keripik Singkong Kusuka', kategori: 'Snack 1' },
    { riddle: 'Batu Bata Italy', arti: 'Wafer Cokelat Tango', kategori: 'Snack 2' },
    { riddle: 'Mau Mau Lagi', arti: 'Snack Momogi Jagung Bakar', kategori: 'Snack 3' },
  ],
  barangBawaanWajib: [
    'Name Tag resmi dengan tali warna prodi',
    'Buku Kecil Handmade (10 lembar HVS dibagi 2) & Alat Tulis (ATK)',
    'Buku Jejak Aruna ukuran A5',
    'Sandal jepit (wajib) & Goodie bag / Totebag spunbond warna jurusan',
    'Perlengkapan Sholat + Sajadah pribadi',
    'Tumbler / Tempat Minum isi air',
    'Kartu Asuransi Kesehatan (BPJS / KIS)',
    'Topi DIY (Pra/Day 1) & Topi Caping DIY (Last Day)',
    'Gift DIY: Minimal 2 surat pesan kesan anonim untuk Mentor/Panitia (Last Day)',
    'Trash Bag per kelompok untuk Operasi Semut (Last Day)',
  ],
};

// Tata Tertib, Perizinan, & Tingkat Punishment
export const mockTataTertibDanSanksi = {
  prinsip6S: ['Senyum', 'Salam', 'Sapa', 'Sopan', 'Santun', 'Semangat'],
  aturanUtama: [
    'Peserta wajib hadir tepat waktu pukul 06.30 WIB di lokasi kampus.',
    'Wajib menjaga nama baik Almamater STT Terpadu Nurul Fikri dan IM STT NF.',
    'Menerapkan prinsip 6S kepada seluruh panitia, dosen, dan sesama peserta.',
    'Dilarang meninggalkan ruangan kelas/auditorium tanpa izin Tim Kedisiplinan dan Mentor.',
    'Dilarang menggunakan smartphone selama acara berlangsung kecuali mendapat izin resmi.',
    'Dilarang memakai perhiasan, make-up berlebihan, softlens berwarna, tindik, dan tato.',
    'Dilarang keras membawa senjata tajam, rokok, vape, miras, narkoba, dan barang pornografi.',
    'Dilarang melakukan kontak fisik dengan lawan jenis (bukan mahram).',
  ],
  perizinan: {
    diLokasi: 'Izin ke toilet/keperluan mendesak disampaikan langsung ke Tim Kedisiplinan atau Mentor di ruangan.',
    tidakHadir: 'Wajib membuat surat izin resmi dan mengirimkan bukti otentik (Surat Sakit Dokter) via WhatsApp ke Mentor paling lambat H-1 pukul 23.59 WIB.',
    formatPesan: 'Nama Lengkap - Nama Tim/Kelompok - Alasan Izin - Lampiran Bukti Otentik',
  },
  tingkatanSanksi: [
    {
      tingkat: 'Ringan',
      pelanggaran: 'Melanggar aturan tata tertib (1x pelanggaran atribut / keterlambatan minor)',
      sanksi: 'Memungut 10 sampah di area kampus STT-NF.',
      warna: 'border-amber-400 bg-amber-50 text-amber-950',
    },
    {
      tingkat: 'Sedang',
      pelanggaran: 'Melanggar aturan tata tertib (2x pelanggaran berulang / tidak membawa penugasan)',
      sanksi: 'Menyanyikan Lagu Mars STT Nurul Fikri & Membuat surat permintaan maaf tertulis yang ditandatangani minimal 15 Panitia ORMIK.',
      warna: 'border-orange-500 bg-orange-50 text-orange-950',
    },
    {
      tingkat: 'Berat',
      pelanggaran: 'Sudah mendapat sanksi sedang namun masih melakukan pelanggaran disiplin',
      sanksi: 'Evaluasi sidang kedisiplinan langsung dari Project Officer (PO) dan Steering Committee (SC).',
      warna: 'border-rose-500 bg-rose-50 text-rose-950',
    },
    {
      tingkat: 'Khusus',
      pelanggaran: 'Membawa rokok/vape, miras, narkoba, senjata tajam, pelecehan seksual, asusila, atau perkelahian',
      sanksi: 'Dilaporkan langsung ke Rektorat STT Terpadu Nurul Fikri untuk sanksi Drop Out (DO) / tindakan hukum.',
      warna: 'border-red-700 bg-red-100 text-red-950',
    },
  ],
};

// Glosarium Resmi Kampus STT-NF
export const mockGlosarium = [
  { istilah: 'ORMIK', definisi: 'Orientasi Mahasiswa Baru; rangkaian resmi pengenalan kampus bagi mahasiswa baru STT-NF.' },
  { istilah: 'STT NF', definisi: 'Sekolah Tinggi Teknologi Terpadu Nurul Fikri, perguruan tinggi teknologi berkarakter di Depok & Jakarta.' },
  { istilah: 'IM STT NF', definisi: 'Ikatan Mahasiswa STT Nurul Fikri; wadah payung organisasi seluruh mahasiswa di kampus.' },
  { istilah: '6S', definisi: 'Prinsip budaya adab yang wajib diterapkan: Senyum, Salam, Sapa, Sopan, Santun, dan Semangat.' },
  { istilah: 'Project Officer (PO)', definisi: 'Ketua penanggung jawab utama seluruh pelaksanaan teknis ORMIK ARUNA 2026 (Deni Yusuf).' },
  { istilah: 'Steering Committee (SC)', definisi: 'Dewan pengarah dan penasihat strategis pelaksanaan ORMIK.' },
  { istilah: 'Mentor', definisi: 'Panitia pendamping kelompok mahasiswa baru yang membimbing selama masa orientasi.' },
  { istilah: 'Tim Kedisiplinan', definisi: 'Divisi panitia yang mengawasi tata tertib, atribut, waktu, dan etika peserta.' },
  { istilah: 'SIAKAD', definisi: 'Sistem Informasi Akademik kampus STT-NF untuk KRS, nilai, jadwal kuliah, dan presensi.' },
  { istilah: 'H-1', definisi: 'Batas akhir konfirmasi izin ketidakhadiran (maksimal pukul 23.59 WIB sehari sebelum acara).' },
];

// Official Sponsors & Partners
export const mockSponsors = [
  { nama: 'SE\'INDONESIA', peran: 'Main Sponsor', badge: 'bg-[#FF5722] text-white' },
  { nama: 'Cybertrend Technology', peran: 'Supporting Sponsor', badge: 'bg-[#0B2545] text-[#FFC700]' },
  { nama: 'Pandawa 24 Jam Print', peran: 'Official Printing Partner', badge: 'bg-[#00C49F] text-neutral-950' },
  { nama: 'FunCraft Performance', peran: 'Official Cultural Partner', badge: 'bg-amber-400 text-neutral-950' },
];

// Student Mock Groups & Mentors
export const mockGugusList = [
  {
    id: 'g-01',
    nama: 'Kelompok 01 - Turing',
    prodi: 'Teknik Informatika (TI)',
    colorTag: 'TI • Tali Biru Tua',
    ruang: 'Lab Software Engineering - Gedung B Lt. 2',
    mentor: 'Kak Farhan Pratama & Kak Nabila Syifa',
    kontakMentor: '+62 812-3456-7890',
    peserta: [
      { nim: '0110226001', nama: 'Aditya Pratama Putra', jalur: 'SNBT' },
      { nim: '0110226002', nama: 'Ahmad Fauzi Ridwan', jalur: 'Mandiri' },
      { nim: '0110226003', nama: 'Aisyah Humaira', jalur: 'Prestasi' },
    ],
  },
  {
    id: 'g-02',
    nama: 'Kelompok 02 - Lovelace',
    prodi: 'Sistem Informasi (SI)',
    colorTag: 'SI • Tali Oranye',
    ruang: 'Ruang Seminar B201 - Gedung B Lt. 2',
    mentor: 'Kak Dimas Anugrah & Kak Putri Lestari',
    kontakMentor: '+62 813-9876-5432',
    peserta: [
      { nim: '0110126045', nama: 'Budi Santoso Nugroho', jalur: 'SNBP' },
      { nim: '0110126046', nama: 'Citra Kirana Dewi', jalur: 'Mandiri' },
    ],
  },
  {
    id: 'g-03',
    nama: 'Kelompok 03 - Jobs',
    prodi: 'Bisnis Digital (BD)',
    colorTag: 'BD • Tali Merah',
    ruang: 'Incubator Room B305 - Gedung B Lt. 3',
    mentor: 'Kak Kevin Sanjaya & Kak Sarah Amalia',
    kontakMentor: '+62 821-4455-6677',
    peserta: [
      { nim: '0110326089', nama: 'Dimas Wahyu Ramadhan', jalur: 'Mandiri' },
      { nim: '0110326090', nama: 'Eka Nur Safitri', jalur: 'SNBT' },
    ],
  },
];

// Arunapedia Knowledge Items
export const mockArunapedia = [
  {
    id: 'fasilitas-1',
    title: 'SIAKAD STT-NF: Portal Akademik & KRS Mahasiswa',
    category: 'Sistem Akademik',
    icon: '🖥️',
    readTime: '3 Menit',
    excerpt: 'Panduan login SSO mahasiswa baru, pengisian Kartu Rencana Studi (KRS), cek transkrip nilai, dan jadwal kuliah semester 1.',
  },
  {
    id: 'fasilitas-2',
    title: 'e-Learning STT-NF: Kuliah Daring & Pengumpulan Tugas',
    category: 'Platform Belajar',
    icon: '📚',
    readTime: '4 Menit',
    excerpt: 'Akses materi kuliah dari dosen, forum diskusi interaktif, kuis mingguan, dan pengumpulan tugas terintegrasi.',
  },
  {
    id: 'fasilitas-3',
    title: 'Laboratorium Software Engineering & Komputasi Awan',
    category: 'Laboratorium IT',
    icon: '💻',
    readTime: '5 Menit',
    excerpt: 'Fasilitas workstation i7 dengan dual-monitor untuk praktikum pemrograman web, mobile, database, dan cloud architecture.',
  },
  {
    id: 'fasilitas-4',
    title: 'Laboratorium IoT, Jaringan Komputer, & Cyber Security',
    category: 'Laboratorium IT',
    icon: '🛡️',
    readTime: '4 Menit',
    excerpt: 'Pusat riset mikrokontroler Arduino/ESP32, router Cisco, penetration testing lab, dan simulasi jaringan enterprise.',
  },
  {
    id: 'fasilitas-5',
    title: 'Perpustakaan Digital & Ruang Kolaborasi Mahasiswa',
    category: 'Fasilitas Belajar',
    icon: '📖',
    readTime: '3 Menit',
    excerpt: 'Ribuan koleksi e-book IT terakreditasi, akses jurnal internasional IEEE/ACM, dan ruang diskusi ber-AC super nyaman.',
  },
  {
    id: 'fasilitas-6',
    title: 'Inkubator Bisnis & Technopreneurship Corner',
    category: 'Karier & Startup',
    icon: '🚀',
    readTime: '4 Menit',
    excerpt: 'Program pendampingan startup mahasiswa STT-NF untuk melahirkan produk digital bernilai ekonomi tinggi.',
  },
];

// ORMAWA & Komunitas IT STT-NF
export const mockOrmawaList = [
  {
    id: 'ormawa-1',
    nama: 'BEM STT Terpadu Nurul Fikri',
    kategori: 'Lembaga Eksekutif',
    deskripsi: 'Badan Eksekutif Mahasiswa sebagai penggerak utama aspirasi, advokasi kemahasiswaan, dan pengabdian masyarakat.',
    logo: '🏛️',
  },
  {
    id: 'ormawa-2',
    nama: 'DPM STT Terpadu Nurul Fikri',
    kategori: 'Lembaga Legislatif',
    deskripsi: 'Dewan Perwakilan Mahasiswa yang mengawasi kebijakan kampus, perundang-undangan mahasiswa, dan pengawasan BEM.',
    logo: '⚖️',
  },
  {
    id: 'ormawa-3',
    nama: 'NF Computer Club (NFCC)',
    kategori: 'Komunitas Software & Web',
    deskripsi: 'Wadah eksplorasi software development, frontend/backend engineering, mobile development, dan UI/UX design.',
    logo: '💻',
  },
  {
    id: 'ormawa-4',
    nama: 'Cyber Security Club STT-NF',
    kategori: 'Keamanan Siber & CTF',
    deskripsi: 'Komunitas peminat ethical hacking, reverse engineering, digital forensics, dan tim kompetisi Capture the Flag (CTF).',
    logo: '🛡️',
  },
  {
    id: 'ormawa-5',
    nama: 'Robotic & IoT Developer Club',
    kategori: 'Hardware & IoT',
    deskripsi: 'Riset embedded systems, otomasi mikrokontroler, drone, dan kompetisi robotika nasional.',
    logo: '🤖',
  },
  {
    id: 'ormawa-6',
    nama: 'LDK SENADA STT-NF',
    kategori: 'Kerohanian Islam',
    deskripsi: 'Lembaga Dakwah Kampus pembina karakter Islami, kajian keilmuan, tahsin Al-Qur\'an, dan kepedulian sosial.',
    logo: '🕌',
  },
  {
    id: 'ormawa-7',
    nama: 'GDG on Campus (Google Developer)',
    kategori: 'Komunitas Global',
    deskripsi: 'Komunitas developer binaan Google untuk mempelajari teknologi Android, Flutter, Firebase, dan AI.',
    logo: '🌐',
  },
  {
    id: 'ormawa-8',
    nama: 'NFMEDIA (Pers & Multimedia)',
    kategori: 'Media & Kreatif',
    deskripsi: 'Lembaga pers mahasiswa, videografi, fotografi jurnalistik, podcast kampus, dan content creation.',
    logo: '🎬',
  },
];

// Comprehensive FAQ Data matching the Guidebook
export const mockFAQ = [
  {
    id: 'faq-1',
    kategori: 'Atribut & Name Tag',
    pertanyaan: 'Apa ketentuan warna tali dan name tag untuk masing-masing program studi?',
    jawaban:
      'Ketentuan warna resmi name tag dan tali: Program Studi Sistem Informasi (SI) menggunakan warna ORANYE, Teknik Informatika (TI) & RPL menggunakan warna BIRU TUA, dan Bisnis Digital (BD) menggunakan warna MERAH. Name tag wajib memuat foto 3x4, nama kelompok, asal daerah, dan cita-cita, serta dilaminasi rapi.',
  },
  {
    id: 'faq-2',
    kategori: 'Teka-Teki Bekal',
    pertanyaan: 'Apa arti teka-teki bekal "Pasir Rakyat Jelata + Telur Mata Kedip" pada Day 1?',
    jawaban:
      'Artinya adalah Nasi Putih (Pasir Rakyat Jelata) + Telur Mata Sapi/Ceplok (Telur Mata Kedip) yang dikemas rapi dalam kotak makan pribadi. Disertai susu kotak cokelat ("Air Lumpur") dan roti sobek cokelat ("Bantal Sobek Isinya Tanah Liat").',
  },
  {
    id: 'faq-3',
    kategori: 'Izin & Kehadiran',
    pertanyaan: 'Bagaimana prosedur jika saya berhalangan hadir karena sakit?',
    jawaban:
      'Peserta wajib membuat surat izin tertulis dan melampirkan bukti otentik (Surat Keterangan Dokter) via WhatsApp kepada Mentor masing-masing paling lambat H-1 pukul 23.59 WIB dengan format: Nama Lengkap - Nama Tim - Alasan Izin - Lampiran Bukti Otentik.',
  },
  {
    id: 'faq-4',
    kategori: 'Buku Jejak Aruna',
    pertanyaan: 'Apa saja isi Buku Jejak Aruna ukuran A5 dan bagaimana formatnya?',
    jawaban:
      'Buku Jejak Aruna berukuran A5, dijilid rapi, berisi urutan: Sampul Jejak Aruna, Profil Diri, Alasan Memilih Jurusan, Target 4 Tahun ke Depan, 5 Hal Ingin Diperbaiki dari 3 Tahun Terakhir, Refleksi 3 Hari ORMIK, dan Kolom TTD 4 Panitia (Teman dekat, Mentor, 3 Panitia Bebas + 1 Panitia Kedisiplinan). Boleh mencetak template resmi atau membuat scrapbook kreatif tulisan tangan.',
  },
  {
    id: 'faq-5',
    kategori: 'Dresscode & Sepatu',
    pertanyaan: 'Apakah boleh mengenakan celana jeans (levis) atau sepatu selain warna hitam?',
    jawaban:
      'Tidak diperbolehkan. Celana wajib bahan kain sopan (bukan jeans/levis/span), dan sepatu wajib berwarna dominan HITAM dengan kaos kaki putih di atas mata kaki.',
  },
  {
    id: 'faq-6',
    kategori: 'Penugasan AI',
    pertanyaan: 'Apakah diperbolehkan menggunakan AI untuk tugas infografis sejarah atau poster?',
    jawaban:
      'DILARANG KERAS. Sesuai panduan penugasan resmi, tugas Sejarah STT-NF dan Poster "IT Berkarakter" memiliki aturan ketat NO AI untuk menguji kreativitas dan integritas orisinal mahasiswa baru.',
  },
  {
    id: 'faq-7',
    kategori: 'Tata Tertib & Sanksi',
    pertanyaan: 'Apa sanksi jika terlambat atau melanggar aturan tata tertib?',
    jawaban:
      'Terdapat 4 tingkatan sanksi: Sanksi Ringan (memungut 10 sampah di kampus), Sanksi Sedang (menyanyikan Lagu Mars STT-NF dan membuat surat permintaan maaf ditandatangani 15 panitia), Sanksi Berat (sidang evaluasi langsung bersama PO & SC), dan Sanksi Khusus (dilaporkan ke pihak Rektorat kampus untuk sanksi akademik tegas).',
  },
];

// Mock Photos for 3D Perspective Tunnel Gallery
export const mockGaleri = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
    title: 'Upacara Pembukaan ORMIK ARUNA',
    description: 'Semarak penyambutan 1.000+ Ksatria Muda di Kampus B STT Terpadu Nurul Fikri.',
    kategori: 'Upacara',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop',
    title: 'Kreasi Topi DIY & Formasi Mahasiswa',
    description: 'Kreativitas mahasiswa baru mengenakan topi kuning ARUNA dan formasi akbar.',
    kategori: 'Mozaik',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    title: 'Sesi Praktikum Lab & Demo Cloud Computing',
    description: 'Pengenalan fasilitas laboratorium pemrograman dan high-performance computing.',
    kategori: 'Aktivitas',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
    title: 'Expo Stand ORMAWA & Komunitas IT',
    description: 'Kunjungan interaktif mahasiswa baru ke stan NFCC, Cyber Security, dan Robotic.',
    kategori: 'Aktivitas',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    title: 'Diskusi Kelompok & Bimbingan Mentor',
    description: 'Suasana keakraban kelompok mahasiswa baru bersama mentor pendamping.',
    kategori: 'Aktivitas',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    title: 'Inagurasi Akbar & Tari Tradisional Betawi',
    description: 'Pertunjukan tari FunCraft Ondel-Ondel dan selebrasi penutupan ORMIK.',
    kategori: 'Seni',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1200&auto=format&fit=crop',
    title: 'Suasana Perpustakaan Digital STT-NF',
    description: 'Eksplorasi ruang literatur dan ribuan e-book sains teknologi.',
    kategori: 'Lingkungan',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
    title: 'Talkshow Kode Etik & Kepemimpinan Karir',
    description: 'Paparan inspiratif dari Wakil Ketua Bidang Akademik dan CDC.',
    kategori: 'Upacara',
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop',
    title: 'Kuliah Umum Guest Speaker Industri IT',
    description: 'Berbagi wawasan teknologi masa depan dan peluang karier digital global.',
    kategori: 'Upacara',
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop',
    title: 'Aksi Senam Pagi & Olahraga Bersama',
    description: 'Menjaga kebugaran dan solidaritas antar mahasiswa baru.',
    kategori: 'Aktivitas',
  },
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    title: 'Penyerahan Awarding Kategori Terbaik',
    description: 'Apresiasi untuk kelompok terkompak, penugasan terbaik, dan peserta terdisiplin.',
    kategori: 'Seni',
  },
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
    title: 'Pesta Cahaya & Flashmob Penutupan ARUNA',
    description: 'Momen puncak selebrasi penutupan rangkaian Orientasi Akademik 2026.',
    kategori: 'Seni',
  },
];
