"use client";

import { CheckCircle2, Mail } from "lucide-react";
import { useMemo, useState } from "react";
import { COMPANY_EMAIL, COMPANY_NAME } from "../site";

const projectOptions = [
  { id: "website", label: "Corporate Website", price: 35000 },
  { id: "webapp", label: "Web Application", price: 85000 },
  { id: "dashboard", label: "Dashboard", price: 55000 },
  { id: "ai", label: "AI Workflow", price: 75000 },
  { id: "security", label: "Security Layer", price: 45000 }
];

const timelineOptions = [
  { id: "fast", label: "2–4 สัปดาห์", multiplier: 1.25 },
  { id: "normal", label: "1–2 เดือน", multiplier: 1 },
  { id: "long", label: "3 เดือนขึ้นไป", multiplier: 0.95 }
];

function formatBaht(value: number) {
  return new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
    maximumFractionDigits: 0
  }).format(value);
}

export function ScopeEstimator() {
  const [selected, setSelected] = useState(["website", "webapp"]);
  const [timeline, setTimeline] = useState(timelineOptions[1].id);
  const [submitted, setSubmitted] = useState(false);

  const chosen = useMemo(
    () => projectOptions.filter((option) => selected.includes(option.id)),
    [selected]
  );

  const estimate = useMemo(() => {
    const base = chosen.reduce((sum, option) => sum + option.price, 0);
    const multiplier = timelineOptions.find((t) => t.id === timeline)?.multiplier ?? 1;
    return Math.round(base * multiplier);
  }, [chosen, timeline]);

  // Opens the visitor's own mail client with a draft addressed to us, so the
  // reply-to is their real address and no form backend is needed. Kept short
  // on purpose: encoded Thai costs 9 chars each and Windows truncates a
  // mailto URL past roughly 2,000.
  const mailtoHref = useMemo(() => {
    const timelineLabel = timelineOptions.find((t) => t.id === timeline)?.label ?? "";
    const subject = `ขอประเมิน Scope: ${chosen.map((option) => option.label).join(", ")}`;
    const body = [
      `เรียน ทีม ${COMPANY_NAME}`,
      "",
      "■ ขอบเขตงานที่สนใจ",
      ...chosen.map((option) => `- ${option.label} (${formatBaht(option.price)}+)`),
      "",
      "■ ระยะเวลา",
      timelineLabel,
      "",
      "■ งบเริ่มต้นโดยประมาณ",
      formatBaht(estimate),
      "",
      "■ ผู้ติดต่อ",
      "ชื่อ: ",
      "บริษัท: ",
      "โทร: ",
      "",
      "■ รายละเอียดเพิ่มเติม",
      "",
      "",
      "ขอบคุณครับ/ค่ะ"
    ].join("\r\n");

    return `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [chosen, estimate, timeline]);

  function toggleOption(id: string) {
    setSelected((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
    setSubmitted(false);
  }

  return (
    <form className="estimate-card" onSubmit={(event) => event.preventDefault()}>
      <div className="form-group">
        <label>เลือกประเภทงาน</label>
        <div className="option-grid">
          {projectOptions.map((option) => (
            <button
              className={selected.includes(option.id) ? "option active" : "option"}
              key={option.id}
              type="button"
              aria-pressed={selected.includes(option.id)}
              onClick={() => toggleOption(option.id)}
            >
              <span>{option.label}</span>
              <small>{formatBaht(option.price)}+</small>
            </button>
          ))}
        </div>
      </div>
      <div className="form-group">
        <label>ระยะเวลาโดยประมาณ</label>
        <div className="timeline-control">
          {timelineOptions.map((option) => (
            <button
              className={timeline === option.id ? "active" : ""}
              key={option.id}
              type="button"
              aria-pressed={timeline === option.id}
              onClick={() => setTimeline(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <div className="estimate-total">
        <span>งบเริ่มต้นโดยประมาณ</span>
        <strong>{chosen.length ? formatBaht(estimate) : "เลือก scope ก่อน"}</strong>
      </div>
      {chosen.length ? (
        <a
          className="primary-button full-width"
          href={mailtoHref}
          onClick={() => setSubmitted(true)}
        >
          ร่างอีเมลส่ง scope
          <Mail size={18} aria-hidden="true" />
        </a>
      ) : (
        <button className="primary-button full-width" type="button" disabled>
          ร่างอีเมลส่ง scope
          <Mail size={18} aria-hidden="true" />
        </button>
      )}
      {submitted && (
        <p className="success-message">
          <CheckCircle2 size={18} aria-hidden="true" />
          <span>
            เปิดโปรแกรมอีเมลพร้อมร่างข้อความแล้ว กรุณากรอกข้อมูลผู้ติดต่อแล้วกดส่งถึง{" "}
            <strong>{COMPANY_EMAIL}</strong> หากโปรแกรมอีเมลไม่เปิดขึ้นมา
            สามารถส่งรายละเอียดมาที่อีเมลนี้ได้โดยตรง
          </span>
        </p>
      )}
    </form>
  );
}
