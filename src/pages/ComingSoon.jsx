import { Hammer } from "lucide-react";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";

export default function ComingSoon() {
  return (
    <main className="section" style={{ textAlign: "center", padding: "120px 24px" }}>
      <Badge icon={Hammer}>Dalam Pengembangan</Badge>
      <h1 style={{ fontSize: "1.75rem", margin: "18px 0 10px" }}>
        Halaman ini sedang <span className="text-primary">disiapkan</span>
      </h1>
      <p style={{ marginBottom: 26 }}>
        Kami sedang membangun halaman ini. Silakan kembali lagi nanti, ya!
      </p>
      <Button variant="primary" href="/">
        Kembali ke Beranda
      </Button>
    </main>
  );
}
