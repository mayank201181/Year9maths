import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2f6fdb 0%, #4f46e5 100%)",
        }}
      >
        <div style={{ color: "#ffffff", fontSize: 78, fontWeight: 900, lineHeight: 1 }}>∑</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 12,
            padding: "3px 14px",
            borderRadius: 999,
            background: "#ffffff",
            color: "#2f6fdb",
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: 1.2,
          }}
        >
          Y9 MATHS
        </div>
      </div>
    ),
    { ...size },
  );
}
