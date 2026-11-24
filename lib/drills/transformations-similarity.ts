import type { Drill } from "./types.ts";

function clean(n: number): number {
  return Number(n.toFixed(6));
}

function fmtNum(n: number): string {
  const c = clean(n);
  return c < 0 ? `−${Math.abs(c)}` : String(c);
}

function fmtPt(x: number, y: number): string {
  return `(${fmtNum(x)}, ${fmtNum(y)})`;
}

export const drills: Drill[] = [
  {
    id: "transformations-similarity.reflect-translate",
    topicId: "transformations-similarity",
    title: "Reflections & Translations on Coordinates",
    level: 1,
    guideRef: "reflection-translation",
    generate(rng, tier) {
      if (tier === 1) {
        const mode = rng.pick(["xaxis", "yaxis", "translate"] as const);
        const x = rng.nonZero(-7, 7);
        const y = rng.nonZero(-7, 7);
        if (mode === "xaxis") {
          return {
            prompt: `Reflect the point {{(${x}, ${y})}} in the {{x}}-axis ({{y = 0}}). Write the image coordinates.`,
            answer: { type: "list", values: [x, -y], ordered: true, display: fmtPt(x, -y) },
            hint: "Across the x-axis, x stays unchanged and y changes sign.",
            traps: [{ spec: { type: "list", values: [-x, y], ordered: true }, feedback: "That reflects in the y-axis! Flip y, not x." }],
            solution: [`Across {{y = 0}}, {{(x, y) -> (x, -y)}}, giving {{(${x}, ${-y})}}.`],
          };
        }
        if (mode === "yaxis") {
          return {
            prompt: `Reflect the point {{(${x}, ${y})}} in the {{y}}-axis ({{x = 0}}). Write the image coordinates.`,
            answer: { type: "list", values: [-x, y], ordered: true, display: fmtPt(-x, y) },
            hint: "Across the y-axis, y stays unchanged and x changes sign.",
            traps: [{ spec: { type: "list", values: [x, -y], ordered: true }, feedback: "That reflects in the x-axis! Flip x, not y." }],
            solution: [`Across {{x = 0}}, {{(x, y) -> (-x, y)}}, giving {{(${-x}, ${y})}}.`],
          };
        }
        const dx = rng.nonZero(-6, 6);
        const dy = rng.nonZero(-6, 6);
        const nx = x + dx;
        const ny = y + dy;
        return {
          prompt: `Translate the point {{(${x}, ${y})}} by the column vector {{(${dx}, ${dy})}}. Write the image coordinates.`,
          answer: { type: "list", values: [nx, ny], ordered: true, display: fmtPt(nx, ny) },
          hint: "Add dx to x and dy to y.",
          traps: [{ spec: { type: "list", values: [x - dx, y - dy], ordered: true }, feedback: "Add the vector components rather than subtracting them." }],
          solution: [`{{(${x} + (${dx}), ${y} + (${dy})) = (${nx}, ${ny})}}.`],
        };
      }

      if (tier === 2) {
        const mode = rng.pick(["xa", "yb", "yx", "ymx", "vec"] as const);
        const x = rng.nonZero(-8, 8);
        const y = rng.nonZero(-8, 8);
        if (mode === "xa") {
          let a = rng.nonZero(-4, 4);
          if (a === x) a = x === 4 ? -2 : x + 1;
          const nx = 2 * a - x;
          return {
            prompt: `Reflect the point {{(${x}, ${y})}} in the vertical line {{x = ${a}}}. Write the image coordinates.`,
            answer: { type: "list", values: [nx, y], ordered: true, display: fmtPt(nx, y) },
            hint: `Use x' = 2(${a}) − (${x}) while keeping y = ${y}.`,
            solution: [`Vertical mirror {{x = ${a}}}: {{x' = 2(${a}) - (${x}) = ${nx}}}, {{y' = ${y}}}, giving {{(${nx}, ${y})}}.`],
          };
        }
        if (mode === "yb") {
          let b = rng.nonZero(-4, 4);
          if (b === y) b = y === 4 ? -2 : y + 1;
          const ny = 2 * b - y;
          return {
            prompt: `Reflect the point {{(${x}, ${y})}} in the horizontal line {{y = ${b}}}. Write the image coordinates.`,
            answer: { type: "list", values: [x, ny], ordered: true, display: fmtPt(x, ny) },
            hint: `Keep x = ${x} fixed and use y' = 2(${b}) − (${y}).`,
            solution: [`Horizontal mirror {{y = ${b}}}: {{x' = ${x}}}, {{y' = 2(${b}) - (${y}) = ${ny}}}, giving {{(${x}, ${ny})}}.`],
          };
        }
        if (mode === "yx") {
          const y2 = y === x ? -y : y;
          return {
            prompt: `Reflect the point {{(${x}, ${y2})}} in the diagonal line {{y = x}}. Write the image coordinates.`,
            answer: { type: "list", values: [y2, x], ordered: true, display: fmtPt(y2, x) },
            hint: "Reflection in y = x swaps x and y.",
            traps: [{ spec: { type: "list", values: [-y2, -x], ordered: true }, feedback: "That reflects in y = −x! In y = x, just swap without changing signs." }],
            solution: [`Swap coordinates: {{(${x}, ${y2}) -> (${y2}, ${x})}}.`],
          };
        }
        if (mode === "ymx") {
          const y2 = y === -x ? y + 1 : y;
          return {
            prompt: `Reflect the point {{(${x}, ${y2})}} in the diagonal line {{y = -x}}. Write the image coordinates.`,
            answer: { type: "list", values: [-y2, -x], ordered: true, display: fmtPt(-y2, -x) },
            hint: "Reflection in y = −x swaps and negates both coordinates: (x, y) → (−y, −x).",
            traps: [{ spec: { type: "list", values: [y2, x], ordered: true }, feedback: "Remember to negate BOTH coordinates after swapping for y = −x." }],
            solution: [`Apply {{(x, y) -> (-y, -x)}}: {{(${x}, ${y2}) -> (${-y2}, ${-x})}}.`],
          };
        }
        const dx = rng.nonZero(-7, 7);
        const dy = rng.nonZero(-7, 7);
        const ix = x + dx;
        const iy = y + dy;
        return {
          prompt: `A translation maps {{(${x}, ${y})}} onto {{(${ix}, ${iy})}}. Write the column vector {{(dx, dy)}}.`,
          answer: { type: "list", values: [dx, dy], ordered: true, display: fmtPt(dx, dy) },
          hint: "Compute Image − Object for both x and y.",
          traps: [{ spec: { type: "list", values: [-dx, -dy], ordered: true }, feedback: "You did Object − Image! Subtract Image − Object." }],
          solution: [`{{dx = ${ix} - (${x}) = ${dx}}} and {{dy = ${iy} - (${y}) = ${dy}}}, giving {{(${dx}, ${dy})}}.`],
        };
      }

      // Tier 3: reverse translation or composed reflection
      const mode = rng.pick(["reverse", "compose-xy", "compose-yx"] as const);
      const x = rng.nonZero(-7, 7);
      const y = rng.nonZero(-7, 7);
      if (mode === "reverse") {
        const dx = rng.nonZero(-6, 6);
        const dy = rng.nonZero(-6, 6);
        const ix = x + dx;
        const iy = y + dy;
        return {
          prompt: `After a translation by column vector {{(${dx}, ${dy})}}, point {{P}} lands at {{(${ix}, ${iy})}}. Find the original coordinates of {{P}}.`,
          answer: { type: "list", values: [x, y], ordered: true, display: fmtPt(x, y) },
          hint: "Work backwards by subtracting the translation vector from the image.",
          traps: [{ spec: { type: "list", values: [ix + dx, iy + dy], ordered: true }, feedback: "To go backwards to P, reverse the signs of the vector." }],
          solution: [`Subtract the vector: {{(${ix} - (${dx}), ${iy} - (${dy})) = (${x}, ${y})}}.`],
        };
      }
      if (mode === "compose-xy") {
        let a = rng.nonZero(-4, 4);
        if (a === x) a = x === 4 ? -2 : x + 1;
        let b = rng.nonZero(-4, 4);
        if (b === y) b = y === 4 ? -2 : y + 1;
        const nx = 2 * a - x;
        const ny = 2 * b - y;
        return {
          prompt: `Point {{(${x}, ${y})}} is reflected in {{x = ${a}}} and then reflected in {{y = ${b}}}. Write the final image coordinates.`,
          answer: { type: "list", values: [nx, ny], ordered: true, display: fmtPt(nx, ny) },
          hint: "Reflect x across a first, then reflect y across b.",
          solution: [
            `Reflect in {{x = ${a}}}: {{(${nx}, ${y})}}.`,
            `Reflect in {{y = ${b}}}: {{(${nx}, ${ny})}}.`,
          ],
        };
      }
      let a = rng.nonZero(-4, 4);
      if (a === x) a = x === 4 ? -2 : x + 1;
      const mx = 2 * a - x;
      return {
        prompt: `Point {{(${x}, ${y})}} is reflected in {{x = ${a}}} and then reflected in {{y = x}}. Write the final image coordinates.`,
        answer: { type: "list", values: [y, mx], ordered: true, display: fmtPt(y, mx) },
        hint: "First reflect horizontally in x = a, then swap x and y.",
        solution: [
          `Reflect in {{x = ${a}}}: {{(${mx}, ${y})}}.`,
          `Reflect in {{y = x}}: swap coordinates to {{(${y}, ${mx})}}.`,
        ],
      };
    },
  },
  {
    id: "transformations-similarity.rotate-point",
    topicId: "transformations-similarity",
    title: "Rotations About Origin & Arbitrary Centres",
    level: 2,
    guideRef: "rotation",
    generate(rng, tier) {
      const turn = rng.pick(["90cw", "90acw", "180"] as const);
      const label = turn === "90cw" ? "90° clockwise" : turn === "90acw" ? "90° anticlockwise" : "180°";

      if (tier === 1) {
        const x = rng.nonZero(-7, 7);
        let y = rng.nonZero(-7, 7);
        if (Math.abs(x) === Math.abs(y)) y = y > 0 ? y + 1 : y - 1;
        const [nx, ny] = turn === "90cw" ? [y, -x] : turn === "90acw" ? [-y, x] : [-x, -y];
        const rule = turn === "90cw" ? "(x, y) -> (y, -x)" : turn === "90acw" ? "(x, y) -> (-y, x)" : "(x, y) -> (-x, -y)";
        return {
          prompt: `Rotate the point {{(${x}, ${y})}} by {{${label}}} about the origin {{(0, 0)}}. Write the image coordinates.`,
          answer: { type: "list", values: [nx, ny], ordered: true, display: fmtPt(nx, ny) },
          hint: `Use the origin rotation rule {{${rule}}}.`,
          traps:
            turn === "90cw"
              ? [{ spec: { type: "list", values: [-y, x], ordered: true }, feedback: "That is 90° anticlockwise! For clockwise, use (y, −x)." }]
              : turn === "90acw"
                ? [{ spec: { type: "list", values: [y, -x], ordered: true }, feedback: "That is 90° clockwise! For anticlockwise, use (−y, x)." }]
                : undefined,
          solution: [`Apply {{${rule}}} to {{(${x}, ${y})}} to get {{(${nx}, ${ny})}}.`],
        };
      }

      if (tier === 3 && rng.bool(0.35)) {
        const cx = rng.int(-5, 5);
        const cy = rng.int(-5, 5);
        const dx = rng.nonZero(-5, 5);
        const dy = rng.nonZero(-5, 5);
        const px = cx + dx;
        const py = cy + dy;
        const qx = cx - dx;
        const qy = cy - dy;
        return {
          prompt: `A {{180°}} rotation maps {{(${px}, ${py})}} onto {{(${qx}, ${qy})}}. Find the coordinates of the centre of rotation.`,
          answer: { type: "list", values: [cx, cy], ordered: true, display: fmtPt(cx, cy) },
          hint: "For any 180° rotation, the centre is the exact midpoint of the point and its image.",
          solution: [`Midpoint {{= ((${px} + (${qx}))/2, (${py} + (${qy}))/2) = (${cx}, ${cy})}}.`],
        };
      }

      const rangeC = tier === 2 ? 4 : 6;
      const cx = rng.nonZero(-rangeC, rangeC);
      const cy = rng.nonZero(-rangeC, rangeC);
      const dx = rng.nonZero(-5, 5);
      let dy = rng.nonZero(-5, 5);
      if (Math.abs(dx) === Math.abs(dy)) dy = dy > 0 ? dy + 1 : dy - 1;
      const px = cx + dx;
      const py = cy + dy;
      const [rdx, rdy] = turn === "90cw" ? [dy, -dx] : turn === "90acw" ? [-dy, dx] : [-dx, -dy];
      const nx = cx + rdx;
      const ny = cy + rdy;
      return {
        prompt: `Rotate the point {{(${px}, ${py})}} by {{${label}}} about the centre {{C(${cx}, ${cy})}}. Write the image coordinates.`,
        answer: { type: "list", values: [nx, ny], ordered: true, display: fmtPt(nx, ny) },
        hint: `Find vector CP = (${dx}, ${dy}), rotate that vector by ${label}, then add back onto C(${cx}, ${cy}).`,
        traps: [{ spec: { type: "list", values: [rdx, rdy], ordered: true }, feedback: `Don't stop at the rotated vector — add it back onto centre C(${cx}, ${cy})!` }],
        solution: [
          `Vector from {{C(${cx}, ${cy})}} to {{(${px}, ${py})}} is {{(${dx}, ${dy})}}.`,
          `Rotate {{(${dx}, ${dy})}} by {{${label}}} to get {{(${rdx}, ${rdy})}}.`,
          `Add to {{C(${cx}, ${cy})}}: {{(${nx}, ${ny})}}.`,
        ],
      };
    },
  },
  {
    id: "transformations-similarity.enlarge-point",
    topicId: "transformations-similarity",
    title: "Integer & Fractional Enlargements",
    level: 2,
    guideRef: "enlargement",
    generate(rng, tier) {
      if (tier === 1) {
        if (rng.bool(0.5)) {
          const k = rng.pick([2, 3, 4] as const);
          const x = rng.nonZero(-6, 6);
          const y = rng.nonZero(-6, 6);
          return {
            prompt: `Enlarge the point {{(${x}, ${y})}} by scale factor {{${k}}} from the origin {{(0, 0)}}. Write the image coordinates.`,
            answer: { type: "list", values: [k * x, k * y], ordered: true, display: fmtPt(k * x, k * y) },
            hint: `Multiply both coordinates by ${k}.`,
            solution: [`From {{(0, 0)}}, multiply by {{${k}}}: {{(${k * x}, ${k * y})}}.`],
          };
        }
        const cx = rng.nonZero(-4, 4);
        const cy = rng.nonZero(-4, 4);
        const dx = rng.nonZero(-4, 4);
        const dy = rng.nonZero(-4, 4);
        const px = cx + dx;
        const py = cy + dy;
        const nx = cx + 2 * dx;
        const ny = cy + 2 * dy;
        return {
          prompt: `Enlarge the point {{(${px}, ${py})}} by scale factor {{2}} from centre {{C(${cx}, ${cy})}}. Write the image coordinates.`,
          answer: { type: "list", values: [nx, ny], ordered: true, display: fmtPt(nx, ny) },
          hint: `Find vector CP = (${dx}, ${dy}), double it, and add onto C(${cx}, ${cy}).`,
          traps: [{ spec: { type: "list", values: [2 * px, 2 * py], ordered: true }, feedback: `That enlarges from (0, 0). Measure from centre C(${cx}, ${cy}) first!` }],
          solution: [
            `Vector {{CP = (${dx}, ${dy})}}; doubled is {{(${2 * dx}, ${2 * dy})}}.`,
            `Add to {{C(${cx}, ${cy})}}: {{(${nx}, ${ny})}}.`,
          ],
        };
      }

      if (tier === 2) {
        const spec = rng.pick([
          { num: 2, den: 1, txt: "2" },
          { num: 3, den: 1, txt: "3" },
          { num: 1, den: 2, txt: "1/2" },
          { num: 1, den: 3, txt: "1/3" },
        ] as const);
        const cx = rng.nonZero(-4, 4);
        const cy = rng.nonZero(-4, 4);
        const ux = rng.nonZero(-4, 4);
        const uy = rng.nonZero(-4, 4);
        const dx = ux * spec.den;
        const dy = uy * spec.den;
        const px = cx + dx;
        const py = cy + dy;
        const ndx = ux * spec.num;
        const ndy = uy * spec.num;
        const nx = cx + ndx;
        const ny = cy + ndy;
        return {
          prompt: `Enlarge the point {{(${px}, ${py})}} by scale factor {{${spec.txt}}} from centre {{C(${cx}, ${cy})}}. Write the image coordinates.`,
          answer: { type: "list", values: [nx, ny], ordered: true, display: fmtPt(nx, ny) },
          hint: `Vector CP = (${dx}, ${dy}). Multiply both components by ${spec.txt}, then add to C(${cx}, ${cy}).`,
          traps: [{ spec: { type: "list", values: [ndx, ndy], ordered: true }, feedback: `Add the scaled vector onto centre C(${cx}, ${cy})!` }],
          solution: [
            `Vector {{CP = (${dx}, ${dy})}}.`,
            `Multiply by {{${spec.txt}}}: {{(${ndx}, ${ndy})}}.`,
            `Add to {{C(${cx}, ${cy})}}: {{(${nx}, ${ny})}}.`,
          ],
        };
      }

      // Tier 3: non-unit fractional scale factors or finding centre
      if (rng.bool(0.35)) {
        const k = rng.pick([2, 3] as const);
        const cx = rng.int(-4, 4);
        const cy = rng.int(-4, 4);
        const dx = rng.nonZero(-4, 4);
        const dy = rng.nonZero(-4, 4);
        const px = cx + dx;
        const py = cy + dy;
        const ix = cx + k * dx;
        const iy = cy + k * dy;
        return {
          prompt: `An enlargement of scale factor {{${k}}} maps {{P(${px}, ${py})}} onto {{P'(${ix}, ${iy})}}. Find the coordinates of the centre of enlargement.`,
          answer: { type: "list", values: [cx, cy], ordered: true, display: fmtPt(cx, cy) },
          hint: `Since CP' = ${k} × CP, the vector PP' equals ${k - 1} × CP. Divide PP' by ${k - 1} to get CP, then subtract from P.`,
          solution: [
            `Vector {{PP' = (${ix - px}, ${iy - py}) = ${k - 1} * CP}}, so {{CP = (${dx}, ${dy})}}.`,
            `Centre {{C = P - CP = (${px} - (${dx}), ${py} - (${dy})) = (${cx}, ${cy})}}.`,
          ],
        };
      }
      const spec = rng.pick([
        { num: 3, den: 2, txt: "3/2" },
        { num: 2, den: 3, txt: "2/3" },
        { num: 1, den: 4, txt: "1/4" },
        { num: 3, den: 4, txt: "3/4" },
      ] as const);
      const cx = rng.nonZero(-5, 5);
      const cy = rng.nonZero(-5, 5);
      const ux = rng.nonZero(-3, 3);
      const uy = rng.nonZero(-3, 3);
      const dx = ux * spec.den;
      const dy = uy * spec.den;
      const px = cx + dx;
      const py = cy + dy;
      const ndx = ux * spec.num;
      const ndy = uy * spec.num;
      const nx = cx + ndx;
      const ny = cy + ndy;
      return {
        prompt: `Enlarge the point {{(${px}, ${py})}} by scale factor {{${spec.txt}}} from centre {{C(${cx}, ${cy})}}. Write the image coordinates.`,
        answer: { type: "list", values: [nx, ny], ordered: true, display: fmtPt(nx, ny) },
        hint: `Find CP = (${dx}, ${dy}), multiply by ${spec.txt}, and add onto C(${cx}, ${cy}).`,
        solution: [
          `Vector {{CP = (${dx}, ${dy})}}.`,
          `Multiply by {{${spec.txt}}}: {{(${ndx}, ${ndy})}}.`,
          `Add to {{C(${cx}, ${cy})}}: {{(${nx}, ${ny})}}.`,
        ],
      };
    },
  },
  {
    id: "transformations-similarity.similar-lengths",
    topicId: "transformations-similarity",
    title: "Missing Lengths in Similar Shapes",
    level: 3,
    guideRef: "congruence-similarity",
    generate(rng, tier) {
      if (tier === 1) {
        const k = rng.pick([2, 3, 4, 5] as const);
        const a = rng.int(3, 12);
        let b = rng.int(3, 12);
        if (b === a) b = a + 2;
        const a2 = a * k;
        const ans = b * k;
        return {
          prompt: `Two similar triangles have corresponding sides {{${a} cm}} and {{${a2} cm}}. Another side on the smaller triangle is {{${b} cm}}. Find the corresponding side on the larger triangle (in cm).`,
          answer: { type: "number", value: ans, display: `${ans} cm` },
          hint: `First find scale factor k = ${a2} ÷ ${a}, then multiply ${b} by k.`,
          traps: [{ spec: { type: "number", value: b + (a2 - a) }, feedback: "Multiply by the scale factor — do not add the difference!" }],
          solution: [`Scale factor {{k = ${a2} / ${a} = ${k}}}. Missing side {{= ${b} * ${k} = ${ans} cm}}.`],
        };
      }

      if (tier === 2) {
        const ratio = rng.pick([
          { num: 3, den: 2, dec: "1.5" },
          { num: 5, den: 2, dec: "2.5" },
          { num: 4, den: 5, dec: "0.8" },
          { num: 3, den: 4, dec: "0.75" },
          { num: 5, den: 4, dec: "1.25" },
        ] as const);
        const u = rng.int(2, 6);
        let v = rng.int(2, 7);
        if (v === u) v = u + 1;
        const a = u * ratio.den;
        const a2 = u * ratio.num;
        const b = v * ratio.den;
        const ans = clean(v * ratio.num);
        return {
          prompt: `Two similar polygons have a pair of corresponding sides measuring {{${a} cm}} (shape {{A}}) and {{${a2} cm}} (shape {{B}}). A second side on shape {{A}} measures {{${b} cm}}. Calculate the corresponding side on shape {{B}} (in cm).`,
          answer: { type: "number", value: ans, display: `${ans} cm` },
          hint: `Scale factor from A to B is ${a2} ÷ ${a} = ${ratio.dec}. Multiply ${b} by ${ratio.dec}.`,
          solution: [
            `Scale factor {{k = ${a2} / ${a} = ${ratio.dec}}}.`,
            `Missing side {{= ${b} * ${ratio.dec} = ${ans} cm}}.`,
          ],
        };
      }

      // Tier 3: nested parallel-line similar triangles
      const m = rng.int(2, 5);
      const n = rng.int(2, 6);
      const u = rng.int(1, 3);
      const v = rng.int(2, 6);
      const ad = m * u;
      const db = n * u;
      const ab = ad + db;
      const de = m * v;
      const bc = (m + n) * v;
      if (rng.bool(0.5)) {
        return {
          prompt: `In triangle {{ABC}}, segment {{DE}} is parallel to {{BC}} with {{D}} on {{AB}} and {{E}} on {{AC}}. Given {{AD = ${ad} cm}}, {{DB = ${db} cm}}, and {{DE = ${de} cm}}, calculate {{BC}} (in cm).`,
          answer: { type: "number", value: bc, display: `${bc} cm` },
          hint: `Find full side AB = AD + DB = ${ab} cm first, then scale DE by AB ÷ AD.`,
          traps:
            db !== ab && Number.isInteger((de * db) / ad)
              ? [{ spec: { type: "number", value: (de * db) / ad }, feedback: `Use the FULL side AB = ${ad} + ${db} = ${ab} cm, not just DB = ${db} cm!` }]
              : undefined,
          solution: [
            `Full side {{AB = ${ad} + ${db} = ${ab} cm}}.`,
            `Triangles {{ADE}} and {{ABC}} are similar, so {{BC = ${de} * (${ab} / ${ad}) = ${bc} cm}}.`,
          ],
        };
      }
      return {
        prompt: `In triangle {{ABC}}, segment {{DE}} is parallel to {{BC}} with {{D}} on {{AB}} and {{E}} on {{AC}}. Given {{AD = ${ad} cm}}, {{DB = ${db} cm}}, and {{BC = ${bc} cm}}, calculate {{DE}} (in cm).`,
        answer: { type: "number", value: de, display: `${de} cm` },
        hint: `Full side AB = ${ab} cm, so DE = BC × (AD ÷ AB).`,
        solution: [
          `Full side {{AB = ${ad} + ${db} = ${ab} cm}}.`,
          `{{DE = ${bc} * (${ad} / ${ab}) = ${de} cm}}.`,
        ],
      };
    },
  },
];
