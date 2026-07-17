# Tetulung — Design Rules

Panduan desain (design system) yang diambil langsung dari tema web Tetulung.
Gunakan dokumen ini sebagai acuan saat membangun **aplikasi mobile** agar tampilan
dan rasa (look & feel) konsisten dengan web.

> Brand: **Tetulung — Platform Gotong Royong Digital.**
> Karakter visual: bersih, ramah, modern, tepercaya. Biru sebagai warna utama,
> teal sebagai aksen aksi/WhatsApp, banyak ruang putih, sudut membulat, bayangan lembut.

---

## 1. Warna (Color Tokens)

### Brand
| Token | Hex | Pemakaian |
|---|---|---|
| `primary` | `#2563E0` | Warna utama: tombol, link aktif, ikon, judul highlight |
| `primary-dark` | `#1D4FC4` | Hover/tekan tombol primary, gradien bawah |
| `primary-light` | `#4079E2` | Gradien atas tombol primary |
| `teal` | `#02A69C` | Aksi sekunder, tombol WhatsApp, aksen highlight |
| `teal-dark` | `#028F86` | Hover/tekan tombol teal |
| `navy` | `#14355C` | Warna semua heading (judul) & teks navigasi |
| `footer` | `#041C3C` | Background footer (biru sangat gelap) |

### Surface (latar & permukaan)
| Token | Hex | Pemakaian |
|---|---|---|
| `bg` | `#FFFFFF` | Latar utama halaman |
| `bg-soft` | `#F2F7FE` | Chip/badge, tombol ghost, blok lembut kebiruan |
| `bg-band` | `#F3F6FB` | Pita/section berselang |
| `bg-cta` | `#EDF6F9` | Latar panel CTA (kehijauan lembut) |
| `card` | `#FFFFFF` | Latar kartu |
| `border` | `#E5ECF6` | Garis tepi kartu, pembatas, divider |

### Teks
| Token | Hex | Pemakaian |
|---|---|---|
| `text` | `#48586E` | Teks body utama |
| `text-muted` | `#6B7A90` | Teks sekunder/keterangan |
| `heading` | `#14355C` (= navy) | Semua judul h1–h4 |

### Warna kategori layanan (ikon berlatar bulat)
Setiap kartu layanan punya pasangan warna ikon + latar bulat:

| Layanan | Ikon (`color`) | Latar (`bg`) |
|---|---|---|
| Titip Beli | `#E8590C` | `#FDEEE2` |
| Belanja Harian | `#02A69C` | `#DFF5F3` |
| Ambil Paket | `#B07B3C` | `#F9EFE2` |
| Beli Obat | `#2563E0` | `#E7F0FD` |
| Antar Dokumen | `#2563E0` | `#E7F0FD` |
| Bantuan Lainnya | `#2563E0` | `#E7F0FD` |

> Pola: ikon warna solid di atas latar bulat versi pastel/muda dari warna yang sama.
> Untuk kategori baru, buat latar sebagai versi ~12–15% opasitas dari warna ikonnya.

### Warna status
| Maksud | Hex | Catatan |
|---|---|---|
| Info/pengembangan | `#F59E0B` (amber) | Ikon badge "Status Pengembangan" |
| Sukses/aman | `teal` / `primary` | Ikon verifikasi (ShieldCheck) |

---

## 2. Tipografi

- **Font utama:** `Plus Jakarta Sans` (fallback: `system-ui, -apple-system, "Segoe UI", sans-serif`).
  - Mobile: pasang Plus Jakarta Sans sebagai custom font (tersedia di Google Fonts).
- **Warna judul:** selalu navy (`#14355C`).
- **Warna body:** `#48586E`, line-height longgar (`1.6`).
- **Bobot (weight):**
  - Heading: **800** (extra-bold)
  - Tombol / link nav / label penting: **700**
  - Badge (huruf kapital): **800**
  - Body: **400–500**

### Skala ukuran (dari web → saran mobile)
Web pakai `rem` (1rem = 16px). Kolom "Mobile" sudah disesuaikan lebih kecil untuk layar HP.

| Peran | Web | Mobile (dp/sp) | Weight |
|---|---|---|---|
| Hero title | 2.6rem (~42px) | 28–32 | 800 |
| Page hero title | 2.3rem (~37px) | 26–28 | 800 |
| Section title | 1.75rem (~28px) | 22–24 | 800 |
| Lead paragraph | 1.15rem (~18px) | 16–17 | 800 |
| Card title | 1rem (16px) | 16 | 800 |
| Body | 0.95–0.98rem (~15px) | 15 | 400 |
| Card desc / caption | 0.82rem (~13px) | 13 | 400 |
| Badge / overline | 0.72rem (~11.5px) | 11 | 800, uppercase, letter-spacing 0.06em |

- **Highlight kata dalam judul:** sebagian kata judul diwarnai `primary` atau `teal`
  (contoh: "Saling Membutuhkan", "Dapat Dibantu", "Dikembangkan"). Terapkan warna pada kata kunci, sisanya navy.

---

## 3. Radius (Sudut Membulat)

| Token | Nilai | Pemakaian |
|---|---|---|
| `radius-sm` | 10px | Elemen kecil |
| `radius-md` | 14px | **Tombol**, input |
| `radius-lg` | 20px | **Kartu** |
| `radius-xl` | 28px | Panel besar, blok CTA |
| `radius-pill` | 999px | Badge, tombol WhatsApp, chip |

---

## 4. Bayangan (Shadow / Elevation)

Semua bayangan bernuansa navy (bukan hitam netral) agar menyatu dengan brand.

| Token | Nilai (web) | Setara Mobile |
|---|---|---|
| `shadow-sm` | `0 2px 8px rgba(20,53,92,0.06)` | elevation ~2, warna `#14355C` @6% |
| `shadow-md` | `0 6px 24px rgba(20,53,92,0.09)` | elevation ~6, @9% |
| `shadow-lg` | `0 12px 40px rgba(20,53,92,0.14)` | elevation ~12, @14% |

- Tombol berwarna punya bayangan senada warnanya:
  - Primary: `0 6px 16px rgba(37,99,224,0.30)`
  - Teal/WhatsApp: `0 6px 16px rgba(2,166,156,0.30)`

---

## 5. Spacing & Layout

- **Grid dasar:** kelipatan 4px (4, 8, 12, 16, 20, 24, 28, 32...).
- **Padding tepi layar (container):** web `24px`. Mobile: **16–20dp** kiri-kanan.
- **Jarak antar-section:** web `44px` vertikal. Mobile: **28–36dp**.
- **Gap kartu di grid:** ~16px.
- **Lebar konten maksimum (web):** 1140px (tidak relevan di mobile, tapi jaga margin konsisten).
- Di mobile, layout web 2-kolom (hero, page-hero) → **tumpuk vertikal (stack)**: visual di atas atau bawah teks.

---

## 6. Komponen

### Tombol (Button)
Tinggi nyaman disentuh: **min 44dp**. Radius `md` (14), teks weight 700, ikon opsional di kiri (gap 8px).

| Varian | Tampilan |
|---|---|
| **Primary** | Gradien vertikal `#4079E2 → #2563E0`, teks putih, shadow biru. |
| **Teal** | Gradien vertikal `#08B5AA → #02A69C`, teks putih, shadow teal. |
| **WhatsApp** | Gradien `#0CBCAE → #02A69C`, **radius pill**, teks putih + ikon WA. |
| **Outline** | Latar putih, teks primary, garis `1.5px` primary (inset). |
| **Ghost** | Latar `bg-soft`, teks primary, tanpa garis. |

- Ukuran: `md` = padding 12×22, font ~14; `lg` = padding 14×26, font ~15.
- Interaksi: naik `-1px` saat hover (web) / sedikit menekan (scale ~0.98) saat ditekan (mobile).

### Kartu (Card)
- Latar putih, garis `1px border`, radius `lg` (20), padding ~28×18, `shadow-sm`.
- Hover (web): naik `-4px` + `shadow-md`. Mobile: efek tekan / ripple halus.
- **Service card:** ikon dalam lingkaran 68px (latar warna kategori), judul 800, desc muted 13px, rata tengah.

### Badge / Chip
- Radius pill, huruf **KAPITAL**, weight 800, ukuran ~11px, letter-spacing 0.06em.
- Varian biru: latar `bg-soft`, teks primary. Varian amber: ikon amber, teks navy.
- Contoh: `PLATFORM GOTONG ROYONG DIGITAL`, `STATUS PENGEMBANGAN`.

### Navbar (web) → App Bar / Bottom Nav (mobile)
- Web: sticky, latar putih transparan + blur, tinggi 74px, logo 48px, link weight 700 warna navy, link aktif → primary + garis bawah primary.
- **Mobile:** gunakan **top app bar** (logo kiri, tombol WhatsApp/menu kanan) dan/atau **bottom navigation** untuk menu utama (Beranda, Layanan, Cara Kerja, Gabung, dst).
- Item aktif diberi warna `primary`; item non-aktif warna `navy`.

### Section Heading
- Judul rata tengah, 800. Opsi dekorasi: garis pendek 40×3px warna primary (opasitas 0.5) di kiri-kanan judul.
- Subjudul di bawahnya: warna text, ~15px, lebar maks ~640px, rata tengah.

### Hero
- Latar gradien lembut atas→bawah: `#F7FAFE → #FFFFFF`.
- Susunan: badge → judul besar (dengan kata highlight) → deskripsi → tombol aksi ganda → banner info.
- Mobile: ilustrasi di atas atau bawah, teks rata kiri, tombol full-width menumpuk.

### Panel CTA
- Latar `bg-cta` (`#EDF6F9`), radius `xl`, berisi judul + teks + tombol WhatsApp, sering dengan ilustrasi orang.

### Footer
- Latar `footer` (`#041C3C`), teks terang, logo putih (`logo-white.png`), kolom: Navigasi, Informasi, Hubungi Kami, Jam Operasional, plus ikon sosial (Instagram, Facebook, WhatsApp).

---

## 7. Ikonografi

- Library: **Lucide** (`lucide-react` di web). Di mobile pakai padanan:
  Flutter → `lucide_icons`; React Native → `lucide-react-native`.
- Gaya: outline, stroke konsisten, sudut membulat — cocok dengan bahasa visual brand.
- Ikon kunci: `UtensilsCrossed, ShoppingCart, Package, Pill, FileText, MessagesSquare`
  (layanan); `ShieldCheck, Zap, MapPin` (keunggulan); `Code2, Award, Users` (pengembangan).

---

## 8. Ilustrasi & Gambar

- Gaya ilustrasi: kartun ramah, orang mengenakan seragam biru Tetulung, latar suasana kota yang cerah.
- Mockup aplikasi ditampilkan dalam bingkai HP.
- Sudut gambar mengikuti radius kartu bila di dalam kartu; jaga `max-width: 100%`.

---

## 9. Aksesibilitas & Interaksi

- **Target sentuh minimal 44×44dp.**
- Kontras teks: body `#48586E` di atas putih, heading navy — pastikan rasio ≥ 4.5:1.
- Animasi halus & singkat (~150–200ms), easing `ease`. Hindari gerak berlebihan.
- Scroll halus; feedback tekan pada semua elemen interaktif.

---

## 10. Referensi Cepat (Copy-Paste)

### CSS Variables (web — sumber kebenaran)
```css
:root {
  --color-primary:#2563e0; --color-primary-dark:#1d4fc4; --color-primary-light:#4079e2;
  --color-teal:#02a69c; --color-teal-dark:#028f86;
  --color-navy:#14355c; --color-footer:#041c3c;
  --color-bg:#ffffff; --color-bg-soft:#f2f7fe; --color-bg-band:#f3f6fb; --color-bg-cta:#edf6f9;
  --color-card:#ffffff; --color-border:#e5ecf6;
  --color-text:#48586e; --color-text-muted:#6b7a90;
  --radius-sm:10px; --radius-md:14px; --radius-lg:20px; --radius-xl:28px; --radius-pill:999px;
}
```

### Flutter (ThemeData / konstanta)
```dart
class AppColors {
  static const primary      = Color(0xFF2563E0);
  static const primaryDark  = Color(0xFF1D4FC4);
  static const primaryLight = Color(0xFF4079E2);
  static const teal         = Color(0xFF02A69C);
  static const tealDark     = Color(0xFF028F86);
  static const navy         = Color(0xFF14355C);
  static const footer       = Color(0xFF041C3C);
  static const bg           = Color(0xFFFFFFFF);
  static const bgSoft       = Color(0xFFF2F7FE);
  static const bgBand       = Color(0xFFF3F6FB);
  static const bgCta        = Color(0xFFEDF6F9);
  static const border       = Color(0xFFE5ECF6);
  static const text         = Color(0xFF48586E);
  static const textMuted    = Color(0xFF6B7A90);
}
class AppRadius { static const sm=10.0, md=14.0, lg=20.0, xl=28.0, pill=999.0; }
```

### React Native (JS objek tema)
```js
export const colors = {
  primary:'#2563e0', primaryDark:'#1d4fc4', primaryLight:'#4079e2',
  teal:'#02a69c', tealDark:'#028f86', navy:'#14355c', footer:'#041c3c',
  bg:'#ffffff', bgSoft:'#f2f7fe', bgBand:'#f3f6fb', bgCta:'#edf6f9',
  card:'#ffffff', border:'#e5ecf6', text:'#48586e', textMuted:'#6b7a90',
};
export const radius = { sm:10, md:14, lg:20, xl:28, pill:999 };
export const fontFamily = 'PlusJakartaSans';
```

---

## 11. Do & Don't

**Lakukan**
- Pakai navy untuk semua judul, `text`/`text-muted` untuk isi.
- Gunakan primary untuk aksi utama, teal untuk WhatsApp/aksi sekunder.
- Beri ruang putih yang lega dan sudut membulat konsisten.
- Bayangan bernuansa navy, lembut, tidak keras.

**Hindari**
- Warna hitam murni untuk teks/bayangan.
- Sudut tajam pada kartu/tombol.
- Mencampur banyak warna aksen di luar palet.
- Bobot font tipis untuk judul (selalu 800).

---

*Sumber: `src/index.css`, komponen di `src/components`, dan data di `src/data/site.js`
dari repo web Tetulung. Jaga sinkron bila token web berubah.*
