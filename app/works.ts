import { Box, HeartPulse, Stethoscope, Target, Users, type LucideIcon } from "lucide-react";

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
  /** Concept mockup built by us with sample data, not a delivered system; `url` points to the in-site mockup */
  mockup?: boolean;
  screenshot?: { src: string; alt: string; width: number; height: number };
  gallery?: WorkImage[];
  /** Shown under the gallery heading, e.g. to explain which parts can't be shown */
  galleryNote?: string;
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
    galleryNote: "ภาพทั้งหมดเป็นฝั่งประชาชน ส่วนระบบหลังบ้านสำหรับเจ้าหน้าที่ที่จัดการเบาะแสรูปแบบ PIMS เป็นข้อมูลลับของหน่วยงาน จึงไม่สามารถเปิดเผยได้",
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
          title: "ระบบหลังบ้านจัดการเบาะแสรูปแบบ PIMS",
          text: "เจ้าหน้าที่จัดการเบาะแส (Clue) ในระบบหลังบ้าน|ตามรูปแบบ PIMS ของสำนักงานตำรวจแห่งชาติ ตั้งแต่รับเรื่อง จัดกลุ่ม|จนถึงส่งออกข้อมูล เป็นข้อมูลลับของหน่วยงาน จึงไม่สามารถเปิดเผยหน้าจอได้"
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
  },
  {
    slug: "thai-cv-risk-ar",
    icon: HeartPulse,
    label: "WebAR & Health Screening",
    name: ["THAI CV RISK AR"],
    description: "Web AR ส่องกล้องมือถือจับสรีระ|เพื่อวัดส่วนสูงและรอบเอว แล้วประเมินความเสี่ยง|โรคหัวใจและหลอดเลือด 10 ปี ไม่ต้องติดตั้งแอป",
    tags: ["WebAR", "Pose Detection", "Health Screening"],
    url: "https://thai-cv-risk-ar.netlify.app/",
    screenshot: {
      src: "/works/thai-cv-risk-ar/mobile-ar-scan.webp",
      alt: "หน้าสแกนสรีระด้วยกล้อง AR พร้อมการ์ดแสดงความเสี่ยง",
      width: 780,
      height: 1688
    },
    gallery: [
      { src: "/works/thai-cv-risk-ar/mobile-disclaimer.webp", alt: "หน้าข้อควรทราบทางการแพทย์ก่อนใช้งาน", caption: "ข้อควรทราบทางการแพทย์|ก่อนใช้งาน", ...MOBILE },
      { src: "/works/thai-cv-risk-ar/mobile-ar-scan.webp", alt: "หน้าสแกนสรีระบนมือถือพร้อมการ์ด AR", caption: "สแกนสรีระ — วัดส่วนสูง|และรอบเอว", ...MOBILE },
      { src: "/works/thai-cv-risk-ar/mobile-risk-gauge.webp", alt: "หน้าปัดแสดงความเสี่ยงและคำแนะนำ", caption: "หน้าปัดความเสี่ยง|และคำแนะนำ", ...MOBILE },
      { src: "/works/thai-cv-risk-ar/mobile-detailed-form.webp", alt: "ฟอร์มกรอกความดัน เบาหวาน และการสูบบุหรี่", caption: "โหมดประเมิน|ความแม่นยำสูง", ...MOBILE }
    ],
    galleryNote: "ภาพทั้งหมดใช้โหมดจำลอง (Demo Mode) ซึ่งแสดงโครงร่างร่างกายตัวอย่าง|แทนภาพจากกล้องจริง",
    detail: {
      overview:
        "เว็บแอป Mobile Web AR ที่ใช้กล้องมือถือจับท่าทางร่างกาย (Pose Tracking) เพื่อประมาณส่วนสูง|และรอบเอว แล้วคำนวณความเสี่ยง 10 ปี|ต่อการเกิดโรคหัวใจและหลอดเลือด ตามสูตร Thai CV Risk Score แบบใช้รอบเอว ใช้งานบนเบราว์เซอร์มือถือ|โดยไม่ต้องติดตั้งแอป และมีโหมดประเมินละเอียด|ให้กรอกค่าทางคลินิกเพิ่ม",
      challenges: [
        "การคัดกรองความเสี่ยงโรคหัวใจ|ต้องใช้สายวัด แบบฟอร์ม และเจ้าหน้าที่ ทำในวงกว้างได้ช้า",
        "คนทั่วไปไม่รู้สัดส่วนรอบเอวต่อส่วนสูง (WHtR) ของตัวเอง และไม่เห็นภาพว่าความเสี่ยงอยู่ระดับไหน",
        "วัดสรีระด้วยกล้องมือถือตัวเดียว ค่าที่ได้แกว่งตามระยะ มุมกล้อง และแสง",
        "ต้องสื่อสารให้ชัดว่าเป็นการคัดกรองเบื้องต้น ไม่ใช่การวินิจฉัยทางการแพทย์"
      ],
      solutions: [
        {
          title: "Pose Tracking บนเบราว์เซอร์",
          text: "ใช้ MediaPipe ตรวจจับจุดบนร่างกาย 33 จุดแบบ real-time บนมือถือ|ประมวลผลบนเครื่องผู้ใช้ มี GPU/CPU fallback"
        },
        {
          title: "วัดส่วนสูงและรอบเอวจากกล้อง",
          text: "ประมาณส่วนสูงจากศีรษะถึงข้อเท้า|และรอบเอวจากแบบจำลองวงรี พร้อม smoothing กันตัวเลขกระโดด"
        },
        {
          title: "AR HUD",
          text: "การ์ดผลลัพธ์ลอยตามตัวบุคคล แสดง % ความเสี่ยง, WHtR และระดับความเสี่ยงทันที"
        },
        {
          title: "โหมดประเมินความแม่นยำสูง",
          text: "ดึงค่าจากกล้องมาตั้งต้น แล้วกรอกความดัน (SBP) เบาหวาน|และการสูบบุหรี่เพิ่ม แสดงผลเป็นหน้าปัด 4 ระดับ"
        },
        {
          title: "คำแนะนำเฉพาะบุคคล",
          text: "แนะนำการปรับพฤติกรรม|ตามปัจจัยเสี่ยงที่ตรวจพบ"
        },
        {
          title: "Demo Mode & ข้อควรทราบ",
          text: "โหมดจำลองสำหรับสาธิตโดยไม่ต้องเปิดกล้อง|และหน้าข้อควรทราบทางการแพทย์|ก่อนเริ่มใช้งาน"
        }
      ],
      techStack: [
        { group: "Frontend", items: ["Next.js 16", "React 19", "TypeScript"] },
        { group: "AR & Vision", items: ["MediaPipe Pose Landmarker", "Canvas 2D", "SVG"] },
        { group: "Deploy", items: ["Netlify", "GitHub Actions"] }
      ]
    }
  },
  {
    slug: "mockup-hospital",
    icon: Stethoscope,
    label: "Concept Mockup · Hospital System",
    name: ["HOSPITAL MANAGEMENT SYSTEM"],
    description: "ตัวอย่างระบบบริหารโรงพยาบาล|ลงทะเบียนผู้ป่วย คิว เวชระเบียน|และการใช้เตียงในระบบเดียว",
    tags: ["Mockup", "HIS", "AI"],
    url: "/mockups/hospital",
    mockup: true,
    screenshot: {
      src: "/works/mockups/his-overview-desktop.webp",
      alt: "หน้าภาพรวมของระบบบริหารโรงพยาบาล (Mockup)",
      width: 2160,
      height: 1350
    },
    gallery: [
      { src: "/works/mockups/his-overview-desktop.webp", alt: "ภาพรวม — สถิติผู้ป่วย และ AI คาดการณ์ความหนาแน่น", caption: "ภาพรวม — สถิติผู้ป่วย และ AI คาดการณ์|ความหนาแน่น", ...DESKTOP },
      { src: "/works/mockups/his-patient-desktop.webp", alt: "เวชระเบียน — สัญญาณชีพ, รายการยาและสรุปผู้ป่วยโดย AI", caption: "เวชระเบียน — สัญญาณชีพ, รายการยา|และสรุปผู้ป่วยโดย AI", ...DESKTOP },
      { src: "/works/mockups/his-ai-desktop.webp", alt: "AI ผู้ช่วยแพทย์ — ถามข้อมูลผู้ป่วยและตรวจยาตีกัน", caption: "AI ผู้ช่วยแพทย์ — ถามข้อมูลผู้ป่วย|และตรวจยาตีกัน", ...DESKTOP },
      { src: "/works/mockups/his-pharmacy-desktop.webp", alt: "ห้องยา — ใบสั่งยา, สต็อกและ AI ตรวจความปลอดภัยของยา", caption: "ห้องยา — ใบสั่งยา, สต็อก|และ AI ตรวจความปลอดภัยของยา", ...DESKTOP },
      { src: "/works/mockups/his-lab-desktop.webp", alt: "ห้องแล็บ — ผลตรวจและ AI สรุปผลสำหรับแพทย์", caption: "ห้องแล็บ — ผลตรวจ|และ AI สรุปผลสำหรับแพทย์", ...DESKTOP },
      { src: "/works/mockups/his-queue-desktop.webp", alt: "กระดานคิวและ AI ประเมินเวลารอ", caption: "กระดานคิว|และ AI ประเมินเวลารอ", ...DESKTOP },
      { src: "/works/mockups/his-wards-desktop.webp", alt: "การใช้เตียงและ AI คาดการณ์เตียงว่าง", caption: "การใช้เตียง|และ AI คาดการณ์เตียงว่าง", ...DESKTOP },
      { src: "/works/mockups/his-patient-mobile.webp", alt: "เวชระเบียนบนมือถือ", caption: "เวชระเบียนบนมือถือ", ...MOBILE }
    ],
    galleryNote: "หน้าจอตัวอย่าง (Mockup) ที่ทีมออกแบบขึ้น ข้อมูลผู้ป่วยทั้งหมดเป็นข้อมูลสมมติ กดปุ่ม \"เปิดดู\u00a0Mockup\" และกดเมนูด้านซ้ายเพื่อดูหน้าอื่นได้",
    detail: {
      overview:
        "ตัวอย่างหน้าจอระบบบริหารโรงพยาบาล (HIS) สำหรับโรงพยาบาลขนาดกลางหรือคลินิกหลายสาขา ครอบคลุมตั้งแต่ลงทะเบียนผู้ป่วย|ออกบัตรคิว บันทึกการตรวจ สั่งยา|จนถึงบริหารเตียงผู้ป่วยใน",
      challenges: [
        "ผู้ป่วยรอนาน|และไม่รู้ว่าคิวถึงขั้นไหน",
        "ประวัติการรักษาและการแพ้ยาอยู่ในแฟ้มกระดาษ|ค้นหายากและเสี่ยงผิดพลาด",
        "ไม่เห็นภาพรวมเตียงว่าง|ต้องโทรถามทีละหอผู้ป่วย",
        "ผู้บริหารต้องรอรายงานสถิติ|ตอนสิ้นเดือน"
      ],
      solutions: [
        { title: "ลงทะเบียนและเวชระเบียน", text: "สแกนบัตรประชาชน ตรวจสิทธิการรักษา|และเก็บประวัติการรักษาทุกครั้ง" },
        { title: "ระบบคิวแบบ real-time", text: "กระดานคิวตามขั้นตอน|แสดงบนจอหน้าห้องตรวจ และแจ้งคิวผ่าน LINE" },
        { title: "บันทึกการตรวจและสั่งยา", text: "บันทึกสัญญาณชีพ การวินิจฉัย|และส่งรายการยาไปห้องยาทันที" },
        { title: "AI ผู้ช่วยแพทย์", text: "สรุปเวชระเบียนและผลแล็บ ตรวจยาตีกันและแพ้ยา|คาดการณ์ผู้ป่วยและเตียงว่าง" },
        { title: "บริหารเตียงผู้ป่วยใน", text: "เห็นเตียงว่างทุกหอผู้ป่วย|และติดตามผู้ป่วยที่ต้องเฝ้าระวัง" },
        { title: "นัดหมายและ Dashboard", text: "นัดครั้งถัดไปพร้อมแจ้งเตือน|และสถิติผู้ป่วยรายวันสำหรับผู้บริหาร" }
      ],
      techStack: [
        { group: "Mockup", items: ["Next.js", "React", "TypeScript", "CSS Modules"] },
        { group: "ระบบจริง (แนะนำ)", items: ["PostgreSQL", "Prisma", "RBAC", "Audit Log", "HL7 / FHIR"] }
      ]
    }
  },
  {
    slug: "mockup-hr",
    icon: Users,
    label: "Concept Mockup · HR System",
    name: ["HR & PAYROLL SYSTEM"],
    description: "ตัวอย่างระบบ HR หลังบ้าน|คู่กับแอปพนักงานสำหรับเช็คอิน|ลางาน และดูสลิปเงินเดือน",
    tags: ["Mockup", "HR", "AI"],
    url: "/mockups/hr",
    mockup: true,
    screenshot: {
      src: "/works/mockups/hr-overview-desktop.webp",
      alt: "หน้าภาพรวมของ HR & PAYROLL SYSTEM (Mockup)",
      width: 2160,
      height: 1350
    },
    gallery: [
      { src: "/works/mockups/hr-overview-desktop.webp", alt: "ภาพรวม — สถิติบุคลากรและ AI วิเคราะห์ความเสี่ยงลาออก", caption: "ภาพรวม — สถิติบุคลากร|และ AI วิเคราะห์ความเสี่ยงลาออก", ...DESKTOP },
      { src: "/works/mockups/hr-ai-desktop.webp", alt: "AI HR Assistant — ตอบคำถามนโยบายและคัดกรองใบสมัคร", caption: "AI HR Assistant — ตอบคำถามนโยบาย|และคัดกรองใบสมัคร", ...DESKTOP },
      { src: "/works/mockups/hr-attendance-desktop.webp", alt: "เวลาเข้า-ออกและ AI ตรวจจับการลงเวลาผิดปกติ", caption: "เวลาเข้า-ออก|และ AI ตรวจจับการลงเวลาผิดปกติ", ...DESKTOP },
      { src: "/works/mockups/hr-employee-desktop.webp", alt: "ข้อมูลพนักงานพร้อม AI สรุปและแนะนำหลักสูตร", caption: "ข้อมูลพนักงาน|พร้อม AI สรุปและแนะนำหลักสูตร", ...DESKTOP },
      { src: "/works/mockups/hr-leave-desktop.webp", alt: "ปฏิทินการลาและหน้าอนุมัติคำขอ", caption: "ปฏิทินการลา|และหน้าอนุมัติคำขอ", ...DESKTOP },
      { src: "/works/mockups/hr-payroll-desktop.webp", alt: "รอบเงินเดือน — สรุปตามฝ่ายและสลิปเงินเดือน", caption: "รอบเงินเดือน — สรุปตามฝ่าย|และสลิปเงินเดือน", ...DESKTOP },
      { src: "/works/mockups/hr-app-mobile.webp", alt: "แอปพนักงานสำหรับเช็คอินเข้างาน", caption: "แอปพนักงาน — เช็คอินด้วย GPS|และรูปถ่าย", width: 674, height: 1480, device: "mobile" },
      { src: "/works/mockups/hr-employees-mobile.webp", alt: "รายชื่อพนักงาน", caption: "รายชื่อพนักงาน", ...MOBILE },
      { src: "/works/mockups/hr-leave-mobile.webp", alt: "อนุมัติการลา", caption: "อนุมัติการลา", ...MOBILE },
      { src: "/works/mockups/hr-payroll-mobile.webp", alt: "รอบเงินเดือน", caption: "รอบเงินเดือน", ...MOBILE }
    ],
    galleryNote: "หน้าจอตัวอย่าง (Mockup) ที่ทีมออกแบบขึ้น ข้อมูลทั้งหมดเป็นข้อมูลสมมติ กดปุ่ม \"เปิดดู\u00a0Mockup\" และกดเมนูด้านซ้ายเพื่อดูหน้าอื่นได้",
    detail: {
      overview:
        "ตัวอย่างหน้าจอระบบ HR สำหรับองค์กรขนาดกลาง รวมข้อมูลพนักงาน เวลาเข้า-ออก การลา OT|และรอบเงินเดือนไว้ที่เดียว คู่กับแอปพนักงาน|สำหรับเช็คอินเข้างานด้วย GPS และรูปถ่าย ข้อมูลเข้าระบบ HR ทันที",
      challenges: [
        "ใบลาและใบ OT อยู่ในกระดาษหรือแชต|ตามสถานะการอนุมัติยาก",
        "HR ต้องรวมเวลาเข้า-ออกจากหลายแหล่ง|ก่อนคำนวณเงินเดือนทุกเดือน",
        "คำนวณประกันสังคม ภาษี และ OT ด้วย Excel|เสี่ยงผิดพลาด",
        "ผู้บริหารไม่เห็นภาพรวมกำลังคน|และการขาด ลา มาสาย"
      ],
      solutions: [
        { title: "ข้อมูลพนักงานกลาง", text: "ประวัติ ตำแหน่ง ฝ่าย|และเอกสารอยู่ในที่เดียว" },
        { title: "แอปพนักงาน (Check-in)", text: "เช็คอินพร้อมยืนยันตำแหน่ง GPS และถ่ายรูป|กันลงเวลาแทนกัน ยื่นใบลาและดูสลิปได้เอง" },
        { title: "รอบเงินเดือน", text: "รวมเวลา OT และเบี้ยเลี้ยง หักประกันสังคมและภาษี|แล้วส่งออกไฟล์โอนธนาคาร" },
        { title: "Dashboard บุคลากร", text: "อัตราเข้างานตรงเวลา ชั่วโมง OT|และจำนวนพนักงานแยกตามฝ่าย" },
        { title: "สิทธิ์ตามบทบาท", text: "พนักงาน หัวหน้า และ HR|เห็นข้อมูลเท่าที่จำเป็น" },
        { title: "AI HR Assistant", text: "ตอบคำถามนโยบายจากเอกสารบริษัท คัดกรองใบสมัคร|ตรวจจับการลงเวลาแทนกัน และวิเคราะห์ความเสี่ยงลาออก" }
      ],
      techStack: [
        { group: "Mockup", items: ["Next.js", "React", "TypeScript", "CSS Modules"] },
        { group: "ระบบจริง (แนะนำ)", items: ["PostgreSQL", "Prisma", "RBAC", "Audit Log"] }
      ]
    }
  },
  {
    slug: "mockup-crm",
    icon: Target,
    label: "Concept Mockup · CRM",
    name: ["CRM & SALES PIPELINE"],
    description: "ตัวอย่างระบบ CRM ติดตามลูกค้าและดีล|ตั้งแต่ Lead จนปิดการขาย|พร้อมนัดหมายและยอดขาย",
    tags: ["Mockup", "CRM", "AI"],
    url: "/mockups/crm",
    mockup: true,
    screenshot: {
      src: "/works/mockups/crm-overview-desktop.webp",
      alt: "หน้าภาพรวมของ CRM & SALES PIPELINE (Mockup)",
      width: 2160,
      height: 1350
    },
    gallery: [
      { src: "/works/mockups/crm-overview-desktop.webp", alt: "ภาพรวมการขายและ AI สรุปประจำวัน", caption: "ภาพรวมการขาย|และ AI สรุปประจำวัน", ...DESKTOP },
      { src: "/works/mockups/crm-ai-desktop.webp", alt: "AI Sales Assistant — Lead Scoringและช่วยร่างอีเมล", caption: "AI Sales Assistant — Lead Scoring|และช่วยร่างอีเมล", ...DESKTOP },
      { src: "/works/mockups/crm-pipeline-desktop.webp", alt: "Sales Pipelineแบบ Kanban 5 ขั้น", caption: "Sales Pipeline|แบบ Kanban 5 ขั้น", ...DESKTOP },
      { src: "/works/mockups/crm-customer-desktop.webp", alt: "หน้าลูกค้าและ AI แนะนำสิ่งที่ควรทำต่อ", caption: "หน้าลูกค้า|และ AI แนะนำสิ่งที่ควรทำต่อ", ...DESKTOP },
      { src: "/works/mockups/crm-calendar-desktop.webp", alt: "นัดหมายและ AI สรุปการประชุม", caption: "นัดหมาย|และ AI สรุปการประชุม", ...DESKTOP },
      { src: "/works/mockups/crm-reports-desktop.webp", alt: "รายงานยอดขายและ AI คาดการณ์สิ้นไตรมาส", caption: "รายงานยอดขาย|และ AI คาดการณ์สิ้นไตรมาส", ...DESKTOP },
      { src: "/works/mockups/crm-quotes-desktop.webp", alt: "ใบเสนอราคาพร้อมรายละเอียดและสถานะ", caption: "ใบเสนอราคา|พร้อมรายละเอียดและสถานะ", ...DESKTOP },
      { src: "/works/mockups/crm-customer-mobile.webp", alt: "หน้าลูกค้าบนมือถือ", caption: "หน้าลูกค้าบนมือถือ", ...MOBILE }
    ],
    galleryNote: "หน้าจอตัวอย่าง (Mockup) ที่ทีมออกแบบขึ้น ข้อมูลทั้งหมดเป็นข้อมูลสมมติ กดปุ่ม \"เปิดดู\u00a0Mockup\" และกดเมนูด้านซ้ายเพื่อดูหน้าอื่นได้",
    detail: {
      overview:
        "ตัวอย่างหน้าจอระบบ CRM สำหรับทีมขายองค์กร เห็นดีลทุกขั้นใน Pipeline|นัดหมายที่ต้องติดตาม และยอดขายเทียบเป้า|ในหน้าเดียว",
      challenges: [
        "ข้อมูลลูกค้ากระจายอยู่ในไฟล์|และแชตของเซลส์แต่ละคน",
        "ไม่รู้ว่าดีลไหนค้างอยู่ขั้นไหน|และมีมูลค่ารวมเท่าไหร่",
        "ลืมติดตามลูกค้า|หรือต่อสัญญาไม่ทัน",
        "ผู้จัดการต้องรอรายงานยอดขาย|ตอนสิ้นเดือน"
      ],
      solutions: [
        { title: "Sales Pipeline", text: "ย้ายดีลตามขั้นตั้งแต่ Lead ถึง Won|เห็นมูลค่ารวมของแต่ละขั้น" },
        { title: "ข้อมูลลูกค้าและผู้ติดต่อ", text: "ประวัติการคุย ใบเสนอราคา|และสัญญาอยู่ที่ลูกค้าแต่ละราย" },
        { title: "นัดหมายและงานติดตาม", text: "เตือนงานที่ต้องทำวันนี้|และงานที่เลยกำหนด" },
        { title: "ใบเสนอราคา", text: "สร้างใบเสนอราคาจากระบบ|และติดตามสถานะการอนุมัติ" },
        { title: "รายงานยอดขาย", text: "ยอดขายรายเดือน Win rate|และยอดเทียบเป้ารายทีม" },
        { title: "AI Sales Assistant", text: "ให้คะแนน Lead แนะนำสิ่งที่ควรทำต่อ สรุปการประชุม|ร่างอีเมล และคาดการณ์ยอดขาย" }
      ],
      techStack: [
        { group: "Mockup", items: ["Next.js", "React", "TypeScript", "CSS Modules"] },
        { group: "ระบบจริง (แนะนำ)", items: ["PostgreSQL", "Prisma", "RBAC", "Audit Log"] }
      ]
    }
  }
];

export function getWork(slug: string) {
  return works.find((work) => work.slug === slug);
}
