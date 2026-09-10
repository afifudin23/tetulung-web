// ============================================
// Data dummy — halaman verifikasi Tukang Tulung
// TODO: ganti dengan data dari backend begitu sistem verifikasi tersedia.
//
// Semua ID disimpan huruf kecil (mis. /helper/hxqklm), tanpa prefix "ttl-"
// di URL. Prefix "ttl-" cuma ada di displayId (yang disimpan), lalu
// ditampilin uppercase lewat CSS (text-transform), bukan di data-nya.
// ID acak (bukan increment) biar gak bisa dientumerasi/scrape.
// ============================================

export const HELPERS = {
  hxqklm: {
    id: "hxqklm",
    displayId: "ttl-hxqklm",
    name: "Afifudin Nurfalah",
    initials: "AN",
    role: "Tukang Tulung",
    location: "Tegal, Jawa Tengah",
    verifiedSince: "Maret 2026",
    rating: 4.9,
    totalTrips: 128,
  },
};

export function getHelperById(id) {
  return HELPERS[id?.toLowerCase()] ?? null;
}
