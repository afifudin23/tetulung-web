// Konten halaman Cara Kerja
import {
  Smartphone,
  Bell,
  Handshake,
  Bike,
  Star,
  LogIn,
  SquarePen,
  ClipboardList,
  CircleCheck,
  ToggleRight,
  Wallet,
  IdCard,
  MapPin,
  MessagesSquare,
} from "lucide-react";

export const FLOW_STEPS = [
  {
    icon: Smartphone,
    title: "Nyuwun",
    description:
      "Jelaskan kebutuhan Anda, tentukan lokasi, estimasi biaya, lalu kirim permintaan.",
  },
  {
    icon: Bell,
    title: "Nemu Tulung",
    description:
      "Permintaan diteruskan kepada Tukang Tulung terdekat yang sedang aktif.",
  },
  {
    icon: Handshake,
    title: "Sepakat",
    description:
      "Pemohon dan Tukang Tulung saling menyetujui detail pekerjaan melalui WhatsApp atau aplikasi.",
  },
  {
    icon: Bike,
    title: "Nulung",
    description:
      "Tukang Tulung menyelesaikan bantuan sesuai dengan detail yang telah disepakati.",
  },
  {
    icon: Star,
    title: "Rampung",
    description:
      "Setelah selesai, kedua pihak dapat memberikan penilaian untuk menjaga kualitas layanan.",
  },
];

export const ROLE_GUIDES = [
  {
    tone: "blue",
    title: "Untuk Pemohon",
    steps: [
      { icon: LogIn, title: "Login / Daftar", description: "Masuk ke Tetulung melalui WhatsApp." },
      { icon: SquarePen, title: "Klik Nyuwun Tulung", description: "Pilih jenis bantuan yang Anda butuhkan." },
      { icon: ClipboardList, title: "Isi Detail Kebutuhan", description: "Lengkapi informasi seperti lokasi, detail, dan estimasi biaya." },
      { icon: Bell, title: "Tunggu Respon", description: "Permintaan akan diterima oleh Tukang Tulung terdekat." },
      { icon: CircleCheck, title: "Bantuan Selesai", description: "Konfirmasi penerimaan dan beri penilaian." },
    ],
  },
  {
    tone: "teal",
    title: "Untuk Tukang Tulung",
    steps: [
      { icon: LogIn, title: "Login / Daftar", description: "Masuk ke Tetulung melalui WhatsApp." },
      { icon: ToggleRight, title: "Aktifkan Status", description: "Pastikan status Anda aktif untuk menerima permintaan." },
      { icon: Bell, title: "Terima Permintaan", description: "Pilih permintaan yang sesuai dan setujui detailnya." },
      { icon: Bike, title: "Kerjakan Bantuan", description: "Selesaikan bantuan dengan aman dan tepat waktu." },
      { icon: Wallet, title: "Terima Pembayaran", description: "Terima pembayaran sesuai kesepakatan." },
    ],
  },
];

export const SAFETY_FEATURES = [
  {
    icon: IdCard,
    title: "Identitas Diverifikasi",
    description:
      "Setiap Tukang Tulung melewati proses verifikasi identitas untuk menjaga keamanan Anda.",
  },
  {
    icon: Star,
    title: "Sistem Rating",
    description:
      "Penilaian dari setiap transaksi membantu menjaga kualitas layanan Tetulung.",
  },
  {
    icon: MapPin,
    title: "Berbasis Lokasi",
    description:
      "Kami menghubungkan Anda dengan Tukang Tulung terdekat di sekitar lokasi Anda.",
  },
  {
    icon: MessagesSquare,
    title: "Riwayat Transaksi",
    description:
      "Setiap transaksi tercatat rapi sehingga mudah dilacak kapan saja.",
  },
];

export const CARA_KERJA_FAQ = [
  {
    question: "Apakah harus punya aplikasi?",
    answer: "Saat ini layanan Tetulung masih melalui WhatsApp.",
  },
  {
    question: "Bagaimana pembayaran dilakukan?",
    answer:
      "Pembayaran dapat dilakukan secara tunai atau metode pembayaran lain yang disepakati.",
  },
  {
    question: "Bagaimana jika tidak ada Tukang Tulung?",
    answer:
      "Permintaan akan tetap tersimpan dan akan dikirimkan kembali ketika ada Tukang Tulung yang tersedia.",
  },
  {
    question: "Bagaimana jika terjadi kendala?",
    answer:
      "Anda dapat menghubungi admin Tetulung melalui WhatsApp untuk mendapatkan bantuan.",
  },
];
