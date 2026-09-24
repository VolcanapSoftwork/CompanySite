# VOLCANAP SOFTWORK Website Structure

เอกสารนี้สรุปโครงสร้างเว็บไซต์บริษัท VOLCANAP SOFTWORK สำหรับแก้ไขต่อใน Codex หรือสำหรับ developer ที่เข้ามาดูโปรเจกต์นี้ภายหลัง

## Tech Stack

- Framework: Next.js App Router
- Language: TypeScript
- UI: React component ใน `app/page.tsx`
- Styling: CSS ล้วนใน `app/globals.css`
- Icons: `lucide-react`
- Assets: รูปใน `public/`

## File Structure

```text
CompanySite/
├── app/
│   ├── layout.tsx       # metadata, root html/body, import global CSS
│   ├── page.tsx         # หน้าเว็บหลักทั้งหมดของ company site
│   └── globals.css      # styling, responsive layout, theme variables
├── public/
│   ├── volcanap-logo.png
│   └── tatip-rtp.png
├── package.json
├── next.config.ts
├── tsconfig.json
└── codex.md
```

## Page Concept

เว็บไซต์เป็น one-page company site สำหรับ positioning ให้ VOLCANAP SOFTWORK ดูเป็น Software House ที่รับพัฒนา custom software และระบบเว็บสำหรับองค์กร

แกนข้อความหลัก:

- Custom Software Development
- Digital Product Delivery
- Web Application & Portal
- Dashboard & Reporting
- System Integration
- AI & Business Automation
- Maintenance & Enhancement

โทน UI เป็น light theme สีหลักอิงจากโลโก้ VOLCANAP: ส้ม, ขาว, off-white, เส้น border อ่อน และ card layout ที่ดูเป็น B2B/software house

## Main Page Sections

### 1. Header

อยู่ใน `app/page.tsx` ช่วง `<header className="site-header">`

หน้าที่:

- แสดงโลโก้และชื่อ `VOLCANAP SOFTWORK`
- navigation ไปยัง `#services`, `#work`, `#process`, `#contact`
- CTA `เริ่มโปรเจกต์`
- mobile menu ใช้ state `menuOpen`

### 2. Hero

อยู่ใน `<section className="hero section-shell" id="top">`

หน้าที่:

- ชูชื่อบริษัท `VOLCANAP SOFTWORK` เป็น visual หลัก
- tagline: `Custom Software Development & Digital Product Delivery`
- อธิบายว่าเป็น software house สำหรับ custom software, web application, dashboard, integration, maintenance
- CTA ไปยัง contact และผลงานหน่วยงานรัฐ
- มี highlights จาก array `highlights`

ด้านขวาของ hero คือ delivery panel:

- `Consult → Design → Build → Launch`
- roles จาก array `deliveryRoles`
- summary เรื่อง partner พัฒนาระบบ
- strengths: Business-first, Production-ready, Supportable

### 3. Identity / Positioning

อยู่ใน `<section className="identity-section">`

หน้าที่:

- สื่อสารว่า VOLCANAP ออกแบบระบบจากเป้าหมายธุรกิจ ไม่ใช่แค่จากหน้าจอ
- ใช้โลโก้เป็น visual ประกอบ
- เหมาะสำหรับข้อความ positioning ระดับบริษัท

### 4. Trust Band

อยู่ใน `<section className="trust-band">`

หน้าที่:

- สรุปจุดขายสั้น ๆ สองข้อ
- มี reference หน่วยงานรัฐ
- มองงานแบบระบบใช้งานจริง

### 5. Services

อยู่ใน `<section id="services">`

ข้อมูลมาจาก array `services`

แต่ละ service มี:

- `icon`
- `title`
- `text`

บริการปัจจุบัน:

- Custom Software Development
- Web Application & Portal
- Dashboard & Reporting
- System Integration
- AI & Business Automation
- Maintenance & Enhancement

ถ้าจะเพิ่ม/ลดบริการ ให้แก้ array `services` อย่างเดียวก่อน แล้วค่อยเช็ค layout ใน responsive

### 6. Work / Agency Reference

อยู่ใน `<section className="case-section" id="work">`

หน้าที่:

- แสดง reference หน่วยงานรัฐแบบไม่ลงรายละเอียดงานลึก
- ใช้ asset `public/tatip-rtp.png`
- Copy หลักคือความน่าเชื่อถือจากหน่วยงานระดับชาติ

ระวัง: ผู้ใช้เคยขอไม่ให้ลง detail งานและไม่ต้องเอาหน่วยงานมาตีคู่กับบริษัทมากเกินไป ดังนั้น section นี้ควรคงเป็น reference แบบเรียบ ๆ

### 7. Process / Delivery Model

อยู่ใน `<section className="process-band" id="process">`

ข้อมูลมาจาก array `process`

ขั้นตอนปัจจุบัน:

- Consulting
- Solution Design
- Development
- QA & UAT
- Launch & Support

จุดประสงค์คือทำให้เว็บดูเป็น software house ที่มี delivery process ไม่ใช่แค่เว็บ portfolio

### 8. Contact / Scope Estimator

อยู่ใน `<section className="contact-section" id="contact">`

มี state หลัก:

- `selected`: ประเภทงานที่เลือก
- `timeline`: ระยะเวลาโดยประมาณ
- `submitted`: แสดง success message หลัง submit

ข้อมูลราคาอยู่ใน `projectOptions`

ข้อมูล multiplier อยู่ใน `timelineOptions`

การคำนวณงบอยู่ใน `estimate` ผ่าน `useMemo`

ฟอร์มนี้ยังไม่ได้ส่งข้อมูลไป backend เป็น interactive estimator ฝั่ง client เท่านั้น

## Styling Structure

ไฟล์หลักคือ `app/globals.css`

กลุ่มสำคัญ:

- `:root`: theme variables เช่นสี, shadow, radius, font
- Header styles: `.site-header`, `.brand`, `.desktop-nav`, `.mobile-nav`
- Hero styles: `.hero`, `.hero-brand-name`, `.delivery-panel`
- Section styles: `.identity-section`, `.trust-band`, `.service-grid`, `.case-section`, `.process-band`, `.contact-section`
- Form styles: `.estimate-card`, `.option`, `.timeline-control`, `.estimate-total`
- Responsive: media query ที่ `max-width: 980px` และ `max-width: 680px`

แนวทางแก้ CSS:

- ใช้สีจากตัวแปรใน `:root` ก่อนเพิ่มสีใหม่
- รักษา UI ให้เป็น light theme
- หลีกเลี่ยงพื้นดำหรือ section มืด เพราะผู้ใช้ขอให้ UI สว่าง
- อย่าใช้ card ซ้อน card โดยไม่จำเป็น
- ตรวจ mobile ทุกครั้งหลังแก้ hero, service grid, process หรือ contact form

## Assets

- `public/volcanap-logo.png`: โลโก้บริษัท ใช้ใน header, hero, identity, footer
- `public/tatip-rtp.png`: ตราหน่วยงาน TATIP RTP ใช้ใน agency reference section

ถ้าเปลี่ยนโลโก้ ให้คง path เดิมไว้ก่อนเพื่อไม่ต้องแก้ component หลายจุด

## Development Commands

```bash
npm install
npm run dev
npm run lint
npm run build
npm audit --audit-level=moderate
```

ปัจจุบัน `npm run lint` คือ `tsc --noEmit`

## Verification Notes

หลังแก้ UI ควรตรวจอย่างน้อย:

- Desktop ประมาณ `1440px`
- Mobile ประมาณ `390px`
- ไม่มีข้อความล้น button/card
- Hero wordmark `VOLCANAP SOFTWORK` ไม่ตัดคำกลางคำ
- Agency reference ไม่ลงรายละเอียดงานลึกเกินไป
- Scope estimator ยังเปลี่ยนราคาเมื่อกด options/timeline

Playwright screenshots ที่เคยใช้เก็บไว้ใน `output/playwright/` และ folder นี้ถูก ignore จาก git แล้ว

## Editing Guidelines

- ถ้าแก้ wording หลัก ให้เริ่มจาก constants ด้านบนของ `app/page.tsx`
- ถ้าแก้ section layout ให้ดู class ที่สัมพันธ์ใน `app/globals.css`
- ถ้าเพิ่ม section ใหม่ ให้เพิ่ม navigation เฉพาะเมื่อ section นั้นเป็น workflow หลักของผู้ใช้
- ถ้าเพิ่ม service ใหม่ อาจต้องปรับ grid/responsive ใน `.service-grid`
- ถ้าเปลี่ยนราคา ให้แก้ที่ `projectOptions`
- ถ้าเปลี่ยน timeline multiplier ให้แก้ที่ `timelineOptions`
