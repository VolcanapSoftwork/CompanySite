"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Box, ChevronLeft, ChevronRight, Monitor, Smartphone, X } from "lucide-react";
import type { WorkImage } from "../works";
import { Phrases, plainText } from "./Phrases";

type Filter = "all" | WorkImage["device"];

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "ทั้งหมด" },
  { value: "desktop", label: "Desktop" },
  { value: "mobile", label: "Mobile" },
  { value: "media", label: "3D & สื่อ" }
];

// Rendered widths of each tile in .gallery-grid (shell 1180px, 1320px from 1600px wide).
// Keep in sync with the gallery-item spans in globals.css, or thumbnails load too small and look blurry.
const THUMB_SIZES: Record<WorkImage["device"] | "wide", string> = {
  desktop: "(max-width: 680px) 94vw, (max-width: 980px) 46vw, (min-width: 1600px) 650px, 580px",
  wide: "(max-width: 680px) 94vw, (max-width: 980px) 70vw, (min-width: 1600px) 980px, 880px",
  mobile: "(max-width: 680px) 46vw, (max-width: 980px) 23vw, (min-width: 1600px) 310px, 280px",
  media: "(max-width: 680px) 46vw, (max-width: 980px) 46vw, (min-width: 1600px) 310px, 280px"
};

// Screenshots are mostly small text, so thumbnails use a higher quality than the default 75
const THUMB_QUALITY = 85;

function DeviceFrame({ image, sizes }: { image: WorkImage; sizes: string }) {
  if (image.device === "media") {
    return (
      <div className="gallery-media">
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes={sizes} quality={THUMB_QUALITY} />
      </div>
    );
  }
  if (image.device === "mobile") {
    return (
      <div className="gallery-phone">
        <span className="gallery-phone-notch" aria-hidden="true" />
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes={sizes} quality={THUMB_QUALITY} />
      </div>
    );
  }
  return (
    <div className="gallery-browser">
      <div className="gallery-browser-bar" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes={sizes} quality={THUMB_QUALITY} />
    </div>
  );
}

export function WorkGallery({ images }: { images: WorkImage[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);

  const visible = filter === "all" ? images : images.filter((image) => image.device === filter);
  const filters = FILTERS.filter((f) => f.value === "all" || images.some((image) => image.device === f.value));

  const step = useCallback(
    (delta: number) => setOpen((current) => (current === null ? null : (current + delta + visible.length) % visible.length)),
    [visible.length]
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open !== null && !dialog.open) {
      dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    }
    if (open === null && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  const current = open === null ? null : visible[open];
  // With an odd number of desktop shots, the last one widens to share a row with a phone
  const desktops = visible.filter((image) => image.device === "desktop");
  const wideSrc = desktops.length % 2 === 1 && visible.some((i) => i.device === "mobile") ? desktops[desktops.length - 1].src : null;

  return (
    <>
      {filters.length > 2 && (
        <div className="gallery-filters" role="tablist" aria-label="กรองภาพตามอุปกรณ์">
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              role="tab"
              aria-selected={filter === f.value}
              className={filter === f.value ? "is-active" : undefined}
              onClick={() => setFilter(f.value)}
            >
              {f.value === "desktop" && <Monitor size={15} aria-hidden="true" />}
              {f.value === "mobile" && <Smartphone size={15} aria-hidden="true" />}
              {f.value === "media" && <Box size={15} aria-hidden="true" />}
              {f.label}
            </button>
          ))}
        </div>
      )}

      <ul className={`gallery-grid gallery-grid--${filter}`}>
        {visible.map((image, index) => (
          <li
            key={image.src}
            className={`gallery-item gallery-item--${image.device}${image.src === wideSrc ? " gallery-item--wide" : ""}`}
          >
            <button type="button" className="gallery-open" onClick={() => setOpen(index)} aria-label={`ดูภาพขยาย: ${plainText(image.caption)}`}>
              <DeviceFrame
                image={image}
                sizes={THUMB_SIZES[image.src === wideSrc ? "wide" : image.device]}
              />
            </button>
            <p className="gallery-caption">
              <Phrases text={image.caption} />
            </p>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="gallery-lightbox"
        aria-label="ภาพตัวอย่างระบบ"
        onClose={() => {
          setOpen(null);
          document.documentElement.style.overflow = "";
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(null); // click on backdrop
        }}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        {current && (
          <figure className={`gallery-lightbox-figure gallery-lightbox-figure--${current.device}`}>
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes={current.device === "mobile" ? "(max-width: 680px) 80vw, 420px" : "(max-width: 1280px) 92vw, 1200px"}
              priority
            />
            <figcaption>
              <span>
                <Phrases text={current.caption} />
              </span>
              <span className="gallery-counter">
                {open! + 1} / {visible.length}
              </span>
            </figcaption>
          </figure>
        )}
        <button type="button" className="gallery-nav gallery-nav--close" onClick={() => setOpen(null)} aria-label="ปิด">
          <X size={22} />
        </button>
        {visible.length > 1 && (
          <>
            <button type="button" className="gallery-nav gallery-nav--prev" onClick={() => step(-1)} aria-label="ภาพก่อนหน้า">
              <ChevronLeft size={26} />
            </button>
            <button type="button" className="gallery-nav gallery-nav--next" onClick={() => step(1)} aria-label="ภาพถัดไป">
              <ChevronRight size={26} />
            </button>
          </>
        )}
      </dialog>
    </>
  );
}
