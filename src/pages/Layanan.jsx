import { HeartHandshake } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import ServiceList from "../sections/layanan/ServiceList";
import WhyChoose from "../sections/layanan/WhyChoose";
import layananHero from "../assets/layanan-hero.png";

export default function Layanan() {
  return (
    <main>
      <PageHero
        badgeIcon={HeartHandshake}
        badge="Layanan Tetulung"
        title={
          <>
            Layanan <span className="text-primary">Tetulung</span>
          </>
        }
        image={layananHero}
        imageAlt="Tukang Tulung membawa belanjaan"
      >
        <p>
          Tetulung hadir untuk membantu berbagai kebutuhan sehari-hari Anda
          melalui Tukang Tulung terpercaya di sekitar lokasi Anda.
        </p>
      </PageHero>

      <ServiceList />
      <WhyChoose />
    </main>
  );
}
