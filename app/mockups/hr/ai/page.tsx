import type { Metadata } from "next";
import { Badge, Chat, DataTable, MockupShell, Panel, mockupStyles as s, type Tone } from "../../ui";
import { BASE, NAV, SHELL } from "../data";

export const metadata: Metadata = { title: "AI HR Assistant — PeopleHub (Mockup) | VOLCANAP SOFTWORK" };

const candidates: [string, string, number, string, Tone][] = [
  ["สุภาวดี ร.", "Data Analyst · 3 ปี · SQL, Power BI", 92, "นัดสัมภาษณ์", "good"],
  ["กฤษดา ม.", "Data Analyst · 5 ปี · Python, Tableau", 87, "นัดสัมภาษณ์", "good"],
  ["นันทนา ว.", "BI Developer · 2 ปี · Excel, SQL", 71, "พิจารณา", "warning"],
  ["ปรเมศวร์ ส.", "Accountant · 4 ปี", 38, "ไม่ตรงตำแหน่ง", "neutral"]
];

export default function HrAiMockup() {
  return (
    <MockupShell
      {...SHELL}
      nav={NAV}
      active="AI HR Assistant"
      title="AI HR Assistant"
      subtitle="ตอบคำถามนโยบายจากเอกสารบริษัท และช่วยคัดกรองใบสมัคร"
      crumbs={[{ label: "ภาพรวม", href: BASE }, { label: "AI HR Assistant" }]}
    >
      <div className={s.gridHalf}>
        <Panel title="ถาม-ตอบนโยบาย (พนักงานถามผ่านแอปหรือ LINE ได้)">
          <Chat
            messages={[
              { from: "user", text: "ลาพักร้อนยกไปปีหน้าได้กี่วันครับ" },
              {
                from: "ai",
                text: (
                  <>
                    ยกไปปีถัดไปได้ <strong>ไม่เกิน 5 วัน</strong> และต้องใช้ให้หมดภายในเดือนมีนาคมของปีถัดไป
                    <br />
                    ตอนนี้คุณมีวันพักร้อนเหลือ 7 วัน ถ้าไม่ใช้ภายในธันวาคมจะยกไปได้ 5 วัน
                  </>
                ),
                sources: ["ระเบียบการลา 2569 · ข้อ 4.3"]
              },
              { from: "user", text: "ทำงานจากบ้านได้กี่วันต่อสัปดาห์" },
              {
                from: "ai",
                text: "ได้สูงสุด 2 วันต่อสัปดาห์ สำหรับตำแหน่งที่ไม่ต้องอยู่หน้างาน โดยหัวหน้าต้องอนุมัติล่วงหน้าในระบบอย่างน้อย 1 วันทำการ",
                sources: ["นโยบาย WFH · ข้อ 2"]
              }
            ]}
            suggestions={["ขอหนังสือรับรองเงินเดือน", "สิทธิ์ประกันสุขภาพ", "วันหยุดปีนี้"]}
            placeholder="ถามเรื่องสวัสดิการ การลา หรือระเบียบบริษัท..."
          />
        </Panel>
        <Panel title="AI คัดกรองใบสมัคร · Data Analyst" action="47 ใบสมัคร">
          <DataTable
            columns={["ผู้สมัคร", "ประสบการณ์", "ความเหมาะสม", "คำแนะนำ"]}
            rows={candidates.map(([name, exp, score, rec, tone]) => [
              <strong key="n">{name}</strong>,
              <span className={s.muted} style={{ whiteSpace: "normal", display: "block", minWidth: 140 }} key="e">{exp}</span>,
              <span className={s.score} key="sc">
                <span className={s.meter}>
                  <i style={{ width: `${score}%` }} />
                </span>
                {score}%
              </span>,
              <Badge tone={tone} key="r">{rec}</Badge>
            ])}
          />
          <p className={s.note} style={{ marginTop: 12 }}>
            AI ให้คะแนนจากทักษะและประสบการณ์ที่ตรงกับ JD เท่านั้น ไม่ใช้อายุ เพศ หรือรูปถ่ายในการคัดกรอง HR เป็นผู้ตัดสินใจขั้นสุดท้าย
          </p>
        </Panel>
      </div>
    </MockupShell>
  );
}
