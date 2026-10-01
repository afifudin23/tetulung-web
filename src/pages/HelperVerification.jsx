import { useState } from "react";
import { useParams } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import {
  BadgeCheck,
  CalendarDays,
  LoaderCircle,
  RefreshCw,
  Rotate3d,
  Route,
  ShieldAlert,
  ShieldOff,
  Star,
  User,
} from "lucide-react";
import Button from "../components/ui/Button";
import useCardSpin from "../hooks/useCardSpin";
import usePublicHelper from "../hooks/usePublicHelper";
import { mediaUrl } from "../lib/api";
import logo from "../assets/logo.png";
import "./HelperVerification.css";

const monthYear = (iso, month = "long") =>
  iso ? new Date(iso).toLocaleDateString("id-ID", { month, year: "numeric" }) : "-";

export default function HelperVerification() {
  const { id } = useParams();
  const { status, helper, retry } = usePublicHelper(id);
  const { ref: cardRef, flip } = useCardSpin({ active: status === "ready" });

  if (status === "loading") {
    return (
      <StatusBox icon={LoaderCircle} title="Memuat Data…" text="Sedang memeriksa data helper." />
    );
  }
  if (status === "error") {
    return (
      <StatusBox icon={ShieldAlert} title="Gagal Memuat Data" text="Periksa koneksi internetmu, lalu coba lagi.">
        <Button variant="primary" icon={RefreshCw} onClick={retry}>
          Coba Lagi
        </Button>
      </StatusBox>
    );
  }
  if (status === "notfound") {
    return (
      <StatusBox icon={ShieldOff} title="Helper Tidak Ditemukan" text="ID yang kamu cari tidak terdaftar di Tetulung.">
        <Button variant="primary" href="/">
          Kembali ke Beranda
        </Button>
      </StatusBox>
    );
  }

  const name = [helper.first_name, helper.last_name].filter(Boolean).join(" ");
  const verified = helper.verified;
  const rating = helper.rating?.average;
  const pageUrl = `${window.location.origin}/helper/${helper.id}`;

  return (
    <main className="helper-verify-page">
      <div className="container helper-verify-page__inner">
        {/* ── Kartu identitas, rasio KTP asli, gaya ID card resmi ──
            Bisa diputar 360° (geser / lempar), lihat useCardSpin. Sisi
            depan = kartu asli; sisi belakang = logo + QR besar. */}
        <div className="helper-verify-stage">
        <div className="helper-verify-spin" ref={cardRef}>
        <article className="helper-verify helper-verify--front">
          <span className="helper-verify__shine" aria-hidden="true" />
          <span className="helper-verify__glare" aria-hidden="true" />
          <div className="helper-verify__content">
            <div className="helper-verify__top">
              <img src={logo} alt="Tetulung" className="helper-verify__logo" />
              <span className="helper-verify__badge">
                {verified ? <BadgeCheck size={18} /> : <ShieldAlert size={18} />}
                {verified ? "Terverifikasi" : "Belum Terverifikasi"}
              </span>
            </div>

            <div className="helper-verify__identity">
              <div className="helper-verify__avatar-wrap">
                <Avatar photoUrl={helper.photo_url} name={name} />
                {verified && (
                  <span className="helper-verify__avatar-check">
                    <BadgeCheck size={16} />
                  </span>
                )}
              </div>
              <div className="helper-verify__info">
                <h1 className="helper-verify__name">{name}</h1>
                <span className="helper-verify__role-pill">Helper</span>
                <span className="helper-verify__id">ID: {helper.short_id}</span>
              </div>
            </div>

            <div className="helper-verify__divider" aria-hidden="true" />

            <div className="helper-verify__bottom">
              <div className="helper-verify__stats">
                <div className="helper-verify__stats-row">
                  <span>
                    <Star size={16} /> {rating != null ? rating.toFixed(1) : "Baru"}
                  </span>
                  <span>
                    <Route size={16} /> {helper.completed_count} trip
                  </span>
                  <span>
                    {/* Bulan singkat: muat sebaris dengan QR, seperti teks lokasi di desain awal */}
                    <CalendarDays size={16} /> Bergabung {monthYear(helper.member_since, "short")}
                  </span>
                </div>
                <span className="helper-verify__since">
                  {verified
                    ? `Terverifikasi sejak ${monthYear(helper.verified_since)}`
                    : "Belum/tidak lagi disetujui admin Tetulung"}
                </span>
              </div>
              <div className="helper-verify__qr">
                <QRCodeSVG value={pageUrl} size={108} fgColor="#14355c" bgColor="#ffffff" />
              </div>
            </div>
          </div>
        </article>

        <article className="helper-verify helper-verify--back" aria-hidden="true">
          <span className="helper-verify__glare" />
          <div className="helper-verify__content helper-verify__back">
            <img src={logo} alt="" className="helper-verify__logo" />
            <div className="helper-verify__qr">
              <QRCodeSVG value={pageUrl} size={150} fgColor="#14355c" bgColor="#ffffff" />
            </div>
            <div className="helper-verify__back-text">
              <span className="helper-verify__back-title">Pindai untuk verifikasi</span>
              <span className="helper-verify__id">ID: {helper.short_id}</span>
            </div>
          </div>
        </article>
        </div>
        </div>

        <button type="button" className="helper-verify__flip-hint" onClick={flip}>
          <Rotate3d size={15} />
          Geser kartu untuk memutar &middot; ketuk untuk membalik
        </button>

        <p className="helper-verify__footer-caption">
          Kartu Verifikasi Digital &middot; Tetulung
        </p>
      </div>
    </main>
  );
}

/** Foto profil dari DB; ikon orang kalau belum ada / gagal dimuat. */
function Avatar({ photoUrl, name }) {
  const [failed, setFailed] = useState(false);
  const src = mediaUrl(photoUrl);
  return (
    <div className="helper-verify__avatar">
      {src && !failed ? (
        <img
          src={src}
          alt={name}
          onError={() => setFailed(true)}
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
        />
      ) : (
        <User size={36} strokeWidth={1.75} />
      )}
    </div>
  );
}

/** Kotak status (memuat / gagal / tidak ditemukan) — gaya kotak "not found" asli. */
function StatusBox({ icon: Icon, title, text, children }) {
  return (
    <main className="helper-verify-page">
      <div className="container helper-verify-page__inner">
        <div className="helper-verify__notfound">
          <Icon size={40} className="helper-verify__notfound-icon" />
          <h1>{title}</h1>
          <p>{text}</p>
          {children}
        </div>
      </div>
    </main>
  );
}
