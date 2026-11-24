import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // PAPER 1: CORE FOUNDATIONS & FLUENCY
  // ===========================================================================
  {
    id: "algebraic-expressions-m1",
    title: "MCQ Paper 1 — Expanding, Substituting & Factorising Foundations",
    questions: [
      {
        id: "algebraic-expressions-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "expanding-double-brackets",
        question: "Expand and simplify {{(x + 4)(x + 6)}}.",
        options: [
          "{{x^2 + 10x + 24}}",
          "{{x^2 + 24x + 10}}",
          "{{x^2 + 10x + 10}}",
          "{{x^2 + 2x + 24}}",
        ],
        answerIndex: 0,
        hints: [
          "Multiply every term in the first bracket by every term in the second bracket.",
          "The {{x}}-terms are {{6x}} and {{4x}}, and the constant term is {{4 * 6}}.",
        ],
        explanation:
          "Using FOIL or an area grid: {{x * x + 6x + 4x + 4 * 6 = x^2 + 10x + 24}}. Swapping sum and product gives the tempting distractor {{x^2 + 24x + 10}}, while adding {{4 + 6}} instead of multiplying gives the wrong constant {{10}}.",
      },
      {
        id: "algebraic-expressions-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "expanding-double-brackets",
        question: "Expand and simplify {{(x + 7)(x - 3)}}.",
        options: [
          "{{x^2 - 4x - 21}}",
          "{{x^2 + 4x - 21}}",
          "{{x^2 + 10x - 21}}",
          "{{x^2 + 4x + 21}}",
        ],
        answerIndex: 1,
        hints: [
          "Keep the minus sign attached to the {{3}}: multiply {{x}} and {{+7}} by {{-3}}.",
          "Collect {{7x - 3x}} for the middle term, and multiply {{(+7)(-3)}} for the constant.",
        ],
        explanation:
          "{{(x + 7)(x - 3) = x^2 - 3x + 7x - 21 = x^2 + 4x - 21}}. A positive times a negative is negative ({{-21}}), and {{+7 - 3 = +4}}, not {{-4}} or {{+10}}.",
      },
      {
        id: "algebraic-expressions-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "expanding-double-brackets",
        question: "Expand and simplify {{(x - 5)(x - 2)}}.",
        options: [
          "{{x^2 - 7x - 10}}",
          "{{x^2 - 3x + 10}}",
          "{{x^2 - 7x + 10}}",
          "{{x^2 + 7x + 10}}",
        ],
        answerIndex: 2,
        hints: [
          "Multiply each pair carefully: {{x * x}}, {{x(-2)}}, {{(-5)x}}, and {{(-5)(-2)}}.",
          "Remember that a negative multiplied by a negative gives a positive.",
        ],
        explanation:
          "{{(x - 5)(x - 2) = x^2 - 2x - 5x + 10 = x^2 - 7x + 10}}. Many students mistakenly write {{-10}} at the end, forgetting that {{(-5) * (-2) = +10}}.",
      },
      {
        id: "algebraic-expressions-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "expanding-double-brackets",
        question: "Expand and simplify {{(x + 6)(x - 6)}}.",
        options: [
          "{{x^2 + 36}}",
          "{{x^2 - 12x - 36}}",
          "{{x^2 + 12x - 36}}",
          "{{x^2 - 36}}",
        ],
        answerIndex: 3,
        hints: [
          "Look at the Outer and Inner terms: {{-6x}} and {{+6x}}.",
          "This is a difference of two squares: {{(x + k)(x - k) = x^2 - k^2}}.",
        ],
        explanation:
          "{{(x + 6)(x - 6) = x^2 - 6x + 6x - 36 = x^2 - 36}}. The middle terms {{-6x}} and {{+6x}} cancel to {{0}}, and {{(+6)(-6) = -36}}.",
      },
      {
        id: "algebraic-expressions-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "expanding-double-brackets",
        question: "Expand and simplify {{(x - 4)^2}}.",
        options: [
          "{{x^2 - 16}}",
          "{{x^2 + 16}}",
          "{{x^2 - 8x + 16}}",
          "{{x^2 - 8x - 16}}",
        ],
        answerIndex: 2,
        hints: [
          "Rewrite {{(x - 4)^2}} as {{(x - 4)(x - 4)}} before expanding.",
          "There are four products: {{x^2}}, {{-4x}}, {{-4x}}, and {{(-4)(-4)}}.",
        ],
        explanation:
          "{{(x - 4)^2 = (x - 4)(x - 4) = x^2 - 4x - 4x + 16 = x^2 - 8x + 16}}. Dropping the middle term to get {{x^2 - 16}} or {{x^2 + 16}} is the classic squaring-a-bracket mistake.",
      },
      {
        id: "algebraic-expressions-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "geometric-algebra",
        question:
          "A rectangle has length {{(x + 5)}} cm and width {{(x + 2)}} cm. Which expression gives its **perimeter** in cm?",
        options: [
          "{{4x + 14}}",
          "{{2x + 7}}",
          "{{4x + 7}}",
          "{{x^2 + 7x + 10}}",
        ],
        answerIndex: 0,
        hints: [
          "Perimeter adds all four sides around the outside: two lengths plus two widths.",
          "Add {{(x + 5) + (x + 2)}} first, then double the whole result.",
        ],
        explanation:
          "Perimeter {{= 2((x + 5) + (x + 2)) = 2(2x + 7) = 4x + 14}} cm. Leaving it as {{2x + 7}} counts only half the perimeter, and {{x^2 + 7x + 10}} is the area rather than the perimeter.",
      },
      {
        id: "algebraic-expressions-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "geometric-algebra",
        question:
          "A rectangle has length {{(x + 8)}} cm and width {{(x - 3)}} cm. Which expression gives its **area** in {{cm^2}}?",
        options: [
          "{{4x + 10}}",
          "{{x^2 - 5x - 24}}",
          "{{x^2 + 5x + 24}}",
          "{{x^2 + 5x - 24}}",
        ],
        answerIndex: 3,
        hints: [
          "Area of a rectangle equals length multiplied by width.",
          "Expand {{(x + 8)(x - 3)}} carefully, paying attention to the signs.",
        ],
        explanation:
          "Area {{= (x + 8)(x - 3) = x^2 - 3x + 8x - 24 = x^2 + 5x - 24}} {{cm^2}}. Note {{4x + 10}} is the perimeter, while {{x^2 - 5x - 24}} reverses the sign of {{+8x - 3x}}.",
      },
      {
        id: "algebraic-expressions-m1-q08",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "evaluating-expressions",
        question: "Find the value of {{2x^2}} when {{x = 3}}.",
        options: ["{{12}}", "{{18}}", "{{36}}", "{{24}}"],
        answerIndex: 1,
        hints: [
          "Follow BIDMAS: apply the index (squaring) BEFORE multiplying by {{2}}.",
          "Compute {{3^2}} first, then double it.",
        ],
        explanation:
          "{{2x^2 = 2 * 3^2 = 2 * 9 = 18}}. Multiplying first to get {{(2 * 3)^2 = 36}} evaluates {{(2x)^2}} instead of {{2x^2}}.",
      },
      {
        id: "algebraic-expressions-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "evaluating-expressions",
        question: "Find the value of {{x^2}} when {{x = -5}}.",
        options: ["{{25}}", "{{-25}}", "{{-10}}", "{{10}}"],
        answerIndex: 0,
        hints: [
          "Put brackets around the substituted negative number before squaring.",
          "Evaluate {{(-5) * (-5)}}.",
        ],
        explanation:
          "Replacing {{x}} with {{(-5)}} gives {{(-5)^2 = (-5) * (-5) = 25}}. Getting {{-25}} happens if you forget brackets and calculate {{-5^2}} instead.",
      },
      {
        id: "algebraic-expressions-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "evaluating-expressions",
        question: "Find the value of {{-x^2}} when {{x = 4}}.",
        options: ["{{16}}", "{{-8}}", "{{-16}}", "{{8}}"],
        answerIndex: 2,
        hints: [
          "Indices have higher priority than a leading minus sign.",
          "Rewrite {{-x^2}} as {{-(x^2)}} before substituting {{x = 4}}.",
        ],
        explanation:
          "{{-x^2 = -(4^2) = -16}}. The square acts only on {{x}}, not on the minus sign in front; {{+16}} would be the value of {{(-x)^2}}.",
      },
      {
        id: "algebraic-expressions-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "evaluating-expressions",
        question: "Find the value of {{x^3}} when {{x = -3}}.",
        options: ["{{27}}", "{{-9}}", "{{9}}", "{{-27}}"],
        answerIndex: 3,
        hints: [
          "Cubing means multiplying {{-3}} by itself three times: {{(-3) * (-3) * (-3)}}.",
          "First {{(-3) * (-3) = +9}}, then multiply by {{-3}} once more.",
        ],
        explanation:
          "{{(-3)^3 = (-3) * (-3) * (-3) = 9 * (-3) = -27}}. An odd power preserves a negative sign, and multiplying by {{3}} instead of cubing gives the common error {{-9}}.",
      },
      {
        id: "algebraic-expressions-m1-q12",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "factorising-rearranging",
        question: "Factorise completely: {{12x + 18}}.",
        options: [
          "{{3(4x + 6)}}",
          "{{6(2x + 3)}}",
          "{{2(6x + 9)}}",
          "{{6(2x + 18)}}",
        ],
        answerIndex: 1,
        hints: [
          "Find the HIGHEST common factor of {{12}} and {{18}}.",
          "Divide both terms by {{6}} to see what goes inside the bracket.",
        ],
        explanation:
          "The HCF of {{12}} and {{18}} is {{6}}, giving {{6(2x + 3)}}. Both {{3(4x + 6)}} and {{2(6x + 9)}} are only partially factorised because a common factor remains inside the bracket.",
      },
      {
        id: "algebraic-expressions-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "factorising-rearranging",
        question: "Factorise completely: {{8x^2 - 12x}}.",
        options: [
          "{{4(2x^2 - 3x)}}",
          "{{x(8x - 12)}}",
          "{{4x(2x - 3)}}",
          "{{2x(4x - 6)}}",
        ],
        answerIndex: 2,
        hints: [
          "Take out the HCF of the numbers ({{8}} and {{12}}) AND the highest shared power of {{x}}.",
          "The full HCF is {{4x}} — check nothing common remains inside the bracket.",
        ],
        explanation:
          "The HCF of {{8x^2}} and {{12x}} is {{4x}}, so {{8x^2 - 12x = 4x(2x - 3)}}. All other expressions still have either a number or an {{x}} common to both terms inside the bracket.",
      },
      {
        id: "algebraic-expressions-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "factorising-rearranging",
        question: "Factorise completely: {{x^2 + 9x + 20}}.",
        options: [
          "{{(x + 4)(x + 5)}}",
          "{{(x + 2)(x + 10)}}",
          "{{(x - 4)(x - 5)}}",
          "{{(x + 1)(x + 20)}}",
        ],
        answerIndex: 0,
        hints: [
          "Find two integers that multiply to {{+20}} and add to {{+9}}.",
          "Check the factor pairs of {{20}}: {{1 * 20}}, {{2 * 10}}, and {{4 * 5}}.",
        ],
        explanation:
          "Since {{4 * 5 = 20}} and {{4 + 5 = 9}}, {{x^2 + 9x + 20 = (x + 4)(x + 5)}}. Using {{2}} and {{10}} gives {{12x}} in the middle, while {{-4}} and {{-5}} gives {{-9x}}.",
      },
      {
        id: "algebraic-expressions-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "factorising-rearranging",
        question: "Make {{x}} the subject of the formula {{y = 3x - 7}}.",
        options: [
          "{{x = (y - 7)/3}}",
          "{{x = y/3 + 7}}",
          "{{x = 3y + 7}}",
          "{{x = (y + 7)/3}}",
        ],
        answerIndex: 3,
        hints: [
          "Undo the operations applied to {{x}} in reverse order: undo {{-7}} first, then undo {{* 3}}.",
          "Add {{7}} to both sides to get {{y + 7 = 3x}}, then divide the WHOLE left-hand side by {{3}}.",
        ],
        explanation:
          "Adding {{7}} gives {{y + 7 = 3x}}, and dividing both sides by {{3}} gives {{x = (y + 7)/3}}. Writing {{y/3 + 7}} forgets to divide the {{7}} by {{3}} as well.",
      },
    ],
  },

  // ===========================================================================
  // PAPER 2: APPLIED & EXAM PRACTICE
  // ===========================================================================
  {
    id: "algebraic-expressions-m2",
    title: "MCQ Paper 2 — Coefficients, Geometry & Tricky Signs",
    questions: [
      {
        id: "algebraic-expressions-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "expanding-double-brackets",
        question: "Expand and simplify {{(2x + 3)(x + 5)}}.",
        options: [
          "{{2x^2 + 8x + 15}}",
          "{{2x^2 + 13x + 15}}",
          "{{2x^2 + 11x + 15}}",
          "{{3x^2 + 13x + 15}}",
        ],
        answerIndex: 1,
        hints: [
          "Draw a 2 × 2 grid with {{2x, +3}} across the top and {{x, +5}} down the side.",
          "Outer gives {{2x * 5 = 10x}} and Inner gives {{3 * x = 3x}}.",
        ],
        explanation:
          "{{(2x + 3)(x + 5) = 2x^2 + 10x + 3x + 15 = 2x^2 + 13x + 15}}. Simply adding {{3 + 5 = 8}} forgets that the {{5}} multiplies {{2x}}, not {{x}}.",
      },
      {
        id: "algebraic-expressions-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "expanding-double-brackets",
        question: "Expand and simplify {{(3x - 4)(2x + 1)}}.",
        options: [
          "{{6x^2 + 5x - 4}}",
          "{{6x^2 - 11x - 4}}",
          "{{6x^2 - 5x + 4}}",
          "{{6x^2 - 5x - 4}}",
        ],
        answerIndex: 3,
        hints: [
          "Compute all four products: {{3x(2x)}}, {{3x(1)}}, {{(-4)(2x)}}, and {{(-4)(1)}}.",
          "Combine {{+3x - 8x}} carefully.",
        ],
        explanation:
          "{{(3x - 4)(2x + 1) = 6x^2 + 3x - 8x - 4 = 6x^2 - 5x - 4}}. Mixing up the signs on Outer and Inner leads to {{+5x}} or {{-11x}}.",
      },
      {
        id: "algebraic-expressions-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "expanding-double-brackets",
        question: "Expand and simplify {{(4x - 3)^2}}.",
        options: [
          "{{16x^2 - 24x + 9}}",
          "{{16x^2 - 12x + 9}}",
          "{{16x^2 - 9}}",
          "{{4x^2 - 24x + 9}}",
        ],
        answerIndex: 0,
        hints: [
          "Rewrite as {{(4x - 3)(4x - 3)}}.",
          "Both Outer and Inner equal {{-12x}}, and {{4x * 4x = 16x^2}}.",
        ],
        explanation:
          "{{(4x - 3)(4x - 3) = 16x^2 - 12x - 12x + 9 = 16x^2 - 24x + 9}}. Writing {{-12x}} forgets to double the cross-term, and writing {{4x^2}} forgets to square the coefficient {{4}}.",
      },
      {
        id: "algebraic-expressions-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "expanding-double-brackets",
        question: "Expand and simplify {{(5x + 2)(5x - 2)}}.",
        options: [
          "{{5x^2 - 4}}",
          "{{25x^2 + 4}}",
          "{{25x^2 - 4}}",
          "{{25x^2 - 20x - 4}}",
        ],
        answerIndex: 2,
        hints: [
          "Recognise the difference of two squares: {{(p + q)(p - q) = p^2 - q^2}}.",
          "Here {{p = 5x}} and {{q = 2}} — remember to square BOTH the {{5}} and the {{x}}.",
        ],
        explanation:
          "{{(5x + 2)(5x - 2) = (5x)^2 - 2^2 = 25x^2 - 4}}. The middle terms {{-10x}} and {{+10x}} cancel, and {{(5x)^2 = 25x^2}}, not {{5x^2}}.",
      },
      {
        id: "algebraic-expressions-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "geometric-algebra",
        question:
          "A triangle has base {{(2x + 4)}} cm and perpendicular height {{(x + 3)}} cm. What is its expanded area in {{cm^2}}?",
        options: [
          "{{2x^2 + 10x + 12}}",
          "{{x^2 + 5x + 6}}",
          "{{x^2 + 7x + 12}}",
          "{{2x^2 + 5x + 6}}",
        ],
        answerIndex: 1,
        hints: [
          "Area of a triangle is {{(1/2) * base * height}}.",
          "Halve {{(2x + 4)}} first to get {{(x + 2)}}, then expand {{(x + 2)(x + 3)}}.",
        ],
        explanation:
          "Area {{= (1/2)(2x + 4)(x + 3) = (x + 2)(x + 3) = x^2 + 5x + 6}} {{cm^2}}. Forgetting the {{1/2}} gives {{2x^2 + 10x + 12}}.",
      },
      {
        id: "algebraic-expressions-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "geometric-algebra",
        question:
          "A square of side {{(x + 4)}} cm has a smaller square of side {{x}} cm cut away from one corner. Which expression gives the remaining area in {{cm^2}}?",
        options: [
          "{{16}}",
          "{{4x + 16}}",
          "{{2x^2 + 8x + 16}}",
          "{{8x + 16}}",
        ],
        answerIndex: 3,
        hints: [
          "Remaining area = Outer square area minus inner square area: {{(x + 4)^2 - x^2}}.",
          "Expand {{(x + 4)^2}} completely — do not drop the {{8x}} middle term!",
        ],
        explanation:
          "{{(x + 4)^2 - x^2 = (x^2 + 8x + 16) - x^2 = 8x + 16}} {{cm^2}}. Answering {{16}} happens when you wrongly expand {{(x + 4)^2}} as {{x^2 + 16}}.",
      },
      {
        id: "algebraic-expressions-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "geometric-algebra",
        question:
          "A rectangular lawn measures {{(2x + 3)}} m by {{(x + 2)}} m. A path of uniform width {{1}} m is built all around the outside. What are the **outer** dimensions of the lawn plus path?",
        options: [
          "{{(2x + 5)}} m by {{(x + 4)}} m",
          "{{(2x + 4)}} m by {{(x + 3)}} m",
          "{{(2x + 5)}} m by {{(x + 3)}} m",
          "{{(2x + 7)}} m by {{(x + 6)}} m",
        ],
        answerIndex: 0,
        hints: [
          "Sketch the lawn with a {{1}} m strip on the left, right, top, AND bottom.",
          "Each side grows by {{1}} m at BOTH ends, so add {{2}} m to the length and {{2}} m to the width.",
        ],
        explanation:
          "A uniform {{1}} m border adds {{1 + 1 = 2}} m to both the length and the width: {{(2x + 3) + 2 = 2x + 5}} m and {{(x + 2) + 2 = x + 4}} m. Adding {{1}} only once gives the common trap {{(2x + 4)}} by {{(x + 3)}}.",
      },
      {
        id: "algebraic-expressions-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "evaluating-expressions",
        question: "Find the value of {{3x^2 - 4x + 1}} when {{x = -2}}.",
        options: ["{{5}}", "{{-19}}", "{{21}}", "{{29}}"],
        answerIndex: 2,
        hints: [
          "Substitute {{(-2)}} inside brackets: {{3(-2)^2 - 4(-2) + 1}}.",
          "Remember {{(-2)^2 = +4}} and {{-4 * (-2) = +8}}.",
        ],
        explanation:
          "{{3(-2)^2 - 4(-2) + 1 = 3(4) + 8 + 1 = 12 + 8 + 1 = 21}}. Writing {{-4(-2) = -8}} produces {{5}}, while writing {{3(-2)^2 = -12}} produces {{-3}} or {{-19}}.",
      },
      {
        id: "algebraic-expressions-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "evaluating-expressions",
        question:
          "Let {{A = (3x)^2}} and {{B = 3x^2}}. When {{x = -2}}, what is the value of {{A - B}}?",
        options: ["{{0}}", "{{24}}", "{{48}}", "{{-24}}"],
        answerIndex: 1,
        hints: [
          "Evaluate {{A = (3 * (-2))^2}} and {{B = 3 * (-2)^2}} separately.",
          "{{A = (-6)^2 = 36}} while {{B = 3 * 4 = 12}}.",
        ],
        explanation:
          "{{A = (3 * (-2))^2 = (-6)^2 = 36}} and {{B = 3 * (-2)^2 = 3 * 4 = 12}}, so {{A - B = 36 - 12 = 24}}. Assuming {{(3x)^2 = 3x^2}} wrongly gives {{0}}.",
      },
      {
        id: "algebraic-expressions-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "evaluating-expressions",
        question: "Evaluate {{4a^2 - b^3}} when {{a = -3}} and {{b = -2}}.",
        options: ["{{44}}", "{{28}}", "{{-28}}", "{{-44}}"],
        answerIndex: 0,
        hints: [
          "Evaluate {{a^2 = (-3)^2 = 9}} and {{b^3 = (-2)^3 = -8}} first.",
          "Now calculate {{4(9) - (-8)}} — subtracting a negative adds!",
        ],
        explanation:
          "{{4(-3)^2 - (-2)^3 = 4(9) - (-8) = 36 + 8 = 44}}. Forgetting the double negative in {{-(-8)}} gives {{36 - 8 = 28}}.",
      },
      {
        id: "algebraic-expressions-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "evaluating-expressions",
        question: "Find the value of {{8x^2 + 6x}} when {{x = -1/2}}.",
        options: ["{{-5}}", "{{5}}", "{{1}}", "{{-1}}"],
        answerIndex: 3,
        hints: [
          "Square the negative fraction carefully: {{(-1/2)^2 = +1/4}}.",
          "Multiply {{8 * (1/4)}} and {{6 * (-1/2)}}, then add the two results.",
        ],
        explanation:
          "{{8(-1/2)^2 + 6(-1/2) = 8(1/4) - 3 = 2 - 3 = -1}}. Treating {{(-1/2)^2}} as {{-1/4}} gives {{-2 - 3 = -5}}.",
      },
      {
        id: "algebraic-expressions-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "factorising-rearranging",
        question: "Factorise completely: {{15a^3b - 10a^2b^2}}.",
        options: [
          "{{5ab(3a^2 - 2ab)}}",
          "{{5a^2(3ab - 2b^2)}}",
          "{{5a^2b(3a - 2b)}}",
          "{{a^2b(15a - 10b)}}",
        ],
        answerIndex: 2,
        hints: [
          "Find the HCF of {{15}} and {{10}}, the lowest power of {{a}}, and the lowest power of {{b}}.",
          "HCF is {{5a^2b}} — divide each term by {{5a^2b}}.",
        ],
        explanation:
          "The full HCF is {{5a^2b}}, leaving {{3a - 2b}} inside the bracket: {{5a^2b(3a - 2b)}}. Every other choice leaves an extra common factor ({{a}}, {{b}}, or {{5}}) unextracted inside the bracket.",
      },
      {
        id: "algebraic-expressions-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "factorising-rearranging",
        question: "Factorise completely: {{x^2 - 4x - 21}}.",
        options: [
          "{{(x + 7)(x - 3)}}",
          "{{(x - 7)(x + 3)}}",
          "{{(x - 7)(x - 3)}}",
          "{{(x - 21)(x + 1)}}",
        ],
        answerIndex: 1,
        hints: [
          "Find two integers that multiply to {{-21}} and add to {{-4}}.",
          "Because their sum is negative, the factor with the larger magnitude must be negative.",
        ],
        explanation:
          "{{(-7) * (+3) = -21}} and {{-7 + 3 = -4}}, so {{x^2 - 4x - 21 = (x - 7)(x + 3)}}. Swapping the signs to {{(x + 7)(x - 3)}} expands to {{x^2 + 4x - 21}}.",
      },
      {
        id: "algebraic-expressions-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "factorising-rearranging",
        question: "Factorise completely: {{x^2 - 81}}.",
        options: [
          "{{(x - 9)^2}}",
          "{{(x + 9)^2}}",
          "{{(x - 81)(x + 1)}}",
          "{{(x + 9)(x - 9)}}",
        ],
        answerIndex: 3,
        hints: [
          "Notice both {{x^2}} and {{81 = 9^2}} are perfect squares separated by a minus sign.",
          "Apply difference of two squares: {{a^2 - b^2 = (a + b)(a - b)}}.",
        ],
        explanation:
          "{{x^2 - 81 = x^2 - 9^2 = (x + 9)(x - 9)}}. Writing {{(x - 9)^2}} is wrong because {{(x - 9)^2 = x^2 - 18x + 81}}.",
      },
      {
        id: "algebraic-expressions-m2-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "factorising-rearranging",
        question:
          "Make {{r}} the subject of the circle area formula {{A = pi r^2}} (where {{r > 0}}).",
        options: [
          "{{r = sqrt(A/pi)}}",
          "{{r = (sqrt(A))/pi}}",
          "{{r = A/(2pi)}}",
          "{{r = sqrt(pi A)}}",
        ],
        answerIndex: 0,
        hints: [
          "What happened to {{r}} LAST when building {{pi r^2}}? It was squared first, THEN multiplied by {{pi}}.",
          "Undo in reverse order: divide by {{pi}} FIRST, then take the square root of the whole fraction.",
        ],
        explanation:
          "Dividing by {{pi}} gives {{r^2 = A/pi}}, and taking the positive square root gives {{r = sqrt(A/pi)}}. Taking the square root before dividing gives the wrong formula {{(sqrt(A))/pi}}.",
      },
    ],
  },

  // ===========================================================================
  // PAPER 3: MASTERY, REASONING & STRETCH
  // ===========================================================================
  {
    id: "algebraic-expressions-m3",
    title: "MCQ Paper 3 — Mastery, Identities & Two-Step Rearranging",
    questions: [
      {
        id: "algebraic-expressions-m3-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "expanding-double-brackets",
        question: "Expand and simplify {{(x + 5)^2 - (x + 2)(x + 8)}}.",
        options: ["{{41}}", "{{20x + 9}}", "{{9}}", "{{-9}}"],
        answerIndex: 2,
        hints: [
          "Expand both products separately first, keeping brackets around the second result.",
          "{{(x^2 + 10x + 25) - (x^2 + 10x + 16)}} — watch both {{x^2}} and {{10x}} cancel!",
        ],
        explanation:
          "{{(x^2 + 10x + 25) - (x^2 + 10x + 16) = x^2 + 10x + 25 - x^2 - 10x - 16 = 9}}. Forgetting to flip the sign on {{+16}} wrongly gives {{25 + 16 = 41}}.",
      },
      {
        id: "algebraic-expressions-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "expanding-double-brackets",
        question: "Expand and simplify {{(2x - 3)(x + 4) - (x - 5)(x + 2)}}.",
        options: [
          "{{x^2 + 8x - 2}}",
          "{{x^2 + 2x - 22}}",
          "{{x^2 + 8x - 22}}",
          "{{3x^2 + 2x - 2}}",
        ],
        answerIndex: 0,
        hints: [
          "Expand {{(2x - 3)(x + 4) = 2x^2 + 5x - 12}} and {{(x - 5)(x + 2) = x^2 - 3x - 10}}.",
          "Wrap the second quadratic in brackets before subtracting: {{(2x^2 + 5x - 12) - (x^2 - 3x - 10)}}.",
          "Flip EVERY sign inside the subtracted bracket: {{-x^2 + 3x + 10}}.",
        ],
        explanation:
          "{{(2x^2 + 5x - 12) - (x^2 - 3x - 10) = 2x^2 + 5x - 12 - x^2 + 3x + 10 = x^2 + 8x - 2}}. Failing to negate {{-3x}} and {{-10}} gives {{x^2 + 2x - 22}}.",
      },
      {
        id: "algebraic-expressions-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "expanding-double-brackets",
        question:
          "For all values of {{x}}, {{(x + p)(x - 6) = x^2 - 2x - 24}}. What is the value of {{p}}?",
        options: ["{{-4}}", "{{-8}}", "{{8}}", "{{4}}"],
        answerIndex: 3,
        hints: [
          "Expand the left-hand side in terms of {{p}}: {{x^2 + (p - 6)x - 6p}}.",
          "Match either the {{x}}-coefficient ({{p - 6 = -2}}) or the constant ({{-6p = -24}}).",
        ],
        explanation:
          "Comparing coefficients gives {{p - 6 = -2}}, so {{p = 4}}. Checking the constant term confirms {{4 * (-6) = -24}}.",
      },
      {
        id: "algebraic-expressions-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "expanding-double-brackets",
        question:
          "Using the difference of two squares identity, what is the exact value of {{103^2 - 97^2}}?",
        options: ["{{600}}", "{{1200}}", "{{360}}", "{{2400}}"],
        answerIndex: 1,
        hints: [
          "Write {{a^2 - b^2 = (a + b)(a - b)}} with {{a = 103}} and {{b = 97}}.",
          "Compute {{(103 + 97) * (103 - 97)}} mentally.",
        ],
        explanation:
          "{{103^2 - 97^2 = (103 + 97)(103 - 97) = 200 * 6 = 1200}}. Computing {{100 * 6 = 600}} halves the sum {{103 + 97 = 200}} by mistake.",
      },
      {
        id: "algebraic-expressions-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "geometric-algebra",
        question:
          "An L-shape is formed by cutting a rectangle {{(x - 2)}} cm by {{3}} cm out of a larger rectangle {{(2x + 1)}} cm by {{(x + 4)}} cm. What is the area of the L-shape in {{cm^2}}?",
        options: [
          "{{2x^2 + 6x + 10}}",
          "{{2x^2 + 6x - 2}}",
          "{{2x^2 + 12x + 10}}",
          "{{2x^2 + 6x - 10}}",
        ],
        answerIndex: 0,
        hints: [
          "Find the large rectangle area: {{(2x + 1)(x + 4) = 2x^2 + 9x + 4}}.",
          "Find the cutout area: {{3(x - 2) = 3x - 6}}.",
          "Subtract with brackets: {{(2x^2 + 9x + 4) - (3x - 6)}}.",
        ],
        explanation:
          "Outer area is {{2x^2 + 9x + 4}} and cutout area is {{3x - 6}}. Subtracting gives {{2x^2 + 9x + 4 - 3x + 6 = 2x^2 + 6x + 10}} {{cm^2}}. Forgetting to flip {{-6}} to {{+6}} produces {{2x^2 + 6x - 2}}.",
      },
      {
        id: "algebraic-expressions-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "geometric-algebra",
        question:
          "A square of side {{(x + 3)}} cm has the same perimeter as a rectangle of length {{(x + 5)}} cm and width {{w}} cm. Express {{w}} in terms of {{x}}.",
        options: ["{{x - 1}}", "{{x + 3}}", "{{x + 1}}", "{{2x + 1}}"],
        answerIndex: 2,
        hints: [
          "The square's perimeter is {{4(x + 3) = 4x + 12}}, so its semi-perimeter (length + width) is {{2x + 6}}.",
          "Set {{(x + 5) + w = 2x + 6}} and solve for {{w}}.",
        ],
        explanation:
          "The square has perimeter {{4(x + 3) = 4x + 12}}, so the rectangle's length plus width is half of that: {{2x + 6}}. Subtracting the length gives {{w = (2x + 6) - (x + 5) = x + 1}}.",
      },
      {
        id: "algebraic-expressions-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "geometric-algebra",
        question:
          "A rectangular picture of width {{w}} cm and height {{h}} cm is placed inside a uniform border of width {{2}} cm on all four sides. By how many cm does the **outer perimeter** exceed the **inner perimeter**?",
        options: ["{{8}} cm", "{{16}} cm", "{{4}} cm", "{{12}} cm"],
        answerIndex: 1,
        hints: [
          "The outer dimensions are {{(w + 4)}} cm and {{(h + 4)}} cm (add {{2}} cm to BOTH ends of each side).",
          "Calculate {{2((w + 4) + (h + 4)) - 2(w + h)}}.",
        ],
        explanation:
          "Outer perimeter {{= 2(w + 4 + h + 4) = 2w + 2h + 16}}, while inner perimeter {{= 2w + 2h}}. The difference is always {{16}} cm regardless of {{w}} and {{h}}. Answering {{8}} cm comes from adding {{2}} cm only once per dimension.",
      },
      {
        id: "algebraic-expressions-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "evaluating-expressions",
        question: "Which statement is ALWAYS true when {{x}} is any negative number?",
        options: [
          "{{(-x)^2}} is negative",
          "{{-x^2}} is positive",
          "{{(-x)^3}} is negative",
          "{{x^3}} is negative",
        ],
        answerIndex: 3,
        hints: [
          "Test a concrete negative number such as {{x = -2}} in every option.",
          "Check carefully: if {{x = -2}}, then {{-x = +2}}!",
        ],
        explanation:
          "For any negative {{x}}, cubing multiplies three negatives so {{x^3}} is always negative. Meanwhile {{-x}} is positive, so {{(-x)^2}} and {{(-x)^3}} are both positive, and {{-x^2 = -(x^2)}} is always negative.",
      },
      {
        id: "algebraic-expressions-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "evaluating-expressions",
        question:
          "Find the value of {{(2p^2 - q^3)/(p - q)}} when {{p = -2}} and {{q = -1}}.",
        options: ["{{9}}", "{{-7}}", "{{-9}}", "{{7}}"],
        answerIndex: 2,
        hints: [
          "Substitute with brackets: numerator is {{2(-2)^2 - (-1)^3}} and denominator is {{(-2) - (-1)}}.",
          "Remember {{(-1)^3 = -1}}, so subtracting it adds {{1}}.",
          "Numerator is {{8 - (-1) = 9}} and denominator is {{-2 + 1 = -1}}.",
        ],
        explanation:
          "Numerator {{= 2(-2)^2 - (-1)^3 = 2(4) - (-1) = 8 + 1 = 9}}. Denominator {{= -2 - (-1) = -2 + 1 = -1}}. Dividing gives {{9 / (-1) = -9}}. Dropping the double negative on {{-(-1)}} gives {{7 / (-1) = -7}}.",
      },
      {
        id: "algebraic-expressions-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "factorising-rearranging",
        question: "Factorise completely: {{9x^2 - 16y^2}}.",
        options: [
          "{{(9x + 16y)(9x - 16y)}}",
          "{{(3x + 4y)(3x - 4y)}}",
          "{{(3x - 4y)^2}}",
          "{{(3x + 8y)(3x - 2y)}}",
        ],
        answerIndex: 1,
        hints: [
          "Rewrite each term as a square: {{9x^2 = (3x)^2}} and {{16y^2 = (4y)^2}}.",
          "Apply the difference of two squares: {{a^2 - b^2 = (a + b)(a - b)}}.",
        ],
        explanation:
          "{{9x^2 - 16y^2 = (3x)^2 - (4y)^2 = (3x + 4y)(3x - 4y)}}. Forgetting to square-root {{9}} and {{16}} produces the distractor {{(9x + 16y)(9x - 16y)}}.",
      },
      {
        id: "algebraic-expressions-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "factorising-rearranging",
        question: "Factorise completely: {{3x^2 - 27}}.",
        options: [
          "{{3(x + 3)(x - 3)}}",
          "{{3(x^2 - 9)}}",
          "{{(3x + 9)(x - 3)}}",
          "{{3(x - 3)^2}}",
        ],
        answerIndex: 0,
        hints: [
          "ALWAYS take out the highest common factor first: pull out {{3}}.",
          "Look at what stays inside the bracket: {{x^2 - 9}} is a difference of two squares!",
        ],
        explanation:
          "First take out the common factor {{3}} to get {{3(x^2 - 9)}}, then factorise the difference of two squares: {{3(x + 3)(x - 3)}}. Stopping at {{3(x^2 - 9)}} or leaving {{3}} inside {{(3x + 9)}} is not completely factorised.",
      },
      {
        id: "algebraic-expressions-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "factorising-rearranging",
        question: "Factorise completely: {{2x^2 + 10x + 12}}.",
        options: [
          "{{2(x^2 + 5x + 6)}}",
          "{{(2x + 4)(x + 3)}}",
          "{{2(x + 1)(x + 6)}}",
          "{{2(x + 2)(x + 3)}}",
        ],
        answerIndex: 3,
        hints: [
          "Pull out the numerical common factor {{2}} from all three terms first.",
          "Then factorise the monic quadratic {{x^2 + 5x + 6}}.",
        ],
        explanation:
          "Factor out {{2}} first: {{2(x^2 + 5x + 6)}}. Since {{2 * 3 = 6}} and {{2 + 3 = 5}}, this becomes {{2(x + 2)(x + 3)}}. Note {{(2x + 4)(x + 3)}} is incomplete because {{2x + 4}} still shares a factor of {{2}}.",
      },
      {
        id: "algebraic-expressions-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "factorising-rearranging",
        question:
          "Make {{v}} the subject of the kinetic energy formula {{E = (1/2)mv^2}} (where {{v > 0}}).",
        options: [
          "{{v = sqrt((2E)/m)}}",
          "{{v = sqrt(E/(2m))}}",
          "{{v = (2sqrt(E))/m}}",
          "{{v = (2E)/m^2}}",
        ],
        answerIndex: 0,
        hints: [
          "Clear the fraction {{1/2}} first by multiplying both sides by {{2}}: {{2E = mv^2}}.",
          "Divide both sides by {{m}}, then take the square root of the whole expression.",
        ],
        explanation:
          "Multiply by {{2}} to get {{2E = mv^2}}, divide by {{m}} to get {{v^2 = (2E)/m}}, then square-root: {{v = sqrt((2E)/m)}}. Dividing by {{2}} instead of multiplying gives {{sqrt(E/(2m))}}.",
      },
      {
        id: "algebraic-expressions-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "factorising-rearranging",
        question: "Make {{x}} the subject of {{y = 3x + kx - 4}}.",
        options: [
          "{{x = (y - 4)/(3 + k)}}",
          "{{x = (y + 4)/(3k)}}",
          "{{x = (y + 4)/(3 + k)}}",
          "{{x = (y + 4 - kx)/3}}",
        ],
        answerIndex: 2,
        hints: [
          "Add {{4}} to both sides so all {{x}}-terms are isolated on the right.",
          "Factorise {{x}} out of {{3x + kx}} before dividing.",
        ],
        explanation:
          "Add {{4}}: {{y + 4 = 3x + kx}}. Factorise {{x}}: {{y + 4 = x(3 + k)}}. Divide by {{(3 + k)}}: {{x = (y + 4)/(3 + k)}}. Writing {{(y + 4 - kx)/3}} leaves {{x}} on both sides, so {{x}} is not yet the subject.",
      },
      {
        id: "algebraic-expressions-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "factorising-rearranging",
        question: "Make {{x}} the subject of {{a(x + 2) = bx + 5}}.",
        options: [
          "{{x = (5 + 2a)/(a - b)}}",
          "{{x = (5 - 2a)/(a - b)}}",
          "{{x = (5 - 2a)/(a + b)}}",
          "{{x = (5 - 2)/(a - b)}}",
        ],
        answerIndex: 1,
        hints: [
          "Expand the bracket on the left-hand side first: {{ax + 2a = bx + 5}}.",
          "Collect all {{x}}-terms on the left and non-{{x}} terms on the right: {{ax - bx = 5 - 2a}}.",
          "Factorise {{x}} out of {{ax - bx}}, then divide by {{(a - b)}}.",
        ],
        explanation:
          "Expanding gives {{ax + 2a = bx + 5}}. Collecting {{x}}-terms gives {{ax - bx = 5 - 2a}}, factorising out {{x}} gives {{(a - b)x = 5 - 2a}}, and dividing gives {{x = (5 - 2a)/(a - b)}}. Forgetting to multiply {{2}} by {{a}} gives the wrong numerator {{5 - 2}}.",
      },
    ],
  },
];
