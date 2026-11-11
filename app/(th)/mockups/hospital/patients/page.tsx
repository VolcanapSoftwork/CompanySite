import type { Metadata } from "next";
import Link from "next/link";
import { Badge, Button, DataTable, FilterBar, MockupShell, Pager, Panel, Tabs, mockupStyles as s } from "../../ui";
import { BASE, NAV, SHELL, patients, triageTone, visitTone } from "../data";

export const metadata: Metadata = { title: "ผู้ป่วย — CareFlow (Mockup) | VOLCANAP SOFTWORK" };

export default function PatientsMockup() {
  return (
    <MockupShell
      {...SHELL}
      nav={NAV}
      active="ผู้ป่วย"
      title="ทะเบียนผู้ป่วย"
      subtitle="ผู้ป่วยในระบบ 86,420 ราย · มารับบริการวันนี้ 412 ราย"
      crumbs={[{ label: "ภาพรวม", href: BASE }, { label: "ผู้ป่วย" }]}
      actions={
        <>
          <Button>สแกนบัตรประชาชน</Button>
          <Button primary>+ ลงทะเบียนผู้ป่วยใหม่</Button>
        </>
      }
    >
      <Panel title="ผู้ป่วยที่มารับบริการวันนี้">
        <Tabs items={["ทั้งหมด (412)", "รอตรวจ (38)", "กำลังตรวจ (21)", "รอรับยา (46)", "Admit (7)"]} active="ทั้งหมด (412)" />
        <FilterBar search="ค้นหา HN ชื่อ หรือเลขบัตรประชาชน..." filters={["คลินิก: ทั้งหมด", "สิทธิการรักษา: ทั้งหมด", "แพทย์: ทั้งหมด"]} />
        <DataTable
          columns={["HN", "ชื่อผู้ป่วย", "อายุ", "สิทธิ", "คลินิก", "แพทย์", "คัดกรอง", "สถานะ"]}
          rows={patients.map((p) => [
            <Link className={`${s.mono} ${s.rowLink}`} href={`${BASE}/patients/${p.hn}`} key="hn">{p.hn}</Link>,
            <strong key="n">{p.name}</strong>,
            `${p.age} ปี`,
            <span className={s.muted} key="r">{p.right}</span>,
            p.clinic,
            <span className={s.muted} key="d">{p.doctor}</span>,
            <Badge tone={triageTone[p.triage]} key="t">{p.triage}</Badge>,
            <Badge tone={visitTone[p.status]} key="s">{p.status}</Badge>
          ])}
        />
        <Pager text="แสดง 1–8 จาก 412 ราย" />
      </Panel>
    </MockupShell>
  );
}
