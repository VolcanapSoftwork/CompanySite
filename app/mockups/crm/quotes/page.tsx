import type { Metadata } from "next";
import { Badge, Button, DataTable, FilterBar, MockupShell, Panel, Tabs, mockupStyles as s } from "../../ui";
import { BASE, NAV, SHELL, quoteTone, quotes } from "../data";

export const metadata: Metadata = { title: "ใบเสนอราคา — DealBoard (Mockup) | VOLCANAP SOFTWORK" };

const items: [string, number, number][] = [
  ["วิเคราะห์ระบบและออกแบบ UX/UI", 1, 120000],
  ["พัฒนาระบบรับสมัครออนไลน์ (Web Application)", 1, 320000],
  ["เชื่อมต่อระบบทะเบียนเดิม (API)", 1, 90000],
  ["ทดสอบระบบและอบรมผู้ใช้", 1, 50000],
  ["ดูแลระบบ (MA) 12 เดือน", 1, 40000]
];

const baht = (n: number) => n.toLocaleString("th-TH");

export default function QuotesMockup() {
  const sub = items.reduce((a, [, q, p]) => a + q * p, 0);
  return (
    <MockupShell
      {...SHELL}
      nav={NAV}
      active="ใบเสนอราคา"
      title="ใบเสนอราคา"
      subtitle="ไตรมาส 4/2569 · ส่งแล้ว 18 ฉบับ · อนุมัติ 6 ฉบับ"
      crumbs={[{ label: "ภาพรวม", href: BASE }, { label: "ใบเสนอราคา" }]}
      actions={<Button primary>+ สร้างใบเสนอราคา</Button>}
    >
      <div className={s.gridMain}>
        <Panel title="รายการใบเสนอราคา">
          <Tabs items={["ทั้งหมด", "รอตอบรับ (5)", "อนุมัติ", "ไม่ผ่าน", "ร่าง"]} active="ทั้งหมด" />
          <FilterBar search="ค้นหาเลขที่หรือลูกค้า..." filters={["เจ้าของ: ทุกคน", "เดือน: ต.ค."]} />
          <DataTable
            columns={["เลขที่", "ลูกค้า", "โปรเจกต์", "มูลค่า", "วันที่ส่ง", "สถานะ"]}
            rows={quotes.map(([id, cust, project, total, date, st]) => [
              <span className={s.mono} key="id">{id}</span>,
              <strong key="c">{cust}</strong>,
              <span className={s.muted} key="p">{project}</span>,
              total,
              <span className={s.muted} key="d">{date}</span>,
              <Badge tone={quoteTone[st]} key="s">{st}</Badge>
            ])}
          />
        </Panel>
        <Panel title="QT-2569-118 · มหาวิทยาลัย ตัวอย่าง" action="ดาวน์โหลด PDF">
          <table className={s.payslip}>
            <tbody>
              {items.map(([name, , price]) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td>{baht(price)}</td>
                </tr>
              ))}
              <tr>
                <td className={s.muted}>รวมก่อนภาษี</td>
                <td>{baht(sub)}</td>
              </tr>
              <tr>
                <td className={s.muted}>ภาษีมูลค่าเพิ่ม 7%</td>
                <td>{baht(Math.round(sub * 0.07))}</td>
              </tr>
              <tr className={s.total}>
                <td>รวมทั้งสิ้น</td>
                <td>฿{baht(Math.round(sub * 1.07))}</td>
              </tr>
            </tbody>
          </table>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 }}>
            <Badge tone="warning">รอตอบรับ · ส่งเมื่อ 17 ต.ค.</Badge>
            <Badge tone="neutral">ยืนราคา 30 วัน</Badge>
          </div>
        </Panel>
      </div>
    </MockupShell>
  );
}
