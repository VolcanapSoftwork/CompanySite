import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  Globe2,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { QuoteSection } from "./QuoteSection";
import {
  COMPANY_EMAIL,
  COMPANY_NAME,
  LEGAL_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
  languageAlternates,
  localePath,
  type Lang
} from "../site";
import { JsonLd } from "./JsonLd";
import { SHOW_PRICING } from "../pricing";
import { Phrases, plainText } from "./Phrases";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { getWorks, type Work } from "../works";

const SERVICE_ICONS = [Globe2, Layers3, BarChart3, ShieldCheck, Sparkles, Rocket];
const SERVICE_TITLES = [
  "Custom Software Development",
  "Web Application & Portal",
  "Dashboard & Reporting",
  "System Integration",
  "AI & Business Automation",
  "Maintenance & Enhancement"
];
const PROCESS_TITLES = ["Consulting", "Solution Design", "Development", "QA & UAT", "Launch & Support"];

const COPY = {
  th: {
    heroFacts: [...(SHOW_PRICING ? ["ราคาเริ่มต้นเปิดเผย"] : []), "ทีมเดียวตั้งแต่ออกแบบถึงดูแล", "มีผลงานกับหน่วยงานรัฐ"],
    heroTitle: "ออกแบบ|และพัฒนา|ระบบงาน ตามโจทย์|ธุรกิจของคุณ",
    heroLead:
      "คือ software house ที่วิเคราะห์ ออกแบบ และพัฒนาระบบเว็บ|สำหรับองค์กร ตั้งแต่ custom software, web application, dashboard ไปจนถึงดูแลระบบ|หลังเปิดใช้งาน",
    ctaPricing: "ดูราคาเริ่มต้น",
    ctaQuote: "ขอใบเสนอราคา",
    ctaWork: "ดูผลงาน",
    heroAltDesktop: "หน้าภาพรวมระบบบริหารโรงพยาบาล ตัวอย่างหน้าจอที่ทีมออกแบบ",
    heroAltMobile: "แอปพนักงานสำหรับเช็คอินเข้างาน ตัวอย่างหน้าจอมือถือ",
    heroCaption: "ตัวอย่างหน้าจอระบบโรงพยาบาลและแอป HR (Mockup)",
    proofTitle: "ระบบที่เปิดใช้งานจริง",
    servicesTitle: "บริการพัฒนาซอฟต์แวร์|สำหรับองค์กร",
    servicesLead:
      "ครอบคลุมตั้งแต่ custom software, web application, dashboard, integration ไปจนถึง maintenance และการปรับปรุงระบบ|หลังเปิดใช้งาน",
    servicesLinkPricing: "ดูราคาเริ่มต้นของแต่ละระบบ",
    servicesLinkQuote: "ขอใบเสนอราคาสำหรับระบบของคุณ",
    services: [
      "พัฒนาระบบเฉพาะทาง|ตามกระบวนการทำงานจริง|ขององค์กร ตั้งแต่ระบบภายใน|จนถึงระบบให้ลูกค้าใช้งาน",
      "สร้างเว็บแอป, customer portal, admin portal และระบบสมาชิก|ที่ใช้งานง่าย รองรับการขยาย|ในอนาคต",
      "ออกแบบ dashboard และรายงาน|สำหรับผู้บริหาร|หรือทีมปฏิบัติงาน เพื่อเห็นข้อมูลสำคัญ|ได้รวดเร็ว",
      "เชื่อมต่อระบบเดิม, API, database, notification และ workflow หลายส่วน|ให้ทำงานร่วมกัน|เป็นระบบเดียว",
      "เพิ่ม automation หรือ AI เข้าไปช่วย|ลดงานซ้ำ แยกประเภทข้อมูล สรุปผล ค้นหา หรือช่วยตัดสินใจ|เบื้องต้น",
      "ดูแลหลังเปิดใช้งาน แก้ไข ปรับปรุง เพิ่มฟีเจอร์ และทำให้ระบบ|เดินต่อได้|อย่างต่อเนื่อง"
    ],
    workTitle: "ผลงานและตัวอย่างระบบ",
    workLead:
      "ระบบที่เราพัฒนา|และเปิดใช้งานจริง ตั้งแต่ระบบสำหรับ|หน่วยงานระดับชาติ ไปจนถึงสื่อการเรียนรู้แบบ WebAR และ 3D พร้อมตัวอย่างหน้าจอ|ระบบองค์กรอย่าง ระบบโรงพยาบาล, HR และ CRM",
    kindMockup: "ตัวอย่างระบบ (Mockup)",
    kindLive: "เปิดใช้งานจริง",
    more: "ดูรายละเอียด",
    processTitle: "ขั้นตอนการทำงาน",
    processLead: "ทำงานเป็นรอบสั้น ๆ มี scope ชัด ตรวจงานได้เป็นระยะ และพร้อมส่งขึ้นใช้งานจริง",
    process: [
      "วิเคราะห์ปัญหา เป้าหมาย ผู้ใช้ และ workflow เพื่อกำหนด solution ที่เหมาะ|กับธุรกิจ",
      "วาง architecture, UX/UI, data flow และ scope ให้เห็นภาพระบบ|ก่อนเริ่มพัฒนา",
      "พัฒนาเป็น sprint พร้อม demo เป็นระยะ เพื่อให้ทีมตรวจสอบ|และปรับรายละเอียด|ได้เร็ว",
      "ทดสอบการใช้งานจริง ตรวจ edge cases และแก้ปัญหา|ก่อนส่งขึ้น production",
      "deploy ระบบ ส่งมอบเอกสาร และดูแลปรับปรุงต่อ|หลังเริ่มใช้งาน"
    ],
    // The government work is shown by its system, not the agency: the homepage keeps
    // that reference low-key, and the full names live on the detail page
    shortNames: { "tatip-hint-reporting": "ระบบแจ้งเบาะแสคดีค้ามนุษย์" } as Record<string, string>,
    shortDescriptions: {
      "tatip-hint-reporting": "เว็บไซต์ให้ประชาชนแจ้งเบาะแส|แบบปกปิดตัวตนได้ พร้อมระบบหลังบ้าน|ให้เจ้าหน้าที่คัดกรองและติดตามคดี"
    } as Record<string, string>
  },
  en: {
    heroFacts: [
      ...(SHOW_PRICING ? ["Published starting prices"] : []),
      "One team from design to support",
      "Proven work with government agencies"
    ],
    heroTitle: "We design and build systems around your business",
    heroLead:
      "is a software house that analyses, designs and builds web systems for organisations, from custom software, web applications and dashboards to support after launch.",
    ctaPricing: "See starting prices",
    ctaQuote: "Request a quote",
    ctaWork: "See our work",
    heroAltDesktop: "Overview page of a hospital management system, a sample screen designed by our team",
    heroAltMobile: "Employee check-in app, a sample mobile screen",
    heroCaption: "Sample screens from a hospital system and an HR app (Mockup)",
    proofTitle: "Systems in live use",
    servicesTitle: "Software development for organisations",
    servicesLead:
      "From custom software, web applications, dashboards and integration to maintenance and improvements after launch.",
    servicesLinkPricing: "See starting prices for each system",
    servicesLinkQuote: "Request a quote for your system",
    services: [
      "Purpose-built systems that follow how your organisation actually works, from internal tools to customer-facing systems.",
      "Web apps, customer portals, admin portals and membership systems that are easy to use and ready to grow.",
      "Dashboards and reports for executives or operations teams, so key data is visible at a glance.",
      "Connect existing systems, APIs, databases, notifications and multi-step workflows so they work as one.",
      "Add automation or AI to cut repetitive work, classify data, summarise, search and support everyday decisions.",
      "Post-launch care: fixes, improvements and new features that keep your system running."
    ],
    workTitle: "Our work and sample systems",
    workLead:
      "Systems we have built and launched, from a platform for a national agency to WebAR and 3D learning tools, plus sample screens of business systems such as hospital, HR and CRM.",
    kindMockup: "Sample system (Mockup)",
    kindLive: "Live system",
    more: "View details",
    processTitle: "How we work",
    processLead: "Short cycles, clear scope, regular reviews, and ready for production.",
    process: [
      "Analyse problems, goals, users and workflows to define the right solution for your business.",
      "Plan the architecture, UX/UI, data flow and scope so the whole system is clear before development starts.",
      "Build in sprints with regular demos, so your team can review and adjust details quickly.",
      "Test real-world use, check edge cases and fix issues before going to production.",
      "Deploy the system, hand over documentation and keep improving it after go-live."
    ],
    shortNames: { "tatip-hint-reporting": "Human Trafficking Tip Reporting System" } as Record<string, string>,
    shortDescriptions: {
      "tatip-hint-reporting": "A website where the public can report tips anonymously, with a back office for officers to screen and track cases."
    } as Record<string, string>
  }
};

const thumbOverride: Record<string, string> = {
  "tatip-hint-reporting": "/works/tatip/desktop-reporting.webp"
};

function workThumb(work: Work) {
  const override = work.gallery?.find((image) => image.src === thumbOverride[work.slug]);
  if (override) return { ...override, phone: false };
  const desktop = work.gallery?.find((image) => image.device === "desktop");
  if (desktop) return { ...desktop, phone: false };
  const mobile = work.gallery?.find((image) => image.device === "mobile");
  if (mobile) return { ...mobile, phone: true };
  return work.screenshot ? { ...work.screenshot, phone: false } : null;
}

export function homeMetadata(lang: Lang): Metadata {
  const url = localePath(lang, "/");
  return {
    alternates: { canonical: url, languages: languageAlternates("/") },
    openGraph: { url }
  };
}

export function HomePage({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  const works = getWorks(lang);
  // Shipped systems, shown as a quiet reference row under the hero
  const liveWorks = works.filter((work) => !work.mockup);
  const workHref = (slug: string) => localePath(lang, `/work/${slug}`);
  const services = SERVICE_TITLES.map((title, i) => ({ title, icon: SERVICE_ICONS[i], text: t.services[i] }));
  const process = PROCESS_TITLES.map((title, i) => ({ title, text: t.process[i] }));
  const pageUrl = `${SITE_URL}${lang === "en" ? "/en" : ""}`;

  const organizationLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#organization`,
        name: COMPANY_NAME,
        legalName: LEGAL_NAME[lang],
        alternateName: lang === "en" ? LEGAL_NAME.th : LEGAL_NAME.en,
        url: SITE_URL,
        logo: `${SITE_URL}/volcanap-vcn.png`,
        image: `${SITE_URL}/volcanap-vcn.png`,
        email: COMPANY_EMAIL,
        description: SITE_DESCRIPTION[lang],
        address: { "@type": "PostalAddress", addressCountry: "TH" },
        areaServed: { "@type": "Country", name: "Thailand" },
        knowsLanguage: ["th", "en"],
        makesOffer: services.map((service) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: service.title, description: plainText(service.text) }
        }))
      },
      {
        "@type": "WebSite",
        "@id": `${pageUrl}/#website`,
        url: pageUrl,
        name: COMPANY_NAME,
        inLanguage: lang,
        publisher: { "@id": `${SITE_URL}/#organization` }
      }
    ]
  };

  return (
    <main>
      <JsonLd data={organizationLd} />
      <SiteHeader lang={lang} path="/" />

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <h1>
            <Phrases text={t.heroTitle} />
          </h1>
          <p className="hero-lead">
            <strong>VOLCANAP SOFTWORK</strong> <Phrases text={t.heroLead} />
          </p>
          <div className="hero-actions">
            <a className="button button--primary button--lg" href={SHOW_PRICING ? "#pricing" : "#contact"}>
              {SHOW_PRICING ? t.ctaPricing : t.ctaQuote}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button--secondary button--lg" href="#work">
              {t.ctaWork}
            </a>
          </div>
          <ul className="hero-facts">
            {t.heroFacts.map((fact) => (
              <li key={fact}>
                <Check size={16} aria-hidden="true" />
                <Phrases text={fact} />
              </li>
            ))}
          </ul>
        </div>

        <figure className="hero-visual">
          <div className="browser-frame">
            <div className="browser-bar" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="browser-crop">
              <Image
                src="/works/mockups/his-overview-desktop.webp"
                alt={t.heroAltDesktop}
                width={2160}
                height={1350}
                sizes="(max-width: 980px) 150vw, 960px"
                quality={85}
                priority
              />
            </div>
          </div>
          <div className="phone-frame">
            <Image
              src="/works/mockups/hr-app-mobile.webp"
              alt={t.heroAltMobile}
              width={674}
              height={1480}
              sizes="(max-width: 680px) 32vw, 190px"
              quality={85}
              priority
            />
          </div>
          <figcaption>{t.heroCaption}</figcaption>
        </figure>
      </section>

      <section className="proof shell" aria-labelledby="proof-title">
        <h2 id="proof-title" className="proof-title">
          {t.proofTitle}
        </h2>
        <ul className="proof-list">
          {liveWorks.map((work) => {
            const Icon = work.icon;
            return (
              <li key={work.slug}>
                <Link href={workHref(work.slug)} className="proof-item">
                  <span className="proof-mark" aria-hidden="true">
                    {work.logo ? (
                      <Image src={work.logo} alt="" width={2000} height={2000} sizes="40px" />
                    ) : (
                      Icon && <Icon size={22} />
                    )}
                  </span>
                  <span className="proof-text">
                    <strong>{t.shortNames[work.slug] ?? work.name.join(" ")}</strong>
                    <span>{work.label}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="section shell services" id="services">
        <div className="section-head section-head--side">
          <h2>
            <Phrases text={t.servicesTitle} />
          </h2>
          <p>
            <Phrases text={t.servicesLead} />
          </p>
          <a className="text-link" href={SHOW_PRICING ? "#pricing" : "#contact"}>
            {SHOW_PRICING ? t.servicesLinkPricing : t.servicesLinkQuote}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
        <ul className="service-list">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <li className="service-item" key={service.title}>
                <Icon className="service-icon" size={24} strokeWidth={1.75} aria-hidden="true" />
                <h3>{service.title}</h3>
                <p>
                  <Phrases text={service.text} />
                </p>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="section section--tint" id="work">
        <div className="shell">
          <div className="section-head">
            <h2>{t.workTitle}</h2>
            <p>
              <Phrases text={t.workLead} />
            </p>
          </div>
          <ul className="work-grid">
            {works.map((work) => {
              const thumb = workThumb(work);
              return (
                <li className="work-card" key={work.slug}>
                  <Link href={workHref(work.slug)} className="work-card-link">
                    <span className={`work-thumb${thumb?.phone ? " work-thumb--phone" : ""}${work.mockup ? " work-thumb--mockup" : ""}`}>
                      {thumb && (
                        <Image
                          src={thumb.src}
                          alt=""
                          width={thumb.width}
                          height={thumb.height}
                          // the thumbnail is zoomed to 135% of the card, so ask for that width
                          sizes={thumb.phone ? "200px" : "(max-width: 680px) 125vw, (max-width: 980px) 62vw, 520px"}
                          quality={85}
                        />
                      )}
                    </span>
                    <span className="work-meta">
                      <span className="work-name">{t.shortNames[work.slug] ?? work.name.join(" ")}</span>
                      <span className={`work-kind${work.mockup ? " work-kind--mockup" : ""}`}>
                        {work.mockup ? t.kindMockup : t.kindLive}
                      </span>
                      <span className="work-desc">
                        <Phrases text={t.shortDescriptions[work.slug] ?? work.description} />
                      </span>
                      <span className="work-more">
                        {t.more}
                        <ArrowRight size={16} aria-hidden="true" />
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section shell" id="process">
        <div className="section-head">
          <h2>{t.processTitle}</h2>
          <p>
            <Phrases text={t.processLead} />
          </p>
        </div>
        <ol className="steps">
          {process.map((item, index) => (
            <li className="step" key={item.title}>
              <span className="step-num" aria-hidden="true">
                {index + 1}
              </span>
              <h3>{item.title}</h3>
              <p>
                <Phrases text={item.text} />
              </p>
            </li>
          ))}
        </ol>
      </section>

      <QuoteSection lang={lang} />

      <SiteFooter lang={lang} />
    </main>
  );
}
