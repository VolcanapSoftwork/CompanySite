import type { Metadata } from "next";
import { AiCard, Badge, Button, DataTable, FilterBar, KpiRow, MockupShell, Panel, Tabs, mockupStyles as s, type Tone } from "../../ui";
import { BASE, NAV, SHELL } from "../data";

export const metadata: Metadata = { title: "เวลาเข้า-ออก — PeopleHub (Mockup) | VOLCANAP SOFTWORK" };

const rows: [string, string, string, string, string, string, Tone][] = [
  ["กมลชนก ใจดี", "ฝ่ายขาย", "08:47", "—", "แอป · GPS ในพื้นที่", "ตรงเวลา", "good"],
  ["ปิยะพงษ์ ศรีสุข", "IT", "09:12", "—", "แอป · GPS ในพื้นที่", "สาย 12 นาที", "warning"],
  ["วรรณา ทองดี", "บัญชี", "08:55", "—", "เครื่องสแกนหน้า", "ตรงเวลา", "good"],
  ["ธีรวัฒน์ แก้วมณี", "ปฏิบัติการ", "07:58", "—", "เครื่องสแกนหน้า · กะเช้า", "ตรงเวลา", "good"],
  ["ณัฐวุฒิ บุญมา", "ปฏิบัติการ", "08:02", "—", "แอป · GPS นอกพื้นที่ 1.8 กม.", "AI ตรวจพบ", "critical"],
  ["อัญชลี วงศ์ใหญ่", "ฝ่ายขาย", "—", "—", "—", "ยังไม่ลงเวลา", "neutral"],
  ["ชยพล สุขเจริญ", "IT", "09:00", "—", "แอป · ทำงานจากบ้าน (อนุมัติ)", "WFH", "info"]
];

export default function AttendanceMockup() {
  return (
    <MockupShell
      {...SHELL}
      nav={NAV}
      active="เวลาเข้า-ออก"
      title="เวลาเข้า-ออกวันนี้"
      subtitle="จันทร์ 20 ต.ค. 2569 · ข้อมูลจากแอปพนักงานและเครื่องสแกนหน้า"
      crumbs={[{ label: "ภาพรวม", href: BASE }, { label: "เวลาเข้า-ออก" }]}
      actions={
        <>
          <Button href={`${BASE}/app`}>ดูแอปพนักงาน</Button>
          <Button primary>ส่งออกรายงาน</Button>
        </>
      }
    >
      <KpiRow
        items={[
          { label: "ลงเวลาแล้ว", value: "208/222", note: "ไม่รวมคนลา 9 คน" },
          { label: "มาสาย", value: "11", note: "เฉลี่ยสาย 9 นาที", tone: "warning" },
          { label: "ทำงานจากบ้าน", value: "14", note: "อนุมัติล่วงหน้า" },
          { label: "AI ตรวจพบผิดปกติ", value: "2", note: "รอ HR ตรวจสอบ", tone: "critical" }
        ]}
      />
      <div className={s.gridMain}>
        <Panel title="รายการลงเวลา">
          <Tabs items={["ทั้งหมด", "มาสาย (11)", "ยังไม่ลงเวลา (14)", "ผิดปกติ (2)"]} active="ทั้งหมด" />
          <FilterBar search="ค้นหาชื่อพนักงาน..." filters={["ฝ่าย: ทั้งหมด", "กะ: ทั้งหมด", "ช่องทาง: ทั้งหมด"]} />
          <DataTable
            columns={["พนักงาน", "ฝ่าย", "เข้า", "ออก", "ช่องทาง / ตำแหน่ง", "สถานะ"]}
            rows={rows.map(([name, dept, inT, outT, how, st, tone]) => [
              <strong key="n">{name}</strong>,
              <span className={s.muted} key="d">{dept}</span>,
              <span className={s.mono} key="i">{inT}</span>,
              <span className={s.mono} key="o">{outT}</span>,
              <span className={s.muted} key="h">{how}</span>,
              <Badge tone={tone} key="s">{st}</Badge>
            ])}
          />
        </Panel>
        <AiCard title="AI ตรวจจับการลงเวลาผิดปกติ" confidence="สูง" actions={["ส่งให้หัวหน้าตรวจสอบ", "ไม่ใช่ความผิดปกติ"]}>
          <ul>
            <li>
              <strong>ณัฐวุฒิ บุญมา</strong> เช็คอินนอกพื้นที่ 1.8 กม. และรูปถ่ายไม่ตรงกับใบหน้าในระบบ (ความคล้าย 41%)
            </li>
            <li>
              <strong>EMP-0198</strong> ลงเวลาจากอุปกรณ์เดียวกับพนักงานอีกคน 3 ครั้งในสัปดาห์นี้
            </li>
          </ul>
          <p style={{ marginTop: 8 }}>รูปแบบคล้ายการลงเวลาแทนกัน แนะนำให้หัวหน้างานตรวจสอบ</p>
        </AiCard>
      </div>
    </MockupShell>
  );
}
