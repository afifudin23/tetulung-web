import { CircleHelp } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Accordion from "./Accordion";

/**
 * Section FAQ standar: judul berhias + accordion 2 kolom dengan icon "?".
 * @param {{question: string, answer: string}[]} items
 * @param {string} [title]
 */
export default function FaqSection({ items, title = "Pertanyaan yang Sering Diajukan" }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title={title} decorated />
        <Accordion items={items} itemIcon={CircleHelp} columns={2} multiple defaultOpen />
      </div>
    </section>
  );
}
