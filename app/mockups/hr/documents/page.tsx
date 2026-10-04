import type { Metadata } from "next";
import { AiCard, Badge, Button, DataTable, KpiRow, MockupShell, Panel, Tabs, mockupStyles as s, type Tone } from "../../ui";
import { BASE, NAV, SHELL } from "../data";

export const metadata: Metadata = { title: "เอกสาร HR — PeopleHub (Mockup) | VOLCANAP SOFTWORK" };

const requests: [string, string, string, string, string, Tone][] = [
  ["DOC-2569-311", "กมลชนก ใจดี", "หนังสือรับรองเงินเดือน", "ยื่นกู้ธนาคาร", "รอ HR ลงนาม", "warning"],
  ["DOC-2569-310", "ปิยะพงษ์ ศรีสุข", "หนังสือรับรองการทำงาน", "ขอวีซ่า (ภาษาอังกฤษ)", "AI ร่างแล้ว", "info"],
  ["DOC-2569-309", "วรรณา ทองดี", "50 ทวิ ปี 2568", "ยื่นภาษี", "ส่งแล้ว", "good"],
  ["DOC-2569-308", "ธีรวัฒน์ แก้วมณี", "สำเนาสัญญาจ้าง", "—", "ส่งแล้ว", "good"]
];

const policies: [string, string, string][] = [
  ["ระเบียบการลา ฉบับปรับปรุง 2569", "PDF · 12 หน้า", "1 ม.ค. 2569"],
  ["นโยบายการทำงานจากบ้าน (WFH)", "PDF · 4 หน้า", "15 มี.ค. 2569"],
  ["คู่มือพนักงานใหม่", "PDF · 28 หน้า", "1 ก.ค. 2568"],
  ["นโยบายคุ้มครองข้อมูลส่วนบุคคล (PDPA)", "PDF · 9 หน้า", "1 มิ.ย. 2568"]
];

export default function DocumentsMockup() {
  return (
    <MockupShell
      {...SHELL}
      nav={NAV}
      active="เอกสาร HR"
      title="เอกสาร HR"
      subtitle="คำขอเอกสารจากพนักงาน และคลังนโยบายบริษัท"
      crumbs={[{ label: "ภาพรวม", href: BASE }, { label: "เอกสาร HR" }]}
      actions={<Button primary>+ อัปโหลดนโยบาย</Button>}
    >
      <KpiRow
        items={[
          { label: "คำขอเดือนนี้", value: "46", note: "+12 จากเดือนก่อน" },
          { label: "รอดำเนินการ", value: "5", note: "เก่าสุด 1 วัน", tone: "warning" },
          { label: "เวลาออกเอกสารเฉลี่ย", value: "4 ชม.", note: "เดิม 2 วัน", tone: "good" },
          { label: "AI ร่างให้อัตโนมัติ", value: "78%", note: "ของคำขอทั้งหมด" }
        ]}
      />
      <div className={s.gridMain}>
        <div className={s.stack}>
          <Panel title="คำขอเอกสาร">
            <Tabs items={["รอดำเนินการ (5)", "ส่งแล้ว", "ทั้งหมด"]} active="ทั้งหมด" />
            <DataTable
              columns={["เลขที่", "พนักงาน", "เอกสาร", "วัตถุประสงค์", "สถานะ"]}
              rows={requests.map(([id, name, doc, why, st, tone]) => [
                <span className={s.mono} key="id">{id}</span>,
                <strong key="n">{name}</strong>,
                doc,
                <span className={s.muted} key="w">{why}</span>,
                <Badge tone={tone} key="s">{st}</Badge>
              ])}
            />
          </Panel>
          <Panel title="คลังนโยบายบริษัท" action="ใช้เป็นข้อมูลให้ AI HR Assistant">
            <ul className={s.list}>
              {policies.map(([name, meta, date]) => (
                <li key={name}>
                  <span className={s.dot} aria-hidden="true" />
                  <p>
                    {name}
                    <br />
                    <small>{meta}</small>
                  </p>
                  <small>{date}</small>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
        <AiCard title="AI ร่างเอกสาร · DOC-2569-310" actions={["ส่งให้ HR ลงนาม", "แก้ไข"]}>
          <p>
            <strong>Employment Certificate</strong>
          </p>
          <p>
            This is to certify that Mr. Piyapong Srisuk has been employed by Example Co., Ltd. as a Software Engineer since 15 July
            2022 and is currently a full-time employee in good standing.
          </p>
          <p className={s.muted} style={{ fontSize: 12.5 }}>ดึงข้อมูลจากทะเบียนพนักงานและแปลเป็นภาษาอังกฤษให้อัตโนมัติ</p>
        </AiCard>
      </div>
    </MockupShell>
  );
}
