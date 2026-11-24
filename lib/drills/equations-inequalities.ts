import type { Drill } from "./types.ts";

function fmtLin(a: number, b: number, v = "x"): string {
  const parts: string[] = [];
  if (a !== 0) parts.push(a === 1 ? v : a === -1 ? `-${v}` : `${a}${v}`);
  if (b !== 0) {
    if (!parts.length) parts.push(`${b}`);
    else parts.push(b > 0 ? `+ ${b}` : `- ${Math.abs(b)}`);
  }
  return parts.length ? parts.join(" ") : "0";
}

function fmtLin2(a: number, b: number): string {
  const xPart = a === 1 ? "x" : a === -1 ? "-x" : `${a}x`;
  const absB = Math.abs(b);
  const yTerm = absB === 1 ? "y" : `${absB}y`;
  return `${xPart} ${b > 0 ? "+" : "-"} ${yTerm}`;
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

type Op = "<" | ">" | "<=" | ">=";

function flipOp(op: Op): Op {
  if (op === "<") return ">";
  if (op === ">") return "<";
  if (op === "<=") return ">=";
  return "<=";
}

export const drills: Drill[] = [
  // ===========================================================================
  // DRILL 1: LINEAR EQUATIONS WITH BRACKETS, BOTH SIDES & FRACTIONS (Level 1)
  // ===========================================================================
  {
    id: "equations-inequalities.linear-solve",
    topicId: "equations-inequalities",
    title: "Solve Linear Equations (Brackets, Both Sides & Fractions)",
    level: 1,
    guideRef: "linear-equations-brackets-fractions",
    generate(rng, tier) {
      if (tier === 1) {
        const x = rng.nonZero(-9, 9);
        if (rng.bool(0.5)) {
          // a(x + b) = c
          const a = rng.int(2, 7);
          const b = rng.nonZero(-8, 8);
          const c = a * (x + b);
          return {
            prompt: `Solve {{${a}(${fmtLin(1, b)}) = ${c}}}.`,
            answer: { type: "number", value: x },
            hint: `Divide both sides by {{${a}}} (or expand the bracket first).`,
            solution: [
              `Divide by {{${a}}}: {{${fmtLin(1, b)} = ${x + b}}}`,
              `Solve for {{x}}: {{x = ${x}}}`,
            ],
          };
        }
        // ax + b = cx + d
        const c = rng.int(1, 5);
        const a = c + rng.int(1, 5);
        const b = rng.nonZero(-12, 12);
        const d = (a - c) * x + b;
        return {
          prompt: `Solve {{${fmtLin(a, b)} = ${fmtLin(c, d)}}}.`,
          answer: { type: "number", value: x },
          hint: `Subtract {{${c === 1 ? "x" : `${c}x`}}} from both sides first.`,
          solution: [
            `Subtract {{${c === 1 ? "x" : `${c}x`}}}: {{${fmtLin(a - c, b)} = ${d}}}`,
            `Solve: {{${a - c === 1 ? "" : a - c}x = ${d - b} => x = ${x}}}`,
          ],
        };
      }

      if (tier === 2) {
        const x = rng.nonZero(-9, 9);
        if (rng.bool(0.5)) {
          // (ax + b)/d = k
          const d = rng.int(2, 6);
          const a = rng.int(2, 5);
          const k = rng.nonZero(-7, 7);
          const b = d * k - a * x;
          if (b !== 0) {
            return {
              prompt: `Solve {{(${fmtLin(a, b)})/${d} = ${k}}}.`,
              answer: { type: "number", value: x },
              hint: `Clear the denominator first by multiplying both sides by {{${d}}}.`,
              solution: [
                `Multiply by {{${d}}}: {{${fmtLin(a, b)} = ${d * k}}}`,
                `Isolate {{${a}x}}: {{${a}x = ${a * x} => x = ${x}}}`,
              ],
            };
          }
        }
        // a(x + b) = cx + d
        const a = rng.int(3, 7);
        const c = rng.int(1, a - 1);
        const b = rng.nonZero(-7, 7);
        const d = a * (x + b) - c * x;
        return {
          prompt: `Solve {{${a}(${fmtLin(1, b)}) = ${fmtLin(c, d)}}}.`,
          answer: { type: "number", value: x },
          hint: `Expand {{${a}(${fmtLin(1, b)})}} first, then collect {{x}}-terms on the left.`,
          solution: [
            `Expand: {{${fmtLin(a, a * b)} = ${fmtLin(c, d)}}}`,
            `Collect {{x}}-terms: {{${fmtLin(a - c, 0)} = ${d - a * b} => x = ${x}}}`,
          ],
        };
      }

      // Tier 3: two brackets with negative sign OR fraction = fraction
      const x = rng.nonZero(-8, 8);
      if (rng.bool(0.5)) {
        // a(x + b) - c(x + d) = rhs
        const c = rng.int(2, 4);
        const a = c + rng.int(1, 4);
        const b = rng.nonZero(-6, 6);
        const d = rng.nonZero(-6, 6);
        const rhs = a * (x + b) - c * (x + d);
        const constSum = a * b - c * d;
        return {
          prompt: `Solve {{${a}(${fmtLin(1, b)}) - ${c}(${fmtLin(1, d)}) = ${rhs}}}.`,
          answer: { type: "number", value: x },
          hint: `Watch the minus sign when expanding {{- ${c}(${fmtLin(1, d)})}}!`,
          solution: [
            `Expand both brackets: {{${fmtLin(a, a * b)} - ${c}x ${-c * d >= 0 ? `+ ${-c * d}` : `- ${Math.abs(-c * d)}`} = ${rhs}}}`,
            `Simplify: {{${fmtLin(a - c, constSum)} = ${rhs} => x = ${x}}}`,
          ],
        };
      }
      // (a*x + b)/p = (c*x + d)/q  with p != q
      const p = rng.pick([2, 3, 4, 5]);
      const q = rng.pick([2, 3, 4, 5].filter((v) => v !== p));
      const k = rng.nonZero(-6, 6);
      const a = rng.int(1, 3);
      let c = rng.int(1, 3);
      if (q * a === p * c) c = c === 1 ? 2 : 1;
      const b = p * k - a * x;
      const d = q * k - c * x;
      const lhsNum = fmtLin(a, b);
      const rhsNum = fmtLin(c, d);
      return {
        prompt: `Solve {{(${lhsNum})/${p} = (${rhsNum})/${q}}}.`,
        answer: { type: "number", value: x },
        hint: `Cross-multiply by {{${p}}} and {{${q}}}: {{${q}(${lhsNum}) = ${p}(${rhsNum})}}.`,
        solution: [
          `Clear denominators: {{${q}(${lhsNum}) = ${p}(${rhsNum})}}`,
          `Expand: {{${fmtLin(q * a, q * b)} = ${fmtLin(p * c, p * d)}}}`,
          `Solve for {{x}}: {{x = ${x}}}`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 2: BOTH SOLUTIONS OF SIMPLE QUADRATICS (Level 1 — Sprint eligible)
  // ===========================================================================
  {
    id: "equations-inequalities.quadratics-both",
    topicId: "equations-inequalities",
    title: "Find Both Solutions of Simple Quadratics",
    level: 1,
    guideRef: "simple-quadratics",
    generate(rng, tier) {
      if (tier === 1) {
        const k = rng.int(2, 12);
        const a = rng.bool(0.5) ? 1 : rng.int(2, 5);
        const rhs = a * k * k;
        return {
          prompt: `Find BOTH solutions of {{${a === 1 ? "x^2" : `${a}x^2`} = ${rhs}}}.`,
          answer: {
            type: "list",
            values: [k, -k],
            ordered: false,
            display: `{{x = ${k}}} or {{x = -${k}}}`,
          },
          hint:
            a === 1
              ? `Take {{+-sqrt(${rhs})}} so you include BOTH positive and negative roots.`
              : `Divide by {{${a}}} first to get {{x^2 = ${k * k}}}, then take {{+-sqrt(${k * k})}}.`,
          solution: [
            ...(a > 1 ? [`Divide by {{${a}}}: {{x^2 = ${k * k}}}`] : []),
            `Take both square roots: {{x = ${k}}} or {{x = -${k}}}.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          // (x + b)^2 = k^2
          const b = rng.nonZero(-8, 8);
          const k = rng.int(2, 9);
          const r1 = k - b;
          const r2 = -k - b;
          return {
            prompt: `Find BOTH solutions of {{(${fmtLin(1, b)})^2 = ${k * k}}}.`,
            answer: {
              type: "list",
              values: [r1, r2],
              ordered: false,
              display: `{{x = ${r1}}} or {{x = ${r2}}}`,
            },
            hint: `Take {{+-sqrt(${k * k})}}: {{${fmtLin(1, b)} = ${k}}} or {{${fmtLin(1, b)} = -${k}}}.`,
            solution: [
              `{{${fmtLin(1, b)} = +${k} => x = ${r1}}}`,
              `{{${fmtLin(1, b)} = -${k} => x = ${r2}}}`,
            ],
          };
        }
        // (x - p)(x - q) = 0 with p != q
        const p = rng.nonZero(-9, 9);
        let q = rng.nonZero(-9, 9);
        while (q === p) q = rng.nonZero(-9, 9);
        const b1 = fmtLin(1, -p);
        const b2 = fmtLin(1, -q);
        return {
          prompt: `Find BOTH solutions of {{(${b1})(${b2}) = 0}}.`,
          answer: {
            type: "list",
            values: [p, q],
            ordered: false,
            display: `{{x = ${p}}} or {{x = ${q}}}`,
          },
          hint: "Zero-product property: set each bracket equal to 0 separately.",
          solution: [
            `{{${b1} = 0 => x = ${p}}}`,
            `{{${b2} = 0 => x = ${q}}}`,
          ],
        };
      }

      // Tier 3: monic quadratic x^2 + bx + c = 0 OR a(x + b)^2 + d = e
      if (rng.bool(0.55)) {
        const p = rng.nonZero(-9, 9);
        let q = rng.nonZero(-9, 9);
        while (q === p) q = rng.nonZero(-9, 9);
        const B = -(p + q);
        const C = p * q;
        const eq = fmtQuad(1, B, C);
        return {
          prompt: `Factorise and find BOTH solutions of {{${eq} = 0}}.`,
          answer: {
            type: "list",
            values: [p, q],
            ordered: false,
            display: `{{x = ${p}}} or {{x = ${q}}}`,
          },
          hint: `Find two integers multiplying to {{${C}}} and adding to {{${B}}}.`,
          solution: [
            `Factorise: {{(${fmtLin(1, -p)})(${fmtLin(1, -q)}) = 0}}`,
            `Solutions: {{x = ${p}}} or {{x = ${q}}}.`,
          ],
        };
      }
      const a = rng.int(2, 4);
      const b = rng.nonZero(-6, 6);
      const k = rng.int(2, 7);
      const d = rng.nonZero(-9, 9);
      const rhs = a * k * k + d;
      const r1 = k - b;
      const r2 = -k - b;
      const dPart = d > 0 ? `+ ${d}` : `- ${Math.abs(d)}`;
      return {
        prompt: `Find BOTH solutions of {{${a}(${fmtLin(1, b)})^2 ${dPart} = ${rhs}}}.`,
        answer: {
          type: "list",
          values: [r1, r2],
          ordered: false,
          display: `{{x = ${r1}}} or {{x = ${r2}}}`,
        },
        hint: `Isolate {{(${fmtLin(1, b)})^2}} first, then take {{+-sqrt(${k * k})}}.`,
        solution: [
          `Isolate square: {{${a}(${fmtLin(1, b)})^2 = ${a * k * k} => (${fmtLin(1, b)})^2 = ${k * k}}}`,
          `{{${fmtLin(1, b)} = +- ${k} => x = ${r1}}} or {{x = ${r2}}}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 3: SIMULTANEOUS EQUATIONS & LINE INTERSECTIONS (Level 2 — Sprint)
  // ===========================================================================
  {
    id: "equations-inequalities.simultaneous-solve",
    topicId: "equations-inequalities",
    title: "Solve Linear Simultaneous Equations",
    level: 2,
    guideRef: "simultaneous-equations",
    generate(rng, tier) {
      const x = rng.nonZero(-6, 6);
      const y = rng.nonZero(-6, 6);

      if (tier === 1) {
        // Ready to add or subtract directly (matching y coeff ±1)
        const a = rng.int(2, 6);
        let d = rng.int(1, 5);
        while (d === a) d = rng.int(1, 6);
        const oppSigns = rng.bool(0.5);
        const b1 = 1;
        const b2 = oppSigns ? -1 : 1;
        const c1 = a * x + b1 * y;
        const c2 = d * x + b2 * y;
        const eq1 = `${fmtLin2(a, b1)} = ${c1}`;
        const eq2 = `${fmtLin2(d, b2)} = ${c2}`;
        return {
          prompt: `Solve simultaneously: {{${eq1}}} and {{${eq2}}}. Enter as \`x, y\`.`,
          answer: {
            type: "list",
            values: [x, y],
            ordered: true,
            display: `x = ${x}, y = ${y}`,
          },
          hint: oppSigns
            ? "Opposite signs on +y and −y → ADD the two equations!"
            : "Same signs on +y and +y → SUBTRACT the two equations!",
          solution: [
            oppSigns
              ? `Add equations: {{${a + d}x = ${c1 + c2} => x = ${x}}}`
              : `Subtract equations: {{${a - d}x = ${c1 - c2} => x = ${x}}}`,
            `Substitute {{x = ${x}}} back to find {{y = ${y}}}.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.45)) {
          // Substitution / line intersection style: y = m1*x + k1 and y = m2*x + k2
          const m1 = rng.nonZero(-4, 4);
          let m2 = rng.nonZero(-4, 4);
          while (m2 === m1) m2 = rng.nonZero(-4, 4);
          const k1 = y - m1 * x;
          const k2 = y - m2 * x;
          const l1 = `y = ${fmtLin(m1, k1)}`;
          const l2 = `y = ${fmtLin(m2, k2)}`;
          return {
            prompt: `Find the intersection point {{(x, y)}} of the lines {{${l1}}} and {{${l2}}}.`,
            answer: {
              type: "list",
              values: [x, y],
              ordered: true,
              display: `(${x}, ${y})`,
            },
            hint: `Set the two expressions for {{y}} equal: {{${fmtLin(m1, k1)} = ${fmtLin(m2, k2)}}}.`,
            solution: [
              `Equate {{y}}: {{${fmtLin(m1, k1)} = ${fmtLin(m2, k2)} => ${m1 - m2}x = ${k2 - k1} => x = ${x}}}`,
              `Substitute back: {{y = ${y}}}, giving {{(${x}, ${y})}}.`,
            ],
          };
        }
        // Scale ONE equation (b1 = k * b2)
        const mult = rng.int(2, 4);
        const sgn = rng.bool(0.5) ? 1 : -1;
        const b2 = rng.bool(0.5) ? 1 : -1;
        const b1 = sgn * mult * b2;
        const a = rng.int(2, 5);
        let d = rng.int(1, 5);
        while (a * b2 === d * b1) d = rng.int(1, 5);
        const c1 = a * x + b1 * y;
        const c2 = d * x + b2 * y;
        return {
          prompt: `Solve simultaneously: {{${fmtLin2(a, b1)} = ${c1}}} and {{${fmtLin2(d, b2)} = ${c2}}}. Enter as \`x, y\`.`,
          answer: {
            type: "list",
            values: [x, y],
            ordered: true,
            display: `x = ${x}, y = ${y}`,
          },
          hint: `Multiply the second equation by {{${mult}}} to match the {{y}}-coefficients, then apply SSS / DSA.`,
          solution: [
            `Multiply (2) by {{${mult}}}: {{${fmtLin2(d * mult, b2 * mult)} = ${c2 * mult}}}`,
            sgn === 1
              ? `Same signs → subtract to get {{${a - d * mult}x = ${c1 - c2 * mult} => x = ${x}}}`
              : `Different signs → add to get {{${a + d * mult}x = ${c1 + c2 * mult} => x = ${x}}}`,
            `Substitute back to obtain {{y = ${y}}}.`,
          ],
        };
      }

      // Tier 3: scale BOTH equations
      const pairs: [number, number][] = [
        [2, 3],
        [3, 2],
        [2, 5],
        [3, 4],
        [4, 3],
        [3, 5],
      ];
      const [b1Mag, b2Mag] = rng.pick(pairs);
      const b1 = rng.bool(0.5) ? b1Mag : -b1Mag;
      const b2 = rng.bool(0.5) ? b2Mag : -b2Mag;
      let a = rng.int(2, 5);
      let d = rng.int(2, 5);
      while (a * b2 === d * b1) {
        a = rng.int(2, 5);
        d = rng.int(2, 5);
      }
      const c1 = a * x + b1 * y;
      const c2 = d * x + b2 * y;
      const sameSign = b1 * b2 > 0;
      const xCoeff = sameSign ? a * b2Mag - d * b1Mag : a * b2Mag + d * b1Mag;
      const rhsComb = sameSign ? c1 * b2Mag - c2 * b1Mag : c1 * b2Mag + c2 * b1Mag;
      return {
        prompt: `Solve simultaneously: {{${fmtLin2(a, b1)} = ${c1}}} and {{${fmtLin2(d, b2)} = ${c2}}}. Enter as \`x, y\`.`,
        answer: {
          type: "list",
          values: [x, y],
          ordered: true,
          display: `x = ${x}, y = ${y}`,
        },
        hint: `Multiply (1) by {{${b2Mag}}} and (2) by {{${b1Mag}}} to match the {{y}}-coefficients at {{${b1Mag * b2Mag}y}}.`,
        solution: [
          `Scale: {{${fmtLin2(a * b2Mag, b1 * b2Mag)} = ${c1 * b2Mag}}} and {{${fmtLin2(d * b1Mag, b2 * b1Mag)} = ${c2 * b1Mag}}}`,
          `${sameSign ? "Subtract" : "Add"} to eliminate {{y}}: {{${xCoeff}x = ${rhsComb} => x = ${x}}}`,
          `Substitute {{x = ${x}}} back to find {{y = ${y}}}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 4: LINEAR & DOUBLE INEQUALITIES (Level 3)
  // ===========================================================================
  {
    id: "equations-inequalities.inequalities-solve",
    topicId: "equations-inequalities",
    title: "Solve Linear & Double Inequalities (Including Negatives)",
    level: 3,
    guideRef: "inequalities",
    generate(rng, tier) {
      const ops: Op[] = ["<", ">", "<=", ">="];

      if (tier === 1) {
        // Positive coefficient ax + b <op> c
        const a = rng.int(2, 7);
        const x0 = rng.nonZero(-8, 8);
        const b = rng.nonZero(-12, 12);
        const c = a * x0 + b;
        const op = rng.pick(ops);
        const ans = `x ${op} ${x0}`;
        const rev = `${x0} ${flipOp(op)} x`;
        return {
          prompt: `Solve the inequality {{${fmtLin(a, b)} ${op} ${c}}}.`,
          answer: { type: "text", accept: [ans, rev], display: `{{${ans}}}` },
          hint: `Undo {{${b > 0 ? `+ ${b}` : `- ${Math.abs(b)}`}}} first, then divide by positive {{${a}}}.`,
          solution: [
            `Isolate {{${a}x}}: {{${a}x ${op} ${a * x0}}}`,
            `Divide by positive {{${a}}}: {{${ans}}}.`,
          ],
        };
      }

      if (tier === 2) {
        // Negative coefficient: b - ax <op> c  (MUST FLIP!)
        const a = rng.int(2, 7);
        const x0 = rng.nonZero(-7, 7);
        const b = rng.nonZero(-10, 15);
        const c = b - a * x0;
        const op = rng.pick(ops);
        const flipped = flipOp(op);
        const ans = `x ${flipped} ${x0}`;
        const rev = `${x0} ${op} x`;
        const wrongNoFlip = `x ${op} ${x0}`;
        return {
          prompt: `Solve the inequality {{${b} - ${a}x ${op} ${c}}}.`,
          answer: { type: "text", accept: [ans, rev], display: `{{${ans}}}` },
          hint: `Subtract {{${b}}}, then divide by {{- ${a}}} AND FLIP the inequality sign!`,
          traps: [
            {
              spec: { type: "text", accept: [wrongNoFlip, `${x0} ${flipped} x`] },
              feedback: `Dividing by the negative number {{-${a}}} MUST reverse {{${op}}} to {{${flipped}}}!`,
            },
          ],
          solution: [
            `Subtract {{${b}}}: {{-${a}x ${op} ${c - b}}}`,
            `Divide by {{-${a}}} and flip {{${op}}} to {{${flipped}}}: {{${ans}}}.`,
          ],
        };
      }

      // Tier 3: Double inequality L <op1> ax + b <op2> R -> list all integer solutions
      const a = rng.int(2, 4);
      const b = rng.nonZero(-7, 7);
      const low = rng.int(-5, 3);
      const span = rng.int(3, 5);
      const high = low + span;
      const incLow = rng.bool(0.5);
      const incHigh = !incLow || rng.bool(0.5);
      const op1 = incLow ? "<=" : "<";
      const op2 = incHigh ? "<=" : "<";
      const L = a * low + b;
      const R = a * high + b;

      const ints: number[] = [];
      for (let n = low; n <= high; n++) {
        if (n === low && !incLow) continue;
        if (n === high && !incHigh) continue;
        ints.push(n);
      }

      return {
        prompt: `List ALL integer values of {{n}} satisfying {{${L} ${op1} ${fmtLin(a, b, "n")} ${op2} ${R}}}. Separate with commas.`,
        answer: {
          type: "list",
          values: ints,
          ordered: false,
          display: ints.map((v) => (v < 0 ? `−${Math.abs(v)}` : `${v}`)).join(", "),
        },
        hint: `Undo {{${b > 0 ? `+ ${b}` : `- ${Math.abs(b)}`}}} and divide by {{${a}}} on ALL THREE parts, then check open vs closed endpoints.`,
        solution: [
          `Apply inverse to all 3 parts: {{${L - b} ${op1} ${a}n ${op2} ${R - b}}}`,
          `Divide by {{${a}}}: {{${low} ${op1} n ${op2} ${high}}}`,
          `Integer solutions: {{${ints.join(", ")}}}.`,
        ],
      };
    },
  },
];
