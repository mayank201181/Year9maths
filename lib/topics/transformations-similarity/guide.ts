import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "transformations-similarity",
  title: "Transformations, Congruence & Similarity",
  strand: "Geometry & Measure",
  icon: "🔷",
  summary:
    "Master reflections, translations, rotations, integer and fractional enlargements, plus triangle congruence proofs and similar-shape scale factors.",
  intro:
    "Every time you pinch-to-zoom a photo, spin a piece in Tetris, or flip a mirror image, you are using a geometric transformation. Rigid transformations (reflections, translations, rotations) preserve both shape and size — producing **congruent** figures. Enlargements preserve angles while scaling every length by the same factor — producing **similar** figures. Master coordinate rules, exact descriptions, and scale factors and you will unlock one of geometry's most powerful toolkits.",
  guide: [
    {
      id: "reflection-translation",
      heading: "Reflections & Translations",
      discovery: {
        problem:
          "Mark the point {{A(2, 5)}} on a coordinate grid. Where does {{A}} land if you reflect it in the vertical mirror line {{x = 1}}? Now predict where {{A(2, 5)}} lands if you reflect it in the diagonal mirror line {{y = x}}.",
        idea:
          "Across {{x = 1}}, {{A(2, 5)}} is {{1}} unit to the right of the mirror, so its image is {{1}} unit to the left at {{(0, 5)}} — its {{y}}-coordinate never changes! Across the diagonal line {{y = x}}, the horizontal and vertical roles swap completely, sending {{(2, 5)}} to {{(5, 2)}}.",
      },
      body:
        "A **reflection** flips a shape across a straight **mirror line**. Every point and its image sit at equal perpendicular distances on opposite sides of the mirror line. Key mirror lines to recognise instantly:\n\n" +
        "- **Vertical line {{x = a}}**: the {{y}}-coordinate stays fixed; the new {{x}}-coordinate is {{2a - x}} (equally far on the other side of {{a}}).\n" +
        "- **Horizontal line {{y = b}}**: the {{x}}-coordinate stays fixed; the new {{y}}-coordinate is {{2b - y}}.\n" +
        "- **Diagonal line {{y = x}}**: swap the coordinates — {{(x, y) -> (y, x)}}.\n" +
        "- **Diagonal line {{y = -x}}**: swap and negate both — {{(x, y) -> (-y, -x)}}.\n\n" +
        "A **translation** slides every point of a shape by the exact same distance in the exact same direction, without turning or flipping it. We write a translation using a **column vector** {{(dx, dy)}} (often written vertically with {{dx}} on top and {{dy}} underneath):\n\n" +
        "- Top number {{dx}}: **positive = right**, **negative = left**.\n" +
        "- Bottom number {{dy}}: **positive = up**, **negative = down**.\n\n" +
        "To describe a transformation fully in an exam, name the **single** transformation type plus its defining property: for a **reflection**, state the **equation of the mirror line** (e.g. *reflection in the line {{x = 2}}*); for a **translation**, state the **column vector** (e.g. *translation by vector {{(4, -3)}}*).",
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coordinate diagram showing reflection across the diagonal line y = x on the left and translation by vector (4, -2) on the right">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <!-- Left panel: Reflection in y = x -->
  <text x="140" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Reflection in y = x</text>
  <g transform="translate(20, 34)">
    <rect x="0" y="0" width="240" height="196" rx="8" fill="var(--surface-2)" stroke="var(--line)"/>
    <!-- Grid lines (step 24px, origin at (48, 168)) -->
    <g stroke="var(--line)" stroke-width="0.8">
      <line x1="24" y1="0" x2="24" y2="196"/><line x1="72" y1="0" x2="72" y2="196"/><line x1="96" y1="0" x2="96" y2="196"/>
      <line x1="120" y1="0" x2="120" y2="196"/><line x1="144" y1="0" x2="144" y2="196"/><line x1="168" y1="0" x2="168" y2="196"/>
      <line x1="192" y1="0" x2="192" y2="196"/><line x1="216" y1="0" x2="216" y2="196"/>
      <line x1="0" y1="24" x2="240" y2="24"/><line x1="0" y1="48" x2="240" y2="48"/><line x1="0" y1="72" x2="240" y2="72"/>
      <line x1="0" y1="96" x2="240" y2="96"/><line x1="0" y1="120" x2="240" y2="120"/><line x1="0" y1="144" x2="240" y2="144"/>
    </g>
    <!-- Axes -->
    <line x1="48" y1="6" x2="48" y2="190" stroke="var(--ink-2)" stroke-width="1.5"/>
    <line x1="6" y1="168" x2="234" y2="168" stroke="var(--ink-2)" stroke-width="1.5"/>
    <text x="226" y="162" font-size="11" font-weight="700" fill="var(--ink-2)">x</text>
    <text x="54" y="16" font-size="11" font-weight="700" fill="var(--ink-2)">y</text>
    <!-- Mirror line y = x passing through (48,168) with slope -1 in SVG -->
    <line x1="24" y1="192" x2="210" y2="6" stroke="var(--bad)" stroke-width="2" stroke-dasharray="6,4"/>
    <text x="194" y="28" font-size="11" font-weight="700" fill="var(--bad)">y = x</text>
    <!-- Object triangle: (1,4)->(72,72), (1,6)->(72,24), (3,4)->(120,72) -->
    <polygon points="72,72 72,24 120,72" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
    <text x="84" y="60" font-size="11" font-weight="700" fill="var(--brand)">A</text>
    <!-- Image triangle: (4,1)->(144,144), (6,1)->(192,144), (4,3)->(144,96) -->
    <polygon points="144,144 192,144 144,96" fill="var(--surface)" fill-opacity="0.7" stroke="var(--good)" stroke-width="2"/>
    <text x="157" y="135" font-size="11" font-weight="700" fill="var(--good)">A'</text>
    <!-- Perpendicular reflection dashed segment from (1,6) to (6,1) -->
    <line x1="72" y1="24" x2="192" y2="144" stroke="var(--ink-2)" stroke-width="1.3" stroke-dasharray="3,3"/>
    <circle cx="72" cy="24" r="3.5" fill="var(--brand)"/>
    <circle cx="192" cy="144" r="3.5" fill="var(--good)"/>
    <text x="77" y="21" font-size="10" fill="var(--ink)">(1, 6)</text>
    <text x="195" y="140" font-size="10" fill="var(--ink)">(6, 1)</text>
  </g>
  <!-- Right panel: Translation -->
  <text x="420" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Translation by vector (4, −2)</text>
  <g transform="translate(300, 34)">
    <rect x="0" y="0" width="240" height="196" rx="8" fill="var(--surface-2)" stroke="var(--line)"/>
    <g stroke="var(--line)" stroke-width="0.8">
      <line x1="24" y1="0" x2="24" y2="196"/><line x1="48" y1="0" x2="48" y2="196"/><line x1="72" y1="0" x2="72" y2="196"/>
      <line x1="96" y1="0" x2="96" y2="196"/><line x1="120" y1="0" x2="120" y2="196"/><line x1="144" y1="0" x2="144" y2="196"/>
      <line x1="168" y1="0" x2="168" y2="196"/><line x1="192" y1="0" x2="192" y2="196"/><line x1="216" y1="0" x2="216" y2="196"/>
      <line x1="0" y1="24" x2="240" y2="24"/><line x1="0" y1="48" x2="240" y2="48"/><line x1="0" y1="72" x2="240" y2="72"/>
      <line x1="0" y1="96" x2="240" y2="96"/><line x1="0" y1="120" x2="240" y2="120"/><line x1="0" y1="144" x2="240" y2="144"/>
      <line x1="0" y1="168" x2="240" y2="168"/>
    </g>
    <!-- Object triangle: (24,72) (24,24) (72,72) -->
    <polygon points="24,72 24,24 72,72" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
    <text x="38" y="60" font-size="11" font-weight="700" fill="var(--brand)">P</text>
    <!-- Translated by (+4 right = +96px, -2 down = +48px): (120,120) (120,72) (168,120) -->
    <polygon points="120,120 120,72 168,120" fill="var(--surface)" fill-opacity="0.7" stroke="var(--good)" stroke-width="2"/>
    <text x="134" y="109" font-size="11" font-weight="700" fill="var(--good)">P'</text>
    <!-- Step path: +4 right, -2 down from (24,24) to (120,72) -->
    <line x1="24" y1="24" x2="120" y2="24" stroke="var(--bad)" stroke-width="1.8" stroke-dasharray="4,3"/>
    <line x1="120" y1="24" x2="120" y2="72" stroke="var(--bad)" stroke-width="1.8" stroke-dasharray="4,3"/>
    <text x="72" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">+4 right</text>
    <text x="148" y="52" font-size="11" font-weight="700" fill="var(--bad)">−2 down</text>
    <!-- Direct vector arrow -->
    <line x1="72" y1="72" x2="164" y2="118" stroke="var(--ink)" stroke-width="2"/>
    <polygon points="168,120 158,119 162,112" fill="var(--ink)"/>
    <circle cx="24" cy="24" r="3.5" fill="var(--brand)"/>
    <circle cx="120" cy="72" r="3.5" fill="var(--good)"/>
    <text x="120" y="160" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink-2)">Every vertex moves (+4, −2)</text>
  </g>
</svg>`,
      diagramCaption:
        "Reflection flips orientation across a perpendicular mirror line (left); translation slides every vertex by the same column vector without turning or flipping (right).",
      whyItWorks:
        "In a reflection across {{y = x}}, the mirror makes a {{45°}} angle with both axes, so going horizontally by {{x}} and vertically by {{y}} becomes going vertically by {{x}} and horizontally by {{y}} — swapping the coordinates! In a translation, every vertex moves by the same displacement {{(dx, dy)}}, so the vector between any two vertices of the shape is unchanged, guaranteeing all lengths and angles stay identical.",
      keyPoints: [
        "Reflection across {{x = a}} keeps {{y}} fixed and sends {{x -> 2a - x}}; reflection across {{y = b}} keeps {{x}} fixed and sends {{y -> 2b - y}}.",
        "Reflection in {{y = x}} maps {{(x, y) -> (y, x)}}; reflection in {{y = -x}} maps {{(x, y) -> (-y, -x)}}.",
        "Translation by column vector {{(dx, dy)}} maps {{(x, y) -> (x + dx, y + dy)}} — track ONE chosen vertex to its matching image vertex, never the gap between shapes.",
        "Reflections reverse orientation (clockwise vertex order becomes anticlockwise), whereas translations preserve orientation.",
      ],
      strategies: [
        "Always transform shapes vertex by vertex, then join the image vertices cleanly with a ruler.",
        "For diagonal mirror lines ({{y = x}} or {{y = -x}}), count grid diagonals perpendicularly across the mirror line, or verify with the coordinate swap rule.",
        "To find a translation vector, subtract: Image − Object = {{(x' - x, y' - y)}}.",
      ],
      thinkDeeper:
        "Suppose you reflect a triangle in the vertical line {{x = 1}}, and then reflect the image in the vertical line {{x = 4}}. What SINGLE transformation has the exact same effect? Does the order of the two reflections matter?",
      workedExamples: [
        {
          title: "Double reflection across vertical and diagonal lines",
          problem:
            "Point {{P(4, -1)}} is reflected in the line {{x = 1}} to give {{P'}}. Then {{P'}} is reflected in the line {{y = x}} to give {{P''}}. Find the coordinates of {{P'}} and {{P''}}.",
          steps: [
            "Mirror line {{x = 1}} is vertical, so the {{y}}-coordinate stays {{-1}}.",
            "Point {{P}} has {{x = 4}}, which is {{4 - 1 = 3}} units to the right of {{x = 1}}.",
            "Step {{3}} units to the left of {{x = 1}}: {{x' = 1 - 3 = -2}}, giving {{P'(-2, -1)}}.",
            "Reflect {{P'(-2, -1)}} in {{y = x}} by swapping {{x}} and {{y}}: {{P''(-1, -2)}}.",
          ],
          answer: "{{P'(-2, -1)}} and {{P''(-1, -2)}}",
          yourTurn: {
            question: "Find the coordinates of the image of {{Q(3, 5)}} after a reflection in the horizontal line {{y = 2}}.",
            answer: { type: "list", values: [3, -1], ordered: true, display: "(3, −1)" },
            solution: "Across {{y = 2}}, {{x}} stays {{3}}. Since {{5}} is {{3}} units above {{2}}, move {{3}} units below {{2}}: {{2 - 3 = -1}}, giving {{(3, -1)}}.",
          },
        },
        {
          title: "Finding a translation vector and its inverse",
          problem:
            "Shape {{A}} has a top vertex at {{(-2, 3)}}. After a translation, the corresponding top vertex of Shape {{B}} is at {{(4, -1)}}. Find the translation vector from {{A}} to {{B}}, and the vector that maps {{B}} back to {{A}}.",
          steps: [
            "Horizontal shift: {{dx = 4 - (-2) = +6}} (6 units right).",
            "Vertical shift: {{dy = -1 - 3 = -4}} (4 units down).",
            "So the translation vector from {{A}} to {{B}} is {{(6, -4)}}.",
            "To reverse the slide from {{B}} back to {{A}}, negate both components: {{(-6, 4)}}.",
          ],
          answer: "{{(6, -4)}} from {{A}} to {{B}}; {{(-6, 4)}} from {{B}} to {{A}}",
          yourTurn: {
            question: "Translate the point {{(-3, 5)}} by the column vector {{(7, -2)}}. Write the coordinates of the image.",
            answer: { type: "list", values: [4, 3], ordered: true, display: "(4, 3)" },
            solution: "Add the vector components: {{(-3 + 7, 5 + (-2)) = (4, 3)}}.",
          },
        },
      ],
    },
    {
      id: "rotation",
      heading: "Rotations & Describing Rotations Fully",
      discovery: {
        problem:
          "Imagine an L-shaped arm from the origin {{(0, 0)}} that goes {{3}} squares right and {{1}} square up to reach {{A(3, 1)}}. If you pin the arm at {{(0, 0)}} and turn it {{90°}} anticlockwise, where does the tip {{A}} land?",
        idea:
          "The {{3}}-unit horizontal leg swings up to become {{3}} units straight up, and the {{1}}-unit upward leg swings left to become {{1}} unit left! So {{(3, 1)}} lands at {{(-1, 3)}} — every {{90°}} anticlockwise turn about the origin obeys {{(x, y) -> (-y, x)}}.",
      },
      body:
        "A **rotation** turns a shape around a fixed **centre of rotation** by a given **angle** and **direction** (clockwise or anticlockwise). Every point stays at the exact same distance from the centre, travelling along a circular arc.\n\n" +
        "**Coordinate rules about the origin {{(0, 0)}}:**\n" +
        "- **{{90°}} anticlockwise** (same as {{270°}} clockwise): {{(x, y) -> (-y, x)}}\n" +
        "- **{{90°}} clockwise** (same as {{270°}} anticlockwise): {{(x, y) -> (y, -x)}}\n" +
        "- **{{180°}}** (half-turn — direction doesn't matter!): {{(x, y) -> (-x, -y)}}\n\n" +
        "**Rotating about ANY centre {{C(a, b)}} using the L-arm (vector) method:**\n" +
        "1. Find the vector from centre {{C}} to vertex {{P}}: {{(dx, dy) = (x - a, y - b)}}.\n" +
        "2. Rotate that vector {{(dx, dy)}} using the origin rules above.\n" +
        "3. Add the rotated vector back onto the centre {{C(a, b)}}.\n\n" +
        "**Describing a rotation fully (3 marks = 3 facts!):** You MUST state:\n" +
        "1. The word **rotation**,\n" +
        "2. The **angle and direction** (e.g. *{{90°}} clockwise* — for {{180°}}, no direction is needed),\n" +
        "3. The **centre of rotation** as coordinates, e.g. *about {{(1, -2)}}*.",
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coordinate diagram illustrating a 90 degree anticlockwise rotation and a 180 degree rotation about centre C(1, 1) using L-shaped vector arms">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Rotating by 90° Anticlockwise and 180° About Centre C(1, 1)</text>
  <!-- Grid on left/centre: scale 22px per unit -->
  <rect x="18" y="32" width="326" height="202" rx="8" fill="var(--surface-2)" stroke="var(--line)"/>
  <g transform="translate(20, 34)">
    <g stroke="var(--line)" stroke-width="0.8">
      <line x1="22" y1="0" x2="22" y2="198"/><line x1="44" y1="0" x2="44" y2="198"/><line x1="66" y1="0" x2="66" y2="198"/>
      <line x1="88" y1="0" x2="88" y2="198"/><line x1="110" y1="0" x2="110" y2="198"/><line x1="132" y1="0" x2="132" y2="198"/>
      <line x1="154" y1="0" x2="154" y2="198"/><line x1="176" y1="0" x2="176" y2="198"/><line x1="198" y1="0" x2="198" y2="198"/>
      <line x1="220" y1="0" x2="220" y2="198"/><line x1="242" y1="0" x2="242" y2="198"/><line x1="264" y1="0" x2="264" y2="198"/>
      <line x1="286" y1="0" x2="286" y2="198"/><line x1="308" y1="0" x2="308" y2="198"/>
      <line x1="0" y1="22" x2="320" y2="22"/><line x1="0" y1="44" x2="320" y2="44"/><line x1="0" y1="66" x2="320" y2="66"/>
      <line x1="0" y1="88" x2="320" y2="88"/><line x1="0" y1="110" x2="320" y2="110"/><line x1="0" y1="132" x2="320" y2="132"/>
      <line x1="0" y1="154" x2="320" y2="154"/><line x1="0" y1="176" x2="320" y2="176"/>
    </g>
    <!-- Axes: origin (132, 132) -> C(1,1) at (154, 110) -->
    <line x1="132" y1="6" x2="132" y2="192" stroke="var(--ink-2)" stroke-width="1.4"/>
    <line x1="6" y1="132" x2="314" y2="132" stroke="var(--ink-2)" stroke-width="1.4"/>
    <!-- Object T: P(3,1)->(198,110), Q(5,1)->(242,110), R(5,2)->(242,88) -->
    <!-- Vecs from C(1,1): (2,0), (4,0), (4,1) -->
    <polygon points="198,110 242,110 242,88" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
    <text x="226" y="106" font-size="11" font-weight="700" fill="var(--brand)">T</text>
    <!-- 90 ACW about C(1,1): vecs (0,2),(0,4),(-1,4) -> (1,3)=(154,66), (1,5)=(154,22), (0,5)=(132,22) -->
    <polygon points="154,66 154,22 132,22" fill="var(--surface)" fill-opacity="0.8" stroke="var(--good)" stroke-width="2"/>
    <text x="145" y="42" font-size="11" font-weight="700" fill="var(--good)">T₁</text>
    <!-- 180 about C(1,1): vecs (-2,0),(-4,0),(-4,-1) -> (-1,1)=(110,110), (-3,1)=(66,110), (-3,0)=(66,132) -->
    <polygon points="110,110 66,110 66,132" fill="var(--surface)" fill-opacity="0.8" stroke="var(--ink)" stroke-width="2"/>
    <text x="78" y="124" font-size="11" font-weight="700" fill="var(--ink)">T₂</text>
    <!-- L-arm from C to P and C to P' -->
    <line x1="154" y1="110" x2="198" y2="110" stroke="var(--bad)" stroke-width="1.8" stroke-dasharray="4,3"/>
    <line x1="154" y1="110" x2="154" y2="66" stroke="var(--bad)" stroke-width="1.8" stroke-dasharray="4,3"/>
    <!-- 90 arc -->
    <path d="M 184 110 A 30 30 0 0 0 154 80" fill="none" stroke="var(--good)" stroke-width="1.8"/>
    <polygon points="154,80 161,77 159,85" fill="var(--good)"/>
    <text x="180" y="88" font-size="10" font-weight="700" fill="var(--good)">90° ACW</text>
    <!-- Centre C -->
    <circle cx="154" cy="110" r="4.5" fill="var(--bad)"/>
    <text x="160" y="125" font-size="11" font-weight="700" fill="var(--bad)">C(1, 1)</text>
  </g>
  <!-- Right summary card -->
  <g transform="translate(358, 38)">
    <rect x="0" y="0" width="184" height="190" rx="10" fill="var(--surface-2)" stroke="var(--line)"/>
    <text x="14" y="24" font-size="12" font-weight="700" fill="var(--ink)">3 Must-State Details</text>
    <text x="14" y="48" font-size="11" fill="var(--ink-2)">1. Type: Rotation</text>
    <text x="14" y="68" font-size="11" fill="var(--ink-2)">2. Angle &amp; direction</text>
    <text x="14" y="88" font-size="11" fill="var(--ink-2)">3. Centre (a, b)</text>
    <line x1="14" y1="104" x2="170" y2="104" stroke="var(--line)"/>
    <text x="14" y="124" font-size="11" font-weight="700" fill="var(--good)">T → T₁: 90° ACW, C(1,1)</text>
    <text x="14" y="146" font-size="11" font-weight="700" fill="var(--ink)">T → T₂: 180°, C(1,1)</text>
    <text x="14" y="172" font-size="10.5" fill="var(--ink-2)">Tip: vector (2, 0) turns to</text>
    <text x="14" y="184" font-size="10.5" fill="var(--ink-2)">(0, 2) under 90° ACW.</text>
  </g>
</svg>`,
      diagramCaption:
        "Using L-shaped vector arms from the centre C(1, 1): a 90° anticlockwise turn swings vector (2, 0) to (0, 2) (T → T₁), while a 180° turn reverses every vector to its opposite (T → T₂).",
      whyItWorks:
        "Turning a right-angled L-arm of horizontal length {{dx}} and vertical length {{dy}} through {{90°}} turns every horizontal step into a vertical step and every vertical step into a horizontal step. Because the lengths of the two legs never change, the distance from the centre {{C}} is {{sqrt(dx^2 + dy^2)}} before and after — keeping every rotated vertex on the same circle around {{C}}!",
      keyPoints: [
        "About {{(0, 0)}}: {{90°}} ACW maps {{(x, y) -> (-y, x)}}; {{90°}} CW maps {{(x, y) -> (y, -x)}}; {{180°}} maps {{(x, y) -> (-x, -y)}}.",
        "About centre {{C(a, b)}}: shift to the vector from {{C}}, rotate the vector, then add back to {{C}}.",
        "A {{180°}} rotation clockwise and {{180°}} anticlockwise are identical — the midpoint of any vertex and its image is the centre of rotation!",
        "Rotations preserve both size and orientation (a clockwise shape stays clockwise), so the object and image are congruent.",
      ],
      strategies: [
        "Check your rotation direction visually: clockwise follows a clock's hands (top goes right); anticlockwise goes top to left.",
        "For a {{180°}} rotation, find the centre immediately by taking the midpoint of any corresponding pair of vertices {{((x_1 + x_2)/2, (y_1 + y_2)/2)}}.",
        "For a {{90°}} rotation, test a candidate centre by checking that the two vector arms from the centre to a vertex and its image have the same length and meet at {{90°}}.",
      ],
      thinkDeeper:
        "How can you tell instantly without tracing paper whether a shape has been reflected or rotated? Try tracing the letters {{A -> B -> C}} around the perimeter of the original triangle and then {{A' -> B' -> C'}} around the image!",
      workedExamples: [
        {
          title: "Rotating 90° clockwise about a non-origin centre",
          problem:
            "Rotate the point {{A(4, 2)}} by {{90°}} clockwise about the centre {{C(1, 1)}}. Find the coordinates of {{A'}}.",
          steps: [
            "Find the vector from centre {{C(1, 1)}} to {{A(4, 2)}}: {{(4 - 1, 2 - 1) = (3, 1)}} (3 right, 1 up).",
            "Apply the {{90°}} clockwise rule {{(dx, dy) -> (dy, -dx)}} to {{(3, 1)}}: the rotated vector is {{(1, -3)}} (1 right, 3 down).",
            "Add the rotated vector back to the centre {{C(1, 1)}}: {{(1 + 1, 1 + (-3)) = (2, -2)}}.",
          ],
          answer: "{{A'(2, -2)}}",
          yourTurn: {
            question: "Rotate the point {{B(5, 3)}} by {{90°}} anticlockwise about the origin {{(0, 0)}}.",
            answer: { type: "list", values: [-3, 5], ordered: true, display: "(−3, 5)" },
            solution: "About the origin, {{90°}} anticlockwise maps {{(x, y) -> (-y, x)}}, so {{(5, 3) -> (-3, 5)}}.",
          },
        },
        {
          title: "Rotating 180° about a centre",
          problem:
            "Find the image of {{P(5, 4)}} after a rotation of {{180°}} about {{C(2, 1)}}.",
          steps: [
            "Find the vector from {{C(2, 1)}} to {{P(5, 4)}}: {{(5 - 2, 4 - 1) = (3, 3)}}.",
            "A {{180°}} rotation reverses the vector: {{(-3, -3)}}.",
            "Add to {{C(2, 1)}}: {{P' = (2 - 3, 1 - 3) = (-1, -2)}}.",
            "Quick midpoint check: midpoint of {{(5, 4)}} and {{(-1, -2)}} is {{((5-1)/2, (4-2)/2) = (2, 1) = C}}!",
          ],
          answer: "{{P'(-1, -2)}}",
          yourTurn: {
            question: "Rotate {{M(6, 2)}} by {{180°}} about the centre {{C(2, 5)}}.",
            answer: { type: "list", values: [-2, 8], ordered: true, display: "(−2, 8)" },
            solution: "Vector {{CM = (6 - 2, 2 - 5) = (4, -3)}}. Negate to {{(-4, 3)}} and add to {{(2, 5)}}: {{(2 - 4, 5 + 3) = (-2, 8)}}.",
          },
        },
      ],
    },
    {
      id: "enlargement",
      heading: "Enlargements (Integer & Fractional Scale Factors)",
      discovery: {
        problem:
          "A triangle is enlarged from centre {{(0, 0)}} by scale factor {{1/2}}. Its image is half as wide and half as tall — so it actually shrank! Why do mathematicians still call this an *enlargement*?",
        idea:
          "Every enlargement obeys the single scaling law **image vector = {{k *}} object vector** measured from the centre. When {{k > 1}} the shape gets larger, when {{k = 1}} it stays the same size, and when {{0 < k < 1}} (a fractional scale factor) the exact same rule shrinks the shape towards the centre!",
      },
      body:
        "An **enlargement** scales every length of a shape by a **scale factor {{k}}** from a fixed **centre of enlargement {{C(a, b)}}**. Unlike reflections, translations and rotations, an enlargement changes the size (unless {{k = 1}}) while keeping every angle identical and every image side parallel to its original side.\n\n" +
        "**Vector-ray method for enlarging any vertex {{P}} from centre {{C}} by scale factor {{k}}:**\n" +
        "1. Find the vector from {{C}} to {{P}}: {{vec(CP) = (x - a, y - b)}}.\n" +
        "2. Multiply both components by {{k}}: {{vec(CP') = (k(x - a), k(y - b))}}.\n" +
        "3. Measure this scaled vector from {{C}} (not from {{P}}!) to locate {{P'}}.\n\n" +
        "**Fractional scale factors ({{0 < k < 1}}):** If {{k = 1/2}}, every distance from the centre is halved, so the image sits *closer* to the centre than the original shape. Always remember:\n" +
        "- **Scale factor {{k}}** = {{(" + '"image length"' + ")/(" + '"object length"' + ")}} — NEVER object divided by image!\n\n" +
        "**Finding the centre of enlargement:** Draw straight **ray lines** through at least two (ideally three) pairs of corresponding vertices ({{A}} through {{A'}}, {{B}} through {{B'}}, {{C}} through {{C'}}). Where all the rays intersect is the **centre of enlargement**.\n\n" +
        "**Describing an enlargement fully (3 facts):** state **enlargement**, the **scale factor {{k}}**, and the **centre coordinates {{(a, b)}}**.",
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Enlargement diagram showing ray lines from centre C(1, 1) scaling triangle A by scale factor 2 to A' and by fractional scale factor 1/2 to A_small">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Enlargement Rays from Centre C(1, 1): k = 2 and k = ½</text>
  <g transform="translate(24, 34)">
    <rect x="0" y="0" width="330" height="198" rx="8" fill="var(--surface-2)" stroke="var(--line)"/>
    <!-- Grid step 22px, C(1,1) at (36, 174) -->
    <g stroke="var(--line)" stroke-width="0.8">
      <line x1="36" y1="0" x2="36" y2="198"/><line x1="66" y1="0" x2="66" y2="198"/><line x1="96" y1="0" x2="96" y2="198"/>
      <line x1="126" y1="0" x2="126" y2="198"/><line x1="156" y1="0" x2="156" y2="198"/><line x1="186" y1="0" x2="186" y2="198"/>
      <line x1="216" y1="0" x2="216" y2="198"/><line x1="246" y1="0" x2="246" y2="198"/><line x1="276" y1="0" x2="276" y2="198"/>
      <line x1="306" y1="0" x2="306" y2="198"/>
      <line x1="0" y1="24" x2="330" y2="24"/><line x1="0" y1="54" x2="330" y2="54"/><line x1="0" y1="84" x2="330" y2="84"/>
      <line x1="0" y1="114" x2="330" y2="114"/><line x1="0" y1="144" x2="330" y2="144"/><line x1="0" y1="174" x2="330" y2="174"/>
    </g>
    <!-- Scale: 30px per unit, C at (36, 174). Object A at rel vecs (2,1), (4,1), (2,3) -> (96,144), (156,144), (96,84) -->
    <!-- k=1/2: rel vecs (1,0.5), (2,0.5), (1,1.5) -> (66,159), (96,159), (66,129) -->
    <!-- k=2: rel vecs (4,2), (8,2), (4,6) -> wait 174-180=-6 too high! Use rel vecs (2,1), (4,1), (2,2.5) -> k=2: (4,2),(8,2),(4,5) -> (156,114),(276,114),(156,24) -->
    <!-- Rays from C(36,174) through (156,24), (156,114), (276,114) -->
    <line x1="36" y1="174" x2="172" y2="4" stroke="var(--bad)" stroke-width="1.3" stroke-dasharray="5,3"/>
    <line x1="36" y1="174" x2="312" y2="105" stroke="var(--bad)" stroke-width="1.3" stroke-dasharray="5,3"/>
    <line x1="36" y1="174" x2="296" y2="44" stroke="var(--bad)" stroke-width="1.3" stroke-dasharray="5,3"/>
    <!-- k=1/2 small triangle -->
    <polygon points="66,159 96,159 66,136.5" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.8"/>
    <text x="72" y="156" font-size="9.5" font-weight="700" fill="var(--ink)">½</text>
    <!-- Original triangle (k=1) -->
    <polygon points="96,144 156,144 96,99" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
    <text x="114" y="136" font-size="11" font-weight="700" fill="var(--brand)">Object</text>
    <!-- Enlarged triangle (k=2) -->
    <polygon points="156,114 276,114 156,24" fill="var(--surface)" fill-opacity="0.65" stroke="var(--good)" stroke-width="2.2"/>
    <text x="198" y="96" font-size="12" font-weight="700" fill="var(--good)">Image (k = 2)</text>
    <!-- Centre C -->
    <circle cx="36" cy="174" r="4.5" fill="var(--bad)"/>
    <text x="12" y="191" font-size="11" font-weight="700" fill="var(--bad)">Centre C</text>
  </g>
  <g transform="translate(370, 38)">
    <rect x="0" y="0" width="170" height="190" rx="10" fill="var(--surface-2)" stroke="var(--line)"/>
    <text x="12" y="24" font-size="12" font-weight="700" fill="var(--ink)">Enlargement Rules</text>
    <text x="12" y="48" font-size="11" fill="var(--ink-2)">• Always measure from</text>
    <text x="20" y="63" font-size="11" fill="var(--ink-2)">centre C, NOT from P</text>
    <text x="12" y="86" font-size="11" fill="var(--good)">• k &gt; 1: bigger &amp; farther</text>
    <text x="12" y="108" font-size="11" fill="var(--ink)">• 0 &lt; k &lt; 1: smaller &amp;</text>
    <text x="20" y="123" font-size="11" fill="var(--ink)">closer to centre C</text>
    <line x1="12" y1="138" x2="158" y2="138" stroke="var(--line)"/>
    <text x="12" y="158" font-size="11" font-weight="700" fill="var(--brand)">k = Image ÷ Object</text>
    <text x="12" y="178" font-size="10.5" fill="var(--ink-2)">All rays meet at C!</text>
  </g>
</svg>`,
      diagramCaption:
        "Ray lines from centre C pass through every set of corresponding vertices. Scale factor 2 doubles every vector from C; scale factor ½ halves every vector from C.",
      whyItWorks:
        "Because every vertex vector from {{C}} is multiplied by the same constant {{k}}, the vector joining any two image vertices {{A'}} and {{B'}} equals {{k}} times the original vector from {{A}} to {{B}}. That single algebra identity simultaneously proves two geometric facts: every side of the image is **parallel** to the original side, and every side is **{{k}} times as long**!",
      keyPoints: [
        "Scale factor {{k = (" + '"image length"' + ")/(" + '"object length"' + ")}}. If the image is smaller than the object, {{k}} is a fraction between {{0}} and {{1}}.",
        "To enlarge a point {{P}} from centre {{C}}: multiply the vector {{CP}} by {{k}}, then add it to **centre {{C}}**.",
        "To locate the centre of enlargement, join corresponding vertices with straight rays and find their intersection point.",
        "Enlargement preserves all angles and side ratios (similar shapes), and when {{k != 1}} the image is NOT congruent to the object.",
      ],
      strategies: [
        "Double-check the direction of mapping: 'enlarge A onto B' means {{k = B / A}}, whereas 'enlarge B onto A' means {{k = A / B}} (the reciprocal!).",
        "Check your completed enlargement by confirming every side of the image is parallel to its matching side on the object.",
        "When enlarging by a fraction like {{k = 1/3}}, divide both components of the centre-to-vertex vector by {{3}}.",
      ],
      thinkDeeper:
        "If a square of side {{4 cm}} is enlarged by scale factor {{3}}, its side becomes {{12 cm}} (multiplied by {{3}}). What happens to its **perimeter**, and what happens to its **area**? Why are those two multipliers different?",
      workedExamples: [
        {
          title: "Integer enlargement from a given centre",
          problem:
            "Vertex {{A(3, 5)}} is enlarged by scale factor {{3}} with centre of enlargement {{C(1, 2)}}. Find the coordinates of the image {{A'}}.",
          steps: [
            "Find the vector from centre {{C(1, 2)}} to {{A(3, 5)}}: {{(3 - 1, 5 - 2) = (2, 3)}}.",
            "Multiply the vector by scale factor {{3}}: {{(3 * 2, 3 * 3) = (6, 9)}}.",
            "Add this scaled vector to the **centre** {{C(1, 2)}}: {{(1 + 6, 2 + 9) = (7, 11)}}.",
          ],
          answer: "{{A'(7, 11)}}",
          yourTurn: {
            question: "Enlarge the point {{P(5, 4)}} by scale factor {{2}} from the centre {{C(2, 1)}}.",
            answer: { type: "list", values: [8, 7], ordered: true, display: "(8, 7)" },
            solution: "Vector {{CP = (5 - 2, 4 - 1) = (3, 3)}}. Multiply by {{2}} to get {{(6, 6)}}. Add to {{C(2, 1)}}: {{(2 + 6, 1 + 6) = (8, 7)}}.",
          },
        },
        {
          title: "Fractional enlargement from a given centre",
          problem:
            "Point {{B(9, 10)}} is enlarged by scale factor {{1/3}} from centre {{C(3, 1)}}. Find the coordinates of {{B'}}.",
          steps: [
            "Find the vector from {{C(3, 1)}} to {{B(9, 10)}}: {{(9 - 3, 10 - 1) = (6, 9)}}.",
            "Multiply by {{1/3}} (divide both components by {{3}}): {{(2, 3)}}.",
            "Add to centre {{C(3, 1)}}: {{B' = (3 + 2, 1 + 3) = (5, 4)}}.",
          ],
          answer: "{{B'(5, 4)}}",
          yourTurn: {
            question: "Enlarge {{D(10, 6)}} by scale factor {{1/2}} from centre {{C(2, 2)}}.",
            answer: { type: "list", values: [6, 4], ordered: true, display: "(6, 4)" },
            solution: "Vector {{CD = (10 - 2, 6 - 2) = (8, 4)}}. Half of {{(8, 4)}} is {{(4, 2)}}. Add to {{(2, 2)}}: {{(6, 4)}}.",
          },
        },
      ],
    },
    {
      id: "congruence-similarity",
      heading: "Congruent & Similar 2D Shapes",
      discovery: {
        problem:
          "Suppose two triangles both have angles {{40°}}, {{60°}} and {{80°}}. Must the two triangles be **congruent** (exact copies of each other)? What if they both have sides {{5 cm}}, {{7 cm}} and {{9 cm}}?",
        idea:
          "Knowing only the three angles (**AAA**) fixes the *shape* — you can still zoom the triangle bigger or smaller, so the triangles are **similar** but not necessarily congruent! Knowing all three side lengths (**SSS**) locks every angle rigidly in place, forcing the triangles to be **congruent**.",
      },
      body:
        "Two shapes are **congruent** (symbol {{≡}}) if they have the **exact same shape AND size** — one can be mapped onto the other by a reflection, rotation, and/or translation. For triangles, you do not need to check all 6 measurements (3 sides + 3 angles). Any ONE of the **4 congruence conditions** is sufficient:\n\n" +
        "- **SSS** (Side–Side–Side): all three pairs of corresponding sides are equal.\n" +
        "- **SAS** (Side–Angle–Side): two sides and the **included angle** *between* them are equal.\n" +
        "- **ASA** (Angle–Side–Angle, or AAS): two angles and a corresponding side are equal (since two angles fix the third via {{180°}}).\n" +
        "- **RHS** (Right angle–Hypotenuse–Side): both have a {{90°}} angle, equal **hypotenuses**, and one other pair of equal sides.\n\n" +
        "**Two traps that DO NOT prove congruence:**\n" +
        "- **AAA** proves *similarity*, not congruence (sizes can differ).\n" +
        "- **ASS / SSA** (non-included angle) can create two completely different triangles unless the angle is {{90°}}.\n\n" +
        "Two shapes are **similar** if one is an enlargement of the other: **all corresponding angles are equal**, and **all corresponding sides are in the same ratio** (multiplied by the same linear scale factor {{k}}). To find a missing length on similar shapes:\n" +
        "1. Pair up corresponding sides (the sides opposite equal angles!).\n" +
        "2. Find the scale factor {{k = (" + '"target side"' + ")/(" + '"known matching side"' + ")}}.\n" +
        "3. Multiply (or divide) to find the unknown length.",
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of the four triangle congruence conditions SSS, SAS, ASA, RHS on the left and two similar triangles with equal angles and scale factor 1.5 on the right">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <!-- Left panel: 4 Congruence Tests -->
  <text x="145" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">4 Valid Congruence Tests</text>
  <g transform="translate(16, 34)">
    <!-- Box 1: SSS -->
    <rect x="0" y="0" width="124" height="92" rx="8" fill="var(--surface-2)" stroke="var(--line)"/>
    <text x="62" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">SSS</text>
    <polygon points="24,78 100,78 56,30" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
    <line x1="62" y1="74" x2="62" y2="82" stroke="var(--ink)" stroke-width="1.6"/>
    <line x1="36" y1="51" x2="43" y2="57" stroke="var(--ink)" stroke-width="1.6"/>
    <line x1="39" y1="47" x2="46" y2="53" stroke="var(--ink)" stroke-width="1.6"/>
    <line x1="74" y1="54" x2="81" y2="49" stroke="var(--ink)" stroke-width="1.6"/>
    <line x1="77" y1="58" x2="84" y2="53" stroke="var(--ink)" stroke-width="1.6"/>
    <line x1="80" y1="62" x2="87" y2="57" stroke="var(--ink)" stroke-width="1.6"/>
    <!-- Box 2: SAS -->
    <rect x="134" y="0" width="124" height="92" rx="8" fill="var(--surface-2)" stroke="var(--line)"/>
    <text x="196" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">SAS (included ∠)</text>
    <polygon points="154,78 234,78 188,30" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
    <path d="M 168 78 A 14 14 0 0 0 163 68" fill="none" stroke="var(--bad)" stroke-width="2"/>
    <line x1="194" y1="74" x2="194" y2="82" stroke="var(--ink)" stroke-width="1.8"/>
    <line x1="168" y1="50" x2="175" y2="56" stroke="var(--ink)" stroke-width="1.8"/>
    <!-- Box 3: ASA -->
    <rect x="0" y="102" width="124" height="92" rx="8" fill="var(--surface-2)" stroke="var(--line)"/>
    <text x="62" y="120" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">ASA (or AAS)</text>
    <polygon points="22,180 102,180 62,134" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
    <path d="M 36 180 A 14 14 0 0 0 32 170" fill="none" stroke="var(--bad)" stroke-width="2"/>
    <path d="M 88 180 A 14 14 0 0 1 92 170" fill="none" stroke="var(--good)" stroke-width="2"/>
    <line x1="62" y1="176" x2="62" y2="184" stroke="var(--ink)" stroke-width="1.8"/>
    <!-- Box 4: RHS -->
    <rect x="134" y="102" width="124" height="92" rx="8" fill="var(--surface-2)" stroke="var(--line)"/>
    <text x="196" y="120" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">RHS</text>
    <polygon points="158,180 232,180 158,134" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
    <polyline points="158,170 168,170 168,180" fill="none" stroke="var(--bad)" stroke-width="1.8"/>
    <text x="200" y="152" font-size="10" font-weight="700" fill="var(--good)">H</text>
    <text x="148" y="160" font-size="10" font-weight="700" fill="var(--ink)">S</text>
  </g>
  <!-- Right panel: Similar triangles -->
  <text x="418" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Similar Triangles (k = 1.5)</text>
  <g transform="translate(292, 34)">
    <rect x="0" y="0" width="252" height="194" rx="8" fill="var(--surface-2)" stroke="var(--line)"/>
    <!-- Small triangle -->
    <polygon points="20,148 92,148 44,92" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
    <path d="M 34 148 A 14 14 0 0 0 29 138" fill="none" stroke="var(--bad)" stroke-width="1.8"/>
    <text x="56" y="163" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">6 cm</text>
    <text x="18" y="118" font-size="11" font-weight="700" fill="var(--brand)">4 cm</text>
    <!-- Scale arrow -->
    <text x="115" y="72" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">× 1.5</text>
    <line x1="94" y1="80" x2="132" y2="80" stroke="var(--good)" stroke-width="2"/>
    <polygon points="136,80 128,76 128,84" fill="var(--good)"/>
    <!-- Large similar triangle -->
    <polygon points="124,148 232,148 160,64" fill="var(--surface)" stroke="var(--good)" stroke-width="2.2"/>
    <path d="M 138 148 A 14 14 0 0 0 133 138" fill="none" stroke="var(--bad)" stroke-width="1.8"/>
    <text x="178" y="163" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">9 cm</text>
    <text x="128" y="102" font-size="11" font-weight="700" fill="var(--good)">x = 6 cm</text>
    <text x="126" y="184" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--ink-2)">Equal angles &amp; constant side ratio 9 ÷ 6 = 1.5</text>
  </g>
</svg>`,
      diagramCaption:
        "Congruent triangles satisfy SSS, SAS, ASA, or RHS (left). Similar triangles have identical angles and proportional corresponding sides connected by a single scale factor (right).",
      whyItWorks:
        "When two triangles share the same three angles, you can enlarge the smaller one so that one side matches its corresponding side on the larger triangle. Because enlargement preserves all angles, the two triangles now share two angles and the included side (**ASA**), making them congruent — proving every other side must have been scaled by the exact same factor!",
      keyPoints: [
        "The ONLY 4 valid triangle congruence conditions are **SSS**, **SAS** (included angle!), **ASA** (or AAS), and **RHS**.",
        "**AAA** guarantees similarity (not congruence); **ASS/SSA** is invalid because two different triangles can share the same non-included angle.",
        "Similar shapes have **equal corresponding angles** and **proportional corresponding sides** (same scale factor {{k}}).",
        "In nested triangles with a parallel line cutting two sides, the small top triangle and the **whole** large triangle are similar — always use the **full** outer side length, not just the lower segment!",
      ],
      strategies: [
        "Always sketch or re-orient two triangles facing the exact same way before matching corresponding sides.",
        "Match sides by looking across from equal angles: the side opposite {{∠A}} always corresponds to the side opposite the angle equal to {{∠A}}.",
        "In a congruence proof, list your 3 equal facts clearly with reasons (e.g. 'common side', 'alternate angles'), then conclude with the 3-letter condition.",
      ],
      thinkDeeper:
        "Are ALL circles similar? Are ALL rectangles similar? Are ALL regular pentagons similar? Explain what makes one family always similar while another is not.",
      workedExamples: [
        {
          title: "Finding a missing length in similar triangles",
          problem:
            "Triangles {{ABC}} and {{DEF}} are similar, with {{∠A = ∠D}}, {{∠B = ∠E}} and {{∠C = ∠F}}. Given {{AB = 6 cm}}, {{BC = 9 cm}} and {{DE = 15 cm}}, calculate the length of {{EF}}.",
          steps: [
            "Match corresponding sides: {{AB}} corresponds to {{DE}}, and {{BC}} corresponds to {{EF}}.",
            "Calculate the linear scale factor from {{ABC}} to {{DEF}}: {{k = DE / AB = 15 / 6 = 2.5}}.",
            "Multiply the corresponding side {{BC}} by {{k}}: {{EF = 9 * 2.5 = 22.5 cm}}.",
          ],
          answer: "{{22.5 cm}}",
          yourTurn: {
            question: "Two similar rectangles have lengths {{8 cm}} and {{20 cm}}. The smaller rectangle has width {{5 cm}}. Find the width of the larger rectangle (in cm).",
            answer: { type: "number", value: 12.5, display: "12.5 cm" },
            solution: "Scale factor {{k = 20 / 8 = 2.5}}. Multiply width: {{5 * 2.5 = 12.5 cm}}.",
          },
        },
        {
          title: "Choosing the right congruence condition",
          problem:
            "In triangles {{PQR}} and {{XYZ}}, {{PQ = XY = 7 cm}}, {{∠Q = ∠Y = 90°}}, and {{PR = XZ = 11 cm}}. State the congruence condition that proves {{△PQR ≡ △XYZ}}.",
          steps: [
            "Identify the right angles: {{∠Q = ∠Y = 90°}} (**R**).",
            "Check which sides are opposite the {{90°}} angles: {{PR}} and {{XZ}} are the hypotenuses, and {{PR = XZ = 11 cm}} (**H**).",
            "Identify another pair of equal sides: {{PQ = XY = 7 cm}} (**S**).",
            "All three parts of **RHS** are met (note: the {{90°}} angle is NOT between the {{7 cm}} and {{11 cm}} sides, so it is RHS rather than SAS).",
          ],
          answer: "RHS",
          yourTurn: {
            question: "Two triangles both have side lengths {{5 cm}}, {{8 cm}}, and {{10 cm}}. Which 3-letter congruence condition proves they are congruent?",
            answer: { type: "text", accept: ["SSS"], display: "SSS" },
            solution: "All three pairs of corresponding sides are equal, so the triangles are congruent by **SSS**.",
          },
        },
      ],
    },
  ],
  learn: {
    flashcards: [
      {
        front: "What is the coordinate rule for reflection in the line {{y = x}}?",
        back: "Swap the coordinates: {{(x, y) -> (y, x)}}.",
      },
      {
        front: "What is the coordinate rule for reflection in the line {{y = -x}}?",
        back: "Swap AND negate both coordinates: {{(x, y) -> (-y, -x)}}.",
      },
      {
        front: "What does the column vector {{(-3, 5)}} mean in a translation?",
        back: "Move every point {{3}} units **left** and {{5}} units **up**.",
      },
      {
        front: "What 3 details MUST you give to fully describe a rotation?",
        back: "1. The word **rotation**, 2. **Angle and direction** (CW or ACW; no direction needed for {{180°}}), 3. **Centre of rotation** coordinates {{(a, b)}}.",
      },
      {
        front: "What is the rule for rotating {{(x, y)}} by {{90°}} anticlockwise about {{(0, 0)}}?",
        back: "{{(x, y) -> (-y, x)}}.",
      },
      {
        front: "What is the rule for rotating {{(x, y)}} by {{90°}} clockwise about {{(0, 0)}}?",
        back: "{{(x, y) -> (y, -x)}}.",
      },
      {
        front: "What is the rule for rotating {{(x, y)}} by {{180°}} about {{(0, 0)}}?",
        back: "{{(x, y) -> (-x, -y)}} (the midpoint of any point and its image is the centre).",
      },
      {
        front: "How do you calculate the scale factor {{k}} of an enlargement?",
        back: "{{k = (" + '"image length"' + ")/(" + '"object length"' + ")}} — always divide the new image length by the original object length.",
      },
      {
        front: "What happens to a shape under an enlargement with {{0 < k < 1}}?",
        back: "The shape **shrinks** (reduces in size) and moves **closer** to the centre of enlargement, keeping all angles equal.",
      },
      {
        front: "How do you find the centre of enlargement from an object and its image?",
        back: "Draw straight ray lines joining at least two pairs of corresponding vertices — the point where the rays cross is the centre of enlargement.",
      },
      {
        front: "List all 4 valid triangle congruence conditions.",
        back: "**SSS**, **SAS** (included angle), **ASA** (or AAS), and **RHS**.",
      },
      {
        front: "Why do **AAA** and **ASS** fail to prove congruence?",
        back: "**AAA** only proves similarity (the triangle can be scaled bigger or smaller); **ASS** can produce two different triangles with the same non-included angle.",
      },
      {
        front: "Which transformations produce **congruent** images, and which produces a **similar** image?",
        back: "Reflections, translations and rotations produce **congruent** shapes; enlargements produce **similar** shapes (congruent only when {{k = 1}}).",
      },
      {
        front: "What two conditions define two **similar** polygons?",
        back: "1. All corresponding **angles are equal**, AND 2. All corresponding **sides are in the same ratio** (constant scale factor).",
      },
    ],
    mustKnow: [
      "Reflect any 2D shape in {{x = a}}, {{y = b}}, {{y = x}}, and {{y = -x}}.",
      "Translate any 2D shape using a column vector {{(dx, dy)}} and find the vector from an object to its image.",
      "Rotate any 2D shape by {{90°}} CW, {{90°}} ACW, or {{180°}} about the origin or any centre {{(a, b)}}.",
      "State ALL required details when describing a single transformation (mirror line / column vector / rotation angle + direction + centre / enlargement scale factor + centre).",
      "Enlarge a 2D shape from a given centre using both integer and fractional ({{0 < k < 1}}) scale factors.",
      "Find the centre of enlargement by drawing ray lines through corresponding vertices.",
      "Identify whether two triangles are congruent using SSS, SAS, ASA, or RHS — and spot invalid AAA or ASS claims.",
      "Calculate missing side lengths on similar 2D shapes (including nested parallel-line triangles) using a linear scale factor.",
      "Distinguish clearly between congruent shapes (same shape and size) and similar shapes (same shape, scaled size).",
    ],
    misconceptions: [
      {
        wrong: "Never write: 'Move the shape 4 right and 2 down' without stating the transformation type or vector.",
        right: "Write instead: 'Translation by column vector {{(4, -2)}}' — always name the single transformation and give the vector.",
      },
      {
        wrong: "Never write: 'Reflect in the line {{x = 3}}' as a horizontal line.",
        right: "Write instead: '{{x = 3}} is a VERTICAL line passing through {{(3, 0)}}; {{y = 3}} is horizontal!'",
      },
      {
        wrong: "Never write: 'Enlarge by scale factor 2 from {{C}}' by multiplying the vector {{CP}} and adding it onto vertex {{P}}.",
        right: "Write instead: 'Multiply vector {{CP}} by {{k}}, then add that new vector onto **centre {{C}}**.'",
      },
      {
        wrong: "Never write: 'These two triangles are congruent by AAA because all three angles match.'",
        right: "Write instead: 'Equal angles prove the triangles are **similar**; congruence requires at least one matching side length (SSS, SAS, ASA, or RHS).'",
      },
      {
        wrong: "Never write: 'In a translation from A to B, count the gap between the nearest edges of A and B.'",
        right: "Write instead: 'Track ONE vertex of A to its exact corresponding vertex on B: {{dx = x_B - x_A}}, {{dy = y_B - y_A}}.'",
      },
      {
        wrong: "Never write: 'Enlargement by scale factor 2' when the shape actually shrank to half its size.",
        right: "Write instead: 'Enlargement by scale factor {{1/2}}' — always compute {{k = (" + '"image"' + ")/(" + '"object"' + ")}}.",
      },
    ],
    examMistakes: [
      "Naming TWO transformations (e.g. 'rotate then translate') when the exam specifically asks for a **single** transformation — instant 0 marks!",
      "Forgetting the **direction** (clockwise / anticlockwise) on a {{90°}} rotation, or forgetting the **centre of rotation**.",
      "Mixing up the order of mapping ('describe the single transformation that maps **A onto B**' vs '**B onto A**'), giving the negative vector or reciprocal scale factor.",
      "Treating {{y = x}} as if it keeps {{y}} fixed, instead of swapping {{x}} and {{y}}.",
      "Using **SAS** when the equal angle is NOT trapped between the two equal sides (that is ASS, which fails unless the angle is {{90°}} and the hypotenuse matches for RHS).",
      "In nested similar triangles (parallel line inside a triangle), dividing the lower split segment instead of adding the two segments to get the **full** side of the big triangle.",
      "Forgetting to check whether similar shapes have been rotated or flipped before pairing up corresponding sides.",
    ],
    mnemonics: [
      {
        topic: "Describing Transformations (Marks Checklist)",
        device: "R-L · T-V · R-A-D-C · E-S-C",
        explanation:
          "**R**eflection → mirror **L**ine; **T**ranslation → **V**ector; **R**otation → **A**ngle, **D**irection, **C**entre; **E**nlargement → **S**cale factor, **C**entre.",
      },
      {
        topic: "Column Vector Directions",
        device: "Across the corridor (top), then Up or Down the stairs (bottom)",
        explanation:
          "Just like coordinates {{(x, y)}}, the top number moves right (+)/left (−) and the bottom number moves up (+)/down (−).",
      },
      {
        topic: "Congruence vs Similarity",
        device: "Congruent = Clones; Similar = Scaled",
        explanation:
          "**C**ongruent shapes are exact **C**lones (identical sides and angles); **S**imilar shapes are **S**caled versions (identical angles, proportional sides).",
      },
    ],
    realWorld: [
      {
        title: "2D & 3D Video Game Graphics",
        detail:
          "Every character sprite, camera pan, weapon spin, and zoom animation in a game engine applies translations, rotations, reflections, and enlargements to thousands of vertex coordinates 60 times a second.",
        emoji: "🎮",
      },
      {
        title: "Architectural Blueprints & Scale Models",
        detail:
          "An architect's 1 : 50 floor plan is mathematically similar to the real building — every room angle matches the real room, and every wall length is enlarged by scale factor 50 during construction.",
        emoji: "🏛️",
      },
      {
        title: "M. C. Escher Tessellations & Textile Design",
        detail:
          "Repeating wallpaper, Islamic geometric tiling, and Escher's interlocking birds are built by applying translations, reflections, and rotations to a single congruent tile.",
        emoji: "🎨",
      },
      {
        title: "Camera Lenses & Projectors",
        detail:
          "A cinema projector acts as a physical centre of enlargement: straight light rays pass through the film frame and enlarge it onto a huge screen while preserving exact proportions.",
        emoji: "📽️",
      },
    ],
    videos: [
      {
        title: "Reflections, Translations & Rotations — GCSE Maths",
        channel: "Corbettmaths",
        url: "https://www.youtube.com/results?search_query=corbettmaths+reflections+translations+rotations",
      },
      {
        title: "Enlargements with Integer & Fractional Scale Factors",
        channel: "GCSE Maths Tutor",
        url: "https://www.youtube.com/results?search_query=gcse+maths+tutor+enlargement+fractional+scale+factor",
      },
      {
        title: "Congruent Triangles (SSS, SAS, ASA, RHS) Explained",
        channel: "Corbettmaths",
        url: "https://www.youtube.com/results?search_query=corbettmaths+congruent+triangles+SSS+SAS+ASA+RHS",
      },
      {
        title: "Similar Shapes — Finding Missing Lengths",
        channel: "Cognito",
        url: "https://www.youtube.com/results?search_query=cognito+maths+similar+shapes+scale+factor",
      },
    ],
    formulas: [
      {
        name: "Reflection in x = a",
        formula: "{{(x, y) -> (2a - x, y)}}",
        note: "Vertical mirror line; y stays unchanged.",
      },
      {
        name: "Reflection in y = b",
        formula: "{{(x, y) -> (x, 2b - y)}}",
        note: "Horizontal mirror line; x stays unchanged.",
      },
      {
        name: "Reflection in y = x",
        formula: "{{(x, y) -> (y, x)}}",
        note: "Swap x and y coordinates.",
      },
      {
        name: "Reflection in y = −x",
        formula: "{{(x, y) -> (-y, -x)}}",
        note: "Swap and change both signs.",
      },
      {
        name: "Translation by vector (dx, dy)",
        formula: "{{(x, y) -> (x + dx, y + dy)}}",
        note: "Top = right(+)/left(−), bottom = up(+)/down(−).",
      },
      {
        name: "Rotation 90° ACW about (0, 0)",
        formula: "{{(x, y) -> (-y, x)}}",
        note: "Equivalent to 270° clockwise.",
      },
      {
        name: "Rotation 90° CW about (0, 0)",
        formula: "{{(x, y) -> (y, -x)}}",
        note: "Equivalent to 270° anticlockwise.",
      },
      {
        name: "Rotation 180° about (0, 0)",
        formula: "{{(x, y) -> (-x, -y)}}",
        note: "About centre C(a, b): midpoint of P and P' is C.",
      },
      {
        name: "Enlargement Scale Factor",
        formula: "{{k = (" + '"image length"' + ")/(" + '"object length"' + ")}}",
        note: "Image vector from centre C equals k × object vector from C.",
      },
      {
        name: "Triangle Congruence Conditions",
        formula: "SSS, SAS, ASA (AAS), RHS",
        note: "AAA proves similarity only; ASS is invalid.",
      },
    ],
  },
};
