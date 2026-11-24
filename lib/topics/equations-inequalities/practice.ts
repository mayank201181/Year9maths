import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK-CHECK QUIZ (10 MIXED QUESTIONS — 2 PER SECTION)
  // ===========================================================================
  quiz: [
    {
      id: "equations-inequalities-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "linear-equations-brackets-fractions",
      question: "Solve {{4(x - 3) = 2x + 6}}.",
      answer: { type: "number", value: 9 },
      traps: [
        {
          spec: { type: "number", value: 4.5 },
          feedback: "Expand {{4(x - 3) = 4x - 12}} (remember to multiply {{-3}} by {{4}} too!).",
        },
      ],
      hints: [
        "Expand the left-hand side: {{4x - 12 = 2x + 6}}.",
        "Subtract {{2x}} and add {{12}} to both sides.",
      ],
      solution: [
        "Expand: {{4x - 12 = 2x + 6}}.",
        "Subtract {{2x}}: {{2x - 12 = 6 => 2x = 18 => x = 9}}.",
      ],
    },
    {
      id: "equations-inequalities-quiz-q02",
      kind: "short",
      difficulty: "core",
      guideRef: "linear-equations-brackets-fractions",
      question: "Solve {{(2x + 5)/3 = 7}}.",
      answer: { type: "number", value: 8 },
      hints: [
        "Multiply both sides by {{3}} to clear the denominator.",
        "Then solve {{2x + 5 = 21}}.",
      ],
      solution: [
        "Multiply by {{3}}: {{2x + 5 = 21}}.",
        "Subtract {{5}}: {{2x = 16 => x = 8}}.",
      ],
    },
    {
      id: "equations-inequalities-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "simple-quadratics",
      question: "Find BOTH solutions of {{x^2 = 81}}.",
      answer: {
        type: "list",
        values: [9, -9],
        ordered: false,
        display: "{{x = 9}} or {{x = -9}}",
      },
      hints: [
        "Which two numbers multiply by themselves to make {{81}}?",
        "Remember BOTH the positive and negative square root!",
      ],
      solution: [
        "Take {{+-sqrt(81)}}: {{x = 9}} or {{x = -9}}.",
      ],
    },
    {
      id: "equations-inequalities-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "simple-quadratics",
      question: "Find BOTH solutions of {{(x - 6)(x + 4) = 0}}.",
      answer: {
        type: "list",
        values: [6, -4],
        ordered: false,
        display: "{{x = 6}} or {{x = -4}}",
      },
      traps: [
        {
          spec: { type: "list", values: [-6, 4], ordered: false },
          feedback: "Set each bracket to {{0}}: {{x - 6 = 0 => x = +6}} and {{x + 4 = 0 => x = -4}}!",
        },
      ],
      hints: [
        "Use the Zero-Product Property: set {{x - 6 = 0}} and {{x + 4 = 0}}.",
        "Solve each simple linear equation.",
      ],
      solution: [
        "{{x - 6 = 0 => x = 6}}, or {{x + 4 = 0 => x = -4}}.",
      ],
    },
    {
      id: "equations-inequalities-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "simultaneous-equations",
      question:
        "Solve simultaneously: {{3x + y = 14}} and {{x - y = 2}}. Enter your answer as `x, y`.",
      answer: {
        type: "list",
        values: [4, 2],
        ordered: true,
        display: "{{x = 4, y = 2}}",
      },
      hints: [
        "Different signs on {{+y}} and {{-y}} → ADD the two equations!",
        "Adding gives {{4x = 16}}, then find {{y}}.",
      ],
      solution: [
        "Add the equations: {{4x = 16 => x = 4}}.",
        "Substitute into {{x - y = 2}}: {{4 - y = 2 => y = 2}}.",
      ],
    },
    {
      id: "equations-inequalities-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      guideRef: "simultaneous-equations",
      question:
        "Which pair of values solves {{2x + 3y = 19}} and {{2x + y = 9}}?",
      options: [
        "{{x = 2, y = 5}}",
        "{{x = 5, y = 2}}",
        "{{x = 3, y = 4}}",
        "{{x = 4, y = 1}}",
      ],
      answerIndex: 0,
      hints: [
        "Both equations have {{2x}} (Same Signs → Subtract!).",
        "Subtracting gives {{2y = 10}}, so find {{y}} and then {{x}}.",
      ],
      explanation:
        "Subtracting the second equation from the first gives {{2y = 10 => y = 5}}. Substituting back into {{2x + 5 = 9}} gives {{2x = 4 => x = 2}}.",
    },
    {
      id: "equations-inequalities-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "equations-and-graphs",
      question:
        "Find the coordinates of the intersection point of the lines {{y = 2x + 1}} and {{y = 10 - x}}. Enter as `(x, y)`.",
      answer: {
        type: "list",
        values: [3, 7],
        ordered: true,
        display: "(3, 7)",
      },
      hints: [
        "Equate the two expressions for {{y}}: {{2x + 1 = 10 - x}}.",
        "Solve for {{x}}, then substitute back to get {{y}}.",
      ],
      solution: [
        "{{2x + 1 = 10 - x => 3x = 9 => x = 3}}.",
        "{{y = 2(3) + 1 = 7}}, so intersection is {{(3, 7)}}.",
      ],
    },
    {
      id: "equations-inequalities-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "equations-and-graphs",
      question:
        "The graph of {{y = 2x^2 - 5x - 3}} crosses the {{x}}-axis at {{(-0.5, 0)}} and {{(3, 0)}}. What are the solutions of {{2x^2 - 5x - 3 = 0}}?",
      options: [
        "{{x = 0}} and {{x = -3}}",
        "{{x = -0.5}} and {{x = 3}}",
        "{{x = 0.5}} and {{x = -3}}",
        "{{y = -0.5}} and {{y = 3}}",
      ],
      answerIndex: 1,
      hints: [
        "Where a graph crosses the {{x}}-axis, {{y = 0}}.",
        "Read off the {{x}}-coordinates of those crossing points!",
      ],
      explanation:
        "The roots of {{f(x) = 0}} are the {{x}}-intercepts where {{y = 0}}: {{x = -0.5}} and {{x = 3}}.",
    },
    {
      id: "equations-inequalities-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "inequalities",
      question: "Solve the inequality {{-3x <= 18}}.",
      answer: {
        type: "text",
        accept: ["x >= -6", "-6 <= x"],
        display: "{{x >= -6}}",
      },
      traps: [
        {
          spec: { type: "text", accept: ["x <= -6", "-6 >= x"] },
          feedback: "When dividing by a negative ({{-3}}), you MUST flip {{<=}} to {{>=}}!",
        },
      ],
      hints: [
        "Divide both sides by {{-3}}.",
        "Remember: dividing by a negative FLIPS the inequality sign!",
      ],
      solution: [
        "Divide by {{-3}} and flip {{<=}} to {{>=}}: {{x >= -6}}.",
      ],
    },
    {
      id: "equations-inequalities-quiz-q10",
      kind: "short",
      difficulty: "core",
      guideRef: "inequalities",
      question:
        "List ALL integer values of {{n}} that satisfy {{-2 < n <= 2}}. Separate with commas.",
      answer: {
        type: "list",
        values: [-1, 0, 1, 2],
        ordered: false,
        display: "−1, 0, 1, 2",
      },
      traps: [
        {
          spec: { type: "list", values: [-2, -1, 0, 1, 2], ordered: false },
          feedback: "Check the left symbol: {{-2 < n}} is strict, so {{-2}} is NOT included!",
        },
      ],
      hints: [
        "Check both endpoints: {{-2}} has strict {{<}} (excluded), while {{2}} has {{<=}} (included).",
        "Remember to include {{0}}!",
      ],
      solution: [
        "Integers strictly greater than {{-2}} and up to {{2}} inclusive: {{-1, 0, 1, 2}}.",
      ],
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS (2 PAPERS × 15 QUESTIONS EACH)
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PRACTICE PAPER 1
    // -------------------------------------------------------------------------
    {
      id: "equations-inequalities-p1",
      title: "Practice Paper 1 — Equations, Quadratics & Core Simultaneous Systems",
      questions: [
        {
          id: "equations-inequalities-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "linear-equations-brackets-fractions",
          question: "Solve {{5(x + 2) = 3x + 22}}.",
          answer: { type: "number", value: 6 },
          hints: [
            "Expand {{5(x + 2) = 5x + 10}}.",
            "Subtract {{3x}} and subtract {{10}} from both sides.",
          ],
          solution: [
            "{{5x + 10 = 3x + 22 => 2x = 12 => x = 6}}.",
          ],
        },
        {
          id: "equations-inequalities-p1-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "linear-equations-brackets-fractions",
          question: "Solve {{7 - 3(x - 2) = x + 1}}.",
          answer: { type: "number", value: 3 },
          traps: [
            {
              spec: { type: "number", value: 0 },
              feedback: "Watch the sign in {{-3(x - 2)}}: {{(-3)(-2) = +6}}, so {{7 + 6 = 13}}, not {{1}}!",
            },
          ],
          hints: [
            "Expand {{-3(x - 2)}} carefully to get {{-3x + 6}}.",
            "Simplify the LHS to {{13 - 3x = x + 1}}, then add {{3x}} to both sides.",
          ],
          solution: [
            "{{7 - 3x + 6 = x + 1 => 13 - 3x = x + 1}}.",
            "Add {{3x}} and subtract {{1}}: {{12 = 4x => x = 3}}.",
          ],
        },
        {
          id: "equations-inequalities-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "linear-equations-brackets-fractions",
          question: "Solve {{(4x - 3)/5 = 3}}.",
          answer: { type: "number", value: 4.5, display: "4.5" },
          hints: [
            "Multiply both sides by {{5}} to clear the fraction.",
            "Solve {{4x - 3 = 15}}.",
          ],
          solution: [
            "Multiply by {{5}}: {{4x - 3 = 15}}.",
            "Add {{3}}: {{4x = 18 => x = 18/4 = 9/2 = 4.5}}.",
          ],
        },
        {
          id: "equations-inequalities-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "linear-equations-brackets-fractions",
          question: "Solve {{(x + 3)/2 = (2x - 1)/3}}.",
          answer: { type: "number", value: 11 },
          hints: [
            "Multiply both sides by the LCM {{6}} (cross-multiply): {{3(x + 3) = 2(2x - 1)}}.",
            "Expand both brackets and collect {{x}} on the right.",
          ],
          solution: [
            "Multiply by {{6}}: {{3(x + 3) = 2(2x - 1)}}.",
            "Expand: {{3x + 9 = 4x - 2 => 11 = x}}.",
          ],
        },
        {
          id: "equations-inequalities-p1-q05",
          kind: "written",
          difficulty: "core",
          guideRef: "linear-equations-brackets-fractions",
          question:
            "Liam tries to solve {{(x + 4)/3 + 2 = 6}} by multiplying by {{3}} to write {{x + 4 + 2 = 18}}, giving {{x = 12}}. Identify Liam's error and show how to find the true solution.",
          marks: 3,
          hints: [
            "Check EVERY term on the left-hand side when multiplying by {{3}} — did Liam multiply the {{+2}}?",
            "Rewrite the equation multiplying EVERY term by {{3}}, or subtract {{2}} first.",
            "Solve the corrected linear equation and check your value of {{x}}.",
          ],
          modelAnswer:
            "Liam forgot to multiply every term by {{3}} — the plain number {{2}} must also be multiplied by {{3}} to become {{6}}, giving {{x + 4 + 6 = 18}} (or subtracting {{2}} first gives {{(x + 4)/3 = 4}}). Simplifying gives {{x + 10 = 18}}, so the true solution is {{x = 8}}.",
          markScheme: [
            {
              point: "Explains that every term on both sides must be multiplied by {{3}}, so {{2}} becomes {{6}} ({{x + 4 + 6 = 18}})",
              keywords: ["every term", "x + 4 + 6", "x+4+6", "2 by 3"],
            },
            {
              point: "Forms the correct simplified equation {{x + 10 = 18}} or {{(x + 4)/3 = 4}}",
              keywords: ["x + 10 = 18", "x+10=18", "(x + 4)/3 = 4"],
            },
            {
              point: "Finds the true solution {{x = 8}}",
              keywords: ["x = 8", "x=8"],
            },
          ],
          commonError:
            "Multiplying only the fraction and the right-hand side while leaving integer terms unchanged.",
        },
        {
          id: "equations-inequalities-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "simple-quadratics",
          question: "Find BOTH solutions of {{3x^2 - 7 = 68}}.",
          answer: {
            type: "list",
            values: [5, -5],
            ordered: false,
            display: "{{x = 5}} or {{x = -5}}",
          },
          hints: [
            "Add {{7}} and divide by {{3}} to isolate {{x^2}}.",
            "Take {{+-sqrt(25)}} to get BOTH solutions.",
          ],
          solution: [
            "{{3x^2 = 75 => x^2 = 25}}.",
            "Take {{+-sqrt(25)}}: {{x = 5}} or {{x = -5}}.",
          ],
        },
        {
          id: "equations-inequalities-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "simple-quadratics",
          question: "Find BOTH solutions of {{(x + 2)^2 = 36}}.",
          answer: {
            type: "list",
            values: [4, -8],
            ordered: false,
            display: "{{x = 4}} or {{x = -8}}",
          },
          traps: [
            {
              spec: { type: "list", values: [4, -4], ordered: false },
              feedback: "Split into {{x + 2 = +6}} AND {{x + 2 = -6}} BEFORE subtracting {{2}}!",
            },
          ],
          hints: [
            "Take {{+-sqrt(36)}}: {{x + 2 = 6}} or {{x + 2 = -6}}.",
            "Subtract {{2}} from BOTH {{6}} and {{-6}}.",
          ],
          solution: [
            "{{x + 2 = 6 => x = 4}}, or {{x + 2 = -6 => x = -8}}.",
          ],
        },
        {
          id: "equations-inequalities-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "simple-quadratics",
          question: "Find BOTH solutions of {{x^2 - 6x + 8 = 0}}.",
          answer: {
            type: "list",
            values: [2, 4],
            ordered: false,
            display: "{{x = 2}} or {{x = 4}}",
          },
          hints: [
            "Factorise {{x^2 - 6x + 8}}: find two integers multiplying to {{+8}} and adding to {{-6}}.",
            "Set each bracket of {{(x - 2)(x - 4) = 0}} to {{0}}.",
          ],
          solution: [
            "Factorise: {{(x - 2)(x - 4) = 0}}.",
            "Solutions: {{x = 2}} or {{x = 4}}.",
          ],
        },
        {
          id: "equations-inequalities-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "simultaneous-equations",
          question:
            "Solve simultaneously: {{4x + y = 17}} and {{2x + y = 11}}. Enter as `x, y`.",
          answer: {
            type: "list",
            values: [3, 5],
            ordered: true,
            display: "{{x = 3, y = 5}}",
          },
          hints: [
            "Both equations have {{+y}} (Same Signs → Subtract!).",
            "Subtracting gives {{2x = 6}}, then find {{y}}.",
          ],
          solution: [
            "Subtract (2) from (1): {{2x = 6 => x = 3}}.",
            "Substitute into {{2(3) + y = 11}}: {{y = 5}}.",
          ],
        },
        {
          id: "equations-inequalities-p1-q10",
          kind: "written",
          difficulty: "core",
          guideRef: "simple-quadratics",
          question:
            "Priya solves {{x^2 = 9x}} by dividing both sides by {{x}} to get {{x = 9}}. Explain why Priya's method is flawed and show a valid method that finds ALL solutions.",
          marks: 3,
          hints: [
            "What happens if {{x = 0}}? Are you allowed to divide both sides by {{0}}?",
            "Instead of dividing, subtract {{9x}} from both sides so the RHS is {{0}}, then factorise.",
          ],
          modelAnswer:
            "Priya's method is flawed because dividing by {{x}} assumes {{x != 0}} — division by zero is illegal and silently loses the valid root {{x = 0}}. Instead, rearrange to {{x^2 - 9x = 0}} and factorise to {{x(x - 9) = 0}}. By the zero-product property, BOTH solutions are {{x = 0}} and {{x = 9}}.",
          markScheme: [
            {
              point: "Explains dividing by {{x}} is invalid when {{x = 0}} / loses the root {{0}}",
              keywords: ["zero", "0", "lost", "loses"],
            },
            {
              point: "Rearranges and factorises to {{x(x - 9) = 0}}",
              keywords: ["factoris", "x(x - 9)", "x(x-9)"],
            },
            {
              point: "States BOTH solutions {{x = 0}} and {{x = 9}}",
              keywords: ["x = 0", "x=0", "both"],
            },
          ],
          commonError:
            "Forgetting that {{x = 0}} satisfies {{0^2 = 9(0)}} whenever a variable is cancelled from both sides.",
        },
        {
          id: "equations-inequalities-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "simultaneous-equations",
          question:
            "Solve simultaneously: {{3x + 2y = 19}} and {{x - y = 3}}. Enter as `x, y`.",
          answer: {
            type: "list",
            values: [5, 2],
            ordered: true,
            display: "{{x = 5, y = 2}}",
          },
          hints: [
            "Multiply {{x - y = 3}} by {{2}} to get {{2x - 2y = 6}}.",
            "Different signs on {{+2y}} and {{-2y}} → ADD to get {{5x = 25}}.",
          ],
          solution: [
            "Multiply (2) by {{2}}: {{2x - 2y = 6}}.",
            "Add to (1): {{5x = 25 => x = 5}}.",
            "In (2): {{5 - y = 3 => y = 2}}.",
          ],
        },
        {
          id: "equations-inequalities-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "equations-and-graphs",
          question:
            "Find the coordinates of the intersection point of the lines {{y = 5x - 8}} and {{y = 2x + 1}}. Enter as `(x, y)`.",
          answer: {
            type: "list",
            values: [3, 7],
            ordered: true,
            display: "(3, 7)",
          },
          hints: [
            "Set {{5x - 8 = 2x + 1}} and solve for {{x}}.",
            "Substitute your {{x}} into {{y = 2x + 1}} to get {{y}}.",
          ],
          solution: [
            "{{5x - 8 = 2x + 1 => 3x = 9 => x = 3}}.",
            "{{y = 2(3) + 1 = 7}}, so intersection is {{(3, 7)}}.",
          ],
        },
        {
          id: "equations-inequalities-p1-q13",
          kind: "short",
          difficulty: "core",
          guideRef: "inequalities",
          question: "Solve the inequality {{5x - 9 >= 2x + 6}}.",
          answer: {
            type: "text",
            accept: ["x >= 5", "5 <= x"],
            display: "{{x >= 5}}",
          },
          hints: [
            "Subtract {{2x}} from both sides, then add {{9}}.",
            "Divide by positive {{3}} — the sign stays {{>=}}.",
          ],
          solution: [
            "{{3x - 9 >= 6 => 3x >= 15 => x >= 5}}.",
          ],
        },
        {
          id: "equations-inequalities-p1-q14",
          kind: "short",
          difficulty: "core",
          guideRef: "inequalities",
          question:
            "List ALL integer values of {{n}} that satisfy {{-5 <= 2n - 1 < 5}}. Separate with commas.",
          answer: {
            type: "list",
            values: [-2, -1, 0, 1, 2],
            ordered: false,
            display: "−2, −1, 0, 1, 2",
          },
          hints: [
            "Add {{1}} to ALL THREE parts: {{-4 <= 2n < 6}}.",
            "Divide ALL THREE parts by {{2}}: {{-2 <= n < 3}}, then list the integers.",
          ],
          solution: [
            "Add {{1}}: {{-4 <= 2n < 6}}.",
            "Divide by {{2}}: {{-2 <= n < 3}}.",
            "Integers: {{-2, -1, 0, 1, 2}}.",
          ],
        },
        {
          id: "equations-inequalities-p1-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "inequalities",
          question:
            "Explain using a numerical example why multiplying both sides of an inequality by {{-1}} must reverse the inequality symbol, and then solve {{-4x + 7 > 23}}.",
          marks: 3,
          hints: [
            "Start with a simple true statement like {{2 < 5}} and multiply both sides by {{-1}}.",
            "Think about where {{-2}} and {{-5}} sit on the number line.",
            "For {{-4x + 7 > 23}}, subtract {{7}} first, then divide by {{-4}} and flip!",
          ],
          modelAnswer:
            "Start with {{2 < 5}}; multiplying both sides by {{-1}} gives {{-2}} and {{-5}}. On the number line, multiplying by {{-1}} reflects numbers across {{0}}, putting {{-2}} to the right of (greater than) {{-5}}, so {{-2 > -5}} — the symbol reverses. Solving {{-4x + 7 > 23}}: subtract {{7}} to get {{-4x > 16}}, then divide by {{-4}} and flip the sign to obtain {{x < -4}}.",
          markScheme: [
            {
              point: "Uses a clear numerical example (e.g. {{2 < 5}} becomes {{-2 > -5}}) or number-line reflection argument",
              keywords: ["number line", "reflect", "-2 > -5", "2 < 5", "greater", "right"],
            },
            {
              point: "Correctly subtracts {{7}} to reach {{-4x > 16}}",
              keywords: ["-4x > 16", "-4x>16", "16"],
            },
            {
              point: "Divides by {{-4}} and flips the sign to give {{x < -4}}",
              keywords: ["x < -4", "x<-4", "-4 > x"],
            },
          ],
          commonError:
            "Remembering to divide {{16}} by {{-4}} to get {{-4}}, but forgetting to flip {{>}} to {{<}}.",
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PRACTICE PAPER 2
    // -------------------------------------------------------------------------
    {
      id: "equations-inequalities-p2",
      title: "Practice Paper 2 — Hard Fractions, Scaling Elimination & Graph Links",
      questions: [
        {
          id: "equations-inequalities-p2-q01",
          kind: "short",
          difficulty: "core",
          guideRef: "linear-equations-brackets-fractions",
          question: "Solve {{(x + 2)/3 + (x - 1)/4 = 3}}. Give your answer as an exact fraction.",
          answer: { type: "fraction", n: 31, d: 7, simplest: true },
          hints: [
            "Multiply every term on both sides by the LCM of {{3}} and {{4}} ({{12}}).",
            "Expand {{4(x + 2) + 3(x - 1) = 36}} and solve for {{x}}.",
          ],
          solution: [
            "Multiply by {{12}}: {{4(x + 2) + 3(x - 1) = 36}}.",
            "Expand: {{4x + 8 + 3x - 3 = 36 => 7x + 5 = 36 => 7x = 31 => x = 31/7}}.",
          ],
        },
        {
          id: "equations-inequalities-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "linear-equations-brackets-fractions",
          question: "Solve {{(2x - 1)/3 - (x - 4)/2 = 2}}.",
          answer: { type: "number", value: 2 },
          traps: [
            {
              spec: { type: "number", value: 26 },
              feedback: "Watch the sign on {{-3(x - 4)}}: {{(-3)(-4) = +12}}, NOT {{-12}}!",
            },
          ],
          hints: [
            "Multiply every term by {{6}} with brackets: {{2(2x - 1) - 3(x - 4) = 12}}.",
            "Expand carefully: {{4x - 2 - 3x + 12 = 12}}.",
          ],
          solution: [
            "Multiply by {{6}}: {{2(2x - 1) - 3(x - 4) = 12}}.",
            "Expand: {{4x - 2 - 3x + 12 = 12 => x + 10 = 12 => x = 2}}.",
            "Check: {{3/3 - (-2)/2 = 1 - (-1) = 2}} ✓.",
          ],
        },
        {
          id: "equations-inequalities-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "simple-quadratics",
          question: "Find BOTH solutions of {{2(x - 5)^2 = 32}}.",
          answer: {
            type: "list",
            values: [9, 1],
            ordered: false,
            display: "{{x = 9}} or {{x = 1}}",
          },
          hints: [
            "Divide both sides by {{2}} first: {{(x - 5)^2 = 16}}.",
            "Take {{+-sqrt(16)}}: {{x - 5 = 4}} or {{x - 5 = -4}}.",
          ],
          solution: [
            "Divide by {{2}}: {{(x - 5)^2 = 16}}.",
            "{{x - 5 = 4 => x = 9}}, or {{x - 5 = -4 => x = 1}}.",
          ],
        },
        {
          id: "equations-inequalities-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "simple-quadratics",
          question: "Find BOTH solutions of {{x^2 + 3x = 28}}.",
          answer: {
            type: "list",
            values: [4, -7],
            ordered: false,
            display: "{{x = 4}} or {{x = -7}}",
          },
          hints: [
            "Subtract {{28}} so the RHS is {{0}}: {{x^2 + 3x - 28 = 0}}.",
            "Factorise into {{(x + 7)(x - 4) = 0}}.",
          ],
          solution: [
            "{{x^2 + 3x - 28 = 0 => (x + 7)(x - 4) = 0}}.",
            "Solutions: {{x = -7}} or {{x = 4}}.",
          ],
        },
        {
          id: "equations-inequalities-p2-q05",
          kind: "written",
          difficulty: "core",
          guideRef: "simple-quadratics",
          question:
            "Noah attempts to solve {{(x - 1)(x + 4) = 6}} by writing {{x - 1 = 6}} or {{x + 4 = 6}}. Explain why the zero-product rule does NOT apply here, then find BOTH true solutions.",
          marks: 3,
          hints: [
            "Two numbers can multiply to {{6}} without either being {{6}} (for instance {{2 * 3 = 6}}) — the RHS must be {{0}}!",
            "Expand {{(x - 1)(x + 4)}}, subtract {{6}} to make {{= 0}}, then factorise.",
          ],
          modelAnswer:
            "The zero-product property ONLY works when the right-hand side is equal to 0 (not 6), because many factor pairs multiply to 6 without either factor being 6. Expanding gives {{x^2 + 3x - 4 = 6}}, so {{x^2 + 3x - 10 = 0}}. Factorising gives {{(x + 5)(x - 2) = 0}}, so the true solutions are {{x = -5}} and {{x = 2}}.",
          markScheme: [
            {
              point: "Explains the right-hand side must equal {{0}} for the zero-product property",
              keywords: ["must be 0", "equals 0", "equal to 0", "not zero", "rhs is not 0"],
            },
            {
              point: "Expands, sets to {{0}} ({{x^2 + 3x - 10 = 0}}) and factorises to {{(x + 5)(x - 2) = 0}}",
              keywords: ["x^2 + 3x - 10", "x^2+3x-10", "(x + 5)(x - 2)", "(x+5)(x-2)"],
            },
            {
              point: "Finds both solutions {{x = -5}} and {{x = 2}}",
              keywords: ["-5", "x = 2", "x=2"],
            },
          ],
          commonError:
            "Setting each factor equal to a non-zero right-hand side instead of expanding and rearranging to {{= 0}}.",
        },
        {
          id: "equations-inequalities-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "simultaneous-equations",
          question:
            "Solve simultaneously: {{3x + 4y = 26}} and {{2x + 3y = 19}}. Enter as `x, y`.",
          answer: {
            type: "list",
            values: [2, 5],
            ordered: true,
            display: "{{x = 2, y = 5}}",
          },
          hints: [
            "Match {{x}} at {{6x}}: multiply (1) by {{2}} → {{6x + 8y = 52}}, multiply (2) by {{3}} → {{6x + 9y = 57}}.",
            "Subtract (1) from (2) to get {{y = 5}}, then find {{x}}.",
          ],
          solution: [
            "Scale: {{6x + 8y = 52}} and {{6x + 9y = 57}}.",
            "Subtract: {{y = 5}}.",
            "Substitute into {{2x + 3(5) = 19}}: {{2x = 4 => x = 2}}.",
          ],
        },
        {
          id: "equations-inequalities-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "simultaneous-equations",
          question:
            "Solve simultaneously: {{y = 4x - 7}} and {{3x + 2y = 19}}. Enter as `x, y`.",
          answer: {
            type: "list",
            values: [3, 5],
            ordered: true,
            display: "{{x = 3, y = 5}}",
          },
          hints: [
            "Substitute {{y = 4x - 7}} directly into {{3x + 2y = 19}} using brackets.",
            "Solve {{3x + 2(4x - 7) = 19}} for {{x}}, then compute {{y = 4x - 7}}.",
          ],
          solution: [
            "Substitute: {{3x + 2(4x - 7) = 19 => 11x - 14 = 19 => 11x = 33 => x = 3}}.",
            "{{y = 4(3) - 7 = 5}}.",
          ],
        },
        {
          id: "equations-inequalities-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "simultaneous-equations",
          question:
            "Solve simultaneously: {{5x - 2y = 19}} and {{3x + 4y = 1}}. Enter as `x, y`.",
          answer: {
            type: "list",
            values: [3, -2],
            ordered: true,
            display: "{{x = 3, y = -2}}",
          },
          hints: [
            "Multiply the first equation by {{2}} to get {{10x - 4y = 38}}.",
            "Different signs on {{-4y}} and {{+4y}} → ADD to {{3x + 4y = 1}}.",
          ],
          solution: [
            "Multiply (1) by {{2}}: {{10x - 4y = 38}}.",
            "Add to (2): {{13x = 39 => x = 3}}.",
            "In (2): {{3(3) + 4y = 1 => 4y = -8 => y = -2}}.",
          ],
        },
        {
          id: "equations-inequalities-p2-q09",
          kind: "mcq",
          difficulty: "core",
          guideRef: "equations-and-graphs",
          question:
            "The lines {{y = 3x - 2}} and {{x + y = 10}} intersect at point {{A}}. What are the coordinates of {{A}}?",
          options: ["{{(2, 8)}}", "{{(3, 7)}}", "{{(4, 6)}}", "{{(7, 3)}}"],
          answerIndex: 1,
          hints: [
            "Substitute {{y = 3x - 2}} into {{x + y = 10}}.",
            "Solve {{4x - 2 = 10}}, then find {{y}}.",
          ],
          explanation:
            "{{x + (3x - 2) = 10 => 4x = 12 => x = 3}}, and {{y = 3(3) - 2 = 7}}, so {{A = (3, 7)}}. Reversing coordinates gives {{(7, 3)}}.",
        },
        {
          id: "equations-inequalities-p2-q10",
          kind: "written",
          difficulty: "core",
          guideRef: "simultaneous-equations",
          question:
            "Two cinema snacks are on sale: {{2}} popcorns and {{3}} drinks cost {{£17}}, while {{4}} popcorns and {{5}} drinks cost {{£31}}. Form a pair of simultaneous equations and solve them to find the price of each item.",
          marks: 3,
          hints: [
            "Let {{p}} be the cost of a popcorn and {{d}} be the cost of a drink: {{2p + 3d = 17}} and {{4p + 5d = 31}}.",
            "Double the first equation so both start with {{4p}}, then subtract!",
          ],
          modelAnswer:
            "Let {{p}} = price of one popcorn and {{d}} = price of one drink: {{2p + 3d = 17}} and {{4p + 5d = 31}}. Multiplying the first equation by {{2}} gives {{4p + 6d = 34}}. Subtracting {{4p + 5d = 31}} gives {{d = 3}}, so a drink costs {{£3}}. Substituting into {{2p + 3(3) = 17}} gives {{2p = 8}}, so {{p = 4}} — one popcorn costs {{£4}}.",
          markScheme: [
            {
              point: "Forms correct equations and scales first equation to {{4p + 6d = 34}} (or equivalent)",
              keywords: ["4p + 6d = 34", "4x + 6y = 34", "34"],
            },
            {
              point: "Finds drink costs {{£3}} ({{d = 3}})",
              keywords: ["d = 3", "y = 3", "£3"],
            },
            {
              point: "Finds popcorn costs {{£4}} ({{p = 4}})",
              keywords: ["p = 4", "x = 4", "£4"],
            },
          ],
          commonError:
            "Forgetting to double {{17}} to {{34}} when doubling {{2p + 3d = 17}}.",
        },
        {
          id: "equations-inequalities-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "equations-and-graphs",
          question:
            "The straight line {{y = 2x + 5}} crosses the {{x}}-axis at {{(a, 0)}} and meets the line {{y = 14 - x}} at {{(b, c)}}. Find the value of {{b + c}}.",
          answer: { type: "number", value: 14 },
          hints: [
            "Find the intersection {{(b, c)}} by setting {{2x + 5 = 14 - x}}.",
            "Or look directly at the second line {{y = 14 - x}}: what does {{x + y}} ALWAYS equal on that line?!",
          ],
          solution: [
            "Method 1: {{2x + 5 = 14 - x => 3x = 9 => x = 3}}, {{y = 11}}, so {{b + c = 3 + 11 = 14}}.",
            "Method 2 (AoPS shortcut): Because {{(b, c)}} lies on {{y = 14 - x}}, {{b + c = 14}} immediately!",
          ],
        },
        {
          id: "equations-inequalities-p2-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "inequalities",
          question: "Solve the inequality {{19 - 5x < 4}}.",
          answer: {
            type: "text",
            accept: ["x > 3", "3 < x"],
            display: "{{x > 3}}",
          },
          traps: [
            {
              spec: { type: "text", accept: ["x < 3", "3 > x"] },
              feedback: "Dividing {{-5x < -15}} by {{-5}} MUST flip {{<}} to {{>}}!",
            },
          ],
          hints: [
            "Subtract {{19}} from both sides to get {{-5x < -15}}.",
            "Divide by {{-5}} AND flip the inequality symbol.",
          ],
          solution: [
            "Subtract {{19}}: {{-5x < -15}}.",
            "Divide by {{-5}} and flip: {{x > 3}}.",
          ],
        },
        {
          id: "equations-inequalities-p2-q13",
          kind: "short",
          difficulty: "core",
          guideRef: "inequalities",
          question:
            "Find the **smallest integer** {{x}} that satisfies {{4(x - 1) > 2x + 9}}.",
          answer: { type: "number", value: 7 },
          traps: [
            {
              spec: { type: "number", value: 6 },
              feedback: "Check {{x = 6}}: LHS {{4(5) = 20}}, RHS {{21}} — {{20}} is NOT greater than {{21}}!",
            },
          ],
          hints: [
            "Expand and solve for {{x}}: {{4x - 4 > 2x + 9 => 2x > 13 => x > 6.5}}.",
            "What is the smallest whole number strictly greater than {{6.5}}?",
          ],
          solution: [
            "{{4x - 4 > 2x + 9 => 2x > 13 => x > 6.5}}.",
            "Smallest integer greater than {{6.5}} is {{7}}.",
          ],
        },
        {
          id: "equations-inequalities-p2-q14",
          kind: "short",
          difficulty: "challenge",
          guideRef: "inequalities",
          question: "Solve the double inequality {{-7 <= 5 - 3x < 14}}.",
          answer: {
            type: "text",
            accept: ["-3 < x <= 4", "4 >= x > -3"],
            display: "{{-3 < x <= 4}}",
          },
          hints: [
            "Subtract {{5}} from ALL THREE parts: {{-12 <= -3x < 9}}.",
            "Divide by {{-3}} and flip BOTH inequality signs: {{4 >= x > -3}}.",
            "Write in ascending order: {{-3 < x <= 4}}.",
          ],
          solution: [
            "Subtract {{5}}: {{-12 <= -3x < 9}}.",
            "Divide by {{-3}} and flip both signs: {{4 >= x > -3}}, i.e. {{-3 < x <= 4}}.",
          ],
        },
        {
          id: "equations-inequalities-p2-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "equations-and-graphs",
          question:
            "Without plotting the lines, explain geometrically why the simultaneous equations {{2x - y = 5}} and {{4x - 2y = 7}} have NO solution.",
          marks: 3,
          hints: [
            "Rearrange BOTH equations into {{y = mx + c}} form.",
            "Compare their gradients {{m}} and their {{y}}-intercepts {{c}}.",
            "State what two lines with the same gradient and different intercepts look like.",
          ],
          modelAnswer:
            "Rearranging both equations into {{y = mx + c}} form gives {{y = 2x - 5}} and {{y = 2x - 3.5}} (or {{7/2}}). Both lines have the same gradient ({{2}}) but different {{y}}-intercepts ({{-5}} and {{-3.5}}), so the two lines are parallel and never intersect — meaning there is no common point {{(x, y)}} that solves both equations.",
          markScheme: [
            {
              point: "Rearranges both equations cleanly to {{y = 2x - 5}} and {{y = 2x - 3.5}} (or {{7/2}})",
              keywords: ["y = 2x - 5", "y=2x-5", "3.5", "7/2"],
            },
            {
              point: "States both lines share the same gradient but have different {{y}}-intercepts",
              keywords: ["gradient", "intercept"],
            },
            {
              point: "Concludes the lines are parallel and never intersect",
              keywords: ["parallel", "never intersect", "never cross", "never meet"],
            },
          ],
          commonError:
            "Saying only 'they cannot be solved' without identifying equal gradients, distinct intercepts, and parallel lines.",
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 AoPS-STYLE CHALLENGE QUESTIONS)
  // ===========================================================================
  challenge: [
    {
      id: "equations-inequalities-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "linear-equations-brackets-fractions",
      strategy: "Clear Denominators with LCM",
      question: "Solve {{(3x + 2)/4 - (2x - 5)/6 = (x + 7)/3}}.",
      answer: { type: "number", value: 12 },
      traps: [
        {
          spec: { type: "number", value: 32 },
          feedback: "Watch {{-2(2x - 5)}} when multiplying by {{12}}: {{(-2)(-5) = +10}}, NOT {{-10}}!",
        },
      ],
      hints: [
        "The LCM of {{4}}, {{6}}, and {{3}} is {{12}} — multiply EVERY fraction by {{12}}.",
        "Keep brackets: {{3(3x + 2) - 2(2x - 5) = 4(x + 7)}}.",
        "Expand carefully (remember {{-2(-5) = +10}}) and solve {{5x + 16 = 4x + 28}}.",
      ],
      solution: [
        "Multiply every term by {{12}}: {{3(3x + 2) - 2(2x - 5) = 4(x + 7)}}.",
        "Expand: {{9x + 6 - 4x + 10 = 4x + 28 => 5x + 16 = 4x + 28}}.",
        "Subtract {{4x}} and {{16}}: {{x = 12}}. Check: {{38/4 - 19/6 = 19/2 - 19/6 = 19/3}} and {{(12 + 7)/3 = 19/3}} ✓.",
      ],
    },
    {
      id: "equations-inequalities-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "simple-quadratics",
      strategy: "Rearrange to Zero and Factorise",
      question:
        "A rectangle has length {{(x + 5)}} cm and width {{(x - 2)}} cm. Its area is {{44}} {{cm^2}}. Find the value of {{x}} (remember side lengths must be positive!).",
      answer: { type: "number", value: 6 },
      traps: [
        {
          spec: { type: "number", value: -9 },
          feedback: "Good quadratic solving — {{x = -9}} solves the algebra, but side lengths must be positive!",
        },
      ],
      hints: [
        "Form the equation {{(x + 5)(x - 2) = 44}}.",
        "Expand and subtract {{44}} to make RHS = {{0}}: {{x^2 + 3x - 54 = 0}}.",
        "Factorise {{(x + 9)(x - 6) = 0}} and reject the negative root since lengths must be positive.",
      ],
      solution: [
        "{{(x + 5)(x - 2) = 44 => x^2 + 3x - 10 = 44 => x^2 + 3x - 54 = 0}}.",
        "Factorise: {{(x + 9)(x - 6) = 0 => x = -9}} or {{x = 6}}.",
        "Since width {{x - 2 > 0}}, {{x = 6}} (sides {{11}} cm × {{4}} cm = {{44}} {{cm^2}}).",
      ],
    },
    {
      id: "equations-inequalities-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "simultaneous-equations",
      strategy: "Add All Equations Together (Symmetry!)",
      question:
        "Three numbers {{a, b, c}} satisfy {{a + b = 15}}, {{b + c = 19}}, and {{a + c = 16}}. Find the exact value of {{a + b + c}}.",
      answer: { type: "number", value: 25 },
      hints: [
        "Do you even need to find {{a}}, {{b}}, and {{c}} separately?",
        "Add ALL THREE equations together! How many times does each letter appear on the left?",
        "{{2a + 2b + 2c = 15 + 19 + 16 = 50}} — now divide by {{2}}!",
      ],
      solution: [
        "Add all three equations: {{(a + b) + (b + c) + (a + c) = 15 + 19 + 16}}.",
        "{{2(a + b + c) = 50 => a + b + c = 25}} (in fact {{a = 6, b = 9, c = 10}}).",
      ],
    },
    {
      id: "equations-inequalities-ch-q04",
      kind: "written",
      difficulty: "challenge",
      guideRef: "equations-and-graphs",
      strategy: "Equate y = y and Factorise",
      question:
        "Show how to find the exact coordinates of ALL intersection points between the straight line {{y = x + 3}} and the parabola {{y = x^2 - 3x + 3}}.",
      marks: 3,
      hints: [
        "At any intersection point, both {{y}}-values are equal, so set {{x^2 - 3x + 3 = x + 3}}.",
        "Collect everything on one side {{= 0}} and factorise out {{x}} — do NOT divide by {{x}}!",
        "Substitute EACH {{x}}-value into {{y = x + 3}} to get both coordinate pairs.",
      ],
      modelAnswer:
        "Equating the two {{y}}-expressions gives {{x^2 - 3x + 3 = x + 3}}, which simplifies to {{x^2 - 4x = 0}}. Factorising gives {{x(x - 4) = 0}}, so {{x = 0}} or {{x = 4}}. Substituting into {{y = x + 3}} yields {{y = 3}} and {{y = 7}}, so the two intersection points are {{(0, 3)}} and {{(4, 7)}}.",
      markScheme: [
        {
          point: "Equates and simplifies to {{x^2 - 4x = 0}} and factorises {{x(x - 4) = 0}}",
          keywords: ["x^2 - 4x = 0", "x^2-4x=0", "x(x - 4)", "x(x-4)"],
        },
        {
          point: "Finds both {{x = 0}} and {{x = 4}}",
          keywords: ["x = 0", "x = 4", "x=0", "x=4"],
        },
        {
          point: "Gives both intersection coordinate pairs {{(0, 3)}} and {{(4, 7)}}",
          keywords: ["(0, 3)", "(4, 7)", "(0,3)", "(4,7)"],
        },
      ],
      commonError:
        "Dividing {{x^2 = 4x}} by {{x}} and missing the intersection at {{(0, 3)}}.",
    },
    {
      id: "equations-inequalities-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "simultaneous-equations",
      strategy: "Translate Ages Carefully Over Time",
      question:
        "Today, a mother is {{3}} times as old as her daughter. In {{12}} years' time, the mother will be twice as old as her daughter. How old is the **daughter** today?",
      answer: { type: "number", value: 12 },
      hints: [
        "Let {{m}} and {{d}} be their ages today: {{m = 3d}}.",
        "In {{12}} years' time BOTH ages increase by {{12}}: {{m + 12 = 2(d + 12)}}.",
        "Substitute {{m = 3d}} into the second equation and solve for {{d}}.",
      ],
      solution: [
        "Today: {{m = 3d}}. In {{12}} years: {{m + 12 = 2(d + 12)}}.",
        "Substitute: {{3d + 12 = 2d + 24 => d = 12}} (daughter is {{12}}, mother is {{36}}; in {{12}} years they are {{24}} and {{48}} ✓).",
      ],
    },
    {
      id: "equations-inequalities-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "inequalities",
      strategy: "Intersect Two Separate Inequality Ranges",
      question:
        "List ALL integer values of {{x}} that satisfy BOTH {{3x - 2 > 7}} AND {{20 - 2x >= 6}}. Separate with commas.",
      answer: {
        type: "list",
        values: [4, 5, 6, 7],
        ordered: false,
        display: "4, 5, 6, 7",
      },
      hints: [
        "Solve the first inequality: {{3x > 9 => x > 3}}.",
        "Solve the second inequality carefully (watch the negative!): {{-2x >= -14 => x <= 7}}.",
        "Combine into {{3 < x <= 7}} and list the integers.",
      ],
      solution: [
        "From {{3x - 2 > 7}}: {{3x > 9 => x > 3}}.",
        "From {{20 - 2x >= 6}}: {{-2x >= -14 => x <= 7}}.",
        "Combined: {{3 < x <= 7}}, giving integers {{4, 5, 6, 7}}.",
      ],
    },
    {
      id: "equations-inequalities-ch-q07",
      kind: "short",
      difficulty: "challenge",
      guideRef: "equations-and-graphs",
      strategy: "Find Vertices of a Bounded Triangle",
      question:
        "The three lines {{x = 0}}, {{y = x + 2}}, and {{y = 10 - x}} form a triangle on a coordinate grid. Find the exact **area** of this triangle in square units.",
      answer: { type: "number", value: 16 },
      hints: [
        "Find the two {{y}}-intercepts (where each sloped line crosses {{x = 0}}): {{(0, 2)}} and {{(0, 10)}}.",
        "That vertical segment along the {{y}}-axis is the base of the triangle: length {{10 - 2 = 8}} units.",
        "Find the intersection point of {{y = x + 2}} and {{y = 10 - x}} — its {{x}}-coordinate is the perpendicular height!",
      ],
      solution: [
        "Base along {{x = 0}} runs from {{(0, 2)}} to {{(0, 10)}}, so base {{= 8}} units.",
        "Intersection of {{y = x + 2}} and {{y = 10 - x}}: {{x + 2 = 10 - x => 2x = 8 => x = 4}} (at {{(4, 6)}}), so height {{= 4}} units.",
        "Area {{= (1/2) * 8 * 4 = 16}} square units.",
      ],
    },
    {
      id: "equations-inequalities-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "inequalities",
      strategy: "Translate Real-World Constraints into a Double Inequality",
      question:
        "A lift carries a fixed operator weighing {{75}} kg plus {{n}} boxes each weighing {{45}} kg. The total load must NOT exceed {{600}} kg, and the operator must move at least {{300}} kg of boxes. Form a double inequality for {{n}}, solve it, and list ALL possible whole numbers of boxes.",
      marks: 3,
      hints: [
        "Write two separate inequalities first: {{45n >= 300}} and {{75 + 45n <= 600}}.",
        "Subtract {{75}} in the second inequality so BOTH inequalities bound {{45n}}: {{300 <= 45n <= 525}}.",
        "Divide all three parts by {{45}} and select ONLY whole numbers inside that range.",
      ],
      modelAnswer:
        "The two constraints are {{45n >= 300}} and {{75 + 45n <= 600}} (so {{45n <= 525}}), giving the double inequality {{300 <= 45n <= 525}}. Dividing by {{45}} yields {{20/3 <= n <= 35/3}}, or {{6.67 <= n <= 11.67}}. Since {{n}} must be a whole number, the possible numbers of boxes are {{7, 8, 9, 10, 11}}.",
      markScheme: [
        {
          point: "Forms constraints {{45n >= 300}} and {{75 + 45n <= 600}} (giving {{45n <= 525}})",
          keywords: ["525", "45n <= 525", "75 + 45n <= 600"],
        },
        {
          point: "Solves to {{20/3 <= n <= 35/3}} (or {{6.67 <= n <= 11.67}})",
          keywords: ["20/3", "35/3", "6.6", "11.6"],
        },
        {
          point: "Lists all five valid whole numbers {{7, 8, 9, 10, 11}}",
          keywords: ["7, 8, 9, 10, 11", "7,8,9,10,11"],
        },
      ],
      commonError:
        "Rounding {{11.67}} UP to {{12}} boxes (which exceeds {{600}} kg: {{75 + 12 * 45 = 615}} kg) or rounding {{6.67}} DOWN to {{6}} boxes.",
    },
  ],
};
