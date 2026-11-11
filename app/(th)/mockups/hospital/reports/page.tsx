import type { Metadata } from "next";
import { AiCard, BarChart, Button, DataTable, FilterBar, KpiRow, MockupShell, Panel, mockupStyles as s } from "../../ui";
import { BASE, NAV, SHELL } from "../data";

export const metadata: Metadata = { title: "รายงาน — CareFlow (Mockup) | VOLCANAP SOFTWORK" };

const topDx: [string, string, number, string][] = [
  ["E11", "เบาหวานชนิดที่ 2", 1284, "+4%"],
  ["I10", "ความดันโลหิตสูง", 1102, "+2%"],
  ["J10", "ไข้หวัดใหญ่", 486, "+38%"],
  ["M17", "ข้อเข่าเสื่อม", 312, "−3%"],
  ["J18", "ปอดอักเสบ", 148, "+12%"]
];

export default function ReportsMockup() {
  return (
    <MockupShell
      {...SHELL}
      nav={NAV}
      active="รายงาน"
      title="รายงานผู้บริหาร"
      subtitle="ตุลาคม 2569 · อัปเดตอัตโนมัติทุกคืน"
      crumbs={[{ label: "ภาพรวม", href: BASE }, { label: "รายงาน" }]}
      actions={
        <>
          <Button>ส่งออก Excel</Button>
          <Button primary>ส่งออก PDF</Button>
        </>
      }
    >
      <FilterBar search="ค้นหารายงาน..." filters={["ช่วงเวลา: ต.ค. 2569", "แผนก: ทั้งหมด", "สิทธิ: ทั้งหมด"]} />
      <KpiRow
        items={[
          { label: "ผู้ป่วยนอกทั้งเดือน", value: "8,942", note: "+5.2% จากเดือนก่อน" },
          { label: "อัตราครองเตียง", value: "73%", note: "เป้าหมาย ≤ 85%", tone: "good" },
          { label: "วันนอนเฉลี่ย", value: "4.1 วัน", note: "−0.3 วัน", tone: "good" },
          { label: "รายได้ (ประมาณการ)", value: "฿38.6M", note: "+3.8%" }
        ]}
      />
      <div className={s.grid}>
        <Panel title="ผู้ป่วยนอกรายเดือน (คน)" action="6 เดือนล่าสุด">
          <BarChart
            label="ผู้ป่วยนอกรายเดือน"
            unit="คน"
            data={[
              { x: "พ.ค.", y: 8120 },
              { x: "มิ.ย.", y: 8340 },
              { x: "ก.ค.", y: 8610 },
              { x: "ส.ค.", y: 8790 },
              { x: "ก.ย.", y: 8500 },
              { x: "ต.ค.", y: 8942 }
            ]}
          />
        </Panel>
        <AiCard title="คาดการณ์ผู้ป่วยและข้อเสนอแนะ" confidence="ปานกลาง" actions={["ปรับตารางเวรแพทย์", "ดูโมเดลคาดการณ์"]}>
          <p>
            คาดว่าเดือน พ.ย. จะมีผู้ป่วยนอก <strong>ประมาณ 9,400 คน (+5%)</strong> จากแนวโน้มไข้หวัดใหญ่ที่เพิ่มขึ้น 38%
          </p>
          <ul>
            <li>เพิ่มแพทย์กุมารเวช 1 ห้องตรวจช่วงเช้าวันจันทร์–พุธ</li>
            <li>สำรอง Oseltamivir เพิ่มอย่างน้อย 600 แคปซูล</li>
            <li>เปิดช่องฉีดวัคซีนไข้หวัดใหญ่วันเสาร์</li>
          </ul>
        </AiCard>
      </div>
      <Panel title="5 อันดับการวินิจฉัย (ICD-10)">
        <DataTable
          columns={["รหัส", "การวินิจฉัย", "จำนวนครั้ง", "เทียบเดือนก่อน"]}
          rows={topDx.map(([code, name, n, diff]) => [
            <span className={s.mono} key="c">{code}</span>,
            <strong key="n">{name}</strong>,
            n.toLocaleString("th-TH"),
            <span key="d" className={diff.startsWith("+3") ? s.tone_critical : s.muted}>{diff}</span>
          ])}
        />
      </Panel>
    </MockupShell>
  );
}
