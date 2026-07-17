// ============================================
// Data terpusat — konten & konfigurasi situs
// ============================================
import {
  UtensilsCrossed,
  ShoppingCart,
  Package,
  Pill,
  FileText,
  MessagesSquare,
  ShieldCheck,
  Zap,
  MapPin,
  Code2,
  Award,
  Users,
} from "lucide-react";

export const WHATSAPP_NUMBER = "6285113628457";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const NAV_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang" },
  { label: "Layanan", href: "/layanan" },
  { label: "Cara Kerja", href: "/cara-kerja" },
  { label: "Gabung", href: "/gabung" },
  { label: "Kontak", href: "/kontak" },
  { label: "FAQ", href: "/faq" },
];

// Layanan yang Dapat Dibantu
export const SERVICES = [
  {
    icon: UtensilsCrossed,
    color: "#e8590c",
    bg: "#fdeee2",
    title: "Titip Beli",
    description: "Titip beli makanan, minuman, atau kebutuhan lainnya.",
  },
  {
    icon: ShoppingCart,
    color: "#02a69c",
    bg: "#dff5f3",
    title: "Belanja Harian",
    description: "Belanja kebutuhan rumah tangga jadi lebih mudah.",
  },
  {
    icon: Package,
    color: "#b07b3c",
    bg: "#f9efe2",
    title: "Ambil Paket",
    description: "Ambil paket atau barang dengan cepat dan aman.",
  },
  {
    icon: Pill,
    color: "#2563e0",
    bg: "#e7f0fd",
    title: "Beli Obat",
    description: "Beli obat di apotek sesuai kebutuhan Anda.",
  },
  {
    icon: FileText,
    color: "#2563e0",
    bg: "#e7f0fd",
    title: "Antar Dokumen",
    description: "Antar dokumen atau berkas ke tujuan.",
  },
  {
    icon: MessagesSquare,
    color: "#2563e0",
    bg: "#e7f0fd",
    title: "Bantuan Lainnya",
    description: "Bantuan ringan lain sesuai kebutuhan Anda.",
  },
];

// Keunggulan di hero (fallback bila tidak pakai ilustrasi)
export const HERO_HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    title: "Tukang Tulung Terverifikasi",
    description: "Aman dan dapat dipercaya.",
  },
  {
    icon: Zap,
    title: "Respon Cepat",
    description: "Membantu Anda lebih cepat.",
  },
  {
    icon: MapPin,
    title: "Terdekat dari Anda",
    description: "Tukang Tulung di sekitar lokasi Anda.",
  },
];

// Section "Tetulung Sedang Dikembangkan"
export const DEV_FEATURES = [
  {
    icon: Code2,
    title: "Fitur Lebih Lengkap",
    description: "Aplikasi akan hadir dengan fitur yang lebih lengkap dan bermanfaat.",
  },
  {
    icon: Award,
    title: "Pengalaman Lebih Baik",
    description: "Kami terus berinovasi untuk memberikan pengalaman terbaik bagi Anda.",
  },
  {
    icon: Users,
    title: "Masukan Anda Berarti",
    description: "Saran dan masukan Anda sangat berarti dalam proses pengembangan aplikasi.",
  },
];

export const FOOTER = {
  tagline:
    "Platform Gotong Royong Digital yang menghubungkan masyarakat untuk saling membantu dalam kebutuhan sehari-hari.",
  nav: {
    title: "Navigasi",
    // FAQ sudah ada di kolom Informasi
    links: NAV_LINKS.filter((l) => !["Kontak", "FAQ"].includes(l.label)),
  },
  info: {
    title: "Informasi",
    links: [
      { label: "Tentang Tetulung", href: "/tentang" },
      { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
      { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  contact: {
    title: "Hubungi Kami",
    phone: "0851-1362-8457",
    email: "tetulung29@gmail.com",
    location: "Indonesia",
  },
  hours: {
    title: "Jam Operasional WhatsApp",
    schedule: "Setiap Hari\n08.00 - 20.00 WIB",
    note: "Kami akan membalas pesan Anda secepat mungkin.",
  },
  copyright: "© 2026 Tetulung. All rights reserved.",
};
