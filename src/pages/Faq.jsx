import { CircleHelp, MessageCircle } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import FaqExplorer from "../sections/faq/FaqExplorer";
import CtaPanel from "../components/ui/CtaPanel";
import Button from "../components/ui/Button";
import { WHATSAPP_LINK } from "../data/site";
import faqHero from "../assets/faq-hero.png";

export default function Faq() {
  return (
    <main>
      <PageHero
        badgeIcon={CircleHelp}
        badge="FAQ"
        title={
          <>
            Pertanyaan yang
            <br />
            <span className="text-primary">Sering</span>{" "}
            <span className="text-teal">Diajukan</span>
          </>
        }
        image={faqHero}
        imageAlt="Tim Tetulung menjawab pertanyaan Anda"
      >
        <p>
          Temukan jawaban atas pertanyaan yang paling sering ditanyakan tentang
          Tetulung. Jika masih ada yang ingin ditanyakan, tim kami siap
          membantu Anda!
        </p>
      </PageHero>

      <FaqExplorer />

      <CtaPanel
        title="Masih belum menemukan jawaban?"
        subtitle="Jangan ragu untuk menghubungi tim Tetulung. Kami siap membantu Anda!"
      >
        <Button variant="outline" href={WHATSAPP_LINK} icon={MessageCircle}>
          Hubungi WhatsApp Sekarang
        </Button>
      </CtaPanel>
    </main>
  );
}
