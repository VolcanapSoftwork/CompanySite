import { Box, type LucideIcon } from "lucide-react";

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
  // media = 3D renders, posters and other non-screen images (shown without a device frame)
  device: "desktop" | "mobile" | "media";
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
const MODEL = { width: 1260, height: 1080, device: "media" } as const;

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
      { src: "/works/tatip/mobile-reporting-form.webp", alt: "ฟอร์มเบาะแสบนมือถือ", caption: "ฟอร์มที่ปรับ|ให้กรอกง่าย|บนจอเล็ก", ...MOBILE },
      { src: "/works/tatip/mobile-following.webp", alt: "หน้าติดตามสถานะบนมือถือ", caption: "ติดตามสถานะบนมือถือ", ...MOBILE }
    ],
    detail: {
      overview:
        "ระบบแจ้งเบาะแสคดีค้ามนุษย์ (Human Trafficking Case Reporting System) แบ่งเป็น 2 ส่วน คือเว็บไซต์ให้ประชาชน|แจ้งเบาะแสแบบปกปิดตัวตนได้ และระบบหลังบ้าน|ให้เจ้าหน้าที่ตำรวจคัดกรอง มอบหมาย ติดตาม และวิเคราะห์คดี ใช้ฐานข้อมูลกลางร่วมกันบน Cloud พัฒนาโดยร่วมมือกับ|ศูนย์ต่อต้านการค้ามนุษย์ สำนักงานตำรวจแห่งชาติ (TATIP RTP)",
      challenges: [
        "เบาะแสกระจายอยู่หลายช่องทาง ทั้งสายด่วน อีเมล และเอกสาร ไม่มีระบบกลางรวบรวม ข้อมูลบางส่วนตกหล่น",
        "แต่ละหน่วยงาน|บันทึกข้อมูลคนละรูปแบบ วิเคราะห์ร่วมกัน|และตรวจสอบย้อนกลับได้ยาก",
        "เจ้าหน้าที่ต้องตรวจสอบ|และเชื่อมโยงเบาะแสแบบ manual ใช้เวลานานและผิดพลาดง่าย",
        "ผู้แจ้งเบาะแสมีความเสี่ยงสูง ระบบต้องปกปิดตัวตน|และป้องกันข้อมูลรั่วไหล"
      ],
      solutions: [
        {
          title: "แจ้งเบาะแสออนไลน์แบบไม่ระบุตัวตน",
          text: "ฟอร์มใช้งานง่าย|ทั้งมือถือและคอมพิวเตอร์ เลือกจังหวัด/อำเภอ/ตำบลจาก dropdown แนบรูปหลักฐานได้ และได้รหัสติดตามสถานะเบาะแส|หลังส่ง"
        },
        {
          title: "Case Management Workflow",
          text: "คัดกรองและจัดระดับความรุนแรง 3 ระดับ (Critical / High / Normal) → มอบหมายให้สถานี|หรือหน่วยงานในพื้นที่ → บันทึก progress log → ปิดคดี พร้อม SLA Alert เมื่อคดีวิกฤตไม่มีการอัปเดต"
        },
        {
          title: "AI Matching ตรวจเบาะแสซ้ำ",
          text: "แปลงเบาะแสเป็น vector ด้วย Sentence Transformer จัดกลุ่มตามพื้นที่ แล้วใช้ semantic search จับคู่คดีที่มีพฤติการณ์คล้ายกัน แจ้งเตือนเจ้าหน้าที่ก่อนรับเรื่อง"
        },
        {
          title: "AI สรุปเบาะแส",
          text: "ใช้ Gemini 2.5 Flash Lite สรุปเนื้อหาเบาะแสได้ 3 ภาษา ช่วยให้เจ้าหน้าที่|อ่านและคัดกรองได้เร็วขึ้น"
        },
        {
          title: "Dashboard & Heatmap",
          text: "สถิติเบาะแสตามช่วงเวลาและจังหวัด แผนที่ความหนาแน่น|ช่วยจัดสรรทรัพยากร export ข้อมูลเป็น PDF / Excel ได้"
        },
        {
          title: "Security & PDPA by Design",
          text: "แยกข้อมูลตัวตนผู้แจ้ง|ออกจากข้อมูลคดี (data decoupling), RBAC, 2FA ผ่าน email OTP, audit trail ทุกการแก้ไข และ signed URL สำหรับไฟล์หลักฐาน"
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
    slug: "diabetes-ar",
    icon: Box,
    label: "WebAR & Health Education",
    name: ["DIABETES AR"],
    description: "WebAR สื่อความรู้โรคเบาหวาน ส่องกล้องมือถือที่โปสเตอร์ แล้วโมเดล 3D เคลื่อนไหว|ของแต่ละหัวข้อ|จะขึ้นมาให้หมุนดูได้ ไม่ต้องติดตั้งแอป",
    tags: ["WebAR", "3D Animation", "Health Education"],
    url: "https://diabetes-ar.netlify.app",
    screenshot: {
      src: "/works/diabetes-ar/poster-portrait.webp",
      alt: "โปสเตอร์ A3 ความรู้เรื่องโรคเบาหวาน 6 หัวข้อ",
      width: 1400,
      height: 1978
    },
    gallery: [
      { src: "/works/diabetes-ar/desktop-home.webp", alt: "หน้าแรกบน desktop พร้อมปุ่มสแกน QR และภาพสำหรับสแกน", caption: "หน้าแรก desktop — ปุ่มสแกน, QR และภาพเปิดเต็มจอให้สแกนจากหน้าจอ", ...DESKTOP },
      { src: "/works/diabetes-ar/mobile-home.webp", alt: "หน้าแรกบนมือถือมีปุ่มสแกนปุ่มเดียว", caption: "หน้าแรกบนมือถือ — ปุ่มสแกนปุ่มเดียว", ...MOBILE },
      { src: "/works/diabetes-ar/poster-portrait.webp", alt: "โปสเตอร์ A3 แนวตั้ง 6 หัวข้อ", caption: "โปสเตอร์ A3 แนวตั้ง (2×3)", width: 1400, height: 1978, device: "media" },
      { src: "/works/diabetes-ar/poster-landscape.webp", alt: "โปสเตอร์ A3 แนวนอน 6 หัวข้อ", caption: "โปสเตอร์ A3 แนวนอน (3×2)", width: 1800, height: 1274, device: "media" },
      { src: "/works/diabetes-ar/model-1-pancreas.webp", alt: "โมเดล 3D ตับอ่อนหลั่งอินซูลินบนกล่องหัวข้อที่ 1", caption: "1. ตับอ่อนหลั่งอินซูลิน → พากลูโคสเข้าเซลล์", ...MODEL },
      { src: "/works/diabetes-ar/model-2-insulin-cell.webp", alt: "โมเดล 3D เซลล์ผ่าครึ่งกับอินซูลินแบบกุญแจ", caption: "2. อินซูลินเป็นกุญแจ|เปิดเซลล์ เทียบภาวะดื้ออินซูลิน", ...MODEL },
      { src: "/works/diabetes-ar/model-3-symptoms-body.webp", alt: "โมเดล 3D ตัวละครแสดงอาการเตือน", caption: "3. ตัวละครแสดง|สัญญาณเตือน 6 ท่า", ...MODEL },
      { src: "/works/diabetes-ar/model-4-blood-vessel.webp", alt: "โมเดล 3D หลอดเลือดผ่าครึ่งพร้อมเครื่องวัดน้ำตาล", caption: "4. หลอดเลือด|เมื่อน้ำตาลสูงขึ้น พร้อมเครื่องวัด", ...MODEL },
      { src: "/works/diabetes-ar/model-5-complications.webp", alt: "โมเดล 3D หัวใจ ไต ตา และเท้า", caption: "5. ภาวะแทรกซ้อนที่หัวใจ ไต ตา และเท้า", ...MODEL },
      { src: "/works/diabetes-ar/model-6-healthy-plate.webp", alt: "โมเดล 3D จานสุขภาพ 2:1:1", caption: "6. จานสุขภาพ 2:1:1 และการออกกำลังกาย", ...MODEL }
    ],
    detail: {
      overview:
        "Web AR สำหรับให้ความรู้เรื่องโรคเบาหวาน ใช้คู่กับอินโฟกราฟิก A3 ที่มี 6 หัวข้อ ส่องกล้องมือถือที่กล่องไหน โมเดล 3D เคลื่อนไหวของหัวข้อนั้น|จะขึ้นมาล็อกกลางจอ|ให้หมุนและซูมดูได้ ทำงานบนเบราว์เซอร์ทั้ง iOS Safari และ Android Chrome โดยไม่ต้องติดตั้งแอป",
      challenges: [
        "โปสเตอร์และแผ่นพับเป็นภาพนิ่ง อธิบายกลไกในร่างกาย เช่น อินซูลินพากลูโคสเข้าเซลล์ ได้ยาก",
        "แอป AR ส่วนใหญ่ต้องดาวน์โหลดติดตั้งก่อน ผู้ใช้จำนวนมาก|เลิกใช้ก่อนได้เห็นเนื้อหา",
        "ต้องใช้ได้ทั้ง iPhone และ Android ซึ่ง Safari บน iPhone ไม่รองรับ WebXR",
        "เนื้อหาทางการแพทย์|ต้องถูกต้องและเข้าใจง่าย|สำหรับคนทั่วไป"
      ],
      solutions: [
        {
          title: "Marker-based WebAR",
          text: "จับภาพกล่องบนโปสเตอร์ด้วย image tracking ในเบราว์เซอร์ ใช้ได้ทั้ง iOS และ Android ไม่ต้องติดตั้งแอป"
        },
        {
          title: "โมเดล 3D เคลื่อนไหว 6 หัวข้อ",
          text: "ตับอ่อน, เซลล์กับอินซูลิน, ตัวละครแสดงอาการ, หลอดเลือด, อวัยวะที่เกิดภาวะแทรกซ้อน และจานสุขภาพ แต่ละตัวเล่า animation เป็นลำดับขั้น"
        },
        {
          title: "Lock & Interact",
          text: "สแกนแล้วโมเดลล็อกกลางจอ วางโปสเตอร์ลงได้ ลากเพื่อหมุน จีบเพื่อซูม แตะ 2 ครั้งเพื่อรีเซ็ต"
        },
        {
          title: "เนื้อหาเชิงลึกในแอป",
          text: "แผ่นข้อมูลแต่ละหัวข้อ|กดอ่านเพิ่มได้ อิงแนวทาง|สมาคมโรคเบาหวานแห่งประเทศไทยและ ADA"
        },
        {
          title: "โปสเตอร์ 2 แบบ + โหมด Desktop",
          text: "โปสเตอร์ A3 แนวตั้งและแนวนอนพร้อม PDF สำหรับพิมพ์ บน desktop เปิดภาพเต็มจอให้ส่องสแกนจากหน้าจอ หรือสแกน QR เพื่อเปิดบนมือถือ"
        },
        {
          title: "Asset Pipeline & CI/CD",
          text: "สร้าง marker และโปสเตอร์จากเนื้อหาชุดเดียว มี regression test ด้วยกล้องจำลอง และ deploy อัตโนมัติผ่าน GitHub Actions"
        }
      ],
      techStack: [
        { group: "Frontend & AR", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "three.js", "MindAR"] },
        { group: "Tooling & Deploy", items: ["Playwright", "GitHub Actions", "Netlify"] }
      ]
    }
  }
];

export function getWork(slug: string) {
  return works.find((work) => work.slug === slug);
}
