import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "angles-bearings-m1",
    title: "MCQ Paper 1 — Parallel Lines, Polygons & Bearings Basics",
    questions: [
      {
        id: "angles-bearings-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "parallel-lines-angles",
        question: "Two parallel lines are cut by a transversal. One interior angle measures {{68°}}. What is the size of its **alternate** angle?",
        options: ["68°", "112°", "22°", "292°"],
        answerIndex: 0,
        hints: [
          "Recall the exact rule for alternate angles on parallel lines.",
          "Alternate angles (Z-shape) are equal — they do not sum to {{180°}}.",
        ],
        explanation:
          "Alternate angles on parallel lines are equal, so the alternate angle is also {{68°}}. Getting {{112°}} confuses alternate angles with co-interior angles.",
      },
      {
        id: "angles-bearings-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "parallel-lines-angles",
        question: "Two parallel lines are cut by a transversal. One interior angle measures {{73°}}. What is the size of its **co-interior (allied)** angle?",
        options: ["73°", "107°", "17°", "287°"],
        answerIndex: 1,
        hints: [
          "Co-interior angles lie between the parallel lines on the same side of the transversal.",
          "They add up to {{180°}}, so compute {{180° - 73°}}.",
        ],
        explanation:
          "Co-interior angles between parallel lines sum to {{180°}}, so the co-interior angle is {{180° - 73° = 107°}}. Choosing {{73°}} treats co-interior angles as equal.",
      },
      {
        id: "angles-bearings-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "parallel-lines-angles",
        question: "Which exact geometric reason proves that two angles sitting in the **same relative corner** at two parallel-line intersections are equal?",
        options: [
          "Alternate angles on parallel lines",
          "Co-interior angles on parallel lines",
          "Corresponding angles on parallel lines",
          "Vertically opposite intersecting angles",
        ],
        answerIndex: 2,
        hints: [
          "Think of translating one intersection straight down the transversal onto the other.",
          "Angles in matching positions are called corresponding angles (never write 'F-angles').",
        ],
        explanation:
          "Angles occupying matching corners at two parallel-line intersections are **corresponding angles**, which are always equal. Alternate angles sit on opposite sides between the parallels, and co-interior angles sum to {{180°}}.",
      },
      {
        id: "angles-bearings-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "parallel-lines-angles",
        question: "Two vertically opposite angles measure {{(3x + 12)°}} and {{78°}}. Find the value of {{x}}.",
        options: ["18", "24", "30", "22"],
        answerIndex: 3,
        hints: [
          "Vertically opposite angles are equal.",
          "Set up {{3x + 12 = 78}} and solve for {{x}}.",
        ],
        explanation:
          "Vertically opposite angles are equal, so {{3x + 12 = 78}} → {{3x = 66}} → {{x = 22}}. Getting {{30}} comes from adding {{12}} instead of subtracting {{12}}.",
      },
      {
        id: "angles-bearings-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "polygon-angles",
        question: "What is the sum of the **interior angles** of a hexagon ({{6}} sides)?",
        options: ["720°", "540°", "900°", "1080°"],
        answerIndex: 0,
        hints: [
          "Use the interior angle sum formula {{(n - 2) * 180°}}.",
          "A hexagon splits into {{6 - 2 = 4}} triangles.",
        ],
        explanation:
          "For {{n = 6}}, interior angle sum {{= (6 - 2) * 180° = 4 * 180° = 720°}}. Note {{540°}} is a pentagon and {{1080°}} is an octagon (and also what you get if you forget to subtract {{2}}!).",
      },
      {
        id: "angles-bearings-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "polygon-angles",
        question: "What is the sum of the **exterior angles** of an irregular {{15}}-sided convex polygon?",
        options: ["2340°", "360°", "540°", "2700°"],
        answerIndex: 1,
        hints: [
          "Imagine walking once around the outside of the polygon.",
          "Does the sum of exterior angles depend on the number of sides?",
        ],
        explanation:
          "The exterior angles of ANY convex polygon (regular or irregular, no matter how many sides) always sum to one full turn: {{360°}}. The value {{2340°}} is the interior angle sum.",
      },
      {
        id: "angles-bearings-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "polygon-angles",
        question: "Calculate the size of ONE **exterior angle** of a regular octagon ({{8}} sides).",
        options: ["36°", "40°", "45°", "135°"],
        answerIndex: 2,
        hints: [
          "All {{8}} exterior angles of a regular octagon are equal and sum to {{360°}}.",
          "Calculate {{360° / 8}}.",
        ],
        explanation:
          "One exterior angle of a regular octagon is {{360° / 8 = 45°}}. Note {{135°}} is the **interior** angle ({{180° - 45°}}).",
      },
      {
        id: "angles-bearings-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "polygon-angles",
        question: "Calculate the size of ONE **interior angle** of a regular decagon ({{10}} sides).",
        options: ["36°", "135°", "140°", "144°"],
        answerIndex: 3,
        hints: [
          "Find one exterior angle first: {{360° / 10 = 36°}}.",
          "Subtract the exterior angle from {{180°}}.",
        ],
        explanation:
          "Each exterior angle is {{360° / 10 = 36°}}, so each interior angle is {{180° - 36° = 144°}}.",
      },
      {
        id: "angles-bearings-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "three-figure-bearings",
        question: "What is the three-figure bearing for the compass direction **South-West (SW)**?",
        options: ["225°", "135°", "315°", "045°"],
        answerIndex: 0,
        hints: [
          "South is {{180°}} and West is {{270°}}.",
          "South-West sits halfway between {{180°}} and {{270°}}.",
        ],
        explanation:
          "South is {{180°}} and turning a further {{45°}} clockwise toward West gives {{180° + 45° = 225°}}. By comparison, {{135°}} is SE and {{315°}} is NW.",
      },
      {
        id: "angles-bearings-m1-q10",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "three-figure-bearings",
        question: "A ship sails at an angle of {{42°}} clockwise from North. How must this bearing be written?",
        options: ["42°", "042°", "318°", "132°"],
        answerIndex: 1,
        hints: [
          "Check the three rules of bearings: North, Clockwise, 3 digits.",
          "Any bearing under {{100°}} needs a leading zero.",
        ],
        explanation:
          "Three-figure bearings must always have three digits, so {{42°}} clockwise from North is written **{{042°}}**. Writing {{42°}} breaks the three-figure rule.",
      },
      {
        id: "angles-bearings-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "three-figure-bearings",
        question: "Boat {{B}} lies {{50°}} **anticlockwise** from North when viewed from Lighthouse {{A}}. What is the three-figure bearing of {{B}} from {{A}}?",
        options: ["050°", "130°", "310°", "230°"],
        answerIndex: 2,
        hints: [
          "Bearings are always measured **clockwise** from North.",
          "Subtract {{50°}} from a full circle ({{360°}}).",
        ],
        explanation:
          "Turning {{50°}} anticlockwise from North is the exact same direction as turning {{360° - 50° = 310°}} clockwise from North.",
      },
      {
        id: "angles-bearings-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "three-figure-bearings",
        question: "On a nautical chart with scale {{1}} cm represents {{5}} km, two islands are {{35}} km apart in real life. How far apart should they be drawn on the chart?",
        options: ["5 cm", "6 cm", "8 cm", "7 cm"],
        answerIndex: 3,
        hints: [
          "Divide the real distance in km by the number of km per cm.",
          "Compute {{35 / 5}}.",
        ],
        explanation:
          "At {{1}} cm = {{5}} km, a real distance of {{35}} km scales to {{35 / 5 = 7}} cm on the drawing.",
      },
      {
        id: "angles-bearings-m1-q13",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "back-bearings-angle-rules",
        question: "The bearing of {{B}} from {{A}} is {{075°}}. What is the bearing of {{A}} from {{B}}?",
        options: ["255°", "105°", "285°", "165°"],
        answerIndex: 0,
        hints: [
          "Since {{075° < 180°}}, add {{180°}} to find the back bearing.",
          "Compute {{75 + 180}}.",
        ],
        explanation:
          "Using the back-bearing rule ({{theta < 180°}} → add {{180°}}): {{075° + 180° = 255°}}. Choosing {{105°}} gives the co-interior angle at {{B}} instead of the clockwise bearing.",
      },
      {
        id: "angles-bearings-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "back-bearings-angle-rules",
        question: "The bearing of {{Q}} from {{P}} is {{230°}}. What is the three-figure bearing of {{P}} from {{Q}}?",
        options: ["040°", "050°", "130°", "410°"],
        answerIndex: 1,
        hints: [
          "Because {{230° >= 180°}}, subtract {{180°}} to stay within {{000°–359°}}.",
          "Remember to pad your answer to three digits!",
        ],
        explanation:
          "Since {{230° >= 180°}}, subtract {{180°}}: {{230° - 180° = 50°}}, written with three digits as **{{050°}}**. Adding {{180°}} produces {{410°}}, which exceeds {{360°}}.",
      },
      {
        id: "angles-bearings-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "polygon-angles",
        question: "Each exterior angle of a regular polygon measures {{30°}}. How many sides does the polygon have?",
        options: ["6", "10", "12", "15"],
        answerIndex: 2,
        hints: [
          "The exterior angles of a regular polygon are all equal and sum to {{360°}}.",
          "Use {{n = 360° / \"exterior angle\"}}.",
        ],
        explanation:
          "{{n = 360° / 30° = 12}} sides (a regular dodecagon). Dividing {{180°}} by {{30°}} mistakenly gives {{6}}.",
      },
    ],
  },
  {
    id: "angles-bearings-m2",
    title: "MCQ Paper 2 — Algebraic Angles, Polygons & Multi-Leg Bearings",
    questions: [
      {
        id: "angles-bearings-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "parallel-lines-angles",
        question: "Two **co-interior** angles between parallel lines measure {{(2x + 10)°}} and {{(3x + 20)°}}. Find the value of {{x}}.",
        options: ["10", "25", "36", "30"],
        answerIndex: 3,
        hints: [
          "Co-interior angles between parallel lines sum to {{180°}}.",
          "Solve {{(2x + 10) + (3x + 20) = 180}}.",
        ],
        explanation:
          "Setting the sum to {{180°}}: {{5x + 30 = 180}} → {{5x = 150}} → {{x = 30}} (angles are {{70°}} and {{110°}}). Setting them equal gives {{x = -10}}, which is wrong because co-interior angles are supplementary, not equal.",
      },
      {
        id: "angles-bearings-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "parallel-lines-angles",
        question: "Two **corresponding** angles on parallel lines measure {{(5x - 14)°}} and {{(2x + 31)°}}. Find the value of {{x}}.",
        options: ["15", "17", "23", "5"],
        answerIndex: 0,
        hints: [
          "Corresponding angles on parallel lines are equal.",
          "Solve {{5x - 14 = 2x + 31}}.",
        ],
        explanation:
          "Equating corresponding angles gives {{5x - 14 = 2x + 31}} → {{3x = 45}} → {{x = 15}} (both angles equal {{61°}}).",
      },
      {
        id: "angles-bearings-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "parallel-lines-angles",
        question: "A bent wire connects two horizontal parallel bars. The top segment makes an interior angle of {{42°}} with the top bar and the bottom segment makes an interior angle of {{53°}} with the bottom bar (pointing toward the bend). What is the interior bend angle?",
        options: ["85°", "95°", "11°", "138°"],
        answerIndex: 1,
        hints: [
          "Draw a helper line parallel to both bars straight through the bend vertex.",
          "Each half of the bend angle is alternate to one of the given angles, so add them!",
        ],
        explanation:
          "A helper parallel line splits the bend into two alternate angles of {{42°}} and {{53°}}, giving {{42° + 53° = 95°}}.",
      },
      {
        id: "angles-bearings-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "polygon-angles",
        question: "Four interior angles of an irregular pentagon are {{100°}}, {{112°}}, {{98°}}, and {{125°}}. Calculate the fifth interior angle.",
        options: ["95°", "115°", "105°", "125°"],
        answerIndex: 2,
        hints: [
          "First find the interior angle sum of a pentagon: {{(5 - 2) * 180° = 540°}}.",
          "Add the four known angles ({{435°}}) and subtract from {{540°}}.",
        ],
        explanation:
          "A pentagon's interior angles sum to {{540°}}. The four known angles add up to {{435°}}, leaving {{540° - 435° = 105°}}.",
      },
      {
        id: "angles-bearings-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "polygon-angles",
        question: "Each interior angle of a regular polygon is {{150°}}. How many sides does this polygon have?",
        options: ["8", "10", "15", "12"],
        answerIndex: 3,
        hints: [
          "Convert to the exterior angle first: {{180° - 150° = 30°}}.",
          "Now divide {{360°}} by the exterior angle.",
        ],
        explanation:
          "Exterior angle {{= 180° - 150° = 30°}}, so number of sides {{n = 360° / 30° = 12}}.",
      },
      {
        id: "angles-bearings-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "polygon-angles",
        question: "Calculate the sum of the interior angles of a {{9}}-sided polygon (nonagon).",
        options: ["1260°", "1080°", "1440°", "1620°"],
        answerIndex: 0,
        hints: [
          "Use {{(n - 2) * 180°}} with {{n = 9}}.",
          "Compute {{7 * 180°}}.",
        ],
        explanation:
          "For {{n = 9}}, interior angle sum {{= (9 - 2) * 180° = 7 * 180° = 1260°}}. Getting {{1620°}} multiplies {{9 * 180°}} without subtracting {{2}}.",
      },
      {
        id: "angles-bearings-m2-q07",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "polygon-angles",
        question: "Which of the following angles **cannot** be the interior angle of a regular polygon?",
        options: ["120°", "145°", "160°", "162°"],
        answerIndex: 1,
        hints: [
          "Find the corresponding exterior angle ({{180° - \"interior\"}}) for each option.",
          "A regular polygon exists only if the exterior angle divides {{360°}} into an exact whole number {{n}}.",
        ],
        explanation:
          "For {{145°}}, the exterior angle is {{180° - 145° = 35°}}, and {{360 / 35 = 10.29…}}, which is not a whole number of sides! The others give exact integers: {{n = 6, 18, 20}}.",
      },
      {
        id: "angles-bearings-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "three-figure-bearings",
        question: "Town {{B}} lies {{28°}} **south of due East** as seen from Town {{A}}. What is the three-figure bearing of {{B}} from {{A}}?",
        options: ["062°", "152°", "118°", "208°"],
        answerIndex: 2,
        hints: [
          "Due East is {{090°}}.",
          "Moving south of East turns further **clockwise**, so add {{28°}} to {{090°}}.",
        ],
        explanation:
          "Due East is {{090°}}. Turning {{28°}} clockwise toward South gives {{090° + 28° = 118°}}. Subtracting {{28°}} gives {{062°}} (north of East).",
      },
      {
        id: "angles-bearings-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "three-figure-bearings",
        question: "Island {{Y}} lies {{18°}} **west of due South** as seen from Port {{X}}. What is the three-figure bearing of {{Y}} from {{X}}?",
        options: ["162°", "252°", "018°", "198°"],
        answerIndex: 3,
        hints: [
          "Due South has bearing {{180°}}.",
          "Turning toward West from South continues clockwise, so add {{18°}} to {{180°}}.",
        ],
        explanation:
          "South is {{180°}}, and {{18°}} clockwise past South toward West gives {{180° + 18° = 198°}}.",
      },
      {
        id: "angles-bearings-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "back-bearings-angle-rules",
        question: "The bearing of Beacon {{M}} from Ship {{S}} is {{312°}}. What is the bearing of Ship {{S}} from Beacon {{M}}?",
        options: ["132°", "048°", "228°", "122°"],
        answerIndex: 0,
        hints: [
          "Since {{312° >= 180°}}, subtract {{180°}}.",
          "Compute {{312 - 180}}.",
        ],
        explanation:
          "Because {{312° >= 180°}}, the back bearing is {{312° - 180° = 132°}}. Notice the quadrants match opposites: NW ({{312°}}) reverses to SE ({{132°}}) ✓.",
      },
      {
        id: "angles-bearings-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "back-bearings-angle-rules",
        question: "The bearing of Village {{B}} from Village {{A}} is {{184°}}. Write the three-figure bearing of {{A}} from {{B}}.",
        options: ["040°", "004°", "356°", "176°"],
        answerIndex: 1,
        hints: [
          "Since {{184° >= 180°}}, subtract {{180°}}.",
          "Pad single-digit bearings with TWO leading zeros so there are three figures!",
        ],
        explanation:
          "{{184° - 180° = 4°}}, which must be written with three digits as **{{004°}}**.",
      },
      {
        id: "angles-bearings-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "back-bearings-angle-rules",
        question: "A ship sails from {{A}} to {{B}} on a bearing of {{050°}}, then turns at {{B}} to sail to {{C}} on a bearing of {{130°}}. Calculate the interior angle {{∠ABC}}.",
        options: ["80°", "130°", "100°", "110°"],
        answerIndex: 2,
        hints: [
          "Find the back bearing of {{A}} from {{B}}: {{050° + 180° = 230°}}.",
          "Subtract the bearing of {{C}} from {{B}} ({{130°}}) from {{230°}}.",
        ],
        explanation:
          "At {{B}}, the ray {{BA}} has bearing {{050° + 180° = 230°}} and the ray {{BC}} has bearing {{130°}}. Therefore {{∠ABC = 230° - 130° = 100°}}. (Check with co-interior angles: {{360° - (180° - 50°) - 130° = 100°}} ✓.)",
      },
      {
        id: "angles-bearings-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "back-bearings-angle-rules",
        question: "A light aircraft flies from {{P}} to {{Q}} on a bearing of {{115°}}, then turns at {{Q}} to fly to {{R}} on a bearing of {{220°}}. Find the interior angle {{∠PQR}}.",
        options: ["105°", "65°", "115°", "75°"],
        answerIndex: 3,
        hints: [
          "First find the back bearing of {{P}} from {{Q}}.",
          "Compute the clockwise angle between the two rays leaving {{Q}}: {{QP}} (bearing {{295°}}) and {{QR}} (bearing {{220°}}).",
        ],
        explanation:
          "The back bearing of {{P}} from {{Q}} is {{115° + 180° = 295°}}. Since {{QR}} leaves {{Q}} on bearing {{220°}}, the interior angle is {{∠PQR = 295° - 220° = 75°}}.",
      },
      {
        id: "angles-bearings-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "polygon-angles",
        question: "In a regular polygon, each interior angle is **{{4}} times** the size of each exterior angle. How many sides does the polygon have?",
        options: ["10", "8", "12", "15"],
        answerIndex: 0,
        hints: [
          "Let the exterior angle be {{e}}, so the interior angle is {{4e}}.",
          "Use {{4e + e = 180°}} to find {{e}}, then compute {{n = 360° / e}}.",
        ],
        explanation:
          "{{5e = 180°}} gives {{e = 36°}}, so {{n = 360° / 36° = 10}} sides (check: interior {{= 144° = 4 * 36°}} ✓).",
      },
      {
        id: "angles-bearings-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "parallel-lines-angles",
        question: "In triangle {{ABC}}, a straight line through {{C}} parallel to base {{AB}} forms an angle of {{44°}} with side {{AC}} on one side and {{61°}} with side {{BC}} on the other side. Find {{∠ACB}}.",
        options: ["105°", "75°", "65°", "85°"],
        answerIndex: 1,
        hints: [
          "The three angles at vertex {{C}} sit along the straight parallel line.",
          "Angles on a straight line sum to {{180°}}: calculate {{180° - 44° - 61°}}.",
        ],
        explanation:
          "Because the three angles at {{C}} lie on a straight line, {{∠ACB = 180° - 44° - 61° = 75°}} (this is also the classic proof that triangle angles sum to {{180°}}, since {{44°}} and {{61°}} are alternate to {{∠A}} and {{∠B}}!).",
      },
    ],
  },
  {
    id: "angles-bearings-m3",
    title: "MCQ Paper 3 — Exam Mastery & Multi-Step Geometry",
    questions: [
      {
        id: "angles-bearings-m3-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "parallel-lines-angles",
        question: "In parallelogram {{ABCD}}, {{∠DAB = 64°}}. What is the size of {{∠ABC}}?",
        options: ["64°", "126°", "116°", "26°"],
        answerIndex: 2,
        hints: [
          "Opposite sides {{AD}} and {{BC}} of a parallelogram are parallel.",
          "{{∠DAB}} and {{∠ABC}} are co-interior angles, so they sum to {{180°}}.",
        ],
        explanation:
          "Since {{AD ∥ BC}}, {{∠DAB}} and {{∠ABC}} are co-interior angles summing to {{180°}}, giving {{∠ABC = 180° - 64° = 116°}}.",
      },
      {
        id: "angles-bearings-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "parallel-lines-angles",
        question: "Lines {{AB}} and {{CD}} are parallel. Point {{E}} lies on {{AB}} and points {{F, G}} lie on {{CD}} with {{EF = EG}}. If the alternate angle {{∠AEF = 52°}} (with {{F}} between {{C}} and {{G}}), calculate {{∠FEG}}.",
        options: ["52°", "64°", "104°", "76°"],
        answerIndex: 3,
        hints: [
          "Use alternate angles on parallel lines to find {{∠EFG = 52°}}.",
          "Because {{EF = EG}}, triangle {{EFG}} is isosceles with equal base angles {{∠EFG = ∠EGF = 52°}}.",
        ],
        explanation:
          "Alternate angles give {{∠EFG = 52°}}. Because {{EF = EG}}, base angles of isosceles {{△EFG}} are equal, so {{∠EGF = 52°}}, leaving {{∠FEG = 180° - 52° - 52° = 76°}}.",
      },
      {
        id: "angles-bearings-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "polygon-angles",
        question: "The sum of the interior angles of a polygon is {{1440°}}. How many sides does the polygon have?",
        options: ["10", "8", "12", "9"],
        answerIndex: 0,
        hints: [
          "Set {{(n - 2) * 180 = 1440}}.",
          "Divide {{1440}} by {{180}} first to get {{n - 2}}, then add {{2}}!",
        ],
        explanation:
          "{{1440 / 180 = 8}}, so {{n - 2 = 8}} and {{n = 10}} sides. Forgetting to add {{2}} back gives the trap answer {{8}}.",
      },
      {
        id: "angles-bearings-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "polygon-angles",
        question: "A regular hexagon and a square share one complete side without overlapping. What is the angle of the remaining wedge gap at their shared vertex?",
        options: ["120°", "150°", "135°", "140°"],
        answerIndex: 1,
        hints: [
          "Find the interior angle of a regular hexagon ({{120°}}) and a square ({{90°}}).",
          "Angles around the shared vertex sum to {{360°}}.",
        ],
        explanation:
          "At the shared vertex, the hexagon contributes {{120°}} and the square contributes {{90°}}, leaving {{360° - 120° - 90° = 150°}} (an exact fit for a regular dodecagon!).",
      },
      {
        id: "angles-bearings-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "polygon-angles",
        question: "Two regular octagons are placed edge-to-edge on a flat floor without overlapping. What angle is left between their outer sides at the shared vertex?",
        options: ["45°", "60°", "90°", "135°"],
        answerIndex: 2,
        hints: [
          "First find one interior angle of a regular octagon: {{180° - 360° / 8 = 135°}}.",
          "Subtract both octagon angles from {{360°}}.",
        ],
        explanation:
          "Each regular octagon has interior angle {{135°}}. Two together take {{270°}}, leaving {{360° - 270° = 90°}} — which is why octagons and squares tile bathroom floors together!",
      },
      {
        id: "angles-bearings-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "polygon-angles",
        question: "Four exterior angles of an irregular pentagon are {{65°}}, {{78°}}, {{82°}}, and {{59°}}. Calculate the fifth **interior** angle of the pentagon.",
        options: ["76°", "84°", "114°", "104°"],
        answerIndex: 3,
        hints: [
          "All five exterior angles sum to {{360°}}, so find the fifth exterior angle first.",
          "Then subtract that exterior angle from {{180°}} to get the interior angle!",
        ],
        explanation:
          "The fifth exterior angle is {{360° - (65° + 78° + 82° + 59°) = 360° - 284° = 76°}}. Therefore the fifth **interior** angle is {{180° - 76° = 104°}}. Choosing {{76°}} stops one step too early.",
      },
      {
        id: "angles-bearings-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "three-figure-bearings",
        question: "From Base {{O}}, Camp {{A}} is {{6}} km due East ({{090°}}), and Camp {{B}} is {{6}} km due South of {{A}} ({{180°}} from {{A}}). What is the bearing of {{B}} from {{O}}?",
        options: ["135°", "045°", "225°", "120°"],
        answerIndex: 0,
        hints: [
          "Sketch {{OAB}}: {{OA = AB = 6}} km and {{∠OAB = 90°}}, making it a right-angled isosceles triangle.",
          "So {{∠AOB = 45°}} clockwise past East ({{090°}}).",
        ],
        explanation:
          "Because {{OA = AB}} with a {{90°}} turn at {{A}}, {{∠AOB = 45°}}. Turning {{45°}} clockwise from due East ({{090°}}) gives {{090° + 45° = 135°}} (due South-East).",
      },
      {
        id: "angles-bearings-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "three-figure-bearings",
        question: "A drone starts flying on a bearing of {{340°}} and rotates {{55°}} **clockwise**. What is its new three-figure bearing?",
        options: ["285°", "035°", "025°", "055°"],
        answerIndex: 1,
        hints: [
          "Add {{55°}} to {{340°}}.",
          "Whenever a clockwise bearing crosses {{360°}}, subtract {{360°}} and write three digits.",
        ],
        explanation:
          "{{340° + 55° = 395°}}, which wraps past North ({{360°}}) to {{395° - 360° = 35°}}, written as **{{035°}}**. Getting {{285°}} turned anticlockwise instead of clockwise.",
      },
      {
        id: "angles-bearings-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "back-bearings-angle-rules",
        question: "The bearing of Station {{B}} from Station {{A}} is {{148°}}. What is the acute **co-interior** angle formed between the North line at {{B}} and the line segment {{BA}}?",
        options: ["328°", "148°", "32°", "58°"],
        answerIndex: 2,
        hints: [
          "The North lines at {{A}} and {{B}} are parallel.",
          "Co-interior angles sum to {{180°}}: compute {{180° - 148°}}.",
        ],
        explanation:
          "Because the North lines at {{A}} and {{B}} are parallel, the co-interior angle at {{B}} is {{180° - 148° = 32°}}. Note {{328°}} is the back bearing of {{A}} from {{B}}.",
      },
      {
        id: "angles-bearings-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "back-bearings-angle-rules",
        question: "Three buoys {{A, B, C}} satisfy {{AB = AC}}. From {{A}}, the bearing of {{B}} is {{040°}} and the bearing of {{C}} is {{110°}}. Calculate the bearing of {{C}} from {{B}}.",
        options: ["110°", "145°", "275°", "165°"],
        answerIndex: 3,
        hints: [
          "First find {{∠BAC = 110° - 40° = 70°}}.",
          "Because {{AB = AC}}, base angles are equal: {{∠ABC = (180° - 70°) / 2 = 55°}}.",
          "Find the back bearing of {{A}} from {{B}} ({{220°}}) and subtract {{55°}} (turning anticlockwise from {{BA}} to {{BC}}).",
        ],
        explanation:
          "{{∠BAC = 70°}}, so in isosceles {{△ABC}}, {{∠ABC = (180° - 70°) / 2 = 55°}}. At {{B}}, the bearing of {{A}} is {{040° + 180° = 220°}}, and {{BC}} sits {{55°}} anticlockwise from {{BA}}, giving {{220° - 55° = 165°}}.",
      },
      {
        id: "angles-bearings-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "back-bearings-angle-rules",
        question: "A ship sails from {{P}} to {{Q}} on bearing {{070°}} and then sails an equal distance from {{Q}} to {{R}} on bearing {{190°}} (so {{PQ = QR}}). Calculate the bearing of {{P}} from {{R}}.",
        options: ["310°", "070°", "290°", "320°"],
        answerIndex: 0,
        hints: [
          "Find {{∠PQR}}: back bearing of {{P}} from {{Q}} is {{250°}}, so {{∠PQR = 250° - 190° = 60°}}.",
          "With {{PQ = QR}} and {{∠PQR = 60°}}, {{△PQR}} is equilateral ({{∠QRP = 60°}})!",
          "Back bearing of {{Q}} from {{R}} is {{010°}}; turn {{60°}} anticlockwise from {{010°}} to face {{P}}.",
        ],
        explanation:
          "Back bearing of {{P}} from {{Q}} is {{250°}}, giving {{∠PQR = 250° - 190° = 60°}}. Because {{PQ = QR}}, {{△PQR}} is equilateral, so {{∠QRP = 60°}}. At {{R}}, {{RQ}} has bearing {{190° - 180° = 010°}}, and turning {{60°}} anticlockwise to {{RP}} gives {{010° - 60° + 360° = 310°}}.",
      },
      {
        id: "angles-bearings-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "polygon-angles",
        question: "The four exterior angles of a convex quadrilateral are {{x}}, {{2x}}, {{3x}}, and {{4x}}. Find the size of the **smallest interior** angle of the quadrilateral.",
        options: ["144°", "36°", "72°", "108°"],
        answerIndex: 1,
        hints: [
          "Exterior angles sum to {{360°}}, so solve {{x + 2x + 3x + 4x = 360°}}.",
          "The smallest interior angle pairs with the LARGEST exterior angle ({{4x}}).",
        ],
        explanation:
          "{{10x = 360°}} gives {{x = 36°}}. The largest exterior angle is {{4x = 144°}}, so the smallest interior angle is {{180° - 144° = 36°}}.",
      },
      {
        id: "angles-bearings-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "parallel-lines-angles",
        question: "Two co-interior angles between parallel lines are in the ratio {{4 : 5}}. What is the positive difference between the two angles?",
        options: ["10°", "40°", "20°", "80°"],
        answerIndex: 2,
        hints: [
          "Co-interior angles sum to {{180°}}.",
          "Split {{180°}} into {{4 + 5 = 9}} equal parts, then find the difference ({{1}} part).",
        ],
        explanation:
          "Total parts {{= 4 + 5 = 9}}, so {{1}} part {{= 180° / 9 = 20°}}. The angles are {{80°}} and {{100°}}, whose difference is {{100° - 80° = 20°}}.",
      },
      {
        id: "angles-bearings-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "back-bearings-angle-rules",
        question: "An aircraft flies on a bearing of {{290°}} toward waypoint {{B}}, then turns {{135°}} **clockwise** at {{B}} to head for {{C}}. What is the bearing of {{C}} from {{B}}?",
        options: ["155°", "110°", "055°", "065°"],
        answerIndex: 3,
        hints: [
          "Continuing straight past {{B}} keeps the bearing {{290°}}.",
          "Add the clockwise turn {{135°}} and subtract {{360°}} when crossing North.",
        ],
        explanation:
          "{{290° + 135° = 425°}}, and subtracting a full {{360°}} circle gives {{425° - 360° = 65°}}, written as **{{065°}}**.",
      },
      {
        id: "angles-bearings-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "polygon-angles",
        question: "Each interior angle of a regular polygon measures {{168°}}. How many sides does this polygon have?",
        options: ["30", "24", "18", "36"],
        answerIndex: 0,
        hints: [
          "Find one exterior angle first: {{180° - 168° = 12°}}.",
          "Divide {{360°}} by {{12°}}.",
        ],
        explanation:
          "Exterior angle {{= 180° - 168° = 12°}}, so {{n = 360° / 12° = 30}} sides (check: {{(30 - 2) * 180° / 30 = 28 * 6° = 168°}} ✓).",
      },
    ],
  },
];
