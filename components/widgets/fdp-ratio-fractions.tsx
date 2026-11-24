"use client";

import { useState } from "react";
import { M, Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

function gcdInt(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    const t = x % y;
    x = y;
    y = t;
  }
  return x || 1;
}

function lcmInt(a: number, b: number): number {
  return Math.abs(a * b) / gcdInt(a, b);
}

function MultiplierMachine() {
  const [original, setOriginal] = useState(200);
  const [mode, setMode] = useState<"inc" | "dec">("inc");
  const [rate, setRate] = useState(15);
  const [years, setYears] = useState(3);

  const mult = mode === "inc" ? +(1 + rate / 100).toFixed(4) : +(1 - rate / 100).toFixed(4);
  const series = Array.from({ length: years + 1 }, (_, t) => +(original * mult ** t).toFixed(2));
  const finalVal = series[years];
  const compoundMult = +(mult ** years).toFixed(4);
  const netPct = +((compoundMult - 1) * 100).toFixed(1);
  const simpleFinal = +(original * (mode === "inc" ? 1 + (years * rate) / 100 : Math.max(0, 1 - (years * rate) / 100))).toFixed(2);

  const maxBar = Math.max(original, ...series, 1) * 1.15;
  const chartW = 520;
  const chartH = 220;
  const padL = 46;
  const padR = 20;
  const padT = 26;
  const padB = 34;
  const plotW = chartW - padL - padR;
  const plotH = chartH - padT - padB;
  const slotW = plotW / series.length;
  const barW = Math.min(54, slotW * 0.6);
  const origY = padT + plotH - (original / maxBar) * plotH;

  return (
    <WidgetFrame
      title="Decimal Multiplier & Compound Change Explorer"
      tryThis={[
        "Set Original to £200, Increase 20%, and compare 1 year vs 3 years — notice compound growth curves upwards faster than simple interest!",
        "Switch to Decrease 20% over 3 years: why does the value shrink by less money each year even though the percentage stays 20%?",
      ]}
      caption={
        <span>
          Each year multiplies by <strong>{mult}</strong>, so after {years} year{years === 1 ? "" : "s"} the combined multiplier is{" "}
          <M>{`${mult}^${years}`}</M> = <strong>{compoundMult}</strong>. Reverse check:{" "}
          <strong>£{finalVal.toFixed(2)} ÷ {compoundMult} = £{original}</strong>. Simple change would have given £{simpleFinal.toFixed(2)} instead of £{finalVal.toFixed(2)}.
        </span>
      }
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="min-w-0 space-y-3">
          <Segmented
            label="Change direction"
            value={mode}
            onChange={setMode}
            options={[
              { value: "inc", label: "Increase (+r%)" },
              { value: "dec", label: "Decrease (−r%)" },
            ]}
          />
          <Slider label="Original value" value={original} min={50} max={500} step={10} onChange={setOriginal} format={(v) => `£${v}`} />
          <Slider label="Yearly rate" value={rate} min={2} max={40} step={1} onChange={setRate} format={(v) => `${v}%`} />
          <Stepper label="Years (n)" value={years} min={1} max={5} onChange={setYears} />
        </div>

        <div className="min-w-0 space-y-3">
          <div className="grid grid-cols-3 gap-2">
            <Readout label="Multiplier" value={mult} tone="brand" />
            <Readout label="Final" value={`£${finalVal.toFixed(2)}`} tone={mode === "inc" ? "good" : "bad"} />
            <Readout label="Net %" value={`${netPct >= 0 ? "+" : ""}${netPct}%`} tone={netPct >= 0 ? "good" : "bad"} />
          </div>

          <svg viewBox={`0 0 ${chartW} ${chartH}`} className="w-full h-auto rounded-xl border border-line bg-surface" role="img" aria-label="Compound percentage bar chart over years">
            <line x1={padL} y1={padT + plotH} x2={chartW - padR} y2={padT + plotH} stroke="var(--line)" strokeWidth={1.5} />
            <line x1={padL} y1={origY} x2={chartW - padR} y2={origY} stroke="var(--ink-2)" strokeWidth={1} strokeDasharray="4 4" />
            <text x={padL - 6} y={origY + 4} textAnchor="end" fontSize={10} fill="var(--ink-2)">£{original}</text>

            {series.map((val, idx) => {
              const h = (val / maxBar) * plotH;
              const cx = padL + slotW * (idx + 0.5);
              const x = cx - barW / 2;
              const y = padT + plotH - h;
              const fill = idx === 0 ? "var(--brand-soft)" : mode === "inc" ? "var(--good)" : "var(--bad)";
              const stroke = idx === 0 ? "var(--brand)" : "none";
              return (
                <g key={idx}>
                  <rect x={x} y={y} width={barW} height={Math.max(2, h)} rx={6} fill={fill} stroke={stroke} strokeWidth={1.5} />
                  <text x={cx} y={y - 6} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--ink)">
                    £{Math.round(val)}
                  </text>
                  <text x={cx} y={padT + plotH + 16} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--ink-2)">
                    {idx === 0 ? "Start" : `Yr ${idx}`}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </WidgetFrame>
  );
}

function RatioBridgeLab() {
  const [a, setA] = useState(3);
  const [b1, setB1] = useState(5);
  const [b2, setB2] = useState(2);
  const [c, setC] = useState(7);

  const bridge = lcmInt(b1, b2);
  const k1 = bridge / b1;
  const k2 = bridge / b2;
  const rawA = a * k1;
  const rawB = bridge;
  const rawC = c * k2;
  const g = gcdInt(rawA, gcdInt(rawB, rawC));
  const sA = rawA / g;
  const sB = rawB / g;
  const sC = rawC / g;
  const total = sA + sB + sC;

  const pctA = ((sA / total) * 100).toFixed(1);
  const pctB = ((sB / total) * 100).toFixed(1);
  const pctC = ((sC / total) * 100).toFixed(1);

  const barMax = 380;
  const wA = (sA / total) * barMax;
  const wB = (sB / total) * barMax;
  const wC = (sC / total) * barMax;

  return (
    <WidgetFrame
      title="Ratio Bridge & Combined Bar Model"
      tryThis={[
        "Set A : B = 3 : 4 and B : C = 6 : 5 — notice LCM(4, 6) = 12 gives 9 : 12 : 10 rather than multiplying 4 × 6 = 24!",
        "Try making A : B = 2 : 3 and B : C = 6 : 5 so only the first ratio needs scaling.",
      ]}
      caption={
        <span>
          The shared part <strong>B</strong> appears as {b1} and {b2}, whose LCM is <strong>{bridge}</strong>. Scale{" "}
          <strong>{a} : {b1}</strong> by <strong>×{k1}</strong> (→ {rawA} : {rawB}) and <strong>{b2} : {c}</strong> by{" "}
          <strong>×{k2}</strong> (→ {rawB} : {rawC}) to bridge all three into <strong>{sA} : {sB} : {sC}</strong>.
        </span>
      }
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="min-w-0 space-y-2 rounded-xl border border-line bg-surface-2 p-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-brand">First Ratio (A : B)</div>
            <Stepper label="A parts" value={a} min={1} max={9} onChange={setA} />
            <Stepper label="B parts" value={b1} min={1} max={9} onChange={setB1} />
          </div>
          <div className="min-w-0 space-y-2 rounded-xl border border-line bg-surface-2 p-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-good">Second Ratio (B : C)</div>
            <Stepper label="B parts" value={b2} min={1} max={9} onChange={setB2} />
            <Stepper label="C parts" value={c} min={1} max={9} onChange={setC} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Readout label="LCM Bridge" value={bridge} tone="good" />
          <Readout label="A : B : C" value={`${sA} : ${sB} : ${sC}`} tone="brand" />
          <Readout label="Total Parts" value={total} tone="ink" />
        </div>

        <svg viewBox="0 0 520 190" className="w-full h-auto rounded-xl border border-line bg-surface" role="img" aria-label="Combined ratio bridge and proportional bar model">
          <text x={260} y={24} textAnchor="middle" fontSize={13} fontWeight={800} fill="var(--ink)">
            Scaling to Bridge B = {bridge}
          </text>

          <rect x={20} y={38} width={225} height={44} rx={8} fill="var(--surface-2)" stroke="var(--brand)" strokeWidth={1.5} />
          <text x={132} y={56} textAnchor="middle" fontSize={12} fontWeight={800} fill="var(--brand)">
            A : B = {a} : {b1}  (× {k1})
          </text>
          <text x={132} y={74} textAnchor="middle" fontSize={12} fontWeight={700} fill="var(--ink)">
            →  {rawA} : {rawB}
          </text>

          <rect x={275} y={38} width={225} height={44} rx={8} fill="var(--surface-2)" stroke="var(--good)" strokeWidth={1.5} />
          <text x={387} y={56} textAnchor="middle" fontSize={12} fontWeight={800} fill="var(--good)">
            B : C = {b2} : {c}  (× {k2})
          </text>
          <text x={387} y={74} textAnchor="middle" fontSize={12} fontWeight={700} fill="var(--ink)">
            →  {rawB} : {rawC}
          </text>

          <text x={260} y={108} textAnchor="middle" fontSize={12} fontWeight={800} fill="var(--ink-2)">
            Unified Proportional Strip (Total = {total} parts)
          </text>

          <g transform="translate(70, 120)">
            <rect x={0} y={0} width={Math.max(4, wA)} height={34} rx={4} fill="var(--brand)" />
            <rect x={wA} y={0} width={Math.max(4, wB)} height={34} fill="var(--good)" />
            <rect x={wA + wB} y={0} width={Math.max(4, wC)} height={34} rx={4} fill="var(--bad)" />

            {wA >= 36 ? (
              <text x={wA / 2} y={21} textAnchor="middle" fontSize={12} fontWeight={800} fill="#ffffff">
                A ({sA})
              </text>
            ) : null}
            {wB >= 36 ? (
              <text x={wA + wB / 2} y={21} textAnchor="middle" fontSize={12} fontWeight={800} fill="#ffffff">
                B ({sB})
              </text>
            ) : null}
            {wC >= 36 ? (
              <text x={wA + wB + wC / 2} y={21} textAnchor="middle" fontSize={12} fontWeight={800} fill="#ffffff">
                C ({sC})
              </text>
            ) : null}
          </g>

          <text x={115} y={175} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--brand)">
            A: {sA}/{total} ({pctA}%)
          </text>
          <text x={260} y={175} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--good)">
            B: {sB}/{total} ({pctB}%)
          </text>
          <text x={405} y={175} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--bad)">
            C: {sC}/{total} ({pctC}%)
          </text>
        </svg>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "multiplier-machine",
    title: "Decimal Multiplier & Compound Explorer",
    blurb: "See how repeated percentage increases and decreases curve over time and reverse cleanly by division.",
    Component: MultiplierMachine,
  },
  {
    id: "ratio-bridge-lab",
    title: "Ratio Bridge & Bar Model",
    blurb: "Scale two separate ratios to a matching LCM bridge and see each share as a proportional strip.",
    Component: RatioBridgeLab,
  },
];
