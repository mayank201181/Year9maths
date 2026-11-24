import type { Drill } from "./types.ts";

function clean(n: number): number {
  return parseFloat(n.toPrecision(10));
}

function fmt(n: number): string {
  return String(clean(n));
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

export const drills: Drill[] = [
  // =========================================================================
  // DRILL 1 (Level 1): Complement, Relative Frequency & Expected Counts
  // =========================================================================
  {
    id: "probability-statistics.expected-rel-freq",
    topicId: "probability-statistics",
    title: "Probabilities, relative frequency & expected counts",
    level: 1,
    guideRef: "theoretical-experimental-probability",
    generate(rng, tier) {
      if (tier === 1) {
        const mode = rng.pick(["complement", "expected"] as const);
        if (mode === "complement") {
          const p1 = rng.int(12, 34);
          const p2 = rng.int(12, 32);
          const p3 = rng.int(10, 28);
          const sum3 = p1 + p2 + p3;
          const p4 = 100 - sum3;
          const d1 = (p1 / 100).toFixed(2);
          const d2 = (p2 / 100).toFixed(2);
          const d3 = (p3 / 100).toFixed(2);
          const ans = clean(p4 / 100);
          return {
            prompt: `A biased 4-section spinner has {{P(A) = ${d1}}}, {{P(B) = ${d2}}}, and {{P(C) = ${d3}}}. Find {{P(D)}} as a decimal.`,
            answer: { type: "number", value: ans, allowFraction: false, display: fmt(ans) },
            traps: [
              {
                spec: { type: "number", value: clean(sum3 / 100) },
                feedback: `{{${fmt(sum3 / 100)}}} is {{P(A) + P(B) + P(C)}} — subtract it from {{1}}!`,
              },
            ],
            hint: "All four probabilities must add to {{1}}.",
            solution: [
              `{{${d1} + ${d2} + ${d3} = ${fmt(sum3 / 100)}}}.`,
              `{{P(D) = 1 - ${fmt(sum3 / 100)} = ${fmt(ans)}}}.`,
            ],
          };
        }
        const pPct = rng.int(12, 84);
        const p = clean(pPct / 100);
        const trials = rng.pick([100, 200, 300, 400, 500] as const);
        const exp = clean((pPct * trials) / 100);
        return {
          prompt: `A biased spinner has {{P(Red) = ${fmt(p)}}}. How many times would you expect it to land on Red in {{${trials}}} spins?`,
          answer: { type: "number", value: exp, display: fmt(exp) },
          hint: "Expected frequency = trials × probability ({{n * p}}).",
          solution: [`{{${trials} * ${fmt(p)} = ${fmt(exp)}}}.`],
        };
      }

      if (tier === 2) {
        const trials = rng.pick([100, 200, 250, 400, 500] as const);
        const step = trials === 250 ? 5 : trials / 100;
        const pct = rng.int(12, 76);
        const k = trials === 250 ? Math.round((pct * 250) / 100 / 5) * 5 : pct * step;
        const rel = clean(k / trials);
        const future = rng.pick([200, 400, 500, 600, 800, 1000] as const);
        const exp = clean(rel * future);
        return {
          prompt: `A weighted die lands on {{6}} exactly {{${k}}} times in {{${trials}}} rolls. Using this relative frequency, how many {{6}}s would you expect in {{${future}}} rolls?`,
          answer: { type: "number", value: exp, display: fmt(exp) },
          traps: [
            {
              spec: { type: "number", value: rel },
              feedback: `{{${fmt(rel)}}} is the relative frequency — multiply by {{${future}}} to get the expected count!`,
            },
          ],
          hint: `First find relative frequency = {{${k} / ${trials} = ${fmt(rel)}}}, then multiply by {{${future}}}.`,
          solution: [
            `Relative frequency = {{${k} / ${trials} = ${fmt(rel)}}}.`,
            `Expected {{6}}s in {{${future}}} rolls = {{${future} * ${fmt(rel)} = ${fmt(exp)}}}.`,
          ],
        };
      }

      // Tier 3: combine two trial sets OR algebra p + m*p + c = 1
      const mode = rng.pick(["combine", "algebra"] as const);
      if (mode === "combine") {
        const n1 = rng.pick([100, 150, 200, 250] as const);
        const n2 = 500 - n1;
        const totalSucc = rng.int(45, 220) * 2; // out of 500 => clean 3 d.p. decimal (even/500 = int/250)
        // Ensure s1 <= n1 and s2 <= n2
        const maxS1 = Math.min(n1 - 5, totalSucc - 10);
        const minS1 = Math.max(10, totalSucc - n2 + 5);
        const s1 = rng.int(minS1, maxS1);
        const s2 = totalSucc - s1;
        const ans = clean(totalSucc / 500);
        return {
          prompt: `Alex spins a biased wheel {{${n1}}} times and wins {{${s1}}} times. Sam spins the same wheel {{${n2}}} times and wins {{${s2}}} times. Combining **all** trials, find the best estimate of {{P(Win)}} as a decimal.`,
          answer: { type: "number", value: ans, allowFraction: false, display: fmt(ans) },
          hint: "Add total wins and divide by total spins ({{500}}).",
          solution: [
            `Total wins = {{${s1} + ${s2} = ${totalSucc}}}; total spins = {{${n1} + ${n2} = 500}}.`,
            `Best estimate = {{${totalSucc} / 500 = ${fmt(ans)}}}.`,
          ],
        };
      }
      const mult = rng.pick([2, 3, 4] as const);
      const xPct = rng.int(6, Math.floor(80 / (mult + 1)));
      const greenPct = 100 - (mult + 1) * xPct;
      const gDec = (greenPct / 100).toFixed(2);
      const ans = clean((mult * xPct) / 100);
      return {
        prompt: `A bag has only red, blue, and green tokens. {{P(red) = x}}, {{P(blue) = ${mult}x}}, and {{P(green) = ${gDec}}}. Find {{P(blue)}} as a decimal.`,
        answer: { type: "number", value: ans, allowFraction: false, display: fmt(ans) },
        traps: [
          {
            spec: { type: "number", value: clean(xPct / 100) },
            feedback: `{{${fmt(xPct / 100)}}} is {{x = P(red)}} — multiply by {{${mult}}} to find {{P(blue)}}!`,
          },
        ],
        hint: `Set {{x + ${mult}x + ${gDec} = 1}}, solve for {{x}}, then find {{${mult}x}}.`,
        solution: [
          `{{${mult + 1}x = 1 - ${gDec} = ${fmt(((mult + 1) * xPct) / 100)}}} → {{x = ${fmt(xPct / 100)}}}.`,
          `{{P(blue) = ${mult} * ${fmt(xPct / 100)} = ${fmt(ans)}}}.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 2 (Level 2): Venn Diagrams & Two-Way Tables
  // =========================================================================
  {
    id: "probability-statistics.venn-sample-space",
    topicId: "probability-statistics",
    title: "Venn diagrams & two-way tables",
    level: 2,
    guideRef: "sample-space-tables-venn",
    generate(rng, tier) {
      if (tier === 1) {
        const onlyA = rng.int(7, 22);
        const both = rng.int(4, 14);
        const onlyB = rng.int(6, 20);
        const neither = rng.int(3, 15);
        const total = onlyA + both + onlyB + neither;
        const aTot = onlyA + both;
        const bTot = onlyB + both;
        const askNeither = rng.bool();
        if (askNeither) {
          return {
            prompt: `Out of {{${total}}} students, {{${aTot}}} play Football, {{${bTot}}} play Tennis, and {{${both}}} play **both**. How many students play **neither**?`,
            answer: { type: "number", value: neither, display: `${neither}` },
            hint: `Subtract the overlap ({{${both}}}) from each sport first, then subtract the three circle regions from {{${total}}}.`,
            solution: [
              `Football only = {{${aTot} - ${both} = ${onlyA}}}; Tennis only = {{${bTot} - ${both} = ${onlyB}}}.`,
              `Total in circles = {{${onlyA} + ${both} + ${onlyB} = ${onlyA + both + onlyB}}}, so neither = {{${total} - ${onlyA + both + onlyB} = ${neither}}}.`,
            ],
          };
        }
        return {
          prompt: `Out of {{${total}}} students, {{${aTot}}} study Music, {{${bTot}}} study Art, and {{${both}}} study **both**. How many students study **Music only**?`,
          answer: { type: "number", value: onlyA, display: `${onlyA}` },
          hint: "Subtract the overlap (both) from the total for Music.",
          solution: [`Music only = {{${aTot} - ${both} = ${onlyA}}}.`],
        };
      }

      if (tier === 2) {
        const mode = rng.pick(["find-both", "two-way"] as const);
        if (mode === "find-both") {
          const onlyA = rng.int(8, 22);
          const both = rng.int(5, 16);
          const onlyB = rng.int(8, 22);
          const neither = rng.int(4, 14);
          const total = onlyA + both + onlyB + neither;
          const aTot = onlyA + both;
          const bTot = onlyB + both;
          return {
            prompt: `In a club of {{${total}}} members, {{${aTot}}} use the Gym, {{${bTot}}} use the Pool, and {{${neither}}} use **neither**. How many members use **both**?`,
            answer: { type: "number", value: both, display: `${both}` },
            hint: `First find how many use at least one facility ({{${total} - ${neither}}}), then subtract that from {{${aTot} + ${bTot}}}.`,
            solution: [
              `Using at least one = {{${total} - ${neither} = ${total - neither}}}.`,
              `Overlap (both) = {{(${aTot} + ${bTot}) - ${total - neither} = ${both}}}.`,
            ],
          };
        }
        const bBus = rng.int(10, 26);
        const bWalk = rng.int(10, 26);
        const gBus = rng.int(10, 26);
        const gWalk = rng.int(10, 26);
        const bTot = bBus + bWalk;
        const gTot = gBus + gWalk;
        const grand = bTot + gTot;
        const walkTot = bWalk + gWalk;
        return {
          prompt: `A two-way table surveys {{${grand}}} pupils (Bus or Walk). There are {{${bTot}}} boys in total, of whom {{${bWalk}}} walk. Exactly {{${gBus}}} girls take the bus. How many pupils **walk in total**?`,
          answer: { type: "number", value: walkTot, display: `${walkTot}` },
          hint: `Total girls = {{${grand} - ${bTot} = ${gTot}}}; subtract girls taking the bus ({{${gBus}}}) to find girls who walk, then add boys who walk.`,
          solution: [
            `Total girls = {{${grand} - ${bTot} = ${gTot}}}.`,
            `Girls who walk = {{${gTot} - ${gBus} = ${gWalk}}}.`,
            `Total walkers = {{${bWalk} + ${gWalk} = ${walkTot}}}.`,
          ],
        };
      }

      // Tier 3: Simplified probability from Venn (P(A U B) or P(only one))
      const onlyA = rng.int(6, 18);
      const both = rng.int(4, 12);
      const onlyB = rng.int(6, 18);
      const neither = rng.int(3, 12);
      const total = onlyA + both + onlyB + neither;
      const askUnion = rng.bool();
      const fav = askUnion ? onlyA + both + onlyB : onlyA + onlyB;
      const g = gcd(fav, total);
      const n = fav / g;
      const d = total / g;
      return {
        prompt: `In a Venn diagram of {{${total}}} pupils: {{A}} only has {{${onlyA}}}, {{A ∩ B}} has {{${both}}}, {{B}} only has {{${onlyB}}}, and outside has {{${neither}}}. Find {{P(${askUnion ? "A ∪ B" : "\"exactly one of A or B\""})}} as a simplified fraction.`,
        answer: { type: "fraction", n, d, simplest: true, display: `{{${n}/${d}}}` },
        hint: askUnion
          ? `Add all three regions inside the circles ({{${onlyA} + ${both} + ${onlyB}}}) and divide by {{${total}}}.`
          : `Add ONLY the two non-overlapping parts ({{${onlyA} + ${onlyB}}}) and divide by {{${total}}}.`,
        solution: [
          `Favourable count = {{${fav}}} out of {{${total}}}.`,
          `Simplify {{${fav}/${total} = ${n}/${d}}}.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 3 (Level 2): Grouped Mean & Raw Data Quartiles / IQR
  // =========================================================================
  {
    id: "probability-statistics.grouped-mean-iqr",
    topicId: "probability-statistics",
    title: "Grouped mean estimates & interquartile range",
    level: 2,
    guideRef: "grouped-data-stem-leaf",
    generate(rng, tier) {
      if (tier === 1) {
        // 7 strictly ordered integers -> Med=4th, LQ=2nd, UQ=6th
        const start = rng.int(5, 25);
        const vals = [start];
        for (let i = 0; i < 6; i++) vals.push(vals[vals.length - 1] + rng.int(2, 7));
        const lq = vals[1];
        const uq = vals[5];
        const iqr = uq - lq;
        return {
          prompt: `Find the **interquartile range (IQR)** of the ordered data set: {{${vals.join(", ")}}}.`,
          answer: { type: "number", value: iqr, display: `${iqr}` },
          traps: [
            {
              spec: { type: "number", value: vals[6] - vals[0] },
              feedback: `{{${vals[6] - vals[0]}}} is the **range** (Max − Min) — IQR is UQ − LQ!`,
            },
          ],
          hint: `With 7 values, LQ is the 2nd value ({{${lq}}}) and UQ is the 6th value ({{${uq}}}).`,
          solution: [
            `Lower half ({{${vals.slice(0, 3).join(", ")}}}) → {{LQ = ${lq}}}; upper half ({{${vals.slice(4).join(", ")}}}) → {{UQ = ${uq}}}.`,
            `{{\"IQR\" = ${uq} - ${lq} = ${iqr}}}.`,
          ],
        };
      }

      if (tier === 2) {
        // 4 equal-width classes 0-10, 10-20, 20-30, 30-40 with total frequency 20 or 25 (clean decimal!)
        const totalF = rng.pick([20, 25] as const);
        const f1 = rng.int(2, 7);
        const f2 = rng.int(3, 8);
        const f3 = rng.int(3, 8);
        const f4 = totalF - f1 - f2 - f3;
        const sumFx = f1 * 5 + f2 * 15 + f3 * 25 + f4 * 35;
        const mean = clean(sumFx / totalF);
        return {
          prompt: `Calculate the **estimated mean** from this grouped table: {{0 <= x < 10}} (f = ${f1}), {{10 <= x < 20}} (f = ${f2}), {{20 <= x < 30}} (f = ${f3}), {{30 <= x < 40}} (f = ${f4}).`,
          answer: { type: "number", value: mean, display: fmt(mean) },
          hint: `Use midpoints {{5, 15, 25, 35}}, sum {{fx}}, and divide by total frequency {{${totalF}}}.`,
          solution: [
            `{{sum fx = ${f1}(5) + ${f2}(15) + ${f3}(25) + ${f4}(35) = ${sumFx}}}.`,
            `Estimated mean = {{${sumFx} / ${totalF} = ${fmt(mean)}}}.`,
          ],
        };
      }

      // Tier 3: Unequal class widths (0-10, 10-20, 20-40) -> midpoints 5, 15, 30; total f = 20 or 25
      const totalF = rng.pick([20, 25] as const);
      const f1 = rng.int(3, 8);
      const f2 = rng.int(4, 10);
      const f3 = totalF - f1 - f2;
      const sumFx = f1 * 5 + f2 * 15 + f3 * 30;
      const mean = clean(sumFx / totalF);
      return {
        prompt: `A grouped table has **unequal** class widths: {{0 <= t < 10}} (f = ${f1}), {{10 <= t < 20}} (f = ${f2}), and {{20 <= t < 40}} (f = ${f3}). Calculate the **estimated mean**.`,
        answer: { type: "number", value: mean, display: fmt(mean) },
        hint: `Careful with the third midpoint: halfway between {{20}} and {{40}} is {{30}}! Divide {{sum fx}} by {{${totalF}}}.`,
        solution: [
          `Midpoints are {{5, 15, 30}}, giving {{sum fx = ${f1 * 5} + ${f2 * 15} + ${f3 * 30} = ${sumFx}}}.`,
          `Estimated mean = {{${sumFx} / ${totalF} = ${fmt(mean)}}}.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 4 (Level 3): Cumulative Frequency & Box Plot Calculations
  // =========================================================================
  {
    id: "probability-statistics.box-plot-cf",
    topicId: "probability-statistics",
    title: "Cumulative frequency & box plot statistics",
    level: 3,
    guideRef: "cumulative-frequency-box-plots",
    generate(rng, tier) {
      if (tier === 1) {
        const min = rng.int(5, 25);
        const lq = min + rng.int(8, 18);
        const med = lq + rng.int(6, 16);
        const uq = med + rng.int(6, 18);
        const max = uq + rng.int(8, 22);
        const askIqr = rng.bool();
        if (askIqr) {
          const iqr = uq - lq;
          return {
            prompt: `A box plot has Min = {{${min}}}, LQ = {{${lq}}}, Median = {{${med}}}, UQ = {{${uq}}}, and Max = {{${max}}}. Find its **interquartile range (IQR)**.`,
            answer: { type: "number", value: iqr, display: `${iqr}` },
            hint: "{{\"IQR\" = \"UQ\" - \"LQ\"}}.",
            solution: [`{{\"IQR\" = ${uq} - ${lq} = ${iqr}}}.`],
          };
        }
        const range = max - min;
        return {
          prompt: `A box plot has Min = {{${min}}}, LQ = {{${lq}}}, Median = {{${med}}}, UQ = {{${uq}}}, and Max = {{${max}}}. Find its **range**.`,
          answer: { type: "number", value: range, display: `${range}` },
          hint: "{{\"Range\" = \"Max\" - \"Min\"}}.",
          solution: [`{{\"Range\" = ${max} - ${min} = ${range}}}.`],
        };
      }

      if (tier === 2) {
        const mode = rng.pick(["more-than", "between"] as const);
        const n = rng.pick([60, 80, 100, 120, 160, 200] as const);
        if (mode === "more-than") {
          const mark = rng.int(40, 75);
          const cf = rng.int(Math.round(n * 0.55), Math.round(n * 0.85));
          const ans = n - cf;
          return {
            prompt: `On a cumulative frequency curve for {{${n}}} students, the cumulative frequency at {{${mark}}} marks is {{${cf}}}. Estimate how many students scored **more than** {{${mark}}} marks.`,
            answer: { type: "number", value: ans, display: `${ans}` },
            traps: [
              {
                spec: { type: "number", value: cf },
                feedback: `{{${cf}}} scored {{${mark}}} or **less** — subtract from {{${n}}} to find how many scored **more**!`,
              },
            ],
            hint: `Subtract {{${cf}}} from the total frequency {{${n}}}.`,
            solution: [`Students scoring more than {{${mark}}} = {{${n} - ${cf} = ${ans}}}.`],
          };
        }
        const m1 = rng.int(20, 45);
        const m2 = m1 + rng.int(15, 30);
        const cf1 = rng.int(Math.round(n * 0.15), Math.round(n * 0.45));
        const cf2 = rng.int(Math.round(n * 0.55), Math.round(n * 0.9));
        const ans = cf2 - cf1;
        return {
          prompt: `On a cumulative frequency curve for {{${n}}} runners, CF at {{${m1}}} min is {{${cf1}}} and CF at {{${m2}}} min is {{${cf2}}}. Estimate how many runners finished **between {{${m1}}} and {{${m2}}} minutes**.`,
          answer: { type: "number", value: ans, display: `${ans}` },
          hint: `Subtract the lower cumulative frequency from the higher cumulative frequency ({{${cf2} - ${cf1}}}).`,
          solution: [`Runners in that interval = {{${cf2} - ${cf1} = ${ans}}}.`],
        };
      }

      // Tier 3: Reverse box plot (find LQ from UQ & IQR) OR CF from percentage above threshold
      const mode = rng.pick(["reverse-box", "pct-cf"] as const);
      if (mode === "reverse-box") {
        const lq = rng.int(15, 45);
        const iqr = rng.int(12, 34);
        const uq = lq + iqr;
        return {
          prompt: `A box plot has Upper Quartile = {{${uq}}} and Interquartile Range (IQR) = {{${iqr}}}. Find its **Lower Quartile (LQ)**.`,
          answer: { type: "number", value: lq, display: `${lq}` },
          hint: "Rearrange {{\"IQR\" = \"UQ\" - \"LQ\"}} to get {{\"LQ\" = \"UQ\" - \"IQR\"}}.",
          solution: [`{{\"LQ\" = ${uq} - ${iqr} = ${lq}}}.`],
        };
      }
      const n = rng.pick([80, 100, 120, 160, 200] as const);
      const pct = rng.pick([10, 15, 20, 25, 30, 35, 40] as const);
      const above = clean((pct * n) / 100);
      const cf = clean(n - above);
      const mark = rng.int(55, 85);
      return {
        prompt: `A cumulative frequency diagram represents {{${n}}} candidates. Exactly {{${pct}%}} scored **more than** {{${mark}}} marks. What is the **cumulative frequency** at {{${mark}}} marks?`,
        answer: { type: "number", value: cf, display: fmt(cf) },
        traps: [
          {
            spec: { type: "number", value: above },
            feedback: `{{${fmt(above)}}} is the number scoring **above** {{${mark}}} — subtract from {{${n}}} to get the cumulative frequency!`,
          },
        ],
        hint: `Find {{${pct}%}} of {{${n}}} (= {{${fmt(above)}}}), then subtract from {{${n}}}.`,
        solution: [
          `Number above {{${mark}}} = {{${pct}% * ${n} = ${fmt(above)}}}.`,
          `Cumulative frequency at {{${mark}}} = {{${n} - ${fmt(above)} = ${fmt(cf)}}}.`,
        ],
      };
    },
  },
];
