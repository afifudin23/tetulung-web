// Konten halaman Kontak
import { MessageCircle, Mail, MapPin, Clock, MessageSquareText, ShieldCheck, Users } from "lucide-react";
import { WHATSAPP_LINK, FOOTER } from "./site";

export const KONTAK_HIGHLIGHTS = [
  {
    icon: MessageSquareText,
    title: "Respon Cepat",
    description: "Kami akan merespon secepat mungkin",
  },
  {
    icon: ShieldCheck,
    title: "Aman & Terpercaya",
    description: "Privasi Anda aman bersama Tetulung",
  },
  {
    icon: Users,
    title: "Siap Membantu",
    description: "Kami hadir untuk membantu Anda",
  },
];

export const CONTACT_CHANNELS = [
  {
    icon: MessageCircle,
    iconBg: "linear-gradient(135deg, #34d399, #059669)",
    title: "WhatsApp",
    description: "Cara tercepat untuk terhubung dengan kami",
    value: FOOTER.contact.phone,
    valueColor: "#059669",
    href: WHATSAPP_LINK,
  },
  {
    icon: Mail,
    iconBg: "linear-gradient(135deg, #4079e2, #2563e0)",
    title: "Email",
    description: "Kirim email kapan saja",
    value: FOOTER.contact.email,
    valueColor: "#2563e0",
    href: `mailto:${FOOTER.contact.email}`,
  },
  {
    icon: "instagram",
    iconBg: "linear-gradient(135deg, #f58529, #dd2a7b 55%, #8134af)",
    title: "Instagram",
    description: "Follow dan DM kami di Instagram",
    value: "@tetulung29",
    valueColor: "#dd2a7b",
    href: "https://www.instagram.com/tetulung29?igsh=aWtqenJjM3dibWFo",
  },
  {
    icon: MapPin,
    iconBg: "linear-gradient(135deg, #4079e2, #2563e0)",
    title: "Lokasi",
    description: "Kami berdomisili di Indonesia",
    value: "Indonesia",
    valueColor: "#14355c",
  },
  {
    icon: Clock,
    iconBg: "linear-gradient(135deg, #4079e2, #2563e0)",
    title: "Jam Operasional",
    description: "Kami siap melayani Anda",
    value: "Setiap Hari 08.00 - 20.00 WIB",
    valueColor: "#14355c",
  },
];

export const FORM_SUBJECTS = [
  "Pertanyaan Umum",
  "Bantuan Transaksi",
  "Menjadi Tukang Tulung",
  "Kerja Sama",
  "Saran & Masukan",
  "Lainnya",
];

export const KONTAK_FAQ = [
  {
    question: "Bagaimana cara menghubungi admin Tetulung?",
    answer:
      "Anda bisa menghubungi kami melalui WhatsApp, Email, atau mengisi formulir pesan di atas.",
  },
  {
    question: "Berapa lama admin merespon pesan?",
    answer:
      "Kami akan merespon pesan Anda secepat mungkin, maksimal 1x24 jam pada jam operasional.",
  },
  {
    question: "Apakah layanan Tetulung tersedia di seluruh Indonesia?",
    answer:
      "Ya, Tetulung siap melayani di seluruh wilayah Indonesia selama ada koneksi internet.",
  },
  {
    question: "Bagaimana jika saya mengalami masalah saat menggunakan aplikasi?",
    answer:
      "Jangan khawatir! Hubungi kami dan tim kami akan dengan senang hati membantu menyelesaikan masalah Anda.",
  },
];
