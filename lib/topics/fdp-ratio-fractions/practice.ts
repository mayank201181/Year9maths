import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK-CHECK QUIZ (10 mixed questions)
  // =========================================================================
  quiz: [
    {
      id: "fdp-ratio-fractions-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "recurring-decimals",
      question: "Convert 0.8̇ (0.8888…) to a fraction in its simplest form.",
      answer: { type: "fraction", n: 8, d: 9, simplest: true },
      traps: [
        { spec: { type: "fraction", n: 4, d: 5 }, feedback: "{{4/5 = 0.8}} terminates. The dot on 0.8̇ means 0.8888… — use {{10x - x = 9x}}." },
      ],
      hints: [
        "Let {{x = 0.8888...}}, then multiply by 10 to get {{10x = 8.8888...}}.",
      ],
      solution: [
        "Let {{x = 0.8888...}}, so {{10x = 8.8888...}}.",
        "Subtracting gives {{9x = 8}}, so {{x = 8/9}}.",
      ],
    },
    {
      id: "fdp-ratio-fractions-quiz-q02",
      kind: "mcq",
      difficulty: "core",
      guideRef: "recurring-decimals",
      question: "Which of these fractions converts to a **recurring** decimal?",
      options: ["{{3/8}}", "{{9/30}}", "{{5/14}}", "{{7/25}}"],
      answerIndex: 2,
      hints: [
        "Simplify each fraction first — check {{9/30}} carefully!",
        "Look for a reduced denominator that has a prime factor other than 2 or 5.",
      ],
      explanation:
        "{{3/8 = 0.375}}, {{9/30 = 3/10 = 0.3}}, and {{7/25 = 0.28}} all terminate. However {{5/14}} is already simplified and {{14 = 2 * 7}} contains the prime factor 7, so it recurs.",
    },
    {
      id: "fdp-ratio-fractions-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "percentage-multipliers",
      question: "Increase £240 by 15% using a decimal multiplier.",
      answer: { type: "number", value: 276, display: "£276" },
      traps: [
        { spec: { type: "number", value: 36 }, feedback: "£36 is the 15% increase itself — add it to £240, or multiply by 1.15 directly." },
      ],
      hints: [
        "A 15% increase has decimal multiplier {{1 + 0.15 = 1.15}}.",
      ],
      solution: [
        "Multiplier for +15% is {{1.15}}.",
        "{{240 * 1.15 = 276}}, giving £276.",
      ],
    },
    {
      id: "fdp-ratio-fractions-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "percentage-multipliers",
      question: "After a 25% discount, a smartwatch costs £180. Find its original price before the discount.",
      answer: { type: "number", value: 240, display: "£240" },
      traps: [
        { spec: { type: "number", value: 225 }, feedback: "Adding 25% of £180 gives £225 — instead, £180 is 75% of the original, so divide by 0.75." },
      ],
      hints: [
        "A 25% discount leaves 75% of the original price, so multiplier = {{0.75}}.",
        "Work backwards: {{Original = 180 / 0.75}}.",
      ],
      strategy: "Work backwards",
      solution: [
        "Multiplier for a 25% decrease is {{1 - 0.25 = 0.75}}.",
        "Original price = {{180 / 0.75 = 240}}, so £240.",
        "Check: 25% of £240 is £60, and {{240 - 60 = 180}} ✓",
      ],
    },
    {
      id: "fdp-ratio-fractions-quiz-q05",
      kind: "short",
      difficulty: "warmup",
      guideRef: "ratio-problems",
      question: "Kai and Tara share £108 in the ratio `4 : 5`. How much does **Tara** receive?",
      answer: { type: "number", value: 60, display: "£60" },
      traps: [
        { spec: { type: "number", value: 48 }, feedback: "£48 is Kai's share (4 parts) — Tara receives 5 parts." },
      ],
      hints: [
        "Total parts = {{4 + 5 = 9}}. Find 1 part first, then multiply by Tara's 5 parts.",
      ],
      solution: [
        "Total parts = {{4 + 5 = 9}}, so 1 part = {{108 / 9 = 12}} pounds.",
        "Tara receives {{5 * 12 = 60}} pounds (£60).",
      ],
    },
    {
      id: "fdp-ratio-fractions-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "ratio-problems",
      question: "Given `p : q = 3 : 2` and `q : r = 5 : 4`, write `p : q : r` in its simplest form.",
      answer: { type: "ratio", parts: [15, 10, 8], simplest: true },
      hints: [
        "Find {{LCM(2, 5) = 10}} to match the shared letter {{q}}.",
        "Multiply `3 : 2` by 5 and multiply `5 : 4` by 2.",
      ],
      solution: [
        "{{LCM(2, 5) = 10}}.",
        "Scale `3 : 2` by 5 ⇒ `15 : 10`; scale `5 : 4` by 2 ⇒ `10 : 8`.",
        "Combine: `15 : 10 : 8` (already simplest since {{HCF(15, 10, 8) = 1}}).",
      ],
    },
    {
      id: "fdp-ratio-fractions-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "algebraic-fractions",
      question: "Simplify {{(3x + 9)/6}} fully.",
      options: ["{{(x + 9)/2}}", "{{(x + 3)/2}}", "{{x + 3}}", "{{(3x + 3)/2}}"],
      answerIndex: 1,
      hints: [
        "Factorise the numerator first by taking out the common factor 3.",
        "Cancel the factor 3 with the denominator 6.",
      ],
      explanation:
        "Factorising the top gives {{(3(x + 3))/6}}. Dividing top and bottom by 3 leaves {{(x + 3)/2}}. Writing {{(x + 9)/2}} wrongly cancels 3 from only the first term.",
    },
    {
      id: "fdp-ratio-fractions-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "algebraic-fractions",
      question: "Simplify {{(15a^3b)/(10ab^2)}} fully.",
      answer: { type: "expression", expr: "(3a^2)/(2b)", form: "simplified", display: "{{(3a^2)/(2b)}}" },
      hints: [
        "Divide 15 and 10 by 5 to simplify the numbers.",
        "Cancel {{a}} with {{a^3}} (leaving {{a^2}} on top) and {{b}} with {{b^2}} (leaving {{b}} on the bottom).",
      ],
      solution: [
        "Numerical part: {{15/10 = 3/2}}.",
        "Algebraic part: {{a^3/a = a^2}} and {{b/b^2 = 1/b}}.",
        "Combine: {{(3a^2)/(2b)}}.",
      ],
    },
    {
      id: "fdp-ratio-fractions-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "percentage-multipliers",
      question: "A town's population grew from 4,000 to 4,600. What was the percentage increase?",
      options: ["15%", "13%", "6%", "20%"],
      answerIndex: 0,
      hints: [
        "Find the increase ({{4600 - 4000 = 600}}) and divide by the **original** population (4,000).",
        "Multiply the decimal result by 100 to turn it into a percentage.",
      ],
      explanation:
        "{{(600 / 4000) * 100 = 0.15 * 100 = 15}}%. Dividing by the new population 4,600 wrongly gives 13%.",
    },
    {
      id: "fdp-ratio-fractions-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "recurring-decimals",
      question: "Prove algebraically that 0.36̇ (0.3666…) is equal to {{11/30}}.",
      marks: 3,
      hints: [
        "Let {{x = 0.3666...}}, then write down {{10x}} and {{100x}} so both share the `.6666…` tail.",
        "Subtract {{10x}} from {{100x}} to eliminate the recurring tail, then divide and simplify.",
      ],
      modelAnswer:
        "Let x = 0.3666…. Multiply by 10 to get 10x = 3.6666… and by 100 to get 100x = 36.6666…. Subtracting gives 90x = 33, so x = 33/90. Dividing numerator and denominator by 3 simplifies this to 11/30.",
      markScheme: [
        { point: "Form aligned multiples: 10x = 3.666… and 100x = 36.666…", keywords: ["100x", "36.666", "3.666"] },
        { point: "Subtract equations cleanly to obtain 90x = 33", keywords: ["90x", "33"] },
        { point: "Write x = 33/90 and simplify by dividing by 3 to reach 11/30", keywords: ["33/90", "divide by 3", "simplif"] },
      ],
      commonError: "Subtracting 10x − x gives 9x = 3.3 and still works only if converted cleanly to 33/90; using 100x − 10x keeps both sides exact integers.",
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS (2 papers × 15 questions)
  // =========================================================================
  papers: [
    {
      id: "fdp-ratio-fractions-p1",
      title: "Practice Paper 1 — Core Skills & Fluency",
      questions: [
        {
          id: "fdp-ratio-fractions-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "recurring-decimals",
          question: "Write {{3/16}} as an exact decimal.",
          answer: { type: "number", value: 0.1875, allowFraction: false },
          hints: [
            "Use short division {{3 / 16}}, or halve 3 four times (since {{16 = 2^4}}).",
          ],
          solution: [
            "Halving repeatedly: {{3 / 2 = 1.5}}, {{1.5 / 2 = 0.75}}, {{0.75 / 2 = 0.375}}, {{0.375 / 2 = 0.1875}}.",
          ],
        },
        {
          id: "fdp-ratio-fractions-p1-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "recurring-decimals",
          question: "Convert 0.5̇4̇ (0.545454…) to a fraction in its simplest form.",
          answer: { type: "fraction", n: 6, d: 11, simplest: true },
          hints: [
            "Two digits repeat, so set {{x = 0.545454...}} and compute {{100x - x}}.",
            "Simplify {{54/99}} by dividing top and bottom by 9.",
          ],
          solution: [
            "{{100x - x = 99x = 54}}.",
            "{{x = 54/99 = 6/11}}.",
          ],
        },
        {
          id: "fdp-ratio-fractions-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "recurring-decimals",
          question: "Convert 0.13̇ (0.13333…) to a fraction in its simplest form.",
          answer: { type: "fraction", n: 2, d: 15, simplest: true },
          traps: [
            { spec: { type: "fraction", n: 13, d: 99 }, feedback: "Only the 3 repeats (0.1333…), not 13 — use {{100x - 10x = 90x}}." },
          ],
          hints: [
            "Write {{10x = 1.3333...}} and {{100x = 13.3333...}}.",
            "Subtract to get {{90x = 12}}, then divide top and bottom by 6.",
          ],
          solution: [
            "Let {{x = 0.1333...}}, so {{10x = 1.3333...}} and {{100x = 13.3333...}}.",
            "{{90x = 12}} ⇒ {{x = 12/90 = 2/15}}.",
          ],
        },
        {
          id: "fdp-ratio-fractions-p1-q04",
          kind: "short",
          difficulty: "warmup",
          guideRef: "percentage-multipliers",
          question: "Decrease £360 by 35% using a decimal multiplier.",
          answer: { type: "number", value: 234, display: "£234" },
          traps: [
            { spec: { type: "number", value: 126 }, feedback: "£126 is the 35% taken off — multiply by 0.65 to get the reduced amount." },
          ],
          hints: [
            "A 35% decrease leaves {{100 - 35 = 65}}%, so multiply £360 by 0.65.",
          ],
          solution: [
            "Multiplier = {{1 - 0.35 = 0.65}}.",
            "{{360 * 0.65 = 234}}, so £234.",
          ],
        },
        {
          id: "fdp-ratio-fractions-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "percentage-multipliers",
          question: "A smartphone costs £500 and loses 20% of its value every year. Calculate its exact value after 3 years.",
          answer: { type: "number", value: 256, display: "£256" },
          traps: [
            { spec: { type: "number", value: 200 }, feedback: "Subtracting 60% uses simple depreciation. For compound change, multiply by {{0.8^3}}." },
          ],
          hints: [
            "The yearly multiplier for a 20% decrease is {{0.8}}.",
            "Evaluate {{500 * 0.8^3}}.",
          ],
          solution: [
            "Yearly multiplier = {{0.8}}.",
            "Value after 3 years = {{500 * 0.8^3 = 500 * 0.512 = 256}}, so £256.",
          ],
        },
        {
          id: "fdp-ratio-fractions-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "percentage-multipliers",
          question: "After an 8% price increase, a rail pass costs £162. Work out its original price before the increase.",
          answer: { type: "number", value: 150, display: "£150" },
          hints: [
            "An 8% increase has multiplier {{1.08}}.",
            "Divide £162 by 1.08 to find the original 100% price.",
          ],
          strategy: "Work backwards",
          solution: [
            "Multiplier for +8% is {{1.08}}.",
            "Original = {{162 / 1.08 = 150}}, so £150.",
          ],
        },
        {
          id: "fdp-ratio-fractions-p1-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "percentage-multipliers",
          question: "A sweater is reduced from £60 to £45 in a sale. What is the percentage decrease?",
          options: ["15%", "33.3%", "25%", "20%"],
          answerIndex: 2,
          hints: [
            "Find the price drop ({{60 - 45 = 15}}) and divide by the **original** price (£60).",
            "Convert {{15/60}} into a percentage.",
          ],
          explanation:
            "{{(15 / 60) * 100 = 0.25 * 100 = 25}}%. Answering 15% forgets to divide by £60, while 33.3% divides by the sale price £45 instead.",
        },
        {
          id: "fdp-ratio-fractions-p1-q08",
          kind: "short",
          difficulty: "warmup",
          guideRef: "ratio-problems",
          question: "Write the ratio `2.4 kg : 600 g` in its simplest whole-number form.",
          answer: { type: "ratio", parts: [4, 1], simplest: true },
          hints: [
            "Convert 2.4 kg into grams first ({{2.4 * 1000 = 2400}} g), then divide both sides by 600.",
          ],
          solution: [
            "{{2.4 kg = 2400 g}}, so the ratio is `2400 : 600`.",
            "Dividing both sides by 600 gives `4 : 1`.",
          ],
        },
        {
          id: "fdp-ratio-fractions-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "ratio-problems",
          question: "Hannah and Omar share books in the ratio `5 : 8`. Omar has 21 more books than Hannah. How many books do they have **in total**?",
          answer: { type: "number", value: 91 },
          traps: [
            { spec: { type: "number", value: 56 }, feedback: "56 is Omar's share alone — the question asks for the total number of books." },
          ],
          hints: [
            "Find the difference in parts: {{8 - 5 = 3}} parts correspond to 21 books.",
            "Find 1 part, then multiply by total parts ({{5 + 8 = 13}}).",
          ],
          solution: [
            "Difference = {{8 - 5 = 3}} parts = 21 books ⇒ 1 part = 7 books.",
            "Total = {{(5 + 8) * 7 = 13 * 7 = 91}} books.",
          ],
        },
        {
          id: "fdp-ratio-fractions-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "ratio-problems",
          question: "Given `x : y = 4 : 5` and `y : z = 3 : 2`, write `x : y : z` in its simplest form.",
          answer: { type: "ratio", parts: [12, 15, 10], simplest: true },
          hints: [
            "Match {{y}} using {{LCM(5, 3) = 15}}.",
            "Multiply `4 : 5` by 3 and `3 : 2` by 5.",
          ],
          solution: [
            "Scale `4 : 5` by 3 ⇒ `12 : 15`.",
            "Scale `3 : 2` by 5 ⇒ `15 : 10`.",
            "Combine: `12 : 15 : 10` (simplest since {{HCF(12, 15, 10) = 1}}).",
          ],
        },
        {
          id: "fdp-ratio-fractions-p1-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "ratio-problems",
          question: "A 500 ml bottle of juice costs £1.75, while a 750 ml bottle costs £2.40. Which bottle is better value for money?",
          options: [
            "500 ml bottle, at 35p per 100 ml vs 38p",
            "750 ml bottle, at 30p per 100 ml vs 35p",
            "500 ml bottle, at 32p per 100 ml vs 35p",
            "750 ml bottle, at 32p per 100 ml vs 35p",
          ],
          answerIndex: 3,
          hints: [
            "Calculate the price per 100 ml for each bottle.",
            "Divide 175p by 5, and divide 240p by 7.5.",
          ],
          explanation:
            "The 500 ml bottle costs {{175 / 5 = 35}}p per 100 ml, while the 750 ml bottle costs {{240 / 7.5 = 32}}p per 100 ml. Since 32p < 35p, the 750 ml bottle is better value.",
        },
        {
          id: "fdp-ratio-fractions-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "algebraic-fractions",
          question: "Simplify {{(6x + 18)/(3x + 9)}} fully (for {{x != -3}}).",
          answer: { type: "number", value: 2 },
          hints: [
            "Factorise the numerator (take out 6) and the denominator (take out 3).",
            "Cancel the identical bracket {{(x + 3)}}.",
          ],
          solution: [
            "{{(6(x + 3))/(3(x + 3)) = 6/3 = 2}}.",
          ],
        },
        {
          id: "fdp-ratio-fractions-p1-q13",
          kind: "short",
          difficulty: "core",
          guideRef: "algebraic-fractions",
          question: "Work out {{(5x)/(6y) * (12y^2)/(15x^2)}} and simplify your answer fully.",
          answer: { type: "expression", expr: "(2y)/(3x)", form: "simplified", display: "{{(2y)/(3x)}}" },
          hints: [
            "Cross-cancel 5 with 15 (leaving 1 and 3) and 12 with 6 (leaving 2 and 1).",
            "Cancel one {{x}} and one {{y}} from top and bottom.",
          ],
          solution: [
            "Multiply across or cross-cancel: {{(60xy^2)/(90x^2y)}}.",
            "Simplify numbers ({{60/90 = 2/3}}) and letters ({{y^2/y = y}}, {{x/x^2 = 1/x}}) ⇒ {{(2y)/(3x)}}.",
          ],
        },
        {
          id: "fdp-ratio-fractions-p1-q14",
          kind: "mcq",
          difficulty: "core",
          guideRef: "algebraic-fractions",
          question: "Work out {{(4p^2)/9 ÷ (2p)/3}} in its simplest form.",
          options: ["{{(2p)/3}}", "{{3/(2p)}}", "{{(8p^3)/27}}", "{{(2p^2)/3}}"],
          answerIndex: 0,
          hints: [
            "Keep–Change–Flip: rewrite as {{(4p^2)/9 * 3/(2p)}}.",
            "Cancel 4 with 2, 3 with 9, and {{p^2}} with {{p}}.",
          ],
          explanation:
            "{{(4p^2)/9 * 3/(2p) = (12p^2)/(18p) = (2p)/3}}. Forgetting to flip wrongly gives {{(8p^3)/27}}, and flipping the first fraction produces the reciprocal {{3/(2p)}}.",
        },
        {
          id: "fdp-ratio-fractions-p1-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "percentage-multipliers",
          question: "Sam claims: *\"Increasing a price by 10% and then decreasing the new price by 10% leaves the price unchanged.\"* Show with a calculation why Sam is wrong and state the exact overall percentage change.",
          marks: 3,
          hints: [
            "Write the two decimal multipliers: +10% is 1.1 and −10% is 0.9, then multiply them.",
            "Alternatively test an example price of £100 through both changes and compare the result to £100.",
          ],
          modelAnswer:
            "The combined multiplier is 1.1 × 0.9 = 0.99 (or testing £100 gives £100 × 1.1 = £110, then £110 × 0.9 = £99). The final price is 99% of the original, which is lower than the start — an exact overall 1% decrease.",
          markScheme: [
            { point: "Multiply the two multipliers (1.1 × 0.9 = 0.99) or test a concrete base (e.g. £100 → £110 → £99)", keywords: ["0.99", "99", "1.1", "0.9"] },
            { point: "Explain that the final price is lower / 99% of the original", keywords: ["lower", "less", "99%", "smaller"] },
            { point: "State the exact overall change is a 1% decrease", keywords: ["1%", "1 percent"] },
          ],
        },
      ],
    },

    // =========================================================================
    // PRACTICE PAPER 2: EXAM APPLICATIONS
    // =========================================================================
    {
      id: "fdp-ratio-fractions-p2",
      title: "Practice Paper 2 — Exam-Style Problem Solving",
      questions: [
        {
          id: "fdp-ratio-fractions-p2-q01",
          kind: "short",
          difficulty: "core",
          guideRef: "recurring-decimals",
          question: "Convert 1.2̇7̇ (1.272727…) to an **improper fraction** in its simplest form.",
          answer: { type: "fraction", n: 14, d: 11, simplest: true, form: "improper" },
          hints: [
            "Convert 0.2̇7̇ first ({{27/99 = 3/11}}), or let {{x = 1.2727...}} and compute {{100x - x}}.",
            "Combine {{1 + 3/11}} into a single improper fraction.",
          ],
          solution: [
            "{{100x - x = 99x = 126}}, so {{x = 126/99}}.",
            "Divide numerator and denominator by 9: {{126/99 = 14/11}}.",
          ],
        },
        {
          id: "fdp-ratio-fractions-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "recurring-decimals",
          question: "Convert 0.58̇ (0.58888…) to a fraction in its simplest form.",
          answer: { type: "fraction", n: 53, d: 90, simplest: true },
          hints: [
            "Set {{x = 0.58888...}}, giving {{10x = 5.8888...}} and {{100x = 58.8888...}}.",
            "Subtract {{100x - 10x}} and check whether the fraction simplifies.",
          ],
          solution: [
            "{{100x - 10x = 90x = 58 - 5 = 53}}.",
            "{{x = 53/90}} (53 is prime, so it is already in simplest form).",
          ],
        },
        {
          id: "fdp-ratio-fractions-p2-q03",
          kind: "written",
          difficulty: "core",
          guideRef: "recurring-decimals",
          question: "Without using a calculator, explain why {{14/35}} converts to a terminating decimal whereas {{14/30}} converts to a recurring decimal.",
          marks: 3,
          hints: [
            "Always simplify both fractions completely before looking at the denominators!",
            "Compare the prime factors of each simplified denominator against the 2-and-5 rule.",
          ],
          modelAnswer:
            "First simplify both fractions: 14/35 simplifies by 7 to 2/5 (= 0.4), whose denominator only has the prime factor 5, so it terminates. Meanwhile 14/30 simplifies by 2 to 7/15, and 15 = 3 × 5 contains a prime factor of 3 (other than 2 and 5), so it recurs.",
          markScheme: [
            { point: "Simplify 14/35 to 2/5 (denominator has only prime factor 5 → terminates as 0.4)", keywords: ["2/5", "0.4"] },
            { point: "Simplify 14/30 to 7/15", keywords: ["7/15"] },
            { point: "Identify that 15 = 3 × 5 has a prime factor of 3 (not just 2 and 5)", keywords: ["prime factor", "factor of 3", "3 * 5", "3 × 5"] },
          ],
        },
        {
          id: "fdp-ratio-fractions-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "percentage-multipliers",
          question: "£1,200 is invested at **5% compound interest** per year for 2 years. Find the exact final balance.",
          answer: { type: "number", value: 1323, display: "£1,323" },
          traps: [
            { spec: { type: "number", value: 1320 }, feedback: "£1,320 uses simple interest (+10%). Compound interest uses {{1200 * 1.05^2}}." },
          ],
          hints: [
            "The yearly multiplier for +5% is {{1.05}}.",
            "Compute {{1200 * 1.05^2}} (Year 1 is £1,260; then add 5% of £1,260).",
          ],
          solution: [
            "Year 1: {{1200 * 1.05 = 1260}}.",
            "Year 2: {{1260 * 1.05 = 1323}}, so £1,323.",
          ],
        },
        {
          id: "fdp-ratio-fractions-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "percentage-multipliers",
          question: "In a 30% off sale, a guitar is priced at £245. Find its original price before the sale.",
          answer: { type: "number", value: 350, display: "£350" },
          hints: [
            "30% off leaves 70% of the original price (multiplier {{0.7}}).",
            "Divide £245 by 0.7.",
          ],
          strategy: "Work backwards",
          solution: [
            "{{Original * 0.7 = 245}} ⇒ {{Original = 245 / 0.7 = 350}}, so £350.",
          ],
        },
        {
          id: "fdp-ratio-fractions-p2-q06",
          kind: "mcq",
          difficulty: "core",
          guideRef: "percentage-multipliers",
          question: "An antique's value increases by 20% in Year 1 and by a further 25% in Year 2. What is the single overall percentage increase across the two years?",
          options: ["45%", "50%", "55%", "40%"],
          answerIndex: 1,
          hints: [
            "Multiply the two decimal multipliers: {{1.20 * 1.25}}.",
            "Convert the combined multiplier back to a percentage increase above 100%.",
          ],
          explanation:
            "{{1.20 * 1.25 = 1.50}}, which is 150% of the starting value — a **50% increase** overall. Simply adding {{20% + 25% = 45%}} ignores the 25% growth on Year 1's gain.",
        },
        {
          id: "fdp-ratio-fractions-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "ratio-problems",
          question: "A rectangle has perimeter 84 cm. The ratio of its length to its width is `4 : 3`. Calculate its **area** in {{cm^2}}.",
          answer: { type: "number", value: 432, display: "432 cm²" },
          traps: [
            { spec: { type: "number", value: 1728 }, feedback: "Remember perimeter = 2(length + width), so length + width = 42 cm, not 84 cm!" },
          ],
          hints: [
            "First halve the perimeter to get {{length + width = 42 cm}}.",
            "Share 42 cm in the ratio `4 : 3` to find length and width, then multiply them for the area.",
          ],
          solution: [
            "Half-perimeter = {{84 / 2 = 42 cm}}.",
            "Total parts = {{4 + 3 = 7}}, so 1 part = {{42 / 7 = 6 cm}}.",
            "Length = {{4 * 6 = 24 cm}}, Width = {{3 * 6 = 18 cm}}.",
            "Area = {{24 * 18 = 432}} cm².",
          ],
        },
        {
          id: "fdp-ratio-fractions-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "ratio-problems",
          question: "Amy, Ben and Chloe share £280. `Amy : Ben = 2 : 3` and `Ben : Chloe = 4 : 5`. How much money does **Ben** receive?",
          answer: { type: "number", value: 96, display: "£96" },
          hints: [
            "Combine the ratios first by matching Ben to {{LCM(3, 4) = 12}}.",
            "Add the three combined parts ({{8 + 12 + 15 = 35}}) to find 1 part, then multiply by Ben's 12 parts.",
          ],
          solution: [
            "Scale `2 : 3` by 4 ⇒ `8 : 12`; scale `4 : 5` by 3 ⇒ `12 : 15`. Combined: `8 : 12 : 15`.",
            "Total parts = {{8 + 12 + 15 = 35}}, so 1 part = {{280 / 35 = 8}} pounds.",
            "Ben gets {{12 * 8 = 96}} pounds (£96).",
          ],
        },
        {
          id: "fdp-ratio-fractions-p2-q09",
          kind: "written",
          difficulty: "core",
          guideRef: "ratio-problems",
          question: "Shop X sells 300 g of coffee for £3.90. Shop Y sells 450 g of the same coffee for £5.40. Show clearly which shop offers better value for money.",
          marks: 3,
          hints: [
            "Convert each shop's price to a fair common weight, such as **cost per 100 g** (or per 50 g / per kg).",
            "Compare the two unit prices and state clearly which shop is cheaper.",
          ],
          modelAnswer:
            "For Shop X, 100 g costs £3.90 ÷ 3 = £1.30 (130p per 100 g). For Shop Y, 100 g costs £5.40 ÷ 4.5 = £1.20 (120p per 100 g). Since £1.20 < £1.30, Shop Y is cheaper per 100 g and offers better value.",
          markScheme: [
            { point: "Find unit price for Shop X (£1.30 per 100 g / 130p / £13 per kg)", keywords: ["1.30", "130p", "1.3p", "13"] },
            { point: "Find unit price for Shop Y (£1.20 per 100 g / 120p / £12 per kg)", keywords: ["1.20", "120p", "1.2p", "12"] },
            { point: "Compare unit prices and conclude Shop Y is cheaper / better value", keywords: ["cheaper", "y is better", "lower unit"] },
          ],
        },
        {
          id: "fdp-ratio-fractions-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "algebraic-fractions",
          question: "Simplify {{(4x^2 - 8x)/(6x - 12)}} fully (for {{x != 2}}).",
          answer: { type: "expression", expr: "(2x)/3", form: "simplified", display: "{{(2x)/3}}" },
          hints: [
            "Factorise {{4x}} out of the numerator and {{6}} out of the denominator.",
            "Cancel both the shared bracket {{(x - 2)}} and the common factor 2 from 4 and 6.",
          ],
          solution: [
            "Factorise top and bottom: {{(4x(x - 2))/(6(x - 2))}}.",
            "Cancel {{(x - 2)}} to leave {{(4x)/6 = (2x)/3}}.",
          ],
        },
        {
          id: "fdp-ratio-fractions-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "algebraic-fractions",
          question: "Simplify {{(x^2 - 25)/(3x + 15)}} fully (for {{x != -5}}).",
          answer: { type: "expression", expr: "(x-5)/3", form: "simplified", display: "{{(x - 5)/3}}" },
          hints: [
            "Use difference of two squares on the numerator: {{x^2 - 25 = (x - 5)(x + 5)}}.",
            "Factorise 3 out of the denominator and cancel {{(x + 5)}}.",
          ],
          solution: [
            "{{((x - 5)(x + 5))/(3(x + 5)) = (x - 5)/3}}.",
          ],
        },
        {
          id: "fdp-ratio-fractions-p2-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "algebraic-fractions",
          question: "Work out {{(3x)/(4y) ÷ (9x^2)/(8y^3)}} and write your answer in its simplest form.",
          answer: { type: "expression", expr: "(2y^2)/(3x)", form: "simplified", display: "{{(2y^2)/(3x)}}" },
          hints: [
            "Keep–Change–Flip: {{(3x)/(4y) * (8y^3)/(9x^2)}}.",
            "Cancel numbers (3 with 9, 8 with 4) and powers of {{x}} and {{y}}.",
          ],
          solution: [
            "Flip the divisor: {{(3x)/(4y) * (8y^3)/(9x^2) = (24xy^3)/(36x^2y)}}.",
            "Simplify: {{24/36 = 2/3}}, {{x/x^2 = 1/x}}, {{y^3/y = y^2}} ⇒ {{(2y^2)/(3x)}}.",
          ],
        },
        {
          id: "fdp-ratio-fractions-p2-q13",
          kind: "mcq",
          difficulty: "core",
          guideRef: "algebraic-fractions",
          question: "Simplify {{(2x + 6)/(x^2 + 4x + 3)}} fully (for {{x != -1, -3}}).",
          options: ["{{2/(x + 3)}}", "{{2/x}}", "{{2/(x + 1)}}", "{{(2x)/(x + 1)}}"],
          answerIndex: 2,
          hints: [
            "Factorise the numerator as {{2(x + 3)}} and the quadratic denominator into two brackets.",
            "Cancel the shared bracket {{(x + 3)}}.",
          ],
          explanation:
            "{{(2(x + 3))/((x + 1)(x + 3)) = 2/(x + 1)}}. Test with {{x = 2}}: {{10/15 = 2/3}}, matching {{2/(2 + 1) = 2/3}}.",
        },
        {
          id: "fdp-ratio-fractions-p2-q14",
          kind: "mcq",
          difficulty: "core",
          guideRef: "percentage-multipliers",
          question: "What single percentage increase is equivalent to **two** consecutive 10% increases?",
          options: ["20%", "11%", "22%", "21%"],
          answerIndex: 3,
          hints: [
            "Multiply the decimal multiplier by itself: {{1.1 * 1.1}}.",
            "Subtract 1 and multiply by 100 to read off the net percentage increase.",
          ],
          explanation:
            "{{1.1^2 = 1.21}}, which represents a **21% increase** overall — the extra 1% is 10% of the first 10% increase.",
        },
        {
          id: "fdp-ratio-fractions-p2-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "algebraic-fractions",
          question: "A student simplifies {{(x^2 + 4x)/(x + 4)}} by crossing out {{x}} and 4 separately to write {{x + 1}}. Explain what is wrong with the student's method, substitute {{x = 2}} to disprove their answer, and show the correct simplification.",
          marks: 3,
          hints: [
            "Explain the rule about cancelling terms across `+` versus cancelling common factors.",
            "Evaluate both {{(x^2 + 4x)/(x + 4)}} and {{x + 1}} at {{x = 2}}, then factorise the numerator properly.",
          ],
          modelAnswer:
            "You can only cancel common factors, never individual terms added across a + sign. Substituting x = 2 into the original fraction gives (4 + 8)/6 = 12/6 = 2, whereas x + 1 gives 3, disproving the student's answer. Factorising the numerator gives x(x + 4)/(x + 4), and cancelling the common bracket (x + 4) simplifies to x.",
          markScheme: [
            { point: "State that only common factors can be cancelled, not terms across addition", keywords: ["factor", "term", "cannot cancel across"] },
            { point: "Evaluate at x = 2: original gives 12/6 = 2 while x + 1 gives 3", keywords: ["12/6", "gives 2", "gives 3", "equals 2"] },
            { point: "Factorise numerator as x(x + 4) and cancel (x + 4) to get x", keywords: ["x(x + 4)", "x(x+4)", "simplifies to x", "equals x"] },
          ],
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 AoPS-style multi-step problems, ALL difficulty: "challenge")
  // =========================================================================
  challenge: [
    {
      id: "fdp-ratio-fractions-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "recurring-decimals",
      question: "Work out `0.3̇6̇ ÷ 0.16̇` and give your answer as an **improper fraction** in its simplest form.",
      answer: { type: "fraction", n: 24, d: 11, simplest: true, form: "improper" },
      hints: [
        "Convert each recurring decimal into an exact fraction before dividing.",
        "{{0.3̇6̇ = 36/99 = 4/11}} and {{0.16̇ = 15/90 = 1/6}}.",
        "Divide {{4/11}} by {{1/6}} using Keep–Change–Flip.",
      ],
      strategy: "Convert to exact form first",
      solution: [
        "{{0.3̇6̇ = 36/99 = 4/11}}.",
        "{{0.16̇ = (16 - 1)/90 = 15/90 = 1/6}}.",
        "{{(4/11) ÷ (1/6) = (4/11) * (6/1) = 24/11}}.",
      ],
    },
    {
      id: "fdp-ratio-fractions-ch-q02",
      kind: "written",
      difficulty: "challenge",
      guideRef: "recurring-decimals",
      question: "Prove algebraically that 0.12̇7̇ + 0.3̇ = {{76/165}}.",
      marks: 4,
      hints: [
        "Convert 0.12̇7̇ (0.1272727…) using {{10x}} and {{1000x}} so the `.2727…` tails align.",
        "Simplify {{126/990}} completely (divide by 18) to get {{7/55}}.",
        "Add {{7/55 + 1/3}} using the common denominator 165.",
      ],
      strategy: "Eliminate infinite tails",
      modelAnswer:
        "Let x = 0.1272727…. Then 10x = 1.272727… and 1000x = 127.272727…. Subtracting gives 990x = 126, so x = 126/990 = 7/55 (dividing top and bottom by 18). Also 0.3̇ = 3/9 = 1/3. Using the common denominator 165: 7/55 + 1/3 = 21/165 + 55/165 = 76/165.",
      markScheme: [
        { point: "Form 10x = 1.2727… and 1000x = 127.2727… and subtract to get 990x = 126", keywords: ["990x", "126"] },
        { point: "Simplify 126/990 to 7/55", keywords: ["7/55", "126/990"] },
        { point: "Convert 0.3̇ to 1/3 (or 3/9)", keywords: ["1/3", "3/9"] },
        { point: "Combine with common denominator 165: 21/165 + 55/165 = 76/165", keywords: ["21/165", "55/165", "common denominator"] },
      ],
    },
    {
      id: "fdp-ratio-fractions-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "percentage-multipliers",
      question: "A store raises all prices by 20% in June, then cuts them by {{p}}% in July so every item returns to its **exact** May price. Find the exact value of {{p}} as an improper fraction in its simplest form.",
      answer: { type: "fraction", n: 50, d: 3, simplest: true, form: "improper" },
      traps: [
        { spec: { type: "number", value: 20 }, feedback: "{{1.2 * 0.8 = 0.96}}, not 1! You need {{1.2 * m = 1}}, so {{m = 5/6}}." },
      ],
      hints: [
        "Write an equation using decimal multipliers: {{1.20 * m = 1}}.",
        "Solve for the July multiplier {{m = 1 / 1.2 = 5/6}}.",
        "A multiplier of {{5/6}} means a reduction of {{1/6}} — convert {{1/6}} into a percentage ({{100/6}}).",
      ],
      strategy: "Use multipliers algebraically",
      solution: [
        "We require {{1.2 * (1 - p/100) = 1}} ⇒ {{1 - p/100 = 1/1.2 = 5/6}}.",
        "So {{p/100 = 1 - 5/6 = 1/6}} ⇒ {{p = 100/6 = 50/3}} (i.e. 16.6̇%).",
      ],
    },
    {
      id: "fdp-ratio-fractions-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "percentage-multipliers",
      question: "A collector's watch loses 15% of its value in Year 1, gains 20% in Year 2, and gains 10% in Year 3. At the end of Year 3 it is worth £2,805. Find its original price at the start of Year 1.",
      answer: { type: "number", value: 2500, display: "£2,500" },
      hints: [
        "Write all three yearly decimal multipliers: {{0.85}}, {{1.20}}, and {{1.10}}.",
        "Multiply them together to get a single 3-year multiplier: {{0.85 * 1.20 * 1.10 = 1.122}}.",
        "Work backwards: divide £2,805 by 1.122.",
      ],
      strategy: "Chain multipliers then invert",
      solution: [
        "Combined multiplier = {{0.85 * 1.20 * 1.10 = 1.02 * 1.10 = 1.122}}.",
        "Original value = {{2805 / 1.122 = 2500}}, so £2,500.",
        "Check: £2,500 → £2,125 (−15%) → £2,550 (+20%) → £2,805 (+10%) ✓",
      ],
    },
    {
      id: "fdp-ratio-fractions-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "ratio-problems",
      question: "In a jar, the ratio of red counters to blue counters is `3 : 5`. Twelve more red counters are added (no blue counters are added or removed), and the ratio becomes `9 : 10`. How many **blue** counters are in the jar?",
      answer: { type: "number", value: 40 },
      hints: [
        "Identify the **invariant** — which colour's count did NOT change?",
        "Scale `3 : 5` by 2 so blue has 10 parts in both ratios: `6 : 10` → `9 : 10`.",
        "Red increased by {{9 - 6 = 3}} parts, which equals 12 counters. Find 1 part, then find blue (10 parts).",
      ],
      strategy: "Spot the invariant quantity",
      solution: [
        "Blue stays constant, so match blue to {{LCM(5, 10) = 10}}: `3 : 5` becomes `6 : 10`.",
        "Red increases from 6 parts to 9 parts: 3 parts = 12 counters ⇒ 1 part = 4 counters.",
        "Blue counters = {{10 * 4 = 40}}.",
      ],
    },
    {
      id: "fdp-ratio-fractions-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "ratio-problems",
      question: "Ella and Noah share stickers in the ratio `5 : 3`. Ella gives 26 stickers to Noah, and the ratio changes to `4 : 5`. How many stickers did **Ella** have at the start?",
      answer: { type: "number", value: 90 },
      hints: [
        "Notice that giving stickers from Ella to Noah keeps the **total** number of stickers unchanged!",
        "Before total = {{5 + 3 = 8}} parts; after total = {{4 + 5 = 9}} parts. Scale both ratios to {{LCM(8, 9) = 72}} total parts.",
        "Before becomes `45 : 27` and after becomes `32 : 40`. Ella's drop of {{45 - 32 = 13}} parts equals 26 stickers!",
      ],
      strategy: "Match the constant total",
      solution: [
        "Match total parts to {{LCM(8, 9) = 72}}: `5 : 3` (×9) ⇒ `45 : 27`; `4 : 5` (×8) ⇒ `32 : 40`.",
        "Ella loses {{45 - 32 = 13}} parts = 26 stickers ⇒ 1 part = 2 stickers.",
        "Ella's original share = {{45 * 2 = 90}} stickers.",
        "Check: started `90 : 54 = 5 : 3`; after transfer `64 : 80 = 4 : 5` ✓",
      ],
    },
    {
      id: "fdp-ratio-fractions-ch-q07",
      kind: "short",
      difficulty: "challenge",
      guideRef: "algebraic-fractions",
      question: "Simplify {{(2x^2 - 18)/(x^2 + 5x + 6) ÷ (4x - 12)/(x + 2)}} fully (for {{x != -3, -2, 3}}).",
      answer: { type: "fraction", n: 1, d: 2, simplest: true, allowDecimal: true },
      hints: [
        "First rewrite the division as a multiplication by flipping the second fraction.",
        "Factorise every polynomial completely: {{2x^2 - 18 = 2(x - 3)(x + 3)}}, {{x^2 + 5x + 6 = (x + 2)(x + 3)}}, and {{4x - 12 = 4(x - 3)}}.",
        "Cancel every shared bracket factor — you will be surprised how much disappears!",
      ],
      strategy: "Factorise everything before cancelling",
      solution: [
        "Flip the divisor: {{(2x^2 - 18)/(x^2 + 5x + 6) * (x + 2)/(4x - 12)}}.",
        "Factorise: {{(2(x - 3)(x + 3))/((x + 2)(x + 3)) * (x + 2)/(4(x - 3))}}.",
        "Cancel {{(x + 3)}}, {{(x + 2)}} and {{(x - 3)}} to leave {{2/4 = 1/2}}.",
      ],
    },
    {
      id: "fdp-ratio-fractions-ch-q08",
      kind: "short",
      difficulty: "challenge",
      guideRef: "algebraic-fractions",
      question: "Simplify {{(x^2 - 7x + 12)/(x^2 - 9) * (x^2 + 5x + 6)/(x^2 - 3x - 4)}} fully.",
      answer: { type: "expression", expr: "(x+2)/(x+1)", form: "simplified", display: "{{(x + 2)/(x + 1)}}" },
      hints: [
        "Factorise all four quadratics into pairs of brackets before multiplying anything.",
        "Check: {{x^2 - 7x + 12 = (x - 3)(x - 4)}} and {{x^2 - 3x - 4 = (x - 4)(x + 1)}}.",
        "Factorise {{x^2 - 9}} and {{x^2 + 5x + 6}}, then cancel three pairs of matching brackets!",
      ],
      strategy: "Factorise everything before cancelling",
      solution: [
        "Factorise all four quadratics: {{((x - 3)(x - 4))/((x - 3)(x + 3)) * ((x + 2)(x + 3))/((x - 4)(x + 1))}}.",
        "Cancel {{(x - 3)}}, {{(x + 3)}} and {{(x - 4)}}.",
        "Remaining simplified fraction: {{(x + 2)/(x + 1)}}.",
      ],
    },
  ],
};
