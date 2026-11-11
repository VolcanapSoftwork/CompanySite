import type { Metadata } from "next";
import Link from "next/link";
import { Badge, Button, DataTable, FilterBar, MockupShell, Pager, Panel, Tabs, mockupStyles as s } from "../../ui";
import { BASE, NAV, SHELL, customers } from "../data";

export const metadata: Metadata = { title: "ผู้ติดต่อ — DealBoard (Mockup) | VOLCANAP SOFTWORK" };

const roles = ["ผู้ตัดสินใจ", "ผู้ใช้งานหลัก", "จัดซื้อ", "IT", "ผู้ตัดสินใจ", "ผู้ใช้งานหลัก", "จัดซื้อ", "ผู้ตัดสินใจ"];
const engagement = [92, 78, 55, 84, 40, 61, 70, 88];

export default function ContactsMockup() {
  return (
    <MockupShell
      {...SHELL}
      nav={NAV}
      active="ผู้ติดต่อ"
      title="ผู้ติดต่อ"
      subtitle="412 คน จาก 186 บริษัท"
      crumbs={[{ label: "ภาพรวม", href: BASE }, { label: "ผู้ติดต่อ" }]}
      actions={
        <>
          <Button>สแกนนามบัตร (AI)</Button>
          <Button primary>+ เพิ่มผู้ติดต่อ</Button>
        </>
      }
    >
      <Panel title="รายชื่อผู้ติดต่อ">
        <Tabs items={["ทั้งหมด (412)", "ผู้ตัดสินใจ (96)", "ผู้ใช้งาน (188)", "จัดซื้อ (54)"]} active="ทั้งหมด (412)" />
        <FilterBar search="ค้นหาชื่อ อีเมล หรือบริษัท..." filters={["บทบาท: ทั้งหมด", "เจ้าของ: ทุกคน"]} />
        <DataTable
          columns={["ชื่อ", "บริษัท", "บทบาท", "โทรศัพท์", "ความสนใจ (AI)", "ติดต่อล่าสุด"]}
          rows={customers.map((c, i) => [
            <span key="n">
              <span className={s.avatarSm} aria-hidden="true">{c.contact.replace(/^(คุณ|ผศ\.ดร\.|นพ\.|ทพญ\.)\s*/, "").slice(0, 1)}</span>
              <strong>{c.contact}</strong>
            </span>,
            <Link className={s.rowLink} href={`${BASE}/customers/${c.id}`} key="c">{c.name}</Link>,
            <Badge tone={roles[i] === "ผู้ตัดสินใจ" ? "info" : "neutral"} key="r">{roles[i]}</Badge>,
            <span className={s.mono} key="p">{c.phone}</span>,
            <span className={s.score} key="e">
              <span className={s.meter}>
                <i style={{ width: `${engagement[i]}%` }} />
              </span>
              {engagement[i]}
            </span>,
            <span className={s.muted} key="l">{c.lastContact}</span>
          ])}
        />
        <Pager text="แสดง 1–8 จาก 412 คน" />
      </Panel>
    </MockupShell>
  );
}
