import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK-CHECK QUIZ (10 mixed questions)
  // =========================================================================
  quiz: [
    {
      id: "indices-standard-form-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "index-laws",
      question: "Simplify {{3x^4 * 4x^5}}.",
      answer: { type: "expression", expr: "12x^9", form: "simplified", display: "{{12x^9}}" },
      traps: [
        { spec: { type: "expression", expr: "7x^9" }, feedback: "Multiply the numerical coefficients ({{3 * 4 = 12}}), while adding the indices ({{4 + 5 = 9}})." },
        { spec: { type: "expression", expr: "12x^20" }, feedback: "When multiplying same bases, **add** the indices ({{4 + 5 = 9}}), don't multiply them." },
      ],
      hints: [
        "Multiply the numbers 3 and 4, and add the powers of {{x}}.",
      ],
      solution: [
        "{{3 * 4 = 12}} and {{x^4 * x^5 = x^(4+5) = x^9}} ⇒ {{12x^9}}.",
      ],
    },
    {
      id: "indices-standard-form-quiz-q02",
      kind: "short",
      difficulty: "core",
      guideRef: "index-laws",
      question: "Simplify {{(2y^3)^4}} completely.",
      answer: { type: "expression", expr: "16y^12", form: "simplified", display: "{{16y^12}}" },
      traps: [
        { spec: { type: "expression", expr: "8y^12" }, feedback: "Raise 2 to the power 4 ({{2^4 = 16}}), rather than multiplying {{2 * 4 = 8}}." },
        { spec: { type: "expression", expr: "2y^12" }, feedback: "Don't forget to apply the power 4 to the coefficient 2 as well: {{2^4 = 16}}." },
      ],
      hints: [
        "Apply the outer power 4 to BOTH the coefficient 2 and {{y^3}}.",
        "{{2^4 = 2 * 2 * 2 * 2 = 16}} and {{(y^3)^4 = y^(3*4)}}.",
      ],
      solution: [
        "{{(2y^3)^4 = 2^4 * (y^3)^4 = 16y^12}}.",
      ],
    },
    {
      id: "indices-standard-form-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "zero-negative-indices",
      question: "Evaluate {{4^(-2)}} as a fraction in its simplest form.",
      answer: { type: "fraction", n: 1, d: 16, simplest: true },
      traps: [
        { spec: { type: "number", value: -16 }, feedback: "A negative index means take the reciprocal ({{1/(4^2)}}), not a negative number!" },
      ],
      hints: [
        "Use {{a^(-n) = 1/(a^n)}}.",
      ],
      solution: [
        "{{4^(-2) = 1/(4^2) = 1/16}}.",
      ],
    },
    {
      id: "indices-standard-form-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      guideRef: "zero-negative-indices",
      question: "Write {{32^3}} as a single power of 2.",
      options: ["{{2^8}}", "{{2^12}}", "{{2^15}}", "{{2^125}}"],
      answerIndex: 2,
      hints: [
        "Write 32 as a power of 2: {{32 = 2^5}}.",
        "Simplify {{(2^5)^3}} using the power-of-a-power law.",
      ],
      explanation:
        "{{32^3 = (2^5)^3 = 2^(5*3) = 2^15}}. Adding 5 + 3 = 8 confuses power-of-a-power with multiplication.",
    },
    {
      id: "indices-standard-form-quiz-q05",
      kind: "short",
      difficulty: "warmup",
      guideRef: "standard-form-conversions",
      question: "Write `640,000` in standard form.",
      answer: { type: "number", value: 6.4e5, standardForm: true, display: "{{6.4 * 10^5}}" },
      hints: [
        "Move the decimal point left until one non-zero digit sits in front: `6.4`.",
      ],
      solution: [
        "The decimal point shifts 5 places left from `640,000.` to `6.4`, giving {{6.4 * 10^5}}.",
      ],
    },
    {
      id: "indices-standard-form-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "standard-form-conversions",
      question: "Write `0.000 38` in standard form.",
      answer: { type: "number", value: 3.8e-4, standardForm: true, display: "{{3.8 * 10^(-4)}}" },
      hints: [
        "Because `0.000 38` is less than 1, the power of 10 is negative.",
        "Count how many places the decimal point shifts right to sit after the 3 (matching the 4 leading zeros).",
      ],
      solution: [
        "Shifting 4 places right gives `3.8`, so `0.000 38` = {{3.8 * 10^(-4)}}.",
      ],
    },
    {
      id: "indices-standard-form-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "standard-form-conversions",
      question: "Which of these numbers is the **largest**?",
      options: ["{{9.4 * 10^(-5)}}", "{{1.8 * 10^(-3)}}", "{{6.2 * 10^(-4)}}", "{{8.5 * 10^(-4)}}"],
      answerIndex: 1,
      hints: [
        "Compare the powers of 10 first: −3, −4 and −5.",
        "Remember {{ -3 > -4 > -5 }}, so the largest exponent wins regardless of the front digit!",
      ],
      explanation:
        "{{1.8 * 10^(-3) = 0.0018}}, which is larger than {{8.5 * 10^(-4) = 0.00085}} and {{9.4 * 10^(-5) = 0.000094}}. Always compare powers of 10 before front numbers.",
    },
    {
      id: "indices-standard-form-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "standard-form-calculations",
      question: "Work out {{(4 * 10^5) * (7 * 10^2)}} and give your answer in standard form.",
      answer: { type: "number", value: 2.8e8, standardForm: true, display: "{{2.8 * 10^8}}" },
      hints: [
        "Multiply {{4 * 7 = 28}} and add exponents {{5 + 2 = 7}}, giving {{28 * 10^7}}.",
        "Adjust {{28 = 2.8 * 10^1}} so the front number lies in {{1 <= A < 10}}.",
      ],
      solution: [
        "{{(4 * 7) * 10^(5+2) = 28 * 10^7}}.",
        "Adjust into standard form: {{(2.8 * 10^1) * 10^7 = 2.8 * 10^8}}.",
      ],
    },
    {
      id: "indices-standard-form-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "standard-form-calculations",
      question: "Work out {{5.4 * 10^4 + 3 * 10^3}} in standard form.",
      options: ["{{8.4 * 10^7}}", "{{8.4 * 10^4}}", "{{5.7 * 10^7}}", "{{5.7 * 10^4}}"],
      answerIndex: 3,
      hints: [
        "Match both numbers to {{10^4}}: {{3 * 10^3 = 0.3 * 10^4}}.",
        "Add {{5.4 + 0.3}} and keep {{10^4}}.",
      ],
      explanation:
        "{{5.4 * 10^4 + 0.3 * 10^4 = 5.7 * 10^4}} (`54,000 + 3,000 = 57,000`). Adding the exponents or adding 5.4 + 3 directly ignores place value.",
    },
    {
      id: "indices-standard-form-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "zero-negative-indices",
      question: "Use the division law of indices to explain why {{5^0 = 1}} and {{5^(-2) = 1/25}} (and NOT 0 or −25).",
      marks: 3,
      hints: [
        "Start with {{5^3 / 5^3}} (or {{5^n / 5^n}}) — evaluate it both with the index law and by ordinary division.",
        "Next apply the division law to {{5^0 / 5^2}} to derive {{5^(-2)}} as a reciprocal fraction.",
      ],
      modelAnswer:
        "By the division law, 5^3 / 5^3 = 5^(3-3) = 5^0, and dividing any non-zero number (125) by itself always equals 1, so 5^0 = 1. Similarly, 5^0 / 5^2 = 5^(0-2) = 5^(-2), which equals 1/5^2 = 1/25 — a negative index means take the reciprocal, not a negative value.",
      markScheme: [
        { point: "Apply division law to identical powers, e.g. 5^3 / 5^3 = 5^0 (= 125/125)", keywords: ["125", "25/25", "itself", "5^(n-n)", "5^3 / 5^3", "5^2 / 5^2"] },
        { point: "State that dividing any non-zero number by itself equals 1", keywords: ["non-zero", "dividing", "same number"] },
        { point: "Derive 5^(0-2) = 1/5^2 and explain negative index means reciprocal", keywords: ["reciprocal", "1/5^2", "0 - 2", "0-2"] },
      ],
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS (2 papers × 15 questions)
  // =========================================================================
  papers: [
    {
      id: "indices-standard-form-p1",
      title: "Practice Paper 1 — Core Skills & Fluency",
      questions: [
        {
          id: "indices-standard-form-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "index-laws",
          question: "Simplify {{(5a^2b^4) * (3a^5b)}}.",
          answer: { type: "expression", expr: "15a^7b^5", form: "simplified", display: "{{15a^7b^5}}" },
          hints: [
            "Multiply 5 and 3, add powers of {{a}}, and remember {{b = b^1}} when adding powers of {{b}}.",
          ],
          solution: [
            "{{5 * 3 = 15}}, {{a^(2+5) = a^7}}, {{b^(4+1) = b^5}} ⇒ {{15a^7b^5}}.",
          ],
        },
        {
          id: "indices-standard-form-p1-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "index-laws",
          question: "Simplify {{(24x^9y^4)/(8x^3y)}}.",
          answer: { type: "expression", expr: "3x^6y^3", form: "simplified", display: "{{3x^6y^3}}" },
          hints: [
            "Divide the coefficients ({{24 / 8 = 3}}) and subtract indices for {{x}} and {{y}}.",
            "Remember the bottom {{y}} has exponent 1.",
          ],
          solution: [
            "{{24/8 = 3}}, {{x^(9-3) = x^6}}, {{y^(4-1) = y^3}} ⇒ {{3x^6y^3}}.",
          ],
        },
        {
          id: "indices-standard-form-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "index-laws",
          question: "Simplify {{(3m^4n^2)^3}} completely.",
          answer: { type: "expression", expr: "27m^12n^6", form: "simplified", display: "{{27m^12n^6}}" },
          traps: [
            { spec: { type: "expression", expr: "9m^12n^6" }, feedback: "Cube the coefficient 3 ({{3^3 = 27}}), rather than multiplying {{3 * 3 = 9}}." },
          ],
          hints: [
            "Cube every factor inside the bracket: {{3^3}}, {{(m^4)^3}}, and {{(n^2)^3}}.",
            "Multiply the indices of {{m}} and {{n}} by 3.",
          ],
          solution: [
            "{{3^3 = 27}}, {{(m^4)^3 = m^12}}, {{(n^2)^3 = n^6}} ⇒ {{27m^12n^6}}.",
          ],
        },
        {
          id: "indices-standard-form-p1-q04",
          kind: "short",
          difficulty: "warmup",
          guideRef: "zero-negative-indices",
          question: "Evaluate {{8^0 + 3^(-1)}} as an **improper fraction** in its simplest form.",
          answer: { type: "fraction", n: 4, d: 3, simplest: true, form: "improper" },
          hints: [
            "{{8^0 = 1}} and {{3^(-1) = 1/3}} — add them together.",
          ],
          solution: [
            "{{8^0 + 3^(-1) = 1 + 1/3 = 4/3}}.",
          ],
        },
        {
          id: "indices-standard-form-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "zero-negative-indices",
          question: "Evaluate {{(2/5)^(-2)}} as an improper fraction in its simplest form.",
          answer: { type: "fraction", n: 25, d: 4, simplest: true, form: "improper" },
          traps: [
            { spec: { type: "fraction", n: -4, d: 25 }, feedback: "A negative index flips the fraction to {{(5/2)^2}} — it does not put a minus sign in front." },
          ],
          hints: [
            "Flip the fraction to remove the negative sign in the index: {{(2/5)^(-2) = (5/2)^2}}.",
            "Square both numerator and denominator.",
          ],
          solution: [
            "{{(2/5)^(-2) = (5/2)^2 = 25/4}}.",
          ],
        },
        {
          id: "indices-standard-form-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "zero-negative-indices",
          question: "Write {{8^4 * 4^3}} as a single power of 2 in the form {{2^n}}. Find the value of {{n}}.",
          answer: { type: "number", value: 18 },
          hints: [
            "Rewrite 8 as {{2^3}} and 4 as {{2^2}}.",
            "Simplify {{(2^3)^4 * (2^2)^3}} using index laws and read off the final exponent.",
          ],
          solution: [
            "{{8^4 = (2^3)^4 = 2^12}} and {{4^3 = (2^2)^3 = 2^6}}.",
            "{{2^12 * 2^6 = 2^(12+6) = 2^18}}, so {{n = 18}}.",
          ],
        },
        {
          id: "indices-standard-form-p1-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "zero-negative-indices",
          question: "Solve {{3^(2x) = 81}}.",
          options: ["{{x = 2}}", "{{x = 4}}", "{{x = 9}}", "{{x = 13.5}}"],
          answerIndex: 0,
          hints: [
            "Rewrite 81 as a power of 3: {{81 = 3^4}}.",
            "Match the exponents: {{2x = 4}}.",
          ],
          explanation:
            "Since {{81 = 3^4}}, we get {{3^(2x) = 3^4}} ⇒ {{2x = 4}} ⇒ {{x = 2}}. Choosing {{x = 4}} forgets to divide by 2.",
        },
        {
          id: "indices-standard-form-p1-q08",
          kind: "short",
          difficulty: "warmup",
          guideRef: "standard-form-conversions",
          question: "Write {{3.08 * 10^5}} as an ordinary number.",
          answer: { type: "number", value: 308000, allowFraction: false, display: "308,000" },
          hints: [
            "Shift the decimal point 5 places to the right (two jumps past 08, then add 3 trailing zeros).",
          ],
          solution: [
            "{{3.08 * 100000 = 308000}} (`308,000`).",
          ],
        },
        {
          id: "indices-standard-form-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "standard-form-conversions",
          question: "Write {{7.5 * 10^(-4)}} as an ordinary decimal.",
          answer: { type: "number", value: 0.00075, allowFraction: false, display: "0.00075" },
          hints: [
            "Shift the decimal point 4 places left.",
            "Check: power −4 gives 4 leading zeros in total (`0.000…`).",
          ],
          solution: [
            "Shifting 4 places left gives `0.00075`.",
          ],
        },
        {
          id: "indices-standard-form-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "standard-form-conversions",
          question: "Write `0.000 009 2` in standard form.",
          answer: { type: "number", value: 9.2e-6, standardForm: true, display: "{{9.2 * 10^(-6)}}" },
          hints: [
            "Count ALL leading zeros before the 9 (including the 0 before the decimal point).",
            "There are 6 leading zeros, so the power of 10 is {{ -6 }}.",
          ],
          solution: [
            "The decimal point shifts 6 places right to sit after 9, giving {{9.2 * 10^(-6)}}.",
          ],
        },
        {
          id: "indices-standard-form-p1-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "standard-form-conversions",
          question: "Rewrite {{630 * 10^(-5)}} in valid standard form.",
          options: ["{{6.3 * 10^(-7)}}", "{{6.3 * 10^(-4)}}", "{{6.3 * 10^(-3)}}", "{{6.3 * 10^(-2)}}"],
          answerIndex: 2,
          hints: [
            "Rewrite 630 itself in standard form: {{630 = 6.3 * 10^2}}.",
            "Combine {{(6.3 * 10^2) * 10^(-5)}} by adding {{2 + (-5)}}.",
          ],
          explanation:
            "{{630 = 6.3 * 10^2}}, so {{6.3 * 10^2 * 10^(-5) = 6.3 * 10^(-3)}}. Check: `630 × 0.00001 = 0.0063 = 6.3 × 10^(-3)` ✓.",
        },
        {
          id: "indices-standard-form-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "standard-form-calculations",
          question: "Work out {{(6 * 10^4) * (5 * 10^5)}} and write your answer in standard form.",
          answer: { type: "number", value: 3e10, standardForm: true, display: "{{3 * 10^10}}" },
          hints: [
            "Multiply {{6 * 5 = 30}} and add powers {{4 + 5 = 9}} to get {{30 * 10^9}}.",
            "Adjust {{30 = 3 * 10^1}} and combine with {{10^9}}.",
          ],
          solution: [
            "{{30 * 10^9 = (3 * 10^1) * 10^9 = 3 * 10^10}}.",
          ],
        },
        {
          id: "indices-standard-form-p1-q13",
          kind: "short",
          difficulty: "core",
          guideRef: "standard-form-calculations",
          question: "Work out {{(3.6 * 10^7) / (9 * 10^3)}} and write your answer in standard form.",
          answer: { type: "number", value: 4e3, standardForm: true, display: "{{4 * 10^3}}" },
          hints: [
            "Divide {{3.6 / 9 = 0.4}} and subtract powers {{7 - 3 = 4}}, giving {{0.4 * 10^4}}.",
            "Rewrite {{0.4 = 4 * 10^(-1)}} and combine with {{10^4}}.",
          ],
          solution: [
            "{{(3.6 / 9) * 10^(7-3) = 0.4 * 10^4}}.",
            "Adjust: {{(4 * 10^(-1)) * 10^4 = 4 * 10^3}}.",
          ],
        },
        {
          id: "indices-standard-form-p1-q14",
          kind: "mcq",
          difficulty: "core",
          guideRef: "standard-form-calculations",
          question: "Work out {{6.8 * 10^5 - 9 * 10^4}} in standard form.",
          options: ["{{5.9 * 10^4}}", "{{5.9 * 10^5}}", "{{2.2 * 10^4}}", "{{6.71 * 10^5}}"],
          answerIndex: 1,
          hints: [
            "Rewrite {{9 * 10^4}} using {{10^5}}: {{0.9 * 10^5}}.",
            "Compute {{(6.8 - 0.9) * 10^5}}.",
          ],
          explanation:
            "{{6.8 * 10^5 - 0.9 * 10^5 = 5.9 * 10^5}} (`680,000 − 90,000 = 590,000`). Keeping {{10^4}} makes the answer ten times too small.",
        },
        {
          id: "indices-standard-form-p1-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "standard-form-calculations",
          question: "Mia evaluates {{(4 * 10^5) * (5 * 10^3)}} and writes her final answer as {{20 * 10^8}}. Explain why Mia's answer is not yet in valid standard form, describe the adjustment required, and state the correct final answer.",
          marks: 3,
          hints: [
            "Check the condition {{1 <= A < 10}} on the front number 20.",
            "Explain how dividing 20 by 10 must be balanced by increasing the power of 10 by 1.",
          ],
          modelAnswer:
            "In standard form A × 10^n, the front number must satisfy 1 ≤ A < 10 (strictly less than 10), so 20 is too big. Divide 20 by 10 to get 2 (since 20 = 2 × 10^1) and balance by adding 1 to the exponent (8 + 1 = 9), giving 2 × 10^9.",
          markScheme: [
            { point: "State that 20 fails 1 ≤ A < 10 (must be less than 10)", keywords: ["between 1 and 10", "less than 10", "1 <= a < 10", "1 ≤ a < 10", "greater than 10", "bigger than 10"] },
            { point: "Explain dividing 20 by 10 (20 = 2 × 10^1) and adding 1 to the exponent", keywords: ["divide", "add 1", "2 * 10^1", "2 × 10^1"] },
            { point: "Give the correct final answer 2 × 10^9", keywords: ["10^9", "2 * 10^9", "2 × 10^9"] },
          ],
        },
      ],
    },

    // =========================================================================
    // PRACTICE PAPER 2: EXAM-STYLE PROBLEM SOLVING
    // =========================================================================
    {
      id: "indices-standard-form-p2",
      title: "Practice Paper 2 — Exam-Style Problem Solving",
      questions: [
        {
          id: "indices-standard-form-p2-q01",
          kind: "short",
          difficulty: "core",
          guideRef: "index-laws",
          question: "Simplify {{((3x^2)^3 * 2x^4)/(6x^5)}} completely.",
          answer: { type: "expression", expr: "9x^5", form: "simplified", display: "{{9x^5}}" },
          hints: [
            "Expand {{(3x^2)^3 = 27x^6}} first, then multiply by {{2x^4}} to simplify the numerator.",
            "Divide {{54x^10}} by {{6x^5}}.",
          ],
          solution: [
            "{{(3x^2)^3 = 27x^6}}, so numerator = {{27x^6 * 2x^4 = 54x^10}}.",
            "{{(54x^10)/(6x^5) = 9x^5}}.",
          ],
        },
        {
          id: "indices-standard-form-p2-q02",
          kind: "written",
          difficulty: "core",
          guideRef: "index-laws",
          question: "A student simplifies {{2^3 * 2^5}} and writes {{4^8}}. Explain what the student did wrong, prove why {{2^3 * 2^5 = 2^8}} by counting factors, and compare the numerical values of {{2^8}} and {{4^8}}.",
          marks: 3,
          hints: [
            "Point out what happened to the base 2 — should bases be multiplied when using index laws?",
            "Write out the repeated factors of 2 and evaluate both {{2^8}} and {{4^8}}.",
          ],
          modelAnswer:
            "The student wrongly multiplied the bases together (2 × 2 = 4); when multiplying powers with the same base, the base stays 2. Expanding shows 3 factors of 2 multiplied by 5 factors of 2 gives 3 + 5 = 8 factors of 2, so 2^8. Numerically, 2^8 = 256 whereas 4^8 = 65,536.",
          markScheme: [
            { point: "Identify that the bases should not be multiplied — the base stays 2", keywords: ["multiplied the bases", "keep the base", "base stays", "base should stay"] },
            { point: "Explain by counting factors: 3 + 5 = 8 factors of 2", keywords: ["factors", "3 + 5", "3+5", "eight"] },
            { point: "Compare exact values: 2^8 = 256 vs 4^8 = 65,536", keywords: ["256", "65536", "65,536"] },
          ],
        },
        {
          id: "indices-standard-form-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "zero-negative-indices",
          question: "Evaluate {{5^(-1) + 2^(-2)}} as a fraction in its simplest form.",
          answer: { type: "fraction", n: 9, d: 20, simplest: true },
          hints: [
            "Rewrite {{5^(-1) = 1/5}} and {{2^(-2) = 1/4}}.",
            "Add {{1/5 + 1/4}} using common denominator 20.",
          ],
          solution: [
            "{{5^(-1) + 2^(-2) = 1/5 + 1/4 = 4/20 + 5/20 = 9/20}}.",
          ],
        },
        {
          id: "indices-standard-form-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "zero-negative-indices",
          question: "Solve {{4^(x + 1) = 64}} for {{x}}.",
          answer: { type: "number", value: 2 },
          hints: [
            "Write 64 as a power of 4: {{64 = 4^3}} (or rewrite both sides in base 2).",
            "Equate the exponents: {{x + 1 = 3}}.",
          ],
          solution: [
            "{{4^(x+1) = 4^3}} ⇒ {{x + 1 = 3}} ⇒ {{x = 2}}.",
          ],
        },
        {
          id: "indices-standard-form-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "zero-negative-indices",
          question: "Write {{(27^2 * 9^3) / 3^4}} as a single power of 3 in the form {{3^k}}. Find the value of {{k}}.",
          answer: { type: "number", value: 8 },
          hints: [
            "Rewrite {{27 = 3^3}} and {{9 = 3^2}} so every term has base 3.",
            "Numerator becomes {{(3^3)^2 * (3^2)^3 = 3^6 * 3^6 = 3^12}}, then divide by {{3^4}}.",
          ],
          solution: [
            "{{27^2 = (3^3)^2 = 3^6}} and {{9^3 = (3^2)^3 = 3^6}}.",
            "{{(3^6 * 3^6) / 3^4 = 3^12 / 3^4 = 3^8}}, so {{k = 8}}.",
          ],
        },
        {
          id: "indices-standard-form-p2-q06",
          kind: "mcq",
          difficulty: "core",
          guideRef: "zero-negative-indices",
          question: "Write {{1 / 16^2}} as a single power of 2.",
          options: ["{{2^8}}", "{{2^(-4)}}", "{{2^(-6)}}", "{{2^(-8)}}"],
          answerIndex: 3,
          hints: [
            "First express {{16^2}} in base 2: {{(2^4)^2 = 2^8}}.",
            "Now apply {{1 / 2^n = 2^(-n)}}.",
          ],
          explanation:
            "{{16^2 = (2^4)^2 = 2^8}}, so {{1 / 16^2 = 1 / 2^8 = 2^(-8)}}. Adding {{4 + 2 = 6}} wrongly yields {{2^(-6)}}.",
        },
        {
          id: "indices-standard-form-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "standard-form-conversions",
          question: "Rewrite {{0.048 * 10^6}} in valid standard form.",
          answer: { type: "number", value: 4.8e4, standardForm: true, display: "{{4.8 * 10^4}}" },
          hints: [
            "Write `0.048` itself in standard form: {{4.8 * 10^(-2)}}.",
            "Combine {{(4.8 * 10^(-2)) * 10^6}} by adding the indices.",
          ],
          solution: [
            "{{0.048 * 10^6 = (4.8 * 10^(-2)) * 10^6 = 4.8 * 10^4}}.",
          ],
        },
        {
          id: "indices-standard-form-p2-q08",
          kind: "mcq",
          difficulty: "core",
          guideRef: "standard-form-conversions",
          question: "Which list puts {{5.2 * 10^(-4)}}, {{8.9 * 10^(-5)}} and {{1.1 * 10^(-3)}} in order from **smallest to largest**?",
          options: [
            "{{8.9 * 10^(-5)}}, {{5.2 * 10^(-4)}}, {{1.1 * 10^(-3)}}",
            "{{1.1 * 10^(-3)}}, {{5.2 * 10^(-4)}}, {{8.9 * 10^(-5)}}",
            "{{5.2 * 10^(-4)}}, {{8.9 * 10^(-5)}}, {{1.1 * 10^(-3)}}",
            "{{1.1 * 10^(-3)}}, {{8.9 * 10^(-5)}}, {{5.2 * 10^(-4)}}",
          ],
          answerIndex: 0,
          hints: [
            "Order the exponents from most negative to least negative: {{ -5 < -4 < -3 }}.",
            "Ignore the front numbers because all three powers of 10 are different.",
          ],
          explanation:
            "Since {{ -5 < -4 < -3 }}, the ascending order is {{8.9 * 10^(-5)}} (`0.000089`), {{5.2 * 10^(-4)}} (`0.00052`), then {{1.1 * 10^(-3)}} (`0.0011`).",
        },
        {
          id: "indices-standard-form-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "standard-form-calculations",
          question: "Work out {{(3.5 * 10^(-3)) * (4 * 10^(-2))}} and write your answer in standard form.",
          answer: { type: "number", value: 1.4e-4, standardForm: true, display: "{{1.4 * 10^(-4)}}" },
          hints: [
            "Multiply {{3.5 * 4 = 14}} and add exponents {{ -3 + (-2) = -5 }}, giving {{14 * 10^(-5)}}.",
            "Rewrite {{14 = 1.4 * 10^1}} and compute {{1 + (-5) = -4}} carefully!",
          ],
          solution: [
            "{{(3.5 * 4) * 10^(-3 + (-2)) = 14 * 10^(-5)}}.",
            "Adjust: {{(1.4 * 10^1) * 10^(-5) = 1.4 * 10^(-4)}}.",
          ],
        },
        {
          id: "indices-standard-form-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "standard-form-calculations",
          question: "Work out {{(4.5 * 10^5) / (9 * 10^(-2))}} and write your answer in standard form.",
          answer: { type: "number", value: 5e6, standardForm: true, display: "{{5 * 10^6}}" },
          hints: [
            "Divide {{4.5 / 9 = 0.5}} and carefully subtract powers: {{5 - (-2) = 7}}.",
            "Adjust {{0.5 * 10^7 = (5 * 10^(-1)) * 10^7}}.",
          ],
          solution: [
            "{{(4.5 / 9) * 10^(5 - (-2)) = 0.5 * 10^7}}.",
            "Adjust: {{(5 * 10^(-1)) * 10^7 = 5 * 10^6}}.",
          ],
        },
        {
          id: "indices-standard-form-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "standard-form-calculations",
          question: "Work out {{2.7 * 10^6 + 4.5 * 10^5}} and write your answer in standard form.",
          answer: { type: "number", value: 3.15e6, standardForm: true, display: "{{3.15 * 10^6}}" },
          hints: [
            "Rewrite {{4.5 * 10^5}} with {{10^6}}: {{0.45 * 10^6}}.",
            "Add {{2.7 + 0.45}} and keep {{10^6}}.",
          ],
          solution: [
            "{{2.7 * 10^6 + 0.45 * 10^6 = 3.15 * 10^6}}.",
          ],
        },
        {
          id: "indices-standard-form-p2-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "standard-form-calculations",
          question: "Work out {{6.2 * 10^(-3) - 4 * 10^(-4)}} and write your answer in standard form.",
          answer: { type: "number", value: 5.8e-3, standardForm: true, display: "{{5.8 * 10^(-3)}}" },
          hints: [
            "Match both terms to the larger power {{10^(-3)}}: {{4 * 10^(-4) = 0.4 * 10^(-3)}}.",
            "Subtract {{6.2 - 0.4}}.",
          ],
          solution: [
            "{{6.2 * 10^(-3) - 0.4 * 10^(-3) = 5.8 * 10^(-3)}}.",
          ],
        },
        {
          id: "indices-standard-form-p2-q13",
          kind: "mcq",
          difficulty: "core",
          guideRef: "standard-form-calculations",
          question: "A virus is {{2 * 10^(-7)}} m long and a bacterium is {{4 * 10^(-6)}} m long. How many times longer is the bacterium than the virus?",
          options: ["2 times", "5 times", "20 times", "200 times"],
          answerIndex: 2,
          hints: [
            "Divide the bacterium's length by the virus's length: {{(4 * 10^(-6)) / (2 * 10^(-7))}}.",
            "Watch the double negative in the exponent: {{ -6 - (-7) = +1 }}.",
          ],
          explanation:
            "{{(4 / 2) * 10^(-6 - (-7)) = 2 * 10^1 = 20}} times longer. Missing the sign change in {{ -6 - (-7) }} gives the wrong factor.",
        },
        {
          id: "indices-standard-form-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "zero-negative-indices",
          question: "Show step-by-step how to solve {{8^x = 1/32}} using a common base.",
          marks: 3,
          hints: [
            "Express both 8 and {{1/32}} as powers of **2**.",
            "Equate the exponents once both sides have base 2, then solve the linear equation.",
          ],
          modelAnswer:
            "Rewrite both sides in base 2: since 8 = 2^3 and 32 = 2^5, we get (2^3)^x = 2^(-5), which simplifies to 2^(3x) = 2^(-5). Equating exponents gives 3x = -5, so x = -5/3.",
          markScheme: [
            { point: "Rewrite both sides in base 2: 2^(3x) and 2^(-5)", keywords: ["2^(3x)", "2^3", "2^(-5)"] },
            { point: "Equate the exponents: 3x = -5", keywords: ["3x = -5", "3x=-5", "equate"] },
            { point: "Solve to get x = -5/3", keywords: ["-5/3"] },
          ],
        },
        {
          id: "indices-standard-form-p2-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "standard-form-calculations",
          question: "Explain why {{3 * 10^5 + 4 * 10^4}} does NOT equal {{7 * 10^9}} or {{7 * 10^5}}, and find the correct sum in standard form.",
          marks: 3,
          hints: [
            "Explain why different powers of 10 cannot be added directly (compare place values or like terms).",
            "Rewrite {{4 * 10^4}} with {{10^5}} (or convert both to ordinary numbers) and find the exact standard form sum.",
          ],
          modelAnswer:
            "You cannot add exponents when adding numbers, and 3 and 4 cannot be added directly because 10^5 and 10^4 represent different place values (powers of 10 must match first). Rewriting 4 × 10^4 = 0.4 × 10^5 (or 300,000 + 40,000 = 340,000) gives 3.4 × 10^5.",
          markScheme: [
            { point: "Explain powers of 10 represent different place values and must match before adding", keywords: ["match", "place value", "like terms", "different powers"] },
            { point: "Convert to common power 0.4 × 10^5 or ordinary numbers 300,000 + 40,000", keywords: ["0.4", "300,000", "300000", "40,000", "40000"] },
            { point: "State the exact standard form result 3.4 × 10^5", keywords: ["3.4 * 10^5", "3.4 × 10^5", "340,000", "340000"] },
          ],
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 AoPS-style problems, ALL difficulty: "challenge")
  // =========================================================================
  challenge: [
    {
      id: "indices-standard-form-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "index-laws",
      question: "Express {{4^10 + 4^10 + 4^10 + 4^10}} as a single power of 2 in the form {{2^n}}. Find the value of {{n}}.",
      answer: { type: "number", value: 22 },
      traps: [
        { spec: { type: "number", value: 80 }, feedback: "Adding four identical powers multiplies by 4 ({{4 * 4^10 = 4^11}}), rather than adding the exponents!" },
      ],
      hints: [
        "Notice you are **adding** 4 identical copies of {{4^10}}, which equals {{4 * 4^10}}.",
        "Simplify {{4^1 * 4^10 = 4^11}}.",
        "Change base from 4 to 2: {{4^11 = (2^2)^11}}.",
      ],
      strategy: "Factor out identical powers, then change base",
      solution: [
        "Four copies of {{4^10}} equal {{4 * 4^10 = 4^11}}.",
        "Rewrite 4 as {{2^2}}: {{(2^2)^11 = 2^22}}, so {{n = 22}}.",
      ],
    },
    {
      id: "indices-standard-form-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "index-laws",
      question: "Simplify {{((2x^3y^(-1))^4) / (8x^5y^(-7))}} completely, writing your answer with positive indices.",
      answer: { type: "expression", expr: "2x^7y^3", form: "simplified", display: "{{2x^7y^3}}" },
      hints: [
        "Raise every factor in the numerator bracket to the power 4: {{2^4 * (x^3)^4 * (y^(-1))^4}}.",
        "Numerator simplifies to {{16x^12y^(-4)}}.",
        "Divide coefficients ({{16/8 = 2}}) and subtract exponents carefully: {{y^(-4 - (-7)) = y^3}}.",
      ],
      strategy: "Expand brackets first, then apply division law carefully",
      solution: [
        "Numerator: {{2^4 * x^(3*4) * y^(-1*4) = 16x^12y^(-4)}}.",
        "Divide by {{8x^5y^(-7)}}: {{16/8 = 2}}, {{x^(12-5) = x^7}}, {{y^(-4 - (-7)) = y^3}}.",
        "Simplified answer: {{2x^7y^3}}.",
      ],
    },
    {
      id: "indices-standard-form-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "zero-negative-indices",
      question: "Solve {{8^(x - 1) * 4^(x + 2) = 8^7}} for {{x}}.",
      answer: { type: "number", value: 4 },
      hints: [
        "Convert every term to base 2: {{8 = 2^3}} and {{4 = 2^2}}.",
        "Remember to multiply the whole bracketed exponent: {{(2^3)^(x-1) = 2^(3x-3)}} and {{(2^2)^(x+2) = 2^(2x+4)}}.",
        "Combine left exponents ({{5x + 1}}) and equate to the right exponent ({{3 * 7 = 21}}).",
      ],
      strategy: "Change every base to the same prime",
      solution: [
        "In base 2: {{2^(3(x - 1)) * 2^(2(x + 2)) = 2^(3 * 7)}}.",
        "{{2^(3x - 3 + 2x + 4) = 2^21}} ⇒ {{2^(5x + 1) = 2^21}}.",
        "Equate exponents: {{5x + 1 = 21}} ⇒ {{5x = 20}} ⇒ {{x = 4}}.",
      ],
    },
    {
      id: "indices-standard-form-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "zero-negative-indices",
      question: "Evaluate {{(3^(-2) + 3^(-1)) / (2^(-2))}} as an improper fraction in its simplest form.",
      answer: { type: "fraction", n: 16, d: 9, simplest: true, form: "improper" },
      hints: [
        "Convert every negative power to an ordinary fraction first: {{1/9}}, {{1/3}} and {{1/4}}.",
        "Add the numerator fractions: {{1/9 + 3/9 = 4/9}}.",
        "Divide {{4/9}} by {{1/4}} (equivalent to multiplying by 4).",
      ],
      strategy: "Convert negative indices to fractions first",
      solution: [
        "Numerator = {{1/9 + 1/3 = 1/9 + 3/9 = 4/9}}.",
        "Denominator = {{1/4}}.",
        "{{(4/9) ÷ (1/4) = (4/9) * 4 = 16/9}}.",
      ],
    },
    {
      id: "indices-standard-form-ch-q05",
      kind: "written",
      difficulty: "challenge",
      guideRef: "zero-negative-indices",
      question: "Prove algebraically without a calculator that {{2^100 - 2^99 - 2^98 = 2^98}}.",
      marks: 4,
      hints: [
        "Factor out the smallest power of 2 present in all three terms ({{2^98}}).",
        "Rewrite {{2^100 = 2^2 * 2^98}} and {{2^99 = 2^1 * 2^98}} inside the bracket.",
        "Evaluate the arithmetic inside the bracket!",
      ],
      strategy: "Factor out the smallest power",
      modelAnswer:
        "Factor out the smallest power 2^98 from all three terms: 2^98(2^2 - 2^1 - 1) = 2^98(4 - 2 - 1). Inside the bracket, 4 - 2 - 1 equals 1, giving 1 × 2^98, leaving 2^98.",
      markScheme: [
        { point: "Factor out the common power 2^98", keywords: ["factor", "2^98("] },
        { point: "Express inside bracket as 2^2 − 2^1 − 1 or 4 − 2 − 1", keywords: ["4 - 2 - 1", "4-2-1", "2^2", "4 * 2^98", "4 × 2^98"] },
        { point: "Simplify the bracket to 1", keywords: ["= 1", "equals 1", "is 1"] },
        { point: "Conclude 1 × 2^98 = 2^98", keywords: ["1 * 2^98", "1 × 2^98", "leaving 2^98", "gives 2^98"] },
      ],
    },
    {
      id: "indices-standard-form-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "standard-form-conversions",
      question: "Without a calculator, write {{N = 2^7 * 5^5}} in standard form.",
      answer: { type: "number", value: 4e5, standardForm: true, display: "{{4 * 10^5}}" },
      hints: [
        "Remember {{2 * 5 = 10}}, so every matching pair of one 2 and one 5 builds a factor of 10!",
        "Split {{2^7 = 2^2 * 2^5}} so you can pair {{2^5 * 5^5 = (2 * 5)^5 = 10^5}}.",
      ],
      strategy: "Pair factors of 2 and 5 into powers of 10",
      solution: [
        "Split {{2^7 = 2^2 * 2^5}}.",
        "{{N = 2^2 * (2^5 * 5^5) = 4 * (2 * 5)^5 = 4 * 10^5}}.",
      ],
    },
    {
      id: "indices-standard-form-ch-q07",
      kind: "short",
      difficulty: "challenge",
      guideRef: "standard-form-calculations",
      question: "Given {{p = 3 * 10^4}} and {{q = 5 * 10^(-2)}}, calculate {{p^2 / q}} and give your answer in standard form.",
      answer: { type: "number", value: 1.8e10, standardForm: true, display: "{{1.8 * 10^10}}" },
      hints: [
        "First square {{p}}: {{(3 * 10^4)^2 = 9 * 10^8}}.",
        "Divide {{9 * 10^8}} by {{5 * 10^(-2)}}: divide {{9 / 5 = 1.8}} and subtract {{8 - (-2)}}.",
      ],
      strategy: "Apply powers first, then divide in standard form",
      solution: [
        "{{p^2 = (3 * 10^4)^2 = 9 * 10^8}}.",
        "{{p^2 / q = (9 * 10^8) / (5 * 10^(-2)) = (9/5) * 10^(8 - (-2)) = 1.8 * 10^10}}.",
      ],
    },
    {
      id: "indices-standard-form-ch-q08",
      kind: "short",
      difficulty: "challenge",
      guideRef: "standard-form-calculations",
      question: "Planet A has mass {{4.2 * 10^24}} kg and Planet B has mass {{6 * 10^23}} kg. Their **combined** mass is divided into {{8 * 10^18}} equal units. Find the mass of one unit in standard form (in kg).",
      answer: { type: "number", value: 6e5, standardForm: true, display: "{{6 * 10^5}}" },
      hints: [
        "First match powers of 10 to add the two masses: {{6 * 10^23 = 0.6 * 10^24}}.",
        "Combined mass = {{4.8 * 10^24}} kg.",
        "Divide {{4.8 * 10^24}} by {{8 * 10^18}} to get {{0.6 * 10^6}}, then adjust into standard form!",
      ],
      strategy: "Match powers to add, then divide and adjust",
      solution: [
        "Combined mass = {{4.2 * 10^24 + 0.6 * 10^24 = 4.8 * 10^24}} kg.",
        "Mass per unit = {{(4.8 * 10^24) / (8 * 10^18) = 0.6 * 10^6}} kg.",
        "Adjust into standard form: {{(6 * 10^(-1)) * 10^6 = 6 * 10^5}} kg.",
      ],
    },
  ],
};
