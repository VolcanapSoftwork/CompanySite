import type { Metadata } from "next";
import { Button, FilterBar, KpiRow, MockupShell, Panel, mockupStyles as s } from "../../ui";
import { BASE, NAV, SHELL, stages } from "../data";

export const metadata: Metadata = { title: "Pipeline — DealBoard (Mockup) | VOLCANAP SOFTWORK" };

export default function PipelineMockup() {
  return (
    <MockupShell
      {...SHELL}
      nav={NAV}
      active="Pipeline"
      title="Sales Pipeline"
      subtitle="13 ดีลที่เปิดอยู่ · มูลค่ารวม ฿4.9M · ลากการ์ดเพื่อย้ายขั้น"
      crumbs={[{ label: "ภาพรวม", href: BASE }, { label: "Pipeline" }]}
      actions={
        <>
          <Button>มุมมองตาราง</Button>
          <Button primary>+ เพิ่มดีล</Button>
        </>
      }
    >
      <KpiRow
        items={[
          { label: "Lead → Qualified", value: "58%", note: "อัตราผ่านขั้นแรก" },
          { label: "Proposal → Won", value: "41%", note: "+6% จากไตรมาสก่อน", tone: "good" },
          { label: "รอบการขายเฉลี่ย", value: "34 วัน", note: "ตั้งแต่ Lead ถึงปิด" },
          { label: "ดีลค้างเกิน 14 วัน", value: "3", note: "ควรติดตาม", tone: "warning" }
        ]}
      />
      <FilterBar search="ค้นหาดีลหรือลูกค้า..." filters={["เจ้าของ: ทุกคน", "อุตสาหกรรม: ทั้งหมด", "ไตรมาส: Q4/2569"]} />
      <Panel title="ดีลทั้งหมดตามขั้น">
        <div className={s.kanban}>
          {stages.map((col) => (
            <div className={s.column} key={col.stage}>
              <header>
                <span>
                  {col.stage} · {col.deals.length}
                </span>
                <span>{col.total}</span>
              </header>
              {col.deals.map(([name, value, owner, project]) => (
                <div className={s.deal} key={name + project}>
                  <strong>{project}</strong>
                  <span>{name}</span>
                  <span>
                    {value} · {owner}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Panel>
    </MockupShell>
  );
}
