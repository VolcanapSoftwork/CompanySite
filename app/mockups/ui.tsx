import Link from "next/link";
import { ArrowLeft, Bell, Search, SendHorizontal, Sparkles, type LucideIcon } from "lucide-react";
import styles from "./mockup.module.css";

export type NavItem = { icon: LucideIcon; label: string; badge?: string; href?: string };

/** App frame shared by the concept mockups: banner, sidebar, top bar. */
export function MockupShell({
  brand,
  accent,
  nav,
  active,
  title,
  subtitle,
  user,
  backHref,
  crumbs,
  actions,
  children
}: {
  brand: string;
  accent: string;
  nav: NavItem[];
  active: string;
  title: string;
  subtitle: string;
  user: { name: string; role: string };
  backHref: string;
  crumbs?: { label: string; href?: string }[];
  actions?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.root} style={{ "--accent": accent } as React.CSSProperties}>
      <div className={styles.banner}>
        <Link href={backHref}>
          <ArrowLeft size={14} aria-hidden="true" />
          กลับไปหน้าผลงาน
        </Link>
        <span>ตัวอย่างหน้าจอ (Mockup) · ข้อมูลทั้งหมดเป็นข้อมูลสมมติ</span>
      </div>
      <div className={styles.app}>
        <aside className={styles.sidebar}>
          <div className={styles.brand}>
            <span className={styles.brandMark} aria-hidden="true">
              {brand.slice(0, 1)}
            </span>
            <strong>{brand}</strong>
          </div>
          <nav aria-label={`${brand} navigation`}>
            {nav.map(({ icon: Icon, label, badge, href }) => {
              const content = (
                <>
                  <Icon size={17} aria-hidden="true" />
                  {label}
                  {badge && <em>{badge}</em>}
                </>
              );
              const className = label === active ? styles.navActive : styles.navItem;
              // Screens that exist in the mockup are links; the rest are decorative
              return href ? (
                <Link key={label} href={href} className={className} aria-current={label === active ? "page" : undefined}>
                  {content}
                </Link>
              ) : (
                <span key={label} className={`${className} ${styles.navDisabled}`} title="ไม่มีในตัวอย่างนี้">
                  {content}
                </span>
              );
            })}
          </nav>
        </aside>
        <main className={styles.main}>
          <header className={styles.topbar}>
            <div className={styles.search}>
              <Search size={16} aria-hidden="true" />
              <span>ค้นหา...</span>
            </div>
            <div className={styles.topbarRight}>
              <span className={styles.iconBtn} aria-label="การแจ้งเตือน">
                <Bell size={17} />
                <i />
              </span>
              <div className={styles.user}>
                <span className={styles.avatar} aria-hidden="true">
                  {user.name.slice(0, 1)}
                </span>
                <div>
                  <strong>{user.name}</strong>
                  <small>{user.role}</small>
                </div>
              </div>
            </div>
          </header>
          <div className={styles.pageHead}>
            {crumbs && (
              <div className={styles.crumbs}>
                {crumbs.map((c, i) => (
                  <span key={c.label}>
                    {i > 0 && " / "}
                    {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
                  </span>
                ))}
              </div>
            )}
            <div className={styles.pageHeadRow}>
              <div>
                <h1>{title}</h1>
                <p>{subtitle}</p>
              </div>
              {actions && <div className={styles.actions}>{actions}</div>}
            </div>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}

export function KpiRow({ items }: { items: { label: string; value: string; note: string; tone?: Tone }[] }) {
  return (
    <div className={styles.kpis}>
      {items.map((item) => (
        <div className={styles.kpi} key={item.label}>
          <span>{item.label}</span>
          <strong>{item.value}</strong>
          <small className={item.tone ? styles[`tone_${item.tone}`] : undefined}>{item.note}</small>
        </div>
      ))}
    </div>
  );
}

export function Panel({ title, action, children, className }: { title: string; action?: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`${styles.panel} ${className ?? ""}`}>
      <div className={styles.panelHead}>
        <h2>{title}</h2>
        {action && <span>{action}</span>}
      </div>
      {children}
    </section>
  );
}

/** Single-series column chart; the title on each bar doubles as a hover tooltip. */
export function BarChart({ data, unit, label }: { data: { x: string; y: number }[]; unit: string; label: string }) {
  const max = Math.max(...data.map((d) => d.y));
  const last = data[data.length - 1];
  return (
    <figure className={styles.chart} aria-label={label}>
      <div className={styles.bars}>
        {data.map((d) => (
          <div key={d.x} className={styles.barCol} title={`${d.x}: ${d.y.toLocaleString("th-TH")} ${unit}`}>
            {d === last && <span className={styles.barValue}>{d.y.toLocaleString("th-TH")}</span>}
            <div className={styles.bar} style={{ height: `${(d.y / max) * 100}%` }} />
          </div>
        ))}
      </div>
      <div className={styles.barLabels}>
        {data.map((d) => (
          <span key={d.x}>{d.x}</span>
        ))}
      </div>
    </figure>
  );
}

export type Tone = "good" | "warning" | "critical" | "neutral" | "info";

/** Status pill: colour plus a text label, never colour alone. */
export function Badge({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  return <span className={`${styles.badge} ${styles[`badge_${tone}`]}`}>{children}</span>;
}

export function DataTable({ columns, rows }: { columns: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { styles as mockupStyles };

export function Button({ children, primary, href }: { children: React.ReactNode; primary?: boolean; href?: string }) {
  const cls = primary ? styles.btnPrimary : styles.btn;
  return href ? (
    <Link href={href} className={cls}>
      {children}
    </Link>
  ) : (
    <span className={cls}>{children}</span>
  );
}

/** Visual-only filter row: search box plus dropdown-looking chips */
export function FilterBar({ search, filters }: { search: string; filters: string[] }) {
  return (
    <div className={styles.filterBar}>
      <span className={styles.filterSearch}>{search}</span>
      {filters.map((f) => (
        <span key={f} className={styles.filterChip}>
          {f} ▾
        </span>
      ))}
    </div>
  );
}

export function Tabs({ items, active }: { items: string[]; active: string }) {
  return (
    <div className={styles.tabs} role="tablist">
      {items.map((t) => (
        <span key={t} role="tab" aria-selected={t === active} className={t === active ? styles.tabActive : styles.tab}>
          {t}
        </span>
      ))}
    </div>
  );
}

/** Label/value pairs in a two-column grid */
export function Fields({ items }: { items: [string, React.ReactNode][] }) {
  return (
    <dl className={styles.fields}>
      {items.map(([k, v]) => (
        <div key={k}>
          <dt>{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Timeline({ items }: { items: { title: string; meta: string; body?: string; tone?: Tone }[] }) {
  return (
    <ol className={styles.timeline}>
      {items.map((it, i) => (
        <li key={i}>
          <span className={`${styles.timelineDot} ${it.tone ? styles[`dot_${it.tone}`] : ""}`} aria-hidden="true" />
          <div>
            <strong>{it.title}</strong>
            <small>{it.meta}</small>
            {it.body && <p>{it.body}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Pager({ text }: { text: string }) {
  return (
    <div className={styles.pager}>
      <span>{text}</span>
      <span className={styles.pagerBtns}>
        <span>‹</span>
        <span className={styles.pagerActive}>1</span>
        <span>2</span>
        <span>3</span>
        <span>›</span>
      </span>
    </div>
  );
}

/** Highlighted AI insight; the label makes clear it is a suggestion, not a decision */
export function AiCard({
  title,
  children,
  confidence,
  actions
}: {
  title: string;
  children: React.ReactNode;
  confidence?: string;
  actions?: string[];
}) {
  return (
    <section className={styles.ai}>
      <header className={styles.aiHead}>
        <span className={styles.aiBadge}>
          <Sparkles size={13} aria-hidden="true" />
          AI
        </span>
        <h2>{title}</h2>
        {confidence && <small>ความมั่นใจ {confidence}</small>}
      </header>
      <div className={styles.aiBody}>{children}</div>
      {actions && (
        <div className={styles.aiActions}>
          {actions.map((a, i) => (
            <span key={a} className={i === 0 ? styles.btnPrimary : styles.btn}>
              {a}
            </span>
          ))}
        </div>
      )}
      <p className={styles.aiFoot}>สร้างโดย AI · ควรตรวจสอบก่อนใช้งานจริง</p>
    </section>
  );
}

export type ChatMessage = { from: "user" | "ai"; text: React.ReactNode; sources?: string[] };

/** Static chat transcript with a disabled composer */
export function Chat({ messages, placeholder, suggestions }: { messages: ChatMessage[]; placeholder: string; suggestions?: string[] }) {
  return (
    <div className={styles.chat}>
      <div className={styles.chatLog}>
        {messages.map((m, i) => (
          <div key={i} className={m.from === "ai" ? styles.msgAi : styles.msgUser}>
            {m.from === "ai" && (
              <span className={styles.msgAvatar} aria-hidden="true">
                <Sparkles size={14} />
              </span>
            )}
            <div>
              <div className={styles.msgBubble}>{m.text}</div>
              {m.sources && (
                <div className={styles.msgSources}>
                  {m.sources.map((src) => (
                    <span key={src}>{src}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {suggestions && (
        <div className={styles.chatSuggest}>
          {suggestions.map((q) => (
            <span key={q}>{q}</span>
          ))}
        </div>
      )}
      <div className={styles.composer}>
        <span>{placeholder}</span>
        <i aria-hidden="true">
          <SendHorizontal size={16} />
        </i>
      </div>
    </div>
  );
}
