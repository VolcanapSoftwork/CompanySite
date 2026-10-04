import type { Metadata } from "next";
import Link from "next/link";
import { Badge, Button, DataTable, FilterBar, KpiRow, MockupShell, Pager, Panel, Tabs, mockupStyles as s } from "../../ui";
import { BASE, NAV, SHELL, empTone, employees } from "../data";

export const metadata: Metadata = { title: "พนักงาน — PeopleHub (Mockup) | VOLCANAP SOFTWORK" };

export default function EmployeesMockup() {
  return (
    <MockupShell
      {...SHELL}
      nav={NAV}
      active="พนักงาน"
      title="ทะเบียนพนักงาน"
      subtitle="231 คน · 5 ฝ่าย · 3 สาขา"
      crumbs={[{ label: "ภาพรวม", href: BASE }, { label: "พนักงาน" }]}
      actions={
        <>
          <Button>นำเข้าจาก Excel</Button>
          <Button primary>+ เพิ่มพนักงาน</Button>
        </>
      }
    >
      <KpiRow
        items={[
          { label: "พนักงานประจำ", value: "214", note: "92.6% ของทั้งหมด" },
          { label: "ทดลองงาน", value: "11", note: "ครบกำหนดเดือนนี้ 3 คน", tone: "warning" },
          { label: "เข้าใหม่ปีนี้", value: "38", note: "+12% จากปีก่อน" },
          { label: "อัตราลาออก", value: "4.1%", note: "ต่ำกว่าเป้า 5%", tone: "good" }
        ]}
      />
      <Panel title="รายชื่อพนักงาน">
        <Tabs items={["ทั้งหมด (231)", "ทำงาน (214)", "ทดลองงาน (11)", "ลาคลอด / ลาพัก (6)"]} active="ทั้งหมด (231)" />
        <FilterBar search="ค้นหาชื่อ รหัส หรือตำแหน่ง..." filters={["ฝ่าย: ทั้งหมด", "สาขา: ทั้งหมด", "ประเภทการจ้าง: ทั้งหมด"]} />
        <DataTable
          columns={["รหัส", "ชื่อ-นามสกุล", "ตำแหน่ง", "ฝ่าย", "วันเริ่มงาน", "สถานะ"]}
          rows={employees.map(([id, name, pos, dept, start, st]) => [
            <span className={s.mono} key="id">{id}</span>,
            <span key="n">
              <span className={s.avatarSm} aria-hidden="true">{name.slice(0, 1)}</span>
              <Link className={s.rowLink} href={`${BASE}/employees/${id}`}>{name}</Link>
            </span>,
            pos,
            <span className={s.muted} key="d">{dept}</span>,
            <span className={s.muted} key="s">{start}</span>,
            <Badge tone={empTone[st]} key="st">{st}</Badge>
          ])}
        />
        <Pager text="แสดง 1–8 จาก 231 คน" />
      </Panel>
    </MockupShell>
  );
}
