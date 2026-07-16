import { useState } from "react";
import { Send, LockKeyhole, UserRound, Mail, Phone } from "lucide-react";
import { CONTACT_CHANNELS, FORM_SUBJECTS } from "../../data/kontak";
import { WHATSAPP_NUMBER } from "../../data/site";
import "./ContactSection.css";

/* Icon Instagram (lucide-react tidak menyediakan icon brand) */
const InstagramIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const INITIAL_FORM = { name: "", email: "", phone: "", subject: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState(INITIAL_FORM);

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  // Tanpa backend: formulir diteruskan sebagai pesan WhatsApp terisi otomatis
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = [
      `Halo Tetulung, saya ${form.name}.`,
      `Subjek: ${form.subject || "Pertanyaan Umum"}`,
      `Email: ${form.email}`,
      `WhatsApp: ${form.phone}`,
      "",
      form.message,
    ].join("\n");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="section">
      <div className="container contact">
        {/* Formulir */}
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-head">
            <span className="contact__form-icon">
              <Send size={24} />
            </span>
            <div>
              <h2>Kirim Pesan</h2>
              <p>Isi formulir di bawah ini dan tim kami akan segera menghubungi Anda.</p>
            </div>
          </div>

          <label className="contact__field">
            <span>Nama Lengkap</span>
            <div className="contact__input">
              <UserRound size={16} />
              <input
                type="text"
                required
                placeholder="Contoh: Ahmad Syifa Maulidani"
                value={form.name}
                onChange={update("name")}
              />
            </div>
          </label>

          <label className="contact__field">
            <span>Email</span>
            <div className="contact__input">
              <Mail size={16} />
              <input
                type="email"
                required
                placeholder="Contoh: dani@email.com"
                value={form.email}
                onChange={update("email")}
              />
            </div>
          </label>

          <label className="contact__field">
            <span>Nomor WhatsApp</span>
            <div className="contact__input">
              <Phone size={16} />
              <input
                type="tel"
                required
                placeholder="Contoh: 0812-3456-7890"
                value={form.phone}
                onChange={update("phone")}
              />
            </div>
          </label>

          <label className="contact__field">
            <span>Subjek</span>
            <div className="contact__input">
              <select value={form.subject} onChange={update("subject")} required>
                <option value="" disabled>
                  Pilih topik pesan Anda
                </option>
                {FORM_SUBJECTS.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>
          </label>

          <label className="contact__field">
            <span>Pesan</span>
            <div className="contact__input contact__input--area">
              <textarea
                rows={5}
                required
                placeholder="Tulis pesan Anda di sini..."
                value={form.message}
                onChange={update("message")}
              />
            </div>
          </label>

          <button type="submit" className="contact__submit">
            <Send size={17} /> Kirim Pesan
          </button>

          <p className="contact__privacy">
            <LockKeyhole size={13} /> Pesan Anda aman dan tidak akan dibagikan
            kepada pihak lain.
          </p>
        </form>

        {/* Kanal kontak */}
        <div className="contact__channels">
          <h2 className="contact__channels-title">Hubungi Kami Langsung</h2>
          {CONTACT_CHANNELS.map((channel) => {
            const Icon = channel.icon === "instagram" ? InstagramIcon : channel.icon;
            const body = (
              <>
                <span className="contact__channel-icon" style={{ background: channel.iconBg }}>
                  <Icon size={22} />
                </span>
                <div>
                  <h4>{channel.title}</h4>
                  <p>{channel.description}</p>
                  <strong style={{ color: channel.valueColor }}>{channel.value}</strong>
                </div>
              </>
            );
            return channel.href ? (
              <a
                key={channel.title}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__channel"
              >
                {body}
              </a>
            ) : (
              <div key={channel.title} className="contact__channel">
                {body}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
