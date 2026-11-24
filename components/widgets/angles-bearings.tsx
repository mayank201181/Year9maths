"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

const POLY_NAMES: Record<number, string> = {
  3: "Equilateral Triangle",
  4: "Square",
  5: "Regular Pentagon",
  6: "Regular Hexagon",
  7: "Regular Heptagon",
  8: "Regular Octagon",
  9: "Regular Nonagon",
  10: "Regular Decagon",
  11: "Regular Hendecagon",
  12: "Regular Dodecagon",
};

function fmtDeg(v: number): string {
  return Number.isInteger(v) ? `${v}°` : `${v.toFixed(1)}°`;
}

function pad3(deg: number): string {
  const norm = ((Math.round(deg) % 360) + 360) % 360;
  return `${String(norm).padStart(3, "0")}°`;
}

function bearingArcPath(cx: number, cy: number, r: number, deg: number): string | null {
  const d = ((deg % 360) + 360) % 360;
  if (d < 1) return null;
  const rad = (d * Math.PI) / 180;
  const sx = cx;
  const sy = cy - r;
  const ex = cx + r * Math.sin(rad);
  const ey = cy - r * Math.cos(rad);
  const largeArc = d > 180 ? 1 : 0;
  return `M ${sx.toFixed(1)},${sy.toFixed(1)} A ${r},${r} 0 ${largeArc} 1 ${ex.toFixed(1)},${ey.toFixed(1)}`;
}

function compassLabel(deg: number): string {
  const d = ((deg % 360) + 360) % 360;
  if (d === 0) return "Due North (N)";
  if (d === 45) return "North-East (NE)";
  if (d === 90) return "Due East (E)";
  if (d === 135) return "South-East (SE)";
  if (d === 180) return "Due South (S)";
  if (d === 225) return "South-West (SW)";
  if (d === 270) return "Due West (W)";
  if (d === 315) return "North-West (NW)";
  if (d < 90) return "North-East quadrant";
  if (d < 180) return "South-East quadrant";
  if (d < 270) return "South-West quadrant";
  return "North-West quadrant";
}

function PolygonAngleLab() {
  const [n, setN] = useState(5);
  const [showTriangles, setShowTriangles] = useState<"on" | "off">("on");

  const cx = 148;
  const cy = 128;
  const r = 82;

  // Place a flat horizontal base at the bottom so extending it rightward shows interior + exterior cleanly
  const startAngle = Math.PI / 2 - Math.PI / n; // bottom-right vertex
  const verts = Array.from({ length: n }, (_, i) => {
    const theta = startAngle - (2 * Math.PI * i) / n;
    return [cx + r * Math.cos(theta), cy + r * Math.sin(theta)] as const;
  });

  // v0 is bottom-right, v(n-1) is bottom-left (same y!), v1 is next vertex counter-clockwise (up-right/up-left)
  const v0 = verts[0];
  const v1 = verts[1];
  const topIndex = Math.floor(n / 2);
  const vTop = verts[topIndex];

  const extDeg = 360 / n;
  const intDeg = 180 - extDeg;
  const sumDeg = (n - 2) * 180;
  const tessellates = n === 3 || n === 4 || n === 6;

  // Wedge arcs at bottom-right vertex v0:
  // Horizontal left is angle π; horizontal right (extended side) is angle 0; edge v0->v1 is at angle -extRad
  const arcR = 26;
  const extRad = (extDeg * Math.PI) / 180;
  const vx = v0[0];
  const vy = v0[1];
  const edgePtX = vx + arcR * Math.cos(-extRad);
  const edgePtY = vy + arcR * Math.sin(-extRad);
  // Exterior wedge: from extended right (vx + arcR, vy) counter-clockwise (sweep=0) to (edgePtX, edgePtY)
  const extWedge = `M ${vx.toFixed(1)},${vy.toFixed(1)} L ${(vx + arcR).toFixed(1)},${vy.toFixed(1)} A ${arcR},${arcR} 0 0 0 ${edgePtX.toFixed(1)},${edgePtY.toFixed(1)} Z`;
  // Interior wedge: from (edgePtX, edgePtY) counter-clockwise (sweep=0) to left (vx - arcR, vy)
  const intWedge = `M ${vx.toFixed(1)},${vy.toFixed(1)} L ${edgePtX.toFixed(1)},${edgePtY.toFixed(1)} A ${arcR},${arcR} 0 0 0 ${(vx - arcR).toFixed(1)},${vy.toFixed(1)} Z`;

  const polyPoints = verts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");

  return (
    <WidgetFrame
      title="Regular Polygon Angle & Triangulation Explorer"
      tryThis={[
        "Increase {{n}} from {{3}} to {{12}} and watch the **exterior angle** shrink while the **interior angle** grows toward {{180°}}.",
        "Spot the ONLY three regular polygons whose interior angle divides {{360°}} evenly (so they tessellate alone!).",
      ]}
      caption={
        <span>
          A <strong>{POLY_NAMES[n]}</strong> splits into <strong>{n - 2}</strong> triangles (interior sum{" "}
          <strong>{sumDeg}°</strong>). Each exterior angle is <strong>{fmtDeg(extDeg)}</strong> and each interior angle
          is <strong>{fmtDeg(intDeg)}</strong> ({fmtDeg(intDeg)} + {fmtDeg(extDeg)} = 180°).{" "}
          {tessellates ? (
            <strong className="text-good">
              Tessellates alone ({360 / intDeg} fit around a vertex)!
            </strong>
          ) : (
            <span>Does not tessellate alone because {fmtDeg(intDeg)} does not divide 360° evenly.</span>
          )}
        </span>
      }
    >
      <div className="grid gap-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
        <div className="min-w-0 rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 340 250"
            className="w-full h-auto block"
            role="img"
            aria-label={`${POLY_NAMES[n]} showing interior angle ${fmtDeg(intDeg)} and exterior angle ${fmtDeg(extDeg)}`}
          >
            <polygon
              points={polyPoints}
              fill="var(--brand-soft)"
              opacity={0.55}
              stroke="var(--brand)"
              strokeWidth={2.5}
            />
            {showTriangles === "on"
              ? verts.map(([x, y], idx) => {
                  const prev = (topIndex - 1 + n) % n;
                  const next = (topIndex + 1) % n;
                  if (idx === topIndex || idx === prev || idx === next) return null;
                  return (
                    <line
                      key={idx}
                      x1={vTop[0]}
                      y1={vTop[1]}
                      x2={x}
                      y2={y}
                      stroke="var(--ink-2)"
                      strokeWidth={1.5}
                      strokeDasharray="5 4"
                    />
                  );
                })
              : null}
            <line
              x1={vx}
              y1={vy}
              x2={Math.min(326, vx + 88)}
              y2={vy}
              stroke="var(--bad)"
              strokeWidth={2.2}
              strokeDasharray="5 4"
            />
            <path d={intWedge} fill="var(--good-soft)" stroke="var(--good)" strokeWidth={1.8} />
            <path d={extWedge} fill="var(--bad-soft)" stroke="var(--bad)" strokeWidth={1.8} />
            <circle cx={v1[0]} cy={v1[1]} r={3} fill="var(--brand)" />
            <circle cx={vx} cy={vy} r={4} fill="var(--ink)" />
            <text
              x={vx - 30}
              y={vy - 10}
              fontSize={11}
              fontWeight={800}
              textAnchor="end"
              fill="var(--good)"
            >
              {fmtDeg(intDeg)}
            </text>
            <text
              x={Math.min(326, vx + 34)}
              y={vy - 8}
              fontSize={11}
              fontWeight={800}
              fill="var(--bad)"
            >
              {fmtDeg(extDeg)}
            </text>
            <text x={148} y={24} fontSize={12} fontWeight={800} textAnchor="middle" fill="var(--ink)">
              {POLY_NAMES[n]} ({n - 2} triangles)
            </text>
          </svg>
        </div>

        <div className="min-w-0 space-y-3">
          <Stepper label="Number of sides (n)" value={n} min={3} max={12} onChange={setN} />
          <div className="space-y-1.5">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Triangulation diagonals</div>
            <Segmented
              label="Show triangulation diagonals"
              value={showTriangles}
              onChange={setShowTriangles}
              options={[
                { value: "on", label: "Show (n − 2) △s" },
                { value: "off", label: "Hide diagonals" },
              ]}
            />
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <Readout label="Interior sum" value={`${sumDeg}°`} tone="brand" />
            <Readout label="Exterior sum" value="360°" tone="ink" />
            <Readout label="1 Interior angle" value={fmtDeg(intDeg)} tone="good" />
            <Readout label="1 Exterior angle" value={fmtDeg(extDeg)} tone="bad" />
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

function BearingBackBearingLab() {
  const [bearing, setBearing] = useState(60);

  const back = (bearing + 180) % 360;
  const rad = (bearing * Math.PI) / 180;
  const halfLen = 54;
  const ax = 180 - halfLen * Math.sin(rad);
  const ay = 148 + halfLen * Math.cos(rad);
  const bx = 180 + halfLen * Math.sin(rad);
  const by = 148 - halfLen * Math.cos(rad);

  const arcA = bearingArcPath(ax, ay, 24, bearing);
  const arcB = bearingArcPath(bx, by, 24, back);

  const ruleText = bearing < 180 ? `${pad3(bearing)} + 180°` : `${pad3(bearing)} − 180°`;
  const innerAngle = bearing <= 180 ? bearing : 360 - bearing;
  const coInt = 180 - innerAngle;

  return (
    <WidgetFrame
      title="Three-Figure Bearing & Back Bearing Simulator"
      tryThis={[
        "Drag the bearing past {{180°}} and watch the shortcut switch from **+180°** to **−180°**.",
        "Set the bearing to {{225°}} (SW) — notice the back bearing becomes **{{045°}}** (NE) with its leading zero!",
      ]}
      caption={
        <span>
          From <strong>A</strong>, point <strong>B</strong> lies on bearing <strong>{pad3(bearing)}</strong> (
          {compassLabel(bearing)}). Because both North lines are parallel, the co-interior angle inside the pair is{" "}
          <strong>{coInt}°</strong>, giving the reverse bearing of <strong>A from B</strong> as{" "}
          <strong>{pad3(back)}</strong> ({ruleText}).
        </span>
      }
    >
      <div className="grid gap-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
        <div className="min-w-0 rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 360 270"
            className="w-full h-auto block"
            role="img"
            aria-label={`Bearing diagram showing bearing of B from A is ${pad3(bearing)} and back bearing of A from B is ${pad3(back)}`}
          >
            <circle cx={180} cy={148} r={104} fill="var(--surface-2)" stroke="var(--line)" strokeWidth={1.2} />

            {/* Parallel North line at A */}
            <line x1={ax} y1={ay} x2={ax} y2={ay - 52} stroke="var(--ink)" strokeWidth={2} />
            <polygon points={`${ax},${ay - 60} ${ax - 4.5},${ay - 49} ${ax + 4.5},${ay - 49}`} fill="var(--ink)" />
            <text x={ax} y={ay - 64} fontSize={11} fontWeight={800} textAnchor="middle" fill="var(--ink)">
              N
            </text>

            {/* Parallel North line at B */}
            <line x1={bx} y1={by} x2={bx} y2={by - 52} stroke="var(--ink)" strokeWidth={2} />
            <polygon points={`${bx},${by - 60} ${bx - 4.5},${by - 49} ${bx + 4.5},${by - 49}`} fill="var(--ink)" />
            <text x={bx} y={by - 64} fontSize={11} fontWeight={800} textAnchor="middle" fill="var(--ink)">
              N
            </text>

            {/* Connecting ray A -> B */}
            <line x1={ax} y1={ay} x2={bx} y2={by} stroke="var(--brand)" strokeWidth={3} />

            {/* Clockwise bearing arcs */}
            {arcA ? <path d={arcA} fill="none" stroke="var(--brand)" strokeWidth={2.6} /> : null}
            {arcB ? (
              <path d={arcB} fill="none" stroke="var(--bad)" strokeWidth={2.4} strokeDasharray="4 3" />
            ) : null}

            <circle cx={ax} cy={ay} r={5} fill="var(--brand)" stroke="var(--surface)" strokeWidth={1.5} />
            <circle cx={bx} cy={by} r={5} fill="var(--bad)" stroke="var(--surface)" strokeWidth={1.5} />

            <text
              x={ax + (ax <= bx ? -14 : 14)}
              y={ay + 16}
              fontSize={12.5}
              fontWeight={800}
              textAnchor="middle"
              fill="var(--brand)"
            >
              A
            </text>
            <text
              x={bx + (bx >= ax ? 14 : -14)}
              y={by + 16}
              fontSize={12.5}
              fontWeight={800}
              textAnchor="middle"
              fill="var(--bad)"
            >
              B
            </text>
          </svg>
        </div>

        <div className="min-w-0 space-y-3">
          <Slider
            label="Bearing of B from A"
            value={bearing}
            min={0}
            max={355}
            step={5}
            onChange={setBearing}
            format={pad3}
          />

          <div className="space-y-1.5">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Quick presets</div>
            <div className="flex flex-wrap gap-1.5">
              {[45, 120, 225, 310].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setBearing(preset)}
                  className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                    bearing === preset
                      ? "border-brand bg-brand-soft text-brand"
                      : "border-line bg-surface-2 text-ink-2 hover:text-ink"
                  }`}
                >
                  {pad3(preset)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <Readout label="B from A" value={pad3(bearing)} tone="brand" />
            <Readout label="A from B (Back)" value={pad3(back)} tone="bad" />
            <Readout label="Shortcut rule" value={bearing < 180 ? "+180°" : "−180°"} tone="good" />
            <Readout label="Co-interior ∠" value={`${coInt}°`} tone="ink" />
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "polygon-angle-lab",
    title: "Regular Polygon Angle & Triangulation Explorer",
    blurb: "Step through regular polygons from triangle to dodecagon to watch triangulation, interior angles, and exterior angles update live.",
    Component: PolygonAngleLab,
  },
  {
    id: "bearing-backbearing-lab",
    title: "Three-Figure Bearing & Back Bearing Simulator",
    blurb: "Rotate the bearing of B from A around 360° to see parallel North lines and the ±180° back-bearing rule in action.",
    Component: BearingBackBearingLab,
  },
];
