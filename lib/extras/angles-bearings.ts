import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Over 2,200 years ago, a Greek librarian measured the circumference of the entire Earth to within 2% accuracy using nothing but two sticks, a well, and **alternate angles on parallel sun rays**!",
  didYouKnow: [
    "Every airport runway on Earth is named after its three-figure magnetic bearing divided by {{10}} — Singapore Changi's Runway **02L / 20R** faces **{{020°}}** going north-northeast and its exact back bearing **{{200°}}** coming back!",
    "Only **three** regular polygons can tile a flat floor by themselves: equilateral triangles ({{6 * 60° = 360°}}), squares ({{4 * 90° = 360°}}), and regular hexagons ({{3 * 120° = 360°}}). Every other regular polygon leaves either a gap or an overlap!",
    "Honeybees build hexagonal cells because {{120°}} joints use the least possible beeswax to enclose a given volume of honey — and NASA engineers copied the exact same regular-hexagon tiling for the James Webb Space Telescope's giant golden mirror.",
    "During Tanglin's Gippsland fieldwork and maritime orienteering, navigators take bearings to **two** visible peaks and draw their **back bearings** on a map — the exact crossing point of those two rays pinpoints where you are standing (called *resection*).",
  ],
  activities: [
    {
      title: "Classroom Compass Resection Hunt",
      emoji: "🧭",
      materials: ["A magnetic compass or phone compass app", "360° protractor, ruler, and squared paper", "Two labelled classroom landmarks (A and B)"],
      steps: [
        "Draw a simple scale map of your room with North pointing straight up and mark landmarks A and B at measured scale positions.",
        "Stand at a mystery spot P, sight the bearing from P to A and the bearing from P to B.",
        "Compute both **back bearings** (the bearing of P from A and the bearing of P from B) using the {{±180°}} rule.",
        "Draw both back-bearing rays from A and B on your scale map — their intersection marks your exact standing spot P!",
      ],
      maths: "You apply parallel North lines, three-figure bearings, back bearings, and scale drawings just like real coastal navigators and Gippsland expedition teams.",
    },
    {
      title: "Walk the Exterior Angle Proof",
      emoji: "🚶",
      materials: ["Masking tape to outline an irregular pentagon on the floor", "Chalk or sticky notes"],
      steps: [
        "Tape a large irregular pentagon (or hexagon) on the floor — make the sides completely unequal!",
        "Stand on one edge holding a ruler straight ahead like a nose pointer. Walk to the first corner and pivot to line up with the next edge — that pivot is the **exterior angle**.",
        "Repeat around every corner until you return to your starting spot facing the exact same wall.",
        "Count how many full spins your body completed: **exactly one full {{360°}} turn**, proving the exterior angle sum is {{360°}} for EVERY convex polygon!",
      ],
      maths: "Physical rotation turns the abstract formula 'sum of exterior angles = 360°' into an unforgettable geometric invariant.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Regular Tessellation Test: 360° Around a Vertex",
      svg:
        '<svg viewBox="0 0 560 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four vertex diagrams showing triangles, squares, and hexagons summing to 360 degrees while three pentagons leave a 36 degree gap">' +
        '<rect x="0" y="0" width="560" height="215" rx="10" fill="var(--surface)"/>' +
        '<g>' +
        '<rect x="14" y="16" width="124" height="182" rx="9" fill="var(--surface-2)" stroke="var(--line)"/>' +
        '<polygon points="76,94 114,94 95,61" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.6"/>' +
        '<polygon points="76,94 95,61 57,61" fill="var(--brand-soft)" stroke="var(--good)" stroke-width="1.6"/>' +
        '<polygon points="76,94 57,61 38,94" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.6"/>' +
        '<polygon points="76,94 38,94 57,127" fill="var(--brand-soft)" stroke="var(--good)" stroke-width="1.6"/>' +
        '<polygon points="76,94 57,127 95,127" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.6"/>' +
        '<polygon points="76,94 95,127 114,94" fill="var(--brand-soft)" stroke="var(--good)" stroke-width="1.6"/>' +
        '<circle cx="76" cy="94" r="3" fill="var(--ink)"/>' +
        '<text x="76" y="158" font-size="11.5" font-weight="800" text-anchor="middle" fill="var(--good)">6 × 60° = 360° ✓</text>' +
        '<text x="76" y="176" font-size="10" text-anchor="middle" fill="var(--ink-2)">Equilateral triangles</text>' +
        '</g>' +
        '<g>' +
        '<rect x="150" y="16" width="124" height="182" rx="9" fill="var(--surface-2)" stroke="var(--line)"/>' +
        '<rect x="178" y="60" width="34" height="34" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.6"/>' +
        '<rect x="212" y="60" width="34" height="34" fill="var(--brand-soft)" stroke="var(--good)" stroke-width="1.6"/>' +
        '<rect x="178" y="94" width="34" height="34" fill="var(--brand-soft)" stroke="var(--good)" stroke-width="1.6"/>' +
        '<rect x="212" y="94" width="34" height="34" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.6"/>' +
        '<circle cx="212" cy="94" r="3" fill="var(--ink)"/>' +
        '<text x="212" y="158" font-size="11.5" font-weight="800" text-anchor="middle" fill="var(--good)">4 × 90° = 360° ✓</text>' +
        '<text x="212" y="176" font-size="10" text-anchor="middle" fill="var(--ink-2)">Squares</text>' +
        '</g>' +
        '<g>' +
        '<rect x="286" y="16" width="124" height="182" rx="9" fill="var(--surface-2)" stroke="var(--line)"/>' +
        '<line x1="348" y1="94" x2="348" y2="56" stroke="var(--good)" stroke-width="2.2"/>' +
        '<line x1="348" y1="94" x2="381" y2="113" stroke="var(--good)" stroke-width="2.2"/>' +
        '<line x1="348" y1="94" x2="315" y2="113" stroke="var(--good)" stroke-width="2.2"/>' +
        '<circle cx="348" cy="94" r="34" fill="none" stroke="var(--good)" stroke-width="1.4" stroke-dasharray="4 3"/>' +
        '<text x="368" y="82" font-size="10" font-weight="800" fill="var(--good)">120°</text>' +
        '<text x="328" y="82" font-size="10" font-weight="800" text-anchor="end" fill="var(--good)">120°</text>' +
        '<text x="348" y="122" font-size="10" font-weight="800" text-anchor="middle" fill="var(--good)">120°</text>' +
        '<circle cx="348" cy="94" r="3" fill="var(--ink)"/>' +
        '<text x="348" y="158" font-size="11.5" font-weight="800" text-anchor="middle" fill="var(--good)">3 × 120° = 360° ✓</text>' +
        '<text x="348" y="176" font-size="10" text-anchor="middle" fill="var(--ink-2)">Regular hexagons</text>' +
        '</g>' +
        '<g>' +
        '<rect x="422" y="16" width="124" height="182" rx="9" fill="var(--surface-2)" stroke="var(--line)"/>' +
        '<path d="M 484,94 L 484,56 A 38,38 0 0 1 520.1,105.7 Z" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.6"/>' +
        '<path d="M 484,94 L 520.1,105.7 A 38,38 0 0 1 461.7,124.7 Z" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.6"/>' +
        '<path d="M 484,94 L 461.7,124.7 A 38,38 0 0 1 461.7,63.3 Z" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.6"/>' +
        '<path d="M 484,94 L 461.7,63.3 A 38,38 0 0 1 484,56 Z" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="2"/>' +
        '<circle cx="484" cy="94" r="3" fill="var(--ink)"/>' +
        '<text x="466" y="49" font-size="10.5" font-weight="800" fill="var(--bad)">36° gap!</text>' +
        '<text x="484" y="158" font-size="11.5" font-weight="800" text-anchor="middle" fill="var(--bad)">3 × 108° = 324° ✗</text>' +
        '<text x="484" y="176" font-size="10" text-anchor="middle" fill="var(--ink-2)">Pentagons leave 36°</text>' +
        '</g>' +
        '</svg>',
      caption: "Only interior angles that divide 360° evenly (60°, 90°, 120°) can tile a flat surface without leaving a gap.",
    },
    {
      title: "Eratosthenes Measures the Earth Using Alternate Angles (240 BCE)",
      svg:
        '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of Earth with parallel sun rays hitting Syene and Alexandria showing equal 7.2 degree alternate angles">' +
        '<rect x="0" y="0" width="560" height="220" rx="10" fill="var(--surface)"/>' +
        '<circle cx="220" cy="115" r="76" fill="var(--brand-soft)" opacity="0.5" stroke="var(--brand)" stroke-width="2.4"/>' +
        '<circle cx="220" cy="115" r="3.5" fill="var(--ink)"/>' +
        '<line x1="28" y1="115" x2="220" y2="115" stroke="var(--good)" stroke-width="2.4"/>' +
        '<line x1="28" y1="68" x2="188" y2="68" stroke="var(--good)" stroke-width="2.4"/>' +
        '<polyline points="62,110 72,115 62,120" fill="none" stroke="var(--good)" stroke-width="2"/>' +
        '<polyline points="62,63 72,68 62,73" fill="none" stroke="var(--good)" stroke-width="2"/>' +
        '<line x1="220" y1="115" x2="132" y2="55" stroke="var(--bad)" stroke-width="2.4"/>' +
        '<circle cx="144" cy="115" r="4" fill="var(--ink)"/>' +
        '<circle cx="157" cy="72" r="4" fill="var(--ink)"/>' +
        '<text x="34" y="54" font-size="10.5" font-weight="800" fill="var(--good)">Parallel Sun Rays</text>' +
        '<text x="128" y="132" font-size="10.5" font-weight="700" fill="var(--ink)">Syene (0°)</text>' +
        '<text x="108" y="45" font-size="10.5" font-weight="700" fill="var(--ink)">Alexandria</text>' +
        '<text x="186" y="106" font-size="11" font-weight="800" fill="var(--bad)">7.2°</text>' +
        '<text x="115" y="65" font-size="11" font-weight="800" fill="var(--bad)">7.2°</text>' +
        '<text x="220" y="206" font-size="10.5" font-weight="700" text-anchor="middle" fill="var(--ink-2)">Earth Centre — Alternate angles are equal!</text>' +
        '<rect x="330" y="24" width="214" height="172" rx="10" fill="var(--surface-2)" stroke="var(--line)"/>' +
        '<text x="344" y="48" font-size="13" font-weight="800" fill="var(--ink)">The 7.2° Calculation</text>' +
        '<text x="344" y="74" font-size="11" fill="var(--ink)">1. Shadow angle = 7.2°</text>' +
        '<text x="344" y="94" font-size="11" font-weight="700" fill="var(--bad)">2. Alternate ∠ at centre = 7.2°</text>' +
        '<text x="344" y="114" font-size="11" fill="var(--ink)">3. Fraction of circle = 7.2° / 360°</text>' +
        '<text x="344" y="134" font-size="11" font-weight="800" fill="var(--brand)">   = 1 / 50 of the Earth!</text>' +
        '<text x="344" y="158" font-size="11" fill="var(--ink-2)">Distance Syene→Alexandria ≈ 800 km</text>' +
        '<text x="344" y="178" font-size="11.5" font-weight="800" fill="var(--good)">Circumference ≈ 50 × 800 = 40,000 km!</text>' +
        '</svg>',
      caption: "Parallel sunlight turned a tiny 7.2° obelisk shadow into the first accurate measurement of our planet's circumference.",
    },
  ],
  history: {
    title: "Eratosthenes, Parallel Sun Rays & the Birth of Bearings",
    story:
      "Around 240 BCE, Eratosthenes — chief librarian of Alexandria — read that at noon on the summer solstice in southern Syene, the Sun shone straight to the bottom of a deep well with zero shadow. On the exact same day and hour in Alexandria (about 800 km due North), an upright obelisk cast a shadow at an angle of 7.2° (1/50 of a full 360° circle). Treating the Sun's rays as parallel lines, Eratosthenes realised the angle at the centre of the Earth had to be an **alternate angle** of 7.2° too — so multiplying 800 km by 50 gave 40,000 km, astoundingly close to the modern equatorial circumference of 40,075 km! Fifteen centuries later, magnetic compasses paired with 360° graduations gave ocean voyagers three-figure bearings — turning parallel North lines into the backbone of global navigation.",
  },
};
