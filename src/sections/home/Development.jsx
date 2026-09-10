import { Rocket, MessageSquareHeart } from "lucide-react";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import FeatureCard from "../../components/cards/FeatureCard";
import { DEV_FEATURES } from "../../data/site";
import appPreview from "../../assets/app-preview.png";
import "./Development.css";

const FEEDBACK_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSfLpNmfqrdCiBmHTUME2Xi2jzxmvycmC1gNT1q64TzMgESBsQ/viewform?usp=header";

export default function Development() {
  return (
    <section className="section">
      <div className="container">
        <div className="development">
          <div className="development__content">
            <Badge icon={Rocket} tone="blue">
              Sudah Rilis
            </Badge>

            <h2 className="development__title">
              Tetulung Sudah Rilis, <span className="text-teal">Terus Kami Sempurnakan</span>
            </h2>

            <p className="development__desc">
              Aplikasi Tetulung sudah bisa diunduh dan digunakan. Kami terus
              memperbaiki dan menyempurnakan pengalaman membantu dan meminta
              bantuan agar semakin mudah, aman, dan menyenangkan.
            </p>

            <div className="development__features">
              {DEV_FEATURES.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>

            <div className="development__feedback">
              <p className="development__feedback-text">
                Ada saran atau masukan buat Tetulung? Kami dengan senang hati menerimanya.
              </p>
              <Button variant="outline" size="md" icon={MessageSquareHeart} href={FEEDBACK_LINK}>
                Kirim Saran & Masukan
              </Button>
            </div>
          </div>

          <div className="development__visual">
            <img src={appPreview} alt="Pratinjau aplikasi Tetulung" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
