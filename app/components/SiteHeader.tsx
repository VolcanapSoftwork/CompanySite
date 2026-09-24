"use client";

import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

export function SiteHeader({ navItems }: { navItems: NavItem[] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const shellRef = useRef<HTMLDivElement>(null);

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
        <a className="brand" href="#top" aria-label="VOLCANAP SOFTWORK home">
          <Image
            src="/volcanap-logo.png"
            alt="VOLCANAP SOFTWORK logo"
            width={48}
            height={48}
            sizes="48px"
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
        <a className="header-cta" href="#contact">
          เริ่มโปรเจกต์
          <ArrowRight size={16} aria-hidden="true" />
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="mobile-nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            เริ่มโปรเจกต์
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </nav>
      )}
    </div>
  );
}
