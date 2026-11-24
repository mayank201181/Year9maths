import type { Drill } from "./types.ts";
import { gcd } from "../mathParse.ts";

/** Format linear expression ax + b cleanly (no 1x, no + -3, no + 0). */
function fmtLinear(a: number, b: number, v = "x"): string {
  const parts: string[] = [];
  if (a !== 0) {
    parts.push(a === 1 ? v : a === -1 ? `-${v}` : `${a}${v}`);
  }
  if (b !== 0) {
    if (parts.length === 0) parts.push(`${b}`);
    else parts.push(b > 0 ? `+ ${b}` : `- ${Math.abs(b)}`);
  }
  return parts.length ? parts.join(" ") : "0";
}

/** Format quadratic expression Ax^2 + Bx + C cleanly. */
function fmtQuad(A: number, B: number, C: number, v = "x"): string {
  const parts: string[] = [];
  if (A !== 0) {
    parts.push(A === 1 ? `${v}^2` : A === -1 ? `-${v}^2` : `${A}${v}^2`);
  }
  if (B !== 0) {
    const absB = Math.abs(B);
    const term = absB === 1 ? v : `${absB}${v}`;
    if (parts.length === 0) parts.push(B < 0 ? `-${term}` : term);
    else parts.push(B > 0 ? `+ ${term}` : `- ${term}`);
  }
  if (C !== 0) {
    const absC = Math.abs(C);
    if (parts.length === 0) parts.push(`${C}`);
    else parts.push(C > 0 ? `+ ${absC}` : `- ${absC}`);
  }
  return parts.length ? parts.join(" ") : "0";
}

function fmtSigned(n: number): string {
  return n >= 0 ? `+ ${n}` : `- ${Math.abs(n)}`;
}

export const drills: Drill[] = [
  // ===========================================================================
  // DRILL 1: EXPANDING PAIRS OF BRACKETS (Level 1 — 60s Sprint eligible)
  // ===========================================================================
  {
    id: "algebraic-expressions.expand-double",
    topicId: "algebraic-expressions",
    title: "Expand & Simplify Double Brackets",
    level: 1,
    guideRef: "expanding-double-brackets",
    generate(rng, tier) {
      if (tier === 1) {
        const a = rng.nonZero(-8, 8);
        let b = rng.nonZero(-8, 8);
        if (a === -b && rng.bool(0.5)) b = rng.nonZero(1, 8);
        const B = a + b;
        const C = a * b;
        const expanded = fmtQuad(1, B, C);
        const traps = [];
        if (B !== C) {
          traps.push({
            spec: { type: "expression" as const, expr: fmtQuad(1, C, B) },
            feedback: `Sum gives the x-term (${a} + ${b} = ${B}), product gives the constant (${a} × ${b} = ${C}).`,
          });
        }
        if (a < 0 && b < 0) {
          traps.push({
            spec: { type: "expression" as const, expr: fmtQuad(1, B, -C) },
            feedback: `A negative times a negative is positive: (${a}) × (${b}) = +${C}.`,
          });
        }
        return {
          prompt: `Expand and simplify {{(${fmtLinear(1, a)})(${fmtLinear(1, b)})}}.`,
          answer: { type: "expression", expr: expanded, form: "expanded", display: `{{${expanded}}}` },
          hint: "Multiply First, Outer, Inner, Last, then collect the two x-terms.",
          traps,
          solution: [
            `Outer + Inner: {{${fmtLinear(b, 0)} ${fmtSigned(a)}x = ${B === 0 ? "0" : fmtLinear(B, 0)}}}`,
            `Last: {{(${a}) * (${b}) = ${C}}}`,
            `Result: {{${expanded}}}`,
          ],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // Perfect square (x + a)^2 or (ax + b)^2
          const a = rng.bool(0.45) ? rng.int(2, 4) : 1;
          const b = rng.nonZero(-7, 7);
          const A = a * a;
          const B = 2 * a * b;
          const C = b * b;
          const expanded = fmtQuad(A, B, C);
          return {
            prompt: `Expand and simplify {{(${fmtLinear(a, b)})^2}}.`,
            answer: { type: "expression", expr: expanded, form: "expanded", display: `{{${expanded}}}` },
            hint: `Rewrite as {{(${fmtLinear(a, b)})(${fmtLinear(a, b)})}} so you don't drop the middle term.`,
            traps: [
              {
                spec: { type: "expression", expr: fmtQuad(A, 0, C) },
                feedback: `Don't drop the middle term! Two cross-products give {{${fmtLinear(B, 0)}}}.`,
              },
              {
                spec: { type: "expression", expr: fmtQuad(A, 0, -C) },
                feedback: "Squaring a bracket keeps a middle term AND a positive constant {{+b^2}}.",
              },
            ],
            solution: [
              `Rewrite: {{(${fmtLinear(a, b)})(${fmtLinear(a, b)})}}`,
              `First {{${A}x^2}}, Outer + Inner {{${a * b}x ${fmtSigned(a * b)}x = ${B}x}}, Last {{+${C}}}`,
              `Result: {{${expanded}}}`,
            ],
          };
        }
        // (ax + b)(x + c)
        const a = rng.int(2, 5);
        const b = rng.nonZero(-7, 7);
        const c = rng.nonZero(-7, 7);
        const A = a;
        const B = a * c + b;
        const C = b * c;
        const expanded = fmtQuad(A, B, C);
        return {
          prompt: `Expand and simplify {{(${fmtLinear(a, b)})(${fmtLinear(1, c)})}}.`,
          answer: { type: "expression", expr: expanded, form: "expanded", display: `{{${expanded}}}` },
          hint: "Draw a 2 × 2 area grid and watch the signs on every cell.",
          solution: [
            `First {{${A}x^2}}, Outer {{${a * c}x}}, Inner {{${b}x}}, Last {{${C}}}`,
            `Collect middle terms: {{${a * c}x ${fmtSigned(b)}x = ${B === 0 ? "0" : fmtLinear(B, 0)}}}`,
            `Result: {{${expanded}}}`,
          ],
        };
      }

      // Tier 3: (ax + b)(cx + d) with a, c >= 2
      const a = rng.int(2, 5);
      const c = rng.int(2, 5);
      const b = rng.nonZero(-8, 8);
      const d = rng.nonZero(-8, 8);
      const A = a * c;
      const B = a * d + b * c;
      const C = b * d;
      const expanded = fmtQuad(A, B, C);
      return {
        prompt: `Expand and simplify {{(${fmtLinear(a, b)})(${fmtLinear(c, d)})}}.`,
        answer: { type: "expression", expr: expanded, form: "expanded", display: `{{${expanded}}}` },
        hint: "Use the 2 × 2 area grid: multiply First, Outer, Inner, Last carefully.",
        solution: [
          `First: {{${a}x * ${c}x = ${A}x^2}}`,
          `Outer + Inner: {{${a * d}x ${fmtSigned(b * c)}x = ${B === 0 ? "0" : fmtLinear(B, 0)}}}`,
          `Last: {{(${b}) * (${d}) = ${C}}}`,
          `Result: {{${expanded}}}`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 2: EVALUATING EXPRESSIONS WITH INDICES & NEGATIVES (Level 1 — Sprint)
  // ===========================================================================
  {
    id: "algebraic-expressions.eval-indices",
    topicId: "algebraic-expressions",
    title: "Evaluate Expressions with Powers & Negatives",
    level: 1,
    guideRef: "evaluating-expressions",
    generate(rng, tier) {
      if (tier === 1) {
        const a = rng.int(1, 5);
        const b = rng.nonZero(-7, 7);
        const c = rng.nonZero(-9, 9);
        const x = rng.pick([-5, -4, -3, -2, 2, 3, 4, 5]);
        const val = a * x * x + b * x + c;
        const expr = fmtQuad(a, b, c);
        const traps = [];
        if (x < 0) {
          const forgotSqSign = -a * x * x + b * x + c;
          if (forgotSqSign !== val) {
            traps.push({
              spec: { type: "number" as const, value: forgotSqSign },
              feedback: `Remember {{(${x})^2 = +${x * x}}}, not {{-${x * x}}}!`,
            });
          }
        }
        return {
          prompt: `Find the value of {{${expr}}} when {{x = ${x}}}.`,
          answer: { type: "number", value: val },
          hint: `Wrap {{(${x})}} in brackets before squaring and multiplying.`,
          traps,
          solution: [
            `Substitute {{x = ${x}}}: {{${a === 1 ? "" : a}(${x})^2 ${b >= 0 ? "+" : "-"} ${Math.abs(b)}(${x}) ${fmtSigned(c)}}}`,
            `Square first: {{(${x})^2 = ${x * x}}}, so {{${a * x * x} ${fmtSigned(b * x)} ${fmtSigned(c)} = ${val}}}`,
          ],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 2);
        const x = rng.pick([-5, -4, -3, -2, -1, 2, 3, 4]);
        if (mode === 0) {
          // -x^2 + bx + c
          const b = rng.nonZero(-6, 6);
          const c = rng.nonZero(-9, 9);
          const val = -(x * x) + b * x + c;
          const expr = fmtQuad(-1, b, c);
          const trapPos = x * x + b * x + c;
          return {
            prompt: `Evaluate {{${expr}}} when {{x = ${x}}}.`,
            answer: { type: "number", value: val },
            hint: "Remember {{-x^2}} means {{-(x^2)}} — square first, then negate!",
            traps:
              trapPos !== val
                ? [
                    {
                      spec: { type: "number", value: trapPos },
                      feedback: `{{-x^2 = -(${x})^2 = -${x * x}}} — indices act before the leading minus sign!`,
                    },
                  ]
                : [],
            solution: [
              `{{-x^2 = -(${x})^2 = -${x * x}}}`,
              `Combine: {{-${x * x} ${fmtSigned(b * x)} ${fmtSigned(c)} = ${val}}}`,
            ],
          };
        }
        if (mode === 1) {
          // (kx)^2 - mx
          const k = rng.int(2, 4);
          const m = rng.nonZero(-5, 5);
          const c = rng.nonZero(-8, 8);
          const val = (k * x) * (k * x) + m * x + c;
          const trapNoBracket = k * x * x + m * x + c;
          return {
            prompt: `Evaluate {{(${k}x)^2 ${m >= 0 ? "+" : "-"} ${Math.abs(m) === 1 ? "" : Math.abs(m)}x ${fmtSigned(c)}}} when {{x = ${x}}}.`,
            answer: { type: "number", value: val },
            hint: `Inside {{(${k}x)^2}}, multiply by {{${k}}} FIRST, then square.`,
            traps:
              trapNoBracket !== val
                ? [
                    {
                      spec: { type: "number", value: trapNoBracket },
                      feedback: `Brackets mean square BOTH {{${k}}} and {{x}}: {{(${k} * (${x}))^2 = (${k * x})^2 = ${k * k * x * x}}}.`,
                    },
                  ]
                : [],
            solution: [
              `{{(${k} * (${x}))^2 = (${k * x})^2 = ${k * k * x * x}}}`,
              `{{${k * k * x * x} ${fmtSigned(m * x)} ${fmtSigned(c)} = ${val}}}`,
            ],
          };
        }
        // a x^3 + b x^2 + c with negative x
        const xn = rng.pick([-4, -3, -2, -1]);
        const a = rng.int(1, 3);
        const b = rng.nonZero(-5, 5);
        const c = rng.nonZero(-9, 9);
        const val = a * xn * xn * xn + b * xn * xn + c;
        const aStr = a === 1 ? "x^3" : `${a}x^3`;
        const bStr = b > 0 ? `+ ${b === 1 ? "" : b}x^2` : `- ${Math.abs(b) === 1 ? "" : Math.abs(b)}x^2`;
        return {
          prompt: `Evaluate {{${aStr} ${bStr} ${fmtSigned(c)}}} when {{x = ${xn}}}.`,
          answer: { type: "number", value: val },
          hint: "An odd power of a negative number stays negative; an even power becomes positive.",
          solution: [
            `{{(${xn})^3 = ${xn * xn * xn}}} and {{(${xn})^2 = ${xn * xn}}}`,
            `{{${a * xn * xn * xn} ${fmtSigned(b * xn * xn)} ${fmtSigned(c)} = ${val}}}`,
          ],
        };
      }

      // Tier 3: two variables a p^2 + b q^3 + c pq
      const a = rng.int(1, 4);
      const b = rng.nonZero(-3, 3);
      const c = rng.nonZero(-4, 4);
      const p = rng.pick([-4, -3, -2, 2, 3, 4]);
      const q = rng.pick([-3, -2, -1, 2, 3]);
      const val = a * p * p + b * q * q * q + c * p * q;
      const pTerm = a === 1 ? "p^2" : `${a}p^2`;
      const qTerm = b > 0 ? `+ ${b === 1 ? "" : b}q^3` : `- ${Math.abs(b) === 1 ? "" : Math.abs(b)}q^3`;
      const pqTerm = c > 0 ? `+ ${c === 1 ? "" : c}pq` : `- ${Math.abs(c) === 1 ? "" : Math.abs(c)}pq`;
      return {
        prompt: `Evaluate {{${pTerm} ${qTerm} ${pqTerm}}} when {{p = ${p}}} and {{q = ${q}}}.`,
        answer: { type: "number", value: val },
        hint: "Work out {{p^2}}, {{q^3}}, and {{pq}} on separate lines first, keeping brackets around negatives.",
        solution: [
          `{{p^2 = (${p})^2 = ${p * p}}}, {{q^3 = (${q})^3 = ${q * q * q}}}, {{pq = (${p})(${q}) = ${p * q}}}`,
          `{{${a * p * p} ${fmtSigned(b * q * q * q)} ${fmtSigned(c * p * q)} = ${val}}}`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 3: FACTORISING EXPRESSIONS (Level 2 — Sprint eligible)
  // ===========================================================================
  {
    id: "algebraic-expressions.factorise-expr",
    topicId: "algebraic-expressions",
    title: "Factorise Single Brackets, Quadratics & DOTS",
    level: 2,
    guideRef: "factorising-rearranging",
    generate(rng, tier) {
      if (tier === 1) {
        // Single-bracket HCF: k(ax + b) or kx(ax + b) with gcd(a, |b|) = 1
        const k = rng.int(2, 9);
        const withX = rng.bool(0.5);
        let a = rng.int(1, 6);
        let b = rng.nonZero(-9, 9);
        while (gcd(a, Math.abs(b)) !== 1) {
          a = rng.int(1, 6);
          b = rng.nonZero(-9, 9);
        }
        const inner = fmtLinear(a, b);
        const expr = withX ? fmtQuad(k * a, k * b, 0) : fmtLinear(k * a, k * b);
        const fact = withX ? `${k}x(${inner})` : `${k}(${inner})`;
        return {
          prompt: `Factorise completely: {{${expr}}}.`,
          answer: { type: "expression", expr: fact, form: "factorised", display: `{{${fact}}}` },
          hint: "Take out the HIGHEST common factor of both the numbers and any shared power of x.",
          solution: [
            `HCF of both terms is {{${withX ? `${k}x` : `${k}`}}}.`,
            `Factorised form: {{${fact}}}.`,
          ],
        };
      }

      if (tier === 2) {
        // Monic quadratic x^2 + bx + c (including DOTS when p = -q)
        const p = rng.nonZero(-9, 9);
        const q = rng.nonZero(-9, 9);
        const B = p + q;
        const C = p * q;
        const expanded = fmtQuad(1, B, C);
        const fact =
          p === q ? `(${fmtLinear(1, p)})^2` : `(${fmtLinear(1, p)})(${fmtLinear(1, q)})`;
        return {
          prompt: `Factorise completely: {{${expanded}}}.`,
          answer: { type: "expression", expr: fact, form: "factorised", display: `{{${fact}}}` },
          hint:
            B === 0
              ? "Spot the difference of two squares: {{x^2 - a^2 = (x + a)(x - a)}}."
              : `Find two integers that multiply to {{${C}}} and add to {{${B}}}.`,
          solution: [
            `Two integers multiplying to {{${C}}} and adding to {{${B}}} are {{${p}}} and {{${q}}}.`,
            `Factorised form: {{${fact}}}.`,
          ],
        };
      }

      // Tier 3: either (ax + b)(ax - b) with gcd(a, b) = 1 OR k(x + p)(x + q)
      if (rng.bool(0.5)) {
        let a = rng.int(2, 6);
        let b = rng.int(1, 9);
        while (gcd(a, b) !== 1) {
          a = rng.int(2, 6);
          b = rng.int(1, 9);
        }
        const expanded = fmtQuad(a * a, 0, -(b * b));
        const fact = `(${a}x + ${b})(${a}x - ${b})`;
        return {
          prompt: `Factorise completely: {{${expanded}}}.`,
          answer: { type: "expression", expr: fact, form: "factorised", display: `{{${fact}}}` },
          hint: `Rewrite as {{(${a}x)^2 - ${b}^2}} and use difference of two squares.`,
          solution: [
            `{{${expanded} = (${a}x)^2 - ${b}^2}}`,
            `Difference of two squares: {{${fact}}}.`,
          ],
        };
      }
      const k = rng.int(2, 5);
      const p = rng.nonZero(-7, 7);
      const q = rng.nonZero(-7, 7);
      const expanded = fmtQuad(k, k * (p + q), k * p * q);
      const fact =
        p === q ? `${k}(${fmtLinear(1, p)})^2` : `${k}(${fmtLinear(1, p)})(${fmtLinear(1, q)})`;
      return {
        prompt: `Factorise completely: {{${expanded}}}.`,
        answer: { type: "expression", expr: fact, form: "factorised", display: `{{${fact}}}` },
        hint: `Take out the numerical common factor {{${k}}} FIRST, then factorise the quadratic inside.`,
        solution: [
          `Pull out {{${k}}}: {{${k}(${fmtQuad(1, p + q, p * q)})}}`,
          `Factorise the quadratic: {{${fact}}}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 4: GEOMETRIC PERIMETER & SHADED AREA ALGEBRA (Level 3)
  // ===========================================================================
  {
    id: "algebraic-expressions.geometric-area-perim",
    topicId: "algebraic-expressions",
    title: "Geometric Perimeter & Shaded Area Algebra",
    level: 3,
    guideRef: "geometric-algebra",
    generate(rng, tier) {
      if (tier === 1) {
        // Rectangle perimeter
        const a = rng.int(1, 5);
        const b = rng.int(1, 9);
        const c = rng.int(1, 4);
        const d = rng.int(1, 9);
        const L = fmtLinear(a, b);
        const W = fmtLinear(c, d);
        const perim = fmtLinear(2 * (a + c), 2 * (b + d));
        const half = fmtLinear(a + c, b + d);
        return {
          prompt: `A rectangle has length {{(${L})}} cm and width {{(${W})}} cm. Write a simplified expression for its **perimeter** in cm.`,
          answer: { type: "expression", expr: perim, form: "simplified", display: `{{${perim}}}` },
          hint: "Add length + width first, then multiply the whole result by 2.",
          traps: [
            {
              spec: { type: "expression", expr: half },
              feedback: "That's only half the perimeter (one length + one width) — double it!",
            },
          ],
          solution: [
            `Length + width {{= (${L}) + (${W}) = ${half}}}`,
            `Perimeter {{= 2(${half}) = ${perim}}} cm`,
          ],
        };
      }

      if (tier === 2) {
        // Rectangle area (ax + b)(cx + d)
        const a = rng.int(1, 3);
        const c = rng.int(1, 3);
        const b = rng.int(1, 9);
        const d = rng.int(1, 9);
        const L = fmtLinear(a, b);
        const W = fmtLinear(c, d);
        const area = fmtQuad(a * c, a * d + b * c, b * d);
        return {
          prompt: `A rectangular courtyard measures {{(${L})}} m by {{(${W})}} m. Write an expanded, simplified expression for its **area** in {{m^2}}.`,
          answer: { type: "expression", expr: area, form: "expanded", display: `{{${area}}}` },
          hint: `Multiply length by width: {{(${L})(${W})}} and collect the middle x-terms.`,
          solution: [
            `Area {{= (${L})(${W})}}`,
            `{{= ${a * c}x^2 + ${a * d}x + ${b * c}x + ${b * d} = ${area}}}`,
          ],
        };
      }

      // Tier 3: Outer rectangle minus inner cutout rectangle
      const a = rng.int(2, 4);
      const c = rng.int(1, 3);
      const b = rng.int(4, 9);
      const d = rng.int(4, 9);
      const e = rng.int(1, b - 2);
      const f = rng.int(1, d - 2);
      const sameCoeff = rng.bool(0.5);
      const aIn = sameCoeff ? a : a - 1;
      const cIn = c;

      const outA = a * c;
      const outB = a * d + b * c;
      const outC = b * d;
      const inA = aIn * cIn;
      const inB = aIn * f + e * cIn;
      const inC = e * f;

      const diffA = outA - inA;
      const diffB = outB - inB;
      const diffC = outC - inC;
      const shaded = fmtQuad(diffA, diffB, diffC);

      const Lout = fmtLinear(a, b);
      const Wout = fmtLinear(c, d);
      const Lin = fmtLinear(aIn, e);
      const Win = fmtLinear(cIn, f);

      return {
        prompt: `A rectangle of dimensions {{(${Lout})}} cm by {{(${Wout})}} cm has a smaller rectangle of dimensions {{(${Lin})}} cm by {{(${Win})}} cm cut out of its centre. Find the expanded, simplified **remaining area** in {{cm^2}}.`,
        answer: { type: "expression", expr: shaded, form: "expanded", display: `{{${shaded}}}` },
        hint: "Expand the outer area and inner area separately, then subtract with brackets around the inner area.",
        solution: [
          `Outer area {{= (${Lout})(${Wout}) = ${fmtQuad(outA, outB, outC)}}}`,
          `Inner area {{= (${Lin})(${Win}) = ${fmtQuad(inA, inB, inC)}}}`,
          `Shaded area {{= (${fmtQuad(outA, outB, outC)}) - (${fmtQuad(inA, inB, inC)}) = ${shaded}}}`,
        ],
      };
    },
  },
];
