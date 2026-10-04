import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AiCard, Badge, Button, DataTable, Fields, MockupShell, Panel, Tabs, Timeline, mockupStyles as s } from "../../../ui";
import { BASE, NAV, SHELL, customers, getCustomer, quoteTone, quotes, stages, tierTone } from "../../data";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return customers.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = getCustomer((await params).id);
  return { title: `${c?.name ?? "ลูกค้า"} — DealBoard (Mockup) | VOLCANAP SOFTWORK` };
}

export default async function CustomerMockup({ params }: Props) {
  const c = getCustomer((await params).id);
  if (!c) notFound();
  const deals = stages.flatMap((st) => st.deals.filter(([name]) => name === c.name).map((d) => ({ stage: st.stage, deal: d })));
  const qs = quotes.filter(([, name]) => name === c.name);

  return (
    <MockupShell
      {...SHELL}
      nav={NAV}
      active="ลูกค้า"
      title={c.name}
      subtitle={`${c.id} · ${c.industry} · ${c.province}`}
      crumbs={[{ label: "ภาพรวม", href: BASE }, { label: "ลูกค้า", href: `${BASE}/customers` }, { label: c.name }]}
      actions={
        <>
          <Button>บันทึกการโทร</Button>
          <Button>นัดหมาย</Button>
          <Button primary>+ สร้างใบเสนอราคา</Button>
        </>
      }
    >
      <div className={s.gridMain}>
        <div className={s.stack}>
          <Panel title="ดีลของลูกค้ารายนี้">
            {deals.length ? (
              <DataTable
                columns={["โปรเจกต์", "มูลค่า", "ขั้น", "เจ้าของ"]}
                rows={deals.map(({ stage, deal: [, value, owner, project] }) => [
                  <strong key="p">{project}</strong>,
                  value,
                  <Badge tone={stage === "Won" ? "good" : stage === "Negotiation" ? "warning" : "info"} key="st">{stage}</Badge>,
                  owner
                ])}
              />
            ) : (
              <p className={s.note}>ยังไม่มีดีลที่เปิดอยู่</p>
            )}
          </Panel>
          <Panel title="ประวัติการติดต่อ">
            <Tabs items={["ทั้งหมด", "การโทร", "อีเมล", "ประชุม", "โน้ต"]} active="ทั้งหมด" />
            <Timeline
              items={[
                { title: "โทรติดตามใบเสนอราคา", meta: `วันนี้ 10:30 · ${c.owner}`, body: `${c.contact} ขอปรับขอบเขตงานบางส่วน จะส่งความเห็นภายในสัปดาห์นี้`, tone: "warning" },
                { title: "ส่งใบเสนอราคา", meta: `17 ต.ค. 2569 · ${c.owner}`, tone: "neutral" },
                { title: "ประชุม demo ระบบต้นแบบ", meta: `12 ต.ค. 2569 · ${c.owner} และทีม Dev`, body: "ลูกค้าสนใจฟีเจอร์รายงานและการเชื่อมต่อกับระบบบัญชีเดิม" },
                { title: "รับ Lead จากหน้าเว็บไซต์", meta: "28 ก.ย. 2569 · ระบบ", tone: "good" }
              ]}
            />
          </Panel>
        </div>
        <div className={s.stack}>
          <AiCard title="AI แนะนำสิ่งที่ควรทำต่อ" actions={["ร่างอีเมล", "สร้างงานติดตาม"]}>
            <ul>
              <li>
                โทรหา <strong>{c.contact}</strong> ภายใน 2 วัน ลูกค้าเปิดใบเสนอราคาซ้ำ 3 ครั้งในสัปดาห์นี้
              </li>
              <li>เสนอแพ็กเกจ MA 12 เดือนพร้อมกัน ลูกค้าในกลุ่ม{c.industry} 68% ซื้อเพิ่ม</li>
              <li>ความเสี่ยง: คู่แข่งเสนอราคาต่ำกว่า ควรเน้นเรื่องระยะเวลาส่งมอบและการดูแลหลังขาย</li>
            </ul>
          </AiCard>
          <Panel title="ข้อมูลลูกค้า">
            <Fields
              items={[
                ["ประเภท", <Badge tone={tierTone[c.tier]} key="t">{c.tier}</Badge>],
                ["ยอดซื้อรวม", c.value],
                ["ผู้ติดต่อหลัก", c.contact],
                ["โทรศัพท์", c.phone],
                ["เจ้าของลูกค้า", c.owner],
                ["ติดต่อล่าสุด", c.lastContact]
              ]}
            />
          </Panel>
          <Panel title="ใบเสนอราคา" action="ดูทั้งหมด">
            {qs.length ? (
              <ul className={s.list}>
                {qs.map(([id, , project, total, , st]) => (
                  <li key={id}>
                    <span className={s.dot} aria-hidden="true" />
                    <p>
                      {project}
                      <br />
                      <small>
                        {id} · {total}
                      </small>
                    </p>
                    <Badge tone={quoteTone[st]}>{st}</Badge>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={s.note}>ยังไม่มีใบเสนอราคา</p>
            )}
          </Panel>
        </div>
      </div>
    </MockupShell>
  );
}
