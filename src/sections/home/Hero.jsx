import { HeartHandshake, UserRound, UserRoundPlus } from "lucide-react";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import InfoBanner from "../../components/ui/InfoBanner";
import { WHATSAPP_LINK } from "../../data/site";
import heroIllustration from "../../assets/hero-illustration.png";
import "./Hero.css";

export default function Hero() {
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

          <InfoBanner>
            Tetulung saat ini masih dalam tahap pengembangan aplikasi. Layanan
            awal tersedia melalui{" "}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <strong>WhatsApp</strong>
            </a>
            .
          </InfoBanner>
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
