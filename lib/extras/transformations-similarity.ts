import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Did you know that EVERY rigid movement on a flat plane — no matter how complicated a combo of turns, slides, and flips you perform — can ALWAYS be built from at most THREE reflections?",
  didYouKnow: [
    "Two reflections across PARALLEL mirror lines spaced d units apart always combine into a single translation of distance 2d perpendicular to the mirrors.",
    "Two reflections across INTERSECTING mirror lines meeting at angle θ always combine into a rotation of angle 2θ about their intersection point!",
    "When NASA designs scale wind-tunnel aircraft models, engineers match exact geometric similarity so airflow patterns predict full-sized flight performance.",
    "M. C. Escher spent decades studying crystallographic wallpaper groups — mathematical proof shows there are ONLY 17 distinct symmetry patterns possible on an infinite flat wall!",
    "In computer graphics, translations, rotations, reflections, and enlargements are all stored inside a single 3×3 transformation matrix so GPUs can apply all of them in one multiplication.",
  ],
  activities: [
    {
      title: "Mirror-Angle Kaleidoscope Lab",
      emoji: "🪞",
      materials: ["Two small flat mirrors hinged with tape", "A protractor", "A small Lego brick or coin"],
      steps: [
        "Stand the two taped mirrors upright on paper at an angle of 90° and place a coin between them — count how many total images (plus the real coin) appear.",
        "Narrow the hinge angle to 60°, then 45°, watching the circular ring of images multiply.",
        "Divide 360° by your mirror angle θ and compare it to the total number of coins you see (real + reflected)!",
      ],
      maths:
        "Each pair of reflections across two mirrors meeting at angle θ creates a rotation of 2θ around the hinge, generating 360° ÷ θ symmetric sectors (4 at 90°, 6 at 60°, 8 at 45°).",
    },
    {
      title: "Shadow-Similarity Tree Measurer",
      emoji: "🌳",
      materials: ["A 1-metre ruler or known height stick", "A tape measure", "A sunny day outdoors"],
      steps: [
        "Hold the 1 m stick vertically on flat ground next to a tall tree or goalpost and measure its shadow length s₁.",
        "Immediately measure the tree's shadow length s₂ along the same flat ground.",
        "Calculate the scale factor k = s₂ ÷ s₁ and multiply 1 m by k to estimate the tree's true height without climbing!",
      ],
      maths:
        "Because the Sun is so far away, its rays arrive practically parallel, forming two right-angled triangles with identical angles (AAA similarity) — the same method Thales used to measure the Great Pyramid of Giza over 2,600 years ago!",
    },
  ],
  bonusDiagrams: [
    {
      title: "Two Parallel Reflections = One Translation of 2d",
      svg: `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram showing that reflecting flag F across mirror m1 and then parallel mirror m2 spaced d apart produces a translation of 2d">
  <rect x="0" y="0" width="560" height="220" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Double Reflection in Parallel Mirrors = Translation by 2d</text>
  <!-- Mirror m1 at x=190, m2 at x=330 (d = 140) -->
  <line x1="190" y1="42" x2="190" y2="176" stroke="var(--bad)" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="190" y="194" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">Mirror m₁</text>
  <line x1="330" y1="42" x2="330" y2="176" stroke="var(--bad)" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="330" y="194" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">Mirror m₂</text>
  <!-- Distance d bracket -->
  <line x1="192" y1="54" x2="328" y2="54" stroke="var(--ink-2)" stroke-width="1.5"/>
  <text x="260" y="49" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">gap = d</text>
  <!-- Flag F at x=110..150 (pole at 110, flag pointing right to 150) -->
  <line x1="110" y1="78" x2="110" y2="148" stroke="var(--brand)" stroke-width="3"/>
  <polygon points="110,78 152,93 110,108" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
  <text x="122" y="164" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">Original</text>
  <!-- Reflected F1 across x=190: pole at 270, flag pointing left to 228 -->
  <line x1="270" y1="78" x2="270" y2="148" stroke="var(--ink-2)" stroke-width="2.5" stroke-dasharray="4,2"/>
  <polygon points="270,78 228,93 270,108" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.8"/>
  <text x="260" y="164" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink-2)">After m₁ (flipped)</text>
  <!-- Reflected F2 across x=330: pole at 390, flag pointing right to 432 -->
  <line x1="390" y1="78" x2="390" y2="148" stroke="var(--good)" stroke-width="3"/>
  <polygon points="390,78 432,93 390,108" fill="var(--brand-soft)" stroke="var(--good)" stroke-width="2"/>
  <text x="412" y="164" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">After m₂ (upright!)</text>
  <!-- Net translation arrow 110 -> 390 = 280 = 2d -->
  <line x1="110" y1="208" x2="384" y2="208" stroke="var(--good)" stroke-width="2.2"/>
  <polygon points="390,208 380,203 380,213" fill="var(--good)"/>
  <text x="250" y="204" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">Total slide = 2d</text>
</svg>`,
      caption: "The second flip restores the original orientation and slides the shape by exactly twice the gap between the mirrors.",
    },
    {
      title: "Why ASS Fails — Two Different Triangles from One Ambiguous Spec",
      svg: `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Geometric diagram showing why ASS fails to prove congruence because a swinging side of length 5 cm cuts the base line at two distinct vertices C1 and C2">
  <rect x="0" y="0" width="560" height="220" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">The Ambiguous ASS Trap: Same 35° Angle, 8 cm &amp; 5 cm Sides</text>
  <!-- Base ray from A(80, 170) to right -->
  <line x1="80" y1="170" x2="470" y2="170" stroke="var(--ink-2)" stroke-width="1.8"/>
  <!-- Side AB = 8 cm at 35 deg: len ~200px -> B = (80 + 164, 170 - 115) = (244, 55) -->
  <line x1="80" y1="170" x2="244" y2="55" stroke="var(--brand)" stroke-width="2.5"/>
  <!-- Arc radius 125px centred at B(244, 55) intersecting y=170: dy=115, dx=sqrt(125^2 - 115^2)=sqrt(2400)≈49 -> C1=(195,170), C2=(293,170) -->
  <path d="M 168 154 A 125 125 0 0 0 322 152" fill="none" stroke="var(--bad)" stroke-width="1.6" stroke-dasharray="5,4"/>
  <!-- Triangle 1 (obtuse) -->
  <polygon points="80,170 244,55 195,170" fill="var(--brand-soft)" fill-opacity="0.55" stroke="var(--brand)" stroke-width="2"/>
  <!-- Second swinging position BC2 -->
  <line x1="244" y1="55" x2="293" y2="170" stroke="var(--good)" stroke-width="2.5"/>
  <!-- Angle 35 deg arc at A -->
  <path d="M 118 170 A 38 38 0 0 0 111 148" fill="none" stroke="var(--ink)" stroke-width="1.8"/>
  <text x="126" y="162" font-size="11" font-weight="700" fill="var(--ink)">35°</text>
  <!-- Labels -->
  <text x="66" y="176" font-size="12" font-weight="700" fill="var(--ink)">A</text>
  <text x="244" y="45" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">B</text>
  <text x="195" y="188" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">C₁</text>
  <text x="293" y="188" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">C₂</text>
  <text x="148" y="106" font-size="11" font-weight="700" fill="var(--brand)">8 cm</text>
  <text x="206" y="114" font-size="11" font-weight="700" fill="var(--brand)">5 cm</text>
  <text x="282" y="114" font-size="11" font-weight="700" fill="var(--good)">5 cm</text>
  <text x="415" y="90" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Both △ABC₁ and △ABC₂</text>
  <text x="415" y="108" text-anchor="middle" font-size="11" fill="var(--ink-2)">share ∠A = 35°, AB = 8 cm,</text>
  <text x="415" y="126" text-anchor="middle" font-size="11" fill="var(--ink-2)">and BC = 5 cm — yet they are</text>
  <text x="415" y="144" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">NOT congruent!</text>
</svg>`,
      caption: "Swinging a 5 cm side from B intersects the base ray in two places, proving ASS cannot lock down a unique triangle.",
    },
  ],
  history: {
    title: "Felix Klein's Erlangen Programme (1872)",
    story:
      "For over two thousand years after Euclid, geometry was studied mainly as a collection of static diagrams about triangles and circles. In 1872, a 23-year-old German mathematician named Felix Klein stood up at the University of Erlangen and turned geometry upside down: he proposed defining EVERY branch of geometry by the **group of transformations** it allows and the properties that stay **invariant** under them. Under rigid motions (reflections, rotations, translations), lengths and areas stay invariant — that is congruence geometry. Add enlargements, and angles and side ratios stay invariant — that is similarity geometry. Klein's insight unified mathematics and later became the mathematical language of Einstein's relativity and modern particle physics!",
  },
};
