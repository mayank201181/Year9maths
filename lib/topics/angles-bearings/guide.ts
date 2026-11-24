import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "angles-bearings",
  title: "Angles in Polygons, Parallel Lines & Bearings",
  strand: "Geometry & Measure",
  icon: "🧭",
  summary: "Master exact parallel-line reasoning, polygon interior/exterior angle laws, three-figure bearings, and back bearings.",
  intro:
    "Whether you are piloting a yacht across Singapore Strait or engineering the hexagonal tiles of a satellite mirror, angle laws let you calculate exact directions and shapes without ever reaching for a protractor. In Year 9 you connect three geometric pillars: parallel-line angle facts, polygon interior and exterior formulas, and three-figure compass bearings.",
  guide: [
    {
      id: "parallel-lines-angles",
      heading: "Corresponding, Alternate & Co-Interior Angles",
      discovery: {
        problem:
          "A straight road crosses two parallel railway tracks. At the first crossing, the acute angle between the road and the track is {{60°}}. Without measuring, how many DIFFERENT angle sizes exist among all {{8}} angles formed at the two crossings?",
        idea:
          "Only **two** sizes! Every single acute angle is {{60°}} and every single obtuse angle is {{180° - 60° = 120°}}. Sliding the top crossing straight down the transversal onto the bottom parallel track maps every angle onto its exact twin!",
      },
      body:
        "When a straight line (called a **transversal**) cuts across two **parallel** lines (marked with matching arrows `>` or `>>`), it creates three powerhouse angle relationships — and in exams you **must state the exact mathematical name**, never informal letters like 'Z-angle' or 'F-angle'!\n\n**1. Corresponding angles are equal** *(visual memory aid: F-shape)*\nThey occupy the **same relative corner** at each intersection (e.g. both below-right of their crossing). Sliding one parallel line along the transversal lands one angle directly onto the other.\n\n**2. Alternate angles are equal** *(visual memory aid: Z-shape)*\nThey lie **between** the parallel lines on **opposite sides** of the transversal.\n\n**3. Co-interior (allied) angles add up to {{180°}}** *(visual memory aid: C- or U-shape)*\nThey lie **between** the parallel lines on the **same side** of the transversal, so {{a + b = 180°}}.\n\n**Foundational angle facts you combine with parallel lines:**\n- **Angles on a straight line** sum to {{180°}}.\n- **Angles around a point** sum to {{360°}}.\n- **Vertically opposite angles** (formed by two crossing straight lines, X-shape) are **equal**.\n- **Angles in a triangle** sum to {{180°}}; base angles of an **isosceles triangle** are equal.\n\n**Exam gold standard:** Every multi-step angle proof needs BOTH the **value** AND the **exact geometric reason** at every single step (e.g. *'{{x = 60°}} because alternate angles on parallel lines are equal'*).",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two parallel lines cut by a transversal illustrating corresponding, alternate, and co-interior angles of 60 and 120 degrees">' +
        '<rect x="0" y="0" width="560" height="250" rx="10" fill="var(--surface)"/>' +
        '<line x1="28" y1="80" x2="312" y2="80" stroke="var(--ink)" stroke-width="2.5"/>' +
        '<line x1="28" y1="175" x2="312" y2="175" stroke="var(--ink)" stroke-width="2.5"/>' +
        '<polyline points="56,74 66,80 56,86" fill="none" stroke="var(--ink)" stroke-width="2"/>' +
        '<polyline points="64,74 74,80 64,86" fill="none" stroke="var(--ink)" stroke-width="2"/>' +
        '<polyline points="56,169 66,175 56,181" fill="none" stroke="var(--ink)" stroke-width="2"/>' +
        '<polyline points="64,169 74,175 64,181" fill="none" stroke="var(--ink)" stroke-width="2"/>' +
        '<line x1="115" y1="28" x2="230" y2="227" stroke="var(--ink-2)" stroke-width="2.2"/>' +
        '<path d="M 145,80 L 175,80 A 30,30 0 0 1 160,106 Z" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>' +
        '<path d="M 200,175 L 230,175 A 30,30 0 0 1 215,201 Z" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>' +
        '<path d="M 200,175 L 170,175 A 30,30 0 0 1 185,149 Z" fill="var(--good-soft)" stroke="var(--good)" stroke-width="2"/>' +
        '<path d="M 200,175 L 185,149 A 30,30 0 0 1 230,175 Z" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="2"/>' +
        '<text x="176" y="102" font-size="11.5" font-weight="800" fill="var(--brand)">60°</text>' +
        '<text x="232" y="198" font-size="11.5" font-weight="800" fill="var(--brand)">60°</text>' +
        '<text x="150" y="166" font-size="11.5" font-weight="800" fill="var(--good)">60°</text>' +
        '<text x="216" y="156" font-size="11.5" font-weight="800" fill="var(--bad)">120°</text>' +
        '<text x="275" y="72" font-size="10.5" font-weight="700" fill="var(--ink-2)">Line 1</text>' +
        '<text x="275" y="167" font-size="10.5" font-weight="700" fill="var(--ink-2)">Line 2</text>' +
        '<rect x="330" y="20" width="214" height="210" rx="10" fill="var(--surface-2)" stroke="var(--line)"/>' +
        '<text x="344" y="44" font-size="13" font-weight="800" fill="var(--ink)">Exact Exam Reasons</text>' +
        '<rect x="342" y="55" width="190" height="44" rx="7" fill="var(--brand-soft)"/>' +
        '<text x="352" y="72" font-size="11.5" font-weight="800" fill="var(--brand)">Corresponding = equal</text>' +
        '<text x="352" y="89" font-size="10.5" fill="var(--ink)">Same corner: 60° = 60° (F)</text>' +
        '<rect x="342" y="106" width="190" height="44" rx="7" fill="var(--good-soft)"/>' +
        '<text x="352" y="123" font-size="11.5" font-weight="800" fill="var(--good)">Alternate = equal</text>' +
        '<text x="352" y="140" font-size="10.5" fill="var(--ink)">Opposite inner sides: 60° = 60° (Z)</text>' +
        '<rect x="342" y="157" width="190" height="44" rx="7" fill="var(--bad-soft)"/>' +
        '<text x="352" y="174" font-size="11.5" font-weight="800" fill="var(--bad)">Co-interior sum to 180°</text>' +
        '<text x="352" y="191" font-size="10.5" fill="var(--ink)">Same inner side: 60° + 120° = 180° (C)</text>' +
        '<text x="344" y="220" font-size="10" font-weight="700" fill="var(--ink-2)">Never write "F / Z / C angles" in exams!</text>' +
        '</svg>',
      diagramCaption: "With parallel lines, corresponding (blue) and alternate (green) angles are equal, while co-interior angles (blue + orange) sum to 180°.",
      whyItWorks:
        "Parallel lines have the exact same direction. Translating (sliding) one parallel line along the transversal onto the other preserves every angle, proving corresponding angles are equal. Combining corresponding angles with vertically opposite angles proves alternate angles are equal, and combining them with angles on a straight line proves co-interior angles sum to 180°!",
      keyPoints: [
        "**Corresponding angles** on parallel lines are **equal** (same corner at each intersection).",
        "**Alternate angles** on parallel lines are **equal** (between the parallels, opposite sides of the transversal).",
        "**Co-interior (allied) angles** on parallel lines **sum to {{180°}}** (between the parallels, same side of the transversal).",
        "Always check for **parallel arrows** before using parallel-line rules — lines that merely *look* parallel in a sketch are not parallel unless marked or stated!",
        "When a transversal bends (a 'zig-zag' between parallel lines), draw a **helper parallel line** right through the bend vertex to split the angle cleanly into two alternate or co-interior pairs.",
      ],
      strategies: [
        "Helper-line trick: whenever a bent line connects two parallel lines, add a dashed parallel line through every corner vertex.",
        "Always check acute vs obtuse: if your answer is {{125°}} for an angle that is clearly acute, re-check whether the pair is equal or sums to {{180°}}.",
        "Write the exact reason alongside every equation so you never drop communication marks.",
      ],
      thinkDeeper:
        "Can you prove that the three interior angles of ANY triangle add up to {{180°}} by drawing just ONE line parallel to the base through the top vertex, using alternate angles?",
      workedExamples: [
        {
          title: "Solving an algebraic co-interior angle problem",
          problem: "Two co-interior angles between parallel lines measure {{(2x + 15)°}} and {{(3x + 25)°}}. Find {{x}} and the size of the larger angle.",
          steps: [
            "Co-interior angles between parallel lines sum to {{180°}}: {{(2x + 15) + (3x + 25) = 180}}.",
            "Collect like terms: {{5x + 40 = 180}} → {{5x = 140}} → {{x = 28}}.",
            "Find both angles: {{2(28) + 15 = 71°}} and {{3(28) + 25 = 109°}}.",
            "Check: {{71° + 109° = 180°}} ✓.",
          ],
          answer: "{{x = 28}}; the larger angle is {{109°}}.",
          yourTurn: {
            question: "Two **alternate** angles between parallel lines measure {{(4x - 10)°}} and {{(2x + 36)°}}. Find the value of {{x}}.",
            answer: { type: "number", value: 23, display: "23" },
            solution: "Alternate angles are equal: {{4x - 10 = 2x + 36}} → {{2x = 46}} → {{x = 23}} (both angles are {{82°}}).",
          },
        },
        {
          title: "The zig-zag helper parallel line",
          problem:
            "Line {{AB}} is parallel to line {{CD}}. A zig-zag path goes from {{A}} to a middle point {{E}} (making an interior angle of {{38°}} with {{AB}}) and from {{E}} to {{C}} (making an interior angle of {{47°}} with {{CD}}). Find the acute angle {{∠AEC}}.",
          steps: [
            "Draw a dashed helper line through {{E}} parallel to both {{AB}} and {{CD}}.",
            "The upper part of {{∠AEC}} is alternate to {{38°}}, so it equals {{38°}}.",
            "The lower part of {{∠AEC}} is alternate to {{47°}}, so it equals {{47°}}.",
            "Add both parts: {{∠AEC = 38° + 47° = 85°}}.",
          ],
          answer: "{{85°}}",
          yourTurn: {
            question: "Two co-interior angles between parallel lines are in the ratio {{2 : 7}}. Find the size of the **smaller** angle in degrees.",
            answer: { type: "number", value: 40, display: "40°" },
            solution: "Co-interior angles sum to {{180°}}. Total parts {{= 2 + 7 = 9}}, so {{1}} part {{= 180° / 9 = 20°}}, and the smaller angle is {{2 * 20° = 40°}}.",
          },
        },
      ],
    },
    {
      id: "polygon-angles",
      heading: "Interior & Exterior Angles in Polygons",
      discovery: {
        problem:
          "Walk completely around the outside edge of ANY convex polygon (a triangle, a pentagon, or even a 50-sided shape), turning at every corner until you face your starting direction again. What is the TOTAL angle you turned through?",
        idea:
          "Exactly **one full turn = {{360°}}**! Each turn at a corner is one **exterior angle** — which proves immediately that the exterior angles of ANY convex polygon ALWAYS sum to {{360°}}, no matter how many sides {{n}} it has!",
      },
      body:
        "Polygons have two paired angle systems — **interior** (inside the corner) and **exterior** (the turning angle between one side and the straight extension of the next side).\n\n**1. Sum of interior angles of an {{n}}-sided polygon:**\nPick one vertex and draw all diagonals to non-adjacent vertices. An {{n}}-gon always splits cleanly into **{{(n - 2)}} non-overlapping triangles**, each worth {{180°}}:\n\n**{{\"Interior angle sum\" = (n - 2) * 180°}}**\n\n| Polygon | Sides ({{n}}) | Triangles ({{n - 2}}) | Interior Sum | Regular Interior | Regular Exterior |\n|---|---|---|---|---|---|\n| Triangle | 3 | 1 | 180° | 60° | 120° |\n| Quadrilateral | 4 | 2 | 360° | 90° | 90° |\n| Pentagon | 5 | 3 | 540° | 108° | 72° |\n| Hexagon | 6 | 4 | 720° | 120° | 60° |\n| Octagon | 8 | 6 | 1080° | 135° | 45° |\n| Decagon | 10 | 8 | 1440° | 144° | 36° |\n\n**2. Sum of exterior angles of ANY convex polygon:**\n**{{\"Exterior angle sum\" = 360°}}** (always {{360°}}, even for irregular polygons!).\n\n**3. At EVERY vertex of ANY polygon:**\nBecause the interior angle and exterior angle lie on a straight extended side:\n**{{\"Interior\" + \"Exterior\" = 180°}}**\n\n**4. Regular polygons (all sides AND all angles equal) — the Exterior Shortcut!**\n- Each exterior angle {{= 360° / n}}.\n- Number of sides {{n = 360° / \"exterior angle\"}}.\n- Each interior angle {{= 180° - (360° / n)}} (MUCH faster than computing {{(n - 2) * 180 / n}}!).",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Regular pentagon triangulated into three triangles with interior angle 108 degrees and extended side showing exterior angle 72 degrees">' +
        '<rect x="0" y="0" width="560" height="250" rx="10" fill="var(--surface)"/>' +
        '<polygon points="150,56 220.4,107.1 193.5,189.9 106.5,189.9 79.6,107.1" fill="var(--brand-soft)" opacity="0.55" stroke="var(--brand)" stroke-width="2.6"/>' +
        '<line x1="150" y1="56" x2="106.5" y2="189.9" stroke="var(--ink-2)" stroke-width="1.8" stroke-dasharray="5 4"/>' +
        '<line x1="150" y1="56" x2="193.5" y2="189.9" stroke="var(--ink-2)" stroke-width="1.8" stroke-dasharray="5 4"/>' +
        '<line x1="193.5" y1="189.9" x2="290" y2="189.9" stroke="var(--bad)" stroke-width="2.4" stroke-dasharray="6 4"/>' +
        '<path d="M 193.5,189.9 L 166.5,189.9 A 27,27 0 0 1 201.8,164.2 Z" fill="var(--good-soft)" stroke="var(--good)" stroke-width="2"/>' +
        '<path d="M 193.5,189.9 L 201.8,164.2 A 27,27 0 0 1 220.5,189.9 Z" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="2"/>' +
        '<text x="108" y="132" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink-2)">180°</text>' +
        '<text x="150" y="148" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink-2)">180°</text>' +
        '<text x="192" y="132" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink-2)">180°</text>' +
        '<text x="163" y="176" font-size="11.5" font-weight="800" text-anchor="end" fill="var(--good)">108°</text>' +
        '<text x="228" y="182" font-size="11.5" font-weight="800" fill="var(--bad)">72°</text>' +
        '<text x="150" y="34" font-size="12" font-weight="800" text-anchor="middle" fill="var(--ink)">Pentagon (n = 5) → 3 triangles</text>' +
        '<text x="226" y="214" font-size="10.5" font-weight="700" text-anchor="middle" fill="var(--ink-2)">108° + 72° = 180° (straight line)</text>' +
        '<rect x="330" y="20" width="214" height="210" rx="10" fill="var(--surface-2)" stroke="var(--line)"/>' +
        '<text x="344" y="44" font-size="13" font-weight="800" fill="var(--ink)">Polygon Angle Laws</text>' +
        '<rect x="342" y="55" width="190" height="44" rx="7" fill="var(--brand-soft)"/>' +
        '<text x="352" y="72" font-size="11.5" font-weight="800" fill="var(--brand)">Interior sum = (n − 2) × 180°</text>' +
        '<text x="352" y="89" font-size="10.5" fill="var(--ink)">For n = 5: 3 × 180° = 540°</text>' +
        '<rect x="342" y="106" width="190" height="44" rx="7" fill="var(--bad-soft)"/>' +
        '<text x="352" y="123" font-size="11.5" font-weight="800" fill="var(--bad)">Exterior sum = 360°</text>' +
        '<text x="352" y="140" font-size="10.5" fill="var(--ink)">Always 360° for any convex n-gon!</text>' +
        '<rect x="342" y="157" width="190" height="58" rx="7" fill="var(--good-soft)"/>' +
        '<text x="352" y="174" font-size="11.5" font-weight="800" fill="var(--good)">Regular Polygon Shortcut:</text>' +
        '<text x="352" y="191" font-size="10.5" fill="var(--ink)">Exterior = 360° / n</text>' +
        '<text x="352" y="206" font-size="10.5" fill="var(--ink)">n = 360° / Exterior</text>' +
        '</svg>',
      diagramCaption: "Triangulating a pentagon from one vertex gives 3 triangles (540°); extending one side shows interior 108° + exterior 72° = 180°.",
      whyItWorks:
        "From one vertex of an n-gon, you can draw diagonals to every other vertex except itself and its two immediate neighbours — that is n − 3 diagonals, which slice the polygon into (n − 3) + 1 = n − 2 triangles. Every triangle holds 180°, giving (n − 2) × 180° in total!",
      keyPoints: [
        "Interior angle sum of an {{n}}-sided polygon is **{{(n - 2) * 180°}}** (works for BOTH regular and irregular polygons).",
        "Exterior angle sum of ANY convex polygon is ALWAYS **{{360°}}**.",
        "At every vertex, **interior + exterior = {{180°}}** — note the exterior angle is NOT {{360° - \"interior\"}} (that's the reflex angle!).",
        "For a **regular** polygon, find the exterior angle FIRST: **{{360° / n}}**, then subtract from {{180°}} for the interior angle.",
        "To find the number of sides {{n}} from a regular interior angle: find exterior {{= 180° - \"interior\"}} first, then compute **{{n = 360° / \"exterior\"}}**.",
      ],
      strategies: [
        "Always go via the exterior angle! Finding {{n}} from interior angle {{165°}} takes two mental steps: exterior {{= 180° - 165° = 15°}}, so {{n = 360 / 15 = 24}} sides.",
        "Divisibility test: a regular polygon with interior angle {{I}} exists IF AND ONLY IF {{180 - I}} divides {{360}} evenly into an integer {{n >= 3}}.",
        "For irregular polygons, use {{(n - 2) * 180°}} and subtract the known interior angles.",
      ],
      thinkDeeper:
        "Can you tile a flat bathroom floor using ONLY regular pentagons with no gaps or overlaps? Use the interior angle of a regular pentagon ({{108°}}) and angles around a point ({{360°}}) to prove why — and find which three regular polygons DO tessellate!",
      workedExamples: [
        {
          title: "Finding the number of sides of a regular polygon",
          problem: "Each interior angle of a regular polygon is {{156°}}. How many sides does the polygon have?",
          steps: [
            "Find one exterior angle using interior + exterior {{= 180°}}: {{180° - 156° = 24°}}.",
            "All exterior angles are equal and sum to {{360°}}: {{n = 360° / 24° = 15}}.",
            "Check: {{(15 - 2) * 180° / 15 = 13 * 12° = 156°}} ✓.",
          ],
          answer: "{{15}} sides.",
          yourTurn: {
            question: "Each interior angle of a regular polygon is {{140°}}. How many sides does it have?",
            answer: { type: "number", value: 9, display: "9" },
            solution: "Exterior angle {{= 180° - 140° = 40°}}, so {{n = 360° / 40° = 9}} sides (a regular nonagon).",
          },
        },
        {
          title: "Finding a missing angle in an irregular hexagon",
          problem: "Five of the interior angles of an irregular hexagon are {{115°}}, {{130°}}, {{105°}}, {{142°}}, and {{118°}}. Find the sixth interior angle.",
          steps: [
            "A hexagon has {{n = 6}} sides, so interior angle sum {{= (6 - 2) * 180° = 4 * 180° = 720°}}.",
            "Sum the five known angles: {{115 + 130 + 105 + 142 + 118 = 610°}}.",
            "Subtract from {{720°}}: {{720° - 610° = 110°}}.",
          ],
          answer: "{{110°}}",
          yourTurn: {
            question: "Calculate the interior angle sum (in degrees) of a {{12}}-sided polygon (dodecagon).",
            answer: { type: "number", value: 1800, display: "1800°" },
            solution: "Use {{(n - 2) * 180° = (12 - 2) * 180° = 10 * 180° = 1800°}}.",
          },
        },
      ],
    },
    {
      id: "three-figure-bearings",
      heading: "Measuring & Drawing Three-Figure Bearings",
      discovery: {
        problem:
          "A ship's captain radios: 'Head on a bearing of {{45}} degrees!' Why does international maritime and aviation protocol insist on writing **{{045°}}** instead of {{45°}} — and why must every navigator agree to turn **clockwise from North**?",
        idea:
          "Over noisy radio, 'four-five' could be misheard as a cut-off 'one-four-five' ({{145°}}) or 'two-four-five' ({{245°}}) — adding a leading zero ('zero-four-five') guarantees all three digits arrived! Measuring clockwise from North removes all ambiguity about 'left' or 'right'.",
      },
      body:
        "A **three-figure bearing** gives an exact direction from one point to another. Every valid bearing obeys **three strict rules**:\n\n1. **Start at North ({{000°}}):** Draw a vertical North arrow pointing straight up from the **'FROM'** point.\n2. **Measure CLOCKWISE:** Turn clockwise from that North arrow until you hit the line pointing toward your target.\n3. **Write THREE DIGITS:** If the angle is less than {{100°}}, pad the front with a zero (or two zeros if under {{10°}}): e.g. **{{045°}}**, **{{008°}}**, **{{090°}}**.\n\n**Watch the preposition 'FROM'!**\n- 'The bearing of **B from A**' means: stand at **A**, face **North**, turn clockwise until you point straight at **B**.\n- 'The bearing of **A from B**' means: stand at **B**, face **North**, turn clockwise until you point straight at **A**.\n\n**Standard 8-point compass bearings to know cold:**\n\n| Compass Direction | Bearing | Compass Direction | Bearing |\n|---|---|---|---|\n| North (N) | **000°** (or 360°) | South (S) | **180°** |\n| North-East (NE) | **045°** | South-West (SW) | **225°** |\n| East (E) | **090°** | West (W) | **270°** |\n| South-East (SE) | **135°** | North-West (NW) | **315°** |\n\n**Measuring & drawing reflex bearings (> 180°) with a 180° protractor:**\nTo draw a bearing like {{230°}}, measure {{230° - 180° = 50°}} clockwise past South (or measure {{360° - 230° = 130°}} **anticlockwise** from North!). For **scale drawings**, multiply or divide real distances by the map scale (e.g. {{1}} cm represents {{5}} km → {{35}} km is drawn as {{7}} cm).",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Compass bearing diagram showing bearing 055 degrees to B and reflex bearing 230 degrees to C measured clockwise from North">' +
        '<rect x="0" y="0" width="560" height="250" rx="10" fill="var(--surface)"/>' +
        '<circle cx="160" cy="130" r="82" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>' +
        '<line x1="160" y1="36" x2="160" y2="220" stroke="var(--line)" stroke-width="1.4" stroke-dasharray="4 3"/>' +
        '<line x1="70" y1="130" x2="250" y2="130" stroke="var(--line)" stroke-width="1.4" stroke-dasharray="4 3"/>' +
        '<line x1="160" y1="130" x2="160" y2="32" stroke="var(--ink)" stroke-width="2.4"/>' +
        '<polygon points="160,24 155,36 165,36" fill="var(--ink)"/>' +
        '<text x="160" y="18" font-size="12" font-weight="800" text-anchor="middle" fill="var(--ink)">N (000°)</text>' +
        '<text x="256" y="134" font-size="10.5" font-weight="700" fill="var(--ink-2)">E (090°)</text>' +
        '<text x="160" y="236" font-size="10.5" font-weight="700" text-anchor="middle" fill="var(--ink-2)">S (180°)</text>' +
        '<text x="64" y="134" font-size="10.5" font-weight="700" text-anchor="end" fill="var(--ink-2)">W (270°)</text>' +
        '<path d="M 160,92 A 38,38 0 0 1 191.1,108.2" fill="none" stroke="var(--brand)" stroke-width="3"/>' +
        '<path d="M 160,72 A 58,58 0 1 1 115.6,167.3" fill="none" stroke="var(--bad)" stroke-width="2.6" stroke-dasharray="5 3"/>' +
        '<line x1="160" y1="130" x2="230" y2="81" stroke="var(--brand)" stroke-width="2.8"/>' +
        '<line x1="160" y1="130" x2="95" y2="185" stroke="var(--bad)" stroke-width="2.8"/>' +
        '<circle cx="160" cy="130" r="4.5" fill="var(--ink)"/>' +
        '<circle cx="230" cy="81" r="5" fill="var(--brand)"/>' +
        '<circle cx="95" cy="185" r="5" fill="var(--bad)"/>' +
        '<text x="236" y="79" font-size="12" font-weight="800" fill="var(--brand)">B</text>' +
        '<text x="80" y="196" font-size="12" font-weight="800" fill="var(--bad)">C</text>' +
        '<text x="180" y="88" font-size="11.5" font-weight="800" fill="var(--brand)">055°</text>' +
        '<text x="195" y="182" font-size="11.5" font-weight="800" fill="var(--bad)">230°</text>' +
        '<text x="148" y="124" font-size="11" font-weight="800" fill="var(--ink)">A</text>' +
        '<rect x="328" y="20" width="218" height="210" rx="10" fill="var(--surface-2)" stroke="var(--line)"/>' +
        '<text x="342" y="44" font-size="13" font-weight="800" fill="var(--ink)">3 Rules of Bearings</text>' +
        '<rect x="340" y="55" width="194" height="36" rx="7" fill="var(--brand-soft)"/>' +
        '<text x="350" y="77" font-size="11.5" font-weight="700" fill="var(--brand)">1. Start from North (000°)</text>' +
        '<rect x="340" y="98" width="194" height="36" rx="7" fill="var(--good-soft)"/>' +
        '<text x="350" y="120" font-size="11.5" font-weight="700" fill="var(--good)">2. Always turn CLOCKWISE</text>' +
        '<rect x="340" y="141" width="194" height="36" rx="7" fill="var(--bad-soft)"/>' +
        '<text x="350" y="163" font-size="11.5" font-weight="700" fill="var(--bad)">3. Always use 3 digits (055°)</text>' +
        '<text x="342" y="198" font-size="10.5" font-weight="700" fill="var(--ink)">Stand at the FROM point!</text>' +
        '<text x="342" y="215" font-size="10.5" fill="var(--ink-2)">Bearing of B from A → stand at A</text>' +
        '</svg>',
      diagramCaption: "Both bearings start from North at A and sweep clockwise: 055° (with leading zero!) to B and reflex 230° to C.",
      whyItWorks:
        "Fixing both the starting direction (North = 000°) and the turning sense (clockwise) gives every ray in the 360° plane one unique address from 000° to 359°. Even better, because every point on a flat map has a North arrow pointing straight up, all North lines are parallel — unlocking all your parallel-line angle laws!",
      keyPoints: [
        "Every three-figure bearing is measured **from North**, **clockwise**, and written with **three digits** (e.g. **008°**, **045°**, **090°**).",
        "Read **'from'** carefully: the bearing of **P from Q** is measured at **Q**.",
        "Know the 8 compass bearings instantly: {{N = 000°}}, {{NE = 045°}}, {{E = 090°}}, {{SE = 135°}}, {{S = 180°}}, {{SW = 225°}}, {{W = 270°}}, {{NW = 315°}}.",
        "For an angle measured **anticlockwise** from North (say {{50°}} West of North), subtract from {{360°}} to get the clockwise bearing: {{360° - 50° = 310°}}.",
        "On a scale drawing (e.g. {{1}} cm : {{4}} km), convert distances carefully before marking endpoints with a ruler.",
      ],
      strategies: [
        "Circle the word **FROM** in every bearing question and draw your North arrow at THAT letter first.",
        "Sanity-check the quadrant: {{000°–090°}} is NE, {{090°–180°}} is SE, {{180°–270°}} is SW, {{270°–360°}} is NW.",
        "Never leave a 1- or 2-digit answer: double-check every bearing under {{100°}} has a leading zero!",
      ],
      thinkDeeper:
        "A drone flies from Base {{O}} on a bearing of {{090°}} for {{6}} km, then turns to fly on a bearing of {{180°}} for {{6}} km to point {{P}}. What is the exact bearing of {{P}} from {{O}} (and why is it one of the 8 standard compass bearings)?",
      workedExamples: [
        {
          title: "Finding bearings from angles given relative to East, South, or West",
          problem: "Lighthouse {{L}} is positioned {{32°}} anticlockwise from North as viewed from Harbour {{H}}. Write the three-figure bearing of {{L}} from {{H}}.",
          steps: [
            "Stand at the FROM point ({{H}}) and draw North pointing straight up.",
            "{{32°}} anticlockwise from North sits in the North-West quadrant.",
            "Convert to a clockwise turn from North: {{360° - 32° = 328°}}.",
          ],
          answer: "{{328°}}",
          yourTurn: {
            question: "A ship {{S}} is {{25°}} east of South as viewed from Port {{P}}. What is the three-figure bearing of {{S}} from {{P}}?",
            answer: { type: "text", accept: ["155", "155°", "155 degrees"], display: "155°" },
            solution: "South is {{180°}}. Moving {{25°}} toward East (anticlockwise from South) gives {{180° - 25° = 155°}}.",
          },
        },
        {
          title: "Converting a scale drawing distance and quadrant bearing",
          problem: "On a map with scale {{1}} cm represents {{4}} km, Island {{K}} is {{6.5}} cm from Port {{P}} on a bearing of {{072°}}. Find the real distance from {{P}} to {{K}} and state which compass quadrant {{K}} lies in.",
          steps: [
            "Real distance {{= 6.5 * 4 = 26}} km.",
            "Since {{072°}} lies between {{000°}} (North) and {{090°}} (East), Island {{K}} lies in the North-East quadrant (just {{18°}} north of due East).",
          ],
          answer: "{{26}} km in the North-East quadrant.",
          yourTurn: {
            question: "A lighthouse is {{38°}} north of due East as seen from a boat. Write the three-figure bearing of the lighthouse from the boat.",
            answer: { type: "text", accept: ["052", "052°", "052 degrees"], display: "052°" },
            solution: "East is {{090°}}. Moving {{38°}} north of East gives {{90° - 38° = 52°}} → write with 3 digits as **{{052°}}**.",
          },
        },
      ],
    },
    {
      id: "back-bearings-angle-rules",
      heading: "Calculating Missing Angles & Back Bearings",
      discovery: {
        problem:
          "You hike from Camp {{A}} to Summit {{B}} on a bearing of {{060°}}. At the summit, you turn around to hike straight back to Camp {{A}}. Why must the bearing of {{A}} from {{B}} be {{240°}} — and how do parallel North lines prove it?",
        idea:
          "Both North arrows at {{A}} and {{B}} point straight up, so they are **parallel**! The interior angle at {{B}} (between North and {{BA}}) is **co-interior** with {{060°}}, so it equals {{180° - 60° = 120°}}. Going clockwise all the way around {{B}} to face {{A}} gives {{360° - 120° = 240°}} — notice that's simply {{060° + 180°}}!",
      },
      body:
        "Because **every North line on a map is parallel to every other North line**, you can calculate bearings and missing angles in multi-leg journeys with pure geometry!\n\n**1. The Back Bearing (±180°) Rule:**\nIf the bearing of **B from A** is {{theta}}, then the reverse (**back**) bearing of **A from B** is:\n- **If {{theta < 180°}}:** add {{180°}} → **{{theta + 180°}}** (e.g. {{060° → 240°}}, {{135° → 315°}}).\n- **If {{theta >= 180°}}:** subtract {{180°}} → **{{theta - 180°}}** (e.g. {{240° → 060°}}, {{310° → 130°}}).\n\n*(Why can't you always add {{180°}}? Because bearings must stay strictly between {{000°}} and {{359°}} — e.g. {{250° + 180° = 430°}} wraps around a full {{360°}} circle back to {{070°}}!)*\n\n**2. Step-by-step parallel-North method (works for EVERY bearing diagram!):**\n1. Draw a crisp vertical North arrow at **EVERY** vertex in the diagram ({{A}}, {{B}}, {{C}}).\n2. Transfer any known bearing from {{A}} to {{B}} using **co-interior angles** (sum to {{180°}}) or **alternate angles** (equal).\n3. Use **angles around a point ({{360°}})**, **angles on a straight line ({{180°}})**, or **triangle angle sum ({{180°}})** to find the missing angle.\n4. Always finish by checking your final clockwise angle from North at the required **FROM** point — and pad with a leading zero if under {{100°}}!",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parallel North lines at A and B showing bearing of B from A is 060 degrees, co-interior angle 120 degrees, and back bearing of A from B is 240 degrees">' +
        '<rect x="0" y="0" width="560" height="250" rx="10" fill="var(--surface)"/>' +
        '<line x1="105" y1="215" x2="105" y2="50" stroke="var(--ink)" stroke-width="2.2"/>' +
        '<polygon points="105,40 100,52 110,52" fill="var(--ink)"/>' +
        '<text x="105" y="34" font-size="12" font-weight="800" text-anchor="middle" fill="var(--ink)">N</text>' +
        '<polyline points="100,90 105,82 110,90" fill="none" stroke="var(--ink-2)" stroke-width="1.8"/>' +
        '<line x1="226" y1="190" x2="226" y2="30" stroke="var(--ink)" stroke-width="2.2"/>' +
        '<polygon points="226,20 221,32 231,32" fill="var(--ink)"/>' +
        '<text x="226" y="15" font-size="12" font-weight="800" text-anchor="middle" fill="var(--ink)">N</text>' +
        '<polyline points="221,62 226,54 231,62" fill="none" stroke="var(--ink-2)" stroke-width="1.8"/>' +
        '<line x1="105" y1="175" x2="226" y2="105" stroke="var(--brand)" stroke-width="3"/>' +
        '<path d="M 105,137 A 38,38 0 0 1 137.9,156" fill="none" stroke="var(--brand)" stroke-width="3"/>' +
        '<path d="M 226,71 A 34,34 0 0 0 196.6,122" fill="none" stroke="var(--good)" stroke-width="2.6"/>' +
        '<path d="M 226,57 A 48,48 0 1 1 184.4,129" fill="none" stroke="var(--bad)" stroke-width="2.8" stroke-dasharray="5 3"/>' +
        '<circle cx="105" cy="175" r="5" fill="var(--ink)"/>' +
        '<circle cx="226" cy="105" r="5" fill="var(--ink)"/>' +
        '<text x="90" y="182" font-size="13" font-weight="800" fill="var(--ink)">A</text>' +
        '<text x="236" y="102" font-size="13" font-weight="800" fill="var(--ink)">B</text>' +
        '<text x="128" y="138" font-size="11.5" font-weight="800" fill="var(--brand)">060°</text>' +
        '<text x="190" y="88" font-size="11.5" font-weight="800" fill="var(--good)">120°</text>' +
        '<text x="262" y="152" font-size="11.5" font-weight="800" fill="var(--bad)">240°</text>' +
        '<rect x="330" y="20" width="214" height="210" rx="10" fill="var(--surface-2)" stroke="var(--line)"/>' +
        '<text x="344" y="44" font-size="13" font-weight="800" fill="var(--ink)">Back Bearing Proof</text>' +
        '<rect x="342" y="55" width="190" height="58" rx="7" fill="var(--good-soft)"/>' +
        '<text x="352" y="72" font-size="11" font-weight="800" fill="var(--good)">Parallel North Lines:</text>' +
        '<text x="352" y="89" font-size="10.5" fill="var(--ink)">Co-interior = 180° − 60° = 120°</text>' +
        '<text x="352" y="105" font-size="10.5" fill="var(--ink)">Around B = 360° − 120° = 240°</text>' +
        '<rect x="342" y="121" width="190" height="62" rx="7" fill="var(--bad-soft)"/>' +
        '<text x="352" y="139" font-size="11.5" font-weight="800" fill="var(--bad)">±180° Shortcut:</text>' +
        '<text x="352" y="156" font-size="10.5" fill="var(--ink)">If bearing &lt; 180° → ADD 180°</text>' +
        '<text x="352" y="172" font-size="10.5" fill="var(--ink)">If bearing ≥ 180° → SUB 180°</text>' +
        '<text x="344" y="206" font-size="10.5" font-weight="700" fill="var(--brand)">060° ↔ 240°  (always 180° apart!)</text>' +
        '</svg>',
      diagramCaption: "Parallel North lines link A and B via a 120° co-interior angle, giving the back bearing 360° − 120° = 240° (= 060° + 180°).",
      whyItWorks:
        "Extending the line AB straight through B gives a vertical South ray at B (180° clockwise from North) plus an alternate angle equal to the original bearing θ — so turning from North clockwise to BA is always 180° + θ (or θ − 180° when θ ≥ 180°).",
      keyPoints: [
        "All North lines are **parallel**, so co-interior angles between North arrows and the connecting line always sum to **{{180°}}**.",
        "**Back bearing shortcut**: if bearing {{< 180°}}, **add {{180°}}**; if bearing {{>= 180°}}, **subtract {{180°}}**.",
        "Always pad back bearings under {{100°}} with a leading zero (e.g. back bearing of {{245°}} is **{{065°}}**, never {{65°}}!).",
        "In a 3-point bearing triangle {{ABC}}, find the interior angle at {{B}} by subtracting or combining the back bearing of {{A}} from {{B}} with the forward bearing of {{C}} from {{B}}.",
        "If {{AB = BC}} in a bearing diagram, spot the **isosceles triangle** right away — its equal base angles often unlock the final bearing!",
      ],
      strategies: [
        "Draw North arrows at EVERY town/waypoint before writing a single number.",
        "Use the co-interior bridge: the angle inside the North-line 'C-shape' is ALWAYS {{180° - \"forward bearing\"}} (when the forward bearing is under {{180°}}).",
        "Check opposite quadrants: if {{B}} is North-East of {{A}}, then {{A}} MUST be South-West of {{B}} ({{000°–090°}} ↔ {{180°–270°}}, {{090°–180°}} ↔ {{270°–360°}}).",
      ],
      thinkDeeper:
        "A ship sails from {{A}} to {{B}} on a bearing of {{070°}}, then turns at {{B}} to sail to {{C}} on a bearing of {{160°}}. What is the exact interior angle {{∠ABC}} — and what special type of triangle is {{△ABC}}?",
      workedExamples: [
        {
          title: "Back bearing from a reflex bearing",
          problem: "The bearing of Airport {{Q}} from Airport {{P}} is {{254°}}. Calculate the bearing of {{P}} from {{Q}}.",
          steps: [
            "Since {{254° >= 180°}}, subtract {{180°}}: {{254° - 180° = 74°}}.",
            "Check via parallel North lines: the anticlockwise angle from North at {{P}} to {{PQ}} is {{360° - 254° = 106°}}. Co-interior angle at {{Q}} (clockwise from North to {{QP}}) is {{180° - 106° = 74°}} ✓.",
            "Write with three digits: **{{074°}}**.",
          ],
          answer: "{{074°}}",
          yourTurn: {
            question: "The bearing of Tower {{B}} from Tower {{A}} is {{218°}}. Find the three-figure bearing of {{A}} from {{B}}.",
            answer: { type: "text", accept: ["038", "038°", "038 degrees"], display: "038°" },
            solution: "Since {{218° >= 180°}}, subtract {{180°}}: {{218° - 180° = 38°}} → write as **{{038°}}**.",
          },
        },
        {
          title: "Finding an interior angle in a two-leg bearing journey",
          problem: "A yacht sails from {{A}} to {{B}} on a bearing of {{065°}}, then sails from {{B}} to {{C}} on a bearing of {{140°}}. Calculate the interior angle {{∠ABC}}.",
          steps: [
            "Draw parallel North lines at {{A}} and {{B}}.",
            "The co-interior angle at {{B}} between North and {{BA}} (on the left of North) is {{180° - 65° = 115°}}.",
            "The bearing of {{C}} from {{B}} (on the right of North) is {{140°}}.",
            "Angles around point {{B}} sum to {{360°}}: {{∠ABC = 360° - 115° - 140° = 105°}}.",
            "Alternative check via back bearing: bearing of {{A}} from {{B}} is {{065° + 180° = 245°}}, so the clockwise gap from {{BC}} ({{140°}}) to {{BA}} ({{245°}}) is {{245° - 140° = 105°}} ✓.",
          ],
          answer: "{{105°}}",
          yourTurn: {
            question: "A hiker walks from {{P}} to {{Q}} on a bearing of {{080°}}, then turns at {{Q}} to walk to {{R}} on a bearing of {{170°}}. Find the interior angle {{∠PQR}} in degrees.",
            answer: { type: "number", value: 90, display: "90°" },
            solution: "Back bearing of {{P}} from {{Q}} is {{080° + 180° = 260°}}. Angle {{∠PQR = 260° - 170° = 90°}} (a right angle!).",
          },
        },
      ],
    },
  ],
  learn: {
    flashcards: [
      { front: "What is the exact geometric fact for **corresponding angles** on parallel lines?", back: "**Corresponding angles are equal** (same relative corner at each intersection — think F-shape, never write 'F-angles')." },
      { front: "What is the exact geometric fact for **alternate angles** on parallel lines?", back: "**Alternate angles are equal** (between parallel lines on opposite sides of the transversal — think Z-shape)." },
      { front: "What is the exact geometric fact for **co-interior (allied) angles** on parallel lines?", back: "**Co-interior angles sum to {{180°}}** (between parallel lines on the same side of the transversal — think C-shape)." },
      { front: "What is the formula for the **interior angle sum** of any {{n}}-sided polygon?", back: "**{{(n - 2) * 180°}}**, derived by splitting the polygon into {{(n - 2)}} triangles from one vertex." },
      { front: "What is the sum of the **exterior angles** of ANY convex polygon?", back: "Always **{{360°}}**, regardless of how many sides the polygon has." },
      { front: "How are an interior angle and exterior angle at the same polygon vertex related?", back: "They lie on a straight line, so **interior + exterior = {{180°}}**." },
      { front: "What is the fastest way to find the number of sides {{n}} of a regular polygon given its interior angle {{I}}?", back: "Find exterior {{E = 180° - I}}, then compute **{{n = 360° / E}}**." },
      { front: "State the interior angle sum of a pentagon, hexagon, and octagon.", back: "Pentagon ({{n = 5}}): **{{540°}}**; Hexagon ({{n = 6}}): **{{720°}}**; Octagon ({{n = 8}}): **{{1080°}}**." },
      { front: "What are the **three golden rules** of a three-figure bearing?", back: "1. Measured **from North ({{000°}})** · 2. Measured **clockwise** · 3. Written as **three digits** (e.g. {{045°}})." },
      { front: "Give the three-figure bearings for NE, SE, SW, and NW.", back: "**NE = 045°**, **SE = 135°**, **SW = 225°**, **NW = 315°**." },
      { front: "Where do you stand to measure the bearing of **X from Y**?", back: "Stand at **Y** (the **FROM** point), point North, and turn clockwise until facing **X**." },
      { front: "State the **back bearing (±180°)** rule.", back: "If the forward bearing is **{{< 180°}}**, **add {{180°}}**; if it is **{{>= 180°}}**, **subtract {{180°}}** (pad with a leading zero if under {{100°}})." },
      { front: "What is the back bearing of {{072°}}, and what is the back bearing of {{235°}}?", back: "Back bearing of {{072°}} is {{072° + 180° = }}**{{252°}}**; back bearing of {{235°}} is {{235° - 180° = }}**{{055°}}**." },
      { front: "How do you convert an angle {{theta}} measured **anticlockwise** from North into a bearing?", back: "Subtract from {{360°}}: bearing {{= 360° - theta}} (e.g. {{40°}} anticlockwise from North is {{320°}})." },
    ],
    mustKnow: [
      "Identify and calculate missing angles using corresponding, alternate, co-interior, vertically opposite, straight-line, and triangle rules, giving exact exam reasons.",
      "Draw a helper parallel line through the corner of a zig-zag between parallel lines to break it into alternate or co-interior angles.",
      "Derive and apply the interior angle sum {{(n - 2) * 180°}} for both regular and irregular polygons.",
      "Use the exterior angle sum {{360°}} and {{interior + exterior = 180°}} to find interior angles, exterior angles, and the number of sides {{n}} of a regular polygon.",
      "Decide whether a regular polygon with a given interior angle can exist (checking if {{180° - I}} divides {{360°}} evenly).",
      "Measure and draw three-figure bearings (including reflex bearings over {{180°}}) and convert map distances using a scale.",
      "Know all 8 main compass bearings (N, NE, E, SE, S, SW, W, NW) instantly.",
      "Calculate back bearings accurately using both parallel North lines (co-interior angles) and the {{±180°}} rule, preserving leading zeros.",
      "Calculate interior angles and missing bearings in multi-leg triangular journeys (including isosceles triangles).",
    ],
    misconceptions: [
      { wrong: "Writing 'Z-angles', 'F-angles', or 'C-angles' as your geometric reason in an exam.", right: "Exam boards award **0 marks** for letter nicknames! Always write **alternate angles**, **corresponding angles**, or **co-interior (allied) angles**." },
      { wrong: "Co-interior angles on parallel lines are equal.", right: "Co-interior angles **add up to {{180°}}** — they are only equal in the special case where the transversal is perpendicular ({{90°}} + {{90°}})." },
      { wrong: "The exterior angle of a regular pentagon is {{360° - 108° = 252°}}.", right: "That's the reflex angle! The **exterior angle** lies on the straight extension of a side, so exterior {{= 180° - 108° = 72°}}." },
      { wrong: "The bearing of {{B}} from {{A}} is {{48°}}.", right: "Bearings MUST have **three digits** — always write **{{048°}}** with the leading zero!" },
      { wrong: "To find the bearing of {{B}} from {{A}}, measure clockwise from North at {{B}}.", right: "Always stand at the **FROM** point! 'Of {{B}} **from {{A}}**' means measure clockwise from North at **{{A}}**." },
      { wrong: "To find any back bearing, always add {{180°}} (e.g. {{240° + 180° = 420°}}).", right: "Bearings only run from {{000°}} to {{359°}}: add {{180°}} only when the bearing is **{{< 180°}}**; when **{{>= 180°}}**, **subtract {{180°}}** ({{240° - 180° = 060°}})." },
    ],
    examMistakes: [
      "Using parallel-line rules when no parallel arrows or statement are given in the problem.",
      "Forgetting the leading zero on bearings under {{100°}} (writing {{65°}} instead of {{065°}}) — loses an accuracy mark immediately.",
      "Measuring a bearing **anticlockwise** from North instead of clockwise (giving {{050°}} instead of {{310°}}).",
      "Swapping 'bearing of A from B' with 'bearing of B from A' — always circle the word **from** first.",
      "Confusing the interior angle sum formula {{(n - 2) * 180°}} with {{n * 180°}} (which is {{360°}} too big!).",
      "Dividing {{360°}} by the **interior** angle instead of the **exterior** angle when finding the number of sides {{n}} of a regular polygon.",
      "Leaving out the geometric reason when a question says 'Give a reason for each stage of your working'.",
    ],
    mnemonics: [
      {
        topic: "Three-figure bearings",
        device: "N – C – 3 (North, Clockwise, 3 digits)",
        explanation: "Check all three boxes before writing every bearing: started from **N**orth? turned **C**lockwise? written with **3** figures?",
      },
      {
        topic: "Parallel line angle shapes (memory aid ONLY!)",
        device: "F = Corresponding, Z = Alternate, C = Co-interior (180°)",
        explanation: "Use F/Z/C privately in your head to spot the pair — then ALWAYS write the proper mathematical words (Corresponding / Alternate / Co-interior) on the exam paper!",
      },
      {
        topic: "Regular polygon sides shortcut",
        device: "Exit via Exterior (360° ÷ Ext = n)",
        explanation: "Whatever a regular polygon question asks, convert to the **exterior angle** first — {{360° / n}} is the quickest bridge in geometry.",
      },
    ],
    realWorld: [
      { emoji: "✈️", title: "Airport Runway Numbers", detail: "Runway numbers around the world (like Changi's 02C / 20C) are literally three-figure magnetic bearings divided by 10: Runway 02 faces 020°, and landing the opposite way uses its exact back bearing 200° (Runway 20)!" },
      { emoji: "⛵", title: "Maritime Navigation & Gippsland Fieldwork", detail: "Skippers, search-and-rescue teams, and hikers fix their position by taking bearings to two landmarks and plotting the back bearings on a nautical chart until the two rays intersect." },
      { emoji: "🐝", title: "Hexagonal Honeycombs & James Webb Mirrors", detail: "Regular hexagons have interior angle 120° (3 × 120° = 360° around every vertex), packing maximum area with minimum perimeter — used by both honeybees and NASA's 18-segment JWST primary mirror." },
      { emoji: "🏗️", title: "Bridge Trusses & Railway Crossings", detail: "Structural engineers rely on parallel-beam angle laws and triangular triangulation to balance tension and compression forces evenly across bridges and roof trusses." },
    ],
    videos: [
      { title: "Angles in Parallel Lines (Corresponding, Alternate, Co-interior) — Corbettmaths", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=Corbettmaths+angles+in+parallel+lines" },
      { title: "Interior and Exterior Angles of Polygons — Maths Genie", channel: "Maths Genie", url: "https://www.youtube.com/results?search_query=Maths+Genie+angles+in+polygons+gcse" },
      { title: "Three-Figure Bearings & Back Bearings — Cognito", channel: "Cognito", url: "https://www.youtube.com/results?search_query=Cognito+GCSE+Maths+bearings+back+bearings" },
      { title: "Bearings Problems with Parallel Lines — Corbettmaths", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=Corbettmaths+bearings+questions+parallel+lines" },
    ],
    formulas: [
      { name: "Corresponding Angles", formula: "{{a = b}}", note: "Equal angles in matching corners on parallel lines" },
      { name: "Alternate Angles", formula: "{{a = b}}", note: "Equal angles between parallel lines on opposite sides of the transversal" },
      { name: "Co-Interior (Allied) Angles", formula: "{{a + b = 180°}}", note: "Angles between parallel lines on the same side of the transversal" },
      { name: "Polygon Interior Angle Sum", formula: "{{\"Sum\" = (n - 2) * 180°}}", note: "True for ANY {{n}}-sided polygon (regular or irregular)" },
      { name: "Polygon Exterior Angle Sum", formula: "{{\"Sum\" = 360°}}", note: "True for ANY convex polygon regardless of {{n}}" },
      { name: "Interior & Exterior Pair", formula: "{{\"Interior\" + \"Exterior\" = 180°}}", note: "Adjacent angles on a straight extended side" },
      { name: "Regular Polygon Exterior Angle", formula: "{{\"Exterior\" = 360° / n}}", note: "Rearranges to {{n = 360° / \"Exterior\"}}" },
      { name: "Regular Polygon Interior Angle", formula: "{{\"Interior\" = 180° - 360° / n}}", note: "Equivalently {{(n - 2) * 180° / n}}" },
      { name: "Back Bearing (Forward < 180°)", formula: "{{\"Back bearing\" = theta + 180°}}", note: "When forward bearing {{theta < 180°}}" },
      { name: "Back Bearing (Forward ≥ 180°)", formula: "{{\"Back bearing\" = theta - 180°}}", note: "When forward bearing {{theta >= 180°}} (pad leading zero if {{< 100°}})" },
    ],
  },
};
