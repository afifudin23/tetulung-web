import "./ServiceCard.css";

/**
 * Card layanan (Titip Beli, Belanja Harian, dst).
 * @param {import("react").ElementType} icon - komponen icon (lucide)
 * @param {string} color - warna icon
 * @param {string} bg - warna lingkaran di belakang icon
 */
export default function ServiceCard({ icon: Icon, color, bg, title, description }) {
  return (
    <article className="service-card">
      <span className="service-card__icon" style={{ background: bg }}>
        <Icon size={30} color={color} strokeWidth={2.2} />
      </span>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{description}</p>
    </article>
  );
}
