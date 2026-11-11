import type { Metadata } from "next";
import Link from "next/link";
import { AiCard, Badge, BarChart, Button, DataTable, KpiRow, MockupShell, Panel, mockupStyles as s } from "../ui";
import { BASE, NAV, SHELL, patients, triageTone, visitTone, wards } from "./data";

export const metadata: Metadata = { title: "Hospital Management System (Mockup) | VOLCANAP SOFTWORK" };

export default function HospitalMockup() {
  const beds = wards.reduce((a, w) => a + w.beds, 0);
  const used = wards.reduce((a, w) => a + w.used, 0);
  return (
    <MockupShell
      {...SHELL}
      nav={NAV}
      active="ภาพรวม"
      title="ภาพรวมโรงพยาบาล"
      subtitle="โรงพยาบาลตัวอย่าง · วันนี้ 10:30 น."
      actions={<Button primary href={`${BASE}/queue`}>เปิดกระดานคิว</Button>}
    >
      <KpiRow
        items={[
          { label: "ผู้ป่วยนอก (OPD) วันนี้", value: "412", note: "+6% จากวันเดียวกันสัปดาห์ก่อน" },
          { label: "รอตรวจ", value: "38", note: "รอเฉลี่ย 24 นาที" },
          { label: "เตียงว่าง", value: `${beds - used}`, note: `ใช้ ${Math.round((used / beds) * 100)}% จาก ${beds} เตียง` },
          { label: "ER วิกฤต", value: "2", note: "กำลังรักษา", tone: "critical" }
        ]}
      />
      <div className={s.grid}>
        <Panel title="ผู้ป่วยนอกรายวัน" action="7 วันล่าสุด">
          <BarChart
            label="จำนวนผู้ป่วยนอกรายวัน"
            unit="คน"
            data={[
              { x: "อ.", y: 386 },
              { x: "พ.", y: 402 },
              { x: "พฤ.", y: 371 },
              { x: "ศ.", y: 355 },
              { x: "ส.", y: 214 },
              { x: "อา.", y: 168 },
              { x: "จ.", y: 412 }
            ]}
          />
        </Panel>
        <Panel title="ระยะเวลารอแยกตามคลินิก">
          <ul className={s.list}>
            {[["อายุรกรรม", 41], ["กุมารเวช", 28], ["ศัลยกรรมกระดูก", 22], ["สูติ-นรีเวช", 18], ["ทันตกรรม", 12]].map(([c, m]) => (
              <li key={c} style={{ gridTemplateColumns: "110px minmax(0,1fr) 54px" }}>
                <p>{c}</p>
                <div className={s.meter} title={`${c}: รอเฉลี่ย ${m} นาที`}>
                  <i style={{ width: `${(Number(m) / 41) * 100}%` }} />
                </div>
                <small>{m} นาที</small>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
      <div style={{ marginBottom: 16 }}>
        <AiCard title="AI คาดการณ์ความหนาแน่นวันนี้" confidence="สูง" actions={["เปิดห้องตรวจเพิ่ม", "ดูรายละเอียด"]}>
          <p>
            คาดว่าช่วง <strong>10:30–12:00</strong> อายุรกรรมจะมีผู้ป่วยรอ <strong>เกิน 50 นาที</strong> (ปัจจุบัน 41 นาที)
            จากนัดหมายที่หนาแน่นและผู้ป่วย walk-in ที่เพิ่มขึ้น
          </p>
          <ul>
            <li>แนะนำเปิดห้องตรวจ 5 เพิ่ม 1 ห้อง จะลดเวลารอเหลือประมาณ 25 นาที</li>
            <li>ส่งข้อความแจ้งผู้ป่วยนัดช่วงบ่ายว่ามาช้าลงได้ 30 นาที</li>
          </ul>
        </AiCard>
      </div>
      <Panel title="ผู้ป่วยวันนี้" action="ดูทั้งหมด">
        <DataTable
          columns={["HN", "ชื่อผู้ป่วย", "คลินิก", "แพทย์", "คัดกรอง", "สถานะ", "เวลา"]}
          rows={patients.slice(0, 6).map((p) => [
            <Link className={`${s.mono} ${s.rowLink}`} href={`${BASE}/patients/${p.hn}`} key="hn">{p.hn}</Link>,
            <strong key="n">{p.name}</strong>,
            p.clinic,
            <span className={s.muted} key="d">{p.doctor}</span>,
            <Badge tone={triageTone[p.triage]} key="t">{p.triage}</Badge>,
            <Badge tone={visitTone[p.status]} key="s">{p.status}</Badge>,
            <span className={s.muted} key="v">{p.lastVisit.replace("วันนี้ ", "")}</span>
          ])}
        />
      </Panel>
    </MockupShell>
  );
}
