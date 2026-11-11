import Image from "next/image";
import { Mail } from "lucide-react";
import { COMPANY_EMAIL, COMPANY_NAME, LEGAL_NAME, getNavItems, type Lang } from "../site";
import { Phrases } from "./Phrases";

export function SiteFooter({ lang }: { lang: Lang }) {
  const navItems = getNavItems(lang);
  // The page's own language first, the other registered name beside it
  const names = lang === "en" ? [LEGAL_NAME.en, LEGAL_NAME.th] : [LEGAL_NAME.th, LEGAL_NAME.en];

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Image src="/volcanap-vcn-160.png" alt="" width={40} height={40} unoptimized />
        <div>
          <strong>{COMPANY_NAME}</strong>
          <span>Software House</span>
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
        <Phrases text={"Web systems, dashboards, secure workflows & AI-enabled products."} />
      </p>
      <div className="footer-legal">
        <p className="footer-company">
          <span>
            © {new Date().getFullYear()} {names[0]}
          </span>
          <span lang={lang === "en" ? "th" : "en"}>{names[1]}</span>
        </p>
        <a className="footer-email" href={`mailto:${COMPANY_EMAIL}`}>
          <Mail size={16} aria-hidden="true" />
          {COMPANY_EMAIL}
        </a>
      </div>
    </footer>
  );
}
