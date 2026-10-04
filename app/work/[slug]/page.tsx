import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { Phrases, plainText } from "../../components/Phrases";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { WorkGallery } from "../../components/WorkGallery";
import { COMPANY_NAME, navItems } from "../../site";
import { getWork, works } from "../../works";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const work = getWork((await params).slug);
  if (!work) return {};
  return {
    title: `${work.name.join(" ")} | ${COMPANY_NAME}`,
    description: plainText(work.detail.overview)
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const work = getWork((await params).slug);
  if (!work) notFound();

  const { detail } = work;
  const Icon = work.icon;

  return (
    <main>
      <div className="page-glow" aria-hidden="true" />

      <SiteHeader navItems={navItems} />

      <section className="case-section work-hero">
        <div className="section-shell work-hero-layout">
          <Link className="work-back" href="/#work">
            <ArrowLeft size={16} aria-hidden="true" />
            ตัวอย่างงานทั้งหมด
          </Link>
          <div className={`work-hero-main${work.screenshot ? " work-hero-main--shot" : ""}`}>
            <div className="work-hero-copy">
              <p className="eyebrow">{work.label}</p>
              <h1>
                {work.name.map((line, index) => (
                  <span key={line}>
                    {index > 0 && <br />}
                    {line}
                  </span>
                ))}
              </h1>
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
                  <Link className="primary-button work-live" href={work.url}>
                    เปิดดู Mockup
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                ) : (
                  <a className="primary-button work-live" href={work.url} target="_blank" rel="noopener noreferrer">
                    เยี่ยมชมระบบจริง
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
            <p className="eyebrow">Screens</p>
            <h2>{work.mockup ? "ภาพตัวอย่างหน้าจอ" : "ภาพตัวอย่างระบบจริง"}</h2>
            {work.galleryNote && (
              <p>
                <Phrases text={work.galleryNote} />
              </p>
            )}
          </div>
          <WorkGallery images={work.gallery} />
        </section>
      )}

      <section className="section-shell work-block">
        <div className="section-heading section-heading--compact">
          <p className="eyebrow">Challenge</p>
          <h2>โจทย์และปัญหาเดิม</h2>
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
          <p className="eyebrow">Solution</p>
          <h2>สิ่งที่เราพัฒนา</h2>
        </div>
        <div className="service-grid">
          {detail.solutions.map((item) => (
            <article className="service-card" key={item.title}>
              <div className="icon-tile">
                <CheckCircle2 size={22} />
              </div>
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
          <p className="eyebrow">Tech Stack</p>
          <h2>เทคโนโลยีที่ใช้</h2>
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
        <h2>มีระบบที่อยากทำแบบนี้?</h2>
        <a className="primary-button" href="/#contact">
          เริ่มโปรเจกต์
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
