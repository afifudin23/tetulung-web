// ============================================
// Koneksi ke tetulung-api.
// Base URL dari env VITE_API_BASE_URL (lihat .env.example), tanpa "/api/v1"
// dan tanpa garis miring di akhir — mis. http://localhost:3000.
// ============================================

export const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/+$/, "");

/** URL endpoint API, mis. apiUrl("/public/helpers/123"). */
export function apiUrl(path) {
  return `${API_BASE_URL}/api/v1${path}`;
}

/**
 * URL file media dari API (foto profil disimpan sebagai path "/uploads/...").
 * URL yang sudah absolut dikembalikan apa adanya.
 */
export function mediaUrl(path) {
  if (!path) return null;
  if (/^https?:\/\//i.test(path)) return path;
  return `${API_BASE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}
