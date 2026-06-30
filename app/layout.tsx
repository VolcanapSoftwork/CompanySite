import type { Metadata } from "next";
import { Noto_Sans_Thai, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://volcanap-softwork.com"),
  title: "VOLCANAP SOFTWORK | Software House",
  description:
    "VOLCANAP SOFTWORK รับออกแบบและพัฒนาเว็บไซต์ เว็บแอป ระบบองค์กร Dashboard และ AI workflow แบบครบวงจร",
  icons: {
    icon: "/volcanap-logo.png",
    apple: "/volcanap-logo.png"
  },
  openGraph: {
    title: "VOLCANAP SOFTWORK | Software House",
    description:
      "Software House สำหรับเว็บและระบบองค์กร Full Function ตั้งแต่ UX/UI, Next.js, Backend, Security, Dashboard จนถึง Deployment",
    images: ["/volcanap-logo.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" data-theme="volcanap" className={`${sora.variable} ${notoSansThai.variable}`}>
      <body>{children}</body>
    </html>
  );
}
