import type { Metadata } from "next";
import { AiCard, Badge, BarChart, Button, DataTable, KpiRow, MockupShell, Panel, mockupStyles as s, type Tone } from "../ui";
import { BASE, NAV, SHELL, leaveTone, leaves } from "./data";

export const metadata: Metadata = { title: "HR & Payroll System (Mockup) | VOLCANAP SOFTWORK" };

const headcount = [
  ["ปฏิบัติการ", 92],
  ["ฝ่ายขาย", 54],
  ["IT", 38],
  ["บัญชี", 26],
  ["HR และธุรการ", 21]
] as const;

export default function HrMockup() {
  const maxHead = Math.max(...headcount.map(([, n]) => n));
  return (
    <MockupShell
      {...SHELL}
      nav={NAV}
      active="ภาพรวม"
      title="ภาพรวมบุคลากร"
      subtitle="บริษัท ตัวอย่าง จำกัด · ตุลาคม 2569"
      actions={
        <>
          <Button href={`${BASE}/app`}>ดูแอปพนักงาน (Check-in)</Button>
          <Button primary href={`${BASE}/leave`}>อนุมัติคำขอลา (14)</Button>
        </>
      }
    >
      <KpiRow
        items={[
          { label: "พนักงานทั้งหมด", value: "231", note: "+6 คนเดือนนี้" },
          { label: "ลางานวันนี้", value: "9", note: "ลาป่วย 4 · ลากิจ 5" },
          { label: "คำขอรออนุมัติ", value: "14", note: "เก่าสุด 3 วัน", tone: "warning" },
          { label: "เข้างานตรงเวลา", value: "96%", note: "+1.4% จากเดือนก่อน", tone: "good" }
        ]}
      />
      <div className={s.grid}>
        <Panel title="ชั่วโมงทำงานล่วงเวลา (OT) รายเดือน" action="6 เดือนล่าสุด">
          <BarChart
            label="ชั่วโมง OT รายเดือน"
            unit="ชั่วโมง"
            data={[
              { x: "พ.ค.", y: 640 },
              { x: "มิ.ย.", y: 712 },
              { x: "ก.ค.", y: 598 },
              { x: "ส.ค.", y: 755 },
              { x: "ก.ย.", y: 820 },
              { x: "ต.ค.", y: 690 }
            ]}
          />
        </Panel>
        <Panel title="จำนวนพนักงานตามฝ่าย">
          <ul className={s.list}>
            {headcount.map(([dept, n]) => (
              <li key={dept} style={{ gridTemplateColumns: "110px minmax(0,1fr) 32px" }}>
                <p>{dept}</p>
                <div className={s.meter} title={`${dept}: ${n} คน`}>
                  <i style={{ width: `${(n / maxHead) * 100}%` }} />
                </div>
                <small>{n}</small>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
      <div style={{ marginBottom: 16 }}>
        <AiCard title="AI วิเคราะห์ความเสี่ยงการลาออก" confidence="ปานกลาง" actions={["ดูรายชื่อ", "วางแผนรักษาพนักงาน"]}>
          <p>
            พบพนักงาน <strong>6 คน</strong> ที่มีสัญญาณเสี่ยงลาออกใน 3 เดือนข้างหน้า ส่วนใหญ่อยู่ฝ่ายปฏิบัติการ
          </p>
          <ul>
            <li>OT สูงกว่าค่าเฉลี่ยฝ่ายมากกว่า 40% ติดต่อกัน 3 เดือน</li>
            <li>ลาป่วยถี่ขึ้น และไม่ได้ปรับเงินเดือนเกิน 2 ปี</li>
            <li>แนะนำ: หัวหน้าคุย 1:1 และทบทวนการกระจายกะงาน</li>
          </ul>
        </AiCard>
      </div>
      <div className={s.grid}>
        <Panel title="คำขอลาล่าสุด" action="อนุมัติทั้งหมด">
          <DataTable
            columns={["พนักงาน", "ฝ่าย", "ประเภท", "วันที่", "วัน", "สถานะ"]}
            rows={leaves.map(([name, dept, type, date, days, st]) => [
              <strong key="n">{name}</strong>,
              <span className={s.muted} key="d">{dept}</span>,
              type,
              date,
              days,
              <Badge tone={leaveTone[st]} key="s">{st}</Badge>
            ])}
          />
        </Panel>
        <Panel title="รอบเงินเดือน ต.ค. 2569">
          <ul className={s.list}>
            {[
              ["คำนวณเวลาเข้า-ออก", "เสร็จแล้ว", "good"],
              ["รวม OT และค่าเบี้ยเลี้ยง", "เสร็จแล้ว", "good"],
              ["หักประกันสังคม / ภาษี", "กำลังตรวจ", "warning"],
              ["ส่งไฟล์โอนธนาคาร", "รอ 25 ต.ค.", "neutral"]
            ].map(([step, st, tone]) => (
              <li key={step}>
                <span className={s.dot} aria-hidden="true" />
                <p>{step}</p>
                <Badge tone={tone as Tone}>{st}</Badge>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </MockupShell>
  );
}
