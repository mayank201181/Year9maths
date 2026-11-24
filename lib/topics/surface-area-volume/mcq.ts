import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // MCQ PAPER 1 — Foundations & Core Fluency
  // =========================================================================
  {
    id: "surface-area-volume-m1",
    title: "MCQ Paper 1 — Sectors, Prisms, Cones & Bounds Basics",
    questions: [
      {
        id: "surface-area-volume-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "circle-sectors",
        question:
          "A sector of a circle has radius {{10 cm}} and central angle {{90°}}. What is its exact **arc length**?",
        options: ["{{2.5pi cm}}", "{{5pi cm}}", "{{10pi cm}}", "{{25pi cm}}"],
        answerIndex: 1,
        hints: [
          "What fraction of a full {{360°}} circle is {{90°}}?",
          "Multiply that fraction by the full circumference {{2pi r}}.",
        ],
        explanation:
          "Since {{90/360 = 1/4}}, the arc length is {{(1/4) * 2 * pi * 10 = 5pi cm}}. The distractor {{25pi cm}} comes from using the area formula {{pi r^2}} instead of circumference {{2pi r}}.",
      },
      {
        id: "surface-area-volume-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "circle-sectors",
        question:
          "A sector has radius {{6 cm}} and central angle {{60°}}. What is its exact **area**?",
        options: ["{{2pi cm^2}}", "{{3pi cm^2}}", "{{12pi cm^2}}", "{{6pi cm^2}}"],
        answerIndex: 3,
        hints: [
          "Simplify {{60/360}} first.",
          "Multiply that fraction by the full circle area {{pi * 6^2}}.",
        ],
        explanation:
          "{{60/360 = 1/6}}, so the sector area is {{(1/6) * pi * 6^2 = (1/6) * 36pi = 6pi cm^2}}. Using {{2pi r}} instead of {{pi r^2}} wrongly gives {{2pi cm^2}}.",
      },
      {
        id: "surface-area-volume-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "circle-sectors",
        question:
          "A quarter-circle sector has radius {{8 cm}}. What is its exact **total perimeter**?",
        options: [
          "{{4pi + 16 cm}}",
          "{{4pi + 8 cm}}",
          "{{16pi + 16 cm}}",
          "{{4pi cm}}",
        ],
        answerIndex: 0,
        hints: [
          "Find the curved arc length first: {{(90/360) * 2pi r}}.",
          "Remember that the total perimeter also includes the **two** straight radii.",
        ],
        explanation:
          "The curved arc is {{(1/4) * 2 * pi * 8 = 4pi cm}}. Adding both straight radii ({{8 + 8 = 16 cm}}) gives {{4pi + 16 cm}}. Stopping at {{4pi cm}} forgets both straight edges, and {{4pi + 8 cm}} only adds one radius.",
      },
      {
        id: "surface-area-volume-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "prisms-cylinders",
        question:
          "A closed cuboid measures {{8 cm}} by {{5 cm}} by {{4 cm}}. What is its **total surface area**?",
        options: ["{{92 cm^2}}", "{{160 cm^2}}", "{{184 cm^2}}", "{{200 cm^2}}"],
        answerIndex: 2,
        hints: [
          "A cuboid has 3 pairs of opposite rectangular faces.",
          "Calculate {{2(lw + lh + wh)}} carefully.",
        ],
        explanation:
          "The three distinct face areas are {{8 * 5 = 40}}, {{8 * 4 = 32}}, and {{5 * 4 = 20}}. Doubling their sum gives {{2(40 + 32 + 20) = 2 * 92 = 184 cm^2}}. Notice {{160}} is the volume and {{92}} forgets to double the three faces.",
      },
      {
        id: "surface-area-volume-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "prisms-cylinders",
        question:
          "A triangular prism has a triangular cross-section of base {{6 cm}} and perpendicular height {{5 cm}}. Its length is {{11 cm}}. What is its **volume**?",
        options: ["{{132 cm^3}}", "{{165 cm^3}}", "{{220 cm^3}}", "{{330 cm^3}}"],
        answerIndex: 1,
        hints: [
          "First find the area of the triangular cross-section using {{(1/2)bh}}.",
          "Multiply the cross-sectional area by the length of the prism.",
        ],
        explanation:
          "Cross-sectional area = {{(1/2) * 6 * 5 = 15 cm^2}}, so Volume = {{15 * 11 = 165 cm^3}}. The tempting distractor {{330 cm^3}} forgets the {{1/2}} in the triangle area formula.",
      },
      {
        id: "surface-area-volume-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "prisms-cylinders",
        question:
          "A cylinder has base radius {{3 cm}} and height {{10 cm}}. What is its exact **volume**?",
        options: ["{{90pi cm^3}}", "{{60pi cm^3}}", "{{30pi cm^3}}", "{{180pi cm^3}}"],
        answerIndex: 0,
        hints: [
          "Volume of a cylinder is cross-sectional area × height = {{pi r^2 h}}.",
          "Square the radius {{3}} before multiplying by {{10}}.",
        ],
        explanation:
          "{{V = pi * 3^2 * 10 = 90pi cm^3}}. Calculating {{2pi r h}} wrongly gives the curved surface area {{60pi}}, while forgetting to square {{r}} gives {{30pi}}.",
      },
      {
        id: "surface-area-volume-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cones-and-reverse-volume",
        question:
          "A cone has base radius {{3 cm}} and perpendicular height {{7 cm}}. What is its exact **volume**?",
        options: ["{{63pi cm^3}}", "{{42pi cm^3}}", "{{7pi cm^3}}", "{{21pi cm^3}}"],
        answerIndex: 3,
        hints: [
          "Recall that a cone has **one-third** the volume of the matching cylinder.",
          "Evaluate {{(1/3) * pi * 3^2 * 7}}.",
        ],
        explanation:
          "{{V = (1/3) * pi * 3^2 * 7 = (1/3) * 63pi = 21pi cm^3}}. Forgetting the {{1/3}} factor produces the cylinder volume {{63pi cm^3}}.",
      },
      {
        id: "surface-area-volume-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cones-and-reverse-volume",
        question:
          "A cone has base radius {{5 cm}} and perpendicular height {{12 cm}}. What is its exact **curved surface area**?",
        options: ["{{60pi cm^2}}", "{{90pi cm^2}}", "{{65pi cm^2}}", "{{100pi cm^2}}"],
        answerIndex: 2,
        hints: [
          "Curved surface area of a cone is {{pi r l}}, where {{l}} is the **slant** height.",
          "Find {{l}} using Pythagoras: {{l = sqrt(5^2 + 12^2)}}.",
        ],
        explanation:
          "Slant height {{l = sqrt(25 + 144) = sqrt(169) = 13 cm}}. Then {{\"CSA\" = pi * 5 * 13 = 65pi cm^2}}. Plugging perpendicular height {{12}} instead of slant height {{13}} wrongly yields {{60pi cm^2}}.",
      },
      {
        id: "surface-area-volume-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cones-and-reverse-volume",
        question:
          "A cuboid has volume {{420 cm^3}}, length {{10 cm}}, and width {{7 cm}}. What is its **height**?",
        options: ["{{5 cm}}", "{{6 cm}}", "{{7 cm}}", "{{8 cm}}"],
        answerIndex: 1,
        hints: [
          "Set up {{10 * 7 * h = 420}}.",
          "Divide the volume by the base area {{10 * 7}}.",
        ],
        explanation:
          "Base area = {{10 * 7 = 70 cm^2}}, so {{h = 420 / 70 = 6 cm}}. Always check by multiplying back: {{10 * 7 * 6 = 420}}.",
      },
      {
        id: "surface-area-volume-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "area-volume-units",
        question: "Convert {{2.5 m^2}} into {{cm^2}}.",
        options: ["{{25,000 cm^2}}", "{{250 cm^2}}", "{{2,500 cm^2}}", "{{250,000 cm^2}}"],
        answerIndex: 0,
        hints: [
          "Since {{1 m = 100 cm}}, how many {{cm^2}} are in {{1 m^2}}?",
          "Square the linear factor: {{100^2 = 10,000}}.",
        ],
        explanation:
          "{{1 m^2 = 100^2 = 10,000 cm^2}}, so {{2.5 * 10,000 = 25,000 cm^2}}. Multiplying by {{100}} instead of {{10,000}} causes the classic {{250 cm^2}} error.",
      },
      {
        id: "surface-area-volume-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "area-volume-units",
        question: "Convert {{4.2 \"litres\"}} into {{cm^3}}.",
        options: ["{{42 cm^3}}", "{{420 cm^3}}", "{{42,000 cm^3}}", "{{4,200 cm^3}}"],
        answerIndex: 3,
        hints: [
          "Remember that {{1 ml = 1 cm^3}}.",
          "How many millilitres are in {{1 \"litre\"}}?",
        ],
        explanation:
          "Because {{1 \"litre\" = 1,000 ml = 1,000 cm^3}}, multiply by {{1,000}}: {{4.2 * 1,000 = 4,200 cm^3}}. Multiplying by {{100}} gives {{420 cm^3}}.",
      },
      {
        id: "surface-area-volume-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "area-volume-units",
        question: "Convert {{6,500 mm^2}} into {{cm^2}}.",
        options: ["{{6.5 cm^2}}", "{{650 cm^2}}", "{{65 cm^2}}", "{{0.65 cm^2}}"],
        answerIndex: 2,
        hints: [
          "{{1 cm = 10 mm}}, so what is {{1 cm^2}} in {{mm^2}}?",
          "Convert from a smaller unit to a bigger unit by dividing by {{10^2 = 100}}.",
        ],
        explanation:
          "{{1 cm^2 = 10^2 = 100 mm^2}}, so {{6,500 / 100 = 65 cm^2}}. Dividing by {{10}} wrongly gives {{650}}, while dividing by {{1,000}} (the volume factor!) wrongly gives {{6.5}}.",
      },
      {
        id: "surface-area-volume-m1-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "measurement-accuracy",
        question:
          "A length {{x}} is measured as {{24 cm}} to the nearest centimetre. Which error interval is correct?",
        options: [
          "{{23.5 <= x < 24.5}}",
          "{{23.5 <= x <= 24.5}}",
          "{{23.5 <= x <= 24.49}}",
          "{{23.5 < x <= 24.5}}",
        ],
        answerIndex: 0,
        hints: [
          "Halve the rounding unit {{1 cm}} to get {{+- 0.5 cm}}.",
          "Does {{24.5}} round to {{24}} or to {{25}}?",
        ],
        explanation:
          "Values from {{23.5}} up to (but not including) {{24.5}} round to {{24}}, giving {{23.5 <= x < 24.5}}. Writing {{<= 24.5}} wrongly includes {{24.5}} (which rounds up to {{25}}), and {{<= 24.49}} excludes valid values like {{24.495}}.",
      },
      {
        id: "surface-area-volume-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "measurement-accuracy",
        question:
          "A mass {{m}} is recorded as {{6.8 kg}} correct to 1 decimal place. What is the error interval for {{m}}?",
        options: [
          "{{6.7 <= m < 6.9}}",
          "{{6.75 <= m < 6.85}}",
          "{{6.795 <= m < 6.805}}",
          "{{6.75 < m <= 6.85}}",
        ],
        answerIndex: 1,
        hints: [
          "1 decimal place means the rounding unit is {{0.1 kg}}.",
          "Subtract and add half of {{0.1}} (which is {{0.05}}).",
        ],
        explanation:
          "Half of {{0.1}} is {{0.05}}, so LB = {{6.8 - 0.05 = 6.75}} and UB = {{6.8 + 0.05 = 6.85}}, giving {{6.75 <= m < 6.85}}. Adding/subtracting the full unit {{0.1}} wrongly gives {{6.7}} to {{6.9}}.",
      },
      {
        id: "surface-area-volume-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "cones-and-reverse-volume",
        question:
          "A **solid** cone has base radius {{6 cm}} and perpendicular height {{8 cm}}. What is its exact **total surface area**?",
        options: ["{{60pi cm^2}}", "{{84pi cm^2}}", "{{96pi cm^2}}", "{{120pi cm^2}}"],
        answerIndex: 2,
        hints: [
          "Find the slant height {{l}} first using Pythagoras: {{l = sqrt(6^2 + 8^2)}}.",
          "Total surface area of a solid cone = circular base {{pi r^2}} + curved surface {{pi r l}}.",
        ],
        explanation:
          "Slant height {{l = sqrt(36 + 64) = 10 cm}}. Base area = {{pi * 6^2 = 36pi}} and curved surface area = {{pi * 6 * 10 = 60pi}}, so total SA = {{36pi + 60pi = 96pi cm^2}}. Stopping at {{60pi}} forgets the circular base.",
      },
    ],
  },

  // =========================================================================
  // MCQ PAPER 2 — Deeper Application & Reverse Problems
  // =========================================================================
  {
    id: "surface-area-volume-m2",
    title: "MCQ Paper 2 — Reverse Problems, Open Cylinders & Units",
    questions: [
      {
        id: "surface-area-volume-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "circle-sectors",
        question:
          "A sector of a circle has radius {{12 cm}} and central angle {{150°}}. What is its exact **area**?",
        options: ["{{10pi cm^2}}", "{{45pi cm^2}}", "{{60pi cm^2}}", "{{72pi cm^2}}"],
        answerIndex: 2,
        hints: [
          "Simplify {{150/360}} by dividing numerator and denominator by {{30}}.",
          "Multiply {{5/12}} by {{pi * 12^2}}.",
        ],
        explanation:
          "{{150/360 = 5/12}}, so area = {{(5/12) * 144pi = 5 * 12pi = 60pi cm^2}}. Computing {{(5/12) * 24pi}} gives the arc length {{10pi}} rather than the area.",
      },
      {
        id: "surface-area-volume-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "circle-sectors",
        question:
          "A semicircular badge has **diameter** {{14 cm}}. What is its total perimeter, correct to 1 decimal place?",
        options: ["{{36.0 cm}}", "{{22.0 cm}}", "{{58.0 cm}}", "{{29.0 cm}}"],
        answerIndex: 0,
        hints: [
          "A diameter of {{14 cm}} means the radius is {{7 cm}}.",
          "Total perimeter = curved semicircular arc {{pi r}} + straight diameter {{14 cm}}.",
        ],
        explanation:
          "With {{r = 7 cm}}, the curved arc is {{(1/2) * 2 * pi * 7 = 7pi ~= 21.991 cm}}. Adding the straight diameter {{14 cm}} gives {{35.991 ~= 36.0 cm}}. Forgetting the straight edge gives {{22.0 cm}}, and forgetting to halve the diameter gives {{58.0 cm}}.",
      },
      {
        id: "surface-area-volume-m2-q03",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "circle-sectors",
        question:
          "A sector of radius {{10 cm}} has exact area {{15pi cm^2}}. What is its central angle {{theta}}?",
        options: ["{{27°}}", "{{36°}}", "{{45°}}", "{{54°}}"],
        answerIndex: 3,
        hints: [
          "Compare the sector area {{15pi}} to the full circle area {{pi * 10^2 = 100pi}}.",
          "Set {{theta/360 = 15/100}} and solve for {{theta}}.",
        ],
        explanation:
          "Full circle area = {{100pi cm^2}}, so the sector is {{15/100 = 3/20}} of the circle. Therefore {{theta = (3/20) * 360° = 54°}}. Dividing {{360}} by {{10}} wrongly leads to {{36°}}.",
      },
      {
        id: "surface-area-volume-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "prisms-cylinders",
        question:
          "A solid cube has total surface area {{150 cm^2}}. What is its **volume**?",
        options: ["{{25 cm^3}}", "{{125 cm^3}}", "{{216 cm^3}}", "{{750 cm^3}}"],
        answerIndex: 1,
        hints: [
          "A cube has {{6}} identical square faces, so divide {{150}} by {{6}} to find one face area.",
          "Take the square root to get the side length, then cube it.",
        ],
        explanation:
          "Each square face has area {{150 / 6 = 25 cm^2}}, so the edge length is {{sqrt(25) = 5 cm}} and the volume is {{5^3 = 125 cm^3}}. Stopping at one face area gives {{25}}.",
      },
      {
        id: "surface-area-volume-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "prisms-cylinders",
        question:
          "A **closed** cylinder has radius {{6 cm}} and height {{5 cm}}. What is its exact **total surface area**?",
        options: ["{{60pi cm^2}}", "{{96pi cm^2}}", "{{132pi cm^2}}", "{{180pi cm^2}}"],
        answerIndex: 2,
        hints: [
          "A closed cylinder has **two** circular ends ({{2pi r^2}}) plus one curved wall ({{2pi r h}}).",
          "Calculate {{2 * pi * 6^2 + 2 * pi * 6 * 5}}.",
        ],
        explanation:
          "Two circular ends = {{2 * 36pi = 72pi cm^2}}; curved wall = {{2 * 6 * 5pi = 60pi cm^2}}; total = {{132pi cm^2}}. Including only one circular base wrongly gives {{96pi}}, while {{180pi}} is the volume.",
      },
      {
        id: "surface-area-volume-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "prisms-cylinders",
        question:
          "An **open-topped** cylindrical tin has radius {{4 cm}} and height {{9 cm}}. What is its exact external **surface area**?",
        options: ["{{72pi cm^2}}", "{{104pi cm^2}}", "{{144pi cm^2}}", "{{88pi cm^2}}"],
        answerIndex: 3,
        hints: [
          "An open-topped tin has only **one** circular base plus the curved wall.",
          "Use {{pi r^2 + 2pi r h}}.",
        ],
        explanation:
          "One circular base = {{pi * 4^2 = 16pi cm^2}} and curved wall = {{2 * pi * 4 * 9 = 72pi cm^2}}, totalling {{88pi cm^2}}. Using the closed-cylinder formula {{2pi r^2 + 2pi r h}} wrongly adds an extra lid to give {{104pi cm^2}}.",
      },
      {
        id: "surface-area-volume-m2-q07",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "cones-and-reverse-volume",
        question:
          "A cone has base radius {{6 cm}} and perpendicular height {{10 cm}}. What is its exact **volume**?",
        options: ["{{120pi cm^3}}", "{{360pi cm^3}}", "{{60pi cm^3}}", "{{20pi cm^3}}"],
        answerIndex: 0,
        hints: [
          "Use {{V = (1/3) pi r^2 h}}.",
          "Compute {{(1/3) * 36 * 10}}.",
        ],
        explanation:
          "{{V = (1/3) * pi * 6^2 * 10 = 12 * 10pi = 120pi cm^3}}. Forgetting the {{1/3}} gives the cylinder volume {{360pi cm^3}}.",
      },
      {
        id: "surface-area-volume-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cones-and-reverse-volume",
        question:
          "A cylinder has volume {{180pi cm^3}} and height {{5 cm}}. What is its base **radius**?",
        options: ["{{4 cm}}", "{{6 cm}}", "{{9 cm}}", "{{36 cm}}"],
        answerIndex: 1,
        hints: [
          "Write {{pi r^2 * 5 = 180pi}} and cancel {{pi}} from both sides.",
          "Solve {{5r^2 = 180}} for {{r^2}}, then take the square root.",
        ],
        explanation:
          "Dividing by {{5pi}} gives {{r^2 = 36}}, so {{r = 6 cm}}. Stopping before taking the square root leaves the trap answer {{36 cm}}.",
      },
      {
        id: "surface-area-volume-m2-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "cones-and-reverse-volume",
        question:
          "A cone has volume {{64pi cm^3}} and base radius {{4 cm}}. What is its perpendicular **height**?",
        options: ["{{4 cm}}", "{{8 cm}}", "{{12 cm}}", "{{16 cm}}"],
        answerIndex: 2,
        hints: [
          "Substitute into {{(1/3) pi r^2 h = 64pi}}.",
          "Multiply both sides by {{3}} before dividing by {{r^2 = 16}}.",
        ],
        explanation:
          "{{(1/3) * 16pi * h = 64pi}} gives {{16h = 192}}, so {{h = 12 cm}}. Forgetting the {{1/3}} factor wrongly gives {{64 / 16 = 4 cm}}.",
      },
      {
        id: "surface-area-volume-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "area-volume-units",
        question: "Convert {{0.08 m^3}} into {{cm^3}}.",
        options: ["{{8 cm^3}}", "{{800 cm^3}}", "{{8,000 cm^3}}", "{{80,000 cm^3}}"],
        answerIndex: 3,
        hints: [
          "{{1 m = 100 cm}}, so what is {{1 m^3}} in {{cm^3}}?",
          "Multiply {{0.08}} by {{100^3 = 1,000,000}}.",
        ],
        explanation:
          "{{1 m^3 = 100^3 = 1,000,000 cm^3}}, so {{0.08 * 1,000,000 = 80,000 cm^3}}. Using {{100^2 = 10,000}} wrongly gives {{800 cm^3}}.",
      },
      {
        id: "surface-area-volume-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "area-volume-units",
        question: "Convert {{350,000 cm^3}} into {{m^3}}.",
        options: ["{{0.35 m^3}}", "{{3.5 m^3}}", "{{35 m^3}}", "{{3,500 m^3}}"],
        answerIndex: 0,
        hints: [
          "Converting from {{cm^3}} to {{m^3}} means dividing by {{100^3}}.",
          "Divide {{350,000}} by {{1,000,000}}.",
        ],
        explanation:
          "{{350,000 / 1,000,000 = 0.35 m^3}}. Dividing by {{10,000}} (the area factor) wrongly yields {{35 m^3}}, and dividing by {{1,000}} gives {{350}} litres instead of {{m^3}}.",
      },
      {
        id: "surface-area-volume-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "area-volume-units",
        question:
          "A rectangular tank measures {{50 cm}} by {{40 cm}} by {{30 cm}}. How many **litres** of water does it hold when full?",
        options: ["{{6 \"litres\"}}", "{{60 \"litres\"}}", "{{600 \"litres\"}}", "{{6,000 \"litres\"}}"],
        answerIndex: 1,
        hints: [
          "Calculate the volume in {{cm^3}} first: {{50 * 40 * 30}}.",
          "Divide by {{1,000}} since {{1 \"litre\" = 1,000 cm^3}}.",
        ],
        explanation:
          "Volume = {{50 * 40 * 30 = 60,000 cm^3}}. Dividing by {{1,000 cm^3}} per litre gives {{60 \"litres\"}}. Dividing by {{100}} wrongly gives {{600 \"litres\"}}.",
      },
      {
        id: "surface-area-volume-m2-q13",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "measurement-accuracy",
        question:
          "A distance {{d}} is given as {{480 m}} to the nearest {{10 m}}. What is the error interval for {{d}}?",
        options: [
          "{{470 <= d < 490}}",
          "{{479.5 <= d < 480.5}}",
          "{{475 <= d <= 485}}",
          "{{475 <= d < 485}}",
        ],
        answerIndex: 3,
        hints: [
          "Half of the rounding unit {{10 m}} is {{5 m}}.",
          "Use {{<=}} on the lower bound and strict {{<}} on the upper bound.",
        ],
        explanation:
          "Subtracting and adding {{5 m}} gives {{475 <= d < 485}}. Adding/subtracting {{10 m}} wrongly widens the interval to {{470}}–{{490}}, and {{<= 485}} wrongly includes {{485}} (which rounds up to {{490}}).",
      },
      {
        id: "surface-area-volume-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "measurement-accuracy",
        question:
          "A sprint time {{t}} is recorded as {{3.25 s}} correct to 2 decimal places. What is the **lower bound** of {{t}}?",
        options: ["{{3.20 s}}", "{{3.24 s}}", "{{3.245 s}}", "{{3.249 s}}"],
        answerIndex: 2,
        hints: [
          "2 decimal places means the rounding unit is {{0.01 s}}.",
          "Halve {{0.01}} to get {{0.005}}, then subtract it from {{3.25}}.",
        ],
        explanation:
          "Half of {{0.01}} is {{0.005}}, so LB = {{3.25 - 0.005 = 3.245 s}}. Subtracting the full unit {{0.01}} wrongly gives {{3.24 s}}.",
      },
      {
        id: "surface-area-volume-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "prisms-cylinders",
        question:
          "A trapezoidal prism has parallel cross-section edges {{5 cm}} and {{9 cm}}, perpendicular height {{4 cm}}, and prism length {{15 cm}}. What is its **volume**?",
        options: ["{{420 cm^3}}", "{{840 cm^3}}", "{{280 cm^3}}", "{{540 cm^3}}"],
        answerIndex: 0,
        hints: [
          "Area of a trapezium = {{(1/2)(a + b)h}}.",
          "Multiply the trapezium cross-sectional area by the prism length {{15 cm}}.",
        ],
        explanation:
          "Trapezium area = {{(1/2)(5 + 9) * 4 = 7 * 4 = 28 cm^2}}. Volume = {{28 * 15 = 420 cm^3}}. Forgetting the {{1/2}} in the trapezium formula doubles the answer to {{840 cm^3}}.",
      },
    ],
  },

  // =========================================================================
  // MCQ PAPER 3 — Exam-Style Multi-Step & Bounds Applications
  // =========================================================================
  {
    id: "surface-area-volume-m3",
    title: "MCQ Paper 3 — Compound Shapes, Melting Solids & Bounds",
    questions: [
      {
        id: "surface-area-volume-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "circle-sectors",
        question:
          "A circle has **diameter** {{16 cm}}. What is the exact arc length of a sector with central angle {{45°}}?",
        options: ["{{2pi cm}}", "{{4pi cm}}", "{{8pi cm}}", "{{16pi cm}}"],
        answerIndex: 0,
        hints: [
          "Simplify {{45/360}} first.",
          "Full circumference is {{pi d = 16pi cm}}.",
        ],
        explanation:
          "{{45/360 = 1/8}} and full circumference = {{pi d = 16pi cm}}, so arc length = {{(1/8) * 16pi = 2pi cm}}. Treating the diameter {{16}} as the radius doubles the answer to {{4pi cm}}.",
      },
      {
        id: "surface-area-volume-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "circle-sectors",
        question:
          "A sector has radius {{12 cm}} and central angle {{120°}}. What is its **total perimeter** to 1 decimal place?",
        options: ["{{25.1 cm}}", "{{37.1 cm}}", "{{49.1 cm}}", "{{74.3 cm}}"],
        answerIndex: 2,
        hints: [
          "Arc length = {{(120/360) * 2 * pi * 12 = 8pi cm}}.",
          "Add both straight radii ({{2 * 12 = 24 cm}}) before rounding.",
        ],
        explanation:
          "Arc = {{(1/3) * 24pi = 8pi ~= 25.133 cm}}. Adding {{2 * 12 = 24 cm}} gives {{49.133 ~= 49.1 cm}}. Stopping at the arc length gives {{25.1 cm}}, and adding only one radius gives {{37.1 cm}}.",
      },
      {
        id: "surface-area-volume-m3-q03",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "circle-sectors",
        question:
          "A windscreen wiper clears a {{90°}} sector between inner radius {{6 cm}} and outer radius {{10 cm}}. What is the exact **shaded area** cleared?",
        options: ["{{4pi cm^2}}", "{{16pi cm^2}}", "{{25pi cm^2}}", "{{64pi cm^2}}"],
        answerIndex: 1,
        hints: [
          "Subtract the smaller {{90°}} sector from the larger {{90°}} sector.",
          "Evaluate {{(90/360) * pi * (10^2 - 6^2)}}.",
        ],
        explanation:
          "Shaded area = {{(1/4)pi(10^2 - 6^2) = (1/4)pi(100 - 36) = (1/4) * 64pi = 16pi cm^2}}. Computing {{(1/4)pi(10 - 6)^2}} wrongly gives {{4pi cm^2}} because {{10^2 - 6^2 != (10 - 6)^2}}.",
      },
      {
        id: "surface-area-volume-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "prisms-cylinders",
        question:
          "A right triangular prism has cross-section sides {{3 cm}}, {{4 cm}}, and {{5 cm}} (right angle between {{3}} and {{4}}) and length {{10 cm}}. What is its **total surface area**?",
        options: ["{{60 cm^2}}", "{{120 cm^2}}", "{{126 cm^2}}", "{{132 cm^2}}"],
        answerIndex: 3,
        hints: [
          "Find the area of the **two** triangular ends first: {{2 * (1/2) * 3 * 4}}.",
          "Add the three rectangular side faces: {{(3 + 4 + 5) * 10}}.",
        ],
        explanation:
          "Two triangles = {{2 * 6 = 12 cm^2}}; three rectangular faces = {{(3 + 4 + 5) * 10 = 120 cm^2}}; total SA = {{132 cm^2}}. Counting only one triangle gives {{126 cm^2}}, and {{60}} is the volume.",
      },
      {
        id: "surface-area-volume-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "prisms-cylinders",
        question:
          "An L-shaped prism of length {{10 cm}} has a cross-section formed by cutting a {{5 cm * 3 cm}} rectangle out of an {{8 cm * 6 cm}} rectangle. What is its **volume**?",
        options: ["{{330 cm^3}}", "{{480 cm^3}}", "{{630 cm^3}}", "{{150 cm^3}}"],
        answerIndex: 0,
        hints: [
          "Find the cross-sectional area by subtraction: {{(8 * 6) - (5 * 3)}}.",
          "Multiply the cross-sectional area by the length {{10 cm}}.",
        ],
        explanation:
          "Cross-sectional area = {{48 - 15 = 33 cm^2}}, so Volume = {{33 * 10 = 330 cm^3}}. Adding the cutout instead of subtracting wrongly gives {{630 cm^3}}.",
      },
      {
        id: "surface-area-volume-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "prisms-cylinders",
        question:
          "A cylinder has **diameter** {{10 cm}} and height {{8 cm}}. What is its exact **volume**?",
        options: ["{{800pi cm^3}}", "{{200pi cm^3}}", "{{160pi cm^3}}", "{{80pi cm^3}}"],
        answerIndex: 1,
        hints: [
          "Halve the diameter first: {{r = 10 / 2 = 5 cm}}.",
          "Substitute {{r = 5}} and {{h = 8}} into {{V = pi r^2 h}}.",
        ],
        explanation:
          "With {{r = 5 cm}}, {{V = pi * 5^2 * 8 = 200pi cm^3}}. Using the diameter {{10}} instead of the radius {{5}} inflates the volume by a factor of {{4}} to {{800pi cm^3}}.",
      },
      {
        id: "surface-area-volume-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "cones-and-reverse-volume",
        question:
          "A cone has base radius {{9 cm}} and **slant height** {{15 cm}}. What is its exact **volume**?",
        options: ["{{405pi cm^3}}", "{{972pi cm^3}}", "{{324pi cm^3}}", "{{135pi cm^3}}"],
        answerIndex: 2,
        hints: [
          "Cone volume needs the **perpendicular** height {{h}}, not the slant height {{15 cm}}!",
          "Use Pythagoras: {{h = sqrt(15^2 - 9^2)}}, then evaluate {{(1/3) pi r^2 h}}.",
        ],
        explanation:
          "Perpendicular height {{h = sqrt(225 - 81) = sqrt(144) = 12 cm}}. Then {{V = (1/3) * pi * 9^2 * 12 = 27 * 12pi = 324pi cm^3}}. Using slant height {{15}} directly wrongly gives {{405pi cm^3}}.",
      },
      {
        id: "surface-area-volume-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cones-and-reverse-volume",
        question:
          "A triangular prism has volume {{216 cm^3}}. Its triangular cross-section has base {{6 cm}} and perpendicular height {{8 cm}}. What is the **length** of the prism?",
        options: ["{{4.5 cm}}", "{{6 cm}}", "{{12 cm}}", "{{9 cm}}"],
        answerIndex: 3,
        hints: [
          "Find the cross-sectional area: {{(1/2) * 6 * 8 = 24 cm^2}}.",
          "Divide the volume {{216}} by the cross-sectional area.",
        ],
        explanation:
          "Cross-sectional area = {{(1/2) * 6 * 8 = 24 cm^2}}, so length = {{216 / 24 = 9 cm}}. Forgetting the {{1/2}} in the triangle area halves the length to {{4.5 cm}}.",
      },
      {
        id: "surface-area-volume-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "cones-and-reverse-volume",
        question:
          "A solid wax cone of radius {{6 cm}} and perpendicular height {{15 cm}} is melted and recast into a cylinder of the **same radius** {{6 cm}}. What is the height of the cylinder?",
        options: ["{{5 cm}}", "{{15 cm}}", "{{45 cm}}", "{{7.5 cm}}"],
        answerIndex: 0,
        hints: [
          "Melting preserves volume: set {{V_\"cone\" = V_\"cylinder\"}}.",
          "Compare {{(1/3) pi r^2 (15)}} with {{pi r^2 h}}—both have the same {{pi r^2}}!",
        ],
        explanation:
          "Setting {{(1/3) pi r^2 (15) = pi r^2 h}} and cancelling {{pi r^2}} gives {{h = 15 / 3 = 5 cm}}. Since a cone has one-third the volume of a same-base cylinder, the cylinder needs only one-third the height.",
      },
      {
        id: "surface-area-volume-m3-q10",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "area-volume-units",
        question: "Convert {{2.4 m^3}} into **litres**.",
        options: ["{{240 \"litres\"}}", "{{2,400 \"litres\"}}", "{{24,000 \"litres\"}}", "{{2,400,000 \"litres\"}}"],
        answerIndex: 1,
        hints: [
          "{{1 m^3 = 1,000,000 cm^3}} and {{1 \"litre\" = 1,000 cm^3}}.",
          "So how many litres are in {{1 m^3}}?",
        ],
        explanation:
          "{{1 m^3 = 1,000 \"litres\"}}, so {{2.4 * 1,000 = 2,400 \"litres\"}}. Multiplying by {{1,000,000}} gives {{cm^3}} (millilitres), not litres.",
      },
      {
        id: "surface-area-volume-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "area-volume-units",
        question: "Convert {{0.004 km^2}} into {{m^2}}.",
        options: ["{{4 m^2}}", "{{400 m^2}}", "{{4,000 m^2}}", "{{40,000 m^2}}"],
        answerIndex: 2,
        hints: [
          "{{1 km = 1,000 m}}, so {{1 km^2 = 1,000^2 = 1,000,000 m^2}}.",
          "Multiply {{0.004}} by {{1,000,000}}.",
        ],
        explanation:
          "{{0.004 * 1,000,000 = 4,000 m^2}}. Multiplying by {{1,000}} instead of {{1,000^2}} wrongly leaves {{4 m^2}}.",
      },
      {
        id: "surface-area-volume-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "area-volume-units",
        question: "Convert {{18,000 cm^2}} into {{m^2}}.",
        options: ["{{180 m^2}}", "{{18 m^2}}", "{{0.18 m^2}}", "{{1.8 m^2}}"],
        answerIndex: 3,
        hints: [
          "There are {{100^2 = 10,000 cm^2}} in {{1 m^2}}.",
          "Divide {{18,000}} by {{10,000}}.",
        ],
        explanation:
          "{{18,000 / 10,000 = 1.8 m^2}}. Dividing by {{100}} wrongly gives {{180 m^2}}, and dividing by {{1,000}} wrongly gives {{18 m^2}}.",
      },
      {
        id: "surface-area-volume-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "measurement-accuracy",
        question:
          "A town's population {{P}} is rounded to {{6,000}} correct to **1 significant figure**. What is the error interval for {{P}}?",
        options: [
          "{{5,995 <= P < 6,005}}",
          "{{5,950 <= P < 6,050}}",
          "{{5,500 <= P < 6,500}}",
          "{{5,000 <= P < 7,000}}",
        ],
        answerIndex: 2,
        hints: [
          "For 1 significant figure in {{6,000}}, the rounding unit is {{1,000}}.",
          "Halve {{1,000}} to get {{500}}, then subtract and add.",
        ],
        explanation:
          "Rounding to 1 s.f. means rounding to the nearest {{1,000}}, so half-unit = {{500}}, giving {{5,500 <= P < 6,500}}. Using {{+- 50}} corresponds to 2 s.f. (nearest {{100}}).",
      },
      {
        id: "surface-area-volume-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "measurement-accuracy",
        question:
          "A rectangle has sides {{7 cm}} and {{4 cm}}, each measured to the nearest centimetre. What is the **upper bound** of its perimeter?",
        options: ["{{22 cm}}", "{{24 cm}}", "{{23 cm}}", "{{24.5 cm}}"],
        answerIndex: 1,
        hints: [
          "Find the upper bound of **each** side: {{7.5 cm}} and {{4.5 cm}}.",
          "Use the perimeter formula {{2(L + W)}} with both upper bounds.",
        ],
        explanation:
          "Upper bounds are {{7.5 cm}} and {{4.5 cm}}, so upper bound of perimeter = {{2(7.5 + 4.5) = 2 * 12 = 24 cm}}. Adding {{0.5}} only once to {{22 cm}} wrongly gives {{22.5 cm}} or {{23 cm}}.",
      },
      {
        id: "surface-area-volume-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "measurement-accuracy",
        question:
          "A rectangle measures {{10 cm}} by {{6 cm}}, each to the nearest centimetre. What is the **lower bound** of its area?",
        options: ["{{59.5 cm^2}}", "{{54.0 cm^2}}", "{{57.0 cm^2}}", "{{52.25 cm^2}}"],
        answerIndex: 3,
        hints: [
          "Find the lower bound of **both** the length and the width.",
          "Multiply {{9.5 * 5.5}}.",
        ],
        explanation:
          "Lower bounds are {{9.5 cm}} and {{5.5 cm}}, so lower bound of area = {{9.5 * 5.5 = 52.25 cm^2}}. Subtracting {{0.5}} from the nominal area {{60}} wrongly gives {{59.5 cm^2}}.",
      },
    ],
  },
];
