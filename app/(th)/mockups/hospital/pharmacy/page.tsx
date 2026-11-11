import type { Metadata } from "next";
import Link from "next/link";
import { AiCard, Badge, Button, DataTable, FilterBar, KpiRow, MockupShell, Panel, Tabs, mockupStyles as s, type Tone } from "../../ui";
import { BASE, NAV, SHELL } from "../data";

export const metadata: Metadata = { title: "ห้องยา — CareFlow (Mockup) | VOLCANAP SOFTWORK" };

const orders: [string, string, string, string, string, string, Tone][] = [
  ["RX-26-1042", "HN-650871", "ด.ช. ภูมิ รักดี", "2 รายการ", "ช่อง 2", "กำลังจัดยา", "info"],
  ["RX-26-1041", "HN-640926", "นางบุญเรือน คำดี", "3 รายการ", "ช่อง 1", "รอตรวจสอบ", "warning"],
  ["RX-26-1040", "HN-680214", "นายสมศักดิ์ ใจงาม", "3 รายการ", "—", "AI แจ้งเตือน", "critical"],
  ["RX-26-1039", "HN-690187", "นายกิตติพัฒน์ มีสุข", "1 รายการ", "ช่อง 3", "จ่ายยาแล้ว", "good"],
  ["RX-26-1038", "HN-670418", "นางวันเพ็ญ ศรีสวัสดิ์", "2 รายการ", "ช่อง 1", "จ่ายยาแล้ว", "good"]
];

const stock: [string, string, number, number][] = [
  ["Paracetamol 500 mg", "เม็ด", 1240, 3000],
  ["Amoxicillin 500 mg", "แคปซูล", 180, 1500],
  ["Metformin 500 mg", "เม็ด", 2650, 4000],
  ["Oseltamivir 75 mg", "แคปซูล", 42, 400],
  ["Insulin glargine", "ปากกา", 36, 60]
];

export default function PharmacyMockup() {
  return (
    <MockupShell
      {...SHELL}
      nav={NAV}
      active="ห้องยา"
      title="ห้องยาและคลังยา"
      subtitle="ใบสั่งยาวันนี้ 318 ใบ · รอจ่าย 46 ใบ"
      crumbs={[{ label: "ภาพรวม", href: BASE }, { label: "ห้องยา" }]}
      actions={
        <>
          <Button>รับยาเข้าคลัง</Button>
          <Button primary>เรียกคิวรับยา</Button>
        </>
      }
    >
      <KpiRow
        items={[
          { label: "รอจ่ายยา", value: "46", note: "รอเฉลี่ย 12 นาที" },
          { label: "จ่ายแล้ววันนี้", value: "272", note: "ความคลาดเคลื่อน 0 รายการ", tone: "good" },
          { label: "AI ตรวจพบความเสี่ยง", value: "3", note: "ยาตีกัน / แพ้ยา", tone: "critical" },
          { label: "ยาใกล้หมด", value: "4", note: "ต่ำกว่าจุดสั่งซื้อ", tone: "warning" }
        ]}
      />
      <div className={s.gridMain}>
        <Panel title="ใบสั่งยา">
          <Tabs items={["รอจ่าย (46)", "จ่ายแล้ว", "ยกเลิก"]} active="รอจ่าย (46)" />
          <FilterBar search="ค้นหาเลขใบสั่งยาหรือ HN..." filters={["ช่องจ่ายยา: ทั้งหมด", "สิทธิ: ทั้งหมด"]} />
          <DataTable
            columns={["เลขที่", "HN", "ผู้ป่วย", "รายการ", "ช่อง", "สถานะ"]}
            rows={orders.map(([id, hn, name, items, ch, st, tone]) => [
              <span className={s.mono} key="id">{id}</span>,
              <Link className={`${s.mono} ${s.rowLink}`} href={`${BASE}/patients/${hn}`} key="hn">{hn}</Link>,
              <strong key="n">{name}</strong>,
              items,
              <span className={s.muted} key="c">{ch}</span>,
              <Badge tone={tone} key="s">{st}</Badge>
            ])}
          />
        </Panel>
        <div className={s.stack}>
          <AiCard title="ตรวจสอบความปลอดภัยของยา · RX-26-1040" confidence="สูง" actions={["ส่งกลับแพทย์", "ดูรายละเอียด"]}>
            <p>
              <strong>นายสมศักดิ์ ใจงาม</strong> มีประวัติ<strong>แพ้ Penicillin</strong>
            </p>
            <ul>
              <li>ไม่พบยาในกลุ่ม Penicillin ในใบสั่งนี้</li>
              <li>Metformin: eGFR ล่าสุด 52 ควรพิจารณาปรับขนาดยา</li>
              <li>Amlodipine + Atorvastatin: ใช้ร่วมกันได้ เฝ้าระวังอาการปวดกล้ามเนื้อ</li>
            </ul>
          </AiCard>
          <Panel title="สต็อกยา" action="ดูทั้งหมด">
            <ul className={s.list}>
              {stock.map(([name, unit, left, max]) => (
                <li key={name} style={{ gridTemplateColumns: "minmax(0,1fr) 90px 78px" }}>
                  <p>{name}</p>
                  <div className={s.meter} title={`${name}: เหลือ ${left} ${unit}`}>
                    <i style={{ width: `${(left / max) * 100}%`, background: left / max < 0.15 ? "var(--m-critical)" : undefined }} />
                  </div>
                  <small className={left / max < 0.15 ? s.tone_critical : undefined}>
                    {left.toLocaleString("th-TH")} {unit}
                  </small>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </MockupShell>
  );
}
