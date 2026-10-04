import type { Metadata } from "next";
import { Badge, Button, DataTable, Fields, MockupShell, Panel, Tabs, mockupStyles as s } from "../../ui";
import { BASE, NAV, SHELL, leaveTone, leaves } from "../data";

export const metadata: Metadata = { title: "การลา — PeopleHub (Mockup) | VOLCANAP SOFTWORK" };

// October 2026 starts on a Thursday; Mon-first calendar → 3 blank cells
const LEAD = 3;
const DAYS = 31;
const events: Record<number, string[]> = {
  17: ["สุนิสา · ป่วย"],
  20: ["ปิยะพงษ์ · ป่วย"],
  21: ["กมลชนก · พักร้อน"],
  22: ["กมลชนก · พักร้อน"],
  23: ["กมลชนก · พักร้อน", "วันปิยมหาราช"],
  24: ["วรรณา · กิจ"],
  28: ["ธีรวัฒน์ · พักร้อน"],
  29: ["ธีรวัฒน์ · พักร้อน"],
  30: ["ธีรวัฒน์ · พักร้อน"]
};

export default function LeaveMockup() {
  const cells = [...Array(LEAD).fill(null), ...Array.from({ length: DAYS }, (_, i) => i + 1)];
  return (
    <MockupShell
      {...SHELL}
      nav={NAV}
      active="การลา"
      title="การลาและการอนุมัติ"
      subtitle="ตุลาคม 2569 · รออนุมัติ 14 รายการ"
      crumbs={[{ label: "ภาพรวม", href: BASE }, { label: "การลา" }]}
      actions={<Button primary>+ ยื่นใบลา</Button>}
    >
      <div className={s.gridMain}>
        <Panel title="ปฏิทินการลา ตุลาคม 2569" action="ฝ่าย: ทั้งหมด ▾">
          <div className={s.calendar}>
            {["จ", "อ", "พ", "พฤ", "ศ", "ส", "อา"].map((d) => (
              <b key={d}>{d}</b>
            ))}
            {cells.map((day, i) =>
              day === null ? (
                <span key={`e${i}`} className={s.off} />
              ) : (
                <span key={day} className={i % 7 >= 5 ? s.off : undefined}>
                  {day}
                  {(events[day] ?? []).map((e) => (
                    <i key={e} title={e}>{e}</i>
                  ))}
                </span>
              )
            )}
          </div>
        </Panel>
        <div className={s.stack}>
          <Panel title="คำขอที่เลือก">
            <Fields
              items={[
                ["พนักงาน", "กมลชนก ใจดี"],
                ["ประเภท", "ลาพักร้อน"],
                ["วันที่", "21–23 ต.ค. 2569 (3 วัน)"],
                ["สิทธิ์คงเหลือ", "7 จาก 10 วัน"],
                ["ผู้รับงานแทน", "อัญชลี วงศ์ใหญ่"],
                ["สถานะ", <Badge tone="warning" key="s">รออนุมัติ</Badge>]
              ]}
            />
            <p className={s.note} style={{ marginTop: 12 }}>เหตุผล: เดินทางต่างจังหวัดกับครอบครัว</p>
            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              <Button primary>อนุมัติ</Button>
              <Button>ไม่อนุมัติ</Button>
            </div>
          </Panel>
          <Panel title="สิทธิ์การลาของฉัน">
            <ul className={s.list}>
              {[["ลาพักร้อน", 7, 10], ["ลาป่วย", 26, 30], ["ลากิจ", 3, 6]].map(([t, left, all]) => (
                <li key={t} style={{ gridTemplateColumns: "80px minmax(0,1fr) 54px" }}>
                  <p>{t}</p>
                  <div className={s.meter} title={`${t}: เหลือ ${left} จาก ${all} วัน`}>
                    <i style={{ width: `${(Number(left) / Number(all)) * 100}%` }} />
                  </div>
                  <small>
                    {left}/{all} วัน
                  </small>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
      <div style={{ marginTop: 16 }}>
        <Panel title="คำขอลาทั้งหมด">
          <Tabs items={["รออนุมัติ (14)", "อนุมัติแล้ว", "ไม่อนุมัติ", "ยกเลิก"]} active="รออนุมัติ (14)" />
          <DataTable
            columns={["พนักงาน", "ฝ่าย", "ประเภท", "วันที่", "วัน", "สถานะ"]}
            rows={leaves.map(([name, dept, type, date, days, st]) => [
              <strong key="n">{name}</strong>,
              <span className={s.muted} key="d">{dept}</span>,
              type,
              date,
              days,
              <Badge tone={leaveTone[st]} key="s">{st}</Badge>
            ])}
          />
        </Panel>
      </div>
    </MockupShell>
  );
}
