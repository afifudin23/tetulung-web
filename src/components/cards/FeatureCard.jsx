import "./FeatureCard.css";

/**
 * Card fitur kecil: icon di kiri, judul + deskripsi di kanan.
 * Dipakai di section pengembangan, floating card hero, dll.
 * @param {import("react").ElementType} icon
 * @param {"blue"|"teal"} [tone]
 */
export default function FeatureCard({ icon: Icon, tone = "blue", title, description }) {
  return (
    <article className={`feature-card feature-card--${tone}`}>
      <span className="feature-card__icon">
        <Icon size={20} />
      </span>
      <div>
        <h4 className="feature-card__title">{title}</h4>
        <p className="feature-card__desc">{description}</p>
      </div>
    </article>
  );
}
