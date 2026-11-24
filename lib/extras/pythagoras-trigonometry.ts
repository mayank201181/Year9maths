import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Over 1,000 years BEFORE Pythagoras was even born, Babylonian scribes were already carving giant Pythagorean triples like (119, 120, 169) and (12709, 13500, 18541) into clay tablets!",
  didYouKnow: [
    "There are over 370 published proofs of Pythagoras' theorem — including an original trapezoid proof discovered by U.S. President James A. Garfield in 1876!",
    "Ancient Egyptian 'rope stretchers' knotted a loop of rope into 12 equal spaces and pulled it tight into a 3–4–5 triangle to lay out exact 90° temple corners.",
    "The word 'sine' took a wild translation journey: Sanskrit 'jya' (bowstring) → Arabic 'jiba' → misread as 'jaib' (bay/fold) → Latin 'sinus' (curve/pocket) → English 'sine'!",
    "In 1852, Indian mathematician Radhanath Sikdar used precision angle-of-elevation measurements and trigonometry from over 170 km away to identify Peak XV (Mount Everest) as the highest mountain on Earth.",
    "Every time your smartphone renders a 3D video game or computes your GPS location from satellites, it runs millions of Pythagoras and SOHCAHTOA calculations per second!",
  ],
  activities: [
    {
      title: "Build an Egyptian 12-Knot Right-Angle Rope",
      emoji: "🪢",
      materials: ["A 1.5 m piece of string", "A ruler and marker pen", "Three push-pins or tape on a flat surface"],
      steps: [
        "Tie a small loop at one end, then mark and knot 12 equally spaced intervals (e.g. every 10 cm) along the string and tie the ends into a closed loop of 12 equal segments.",
        "Pin or hold corners after 3 segments, then 4 more segments, leaving 5 segments on the third side, pulling all three sides taut.",
        "Check the corner between the 3-unit and 4-unit sides with a set square or corner of a textbook — it snaps into an exact 90° angle!",
      ],
      maths:
        "Because 3² + 4² = 9 + 16 = 25 = 5², the converse of Pythagoras' theorem guarantees the angle opposite the 5-unit side is strictly 90° without needing a protractor!",
    },
    {
      title: "Paper-Protractor Clinometer Height Challenge",
      emoji: "📏",
      materials: ["A protractor", "A drinking straw taped along the straight edge", "A small weight (paperclip) hanging on thread from the centre hole", "A tape measure"],
      steps: [
        "Stand a measured horizontal distance d (e.g. 10 m) from a tall school building, flagpole, or basketball hoop.",
        "Look through the straw at the very top of the object while a partner reads where the hanging thread crosses the protractor scale: elevation angle θ = 90° − reading.",
        "Calculate the height above eye level using h = d × tan(θ), then add your own eye height off the ground!",
      ],
      maths:
        "Your eye, the building base, and the building top form a right-angled triangle where horizontal distance d is Adjacent and vertical rise h is Opposite — unlocking unreachable heights with TOA!",
    },
  ],
  bonusDiagrams: [
    {
      title: "Bhāskara's 'Behold!' Dissection Proof of a² + b² = c²",
      svg: `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bhaskara geometric dissection proof showing four congruent right-angled triangles arranged inside a c by c square leaving a central (b minus a) squared hole">
  <rect x="0" y="0" width="560" height="220" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Bhāskara's Proof (12th Century): "Behold!" c² = 4(½ab) + (b − a)²</text>
  <!-- Left: c x c square (side 150px) at (50, 44). Right triangles have legs a=60, b=90? Wait a^2+b^2=c^2 so in tilted visual make outer square side 150: put inner square at centre -->
  <!-- With a=54, b=114 -> Wait inner square side = b-a = 60, legs along inner/outer: actually outer square is c x c, vertices (50,44),(200,44),(200,194),(50,194) -->
  <!-- Wait in Bhaskara: 4 right triangles of hyp c along outer edges, right angles meet at 4 interior points! For 3-4-5: c=150 -> a=90, b=120! -->
  <!-- Check 3-4-5 with scale 30: hyp=150, a=90, b=120. Angle alpha = atan(3/4): cos=0.8, sin=0.6 -->
  <!-- Corner (50,44) to (200,44): leg b=120 at angle alpha=(0.8,0.6) -> (50+96, 44+72)=(146,116)! Wait let's check distance from (146,116) to (200,44): dx=54, dy=-72, len=90! YES! -->
  <!-- Rotate 90 around centre (125, 119): -->
  <!-- P1=(146, 116) -> rel=(21, -3); P2=(125+3, 119+21)=(128,140); P3=(104,122); P4=(122,98) -->
  <!-- Wait exact 3-4-5: inner square side = b-a = 30! Let's check P1=(146,116) vs P4=(122,98): dx=24, dy=18, dist=30! EXACT! -->
  <!-- Check P2=(128,140) to (200,194): dx=72, dy=54, len=90! P2 to (200,44): dx=72, dy=-96, len=120! EXACT!! -->
  <g>
    <rect x="50" y="44" width="150" height="150" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2"/>
    <!-- 4 congruent 3-4-5 right triangles -->
    <polygon points="50,44 200,44 146,116" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.8"/>
    <polygon points="200,44 200,194 128,140" fill="var(--brand-soft)" fill-opacity="0.7" stroke="var(--brand)" stroke-width="1.8"/>
    <polygon points="200,194 50,194 104,122" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.8"/>
    <polygon points="50,194 50,44 122,98" fill="var(--brand-soft)" fill-opacity="0.7" stroke="var(--brand)" stroke-width="1.8"/>
    <!-- Central square (b-a)^2 -->
    <polygon points="122,98 146,116 128,140 104,122" fill="var(--surface)" stroke="var(--bad)" stroke-width="2"/>
    <text x="125" y="123" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--bad)">(b−a)²</text>
    <!-- Side labels -->
    <text x="125" y="38" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">c</text>
    <text x="208" y="122" font-size="11.5" font-weight="700" fill="var(--ink)">c</text>
    <text x="95" y="75" font-size="10.5" font-weight="700" fill="var(--brand)">b</text>
    <text x="175" y="88" font-size="10.5" font-weight="700" fill="var(--good)">a</text>
  </g>
  <!-- Right algebra box -->
  <g transform="translate(244, 44)">
    <rect x="0" y="0" width="296" height="150" rx="10" fill="var(--surface-2)" stroke="var(--line)"/>
    <text x="16" y="26" font-size="12" font-weight="800" fill="var(--ink)">Why It Proves Pythagoras in 3 Lines:</text>
    <text x="16" y="52" font-size="11.5" fill="var(--ink-2)">1. Outer square area = c²</text>
    <text x="16" y="74" font-size="11.5" fill="var(--ink-2)">2. Four triangles + centre square:</text>
    <text x="28" y="96" font-size="12" font-weight="700" fill="var(--brand)">c² = 4 × (½ab) + (b − a)²</text>
    <text x="16" y="118" font-size="11.5" fill="var(--ink-2)">3. Expand (b − a)² = b² − 2ab + a²:</text>
    <text x="28" y="139" font-size="12.5" font-weight="800" fill="var(--good)">c² = 2ab + b² − 2ab + a² = a² + b² ✓</text>
  </g>
</svg>`,
      caption: "Indian mathematician Bhāskara II drew this exact square dissection and wrote a single word underneath: 'Behold!'",
    },
    {
      title: "Angle of Elevation vs Angle of Depression (Always from Horizontal!)",
      svg: `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram comparing angle of elevation from a boat up to a cliff top and angle of depression from the cliff top down to the boat showing they are equal alternate angles">
  <rect x="0" y="0" width="560" height="220" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Angle of Elevation = Angle of Depression (Alternate Angles!)</text>
  <!-- Cliff on left: x=50..120, top at y=66, sea at y=184 -->
  <rect x="40" y="66" width="80" height="118" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.8"/>
  <text x="80" y="130" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">Cliff (h)</text>
  <!-- Sea horizontal line -->
  <line x1="120" y1="184" x2="500" y2="184" stroke="var(--brand)" stroke-width="2.2"/>
  <!-- Upper horizontal dashed line from cliff top (120,66) -->
  <line x1="120" y1="66" x2="460" y2="66" stroke="var(--ink-2)" stroke-width="1.6" stroke-dasharray="6,4"/>
  <text x="412" y="59" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--ink-2)">Horizontal sightline</text>
  <!-- Line of sight from cliff top (120,66) to boat (440,184) -->
  <line x1="120" y1="66" x2="440" y2="184" stroke="var(--bad)" stroke-width="2.2"/>
  <!-- Right angle at cliff base -->
  <polyline points="120,172 132,172 132,184" fill="none" stroke="var(--ink)" stroke-width="1.6"/>
  <!-- Depression arc at (120,66) -->
  <path d="M 190 66 A 70 70 0 0 1 186 90" fill="none" stroke="var(--good)" stroke-width="2.2"/>
  <text x="200" y="84" font-size="11" font-weight="800" fill="var(--good)">θ (Depression)</text>
  <!-- Elevation arc at (440,184) -->
  <path d="M 370 184 A 70 70 0 0 1 374 160" fill="none" stroke="var(--good)" stroke-width="2.2"/>
  <text x="305" y="176" text-anchor="middle" font-size="11" font-weight="800" fill="var(--good)">θ (Elevation)</text>
  <!-- Boat dot -->
  <circle cx="440" cy="184" r="5" fill="var(--brand)"/>
  <text x="456" y="180" font-size="11.5" font-weight="700" fill="var(--brand)">Boat</text>
  <text x="280" y="206" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink-2)">NEVER measure depression from the vertical wall — always measure from the HORIZONTAL!</text>
</svg>`,
      caption: "Both angles are measured from parallel horizontal sightlines, making them equal alternate angles.",
    },
  ],
  history: {
    title: "Plimpton 322 & Hipparchus: 3,800 Years of Right Triangles",
    story:
      "Around 1800 BCE in ancient Babylon — more than a millennium before Pythagoras of Samos was born — an unknown mathematician pressed 15 rows of cuneiform numbers into a palm-sized clay tablet now called **Plimpton 322**. Decoded in the 20th century, the tablet turned out to be an astonishingly accurate list of exact right-angled triangles (Pythagorean triples), including massive whole-number triples like (4601, 4800, 6649)! Centuries later, around 140 BCE, the Greek astronomer **Hipparchus of Nicaea** built the first systematic table of chord lengths in circles to predict eclipses and track planets — inventing **trigonometry** ('triangle measurement'). Indian astronomers like Āryabhaṭa later replaced full chords with half-chords (modern **sine**), laying the exact mathematical foundation behind the sin, cos, and tan buttons on your calculator today!",
  },
};
