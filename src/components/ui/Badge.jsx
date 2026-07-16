import "./Badge.css";

/**
 * Label pil kecil di atas judul section (mis. "PLATFORM GOTONG ROYONG DIGITAL").
 * @param {import("react").ElementType} [icon] - komponen icon (lucide)
 * @param {"blue"|"amber"} [tone]
 */
export default function Badge({ icon: Icon, tone = "blue", children }) {
  return (
    <span className={`badge badge--${tone}`}>
      {Icon && <Icon size={15} className="badge__icon" />}
      {children}
    </span>
  );
}
