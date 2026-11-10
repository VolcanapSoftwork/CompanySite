import { SHOW_PRICING } from "./pricing";

export const COMPANY_EMAIL = "contact@volcanap.com";
export const COMPANY_NAME = "VOLCANAP SOFTWORK";
export const SITE_URL = "https://volcanap.com";
export const SITE_TITLE = "VOLCANAP SOFTWORK | รับพัฒนาระบบเว็บและซอฟต์แวร์สำหรับธุรกิจ";
export const SITE_DESCRIPTION =
  "Software house รับออกแบบและพัฒนา custom software, เว็บแอป, ระบบ CRM, HR, ระบบคลินิก, dashboard และ AI automation ตั้งแต่วิเคราะห์ requirement จนถึงดูแลระบบหลังเปิดใช้งาน";

export const navItems = [
  { href: "/#services", label: "บริการ" },
  { href: "/#work", label: "ตัวอย่างงาน" },
  { href: "/#process", label: "ขั้นตอน" },
  ...(SHOW_PRICING ? [{ href: "/#pricing", label: "ราคา" }] : []),
  { href: "/#contact", label: "ติดต่อ" }
];
