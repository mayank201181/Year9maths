"use client";

import { useState } from "react";
import { M, Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

const BASES = ["2", "3", "4", "5", "10"] as const;
type BaseKey = (typeof BASES)[number];

function fmtExactPower(base: number, exp: number): string {
  if (exp === 0) return "1";
  if (exp > 0) return (base ** exp).toLocaleString("en-GB");
  return `1/${(base ** -exp).toLocaleString("en-GB")}`;
}

function fmtDecimalPower(base: number, exp: number): string {
  const v = base ** exp;
  if (exp >= 0) return v.toLocaleString("en-GB");
  if (v >= 0.001) return Number(v.toPrecision(4)).toString();
  return v.toExponential(2);
}

function PowerStaircase() {
  const [baseKey, setBaseKey] = useState<BaseKey>("2");
  const [exp, setExp] = useState(-2);

  const base = Number(baseKey);
  const exponents = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
  const exact = fmtExactPower(base, exp);
  const decimal = fmtDecimalPower(base, exp);
  const mirrorExp = -exp;

  const tileW = 50;
  const gap = 6;
  const startX = 11;
  const centerX = (idx: number) => startX + idx * (tileW + gap) + tileW / 2;
  const activeIdx = exponents.indexOf(exp);
  const mirrorIdx = exponents.indexOf(mirrorExp);

  return (
    <WidgetFrame
      title="Zero & Negative Power Staircase"
      tryThis={[
        "Slide the exponent from +3 down to −3: watch every step divide by the base and notice 0 ALWAYS lands on 1!",
        "Switch the base to 3 or 5 and compare b² with b⁻² — they are exact reciprocals across the b⁰ = 1 mirror.",
      ]}
      caption={
        <span>
          <M>{`${base}^${exp < 0 ? `(${exp})` : exp}`}</M> = <strong>{exact}</strong>.{" "}
          {exp === 0 ? (
            <>Any non-zero base raised to the power 0 equals <strong>1</strong> because dividing by {base} from <M>{`${base}^1 = ${base}`}</M> gives {base} ÷ {base} = 1.</>
          ) : exp < 0 ? (
            <>
              A negative index gives the <strong>reciprocal</strong> of <M>{`${base}^${-exp}`}</M> ({fmtExactPower(base, -exp)}), never a negative number!
            </>
          ) : (
            <>
              Its reciprocal partner across <M>{`${base}^0 = 1`}</M> is <M>{`${base}^(${-exp})`}</M> = <strong>{fmtExactPower(base, -exp)}</strong>.
            </>
          )}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="min-w-0 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Choose Base (b)</div>
            <Segmented
              label="Base"
              value={baseKey}
              onChange={setBaseKey}
              options={BASES.map((b) => ({ value: b, label: b }))}
            />
          </div>
          <div className="min-w-0">
            <Slider
              label="Exponent (n)"
              value={exp}
              min={-4}
              max={4}
              step={1}
              onChange={setExp}
              format={(v) => (v < 0 ? `−${Math.abs(v)}` : String(v))}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Readout label="Power" value={<M>{`${base}^${exp < 0 ? `(${exp})` : exp}`}</M>} tone="brand" />
          <Readout label="Exact" value={exact} tone={exp < 0 ? "good" : "ink"} />
          <Readout label="Decimal" value={decimal} tone="ink" />
        </div>

        <svg viewBox="0 0 520 205" className="w-full h-auto rounded-xl border border-line bg-surface" role="img" aria-label="Interactive staircase of powers from negative four to positive four">
          <text x={260} y={22} textAnchor="middle" fontSize={12} fontWeight={800} fill="var(--ink-2)">
            ← ÷ {base} each step left   ·   × {base} each step right →
          </text>

          {exp !== 0 ? (
            <path
              d={`M ${centerX(activeIdx)} 68 Q 260 24 ${centerX(mirrorIdx)} 68`}
              fill="none"
              stroke="var(--good)"
              strokeWidth={1.8}
              strokeDasharray="4 3"
            />
          ) : null}

          {exp !== 0 ? (
            <text x={260} y={44} textAnchor="middle" fontSize={10} fontWeight={800} fill="var(--good)">
              Reciprocal Mirror ({fmtExactPower(base, Math.abs(exp))} ↔ 1/{fmtExactPower(base, Math.abs(exp))})
            </text>
          ) : null}

          {exponents.map((e, i) => {
            const x = startX + i * (tileW + gap);
            const isSel = e === exp;
            const isZero = e === 0;
            const isMirror = e === mirrorExp && exp !== 0;
            const barH = Math.max(12, 16 + (e + 4) * 6);
            const yTop = 148 - barH;
            const fill = isSel
              ? "var(--brand)"
              : isZero
                ? "var(--brand-soft)"
                : isMirror
                  ? "var(--surface-2)"
                  : "var(--surface-2)";
            const stroke = isSel ? "var(--brand)" : isMirror ? "var(--good)" : isZero ? "var(--brand)" : "var(--line)";
            const valLabel = e >= 0 ? String(base ** e) : `1/${base ** -e}`;
            return (
              <g key={e}>
                <rect x={x} y={yTop} width={tileW} height={barH} rx={7} fill={fill} stroke={stroke} strokeWidth={isSel || isMirror ? 2 : 1.2} />
                <text
                  x={x + tileW / 2}
                  y={yTop + barH / 2 + 4}
                  textAnchor="middle"
                  fontSize={11}
                  fontWeight={800}
                  fill={isSel ? "#ffffff" : isZero ? "var(--brand)" : "var(--ink)"}
                >
                  {base}
                  {e < 0 ? `⁻${Math.abs(e)}` : e === 0 ? "⁰" : e === 1 ? "¹" : e === 2 ? "²" : e === 3 ? "³" : "⁴"}
                </text>
                <text
                  x={x + tileW / 2}
                  y={168}
                  textAnchor="middle"
                  fontSize={valLabel.length > 6 ? 8 : 9.5}
                  fontWeight={isSel ? 800 : 600}
                  fill={isSel ? "var(--brand)" : "var(--ink-2)"}
                >
                  {valLabel.length > 8 ? `1/${base}⁴` : valLabel}
                </text>
                <text x={x + tileW / 2} y={186} textAnchor="middle" fontSize={9} fill="var(--ink-2)">
                  n={e < 0 ? `−${Math.abs(e)}` : e}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </WidgetFrame>
  );
}

function ordinaryFromMantissa(tenths: number, exp: number): string {
  const sig = String(tenths).replace(/0+$/, "") || "1";
  const k = sig.length - 1;
  if (exp >= 0) {
    if (exp >= k) {
      const full = sig + "0".repeat(exp - k);
      return full.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const split = exp + 1;
    return `${sig.slice(0, split)}.${sig.slice(split)}`.replace(/\.?0+$/, "");
  }
  return `0.${"0".repeat(-exp - 1)}${sig}`;
}

function scaleHint(exp: number): string {
  if (exp <= -5) return "Microscopic: size of a human red blood cell (m)";
  if (exp === -4) return "Hair-thin: thickness of a human hair (m)";
  if (exp === -3) return "Millimetre scale: thickness of a coin (m)";
  if (exp === -2 || exp === -1) return "Centimetre scale: everyday pocket objects (m)";
  if (exp === 0 || exp === 1) return "Human scale: height of a room or bus (m)";
  if (exp === 2 || exp === 3) return "City scale: tall skyscrapers & kilometres (m)";
  if (exp === 4 || exp === 5) return "Regional scale: Singapore to neighbouring islands (m)";
  return "Planetary scale: radius of Earth (~6.4 × 10⁶ m)";
}

const SHIFT_OPTS = [
  { value: "-2", label: "÷100 (0.0A)" },
  { value: "-1", label: "÷10 (0.A)" },
  { value: "1", label: "×10 (10A)" },
  { value: "2", label: "×100 (100A)" },
] as const;

function StandardFormLab() {
  const [tab, setTab] = useState<"scale" | "seesaw">("scale");
  const [tenths, setTenths] = useState(47); // 4.7
  const [exp, setExp] = useState(4);
  const [shiftStr, setShiftStr] = useState<string>("1");
  const [rawExp, setRawExp] = useState(5);

  const mantStr = tenths % 10 === 0 ? String(tenths / 10) : `${Math.floor(tenths / 10)}.${tenths % 10}`;
  const ordStr = ordinaryFromMantissa(tenths, exp);

  const shift = Number(shiftStr);
  const finalExp = rawExp + shift;
  const d1 = Math.floor(tenths / 10);
  const d2 = tenths % 10;
  const rawFront =
    shift === 1
      ? `${d1}${d2}`
      : shift === 2
        ? `${d1}${d2}0`
        : shift === -1
          ? `0.${d1}${d2 === 0 ? "" : d2}`
          : `0.0${d1}${d2 === 0 ? "" : d2}`;

  return (
    <WidgetFrame
      title="Standard Form Scale & Adjustment See-Saw"
      tryThis={[
        "In Scale Explorer, drag n from +4 down to −4 and watch the decimal point hop past the leading digits!",
        "Switch to Adjustment See-Saw: try 0.0A × 10⁻³ and see why making the front 100× bigger lowers the power from −3 to −5!",
      ]}
      caption={
        tab === "scale" ? (
          <span>
            <M>{`${mantStr} * 10^${exp < 0 ? `(${exp})` : exp}`}</M> = <strong>{ordStr}</strong>.{" "}
            {exp >= 0
              ? `Positive power +${exp} moves digits ${exp} place${exp === 1 ? "" : "s"} left (making the number large).`
              : `Negative power −${-exp} creates ${-exp} leading zero${-exp === 1 ? "" : "s"} before the first non-zero digit.`}
          </span>
        ) : (
          <span>
            Replace <strong>{rawFront}</strong> with <M>{`${mantStr} * 10^${shift < 0 ? `(${shift})` : shift}`}</M>, then add powers:{" "}
            <strong>
              {shift} + ({rawExp}) = {finalExp}
            </strong>{" "}
            ⇒ <M>{`${mantStr} * 10^${finalExp < 0 ? `(${finalExp})` : finalExp}`}</M>.
          </span>
        )
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Explorer mode"
          value={tab}
          onChange={setTab}
          options={[
            { value: "scale", label: "Scale Explorer" },
            { value: "seesaw", label: "Adjustment See-Saw" },
          ]}
        />

        {tab === "scale" ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Slider
                label="Front number (A)"
                value={tenths}
                min={10}
                max={99}
                step={1}
                onChange={setTenths}
                format={(v) => (v % 10 === 0 ? `${v / 10}.0` : `${Math.floor(v / 10)}.${v % 10}`)}
              />
              <Slider
                label="Power of 10 (n)"
                value={exp}
                min={-5}
                max={6}
                step={1}
                onChange={setExp}
                format={(v) => (v < 0 ? `−${Math.abs(v)}` : `+${v}`)}
              />
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <Readout label="Standard Form" value={<M>{`${mantStr} * 10^${exp < 0 ? `(${exp})` : exp}`}</M>} tone="brand" />
              <Readout label="Ordinary Number" value={ordStr} tone="good" />
            </div>

            <svg viewBox="0 0 520 120" className="w-full h-auto rounded-xl border border-line bg-surface" role="img" aria-label="Power of ten scale ruler showing current order of magnitude">
              <line x1={30} y1={52} x2={490} y2={52} stroke="var(--line)" strokeWidth={3} strokeLinecap="round" />
              {Array.from({ length: 12 }, (_, idx) => {
                const p = idx - 5;
                const x = 30 + (idx / 11) * 460;
                const active = p === exp;
                return (
                  <g key={p}>
                    <line x1={x} y1={44} x2={x} y2={60} stroke={active ? "var(--brand)" : "var(--ink-2)"} strokeWidth={active ? 3 : 1.5} />
                    {active ? <circle cx={x} cy={52} r={8} fill="var(--brand)" /> : null}
                    <text
                      x={x}
                      y={78}
                      textAnchor="middle"
                      fontSize={10}
                      fontWeight={active ? 800 : 600}
                      fill={active ? "var(--brand)" : "var(--ink-2)"}
                    >
                      10{p < 0 ? `⁻${Math.abs(p)}` : p === 0 ? "⁰" : p === 1 ? "¹" : p === 2 ? "²" : p === 3 ? "³" : p === 4 ? "⁴" : p === 5 ? "⁵" : "⁶"}
                    </text>
                  </g>
                );
              })}
              <text x={260} y={24} textAnchor="middle" fontSize={12} fontWeight={800} fill="var(--ink)">
                Order of Magnitude: {exp >= 0 ? `× 10^${exp}` : `÷ 10^${-exp}`}
              </text>
              <text x={260} y={104} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--good)">
                {scaleHint(exp)}
              </text>
            </svg>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Slider
                label="Digits (A)"
                value={tenths}
                min={12}
                max={96}
                step={1}
                onChange={setTenths}
                format={(v) => (v % 10 === 0 ? `${v / 10}.0` : `${Math.floor(v / 10)}.${v % 10}`)}
              />
              <Stepper label="Starting exponent" value={rawExp} min={-5} max={6} onChange={setRawExp} />
            </div>

            <Segmented
              label="Unadjusted shift"
              value={shiftStr}
              onChange={setShiftStr}
              options={SHIFT_OPTS.map((o) => ({ value: o.value, label: o.label }))}
            />

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <Readout label="Unadjusted" value={<M>{`${rawFront} * 10^${rawExp < 0 ? `(${rawExp})` : rawExp}`}</M>} tone="bad" />
              <Readout label="Valid Standard Form" value={<M>{`${mantStr} * 10^${finalExp < 0 ? `(${finalExp})` : finalExp}`}</M>} tone="good" />
            </div>

            <svg viewBox="0 0 520 130" className="w-full h-auto rounded-xl border border-line bg-surface" role="img" aria-label="See-saw balance diagram for adjusting standard form">
              <polygon points="260,86 244,114 276,114" fill="var(--brand-soft)" stroke="var(--brand)" strokeWidth={1.5} />
              <line
                x1={70}
                y1={shift > 0 ? 74 : 52}
                x2={450}
                y2={shift > 0 ? 52 : 74}
                stroke="var(--ink)"
                strokeWidth={3.5}
                strokeLinecap="round"
              />
              <rect x={44} y={14} width={175} height={36} rx={8} fill="var(--surface-2)" stroke="var(--bad)" strokeWidth={1.5} />
              <text x={131} y={36} textAnchor="middle" fontSize={12} fontWeight={800} fill="var(--bad)">
                Front: {shift > 0 ? `÷ ${10 ** shift} (down)` : `× ${10 ** -shift} (up)`}
              </text>
              <rect x={301} y={14} width={175} height={36} rx={8} fill="var(--surface-2)" stroke="var(--good)" strokeWidth={1.5} />
              <text x={388} y={36} textAnchor="middle" fontSize={12} fontWeight={800} fill="var(--good)">
                Power: {shift > 0 ? `+${shift} (up)` : `−${-shift} (down)`}
              </text>
              <text x={260} y={124} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--ink-2)">
                Opposite moves keep the overall value 100% unchanged!
              </text>
            </svg>
          </div>
        )}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "power-staircase",
    title: "Zero & Negative Power Staircase",
    blurb: "Step down through powers of 2, 3, 4, 5 or 10 to see why a⁰ = 1 and why negative powers flip into reciprocals.",
    Component: PowerStaircase,
  },
  {
    id: "standard-form-lab",
    title: "Standard Form Scale & See-Saw Adjuster",
    blurb: "Explore huge and microscopic powers of 10 and practise balancing the see-saw when A leaves [1, 10).",
    Component: StandardFormLab,
  },
];
