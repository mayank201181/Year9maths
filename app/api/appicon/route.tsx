import { ImageResponse } from "next/og";

export const runtime = "nodejs";

const MIN = 48;
const MAX = 1024;
const FALLBACK = 512;

function sizeFrom(raw: string | null): number {
  const n = Number(raw);
  if (!raw || !Number.isFinite(n)) return FALLBACK;
  return Math.round(Math.min(MAX, Math.max(MIN, n)));
}

export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const size = sizeFrom(searchParams.get("size"));
  const maskable = searchParams.get("maskable") === "1";

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
          borderRadius: maskable ? 0 : Math.round(size * 0.22),
        }}
      >
        <div style={{ color: "#ffffff", fontSize: Math.round(size * 0.44), fontWeight: 900, lineHeight: 1 }}>∑</div>
        <div
          style={{
            display: "flex",
            marginTop: Math.round(size * 0.06),
            padding: `${Math.round(size * 0.015)}px ${Math.round(size * 0.07)}px`,
            borderRadius: 999,
            background: "#ffffff",
            color: "#2f6fdb",
            fontSize: Math.round(size * 0.105),
            fontWeight: 800,
          }}
        >
          Y9 MATHS
        </div>
      </div>
    ),
    { width: size, height: size },
  );
}
