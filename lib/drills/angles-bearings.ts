import type { AnswerSpec, Trap } from "../types.ts";
import type { Drill } from "./types.ts";

function pad3(deg: number): string {
  const norm = ((deg % 360) + 360) % 360;
  return String(norm).padStart(3, "0");
}

function bearingSpec(deg: number): { answer: AnswerSpec; traps?: Trap[] } {
  const norm = ((deg % 360) + 360) % 360;
  const s3 = String(norm).padStart(3, "0");
  const answer: AnswerSpec = {
    type: "text",
    accept: [s3, `${s3}°`, `${s3} degrees`],
    display: `${s3}°`,
  };
  if (norm < 100) {
    const raw = String(norm);
    return {
      answer,
      traps: [
        {
          spec: { type: "text", accept: [raw, `${raw}°`, `${raw} degrees`] },
          feedback: `Remember the three-figure rule! Bearings under 100° need a leading zero — write ${s3}°.`,
        },
      ],
    };
  }
  return { answer };
}

const REG_SIDES = [3, 4, 5, 6, 8, 9, 10, 12, 15, 18, 20, 24, 30, 36, 40, 45, 60, 72] as const;

export const drills: Drill[] = [
  {
    id: "angles-bearings.parallel-lines",
    topicId: "angles-bearings",
    title: "Parallel Lines: Corresponding, Alternate & Co-Interior",
    level: 1,
    guideRef: "parallel-lines-angles",
    generate(rng, tier) {
      if (tier === 1) {
        let a = rng.int(24, 156);
        while (a === 90) a = rng.int(24, 156);
        const supp = 180 - a;
        const kind = rng.int(0, 2);
        if (kind === 0) {
          return {
            prompt: `Two parallel lines are cut by a transversal. One angle is {{${a}°}}. Find the size of its **co-interior (allied)** angle in degrees.`,
            answer: { type: "number", value: supp, display: `${supp}°` },
            hint: "Co-interior angles between parallel lines sum to {{180°}}.",
            traps: [
              { spec: { type: "number", value: a }, feedback: "Co-interior angles are NOT equal — they add up to 180°!" },
            ],
            solution: [`Co-interior angles sum to {{180°}}: {{180° - ${a}° = ${supp}°}}.`],
          };
        }
        const label = kind === 1 ? "alternate" : "corresponding";
        return {
          prompt: `Two parallel lines are cut by a transversal. One angle is {{${a}°}}. Find the size of its **${label}** angle in degrees.`,
          answer: { type: "number", value: a, display: `${a}°` },
          hint: `${label === "alternate" ? "Alternate" : "Corresponding"} angles on parallel lines are equal.`,
          traps: [
            { spec: { type: "number", value: supp }, feedback: `${label === "alternate" ? "Alternate" : "Corresponding"} angles are equal — it is co-interior angles that sum to 180°!` },
          ],
          solution: [`${label === "alternate" ? "Alternate" : "Corresponding"} angles on parallel lines are equal, so the angle is {{${a}°}}.`],
        };
      }

      if (tier === 2) {
        if (rng.bool()) {
          // Co-interior algebraic: (k1*x + b1) + (k2*x + b2) = 180
          const kSum = rng.pick([3, 4, 5, 6, 9, 10]);
          const k1 = rng.int(1, kSum - 1);
          const k2 = kSum - k1;
          const x = rng.int(10, 32);
          const a1 = k1 * x + rng.int(-15, 25);
          const clampedA1 = Math.max(25, Math.min(150, a1));
          const b1 = clampedA1 - k1 * x;
          const a2 = 180 - clampedA1;
          const b2 = a2 - k2 * x;
          const e1 = `${k1 === 1 ? "" : k1}x ${b1 >= 0 ? `+ ${b1}` : `- ${Math.abs(b1)}`}`;
          const e2 = `${k2 === 1 ? "" : k2}x ${b2 >= 0 ? `+ ${b2}` : `- ${Math.abs(b2)}`}`;
          return {
            prompt: `Two **co-interior** angles between parallel lines measure {{(${e1})°}} and {{(${e2})°}}. Find the value of {{x}}.`,
            answer: { type: "number", value: x, display: String(x) },
            hint: "Add both expressions and set the total equal to {{180°}}.",
            solution: [
              `Co-interior angles sum to {{180°}}: {{(${e1}) + (${e2}) = 180}}.`,
              `Collect like terms: {{${kSum}x ${b1 + b2 >= 0 ? `+ ${b1 + b2}` : `- ${Math.abs(b1 + b2)}`} = 180}} → {{${kSum}x = ${180 - (b1 + b2)}}} → {{x = ${x}}}.`,
            ],
          };
        }
        // Equal alternate/corresponding algebraic
        const x = rng.int(8, 30);
        const k2 = rng.int(2, 4);
        const dk = rng.int(1, 3);
        const k1 = k2 + dk;
        const angle = rng.int(40, 140);
        const b1 = angle - k1 * x;
        const b2 = angle - k2 * x;
        const e1 = `${k1}x ${b1 >= 0 ? `+ ${b1}` : `- ${Math.abs(b1)}`}`;
        const e2 = `${k2}x ${b2 >= 0 ? `+ ${b2}` : `- ${Math.abs(b2)}`}`;
        const kind = rng.bool() ? "alternate" : "corresponding";
        return {
          prompt: `Two **${kind}** angles on parallel lines measure {{(${e1})°}} and {{(${e2})°}}. Find the value of {{x}}.`,
          answer: { type: "number", value: x, display: String(x) },
          hint: `${kind === "alternate" ? "Alternate" : "Corresponding"} angles on parallel lines are equal.`,
          solution: [
            `Equate both expressions: {{${e1} = ${e2}}}.`,
            `Solve for {{x}}: {{${dk}x = ${b2 - b1}}} → {{x = ${x}}}.`,
          ],
        };
      }

      // Tier 3: Zig-zag helper parallel line
      const a = rng.int(22, 68);
      const b = rng.int(22, 68);
      const bend = a + b;
      return {
        prompt: `A zig-zag connects two horizontal parallel lines. The upper segment makes an interior angle of {{${a}°}} with the top line and the lower segment makes an interior angle of {{${b}°}} with the bottom line (both pointing toward the bend). Find the interior bend angle in degrees.`,
        answer: { type: "number", value: bend, display: `${bend}°` },
        hint: "Draw a helper line parallel to both lines right through the bend vertex — each half is an alternate angle!",
        traps:
          a !== b
            ? [{ spec: { type: "number", value: Math.abs(a - b) }, feedback: "Add both alternate angles rather than subtracting them!" }]
            : undefined,
        solution: [
          "Draw a parallel helper line through the bend vertex.",
          `By alternate angles, the two halves are {{${a}°}} and {{${b}°}}, giving {{${a}° + ${b}° = ${bend}°}}.`,
        ],
      };
    },
  },
  {
    id: "angles-bearings.polygon-angles",
    topicId: "angles-bearings",
    title: "Interior & Exterior Angles in Polygons",
    level: 1,
    guideRef: "polygon-angles",
    generate(rng, tier) {
      if (tier === 1) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          const n = rng.int(4, 24);
          const sum = (n - 2) * 180;
          return {
            prompt: `Calculate the sum of the **interior angles** of a {{${n}}}-sided polygon (in degrees).`,
            answer: { type: "number", value: sum, display: `${sum}°` },
            hint: "Use {{(n - 2) * 180°}}.",
            traps: [
              { spec: { type: "number", value: n * 180 }, feedback: "Remember to subtract 2 first: (n − 2) × 180°, not n × 180°!" },
            ],
            solution: [`Interior sum {{= (${n} - 2) * 180° = ${n - 2} * 180° = ${sum}°}}.`],
          };
        }
        const n = rng.pick(REG_SIDES);
        const ext = 360 / n;
        const intA = 180 - ext;
        if (mode === 1) {
          return {
            prompt: `Find the size of ONE **exterior angle** of a regular {{${n}}}-sided polygon (in degrees).`,
            answer: { type: "number", value: ext, display: `${ext}°` },
            hint: "All exterior angles of a regular polygon are equal and sum to {{360°}}.",
            traps:
              ext !== intA
                ? [{ spec: { type: "number", value: intA }, feedback: `${intA}° is the interior angle — divide 360° by ${n} for the exterior angle!` }]
                : undefined,
            solution: [`Exterior angle {{= 360° / ${n} = ${ext}°}}.`],
          };
        }
        return {
          prompt: `Find the size of ONE **interior angle** of a regular {{${n}}}-sided polygon (in degrees).`,
          answer: { type: "number", value: intA, display: `${intA}°` },
          hint: "Find the exterior angle {{360° / n}} first, then subtract from {{180°}}.",
          traps:
            ext !== intA
              ? [{ spec: { type: "number", value: ext }, feedback: `${ext}° is the exterior angle — subtract it from 180° to get the interior angle!` }]
              : undefined,
          solution: [`Exterior {{= 360° / ${n} = ${ext}°}}; interior {{= 180° - ${ext}° = ${intA}°}}.`],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          const n = rng.pick(REG_SIDES);
          const ext = 360 / n;
          return {
            prompt: `Each **exterior angle** of a regular polygon measures {{${ext}°}}. How many sides does the polygon have?`,
            answer: { type: "number", value: n, display: String(n) },
            hint: "Use {{n = 360° / \"exterior angle\"}}.",
            solution: [`{{n = 360° / ${ext}° = ${n}}} sides.`],
          };
        }
        if (mode === 1) {
          const n = rng.pick(REG_SIDES);
          const ext = 360 / n;
          const intA = 180 - ext;
          return {
            prompt: `Each **interior angle** of a regular polygon measures {{${intA}°}}. How many sides does the polygon have?`,
            answer: { type: "number", value: n, display: String(n) },
            hint: "Find the exterior angle ({{180° - \"interior\"}}) first, then divide {{360°}} by it.",
            solution: [
              `Exterior angle {{= 180° - ${intA}° = ${ext}°}}.`,
              `Number of sides {{n = 360° / ${ext}° = ${n}}}.`,
            ],
          };
        }
        const n = rng.int(5, 25);
        const sum = (n - 2) * 180;
        return {
          prompt: `The sum of the interior angles of a polygon is {{${sum}°}}. How many sides does it have?`,
          answer: { type: "number", value: n, display: String(n) },
          hint: "Divide by {{180°}} to get {{n - 2}}, then add {{2}}!",
          traps: [
            { spec: { type: "number", value: n - 2 }, feedback: `${n - 2} is n − 2 (the number of triangles) — remember to add 2!` },
          ],
          solution: [`{{n - 2 = ${sum} / 180 = ${n - 2}}} → {{n = ${n}}} sides.`],
        };
      }

      // Tier 3: Missing angle in an irregular pentagon or hexagon
      const isPent = rng.bool();
      const n = isPent ? 5 : 6;
      const targetSum = (n - 2) * 180;
      const base = isPent ? 108 : 120;
      const known: number[] = [];
      let partial = 0;
      for (let i = 0; i < n - 1; i++) {
        const v = base + rng.int(-24, 24);
        known.push(v);
        partial += v;
      }
      const missing = targetSum - partial;
      const name = isPent ? "pentagon" : "hexagon";
      return {
        prompt: `The other {{${n - 1}}} interior angles of an irregular ${name} are ${known.map((v) => `{{${v}°}}`).join(", ")}. Calculate the missing interior angle in degrees.`,
        answer: { type: "number", value: missing, display: `${missing}°` },
        hint: `A ${name}'s interior angles sum to {{${targetSum}°}}. Add the known angles and subtract from {{${targetSum}°}}.`,
        solution: [
          `Interior angle sum of a ${name} {{= (${n} - 2) * 180° = ${targetSum}°}}.`,
          `Sum of known angles {{= ${known.join(" + ")} = ${partial}°}}.`,
          `Missing angle {{= ${targetSum}° - ${partial}° = ${missing}°}}.`,
        ],
      };
    },
  },
  {
    id: "angles-bearings.three-figure-bearings",
    topicId: "angles-bearings",
    title: "Three-Figure Bearings & Compass Turns",
    level: 2,
    guideRef: "three-figure-bearings",
    generate(rng, tier) {
      if (tier === 1) {
        const a = rng.int(6, 84);
        const cases: Array<{ desc: string; deg: number; step: string }> = [
          { desc: `{{${a}°}} **east of due North**`, deg: a, step: `{{000° + ${a}° = ${pad3(a)}°}}` },
          { desc: `{{${a}°}} **north of due East**`, deg: 90 - a, step: `East is {{090°}}, so {{090° - ${a}° = ${pad3(90 - a)}°}}` },
          { desc: `{{${a}°}} **south of due East**`, deg: 90 + a, step: `East is {{090°}}, so {{090° + ${a}° = ${pad3(90 + a)}°}}` },
          { desc: `{{${a}°}} **east of due South**`, deg: 180 - a, step: `South is {{180°}}, so {{180° - ${a}° = ${pad3(180 - a)}°}}` },
          { desc: `{{${a}°}} **west of due South**`, deg: 180 + a, step: `South is {{180°}}, so {{180° + ${a}° = ${pad3(180 + a)}°}}` },
          { desc: `{{${a}°}} **south of due West**`, deg: 270 - a, step: `West is {{270°}}, so {{270° - ${a}° = ${pad3(270 - a)}°}}` },
          { desc: `{{${a}°}} **north of due West**`, deg: 270 + a, step: `West is {{270°}}, so {{270° + ${a}° = ${pad3(270 + a)}°}}` },
          { desc: `{{${a}°}} **west of due North**`, deg: 360 - a, step: `North is {{360°}}, so {{360° - ${a}° = ${pad3(360 - a)}°}}` },
        ];
        const c = rng.pick(cases);
        const { answer, traps } = bearingSpec(c.deg);
        return {
          prompt: `A lighthouse lies ${c.desc} as seen from a harbour. Write its **three-figure bearing** from the harbour.`,
          answer,
          hint: "Measure **clockwise from North ({{000°}})** and write **three digits** (N=000°, E=090°, S=180°, W=270°).",
          traps,
          solution: [c.step + "."],
        };
      }

      if (tier === 2) {
        const start = rng.int(5, 355);
        const turn = rng.int(25, 165);
        const cw = rng.bool();
        const raw = cw ? start + turn : start - turn;
        const end = ((raw % 360) + 360) % 360;
        const { answer, traps } = bearingSpec(end);
        const wrongDir = (((cw ? start - turn : start + turn) % 360) + 360) % 360;
        const allTraps: Trap[] = [...(traps ?? [])];
        if (wrongDir !== end) {
          const ws = pad3(wrongDir);
          allTraps.push({
            spec: { type: "text", accept: [ws, `${ws}°`, `${ws} degrees`] },
            feedback: cw
              ? "Clockwise ADDS to the bearing (and wraps around 360°)!"
              : "Anticlockwise SUBTRACTS from the bearing (adding 360° if it drops below 0°)!",
          });
        }
        return {
          prompt: `A drone is flying on bearing {{${pad3(start)}°}} and turns {{${turn}°}} **${cw ? "clockwise" : "anticlockwise"}**. Write its new three-figure bearing.`,
          answer,
          hint: cw
            ? "Add the turn; if the total reaches {{360°}} or more, subtract {{360°}}."
            : "Subtract the turn; if the result drops below {{0°}}, add {{360°}}.",
          traps: allTraps,
          solution: cw
            ? [`{{${pad3(start)}° + ${turn}° = ${raw}°}}${raw >= 360 ? ` → {{${raw}° - 360° = ${pad3(end)}°}}` : ` → {{${pad3(end)}°}}`}.`]
            : [`{{${pad3(start)}° - ${turn}° = ${raw}°}}${raw < 0 ? ` → {{${raw}° + 360° = ${pad3(end)}°}}` : ` → {{${pad3(end)}°}}`}.`],
        };
      }

      // Tier 3: Two sequential turns
      const start = rng.int(10, 350);
      const t1 = rng.int(35, 145);
      const t2 = rng.int(35, 145);
      const net = t1 - t2;
      const end = (((start + net) % 360) + 360) % 360;
      const { answer, traps } = bearingSpec(end);
      return {
        prompt: `A yacht heads on bearing {{${pad3(start)}°}}, turns {{${t1}°}} **clockwise**, and later turns {{${t2}°}} **anticlockwise**. Write its final three-figure bearing.`,
        answer,
        hint: "Add clockwise turns, subtract anticlockwise turns, and wrap modulo {{360°}} into {{000°–359°}}.",
        traps,
        solution: [
          `Net turn {{= +${t1}° - ${t2}° = ${net >= 0 ? `+${net}°` : `${net}°`}}}.`,
          `{{${pad3(start)}° ${net >= 0 ? `+ ${net}°` : `- ${Math.abs(net)}°`} = ${start + net}°}} → three-figure bearing **{{${pad3(end)}°}}**.`,
        ],
      };
    },
  },
  {
    id: "angles-bearings.back-bearings",
    topicId: "angles-bearings",
    title: "Back Bearings & Bearing Triangles",
    level: 2,
    guideRef: "back-bearings-angle-rules",
    generate(rng, tier) {
      if (tier === 1) {
        let fwd = rng.int(4, 356);
        while (fwd === 180) fwd = rng.int(4, 356);
        const back = fwd < 180 ? fwd + 180 : fwd - 180;
        const { answer, traps } = bearingSpec(back);
        return {
          prompt: `The bearing of {{B}} from {{A}} is {{${pad3(fwd)}°}}. Write the three-figure bearing of {{A}} from {{B}}.`,
          answer,
          hint: fwd < 180 ? "Since the bearing is less than {{180°}}, add {{180°}}." : "Since the bearing is {{180°}} or more, subtract {{180°}} (and keep 3 digits!).",
          traps,
          solution:
            fwd < 180
              ? [`Since {{${pad3(fwd)}° < 180°}}, add {{180°}}: {{${pad3(fwd)}° + 180° = ${pad3(back)}°}}.`]
              : [`Since {{${pad3(fwd)}° >= 180°}}, subtract {{180°}}: {{${pad3(fwd)}° - 180° = ${pad3(back)}°}}.`],
        };
      }

      if (tier === 2) {
        // Two-leg journey A -> B (b1) and B -> C (b2): interior angle ∠ABC = (b1 + 180) - b2
        const b1 = rng.int(15, 135);
        const backA = b1 + 180;
        const angleB = rng.int(35, 145);
        const b2 = backA - angleB;
        return {
          prompt: `A ship sails from {{A}} to {{B}} on bearing {{${pad3(b1)}°}}, then turns at {{B}} to sail to {{C}} on bearing {{${pad3(b2)}°}}. Calculate the interior angle {{∠ABC}} in degrees.`,
          answer: { type: "number", value: angleB, display: `${angleB}°` },
          hint: `Find the back bearing of {{A}} from {{B}} ({{${pad3(b1)}° + 180°}}), then subtract the bearing of {{C}} from {{B}}.`,
          solution: [
            `Back bearing of {{A}} from {{B}} {{= ${pad3(b1)}° + 180° = ${backA}°}}.`,
            `Interior angle {{∠ABC = ${backA}° - ${pad3(b2)}° = ${angleB}°}}.`,
          ],
        };
      }

      // Tier 3: Isosceles bearing triangle AB = AC -> find bearing of C from B
      const b1 = rng.int(12, 95);
      const k = rng.int(16, 62);
      const angleA = 2 * k;
      const b2 = b1 + angleA;
      const baseAngle = 90 - k;
      const backA = b1 + 180;
      const bearingBC = (b1 + 90 + k) % 360;
      const { answer, traps } = bearingSpec(bearingBC);
      return {
        prompt: `Three markers {{A, B, C}} satisfy {{AB = AC}}. From {{A}}, the bearing of {{B}} is {{${pad3(b1)}°}} and the bearing of {{C}} is {{${pad3(b2)}°}}. Calculate the three-figure bearing of {{C}} from {{B}}.`,
        answer,
        hint: "Find {{∠BAC}} by subtracting the two bearings from {{A}}, use isosceles base angles to find {{∠ABC}}, then subtract {{∠ABC}} from the back bearing of {{A}} from {{B}}.",
        traps,
        solution: [
          `{{∠BAC = ${pad3(b2)}° - ${pad3(b1)}° = ${angleA}°}}.`,
          `Since {{AB = AC}}, base angle {{∠ABC = (180° - ${angleA}°) / 2 = ${baseAngle}°}}.`,
          `Back bearing of {{A}} from {{B}} is {{${pad3(b1)}° + 180° = ${backA}°}}, so bearing of {{C}} from {{B}} {{= ${backA}° - ${baseAngle}° = ${pad3(bearingBC)}°}}.`,
        ],
      };
    },
  },
];
