import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Legend says René Descartes invented coordinate graphs while watching a fly crawl across his tiled ceiling — turning geometry into algebra in a single afternoon!",
  didYouKnow: [
    "Why is gradient called **m** in {{y = mx + c}}? Nobody knows for 100% certain, though many historians trace it to the French verb *monter* ('to climb') or the word *modulus* — and in the United States the exact same formula is written {{y = mx + b}}!",
    "Airline seat pricing, cargo loading, and factory scheduling all solve **linear programming** problems — giant 1,000-variable versions of Year 9 simultaneous inequality regions!",
    "A railway engineer's timetable chart (called a *marey graph* or *stringline chart*) is literally a distance–time graph where dozens of straight lines cross whenever trains pass each other.",
    "On the Fahrenheit–Celsius conversion line {{F = 1.8C + 32}}, there is one eerie temperature where both scales read the exact same number: **{{-40}}°C = {{-40}}°F**, the intersection of {{y = 1.8x + 32}} and {{y = x}}!",
  ],
  activities: [
    {
      title: "Human Coordinate Grid",
      emoji: "🏃",
      materials: ["Masking tape or chalk for axes", "Index cards with linear equations", "String or a long skipping rope"],
      steps: [
        "Tape an {{x}}-axis and {{y}}-axis on the floor with integer marks from {{-4}} to {{+4}}.",
        "Draw an equation card (like {{y = 2x - 1}} or {{x + y = 3}}). Each person picks an integer {{x}} and stands at their calculated {{(x, y)}} spot.",
        "Stretch a single taut string past everyone — if the string bends around someone, they caught an arithmetic slip!",
        "Next, change the sign to an inequality (e.g. {{y > x}}): everyone in the wanted half-plane raises both hands while boundary standers either freeze (solid) or step off (dashed).",
      ],
      maths: "You physically experience why every solution of a linear equation is collinear and how a single line splits a 2D plane into two half-planes.",
    },
    {
      title: "Design a Fair Phone Tariff",
      emoji: "📱",
      materials: ["Squared paper and ruler", "Two coloured pens"],
      steps: [
        "Invent two competing mobile-data plans: Plan A with a low monthly fee and high cost per GB, and Plan B with a higher monthly fee and low cost per GB.",
        "Plot both lines on the same axes (GB on the horizontal axis, monthly cost on the vertical axis).",
        "Read the exact break-even intersection point from your graph, then verify it algebraically by setting both {{mx + c}} rules equal.",
        "Write a recommendation explaining which customer should pick Plan A and which should pick Plan B.",
      ],
      maths: "Real-world pricing compares both the y-intercept (standing fee) and gradient (marginal rate); the shallower line always wins in the long run.",
    },
  ],
  bonusDiagrams: [
    {
      title: "The Four Gradient Families at a Glance",
      svg:
        '<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four mini graphs comparing positive, negative, zero, and vertical gradients">' +
        '<rect x="0" y="0" width="560" height="210" rx="10" fill="var(--surface)"/>' +
        '<g>' +
        '<rect x="14" y="18" width="124" height="174" rx="9" fill="var(--surface-2)" stroke="var(--line)"/>' +
        '<line x1="28" y1="108" x2="124" y2="108" stroke="var(--ink-2)" stroke-width="1.2"/>' +
        '<line x1="76" y1="42" x2="76" y2="148" stroke="var(--ink-2)" stroke-width="1.2"/>' +
        '<line x1="36" y1="138" x2="116" y2="54" stroke="var(--good)" stroke-width="3"/>' +
        '<text x="76" y="168" font-size="11.5" font-weight="800" text-anchor="middle" fill="var(--good)">m &gt; 0 (Uphill)</text>' +
        '<text x="76" y="184" font-size="10" text-anchor="middle" fill="var(--ink-2)">rises left → right</text>' +
        '</g>' +
        '<g>' +
        '<rect x="150" y="18" width="124" height="174" rx="9" fill="var(--surface-2)" stroke="var(--line)"/>' +
        '<line x1="164" y1="108" x2="260" y2="108" stroke="var(--ink-2)" stroke-width="1.2"/>' +
        '<line x1="212" y1="42" x2="212" y2="148" stroke="var(--ink-2)" stroke-width="1.2"/>' +
        '<line x1="172" y1="54" x2="252" y2="138" stroke="var(--bad)" stroke-width="3"/>' +
        '<text x="212" y="168" font-size="11.5" font-weight="800" text-anchor="middle" fill="var(--bad)">m &lt; 0 (Downhill)</text>' +
        '<text x="212" y="184" font-size="10" text-anchor="middle" fill="var(--ink-2)">falls left → right</text>' +
        '</g>' +
        '<g>' +
        '<rect x="286" y="18" width="124" height="174" rx="9" fill="var(--surface-2)" stroke="var(--line)"/>' +
        '<line x1="300" y1="108" x2="396" y2="108" stroke="var(--ink-2)" stroke-width="1.2"/>' +
        '<line x1="348" y1="42" x2="348" y2="148" stroke="var(--ink-2)" stroke-width="1.2"/>' +
        '<line x1="306" y1="74" x2="390" y2="74" stroke="var(--brand)" stroke-width="3"/>' +
        '<text x="348" y="168" font-size="11.5" font-weight="800" text-anchor="middle" fill="var(--brand)">m = 0 (Flat)</text>' +
        '<text x="348" y="184" font-size="10" text-anchor="middle" fill="var(--ink-2)">horizontal: y = k</text>' +
        '</g>' +
        '<g>' +
        '<rect x="422" y="18" width="124" height="174" rx="9" fill="var(--surface-2)" stroke="var(--line)"/>' +
        '<line x1="436" y1="108" x2="532" y2="108" stroke="var(--ink-2)" stroke-width="1.2"/>' +
        '<line x1="484" y1="42" x2="484" y2="148" stroke="var(--ink-2)" stroke-width="1.2"/>' +
        '<line x1="508" y1="48" x2="508" y2="142" stroke="var(--ink)" stroke-width="3"/>' +
        '<text x="484" y="168" font-size="11.5" font-weight="800" text-anchor="middle" fill="var(--ink)">No finite m</text>' +
        '<text x="484" y="184" font-size="10" text-anchor="middle" fill="var(--ink-2)">vertical: x = k</text>' +
        '</g>' +
        '</svg>',
      caption: "Check your calculated gradient against the picture every time: uphill is positive, downhill is negative, flat is zero, vertical has no finite slope.",
    },
    {
      title: "Break-Even Point: Comparing Two Linear Tariffs",
      svg:
        '<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison graph of Plan A = 0.10m + 15 and Plan B = 0.25m + 6 crossing at (60, 21)">' +
        '<rect x="0" y="0" width="560" height="230" rx="10" fill="var(--surface)"/>' +
        '<g stroke="var(--line)" stroke-width="1">' +
        '<line x1="70" y1="30" x2="70" y2="190"/><line x1="150" y1="30" x2="150" y2="190"/><line x1="230" y1="30" x2="230" y2="190"/><line x1="310" y1="30" x2="310" y2="190"/>' +
        '<line x1="70" y1="30" x2="330" y2="30"/><line x1="70" y1="70" x2="330" y2="70"/><line x1="70" y1="110" x2="330" y2="110"/><line x1="70" y1="150" x2="330" y2="150"/>' +
        '</g>' +
        '<line x1="70" y1="190" x2="340" y2="190" stroke="var(--ink)" stroke-width="1.8"/>' +
        '<line x1="70" y1="190" x2="70" y2="20" stroke="var(--ink)" stroke-width="1.8"/>' +
        '<text x="200" y="218" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)">Minutes (m)</text>' +
        '<text x="24" y="110" font-size="11" font-weight="700" text-anchor="middle" transform="rotate(-90 24 110)" fill="var(--ink)">Cost (£)</text>' +
        '<text x="70" y="204" font-size="10" text-anchor="middle" fill="var(--ink-2)">0</text>' +
        '<text x="150" y="204" font-size="10" text-anchor="middle" fill="var(--ink-2)">30</text>' +
        '<text x="230" y="204" font-size="10" text-anchor="middle" fill="var(--ink-2)">60</text>' +
        '<text x="310" y="204" font-size="10" text-anchor="middle" fill="var(--ink-2)">90</text>' +
        '<text x="62" y="160" font-size="10" text-anchor="end" fill="var(--ink-2)">6</text>' +
        '<text x="62" y="115" font-size="10" text-anchor="end" fill="var(--ink-2)">15</text>' +
        '<text x="62" y="85" font-size="10" text-anchor="end" fill="var(--ink-2)">21</text>' +
        '<line x1="230" y1="85" x2="230" y2="190" stroke="var(--ink-2)" stroke-width="1.3" stroke-dasharray="4 3"/>' +
        '<line x1="70" y1="115" x2="310" y2="70" stroke="var(--brand)" stroke-width="3"/>' +
        '<line x1="70" y1="160" x2="310" y2="47.5" stroke="var(--bad)" stroke-width="3"/>' +
        '<circle cx="230" cy="85" r="5.5" fill="var(--good)" stroke="var(--surface)" stroke-width="1.5"/>' +
        '<text x="238" y="102" font-size="10.5" font-weight="800" fill="var(--good)">Break-even (60, £21)</text>' +
        '<text x="316" y="74" font-size="10.5" font-weight="700" fill="var(--brand)">Plan A</text>' +
        '<text x="316" y="51" font-size="10.5" font-weight="700" fill="var(--bad)">Plan B</text>' +
        '<rect x="366" y="26" width="180" height="176" rx="10" fill="var(--surface-2)" stroke="var(--line)"/>' +
        '<text x="378" y="49" font-size="12.5" font-weight="800" fill="var(--ink)">Which Plan Wins?</text>' +
        '<text x="378" y="74" font-size="11" font-weight="700" fill="var(--bad)">m &lt; 60 min → Plan B</text>' +
        '<text x="378" y="91" font-size="10.5" fill="var(--ink-2)">Lower starting fee (£6)</text>' +
        '<text x="378" y="119" font-size="11" font-weight="700" fill="var(--good)">m = 60 min → Tie (£21)</text>' +
        '<text x="378" y="136" font-size="10.5" fill="var(--ink-2)">Lines intersect here</text>' +
        '<text x="378" y="164" font-size="11" font-weight="700" fill="var(--brand)">m &gt; 60 min → Plan A</text>' +
        '<text x="378" y="181" font-size="10.5" fill="var(--ink-2)">Shallower slope (£0.10/m)</text>' +
        '</svg>',
      caption: "The line with the smaller gradient (Plan A) always becomes cheaper after the break-even intersection.",
    },
  ],
  history: {
    title: "How Descartes United Algebra & Geometry — and How Inequalities Built Modern Logistics",
    story:
      "For nearly 2,000 years after Euclid, algebra (symbols and equations) and geometry (lines and shapes) lived in completely separate worlds. In 1637, the French philosopher-mathematician René Descartes published *La Géométrie*, showing that assigning every point in a plane a pair of numbers (x, y) turns every geometric line into an algebraic equation. Three centuries later, in 1947, American mathematician George Dantzig was challenged to schedule supplies for the US Air Force across thousands of constraints — and by intersecting linear inequality regions, he invented linear programming and the Simplex Method, which still optimises global flights, delivery routes, and power grids every single day.",
  },
};
