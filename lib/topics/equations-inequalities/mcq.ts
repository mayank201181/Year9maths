import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // PAPER 1: CORE FOUNDATIONS
  // ===========================================================================
  {
    id: "equations-inequalities-m1",
    title: "MCQ Paper 1 — Linear, Quadratic, Simultaneous & Inequality Basics",
    questions: [
      {
        id: "equations-inequalities-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "linear-equations-brackets-fractions",
        question: "Solve {{3(x - 4) = 15}}.",
        options: ["{{x = 9}}", "{{x = 1}}", "{{x = 7}}", "{{x = 19}}"],
        answerIndex: 0,
        hints: [
          "You can either divide both sides by {{3}} first, or expand {{3(x - 4) = 3x - 12}}.",
          "If {{x - 4 = 5}}, add {{4}} to both sides.",
        ],
        explanation:
          "Dividing both sides by {{3}} gives {{x - 4 = 5}}, so {{x = 9}}. Check: {{3(9 - 4) = 3 * 5 = 15}}. Forgetting to multiply {{-4}} by {{3}} gives the wrong answer {{x = 19/3}} or subtracting {{4}} instead of adding gives {{x = 1}}.",
      },
      {
        id: "equations-inequalities-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "linear-equations-brackets-fractions",
        question: "Solve {{5x - 7 = 2x + 11}}.",
        options: ["{{x = 4/3}}", "{{x = 6}}", "{{x = 4}}", "{{x = 18/7}}"],
        answerIndex: 1,
        hints: [
          "Subtract the smaller {{x}}-term ({{2x}}) from both sides first.",
          "Then add {{7}} to both sides and divide by {{3}}.",
        ],
        explanation:
          "Subtracting {{2x}} gives {{3x - 7 = 11}}; adding {{7}} gives {{3x = 18}}, so {{x = 6}}. Adding {{2x}} instead of subtracting leads to {{7x = 18}}, while subtracting {{7}} instead of adding gives {{3x = 4}}.",
      },
      {
        id: "equations-inequalities-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "linear-equations-brackets-fractions",
        question: "Solve {{(x + 5)/3 = 7}}.",
        options: ["{{x = 26}}", "{{x = 6}}", "{{x = 16}}", "{{x = 2}}"],
        answerIndex: 2,
        hints: [
          "Clear the denominator by multiplying both sides by {{3}}.",
          "Then solve {{x + 5 = 21}}.",
        ],
        explanation:
          "Multiplying both sides by {{3}} gives {{x + 5 = 21}}, and subtracting {{5}} gives {{x = 16}}. Check: {{(16 + 5)/3 = 21/3 = 7}}. Adding {{5}} instead of subtracting produces {{26}}.",
      },
      {
        id: "equations-inequalities-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "simple-quadratics",
        question: "Find ALL real solutions of {{x^2 = 64}}.",
        options: [
          "{{x = 8}} only",
          "{{x = 32}} or {{x = -32}}",
          "{{x = 4}} or {{x = -4}}",
          "{{x = 8}} or {{x = -8}}",
        ],
        answerIndex: 3,
        hints: [
          "Remember BOTH a positive number and its negative square to give {{64}}.",
          "Test both {{8^2}} and {{(-8)^2}}.",
        ],
        explanation:
          "Both {{8^2 = 64}} and {{(-8)^2 = 64}}, so {{x = 8}} or {{x = -8}}. Writing {{x = 8}} only misses the negative root, and halving {{64}} to {{32}} confuses squaring with doubling.",
      },
      {
        id: "equations-inequalities-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "simple-quadratics",
        question: "Find both solutions of {{(x - 5)(x + 2) = 0}}.",
        options: [
          "{{x = -5}} or {{x = 2}}",
          "{{x = 5}} or {{x = -2}}",
          "{{x = 5}} or {{x = 2}}",
          "{{x = -5}} or {{x = -2}}",
        ],
        answerIndex: 1,
        hints: [
          "Use the Zero-Product Property: set EACH bracket equal to {{0}}.",
          "Solve {{x - 5 = 0}} and {{x + 2 = 0}} separately.",
        ],
        explanation:
          "Either {{x - 5 = 0}} (so {{x = 5}}) or {{x + 2 = 0}} (so {{x = -2}}). Reading the signs straight out of the brackets without solving wrongly gives {{x = -5}} or {{x = 2}}.",
      },
      {
        id: "equations-inequalities-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "simple-quadratics",
        question: "Find both solutions of {{2x^2 = 72}}.",
        options: [
          "{{x = 18}} or {{x = -18}}",
          "{{x = 12}} or {{x = -12}}",
          "{{x = 6}} or {{x = -6}}",
          "{{x = 36}} or {{x = -36}}",
        ],
        answerIndex: 2,
        hints: [
          "Isolate {{x^2}} FIRST by dividing both sides by {{2}}.",
          "Then take {{+-sqrt(36)}}.",
        ],
        explanation:
          "Divide by {{2}} to get {{x^2 = 36}}, then take both square roots: {{x = 6}} or {{x = -6}}. Stopping before taking the square root leaves {{+-36}}.",
      },
      {
        id: "equations-inequalities-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "simultaneous-equations",
        question: "Solve simultaneously: {{x + y = 11}} and {{x - y = 5}}.",
        options: [
          "{{x = 8, y = 3}}",
          "{{x = 3, y = 8}}",
          "{{x = 6, y = 5}}",
          "{{x = 9, y = 2}}",
        ],
        answerIndex: 0,
        hints: [
          "Notice {{+y}} and {{-y}} have DIFFERENT signs — add the two equations together!",
          "Adding gives {{2x = 16}}, then find {{y}} from {{x + y = 11}}.",
        ],
        explanation:
          "Adding the equations eliminates {{y}}: {{2x = 16 => x = 8}}. Substituting back gives {{8 + y = 11 => y = 3}}. Swapping to {{x = 3, y = 8}} fails the second equation because {{3 - 8 = -5 != 5}}.",
      },
      {
        id: "equations-inequalities-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "simultaneous-equations",
        question: "Solve simultaneously: {{2x + y = 13}} and {{x + y = 8}}.",
        options: [
          "{{x = 7, y = 1}}",
          "{{x = 3, y = 5}}",
          "{{x = 4, y = 4}}",
          "{{x = 5, y = 3}}",
        ],
        answerIndex: 3,
        hints: [
          "Both equations have {{+y}} (Same Signs → Subtract!).",
          "Subtract the second equation from the first to find {{x}} immediately.",
        ],
        explanation:
          "Subtracting gives {{(2x - x) + (y - y) = 13 - 8 => x = 5}}. Substituting into {{x + y = 8}} gives {{y = 3}}. Check: {{2(5) + 3 = 13}}.",
      },
      {
        id: "equations-inequalities-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "simultaneous-equations",
        question: "Solve simultaneously: {{y = 3x}} and {{x + y = 20}}.",
        options: [
          "{{x = 4, y = 16}}",
          "{{x = 15, y = 5}}",
          "{{x = 5, y = 15}}",
          "{{x = 6, y = 14}}",
        ],
        answerIndex: 2,
        hints: [
          "Use substitution: replace {{y}} with {{3x}} in {{x + y = 20}}.",
          "Solve {{x + 3x = 20}}, then calculate {{y = 3x}}.",
        ],
        explanation:
          "Substituting {{y = 3x}} gives {{x + 3x = 20 => 4x = 20 => x = 5}}, and {{y = 3(5) = 15}}. Note {{x = 15, y = 5}} reverses {{x}} and {{y}}.",
      },
      {
        id: "equations-inequalities-m1-q10",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "equations-and-graphs",
        question:
          "At what point do the straight lines {{y = x + 2}} and {{y = 8 - x}} intersect?",
        options: ["{{(3, 5)}}", "{{(5, 3)}}", "{{(4, 6)}}", "{{(2, 4)}}"],
        answerIndex: 0,
        hints: [
          "At the intersection point, both {{y}}-values are equal, so set {{x + 2 = 8 - x}}.",
          "Find {{x}}, then substitute into either line to get {{y}}.",
        ],
        explanation:
          "Setting {{x + 2 = 8 - x}} gives {{2x = 6 => x = 3}}, and {{y = 3 + 2 = 5}}, so the intersection is {{(3, 5)}}. Writing {{(5, 3)}} swaps the {{x}}- and {{y}}-coordinates.",
      },
      {
        id: "equations-inequalities-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "equations-and-graphs",
        question:
          "Which pair of straight lines is **parallel** and therefore has **no simultaneous solution**?",
        options: [
          "{{y = 3x + 2}} and {{y = -3x + 2}}",
          "{{y = 3x + 2}} and {{y = 2x + 3}}",
          "{{y = 3x + 2}} and {{2y = 6x + 4}}",
          "{{y = 3x + 2}} and {{y = 3x - 5}}",
        ],
        answerIndex: 3,
        hints: [
          "Parallel lines have the EXACT same gradient {{m}} but DIFFERENT {{y}}-intercepts {{c}}.",
          "Careful: check whether any pair is actually the EXACT SAME line doubled!",
        ],
        explanation:
          "{{y = 3x + 2}} and {{y = 3x - 5}} share gradient {{3}} with different intercepts ({{2}} and {{-5}}), so they never meet. Meanwhile {{2y = 6x + 4}} simplifies to {{y = 3x + 2}} (the same line: infinitely many solutions).",
      },
      {
        id: "equations-inequalities-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "equations-and-graphs",
        question:
          "The curve {{y = x^2 - 9}} crosses the {{x}}-axis at two points. What are the {{x}}-coordinates of those two points?",
        options: [
          "{{x = 9}} and {{x = -9}}",
          "{{x = 3}} and {{x = -3}}",
          "{{x = 0}} and {{x = 9}}",
          "{{x = 0}} and {{x = -9}}",
        ],
        answerIndex: 1,
        hints: [
          "On the {{x}}-axis, {{y = 0}}.",
          "Solve {{x^2 - 9 = 0}} to find both {{x}}-intercepts.",
        ],
        explanation:
          "Setting {{y = 0}} gives {{x^2 - 9 = 0 => x^2 = 9 => x = 3}} or {{x = -3}}. The point {{(0, -9)}} is the {{y}}-intercept, not an {{x}}-intercept.",
      },
      {
        id: "equations-inequalities-m1-q13",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "inequalities",
        question: "Solve the inequality {{3x - 4 > 11}}.",
        options: ["{{x > 5}}", "{{x < 5}}", "{{x >= 5}}", "{{x > 7/3}}"],
        answerIndex: 0,
        hints: [
          "Add {{4}} to both sides, then divide by {{3}}.",
          "Because {{3}} is positive, the inequality sign stays unchanged.",
        ],
        explanation:
          "Adding {{4}} gives {{3x > 15}}, and dividing by positive {{3}} gives {{x > 5}}. Subtracting {{4}} instead of adding gives the wrong boundary {{7/3}}.",
      },
      {
        id: "equations-inequalities-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "inequalities",
        question:
          "A number line shows a hollow (open) circle at {{-3}}, a solid (filled) circle at {{2}}, and a line segment connecting them. Which inequality does this represent?",
        options: [
          "{{-3 <= x < 2}}",
          "{{-3 < x < 2}}",
          "{{-3 <= x <= 2}}",
          "{{-3 < x <= 2}}",
        ],
        answerIndex: 3,
        hints: [
          "Hollow circle = strict ({{<}}); solid circle = inclusive ({{<=}}).",
          "Match {{-3}} with {{<}} and {{2}} with {{<=}}.",
        ],
        explanation:
          "An open circle excludes {{-3}} (strict {{<}}) and a closed circle includes {{2}} (inclusive {{<=}}), giving {{-3 < x <= 2}}.",
      },
      {
        id: "equations-inequalities-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "inequalities",
        question: "Solve the inequality {{-2x >= 14}}.",
        options: ["{{x >= -7}}", "{{x <= 7}}", "{{x <= -7}}", "{{x >= 7}}"],
        answerIndex: 2,
        hints: [
          "You need to divide both sides by {{-2}} — a NEGATIVE number!",
          "Dividing by a negative FLIPS {{>=}} to {{<=}}.",
        ],
        explanation:
          "Dividing by {{-2}} flips {{>=}} to {{<=}}, giving {{x <= -7}}. Test {{x = -8}}: {{-2(-8) = 16 >= 14}} ✓, whereas forgetting to flip ({{x >= -7}}) wrongly includes {{x = 0}} where {{0 >= 14}} is false.",
      },
    ],
  },

  // ===========================================================================
  // PAPER 2: APPLIED & EXAM PRACTICE
  // ===========================================================================
  {
    id: "equations-inequalities-m2",
    title: "MCQ Paper 2 — Fractions, Factorised Quadratics & Context Problems",
    questions: [
      {
        id: "equations-inequalities-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "linear-equations-brackets-fractions",
        question: "Solve {{4(2x - 1) = 3(x + 7)}}.",
        options: ["{{x = 3}}", "{{x = 17/5}}", "{{x = 2}}", "{{x = 5}}"],
        answerIndex: 3,
        hints: [
          "Expand both brackets first: {{8x - 4 = 3x + 21}}.",
          "Subtract {{3x}} and add {{4}} to both sides.",
        ],
        explanation:
          "Expanding gives {{8x - 4 = 3x + 21}}. Subtracting {{3x}} gives {{5x - 4 = 21}}, so {{5x = 25}} and {{x = 5}}. Subtracting {{4}} instead of adding gives {{5x = 17}}.",
      },
      {
        id: "equations-inequalities-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "linear-equations-brackets-fractions",
        question: "Solve {{(3x - 2)/4 + 2 = 6}}.",
        options: ["{{x = 6}}", "{{x = 8}}", "{{x = 16/3}}", "{{x = 22/3}}"],
        answerIndex: 0,
        hints: [
          "Subtract {{2}} from both sides FIRST to isolate the fraction: {{(3x - 2)/4 = 4}}.",
          "Multiply by {{4}}, then solve {{3x - 2 = 16}}.",
        ],
        explanation:
          "Subtracting {{2}} gives {{(3x - 2)/4 = 4}}, multiplying by {{4}} gives {{3x - 2 = 16}}, so {{3x = 18}} and {{x = 6}}. Multiplying by {{4}} without multiplying the {{+2}} by {{4}} leads to the wrong answer {{x = 8}}.",
      },
      {
        id: "equations-inequalities-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "linear-equations-brackets-fractions",
        question: "Solve {{5 - 2(x - 3) = 17}}.",
        options: ["{{x = 3}}", "{{x = -3}}", "{{x = -9}}", "{{x = -6}}"],
        answerIndex: 1,
        hints: [
          "Watch the minus sign when expanding {{-2(x - 3)}}: negative × negative = positive!",
          "{{5 - 2x + 6 = 17}} simplifies to {{11 - 2x = 17}}.",
        ],
        explanation:
          "Expanding carefully gives {{5 - 2x + 6 = 17 => 11 - 2x = 17 => -2x = 6 => x = -3}}. Check: {{5 - 2(-3 - 3) = 5 - 2(-6) = 5 + 12 = 17}}. Writing {{-2(x - 3) = -2x - 6}} wrongly gives {{x = -9}}.",
      },
      {
        id: "equations-inequalities-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "simple-quadratics",
        question: "Find both solutions of {{(x - 3)^2 = 16}}.",
        options: [
          "{{x = 7}} or {{x = -7}}",
          "{{x = 1}} or {{x = -7}}",
          "{{x = 7}} or {{x = -1}}",
          "{{x = 19}} or {{x = -13}}",
        ],
        answerIndex: 2,
        hints: [
          "Take {{+-sqrt(16)}} right away: {{x - 3 = +4}} or {{x - 3 = -4}}.",
          "Add {{3}} to BOTH {{+4}} and {{-4}}.",
        ],
        explanation:
          "{{x - 3 = 4 => x = 7}} and {{x - 3 = -4 => x = -1}}. Writing {{x = +-7}} assumes the two roots are negatives of each other, which is only true when the square is centred at {{0}}.",
      },
      {
        id: "equations-inequalities-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "simple-quadratics",
        question: "Find ALL solutions of {{x^2 - 7x = 0}}.",
        options: [
          "{{x = 0}} or {{x = 7}}",
          "{{x = 7}} only",
          "{{x = 7}} or {{x = -7}}",
          "{{x = 0}} or {{x = -7}}",
        ],
        answerIndex: 0,
        hints: [
          "NEVER divide by {{x}}! Factorise {{x}} out instead.",
          "{{x(x - 7) = 0}} gives two factors that can each be zero.",
        ],
        explanation:
          "Factorising gives {{x(x - 7) = 0}}, so {{x = 0}} or {{x = 7}}. Dividing by {{x}} silently destroys the valid root {{x = 0}}.",
      },
      {
        id: "equations-inequalities-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "simple-quadratics",
        question: "Solve {{x^2 + 2x - 15 = 0}}.",
        options: [
          "{{x = 5}} or {{x = -3}}",
          "{{x = -5}} or {{x = -3}}",
          "{{x = 5}} or {{x = 3}}",
          "{{x = -5}} or {{x = 3}}",
        ],
        answerIndex: 3,
        hints: [
          "Factorise {{x^2 + 2x - 15}} using two numbers multiplying to {{-15}} and adding to {{+2}}.",
          "Once you have {{(x + 5)(x - 3) = 0}}, set each bracket equal to {{0}}.",
        ],
        explanation:
          "{{x^2 + 2x - 15 = (x + 5)(x - 3) = 0}}, giving {{x = -5}} or {{x = 3}}. Keeping the signs from inside the brackets gives the reversed distractor {{x = 5}} or {{x = -3}}.",
      },
      {
        id: "equations-inequalities-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "simultaneous-equations",
        question: "Solve simultaneously: {{3x + 2y = 19}} and {{x + 2y = 9}}.",
        options: [
          "{{x = 4, y = 2.5}}",
          "{{x = 5, y = 2}}",
          "{{x = 2, y = 5}}",
          "{{x = 7, y = -1}}",
        ],
        answerIndex: 1,
        hints: [
          "Both equations contain {{+2y}} (Same Signs → Subtract!).",
          "Subtract the second equation from the first: {{2x = 10}}.",
        ],
        explanation:
          "Subtracting eliminates {{2y}}: {{2x = 10 => x = 5}}. Substituting into {{x + 2y = 9}} gives {{5 + 2y = 9 => y = 2}}. Adding instead of subtracting fails to eliminate {{y}}.",
      },
      {
        id: "equations-inequalities-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "simultaneous-equations",
        question: "Solve simultaneously: {{2x + 3y = 17}} and {{5x - 3y = 11}}.",
        options: [
          "{{x = 3, y = 4}}",
          "{{x = 2, y = 4}}",
          "{{x = 4, y = 3}}",
          "{{x = 5, y = 2}}",
        ],
        answerIndex: 2,
        hints: [
          "Look at {{+3y}} and {{-3y}}: Different Signs → ADD the two equations!",
          "Adding gives {{7x = 28}}.",
        ],
        explanation:
          "Adding gives {{7x = 28 => x = 4}}. Substituting into {{2(4) + 3y = 17}} gives {{3y = 9 => y = 3}}. Check: {{5(4) - 3(3) = 20 - 9 = 11}}.",
      },
      {
        id: "equations-inequalities-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "simultaneous-equations",
        question:
          "At a museum, {{3}} adult tickets and {{2}} child tickets cost {{£44}}. {{1}} adult ticket and {{2}} child tickets cost {{£20}}. What is the cost of **one adult ticket**?",
        options: ["{{£4}}", "{{£8}}", "{{£16}}", "{{£12}}"],
        answerIndex: 3,
        hints: [
          "Write two equations: {{3A + 2C = 44}} and {{A + 2C = 20}}.",
          "Subtract the second equation from the first to eliminate {{2C}}.",
        ],
        explanation:
          "Subtracting {{A + 2C = 20}} from {{3A + 2C = 44}} gives {{2A = 24}}, so one adult ticket costs {{£12}} (and one child ticket costs {{£4}}).",
      },
      {
        id: "equations-inequalities-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "equations-and-graphs",
        question:
          "Find the coordinates of the intersection point of the lines {{y = 3x - 5}} and {{y = x + 3}}.",
        options: ["{{(7, 4)}}", "{{(4, 7)}}", "{{(2, 5)}}", "{{(1, 4)}}"],
        answerIndex: 1,
        hints: [
          "Equate the two {{y}}-expressions: {{3x - 5 = x + 3}}.",
          "Solve for {{x}}, then substitute back to get {{y}} (remember {{(x, y)}} order!).",
        ],
        explanation:
          "{{3x - 5 = x + 3 => 2x = 8 => x = 4}}, and {{y = 4 + 3 = 7}}, so the intersection is {{(4, 7)}}. Reversing coordinates gives the distractor {{(7, 4)}}.",
      },
      {
        id: "equations-inequalities-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "equations-and-graphs",
        question:
          "The graph of {{y = x^2 - 2x - 3}} is drawn on a grid. Which straight line should you draw on the same grid to read off the solutions of {{x^2 - 2x - 3 = 5}}?",
        options: ["{{y = 5}}", "{{x = 5}}", "{{y = -5}}", "{{y = 2}}"],
        answerIndex: 0,
        hints: [
          "The curve already plots {{y = x^2 - 2x - 3}}.",
          "Compare {{y = x^2 - 2x - 3}} with {{x^2 - 2x - 3 = 5}}: what value must {{y}} equal?",
        ],
        explanation:
          "Where the parabola {{y = x^2 - 2x - 3}} meets the horizontal line {{y = 5}}, we have {{x^2 - 2x - 3 = 5}}. Drawing the vertical line {{x = 5}} only substitutes {{x = 5}} rather than solving for {{x}}.",
      },
      {
        id: "equations-inequalities-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "equations-and-graphs",
        question:
          "The lines {{2x + y = 10}} and {{y = 2x - 2}} cross at point {{P}}. What are the coordinates of {{P}}?",
        options: ["{{(2, 6)}}", "{{(4, 2)}}", "{{(3, 4)}}", "{{(4, 3)}}"],
        answerIndex: 2,
        hints: [
          "Substitute {{y = 2x - 2}} directly into {{2x + y = 10}}.",
          "Solve {{2x + (2x - 2) = 10}} for {{x}}, then find {{y}}.",
        ],
        explanation:
          "Substituting gives {{4x - 2 = 10 => 4x = 12 => x = 3}}, then {{y = 2(3) - 2 = 4}}, giving {{P(3, 4)}}. Check: {{2(3) + 4 = 10}}.",
      },
      {
        id: "equations-inequalities-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "inequalities",
        question: "Solve the inequality {{15 - 3x < 6}}.",
        options: ["{{x < 3}}", "{{x > 3}}", "{{x > -3}}", "{{x < -3}}"],
        answerIndex: 1,
        hints: [
          "Subtract {{15}} from both sides to get {{-3x < -9}}.",
          "Divide by {{-3}} and remember to FLIP the inequality sign!",
        ],
        explanation:
          "Subtracting {{15}} gives {{-3x < -9}}. Dividing by {{-3}} reverses {{<}} to {{>}}, giving {{x > 3}}. Forgetting to flip gives {{x < 3}}, which fails at {{x = 0}} ({{15 < 6}} is false).",
      },
      {
        id: "equations-inequalities-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "inequalities",
        question: "How many **integer** values of {{n}} satisfy {{-4 < n <= 2}}?",
        options: ["{{5}}", "{{7}}", "{{6}}", "{{4}}"],
        answerIndex: 2,
        hints: [
          "List every integer carefully — is {{-4}} included? Is {{2}} included?",
          "Count the list: {{-3, -2, -1, 0, 1, 2}} (don't forget {{0}}!).",
        ],
        explanation:
          "Since {{-4}} is excluded ({{<}}) and {{2}} is included ({{<=}}), the integers are {{-3, -2, -1, 0, 1, 2}} — a total of {{6}} integers. Forgetting {{0}} gives {{5}}, and wrongly including {{-4}} gives {{7}}.",
      },
      {
        id: "equations-inequalities-m2-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "inequalities",
        question: "Solve the double inequality {{-3 <= 2x + 1 < 7}}.",
        options: [
          "{{-2 <= x < 3}}",
          "{{-1 <= x < 4}}",
          "{{-2 < x <= 3}}",
          "{{-4 <= x < 6}}",
        ],
        answerIndex: 0,
        hints: [
          "Subtract {{1}} from ALL THREE parts first: {{-4 <= 2x < 6}}.",
          "Divide ALL THREE parts by {{2}} (positive, so signs stay the same).",
        ],
        explanation:
          "Subtracting {{1}} gives {{-4 <= 2x < 6}}, and dividing by {{2}} gives {{-2 <= x < 3}}. Adding {{1}} instead of subtracting gives the wrong range {{-1 <= x < 4}}.",
      },
    ],
  },

  // ===========================================================================
  // PAPER 3: MASTERY & STRETCH
  // ===========================================================================
  {
    id: "equations-inequalities-m3",
    title: "MCQ Paper 3 — Mastery, Multi-Fraction Equations & Stretch Inequalities",
    questions: [
      {
        id: "equations-inequalities-m3-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "linear-equations-brackets-fractions",
        question: "Solve {{(x + 1)/2 + (x - 2)/3 = 4}}.",
        options: ["{{x = 3}}", "{{x = 5}}", "{{x = 7}}", "{{x = 23/5}}"],
        answerIndex: 1,
        hints: [
          "Multiply EVERY term on both sides by the LCM of {{2}} and {{3}}, which is {{6}}.",
          "You get {{3(x + 1) + 2(x - 2) = 24}} — now expand and solve.",
        ],
        explanation:
          "Multiplying by {{6}} gives {{3(x + 1) + 2(x - 2) = 24 => 3x + 3 + 2x - 4 = 24 => 5x - 1 = 24 => x = 5}}. Check: {{6/2 + 3/3 = 3 + 1 = 4}}.",
      },
      {
        id: "equations-inequalities-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "linear-equations-brackets-fractions",
        question: "Solve {{(2x + 1)/3 - (x - 2)/2 = 3}}.",
        options: ["{{x = 22}}", "{{x = 14}}", "{{x = 10}}", "{{x = 2}}"],
        answerIndex: 2,
        hints: [
          "Multiply every term by {{6}} and keep brackets around both numerators: {{2(2x + 1) - 3(x - 2) = 18}}.",
          "Watch the double negative when expanding {{-3(x - 2)}}: it equals {{-3x + 6}}!",
        ],
        explanation:
          "Multiplying by {{6}} gives {{2(2x + 1) - 3(x - 2) = 18 => 4x + 2 - 3x + 6 = 18 => x + 8 = 18 => x = 10}}. Forgetting to flip {{-3(-2)}} to {{+6}} produces {{x - 4 = 18 => x = 22}}.",
      },
      {
        id: "equations-inequalities-m3-q03",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "linear-equations-brackets-fractions",
        question:
          "For which value of {{k}} does the linear equation {{3(2x - 1) = kx + 5}} have **no solution**?",
        options: ["{{k = 2}}", "{{k = 3}}", "{{k = -6}}", "{{k = 6}}"],
        answerIndex: 3,
        hints: [
          "Expand the left-hand side: {{6x - 3 = kx + 5}}.",
          "Collect {{x}}-terms: {{(6 - k)x = 8}}. For what {{k}} does this become {{0 = 8}} (impossible)?",
        ],
        explanation:
          "Expanding gives {{6x - 3 = kx + 5}}, so {{(6 - k)x = 8}}. When {{k = 6}}, the equation reduces to {{0 = 8}}, which is impossible — so there is no solution.",
      },
      {
        id: "equations-inequalities-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "simple-quadratics",
        question: "Find both solutions of {{3(x + 2)^2 - 5 = 43}}.",
        options: [
          "{{x = 2}} or {{x = -6}}",
          "{{x = 6}} or {{x = -2}}",
          "{{x = 4}} or {{x = -4}}",
          "{{x = 2}} or {{x = -2}}",
        ],
        answerIndex: 0,
        hints: [
          "Add {{5}} and divide by {{3}} to isolate the squared bracket: {{(x + 2)^2 = 16}}.",
          "Take {{+-sqrt(16)}}: {{x + 2 = 4}} or {{x + 2 = -4}}.",
        ],
        explanation:
          "Adding {{5}} gives {{3(x + 2)^2 = 48}}, dividing by {{3}} gives {{(x + 2)^2 = 16}}, so {{x + 2 = +-4}}, yielding {{x = 2}} or {{x = -6}}.",
      },
      {
        id: "equations-inequalities-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "simple-quadratics",
        question: "Find both solutions of {{x^2 - 5x = 14}}.",
        options: [
          "{{x = -7}} or {{x = 2}}",
          "{{x = 7}} or {{x = 2}}",
          "{{x = 0}} or {{x = 5}}",
          "{{x = 7}} or {{x = -2}}",
        ],
        answerIndex: 3,
        hints: [
          "Move {{14}} to the left so the right-hand side is {{0}}: {{x^2 - 5x - 14 = 0}}.",
          "Factorise into {{(x - 7)(x + 2) = 0}}.",
        ],
        explanation:
          "Rearranging gives {{x^2 - 5x - 14 = 0}}, which factorises to {{(x - 7)(x + 2) = 0}}, so {{x = 7}} or {{x = -2}}. Check {{-2}}: {{(-2)^2 - 5(-2) = 4 + 10 = 14}}.",
      },
      {
        id: "equations-inequalities-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "simple-quadratics",
        question: "Solve the quadratic equation {{(x - 2)(x + 1) = 10}}.",
        options: [
          "{{x = 12}} or {{x = 9}}",
          "{{x = 4}} or {{x = -3}}",
          "{{x = -4}} or {{x = 3}}",
          "{{x = 2}} or {{x = -1}}",
        ],
        answerIndex: 1,
        hints: [
          "The RHS is {{10}}, NOT {{0}} — you MUST expand first and subtract {{10}}!",
          "Expand {{(x - 2)(x + 1) = x^2 - x - 2}}, subtract {{10}} to get {{x^2 - x - 12 = 0}}, then factorise.",
        ],
        explanation:
          "Expanding gives {{x^2 - x - 2 = 10 => x^2 - x - 12 = 0 => (x - 4)(x + 3) = 0}}, so {{x = 4}} or {{x = -3}}. Setting each bracket equal to {{10}} wrongly gives {{x = 12}} or {{x = 9}}.",
      },
      {
        id: "equations-inequalities-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "simultaneous-equations",
        question: "Solve simultaneously: {{3x + 2y = 16}} and {{2x - 3y = 2}}.",
        options: [
          "{{x = 2, y = 4}}",
          "{{x = 4, y = -2}}",
          "{{x = 4, y = 2}}",
          "{{x = 6, y = -1}}",
        ],
        answerIndex: 2,
        hints: [
          "Eliminate {{y}} by multiplying the first equation by {{3}} and the second by {{2}}.",
          "Since {{+6y}} and {{-6y}} have different signs, ADD {{9x + 6y = 48}} and {{4x - 6y = 4}}.",
        ],
        explanation:
          "Scaling gives {{9x + 6y = 48}} and {{4x - 6y = 4}}. Adding gives {{13x = 52 => x = 4}}, and {{3(4) + 2y = 16 => y = 2}}. Check: {{2(4) - 3(2) = 2}}.",
      },
      {
        id: "equations-inequalities-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "simultaneous-equations",
        question: "Solve simultaneously: {{4x - 3y = 17}} and {{3x - 2y = 12}}.",
        options: [
          "{{x = 2, y = -3}}",
          "{{x = 2, y = 3}}",
          "{{x = -2, y = -3}}",
          "{{x = 5, y = 1}}",
        ],
        answerIndex: 0,
        hints: [
          "Scale to match {{y}}-coefficients at {{-6y}}: multiply (1) by {{2}} and (2) by {{3}}.",
          "Same signs ({{-6y}} and {{-6y}}) → subtract {{8x - 6y = 34}} from {{9x - 6y = 36}}.",
        ],
        explanation:
          "{{9x - 6y = 36}} minus {{8x - 6y = 34}} gives {{x = 2}}. Substituting into {{3(2) - 2y = 12}} gives {{-2y = 6 => y = -3}}. Check: {{4(2) - 3(-3) = 8 + 9 = 17}}.",
      },
      {
        id: "equations-inequalities-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "simultaneous-equations",
        question:
          "The sum of two numbers is {{23}} and their difference is {{9}}. What is the **product** of the two numbers?",
        options: ["{{126}}", "{{112}}", "{{105}}", "{{120}}"],
        answerIndex: 1,
        hints: [
          "Write {{x + y = 23}} and {{x - y = 9}}, then add them to find {{x}}.",
          "Once you have {{x = 16}} and {{y = 7}}, multiply them together.",
        ],
        explanation:
          "Adding {{x + y = 23}} and {{x - y = 9}} gives {{2x = 32 => x = 16}}, and {{y = 23 - 16 = 7}}. Their product is {{16 * 7 = 112}}.",
      },
      {
        id: "equations-inequalities-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "equations-and-graphs",
        question:
          "For what value of {{m}} are the lines {{y = mx + 4}} and {{6x - 2y = 5}} parallel?",
        options: ["{{m = 6}}", "{{m = -3}}", "{{m = 1/3}}", "{{m = 3}}"],
        answerIndex: 3,
        hints: [
          "Rearrange {{6x - 2y = 5}} into {{y = mx + c}} form first.",
          "{{2y = 6x - 5 => y = 3x - 2.5}} — read off the gradient!",
        ],
        explanation:
          "Rearranging {{6x - 2y = 5}} gives {{2y = 6x - 5}}, so {{y = 3x - 2.5}}, which has gradient {{3}}. Parallel lines have equal gradients, so {{m = 3}}.",
      },
      {
        id: "equations-inequalities-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "equations-and-graphs",
        question:
          "The graph of {{y = x^2 - 4x + 1}} is drawn on a grid. Which horizontal line should you draw to find the solutions of {{x^2 - 4x - 4 = 0}}?",
        options: ["{{y = -4}}", "{{y = 4}}", "{{y = 5}}", "{{y = -5}}"],
        answerIndex: 2,
        hints: [
          "Rearrange {{x^2 - 4x - 4 = 0}} so the left-hand side matches {{x^2 - 4x + 1}}.",
          "Add {{5}} to both sides: {{x^2 - 4x + 1 = 5}}!",
        ],
        explanation:
          "Adding {{5}} to both sides of {{x^2 - 4x - 4 = 0}} produces {{x^2 - 4x + 1 = 5}}, which matches {{y = 5}} on the drawn curve {{y = x^2 - 4x + 1}}. Drawing {{y = -4}} solves {{x^2 - 4x + 1 = -4}} instead.",
      },
      {
        id: "equations-inequalities-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "equations-and-graphs",
        question:
          "The straight lines {{y = 2x + c}} and {{y = -x + 7}} intersect at {{(2, 5)}}. What is the value of {{c}}?",
        options: ["{{c = 1}}", "{{c = 3}}", "{{c = 5}}", "{{c = -1}}"],
        answerIndex: 0,
        hints: [
          "Since {{(2, 5)}} lies on {{y = 2x + c}}, substitute {{x = 2}} and {{y = 5}} directly.",
          "Solve {{5 = 2(2) + c}} for {{c}}.",
        ],
        explanation:
          "Substituting {{(2, 5)}} into {{y = 2x + c}} gives {{5 = 4 + c}}, so {{c = 1}}. Check: at {{x = 2}}, both {{2(2) + 1 = 5}} and {{-2 + 7 = 5}}.",
      },
      {
        id: "equations-inequalities-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "inequalities",
        question: "Solve the inequality {{4 - 5x <= 2x + 25}}.",
        options: ["{{x <= -3}}", "{{x >= 3}}", "{{x <= 3}}", "{{x >= -3}}"],
        answerIndex: 3,
        hints: [
          "Add {{5x}} to both sides so the {{x}}-coefficient stays positive: {{4 <= 7x + 25}}.",
          "Subtract {{25}} and divide by {{7}}: {{-21 <= 7x}}.",
        ],
        explanation:
          "Adding {{5x}} gives {{4 <= 7x + 25}}, subtracting {{25}} gives {{-21 <= 7x}}, and dividing by {{7}} gives {{-3 <= x}}, i.e. {{x >= -3}}. Alternatively {{-7x <= 21}} divides by {{-7}} and flips to {{x >= -3}}.",
      },
      {
        id: "equations-inequalities-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "inequalities",
        question:
          "What is the **largest integer** {{x}} that satisfies {{3(2 - x) > 14}}?",
        options: ["{{-2}}", "{{-3}}", "{{-4}}", "{{-1}}"],
        answerIndex: 1,
        hints: [
          "Expand first: {{6 - 3x > 14}}, then subtract {{6}}: {{-3x > 8}}.",
          "Divide by {{-3}} AND flip the sign: {{x < -8/3}} ({{-2.66...}}).",
          "Which is the largest whole number strictly LESS than {{-2.66...}}?",
        ],
        explanation:
          "{{6 - 3x > 14 => -3x > 8 => x < -8/3 = -2 2/3}}. The largest integer strictly less than {{-2 2/3}} is {{-3}}. Check: at {{x = -3}}, {{3(5) = 15 > 14}} ✓, while at {{x = -2}}, {{3(4) = 12}} is NOT greater than {{14}}.",
      },
      {
        id: "equations-inequalities-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "inequalities",
        question: "Solve the double inequality {{-5 < 1 - 2x <= 7}}.",
        options: [
          "{{-3 < x <= 3}}",
          "{{3 < x <= -3}}",
          "{{-3 <= x < 3}}",
          "{{-4 <= x < 2}}",
        ],
        answerIndex: 2,
        hints: [
          "Subtract {{1}} from all three parts first: {{-6 < -2x <= 6}}.",
          "Divide all three parts by {{-2}} AND flip BOTH inequality symbols: {{3 > x >= -3}}.",
          "Rewrite in ascending order from left to right: {{-3 <= x < 3}}.",
        ],
        explanation:
          "Subtracting {{1}} gives {{-6 < -2x <= 6}}. Dividing by {{-2}} reverses both signs to {{3 > x >= -3}}, which in standard ascending order is {{-3 <= x < 3}}. Notice {{-3}} stays inclusive ({{<=}}) while {{3}} stays strict ({{<}}).",
      },
    ],
  },
];
