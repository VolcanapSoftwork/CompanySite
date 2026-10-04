import type { Metadata } from "next";
import Link from "next/link";
import { AiCard, Badge, Button, DataTable, FilterBar, KpiRow, MockupShell, Panel, Tabs, mockupStyles as s, type Tone } from "../../ui";
import { BASE, NAV, SHELL } from "../data";

export const metadata: Metadata = { title: "ห้องแล็บ — CareFlow (Mockup) | VOLCANAP SOFTWORK" };

const requests: [string, string, string, string, string, string, Tone][] = [
  ["LB-26-5521", "HN-610552", "นายประยูร แสงทอง", "CBC, Hemoculture", "STAT", "ผลวิกฤต", "critical"],
  ["LB-26-5520", "HN-680214", "นายสมศักดิ์ ใจงาม", "HbA1c, Creatinine, Lipid", "ปกติ", "รายงานแล้ว", "good"],
  ["LB-26-5519", "HN-650871", "ด.ช. ภูมิ รักดี", "Influenza A/B rapid test", "ด่วน", "รายงานแล้ว", "good"],
  ["LB-26-5518", "HN-690033", "นางสาวพิมพ์ชนก ทองสุข", "OGTT 75 g", "ปกติ", "กำลังตรวจ", "info"],
  ["LB-26-5517", "HN-670418", "นางวันเพ็ญ ศรีสวัสดิ์", "ESR, CRP", "ปกติ", "รอเก็บสิ่งส่งตรวจ", "neutral"]
];

const results: [string, string, string, string, Tone][] = [
  ["WBC", "18.6", "4.5–11.0 ×10³/µL", "สูง", "critical"],
  ["Neutrophil", "89", "40–75 %", "สูง", "warning"],
  ["Hemoglobin", "12.1", "13.0–17.0 g/dL", "ต่ำ", "warning"],
  ["Platelet", "245", "150–400 ×10³/µL", "ปกติ", "good"],
  ["CRP", "142", "< 5 mg/L", "สูง", "critical"]
];

export default function LabMockup() {
  return (
    <MockupShell
      {...SHELL}
      nav={NAV}
      active="ห้องแล็บ"
      title="ห้องปฏิบัติการ (Lab)"
      subtitle="สิ่งส่งตรวจวันนี้ 186 รายการ · เชื่อมต่อเครื่องวิเคราะห์อัตโนมัติ 4 เครื่อง"
      crumbs={[{ label: "ภาพรวม", href: BASE }, { label: "ห้องแล็บ" }]}
      actions={<Button primary>พิมพ์บาร์โค้ดสิ่งส่งตรวจ</Button>}
    >
      <KpiRow
        items={[
          { label: "รอผล", value: "42", note: "TAT เฉลี่ย 48 นาที" },
          { label: "STAT", value: "6", note: "ภายใน 30 นาที" },
          { label: "ผลวิกฤต", value: "2", note: "แจ้งแพทย์แล้ว", tone: "critical" },
          { label: "ส่งผลตรงเวลา", value: "97%", note: "เป้าหมาย 95%", tone: "good" }
        ]}
      />
      <Panel title="รายการส่งตรวจ">
        <Tabs items={["ทั้งหมด", "รอเก็บ (12)", "กำลังตรวจ (30)", "รายงานแล้ว"]} active="ทั้งหมด" />
        <FilterBar search="ค้นหาเลขที่ HN หรือชื่อการตรวจ..." filters={["ความเร่งด่วน: ทั้งหมด", "แผนก: ทั้งหมด"]} />
        <DataTable
          columns={["เลขที่", "HN", "ผู้ป่วย", "รายการตรวจ", "ความเร่งด่วน", "สถานะ"]}
          rows={requests.map(([id, hn, name, tests, pri, st, tone]) => [
            <span className={s.mono} key="id">{id}</span>,
            <Link className={`${s.mono} ${s.rowLink}`} href={`${BASE}/patients/${hn}`} key="hn">{hn}</Link>,
            <strong key="n">{name}</strong>,
            <span className={s.muted} key="t">{tests}</span>,
            <Badge tone={pri === "STAT" ? "critical" : pri === "ด่วน" ? "warning" : "neutral"} key="p">{pri}</Badge>,
            <Badge tone={tone} key="s">{st}</Badge>
          ])}
        />
      </Panel>
      <div className={s.gridMain} style={{ marginTop: 16 }}>
        <Panel title="ผลตรวจ LB-26-5521 · นายประยูร แสงทอง" action="พิมพ์ผล">
          <DataTable
            columns={["รายการ", "ผล", "ค่าอ้างอิง", "แปลผล"]}
            rows={results.map(([name, v, ref, flag, tone]) => [
              <strong key="n">{name}</strong>,
              <strong key="v" className={tone === "critical" ? s.tone_critical : undefined}>{v}</strong>,
              <span className={s.muted} key="r">{ref}</span>,
              <Badge tone={tone} key="f">{flag}</Badge>
            ])}
          />
        </Panel>
        <AiCard title="สรุปผลแล็บสำหรับแพทย์" confidence="ปานกลาง" actions={["แนบในเวชระเบียน", "แก้ไขข้อความ"]}>
          <p>ผลเข้าได้กับภาวะติดเชื้อแบคทีเรียรุนแรง สอดคล้องกับการวินิจฉัยปอดอักเสบ</p>
          <ul>
            <li>WBC และ CRP สูงมาก เทียบกับครั้งก่อน (WBC 9.2) เพิ่มขึ้นชัดเจน</li>
            <li>Hemoglobin ต่ำเล็กน้อย ควรติดตาม</li>
            <li>รอผลเพาะเชื้อในเลือด เพื่อเลือกยาปฏิชีวนะให้ตรงเชื้อ</li>
          </ul>
        </AiCard>
      </div>
    </MockupShell>
  );
}
