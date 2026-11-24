"use client";

import { useState } from "react";
import {
  M,
  makePlane,
  PlaneGrid,
  Readout,
  Segmented,
  Slider,
  Stepper,
  WidgetFrame,
  type WidgetDef,
} from "./kit";

function fmtLineEq(m: number, c: number): string {
  const mPart = m === 0 ? "" : m === 1 ? "x" : m === -1 ? "-x" : `${m}x`;
  if (!mPart) return `y = ${c}`;
  if (c === 0) return `y = ${mPart}`;
  return `y = ${mPart} ${c > 0 ? "+" : "-"} ${Math.abs(c)}`;
}

function fmtNum(v: number): string {
  const rounded = Math.round(v * 100) / 100;
  if (Object.is(rounded, -0) || rounded === 0) return "0";
  const s = Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
  return s.replace(/^-/, "−");
}

function clipLineSegment(
  m: number,
  c: number,
  xMin: number,
  xMax: number,
  yMin: number,
  yMax: number,
): [number, number, number, number] | null {
  const pts: [number, number][] = [];
  const add = (x: number, y: number) => {
    if (x >= xMin - 1e-6 && x <= xMax + 1e-6 && y >= yMin - 1e-6 && y <= yMax + 1e-6) {
      if (!pts.some(([px, py]) => Math.hypot(px - x, py - y) < 1e-4)) pts.push([x, y]);
    }
  };
  add(xMin, m * xMin + c);
  add(xMax, m * xMax + c);
  if (m !== 0) {
    add((yMin - c) / m, yMin);
    add((yMax - c) / m, yMax);
  }
  if (pts.length < 2) return null;
  return [pts[0][0], pts[0][1], pts[1][0], pts[1][1]];
}

function SimultaneousLinesExplorer() {
  const [m1, setM1] = useState(2);
  const [c1, setC1] = useState(-1);
  const [m2, setM2] = useState(-1);
  const [c2, setC2] = useState(5);

  const xMin = -5;
  const xMax = 6;
  const yMin = -5;
  const yMax = 6;
  const plane = makePlane({ width: 380, height: 300, xMin, xMax, yMin, yMax, pad: 26 });

  const seg1 = clipLineSegment(m1, c1, xMin, xMax, yMin, yMax);
  const seg2 = clipLineSegment(m2, c2, xMin, xMax, yMin, yMax);

  const parallel = m1 === m2 && c1 !== c2;
  const identical = m1 === m2 && c1 === c2;
  const ix = !parallel && !identical ? (c2 - c1) / (m1 - m2) : null;
  const iy = ix !== null ? m1 * ix + c1 : null;
  const inBounds =
    ix !== null && iy !== null && ix >= xMin && ix <= xMax && iy >= yMin && iy <= yMax;

  return (
    <WidgetFrame
      title="Simultaneous Equations & Line Intersection Explorer"
      tryThis={[
        "Move the gradients until BOTH lines are equal ({{m_1 = m_2}}) with different intercepts — what happens to the solution?",
        "Make both lines identical and read why there are infinitely many solutions.",
        "Find two different lines that intersect cleanly at {{(2, 3)}}!",
      ]}
      caption={
        identical ? (
          <span>
            Both equations describe the <strong>exact same line</strong> (<M>{fmtLineEq(m1, c1)}</M>) — every point on the line satisfies both equations (<strong>infinitely many solutions</strong>).
          </span>
        ) : parallel ? (
          <span>
            Same gradient (<M>{`m = ${m1}`}</M>) and different y-intercepts ({c1} vs {c2}) → <strong>parallel lines</strong> that never cross (<strong>no simultaneous solution</strong>).
          </span>
        ) : (
          <span>
            Equating <M>{fmtLineEq(m1, c1)}</M> and <M>{fmtLineEq(m2, c2)}</M> gives the unique intersection{" "}
            <strong>
              ({fmtNum(ix!)}, {fmtNum(iy!)})
            </strong>
            {inBounds ? " — plotted in green on the grid!" : " — currently outside the visible [−5, 6] grid window."}
          </span>
        )
      }
    >
      <div className="space-y-4 min-w-0">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => {
              setM1(2);
              setC1(-1);
              setM2(-1);
              setC2(5);
            }}
          >
            Crossing at (2, 3)
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => {
              setM1(2);
              setC1(2);
              setM2(2);
              setC2(-2);
            }}
          >
            Parallel (No Solution)
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => {
              setM1(1);
              setC1(1);
              setM2(1);
              setC2(1);
            }}
          >
            Same Line
          </button>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-2 rounded-xl border border-line bg-surface-2 p-3 min-w-0">
            <div className="text-xs font-bold uppercase tracking-wide text-brand">
              Line 1 (Blue): <M>{fmtLineEq(m1, c1)}</M>
            </div>
            <Stepper label="Gradient m₁" value={m1} min={-3} max={3} onChange={setM1} />
            <Stepper label="y-intercept c₁" value={c1} min={-5} max={5} onChange={setC1} />
          </div>
          <div className="space-y-2 rounded-xl border border-line bg-surface-2 p-3 min-w-0">
            <div className="text-xs font-bold uppercase tracking-wide text-bad">
              Line 2 (Orange): <M>{fmtLineEq(m2, c2)}</M>
            </div>
            <Stepper label="Gradient m₂" value={m2} min={-3} max={3} onChange={setM2} />
            <Stepper label="y-intercept c₂" value={c2} min={-5} max={5} onChange={setC2} />
          </div>
        </div>

        <div className="rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 380 300"
            className="w-full h-auto max-w-[440px] mx-auto block"
            role="img"
            aria-label="Interactive coordinate plane plotting two linear equations and their point of intersection"
          >
            <rect x="0" y="0" width="380" height="300" rx="10" fill="var(--surface)" />
            <PlaneGrid plane={plane} step={1} labels />
            {seg1 ? (
              <line
                x1={plane.px(seg1[0])}
                y1={plane.py(seg1[1])}
                x2={plane.px(seg1[2])}
                y2={plane.py(seg1[3])}
                stroke="var(--brand)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            ) : null}
            {seg2 ? (
              <line
                x1={plane.px(seg2[0])}
                y1={plane.py(seg2[1])}
                x2={plane.px(seg2[2])}
                y2={plane.py(seg2[3])}
                stroke="var(--bad)"
                strokeWidth={identical ? "2" : "3"}
                strokeDasharray={identical ? "6,5" : undefined}
                strokeLinecap="round"
              />
            ) : null}
            {inBounds && ix !== null && iy !== null ? (
              <g>
                <line
                  x1={plane.px(ix)}
                  y1={plane.py(iy)}
                  x2={plane.px(ix)}
                  y2={plane.py(0)}
                  stroke="var(--good)"
                  strokeWidth="1.5"
                  strokeDasharray="4,3"
                />
                <line
                  x1={plane.px(0)}
                  y1={plane.py(iy)}
                  x2={plane.px(ix)}
                  y2={plane.py(iy)}
                  stroke="var(--good)"
                  strokeWidth="1.5"
                  strokeDasharray="4,3"
                />
                <circle
                  cx={plane.px(ix)}
                  cy={plane.py(iy)}
                  r="6"
                  fill="var(--good)"
                  stroke="var(--surface)"
                  strokeWidth="2"
                />
                <text
                  x={Math.min(340, Math.max(46, plane.px(ix) + 10))}
                  y={Math.max(22, plane.py(iy) - 10)}
                  fontSize="12"
                  fontWeight="800"
                  fill="var(--good)"
                >
                  ({fmtNum(ix)}, {fmtNum(iy)})
                </text>
              </g>
            ) : null}
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Readout
            label="System Type"
            value={identical ? "Same Line" : parallel ? "Parallel" : "Intersecting"}
            tone={identical ? "brand" : parallel ? "bad" : "good"}
          />
          <Readout
            label="Solution x"
            value={identical ? "Any x" : parallel ? "None" : fmtNum(ix!)}
            tone={parallel ? "bad" : "brand"}
          />
          <Readout
            label="Solution y"
            value={identical ? "On line" : parallel ? "None" : fmtNum(iy!)}
            tone={parallel ? "bad" : "good"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

type Op = "<" | ">" | "<=" | ">=";

function flipOp(op: Op): Op {
  if (op === "<") return ">";
  if (op === ">") return "<";
  if (op === "<=") return ">=";
  return "<=";
}

function opGlyph(op: Op): string {
  if (op === "<=") return "≤";
  if (op === ">=") return "≥";
  return op;
}

function evalOp(lhs: number, op: Op, rhs: number): boolean {
  if (op === "<") return lhs < rhs;
  if (op === ">") return lhs > rhs;
  if (op === "<=") return lhs <= rhs;
  return lhs >= rhs;
}

function InequalityFlipLab() {
  const [a, setA] = useState(-2);
  const [b, setB] = useState(4);
  const [c, setC] = useState(10);
  const [op, setOp] = useState<Op>(">=");
  const [testX, setTestX] = useState(-4);

  const flipped = a < 0;
  const finalOp: Op = flipped ? flipOp(op) : op;
  const boundary = (c - b) / a;
  const inclusive = finalOp === "<=" || finalOp === ">=";
  const goesRight = finalOp === ">" || finalOp === ">=";

  const lhsAtTest = a * testX + b;
  const satisfies = evalOp(lhsAtTest, op, c);

  // Number line from -8 to 8 mapped to x = 32..428
  const nlMin = -8;
  const nlMax = 8;
  const toX = (v: number) => 32 + ((v - nlMin) / (nlMax - nlMin)) * 396;
  const clampedB = Math.max(nlMin, Math.min(nlMax, boundary));
  const bInRange = boundary >= nlMin && boundary <= nlMax;

  const changeA = (next: number) => {
    if (next === 0) setA(a < 0 ? 1 : -1);
    else setA(next);
  };

  const lhsText = `${a === 1 ? "x" : a === -1 ? "-x" : `${a}x`}${b === 0 ? "" : b > 0 ? ` + ${b}` : ` - ${Math.abs(b)}`}`;

  return (
    <WidgetFrame
      title="Inequality Number-Line & Negative-Flip Lab"
      tryThis={[
        "Switch {{a}} from {{+2}} to {{-2}} and watch the inequality arrow FLIP direction!",
        "Toggle between {{<}} and {{<=}} to compare the hollow ○ and filled ● boundary circle.",
        "Drag the **Test Point** slider to verify your solution directly in the original inequality.",
      ]}
      caption={
        <span>
          Starting from <M>{`${lhsText} ${op} ${c}`}</M>: subtract {b} to get{" "}
          <M>{`${a}x ${op} ${c - b}`}</M>, then divide by <strong>{a < 0 ? `−${Math.abs(a)}` : a}</strong>
          {flipped ? " (NEGATIVE → FLIP sign!)" : " (positive → sign stays the same)"} →{" "}
          <strong>
            x {opGlyph(finalOp)} {fmtNum(boundary)}
          </strong>
          .
        </span>
      }
    >
      <div className="space-y-4 min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-2">
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
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => setA(-a)}
          >
            Flip sign of a ({a > 0 ? `+${a} → −${a}` : `−${Math.abs(a)} → +${Math.abs(a)}`})
          </button>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-line bg-surface-2 p-3 min-w-0">
            <Stepper label="Coeff a (≠0)" value={a} min={-4} max={4} onChange={changeA} />
          </div>
          <div className="rounded-xl border border-line bg-surface-2 p-3 min-w-0">
            <Stepper label="Constant b" value={b} min={-6} max={6} onChange={setB} />
          </div>
          <div className="rounded-xl border border-line bg-surface-2 p-3 min-w-0">
            <Stepper label="RHS c" value={c} min={-8} max={12} onChange={setC} />
          </div>
        </div>

        <div className="rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 460 120"
            className="w-full h-auto"
            role="img"
            aria-label="Interactive inequality number line showing solution ray and test point"
          >
            <rect x="0" y="0" width="460" height="120" rx="10" fill="var(--surface)" />
            {/* Main axis */}
            <line x1="20" y1="74" x2="440" y2="74" stroke="var(--ink)" strokeWidth="2" />
            <polygon points="20,74 28,69 28,79" fill="var(--ink)" />
            <polygon points="440,74 432,69 432,79" fill="var(--ink)" />

            {/* Ticks -8..8 */}
            {Array.from({ length: 17 }, (_, i) => i - 8).map((n) => (
              <g key={n}>
                <line
                  x1={toX(n)}
                  y1={n % 2 === 0 ? "67" : "70"}
                  x2={toX(n)}
                  y2={n % 2 === 0 ? "81" : "78"}
                  stroke={n === 0 ? "var(--ink)" : "var(--ink-2)"}
                  strokeWidth={n === 0 ? "2" : "1.2"}
                />
                {n % 2 === 0 ? (
                  <text x={toX(n)} y="98" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--ink-2)">
                    {n < 0 ? `−${Math.abs(n)}` : n}
                  </text>
                ) : null}
              </g>
            ))}

            {/* Solution ray above axis at y = 44 */}
            {goesRight ? (
              <g>
                <line x1={toX(clampedB)} y1="44" x2="436" y2="44" stroke="var(--brand)" strokeWidth="4" />
                <polygon points="442,44 432,38 432,50" fill="var(--brand)" />
              </g>
            ) : (
              <g>
                <line x1="24" y1="44" x2={toX(clampedB)} y2="44" stroke="var(--brand)" strokeWidth="4" />
                <polygon points="18,44 28,38 28,50" fill="var(--brand)" />
              </g>
            )}

            {/* Boundary circle */}
            {bInRange ? (
              <g>
                <line x1={toX(boundary)} y1="50" x2={toX(boundary)} y2="74" stroke="var(--brand)" strokeWidth="1.5" strokeDasharray="3,2" />
                <circle
                  cx={toX(boundary)}
                  cy="44"
                  r="6.5"
                  fill={inclusive ? "var(--brand)" : "var(--surface)"}
                  stroke="var(--brand)"
                  strokeWidth="2.8"
                />
                <text x={toX(boundary)} y="26" textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--brand)">
                  {fmtNum(boundary)}
                </text>
              </g>
            ) : null}

            {/* Test point marker */}
            <circle
              cx={toX(testX)}
              cy="74"
              r="5.5"
              fill={satisfies ? "var(--good)" : "var(--bad)"}
              stroke="var(--surface)"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-3 space-y-3">
          <Slider label="Test point x =" value={testX} min={-7} max={7} onChange={setTestX} />
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            <Readout
              label="Solved Inequality"
              value={`x ${opGlyph(finalOp)} ${fmtNum(boundary)}`}
              tone={flipped ? "bad" : "brand"}
            />
            <Readout
              label="Sign Flipped?"
              value={flipped ? "YES (a < 0)" : "No (a > 0)"}
              tone={flipped ? "bad" : "ink"}
            />
            <Readout
              label={`Test x = ${testX < 0 ? `−${Math.abs(testX)}` : testX}`}
              value={`${lhsAtTest} ${opGlyph(op)} ${c} ${satisfies ? "✓ True" : "✗ False"}`}
              tone={satisfies ? "good" : "bad"}
            />
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "simultaneous-lines-explorer",
    title: "Simultaneous Equations & Line Intersection",
    blurb: "Adjust two straight lines live to see intersecting, parallel (no solution), and identical systems.",
    Component: SimultaneousLinesExplorer,
  },
  {
    id: "inequality-flip-lab",
    title: "Inequality Number-Line & Negative-Flip Lab",
    blurb: "Flip the coefficient sign, compare open vs closed circles, and drag a live test point across the number line.",
    Component: InequalityFlipLab,
  },
];
