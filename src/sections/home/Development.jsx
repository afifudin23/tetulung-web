import { TriangleAlert } from "lucide-react";
import Badge from "../../components/ui/Badge";
import FeatureCard from "../../components/cards/FeatureCard";
import { DEV_FEATURES } from "../../data/site";
import appPreview from "../../assets/app-preview.png";
import "./Development.css";

export default function Development() {
  return (
    <section className="section">
      <div className="container">
        <div className="development">
          <div className="development__content">
            <Badge icon={TriangleAlert} tone="amber">
              Status Pengembangan
            </Badge>

            <h2 className="development__title">
              Tetulung Sedang <span className="text-teal">Dikembangkan</span>
            </h2>

            <p className="development__desc">
              Kami sedang membangun aplikasi Tetulung agar pengalaman membantu
              dan meminta bantuan menjadi lebih mudah, aman, dan menyenangkan.
            </p>

            <div className="development__features">
              {DEV_FEATURES.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
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
