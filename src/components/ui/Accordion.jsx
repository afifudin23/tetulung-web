import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./Accordion.css";

/**
 * Accordion FAQ.
 * @param {{question: string, answer: string, number?: number}[]} items
 * @param {import("react").ElementType} [itemIcon] - icon opsional di kiri pertanyaan
 * @param {"soft"|"numbered"} [variant] - soft: bg biru muda; numbered: card putih bernomor
 * @param {1|2} [columns] - jumlah kolom grid
 * @param {boolean} [multiple] - tiap item bisa terbuka bersamaan
 * @param {boolean|number} [defaultOpen] - true: semua terbuka (saat multiple);
 *   angka: index item yang terbuka di awal
 */
export default function Accordion({
  items,
  itemIcon: ItemIcon,
  variant = "soft",
  columns = 1,
  multiple = false,
  defaultOpen = false,
}) {
  const [openSet, setOpenSet] = useState(() => {
    if (typeof defaultOpen === "number") return new Set([defaultOpen]);
    if (multiple && defaultOpen) return new Set(items.map((_, i) => i));
    return new Set();
  });

  const toggle = (i) => {
    setOpenSet((prev) => {
      const next = new Set(multiple ? prev : []);
      if (prev.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <div
      className={`accordion accordion--${variant} ${
        columns === 2 ? "accordion--2col" : ""
      }`}
    >
      {items.map((item, i) => {
        const open = openSet.has(i);
        const number = item.number ?? i + 1;
        return (
          <div key={item.question} className={`accordion__item ${open ? "is-open" : ""}`}>
            <button
              type="button"
              className="accordion__trigger"
              aria-expanded={open}
              onClick={() => toggle(i)}
            >
              {variant === "numbered" ? (
                <span className="accordion__number">
                  {String(number).padStart(2, "0")}
                </span>
              ) : (
                ItemIcon && (
                  <span className="accordion__icon">
                    <ItemIcon size={15} />
                  </span>
                )
              )}
              <span className="accordion__question">{item.question}</span>
              <ChevronDown size={18} className="accordion__chevron" />
            </button>
            {open && <p className="accordion__answer">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
