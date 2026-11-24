"use client";

import { useState } from "react";
import { M, Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

function fmtLin(a: number, b: number): string {
  const xPart = a === 1 ? "x" : a === -1 ? "-x" : `${a}x`;
  if (b === 0) return xPart;
  return `${xPart} ${b > 0 ? "+" : "-"} ${Math.abs(b)}`;
}

function fmtQuad(A: number, B: number, C: number): string {
  const parts: string[] = [];
  if (A !== 0) parts.push(A === 1 ? "x^2" : A === -1 ? "-x^2" : `${A}x^2`);
  if (B !== 0) {
    const absB = Math.abs(B);
    const term = absB === 1 ? "x" : `${absB}x`;
    parts.push(parts.length ? `${B > 0 ? "+" : "-"} ${term}` : B < 0 ? `-${term}` : term);
  }
  if (C !== 0) {
    parts.push(parts.length ? `${C > 0 ? "+" : "-"} ${Math.abs(C)}` : `${C}`);
  }
  return parts.length ? parts.join(" ") : "0";
}

function fmtSignedTerm(n: number, suffix = ""): string {
  if (n === 0) return "0";
  const sign = n > 0 ? "+" : "−";
  const mag = Math.abs(n);
  if (suffix && mag === 1) return `${sign}${suffix}`;
  return `${sign}${mag}${suffix}`;
}

function AreaGridExpander() {
  const [a, setA] = useState(2);
  const [b, setB] = useState(3);
  const [c, setC] = useState(1);
  const [d, setD] = useState(-4);
  const [testX, setTestX] = useState(3);

  const ac = a * c;
  const ad = a * d;
  const bc = b * c;
  const bd = b * d;
  const mid = ad + bc;

  const lhsVal = (a * testX + b) * (c * testX + d);
  const rhsVal = ac * testX * testX + mid * testX + bd;

  const isDots = a === c && b === -d && b !== 0;
  const isPerfectSq = a === c && b === d;

  const topLeftLabel = `${ac === 1 ? "" : ac}x²`;
  const topRightLabel = fmtSignedTerm(bc, "x");
  const botLeftLabel = fmtSignedTerm(ad, "x");
  const botRightLabel = fmtSignedTerm(bd);

  return (
    <WidgetFrame
      title="Area-Grid Double Bracket Expander"
      tryThis={[
        "Make the middle {{x}}-term disappear completely (Difference of Two Squares)!",
        "Set {{(2x - 3)(2x - 3)}} and notice why the constant term is positive.",
        "Slide {{x}} to check that the bracket product ALWAYS matches the expanded quadratic.",
      ]}
      caption={
        <span>
          <strong>
            <M>{`(${fmtLin(a, b)})(${fmtLin(c, d)}) = ${fmtQuad(ac, mid, bd)}`}</M>
          </strong>
          {isDots
            ? " — Difference of Two Squares! The diagonal x-terms cancel to 0."
            : isPerfectSq
              ? " — Perfect Square! Both diagonal cells are identical, doubling the middle term."
              : ` — Diagonal x-terms combine: ${fmtSignedTerm(ad, "x")} and ${fmtSignedTerm(bc, "x")} make ${mid === 0 ? "0" : fmtSignedTerm(mid, "x")}.`}
        </span>
      }
    >
      <div className="space-y-4 min-w-0">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => {
              setA(1);
              setB(4);
              setC(1);
              setD(-4);
            }}
          >
            Difference of Squares
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => {
              setA(2);
              setB(-3);
              setC(2);
              setD(-3);
            }}
          >
            Perfect Square
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => {
              setA(2);
              setB(3);
              setC(1);
              setD(-4);
            }}
          >
            Mixed Signs
          </button>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-2 rounded-xl border border-line bg-surface-2 p-3 min-w-0">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">First Bracket ({fmtLin(a, b)})</div>
            <Stepper label="Coefficient a" value={a} min={1} max={4} onChange={setA} />
            <Stepper label="Constant b" value={b} min={-6} max={6} onChange={setB} />
          </div>
          <div className="space-y-2 rounded-xl border border-line bg-surface-2 p-3 min-w-0">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Second Bracket ({fmtLin(c, d)})</div>
            <Stepper label="Coefficient c" value={c} min={1} max={4} onChange={setC} />
            <Stepper label="Constant d" value={d} min={-6} max={6} onChange={setD} />
          </div>
        </div>

        <div className="rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 460 210"
            className="w-full h-auto"
            role="img"
            aria-label="Interactive 2 by 2 area grid for expanding double brackets"
          >
            <rect x="0" y="0" width="460" height="210" rx="10" fill="var(--surface)" />
            <text x="64" y="34" textAnchor="middle" fontSize="15" fontWeight="700" fill="var(--ink-2)">
              ×
            </text>
            <text x="172" y="34" textAnchor="middle" fontSize="15" fontWeight="700" fill="var(--brand)">
              {a === 1 ? "x" : `${a}x`}
            </text>
            <text x="342" y="34" textAnchor="middle" fontSize="15" fontWeight="700" fill={b < 0 ? "var(--bad)" : "var(--brand)"}>
              {b >= 0 ? `+${b}` : `−${Math.abs(b)}`}
            </text>
            <text x="64" y="88" textAnchor="middle" fontSize="15" fontWeight="700" fill="var(--brand)">
              {c === 1 ? "x" : `${c}x`}
            </text>
            <text x="64" y="160" textAnchor="middle" fontSize="15" fontWeight="700" fill={d < 0 ? "var(--bad)" : "var(--brand)"}>
              {d >= 0 ? `+${d}` : `−${Math.abs(d)}`}
            </text>

            {/* 4 grid cells */}
            <rect x="94" y="46" width="156" height="72" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" strokeWidth="2" />
            <rect x="262" y="46" width="160" height="72" rx="8" fill="var(--good-soft)" stroke="var(--good)" strokeWidth="2" />
            <rect x="94" y="126" width="156" height="72" rx="8" fill="var(--good-soft)" stroke="var(--good)" strokeWidth="2" />
            <rect
              x="262"
              y="126"
              width="160"
              height="72"
              rx="8"
              fill={bd < 0 ? "var(--bad-soft)" : "var(--surface-2)"}
              stroke={bd < 0 ? "var(--bad)" : "var(--line)"}
              strokeWidth="2"
            />

            <text x="172" y="88" textAnchor="middle" fontSize="20" fontWeight="800" fill="var(--ink)">
              {topLeftLabel}
            </text>
            <text x="342" y="88" textAnchor="middle" fontSize="20" fontWeight="800" fill="var(--good)">
              {topRightLabel}
            </text>
            <text x="172" y="168" textAnchor="middle" fontSize="20" fontWeight="800" fill="var(--good)">
              {botLeftLabel}
            </text>
            <text x="342" y="168" textAnchor="middle" fontSize="20" fontWeight="800" fill={bd < 0 ? "var(--bad)" : "var(--ink)"}>
              {botRightLabel}
            </text>
          </svg>
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-3 space-y-3">
          <Slider label="Sanity check at x =" value={testX} min={-4} max={5} onChange={setTestX} />
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <Readout
              label="Factored Product"
              value={`${a * testX + b} × ${c * testX + d} = ${lhsVal}`}
              tone="brand"
            />
            <Readout label="Expanded Quadratic" value={`${rhsVal}`} tone="good" />
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

function SignPowerLab() {
  const [x, setX] = useState(-3);
  const [k, setK] = useState(2);
  const [power, setPower] = useState<"2" | "3">("2");

  const n = power === "2" ? 2 : 3;
  const xPow = Math.pow(x, n);
  const negXPow = -Math.pow(x, n);
  const parenNegX = Math.pow(-x, n);
  const kXPow = k * Math.pow(x, n);
  const parenKX = Math.pow(k * x, n);

  const items = [
    { label: `x${n === 2 ? "²" : "³"}`, val: xPow, detail: `(${x})${n === 2 ? "²" : "³"}`, tone: "var(--brand)" },
    { label: `−x${n === 2 ? "²" : "³"}`, val: negXPow, detail: `−((${x})${n === 2 ? "²" : "³"})`, tone: "var(--bad)" },
    { label: `(−x)${n === 2 ? "²" : "³"}`, val: parenNegX, detail: `(${-x})${n === 2 ? "²" : "³"}`, tone: "var(--good)" },
    { label: `${k}x${n === 2 ? "²" : "³"}`, val: kXPow, detail: `${k} × (${xPow})`, tone: "var(--brand)" },
    { label: `(${k}x)${n === 2 ? "²" : "³"}`, val: parenKX, detail: `(${k * x})${n === 2 ? "²" : "³"}`, tone: "var(--good)" },
  ];

  const maxAbs = Math.max(1, ...items.map((it) => Math.abs(it.val)));
  const zeroX = 270;
  const halfSpan = 145;

  return (
    <WidgetFrame
      title="Negatives & Indices BIDMAS Lab"
      tryThis={[
        "Set {{x = -3}} and power {{2}}: compare {{-x^2}} against {{(-x)^2}}.",
        "Switch the power from {{2}} to {{3}}: notice when {{-x^3}} and {{(-x)^3}} agree!",
        "Compare {{2x^2}} with {{(2x)^2}} — by what factor is {{(kx)^2}} larger than {{kx^2}}?",
      ]}
      caption={
        n === 2 ? (
          <span>
            With an <strong>even</strong> power (<M>{`n = 2`}</M>), <M>{`(-x)^2 = ${parenNegX}`}</M> is always non-negative while{" "}
            <M>{`-x^2 = ${negXPow}`}</M> is always non-positive. Also <M>{`(${k}x)^2 = ${k * k}x^2`}</M> is{" "}
            <strong>{k}×</strong> larger in magnitude than <M>{`${k}x^2`}</M>!
          </span>
        ) : (
          <span>
            With an <strong>odd</strong> power (<M>{`n = 3`}</M>), a minus inside or outside gives the SAME sign:{" "}
            <M>{`-x^3 = (-x)^3 = ${negXPow}`}</M>. Meanwhile <M>{`(${k}x)^3 = ${k * k * k}x^3`}</M> is{" "}
            <strong>{k * k}×</strong> larger in magnitude than <M>{`${k}x^3`}</M>!
          </span>
        )
      }
    >
      <div className="space-y-4 min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Segmented
            label="Exponent"
            value={power}
            onChange={setPower}
            options={[
              { value: "2", label: "Square (power 2)" },
              { value: "3", label: "Cube (power 3)" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-surface-2 p-3">
            <Stepper label="Value of x" value={x} min={-4} max={4} onChange={setX} />
          </div>
          <div className="rounded-xl border border-line bg-surface-2 p-3">
            <Stepper label="Multiplier k" value={k} min={2} max={4} onChange={setK} />
          </div>
        </div>

        <div className="rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 460 215"
            className="w-full h-auto"
            role="img"
            aria-label="Horizontal signed bar chart comparing powers with and without brackets"
          >
            <rect x="0" y="0" width="460" height="215" rx="10" fill="var(--surface)" />
            <line x1={zeroX} y1="16" x2={zeroX} y2="196" stroke="var(--ink-2)" strokeWidth="1.5" strokeDasharray="4,3" />
            <text x={zeroX} y="209" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--ink-2)">
              0
            </text>
            {items.map((it, idx) => {
              const y = 26 + idx * 34;
              const barLen = Math.max(4, (Math.abs(it.val) / maxAbs) * halfSpan);
              const barX = it.val >= 0 ? zeroX : zeroX - barLen;
              return (
                <g key={it.label}>
                  <text x="12" y={y + 15} fontSize="13" fontWeight="800" fill="var(--ink)">
                    {it.label}
                  </text>
                  <text x="72" y={y + 15} fontSize="11" fill="var(--ink-2)">
                    {it.detail}
                  </text>
                  <rect x={barX} y={y} width={it.val === 0 ? 4 : barLen} height="22" rx="5" fill={it.tone} opacity="0.85" />
                  <text
                    x={it.val >= 0 ? Math.min(448, zeroX + barLen + 6) : Math.max(132, zeroX - barLen - 6)}
                    y={y + 15}
                    textAnchor={it.val >= 0 ? "start" : "end"}
                    fontSize="12"
                    fontWeight="800"
                    fill="var(--ink)"
                  >
                    {it.val < 0 ? `−${Math.abs(it.val)}` : it.val}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <Readout label={`−x${n === 2 ? "²" : "³"}`} value={negXPow < 0 ? `−${Math.abs(negXPow)}` : `${negXPow}`} tone="bad" />
          <Readout label={`(−x)${n === 2 ? "²" : "³"}`} value={parenNegX < 0 ? `−${Math.abs(parenNegX)}` : `${parenNegX}`} tone="good" />
          <Readout label={`(${k}x)${n === 2 ? "²" : "³"}`} value={parenKX < 0 ? `−${Math.abs(parenKX)}` : `${parenKX}`} tone="brand" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "area-grid-expander",
    title: "Area-Grid Bracket Expander",
    blurb: "Change coefficients and signs in (ax + b)(cx + d) to see the 2 × 2 area grid, middle-term cancellation, and live numerical check.",
    Component: AreaGridExpander,
  },
  {
    id: "sign-power-lab",
    title: "Negatives & Indices BIDMAS Lab",
    blurb: "Compare −xⁿ vs (−x)ⁿ and kxⁿ vs (kx)ⁿ live across positive and negative values of x.",
    Component: SignPowerLab,
  },
];
