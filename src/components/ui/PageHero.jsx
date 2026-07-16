import Badge from "./Badge";
import "./PageHero.css";

/**
 * Hero halaman dalam (Tentang, Layanan, Cara Kerja, dst).
 * @param {import("react").ElementType} [badgeIcon]
 * @param {string} badge - teks badge
 * @param {import("react").ReactNode} title - judul (bisa berisi <span> highlight)
 * @param {string} [lead] - sub-judul tebal di bawah title
 * @param {import("react").ReactNode} [children] - paragraf deskripsi / actions
 * @param {string} image - ilustrasi kanan
 */
export default function PageHero({ badgeIcon, badge, title, lead, image, imageAlt = "", children }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        <div className="page-hero__content">
          {badge && <Badge icon={badgeIcon}>{badge}</Badge>}
          <h1 className="page-hero__title">{title}</h1>
          {lead && <p className="page-hero__lead">{lead}</p>}
          {children}
        </div>
        <div className="page-hero__visual">
          <img src={image} alt={imageAlt} fetchPriority="high" />
        </div>
      </div>
    </section>
  );
}
