import { BedDouble, CalendarClock, ClipboardList, FlaskConical, LayoutDashboard, Pill, Sparkles, Users } from "lucide-react";
import type { NavItem, Tone } from "../ui";

// Sample data only; patients, doctors and the hospital are made up
export const BASE = "/mockups/hospital";

export const SHELL = {
  brand: "CareFlow",
  accent: "#0b7a8f",
  backHref: "/work/mockup-hospital",
  user: { name: "นพ. วิทยา", role: "ผู้อำนวยการฝ่ายการแพทย์" }
};

export const NAV: NavItem[] = [
  { icon: LayoutDashboard, label: "ภาพรวม", href: BASE },
  { icon: Users, label: "ผู้ป่วย", href: `${BASE}/patients` },
  { icon: CalendarClock, label: "คิวและนัดหมาย", badge: "38", href: `${BASE}/queue` },
  { icon: BedDouble, label: "หอผู้ป่วย / เตียง", href: `${BASE}/wards` },
  { icon: Pill, label: "ห้องยา", badge: "46", href: `${BASE}/pharmacy` },
  { icon: FlaskConical, label: "ห้องแล็บ", href: `${BASE}/lab` },
  { icon: ClipboardList, label: "รายงาน", href: `${BASE}/reports` },
  { icon: Sparkles, label: "AI ผู้ช่วยแพทย์", href: `${BASE}/ai` }
];

export const visitTone: Record<string, Tone> = { รอตรวจ: "neutral", กำลังตรวจ: "info", รอรับยา: "warning", เสร็จสิ้น: "good", Admit: "critical" };
export const triageTone: Record<string, Tone> = { ฉุกเฉิน: "critical", เร่งด่วน: "warning", ปกติ: "neutral" };

export type Patient = {
  hn: string;
  name: string;
  age: number;
  sex: "ชาย" | "หญิง";
  right: string;
  clinic: string;
  doctor: string;
  status: "รอตรวจ" | "กำลังตรวจ" | "รอรับยา" | "เสร็จสิ้น" | "Admit";
  triage: "ฉุกเฉิน" | "เร่งด่วน" | "ปกติ";
  lastVisit: string;
  diagnosis: string;
  allergy: string;
  vitals: { bp: string; pulse: number; temp: number; weight: number };
};

export const patients: Patient[] = [
  { hn: "HN-680214", name: "นายสมศักดิ์ ใจงาม", age: 62, sex: "ชาย", right: "บัตรทอง", clinic: "อายุรกรรม", doctor: "พญ. ศศิธร", status: "กำลังตรวจ", triage: "เร่งด่วน", lastVisit: "วันนี้ 09:12", diagnosis: "เบาหวานชนิดที่ 2, ความดันโลหิตสูง", allergy: "Penicillin", vitals: { bp: "158/94", pulse: 88, temp: 36.8, weight: 74 } },
  { hn: "HN-690033", name: "นางสาวพิมพ์ชนก ทองสุข", age: 28, sex: "หญิง", right: "ประกันสังคม", clinic: "สูติ-นรีเวช", doctor: "พญ. กาญจนา", status: "รอตรวจ", triage: "ปกติ", lastVisit: "วันนี้ 09:40", diagnosis: "ฝากครรภ์ 24 สัปดาห์", allergy: "ไม่มี", vitals: { bp: "112/70", pulse: 82, temp: 36.6, weight: 61 } },
  { hn: "HN-650871", name: "ด.ช. ภูมิ รักดี", age: 6, sex: "ชาย", right: "บัตรทอง", clinic: "กุมารเวช", doctor: "นพ. ธนา", status: "รอรับยา", triage: "ปกติ", lastVisit: "วันนี้ 08:55", diagnosis: "ไข้หวัดใหญ่", allergy: "ไม่มี", vitals: { bp: "—", pulse: 104, temp: 38.4, weight: 21 } },
  { hn: "HN-610552", name: "นายประยูร แสงทอง", age: 71, sex: "ชาย", right: "ข้าราชการ", clinic: "อายุรกรรม", doctor: "พญ. ศศิธร", status: "Admit", triage: "ฉุกเฉิน", lastVisit: "วันนี้ 07:30", diagnosis: "ปอดอักเสบ", allergy: "Sulfa", vitals: { bp: "96/60", pulse: 118, temp: 39.1, weight: 58 } },
  { hn: "HN-670418", name: "นางวันเพ็ญ ศรีสวัสดิ์", age: 54, sex: "หญิง", right: "ประกันสังคม", clinic: "ศัลยกรรมกระดูก", doctor: "นพ. อำนาจ", status: "รอตรวจ", triage: "ปกติ", lastVisit: "วันนี้ 10:05", diagnosis: "ข้อเข่าเสื่อม", allergy: "ไม่มี", vitals: { bp: "130/82", pulse: 76, temp: 36.5, weight: 68 } },
  { hn: "HN-690187", name: "นายกิตติพัฒน์ มีสุข", age: 35, sex: "ชาย", right: "จ่ายเอง", clinic: "ทันตกรรม", doctor: "ทพ. ณัฐ", status: "เสร็จสิ้น", triage: "ปกติ", lastVisit: "วันนี้ 08:20", diagnosis: "ขูดหินปูน", allergy: "ไม่มี", vitals: { bp: "120/78", pulse: 72, temp: 36.6, weight: 80 } },
  { hn: "HN-640926", name: "นางบุญเรือน คำดี", age: 67, sex: "หญิง", right: "บัตรทอง", clinic: "อายุรกรรม", doctor: "นพ. ธีรเดช", status: "รอรับยา", triage: "ปกติ", lastVisit: "วันนี้ 08:45", diagnosis: "ไขมันในเลือดสูง", allergy: "Aspirin", vitals: { bp: "138/86", pulse: 80, temp: 36.7, weight: 63 } },
  { hn: "HN-690245", name: "นายอนุวัฒน์ พลชัย", age: 41, sex: "ชาย", right: "ประกันเอกชน", clinic: "ฉุกเฉิน (ER)", doctor: "นพ. ภาคิน", status: "กำลังตรวจ", triage: "ฉุกเฉิน", lastVisit: "วันนี้ 10:18", diagnosis: "แผลฉีกขาดจากอุบัติเหตุ", allergy: "ไม่มี", vitals: { bp: "142/90", pulse: 96, temp: 36.9, weight: 77 } }
];

export function getPatient(hn: string) {
  return patients.find((p) => p.hn === hn);
}

export const wards: { name: string; beds: number; used: number }[] = [
  { name: "อายุรกรรมชาย", beds: 30, used: 28 },
  { name: "อายุรกรรมหญิง", beds: 30, used: 25 },
  { name: "ศัลยกรรม", beds: 24, used: 17 },
  { name: "กุมารเวช", beds: 20, used: 11 },
  { name: "สูติกรรม", beds: 16, used: 9 },
  { name: "ICU", beds: 10, used: 9 },
  { name: "พิเศษ (ห้องเดี่ยว)", beds: 18, used: 12 },
  { name: "ฟื้นฟู", beds: 12, used: 5 }
];
