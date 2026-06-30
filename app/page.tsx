import Image from "next/image";
import {
  BarChart3,
  CheckCircle2,
  ChevronRight,
  FileCheck2,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Rocket,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { ScopeEstimator } from "./components/ScopeEstimator";
import { SiteHeader } from "./components/SiteHeader";

const navItems = [
  { href: "#services", label: "บริการ" },
  { href: "#work", label: "ผลงาน" },
  { href: "#process", label: "ขั้นตอน" },
  { href: "#contact", label: "ติดต่อ" }
];

const highlights = [
  { value: "Full-cycle", label: "Consulting, Design, Dev, Support" },
  { value: "Custom Software", label: "ทำระบบตาม workflow ธุรกิจ" },
  { value: "Gov-ready", label: "มี reference หน่วยงานรัฐ" }
];

const services = [
  {
    icon: Globe2,
    title: "Custom Software Development",
    text: "พัฒนาระบบเฉพาะทางตามกระบวนการทำงานจริงขององค์กร ตั้งแต่ระบบภายในจนถึงระบบให้ลูกค้าใช้งาน"
  },
  {
    icon: Layers3,
    title: "Web Application & Portal",
    text: "สร้างเว็บแอป, customer portal, admin portal และระบบสมาชิกที่ใช้งานง่าย รองรับการขยายในอนาคต"
  },
  {
    icon: BarChart3,
    title: "Dashboard & Reporting",
    text: "ออกแบบ dashboard และรายงานสำหรับผู้บริหารหรือทีมปฏิบัติงาน เพื่อเห็นข้อมูลสำคัญได้รวดเร็ว"
  },
  {
    icon: ShieldCheck,
    title: "System Integration",
    text: "เชื่อมต่อระบบเดิม, API, database, notification และ workflow หลายส่วนให้ทำงานร่วมกันเป็นระบบเดียว"
  },
  {
    icon: Sparkles,
    title: "AI & Business Automation",
    text: "เพิ่ม automation หรือ AI เข้าไปช่วยลดงานซ้ำ แยกประเภทข้อมูล สรุปผล ค้นหา หรือช่วยตัดสินใจเบื้องต้น"
  },
  {
    icon: Rocket,
    title: "Maintenance & Enhancement",
    text: "ดูแลหลังเปิดใช้งาน แก้ไข ปรับปรุง เพิ่มฟีเจอร์ และทำให้ระบบเดินต่อได้อย่างต่อเนื่อง"
  }
];

const process = [
  {
    step: "01",
    title: "Consulting",
    text: "วิเคราะห์ปัญหา เป้าหมาย ผู้ใช้ และ workflow เพื่อกำหนด solution ที่เหมาะกับธุรกิจ"
  },
  {
    step: "02",
    title: "Solution Design",
    text: "วาง architecture, UX/UI, data flow และ scope ให้เห็นภาพระบบก่อนเริ่มพัฒนา"
  },
  {
    step: "03",
    title: "Development",
    text: "พัฒนาเป็น sprint พร้อม demo เป็นระยะ เพื่อให้ทีมตรวจสอบและปรับรายละเอียดได้เร็ว"
  },
  {
    step: "04",
    title: "QA & UAT",
    text: "ทดสอบการใช้งานจริง ตรวจ edge cases และแก้ปัญหาก่อนส่งขึ้น production"
  },
  {
    step: "05",
    title: "Launch & Support",
    text: "deploy ระบบ ส่งมอบเอกสาร และดูแลปรับปรุงต่อหลังเริ่มใช้งาน"
  }
];

const deliveryRoles = ["Business Analyst", "UX/UI Designer", "Full-stack Developer", "QA & Deployment"];

const deliveryStages = [
  { step: "01", title: "Consult", text: "Requirement, workflow, scope" },
  { step: "02", title: "Design", text: "UX/UI, data flow, architecture" },
  { step: "03", title: "Build", text: "Sprint delivery, review, QA" },
  { step: "04", title: "Launch", text: "Deploy, handover, support" }
];

export default function Home() {
  return (
    <main>
      <div className="page-glow" aria-hidden="true" />

      <SiteHeader navItems={navItems} />

      <section className="landing-hero section-shell" id="top">
        <div className="landing-hero-content">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            Software House · Bangkok
          </p>
          <h1 className="hero-brand-name" aria-label="VOLCANAP SOFTWORK">
            <span>VOLCANAP</span>
            <span className="text-gradient">SOFTWORK</span>
          </h1>
          <p className="hero-tagline">Custom Software Development & Digital Product Delivery</p>
          <p className="hero-copy">
            <strong>VOLCANAP SOFTWORK</strong> (โวลคานาป ซอฟต์เวิร์ค) คือ software house ที่ช่วยวิเคราะห์ ออกแบบ
            และพัฒนาระบบเว็บสำหรับองค์กร ตั้งแต่ custom software, web application, dashboard,
            system integration ไปจนถึง maintenance หลังเปิดใช้งาน
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              ขอประเมินงานฟรี
              <ChevronRight size={18} />
            </a>
            <a className="secondary-button" href="#work">
              ดูผลงานหน่วยงานรัฐ
            </a>
          </div>
          <div className="hero-highlights">
            {highlights.map((item) => (
              <div className="hero-highlight" key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="delivery-map" aria-label="VOLCANAP SOFTWORK delivery model">
          <div className="delivery-map-core">
            <Image
              src="/volcanap-logo.png"
              alt="VOLCANAP SOFTWORK logo"
              width={72}
              height={72}
              sizes="72px"
              className="delivery-map-logo"
            />
            <div>
              <span>Software House Delivery</span>
              <strong>ทีมเดียวดูแลตั้งแต่โจทย์ธุรกิจจนถึงระบบใช้งานจริง</strong>
            </div>
          </div>

          <div className="delivery-path" aria-label="Delivery stages">
            {deliveryStages.map((stage) => (
              <div className="delivery-stage" key={stage.step}>
                <span className="delivery-stage-number">{stage.step}</span>
                <div className="delivery-stage-body">
                  <strong>{stage.title}</strong>
                  <p>{stage.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="delivery-lanes" aria-label="Delivery roles">
            {deliveryRoles.map((role) => (
              <div className="delivery-lane" key={role}>
                <CheckCircle2 size={18} />
                <span>{role}</span>
              </div>
            ))}
          </div>

          <p className="delivery-note">
            เหมาะกับองค์กรที่ต้องการพาร์ทเนอร์พัฒนาระบบ ไม่ใช่แค่คนรับทำหน้าเว็บ
          </p>

          <div className="delivery-proof" aria-label="Delivery strengths">
            <span>Business-first</span>
            <span>Production-ready</span>
            <span>Supportable</span>
          </div>
        </div>
      </section>

      <section className="identity-section section-shell" id="identity">
        <div className="identity-content">
          <div className="identity-visual">
            <div className="identity-circle"></div>
            <div className="identity-circle identity-circle--inner"></div>
            <Image
              src="/volcanap-logo.png"
              alt="Volcanap Core"
              width={100}
              height={100}
              sizes="100px"
              className="identity-logo"
            />
          </div>
          <div className="identity-text">
            <p className="eyebrow">Software House Partner</p>
            <h2>ออกแบบระบบจากเป้าหมายธุรกิจ ไม่ใช่แค่จากหน้าจอ</h2>
            <p>
              เราเริ่มจากการเข้าใจปัญหา กระบวนการทำงาน และเป้าหมายขององค์กร
              ก่อนออกแบบระบบที่ทีมใช้งานได้จริง มีโครงสร้างชัดเจน และพร้อมต่อยอดเมื่อธุรกิจเติบโต
            </p>
          </div>
        </div>
      </section>

      <section className="trust-band">
        <div className="trust-item">
          <div className="trust-icon">
            <ShieldCheck size={22} />
          </div>
          <div>
            <strong>ร่วมงานกับหน่วยงานรัฐ</strong>
            <span>มี reference จากหน่วยงานที่ต้องการความน่าเชื่อถือและการทำงานเป็นระบบ</span>
          </div>
        </div>
        <div className="trust-item">
          <div className="trust-icon trust-icon--green">
            <Layers3 size={22} />
          </div>
          <div>
            <strong>มองงานแบบระบบใช้งานจริง</strong>
            <span>เน้น workflow ผู้ใช้ ความปลอดภัย และการส่งมอบที่ต่อยอดได้ในระยะยาว</span>
          </div>
        </div>
      </section>

      <section className="section-shell" id="services">
        <div className="section-heading">
          <p className="eyebrow">Software House Services</p>
          <h2>บริการพัฒนาซอฟต์แวร์สำหรับองค์กร</h2>
          <p>
            ครอบคลุมตั้งแต่ custom software, web application, dashboard, integration
            ไปจนถึง maintenance และการปรับปรุงระบบหลังเปิดใช้งาน
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <div className="icon-tile">
                  <Icon size={22} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="case-section" id="work">
        <div className="section-shell case-layout">
          <div className="case-intro">
            <p className="eyebrow">Proven Experience</p>
            <h2>ได้รับความไว้วางใจจากหน่วยงานระดับชาติ</h2>
            <p className="case-copy">
              ผลงานของเราสะท้อนถึงมาตรฐานระดับสูงและความเชี่ยวชาญ 
              ในการพัฒนาระบบที่ต้องรองรับความปลอดภัย การใช้งานจริง และส่งผลกระทบในวงกว้าง
            </p>
            <div className="case-tags">
              <span>หน่วยงานรัฐ</span>
              <span>Anti-Trafficking</span>
              <span>Royal Thai Police</span>
            </div>
          </div>
          <div className="agency-card">
            <div className="agency-logo-wrap">
              <Image src="/tatip-rtp.png" alt="TATIP RTP logo" width={2000} height={2000} sizes="2000px" />
            </div>
            <div className="agency-body">
              <span className="agency-label">Government Agency</span>
              <strong>
                THE ANTI-TRAFFICKING IN PERSONS CENTER
                <br />
                ROYAL THAI POLICE
              </strong>
              <p>TATIP RTP — ศูนย์ปราบปรามการค้ามนุษย์ สำนักงานตำรวจแห่งชาติ</p>
            </div>
          </div>
        </div>
      </section>

      <section className="process-band" id="process">
        <div className="section-shell">
          <div className="section-heading section-heading--compact">
            <p className="eyebrow">Delivery Model</p>
            <h2>กระบวนการส่งมอบแบบ software house</h2>
            <p>ทำงานเป็นรอบสั้น ๆ มี scope ชัด ตรวจงานได้เป็นระยะ และพร้อมส่งขึ้นใช้งานจริง</p>
          </div>
          <div className="process-steps">
            {process.map((item, index) => (
              <div className="process-step" key={item.step}>
                <span className="process-number">{item.step}</span>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
                {index < process.length - 1 && <span className="process-connector" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Start a Project</p>
          <h2>ประเมิน scope เบื้องต้น</h2>
          <p>
            เลือกประเภทงานที่ต้องการ ระบบจะคำนวณงบเริ่มต้นคร่าว ๆ เพื่อใช้คุย requirement ต่อได้เร็วขึ้น
            ราคาจริงขึ้นกับขอบเขตงาน รายละเอียดการใช้งาน และระยะเวลาส่งมอบ
          </p>
          <div className="contact-list">
            <a className="contact-item" href="mailto:volcanapsoftwork@gmail.com">
              <Mail size={18} />
              volcanapsoftwork@gmail.com
            </a>
            <span className="contact-item">
              <MapPin size={18} />
              Bangkok, Thailand
            </span>
            <span className="contact-item">
              <FileCheck2 size={18} />
              Scope → Prototype → Build → Deploy
            </span>
          </div>
        </div>
        <ScopeEstimator />
      </section>

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
    </main>
  );
}
