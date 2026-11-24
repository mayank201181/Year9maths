import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Fold a 0.1 mm sheet of paper in half just 42 times and its thickness reaches the Moon — how does a tiny doubling exponent beat a 384,000 km cosmic gap?",
  didYouKnow: [
    "Doubling 0.1 mm ({{10^(-4)}} m) 42 times gives {{10^(-4) * 2^42 ≈ 4.4 * 10^8}} m = 440,000 km — comfortably past the Moon's average distance of {{3.84 * 10^5}} km!",
    "A **googol** is {{10^100}} (named by nine-year-old Milton Sirotta in 1920), which is vastly bigger than the estimated {{10^80}} atoms in the entire observable universe.",
    "SI metric prefixes jump in powers of {{10^3}}: **nano** ({{10^(-9)}}), **micro** ({{10^(-6)}}), **milli** ({{10^(-3)}}), **kilo** ({{10^3}}), **mega** ({{10^6}}), **giga** ({{10^9}}), and **tera** ({{10^12}}).",
    "In computer science, {{2^10 = 1024}} sits remarkably close to {{10^3 = 1000}}, which is why a kilobyte (1,000 bytes) and a kibibyte (1,024 bytes) are almost — but not quite — identical!",
    "Every time you multiply a number in standard form by 10, you only increase its exponent by +1 — meaning a jump from {{10^6}} (one million) to {{10^9}} (one billion) is **a thousand times larger**, not 1.5 times larger!",
  ],
  activities: [
    {
      title: "The 42-Fold Moon Challenge",
      emoji: "🌙",
      materials: ["A sheet of A4 paper", "Ruler or tape measure", "Calculator"],
      steps: [
        "Fold a sheet of A4 paper in half as many times as you physically can (most people hit a wall at 7 folds!).",
        "Measure the thickness of a stack of 100 sheets (about 10 mm) to verify 1 sheet is roughly {{1 * 10^(-4)}} m thick.",
        "Build a table of thickness after 10, 20, 30 and 42 folds using {{10^(-4) * 2^n}} in standard form (hint: {{2^10 = 1024 ≈ 10^3}}!).",
        "Compare your 42-fold result to the Moon's distance ({{3.84 * 10^8}} m), then work out how many more folds it would take to reach the Sun ({{1.5 * 10^11}} m)!",
      ],
      maths:
        "Because {{2^10 ≈ 10^3}}, every 10 folds multiplies thickness by roughly 1,000 ({{10^3}}): 10 folds → 10 cm, 20 folds → 100 m, 30 folds → 100 km, 40 folds → 100,000 km, 42 folds → ~440,000 km!",
    },
    {
      title: "Quantum-to-Cosmic Order-of-Magnitude Sort",
      emoji: "🔭",
      materials: ["8 index cards or scraps of paper", "Pen"],
      steps: [
        "Write one item and its measurement in standard form on each card: atom radius ({{1 * 10^(-10)}} m), DNA width ({{2.5 * 10^(-9)}} m), virus ({{8 * 10^(-8)}} m), red blood cell ({{7.5 * 10^(-6)}} m), human hair ({{7 * 10^(-5)}} m), Marina Bay Sands height ({{2 * 10^2}} m), Mount Everest ({{8.85 * 10^3}} m), Earth's diameter ({{1.27 * 10^7}} m).",
        "Shuffle the cards and race a partner to order them from smallest to largest purely by scanning the powers of 10 first.",
        "Pick any two cards and divide the larger measurement by the smaller one in standard form to find how many times bigger one object is than the other!",
      ],
      maths:
        "Dividing two standard form measurements subtracts their exponents, instantly revealing scale ratios across 17 orders of magnitude — from {{10^(-10)}} m to {{10^7}} m.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Powers of 10: From Atoms to the Solar System",
      svg:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Logarithmic powers of ten ruler from nanometre DNA to Earth Sun distance">' +
        '<rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>' +
        '<text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Cosmic-to-Quantum Ruler (Each Tick = × 1000)</text>' +
        '<line x1="36" y1="126" x2="524" y2="126" stroke="var(--brand)" stroke-width="3.5" stroke-linecap="round"/>' +
        '<circle cx="52" cy="126" r="6" fill="var(--bad)"/><text x="52" y="152" text-anchor="middle" font-size="11" font-weight="800" fill="var(--bad)">10⁻⁹ m</text><text x="52" y="96" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">DNA</text><text x="52" y="110" text-anchor="middle" font-size="9" fill="var(--ink-2)">(nano)</text>' +
        '<circle cx="132" cy="126" r="6" fill="var(--bad)"/><text x="132" y="152" text-anchor="middle" font-size="11" font-weight="800" fill="var(--bad)">10⁻⁶ m</text><text x="132" y="96" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Blood Cell</text><text x="132" y="110" text-anchor="middle" font-size="9" fill="var(--ink-2)">(micro)</text>' +
        '<circle cx="212" cy="126" r="6" fill="var(--ink-2)"/><text x="212" y="152" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink-2)">10⁻³ m</text><text x="212" y="96" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Pinhead</text><text x="212" y="110" text-anchor="middle" font-size="9" fill="var(--ink-2)">(milli)</text>' +
        '<circle cx="292" cy="126" r="7" fill="var(--brand)"/><text x="292" y="152" text-anchor="middle" font-size="11" font-weight="800" fill="var(--brand)">10⁰ m</text><text x="292" y="96" text-anchor="middle" font-size="10" font-weight="800" fill="var(--brand)">1 Metre</text><text x="292" y="110" text-anchor="middle" font-size="9" fill="var(--ink-2)">(human)</text>' +
        '<circle cx="372" cy="126" r="6" fill="var(--good)"/><text x="372" y="152" text-anchor="middle" font-size="11" font-weight="800" fill="var(--good)">10³ m</text><text x="372" y="96" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Kilometre</text><text x="372" y="110" text-anchor="middle" font-size="9" fill="var(--ink-2)">(kilo)</text>' +
        '<circle cx="446" cy="126" r="6" fill="var(--good)"/><text x="446" y="152" text-anchor="middle" font-size="11" font-weight="800" fill="var(--good)">10⁷ m</text><text x="446" y="96" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Earth Ø</text><text x="446" y="110" text-anchor="middle" font-size="9" fill="var(--ink-2)">(12,700 km)</text>' +
        '<circle cx="514" cy="126" r="6" fill="var(--good)"/><text x="514" y="152" text-anchor="middle" font-size="11" font-weight="800" fill="var(--good)">10¹¹ m</text><text x="514" y="96" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Earth–Sun</text><text x="514" y="110" text-anchor="middle" font-size="9" fill="var(--ink-2)">(1.5×10¹¹)</text>' +
        '<rect x="34" y="176" width="492" height="54" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>' +
        '<text x="280" y="198" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">Standard form squeezes 20 orders of magnitude onto one ruler!</text>' +
        '<text x="280" y="217" text-anchor="middle" font-size="11" fill="var(--ink-2)">Earth–Sun ÷ DNA width ≈ (1.5 × 10¹¹) ÷ (2.5 × 10⁻⁹) = 6 × 10¹⁹ times wider.</text>' +
        '</svg>',
      caption: "Exponents turn multiplicative jumps of 1,000 into equal visual steps on a logarithmic scale.",
    },
    {
      title: "The Base-2 Power Family Tree",
      svg:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Change of base family tree showing 4, 8, 16 and 1/4 all expressing as powers of 2">' +
        '<rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>' +
        '<text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Change of Base: One Prime Trunk (Base 2)</text>' +
        '<rect x="215" y="42" width="130" height="40" rx="10" fill="var(--brand)" />' +
        '<text x="280" y="67" text-anchor="middle" font-size="15" font-weight="800" fill="#ffffff">Common Base: 2</text>' +
        '<line x1="230" y1="82" x2="80" y2="128" stroke="var(--brand)" stroke-width="2"/>' +
        '<line x1="260" y1="82" x2="210" y2="128" stroke="var(--brand)" stroke-width="2"/>' +
        '<line x1="300" y1="82" x2="350" y2="128" stroke="var(--brand)" stroke-width="2"/>' +
        '<line x1="330" y1="82" x2="480" y2="128" stroke="var(--good)" stroke-width="2"/>' +
        '<rect x="22" y="128" width="116" height="58" rx="9" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>' +
        '<text x="80" y="150" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">4 = 2²</text>' +
        '<text x="80" y="172" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">4ⁿ = 2²ⁿ</text>' +
        '<rect x="152" y="128" width="116" height="58" rx="9" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>' +
        '<text x="210" y="150" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">8 = 2³</text>' +
        '<text x="210" y="172" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">8ⁿ = 2³ⁿ</text>' +
        '<rect x="292" y="128" width="116" height="58" rx="9" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>' +
        '<text x="350" y="150" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">16 = 2⁴</text>' +
        '<text x="350" y="172" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">16ⁿ = 2⁴ⁿ</text>' +
        '<rect x="422" y="128" width="116" height="58" rx="9" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>' +
        '<text x="480" y="150" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">1/8 = 2⁻³</text>' +
        '<text x="480" y="172" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">(1/8)ⁿ = 2⁻³ⁿ</text>' +
        '<rect x="34" y="200" width="492" height="36" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.2"/>' +
        '<text x="280" y="223" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">Example: 8⁴ × 4³ ÷ (1/16) = 2¹² × 2⁶ ÷ 2⁻⁴ = 2²²</text>' +
        '</svg>',
      caption: "Once every number is rewritten on the same prime trunk, ordinary addition and subtraction of indices solves the whole expression.",
    },
  ],
  history: {
    title: "Archimedes & The Sand Reckoner (c. 240 BCE)",
    story:
      "In ancient Greece, the largest named number was a *myriad* (10,000). Critics claimed the number of grains of sand on Sicily's beaches was 'infinite'. Around 240 BCE, Archimedes wrote *The Sand Reckoner* to prove them wrong: he invented a brand-new exponent-like system built from powers of {{10^8}} (a 'myriad of myriads') and proved the entire known universe packed solid with sand would hold fewer than {{10^63}} grains! Along the way, he explicitly stated the multiplication index law ({{10^a * 10^b = 10^(a+b)}}) nearly 1,800 years before modern standard form notation arrived.",
  },
};
