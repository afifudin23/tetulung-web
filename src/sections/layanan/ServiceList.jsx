import { MessageCircle } from "lucide-react";
import SectionHeading from "../../components/ui/SectionHeading";
import ServiceDetailCard from "../../components/cards/ServiceDetailCard";
import Button from "../../components/ui/Button";
import InfoBanner from "../../components/ui/InfoBanner";
import { SERVICE_DETAILS } from "../../data/layanan";
import { WHATSAPP_LINK } from "../../data/site";
import "./ServiceList.css";

export default function ServiceList() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          title="Layanan yang"
          highlight="Dapat Dibantu"
          highlightColor="teal"
          subtitle="Berbagai kebutuhan harian Anda dapat dibantu dengan cepat, aman, dan terpercaya oleh Tukang Tulung di sekitar Anda."
        />

        <div className="service-list__grid">
          {SERVICE_DETAILS.map((service) => (
            <ServiceDetailCard key={service.title} {...service} />
          ))}
        </div>

        <div className="service-list__cta">
          <InfoBanner>
            <strong>Tidak menemukan layanan yang Anda butuhkan?</strong>
            <br />
            Hubungi kami melalui WhatsApp untuk konsultasi kebutuhan Anda.
          </InfoBanner>
          <Button variant="whatsapp" href={WHATSAPP_LINK} icon={MessageCircle}>
            Hubungi WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
