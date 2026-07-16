import { Info } from "lucide-react";
import "./InfoBanner.css";

/**
 * Banner informasi dengan icon (mis. status pengembangan aplikasi).
 * @param {import("react").ElementType} [icon]
 */
export default function InfoBanner({ icon: Icon = Info, children }) {
  return (
    <div className="info-banner">
      <Icon size={20} className="info-banner__icon" />
      <p className="info-banner__text">{children}</p>
    </div>
  );
}
