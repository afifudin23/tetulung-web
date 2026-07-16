import { Repeat, UserRoundPlus, MessageCircle } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import StepFlow from "../components/ui/StepFlow";
import FeatureCard from "../components/cards/FeatureCard";
import FaqSection from "../components/ui/FaqSection";
import CtaPanel from "../components/ui/CtaPanel";
import Button from "../components/ui/Button";
import RoleGuides from "../sections/cara-kerja/RoleGuides";
import { FLOW_STEPS, SAFETY_FEATURES, CARA_KERJA_FAQ } from "../data/caraKerja";
import { WHATSAPP_LINK } from "../data/site";
import caraKerjaHero from "../assets/cara-kerja-hero.png";
import "../sections/cara-kerja/CaraKerja.css";

export default function CaraKerja() {
  return (
    <main>
      <PageHero
        badgeIcon={Repeat}
        badge="Cara Kerja Tetulung"
        title={
          <>
            Semudah Meminta,
            <br />
            <span className="text-primary">Semudah Membantu.</span>
          </>
        }
        image={caraKerjaHero}
        imageAlt="Pemohon mengirim permintaan dan Tukang Tulung menerimanya"
      >
        <p>
          Tetulung menghubungkan Pemohon dengan Tukang Tulung terpercaya
          melalui proses yang sederhana, cepat, dan transparan.
        </p>
      </PageHero>

      {/* Alur */}
      <section className="section">
        <div className="container">
          <SectionHeading title="Alur Cara Kerja" highlight="Tetulung" highlightColor="teal" decorated />
          <StepFlow steps={FLOW_STEPS} />
        </div>
      </section>

      <RoleGuides />

      {/* Aman & Terpercaya */}
      <section className="section">
        <div className="container">
          <SectionHeading title="Aman dan Terpercaya" decorated />
          <div className="safety__grid">
            {SAFETY_FEATURES.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <FaqSection items={CARA_KERJA_FAQ} />

      <CtaPanel
        title="Siap Menjadi Bagian dari Tetulung?"
        subtitle="Mari bersama-sama membangun budaya tolong-menolong yang modern, aman, dan terpercaya."
      >
        <Button variant="outline" href="/gabung" icon={UserRoundPlus}>
          Gabung Menjadi Tukang Tulung
        </Button>
        <Button variant="whatsapp" href={WHATSAPP_LINK} icon={MessageCircle}>
          Hubungi WhatsApp
        </Button>
      </CtaPanel>
    </main>
  );
}
