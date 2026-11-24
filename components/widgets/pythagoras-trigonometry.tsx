"use client";

import { useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, type WidgetDef } from "./kit";

type RatioMode = "sin" | "cos" | "tan";

function PythagorasSquaresExplorer() {
  const [a, setA] = useState(3);
  const [b, setB] = useState(4);

  const a2 = a * a;
  const b2 = b * b;
  const c2 = a2 + b2;
  const c = Math.sqrt(c2);
  const isTriple = Number.isInteger(c);

  // Fit diagram cleanly inside 380 x 260 SVG
  const maxDim = Math.max(a + b, 10);
  const u = Math.min(18, 120 / maxDim);
  const ox = 155;
  const oy = 165;
  const ax = ox;
  const ay = oy - a * u;
  const bx = ox + b * u;
  const by = oy;

  // Outward perpendicular vector from (ax, ay) -> (bx, by): dx = b*u, dy = a*u -> outward normal = (a*u, -b*u)
  const h1x = ax + a * u;
  const h1y = ay - b * u;
  const h2x = bx + a * u;
  const h2y = by - b * u;

  return (
    <WidgetFrame
      title="Pythagoras Squares Visualiser"
      tryThis={[
        "Try (3, 4), (5, 12), and (6, 8) to unlock exact Pythagorean triples where c is a whole number!",
        "Notice how c is ALWAYS strictly shorter than a + b (walking diagonally beats walking around the corner).",
      ]}
      caption={
        <span>
          Square on leg a (<strong>{a2}</strong>) + square on leg b (<strong>{b2}</strong>) = square on hypotenuse (
          <strong>{c2}</strong>), so c = √{c2} = <strong>{isTriple ? c : c.toFixed(2)}</strong>.{" "}
          {isTriple ? "🎉 Exact Pythagorean triple!" : "Not an exact integer — round to 1 d.p.: " + c.toFixed(1) + "."}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <Slider label="Perpendicular leg a" value={a} min={2} max={12} step={1} onChange={setA} />
          <Slider label="Perpendicular leg b" value={b} min={2} max={12} step={1} onChange={setB} />
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-2">
          <svg viewBox="0 0 380 260" className="h-auto w-full" role="img" aria-label="Right-angled triangle with proportional squares built on legs a, b, and hypotenuse c">
            {/* Square on a (left of vertical leg) */}
            <rect
              x={ox - a * u}
              y={ay}
              width={a * u}
              height={a * u}
              fill="var(--brand-soft)"
              stroke="var(--brand)"
              strokeWidth={1.8}
            />
            <text x={ox - (a * u) / 2} y={ay + (a * u) / 2 + 4} textAnchor="middle" fontSize={11} fontWeight={800} fill="var(--brand)">
              {a2}
            </text>

            {/* Square on b (below horizontal leg) */}
            <rect
              x={ox}
              y={oy}
              width={b * u}
              height={b * u}
              fill="var(--surface)"
              stroke="var(--good)"
              strokeWidth={1.8}
            />
            <text x={ox + (b * u) / 2} y={oy + (b * u) / 2 + 4} textAnchor="middle" fontSize={11} fontWeight={800} fill="var(--good)">
              {b2}
            </text>

            {/* Square on c */}
            <polygon
              points={`${ax},${ay} ${bx},${by} ${h2x},${h2y} ${h1x},${h1y}`}
              fill="var(--surface)"
              fillOpacity={0.85}
              stroke="var(--bad)"
              strokeWidth={2}
            />
            <text
              x={(ax + bx + h1x + h2x) / 4}
              y={(ay + by + h1y + h2y) / 4 + 4}
              textAnchor="middle"
              fontSize={12}
              fontWeight={800}
              fill="var(--bad)"
            >
              {c2}
            </text>

            {/* Right-angled triangle */}
            <polygon points={`${ox},${oy} ${bx},${by} ${ax},${ay}`} fill="var(--surface-2)" stroke="var(--ink)" strokeWidth={2.2} />
            <polyline points={`${ox},${oy - 9} ${ox + 9},${oy - 9} ${ox + 9},${oy}`} fill="none" stroke="var(--ink)" strokeWidth={1.6} />

            {/* Triple badge */}
            {isTriple ? (
              <g transform="translate(14, 14)">
                <rect x={0} y={0} width={118} height={24} rx={12} fill="var(--good)" />
                <text x={59} y={16} textAnchor="middle" fontSize={10.5} fontWeight={800} fill="#ffffff">
                  Triple ({a}, {b}, {c})!
                </text>
              </g>
            ) : null}
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="a²" value={a2} tone="brand" />
          <Readout label="b²" value={b2} tone="good" />
          <Readout label="c² = a² + b²" value={c2} tone="bad" />
          <Readout label="Hypotenuse c" value={isTriple ? `${c} (exact)` : c.toFixed(2)} tone={isTriple ? "good" : "ink"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

function SohcahtoaExplorer() {
  const [theta, setTheta] = useState(30);
  const [hyp, setHyp] = useState(10);
  const [ratio, setRatio] = useState<RatioMode>("sin");

  const rad = (theta * Math.PI) / 180;
  const opp = hyp * Math.sin(rad);
  const adj = hyp * Math.cos(rad);
  const sinV = Math.sin(rad);
  const cosV = Math.cos(rad);
  const tanV = Math.tan(rad);

  const scale = 11.5;
  const x0 = 42;
  const y0 = 195;
  const xRight = x0 + adj * scale;
  const yTop = y0 - opp * scale;

  const arcR = Math.min(38, Math.max(18, adj * scale * 0.35));
  const arcX = x0 + arcR * Math.cos(rad);
  const arcY = y0 - arcR * Math.sin(rad);

  const activeFormula =
    ratio === "sin"
      ? `sin(${theta}°) = O ÷ H = ${opp.toFixed(2)} ÷ ${hyp} = ${sinV.toFixed(4)}`
      : ratio === "cos"
        ? `cos(${theta}°) = A ÷ H = ${adj.toFixed(2)} ÷ ${hyp} = ${cosV.toFixed(4)}`
        : `tan(${theta}°) = O ÷ A = ${opp.toFixed(2)} ÷ ${adj.toFixed(2)} = ${tanV.toFixed(4)}`;

  return (
    <WidgetFrame
      title="SOHCAHTOA & Right-Triangle Similarity Lab"
      tryThis={[
        "Keep θ = 30° fixed and slide Hypotenuse H from 4 up to 20 — watch sin(30°) stay locked at 0.5000!",
        "Set θ = 45° and check that O = A, forcing tan(45°) = 1.0000 exactly.",
        "Push θ above 45° to see why tan(θ) becomes > 1 while sin(θ) and cos(θ) ALWAYS stay < 1.",
      ]}
      caption={
        <span>
          <strong>Active ratio:</strong> {activeFormula}. Changing <strong>H</strong> scales the whole triangle similarly, so{" "}
          <strong>{ratio}({theta}°)</strong> never budges!
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Segmented<RatioMode>
            label="Highlight trig ratio"
            value={ratio}
            onChange={setRatio}
            options={[
              { value: "sin", label: "SOH (sin = O/H)" },
              { value: "cos", label: "CAH (cos = A/H)" },
              { value: "tan", label: "TOA (tan = O/A)" },
            ]}
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Slider label="Acute angle θ" value={theta} min={15} max={75} step={1} onChange={setTheta} format={(v) => `${v}°`} />
          <Slider label="Hypotenuse H (scale size)" value={hyp} min={4} max={20} step={1} onChange={setHyp} format={(v) => `${v} cm`} />
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-2">
          <svg viewBox="0 0 360 225" className="h-auto w-full" role="img" aria-label="Dynamic right-angled triangle highlighting Hypotenuse, Opposite, and Adjacent sides for angle theta">
            <polygon points={`${x0},${y0} ${xRight},${y0} ${xRight},${yTop}`} fill="var(--brand-soft)" fillOpacity={0.35} stroke="var(--line)" strokeWidth={1.5} />

            {/* Right-angle marker */}
            <polyline points={`${xRight - 10},${y0} ${xRight - 10},${y0 - 10} ${xRight},${y0 - 10}`} fill="none" stroke="var(--ink-2)" strokeWidth={1.6} />

            {/* Angle arc */}
            <path d={`M ${x0 + arcR} ${y0} A ${arcR} ${arcR} 0 0 0 ${arcX} ${arcY}`} fill="none" stroke="var(--bad)" strokeWidth={2} />
            <text x={x0 + arcR + 6} y={y0 - 6} fontSize={11.5} fontWeight={800} fill="var(--bad)">
              {theta}°
            </text>

            {/* Hypotenuse */}
            <line
              x1={x0}
              y1={y0}
              x2={xRight}
              y2={yTop}
              stroke={ratio === "sin" || ratio === "cos" ? "var(--brand)" : "var(--ink-2)"}
              strokeWidth={ratio === "sin" || ratio === "cos" ? 3.5 : 1.8}
            />
            <text
              x={(x0 + xRight) / 2 - 12}
              y={(y0 + yTop) / 2 - 8}
              textAnchor="end"
              fontSize={11}
              fontWeight={800}
              fill={ratio === "sin" || ratio === "cos" ? "var(--brand)" : "var(--ink-2)"}
            >
              H = {hyp}
            </text>

            {/* Opposite */}
            <line
              x1={xRight}
              y1={y0}
              x2={xRight}
              y2={yTop}
              stroke={ratio === "sin" || ratio === "tan" ? "var(--bad)" : "var(--ink-2)"}
              strokeWidth={ratio === "sin" || ratio === "tan" ? 3.5 : 1.8}
            />
            <text
              x={xRight + 8}
              y={(y0 + yTop) / 2 + 4}
              fontSize={11}
              fontWeight={800}
              fill={ratio === "sin" || ratio === "tan" ? "var(--bad)" : "var(--ink-2)"}
            >
              O = {opp.toFixed(1)}
            </text>

            {/* Adjacent */}
            <line
              x1={x0}
              y1={y0}
              x2={xRight}
              y2={y0}
              stroke={ratio === "cos" || ratio === "tan" ? "var(--good)" : "var(--ink-2)"}
              strokeWidth={ratio === "cos" || ratio === "tan" ? 3.5 : 1.8}
            />
            <text
              x={(x0 + xRight) / 2}
              y={y0 + 16}
              textAnchor="middle"
              fontSize={11}
              fontWeight={800}
              fill={ratio === "cos" || ratio === "tan" ? "var(--good)" : "var(--ink-2)"}
            >
              A = {adj.toFixed(1)}
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Readout label={`sin(${theta}°)`} value={sinV.toFixed(4)} tone={ratio === "sin" ? "brand" : "ink"} />
          <Readout label={`cos(${theta}°)`} value={cosV.toFixed(4)} tone={ratio === "cos" ? "good" : "ink"} />
          <Readout label={`tan(${theta}°)`} value={tanV.toFixed(4)} tone={ratio === "tan" ? "bad" : "ink"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "pythagoras-squares",
    title: "Pythagoras Squares Visualiser",
    blurb: "Adjust legs a and b to see the squares a², b², and c² grow proportionally and hunt for exact Pythagorean triples.",
    Component: PythagorasSquaresExplorer,
  },
  {
    id: "sohcahtoa-lab",
    title: "SOHCAHTOA & Right-Triangle Similarity Lab",
    blurb: "Scale a right-angled triangle up or down to prove that sin θ, cos θ, and tan θ depend ONLY on the angle θ.",
    Component: SohcahtoaExplorer,
  },
];
