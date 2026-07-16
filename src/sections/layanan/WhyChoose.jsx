import { WHY_CHOOSE } from "../../data/layanan";
import mengapaIllustration from "../../assets/layanan-mengapa.png";
import "./WhyChoose.css";

export default function WhyChoose() {
  return (
    <section className="section">
      <div className="container why-choose">
        <div className="why-choose__visual">
          <img
            src={mengapaIllustration}
            alt="Pengguna memesan bantuan melalui aplikasi"
            loading="lazy"
          />
        </div>

        <div>
          <h2 className="why-choose__title">
            Mengapa Memilih <span className="text-primary">Tetulung?</span>
          </h2>

          <div className="why-choose__list">
            {WHY_CHOOSE.map(({ icon: Icon, title, description }) => (
              <div key={title} className="why-choose__item">
                <span className="why-choose__icon">
                  <Icon size={20} />
                </span>
                <div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
