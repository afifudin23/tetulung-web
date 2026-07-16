import { UserRoundPlus, MessageCircle } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import ServiceCard from "../components/cards/ServiceCard";
import StepFlow from "../components/ui/StepFlow";
import FaqSection from "../components/ui/FaqSection";
import CtaPanel from "../components/ui/CtaPanel";
import Button from "../components/ui/Button";
import Benefits from "../sections/gabung/Benefits";
import { REQUIREMENTS, JOIN_STEPS, GABUNG_FAQ } from "../data/gabung";
import { WHATSAPP_LINK } from "../data/site";
import gabungHero from "../assets/gabung-hero.png";
import "../sections/gabung/Gabung.css";

export default function Gabung() {
  return (
    <main>
      <PageHero
        badgeIcon={UserRoundPlus}
        badge="Gabung Menjadi Tukang Tulung"
        title={
          <>
            Jadi Bagian dari{" "}
            <span className="text-primary">Tetulung</span>, Bantu Lebih Banyak
            Orang
          </>
        }
        image={gabungHero}
        imageAlt="Tukang Tulung siap membantu"
      >
        <p>
          Dengan menjadi Tukang Tulung, Anda bisa membantu orang lain di
          sekitar lokasi Anda dan mendapatkan penghasilan tambahan dengan
          fleksibel.
        </p>
        <div className="gabung__hero-actions">
          <Button variant="primary" href={WHATSAPP_LINK} icon={UserRoundPlus}>
            Daftar Sekarang
          </Button>
          <Button variant="outline" href={WHATSAPP_LINK} icon={MessageCircle}>
            Tanya via WhatsApp
          </Button>
        </div>
      </PageHero>

      {/* Syarat */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Syarat Menjadi"
            highlight="Tukang Tulung"
            highlightColor="teal"
            decorated
          />
          <div className="requirements__grid">
            {REQUIREMENTS.map((req) => (
              <ServiceCard key={req.title} {...req} />
            ))}
          </div>
        </div>
      </section>

      {/* Langkah bergabung */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Langkah Mudah"
            highlight="Bergabung"
            highlightColor="teal"
            decorated
          />
          <StepFlow steps={JOIN_STEPS} />
        </div>
      </section>

      <Benefits />

      <FaqSection items={GABUNG_FAQ} />

      <CtaPanel
        title="Siap Menjadi Tukang Tulung Hebat?"
        subtitle="Bergabung sekarang dan mulai bantu lebih banyak orang di sekitar Anda!"
      >
        <Button variant="outline" href={WHATSAPP_LINK} icon={UserRoundPlus}>
          Daftar Sekarang
        </Button>
        <Button variant="whatsapp" href={WHATSAPP_LINK} icon={MessageCircle}>
          Hubungi WhatsApp
        </Button>
      </CtaPanel>
    </main>
  );
}
