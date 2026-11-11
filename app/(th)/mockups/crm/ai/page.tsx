import type { Metadata } from "next";
import { Badge, Chat, DataTable, MockupShell, Panel, mockupStyles as s, type Tone } from "../../ui";
import { BASE, NAV, SHELL } from "../data";

export const metadata: Metadata = { title: "AI Sales Assistant — DealBoard (Mockup) | VOLCANAP SOFTWORK" };

const leads: [string, string, number, string, Tone][] = [
  ["บจก. เฟรชมาร์ท", "เปิดอีเมล 4 ครั้ง · ดูหน้าราคา 3 ครั้ง", 91, "โทรวันนี้", "good"],
  ["รพ. เวลเนส", "ขอเอกสารเพิ่ม · งบอนุมัติแล้ว", 84, "ส่งใบเสนอราคา", "good"],
  ["สหกรณ์ ตัวอย่าง", "ประชุมแล้ว 1 ครั้ง", 63, "นัด Demo", "warning"],
  ["บจก. สยามโลจิสติกส์", "ไม่ตอบกลับ 14 วัน", 32, "ส่งกรณีศึกษา", "neutral"]
];

export default function CrmAiMockup() {
  return (
    <MockupShell
      {...SHELL}
      nav={NAV}
      active="AI Sales Assistant"
      title="AI Sales Assistant"
      subtitle="จัดลำดับ Lead แนะนำสิ่งที่ควรทำต่อ และช่วยร่างอีเมลจากข้อมูลใน CRM"
      crumbs={[{ label: "ภาพรวม", href: BASE }, { label: "AI Sales Assistant" }]}
    >
      <div className={s.gridHalf}>
        <Panel title="สนทนา">
          <Chat
            messages={[
              { from: "user", text: "วันนี้ควรโฟกัสดีลไหนก่อน" },
              {
                from: "ai",
                text: (
                  <>
                    แนะนำ 3 ดีลที่มีโอกาสปิดสูงสุดในสัปดาห์นี้:
                    <ol>
                      <li>
                        <strong>CRM สาขา · ไทยรีเทล</strong> (฿540K) อยู่ขั้นเจรจา ลูกค้าตอบรับเงื่อนไขแล้ว 2 ใน 3 ข้อ
                      </li>
                      <li>
                        <strong>ระบบรับสมัคร · มหาวิทยาลัย</strong> (฿620K) ครบกำหนดตอบรับใบเสนอราคาวันศุกร์
                      </li>
                      <li>
                        <strong>เฟรชมาร์ท</strong> Lead ใหม่ที่ดูหน้าราคาบ่อยที่สุดสัปดาห์นี้
                      </li>
                    </ol>
                  </>
                ),
                sources: ["Pipeline", "ประวัติอีเมล", "QT-2569-118"]
              },
              { from: "user", text: "ร่างอีเมลติดตามมหาวิทยาลัยให้หน่อย สุภาพ ไม่เร่งเกินไป" },
              {
                from: "ai",
                text: (
                  <>
                    <strong>เรื่อง: ติดตามใบเสนอราคาระบบรับสมัครนักศึกษา</strong>
                    <br />
                    เรียน ผศ.ดร. กิตติ
                    <br />
                    ขอบพระคุณที่สละเวลาร่วม Demo เมื่อวันที่ 12 ต.ค. ครับ ทางทีมได้แนบแผนงาน 3 เดือนที่รองรับการเปิดรับสมัครเดือนมกราคม
                    มาพร้อมนี้ หากมีประเด็นใดที่ต้องการให้ปรับ ยินดีนัดคุยเพิ่มเติมได้ตามสะดวกครับ
                  </>
                ),
                sources: ["สรุปการประชุม 12 ต.ค.", "QT-2569-118"]
              }
            ]}
            suggestions={["สรุปลูกค้ารายนี้", "หาลูกค้าที่ควรต่อสัญญา MA", "เปรียบเทียบกับไตรมาสก่อน"]}
            placeholder="ถามเกี่ยวกับดีล ลูกค้า หรือให้ช่วยร่างอีเมล..."
          />
        </Panel>
        <Panel title="AI Lead Scoring" action="อัปเดตทุกคืน">
          <DataTable
            columns={["Lead", "สัญญาณ", "คะแนน", "แนะนำ"]}
            rows={leads.map(([name, signal, score, next, tone]) => [
              <strong key="n">{name}</strong>,
              <span className={s.muted} style={{ whiteSpace: "normal", display: "block", minWidth: 140 }} key="sg">{signal}</span>,
              <span className={s.score} key="sc">
                <span className={s.meter}>
                  <i style={{ width: `${score}%` }} />
                </span>
                {score}
              </span>,
              <Badge tone={tone} key="a">{next}</Badge>
            ])}
          />
          <p className={s.note} style={{ marginTop: 12 }}>
            คะแนนคำนวณจากการเปิดอีเมล การเข้าชมเว็บไซต์ ขนาดบริษัท และประวัติการปิดการขายของลูกค้ากลุ่มเดียวกัน
          </p>
        </Panel>
      </div>
    </MockupShell>
  );
}
