import type { WorkDetail } from "./works";

/** English text for each work. Gallery entries match the Thai gallery by position. */
export type WorkTranslation = {
  description: string;
  tags?: string[];
  screenshotAlt?: string;
  gallery?: { alt: string; caption: string }[];
  galleryNote?: string;
  detail: WorkDetail;
};

const MOCKUP_NOTE = (data: string) =>
  `Sample screens (mockup) designed by our team. ${data} Click "Open Mockup" and use the left-hand menu to explore other pages.`;
const MOCKUP_STACK = (items: string[]) => [
  { group: "Mockup", items: ["Next.js", "React", "TypeScript", "CSS Modules"] },
  { group: "Production system (recommended)", items }
];

export const worksEn: Record<string, WorkTranslation> = {
  "tatip-hint-reporting": {
    description: "TATIP RTP — Anti-Trafficking in Persons Center, Royal Thai Police",
    tags: ["Government", "Anti-Trafficking", "Royal Thai Police"],
    screenshotAlt: "Human trafficking tip-off reporting page",
    gallery: [
      { alt: "Home page of the Anti-Trafficking in Persons Center website", caption: "Home — center information and contact channels" },
      { alt: "Tip-off page with a two-step flow", caption: "Report a tip — reporters can identify themselves or stay anonymous" },
      { alt: "Form for tip details, location and people involved", caption: "Tip form — province / district / subdistrict address dropdowns" },
      { alt: "Status tracking page using a tracking code", caption: "Track status — search with the code issued after reporting" },
      { alt: "Tip-off page in English", caption: "English language support" },
      { alt: "Home page in Chinese", caption: "Chinese language support" },
      { alt: "Home page on mobile", caption: "Home page on mobile" },
      { alt: "Tip-off page on mobile", caption: "Reporting on mobile" },
      { alt: "Tip form on mobile", caption: "A form tuned for easy entry on small screens" },
      { alt: "Status tracking page on mobile", caption: "Status tracking on mobile" }
    ],
    galleryNote:
      "All screens shown are public-facing. The back office that officers use to manage tips in the PIMS format is classified by the agency and cannot be shown.",
    detail: {
      overview:
        "The Human Trafficking Case Reporting System has two parts: a public website where people can report tips, anonymously if they choose, and a back office where police officers screen, assign, track and analyse cases. Both share a central cloud database. Developed in collaboration with the Anti-Trafficking in Persons Center, Royal Thai Police (TATIP RTP).",
      challenges: [
        "Tips arrived through many channels, including the hotline, email and paper documents, with no central system to collect them, so some information was lost.",
        "Each unit recorded data in its own format, which made joint analysis and audit trails difficult.",
        "Officers had to check and link tips by hand, which was slow and error-prone.",
        "Reporters face serious risk, so the system has to protect their identity and prevent data leaks."
      ],
      solutions: [
        {
          title: "Anonymous online reporting",
          text: "An easy form on mobile and desktop with province / district / subdistrict dropdowns, photo evidence uploads, and a tracking code issued after submission."
        },
        {
          title: "PIMS-format back office for tips",
          text: "Officers manage tips (Clues) in a back office that follows the Royal Thai Police PIMS format, from intake and grouping to data export. The screens are classified by the agency and cannot be shown."
        },
        {
          title: "Case Management Workflow",
          text: "Screen and grade severity on 3 levels (Critical / High / Normal) → assign to a local station or unit → record a progress log → close the case, with SLA alerts when a critical case goes without updates."
        },
        {
          title: "AI matching for duplicate tips",
          text: "Tips are converted to vectors with a Sentence Transformer, grouped by area, and matched with similar cases through semantic search, alerting officers before they take a case."
        },
        {
          title: "AI tip summaries",
          text: "Gemini 2.5 Flash Lite summarises tips in 3 languages, helping officers read and screen them faster."
        },
        {
          title: "Dashboard & Heatmap",
          text: "Tip statistics by period and province, with a density map to help allocate resources. Data exports to PDF / Excel."
        },
        {
          title: "Security & PDPA by Design",
          text: "Reporter identity is stored apart from case data (data decoupling), with RBAC, 2FA via email OTP, an audit trail on every change, and signed URLs for evidence files."
        }
      ],
      techStack: [
        { group: "Frontend", items: ["Next.js 15", "React 19", "TypeScript", "Material UI", "Tailwind CSS", "Leaflet"] },
        { group: "Backend & Data", items: ["Next.js API Routes", "Prisma", "PostgreSQL (Supabase)", "Supabase Storage", "NextAuth.js"] },
        { group: "AI", items: ["Sentence Transformer", "Hugging Face", "Gemini 2.5 Flash Lite"] },
        { group: "Deploy & Testing", items: ["Vercel", "GitHub", "Playwright", "k6"] }
      ]
    }
  },
  "diabetes-ar": {
    description:
      "WebAR diabetes education: point a phone camera at the poster and an animated 3D model for each topic appears, ready to rotate. No app to install.",
    screenshotAlt: "A3 diabetes education poster with 6 topics",
    gallery: [
      { alt: "Desktop home page with a scan button, QR code and scan target", caption: "Desktop home — scan button, QR code and a full-screen target to scan from the screen" },
      { alt: "Mobile home page with a single scan button", caption: "Mobile home — one scan button" },
      { alt: "Portrait A3 poster with 6 topics", caption: "Portrait A3 poster (2×3)" },
      { alt: "Landscape A3 poster with 6 topics", caption: "Landscape A3 poster (3×2)" },
      { alt: "3D model of the pancreas releasing insulin on topic box 1", caption: "1. The pancreas releases insulin → glucose enters cells" },
      { alt: "3D cutaway of a cell with insulin shown as a key", caption: "2. Insulin as the key that opens the cell, compared with insulin resistance" },
      { alt: "3D character showing warning signs", caption: "3. A character acting out 6 warning signs" },
      { alt: "3D cutaway of a blood vessel with a glucose meter", caption: "4. Blood vessels as sugar rises, with a glucose meter" },
      { alt: "3D models of the heart, kidneys, eyes and feet", caption: "5. Complications in the heart, kidneys, eyes and feet" },
      { alt: "3D model of a 2:1:1 healthy plate", caption: "6. The 2:1:1 healthy plate and exercise" }
    ],
    detail: {
      overview:
        "Web AR for diabetes education, used with an A3 infographic covering 6 topics. Point the phone camera at any box and that topic's animated 3D model locks to the centre of the screen, ready to rotate and zoom. It runs in the browser on both iOS Safari and Android Chrome with no app to install.",
      challenges: [
        "Posters and leaflets are static images, which makes body processes such as insulin moving glucose into cells hard to explain.",
        "Most AR apps must be downloaded first, and many users give up before they see any content.",
        "It has to work on both iPhone and Android, and Safari on iPhone does not support WebXR.",
        "Medical content must be accurate and easy for the general public to understand."
      ],
      solutions: [
        {
          title: "Marker-based WebAR",
          text: "In-browser image tracking detects the boxes on the poster. Works on iOS and Android with no app install."
        },
        {
          title: "6 animated 3D topics",
          text: "Pancreas, cell and insulin, a character showing symptoms, blood vessels, organs affected by complications, and the healthy plate. Each animation tells its story step by step."
        },
        {
          title: "Lock & Interact",
          text: "After a scan the model locks to the centre of the screen, so the poster can be put down. Drag to rotate, pinch to zoom, double-tap to reset."
        },
        {
          title: "In-depth content in the app",
          text: "An information sheet for each topic with more to read, based on guidelines from the Diabetes Association of Thailand and the ADA."
        },
        {
          title: "2 posters + desktop mode",
          text: "Portrait and landscape A3 posters with print-ready PDFs. On desktop, a full-screen target can be scanned from the screen, or a QR code opens the app on a phone."
        },
        {
          title: "Asset Pipeline & CI/CD",
          text: "Markers and posters are generated from a single content source, with regression tests using a simulated camera and automatic deploys through GitHub Actions."
        }
      ],
      techStack: [
        { group: "Frontend & AR", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "three.js", "MindAR"] },
        { group: "Tooling & Deploy", items: ["Playwright", "GitHub Actions", "Netlify"] }
      ]
    }
  },
  "thai-cv-risk-ar": {
    description:
      "Web AR that uses the phone camera to read body posture, measure height and waist, and estimate 10-year cardiovascular risk. No app to install.",
    screenshotAlt: "AR body scan screen with a risk card",
    gallery: [
      { alt: "Medical disclaimer page shown before use", caption: "Medical disclaimer before use" },
      { alt: "Body scan on mobile with an AR card", caption: "Body scan — measures height and waist" },
      { alt: "Risk gauge with recommendations", caption: "Risk gauge and recommendations" },
      { alt: "Form for blood pressure, diabetes and smoking", caption: "High-accuracy assessment mode" }
    ],
    galleryNote: "All screens use Demo Mode, which shows a sample body outline instead of a live camera feed.",
    detail: {
      overview:
        "A mobile Web AR app that uses the phone camera for pose tracking to estimate height and waist circumference, then calculates the 10-year risk of cardiovascular disease with the waist-based Thai CV Risk Score. It runs in the mobile browser with no app to install, and a detailed mode lets users enter extra clinical values.",
      challenges: [
        "Cardiovascular risk screening needs tape measures, forms and staff, which makes it slow to run at scale.",
        "Most people don't know their waist-to-height ratio (WHtR) or where their risk level stands.",
        "Measuring the body with a single phone camera gives values that shift with distance, camera angle and lighting.",
        "It must be clear that this is preliminary screening, not a medical diagnosis."
      ],
      solutions: [
        {
          title: "In-browser pose tracking",
          text: "MediaPipe detects 33 body landmarks in real time on the phone, processed on the user's device with GPU/CPU fallback."
        },
        {
          title: "Height and waist from the camera",
          text: "Estimates height from head to ankle and waist from an ellipse model, with smoothing to keep the numbers steady."
        },
        {
          title: "AR HUD",
          text: "A result card follows the person on screen, showing risk %, WHtR and risk level instantly."
        },
        {
          title: "High-accuracy assessment mode",
          text: "Starts from the camera values, then adds systolic blood pressure (SBP), diabetes and smoking, shown on a 4-level gauge."
        },
        {
          title: "Personalised advice",
          text: "Lifestyle recommendations based on the risk factors found."
        },
        {
          title: "Demo Mode & disclaimer",
          text: "A simulated mode for demos without the camera, and a medical disclaimer page before use."
        }
      ],
      techStack: [
        { group: "Frontend", items: ["Next.js 16", "React 19", "TypeScript"] },
        { group: "AR & Vision", items: ["MediaPipe Pose Landmarker", "Canvas 2D", "SVG"] },
        { group: "Deploy", items: ["Netlify", "GitHub Actions"] }
      ]
    }
  },
  "mockup-hospital": {
    description:
      "A sample hospital management system that brings patient registration, queues, medical records and bed occupancy into one place.",
    screenshotAlt: "Overview page of the hospital management system (Mockup)",
    gallery: [
      { alt: "Overview — patient statistics and AI crowd forecasting", caption: "Overview — patient statistics and AI crowd forecasting" },
      { alt: "Medical record — vital signs, medications and AI patient summary", caption: "Medical record — vital signs, medications and AI patient summary" },
      { alt: "AI clinical assistant — ask about patients and check drug interactions", caption: "AI clinical assistant — ask about patients and check drug interactions" },
      { alt: "Pharmacy — prescriptions, stock and AI medication safety checks", caption: "Pharmacy — prescriptions, stock and AI medication safety checks" },
      { alt: "Lab — test results and AI summaries for doctors", caption: "Lab — test results and AI summaries for doctors" },
      { alt: "Queue board and AI wait-time estimates", caption: "Queue board and AI wait-time estimates" },
      { alt: "Bed occupancy and AI forecasts of free beds", caption: "Bed occupancy and AI forecasts of free beds" },
      { alt: "Medical record on mobile", caption: "Medical record on mobile" }
    ],
    galleryNote: MOCKUP_NOTE("All patient data is fictional."),
    detail: {
      overview:
        "Sample screens for a hospital information system (HIS) for mid-sized hospitals or multi-branch clinics, covering patient registration, queue tickets, examination notes and prescriptions through to inpatient bed management.",
      challenges: [
        "Patients wait a long time without knowing where they are in the queue.",
        "Treatment history and drug allergies sit in paper files that are hard to search and prone to mistakes.",
        "There is no overview of free beds, so staff have to phone each ward.",
        "Management has to wait until month end for statistics reports."
      ],
      solutions: [
        { title: "Registration and medical records", text: "Scan national ID cards, check treatment entitlements, and keep a record of every visit." },
        { title: "Real-time queue system", text: "A queue board by stage, shown on screens outside exam rooms, with queue alerts through LINE." },
        { title: "Examination notes and prescriptions", text: "Record vital signs and diagnoses, and send prescriptions to the pharmacy instantly." },
        { title: "AI clinical assistant", text: "Summarises medical records and lab results, checks drug interactions and allergies, and forecasts patient numbers and free beds." },
        { title: "Inpatient bed management", text: "See free beds across every ward and follow patients who need close monitoring." },
        { title: "Appointments and dashboard", text: "Book follow-up appointments with reminders, plus daily patient statistics for management." }
      ],
      techStack: MOCKUP_STACK(["PostgreSQL", "Prisma", "RBAC", "Audit Log", "HL7 / FHIR"])
    }
  },
  "mockup-hr": {
    description: "A sample HR back office paired with an employee app for checking in, requesting leave and viewing payslips.",
    screenshotAlt: "Overview page of the HR & PAYROLL SYSTEM (Mockup)",
    gallery: [
      { alt: "Overview — headcount statistics and AI attrition risk analysis", caption: "Overview — headcount statistics and AI attrition risk analysis" },
      { alt: "AI HR Assistant — answers policy questions and screens applications", caption: "AI HR Assistant — answers policy questions and screens applications" },
      { alt: "Attendance and AI detection of unusual clock-ins", caption: "Attendance and AI detection of unusual clock-ins" },
      { alt: "Employee profile with AI summary and course recommendations", caption: "Employee profile with AI summary and course recommendations" },
      { alt: "Leave calendar and approval page", caption: "Leave calendar and approval page" },
      { alt: "Payroll run — summary by department and payslips", caption: "Payroll run — summary by department and payslips" },
      { alt: "Employee app for clocking in", caption: "Employee app — check in with GPS and a photo" },
      { alt: "Employee list", caption: "Employee list" },
      { alt: "Leave approval", caption: "Leave approval" },
      { alt: "Payroll run", caption: "Payroll run" }
    ],
    galleryNote: MOCKUP_NOTE("All data is fictional."),
    detail: {
      overview:
        "Sample screens for an HR system for mid-sized organisations, bringing employee records, attendance, leave, OT and payroll together in one place. It pairs with an employee app for checking in with GPS and a photo, and the data reaches the HR system instantly.",
      challenges: [
        "Leave and OT requests live on paper or in chats, so approval status is hard to follow.",
        "HR has to combine attendance from several sources before running payroll every month.",
        "Calculating social security, tax and OT in Excel is error-prone.",
        "Management can't see an overview of staffing, absences, leave and lateness."
      ],
      solutions: [
        { title: "Central employee records", text: "History, positions, departments and documents in one place." },
        { title: "Employee app (Check-in)", text: "Check in with GPS location and a photo to stop buddy punching. Employees submit leave and view payslips themselves." },
        { title: "Payroll runs", text: "Combines hours, OT and allowances, deducts social security and tax, then exports the bank transfer file." },
        { title: "Workforce dashboard", text: "On-time attendance rate, OT hours and headcount by department." },
        { title: "Role-based access", text: "Employees, managers and HR see only the data they need." },
        { title: "AI HR Assistant", text: "Answers policy questions from company documents, screens applications, detects buddy punching and analyses attrition risk." }
      ],
      techStack: MOCKUP_STACK(["PostgreSQL", "Prisma", "RBAC", "Audit Log"])
    }
  },
  "mockup-crm": {
    description: "A sample CRM that tracks customers and deals from lead to close, with appointments and sales figures.",
    screenshotAlt: "Overview page of the CRM & SALES PIPELINE (Mockup)",
    gallery: [
      { alt: "Sales overview and AI daily summary", caption: "Sales overview and AI daily summary" },
      { alt: "AI Sales Assistant — lead scoring and email drafting", caption: "AI Sales Assistant — lead scoring and email drafting" },
      { alt: "Sales pipeline as a 5-stage Kanban board", caption: "Sales pipeline as a 5-stage Kanban board" },
      { alt: "Customer page and AI next-step suggestions", caption: "Customer page and AI next-step suggestions" },
      { alt: "Appointments and AI meeting summaries", caption: "Appointments and AI meeting summaries" },
      { alt: "Sales reports and AI end-of-quarter forecast", caption: "Sales reports and AI end-of-quarter forecast" },
      { alt: "Quotations with details and status", caption: "Quotations with details and status" },
      { alt: "Customer page on mobile", caption: "Customer page on mobile" }
    ],
    galleryNote: MOCKUP_NOTE("All data is fictional."),
    detail: {
      overview:
        "Sample screens for a CRM for corporate sales teams: every deal stage in the pipeline, follow-up appointments and sales against target on a single page.",
      challenges: [
        "Customer data is scattered across each salesperson's files and chats.",
        "Nobody can see which stage each deal is stuck in or what it is worth in total.",
        "Customer follow-ups are forgotten and contract renewals are missed.",
        "Managers have to wait until month end for sales reports."
      ],
      solutions: [
        { title: "Sales Pipeline", text: "Move deals through stages from Lead to Won and see the total value at each stage." },
        { title: "Customer and contact records", text: "Conversation history, quotations and contracts kept with each customer." },
        { title: "Appointments and follow-ups", text: "Reminders for today's tasks and anything overdue." },
        { title: "Quotations", text: "Create quotations in the system and track their approval status." },
        { title: "Sales reports", text: "Monthly sales, win rate and sales against target by team." },
        { title: "AI Sales Assistant", text: "Scores leads, suggests next steps, summarises meetings, drafts emails and forecasts sales." }
      ],
      techStack: MOCKUP_STACK(["PostgreSQL", "Prisma", "RBAC", "Audit Log"])
    }
  }
};
