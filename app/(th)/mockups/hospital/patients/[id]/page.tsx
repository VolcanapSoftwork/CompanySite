import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AiCard, Badge, Button, DataTable, Fields, KpiRow, MockupShell, Panel, Tabs, Timeline, mockupStyles as s } from "../../../ui";
import { BASE, NAV, SHELL, getPatient, patients, triageTone, visitTone } from "../../data";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return patients.map((p) => ({ id: p.hn }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: `${(await params).id} — CareFlow (Mockup) | VOLCANAP SOFTWORK` };
}

// Sample orders per clinic so each patient's page reads plausibly
const ORDERS: Record<string, { note: string; meds: string[][] }> = {
  อายุรกรรม: {
    note: "มาตามนัดติดตามอาการ ทานยาสม่ำเสมอ ไม่มีแน่นหน้าอก แนะนำลดอาหารหวานมันเค็ม และออกกำลังกาย 30 นาที 5 วันต่อสัปดาห์",
    meds: [["Metformin 500 mg", "1 เม็ด เช้า-เย็น หลังอาหาร", "60 เม็ด"], ["Amlodipine 5 mg", "1 เม็ด เช้า", "30 เม็ด"], ["Atorvastatin 20 mg", "1 เม็ด ก่อนนอน", "30 เม็ด"]]
  },
  กุมารเวช: {
    note: "ไข้ 2 วัน ไอ มีน้ำมูก ทานได้น้อยลง ตรวจไข้หวัดใหญ่ชนิด A ผลบวก แนะนำเช็ดตัวลดไข้และดื่มน้ำมากๆ",
    meds: [["Paracetamol syrup 120 mg/5 ml", "5 ml ทุก 6 ชม. เมื่อมีไข้", "1 ขวด"], ["Oseltamivir 30 mg", "1 แคปซูล เช้า-เย็น 5 วัน", "10 แคปซูล"]]
  },
  "สูติ-นรีเวช": {
    note: "ฝากครรภ์ครั้งที่ 5 ทารกดิ้นดี ความดันปกติ นัดตรวจคัดกรองเบาหวานขณะตั้งครรภ์ครั้งถัดไป",
    meds: [["Ferrous fumarate 200 mg", "1 เม็ด หลังอาหารเช้า", "30 เม็ด"], ["Folic acid 5 mg", "1 เม็ด เช้า", "30 เม็ด"]]
  },
  "ศัลยกรรมกระดูก": {
    note: "ปวดเข่าขวาเวลาเดินขึ้นบันได 3 เดือน X-ray พบข้อเข่าเสื่อมระยะที่ 2 แนะนำกายภาพบำบัดและลดน้ำหนัก",
    meds: [["Celecoxib 200 mg", "1 แคปซูล หลังอาหารเช้า", "14 แคปซูล"], ["Glucosamine 1500 mg", "1 ซอง วันละครั้ง", "30 ซอง"]]
  },
  "ฉุกเฉิน (ER)": {
    note: "อุบัติเหตุจักรยานยนต์ แผลฉีกขาดที่แขนซ้ายยาว 4 ซม. เย็บแผล 6 เข็ม ฉีดวัคซีนบาดทะยัก นัดตัดไหม 7 วัน",
    meds: [["Dicloxacillin 500 mg", "1 แคปซูล ก่อนอาหาร 4 เวลา", "20 แคปซูล"], ["Paracetamol 500 mg", "1–2 เม็ด ทุก 6 ชม. เมื่อปวด", "20 เม็ด"]]
  },
  ทันตกรรม: { note: "ขูดหินปูนทั้งปาก เหงือกอักเสบเล็กน้อย แนะนำใช้ไหมขัดฟันทุกวัน", meds: [["Chlorhexidine mouthwash 0.12%", "บ้วนปาก เช้า-เย็น", "1 ขวด"]] }
};

export default async function PatientMockup({ params }: Props) {
  const p = getPatient((await params).id);
  if (!p) notFound();
  const order = ORDERS[p.clinic] ?? ORDERS["อายุรกรรม"];
  const highBp = p.vitals.bp !== "—" && Number(p.vitals.bp.split("/")[0]) >= 140;

  return (
    <MockupShell
      {...SHELL}
      nav={NAV}
      active="ผู้ป่วย"
      title={p.name}
      subtitle={`${p.hn} · ${p.sex} ${p.age} ปี · สิทธิ${p.right}`}
      crumbs={[{ label: "ภาพรวม", href: BASE }, { label: "ผู้ป่วย", href: `${BASE}/patients` }, { label: p.hn }]}
      actions={
        <>
          <Button>สั่งแล็บ</Button>
          <Button>นัดครั้งถัดไป</Button>
          <Button primary>บันทึกการตรวจ</Button>
        </>
      }
    >
      <KpiRow
        items={[
          { label: "ความดันโลหิต", value: p.vitals.bp, note: highBp ? "สูงกว่าเกณฑ์" : "อยู่ในเกณฑ์", tone: highBp ? "warning" : "good" },
          { label: "ชีพจร", value: `${p.vitals.pulse}`, note: "ครั้ง/นาที" },
          { label: "อุณหภูมิ", value: `${p.vitals.temp}°`, note: p.vitals.temp >= 37.5 ? "มีไข้" : "ปกติ", tone: p.vitals.temp >= 37.5 ? "critical" : "good" },
          { label: "น้ำหนัก", value: `${p.vitals.weight}`, note: "กิโลกรัม" }
        ]}
      />
      <div className={s.gridMain}>
        <div className={s.stack}>
          <Panel title="การตรวจครั้งนี้">
            <Tabs items={["บันทึกแพทย์", "ผลแล็บ (3)", "รังสี", "ใบรับรองแพทย์"]} active="บันทึกแพทย์" />
            <Fields
              items={[
                ["คลินิก", p.clinic],
                ["แพทย์ผู้ตรวจ", p.doctor],
                ["คัดกรอง", <Badge tone={triageTone[p.triage]} key="t">{p.triage}</Badge>],
                ["สถานะ", <Badge tone={visitTone[p.status]} key="s">{p.status}</Badge>],
                ["การวินิจฉัย", p.diagnosis],
                ["แพ้ยา", <span className={p.allergy === "ไม่มี" ? undefined : s.tone_critical} key="a">{p.allergy}</span>]
              ]}
            />
            <h3 style={{ margin: "18px 0 8px", fontSize: 14 }}>อาการสำคัญ / บันทึกแพทย์</h3>
            <p className={s.note} style={{ borderStyle: "solid", color: "inherit" }}>
              {order.note}
            </p>
          </Panel>
          <Panel title="รายการยาที่สั่ง" action="ส่งห้องยา">
            <DataTable
              columns={["ยา", "วิธีใช้", "จำนวน"]}
              rows={order.meds.map(([n, how, q]) => [<strong key="n">{n}</strong>, <span className={s.muted} key="h">{how}</span>, q])}
            />
          </Panel>
        </div>
        <div className={s.stack}>
          <AiCard title="สรุปผู้ป่วยโดย AI" actions={["ถาม AI เพิ่มเติม", "ร่างบันทึกแพทย์"]}>
            <p>
              {p.name} อายุ {p.age} ปี มารับบริการที่{p.clinic} วินิจฉัย{p.diagnosis}
            </p>
            <ul>
              {highBp && <li>ความดันสูงกว่าเกณฑ์ ควรทบทวนยาลดความดัน</li>}
              {p.vitals.temp >= 37.5 && <li>มีไข้ {p.vitals.temp}° ควรติดตามสัญญาณชีพทุก 4 ชม.</li>}
              {p.allergy !== "ไม่มี" && <li>แพ้ {p.allergy} ระบบจะตรวจทุกใบสั่งยาให้อัตโนมัติ</li>}
              <li>ยาที่สั่งไม่พบปฏิกิริยาระหว่างยา</li>
            </ul>
          </AiCard>
          {p.allergy !== "ไม่มี" && (
            <Panel title="แจ้งเตือน">
              <Badge tone="critical">แพ้ยา {p.allergy}</Badge>
              <p className={s.note} style={{ marginTop: 10 }}>
                ระบบจะเตือนอัตโนมัติเมื่อสั่งยาที่อยู่ในกลุ่มเดียวกัน
              </p>
            </Panel>
          )}
          <Panel title="ประวัติการรักษา">
            <Timeline
              items={[
                { title: `${p.clinic} · ${p.doctor}`, meta: p.lastVisit, tone: "warning" },
                { title: "ตรวจเลือดประจำปี", meta: "12 ส.ค. 2569 · ห้องแล็บ", body: "CBC และเคมีคลินิกอยู่ในเกณฑ์ปกติ" },
                { title: `${p.clinic} · ติดตามอาการ`, meta: "3 มิ.ย. 2569", tone: "good" },
                { title: "ลงทะเบียนผู้ป่วย", meta: "15 ม.ค. 2568", tone: "neutral" }
              ]}
            />
          </Panel>
          <Panel title="นัดหมายถัดไป">
            <Fields items={[["วันที่", "15 ธ.ค. 2569 09:00"], ["คลินิก", p.clinic], ["เตรียมตัว", "งดอาหาร 8 ชม."], ["แจ้งเตือน", "SMS และ LINE"]]} />
          </Panel>
        </div>
      </div>
    </MockupShell>
  );
}
