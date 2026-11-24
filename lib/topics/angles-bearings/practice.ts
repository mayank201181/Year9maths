import type { TopicPractice } from "../../types.ts";

const SVG_ZIGZAG =
  '<svg viewBox="0 0 400 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Zig-zag path P to E to Q between parallel lines AB and CD with upper angle 32 degrees and lower angle 44 degrees">' +
  '<rect x="0" y="0" width="400" height="230" rx="10" fill="var(--surface)"/>' +
  '<line x1="36" y1="50" x2="364" y2="50" stroke="var(--ink)" stroke-width="2.5"/>' +
  '<line x1="36" y1="185" x2="364" y2="185" stroke="var(--ink)" stroke-width="2.5"/>' +
  '<polyline points="72,44 82,50 72,56" fill="none" stroke="var(--ink)" stroke-width="2"/>' +
  '<polyline points="72,179 82,185 72,191" fill="none" stroke="var(--ink)" stroke-width="2"/>' +
  '<text x="44" y="42" font-size="11.5" font-weight="800" fill="var(--ink)">A</text>' +
  '<text x="352" y="42" font-size="11.5" font-weight="800" fill="var(--ink)">B</text>' +
  '<text x="44" y="204" font-size="11.5" font-weight="800" fill="var(--ink)">C</text>' +
  '<text x="352" y="204" font-size="11.5" font-weight="800" fill="var(--ink)">D</text>' +
  '<polyline points="136,50 240,115 167.5,185" fill="none" stroke="var(--brand)" stroke-width="3"/>' +
  '<path d="M 136,50 L 176,50 A 40,40 0 0 1 170,71 Z" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.8"/>' +
  '<path d="M 167.5,185 L 207.5,185 A 40,40 0 0 0 196.3,157.2 Z" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.8"/>' +
  '<path d="M 240,115 L 210,96.3 A 35,35 0 0 0 214.8,139.3 Z" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.8"/>' +
  '<circle cx="136" cy="50" r="4" fill="var(--ink)"/>' +
  '<circle cx="240" cy="115" r="4.5" fill="var(--brand)"/>' +
  '<circle cx="167.5" cy="185" r="4" fill="var(--ink)"/>' +
  '<text x="132" y="40" font-size="11.5" font-weight="800" fill="var(--ink)">P</text>' +
  '<text x="252" y="119" font-size="12" font-weight="800" fill="var(--brand)">E</text>' +
  '<text x="163" y="204" font-size="11.5" font-weight="800" fill="var(--ink)">Q</text>' +
  '<text x="184" y="70" font-size="11.5" font-weight="800" fill="var(--good)">32°</text>' +
  '<text x="210" y="176" font-size="11.5" font-weight="800" fill="var(--bad)">44°</text>' +
  '<text x="195" y="121" font-size="12.5" font-weight="800" fill="var(--brand)">x</text>' +
  '</svg>';

const SVG_BEARING_BACK =
  '<svg viewBox="0 0 380 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parallel North arrows at A and B with the bearing of A from B marked as 242 degrees">' +
  '<rect x="0" y="0" width="380" height="230" rx="10" fill="var(--surface)"/>' +
  '<line x1="108" y1="205" x2="108" y2="54" stroke="var(--ink)" stroke-width="2.2"/>' +
  '<polygon points="108,44 103,56 113,56" fill="var(--ink)"/>' +
  '<text x="108" y="38" font-size="12" font-weight="800" text-anchor="middle" fill="var(--ink)">N</text>' +
  '<line x1="252" y1="185" x2="252" y2="28" stroke="var(--ink)" stroke-width="2.2"/>' +
  '<polygon points="252,18 247,30 257,30" fill="var(--ink)"/>' +
  '<text x="252" y="13" font-size="12" font-weight="800" text-anchor="middle" fill="var(--ink)">N</text>' +
  '<line x1="108" y1="172" x2="252" y2="95" stroke="var(--brand)" stroke-width="3"/>' +
  '<path d="M 252,55 A 40,40 0 1 1 216.7,113.8" fill="none" stroke="var(--bad)" stroke-width="2.8"/>' +
  '<path d="M 108,138 A 34,34 0 0 1 138,156" fill="none" stroke="var(--brand)" stroke-width="2.4" stroke-dasharray="4 3"/>' +
  '<circle cx="108" cy="172" r="5" fill="var(--ink)"/>' +
  '<circle cx="252" cy="95" r="5" fill="var(--ink)"/>' +
  '<text x="92" y="179" font-size="13" font-weight="800" fill="var(--ink)">A</text>' +
  '<text x="262" y="92" font-size="13" font-weight="800" fill="var(--ink)">B</text>' +
  '<text x="296" y="138" font-size="12" font-weight="800" fill="var(--bad)">242°</text>' +
  '<text x="130" y="138" font-size="12" font-weight="800" fill="var(--brand)">?</text>' +
  '</svg>';

const SVG_PENT_HEX =
  '<svg viewBox="0 0 400 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A regular pentagon and a regular hexagon sharing one vertical edge with angle x marked between their adjacent top sides">' +
  '<rect x="0" y="0" width="400" height="230" rx="10" fill="var(--surface)"/>' +
  '<polygon points="195,75 118.9,50.3 71.9,115 118.9,179.7 195,155" fill="var(--brand-soft)" opacity="0.65" stroke="var(--brand)" stroke-width="2.6"/>' +
  '<polygon points="195,75 264.3,35 333.6,75 333.6,155 264.3,195 195,155" fill="var(--good-soft)" opacity="0.65" stroke="var(--good)" stroke-width="2.6"/>' +
  '<line x1="195" y1="75" x2="195" y2="155" stroke="var(--ink)" stroke-width="2.8"/>' +
  '<path d="M 195,75 L 164.6,65.1 A 32,32 0 0 1 222.7,59 Z" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="2"/>' +
  '<text x="193" y="45" font-size="13" font-weight="800" text-anchor="middle" fill="var(--bad)">x</text>' +
  '<text x="132" y="119" font-size="11.5" font-weight="800" text-anchor="middle" fill="var(--brand)">Regular</text>' +
  '<text x="132" y="134" font-size="11.5" font-weight="800" text-anchor="middle" fill="var(--brand)">Pentagon</text>' +
  '<text x="264" y="119" font-size="11.5" font-weight="800" text-anchor="middle" fill="var(--good)">Regular</text>' +
  '<text x="264" y="134" font-size="11.5" font-weight="800" text-anchor="middle" fill="var(--good)">Hexagon</text>' +
  '</svg>';

export const practice: TopicPractice = {
  quiz: [
    {
      id: "angles-bearings-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "parallel-lines-angles",
      question: "Two parallel lines are cut by a transversal. One interior angle is {{114°}}. Find the size of its **co-interior** angle (in degrees).",
      answer: { type: "number", value: 66, display: "66°" },
      hints: ["Co-interior angles between parallel lines sum to {{180°}}."],
      traps: [
        { spec: { type: "number", value: 114 }, feedback: "Co-interior angles are NOT equal — they add up to 180°!" },
      ],
      solution: ["Co-interior angles sum to {{180°}}: {{180° - 114° = 66°}}."],
    },
    {
      id: "angles-bearings-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "parallel-lines-angles",
      question: "Which statement is always true about **corresponding angles** formed by a transversal crossing two parallel lines?",
      options: [
        "They always add up to 90°",
        "They always add up to 180°",
        "They are always equal in size",
        "They always add up to 360°",
      ],
      answerIndex: 2,
      hints: [
        "Corresponding angles sit in matching corners at each crossing.",
        "Think of translating one crossing onto the other.",
      ],
      explanation:
        "Corresponding angles on parallel lines are always equal in size. Co-interior angles sum to {{180°}}.",
    },
    {
      id: "angles-bearings-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "parallel-lines-angles",
      question: "Two **alternate** angles on parallel lines measure {{(3x + 5)°}} and {{74°}}. Find the value of {{x}}.",
      answer: { type: "number", value: 23, display: "23" },
      hints: [
        "Alternate angles on parallel lines are equal.",
        "Solve {{3x + 5 = 74}}.",
      ],
      solution: ["{{3x + 5 = 74}} → {{3x = 69}} → {{x = 23}}."],
    },
    {
      id: "angles-bearings-quiz-q04",
      kind: "short",
      difficulty: "warmup",
      guideRef: "polygon-angles",
      question: "Calculate the sum of the **interior angles** of a heptagon ({{7}} sides), in degrees.",
      answer: { type: "number", value: 900, display: "900°" },
      hints: ["Use {{(n - 2) * 180°}} with {{n = 7}}."],
      traps: [
        { spec: { type: "number", value: 1260 }, feedback: "Remember to subtract 2 first: (7 − 2) × 180°, not 7 × 180°!" },
      ],
      solution: ["Interior sum {{= (7 - 2) * 180° = 5 * 180° = 900°}}."],
    },
    {
      id: "angles-bearings-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "polygon-angles",
      question: "Find the size of ONE **exterior angle** of a regular {{12}}-sided polygon (in degrees).",
      answer: { type: "number", value: 30, display: "30°" },
      hints: [
        "All {{12}} exterior angles are equal and sum to {{360°}}.",
        "Compute {{360° / 12}}.",
      ],
      solution: ["Exterior angle {{= 360° / 12 = 30°}}."],
    },
    {
      id: "angles-bearings-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "polygon-angles",
      question: "Calculate the size of ONE **interior angle** of a regular octagon ({{8}} sides), in degrees.",
      answer: { type: "number", value: 135, display: "135°" },
      hints: [
        "Find one exterior angle first: {{360° / 8 = 45°}}.",
        "Subtract from {{180°}}.",
      ],
      solution: ["Exterior angle {{= 360° / 8 = 45°}}.", "Interior angle {{= 180° - 45° = 135°}}."],
    },
    {
      id: "angles-bearings-quiz-q07",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "three-figure-bearings",
      question: "What is the three-figure bearing for **North-West (NW)**?",
      options: ["045°", "135°", "225°", "315°"],
      answerIndex: 3,
      hints: [
        "West is {{270°}} and North is {{360°}}.",
        "North-West sits halfway between {{270°}} and {{360°}}.",
      ],
      explanation:
        "Turning {{45°}} clockwise past West ({{270°}}) gives {{270° + 45° = 315°}}.",
    },
    {
      id: "angles-bearings-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "three-figure-bearings",
      question: "A yacht sails at an angle of {{36°}} clockwise from North. Write this direction as a **three-figure bearing**.",
      answer: { type: "text", accept: ["036", "036°", "036 degrees"], display: "036°" },
      hints: [
        "Every bearing under {{100°}} must start with a leading zero.",
        "Write three digits followed by °.",
      ],
      traps: [
        { spec: { type: "text", accept: ["36", "36°", "36 degrees"] }, feedback: "Don't forget the leading zero! Three-figure bearings under 100° must be written with 3 digits: 036°." },
      ],
      solution: ["Pad {{36°}} with a leading zero to make three figures: **{{036°}}**."],
    },
    {
      id: "angles-bearings-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "back-bearings-angle-rules",
      question: "The bearing of {{B}} from {{A}} is {{084°}}. Write the three-figure bearing of {{A}} from {{B}}.",
      answer: { type: "text", accept: ["264", "264°", "264 degrees"], display: "264°" },
      hints: [
        "Because {{084° < 180°}}, add {{180°}} to get the back bearing.",
        "Calculate {{84 + 180}}.",
      ],
      solution: ["Back bearing {{= 084° + 180° = 264°}}."],
    },
    {
      id: "angles-bearings-quiz-q10",
      kind: "short",
      difficulty: "core",
      guideRef: "back-bearings-angle-rules",
      question: "The bearing of {{Q}} from {{P}} is {{227°}}. Write the three-figure bearing of {{P}} from {{Q}}.",
      answer: { type: "text", accept: ["047", "047°", "047 degrees"], display: "047°" },
      hints: [
        "Because {{227° >= 180°}}, subtract {{180°}}.",
        "Write the result with three digits (include the leading zero!).",
      ],
      traps: [
        { spec: { type: "text", accept: ["47", "47°", "47 degrees"] }, feedback: "Remember the three-figure rule — write 047° with a leading zero!" },
      ],
      solution: ["{{227° - 180° = 47°}}, written as a three-figure bearing: **{{047°}}**."],
    },
  ],
  papers: [
    {
      id: "angles-bearings-p1",
      title: "Practice Paper 1 — Parallel Lines, Polygons & Core Bearings",
      questions: [
        {
          id: "angles-bearings-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "parallel-lines-angles",
          question: "Two parallel lines are cut by a transversal. One interior angle measures {{58°}}. Find the size of its **co-interior** angle (in degrees).",
          answer: { type: "number", value: 122, display: "122°" },
          hints: ["Co-interior angles sum to {{180°}}."],
          solution: ["{{180° - 58° = 122°}}."],
        },
        {
          id: "angles-bearings-p1-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "parallel-lines-angles",
          question: "Two co-interior angles between parallel lines measure {{(2x + 12)°}} and {{(4x - 12)°}}. Find the value of {{x}}.",
          answer: { type: "number", value: 30, display: "30" },
          hints: [
            "Set the sum of the two co-interior angles equal to {{180°}}.",
            "Simplify {{(2x + 12) + (4x - 12) = 180}}.",
          ],
          solution: ["{{2x + 12 + 4x - 12 = 180}} → {{6x = 180}} → {{x = 30}} (angles are {{72°}} and {{108°}})."],
        },
        {
          id: "angles-bearings-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "parallel-lines-angles",
          question: "Two **corresponding** angles on parallel lines measure {{(5x - 8)°}} and {{(3x + 26)°}}. Calculate the size of **each angle** in degrees.",
          answer: { type: "number", value: 77, display: "77°" },
          hints: [
            "Corresponding angles are equal: solve {{5x - 8 = 3x + 26}} to find {{x}} first.",
            "Don't stop at {{x}} — substitute {{x}} back into {{5x - 8}} to get the angle size!",
          ],
          traps: [
            { spec: { type: "number", value: 17 }, feedback: "17 is the value of x — substitute x = 17 back into 5x − 8 to find the angle size!" },
          ],
          solution: [
            "{{5x - 8 = 3x + 26}} → {{2x = 34}} → {{x = 17}}.",
            "Angle size {{= 5(17) - 8 = 85 - 8 = 77°}} (check: {{3(17) + 26 = 77°}} ✓).",
          ],
        },
        {
          id: "angles-bearings-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "parallel-lines-angles",
          diagram: SVG_ZIGZAG,
          question: "In the diagram, {{AB}} is parallel to {{CD}}. Calculate the size of angle {{x}} ({{∠PEQ}}) in degrees.",
          answer: { type: "number", value: 76, display: "76°" },
          hints: [
            "Draw a dashed helper line through {{E}} parallel to both {{AB}} and {{CD}}.",
            "Use alternate angles on parallel lines to split {{x}} into {{32°}} and {{44°}}.",
          ],
          solution: [
            "Draw a line through {{E}} parallel to {{AB}} and {{CD}}.",
            "By alternate angles, the upper part of {{x}} is {{32°}} and the lower part is {{44°}}.",
            "{{x = 32° + 44° = 76°}}.",
          ],
        },
        {
          id: "angles-bearings-p1-q05",
          kind: "written",
          difficulty: "core",
          guideRef: "parallel-lines-angles",
          marks: 3,
          question: "Two straight lines {{PQ}} and {{RS}} are cut by a transversal. On the same side between the two lines, the two angles measure {{118°}} and {{64°}}. Determine whether {{PQ}} and {{RS}} are parallel, justifying your answer with an exact angle fact.",
          hints: [
            "Add the two interior angles on the same side of the transversal.",
            "Recall what co-interior angles MUST add up to if lines are parallel.",
            "State your final conclusion clearly.",
          ],
          modelAnswer:
            "Adding the two angles gives 118° + 64° = 182°. If the lines were parallel, co-interior (allied) angles would have to sum to exactly 180°. Because 182° is not equal to 180°, the lines PQ and RS are not parallel.",
          markScheme: [
            { point: "Add the two angles correctly: 118° + 64° = 182°", keywords: ["182", "118 + 64"] },
            { point: "State the co-interior (allied) angle rule: must sum to 180°", keywords: ["co-interior", "cointerior", "allied", "180"] },
            { point: "Conclude the lines are NOT parallel", keywords: ["not parallel", "aren't parallel", "not equal to 180", "do not add to 180"] },
          ],
        },
        {
          id: "angles-bearings-p1-q06",
          kind: "short",
          difficulty: "warmup",
          guideRef: "polygon-angles",
          question: "Calculate the sum of the interior angles of a {{10}}-sided polygon (decagon), in degrees.",
          answer: { type: "number", value: 1440, display: "1440°" },
          hints: ["Use {{(n - 2) * 180°}} with {{n = 10}}."],
          solution: ["{{(10 - 2) * 180° = 8 * 180° = 1440°}}."],
        },
        {
          id: "angles-bearings-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "polygon-angles",
          question: "Each interior angle of a regular polygon is {{160°}}. How many sides does the polygon have?",
          answer: { type: "number", value: 18, display: "18" },
          hints: [
            "Find one exterior angle first: {{180° - 160° = 20°}}.",
            "Divide {{360°}} by the exterior angle.",
          ],
          solution: ["Exterior angle {{= 180° - 160° = 20°}}.", "{{n = 360° / 20° = 18}} sides."],
        },
        {
          id: "angles-bearings-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "polygon-angles",
          question: "Five interior angles of an irregular hexagon are {{110°}}, {{128°}}, {{135°}}, {{97°}}, and {{124°}}. Find the sixth interior angle (in degrees).",
          answer: { type: "number", value: 126, display: "126°" },
          hints: [
            "Interior angle sum of a hexagon {{= (6 - 2) * 180° = 720°}}.",
            "Add the five given angles and subtract from {{720°}}.",
          ],
          solution: [
            "Hexagon interior sum {{= 720°}}.",
            "Known sum {{= 110 + 128 + 135 + 97 + 124 = 594°}}.",
            "Sixth angle {{= 720° - 594° = 126°}}.",
          ],
        },
        {
          id: "angles-bearings-p1-q09",
          kind: "written",
          difficulty: "core",
          guideRef: "polygon-angles",
          marks: 3,
          question: "A student claims to have drawn a regular polygon where every interior angle measures {{130°}}. Prove mathematically why this is impossible.",
          hints: [
            "Calculate the corresponding exterior angle ({{180° - 130°}}).",
            "Test whether that exterior angle divides {{360°}} cleanly.",
            "Explain why a decimal value of {{n}} cannot form a polygon.",
          ],
          modelAnswer:
            "If each interior angle is 130°, then each exterior angle must be 180° − 130° = 50°. Dividing 360° by 50° gives n = 360/50 = 7.2 sides. Because the number of sides n must be a whole number (integer), such a regular polygon is impossible.",
          markScheme: [
            { point: "Find the exterior angle as 180° − 130° = 50°", keywords: ["50", "exterior"] },
            { point: "Compute 360 ÷ 50 = 7.2 (or show 50 does not divide 360)", keywords: ["7.2", "360/50", "360 ÷ 50", "360 / 50", "not divide"] },
            { point: "State that the number of sides must be a whole number / integer", keywords: ["whole number", "integer", "not a whole", "not an integer"] },
          ],
        },
        {
          id: "angles-bearings-p1-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "three-figure-bearings",
          question: "Lighthouse {{L}} lies {{40°}} **north of due West** as viewed from Port {{P}}. What is the three-figure bearing of {{L}} from {{P}}?",
          options: ["310°", "230°", "050°", "320°"],
          answerIndex: 0,
          hints: [
            "Due West is {{270°}}.",
            "Moving north from West turns **clockwise** toward {{360°}}, so add {{40°}} to {{270°}}.",
          ],
          explanation:
            "West is {{270°}}, and turning {{40°}} clockwise toward North gives {{270° + 40° = 310°}}. Subtracting {{40°}} gives {{230°}} (south of West).",
        },
        {
          id: "angles-bearings-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "three-figure-bearings",
          question: "Ship {{S}} lies {{22°}} **north of due East** as seen from Harbour {{H}}. Write the three-figure bearing of {{S}} from {{H}}.",
          answer: { type: "text", accept: ["068", "068°", "068 degrees"], display: "068°" },
          hints: [
            "Due East is {{090°}}.",
            "Moving {{22°}} north of East subtracts {{22°}} from {{90°}} — don't forget the leading zero!",
          ],
          traps: [
            { spec: { type: "text", accept: ["68", "68°", "68 degrees"] }, feedback: "Three-figure bearings under 100° must include the leading zero — write 068°!" },
            { spec: { type: "text", accept: ["112", "112°", "112 degrees"] }, feedback: "112° is south of East (90° + 22°); north of East is 90° − 22° = 068°." },
          ],
          solution: ["Due East is {{090°}}. Moving {{22°}} north gives {{90° - 22° = 68°}} → write as **{{068°}}**."],
        },
        {
          id: "angles-bearings-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "three-figure-bearings",
          question: "On a map with scale {{1}} cm represents {{8}} km, two towns are {{5.5}} cm apart. Find the actual distance between the towns in km.",
          answer: { type: "number", value: 44, display: "44 km" },
          hints: [
            "Multiply the map distance ({{5.5}} cm) by {{8}} km/cm.",
            "Split {{5.5 * 8}} into {{5 * 8 + 0.5 * 8}}.",
          ],
          solution: ["Actual distance {{= 5.5 * 8 = 44}} km."],
        },
        {
          id: "angles-bearings-p1-q13",
          kind: "short",
          difficulty: "core",
          guideRef: "back-bearings-angle-rules",
          question: "The bearing of Peak {{B}} from Camp {{A}} is {{128°}}. Write the three-figure bearing of {{A}} from {{B}}.",
          answer: { type: "text", accept: ["308", "308°", "308 degrees"], display: "308°" },
          hints: [
            "Since {{128° < 180°}}, add {{180°}}.",
            "Compute {{128 + 180}}.",
          ],
          solution: ["Back bearing {{= 128° + 180° = 308°}}."],
        },
        {
          id: "angles-bearings-p1-q14",
          kind: "mcq",
          difficulty: "core",
          guideRef: "back-bearings-angle-rules",
          question: "The bearing of Island {{Y}} from Island {{X}} is {{263°}}. What is the three-figure bearing of {{X}} from {{Y}}?",
          options: ["097°", "083°", "173°", "443°"],
          answerIndex: 1,
          hints: [
            "Since {{263° >= 180°}}, subtract {{180°}}.",
            "Pad the result with a leading zero so it has three digits.",
          ],
          explanation:
            "{{263° - 180° = 83°}}, written as a three-figure bearing: **{{083°}}**.",
        },
        {
          id: "angles-bearings-p1-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "back-bearings-angle-rules",
          marks: 3,
          question: "Explain step by step using parallel North lines (not just the {{±180°}} shortcut) why a bearing of {{055°}} from Town {{A}} to Town {{B}} gives a back bearing of {{235°}} from Town {{B}} to Town {{A}}.",
          hints: [
            "Find the co-interior angle at {{B}} between the North line and segment {{BA}}.",
            "Use angles around a point at {{B}} ({{360°}}) to find the clockwise bearing.",
            "Show the subtraction explicitly.",
          ],
          modelAnswer:
            "Because both North arrows point straight North they are parallel, so the co-interior angle at B between North and BA is 180° − 55° = 125°. Angles around a point sum to 360°, so turning clockwise from North at B all the way round to BA gives 360 − 125 = 235°.",
          markScheme: [
            { point: "Find the co-interior angle at B as 180° − 55° = 125°", keywords: ["125", "co-interior", "allied"] },
            { point: "State angles around a point sum to 360° (full turn)", keywords: ["360", "around a point", "full turn"] },
            { point: "Compute 360° − 125° = 235° (or alternate 55° + 180°)", keywords: ["360 - 125", "360 − 125", "alternate", "180 + 55"] },
          ],
        },
      ],
    },
    {
      id: "angles-bearings-p2",
      title: "Practice Paper 2 — Reasoning, Polygons & Multi-Leg Bearings",
      questions: [
        {
          id: "angles-bearings-p2-q01",
          kind: "short",
          difficulty: "core",
          guideRef: "parallel-lines-angles",
          question: "Two co-interior angles between parallel lines are in the ratio {{3 : 7}}. Calculate the **larger** angle in degrees.",
          answer: { type: "number", value: 126, display: "126°" },
          hints: [
            "Co-interior angles sum to {{180°}}.",
            "Divide {{180°}} by {{3 + 7 = 10}} parts, then multiply by {{7}}.",
          ],
          traps: [
            { spec: { type: "number", value: 54 }, feedback: "54° is the smaller angle (3 parts) — the question asks for the LARGER angle (7 parts)!" },
          ],
          solution: ["Total parts {{= 3 + 7 = 10}}, so {{1}} part {{= 180° / 10 = 18°}}.", "Larger angle {{= 7 * 18° = 126°}}."],
        },
        {
          id: "angles-bearings-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "parallel-lines-angles",
          question: "Two parallel lines are cut by a transversal. An angle measures {{(4x + 28)°}} and its **alternate** angle measures {{(6x - 16)°}}. Find the value of {{x}}.",
          answer: { type: "number", value: 22, display: "22" },
          hints: [
            "Alternate angles on parallel lines are equal.",
            "Solve {{4x + 28 = 6x - 16}}.",
          ],
          solution: ["{{4x + 28 = 6x - 16}} → {{44 = 2x}} → {{x = 22}} (both angles measure {{116°}})."],
        },
        {
          id: "angles-bearings-p2-q03",
          kind: "mcq",
          difficulty: "core",
          guideRef: "parallel-lines-angles",
          question: "In trapezium {{PQRS}}, side {{PQ}} is parallel to side {{SR}}. Given {{∠PSR = 72°}} and {{∠QRS = 115°}}, find {{∠QPS}} and {{∠PQR}} respectively.",
          options: ["72° and 115°", "115° and 72°", "108° and 65°", "65° and 108°"],
          answerIndex: 2,
          hints: [
            "Pair each base angle with the angle directly above it between the parallel sides {{PQ}} and {{SR}}.",
            "{{∠QPS}} is co-interior with {{∠PSR = 72°}}, and {{∠PQR}} is co-interior with {{∠QRS = 115°}}.",
          ],
          explanation:
            "Co-interior angles between {{PQ ∥ SR}} sum to {{180°}}: {{∠QPS = 180° - 72° = 108°}} and {{∠PQR = 180° - 115° = 65°}} (check quadrilateral sum: {{72 + 115 + 108 + 65 = 360°}} ✓).",
        },
        {
          id: "angles-bearings-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "polygon-angles",
          question: "The sum of the interior angles of a polygon is {{1980°}}. How many sides does the polygon have?",
          answer: { type: "number", value: 13, display: "13" },
          hints: [
            "Set {{(n - 2) * 180 = 1980}}.",
            "Divide {{1980}} by {{180}} to find {{n - 2}}, then add {{2}}.",
          ],
          traps: [
            { spec: { type: "number", value: 11 }, feedback: "11 is n − 2 (the number of triangles) — don't forget to add 2 to get n = 13!" },
          ],
          solution: ["{{n - 2 = 1980 / 180 = 11}} → {{n = 13}} sides."],
        },
        {
          id: "angles-bearings-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "polygon-angles",
          question: "Calculate the size of ONE interior angle of a regular {{15}}-sided polygon (in degrees).",
          answer: { type: "number", value: 156, display: "156°" },
          hints: [
            "Find one exterior angle first: {{360° / 15 = 24°}}.",
            "Subtract from {{180°}}.",
          ],
          solution: ["Exterior angle {{= 360° / 15 = 24°}}.", "Interior angle {{= 180° - 24° = 156°}}."],
        },
        {
          id: "angles-bearings-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "polygon-angles",
          question: "The five interior angles of an irregular pentagon are {{x}}, {{x + 10°}}, {{x + 20°}}, {{x + 30°}}, and {{x + 40°}}. Find the value of {{x}} in degrees.",
          answer: { type: "number", value: 88, display: "88°" },
          hints: [
            "A pentagon's interior angles sum to {{(5 - 2) * 180° = 540°}}.",
            "Collect terms to solve {{5x + 100 = 540}}.",
          ],
          solution: ["{{5x + 100 = 540}} → {{5x = 440}} → {{x = 88°}}."],
        },
        {
          id: "angles-bearings-p2-q07",
          kind: "written",
          difficulty: "core",
          guideRef: "polygon-angles",
          marks: 3,
          question: "Prove mathematically that regular pentagons alone cannot tile (tessellate) a flat floor without overlaps or empty spaces, using interior angles and angles around a point.",
          hints: [
            "Find one interior angle of a regular pentagon.",
            "What must the angles meeting at a shared tiling vertex add up to?",
            "Test whether the interior angle divides {{360°}} evenly.",
          ],
          modelAnswer:
            "A regular pentagon has exterior angle 360° / 5 = 72°, so each interior angle is 180° − 72° = 108°. For tiles to fit around a vertex with no overlaps, their interior angles must sum to 360°. Since 108 does not divide 360 evenly (3 × 108° = 324°, leaving a 36° remainder, and 360 / 108 = 3.33…), regular pentagons cannot tessellate alone.",
          markScheme: [
            { point: "Calculate one interior angle of a regular pentagon as 108°", keywords: ["108"] },
            { point: "State angles around a point must sum to 360°", keywords: ["360"] },
            { point: "Show 108 does not divide 360 evenly (324° / 36° remainder / 3.33)", keywords: ["does not divide", "not a factor", "324", "36°", "36 degrees", "3.33", "remainder"] },
          ],
        },
        {
          id: "angles-bearings-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "three-figure-bearings",
          question: "A radio mast lies {{15°}} **west of due North** as seen from a lighthouse. Write the three-figure bearing of the mast from the lighthouse.",
          answer: { type: "text", accept: ["345", "345°", "345 degrees"], display: "345°" },
          hints: [
            "West of North means turning **anticlockwise** from North.",
            "Subtract {{15°}} from {{360°}} to get the clockwise bearing.",
          ],
          solution: ["{{360° - 15° = 345°}}."],
        },
        {
          id: "angles-bearings-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "three-figure-bearings",
          question: "A hiker walks on a bearing of {{025°}}, then turns {{110°}} **anticlockwise**. Write the hiker's new three-figure bearing.",
          answer: { type: "text", accept: ["275", "275°", "275 degrees"], display: "275°" },
          hints: [
            "Anticlockwise decreases the bearing: {{25° - 110° = -85°}}.",
            "Add {{360°}} to wrap back into {{000°–359°}}.",
          ],
          traps: [
            { spec: { type: "text", accept: ["135", "135°", "135 degrees"] }, feedback: "135° turns clockwise (25° + 110°); turning anticlockwise subtracts 110°!" },
          ],
          solution: ["{{025° - 110° = -85°}}; add {{360°}}: {{360° - 85° = 275°}}."],
        },
        {
          id: "angles-bearings-p2-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "three-figure-bearings",
          question: "A map has scale {{1}} cm represents {{0.5}} km. Two beacons are {{9}} km apart in real life. How many centimetres apart are they on the map?",
          options: ["4.5 cm", "9 cm", "15 cm", "18 cm"],
          answerIndex: 3,
          hints: [
            "Every {{1}} km corresponds to {{2}} cm on the map.",
            "Compute {{9 / 0.5}}.",
          ],
          explanation:
            "At {{1}} cm = {{0.5}} km, {{9}} km scales to {{9 / 0.5 = 18}} cm. Multiplying {{9 * 0.5 = 4.5}} goes in the wrong direction.",
        },
        {
          id: "angles-bearings-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "back-bearings-angle-rules",
          diagram: SVG_BEARING_BACK,
          question: "The diagram shows that the bearing of {{A}} from {{B}} is {{242°}}. Write the three-figure bearing of {{B}} from {{A}}.",
          answer: { type: "text", accept: ["062", "062°", "062 degrees"], display: "062°" },
          hints: [
            "Because {{242° >= 180°}}, subtract {{180°}}.",
            "Include the leading zero so your bearing has three digits!",
          ],
          traps: [
            { spec: { type: "text", accept: ["62", "62°", "62 degrees"] }, feedback: "Don't drop the leading zero — write three-figure bearings under 100° as 062°!" },
          ],
          solution: ["{{242° - 180° = 62°}}, written with three digits as **{{062°}}**."],
        },
        {
          id: "angles-bearings-p2-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "back-bearings-angle-rules",
          question: "A ferry sails from {{A}} to {{B}} on bearing {{072°}}, then turns at {{B}} to sail to {{C}} on bearing {{158°}}. Calculate the interior angle {{∠ABC}} in degrees.",
          answer: { type: "number", value: 94, display: "94°" },
          hints: [
            "Find the back bearing of {{A}} from {{B}}: {{072° + 180° = 252°}}.",
            "Subtract the bearing of {{C}} from {{B}} ({{158°}}) from {{252°}}.",
          ],
          solution: [
            "Back bearing of {{A}} from {{B}} {{= 072° + 180° = 252°}}.",
            "{{∠ABC = 252° - 158° = 94°}} (check via co-interior: {{360° - 108° - 158° = 94°}} ✓).",
          ],
        },
        {
          id: "angles-bearings-p2-q13",
          kind: "short",
          difficulty: "challenge",
          guideRef: "back-bearings-angle-rules",
          question: "From Port {{P}}, Boat {{A}} is on bearing {{054°}} and Boat {{B}} is on bearing {{126°}}, and both boats are the exact same distance from {{P}} ({{PA = PB}}). Find the three-figure bearing of {{B}} from {{A}}.",
          answer: { type: "text", accept: ["180", "180°", "180 degrees"], display: "180°" },
          hints: [
            "First find {{∠APB = 126° - 54° = 72°}}.",
            "Since {{PA = PB}}, {{△PAB}} is isosceles with base angle {{∠PAB = (180° - 72°) / 2 = 54°}}.",
            "Find the back bearing of {{P}} from {{A}} ({{234°}}) and turn {{54°}} anticlockwise to face {{B}}!",
          ],
          solution: [
            "{{∠APB = 126° - 54° = 72°}}. Since {{PA = PB}}, {{∠PAB = (180° - 72°) / 2 = 54°}}.",
            "Back bearing of {{P}} from {{A}} {{= 054° + 180° = 234°}}.",
            "Bearing of {{B}} from {{A}} {{= 234° - 54° = 180°}} (due South!).",
          ],
        },
        {
          id: "angles-bearings-p2-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "parallel-lines-angles",
          marks: 3,
          question: "In triangle {{XYZ}}, side {{XY}} is extended past {{Y}} to point {{W}}. Prove that the exterior angle {{∠ZYW}} equals the sum of the two opposite interior angles, {{∠X + ∠Z}}.",
          hints: [
            "Write an equation for the three interior angles of {{△XYZ}}.",
            "Write an equation for the two adjacent angles on the straight line {{XYW}}.",
            "Set both equal to {{180°}} and cancel {{∠XYZ}}.",
          ],
          modelAnswer:
            "Angles inside XYZ sum to 180°, so ∠X + ∠Z + ∠XYZ = 180°. Because XYW is a straight line, the adjacent angles are supplementary: ∠XYZ + ∠ZYW = 180°. Equating both sums gives ∠X + ∠Z + ∠XYZ = ∠XYZ + ∠ZYW; subtracting ∠XYZ from both sides proves ∠ZYW = ∠X + ∠Z.",
          markScheme: [
            { point: "State interior angles of XYZ sum to 180°", keywords: ["180", "sum to 180", "= 180"] },
            { point: "State adjacent angles on the straight line XYW sum to 180°", keywords: ["straight line", "supplementary", "adjacent"] },
            { point: "Equate and subtract/cancel ∠XYZ to deduce ∠ZYW = ∠X + ∠Z", keywords: ["subtract", "cancel", "equat", "therefore"] },
          ],
        },
        {
          id: "angles-bearings-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "back-bearings-angle-rules",
          marks: 3,
          question: "An aircraft flies from {{A}} to {{B}} on bearing {{085°}}, then turns at {{B}} to fly to {{C}} on bearing {{205°}}. Calculate the interior angle {{∠ABC}} and state the angle rules you use.",
          hints: [
            "Draw parallel North lines at {{A}} and {{B}}.",
            "Find the back bearing of {{A}} from {{B}} ({{085° + 180° = 265°}}) or the co-interior angle ({{95°}}).",
            "Subtract the bearing of {{C}} from {{B}} ({{205°}}) from {{265°}}.",
          ],
          modelAnswer:
            "Using parallel North lines at A and B, the co-interior angle at B is 180° − 85° = 95°, so the back bearing of A from B is 360° − 95° = 265° (angles around a point). Since BC leaves B on bearing 205°, the interior angle ∠ABC = 265° − 205° = 60°.",
          markScheme: [
            { point: "Find co-interior angle 95° or back bearing of A from B as 265°", keywords: ["95", "265"] },
            { point: "Cite parallel North lines / co-interior angles / back bearing / angles around a point", keywords: ["co-interior", "parallel", "back bearing", "around a point"] },
            { point: "Calculate ∠ABC = 60°", keywords: ["60°", "60 degrees", "= 60"] },
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      id: "angles-bearings-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "polygon-angles",
      strategy: "Let e be the exterior angle and set up a linear equation",
      question: "In a regular polygon, each interior angle is {{140°}} greater than each exterior angle. How many sides does this polygon have?",
      answer: { type: "number", value: 18, display: "18" },
      hints: [
        "Let the exterior angle be {{e}}, so the interior angle is {{e + 140°}}.",
        "Use {{interior + exterior = 180°}} to solve {{e + (e + 140) = 180}}.",
        "Once you find {{e}}, compute {{n = 360° / e}}.",
      ],
      solution: [
        "{{e + (e + 140°) = 180°}} → {{2e = 40°}} → {{e = 20°}}.",
        "{{n = 360° / 20° = 18}} sides (check: interior {{= 160°}}, and {{160° - 20° = 140°}} ✓).",
      ],
    },
    {
      id: "angles-bearings-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "polygon-angles",
      diagram: SVG_PENT_HEX,
      strategy: "Find each regular interior angle and use 360° around the vertex",
      question: "A regular pentagon and a regular hexagon share one complete side without overlapping. Calculate the angle {{x}} between their adjacent outer edges at the shared vertex (in degrees).",
      answer: { type: "number", value: 132, display: "132°" },
      hints: [
        "Find one interior angle of a regular pentagon ({{180° - 360° / 5 = 108°}}).",
        "Find one interior angle of a regular hexagon ({{180° - 360° / 6 = 120°}}).",
        "Angles around the shared vertex sum to {{360°}}.",
      ],
      solution: [
        "Regular pentagon interior angle {{= 108°}}; regular hexagon interior angle {{= 120°}}.",
        "{{x = 360° - (108° + 120°) = 360° - 228° = 132°}}.",
      ],
    },
    {
      id: "angles-bearings-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "polygon-angles",
      strategy: "Work backwards from 360° at a tiling vertex",
      question: "Two identical regular {{n}}-sided polygons and one square meet edge-to-edge around a single point with no gaps and no overlaps. Find the value of {{n}}.",
      answer: { type: "number", value: 8, display: "8" },
      hints: [
        "A square contributes {{90°}} at the shared vertex.",
        "The two identical {{n}}-gons must share the remaining {{360° - 90° = 270°}} equally, so each interior angle is {{135°}}.",
        "Convert interior {{135°}} to exterior ({{45°}}) and divide into {{360°}}.",
      ],
      solution: [
        "Each {{n}}-gon interior angle {{= (360° - 90°) / 2 = 135°}}.",
        "Exterior angle {{= 180° - 135° = 45°}} → {{n = 360° / 45° = 8}} (two octagons and a square!).",
      ],
    },
    {
      id: "angles-bearings-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "parallel-lines-angles",
      strategy: "Use co-interior pairs twice in a trapezium",
      question: "In trapezium {{ABCD}}, side {{AB}} is parallel to side {{DC}}. The interior angles satisfy {{∠A = (2x + 15)°}}, {{∠D = (3x - 5)°}}, and {{∠B = (4x - 22)°}}. Find the size of {{∠C}} in degrees.",
      answer: { type: "number", value: 66, display: "66°" },
      hints: [
        "Because {{AB ∥ DC}}, {{∠A}} and {{∠D}} are co-interior angles summing to {{180°}}.",
        "Solve {{(2x + 15) + (3x - 5) = 180}} to find {{x}}, then substitute to find {{∠B}}.",
        "{{∠B}} and {{∠C}} are also co-interior between {{AB ∥ DC}}!",
      ],
      solution: [
        "Co-interior pair {{∠A + ∠D = 180°}}: {{5x + 10 = 180}} → {{5x = 170}} → {{x = 34}}.",
        "Substitute into {{∠B}}: {{∠B = 4(34) - 22 = 136 - 22 = 114°}}.",
        "Co-interior pair {{∠B + ∠C = 180°}} → {{∠C = 180° - 114° = 66°}}.",
      ],
    },
    {
      id: "angles-bearings-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "back-bearings-angle-rules",
      strategy: "Spot the right-angled isosceles triangle from the leg bearings",
      question: "Three lighthouses {{A, B, C}} form a triangle with {{AB = BC}}. The bearing of {{B}} from {{A}} is {{052°}} and the bearing of {{C}} from {{B}} is {{142°}}. Calculate the three-figure bearing of {{A}} from {{C}}.",
      answer: { type: "text", accept: ["277", "277°", "277 degrees"], display: "277°" },
      hints: [
        "Find {{∠ABC}} first: back bearing of {{A}} from {{B}} is {{232°}}, so {{∠ABC = 232° - 142° = 90°}}!",
        "Since {{AB = BC}} and {{∠ABC = 90°}}, {{∠BCA = 45°}}.",
        "Find the back bearing of {{B}} from {{C}} ({{142° + 180° = 322°}}) and subtract {{45°}}.",
      ],
      solution: [
        "Back bearing of {{A}} from {{B}} {{= 052° + 180° = 232°}}, so {{∠ABC = 232° - 142° = 90°}}.",
        "With {{AB = BC}}, {{△ABC}} is right-angled isosceles, so {{∠BCA = 45°}}.",
        "Back bearing of {{B}} from {{C}} {{= 142° + 180° = 322°}}; turning {{45°}} anticlockwise to face {{A}} gives {{322° - 45° = 277°}}.",
      ],
    },
    {
      id: "angles-bearings-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "back-bearings-angle-rules",
      strategy: "Pair each vertex's forward bearing with its incoming back bearing",
      question: "A ship sails a closed triangle {{P → Q → R → P}}: the bearing of {{Q}} from {{P}} is {{065°}}, the bearing of {{R}} from {{Q}} is {{175°}}, and the bearing of {{P}} from {{R}} is {{315°}}. Calculate the interior angle {{∠QRP}} in degrees.",
      answer: { type: "number", value: 40, display: "40°" },
      hints: [
        "Focus on vertex {{R}}: you already know the bearing of {{P}} from {{R}} ({{315°}}).",
        "Find the back bearing of {{Q}} from {{R}} using the bearing of {{R}} from {{Q}} ({{175°}}).",
        "Compute the angle between {{RP}} ({{315°}}) and {{RQ}} ({{355°}}).",
      ],
      solution: [
        "Since the bearing of {{R}} from {{Q}} is {{175°}}, the back bearing of {{Q}} from {{R}} is {{175° + 180° = 355°}}.",
        "The bearing of {{P}} from {{R}} is {{315°}}.",
        "Therefore {{∠QRP = 355° - 315° = 40°}} (check: {{∠PQR = 245° - 175° = 70°}} and {{∠QPR = 135° - 65° = 70°}}, sum {{= 180°}} ✓).",
      ],
    },
    {
      id: "angles-bearings-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "polygon-angles",
      marks: 4,
      strategy: "Switch to exterior angles — or solve the interior sum equation",
      question: "An irregular polygon has {{n}} sides. Three of its interior angles are {{130°}}, {{145°}}, and {{125°}}, and every remaining interior angle measures {{160°}}. Find the value of {{n}}, showing clear algebraic working.",
      hints: [
        "Fast AoPS route: convert EVERY interior angle to its exterior angle ({{180° - \"interior\"}})!",
        "The first three exterior angles are {{50°}}, {{35°}}, and {{55°}}, summing to {{140°}}; all remaining exterior angles are {{20°}} each.",
        "Subtract {{140°}} from {{360°}} and divide by {{20°}} — don't forget to add the first {{3}} vertices back!",
      ],
      modelAnswer:
        "Using exterior angles: the first three exterior angles are 180° − 130° = 50°, 180° − 145° = 35°, and 180° − 125° = 55°, giving 50 + 35 + 55 = 140°. That leaves 360° − 140° = 220° for the remaining exterior angles, each of size 180° − 160° = 20°. Dividing gives 220 / 20 = 11 remaining sides, so n = 3 + 11 = 14 sides. (Check via interior sum: 400 + 160(n − 3) = 180(n − 2) gives 20n = 280, so n = 14.)",
      markScheme: [
        { point: "Set up interior sum 180(n − 2) or convert first three angles to exteriors 50°, 35°, 55° (sum 140°)", keywords: ["180(n - 2)", "(n - 2) * 180", "(n-2)*180", "50", "140"] },
        { point: "Sum known interiors to 400° or find remaining exterior sum 220°", keywords: ["400", "220"] },
        { point: "Solve 20n = 280 or compute 220 / 20 = 11 remaining sides", keywords: ["280", "20n", "220 / 20", "11"] },
        { point: "Conclude n = 14 sides", keywords: ["14"] },
      ],
    },
    {
      id: "angles-bearings-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "back-bearings-angle-rules",
      marks: 3,
      strategy: "Find the included angle at B first to reveal symmetry",
      question: "A patrol boat sails {{12}} km from Harbour {{H}} to Buoy {{B}} on bearing {{074°}}, then sails {{12}} km from {{B}} to Lighthouse {{L}} on bearing {{194°}}. Prove that {{△HBL}} is equilateral and find the three-figure bearing of {{H}} from {{L}}.",
      hints: [
        "Find the back bearing of {{H}} from {{B}} ({{074° + 180° = 254°}}) and subtract {{194°}} to get {{∠HBL}}.",
        "Use the fact that {{HB = BL = 12}} km to show all three angles of {{△HBL}} equal {{60°}}.",
        "Find the back bearing of {{B}} from {{L}} ({{014°}}) and turn {{60°}} anticlockwise to face {{H}}.",
      ],
      modelAnswer:
        "The back bearing of H from B is 074° + 180° = 254° (equivalently co-interior angle 106°), so ∠HBL = 254° − 194° = 60°. Because HB = BL = 12 km, triangle HBL is isosceles, so its two base angles are equal: (180° − 60°) / 2 = 60° each. Since all three angles are 60°, △HBL is equilateral. At L, the back bearing of B from L is 194° − 180° = 014°, and turning 60° anticlockwise to face H gives 014° − 60° + 360° = 314°.",
      markScheme: [
        { point: "Find ∠HBL = 60° via back bearing 254° (or co-interior 106°)", keywords: ["254", "106", "60°", "60 degrees"] },
        { point: "Show isosceles base angles are (180° − 60°)/2 = 60° so all three angles are 60°", keywords: ["isosceles", "base angles", "all three angles", "all angles are 60"] },
        { point: "Compute bearing of H from L as 314°", keywords: ["314"] },
      ],
    },
  ],
};
