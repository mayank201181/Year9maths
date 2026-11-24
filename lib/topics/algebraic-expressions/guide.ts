import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "algebraic-expressions",
  title: "Algebraic Expressions & Rearranging",
  strand: "Algebra",
  icon: "🔤",
  summary:
    "Expand double brackets using area grids, model geometric areas and perimeters, evaluate powers with negatives safely, and factorise or rearrange formulae.",
  intro:
    "Algebra is the language that turns arithmetic patterns into permanent rules. In this unit you move from single brackets to multiplying pairs of brackets, modelling shapes whose side lengths are algebraic, substituting negative numbers into indices without falling for BIDMAS traps, factorising quadratics, and rearranging formulae to isolate any variable you need.",
  guide: [
    // =========================================================================
    // 1. EXPANDING & SIMPLIFYING PAIRS OF BRACKETS
    // =========================================================================
    {
      id: "expanding-double-brackets",
      heading: "Expanding & Simplifying Pairs of Brackets",
      discovery: {
        problem:
          "Compute {{13 * 14}} without a calculator by splitting a {{13 * 14}} rectangle into four smaller rectangles of widths {{10}} and {{3}}, and heights {{10}} and {{4}}. Now replace {{10}} with {{x}}: what four terms make up {{(x + 3)(x + 4)}}?",
        idea:
          "The four sub-rectangles have areas {{10 * 10 = 100}}, {{10 * 4 = 40}}, {{3 * 10 = 30}}, and {{3 * 4 = 12}}, totalling {{182}}. Replacing {{10}} with {{x}} gives {{x^2 + 4x + 3x + 12 = x^2 + 7x + 12}}. Multiplying two brackets is literally finding the area of a partitioned rectangle — EVERY term in the first bracket multiplies EVERY term in the second!",
      },
      body: `When we expand a single bracket like {{3(x + 5)}}, we distribute the {{3}} to every term inside: {{3x + 15}}. Expanding a **pair of brackets** like {{(x + 3)(x + 4)}} uses the exact same distributive law twice: the entire first bracket multiplies each term of the second, or equivalently, each term of the first bracket multiplies each term of the second.

### Method 1: The Area Grid (Safest for Signs & Harder Coefficients)
Draw a 2 × 2 box. Write the terms of the first bracket along the top (including any minus signs!) and the terms of the second bracket down the left side. Multiply row × column into each of the four cells, then collect the like terms — usually the two diagonal {{x}}-terms combine.

### Method 2: FOIL (First, Outer, Inner, Last)
For {{(ax + b)(cx + d)}}:
- **F**irst: {{ax * cx = acx^2}}
- **O**uter: {{ax * d = adx}}
- **I**nner: {{b * cx = bcx}}
- **L**ast: {{b * d = bd}}

Add all four terms and collect the middle terms: {{acx^2 + (ad + bc)x + bd}}.

### Two Special Identities to Recognise on Sight
1. **Squaring a bracket (Perfect Square):**
   Always rewrite {{(x - 5)^2}} as {{(x - 5)(x - 5)}} BEFORE expanding!
   {{(x + a)^2 = x^2 + 2ax + a^2}} and {{(x - a)^2 = x^2 - 2ax + a^2}}.
   Notice the middle term {{+-2ax}} — NEVER write {{(x - 5)^2 = x^2 - 25}}!

2. **Difference of Two Squares (DOTS):**
   When two brackets have the same terms with opposite middle signs, the Outer and Inner terms cancel completely:
   {{(x + a)(x - a) = x^2 - ax + ax - a^2 = x^2 - a^2}}.
   For example, {{(2x + 7)(2x - 7) = 4x^2 - 49}}.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Area grid model expanding (2x + 3)(x - 4) into four cells: 2x squared, +3x, -8x, and -12">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="26" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)">Area Grid for (2x + 3)(x − 4)</text>
  <!-- Grid headers -->
  <text x="155" y="56" text-anchor="middle" font-size="14" font-weight="700" fill="var(--brand)">2x</text>
  <text x="275" y="56" text-anchor="middle" font-size="14" font-weight="700" fill="var(--brand)">+3</text>
  <text x="68" y="106" text-anchor="middle" font-size="14" font-weight="700" fill="var(--brand)">x</text>
  <text x="68" y="176" text-anchor="middle" font-size="14" font-weight="700" fill="var(--bad)">−4</text>
  <text x="68" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink-2)">×</text>
  <!-- Four cells -->
  <rect x="95" y="68" width="120" height="68" rx="6" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
  <rect x="215" y="68" width="120" height="68" rx="6" fill="var(--surface-2)" stroke="var(--good)" stroke-width="2"/>
  <rect x="95" y="136" width="120" height="68" rx="6" fill="var(--surface-2)" stroke="var(--good)" stroke-width="2"/>
  <rect x="215" y="136" width="120" height="68" rx="6" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="2"/>
  <!-- Cell text -->
  <text x="155" y="108" text-anchor="middle" font-size="17" font-weight="700" fill="var(--ink)">2x²</text>
  <text x="275" y="108" text-anchor="middle" font-size="17" font-weight="700" fill="var(--good)">+3x</text>
  <text x="155" y="176" text-anchor="middle" font-size="17" font-weight="700" fill="var(--good)">−8x</text>
  <text x="275" y="176" text-anchor="middle" font-size="17" font-weight="700" fill="var(--bad)">−12</text>
  <!-- Diagonal highlight arrow -->
  <line x1="180" y1="160" x2="250" y2="118" stroke="var(--good)" stroke-width="2" stroke-dasharray="5,4"/>
  <!-- Summary panel -->
  <rect x="358" y="68" width="184" height="136" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="450" y="94" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink-2)">Collect all 4 cells:</text>
  <text x="450" y="120" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">2x² + 3x − 8x − 12</text>
  <text x="450" y="148" text-anchor="middle" font-size="13" font-weight="700" fill="var(--good)">Like terms: +3x − 8x = −5x</text>
  <line x1="376" y1="162" x2="524" y2="162" stroke="var(--line)" stroke-width="1.5"/>
  <text x="450" y="188" text-anchor="middle" font-size="16" font-weight="700" fill="var(--brand)">= 2x² − 5x − 12</text>
  <text x="280" y="232" text-anchor="middle" font-size="12" fill="var(--ink-2)">Keep every sign attached to the term after it: (−4) × (+3) = −12.</text>
</svg>`,
      diagramCaption:
        "The 2 × 2 area grid guarantees you never drop a cross-term or lose a minus sign; the diagonal cells combine into the middle x-term.",
      whyItWorks:
        "By the distributive law, {{(a + b)(c + d) = a(c + d) + b(c + d) = ac + ad + bc + bd}}. For positive numbers this is the exact sum of the four sub-rectangle areas; the algebraic identity stays true for negative numbers too because multiplication distributes over subtraction.",
      keyPoints: [
        "Attach every `+` or `−` sign permanently to the term immediately after it before multiplying.",
        "Always check you have 4 products from two binomial brackets before collecting like terms.",
        "Rewrite any squared bracket {{(ax + b)^2}} as {{(ax + b)(ax + b)}} so you never miss the middle term.",
        "Difference of two squares {{(a + b)(a - b) = a^2 - b^2}} has NO middle term because {{+ab - ab = 0}}.",
      ],
      strategies: [
        "Grid first when minus signs or leading coefficients like {{3x}} appear — it prevents sign slips.",
        "Spot special patterns (perfect squares and difference of two squares) to work faster and double-check.",
        "Quick sanity check: substitute {{x = 1}} or {{x = 2}} into both the original brackets and your expanded answer — they MUST match!",
      ],
      thinkDeeper:
        "Use the difference of two squares identity {{(a + b)(a - b) = a^2 - b^2}} to calculate {{997 * 1003}} in your head in three seconds. What about {{48^2}} using {{(50 - 2)^2}}?",
      workedExamples: [
        {
          title: "Expanding with Negatives and Coefficients",
          problem: "Expand and simplify {{(3x - 2)(2x - 5)}}.",
          steps: [
            "First terms: {{3x * 2x = 6x^2}}.",
            "Outer terms: {{3x * (-5) = -15x}}.",
            "Inner terms: {{(-2) * 2x = -4x}}.",
            "Last terms: {{(-2) * (-5) = +10}} (negative × negative = positive!).",
            "Collect the like {{x}}-terms: {{-15x - 4x = -19x}}.",
            "Write the final simplified expression: {{6x^2 - 19x + 10}}.",
          ],
          answer: "{{6x^2 - 19x + 10}}",
          yourTurn: {
            question: "Expand and simplify {{(2x - 3)(4x - 1)}}.",
            answer: {
              type: "expression",
              expr: "8x^2 - 14x + 3",
              form: "expanded",
              display: "{{8x^2 - 14x + 3}}",
            },
            solution:
              "{{2x(4x) + 2x(-1) - 3(4x) - 3(-1) = 8x^2 - 2x - 12x + 3 = 8x^2 - 14x + 3}}.",
          },
        },
        {
          title: "Expanding and Subtracting a Squared Bracket",
          problem: "Expand and simplify {{(x + 4)^2 - (x - 3)(x + 3)}}.",
          steps: [
            "Expand the first part as {{(x + 4)(x + 4) = x^2 + 4x + 4x + 16 = x^2 + 8x + 16}}.",
            "Expand the second part using difference of two squares: {{(x - 3)(x + 3) = x^2 - 9}}.",
            "Keep brackets around the subtracted expansion: {{(x^2 + 8x + 16) - (x^2 - 9)}}.",
            "Distribute the minus sign across BOTH terms: {{x^2 + 8x + 16 - x^2 + 9}}.",
            "Collect like terms: {{(x^2 - x^2) + 8x + (16 + 9) = 8x + 25}}.",
          ],
          answer: "{{8x + 25}}",
          yourTurn: {
            question: "Expand and simplify {{(x + 5)^2 - (x - 2)(x + 2)}}.",
            answer: {
              type: "expression",
              expr: "10x + 29",
              form: "expanded",
              display: "{{10x + 29}}",
            },
            solution:
              "{{(x^2 + 10x + 25) - (x^2 - 4) = x^2 + 10x + 25 - x^2 + 4 = 10x + 29}}.",
          },
        },
      ],
    },

    // =========================================================================
    // 2. BRACKETS IN GEOMETRIC AREA & PERIMETER PROBLEMS
    // =========================================================================
    {
      id: "geometric-algebra",
      heading: "Brackets in Geometric Area & Perimeter Problems",
      discovery: {
        problem:
          "A rectangular garden measures {{(x + 5)}} m by {{(x + 2)}} m. A rectangular patio of {{x}} m by {{(x - 1)}} m sits inside it. Without knowing {{x}}, can the area of the remaining grass still depend on {{x^2}}, or does {{x^2}} disappear?",
        idea:
          "Total garden area is {{(x + 5)(x + 2) = x^2 + 7x + 10}}. Patio area is {{x(x - 1) = x^2 - x}}. Subtracting gives {{(x^2 + 7x + 10) - (x^2 - x) = 8x + 10}} — the {{x^2}} terms cancel completely! Notice how protective brackets around {{(x^2 - x)}} turned {{-(-x)}} into {{+x}}.",
      },
      body: `Geometry problems with algebraic side lengths test whether you can translate a picture into clean expressions and handle brackets accurately.

### 1. Perimeter Expressions
Perimeter is the **total distance around the outside** — add every side once.
- For a rectangle of length {{L}} and width {{W}}: {{P = 2(L + W) = 2L + 2W}}.
- For a **compound L-shape**, find any unlabelled horizontal or vertical sides by subtracting known parallel sides first — or use the **"push-out" trick**: pushing an inward corner outward shows that a simple L-shape has the EXACT same perimeter as its bounding rectangle!

### 2. Area of Rectangles & Triangles
- Rectangle area: {{A = "length" * "width"}} → typically a product of two brackets like {{(2x + 1)(x + 3)}}.
- Triangle area: {{A = (1/2) * "base" * "height"}} → multiply the brackets first, then halve every term (or halve an even bracket first!).

### 3. Shaded Regions, Frames & Compound Shapes
There are two classic strategies for compound or shaded areas:
- **Outer minus Inner (Cutout method):** Ideal for picture frames, borders, and lawns with a pond/patio inside. Always put **brackets around the entire inner area** before subtracting!
- **Split and Add:** Slice an L-shape or T-shape horizontally or vertically into two clean rectangles, find each area, and add them together.

Always double-check whether your answer makes sense physically by testing a valid positive value of {{x}} (large enough that every side length is positive).`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rectangular frame of outer dimensions (2x + 5) by (x + 4) with inner unshaded rectangle (x + 1) by x">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="24" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)">Shaded Border = Outer Area − Inner Area</text>
  <!-- Outer shaded rectangle -->
  <rect x="65" y="54" width="240" height="148" rx="4" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2.5"/>
  <!-- Inner cutout rectangle -->
  <rect x="120" y="92" width="130" height="72" rx="3" fill="var(--surface)" stroke="var(--ink)" stroke-width="2" stroke-dasharray="6,3"/>
  <!-- Outer dimension labels -->
  <text x="185" y="46" text-anchor="middle" font-size="14" font-weight="700" fill="var(--brand)">2x + 5</text>
  <text x="36" y="132" text-anchor="middle" font-size="14" font-weight="700" fill="var(--brand)">x + 4</text>
  <!-- Inner dimension labels -->
  <text x="185" y="114" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">x + 1</text>
  <text x="234" y="134" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">x</text>
  <text x="185" y="148" text-anchor="middle" font-size="11" fill="var(--ink-2)">(cutout)</text>
  <!-- Working box on right -->
  <rect x="330" y="54" width="212" height="148" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="436" y="78" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">Outer = (2x + 5)(x + 4)</text>
  <text x="436" y="100" text-anchor="middle" font-size="13" fill="var(--ink)">= 2x² + 13x + 20</text>
  <text x="436" y="126" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink-2)">Inner = x(x + 1) = x² + x</text>
  <line x1="348" y1="140" x2="524" y2="140" stroke="var(--line)" stroke-width="1.5"/>
  <text x="436" y="162" text-anchor="middle" font-size="12" fill="var(--bad)">Shaded = (2x²+13x+20) − (x²+x)</text>
  <text x="436" y="186" text-anchor="middle" font-size="15" font-weight="700" fill="var(--good)">= x² + 12x + 20</text>
  <text x="280" y="232" text-anchor="middle" font-size="12" fill="var(--ink-2)">Always wrap the subtracted area in brackets so every term inside flips sign.</text>
</svg>`,
      diagramCaption:
        "Subtracting an inner cutout from an outer rectangle: protective brackets around (x² + x) ensure you subtract both x² and x.",
      whyItWorks:
        "Area is additive: if a large region is partitioned into non-overlapping pieces, Total Area = Piece 1 + Piece 2. Rearranging gives Shaded Area = Outer Area − Cutout Area, which stays algebraically valid for all values of {{x}} that keep every length positive.",
      keyPoints: [
        "Always check whether a question asks for **perimeter** (add sides, linear in {{x}}) or **area** (multiply sides, often quadratic in {{x^2}}).",
        "When subtracting a cutout area, wrap the entire inner expression in brackets: {{(A_1) - (A_2)}}.",
        "For a uniform border of width {{w}} all the way around a rectangle of {{L * H}}, the outer dimensions are {{L + 2w}} and {{H + 2w}} (add {{w}} on BOTH sides!).",
        "Check compound L-shapes by verifying that opposite parallel segments add up to the same total length.",
      ],
      strategies: [
        "Label every missing edge on the sketch BEFORE writing any area or perimeter formula.",
        "For uniform frames/paths around a shape, remember to add the border width TWICE (left + right, top + bottom).",
        "Test your simplified expression at {{x = 2}} (or another safe positive integer) directly on the geometry to catch arithmetic slips.",
      ],
      thinkDeeper:
        "A square lawn of side {{x}} metres has a path of uniform width {{2}} metres built all around the outside. Without expanding yet, sketch the path as four rectangles and four corner squares. How does that instantly tell you the path's area is {{8x + 16}}?",
      workedExamples: [
        {
          title: "Uniform Path Around a Rectangular Pool",
          problem:
            "A rectangular swimming pool has length {{(3x + 2)}} m and width {{(x + 1)}} m. A tiled path of uniform width {{1}} m runs all the way around the outside of the pool. Find a simplified expression for the area of the tiled path.",
          steps: [
            "Add {{1}} m to BOTH ends of each side to get the outer dimensions:",
            "Outer length {{= (3x + 2) + 2 = 3x + 4}} m; outer width {{= (x + 1) + 2 = x + 3}} m.",
            "Outer area {{= (3x + 4)(x + 3) = 3x^2 + 9x + 4x + 12 = 3x^2 + 13x + 12}}.",
            "Pool area {{= (3x + 2)(x + 1) = 3x^2 + 3x + 2x + 2 = 3x^2 + 5x + 2}}.",
            "Path area {{= (3x^2 + 13x + 12) - (3x^2 + 5x + 2) = 8x + 10}} {{m^2}}.",
          ],
          answer: "{{8x + 10}} m²",
          yourTurn: {
            question:
              "A rectangular photograph measures {{(2x + 1)}} cm by {{(x + 2)}} cm. A border of uniform width {{1}} cm surrounds it on all four sides. Find the simplified expression for the area of the border.",
            answer: {
              type: "expression",
              expr: "6x + 10",
              form: "expanded",
              display: "{{6x + 10}}",
            },
            solution:
              "Outer dimensions are {{2x + 3}} and {{x + 4}}. Outer area {{= (2x + 3)(x + 4) = 2x^2 + 11x + 12}}. Photo area {{= (2x + 1)(x + 2) = 2x^2 + 5x + 2}}. Border {{= (2x^2 + 11x + 12) - (2x^2 + 5x + 2) = 6x + 10}}.",
          },
        },
        {
          title: "Area of a Triangle with Algebraic Base and Height",
          problem:
            "A right-angled triangle has base {{(2x + 6)}} cm and perpendicular height {{(x + 5)}} cm. Write an expanded, simplified expression for its area.",
          steps: [
            "Area of a triangle {{= (1/2) * base * height}}.",
            "Notice {{2x + 6 = 2(x + 3)}}, so halving the base first gives {{(x + 3)}}.",
            "Multiply {{(x + 3)(x + 5) = x^2 + 5x + 3x + 15 = x^2 + 8x + 15}}.",
            "Check by expanding first: {{(2x + 6)(x + 5) = 2x^2 + 16x + 30}}, and half of that is {{x^2 + 8x + 15}}.",
          ],
          answer: "{{x^2 + 8x + 15}} cm²",
          yourTurn: {
            question:
              "A triangle has base {{(4x - 2)}} cm and perpendicular height {{(x + 3)}} cm. Find the expanded, simplified expression for its area.",
            answer: {
              type: "expression",
              expr: "2x^2 + 5x - 3",
              form: "expanded",
              display: "{{2x^2 + 5x - 3}}",
            },
            solution:
              "Halve the base first: {{(1/2)(4x - 2) = 2x - 1}}. Area {{= (2x - 1)(x + 3) = 2x^2 + 6x - x - 3 = 2x^2 + 5x - 3}}.",
          },
        },
      ],
    },

    // =========================================================================
    // 3. EVALUATING EXPRESSIONS WITH INDICES & NEGATIVES
    // =========================================================================
    {
      id: "evaluating-expressions",
      heading: "Evaluating Expressions with Indices & Negatives",
      discovery: {
        problem:
          "Type {{-3^2}} and {{(-3)^2}} into a scientific calculator. Why does one give {{-9}} while the other gives {{+9}}? Now suppose {{x = -3}}: what is the value of {{x^2}}, {{-x^2}}, and {{2x^2}}?",
        idea:
          "In BIDMAS, **Indices come BEFORE unary negation and BEFORE multiplication**! So {{-3^2}} means {{-(3^2) = -9}}, whereas {{(-3)^2 = (-3) * (-3) = +9}}. When substituting {{x = -3}}, wrap the substituted value in brackets first: {{x^2 = (-3)^2 = 9}}, {{-x^2 = -(-3)^2 = -9}}, and {{2x^2 = 2(-3)^2 = 2 * 9 = 18}}.",
      },
      body: `Substitution looks simple until negative numbers and powers appear together. Almost every lost mark in Year 9 and IGCSE substitution comes from one habit: **forgetting to put brackets around a negative number when you substitute it**.

### The Golden Rule of Substitution
Whenever you substitute a negative number (or fraction) for a letter, **replace the letter with brackets containing that value**!
If {{x = -4}}:
- {{x^2 -> (-4)^2 = (-4) * (-4) = +16}}
- {{x^3 -> (-4)^3 = (-4) * (-4) * (-4) = -64}} (even power → positive; odd power → negative!)
- {{-x^2 -> -(-4)^2 = -(16) = -16}} (square first, THEN apply the front minus!)
- {{3x^2 -> 3(-4)^2 = 3 * 16 = 48}} (NOT {{(3 * (-4))^2 = 144}}!)
- {{(3x)^2 -> (3 * (-4))^2 = (-12)^2 = 144}} (brackets mean multiply FIRST, then square!)

### Comparing the Four Classic Pairs (at {{x = -3}})
| Expression | BIDMAS Order | Substitution | Value |
|---|---|---|---|
| {{x^2}} | Square {{x}} | {{(-3)^2}} | {{9}} |
| {{-x^2}} | Square {{x}}, then negate | {{-(-3)^2}} | {{-9}} |
| {{2x^2}} | Square {{x}}, then × 2 | {{2(-3)^2 = 2 * 9}} | {{18}} |
| {{(2x)^2}} | Multiply by 2, then square | {{(2 * (-3))^2 = (-6)^2}} | {{36}} |

### Substituting Fractions & Zero
When substituting a fraction like {{x = -1/2}}, square numerator and denominator separately: {{(-1/2)^2 = 1/4}} and {{(-1/2)^3 = -1/8}}. Remember also that any non-zero number to the power {{0}} equals {{1}}, so {{(-5)^0 = 1}}, while {{-5^0 = -(5^0) = -1}}!`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="BIDMAS comparison showing -x squared vs (-x) squared and 2x squared vs (2x) squared when x = -3">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="26" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)">Brackets Change Everything! (Let x = −3)</text>
  <!-- Left card: -x^2 vs (-x)^2 -->
  <rect x="20" y="44" width="252" height="170" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="146" y="68" text-anchor="middle" font-size="14" font-weight="700" fill="var(--brand)">Negation vs Squaring</text>
  <rect x="34" y="82" width="224" height="52" rx="8" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="50" y="104" font-size="14" font-weight="700" fill="var(--bad)">−x²  =  −(x²)</text>
  <text x="50" y="124" font-size="13" fill="var(--ink)">= −((−3)²) = −(9) = −9</text>
  <rect x="34" y="146" width="224" height="52" rx="8" fill="var(--surface)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="50" y="168" font-size="14" font-weight="700" fill="var(--good)">(−x)²</text>
  <text x="50" y="188" font-size="13" fill="var(--ink)">= (−(−3))² = (+3)² = +9</text>
  <!-- Right card: 2x^2 vs (2x)^2 -->
  <rect x="288" y="44" width="252" height="170" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="414" y="68" text-anchor="middle" font-size="14" font-weight="700" fill="var(--brand)">Coefficient vs Brackets</text>
  <rect x="302" y="82" width="224" height="52" rx="8" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="318" y="104" font-size="14" font-weight="700" fill="var(--brand)">2x²  =  2 × (x²)</text>
  <text x="318" y="124" font-size="13" fill="var(--ink)">= 2 × (−3)² = 2 × 9 = 18</text>
  <rect x="302" y="146" width="224" height="52" rx="8" fill="var(--surface)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="318" y="168" font-size="14" font-weight="700" fill="var(--good)">(2x)²  =  4x²</text>
  <text x="318" y="188" font-size="13" fill="var(--ink)">= (2 × (−3))² = (−6)² = 36</text>
  <text x="280" y="234" text-anchor="middle" font-size="12" fill="var(--ink-2)">Power sticks ONLY to the symbol or bracket directly to its left.</text>
</svg>`,
      diagramCaption:
        "An exponent acts ONLY on the number, letter, or bracket immediately before it — always wrap negative substitutions in parentheses.",
      whyItWorks:
        "Standard mathematical order of operations (BIDMAS) gives exponentiation higher precedence than multiplication and unary negation. Writing {{-a^2}} means {{(-1) * a^2}}, so {{a}} is squared first; writing {{(-a)^2}} groups the minus sign inside the base being squared.",
      keyPoints: [
        "Always substitute negative values inside brackets: replace {{x}} with {{(-3)}}, never bare {{-3}}.",
        "An even integer power of a negative number is positive ({{(-2)^4 = +16}}); an odd power is negative ({{(-2)^3 = -8}}).",
        "{{kx^2}} means {{k * (x^2)}}, NOT {{(kx)^2}} — indices act before multiplication.",
        "When subtracting a negative term, e.g. {{-5x}} at {{x = -2}}, track both signs: {{-5(-2) = +10}}.",
      ],
      strategies: [
        "Rewrite every letter as empty brackets `()` first, then drop the numbers inside.",
        "Evaluate all powers on one clean line before doing any multiplication, addition, or subtraction.",
        "Check parity of exponents: even powers erase a minus inside brackets, odd powers preserve it.",
      ],
      thinkDeeper:
        "Is {{(-x)^3}} always equal to {{-x^3}} for EVERY real number {{x}}? What about {{(-x)^4}} compared to {{-x^4}}? Explain why odd and even powers behave differently.",
      workedExamples: [
        {
          title: "Evaluating a Quadratic with a Negative Input",
          problem: "Find the value of {{3x^2 - 5x - 4}} when {{x = -2}}.",
          steps: [
            "Replace every {{x}} with {{(-2)}}: {{3(-2)^2 - 5(-2) - 4}}.",
            "Evaluate the power first: {{(-2)^2 = 4}}.",
            "Do the multiplications: {{3 * 4 = 12}} and {{-5 * (-2) = +10}}.",
            "Combine left to right: {{12 + 10 - 4 = 18}}.",
          ],
          answer: "{{18}}",
          yourTurn: {
            question: "Find the value of {{2x^2 - 7x + 3}} when {{x = -3}}.",
            answer: { type: "number", value: 42 },
            solution:
              "{{2(-3)^2 - 7(-3) + 3 = 2(9) + 21 + 3 = 18 + 21 + 3 = 42}}.",
          },
        },
        {
          title: "Mixing Cubes, Negatives, and Brackets",
          problem: "Evaluate {{a^3 - 2b^2 + (ab)^2}} when {{a = -2}} and {{b = 3}}.",
          steps: [
            "Substitute with brackets: {{(-2)^3 - 2(3)^2 + ((-2)(3))^2}}.",
            "Work out each piece separately: {{(-2)^3 = -8}}, {{(3)^2 = 9}}, and {{(-2)(3) = -6}}.",
            "Continue: {{-8 - 2(9) + (-6)^2 = -8 - 18 + 36}}.",
            "Combine: {{-26 + 36 = 10}}.",
          ],
          answer: "{{10}}",
          yourTurn: {
            question: "Evaluate {{a^3 - 3b^2}} when {{a = -3}} and {{b = -2}}.",
            answer: { type: "number", value: -39 },
            solution:
              "{{(-3)^3 - 3(-2)^2 = -27 - 3(4) = -27 - 12 = -39}}.",
          },
        },
      ],
    },

    // =========================================================================
    // 4. FACTORISING & REARRANGING SIMPLE FORMULAE
    // =========================================================================
    {
      id: "factorising-rearranging",
      heading: "Factorising & Rearranging Simple Formulae",
      discovery: {
        problem:
          "You know that {{(x + 3)(x + 5) = x^2 + 8x + 15}}. Look at the numbers {{8}} and {{15}} — how do they connect to {{3}} and {{5}}? Now reverse the process: write {{x^2 + 11x + 24}} back as a product of two brackets!",
        idea:
          "{{3 + 5 = 8}} (the {{x}}-coefficient) and {{3 * 5 = 15}} (the constant term)! So to factorise {{x^2 + 11x + 24}}, we need two numbers that multiply to {{24}} and add to {{11}}: that's {{3}} and {{8}}, giving {{(x + 3)(x + 8)}}.",
      },
      body: `**Factorising** is the exact reverse of expanding: writing a sum/difference as a **product of factors**. It is also the secret weapon that lets you rearrange formulae when the target letter appears more than once!

### 1. Single-Bracket Factorising (Highest Common Factor)
Always look for the **highest common factor (HCF)** of BOTH numbers AND variable powers first!
- Example: {{12x^3y - 18x^2y^2}}.
  - HCF of {{12}} and {{18}} is {{6}}.
  - Lowest power of {{x}} shared by both terms is {{x^2}}; lowest power of {{y}} is {{y}}.
  - Pull out {{6x^2y}}: {{6x^2y(2x - 3y)}}.
- **Check:** What remains inside the bracket ({{2x - 3y}}) must have NO common factor left, and expanding must give back the original expression.

### 2. Factorising Monic Quadratics {{x^2 + bx + c}}
We want {{(x + p)(x + q) = x^2 + (p + q)x + pq}}. Find two integers {{p, q}} that:
- **Multiply** to give {{c}} (the constant), AND
- **Add** to give {{b}} (the {{x}}-coefficient).

Sign detective guide:
- {{c > 0, b > 0}}: both numbers positive (e.g. {{x^2 + 7x + 12 = (x + 3)(x + 4)}}).
- {{c > 0, b < 0}}: both numbers negative (e.g. {{x^2 - 7x + 12 = (x - 3)(x - 4)}}).
- {{c < 0}}: one positive, one negative; the larger magnitude takes the sign of {{b}} (e.g. {{x^2 - 2x - 15 = (x - 5)(x + 3)}}).

### 3. Difference of Two Squares (DOTS)
Whenever you see **two terms, both squares, separated by a minus sign**:
{{a^2 - b^2 = (a + b)(a - b)}}.
Examples: {{x^2 - 49 = (x + 7)(x - 7)}} and {{9y^2 - 25 = (3y + 5)(3y - 5)}}.

### 4. Rearranging Formulae (Changing the Subject)
To make a letter the **subject**, isolate it on one side using **inverse operations** (peel off outer layers in reverse BIDMAS order):
- Undo + with −, × with ÷, squaring with √, and square root with squaring.
- **When the subject appears TWICE:**
  1. Clear fractions / expand brackets.
  2. Collect EVERY term containing the subject on one side, and all other terms on the other side.
  3. **Factorise** the subject out of a single bracket!
  4. Divide both sides by the bracket.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-step flowchart for rearranging a formula when the subject x appears twice, turning ax + b = cx + d into x = (d - b) / (a - c)">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="25" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)">Subject Appears Twice? Collect → Factorise → Divide!</text>
  <!-- Step 1 -->
  <rect x="18" y="48" width="118" height="104" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.8"/>
  <text x="77" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">1. Start</text>
  <text x="77" y="102" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">ax + b = cx + d</text>
  <text x="77" y="132" text-anchor="middle" font-size="11" fill="var(--ink-2)">Make x subject</text>
  <!-- Arrow 1 -->
  <line x1="136" y1="100" x2="154" y2="100" stroke="var(--ink-2)" stroke-width="2"/>
  <polygon points="154,95 162,100 154,105" fill="var(--ink-2)"/>
  <!-- Step 2 -->
  <rect x="162" y="48" width="122" height="104" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.8"/>
  <text x="223" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">2. Collect x</text>
  <text x="223" y="102" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">ax − cx = d − b</text>
  <text x="223" y="132" text-anchor="middle" font-size="11" fill="var(--ink-2)">All x on one side</text>
  <!-- Arrow 2 -->
  <line x1="284" y1="100" x2="302" y2="100" stroke="var(--ink-2)" stroke-width="2"/>
  <polygon points="302,95 310,100 302,105" fill="var(--ink-2)"/>
  <!-- Step 3 -->
  <rect x="310" y="48" width="116" height="104" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
  <text x="368" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">3. Factorise!</text>
  <text x="368" y="102" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">x(a − c) = d − b</text>
  <text x="368" y="132" text-anchor="middle" font-size="11" fill="var(--brand)">Now only ONE x!</text>
  <!-- Arrow 3 -->
  <line x1="426" y1="100" x2="444" y2="100" stroke="var(--ink-2)" stroke-width="2"/>
  <polygon points="444,95 452,100 444,105" fill="var(--ink-2)"/>
  <!-- Step 4 -->
  <rect x="452" y="48" width="90" height="104" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="2"/>
  <text x="497" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">4. Divide</text>
  <text x="497" y="96" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">d − b</text>
  <line x1="474" y1="104" x2="520" y2="104" stroke="var(--ink)" stroke-width="1.5"/>
  <text x="497" y="121" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">a − c</text>
  <text x="497" y="142" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">x =</text>
  <!-- Bottom concrete example bar -->
  <rect x="30" y="174" width="500" height="56" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="198" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Example: Make x the subject of  y = 3x + kx − 5</text>
  <text x="280" y="218" text-anchor="middle" font-size="13" fill="var(--brand)">y + 5 = 3x + kx   →   y + 5 = x(3 + k)   →   x = (y + 5) / (3 + k)</text>
</svg>`,
      diagramCaption:
        "Factorising collapses two appearances of the subject into one, turning a stuck equation into a single division.",
      whyItWorks:
        "Factorising uses the distributive law in reverse: {{ax - cx = x(a - c)}}. Because an equation stays balanced whenever you perform the same valid operation to both sides, dividing both sides by {{(a - c)}} isolates {{x}} completely.",
      keyPoints: [
        "Factorising **completely** means taking out the HIGHEST numerical and algebraic common factor — check nothing common remains inside the bracket.",
        "For {{x^2 + bx + c}}, list factor pairs of {{c}} systematically until a pair adds to {{b}}.",
        "Always check for a common factor BEFORE trying quadratic factorising (e.g. {{2x^2 - 18 = 2(x^2 - 9) = 2(x + 3)(x - 3)}}).",
        "A variable is NOT the subject if it still appears on the right-hand side — collect and factorise it out!",
      ],
      strategies: [
        "Always expand your factorised answer mentally in 3 seconds to confirm it equals the original expression.",
        "When rearranging a formula with a fraction like {{v = (u + at)/2}}, multiply out the denominator FIRST.",
        "Test rearranged formulae with easy numbers (e.g. pick {{x = 2, a = 5, c = 2}} to check both original and rearranged formulae match).",
      ],
      thinkDeeper:
        "Can {{x^2 + 9}} be factorised using real numbers in the same way as {{x^2 - 9}}? Try testing {{(x + 3)(x + 3)}} and {{(x - 3)(x - 3)}} and explain why a SUM of two squares does not factorise over the real numbers.",
      workedExamples: [
        {
          title: "Factorising a Quadratic with a Negative Constant",
          problem: "Factorise completely: {{x^2 - 3x - 28}}.",
          steps: [
            "We need two integers that multiply to {{-28}} and add to {{-3}}.",
            "Since the product is negative, one factor is positive and one is negative; since the sum is negative, the larger magnitude is negative.",
            "Check factor pairs of {{28}}: {{1}} and {{-28}} (sum {{-27}}), {{2}} and {{-14}} (sum {{-12}}), {{4}} and {{-7}} (sum {{-3}}) ✓.",
            "Write the brackets: {{(x - 7)(x + 4)}}.",
            "Quick check: {{(x - 7)(x + 4) = x^2 + 4x - 7x - 28 = x^2 - 3x - 28}} ✓.",
          ],
          answer: "{{(x - 7)(x + 4)}}",
          yourTurn: {
            question: "Factorise completely: {{x^2 + 2x - 24}}.",
            answer: {
              type: "expression",
              expr: "(x + 6)(x - 4)",
              form: "factorised",
              display: "{{(x + 6)(x - 4)}}",
            },
            solution:
              "Numbers multiplying to {{-24}} and adding to {{+2}} are {{+6}} and {{-4}}, so {{(x + 6)(x - 4)}}.",
          },
        },
        {
          title: "Rearranging When the Subject Appears Twice",
          problem: "Make {{t}} the subject of {{y = 4t + mt - 7}}.",
          steps: [
            "Move the term without {{t}} to the left by adding {{7}} to both sides: {{y + 7 = 4t + mt}}.",
            "Factorise {{t}} out on the right-hand side: {{y + 7 = t(4 + m)}}.",
            "Divide both sides by {{(4 + m)}}: {{t = (y + 7)/(4 + m)}}.",
          ],
          answer: "{{t = (y + 7)/(4 + m)}}",
          yourTurn: {
            question: "Make {{x}} the subject of {{y = 5x - kx + 3}}.",
            answer: {
              type: "expression",
              expr: "(y - 3)/(5 - k)",
              display: "{{x = (y - 3)/(5 - k)}}",
            },
            solution:
              "Subtract {{3}}: {{y - 3 = 5x - kx}}. Factorise {{x}}: {{y - 3 = x(5 - k)}}. Divide by {{(5 - k)}}: {{x = (y - 3)/(5 - k)}}.",
          },
        },
      ],
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Expand {{(x + a)(x + b)}}.",
        back: "{{x^2 + (a + b)x + ab}} — the middle coefficient is the SUM {{a + b}} and the constant is the PRODUCT {{ab}}.",
      },
      {
        front: "Expand {{(x + a)^2}} and {{(x - a)^2}}.",
        back: "{{(x + a)^2 = x^2 + 2ax + a^2}} and {{(x - a)^2 = x^2 - 2ax + a^2}}. Never forget the middle term {{+-2ax}}!",
      },
      {
        front: "What is the Difference of Two Squares identity?",
        back: "{{a^2 - b^2 = (a + b)(a - b)}}. Works in both directions: expanding cancels the middle term, and factorising splits two squares separated by a minus.",
      },
      {
        front: "Expand {{(2x - 3)(3x + 4)}}.",
        back: "{{6x^2 + 8x - 9x - 12 = 6x^2 - x - 12}}.",
      },
      {
        front: "What is the difference between {{-x^2}} and {{(-x)^2}} when {{x = 5}}?",
        back: "{{-x^2 = -(5^2) = -25}}, whereas {{(-x)^2 = (-5)^2 = +25}}. Even at {{x = -5}}, {{-x^2 = -(-5)^2 = -25}} while {{(-x)^2 = (+5)^2 = +25}}!",
      },
      {
        front: "What is the difference between {{3x^2}} and {{(3x)^2}}?",
        back: "{{3x^2}} squares ONLY {{x}} then multiplies by {{3}}; {{(3x)^2 = 9x^2}} squares BOTH {{3}} and {{x}}.",
      },
      {
        front: "What happens when you raise a negative number to an even vs odd positive integer power?",
        back: "Even power → positive result (e.g. {{(-2)^4 = 16}}). Odd power → negative result (e.g. {{(-2)^3 = -8}}).",
      },
      {
        front: "How do you find the outer dimensions of a rectangle {{L * W}} surrounded by a uniform border of width {{d}}?",
        back: "Add {{2d}} to BOTH dimensions: outer length {{= L + 2d}} and outer width {{= W + 2d}} (border on both ends!).",
      },
      {
        front: "What must you do before subtracting an inner area expression from an outer area expression?",
        back: "Wrap the ENTIRE subtracted expression in brackets, e.g. {{(x^2 + 7x + 10) - (x^2 - x)}}, so every sign inside flips.",
      },
      {
        front: "How do you factorise a single bracket completely?",
        back: "Pull out the Highest Common Factor of BOTH the numbers AND the lowest shared power of every common variable, then verify no common factor remains inside.",
      },
      {
        front: "Factorise {{x^2 - 5x - 14}}.",
        back: "{{(x - 7)(x + 2)}}, because {{(-7) * 2 = -14}} and {{-7 + 2 = -5}}.",
      },
      {
        front: "Factorise {{4x^2 - 25}}.",
        back: "{{(2x + 5)(2x - 5)}} — difference of two squares with {{a = 2x}} and {{b = 5}}.",
      },
      {
        front: "What are the 3 key steps when rearranging a formula where the subject appears twice?",
        back: "1. Collect all terms with the subject on one side. 2. Factorise the subject out into a single bracket. 3. Divide both sides by the bracket.",
      },
      {
        front: "Make {{r}} the subject of {{A = pi r^2}} (for {{r > 0}}).",
        back: "Divide by {{pi}} first to get {{r^2 = A/pi}}, then take the square root: {{r = sqrt(A/pi)}}.",
      },
    ],
    mustKnow: [
      "Expand and simplify {{(x + a)(x + b)}} and {{(ax + b)(cx + d)}} accurately, including negative terms.",
      "Expand squared brackets {{(ax +- b)^2}} without dropping the middle term.",
      "Recognise and apply the difference of two squares {{(a + b)(a - b) = a^2 - b^2}} both ways.",
      "Form and simplify algebraic expressions for perimeter and area of rectangles, triangles, frames, and compound L-shapes.",
      "Substitute positive, negative, and fractional values into expressions containing powers and brackets.",
      "Distinguish clearly between {{-x^2}} vs {{(-x)^2}} and {{ax^2}} vs {{(ax)^2}}.",
      "Factorise completely into a single bracket by extracting the HCF of numbers and variable powers.",
      "Factorise monic quadratics {{x^2 + bx + c}} and difference of two squares {{a^2 - b^2}}.",
      "Change the subject of a formula using inverse operations (including fractions, powers, and roots).",
      "Change the subject of a formula when the target variable appears twice by collecting and factorising.",
    ],
    misconceptions: [
      {
        wrong: "{{(x + 5)^2 = x^2 + 25}} (squaring each term separately).",
        right: "{{(x + 5)^2 = (x + 5)(x + 5) = x^2 + 10x + 25}} — always keep the middle {{2ab}} term.",
      },
      {
        wrong: "When {{x = -4}}, writing {{x^2 = -4^2 = -16}}.",
        right: "Wrap the substituted number in brackets: {{x^2 = (-4)^2 = +16}}, whereas {{-x^2 = -(-4)^2 = -16}}.",
      },
      {
        wrong: "{{2x^2}} at {{x = 3}} equals {{(2 * 3)^2 = 36}}.",
        right: "Indices apply before multiplication: {{2x^2 = 2 * 3^2 = 2 * 9 = 18}}.",
      },
      {
        wrong: "{{(x^2 + 6x + 8) - (x^2 - 2x) = 4x + 8}} (forgetting to negate the second term).",
        right: "Subtract EVERY term inside the second bracket: {{x^2 + 6x + 8 - x^2 + 2x = 8x + 8}}.",
      },
      {
        wrong: "Factorising {{6x^2 + 12x}} as {{3(2x^2 + 4x)}} or {{x(6x + 12)}} and stopping.",
        right: "Pull out the HIGHEST common factor of both number AND letter: {{6x(x + 2)}}.",
      },
      {
        wrong: "Making {{x}} the subject of {{y = ax + bx}} by writing {{x = (y - bx)/a}}.",
        right: "The subject cannot appear on both sides! Factorise first: {{y = x(a + b) -> x = y/(a + b)}}.",
      },
    ],
    examMistakes: [
      "Multiplying two negatives in the Last step of FOIL and writing a minus instead of a plus (e.g. {{(-3)(-4) = +12}}, not {{-12}}).",
      "Adding a frame border width {{w}} only once instead of twice ({{L + 2w}}, not {{L + w}}).",
      "Forgetting the factor of {{1/2}} when writing an algebraic expression for the area of a triangle.",
      "Typing `-3^2` on a calculator without brackets when substituting {{x = -3}} into {{x^2}}.",
      "Stopping after a partial factorisation when the question says 'Factorise **completely**'.",
      "Trying to take the square root BEFORE dividing when rearranging {{A = pi r^2}} (giving {{(sqrt(A))/pi}} instead of {{sqrt(A/pi)}}).",
      "Forgetting to include brackets when subtracting an entire expanded bracket like {{(x + 3)^2 - (x - 1)(x + 4)}}.",
    ],
    mnemonics: [
      {
        topic: "Expanding Double Brackets",
        device: "FOIL — First, Outer, Inner, Last",
        explanation:
          "Multiply the First terms, Outer terms, Inner terms, and Last terms of two binomial brackets, then collect the like terms (usually Outer + Inner).",
      },
      {
        topic: "Subject Appears Twice",
        device: "C–F–D: Collect, Factorise, Divide",
        explanation:
          "Collect every term with the subject on one side, Factorise the subject out into a single bracket, then Divide both sides by that bracket.",
      },
      {
        topic: "Substituting Negatives",
        device: "Bracket Before You Bake!",
        explanation:
          "Always wrap a negative number in brackets `(-a)` BEFORE applying any powers or coefficients so BIDMAS works in your favour.",
      },
    ],
    realWorld: [
      {
        title: "Architecture & Landscaping Frames",
        emoji: "🏡",
        detail:
          "Builders calculate the exact paving area around rectangular pools, patios, and windows using {{(L + 2w)(H + 2w) - LH}} so they order the right number of tiles without waste.",
      },
      {
        title: "Physics Formula Rearranging",
        emoji: "⚡",
        detail:
          "Engineers constantly rearrange laws like kinetic energy {{E = (1/2)mv^2}} into {{v = sqrt(2E/m)}} or Ohm's and motion formulae {{v = u + at}} into {{t = (v - u)/a}}.",
      },
      {
        title: "Mental Arithmetic Shortcuts",
        emoji: "🧠",
        detail:
          "Difference of two squares lets traders and mathematicians compute products like {{52 * 48 = (50 + 2)(50 - 2) = 2500 - 4 = 2496}} instantly.",
      },
      {
        title: "Computer Graphics & Game Physics",
        emoji: "🎮",
        detail:
          "Game engines substitute negative coordinates and velocities into quadratic motion expressions {{s = ut + (1/2)at^2}} thousands of times per second — a single sign error sends a character flying backwards!",
      },
    ],
    videos: [
      {
        title: "Expanding Double Brackets & Area Grid Method",
        channel: "Corbettmaths",
        url: "https://www.youtube.com/results?search_query=Corbettmaths+expanding+two+brackets",
      },
      {
        title: "Substituting Negative Numbers & Indices (BIDMAS)",
        channel: "GCSE Maths Tutor",
        url: "https://www.youtube.com/results?search_query=GCSE+Maths+Tutor+substitution+negative+numbers+powers",
      },
      {
        title: "Factorising Quadratics & Difference of Two Squares",
        channel: "Corbettmaths",
        url: "https://www.youtube.com/results?search_query=Corbettmaths+factorising+quadratics+difference+of+two+squares",
      },
      {
        title: "Changing the Subject of a Formula (Appears Twice)",
        channel: "GCSE Maths Tutor",
        url: "https://www.youtube.com/results?search_query=GCSE+Maths+Tutor+changing+the+subject+appears+twice",
      },
    ],
    formulas: [
      {
        name: "Product of Two Binomials",
        formula: "{{(x + a)(x + b) = x^2 + (a + b)x + ab}}",
        note: "Middle term is the sum; constant term is the product.",
      },
      {
        name: "General Double Bracket Expansion",
        formula: "{{(ax + b)(cx + d) = acx^2 + (ad + bc)x + bd}}",
        note: "Use the 2 × 2 area grid or FOIL.",
      },
      {
        name: "Perfect Square (Sum)",
        formula: "{{(a + b)^2 = a^2 + 2ab + b^2}}",
        note: "Always contains the middle cross-term +2ab.",
      },
      {
        name: "Perfect Square (Difference)",
        formula: "{{(a - b)^2 = a^2 - 2ab + b^2}}",
        note: "Notice the last term +b² is always positive.",
      },
      {
        name: "Difference of Two Squares (DOTS)",
        formula: "{{a^2 - b^2 = (a + b)(a - b)}}",
        note: "Works both for fast expanding and for factorising.",
      },
      {
        name: "Rectangle Perimeter & Area",
        formula: "{{P = 2(L + W)}},   {{A = L * W}}",
        note: "Perimeter is linear; area is quadratic in side length.",
      },
      {
        name: "Uniform Border / Frame Area",
        formula: "{{A_(" + "border" + ") = (L + 2w)(W + 2w) - LW}}",
        note: "Add border width w twice to each dimension.",
      },
      {
        name: "Negation vs Squaring",
        formula: "{{-x^2 = -(x^2) != (-x)^2}}",
        note: "Indices bind tighter than a leading minus sign.",
      },
      {
        name: "Coefficient vs Bracketed Power",
        formula: "{{(kx)^2 = k^2 x^2 != k x^2}}",
        note: "Brackets square the coefficient k as well as x.",
      },
      {
        name: "Collecting & Factorising Subject",
        formula: "{{ax + b = cx + d  =>  x = (d - b)/(a - c)}}",
        note: "Collect all subject terms, factorise, then divide.",
      },
    ],
  },
};
