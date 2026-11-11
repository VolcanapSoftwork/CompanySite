import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AiCard, Badge, Button, DataTable, Fields, KpiRow, MockupShell, Panel, Tabs, Timeline, mockupStyles as s } from "../../../ui";
import { BASE, NAV, SHELL, empTone, employees, getEmployee } from "../../data";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return employees.map(([id]) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: `${(await params).id} — PeopleHub (Mockup) | VOLCANAP SOFTWORK` };
}

export default async function EmployeeMockup({ params }: Props) {
  const e = getEmployee((await params).id);
  if (!e) notFound();
  const [id, name, pos, dept, start, st] = e;
  const probation = st === "ทดลองงาน";

  return (
    <MockupShell
      {...SHELL}
      nav={NAV}
      active="พนักงาน"
      title={name}
      subtitle={`${id} · ${pos} · ฝ่าย${dept}`}
      crumbs={[{ label: "ภาพรวม", href: BASE }, { label: "พนักงาน", href: `${BASE}/employees` }, { label: name }]}
      actions={
        <>
          <Button>ออกหนังสือรับรอง</Button>
          <Button primary>แก้ไขข้อมูล</Button>
        </>
      }
    >
      <KpiRow
        items={[
          { label: "เข้างานตรงเวลา", value: probation ? "100%" : "97%", note: "3 เดือนล่าสุด", tone: "good" },
          { label: "วันลาคงเหลือ", value: "7", note: "พักร้อน จาก 10 วัน" },
          { label: "OT เดือนนี้", value: "12 ชม.", note: "≈ ฿2,400" },
          { label: "ผลประเมินล่าสุด", value: probation ? "—" : "4.2/5", note: probation ? "อยู่ระหว่างทดลองงาน" : "ดีมาก", tone: probation ? undefined : "good" }
        ]}
      />
      <div className={s.gridMain}>
        <div className={s.stack}>
          <Panel title="ข้อมูลพนักงาน">
            <Tabs items={["ข้อมูลทั่วไป", "การจ้างงาน", "เงินเดือน", "เอกสาร (6)"]} active="ข้อมูลทั่วไป" />
            <Fields
              items={[
                ["ตำแหน่ง", pos],
                ["ฝ่าย", dept],
                ["วันเริ่มงาน", start],
                ["สถานะ", <Badge tone={empTone[st]} key="s">{st}</Badge>],
                ["หัวหน้างาน", "ธีรวัฒน์ แก้วมณี"],
                ["สาขา", "สำนักงานใหญ่"],
                ["อีเมล", `${id.toLowerCase()}@example.co.th`],
                ["โทรศัพท์", "08x-xxx-" + id.slice(-4)]
              ]}
            />
          </Panel>
          <Panel title="ประวัติการทำงาน">
            <Timeline
              items={[
                ...(probation ? [{ title: "ครบกำหนดทดลองงาน", meta: "อีก 18 วัน · รอหัวหน้าประเมิน", tone: "warning" as const }] : [{ title: "ปรับเงินเดือนประจำปี +5%", meta: "1 เม.ย. 2569", tone: "good" as const }]),
                { title: "ผ่านการอบรม Data Privacy (PDPA)", meta: "12 ก.พ. 2569" },
                { title: `เริ่มงานตำแหน่ง ${pos}`, meta: start, tone: "neutral" }
              ]}
            />
          </Panel>
        </div>
        <div className={s.stack}>
          <AiCard title="AI สรุปพนักงาน" actions={["ดูแผนพัฒนา"]}>
            <ul>
              <li>เข้างานสม่ำเสมอ ไม่มีการขาดงานใน 6 เดือน</li>
              <li>ทักษะเด่นจากผลประเมิน: การทำงานเป็นทีม และการสื่อสาร</li>
              <li>แนะนำหลักสูตร: {dept === "IT" ? "Cloud Architecture" : dept === "ฝ่ายขาย" ? "Negotiation Skills" : "Leadership for Supervisor"}</li>
              <li>ความเสี่ยงลาออก: <strong>ต่ำ</strong></li>
            </ul>
          </AiCard>
          <Panel title="การลาล่าสุด">
            <DataTable
              columns={["ประเภท", "วันที่", "สถานะ"]}
              rows={[
                ["ลาพักร้อน", "21–23 ต.ค.", <Badge tone="warning" key="a">รออนุมัติ</Badge>],
                ["ลาป่วย", "4 ก.ย.", <Badge tone="good" key="b">อนุมัติแล้ว</Badge>]
              ]}
            />
          </Panel>
        </div>
      </div>
    </MockupShell>
  );
}
