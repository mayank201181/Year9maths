import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK-CHECK QUIZ (10 MIXED QUESTIONS)
  // ===========================================================================
  quiz: [
    {
      id: "algebraic-expressions-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "expanding-double-brackets",
      question: "Expand and simplify {{(x + 3)(x + 5)}}.",
      answer: {
        type: "expression",
        expr: "x^2 + 8x + 15",
        form: "expanded",
        display: "{{x^2 + 8x + 15}}",
      },
      traps: [
        {
          spec: { type: "expression", expr: "x^2 + 15x + 8" },
          feedback: "You swapped the sum and product — middle coefficient is {{3 + 5 = 8}}, constant is {{3 * 5 = 15}}.",
        },
        {
          spec: { type: "expression", expr: "x^2 + 8x + 8" },
          feedback: "Multiply the last two numbers ({{3 * 5 = 15}}) rather than adding them.",
        },
      ],
      hints: [
        "Multiply each term in {{(x + 3)}} by each term in {{(x + 5)}}.",
        "Collect the middle {{x}}-terms: {{5x + 3x = 8x}}.",
      ],
      solution: [
        "{{(x + 3)(x + 5) = x^2 + 5x + 3x + 15}}.",
        "Collect like terms: {{x^2 + 8x + 15}}.",
      ],
    },
    {
      id: "algebraic-expressions-quiz-q02",
      kind: "short",
      difficulty: "core",
      guideRef: "expanding-double-brackets",
      question: "Expand and simplify {{(x - 6)^2}}.",
      answer: {
        type: "expression",
        expr: "x^2 - 12x + 36",
        form: "expanded",
        display: "{{x^2 - 12x + 36}}",
      },
      traps: [
        {
          spec: { type: "expression", expr: "x^2 - 36" },
          feedback: "Rewrite {{(x - 6)^2}} as {{(x - 6)(x - 6)}} — you missed the {{-12x}} middle term and {{(-6)(-6) = +36}}!",
        },
        {
          spec: { type: "expression", expr: "x^2 + 36" },
          feedback: "Don't forget the Outer and Inner terms: {{-6x - 6x = -12x}}.",
        },
      ],
      hints: [
        "Rewrite {{(x - 6)^2}} as {{(x - 6)(x - 6)}}.",
        "Multiply all four pairs and watch the sign of {{(-6) * (-6)}}.",
      ],
      solution: [
        "{{(x - 6)(x - 6) = x^2 - 6x - 6x + 36}}.",
        "Simplify: {{x^2 - 12x + 36}}.",
      ],
    },
    {
      id: "algebraic-expressions-quiz-q03",
      kind: "mcq",
      difficulty: "core",
      guideRef: "expanding-double-brackets",
      question: "Which expression is equivalent to {{(3x + 2)(2x - 5)}}?",
      options: [
        "{{6x^2 - 11x - 10}}",
        "{{6x^2 + 11x - 10}}",
        "{{6x^2 - 19x - 10}}",
        "{{6x^2 - 11x + 10}}",
      ],
      answerIndex: 0,
      hints: [
        "Compute Outer {{3x(-5) = -15x}} and Inner {{2(2x) = +4x}}.",
        "Add {{-15x + 4x = -11x}} and multiply {{(+2)(-5) = -10}}.",
      ],
      explanation:
        "{{(3x + 2)(2x - 5) = 6x^2 - 15x + 4x - 10 = 6x^2 - 11x - 10}}. Adding {{-15}} and {{-4}} instead of {{+4}} produces the distractor {{-19x}}.",
    },
    {
      id: "algebraic-expressions-quiz-q04",
      kind: "short",
      difficulty: "warmup",
      guideRef: "geometric-algebra",
      question:
        "A rectangle has length {{(3x + 2)}} cm and width {{(x + 5)}} cm. Write a simplified expression for its **perimeter** in cm.",
      answer: {
        type: "expression",
        expr: "8x + 14",
        form: "simplified",
        display: "{{8x + 14}}",
      },
      traps: [
        {
          spec: { type: "expression", expr: "4x + 7" },
          feedback: "That is length + width (half the perimeter). Double it to go all the way around!",
        },
        {
          spec: { type: "expression", expr: "3x^2 + 17x + 10" },
          feedback: "That is the area — the question asks for the perimeter.",
        },
      ],
      hints: [
        "Perimeter of a rectangle is {{2(" + "length + width" + ")}}.",
        "Add {{(3x + 2) + (x + 5) = 4x + 7}}, then multiply by {{2}}.",
      ],
      solution: [
        "Length + width {{= (3x + 2) + (x + 5) = 4x + 7}}.",
        "Perimeter {{= 2(4x + 7) = 8x + 14}} cm.",
      ],
    },
    {
      id: "algebraic-expressions-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "geometric-algebra",
      question:
        "A rectangle measures {{(x + 7)}} cm by {{(x - 2)}} cm. Write an expanded, simplified expression for its **area** in {{cm^2}}.",
      answer: {
        type: "expression",
        expr: "x^2 + 5x - 14",
        form: "expanded",
        display: "{{x^2 + 5x - 14}}",
      },
      traps: [
        {
          spec: { type: "expression", expr: "x^2 - 5x - 14" },
          feedback: "Check the sign of the middle term: {{+7x - 2x = +5x}}.",
        },
      ],
      hints: [
        "Area = length × width {{= (x + 7)(x - 2)}}.",
        "Expand the double bracket and combine {{-2x + 7x}}.",
      ],
      solution: [
        "Area {{= (x + 7)(x - 2) = x^2 - 2x + 7x - 14 = x^2 + 5x - 14}} {{cm^2}}.",
      ],
    },
    {
      id: "algebraic-expressions-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "evaluating-expressions",
      question: "Find the value of {{4x^2 - 3x}} when {{x = -2}}.",
      answer: { type: "number", value: 22 },
      traps: [
        {
          spec: { type: "number", value: 10 },
          feedback: "Check {{-3(-2)}}: negative times negative is {{+6}}, not {{-6}}.",
        },
        {
          spec: { type: "number", value: -10 },
          feedback: "Check {{(-2)^2 = +4}}, so {{4(-2)^2 = +16}}, not {{-16}}.",
        },
      ],
      hints: [
        "Substitute {{(-2)}} in brackets: {{4(-2)^2 - 3(-2)}}.",
        "Evaluate {{(-2)^2 = 4}} first, then multiply.",
      ],
      solution: [
        "{{4(-2)^2 - 3(-2) = 4(4) + 6 = 16 + 6 = 22}}.",
      ],
    },
    {
      id: "algebraic-expressions-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "evaluating-expressions",
      question: "What is the value of {{-x^2 + (2x)^2}} when {{x = -3}}?",
      options: ["{{45}}", "{{9}}", "{{27}}", "{{-27}}"],
      answerIndex: 2,
      hints: [
        "Compute {{-x^2 = -(-3)^2 = -9}} carefully.",
        "Compute {{(2x)^2 = (2 * (-3))^2 = (-6)^2 = 36}}, then add {{-9 + 36}}.",
      ],
      explanation:
        "{{-(-3)^2 = -9}} and {{(2 * (-3))^2 = (-6)^2 = 36}}, giving {{-9 + 36 = 27}}. Treating {{-x^2}} as {{+9}} gives the distractor {{45}}.",
    },
    {
      id: "algebraic-expressions-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "factorising-rearranging",
      question: "Factorise completely: {{10x^2 - 15x}}.",
      answer: {
        type: "expression",
        expr: "5x(2x - 3)",
        form: "factorised",
        display: "{{5x(2x - 3)}}",
      },
      hints: [
        "Find the HCF of both the coefficients ({{10}} and {{15}}) and the powers of {{x}}.",
        "Take out {{5x}} and divide each term by {{5x}}.",
      ],
      solution: [
        "HCF of {{10x^2}} and {{15x}} is {{5x}}.",
        "{{10x^2 - 15x = 5x(2x - 3)}}.",
      ],
    },
    {
      id: "algebraic-expressions-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "factorising-rearranging",
      question: "Factorise completely: {{x^2 - 2x - 15}}.",
      answer: {
        type: "expression",
        expr: "(x - 5)(x + 3)",
        form: "factorised",
        display: "{{(x - 5)(x + 3)}}",
      },
      hints: [
        "Find two integers that multiply to {{-15}} and add to {{-2}}.",
        "Try {{-5}} and {{+3}}.",
      ],
      solution: [
        "{{(-5) * 3 = -15}} and {{-5 + 3 = -2}}.",
        "{{x^2 - 2x - 15 = (x - 5)(x + 3)}}.",
      ],
    },
    {
      id: "algebraic-expressions-quiz-q10",
      kind: "short",
      difficulty: "core",
      guideRef: "factorising-rearranging",
      question: "Make {{x}} the subject of {{y = 4x + 9}}.",
      answer: {
        type: "expression",
        expr: "(y - 9)/4",
        display: "{{x = (y - 9)/4}}",
      },
      hints: [
        "Subtract {{9}} from both sides first.",
        "Then divide the entire left-hand side by {{4}}.",
      ],
      solution: [
        "Subtract {{9}}: {{y - 9 = 4x}}.",
        "Divide by {{4}}: {{x = (y - 9)/4}}.",
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
      id: "algebraic-expressions-p1",
      title: "Practice Paper 1 — Double Brackets, Shapes & Core Rearranging",
      questions: [
        {
          id: "algebraic-expressions-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "expanding-double-brackets",
          question: "Expand and simplify {{(x + 9)(x - 4)}}.",
          answer: {
            type: "expression",
            expr: "x^2 + 5x - 36",
            form: "expanded",
            display: "{{x^2 + 5x - 36}}",
          },
          traps: [
            {
              spec: { type: "expression", expr: "x^2 - 5x - 36" },
              feedback: "Check {{+9x - 4x}}: that equals {{+5x}}, not {{-5x}}.",
            },
          ],
          hints: [
            "Multiply every term in {{(x + 9)}} by every term in {{(x - 4)}}.",
            "Combine {{-4x + 9x}} for the middle term.",
          ],
          solution: [
            "{{(x + 9)(x - 4) = x^2 - 4x + 9x - 36 = x^2 + 5x - 36}}.",
          ],
        },
        {
          id: "algebraic-expressions-p1-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "expanding-double-brackets",
          question: "Expand and simplify {{(3x - 2)(4x + 5)}}.",
          answer: {
            type: "expression",
            expr: "12x^2 + 7x - 10",
            form: "expanded",
            display: "{{12x^2 + 7x - 10}}",
          },
          traps: [
            {
              spec: { type: "expression", expr: "12x^2 + 23x - 10" },
              feedback: "Watch the sign on the Inner term: {{(-2)(4x) = -8x}}, so {{15x - 8x = 7x}}.",
            },
          ],
          hints: [
            "Use a 2 × 2 area grid with {{3x, -2}} and {{4x, +5}}.",
            "Collect {{+15x - 8x = +7x}}.",
          ],
          solution: [
            "{{(3x - 2)(4x + 5) = 12x^2 + 15x - 8x - 10 = 12x^2 + 7x - 10}}.",
          ],
        },
        {
          id: "algebraic-expressions-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "expanding-double-brackets",
          question: "Expand and simplify {{(2x + 7)^2}}.",
          answer: {
            type: "expression",
            expr: "4x^2 + 28x + 49",
            form: "expanded",
            display: "{{4x^2 + 28x + 49}}",
          },
          traps: [
            {
              spec: { type: "expression", expr: "4x^2 + 49" },
              feedback: "Rewrite as {{(2x + 7)(2x + 7)}} so you include {{14x + 14x = 28x}}!",
            },
            {
              spec: { type: "expression", expr: "4x^2 + 14x + 49" },
              feedback: "You only counted ONE cross-term ({{14x}}) — there are two of them!",
            },
          ],
          hints: [
            "Write {{(2x + 7)(2x + 7)}} first.",
            "Both Outer and Inner equal {{14x}}, and {{(2x)^2 = 4x^2}}.",
          ],
          solution: [
            "{{(2x + 7)(2x + 7) = 4x^2 + 14x + 14x + 49 = 4x^2 + 28x + 49}}.",
          ],
        },
        {
          id: "algebraic-expressions-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "expanding-double-brackets",
          question: "Expand and simplify {{(4x + 3)(4x - 3)}}.",
          answer: {
            type: "expression",
            expr: "16x^2 - 9",
            form: "expanded",
            display: "{{16x^2 - 9}}",
          },
          traps: [
            {
              spec: { type: "expression", expr: "4x^2 - 9" },
              feedback: "Square the coefficient {{4}} as well as {{x}}: {{(4x)^2 = 16x^2}}.",
            },
          ],
          hints: [
            "Spot the difference of two squares pattern {{(a + b)(a - b) = a^2 - b^2}}.",
            "Square {{4x}} to get {{16x^2}}, then subtract {{3^2 = 9}}.",
          ],
          solution: [
            "{{(4x + 3)(4x - 3) = 16x^2 - 12x + 12x - 9 = 16x^2 - 9}}.",
          ],
        },
        {
          id: "algebraic-expressions-p1-q05",
          kind: "written",
          difficulty: "core",
          guideRef: "expanding-double-brackets",
          question:
            "Show that {{(x + 5)^2 - (x - 3)^2}} simplifies to {{16x + 16}}, and explain why this expression is always a multiple of {{16}} for every integer {{x}}.",
          marks: 3,
          hints: [
            "Expand {{(x + 5)^2}} and {{(x - 3)^2}} separately first.",
            "Keep brackets around the second expansion when subtracting so every sign flips.",
            "Factorise the final linear expression to show a factor of {{16}}.",
          ],
          modelAnswer:
            "First expand {{(x + 5)^2 = x^2 + 10x + 25}} and {{(x - 3)^2 = x^2 - 6x + 9}}. Subtracting with brackets gives {{(x^2 + 10x + 25) - (x^2 - 6x + 9) = x^2 + 10x + 25 - x^2 + 6x - 9 = 16x + 16}}. Factorising gives {{16(x + 1)}}; since {{x + 1}} is an integer whenever {{x}} is an integer, the expression is always a multiple of {{16}}.",
          markScheme: [
            {
              point: "Correctly expands {{(x + 5)^2 = x^2 + 10x + 25}}",
              keywords: ["10x", "25"],
            },
            {
              point: "Correctly expands {{(x - 3)^2 = x^2 - 6x + 9}} and subtracts all terms",
              keywords: ["6x", "9"],
            },
            {
              point: "Factorises to {{16(x + 1)}} and states {{x + 1}} is an integer",
              keywords: ["16(x + 1)", "16(x+1)", "factoris"],
            },
          ],
          commonError:
            "Forgetting brackets around {{x^2 - 6x + 9}} when subtracting, which gives {{4x + 34}} instead of {{16x + 16}}.",
        },
        {
          id: "algebraic-expressions-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "geometric-algebra",
          question:
            "A rectangular poster has width {{(2x + 3)}} cm and height {{(x + 5)}} cm. Find an expanded, simplified expression for its area in {{cm^2}}.",
          answer: {
            type: "expression",
            expr: "2x^2 + 13x + 15",
            form: "expanded",
            display: "{{2x^2 + 13x + 15}}",
          },
          hints: [
            "Area = width × height {{= (2x + 3)(x + 5)}}.",
            "Expand all four terms and combine {{10x + 3x}}.",
          ],
          solution: [
            "Area {{= (2x + 3)(x + 5) = 2x^2 + 10x + 3x + 15 = 2x^2 + 13x + 15}} {{cm^2}}.",
          ],
        },
        {
          id: "algebraic-expressions-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "geometric-algebra",
          question:
            "A triangle has base {{(6x - 4)}} cm and perpendicular height {{(x + 2)}} cm. Write an expanded, simplified expression for its area in {{cm^2}}.",
          answer: {
            type: "expression",
            expr: "3x^2 + 4x - 4",
            form: "expanded",
            display: "{{3x^2 + 4x - 4}}",
          },
          traps: [
            {
              spec: { type: "expression", expr: "6x^2 + 8x - 8" },
              feedback: "Remember to multiply by {{1/2}} for the area of a triangle!",
            },
          ],
          hints: [
            "Use {{A = (1/2) * base * height}}.",
            "Halve {{(6x - 4)}} first to get {{(3x - 2)}}, then expand {{(3x - 2)(x + 2)}}.",
          ],
          solution: [
            "Half the base is {{(1/2)(6x - 4) = 3x - 2}}.",
            "Area {{= (3x - 2)(x + 2) = 3x^2 + 6x - 2x - 4 = 3x^2 + 4x - 4}} {{cm^2}}.",
          ],
        },
        {
          id: "algebraic-expressions-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "geometric-algebra",
          question:
            "A square tile has side length {{(x + 3)}} cm. A uniform strip of width {{1}} cm is glued around all four outer edges of the tile. Find the simplified expression for the **area of the strip alone** in {{cm^2}}.",
          answer: {
            type: "expression",
            expr: "4x + 16",
            form: "expanded",
            display: "{{4x + 16}}",
          },
          traps: [
            {
              spec: { type: "expression", expr: "2x + 7" },
              feedback: "A {{1}} cm border on ALL FOUR sides increases the side length by {{2}} cm (to {{x + 5}}), not {{1}} cm!",
            },
          ],
          hints: [
            "Add {{1}} cm to BOTH ends of each side: outer side is {{(x + 3) + 2 = x + 5}}.",
            "Subtract inner square area from outer square area: {{(x + 5)^2 - (x + 3)^2}}.",
          ],
          solution: [
            "Outer square side {{= (x + 3) + 2 = x + 5}}, so outer area {{= (x + 5)^2 = x^2 + 10x + 25}}.",
            "Inner tile area {{= (x + 3)^2 = x^2 + 6x + 9}}.",
            "Strip area {{= (x^2 + 10x + 25) - (x^2 + 6x + 9) = 4x + 16}} {{cm^2}}.",
          ],
        },
        {
          id: "algebraic-expressions-p1-q09",
          kind: "mcq",
          difficulty: "core",
          guideRef: "evaluating-expressions",
          question: "Evaluate {{5a^2 - 2ab + b^2}} when {{a = -2}} and {{b = 3}}.",
          options: ["{{41}}", "{{17}}", "{{-3}}", "{{29}}"],
          answerIndex: 0,
          hints: [
            "Compute each term with brackets: {{5(-2)^2}}, {{-2(-2)(3)}}, and {{3^2}}.",
            "Notice {{-2 * (-2) * 3 = +12}}, so add {{20 + 12 + 9}}.",
          ],
          explanation:
            "{{5(-2)^2 - 2(-2)(3) + 3^2 = 5(4) + 12 + 9 = 20 + 12 + 9 = 41}}. Treating {{-2(-2)(3)}} as {{-12}} gives the distractor {{17}}.",
        },
        {
          id: "algebraic-expressions-p1-q10",
          kind: "written",
          difficulty: "core",
          guideRef: "geometric-algebra",
          question:
            "A rectangular garden has length {{(2x + 3)}} m and width {{(x + 4)}} m. A rectangular pond measuring {{(x + 1)}} m by {{x}} m is built inside it. Show clearly how to find the simplified expression for the remaining grass area.",
          marks: 3,
          hints: [
            "Find the total garden area by expanding {{(2x + 3)(x + 4)}}.",
            "Find the pond area by expanding {{x(x + 1)}}.",
            "Subtract the pond area from the garden area using protective brackets.",
          ],
          modelAnswer:
            "Outer garden area {{= (2x + 3)(x + 4) = 2x^2 + 8x + 3x + 12 = 2x^2 + 11x + 12}}. Pond area {{= x(x + 1) = x^2 + x}}. Subtracting gives {{(2x^2 + 11x + 12) - (x^2 + x) = 2x^2 + 11x + 12 - x^2 - x = x^2 + 10x + 12}} {{m^2}}.",
          markScheme: [
            {
              point: "Correctly expands outer garden area to {{2x^2 + 11x + 12}}",
              keywords: ["2x^2 + 11x + 12", "2x^2+11x+12", "11x"],
            },
            {
              point: "Correctly expands inner pond area to {{x^2 + x}}",
              keywords: ["x^2 + x", "x^2+x"],
            },
            {
              point: "Subtracts both terms accurately to reach {{x^2 + 10x + 12}}",
              keywords: ["x^2 + 10x + 12", "x^2+10x+12", "10x"],
            },
          ],
          commonError:
            "Subtracting {{x^2}} but adding {{x}} by mistake, yielding {{x^2 + 12x + 12}}.",
        },
        {
          id: "algebraic-expressions-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "evaluating-expressions",
          question: "Find the value of {{2x^3 - 3x^2 + 5}} when {{x = -2}}.",
          answer: { type: "number", value: -23 },
          traps: [
            {
              spec: { type: "number", value: 1 },
              feedback: "Check {{-3(-2)^2}}: {{(-2)^2 = +4}}, so {{-3(4) = -12}}, NOT {{+12}}!",
            },
            {
              spec: { type: "number", value: 9 },
              feedback: "Check {{(-2)^3}}: an odd power of a negative is negative ({{-8}}), so {{2(-8) = -16}}.",
            },
          ],
          hints: [
            "Substitute {{(-2)}} in brackets: {{2(-2)^3 - 3(-2)^2 + 5}}.",
            "{{(-2)^3 = -8}} and {{(-2)^2 = +4}} — evaluate the multiplications next.",
          ],
          solution: [
            "{{2(-2)^3 - 3(-2)^2 + 5 = 2(-8) - 3(4) + 5}}.",
            "{{= -16 - 12 + 5 = -23}}.",
          ],
        },
        {
          id: "algebraic-expressions-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "factorising-rearranging",
          question: "Factorise completely: {{18a^2b + 24ab^2}}.",
          answer: {
            type: "expression",
            expr: "6ab(3a + 4b)",
            form: "factorised",
            display: "{{6ab(3a + 4b)}}",
          },
          hints: [
            "HCF of {{18}} and {{24}} is {{6}}; both terms also share {{a}} and {{b}}.",
            "Pull out {{6ab}} and divide each term by {{6ab}}.",
          ],
          solution: [
            "HCF of {{18a^2b}} and {{24ab^2}} is {{6ab}}.",
            "{{18a^2b + 24ab^2 = 6ab(3a + 4b)}}.",
          ],
        },
        {
          id: "algebraic-expressions-p1-q13",
          kind: "short",
          difficulty: "core",
          guideRef: "factorising-rearranging",
          question: "Factorise completely: {{x^2 - 11x + 28}}.",
          answer: {
            type: "expression",
            expr: "(x - 4)(x - 7)",
            form: "factorised",
            display: "{{(x - 4)(x - 7)}}",
          },
          hints: [
            "Product is {{+28}} (positive) and sum is {{-11}} (negative), so BOTH numbers are negative.",
            "Check factor pairs of {{28}}: {{-4}} and {{-7}} add to {{-11}}.",
          ],
          solution: [
            "{{(-4) * (-7) = +28}} and {{-4 + (-7) = -11}}.",
            "{{x^2 - 11x + 28 = (x - 4)(x - 7)}}.",
          ],
        },
        {
          id: "algebraic-expressions-p1-q14",
          kind: "short",
          difficulty: "core",
          guideRef: "factorising-rearranging",
          question: "Make {{u}} the subject of the kinematics formula {{v = u + at}}.",
          answer: {
            type: "expression",
            expr: "v - at",
            display: "{{u = v - at}}",
          },
          hints: [
            "Identify what is added to {{u}} on the right-hand side: the whole term {{at}}.",
            "Subtract {{at}} from both sides.",
          ],
          solution: [
            "Subtract {{at}} from both sides: {{u = v - at}}.",
          ],
        },
        {
          id: "algebraic-expressions-p1-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "evaluating-expressions",
          question:
            "Maya says that when {{x = -4}}, the value of {{-x^2}} is {{16}} because 'two negatives make a positive'. Explain Maya's mistake, state the correct value of {{-x^2}}, and give an expression using {{x}} and a power of {{2}} that DOES equal {{16}} when {{x = -4}}.",
          marks: 3,
          hints: [
            "Think about BIDMAS: does the square act before or after the minus sign in front?",
            "Rewrite {{-x^2}} as {{-(x^2)}} and evaluate it at {{x = -4}}.",
            "What happens if you put brackets around {{-x}}, or remove the leading minus?",
          ],
          modelAnswer:
            "By BIDMAS, indices are evaluated before negation, so {{-x^2}} means {{-(x^2)}} — you square first and then apply the minus sign. Substituting {{x = -4}} gives {{-(-4)^2 = -(16) = -16}}, not {{16}}. To get {{16}} you need brackets around the negative sign, {{(-x)^2}} (or simply {{x^2}}).",
          markScheme: [
            {
              point: "Explains BIDMAS / indices take priority over negation so {{-x^2 = -(x^2)}}",
              keywords: ["bidmas", "indices", "-(x^2)", "square first", "order of operations"],
            },
            {
              point: "States the correct value is {{-16}}",
              keywords: ["-16"],
            },
            {
              point: "Gives {{(-x)^2}} or {{x^2}} (brackets around the negative base)",
              keywords: ["(-x)^2", "brackets", "x^2"],
            },
          ],
          commonError:
            "Cancelling the leading minus with the negative value of {{x}} before squaring.",
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PRACTICE PAPER 2
    // -------------------------------------------------------------------------
    {
      id: "algebraic-expressions-p2",
      title: "Practice Paper 2 — Hard Expansions, Factorising & Subject Twice",
      questions: [
        {
          id: "algebraic-expressions-p2-q01",
          kind: "short",
          difficulty: "core",
          guideRef: "expanding-double-brackets",
          question: "Expand and simplify {{(5x - 3)(2x - 7)}}.",
          answer: {
            type: "expression",
            expr: "10x^2 - 41x + 21",
            form: "expanded",
            display: "{{10x^2 - 41x + 21}}",
          },
          traps: [
            {
              spec: { type: "expression", expr: "10x^2 - 41x - 21" },
              feedback: "Watch the Last product: {{(-3)(-7) = +21}}, not {{-21}}!",
            },
          ],
          hints: [
            "Compute all four products: {{5x(2x)}}, {{5x(-7)}}, {{(-3)(2x)}}, and {{(-3)(-7)}}.",
            "Combine {{-35x - 6x = -41x}}.",
          ],
          solution: [
            "{{(5x - 3)(2x - 7) = 10x^2 - 35x - 6x + 21 = 10x^2 - 41x + 21}}.",
          ],
        },
        {
          id: "algebraic-expressions-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "expanding-double-brackets",
          question: "Expand and simplify {{(3x + 2)^2 - (3x - 2)^2}}.",
          answer: {
            type: "expression",
            expr: "24x",
            form: "expanded",
            display: "{{24x}}",
          },
          traps: [
            {
              spec: { type: "expression", expr: "0" },
              feedback: "Remember the middle terms have OPPOSITE signs: {{+12x - (-12x) = 24x}}, not {{0}}!",
            },
          ],
          hints: [
            "Expand {{(3x + 2)^2 = 9x^2 + 12x + 4}} and {{(3x - 2)^2 = 9x^2 - 12x + 4}}.",
            "Subtract with brackets: notice {{9x^2}} and {{4}} cancel, while {{12x - (-12x)}} doubles!",
          ],
          solution: [
            "{{(9x^2 + 12x + 4) - (9x^2 - 12x + 4)}}",
            "{{= 9x^2 + 12x + 4 - 9x^2 + 12x - 4 = 24x}}.",
          ],
        },
        {
          id: "algebraic-expressions-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "expanding-double-brackets",
          question: "Expand and simplify {{2(x + 4)(x - 3)}}.",
          answer: {
            type: "expression",
            expr: "2x^2 + 2x - 24",
            form: "expanded",
            display: "{{2x^2 + 2x - 24}}",
          },
          traps: [
            {
              spec: { type: "expression", expr: "4x^2 + 4x - 48" },
              feedback: "Multiply by {{2}} ONCE (not into both brackets!). Expand the double bracket first, then double the result.",
            },
          ],
          hints: [
            "Expand {{(x + 4)(x - 3)}} first, keeping the {{2}} outside.",
            "Then multiply every term of {{x^2 + x - 12}} by {{2}}.",
          ],
          solution: [
            "{{(x + 4)(x - 3) = x^2 + x - 12}}.",
            "Multiply by {{2}}: {{2(x^2 + x - 12) = 2x^2 + 2x - 24}}.",
          ],
        },
        {
          id: "algebraic-expressions-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "geometric-algebra",
          question:
            "A rectangular carpet of dimensions {{(3x + 1)}} m by {{(2x - 1)}} m sits inside a rectangular room of dimensions {{(3x + 5)}} m by {{(2x + 3)}} m. Find the simplified expression for the uncovered floor area in {{m^2}}.",
          answer: {
            type: "expression",
            expr: "20x + 16",
            form: "expanded",
            display: "{{20x + 16}}",
          },
          traps: [
            {
              spec: { type: "expression", expr: "18x + 14" },
              feedback: "Wrap the carpet area {{(6x^2 - x - 1)}} in brackets before subtracting so {{-(-x) = +x}} and {{-(-1) = +1}}!",
            },
          ],
          hints: [
            "Room area {{= (3x + 5)(2x + 3) = 6x^2 + 19x + 15}}.",
            "Carpet area {{= (3x + 1)(2x - 1) = 6x^2 - x - 1}}.",
            "Subtract with brackets: {{(6x^2 + 19x + 15) - (6x^2 - x - 1)}}.",
          ],
          solution: [
            "Room area {{= (3x + 5)(2x + 3) = 6x^2 + 9x + 10x + 15 = 6x^2 + 19x + 15}}.",
            "Carpet area {{= (3x + 1)(2x - 1) = 6x^2 - 3x + 2x - 1 = 6x^2 - x - 1}}.",
            "Uncovered floor {{= (6x^2 + 19x + 15) - (6x^2 - x - 1) = 20x + 16}} {{m^2}}.",
          ],
        },
        {
          id: "algebraic-expressions-p2-q05",
          kind: "written",
          difficulty: "core",
          guideRef: "expanding-double-brackets",
          question:
            "Sam expands {{(2x - 5)^2}} and writes {{4x^2 - 25}}. Identify BOTH errors in Sam's working and give the correct expanded expression.",
          marks: 3,
          hints: [
            "Write {{(2x - 5)^2}} as {{(2x - 5)(2x - 5)}} and expand all four products.",
            "Compare Sam's middle term (missing!) and Sam's constant sign ({{-25}}) with your expansion.",
          ],
          modelAnswer:
            "Sam made two errors: first, Sam missed the middle cross-terms {{(-10x) + (-10x) = -20x}}; second, Sam wrote {{-25}} instead of {{+25}} even though {{(-5)(-5) = +25}} is positive. The correct expansion is {{(2x - 5)(2x - 5) = 4x^2 - 20x + 25}}.",
          markScheme: [
            {
              point: "Identifies the missing middle cross-term ({{-20x}})",
              keywords: ["middle", "-20x", "cross"],
            },
            {
              point: "Identifies the sign error on the constant ({{(-5)(-5) = +25}}, positive)",
              keywords: ["+25", "positive", "(-5)(-5)"],
            },
            {
              point: "States the correct expansion {{4x^2 - 20x + 25}}",
              keywords: ["4x^2 - 20x + 25", "4x^2-20x+25"],
            },
          ],
          commonError:
            "Spotting only the missing middle term and overlooking that the constant must be {{+25}}.",
        },
        {
          id: "algebraic-expressions-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "evaluating-expressions",
          question: "Find the value of {{(3a - b)^2 - 4ab}} when {{a = -1}} and {{b = 2}}.",
          answer: { type: "number", value: 33 },
          traps: [
            {
              spec: { type: "number", value: 17 },
              feedback: "Check {{-4ab}} at {{a = -1, b = 2}}: {{-4(-1)(2) = +8}}, not {{-8}}.",
            },
          ],
          hints: [
            "Evaluate inside the bracket first: {{3(-1) - 2 = -5}}.",
            "Square {{-5}} to get {{25}}, then subtract {{4(-1)(2) = -8}}.",
          ],
          solution: [
            "{{3a - b = 3(-1) - 2 = -5}}, so {{(3a - b)^2 = (-5)^2 = 25}}.",
            "{{-4ab = -4(-1)(2) = +8}}.",
            "Total {{= 25 + 8 = 33}}.",
          ],
        },
        {
          id: "algebraic-expressions-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "evaluating-expressions",
          question: "Find the value of {{12x^2 - 4x + 1}} when {{x = -1/2}}.",
          answer: { type: "number", value: 6 },
          traps: [
            {
              spec: { type: "number", value: 0 },
              feedback: "Check {{(-1/2)^2 = +1/4}}, so {{12(1/4) = +3}}, not {{-3}}.",
            },
            {
              spec: { type: "number", value: 2 },
              feedback: "Check {{-4(-1/2) = +2}}, not {{-2}}.",
            },
          ],
          hints: [
            "Substitute {{(-1/2)}} in brackets: {{12(-1/2)^2 - 4(-1/2) + 1}}.",
            "{{(-1/2)^2 = 1/4}}, so {{12 * (1/4) = 3}} and {{-4 * (-1/2) = +2}}.",
          ],
          solution: [
            "{{12(-1/2)^2 - 4(-1/2) + 1 = 12(1/4) + 2 + 1 = 3 + 2 + 1 = 6}}.",
          ],
        },
        {
          id: "algebraic-expressions-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "factorising-rearranging",
          question: "Factorise completely: {{25x^2 - 49}}.",
          answer: {
            type: "expression",
            expr: "(5x + 7)(5x - 7)",
            form: "factorised",
            display: "{{(5x + 7)(5x - 7)}}",
          },
          hints: [
            "Write each term as a square: {{(5x)^2 - 7^2}}.",
            "Use difference of two squares: {{(a + b)(a - b)}}.",
          ],
          solution: [
            "{{25x^2 - 49 = (5x)^2 - 7^2 = (5x + 7)(5x - 7)}}.",
          ],
        },
        {
          id: "algebraic-expressions-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "factorising-rearranging",
          question: "Factorise completely: {{x^2 + 3x - 40}}.",
          answer: {
            type: "expression",
            expr: "(x + 8)(x - 5)",
            form: "factorised",
            display: "{{(x + 8)(x - 5)}}",
          },
          hints: [
            "Find two integers multiplying to {{-40}} and adding to {{+3}}.",
            "Since the sum is positive, the factor with larger magnitude is positive: {{+8}} and {{-5}}.",
          ],
          solution: [
            "{{8 * (-5) = -40}} and {{8 + (-5) = +3}}.",
            "{{x^2 + 3x - 40 = (x + 8)(x - 5)}}.",
          ],
        },
        {
          id: "algebraic-expressions-p2-q10",
          kind: "written",
          difficulty: "core",
          guideRef: "factorising-rearranging",
          question:
            "Explain why {{3x^2 - 12}} is NOT completely factorised when written as {{3(x^2 - 4)}}, and complete the factorisation fully.",
          marks: 3,
          hints: [
            "Look closely at the expression inside the bracket: {{x^2 - 4}}.",
            "Both {{x^2}} and {{4 = 2^2}} are perfect squares separated by a minus sign.",
            "Keep the factor of {{3}} in front of your two new brackets.",
          ],
          modelAnswer:
            "Inside the bracket, {{x^2 - 4}} is a difference of two squares ({{x^2 - 2^2}}), so it can be factorised further into {{(x + 2)(x - 2)}}. Keeping the common factor of {{3}} outside gives the complete factorisation {{3(x + 2)(x - 2)}}.",
          markScheme: [
            {
              point: "Recognises {{x^2 - 4}} as a difference of two squares",
              keywords: ["difference of two squares", "squares", "dots"],
            },
            {
              point: "Factorises {{x^2 - 4}} into {{(x + 2)(x - 2)}}",
              keywords: ["(x + 2)(x - 2)", "(x+2)(x-2)", "(x - 2)(x + 2)", "(x-2)(x+2)"],
            },
            {
              point: "Retains the factor {{3}} to give {{3(x + 2)(x - 2)}}",
              keywords: ["3(x + 2)(x - 2)", "3(x+2)(x-2)", "3(x - 2)(x + 2)", "3(x-2)(x+2)"],
            },
          ],
          commonError:
            "Forgetting to carry the {{3}} down into the final answer, writing only {{(x + 2)(x - 2)}}.",
        },
        {
          id: "algebraic-expressions-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "factorising-rearranging",
          question: "Make {{a}} the subject of the formula {{s = ut + (1/2)at^2}}.",
          answer: {
            type: "expression",
            expr: "2(s - ut)/t^2",
            display: "{{a = (2(s - ut))/t^2}}",
          },
          hints: [
            "Subtract {{ut}} from both sides first: {{s - ut = (1/2)at^2}}.",
            "Multiply both sides by {{2}}, then divide by {{t^2}}.",
          ],
          solution: [
            "Subtract {{ut}}: {{s - ut = (1/2)at^2}}.",
            "Multiply by {{2}}: {{2(s - ut) = at^2}}.",
            "Divide by {{t^2}}: {{a = (2(s - ut))/t^2}}.",
          ],
        },
        {
          id: "algebraic-expressions-p2-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "factorising-rearranging",
          question: "Make {{x}} the subject of {{y = 2x + mx + 7}}.",
          answer: {
            type: "expression",
            expr: "(y - 7)/(2 + m)",
            display: "{{x = (y - 7)/(2 + m)}}",
          },
          hints: [
            "Subtract {{7}} from both sides so only {{x}}-terms remain on the right.",
            "Factorise {{x}} out of {{2x + mx}}, then divide by the bracket.",
          ],
          solution: [
            "Subtract {{7}}: {{y - 7 = 2x + mx}}.",
            "Factorise {{x}}: {{y - 7 = x(2 + m)}}.",
            "Divide by {{(2 + m)}}: {{x = (y - 7)/(2 + m)}}.",
          ],
        },
        {
          id: "algebraic-expressions-p2-q13",
          kind: "mcq",
          difficulty: "core",
          guideRef: "factorising-rearranging",
          question: "Make {{k}} the subject of {{T = 2pi sqrt(m/k)}} (for {{k > 0}}).",
          options: [
            "{{k = (2pi m)/T^2}}",
            "{{k = (4pi^2 m)/T^2}}",
            "{{k = (m T^2)/(4pi^2)}}",
            "{{k = (4pi^2)/(m T^2)}}",
          ],
          answerIndex: 1,
          hints: [
            "Divide both sides by {{2pi}} first: {{T/(2pi) = sqrt(m/k)}}.",
            "Square BOTH sides carefully: {{T^2/(4pi^2) = m/k}}, then rearrange for {{k}}.",
          ],
          explanation:
            "Dividing by {{2pi}} and squaring gives {{T^2/(4pi^2) = m/k}}. Multiplying by {{k}} and dividing by {{T^2/(4pi^2)}} gives {{k = (4pi^2 m)/T^2}}. Forgetting to square {{2pi}} leaves {{2pi}} instead of {{4pi^2}}.",
        },
        {
          id: "algebraic-expressions-p2-q14",
          kind: "short",
          difficulty: "challenge",
          guideRef: "factorising-rearranging",
          question: "Make {{x}} the subject of {{p(x - 3) = qx + 4}}.",
          answer: {
            type: "expression",
            expr: "(3p + 4)/(p - q)",
            display: "{{x = (3p + 4)/(p - q)}}",
          },
          hints: [
            "Expand the left-hand side: {{px - 3p = qx + 4}}.",
            "Collect {{x}}-terms on the left and other terms on the right: {{px - qx = 3p + 4}}.",
            "Factorise {{x}} out and divide by {{(p - q)}}.",
          ],
          solution: [
            "Expand: {{px - 3p = qx + 4}}.",
            "Collect {{x}}-terms: {{px - qx = 3p + 4}}.",
            "Factorise: {{x(p - q) = 3p + 4}}.",
            "Divide by {{(p - q)}}: {{x = (3p + 4)/(p - q)}}.",
          ],
        },
        {
          id: "algebraic-expressions-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "factorising-rearranging",
          question: "Show all steps to make {{x}} the subject of {{y = (ax + b)/(x - c)}}.",
          marks: 3,
          hints: [
            "Clear the fraction first by multiplying both sides by {{(x - c)}}.",
            "Expand {{y(x - c) = xy - cy}}, then collect all {{x}}-terms on one side.",
            "Factorise {{x}} out and divide both sides by the resulting bracket.",
          ],
          modelAnswer:
            "Multiply both sides by {{(x - c)}} and expand: {{xy - cy = ax + b}}. Collect all {{x}}-terms on the left and remaining terms on the right: {{xy - ax = b + cy}}. Factorise {{x}} out to get {{x(y - a) = b + cy}}, then divide both sides by {{(y - a)}} to obtain {{x = (b + cy)/(y - a)}}.",
          markScheme: [
            {
              point: "Multiplies by {{(x - c)}} and expands to {{xy - cy = ax + b}}",
              keywords: ["xy - cy", "xy-cy", "yx - yc", "yx-yc"],
            },
            {
              point: "Collects {{x}}-terms and factorises to {{x(y - a) = b + cy}} (or equivalent)",
              keywords: ["x(y - a)", "x(y-a)", "x(a - y)", "x(a-y)"],
            },
            {
              point: "Divides to isolate {{x = (b + cy)/(y - a)}}",
              keywords: ["(b + cy)/(y - a)", "(cy + b)/(y - a)", "(b+cy)/(y-a)", "(cy+b)/(y-a)"],
            },
          ],
          commonError:
            "Trying to divide by {{x}} or leaving {{x}} in the denominator instead of collecting and factorising.",
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 AoPS-STYLE CHALLENGE QUESTIONS)
  // ===========================================================================
  challenge: [
    {
      id: "algebraic-expressions-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "expanding-double-brackets",
      strategy: "Use Difference of Two Squares",
      question:
        "Use algebraic identities (not long multiplication!) to compute the exact value of {{1004 * 996 - 1000^2}}.",
      answer: { type: "number", value: -16 },
      traps: [
        {
          spec: { type: "number", value: 16 },
          feedback: "Watch the sign: {{(1000 + 4)(1000 - 4) = 1000^2 - 16}}, which is {{16}} LESS than {{1000^2}}!",
        },
      ],
      hints: [
        "Write {{1004 = 1000 + 4}} and {{996 = 1000 - 4}}.",
        "Apply {{(a + b)(a - b) = a^2 - b^2}} with {{a = 1000}} and {{b = 4}}.",
        "Now subtract {{1000^2}} from {{1000^2 - 4^2}}.",
      ],
      solution: [
        "{{1004 * 996 = (1000 + 4)(1000 - 4) = 1000^2 - 4^2 = 1000^2 - 16}}.",
        "Subtract {{1000^2}}: {{(1000^2 - 16) - 1000^2 = -16}}.",
      ],
    },
    {
      id: "algebraic-expressions-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "expanding-double-brackets",
      strategy: "Pair and Expand Step-by-Step",
      question: "Expand and simplify the triple product {{(x + 1)(x + 2)(x + 3)}}.",
      answer: {
        type: "expression",
        expr: "x^3 + 6x^2 + 11x + 6",
        form: "expanded",
        display: "{{x^3 + 6x^2 + 11x + 6}}",
      },
      hints: [
        "Expand the first two brackets first: {{(x + 1)(x + 2) = x^2 + 3x + 2}}.",
        "Now multiply EVERY term of {{(x^2 + 3x + 2)}} by {{x}} and then by {{3}}.",
        "Collect like powers of {{x}}: {{x^3}}, {{x^2}}, {{x}}, and the constant.",
      ],
      solution: [
        "{{(x + 1)(x + 2) = x^2 + 3x + 2}}.",
        "{{(x^2 + 3x + 2)(x + 3) = x^3 + 3x^2 + 3x^2 + 9x + 2x + 6}}.",
        "Collect like terms: {{x^3 + 6x^2 + 11x + 6}}.",
      ],
    },
    {
      id: "algebraic-expressions-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "expanding-double-brackets",
      strategy: "Compare Coefficients",
      question:
        "If {{(x + a)^2 = x^2 + 14x + b}} for all values of {{x}}, find the value of {{b - a}}.",
      answer: { type: "number", value: 42 },
      traps: [
        {
          spec: { type: "number", value: 49 },
          feedback: "{{49}} is {{b}} — the question asks for {{b - a}}!",
        },
      ],
      hints: [
        "Expand {{(x + a)^2 = x^2 + 2ax + a^2}}.",
        "Match the {{x}}-coefficient: {{2a = 14}}, so find {{a}}.",
        "Then compute {{b = a^2}} and finally {{b - a}}.",
      ],
      solution: [
        "{{(x + a)^2 = x^2 + 2ax + a^2}}.",
        "Comparing coefficients: {{2a = 14 => a = 7}}, so {{b = a^2 = 49}}.",
        "Therefore {{b - a = 49 - 7 = 42}}.",
      ],
    },
    {
      id: "algebraic-expressions-ch-q04",
      kind: "written",
      difficulty: "challenge",
      guideRef: "expanding-double-brackets",
      strategy: "Choose Symmetrical Variables",
      question:
        "Prove algebraically that for ANY three consecutive integers, the square of the middle integer is always {{1}} more than the product of the first and third integers.",
      marks: 3,
      hints: [
        "Choose a symmetrical naming: let the three consecutive integers be {{n - 1}}, {{n}}, and {{n + 1}}.",
        "Multiply the first and third integers using difference of two squares.",
        "Compare that product with the square of the middle integer {{n^2}}.",
      ],
      modelAnswer:
        "Let the three consecutive integers be {{n - 1}}, {{n}}, and {{n + 1}} (where {{n}} is any integer). The product of the first and third integers is {{(n - 1)(n + 1) = n^2 - 1}}. Subtracting this from the square of the middle integer gives {{n^2 - (n^2 - 1) = 1}}, proving the middle square is always {{1}} more.",
      markScheme: [
        {
          point: "Defines three consecutive integers algebraically (e.g. {{n - 1, n, n + 1}} or {{n, n + 1, n + 2}})",
          keywords: ["n - 1", "n-1", "n + 2", "n+2"],
        },
        {
          point: "Correctly expands the product of the first and third ({{n^2 - 1}} or {{n^2 + 2n}})",
          keywords: ["n^2 - 1", "n^2-1", "n^2 + 2n", "n^2+2n"],
        },
        {
          point: "Compares with middle square to show difference is always {{1}}",
          keywords: ["n^2 - (n^2 - 1)", "n^2 + 2n + 1", "difference", "always 1"],
        },
      ],
      commonError:
        "Testing numerical examples like {{4, 5, 6}} instead of giving a general algebraic proof.",
    },
    {
      id: "algebraic-expressions-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "evaluating-expressions",
      strategy: "Algebraic Identity Before Substituting",
      question:
        "Given that {{x + y = 7}} and {{xy = 10}}, find the exact value of {{x^2 + y^2}} without solving for {{x}} and {{y}}.",
      answer: { type: "number", value: 29 },
      traps: [
        {
          spec: { type: "number", value: 49 },
          feedback: "{{(x + y)^2 = 49}}, which equals {{x^2 + 2xy + y^2}} — subtract {{2xy}}!",
        },
        {
          spec: { type: "number", value: 39 },
          feedback: "Remember {{(x + y)^2}} has {{+2xy}}, not {{+xy}} — subtract {{2 * 10 = 20}}!",
        },
      ],
      hints: [
        "Expand {{(x + y)^2}}: it contains both {{x^2 + y^2}} and {{xy}}!",
        "Rearrange {{(x + y)^2 = x^2 + 2xy + y^2}} to isolate {{x^2 + y^2}}.",
        "Compute {{7^2 - 2(10)}}.",
      ],
      solution: [
        "{{(x + y)^2 = x^2 + 2xy + y^2}}, so {{x^2 + y^2 = (x + y)^2 - 2xy}}.",
        "Substitute {{x + y = 7}} and {{xy = 10}}: {{x^2 + y^2 = 7^2 - 2(10) = 49 - 20 = 29}}.",
      ],
    },
    {
      id: "algebraic-expressions-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "factorising-rearranging",
      strategy: "HCF First, Then Difference of Two Squares",
      question: "Factorise completely: {{5x^3 - 45x}}.",
      answer: {
        type: "expression",
        expr: "5x(x + 3)(x - 3)",
        form: "factorised",
        display: "{{5x(x + 3)(x - 3)}}",
      },
      hints: [
        "Look for a common factor of BOTH the numbers and the powers of {{x}} first.",
        "Pull out {{5x}} to get {{5x(x^2 - 9)}}.",
        "Now factorise the difference of two squares inside the bracket!",
      ],
      solution: [
        "Take out the HCF {{5x}}: {{5x^3 - 45x = 5x(x^2 - 9)}}.",
        "Factorise {{x^2 - 9}} as a difference of two squares: {{5x(x + 3)(x - 3)}}.",
      ],
    },
    {
      id: "algebraic-expressions-ch-q07",
      kind: "short",
      difficulty: "challenge",
      guideRef: "factorising-rearranging",
      strategy: "Clear Denominator → Collect → Factorise",
      question: "Make {{t}} the subject of {{k = (3t + 1)/(2t - 5)}}.",
      answer: {
        type: "expression",
        expr: "(5k + 1)/(2k - 3)",
        display: "{{t = (5k + 1)/(2k - 3)}}",
      },
      hints: [
        "Multiply both sides by {{(2t - 5)}} and expand: {{2kt - 5k = 3t + 1}}.",
        "Move all {{t}}-terms to the left and non-{{t}} terms to the right: {{2kt - 3t = 5k + 1}}.",
        "Factorise {{t}} out and divide by {{(2k - 3)}}.",
      ],
      solution: [
        "Multiply by {{(2t - 5)}}: {{k(2t - 5) = 3t + 1 => 2kt - 5k = 3t + 1}}.",
        "Collect {{t}}-terms: {{2kt - 3t = 5k + 1}}.",
        "Factorise {{t}}: {{t(2k - 3) = 5k + 1}}.",
        "Divide by {{(2k - 3)}}: {{t = (5k + 1)/(2k - 3)}}.",
      ],
    },
    {
      id: "algebraic-expressions-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "geometric-algebra",
      strategy: "Express Both Sides Algebraically and Compare",
      question:
        "A rectangular lawn measures {{a}} metres by {{b}} metres, and a uniform path of width {{w}} metres surrounds it on all four sides. Prove algebraically that the area of the path equals {{w}} multiplied by the average of the inner and outer perimeters.",
      marks: 3,
      hints: [
        "Find the outer dimensions {{(a + 2w)}} by {{(b + 2w)}}, then compute Outer Area minus Inner Area.",
        "Write expressions for the inner perimeter {{2a + 2b}} and outer perimeter {{2(a + 2w) + 2(b + 2w)}}.",
        "Average those two perimeters, multiply by {{w}}, and show it equals your path area expression!",
      ],
      modelAnswer:
        "The outer rectangle has dimensions {{a + 2w}} by {{b + 2w}}, so the path area is {{(a + 2w)(b + 2w) - ab = ab + 2aw + 2bw + 4w^2 - ab = 2aw + 2bw + 4w^2}}. The inner perimeter is {{2a + 2b}} and the outer perimeter is {{2(a + 2w) + 2(b + 2w) = 2a + 2b + 8w}}. Their average is {{((2a + 2b) + (2a + 2b + 8w))/2 = 2a + 2b + 4w}}. Multiplying by {{w}} gives {{w(2a + 2b + 4w) = 2aw + 2bw + 4w^2}}, which equals the exact path area.",
      markScheme: [
        {
          point: "Finds path area {{(a + 2w)(b + 2w) - ab = 2aw + 2bw + 4w^2}}",
          keywords: ["2aw", "4w^2"],
        },
        {
          point: "Finds inner perimeter {{2a + 2b}} and outer perimeter {{2a + 2b + 8w}}",
          keywords: ["2a + 2b", "8w"],
        },
        {
          point: "Finds average perimeter {{2a + 2b + 4w}} and multiplies by {{w}} to match",
          keywords: ["2a + 2b + 4w", "w(2a + 2b + 4w)", "equal", "match"],
        },
      ],
      commonError:
        "Using {{a + w}} and {{b + w}} for the outer dimensions instead of adding {{w}} on BOTH sides ({{a + 2w}} and {{b + 2w}}).",
    },
  ],
};
