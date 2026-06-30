"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useMemo, useState } from "react";

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

  const estimate = useMemo(() => {
    const base = selected.reduce((sum, id) => {
      const item = projectOptions.find((option) => option.id === id);
      return sum + (item?.price ?? 0);
    }, 0);
    const multiplier = timelineOptions.find((t) => t.id === timeline)?.multiplier ?? 1;
    return Math.round(base * multiplier);
  }, [selected, timeline]);

  function toggleOption(id: string) {
    setSelected((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  }

  return (
    <form
      className="estimate-card"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="form-group">
        <label>เลือกประเภทงาน</label>
        <div className="option-grid">
          {projectOptions.map((option) => (
            <button
              className={selected.includes(option.id) ? "option active" : "option"}
              key={option.id}
              type="button"
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
              onClick={() => setTimeline(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <div className="estimate-total">
        <span>งบเริ่มต้นโดยประมาณ</span>
        <strong>{selected.length ? formatBaht(estimate) : "เลือก scope ก่อน"}</strong>
      </div>
      <button className="primary-button full-width" type="submit" disabled={!selected.length}>
        ส่ง scope เบื้องต้น
        <ArrowRight size={18} aria-hidden="true" />
      </button>
      {submitted && (
        <p className="success-message">
          <CheckCircle2 size={18} aria-hidden="true" />
          รับ scope แล้ว ทีม VOLCANAP สามารถนำชุดตัวเลือกนี้ไปคุย requirement ต่อได้ทันที
        </p>
      )}
    </form>
  );
}
