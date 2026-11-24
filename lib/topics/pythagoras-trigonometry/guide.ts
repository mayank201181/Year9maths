import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "pythagoras-trigonometry",
  title: "Pythagoras' Theorem & Trigonometry",
  strand: "Geometry & Measure",
  icon: "📐",
  summary:
    "Label right-angled triangles cleanly, solve 2D distance and height problems with Pythagoras' theorem, and unlock SOHCAHTOA via similar right-angled triangles.",
  intro:
    "Right-angled triangles are the hidden skeleton of geometry, engineering, architecture, and navigation. Split any rectangle, isosceles triangle, coordinate journey, or slope cleanly at {{90°}} and two legendary tools spring into action: **Pythagoras' theorem** connects all three side lengths ({{a^2 + b^2 = c^2}}), while **trigonometry** (SOHCAHTOA) connects side lengths to acute angles through the power of similar right-angled triangles.",
  guide: [
    {
      id: "right-triangle-language",
      heading: "Labelling Right-Angled Triangles",
      discovery: {
        problem:
          "Draw a right-angled triangle {{ABC}} with the {{90°}} angle at {{B}}, horizontal base {{AB = 8 cm}}, vertical height {{BC = 6 cm}}, and slanted side {{AC = 10 cm}}. Relative to angle {{∠A}}, which side is across the triangle from {{A}}? Now switch your viewpoint to angle {{∠C}} — which side changed its job, and which side NEVER changed?",
        idea:
          "Side {{AC = 10 cm}} is ALWAYS the **hypotenuse** because it sits directly opposite the {{90°}} angle. However, the **opposite** and **adjacent** sides swap roles whenever you switch from one acute angle to the other: for {{∠A}}, {{BC}} is opposite and {{AB}} is adjacent; for {{∠C}}, {{AB}} is opposite and {{BC}} is adjacent!",
      },
      body:
        "Before touching Pythagoras or trigonometry, you MUST label the three sides of a right-angled triangle accurately — even when the triangle is tilted, upside down, or rotated!\n\n" +
        "**The 3-step labelling protocol (always in this order):**\n" +
        "1. **Hypotenuse (H):** Find the right-angle square ({{90°}}) and shoot an arrow straight across the triangle. That side is ALWAYS the **hypotenuse** — it is also ALWAYS the **longest** side of the right-angled triangle.\n" +
        "2. **Opposite (O):** Stand at the marked acute angle {{theta}} and look straight across the triangle. The side that does **not** touch angle {{theta}} is the **opposite**.\n" +
        "3. **Adjacent (A):** The remaining side next to angle {{theta}} (connecting {{theta}} to the {{90°}} angle) is the **adjacent**.\n\n" +
        "**Perpendicular sides:** The two shorter sides meeting at {{90°}} are **perpendicular** to each other (symbol {{⊥}}). In an isosceles triangle or a trapezium, dropping a **perpendicular height** straight down at {{90°}} creates right-angled triangles you can immediately solve!",
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two identical right-angled triangles side by side showing that the hypotenuse H never changes while Opposite O and Adjacent A swap when switching from angle theta to angle phi">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <!-- Left triangle: angle theta at bottom-left -->
  <text x="145" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">View from Angle θ (Bottom-Left)</text>
  <g transform="translate(20, 34)">
    <rect x="0" y="0" width="250" height="196" rx="8" fill="var(--surface-2)" stroke="var(--line)"/>
    <polygon points="36,162 206,162 206,46" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="2"/>
    <!-- Right angle at (206,162) -->
    <polyline points="192,162 192,148 206,148" fill="none" stroke="var(--ink)" stroke-width="1.8"/>
    <!-- Angle theta arc at (36,162) -->
    <path d="M 74 162 A 38 38 0 0 0 67 141" fill="none" stroke="var(--bad)" stroke-width="2.2"/>
    <text x="79" y="155" font-size="13" font-weight="800" fill="var(--bad)">θ</text>
    <!-- Highlighted sides -->
    <line x1="36" y1="162" x2="206" y2="46" stroke="var(--brand)" stroke-width="3.2"/>
    <line x1="206" y1="162" x2="206" y2="46" stroke="var(--bad)" stroke-width="3.2"/>
    <line x1="36" y1="162" x2="206" y2="162" stroke="var(--good)" stroke-width="3.2"/>
    <!-- Labels -->
    <text x="104" y="92" font-size="12" font-weight="800" fill="var(--brand)">H (Hypotenuse)</text>
    <text x="213" y="108" font-size="11.5" font-weight="800" fill="var(--bad)">O</text>
    <text x="213" y="122" font-size="10" font-weight="600" fill="var(--bad)">(Opp)</text>
    <text x="121" y="180" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">A (Adjacent)</text>
    <text x="24" y="168" font-size="11" font-weight="700" fill="var(--ink-2)">A</text>
    <text x="210" y="176" font-size="11" font-weight="700" fill="var(--ink-2)">B</text>
    <text x="210" y="42" font-size="11" font-weight="700" fill="var(--ink-2)">C</text>
  </g>
  <!-- Right triangle: angle phi at top-right -->
  <text x="415" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">View from Angle φ (Top-Right)</text>
  <g transform="translate(290, 34)">
    <rect x="0" y="0" width="250" height="196" rx="8" fill="var(--surface-2)" stroke="var(--line)"/>
    <polygon points="36,162 206,162 206,46" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="2"/>
    <polyline points="192,162 192,148 206,148" fill="none" stroke="var(--ink)" stroke-width="1.8"/>
    <!-- Angle phi arc at (206,46) -->
    <path d="M 206 84 A 38 38 0 0 1 176 67" fill="none" stroke="var(--bad)" stroke-width="2.2"/>
    <text x="184" y="88" font-size="13" font-weight="800" fill="var(--bad)">φ</text>
    <!-- Highlighted sides (O and A swapped!) -->
    <line x1="36" y1="162" x2="206" y2="46" stroke="var(--brand)" stroke-width="3.2"/>
    <line x1="206" y1="162" x2="206" y2="46" stroke="var(--good)" stroke-width="3.2"/>
    <line x1="36" y1="162" x2="206" y2="162" stroke="var(--bad)" stroke-width="3.2"/>
    <!-- Labels -->
    <text x="104" y="92" font-size="12" font-weight="800" fill="var(--brand)">H (Still Hyp!)</text>
    <text x="213" y="108" font-size="11.5" font-weight="800" fill="var(--good)">A</text>
    <text x="213" y="122" font-size="10" font-weight="600" fill="var(--good)">(Adj)</text>
    <text x="121" y="180" text-anchor="middle" font-size="12" font-weight="800" fill="var(--bad)">O (Opposite)</text>
    <text x="24" y="168" font-size="11" font-weight="700" fill="var(--ink-2)">A</text>
    <text x="210" y="176" font-size="11" font-weight="700" fill="var(--ink-2)">B</text>
    <text x="210" y="42" font-size="11" font-weight="700" fill="var(--ink-2)">C</text>
  </g>
</svg>`,
      diagramCaption:
        "Switching from acute angle θ to acute angle φ leaves the Hypotenuse (H) fixed opposite 90°, while Opposite (O) and Adjacent (A) swap places!",
      whyItWorks:
        "In any triangle, the longest side ALWAYS sits opposite the largest angle. Because angles in a triangle sum to {{180°}}, the two acute angles sum to {{90°}} and are each strictly less than {{90°}}. Therefore, the {{90°}} angle is strictly the largest angle — guaranteeing the side opposite it (the **hypotenuse**) is ALWAYS strictly longer than either perpendicular leg!",
      keyPoints: [
        "The **hypotenuse (H)** is always opposite the {{90°}} angle and is ALWAYS the longest side.",
        "The **opposite (O)** is directly across from the marked acute angle {{theta}} (never touching {{theta}}).",
        "The **adjacent (A)** sits right next to {{theta}} and runs between {{theta}} and the {{90°}} angle.",
        "The two acute angles in any right-angled triangle are complementary: they always add up to {{90°}}.",
      ],
      strategies: [
        "ALWAYS label **H** first (opposite the {{90°}} box), **O** second (opposite the marked angle), and **A** last — never guess by 'bottom' or 'slanted'!",
        "Rotate your page (or mentally spin the triangle) if a tilted right-angled triangle makes the right angle look awkward.",
        "Sanity-check any calculated answer immediately: if your hypotenuse comes out shorter than a leg, something went wrong!",
      ],
      thinkDeeper:
        "A classmate looks at a right-angled triangle standing on its hypotenuse (like a roof gable) and says 'the bottom side is always the adjacent'. Give a counterexample proving why 'bottom' is a dangerous habit!",
      workedExamples: [
        {
          title: "Labelling a rotated right-angled triangle",
          problem:
            "Right-angled triangle {{PQR}} has {{∠Q = 90°}}, {{PQ = 5 cm}}, {{QR = 12 cm}}, and {{PR = 13 cm}}. Relative to angle {{∠R}}, identify the lengths of the **hypotenuse**, **opposite**, and **adjacent** sides.",
          steps: [
            "Spot the {{90°}} angle at {{Q}}: the side opposite vertex {{Q}} is {{PR = 13 cm}}, so **Hypotenuse {{H = 13 cm}}** (and indeed {{13}} is the longest side!).",
            "Stand at vertex {{R}} and look directly across the triangle: the side not touching {{R}} is {{PQ = 5 cm}}, so **Opposite {{O = 5 cm}}**.",
            "The remaining side connecting {{R}} to the right angle {{Q}} is {{QR = 12 cm}}, so **Adjacent {{A = 12 cm}}**.",
          ],
          answer: "{{H = 13 cm}}, {{O = 5 cm}}, {{A = 12 cm}}",
          yourTurn: {
            question: "In right-angled triangle {{XYZ}}, {{∠Y = 90°}}, {{XY = 8 cm}}, {{YZ = 15 cm}}, and {{XZ = 17 cm}}. Relative to angle {{∠X}}, what is the length of the **opposite** side (in cm)?",
            answer: { type: "number", value: 15, display: "15 cm" },
            solution: "Looking straight across from vertex {{X}}, the side opposite {{∠X}} is {{YZ = 15 cm}}.",
          },
        },
        {
          title: "Checking hypotenuse vs perpendicular legs",
          problem:
            "A right-angled triangle has side lengths {{7 cm}}, {{24 cm}}, and {{25 cm}}, and acute angle {{theta}} lies between the {{24 cm}} and {{25 cm}} sides. Identify {{H}}, {{A}}, and {{O}} relative to {{theta}}.",
          steps: [
            "The longest side is {{25 cm}}, so **{{H = 25 cm}}**.",
            "Angle {{theta}} is formed by the {{24 cm}} side and the hypotenuse {{25 cm}}, so the side touching {{theta}} (other than {{H}}) is **{{A = 24 cm}}**.",
            "The remaining side across from {{theta}} is **{{O = 7 cm}}**.",
          ],
          answer: "{{H = 25 cm}}, {{A = 24 cm}}, {{O = 7 cm}}",
          yourTurn: {
            question: "In the same triangle (sides {{7 cm}}, {{24 cm}}, {{25 cm}}), what is the length of the **adjacent** side relative to the OTHER acute angle {{phi}} (between the {{7 cm}} and {{25 cm}} sides)?",
            answer: { type: "number", value: 7, display: "7 cm" },
            solution: "Angle {{phi}} touches the hypotenuse ({{25 cm}}) and the {{7 cm}} side, so the adjacent side to {{phi}} is {{7 cm}}.",
          },
        },
      ],
    },
    {
      id: "pythagoras-theorem",
      heading: "Pythagoras' Theorem in 2D Problems",
      discovery: {
        problem:
          "Build a square outwards on each side of a {{3 cm}} by {{4 cm}} by {{5 cm}} right-angled triangle. What are the areas of the three squares, and what exact equation links the two smaller squares to the largest square?",
        idea:
          "The areas are {{3^2 = 9 cm^2}}, {{4^2 = 16 cm^2}}, and {{5^2 = 25 cm^2}} — and {{9 + 16 = 25}}! That exact area relationship, **{{a^2 + b^2 = c^2}}**, holds for EVERY right-angled triangle in flat geometry!",
      },
      body:
        "**Pythagoras' theorem** states that in ANY right-angled triangle with perpendicular legs {{a}}, {{b}} and hypotenuse {{c}}:\n\n" +
        "{{a^2 + b^2 = c^2}}\n\n" +
        "**Two crucial cases — Add or Subtract?**\n" +
        "- **Finding the HYPOTENUSE (longest side {{c}}):** **ADD** the squares, then square-root: {{c = sqrt(a^2 + b^2)}}.\n" +
        "- **Finding a SHORTER SIDE ({{a}} or {{b}}):** **SUBTRACT** the smaller square from the hypotenuse squared, then square-root: {{a = sqrt(c^2 - b^2)}}.\n\n" +
        "**Testing whether a triangle is right-angled (Converse of Pythagoras):** Given three sides with longest side {{c}}, compute {{a^2 + b^2}} and compare it with {{c^2}}. If {{a^2 + b^2 = c^2}}, the triangle IS right-angled (opposite side {{c}}); if {{a^2 + b^2 != c^2}}, it is NOT right-angled!\n\n" +
        "**Classic 2D applications:**\n" +
        "- **Distance between two coordinates {{(x_1, y_1)}} and {{(x_2, y_2)}}:** form horizontal leg {{dx = |x_2 - x_1|}} and vertical leg {{dy = |y_2 - y_1|}}, so {{d = sqrt(dx^2 + dy^2)}}.\n" +
        "- **Perpendicular height of an isosceles triangle:** split the base cleanly in **HALF** to make two congruent right-angled triangles, then subtract squares to find height {{h}}.\n" +
        "- **Diagonals of rectangles, squares, and rhombuses**, plus ladders against vertical walls!",
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Visual proof of Pythagoras theorem showing squares of area 9, 16, and 25 built on the sides of a 3-4-5 right-angled triangle">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Pythagoras' Theorem: Sum of the Two Smaller Squares = Square on Hypotenuse</text>
  <!-- Left visual: 3-4-5 with unit=16px. Right angle at (130, 162), A=(130, 114) [len 3=48], B=(194, 162) [len 4=64] -->
  <g transform="translate(12, 8)">
    <!-- Square on a=3 (left of vertical leg): x=82..130, y=114..162 -->
    <rect x="82" y="114" width="48" height="48" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
    <text x="106" y="142" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">3² = 9</text>
    <!-- Square on b=4 (below horizontal leg): x=130..194, y=162..226 -->
    <rect x="130" y="162" width="64" height="64" fill="var(--surface-2)" stroke="var(--good)" stroke-width="2"/>
    <text x="162" y="198" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">4² = 16</text>
    <!-- Square on c=5 built outwards from (130,114) to (194,162): vec=(64,48), perp outward=(48,-64) -> (178,50) and (242,98) -->
    <polygon points="130,114 194,162 242,98 178,50" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="2.2"/>
    <text x="186" y="108" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--bad)">5² = 25</text>
    <!-- Right triangle -->
    <polygon points="130,114 130,162 194,162" fill="var(--surface)" stroke="var(--ink)" stroke-width="2.2"/>
    <polyline points="130,152 140,152 140,162" fill="none" stroke="var(--ink)" stroke-width="1.6"/>
    <text x="138" y="143" font-size="11" font-weight="700" fill="var(--brand)">3</text>
    <text x="160" y="157" font-size="11" font-weight="700" fill="var(--good)">4</text>
    <text x="168" y="135" font-size="11" font-weight="700" fill="var(--bad)">5</text>
  </g>
  <!-- Right panel: Add vs Subtract decision card -->
  <g transform="translate(292, 42)">
    <rect x="0" y="0" width="248" height="190" rx="10" fill="var(--surface-2)" stroke="var(--line)"/>
    <text x="14" y="24" font-size="12.5" font-weight="800" fill="var(--ink)">Add or Subtract?</text>
    <rect x="12" y="36" width="224" height="58" rx="8" fill="var(--surface)" stroke="var(--good)" stroke-width="1.5"/>
    <text x="22" y="56" font-size="11.5" font-weight="700" fill="var(--good)">Finding HYPOTENUSE (longest)</text>
    <text x="22" y="78" font-size="12" font-weight="700" fill="var(--ink)">ADD squares: c = √(a² + b²)</text>
    <rect x="12" y="106" width="224" height="58" rx="8" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.5"/>
    <text x="22" y="126" font-size="11.5" font-weight="700" fill="var(--bad)">Finding SHORTER LEG</text>
    <text x="22" y="148" font-size="12" font-weight="700" fill="var(--ink)">SUBTRACT: a = √(c² − b²)</text>
    <text x="124" y="180" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--ink-2)">Triples: (3,4,5) · (5,12,13) · (8,15,17) · (7,24,25)</text>
  </g>
</svg>`,
      diagramCaption:
        "Pythagoras' theorem compares areas of squares on the three sides (9 + 16 = 25). Always decide first whether you are finding the hypotenuse (add squares) or a shorter leg (subtract squares).",
      whyItWorks:
        "Arrange four identical right-angled triangles (legs {{a, b}}, hypotenuse {{c}}) around the corners of a large square of side {{a + b}}. The empty space in the middle is a tilted square of area {{c^2}}. Now slide the four triangles into two rectangles of size {{a * b}} inside the exact same {{(a + b)}} square — the empty space splits into two squares of areas {{a^2}} and {{b^2}}. Because the total square area and the four triangles never changed, the remaining areas MUST be equal: {{a^2 + b^2 = c^2}}!",
      keyPoints: [
        "Pythagoras' theorem {{a^2 + b^2 = c^2}} ONLY works on **right-angled triangles** (with {{c}} strictly the hypotenuse).",
        "Finding the hypotenuse → **add** squares ({{sqrt(a^2 + b^2)}}); finding a shorter leg → **subtract** squares ({{sqrt(c^2 - b^2)}}).",
        "Memorise the core **Pythagorean triples** (and their multiples): {{(3, 4, 5)}}, {{(5, 12, 13)}}, {{(8, 15, 17)}}, {{(7, 24, 25)}}.",
        "Never forget to take the **square root** at the final step — and keep full calculator precision until the very end before rounding!",
      ],
      strategies: [
        "Always start by circling the hypotenuse {{c}} so you never accidentally put a shorter leg alone on the right-hand side.",
        "For an isosceles triangle height, **halve the base** BEFORE squaring!",
        "Check if your side lengths are a simple multiple of {{3, 4, 5}} or {{5, 12, 13}} — e.g. {{(9, 12, 15)}} or {{(10, 24, 26)}} — to spot exact answers instantly!",
      ],
      thinkDeeper:
        "Why is {{sqrt(a^2 + b^2)}} NEVER equal to {{a + b}} for positive numbers {{a}} and {{b}}? Try testing {{a = 3, b = 4}} — what geometric fact about walking straight across a diagonal versus walking around the corner explains this?",
      workedExamples: [
        {
          title: "Finding a shorter side in an isosceles triangle",
          problem:
            "An isosceles triangle has two equal sides of length {{10 cm}} and a base of length {{12 cm}}. Find its perpendicular height {{h}} and its area.",
          steps: [
            "Drop the perpendicular height {{h}} from the top vertex to the midpoint of the base, splitting the base into two equal halves of {{12 / 2 = 6 cm}}.",
            "In each right-angled half-triangle, the hypotenuse is {{10 cm}} and the base leg is {{6 cm}}.",
            "Since {{h}} is a **shorter side**, subtract squares: {{h^2 = 10^2 - 6^2 = 100 - 36 = 64}}.",
            "Take the square root: {{h = sqrt(64) = 8 cm}}. Area {{= 1/2 * 12 * 8 = 48 cm^2}}.",
          ],
          answer: "Height {{h = 8 cm}}, Area {{= 48 cm^2}}",
          yourTurn: {
            question: "A right-angled triangle has hypotenuse {{15 cm}} and one shorter side {{9 cm}}. Find the length of the other shorter side (in cm).",
            answer: { type: "number", value: 12, display: "12 cm" },
            solution: "Subtract squares: {{a^2 = 15^2 - 9^2 = 225 - 81 = 144}}, so {{a = sqrt(144) = 12 cm}}.",
          },
        },
        {
          title: "Finding the hypotenuse to 1 decimal place",
          problem:
            "A right-angled triangle has perpendicular sides {{5 cm}} and {{9 cm}}. Find the length of the hypotenuse to {{1}} decimal place.",
          steps: [
            "We are finding the **hypotenuse** {{c}}, so **add** the squares: {{c^2 = 5^2 + 9^2}}.",
            "Calculate: {{c^2 = 25 + 81 = 106}}.",
            "Take the square root: {{c = sqrt(106) = 10.2956... cm}}.",
            "Round to {{1}} decimal place: {{10.3 cm}} (check: {{10.3 > 9}}, sensible!).",
          ],
          answer: "{{10.3 cm}} (to 1 d.p.)",
          yourTurn: {
            question: "Find the distance between the points {{A(1, 2)}} and {{B(7, 10)}} on a coordinate grid.",
            answer: { type: "number", value: 10, display: "10" },
            solution: "Horizontal step {{dx = 7 - 1 = 6}}, vertical step {{dy = 10 - 2 = 8}}. Distance {{= sqrt(6^2 + 8^2) = sqrt(100) = 10}}.",
          },
        },
      ],
    },
    {
      id: "similar-right-triangles-ratios",
      heading: "Similarity of Right-Angled Triangles & Trig Ratios",
      discovery: {
        problem:
          "Draw three different-sized right-angled triangles that ALL contain a {{30°}} acute angle: one with hypotenuse {{4 cm}}, one with hypotenuse {{6 cm}}, and one with hypotenuse {{10 cm}}. Measure the side opposite the {{30°}} angle in each — you get {{2 cm}}, {{3 cm}}, and {{5 cm}}. Now divide **Opposite ÷ Hypotenuse** for all three triangles. What happens?",
        idea:
          "{{2/4 = 0.5}}, {{3/6 = 0.5}}, and {{5/10 = 0.5}} — the ratio NEVER changes! Because every right-angled triangle with a {{30°}} angle has angles {{30°, 60°, 90°}}, they are ALL **similar** (AAA), so their side ratios depend ONLY on the angle {{30°}}, never on the triangle's size. That constant ratio is called **{{sin(30°) = 0.5}}**!",
      },
      body:
        "Trigonometry is simply **similar right-angled triangles packaged into three constant ratios**! Every right-angled triangle with the same acute angle {{theta}} has the exact same three angles ({{theta}}, {{90° - theta}}, {{90°}}), making all such triangles mathematically **similar**. Therefore, for any fixed angle {{theta}}, the three ratios of its sides are universal constants:\n\n" +
        "- **Sine:** {{sin(theta) = O / H}} (**S**ine = **O**pposite ÷ **H**ypotenuse)\n" +
        "- **Cosine:** {{cos(theta) = A / H}} (**C**osine = **A**djacent ÷ **H**ypotenuse)\n" +
        "- **Tangent:** {{tan(theta) = O / A}} (**T**angent = **O**pposite ÷ **A**djacent)\n\n" +
        "Remember them with the classic mnemonic **SOH · CAH · TOA**!\n\n" +
        "**Important properties of the ratios for any acute angle {{0° < theta < 90°}}:**\n" +
        "- Because the hypotenuse {{H}} is strictly longer than both {{O}} and {{A}}, **{{sin(theta)}} and {{cos(theta)}} are ALWAYS strictly less than {{1}}** (between {{0}} and {{1}}).\n" +
        "- **{{tan(theta) = O / A}}** CAN be less than {{1}}, equal to {{1}} (at {{45°}} when {{O = A}}!), or greater than {{1}} (for angles above {{45°}} when {{O > A}}).\n" +
        "- Helpful benchmark values: {{sin(30°) = 0.5}}, {{cos(60°) = 0.5}}, and {{tan(45°) = 1}}.",
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three nested similar right-angled triangles sharing a 30 degree angle showing that Opposite divided by Hypotenuse is constantly 0.5 regardless of size">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Why Trig Ratios Are Constant: Nested Similar Right Triangles (θ = 30°)</text>
  <g transform="translate(20, 36)">
    <rect x="0" y="0" width="334" height="196" rx="8" fill="var(--surface-2)" stroke="var(--line)"/>
    <!-- Base at y=170, vertex at (26, 170). Angle 30 deg: tan(30)=0.577 -->
    <!-- Small tri: base=90 -> x=116, h=52 -> y=118 -->
    <!-- Med tri: base=165 -> x=191, h=95 -> y=75 -->
    <!-- Large tri: base=255 -> x=281, h=147 -> y=23 -->
    <polygon points="26,170 281,170 281,23" fill="var(--surface)" stroke="var(--good)" stroke-width="2"/>
    <polygon points="26,170 191,170 191,75" fill="var(--brand-soft)" fill-opacity="0.45" stroke="var(--brand)" stroke-width="2"/>
    <polygon points="26,170 116,170 116,118" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="2"/>
    <!-- Right-angle markers -->
    <polyline points="107,170 107,161 116,161" fill="none" stroke="var(--ink)" stroke-width="1.4"/>
    <polyline points="182,170 182,161 191,161" fill="none" stroke="var(--brand)" stroke-width="1.4"/>
    <polyline points="272,170 272,161 281,161" fill="none" stroke="var(--good)" stroke-width="1.4"/>
    <!-- 30 deg arc -->
    <path d="M 66 170 A 40 40 0 0 0 61 150" fill="none" stroke="var(--bad)" stroke-width="2.2"/>
    <text x="69" y="164" font-size="11.5" font-weight="800" fill="var(--bad)">30°</text>
    <!-- Opposite labels -->
    <text x="122" y="148" font-size="10.5" font-weight="700" fill="var(--ink)">O = 2</text>
    <text x="197" y="128" font-size="10.5" font-weight="700" fill="var(--brand)">O = 3</text>
    <text x="287" y="102" font-size="10.5" font-weight="700" fill="var(--good)">O = 5</text>
    <!-- Hypotenuse labels -->
    <text x="64" y="133" font-size="10.5" font-weight="700" fill="var(--ink)">H=4</text>
    <text x="115" y="102" font-size="10.5" font-weight="700" fill="var(--brand)">H=6</text>
    <text x="180" y="64" font-size="10.5" font-weight="700" fill="var(--good)">H=10</text>
    <text x="167" y="188" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">sin 30° = 2/4 = 3/6 = 5/10 = 0.5 ALWAYS!</text>
  </g>
  <!-- Right SOHCAHTOA panel -->
  <g transform="translate(366, 36)">
    <rect x="0" y="0" width="174" height="196" rx="10" fill="var(--surface-2)" stroke="var(--line)"/>
    <text x="87" y="24" text-anchor="middle" font-size="13" font-weight="800" fill="var(--brand)">SOH · CAH · TOA</text>
    <rect x="12" y="36" width="150" height="44" rx="7" fill="var(--surface)" stroke="var(--line)"/>
    <text x="87" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">sin θ = O ÷ H</text>
    <text x="87" y="72" text-anchor="middle" font-size="10" fill="var(--ink-2)">Always &lt; 1 for acute θ</text>
    <rect x="12" y="88" width="150" height="44" rx="7" fill="var(--surface)" stroke="var(--line)"/>
    <text x="87" y="107" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">cos θ = A ÷ H</text>
    <text x="87" y="124" text-anchor="middle" font-size="10" fill="var(--ink-2)">Always &lt; 1 for acute θ</text>
    <rect x="12" y="140" width="150" height="44" rx="7" fill="var(--surface)" stroke="var(--line)"/>
    <text x="87" y="159" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">tan θ = O ÷ A</text>
    <text x="87" y="176" text-anchor="middle" font-size="10" fill="var(--ink-2)">Can be &lt; 1, = 1, or &gt; 1</text>
  </g>
</svg>`,
      diagramCaption:
        "All right-angled triangles with a 30° angle are enlargements of one another, so the ratio O ÷ H stays locked at 0.5 no matter how large or small the triangle grows.",
      whyItWorks:
        "If you enlarge a right-angled triangle by any scale factor {{k}}, its opposite side multiplies by {{k}} ({{O -> kO}}) and its hypotenuse multiplies by {{k}} ({{H -> kH}}). When you form the ratio {{(kO)/(kH)}}, the scale factor {{k}} cancels cleanly from top and bottom, leaving {{O/H}} completely unchanged! That is why a single lookup table (or scientific calculator) can store {{sin}}, {{cos}}, and {{tan}} for EVERY right-angled triangle in the universe.",
      keyPoints: [
        "All right-angled triangles sharing the same acute angle {{theta}} are **similar** (by AAA), so their side ratios are constant.",
        "**SOHCAHTOA**: {{sin(theta) = O/H}}, {{cos(theta) = A/H}}, {{tan(theta) = O/A}}.",
        "For any acute angle {{theta}}, {{0 < sin(theta) < 1}} and {{0 < cos(theta) < 1}}, whereas {{tan(theta)}} can take ANY positive value.",
        "If you know two sides of a right-angled triangle, identify which two of {{O, A, H}} they are — that uniquely selects {{sin}}, {{cos}}, or {{tan}}!",
      ],
      strategies: [
        "Write **SOH CAH TOA** at the top of your exam page and tick off the TWO sides involved (the side you know + the side you want).",
        "If you are asked for exact {{sin(theta)}}, {{cos(theta)}}, or {{tan(theta)}} from a triangle's side lengths, leave it as a simplified fraction (no calculator needed!).",
        "Watch out for the complementary angle relation: in any right-angled triangle, {{sin(theta) = cos(90° - theta)}} because one angle's Opposite is the other angle's Adjacent!",
      ],
      thinkDeeper:
        "In a right-angled triangle with legs {{a, b}} and hypotenuse {{c}}, notice that {{sin(theta) = a/c}} and {{cos(theta) = b/c}}. What happens if you divide {{sin(theta)}} by {{cos(theta)}}? And what happens if you square and add them: {{(sin(theta))^2 + (cos(theta))^2}}?",
      workedExamples: [
        {
          title: "Finding exact trig ratios from a 5–12–13 triangle",
          problem:
            "A right-angled triangle has legs {{5 cm}} and {{12 cm}} and hypotenuse {{13 cm}}. Angle {{theta}} is opposite the {{5 cm}} side. Write exact simplified fractions for {{sin(theta)}}, {{cos(theta)}}, and {{tan(theta)}}.",
          steps: [
            "Label relative to {{theta}}: **{{H = 13 cm}}**, **{{O = 5 cm}}**, and **{{A = 12 cm}}**.",
            "{{sin(theta) = O / H = 5/13}}.",
            "{{cos(theta) = A / H = 12/13}}.",
            "{{tan(theta) = O / A = 5/12}}.",
          ],
          answer: "{{sin(theta) = 5/13}}, {{cos(theta) = 12/13}}, {{tan(theta) = 5/12}}",
          yourTurn: {
            question: "In a right-angled triangle with sides {{6 cm}}, {{8 cm}}, and {{10 cm}}, angle {{theta}} is opposite the {{6 cm}} side. Write {{cos(theta)}} as a fraction in its simplest form.",
            answer: { type: "fraction", n: 4, d: 5, simplest: true, display: "{{4/5}}" },
            solution: "{{H = 10}}, {{O = 6}}, so {{A = 8}}. Thus {{cos(theta) = A/H = 8/10 = 4/5}}.",
          },
        },
        {
          title: "Choosing the right trig ratio",
          problem:
            "A right-angled triangle has an acute angle of {{38°}}, adjacent side {{14 cm}}, and an unknown opposite side {{x}}. Which trig ratio connects the given side and {{x}}, and what equation do you write?",
          steps: [
            "We know the **Adjacent** ({{A = 14 cm}}) and want the **Opposite** ({{O = x}}); the hypotenuse is NOT involved.",
            "In **SOH CAH TOA**, the ratio using **O** and **A** is **TOA** (**tan**).",
            "Substitute into {{tan(theta) = O / A}}: {{tan(38°) = x / 14}}.",
          ],
          answer: "{{tan(38°) = x / 14}}",
          yourTurn: {
            question: "In a right-angled triangle, you know the **Hypotenuse** and want to find the **Adjacent** side for a marked angle {{theta}}. Which trig ratio (`sin`, `cos`, or `tan`) should you use?",
            answer: { type: "text", accept: ["cos", "cosine"], display: "cos" },
            solution: "Adjacent (A) and Hypotenuse (H) belong to **CAH** → **cos**.",
          },
        },
      ],
    },
    {
      id: "trig-finding-lengths",
      heading: "Using Trigonometry to Find Missing Lengths (Extension: Angles)",
      discovery: {
        problem:
          "Compare two equations from trigonometry: Equation 1 is {{sin(30°) = x / 10}}, and Equation 2 is {{sin(30°) = 10 / y}}. Since {{sin(30°) = 0.5}}, solve BOTH mentally! Why do you **multiply** in one and **divide** in the other?",
        idea:
          "In Equation 1, {{x / 10 = 0.5 => x = 10 * 0.5 = 5}} (unknown on **TOP** → multiply!). In Equation 2, {{10 / y = 0.5 => y = 10 / 0.5 = 20}} (unknown on **BOTTOM** → divide!). Notice how {{y}} is the hypotenuse, so it MUST be larger than {{10}}!",
      },
      body:
        "Once you have labelled **O, A, H** and chosen **sin, cos, or tan**, ALWAYS write down the full trig equation first — never try to guess whether to multiply or divide in your head!\n\n" +
        "**Step-by-step method for finding a missing length:**\n" +
        "1. Check your calculator is in **DEG (Degrees)** mode — look for `D` or `DEG` at the top of the screen (NEVER `RAD` or `GRAD`)!\n" +
        "2. Label **H, O, A** relative to the marked angle {{theta}}, and pick **SOH**, **CAH**, or **TOA**.\n" +
        "3. Write the equation, e.g. {{sin(theta) = O/H}}.\n" +
        "4. Rearrange cleanly:\n" +
        "   - **Unknown on TOP** (e.g. {{sin(32°) = x / 14}}): **MULTIPLY** → {{x = 14 * sin(32°)}}.\n" +
        "   - **Unknown on BOTTOM** (e.g. {{sin(35°) = 9 / x}}): **SWAP & DIVIDE** → {{x = 9 / sin(35°)}}.\n" +
        "5. Round ONLY at the very end to the accuracy requested (e.g. {{1}} decimal place), and sanity-check against the hypotenuse!\n\n" +
        "**Extension (Stretch) — Finding a Missing Angle with Inverse Trig:**\n" +
        "Core Year 9 Unit 7 focuses on finding missing **lengths**. As an **Extension** for IGCSE readiness, when you know TWO sides and want the acute angle {{theta}}, write the ratio fraction and apply the **inverse trig button** (`SHIFT` + `sin`/`cos`/`tan`, shown as {{sin^(-1)}}, {{cos^(-1)}}, {{tan^(-1)}}):\n" +
        "- Example: if {{sin(theta) = 7 / 11}}, then {{theta = sin^(-1)(7 / 11) = 39.5°}} (to {{1}} d.p.).\n" +
        "- **Caution:** {{sin^(-1)}} means *inverse sine* (undoing sine to recover the angle), NOT {{1 / sin}}!",
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Side by side comparison of unknown on top (multiply: x = 14 sin 32) versus unknown on bottom (divide: x = 9 divided by sin 35)">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <!-- Left card: Unknown on TOP -> MULTIPLY -->
  <g transform="translate(18, 16)">
    <rect x="0" y="0" width="254" height="218" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.8"/>
    <text x="127" y="24" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--good)">Case 1: Unknown on TOP → Multiply</text>
    <!-- Right triangle -->
    <polygon points="34,132 198,132 198,54" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="2"/>
    <polyline points="186,132 186,120 198,120" fill="none" stroke="var(--ink)" stroke-width="1.6"/>
    <path d="M 70 132 A 36 36 0 0 0 66 116" fill="none" stroke="var(--bad)" stroke-width="2"/>
    <text x="74" y="126" font-size="11" font-weight="700" fill="var(--bad)">32°</text>
    <text x="102" y="84" font-size="11.5" font-weight="800" fill="var(--brand)">H = 14 cm</text>
    <text x="205" y="96" font-size="12" font-weight="800" fill="var(--good)">x (O)</text>
    <!-- Equation steps -->
    <text x="127" y="160" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">sin 32° = x ÷ 14</text>
    <text x="127" y="182" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">x = 14 × sin 32° = 7.4 cm</text>
    <text x="127" y="204" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Check: leg 7.4 &lt; hyp 14 ✓</text>
  </g>
  <!-- Right card: Unknown on BOTTOM -> DIVIDE -->
  <g transform="translate(288, 16)">
    <rect x="0" y="0" width="254" height="218" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.8"/>
    <text x="127" y="24" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--bad)">Case 2: Unknown on BOTTOM → Divide</text>
    <!-- Right triangle -->
    <polygon points="34,132 198,132 198,54" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="2"/>
    <polyline points="186,132 186,120 198,120" fill="none" stroke="var(--ink)" stroke-width="1.6"/>
    <path d="M 70 132 A 36 36 0 0 0 66 116" fill="none" stroke="var(--bad)" stroke-width="2"/>
    <text x="74" y="126" font-size="11" font-weight="700" fill="var(--bad)">35°</text>
    <text x="102" y="84" font-size="12" font-weight="800" fill="var(--bad)">x (H)</text>
    <text x="204" y="96" font-size="11.5" font-weight="800" fill="var(--brand)">9 cm (O)</text>
    <!-- Equation steps -->
    <text x="127" y="160" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">sin 35° = 9 ÷ x</text>
    <text x="127" y="182" text-anchor="middle" font-size="12" font-weight="800" fill="var(--bad)">x = 9 ÷ sin 35° = 15.7 cm</text>
    <text x="127" y="204" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Check: hyp 15.7 &gt; leg 9 ✓</text>
  </g>
</svg>`,
      diagramCaption:
        "Always write the SOHCAHTOA equation first: if x sits in the numerator, multiply; if x sits in the denominator, swap x with the trig term and divide!",
      whyItWorks:
        "Writing {{sin(35°) = 9 / x}} is just a regular algebra equation like {{0.5736 = 9 / x}}. Multiplying both sides by {{x}} gives {{x * sin(35°) = 9}}, and then dividing both sides by {{sin(35°)}} gives {{x = 9 / sin(35°)}}! Remembering the algebraic reason means you never rely on blind guesswork and can catch multiply-vs-divide errors instantly.",
      keyPoints: [
        "ALWAYS confirm your calculator is in **DEG (Degrees)** mode before evaluating any trig function.",
        "Unknown in the numerator ({{sin(theta) = x / H}}) → **multiply** ({{x = H * sin(theta)}}).",
        "Unknown in the denominator ({{sin(theta) = O / x}}) → **divide** ({{x = O / sin(theta)}}).",
        "**Extension:** To find a missing angle {{theta}}, use inverse trig ({{sin^(-1)}}, {{cos^(-1)}}, {{tan^(-1)}}), keeping the exact fraction inside the brackets!",
      ],
      strategies: [
        "Always close the bracket around the angle on your calculator: type `14 × sin(32)` or `9 ÷ sin(35)` cleanly.",
        "Do an immediate size check: the hypotenuse MUST be strictly bigger than either shorter leg!",
        "In multi-step problems (two joined right-angled triangles), store the unrounded intermediate length on your calculator using `ANS` — rounding too early causes final-digit errors!",
      ],
      thinkDeeper:
        "A student tries to find the hypotenuse {{x}} when {{O = 9 cm}} and {{theta = 35°}}, types {{9 * sin(35°)}}, and gets {{5.2 cm}}. Without re-typing anything, how can the student spot in ONE SECOND that {{5.2 cm}} MUST be wrong?",
      workedExamples: [
        {
          title: "Unknown on top (multiply) vs unknown on bottom (divide)",
          problem:
            "(a) In a right-angled triangle with hypotenuse {{14 cm}} and acute angle {{32°}}, find the opposite side {{x}} to {{1}} d.p.\n(b) In a right-angled triangle with opposite side {{9 cm}} and acute angle {{35°}}, find the hypotenuse {{y}} to {{1}} d.p.",
          steps: [
            "(a) We have **H** and want **O** → **sin**: {{sin(32°) = x / 14}}.",
            "Unknown {{x}} is on top, so multiply: {{x = 14 * sin(32°) = 7.4188... = 7.4 cm}} (to {{1}} d.p.).",
            "(b) We have **O** and want **H** → **sin**: {{sin(35°) = 9 / y}}.",
            "Unknown {{y}} is on the bottom, so swap and divide: {{y = 9 / sin(35°) = 15.6910... = 15.7 cm}} (to {{1}} d.p.).",
          ],
          answer: "(a) {{x = 7.4 cm}}, (b) {{y = 15.7 cm}}",
          yourTurn: {
            question: "In a right-angled triangle with hypotenuse {{12 cm}} and acute angle {{40°}}, find the **adjacent** side to {{1}} decimal place (in cm).",
            answer: { type: "number", value: 9.2, tolerance: 0.1, display: "9.2 cm" },
            solution: "We have **H** and want **A** → **cos**: {{cos(40°) = A / 12 => A = 12 * cos(40°) = 9.1925... = 9.2 cm}} (to {{1}} d.p.).",
          },
        },
        {
          title: "Finding an unknown on the bottom & Extension: finding an angle",
          problem:
            "(a) In a right-angled triangle, the opposite side to {{31°}} is {{8 cm}}. Find the adjacent side {{a}} to {{1}} d.p.\n(b) *(Extension)* In another right-angled triangle, {{O = 7 cm}} and {{H = 11 cm}}. Find angle {{theta}} to {{1}} d.p.",
          steps: [
            "(a) **O** and **A** → **tan**: {{tan(31°) = 8 / a}}.",
            "Unknown on bottom → divide: {{a = 8 / tan(31°) = 13.3142... = 13.3 cm}} (to {{1}} d.p.).",
            "(b) **O** and **H** → **sin**: {{sin(theta) = 7 / 11}}.",
            "Apply inverse sine: {{theta = sin^(-1)(7 / 11) = 39.521... = 39.5°}} (to {{1}} d.p.).",
          ],
          answer: "(a) {{a = 13.3 cm}}, (b) {{theta = 39.5°}}",
          yourTurn: {
            question: "*(Extension)* In a right-angled triangle, the side opposite angle {{theta}} is {{6 cm}} and the hypotenuse is {{10 cm}}. Find angle {{theta}} to {{1}} decimal place (in degrees).",
            answer: { type: "number", value: 36.9, tolerance: 0.1, display: "36.9°" },
            solution: "{{sin(theta) = 6 / 10 = 0.6 => theta = sin^(-1)(0.6) = 36.869... = 36.9°}} (to {{1}} d.p.).",
          },
        },
      ],
    },
  ],
  learn: {
    flashcards: [
      {
        front: "How do you ALWAYS identify the **hypotenuse** of a right-angled triangle?",
        back: "It is the side directly opposite the {{90°}} angle, and it is ALWAYS the longest side.",
      },
      {
        front: "What happens to the Opposite and Adjacent labels if you switch to the OTHER acute angle?",
        back: "Opposite and Adjacent **swap places**, while the Hypotenuse stays fixed!",
      },
      {
        front: "State Pythagoras' theorem when {{c}} is the hypotenuse.",
        back: "{{a^2 + b^2 = c^2}}.",
      },
      {
        front: "When finding a SHORTER side with Pythagoras, do you add or subtract squares?",
        back: "**Subtract**: {{a = sqrt(c^2 - b^2)}} (hypotenuse squared minus known leg squared).",
      },
      {
        front: "List the first four primitive Pythagorean triples.",
        back: "{{(3, 4, 5)}}, {{(5, 12, 13)}}, {{(8, 15, 17)}}, and {{(7, 24, 25)}}.",
      },
      {
        front: "How do you test whether a triangle with sides {{a, b, c}} (longest {{c}}) is right-angled?",
        back: "Check if {{a^2 + b^2 = c^2}}. If equal, it IS right-angled; if not equal, it is NOT right-angled.",
      },
      {
        front: "How do you find the perpendicular height of an isosceles triangle using Pythagoras?",
        back: "Split the base in **half** to create two congruent right-angled triangles, then compute {{h = sqrt(" + '"equal side"' + "^2 - (" + '"half base"' + ")^2)}}.",
      },
      {
        front: "Why does {{sin(35°)}} have the exact same value in every right-angled triangle containing a {{35°}} angle?",
        back: "All such triangles have angles {{35°, 55°, 90°}}, so they are **similar** (AAA) and their side ratio {{O / H}} is invariant.",
      },
      {
        front: "What do SOH, CAH, and TOA stand for?",
        back: "{{sin(theta) = O/H}}, {{cos(theta) = A/H}}, {{tan(theta) = O/A}}.",
      },
      {
        front: "Can {{sin(theta)}} or {{cos(theta)}} ever be greater than {{1}} for a right-angled triangle?",
        back: "**No!** Because {{O < H}} and {{A < H}}, both {{O/H}} and {{A/H}} are strictly between {{0}} and {{1}}.",
      },
      {
        front: "How do you solve {{cos(40°) = x / 15}} vs {{cos(40°) = 15 / x}}?",
        back: "Unknown on top → multiply ({{x = 15 * cos(40°)}}); unknown on bottom → divide ({{x = 15 / cos(40°)}}).",
      },
      {
        front: "What are the exact values of {{sin(30°)}}, {{cos(60°)}}, and {{tan(45°)}}?",
        back: "{{sin(30°) = 0.5}}, {{cos(60°) = 0.5}}, and {{tan(45°) = 1}}.",
      },
      {
        front: "What calculator button undoes {{tan(theta) = 8 / 5}} to find angle {{theta}}?",
        back: "Inverse tangent: {{theta = tan^(-1)(8 / 5)}} (`SHIFT` then `tan`).",
      },
      {
        front: "What calculator mode MUST be active for all Year 9 trigonometry calculations?",
        back: "**DEG** (Degrees) — never RAD (Radians) or GRAD!",
      },
    ],
    mustKnow: [
      "Correctly label Hypotenuse (H), Opposite (O), and Adjacent (A) in any rotated right-angled triangle.",
      "Use Pythagoras' theorem to find the hypotenuse (add squares) or a shorter side (subtract squares).",
      "Use the converse of Pythagoras ({{a^2 + b^2 = c^2}}) to prove whether a triangle is right-angled.",
      "Apply Pythagoras in 2D contexts: coordinate distance, isosceles triangle height, rectangle/rhombus diagonals, and ladders.",
      "Explain why similar right-angled triangles produce constant ratios {{sin}}, {{cos}}, and {{tan}}.",
      "Write exact simplified fraction values for {{sin(theta)}}, {{cos(theta)}}, and {{tan(theta)}} from a triangle's sides.",
      "Choose SOH, CAH, or TOA cleanly and solve both unknown-on-top (multiply) and unknown-on-bottom (divide) equations.",
      "*(Extension)* Use inverse trig ({{sin^(-1)}}, {{cos^(-1)}}, {{tan^(-1)}}) to find missing acute angles in right-angled triangles.",
      "Keep full calculator accuracy during multi-step problems and round ONLY at the final answer.",
    ],
    misconceptions: [
      {
        wrong: "Never write: '{{c = a + b}}' or '{{sqrt(3^2 + 4^2) = 3 + 4 = 7}}'.",
        right: "Write instead: 'Square FIRST, add SECOND, square-root LAST: {{sqrt(3^2 + 4^2) = sqrt(9 + 16) = sqrt(25) = 5}}.'",
      },
      {
        wrong: "Never write: 'Always add squares in Pythagoras' when finding a shorter leg.",
        right: "Write instead: 'Check if you want the hypotenuse (ADD squares) or a shorter leg (SUBTRACT squares: {{c^2 - b^2}}).'",
      },
      {
        wrong: "Never write: 'The bottom side of the triangle is always the Adjacent.'",
        right: "Write instead: 'Label H opposite {{90°}} first, O across from the marked angle {{theta}}, and A as the remaining side touching {{theta}}.'",
      },
      {
        wrong: "Never write: 'From {{sin(35°) = 9 / x}}, rearrange to {{x = 9 * sin(35°)}}.'",
        right: "Write instead: 'Unknown on the bottom → swap and divide: {{x = 9 / sin(35°)}}.'",
      },
      {
        wrong: "Never write: 'In an isosceles triangle with base {{12 cm}} and equal sides {{10 cm}}, {{h = sqrt(10^2 - 12^2)}}.'",
        right: "Write instead: 'Halve the base first ({{12 / 2 = 6 cm}}), then {{h = sqrt(10^2 - 6^2) = 8 cm}}.'",
      },
      {
        wrong: "Never write: '{{sin^(-1)(0.5) = 1 / sin(0.5)}}'.",
        right: "Write instead: '{{sin^(-1)(0.5)}} means the angle whose sine is {{0.5}}, which is {{30°}} (use `SHIFT sin` on your calculator).'",
      },
    ],
    examMistakes: [
      "Leaving the calculator in **RAD** (radians) instead of **DEG** (degrees), producing completely nonsensical answers!",
      "Forgetting to take the square root at the end of a Pythagoras calculation (leaving {{c^2 = 169}} instead of {{c = 13}}).",
      "Adding squares when calculating a shorter side, producing a leg longer than the hypotenuse.",
      "Multiplying instead of dividing when the unknown {{x}} is in the denominator of a SOHCAHTOA equation.",
      "Rounding intermediate values (like {{sin(35°) ≈ 0.57}} or a shared side in joined triangles) too early instead of using `ANS`.",
      "Forgetting to halve the base of an isosceles triangle or diagonals of a rhombus before applying Pythagoras.",
      "Writing {{sin(theta) = 39.5°}} instead of {{theta = 39.5°}} after applying inverse sine.",
    ],
    mnemonics: [
      {
        topic: "The Three Trig Ratios",
        device: "SOH · CAH · TOA",
        explanation:
          "**S**ine = **O**pposite / **H**ypotenuse · **C**osine = **A**djacent / **H**ypotenuse · **T**angent = **O**pposite / **A**djacent.",
      },
      {
        topic: "Unknown on Top vs Bottom",
        device: "High → Multiply · Low → Divide (Swap & Go!)",
        explanation:
          "If {{x}} is **high** (numerator), multiply; if {{x}} is **low** (denominator), swap {{x}} with the trig term and divide.",
      },
      {
        topic: "Pythagoras Add vs Subtract",
        device: "Hypotenuse is Huge → Add · Shorter Side → Subtract",
        explanation:
          "Finding the biggest side means making the square bigger (add); finding a shorter leg means making the square smaller (subtract).",
      },
    ],
    realWorld: [
      {
        title: "Architects & Roof Pitch Engineering",
        detail:
          "Carpenters and structural engineers use Pythagoras and tan θ to cut roof rafters accurately and ensure rainwater drains cleanly off angled roofs.",
        emoji: "🏠",
      },
      {
        title: "Aviation Descent Paths & Navigation",
        detail:
          "Airliners descend along a standard 3° glide slope towards a runway — pilots and flight computers use tan 3° and sin 3° to calculate exact descent distance from cruising altitude.",
        emoji: "✈️",
      },
      {
        title: "Land Surveying & Mountain Heights",
        detail:
          "Mount Everest's height was first measured in 1852 without anyone climbing it — surveyors used precision angle-of-elevation measurements (theodolites) and trigonometry from miles away!",
        emoji: "🏔️",
      },
      {
        title: "2D/3D Game Hitboxes & Distance Checks",
        detail:
          "Every game checks whether an enemy is inside blast radius using Pythagoras' coordinate distance formula √((x₂ − x₁)² + (y₂ − y₁)²), and calculates projectile trajectories using cos θ and sin θ.",
        emoji: "🎯",
      },
    ],
    videos: [
      {
        title: "Pythagoras' Theorem — Finding Hypotenuse & Shorter Sides",
        channel: "Corbettmaths",
        url: "https://www.youtube.com/results?search_query=corbettmaths+pythagoras+theorem",
      },
      {
        title: "SOHCAHTOA — Finding Missing Sides in Right-Angled Triangles",
        channel: "Cognito",
        url: "https://www.youtube.com/results?search_query=cognito+maths+trigonometry+missing+sides+sohcahtoa",
      },
      {
        title: "Trigonometry — Finding Missing Angles (Inverse sin, cos, tan)",
        channel: "GCSE Maths Tutor",
        url: "https://www.youtube.com/results?search_query=gcse+maths+tutor+trigonometry+finding+angles",
      },
      {
        title: "Pythagoras & Trigonometry in 2D Problem Solving",
        channel: "Corbettmaths",
        url: "https://www.youtube.com/results?search_query=corbettmaths+trigonometry+missing+sides+and+angles",
      },
    ],
    formulas: [
      {
        name: "Pythagoras' Theorem",
        formula: "{{a^2 + b^2 = c^2}}",
        note: "c is strictly the hypotenuse (longest side, opposite 90°).",
      },
      {
        name: "Finding the Hypotenuse",
        formula: "{{c = sqrt(a^2 + b^2)}}",
        note: "Add squares, then take the square root.",
      },
      {
        name: "Finding a Shorter Side",
        formula: "{{a = sqrt(c^2 - b^2)}}",
        note: "Hypotenuse squared minus known leg squared.",
      },
      {
        name: "Coordinate Distance",
        formula: "{{d = sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2)}}",
        note: "Pythagoras on horizontal and vertical steps.",
      },
      {
        name: "Sine Ratio (SOH)",
        formula: "{{sin(theta) = O / H}}",
        note: "Opposite divided by Hypotenuse (always < 1 for acute θ).",
      },
      {
        name: "Cosine Ratio (CAH)",
        formula: "{{cos(theta) = A / H}}",
        note: "Adjacent divided by Hypotenuse (always < 1 for acute θ).",
      },
      {
        name: "Tangent Ratio (TOA)",
        formula: "{{tan(theta) = O / A}}",
        note: "Opposite divided by Adjacent.",
      },
      {
        name: "Unknown in Numerator",
        formula: "{{x = H * sin(theta)}}",
        note: "Multiply when x sits on top of the fraction.",
      },
      {
        name: "Unknown in Denominator",
        formula: "{{x = O / sin(theta)}}",
        note: "Swap and divide when x sits on the bottom.",
      },
      {
        name: "Finding an Angle (Inverse Trig)",
        formula: "{{theta = sin^(-1)(O / H)}}",
        note: "Likewise cos⁻¹(A/H) and tan⁻¹(O/A) in DEG mode.",
      },
    ],
  },
};
