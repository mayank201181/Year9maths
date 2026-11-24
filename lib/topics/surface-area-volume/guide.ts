import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "surface-area-volume",
  title: "Sectors, Surface Area, Volume & Accuracy",
  strand: "Geometry & Measure",
  icon: "🧊",
  summary:
    "Slice circles into sectors, unwrap prisms, cylinders and cones, convert squared and cubed units without traps, and pin down measurement error intervals.",
  intro:
    "Geometry gets genuinely powerful when shapes leave the flat page and enter 3D space—or get sliced into curved wedges like pizza sectors and radar sweeps. In this unit you will see how just a handful of unifying ideas (taking a fraction of a full turn, sweeping a cross-section through space, squaring or cubing scale factors, and halving the rounding unit) unlock every formula without blind memorisation.",
  guide: [
    // =======================================================================
    // 1. CIRCLE SECTORS
    // =======================================================================
    {
      id: "circle-sectors",
      heading: "Area & Perimeter of Sectors of a Circle",
      discovery: {
        problem:
          "A circular pizza of radius {{12 cm}} is cut into {{6}} identical slices. Without using any fancy sector formula, how long is the curved crust of **one** slice, what is the area of **one** slice, and what is the **total perimeter** of one slice? Leave your answers in terms of {{pi}}.",
        idea: "One slice is {{1/6}} of the whole circle (a {{60°}} angle out of {{360°}}). The full circumference is {{2 * pi * 12 = 24pi cm}}, so one crust is {{24pi / 6 = 4pi cm}}. The full area is {{pi * 12^2 = 144pi cm^2}}, so one slice has area {{144pi / 6 = 24pi cm^2}}. For the total perimeter of the slice, you must walk around the curved crust **and** both straight cuts: {{4pi + 12 + 12 = 4pi + 24 cm}}!",
      },
      body: `A **sector** is the pie-slice region bounded by two radii and an **arc** (part of the circumference). Because a full turn around the centre of a circle is {{360°}}, a sector with central angle {{theta}} is simply the fraction {{theta/360}} of the entire circle.

That single fraction scales both the full circumference {{C = 2pi r}} and the full area {{A = pi r^2}}:

- **Arc length**: {{l = (theta/360) * 2pi r}} (equivalently {{(theta/360) * pi d}}, where {{d = 2r}})
- **Sector area**: {{A = (theta/360) * pi r^2}}
- **Perimeter of a sector**: {{P = "arc length" + 2r = (theta/360) * 2pi r + 2r}}

Notice the two straight radii! The arc length measures only the curved outer edge, whereas the **perimeter** of the sector encloses the whole slice—so you must always add {{r + r = 2r}} at the end.

In Year 9 and IGCSE exams you will meet two ways of writing circle answers:
1. **Exact answers in terms of {{pi}}**: simplify the fraction {{theta/360}} first and keep {{pi}} as a symbol (for example, {{12pi cm^2}} or {{4pi + 12 cm}}). Never approximate {{pi}} until the final line, and do not add unlike terms—{{4pi + 12}} cannot be simplified to {{16pi}}!
2. **Rounded decimal answers**: use your calculator's {{pi}} button (not {{3.14}}) and round only at the very end to the accuracy requested (e.g. 1 d.p. or 3 s.f.).`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle sector of radius r and angle theta showing arc length, area, and two straight radii">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface-2)"/>
  <!-- Full circle ghost -->
  <circle cx="150" cy="130" r="88" fill="none" stroke="var(--line)" stroke-width="2" stroke-dasharray="5 5"/>
  <!-- Shaded sector 120 deg from -30 deg to +90 deg? Let's do 0 deg (right) to -120 deg (up-left) -->
  <!-- Centre (150,130), r=88. Point A at 0 deg: (238,130). Point B at -120 deg: (150 + 88*cos(-120), 130 + 88*sin(-120)) = (106, 53.8) -->
  <path d="M 150 130 L 238 130 A 88 88 0 0 0 106 53.8 Z" fill="var(--brand-soft)" stroke="none"/>
  <!-- Curved arc highlighted in brand -->
  <path d="M 238 130 A 88 88 0 0 0 106 53.8" fill="none" stroke="var(--brand)" stroke-width="4.5" stroke-linecap="round"/>
  <!-- Two straight radii highlighted in good -->
  <line x1="150" y1="130" x2="238" y2="130" stroke="var(--good)" stroke-width="3.2" stroke-linecap="round"/>
  <line x1="150" y1="130" x2="106" y2="53.8" stroke="var(--good)" stroke-width="3.2" stroke-linecap="round"/>
  <!-- Angle arc -->
  <path d="M 176 130 A 26 26 0 0 0 137 107.5" fill="none" stroke="var(--ink)" stroke-width="2"/>
  <circle cx="150" cy="130" r="3.5" fill="var(--ink)"/>
  <!-- Labels on circle -->
  <text x="163" y="114" font-size="15" font-weight="700" fill="var(--ink)">θ</text>
  <text x="195" y="148" font-size="14" font-weight="700" fill="var(--good)" text-anchor="middle">r</text>
  <text x="115" y="102" font-size="14" font-weight="700" fill="var(--good)" text-anchor="middle">r</text>
  <text x="218" y="64" font-size="14" font-weight="700" fill="var(--brand)">Arc length</text>
  <text x="176" y="88" font-size="12" font-weight="600" fill="var(--ink-2)">Sector</text>
  <text x="150" y="236" font-size="12" fill="var(--ink-2)" text-anchor="middle">Fraction of circle = θ / 360°</text>
  <!-- Formula box on right -->
  <rect x="295" y="24" width="245" height="202" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="313" y="52" font-size="14" font-weight="800" fill="var(--ink)">Sector Formulae</text>
  <line x1="313" y1="62" x2="522" y2="62" stroke="var(--line)" stroke-width="1"/>
  <text x="313" y="88" font-size="13" font-weight="700" fill="var(--brand)">Arc length:</text>
  <text x="313" y="108" font-size="14" font-weight="700" fill="var(--ink)">(θ / 360) × 2πr</text>
  <text x="313" y="138" font-size="13" font-weight="700" fill="var(--ink-2)">Sector area:</text>
  <text x="313" y="158" font-size="14" font-weight="700" fill="var(--ink)">(θ / 360) × πr²</text>
  <text x="313" y="188" font-size="13" font-weight="700" fill="var(--good)">Total perimeter:</text>
  <text x="313" y="208" font-size="14" font-weight="700" fill="var(--ink)">Arc length + 2r</text>
</svg>`,
      diagramCaption:
        "A sector is simply θ/360 of a full circle. The perimeter always includes the curved arc (blue) PLUS both straight radii (green).",
      whyItWorks:
        "A circle has perfect rotational symmetry: every {{1°}} slice around the centre has the exact same arc length ({{2pi r / 360}}) and the exact same area ({{pi r^2 / 360}}). Multiplying by {{theta}} gives {{(theta/360) * 2pi r}} and {{(theta/360) * pi r^2}}. Even better, imagine slicing a sector into dozens of razor-thin triangles and lining them up alternately—their curved bases add to the arc length {{l}} and their height is {{r}}, giving {{A = (1/2) * l * r}}!",
      keyPoints: [
        "Always check whether you are given the **radius** {{r}} or the **diameter** {{d = 2r}}—halve the diameter immediately if needed.",
        "Simplify the fraction {{theta/360}} first (e.g. {{120/360 = 1/3}}, {{72/360 = 1/5}}, {{45/360 = 1/8}}) to keep exact calculations painless.",
        "**Arc length** is only the curved edge; **sector perimeter** is {{l + 2r}} (arc plus the two straight radii).",
        "A semicircle ({{theta = 180°}}) has perimeter {{pi r + 2r}}, and a quarter-circle ({{theta = 90°}}) has perimeter {{(1/2)pi r + 2r}}.",
        "In exact answers like {{6pi + 18}}, never combine the {{pi}} term with the constant term.",
      ],
      strategies: [
        "**Fraction first**: simplify {{theta/360}} before multiplying by {{2pi r}} or {{pi r^2}}.",
        "**Trace the boundary with a finger**: count every straight edge and every curved arc so you never forget the {{+ 2r}}.",
        "**Reverse sector problems**: substitute the known area or arc length into the formula and solve for {{theta}} or {{r}}.",
      ],
      thinkDeeper:
        "Suppose a sector of radius {{r}} has arc length {{l}}. Can you prove that its area is always {{(1/2)lr}}, regardless of what the angle {{theta}} is? (Hint: express {{theta/360}} in terms of {{l}} and {{2pi r}}, then substitute into the sector area formula!)",
      workedExamples: [
        {
          title: "Exact arc length, area & perimeter",
          problem:
            "A sector of a circle has radius {{6 cm}} and central angle {{120°}}. Find its exact arc length, sector area, and total perimeter in terms of {{pi}}.",
          steps: [
            "Write the fraction of the full circle: {{120/360 = 1/3}}.",
            "Arc length: {{(1/3) * 2 * pi * 6 = 4pi cm}}.",
            "Sector area: {{(1/3) * pi * 6^2 = (1/3) * 36pi = 12pi cm^2}}.",
            "Total perimeter = arc length + two radii = {{4pi + 6 + 6 = 4pi + 12 cm}}.",
          ],
          answer: "Arc = {{4pi cm}}, Area = {{12pi cm^2}}, Perimeter = {{4pi + 12 cm}}",
          yourTurn: {
            question:
              "A sector has radius {{9 cm}} and central angle {{80°}}. Find its exact **area** in terms of {{pi}} (type e.g. `18pi`).",
            answer: { type: "expression", expr: "18pi", display: "{{18pi}} cm²" },
            solution:
              "Fraction = {{80/360 = 2/9}}. Area = {{(2/9) * pi * 9^2 = (2/9) * 81pi = 18pi cm^2}}.",
          },
        },
        {
          title: "Rounded sector perimeter",
          problem:
            "A sector has radius {{10 cm}} and angle {{72°}}. Calculate its perimeter to 1 decimal place.",
          steps: [
            "Fraction of the circle: {{72/360 = 1/5}}.",
            "Arc length: {{(1/5) * 2 * pi * 10 = 4pi ~= 12.566 cm}}.",
            "Add the two straight radii: {{P = 4pi + 10 + 10 = 4pi + 20 ~= 32.566 cm}}.",
            "Round to 1 decimal place: {{32.6 cm}}.",
          ],
          answer: "{{32.6 cm}} (to 1 d.p.)",
          yourTurn: {
            question:
              "A semicircle has radius {{8 cm}}. Find its total **perimeter** in cm, correct to 1 decimal place (use your calculator's {{pi}} button).",
            answer: { type: "number", value: 41.1, tolerance: 0.05, display: "41.1 cm" },
            solution:
              "Curved arc = {{(180/360) * 2 * pi * 8 = 8pi ~= 25.133 cm}}. Add the straight diameter {{2 * 8 = 16 cm}}: {{25.133 + 16 = 41.133 ~= 41.1 cm}}.",
          },
        },
      ],
    },

    // =======================================================================
    // 2. PRISMS & CYLINDERS
    // =======================================================================
    {
      id: "prisms-cylinders",
      heading: "Surface Area & Volume of Cubes, Cuboids, Prisms & Cylinders",
      discovery: {
        problem:
          "Take a soup can label and peel it cleanly off the cylinder without stretching it. What 2D shape lies flat on the table? What are its width and height in terms of the can's radius {{r}} and height {{h}}?",
        idea: "The label unrolls into a **rectangle**! Its height is the cylinder's height {{h}}, and its width wrapped all the way around the circular rim—so its width is the circumference {{2pi r}}. That is why the curved surface area of a cylinder is {{2pi r h}}!",
      },
      body: `A **prism** is a 3D solid with a uniform **cross-section**: if you slice it parallel to its end face anywhere along its length, every slice has the exact same shape and size. Cubes, cuboids, triangular prisms, trapezoidal prisms, and L-shaped prisms all obey the same master rule:

- **Volume of any prism**: {{V = "cross-sectional area" * "length"}}
- **Surface area of any prism**: add the areas of **all** faces—the two identical end faces plus every rectangular side face. A smart shortcut is:
  {{"Total SA" = 2 * ("cross-section area") + ("cross-section perimeter") * "length"}}

A **cylinder** behaves just like a circular prism! Its cross-section is a circle of area {{pi r^2}} and perimeter {{2pi r}}:

- **Volume of a cylinder**: {{V = pi r^2 h}}
- **Curved surface area (CSA)**: {{2pi r h}}
- **Total surface area of a closed cylinder**: {{A = 2pi r^2 + 2pi r h}} (two circular ends + one rectangular curved wall)

Watch out for **open-topped** containers (like a drinking glass or open water tank): they have only **one** circular base, so their surface area is {{pi r^2 + 2pi r h}} instead of {{2pi r^2 + 2pi r h}}.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cylinder unrolled into its net of two circles and a rectangle of width 2 pi r and height h">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface-2)"/>
  <!-- Left: 3D cylinder -->
  <ellipse cx="95" cy="70" rx="46" ry="15" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2.2"/>
  <path d="M 49 70 L 49 178 A 46 15 0 0 0 141 178 L 141 70" fill="var(--surface)" stroke="var(--ink)" stroke-width="2"/>
  <ellipse cx="95" cy="178" rx="46" ry="15" fill="none" stroke="var(--ink-2)" stroke-width="1.3" stroke-dasharray="4 4"/>
  <ellipse cx="95" cy="70" rx="46" ry="15" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2.2"/>
  <!-- Radius line -->
  <line x1="95" y1="70" x2="141" y2="70" stroke="var(--brand)" stroke-width="2"/>
  <circle cx="95" cy="70" r="2.8" fill="var(--brand)"/>
  <text x="118" y="64" font-size="13" font-weight="700" fill="var(--brand)" text-anchor="middle">r</text>
  <!-- Height label -->
  <line x1="154" y1="70" x2="154" y2="178" stroke="var(--good)" stroke-width="2"/>
  <line x1="149" y1="70" x2="159" y2="70" stroke="var(--good)" stroke-width="2"/>
  <line x1="149" y1="178" x2="159" y2="178" stroke="var(--good)" stroke-width="2"/>
  <text x="165" y="129" font-size="14" font-weight="700" fill="var(--good)">h</text>
  <text x="95" y="220" font-size="12" font-weight="700" fill="var(--ink)" text-anchor="middle">V = πr²h</text>
  <!-- Unroll arrow -->
  <line x1="190" y1="125" x2="232" y2="125" stroke="var(--ink-2)" stroke-width="2.2"/>
  <polygon points="232,119 244,125 232,131" fill="var(--ink-2)"/>
  <text x="215" y="114" font-size="11" font-weight="700" fill="var(--ink-2)" text-anchor="middle">unroll</text>
  <!-- Right: Net of cylinder -->
  <!-- Top circle -->
  <circle cx="395" cy="48" r="28" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
  <text x="395" y="53" font-size="13" font-weight="700" fill="var(--brand)" text-anchor="middle">πr²</text>
  <!-- Middle rectangle -->
  <rect x="275" y="76" width="240" height="94" rx="3" fill="var(--surface)" stroke="var(--ink)" stroke-width="2"/>
  <text x="395" y="117" font-size="14" font-weight="700" fill="var(--ink)" text-anchor="middle">Curved wall = 2πrh</text>
  <text x="395" y="138" font-size="12" fill="var(--ink-2)" text-anchor="middle">width = circumference = 2πr</text>
  <text x="526" y="128" font-size="14" font-weight="700" fill="var(--good)">h</text>
  <!-- Bottom circle -->
  <circle cx="395" cy="198" r="28" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
  <text x="395" y="203" font-size="13" font-weight="700" fill="var(--brand)" text-anchor="middle">πr²</text>
  <!-- Summary label -->
  <text x="395" y="242" font-size="12" font-weight="700" fill="var(--ink)" text-anchor="middle">Total SA = 2πr² + 2πrh</text>
</svg>`,
      diagramCaption:
        "Unrolling a closed cylinder reveals two circles (area πr² each) and one rectangle of width 2πr and height h.",
      whyItWorks:
        "Imagine stacking identical flat cardboard cutouts of the cross-section on top of one another. One layer of thickness {{1 cm}} holds as many {{1 cm^3}} cubes as the cross-sectional area in {{cm^2}}. Stacking {{h}} layers multiplies that count by {{h}}, so {{V = A * h}} works for **every** prism and cylinder—even tilted or L-shaped ones—as long as the cross-section stays constant.",
      keyPoints: [
        "Every prism obeys {{V = \"cross-sectional area\" * \"length\"}}: identify the uniform end face first, even when the prism is lying on its side.",
        "For a triangular prism, do **not** forget the {{1/2}} in the triangle area {{(1/2)bh}}, and use the perpendicular height—not the slanted side!",
        "Total surface area of a cuboid with sides {{l, w, h}} is {{2(lw + lh + wh)}} (3 pairs of opposite faces).",
        "A closed cylinder has total surface area {{2pi r^2 + 2pi r h}}; an open-topped cylinder has {{pi r^2 + 2pi r h}}.",
        "Always check that all dimensions are in the **same unit** before multiplying.",
      ],
      strategies: [
        "**Face-inventory checklist**: list every face of a prism (e.g. front, back, left, right, base) and tick them off so none is missed or double-counted.",
        "**Perimeter × length shortcut**: all the rectangular side faces of a prism unfold into one big rectangle of area {{(\"perimeter of cross-section\") * \"length\"}}.",
        "**Spot the cross-section**: look for the face that repeats identically at the opposite end—not simply the face sitting on the ground.",
      ],
      thinkDeeper:
        "Two cylinders are made by rolling the **same** {{24 cm * 12 cm}} sheet of paper into a tube—one with height {{12 cm}} (circumference {{24 cm}}) and the other with height {{24 cm}} (circumference {{12 cm}}). Both have the exact same curved surface area, yet one holds **twice** the volume of the other! Which one is larger, and why?",
      workedExamples: [
        {
          title: "Volume & surface area of a triangular prism",
          problem:
            "A triangular prism has a right-angled triangular cross-section with perpendicular sides {{6 cm}} and {{8 cm}}, hypotenuse {{10 cm}}, and length {{12 cm}}. Find its volume and total surface area.",
          steps: [
            "Cross-sectional area (right triangle): {{A = (1/2) * 6 * 8 = 24 cm^2}}.",
            "Volume: {{V = 24 * 12 = 288 cm^3}}.",
            "Perimeter of the triangular cross-section: {{6 + 8 + 10 = 24 cm}}.",
            "Total surface area = 2 triangles + 3 rectangular faces = {{2(24) + 24 * 12 = 48 + 288 = 336 cm^2}}.",
          ],
          answer: "Volume = {{288 cm^3}}, Total SA = {{336 cm^2}}",
          yourTurn: {
            question:
              "A triangular prism has a right-angled triangular cross-section with perpendicular sides {{5 cm}} and {{12 cm}} (hypotenuse {{13 cm}}), and length {{10 cm}}. Find its **volume** in {{cm^3}}.",
            answer: { type: "number", value: 300, display: "300 cm³" },
            solution:
              "Cross-section area = {{(1/2) * 5 * 12 = 30 cm^2}}. Volume = {{30 * 10 = 300 cm^3}}.",
          },
        },
        {
          title: "Exact volume & surface area of a cylinder",
          problem:
            "A closed cylinder has radius {{4 cm}} and height {{10 cm}}. Find its exact volume and exact total surface area in terms of {{pi}}.",
          steps: [
            "Volume: {{V = pi r^2 h = pi * 4^2 * 10 = 160pi cm^3}}.",
            "Area of two circular ends: {{2pi r^2 = 2 * pi * 4^2 = 32pi cm^2}}.",
            "Curved surface area: {{2pi r h = 2 * pi * 4 * 10 = 80pi cm^2}}.",
            "Total surface area: {{32pi + 80pi = 112pi cm^2}}.",
          ],
          answer: "Volume = {{160pi cm^3}}, Total SA = {{112pi cm^2}}",
          yourTurn: {
            question:
              "A closed cylinder has radius {{5 cm}} and height {{7 cm}}. Find its exact **total surface area** in terms of {{pi}} (type e.g. `120pi`).",
            answer: { type: "expression", expr: "120pi", display: "{{120pi}} cm²" },
            solution:
              "Two circles = {{2 * pi * 5^2 = 50pi}}; curved wall = {{2 * pi * 5 * 7 = 70pi}}; total = {{50pi + 70pi = 120pi cm^2}}.",
          },
        },
      ],
    },

    // =======================================================================
    // 3. CONES & REVERSE VOLUME
    // =======================================================================
    {
      id: "cones-and-reverse-volume",
      heading: "Cones & Finding Missing Dimensions from Volume",
      discovery: {
        problem:
          "Imagine a hollow cone and a hollow cylinder that have the **exact same circular base** (radius {{r}}) and the **exact same perpendicular height** ({{h}}). If you fill the cone with water and pour it into the cylinder, how many full cones of water does it take to fill the cylinder to the brim?",
        idea: "Exactly **3** full cones! That is why the volume of a cone is always **one-third** of the matching cylinder: {{V = (1/3) pi r^2 h}}. The same {{1/3}} factor applies to every pyramid compared with its enclosing prism!",
      },
      body: `A **cone** tapers smoothly from a circular base of radius {{r}} to a single apex directly above the centre at perpendicular height {{h}}. Its sloping edge from the apex to the rim is the **slant height** {{l}}.

Crucially, {{r}}, {{h}}, and {{l}} form a **right-angled triangle** inside the cone, linked by Pythagoras' theorem:

{{l^2 = r^2 + h^2}}

Keep the two heights strictly separate when applying the cone formulae:
- **Volume of a cone** (uses perpendicular height {{h}}): {{V = (1/3) pi r^2 h}}
- **Curved surface area of a cone** (uses slant height {{l}}): {{"CSA" = pi r l}}
- **Total surface area of a solid cone**: {{"Total SA" = pi r^2 + pi r l}} (circular base + curved surface)

**Finding missing dimensions (reverse volume)**:
Often an exam gives you the **volume** and asks for an unknown length, height, or radius. Treat the volume formula as an equation:
1. Write down the volume formula for the shape.
2. Substitute every known number (including the given volume).
3. Rearrange using inverse operations—if you are finding {{r}} from {{r^2}}, remember to take the positive square root at the end!`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cone showing internal right-angled triangle with radius r, perpendicular height h, slant height l, and volume comparison with cylinder">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface-2)"/>
  <!-- Cone on left: apex (145, 34), base centre (145, 188), rx=74, ry=20 -->
  <ellipse cx="145" cy="188" rx="74" ry="20" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="2"/>
  <path d="M 71 188 L 145 34 L 219 188" fill="var(--surface)" fill-opacity="0.7" stroke="var(--ink)" stroke-width="2.2" stroke-linejoin="round"/>
  <!-- Front arc of ellipse -->
  <path d="M 71 188 A 74 20 0 0 0 219 188" fill="none" stroke="var(--ink)" stroke-width="2.2"/>
  <!-- Internal right triangle: h vertical, r horizontal, l slant -->
  <line x1="145" y1="34" x2="145" y2="188" stroke="var(--good)" stroke-width="2.6" stroke-dasharray="6 4"/>
  <line x1="145" y1="188" x2="219" y2="188" stroke="var(--brand)" stroke-width="2.6"/>
  <line x1="145" y1="34" x2="219" y2="188" stroke="var(--bad)" stroke-width="3"/>
  <!-- Right angle symbol -->
  <polyline points="145,174 159,174 159,188" fill="none" stroke="var(--ink)" stroke-width="1.8"/>
  <!-- Labels -->
  <text x="134" y="122" font-size="15" font-weight="800" fill="var(--good)" text-anchor="end">h</text>
  <text x="182" y="182" font-size="15" font-weight="800" fill="var(--brand)" text-anchor="middle">r</text>
  <text x="196" y="106" font-size="15" font-weight="800" fill="var(--bad)">l</text>
  <text x="145" y="232" font-size="12" font-weight="700" fill="var(--ink-2)" text-anchor="middle">Pythagoras: l² = r² + h²</text>
  <!-- Right side formula & reverse box -->
  <rect x="275" y="24" width="265" height="202" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="293" y="52" font-size="14" font-weight="800" fill="var(--ink)">Cone Formulae</text>
  <line x1="293" y1="62" x2="522" y2="62" stroke="var(--line)" stroke-width="1"/>
  <text x="293" y="88" font-size="13" font-weight="700" fill="var(--good)">Volume (uses h):</text>
  <text x="293" y="108" font-size="14" font-weight="700" fill="var(--ink)">V = (1/3) × πr²h</text>
  <text x="293" y="138" font-size="13" font-weight="700" fill="var(--bad)">Curved SA (uses l):</text>
  <text x="293" y="158" font-size="14" font-weight="700" fill="var(--ink)">CSA = πrl</text>
  <text x="293" y="188" font-size="13" font-weight="700" fill="var(--brand)">Total SA (solid cone):</text>
  <text x="293" y="208" font-size="14" font-weight="700" fill="var(--ink)">SA = πr² + πrl</text>
</svg>`,
      diagramCaption:
        "Never mix up perpendicular height h (for volume) and slant height l (for curved surface area). Pythagoras links them via l² = r² + h².",
      whyItWorks:
        "Unroll the curved surface of a cone by cutting straight up one slant edge {{l}}. It lays flat as a **circle sector** of radius {{l}} whose curved arc wraps around the cone's circular base, so its arc length is {{2pi r}}. Using the sector area relation {{A = (1/2) * \"arc\" * \"radius\"}}, we immediately get {{\"CSA\" = (1/2) * (2pi r) * l = pi r l}}!",
      keyPoints: [
        "Cone volume is {{V = (1/3)pi r^2 h}}—use the **perpendicular** height {{h}}, never the slant height {{l}}.",
        "Cone curved surface area is {{pi r l}}—use the **slant** height {{l}}, found with {{l = sqrt(r^2 + h^2)}} if only {{r}} and {{h}} are given.",
        "For a **solid** cone, add the circular base {{pi r^2}} to get {{\"Total SA\" = pi r^2 + pi r l}}. An open party hat has CSA {{pi r l}} only.",
        "When reversing a cone volume, multiply by {{3}} first ({{3V = pi r^2 h}}) before dividing.",
        "When solving for a missing radius {{r}} from {{pi r^2 h = V}}, cancel {{pi}} on both sides first if {{V}} is given in terms of {{pi}}, then take {{sqrt(r^2)}}.",
      ],
      strategies: [
        "**Sketch the inner right triangle**: write {{r}}, {{h}}, and {{l}} on its three sides immediately so you never plug {{l}} into volume or {{h}} into surface area.",
        "**Equation-first reverse method**: write the formula, plug in knowns, and solve cleanly step by step—check your answer by substituting it back into the volume formula.",
        "**Watch for Pythagorean triples**: cone exam questions love {{(3, 4, 5)}}, {{(5, 12, 13)}}, {{(6, 8, 10)}}, and {{(8, 15, 17)}}!",
      ],
      thinkDeeper:
        "A cone has the same base radius {{r}} and perpendicular height {{h}} as a cylinder, and a sphere of radius {{r}} fits snugly inside a cylinder of radius {{r}} and height {{2r}}. Archimedes proved that the volumes of the **cone : sphere : cylinder** (all radius {{r}}, height {{2r}}) are in the exact ratio {{1 : 2 : 3}}. Using {{V_\"cylinder\" = 2pi r^3}}, what formula does that give for the volume of a sphere?",
      workedExamples: [
        {
          title: "Cone volume & total surface area using Pythagoras",
          problem:
            "A solid cone has base radius {{6 cm}} and perpendicular height {{8 cm}}. Find (a) its exact volume and (b) its exact total surface area in terms of {{pi}}.",
          steps: [
            "Volume uses perpendicular height {{h = 8}}: {{V = (1/3) * pi * 6^2 * 8 = (1/3) * 288pi = 96pi cm^3}}.",
            "Find the slant height {{l}} using Pythagoras: {{l = sqrt(6^2 + 8^2) = sqrt(36 + 64) = sqrt(100) = 10 cm}}.",
            "Curved surface area: {{pi r l = pi * 6 * 10 = 60pi cm^2}}.",
            "Add the circular base {{pi r^2 = 36pi cm^2}}: Total SA = {{36pi + 60pi = 96pi cm^2}}.",
          ],
          answer: "Volume = {{96pi cm^3}}, Total SA = {{96pi cm^2}}",
          yourTurn: {
            question:
              "A solid cone has base radius {{3 cm}} and perpendicular height {{4 cm}}. Find its exact **total surface area** in terms of {{pi}} (type e.g. `24pi`).",
            answer: { type: "expression", expr: "24pi", display: "{{24pi}} cm²" },
            solution:
              "Slant height {{l = sqrt(3^2 + 4^2) = 5 cm}}. Base = {{9pi}}, CSA = {{pi * 3 * 5 = 15pi}}. Total SA = {{9pi + 15pi = 24pi cm^2}}.",
          },
        },
        {
          title: "Working backwards from volume to find a missing dimension",
          problem:
            "A cylinder has volume {{250pi cm^3}} and height {{10 cm}}. Find its base radius.",
          steps: [
            "Write the volume formula: {{pi r^2 h = V}}.",
            "Substitute {{V = 250pi}} and {{h = 10}}: {{10pi r^2 = 250pi}}.",
            "Divide both sides by {{10pi}}: {{r^2 = 25}}.",
            "Take the positive square root: {{r = 5 cm}}.",
          ],
          answer: "{{r = 5 cm}}",
          yourTurn: {
            question:
              "A cuboid has volume {{360 cm^3}}, length {{12 cm}}, and width {{5 cm}}. Find its height in cm.",
            answer: { type: "number", value: 6, display: "6 cm" },
            solution:
              "{{12 * 5 * h = 360}}, so {{60h = 360}}, giving {{h = 360 / 60 = 6 cm}}.",
          },
        },
      ],
    },

    // =======================================================================
    // 4. AREA & VOLUME UNIT CONVERSIONS
    // =======================================================================
    {
      id: "area-volume-units",
      heading: "Converting Between Units of Area & Volume",
      discovery: {
        problem:
          "Since {{1 m = 100 cm}}, a student claims that {{1 m^2 = 100 cm^2}} and {{1 m^3 = 100 cm^3}}. Picture a {{1 m}} by {{1 m}} floor tile covered in {{1 cm}} by {{1 cm}} squares. How many small squares actually fit inside?",
        idea: "There are {{100}} squares along the bottom row **and** {{100}} rows going up, so {{1 m^2 = 100 * 100 = 10,000 cm^2}}! In 3D, a {{1 m}} cube is {{100}} layers of {{10,000}} cubes: {{1 m^3 = 100^3 = 1,000,000 cm^3}}!",
      },
      body: `The single most common trap in measurement is using the **length** conversion factor for area or volume. Whenever a length unit changes by a factor {{k}}:

- **Length (1D)** scales by {{k}}
- **Area (2D)** scales by {{k^2}} (because you convert **both** length and width!)
- **Volume (3D)** scales by {{k^3}} (because you convert length, width, **and** height!)

Memorise the key metric conversions—or better yet, rebuild them in two seconds by squaring or cubing the 1D factor:

| Conversion | Length (1D) | Area (2D) | Volume (3D) |
|---|---|---|---|
| cm ↔ mm | {{1 cm = 10 mm}} | {{1 cm^2 = 10^2 = 100 mm^2}} | {{1 cm^3 = 10^3 = 1,000 mm^3}} |
| m ↔ cm | {{1 m = 100 cm}} | {{1 m^2 = 100^2 = 10,000 cm^2}} | {{1 m^3 = 100^3 = 1,000,000 cm^3}} |
| km ↔ m | {{1 km = 1,000 m}} | {{1 km^2 = 1,000^2 = 1,000,000 m^2}} | {{1 km^3 = 10^9 m^3}} |

**Capacity (litres and millilitres)** connects straight to cubic centimetres:
- {{1 ml = 1 cm^3}} (a tiny {{1 cm * 1 cm * 1 cm}} cube holds exactly one millilitre!)
- {{1 "litre" = 1,000 ml = 1,000 cm^3}}
- {{1 m^3 = 1,000 "litres"}} (since {{1,000,000 cm^3 / 1,000 = 1,000}} litres)

**Direction check**: converting from a **bigger** unit to a **smaller** unit (like {{m^2 -> cm^2}}) produces a **bigger** number (multiply). Converting from a **smaller** unit to a **bigger** unit (like {{cm^3 -> m^3}}) produces a **smaller** number (divide).`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="1D length, 2D area, and 3D volume unit conversion ladder showing 1 m = 100 cm, 1 m squared = 10000 cm squared, and 1 m cubed = 1000000 cm cubed">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface-2)"/>
  <!-- Column 1: 1D -->
  <rect x="18" y="20" width="160" height="165" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="98" y="44" font-size="13" font-weight="800" fill="var(--brand)" text-anchor="middle">1D Length (× k)</text>
  <line x1="44" y1="95" x2="152" y2="95" stroke="var(--brand)" stroke-width="4" stroke-linecap="round"/>
  <circle cx="44" cy="95" r="4" fill="var(--brand)"/>
  <circle cx="152" cy="95" r="4" fill="var(--brand)"/>
  <text x="98" y="83" font-size="13" font-weight="700" fill="var(--ink)" text-anchor="middle">1 m</text>
  <text x="98" y="116" font-size="12" font-weight="700" fill="var(--ink-2)" text-anchor="middle">= 100 cm</text>
  <text x="98" y="160" font-size="13" font-weight="800" fill="var(--ink)" text-anchor="middle">× 100</text>
  <!-- Column 2: 2D -->
  <rect x="200" y="20" width="160" height="165" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="44" font-size="13" font-weight="800" fill="var(--good)" text-anchor="middle">2D Area (× k²)</text>
  <rect x="244" y="64" width="68" height="68" fill="var(--good-soft)" stroke="var(--good)" stroke-width="2.2"/>
  <line x1="266" y1="64" x2="266" y2="132" stroke="var(--good)" stroke-width="0.9" stroke-opacity="0.5"/>
  <line x1="289" y1="64" x2="289" y2="132" stroke="var(--good)" stroke-width="0.9" stroke-opacity="0.5"/>
  <line x1="244" y1="86" x2="312" y2="86" stroke="var(--good)" stroke-width="0.9" stroke-opacity="0.5"/>
  <line x1="244" y1="109" x2="312" y2="109" stroke="var(--good)" stroke-width="0.9" stroke-opacity="0.5"/>
  <text x="278" y="59" font-size="11" font-weight="700" fill="var(--ink-2)" text-anchor="middle">100 cm</text>
  <text x="333" y="102" font-size="11" font-weight="700" fill="var(--ink-2)" text-anchor="middle">100 cm</text>
  <text x="280" y="156" font-size="12" font-weight="800" fill="var(--ink)" text-anchor="middle">1 m² = 10,000 cm²</text>
  <text x="280" y="173" font-size="11" font-weight="700" fill="var(--good)" text-anchor="middle">(× 100²)</text>
  <!-- Column 3: 3D -->
  <rect x="382" y="20" width="160" height="165" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="462" y="44" font-size="13" font-weight="800" fill="var(--bad)" text-anchor="middle">3D Volume (× k³)</text>
  <!-- Isometric-ish cube -->
  <rect x="424" y="80" width="54" height="54" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="2"/>
  <polygon points="424,80 444,62 498,62 478,80" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="478,80 498,62 498,116 478,134" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="2" stroke-linejoin="round"/>
  <text x="451" y="112" font-size="11" font-weight="700" fill="var(--ink)" text-anchor="middle">1 m³</text>
  <text x="462" y="156" font-size="12" font-weight="800" fill="var(--ink)" text-anchor="middle">1 m³ = 1,000,000 cm³</text>
  <text x="462" y="173" font-size="11" font-weight="700" fill="var(--bad)" text-anchor="middle">(× 100³)</text>
  <!-- Capacity footer bar -->
  <rect x="18" y="198" width="524" height="36" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="280" y="221" font-size="13" font-weight="800" fill="var(--ink)" text-anchor="middle">Capacity Bridge:   1 ml = 1 cm³   ·   1 litre = 1,000 cm³   ·   1 m³ = 1,000 litres</text>
</svg>`,
      diagramCaption:
        "Scale factors square for area (k²) and cube for volume (k³). Use 1 litre = 1,000 cm³ to jump cleanly between volume and liquid capacity.",
      whyItWorks:
        "Write out the unit as a product of lengths! Since {{1 m = 100 cm}}, you can literally substitute {{100 cm}} for every factor of {{m}}: {{1 m^2 = (1 m) * (1 m) = (100 cm) * (100 cm) = 10,000 cm^2}}, and {{1 m^3 = (100 cm)^3 = 1,000,000 cm^3}}. You never have to guess how many zeros to add!",
      keyPoints: [
        "Length factor {{k}} → Area factor {{k^2}} → Volume factor {{k^3}}.",
        "{{1 cm^2 = 100 mm^2}}, {{1 m^2 = 10,000 cm^2}}, {{1 km^2 = 1,000,000 m^2}}.",
        "{{1 cm^3 = 1,000 mm^3}} and {{1 m^3 = 1,000,000 cm^3}}.",
        "{{1 ml = 1 cm^3}}, {{1 \"litre\" = 1,000 cm^3}}, and {{1 m^3 = 1,000 \"litres\"}}.",
        "When calculating a volume from mixed units (e.g. {{1.2 m}} by {{50 cm}} by {{40 cm}}), convert all lengths into the **target unit first**—it is faster and avoids huge conversions at the end!",
      ],
      strategies: [
        "**Convert lengths BEFORE multiplying**: turning {{2 m * 50 cm}} into {{200 cm * 50 cm}} (or {{2 m * 0.5 m}}) prevents squared/cubed conversion slips.",
        "**Unit-power exponent rule**: count the power on the unit—{{cm^2}} means apply the cm-factor **twice**; {{m^3}} means apply the m-factor **three times**.",
        "**Sanity check size**: bigger unit name → smaller number; smaller unit name → bigger number.",
      ],
      thinkDeeper:
        "A square garden has area {{2.5 \"hectares\"}}, where {{1 \"hectare\" = 10,000 m^2}}. If a map has a linear scale of {{1 : 500}}, what is the area of the garden on the map in {{cm^2}}?",
      workedExamples: [
        {
          title: "Converting area units both ways",
          problem:
            "Convert (a) {{3.4 m^2}} to {{cm^2}}, and (b) {{45,000 mm^2}} to {{cm^2}}.",
          steps: [
            "(a) {{1 m = 100 cm}}, so {{1 m^2 = 100^2 = 10,000 cm^2}}.",
            "Multiply (bigger unit to smaller unit): {{3.4 * 10,000 = 34,000 cm^2}}.",
            "(b) {{1 cm = 10 mm}}, so {{1 cm^2 = 10^2 = 100 mm^2}}.",
            "Divide (smaller unit to bigger unit): {{45,000 / 100 = 450 cm^2}}.",
          ],
          answer: "(a) {{34,000 cm^2}}, (b) {{450 cm^2}}",
          yourTurn: {
            question: "Convert {{2.75 m^2}} into {{cm^2}}.",
            answer: { type: "number", value: 27500, display: "27,500 cm²" },
            solution:
              "{{1 m^2 = 100^2 = 10,000 cm^2}}, so {{2.75 * 10,000 = 27,500 cm^2}}.",
          },
        },
        {
          title: "Volume to litres & cubic metres to cubic centimetres",
          problem:
            "A rectangular aquarium measures {{60 cm}} by {{30 cm}} by {{40 cm}}. How many **litres** of water does it hold when completely full?",
          steps: [
            "Find the volume in {{cm^3}}: {{V = 60 * 30 * 40 = 72,000 cm^3}}.",
            "Recall that {{1 \"litre\" = 1,000 cm^3}}.",
            "Divide by {{1,000}}: {{72,000 / 1,000 = 72 \"litres\"}}.",
          ],
          answer: "{{72 \"litres\"}}",
          yourTurn: {
            question: "Convert {{0.045 m^3}} into {{cm^3}}.",
            answer: { type: "number", value: 45000, display: "45,000 cm³" },
            solution:
              "{{1 m^3 = 100^3 = 1,000,000 cm^3}}, so {{0.045 * 1,000,000 = 45,000 cm^3}}.",
          },
        },
      ],
    },

    // =======================================================================
    // 5. MEASUREMENT ACCURACY & ERROR INTERVALS
    // =======================================================================
    {
      id: "measurement-accuracy",
      heading: "Accuracy of Measurement & Error Intervals",
      discovery: {
        problem:
          "A ruler is marked only in whole centimetres. You measure a pencil as **{{14 cm}} to the nearest cm**. What is the **smallest** actual length the pencil could have, and why is {{14.499 cm}} possible while {{14.5 cm}} is NOT?",
        idea: "Any length from {{13.5 cm}} upwards rounds up to {{14 cm}}, so {{13.5 cm}} is the **lower bound**. At the top end, {{14.4999... cm}} still rounds down to {{14 cm}}, but {{14.5 cm}} itself rounds **up** to {{15 cm}}! That is why we write the **error interval** as {{13.5 <= x < 14.5}}—using {{<=}} on the left and a strict {{<}} on the right.",
      },
      body: `Every real-world measurement is rounded to some degree of accuracy (nearest whole unit, nearest {{10}}, {{1}} decimal place, {{1}} significant figure, etc.). Because of rounding, the true value {{x}} lies inside an **error interval**:

{{"LB" <= x < "UB"}}

How to find the **lower bound (LB)** and **upper bound (UB)** in three steps:
1. Identify the **rounding unit** (the place value the measurement was rounded to—for example, {{1 cm}} for nearest cm, {{10 m}} for nearest {{10 m}}, {{0.1 kg}} for 1 d.p., or {{0.01 s}} for 2 d.p.).
2. **Halve** the rounding unit to get the maximum rounding error {{e = "unit" / 2}}.
3. Subtract and add {{e}}:
   - **Lower bound (LB)** = measured value {{ - e}}
   - **Upper bound (UB)** = measured value {{ + e}}

**Why do we still write {{14.5}} as the upper bound (and NEVER {{14.49}})?**
Because {{14.499}} is bigger than {{14.49}} and STILL rounds to {{14}}! In fact, you can get arbitrarily close to {{14.5}} without ever touching it. Writing {{13.5 <= x < 14.5}} captures **every** possible value up to (but excluding) {{14.5}}.

**Bonus contrast — Truncation**: if a number is **truncated** (chopped off without rounding, e.g. a digital timer showing {{6.3 s}} truncated to 1 d.p.), the true value could be anywhere from {{6.3}} up to (but not reaching) {{6.4}}, giving {{6.3 <= t < 6.4}}. Read carefully whether the question says *rounded* or *truncated*!`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Number line showing error interval 13.5 less than or equal to x less than 14.5 for 14 cm measured to the nearest cm">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface-2)"/>
  <text x="280" y="34" font-size="14" font-weight="800" fill="var(--ink)" text-anchor="middle">Length x = 14 cm (to the nearest 1 cm)</text>
  <!-- Main number line -->
  <line x1="48" y1="134" x2="512" y2="134" stroke="var(--ink-2)" stroke-width="2.2"/>
  <!-- Ticks: 13 at 100, 13.5 at 190, 14 at 280, 14.5 at 370, 15 at 460 -->
  <line x1="100" y1="124" x2="100" y2="144" stroke="var(--ink-2)" stroke-width="2"/>
  <line x1="190" y1="126" x2="190" y2="142" stroke="var(--ink-2)" stroke-width="1.6"/>
  <line x1="280" y1="122" x2="280" y2="146" stroke="var(--ink)" stroke-width="2.5"/>
  <line x1="370" y1="126" x2="370" y2="142" stroke="var(--ink-2)" stroke-width="1.6"/>
  <line x1="460" y1="124" x2="460" y2="144" stroke="var(--ink-2)" stroke-width="2"/>
  <!-- Tick labels -->
  <text x="100" y="164" font-size="13" font-weight="600" fill="var(--ink-2)" text-anchor="middle">13</text>
  <text x="190" y="164" font-size="14" font-weight="800" fill="var(--good)" text-anchor="middle">13.5</text>
  <text x="280" y="164" font-size="15" font-weight="800" fill="var(--ink)" text-anchor="middle">14</text>
  <text x="370" y="164" font-size="14" font-weight="800" fill="var(--bad)" text-anchor="middle">14.5</text>
  <text x="460" y="164" font-size="13" font-weight="600" fill="var(--ink-2)" text-anchor="middle">15</text>
  <!-- Highlighted interval bar -->
  <line x1="190" y1="102" x2="370" y2="102" stroke="var(--brand)" stroke-width="5"/>
  <!-- Dashed drops -->
  <line x1="190" y1="102" x2="190" y2="134" stroke="var(--good)" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="370" y1="102" x2="370" y2="134" stroke="var(--bad)" stroke-width="1.5" stroke-dasharray="3 3"/>
  <!-- Closed circle at LB, open circle at UB -->
  <circle cx="190" cy="102" r="7" fill="var(--good)" stroke="var(--surface)" stroke-width="2"/>
  <circle cx="370" cy="102" r="7" fill="var(--surface)" stroke="var(--bad)" stroke-width="3"/>
  <!-- +/- 0.5 annotations -->
  <text x="235" y="86" font-size="12" font-weight="700" fill="var(--good)" text-anchor="middle">− 0.5 (LB)</text>
  <text x="325" y="86" font-size="12" font-weight="700" fill="var(--bad)" text-anchor="middle">+ 0.5 (UB)</text>
  <text x="145" y="106" font-size="11" font-weight="700" fill="var(--good)" text-anchor="end">included (≤)</text>
  <text x="386" y="106" font-size="11" font-weight="700" fill="var(--bad)" text-anchor="start">excluded (&lt;)</text>
  <!-- Error interval banner -->
  <rect x="125" y="186" width="310" height="44" rx="10" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.6"/>
  <text x="280" y="213" font-size="16" font-weight="800" fill="var(--brand)" text-anchor="middle">13.5 ≤ x &lt; 14.5</text>
</svg>`,
      diagramCaption:
        "A filled dot at 13.5 means 13.5 is included (≤); an open dot at 14.5 means 14.5 is excluded (<), because 14.5 rounds up to 15.",
      whyItWorks:
        "Rounding maps every number to the **nearest** multiple of the rounding unit {{u}}. The boundary halfway between two consecutive multiples is always distance {{u/2}} from each one. By convention, the exact halfway mark rounds **up**, so the bottom halfway point belongs to our interval ({{<=}}) while the top halfway point belongs to the next interval ({{<}}).",
      keyPoints: [
        "Find the **rounding unit** {{u}} first, then add and subtract **half** of it ({{u/2}}).",
        "Nearest integer → {{+- 0.5}}; nearest {{10}} → {{+- 5}}; 1 d.p. ({{0.1}}) → {{+- 0.05}}; 2 d.p. ({{0.01}}) → {{+- 0.005}}.",
        "Always write error intervals with {{<=}} on the left and strict {{<}} on the right: {{\"LB\" <= x < \"UB\"}}.",
        "Never write {{14.49}} as the upper bound—the exact upper bound is {{14.5}} (with a strict {{<}}).",
        "For **perimeter** or **sum** bounds: max sum = {{UB_1 + UB_2}}, min sum = {{LB_1 + LB_2}}. For **difference**: max difference = {{UB_1 - LB_2}}!",
      ],
      strategies: [
        "**Name the unit aloud**: say 'nearest 10, so half of 10 is 5' or '1 d.p. means 0.1, so half of 0.1 is 0.05' before adding and subtracting.",
        "**Double-check both endpoints**: test whether your LB rounds UP to the given value and whether your UB is the first value that rounds UP to the NEXT value.",
        "**Watch significant figures**: for {{400}} to 1 s.f., the rounding unit is {{100}} (so {{+- 50}}), whereas for {{400}} to 2 s.f., the rounding unit is {{10}} (so {{+- 5}})!",
      ],
      thinkDeeper:
        "A rectangle's sides are measured as {{8 cm}} and {{5 cm}}, each to the nearest cm. A student calculates the upper bound of its area as {{8.4 * 5.4 = 45.36 cm^2}}, while another calculates {{8.5 * 5.5 = 46.75 cm^2}}. Why is {{46.75 cm^2}} the true upper bound of the area, even though neither side can actually equal {{8.5}} or {{5.5}}?",
      workedExamples: [
        {
          title: "Error interval for nearest integer and 1 d.p.",
          problem:
            "A wooden plank has length {{L = 18 cm}} measured to the nearest centimetre. Write down the error interval for {{L}}.",
          steps: [
            "Rounding unit = {{1 cm}}.",
            "Half of the rounding unit = {{1 / 2 = 0.5 cm}}.",
            "Lower bound = {{18 - 0.5 = 17.5 cm}}; Upper bound = {{18 + 0.5 = 18.5 cm}}.",
            "Write with {{<=}} on the left and strict {{<}} on the right: {{17.5 <= L < 18.5}}.",
          ],
          answer: "{{17.5 <= L < 18.5}}",
          yourTurn: {
            question:
              "A parcel's mass {{m}} is recorded as {{4.6 kg}} correct to 1 decimal place. What is the **lower bound** of {{m}} in kg?",
            answer: { type: "number", value: 4.55, display: "4.55 kg" },
            solution:
              "1 d.p. means rounding unit {{0.1 kg}}. Half of {{0.1}} is {{0.05}}. Lower bound = {{4.6 - 0.05 = 4.55 kg}}.",
          },
        },
        {
          title: "Bounds for significant figures & nearest 10",
          problem:
            "A concert attendance {{N}} is reported as {{30,000}} correct to 1 significant figure. Write down the error interval for {{N}}.",
          steps: [
            "The first significant figure is in the **ten-thousands** column, so the rounding unit is {{10,000}}.",
            "Half of the rounding unit = {{10,000 / 2 = 5,000}}.",
            "Lower bound = {{30,000 - 5,000 = 25,000}}; Upper bound = {{30,000 + 5,000 = 35,000}}.",
            "Error interval: {{25,000 <= N < 35,000}}.",
          ],
          answer: "{{25,000 <= N < 35,000}}",
          yourTurn: {
            question:
              "A track length {{d}} is measured as {{240 m}} to the nearest {{10 m}}. What is the **upper bound** of {{d}} in metres?",
            answer: { type: "number", value: 245, display: "245 m" },
            solution:
              "Nearest {{10 m}} means half-unit = {{5 m}}. Upper bound = {{240 + 5 = 245 m}}.",
          },
        },
      ],
    },
  ],
  learn: {
    flashcards: [
      { front: "Formula for the **arc length** of a sector (angle {{theta}}, radius {{r}})", back: "{{l = (theta/360) * 2pi r}}" },
      { front: "Formula for the **area** of a sector (angle {{theta}}, radius {{r}})", back: "{{A = (theta/360) * pi r^2}}" },
      { front: "Formula for the **total perimeter** of a sector (angle {{theta}}, radius {{r}})", back: "{{P = (theta/360) * 2pi r + 2r}} (curved arc PLUS both straight radii)" },
      { front: "Master formula for the **volume of any prism**", back: "{{V = \"cross-sectional area\" * \"length\"}}" },
      { front: "Volume and total surface area of a **closed cylinder** (radius {{r}}, height {{h}})", back: "{{V = pi r^2 h}} and {{\"Total SA\" = 2pi r^2 + 2pi r h}}" },
      { front: "What shape does the curved surface of a cylinder unroll into?", back: "A **rectangle** of width {{2pi r}} (the circumference) and height {{h}}, so CSA = {{2pi r h}}." },
      { front: "Volume of a **cone** (radius {{r}}, perpendicular height {{h}})", back: "{{V = (1/3) pi r^2 h}}" },
      { front: "Curved surface area and total surface area of a **solid cone** (radius {{r}}, slant height {{l}})", back: "{{\"CSA\" = pi r l}} and {{\"Total SA\" = pi r^2 + pi r l}}, where {{l = sqrt(r^2 + h^2)}}" },
      { front: "How many {{cm^2}} are in {{1 m^2}}?", back: "{{10,000 cm^2}} (because {{100^2 = 10,000}})" },
      { front: "How many {{cm^3}} are in {{1 m^3}}?", back: "{{1,000,000 cm^3}} (because {{100^3 = 1,000,000}})" },
      { front: "How many {{mm^2}} are in {{1 cm^2}}, and how many {{mm^3}} are in {{1 cm^3}}?", back: "{{1 cm^2 = 100 mm^2}} ({{10^2}}) and {{1 cm^3 = 1,000 mm^3}} ({{10^3}})" },
      { front: "How do **litres** and **millilitres** connect to cubic centimetres and cubic metres?", back: "{{1 ml = 1 cm^3}}, {{1 \"litre\" = 1,000 cm^3}}, and {{1 m^3 = 1,000 \"litres\"}}" },
      { front: "How do you write an **error interval** using lower bound (LB) and upper bound (UB)?", back: "{{\"LB\" <= x < \"UB\"}} (inclusive {{<=}} on LB, strict {{<}} on UB)" },
      { front: "What is the error interval for {{x = 7.4}} rounded to 1 decimal place?", back: "{{7.35 <= x < 7.45}} (half of {{0.1}} is {{0.05}})" },
    ],
    mustKnow: [
      "Calculate arc length, sector area, and **total sector perimeter** ({{l + 2r}}) both in terms of {{pi}} and rounded.",
      "Find the volume and surface area of cubes, cuboids, triangular prisms, trapezoidal prisms, and compound prisms.",
      "Derive and apply {{V = pi r^2 h}} and {{\"SA\" = 2pi r^2 + 2pi r h}} (including open-topped cylinders).",
      "Distinguish perpendicular height {{h}} from slant height {{l}} in a cone, using Pythagoras {{l^2 = r^2 + h^2}}.",
      "Calculate cone volume {{(1/3)pi r^2 h}} and cone surface area {{pi r^2 + pi r l}}.",
      "Work backwards from a given volume to find a missing length, height, or radius.",
      "Convert fluently between {{mm^2}}, {{cm^2}}, {{m^2}}, {{km^2}} using squared factors ({{k^2}}).",
      "Convert fluently between {{mm^3}}, {{cm^3}}, {{m^3}}, {{ml}}, and litres using cubed factors ({{k^3}}) and {{1 \"litre\" = 1,000 cm^3}}.",
      "Find lower and upper bounds for measurements rounded to the nearest integer, {{10}}, {{100}}, decimal places, or significant figures.",
      "Write exact error intervals using {{\"LB\" <= x < \"UB\"}} (never writing {{.49}} or {{<=}} on the upper bound).",
    ],
    misconceptions: [
      {
        wrong: "Perimeter of a sector = {{(theta/360) * 2pi r}} (stopping after the arc length).",
        right: "Perimeter of a sector = {{(theta/360) * 2pi r + 2r}}—always add both straight radii to close the shape.",
      },
      {
        wrong: "Since {{1 m = 100 cm}}, {{3 m^2 = 300 cm^2}} and {{3 m^3 = 300 cm^3}}.",
        right: "Square the factor for area and cube it for volume: {{3 m^2 = 3 * 100^2 = 30,000 cm^2}} and {{3 m^3 = 3 * 100^3 = 3,000,000 cm^3}}.",
      },
      {
        wrong: "Using the cone's slant height {{l}} in {{V = (1/3)pi r^2 l}}, or perpendicular height {{h}} in {{\"CSA\" = pi r h}}.",
        right: "Volume ALWAYS uses perpendicular height {{h}} ({{(1/3)pi r^2 h}}); curved surface area ALWAYS uses slant height {{l}} ({{pi r l}}).",
      },
      {
        wrong: "For {{x = 12}} to the nearest integer, writing the error interval as {{11.5 <= x <= 12.49}} or {{11.5 <= x <= 12.5}}.",
        right: "Write {{11.5 <= x < 12.5}}—strict {{<}} at {{12.5}} includes {{12.4999...}} while excluding {{12.5}} itself.",
      },
      {
        wrong: "Adding {{6pi + 12}} to get {{18pi}}.",
        right: "Keep {{6pi + 12}} separate: {{6pi}} is an irrational multiple of {{pi}} and {{12}} is a plain number, so they are unlike terms.",
      },
      {
        wrong: "Forgetting to halve the diameter and plugging {{d}} straight into {{pi r^2}}.",
        right: "Always check if the diagram gives the diameter across the full circle; if so, write {{r = d / 2}} on your first line of working.",
      },
    ],
    examMistakes: [
      "Giving the **arc length** when the question asked for the **perimeter** of a sector or semicircle (missing {{+ 2r}}).",
      "Forgetting the {{1/2}} in triangular cross-sections, or multiplying by the slanted side of a triangle instead of its perpendicular height.",
      "Including two circular lids for an **open-topped** cylinder or water tank (should be {{pi r^2 + 2pi r h}}).",
      "Forgetting the {{1/3}} in cone volume, or forgetting to add the circular base {{pi r^2}} when asked for **total** surface area of a solid cone.",
      "Rounding intermediate values (like {{r^2}} or slant height {{l}}) too early, causing the final answer to be off by {{0.1}}.",
      "Dividing by {{100}} instead of {{10,000}} when converting {{cm^2}} to {{m^2}}, or mixing metres and centimetres in the same volume formula.",
      "Using {{<=}} on both ends of an error interval, or writing {{+ 0.49}} instead of {{+ 0.5}} for the upper bound.",
    ],
    mnemonics: [
      {
        topic: "Sector Perimeter",
        device: "ARC + TWO ARMS",
        explanation: "A sector is a slice of pizza: walk around the curved **arc** plus the **two straight radii (arms)** {{r + r}}.",
      },
      {
        topic: "Cone Height vs Slant",
        device: "High Volume, Slanted Surface",
        explanation: "Perpendicular **H**eight goes into **V**olume ({{(1/3)pi r^2 h}}); **S**lant height {{l}} goes into **S**urface area ({{pi r l}}).",
      },
      {
        topic: "Unit Conversion Powers",
        device: "Power on the Unit = Power on the Factor",
        explanation: "{{cm^1}} uses {{100^1}}, {{cm^2}} uses {{100^2 = 10,000}}, and {{cm^3}} uses {{100^3 = 1,000,000}}.",
      },
    ],
    realWorld: [
      {
        title: "Windscreen wipers & radar sweeps",
        emoji: "🚗",
        detail: "Engineers use sector area {{(theta/360)pi r^2}} (and the difference of two sectors!) to calculate the exact glass area cleared by a wiper blade.",
      },
      {
        title: "Packaging & soup-can optimisation",
        emoji: "🥫",
        detail: "Drink and food factories minimise aluminium surface area {{2pi r^2 + 2pi r h}} for a fixed volume {{330 ml = 330 cm^3}} to cut metal cost and waste.",
      },
      {
        title: "Aquarium & swimming pool capacity",
        emoji: "🐠",
        detail: "Planners convert prism volumes from {{cm^3}} or {{m^3}} into litres ({{1 m^3 = 1,000 \"litres\"}}) to size filters, pumps, and floor loads safely.",
      },
      {
        title: "CNC machining & aerospace tolerances",
        emoji: "✈️",
        detail: "Every jet engine bolt has a strict error interval (e.g. {{12.45 <= d < 12.55 mm}}): too wide and it jams; too narrow and it rattles loose.",
      },
      {
        title: "Ice-cream cones & architectural domes",
        emoji: "🍦",
        detail: "Sheet-metal fabricators cut flat circular sectors of radius {{l}} and roll them into conical funnels, roofs, and loudspeakers using {{\"CSA\" = pi r l}}.",
      },
    ],
    videos: [
      {
        title: "Arc Length and Area of a Sector (GCSE / Year 9 Maths)",
        channel: "Corbettmaths",
        url: "https://www.youtube.com/results?search_query=Corbettmaths+arc+length+area+of+a+sector",
      },
      {
        title: "Volume and Surface Area of Prisms and Cylinders",
        channel: "GCSE Maths Tutor",
        url: "https://www.youtube.com/results?search_query=GCSE+Maths+Tutor+volume+surface+area+prisms+cylinders",
      },
      {
        title: "Volume and Surface Area of Cones",
        channel: "Corbettmaths",
        url: "https://www.youtube.com/results?search_query=Corbettmaths+volume+surface+area+of+a+cone",
      },
      {
        title: "Converting Units of Area and Volume & Error Intervals",
        channel: "Cognito Maths",
        url: "https://www.youtube.com/results?search_query=Cognito+Maths+converting+area+volume+units+error+intervals",
      },
    ],
    formulas: [
      { name: "Arc Length", formula: "{{l = (theta/360) * 2pi r}}", note: "Curved edge of a sector only" },
      { name: "Sector Area", formula: "{{A = (theta/360) * pi r^2}}", note: "Fraction of full circle area" },
      { name: "Sector Perimeter", formula: "{{P = (theta/360) * 2pi r + 2r}}", note: "Always add both straight radii" },
      { name: "Volume of Any Prism", formula: "{{V = \"cross-sectional area\" * \"length\"}}", note: "Works for cuboids, triangular & compound prisms" },
      { name: "Volume of a Cylinder", formula: "{{V = pi r^2 h}}", note: "Circular cross-section × height" },
      { name: "Total Surface Area of a Closed Cylinder", formula: "{{A = 2pi r^2 + 2pi r h}}", note: "Use {{pi r^2 + 2pi r h}} if open-topped" },
      { name: "Volume of a Cone", formula: "{{V = (1/3) pi r^2 h}}", note: "Uses perpendicular height {{h}}" },
      { name: "Total Surface Area of a Solid Cone", formula: "{{A = pi r^2 + pi r l}}", note: "Slant height {{l = sqrt(r^2 + h^2)}}" },
      { name: "Area & Volume Metric Conversions", formula: "{{1 m^2 = 10,000 cm^2}}, {{1 m^3 = 1,000,000 cm^3}}", note: "{{1 cm^2 = 100 mm^2}}, {{1 \"litre\" = 1,000 cm^3}}" },
      { name: "Error Interval (Rounding)", formula: "{{\"LB\" <= x < \"UB\"}}", note: "{{LB = x - u/2}}, {{UB = x + u/2}} for rounding unit {{u}}" },
    ],
  },
};
