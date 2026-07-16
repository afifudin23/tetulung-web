import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MessageCircle, Menu, X } from "lucide-react";
import Button from "../ui/Button";
import { NAV_LINKS, WHATSAPP_LINK } from "../../data/site";
import logo from "../../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand" aria-label="Tetulung — Beranda">
          <img src={logo} alt="Tetulung — Platform Gotong Royong Digital" />
        </Link>

        <nav className={`navbar__nav ${open ? "is-open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === "/"}
              className={({ isActive }) =>
                `navbar__link ${isActive ? "is-active" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__actions">
          <Button variant="whatsapp" href={WHATSAPP_LINK} icon={MessageCircle}>
            Hubungi WhatsApp
          </Button>
          <button
            type="button"
            className="navbar__toggle"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
