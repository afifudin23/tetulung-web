import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import SocialLinks from "../ui/SocialLinks";
import { FOOTER } from "../../data/site";
import logoWhite from "../../assets/logo-white.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        {/* Brand */}
        <div className="footer__brand">
          <img src={logoWhite} alt="Tetulung" className="footer__logo" />
          <p className="footer__tagline">{FOOTER.tagline}</p>
          <div className="footer__socials">
            <SocialLinks tone="dark" />
          </div>
        </div>

        {/* Navigasi */}
        <div>
          <h4 className="footer__heading">{FOOTER.nav.title}</h4>
          <ul className="footer__links">
            {FOOTER.nav.links.map((link) => (
              <li key={link.href}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Informasi */}
        <div>
          <h4 className="footer__heading">{FOOTER.info.title}</h4>
          <ul className="footer__links">
            {FOOTER.info.links.map((link) => (
              <li key={link.href}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h4 className="footer__heading">{FOOTER.contact.title}</h4>
          <ul className="footer__links footer__links--contact">
            <li>
              <Phone size={15} /> {FOOTER.contact.phone}
            </li>
            <li>
              <Mail size={15} /> {FOOTER.contact.email}
            </li>
            <li>
              <MapPin size={15} /> {FOOTER.contact.location}
            </li>
          </ul>
        </div>

        {/* Jam Operasional */}
        <div>
          <h4 className="footer__heading">{FOOTER.hours.title}</h4>
          <p className="footer__schedule">{FOOTER.hours.schedule}</p>
          <hr className="footer__divider" />
          <p className="footer__note">{FOOTER.hours.note}</p>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>{FOOTER.copyright}</p>
      </div>
    </footer>
  );
}
