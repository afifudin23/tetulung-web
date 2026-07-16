import "./SectionHeading.css";

/**
 * Judul section dengan kata yang di-highlight warna.
 * Contoh: <SectionHeading title="Apa itu" highlight="Tetulung?" />
 * @param {"blue"|"teal"} [highlightColor]
 * @param {"center"|"left"} [align]
 * @param {string} [subtitle]
 * @param {boolean} [decorated] - garis hias di kiri-kanan judul
 * @param {"h2"|"h3"} [as]
 */
export default function SectionHeading({
  title,
  highlight,
  highlightColor = "blue",
  align = "center",
  subtitle,
  decorated = false,
  as: Tag = "h2",
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <Tag
        className={`section-heading__title ${
          decorated ? "section-heading__title--decorated" : ""
        }`}
      >
        <span>
          {title}{" "}
          {highlight && (
            <span
              className={
                highlightColor === "teal" ? "text-teal" : "text-primary"
              }
            >
              {highlight}
            </span>
          )}
        </span>
      </Tag>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
}
