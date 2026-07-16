import { Check } from "lucide-react";
import "./ServiceDetailCard.css";

/**
 * Card layanan versi detail (halaman Layanan): deskripsi + checklist.
 * @param {import("react").ElementType} icon
 * @param {string} color - warna icon
 * @param {string} bg - warna lingkaran icon
 * @param {string[]} items - poin-poin layanan
 * @param {string} [note] - catatan tambahan (mis. syarat resep obat)
 */
export default function ServiceDetailCard({ icon: Icon, color, bg, title, description, items = [], note }) {
  return (
    <article className="service-detail-card">
      <div className="service-detail-card__head">
        <span className="service-detail-card__icon" style={{ background: bg }}>
          <Icon size={26} color={color} strokeWidth={2.2} />
        </span>
        <div>
          <h3 className="service-detail-card__title">{title}</h3>
          <p className="service-detail-card__desc">{description}</p>
        </div>
      </div>

      <ul className="service-detail-card__list">
        {items.map((item) => (
          <li key={item}>
            <Check size={15} className="service-detail-card__check" />
            {item}
          </li>
        ))}
      </ul>

      {note && <p className="service-detail-card__note">{note}</p>}
    </article>
  );
}
