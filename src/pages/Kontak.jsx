import { MessageCircle } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import ContactSection from "../sections/kontak/ContactSection";
import FaqSection from "../components/ui/FaqSection";
import CtaPanel from "../components/ui/CtaPanel";
import Button from "../components/ui/Button";
import { KONTAK_HIGHLIGHTS, KONTAK_FAQ } from "../data/kontak";
import { WHATSAPP_LINK } from "../data/site";
import kontakHero from "../assets/kontak-hero.png";
import "../sections/kontak/Kontak.css";

export default function Kontak() {
  return (
    <main>
      <PageHero
        badgeIcon={MessageCircle}
        badge="Kontak Tetulung"
        title={
          <>
            Kami Siap Membantu,
            <br />
            <span className="text-primary">Kapanpun</span>{" "}
            <span className="text-teal">Anda Butuh</span>
          </>
        }
        image={kontakHero}
        imageAlt="Tim Tetulung siap melayani Anda"
      >
        <p>
          Punya pertanyaan, saran, atau butuh bantuan? Tim Tetulung siap
          mendengar dan membantu Anda. Jangan ragu untuk menghubungi kami!
        </p>
        <div className="kontak__highlights">
          {KONTAK_HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="kontak__highlight">
              <span className="kontak__highlight-icon">
                <Icon size={18} />
              </span>
              <div>
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </PageHero>

      <ContactSection />

      <CtaPanel
        title="Butuh Bantuan Mendesak?"
        subtitle="Untuk bantuan mendesak terkait transaksi atau keamanan akun, hubungi kami langsung melalui WhatsApp."
      >
        <Button variant="outline" href={WHATSAPP_LINK} icon={MessageCircle}>
          Hubungi WhatsApp Sekarang
        </Button>
      </CtaPanel>

      <FaqSection items={KONTAK_FAQ} />
    </main>
  );
}
