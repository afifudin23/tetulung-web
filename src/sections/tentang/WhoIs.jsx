import { ROLES } from "../../data/tentang";
import siapaIllustration from "../../assets/tentang-siapa.png";
import "./WhoIs.css";

export default function WhoIs() {
  return (
    <section className="section">
      <div className="container who-is">
        <div>
          <h2 className="who-is__title">
            Siapa Itu <span className="text-primary">Tetulung?</span>
          </h2>
          <p className="who-is__desc">
            Tetulung adalah platform digital yang menjadi jembatan antara
            Pemohon (orang yang membutuhkan bantuan) dan Tukang Tulung (orang
            yang siap membantu).
          </p>

          <div className="who-is__roles">
            {ROLES.map(({ icon: Icon, tone, title, description }) => (
              <div key={title} className="who-is__role">
                <span className={`who-is__role-icon who-is__role-icon--${tone}`}>
                  <Icon size={20} />
                </span>
                <div>
                  <h4 className={tone === "teal" ? "text-teal" : "text-primary"}>
                    {title}
                  </h4>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="who-is__visual">
          <img
            src={siapaIllustration}
            alt="Aplikasi Tetulung menghubungkan berbagai kebutuhan"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
