import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Why does 1 ÷ 7 dance through the exact same six digits (1-4-2-8-5-7) in every multiple from 1/7 to 6/7 — and why does a +20% raise followed by a −20% cut actually leave you poorer?",
  didYouKnow: [
    "The number 142857 from {{1/7 = 0.142857142857...}} is a **cyclic number**: multiply it by 2, 3, 4, 5 or 6 and you get the exact same six digits rotated in a circle (285714, 428571, 571428, 714285, 857142) — and multiply by 7 to get 999999!",
    "Mathematically, 0.9̇ (`0.99999…`) is NOT 'just shy of 1' — it is **strictly equal to 1**! Let {{x = 0.999...}}, then {{10x - x = 9x = 9}}, so {{x = 1}}. There is no real number that fits between 0.9̇ and 1.",
    "In base 12 (the dozenal system), {{1/3 = 0.4}} and {{1/6 = 0.2}} terminate cleanly — whether a fraction recurs depends on the number base we count in, not on the fraction itself!",
    "When Singapore's GST is 9%, retailers find the pre-tax price from a GST-inclusive receipt by dividing by {{1.09}}, because multiplying by {{0.91}} would undercount by {{1 - 1.09 * 0.91 = 0.0081}} (0.81%).",
    "Cancelling a factor like {{(x - 3)}} in {{(x^2 - 9)/(x - 3) = x + 3}} holds for every number *except* {{x = 3}}, where the original fraction creates a tiny invisible 'hole' ({{0/0}}) on its graph!",
  ],
  activities: [
    {
      title: "The Cyclic Wheel of Sevenths",
      emoji: "🎡",
      materials: ["Paper and pen", "A small coin or counter"],
      steps: [
        "Draw a circle and write the six digits `1, 4, 2, 8, 5, 7` evenly around the rim in clockwise order.",
        "Use short division to work out {{1/7}}, {{2/7}}, {{3/7}}, {{4/7}}, {{5/7}} and {{6/7}} up to 6 decimal places.",
        "Place your coin on the starting digit of each decimal (e.g. `4` for {{3/7}}) and trace clockwise around the wheel.",
        "Predict what {{7/7}} gives by adding `0.142857… + 0.857142…` column by column!",
      ],
      maths:
        "When dividing by 7, there are only 6 possible non-zero remainders (1, 2, 3, 4, 5, 6). Because {{1/7}} visits all 6 remainders before repeating, every other fraction {{k/7}} simply enters the exact same remainder cycle at a different starting gate!",
    },
    {
      title: "Supermarket Shrinkflation & Best-Buy Detective",
      emoji: "🛒",
      materials: ["3 pairs of supermarket product prices (online or pantry labels)", "Calculator"],
      steps: [
        "Pick two different pack sizes of the same product (e.g. 350 g vs 500 g cereal, or 750 ml vs 1.25 L juice).",
        "Compute the exact unit price per 100 g or per 100 ml for both sizes and record which is cheaper.",
        "Now suppose a manufacturer shrinks a 400 g bar to 320 g while keeping the price at £2.40: work out the **price per 100 g** before and after.",
        "Use the percentage change formula to find the hidden percentage price increase — notice a 20% weight cut causes a **25% unit-price rise** ({{1 / 0.8 = 1.25}})!",
      ],
      maths:
        "Unit-ratio comparisons expose hidden shrinkflation instantly: cutting quantity by multiplier {{0.8}} scales cost-per-gram by its reciprocal {{1 / 0.8 = 1.25}} (+25%).",
    },
  ],
  bonusDiagrams: [
    {
      title: "The Cyclic Wheel of 1/7 (1-4-2-8-5-7)",
      svg:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cyclic wheel showing digits 1 4 2 8 5 7 repeating for all multiples of one seventh">' +
        '<rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>' +
        '<text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">The Cyclic Wheel of Sevenths (142857)</text>' +
        '<circle cx="155" cy="135" r="72" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="2.5"/>' +
        '<circle cx="155" cy="63" r="17" fill="var(--brand)"/><text x="155" y="68" text-anchor="middle" font-size="14" font-weight="800" fill="#ffffff">1</text>' +
        '<circle cx="217" cy="99" r="17" fill="var(--brand)"/><text x="217" y="104" text-anchor="middle" font-size="14" font-weight="800" fill="#ffffff">4</text>' +
        '<circle cx="217" cy="171" r="17" fill="var(--brand)"/><text x="217" y="176" text-anchor="middle" font-size="14" font-weight="800" fill="#ffffff">2</text>' +
        '<circle cx="155" cy="207" r="17" fill="var(--brand)"/><text x="155" y="212" text-anchor="middle" font-size="14" font-weight="800" fill="#ffffff">8</text>' +
        '<circle cx="93" cy="171" r="17" fill="var(--brand)"/><text x="93" y="176" text-anchor="middle" font-size="14" font-weight="800" fill="#ffffff">5</text>' +
        '<circle cx="93" cy="99" r="17" fill="var(--brand)"/><text x="93" y="104" text-anchor="middle" font-size="14" font-weight="800" fill="#ffffff">7</text>' +
        '<text x="155" y="132" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">Read</text>' +
        '<text x="155" y="148" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">clockwise →</text>' +
        '<rect x="276" y="46" width="264" height="184" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>' +
        '<text x="294" y="72" font-size="12" font-weight="800" fill="var(--ink)">1/7 = 0.1̇42857̇   (starts at 1)</text>' +
        '<text x="294" y="96" font-size="12" font-weight="700" fill="var(--ink)">2/7 = 0.2̇85714̇   (starts at 2)</text>' +
        '<text x="294" y="120" font-size="12" font-weight="700" fill="var(--ink)">3/7 = 0.4̇28571̇   (starts at 4)</text>' +
        '<text x="294" y="144" font-size="12" font-weight="700" fill="var(--ink)">4/7 = 0.5̇71428̇   (starts at 5)</text>' +
        '<text x="294" y="168" font-size="12" font-weight="700" fill="var(--ink)">5/7 = 0.7̇14285̇   (starts at 7)</text>' +
        '<text x="294" y="192" font-size="12" font-weight="700" fill="var(--ink)">6/7 = 0.8̇57142̇   (starts at 8)</text>' +
        '<text x="408" y="218" text-anchor="middle" font-size="11" font-weight="800" fill="var(--good)">Same 6 digits, 6 starting gates!</text>' +
        '</svg>',
      caption: "Every proper seventh enters the exact same 6-digit remainder cycle at a different starting digit.",
    },
    {
      title: "Why +20% Followed by −20% Loses 4%",
      svg:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Visual proof that increasing by 20 percent then decreasing by 20 percent leaves 96 percent">' +
        '<rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>' +
        '<text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">The +20% Then −20% Illusion (1.2 × 0.8 = 0.96)</text>' +
        '<text x="34" y="64" font-size="12" font-weight="800" fill="var(--ink)">Start</text>' +
        '<rect x="96" y="46" width="250" height="28" rx="6" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>' +
        '<text x="221" y="65" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">£100 (100%)</text>' +
        '<text x="34" y="114" font-size="12" font-weight="800" fill="var(--good)">+20%</text>' +
        '<rect x="96" y="96" width="250" height="28" rx="6" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>' +
        '<rect x="346" y="96" width="50" height="28" rx="6" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>' +
        '<text x="221" y="115" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">£100</text>' +
        '<text x="371" y="115" text-anchor="middle" font-size="11" font-weight="800" fill="var(--good)">+£20</text>' +
        '<text x="412" y="115" font-size="12" font-weight="800" fill="var(--good)">= £120</text>' +
        '<text x="34" y="164" font-size="12" font-weight="800" fill="var(--bad)">−20%</text>' +
        '<rect x="96" y="146" width="240" height="28" rx="6" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>' +
        '<rect x="336" y="146" width="60" height="28" rx="6" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5" stroke-dasharray="4 3"/>' +
        '<text x="216" y="165" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">£96 remains</text>' +
        '<text x="366" y="165" text-anchor="middle" font-size="11" font-weight="800" fill="var(--bad)">−£24</text>' +
        '<text x="412" y="165" font-size="12" font-weight="800" fill="var(--bad)">(20% of 120!)</text>' +
        '<rect x="44" y="192" width="472" height="42" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>' +
        '<text x="280" y="210" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">The −20% cuts £20 from the original £100 AND £4 from the +£20 gain!</text>' +
        '<text x="280" y="226" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">In general: (1 + r)(1 − r) = 1 − r² &lt; 1  (always a net loss!)</text>' +
        '</svg>',
      caption: "An equal percentage rise and fall always produces a net decrease of r² — here (0.2)² = 0.04 = 4%.",
    },
  ],
  history: {
    title: "Simon Stevin & the 1585 Decimal Revolution",
    story:
      "Before 1585, European merchants and astronomers wrestled with awkward fractions like {{7/24}} and sexagesimal (base-60) parts whenever they calculated interest or tax. In that year, Flemish engineer Simon Stevin published a slim 36-page booklet called *De Thiende* ('The Tenth'), arguing that all fractions, measurements and money should be written in base-10 decimals. Although his notation looked quirky (writing `3.14` as `3⓪1①4②`), his insight that decimal arithmetic turns fractional scaling into ordinary whole-number multiplication paved the way for modern decimal multipliers, compound interest tables and metric ratios worldwide.",
  },
};
