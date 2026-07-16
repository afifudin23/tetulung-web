import Accordion from "../../components/ui/Accordion";
import SocialLinks from "../../components/ui/SocialLinks";
import { TENTANG_FAQ } from "../../data/tentang";
import { FOOTER } from "../../data/site";
import logo from "../../assets/logo.png";
import "./AboutFaq.css";

export default function AboutFaq() {
  return (
    <section className="section">
      <div className="container">
        <div className="about-faq">
          <div className="about-faq__brand">
            <img src={logo} alt="Tetulung" className="about-faq__logo" />
            <h3>Tentang Tetulung</h3>
            <p>{FOOTER.tagline}</p>
            <SocialLinks tone="light" />
          </div>

          <div className="about-faq__list">
            <h3 className="about-faq__title">FAQ</h3>
            <Accordion items={TENTANG_FAQ} />
          </div>
        </div>
      </div>
    </section>
  );
}
