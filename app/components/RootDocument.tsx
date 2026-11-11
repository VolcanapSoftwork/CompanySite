import type { Metadata, Viewport } from "next";
import { Anuphan } from "next/font/google";
import "../globals.css";
import { SmoothAnchors } from "./SmoothAnchors";
import { COMPANY_NAME, SITE_DESCRIPTION, SITE_TITLE, SITE_URL, type Lang } from "../site";

// One Thai/Latin family for display and body
const anuphan = Anuphan({
  subsets: ["thai", "latin"],
  variable: "--font-sans",
  display: "swap"
});

const KEYWORDS: Record<Lang, string[]> = {
  th: ["software house", "รับพัฒนาระบบ", "รับทำเว็บแอป", "custom software", "ระบบ CRM", "ระบบ HR", "ระบบคลินิก", "dashboard", "AI automation"],
  en: ["software house", "custom software development", "web application", "CRM", "HR system", "clinic system", "dashboard", "AI automation", "Thailand"]
};

/** Site-wide defaults for one language; pages set their own title, description and canonical */
export function rootMetadata(lang: Lang): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: SITE_TITLE[lang],
      template: `%s | ${COMPANY_NAME}`
    },
    description: SITE_DESCRIPTION[lang],
    applicationName: COMPANY_NAME,
    keywords: KEYWORDS[lang],
    icons: {
      icon: "/volcanap-vcn.png",
      apple: "/volcanap-vcn.png"
    },
    openGraph: {
      type: "website",
      locale: lang === "en" ? "en_US" : "th_TH",
      alternateLocale: lang === "en" ? "th_TH" : "en_US",
      siteName: COMPANY_NAME,
      title: SITE_TITLE[lang],
      description: SITE_DESCRIPTION[lang]
    },
    twitter: {
      card: "summary_large_image",
      title: SITE_TITLE[lang],
      description: SITE_DESCRIPTION[lang]
    },
    formatDetection: { telephone: false, email: false, address: false }
  };
}

export const rootViewport: Viewport = {
  themeColor: "#ffffff"
};

export function RootDocument({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} className={anuphan.variable}>
      <body>
        {children}
        <SmoothAnchors />
      </body>
    </html>
  );
}
