import type { Drill } from "./types.ts";

function clean(n: number): number {
  return parseFloat(n.toPrecision(10));
}

function fmt(n: number): string {
  const c = clean(n);
  return String(c);
}

export const drills: Drill[] = [
  // =========================================================================
  // DRILL 1 (Level 1): Exact Sector Arc Length, Area & Perimeter
  // =========================================================================
  {
    id: "surface-area-volume.sector-exact",
    topicId: "surface-area-volume",
    title: "Circle sectors (exact in terms of π)",
    level: 1,
    guideRef: "circle-sectors",
    generate(rng, tier) {
      // Choose angle & fraction num/den so arc or area is always an exact integer * pi
      const angles: readonly { theta: number; num: number; den: number }[] =
        tier === 1
          ? [
              { theta: 180, num: 1, den: 2 },
              { theta: 90, num: 1, den: 4 },
              { theta: 60, num: 1, den: 6 },
              { theta: 120, num: 1, den: 3 },
            ]
          : [
              { theta: 30, num: 1, den: 12 },
              { theta: 45, num: 1, den: 8 },
              { theta: 60, num: 1, den: 6 },
              { theta: 72, num: 1, den: 5 },
              { theta: 90, num: 1, den: 4 },
              { theta: 120, num: 1, den: 3 },
              { theta: 135, num: 3, den: 8 },
              { theta: 150, num: 5, den: 12 },
              { theta: 240, num: 2, den: 3 },
              { theta: 270, num: 3, den: 4 },
            ];

      const a = rng.pick(angles);
      const mode =
        tier === 3
          ? rng.pick(["area", "arc", "perimeter"] as const)
          : rng.pick(["area", "arc"] as const);

      if (mode === "arc") {
        // Need (num / den) * 2 * r to be integer => r multiple of den / gcd(den, 2)
        const step = a.den % 2 === 0 ? a.den / 2 : a.den;
        const mult = rng.int(1, tier === 1 ? 6 : 5);
        const r = step * mult;
        const coeff = (a.num * 2 * r) / a.den;
        return {
          prompt: `A sector of a circle has radius {{${r} cm}} and central angle {{${a.theta}°}}. Find its exact **arc length** in terms of {{pi}} (e.g. \`6pi\`).`,
          answer: { type: "expression", expr: `${coeff}pi`, display: `{{${coeff}pi}} cm` },
          hint: `Simplify {{${a.theta}/360 = ${a.num}/${a.den}}}, then multiply by {{2pi r}}.`,
          solution: [
            `Fraction of full circle = {{${a.theta}/360 = ${a.num}/${a.den}}}.`,
            `Arc length = {{(${a.num}/${a.den}) * 2 * pi * ${r} = ${coeff}pi cm}}.`,
          ],
        };
      }

      if (mode === "perimeter") {
        const step = a.den % 2 === 0 ? a.den / 2 : a.den;
        const mult = rng.int(1, 5);
        const r = step * mult;
        const coeff = (a.num * 2 * r) / a.den;
        const straight = 2 * r;
        return {
          prompt: `A sector of a circle has radius {{${r} cm}} and central angle {{${a.theta}°}}. Find its exact **total perimeter** in terms of {{pi}} (e.g. \`4pi + 12\`).`,
          answer: {
            type: "expression",
            expr: `${coeff}pi+${straight}`,
            form: "simplified",
            display: `{{${coeff}pi + ${straight}}} cm`,
          },
          hint: `Perimeter = curved arc {{(${a.num}/${a.den}) * 2pi r}} PLUS both straight radii ({{2r}}).`,
          traps: [
            {
              spec: { type: "expression", expr: `${coeff}pi` },
              feedback: `{{${coeff}pi}} is only the curved arc — add both straight radii ({{+ ${straight}}})!`,
            },
            {
              spec: { type: "expression", expr: `${coeff}pi+${r}` },
              feedback: `A sector has **two** straight radii ({{+ ${straight}}}), not just one.`,
            },
          ],
          solution: [
            `Arc length = {{(${a.num}/${a.den}) * 2 * pi * ${r} = ${coeff}pi cm}}.`,
            `Add the two straight radii: {{${coeff}pi + ${r} + ${r} = ${coeff}pi + ${straight} cm}}.`,
          ],
        };
      }

      // Sector area: need r^2 divisible by den => choose step so step^2 divisible by den
      const stepMap: Record<number, number> = {
        2: 2,
        3: 3,
        4: 2,
        5: 5,
        6: 6,
        8: 4,
        12: 6,
      };
      const baseStep = stepMap[a.den] ?? a.den;
      const mult = rng.int(1, tier === 1 ? 6 : 4);
      const r = baseStep * mult;
      const coeff = (a.num * r * r) / a.den;
      return {
        prompt: `A sector of a circle has radius {{${r} cm}} and central angle {{${a.theta}°}}. Find its exact **area** in terms of {{pi}} (e.g. \`12pi\`).`,
        answer: { type: "expression", expr: `${coeff}pi`, display: `{{${coeff}pi}} cm²` },
        hint: `Simplify {{${a.theta}/360 = ${a.num}/${a.den}}}, then multiply by {{pi r^2}}.`,
        solution: [
          `Fraction of full circle = {{${a.theta}/360 = ${a.num}/${a.den}}}.`,
          `Sector area = {{(${a.num}/${a.den}) * pi * ${r}^2 = ${coeff}pi cm^2}}.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 2 (Level 2): Prisms, Cylinders & Reverse Volume
  // =========================================================================
  {
    id: "surface-area-volume.prism-cylinder-volume",
    topicId: "surface-area-volume",
    title: "Volume of prisms, cylinders & cones",
    level: 2,
    guideRef: "prisms-cylinders",
    generate(rng, tier) {
      if (tier === 1) {
        const shape = rng.pick(["cuboid", "tri-prism"] as const);
        if (shape === "cuboid") {
          const l = rng.int(3, 12);
          const w = rng.int(2, 9);
          const h = rng.int(2, 8);
          const vol = l * w * h;
          return {
            prompt: `Find the **volume** (in {{cm^3}}) of a cuboid measuring {{${l} cm}} by {{${w} cm}} by {{${h} cm}}.`,
            answer: { type: "number", value: vol, display: `${vol} cm³` },
            hint: "Multiply length × width × height.",
            solution: [`{{V = ${l} * ${w} * ${h} = ${vol} cm^3}}.`],
          };
        }
        const b = rng.int(2, 8) * 2;
        const h = rng.int(3, 11);
        const len = rng.int(4, 15);
        const area = (b * h) / 2;
        const vol = area * len;
        return {
          prompt: `A triangular prism has a cross-section of base {{${b} cm}} and perpendicular height {{${h} cm}}, and length {{${len} cm}}. Find its **volume** in {{cm^3}}.`,
          answer: { type: "number", value: vol, display: `${vol} cm³` },
          traps: [
            {
              spec: { type: "number", value: vol * 2 },
              feedback: "Remember the {{1/2}} in the triangle area formula {{(1/2)bh}}!",
            },
          ],
          hint: `First find the triangle area {{(1/2) * ${b} * ${h}}}, then multiply by {{${len}}}.`,
          solution: [
            `Cross-sectional area = {{(1/2) * ${b} * ${h} = ${area} cm^2}}.`,
            `Volume = {{${area} * ${len} = ${vol} cm^3}}.`,
          ],
        };
      }

      if (tier === 2) {
        const shape = rng.pick(["cylinder", "cone", "rev-cuboid"] as const);
        if (shape === "cylinder") {
          const r = rng.int(2, 9);
          const h = rng.int(3, 14);
          const coeff = r * r * h;
          return {
            prompt: `A cylinder has base radius {{${r} cm}} and height {{${h} cm}}. Find its exact **volume** in terms of {{pi}} (e.g. \`90pi\`).`,
            answer: { type: "expression", expr: `${coeff}pi`, display: `{{${coeff}pi}} cm³` },
            hint: `Use {{V = pi r^2 h}} with {{r = ${r}}} and {{h = ${h}}}.`,
            solution: [`{{V = pi * ${r}^2 * ${h} = ${coeff}pi cm^3}}.`],
          };
        }
        if (shape === "cone") {
          const r = rng.int(2, 9);
          const h = rng.int(1, 6) * 3; // divisible by 3 for clean integer pi
          const coeff = (r * r * h) / 3;
          return {
            prompt: `A cone has base radius {{${r} cm}} and perpendicular height {{${h} cm}}. Find its exact **volume** in terms of {{pi}} (e.g. \`48pi\`).`,
            answer: { type: "expression", expr: `${coeff}pi`, display: `{{${coeff}pi}} cm³` },
            traps: [
              {
                spec: { type: "expression", expr: `${coeff * 3}pi` },
                feedback: "Remember the {{1/3}} factor in cone volume: {{V = (1/3) pi r^2 h}}!",
              },
            ],
            hint: "Use {{V = (1/3) pi r^2 h}}.",
            solution: [`{{V = (1/3) * pi * ${r}^2 * ${h} = ${coeff}pi cm^3}}.`],
          };
        }
        const l = rng.int(4, 14);
        const w = rng.int(3, 10);
        const h = rng.int(3, 12);
        const vol = l * w * h;
        return {
          prompt: `A cuboid has volume {{${vol} cm^3}}, length {{${l} cm}}, and width {{${w} cm}}. Find its **height** in cm.`,
          answer: { type: "number", value: h, display: `${h} cm` },
          hint: `Divide the volume {{${vol}}} by the base area {{${l} * ${w}}}.`,
          solution: [
            `Base area = {{${l} * ${w} = ${l * w} cm^2}}.`,
            `Height = {{${vol} / ${l * w} = ${h} cm}}.`,
          ],
        };
      }

      // Tier 3: reverse cylinder radius, reverse cone height, or cylinder total SA
      const mode = rng.pick(["rev-cyl-r", "rev-cone-h", "cyl-sa"] as const);
      if (mode === "rev-cyl-r") {
        const r = rng.int(2, 12);
        const h = rng.int(3, 12);
        const vol = r * r * h;
        return {
          prompt: `A cylinder has volume {{${vol}pi cm^3}} and height {{${h} cm}}. Find its base **radius** in cm.`,
          answer: { type: "number", value: r, display: `${r} cm` },
          traps: [
            {
              spec: { type: "number", value: r * r },
              feedback: `{{${r * r}}} is {{r^2}} — take the square root to find {{r}}!`,
            },
          ],
          hint: `Set {{pi r^2 * ${h} = ${vol}pi}}, divide by {{${h}pi}}, then take the square root.`,
          solution: [
            `{{r^2 = ${vol} / ${h} = ${r * r}}}.`,
            `{{r = sqrt(${r * r}) = ${r} cm}}.`,
          ],
        };
      }
      if (mode === "rev-cone-h") {
        const r = rng.int(2, 9);
        const h = rng.int(2, 8) * 3;
        const vol = (r * r * h) / 3;
        return {
          prompt: `A cone has volume {{${vol}pi cm^3}} and base radius {{${r} cm}}. Find its perpendicular **height** in cm.`,
          answer: { type: "number", value: h, display: `${h} cm` },
          traps: [
            {
              spec: { type: "number", value: h / 3 },
              feedback: "Remember to multiply by {{3}} to undo the {{1/3}} in the cone volume formula!",
            },
          ],
          hint: `Substitute into {{(1/3) pi * ${r}^2 * h = ${vol}pi}} and multiply both sides by {{3}}.`,
          solution: [
            `{{${r * r}h = 3 * ${vol} = ${3 * vol}}}.`,
            `{{h = ${3 * vol} / ${r * r} = ${h} cm}}.`,
          ],
        };
      }
      const r = rng.int(2, 10);
      const h = rng.int(3, 14);
      const sa = 2 * r * r + 2 * r * h;
      return {
        prompt: `A **closed** cylinder has radius {{${r} cm}} and height {{${h} cm}}. Find its exact **total surface area** in terms of {{pi}} (e.g. \`112pi\`).`,
        answer: { type: "expression", expr: `${sa}pi`, display: `{{${sa}pi}} cm²` },
        traps: [
          {
            spec: { type: "expression", expr: `${2 * r * h}pi` },
            feedback: `{{${2 * r * h}pi}} is the curved wall only — add the two circular ends ({{2 * ${r * r}pi = ${2 * r * r}pi}})!`,
          },
        ],
        hint: "Closed cylinder total SA = {{2pi r^2 + 2pi r h}}.",
        solution: [
          `Two circular ends = {{2 * pi * ${r}^2 = ${2 * r * r}pi cm^2}}.`,
          `Curved wall = {{2 * pi * ${r} * ${h} = ${2 * r * h}pi cm^2}}.`,
          `Total SA = {{${2 * r * r}pi + ${2 * r * h}pi = ${sa}pi cm^2}}.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 3 (Level 1): Converting Units of Area, Volume & Capacity
  // =========================================================================
  {
    id: "surface-area-volume.area-volume-units",
    topicId: "surface-area-volume",
    title: "Area, volume & litre unit conversions",
    level: 1,
    guideRef: "area-volume-units",
    generate(rng, tier) {
      if (tier === 1) {
        const kind = rng.pick(["m2-cm2", "cm2-mm2", "L-cm3", "cm3-L"] as const);
        if (kind === "m2-cm2") {
          const val = clean(rng.int(12, 95) / 10);
          const ans = clean(val * 10000);
          return {
            prompt: `Convert {{${fmt(val)} m^2}} into {{cm^2}}.`,
            answer: { type: "number", value: ans, display: `${fmt(ans)} cm²` },
            traps: [
              {
                spec: { type: "number", value: clean(val * 100) },
                feedback: "Multiply by {{100^2 = 10,000}} for area, not {{100}}!",
              },
            ],
            hint: "{{1 m^2 = 100^2 = 10,000 cm^2}}.",
            solution: [`{{${fmt(val)} * 10,000 = ${fmt(ans)} cm^2}}.`],
          };
        }
        if (kind === "cm2-mm2") {
          const val = clean(rng.int(15, 180) / 10);
          const ans = clean(val * 100);
          return {
            prompt: `Convert {{${fmt(val)} cm^2}} into {{mm^2}}.`,
            answer: { type: "number", value: ans, display: `${fmt(ans)} mm²` },
            traps: [
              {
                spec: { type: "number", value: clean(val * 10) },
                feedback: "For area, square the factor: {{10^2 = 100}}, not {{10}}!",
              },
            ],
            hint: "{{1 cm^2 = 10^2 = 100 mm^2}}.",
            solution: [`{{${fmt(val)} * 100 = ${fmt(ans)} mm^2}}.`],
          };
        }
        if (kind === "L-cm3") {
          const val = clean(rng.int(12, 98) / 10);
          const ans = clean(val * 1000);
          return {
            prompt: `Convert {{${fmt(val)} "litres"}} into {{cm^3}}.`,
            answer: { type: "number", value: ans, display: `${fmt(ans)} cm³` },
            hint: "{{1 \"litre\" = 1,000 cm^3}}.",
            solution: [`{{${fmt(val)} * 1,000 = ${fmt(ans)} cm^3}}.`],
          };
        }
        const val = rng.int(15, 150) * 100;
        const ans = clean(val / 1000);
        return {
          prompt: `Convert {{${val} cm^3}} into **litres**.`,
          answer: { type: "number", value: ans, display: `${fmt(ans)} litres` },
          hint: "Divide by {{1,000}} because {{1 \"litre\" = 1,000 cm^3}}.",
          solution: [`{{${val} / 1,000 = ${fmt(ans)} "litres"}}.`],
        };
      }

      if (tier === 2) {
        const kind = rng.pick(["cm2-m2", "mm2-cm2", "m3-cm3", "m3-L"] as const);
        if (kind === "cm2-m2") {
          const val = rng.int(12, 180) * 500;
          const ans = clean(val / 10000);
          return {
            prompt: `Convert {{${val} cm^2}} into {{m^2}}.`,
            answer: { type: "number", value: ans, display: `${fmt(ans)} m²` },
            traps: [
              {
                spec: { type: "number", value: clean(val / 100) },
                feedback: "Divide by {{100^2 = 10,000}}, not {{100}}!",
              },
            ],
            hint: "{{1 m^2 = 10,000 cm^2}}, so divide by {{10,000}}.",
            solution: [`{{${val} / 10,000 = ${fmt(ans)} m^2}}.`],
          };
        }
        if (kind === "mm2-cm2") {
          const val = rng.int(12, 195) * 50;
          const ans = clean(val / 100);
          return {
            prompt: `Convert {{${val} mm^2}} into {{cm^2}}.`,
            answer: { type: "number", value: ans, display: `${fmt(ans)} cm²` },
            hint: "{{1 cm^2 = 100 mm^2}}, so divide by {{100}}.",
            solution: [`{{${val} / 100 = ${fmt(ans)} cm^2}}.`],
          };
        }
        if (kind === "m3-cm3") {
          const val = clean(rng.int(2, 95) / 1000);
          const ans = clean(val * 1000000);
          return {
            prompt: `Convert {{${fmt(val)} m^3}} into {{cm^3}}.`,
            answer: { type: "number", value: ans, display: `${fmt(ans)} cm³` },
            traps: [
              {
                spec: { type: "number", value: clean(val * 10000) },
                feedback: "For volume, cube the factor: {{100^3 = 1,000,000}}, not {{10,000}}!",
              },
            ],
            hint: "{{1 m^3 = 100^3 = 1,000,000 cm^3}}.",
            solution: [`{{${fmt(val)} * 1,000,000 = ${fmt(ans)} cm^3}}.`],
          };
        }
        const val = clean(rng.int(12, 96) / 10);
        const ans = clean(val * 1000);
        return {
          prompt: `Convert {{${fmt(val)} m^3}} into **litres**.`,
          answer: { type: "number", value: ans, display: `${fmt(ans)} litres` },
          hint: "{{1 m^3 = 1,000 \"litres\"}}.",
          solution: [`{{${fmt(val)} * 1,000 = ${fmt(ans)} "litres"}}.`],
        };
      }

      // Tier 3: cm3 -> m3, mm3 -> cm3, km2 -> m2
      const kind = rng.pick(["cm3-m3", "mm3-cm3", "km2-m2"] as const);
      if (kind === "cm3-m3") {
        const val = rng.int(12, 195) * 10000;
        const ans = clean(val / 1000000);
        return {
          prompt: `Convert {{${val} cm^3}} into {{m^3}}.`,
          answer: { type: "number", value: ans, display: `${fmt(ans)} m³` },
          hint: "Divide by {{100^3 = 1,000,000}}.",
          solution: [`{{${val} / 1,000,000 = ${fmt(ans)} m^3}}.`],
        };
      }
      if (kind === "mm3-cm3") {
        const val = rng.int(15, 195) * 100;
        const ans = clean(val / 1000);
        return {
          prompt: `Convert {{${val} mm^3}} into {{cm^3}}.`,
          answer: { type: "number", value: ans, display: `${fmt(ans)} cm³` },
          hint: "{{1 cm^3 = 10^3 = 1,000 mm^3}}, so divide by {{1,000}}.",
          solution: [`{{${val} / 1,000 = ${fmt(ans)} cm^3}}.`],
        };
      }
      const val = clean(rng.int(5, 180) / 1000);
      const ans = clean(val * 1000000);
      return {
        prompt: `Convert {{${fmt(val)} km^2}} into {{m^2}}.`,
        answer: { type: "number", value: ans, display: `${fmt(ans)} m²` },
        hint: "{{1 km^2 = 1,000^2 = 1,000,000 m^2}}.",
        solution: [`{{${fmt(val)} * 1,000,000 = ${fmt(ans)} m^2}}.`],
      };
    },
  },

  // =========================================================================
  // DRILL 4 (Level 3): Bounds & Measurement Accuracy
  // =========================================================================
  {
    id: "surface-area-volume.bounds-accuracy",
    topicId: "surface-area-volume",
    title: "Lower bounds, upper bounds & compound bounds",
    level: 3,
    guideRef: "measurement-accuracy",
    generate(rng, tier) {
      if (tier === 1) {
        const askUpper = rng.bool();
        const mode = rng.pick(["nearest-int", "nearest-10"] as const);
        if (mode === "nearest-int") {
          const val = rng.int(8, 85);
          const ans = clean(askUpper ? val + 0.5 : val - 0.5);
          return {
            prompt: `A length {{x}} is measured as {{${val} cm}} to the nearest centimetre. What is the **${askUpper ? "upper" : "lower"} bound** of {{x}} in cm?`,
            answer: { type: "number", value: ans, display: `${fmt(ans)} cm` },
            hint: `Half of {{1 cm}} is {{0.5 cm}}; ${askUpper ? "add" : "subtract"} {{0.5}}.`,
            solution: [`{{${val} ${askUpper ? "+" : "-"} 0.5 = ${fmt(ans)} cm}}.`],
          };
        }
        const val = rng.int(5, 75) * 10;
        const ans = askUpper ? val + 5 : val - 5;
        return {
          prompt: `A distance {{d}} is given as {{${val} m}} to the nearest {{10 m}}. What is the **${askUpper ? "upper" : "lower"} bound** of {{d}} in metres?`,
          answer: { type: "number", value: ans, display: `${ans} m` },
          hint: `Half of {{10 m}} is {{5 m}}; ${askUpper ? "add" : "subtract"} {{5}}.`,
          solution: [`{{${val} ${askUpper ? "+" : "-"} 5 = ${ans} m}}.`],
        };
      }

      if (tier === 2) {
        const askUpper = rng.bool();
        const mode = rng.pick(["1dp", "2dp", "1sf"] as const);
        if (mode === "1dp") {
          const tenths = rng.int(12, 198);
          const val = clean(tenths / 10);
          const valStr = (tenths / 10).toFixed(1);
          const ans = clean(askUpper ? val + 0.05 : val - 0.05);
          return {
            prompt: `A mass {{m}} is recorded as {{${valStr} kg}} correct to 1 decimal place. Find the **${askUpper ? "upper" : "lower"} bound** of {{m}} in kg.`,
            answer: { type: "number", value: ans, display: `${fmt(ans)} kg` },
            hint: "Rounding unit is {{0.1 kg}}, so half-unit is {{0.05 kg}}.",
            solution: [`{{${valStr} ${askUpper ? "+" : "-"} 0.05 = ${fmt(ans)} kg}}.`],
          };
        }
        if (mode === "2dp") {
          const hundredths = rng.int(105, 995);
          const val = clean(hundredths / 100);
          const valStr = (hundredths / 100).toFixed(2);
          const ans = clean(askUpper ? val + 0.005 : val - 0.005);
          return {
            prompt: `A time {{t}} is measured as {{${valStr} s}} correct to 2 decimal places. Find the **${askUpper ? "upper" : "lower"} bound** of {{t}} in seconds.`,
            answer: { type: "number", value: ans, display: `${fmt(ans)} s` },
            hint: "Rounding unit is {{0.01 s}}, so half-unit is {{0.005 s}}.",
            solution: [`{{${valStr} ${askUpper ? "+" : "-"} 0.005 = ${fmt(ans)} s}}.`],
          };
        }
        const digit = rng.int(2, 9);
        const unit = rng.pick([100, 1000] as const);
        const val = digit * unit;
        const half = unit / 2;
        const ans = askUpper ? val + half : val - half;
        return {
          prompt: `A crowd size {{N}} is rounded to {{${val}}} correct to **1 significant figure**. Find the **${askUpper ? "upper" : "lower"} bound** of {{N}}.`,
          answer: { type: "number", value: ans, display: `${ans}` },
          hint: `1 s.f. here means nearest {{${unit}}}, so half-unit is {{${half}}}.`,
          solution: [`{{${val} ${askUpper ? "+" : "-"} ${half} = ${ans}}}.`],
        };
      }

      // Tier 3: compound bounds (perimeter or area of rectangle, or max difference)
      const mode = rng.pick(["rect-area-ub", "rect-area-lb", "diff-ub"] as const);
      if (mode === "rect-area-ub" || mode === "rect-area-lb") {
        const l = rng.int(6, 18);
        const w = rng.int(3, l - 1);
        const isUb = mode === "rect-area-ub";
        const lB = clean(isUb ? l + 0.5 : l - 0.5);
        const wB = clean(isUb ? w + 0.5 : w - 0.5);
        const ans = clean(lB * wB);
        return {
          prompt: `A rectangle has sides {{${l} cm}} and {{${w} cm}}, each measured to the nearest centimetre. Find the **${isUb ? "upper" : "lower"} bound** of its **area** in {{cm^2}}.`,
          answer: { type: "number", value: ans, display: `${fmt(ans)} cm²` },
          hint: `Find the ${isUb ? "upper" : "lower"} bound of **each** side ({{${fmt(lB)}}} and {{${fmt(wB)}}}) before multiplying.`,
          solution: [
            `${isUb ? "Upper" : "Lower"} bounds of sides: {{${fmt(lB)} cm}} and {{${fmt(wB)} cm}}.`,
            `Area bound = {{${fmt(lB)} * ${fmt(wB)} = ${fmt(ans)} cm^2}}.`,
          ],
        };
      }
      const a = rng.int(12, 30);
      const b = rng.int(4, a - 3);
      const aUb = clean(a + 0.5);
      const bLb = clean(b - 0.5);
      const ans = clean(aUb - bLb);
      return {
        prompt: `Two lengths are measured as {{${a} cm}} and {{${b} cm}}, each to the nearest centimetre. What is the **upper bound** of their **difference** ({{A - B}}) in cm?`,
        answer: { type: "number", value: ans, display: `${fmt(ans)} cm` },
        traps: [
          {
            spec: { type: "number", value: a - b },
            feedback: "To maximise {{A - B}}, use {{UB(A) - LB(B)}}, NOT {{UB(A) - UB(B)}}!",
          },
        ],
        hint: "Maximise {{A - B}} by subtracting the **lower bound** of {{B}} from the **upper bound** of {{A}}.",
        solution: [
          `{{A_"UB" = ${fmt(aUb)} cm}} and {{B_"LB" = ${fmt(bLb)} cm}}.`,
          `Upper bound of difference = {{${fmt(aUb)} - ${fmt(bLb)} = ${fmt(ans)} cm}}.`,
        ],
      };
    },
  },
];
