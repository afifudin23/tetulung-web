import { MessageCircle } from "lucide-react";
import Button from "../../components/ui/Button";
import { WHATSAPP_LINK } from "../../data/site";
import ctaPerson from "../../assets/cta-person.png";
import "./CtaBanner.css";

/**
 * Banner CTA — bisa dipakai ulang di halaman lain dengan
 * title/subtitle/action berbeda.
 */
export default function CtaBanner({
  title = "Ingin tahu lebih lanjut atau jadi bagian dari Tetulung?",
  subtitle = "Hubungi kami sekarang melalui WhatsApp!",
  buttonLabel = "Hubungi WhatsApp",
  buttonHref = WHATSAPP_LINK,
  image = ctaPerson,
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-banner">
          {image && (
            <img src={image} alt="" className="cta-banner__image" loading="lazy" />
          )}
          <div className="cta-banner__text">
            <h2 className="cta-banner__title">{title}</h2>
            <p className="cta-banner__subtitle">{subtitle}</p>
          </div>
          <Button variant="whatsapp" size="lg" href={buttonHref} icon={MessageCircle}>
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
