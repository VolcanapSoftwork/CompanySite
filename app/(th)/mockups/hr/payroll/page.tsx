import type { Metadata } from "next";
import { Badge, Button, DataTable, KpiRow, MockupShell, Panel, mockupStyles as s } from "../../ui";
import { BASE, NAV, SHELL } from "../data";

export const metadata: Metadata = { title: "เงินเดือน — PeopleHub (Mockup) | VOLCANAP SOFTWORK" };

const baht = (n: number) => n.toLocaleString("th-TH", { minimumFractionDigits: 2 });

const income: [string, number][] = [
  ["เงินเดือน", 32000],
  ["ค่าล่วงเวลา (OT) 12 ชม.", 2400],
  ["ค่าเบี้ยเลี้ยง", 1500],
  ["ค่าคอมมิชชัน", 4800]
];
const deduct: [string, number][] = [
  ["ประกันสังคม", 750],
  ["ภาษีหัก ณ ที่จ่าย", 1286],
  ["กองทุนสำรองเลี้ยงชีพ 3%", 960]
];

const departments: [string, number, string, string, string, string, string, "good" | "warning"][] = [
  ["ปฏิบัติการ", 92, "2.48M", "268K", "214K", "2.53M", "ตรวจแล้ว", "good"],
  ["ฝ่ายขาย", 54, "2.10M", "64K", "182K", "2.29M", "ตรวจแล้ว", "good"],
  ["IT", 38, "1.92M", "52K", "171K", "1.80M", "รอตรวจ 3 คน", "warning"],
  ["บัญชี", 26, "0.82M", "18K", "71K", "0.77M", "ตรวจแล้ว", "good"],
  ["HR และธุรการ", 21, "0.47M", "10K", "38K", "0.45M", "รอตรวจ 2 คน", "warning"]
];

export default function PayrollMockup() {
  const gross = income.reduce((a, [, n]) => a + n, 0);
  const out = deduct.reduce((a, [, n]) => a + n, 0);
  return (
    <MockupShell
      {...SHELL}
      nav={NAV}
      active="เงินเดือน"
      title="รอบเงินเดือน ตุลาคม 2569"
      subtitle="ตัดรอบ 20 ต.ค. · จ่าย 25 ต.ค. · 231 คน"
      crumbs={[{ label: "ภาพรวม", href: BASE }, { label: "เงินเดือน" }]}
      actions={
        <>
          <Button>ส่งออก ภ.ง.ด.1</Button>
          <Button>ไฟล์โอนธนาคาร</Button>
          <Button primary>ยืนยันรอบเงินเดือน</Button>
        </>
      }
    >
      <KpiRow
        items={[
          { label: "ยอดจ่ายสุทธิรวม", value: "฿7.84M", note: "+2.1% จากเดือนก่อน" },
          { label: "ค่าล่วงเวลา", value: "฿412K", note: "690 ชั่วโมง" },
          { label: "ประกันสังคม (นายจ้าง)", value: "฿168K", note: "231 คน" },
          { label: "รอตรวจสอบ", value: "5", note: "เวลาเข้า-ออกไม่ครบ", tone: "warning" }
        ]}
      />
      <div className={s.gridMain}>
        <Panel title="สรุปตามฝ่าย">
          <DataTable
            columns={["ฝ่าย", "คน", "เงินเดือน", "OT", "หักรวม", "จ่ายสุทธิ", "สถานะ"]}
            rows={departments.map(([d, n, sal, ot, ded, net, st, tone]) => [
              <strong key="d">{d}</strong>,
              n,
              sal,
              ot,
              ded,
              <strong key="net">{net}</strong>,
              <Badge tone={tone} key="s">{st}</Badge>
            ])}
          />
        </Panel>
        <Panel title="สลิปเงินเดือน (ตัวอย่าง)" action="ดาวน์โหลด PDF">
          <p className={s.muted} style={{ margin: "0 0 10px", fontSize: 12.5 }}>
            กมลชนก ใจดี · EMP-0142 · Sales Executive
          </p>
          <table className={s.payslip}>
            <tbody>
              {income.map(([k, v]) => (
                <tr key={k}>
                  <td>{k}</td>
                  <td>{baht(v)}</td>
                </tr>
              ))}
              {deduct.map(([k, v]) => (
                <tr key={k}>
                  <td className={s.muted}>หัก {k}</td>
                  <td className={s.tone_critical}>−{baht(v)}</td>
                </tr>
              ))}
              <tr className={s.total}>
                <td>รับสุทธิ</td>
                <td>฿{baht(gross - out)}</td>
              </tr>
            </tbody>
          </table>
        </Panel>
      </div>
    </MockupShell>
  );
}
