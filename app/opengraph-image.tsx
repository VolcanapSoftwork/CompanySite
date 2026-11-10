import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Share card for the homepage (LINE, Facebook, X). Latin text only, so the
// card renders without bundling a Thai font.
export const alt = "VOLCANAP SOFTWORK — custom software and web systems for business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const mark = await readFile(join(process.cwd(), "public", "volcanap-vcn.png"));
  const markSrc = `data:image/png;base64,${mark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#ffffff",
          color: "#15171c",
          fontFamily: "sans-serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={markSrc} width={96} height={96} style={{ borderRadius: 20 }} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: 1 }}>VOLCANAP SOFTWORK</div>
            <div style={{ fontSize: 26, color: "#5b616e" }}>Software House</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: 980 }}>
            Custom software and web systems for your business
          </div>
          <div style={{ fontSize: 28, color: "#5b616e" }}>
            Web apps · CRM · HR · Clinic systems · Dashboards · AI automation
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 26, color: "#ea7530", fontWeight: 700 }}>volcanap.com</div>
          <div style={{ display: "flex", width: 240, height: 10, borderRadius: 5, background: "#ea7530" }} />
        </div>
      </div>
    ),
    size
  );
}
