import type { Drill } from "./types.ts";
import { gcd } from "../mathParse.ts";

function powTex(exp: number): string {
  return exp < 0 ? `(${exp})` : String(exp);
}

function sfExpr(mantStr: string, exp: number): string {
  return `{{${mantStr} * 10^${powTex(exp)}}}`;
}

function trimDec(s: string): string {
  if (!s.includes(".")) return s;
  return s.replace(/\.?0+$/, "");
}

/** Build exact decimal string for integer `val` divided by 10^dp (e.g. 35, 1 -> "3.5"). */
function decFromInt(val: number, dp: number): string {
  if (dp <= 0) return String(val) + "0".repeat(-dp);
  const s = String(val).padStart(dp + 1, "0");
  const whole = s.slice(0, s.length - dp);
  const frac = s.slice(s.length - dp);
  return trimDec(`${whole}.${frac}`);
}

/** Format an ordinary number string cleanly from significant digits (no decimal point) and standard-form exponent. */
function ordinaryStr(sigDigits: string, exp: number): string {
  const k = sigDigits.length - 1;
  if (exp >= 0) {
    if (exp >= k) {
      const full = sigDigits + "0".repeat(exp - k);
      return full.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const split = exp + 1;
    return trimDec(`${sigDigits.slice(0, split)}.${sigDigits.slice(split)}`);
  }
  return trimDec(`0.${"0".repeat(-exp - 1)}${sigDigits}`);
}

/** Convert integer `val` (positive) representing `val / 10^dp` into canonical standard form `{ mantStr, exp, value }`. */
function toCanonicalSF(val: number, dp: number, baseExp: number): { mantStr: string; exp: number; value: number } {
  const s = String(val);
  const shift = s.length - 1 - dp;
  const exp = baseExp + shift;
  const rawMant = s.length === 1 ? s : `${s[0]}.${s.slice(1)}`;
  const mantStr = trimDec(rawMant);
  const value = Number(`${mantStr}e${exp}`);
  return { mantStr, exp, value };
}

export const drills: Drill[] = [
  // =========================================================================
  // DRILL 1: Index laws with algebra & coefficients (Level 1 — Sprint eligible)
  // =========================================================================
  {
    id: "indices-standard-form.index-laws-algebra",
    topicId: "indices-standard-form",
    title: "Index laws with algebra & coefficients",
    level: 1,
    guideRef: "index-laws",
    generate(rng, tier) {
      const v = rng.pick(["x", "y", "a", "m", "p"]);

      if (tier === 1) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          const a = rng.int(2, 9);
          let b = rng.int(2, 9);
          if (a === 2 && b === 2) b = 3;
          const expr = `${v}^${a + b}`;
          return {
            prompt: `Simplify {{${v}^${a} * ${v}^${b}}}.`,
            answer: { type: "expression", expr, form: "simplified", display: `{{${expr}}}` },
            traps: [
              { spec: { type: "expression", expr: `${v}^${a * b}` }, feedback: "When multiplying same bases, **add** the indices, don't multiply them." },
            ],
            hint: `Keep the base {{${v}}} and add the powers: {{${a} + ${b}}}.`,
            solution: [`{{${v}^${a} * ${v}^${b} = ${v}^(${a}+${b}) = ${expr}}}.`],
          };
        }
        if (mode === 1) {
          const b = rng.int(2, 7);
          const diff = rng.int(2, 8);
          const a = b + diff;
          const expr = `${v}^${diff}`;
          return {
            prompt: `Simplify {{${v}^${a} / ${v}^${b}}}.`,
            answer: { type: "expression", expr, form: "simplified", display: `{{${expr}}}` },
            hint: `Keep the base {{${v}}} and subtract the bottom index from the top: {{${a} - ${b}}}.`,
            solution: [`{{${v}^${a} / ${v}^${b} = ${v}^(${a}-${b}) = ${expr}}}.`],
          };
        }
        const a = rng.int(2, 7);
        let b = rng.int(2, 6);
        if (a === 2 && b === 2) b = 3;
        const expr = `${v}^${a * b}`;
        return {
          prompt: `Simplify {{(${v}^${a})^${b}}}.`,
          answer: { type: "expression", expr, form: "simplified", display: `{{${expr}}}` },
          traps: [
            { spec: { type: "expression", expr: `${v}^${a + b}` }, feedback: "For a power of a power, **multiply** the indices ({{a * b}}), don't add them." },
          ],
          hint: `Multiply the two powers together: {{${a} * ${b}}}.`,
          solution: [`{{(${v}^${a})^${b} = ${v}^(${a}*${b}) = ${expr}}}.`],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          const c1 = rng.int(2, 8);
          let c2 = rng.int(2, 8);
          if (c1 === 2 && c2 === 2) c2 = 3;
          const a = rng.int(2, 7);
          const b = rng.int(2, 7);
          const expr = `${c1 * c2}${v}^${a + b}`;
          return {
            prompt: `Simplify {{${c1}${v}^${a} * ${c2}${v}^${b}}}.`,
            answer: { type: "expression", expr, form: "simplified", display: `{{${expr}}}` },
            traps: [
              { spec: { type: "expression", expr: `${c1 + c2}${v}^${a + b}` }, feedback: "Multiply the numerical coefficients while adding the indices." },
            ],
            hint: `Multiply the coefficients ({{${c1} * ${c2}}}) and add the powers of {{${v}}}.`,
            solution: [`{{(${c1} * ${c2}) * ${v}^(${a}+${b}) = ${expr}}}.`],
          };
        }
        if (mode === 1) {
          const c = rng.int(2, 5);
          const b = c <= 3 ? rng.int(2, 3) : 2;
          const a = rng.int(2, 6);
          const coeff = c ** b;
          const expr = `${coeff}${v}^${a * b}`;
          return {
            prompt: `Simplify {{(${c}${v}^${a})^${b}}} completely.`,
            answer: { type: "expression", expr, form: "simplified", display: `{{${expr}}}` },
            traps: [
              { spec: { type: "expression", expr: `${c}${v}^${a * b}` }, feedback: `Don't forget to raise the coefficient ${c} to the power ${b} as well!` },
            ],
            hint: `Raise BOTH ${c} and {{${v}^${a}}} to the power ${b}: {{${c}^${b} * (${v}^${a})^${b}}}.`,
            solution: [`{{${c}^${b} = ${coeff}}} and {{(${v}^${a})^${b} = ${v}^${a * b}}} ⇒ {{${expr}}}.`],
          };
        }
        const k = rng.int(2, 8);
        const c = rng.int(2, 6);
        const b = rng.int(2, 6);
        const diff = rng.int(2, 7);
        const a = b + diff;
        const expr = `${k}${v}^${diff}`;
        return {
          prompt: `Simplify {{(${k * c}${v}^${a})/(${c}${v}^${b})}}.`,
          answer: { type: "expression", expr, form: "simplified", display: `{{${expr}}}` },
          hint: `Divide the numbers ({{${k * c} / ${c}}}) and subtract the powers of {{${v}}}.`,
          solution: [`{{${k * c}/${c} = ${k}}} and {{${v}^(${a}-${b}) = ${v}^${diff}}} ⇒ {{${expr}}}.`],
        };
      }

      // Tier 3: Combined bracket power + multiply/divide
      const c1 = rng.int(2, 4);
      const a = rng.int(2, 5);
      const b = rng.int(2, 6);
      const k = rng.int(2, 6);
      const d = rng.pick([2, 3, 4]);
      // Ensure (c1^2 * c2) / d = k * c1^2? Let c2 = d * k so numerator coeff = c1^2 * d * k, divided by d gives c1^2 * k!
      const c2 = d * k;
      const topExp = 2 * a + b;
      const e = rng.int(2, topExp - 2);
      const finalCoeff = c1 * c1 * k;
      const finalExp = topExp - e;
      const expr = `${finalCoeff}${v}^${finalExp}`;
      return {
        prompt: `Simplify {{((${c1}${v}^${a})^2 * ${c2}${v}^${b})/(${d}${v}^${e})}} completely.`,
        answer: { type: "expression", expr, form: "simplified", display: `{{${expr}}}` },
        hint: `Expand {{(${c1}${v}^${a})^2 = ${c1 * c1}${v}^${2 * a}}} first, combine the numerator, then divide by {{${d}${v}^${e}}}.`,
        solution: [
          `Expand the square: {{(${c1}${v}^${a})^2 = ${c1 * c1}${v}^${2 * a}}}.`,
          `Numerator: {{${c1 * c1}${v}^${2 * a} * ${c2}${v}^${b} = ${c1 * c1 * c2}${v}^${topExp}}}.`,
          `Divide by {{${d}${v}^${e}}}: {{${c1 * c1 * c2}/${d} = ${finalCoeff}}} and {{${v}^(${topExp}-${e}) = ${v}^${finalExp}}} ⇒ {{${expr}}}.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 2: Zero/negative indices & change of base (Level 2 — Sprint eligible)
  // =========================================================================
  {
    id: "indices-standard-form.zero-negative-base",
    topicId: "indices-standard-form",
    title: "Zero, negative indices & change of base",
    level: 2,
    guideRef: "zero-negative-indices",
    generate(rng, tier) {
      if (tier === 1) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          const b = rng.int(2, 9);
          const n = b <= 4 ? rng.int(1, 3) : rng.int(1, 2);
          const den = b ** n;
          return {
            prompt: `Evaluate {{${b}^(-${n})}} as a fraction in its simplest form.`,
            answer: { type: "fraction", n: 1, d: den, simplest: true },
            traps: [
              { spec: { type: "number", value: -den }, feedback: `A negative index means reciprocal ({{1/${den}}}), never a negative number.` },
            ],
            hint: `Use {{a^(-n) = 1/(a^n)}}.`,
            solution: [`{{${b}^(-${n}) = 1/(${b}^${n}) = 1/${den}}}.`],
          };
        }
        if (mode === 1) {
          const k = rng.int(2, 9);
          const b = rng.int(2, 12);
          const c = rng.int(1, 9);
          return {
            prompt: `Evaluate {{${k} * ${b}^0 + ${c}}}.`,
            answer: { type: "number", value: k + c },
            traps: [
              { spec: { type: "number", value: c }, feedback: `Remember {{${b}^0 = 1}} (NOT 0!), so {{${k} * 1 = ${k}}}.` },
            ],
            hint: `Any non-zero number to the power 0 equals 1.`,
            solution: [`{{${b}^0 = 1}}, so {{${k} * 1 + ${c} = ${k + c}}}.`],
          };
        }
        // Fraction base to negative power
        let p = rng.int(2, 7);
        let q = rng.int(2, 7);
        while (gcd(p, q) !== 1 || p === q) {
          p = rng.int(2, 7);
          q = rng.int(2, 7);
        }
        const e = rng.int(1, 2);
        const num = q ** e;
        const den = p ** e;
        return {
          prompt: `Evaluate {{(${p}/${q})^(-${e})}} as ${num > den ? "an improper fraction" : "a fraction"} in its simplest form.`,
          answer: { type: "fraction", n: num, d: den, simplest: true, form: num > den ? "improper" : "any" },
          hint: `Flip the fraction to drop the negative sign: {{(${q}/${p})^${e}}}.`,
          solution: [`{{(${p}/${q})^(-${e}) = (${q}/${p})^${e} = ${num}/${den}}}.`],
        };
      }

      if (tier === 2) {
        // Change of base: write N^p * M^q (or ÷) as base^k, find k
        const family = rng.pick([
          { base: 2, pows: [2, 3, 4, 5] },
          { base: 3, pows: [2, 3, 4] },
          { base: 5, pows: [2, 3] },
        ]);
        const p1 = rng.pick(family.pows);
        const p2 = rng.pick(family.pows);
        const N = family.base ** p1;
        const M = family.base ** p2;
        const a = rng.int(2, 6);
        const b = rng.int(2, 5);
        const isMul = rng.bool(0.6);
        const k = isMul ? p1 * a + p2 * b : p1 * a - p2 * b;
        return {
          prompt: `Write {{${N}^${a} ${isMul ? "*" : "/"} ${M}^${b}}} as a single power of ${family.base} in the form {{${family.base}^k}}. Find the value of {{k}}.`,
          answer: { type: "number", value: k },
          hint: `Rewrite {{${N} = ${family.base}^${p1}}} and {{${M} = ${family.base}^${p2}}}, then apply index laws.`,
          solution: [
            `{{${N}^${a} = (${family.base}^${p1})^${a} = ${family.base}^${p1 * a}}} and {{${M}^${b} = (${family.base}^${p2})^${b} = ${family.base}^${p2 * b}}}.`,
            `Combine powers: {{${p1 * a} ${isMul ? "+" : "-"} ${p2 * b} = ${k}}}, so {{k = ${k}}}.`,
          ],
        };
      }

      // Tier 3: Solve N^x * base^c = base^R (or M^q) for integer x
      const base = rng.pick([2, 3]);
      const p1 = rng.pick([2, 3]);
      const N = base ** p1;
      const x = rng.int(1, 6);
      const c = rng.nonZero(-4, 5);
      const R = p1 * x + c;
      const rhsStr = `${base}^${powTex(R)}`;
      const cStr = `${base}^${powTex(c)}`;
      return {
        prompt: `Solve {{${N}^x * ${cStr} = ${rhsStr}}} for {{x}}.`,
        answer: { type: "number", value: x },
        hint: `Rewrite {{${N} = ${base}^${p1}}} so the left side becomes {{${base}^(${p1}x ${c >= 0 ? "+" : "-"} ${Math.abs(c)})}}, then equate exponents.`,
        solution: [
          `Change base: {{(${base}^${p1})^x * ${cStr} = ${rhsStr}}} ⇒ {{${base}^(${p1}x ${c >= 0 ? "+" : "-"} ${Math.abs(c)}) = ${rhsStr}}}.`,
          `Equate exponents: {{${p1}x ${c >= 0 ? "+" : "-"} ${Math.abs(c)} = ${R}}} ⇒ {{${p1}x = ${p1 * x}}} ⇒ {{x = ${x}}}.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 3: Standard form conversions & adjustments (Level 1 — Sprint eligible)
  // =========================================================================
  {
    id: "indices-standard-form.standard-form-convert",
    topicId: "indices-standard-form",
    title: "Standard form conversions & adjusting",
    level: 1,
    guideRef: "standard-form-conversions",
    generate(rng, tier) {
      if (tier === 1) {
        // Large numbers: ordinary <-> standard form
        const d1 = rng.int(1, 9);
        const d2 = rng.int(0, 9);
        const d3 = rng.bool(0.5) ? rng.int(1, 9) : 0;
        const sig = d3 > 0 ? `${d1}${d2}${d3}` : d2 > 0 ? `${d1}${d2}` : `${d1}`;
        const mantStr = sig.length === 1 ? sig : `${sig[0]}.${sig.slice(1)}`;
        const exp = rng.int(3, 7);
        const ord = ordinaryStr(sig, exp);
        const val = Number(`${mantStr}e${exp}`);
        if (rng.bool(0.6)) {
          return {
            prompt: `Write \`${ord}\` in standard form.`,
            answer: { type: "number", value: val, standardForm: true, display: sfExpr(mantStr, exp) },
            hint: `Place the decimal point after ${d1} to get ${mantStr}, then count how many places it shifted left.`,
            solution: [`Moving the decimal point ${exp} places left turns \`${ord}\` into ${sfExpr(mantStr, exp)}.`],
          };
        }
        return {
          prompt: `Write ${sfExpr(mantStr, exp)} as an ordinary number.`,
          answer: { type: "number", value: val, allowFraction: false, display: ord },
          hint: `Shift the decimal point ${exp} places to the right.`,
          solution: [`Shifting the decimal point ${exp} places right gives \`${ord}\`.`],
        };
      }

      if (tier === 2) {
        // Small decimals: ordinary <-> standard form
        const d1 = rng.int(1, 9);
        const d2 = rng.int(0, 9);
        const d3 = rng.bool(0.4) ? rng.int(1, 9) : 0;
        const sig = d3 > 0 ? `${d1}${d2}${d3}` : d2 > 0 ? `${d1}${d2}` : `${d1}`;
        const mantStr = sig.length === 1 ? sig : `${sig[0]}.${sig.slice(1)}`;
        const exp = rng.int(-6, -2);
        const ord = ordinaryStr(sig, exp);
        const val = Number(`${mantStr}e${exp}`);
        if (rng.bool(0.6)) {
          return {
            prompt: `Write \`${ord}\` in standard form.`,
            answer: { type: "number", value: val, standardForm: true, display: sfExpr(mantStr, exp) },
            hint: `Count ALL leading zeros before ${d1} (including the 0 before the decimal point): there are ${-exp}.`,
            solution: [`Shifting the decimal point ${-exp} places right gives ${sfExpr(mantStr, exp)}.`],
          };
        }
        return {
          prompt: `Write ${sfExpr(mantStr, exp)} as an ordinary decimal.`,
          answer: { type: "number", value: val, allowFraction: false, display: ord },
          hint: `Shift the decimal point ${-exp} places to the left (${-exp} leading zeros in total).`,
          solution: [`Shifting ${-exp} places left gives \`${ord}\`.`],
        };
      }

      // Tier 3: Fix "almost standard form" numbers into valid standard form
      const d1 = rng.int(1, 9);
      const d2 = rng.int(1, 9);
      const mantStr = `${d1}.${d2}`;
      const shift = rng.pick([-2, -1, 1, 2]);
      const rawExp = rng.int(-5, 6);
      const finalExp = rawExp + shift;
      const rawFront =
        shift === 1 ? `${d1}${d2}` :
        shift === 2 ? `${d1}${d2}0` :
        shift === -1 ? `0.${d1}${d2}` :
        `0.0${d1}${d2}`;
      const val = Number(`${mantStr}e${finalExp}`);
      return {
        prompt: `Rewrite {{${rawFront} * 10^${powTex(rawExp)}}} in valid standard form.`,
        answer: { type: "number", value: val, standardForm: true, display: sfExpr(mantStr, finalExp) },
        hint: `First write {{${rawFront}}} in standard form ({{${mantStr} * 10^${powTex(shift)}}}), then combine the powers of 10.`,
        solution: [
          `Rewrite {{${rawFront} = ${mantStr} * 10^${powTex(shift)}}}.`,
          `Combine exponents: {{${shift} + (${rawExp}) = ${finalExp}}} ⇒ ${sfExpr(mantStr, finalExp)}.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 4: Calculating in standard form (Level 3)
  // =========================================================================
  {
    id: "indices-standard-form.standard-form-calc",
    topicId: "indices-standard-form",
    title: "Multiplying, dividing & adding in standard form",
    level: 3,
    guideRef: "standard-form-calculations",
    generate(rng, tier) {
      if (tier === 1) {
        // Multiply (a * 10^m) * (b * 10^n)
        const a = rng.int(2, 9);
        const b = rng.int(2, 9);
        const m = rng.int(-4, 7);
        const n = rng.int(-4, 6);
        const prod = a * b;
        const sf = toCanonicalSF(prod, 0, m + n);
        return {
          prompt: `Work out {{(${a} * 10^${powTex(m)}) * (${b} * 10^${powTex(n)})}} and give your answer in standard form.`,
          answer: { type: "number", value: sf.value, standardForm: true, display: sfExpr(sf.mantStr, sf.exp) },
          hint: `Multiply {{${a} * ${b} = ${prod}}} and add powers {{${m} + (${n}) = ${m + n}}}; adjust if ${prod} ≥ 10.`,
          solution: [
            `{{(${a} * ${b}) * 10^(${m} + (${n})) = ${prod} * 10^${powTex(m + n)}}}.`,
            prod >= 10
              ? `Adjust: {{${prod} = ${sf.mantStr} * 10^1}}, giving ${sfExpr(sf.mantStr, sf.exp)}.`
              : `Already in valid standard form: ${sfExpr(sf.mantStr, sf.exp)}.`,
          ],
        };
      }

      if (tier === 2) {
        // Clean exact division (a * 10^m) / (b * 10^n) including < 1 adjustments
        const pairs: Array<[number, number, number]> = [
          // [aTenths, b, qTenths] where (aTenths/10) / b = qTenths/10
          [12, 2, 6], [16, 2, 8], [18, 2, 9], [30, 2, 15], [50, 2, 25], [70, 2, 35], [90, 2, 45],
          [12, 3, 4], [15, 3, 5], [18, 3, 6], [24, 3, 8], [27, 3, 9], [45, 3, 15], [75, 3, 25],
          [16, 4, 4], [20, 4, 5], [24, 4, 6], [28, 4, 7], [36, 4, 9], [60, 4, 15],
          [15, 5, 3], [20, 5, 4], [30, 5, 6], [35, 5, 7], [40, 5, 8], [45, 5, 9], [60, 5, 12], [75, 5, 15], [90, 5, 18],
          [18, 6, 3], [24, 6, 4], [30, 6, 5], [42, 6, 7], [48, 6, 8], [54, 6, 9],
          [24, 8, 3], [40, 8, 5], [56, 8, 7], [72, 8, 9],
          [27, 9, 3], [36, 9, 4], [45, 9, 5], [54, 9, 6], [72, 9, 8],
        ];
        const [aT, b, qT] = rng.pick(pairs);
        const aStr = decFromInt(aT, 1);
        const qStr = decFromInt(qT, 1);
        const m = rng.int(-3, 8);
        const n = rng.int(-4, 6);
        const rawExp = m - n;
        const sf = toCanonicalSF(qT, 1, rawExp);
        return {
          prompt: `Work out {{(${aStr} * 10^${powTex(m)}) / (${b} * 10^${powTex(n)})}} and give your answer in standard form.`,
          answer: { type: "number", value: sf.value, standardForm: true, display: sfExpr(sf.mantStr, sf.exp) },
          hint: `Divide {{${aStr} / ${b} = ${qStr}}} and subtract powers {{${m} - (${n}) = ${rawExp}}}; adjust if ${qStr} < 1.`,
          solution: [
            `{{(${aStr} / ${b}) * 10^(${m} - (${n})) = ${qStr} * 10^${powTex(rawExp)}}}.`,
            qT < 10
              ? `Adjust {{${qStr} = ${sf.mantStr} * 10^(-1)}} ⇒ ${sfExpr(sf.mantStr, sf.exp)}.`
              : `Already in valid standard form: ${sfExpr(sf.mantStr, sf.exp)}.`,
          ],
        };
      }

      // Tier 3: Add or subtract with exponents differing by 1
      const isAdd = rng.bool(0.5);
      const aT = rng.int(22, 88); // 2.2 .. 8.8
      const b = rng.int(2, 9); // 2 .. 9 -> 0.2 .. 0.9 in 10^k
      const k = rng.int(-4, 7);
      const aStr = decFromInt(aT, 1);
      const resT = isAdd ? aT + b : aT - b;
      const sf = toCanonicalSF(resT, 1, k);
      const op = isAdd ? "+" : "-";
      return {
        prompt: `Work out {{${aStr} * 10^${powTex(k)} ${op} ${b} * 10^${powTex(k - 1)}}} and give your answer in standard form.`,
        answer: { type: "number", value: sf.value, standardForm: true, display: sfExpr(sf.mantStr, sf.exp) },
        hint: `Match both terms to {{10^${powTex(k)}}}: rewrite {{${b} * 10^${powTex(k - 1)} = 0.${b} * 10^${powTex(k)}}}.`,
        solution: [
          `Rewrite {{${b} * 10^${powTex(k - 1)} = 0.${b} * 10^${powTex(k)}}}.`,
          `Combine: {{(${aStr} ${op} 0.${b}) * 10^${powTex(k)} = ${decFromInt(resT, 1)} * 10^${powTex(k)}}}${resT >= 100 ? ` = ${sfExpr(sf.mantStr, sf.exp)}` : ""}.`,
        ],
      };
    },
  },
];
