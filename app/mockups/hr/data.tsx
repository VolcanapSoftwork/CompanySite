import { CalendarCheck, CalendarDays, Clock3, FileText, LayoutDashboard, Smartphone, Sparkles, Users, Wallet } from "lucide-react";
import type { NavItem, Tone } from "../ui";

// Sample data only; people and the company are made up
export const BASE = "/mockups/hr";

export const SHELL = {
  brand: "PeopleHub",
  accent: "#0f7f71",
  backHref: "/work/mockup-hr",
  user: { name: "อรอุมา", role: "HR Manager" }
};

export const NAV: NavItem[] = [
  { icon: LayoutDashboard, label: "ภาพรวม", href: BASE },
  { icon: Users, label: "พนักงาน", href: `${BASE}/employees` },
  { icon: Clock3, label: "เวลาเข้า-ออก", href: `${BASE}/attendance` },
  { icon: CalendarDays, label: "การลา", badge: "14", href: `${BASE}/leave` },
  { icon: Wallet, label: "เงินเดือน", href: `${BASE}/payroll` },
  { icon: CalendarCheck, label: "ประเมินผล", href: `${BASE}/performance` },
  { icon: FileText, label: "เอกสาร HR", href: `${BASE}/documents` },
  { icon: Sparkles, label: "AI HR Assistant", href: `${BASE}/ai` },
  { icon: Smartphone, label: "แอปพนักงาน", href: `${BASE}/app` }
];

export const leaveTone: Record<string, Tone> = { รออนุมัติ: "warning", อนุมัติแล้ว: "good", ไม่อนุมัติ: "critical" };
export const empTone: Record<string, Tone> = { ทำงาน: "good", ทดลองงาน: "info", ลาคลอด: "neutral", ลาออก: "critical" };

export const employees: [string, string, string, string, string, string][] = [
  ["EMP-0142", "กมลชนก ใจดี", "Sales Executive", "ฝ่ายขาย", "1 มี.ค. 2564", "ทำงาน"],
  ["EMP-0198", "ปิยะพงษ์ ศรีสุข", "Software Engineer", "IT", "15 ก.ค. 2565", "ทำงาน"],
  ["EMP-0203", "วรรณา ทองดี", "Accountant", "บัญชี", "1 ก.ย. 2565", "ทำงาน"],
  ["EMP-0219", "ธีรวัฒน์ แก้วมณี", "Operation Supervisor", "ปฏิบัติการ", "3 ม.ค. 2566", "ทำงาน"],
  ["EMP-0230", "สุนิสา พรหมมา", "HR Officer", "HR", "1 มิ.ย. 2566", "ลาคลอด"],
  ["EMP-0247", "ณัฐวุฒิ บุญมา", "Warehouse Staff", "ปฏิบัติการ", "16 ต.ค. 2566", "ทำงาน"],
  ["EMP-0261", "อัญชลี วงศ์ใหญ่", "Marketing Specialist", "ฝ่ายขาย", "1 ส.ค. 2569", "ทดลองงาน"],
  ["EMP-0264", "ชยพล สุขเจริญ", "Data Analyst", "IT", "1 ก.ย. 2569", "ทดลองงาน"]
];

export const leaves: [string, string, string, string, string, string][] = [
  ["กมลชนก ใจดี", "ฝ่ายขาย", "ลาพักร้อน", "21–23 ต.ค.", "3", "รออนุมัติ"],
  ["ปิยะพงษ์ ศรีสุข", "IT", "ลาป่วย", "20 ต.ค.", "1", "อนุมัติแล้ว"],
  ["วรรณา ทองดี", "บัญชี", "ลากิจ", "24 ต.ค.", "0.5", "รออนุมัติ"],
  ["ธีรวัฒน์ แก้วมณี", "ปฏิบัติการ", "ลาพักร้อน", "28–31 ต.ค.", "4", "รออนุมัติ"],
  ["สุนิสา พรหมมา", "HR", "ลาป่วย", "17 ต.ค.", "1", "ไม่อนุมัติ"]
];

export function getEmployee(id: string) {
  return employees.find(([eid]) => eid === id);
}
