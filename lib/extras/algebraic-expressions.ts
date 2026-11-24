import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Every time you compute {{99 * 101 = 9999}} in your head or ask a phone map for arrival time {{t = d/v}}, you are silently using double-bracket identities and formula rearranging.",
  didYouKnow: [
    "The word **algebra** comes directly from the Arabic *al-jabr* ('reunion of broken parts'), the title of al-Khwarizmi's 9th-century textbook on balancing and rearranging equations.",
    "Before modern symbols (`+`, `−`, `=`, `x²`) were invented in the 1500s–1600s, mathematicians wrote entire expansions in full sentences — a style called **rhetorical algebra**.",
    "The equals sign `=` was invented in 1557 by Welsh mathematician Robert Recorde because, in his words, *'no two things can be more equal'* than two parallel lines of the same length.",
    "In 1637, René Descartes started the convention of using early letters (`a, b, c`) for known constants and late letters (`x, y, z`) for unknowns — a habit every school still uses today.",
    "Expanding {{(a + b)^2}} into a square of four pieces was first proved geometrically by Euclid in *Elements* Book II around 300 BCE, long before algebraic symbols existed!",
  ],
  activities: [
    {
      title: "Paper-Scissors Proof of Difference of Two Squares",
      emoji: "✂️",
      materials: ["Squared paper (1 cm grid)", "Ruler & pencil", "Scissors"],
      steps: [
        "Cut out a large square of side {{a = 10}} cm (area {{100}} {{cm^2}}).",
        "From one corner, mark and cut away a smaller square of side {{b = 3}} cm (area {{9}} {{cm^2}}). The remaining L-shape has area {{a^2 - b^2 = 91}} {{cm^2}}.",
        "Make ONE straight cut from the inner corner to slice the L-shape into two rectangles: one {{7}} cm × {{10}} cm, and one {{3}} cm × {{7}} cm.",
        "Rotate the smaller strip and place it end-to-end against the larger strip to form a single rectangle!",
        "Measure the new rectangle's dimensions: height {{a - b = 7}} cm and length {{a + b = 13}} cm, giving area {{13 * 7 = 91}} {{cm^2}}.",
      ],
      maths:
        "Because cutting and re-arranging paper preserves total area, you have physically proved {{a^2 - b^2 = (a + b)(a - b)}} for ANY {{a > b > 0}}!",
    },
    {
      title: "Think-of-a-Number Mind-Reader Trick",
      emoji: "🎩",
      materials: ["Pen & paper", "A partner or friend"],
      steps: [
        "Ask your partner to pick any secret integer {{x}}.",
        "Tell them: 'Add {{3}}, square the result, then subtract the square of your original number.'",
        "Ask them to tell you their final number {{N}}.",
        "Secretly subtract {{9}} from {{N}} and divide by {{6}} — then announce their original secret number {{x}}!",
        "Now invent your OWN mind-reader trick using {{(x + k)^2 - x^2}} and rearranging for {{x}}.",
      ],
      maths:
        "Expanding gives {{N = (x + 3)^2 - x^2 = (x^2 + 6x + 9) - x^2 = 6x + 9}}. Rearranging to make {{x}} the subject gives {{x = (N - 9)/6}} — algebra turns any trick into an instant formula!",
    },
  ],
  bonusDiagrams: [
    {
      title: "Geometric Proof of Difference of Two Squares: a² − b² = (a + b)(a − b)",
      caption:
        "Cut a b × b square off an a × a square, slice along the dashed line, and swing the side strip around to form a clean (a + b) by (a − b) rectangle.",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Geometric cut-and-rearrange proof showing a squared minus b squared equals (a + b)(a - b)">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Visual Proof: a² − b² = (a + b)(a − b)</text>
  <!-- Left: L-shape inside a x a square -->
  <rect x="44" y="48" width="150" height="100" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
  <rect x="44" y="148" width="100" height="50" fill="var(--good-soft)" stroke="var(--good)" stroke-width="2"/>
  <rect x="144" y="148" width="50" height="50" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="169" y="177" text-anchor="middle" font-size="13" font-weight="700" fill="var(--bad)">−b²</text>
  <text x="119" y="102" text-anchor="middle" font-size="14" font-weight="700" fill="var(--brand)">a × (a − b)</text>
  <text x="94" y="177" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">(a − b) × b</text>
  <text x="119" y="42" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">a</text>
  <text x="30" y="102" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">a−b</text>
  <text x="30" y="177" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">b</text>
  <!-- Arrow -->
  <line x1="214" y1="122" x2="254" y2="122" stroke="var(--ink)" stroke-width="2.5"/>
  <polygon points="254,116 266,122 254,128" fill="var(--ink)"/>
  <text x="238" y="110" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">rotate</text>
  <!-- Right: Reassembled rectangle (a + b) by (a - b) -->
  <rect x="286" y="72" width="150" height="100" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
  <rect x="436" y="72" width="50" height="100" fill="var(--good-soft)" stroke="var(--good)" stroke-width="2"/>
  <text x="361" y="126" text-anchor="middle" font-size="14" font-weight="700" fill="var(--brand)">a × (a − b)</text>
  <text x="461" y="126" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">b × (a−b)</text>
  <text x="361" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">a</text>
  <text x="461" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="var(--good)">+ b</text>
  <text x="508" y="126" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">a − b</text>
  <text x="386" y="196" text-anchor="middle" font-size="14" font-weight="700" fill="var(--brand)">Total Area = (a + b)(a − b)</text>
  <text x="280" y="232" text-anchor="middle" font-size="12" fill="var(--ink-2)">No area was created or lost — the two expressions are identically equal!</text>
</svg>`,
    },
    {
      title: "Why (a + b)² ≠ a² + b² — Spot the Two Missing Rectangles!",
      caption:
        "If you square a and b separately you only keep the two corners (a² and b²), throwing away TWO whole ab rectangles.",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Square of side a + b split into four regions: a squared, b squared, and two ab rectangles showing why (a + b) squared equals a squared plus 2ab plus b squared">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Where Does the +2ab Come From in (a + b)²?</text>
  <!-- Big square partitioned -->
  <rect x="76" y="48" width="110" height="110" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
  <rect x="186" y="48" width="54" height="110" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="2"/>
  <rect x="76" y="158" width="110" height="54" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="2"/>
  <rect x="186" y="158" width="54" height="54" fill="var(--good-soft)" stroke="var(--good)" stroke-width="2"/>
  <text x="131" y="108" text-anchor="middle" font-size="18" font-weight="700" fill="var(--brand)">a²</text>
  <text x="213" y="108" text-anchor="middle" font-size="15" font-weight="700" fill="var(--bad)">ab</text>
  <text x="131" y="190" text-anchor="middle" font-size="15" font-weight="700" fill="var(--bad)">ab</text>
  <text x="213" y="190" text-anchor="middle" font-size="16" font-weight="700" fill="var(--good)">b²</text>
  <!-- Edge labels -->
  <text x="131" y="42" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">a</text>
  <text x="213" y="42" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">b</text>
  <text x="64" y="108" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">a</text>
  <text x="64" y="190" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">b</text>
  <!-- Explanation panel -->
  <rect x="278" y="54" width="256" height="152" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="406" y="84" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)">(a + b)² = a² + 2ab + b²</text>
  <text x="406" y="114" text-anchor="middle" font-size="13" fill="var(--bad)">Missing rectangles: ab + ab = 2ab</text>
  <text x="406" y="142" text-anchor="middle" font-size="13" fill="var(--ink-2)">Try a = 10, b = 3:</text>
  <text x="406" y="164" text-anchor="middle" font-size="13" font-weight="700" fill="var(--good)">13² = 100 + 60 + 9 = 169 ✓</text>
  <text x="406" y="188" text-anchor="middle" font-size="13" font-weight="700" fill="var(--bad)">10² + 3² = 109 (off by 60!)</text>
  <text x="280" y="234" text-anchor="middle" font-size="12" fill="var(--ink-2)">Never distribute a power across addition — draw the 4 tiles in your mind!</text>
</svg>`,
    },
  ],
  history: {
    title: "Al-Khwarizmi and the Birth of Al-Jabr (c. 820 CE)",
    story:
      "Working in the House of Wisdom in Baghdad around 820 CE, Persian scholar Muhammad ibn Musa al-Khwarizmi wrote a groundbreaking book whose title gave us the word **algebra** (*al-jabr*, meaning restoring a subtracted term by adding it to both sides). Remarkably, he solved quadratic identities by literally drawing squares and rectangles — just like the area grid in this unit! His Latinised name, *Algoritmi*, also gave the modern world the word **algorithm**.",
  },
};
