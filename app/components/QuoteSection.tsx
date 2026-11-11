"use client";

import { Check, CheckCircle2, Copy, Mail, Plus, X } from "lucide-react";
import { useId, useMemo, useState } from "react";
import { COMPANY_EMAIL, COMPANY_NAME, type Lang } from "../site";
import { MA_RATE, SHOW_PRICING, formatBaht, priceGroups, priceItems } from "../pricing";
import { Phrases, plainText } from "./Phrases";

// Keep generated mailto links under the ~2,000-char limit of common mail clients
const MAILTO_MAX = 1800;
const DETAILS_MAX = 600;

type Errors = Partial<Record<"name" | "phone" | "need", string>>;

const COPY = {
  th: {
    pricingTitle: "ราคาเริ่มต้น",
    pricingLead:
      "ราคาเริ่มต้นสำหรับระบบขนาด Standard (พร้อมใช้งานจริงสำหรับ 1 ทีม ระยะเวลาประมาณ 3–4 เดือน) ราคาจริงขึ้นกับขอบเขตงาน จำนวนผู้ใช้ และการเชื่อมต่อระบบเดิม",
    pricingMa: (rate: number) => `ค่าดูแลระบบหลังส่งมอบ (MA) ประมาณ ${rate}% ของค่าพัฒนาต่อปี`,
    pricingHint: "กดที่รายการเพื่อเพิ่มลงในคำขอใบเสนอราคาด้านล่าง",
    from: "เริ่มต้น",
    title: "ขอใบเสนอราคา",
    lead: "กรอกข้อมูลสั้น ๆ ระบบจะร่างอีเมลถึงทีมให้ทันที ทีมงานจะติดต่อกลับเพื่อคุย requirement และส่งใบเสนอราคาตามขอบเขตจริง",
    name: "ชื่อผู้ติดต่อ",
    company: "บริษัท / หน่วยงาน",
    phone: "เบอร์โทร",
    chosen: "ระบบที่สนใจ",
    remove: (label: string) => `เอา ${label} ออก`,
    chosenPick: "เลือกจากรายการราคาด้านบน",
    chosenOr: "หรือเล่ารายละเอียดด้านล่าง",
    total: "ราคาเริ่มต้นรวมโดยประมาณ",
    details: "รายละเอียดงาน",
    detailsPlaceholder: "เช่น ต้องการระบบจองคิวร้านซ่อมรถ ใช้งาน 3 สาขา เชื่อมกับ LINE แจ้งเตือนลูกค้า",
    submit: "ส่งคำขอทางอีเมล",
    altPrefix: "ไม่มีแอปเมลในเครื่อง? เปิดด้วย",
    or: "หรือ",
    copy: "คัดลอกข้อความ",
    copied: "คัดลอกแล้ว",
    sentBefore: "ร่างอีเมลถึง",
    sentAfter:
      "แล้ว กดส่งในโปรแกรมอีเมลของคุณได้เลย ถ้าโปรแกรมไม่เปิดขึ้นมา ใช้ Gmail, Outlook หรือกด “คัดลอกข้อความ” แล้วส่งถึงอีเมลนี้",
    errName: "กรุณากรอกชื่อผู้ติดต่อ",
    errPhone: "กรุณากรอกเบอร์โทรสำหรับติดต่อกลับ",
    errPhoneShort: "เบอร์โทรสั้นเกินไป ตรวจสอบอีกครั้ง",
    errNeedPricing: "เลือกระบบจากรายการราคา หรือเล่ารายละเอียดงานสั้น ๆ",
    errNeed: "เล่ารายละเอียดงานที่ต้องการสั้น ๆ",
    mailSubject: "ขอใบเสนอราคา",
    mailGreeting: `เรียน ทีม ${COMPANY_NAME}`,
    mailName: "ชื่อ",
    mailCompany: "บริษัท",
    mailPhone: "โทร",
    mailChosen: "ระบบที่สนใจ",
    mailTotal: "ราคาเริ่มต้นรวมโดยประมาณ",
    mailDetails: "รายละเอียด",
    copyTo: "ถึง",
    copySubject: "เรื่อง"
  },
  en: {
    pricingTitle: "Starting prices",
    pricingLead:
      "Starting prices for a Standard-size system (production-ready for one team, about 3–4 months). Final prices depend on scope, number of users and integration with existing systems.",
    pricingMa: (rate: number) => `Maintenance after handover (MA) is about ${rate}% of the build cost per year.`,
    pricingHint: "Click an item to add it to the quote request below.",
    from: "from",
    title: "Request a quote",
    lead: "Fill in a few details and we'll draft an email to our team for you. We'll get back to you to discuss requirements and send a quote based on your actual scope.",
    name: "Contact name",
    company: "Company / Organisation",
    phone: "Phone",
    chosen: "Systems of interest",
    remove: (label: string) => `Remove ${label}`,
    chosenPick: "Pick from the price list above",
    chosenOr: "or describe your project below",
    total: "Estimated starting total",
    details: "Project details",
    detailsPlaceholder: "e.g. A booking system for a car repair shop with 3 branches, sending LINE notifications to customers",
    submit: "Send request by email",
    altPrefix: "No mail app on this device? Open in",
    or: "or",
    copy: "Copy text",
    copied: "Copied",
    sentBefore: "Your email to",
    sentAfter:
      "is drafted. Just press send in your mail app. If it didn't open, use Gmail, Outlook or “Copy text” and send it to this address.",
    errName: "Please enter a contact name",
    errPhone: "Please enter a phone number so we can call you back",
    errPhoneShort: "That phone number looks too short, please check it",
    errNeedPricing: "Pick a system from the price list, or briefly describe your project",
    errNeed: "Briefly describe what you need",
    mailSubject: "Quote request",
    mailGreeting: `Dear ${COMPANY_NAME} team,`,
    mailName: "Name",
    mailCompany: "Company",
    mailPhone: "Phone",
    mailChosen: "Systems of interest",
    mailTotal: "Estimated starting total",
    mailDetails: "Details",
    copyTo: "To",
    copySubject: "Subject"
  }
};

/**
 * Price list plus a short request form. Picking rows in the price list adds
 * them to the request; sending opens the visitor's own mail app (or Gmail /
 * Outlook) with a drafted email, so no form backend is needed.
 */
export function QuoteSection({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  const formId = useId();
  const [selected, setSelected] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const chosen = useMemo(() => priceItems.filter((item) => selected.includes(item.id)), [selected]);
  const startTotal = chosen.reduce((sum, item) => sum + item.price, 0);

  function toggle(id: string) {
    setSelected((current) => (current.includes(id) ? current.filter((x) => x !== id) : [...current, id]));
    setErrors((e) => ({ ...e, need: undefined }));
    setSent(false);
  }

  const bodyLines = (detailText: string) => [
    t.mailGreeting,
    "",
    `${t.mailName}: ${name.trim()}`,
    `${t.mailCompany}: ${company.trim() || "-"}`,
    `${t.mailPhone}: ${phone.trim()}`,
    "",
    ...(SHOW_PRICING
      ? [
          `${t.mailChosen}: ${chosen.map((item) => plainText(item.label)).join(", ") || "-"}`,
          ...(chosen.length ? [`${t.mailTotal}: ${formatBaht(startTotal)}`] : []),
          ""
        ]
      : []),
    `${t.mailDetails}:`,
    detailText || "-"
  ];

  const subject = `${t.mailSubject}${company.trim() ? ` — ${company.trim()}` : ""}`;
  const fullText = bodyLines(details.trim()).join("\n");

  const mailtoHref = useMemo(() => {
    const build = (text: string) =>
      `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines(text).join("\r\n"))}`;
    let text = details.trim();
    let href = build(text);
    // Thai text costs 9 chars per letter once encoded; trim the free text to fit
    while (href.length > MAILTO_MAX && text.length > 20) {
      text = text.slice(0, Math.floor(text.length * 0.8)).trimEnd() + "…";
      href = build(text);
    }
    return href;
  }, [subject, name, company, phone, details, chosen, startTotal, t]);

  const webmail = useMemo(() => {
    const q = new URLSearchParams(mailtoHref.split("?")[1]);
    const su = encodeURIComponent(q.get("subject") ?? "");
    const body = encodeURIComponent(q.get("body") ?? "");
    const to = encodeURIComponent(COMPANY_EMAIL);
    return {
      gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}&body=${body}`,
      outlook: `https://outlook.live.com/mail/0/deeplink/compose?to=${to}&subject=${su}&body=${body}`
    };
  }, [mailtoHref]);

  function validate() {
    const next: Errors = {};
    if (!name.trim()) next.name = t.errName;
    const digits = phone.replace(/\D/g, "");
    if (!digits) next.phone = t.errPhone;
    else if (digits.length < 9) next.phone = t.errPhoneShort;
    if (!chosen.length && !details.trim())
      next.need = SHOW_PRICING ? t.errNeedPricing : t.errNeed;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) {
      const first = event.currentTarget.querySelector<HTMLElement>("[aria-invalid='true']");
      first?.focus();
      return;
    }
    setSent(true);
    // Some embedded/preview browsers ignore a plain mailto, so hand it to the top window
    try {
      (window.top ?? window).location.href = mailtoHref;
    } catch {
      window.location.href = mailtoHref;
    }
  }

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(`${t.copyTo}: ${COMPANY_EMAIL}\n${t.copySubject}: ${subject}\n\n${fullText}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  const field = (key: string) => `${formId}-${key}`;

  return (
    <>
      {SHOW_PRICING && (
      <section className="section shell" id="pricing" aria-labelledby="pricing-title">
        <div className="section-head section-head--split">
          <div>
            <h2 id="pricing-title">{t.pricingTitle}</h2>
            <p>
              <Phrases text={t.pricingLead} />
            </p>
          </div>
          <p className="pricing-ma">
            <Phrases text={t.pricingMa(Math.round(MA_RATE * 100))} />
          </p>
        </div>

        <div className="price-groups">
          {priceGroups.map((group) => (
            <div className="price-group" key={group.label}>
              <h3>{group.label}</h3>
              <ul>
                {group.items.map((item) => {
                  const on = selected.includes(item.id);
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        className={on ? "price-row is-on" : "price-row"}
                        aria-pressed={on}
                        onClick={() => toggle(item.id)}
                      >
                        <span className="price-name">
                          <Phrases text={item.label} />
                        </span>
                        <span className="price-value">
                          <small>{t.from}</small> {formatBaht(item.price)}
                        </span>
                        <span className="price-toggle" aria-hidden="true">
                          {on ? <Check size={16} /> : <Plus size={16} />}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <p className="pricing-hint">
          <Phrases text={t.pricingHint} />
        </p>
      </section>
      )}

      <section className="section section--tint" id="contact" aria-labelledby="contact-title">
        <div className="shell quote">
          <div className="quote-copy">
            <h2 id="contact-title">{t.title}</h2>
            <p>
              <Phrases text={t.lead} />
            </p>
            <ul className="contact-list">
              <li>
                <a className="contact-item" href={`mailto:${COMPANY_EMAIL}`}>
                  <Mail size={18} aria-hidden="true" />
                  {COMPANY_EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <form className="quote-form" onSubmit={onSubmit} noValidate>
            <div className="field-row">
              <div className="field">
                <label htmlFor={field("name")}>
                  {t.name} <span className="req">*</span>
                </label>
                <input
                  id={field("name")}
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setErrors((x) => ({ ...x, name: undefined }));
                  }}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? field("name-err") : undefined}
                />
                {errors.name && (
                  <p className="field-error" id={field("name-err")}>
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="field">
                <label htmlFor={field("company")}>{t.company}</label>
                <input
                  id={field("company")}
                  name="company"
                  autoComplete="organization"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor={field("phone")}>
                {t.phone} <span className="req">*</span>
              </label>
              <input
                id={field("phone")}
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="08x-xxx-xxxx"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setErrors((x) => ({ ...x, phone: undefined }));
                }}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? field("phone-err") : undefined}
              />
              {errors.phone && (
                <p className="field-error" id={field("phone-err")}>
                  {errors.phone}
                </p>
              )}
            </div>

            {SHOW_PRICING && (
            <div className="field">
              <span className="field-label" id={field("chosen")}>
                {t.chosen}
              </span>
              {chosen.length ? (
                <ul className="chosen" aria-labelledby={field("chosen")}>
                  {chosen.map((item) => (
                    <li key={item.id}>
                      <Phrases text={item.label} />
                      <button type="button" onClick={() => toggle(item.id)} aria-label={t.remove(plainText(item.label))}>
                        <X size={14} aria-hidden="true" />
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="chosen-empty">
                  <a href="#pricing">{t.chosenPick}</a> {t.chosenOr}
                </p>
              )}
              {chosen.length > 0 && (
                <p className="chosen-total" aria-live="polite">
                  {t.total} <strong>{formatBaht(startTotal)}</strong>
                </p>
              )}
            </div>
            )}

            <div className="field">
              <label htmlFor={field("details")}>
                {t.details}{!SHOW_PRICING && <span className="req"> *</span>}
              </label>
              <textarea
                id={field("details")}
                name="details"
                rows={4}
                maxLength={DETAILS_MAX}
                placeholder={t.detailsPlaceholder}
                value={details}
                onChange={(e) => {
                  setDetails(e.target.value);
                  setErrors((x) => ({ ...x, need: undefined }));
                }}
                aria-invalid={Boolean(errors.need)}
                aria-describedby={errors.need ? field("need-err") : undefined}
              />
              <div className="field-meta">
                {errors.need ? (
                  <p className="field-error" id={field("need-err")}>
                    {errors.need}
                  </p>
                ) : (
                  <span />
                )}
                <span>
                  {details.length}/{DETAILS_MAX}
                </span>
              </div>
            </div>

            <button className="button button--primary button--lg full-width" type="submit">
              {t.submit}
              <Mail size={18} aria-hidden="true" />
            </button>

            <p className="mail-alt">
              {t.altPrefix}{" "}
              <a href={webmail.gmail} target="_blank" rel="noopener noreferrer" onClick={(e) => { if (!validate()) e.preventDefault(); else setSent(true); }}>
                Gmail
              </a>{" "}
              {t.or}{" "}
              <a href={webmail.outlook} target="_blank" rel="noopener noreferrer" onClick={(e) => { if (!validate()) e.preventDefault(); else setSent(true); }}>
                Outlook
              </a>{" "}
              {t.or}{" "}
              <button type="button" className="link-button" onClick={copySummary} aria-live="polite">
                {copied ? (
                  <>
                    <Check size={14} aria-hidden="true" /> {t.copied}
                  </>
                ) : (
                  <>
                    <Copy size={14} aria-hidden="true" /> {t.copy}
                  </>
                )}
              </button>
            </p>

            {sent && (
              <p className="success-message" role="status">
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>
                  {t.sentBefore} <strong>{COMPANY_EMAIL}</strong> {t.sentAfter}
                </span>
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
