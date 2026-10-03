import Image from "next/image";
import { navItems } from "../site";

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
        Web systems, dashboards, secure workflows &amp; AI-enabled products.
      </p>
    </footer>
  );
}
