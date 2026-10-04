import type { Metadata } from "next";
import { AiCard, Badge, BarChart, Button, KpiRow, MockupShell, Panel, mockupStyles as s, type Tone } from "../ui";
import { BASE, NAV, SHELL, stages } from "./data";

export const metadata: Metadata = { title: "CRM & Sales Pipeline (Mockup) | VOLCANAP SOFTWORK" };

const followUps: [string, string, string, Tone][] = [
  ["โทรติดตามใบเสนอราคา", "มหาวิทยาลัย ตัวอย่าง", "10:30", "warning"],
  ["นัด demo ระบบ", "โรงแรม ริเวอร์ไซด์", "14:00", "info"],
  ["ส่งสัญญาฉบับแก้ไข", "บจก. ไทยรีเทล", "16:00", "info"],
  ["ต่ออายุสัญญา MA", "บจก. ออโต้พาร์ท", "เลยกำหนด", "critical"]
];

export default function CrmMockup() {
  return (
    <MockupShell
      {...SHELL}
      nav={NAV}
      active="ภาพรวม"
      title="ภาพรวมการขาย"
      subtitle="ทีมขายองค์กร · ไตรมาส 4/2569"
      actions={<Button primary href={`${BASE}/pipeline`}>เปิด Pipeline</Button>}
    >
      <KpiRow
        items={[
          { label: "มูลค่า Pipeline", value: "฿4.9M", note: "13 ดีลที่เปิดอยู่" },
          { label: "ปิดการขายเดือนนี้", value: "฿890K", note: "74% ของเป้า" },
          { label: "Win rate", value: "32%", note: "+5% จากไตรมาสก่อน", tone: "good" },
          { label: "ต้องติดตามวันนี้", value: "4", note: "เลยกำหนด 1 รายการ", tone: "critical" }
        ]}
      />
      <Panel title="Sales Pipeline" action="+ เพิ่มดีล">
        <div className={s.kanban}>
          {stages.map((col) => (
            <div className={s.column} key={col.stage}>
              <header>
                <span>{col.stage}</span>
                <span>{col.total}</span>
              </header>
              {col.deals.slice(0, 2).map(([name, value, owner]) => (
                <div className={s.deal} key={name + value}>
                  <strong>{name}</strong>
                  <span>
                    {value} · {owner}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Panel>
      <div style={{ marginTop: 16 }}>
        <AiCard title="AI สรุปประจำวัน" confidence="สูง" actions={["ดูคำแนะนำทั้งหมด"]}>
          <ul>
            <li>ดีล “CRM สาขา · ไทยรีเทล” มีโอกาสปิด 78% ภายในสัปดาห์นี้</li>
            <li>Lead ใหม่ “เฟรชมาร์ท” ดูหน้าราคา 3 ครั้ง แนะนำโทรวันนี้</li>
            <li>สัญญา MA ของออโต้พาร์ทเลยกำหนดต่ออายุ 2 วัน</li>
          </ul>
        </AiCard>
      </div>
      <div className={s.grid} style={{ marginTop: 16 }}>
        <Panel title="ยอดขายที่ปิดได้รายเดือน (พันบาท)" action="6 เดือนล่าสุด">
          <BarChart
            label="ยอดขายรายเดือน"
            unit="พันบาท"
            data={[
              { x: "พ.ค.", y: 620 },
              { x: "มิ.ย.", y: 540 },
              { x: "ก.ค.", y: 780 },
              { x: "ส.ค.", y: 690 },
              { x: "ก.ย.", y: 950 },
              { x: "ต.ค.", y: 890 }
            ]}
          />
        </Panel>
        <Panel title="นัดหมายและงานติดตามวันนี้">
          <ul className={s.list}>
            {followUps.map(([task, client, time, tone]) => (
              <li key={task}>
                <span className={s.dot} aria-hidden="true" />
                <p>
                  {task}
                  <br />
                  <small>{client}</small>
                </p>
                <Badge tone={tone}>{time}</Badge>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </MockupShell>
  );
}
