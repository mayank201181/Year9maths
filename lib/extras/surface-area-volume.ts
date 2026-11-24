import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Why does rolling a single sheet of paper the short way hold **twice** as much popcorn as rolling the exact same sheet the tall way—and why did Archimedes ask for a cylinder and sphere to be carved on his tombstone?",
  didYouKnow: [
    "If you cut a soda can's label and lay it flat, it is a perfect rectangle whose width is {{2pi r}}—and real beverage companies choose the height-to-radius ratio carefully to save thousands of tonnes of aluminium every year.",
    "One **cubic metre** of water ({{1 m^3 = 1,000 \"litres\"}}) weighs **one metric tonne** ({{1,000 kg}})! That is why rooftop swimming pools require massive steel beams underneath.",
    "A cone and a square pyramid with the same base area and height have the exact same volume {{(1/3)Ah}}, even though one has curved walls and the other has flat triangular faces (Cavalieri's Principle).",
    "In 1999, NASA lost the $125 million Mars Climate Orbiter because one engineering team used imperial units while another used metric units—proof that unit discipline saves spacecraft!",
    "When NASA grinds telescope mirrors, the glass thickness error interval is narrower than {{0.00001 mm}}—less than one-thousandth the width of a human hair.",
  ],
  activities: [
    {
      title: "The Two-Cylinder Popcorn Paradox",
      emoji: "🍿",
      materials: [
        "Two identical A4 sheets of paper",
        "Sticky tape",
        "Dry rice, pasta, or popcorn kernels",
        "A tray or bowl to catch spills",
      ],
      steps: [
        "Roll the first A4 sheet into a **tall, skinny** open cylinder (joining the two long edges) and tape the seam.",
        "Roll the second A4 sheet into a **short, wide** open cylinder (joining the two short edges) and tape the seam.",
        "Stand the tall cylinder inside the short cylinder on a tray, fill the tall cylinder right to the top with dry rice, then carefully lift the tall tube straight up so the rice spills into the short, wide tube.",
        "Notice how much empty space is still left in the short, wide cylinder!",
      ],
      maths:
        "Both tubes have the exact same curved surface area ({{29.7 * 21 cm^2}}), yet volume depends on {{r^2 h}}. Because the radius is **squared**, making the tube wider beats making it taller by the ratio {{29.7 / 21 ~= 1.41}}—over {{40%}} more volume from the very same sheet of paper!",
    },
    {
      title: "Paper Sector → 3D Cone Builder",
      emoji: "🎉",
      materials: [
        "Compass or circular plate",
        "Cardstock or stiff paper",
        "Scissors, ruler, and tape",
      ],
      steps: [
        "Draw and cut out a circle of radius {{10 cm}}.",
        "Draw two radii meeting at {{144°}} (or mark {{40%}} of the circle) and cut out that wedge, leaving a {{216°}} sector.",
        "Bring the two straight cut edges of the {{216°}} sector together and tape them to form an open cone.",
        "Measure the base diameter and perpendicular height of your cone with a ruler!",
      ],
      maths:
        "Your sector's arc length is {{(216/360) * 20pi = 12pi cm}}, which becomes the cone's base circumference {{2pi r}}, forcing {{r = 6 cm}} (diameter {{12 cm}}). The original circle radius {{10 cm}} is now the slant height {{l}}, so Pythagoras locks the perpendicular height at {{h = sqrt(10^2 - 6^2) = 8 cm}}!",
    },
  ],
  bonusDiagrams: [
    {
      title: "Why a Cone's Curved Surface Unrolls into a Circle Sector",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cone unrolling into a circular sector of radius l and arc length 2 pi r">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface-2)"/>
  <!-- Left: 3D cone -->
  <ellipse cx="112" cy="184" rx="58" ry="16" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
  <path d="M 54 184 L 112 46 L 170 184" fill="var(--surface)" fill-opacity="0.8" stroke="var(--ink)" stroke-width="2" stroke-linejoin="round"/>
  <path d="M 54 184 A 58 16 0 0 0 170 184" fill="none" stroke="var(--brand)" stroke-width="2.6"/>
  <line x1="112" y1="46" x2="170" y2="184" stroke="var(--bad)" stroke-width="2.8" stroke-dasharray="5 3"/>
  <text x="155" y="110" font-size="13" font-weight="800" fill="var(--bad)">cut l</text>
  <text x="112" y="218" font-size="12" font-weight="700" fill="var(--brand)" text-anchor="middle">rim = 2πr</text>
  <!-- Arrow -->
  <line x1="204" y1="125" x2="250" y2="125" stroke="var(--ink-2)" stroke-width="2.2"/>
  <polygon points="250,119 262,125 250,131" fill="var(--ink-2)"/>
  <text x="232" y="114" font-size="11" font-weight="700" fill="var(--ink-2)" text-anchor="middle">flatten</text>
  <!-- Right: Unrolled sector of radius l=105 centred at (385, 62), spanning 130 deg downward -->
  <!-- -155 deg to -25 deg? In SVG y-down, +25 deg is down-right, +155 deg is down-left -->
  <!-- Centre (395, 58), R=118. Angle 30 deg: (395+102.2, 58+59) = (497.2, 117). Angle 150 deg: (395-102.2, 58+59) = (292.8, 117) -->
  <path d="M 395 58 L 497.2 117 A 118 118 0 0 1 292.8 117 Z" fill="var(--surface)" stroke="var(--bad)" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M 497.2 117 A 118 118 0 0 1 292.8 117" fill="none" stroke="var(--brand)" stroke-width="4" stroke-linecap="round"/>
  <text x="458" y="80" font-size="13" font-weight="800" fill="var(--bad)">l</text>
  <text x="332" y="80" font-size="13" font-weight="800" fill="var(--bad)">l</text>
  <text x="395" y="196" font-size="13" font-weight="800" fill="var(--brand)" text-anchor="middle">Arc length = 2πr</text>
  <text x="395" y="130" font-size="14" font-weight="800" fill="var(--ink)" text-anchor="middle">Area = (1/2) × arc × l</text>
  <text x="395" y="152" font-size="15" font-weight="800" fill="var(--good)" text-anchor="middle">= (1/2)(2πr)l = πrl</text>
  <text x="395" y="232" font-size="12" fill="var(--ink-2)" text-anchor="middle">Slant height l becomes the radius of the flat sector!</text>
</svg>`,
      caption:
        "Cutting a cone along its slant height l flattens it into a sector of radius l and arc length 2πr, proving CSA = πrl in one line.",
    },
    {
      title: "Compound Bounds Cheat-Sheet: Maximising vs Minimising",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cheat sheet for upper and lower bounds of sums, products, differences, and quotients">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface-2)"/>
  <text x="280" y="30" font-size="15" font-weight="800" fill="var(--ink)" text-anchor="middle">Compound Bounds: Always Think Biggest vs Smallest</text>
  <!-- 4 cards in 2x2 grid -->
  <!-- Card 1: A + B -->
  <rect x="20" y="46" width="252" height="88" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="34" y="69" font-size="13" font-weight="800" fill="var(--brand)">Sum (A + B)</text>
  <text x="34" y="94" font-size="13" font-weight="700" fill="var(--good)">Max = UB(A) + UB(B)</text>
  <text x="34" y="116" font-size="13" font-weight="700" fill="var(--ink-2)">Min = LB(A) + LB(B)</text>
  <!-- Card 2: A * B -->
  <rect x="288" y="46" width="252" height="88" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="302" y="69" font-size="13" font-weight="800" fill="var(--brand)">Product (A × B, positive)</text>
  <text x="302" y="94" font-size="13" font-weight="700" fill="var(--good)">Max = UB(A) × UB(B)</text>
  <text x="302" y="116" font-size="13" font-weight="700" fill="var(--ink-2)">Min = LB(A) × LB(B)</text>
  <!-- Card 3: A - B -->
  <rect x="20" y="146" width="252" height="88" rx="10" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="34" y="169" font-size="13" font-weight="800" fill="var(--bad)">Difference (A − B)  ★ Flip B!</text>
  <text x="34" y="194" font-size="13" font-weight="700" fill="var(--good)">Max = UB(A) − LB(B)</text>
  <text x="34" y="216" font-size="13" font-weight="700" fill="var(--ink-2)">Min = LB(A) − UB(B)</text>
  <!-- Card 4: A / B -->
  <rect x="288" y="146" width="252" height="88" rx="10" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="302" y="169" font-size="13" font-weight="800" fill="var(--bad)">Quotient (A ÷ B)  ★ Flip B!</text>
  <text x="302" y="194" font-size="13" font-weight="700" fill="var(--good)">Max = UB(A) ÷ LB(B)</text>
  <text x="302" y="216" font-size="13" font-weight="700" fill="var(--ink-2)">Min = LB(A) ÷ UB(B)</text>
</svg>`,
      caption:
        "For subtraction and division, you flip the second measurement: divide BIG by SMALL to get the largest possible quotient.",
    },
  ],
  history: {
    title: "Archimedes' Favourite Discovery — Carved on His Tombstone",
    story:
      "Over 2,200 years ago in Syracuse, Archimedes discovered something he loved more than all his war machines and levers combined: take a cone, a sphere, and a cylinder of the **same radius** {{r}} and **same height** {{2r}}. Their volumes stand in the breathtakingly clean ratio **1 : 2 : 3**—and the sphere's surface area is exactly two-thirds the cylinder's total surface area! Archimedes was so proud of this geometric symphony that he requested a sphere inside a cylinder be carved onto his gravestone. More than a century later, the Roman orator Cicero hunted through overgrown brambles outside Syracuse and found the forgotten tomb solely by spotting that famous diagram.",
  },
};
