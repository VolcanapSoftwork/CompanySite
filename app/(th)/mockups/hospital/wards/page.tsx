import type { Metadata } from "next";
import { AiCard, Badge, Button, DataTable, KpiRow, MockupShell, Panel, mockupStyles as s } from "../../ui";
import { BASE, NAV, SHELL, wards } from "../data";

export const metadata: Metadata = { title: "หอผู้ป่วย / เตียง — CareFlow (Mockup) | VOLCANAP SOFTWORK" };

// Sequential single-hue scale (light → dark) for bed occupancy
const SHADES = ["#e3f2f4", "#b5dde3", "#7cc0ca", "#3b9aa8", "#0b7a8f"];

function shade(ratio: number) {
  return SHADES[Math.min(SHADES.length - 1, Math.floor(ratio * SHADES.length))];
}

const admissions: [string, string, string, string, string][] = [
  ["นายประยูร แสงทอง", "อายุรกรรมชาย · เตียง 12", "ปอดอักเสบ", "วันนี้ 08:10", "รับใหม่"],
  ["นางสมพร ใจดี", "ศัลยกรรม · เตียง 4", "หลังผ่าตัดไส้ติ่ง", "วันนี้ 14:00", "รอจำหน่าย"],
  ["ด.ญ. ปิ่น ทอง", "กุมารเวช · เตียง 7", "ไข้เลือดออก", "เมื่อวาน", "อาการคงที่"],
  ["นายชัยวัฒน์ พ.", "ICU · เตียง 3", "หลังผ่าตัดหัวใจ", "2 วันก่อน", "เฝ้าระวัง"]
];

export default function WardsMockup() {
  const beds = wards.reduce((a, w) => a + w.beds, 0);
  const used = wards.reduce((a, w) => a + w.used, 0);
  return (
    <MockupShell
      {...SHELL}
      nav={NAV}
      active="หอผู้ป่วย / เตียง"
      title="หอผู้ป่วยและการใช้เตียง"
      subtitle={`ผู้ป่วยใน ${used} ราย · เตียงทั้งหมด ${beds} เตียง`}
      crumbs={[{ label: "ภาพรวม", href: BASE }, { label: "หอผู้ป่วย / เตียง" }]}
      actions={<Button primary>+ รับผู้ป่วยใน (Admit)</Button>}
    >
      <KpiRow
        items={[
          { label: "อัตราการใช้เตียง", value: `${Math.round((used / beds) * 100)}%`, note: "เป้าหมายไม่เกิน 85%", tone: used / beds > 0.85 ? "warning" : "good" },
          { label: "รับใหม่วันนี้", value: "7", note: "จาก ER 4 ราย" },
          { label: "รอจำหน่าย", value: "9", note: "ภายในวันนี้" },
          { label: "ICU ว่าง", value: "1", note: "จาก 10 เตียง", tone: "critical" }
        ]}
      />
      <div className={s.gridMain}>
        <Panel title="การใช้เตียงรายหอผู้ป่วย">
          <div className={s.heat}>
            {wards.map((w) => {
              const r = w.used / w.beds;
              return (
                <span key={w.name} title={`${w.name}: ใช้ ${w.used} จาก ${w.beds} เตียง`} style={{ background: shade(r), color: r > 0.6 ? "#fff" : undefined }}>
                  {w.name}
                  <b>
                    {w.used}/{w.beds}
                  </b>
                  {Math.round(r * 100)}%
                </span>
              );
            })}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 14, fontSize: 12 }} className={s.muted}>
            ว่างมาก
            {SHADES.map((c) => (
              <i key={c} style={{ width: 28, height: 10, borderRadius: 3, background: c }} />
            ))}
            เต็ม
          </div>
        </Panel>
        <Panel title="ผู้ป่วยในที่ต้องติดตาม">
          <ul className={s.list}>
            {admissions.map(([name, where, dx, when, st]) => (
              <li key={name}>
                <span className={s.dot} aria-hidden="true" />
                <p>
                  {name}
                  <br />
                  <small>
                    {where} · {dx} · {when}
                  </small>
                </p>
                <Badge tone={st === "เฝ้าระวัง" ? "critical" : st === "รับใหม่" ? "info" : st === "รอจำหน่าย" ? "good" : "neutral"}>{st}</Badge>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
      <div style={{ marginTop: 16 }}>
        <AiCard title="AI คาดการณ์เตียงว่างภายใน 24 ชม." confidence="ปานกลาง" actions={["แจ้งหอผู้ป่วย"]}>
          <p>
            คาดว่าจะมีผู้ป่วยจำหน่าย <strong>11 ราย</strong> และรับใหม่ประมาณ <strong>8 ราย</strong> อายุรกรรมชายจะเต็ม 100% ช่วงเย็น
          </p>
          <ul>
            <li>แนะนำย้ายผู้ป่วยอาการคงที่ 2 รายไปหอฟื้นฟู</li>
            <li>ICU มีโอกาสเตียงเต็ม 78% ควรเตรียมเตียงสำรองในหอศัลยกรรม</li>
          </ul>
        </AiCard>
      </div>
      <div style={{ marginTop: 16 }}>
        <Panel title="สรุปรายหอผู้ป่วย">
          <DataTable
            columns={["หอผู้ป่วย", "เตียงทั้งหมด", "ใช้อยู่", "ว่าง", "อัตราการใช้"]}
            rows={wards.map((w) => [
              <strong key="n">{w.name}</strong>,
              w.beds,
              w.used,
              w.beds - w.used,
              <Badge tone={w.used / w.beds >= 0.9 ? "critical" : w.used / w.beds >= 0.75 ? "warning" : "good"} key="r">
                {Math.round((w.used / w.beds) * 100)}%
              </Badge>
            ])}
          />
        </Panel>
      </div>
    </MockupShell>
  );
}
