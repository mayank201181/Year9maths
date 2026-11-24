import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "transformations-similarity-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "reflection-translation",
      question: "Reflect the point {{(-4, 3)}} in the {{y}}-axis ({{x = 0}}). Write the coordinates of the image.",
      answer: { type: "list", values: [4, 3], ordered: true, display: "(4, 3)" },
      traps: [
        { spec: { type: "list", values: [-4, -3], ordered: true }, feedback: "That reflects in the x-axis (y = 0). Across the y-axis, flip the x-coordinate." },
      ],
      hints: ["The {{y}}-axis is vertical, so the {{y}}-coordinate stays {{3}} and {{x}} changes sign."],
      solution: ["Across {{x = 0}}, {{(x, y) -> (-x, y)}}, so {{(-4, 3) -> (4, 3)}}."],
    },
    {
      id: "transformations-similarity-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "reflection-translation",
      question: "Translate the point {{(2, -5)}} by the column vector {{(-6, 8)}}. Write the coordinates of the image.",
      answer: { type: "list", values: [-4, 3], ordered: true, display: "(−4, 3)" },
      traps: [
        { spec: { type: "list", values: [8, -13], ordered: true }, feedback: "Add the vector components rather than subtracting them." },
      ],
      hints: ["Add {{-6}} to the {{x}}-coordinate and {{+8}} to the {{y}}-coordinate."],
      solution: ["{{(2 + (-6), -5 + 8) = (-4, 3)}}."],
    },
    {
      id: "transformations-similarity-quiz-q03",
      kind: "mcq",
      difficulty: "core",
      guideRef: "reflection-translation",
      question: "What is the image of {{(5, -2)}} after a reflection in the line {{y = x}}?",
      options: ["{{(-5, 2)}}", "{{(2, -5)}}", "{{(-2, 5)}}", "{{(5, 2)}}"],
      answerIndex: 2,
      hints: [
        "Reflecting in {{y = x}} swaps {{x}} and {{y}} without changing their signs.",
        "Apply {{(x, y) -> (y, x)}} to {{(5, -2)}}.",
      ],
      explanation:
        "Swapping coordinates maps {{(5, -2)}} to {{(-2, 5)}}. Writing {{(2, -5)}} reflects in {{y = -x}} instead.",
    },
    {
      id: "transformations-similarity-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "rotation",
      question: "Rotate the point {{(2, 5)}} by {{90°}} clockwise about the origin {{(0, 0)}}. Write the coordinates of the image.",
      answer: { type: "list", values: [5, -2], ordered: true, display: "(5, −2)" },
      traps: [
        { spec: { type: "list", values: [-5, 2], ordered: true }, feedback: "That is 90° anticlockwise! For 90° clockwise about (0, 0), use (x, y) → (y, −x)." },
      ],
      hints: [
        "Recall the origin rule for {{90°}} clockwise: {{(x, y) -> (y, -x)}}.",
        "{{(2, 5)}} is in quadrant 1, so turning {{90°}} clockwise moves it to quadrant 4 {{(+, -)}}.",
      ],
      solution: ["Applying {{(x, y) -> (y, -x)}} to {{(2, 5)}} gives {{(5, -2)}}."],
    },
    {
      id: "transformations-similarity-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "rotation",
      question: "Rotate the point {{(4, 7)}} by {{180°}} about the centre {{C(1, 3)}}. Write the coordinates of the image.",
      answer: { type: "list", values: [-2, -1], ordered: true, display: "(−2, −1)" },
      traps: [
        { spec: { type: "list", values: [-4, -7], ordered: true }, feedback: "That rotates about the origin (0, 0) instead of centre C(1, 3)." },
      ],
      hints: [
        "Find the vector from centre {{C(1, 3)}} to {{(4, 7)}}: {{(3, 4)}}.",
        "Negate that vector to {{(-3, -4)}} and add it back onto centre {{C(1, 3)}}.",
      ],
      solution: [
        "Vector from {{C(1, 3)}} to {{(4, 7)}} is {{(4 - 1, 7 - 3) = (3, 4)}}.",
        "Rotate {{180°}}: {{(-3, -4)}}.",
        "Add to {{C(1, 3)}}: {{(1 - 3, 3 - 4) = (-2, -1)}}.",
      ],
    },
    {
      id: "transformations-similarity-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "enlargement",
      question: "Enlarge the point {{(4, 3)}} by scale factor {{3}} with centre of enlargement {{C(1, 1)}}. Write the image coordinates.",
      answer: { type: "list", values: [10, 7], ordered: true, display: "(10, 7)" },
      traps: [
        { spec: { type: "list", values: [12, 9], ordered: true }, feedback: "You enlarged from (0, 0) instead of centre C(1, 1). Find the vector from C first!" },
      ],
      hints: [
        "Find the vector from {{C(1, 1)}} to {{(4, 3)}}: {{(3, 2)}}.",
        "Multiply {{(3, 2)}} by {{3}} to get {{(9, 6)}}, then add onto centre {{C(1, 1)}}.",
      ],
      solution: [
        "Vector {{CP = (4 - 1, 3 - 1) = (3, 2)}}.",
        "Scale by {{3}}: {{(9, 6)}}.",
        "Add to {{C(1, 1)}}: {{(1 + 9, 1 + 6) = (10, 7)}}.",
      ],
    },
    {
      id: "transformations-similarity-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "enlargement",
      question: "Enlarge the point {{(11, 7)}} by fractional scale factor {{1/2}} from centre {{C(3, 1)}}. Write the image coordinates.",
      answer: { type: "list", values: [7, 4], ordered: true, display: "(7, 4)" },
      traps: [
        { spec: { type: "list", values: [4, 3], ordered: true }, feedback: "Don't forget to add the halved vector (4, 3) back onto centre C(3, 1)." },
      ],
      hints: [
        "Find the vector from {{C(3, 1)}} to {{(11, 7)}}: {{(8, 6)}}.",
        "Halve it to {{(4, 3)}} and add onto centre {{C(3, 1)}}.",
      ],
      solution: [
        "Vector {{CP = (11 - 3, 7 - 1) = (8, 6)}}.",
        "Multiply by {{1/2}}: {{(4, 3)}}.",
        "Add to {{C(3, 1)}}: {{(3 + 4, 1 + 3) = (7, 4)}}.",
      ],
    },
    {
      id: "transformations-similarity-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "congruence-similarity",
      question: "Two triangles both have side lengths {{6 cm}}, {{8 cm}}, and {{10 cm}}, with no angles marked. Which condition proves they are congruent?",
      options: ["SAS", "SSS", "ASA", "RHS"],
      answerIndex: 1,
      hints: [
        "Count which measurements are directly given in the question.",
        "All three pairs of corresponding sides are known to be equal.",
      ],
      explanation:
        "All three corresponding sides are equal ({{6 cm}}, {{8 cm}}, {{10 cm}}), which directly satisfies **SSS**. No right angle is marked, so SSS is the direct proof.",
    },
    {
      id: "transformations-similarity-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "congruence-similarity",
      question: "Two similar quadrilaterals have corresponding sides {{5 cm}} and {{12.5 cm}}. Another side on the smaller quadrilateral is {{8 cm}}. Find the corresponding side length on the larger quadrilateral (in cm).",
      answer: { type: "number", value: 20, display: "20 cm" },
      traps: [
        { spec: { type: "number", value: 15.5 }, feedback: "Similar shapes scale by multiplying, not adding the difference (12.5 − 5 = 7.5)." },
      ],
      hints: [
        "Find the linear scale factor {{k = 12.5 / 5}}.",
        "Multiply {{8 cm}} by {{k = 2.5}}.",
      ],
      solution: [
        "Scale factor {{k = 12.5 / 5 = 2.5}}.",
        "Corresponding length {{= 8 * 2.5 = 20 cm}}.",
      ],
    },
    {
      id: "transformations-similarity-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "rotation",
      marks: 3,
      question:
        "Triangle {{A}} has vertices {{(2, 1)}}, {{(4, 1)}} and {{(4, 2)}}. Triangle {{B}} has vertices {{(0, 3)}}, {{(0, 5)}} and {{(-1, 5)}}. Describe fully the single transformation that maps triangle {{A}} onto triangle {{B}}.",
      hints: [
        "Compare the shapes: the horizontal base of length {{2}} from {{(2, 1)}} to {{(4, 1)}} becomes a vertical edge from {{(0, 3)}} to {{(0, 5)}} — it turned by {{90°}}!",
        "Check orientation: going around {{(2,1) -> (4,1) -> (4,2)}} is anticlockwise, and {{(0,3) -> (0,5) -> (-1,5)}} is also anticlockwise, so it is a rotation, not a reflection.",
        "Test centre {{(0, 1)}}: vector {{(2, 0)}} turns {{90°}} anticlockwise to {{(0, 2)}}, landing on {{(0, 3)}}!",
      ],
      modelAnswer: "A rotation of 90° anticlockwise about the centre (0, 1).",
      markScheme: [
        { point: "Identifies the transformation as a rotation", keywords: ["rotation", "rotate", "rotated"] },
        { point: "States the correct angle and direction: 90° anticlockwise (or 270° clockwise)", keywords: ["90° anticlockwise", "90 anticlockwise", "90 degrees anticlockwise", "270° clockwise", "270 clockwise"] },
        { point: "States the centre of rotation as (0, 1)", keywords: ["(0, 1)", "(0,1)", "0, 1"] },
      ],
      commonError: "Forgetting either the direction (anticlockwise) or the centre of rotation (0, 1).",
    },
  ],
  papers: [
    {
      id: "transformations-similarity-p1",
      title: "Practice Paper 1 — Core Transformations & Proofs",
      questions: [
        {
          id: "transformations-similarity-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "reflection-translation",
          question: "Reflect the point {{(-3, 6)}} in the vertical line {{x = 2}}. Write the coordinates of its image.",
          answer: { type: "list", values: [7, 6], ordered: true, display: "(7, 6)" },
          traps: [
            { spec: { type: "list", values: [3, 6], ordered: true }, feedback: "That reflects in x = 0. Measure the distance from −3 to 2 (5 units), then go 5 units right of 2." },
          ],
          hints: ["{{-3}} is {{5}} units to the left of {{x = 2}}, so step {{5}} units to the right of {{2}}."],
          solution: ["{{x' = 2 + (2 - (-3)) = 7}}, {{y' = 6}}, giving {{(7, 6)}}."],
        },
        {
          id: "transformations-similarity-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "reflection-translation",
          question: "Reflect the point {{(4, -1)}} in the horizontal line {{y = 3}}. Write the image coordinates.",
          answer: { type: "list", values: [4, 7], ordered: true, display: "(4, 7)" },
          traps: [
            { spec: { type: "list", values: [4, 1], ordered: true }, feedback: "That reflects in y = 0. From y = −1 to y = 3 is 4 units, so step 4 units above y = 3." },
          ],
          hints: ["{{y = -1}} is {{4}} units below {{y = 3}}, so step {{4}} units above {{y = 3}}."],
          solution: ["{{x' = 4}}, {{y' = 3 + 4 = 7}}, giving {{(4, 7)}}."],
        },
        {
          id: "transformations-similarity-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "reflection-translation",
          question: "Reflect the point {{(-2, -7)}} in the diagonal line {{y = -x}}. Write the coordinates of the image.",
          answer: { type: "list", values: [7, 2], ordered: true, display: "(7, 2)" },
          traps: [
            { spec: { type: "list", values: [-7, -2], ordered: true }, feedback: "That is reflection in y = x. For y = −x, swap AND negate both coordinates." },
          ],
          hints: [
            "Apply the rule {{(x, y) -> (-y, -x)}}.",
            "Since both {{-2}} and {{-7}} are negative, negating them makes both positive!",
          ],
          solution: ["{{(-(-7), -(-2)) = (7, 2)}}."],
        },
        {
          id: "transformations-similarity-p1-q04",
          kind: "short",
          difficulty: "warmup",
          guideRef: "reflection-translation",
          question: "Translate the point {{(5, -4)}} by the column vector {{(-8, 9)}}. Write the coordinates of its image.",
          answer: { type: "list", values: [-3, 5], ordered: true, display: "(−3, 5)" },
          hints: ["Compute {{(5 - 8, -4 + 9)}}."],
          solution: ["{{(5 + (-8), -4 + 9) = (-3, 5)}}."],
        },
        {
          id: "transformations-similarity-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "reflection-translation",
          question: "A translation maps vertex {{(-1, 6)}} onto {{(5, -2)}}. Write the translation column vector as {{(dx, dy)}}.",
          answer: { type: "list", values: [6, -8], ordered: true, display: "(6, −8)" },
          traps: [
            { spec: { type: "list", values: [-6, 8], ordered: true }, feedback: "That's the reverse vector (Object − Image). Always calculate Image − Object." },
          ],
          hints: [
            "Calculate {{dx = x' - x}} and {{dy = y' - y}}.",
            "{{dx = 5 - (-1) = 6}} and {{dy = -2 - 6 = -8}}.",
          ],
          solution: ["{{dx = 5 - (-1) = 6}}, {{dy = -2 - 6 = -8}}, so the vector is {{(6, -8)}}."],
        },
        {
          id: "transformations-similarity-p1-q06",
          kind: "mcq",
          difficulty: "core",
          guideRef: "reflection-translation",
          question: "Point {{P(3, 8)}} is reflected onto {{P'(3, -2)}}. What is the equation of the mirror line?",
          options: ["{{x = 3}}", "{{y = 5}}", "{{y = 3}}", "{{y = 2}}"],
          answerIndex: 2,
          hints: [
            "Notice {{x = 3}} did not change, so the flip was purely vertical across a horizontal line {{y = b}}.",
            "The mirror line sits halfway between {{y = 8}} and {{y = -2}}: find {{(8 + (-2)) / 2}}.",
          ],
          explanation:
            "Since {{y}} changed from {{8}} to {{-2}} while {{x}} stayed {{3}}, the mirror line is horizontal at the midpoint {{y = (8 - 2)/2 = 3}}.",
        },
        {
          id: "transformations-similarity-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "rotation",
          question: "Rotate the point {{(-3, 4)}} by {{90°}} anticlockwise about the origin {{(0, 0)}}. Write the image coordinates.",
          answer: { type: "list", values: [-4, -3], ordered: true, display: "(−4, −3)" },
          traps: [
            { spec: { type: "list", values: [4, 3], ordered: true }, feedback: "That is 90° clockwise about (0, 0). Use (x, y) → (−y, x) for 90° anticlockwise." },
          ],
          hints: [
            "Apply {{(x, y) -> (-y, x)}}.",
            "{{(-3, 4)}} is in quadrant 2, so turning {{90°}} anticlockwise sends it into quadrant 3 {{(-, -)}}.",
          ],
          solution: ["Using {{(x, y) -> (-y, x)}} on {{(-3, 4)}} gives {{(-4, -3)}}."],
        },
        {
          id: "transformations-similarity-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "rotation",
          question: "Rotate the point {{(6, 2)}} by {{90°}} clockwise about the centre {{C(2, 1)}}. Write the coordinates of the image.",
          answer: { type: "list", values: [3, -3], ordered: true, display: "(3, −3)" },
          traps: [
            { spec: { type: "list", values: [1, -4], ordered: true }, feedback: "That's the rotated vector — remember to add it back onto centre C(2, 1)." },
          ],
          hints: [
            "Find the vector from {{C(2, 1)}} to {{(6, 2)}}: {{(4, 1)}}.",
            "Rotate {{(4, 1)}} by {{90°}} clockwise using {{(dx, dy) -> (dy, -dx)}} to get {{(1, -4)}}, then add to {{C(2, 1)}}.",
          ],
          solution: [
            "Vector {{CP = (6 - 2, 2 - 1) = (4, 1)}}.",
            "Rotate {{90°}} CW: {{(1, -4)}}.",
            "Add to {{C(2, 1)}}: {{(2 + 1, 1 - 4) = (3, -3)}}.",
          ],
        },
        {
          id: "transformations-similarity-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "enlargement",
          question: "Enlarge the point {{(3, 5)}} by scale factor {{2}} from centre {{C(-1, 2)}}. Write the coordinates of the image.",
          answer: { type: "list", values: [7, 8], ordered: true, display: "(7, 8)" },
          traps: [
            { spec: { type: "list", values: [6, 10], ordered: true }, feedback: "That enlarges from the origin (0, 0) instead of centre C(−1, 2)." },
          ],
          hints: [
            "Vector from {{C(-1, 2)}} to {{(3, 5)}} is {{(3 - (-1), 5 - 2) = (4, 3)}}.",
            "Double to {{(8, 6)}}, then add back to {{C(-1, 2)}}.",
          ],
          solution: [
            "Vector {{CP = (4, 3)}}.",
            "Multiply by {{2}}: {{(8, 6)}}.",
            "Add to {{C(-1, 2)}}: {{(-1 + 8, 2 + 6) = (7, 8)}}.",
          ],
        },
        {
          id: "transformations-similarity-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "enlargement",
          question: "Enlarge the point {{(14, 10)}} by fractional scale factor {{1/4}} from centre {{C(2, 2)}}. Write the image coordinates.",
          answer: { type: "list", values: [5, 4], ordered: true, display: "(5, 4)" },
          traps: [
            { spec: { type: "list", values: [3, 2], ordered: true }, feedback: "Add the scaled vector (3, 2) onto centre C(2, 2)!" },
          ],
          hints: [
            "Vector from {{C(2, 2)}} to {{(14, 10)}} is {{(12, 8)}}.",
            "Divide both components by {{4}} to get {{(3, 2)}}, then add to {{C(2, 2)}}.",
          ],
          solution: [
            "Vector {{CP = (12, 8)}}.",
            "Multiply by {{1/4}}: {{(3, 2)}}.",
            "Add to {{C(2, 2)}}: {{(2 + 3, 2 + 2) = (5, 4)}}.",
          ],
        },
        {
          id: "transformations-similarity-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "congruence-similarity",
          question: "Two similar pentagons have a pair of corresponding sides measuring {{8 cm}} and {{12 cm}}. Find the side on the larger pentagon that corresponds to a {{10 cm}} side on the smaller pentagon (in cm).",
          answer: { type: "number", value: 15, display: "15 cm" },
          traps: [
            { spec: { type: "number", value: 14 }, feedback: "Multiply by the scale factor (12 ÷ 8 = 1.5), do not add 4 cm." },
          ],
          hints: [
            "Find the scale factor {{k = 12 / 8 = 1.5}}.",
            "Multiply {{10 cm}} by {{1.5}}.",
          ],
          solution: ["Scale factor {{k = 12 / 8 = 1.5}}. Side {{= 10 * 1.5 = 15 cm}}."],
        },
        {
          id: "transformations-similarity-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "congruence-similarity",
          question: "In triangle {{ABC}}, segment {{DE}} is parallel to {{BC}} with {{D}} on {{AB}} and {{E}} on {{AC}}. Given {{AD = 5 cm}}, {{DB = 10 cm}}, and {{DE = 6 cm}}, calculate {{BC}} (in cm).",
          answer: { type: "number", value: 18, display: "18 cm" },
          traps: [
            { spec: { type: "number", value: 12 }, feedback: "Watch out! Side AB of the large triangle is AD + DB = 5 + 10 = 15 cm, not 10 cm." },
          ],
          hints: [
            "First add {{AD + DB}} to find the full side {{AB}} of triangle {{ABC}}.",
            "{{AB = 5 + 10 = 15 cm}}, so scale factor {{k = 15 / 5 = 3}}. Multiply {{DE = 6 cm}} by {{3}}.",
          ],
          solution: [
            "Full side {{AB = 5 + 10 = 15 cm}}.",
            "Scale factor from {{△ADE}} to {{△ABC}} is {{15 / 5 = 3}}.",
            "{{BC = 6 * 3 = 18 cm}}.",
          ],
        },
        {
          id: "transformations-similarity-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "reflection-translation",
          marks: 2,
          question:
            "Triangle {{P}} has vertices {{(1, 2)}}, {{(4, 2)}} and {{(4, 4)}}. Triangle {{Q}} has vertices {{(-5, 2)}}, {{(-8, 2)}} and {{(-8, 4)}}. Describe fully the single transformation that maps triangle {{P}} onto triangle {{Q}}.",
          hints: [
            "Compare the {{y}}-coordinates: they are unchanged, while the shape has flipped horizontally!",
            "Find the midpoint of {{(1, 2)}} and {{(-5, 2)}} to locate the vertical mirror line.",
          ],
          modelAnswer: "A reflection in the vertical mirror line x = −2.",
          markScheme: [
            { point: "Identifies the transformation as a reflection", keywords: ["reflection", "reflect", "reflected"] },
            { point: "States the exact mirror line equation x = −2", keywords: ["x = -2", "x=-2"] },
          ],
          commonError: "Writing y = −2 instead of x = −2 for a vertical mirror line.",
        },
        {
          id: "transformations-similarity-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "enlargement",
          marks: 3,
          question:
            "Triangle {{A}} has vertices {{(3, 2)}}, {{(5, 2)}} and {{(3, 4)}}. Triangle {{B}} has vertices {{(7, 4)}}, {{(13, 4)}} and {{(7, 10)}}. Describe fully the single transformation that maps triangle {{A}} onto triangle {{B}}.",
          hints: [
            "Compare the horizontal base lengths: {{A}} has base {{2}} and {{B}} has base {{6}}, so every side tripled!",
            "To find the centre {{C}}, draw rays joining {{(3, 2)}} to {{(7, 4)}} and {{(3, 4)}} to {{(7, 10)}} — or use {{2 * CA = AA' = (4, 2)}}.",
          ],
          modelAnswer: "An enlargement with scale factor 3 and centre of enlargement (1, 1).",
          markScheme: [
            { point: "Identifies the transformation as an enlargement", keywords: ["enlargement", "enlarge", "enlarged"] },
            { point: "States the correct scale factor of 3", keywords: ["scale factor 3", "sf 3", "factor of 3", "k = 3", "k=3"] },
            { point: "States the centre of enlargement as (1, 1)", keywords: ["(1, 1)", "(1,1)", "1, 1"] },
          ],
          commonError: "Giving only the scale factor and omitting the centre of enlargement.",
        },
        {
          id: "transformations-similarity-p1-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "congruence-similarity",
          marks: 3,
          question:
            "In parallelogram {{ABCD}}, diagonal {{AC}} divides the figure into {{△ABC}} and {{△CDA}}. Prove that {{△ABC}} and {{△CDA}} are congruent, stating the congruence condition clearly.",
          hints: [
            "Recall the side properties of any parallelogram: opposite sides are equal in length.",
            "Look at the diagonal {{AC}} — both triangles share that exact edge!",
          ],
          modelAnswer:
            "In a parallelogram, opposite sides are equal, so AB = CD and BC = DA. Diagonal AC is a common side shared by both triangles. Since all three pairs of corresponding sides are equal, the triangles are congruent by SSS.",
          markScheme: [
            { point: "States opposite sides of a parallelogram are equal (AB = CD and BC = DA)", keywords: ["opposite sides", "ab = cd", "ab=cd", "bc = da", "bc=da"] },
            { point: "States AC is a common / shared side", keywords: ["common side", "shared side", "common", "shared"] },
            { point: "Concludes with a valid congruence condition (SSS, SAS, or ASA)", keywords: ["sss", "sas", "asa"] },
          ],
          commonError: "Simply stating 'they look identical' without justifying each of the three equal elements.",
        },
      ],
    },
    {
      id: "transformations-similarity-p2",
      title: "Practice Paper 2 — Reverse Problems, Fractional Scale Factors & Similarity",
      questions: [
        {
          id: "transformations-similarity-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "reflection-translation",
          question: "Reflect the point {{(6, -3)}} in the line {{y = x}}. Write the coordinates of the image.",
          answer: { type: "list", values: [-3, 6], ordered: true, display: "(−3, 6)" },
          hints: ["Swap the {{x}} and {{y}} coordinates."],
          solution: ["Under reflection in {{y = x}}, {{(6, -3) -> (-3, 6)}}."],
        },
        {
          id: "transformations-similarity-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "reflection-translation",
          question: "Point {{P(-2, 5)}} is reflected in the vertical line {{x = a}} onto {{P'(8, 5)}}. Find the value of {{a}}.",
          answer: { type: "number", value: 3, display: "3" },
          traps: [
            { spec: { type: "number", value: 5 }, feedback: "5 is half the distance between −2 and 8, not the coordinate of the midpoint! Compute (−2 + 8) ÷ 2." },
          ],
          hints: [
            "The mirror line {{x = a}} sits at the exact midpoint between {{x = -2}} and {{x = 8}}.",
            "Calculate {{(-2 + 8) / 2}}.",
          ],
          solution: ["{{a = (-2 + 8) / 2 = 6 / 2 = 3}}."],
        },
        {
          id: "transformations-similarity-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "reflection-translation",
          question: "Point {{A}} is translated by the column vector {{(-4, 7)}} and lands at {{A'(3, 2)}}. Find the starting coordinates of {{A}}.",
          answer: { type: "list", values: [7, -5], ordered: true, display: "(7, −5)" },
          traps: [
            { spec: { type: "list", values: [-1, 9], ordered: true }, feedback: "You translated forward again! To work backwards to A, apply the reverse vector (+4, −7)." },
          ],
          hints: [
            "Work backwards from {{A'(3, 2)}} by reversing the translation vector {{(-4, 7)}} to {{(4, -7)}}.",
            "Compute {{(3 + 4, 2 - 7)}}.",
          ],
          solution: ["Reverse vector is {{(4, -7)}}. Starting point {{A = (3 + 4, 2 - 7) = (7, -5)}}."],
        },
        {
          id: "transformations-similarity-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "rotation",
          question: "Rotate the point {{(-1, 5)}} by {{90°}} clockwise about the centre {{C(2, 3)}}. Write the coordinates of the image.",
          answer: { type: "list", values: [4, 6], ordered: true, display: "(4, 6)" },
          traps: [
            { spec: { type: "list", values: [2, 3], ordered: true }, feedback: "Remember to add the rotated vector (2, 3) onto centre C(2, 3)." },
          ],
          hints: [
            "Find vector {{CP = (-1 - 2, 5 - 3) = (-3, 2)}}.",
            "Rotate {{(-3, 2)}} by {{90°}} clockwise: {{(2, 3)}}. Add back to {{C(2, 3)}}.",
          ],
          solution: [
            "Vector {{CP = (-3, 2)}}.",
            "Rotate {{90°}} CW using {{(dx, dy) -> (dy, -dx)}}: {{(2, 3)}}.",
            "Add to {{C(2, 3)}}: {{(2 + 2, 3 + 3) = (4, 6)}}.",
          ],
        },
        {
          id: "transformations-similarity-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "rotation",
          question: "A rotation of {{180°}} maps {{P(-3, 2)}} onto {{P'(7, -6)}}. Find the coordinates of the centre of rotation.",
          answer: { type: "list", values: [2, -2], ordered: true, display: "(2, −2)" },
          hints: [
            "For any {{180°}} rotation, the centre is the exact midpoint of a point and its image!",
            "Compute {{((-3 + 7)/2, (2 + (-6))/2)}}.",
          ],
          solution: ["Centre {{= ((-3 + 7)/2, (2 - 6)/2) = (2, -2)}}."],
        },
        {
          id: "transformations-similarity-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "enlargement",
          question: "Enlarge the point {{(2, 6)}} by scale factor {{2.5}} from centre {{C(0, 2)}}. Write the image coordinates.",
          answer: { type: "list", values: [5, 12], ordered: true, display: "(5, 12)" },
          traps: [
            { spec: { type: "list", values: [5, 15], ordered: true }, feedback: "That enlarges from (0, 0). Subtract centre C(0, 2) first, scale, then add back C(0, 2)." },
          ],
          hints: [
            "Vector {{CP = (2 - 0, 6 - 2) = (2, 4)}}.",
            "Multiply {{(2, 4)}} by {{2.5}} to get {{(5, 10)}}, then add back onto {{C(0, 2)}}.",
          ],
          solution: [
            "Vector {{CP = (2, 4)}}.",
            "Scale by {{2.5}}: {{(5, 10)}}.",
            "Add to {{C(0, 2)}}: {{(0 + 5, 2 + 10) = (5, 12)}}.",
          ],
        },
        {
          id: "transformations-similarity-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "enlargement",
          question: "A poster logo of height {{15 cm}} is enlarged onto a smaller badge of height {{6 cm}}. Write the scale factor of the enlargement as a fraction in its simplest form.",
          answer: { type: "fraction", n: 2, d: 5, simplest: true, display: "{{2/5}}" },
          traps: [
            { spec: { type: "fraction", n: 5, d: 2 }, feedback: "That's object ÷ image. Scale factor is always image ÷ object (6 ÷ 15)." },
          ],
          hints: [
            "Always divide image length by object length: {{6 / 15}}.",
            "Divide numerator and denominator by their HCF of {{3}}.",
          ],
          solution: ["Scale factor {{k = 6 / 15 = 2/5}}."],
        },
        {
          id: "transformations-similarity-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "enlargement",
          question: "Enlarge the point {{A(4, 5)}} by scale factor {{1/3}} from centre {{C(-2, 2)}}. Write the coordinates of {{A'}}.",
          answer: { type: "list", values: [0, 3], ordered: true, display: "(0, 3)" },
          traps: [
            { spec: { type: "list", values: [2, 1], ordered: true }, feedback: "Add the scaled vector (2, 1) onto centre C(−2, 2)." },
          ],
          hints: [
            "Vector {{CA = (4 - (-2), 5 - 2) = (6, 3)}}.",
            "Divide by {{3}} to get {{(2, 1)}}, then add to {{C(-2, 2)}}.",
          ],
          solution: [
            "Vector {{CA = (6, 3)}}.",
            "Multiply by {{1/3}}: {{(2, 1)}}.",
            "Add to {{C(-2, 2)}}: {{(-2 + 2, 2 + 1) = (0, 3)}}.",
          ],
        },
        {
          id: "transformations-similarity-p2-q09",
          kind: "mcq",
          difficulty: "core",
          guideRef: "congruence-similarity",
          question: "Two triangles both have {{AB = 9 cm}}, {{AC = 7 cm}}, and {{∠B = 40°}}. Why can you NOT prove they are congruent?",
          options: [
            "Because the triangle perimeter is unknown",
            "Because the {{40°}} angle is not included",
            "Because {{40°}} is smaller than {{90°}}",
            "Because {{9 cm}} and {{7 cm}} are unequal",
          ],
          answerIndex: 1,
          hints: [
            "Which angle sits directly BETWEEN sides {{AB}} and {{AC}}? Angle {{∠A}}, not {{∠B}}!",
            "Two sides and a non-included acute angle is **ASS**, which can form two distinct triangles.",
          ],
          explanation:
            "The included angle between {{AB}} and {{AC}} is {{∠A}}, whereas {{∠B}} is non-included (ASS). Because ASS is ambiguous for acute angles, congruence cannot be proved.",
        },
        {
          id: "transformations-similarity-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "congruence-similarity",
          question: "Two similar triangles have corresponding bases {{9 cm}} and {{15 cm}}. The perimeter of the larger triangle is {{40 cm}}. Calculate the perimeter of the smaller triangle (in cm).",
          answer: { type: "number", value: 24, display: "24 cm" },
          traps: [
            { spec: { type: "number", value: 34 }, feedback: "Perimeter scales by the scale factor 9/15 = 0.6, not by subtracting 6 cm." },
          ],
          hints: [
            "Find the scale factor from larger to smaller: {{k = 9 / 15 = 3/5 = 0.6}}.",
            "Multiply the larger perimeter {{40 cm}} by {{0.6}}.",
          ],
          solution: [
            "Scale factor from larger to smaller {{= 9 / 15 = 3/5}}.",
            "Smaller perimeter {{= 40 * (3/5) = 24 cm}}.",
          ],
        },
        {
          id: "transformations-similarity-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "congruence-similarity",
          question: "In triangle {{PQR}}, line {{XY}} is parallel to {{QR}} with {{X}} on {{PQ}} and {{Y}} on {{PR}}. Given {{PX = 8 cm}}, {{XQ = 4 cm}}, and {{PR = 18 cm}}, calculate {{PY}} (in cm).",
          answer: { type: "number", value: 12, display: "12 cm" },
          traps: [
            { spec: { type: "number", value: 9 }, feedback: "Full side PQ = PX + XQ = 12 cm, so the fraction is 8/12 = 2/3, not 1/2." },
          ],
          hints: [
            "Find full side {{PQ = PX + XQ = 8 + 4 = 12 cm}}.",
            "Scale factor from {{△PQR}} to {{△PXY}} is {{8 / 12 = 2/3}}. Multiply {{PR = 18 cm}} by {{2/3}}.",
          ],
          solution: [
            "{{PQ = 8 + 4 = 12 cm}}.",
            "{{PY = 18 * (8 / 12) = 18 * (2 / 3) = 12 cm}}.",
          ],
        },
        {
          id: "transformations-similarity-p2-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "congruence-similarity",
          question: "A vertical flagpole casts a horizontal shadow {{9 m}} long at the exact same time a {{1.6 m}} tall student casts a shadow {{2.4 m}} long. Use similar triangles to find the height of the flagpole (in m).",
          answer: { type: "number", value: 6, display: "6 m" },
          hints: [
            "Sunlight hits both at the same angle, forming two similar right-angled triangles.",
            "Find the shadow scale factor {{k = 9 / 2.4 = 3.75}}, then multiply {{1.6 m}} by {{3.75}} (or use height/shadow {{= 1.6 / 2.4 = 2/3}}).",
          ],
          solution: [
            "Ratio of height to shadow {{= 1.6 / 2.4 = 2/3}}.",
            "Flagpole height {{= 9 * (2/3) = 6 m}}.",
          ],
        },
        {
          id: "transformations-similarity-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "congruence-similarity",
          marks: 3,
          question:
            "Explain clearly why knowing **AAA** does NOT guarantee two triangles are congruent, whereas **ASA** DOES guarantee congruence.",
          hints: [
            "Think about what equal angles alone tell you (similar vs congruent).",
            "What can you still do to a triangle if you only lock its angles, and what does the S in ASA lock down?",
          ],
          modelAnswer:
            "Equal angles (AAA) only guarantee that two triangles are similar (same shape), because one can still be an enlargement of the other with different sizes. Including a matching side length in ASA fixes the exact scale so the triangles must be the same size as well as the same shape.",
          markScheme: [
            { point: "States AAA proves similarity (same shape)", keywords: ["similar", "similarity", "same shape"] },
            { point: "Explains triangles with AAA can be enlargements / different sizes", keywords: ["enlargement", "enlarged", "scaled", "different size", "different sizes"] },
            { point: "Explains the matching side length in ASA fixes the scale / exact size", keywords: ["side length", "matching side", "fixes the", "same size", "exact scale"] },
          ],
          commonError: "Saying 'AAA isn't allowed' without explaining that enlarging keeps all three angles unchanged.",
        },
        {
          id: "transformations-similarity-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "enlargement",
          marks: 3,
          question:
            "Triangle {{M}} has vertices {{(2, 2)}}, {{(6, 2)}} and {{(6, 6)}}. Triangle {{N}} has vertices {{(1, 3)}}, {{(3, 3)}} and {{(3, 5)}}. Describe fully the single transformation that maps triangle {{M}} onto triangle {{N}}.",
          hints: [
            "Compare the base of {{M}} ({{4}}) with the base of {{N}} ({{2}}) — the image shrank to half its size!",
            "With scale factor {{1/2}}, every image vertex is the midpoint of the centre {{C}} and the original vertex!",
            "Since {{(1, 3)}} is the midpoint of {{C}} and {{(2, 2)}}, find {{C = (0, 4)}}.",
          ],
          modelAnswer: "An enlargement with scale factor 1/2 (or 0.5) and centre of enlargement (0, 4).",
          markScheme: [
            { point: "Identifies the transformation as an enlargement", keywords: ["enlargement", "enlarge", "enlarged"] },
            { point: "States scale factor 1/2 or 0.5", keywords: ["1/2", "0.5", "half"] },
            { point: "States centre of enlargement as (0, 4)", keywords: ["(0, 4)", "(0,4)", "0, 4"] },
          ],
          commonError: "Writing scale factor 2 instead of 1/2 when mapping the larger shape M onto the smaller shape N.",
        },
        {
          id: "transformations-similarity-p2-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "congruence-similarity",
          marks: 3,
          question:
            "In a crossing-lines diagram, straight segments {{AC}} and {{BD}} intersect at {{E}}, and segment {{AB}} is parallel to {{DC}}. Prove that triangle {{ABE}} is similar to triangle {{CDE}}, giving clear geometric reasons.",
          hints: [
            "Look at the angles meeting at the crossing point {{E}}.",
            "Use the parallel lines {{AB}} and {{DC}} to spot Z-shaped alternate angles!",
          ],
          modelAnswer:
            "Angle AEB = angle CED because they are vertically opposite angles. Angle BAE = angle DCE (and angle ABE = angle CDE) because they are alternate angles between parallel lines AB and DC. Since all three corresponding angles are equal (AAA), triangle ABE is similar to triangle CDE.",
          markScheme: [
            { point: "Identifies vertically opposite angles at E are equal", keywords: ["vertically opposite"] },
            { point: "Identifies alternate angles on the parallel lines are equal", keywords: ["alternate"] },
            { point: "Concludes triangles are similar because all three corresponding angles are equal (AAA)", keywords: ["aaa", "three equal angles", "all three", "corresponding angles are equal"] },
          ],
          commonError: "Writing 'Z-angles' instead of the formal geometric term 'alternate angles'.",
        },
      ],
    },
  ],
  challenge: [
    {
      id: "transformations-similarity-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "reflection-translation",
      strategy: "Test a sample point and look for a general invariant",
      question:
        "A shape is reflected in the vertical line {{x = 2}} and then its image is reflected in the vertical line {{x = 7}}. Write the single translation column vector {{(dx, dy)}} that produces the exact same result.",
      answer: { type: "list", values: [10, 0], ordered: true, display: "(10, 0)" },
      traps: [
        { spec: { type: "list", values: [5, 0], ordered: true }, feedback: "Two parallel reflections shift by TWICE the distance between the mirrors (2 × 5 = 10)." },
        { spec: { type: "list", values: [-10, 0], ordered: true }, feedback: "Check the order: reflecting in x = 2 first and x = 7 second moves the shape to the RIGHT (+10)." },
      ],
      hints: [
        "Pick a test point such as {{(0, 3)}} and trace it through both reflections in order.",
        "{{(0, 3)}} reflects in {{x = 2}} to {{(4, 3)}}; then {{(4, 3)}} is {{3}} units left of {{x = 7}}, so it reflects to {{(10, 3)}}!",
        "Check algebraically: {{x -> (4 - x) -> 14 - (4 - x) = x + 10}}.",
      ],
      solution: [
        "First reflection in {{x = 2}} maps {{(x, y) -> (4 - x, y)}}.",
        "Second reflection in {{x = 7}} maps {{(4 - x, y) -> (14 - (4 - x), y) = (x + 10, y)}}.",
        "Every point shifts by {{(10, 0)}} — twice the gap between the parallel mirror lines.",
      ],
    },
    {
      id: "transformations-similarity-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "rotation",
      strategy: "Track a test vector through composed transformations",
      question:
        "A shape is reflected in the {{x}}-axis ({{y = 0}}) and then its image is reflected in the diagonal line {{y = x}}. This combination equals a single anticlockwise rotation about the origin {{(0, 0)}}. What is the angle of that anticlockwise rotation (in degrees, between {{1°}} and {{359°}})?",
      answer: { type: "number", value: 90, display: "90°" },
      traps: [
        { spec: { type: "number", value: 45 }, feedback: "Two intersecting mirrors produce a rotation of TWICE the angle between the mirrors (2 × 45° = 90°)." },
        { spec: { type: "number", value: 270 }, feedback: "Check the order! Track (2, 1): reflect in y = 0 to (2, −1), then reflect in y = x to (−1, 2) — that is 90° anticlockwise!" },
      ],
      hints: [
        "Track a non-symmetric point like {{(2, 1)}} through BOTH reflections in exact order.",
        "Reflection in {{y = 0}} sends {{(2, 1) -> (2, -1)}}. Reflection in {{y = x}} then swaps coordinates to {{(-1, 2)}}.",
        "Notice {{(x, y) -> (-y, x)}}, which is a {{90°}} anticlockwise rotation about {{(0, 0)}}!",
      ],
      solution: [
        "First reflection in {{y = 0}}: {{(x, y) -> (x, -y)}}.",
        "Second reflection in {{y = x}}: {{(x, -y) -> (-y, x)}}.",
        "{{(x, y) -> (-y, x)}} is a rotation of {{90°}} anticlockwise about {{(0, 0)}} (twice the {{45°}} angle from {{y = 0}} to {{y = x}}).",
      ],
    },
    {
      id: "transformations-similarity-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "rotation",
      strategy: "Set up equations from the rotation vector rule",
      question:
        "A {{90°}} clockwise rotation maps {{A(5, 4)}} onto {{A'(2, -1)}} and {{B(3, 4)}} onto {{B'(2, 1)}}. Find the coordinates of the centre of rotation {{C}}.",
      answer: { type: "list", values: [1, 3], ordered: true, display: "(1, 3)" },
      hints: [
        "For centre {{C(a, b)}}, the vector from {{C}} to {{A}} is {{(5 - a, 4 - b)}}.",
        "Rotating {{90°}} clockwise turns {{(5 - a, 4 - b)}} into {{(4 - b, a - 5)}}; adding to {{C(a, b)}} must equal {{(2, -1)}}.",
        "Solve {{a + 4 - b = 2}} (so {{a - b = -2}}) and {{b + a - 5 = -1}} (so {{a + b = 4}}).",
      ],
      solution: [
        "Let centre be {{C(a, b)}}. Rotating {{(5 - a, 4 - b)}} by {{90°}} CW gives {{(4 - b, -(5 - a))}}.",
        "Adding back to {{(a, b)}} gives {{a + 4 - b = 2 => a - b = -2}} and {{b + a - 5 = -1 => a + b = 4}}.",
        "Adding both equations: {{2a = 2 => a = 1}}, so {{b = 3}}. Check on {{B(3, 4)}}: vector {{(2, 1) -> (1, -2)}}, landing on {{(2, 1)}}!",
      ],
    },
    {
      id: "transformations-similarity-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "enlargement",
      strategy: "Find scale factor first, then work backwards along a ray",
      question:
        "An enlargement maps {{P(3, 2)}} onto {{P'(9, 4)}} and {{Q(3, 5)}} onto {{Q'(9, 13)}}. Find the coordinates of the centre of enlargement.",
      answer: { type: "list", values: [0, 1], ordered: true, display: "(0, 1)" },
      hints: [
        "Find the scale factor by comparing vertical segment lengths {{PQ}} and {{P'Q'}}.",
        "{{PQ = 5 - 2 = 3}} and {{P'Q' = 13 - 4 = 9}}, so scale factor {{k = 9 / 3 = 3}}.",
        "With {{k = 3}}, {{CP' = 3 * CP}}, so the gap {{PP' = 2 * CP = (6, 2)}}. Thus {{CP = (3, 1)}} — subtract from {{P(3, 2)}}!",
      ],
      solution: [
        "Length {{PQ = 3}} and {{P'Q' = 9}}, so scale factor {{k = 3}}.",
        "Vector {{PP' = (9 - 3, 4 - 2) = (6, 2)}} equals {{(k - 1) * CP = 2 * CP}}, so {{CP = (3, 1)}}.",
        "Centre {{C = P - CP = (3 - 3, 2 - 1) = (0, 1)}}. Check on {{Q(3, 5)}}: {{3 * (3, 4) = (9, 12)}} from {{(0, 1)}} gives {{(9, 13)}}.",
      ],
    },
    {
      id: "transformations-similarity-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "congruence-similarity",
      strategy: "Form and solve a proportion equation from similar triangles",
      question:
        "In triangle {{ABC}}, segment {{DE}} is parallel to {{BC}} with {{D}} on {{AB}} and {{E}} on {{AC}}. Given {{AD = x cm}}, {{DB = 6 cm}}, {{DE = 5 cm}}, and {{BC = 8 cm}}, find the value of {{x}}.",
      answer: { type: "number", value: 10, display: "10" },
      traps: [
        { spec: { type: "number", value: 3.75 }, feedback: "Set AD / AB = DE / BC using the FULL side AB = x + 6, not DB = 6." },
      ],
      hints: [
        "Triangles {{ADE}} and {{ABC}} are similar, so {{AD / AB = DE / BC}}.",
        "Write the full side {{AB = x + 6}}, giving {{x / (x + 6) = 5 / 8}}.",
        "Cross-multiply: {{8x = 5(x + 6)}}, expand and solve for {{x}}.",
      ],
      solution: [
        "Since {{△ADE}} and {{△ABC}} are similar, {{x / (x + 6) = 5 / 8}}.",
        "Cross-multiply: {{8x = 5x + 30}}.",
        "{{3x = 30 => x = 10}}.",
      ],
    },
    {
      id: "transformations-similarity-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "congruence-similarity",
      strategy: "Split a total diagonal using the similarity ratio",
      question:
        "Straight segments {{AC}} and {{BD}} intersect at {{E}}, with {{AB}} parallel to {{DC}}. Given {{AB = 6 cm}}, {{DC = 15 cm}}, and the full diagonal {{AC = 21 cm}}, calculate the length of {{AE}} (in cm).",
      answer: { type: "number", value: 6, display: "6 cm" },
      traps: [
        { spec: { type: "number", value: 8.4 }, feedback: "AC = 21 cm is the SUM of AE + EC, not EC alone! Share 21 in the ratio 6 : 15." },
      ],
      hints: [
        "Triangles {{ABE}} and {{CDE}} are similar (alternate and vertically opposite angles).",
        "The ratio of corresponding sides is {{AE : EC = AB : DC = 6 : 15 = 2 : 5}}.",
        "Share the total length {{AC = 21 cm}} in the ratio {{2 : 5}} ({{7}} parts total).",
      ],
      solution: [
        "Similar triangles give {{AE : EC = 6 : 15 = 2 : 5}}.",
        "Total parts {{= 2 + 5 = 7}}, so {{1}} part {{= 21 / 7 = 3 cm}}.",
        "{{AE = 2 * 3 = 6 cm}} (and {{EC = 15 cm}}).",
      ],
    },
    {
      id: "transformations-similarity-ch-q07",
      kind: "short",
      difficulty: "challenge",
      guideRef: "reflection-translation",
      strategy: "Use the geometric meaning of an invariant point",
      question:
        "A point is called **invariant** if it does not move under a transformation. The point {{P(k, 3k - 8)}} is invariant under reflection in the line {{y = x}}. Find the value of {{k}}.",
      answer: { type: "number", value: 4, display: "4" },
      hints: [
        "Under reflection in a mirror line, which points stay in the exact same position?",
        "Only points lying directly ON the mirror line {{y = x}} are invariant — so its {{x}} and {{y}} coordinates must be equal!",
        "Solve {{k = 3k - 8}}.",
      ],
      solution: [
        "A point is invariant under reflection in {{y = x}} if and only if {{y = x}}.",
        "Set {{3k - 8 = k => 2k = 8 => k = 4}} (giving the invariant point {{(4, 4)}}).",
      ],
    },
    {
      id: "transformations-similarity-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "enlargement",
      marks: 3,
      strategy: "Check how both linear dimensions scale in an area formula",
      question:
        "Triangle {{T}} has area {{12 cm^2}}. It is enlarged by linear scale factor {{2.5}} to form triangle {{T'}}. A student claims the area of {{T'}} is {{12 * 2.5 = 30 cm^2}}. Explain clearly why the student is wrong and calculate the true area of {{T'}}.",
      hints: [
        "Recall the area formula for a triangle: {{1/2 * " + '"base"' + " * " + '"height"' + "}}.",
        "When you enlarge a triangle by {{2.5}}, BOTH the base AND the perpendicular height are multiplied by {{2.5}}!",
        "So the area is multiplied by {{2.5 * 2.5 = 6.25}}.",
      ],
      modelAnswer:
        "The student is wrong because both the base and height (two dimensions) are multiplied by 2.5, not just one. Therefore the area scale factor is 2.5² = 6.25. The true area of T' is 12 × 6.25 = 75 cm².",
      markScheme: [
        { point: "Explains that both base and height (two dimensions) are multiplied by the scale factor", keywords: ["base and height", "both dimensions", "two dimensions", "area scale factor", "square"] },
        { point: "Finds the area scale factor 2.5² = 6.25", keywords: ["6.25", "2.5^2", "2.5²", "k^2", "k²"] },
        { point: "Calculates the true area as 75 cm²", keywords: ["75"] },
      ],
      commonError: "Multiplying area by the linear scale factor k instead of k².",
    },
  ],
};
