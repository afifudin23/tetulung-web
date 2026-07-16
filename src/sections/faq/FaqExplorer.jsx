import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import Accordion from "../../components/ui/Accordion";
import { FAQ_CATEGORIES, FAQ_ITEMS } from "../../data/faq";
import "./FaqExplorer.css";

export default function FaqExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQ_ITEMS
      .map((item, i) => ({ ...item, number: i + 1 }))
      .filter((item) => {
        const matchCategory = !category || item.category === category;
        const matchQuery =
          !q ||
          item.question.toLowerCase().includes(q) ||
          item.answer.toLowerCase().includes(q);
        return matchCategory && matchQuery;
      });
  }, [query, category]);

  return (
    <section className="section">
      <div className="container">
        {/* Pencarian */}
        <div className="faq-explorer__search">
          <Search size={18} />
          <input
            type="search"
            placeholder="Cari pertanyaan..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Cari pertanyaan"
          />
        </div>

        {/* Kategori */}
        <div className="faq-explorer__categories">
          {FAQ_CATEGORIES.map(({ key, icon: Icon, title, description }) => (
            <button
              key={key}
              type="button"
              className={`faq-explorer__category ${
                category === key ? "is-active" : ""
              }`}
              onClick={() => setCategory(category === key ? null : key)}
            >
              <span className="faq-explorer__category-icon">
                <Icon size={20} />
              </span>
              <span>
                <strong>{title}</strong>
                <small>{description}</small>
              </span>
            </button>
          ))}
        </div>

        {/* Daftar pertanyaan */}
        {filtered.length > 0 ? (
          <Accordion items={filtered} variant="numbered" defaultOpen={0} />
        ) : (
          <p className="faq-explorer__empty">
            Tidak ada pertanyaan yang cocok dengan pencarian Anda.
          </p>
        )}
      </div>
    </section>
  );
}
