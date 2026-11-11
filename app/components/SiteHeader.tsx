"use client";

import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { getNavItems, localePath, type Lang } from "../site";

const COPY = {
  th: { cta: "ขอใบเสนอราคา", home: "VOLCANAP SOFTWORK หน้าแรก", menu: "เปิด/ปิดเมนู", langs: "เลือกภาษา" },
  en: { cta: "Request a quote", home: "VOLCANAP SOFTWORK home", menu: "Toggle navigation menu", langs: "Choose language" }
};

/**
 * TH / EN switch. `path` is the current page without the /en prefix, so each
 * link goes to the same page in the other language.
 */
function LangSwitch({ lang, path, label }: { lang: Lang; path: string; label: string }) {
  return (
    <nav className="lang-switch" aria-label={label}>
      {(["th", "en"] as const).map((code) => (
        <a
          key={code}
          href={localePath(code, path)}
          hrefLang={code}
          lang={code}
          aria-current={code === lang ? "true" : undefined}
          aria-label={code === "th" ? "ภาษาไทย" : "English"}
        >
          {code.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}

export function SiteHeader({ lang, path = "/" }: { lang: Lang; path?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const shellRef = useRef<HTMLDivElement>(null);
  const navItems = getNavItems(lang);
  const t = COPY[lang];
  const home = localePath(lang, "/");

  useEffect(() => {
    if (!menuOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    function onPointerDown(event: PointerEvent) {
      if (!shellRef.current?.contains(event.target as Node)) setMenuOpen(false);
    }

    const media = window.matchMedia("(min-width: 981px)");
    function onBreakpoint() {
      if (media.matches) setMenuOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    media.addEventListener("change", onBreakpoint);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      media.removeEventListener("change", onBreakpoint);
    };
  }, [menuOpen]);

  return (
    <div className="header-shell" ref={shellRef}>
      <header className="site-header">
        <a className="brand" href={`${home}#top`} aria-label={t.home}>
          <Image
            src="/volcanap-vcn-160.png"
            unoptimized
            alt=""
            width={40}
            height={40}
            sizes="40px"
            priority
          />
          <span>
            <strong>VOLCANAP SOFTWORK</strong>
            <small>Software House</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <LangSwitch lang={lang} path={path} label={t.langs} />
          <a className="button button--primary header-cta" href={`${home}#contact`}>
            {t.cta}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={t.menu}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="button button--primary mobile-nav-cta" href={`${home}#contact`} onClick={() => setMenuOpen(false)}>
            {t.cta}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </nav>
      )}
    </div>
  );
}
