import { BarChart3, FileCheck2, Layers3, Sparkles, type LucideIcon } from "lucide-react";

export type WorkDetail = {
  overview: string;
  challenges: string[];
  solutions: { title: string; text: string }[];
  techStack: { group: string; items: string[] }[];
};

export type WorkImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  device: "desktop" | "mobile";
  caption: string;
};

export type Work = {
  slug: string;
  logo?: string;
  logoAlt?: string;
  icon?: LucideIcon;
  label: string;
  name: string[];
  description: string;
  tags: string[];
  url?: string;
  screenshot?: { src: string; alt: string; width: number; height: number };
  gallery?: WorkImage[];
  detail: WorkDetail;
};

// Screenshot sizes captured from the live site (desktop 1440×900 @1.5x, mobile 390×844 @2x)
const DESKTOP = { width: 2160, height: 1350, device: "desktop" } as const;
const MOBILE = { width: 780, height: 1688, device: "mobile" } as const;

export const works: Work[] = [
  {
    slug: "tatip-hint-reporting",
    logo: "/tatip-rtp.png",
    logoAlt: "TATIP RTP logo",
    label: "Government Agency",
    name: ["THE ANTI-TRAFFICKING IN PERSONS CENTER", "ROYAL THAI POLICE"],
    description: "TATIP RTP — ศูนย์ปราบปรามการค้ามนุษย์ สำนักงานตำรวจแห่งชาติ",
    tags: ["หน่วยงานรัฐ", "Anti-Trafficking", "Royal Thai Police"],
    url: "https://humantrafficking-report.police.go.th/home",
    screenshot: {
      src: "/works/tatip-report-form.png",
      alt: "หน้าแจ้งเบาะแสคดีค้ามนุษย์",
      width: 867,
      height: 1189
    },
    gallery: [
      { src: "/works/tatip/desktop-home.webp", alt: "หน้าแรกเว็บไซต์ศูนย์ต่อต้านการค้ามนุษย์", caption: "หน้าแรก — ข้อมูลศูนย์และช่องทางติดต่อ", ...DESKTOP },
      { src: "/works/tatip/desktop-reporting.webp", alt: "หน้าแจ้งเบาะแสพร้อมขั้นตอน 2 ขั้น", caption: "แจ้งเบาะแส — เลือกเปิดเผยหรือปกปิดตัวตนได้", ...DESKTOP },
      { src: "/works/tatip/desktop-reporting-form.webp", alt: "ฟอร์มกรอกข้อมูลเบาะแส สถานที่ และผู้เกี่ยวข้อง", caption: "ฟอร์มเบาะแส — ที่อยู่แบบ dropdown จังหวัด/อำเภอ/ตำบล", ...DESKTOP },
      { src: "/works/tatip/desktop-following.webp", alt: "หน้าติดตามสถานะด้วยรหัสติดตาม", caption: "ติดตามสถานะ — ค้นหาด้วยรหัสที่ได้หลังแจ้ง", ...DESKTOP },
      { src: "/works/tatip/desktop-reporting-en.webp", alt: "หน้าแจ้งเบาะแสภาษาอังกฤษ", caption: "รองรับภาษาอังกฤษ", ...DESKTOP },
      { src: "/works/tatip/desktop-home-zh.webp", alt: "หน้าแรกภาษาจีน", caption: "รองรับภาษาจีน", ...DESKTOP },
      { src: "/works/tatip/mobile-home.webp", alt: "หน้าแรกบนมือถือ", caption: "หน้าแรกบนมือถือ", ...MOBILE },
      { src: "/works/tatip/mobile-reporting.webp", alt: "หน้าแจ้งเบาะแสบนมือถือ", caption: "แจ้งเบาะแสบนมือถือ", ...MOBILE },
      { src: "/works/tatip/mobile-reporting-form.webp", alt: "ฟอร์มเบาะแสบนมือถือ", caption: "ฟอร์มที่ปรับให้กรอกง่ายบนจอเล็ก", ...MOBILE },
      { src: "/works/tatip/mobile-following.webp", alt: "หน้าติดตามสถานะบนมือถือ", caption: "ติดตามสถานะบนมือถือ", ...MOBILE }
    ],
    detail: {
      overview:
        "ระบบแจ้งเบาะแสคดีค้ามนุษย์ (Human Trafficking Case Reporting System) แบ่งเป็น 2 ส่วน คือเว็บไซต์ให้ประชาชนแจ้งเบาะแสแบบปกปิดตัวตนได้ และระบบหลังบ้านให้เจ้าหน้าที่ตำรวจคัดกรอง มอบหมาย ติดตาม และวิเคราะห์คดี ใช้ฐานข้อมูลกลางร่วมกันบน Cloud พัฒนาโดยร่วมมือกับศูนย์ต่อต้านการค้ามนุษย์ สำนักงานตำรวจแห่งชาติ (TATIP RTP)",
      challenges: [
        "เบาะแสกระจายอยู่หลายช่องทาง ทั้งสายด่วน อีเมล และเอกสาร ไม่มีระบบกลางรวบรวม ข้อมูลบางส่วนตกหล่น",
        "แต่ละหน่วยงานบันทึกข้อมูลคนละรูปแบบ วิเคราะห์ร่วมกันและตรวจสอบย้อนกลับได้ยาก",
        "เจ้าหน้าที่ต้องตรวจสอบและเชื่อมโยงเบาะแสแบบ manual ใช้เวลานานและผิดพลาดง่าย",
        "ผู้แจ้งเบาะแสมีความเสี่ยงสูง ระบบต้องปกปิดตัวตนและป้องกันข้อมูลรั่วไหล"
      ],
      solutions: [
        {
          title: "แจ้งเบาะแสออนไลน์แบบไม่ระบุตัวตน",
          text: "ฟอร์มใช้งานง่ายทั้งมือถือและคอมพิวเตอร์ เลือกจังหวัด/อำเภอ/ตำบลจาก dropdown แนบรูปหลักฐานได้ และได้รหัสติดตามสถานะเบาะแสหลังส่ง"
        },
        {
          title: "Case Management Workflow",
          text: "คัดกรองและจัดระดับความรุนแรง 3 ระดับ (Critical / High / Normal) → มอบหมายให้สถานีหรือหน่วยงานในพื้นที่ → บันทึก progress log → ปิดคดี พร้อม SLA Alert เมื่อคดีวิกฤตไม่มีการอัปเดต"
        },
        {
          title: "AI Matching ตรวจเบาะแสซ้ำ",
          text: "แปลงเบาะแสเป็น vector ด้วย Sentence Transformer จัดกลุ่มตามพื้นที่ แล้วใช้ semantic search จับคู่คดีที่มีพฤติการณ์คล้ายกัน แจ้งเตือนเจ้าหน้าที่ก่อนรับเรื่อง"
        },
        {
          title: "AI สรุปเบาะแส",
          text: "ใช้ Gemini 2.5 Flash Lite สรุปเนื้อหาเบาะแสได้ 3 ภาษา ช่วยให้เจ้าหน้าที่อ่านและคัดกรองได้เร็วขึ้น"
        },
        {
          title: "Dashboard & Heatmap",
          text: "สถิติเบาะแสตามช่วงเวลาและจังหวัด แผนที่ความหนาแน่นช่วยจัดสรรทรัพยากร export ข้อมูลเป็น PDF / Excel ได้"
        },
        {
          title: "Security & PDPA by Design",
          text: "แยกข้อมูลตัวตนผู้แจ้งออกจากข้อมูลคดี (data decoupling), RBAC, 2FA ผ่าน email OTP, audit trail ทุกการแก้ไข และ signed URL สำหรับไฟล์หลักฐาน"
        }
      ],
      techStack: [
        { group: "Frontend", items: ["Next.js 15", "React 19", "TypeScript", "Material UI", "Tailwind CSS", "Leaflet"] },
        { group: "Backend & Data", items: ["Next.js API Routes", "Prisma", "PostgreSQL (Supabase)", "Supabase Storage", "NextAuth.js"] },
        { group: "AI", items: ["Sentence Transformer", "Hugging Face", "Gemini 2.5 Flash Lite"] },
        { group: "Deploy & Testing", items: ["Vercel", "GitHub", "Playwright", "k6"] }
      ]
    }
  },
  {
    slug: "executive-dashboard",
    icon: BarChart3,
    label: "Dashboard & Reporting",
    name: ["EXECUTIVE DASHBOARD"],
    description: "Dashboard สรุปยอดขาย KPI และรายงานรายวันสำหรับผู้บริหาร ดึงข้อมูลจากหลายระบบมาแสดงในที่เดียว",
    tags: ["Dashboard", "Data Integration", "Reporting"],
    detail: {
      overview:
        "Dashboard สำหรับผู้บริหาร รวมข้อมูลยอดขาย สต็อก และ KPI จากหลายระบบไว้ในหน้าเดียว อัปเดตอัตโนมัติรายวัน",
      challenges: [
        "ข้อมูลอยู่คนละระบบ ต้องรวม Excel ด้วยมือทุกสัปดาห์",
        "ผู้บริหารเห็นตัวเลขช้า ตัดสินใจไม่ทันสถานการณ์"
      ],
      solutions: [
        { title: "Data Integration", text: "ดึงข้อมูลจาก POS, ERP และ spreadsheet ผ่าน API และ scheduled job" },
        { title: "KPI Dashboard", text: "กราฟยอดขาย เป้าหมาย และสต็อก กรองตามสาขา ช่วงเวลา และหมวดสินค้า" },
        { title: "Automated Report", text: "ส่งรายงานสรุปรายวันทางอีเมลอัตโนมัติ" }
      ],
      techStack: [
        { group: "Frontend", items: ["Next.js", "TypeScript", "Chart library"] },
        { group: "Backend & Data", items: ["Node.js", "PostgreSQL", "Scheduled jobs"] }
      ]
    }
  },
  {
    slug: "customer-service-portal",
    icon: Layers3,
    label: "Web Application",
    name: ["CUSTOMER SERVICE PORTAL"],
    description: "Portal ให้ลูกค้ายื่นคำขอ ติดตามสถานะ และรับแจ้งเตือน พร้อม admin portal สำหรับทีมปฏิบัติงาน",
    tags: ["Customer Portal", "Admin Portal", "Notification"],
    detail: {
      overview:
        "Portal ให้ลูกค้ายื่นคำขอบริการออนไลน์และติดตามสถานะได้เอง พร้อม admin portal ให้ทีมรับเรื่อง มอบหมาย และปิดงาน",
      challenges: [
        "รับเรื่องผ่านโทรศัพท์และ LINE ติดตามสถานะยาก",
        "ลูกค้าโทรถามสถานะซ้ำ เพิ่มภาระทีม"
      ],
      solutions: [
        { title: "Customer Portal", text: "ยื่นคำขอ แนบเอกสาร และดูสถานะแบบ real-time" },
        { title: "Admin Portal", text: "คิวงาน มอบหมายผู้รับผิดชอบ และกำหนด SLA" },
        { title: "Notification", text: "แจ้งเตือนทางอีเมลและ LINE เมื่อสถานะเปลี่ยน" }
      ],
      techStack: [
        { group: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS"] },
        { group: "Backend & Data", items: ["Node.js", "PostgreSQL", "LINE Messaging API"] }
      ]
    }
  },
  {
    slug: "document-approval-system",
    icon: FileCheck2,
    label: "Workflow Automation",
    name: ["DOCUMENT APPROVAL SYSTEM"],
    description: "ระบบอนุมัติเอกสารหลายขั้นตอน กำหนดสิทธิ์ตามตำแหน่ง และเก็บประวัติการอนุมัติสำหรับตรวจสอบย้อนหลัง",
    tags: ["Workflow", "Role-based Access", "Audit Trail"],
    detail: {
      overview:
        "ระบบส่งและอนุมัติเอกสารออนไลน์หลายขั้นตอน กำหนดสายอนุมัติตามประเภทเอกสารและตำแหน่ง",
      challenges: [
        "เอกสารกระดาษเดินช้า ตามไม่ได้ว่าค้างอยู่ที่ใคร",
        "ตรวจสอบย้อนหลังยากเมื่อมี audit"
      ],
      solutions: [
        { title: "Configurable Workflow", text: "ตั้งสายอนุมัติได้เองตามประเภทเอกสารและวงเงิน" },
        { title: "Role-based Access", text: "สิทธิ์การเห็นและอนุมัติตามตำแหน่งและหน่วยงาน" },
        { title: "Audit Trail", text: "เก็บประวัติทุกการแก้ไขและอนุมัติ พร้อม export" }
      ],
      techStack: [
        { group: "Frontend", items: ["Next.js", "TypeScript"] },
        { group: "Backend & Data", items: ["Node.js", "PostgreSQL", "Object Storage"] }
      ]
    }
  },
  {
    slug: "ai-document-classifier",
    icon: Sparkles,
    label: "AI & Automation",
    name: ["AI DOCUMENT CLASSIFIER"],
    description: "ใช้ AI แยกประเภทเอกสาร ดึงข้อมูลสำคัญ และสรุปเนื้อหา ลดงาน manual ของทีมเอกสาร",
    tags: ["AI", "OCR", "Automation"],
    detail: {
      overview:
        "ระบบรับเอกสารสแกน แยกประเภทอัตโนมัติ ดึงข้อมูลสำคัญเข้าฐานข้อมูล และสรุปเนื้อหาให้ผู้ตรวจ",
      challenges: [
        "เอกสารเข้าวันละหลายร้อยฉบับ คีย์ข้อมูลด้วยมือ",
        "แยกประเภทผิดบ่อย เอกสารส่งผิดทีม"
      ],
      solutions: [
        { title: "OCR & Extraction", text: "อ่านเอกสารสแกนและดึง field สำคัญ เช่น เลขที่ วันที่ ยอดเงิน" },
        { title: "AI Classification", text: "แยกประเภทเอกสารและส่งต่อทีมที่รับผิดชอบอัตโนมัติ" },
        { title: "Human Review", text: "หน้าตรวจทานสำหรับรายการที่ AI ไม่มั่นใจ" }
      ],
      techStack: [
        { group: "AI", items: ["OCR", "LLM API"] },
        { group: "Backend & Data", items: ["Python", "PostgreSQL", "Queue worker"] }
      ]
    }
  }
];

export function getWork(slug: string) {
  return works.find((work) => work.slug === slug);
}
