import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Tentang from "./pages/Tentang";
import Layanan from "./pages/Layanan";
import CaraKerja from "./pages/CaraKerja";
import Gabung from "./pages/Gabung";
import Kontak from "./pages/Kontak";
import Faq from "./pages/Faq";
import ComingSoon from "./pages/ComingSoon";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/cara-kerja" element={<CaraKerja />} />
        <Route path="/gabung" element={<Gabung />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<ComingSoon />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
