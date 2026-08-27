# Arsitektur Sistem & Teknologi: Portal Orientasi Mahasiswa

Pendekatan arsitektur memisahkan antara *Frontend* dan *Backend* (Headless CMS / REST API) untuk skalabilitas dan kemudahan pengembangan yang paralel. Kombinasi React.js di Frontend dan framework PHP seperti Laravel di Backend akan memastikan integrasi yang efisien, terutama untuk menangani manajemen basis data yang kompleks dan request API dari portal.

## 1. Tech Stack
*   **Frontend Repository:**
    *   **Framework:** React.js (menggunakan Vite untuk *build tool* yang cepat).
    *   **Styling:** Tailwind CSS (untuk implementasi UI kustom yang responsif dengan cepat).
    *   **State Management & API Fetching:** Axios dan React Query (untuk *caching* data jadwal/gugus).
    *   **Animasi:** Framer Motion & React Scroll Parallax.
    *   **Router:** React Router DOM.
*   **Backend / API Repository:**
    *   **Framework:** Laravel (sangat cocok untuk membangun RESTful API yang aman dan terstruktur untuk fitur Cek Gugus serta autentikasi admin panitia).
    *   **Database:** MySQL / PostgreSQL.
*   **Version Control:** Git & GitHub/GitLab (menggunakan sistem *branching* berbasis fitur).

## 2. High-Level Architecture Flow
```text
[ Client / Browser ] 
       |
       v (HTTP Requests)
[ React.js Frontend (Vite) ]  <--- Asset statis di-serve via CDN (Vercel/Netlify)
       |
       v (REST API JSON via Axios)
[ Laravel API Gateway ] <--- Autentikasi, Rate Limiting, Business Logic (Cek Gugus)
       |
       v (Eloquent ORM)
[ Database MySQL ]
```

## 3. Struktur Direktori Frontend (React)
```text
src/
├── assets/          # Gambar, ikon, font (Batik, Logo)
├── components/      # Komponen reusable (Button, Navbar, Footer, Card, Accordion)
├── hooks/           # Custom hooks (contoh: useFetchData)
├── layouts/         # Layout wrapper (MainLayout)
├── pages/           # Halaman utama (Home, Aktivitas, Wawasan, FAQ, Galeri)
├── services/        # Konfigurasi Axios & pemanggilan API (api.js, gugusService.js)
├── styles/          # CSS global (index.css dengan config Tailwind)
├── utils/           # Fungsi helper (format tanggal, string formatter)
├── App.jsx          # Setup React Router
└── main.jsx         # Entry point aplikasi
```
