// Konten halaman FAQ
import { Users, UserRound, Bell, Wallet, Shield } from "lucide-react";

export const FAQ_CATEGORIES = [
  {
    key: "umum",
    icon: Users,
    title: "Umum",
    description: "Informasi umum tentang Tetulung",
  },
  {
    key: "pemohon",
    icon: UserRound,
    title: "Pemohon",
    description: "Untuk Anda yang ingin meminta bantuan",
  },
  {
    key: "tukang-tulung",
    icon: Bell,
    title: "Tukang Tulung",
    description: "Untuk Anda yang ingin membantu orang lain",
  },
  {
    key: "pembayaran",
    icon: Wallet,
    title: "Pembayaran",
    description: "Informasi seputar biaya dan pembayaran",
  },
  {
    key: "keamanan",
    icon: Shield,
    title: "Keamanan",
    description: "Keamanan akun dan data di Tetulung",
  },
];

export const FAQ_ITEMS = [
  {
    category: "umum",
    question: "Apa itu Tetulung?",
    answer:
      "Tetulung adalah platform gotong royong digital yang menghubungkan Pemohon (orang yang membutuhkan bantuan) dengan Tukang Tulung (orang yang siap membantu) di sekitar lokasi Anda.",
  },
  {
    category: "pemohon",
    question: "Bagaimana cara meminta bantuan di Tetulung?",
    answer:
      "Hubungi Tetulung melalui WhatsApp, jelaskan kebutuhan Anda (jenis bantuan, lokasi, dan estimasi biaya), lalu permintaan Anda akan diteruskan kepada Tukang Tulung terdekat.",
  },
  {
    category: "tukang-tulung",
    question: "Bagaimana cara menjadi Tukang Tulung?",
    answer:
      "Daftar melalui halaman Gabung, lengkapi verifikasi identitas (foto KTP dan foto diri), tunggu proses verifikasi tim Tetulung (1x24 jam), lalu mulai menerima permintaan bantuan.",
  },
  {
    category: "umum",
    question: "Apakah saya bisa menjadi Pemohon sekaligus Tukang Tulung?",
    answer:
      "Tentu! Anda bisa meminta bantuan sebagai Pemohon dan juga membantu orang lain sebagai Tukang Tulung.",
  },
  {
    category: "pembayaran",
    question: "Berapa biaya layanan Tetulung?",
    answer:
      "Biaya setiap bantuan disepakati bersama antara Pemohon dan Tukang Tulung sebelum bantuan dikerjakan — transparan tanpa biaya tersembunyi.",
  },
  {
    category: "pembayaran",
    question: "Bagaimana cara pembayaran dilakukan?",
    answer:
      "Pembayaran dapat dilakukan secara tunai atau metode pembayaran lain yang disepakati kedua belah pihak.",
  },
  {
    category: "keamanan",
    question: "Apakah data pribadi saya aman?",
    answer:
      "Ya. Kami menjaga kerahasiaan data Anda dan tidak membagikannya kepada pihak lain tanpa izin Anda.",
  },
  {
    category: "pemohon",
    question: "Bagaimana jika saya mengalami masalah dengan bantuan yang diberikan?",
    answer:
      "Hubungi admin Tetulung melalui WhatsApp. Tim kami akan membantu menyelesaikan kendala Anda.",
  },
  {
    category: "umum",
    question: "Bagaimana cara menghubungi admin Tetulung?",
    answer:
      "Anda dapat menghubungi kami melalui WhatsApp, email info@tetulung.id, atau Instagram @tetulung.id.",
  },
  {
    category: "umum",
    question: "Apakah Tetulung tersedia di seluruh Indonesia?",
    answer:
      "Ya, Tetulung siap melayani di seluruh wilayah Indonesia selama ada koneksi internet.",
  },
];
