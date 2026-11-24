import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // MCQ PAPER 1: CORE FLUENCY
  // =========================================================================
  {
    id: "fdp-ratio-fractions-m1",
    title: "MCQ Paper 1 — Core Fluency",
    questions: [
      {
        id: "fdp-ratio-fractions-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "recurring-decimals",
        question: "Which of these fractions converts to a **terminating** decimal?",
        options: ["{{7/20}}", "{{7/12}}", "{{7/15}}", "{{7/18}}"],
        answerIndex: 0,
        hints: [
          "All four fractions are already in simplest form, so check the prime factors of each denominator.",
          "A simplified fraction terminates only if its denominator has no prime factors other than 2 and 5.",
        ],
        explanation:
          "{{20 = 2^2 * 5}} has only prime factors 2 and 5, so {{7/20 = 0.35}} terminates. Each of 12, 15 and 18 contains a factor of 3 that does not cancel with 7, so those three all recur.",
      },
      {
        id: "fdp-ratio-fractions-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "recurring-decimals",
        question: "Write {{2/9}} as a recurring decimal using dot notation.",
        options: ["0.2", "0.2̇", "0.02̇", "0.2̇9̇"],
        answerIndex: 1,
        hints: [
          "Divide 2 by 9 using short division: 9 goes into 20 twice with remainder 2.",
        ],
        explanation:
          "Dividing 2 by 9 gives 0.2222… forever, written as 0.2̇. Writing 0.2 stops too early (that is {{1/5}}), while 0.2̇9̇ means 0.2929… = {{29/99}}.",
      },
      {
        id: "fdp-ratio-fractions-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "recurring-decimals",
        question: "Convert 0.6̇ (0.6666…) to a fraction in its **simplest** form.",
        options: ["{{3/5}}", "{{6/9}}", "{{2/3}}", "{{6/11}}"],
        answerIndex: 2,
        hints: [
          "Let {{x = 0.6666...}} and multiply by 10 to get {{10x = 6.6666...}}.",
          "Subtract {{x}} from {{10x}} to find {{9x = 6}}, then simplify the resulting fraction.",
        ],
        explanation:
          "{{10x - x = 9x = 6}}, so {{x = 6/9}}. Dividing numerator and denominator by 3 gives {{2/3}}. Notice {{6/9}} is equal in value but not fully simplified, and {{3/5 = 0.6}} terminates.",
      },
      {
        id: "fdp-ratio-fractions-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "recurring-decimals",
        question: "Which fraction in simplest form is equal to 0.1̇5̇ (0.151515…)?",
        options: ["{{3/20}}", "{{15/90}}", "{{5/30}}", "{{5/33}}"],
        answerIndex: 3,
        hints: [
          "Because two digits repeat, multiply {{x = 0.151515...}} by 100 so the repeating digits align.",
          "Subtract {{100x - x = 99x = 15}}, then divide top and bottom by their HCF.",
        ],
        explanation:
          "{{100x - x = 99x = 15}}, so {{x = 15/99 = 5/33}}. A common slip is dividing by 90 instead of 99 — {{15/90 = 1/6 = 0.16̇}} only has one repeating digit.",
      },
      {
        id: "fdp-ratio-fractions-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "percentage-multipliers",
        question: "What single decimal multiplier increases an amount by **7%**?",
        options: ["1.07", "1.7", "0.93", "0.07"],
        answerIndex: 0,
        hints: [
          "Add 7% to 100% and convert the resulting percentage to a decimal by dividing by 100.",
        ],
        explanation:
          "{{100% + 7% = 107% = 1.07}}. The tempting distractor 1.7 actually represents a 70% increase, while 0.93 is a 7% decrease.",
      },
      {
        id: "fdp-ratio-fractions-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "percentage-multipliers",
        question: "What single decimal multiplier decreases an amount by **14%**?",
        options: ["1.14", "0.86", "0.14", "0.84"],
        answerIndex: 1,
        hints: [
          "Subtract 14% from 100%, then convert to a decimal.",
        ],
        explanation:
          "{{100% - 14% = 86% = 0.86}}. Multiplying by 0.14 finds the 14% removed rather than the 86% remaining, and 0.84 comes from mis-subtracting {{100 - 14}}.",
      },
      {
        id: "fdp-ratio-fractions-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "percentage-multipliers",
        question: "A jacket's price rises from £80 to £92. What is the percentage increase?",
        options: ["12%", "13%", "15%", "18%"],
        answerIndex: 2,
        hints: [
          "Find the change in price first: {{92 - 80}}.",
          "Divide the change by the **original** price (£80), then multiply by 100.",
        ],
        explanation:
          "Change = £12. Percentage increase = {{(12/80) * 100 = 0.15 * 100 = 15}}%. Answering 12% forgets to divide by £80, and 13% comes from dividing by the new price £92.",
      },
      {
        id: "fdp-ratio-fractions-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "percentage-multipliers",
        question: "After a 20% discount, a coat costs £64. What was its original price before the discount?",
        options: ["£76.80", "£78.00", "£84.00", "£80.00"],
        answerIndex: 3,
        hints: [
          "A 20% discount leaves 80% of the original price, so the multiplier is 0.8.",
          "Work backwards: divide the sale price (£64) by 0.8.",
        ],
        explanation:
          "{{Original * 0.8 = 64}}, so {{Original = 64 / 0.8 = 80}}, i.e. £80.00. Adding 20% onto £64 wrongly gives £76.80 because 20% of £64 is smaller than 20% of £80.",
      },
      {
        id: "fdp-ratio-fractions-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "ratio-problems",
        question: "Simplify the ratio `36 : 48` fully.",
        options: ["3 : 4", "6 : 8", "9 : 12", "4 : 3"],
        answerIndex: 0,
        hints: [
          "Divide both parts of the ratio by their highest common factor, 12.",
        ],
        explanation:
          "{{HCF(36, 48) = 12}}, so {{36/12 : 48/12 = 3 : 4}}. Both `6 : 8` and `9 : 12` are not fully simplified, and `4 : 3` reverses the order.",
      },
      {
        id: "fdp-ratio-fractions-m1-q10",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "ratio-problems",
        question: "£72 is shared in the ratio `5 : 3`. What is the **larger** share?",
        options: ["£27", "£45", "£48", "£54"],
        answerIndex: 1,
        hints: [
          "Add the ratio parts ({{5 + 3 = 8}}) to find the value of 1 part.",
        ],
        explanation:
          "Total parts = {{5 + 3 = 8}}. One part = {{72 / 8 = 9}} pounds. The larger share has 5 parts: {{5 * 9 = 45}} pounds (£27 is the smaller share).",
      },
      {
        id: "fdp-ratio-fractions-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ratio-problems",
        question: "Write the ratio `45 cm : 1.5 m` in its simplest form.",
        options: ["30 : 1", "9 : 3", "3 : 10", "3 : 100"],
        answerIndex: 2,
        hints: [
          "Convert both lengths into the same unit first: {{1.5 m = 150 cm}}.",
          "Now simplify `45 : 150` by dividing both sides by their HCF (15).",
        ],
        explanation:
          "Converting to centimetres gives `45 : 150`. Dividing both parts by 15 gives `3 : 10`. Ignoring the units and dividing 45 by 1.5 wrongly produces `30 : 1`.",
      },
      {
        id: "fdp-ratio-fractions-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ratio-problems",
        question: "Dan and Eva share counters in the ratio `3 : 7`. Eva gets 24 more counters than Dan. How many counters does **Dan** receive?",
        options: ["6", "12", "42", "18"],
        answerIndex: 3,
        hints: [
          "Find how many more parts Eva has than Dan: {{7 - 3 = 4}} parts.",
          "Those 4 parts equal 24 counters — find 1 part, then multiply by Dan's 3 parts.",
        ],
        explanation:
          "Difference = {{7 - 3 = 4}} parts = 24 counters, so 1 part = 6 counters. Dan gets {{3 * 6 = 18}} counters (42 is Eva's share, and 6 is just one part).",
      },
      {
        id: "fdp-ratio-fractions-m1-q13",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "algebraic-fractions",
        question: "Simplify {{(12x^3)/(4x)}} fully.",
        options: ["{{3x^2}}", "{{3x^3}}", "{{8x^2}}", "{{3x^4}}"],
        answerIndex: 0,
        hints: [
          "Divide the numbers ({{12 / 4}}) and subtract the powers of {{x}} ({{x^3 / x^1}}).",
        ],
        explanation:
          "{{12 / 4 = 3}} and {{x^3 / x = x^(3-1) = x^2}}, giving {{3x^2}}. Subtracting the coefficients ({{12 - 4 = 8}}) or forgetting that {{x = x^1}} causes the wrong choices.",
      },
      {
        id: "fdp-ratio-fractions-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "algebraic-fractions",
        question: "Simplify {{(5x + 15)/5}} fully.",
        options: ["{{x + 15}}", "{{x + 3}}", "{{5x + 3}}", "{{3x}}"],
        answerIndex: 1,
        hints: [
          "Factorise the numerator by taking out the common factor 5 first.",
          "Cancel the common factor 5 from the entire numerator and denominator.",
        ],
        explanation:
          "Factorise first: {{(5(x + 3))/5 = x + 3}}. Writing {{x + 15}} illegally cancels 5 from only one term of the sum instead of both terms.",
      },
      {
        id: "fdp-ratio-fractions-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "algebraic-fractions",
        question: "Work out {{(2x)/3 * 9/(4x)}} and give your answer in its simplest form.",
        options: ["{{(3x)/2}}", "{{2/3}}", "{{3/2}}", "{{6/(4x)}}"],
        answerIndex: 2,
        hints: [
          "Multiply top × top and bottom × bottom, or cross-cancel common factors first.",
          "Notice that {{x}} appears as a factor on both top and bottom, so {{x/x = 1}}.",
        ],
        explanation:
          "Cross-cancelling {{x}} with {{x}}, 2 with 4 (leaving 1 and 2), and 9 with 3 (leaving 3 and 1) gives {{(1 * 3)/(1 * 2) = 3/2}}. Keeping {{x}} on top forgets to cancel the variable factor.",
      },
    ],
  },

  // =========================================================================
  // MCQ PAPER 2: EXAM APPLICATIONS
  // =========================================================================
  {
    id: "fdp-ratio-fractions-m2",
    title: "MCQ Paper 2 — Exam Applications",
    questions: [
      {
        id: "fdp-ratio-fractions-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "recurring-decimals",
        question: "Which of these fractions produces a **terminating** decimal?",
        options: ["{{5/18}}", "{{4/15}}", "{{7/22}}", "{{9/24}}"],
        answerIndex: 3,
        hints: [
          "Never inspect the denominator before checking if the fraction simplifies!",
          "Simplify each fraction fully, then check which reduced denominator has only 2s and 5s as prime factors.",
        ],
        explanation:
          "Although 24 has a factor of 3, {{9/24}} simplifies to {{3/8}}, and {{8 = 2^3}} only uses the prime factor 2, so {{9/24 = 0.375}} terminates. The other three are already simplified and contain prime factors 3 or 11.",
      },
      {
        id: "fdp-ratio-fractions-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "recurring-decimals",
        question: "Write {{5/11}} as a recurring decimal using dot notation.",
        options: ["0.4̇5̇", "0.45̇", "0.5̇4̇", "0.04̇5̇"],
        answerIndex: 0,
        hints: [
          "Scale {{5/11}} so the denominator is 99, or divide 5 by 11 using short division.",
          "Remember that {{ab/99 = 0.ab ab ab...}} with dots over both repeating digits.",
        ],
        explanation:
          "Multiply top and bottom by 9: {{5/11 = 45/99 = 0.454545... = 0.4̇5̇}}. Be careful: 0.45̇ means 0.4555… (which is {{41/90}}), not 0.4545….",
      },
      {
        id: "fdp-ratio-fractions-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "recurring-decimals",
        question: "Convert 0.16̇ (0.16666…) to a fraction in its simplest form.",
        options: ["{{16/99}}", "{{1/6}}", "{{4/25}}", "{{8/45}}"],
        answerIndex: 1,
        hints: [
          "Let {{x = 0.16666...}}. Multiply by 10 and by 100 so both have the same `.6666…` tail.",
          "Solve {{100x - 10x = 16.666... - 1.666...}} and simplify fully.",
        ],
        explanation:
          "{{90x = 15}}, so {{x = 15/90 = 1/6}}. Writing {{16/99}} mistakenly treats the 1 as part of the repeating block (that would be 0.1̇6̇).",
      },
      {
        id: "fdp-ratio-fractions-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "recurring-decimals",
        question: "Express 0.34̇ (0.34444…) as a fraction in its simplest form.",
        options: ["{{34/99}}", "{{17/45}}", "{{31/90}}", "{{31/99}}"],
        answerIndex: 2,
        hints: [
          "Set {{x = 0.34444...}}, so {{10x = 3.4444...}} and {{100x = 34.4444...}}.",
          "Subtract {{10x}} from {{100x}} — do not forget to subtract 3 from 34!",
        ],
        explanation:
          "{{100x - 10x = 90x = 34 - 3 = 31}}, so {{x = 31/90}}. Dividing 34 by 90 (giving {{17/45}}) forgets to subtract the non-repeating digit 3.",
      },
      {
        id: "fdp-ratio-fractions-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "percentage-multipliers",
        question: "£500 is invested at **4% compound interest** per year for 3 years. Which calculation gives the final amount?",
        options: ["{{500 * 1.12}}", "{{500 * 1.4^3}}", "{{500 * 0.96^3}}", "{{500 * 1.04^3}}"],
        answerIndex: 3,
        hints: [
          "Find the decimal multiplier for a 4% increase: {{1 + 4/100}}.",
          "Compound interest multiplies by that same factor once every year for 3 years.",
        ],
        explanation:
          "A 4% increase has multiplier 1.04, applied three times gives {{500 * 1.04^3}}. Multiplying by 1.12 computes simple interest instead of compound, while {{1.4^3}} uses 40% instead of 4%.",
      },
      {
        id: "fdp-ratio-fractions-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "percentage-multipliers",
        question: "A laptop worth £800 loses 10% of its value every year. What is its value after 2 years?",
        options: ["£648", "£640", "£720", "£656"],
        answerIndex: 0,
        hints: [
          "A 10% decrease uses multiplier {{0.9}}.",
          "Apply the multiplier twice: {{800 * 0.9^2}}.",
        ],
        explanation:
          "{{800 * 0.9^2 = 800 * 0.81 = 648}}, so £648. Answering £640 wrongly subtracts 20% directly ({{800 * 0.8}}) instead of taking 10% off the reduced Year 1 value of £720.",
      },
      {
        id: "fdp-ratio-fractions-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "percentage-multipliers",
        question: "A restaurant bill including **9% GST** comes to $163.50. What was the bill **before** GST was added?",
        options: ["$148.79", "$150.00", "$154.50", "$149.00"],
        answerIndex: 1,
        hints: [
          "Adding 9% GST multiplies the pre-GST bill by {{1.09}}.",
          "Reverse the multiplication by dividing $163.50 by 1.09.",
        ],
        explanation:
          "Pre-GST bill = {{163.50 / 1.09 = 150}}, i.e. $150.00. Finding 9% of $163.50 and subtracting gives the wrong value $148.79 because 9% was calculated on the pre-GST bill, not the final total.",
      },
      {
        id: "fdp-ratio-fractions-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "percentage-multipliers",
        question: "A village's population fell from 2,500 to 2,150. What was the percentage decrease?",
        options: ["16.3%", "12%", "14%", "35%"],
        answerIndex: 2,
        hints: [
          "Find the decrease: {{2500 - 2150 = 350}}.",
          "Divide the decrease by the **original** population (2,500), then multiply by 100.",
        ],
        explanation:
          "{{(350 / 2500) * 100 = 0.14 * 100 = 14}}%. Dividing 350 by the new population 2,150 wrongly produces 16.3%.",
      },
      {
        id: "fdp-ratio-fractions-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ratio-problems",
        question: "Given `a : b = 3 : 4` and `b : c = 6 : 5`, find `a : b : c` in its simplest form.",
        options: ["3 : 10 : 5", "18 : 24 : 20", "9 : 24 : 10", "9 : 12 : 10"],
        answerIndex: 3,
        hints: [
          "Find the LCM of the two values for the shared letter {{b}}: {{LCM(4, 6) = 12}}.",
          "Scale `3 : 4` by 3 and `6 : 5` by 2 so both ratios have {{b = 12}}.",
        ],
        explanation:
          "Scaling `3 : 4` by 3 gives `9 : 12`, and scaling `6 : 5` by 2 gives `12 : 10`, so `a : b : c = 9 : 12 : 10`. Notice `18 : 24 : 20` is proportional but not fully simplified.",
      },
      {
        id: "fdp-ratio-fractions-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ratio-problems",
        question: "Pack A contains 400 g of oats for £1.80. Pack B contains 650 g of oats for £2.60. Which pack is better value for money?",
        options: [
          "Pack B, costing 40p per 100 g vs 45p for Pack A",
          "Pack A, costing 45p per 100 g vs 50p for Pack B",
          "Pack B, costing 35p per 100 g vs 45p for Pack A",
          "Pack A, costing 40p per 100 g vs 45p for Pack B",
        ],
        answerIndex: 0,
        hints: [
          "Convert each pack's price into pence per 100 g so the amounts match.",
          "For Pack A divide 180p by 4; for Pack B divide 260p by 6.5.",
        ],
        explanation:
          "Pack A costs {{180 / 4 = 45}}p per 100 g, while Pack B costs {{260 / 6.5 = 40}}p per 100 g. Pack B has the lower cost per 100 g, so Pack B is better value.",
      },
      {
        id: "fdp-ratio-fractions-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ratio-problems",
        question: "Green paint is made by mixing blue and yellow paint in the ratio `2 : 5`. If you use 350 ml of yellow paint, how much **green paint in total** do you make?",
        options: ["140 ml", "490 ml", "525 ml", "875 ml"],
        answerIndex: 1,
        hints: [
          "The 350 ml represents only the **yellow** share (5 parts), not the total.",
          "Find 1 part ({{350 / 5}}), then multiply by total parts ({{2 + 5 = 7}}).",
        ],
        explanation:
          "5 parts = 350 ml ⇒ 1 part = 70 ml. Blue paint = {{2 * 70 = 140}} ml, so total green paint = {{140 + 350 = 490}} ml (140 ml is only the blue paint, not the total).",
      },
      {
        id: "fdp-ratio-fractions-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "algebraic-fractions",
        question: "Simplify {{(6x^2y)/(15xy^3)}} fully.",
        options: ["{{(2x^2)/(5y^2)}}", "{{(2y^2)/(5x)}}", "{{(2x)/(5y^2)}}", "{{(3x)/(5y^2)}}"],
        answerIndex: 2,
        hints: [
          "Simplify the numerical fraction {{6/15}} by dividing top and bottom by 3.",
          "Cancel one {{x}} from top and bottom (leaving {{x}} on top) and one {{y}} from top and bottom (leaving {{y^2}} on the bottom).",
        ],
        explanation:
          "{{6/15 = 2/5}}, {{x^2/x = x}}, and {{y/y^3 = 1/y^2}}, giving {{(2x)/(5y^2)}}. Watch where the higher power lives: {{y^3}} is on the bottom, so {{y^2}} stays in the denominator.",
      },
      {
        id: "fdp-ratio-fractions-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "algebraic-fractions",
        question: "Simplify {{(2x + 10)/(x^2 + 5x)}} fully (for {{x != 0, -5}}).",
        options: ["{{2 + 10/(x^2)}}", "{{(2x + 2)/x}}", "{{x/2}}", "{{2/x}}"],
        answerIndex: 3,
        hints: [
          "Factorise the numerator by taking out 2, and factorise the denominator by taking out {{x}}.",
          "Look for an identical bracket factor on top and bottom to cancel.",
        ],
        explanation:
          "Factorising gives {{(2(x + 5))/(x(x + 5))}}. Cancelling the shared bracket {{(x + 5)}} leaves {{2/x}}. Cancelling {{x}} directly across the `+` sign is invalid.",
      },
      {
        id: "fdp-ratio-fractions-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "algebraic-fractions",
        question: "Work out {{(3a)/4 ÷ (9a^2)/8}} in its simplest form.",
        options: ["{{2/(3a)}}", "{{(3a)/2}}", "{{(27a^3)/32}}", "{{(2a)/3}}"],
        answerIndex: 0,
        hints: [
          "Use Keep–Change–Flip: rewrite as {{(3a)/4 * 8/(9a^2)}}.",
          "Cross-cancel 3 with 9, 8 with 4, and {{a}} with {{a^2}}.",
        ],
        explanation:
          "Flipping the second fraction gives {{(3a)/4 * 8/(9a^2) = (24a)/(36a^2) = 2/(3a)}}. Multiplying without flipping wrongly produces {{(27a^3)/32}}, and {{(3a)/2}} flips the first fraction instead.",
      },
      {
        id: "fdp-ratio-fractions-m2-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "algebraic-fractions",
        question: "Simplify {{(x^2 - 16)/(x + 4)}} fully (for {{x != -4}}).",
        options: ["{{x + 4}}", "{{x - 4}}", "{{x - 12}}", "{{x^2 - 4}}"],
        answerIndex: 1,
        hints: [
          "Recognise {{x^2 - 16}} as a difference of two squares: {{x^2 - 4^2}}.",
          "Factorise the numerator into two brackets before cancelling {{(x + 4)}}.",
        ],
        explanation:
          "{{x^2 - 16 = (x - 4)(x + 4)}}. Dividing by {{(x + 4)}} cancels the matching bracket and leaves {{x - 4}}. Trying to divide term-by-term wrongly gives {{x^2 - 4}} or {{x - 4}} for the wrong reason.",
      },
    ],
  },

  // =========================================================================
  // MCQ PAPER 3: HIGHER & PROBLEM SOLVING
  // =========================================================================
  {
    id: "fdp-ratio-fractions-m3",
    title: "MCQ Paper 3 — Higher & Problem Solving",
    questions: [
      {
        id: "fdp-ratio-fractions-m3-q01",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "recurring-decimals",
        question: "Convert 0.24̇5̇ (0.2454545…) to a fraction in its **simplest** form.",
        options: ["{{49/200}}", "{{243/999}}", "{{27/110}}", "{{49/198}}"],
        answerIndex: 2,
        hints: [
          "Let {{x = 0.2454545...}}. Shift the non-repeating 2 past the point: {{10x = 2.454545...}}.",
          "Shift one 2-digit cycle further: {{1000x = 245.454545...}}.",
          "Subtract {{1000x - 10x = 990x = 243}} and simplify by dividing top and bottom by 9.",
        ],
        explanation:
          "{{1000x - 10x = 990x = 243}}, so {{x = 243/990}}. Dividing both by 9 gives {{27/110}} (since {{HCF(27, 110) = 1}}). Using 999 as denominator wrongly ignores the non-repeating digit 2.",
      },
      {
        id: "fdp-ratio-fractions-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "recurring-decimals",
        question: "Work out `0.4̇ + 0.2̇7̇` as an exact fraction in its simplest form.",
        options: ["{{71/90}}", "{{7/10}}", "{{31/45}}", "{{71/99}}"],
        answerIndex: 3,
        hints: [
          "Convert each recurring decimal to a fraction first: {{0.4̇ = 4/9}} and {{0.2̇7̇ = 27/99}}.",
          "Give both fractions a common denominator of 99 before adding.",
        ],
        explanation:
          "{{4/9 = 44/99}}, so {{44/99 + 27/99 = 71/99}} (71 is prime, so it cannot simplify further). You can also add the decimals column-by-column: 0.4444… + 0.2727… = 0.7171… = {{71/99}}.",
      },
      {
        id: "fdp-ratio-fractions-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "recurring-decimals",
        question: "How many decimal places does the terminating decimal for {{3/160}} have?",
        options: ["5 decimal places", "3 decimal places", "4 decimal places", "6 decimal places"],
        answerIndex: 0,
        hints: [
          "Prime factorise the denominator: {{160 = 32 * 5 = 2^5 * 5^1}}.",
          "The number of decimal places equals the highest power of 2 or 5 needed to build a power of 10.",
        ],
        explanation:
          "Since {{160 = 2^5 * 5^1}}, multiplying top and bottom by {{5^4 = 625}} turns the denominator into {{10^5 = 100000}}, giving {{1875/100000 = 0.01875}} — exactly 5 decimal places.",
      },
      {
        id: "fdp-ratio-fractions-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "percentage-multipliers",
        question: "A ticket price increases by 25% and is later decreased by 20%. What is the overall percentage change from the original price?",
        options: ["5% increase", "0% (no change)", "5% decrease", "4% decrease"],
        answerIndex: 1,
        hints: [
          "Multiply the two decimal multipliers together: {{1.25 * 0.80}}.",
          "Compare the combined multiplier to 1.00 (which represents 100%, or no change).",
        ],
        explanation:
          "{{1.25 * 0.80 = 1.00}}, meaning the final price is 100% of the original — a **0% (no change)** net effect! Simply subtracting {{25% - 20% = +5%}} ignores that the 20% decrease acts on the larger 125% value.",
      },
      {
        id: "fdp-ratio-fractions-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "percentage-multipliers",
        question: "A car loses 20% of its value in Year 1 and 15% of its remaining value in Year 2. After 2 years it is worth £10,200. What was its original price?",
        options: ["£13,770", "£15,692", "£15,000", "£14,200"],
        answerIndex: 2,
        hints: [
          "Find the combined two-year multiplier: {{0.80 * 0.85}}.",
          "Divide £10,200 by this combined multiplier to work backwards to the original price.",
        ],
        explanation:
          "Combined multiplier = {{0.80 * 0.85 = 0.68}}. Original price = {{10200 / 0.68 = 15000}} (£15,000). Adding 20% + 15% = 35% and dividing by 0.65 wrongly yields £15,692.",
      },
      {
        id: "fdp-ratio-fractions-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "percentage-multipliers",
        question: "An investment grows by 10% compound interest each year. What is the **least** whole number of years needed for its value to exceed 1.5 times its starting value?",
        options: ["3 years", "4 years", "6 years", "5 years"],
        answerIndex: 3,
        hints: [
          "After {{n}} years the value is multiplied by {{1.1^n}}. We need {{1.1^n > 1.5}}.",
          "Test powers of 1.1: {{1.1^3 = 1.331}}, {{1.1^4 = 1.4641}}, and check {{1.1^5}}.",
        ],
        explanation:
          "{{1.1^4 = 1.4641}} (still under 1.5), whereas {{1.1^5 = 1.61051 > 1.5}}. Therefore it takes at least **5 years** — checking simple interest (5 × 10% = 50%) happens to match 5 only by coincidence, while 4 years falls slightly short.",
      },
      {
        id: "fdp-ratio-fractions-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "percentage-multipliers",
        question: "A retailer increases a wholesale cost by 40%, then discounts the retail price by 25%. What single multiplier converts the wholesale cost directly to the sale price?",
        options: ["1.05", "1.15", "0.95", "1.10"],
        answerIndex: 0,
        hints: [
          "Write the two multipliers separately: +40% is 1.40, and −25% is 0.75.",
          "Multiply the two multipliers together rather than subtracting the percentages.",
        ],
        explanation:
          "{{1.40 * 0.75 = 1.05}} (a net 5% profit). Subtracting {{40% - 25% = 15%}} wrongly gives 1.15 because the 25% discount applies to the marked-up price.",
      },
      {
        id: "fdp-ratio-fractions-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "ratio-problems",
        question: "Mia and Leo share tokens in the ratio `2 : 3`. Mia gives 6 tokens to Leo, changing the ratio to `1 : 4`. How many tokens do they have **altogether**?",
        options: ["24", "30", "36", "45"],
        answerIndex: 1,
        hints: [
          "Notice the total number of tokens does NOT change when Mia hands tokens to Leo.",
          "Compare total parts before ({{2 + 3 = 5}}) and after ({{1 + 4 = 5}}) — the part sizes are already identical!",
          "Mia's share dropped from 2 parts to 1 part, so 1 part = 6 tokens.",
        ],
        explanation:
          "Both `2 : 3` and `1 : 4` sum to 5 equal parts. Giving away 6 tokens reduced Mia from 2 parts to 1 part, so 1 part = 6 tokens and total = {{5 * 6 = 30}} tokens (originally 12 and 18; afterwards 6 and 24).",
      },
      {
        id: "fdp-ratio-fractions-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "ratio-problems",
        question: "In a bag of red, blue and green beads, `red : blue = 3 : 5` and `blue : green = 2 : 3`. What fraction of all the beads are **green**?",
        options: ["{{3/10}}", "{{3/11}}", "{{15/31}}", "{{10/31}}"],
        answerIndex: 2,
        hints: [
          "Combine the two ratios by scaling blue to {{LCM(5, 2) = 10}}.",
          "Add all three parts of `red : blue : green` to get the denominator of the fraction.",
        ],
        explanation:
          "Scaling `3 : 5` by 2 gives `6 : 10`, and scaling `2 : 3` by 5 gives `10 : 15`, so `red : blue : green = 6 : 10 : 15`. Total parts = {{6 + 10 + 15 = 31}}, so green is {{15/31}} ({{10/31}} is blue).",
      },
      {
        id: "fdp-ratio-fractions-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ratio-problems",
        question: "Write the ratio `0.6 : 1.5` in the unit-ratio form `1 : n`.",
        options: ["1 : 0.4", "1 : 1.5", "1 : 3", "1 : 2.5"],
        answerIndex: 3,
        hints: [
          "To make the first number equal to 1, divide BOTH sides of the ratio by 0.6.",
          "{{1.5 / 0.6 = 15 / 6}} — simplify that fraction to a decimal.",
        ],
        explanation:
          "Dividing both sides by 0.6 gives {{0.6/0.6 : 1.5/0.6 = 1 : 2.5}}. Dividing the wrong way round ({{0.6 / 1.5}}) gives the distractor 0.4.",
      },
      {
        id: "fdp-ratio-fractions-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "ratio-problems",
        question: "The three interior angles of a triangle are in the ratio `2 : 3 : 7`. What is the size of the **largest** angle?",
        options: ["105°", "90°", "120°", "75°"],
        answerIndex: 0,
        hints: [
          "Recall that the interior angles of any triangle add up to 180°.",
          "Divide 180° by total parts ({{2 + 3 + 7 = 12}}), then multiply by 7.",
        ],
        explanation:
          "Total parts = 12, so 1 part = {{180 / 12 = 15}}°. The largest angle is {{7 * 15 = 105}}° (the three angles are 30°, 45° and 105°, summing to 180°).",
      },
      {
        id: "fdp-ratio-fractions-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "algebraic-fractions",
        question: "Simplify {{(3x^2 - 27)/(6x + 18)}} fully (for {{x != -3}}).",
        options: ["{{(x + 3)/2}}", "{{(x - 3)/2}}", "{{(x - 9)/2}}", "{{(x - 3)/6}}"],
        answerIndex: 1,
        hints: [
          "Take out the common factor 3 from the numerator first: {{3(x^2 - 9)}}.",
          "Now factorise {{x^2 - 9}} as a difference of two squares, and factorise {{6x + 18 = 6(x + 3)}}.",
          "Cancel both the numerical factor 3 and the bracket {{(x + 3)}}.",
        ],
        explanation:
          "{{(3(x^2 - 9))/(6(x + 3)) = (3(x - 3)(x + 3))/(6(x + 3)) = (x - 3)/2}}. Forgetting to cancel 3 against 6 leaves 6 on the bottom, while missing the difference of two squares leaves {{x - 9}}.",
      },
      {
        id: "fdp-ratio-fractions-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "algebraic-fractions",
        question: "Simplify {{(x^2 + 5x + 6)/(x^2 - 4)}} fully (for {{x != 2, -2}}).",
        options: ["{{(x + 3)/(x + 2)}}", "{{(5x + 6)/(-4)}}", "{{(x + 3)/(x - 2)}}", "{{(x - 3)/(x - 2)}}"],
        answerIndex: 2,
        hints: [
          "Factorise the quadratic numerator {{x^2 + 5x + 6}} into two brackets.",
          "Factorise the denominator {{x^2 - 4}} as a difference of two squares.",
          "Cancel the common factor {{(x + 2)}}.",
        ],
        explanation:
          "Top factorises as {{(x + 2)(x + 3)}} and bottom as {{(x - 2)(x + 2)}}. Cancelling {{(x + 2)}} leaves {{(x + 3)/(x - 2)}}. Crossing out {{x^2}} directly is illegal because it is added, not multiplied.",
      },
      {
        id: "fdp-ratio-fractions-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "algebraic-fractions",
        question: "Work out {{(x^2 - 9)/(4x) ÷ (x - 3)/(2x^2)}} in its simplest form.",
        options: ["{{(x + 3)/(2x)}}", "{{(x(x - 3))/2}}", "{{2x(x + 3)}}", "{{(x(x + 3))/2}}"],
        answerIndex: 3,
        hints: [
          "Flip the second fraction first: {{(x^2 - 9)/(4x) * (2x^2)/(x - 3)}}.",
          "Factorise {{x^2 - 9 = (x - 3)(x + 3)}} so {{(x - 3)}} cancels cleanly.",
          "Cancel {{2x}} from {{2x^2}} on top and {{4x}} on the bottom.",
        ],
        explanation:
          "{{((x - 3)(x + 3))/(4x) * (2x^2)/(x - 3) = (2x^2(x + 3))/(4x) = (x(x + 3))/2}}. Test with {{x = 5}}: {{(16/20) ÷ (2/50) = 0.8 ÷ 0.04 = 20}}, matching {{(5 * 8)/2 = 20}}.",
      },
      {
        id: "fdp-ratio-fractions-m3-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "algebraic-fractions",
        question: "Simplify {{(4 - x)/(x - 4)}} (for {{x != 4}}).",
        options: ["−1", "1", "0", "−4"],
        answerIndex: 0,
        hints: [
          "Factor out {{ -1 }} from the numerator: {{4 - x = -(x - 4)}}.",
          "Now cancel the identical bracket {{(x - 4)}} from top and bottom.",
        ],
        explanation:
          "Since {{4 - x = -1(x - 4)}}, dividing by {{(x - 4)}} leaves **−1** for every value of {{x != 4}}. Test {{x = 7}}: {{(4 - 7)/(7 - 4) = -3/3 = -1}}.",
      },
    ],
  },
];
