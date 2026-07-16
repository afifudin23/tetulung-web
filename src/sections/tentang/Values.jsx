import SectionHeading from "../../components/ui/SectionHeading";
import ServiceCard from "../../components/cards/ServiceCard";
import { VALUES } from "../../data/tentang";
import "./Values.css";

export default function Values() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title="Nilai Kami" />
        <div className="values__grid">
          {VALUES.map((value) => (
            <ServiceCard key={value.title} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
}
