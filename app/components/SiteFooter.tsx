import Image from "next/image";
import { navItems } from "../site";
import { Phrases } from "./Phrases";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Image src="/volcanap-logo.png" alt="" width={40} height={40} sizes="40px" />
        <div>
          <strong>VOLCANAP SOFTWORK</strong>
          <span>Software House · Bangkok</span>
        </div>
      </div>
      <nav className="footer-nav" aria-label="Footer navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <p className="footer-tagline">
        <Phrases text={"Web systems, dashboards, secure workflows &\u00a0AI-enabled products."} />
      </p>
    </footer>
  );
}
