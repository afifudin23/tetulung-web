import { BENEFITS } from "../../data/gabung";
import "./Benefits.css";

export default function Benefits() {
  return (
    <section className="section">
      <div className="container">
        <div className="benefits">
          <div className="benefits__intro">
            <h2>
              Keuntungan Menjadi
              <br />
              <span className="text-teal">Tukang Tulung</span>
            </h2>
            <p>
              Bergabung bersama Tetulung memberikan banyak keuntungan untuk
              Anda yang ingin membantu sesama dan mendapatkan penghasilan
              tambahan.
            </p>
          </div>

          <div className="benefits__grid">
            {BENEFITS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="benefits__item">
                <span className="benefits__icon">
                  <Icon size={26} />
                </span>
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
