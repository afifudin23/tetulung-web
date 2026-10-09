# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2026-10-09

### Detail Versi 0.2.0 (jasson)

### ✨ Fitur Baru — Halaman Hapus Akun (`/me/delete-account`)
- **Halaman baru `DeleteAccount`** di `/me/delete-account`. URL ini didaftarkan di Play Console sebagai URL penghapusan akun (syarat Google Play untuk app yang punya fitur akun).
- **Alur**: login email + password (`POST /auth/login`) → verifikasi OTP login yang dikirim ke email (`POST /auth/otp/verify`, ada tombol kirim ulang dengan jeda 60 detik dan tombol ganti akun) → popup konfirmasi custom yang menampilkan nama & email akun → **Ya, Hapus Akun** memanggil `DELETE /users/me` dengan password sebagai konfirmasi, **Batal** kembali ke beranda. Akun reviewer yang login tanpa OTP (`otp_required: false`) langsung masuk ke popup konfirmasi.
- **Pesan error per kasus**: email tidak terdaftar, password salah, akun disuspend/dibanned atau belum bisa login (diarahkan ke admin), OTP salah/kedaluwarsa, terlalu banyak percobaan, masih ada pesanan berjalan (409), dan gagal koneksi.
- **Info data yang dihapus & yang tetap disimpan** ditampilkan di samping form (syarat Google Play), plus alamat email admin untuk user yang tidak bisa login.
- Setelah berhasil, tampil status "Akun Berhasil Dihapus" dengan tombol kembali ke beranda. Token cuma disimpan di memori halaman, tidak ke `localStorage`.
- Responsif: dua kolom di desktop, satu kolom di HP, tombol popup bertumpuk di layar sempit.

### 🔧 Chores
- `src/lib/deleteAccount.js` (baru): wrapper `fetch` untuk login, verifikasi & kirim ulang OTP login, dan hapus akun, dengan `ApiError` yang membawa status HTTP & `error_code`.
- Footer: link "Hapus Akun" ditambahkan di kolom Informasi (`src/data/site.js`).

## [0.1.0] - 2026-10-02

### Detail Versi 0.1.0 (andev)

### ✨ Fitur Baru — Halaman Verifikasi Helper Pakai Data Asli
- **Data dari API** (`/helper/:id`, dibuka dari QR Kartu Tetulung di app): halaman sekarang mengambil profil publik helper dari `GET /api/v1/public/helpers/:id` lewat hook baru `usePublicHelper`, menggantikan data dummy (`src/data/helpers.js` dihapus). ID di URL = UUID lengkap user.
- Kartu menampilkan nama, foto profil (fallback ikon kalau belum ada / gagal dimuat), ID pendek, rating ("Baru" kalau belum ada ulasan), jumlah trip selesai, bulan bergabung, dan tanggal terverifikasi.
- **Helper yang belum / tidak lagi disetujui admin** tetap tampil tapi dengan badge "Belum Terverifikasi", jadi kartu lama milik helper yang dicabut tidak terlihat valid saat discan.
- **Status memuat / gagal / tidak ditemukan** ditampilkan dengan kotak status bergaya kotak "not found" yang sudah ada; status gagal punya tombol "Coba Lagi".
- **Kartu 3D bisa diputar** (`useCardSpin`): geser untuk memutar 360° dengan momentum & efek pegas, ketuk untuk membalik. Sisi belakang berisi logo + QR besar. Mati otomatis kalau pengguna memilih "reduce motion".

### 🔧 Chores
- `src/lib/api.js` (baru): base URL API dari env `VITE_API_BASE_URL` (tanpa `/api/v1`), plus helper `apiUrl()` & `mediaUrl()`.
- `.env.example` (baru) berisi `VITE_API_BASE_URL`; `.env` lokal masuk `.gitignore`.
