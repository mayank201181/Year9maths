import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK-CHECK QUIZ (10 mixed questions across all 5 sections)
  // =========================================================================
  quiz: [
    {
      id: "surface-area-volume-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "circle-sectors",
      question:
        "A sector of a circle has radius {{6 cm}} and central angle {{120°}}. Find its exact **area** in terms of {{pi}} (type in terms of pi, e.g. `10pi`).",
      answer: { type: "expression", expr: "12pi", display: "{{12pi}} cm²" },
      traps: [
        {
          spec: { type: "expression", expr: "4pi" },
          feedback: "{{4pi}} is the arc length ({{(120/360) * 2pi r}}) — use {{pi r^2}} for sector area!",
        },
        {
          spec: { type: "expression", expr: "36pi" },
          feedback: "{{36pi}} is the full circle area — remember to multiply by {{120/360 = 1/3}}.",
        },
      ],
      hints: [
        "Simplify the fraction {{120/360}} first.",
        "Multiply {{1/3}} by the full circle area {{pi * 6^2}}.",
      ],
      solution: [
        "Fraction of circle = {{120/360 = 1/3}}.",
        "Sector area = {{(1/3) * pi * 6^2 = (1/3) * 36pi = 12pi cm^2}}.",
      ],
    },
    {
      id: "surface-area-volume-quiz-q02",
      kind: "mcq",
      difficulty: "core",
      guideRef: "circle-sectors",
      question:
        "A sector has radius {{9 cm}} and angle {{60°}}. What is its **total perimeter** correct to 1 decimal place?",
      options: ["{{9.4 cm}}", "{{18.4 cm}}", "{{27.4 cm}}", "{{42.4 cm}}"],
      answerIndex: 2,
      hints: [
        "Arc length = {{(60/360) * 2 * pi * 9 = 3pi ~= 9.425 cm}}.",
        "Add the two straight radii ({{9 + 9 = 18 cm}}) to close the shape.",
      ],
      explanation:
        "Arc length = {{(1/6) * 18pi = 3pi ~= 9.425 cm}}. Adding both radii ({{2 * 9 = 18 cm}}) gives {{27.425 ~= 27.4 cm}}. Forgetting the straight edges gives {{9.4 cm}}, and adding only one radius gives {{18.4 cm}}.",
    },
    {
      id: "surface-area-volume-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "prisms-cylinders",
      question:
        "A cuboid measures {{9 cm}} by {{6 cm}} by {{5 cm}}. Find its **volume** in {{cm^3}}.",
      answer: { type: "number", value: 270, display: "270 cm³" },
      traps: [
        {
          spec: { type: "number", value: 258 },
          feedback: "{{258 cm^2}} is the surface area — for volume, multiply length × width × height.",
        },
      ],
      hints: ["Volume of a cuboid = length × width × height."],
      solution: ["{{V = 9 * 6 * 5 = 270 cm^3}}."],
    },
    {
      id: "surface-area-volume-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "prisms-cylinders",
      question:
        "A cylinder has base radius {{4 cm}} and height {{6 cm}}. Find its exact **volume** in terms of {{pi}} (type in terms of pi, e.g. `10pi`).",
      answer: { type: "expression", expr: "96pi", display: "{{96pi}} cm³" },
      traps: [
        {
          spec: { type: "expression", expr: "48pi" },
          feedback: "{{48pi}} is the curved surface area ({{2pi r h}}) — cylinder volume is {{pi r^2 h}}.",
        },
        {
          spec: { type: "expression", expr: "24pi" },
          feedback: "Did you forget to square the radius {{4}}? {{4^2 = 16}}, not {{4}}.",
        },
      ],
      hints: [
        "Volume of a cylinder = {{pi r^2 h}}.",
        "Substitute {{r = 4}} and {{h = 6}}.",
      ],
      solution: ["{{V = pi * 4^2 * 6 = 16 * 6pi = 96pi cm^3}}."],
    },
    {
      id: "surface-area-volume-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "cones-and-reverse-volume",
      question:
        "A cone has base radius {{6 cm}} and perpendicular height {{5 cm}}. Find its exact **volume** in terms of {{pi}} (type in terms of pi, e.g. `10pi`).",
      answer: { type: "expression", expr: "60pi", display: "{{60pi}} cm³" },
      traps: [
        {
          spec: { type: "expression", expr: "180pi" },
          feedback: "{{180pi}} is the cylinder volume — remember to divide by {{3}} for a cone!",
        },
      ],
      hints: [
        "Cone volume is {{(1/3) pi r^2 h}}.",
        "Calculate {{(1/3) * 36 * 5}}.",
      ],
      solution: ["{{V = (1/3) * pi * 6^2 * 5 = (1/3) * 180pi = 60pi cm^3}}."],
    },
    {
      id: "surface-area-volume-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "cones-and-reverse-volume",
      question:
        "A prism has volume {{180 cm^3}} and cross-sectional area {{15 cm^2}}. Find its **length** in cm.",
      answer: { type: "number", value: 12, display: "12 cm" },
      hints: [
        "Recall {{V = \"cross-sectional area\" * \"length\"}}.",
        "Divide the volume {{180}} by {{15}}.",
      ],
      solution: ["{{\"length\" = 180 / 15 = 12 cm}}."],
    },
    {
      id: "surface-area-volume-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "area-volume-units",
      question: "Convert {{4.5 m^2}} into {{cm^2}}.",
      answer: { type: "number", value: 45000, display: "45,000 cm²" },
      traps: [
        {
          spec: { type: "number", value: 450 },
          feedback: "You multiplied by {{100}} (the length factor) — for area, multiply by {{100^2 = 10,000}}!",
        },
      ],
      hints: [
        "{{1 m = 100 cm}}, so {{1 m^2 = 100^2 = 10,000 cm^2}}.",
        "Multiply {{4.5}} by {{10,000}}.",
      ],
      solution: ["{{4.5 * 10,000 = 45,000 cm^2}}."],
    },
    {
      id: "surface-area-volume-quiz-q08",
      kind: "short",
      difficulty: "warmup",
      guideRef: "area-volume-units",
      question: "Convert {{7,500 cm^3}} into **litres**.",
      answer: { type: "number", value: 7.5, display: "7.5 litres" },
      traps: [
        {
          spec: { type: "number", value: 75 },
          feedback: "Remember {{1 \"litre\" = 1,000 cm^3}}, so divide by {{1,000}}, not {{100}}.",
        },
      ],
      hints: ["{{1 \"litre\" = 1,000 cm^3}}, so divide by {{1,000}}."],
      solution: ["{{7,500 / 1,000 = 7.5 \"litres\"}}."],
    },
    {
      id: "surface-area-volume-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "measurement-accuracy",
      question:
        "A mass {{m}} is measured as {{15.4 kg}} correct to 1 decimal place. What is the **upper bound** of {{m}} in kg?",
      answer: { type: "number", value: 15.45, display: "15.45 kg" },
      traps: [
        {
          spec: { type: "number", value: 15.5 },
          feedback: "For 1 d.p. (unit {{0.1}}), add **half** of {{0.1}}, which is {{0.05}}, not {{0.1}}.",
        },
        {
          spec: { type: "number", value: 15.44 },
          feedback: "Never stop at {{15.44}} — values like {{15.449}} also round to {{15.4}}. The exact upper bound is {{15.45}}.",
        },
      ],
      hints: [
        "The rounding unit for 1 decimal place is {{0.1 kg}}.",
        "Add half of {{0.1}} (which is {{0.05}}) to {{15.4}}.",
      ],
      solution: [
        "Half of {{0.1}} is {{0.05}}.",
        "Upper bound = {{15.4 + 0.05 = 15.45 kg}}.",
      ],
    },
    {
      id: "surface-area-volume-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "measurement-accuracy",
      marks: 3,
      question:
        "A ribbon's length {{L}} is given as {{8.2 m}} correct to 1 decimal place. Write down the error interval for {{L}}, and explain why the inequality on the right must be strict ({{<}}) rather than {{<=}}.",
      hints: [
        "First halve the rounding unit {{0.1 m}} to find both bounds.",
        "Test what {{8.25 m}} itself rounds to when rounded to 1 decimal place.",
      ],
      modelAnswer:
        "The rounding unit is 0.1 m, so half of it is 0.05 m. The lower bound is 8.15 m and the upper bound is 8.25 m, giving the error interval 8.15 <= L < 8.25. The right sign must be strict < because 8.25 itself rounds up to 8.3 (not 8.2), whereas every value just below 8.25 still rounds down to 8.2.",
      markScheme: [
        {
          point: "Correct lower bound 8.15 and upper bound 8.25",
          keywords: ["8.15", "8.25"],
        },
        {
          point: "Correct error interval inequality 8.15 <= L < 8.25",
          keywords: ["8.15 <= l < 8.25", "8.15 ≤ l < 8.25", "8.15<=l<8.25"],
        },
        {
          point: "Explains that 8.25 rounds up to 8.3 (so cannot be included)",
          keywords: ["8.3", "rounds up", "excluded", "not included"],
        },
      ],
      commonError:
        "Writing 8.15 <= L <= 8.24 or 8.15 <= L <= 8.25 instead of strict < at 8.25.",
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS 1 & 2 (15 questions each)
  // =========================================================================
  papers: [
    // -----------------------------------------------------------------------
    // PRACTICE PAPER 1
    // -----------------------------------------------------------------------
    {
      id: "surface-area-volume-p1",
      title: "Practice Paper 1 — Core Skills & Problem Solving",
      questions: [
        {
          id: "surface-area-volume-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "circle-sectors",
          question:
            "A sector has radius {{15 cm}} and central angle {{72°}}. Find its exact **arc length** in terms of {{pi}} (type in terms of pi, e.g. `10pi`).",
          answer: { type: "expression", expr: "6pi", display: "{{6pi}} cm" },
          traps: [
            {
              spec: { type: "expression", expr: "45pi" },
              feedback: "{{45pi}} is the sector area ({{(1/5) * pi * 15^2}}) — use {{2pi r}} for arc length.",
            },
          ],
          hints: [
            "Simplify {{72/360}} first: {{72/360 = 1/5}}.",
            "Multiply {{1/5}} by the full circumference {{2 * pi * 15}}.",
          ],
          solution: [
            "Fraction = {{72/360 = 1/5}}.",
            "Arc length = {{(1/5) * 2 * pi * 15 = 6pi cm}}.",
          ],
        },
        {
          id: "surface-area-volume-p1-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "circle-sectors",
          question:
            "A semicircular garden bed has radius {{10 m}}. Find its **total perimeter** in metres, correct to 1 decimal place (use your calculator's {{pi}} button).",
          answer: { type: "number", value: 51.4, tolerance: 0.05, display: "51.4 m" },
          traps: [
            {
              spec: { type: "number", value: 31.4, tolerance: 0.05 },
              feedback: "{{31.4 m}} is only the curved semicircular edge — remember to add the straight diameter ({{20 m}})!",
            },
            {
              spec: { type: "number", value: 41.4, tolerance: 0.05 },
              feedback: "You added only one radius ({{10 m}}) instead of the full straight diameter ({{20 m}}).",
            },
          ],
          hints: [
            "Curved arc of a semicircle = {{pi r = 10pi ~= 31.416 m}}.",
            "Add the straight diameter {{2 * 10 = 20 m}}.",
          ],
          solution: [
            "Curved arc = {{(180/360) * 2 * pi * 10 = 10pi ~= 31.416 m}}.",
            "Total perimeter = {{31.416 + 20 = 51.416 ~= 51.4 m}} (to 1 d.p.).",
          ],
        },
        {
          id: "surface-area-volume-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "circle-sectors",
          question:
            "A sector of radius {{15 cm}} has exact arc length {{5pi cm}}. Find the size of its central angle {{theta}} in degrees.",
          answer: { type: "number", value: 60, display: "60°" },
          traps: [
            {
              spec: { type: "number", value: 120 },
              feedback: "Check the full circumference: {{2pi r = 30pi}}, not {{15pi}}.",
            },
          ],
          hints: [
            "Full circumference = {{2 * pi * 15 = 30pi cm}}.",
            "What fraction of {{30pi}} is {{5pi}}? Multiply that fraction by {{360°}}.",
          ],
          solution: [
            "Full circumference = {{2 * pi * 15 = 30pi cm}}.",
            "Fraction of circle = {{5pi / 30pi = 1/6}}.",
            "Central angle {{theta = (1/6) * 360° = 60°}}.",
          ],
        },
        {
          id: "surface-area-volume-p1-q04",
          kind: "short",
          difficulty: "warmup",
          guideRef: "prisms-cylinders",
          question:
            "A triangular prism has a triangular cross-section of base {{8 cm}} and perpendicular height {{7 cm}}, and prism length {{10 cm}}. Find its **volume** in {{cm^3}}.",
          answer: { type: "number", value: 280, display: "280 cm³" },
          traps: [
            {
              spec: { type: "number", value: 560 },
              feedback: "Don't forget the {{1/2}} in the area of a triangle: {{(1/2) * 8 * 7 = 28 cm^2}}.",
            },
          ],
          hints: [
            "Area of triangle = {{(1/2) * 8 * 7}}.",
            "Multiply the cross-sectional area by {{10}}.",
          ],
          solution: [
            "Cross-sectional area = {{(1/2) * 8 * 7 = 28 cm^2}}.",
            "Volume = {{28 * 10 = 280 cm^3}}.",
          ],
        },
        {
          id: "surface-area-volume-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "prisms-cylinders",
          question:
            "A closed cuboid has length {{7 cm}}, width {{4 cm}}, and height {{3 cm}}. Calculate its **total surface area** in {{cm^2}}.",
          answer: { type: "number", value: 122, display: "122 cm²" },
          traps: [
            {
              spec: { type: "number", value: 61 },
              feedback: "{{61 cm^2}} is the sum of just 3 faces — a closed cuboid has 6 faces, so double it!",
            },
            {
              spec: { type: "number", value: 84 },
              feedback: "{{84}} is the volume ({{7 * 4 * 3}}) — add the areas of all 6 rectangular faces for surface area.",
            },
          ],
          hints: [
            "Calculate the three pairs of faces: {{7 * 4}}, {{7 * 3}}, and {{4 * 3}}.",
            "Add them together and multiply by {{2}}.",
          ],
          solution: [
            "Distinct face areas: {{7 * 4 = 28}}, {{7 * 3 = 21}}, {{4 * 3 = 12}}.",
            "Total surface area = {{2(28 + 21 + 12) = 2 * 61 = 122 cm^2}}.",
          ],
        },
        {
          id: "surface-area-volume-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "prisms-cylinders",
          question:
            "A **closed** cylinder has radius {{3 cm}} and height {{8 cm}}. Find its exact **total surface area** in terms of {{pi}} (type in terms of pi, e.g. `10pi`).",
          answer: { type: "expression", expr: "66pi", display: "{{66pi}} cm²" },
          traps: [
            {
              spec: { type: "expression", expr: "48pi" },
              feedback: "{{48pi}} is the curved surface area only — add the two circular ends ({{2 * pi * 3^2 = 18pi}}).",
            },
            {
              spec: { type: "expression", expr: "57pi" },
              feedback: "{{57pi}} includes only one circular end — a **closed** cylinder has both top and bottom circles.",
            },
          ],
          hints: [
            "Total SA of a closed cylinder = {{2pi r^2 + 2pi r h}}.",
            "Two circles = {{2 * pi * 3^2 = 18pi}}; curved wall = {{2 * pi * 3 * 8 = 48pi}}.",
          ],
          solution: [
            "Two circular ends = {{2 * pi * 3^2 = 18pi cm^2}}.",
            "Curved surface = {{2 * pi * 3 * 8 = 48pi cm^2}}.",
            "Total surface area = {{18pi + 48pi = 66pi cm^2}}.",
          ],
        },
        {
          id: "surface-area-volume-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "cones-and-reverse-volume",
          question:
            "A cone has base radius {{8 cm}} and perpendicular height {{15 cm}}. Find its exact **curved surface area** in terms of {{pi}} (type in terms of pi, e.g. `10pi`).",
          answer: { type: "expression", expr: "136pi", display: "{{136pi}} cm²" },
          traps: [
            {
              spec: { type: "expression", expr: "120pi" },
              feedback: "You used the perpendicular height {{15}} instead of the slant height {{l = sqrt(8^2 + 15^2) = 17}}!",
            },
            {
              spec: { type: "expression", expr: "200pi" },
              feedback: "{{200pi}} is the **total** surface area (including the base) — this question asks for **curved** surface area {{pi r l}} only.",
            },
          ],
          hints: [
            "First find the slant height {{l}} using Pythagoras: {{l = sqrt(8^2 + 15^2)}}.",
            "Then use {{\"CSA\" = pi r l}}.",
          ],
          solution: [
            "Slant height {{l = sqrt(8^2 + 15^2) = sqrt(64 + 225) = sqrt(289) = 17 cm}}.",
            "Curved surface area = {{pi * 8 * 17 = 136pi cm^2}}.",
          ],
        },
        {
          id: "surface-area-volume-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "cones-and-reverse-volume",
          question:
            "A cuboid has volume {{504 cm^3}}, length {{12 cm}}, and height {{6 cm}}. Find its **width** in cm.",
          answer: { type: "number", value: 7, display: "7 cm" },
          hints: [
            "Substitute into {{12 * w * 6 = 504}}.",
            "Divide {{504}} by {{12 * 6 = 72}}.",
          ],
          solution: [
            "{{12 * 6 * w = 504}} gives {{72w = 504}}.",
            "{{w = 504 / 72 = 7 cm}}.",
          ],
        },
        {
          id: "surface-area-volume-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "cones-and-reverse-volume",
          question:
            "A cylinder has volume {{147pi cm^3}} and base radius {{7 cm}}. Find its **height** in cm.",
          answer: { type: "number", value: 3, display: "3 cm" },
          traps: [
            {
              spec: { type: "number", value: 21 },
              feedback: "Remember to square the radius: {{r^2 = 7^2 = 49}}, so divide {{147}} by {{49}}, not by {{7}}.",
            },
          ],
          hints: [
            "Write {{pi * 7^2 * h = 147pi}} and cancel {{pi}}.",
            "Divide {{147}} by {{49}}.",
          ],
          solution: [
            "{{49pi h = 147pi}} → {{h = 147 / 49 = 3 cm}}.",
          ],
        },
        {
          id: "surface-area-volume-p1-q10",
          kind: "short",
          difficulty: "warmup",
          guideRef: "area-volume-units",
          question: "Convert {{3.2 cm^2}} into {{mm^2}}.",
          answer: { type: "number", value: 320, display: "320 mm²" },
          traps: [
            {
              spec: { type: "number", value: 32 },
              feedback: "{{1 cm = 10 mm}}, so for area multiply by {{10^2 = 100}}, not {{10}}.",
            },
          ],
          hints: ["{{1 cm^2 = 10^2 = 100 mm^2}}, so multiply {{3.2}} by {{100}}."],
          solution: ["{{3.2 * 100 = 320 mm^2}}."],
        },
        {
          id: "surface-area-volume-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "area-volume-units",
          question: "Convert {{0.006 m^3}} into {{cm^3}}.",
          answer: { type: "number", value: 6000, display: "6,000 cm³" },
          traps: [
            {
              spec: { type: "number", value: 60 },
              feedback: "Multiply by {{100^3 = 1,000,000}} for cubic metres to cubic centimetres, not {{10,000}}.",
            },
          ],
          hints: [
            "{{1 m^3 = 100^3 = 1,000,000 cm^3}}.",
            "Multiply {{0.006}} by {{1,000,000}}.",
          ],
          solution: ["{{0.006 * 1,000,000 = 6,000 cm^3}}."],
        },
        {
          id: "surface-area-volume-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "area-volume-units",
          question: "Convert {{85,000 cm^2}} into {{m^2}}.",
          answer: { type: "number", value: 8.5, display: "8.5 m²" },
          traps: [
            {
              spec: { type: "number", value: 850 },
              feedback: "You divided by {{100}} — there are {{100^2 = 10,000 cm^2}} in {{1 m^2}}.",
            },
          ],
          hints: [
            "{{1 m^2 = 10,000 cm^2}}.",
            "Divide {{85,000}} by {{10,000}}.",
          ],
          solution: ["{{85,000 / 10,000 = 8.5 m^2}}."],
        },
        {
          id: "surface-area-volume-p1-q13",
          kind: "short",
          difficulty: "core",
          guideRef: "measurement-accuracy",
          question:
            "A tower's height {{h}} is given as {{340 m}} to the nearest {{10 m}}. What is the **lower bound** of {{h}} in metres?",
          answer: { type: "number", value: 335, display: "335 m" },
          traps: [
            {
              spec: { type: "number", value: 330 },
              feedback: "Subtract **half** of the rounding unit ({{10 / 2 = 5}}), not the whole {{10}}.",
            },
            {
              spec: { type: "number", value: 339.5 },
              feedback: "The measurement is rounded to the nearest {{10 m}}, not the nearest {{1 m}}.",
            },
          ],
          hints: [
            "The rounding unit is {{10 m}}.",
            "Halve {{10}} to get {{5}}, then subtract from {{340}}.",
          ],
          solution: ["Half of {{10}} is {{5}}, so LB = {{340 - 5 = 335 m}}."],
        },
        {
          id: "surface-area-volume-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "circle-sectors",
          marks: 3,
          question:
            "A student says the perimeter of a {{90°}} sector of radius {{6 cm}} is {{3pi cm}}. Explain clearly what the student forgot, and calculate the correct exact perimeter in terms of {{pi}}.",
          hints: [
            "What part of the sector has length {{3pi cm}}?",
            "Which other edges form the boundary of a sector?",
          ],
          modelAnswer:
            "3pi cm is only the curved arc length ((90/360) x 2 x pi x 6 = 3pi). The student forgot to include the two straight radii that bound the slice (6 + 6 = 12 cm). Therefore the correct exact total perimeter is 3pi + 12 cm.",
          markScheme: [
            {
              point: "Identifies that 3pi is only the arc length",
              keywords: ["arc length", "curved edge", "curved part", "only the arc"],
            },
            {
              point: "States that the two straight radii (2 × 6 = 12 cm) must be added",
              keywords: ["two radii", "straight radii", "both radii", "add 12", "+ 12", "6 + 6"],
            },
            {
              point: "Gives the correct exact perimeter 3pi + 12 cm",
              keywords: ["3pi + 12", "3π + 12", "12 + 3pi", "12 + 3π"],
            },
          ],
          commonError:
            "Adding only one radius (3pi + 6) or combining unlike terms into 15pi.",
        },
        {
          id: "surface-area-volume-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "measurement-accuracy",
          marks: 3,
          question:
            "A steel rod's length {{d}} is measured as {{2.40 m}} correct to 2 decimal places. State the rounding unit, find the lower and upper bounds, and write the complete error interval for {{d}}.",
          hints: [
            "What place value is the second decimal place?",
            "Halve {{0.01}} to find the maximum rounding error {{0.005}}.",
          ],
          modelAnswer:
            "Correct to 2 decimal places means the rounding unit is 0.01 m, so half of the rounding unit is 0.005 m. Subtracting and adding 0.005 gives lower bound 2.395 m and upper bound 2.405 m. The error interval is 2.395 <= d < 2.405.",
          markScheme: [
            {
              point: "Identifies rounding unit 0.01 m and half-unit 0.005 m",
              keywords: ["0.01", "0.005"],
            },
            {
              point: "States lower bound 2.395 and upper bound 2.405",
              keywords: ["2.395", "2.405"],
            },
            {
              point: "Writes the exact error interval 2.395 <= d < 2.405",
              keywords: ["2.395 <= d < 2.405", "2.395 ≤ d < 2.405", "2.395<=d<2.405"],
            },
          ],
          commonError:
            "Treating 2.40 as 1 decimal place (2.35 <= d < 2.45) instead of noticing the trailing zero indicates 2 decimal places.",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PRACTICE PAPER 2
    // -----------------------------------------------------------------------
    {
      id: "surface-area-volume-p2",
      title: "Practice Paper 2 — Multi-Step, Compound Solids & Accuracy",
      questions: [
        {
          id: "surface-area-volume-p2-q01",
          kind: "short",
          difficulty: "core",
          guideRef: "circle-sectors",
          question:
            "A sector of a circle has radius {{8 cm}} and central angle {{135°}}. Find its exact **area** in terms of {{pi}} (type in terms of pi, e.g. `10pi`).",
          answer: { type: "expression", expr: "24pi", display: "{{24pi}} cm²" },
          traps: [
            {
              spec: { type: "expression", expr: "6pi" },
              feedback: "{{6pi}} is the arc length — use {{pi r^2}} for sector area.",
            },
          ],
          hints: [
            "Simplify {{135/360}} by dividing numerator and denominator by {{45}}: {{135/360 = 3/8}}.",
            "Multiply {{3/8}} by {{pi * 8^2 = 64pi}}.",
          ],
          solution: [
            "Fraction = {{135/360 = 3/8}}.",
            "Sector area = {{(3/8) * 64pi = 24pi cm^2}}.",
          ],
        },
        {
          id: "surface-area-volume-p2-q02",
          kind: "short",
          difficulty: "challenge",
          guideRef: "circle-sectors",
          question:
            "A sector with central angle {{120°}} has exact area {{12pi cm^2}}. Find its **radius** in cm.",
          answer: { type: "number", value: 6, display: "6 cm" },
          traps: [
            {
              spec: { type: "number", value: 36 },
              feedback: "{{36}} is {{r^2}} — take the square root to find the radius {{r}}!",
            },
          ],
          hints: [
            "Since {{120/360 = 1/3}}, the full circle has area {{3 * 12pi = 36pi cm^2}}.",
            "Solve {{pi r^2 = 36pi}} for {{r}}.",
          ],
          solution: [
            "{{(1/3) pi r^2 = 12pi}} → {{r^2 = 36}}.",
            "{{r = sqrt(36) = 6 cm}}.",
          ],
        },
        {
          id: "surface-area-volume-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "prisms-cylinders",
          question:
            "A prism of length {{9 cm}} has a trapezoidal cross-section with parallel sides {{6 cm}} and {{10 cm}} and perpendicular height {{5 cm}}. Find its **volume** in {{cm^3}}.",
          answer: { type: "number", value: 360, display: "360 cm³" },
          traps: [
            {
              spec: { type: "number", value: 720 },
              feedback: "Remember the {{1/2}} in the trapezium area formula: {{(1/2)(a + b)h}}.",
            },
          ],
          hints: [
            "Trapezium area = {{(1/2)(6 + 10) * 5 = 40 cm^2}}.",
            "Multiply the cross-sectional area by the length {{9 cm}}.",
          ],
          solution: [
            "Cross-sectional area = {{(1/2)(6 + 10) * 5 = 40 cm^2}}.",
            "Volume = {{40 * 9 = 360 cm^3}}.",
          ],
        },
        {
          id: "surface-area-volume-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "prisms-cylinders",
          question:
            "A triangular prism of length {{15 cm}} has a right-angled triangular cross-section with sides {{6 cm}}, {{8 cm}}, and hypotenuse {{10 cm}}. Find its **total surface area** in {{cm^2}}.",
          answer: { type: "number", value: 408, display: "408 cm²" },
          traps: [
            {
              spec: { type: "number", value: 360 },
              feedback: "{{360}} is either the volume or only the 3 rectangular sides — add the two triangular ends ({{2 * 24 = 48 cm^2}})!",
            },
            {
              spec: { type: "number", value: 384 },
              feedback: "You added only one triangular end — a prism has **two** identical end faces.",
            },
          ],
          hints: [
            "Each triangular end has area {{(1/2) * 6 * 8 = 24 cm^2}}.",
            "The three rectangular faces have total area {{(6 + 8 + 10) * 15 = 360 cm^2}}.",
          ],
          solution: [
            "Two triangular ends = {{2 * 24 = 48 cm^2}}.",
            "Three rectangular side faces = {{(6 + 8 + 10) * 15 = 24 * 15 = 360 cm^2}}.",
            "Total surface area = {{48 + 360 = 408 cm^2}}.",
          ],
        },
        {
          id: "surface-area-volume-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "prisms-cylinders",
          question:
            "An **open-topped** cylindrical mug has radius {{5 cm}} and height {{8 cm}}. Find its exact external **surface area** in terms of {{pi}} (type in terms of pi, e.g. `10pi`).",
          answer: { type: "expression", expr: "105pi", display: "{{105pi}} cm²" },
          traps: [
            {
              spec: { type: "expression", expr: "130pi" },
              feedback: "{{130pi}} includes a lid — an open-topped mug has only **one** circular base ({{pi r^2 + 2pi r h}}).",
            },
            {
              spec: { type: "expression", expr: "80pi" },
              feedback: "{{80pi}} is the curved wall only — remember to add the circular base ({{25pi}}).",
            },
          ],
          hints: [
            "Open-topped cylinder SA = one base {{pi r^2}} + curved wall {{2pi r h}}.",
            "Compute {{pi * 5^2 + 2 * pi * 5 * 8}}.",
          ],
          solution: [
            "Base area = {{pi * 5^2 = 25pi cm^2}}.",
            "Curved wall = {{2 * pi * 5 * 8 = 80pi cm^2}}.",
            "External surface area = {{25pi + 80pi = 105pi cm^2}}.",
          ],
        },
        {
          id: "surface-area-volume-p2-q06",
          kind: "short",
          difficulty: "challenge",
          guideRef: "cones-and-reverse-volume",
          question:
            "A cone has base radius {{5 cm}} and **slant height** {{13 cm}}. Find its exact **volume** in terms of {{pi}} (type in terms of pi, e.g. `10pi`).",
          answer: { type: "expression", expr: "100pi", display: "{{100pi}} cm³" },
          traps: [
            {
              spec: { type: "expression", expr: "300pi" },
              feedback: "Remember the {{1/3}} factor in cone volume: {{(1/3) pi r^2 h}}!",
            },
          ],
          hints: [
            "Volume needs the **perpendicular** height {{h}}, not the slant height {{13 cm}}.",
            "Use Pythagoras: {{h = sqrt(13^2 - 5^2) = 12 cm}}, then find {{(1/3) pi r^2 h}}.",
          ],
          solution: [
            "Perpendicular height {{h = sqrt(13^2 - 5^2) = sqrt(169 - 25) = sqrt(144) = 12 cm}}.",
            "Volume = {{(1/3) * pi * 5^2 * 12 = (1/3) * 300pi = 100pi cm^3}}.",
          ],
        },
        {
          id: "surface-area-volume-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "cones-and-reverse-volume",
          question:
            "A **solid** cone has base radius {{7 cm}} and slant height {{25 cm}}. Find its exact **total surface area** in terms of {{pi}} (type in terms of pi, e.g. `10pi`).",
          answer: { type: "expression", expr: "224pi", display: "{{224pi}} cm²" },
          traps: [
            {
              spec: { type: "expression", expr: "175pi" },
              feedback: "{{175pi}} is the curved surface area only — for a **solid** cone, add the circular base ({{49pi}})!",
            },
          ],
          hints: [
            "Total SA of a solid cone = {{pi r^2 + pi r l}}.",
            "Calculate {{49pi + 175pi}}.",
          ],
          solution: [
            "Circular base = {{pi * 7^2 = 49pi cm^2}}.",
            "Curved surface = {{pi * 7 * 25 = 175pi cm^2}}.",
            "Total surface area = {{49pi + 175pi = 224pi cm^2}}.",
          ],
        },
        {
          id: "surface-area-volume-p2-q08",
          kind: "short",
          difficulty: "challenge",
          guideRef: "cones-and-reverse-volume",
          question:
            "A cone has volume {{100pi cm^3}} and perpendicular height {{12 cm}}. Find its base **radius** in cm.",
          answer: { type: "number", value: 5, display: "5 cm" },
          traps: [
            {
              spec: { type: "number", value: 25 },
              feedback: "{{25}} is {{r^2}} — take the square root to get {{r = 5 cm}}.",
            },
          ],
          hints: [
            "Substitute into {{(1/3) pi r^2 * 12 = 100pi}}.",
            "Simplify {{(1/3) * 12 = 4}}, so {{4r^2 = 100}}.",
          ],
          solution: [
            "{{(1/3) * 12pi r^2 = 100pi}} → {{4r^2 = 100}}.",
            "{{r^2 = 25}} → {{r = 5 cm}}.",
          ],
        },
        {
          id: "surface-area-volume-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "area-volume-units",
          question:
            "A paddling pool measures {{2 m}} by {{1.5 m}} by {{80 cm}} deep. How many **litres** of water does it hold when completely full?",
          answer: { type: "number", value: 2400, display: "2,400 litres" },
          traps: [
            {
              spec: { type: "number", value: 240 },
              feedback: "Check your unit conversion: {{2 m = 200 cm}}, {{1.5 m = 150 cm}}, and {{200 * 150 * 80 = 2,400,000 cm^3}}.",
            },
          ],
          hints: [
            "Convert all three measurements to **metres** first: {{2 m}}, {{1.5 m}}, and {{0.8 m}}.",
            "Find the volume in {{m^3}}, then multiply by {{1,000}} (since {{1 m^3 = 1,000 \"litres\"}}).",
          ],
          solution: [
            "Convert {{80 cm = 0.8 m}}.",
            "Volume = {{2 * 1.5 * 0.8 = 2.4 m^3}}.",
            "Since {{1 m^3 = 1,000 \"litres\"}}, capacity = {{2.4 * 1,000 = 2,400 \"litres\"}}.",
          ],
        },
        {
          id: "surface-area-volume-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "area-volume-units",
          question: "Convert {{5,400 mm^3}} into {{cm^3}}.",
          answer: { type: "number", value: 5.4, display: "5.4 cm³" },
          traps: [
            {
              spec: { type: "number", value: 540 },
              feedback: "You divided by {{10}} (length factor) — for volume, divide by {{10^3 = 1,000}}.",
            },
            {
              spec: { type: "number", value: 54 },
              feedback: "You divided by {{100}} (area factor) — for volume, divide by {{10^3 = 1,000}}.",
            },
          ],
          hints: [
            "{{1 cm = 10 mm}}, so {{1 cm^3 = 10^3 = 1,000 mm^3}}.",
            "Divide {{5,400}} by {{1,000}}.",
          ],
          solution: ["{{5,400 / 1,000 = 5.4 cm^3}}."],
        },
        {
          id: "surface-area-volume-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "area-volume-units",
          question: "Convert {{0.025 km^2}} into {{m^2}}.",
          answer: { type: "number", value: 25000, display: "25,000 m²" },
          traps: [
            {
              spec: { type: "number", value: 25 },
              feedback: "{{1 km^2 = 1,000^2 = 1,000,000 m^2}} — multiply by one million, not one thousand!",
            },
          ],
          hints: [
            "{{1 km = 1,000 m}}, so {{1 km^2 = 1,000^2 = 1,000,000 m^2}}.",
            "Multiply {{0.025}} by {{1,000,000}}.",
          ],
          solution: ["{{0.025 * 1,000,000 = 25,000 m^2}}."],
        },
        {
          id: "surface-area-volume-p2-q12",
          kind: "short",
          difficulty: "challenge",
          guideRef: "measurement-accuracy",
          question:
            "A rectangular tile has length {{8 cm}} and width {{5 cm}}, each measured to the nearest centimetre. Calculate the **upper bound** of its area in {{cm^2}}.",
          answer: { type: "number", value: 46.75, display: "46.75 cm²" },
          traps: [
            {
              spec: { type: "number", value: 40.5 },
              feedback: "You must find the upper bound of **each** side ({{8.5}} and {{5.5}}) before multiplying!",
            },
          ],
          hints: [
            "Upper bound of length = {{8.5 cm}}; upper bound of width = {{5.5 cm}}.",
            "Multiply {{8.5 * 5.5}}.",
          ],
          solution: [
            "Upper bounds: {{L_\"UB\" = 8.5 cm}}, {{W_\"UB\" = 5.5 cm}}.",
            "Upper bound of area = {{8.5 * 5.5 = 46.75 cm^2}}.",
          ],
        },
        {
          id: "surface-area-volume-p2-q13",
          kind: "short",
          difficulty: "challenge",
          guideRef: "measurement-accuracy",
          question:
            "Two poles have lengths {{12 cm}} and {{7 cm}}, each measured to the nearest centimetre. What is the **upper bound** of the **difference** between their lengths in cm?",
          answer: { type: "number", value: 6, display: "6 cm" },
          traps: [
            {
              spec: { type: "number", value: 5 },
              feedback: "Subtracting UB − UB gives {{12.5 - 7.5 = 5}} — to **maximise** a difference {{A - B}}, use {{UB(A) - LB(B)}}!",
            },
          ],
          hints: [
            "To make {{A - B}} as **large** as possible, make {{A}} as large as possible and {{B}} as **small** as possible.",
            "Compute {{12.5 - 6.5}}.",
          ],
          solution: [
            "Largest possible {{A = 12.5 cm}}; smallest possible {{B = 6.5 cm}}.",
            "Upper bound of difference = {{12.5 - 6.5 = 6 cm}}.",
          ],
        },
        {
          id: "surface-area-volume-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "cones-and-reverse-volume",
          marks: 3,
          question:
            "A cylinder and a cone both have base radius {{6 cm}} and perpendicular height {{9 cm}}. Calculate the exact volume of each solid in terms of {{pi}}, and state the simplest ratio of the cone's volume to the cylinder's volume.",
          hints: [
            "Use {{V = pi r^2 h}} for the cylinder and {{V = (1/3) pi r^2 h}} for the cone.",
            "Compare the two exact volumes to write the ratio in simplest form.",
          ],
          modelAnswer:
            "Cylinder volume = pi × 6^2 × 9 = 324pi cm^3. Cone volume = (1/3) × pi × 6^2 × 9 = 108pi cm^3. Dividing both by 108pi, the simplest ratio of cone volume to cylinder volume is 1 : 3.",
          markScheme: [
            {
              point: "Correct exact cylinder volume 324pi cm³",
              keywords: ["324pi", "324π", "324 pi"],
            },
            {
              point: "Correct exact cone volume 108pi cm³",
              keywords: ["108pi", "108π", "108 pi"],
            },
            {
              point: "Simplest ratio 1 : 3 (cone to cylinder)",
              keywords: ["1 : 3", "1:3", "one to three"],
            },
          ],
          commonError:
            "Writing the ratio backwards as 3 : 1 instead of cone : cylinder = 1 : 3.",
        },
        {
          id: "surface-area-volume-p2-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "area-volume-units",
          marks: 3,
          question:
            "An empty rectangular fish tank measures {{80 cm}} by {{50 cm}} by {{40 cm}}. Water is poured in at a steady rate of {{8 \"litres\"}} per minute. Showing every step clearly, calculate how many minutes it takes to fill the tank completely.",
          hints: [
            "First calculate the volume of the tank in {{cm^3}}.",
            "Convert {{cm^3}} to litres using {{1 \"litre\" = 1,000 cm^3}}, then divide by {{8}}.",
          ],
          modelAnswer:
            "Volume = 80 × 50 × 40 = 160,000 cm^3. Since 1 litre = 1,000 cm^3, the tank holds 160,000 / 1,000 = 160 litres. At 8 litres per minute, the time required is 160 / 8 = 20 minutes.",
          markScheme: [
            {
              point: "Calculates tank volume 160,000 cm³",
              keywords: ["160000", "160,000", "160 000"],
            },
            {
              point: "Converts correctly to 160 litres",
              keywords: ["160 litre", "160 l", "= 160"],
            },
            {
              point: "Divides by 8 to obtain 20 minutes",
              keywords: ["20 min", "20 minutes", "= 20"],
            },
          ],
          commonError:
            "Dividing 160,000 cm³ by 100 instead of 1,000 to get 1,600 litres.",
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 AoPS-style stretch problems, all difficulty: "challenge")
  // =========================================================================
  challenge: [
    {
      id: "surface-area-volume-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "cones-and-reverse-volume",
      strategy: "Unroll & connect 2D net to 3D solid",
      question:
        "A cardboard circle sector of radius {{10 cm}} and central angle {{216°}} is rolled up so its two straight radii meet seamlessly to form an open cone. Find the exact **volume** of this cone in terms of {{pi}} (type in terms of pi, e.g. `10pi`).",
      answer: { type: "expression", expr: "96pi", display: "{{96pi}} cm³" },
      traps: [
        {
          spec: { type: "expression", expr: "120pi" },
          feedback: "Careful! {{10 cm}} is the cone's **slant height** {{l}}, not its perpendicular height {{h}}.",
        },
      ],
      hints: [
        "When rolled into a cone, the sector's radius ({{10 cm}}) becomes the cone's **slant height** {{l}}.",
        "The sector's arc length becomes the cone's base circumference {{2pi r}}. Find the arc length {{(216/360) * 2 * pi * 10}} first!",
        "Once you find {{r = 6 cm}}, use Pythagoras {{h = sqrt(10^2 - 6^2)}} to get the perpendicular height {{h}}, then compute {{(1/3) pi r^2 h}}.",
      ],
      solution: [
        "Sector arc length = {{(216/360) * 2 * pi * 10 = (3/5) * 20pi = 12pi cm}}.",
        "This equals the cone's base circumference: {{2pi r = 12pi}} → {{r = 6 cm}}.",
        "The sector radius becomes the slant height {{l = 10 cm}}, so perpendicular height {{h = sqrt(10^2 - 6^2) = 8 cm}}.",
        "Cone volume = {{(1/3) * pi * 6^2 * 8 = 96pi cm^3}}.",
      ],
    },
    {
      id: "surface-area-volume-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "cones-and-reverse-volume",
      strategy: "Decompose into non-overlapping surfaces",
      question:
        "A solid grain silo consists of a cylinder of radius {{3 m}} and height {{8 m}} topped seamlessly by a cone of base radius {{3 m}} and perpendicular height {{4 m}}. Find the exact **total external surface area** of the solid silo (including its flat circular floor) in terms of {{pi}} (type in terms of pi, e.g. `10pi`).",
      answer: { type: "expression", expr: "72pi", display: "{{72pi}} m²" },
      traps: [
        {
          spec: { type: "expression", expr: "90pi" },
          feedback: "The circular join between the cylinder and the cone is **inside** the solid—do not count those two hidden circles!",
        },
        {
          spec: { type: "expression", expr: "84pi" },
          feedback: "{{84pi m^3}} is the silo's **volume**, not its surface area!",
        },
      ],
      hints: [
        "Only **outside** surfaces count: the flat circular floor + curved cylinder wall + curved cone roof.",
        "Find the cone's slant height using Pythagoras: {{l = sqrt(3^2 + 4^2)}}.",
        "Sum {{pi r^2 + 2pi r h_\"cyl\" + pi r l}}.",
      ],
      solution: [
        "Cone slant height {{l = sqrt(3^2 + 4^2) = 5 m}}.",
        "Flat circular floor = {{pi * 3^2 = 9pi m^2}}.",
        "Curved cylinder wall = {{2 * pi * 3 * 8 = 48pi m^2}}.",
        "Curved cone roof = {{pi * 3 * 5 = 15pi m^2}}.",
        "Total external surface area = {{9pi + 48pi + 15pi = 72pi m^2}}.",
      ],
    },
    {
      id: "surface-area-volume-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "prisms-cylinders",
      strategy: "Subtract the hollow core",
      question:
        "A hollow cylindrical metal pipe has length {{20 cm}}, outer radius {{5 cm}}, and inner radius {{3 cm}}. Find the exact **volume of metal** used to make the pipe in terms of {{pi}} (type in terms of pi, e.g. `10pi`).",
      answer: { type: "expression", expr: "320pi", display: "{{320pi}} cm³" },
      traps: [
        {
          spec: { type: "expression", expr: "80pi" },
          feedback: "Careful: {{R^2 - r^2 = 5^2 - 3^2 = 16}}, NOT {{(5 - 3)^2 = 4}}!",
        },
      ],
      hints: [
        "Think of the pipe as a prism whose cross-section is a circular ring (annulus).",
        "Cross-sectional area = {{pi R^2 - pi r^2 = pi(5^2 - 3^2)}}.",
        "Multiply the ring area by the length {{20 cm}}.",
      ],
      solution: [
        "Ring cross-sectional area = {{pi(5^2 - 3^2) = pi(25 - 9) = 16pi cm^2}}.",
        "Volume of metal = {{16pi * 20 = 320pi cm^3}}.",
      ],
    },
    {
      id: "surface-area-volume-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "cones-and-reverse-volume",
      strategy: "Conservation of displaced volume",
      question:
        "A solid metal cone of base radius {{6 cm}} and perpendicular height {{10 cm}} lies completely submerged in a wide cylindrical water tank of radius {{10 cm}}. The cone is lifted cleanly out of the water. By how many **centimetres** does the water level drop?",
      answer: { type: "number", value: 1.2, display: "1.2 cm" },
      traps: [
        {
          spec: { type: "number", value: 3.6 },
          feedback: "Remember the cone's volume has a {{1/3}} factor: {{(1/3) * pi * 6^2 * 10 = 120pi}}, not {{360pi}}!",
        },
      ],
      hints: [
        "The volume of the missing slice of water equals the volume of the cone removed.",
        "Find the exact volume of the cone: {{V = (1/3) * pi * 6^2 * 10}}.",
        "Set {{pi * 10^2 * d = V_\"cone\"}} and solve for the water-level drop {{d}}.",
      ],
      solution: [
        "Cone volume = {{(1/3) * pi * 6^2 * 10 = 120pi cm^3}}.",
        "The displaced cylinder of water has radius {{10 cm}} and height {{d}}: {{pi * 10^2 * d = 120pi}}.",
        "{{100d = 120}} → {{d = 1.2 cm}}.",
      ],
    },
    {
      id: "surface-area-volume-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "cones-and-reverse-volume",
      strategy: "Big solid minus removed top",
      question:
        "A large cone has base radius {{6 cm}} and perpendicular height {{12 cm}}. A smaller cone of base radius {{3 cm}} and perpendicular height {{6 cm}} is sliced cleanly off the top, leaving a **frustum**. Find the exact **volume of the frustum** in terms of {{pi}} (type in terms of pi, e.g. `10pi`).",
      answer: { type: "expression", expr: "126pi", display: "{{126pi}} cm³" },
      traps: [
        {
          spec: { type: "expression", expr: "72pi" },
          feedback: "Halving a cone's height cuts its volume to {{(1/2)^3 = 1/8}} (not {{1/2}}!), so the frustum keeps {{7/8}} of the original volume.",
        },
      ],
      hints: [
        "Volume of frustum = Volume of original big cone − Volume of removed small cone.",
        "Big cone volume = {{(1/3) * pi * 6^2 * 12}}.",
        "Small cone volume = {{(1/3) * pi * 3^2 * 6}}.",
      ],
      solution: [
        "Big cone volume = {{(1/3) * pi * 36 * 12 = 144pi cm^3}}.",
        "Small cone volume = {{(1/3) * pi * 9 * 6 = 18pi cm^3}}.",
        "Frustum volume = {{144pi - 18pi = 126pi cm^3}} (notice that is {{7/8}} of {{144pi}}!).",
      ],
    },
    {
      id: "surface-area-volume-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "measurement-accuracy",
      strategy: "Maximise a quotient: UB ÷ LB",
      question:
        "A sprinter runs {{100 m}} (measured to the nearest {{10 m}}) in {{12 s}} (measured to the nearest second). Calculate the **upper bound** of the sprinter's average speed in m/s, correct to **2 decimal places**.",
      answer: { type: "number", value: 9.13, tolerance: 0.005, display: "9.13 m/s" },
      traps: [
        {
          spec: { type: "number", value: 8.4, tolerance: 0.01 },
          feedback: "Dividing UB by UB ({{105 / 12.5}}) does NOT maximise a fraction — divide **UB of distance** by **LB of time**!",
        },
      ],
      hints: [
        "Average speed = distance ÷ time.",
        "To maximise a quotient, make the numerator as **large** as possible and the denominator as **small** as possible.",
        "Find {{d_\"UB\" = 105 m}} and {{t_\"LB\" = 11.5 s}}, then divide {{105 / 11.5}}.",
      ],
      solution: [
        "Distance error interval: {{95 <= d < 105 m}} → {{d_\"UB\" = 105 m}}.",
        "Time error interval: {{11.5 <= t < 12.5 s}} → {{t_\"LB\" = 11.5 s}}.",
        "Upper bound of speed = {{105 / 11.5 = 9.1304... ~= 9.13 m/s}} (to 2 d.p.).",
      ],
    },
    {
      id: "surface-area-volume-ch-q07",
      kind: "short",
      difficulty: "challenge",
      guideRef: "circle-sectors",
      strategy: "Difference of concentric sectors",
      question:
        "A curved garden path forms a {{120°}} sector ring between an inner radius of {{9 m}} and an outer radius of {{15 m}}. Find the exact **area** of the path in terms of {{pi}} (type in terms of pi, e.g. `10pi`).",
      answer: { type: "expression", expr: "48pi", display: "{{48pi}} m²" },
      traps: [
        {
          spec: { type: "expression", expr: "12pi" },
          feedback: "Careful: subtract the squares {{15^2 - 9^2 = 144}}, NOT {{(15 - 9)^2 = 36}}!",
        },
      ],
      hints: [
        "Area of the path = outer sector area − inner sector area.",
        "Factor out {{(120/360) pi}}: evaluate {{(1/3) pi (15^2 - 9^2)}}.",
      ],
      solution: [
        "Outer sector area = {{(1/3) * pi * 15^2 = 75pi m^2}}.",
        "Inner sector area = {{(1/3) * pi * 9^2 = 27pi m^2}}.",
        "Path area = {{75pi - 27pi = 48pi m^2}}.",
      ],
    },
    {
      id: "surface-area-volume-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "prisms-cylinders",
      strategy: "Set up an algebraic equation from geometry",
      marks: 3,
      question:
        "A solid cube of side length {{s cm}} has the special property that its total surface area (in {{cm^2}}) is numerically equal to its volume (in {{cm^3}}). Write down an equation in {{s}}, solve it to find {{s}}, and calculate the cube's volume.",
      hints: [
        "Write an expression in {{s}} for the total surface area of a cube ({{6}} square faces).",
        "Set it equal to the volume {{s^3}} and divide both sides by {{s^2}} (since {{s > 0}}).",
      ],
      modelAnswer:
        "Total surface area is 6s^2 and volume is s^3, so 6s^2 = s^3. Since s > 0, dividing both sides by s^2 gives s = 6 cm. Substituting back, the volume of the cube is 6^3 = 216 cm^3 (and surface area is also 6 × 36 = 216 cm^2).",
      markScheme: [
        {
          point: "Forms the equation 6s^2 = s^3",
          keywords: ["6s^2 = s^3", "6s² = s³", "s^3 = 6s^2", "s³ = 6s²"],
        },
        {
          point: "Solves for edge length s = 6 cm",
          keywords: ["s = 6", "6 cm", "side length 6", "edge length 6"],
        },
        {
          point: "Computes volume 216 cm³",
          keywords: ["216"],
        },
      ],
      commonError:
        "Writing 4s^2 = s^3 (counting only 4 faces of a cube instead of 6).",
    },
  ],
};
