import { COMMITMENT } from "../../data/tentang";
import komitmenIllustration from "../../assets/tentang-komitmen.png";
import "./Commitment.css";

export default function Commitment() {
  return (
    <section className="section">
      <div className="container">
        <div className="commitment">
          <img
            src={komitmenIllustration}
            alt=""
            className="commitment__image"
            loading="lazy"
          />
          <div>
            <h2 className="commitment__title">Komitmen Kami</h2>
            <p className="commitment__text">{COMMITMENT}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
