import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Whether a ride-share app compares two route times, an engineer sets a bridge's weight limit, or a physics engine finds when a ball returns to ground level, the engine under the hood is equations and inequalities.",
  didYouKnow: [
    "The inequality symbols {{<}} and {{>}} first appeared in print in 1631 in English mathematician Thomas Harriot's posthumous book *Artis Analyticae Praxis* — over 70 years after the `=` sign!",
    "The inclusive symbols {{<=}} and {{>=}} were invented a full century later, in 1734, by French mathematician Pierre Bouguer.",
    "Chinese mathematicians solved systems of THREE and FOUR simultaneous linear equations using bamboo counting rods arranged in tables around 200 BCE — nearly 2,000 years before European textbooks called the method 'Gaussian elimination'!",
    "A linear system of two equations can ONLY have **0**, **1**, or **infinitely many** solutions — it can NEVER have exactly 2 solutions because two distinct straight lines can cross at most once.",
    "The 'plus-or-minus' symbol {{+-}} was introduced in 1628 by Albert Girard specifically to keep track of BOTH roots when solving quadratic equations.",
  ],
  activities: [
    {
      title: "Break-Even Phone Plan Challenge",
      emoji: "📱",
      materials: ["Squared paper", "Ruler & two coloured pens"],
      steps: [
        "Compare two imaginary mobile data plans: **Plan A** costs {{£10}} fixed plus {{£2}} per GB ({{C = 2g + 10}}), while **Plan B** costs {{£4}} fixed plus {{£5}} per GB ({{C = 5g + 4}}).",
        "Plot both straight lines on the same grid for {{g}} from {{0}} to {{5}} GB.",
        "Read off the exact intersection point where both plans cost the same amount.",
        "Solve {{2g + 10 = 5g + 4}} algebraically to confirm your graph reading ({{g = 2}} GB, {{£14}}).",
        "Now write an inequality for the values of {{g}} where Plan A is **strictly cheaper** than Plan B ({{2g + 10 < 5g + 4 => g > 2}}).",
      ],
      maths:
        "The intersection solves the simultaneous equations ({{g = 2}} GB), while the region to the right of the crossing solves the inequality ({{g > 2}} GB) — equations and inequalities live on the very same graph!",
    },
    {
      title: "Two-Coin Pocket Puzzle (DIY Simultaneous Equations)",
      emoji: "🪙",
      materials: ["A handful of 10p and 50p coins (or paper tokens)", "Pen & paper"],
      steps: [
        "Secretly grab a mix of {{x}} ten-pence coins and {{y}} fifty-pence coins (say 9 coins in total).",
        "Tell your partner ONLY two clues: the total number of coins ({{x + y = 9}}) and the total value in pence (say {{10x + 50y = 250}}).",
        "Challenge your partner to solve the simultaneous equations by elimination to reveal the exact count of each coin before you open your hand!",
        "Swap roles — try making a puzzle with an **impossible** clue (like {{9}} coins totalling {{265}}p) and explain why no integer solution exists.",
      ],
      maths:
        "Eliminating {{x}} from {{x + y = 9}} and {{10x + 50y = 250}} gives {{40y = 160 => y = 4}} fifty-pence coins and {{x = 5}} ten-pence coins — pure elimination in action!",
    },
  ],
  bonusDiagrams: [
    {
      title: "The Three Possible Outcomes of Two Linear Simultaneous Equations",
      caption:
        "Two straight lines in a plane can meet once (different gradients), never meet (parallel), or lie completely on top of one another (same equation).",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three coordinate mini-graphs showing 1 unique solution for intersecting lines, 0 solutions for parallel lines, and infinitely many solutions for coincident lines">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Every Linear Simultaneous Pair Has 1, 0, or Infinitely Many Solutions</text>
  <!-- Panel 1: Intersecting -->
  <rect x="18" y="42" width="164" height="190" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.8"/>
  <text x="100" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="var(--good)">1 Unique Solution</text>
  <line x1="42" y1="150" x2="158" y2="150" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="100" y1="78" x2="100" y2="176" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="44" y1="166" x2="154" y2="86" stroke="var(--brand)" stroke-width="2.6"/>
  <line x1="46" y1="92" x2="154" y2="162" stroke="var(--bad)" stroke-width="2.6"/>
  <circle cx="101" cy="125" r="5.5" fill="var(--good)" stroke="var(--surface)" stroke-width="2"/>
  <text x="100" y="198" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Different gradients</text>
  <text x="100" y="216" text-anchor="middle" font-size="11" fill="var(--ink-2)">m₁ ≠ m₂ (cross once)</text>

  <!-- Panel 2: Parallel -->
  <rect x="198" y="42" width="164" height="190" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.8"/>
  <text x="280" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="var(--bad)">No Solution (0)</text>
  <line x1="222" y1="150" x2="338" y2="150" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="280" y1="78" x2="280" y2="176" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="226" y1="146" x2="330" y2="84" stroke="var(--brand)" stroke-width="2.6"/>
  <line x1="226" y1="172" x2="330" y2="110" stroke="var(--bad)" stroke-width="2.6"/>
  <text x="280" y="198" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Parallel lines</text>
  <text x="280" y="216" text-anchor="middle" font-size="11" fill="var(--ink-2)">m₁ = m₂,  c₁ ≠ c₂</text>

  <!-- Panel 3: Identical -->
  <rect x="378" y="42" width="164" height="190" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.8"/>
  <text x="460" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">Infinite Solutions</text>
  <line x1="402" y1="150" x2="518" y2="150" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="460" y1="78" x2="460" y2="176" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="406" y1="162" x2="514" y2="94" stroke="var(--brand)" stroke-width="4.5"/>
  <line x1="406" y1="162" x2="514" y2="94" stroke="var(--bad)" stroke-width="2" stroke-dasharray="6,5"/>
  <text x="460" y="198" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Same line</text>
  <text x="460" y="216" text-anchor="middle" font-size="11" fill="var(--ink-2)">m₁ = m₂,  c₁ = c₂</text>
</svg>`,
    },
    {
      title: "Why a Quadratic Has 2, 1, or 0 Real Solutions (Parabola vs Horizontal Line)",
      caption:
        "Cutting the parabola y = x² − 2x − 3 with horizontal lines y = k visually explains why some quadratics have 2 solutions, one touching solution at the vertex, or 0 real solutions.",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parabola y = x squared minus 2x minus 3 cut by horizontal lines showing 2 solutions at y = 0, 1 repeated solution at y = -4, and 0 real solutions below the vertex">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="22" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Solving x² − 2x − 3 = k by Intersecting with y = k</text>
  <!-- Axes in left plot area: x in [-2, 4], y in [-6, 4] -->
  <!-- x0 (x=0) = 130, scaleX = 38 => x=-2 is 54, x=4 is 282 -->
  <!-- y0 (y=0) = 112, scaleY = 18 => y=4 is 40, y=-6 is 220 -->
  <line x1="46" y1="112" x2="292" y2="112" stroke="var(--ink)" stroke-width="1.8"/>
  <line x1="130" y1="36" x2="130" y2="226" stroke="var(--ink)" stroke-width="1.8"/>
  <text x="296" y="116" font-size="11" font-weight="700" fill="var(--ink)">x</text>
  <text x="130" y="32" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">y</text>
  <!-- Parabola y = x^2 - 2x - 3 sampled from x=-1.6 (y=2.76) to x=3.6 (y=2.76) -->
  <!-- x=-1.6 -> (69,62); x=-1 -> (92,112); x=0 -> (130,166); x=1 -> (168,184); x=2 -> (206,166); x=3 -> (244,112); x=3.6 -> (267,62) -->
  <path d="M 69 62 Q 168 306 267 62" fill="none" stroke="var(--brand)" stroke-width="3"/>
  <!-- Horizontal line y = 0 (x-axis) roots at (-1,0) and (3,0) -->
  <circle cx="92" cy="112" r="5" fill="var(--good)" stroke="var(--surface)" stroke-width="1.8"/>
  <circle cx="244" cy="112" r="5" fill="var(--good)" stroke="var(--surface)" stroke-width="1.8"/>
  <!-- Horizontal line y = -4 (vertex at (1,-4) => (168, 184)) -->
  <line x1="56" y1="184" x2="280" y2="184" stroke="var(--brand)" stroke-width="1.8" stroke-dasharray="5,4"/>
  <circle cx="168" cy="184" r="5" fill="var(--brand)" stroke="var(--surface)" stroke-width="1.8"/>
  <!-- Horizontal line y = -5.5 (below vertex => y=211) -->
  <line x1="56" y1="211" x2="280" y2="211" stroke="var(--bad)" stroke-width="1.8" stroke-dasharray="5,4"/>
  <!-- Labels on right -->
  <rect x="316" y="42" width="226" height="178" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="429" y="68" text-anchor="middle" font-size="13" font-weight="700" fill="var(--good)">k = 0  (x-axis): 2 solutions</text>
  <text x="429" y="88" text-anchor="middle" font-size="12" fill="var(--ink)">x = −1 and x = 3</text>
  <line x1="334" y1="102" x2="524" y2="102" stroke="var(--line)" stroke-width="1"/>
  <text x="429" y="126" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">k = −4  (tangent): 1 solution</text>
  <text x="429" y="146" text-anchor="middle" font-size="12" fill="var(--ink)">Touches vertex at x = 1</text>
  <line x1="334" y1="160" x2="524" y2="160" stroke="var(--line)" stroke-width="1"/>
  <text x="429" y="184" text-anchor="middle" font-size="13" font-weight="700" fill="var(--bad)">k &lt; −4  (below): 0 solutions</text>
  <text x="429" y="204" text-anchor="middle" font-size="12" fill="var(--ink)">Line misses the curve completely</text>
</svg>`,
    },
  ],
  history: {
    title: "The Nine Chapters on the Mathematical Art (Han Dynasty China, ~200 BCE)",
    story:
      "Chapter 8 of the ancient Chinese classic *Jiuzhang Suanshu* (titled *Fangcheng*, meaning 'rectangular arrays') solved systems of simultaneous linear equations arising from grain harvests and taxation. Scholars arranged the coefficients on a counting board using red bamboo rods for positive numbers and black rods for negative numbers, scaling rows and subtracting them to eliminate one unknown after another — the exact elimination strategy you master in Year 9!",
  },
};
