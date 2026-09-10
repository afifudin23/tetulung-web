# Tugas: Update Landing Page Tetulung Web

## 1. Setup awal
- Clone dulu repo-nya: `https://github.com/afifudin23/tetulung-web`
- Install dependencies & coba jalanin lokal dulu, pastiin semuanya normal sebelum mulai ubah-ubah.

## 2. Tombol Download APK & iOS di Halaman Beranda
Di halaman utama (`https://tetulung.vercel.app/`), tambahin dua tombol download:

- **Tombol Download APK (Android)** — aktif, langsung ambil file APK terbaru dari repo `https://github.com/afifudin23/tetulung-releases` (ini repo public khusus tempat naruh hasil build, gak ada source code di situ). Cara paling gampang: hit GitHub API `https://api.github.com/repos/afifudin23/tetulung-releases/releases/latest`, ambil asset yang namanya berakhiran `.apk` dari response-nya (field `browser_download_url`), terus tombolnya link/download ke situ.
- **Tombol Download iOS** — tampilin juga tombolnya, tapi **disabled dulu** (kasih tooltip/label kecil kayak "Segera Hadir" atau "Masih Development") — soalnya versi iOS-nya emang belum siap dirilis.

Hal yang perlu diperhatiin:
- Kalau misal API GitHub-nya gagal diakses / belum ada release sama sekali, jangan sampai bikin halamannya error — kasih fallback yang wajar aja (misal tombolnya disembunyiin atau kasih pesan "belum tersedia").
- Boleh tampilin juga info versi terbaru di deket tombolnya (ambil dari `tag_name` di response API yang sama).

## 3. Halaman Verifikasi Helper (masih dummy)
Buat halaman baru dengan pola URL kayak gini: `https://tetulung.vercel.app/helper/[id]` — contoh isinya `https://tetulung.vercel.app/helper/ttl-000123`.

Isi halamannya (dummy dulu, data statis/hardcoded gapapa, belum perlu nyambung ke backend beneran):
- Info kalau helper ini **udah terverifikasi** sama Tetulung — misal nama, ID (`TTL-000123`), foto/avatar, badge "Terverifikasi", dan info singkat lain yang relevan (rating, jumlah trip, dll — sesuaikan aja sama yang ada).
- Tampilin **QR code** yang isinya link ke halaman itu sendiri (jadi kalau di-scan, balik lagi ke `https://tetulung.vercel.app/helper/ttl-000123`) — ini fungsinya buat helper nunjukin QR verifikasi ke customer.

Catatan:
- Karena ini masih dummy, gak perlu bikin sistem verifikasi beneran dulu — cukup satu contoh data statis buat `ttl-000123` biar bisa dilihat tampilannya.
- Kalau butuh library buat generate QR code, boleh pakai library JS yang umum dipakai (misal `qrcode.react` atau semacamnya), yang penting hasilnya bisa di-scan dan ngarah ke URL yang bener.
