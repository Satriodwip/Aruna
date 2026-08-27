import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Aktivitas from './pages/Aktivitas';
import Wawasan from './pages/Wawasan';
import Galeri from './pages/Galeri';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="aktivitas" element={<Aktivitas />} />
        <Route path="wawasan" element={<Wawasan />} />
        <Route path="galeri" element={<Galeri />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
