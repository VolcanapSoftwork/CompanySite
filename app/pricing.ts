// Published starting prices per system type (Standard size: ready for one
// team, about 3–4 months). Real quotes depend on scope, roles and timeline.
/** Price list on/off. While false, the homepage hides the price list and
 *  every link or claim that points to it; the quote form asks for details. */
export const SHOW_PRICING = false;

export type PriceItem = { id: string; label: string; price: number };
export type PriceGroup = { label: string; items: PriceItem[] };

export const priceGroups: PriceGroup[] = [
  {
    label: "เว็บและแอป",
    items: [
      { id: "landing", label: "Landing Page", price: 15000 },
      { id: "website", label: "Corporate Website", price: 35000 },
      { id: "portal", label: "Customer Portal / ระบบสมาชิก", price: 60000 },
      { id: "ecommerce", label: "E-commerce / ระบบจอง", price: 70000 },
      { id: "webapp", label: "Web Application", price: 85000 },
      { id: "mobile", label: "Mobile App", price: 150000 }
    ]
  },
  {
    label: "ระบบงานองค์กร",
    items: [
      { id: "crm", label: "CRM / ระบบขาย", price: 80000 },
      { id: "hr", label: "HR / Payroll", price: 90000 },
      { id: "erp", label: "ERP / คลังสินค้า", price: 110000 },
      { id: "his", label: "ระบบโรงพยาบาล / คลินิก (HIS)", price: 120000 }
    ]
  },
  {
    label: "ระบบหลังบ้านและข้อมูล",
    items: [
      { id: "integration", label: "System Integration / API", price: 50000 },
      { id: "dashboard", label: "Dashboard", price: 55000 },
      { id: "approval", label: "Workflow อนุมัติเอกสาร", price: 55000 },
      { id: "backoffice", label: "ระบบหลังบ้าน / Admin", price: 60000 }
    ]
  },
  {
    label: "AI และเทคโนโลยีใหม่",
    items: [
      { id: "chatbot", label: "Chatbot / LINE OA", price: 35000 },
      { id: "ocr", label: "AI อ่านเอกสาร / OCR", price: 65000 },
      { id: "ai", label: "AI Workflow", price: 75000 },
      { id: "webar", label: "Web AR / 3D", price: 90000 }
    ]
  },
  {
    label: "งานเสริม",
    items: [
      { id: "uxui", label: "UX/UI Design", price: 30000 },
      { id: "devops", label: "Cloud & DevOps Setup", price: 35000 },
      { id: "qa", label: "QA & Performance Test", price: 40000 },
      { id: "security", label: "Security Layer", price: 45000 }
    ]
  }
];

export const priceItems = priceGroups.flatMap((group) => group.items);

// Yearly maintenance (MA) after handover, as a share of the build price
export const MA_RATE = 0.15;

export function formatBaht(value: number) {
  return new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
    maximumFractionDigits: 0
  }).format(value);
}
