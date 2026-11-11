import type { Metadata } from "next";
import { AiCard, Badge, BarChart, Button, DataTable, FilterBar, KpiRow, MockupShell, Panel, mockupStyles as s } from "../../ui";
import { BASE, NAV, SHELL } from "../data";

export const metadata: Metadata = { title: "รายงานยอดขาย — DealBoard (Mockup) | VOLCANAP SOFTWORK" };

const reps: [string, string, string, number, string][] = [
  ["สมพงษ์", "฿1.32M", "฿1.20M", 110, "8 ดีล"],
  ["นภา", "฿0.96M", "฿1.10M", 87, "11 ดีล"],
  ["ภูมิ", "฿0.74M", "฿1.00M", 74, "9 ดีล"]
];

export default function CrmReportsMockup() {
  return (
    <MockupShell
      {...SHELL}
      nav={NAV}
      active="รายงานยอดขาย"
      title="รายงานยอดขาย"
      subtitle="ไตรมาส 4/2569 · อัปเดตทุกชั่วโมง"
      crumbs={[{ label: "ภาพรวม", href: BASE }, { label: "รายงานยอดขาย" }]}
      actions={<Button primary>ส่งออก PDF</Button>}
    >
      <FilterBar search="ค้นหารายงาน..." filters={["ไตรมาส: Q4/2569", "ทีม: ทั้งหมด", "อุตสาหกรรม: ทั้งหมด"]} />
      <KpiRow
        items={[
          { label: "ยอดขายไตรมาสนี้", value: "฿3.02M", note: "91% ของเป้า ฿3.3M" },
          { label: "ดีลที่ปิดได้", value: "28", note: "มูลค่าเฉลี่ย ฿108K" },
          { label: "Win rate", value: "32%", note: "+5%", tone: "good" },
          { label: "AI คาดการณ์สิ้นไตรมาส", value: "฿3.46M", note: "105% ของเป้า", tone: "good" }
        ]}
      />
      <div className={s.grid}>
        <Panel title="ยอดขายรายเดือน (พันบาท)" action="12 เดือน">
          <BarChart
            label="ยอดขายรายเดือน"
            unit="พันบาท"
            data={[
              { x: "พ.ย.", y: 540 },
              { x: "ธ.ค.", y: 720 },
              { x: "ม.ค.", y: 480 },
              { x: "ก.พ.", y: 610 },
              { x: "มี.ค.", y: 830 },
              { x: "เม.ย.", y: 560 },
              { x: "พ.ค.", y: 620 },
              { x: "มิ.ย.", y: 540 },
              { x: "ก.ค.", y: 780 },
              { x: "ส.ค.", y: 690 },
              { x: "ก.ย.", y: 950 },
              { x: "ต.ค.", y: 890 }
            ]}
          />
        </Panel>
        <AiCard title="AI คาดการณ์และข้อเสนอแนะ" confidence="ปานกลาง" actions={["ดูดีลที่ควรเร่ง"]}>
          <p>
            จากดีลใน Pipeline และประวัติการปิดการขาย คาดว่าสิ้นไตรมาสจะได้ <strong>฿3.46M (105%)</strong>
          </p>
          <ul>
            <li>ดีล “CRM สาขา · ไทยรีเทล” มีโอกาสปิด 78% เป็นตัวแปรหลักของเป้า</li>
            <li>ลูกค้ากลุ่มสุขภาพปิดเร็วกว่าค่าเฉลี่ย 12 วัน ควรเพิ่ม Lead กลุ่มนี้</li>
            <li>ภูมิมีดีลค้างขั้น Qualified นาน แนะนำจับคู่กับสมพงษ์ในการนำเสนอ</li>
          </ul>
        </AiCard>
      </div>
      <Panel title="ผลงานรายพนักงานขาย">
        <DataTable
          columns={["พนักงานขาย", "ยอดขาย", "เป้า", "ทำได้", "ดีลที่ปิด"]}
          rows={reps.map(([name, sales, target, pct, deals]) => [
            <strong key="n">{name}</strong>,
            sales,
            <span className={s.muted} key="t">{target}</span>,
            <Badge tone={pct >= 100 ? "good" : pct >= 80 ? "warning" : "critical"} key="p">{pct}%</Badge>,
            deals
          ])}
        />
      </Panel>
    </MockupShell>
  );
}
