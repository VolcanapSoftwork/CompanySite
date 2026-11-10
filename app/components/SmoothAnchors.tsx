"use client";

import { useEffect } from "react";

const MIN_MS = 450;
const MAX_MS = 1000;

// slow start, quick middle, soft landing
function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/**
 * Animates in-page links (#section, /#section on the same page) as a slide
 * instead of a jump. Offsets for the sticky header, stops if the visitor
 * scrolls themselves, updates the URL and moves focus to the section.
 * Visitors who prefer reduced motion get the instant jump.
 */
export function SmoothAnchors() {
  useEffect(() => {
    let frame = 0;
    let cancel: (() => void) | null = null;

    function headerOffset() {
      const header = document.querySelector<HTMLElement>(".header-shell");
      return (header?.getBoundingClientRect().height ?? 0) + 16;
    }

    function slideTo(target: HTMLElement, hash: string) {
      cancel?.();
      const startY = window.scrollY;
      const endY = Math.max(
        0,
        Math.min(
          target.getBoundingClientRect().top + startY - headerOffset(),
          document.documentElement.scrollHeight - window.innerHeight
        )
      );
      const distance = endY - startY;
      const finish = () => {
        history.pushState(null, "", hash);
        if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      };

      if (Math.abs(distance) < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        window.scrollTo({ top: endY, behavior: "instant" });
        finish();
        return;
      }

      const duration = Math.min(MAX_MS, Math.max(MIN_MS, Math.abs(distance) * 0.35));
      const start = performance.now();
      const stop = () => {
        cancelAnimationFrame(frame);
        window.removeEventListener("wheel", stop);
        window.removeEventListener("touchstart", stop);
        window.removeEventListener("keydown", stop);
        cancel = null;
      };
      cancel = stop;
      // the visitor taking over the scroll ends the animation where it is
      window.addEventListener("wheel", stop, { passive: true });
      window.addEventListener("touchstart", stop, { passive: true });
      window.addEventListener("keydown", stop);

      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        window.scrollTo({ top: startY + distance * easeInOutCubic(t), behavior: "instant" });
        if (t < 1) frame = requestAnimationFrame(step);
        else {
          stop();
          finish();
        }
      };
      frame = requestAnimationFrame(step);
    }

    function onClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element | null)?.closest?.("a[href*='#']") as HTMLAnchorElement | null;
      if (!link || link.target === "_blank") return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) return;
      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;
      event.preventDefault();
      slideTo(target, url.hash);
    }

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      cancel?.();
    };
  }, []);

  return null;
}
