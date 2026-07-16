import "./CtaPanel.css";

/**
 * Panel CTA besar dengan latar gradasi biru-teal.
 * @param {string} title
 * @param {string} [subtitle]
 * @param {string} [image] - ilustrasi opsional di kiri
 * @param {import("react").ReactNode} children - tombol-tombol aksi
 */
export default function CtaPanel({ title, subtitle, image, children }) {
  return (
    <section className="section">
      <div className="container">
        <div className={`cta-panel ${image ? "cta-panel--row" : ""}`}>
          {image && <img src={image} alt="" className="cta-panel__image" loading="lazy" />}
          <div className="cta-panel__body">
            <h2 className="cta-panel__title">{title}</h2>
            {subtitle && <p className="cta-panel__subtitle">{subtitle}</p>}
            {!image && <div className="cta-panel__actions">{children}</div>}
          </div>
          {image && <div className="cta-panel__actions">{children}</div>}
        </div>
      </div>
    </section>
  );
}
