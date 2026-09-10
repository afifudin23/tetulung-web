import SectionHeading from "../../components/ui/SectionHeading";
import FeatureCard from "../../components/cards/FeatureCard";
import { HERO_HIGHLIGHTS } from "../../data/site";
import "./About.css";

export default function About() {
  return (
    <section className="section" id="tentang">
      <div className="container">
        <SectionHeading
          title="Apa itu"
          highlight="Tetulung?"
          subtitle="Tetulung adalah platform gotong royong digital yang menghubungkan masyarakat untuk saling membantu dalam berbagai kebutuhan sehari-hari melalui teknologi yang aman, mudah, dan terpercaya."
        />

        <div className="about__highlights">
          {HERO_HIGHLIGHTS.map((item, i) => (
            <FeatureCard key={item.title} tone={i % 2 === 0 ? "blue" : "teal"} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
