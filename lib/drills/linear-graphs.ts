import type { Drill } from "./types.ts";
import { gcd } from "../mathParse.ts";

function signTerm(coeff: number, variable: string, first = false): string {
  const abs = Math.abs(coeff);
  const mag = abs === 1 ? variable : `${abs}${variable}`;
  if (first) return coeff < 0 ? `-${mag}` : mag;
  return coeff < 0 ? ` - ${mag}` : ` + ${mag}`;
}

function fmtSigned(n: number): string {
  return n < 0 ? `−${Math.abs(n)}` : String(n);
}

export const drills: Drill[] = [
  {
    id: "linear-graphs.intercepts-cover-up",
    topicId: "linear-graphs",
    title: "Intercepts & Implicit Lines (Cover-Up)",
    level: 1,
    guideRef: "explicit-implicit-graphs",
    generate(rng, tier) {
      if (tier === 1) {
        const p = rng.int(2, 12);
        let q = rng.int(2, 12);
        while (q === p) q = rng.int(2, 12);
        const g = gcd(p, q);
        const a = q / g;
        const b = p / g;
        const c = (p * q) / g;
        const eq = `${signTerm(a, "x", true)}${signTerm(b, "y")} = ${c}`;
        const askX = rng.bool();
        if (askX) {
          return {
            prompt: `For the straight line {{${eq}}}, find the **{{x}}-coordinate** of its {{x}}-intercept.`,
            answer: { type: "number", value: p, display: String(p) },
            hint: "On the {{x}}-axis, {{y = 0}} — cover up the {{y}}-term and divide.",
            traps: [
              { spec: { type: "number", value: q }, feedback: `${q} is the y-intercept! Set y = 0 to find the x-intercept.` },
            ],
            solution: [
              `Set {{y = 0}} in {{${eq}}}: {{${a === 1 ? "" : a}x = ${c}}}.`,
              `Divide by {{${a}}}: {{x = ${p}}} (intercept {{(${p}, 0)}}).`,
            ],
          };
        }
        return {
          prompt: `For the straight line {{${eq}}}, find the **{{y}}-coordinate** of its {{y}}-intercept.`,
          answer: { type: "number", value: q, display: String(q) },
          hint: "On the {{y}}-axis, {{x = 0}} — cover up the {{x}}-term and divide.",
          traps: [
            { spec: { type: "number", value: p }, feedback: `${p} is the x-intercept! Set x = 0 to find the y-intercept.` },
          ],
          solution: [
            `Set {{x = 0}} in {{${eq}}}: {{${b === 1 ? "" : b}y = ${c}}}.`,
            `Divide by {{${b}}}: {{y = ${q}}} (intercept {{(0, ${q})}}).`,
          ],
        };
      }

      if (tier === 2) {
        let p = rng.nonZero(-10, 10);
        let q = rng.nonZero(-10, 10);
        while (Math.abs(p) < 2) p = rng.nonZero(-10, 10);
        while (Math.abs(q) < 2 || Math.abs(q) === Math.abs(p)) q = rng.nonZero(-10, 10);
        const g = gcd(p, q);
        let a = q / g;
        let b = p / g;
        let c = (p * q) / g;
        if (a < 0) {
          a = -a;
          b = -b;
          c = -c;
        }
        const eq = `${signTerm(a, "x", true)}${signTerm(b, "y")} = ${c}`;
        const askX = rng.bool();
        const ans = askX ? p : q;
        const other = askX ? q : p;
        return {
          prompt: `Use the cover-up method on {{${eq}}} to find the **${askX ? "{{x}}" : "{{y}}"}-coordinate** of its ${askX ? "{{x}}" : "{{y}}"}-intercept.`,
          answer: { type: "number", value: ans, display: fmtSigned(ans) },
          hint: askX
            ? "Set {{y = 0}} and watch the signs carefully when dividing."
            : "Set {{x = 0}} and keep the sign in front of the {{y}}-term!",
          traps: [
            { spec: { type: "number", value: -ans }, feedback: "Watch the minus sign when dividing!" },
            ...(other !== ans && other !== -ans
              ? [{ spec: { type: "number" as const, value: other }, feedback: `That's the ${askX ? "y" : "x"}-intercept instead!` }]
              : []),
          ],
          solution: askX
            ? [`Set {{y = 0}}: {{${a === 1 ? "" : a}x = ${c}}} → {{x = ${p}}}.`]
            : [`Set {{x = 0}}: {{${b}y = ${c}}} → {{y = ${q}}}.`],
        };
      }

      // Tier 3: evaluate y on an implicit line ax + by = c at a given integer x
      const a = rng.int(2, 6);
      const b = rng.nonZero(-5, 5);
      const x0 = rng.nonZero(-6, 6);
      const y0 = rng.nonZero(-7, 7);
      const c = a * x0 + b * y0;
      const eq = `${signTerm(a, "x", true)}${signTerm(b, "y")} = ${c}`;
      return {
        prompt: `A point with {{x = ${x0}}} lies on the line {{${eq}}}. Find its {{y}}-coordinate.`,
        answer: { type: "number", value: y0, display: fmtSigned(y0) },
        hint: `Substitute {{x = ${x0}}} into {{${eq}}}, then solve the linear equation for {{y}}.`,
        traps: [
          { spec: { type: "number", value: -y0 }, feedback: "Check the sign when dividing by the coefficient of y!" },
        ],
        solution: [
          `Substitute {{x = ${x0}}}: {{${a}(${x0}) + (${b})y = ${c}}} → {{${a * x0} ${b < 0 ? "-" : "+"} ${Math.abs(b) === 1 ? "" : Math.abs(b)}y = ${c}}}.`,
          `Subtract {{${a * x0}}}: {{${b}y = ${c - a * x0}}} → {{y = ${y0}}}.`,
        ],
      };
    },
  },
  {
    id: "linear-graphs.gradient-two-points",
    topicId: "linear-graphs",
    title: "Gradient from Two Points",
    level: 1,
    guideRef: "equation-of-a-line",
    generate(rng, tier) {
      if (tier === 1) {
        const x1 = rng.int(0, 6);
        const y1 = rng.int(0, 10);
        const dx = rng.int(1, 5);
        const m = rng.int(1, 6);
        const x2 = x1 + dx;
        const y2 = y1 + m * dx;
        return {
          prompt: `Calculate the gradient of the straight line passing through {{(${x1}, ${y1})}} and {{(${x2}, ${y2})}}.`,
          answer: { type: "number", value: m, display: String(m) },
          hint: "Use {{m = (y_2 - y_1) / (x_2 - x_1)}} (rise divided by run).",
          traps:
            m !== 1
              ? [{ spec: { type: "fraction", n: 1, d: m, allowDecimal: true }, feedback: "That's run ÷ rise — put the y-difference on top!" }]
              : undefined,
          solution: [
            `Rise {{= ${y2} - ${y1} = ${y2 - y1}}}, run {{= ${x2} - ${x1} = ${dx}}}.`,
            `Gradient {{m = ${y2 - y1} / ${dx} = ${m}}}.`,
          ],
        };
      }

      if (tier === 2) {
        const x1 = rng.int(-6, 5);
        const y1 = rng.int(-8, 10);
        const dx = rng.int(2, 6);
        const m = rng.nonZero(-5, 5);
        const x2 = x1 + dx;
        const y2 = y1 + m * dx;
        return {
          prompt: `Find the gradient of the line joining {{(${x1}, ${y1})}} and {{(${x2}, ${y2})}}.`,
          answer: { type: "number", value: m, display: fmtSigned(m) },
          hint: "Keep the points in the exact same order top and bottom: {{(y_2 - y_1) / (x_2 - x_1)}}.",
          traps: [
            { spec: { type: "number", value: -m }, feedback: "Check your signs! Subtract in the same direction for both y and x." },
          ],
          solution: [
            `{{m = (${y2} - (${y1})) / (${x2} - (${x1})) = ${y2 - y1} / ${dx} = ${m}}}.`,
          ],
        };
      }

      // Tier 3: fractional gradient in lowest terms OR implicit line gradient
      if (rng.bool()) {
        const den = rng.pick([2, 3, 4, 5]);
        let num = rng.nonZero(-7, 7);
        while (gcd(num, den) !== 1) num = rng.nonZero(-7, 7);
        const scale = rng.int(1, 2);
        const dx = den * scale;
        const dy = num * scale;
        const x1 = rng.int(-5, 4);
        const y1 = rng.int(-6, 6);
        const x2 = x1 + dx;
        const y2 = y1 + dy;
        return {
          prompt: `Calculate the gradient of the line through {{(${x1}, ${y1})}} and {{(${x2}, ${y2})}}. Give your answer as a simplified fraction.`,
          answer: { type: "fraction", n: num, d: den, simplest: true, allowDecimal: true, display: `{{${num}/${den}}}` },
          hint: "Compute {{(y_2 - y_1) / (x_2 - x_1)}} and simplify the fraction.",
          traps: [
            { spec: { type: "fraction", n: -num, d: den, allowDecimal: true }, feedback: "Check the sign of your subtraction!" },
          ],
          solution: [
            `{{m = (${y2} - (${y1})) / (${x2} - (${x1})) = ${dy} / ${dx} = ${num}/${den}}}.`,
          ],
        };
      }

      const b = rng.pick([2, 3, 4, 5]);
      let a = rng.nonZero(-9, 9);
      while (gcd(a, b) !== 1) a = rng.nonZero(-9, 9);
      const c = rng.nonZero(-15, 15);
      // Equation: ax + by = c => y = (-a/b)x + c/b => m = -a/b
      const eq = `${signTerm(a, "x", true)}${signTerm(b, "y")} = ${c}`;
      return {
        prompt: `Rearrange {{${eq}}} into {{y = mx + c}} and find its exact gradient {{m}}.`,
        answer: { type: "fraction", n: -a, d: b, simplest: true, allowDecimal: true, display: `{{${-a}/${b}}}` },
        hint: "Move the {{x}}-term to the right-hand side first (changing its sign), then divide by the coefficient of {{y}}.",
        traps: [
          { spec: { type: "fraction", n: a, d: b, allowDecimal: true }, feedback: "When you move the x-term across the equals sign, its sign flips!" },
        ],
        solution: [
          `Subtract {{${a}x}}: {{${b}y = ${-a}x ${c < 0 ? "-" : "+"} ${Math.abs(c)}}}.`,
          `Divide by {{${b}}}: gradient {{m = ${-a}/${b}}}.`,
        ],
      };
    },
  },
  {
    id: "linear-graphs.context-rates-intercepts",
    topicId: "linear-graphs",
    title: "Real-Life Rates, Intercepts & Break-Even",
    level: 2,
    guideRef: "gradients-intercepts-context",
    generate(rng, tier) {
      if (tier === 1) {
        const scenario = rng.int(0, 2);
        if (scenario === 0) {
          const rate = rng.int(2, 9);
          const fixed = rng.int(3, 25);
          const d = rng.int(2, 12);
          const total = rate * d + fixed;
          return {
            prompt: `A taxi charges {{C = ${rate}d + ${fixed}}} (in $) for {{d}} km. What is the fare in $ for a {{${d}}} km trip?`,
            answer: { type: "number", value: total, display: `$${total}` },
            hint: `Substitute {{d = ${d}}} into {{${rate}d + ${fixed}}}.`,
            traps: [
              { spec: { type: "number", value: rate * d }, feedback: "Don't forget to add the fixed flag-fall charge!" },
            ],
            solution: [`{{C = ${rate}(${d}) + ${fixed} = ${rate * d} + ${fixed} = $${total}}}.`],
          };
        }
        if (scenario === 1) {
          const start = rng.int(12, 30) * 10;
          const drain = rng.int(4, 15);
          const t = rng.int(2, 7);
          const rem = start - drain * t;
          return {
            prompt: `A water tank's volume is {{V = ${start} - ${drain}t}} litres after {{t}} minutes. How many litres remain after {{${t}}} minutes?`,
            answer: { type: "number", value: rem, display: `${rem} litres` },
            hint: `Multiply {{${drain} * ${t}}} and subtract from {{${start}}}.`,
            traps: [
              { spec: { type: "number", value: start + drain * t }, feedback: "The gradient is negative, so the tank is draining — subtract rather than add!" },
            ],
            solution: [`{{V = ${start} - ${drain}(${t}) = ${start} - ${drain * t} = ${rem}}} litres.`],
          };
        }
        const speed = rng.int(4, 16) * 5;
        const hrs = rng.pick([1.5, 2, 2.5, 3, 4]);
        const dist = Math.round(speed * hrs);
        return {
          prompt: `A distance–time graph rises in a straight line from {{(0, 0)}} to {{(${hrs}, ${dist})}} (hours, km). Find the speed in km/h.`,
          answer: { type: "number", value: speed, display: `${speed} km/h` },
          hint: "Speed equals the gradient: change in distance ÷ change in time.",
          solution: [`Speed {{= ${dist} / ${hrs} = ${speed}}} km/h.`],
        };
      }

      if (tier === 2) {
        // Given two points on a tariff graph, find the fixed fee c
        const rate = rng.int(15, 55);
        let fixed = rng.int(10, 80);
        while (fixed === rate) fixed = rng.int(10, 80);
        const h1 = rng.int(2, 5);
        const dh = rng.int(2, 5);
        const h2 = h1 + dh;
        const c1 = rate * h1 + fixed;
        const c2 = rate * h2 + fixed;
        return {
          prompt: `A technician's linear bill graph passes through {{(${h1}, ${c1})}} and {{(${h2}, ${c2})}}, where {{x}} is hours worked and {{y}} is total cost in £. Find the fixed call-out fee (£).`,
          answer: { type: "number", value: fixed, display: `£${fixed}` },
          hint: "First calculate the hourly rate (gradient) from the two points, then substitute back into {{y = mx + c}} to find {{c}}.",
          traps: [
            { spec: { type: "number", value: rate }, feedback: `£${rate} is the hourly rate (gradient) — now find the fixed y-intercept c!` },
          ],
          solution: [
            `Hourly rate {{m = (${c2} - ${c1}) / (${h2} - ${h1}) = ${c2 - c1} / ${dh} = £${rate}}}/hour.`,
            `Fixed fee: {{${c1} = ${rate}(${h1}) + c}} → {{c = ${c1} - ${rate * h1} = £${fixed}}}.`,
          ],
        };
      }

      // Tier 3: Break-even point between two tariffs
      const m1 = rng.int(10, 28);
      const dm = rng.int(4, 15);
      const m2 = m1 + dm;
      const t = rng.int(2, 12);
      const c2 = rng.int(10, 40);
      const c1 = c2 + dm * t;
      return {
        prompt: `Plan A costs {{C = ${m1}x + ${c1}}} and Plan B costs {{C = ${m2}x + ${c2}}} (in $). Find the value of {{x}} where both plans cost the exact same amount.`,
        answer: { type: "number", value: t, display: String(t) },
        hint: `Set {{${m1}x + ${c1} = ${m2}x + ${c2}}} and solve for {{x}}.`,
        solution: [
          `Set equal: {{${m1}x + ${c1} = ${m2}x + ${c2}}}.`,
          `Rearrange: {{${c1 - c2} = ${dm}x}} → {{x = ${t}}}.`,
        ],
      };
    },
  },
  {
    id: "linear-graphs.inequality-regions",
    topicId: "linear-graphs",
    title: "Inequality Regions: Lattice Points & Areas",
    level: 3,
    guideRef: "inequality-regions",
    generate(rng, tier) {
      if (tier === 1) {
        const x1 = rng.int(-3, 3);
        const dx = rng.int(2, 5);
        const x2 = x1 + dx;
        const y1 = rng.int(-3, 3);
        const dy = rng.int(2, 5);
        const y2 = y1 + dy;
        const sx1 = rng.bool();
        const sx2 = rng.bool();
        const sy1 = rng.bool();
        const sy2 = rng.bool();
        const xLo = sx1 ? x1 : x1 + 1;
        const xHi = sx2 ? x2 : x2 - 1;
        const yLo = sy1 ? y1 : y1 + 1;
        const yHi = sy2 ? y2 : y2 - 1;
        const nx = Math.max(0, xHi - xLo + 1);
        const ny = Math.max(0, yHi - yLo + 1);
        const total = nx * ny;
        const xOp1 = sx1 ? "<=" : "<";
        const xOp2 = sx2 ? "<=" : "<";
        const yOp1 = sy1 ? "<=" : "<";
        const yOp2 = sy2 ? "<=" : "<";
        return {
          prompt: `How many integer coordinate points {{(x, y)}} satisfy BOTH {{${x1} ${xOp1} x ${xOp2} ${x2}}} and {{${y1} ${yOp1} y ${yOp2} ${y2}}}?`,
          answer: { type: "number", value: total, display: String(total) },
          hint: "Count the allowed integers for {{x}} and for {{y}} separately (excluding endpoints on strict {{<}} signs), then multiply.",
          solution: [
            `Valid integer {{x}}-values: from {{${xLo}}} to {{${xHi}}} ({{${nx}}} values).`,
            `Valid integer {{y}}-values: from {{${yLo}}} to {{${yHi}}} ({{${ny}}} values).`,
            `Total integer points {{= ${nx} * ${ny} = ${total}}}.`,
          ],
        };
      }

      if (tier === 2) {
        // Area of triangle x >= 0, y >= 0, ax + by <= c with exact integer area
        let p = rng.int(2, 12);
        const q = rng.int(2, 12);
        if ((p * q) % 2 !== 0) p += 1;
        const g = gcd(p, q);
        const a = q / g;
        const b = p / g;
        const c = (p * q) / g;
        const area = (p * q) / 2;
        const lhs = `${signTerm(a, "x", true)}${signTerm(b, "y")}`;
        return {
          prompt: `Find the area (in square units) of the triangular region defined by {{x >= 0}}, {{y >= 0}}, and {{${lhs} <= ${c}}}.`,
          answer: { type: "number", value: area, display: String(area) },
          hint: `Find the {{x}}-intercept and {{y}}-intercept of {{${lhs} = ${c}}}, then use {{1/2 * "base" * "height"}}.`,
          traps: [
            { spec: { type: "number", value: p * q }, feedback: "Don't forget to multiply by 1/2 for the area of a triangle!" },
          ],
          solution: [
            `Cover-up intercepts of {{${lhs} = ${c}}}: {{(${p}, 0)}} and {{(0, ${q})}}.`,
            `Right-angled triangle has base {{${p}}} and height {{${q}}}, so Area {{= 1/2 * ${p} * ${q} = ${area}}}.`,
          ],
        };
      }

      // Tier 3: Lattice points in a triangular region x >= a, y >= b, x + y <=/< a + b + k
      const a = rng.int(-2, 4);
      const b = rng.int(-2, 4);
      const k = rng.int(2, 7);
      const sumBound = a + b + k;
      const inclusive = rng.bool();
      const count = inclusive ? ((k + 1) * (k + 2)) / 2 : (k * (k + 1)) / 2;
      const op = inclusive ? "<=" : "<";
      const wrongCount = inclusive ? (k * (k + 1)) / 2 : ((k + 1) * (k + 2)) / 2;
      return {
        prompt: `How many integer coordinate points {{(x, y)}} satisfy {{x >= ${a}}}, {{y >= ${b}}}, and {{x + y ${op} ${sumBound}}}?`,
        answer: { type: "number", value: count, display: String(count) },
        hint: `List valid integer {{y}}-values column by column starting at {{x = ${a}}}. Watch whether {{x + y = ${sumBound}}} is ${inclusive ? "included (solid)" : "excluded (dashed)"}!`,
        traps: [
          {
            spec: { type: "number", value: wrongCount },
            feedback: inclusive
              ? "Because the sign is ≤ (solid boundary), points where x + y equals the bound ARE included!"
              : "Because the sign is < (dashed boundary), points where x + y equals the bound must be EXCLUDED!",
          },
        ],
        solution: [
          `For each {{x >= ${a}}}, we need {{${b} <= y ${op} ${sumBound} - x}}.`,
          `Column counts form the triangular sum {{${inclusive ? `${k + 1} + ${k} + … + 1` : `${k} + ${k - 1} + … + 1`} = ${count}}}.`,
        ],
      };
    },
  },
];
