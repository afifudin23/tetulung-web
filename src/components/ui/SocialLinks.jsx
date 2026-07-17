import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "../../data/site";
import "./SocialLinks.css";

/* Icon brand (lucide-react tidak lagi menyediakan icon brand) */
const InstagramIcon = ({ size = 17, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 17, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const SOCIALS = [
  { icon: InstagramIcon, href: "https://www.instagram.com/tetulung29?igsh=aWtqenJjM3dibWFo", label: "Instagram" },
  { icon: FacebookIcon, href: "https://www.facebook.com/share/1BnqfwpBHS/", label: "Facebook" },
  { icon: MessageCircle, href: WHATSAPP_LINK, label: "WhatsApp" },
];

/**
 * Deretan tombol sosial media.
 * @param {"light"|"dark"} [tone] - light untuk bg terang, dark untuk footer
 */
export default function SocialLinks({ tone = "dark" }) {
  return (
    <div className={`social-links social-links--${tone}`}>
      {SOCIALS.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className="social-links__item"
        >
          <Icon size={17} />
        </a>
      ))}
    </div>
  );
}
