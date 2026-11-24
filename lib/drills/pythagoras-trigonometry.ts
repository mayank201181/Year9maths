import type { Drill } from "./types.ts";

function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    const t = x % y;
    x = y;
    y = t;
  }
  return x || 1;
}

const TRIPLES: ReadonlyArray<[number, number, number]> = [
  [3, 4, 5],
  [5, 12, 13],
  [8, 15, 17],
  [7, 24, 25],
  [9, 40, 41],
  [20, 21, 29],
];

const VERTEX_SETS: ReadonlyArray<[string, string, string]> = [
  ["A", "B", "C"],
  ["P", "Q", "R"],
  ["D", "E", "F"],
  ["X", "Y", "Z"],
  ["K", "L", "M"],
  ["R", "S", "T"],
];

export const drills: Drill[] = [
  {
    id: "pythagoras-trigonometry.label-sides",
    topicId: "pythagoras-trigonometry",
    title: "Labelling H, O & A in Right-Angled Triangles",
    level: 1,
    guideRef: "right-triangle-language",
    generate(rng, tier) {
      if (tier === 3 && rng.bool(0.3)) {
        const theta = rng.int(12, 78);
        const other = 90 - theta;
        return {
          prompt: `One acute angle in a right-angled triangle measures {{${theta}°}}. Find the size of the other acute angle (in degrees).`,
          answer: { type: "number", value: other, display: `${other}°` },
          hint: "The two acute angles in any right-angled triangle sum to 90°.",
          traps: [{ spec: { type: "number", value: 180 - theta }, feedback: "Don't forget the 90° right angle! Subtract from 90°, not 180°." }],
          solution: [`{{90° - ${theta}° = ${other}°}}.`],
        };
      }

      const [v1, vRight, v2] = rng.pick(VERTEX_SETS);
      const [ta, tb, tc] = rng.pick(tier === 1 ? TRIPLES.slice(0, 4) : TRIPLES);
      const scale = tier === 1 ? rng.int(1, 3) : rng.int(1, 5);
      const swapLegs = rng.bool(0.5);
      const s1 = (swapLegs ? tb : ta) * scale; // side v1-vRight
      const s2 = (swapLegs ? ta : tb) * scale; // side vRight-v2
      const hyp = tc * scale; // side v1-v2
      const markedAtFirst = rng.bool(0.5);
      const angleV = markedAtFirst ? v1 : v2;
      const opp = markedAtFirst ? s2 : s1;
      const adj = markedAtFirst ? s1 : s2;
      const ask = rng.pick(["hypotenuse", "opposite", "adjacent"] as const);

      const ans = ask === "hypotenuse" ? hyp : ask === "opposite" ? opp : adj;
      const trapVal = ask === "hypotenuse" ? Math.max(s1, s2) : ask === "opposite" ? adj : opp;
      const sideDesc = `{{${v1}${vRight} = ${s1} cm}}, {{${vRight}${v2} = ${s2} cm}}, and {{${v1}${v2} = ${hyp} cm}}`;
      const prompt =
        ask === "hypotenuse"
          ? `Right-angled triangle {{${v1}${vRight}${v2}}} has {{∠${vRight} = 90°}}, ${sideDesc}. What is the length of the **hypotenuse** (in cm)?`
          : `Right-angled triangle {{${v1}${vRight}${v2}}} has {{∠${vRight} = 90°}}, ${sideDesc}. Relative to angle {{∠${angleV}}}, what is the length of the **${ask}** side (in cm)?`;

      return {
        prompt,
        answer: { type: "number", value: ans, display: `${ans} cm` },
        hint:
          ask === "hypotenuse"
            ? `The hypotenuse sits opposite the 90° angle at ${vRight} and is always the longest side.`
            : ask === "opposite"
              ? `Look directly across the triangle from vertex ${angleV} (the side that does NOT touch ${angleV}).`
              : `Find the shorter side that connects vertex ${angleV} to the 90° angle at ${vRight}.`,
        traps:
          trapVal !== ans
            ? [
                {
                  spec: { type: "number", value: trapVal },
                  feedback:
                    ask === "hypotenuse"
                      ? "The hypotenuse is ALWAYS the longest side, opposite the 90° angle."
                      : `You picked the ${ask === "opposite" ? "adjacent" : "opposite"} side! Re-check from vertex ${angleV}.`,
                },
              ]
            : undefined,
        solution: [
          `Opposite {{∠${vRight} = 90°}} is hypotenuse {{${v1}${v2} = ${hyp} cm}}.`,
          `Relative to {{∠${angleV}}}: Opposite {{= ${opp} cm}}, Adjacent {{= ${adj} cm}}.`,
          `Therefore the ${ask} side is {{${ans} cm}}.`,
        ],
      };
    },
  },
  {
    id: "pythagoras-trigonometry.pythagoras-find-side",
    topicId: "pythagoras-trigonometry",
    title: "Pythagoras' Theorem (Hypotenuse, Legs & 2D Problems)",
    level: 1,
    guideRef: "pythagoras-theorem",
    generate(rng, tier) {
      if (tier === 1) {
        const [ta, tb, tc] = rng.pick(TRIPLES);
        const k = rng.int(1, 5);
        const a = ta * k;
        const b = tb * k;
        const c = tc * k;
        if (rng.bool(0.5)) {
          const legs = rng.bool(0.5) ? [a, b] : [b, a];
          return {
            prompt: `A right-angled triangle has perpendicular sides {{${legs[0]} cm}} and {{${legs[1]} cm}}. Find the exact length of the hypotenuse (in cm).`,
            answer: { type: "number", value: c, display: `${c} cm` },
            hint: `Finding the hypotenuse → add squares: ${legs[0]}² + ${legs[1]}², then square-root.`,
            traps: [{ spec: { type: "number", value: c * c }, feedback: `Don't forget to take the square root of ${c * c}!` }],
            solution: [`{{c = sqrt(${legs[0]}^2 + ${legs[1]}^2) = sqrt(${c * c}) = ${c} cm}}.`],
          };
        }
        const knownLeg = rng.bool(0.5) ? a : b;
        const missingLeg = knownLeg === a ? b : a;
        return {
          prompt: `A right-angled triangle has hypotenuse {{${c} cm}} and one shorter side {{${knownLeg} cm}}. Find the exact length of the other shorter side (in cm).`,
          answer: { type: "number", value: missingLeg, display: `${missingLeg} cm` },
          hint: `Finding a shorter leg → subtract squares: ${c}² − ${knownLeg}², then square-root.`,
          traps: [{ spec: { type: "number", value: missingLeg * missingLeg }, feedback: `Remember to square-root ${missingLeg * missingLeg}!` }],
          solution: [`{{a = sqrt(${c}^2 - ${knownLeg}^2) = sqrt(${missingLeg * missingLeg}) = ${missingLeg} cm}}.`],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          const a = rng.int(4, 16);
          const b = rng.int(4, 16);
          const raw = Math.hypot(a, b);
          const ans = round1(raw);
          const subTrap = a !== b ? round1(Math.sqrt(Math.abs(a * a - b * b))) : 0;
          return {
            prompt: `A right-angled triangle has perpendicular legs {{${a} cm}} and {{${b} cm}}. Calculate the hypotenuse to {{1}} decimal place (in cm).`,
            answer: { type: "number", value: ans, tolerance: 0.1, display: `${ans} cm` },
            hint: `Add the squares ${a}² + ${b}² = ${a * a + b * b}, then take the square root.`,
            traps:
              subTrap > 0 && Math.abs(subTrap - ans) > 0.3
                ? [{ spec: { type: "number", value: subTrap, tolerance: 0.1 }, feedback: "Finding the hypotenuse means ADDING squares, not subtracting!" }]
                : undefined,
            solution: [`{{c = sqrt(${a}^2 + ${b}^2) = sqrt(${a * a + b * b}) = ${ans} cm}} (to {{1}} d.p.).`],
          };
        }
        const b = rng.int(4, 14);
        const c = b + rng.int(2, 10);
        const diff = c * c - b * b;
        const ans = round1(Math.sqrt(diff));
        const addTrap = round1(Math.hypot(c, b));
        return {
          prompt: `A right-angled triangle has hypotenuse {{${c} cm}} and one shorter side {{${b} cm}}. Calculate the other shorter side to {{1}} decimal place (in cm).`,
          answer: { type: "number", value: ans, tolerance: 0.1, display: `${ans} cm` },
          hint: `Subtract squares: ${c}² − ${b}² = ${diff}, then take the square root.`,
          traps:
            Math.abs(addTrap - ans) > 0.3
              ? [{ spec: { type: "number", value: addTrap, tolerance: 0.1 }, feedback: "Finding a shorter side means SUBTRACTING squares, not adding!" }]
              : undefined,
          solution: [`{{a = sqrt(${c}^2 - ${b}^2) = sqrt(${diff}) = ${ans} cm}} (to {{1}} d.p.).`],
        };
      }

      // Tier 3: coordinate distance, isosceles height, or rectangle diagonal
      const mode = rng.pick(["coords", "isos", "rect"] as const);
      if (mode === "coords") {
        const x1 = rng.int(-6, 6);
        const y1 = rng.int(-6, 6);
        const dx = rng.int(3, 12);
        const dy = rng.int(3, 12);
        const x2 = x1 + (rng.bool(0.5) ? dx : -dx);
        const y2 = y1 + (rng.bool(0.5) ? dy : -dy);
        const sumSq = dx * dx + dy * dy;
        const ans = round1(Math.sqrt(sumSq));
        return {
          prompt: `Find the straight-line distance between points {{A(${x1}, ${y1})}} and {{B(${x2}, ${y2})}}, giving your answer to {{1}} decimal place.`,
          answer: { type: "number", value: ans, tolerance: 0.1, display: `${ans}` },
          hint: `Horizontal step = ${dx}, vertical step = ${dy}. Compute √(${dx}² + ${dy}²).`,
          solution: [`{{dx = ${dx}}}, {{dy = ${dy}}}, so {{d = sqrt(${dx}^2 + ${dy}^2) = sqrt(${sumSq}) = ${ans}}} (to {{1}} d.p.).`],
        };
      }
      if (mode === "isos") {
        const halfBase = rng.int(3, 10);
        const base = 2 * halfBase;
        const slant = halfBase + rng.int(2, 9);
        const diff = slant * slant - halfBase * halfBase;
        const ans = round1(Math.sqrt(diff));
        return {
          prompt: `An isosceles triangle has two equal sides of {{${slant} cm}} and a base of {{${base} cm}}. Find its perpendicular height to {{1}} decimal place (in cm).`,
          answer: { type: "number", value: ans, tolerance: 0.1, display: `${ans} cm` },
          hint: `First halve the base (${base} ÷ 2 = ${halfBase} cm), then compute √(${slant}² − ${halfBase}²).`,
          solution: [
            `Half-base {{= ${base} / 2 = ${halfBase} cm}}.`,
            `{{h = sqrt(${slant}^2 - ${halfBase}^2) = sqrt(${diff}) = ${ans} cm}} (to {{1}} d.p.).`,
          ],
        };
      }
      const w = rng.int(5, 16);
      const l = w + rng.int(2, 12);
      const sumSq = w * w + l * l;
      const ans = round1(Math.sqrt(sumSq));
      return {
        prompt: `A rectangle has length {{${l} cm}} and width {{${w} cm}}. Calculate the length of its diagonal to {{1}} decimal place (in cm).`,
        answer: { type: "number", value: ans, tolerance: 0.1, display: `${ans} cm` },
        hint: `Compute √(${l}² + ${w}²).`,
        solution: [`{{d = sqrt(${l}^2 + ${w}^2) = sqrt(${sumSq}) = ${ans} cm}} (to {{1}} d.p.).`],
      };
    },
  },
  {
    id: "pythagoras-trigonometry.trig-ratio-fraction",
    topicId: "pythagoras-trigonometry",
    title: "Exact SOHCAHTOA Ratios as Simplified Fractions",
    level: 2,
    guideRef: "similar-right-triangles-ratios",
    generate(rng, tier) {
      const pool = tier === 1 ? TRIPLES.slice(0, 3) : tier === 2 ? TRIPLES.slice(0, 5) : TRIPLES;
      const [ta, tb, tc] = rng.pick(pool);
      const k = tier === 1 ? rng.int(1, 3) : tier === 2 ? rng.int(2, 5) : rng.int(2, 7);
      const swap = rng.bool(0.5);
      const opp = (swap ? tb : ta) * k;
      const adj = (swap ? ta : tb) * k;
      const hyp = tc * k;
      const fn = rng.pick(["sin", "cos", "tan"] as const);
      const rawN = fn === "sin" ? opp : fn === "cos" ? adj : opp;
      const rawD = fn === "tan" ? adj : hyp;
      const g = gcd(rawN, rawD);
      const n = rawN / g;
      const d = rawD / g;

      const trapN = fn === "sin" ? adj : fn === "cos" ? opp : adj;
      const trapD = fn === "tan" ? opp : hyp;
      const tg = gcd(trapN, trapD);

      const orderedSides = [opp, adj, hyp].sort((x, y) => x - y);
      return {
        prompt: `A right-angled triangle has side lengths {{${orderedSides[0]} cm}}, {{${orderedSides[1]} cm}}, and {{${orderedSides[2]} cm}}. Acute angle {{theta}} is opposite the {{${opp} cm}} side. Write {{${fn}(theta)}} as a fraction in simplest form.`,
        answer: { type: "fraction", n, d, simplest: true, display: `{{${n}/${d}}}` },
        hint:
          fn === "sin"
            ? `Use SOH: sin θ = Opposite (${opp}) ÷ Hypotenuse (${hyp}), then simplify.`
            : fn === "cos"
              ? `Use CAH: cos θ = Adjacent (${adj}) ÷ Hypotenuse (${hyp}), then simplify.`
              : `Use TOA: tan θ = Opposite (${opp}) ÷ Adjacent (${adj}), then simplify.`,
        traps:
          trapN * d !== n * trapD
            ? [
                {
                  spec: { type: "fraction", n: trapN / tg, d: trapD / tg },
                  feedback:
                    fn === "sin"
                      ? "That is cos θ (A/H)! For sin θ, divide Opposite by Hypotenuse."
                      : fn === "cos"
                        ? "That is sin θ (O/H)! For cos θ, divide Adjacent by Hypotenuse."
                        : "That fraction is upside down (A/O)! Remember TOA: tan θ = O ÷ A.",
                },
              ]
            : undefined,
        solution: [
          `Label relative to {{theta}}: {{H = ${hyp} cm}}, {{O = ${opp} cm}}, {{A = ${adj} cm}}.`,
          `{{${fn}(theta) = ${rawN}/${rawD}${g > 1 ? ` = ${n}/${d}` : ""}}}.`,
        ],
      };
    },
  },
  {
    id: "pythagoras-trigonometry.trig-missing-length",
    topicId: "pythagoras-trigonometry",
    title: "SOHCAHTOA: Missing Lengths (Tier 3 Extension: Angles)",
    level: 3,
    guideRef: "trig-finding-lengths",
    generate(rng, tier) {
      const angles = [22, 24, 26, 28, 31, 33, 35, 37, 39, 41, 43, 47, 49, 51, 53, 55, 57, 59, 62, 65, 68];

      // Tier 3 extension: inverse angle problems (45% chance)
      if (tier === 3 && rng.bool(0.45)) {
        const fn = rng.pick(["sin", "cos", "tan"] as const);
        if (fn === "tan") {
          const o = rng.int(5, 20);
          let a = rng.int(5, 20);
          if (a === o) a = o + 2;
          const deg = round1((Math.atan(o / a) * 180) / Math.PI);
          const flipDeg = round1((Math.atan(a / o) * 180) / Math.PI);
          return {
            prompt: `*(Extension)* In a right-angled triangle, the side opposite acute angle {{theta}} is {{${o} cm}} and the adjacent side is {{${a} cm}}. Find {{theta}} to {{1}} decimal place (in degrees).`,
            answer: { type: "number", value: deg, tolerance: 0.1, display: `${deg}°` },
            hint: `Use TOA: tan θ = ${o} ÷ ${a}, then press SHIFT tan (tan⁻¹) in DEG mode.`,
            traps:
              Math.abs(flipDeg - deg) > 0.3
                ? [{ spec: { type: "number", value: flipDeg, tolerance: 0.1 }, feedback: `Check your fraction order: tan θ = O ÷ A = ${o} ÷ ${a}, not ${a} ÷ ${o}.` }]
                : undefined,
            solution: [`{{tan(theta) = ${o} / ${a} => theta = tan^(-1)(${o} / ${a}) = ${deg}°}} (to {{1}} d.p.).`],
          };
        }
        const leg = rng.int(5, 16);
        const hyp = leg + rng.int(3, 12);
        const deg = round1(((fn === "sin" ? Math.asin(leg / hyp) : Math.acos(leg / hyp)) * 180) / Math.PI);
        const otherDeg = round1(90 - deg);
        const sideWord = fn === "sin" ? "opposite" : "adjacent to";
        return {
          prompt: `*(Extension)* In a right-angled triangle, the side ${sideWord} acute angle {{theta}} is {{${leg} cm}} and the hypotenuse is {{${hyp} cm}}. Find {{theta}} to {{1}} decimal place (in degrees).`,
          answer: { type: "number", value: deg, tolerance: 0.1, display: `${deg}°` },
          hint: `Use ${fn === "sin" ? "SOH (sin⁻¹)" : "CAH (cos⁻¹)"} on ${leg} ÷ ${hyp} in DEG mode.`,
          traps:
            Math.abs(otherDeg - deg) > 0.3
              ? [{ spec: { type: "number", value: otherDeg, tolerance: 0.1 }, feedback: `That's the other acute angle! Use ${fn}⁻¹(${leg}/${hyp}).` }]
              : undefined,
          solution: [`{{${fn}(theta) = ${leg} / ${hyp} => theta = ${fn}^(-1)(${leg} / ${hyp}) = ${deg}°}} (to {{1}} d.p.).`],
        };
      }

      const theta = rng.pick(angles);
      const rad = (theta * Math.PI) / 180;
      const fn = rng.pick(["sin", "cos", "tan"] as const);
      const val = fn === "sin" ? Math.sin(rad) : fn === "cos" ? Math.cos(rad) : Math.tan(rad);
      const known = rng.int(7, 24);
      const unknownOnBottom = tier === 1 ? false : tier === 2 ? rng.bool(0.5) : true;

      if (!unknownOnBottom) {
        const ans = round1(known * val);
        const divTrap = round1(known / val);
        const knownLabel = fn === "tan" ? `adjacent to {{${theta}°}}` : "hypotenuse";
        const targetLabel = fn === "cos" ? "adjacent" : "opposite";
        return {
          prompt: `In a right-angled triangle with ${knownLabel} equal to {{${known} cm}} and acute angle {{${theta}°}}, calculate the **${targetLabel}** side to {{1}} decimal place (in cm).`,
          answer: { type: "number", value: ans, tolerance: 0.1, display: `${ans} cm` },
          hint: `Write ${fn}(${theta}°) = x ÷ ${known}. Since x is on top, multiply: ${known} × ${fn}(${theta}°).`,
          traps:
            Math.abs(divTrap - ans) > 0.3
              ? [{ spec: { type: "number", value: divTrap, tolerance: 0.1 }, feedback: `Unknown x is in the numerator, so MULTIPLY by ${fn}(${theta}°) rather than dividing.` }]
              : undefined,
          solution: [
            `{{${fn}(${theta}°) = x / ${known}}}.`,
            `{{x = ${known} * ${fn}(${theta}°) = ${ans} cm}} (to {{1}} d.p.).`,
          ],
        };
      }

      const ans = round1(known / val);
      const mulTrap = round1(known * val);
      const knownLabel = fn === "cos" ? `adjacent to {{${theta}°}}` : `opposite {{${theta}°}}`;
      const targetLabel = fn === "tan" ? "adjacent" : "hypotenuse";
      return {
        prompt: `In a right-angled triangle, the side ${knownLabel} is {{${known} cm}}. Calculate the **${targetLabel}** to {{1}} decimal place (in cm).`,
        answer: { type: "number", value: ans, tolerance: 0.1, display: `${ans} cm` },
        hint: `Write ${fn}(${theta}°) = ${known} ÷ x. Since x is on the bottom, swap and divide: ${known} ÷ ${fn}(${theta}°).`,
        traps:
          Math.abs(mulTrap - ans) > 0.3
            ? [{ spec: { type: "number", value: mulTrap, tolerance: 0.1 }, feedback: `Unknown x is in the denominator of ${fn}(${theta}°) = ${known}/x, so DIVIDE: ${known} ÷ ${fn}(${theta}°).` }]
            : undefined,
        solution: [
          `{{${fn}(${theta}°) = ${known} / x}}.`,
          `{{x = ${known} / ${fn}(${theta}°) = ${ans} cm}} (to {{1}} d.p.).`,
        ],
      };
    },
  },
];
