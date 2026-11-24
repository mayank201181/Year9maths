import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "transformations-similarity-m1",
    title: "MCQ Paper 1 — Reflections, Translations & Rotations",
    questions: [
      {
        id: "transformations-similarity-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "reflection-translation",
        question: "What are the coordinates of the image of {{(3, 4)}} after a reflection in the {{y}}-axis ({{x = 0}})?",
        options: ["{{(3, -4)}}", "{{(-3, 4)}}", "{{(4, 3)}}", "{{(-3, -4)}}"],
        answerIndex: 1,
        hints: [
          "The {{y}}-axis is a vertical mirror line at {{x = 0}}.",
          "Reflecting across a vertical line flips the sign of {{x}} and keeps {{y}} unchanged.",
        ],
        explanation:
          "Across the {{y}}-axis ({{x = 0}}), {{y}} stays {{4}} while {{x = 3}} reflects to {{-3}}, giving {{(-3, 4)}}. Changing the sign of {{y}} instead would reflect in the {{x}}-axis.",
      },
      {
        id: "transformations-similarity-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "reflection-translation",
        question: "Point {{(2, -5)}} is reflected in the {{x}}-axis ({{y = 0}}). What are the coordinates of its image?",
        options: ["{{(-2, -5)}}", "{{(-5, 2)}}", "{{(2, 5)}}", "{{(-2, 5)}}"],
        answerIndex: 2,
        hints: [
          "The {{x}}-axis is the horizontal mirror line {{y = 0}}.",
          "Reflecting across a horizontal line leaves {{x}} fixed and flips the sign of {{y}}.",
        ],
        explanation:
          "Point {{(2, -5)}} sits {{5}} units below the {{x}}-axis, so its reflection sits {{5}} units above at {{(2, 5)}}. Negating {{x}} reflects across the {{y}}-axis instead.",
      },
      {
        id: "transformations-similarity-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "reflection-translation",
        question: "Point {{A(5, 2)}} is reflected in the vertical line {{x = 1}}. What are the coordinates of {{A'}}?",
        options: ["{{(-3, 2)}}", "{{(-5, 2)}}", "{{(5, 0)}}", "{{(-2, 2)}}"],
        answerIndex: 0,
        hints: [
          "Measure the horizontal distance from {{A(5, 2)}} to the mirror line {{x = 1}}.",
          "{{5 - 1 = 4}} units to the right of {{x = 1}}, so step {{4}} units to the left of {{x = 1}}.",
        ],
        explanation:
          "{{A(5, 2)}} is {{4}} units to the right of {{x = 1}}, so {{A'}} is {{4}} units to the left: {{1 - 4 = -3}}, with {{y = 2}} unchanged, giving {{(-3, 2)}}. Writing {{(-5, 2)}} mistakenly reflects in {{x = 0}}.",
      },
      {
        id: "transformations-similarity-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "reflection-translation",
        question: "Point {{B(-1, 6)}} is reflected in the horizontal line {{y = 2}}. What are the coordinates of {{B'}}?",
        options: ["{{(5, 6)}}", "{{(-1, -6)}}", "{{(-1, 0)}}", "{{(-1, -2)}}"],
        answerIndex: 3,
        hints: [
          "Across a horizontal line {{y = 2}}, the {{x}}-coordinate does not change.",
          "Find how far {{y = 6}} is above {{y = 2}}, then go that same distance below {{y = 2}}.",
        ],
        explanation:
          "{{B(-1, 6)}} is {{6 - 2 = 4}} units above {{y = 2}}, so its image is {{4}} units below {{y = 2}}: {{2 - 4 = -2}}, giving {{(-1, -2)}}. Choosing {{(-1, -6)}} reflects in {{y = 0}} instead.",
      },
      {
        id: "transformations-similarity-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "reflection-translation",
        question: "What are the coordinates of the image of {{(-3, 7)}} after a reflection in the diagonal line {{y = x}}?",
        options: ["{{(3, -7)}}", "{{(7, -3)}}", "{{(-7, 3)}}", "{{(-3, -7)}}"],
        answerIndex: 1,
        hints: [
          "Reflecting across the mirror line {{y = x}} swaps the roles of the horizontal and vertical axes.",
          "Apply the coordinate rule {{(x, y) -> (y, x)}} without changing any signs.",
        ],
        explanation:
          "Reflection in {{y = x}} swaps {{x}} and {{y}}, sending {{(-3, 7)}} to {{(7, -3)}}. Swapping AND negating to {{(-7, 3)}} corresponds to reflecting in {{y = -x}}.",
      },
      {
        id: "transformations-similarity-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "reflection-translation",
        question: "Point {{(4, -2)}} is reflected in the line {{y = -x}}. What are the coordinates of its image?",
        options: ["{{(-4, 2)}}", "{{(-2, 4)}}", "{{(2, -4)}}", "{{(4, 2)}}"],
        answerIndex: 2,
        hints: [
          "Reflection in {{y = -x}} both swaps the coordinates and flips both signs.",
          "Apply {{(x, y) -> (-y, -x)}} carefully to {{x = 4}} and {{y = -2}}.",
        ],
        explanation:
          "Under {{(x, y) -> (-y, -x)}}, {{-y = -(-2) = 2}} and {{-x = -4}}, giving {{(2, -4)}}. Only swapping gives {{(-2, 4)}} (reflection in {{y = x}}).",
      },
      {
        id: "transformations-similarity-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "reflection-translation",
        question: "Point {{(-2, 5)}} is translated by the column vector {{(6, -3)}}. Where does it land?",
        options: ["{{(4, 2)}}", "{{(-8, 8)}}", "{{(4, 8)}}", "{{(-8, 2)}}"],
        answerIndex: 0,
        hints: [
          "The top component {{+6}} shifts right by {{6}}, and the bottom component {{-3}} shifts down by {{3}}.",
          "Add {{(-2 + 6, 5 - 3)}}.",
        ],
        explanation:
          "Adding the translation vector gives {{(-2 + 6, 5 + (-3)) = (4, 2)}}. Subtracting the vector instead gives {{(-8, 8)}}, which translates in the reverse direction.",
      },
      {
        id: "transformations-similarity-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "reflection-translation",
        question: "A translation maps vertex {{(3, -1)}} of Shape {{P}} to the corresponding vertex {{(-2, 4)}} of Shape {{Q}}. What is the translation vector from {{P}} to {{Q}}?",
        options: ["{{(5, -5)}}", "{{(1, 3)}}", "{{(-5, 3)}}", "{{(-5, 5)}}"],
        answerIndex: 3,
        hints: [
          "Use Image − Object for both {{x}} and {{y}}.",
          "Compute {{dx = -2 - 3}} and {{dy = 4 - (-1)}} carefully with the double negative.",
        ],
        explanation:
          "{{dx = -2 - 3 = -5}} and {{dy = 4 - (-1) = 5}}, so the column vector is {{(-5, 5)}}. Writing {{(5, -5)}} gives the reverse translation from {{Q}} to {{P}}.",
      },
      {
        id: "transformations-similarity-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "reflection-translation",
        question: "Shape {{A}} is mapped onto Shape {{B}} by the translation vector {{(5, -2)}}. Which column vector maps Shape {{B}} back onto Shape {{A}}?",
        options: ["{{(5, 2)}}", "{{(-5, 2)}}", "{{(-2, 5)}}", "{{(2, -5)}}"],
        answerIndex: 1,
        hints: [
          "To undo a translation, move the exact opposite way horizontally AND vertically.",
          "Negate both components of {{(5, -2)}}.",
        ],
        explanation:
          "Moving {{5}} right and {{2}} down is undone by moving {{5}} left and {{2}} up, which is {{(-5, 2)}}. Only flipping one sign does not return to the start.",
      },
      {
        id: "transformations-similarity-m1-q10",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "rotation",
        question: "Point {{(4, 1)}} is rotated {{90°}} anticlockwise about the origin {{(0, 0)}}. What are the coordinates of the image?",
        options: ["{{(1, -4)}}", "{{(-4, -1)}}", "{{(-1, 4)}}", "{{(1, 4)}}"],
        answerIndex: 2,
        hints: [
          "A {{90°}} anticlockwise turn takes a point from the first quadrant {{(+, +)}} into the second quadrant {{(-, +)}}.",
          "Use the origin rule {{(x, y) -> (-y, x)}}.",
        ],
        explanation:
          "Under {{90°}} anticlockwise about {{(0, 0)}}, {{(x, y) -> (-y, x)}}, so {{(4, 1) -> (-1, 4)}}. Note that {{(1, -4)}} is the {{90°}} clockwise image instead.",
      },
      {
        id: "transformations-similarity-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "rotation",
        question: "Point {{(3, -2)}} is rotated {{90°}} clockwise about the origin {{(0, 0)}}. What is its image?",
        options: ["{{(-2, -3)}}", "{{(2, 3)}}", "{{(-3, 2)}}", "{{(2, -3)}}"],
        answerIndex: 0,
        hints: [
          "Apply the {{90°}} clockwise origin rule: {{(x, y) -> (y, -x)}}.",
          "Check quadrants: {{(3, -2)}} is in quadrant 4, and turning {{90°}} clockwise moves it into quadrant 3 {{(-, -)}}.",
        ],
        explanation:
          "Using {{(x, y) -> (y, -x)}} gives {{(-2, -3)}}. Meanwhile {{(2, 3)}} is the {{90°}} anticlockwise image, and {{(-3, 2)}} is the {{180°}} rotation.",
      },
      {
        id: "transformations-similarity-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "rotation",
        question: "Point {{(-5, 3)}} is rotated {{180°}} about the origin {{(0, 0)}}. What are the coordinates of its image?",
        options: ["{{(-3, -5)}}", "{{(3, 5)}}", "{{(-5, -3)}}", "{{(5, -3)}}"],
        answerIndex: 3,
        hints: [
          "A {{180°}} half-turn about the origin reverses the sign of both coordinates.",
          "Apply {{(x, y) -> (-x, -y)}} to {{(-5, 3)}}.",
        ],
        explanation:
          "Negating both coordinates sends {{(-5, 3)}} to {{(5, -3)}}. Keeping {{x = -5}} and only flipping {{y}} to {{(-5, -3)}} is a reflection in the {{x}}-axis.",
      },
      {
        id: "transformations-similarity-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "rotation",
        question: "Rotate point {{(5, 3)}} by {{90°}} anticlockwise about the centre {{C(1, 1)}}. Where does it land?",
        options: ["{{(-3, 5)}}", "{{(-1, 5)}}", "{{(3, -3)}}", "{{(-2, 4)}}"],
        answerIndex: 1,
        hints: [
          "First find the vector from centre {{C(1, 1)}} to {{(5, 3)}}: {{(5 - 1, 3 - 1) = (4, 2)}}.",
          "Rotate {{(4, 2)}} by {{90°}} anticlockwise to get {{(-2, 4)}}, then add it back onto centre {{C(1, 1)}}.",
        ],
        explanation:
          "Vector from {{C(1, 1)}} is {{(4, 2)}}. Rotating {{90°}} ACW gives {{(-2, 4)}}. Adding back to {{C(1, 1)}} gives {{(1 - 2, 1 + 4) = (-1, 5)}}. Stopping at {{(-2, 4)}} forgets to add back the centre!",
      },
      {
        id: "transformations-similarity-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "rotation",
        question: "Point {{(6, -1)}} is rotated {{180°}} about the centre {{C(2, 3)}}. What are the coordinates of its image?",
        options: ["{{(-6, 1)}}", "{{(-4, 4)}}", "{{(-2, 7)}}", "{{(4, -5)}}"],
        answerIndex: 2,
        hints: [
          "The centre {{C(2, 3)}} must be the exact midpoint of {{(6, -1)}} and its image.",
          "Vector from {{C(2, 3)}} to {{(6, -1)}} is {{(4, -4)}}; reverse it to {{(-4, 4)}} and add to {{C(2, 3)}}.",
        ],
        explanation:
          "Vector from {{C(2, 3)}} is {{(4, -4)}}. Reversing gives {{(-4, 4)}}; adding to {{(2, 3)}} gives {{(-2, 7)}}. Check: midpoint of {{(6, -1)}} and {{(-2, 7)}} is {{(2, 3)}}.",
      },
      {
        id: "transformations-similarity-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "rotation",
        question: "A rotation about the origin maps {{A(2, 0)}} to {{A'(0, -2)}} and {{B(2, 1)}} to {{B'(1, -2)}}. Which is the full, accurate description of this rotation?",
        options: [
          "Rotation {{90°}} clockwise about {{(0, 0)}}",
          "Rotation {{90°}} anticlockwise about {{(0, 0)}}",
          "Rotation {{180°}} clockwise about {{(0, 0)}}",
          "Rotation {{90°}} clockwise about {{(1, -1)}}",
        ],
        answerIndex: 0,
        hints: [
          "Check what rule maps {{(2, 0) -> (0, -2)}} and {{(2, 1) -> (1, -2)}}.",
          "Both points obey {{(x, y) -> (y, -x)}}, which is a quarter-turn moving the positive {{x}}-axis down onto the negative {{y}}-axis.",
        ],
        explanation:
          "Moving {{(2, 0)}} on the positive {{x}}-axis to {{(0, -2)}} on the negative {{y}}-axis is a {{90°}} clockwise turn about {{(0, 0)}}, matching {{(x, y) -> (y, -x)}} for both {{A}} and {{B}}.",
      },
    ],
  },
  {
    id: "transformations-similarity-m2",
    title: "MCQ Paper 2 — Enlargements, Fractional Scale Factors & Centres",
    questions: [
      {
        id: "transformations-similarity-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "enlargement",
        question: "Point {{(3, 2)}} is enlarged by scale factor {{3}} with centre of enlargement {{(0, 0)}}. What is its image?",
        options: ["{{(6, 5)}}", "{{(1, 2)}}", "{{(6, 9)}}", "{{(9, 6)}}"],
        answerIndex: 3,
        hints: [
          "When the centre of enlargement is the origin {{(0, 0)}}, multiply both coordinates by the scale factor {{k}}.",
          "Calculate {{(3 * 3, 3 * 2)}}.",
        ],
        explanation:
          "Enlarging from {{(0, 0)}} by scale factor {{3}} multiplies each coordinate by {{3}}: {{(9, 6)}}. Adding {{3}} instead of multiplying gives the wrong answer {{(6, 5)}}.",
      },
      {
        id: "transformations-similarity-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "enlargement",
        question: "A rectangle of length {{4 cm}} is enlarged so that its image has length {{14 cm}}. What is the scale factor of the enlargement?",
        options: ["{{2.5}}", "{{3.5}}", "{{10}}", "{{4.5}}"],
        answerIndex: 1,
        hints: [
          "Scale factor is always image length divided by object length.",
          "Compute {{14 / 4}}.",
        ],
        explanation:
          "Scale factor {{k = 14 / 4 = 3.5}}. Subtracting {{14 - 4 = 10}} confuses enlargement (multiplying) with adding a constant.",
      },
      {
        id: "transformations-similarity-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "enlargement",
        question: "Shape {{A}} has width {{12 cm}} and is enlarged onto Shape {{B}} of width {{4 cm}}. What is the scale factor of the enlargement from {{A}} to {{B}}?",
        options: ["{{3}}", "{{-3}}", "{{1/3}}", "{{1/4}}"],
        answerIndex: 2,
        hints: [
          "Notice that the image {{B}} is SMALLER than the object {{A}}, so the scale factor must be between {{0}} and {{1}}.",
          "Compute {{k = (" + '"image width"' + ")/(" + '"object width"' + ") = 4 / 12}} and simplify.",
        ],
        explanation:
          "{{k = 4 / 12 = 1/3}}. Dividing object by image gives {{3}}, which is the scale factor from {{B}} to {{A}}, while a negative scale factor would invert the shape.",
      },
      {
        id: "transformations-similarity-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "enlargement",
        question: "Vertex {{(4, 5)}} is enlarged by scale factor {{2}} with centre of enlargement {{C(1, 2)}}. What are the coordinates of the image?",
        options: ["{{(7, 8)}}", "{{(8, 10)}}", "{{(6, 6)}}", "{{(10, 11)}}"],
        answerIndex: 0,
        hints: [
          "Find the vector from centre {{C(1, 2)}} to {{(4, 5)}}: {{(4 - 1, 5 - 2) = (3, 3)}}.",
          "Double that vector to {{(6, 6)}}, then add it onto centre {{C(1, 2)}} (not onto {{(4, 5)}}!).",
        ],
        explanation:
          "Vector from {{C(1, 2)}} is {{(3, 3)}}; multiplying by {{2}} gives {{(6, 6)}}; adding to {{C(1, 2)}} gives {{(7, 8)}}. Writing {{(8, 10)}} ignores the centre and enlarges from {{(0, 0)}}.",
      },
      {
        id: "transformations-similarity-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "enlargement",
        question: "Point {{(3, -1)}} is enlarged by scale factor {{3}} from centre {{C(1, 1)}}. What is its image?",
        options: ["{{(9, -3)}}", "{{(6, -6)}}", "{{(9, -7)}}", "{{(7, -5)}}"],
        answerIndex: 3,
        hints: [
          "Subtract the centre from the point: {{(3 - 1, -1 - 1) = (2, -2)}}.",
          "Multiply {{(2, -2)}} by {{3}} to get {{(6, -6)}}, then add back to {{C(1, 1)}}.",
        ],
        explanation:
          "Vector {{CP = (2, -2)}}; {{3 * CP = (6, -6)}}; image {{= (1 + 6, 1 - 6) = (7, -5)}}. Adding {{(6, -6)}} to {{(3, -1)}} instead of {{C}} wrongly gives {{(9, -7)}}.",
      },
      {
        id: "transformations-similarity-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "enlargement",
        question: "Point {{(9, 7)}} is enlarged by fractional scale factor {{1/2}} from centre {{C(1, 3)}}. What are the coordinates of the image?",
        options: ["{{(4.5, 3.5)}}", "{{(5, 5)}}", "{{(4, 2)}}", "{{(6, 4)}}"],
        answerIndex: 1,
        hints: [
          "Find the vector from {{C(1, 3)}} to {{(9, 7)}}: {{(8, 4)}}.",
          "Halve the vector to {{(4, 2)}}, then add it to the centre {{C(1, 3)}}.",
        ],
        explanation:
          "Vector {{CP = (8, 4)}}. Half of that is {{(4, 2)}}. Adding to {{C(1, 3)}} gives {{(1 + 4, 3 + 2) = (5, 5)}} — notice that for {{k = 1/2}}, the image is the exact midpoint of {{C}} and {{P}}!",
      },
      {
        id: "transformations-similarity-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "enlargement",
        question: "Enlarge the point {{(10, 13)}} by scale factor {{1/3}} from centre {{C(1, 4)}}. Where does it land?",
        options: ["{{(3, 3)}}", "{{(3, 4)}}", "{{(4, 7)}}", "{{(7, 10)}}"],
        answerIndex: 2,
        hints: [
          "Find the vector from centre {{C(1, 4)}} to {{(10, 13)}}: {{(9, 9)}}.",
          "Divide both components by {{3}} to get {{(3, 3)}}, then add onto {{C(1, 4)}}.",
        ],
        explanation:
          "Vector {{CP = (9, 9)}}; one-third of it is {{(3, 3)}}; adding to {{C(1, 4)}} gives {{(4, 7)}}. Stopping at {{(3, 3)}} forgets to start from centre {{C}}.",
      },
      {
        id: "transformations-similarity-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "enlargement",
        question: "An enlargement with scale factor {{2}} maps {{A(3, 2)}} onto {{A'(7, 4)}}. What are the coordinates of the centre of enlargement?",
        options: ["{{(-1, 0)}}", "{{(5, 3)}}", "{{(1, 0)}}", "{{(-1, 1)}}"],
        answerIndex: 0,
        hints: [
          "With scale factor {{2}}, the distance from centre {{C}} to {{A'}} is twice the distance from {{C}} to {{A}} — so {{A}} is the midpoint of {{C}} and {{A'}}!",
          "Step backwards from {{A(3, 2)}} by the same vector that goes from {{A'(7, 4)}} to {{A(3, 2)}}: {{(-4, -2)}}.",
        ],
        explanation:
          "The step from {{A(3, 2)}} to {{A'(7, 4)}} is {{(4, 2)}}, so with {{k = 2}} the centre is {{(4, 2)}} behind {{A}}: {{(3 - 4, 2 - 2) = (-1, 0)}}. Check: vector from {{(-1, 0)}} to {{A}} is {{(4, 2)}} and doubled is {{(8, 4)}}, landing on {{(7, 4)}}.",
      },
      {
        id: "transformations-similarity-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "enlargement",
        question: "An enlargement of scale factor {{3}} maps {{P(2, 4)}} onto {{P'(6, 8)}}. What is the centre of enlargement?",
        options: ["{{(2, 0)}}", "{{(4, 6)}}", "{{(-2, 0)}}", "{{(0, 2)}}"],
        answerIndex: 3,
        hints: [
          "With scale factor {{3}}, vector {{PP'}} is {{2}} times vector {{CP}} (since {{CP' = 3 * CP}}).",
          "{{PP' = (4, 4)}}, so {{CP = (2, 2)}}. Subtract {{(2, 2)}} from {{P(2, 4)}} to find {{C}}.",
        ],
        explanation:
          "Since {{CP' = 3 * CP}}, the gap {{PP' = 2 * CP = (4, 4)}}, so {{CP = (2, 2)}}. Thus {{C = (2 - 2, 4 - 2) = (0, 2)}}. Check: {{3 * (2, 2) = (6, 6)}} from {{(0, 2)}} reaches {{(6, 8)}}.",
      },
      {
        id: "transformations-similarity-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "enlargement",
        question: "A pentagon is enlarged by scale factor {{1/4}} from centre {{(2, 3)}}. Which measurement of the pentagon remains unchanged?",
        options: [
          "The total perimeter of the shape",
          "The size of every interior angle",
          "The distance from the centre {{C}}",
          "The total area inside the shape",
        ],
        answerIndex: 1,
        hints: [
          "Enlargement creates a similar shape — lengths scale by {{k}}, while shape geometry stays identical.",
          "Think about what stays identical when you zoom out on a polygon.",
        ],
        explanation:
          "Every interior angle remains identical under any enlargement. Perimeter and distances from the centre scale by {{1/4}}, and area scales by {{(1/4)^2 = 1/16}}.",
      },
      {
        id: "transformations-similarity-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "enlargement",
        question: "A triangle has perimeter {{18 cm}}. It is enlarged by scale factor {{2.5}}. What is the perimeter of the enlarged triangle?",
        options: ["{{20.5 cm}}", "{{36 cm}}", "{{45 cm}}", "{{112.5 cm}}"],
        answerIndex: 2,
        hints: [
          "Every side length is multiplied by {{2.5}}, so the sum of all sides (the perimeter) is also multiplied by {{2.5}}.",
          "Calculate {{18 * 2.5}}.",
        ],
        explanation:
          "Perimeter is a linear measurement, so it multiplies by the linear scale factor: {{18 * 2.5 = 45 cm}}. Multiplying by {{2.5^2 = 6.25}} (giving {{112.5}}) applies to area, not perimeter.",
      },
      {
        id: "transformations-similarity-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "enlargement",
        question: "Shape {{P}} is enlarged onto Shape {{Q}} by scale factor {{2/3}} from centre {{(0, 0)}}. What scale factor maps Shape {{Q}} back onto Shape {{P}}?",
        options: ["{{3/2}}", "{{-2/3}}", "{{4/9}}", "{{1/3}}"],
        answerIndex: 0,
        hints: [
          "To reverse multiplying lengths by {{2/3}}, multiply by its reciprocal.",
          "What fraction multiplied by {{2/3}} equals {{1}}?",
        ],
        explanation:
          "The inverse of multiplying by {{2/3}} is multiplying by {{3/2}} ({{1.5}}), since {{(2/3) * (3/2) = 1}}. Negating to {{-2/3}} would flip the shape upside down instead of restoring its size.",
      },
      {
        id: "transformations-similarity-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "enlargement",
        question: "Vertex {{(5, 1)}} is enlarged by scale factor {{1.5}} from centre {{C(1, 1)}}. What are the coordinates of its image?",
        options: ["{{(7.5, 1.5)}}", "{{(6, 1)}}", "{{(7, 1.5)}}", "{{(7, 1)}}"],
        answerIndex: 3,
        hints: [
          "Find the vector from {{C(1, 1)}} to {{(5, 1)}}: {{(4, 0)}}.",
          "Multiply {{(4, 0)}} by {{1.5}} to get {{(6, 0)}}, then add back to {{C(1, 1)}}.",
        ],
        explanation:
          "Vector {{CP = (4, 0)}}; {{1.5 * (4, 0) = (6, 0)}}; adding to {{C(1, 1)}} gives {{(7, 1)}}. Multiplying {{(5, 1)}} directly by {{1.5}} ignores the centre and gives {{(7.5, 1.5)}}.",
      },
      {
        id: "transformations-similarity-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "enlargement",
        question: "An enlargement maps {{A(2, 1)}} to {{A'(4, 5)}} and {{B(2, 3)}} to {{B'(4, 11)}}. What are the coordinates of the centre of enlargement?",
        options: ["{{(0, -3)}}", "{{(1, -1)}}", "{{(1, 0)}}", "{{(0, -1)}}"],
        answerIndex: 1,
        hints: [
          "First find the scale factor from the vertical segment: {{AB = 3 - 1 = 2}} and {{A'B' = 11 - 5 = 6}}, so {{k = 6 / 2 = 3}}.",
          "Alternatively, find where the ray line through {{A(2, 1)}} and {{A'(4, 5)}} (gradient {{2}}) crosses the ray through {{B(2, 3)}} and {{B'(4, 11)}} (gradient {{4}}).",
          "From {{k = 3}}, {{AA' = (2, 4) = 2 * CA}}, so {{CA = (1, 2)}} and {{C = A - (1, 2)}}.",
        ],
        explanation:
          "Since {{A'B' / AB = 6 / 2 = 3}}, the scale factor is {{3}}. Thus {{2 * CA = AA' = (2, 4)}}, giving {{CA = (1, 2)}} and centre {{C = (2 - 1, 1 - 2) = (1, -1)}}. Check on {{B}}: {{CB = (1, 4)}}, {{3 * CB = (3, 12)}}, landing on {{(4, 11)}}.",
      },
      {
        id: "transformations-similarity-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "enlargement",
        question: "A rectangle measuring {{6 cm}} by {{4 cm}} is enlarged by linear scale factor {{3}}. What is the **area** of the enlarged rectangle?",
        options: ["{{72 cm^2}}", "{{144 cm^2}}", "{{216 cm^2}}", "{{60 cm^2}}"],
        answerIndex: 2,
        hints: [
          "Enlarge BOTH the length and the width by scale factor {{3}} before calculating the new area.",
          "New length {{= 6 * 3 = 18 cm}}, new width {{= 4 * 3 = 12 cm}}.",
        ],
        explanation:
          "Both dimensions triple to {{18 cm}} by {{12 cm}}, so the new area is {{18 * 12 = 216 cm^2}} (which is {{3^2 = 9}} times the original area {{24 cm^2}}). Multiplying {{24}} by {{3}} wrongly gives {{72 cm^2}}.",
      },
    ],
  },
  {
    id: "transformations-similarity-m3",
    title: "MCQ Paper 3 — Congruence, Similarity & Mixed Transformations",
    questions: [
      {
        id: "transformations-similarity-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "congruence-similarity",
        question: "Which list contains ALL FOUR valid conditions for proving two triangles are congruent?",
        options: [
          "SSS, SAS, ASA, RHS",
          "SSS, SAS, AAA, RHS",
          "SSS, ASS, ASA, RHS",
          "AAA, SAS, ASA, ASS",
        ],
        answerIndex: 0,
        hints: [
          "Recall which two 3-letter combinations do NOT prove congruence.",
          "AAA proves similarity only, and ASS fails because the angle is not included.",
        ],
        explanation:
          "The four valid triangle congruence conditions are **SSS, SAS, ASA (or AAS), and RHS**. Every other list includes either AAA (similarity only) or ASS (ambiguous).",
      },
      {
        id: "transformations-similarity-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "congruence-similarity",
        question: "Two triangles both have interior angles {{35°}}, {{65°}} and {{80°}}, with no side lengths given. What can you definitely conclude?",
        options: [
          "They must be congruent triangles",
          "They must have identical areas",
          "They cannot share any sides",
          "They must be similar triangles",
        ],
        answerIndex: 3,
        hints: [
          "Equal corresponding angles guarantee the exact same shape.",
          "Without any side length information, can one triangle be a scaled-up copy of the other?",
        ],
        explanation:
          "Matching all three angles (AAA) proves the triangles are **similar** (same shape), but without a matching side length they could be different sizes, so congruence is not guaranteed.",
      },
      {
        id: "transformations-similarity-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "congruence-similarity",
        question: "In triangles {{ABC}} and {{DEF}}, {{AB = DE = 8 cm}}, {{BC = EF = 5 cm}}, and {{∠B = ∠E = 50°}}. Which condition proves {{△ABC ≡ △DEF}}?",
        options: ["SSS", "SAS", "ASA", "RHS"],
        answerIndex: 1,
        hints: [
          "Check where angle {{∠B}} sits relative to sides {{AB}} and {{BC}}.",
          "Vertex {{B}} is shared by both {{AB}} and {{BC}}, so {{∠B}} is the **included** angle between them.",
        ],
        explanation:
          "Two pairs of sides are equal and the {{50°}} angle is included directly between them at {{B}} and {{E}}, proving congruence by **SAS**. RHS requires a {{90°}} angle.",
      },
      {
        id: "transformations-similarity-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "congruence-similarity",
        question: "In triangles {{PQR}} and {{STU}}, {{∠P = ∠S = 90°}}, {{QR = TU = 13 cm}}, and {{PQ = ST = 5 cm}}. Which congruence condition proves {{△PQR ≡ △STU}}?",
        options: ["SAS", "ASA", "RHS", "SSS"],
        answerIndex: 2,
        hints: [
          "Check which side is opposite the {{90°}} angle at {{P}}: that side is {{QR}} (the hypotenuse!).",
          "Is the {{90°}} angle between the {{5 cm}} and {{13 cm}} sides? No — {{13 cm}} is opposite the {{90°}} angle.",
        ],
        explanation:
          "Both triangles have a right angle (**R**), equal hypotenuses {{QR = TU = 13 cm}} (**H**), and another equal side {{PQ = ST = 5 cm}} (**S**), proving congruence by **RHS** (not SAS, since the right angle is not included between {{5 cm}} and {{13 cm}}).",
      },
      {
        id: "transformations-similarity-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "congruence-similarity",
        question: "Triangle {{ABC}} has {{∠A = 40°}}, {{∠B = 75°}}, and {{AB = 6 cm}}. Triangle {{XYZ}} has {{∠X = 40°}}, {{∠Z = 65°}}, and {{XY = 6 cm}}. Which condition proves they are congruent?",
        options: ["ASA", "SAS", "RHS", "SSS"],
        answerIndex: 0,
        hints: [
          "Find the missing angle {{∠Y}} in triangle {{XYZ}} using the {{180°}} angle sum of a triangle.",
          "{{∠Y = 180° - 40° - 65° = 75°}}, which matches {{∠B = 75°}}, and side {{XY = 6 cm}} lies right between {{40°}} and {{75°}}!",
        ],
        explanation:
          "In {{△XYZ}}, {{∠Y = 180° - 40° - 65° = 75°}}. Both triangles now have angles {{40°}} and {{75°}} with the included side {{6 cm}} between them, proving congruence by **ASA**.",
      },
      {
        id: "transformations-similarity-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "congruence-similarity",
        question: "Why is **ASS** (two sides and a non-included acute angle) NOT a valid triangle congruence condition?",
        options: [
          "Because the third side must always be longer",
          "Because angles cannot be measured accurately",
          "Because triangles always need three side lengths",
          "Because two different triangles can fit the data",
        ],
        answerIndex: 3,
        hints: [
          "Picture swinging the second side like a compass arc around the top vertex.",
          "That arc can cut the base line in TWO different places, forming one acute and one obtuse triangle!",
        ],
        explanation:
          "With a non-included acute angle, the swinging side can meet the base at two distinct points, producing two non-congruent triangles with the exact same side-side-angle measurements.",
      },
      {
        id: "transformations-similarity-m3-q07",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "congruence-similarity",
        question: "Two similar triangles have corresponding bases of {{6 cm}} and {{15 cm}}. A side on the smaller triangle is {{8 cm}}. What is the corresponding side on the larger triangle?",
        options: ["{{17 cm}}", "{{20 cm}}", "{{18 cm}}", "{{24 cm}}"],
        answerIndex: 1,
        hints: [
          "Find the scale factor from smaller to larger: {{k = 15 / 6}}.",
          "Multiply {{8 cm}} by {{2.5}}.",
        ],
        explanation:
          "The linear scale factor is {{k = 15 / 6 = 2.5}}, so the matching side is {{8 * 2.5 = 20 cm}}. Adding the difference {{15 - 6 = 9}} to {{8}} wrongly gives {{17 cm}}.",
      },
      {
        id: "transformations-similarity-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "congruence-similarity",
        question: "Two similar trapeziums have parallel bases {{12 cm}} and {{9 cm}} on the larger shape. On the smaller shape, the base corresponding to {{12 cm}} is {{8 cm}}. Find the other parallel base on the smaller shape.",
        options: ["{{5 cm}}", "{{7 cm}}", "{{6 cm}}", "{{4.5 cm}}"],
        answerIndex: 2,
        hints: [
          "Find the fractional scale factor from larger to smaller: {{k = 8 / 12}}.",
          "Multiply {{9 cm}} by {{2/3}}.",
        ],
        explanation:
          "Scale factor {{k = 8 / 12 = 2/3}}, so the corresponding base is {{9 * (2/3) = 6 cm}}. Subtracting {{4 cm}} from {{9 cm}} wrongly gives {{5 cm}}.",
      },
      {
        id: "transformations-similarity-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "congruence-similarity",
        question: "Which pair of 2D shapes is ALWAYS mathematically similar regardless of their sizes?",
        options: [
          "Any two equilateral triangles",
          "Any two isosceles triangles",
          "Any two straight rectangles",
          "Any two regular-side rhombuses",
        ],
        answerIndex: 0,
        hints: [
          "Similar shapes must ALWAYS have identical corresponding angles AND proportional sides.",
          "Test if you can draw a tall thin rectangle and a short fat rectangle — are their sides in the same ratio?",
        ],
        explanation:
          "Every equilateral triangle has all angles equal to {{60°}} and all three sides equal, so any two are enlargements of each other. Rectangles can have different length-to-width ratios, and isosceles triangles or rhombuses can have different angles.",
      },
      {
        id: "transformations-similarity-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "congruence-similarity",
        question: "In triangle {{ABC}}, segment {{DE}} is parallel to {{BC}} with {{D}} on {{AB}} and {{E}} on {{AC}}. Given {{AD = 4 cm}}, {{DB = 6 cm}} and {{DE = 6 cm}}, calculate {{BC}}.",
        options: ["{{9 cm}}", "{{12 cm}}", "{{10 cm}}", "{{15 cm}}"],
        answerIndex: 3,
        hints: [
          "Triangles {{ADE}} and {{ABC}} are similar because {{DE}} is parallel to {{BC}} (corresponding angles are equal).",
          "Watch out: the full side {{AB}} of the large triangle is {{AD + DB = 4 + 6 = 10 cm}}, NOT {{6 cm}}!",
          "Scale factor {{k = AB / AD = 10 / 4 = 2.5}}; multiply {{DE = 6 cm}} by {{2.5}}.",
        ],
        explanation:
          "The full side {{AB = 4 + 6 = 10 cm}}. Comparing similar triangles {{ADE}} and {{ABC}} gives {{k = 10 / 4 = 2.5}}, so {{BC = 6 * 2.5 = 15 cm}}. Using {{6 / 4 = 1.5}} wrongly yields {{9 cm}}.",
      },
      {
        id: "transformations-similarity-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "congruence-similarity",
        question: "In triangle {{PQR}}, {{ST}} is parallel to {{QR}} with {{S}} on {{PQ}} and {{T}} on {{PR}}. Given {{PS = 6 cm}}, {{PQ = 15 cm}} and {{QR = 20 cm}}, calculate {{ST}}.",
        options: ["{{12 cm}}", "{{8 cm}}", "{{11 cm}}", "{{10 cm}}"],
        answerIndex: 1,
        hints: [
          "Triangles {{PST}} and {{PQR}} are similar with corresponding sides {{PS = 6 cm}} and {{PQ = 15 cm}}.",
          "Find the scale factor from large to small: {{6 / 15 = 2/5 = 0.4}}, then multiply {{20 cm}} by {{0.4}}.",
        ],
        explanation:
          "Since {{PS / PQ = 6 / 15 = 2/5}}, we get {{ST = 20 * (2/5) = 8 cm}}. Using the remaining segment {{SQ = 9 cm}} gives {{9/15 * 20 = 12 cm}}, which is a classic trap.",
      },
      {
        id: "transformations-similarity-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "reflection-translation",
        question: "Which single transformation reverses the orientation of a 2D shape (turning clockwise vertex labels anticlockwise)?",
        options: ["Translation", "Rotation", "Reflection", "Enlargement"],
        answerIndex: 2,
        hints: [
          "Imagine looking at a clock face after each transformation.",
          "Which transformation makes the hands of a clock appear to run backwards?",
        ],
        explanation:
          "Only a **reflection** flips a shape over, reversing clockwise into anticlockwise. Translations, rotations, and positive enlargements all preserve orientation.",
      },
      {
        id: "transformations-similarity-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "reflection-translation",
        question: "A shape is reflected in the line {{x = 0}} and then reflected in the line {{x = 3}}. What SINGLE transformation maps the original shape directly onto the final image?",
        options: [
          "Translation by vector {{(6, 0)}}",
          "Translation by vector {{(3, 0)}}",
          "Reflection in the line {{x = 1.5}}",
          "Translation by vector {{(-6, 0)}}",
        ],
        answerIndex: 0,
        hints: [
          "Test a sample point like {{(1, 2)}} through BOTH reflections in order.",
          "{{(1, 2)}} reflects in {{x = 0}} to {{(-1, 2)}}, which is {{4}} units left of {{x = 3}}, so it reflects to {{(7, 2)}}.",
        ],
        explanation:
          "Reflecting {{(x, y)}} in {{x = 0}} gives {{(-x, y)}}, and reflecting in {{x = 3}} gives {{(6 - (-x), y) = (x + 6, y)}} — a translation by {{(6, 0)}} (twice the gap between the parallel mirrors!).",
      },
      {
        id: "transformations-similarity-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "rotation",
        question: "A triangle is reflected in the {{x}}-axis ({{y = 0}}) and then reflected in the {{y}}-axis ({{x = 0}}). What SINGLE transformation has the exact same effect?",
        options: [
          "Reflection in the line {{y = -x}}",
          "Rotation {{90°}} clockwise about {{(0, 0)}}",
          "Reflection in the line {{y = x}}",
          "Rotation {{180°}} about {{(0, 0)}}",
        ],
        answerIndex: 3,
        hints: [
          "Track a general point {{(x, y)}} (or test {{(2, 5)}}) through both reflections.",
          "Reflection in {{y = 0}} sends {{(2, 5) -> (2, -5)}}; reflection in {{x = 0}} then sends {{(2, -5) -> (-2, -5)}}.",
          "Which single transformation obeys {{(x, y) -> (-x, -y)}}?",
        ],
        explanation:
          "First {{(x, y) -> (x, -y)}}, then {{(x, -y) -> (-x, -y)}}. Two reflections cancel their flips (restoring orientation) and match **rotation {{180°}} about {{(0, 0)}}**.",
      },
      {
        id: "transformations-similarity-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "reflection-translation",
        question: "Triangle {{T}} is translated by vector {{(3, -2)}} and then translated by vector {{(-5, 6)}} to give {{T'}}. Which single translation vector maps {{T'}} BACK onto {{T}}?",
        options: ["{{(-2, 4)}}", "{{(2, -4)}}", "{{(8, -8)}}", "{{(-2, -4)}}"],
        answerIndex: 1,
        hints: [
          "First combine the two forward translations by adding their components: {{(3 + (-5), -2 + 6)}}.",
          "The combined forward vector is {{(-2, 4)}}. Now reverse it to go from {{T'}} back to {{T}}!",
        ],
        explanation:
          "The net translation from {{T}} to {{T'}} is {{(3 - 5, -2 + 6) = (-2, 4)}}. To map {{T'}} back to {{T}}, negate both components to get {{(2, -4)}}.",
      },
    ],
  },
];
