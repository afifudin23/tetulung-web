import { Link } from "react-router-dom";
import "./Button.css";

/**
 * Tombol reusable.
 * @param {"primary"|"teal"|"whatsapp"|"outline"|"ghost"} variant
 * @param {"md"|"lg"} size
 * @param {string} [href] - jika diisi, render sebagai <a>
 * @param {import("react").ElementType} [icon] - komponen icon (lucide)
 */
export default function Button({
  variant = "primary",
  size = "md",
  href,
  icon: Icon,
  children,
  className = "",
  ...rest
}) {
  const cls = `btn btn--${variant} btn--${size} ${className}`.trim();
  const content = (
    <>
      {Icon && <Icon className="btn__icon" size={size === "lg" ? 20 : 18} />}
      <span>{children}</span>
    </>
  );

  if (href) {
    const external = /^https?:/.test(href);
    if (external) {
      return (
        <a
          href={href}
          className={cls}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {content}
        </a>
      );
    }
    return (
      <Link to={href} className={cls} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={cls} {...rest}>
      {content}
    </button>
  );
}
