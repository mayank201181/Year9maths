"use client";

import { useId, useState } from "react";
import {
  PlaneGrid,
  Readout,
  Segmented,
  Slider,
  Stepper,
  WidgetFrame,
  makePlane,
  type WidgetDef,
} from "./kit";

function fmtNum(v: number): string {
  const clean = Math.abs(v) < 1e-9 ? 0 : Number(v.toFixed(2));
  return clean < 0 ? `−${Math.abs(clean)}` : String(clean);
}

function formatLineEquation(m: number, c: number): string {
  if (m === 0) return `y = ${fmtNum(c)}`;
  const mPart = m === 1 ? "x" : m === -1 ? "−x" : `${fmtNum(m)}x`;
  if (c === 0) return `y = ${mPart}`;
  return c > 0 ? `y = ${mPart} + ${c}` : `y = ${mPart} − ${Math.abs(c)}`;
}

type Op = "<" | "<=" | ">" | ">=";

function opSymbol(op: Op): string {
  if (op === "<=") return "≤";
  if (op === ">=") return "≥";
  return op;
}

function clipHalfPlane(
  m: number,
  c: number,
  above: boolean,
  xMin: number,
  xMax: number,
  yMin: number,
  yMax: number,
): Array<[number, number]> {
  const box: Array<[number, number]> = [
    [xMin, yMin],
    [xMax, yMin],
    [xMax, yMax],
    [xMin, yMax],
  ];
  const fn = (x: number, y: number) => (above ? y - (m * x + c) : m * x + c - y);
  const out: Array<[number, number]> = [];
  for (let i = 0; i < box.length; i++) {
    const p = box[i];
    const q = box[(i + 1) % box.length];
    const vp = fn(p[0], p[1]);
    const vq = fn(q[0], q[1]);
    const pIn = vp >= -1e-9;
    const qIn = vq >= -1e-9;
    if (pIn) out.push(p);
    if (pIn !== qIn && Math.abs(vp - vq) > 1e-9) {
      const t = vp / (vp - vq);
      out.push([p[0] + t * (q[0] - p[0]), p[1] + t * (q[1] - p[1])]);
    }
  }
  return out;
}

function GradientInterceptLab() {
  const clipId = useId();
  const [m, setM] = useState(1.5);
  const [c, setC] = useState(-1);
  const [showParallel, setShowParallel] = useState<"off" | "on">("off");
  const [c2, setC2] = useState(2);

  const plane = makePlane({ width: 360, height: 280, xMin: -5, xMax: 5, yMin: -5, yMax: 5, pad: 24 });
  const { px, py } = plane;

  // Choose a clean gradient triangle that stays visible inside the frame
  const run = m === 0 ? 0 : Math.abs(m) <= 1.5 ? 2 : 1;
  const xStart = c > 1 && m > 0 ? -2 : c < -1 && m < 0 ? -2 : 0;
  const yStart = m * xStart + c;
  const xEnd = xStart + run;
  const yEnd = m * xEnd + c;

  const xInt = m !== 0 ? -c / m : null;
  const xIntText =
    xInt === null
      ? c === 0
        ? "All x (x-axis)"
        : "None"
      : `(${fmtNum(xInt)}, 0)`;

  const slopeWord =
    m > 0
      ? "uphill from left to right (positive gradient)"
      : m < 0
        ? "downhill from left to right (negative gradient)"
        : "completely horizontal (zero gradient)";

  return (
    <WidgetFrame
      title="y = mx + c & Parallel Line Explorer"
      tryThis={[
        "Set {{m = 0}} to see why {{y = c}} is always horizontal.",
        "Switch on the **parallel line** and slide {{c_2}} — watch how the tilt never changes!",
        "Make the line pass through {{(2, 5)}} with {{c = 1}}.",
      ]}
      caption={
        <span>
          <strong>{formatLineEquation(m, c)}</strong> slopes {slopeWord}. Each step of <strong>+1</strong> in{" "}
          <em>x</em> changes <em>y</em> by <strong>{fmtNum(m)}</strong>, and it crosses the <em>y</em>-axis at{" "}
          <strong>(0, {fmtNum(c)})</strong>.
        </span>
      }
    >
      <div className="grid gap-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
        <div className="min-w-0 rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 360 280"
            className="w-full h-auto block"
            role="img"
            aria-label={`Coordinate plane plotting ${formatLineEquation(m, c)}`}
          >
            <defs>
              <clipPath id={clipId}>
                <rect x={24} y={24} width={312} height={232} />
              </clipPath>
            </defs>
            <PlaneGrid plane={plane} step={1} />
            <g clipPath={`url(#${clipId})`}>
              {showParallel === "on" ? (
                <line
                  x1={px(-6)}
                  y1={py(m * -6 + c2)}
                  x2={px(6)}
                  y2={py(m * 6 + c2)}
                  stroke="var(--ink-2)"
                  strokeWidth={2.2}
                  strokeDasharray="6 4"
                />
              ) : null}

              {run > 0 ? (
                <g>
                  <polygon
                    points={`${px(xStart)},${py(yStart)} ${px(xEnd)},${py(yStart)} ${px(xEnd)},${py(yEnd)}`}
                    fill="var(--brand-soft)"
                    opacity={0.7}
                  />
                  <line
                    x1={px(xStart)}
                    y1={py(yStart)}
                    x2={px(xEnd)}
                    y2={py(yStart)}
                    stroke="var(--good)"
                    strokeWidth={2}
                    strokeDasharray="4 3"
                  />
                  <line
                    x1={px(xEnd)}
                    y1={py(yStart)}
                    x2={px(xEnd)}
                    y2={py(yEnd)}
                    stroke="var(--bad)"
                    strokeWidth={2}
                    strokeDasharray="4 3"
                  />
                  <text
                    x={(px(xStart) + px(xEnd)) / 2}
                    y={py(yStart) + (m >= 0 ? 14 : -6)}
                    fontSize={10.5}
                    fontWeight={700}
                    textAnchor="middle"
                    fill="var(--good)"
                  >
                    +{run}
                  </text>
                  <text
                    x={px(xEnd) + 6}
                    y={(py(yStart) + py(yEnd)) / 2 + 4}
                    fontSize={10.5}
                    fontWeight={700}
                    fill="var(--bad)"
                  >
                    {m > 0 ? `+${fmtNum(m * run)}` : fmtNum(m * run)}
                  </text>
                </g>
              ) : null}

              <line
                x1={px(-6)}
                y1={py(m * -6 + c)}
                x2={px(6)}
                y2={py(m * 6 + c)}
                stroke="var(--brand)"
                strokeWidth={3}
              />

              <circle cx={px(0)} cy={py(c)} r={5.5} fill="var(--bad)" stroke="var(--surface)" strokeWidth={1.5} />
              {xInt !== null && xInt >= -5 && xInt <= 5 ? (
                <circle cx={px(xInt)} cy={py(0)} r={4.5} fill="var(--good)" stroke="var(--surface)" strokeWidth={1.5} />
              ) : null}
            </g>
          </svg>
        </div>

        <div className="min-w-0 space-y-3">
          <Slider label="Gradient (m)" value={m} min={-3} max={3} step={0.5} onChange={setM} format={fmtNum} />
          <Slider label="y-intercept (c)" value={c} min={-4} max={4} step={1} onChange={setC} format={fmtNum} />

          <div className="space-y-2 pt-1">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Parallel line comparison</div>
            <Segmented
              label="Compare parallel line"
              value={showParallel}
              onChange={setShowParallel}
              options={[
                { value: "off", label: "Single line" },
                { value: "on", label: "Show parallel" },
              ]}
            />
            {showParallel === "on" ? (
              <Slider
                label="Parallel y-intercept (c₂)"
                value={c2}
                min={-4}
                max={4}
                step={1}
                onChange={setC2}
                format={fmtNum}
              />
            ) : null}
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <Readout label="Equation" value={formatLineEquation(m, c)} tone="brand" />
            <Readout label="y-intercept" value={`(0, ${fmtNum(c)})`} tone="bad" />
            <Readout label="x-intercept" value={xIntText} tone="good" />
            <Readout
              label={showParallel === "on" ? "Parallel line" : "Rise / Run"}
              value={showParallel === "on" ? formatLineEquation(m, c2) : fmtNum(m)}
              tone="ink"
            />
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

function InequalityRegionLab() {
  const clipId = useId();
  const [op, setOp] = useState<Op>("<=");
  const [m, setM] = useState(1);
  const [c, setC] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);

  const plane = makePlane({ width: 360, height: 280, xMin: -5, xMax: 5, yMin: -5, yMax: 5, pad: 24 });
  const { px, py } = plane;

  const inclusive = op === "<=" || op === ">=";
  const above = op === ">" || op === ">=";
  const rhs = m * tx + c;
  const diff = ty - rhs;
  const onLine = Math.abs(diff) < 1e-9;
  const inside =
    op === "<"
      ? ty < rhs - 1e-9
      : op === "<="
        ? ty <= rhs + 1e-9
        : op === ">"
          ? ty > rhs + 1e-9
          : ty >= rhs - 1e-9;

  const polyPts = clipHalfPlane(m, c, above, -5, 5, -5, 5)
    .map(([x, y]) => `${px(x).toFixed(1)},${py(y).toFixed(1)}`)
    .join(" ");

  const rhsExpr = formatLineEquation(m, c).replace(/^y = /, "");
  const ineqText = `y ${opSymbol(op)} ${rhsExpr}`;

  return (
    <WidgetFrame
      title="Inequality Region & Test-Point Lab"
      tryThis={[
        "Move the test point onto the boundary line (e.g. {{(0, 1)}} for {{y <= x + 1}}), then switch between {{<=}} and {{<}}.",
        "Test {{(0, 0)}} when {{c = 0}} — see why you need a different test point when the line passes through the origin!",
      ]}
      caption={
        <span>
          Checking <strong>({fmtNum(tx)}, {fmtNum(ty)})</strong> in <strong>{ineqText}</strong>:{" "}
          {fmtNum(ty)} {opSymbol(op)} {fmtNum(rhs)} is{" "}
          <strong className={inside ? "text-good" : "text-bad"}>{inside ? "TRUE (inside region)" : "FALSE (outside region)"}</strong>
          {onLine
            ? inclusive
              ? " — it sits directly on the SOLID boundary, so it IS included."
              : " — it sits directly on the DASHED boundary, so it is EXCLUDED!"
            : "."}
        </span>
      }
    >
      <div className="grid gap-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
        <div className="min-w-0 rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 360 280"
            className="w-full h-auto block"
            role="img"
            aria-label={`Inequality region graph for ${ineqText} with test point (${tx}, ${ty})`}
          >
            <defs>
              <clipPath id={clipId}>
                <rect x={24} y={24} width={312} height={232} />
              </clipPath>
            </defs>
            <PlaneGrid plane={plane} step={1} />
            <g clipPath={`url(#${clipId})`}>
              {polyPts ? <polygon points={polyPts} fill="var(--brand-soft)" opacity={0.75} /> : null}
              <line
                x1={px(-6)}
                y1={py(m * -6 + c)}
                x2={px(6)}
                y2={py(m * 6 + c)}
                stroke="var(--brand)"
                strokeWidth={2.8}
                strokeDasharray={inclusive ? undefined : "7 5"}
              />
              <circle
                cx={px(tx)}
                cy={py(ty)}
                r={6.5}
                fill={inside ? "var(--good)" : "var(--surface)"}
                stroke={inside ? "var(--surface)" : "var(--bad)"}
                strokeWidth={2.5}
              />
              <text
                x={px(tx) + (tx >= 3 ? -10 : 10)}
                y={py(ty) - 9}
                fontSize={11}
                fontWeight={800}
                textAnchor={tx >= 3 ? "end" : "start"}
                fill={inside ? "var(--good)" : "var(--bad)"}
              >
                ({fmtNum(tx)}, {fmtNum(ty)}) {inside ? "✓" : "✗"}
              </text>
            </g>
          </svg>
        </div>

        <div className="min-w-0 space-y-3">
          <div className="space-y-1.5">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Inequality sign</div>
            <Segmented
              label="Inequality symbol"
              value={op}
              onChange={setOp}
              options={[
                { value: "<", label: "<" },
                { value: "<=", label: "≤" },
                { value: ">", label: ">" },
                { value: ">=", label: "≥" },
              ]}
            />
          </div>

          <Slider label="Gradient (m)" value={m} min={-2} max={2} step={0.5} onChange={setM} format={fmtNum} />
          <Slider label="y-intercept (c)" value={c} min={-3} max={3} step={1} onChange={setC} format={fmtNum} />

          <div className="rounded-xl border border-line bg-surface-2 p-3 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Move test point</div>
            <Stepper label="Test x" value={tx} min={-4} max={4} onChange={setTx} format={fmtNum} />
            <Stepper label="Test y" value={ty} min={-4} max={4} onChange={setTy} format={fmtNum} />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Readout label="Boundary" value={inclusive ? "Solid (───)" : "Dashed (- - -)"} tone="brand" />
            <Readout label="Test Result" value={inside ? "Inside ✓" : "Outside ✗"} tone={inside ? "good" : "bad"} />
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "gradient-intercept-lab",
    title: "y = mx + c & Parallel Line Explorer",
    blurb: "Drag gradient m and y-intercept c to see live rise/run triangles, intercepts, and parallel lines.",
    Component: GradientInterceptLab,
  },
  {
    id: "inequality-region-lab",
    title: "Inequality Region & Test-Point Lab",
    blurb: "Toggle solid vs dashed boundaries and move a test point across the plane to verify which side satisfies the inequality.",
    Component: InequalityRegionLab,
  },
];
