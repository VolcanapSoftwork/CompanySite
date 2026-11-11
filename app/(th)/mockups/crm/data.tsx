import { BarChart3, Building2, CalendarClock, Inbox, LayoutDashboard, Sparkles, Target, Users } from "lucide-react";
import type { NavItem, Tone } from "../ui";

// Sample data only; companies and people are made up
export const BASE = "/mockups/crm";

export const SHELL = {
  brand: "DealBoard",
  accent: "#6d3fc4",
  backHref: "/work/mockup-crm",
  user: { name: "นภา", role: "Sales Manager" }
};

export const NAV: NavItem[] = [
  { icon: LayoutDashboard, label: "ภาพรวม", href: BASE },
  { icon: Target, label: "Pipeline", href: `${BASE}/pipeline` },
  { icon: Building2, label: "ลูกค้า", href: `${BASE}/customers` },
  { icon: Users, label: "ผู้ติดต่อ", href: `${BASE}/contacts` },
  { icon: CalendarClock, label: "นัดหมาย", badge: "4", href: `${BASE}/calendar` },
  { icon: Inbox, label: "ใบเสนอราคา", href: `${BASE}/quotes` },
  { icon: BarChart3, label: "รายงานยอดขาย", href: `${BASE}/reports` },
  { icon: Sparkles, label: "AI Sales Assistant", href: `${BASE}/ai` }
];

export type Customer = {
  id: string;
  name: string;
  industry: string;
  province: string;
  owner: string;
  tier: "Key Account" | "Standard" | "New";
  value: string;
  lastContact: string;
  contact: string;
  phone: string;
};

export const customers: Customer[] = [
  { id: "ACC-1021", name: "มหาวิทยาลัย ตัวอย่าง", industry: "การศึกษา", province: "กรุงเทพฯ", owner: "สมพงษ์", tier: "Key Account", value: "฿1.84M", lastContact: "วันนี้", contact: "ผศ.ดร. กิตติ วัฒนา", phone: "02-xxx-1021" },
  { id: "ACC-1017", name: "บจก. ไทยรีเทล", industry: "ค้าปลีก", province: "นนทบุรี", owner: "ภูมิ", tier: "Key Account", value: "฿1.26M", lastContact: "เมื่อวาน", contact: "คุณมาลัย ศรีงาม", phone: "02-xxx-1017" },
  { id: "ACC-1009", name: "บจก. ออโต้พาร์ท", industry: "ยานยนต์", province: "ระยอง", owner: "สมพงษ์", tier: "Standard", value: "฿820K", lastContact: "3 วันก่อน", contact: "คุณวิชัย อ่อนน้อม", phone: "038-xxx-109" },
  { id: "ACC-1032", name: "โรงแรม ริเวอร์ไซด์", industry: "โรงแรม", province: "กรุงเทพฯ", owner: "นภา", tier: "New", value: "฿350K", lastContact: "วันนี้", contact: "คุณเอมิกา จันทร์ดี", phone: "02-xxx-1032" },
  { id: "ACC-1028", name: "รพ. เวลเนส", industry: "สุขภาพ", province: "เชียงใหม่", owner: "นภา", tier: "New", value: "฿280K", lastContact: "5 วันก่อน", contact: "นพ. ธนกร ใจเย็น", phone: "053-xxx-128" },
  { id: "ACC-1004", name: "บจก. สยามโลจิสติกส์", industry: "ขนส่ง", province: "สมุทรปราการ", owner: "สมพงษ์", tier: "Standard", value: "฿640K", lastContact: "1 สัปดาห์ก่อน", contact: "คุณประเสริฐ มั่นคง", phone: "02-xxx-1004" },
  { id: "ACC-1036", name: "บจก. กรีนฟาร์ม", industry: "เกษตร", province: "นครปฐม", owner: "ภูมิ", tier: "New", value: "฿190K", lastContact: "2 วันก่อน", contact: "คุณสุดา เขียวขจี", phone: "034-xxx-136" },
  { id: "ACC-1012", name: "คลินิก สไมล์", industry: "สุขภาพ", province: "ภูเก็ต", owner: "นภา", tier: "Standard", value: "฿120K", lastContact: "เมื่อวาน", contact: "ทพญ. ปวีณา ยิ้มแย้ม", phone: "076-xxx-112" }
];

export function getCustomer(id: string) {
  return customers.find((c) => c.id === id);
}

export const tierTone: Record<Customer["tier"], Tone> = { "Key Account": "info", Standard: "neutral", New: "good" };

export const stages = [
  { stage: "Lead", total: "฿1.2M", deals: [["บจก. สยามโลจิสติกส์", "฿420K", "สมพงษ์", "ระบบติดตามรถขนส่ง"], ["รพ. เวลเนส", "฿280K", "นภา", "ระบบนัดหมายผู้ป่วย"], ["บจก. เฟรชมาร์ท", "฿500K", "ภูมิ", "ระบบสมาชิกและแต้ม"]] },
  { stage: "Qualified", total: "฿980K", deals: [["โรงแรม ริเวอร์ไซด์", "฿350K", "นภา", "ระบบจองห้องพัก"], ["บจก. กรีนฟาร์ม", "฿190K", "ภูมิ", "Dashboard ผลผลิต"], ["สหกรณ์ ตัวอย่าง", "฿440K", "สมพงษ์", "ระบบบัญชีสมาชิก"]] },
  { stage: "Proposal", total: "฿1.1M", deals: [["มหาวิทยาลัย ตัวอย่าง", "฿620K", "สมพงษ์", "ระบบรับสมัครนักศึกษา"], ["บจก. ซันพาวเวอร์", "฿480K", "ภูมิ", "ระบบแจ้งซ่อม"]] },
  { stage: "Negotiation", total: "฿760K", deals: [["บจก. ไทยรีเทล", "฿540K", "ภูมิ", "CRM สาขา"], ["คลินิก สไมล์", "฿120K", "นภา", "LINE OA นัดหมาย"], ["บจก. โปรเฟรท", "฿100K", "สมพงษ์", "MA ระบบเดิม"]] },
  { stage: "Won", total: "฿890K", deals: [["บจก. ออโต้พาร์ท", "฿410K", "สมพงษ์", "ระบบคลังอะไหล่"], ["มหาวิทยาลัย ตัวอย่าง", "฿480K", "สมพงษ์", "ระบบจองห้องประชุม"]] }
] as const;

export const quoteTone: Record<string, Tone> = { ร่าง: "neutral", ส่งแล้ว: "info", รอตอบรับ: "warning", อนุมัติ: "good", ไม่ผ่าน: "critical" };

export const quotes: [string, string, string, string, string, string][] = [
  ["QT-2569-118", "มหาวิทยาลัย ตัวอย่าง", "ระบบรับสมัครนักศึกษา", "฿620,000", "17 ต.ค.", "รอตอบรับ"],
  ["QT-2569-117", "บจก. ไทยรีเทล", "CRM สาขา (แก้ไขครั้งที่ 2)", "฿540,000", "16 ต.ค.", "ส่งแล้ว"],
  ["QT-2569-115", "บจก. ซันพาวเวอร์", "ระบบแจ้งซ่อม", "฿480,000", "14 ต.ค.", "ส่งแล้ว"],
  ["QT-2569-112", "บจก. ออโต้พาร์ท", "ระบบคลังอะไหล่", "฿410,000", "9 ต.ค.", "อนุมัติ"],
  ["QT-2569-110", "คลินิก สไมล์", "LINE OA นัดหมาย", "฿120,000", "8 ต.ค.", "รอตอบรับ"],
  ["QT-2569-106", "บจก. เมกะฟู้ด", "ระบบ POS", "฿390,000", "2 ต.ค.", "ไม่ผ่าน"],
  ["QT-2569-119", "โรงแรม ริเวอร์ไซด์", "ระบบจองห้องพัก", "฿350,000", "—", "ร่าง"]
];
