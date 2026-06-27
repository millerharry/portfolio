import { ImageResponse } from "next/og";

export const alt = "Harry Miller — Full-stack Product Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0B",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* accent bloom */}
        <div
          style={{
            position: "absolute",
            top: -180,
            left: 320,
            width: 700,
            height: 480,
            background:
              "radial-gradient(circle, rgba(124,92,255,0.45), rgba(34,211,238,0.10), transparent 70%)",
            filter: "blur(40px)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #9A80FF, #6B4DF0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
              color: "white",
            }}
          >
            H
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#A1A1AA",
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Harry Miller
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: "#F4F4F5",
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 940,
              display: "flex",
            }}
          >
            I design &amp; ship production-grade products, end-to-end.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 30,
              color: "#A1A1AA",
              display: "flex",
            }}
          >
            Full-stack Product Engineer · Web, mobile &amp; AI
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 18px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#F4F4F5",
              fontSize: 24,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "#00D07C",
                display: "flex",
              }}
            />
            Available July 2026 · Melbourne · Australian work rights
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
