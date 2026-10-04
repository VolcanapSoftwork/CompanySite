"use client";

import { CheckCircle2, Mail, PencilLine, Plus, X } from "lucide-react";
import { useMemo, useState } from "react";
import { COMPANY_EMAIL, COMPANY_NAME } from "../site";
import { Phrases, plainText } from "./Phrases";

// Starting price per project type, before the size and timeline multipliers
const projectGroups = [
  {
    label: "เว็บและแอป",
    options: [
      { id: "landing", label: "Landing Page", price: 15000 },
      { id: "website", label: "Corporate Website", price: 35000 },
      { id: "ecommerce", label: "E-commerce / ระบบจอง", price: 70000 },
      { id: "webapp", label: "Web Application", price: 85000 },
      { id: "mobile", label: "Mobile App", price: 150000 },
      { id: "portal", label: "Customer Portal / ระบบสมาชิก", price: 60000 }
    ]
  },
  {
    label: "ระบบงานองค์กร",
    options: [
      { id: "his", label: "ระบบโรงพยาบาล / คลินิก (HIS)", price: 120000 },
      { id: "hr", label: "HR / Payroll", price: 90000 },
      { id: "crm", label: "CRM / ระบบขาย", price: 80000 },
      { id: "erp", label: "ERP / คลังสินค้า", price: 110000 }
    ]
  },
  {
    label: "ระบบหลังบ้านและข้อมูล",
    options: [
      { id: "backoffice", label: "ระบบหลังบ้าน\u00a0/\u00a0Admin", price: 60000 },
      { id: "dashboard", label: "Dashboard", price: 55000 },
      { id: "integration", label: "System Integration\u00a0/\u00a0API", price: 50000 },
      { id: "approval", label: "Workflow อนุมัติเอกสาร", price: 55000 }
    ]
  },
  {
    label: "AI และเทคโนโลยีใหม่",
    options: [
      { id: "ai", label: "AI Workflow", price: 75000 },
      { id: "chatbot", label: "Chatbot / LINE OA", price: 35000 },
      { id: "webar", label: "Web AR / 3D", price: 90000 },
      { id: "ocr", label: "AI อ่านเอกสาร / OCR", price: 65000 }
    ]
  },
  {
    label: "งานเสริม",
    options: [
      { id: "uxui", label: "UX/UI Design", price: 30000 },
      { id: "security", label: "Security Layer", price: 45000 },
      { id: "qa", label: "QA & Performance Test", price: 40000 },
      { id: "devops", label: "Cloud & DevOps Setup", price: 35000 }
    ]
  }
];

const projectOptions = projectGroups.flatMap((group) => group.options);

// Project size scales the base price; `typical` is the index into
// timelineOptions that this size normally takes.
const scaleOptions = [
  { id: "starter", label: "Starter", hint: "MVP หรือฟีเจอร์หลัก|ไม่กี่หน้าจอ", multiplier: 0.7, typical: 0 },
  { id: "standard", label: "Standard", hint: "ระบบพร้อมใช้งานจริง|สำหรับ\u00a01\u00a0ทีม", multiplier: 1, typical: 0 },
  { id: "business", label: "Business", hint: "หลาย role และเชื่อมต่อ|ระบบเดิม", multiplier: 1.6, typical: 0 },
  { id: "enterprise", label: "Enterprise", hint: "หลายหน่วยงาน มี security และ\u00a0audit", multiplier: 2.5, typical: 1 }
];

const timelineOptions = [
  { id: "3-4m", label: "3–4 เดือน" },
  { id: "5-6m", label: "5–6 เดือน" },
  { id: "6m+", label: "6 เดือน+" }
];

// Faster than the size's typical timeline costs more (rush); slower costs a
// little less. Each step is one timeline option.
const RUSH_MULTIPLIER = [1, 1.25, 1.5];
const RELAXED_DISCOUNT_PER_STEP = 0.05;
const MAX_RELAXED_DISCOUNT = 0.1;

// Max length of the free-text scope; keeps the mailto URL short
const OTHER_MAX = 200;

// Yearly maintenance (MA) after handover, as a share of the build estimate
const MA_RATE = 0.15;

function timelineMultiplier(steps: number) {
  if (steps > 0) return RUSH_MULTIPLIER[Math.min(steps, RUSH_MULTIPLIER.length - 1)];
  return 1 - Math.min(-steps * RELAXED_DISCOUNT_PER_STEP, MAX_RELAXED_DISCOUNT);
}

function formatBaht(value: number) {
  return new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
    maximumFractionDigits: 0
  }).format(value);
}

export function ScopeEstimator() {
  const [selected, setSelected] = useState(["website", "webapp"]);
  const [scaleId, setScaleId] = useState(scaleOptions[1].id);
  const [timelineIndex, setTimelineIndex] = useState(scaleOptions[1].typical);
  const [submitted, setSubmitted] = useState(false);
  // Free-text scope for anything not in the list; priced separately, not added to the estimate
  const [otherOpen, setOtherOpen] = useState(false);
  const [otherText, setOtherText] = useState("");
  const other = otherOpen ? otherText.trim() : "";

  const chosen = useMemo(
    () => projectOptions.filter((option) => selected.includes(option.id)),
    [selected]
  );

  const scale = scaleOptions.find((option) => option.id === scaleId) ?? scaleOptions[1];
  // Positive = faster than this size normally takes
  const rushSteps = scale.typical - timelineIndex;

  const estimate = useMemo(() => {
    const base = chosen.reduce((sum, option) => sum + option.price, 0);
    // Round to the nearest 1,000 so it reads as an estimate, not a quote
    return Math.round((base * scale.multiplier * timelineMultiplier(rushSteps)) / 1000) * 1000;
  }, [chosen, scale, rushSteps]);

  const hasScope = chosen.length > 0 || other.length > 0;

  const maPerYear = Math.round((estimate * MA_RATE) / 1000) * 1000;
  const maPerMonth = Math.round(maPerYear / 12 / 100) * 100;

  // Opens the visitor's own mail client with a draft addressed to us, so the
  // reply-to is their real address and no form backend is needed. Kept short
  // on purpose: encoded Thai costs 9 chars each and Windows truncates a
  // mailto URL past roughly 2,000.
  const mailtoHref = useMemo(() => {
    const timelineLabel = timelineOptions[timelineIndex].label;
    const subject = `ขอประเมิน Scope: ${[...chosen.map((option) => plainText(option.label)), ...(other ? ["อื่นๆ"] : [])].join(", ")}`;
    const body = [
      `เรียน ทีม ${COMPANY_NAME}`,
      "",
      "■ ขอบเขตงานที่สนใจ",
      ...chosen.map((option) => `- ${plainText(option.label)}`),
      ...(other ? [`- อื่นๆ: ${other}`] : []),
      "",
      "■ ขนาดโปรเจกต์",
      `${scale.label} — ${plainText(scale.hint)}`,
      "",
      "■ ระยะเวลา",
      timelineLabel,
      "",
      "■ งบเริ่มต้นโดยประมาณ",
      chosen.length ? formatBaht(estimate) + (other ? " (ไม่รวมงานอื่นๆ)" : "") : "รอประเมินหลังคุย requirement",
      "",
      "■ ค่าดูแลระบบ (MA) โดยประมาณ",
      chosen.length ? `${formatBaht(maPerYear)}/ปี` : "รอประเมิน",
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
  }, [chosen, estimate, maPerYear, other, scale, timelineIndex]);

  function toggleOption(id: string) {
    setSelected((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
    setSubmitted(false);
  }

  function selectScale(id: string) {
    const next = scaleOptions.find((option) => option.id === id) ?? scaleOptions[1];
    setScaleId(next.id);
    setTimelineIndex(next.typical);
    setSubmitted(false);
  }

  return (
    <form className="estimate-card" onSubmit={(event) => event.preventDefault()}>
      <div className="form-group estimate-types">
        <label>เลือกประเภทงาน (เลือกได้หลายข้อ)</label>
        {projectGroups.map((group) => (
          <div className="option-group" key={group.label}>
            <span className="option-group-label">{group.label}</span>
            <div className="option-grid">
              {group.options.map((option) => (
                <button
                  className={selected.includes(option.id) ? "option active" : "option"}
                  key={option.id}
                  type="button"
                  aria-pressed={selected.includes(option.id)}
                  onClick={() => toggleOption(option.id)}
                >
                  <span>
                    <Phrases text={option.label} />
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
        <div className="option-group">
          <span className="option-group-label">ไม่พบงานที่ต้องการ</span>
          <div className={otherOpen ? "option-other-box open" : "option-other-box"}>
            <button
              className="option-other-toggle"
              type="button"
              aria-expanded={otherOpen}
              aria-controls="estimate-other"
              onClick={() => {
                setOtherOpen((open) => !open);
                setSubmitted(false);
              }}
            >
              <PencilLine size={16} aria-hidden="true" />
              <span>อื่นๆ (พิมพ์เอง)</span>
              {otherOpen ? <X size={16} aria-hidden="true" /> : <Plus size={16} aria-hidden="true" />}
            </button>
            {otherOpen && (
              <div className="option-other-body">
                <textarea
                  id="estimate-other"
                  rows={3}
                  maxLength={OTHER_MAX}
                  autoFocus
                  placeholder="เช่น ระบบจองคิวร้านซ่อมรถ, เชื่อมต่อเครื่องชั่ง, ย้ายระบบเดิมขึ้น Cloud"
                  value={otherText}
                  onChange={(e) => {
                    setOtherText(e.target.value);
                    setSubmitted(false);
                  }}
                  aria-label="รายละเอียดงานอื่นๆ"
                />
                <div className="option-other-meta">
                  <span>ทีมงานจะประเมินราคาส่วนนี้ให้แยก</span>
                  <span>
                    {otherText.length}/{OTHER_MAX}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="estimate-side">
      <div className="form-group">
        <label>ขนาดโปรเจกต์</label>
        <div className="scale-control">
          {scaleOptions.map((option) => (
            <button
              className={scaleId === option.id ? "active" : ""}
              key={option.id}
              type="button"
              aria-pressed={scaleId === option.id}
              onClick={() => selectScale(option.id)}
            >
              <strong>{option.label}</strong>
              <small>
                <Phrases text={option.hint} />
              </small>
            </button>
          ))}
        </div>
      </div>
      <div className="form-group">
        <label>ระยะเวลาโดยประมาณ</label>
        <div className="timeline-control">
          {timelineOptions.map((option, index) => (
            <button
              className={[timelineIndex === index ? "active" : "", scale.typical === index ? "typical" : ""].join(" ").trim() || undefined}
              key={option.id}
              type="button"
              aria-pressed={timelineIndex === index}
              onClick={() => {
                setTimelineIndex(index);
                setSubmitted(false);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
        <p className={rushSteps > 1 ? "timeline-note timeline-note--warn" : "timeline-note"}>
          {rushSteps > 1
            ? "สั้นกว่าปกติมาก อาจต้องลด scope หรือแบ่งส่งเป็น phase"
            : rushSteps === 1
              ? `เร็วกว่าปกติ คิดค่าเร่งงาน +${Math.round((RUSH_MULTIPLIER[1] - 1) * 100)}%`
              : rushSteps < 0
                ? `นานกว่าปกติ ลด ${Math.round((1 - timelineMultiplier(rushSteps)) * 100)}%`
                : `ขนาด ${scale.label} ปกติใช้เวลา ${timelineOptions[scale.typical].label}`}
        </p>
      </div>
      <div className="estimate-total">
        <span>งบเริ่มต้นโดยประมาณ</span>
        <strong className={chosen.length ? undefined : "estimate-pending"}>
          {chosen.length ? formatBaht(estimate) : other ? "ประเมินหลังคุย requirement" : "เลือก scope ก่อน"}
        </strong>
        {chosen.length > 0 && other && <small className="estimate-extra">+ งานอื่นๆ ที่ระบุไว้ ประเมินราคาแยก</small>}
        {chosen.length > 0 && (
          <div className="estimate-ma">
            <span>ค่าดูแลระบบหลังส่งมอบ (MA)</span>
            <b>
              {formatBaht(maPerYear)}/ปี{" "}
              <small>(≈ {formatBaht(maPerMonth)}/เดือน)</small>
            </b>
            <small>
              <Phrases
                text={`${Math.round(MA_RATE * 100)}% ของค่าพัฒนาต่อปี ครอบคลุมแก้\u00a0bug, อัปเดตความปลอดภัย, ดูแล\u00a0server และ\u00a0backup ส่วนฟีเจอร์ใหม่|ประเมินราคาแยก`}
              />
            </small>
          </div>
        )}
      </div>
      {hasScope ? (
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
      </div>
    </form>
  );
}
