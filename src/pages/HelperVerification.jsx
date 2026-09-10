import { useParams } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import { BadgeCheck, Star, Route, MapPin, ShieldOff, User } from "lucide-react";
import Button from "../components/ui/Button";
import { getHelperById } from "../data/helpers";
import logo from "../assets/logo.png";
import "./HelperVerification.css";

export default function HelperVerification() {
  const { id } = useParams();
  const helper = getHelperById(id);

  if (!helper) {
    return (
      <main className="helper-verify-page">
        <div className="container helper-verify-page__inner">
          <div className="helper-verify__notfound">
            <ShieldOff size={40} className="helper-verify__notfound-icon" />
            <h1>Tukang Tulung Tidak Ditemukan</h1>
            <p>ID yang kamu cari tidak terdaftar di Tetulung.</p>
            <Button variant="primary" href="/">
              Kembali ke Beranda
            </Button>
          </div>
        </div>
      </main>
    );
  }

  const pageUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/helper/${helper.id}`
      : `https://tetulung.vercel.app/helper/${helper.id}`;

  return (
    <main className="helper-verify-page">
      <div className="container helper-verify-page__inner">
        {/* ── Kartu identitas, rasio KTP asli, gaya ID card resmi ── */}
        <article className="helper-verify">
          <div className="helper-verify__content">
            <div className="helper-verify__top">
              <img src={logo} alt="Tetulung" className="helper-verify__logo" />
              <span className="helper-verify__badge">
                <BadgeCheck size={18} />
                Terverifikasi
              </span>
            </div>

            <div className="helper-verify__identity">
              <div className="helper-verify__avatar-wrap">
                <div className="helper-verify__avatar">
                  <User size={36} strokeWidth={1.75} />
                </div>
                <span className="helper-verify__avatar-check">
                  <BadgeCheck size={16} />
                </span>
              </div>
              <div className="helper-verify__info">
                <h1 className="helper-verify__name">{helper.name}</h1>
                <span className="helper-verify__role-pill">{helper.role}</span>
                <span className="helper-verify__id">{helper.displayId}</span>
              </div>
            </div>

            <div className="helper-verify__divider" aria-hidden="true" />

            <div className="helper-verify__bottom">
              <div className="helper-verify__stats">
                <div className="helper-verify__stats-row">
                  <span>
                    <Star size={16} /> {helper.rating}
                  </span>
                  <span>
                    <Route size={16} /> {helper.totalTrips} trip
                  </span>
                  <span>
                    <MapPin size={16} /> {helper.location}
                  </span>
                </div>
                <span className="helper-verify__since">
                  Terverifikasi sejak {helper.verifiedSince}
                </span>
              </div>
              <div className="helper-verify__qr">
                <QRCodeSVG value={pageUrl} size={108} fgColor="#14355c" bgColor="#ffffff" />
              </div>
            </div>
          </div>
        </article>

        <p className="helper-verify__footer-caption">
          Kartu Verifikasi Digital &middot; Tetulung
        </p>
      </div>
    </main>
  );
}
