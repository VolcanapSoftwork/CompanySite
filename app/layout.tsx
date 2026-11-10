import type { Metadata, Viewport } from "next";
import { Anuphan } from "next/font/google";
import "./globals.css";
import { SmoothAnchors } from "./components/SmoothAnchors";
import { COMPANY_NAME, SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "./site";

// One Thai/Latin family for display and body
const anuphan = Anuphan({
  subsets: ["thai", "latin"],
  variable: "--font-sans",
  display: "swap"
});

// Site-wide defaults; pages set their own title, description and canonical
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${COMPANY_NAME}`
  },
  description: SITE_DESCRIPTION,
  applicationName: COMPANY_NAME,
  keywords: [
    "software house",
    "รับพัฒนาระบบ",
    "รับทำเว็บแอป",
    "custom software",
    "ระบบ CRM",
    "ระบบ HR",
    "ระบบคลินิก",
    "dashboard",
    "AI automation"
  ],
  icons: {
    icon: "/volcanap-vcn.png",
    apple: "/volcanap-vcn.png"
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    siteName: COMPANY_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION
  },
  formatDetection: { telephone: false, email: false, address: false }
};

export const viewport: Viewport = {
  themeColor: "#ffffff"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={anuphan.variable}>
      <body>
        {children}
        <SmoothAnchors />
      </body>
    </html>
  );
}
