import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Bell, CalendarDays, Camera, Clock3, FileText, Home, MapPin, User, Wallet } from "lucide-react";
import styles from "./app.module.css";

export const metadata: Metadata = { title: "PeopleHub Check-in App (Mockup) | VOLCANAP SOFTWORK" };

const history: [string, string, string, "ok" | "late" | "leave"][] = [
  ["จ. 19 ต.ค.", "08:52", "18:04", "ok"],
  ["ศ. 16 ต.ค.", "09:07", "18:15", "late"],
  ["พฤ. 15 ต.ค.", "08:48", "17:59", "ok"],
  ["พ. 14 ต.ค.", "—", "—", "leave"],
  ["อ. 13 ต.ค.", "08:55", "18:21", "ok"]
];

const STATUS = { ok: "ตรงเวลา", late: "สาย 7 นาที", leave: "ลาป่วย" };

/** Employee-facing mobile app for the HR mockup: check-in with GPS + selfie */
export default function CheckInAppMockup() {
  return (
    <div className={styles.page}>
      <div className={styles.banner}>
        <Link href="/work/mockup-hr">
          <ArrowLeft size={14} aria-hidden="true" />
          กลับไปหน้าผลงาน
        </Link>
        <span>ตัวอย่างแอปพนักงาน (Mockup) · ข้อมูลสมมติ</span>
        <Link href="/mockups/hr">ดูฝั่ง HR (หลังบ้าน) →</Link>
      </div>
      <div className={styles.stage}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>PeopleHub · Employee App</p>
          <h1>แอปลงเวลาสำหรับพนักงาน</h1>
          <ul>
            <li>กดเช็คอินพร้อมยืนยันตำแหน่ง GPS ว่าอยู่ในพื้นที่ทำงาน</li>
            <li>ถ่ายรูปยืนยันตัวตน ป้องกันการลงเวลาแทนกัน</li>
            <li>ดูประวัติเข้า-ออก ยื่นใบลา และดูสลิปเงินเดือนได้เอง</li>
            <li>ข้อมูลเข้าระบบ HR ทันที ใช้คำนวณ OT และเงินเดือนต่อได้เลย</li>
          </ul>
        </div>
        <div className={styles.phone}>
          <div className={styles.notch} aria-hidden="true" />
          <div className={styles.screen}>
            <header className={styles.top}>
              <div>
                <small>สวัสดีตอนเช้า</small>
                <strong>กมลชนก ใจดี</strong>
              </div>
              <span className={styles.bell} aria-label="การแจ้งเตือน">
                <Bell size={18} />
              </span>
            </header>

            <section className={styles.clockCard}>
              <small>จันทร์ 20 ตุลาคม 2569</small>
              <b>08:47</b>
              <span className={styles.location}>
                <MapPin size={14} aria-hidden="true" />
                สำนักงานใหญ่ · อยู่ในพื้นที่ (32 ม.)
              </span>
              <button type="button" className={styles.checkBtn}>
                <Camera size={20} aria-hidden="true" />
                เช็คอินเข้างาน
              </button>
              <div className={styles.shift}>
                <span>
                  กะงาน <b>09:00–18:00</b>
                </span>
                <span>
                  เข้างาน <b>—</b>
                </span>
                <span>
                  ออกงาน <b>—</b>
                </span>
              </div>
            </section>

            <section className={styles.quick}>
              {[
                [CalendarDays, "ยื่นใบลา"],
                [Clock3, "ขอ OT"],
                [Wallet, "สลิปเงินเดือน"],
                [FileText, "ขอเอกสาร"]
              ].map(([Icon, label]) => {
                const I = Icon as typeof CalendarDays;
                return (
                  <span key={label as string}>
                    <i>
                      <I size={18} aria-hidden="true" />
                    </i>
                    {label as string}
                  </span>
                );
              })}
            </section>

            <section className={styles.card}>
              <div className={styles.cardHead}>
                <strong>สิทธิ์การลาคงเหลือ</strong>
              </div>
              <div className={styles.leave}>
                <span>
                  <b>7</b>พักร้อน
                </span>
                <span>
                  <b>26</b>ลาป่วย
                </span>
                <span>
                  <b>3</b>ลากิจ
                </span>
              </div>
            </section>

            <section className={styles.card}>
              <div className={styles.cardHead}>
                <strong>ประวัติการลงเวลา</strong>
                <small>ดูทั้งหมด</small>
              </div>
              <ul className={styles.history}>
                {history.map(([day, inT, outT, st]) => (
                  <li key={day}>
                    <span>{day}</span>
                    <span>
                      {inT} – {outT}
                    </span>
                    <em className={styles[`st_${st}`]}>{STATUS[st]}</em>
                  </li>
                ))}
              </ul>
            </section>

            <nav className={styles.tabbar} aria-label="App navigation">
              {[
                [Home, "หน้าแรก", true],
                [Clock3, "ลงเวลา", false],
                [CalendarDays, "การลา", false],
                [User, "โปรไฟล์", false]
              ].map(([Icon, label, active]) => {
                const I = Icon as typeof Home;
                return (
                  <span key={label as string} className={active ? styles.tabActive : undefined}>
                    <I size={19} aria-hidden="true" />
                    {label as string}
                  </span>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
