import type { Drill } from "./types.ts";
import { gcd } from "../mathParse.ts";

function lcm(a: number, b: number): number {
  return Math.abs(a * b) / gcd(a, b);
}

function roundTo(n: number, dp: number): number {
  const f = 10 ** dp;
  return Math.round((n + Number.EPSILON) * f) / f;
}

function fmtMoney(n: number): string {
  const r = roundTo(n, 2);
  return Number.isInteger(r) ? `£${r}` : `£${r.toFixed(2)}`;
}

function fmtPow(v: string, e: number): string {
  return e === 1 ? v : `${v}^${e}`;
}

function buildMonoFrac(numCoeff: number, denCoeff: number, v: string, netExp: number): { expr: string; display: string } {
  const g = gcd(numCoeff, denCoeff);
  const a = numCoeff / g;
  const b = denCoeff / g;
  if (netExp === 0) {
    if (b === 1) return { expr: String(a), display: String(a) };
    return { expr: `${a}/${b}`, display: `{{${a}/${b}}}` };
  }
  if (netExp > 0) {
    const p = fmtPow(v, netExp);
    const top = a === 1 ? p : `${a}${p}`;
    if (b === 1) return { expr: top, display: `{{${top}}}` };
    const expr = a === 1 && netExp === 1 ? `${v}/${b}` : `(${top})/${b}`;
    return { expr, display: `{{${expr}}}` };
  }
  const p = fmtPow(v, -netExp);
  const bot = b === 1 ? p : `${b}${p}`;
  const expr = b === 1 && -netExp === 1 ? `${a}/${v}` : `${a}/(${bot})`;
  return { expr, display: `{{${expr}}}` };
}

export const drills: Drill[] = [
  // =========================================================================
  // DRILL 1: Recurring decimals -> exact fractions (Level 1 — Sprint eligible)
  // =========================================================================
  {
    id: "fdp-ratio-fractions.recurring-to-fraction",
    topicId: "fdp-ratio-fractions",
    title: "Recurring decimals to fractions",
    level: 1,
    guideRef: "recurring-decimals",
    generate(rng, tier) {
      if (tier === 1) {
        if (rng.bool(0.45)) {
          // k.ȧ -> (9k + a) / 9
          const k = rng.int(0, 3);
          const a = rng.int(1, 8);
          const rawN = 9 * k + a;
          const g = gcd(rawN, 9);
          const n = rawN / g;
          const d = 9 / g;
          const decText = `${k}.${a}̇ (${k}.${String(a).repeat(4)}…)`;
          return {
            prompt: k === 0
              ? `Convert ${decText} to a fraction in its simplest form.`
              : `Convert ${decText} to an improper fraction in its simplest form.`,
            answer: { type: "fraction", n, d, simplest: true, form: k === 0 ? "any" : "improper" },
            hint: `Let {{x = ${k}.${String(a).repeat(4)}...}} and subtract {{x}} from {{10x}}.`,
            solution: [
              `Let {{x = ${k}.${String(a).repeat(4)}...}}, so {{10x = ${k === 0 ? a : `${k}${a}`}.${String(a).repeat(4)}...}}.`,
              `Subtract: {{9x = ${rawN}}} ⇒ {{x = ${rawN}/9}}${g > 1 ? ` = {{${n}/${d}}}` : ""}.`,
            ],
          };
        }
        // 0.ȧḃ -> (10a + b) / 99 where a !== b
        const a = rng.int(0, 8);
        let b = rng.int(1, 9);
        if (a === b) b = (b % 9) + 1;
        const rawN = 10 * a + b;
        const g = gcd(rawN, 99);
        const n = rawN / g;
        const d = 99 / g;
        const pair = `${a}${b}`;
        return {
          prompt: `Convert 0.${a}̇${b}̇ (0.${pair}${pair}…) to a fraction in its simplest form.`,
          answer: { type: "fraction", n, d, simplest: true },
          hint: "Two digits repeat, so multiply {{x}} by 100 and calculate {{100x - x = 99x}}.",
          solution: [
            `Let {{x = 0.${pair}${pair}...}}, so {{100x = ${rawN}.${pair}${pair}...}}.`,
            `Subtract: {{99x = ${rawN}}} ⇒ {{x = ${rawN}/99}}${g > 1 ? ` = {{${n}/${d}}}` : ""}.`,
          ],
        };
      }

      if (tier === 2) {
        // 0.aḃ -> (9a + b) / 90 where a !== b
        const a = rng.int(1, 9);
        let b = rng.int(1, 8);
        if (a === b) b = (b % 8) + 1;
        const rawN = 10 * a + b - a;
        const g = gcd(rawN, 90);
        const n = rawN / g;
        const d = 90 / g;
        return {
          prompt: `Convert 0.${a}${b}̇ (0.${a}${String(b).repeat(4)}…) to a fraction in its simplest form.`,
          answer: { type: "fraction", n, d, simplest: true },
          hint: `Align the repeating tails with {{10x = ${a}.${String(b).repeat(4)}...}} and {{100x = ${a}${b}.${String(b).repeat(4)}...}}.`,
          solution: [
            `Let {{x = 0.${a}${String(b).repeat(4)}...}}, so {{10x = ${a}.${String(b).repeat(4)}...}} and {{100x = ${a}${b}.${String(b).repeat(4)}...}}.`,
            `Subtract: {{90x = ${a}${b} - ${a} = ${rawN}}}.`,
            `{{x = ${rawN}/90}}${g > 1 ? ` = {{${n}/${d}}}` : ""}.`,
          ],
        };
      }

      // Tier 3: 0.aḃċ -> (100a + 10b + c - a) / 990
      const a = rng.int(1, 8);
      const b = rng.int(0, 9);
      let c = rng.int(1, 9);
      if (b === c) c = (c % 9) + 1;
      const rawN = 100 * a + 10 * b + c - a;
      const g = gcd(rawN, 990);
      const n = rawN / g;
      const d = 990 / g;
      const rep = `${b}${c}`;
      return {
        prompt: `Convert 0.${a}${b}̇${c}̇ (0.${a}${rep}${rep}…) to a fraction in its simplest form.`,
        answer: { type: "fraction", n, d, simplest: true },
        hint: "Use {{10x}} and {{1000x}} so the two-digit repeating tails align, then compute {{990x}}.",
        solution: [
          `Let {{x = 0.${a}${rep}${rep}...}}. Then {{10x = ${a}.${rep}${rep}...}} and {{1000x = ${a}${rep}.${rep}${rep}...}}.`,
          `Subtract: {{990x = ${100 * a + 10 * b + c} - ${a} = ${rawN}}}.`,
          `{{x = ${rawN}/990}}${g > 1 ? ` = {{${n}/${d}}}` : ""}.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 2: Decimal multipliers, compound & reverse % (Level 1 — Sprint eligible)
  // =========================================================================
  {
    id: "fdp-ratio-fractions.multiplier-percent",
    topicId: "fdp-ratio-fractions",
    title: "Decimal multipliers & percentage change",
    level: 1,
    guideRef: "percentage-multipliers",
    generate(rng, tier) {
      if (tier === 1) {
        const inc = rng.bool(0.5);
        const orig = rng.int(2, 25) * 20;
        const rate = rng.pick([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 75]);
        const mult = inc ? roundTo(1 + rate / 100, 2) : roundTo(1 - rate / 100, 2);
        const ans = roundTo(orig * mult, 2);
        const word = inc ? "Increase" : "Decrease";
        const trapVal = roundTo(orig * (rate / 100), 2);
        return {
          prompt: `${word} £${orig} by ${rate}% using a decimal multiplier.`,
          answer: { type: "number", value: ans, display: fmtMoney(ans) },
          traps: trapVal !== ans
            ? [{ spec: { type: "number", value: trapVal }, feedback: `${fmtMoney(trapVal)} is ${rate}% of £${orig} — multiply by ${mult} to get the final amount.` }]
            : undefined,
          hint: `The decimal multiplier for a ${rate}% ${inc ? "increase" : "decrease"} is {{${mult}}}.`,
          solution: [
            `Multiplier = {{1 ${inc ? "+" : "-"} ${rate}/100 = ${mult}}}.`,
            `{{${orig} * ${mult} = ${ans}}}, giving ${fmtMoney(ans)}.`,
          ],
        };
      }

      if (tier === 2) {
        // Reverse percentage with guaranteed clean original and clean final price
        const inc = rng.bool(0.5);
        const orig = rng.int(4, 30) * 20;
        const rate = rng.pick([5, 10, 15, 20, 25, 30, 35, 40, 50]);
        const mult = inc ? roundTo(1 + rate / 100, 2) : roundTo(1 - rate / 100, 2);
        const finalVal = roundTo(orig * mult, 2);
        const wrongBack = roundTo(finalVal * (inc ? 1 - rate / 100 : 1 + rate / 100), 2);
        return {
          prompt: inc
            ? `After a ${rate}% price increase, an item costs ${fmtMoney(finalVal)}. Find its original price before the increase.`
            : `After a ${rate}% sale discount, an item costs ${fmtMoney(finalVal)}. Find its original price before the discount.`,
          answer: { type: "number", value: orig, display: fmtMoney(orig) },
          traps: [
            { spec: { type: "number", value: wrongBack }, feedback: `Don't apply ${rate}% to the new price — divide ${fmtMoney(finalVal)} by ${mult}.` },
          ],
          hint: `Write {{Original * ${mult} = ${finalVal}}}, then divide by {{${mult}}}.`,
          solution: [
            `Multiplier for a ${rate}% ${inc ? "increase" : "decrease"} is {{${mult}}}.`,
            `Original price = {{${finalVal} / ${mult} = ${orig}}}, so ${fmtMoney(orig)}.`,
          ],
        };
      }

      // Tier 3: 2-year compound change (exact to 2 d.p.)
      const inc = rng.bool(0.5);
      const orig = rng.int(2, 20) * 100;
      const rate = rng.pick([5, 10, 15, 20, 25, 30]);
      const mult = inc ? roundTo(1 + rate / 100, 2) : roundTo(1 - rate / 100, 2);
      const m2 = roundTo(mult * mult, 4);
      const ans = roundTo(orig * m2, 2);
      const simpleAns = roundTo(orig * (inc ? 1 + (2 * rate) / 100 : 1 - (2 * rate) / 100), 2);
      return {
        prompt: inc
          ? `An account of £${orig} earns ${rate}% compound interest per year. Find its exact value after 2 years.`
          : `A machine worth £${orig} depreciates by ${rate}% each year. Find its exact value after 2 years.`,
        answer: { type: "number", value: ans, display: fmtMoney(ans) },
        traps: [
          { spec: { type: "number", value: simpleAns }, feedback: `${fmtMoney(simpleAns)} uses simple change (${2 * rate}%). Compound change uses {{${mult}^2 = ${m2}}}.` },
        ],
        hint: `Apply the yearly multiplier {{${mult}}} twice: {{${orig} * ${mult}^2}}.`,
        solution: [
          `Yearly multiplier = {{${mult}}}, so 2-year multiplier = {{${mult}^2 = ${m2}}}.`,
          `Final value = {{${orig} * ${m2} = ${ans}}}, giving ${fmtMoney(ans)}.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 3: Ratio sharing, differences & combining (Level 2 — Sprint eligible)
  // =========================================================================
  {
    id: "fdp-ratio-fractions.ratio-sharing-combining",
    topicId: "fdp-ratio-fractions",
    title: "Ratio sharing, differences & combining",
    level: 2,
    guideRef: "ratio-problems",
    generate(rng, tier) {
      const names = [
        ["Ava", "Ben"],
        ["Kai", "Zara"],
        ["Liam", "Maya"],
        ["Noah", "Priya"],
        ["Sam", "Chloe"],
      ] as const;

      if (tier === 1) {
        const [n1, n2] = rng.pick(names);
        let a = rng.int(2, 8);
        let b = rng.int(2, 9);
        while (gcd(a, b) !== 1 || a === b) {
          a = rng.int(2, 8);
          b = rng.int(2, 9);
        }
        const unit = rng.int(3, 14);
        const total = (a + b) * unit;
        const askFirst = rng.bool(0.5);
        const ans = (askFirst ? a : b) * unit;
        const other = (askFirst ? b : a) * unit;
        const who = askFirst ? n1 : n2;
        return {
          prompt: `${n1} and ${n2} share £${total} in the ratio \`${a} : ${b}\`. How much does **${who}** receive?`,
          answer: { type: "number", value: ans, display: `£${ans}` },
          traps: [
            { spec: { type: "number", value: other }, feedback: `£${other} is the other person's share — check which part belongs to ${who}.` },
          ],
          hint: `Total parts = {{${a} + ${b} = ${a + b}}}. Find 1 part first, then multiply by ${askFirst ? a : b}.`,
          solution: [
            `Total parts = {{${a} + ${b} = ${a + b}}}, so 1 part = {{${total} / ${a + b} = ${unit}}} pounds.`,
            `${who} gets {{${askFirst ? a : b} * ${unit} = ${ans}}} pounds (£${ans}).`,
          ],
        };
      }

      if (tier === 2) {
        const [n1, n2] = rng.pick(names);
        let a = rng.int(2, 7);
        let b = rng.int(a + 2, 11);
        while (gcd(a, b) !== 1) {
          a = rng.int(2, 7);
          b = rng.int(a + 2, 11);
        }
        const unit = rng.int(3, 12);
        const diff = (b - a) * unit;
        const total = (a + b) * unit;
        return {
          prompt: `${n1} and ${n2} share counters in the ratio \`${a} : ${b}\`. ${n2} receives ${diff} more counters than ${n1}. How many counters do they have **altogether**?`,
          answer: { type: "number", value: total },
          traps: [
            { spec: { type: "number", value: b * unit }, feedback: `${b * unit} is ${n2}'s share alone — multiply 1 part by total parts (${a + b}).` },
          ],
          hint: `Difference in parts = {{${b} - ${a} = ${b - a}}}. Those parts equal ${diff} counters.`,
          solution: [
            `Difference = {{${b} - ${a} = ${b - a}}} parts = ${diff}, so 1 part = {{${diff} / ${b - a} = ${unit}}}.`,
            `Total = {{(${a} + ${b}) * ${unit} = ${a + b} * ${unit} = ${total}}} counters.`,
          ],
        };
      }

      // Tier 3: Combine a : b and b : c into simplest a : b : c
      let a = rng.int(2, 7);
      let b1 = rng.int(2, 7);
      while (gcd(a, b1) !== 1) {
        a = rng.int(2, 7);
        b1 = rng.int(2, 7);
      }
      let b2 = rng.int(2, 7);
      let c = rng.int(2, 7);
      while (gcd(b2, c) !== 1 || b2 === b1) {
        b2 = rng.int(2, 7);
        c = rng.int(2, 7);
      }
      const m = lcm(b1, b2);
      const k1 = m / b1;
      const k2 = m / b2;
      const A = a * k1;
      const B = m;
      const C = c * k2;
      const g = gcd(A, gcd(B, C));
      const p1 = A / g;
      const p2 = B / g;
      const p3 = C / g;
      return {
        prompt: `Given \`a : b = ${a} : ${b1}\` and \`b : c = ${b2} : ${c}\`, write \`a : b : c\` in its simplest form.`,
        answer: { type: "ratio", parts: [p1, p2, p3], simplest: true },
        hint: `Match the shared letter {{b}} to {{LCM(${b1}, ${b2}) = ${m}}}.`,
        solution: [
          `{{LCM(${b1}, ${b2}) = ${m}}}.`,
          `Scale \`${a} : ${b1}\` by ${k1} ⇒ \`${A} : ${B}\`; scale \`${b2} : ${c}\` by ${k2} ⇒ \`${B} : ${C}\`.`,
          `Combined simplest ratio: \`${p1} : ${p2} : ${p3}\`.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 4: Algebraic fractions simplify, multiply & divide (Level 3)
  // =========================================================================
  {
    id: "fdp-ratio-fractions.algebraic-fractions-ops",
    topicId: "fdp-ratio-fractions",
    title: "Simplifying & dividing algebraic fractions",
    level: 3,
    guideRef: "algebraic-fractions",
    generate(rng, tier) {
      const v = rng.pick(["x", "y", "a", "m"]);

      if (tier === 1) {
        // Monomial cancellation: (k*a*v^p) / (k*b*v^q)
        const k = rng.int(2, 6);
        let a = rng.int(1, 7);
        let b = rng.int(1, 7);
        while (gcd(a, b) !== 1 || (a === 1 && b === 1)) {
          a = rng.int(1, 7);
          b = rng.int(1, 7);
        }
        const p = rng.int(1, 5);
        let q = rng.int(1, 5);
        while (q === p) q = rng.int(1, 5);
        const topC = k * a;
        const botC = k * b;
        const res = buildMonoFrac(a, b, v, p - q);
        return {
          prompt: `Simplify {{(${topC}${fmtPow(v, p)})/(${botC}${fmtPow(v, q)})}} fully.`,
          answer: { type: "expression", expr: res.expr, form: "simplified", display: res.display },
          hint: `Divide ${topC} and ${botC} by ${k}, and cancel {{${fmtPow(v, Math.min(p, q))}}} from top and bottom.`,
          solution: [
            `Numerical part: {{${topC}/${botC} = ${a}/${b}}}.`,
            `Powers of {{${v}}}: {{${fmtPow(v, p)} / ${fmtPow(v, q)}}} leaves {{${fmtPow(v, Math.abs(p - q))}}} on the ${p > q ? "numerator" : "denominator"}.`,
            `Simplified answer: ${res.display}.`,
          ],
        };
      }

      if (tier === 2) {
        // Division: (a*v^p)/b ÷ (c*v^q)/d -> (a*d * v^(p-q)) / (b*c)
        const a = rng.int(2, 8);
        const b = rng.int(2, 9);
        const c = rng.int(2, 8);
        const d = rng.int(2, 9);
        const p = rng.int(1, 4);
        let q = rng.int(1, 4);
        while (q === p) q = rng.int(1, 4);
        const res = buildMonoFrac(a * d, b * c, v, p - q);
        return {
          prompt: `Work out {{(${a}${fmtPow(v, p)})/${b} ÷ (${c}${fmtPow(v, q)})/${d}}} in its simplest form.`,
          answer: { type: "expression", expr: res.expr, form: "simplified", display: res.display },
          hint: `Keep–Change–Flip: multiply {{(${a}${fmtPow(v, p)})/${b}}} by {{${d}/(${c}${fmtPow(v, q)})}}, then cancel common factors.`,
          solution: [
            `Flip the divisor: {{(${a}${fmtPow(v, p)})/${b} * ${d}/(${c}${fmtPow(v, q)}) = (${a * d}${fmtPow(v, p)})/(${b * c}${fmtPow(v, q)})}}.`,
            `Cancel numerical HCF (${gcd(a * d, b * c)}) and powers of {{${v}}} ⇒ ${res.display}.`,
          ],
        };
      }

      // Tier 3: Factorise & cancel (common bracket or difference of two squares)
      if (rng.bool(0.5)) {
        // (a*v + a*c) / (b*v^2 + b*c*v) = a / (b*v)
        let a = rng.int(2, 9);
        let b = rng.int(1, 7);
        while (gcd(a, b) !== 1) {
          a = rng.int(2, 9);
          b = rng.int(1, 7);
        }
        const c = rng.int(2, 7);
        const res = buildMonoFrac(a, b, v, -1);
        const botV2 = b === 1 ? `${v}^2` : `${b}${v}^2`;
        const botV = b * c === 1 ? v : `${b * c}${v}`;
        return {
          prompt: `Simplify {{(${a}${v} + ${a * c})/(${botV2} + ${botV})}} fully (for {{${v} != 0, -${c}}}).`,
          answer: { type: "expression", expr: res.expr, form: "simplified", display: res.display },
          hint: `Factorise {{${a}}} from the numerator and {{${b === 1 ? v : `${b}${v}`}}} from the denominator.`,
          solution: [
            `Factorise top and bottom: {{(${a}(${v} + ${c}))/(${b === 1 ? v : `${b}${v}`}(${v} + ${c}))}}.`,
            `Cancel the common bracket {{(${v} + ${c})}} ⇒ ${res.display}.`,
          ],
        };
      }

      // Difference of two squares: (v^2 - c^2) / (b*v + b*c) = (v - c)/b
      const c = rng.int(2, 9);
      const b = rng.int(1, 7);
      const expr = b === 1 ? `${v}-${c}` : `(${v}-${c})/${b}`;
      const display = b === 1 ? `{{${v} - ${c}}}` : `{{(${v} - ${c})/${b}}}`;
      const botStr = b === 1 ? `${v} + ${c}` : `${b}${v} + ${b * c}`;
      return {
        prompt: `Simplify {{(${v}^2 - ${c * c})/(${botStr})}} fully (for {{${v} != -${c}}}).`,
        answer: { type: "expression", expr, form: "simplified", display },
        hint: `Use difference of two squares on the numerator: {{${v}^2 - ${c * c} = (${v} - ${c})(${v} + ${c})}}.`,
        solution: [
          `Factorise top and bottom: {{((${v} - ${c})(${v} + ${c}))/(${b === 1 ? `(${v} + ${c})` : `${b}(${v} + ${c})`})}}.`,
          `Cancel {{(${v} + ${c})}} ⇒ ${display}.`,
        ],
      };
    },
  },
];
