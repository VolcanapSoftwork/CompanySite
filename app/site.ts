import { SHOW_PRICING } from "./pricing";

export type Lang = "th" | "en";

export const COMPANY_EMAIL = "contact@volcanap.com";
export const COMPANY_NAME = "VOLCANAP SOFTWORK";
/** Registered company names, shown in the footer and structured data */
export const LEGAL_NAME: Record<Lang, string> = {
  th: "บริษัท โวลคาแนป ซอฟต์เวิร์ก จำกัด",
  en: "VOLCANAP SOFTWORK CO., LTD."
};
export const SITE_URL = "https://volcanap.com";

export const SITE_TITLE: Record<Lang, string> = {
  th: "VOLCANAP SOFTWORK | รับพัฒนาระบบเว็บและซอฟต์แวร์สำหรับธุรกิจ",
  en: "VOLCANAP SOFTWORK | Custom Software & Web Systems for Business"
};
export const SITE_DESCRIPTION: Record<Lang, string> = {
  th: "Software house รับออกแบบและพัฒนา custom software, เว็บแอป, ระบบ CRM, HR, ระบบคลินิก, dashboard และ AI automation ตั้งแต่วิเคราะห์ requirement จนถึงดูแลระบบหลังเปิดใช้งาน",
  en: "A software house that designs and builds custom software, web apps, CRM, HR and clinic systems, dashboards and AI automation, from requirements analysis to support after launch."
};

/** Thai lives at the root, English under /en */
export function localePath(lang: Lang, path = "/") {
  if (lang === "th") return path;
  return path === "/" ? "/en" : `/en${path}`;
}

/** Same page in both languages, for hreflang tags */
export function languageAlternates(path = "/") {
  return {
    th: localePath("th", path),
    en: localePath("en", path),
    "x-default": localePath("th", path)
  };
}

export function getNavItems(lang: Lang) {
  const home = lang === "en" ? "/en" : "/";
  const labels =
    lang === "en"
      ? { services: "Services", work: "Work", process: "Process", pricing: "Pricing", contact: "Contact" }
      : { services: "บริการ", work: "ตัวอย่างงาน", process: "ขั้นตอน", pricing: "ราคา", contact: "ติดต่อ" };
  return [
    { href: `${home}#services`, label: labels.services },
    { href: `${home}#work`, label: labels.work },
    { href: `${home}#process`, label: labels.process },
    ...(SHOW_PRICING ? [{ href: `${home}#pricing`, label: labels.pricing }] : []),
    { href: `${home}#contact`, label: labels.contact }
  ];
}
