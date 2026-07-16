// Konten halaman Layanan — detail memperluas SERVICES dari site.js
import { ShieldCheck, Zap, LockKeyhole, MapPin } from "lucide-react";
import { SERVICES } from "./site";

const DETAILS = {
  "Titip Beli": {
    description:
      "Tukang Tulung dapat membantu titip beli makanan, minuman, atau oleh-oleh sesuai kebutuhan Anda.",
    items: ["Makanan & Minuman", "Oleh-oleh", "Kebutuhan lainnya"],
  },
  "Belanja Harian": {
    description:
      "Belanja kebutuhan rumah tangga menjadi lebih mudah tanpa harus keluar rumah.",
    items: ["Beras, telur, minyak", "Sabun, deterjen", "Kebutuhan rumah tangga lainnya"],
  },
  "Ambil Paket": {
    description:
      "Tukang Tulung siap membantu mengambil paket Anda di berbagai ekspedisi atau lokasi.",
    items: ["JNE, J&T, SiCepat, dll", "Paket online shop", "Dokumen & barang lainnya"],
  },
  "Beli Obat": {
    description: "Membantu membeli obat di apotek sesuai kebutuhan Anda.",
    items: ["Obat bebas", "Vitamin & suplemen", "Obat sesuai resep*"],
    note: "*Untuk obat resep, harap sertakan foto resep dari dokter",
  },
  "Antar Dokumen": {
    description:
      "Pengantaran dokumen atau berkas penting menjadi lebih praktis dan aman.",
    items: ["Surat & berkas", "Dokumen kantor", "Keperluan administrasi"],
  },
  "Bantuan Lainnya": {
    description:
      "Kebutuhan lain di luar kategori di atas? Tukang Tulung siap membantu Anda.",
    items: ["Antri layanan", "Fotokopi & print", "Isi bensin / keperluan lainnya"],
  },
};

export const SERVICE_DETAILS = SERVICES.map((service) => ({
  ...service,
  ...DETAILS[service.title],
}));

export const WHY_CHOOSE = [
  {
    icon: ShieldCheck,
    title: "Tukang Tulung Terverifikasi",
    description: "Setiap Tukang Tulung telah melewati proses verifikasi identitas.",
  },
  {
    icon: Zap,
    title: "Respon Cepat",
    description:
      "Permintaan bantuan Anda akan segera direspons oleh Tukang Tulung terdekat.",
  },
  {
    icon: LockKeyhole,
    title: "Aman & Terpercaya",
    description: "Keamanan dan kenyamanan Anda adalah prioritas utama kami.",
  },
  {
    icon: MapPin,
    title: "Berbasis Lokasi",
    description:
      "Kami menghubungkan Anda dengan Tukang Tulung terdekat di sekitar lokasi Anda.",
  },
];
