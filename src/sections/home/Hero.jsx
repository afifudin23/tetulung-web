import { HeartHandshake, UserRound, UserRoundPlus } from "lucide-react";
import { DiAndroid } from "react-icons/di";
import { FaApple } from "react-icons/fa";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import useLatestRelease from "../../hooks/useLatestRelease";
import heroIllustration from "../../assets/hero-illustration.png";
import "./Hero.css";

export default function Hero() {
  const { status, apkUrl, version } = useLatestRelease();

  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <Badge icon={HeartHandshake}>Platform Gotong Royong Digital</Badge>

          <h1 className="hero__title">
            Tetulung,
            <br />
            Karena Kita Semua
            <br />
            <span className="text-primary">Saling Membutuhkan</span>
          </h1>

          <p className="hero__desc">
            Menghubungkan masyarakat yang membutuhkan bantuan dengan Tukang
            Tulung terpercaya untuk berbagai kebutuhan sehari-hari. Cepat,
            aman, dan mudah.
          </p>

          <div className="hero__actions">
            <Button variant="primary" size="lg" href="/tentang" icon={UserRound}>
              Pelajari Tetulung
            </Button>
            <Button variant="teal" size="lg" href="/gabung" icon={UserRoundPlus}>
              Gabung Menjadi Tukang Tulung
            </Button>
          </div>

          <div className="hero__downloads">
            <div className="hero__download-item">
              {status === "ready" ? (
                <Button variant="teal" size="lg" icon={DiAndroid} href={apkUrl}>
                  Download APK (Android)
                </Button>
              ) : (
                <Button variant="teal" size="lg" icon={DiAndroid} disabled>
                  {status === "loading"
                    ? "Memuat rilis terbaru..."
                    : "APK belum tersedia"}
                </Button>
              )}
              {status === "ready" && version && (
                <span className="hero__download-note">Versi {version}</span>
              )}
            </div>

            <div className="hero__download-item">
              <Button
                variant="outline"
                size="lg"
                icon={FaApple}
                disabled
                title="Versi iOS masih dalam pengembangan"
              >
                Download iOS
              </Button>
              <span className="hero__download-note">Segera Hadir</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <img
            src={heroIllustration}
            alt="Tukang Tulung menyerahkan belanjaan kepada warga"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
