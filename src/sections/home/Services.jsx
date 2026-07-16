import { ChevronRight } from "lucide-react";
import SectionHeading from "../../components/ui/SectionHeading";
import ServiceCard from "../../components/cards/ServiceCard";
import Button from "../../components/ui/Button";
import { SERVICES } from "../../data/site";
import "./Services.css";

export default function Services() {
  return (
    <section className="section" id="layanan">
      <div className="container">
        <SectionHeading title="Layanan yang" highlight="Dapat Dibantu" />

        <div className="services__grid">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="services__more">
          <Button variant="ghost" href="/layanan">
            Lihat Semua Layanan <ChevronRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
