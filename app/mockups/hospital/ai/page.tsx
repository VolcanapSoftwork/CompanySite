import type { Metadata } from "next";
import Link from "next/link";
import { Badge, Chat, MockupShell, Panel, mockupStyles as s } from "../../ui";
import { BASE, NAV, SHELL } from "../data";

export const metadata: Metadata = { title: "AI ผู้ช่วยแพทย์ — CareFlow (Mockup) | VOLCANAP SOFTWORK" };

export default function HospitalAiMockup() {
  return (
    <MockupShell
      {...SHELL}
      nav={NAV}
      active="AI ผู้ช่วยแพทย์"
      title="AI ผู้ช่วยแพทย์"
      subtitle="ถามข้อมูลผู้ป่วย สรุปเวชระเบียน และตรวจยา จากข้อมูลในระบบที่ผู้ใช้มีสิทธิ์เข้าถึงเท่านั้น"
      crumbs={[{ label: "ภาพรวม", href: BASE }, { label: "AI ผู้ช่วยแพทย์" }]}
    >
      <div className={s.gridMain}>
        <Panel title="สนทนา · ผู้ป่วย HN-680214">
          <Chat
            messages={[
              { from: "user", text: "สรุปประวัติผู้ป่วยรายนี้ใน 6 เดือนที่ผ่านมา" },
              {
                from: "ai",
                text: (
                  <>
                    <strong>นายสมศักดิ์ ใจงาม อายุ 62 ปี</strong> เบาหวานชนิดที่ 2 และความดันโลหิตสูง
                    <ul>
                      <li>มาตรวจ 3 ครั้ง ความดันยังสูงกว่าเป้าทุกครั้ง (ล่าสุด 158/94)</li>
                      <li>HbA1c ลดจาก 8.1% เป็น 7.2% หลังเพิ่ม Metformin</li>
                      <li>eGFR ลดลงจาก 61 เป็น 52 ควรติดตามการทำงานของไต</li>
                      <li>แพ้ Penicillin</li>
                    </ul>
                  </>
                ),
                sources: ["OPD 19 ต.ค. 69", "Lab 12 ส.ค. 69", "OPD 3 มิ.ย. 69"]
              },
              { from: "user", text: "ถ้าจะเพิ่ม Losartan ต้องระวังอะไรบ้าง" },
              {
                from: "ai",
                text: (
                  <>
                    ใช้ร่วมกับยาปัจจุบันได้ แต่มีข้อควรระวัง:
                    <ol>
                      <li>ตรวจโพแทสเซียมและ Creatinine หลังเริ่มยา 1–2 สัปดาห์ เพราะ eGFR ลดลง</li>
                      <li>เฝ้าระวังความดันต่ำเมื่อใช้ร่วมกับ Amlodipine</li>
                      <li>ไม่พบปฏิกิริยากับประวัติแพ้ยา</li>
                    </ol>
                  </>
                ),
                sources: ["ฐานข้อมูลยาโรงพยาบาล", "Lab 12 ส.ค. 69"]
              }
            ]}
            suggestions={["ร่างใบส่งตัว", "สรุปสำหรับเวรถัดไป", "แปลคำแนะนำเป็นภาษาอังกฤษ"]}
            placeholder="ถามเกี่ยวกับผู้ป่วยรายนี้..."
          />
        </Panel>
        <div className={s.stack}>
          <Panel title="บริบทที่ AI ใช้">
            <ul className={s.list}>
              {[["ผู้ป่วย", "HN-680214"], ["เวชระเบียน", "12 ครั้ง"], ["ผลแล็บ", "8 รายการ"], ["รายการยา", "3 รายการ"]].map(([k, v]) => (
                <li key={k}>
                  <span className={s.dot} aria-hidden="true" />
                  <p>{k}</p>
                  <small>{v}</small>
                </li>
              ))}
            </ul>
            <p className={s.note} style={{ marginTop: 12 }}>
              <Link className={s.rowLink} href={`${BASE}/patients/HN-680214`}>เปิดเวชระเบียน</Link> · ทุกคำถามบันทึกใน Audit Log
            </p>
          </Panel>
          <Panel title="ความสามารถของ AI">
            <ul className={s.list}>
              {[
                ["สรุปเวชระเบียนและผลแล็บ", "good"],
                ["ตรวจยาตีกันและแพ้ยา", "good"],
                ["ช่วยร่างบันทึกและใบส่งตัว", "good"],
                ["คาดการณ์จำนวนผู้ป่วย", "info"],
                ["ไม่วินิจฉัยหรือสั่งยาแทนแพทย์", "neutral"]
              ].map(([t, tone]) => (
                <li key={t}>
                  <span className={s.dot} aria-hidden="true" />
                  <p>{t}</p>
                  <Badge tone={tone as "good"}>{tone === "neutral" ? "ข้อจำกัด" : "พร้อมใช้"}</Badge>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </MockupShell>
  );
}
