import type { Metadata } from "next";
import { AiCard, Badge, Button, MockupShell, Panel, Timeline, mockupStyles as s } from "../../ui";
import { BASE, NAV, SHELL } from "../data";

export const metadata: Metadata = { title: "นัดหมาย — DealBoard (Mockup) | VOLCANAP SOFTWORK" };

// Week of 19–25 Oct 2026, Mon-first
const week: [string, [string, string][]][] = [
  ["จ. 19", [["10:30", "โทรติดตาม · มหาวิทยาลัย"], ["14:00", "Demo · โรงแรม ริเวอร์ไซด์"]]],
  ["อ. 20", [["09:30", "ประชุมทีมขาย"], ["13:30", "เยี่ยมลูกค้า · ไทยรีเทล"]]],
  ["พ. 21", [["11:00", "นำเสนอ · ซันพาวเวอร์"]]],
  ["พฤ. 22", [["10:00", "เจรจาสัญญา · ไทยรีเทล"], ["15:00", "โทร · คลินิก สไมล์"]]],
  ["ศ. 23", [["—", "วันปิยมหาราช"]]],
  ["ส. 24", []],
  ["อา. 25", []]
];

export default function CalendarMockup() {
  return (
    <MockupShell
      {...SHELL}
      nav={NAV}
      active="นัดหมาย"
      title="นัดหมายและงานติดตาม"
      subtitle="สัปดาห์ 19–25 ต.ค. 2569 · ซิงก์กับ Google Calendar"
      crumbs={[{ label: "ภาพรวม", href: BASE }, { label: "นัดหมาย" }]}
      actions={
        <>
          <Button>วันนี้</Button>
          <Button primary>+ นัดหมาย</Button>
        </>
      }
    >
      <Panel title="ปฏิทินสัปดาห์นี้">
        <div className={s.calendar} style={{ gridTemplateColumns: "repeat(7, minmax(0, 1fr))" }}>
          {week.map(([day, items], i) => (
            <span key={day} className={i >= 4 ? s.off : undefined} style={{ minHeight: 130 }}>
              <b style={{ color: "var(--m-ink)" }}>{day}</b>
              {items.map(([t, what]) => (
                <i key={t + what} title={`${t} ${what}`}>
                  {t} {what}
                </i>
              ))}
            </span>
          ))}
        </div>
      </Panel>
      <div className={s.grid} style={{ marginTop: 16 }}>
        <Panel title="งานติดตามวันนี้">
          <Timeline
            items={[
              { title: "โทรติดตามใบเสนอราคา QT-2569-118", meta: "10:30 · มหาวิทยาลัย ตัวอย่าง", tone: "warning" },
              { title: "Demo ระบบจองห้องพัก", meta: "14:00 · โรงแรม ริเวอร์ไซด์ · Google Meet" },
              { title: "ส่งสัญญาฉบับแก้ไข", meta: "16:00 · บจก. ไทยรีเทล" },
              { title: "ต่ออายุสัญญา MA", meta: "เลยกำหนด 2 วัน · บจก. ออโต้พาร์ท", tone: "critical" }
            ]}
          />
        </Panel>
        <AiCard title="AI สรุปการประชุมล่าสุด" actions={["บันทึกลงลูกค้า", "สร้างงานติดตาม"]}>
          <p>
            <strong>Demo · มหาวิทยาลัย ตัวอย่าง</strong> (12 ต.ค. · 48 นาที · ถอดเสียงอัตโนมัติ)
          </p>
          <ul>
            <li>ลูกค้าสนใจระบบรับสมัคร ต้องเชื่อมกับระบบทะเบียนเดิม</li>
            <li>งบประมาณอนุมัติในเดือน พ.ย. ผู้ตัดสินใจคือรองอธิการฝ่ายวิชาการ</li>
            <li>ข้อกังวล: ระยะเวลาส่งมอบก่อนเปิดรับสมัคร ม.ค.</li>
          </ul>
          <p style={{ marginTop: 8 }}>
            <Badge tone="info">งานติดตาม</Badge> ส่งแผนงาน 3 เดือนภายในวันศุกร์
          </p>
        </AiCard>
      </div>
    </MockupShell>
  );
}
