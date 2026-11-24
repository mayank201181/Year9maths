import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "pythagoras-trigonometry-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "right-triangle-language",
      question: "Right-angled triangle {{XYZ}} has {{∠Y = 90°}}, {{XY = 9 cm}}, {{YZ = 12 cm}}, and {{XZ = 15 cm}}. What is the length of the **hypotenuse** (in cm)?",
      answer: { type: "number", value: 15, display: "15 cm" },
      hints: ["The hypotenuse sits directly opposite the {{90°}} angle and is always the longest side."],
      solution: ["Opposite {{∠Y = 90°}} is side {{XZ = 15 cm}} (the longest side)."],
    },
    {
      id: "pythagoras-trigonometry-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "pythagoras-theorem",
      question: "A right-angled triangle has perpendicular sides {{6 cm}} and {{8 cm}}. Calculate the length of the hypotenuse (in cm).",
      answer: { type: "number", value: 10, display: "10 cm" },
      traps: [
        { spec: { type: "number", value: 100 }, feedback: "Don't forget to take the square root of 100!" },
        { spec: { type: "number", value: 14 }, feedback: "Square first (6² + 8² = 100), then square-root — never just add 6 + 8." },
      ],
      hints: ["Add the squares {{6^2 + 8^2}} and then take the square root."],
      solution: ["{{c = sqrt(6^2 + 8^2) = sqrt(36 + 64) = sqrt(100) = 10 cm}}."],
    },
    {
      id: "pythagoras-trigonometry-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "pythagoras-theorem",
      question: "A right-angled triangle has hypotenuse {{13 cm}} and one shorter side {{5 cm}}. Find the length of the other shorter side (in cm).",
      answer: { type: "number", value: 12, display: "12 cm" },
      traps: [
        { spec: { type: "number", value: 144 }, feedback: "Take the square root of 144 to get the side length." },
      ],
      hints: [
        "Since you are finding a shorter side, SUBTRACT squares: {{13^2 - 5^2}}.",
        "Evaluate {{sqrt(169 - 25)}}.",
      ],
      solution: ["{{a = sqrt(13^2 - 5^2) = sqrt(169 - 25) = sqrt(144) = 12 cm}}."],
    },
    {
      id: "pythagoras-trigonometry-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "pythagoras-theorem",
      question: "Find the hypotenuse of a right-angled triangle with legs {{12 cm}} and {{7 cm}}. Give your answer to {{1}} decimal place (in cm).",
      answer: { type: "number", value: 13.9, tolerance: 0.1, display: "13.9 cm" },
      traps: [
        { spec: { type: "number", value: 9.7, tolerance: 0.1 }, feedback: "Finding the hypotenuse means ADDING squares (12² + 7²), not subtracting." },
      ],
      hints: [
        "Add squares: {{c^2 = 12^2 + 7^2 = 144 + 49 = 193}}.",
        "Calculate {{sqrt(193)}} and round to {{1}} decimal place.",
      ],
      solution: ["{{c = sqrt(144 + 49) = sqrt(193) = 13.892... = 13.9 cm}} (to {{1}} d.p.)."],
    },
    {
      id: "pythagoras-trigonometry-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "similar-right-triangles-ratios",
      question: "A right-angled triangle has sides {{3 cm}}, {{4 cm}}, and {{5 cm}}. Angle {{theta}} is opposite the {{4 cm}} side. Write {{sin(theta)}} as a fraction in simplest form.",
      answer: { type: "fraction", n: 4, d: 5, simplest: true, display: "{{4/5}}" },
      traps: [
        { spec: { type: "fraction", n: 3, d: 5 }, feedback: "3/5 is cos θ! For sin θ, divide Opposite (4) by Hypotenuse (5)." },
      ],
      hints: [
        "Identify {{O = 4}} and {{H = 5}}.",
        "Use **SOH**: {{sin(theta) = O / H}}.",
      ],
      solution: ["{{sin(theta) = O / H = 4/5}}."],
    },
    {
      id: "pythagoras-trigonometry-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      guideRef: "similar-right-triangles-ratios",
      question: "In a right-angled triangle, you know the side opposite {{theta}} is {{12 cm}} and the side adjacent to {{theta}} is {{9 cm}}. Which trig ratio should you use to find {{theta}}?",
      options: ["Sine (SOH)", "Cosine (CAH)", "Tangent (TOA)", "Pythagoras"],
      answerIndex: 2,
      hints: [
        "The two known sides are **O** and **A** (no hypotenuse is given).",
        "Match **O** and **A** in **SOH · CAH · TOA**.",
      ],
      explanation:
        "Opposite and Adjacent belong to **TOA** → **Tangent** ({{tan(theta) = 12 / 9}}).",
    },
    {
      id: "pythagoras-trigonometry-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "trig-finding-lengths",
      question: "In a right-angled triangle with hypotenuse {{20 cm}} and acute angle {{42°}}, calculate the length of the **opposite** side to {{1}} decimal place (in cm).",
      answer: { type: "number", value: 13.4, tolerance: 0.1, display: "13.4 cm" },
      traps: [
        { spec: { type: "number", value: 14.9, tolerance: 0.1 }, feedback: "20 × cos(42°) finds the ADJACENT side! For the opposite side, use sin(42°)." },
      ],
      hints: [
        "Write **SOH**: {{sin(42°) = x / 20}}.",
        "Unknown on top → multiply: {{x = 20 * sin(42°)}} (check calculator is in DEG mode!).",
      ],
      solution: ["{{x = 20 * sin(42°) = 13.382... = 13.4 cm}} (to {{1}} d.p.)."],
    },
    {
      id: "pythagoras-trigonometry-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "trig-finding-lengths",
      question: "In a right-angled triangle, the side opposite {{25°}} is {{7 cm}}. Calculate the **hypotenuse** to {{1}} decimal place (in cm).",
      answer: { type: "number", value: 16.6, tolerance: 0.1, display: "16.6 cm" },
      traps: [
        { spec: { type: "number", value: 3.0, tolerance: 0.1 }, feedback: "A hypotenuse cannot be shorter than 7 cm! Since x is in the denominator of sin(25°) = 7/x, DIVIDE: 7 ÷ sin(25°)." },
      ],
      hints: [
        "Write **SOH**: {{sin(25°) = 7 / x}}.",
        "Unknown on bottom → divide: {{x = 7 / sin(25°)}}.",
      ],
      solution: ["{{x = 7 / sin(25°) = 16.563... = 16.6 cm}} (to {{1}} d.p.)."],
    },
    {
      id: "pythagoras-trigonometry-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "trig-finding-lengths",
      question: "*(Extension)* In a right-angled triangle, the side opposite acute angle {{theta}} is {{8 cm}} and the adjacent side is {{6 cm}}. Find angle {{theta}} to {{1}} decimal place (in degrees).",
      answer: { type: "number", value: 53.1, tolerance: 0.1, display: "53.1°" },
      traps: [
        { spec: { type: "number", value: 36.9, tolerance: 0.1 }, feedback: "You computed tan⁻¹(6/8) instead of tan⁻¹(8/6)! Remember tan θ = Opposite ÷ Adjacent." },
      ],
      hints: [
        "Use **TOA**: {{tan(theta) = 8 / 6}}.",
        "Apply inverse tangent: {{theta = tan^(-1)(8 / 6)}} in DEG mode.",
      ],
      solution: ["{{theta = tan^(-1)(8 / 6) = 53.130... = 53.1°}} (to {{1}} d.p.)."],
    },
    {
      id: "pythagoras-trigonometry-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "pythagoras-theorem",
      marks: 3,
      question:
        "A triangle has side lengths {{7 cm}}, {{11 cm}}, and {{13 cm}}. Use Pythagoras' theorem to decide whether this triangle is right-angled, showing clear calculations and a conclusion.",
      hints: [
        "Test whether the sum of the squares of the two shorter sides ({{7^2 + 11^2}}) equals the square of the longest side ({{13^2}}).",
        "Compare {{49 + 121}} with {{169}}.",
      ],
      modelAnswer:
        "7² + 11² = 49 + 121 = 170. Meanwhile, 13² = 169. Since 170 ≠ 169, the triangle is not right-angled.",
      markScheme: [
        { point: "Calculates 7² + 11² = 170", keywords: ["170"] },
        { point: "Calculates 13² = 169", keywords: ["169"] },
        { point: "Concludes clearly that the triangle is NOT right-angled because 170 ≠ 169", keywords: ["not right-angled", "not a right-angled", "not right angled", "no"] },
      ],
      commonError: "Testing 7 + 11 vs 13 instead of comparing the squares 7² + 11² vs 13².",
    },
  ],
  papers: [
    {
      id: "pythagoras-trigonometry-p1",
      title: "Practice Paper 1 — Pythagoras, Ratios & SOHCAHTOA",
      questions: [
        {
          id: "pythagoras-trigonometry-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "right-triangle-language",
          question: "In right-angled triangle {{DEF}}, {{∠E = 90°}}, {{DE = 7 cm}}, {{EF = 24 cm}}, and {{DF = 25 cm}}. What is the length of the side **adjacent** to angle {{∠F}} (in cm)?",
          answer: { type: "number", value: 24, display: "24 cm" },
          traps: [
            { spec: { type: "number", value: 25 }, feedback: "25 cm is the hypotenuse (opposite 90° at E), not the adjacent side." },
            { spec: { type: "number", value: 7 }, feedback: "7 cm (DE) is OPPOSITE angle F." },
          ],
          hints: ["Side {{EF}} connects vertex {{F}} to the {{90°}} angle at {{E}}."],
          solution: ["Hypotenuse {{DF = 25 cm}}, opposite to {{∠F}} is {{DE = 7 cm}}, so adjacent to {{∠F}} is {{EF = 24 cm}}."],
        },
        {
          id: "pythagoras-trigonometry-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "pythagoras-theorem",
          question: "A right-angled triangle has perpendicular sides {{5 cm}} and {{12 cm}}. Find its hypotenuse (in cm).",
          answer: { type: "number", value: 13, display: "13 cm" },
          hints: ["Add the squares {{5^2 + 12^2 = 169}} and take the square root."],
          solution: ["{{c = sqrt(25 + 144) = sqrt(169) = 13 cm}}."],
        },
        {
          id: "pythagoras-trigonometry-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "pythagoras-theorem",
          question: "A right-angled triangle has hypotenuse {{15 cm}} and one shorter side {{8 cm}}. Find the other shorter side to {{1}} decimal place (in cm).",
          answer: { type: "number", value: 12.7, tolerance: 0.1, display: "12.7 cm" },
          traps: [
            { spec: { type: "number", value: 17, tolerance: 0.1 }, feedback: "17 cm is longer than the hypotenuse! Subtract squares: 15² − 8²." },
          ],
          hints: [
            "Finding a shorter leg → subtract: {{15^2 - 8^2 = 225 - 64 = 161}}.",
            "Calculate {{sqrt(161)}} to {{1}} d.p.",
          ],
          solution: ["{{a = sqrt(225 - 64) = sqrt(161) = 12.688... = 12.7 cm}} (to {{1}} d.p.)."],
        },
        {
          id: "pythagoras-trigonometry-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "pythagoras-theorem",
          question: "A rectangle measures {{9 cm}} by {{14 cm}}. Calculate the length of its diagonal to {{1}} decimal place (in cm).",
          answer: { type: "number", value: 16.6, tolerance: 0.1, display: "16.6 cm" },
          hints: [
            "A diagonal splits a rectangle into two right-angled triangles with legs {{9 cm}} and {{14 cm}}.",
            "Compute {{sqrt(9^2 + 14^2) = sqrt(277)}} to {{1}} d.p.",
          ],
          solution: ["{{d = sqrt(81 + 196) = sqrt(277) = 16.643... = 16.6 cm}} (to {{1}} d.p.)."],
        },
        {
          id: "pythagoras-trigonometry-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "pythagoras-theorem",
          question: "An isosceles triangle has two equal sides of {{17 cm}} and a base of {{16 cm}}. Calculate its perpendicular height (in cm).",
          answer: { type: "number", value: 15, display: "15 cm" },
          traps: [
            { spec: { type: "number", value: 5.7, tolerance: 0.1 }, feedback: "Remember to HALVE the base (16 ÷ 2 = 8 cm) before applying Pythagoras!" },
          ],
          hints: [
            "Halve the base first: {{16 / 2 = 8 cm}}.",
            "Compute {{h = sqrt(17^2 - 8^2) = sqrt(289 - 64)}}.",
          ],
          solution: [
            "Half-base {{= 16 / 2 = 8 cm}}.",
            "{{h = sqrt(17^2 - 8^2) = sqrt(225) = 15 cm}}.",
          ],
        },
        {
          id: "pythagoras-trigonometry-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "pythagoras-theorem",
          question: "Find the straight-line distance between points {{P(-1, 4)}} and {{Q(5, -4)}} on a coordinate grid.",
          answer: { type: "number", value: 10, display: "10" },
          hints: [
            "Horizontal difference {{dx = 5 - (-1) = 6}}; vertical difference {{dy = |-4 - 4| = 8}}.",
            "Calculate {{sqrt(6^2 + 8^2)}}.",
          ],
          solution: ["{{dx = 6}}, {{dy = 8}}, so {{d = sqrt(36 + 64) = sqrt(100) = 10}}."],
        },
        {
          id: "pythagoras-trigonometry-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "similar-right-triangles-ratios",
          question: "A right-angled triangle has sides {{8 cm}}, {{15 cm}}, and {{17 cm}}, with angle {{theta}} opposite the {{8 cm}} side. Write {{cos(theta)}} as a simplified fraction.",
          answer: { type: "fraction", n: 15, d: 17, simplest: true, display: "{{15/17}}" },
          traps: [
            { spec: { type: "fraction", n: 8, d: 17 }, feedback: "8/17 is sin θ! Cosine uses Adjacent (15) ÷ Hypotenuse (17)." },
          ],
          hints: [
            "Identify {{H = 17}}, {{O = 8}}, so {{A = 15}}.",
            "Use **CAH**: {{cos(theta) = A / H}}.",
          ],
          solution: ["{{cos(theta) = A / H = 15/17}}."],
        },
        {
          id: "pythagoras-trigonometry-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "trig-finding-lengths",
          question: "In a right-angled triangle with hypotenuse {{14 cm}} and acute angle {{52°}}, find the **adjacent** side to {{1}} decimal place (in cm).",
          answer: { type: "number", value: 8.6, tolerance: 0.1, display: "8.6 cm" },
          traps: [
            { spec: { type: "number", value: 11.0, tolerance: 0.1 }, feedback: "14 × sin(52°) finds the OPPOSITE side! Use cos(52°) for adjacent." },
          ],
          hints: [
            "Use **CAH**: {{cos(52°) = A / 14}}.",
            "Multiply: {{A = 14 * cos(52°)}}.",
          ],
          solution: ["{{A = 14 * cos(52°) = 8.619... = 8.6 cm}} (to {{1}} d.p.)."],
        },
        {
          id: "pythagoras-trigonometry-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "trig-finding-lengths",
          question: "In a right-angled triangle, the side **adjacent** to {{34°}} is {{11 cm}}. Find the **opposite** side to {{1}} decimal place (in cm).",
          answer: { type: "number", value: 7.4, tolerance: 0.1, display: "7.4 cm" },
          traps: [
            { spec: { type: "number", value: 16.3, tolerance: 0.1 }, feedback: "In tan(34°) = O / 11, the unknown O is on TOP, so MULTIPLY: 11 × tan(34°)." },
          ],
          hints: [
            "Write **TOA**: {{tan(34°) = O / 11}}.",
            "Multiply: {{O = 11 * tan(34°)}}.",
          ],
          solution: ["{{O = 11 * tan(34°) = 7.419... = 7.4 cm}} (to {{1}} d.p.)."],
        },
        {
          id: "pythagoras-trigonometry-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "trig-finding-lengths",
          question: "In a right-angled triangle, the side **adjacent** to {{50°}} is {{8 cm}}. Find the **hypotenuse** to {{1}} decimal place (in cm).",
          answer: { type: "number", value: 12.4, tolerance: 0.1, display: "12.4 cm" },
          traps: [
            { spec: { type: "number", value: 5.1, tolerance: 0.1 }, feedback: "The hypotenuse must be longer than 8 cm! Since H is on the bottom of cos(50°) = 8/H, DIVIDE." },
          ],
          hints: [
            "Write **CAH**: {{cos(50°) = 8 / H}}.",
            "Unknown on bottom → divide: {{H = 8 / cos(50°)}}.",
          ],
          solution: ["{{H = 8 / cos(50°) = 12.445... = 12.4 cm}} (to {{1}} d.p.)."],
        },
        {
          id: "pythagoras-trigonometry-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "trig-finding-lengths",
          question: "In a right-angled triangle, the side **opposite** {{38°}} is {{14 cm}}. Find the **adjacent** side to {{1}} decimal place (in cm).",
          answer: { type: "number", value: 17.9, tolerance: 0.1, display: "17.9 cm" },
          traps: [
            { spec: { type: "number", value: 10.9, tolerance: 0.1 }, feedback: "Check: in tan(38°) = 14/A, the unknown A is on the BOTTOM, so divide: 14 ÷ tan(38°)." },
          ],
          hints: [
            "Write **TOA**: {{tan(38°) = 14 / A}}.",
            "Divide: {{A = 14 / tan(38°)}}.",
          ],
          solution: ["{{A = 14 / tan(38°) = 17.919... = 17.9 cm}} (to {{1}} d.p.)."],
        },
        {
          id: "pythagoras-trigonometry-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "trig-finding-lengths",
          question: "*(Extension)* In a right-angled triangle, the side opposite acute angle {{theta}} is {{9 cm}} and the hypotenuse is {{13 cm}}. Calculate {{theta}} to {{1}} decimal place (in degrees).",
          answer: { type: "number", value: 43.8, tolerance: 0.1, display: "43.8°" },
          traps: [
            { spec: { type: "number", value: 46.2, tolerance: 0.1 }, feedback: "46.2° comes from cos⁻¹(9/13)! Opposite and Hypotenuse use sin⁻¹(9/13)." },
          ],
          hints: [
            "Write **SOH**: {{sin(theta) = 9 / 13}}.",
            "Evaluate {{sin^(-1)(9 / 13)}} in DEG mode.",
          ],
          solution: ["{{theta = sin^(-1)(9 / 13) = 43.813... = 43.8°}} (to {{1}} d.p.)."],
        },
        {
          id: "pythagoras-trigonometry-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "pythagoras-theorem",
          marks: 3,
          question:
            "A builder marks out a corner of a garden shed using side lengths {{9 m}} and {{12 m}}, and measures the diagonal across the corner as {{15 m}}. Prove using Pythagoras' theorem that the corner is an exact {{90°}} angle.",
          hints: [
            "Calculate the sum of the squares of the two shorter sides: {{9^2 + 12^2}}.",
            "Compare your total directly with {{15^2}} and state your conclusion using the converse of Pythagoras' theorem.",
          ],
          modelAnswer:
            "Square and add the two shorter sides: 9² + 12² = 81 + 144 = 225. Now square the longest side: 15² = 225. Since a² + b² = c² (both equal 225), by the converse of Pythagoras' theorem the corner is a right angle.",
          markScheme: [
            { point: "Squares and adds the two shorter sides: 9² + 12² = 81 + 144", keywords: ["81", "144"] },
            { point: "Shows both 9² + 12² and 15² equal 225", keywords: ["225"] },
            { point: "Concludes it is a right angle because a² + b² = c² holds (converse of Pythagoras)", keywords: ["converse", "a^2 + b^2 = c^2", "a² + b² = c²", "is a right angle", "is right-angled"] },
          ],
          commonError: "Assuming the corner is already 90° instead of verifying 9² + 12² = 15² separately.",
        },
        {
          id: "pythagoras-trigonometry-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "similar-right-triangles-ratios",
          marks: 3,
          question:
            "Explain clearly, using the concept of **similar triangles**, why {{sin(25°)}} has the exact same numerical value in a tiny {{2 cm}} right-angled triangle and a giant {{200 m}} right-angled triangle.",
          hints: [
            "Find ALL three interior angles in both right-angled triangles.",
            "Explain how enlarging a triangle multiplies BOTH Opposite and Hypotenuse by the same scale factor {{k}}, and what happens when you divide {{O / H}}!",
          ],
          modelAnswer:
            "Both triangles have the exact same three angles (25°, 65°, and 90°), so they are mathematically similar. One triangle is an enlargement of the other, meaning every side is multiplied by the same scale factor k. When forming the ratio O / H, the scale factor k cancels out, leaving the ratio completely unchanged.",
          markScheme: [
            { point: "States both triangles share the same three angles (25°, 65°, 90° / AAA)", keywords: ["65", "same angles", "equal angles", "three angles", "aaa"] },
            { point: "Explains one is an enlargement of the other (proportional sides / scale factor k)", keywords: ["enlargement", "proportional", "scale factor", "scaled"] },
            { point: "Explains the scale factor cancels out in O / H, keeping the ratio constant", keywords: ["cancels", "cancel", "unchanged", "constant ratio", "o / h", "o/h"] },
          ],
          commonError: "Just saying 'because sin 25° is a button on the calculator' instead of explaining why similar triangles keep ratios constant.",
        },
        {
          id: "pythagoras-trigonometry-p1-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "trig-finding-lengths",
          marks: 3,
          question:
            "To find the hypotenuse {{x}} of a right-angled triangle where the side opposite {{48°}} is {{9 cm}}, a student calculates {{x = 9 * sin(48°) = 6.7 cm}}. Explain immediately why {{6.7 cm}} must be wrong, show the correct rearrangement, and find {{x}} to {{1}} decimal place.",
          hints: [
            "Compare the student's answer ({{6.7 cm}}) against the known opposite leg ({{9 cm}}) — can a hypotenuse be shorter than a leg?",
            "Write {{sin(48°) = 9 / x}}, rearrange by dividing, and calculate {{9 / sin(48°)}}.",
          ],
          modelAnswer:
            "6.7 cm is impossible because the hypotenuse must be the longest side (longer than 9 cm). Writing sin(48°) = 9 / x puts x in the denominator, so we must divide: x = 9 / sin(48°) = 12.1 cm (to 1 d.p.).",
          markScheme: [
            { point: "Explains 6.7 cm is impossible because the hypotenuse must be the longest side (greater than 9 cm)", keywords: ["longest side", "longer than 9", "greater than 9", "shorter than"] },
            { point: "Shows the correct rearrangement x = 9 ÷ sin(48°) (dividing)", keywords: ["9 / sin", "9/sin", "9 ÷ sin", "divide"] },
            { point: "Finds the correct value x = 12.1 cm", keywords: ["12.1"] },
          ],
          commonError: "Forgetting to explain why 6.7 cm is geometrically impossible.",
        },
      ],
    },
    {
      id: "pythagoras-trigonometry-p2",
      title: "Practice Paper 2 — 2D Applications & Inverse Trigonometry",
      questions: [
        {
          id: "pythagoras-trigonometry-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "right-triangle-language",
          question: "One acute angle in a right-angled triangle is {{29°}}. What is the size of the other acute angle (in degrees)?",
          answer: { type: "number", value: 61, display: "61°" },
          hints: ["Subtract {{29°}} from {{90°}}."],
          solution: ["{{90° - 29° = 61°}}."],
        },
        {
          id: "pythagoras-trigonometry-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "pythagoras-theorem",
          question: "Calculate the hypotenuse of a right-angled triangle with legs {{6 cm}} and {{10 cm}}, to {{1}} decimal place (in cm).",
          answer: { type: "number", value: 11.7, tolerance: 0.1, display: "11.7 cm" },
          traps: [
            { spec: { type: "number", value: 8, tolerance: 0.1 }, feedback: "8 cm would be the missing leg if 10 cm were the hypotenuse! Here both 6 and 10 are legs, so ADD squares." },
          ],
          hints: [
            "Both {{6 cm}} and {{10 cm}} are legs (neither is the hypotenuse), so ADD squares!",
            "Compute {{sqrt(36 + 100) = sqrt(136)}} to {{1}} d.p.",
          ],
          solution: ["{{c = sqrt(6^2 + 10^2) = sqrt(136) = 11.661... = 11.7 cm}} (to {{1}} d.p.)."],
        },
        {
          id: "pythagoras-trigonometry-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "pythagoras-theorem",
          question: "A right-angled triangle has hypotenuse {{13 cm}} and one shorter side {{8 cm}}. Find the other shorter side to {{1}} decimal place (in cm).",
          answer: { type: "number", value: 10.2, tolerance: 0.1, display: "10.2 cm" },
          hints: [
            "Subtract squares: {{13^2 - 8^2 = 169 - 64 = 105}}.",
            "Evaluate {{sqrt(105)}} to {{1}} d.p.",
          ],
          solution: ["{{a = sqrt(169 - 64) = sqrt(105) = 10.247... = 10.2 cm}} (to {{1}} d.p.)."],
        },
        {
          id: "pythagoras-trigonometry-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "pythagoras-theorem",
          question: "Calculate the length of the diagonal of a square with side length {{8 cm}}, to {{1}} decimal place (in cm).",
          answer: { type: "number", value: 11.3, tolerance: 0.1, display: "11.3 cm" },
          hints: [
            "Both perpendicular legs of the half-square are {{8 cm}}.",
            "Compute {{sqrt(8^2 + 8^2) = sqrt(128)}} to {{1}} d.p.",
          ],
          solution: ["{{d = sqrt(64 + 64) = sqrt(128) = 11.313... = 11.3 cm}} (to {{1}} d.p.)."],
        },
        {
          id: "pythagoras-trigonometry-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "pythagoras-theorem",
          question: "Find the perpendicular height of an equilateral triangle of side length {{10 cm}}, giving your answer to {{1}} decimal place (in cm).",
          answer: { type: "number", value: 8.7, tolerance: 0.1, display: "8.7 cm" },
          hints: [
            "Drop the perpendicular height to split the base into two equal halves of {{5 cm}}.",
            "Calculate {{h = sqrt(10^2 - 5^2) = sqrt(75)}} to {{1}} d.p.",
          ],
          solution: [
            "Half-base {{= 5 cm}}, hypotenuse {{= 10 cm}}.",
            "{{h = sqrt(100 - 25) = sqrt(75) = 8.660... = 8.7 cm}} (to {{1}} d.p.).",
          ],
        },
        {
          id: "pythagoras-trigonometry-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "similar-right-triangles-ratios",
          question: "A right-angled triangle has sides {{10 cm}}, {{24 cm}}, and {{26 cm}}. Angle {{theta}} is opposite the {{10 cm}} side. Write {{tan(theta)}} as a fraction in simplest form.",
          answer: { type: "fraction", n: 5, d: 12, simplest: true, display: "{{5/12}}" },
          traps: [
            { spec: { type: "fraction", n: 5, d: 13 }, feedback: "5/13 is sin θ! Tangent uses Opposite (10) ÷ Adjacent (24)." },
          ],
          hints: [
            "{{O = 10}}, {{A = 24}} (ignore {{H = 26}} for tangent).",
            "Simplify {{10 / 24}} by dividing numerator and denominator by {{2}}.",
          ],
          solution: ["{{tan(theta) = 10 / 24 = 5/12}}."],
        },
        {
          id: "pythagoras-trigonometry-p2-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "trig-finding-lengths",
          question: "In a right-angled triangle, {{tan(33°) = x / 18}}. Which exact calculation gives {{x}}?",
          options: [
            "{{18 * tan(33°)}}",
            "{{18 / tan(33°)}}",
            "{{tan(33°) / 18}}",
            "{{tan^(-1)(18 / 33)}}",
          ],
          answerIndex: 0,
          hints: [
            "Notice that {{x}} sits in the numerator (top of the fraction).",
            "Multiply both sides by {{18}} to isolate {{x}}.",
          ],
          explanation:
            "Multiplying both sides of {{tan(33°) = x / 18}} by {{18}} gives {{x = 18 * tan(33°)}}.",
        },
        {
          id: "pythagoras-trigonometry-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "trig-finding-lengths",
          question: "In a right-angled triangle with hypotenuse {{13 cm}} and acute angle {{37°}}, calculate the **adjacent** side to {{1}} decimal place (in cm).",
          answer: { type: "number", value: 10.4, tolerance: 0.1, display: "10.4 cm" },
          hints: [
            "Write **CAH**: {{cos(37°) = A / 13}}.",
            "Multiply: {{A = 13 * cos(37°)}}.",
          ],
          solution: ["{{A = 13 * cos(37°) = 10.382... = 10.4 cm}} (to {{1}} d.p.)."],
        },
        {
          id: "pythagoras-trigonometry-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "trig-finding-lengths",
          question: "In a right-angled triangle with hypotenuse {{17 cm}} and acute angle {{29°}}, calculate the **opposite** side to {{1}} decimal place (in cm).",
          answer: { type: "number", value: 8.2, tolerance: 0.1, display: "8.2 cm" },
          hints: [
            "Write **SOH**: {{sin(29°) = O / 17}}.",
            "Multiply: {{O = 17 * sin(29°)}}.",
          ],
          solution: ["{{O = 17 * sin(29°) = 8.241... = 8.2 cm}} (to {{1}} d.p.)."],
        },
        {
          id: "pythagoras-trigonometry-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "trig-finding-lengths",
          question: "In a right-angled triangle, the side **adjacent** to {{42°}} is {{11 cm}}. Calculate the **hypotenuse** to {{1}} decimal place (in cm).",
          answer: { type: "number", value: 14.8, tolerance: 0.1, display: "14.8 cm" },
          traps: [
            { spec: { type: "number", value: 8.2, tolerance: 0.1 }, feedback: "Unknown H is in the denominator of cos(42°) = 11/H, so DIVIDE: 11 ÷ cos(42°)." },
          ],
          hints: [
            "Write **CAH**: {{cos(42°) = 11 / H}}.",
            "Divide: {{H = 11 / cos(42°)}}.",
          ],
          solution: ["{{H = 11 / cos(42°) = 14.802... = 14.8 cm}} (to {{1}} d.p.)."],
        },
        {
          id: "pythagoras-trigonometry-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "trig-finding-lengths",
          question: "In a right-angled triangle, the side **opposite** {{54°}} is {{16 cm}}. Calculate the **adjacent** side to {{1}} decimal place (in cm).",
          answer: { type: "number", value: 11.6, tolerance: 0.1, display: "11.6 cm" },
          traps: [
            { spec: { type: "number", value: 22.0, tolerance: 0.1 }, feedback: "Since 54° > 45°, the adjacent side must be SHORTER than 16 cm! Divide: 16 ÷ tan(54°)." },
          ],
          hints: [
            "Write **TOA**: {{tan(54°) = 16 / A}}.",
            "Divide: {{A = 16 / tan(54°)}}.",
          ],
          solution: ["{{A = 16 / tan(54°) = 11.624... = 11.6 cm}} (to {{1}} d.p.)."],
        },
        {
          id: "pythagoras-trigonometry-p2-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "trig-finding-lengths",
          question: "*(Extension)* In a right-angled triangle, the side adjacent to acute angle {{theta}} is {{6 cm}} and the hypotenuse is {{11 cm}}. Find {{theta}} to {{1}} decimal place (in degrees).",
          answer: { type: "number", value: 56.9, tolerance: 0.1, display: "56.9°" },
          hints: [
            "Write **CAH**: {{cos(theta) = 6 / 11}}.",
            "Use inverse cosine: {{theta = cos^(-1)(6 / 11)}}.",
          ],
          solution: ["{{theta = cos^(-1)(6 / 11) = 56.944... = 56.9°}} (to {{1}} d.p.)."],
        },
        {
          id: "pythagoras-trigonometry-p2-q13",
          kind: "short",
          difficulty: "core",
          guideRef: "trig-finding-lengths",
          question: "*(Extension)* In a right-angled triangle, the side opposite acute angle {{theta}} is {{14 cm}} and the adjacent side is {{9 cm}}. Find {{theta}} to {{1}} decimal place (in degrees).",
          answer: { type: "number", value: 57.3, tolerance: 0.1, display: "57.3°" },
          hints: [
            "Write **TOA**: {{tan(theta) = 14 / 9}}.",
            "Evaluate {{tan^(-1)(14 / 9)}} in DEG mode.",
          ],
          solution: ["{{theta = tan^(-1)(14 / 9) = 57.264... = 57.3°}} (to {{1}} d.p.)."],
        },
        {
          id: "pythagoras-trigonometry-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "pythagoras-theorem",
          marks: 3,
          question:
            "A rectangular wooden gate measures {{1.8 m}} wide and {{2.4 m}} tall. A carpenter fits one straight diagonal brace across the gate. Show clearly how to calculate the length of the diagonal brace, and find the total length of wood needed for the four outer edges plus this one diagonal brace.",
          hints: [
            "Use Pythagoras on legs {{1.8 m}} and {{2.4 m}}: compute {{1.8^2 + 2.4^2}}.",
            "Take the square root to get the brace length, then add the outer perimeter {{2 * (1.8 + 2.4)}}.",
          ],
          modelAnswer:
            "Diagonal² = 1.8² + 2.4² = 3.24 + 5.76 = 9, so the diagonal brace is √9 = 3 m. The outer perimeter is 2 × (1.8 + 2.4) = 8.4 m, giving a total wood length of 8.4 + 3 = 11.4 m.",
          markScheme: [
            { point: "Sets up Pythagoras: 1.8² + 2.4² = 3.24 + 5.76 = 9", keywords: ["3.24", "5.76", "= 9", "=9"] },
            { point: "Finds the diagonal brace length is 3 m", keywords: ["3 m", "3.0 m", "brace is 3", "brace = 3", "√9 = 3"] },
            { point: "Adds perimeter (8.4 m) + brace (3 m) = 11.4 m", keywords: ["11.4"] },
          ],
          commonError: "Forgetting to include all four sides of the rectangular frame when finding the total wood.",
        },
        {
          id: "pythagoras-trigonometry-p2-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "trig-finding-lengths",
          marks: 3,
          question:
            "A vertical radio mast stands on flat ground. From a point {{18 m}} horizontally from the base of the mast, the angle of elevation to the top is {{33°}}. Show clearly which trig ratio applies, write the calculation, and find the height of the mast to {{1}} decimal place.",
          hints: [
            "The ground distance ({{18 m}}) is **Adjacent** to {{33°}} and the mast height {{h}} is **Opposite** {{33°}}.",
            "Use **TOA**: {{tan(33°) = h / 18 => h = 18 * tan(33°)}}.",
          ],
          modelAnswer:
            "Relative to 33°, the height is Opposite and 18 m is Adjacent, so use tangent (TOA): tan(33°) = h / 18. Rearranging gives h = 18 × tan(33°) = 11.689... = 11.7 m (to 1 d.p.).",
          markScheme: [
            { point: "Identifies tangent (TOA) from Opposite and Adjacent", keywords: ["tan", "tangent", "toa"] },
            { point: "Writes the rearranged calculation 18 × tan(33°)", keywords: ["18 × tan", "18 * tan", "18 tan", "18tan"] },
            { point: "States the correct rounded height 11.7 m", keywords: ["11.7"] },
          ],
          commonError: "Dividing 18 by tan(33°) instead of multiplying when h is in the numerator.",
        },
      ],
    },
  ],
  challenge: [
    {
      id: "pythagoras-trigonometry-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "trig-finding-lengths",
      strategy: "Find the shared bridge side first and keep full calculator precision",
      question:
        "Two right-angled triangles {{ABD}} and {{CBD}} share the vertical side {{BD}}, with {{∠ADB = ∠CDB = 90°}}. In {{△ABD}}, hypotenuse {{AB = 12 cm}} and {{∠BAD = 35°}}. In {{△CBD}}, {{∠BCD = 48°}}. Calculate hypotenuse {{BC}} to {{1}} decimal place (in cm), keeping full precision for {{BD}}.",
      answer: { type: "number", value: 9.3, tolerance: 0.1, display: "9.3 cm" },
      hints: [
        "First work in {{△ABD}} to find the shared vertical side {{BD}} (opposite {{35°}} with hypotenuse {{12 cm}}).",
        "{{BD = 12 * sin(35°) = 6.8829... cm}} — keep this full value in your calculator (`ANS`)!",
        "Now work in {{△CBD}}: {{BD}} is opposite {{48°}} and {{BC}} is the hypotenuse, so {{BC = BD / sin(48°)}}.",
      ],
      solution: [
        "In {{△ABD}}: {{BD = 12 * sin(35°) = 6.882917... cm}}.",
        "In {{△CBD}}: {{sin(48°) = BD / BC => BC = (12 * sin(35°)) / sin(48°) = 9.2619... cm}}.",
        "Rounded to {{1}} d.p.: {{BC = 9.3 cm}}.",
      ],
    },
    {
      id: "pythagoras-trigonometry-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "pythagoras-theorem",
      strategy: "Split a compound shape into a rectangle and a right-angled triangle",
      question:
        "A right-angled trapezium {{ABCD}} has horizontal parallel sides {{AB = 8 cm}} (top) and {{DC = 14 cm}} (bottom), vertical side {{AD}} perpendicular to both bases, and slanted side {{BC = 10 cm}}. Calculate the **area** of the trapezium (in {{cm^2}}).",
      answer: { type: "number", value: 88, display: "88 cm²" },
      traps: [
        { spec: { type: "number", value: 110 }, feedback: "10 cm is the SLANTED edge, not the perpendicular height! Drop a vertical line from B to DC to find height AD first." },
      ],
      hints: [
        "Drop a perpendicular from {{B}} down to {{DC}} at point {{E}}, forming a rectangle of width {{8 cm}} and a right-angled triangle {{BEC}}.",
        "The base of triangle {{BEC}} is {{14 - 8 = 6 cm}} and its hypotenuse is {{BC = 10 cm}}.",
        "Find perpendicular height {{h = sqrt(10^2 - 6^2) = 8 cm}}, then apply trapezium area {{1/2 * (a + b) * h}}.",
      ],
      solution: [
        "Horizontal overhang {{= 14 - 8 = 6 cm}}.",
        "Perpendicular height {{h = sqrt(10^2 - 6^2) = sqrt(64) = 8 cm}}.",
        "Area {{= 1/2 * (8 + 14) * 8 = 11 * 8 = 88 cm^2}}.",
      ],
    },
    {
      id: "pythagoras-trigonometry-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "pythagoras-theorem",
      strategy: "Apply Pythagoras in two perpendicular right-angled planes",
      question:
        "A closed rectangular box (cuboid) has internal dimensions {{6 cm}} by {{8 cm}} by {{24 cm}}. Use Pythagoras' theorem twice to find the exact length of the longest straight thin rod that fits diagonally inside the box (in cm).",
      answer: { type: "number", value: 26, display: "26 cm" },
      traps: [
        { spec: { type: "number", value: 10 }, feedback: "10 cm is only the diagonal across the flat 6 × 8 base! Now combine 10 cm with the 24 cm height." },
      ],
      hints: [
        "First find the diagonal {{d}} across the flat {{6 cm * 8 cm}} floor using Pythagoras.",
        "{{d = sqrt(6^2 + 8^2) = 10 cm}}.",
        "Now the floor diagonal ({{10 cm}}) and vertical edge ({{24 cm}}) meet at {{90°}} — find the 3D space diagonal {{sqrt(10^2 + 24^2)}}!",
      ],
      solution: [
        "Floor diagonal {{= sqrt(6^2 + 8^2) = sqrt(100) = 10 cm}}.",
        "Space diagonal {{= sqrt(10^2 + 24^2) = sqrt(100 + 576) = sqrt(676) = 26 cm}} (or directly {{sqrt(6^2 + 8^2 + 24^2) = 26 cm}}).",
      ],
    },
    {
      id: "pythagoras-trigonometry-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "trig-finding-lengths",
      strategy: "Decompose overlapping right-angled triangles sharing one height",
      question:
        "From the top of a vertical {{30 m}} lighthouse, two boats lie on the same straight line out to sea. The angle of depression to the closer boat is {{42°}}, and to the farther boat is {{28°}}. Calculate the distance between the two boats to {{1}} decimal place (in m).",
      answer: { type: "number", value: 23.1, tolerance: 0.1, display: "23.1 m" },
      hints: [
        "Use alternate angles: the angles of elevation from the two boats up to the lighthouse top are {{42°}} and {{28°}}.",
        "Find each boat's horizontal distance from the foot of the lighthouse: {{d_1 = 30 / tan(42°)}} and {{d_2 = 30 / tan(28°)}}.",
        "Subtract {{d_2 - d_1}} using full unrounded calculator values!",
      ],
      solution: [
        "Closer boat distance: {{d_1 = 30 / tan(42°) = 33.3183... m}}.",
        "Farther boat distance: {{d_2 = 30 / tan(28°) = 56.4217... m}}.",
        "Distance between boats {{= 56.4217... - 33.3183... = 23.103... = 23.1 m}} (to {{1}} d.p.).",
      ],
    },
    {
      id: "pythagoras-trigonometry-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "pythagoras-theorem",
      strategy: "Form and solve an algebraic quadratic from Pythagoras' theorem",
      question:
        "A right-angled triangle has perpendicular sides {{x cm}} and {{(x + 7) cm}}, and hypotenuse {{(x + 8) cm}}, where {{x > 0}}. Use Pythagoras' theorem to find the exact value of {{x}}.",
      answer: { type: "number", value: 5, display: "5" },
      hints: [
        "Substitute into {{a^2 + b^2 = c^2}}: {{x^2 + (x + 7)^2 = (x + 8)^2}}.",
        "Expand both brackets carefully: {{x^2 + (x^2 + 14x + 49) = x^2 + 16x + 64}}.",
        "Rearrange to {{x^2 - 2x - 15 = 0}}, factorise into {{(x - 5)(x + 3) = 0}}, and choose the positive root {{x > 0}}.",
      ],
      solution: [
        "{{x^2 + (x + 7)^2 = (x + 8)^2 => 2x^2 + 14x + 49 = x^2 + 16x + 64}}.",
        "Simplify: {{x^2 - 2x - 15 = 0 => (x - 5)(x + 3) = 0}}.",
        "Since {{x > 0}}, {{x = 5}} (giving the {{5–12–13}} right-angled triangle!).",
      ],
    },
    {
      id: "pythagoras-trigonometry-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "trig-finding-lengths",
      strategy: "Locate the midpoint right-angled sub-triangle before applying inverse trig",
      question:
        "*(Extension)* In right-angled triangle {{PQR}} with {{∠Q = 90°}}, {{PQ = 10 cm}} and {{QR = 15 cm}}. Point {{M}} is the midpoint of {{PQ}}. Calculate angle {{∠QMR}} to {{1}} decimal place (in degrees).",
      answer: { type: "number", value: 71.6, tolerance: 0.1, display: "71.6°" },
      traps: [
        { spec: { type: "number", value: 56.3, tolerance: 0.1 }, feedback: "56.3° is ∠QPR using the full side PQ = 10 cm! Use the midpoint leg QM = 5 cm instead." },
      ],
      hints: [
        "Since {{M}} is the midpoint of {{PQ = 10 cm}}, the shorter leg is {{QM = 5 cm}}.",
        "In right-angled triangle {{MQR}}, {{QR = 15 cm}} is opposite {{∠QMR}} and {{QM = 5 cm}} is adjacent.",
        "Solve {{tan(∠QMR) = 15 / 5 = 3}} using {{tan^(-1)(3)}}.",
      ],
      solution: [
        "{{QM = 10 / 2 = 5 cm}}.",
        "In right-angled {{△MQR}}, {{tan(∠QMR) = QR / QM = 15 / 5 = 3}}.",
        "{{∠QMR = tan^(-1)(3) = 71.565... = 71.6°}} (to {{1}} d.p.).",
      ],
    },
    {
      id: "pythagoras-trigonometry-ch-q07",
      kind: "short",
      difficulty: "challenge",
      guideRef: "trig-finding-lengths",
      strategy: "Split an isosceles triangle along its axis of symmetry",
      question:
        "An isosceles triangle has a horizontal base of {{16 cm}} and two equal base angles of {{52°}}. Use trigonometry to calculate the **area** of the triangle to {{1}} decimal place (in {{cm^2}}).",
      answer: { type: "number", value: 81.9, tolerance: 0.1, display: "81.9 cm²" },
      traps: [
        { spec: { type: "number", value: 163.8, tolerance: 0.1 }, feedback: "Remember to HALVE the base (8 cm) when finding height h = 8 × tan(52°), OR check the ½ in Area = ½ × base × height!" },
      ],
      hints: [
        "Drop the perpendicular height {{h}} to split the base into two halves of {{16 / 2 = 8 cm}}.",
        "In each right-angled half-triangle, {{tan(52°) = h / 8 => h = 8 * tan(52°) = 10.2395... cm}}.",
        "Area of the FULL triangle {{= 1/2 * 16 * h = 8 * 10.2395...}}.",
      ],
      solution: [
        "Half-base {{= 8 cm}}; perpendicular height {{h = 8 * tan(52°) = 10.2395... cm}}.",
        "Area {{= 1/2 * 16 * 10.2395... = 81.916... = 81.9 cm^2}} (to {{1}} d.p.).",
      ],
    },
    {
      id: "pythagoras-trigonometry-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "pythagoras-theorem",
      marks: 3,
      strategy: "Compute squared side lengths directly from coordinate steps",
      question:
        "Triangle {{ABC}} has vertices {{A(1, 2)}}, {{B(5, 5)}}, and {{C(8, 1)}}. Using Pythagoras' theorem on the coordinates, prove that {{∠ABC = 90°}} and find the exact area of triangle {{ABC}}.",
      hints: [
        "Compute the squared length of each side using {{dx^2 + dy^2}}: start with {{AB^2 = (5-1)^2 + (5-2)^2}}.",
        "Repeat for {{BC^2}} and {{AC^2}}, then verify {{AB^2 + BC^2 = AC^2}}.",
        "Since {{∠ABC = 90°}}, sides {{AB}} and {{BC}} are the perpendicular base and height for Area {{= 1/2 * AB * BC}}!",
      ],
      modelAnswer:
        "Using coordinate Pythagoras: AB² = (5−1)² + (5−2)² = 16 + 9 = 25 (so AB = 5), BC² = (8−5)² + (1−5)² = 9 + 16 = 25 (so BC = 5), and AC² = (8−1)² + (1−2)² = 49 + 1 = 50. Since AB² + BC² = 25 + 25 = 50 = AC², angle ABC is 90°. Therefore the area is ½ × 5 × 5 = 12.5 square units.",
      markScheme: [
        { point: "Calculates AB² = 25 and BC² = 25 (so AB = BC = 5)", keywords: ["25"] },
        { point: "Calculates AC² = 50 and verifies AB² + BC² = 25 + 25 = 50 = AC²", keywords: ["50"] },
        { point: "Finds the exact area ½ × 5 × 5 = 12.5 (or 25/2)", keywords: ["12.5", "25/2"] },
      ],
      commonError: "Rounding √50 to 7.1 and then failing to get an exact match when squaring back.",
    },
  ],
};
