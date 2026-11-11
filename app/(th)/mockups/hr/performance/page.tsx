import type { Metadata } from "next";
import { AiCard, Badge, Button, DataTable, FilterBar, KpiRow, MockupShell, Panel, mockupStyles as s, type Tone } from "../../ui";
import { BASE, NAV, SHELL } from "../data";

export const metadata: Metadata = { title: "ประเมินผล — PeopleHub (Mockup) | VOLCANAP SOFTWORK" };

const reviews: [string, string, string, number, string, Tone][] = [
  ["กมลชนก ใจดี", "ฝ่ายขาย", "ยอดขาย 112% ของเป้า", 4.6, "ประเมินแล้ว", "good"],
  ["ปิยะพงษ์ ศรีสุข", "IT", "ส่งงานตรงเวลา 94%", 4.2, "ประเมินแล้ว", "good"],
  ["วรรณา ทองดี", "บัญชี", "ปิดงบตรงเวลา 12/12", 4.0, "รอหัวหน้ายืนยัน", "warning"],
  ["ธีรวัฒน์ แก้วมณี", "ปฏิบัติการ", "อุบัติเหตุ 0 ครั้ง", 3.8, "ประเมินแล้ว", "good"],
  ["ณัฐวุฒิ บุญมา", "ปฏิบัติการ", "เบิกของผิดพลาด 2.1%", 2.9, "ต้องปรับปรุง", "critical"],
  ["อัญชลี วงศ์ใหญ่", "ฝ่ายขาย", "ทดลองงาน", 0, "ยังไม่ประเมิน", "neutral"]
];

export default function PerformanceMockup() {
  return (
    <MockupShell
      {...SHELL}
      nav={NAV}
      active="ประเมินผล"
      title="ประเมินผลงานประจำปี 2569"
      subtitle="รอบที่ 2 · KPI 60% + Competency 40% · ปิดรอบ 15 พ.ย."
      crumbs={[{ label: "ภาพรวม", href: BASE }, { label: "ประเมินผล" }]}
      actions={<Button primary>ส่งแบบประเมินให้หัวหน้า</Button>}
    >
      <KpiRow
        items={[
          { label: "ประเมินแล้ว", value: "168/231", note: "73%" },
          { label: "คะแนนเฉลี่ย", value: "3.9", note: "จาก 5 คะแนน" },
          { label: "ดีเยี่ยม (≥ 4.5)", value: "21", note: "เสนอปรับขั้นพิเศษ", tone: "good" },
          { label: "ต้องปรับปรุง (< 3)", value: "9", note: "ต้องทำแผนพัฒนา", tone: "warning" }
        ]}
      />
      <div className={s.gridMain}>
        <Panel title="ผลการประเมิน">
          <FilterBar search="ค้นหาพนักงาน..." filters={["ฝ่าย: ทั้งหมด", "สถานะ: ทั้งหมด"]} />
          <DataTable
            columns={["พนักงาน", "ฝ่าย", "KPI หลัก", "คะแนน", "สถานะ"]}
            rows={reviews.map(([name, dept, kpi, score, st, tone]) => [
              <strong key="n">{name}</strong>,
              <span className={s.muted} key="d">{dept}</span>,
              <span className={s.muted} key="k">{kpi}</span>,
              score ? (
                <span className={s.score} key="sc">
                  <span className={s.meter}>
                    <i style={{ width: `${(score / 5) * 100}%` }} />
                  </span>
                  {score.toFixed(1)}
                </span>
              ) : (
                <span className={s.muted} key="sc">—</span>
              ),
              <Badge tone={tone} key="s">{st}</Badge>
            ])}
          />
        </Panel>
        <AiCard title="AI ช่วยเขียนความเห็นการประเมิน" actions={["ใช้ข้อความนี้", "เขียนใหม่"]}>
          <p>
            <strong>กมลชนก ใจดี</strong> · จากยอดขาย, ฟีดแบ็กลูกค้า และการเข้างาน
          </p>
          <p>
            “ทำยอดขายได้ 112% ของเป้า เป็นอันดับ 2 ของทีม ลูกค้าให้คะแนนการบริการ 4.8/5 มีความรับผิดชอบและเข้างานสม่ำเสมอ
            จุดที่พัฒนาได้คือการวางแผนติดตามลูกค้าองค์กรระยะยาว แนะนำเข้าอบรม Key Account Management”
          </p>
        </AiCard>
      </div>
    </MockupShell>
  );
}
