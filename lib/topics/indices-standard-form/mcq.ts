import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // MCQ PAPER 1: CORE FLUENCY
  // =========================================================================
  {
    id: "indices-standard-form-m1",
    title: "MCQ Paper 1 — Core Fluency",
    questions: [
      {
        id: "indices-standard-form-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "index-laws",
        question: "Simplify {{x^5 * x^3}}.",
        options: ["{{x^8}}", "{{x^15}}", "{{2x^8}}", "{{x^2}}"],
        answerIndex: 0,
        hints: [
          "When multiplying powers with the same base, keep the base and **add** the indices.",
        ],
        explanation:
          "{{x^5 * x^3 = x^(5+3) = x^8}}. Multiplying the exponents wrongly gives {{x^15}}, and there is no coefficient 2 in front of {{x^8}}.",
      },
      {
        id: "indices-standard-form-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "index-laws",
        question: "Simplify {{y^9 / y^3}}.",
        options: ["{{y^3}}", "{{y^6}}", "{{y^12}}", "{{3y^3}}"],
        answerIndex: 1,
        hints: [
          "When dividing powers with the same base, **subtract** the bottom index from the top index.",
        ],
        explanation:
          "{{y^9 / y^3 = y^(9-3) = y^6}}. Dividing the exponents ({{9 / 3 = 3}}) is a classic error — only subtract them!",
      },
      {
        id: "indices-standard-form-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "index-laws",
        question: "Simplify {{(p^4)^3}}.",
        options: ["{{p^7}}", "{{3p^4}}", "{{p^12}}", "{{p^64}}"],
        answerIndex: 2,
        hints: [
          "{{(p^4)^3}} means {{p^4 * p^4 * p^4}} — multiply the exponents together.",
        ],
        explanation:
          "{{(p^4)^3 = p^(4*3) = p^12}}. Adding the exponents gives {{p^7}} (that would be {{p^4 * p^3}}), while {{p^64}} wrongly computes {{4^3}}.",
      },
      {
        id: "indices-standard-form-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "index-laws",
        question: "Simplify {{(2a^3)^3}} completely.",
        options: ["{{6a^9}}", "{{2a^9}}", "{{8a^6}}", "{{8a^9}}"],
        answerIndex: 3,
        hints: [
          "Apply the cube (power 3) to BOTH the number 2 AND {{a^3}}.",
          "Remember {{2^3 = 2 * 2 * 2 = 8}} (not {{2 * 3 = 6}}!).",
        ],
        explanation:
          "{{(2a^3)^3 = 2^3 * (a^3)^3 = 8a^9}}. Multiplying {{2 * 3 = 6}} or leaving 2 untouched are the two most frequent exam slips.",
      },
      {
        id: "indices-standard-form-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "zero-negative-indices",
        question: "What is the value of {{9^0}}?",
        options: ["1", "0", "9", "−1"],
        answerIndex: 0,
        hints: [
          "Recall the zero-index rule: {{a^0 = a^n / a^n}} for any non-zero {{a}}.",
        ],
        explanation:
          "Any non-zero number raised to the power 0 equals **1**, because {{9^0 = 9^2 / 9^2 = 81 / 81 = 1}}. It is never 0.",
      },
      {
        id: "indices-standard-form-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "zero-negative-indices",
        question: "Evaluate {{5^(-2)}} as an exact value.",
        options: ["−25", "{{1/25}}", "−10", "{{1/10}}"],
        answerIndex: 1,
        hints: [
          "A negative index means reciprocal: {{a^(-n) = 1/(a^n)}}.",
        ],
        explanation:
          "{{5^(-2) = 1/(5^2) = 1/25}}. A negative power never creates a negative number like −25 or −10.",
      },
      {
        id: "indices-standard-form-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "zero-negative-indices",
        question: "Write {{8^5}} as a single power of 2.",
        options: ["{{2^8}}", "{{2^10}}", "{{2^15}}", "{{2^24}}"],
        answerIndex: 2,
        hints: [
          "Rewrite 8 as a power of 2: {{8 = 2^3}}.",
          "Substitute into {{(2^3)^5}} and multiply the indices.",
        ],
        explanation:
          "{{8^5 = (2^3)^5 = 2^(3*5) = 2^15}}. Adding the exponents ({{3 + 5 = 8}}) wrongly gives {{2^8}}.",
      },
      {
        id: "indices-standard-form-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "zero-negative-indices",
        question: "Evaluate {{6x^0}} (where {{x != 0}}).",
        options: ["0", "1", "{{6x}}", "6"],
        answerIndex: 3,
        hints: [
          "Look carefully at brackets: only {{x}} has the power 0, NOT the 6.",
          "Replace {{x^0}} with 1, then multiply by 6.",
        ],
        explanation:
          "Because there are no brackets around {{6x}}, the power 0 applies only to {{x}}: {{6 * x^0 = 6 * 1 = 6}}. By contrast, {{(6x)^0}} would equal 1.",
      },
      {
        id: "indices-standard-form-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "standard-form-conversions",
        question: "Which of these numbers is written in **valid standard form**?",
        options: ["{{3.4 * 10^5}}", "{{34 * 10^4}}", "{{0.34 * 10^6}}", "{{3.4 * 5^10}}"],
        answerIndex: 0,
        hints: [
          "Standard form must look like {{A * 10^n}} with {{1 <= A < 10}} and base 10.",
        ],
        explanation:
          "{{3.4 * 10^5}} has base 10 and {{1 <= 3.4 < 10}}. Both 34 and 0.34 lie outside {{[1, 10)}}, and {{5^10}} uses the wrong base.",
      },
      {
        id: "indices-standard-form-m1-q10",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "standard-form-conversions",
        question: "Write `82,000` in standard form.",
        options: ["{{8.2 * 10^3}}", "{{8.2 * 10^4}}", "{{82 * 10^3}}", "{{8.2 * 10^5}}"],
        answerIndex: 1,
        hints: [
          "Place the decimal point after the 8 to get 8.2, then count how many places it moved left from `82,000.`.",
        ],
        explanation:
          "The decimal point shifts 4 places left from `82,000.` to `8.2`, giving {{8.2 * 10^4}}. Counting only the 3 trailing zeros wrongly produces {{10^3}}.",
      },
      {
        id: "indices-standard-form-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "standard-form-conversions",
        question: "Write `0.00059` in standard form.",
        options: ["{{5.9 * 10^(-3)}}", "{{5.9 * 10^(-5)}}", "{{5.9 * 10^(-4)}}", "{{59 * 10^(-5)}}"],
        answerIndex: 2,
        hints: [
          "This number is smaller than 1, so the power of 10 is negative.",
          "Count how many places the decimal point shifts right to sit after the 5 (matching the 4 leading zeros in `0.00059`).",
        ],
        explanation:
          "Moving the decimal point 4 places right gives 5.9, so `0.00059` = {{5.9 * 10^(-4)}}. Counting only the 3 zeros after the decimal point is a common trap.",
      },
      {
        id: "indices-standard-form-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "standard-form-conversions",
        question: "Convert {{4.07 * 10^(-3)}} into an ordinary decimal.",
        options: ["0.000407", "0.0407", "−4,070", "0.00407"],
        answerIndex: 3,
        hints: [
          "Multiplying by {{10^(-3)}} shifts the decimal point 3 places to the **left**.",
          "Check: a power of {{ -3 }} produces 3 leading zeros before the 4 (including the `0.` at the front).",
        ],
        explanation:
          "Shifting the decimal point 3 places left turns 4.07 into `0.00407`. Remember a negative exponent makes a small positive decimal, never a negative number like −4,070.",
      },
      {
        id: "indices-standard-form-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "standard-form-calculations",
        question: "Work out {{(2 * 10^4) * (3 * 10^5)}} in standard form.",
        options: ["{{6 * 10^9}}", "{{6 * 10^20}}", "{{5 * 10^9}}", "{{6 * 10^10}}"],
        answerIndex: 0,
        hints: [
          "Multiply the front numbers ({{2 * 3}}) and add the powers of 10 ({{4 + 5}}).",
          "Check whether the front number is already between 1 and 10.",
        ],
        explanation:
          "{{2 * 3 = 6}} and {{10^4 * 10^5 = 10^9}}, giving {{6 * 10^9}}. Multiplying the exponents wrongly produces {{10^20}}, and adding 2 + 3 wrongly gives 5.",
      },
      {
        id: "indices-standard-form-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "standard-form-calculations",
        question: "Work out {{(8 * 10^7) / (2 * 10^3)}} in standard form.",
        options: ["{{4 * 10^10}}", "{{4 * 10^4}}", "{{6 * 10^4}}", "{{4 * 10^21}}"],
        answerIndex: 1,
        hints: [
          "Divide the front numbers ({{8 / 2}}) and subtract the powers of 10 ({{7 - 3}}).",
          "Verify {{1 <= 4 < 10}} so no final adjustment is needed.",
        ],
        explanation:
          "{{8 / 2 = 4}} and {{10^7 / 10^3 = 10^(7-3) = 10^4}}, giving {{4 * 10^4}}. Subtracting the front numbers ({{8 - 2 = 6}}) or adding the powers are common slips.",
      },
      {
        id: "indices-standard-form-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "standard-form-calculations",
        question: "Adjust {{45 * 10^6}} into valid standard form.",
        options: ["{{4.5 * 10^5}}", "{{0.45 * 10^8}}", "{{4.5 * 10^7}}", "{{4.5 * 10^8}}"],
        answerIndex: 2,
        hints: [
          "Rewrite 45 itself in standard form: {{45 = 4.5 * 10^1}}.",
          "Combine {{(4.5 * 10^1) * 10^6}} by adding the powers of 10.",
        ],
        explanation:
          "{{45 * 10^6 = (4.5 * 10^1) * 10^6 = 4.5 * 10^7}}. Dividing 45 by 10 must be balanced by multiplying {{10^6}} by 10 (raising the power to 7, not lowering it to 5).",
      },
    ],
  },

  // =========================================================================
  // MCQ PAPER 2: EXAM APPLICATIONS
  // =========================================================================
  {
    id: "indices-standard-form-m2",
    title: "MCQ Paper 2 — Exam Applications",
    questions: [
      {
        id: "indices-standard-form-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "index-laws",
        question: "Simplify {{(4x^3y^2) * (5x^4y)}}.",
        options: ["{{9x^7y^3}}", "{{20x^12y^2}}", "{{20x^7y^2}}", "{{20x^7y^3}}"],
        answerIndex: 3,
        hints: [
          "Multiply the coefficients ({{4 * 5}}) and add powers for each letter separately.",
          "Remember that {{y}} on its own means {{y^1}}!",
        ],
        explanation:
          "{{4 * 5 = 20}}, {{x^(3+4) = x^7}}, and {{y^(2+1) = y^3}}, giving {{20x^7y^3}}. Forgetting the hidden index 1 on {{y}} wrongly leaves {{y^2}}.",
      },
      {
        id: "indices-standard-form-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "index-laws",
        question: "Simplify {{(18m^8n^5)/(6m^2n^2)}}.",
        options: ["{{3m^6n^3}}", "{{3m^4n^3}}", "{{12m^6n^3}}", "{{3m^10n^7}}"],
        answerIndex: 0,
        hints: [
          "Divide the numbers ({{18 / 6 = 3}}), then subtract the indices of {{m}} and {{n}}.",
          "Check carefully: {{m^8 / m^2 = m^(8-2)}} (not {{m^(8/2)}}!).",
        ],
        explanation:
          "{{18 / 6 = 3}}, {{m^(8-2) = m^6}}, and {{n^(5-2) = n^3}}, giving {{3m^6n^3}}. Dividing 8 by 2 wrongly produces {{m^4}}, while subtracting 18 − 6 wrongly gives 12.",
      },
      {
        id: "indices-standard-form-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "index-laws",
        question: "Simplify {{(5p^2q^4)^2}}.",
        options: ["{{10p^4q^8}}", "{{25p^4q^8}}", "{{5p^4q^8}}", "{{25p^4q^6}}"],
        answerIndex: 1,
        hints: [
          "Square every factor inside the bracket: {{5^2}}, {{(p^2)^2}}, and {{(q^4)^2}}.",
          "Multiply the powers of {{p}} and {{q}} by 2.",
        ],
        explanation:
          "{{5^2 = 25}}, {{(p^2)^2 = p^4}}, and {{(q^4)^2 = q^8}}, giving {{25p^4q^8}}. Doubling 5 to get 10 instead of squaring 5 is a very common error.",
      },
      {
        id: "indices-standard-form-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "zero-negative-indices",
        question: "Evaluate {{(3/4)^(-2)}} as a fraction.",
        options: ["{{ -9/16}}", "{{9/16}}", "{{16/9}}", "{{8/6}}"],
        answerIndex: 2,
        hints: [
          "A negative index flips a fraction upside down: {{(3/4)^(-2) = (4/3)^2}}.",
          "Now square both the numerator 4 and the denominator 3.",
        ],
        explanation:
          "Flipping the fraction removes the minus in the exponent: {{(4/3)^2 = 16/9}}. A negative exponent never puts a minus sign in front of {{9/16}}.",
      },
      {
        id: "indices-standard-form-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "zero-negative-indices",
        question: "Write {{1/27}} as a single power of 3.",
        options: ["{{3^3}}", "{{ -3^3}}", "{{3^(-9)}}", "{{3^(-3)}}"],
        answerIndex: 3,
        hints: [
          "First write 27 as a power of 3: {{27 = 3^3}}.",
          "Now apply the reciprocal rule {{1/(a^n) = a^(-n)}}.",
        ],
        explanation:
          "Since {{27 = 3^3}}, its reciprocal {{1/27 = 1/(3^3) = 3^(-3)}}. Remember {{ -3^3 = -27}}, which is completely different from {{1/27}}.",
      },
      {
        id: "indices-standard-form-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "zero-negative-indices",
        question: "Write {{16^3 * 4^2}} as a single power of 2.",
        options: ["{{2^16}}", "{{2^10}}", "{{2^48}}", "{{2^11}}"],
        answerIndex: 0,
        hints: [
          "Change both 16 and 4 into powers of 2: {{16 = 2^4}} and {{4 = 2^2}}.",
          "Simplify {{(2^4)^3 * (2^2)^2}} using power-of-a-power, then add the exponents.",
        ],
        explanation:
          "{{(2^4)^3 * (2^2)^2 = 2^12 * 2^4 = 2^(12+4) = 2^16}}. Multiplying 12 and 4 instead of adding wrongly yields {{2^48}}.",
      },
      {
        id: "indices-standard-form-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "zero-negative-indices",
        question: "Find the value of {{n}} if {{3^n = 9^5}}.",
        options: ["7", "10", "15", "25"],
        answerIndex: 1,
        hints: [
          "Rewrite 9 as {{3^2}} so both sides have the same base 3.",
          "Simplify {{(3^2)^5}} and compare exponents on both sides.",
        ],
        explanation:
          "{{9^5 = (3^2)^5 = 3^10}}, so {{3^n = 3^10}} ⇒ {{n = 10}}. Adding 2 + 5 = 7 confuses the power-of-a-power rule with the multiplication rule.",
      },
      {
        id: "indices-standard-form-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "standard-form-conversions",
        question: "Which of these four numbers is the **smallest**?",
        options: ["{{8.9 * 10^(-5)}}", "{{1.4 * 10^(-4)}}", "{{6.2 * 10^(-6)}}", "{{2.1 * 10^(-5)}}"],
        answerIndex: 2,
        hints: [
          "Compare the powers of 10 FIRST — ignore the front numbers until powers tie.",
          "Which negative integer is smallest: −4, −5 or −6?",
        ],
        explanation:
          "Since {{ -6 < -5 < -4 }}, {{6.2 * 10^(-6)}} (= `0.0000062`) is ten times smaller than anything with {{10^(-5)}} and over twenty times smaller than {{1.4 * 10^(-4)}}.",
      },
      {
        id: "indices-standard-form-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "standard-form-conversions",
        question: "Rewrite {{0.072 * 10^(-3)}} in valid standard form.",
        options: ["{{7.2 * 10^(-1)}}", "{{7.2 * 10^(-4)}}", "{{7.2 * 10^(-6)}}", "{{7.2 * 10^(-5)}}"],
        answerIndex: 3,
        hints: [
          "First write `0.072` itself in standard form: {{7.2 * 10^(-2)}}.",
          "Now combine {{(7.2 * 10^(-2)) * 10^(-3)}} by adding the indices.",
        ],
        explanation:
          "{{0.072 = 7.2 * 10^(-2)}}, so {{7.2 * 10^(-2) * 10^(-3) = 7.2 * 10^(-5)}}. Adding 2 instead of subtracting 2 wrongly shifts the power up to {{10^(-1)}}.",
      },
      {
        id: "indices-standard-form-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "standard-form-conversions",
        question: "Write `4.5 million` in standard form.",
        options: ["{{4.5 * 10^6}}", "{{4.5 * 10^5}}", "{{45 * 10^5}}", "{{4.5 * 10^7}}"],
        answerIndex: 0,
        hints: [
          "One million is `1,000,000` = {{10^6}}.",
          "Check that 4.5 already satisfies {{1 <= 4.5 < 10}}.",
        ],
        explanation:
          "Since 1 million = {{10^6}}, `4.5 million` = {{4.5 * 10^6}}. Note that {{45 * 10^5}} has the same value but fails the rule {{1 <= A < 10}}.",
      },
      {
        id: "indices-standard-form-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "standard-form-calculations",
        question: "Work out {{(5 * 10^6) * (4 * 10^3)}} and give your answer in standard form.",
        options: ["{{2 * 10^9}}", "{{2 * 10^10}}", "{{2 * 10^8}}", "{{20 * 10^9}}"],
        answerIndex: 1,
        hints: [
          "Multiply the front numbers ({{5 * 4 = 20}}) and add the powers ({{6 + 3 = 9}}).",
          "Adjust {{20 * 10^9}} by replacing {{20 = 2 * 10^1}}.",
        ],
        explanation:
          "{{20 * 10^9 = (2 * 10^1) * 10^9 = 2 * 10^10}}. Leaving {{20 * 10^9}} is incomplete because 20 ≥ 10, while {{2 * 10^8}} adjusts the exponent in the wrong direction.",
      },
      {
        id: "indices-standard-form-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "standard-form-calculations",
        question: "Work out {{(3 * 10^5) / (6 * 10^2)}} and give your answer in standard form.",
        options: ["{{0.5 * 10^3}}", "{{5 * 10^4}}", "{{5 * 10^2}}", "{{2 * 10^3}}"],
        answerIndex: 2,
        hints: [
          "Divide {{3 / 6 = 0.5}} and subtract powers {{5 - 2 = 3}}, giving {{0.5 * 10^3}}.",
          "Rewrite {{0.5 = 5 * 10^(-1)}} and combine with {{10^3}}.",
        ],
        explanation:
          "{{(3/6) * 10^(5-2) = 0.5 * 10^3 = (5 * 10^(-1)) * 10^3 = 5 * 10^2}} (= 500). Check: `300,000 ÷ 600 = 500` ✓. Multiplying 0.5 by 10 requires lowering the power from 3 to 2, not raising it to 4.",
      },
      {
        id: "indices-standard-form-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "standard-form-calculations",
        question: "Work out {{(8 * 10^4) / (2 * 10^(-3))}} in standard form.",
        options: ["{{4 * 10^1}}", "{{4 * 10^(-1)}}", "{{4 * 10^(-7)}}", "{{4 * 10^7}}"],
        answerIndex: 3,
        hints: [
          "Divide {{8 / 2 = 4}}, then carefully subtract the exponents: {{4 - (-3)}}.",
          "Remember subtracting a negative adds: {{4 - (-3) = 4 + 3}}.",
        ],
        explanation:
          "{{8 / 2 = 4}} and {{10^4 / 10^(-3) = 10^(4 - (-3)) = 10^7}}, giving {{4 * 10^7}}. Computing {{4 - 3 = 1}} misses the double negative.",
      },
      {
        id: "indices-standard-form-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "standard-form-calculations",
        question: "Work out {{4.3 * 10^5 + 6 * 10^4}} in standard form.",
        options: ["{{4.9 * 10^5}}", "{{1.03 * 10^10}}", "{{1.03 * 10^6}}", "{{4.9 * 10^9}}"],
        answerIndex: 0,
        hints: [
          "You cannot add front numbers directly when the powers of 10 differ!",
          "Rewrite {{6 * 10^4}} as {{0.6 * 10^5}}, then add {{4.3 + 0.6}}.",
        ],
        explanation:
          "{{4.3 * 10^5 + 0.6 * 10^5 = 4.9 * 10^5}} (check: `430,000 + 60,000 = 490,000`). Adding 4.3 + 6 = 10.3 wrongly treats {{10^5}} and {{10^4}} as equal units.",
      },
      {
        id: "indices-standard-form-m2-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "standard-form-calculations",
        question: "Work out {{7.2 * 10^6 - 5 * 10^5}} in standard form.",
        options: ["{{2.2 * 10^1}}", "{{6.7 * 10^6}}", "{{2.2 * 10^6}}", "{{6.7 * 10^5}}"],
        answerIndex: 1,
        hints: [
          "Match both numbers to {{10^6}}: {{5 * 10^5 = 0.5 * 10^6}}.",
          "Subtract {{7.2 - 0.5}} while keeping {{10^6}} unchanged.",
        ],
        explanation:
          "{{7.2 * 10^6 - 0.5 * 10^6 = 6.7 * 10^6}} (check: `7,200,000 − 500,000 = 6,700,000`). Subtracting {{7.2 - 5 = 2.2}} ignores the different place values.",
      },
    ],
  },

  // =========================================================================
  // MCQ PAPER 3: HIGHER & PROBLEM SOLVING
  // =========================================================================
  {
    id: "indices-standard-form-m3",
    title: "MCQ Paper 3 — Higher & Problem Solving",
    questions: [
      {
        id: "indices-standard-form-m3-q01",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "index-laws",
        question: "Simplify {{((2x^3)^4 * x^2) / (4x^5)}} completely.",
        options: ["{{2x^9}}", "{{4x^11}}", "{{4x^9}}", "{{8x^9}}"],
        answerIndex: 2,
        hints: [
          "Expand the power of a bracket first: {{(2x^3)^4 = 2^4 * x^12 = 16x^12}}.",
          "Multiply by {{x^2}} to get {{16x^14}} on top, then divide by {{4x^5}}.",
        ],
        explanation:
          "Numerator = {{16x^12 * x^2 = 16x^14}}. Dividing by {{4x^5}} gives {{(16/4) * x^(14-5) = 4x^9}}. Forgetting to raise 2 to the 4th power wrongly leads to {{2x^9}}.",
      },
      {
        id: "indices-standard-form-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "index-laws",
        question: "Express {{3^8 + 3^8 + 3^8}} as a single power of 3.",
        options: ["{{3^24}}", "{{9^8}}", "{{9^24}}", "{{3^9}}"],
        answerIndex: 3,
        hints: [
          "Remember index laws for adding powers apply to *multiplication*, not addition!",
          "Factor out {{3^8}}: you have 3 identical copies of {{3^8}}, i.e. {{3 * 3^8}}.",
        ],
        explanation:
          "Adding three copies of {{3^8}} equals {{3 * 3^8 = 3^1 * 3^8 = 3^9}}. Adding the exponents ({{8 + 8 + 8 = 24}}) mistakenly treats addition as multiplication ({{3^8 * 3^8 * 3^8}}).",
      },
      {
        id: "indices-standard-form-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "index-laws",
        question: "Simplify {{(6a^2b^(-3)) * (2a^(-5)b^7)}} and write your answer with **positive indices**.",
        options: ["{{(12b^4)/(a^3)}}", "{{(12a^3)/(b^4)}}", "{{12a^3b^4}}", "{{(8b^4)/(a^3)}}"],
        answerIndex: 0,
        hints: [
          "Multiply coefficients ({{6 * 2 = 12}}) and add indices: {{a^(2 + (-5))}} and {{b^(-3 + 7)}}.",
          "Move the negative power {{a^(-3)}} to the denominator as {{a^3}}.",
        ],
        explanation:
          "{{12 * a^(-3) * b^4 = (12b^4)/(a^3)}}. Only {{a^(-3)}} has a negative exponent, so {{12}} and {{b^4}} stay in the numerator.",
      },
      {
        id: "indices-standard-form-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "zero-negative-indices",
        question: "Solve {{2^(3x - 1) = 32}}.",
        options: ["{{x = 3}}", "{{x = 2}}", "{{x = 5}}", "{{x = 4}}"],
        answerIndex: 1,
        hints: [
          "Write 32 as a power of 2: {{32 = 2^5}}.",
          "Equate the exponents: {{3x - 1 = 5}} and solve for {{x}}.",
        ],
        explanation:
          "{{2^(3x - 1) = 2^5}} ⇒ {{3x - 1 = 5}} ⇒ {{3x = 6}} ⇒ {{x = 2}}. Check: {{2^(3*2 - 1) = 2^5 = 32}} ✓.",
      },
      {
        id: "indices-standard-form-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "zero-negative-indices",
        question: "Solve {{9^x = 1/27}}.",
        options: ["{{x = -3}}", "{{x = 3/2}}", "{{x = -3/2}}", "{{x = -1/3}}"],
        answerIndex: 2,
        hints: [
          "Rewrite BOTH sides as powers of 3: {{9 = 3^2}} and {{1/27 = 3^(-3)}}.",
          "Equate exponents in {{3^(2x) = 3^(-3)}}.",
        ],
        explanation:
          "{{(3^2)^x = 3^(-3)}} ⇒ {{3^(2x) = 3^(-3)}} ⇒ {{2x = -3}} ⇒ {{x = -3/2}}. Forgetting the negative sign on {{1/27}} wrongly gives {{3/2}}.",
      },
      {
        id: "indices-standard-form-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "zero-negative-indices",
        question: "Write {{(25^3) / (5^(-2))}} as a single power of 5.",
        options: ["{{5^4}}", "{{5^7}}", "{{5^12}}", "{{5^8}}"],
        answerIndex: 3,
        hints: [
          "Change 25 to {{5^2}}: {{25^3 = (5^2)^3 = 5^6}}.",
          "Now divide {{5^6 / 5^(-2)}} by subtracting exponents: {{6 - (-2)}}.",
        ],
        explanation:
          "{{(5^2)^3 / 5^(-2) = 5^6 / 5^(-2) = 5^(6 - (-2)) = 5^8}}. Subtracting {{6 - 2 = 4}} misses the double negative when dividing by {{5^(-2)}}.",
      },
      {
        id: "indices-standard-form-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "zero-negative-indices",
        question: "Evaluate {{2^(-1) + 2^(-2) + 2^(-3)}} as a single fraction.",
        options: ["{{7/8}}", "{{1/64}}", "{{3/8}}", "{{ -1/8}}"],
        answerIndex: 0,
        hints: [
          "Convert each negative power to a fraction: {{1/2}}, {{1/4}} and {{1/8}}.",
          "Add them using common denominator 8.",
        ],
        explanation:
          "{{1/2 + 1/4 + 1/8 = 4/8 + 2/8 + 1/8 = 7/8}}. Adding the exponents to get {{2^(-6) = 1/64}} wrongly treats addition like multiplication.",
      },
      {
        id: "indices-standard-form-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "standard-form-conversions",
        question: "Which ordinary decimal lies strictly between {{4 * 10^(-3)}} and {{5 * 10^(-3)}}?",
        options: ["0.046", "0.0046", "0.00046", "0.46"],
        answerIndex: 1,
        hints: [
          "Convert {{4 * 10^(-3)}} and {{5 * 10^(-3)}} into ordinary decimals first.",
          "{{4 * 10^(-3) = 0.004}} and {{5 * 10^(-3) = 0.005}}.",
        ],
        explanation:
          "`0.0046` (= {{4.6 * 10^(-3)}}) lies right between `0.004` and `0.005`. Meanwhile `0.046` is {{4.6 * 10^(-2)}} (10× too big) and `0.00046` is {{4.6 * 10^(-4)}} (10× too small).",
      },
      {
        id: "indices-standard-form-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "standard-form-conversions",
        question: "Write {{1 / (4 * 10^3)}} in standard form.",
        options: ["{{2.5 * 10^(-3)}}", "{{4 * 10^(-3)}}", "{{2.5 * 10^(-4)}}", "{{2.5 * 10^(-2)}}"],
        answerIndex: 2,
        hints: [
          "Split the fraction as {{(1/4) * (1 / 10^3) = 0.25 * 10^(-3)}}.",
          "Adjust {{0.25 * 10^(-3)}} into valid standard form by writing {{0.25 = 2.5 * 10^(-1)}}.",
        ],
        explanation:
          "{{1 / 4000 = 0.00025 = 2.5 * 10^(-4)}}. Equivalently, {{0.25 * 10^(-3) = (2.5 * 10^(-1)) * 10^(-3) = 2.5 * 10^(-4)}}. Adjusting to {{10^(-2)}} shifts the exponent the wrong way.",
      },
      {
        id: "indices-standard-form-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "standard-form-calculations",
        question: "Work out {{(3 * 10^(-4)) * (8 * 10^(-5))}} in standard form.",
        options: ["{{2.4 * 10^(-10)}}", "{{2.4 * 10^(-9)}}", "{{2.4 * 10^20}}", "{{2.4 * 10^(-8)}}"],
        answerIndex: 3,
        hints: [
          "Multiply {{3 * 8 = 24}} and add the negative powers: {{ -4 + (-5) = -9 }}.",
          "Rewrite {{24 = 2.4 * 10^1}} and compute {{1 + (-9)}} carefully!",
        ],
        explanation:
          "{{24 * 10^(-9) = (2.4 * 10^1) * 10^(-9) = 2.4 * 10^(-8)}}. A classic trap is writing {{10^(-10)}} because adding +1 to −9 moves UP the number line from −9 to −8!",
      },
      {
        id: "indices-standard-form-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "standard-form-calculations",
        question: "Work out {{(2.4 * 10^(-3)) / (6 * 10^2)}} in standard form.",
        options: ["{{4 * 10^(-6)}}", "{{4 * 10^(-4)}}", "{{4 * 10^(-5)}}", "{{4 * 10^(-2)}}"],
        answerIndex: 0,
        hints: [
          "Divide {{2.4 / 6 = 0.4}} and subtract powers {{ -3 - 2 = -5 }}, giving {{0.4 * 10^(-5)}}.",
          "Replace {{0.4 = 4 * 10^(-1)}} and combine with {{10^(-5)}}.",
        ],
        explanation:
          "{{0.4 * 10^(-5) = (4 * 10^(-1)) * 10^(-5) = 4 * 10^(-6)}}. Adjusting −5 up to −4 moves the exponent in the wrong direction.",
      },
      {
        id: "indices-standard-form-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "standard-form-calculations",
        question: "Work out {{(5 * 10^4)^2}} in standard form.",
        options: ["{{2.5 * 10^8}}", "{{2.5 * 10^9}}", "{{5 * 10^8}}", "{{2.5 * 10^16}}"],
        answerIndex: 1,
        hints: [
          "Square BOTH parts inside the bracket: {{5^2 = 25}} and {{(10^4)^2 = 10^8}}.",
          "Adjust {{25 * 10^8}} into valid standard form.",
        ],
        explanation:
          "{{(5 * 10^4)^2 = 25 * 10^8 = (2.5 * 10^1) * 10^8 = 2.5 * 10^9}}. Squaring the exponent 4 to get 16 wrongly confuses {{(10^4)^2}} with {{10^(4^2)}}.",
      },
      {
        id: "indices-standard-form-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "standard-form-calculations",
        question: "Work out {{8.4 * 10^(-4) + 3 * 10^(-5)}} in standard form.",
        options: ["{{1.14 * 10^(-8)}}", "{{8.7 * 10^(-5)}}", "{{8.7 * 10^(-4)}}", "{{1.14 * 10^(-4)}}"],
        answerIndex: 2,
        hints: [
          "Notice {{10^(-4)}} is larger than {{10^(-5)}}! Rewrite {{3 * 10^(-5)}} using {{10^(-4)}}.",
          "{{3 * 10^(-5) = 0.3 * 10^(-4)}}, then add {{8.4 + 0.3}}.",
        ],
        explanation:
          "{{8.4 * 10^(-4) + 0.3 * 10^(-4) = 8.7 * 10^(-4)}} (check: `0.00084 + 0.00003 = 0.00087`). Adding 8.4 + 3 = 11.4 ignores that the second term is ten times smaller.",
      },
      {
        id: "indices-standard-form-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "standard-form-calculations",
        question: "Light travels at {{3 * 10^8}} m/s. How far does light travel in {{2 * 10^3}} seconds, in standard form?",
        options: ["{{6 * 10^24}} m", "{{1.5 * 10^5}} m", "{{5 * 10^11}} m", "{{6 * 10^11}} m"],
        answerIndex: 3,
        hints: [
          "Use {{Distance = Speed * Time}}.",
          "Multiply {{3 * 2 = 6}} and add exponents {{8 + 3 = 11}}.",
        ],
        explanation:
          "{{Distance = (3 * 10^8) * (2 * 10^3) = 6 * 10^11}} m. Dividing speed by time wrongly gives {{1.5 * 10^5}} m, and multiplying the exponents wrongly produces {{10^24}}.",
      },
      {
        id: "indices-standard-form-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "standard-form-calculations",
        question: "If {{a = 4 * 10^5}} and {{b = 8 * 10^3}}, find {{a / b}} as an ordinary number.",
        options: ["50", "500", "200", "5"],
        answerIndex: 0,
        hints: [
          "Divide front numbers ({{4 / 8 = 0.5}}) and subtract exponents ({{5 - 3 = 2}}).",
          "Convert {{0.5 * 10^2}} into an ordinary number.",
        ],
        explanation:
          "{{(4 * 10^5) / (8 * 10^3) = 0.5 * 10^2 = 50}}. Check directly: `400,000 ÷ 8,000 = 400 ÷ 8 = 50` ✓.",
      },
    ],
  },
];
