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
import { QuoteSection } from "./components/QuoteSection";
import { COMPANY_EMAIL, COMPANY_NAME, SITE_DESCRIPTION, SITE_URL, navItems } from "./site";
import { JsonLd } from "./components/JsonLd";
import { SHOW_PRICING } from "./pricing";
import { Phrases } from "./components/Phrases";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { works } from "./works";

const heroFacts = [
  ...(SHOW_PRICING ? ["ราคาเริ่มต้นเปิดเผย"] : []),
  "ทีมเดียวตั้งแต่ออกแบบถึงดูแล",
  "มีผลงานกับหน่วยงานรัฐ"
];

const services = [
  {
    icon: Globe2,
    title: "Custom Software Development",
    text: "พัฒนาระบบเฉพาะทาง|ตามกระบวนการทำงานจริง|ขององค์กร ตั้งแต่ระบบภายใน|จนถึงระบบให้ลูกค้าใช้งาน"
  },
  {
    icon: Layers3,
    title: "Web Application & Portal",
    text: "สร้างเว็บแอป, customer portal, admin portal และระบบสมาชิก|ที่ใช้งานง่าย รองรับการขยาย|ในอนาคต"
  },
  {
    icon: BarChart3,
    title: "Dashboard & Reporting",
    text: "ออกแบบ dashboard และรายงาน|สำหรับผู้บริหาร|หรือทีมปฏิบัติงาน เพื่อเห็นข้อมูลสำคัญ|ได้รวดเร็ว"
  },
  {
    icon: ShieldCheck,
    title: "System Integration",
    text: "เชื่อมต่อระบบเดิม, API, database, notification และ workflow หลายส่วน|ให้ทำงานร่วมกัน|เป็นระบบเดียว"
  },
  {
    icon: Sparkles,
    title: "AI & Business Automation",
    text: "เพิ่ม automation หรือ AI เข้าไปช่วย|ลดงานซ้ำ แยกประเภทข้อมูล สรุปผล ค้นหา หรือช่วยตัดสินใจ|เบื้องต้น"
  },
  {
    icon: Rocket,
    title: "Maintenance & Enhancement",
    text: "ดูแลหลังเปิดใช้งาน แก้ไข ปรับปรุง เพิ่มฟีเจอร์ และทำให้ระบบ|เดินต่อได้|อย่างต่อเนื่อง"
  }
];

const process = [
  {
    title: "Consulting",
    text: "วิเคราะห์ปัญหา เป้าหมาย ผู้ใช้ และ workflow เพื่อกำหนด solution ที่เหมาะ|กับธุรกิจ"
  },
  {
    title: "Solution Design",
    text: "วาง architecture, UX/UI, data flow และ scope ให้เห็นภาพระบบ|ก่อนเริ่มพัฒนา"
  },
  {
    title: "Development",
    text: "พัฒนาเป็น sprint พร้อม demo เป็นระยะ เพื่อให้ทีมตรวจสอบ|และปรับรายละเอียด|ได้เร็ว"
  },
  {
    title: "QA & UAT",
    text: "ทดสอบการใช้งานจริง ตรวจ edge cases และแก้ปัญหา|ก่อนส่งขึ้น production"
  },
  {
    title: "Launch & Support",
    text: "deploy ระบบ ส่งมอบเอกสาร และดูแลปรับปรุงต่อ|หลังเริ่มใช้งาน"
  }
];

// Shipped systems, shown as a quiet reference row under the hero
const liveWorks = works.filter((work) => !work.mockup);

// The government work is shown by its system, not the agency: the homepage keeps
// that reference low-key, and the full names live on the detail page
const shortNames: Record<string, string> = {
  "tatip-hint-reporting": "ระบบแจ้งเบาะแสคดีค้ามนุษย์"
};
const shortDescriptions: Record<string, string> = {
  "tatip-hint-reporting": "เว็บไซต์ให้ประชาชนแจ้งเบาะแส|แบบปกปิดตัวตนได้ พร้อมระบบหลังบ้าน|ให้เจ้าหน้าที่คัดกรองและติดตามคดี"
};
const thumbOverride: Record<string, string> = {
  "tatip-hint-reporting": "/works/tatip/desktop-reporting.webp"
};

function workThumb(work: (typeof works)[number]) {
  const override = work.gallery?.find((image) => image.src === thumbOverride[work.slug]);
  if (override) return { ...override, phone: false };
  const desktop = work.gallery?.find((image) => image.device === "desktop");
  if (desktop) return { ...desktop, phone: false };
  const mobile = work.gallery?.find((image) => image.device === "mobile");
  if (mobile) return { ...mobile, phone: true };
  return work.screenshot ? { ...work.screenshot, phone: false } : null;
}

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" }
};

const organizationLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: COMPANY_NAME,
      alternateName: "โวลคานาป ซอฟต์เวิร์ค",
      url: SITE_URL,
      logo: `${SITE_URL}/volcanap-vcn.png`,
      image: `${SITE_URL}/volcanap-vcn.png`,
      email: COMPANY_EMAIL,
      description: SITE_DESCRIPTION,
      address: { "@type": "PostalAddress", addressCountry: "TH" },
      areaServed: { "@type": "Country", name: "Thailand" },
      knowsLanguage: ["th", "en"],
      makesOffer: services.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service.title, description: service.text.replace(/|/g, "") }
      }))
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: COMPANY_NAME,
      inLanguage: "th",
      publisher: { "@id": `${SITE_URL}/#organization` }
    }
  ]
};

export default function Home() {
  return (
    <main>
      <JsonLd data={organizationLd} />
      <SiteHeader navItems={navItems} />

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <h1>
            <Phrases text="ออกแบบ|และพัฒนา|ระบบงาน ตามโจทย์|ธุรกิจของคุณ" />
          </h1>
          <p className="hero-lead">
            <strong>VOLCANAP SOFTWORK</strong>{" "}
            <Phrases
              text={"คือ software house ที่วิเคราะห์ ออกแบบ และพัฒนาระบบเว็บ|สำหรับองค์กร ตั้งแต่ custom software, web application, dashboard ไปจนถึงดูแลระบบ|หลังเปิดใช้งาน"}
            />
          </p>
          <div className="hero-actions">
            <a className="button button--primary button--lg" href={SHOW_PRICING ? "#pricing" : "#contact"}>
              {SHOW_PRICING ? "ดูราคาเริ่มต้น" : "ขอใบเสนอราคา"}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button--secondary button--lg" href="#work">
              ดูผลงาน
            </a>
          </div>
          <ul className="hero-facts">
            {heroFacts.map((fact) => (
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
              alt="หน้าภาพรวมระบบบริหารโรงพยาบาล ตัวอย่างหน้าจอที่ทีมออกแบบ"
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
              alt="แอปพนักงานสำหรับเช็คอินเข้างาน ตัวอย่างหน้าจอมือถือ"
              width={674}
              height={1480}
              sizes="(max-width: 680px) 32vw, 190px"
              quality={85}
              priority
            />
          </div>
          <figcaption>ตัวอย่างหน้าจอระบบโรงพยาบาลและแอป HR (Mockup)</figcaption>
        </figure>
      </section>

      <section className="proof shell" aria-labelledby="proof-title">
        <h2 id="proof-title" className="proof-title">
          ระบบที่เปิดใช้งานจริง
        </h2>
        <ul className="proof-list">
          {liveWorks.map((work) => {
            const Icon = work.icon;
            return (
              <li key={work.slug}>
                <Link href={`/work/${work.slug}`} className="proof-item">
                  <span className="proof-mark" aria-hidden="true">
                    {work.logo ? (
                      <Image src={work.logo} alt="" width={2000} height={2000} sizes="40px" />
                    ) : (
                      Icon && <Icon size={22} />
                    )}
                  </span>
                  <span className="proof-text">
                    <strong>{shortNames[work.slug] ?? work.name.join(" ")}</strong>
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
            <Phrases text="บริการพัฒนาซอฟต์แวร์|สำหรับองค์กร" />
          </h2>
          <p>
            <Phrases text={"ครอบคลุมตั้งแต่ custom software, web application, dashboard, integration ไปจนถึง maintenance และการปรับปรุงระบบ|หลังเปิดใช้งาน"} />
          </p>
          <a className="text-link" href={SHOW_PRICING ? "#pricing" : "#contact"}>
            {SHOW_PRICING ? "ดูราคาเริ่มต้นของแต่ละระบบ" : "ขอใบเสนอราคาสำหรับระบบของคุณ"}
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
            <h2>ผลงานและตัวอย่างระบบ</h2>
            <p>
              <Phrases text={"ระบบที่เราพัฒนา|และเปิดใช้งานจริง ตั้งแต่ระบบสำหรับ|หน่วยงานระดับชาติ ไปจนถึงสื่อการเรียนรู้แบบ WebAR และ 3D พร้อมตัวอย่างหน้าจอ|ระบบองค์กรอย่าง ระบบโรงพยาบาล, HR และ CRM"} />
            </p>
          </div>
          <ul className="work-grid">
            {works.map((work) => {
              const thumb = workThumb(work);
              return (
                <li className="work-card" key={work.slug}>
                  <Link href={`/work/${work.slug}`} className="work-card-link">
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
                      <span className="work-name">{shortNames[work.slug] ?? work.name.join(" ")}</span>
                      <span className={`work-kind${work.mockup ? " work-kind--mockup" : ""}`}>
                        {work.mockup ? "ตัวอย่างระบบ (Mockup)" : "เปิดใช้งานจริง"}
                      </span>
                      <span className="work-desc">
                        <Phrases text={shortDescriptions[work.slug] ?? work.description} />
                      </span>
                      <span className="work-more">
                        ดูรายละเอียด
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
          <h2>ขั้นตอนการทำงาน</h2>
          <p>
            <Phrases text="ทำงานเป็นรอบสั้น ๆ มี scope ชัด ตรวจงานได้เป็นระยะ และพร้อมส่งขึ้นใช้งานจริง" />
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

      <QuoteSection />

      <SiteFooter />
    </main>
  );
}
