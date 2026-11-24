import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "pythagoras-trigonometry-m1",
    title: "MCQ Paper 1 — Right-Angled Triangles & Pythagoras' Theorem",
    questions: [
      {
        id: "pythagoras-trigonometry-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "right-triangle-language",
        question: "In right-angled triangle {{ABC}}, the right angle is at vertex {{B}} ({{∠B = 90°}}). Which side is ALWAYS the hypotenuse?",
        options: ["Side {{AB}}", "Side {{BC}}", "Side {{AC}}", "Side {{AB}} or {{BC}}"],
        answerIndex: 2,
        hints: [
          "The hypotenuse always sits directly opposite the {{90°}} angle.",
          "Which side connects the two vertices that are NOT vertex {{B}}?",
        ],
        explanation:
          "Side {{AC}} is directly opposite the right angle at {{B}} (it does not touch {{B}}), so {{AC}} is always the hypotenuse and the longest side.",
      },
      {
        id: "pythagoras-trigonometry-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "right-triangle-language",
        question: "Right-angled triangle {{PQR}} has {{∠P = 90°}}, {{PQ = 8 cm}}, {{PR = 15 cm}}, and {{QR = 17 cm}}. Relative to angle {{∠Q}}, which side is the **opposite**?",
        options: ["{{PR (15 cm)}}", "{{PQ (8 cm)}}", "{{QR (17 cm)}}", "{{PQ (15 cm)}}"],
        answerIndex: 0,
        hints: [
          "Stand at vertex {{Q}} and look directly across the triangle.",
          "The opposite side does NOT touch vertex {{Q}}.",
        ],
        explanation:
          "Looking straight across from vertex {{Q}}, the side not touching {{Q}} is {{PR = 15 cm}}. Side {{QR = 17 cm}} is the hypotenuse (opposite {{90°}} at {{P}}), and {{PQ = 8 cm}} is adjacent to {{∠Q}}.",
      },
      {
        id: "pythagoras-trigonometry-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "right-triangle-language",
        question: "In right-angled triangle {{PQR}} with {{∠P = 90°}}, {{PQ = 8 cm}}, {{PR = 15 cm}}, and {{QR = 17 cm}}, which side is **adjacent** to angle {{∠R}}?",
        options: ["{{QR (17 cm)}}", "{{PQ (8 cm)}}", "{{PQ (15 cm)}}", "{{PR (15 cm)}}"],
        answerIndex: 3,
        hints: [
          "First identify the hypotenuse: {{QR = 17 cm}} is opposite {{∠P = 90°}}.",
          "The adjacent side to {{∠R}} connects vertex {{R}} to the right angle {{P}}.",
        ],
        explanation:
          "Side {{PR = 15 cm}} runs between angle {{∠R}} and the {{90°}} angle at {{P}}, so it is adjacent to {{∠R}}. Although {{QR}} also touches {{R}}, {{QR}} is always the hypotenuse.",
      },
      {
        id: "pythagoras-trigonometry-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "right-triangle-language",
        question: "One acute angle of a right-angled triangle measures {{34°}}. What is the size of the other acute angle?",
        options: ["{{46°}}", "{{56°}}", "{{66°}}", "{{146°}}"],
        answerIndex: 1,
        hints: [
          "Angles in any triangle add up to {{180°}}, and one angle is already {{90°}}.",
          "Therefore the two acute angles sum to {{90°}}: compute {{90° - 34°}}.",
        ],
        explanation:
          "The two acute angles in any right-angled triangle are complementary: {{90° - 34° = 56°}}. Writing {{146°}} mistakenly subtracts {{34°}} from {{180°}}.",
      },
      {
        id: "pythagoras-trigonometry-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "pythagoras-theorem",
        question: "A right-angled triangle has perpendicular sides {{9 cm}} and {{12 cm}}. What is the length of its hypotenuse?",
        options: ["{{21 cm}}", "{{10.5 cm}}", "{{15 cm}}", "{{225 cm}}"],
        answerIndex: 2,
        hints: [
          "Finding the hypotenuse → ADD the squares: {{c^2 = 9^2 + 12^2}}.",
          "Remember to take the square root of {{81 + 144 = 225}}!",
        ],
        explanation:
          "{{c^2 = 9^2 + 12^2 = 81 + 144 = 225}}, so {{c = sqrt(225) = 15 cm}} (a {{3 * (3, 4, 5)}} triple!). Leaving {{225 cm}} forgets the final square root.",
      },
      {
        id: "pythagoras-trigonometry-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "pythagoras-theorem",
        question: "Find the hypotenuse of a right-angled triangle whose two shorter sides are {{7 cm}} and {{24 cm}}.",
        options: ["{{25 cm}}", "{{31 cm}}", "{{23 cm}}", "{{26 cm}}"],
        answerIndex: 0,
        hints: [
          "Compute {{7^2 + 24^2 = 49 + 576}}.",
          "Find {{sqrt(625)}}.",
        ],
        explanation:
          "{{c^2 = 49 + 576 = 625}}, giving {{c = sqrt(625) = 25 cm}} — the classic {{(7, 24, 25)}} Pythagorean triple!",
      },
      {
        id: "pythagoras-trigonometry-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pythagoras-theorem",
        question: "A right-angled triangle has hypotenuse {{17 cm}} and one shorter side {{8 cm}}. What is the length of the other shorter side?",
        options: ["{{9 cm}}", "{{18.8 cm}}", "{{13 cm}}", "{{15 cm}}"],
        answerIndex: 3,
        hints: [
          "You are finding a SHORTER side, so SUBTRACT the squares: {{a^2 = 17^2 - 8^2}}.",
          "{{289 - 64 = 225}}; now take the square root!",
        ],
        explanation:
          "Subtracting squares gives {{a^2 = 17^2 - 8^2 = 289 - 64 = 225}}, so {{a = sqrt(225) = 15 cm}}. Adding squares wrongly yields {{18.8 cm}}, which is longer than the hypotenuse!",
      },
      {
        id: "pythagoras-trigonometry-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pythagoras-theorem",
        question: "A right-angled triangle has hypotenuse {{20 cm}} and one perpendicular side {{16 cm}}. Calculate the other perpendicular side.",
        options: ["{{4 cm}}", "{{12 cm}}", "{{14 cm}}", "{{25.6 cm}}"],
        answerIndex: 1,
        hints: [
          "Subtract squares because {{20 cm}} is already the hypotenuse: {{20^2 - 16^2}}.",
          "Compute {{sqrt(400 - 256)}}.",
        ],
        explanation:
          "{{a^2 = 400 - 256 = 144}}, so {{a = 12 cm}} (a {{4 * (3, 4, 5)}} triangle). Subtracting {{20 - 16 = 4}} ignores squaring completely.",
      },
      {
        id: "pythagoras-trigonometry-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pythagoras-theorem",
        question: "Calculate the hypotenuse of a right-angled triangle with legs {{8 cm}} and {{11 cm}}, giving your answer to {{1}} decimal place.",
        options: ["{{7.5 cm}}", "{{19.0 cm}}", "{{13.6 cm}}", "{{13.9 cm}}"],
        answerIndex: 2,
        hints: [
          "Finding the hypotenuse → add squares: {{c^2 = 8^2 + 11^2 = 64 + 121}}.",
          "Evaluate {{sqrt(185)}} and round to {{1}} d.p.",
        ],
        explanation:
          "{{c = sqrt(64 + 121) = sqrt(185) = 13.601... = 13.6 cm}} (to {{1}} d.p.). Choosing {{7.5 cm}} comes from mistakenly subtracting {{121 - 64 = 57}}.",
      },
      {
        id: "pythagoras-trigonometry-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pythagoras-theorem",
        question: "A right-angled triangle has hypotenuse {{14 cm}} and one shorter side {{9 cm}}. Find the other shorter side to {{1}} decimal place.",
        options: ["{{10.7 cm}}", "{{16.6 cm}}", "{{5.0 cm}}", "{{11.5 cm}}"],
        answerIndex: 0,
        hints: [
          "Finding a shorter side → subtract squares: {{14^2 - 9^2 = 196 - 81}}.",
          "Evaluate {{sqrt(115)}} and round to {{1}} d.p.",
        ],
        explanation:
          "{{a = sqrt(196 - 81) = sqrt(115) = 10.723... = 10.7 cm}} (to {{1}} d.p.). Choosing {{16.6 cm}} mistakenly adds squares and exceeds the hypotenuse.",
      },
      {
        id: "pythagoras-trigonometry-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pythagoras-theorem",
        question: "Which set of three side lengths forms an EXACT right-angled triangle?",
        options: [
          "{{6 cm, 8 cm, 12 cm}}",
          "{{5 cm, 7 cm, 9 cm}}",
          "{{8 cm, 12 cm, 15 cm}}",
          "{{9 cm, 40 cm, 41 cm}}",
        ],
        answerIndex: 3,
        hints: [
          "Test the converse of Pythagoras: check whether {{(" + '"short"' + ")^2 + (" + '"medium"' + ")^2 = (" + '"longest"' + ")^2}}.",
          "Check {{9^2 + 40^2 = 81 + 1600 = 1681}} and compare with {{41^2}}!",
        ],
        explanation:
          "{{9^2 + 40^2 = 81 + 1600 = 1681 = 41^2}}, so {{(9, 40, 41)}} is an exact right-angled triangle. Every other triple fails {{a^2 + b^2 = c^2}}.",
      },
      {
        id: "pythagoras-trigonometry-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pythagoras-theorem",
        question: "Find the straight-line distance between points {{A(-2, 1)}} and {{B(3, 13)}} on a coordinate grid.",
        options: ["{{17 units}}", "{{13 units}}", "{{11 units}}", "{{12 units}}"],
        answerIndex: 1,
        hints: [
          "Find horizontal change {{dx = 3 - (-2) = 5}} and vertical change {{dy = 13 - 1 = 12}}.",
          "Apply Pythagoras: {{d = sqrt(5^2 + 12^2)}}.",
        ],
        explanation:
          "The horizontal step is {{5}} and vertical step is {{12}}, forming a {{5–12–13}} right-angled triangle with straight-line distance {{sqrt(25 + 144) = 13}} units.",
      },
      {
        id: "pythagoras-trigonometry-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pythagoras-theorem",
        question: "An isosceles triangle has two equal sides of {{13 cm}} and a base of {{10 cm}}. What is its perpendicular height?",
        options: ["{{8.3 cm}}", "{{16.4 cm}}", "{{12 cm}}", "{{11 cm}}"],
        answerIndex: 2,
        hints: [
          "First halve the base: {{10 / 2 = 5 cm}}.",
          "Apply Pythagoras to the right-angled half-triangle with hypotenuse {{13 cm}} and base {{5 cm}}.",
        ],
        explanation:
          "Half the base is {{5 cm}}, so {{h = sqrt(13^2 - 5^2) = sqrt(169 - 25) = sqrt(144) = 12 cm}}. Forgetting to halve the base gives {{sqrt(169 - 100) = 8.3 cm}}.",
      },
      {
        id: "pythagoras-trigonometry-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pythagoras-theorem",
        question: "A {{6.5 m}} ladder leans against a vertical wall with its foot {{2.5 m}} horizontally from the wall. How high up the wall does the top of the ladder reach?",
        options: ["{{6.0 m}}", "{{4.0 m}}", "{{7.0 m}}", "{{5.5 m}}"],
        answerIndex: 0,
        hints: [
          "The ladder is the slanted **hypotenuse** ({{6.5 m}}), and the ground distance is {{2.5 m}}.",
          "Subtract squares: {{h = sqrt(6.5^2 - 2.5^2) = sqrt(42.25 - 6.25)}}.",
        ],
        explanation:
          "{{h^2 = 6.5^2 - 2.5^2 = 42.25 - 6.25 = 36}}, so {{h = 6.0 m}} (notice {{6.5, 2.5, 6.0}} is simply half of the {{5–12–13}} triple!).",
      },
      {
        id: "pythagoras-trigonometry-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "pythagoras-theorem",
        question: "A rhombus has diagonals of length {{12 cm}} and {{16 cm}} that bisect each other at {{90°}}. What is the **perimeter** of the rhombus?",
        options: ["{{20 cm}}", "{{28 cm}}", "{{56 cm}}", "{{40 cm}}"],
        answerIndex: 3,
        hints: [
          "The two diagonals split the rhombus into four congruent right-angled triangles with legs equal to HALF each diagonal.",
          "Half-diagonals are {{6 cm}} and {{8 cm}}, so each outer edge has length {{sqrt(6^2 + 8^2) = 10 cm}}.",
          "A rhombus has {{4}} equal sides — multiply one side by {{4}}!",
        ],
        explanation:
          "Half-diagonals are {{6 cm}} and {{8 cm}}, giving side length {{sqrt(36 + 64) = 10 cm}}. Since all {{4}} sides of a rhombus are equal, the perimeter is {{4 * 10 = 40 cm}}.",
      },
    ],
  },
  {
    id: "pythagoras-trigonometry-m2",
    title: "MCQ Paper 2 — Similar Right Triangles & SOHCAHTOA Ratios",
    questions: [
      {
        id: "pythagoras-trigonometry-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "similar-right-triangles-ratios",
        question: "Why does {{sin(40°)}} have the exact same value in every right-angled triangle containing a {{40°}} angle, no matter how big or small?",
        options: [
          "Because all such triangles have equal areas",
          "Because all such triangles are similar (AAA)",
          "Because the hypotenuse is always {{10 cm}}",
          "Because all three sides are always equal",
        ],
        answerIndex: 1,
        hints: [
          "If two right-angled triangles share a {{40°}} angle, what are ALL three of their angles?",
          "Both have angles {{40°, 50°, 90°}}, so one is an exact enlargement of the other!",
        ],
        explanation:
          "Every right-angled triangle with a {{40°}} angle has angles {{40°, 50°, 90°}}, so they are all **similar** (AAA). Enlarging scales both {{O}} and {{H}} by the same factor {{k}}, leaving {{O / H}} constant.",
      },
      {
        id: "pythagoras-trigonometry-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "similar-right-triangles-ratios",
        question: "Which ratio correctly defines {{cos(theta)}} in a right-angled triangle?",
        options: [
          "{{(" + '"Opposite"' + ")/(" + '"Hypotenuse"' + ")}}",
          "{{(" + '"Opposite"' + ")/(" + '"Adjacent"' + ")}}",
          "{{(" + '"Adjacent"' + ")/(" + '"Hypotenuse"' + ")}}",
          "{{(" + '"Hypotenuse"' + ")/(" + '"Adjacent"' + ")}}",
        ],
        answerIndex: 2,
        hints: [
          "Recall the middle part of **SOH · CAH · TOA**.",
          "**C**osine = **A**djacent ÷ **H**ypotenuse.",
        ],
        explanation:
          "From **CAH**, {{cos(theta) = " + '"Adjacent"' + " / " + '"Hypotenuse"' + "}}. Dividing Hypotenuse by Adjacent gives the reciprocal, which would be greater than {{1}}.",
      },
      {
        id: "pythagoras-trigonometry-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "similar-right-triangles-ratios",
        question: "Which ratio correctly defines {{tan(theta)}} in a right-angled triangle?",
        options: [
          "{{(" + '"Opposite"' + ")/(" + '"Adjacent"' + ")}}",
          "{{(" + '"Adjacent"' + ")/(" + '"Opposite"' + ")}}",
          "{{(" + '"Opposite"' + ")/(" + '"Hypotenuse"' + ")}}",
          "{{(" + '"Adjacent"' + ")/(" + '"Hypotenuse"' + ")}}",
        ],
        answerIndex: 0,
        hints: [
          "Recall the final part of **SOH · CAH · TOA**.",
          "**T**angent = **O**pposite ÷ **A**djacent.",
        ],
        explanation:
          "From **TOA**, {{tan(theta) = " + '"Opposite"' + " / " + '"Adjacent"' + "}} — tangent is the only ratio that does not use the hypotenuse.",
      },
      {
        id: "pythagoras-trigonometry-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "similar-right-triangles-ratios",
        question: "A right-angled triangle has sides {{3 cm}}, {{4 cm}}, and {{5 cm}}. Acute angle {{theta}} is opposite the {{3 cm}} side. What is the exact value of {{sin(theta)}}?",
        options: ["{{4/5}}", "{{3/4}}", "{{5/3}}", "{{3/5}}"],
        answerIndex: 3,
        hints: [
          "Label {{H = 5}}, {{O = 3}}, and {{A = 4}}.",
          "Use **SOH**: {{sin(theta) = O / H}}.",
        ],
        explanation:
          "With {{O = 3}} and {{H = 5}}, {{sin(theta) = 3/5}}. Meanwhile {{4/5}} is {{cos(theta)}} and {{3/4}} is {{tan(theta)}}.",
      },
      {
        id: "pythagoras-trigonometry-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "similar-right-triangles-ratios",
        question: "A right-angled triangle has sides {{5 cm}}, {{12 cm}}, and {{13 cm}}. Acute angle {{theta}} is opposite the {{12 cm}} side. What is the exact value of {{cos(theta)}}?",
        options: ["{{12/13}}", "{{5/13}}", "{{5/12}}", "{{12/5}}"],
        answerIndex: 1,
        hints: [
          "Since {{12 cm}} is Opposite to {{theta}} and {{13 cm}} is the Hypotenuse, the Adjacent side must be {{5 cm}}.",
          "Use **CAH**: {{cos(theta) = A / H}}.",
        ],
        explanation:
          "Relative to {{theta}}, {{H = 13}}, {{O = 12}}, and {{A = 5}}, so {{cos(theta) = A / H = 5/13}}. Writing {{12/13}} gives {{sin(theta)}} instead.",
      },
      {
        id: "pythagoras-trigonometry-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "similar-right-triangles-ratios",
        question: "A right-angled triangle has sides {{8 cm}}, {{15 cm}}, and {{17 cm}}. Angle {{theta}} is opposite the {{15 cm}} side. What is the exact value of {{tan(theta)}}?",
        options: ["{{15/17}}", "{{8/15}}", "{{15/8}}", "{{8/17}}"],
        answerIndex: 2,
        hints: [
          "Identify {{O = 15}} and {{A = 8}} (ignore {{H = 17}} for tan).",
          "Use **TOA**: {{tan(theta) = O / A}}.",
        ],
        explanation:
          "{{tan(theta) = O / A = 15/8}}. Note that {{tan(theta)}} CAN be greater than {{1}} whenever the opposite side is longer than the adjacent side!",
      },
      {
        id: "pythagoras-trigonometry-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "similar-right-triangles-ratios",
        question: "A right-angled triangle has sides {{9 cm}}, {{12 cm}}, and {{15 cm}}. Angle {{theta}} lies between the {{12 cm}} and {{15 cm}} sides. What is {{tan(theta)}} in simplest form?",
        options: ["{{3/4}}", "{{4/5}}", "{{3/5}}", "{{4/3}}"],
        answerIndex: 0,
        hints: [
          "Angle {{theta}} touches {{15 cm}} ({{H}}) and {{12 cm}} ({{A}}), so {{O = 9 cm}}.",
          "Write {{tan(theta) = 9 / 12}} and simplify by dividing top and bottom by {{3}}.",
        ],
        explanation:
          "Since {{O = 9}} and {{A = 12}}, {{tan(theta) = 9/12 = 3/4}}. Flipping the fraction to {{4/3}} uses {{A / O}} by mistake.",
      },
      {
        id: "pythagoras-trigonometry-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "similar-right-triangles-ratios",
        question: "For any acute angle {{theta}} ({{0° < theta < 90°}}) in a right-angled triangle, which statement is ALWAYS true?",
        options: [
          "{{tan(theta)}} is always strictly less than {{1}}",
          "{{sin(theta)}} is always larger than {{cos(theta)}}",
          "{{cos(theta)}} is always strictly larger than {{1}}",
          "{{sin(theta)}} and {{cos(theta)}} are both less than {{1}}",
        ],
        answerIndex: 3,
        hints: [
          "Compare the lengths of {{O}} and {{A}} against the hypotenuse {{H}}.",
          "Because {{H}} is strictly the longest side, both {{O / H}} and {{A / H}} must be less than {{1}}.",
        ],
        explanation:
          "Since {{O < H}} and {{A < H}}, both {{sin(theta) = O/H}} and {{cos(theta) = A/H}} are strictly less than {{1}}. By contrast, {{tan(theta)}} exceeds {{1}} whenever {{theta > 45°}}.",
      },
      {
        id: "pythagoras-trigonometry-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "similar-right-triangles-ratios",
        question: "What is the exact value of {{tan(45°)}}?",
        options: ["{{0.5}}", "{{1}}", "{{2}}", "{{0.7}}"],
        answerIndex: 1,
        hints: [
          "A right-angled triangle with a {{45°}} angle has angles {{45°, 45°, 90°}} — it is ISOSCELES!",
          "Because the opposite and adjacent legs have equal lengths ({{O = A}}), what is {{O / A}}?",
        ],
        explanation:
          "In a {{45°–45°–90°}} triangle, {{O = A}}, so {{tan(45°) = O / A = 1}} exactly.",
      },
      {
        id: "pythagoras-trigonometry-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "similar-right-triangles-ratios",
        question: "In a right-angled triangle, you know an acute angle is {{36°}} and the **opposite** side is {{11 cm}}. You want to find the **hypotenuse**. Which trig ratio should you use?",
        options: ["Cosine (CAH)", "Tangent (TOA)", "Sine (SOH)", "Pythagoras only"],
        answerIndex: 2,
        hints: [
          "List the two sides involved: **Opposite (O)** and **Hypotenuse (H)**.",
          "Match **O** and **H** inside **SOH · CAH · TOA**.",
        ],
        explanation:
          "The known side is **O** and the target side is **H**, which matches **SOH** → **Sine** ({{sin(36°) = 11 / H}}).",
      },
      {
        id: "pythagoras-trigonometry-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "similar-right-triangles-ratios",
        question: "In a right-angled triangle, you know an acute angle is {{52°}} and the **adjacent** side is {{14 cm}}. You want to calculate the **opposite** side. Which trig ratio should you use?",
        options: ["Tangent (TOA)", "Cosine (CAH)", "Sine (SOH)", "Inverse sine"],
        answerIndex: 0,
        hints: [
          "The two sides involved are **Adjacent (A)** and **Opposite (O)**; the hypotenuse is not involved.",
          "Which of SOH, CAH, TOA uses **O** and **A**?",
        ],
        explanation:
          "**O** and **A** belong to **TOA** → **Tangent** ({{tan(52°) = O / 14}}). Inverse sine is for finding angles, not lengths.",
      },
      {
        id: "pythagoras-trigonometry-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "similar-right-triangles-ratios",
        question: "A right-angled triangle has adjacent side {{9 cm}} and hypotenuse {{15 cm}} relative to acute angle {{theta}}. Which equation correctly finds {{theta}}?",
        options: [
          "{{sin(theta) = 9 / 15}}",
          "{{tan(theta) = 9 / 15}}",
          "{{cos(theta) = 15 / 9}}",
          "{{cos(theta) = 9 / 15}}",
        ],
        answerIndex: 3,
        hints: [
          "The Adjacent side and Hypotenuse use **CAH** ({{cos}}).",
          "Check which side goes on top: {{cos(theta) = A / H}}, which must be less than {{1}}.",
        ],
        explanation:
          "Using **CAH**, {{cos(theta) = A / H = 9 / 15}}. Note that {{15 / 9 > 1}} is impossible for cosine!",
      },
      {
        id: "pythagoras-trigonometry-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "similar-right-triangles-ratios",
        question: "In a right-angled triangle, the two acute angles are {{alpha}} and {{beta}}. If {{sin(alpha) = 7/25}}, what is the exact value of {{cos(beta)}}?",
        options: ["{{24/25}}", "{{7/25}}", "{{7/24}}", "{{18/25}}"],
        answerIndex: 1,
        hints: [
          "Sketch the triangle: the side opposite {{alpha}} has length {{7}} and the hypotenuse is {{25}}.",
          "Now stand at the OTHER acute angle {{beta}} — what is the label of that exact {{7}} side relative to {{beta}}?",
        ],
        explanation:
          "The side opposite {{alpha}} is the exact same side that is **adjacent** to {{beta}}! Therefore {{cos(beta) = A_beta / H = O_alpha / H = sin(alpha) = 7/25}}.",
      },
      {
        id: "pythagoras-trigonometry-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "similar-right-triangles-ratios",
        question: "Two similar right-angled triangles both contain acute angle {{theta}}. The smaller triangle has {{O = 4 cm}} and {{A = 5 cm}}. The larger triangle has {{A = 15 cm}}. What is the value of {{tan(theta)}} in the larger triangle?",
        options: ["{{12/5}}", "{{4/15}}", "{{4/5}}", "{{5/4}}"],
        answerIndex: 2,
        hints: [
          "First find {{O}} in the larger triangle using scale factor {{15 / 5 = 3}}: {{O = 4 * 3 = 12 cm}}.",
          "Now compute {{tan(theta) = O / A = 12 / 15}} and simplify — notice how it matches the smaller triangle!",
        ],
        explanation:
          "The scale factor is {{15 / 5 = 3}}, so {{O = 4 * 3 = 12 cm}} and {{tan(theta) = 12 / 15 = 4/5}} — identical to the smaller triangle because all similar right-angled triangles share the exact same trig ratios!",
      },
      {
        id: "pythagoras-trigonometry-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "similar-right-triangles-ratios",
        question: "In a right-angled triangle, acute angle {{theta}} satisfies {{sin(theta) = 3/5}}. Using Pythagoras' theorem, find the exact value of {{tan(theta)}}.",
        options: ["{{3/4}}", "{{4/5}}", "{{4/3}}", "{{5/4}}"],
        answerIndex: 0,
        hints: [
          "Draw a right-angled triangle with {{O = 3}} and {{H = 5}}.",
          "Use Pythagoras to find the missing adjacent leg {{A = sqrt(5^2 - 3^2) = 4}}.",
          "Now compute {{tan(theta) = O / A}}.",
        ],
        explanation:
          "Setting {{O = 3}} and {{H = 5}} gives {{A = sqrt(25 - 9) = 4}}. Therefore {{tan(theta) = O / A = 3/4}}.",
      },
    ],
  },
  {
    id: "pythagoras-trigonometry-m3",
    title: "MCQ Paper 3 — Finding Missing Lengths, Angles & 2D Problems",
    questions: [
      {
        id: "pythagoras-trigonometry-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "trig-finding-lengths",
        question: "A right-angled triangle has hypotenuse {{10 cm}} and acute angle {{30°}}. Given {{sin(30°) = 0.5}}, find the exact length of the side opposite {{30°}}.",
        options: ["{{20 cm}}", "{{8.7 cm}}", "{{6 cm}}", "{{5 cm}}"],
        answerIndex: 3,
        hints: [
          "Write {{sin(30°) = O / 10}}.",
          "Since the unknown is on top, multiply: {{O = 10 * 0.5}}.",
        ],
        explanation:
          "{{O = 10 * sin(30°) = 10 * 0.5 = 5 cm}}. Dividing {{10 / 0.5 = 20 cm}} wrongly makes a leg longer than the hypotenuse!",
      },
      {
        id: "pythagoras-trigonometry-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "trig-finding-lengths",
        question: "In a right-angled triangle, the hypotenuse is {{16 cm}} and acute angle {{theta = 36°}}. Find the length of the **opposite** side to {{1}} decimal place.",
        options: ["{{12.9 cm}}", "{{9.4 cm}}", "{{27.2 cm}}", "{{11.6 cm}}"],
        answerIndex: 1,
        hints: [
          "We know **H = 16** and want **O** → use **sin**: {{sin(36°) = x / 16}}.",
          "Multiply: {{x = 16 * sin(36°)}} in DEG mode.",
        ],
        explanation:
          "{{x = 16 * sin(36°) = 9.4046... = 9.4 cm}} (to {{1}} d.p.). Using {{cos(36°)}} gives the adjacent side ({{12.9 cm}}), and dividing gives {{27.2 cm}}.",
      },
      {
        id: "pythagoras-trigonometry-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "trig-finding-lengths",
        question: "In a right-angled triangle, the hypotenuse is {{15 cm}} and acute angle {{theta = 28°}}. Find the **adjacent** side to {{1}} decimal place.",
        options: ["{{7.0 cm}}", "{{17.0 cm}}", "{{13.2 cm}}", "{{8.0 cm}}"],
        answerIndex: 2,
        hints: [
          "We know **H = 15** and want **A** → use **cos**: {{cos(28°) = x / 15}}.",
          "Multiply: {{x = 15 * cos(28°)}}.",
        ],
        explanation:
          "{{x = 15 * cos(28°) = 13.244... = 13.2 cm}} (to {{1}} d.p.). Choosing {{7.0 cm}} finds the opposite side ({{15 * sin(28°)}}), while {{17.0 cm}} divides by {{cos(28°)}}.",
      },
      {
        id: "pythagoras-trigonometry-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "trig-finding-lengths",
        question: "In a right-angled triangle, the **adjacent** side to {{52°}} is {{9 cm}}. Find the **opposite** side to {{1}} decimal place.",
        options: ["{{11.5 cm}}", "{{7.0 cm}}", "{{7.1 cm}}", "{{5.5 cm}}"],
        answerIndex: 0,
        hints: [
          "We know **A = 9** and want **O** → use **tan**: {{tan(52°) = x / 9}}.",
          "Unknown is on top → multiply: {{x = 9 * tan(52°)}}.",
        ],
        explanation:
          "{{x = 9 * tan(52°) = 11.519... = 11.5 cm}} (to {{1}} d.p.). Notice that because {{52° > 45°}}, the opposite side must be LONGER than the adjacent side {{9 cm}}!",
      },
      {
        id: "pythagoras-trigonometry-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "trig-finding-lengths",
        question: "In a right-angled triangle, the side **opposite** {{40°}} is {{10 cm}}. Calculate the **hypotenuse** to {{1}} decimal place.",
        options: ["{{6.4 cm}}", "{{11.9 cm}}", "{{13.1 cm}}", "{{15.6 cm}}"],
        answerIndex: 3,
        hints: [
          "Write the SOH equation: {{sin(40°) = 10 / x}}.",
          "The unknown {{x}} is in the denominator, so swap and divide: {{x = 10 / sin(40°)}}.",
        ],
        explanation:
          "{{x = 10 / sin(40°) = 15.557... = 15.6 cm}} (to {{1}} d.p.). Multiplying {{10 * sin(40°) = 6.4 cm}} is impossible since the hypotenuse must exceed {{10 cm}}!",
      },
      {
        id: "pythagoras-trigonometry-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "trig-finding-lengths",
        question: "In a right-angled triangle, the side **adjacent** to {{35°}} is {{12 cm}}. Calculate the **hypotenuse** to {{1}} decimal place.",
        options: ["{{9.8 cm}}", "{{14.6 cm}}", "{{20.9 cm}}", "{{8.4 cm}}"],
        answerIndex: 1,
        hints: [
          "Use **CAH**: {{cos(35°) = 12 / x}}.",
          "Unknown on bottom → divide: {{x = 12 / cos(35°)}}.",
        ],
        explanation:
          "{{x = 12 / cos(35°) = 14.649... = 14.6 cm}} (to {{1}} d.p.). Multiplying {{12 * cos(35°) = 9.8 cm}} fails the check because the hypotenuse must be greater than {{12 cm}}.",
      },
      {
        id: "pythagoras-trigonometry-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "trig-finding-lengths",
        question: "In a right-angled triangle, the side **opposite** {{58°}} is {{15 cm}}. Calculate the **adjacent** side to {{1}} decimal place.",
        options: ["{{24.0 cm}}", "{{17.7 cm}}", "{{9.4 cm}}", "{{12.7 cm}}"],
        answerIndex: 2,
        hints: [
          "Write **TOA**: {{tan(58°) = 15 / x}}.",
          "Unknown {{x}} is on the bottom → divide: {{x = 15 / tan(58°)}}.",
        ],
        explanation:
          "{{x = 15 / tan(58°) = 9.373... = 9.4 cm}} (to {{1}} d.p.). Since {{58° > 45°}}, the adjacent side must be shorter than the opposite side {{15 cm}}!",
      },
      {
        id: "pythagoras-trigonometry-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "trig-finding-lengths",
        question: "A student writes the correct trigonometry equation {{cos(42°) = 11 / x}}. Which rearrangement solves for {{x}} correctly?",
        options: [
          "{{x = 11 / cos(42°)}}",
          "{{x = 11 * cos(42°)}}",
          "{{x = cos(42°) / 11}}",
          "{{x = cos^(-1)(11 / 42)}}",
        ],
        answerIndex: 0,
        hints: [
          "Multiply both sides by {{x}}: {{x * cos(42°) = 11}}.",
          "Now divide both sides by {{cos(42°)}}.",
        ],
        explanation:
          "Multiplying by {{x}} and dividing by {{cos(42°)}} gives {{x = 11 / cos(42°)}} — whenever the unknown sits in the denominator, swap it with the trig ratio and divide!",
      },
      {
        id: "pythagoras-trigonometry-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "trig-finding-lengths",
        question: "In a right-angled triangle, the side opposite acute angle {{theta}} is {{6 cm}} and the hypotenuse is {{10 cm}}. Find {{theta}} to {{1}} decimal place.",
        options: ["{{53.1°}}", "{{31.0°}}", "{{60.0°}}", "{{36.9°}}"],
        answerIndex: 3,
        hints: [
          "Write {{sin(theta) = 6 / 10 = 0.6}}.",
          "Press `SHIFT sin` to evaluate {{sin^(-1)(0.6)}} in DEG mode.",
        ],
        explanation:
          "{{theta = sin^(-1)(6 / 10) = 36.869... = 36.9°}} (to {{1}} d.p.). Using {{cos^(-1)(0.6)}} gives the complementary angle {{53.1°}}.",
      },
      {
        id: "pythagoras-trigonometry-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "trig-finding-lengths",
        question: "A right-angled triangle has adjacent side {{7 cm}} and hypotenuse {{12 cm}} relative to acute angle {{theta}}. Find {{theta}} to {{1}} decimal place.",
        options: ["{{35.7°}}", "{{54.3°}}", "{{30.3°}}", "{{59.7°}}"],
        answerIndex: 1,
        hints: [
          "Adjacent and Hypotenuse → **CAH**: {{cos(theta) = 7 / 12}}.",
          "Evaluate {{cos^(-1)(7 / 12)}} in DEG mode.",
        ],
        explanation:
          "{{theta = cos^(-1)(7 / 12) = 54.314... = 54.3°}} (to {{1}} d.p.). Using {{sin^(-1)(7 / 12)}} gives {{35.7°}}, the other acute angle.",
      },
      {
        id: "pythagoras-trigonometry-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "trig-finding-lengths",
        question: "In a right-angled triangle, the opposite side to {{theta}} is {{12 cm}} and the adjacent side is {{7 cm}}. Find {{theta}} to {{1}} decimal place.",
        options: ["{{30.3°}}", "{{54.3°}}", "{{59.7°}}", "{{35.7°}}"],
        answerIndex: 2,
        hints: [
          "Opposite and Adjacent → **TOA**: {{tan(theta) = 12 / 7}}.",
          "Evaluate {{tan^(-1)(12 / 7)}} — since {{O > A}}, expect an angle greater than {{45°}}!",
        ],
        explanation:
          "{{theta = tan^(-1)(12 / 7) = 59.743... = 59.7°}} (to {{1}} d.p.). Flipping the fraction to {{tan^(-1)(7 / 12)}} gives {{30.3°}}.",
      },
      {
        id: "pythagoras-trigonometry-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "trig-finding-lengths",
        question: "Standing on level ground {{24 m}} from the base of a vertical tree, the angle of elevation to the top of the tree is {{38°}}. Calculate the height of the tree to {{1}} decimal place.",
        options: ["{{18.8 m}}", "{{30.7 m}}", "{{14.8 m}}", "{{18.9 m}}"],
        answerIndex: 0,
        hints: [
          "Sketch the right-angled triangle: ground distance {{24 m}} is **Adjacent**, tree height {{h}} is **Opposite**.",
          "Use **TOA**: {{tan(38°) = h / 24 => h = 24 * tan(38°)}}.",
        ],
        explanation:
          "{{h = 24 * tan(38°) = 18.7509... = 18.8 m}} (to {{1}} d.p.). Dividing by {{tan(38°)}} gives {{30.7 m}}.",
      },
      {
        id: "pythagoras-trigonometry-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "trig-finding-lengths",
        question: "A kite flies at the end of a straight {{35 m}} string angled at {{54°}} above the horizontal. Calculate the vertical height of the kite above the holder's hand to {{1}} decimal place.",
        options: ["{{20.6 m}}", "{{43.3 m}}", "{{48.2 m}}", "{{28.3 m}}"],
        answerIndex: 3,
        hints: [
          "The {{35 m}} string is the slanted **Hypotenuse**, and vertical height is **Opposite** {{54°}}.",
          "Use **SOH**: {{sin(54°) = h / 35 => h = 35 * sin(54°)}}.",
        ],
        explanation:
          "{{h = 35 * sin(54°) = 28.315... = 28.3 m}} (to {{1}} d.p.). Using {{cos(54°)}} finds the horizontal distance ({{20.6 m}}) instead.",
      },
      {
        id: "pythagoras-trigonometry-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "trig-finding-lengths",
        question: "From the top of a vertical {{45 m}} cliff, the angle of depression down to a boat at sea is {{27°}}. Calculate the horizontal distance from the foot of the cliff to the boat to {{1}} decimal place.",
        options: ["{{22.9 m}}", "{{88.3 m}}", "{{99.1 m}}", "{{50.5 m}}"],
        answerIndex: 1,
        hints: [
          "An angle of depression of {{27°}} from the horizontal at the top equals the angle of elevation of {{27°}} at the boat (alternate angles!).",
          "Cliff height {{45 m}} is **Opposite** {{27°}}, and sea distance {{d}} is **Adjacent** {{27°}}.",
          "Solve {{tan(27°) = 45 / d => d = 45 / tan(27°)}}.",
        ],
        explanation:
          "By alternate angles, the angle at the boat is {{27°}}, giving {{tan(27°) = 45 / d}} and {{d = 45 / tan(27°) = 88.317... = 88.3 m}} (to {{1}} d.p.).",
      },
      {
        id: "pythagoras-trigonometry-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "trig-finding-lengths",
        question: "A straight wheelchair ramp has a sloped surface of length {{12 m}} and rises vertically by {{2 m}}. Calculate the angle the ramp makes with the horizontal ground to {{1}} decimal place.",
        options: ["{{9.5°}}", "{{80.4°}}", "{{9.6°}}", "{{10.2°}}"],
        answerIndex: 2,
        hints: [
          "The sloped ramp ({{12 m}}) is the **Hypotenuse**, and the vertical rise ({{2 m}}) is **Opposite** the ground angle {{theta}}.",
          "Solve {{sin(theta) = 2 / 12}} using {{sin^(-1)(2 / 12)}}.",
        ],
        explanation:
          "{{theta = sin^(-1)(2 / 12) = 9.594... = 9.6°}} (to {{1}} d.p.). Watch the rounding digit: {{9.594}} rounds up to {{9.6°}}, not {{9.5°}}!",
      },
    ],
  },
];
