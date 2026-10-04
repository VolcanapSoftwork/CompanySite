import type { Metadata } from "next";
import { AiCard, Badge, Button, KpiRow, MockupShell, Panel, mockupStyles as s } from "../../ui";
import { BASE, NAV, SHELL } from "../data";

export const metadata: Metadata = { title: "คิวและนัดหมาย — CareFlow (Mockup) | VOLCANAP SOFTWORK" };

const columns: { stage: string; items: [string, string, string][] }[] = [
  { stage: "ซักประวัติ", items: [["A042", "นางวันเพ็ญ ศ.", "ศัลยกรรมกระดูก"], ["A043", "นายชาญ พ.", "อายุรกรรม"], ["C018", "ด.ญ. ใบเตย ส.", "กุมารเวช"]] },
  { stage: "รอพบแพทย์", items: [["A039", "นางสาวพิมพ์ชนก ท.", "สูติ-นรีเวช"], ["A040", "นายวีระ ค.", "อายุรกรรม"], ["B027", "นางสุดา ม.", "อายุรกรรม"]] },
  { stage: "กำลังตรวจ", items: [["A036", "นายสมศักดิ์ ใจ.", "ห้องตรวจ 3"], ["E004", "นายอนุวัฒน์ พ.", "ER เตียง 2"]] },
  { stage: "รอผลแล็บ / X-ray", items: [["A031", "นายเกษม ร.", "แล็บ · 15 นาที"], ["B022", "นางลำดวน ป.", "X-ray · 8 นาที"]] },
  { stage: "รอรับยา", items: [["C015", "ด.ช. ภูมิ ร.", "ช่อง 2"], ["A028", "นางบุญเรือน ค.", "ช่อง 1"], ["A029", "นายพงษ์ ศ.", "ช่อง 3"]] }
];

const appointments: [string, string, string, string][] = [
  ["10:30", "นายธนพร อ.", "อายุรกรรม · ติดตามเบาหวาน", "ยืนยันแล้ว"],
  ["10:45", "นางมยุรี ส.", "สูติ-นรีเวช · ฝากครรภ์", "ยืนยันแล้ว"],
  ["11:00", "นายวิเชียร ก.", "ศัลยกรรม · ตัดไหม", "ยังไม่ยืนยัน"],
  ["11:15", "ด.ญ. น้ำฝน จ.", "กุมารเวช · ฉีดวัคซีน", "ยืนยันแล้ว"],
  ["13:00", "นางอรทัย พ.", "ทันตกรรม · ถอนฟัน", "ยกเลิก"]
];

export default function QueueMockup() {
  return (
    <MockupShell
      {...SHELL}
      nav={NAV}
      active="คิวและนัดหมาย"
      title="กระดานคิวผู้ป่วยนอก"
      subtitle="อัปเดตแบบ real-time · แสดงบนจอหน้าห้องตรวจและแจ้งคิวผ่าน LINE"
      crumbs={[{ label: "ภาพรวม", href: BASE }, { label: "คิวและนัดหมาย" }]}
      actions={
        <>
          <Button>เปิดจอเรียกคิว</Button>
          <Button primary>+ ออกบัตรคิว</Button>
        </>
      }
    >
      <KpiRow
        items={[
          { label: "คิวทั้งหมดวันนี้", value: "412", note: "จองล่วงหน้า 63%" },
          { label: "รอเฉลี่ย", value: "24 นาที", note: "−8 นาทีจากเดือนก่อน", tone: "good" },
          { label: "นัดหมายวันนี้", value: "126", note: "ยืนยันแล้ว 109 ราย" },
          { label: "ไม่มาตามนัด", value: "6", note: "ส่งข้อความเลื่อนนัดแล้ว", tone: "warning" }
        ]}
      />
      <Panel title="สถานะคิวตามขั้นตอน">
        <div className={s.kanban}>
          {columns.map((col) => (
            <div className={s.column} key={col.stage}>
              <header>
                <span>{col.stage}</span>
                <span>{col.items.length}</span>
              </header>
              {col.items.map(([q, name, where]) => (
                <div className={s.deal} key={q}>
                  <strong className={s.mono}>{q}</strong>
                  <span>{name}</span>
                  <span>{where}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Panel>
      <div className={s.grid} style={{ marginTop: 16 }}>
        <AiCard title="AI ประเมินเวลารอและจัดคิว" confidence="สูง" actions={["ใช้คำแนะนำ"]}>
          <p>เวลารอที่คาดการณ์แจ้งผู้ป่วยผ่าน LINE อัตโนมัติ</p>
          <ul>
            <li>คิว A043 (อายุรกรรม) คาดว่าได้พบแพทย์ <strong>10:52</strong></li>
            <li>ห้องตรวจ 2 ว่างเร็วกว่าห้องตรวจ 3 ประมาณ 15 นาที แนะนำย้ายคิว A040</li>
            <li>นัด 11:00 (นายวิเชียร ก.) ยังไม่ยืนยัน มีโอกาสไม่มาตามนัด 64%</li>
          </ul>
        </AiCard>
        <Panel title="นัดหมายช่วงถัดไป" action="ดูปฏิทินนัด">
          <ul className={s.list}>
            {appointments.map(([time, name, what, st]) => (
              <li key={time + name}>
                <strong className={s.mono}>{time}</strong>
                <p>
                  {name}
                  <br />
                  <small>{what}</small>
                </p>
                <Badge tone={st === "ยืนยันแล้ว" ? "good" : st === "ยกเลิก" ? "critical" : "warning"}>{st}</Badge>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </MockupShell>
  );
}
