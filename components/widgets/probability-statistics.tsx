"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

function gcd(a: number, b: number): number {
  let x = Math.abs(Math.round(a));
  let y = Math.abs(Math.round(b));
  while (y !== 0) {
    const t = x % y;
    x = y;
    y = t;
  }
  return x || 1;
}

function fmtFrac(num: number, den: number): string {
  if (num === 0) return "0";
  if (num === den) return "1";
  const g = gcd(num, den);
  return `${num / g}/${den / g}`;
}

type VennQuery = "both" | "union" | "onlyA" | "neither";

function VennDiagramLab() {
  const [total, setTotal] = useState(40);
  const [onlyA, setOnlyA] = useState(11);
  const [both, setBoth] = useState(7);
  const [onlyB, setOnlyB] = useState(12);
  const [query, setQuery] = useState<VennQuery>("union");

  // Keep regions valid whenever total shrinks
  const used = onlyA + both + onlyB;
  const effectiveTotal = Math.max(total, used);
  const neither = effectiveTotal - used;

  const aTotal = onlyA + both;
  const bTotal = onlyB + both;

  const queryInfo: Record<VennQuery, { label: string; count: number; desc: string }> = {
    both: {
      label: "P(A ∩ B)",
      count: both,
      desc: "Intersection: elements in BOTH circle A and circle B.",
    },
    union: {
      label: "P(A ∪ B)",
      count: onlyA + both + onlyB,
      desc: "Union: elements in A, or B, or both (never double-count the overlap!).",
    },
    onlyA: {
      label: "P(A only)",
      count: onlyA,
      desc: "In circle A but NOT in B: always compute |A| − |A ∩ B|.",
    },
    neither: {
      label: "P(neither)",
      count: neither,
      desc: "Outside both circles: ξ − (A only + both + B only).",
    },
  };

  const active = queryInfo[query];
  const pct = ((active.count / effectiveTotal) * 100).toFixed(1);

  return (
    <WidgetFrame
      title="Interactive Venn Diagram Lab"
      tryThis={[
        "Increase the **Overlap (both)** while watching how {{|A|}} and {{|B|}} change — notice why {{|A ∪ B| = |A| + |B| - |A ∩ B|}}.",
        "Switch between **A ∩ B**, **A ∪ B**, **A only**, and **Neither** to see which region of the diagram lights up.",
      ]}
      caption={
        <span>
          <strong>{active.label}</strong>: {active.desc} Check the total:{" "}
          <strong>
            {onlyA} + {both} + {onlyB} + {neither} = {effectiveTotal}
          </strong>
          .
        </span>
      }
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 items-center">
        <div className="min-w-0 rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 280 210"
            className="w-full h-auto"
            role="img"
            aria-label={`Interactive Venn diagram with total ${effectiveTotal}, A only ${onlyA}, both ${both}, B only ${onlyB}, neither ${neither}`}
          >
            {/* Universal box */}
            <rect
              x={14}
              y={14}
              width={252}
              height={182}
              rx={10}
              fill={query === "neither" ? "var(--brand-soft)" : "var(--surface)"}
              stroke="var(--ink-2)"
              strokeWidth={1.6}
            />
            <text x={24} y={32} fontSize={12} fontWeight={800} fill="var(--ink-2)">
              ξ = {effectiveTotal}
            </text>

            {/* Circle A */}
            <circle
              cx={108}
              cy={108}
              r={56}
              fill={
                query === "union" || query === "onlyA"
                  ? "var(--brand-soft)"
                  : query === "neither"
                    ? "var(--surface)"
                    : "var(--surface-2)"
              }
              fillOpacity={0.85}
              stroke="var(--brand)"
              strokeWidth={2.4}
            />

            {/* Circle B */}
            <circle
              cx={172}
              cy={108}
              r={56}
              fill={
                query === "union"
                  ? "var(--brand-soft)"
                  : query === "neither"
                    ? "var(--surface)"
                    : "var(--surface-2)"
              }
              fillOpacity={0.78}
              stroke="var(--good)"
              strokeWidth={2.4}
            />

            {/* Re-highlight overlap lens cleanly with clipPath */}
            <defs>
              <clipPath id="venn-clip-a">
                <circle cx={108} cy={108} r={55} />
              </clipPath>
            </defs>
            <circle
              cx={172}
              cy={108}
              r={55}
              clipPath="url(#venn-clip-a)"
              fill={
                query === "both"
                  ? "var(--brand-soft)"
                  : query === "union"
                    ? "var(--good-soft)"
                    : "var(--surface)"
              }
              fillOpacity={0.95}
            />
            {/* Re-stroke both circle outlines crisply on top */}
            <circle cx={108} cy={108} r={56} fill="none" stroke="var(--brand)" strokeWidth={2.4} />
            <circle cx={172} cy={108} r={56} fill="none" stroke="var(--good)" strokeWidth={2.4} />

            {/* Set headers */}
            <text x={78} y={44} fontSize={12} fontWeight={800} fill="var(--brand)" textAnchor="middle">
              A ({aTotal})
            </text>
            <text x={202} y={44} fontSize={12} fontWeight={800} fill="var(--good)" textAnchor="middle">
              B ({bTotal})
            </text>

            {/* Counts */}
            <text x={80} y={114} fontSize={17} fontWeight={800} fill="var(--ink)" textAnchor="middle">
              {onlyA}
            </text>
            <text x={140} y={114} fontSize={17} fontWeight={800} fill="var(--bad)" textAnchor="middle">
              {both}
            </text>
            <text x={200} y={114} fontSize={17} fontWeight={800} fill="var(--ink)" textAnchor="middle">
              {onlyB}
            </text>
            <text x={246} y={182} fontSize={15} fontWeight={800} fill="var(--ink-2)" textAnchor="middle">
              {neither}
            </text>
          </svg>
        </div>

        <div className="min-w-0 space-y-3">
          <Segmented
            label="Highlight region"
            value={query}
            onChange={setQuery}
            options={[
              { value: "both", label: "A ∩ B" },
              { value: "union", label: "A ∪ B" },
              { value: "onlyA", label: "A only" },
              { value: "neither", label: "Neither" },
            ]}
          />
          <Slider
            label="A only"
            value={onlyA}
            min={0}
            max={20}
            onChange={(v) => {
              setOnlyA(v);
              setTotal((t) => Math.max(t, v + both + onlyB));
            }}
          />
          <Slider
            label="Overlap (both A ∩ B)"
            value={both}
            min={0}
            max={20}
            onChange={(v) => {
              setBoth(v);
              setTotal((t) => Math.max(t, onlyA + v + onlyB));
            }}
          />
          <Slider
            label="B only"
            value={onlyB}
            min={0}
            max={20}
            onChange={(v) => {
              setOnlyB(v);
              setTotal((t) => Math.max(t, onlyA + both + v));
            }}
          />
          <Slider
            label="Total population (ξ)"
            value={effectiveTotal}
            min={Math.max(10, used)}
            max={60}
            onChange={setTotal}
          />

          <div className="grid grid-cols-2 gap-2">
            <Readout
              label={active.label}
              value={`${fmtFrac(active.count, effectiveTotal)}`}
              tone="brand"
            />
            <Readout
              label="Count & %"
              value={`${active.count}/${effectiveTotal} (${pct}%)`}
              tone="good"
            />
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

function BoxPlotComparator() {
  const [medA, setMedA] = useState(58);
  const [iqrA, setIqrA] = useState(24);
  const [medB, setMedB] = useState(64);
  const [iqrB, setIqrB] = useState(14);

  const lqA = Math.max(10, Math.round(medA - iqrA / 2));
  const uqA = Math.min(92, lqA + iqrA);
  const minA = Math.max(2, lqA - 12);
  const maxA = Math.min(98, uqA + 10);

  const lqB = Math.max(10, Math.round(medB - iqrB / 2));
  const uqB = Math.min(92, lqB + iqrB);
  const minB = Math.max(2, lqB - 10);
  const maxB = Math.min(98, uqB + 12);

  const px = (v: number) => 48 + (v / 100) * 440;

  const avgText =
    medA > medB
      ? `Class A scored higher on average (Median ${medA} > ${medB})`
      : medB > medA
        ? `Class B scored higher on average (Median ${medB} > ${medA})`
        : `Both classes had the exact same average score (Median ${medA})`;

  const spreadText =
    iqrA < iqrB
      ? `Class A was more consistent (smaller IQR ${iqrA} < ${iqrB})`
      : iqrB < iqrA
        ? `Class B was more consistent (smaller IQR ${iqrB} < ${iqrA})`
        : `Both classes had identical middle-50% consistency (IQR ${iqrA})`;

  return (
    <WidgetFrame
      title="Box Plot & Consistency Comparator"
      tryThis={[
        "Give **Class A** a higher Median ({{70}}) than **Class B** ({{62}}), but make **Class B** much narrower (IQR {{10}} vs {{30}}).",
        "Notice how both the **average** (Median) and **consistency** (IQR) tell completely independent stories!",
      ]}
      caption={
        <span>
          <strong>M.I.C. Exam Comparison:</strong> {avgText}. Furthermore, {spreadText}.
        </span>
      }
    >
      <div className="space-y-4">
        <div className="min-w-0 rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 520 190"
            className="w-full h-auto"
            role="img"
            aria-label={`Aligned box plots comparing Class A median ${medA} IQR ${iqrA} with Class B median ${medB} IQR ${iqrB}`}
          >
            {/* Vertical gridlines */}
            {[0, 20, 40, 60, 80, 100].map((v) => (
              <g key={v}>
                <line
                  x1={px(v)}
                  x2={px(v)}
                  y1={20}
                  y2={156}
                  stroke="var(--line)"
                  strokeWidth={1}
                />
                <text
                  x={px(v)}
                  y={174}
                  textAnchor="middle"
                  fontSize={11}
                  fontWeight={700}
                  fill="var(--ink-2)"
                >
                  {v}
                </text>
              </g>
            ))}

            {/* Class A (y = 48) */}
            <text x={38} y={53} textAnchor="end" fontSize={12} fontWeight={800} fill="var(--brand)">
              A
            </text>
            <line x1={px(minA)} y1={48} x2={px(lqA)} y2={48} stroke="var(--brand)" strokeWidth={2.2} />
            <line x1={px(minA)} y1={38} x2={px(minA)} y2={58} stroke="var(--brand)" strokeWidth={2.4} />
            <rect
              x={px(lqA)}
              y={33}
              width={Math.max(4, px(uqA) - px(lqA))}
              height={30}
              rx={4}
              fill="var(--brand-soft)"
              stroke="var(--brand)"
              strokeWidth={2.2}
            />
            <line x1={px(medA)} y1={33} x2={px(medA)} y2={63} stroke="var(--brand)" strokeWidth={3.2} />
            <line x1={px(uqA)} y1={48} x2={px(maxA)} y2={48} stroke="var(--brand)" strokeWidth={2.2} />
            <line x1={px(maxA)} y1={38} x2={px(maxA)} y2={58} stroke="var(--brand)" strokeWidth={2.4} />

            {/* Class B (y = 114) */}
            <text x={38} y={119} textAnchor="end" fontSize={12} fontWeight={800} fill="var(--good)">
              B
            </text>
            <line x1={px(minB)} y1={114} x2={px(lqB)} y2={114} stroke="var(--good)" strokeWidth={2.2} />
            <line x1={px(minB)} y1={104} x2={px(minB)} y2={124} stroke="var(--good)" strokeWidth={2.4} />
            <rect
              x={px(lqB)}
              y={99}
              width={Math.max(4, px(uqB) - px(lqB))}
              height={30}
              rx={4}
              fill="var(--good-soft)"
              stroke="var(--good)"
              strokeWidth={2.2}
            />
            <line x1={px(medB)} y1={99} x2={px(medB)} y2={129} stroke="var(--good)" strokeWidth={3.2} />
            <line x1={px(uqB)} y1={114} x2={px(maxB)} y2={114} stroke="var(--good)" strokeWidth={2.2} />
            <line x1={px(maxB)} y1={104} x2={px(maxB)} y2={124} stroke="var(--good)" strokeWidth={2.4} />

            {/* Axis baseline */}
            <line x1={48} y1={156} x2={488} y2={156} stroke="var(--ink)" strokeWidth={1.6} />
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="min-w-0 space-y-3 rounded-xl border border-line bg-surface p-3">
            <div className="text-sm font-extrabold text-brand">Class A (Blue)</div>
            <Slider label="Median A" value={medA} min={25} max={75} onChange={setMedA} />
            <Slider label="IQR A" value={iqrA} min={6} max={36} step={2} onChange={setIqrA} />
            <div className="text-xs text-ink-2 tabular-nums">
              LQ = {lqA} · Med = {medA} · UQ = {uqA} · Range = {maxA - minA}
            </div>
          </div>

          <div className="min-w-0 space-y-3 rounded-xl border border-line bg-surface p-3">
            <div className="text-sm font-extrabold text-good">Class B (Green)</div>
            <Slider label="Median B" value={medB} min={25} max={75} onChange={setMedB} />
            <Slider label="IQR B" value={iqrB} min={6} max={36} step={2} onChange={setIqrB} />
            <div className="text-xs text-ink-2 tabular-nums">
              LQ = {lqB} · Med = {medB} · UQ = {uqB} · Range = {maxB - minB}
            </div>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "venn-diagram-lab",
    title: "Interactive Venn Diagram Lab",
    blurb:
      "Adjust the four Venn regions and switch probability queries to see intersection, union, and complement update live.",
    Component: VennDiagramLab,
  },
  {
    id: "boxplot-comparator",
    title: "Box Plot & Consistency Comparator",
    blurb:
      "Slide the Median and IQR of two classes to compare average performance against spread and consistency in real time.",
    Component: BoxPlotComparator,
  },
];
