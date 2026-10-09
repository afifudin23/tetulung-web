import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CircleCheck,
  Eye,
  EyeOff,
  LoaderCircle,
  Lock,
  Mail,
  ShieldCheck,
  Trash2,
  TriangleAlert,
} from "lucide-react";
import Button from "../components/ui/Button";
import { FOOTER } from "../data/site";
import { deleteMyAccount, login, resendLoginOtp, verifyLoginOtp } from "../lib/deleteAccount";
import "./DeleteAccount.css";

const RESEND_COOLDOWN = 60; // detik

// Data yang ikut terhapus / tetap disimpan — wajib ditampilkan (syarat
// Google Play untuk URL penghapusan akun).
const DELETED_DATA = [
  "Profil: nama, email, nomor HP, alamat, foto profil, info kendaraan",
  "Saldo wallet, riwayat transaksi, dan tiket top up",
  "Pesanan yang kamu buat sebagai customer (Ride, Titip Belanja, Bantuan Lainnya)",
  "Chat, riwayat panggilan, rating, dan notifikasi",
  "Masukan (feedback) yang pernah kamu kirim",
  "Perangkat terdaftar untuk notifikasi dan semua sesi login",
];

const KEPT_DATA = [
  "Pesanan yang pernah kamu kerjakan sebagai helper tetap ada di riwayat customer-nya, tapi tanpa nama dan data kamu.",
];

function loginErrorMessage(err) {
  if (err.status === 0) return "Gagal terhubung ke server. Periksa koneksi internetmu.";
  if (err.status === 404) return "Email ini tidak terdaftar di Tetulung.";
  if (err.status === 401) return "Password salah.";
  if (err.errorCode === "ACCOUNT_BANNED" || err.errorCode === "ACCOUNT_SUSPENDED") {
    return "Akun ini sedang diblokir. Hubungi admin Tetulung untuk menghapus akun.";
  }
  if (err.status === 403) {
    return "Akun ini belum bisa masuk (belum verifikasi atau belum disetujui admin). Hubungi admin Tetulung untuk menghapus akun.";
  }
  if (err.status === 429) return "Terlalu banyak percobaan. Tunggu sebentar lalu coba lagi.";
  return "Terjadi kesalahan. Coba lagi nanti.";
}

function otpErrorMessage(err) {
  if (err.status === 0) return "Gagal terhubung ke server. Periksa koneksi internetmu.";
  if (err.status === 429) return "Terlalu banyak percobaan. Tunggu sebentar lalu coba lagi.";
  if (err.status >= 400 && err.status < 500) return "Kode OTP salah atau sudah kedaluwarsa.";
  return "Terjadi kesalahan. Coba lagi nanti.";
}

function deleteErrorMessage(err) {
  if (err.status === 0) return "Gagal terhubung ke server. Periksa koneksi internetmu.";
  if (err.status === 409) {
    return "Kamu masih punya pesanan yang sedang berjalan. Selesaikan atau batalkan dulu di aplikasi, lalu coba lagi.";
  }
  if (err.status === 403) return "Akun ini tidak bisa dihapus lewat halaman ini.";
  if (err.status === 401) return "Sesi atau password tidak valid. Silakan masuk ulang.";
  return "Gagal menghapus akun. Coba lagi nanti.";
}

export default function DeleteAccount() {
  const navigate = useNavigate();
  // step: "login" -> "otp" -> "confirm" (popup) -> "done"
  const [step, setStep] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState("");
  const [session, setSession] = useState(null); // { token, user }
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown <= 0) return undefined;
    const t = setTimeout(() => setCooldown((n) => n - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  const startSession = (data) => {
    setSession({ token: data.access_token, user: data.user });
    setStep("confirm");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await login(email.trim(), password);
      if (data?.otp_required === false && data.access_token) {
        startSession(data);
      } else {
        setOtp("");
        setCooldown(RESEND_COOLDOWN);
        setStep("otp");
      }
    } catch (err) {
      setError(loginErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      startSession(await verifyLoginOtp(email.trim(), otp));
    } catch (err) {
      setError(otpErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setError("");
    try {
      await resendLoginOtp(email.trim());
      setCooldown(RESEND_COOLDOWN);
    } catch (err) {
      setError(otpErrorMessage(err));
    }
  };

  const handleDelete = async () => {
    setError("");
    setLoading(true);
    try {
      await deleteMyAccount(session.token, password);
      setSession(null);
      setPassword("");
      setStep("done");
    } catch (err) {
      setError(deleteErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  const cancel = () => navigate("/");

  if (step === "done") {
    return (
      <main className="delete-account">
        <div className="container delete-account__inner">
          <div className="delete-account__card delete-account__card--center">
            <CircleCheck size={48} className="delete-account__done-icon" />
            <h1>Akun Berhasil Dihapus</h1>
            <p>Akun Tetulung dan data kamu sudah dihapus permanen. Terima kasih sudah menggunakan Tetulung.</p>
            <Button variant="primary" href="/">
              Kembali ke Beranda
            </Button>
          </div>
        </div>
      </main>
    );
  }

  const user = session?.user;
  const fullName = user ? [user.first_name, user.last_name].filter(Boolean).join(" ") : "";

  return (
    <main className="delete-account">
      <div className="container delete-account__inner">
        <header className="delete-account__header">
          <span className="delete-account__header-icon">
            <Trash2 size={26} />
          </span>
          <h1>Hapus Akun Tetulung</h1>
          <p>
            Masuk dengan akun Tetulung yang ingin dihapus, verifikasi kode OTP yang dikirim ke email, lalu
            konfirmasi penghapusan. Akun yang sudah dihapus <strong>tidak bisa dikembalikan</strong>.
          </p>
        </header>

        <div className="delete-account__grid">
          <section className="delete-account__card">
            {step === "login" || step === "confirm" ? (
              <form onSubmit={handleLogin} noValidate>
                <h2>1. Masuk ke Akun</h2>
                <label className="delete-account__field">
                  <span>Email</span>
                  <div className="delete-account__input">
                    <Mail size={18} />
                    <input
                      type="email"
                      autoComplete="email"
                      placeholder="nama@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </label>
                <label className="delete-account__field">
                  <span>Password</span>
                  <div className="delete-account__input">
                    <Lock size={18} />
                    <input
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Password akun"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="delete-account__eye"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </label>
                {error && step === "login" && <p className="delete-account__error">{error}</p>}
                <Button
                  type="submit"
                  variant="primary"
                  className="delete-account__submit"
                  disabled={loading || !email.trim() || !password}
                  icon={loading ? LoaderCircle : undefined}
                >
                  {loading ? "Memproses…" : "Lanjut"}
                </Button>
              </form>
            ) : (
              <form onSubmit={handleVerify} noValidate>
                <h2>2. Verifikasi OTP</h2>
                <p className="delete-account__hint">
                  Kode 6 digit sudah dikirim ke <strong>{email.trim()}</strong>. Cek juga folder spam.
                </p>
                <label className="delete-account__field">
                  <span>Kode OTP</span>
                  <div className="delete-account__input">
                    <ShieldCheck size={18} />
                    <input
                      inputMode="numeric"
                      autoComplete="one-time-code"
                      maxLength={6}
                      placeholder="123456"
                      className="delete-account__otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                      autoFocus
                    />
                  </div>
                </label>
                {error && <p className="delete-account__error">{error}</p>}
                <Button
                  type="submit"
                  variant="primary"
                  className="delete-account__submit"
                  disabled={loading || otp.length !== 6}
                  icon={loading ? LoaderCircle : undefined}
                >
                  {loading ? "Memverifikasi…" : "Verifikasi"}
                </Button>
                <div className="delete-account__otp-actions">
                  <button type="button" onClick={handleResend} disabled={cooldown > 0}>
                    {cooldown > 0 ? `Kirim ulang kode (${cooldown}s)` : "Kirim ulang kode"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setError("");
                      setStep("login");
                    }}
                  >
                    Ganti akun
                  </button>
                </div>
              </form>
            )}
          </section>

          <aside className="delete-account__card delete-account__info">
            <h2>Data yang Dihapus</h2>
            <ul>
              {DELETED_DATA.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2>Data yang Tetap Disimpan</h2>
            <ul>
              {KEPT_DATA.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="delete-account__note">
              Semua data di atas langsung dihapus permanen saat kamu mengonfirmasi, tanpa masa simpan
              tambahan. Akun yang masih punya pesanan berjalan harus menyelesaikan atau membatalkan pesanannya
              dulu.
            </p>
            <p className="delete-account__note">
              Tidak bisa masuk ke akunmu? Kirim permintaan hapus akun dari email yang terdaftar ke{" "}
              <a href={`mailto:${FOOTER.contact.email}?subject=Permintaan%20Hapus%20Akun%20Tetulung`}>
                {FOOTER.contact.email}
              </a>
              .
            </p>
          </aside>
        </div>
      </div>

      {step === "confirm" && user && (
        <div className="delete-account__overlay" role="dialog" aria-modal="true" aria-labelledby="delete-confirm-title">
          <div className="delete-account__modal">
            <span className="delete-account__modal-icon">
              <TriangleAlert size={30} />
            </span>
            <h2 id="delete-confirm-title">Hapus Akun Ini?</h2>
            <p>Akun berikut akan dihapus permanen beserta semua datanya:</p>
            <div className="delete-account__modal-user">
              <strong>{fullName || "Tanpa nama"}</strong>
              <span>{user.email}</span>
            </div>
            <p className="delete-account__modal-warn">
              Saldo wallet yang tersisa ikut hilang dan akun tidak bisa dikembalikan.
            </p>
            {error && <p className="delete-account__error">{error}</p>}
            <div className="delete-account__modal-actions">
              <Button variant="outline" onClick={cancel} disabled={loading}>
                Batal
              </Button>
              <Button
                variant="primary"
                className="delete-account__danger"
                onClick={handleDelete}
                disabled={loading}
                icon={loading ? LoaderCircle : Trash2}
              >
                {loading ? "Menghapus…" : "Ya, Hapus Akun"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
