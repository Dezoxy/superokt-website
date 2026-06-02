import { ImageResponse } from "next/og"

export const alt = "superokt — Simple, practical IT systems for businesses"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const mark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
  <g stroke="#404040" stroke-width="1.8" stroke-linecap="round">
    <line x1="14.37" y1="16.76" x2="11.21" y2="14.95" />
    <line x1="13.5" y1="20" x2="9.9" y2="20" />
    <line x1="14.37" y1="23.24" x2="11.21" y2="25.05" />
    <line x1="24.99" y1="15.83" x2="27.78" y2="13.5" />
    <line x1="24.99" y1="24.17" x2="27.78" y2="26.5" />
  </g>
  <g fill="#404040">
    <circle cx="8.7" cy="13.5" r="2.3" /><circle cx="7" cy="20" r="2.3" /><circle cx="8.7" cy="26.5" r="2.3" />
    <circle cx="30" cy="11.64" r="2.3" /><circle cx="30" cy="28.36" r="2.3" />
  </g>
  <circle cx="20" cy="20" r="5" fill="none" stroke="#404040" stroke-width="3" />
</svg>`

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#f6f1e8",
        padding: "90px 96px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {/* biome-ignore lint/performance/noImgElement: satori (next/og) renders a raw img; next/image is not usable in an OG image route */}
        <img
          alt=""
          width="64"
          height="64"
          src={`data:image/svg+xml;utf8,${encodeURIComponent(mark)}`}
        />
        <div
          style={{
            fontSize: "34px",
            letterSpacing: "8px",
            color: "#404040",
          }}
        >
          SUPEROKT
        </div>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: "64px",
          fontWeight: 600,
          color: "#0a0a0a",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          maxWidth: "920px",
        }}
      >
        Simple, practical IT systems for businesses.
      </div>
      <div style={{ display: "flex", fontSize: "26px", color: "#525252" }}>superokt.com</div>
    </div>,
    { ...size },
  )
}
