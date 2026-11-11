import type { Metadata } from "next";
import Link from "next/link";
import { Badge, Button, DataTable, FilterBar, MockupShell, Pager, Panel, Tabs, mockupStyles as s } from "../../ui";
import { BASE, NAV, SHELL, customers, tierTone } from "../data";

export const metadata: Metadata = { title: "ลูกค้า — DealBoard (Mockup) | VOLCANAP SOFTWORK" };

export default function CustomersMockup() {
  return (
    <MockupShell
      {...SHELL}
      nav={NAV}
      active="ลูกค้า"
      title="ลูกค้า"
      subtitle="186 บริษัท · Key Account 12 ราย"
      crumbs={[{ label: "ภาพรวม", href: BASE }, { label: "ลูกค้า" }]}
      actions={
        <>
          <Button>นำเข้าจาก Excel</Button>
          <Button primary>+ เพิ่มลูกค้า</Button>
        </>
      }
    >
      <Panel title="รายชื่อลูกค้า">
        <Tabs items={["ทั้งหมด (186)", "Key Account (12)", "ลูกค้าใหม่ (24)", "ไม่ได้ติดต่อเกิน 30 วัน (17)"]} active="ทั้งหมด (186)" />
        <FilterBar search="ค้นหาชื่อบริษัทหรือผู้ติดต่อ..." filters={["อุตสาหกรรม: ทั้งหมด", "เจ้าของ: ทุกคน", "จังหวัด: ทั้งหมด"]} />
        <DataTable
          columns={["ลูกค้า", "อุตสาหกรรม", "จังหวัด", "ผู้ติดต่อหลัก", "เจ้าของ", "ประเภท", "ยอดซื้อรวม", "ติดต่อล่าสุด"]}
          rows={customers.map((c) => [
            <Link className={s.rowLink} href={`${BASE}/customers/${c.id}`} key="n">{c.name}</Link>,
            <span className={s.muted} key="i">{c.industry}</span>,
            c.province,
            c.contact,
            c.owner,
            <Badge tone={tierTone[c.tier]} key="t">{c.tier}</Badge>,
            <strong key="v">{c.value}</strong>,
            <span className={s.muted} key="l">{c.lastContact}</span>
          ])}
        />
        <Pager text="แสดง 1–8 จาก 186 ราย" />
      </Panel>
    </MockupShell>
  );
}
