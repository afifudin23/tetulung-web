import { UserRound } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import VisionMission from "../sections/tentang/VisionMission";
import Values from "../sections/tentang/Values";
import WhoIs from "../sections/tentang/WhoIs";
import Commitment from "../sections/tentang/Commitment";
import AboutFaq from "../sections/tentang/AboutFaq";
import tentangHero from "../assets/tentang-hero.png";

export default function Tentang() {
  return (
    <main>
      <PageHero
        badgeIcon={UserRound}
        badge="Tentang Tetulung"
        title={
          <>
            Tentang <span className="text-primary">Tetulung</span>
          </>
        }
        lead="Teknologi untuk Menghubungkan, Manusia untuk Saling Membantu."
        image={tentangHero}
        imageAlt="Tukang Tulung membantu warga membawa belanjaan"
      >
        <p>
          Tetulung lahir dari semangat gotong royong masyarakat Indonesia. Kami
          percaya bahwa setiap orang pernah membutuhkan bantuan, dan setiap
          orang juga memiliki kesempatan untuk membantu.
        </p>
        <p>
          Karena itu kami membangun platform yang menghubungkan keduanya secara
          aman, mudah, dan terpercaya.
        </p>
      </PageHero>

      <VisionMission />
      <Values />
      <WhoIs />
      <Commitment />
      <AboutFaq />
    </main>
  );
}
