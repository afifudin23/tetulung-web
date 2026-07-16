// Konten halaman Gabung Menjadi Tukang Tulung
import {
  IdCard,
  UserRound,
  Smartphone,
  HeartHandshake,
  BadgeCheck,
  FilePen,
  ShieldCheck,
  ToggleRight,
  ThumbsUp,
  Banknote,
  Clock,
  MapPin,
  Star,
} from "lucide-react";

export const REQUIREMENTS = [
  {
    icon: IdCard,
    color: "#2563e0",
    bg: "#e7f0fd",
    title: "Warga Negara Indonesia",
    description: "Ber-KTP dan berdomisili di Indonesia.",
  },
  {
    icon: UserRound,
    color: "#2563e0",
    bg: "#e7f0fd",
    title: "Usia Minimal 17 Tahun",
    description: "Anda harus berusia minimal 17 tahun.",
  },
  {
    icon: Smartphone,
    color: "#2563e0",
    bg: "#e7f0fd",
    title: "Memiliki Smartphone",
    description: "Memiliki smartphone Android yang terhubung internet.",
  },
  {
    icon: HeartHandshake,
    color: "#2563e0",
    bg: "#e7f0fd",
    title: "Bersedia Membantu Sesama",
    description: "Memiliki niat baik untuk membantu orang lain.",
  },
  {
    icon: BadgeCheck,
    color: "#02a69c",
    bg: "#dff5f3",
    title: "Akun Aktif WhatsApp",
    description: "WhatsApp aktif untuk komunikasi dengan Pemohon.",
  },
];

export const JOIN_STEPS = [
  {
    icon: FilePen,
    title: "Daftar Akun",
    description: "Isi formulir pendaftaran dengan data diri yang valid.",
  },
  {
    icon: IdCard,
    title: "Verifikasi Identitas",
    description: "Unggah foto KTP dan foto diri untuk proses verifikasi.",
  },
  {
    icon: ShieldCheck,
    title: "Tunggu Verifikasi",
    description: "Tim Tetulung akan memverifikasi data Anda (1x24 jam).",
  },
  {
    icon: ToggleRight,
    title: "Akun Aktif",
    description: "Akun Anda aktif dan bisa menerima permintaan bantuan.",
  },
  {
    icon: ThumbsUp,
    title: "Mulai Membantu",
    description: "Terima permintaan dan mulai menjadi Tukang Tulung hebat!",
  },
];

export const BENEFITS = [
  {
    icon: Banknote,
    title: "Penghasilan Tambahan",
    description: "Dapatkan penghasilan dari setiap bantuan yang Anda kerjakan.",
  },
  {
    icon: Clock,
    title: "Waktu Fleksibel",
    description: "Anda bebas menentukan waktu online sesuai ketersediaan Anda.",
  },
  {
    icon: MapPin,
    title: "Area Luas",
    description: "Terima permintaan dari banyak lokasi di sekitar wilayah Anda.",
  },
  {
    icon: Star,
    title: "Rating & Level",
    description:
      "Tingkatkan rating Anda dan dapatkan lebih banyak kepercayaan dari Pemohon.",
  },
];

export const GABUNG_FAQ = [
  {
    question: "Apakah ada biaya untuk mendaftar?",
    answer: "Tidak. Pendaftaran Tukang Tulung 100% gratis.",
  },
  {
    question: "Kapan saya bisa mulai menerima permintaan?",
    answer: "Setelah akun Anda diverifikasi dan diaktifkan oleh tim Tetulung.",
  },
  {
    question: "Bagaimana cara mendapatkan penghasilan?",
    answer:
      "Anda akan mendapatkan penghasilan dari setiap bantuan yang selesai. Pembayaran dilakukan sesuai kesepakatan dengan Pemohon.",
  },
  {
    question: "Bagaimana jika terjadi masalah saat membantu?",
    answer: "Hubungi admin Tetulung melalui WhatsApp. Kami siap membantu.",
  },
  {
    question: "Apakah saya bisa menjadi Pemohon juga?",
    answer:
      "Tentu! Tukang Tulung juga bisa menjadi Pemohon ketika membutuhkan bantuan.",
  },
  {
    question: "Bagaimana sistem penilaian Tukang Tulung?",
    answer:
      "Setiap bantuan yang selesai, Pemohon akan memberikan penilaian. Penilaian baik akan meningkatkan kepercayaan Anda.",
  },
];
