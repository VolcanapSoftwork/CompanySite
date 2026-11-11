import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Phrases, plainText } from "./Phrases";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { WorkGallery } from "./WorkGallery";
import { SITE_URL, languageAlternates, localePath, type Lang } from "../site";
import { JsonLd } from "./JsonLd";
import { getWork, works, type Work } from "../works";

const COPY = {
  th: {
    back: "ตัวอย่างงานทั้งหมด",
    live: "เปิดใช้งานจริง",
    openMockup: "เปิดดู Mockup",
    visitLive: "เยี่ยมชมระบบจริง",
    screensMockup: "ภาพตัวอย่างหน้าจอ",
    screensLive: "ภาพตัวอย่างระบบจริง",
    challenges: "โจทย์และปัญหาเดิม",
    solutions: "สิ่งที่เราพัฒนา",
    stack: "เทคโนโลยีที่ใช้",
    ctaTitle: "มีระบบที่อยากทำแบบนี้?",
    cta: "ขอใบเสนอราคา",
    crumbHome: "หน้าแรก",
    crumbWork: "ผลงาน"
  },
  en: {
    back: "All work",
    live: "Live system",
    openMockup: "Open Mockup",
    visitLive: "Visit the live system",
    screensMockup: "Sample screens",
    screensLive: "Screens from the live system",
    challenges: "The challenge",
    solutions: "What we built",
    stack: "Technology",
    ctaTitle: "Planning a system like this?",
    cta: "Request a quote",
    crumbHome: "Home",
    crumbWork: "Work"
  }
};

export type WorkParams = { params: Promise<{ slug: string }> };

// A landscape screenshot shares best; fall back to the hero shot
function shareImage(work: Work) {
  return work.gallery?.find((image) => image.device === "desktop") ?? work.screenshot ?? null;
}

export function workStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function workMetadata(lang: Lang, { params }: WorkParams): Promise<Metadata> {
  const work = getWork((await params).slug, lang);
  if (!work) return {};
  const title = work.name.join(" ");
  const description = plainText(work.detail.overview);
  const image = shareImage(work);
  const path = `/work/${work.slug}`;
  const url = localePath(lang, path);
  return {
    title,
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      ...(image && { images: [{ url: image.src, width: image.width, height: image.height, alt: image.alt }] })
    },
    twitter: { card: "summary_large_image", title, description, ...(image && { images: [image.src] }) }
  };
}

export async function WorkDetailPage({ lang, params }: WorkParams & { lang: Lang }) {
  const work = getWork((await params).slug, lang);
  if (!work) notFound();

  const t = COPY[lang];
  const { detail } = work;
  const Icon = work.icon;
  const image = shareImage(work);
  const path = `/work/${work.slug}`;
  const home = localePath(lang, "/");
  const homeUrl = `${SITE_URL}${lang === "en" ? "/en" : ""}`;
  const pageUrl = `${SITE_URL}${localePath(lang, path)}`;
  const workLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${pageUrl}#work`,
        name: work.name.join(" "),
        description: plainText(work.detail.overview),
        url: pageUrl,
        inLanguage: lang,
        keywords: work.tags.join(", "),
        ...(image && { image: `${SITE_URL}${image.src}` }),
        creator: { "@id": `${SITE_URL}/#organization` }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t.crumbHome, item: homeUrl },
          { "@type": "ListItem", position: 2, name: t.crumbWork, item: `${homeUrl}/#work` },
          { "@type": "ListItem", position: 3, name: work.name.join(" "), item: pageUrl }
        ]
      }
    ]
  };

  return (
    <main>
      <JsonLd data={workLd} />
      <SiteHeader lang={lang} path={path} />

      <section className="case-section work-hero">
        <div className="section-shell work-hero-layout">
          <Link className="work-back" href={`${home}#work`}>
            <ArrowLeft size={16} aria-hidden="true" />
            {t.back}
          </Link>
          <div className={`work-hero-main${work.screenshot ? " work-hero-main--shot" : ""}`}>
            <div className="work-hero-copy">
              <h1>
                {work.name.map((line, index) => (
                  <span key={line}>
                    {index > 0 && <br />}
                    {line}
                  </span>
                ))}
              </h1>
              <p className="work-hero-kind">{work.mockup ? work.label : `${t.live} · ${work.label}`}</p>
              <p className="case-copy">
                <Phrases text={detail.overview} />
              </p>
              <div className="case-tags">
                {work.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              {work.url &&
                (work.mockup ? (
                  <Link className="button button--primary work-live" href={work.url}>
                    {t.openMockup}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                ) : (
                  <a className="button button--primary work-live" href={work.url} target="_blank" rel="noopener noreferrer">
                    {t.visitLive}
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                ))}
            </div>
            <div className="work-hero-visual">
              {work.screenshot ? (
                <figure className="work-shot">
                  <Image
                    src={work.screenshot.src}
                    alt={work.screenshot.alt}
                    width={work.screenshot.width}
                    height={work.screenshot.height}
                    sizes="(max-width: 980px) 100vw, 480px"
                    priority
                  />
                  {work.logo && (
                    <div className="work-shot-logo">
                      <Image src={work.logo} alt={work.logoAlt ?? ""} width={2000} height={2000} sizes="88px" />
                    </div>
                  )}
                </figure>
              ) : (
                <div className="agency-logo-wrap work-hero-logo">
                  {work.logo ? (
                    <Image
                      src={work.logo}
                      alt={work.logoAlt ?? ""}
                      width={2000}
                      height={2000}
                      sizes="240px"
                      priority
                    />
                  ) : (
                    Icon && <Icon className="agency-icon" size={96} aria-hidden="true" />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {work.gallery && work.gallery.length > 0 && (
        <section className="section-shell work-block" id="screens">
          <div className="section-heading section-heading--compact">
            <h2>{work.mockup ? t.screensMockup : t.screensLive}</h2>
            {work.galleryNote && (
              <p>
                <Phrases text={work.galleryNote} />
              </p>
            )}
          </div>
          <WorkGallery images={work.gallery} lang={lang} />
        </section>
      )}

      <section className="section-shell work-block">
        <div className="section-heading section-heading--compact">
          <h2>{t.challenges}</h2>
        </div>
        <ul className="work-challenges">
          {detail.challenges.map((item) => (
            <li key={item}>
              <Phrases text={item} />
            </li>
          ))}
        </ul>
      </section>

      <section className="section-shell work-block">
        <div className="section-heading section-heading--compact">
          <h2>{t.solutions}</h2>
        </div>
        <div className="service-grid">
          {detail.solutions.map((item) => (
            <article className="service-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>
                <Phrases text={item.text} />
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell work-block">
        <div className="section-heading section-heading--compact">
          <h2>{t.stack}</h2>
        </div>
        <div className="work-stack">
          {detail.techStack.map((group) => (
            <div className="work-stack-group" key={group.group}>
              <strong>{group.group}</strong>
              <div className="case-tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell work-cta">
        <h2>{t.ctaTitle}</h2>
        <a className="button button--primary" href={`${home}#contact`}>
          {t.cta}
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </section>

      <SiteFooter lang={lang} />
    </main>
  );
}
