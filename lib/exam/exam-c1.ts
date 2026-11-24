import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  id: "exam-c1",
  title: "Year 9 Maths Mock Paper 3 (Calculator)",
  calculator: true,
  minutes: 60,
  questions: [
    // =========================================================================
    // WARMUP (Q01–Q06)
    // =========================================================================
    {
      id: "exam-c1-q01",
      kind: "mcq",
      topicId: "fdp-ratio-fractions",
      guideRef: "percentage-multipliers",
      difficulty: "warmup",
      question: "Which single decimal multiplier decreases an amount by {{7.5%}}?",
      options: ["0.25", "0.925", "1.075", "0.075"],
      answerIndex: 1,
      hints: [
        "Start with {{100%}} (which is {{1}}) and subtract {{7.5%}}.",
        "Convert {{92.5%}} to a decimal by dividing by 100.",
      ],
      explanation:
        "A decrease of {{7.5%}} leaves {{100% - 7.5% = 92.5%}} of the original amount, so the decimal multiplier is {{0.925}}. Using {{0.25}} subtracts {{75%}} instead of {{7.5%}}, {{1.075}} is a {{7.5%}} increase, and {{0.075}} finds only the amount of the decrease.",
    },
    {
      id: "exam-c1-q02",
      kind: "short",
      topicId: "indices-standard-form",
      guideRef: "standard-form-conversions",
      difficulty: "warmup",
      question: "Light travels approximately {{299,800,000}} metres in one second. Write {{299,800,000}} in standard form.",
      answer: {
        type: "number",
        value: 2.998e8,
        standardForm: true,
        display: "{{2.998 * 10^8}}",
      },
      traps: [
        {
          spec: { type: "number", value: 2.998e7 },
          feedback: "Recount the digits after the leading 2: there are 8 digits after 2, so the power of 10 is 8, not 7.",
        },
      ],
      hints: [
        "Place the decimal point after the first digit to get {{2.998}}.",
        "Count how many places the decimal point shifts from {{2.998}} to {{299,800,000}}.",
      ],
      solution: [
        "Write the leading number between 1 and 10: {{2.998}}.",
        "Count the digits following the first digit 2: there are 8 digits, so multiply by {{10^8}}.",
        "Standard form: {{2.998 * 10^8}}.",
      ],
      commonError: "Counting only the trailing zeros (giving {{10^5}}) instead of counting ALL 8 places after the first digit.",
    },
    {
      id: "exam-c1-q03",
      kind: "short",
      topicId: "algebraic-expressions",
      guideRef: "evaluating-expressions",
      difficulty: "warmup",
      question: "Use the formula {{s = u t + (1/2) a t^2}} to calculate {{s}} when {{u = 12.4}}, {{a = -2.5}} and {{t = 4}}.",
      answer: { type: "number", value: 29.6 },
      traps: [
        {
          spec: { type: "number", value: 69.6 },
          feedback: "Watch the negative value {{a = -2.5}}: the second term is {{-20}}, not {{+20}}.",
        },
        {
          spec: { type: "number", value: 44.6 },
          feedback: "Remember to square {{t}}: {{t^2 = 4^2 = 16}}, not 4.",
        },
      ],
      hints: [
        "Substitute each value carefully with brackets: {{s = (12.4)(4) + 0.5(-2.5)(4^2)}}.",
        "Compute {{4^2 = 16}} first, then multiply {{0.5 * (-2.5) * 16}}.",
      ],
      solution: [
        "Evaluate the first term: {{u t = 12.4 * 4 = 49.6}}.",
        "Evaluate the second term: {{0.5 * (-2.5) * 4^2 = 0.5 * (-2.5) * 16 = -20}}.",
        "Combine: {{s = 49.6 - 20 = 29.6}}.",
      ],
      commonError: "Dropping the negative sign on {{a = -2.5}} or forgetting to square {{t}}.",
    },
    {
      id: "exam-c1-q04",
      kind: "mcq",
      topicId: "algebraic-expressions",
      guideRef: "factorising-rearranging",
      difficulty: "warmup",
      question: "The formula for kinetic energy is {{E = (1/2) m v^2}}. Which rearrangement correctly makes {{m}} the subject?",
      options: [
        "{{m = E / (2 v^2)}}",
        "{{m = 2 E v^2}}",
        "{{m = (2 E) / v^2}}",
        "{{m = sqrt((2 E) / v)}}",
      ],
      answerIndex: 2,
      hints: [
        "Undo dividing by 2 first by multiplying both sides by 2.",
        "Then divide both sides by {{v^2}} to isolate {{m}}.",
      ],
      explanation:
        "Starting from {{E = (1/2) m v^2}}, multiply both sides by 2 to get {{2E = m v^2}}, then divide both sides by {{v^2}} to obtain {{m = (2E)/v^2}}. Putting 2 in the denominator divides by 2 instead of multiplying, and taking a square root would only be needed if making {{v}} the subject.",
    },
    {
      id: "exam-c1-q05",
      kind: "short",
      topicId: "probability-statistics",
      guideRef: "theoretical-experimental-probability",
      difficulty: "warmup",
      question:
        "A factory tests {{250}} LED bulbs and finds {{15}} are faulty. Using this relative frequency, how many faulty bulbs should be expected in a batch of {{1,600}} bulbs?",
      answer: { type: "number", value: 96 },
      traps: [
        {
          spec: { type: "number", value: 0.06 },
          feedback: "{{0.06}} is the relative frequency (probability). Multiply {{0.06}} by {{1,600}} to get the expected NUMBER of faulty bulbs.",
        },
        {
          spec: { type: "number", value: 6 },
          feedback: "{{6%}} is the percentage of faulty bulbs — now find {{6%}} of {{1,600}}.",
        },
      ],
      hints: [
        "First find the relative frequency of a faulty bulb: {{15 / 250}}.",
        "Multiply that probability by the batch size {{1,600}}.",
      ],
      solution: [
        "Relative frequency of a faulty bulb = {{15 / 250 = 0.06}}.",
        "Expected number of faulty bulbs = {{0.06 * 1600 = 96}}.",
      ],
      commonError: "Giving the probability ({{0.06}}) instead of multiplying by {{1,600}} to find the expected frequency.",
    },
    {
      id: "exam-c1-q06",
      kind: "mcq",
      topicId: "angles-bearings",
      guideRef: "polygon-angles",
      difficulty: "warmup",
      question: "What is the size of one interior angle of a regular {{18}}-sided polygon?",
      options: ["20°", "150°", "170°", "160°"],
      answerIndex: 3,
      hints: [
        "Find one exterior angle first: {{360° / 18}}.",
        "Subtract the exterior angle from {{180°}} to get the interior angle.",
      ],
      explanation:
        "For a regular 18-sided polygon, each exterior angle is {{360° / 18 = 20°}}. Because interior + exterior = {{180°}}, each interior angle is {{180° - 20° = 160°}}. Choosing {{20°}} stops at the exterior angle.",
    },

    // =========================================================================
    // CORE (Q07–Q19)
    // =========================================================================
    {
      id: "exam-c1-q07",
      kind: "short",
      topicId: "fdp-ratio-fractions",
      guideRef: "percentage-multipliers",
      difficulty: "core",
      question:
        "S$4,500 is invested in a savings account earning {{3.2%}} compound interest per year. Calculate the total value of the investment after {{4}} years, to the nearest cent (2 decimal places).",
      answer: {
        type: "number",
        value: 5104.24,
        tolerance: 0.01,
        display: "S$5,104.24",
      },
      traps: [
        {
          spec: { type: "number", value: 5076 },
          feedback: "S$5,076 is simple interest ({{4500 + 4 * 144}}). For compound interest, raise the multiplier to the power 4: {{4500 * 1.032^4}}.",
        },
        {
          spec: { type: "number", value: 604.24, tolerance: 0.02 },
          feedback: "S$604.24 is the interest earned only — the question asks for the TOTAL value of the investment.",
        },
      ],
      hints: [
        "Find the decimal multiplier for a {{3.2%}} increase: {{1 + 0.032 = 1.032}}.",
        "For 4 years of compound interest, calculate {{4500 * 1.032^4}}.",
        "Round your final answer to 2 decimal places (the nearest cent).",
      ],
      strategy: "Use repeated decimal multipliers",
      solution: [
        "Multiplier for a {{3.2%}} annual increase = {{1 + 3.2/100 = 1.032}}.",
        "Value after 4 years = {{4500 * 1.032^4 = 5104.2425...}}.",
        "Rounded to the nearest cent: S$5,104.24.",
      ],
      commonError: "Calculating simple interest (multiplying 3.2% by 4) or writing the multiplier as {{1.32}} (which is 32%) instead of {{1.032}}.",
    },
    {
      id: "exam-c1-q08",
      kind: "short",
      topicId: "pythagoras-trigonometry",
      guideRef: "pythagoras-theorem",
      difficulty: "core",
      diagram:
        '<svg viewBox="0 0 360 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rectangle measuring 11.5 m by 7.2 m with a dashed diagonal path labelled d"><rect x="0" y="0" width="360" height="190" fill="var(--surface)" rx="8"/><rect x="65" y="38" width="210" height="114" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="2.2"/><line x1="65" y1="152" x2="275" y2="38" stroke="var(--brand)" stroke-width="2.4" stroke-dasharray="6,4"/><polyline points="261,152 261,138 275,138" fill="none" stroke="var(--ink)" stroke-width="1.6"/><text x="148" y="174" fill="var(--ink)" font-size="14" font-weight="600">11.5 m</text><text x="284" y="100" fill="var(--ink)" font-size="14" font-weight="600">7.2 m</text><text x="155" y="88" fill="var(--brand)" font-size="15" font-weight="700">d</text></svg>',
      question:
        "A rectangular courtyard measures {{11.5}} m by {{7.2}} m. A straight stone path runs diagonally from one corner to the opposite corner. Calculate the length {{d}} of the path, giving your answer to **1 decimal place**.",
      answer: { type: "number", value: 13.6, tolerance: 0.05, display: "13.6 m" },
      traps: [
        {
          spec: { type: "number", value: 18.7, tolerance: 0.05 },
          feedback: "{{18.7}} m is the perimeter route ({{11.5 + 7.2}}). Use Pythagoras' theorem for the diagonal!",
        },
        {
          spec: { type: "number", value: 9.0, tolerance: 0.1 },
          feedback: "The diagonal is the hypotenuse (longest side), so ADD the squares ({{11.5^2 + 7.2^2}}), do not subtract.",
        },
      ],
      hints: [
        "The diagonal splits the rectangle into two right-angled triangles, with the path as the hypotenuse.",
        "Calculate {{d^2 = 11.5^2 + 7.2^2}}, then take the square root and round to 1 decimal place.",
      ],
      solution: [
        "Apply Pythagoras' theorem: {{d^2 = 11.5^2 + 7.2^2 = 132.25 + 51.84 = 184.09}}.",
        "Take the square root: {{d = sqrt(184.09) = 13.5679...}} m.",
        "Rounded to 1 decimal place: {{13.6}} m.",
      ],
      commonError: "Forgetting to take the square root or rounding {{13.5679...}} down to {{13.5}}.",
    },
    {
      id: "exam-c1-q09",
      kind: "short",
      topicId: "pythagoras-trigonometry",
      guideRef: "trig-finding-lengths",
      difficulty: "core",
      diagram:
        '<svg viewBox="0 0 360 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right-angled triangle with hypotenuse 14.6 cm, acute angle 34 degrees, and opposite side labelled x"><rect x="0" y="0" width="360" height="190" fill="var(--surface)" rx="8"/><polygon points="60,152 270,152 270,46" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="2.2"/><polyline points="254,152 254,136 270,136" fill="none" stroke="var(--ink)" stroke-width="1.8"/><path d="M 98 152 A 38 38 0 0 0 92 135" fill="none" stroke="var(--brand)" stroke-width="2"/><text x="104" y="146" fill="var(--brand)" font-size="13" font-weight="700">34°</text><text x="134" y="84" fill="var(--ink)" font-size="14" font-weight="600">14.6 cm</text><text x="280" y="106" fill="var(--brand)" font-size="15" font-weight="700">x</text></svg>',
      question:
        "In the right-angled triangle shown, the hypotenuse has length {{14.6}} cm and the marked acute angle is {{34°}}. Calculate the length {{x}} of the side opposite {{34°}}, giving your answer to **1 decimal place**.",
      answer: { type: "number", value: 8.2, tolerance: 0.05, display: "8.2 cm" },
      traps: [
        {
          spec: { type: "number", value: 12.1, tolerance: 0.05 },
          feedback: "{{12.1}} cm uses {{cos 34°}}, which finds the adjacent side. Since {{x}} is OPPOSITE {{34°}}, use {{sin 34°}}.",
        },
        {
          spec: { type: "number", value: 26.1, tolerance: 0.1 },
          feedback: "{{26.1}} cm is longer than the hypotenuse (impossible!). Multiply {{14.6 * sin 34°}}, do not divide.",
        },
      ],
      hints: [
        "Label the known and unknown sides relative to {{34°}}: you have the Hypotenuse ({{14.6}}) and want the Opposite ({{x}}).",
        "O and H point to SOH: {{sin 34° = x / 14.6}}.",
        "Multiply both sides by {{14.6}} (making sure your calculator is in DEG mode) and round to 1 decimal place.",
      ],
      solution: [
        "Relative to {{34°}}, {{O = x}} and {{H = 14.6}}, so use sine: {{sin 34° = x / 14.6}}.",
        "Multiply both sides by {{14.6}}: {{x = 14.6 * sin 34° = 8.1642...}} cm.",
        "Rounded to 1 decimal place: {{8.2}} cm.",
      ],
      commonError: "Using cosine instead of sine, or leaving the calculator in RAD (radians) mode instead of DEG mode.",
    },
    {
      id: "exam-c1-q10",
      kind: "short",
      topicId: "surface-area-volume",
      guideRef: "circle-sectors",
      difficulty: "core",
      diagram:
        '<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sector of a circle with radius 8.4 cm and central angle 115 degrees"><rect x="0" y="0" width="340" height="200" fill="var(--surface)" rx="8"/><path d="M 165 155 L 265 155 A 100 100 0 0 0 122.7 64.4 Z" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="2.2"/><path d="M 193 155 A 28 28 0 0 0 153.2 129.6" fill="none" stroke="var(--brand)" stroke-width="2"/><text x="168" y="128" fill="var(--brand)" font-size="13" font-weight="700">115°</text><text x="198" y="176" fill="var(--ink)" font-size="14" font-weight="600">8.4 cm</text></svg>',
      question:
        "A sector of a circle has radius {{8.4}} cm and central angle {{115°}}. Using the {{pi}} button on your calculator, calculate the **area** of the sector, giving your answer to **1 decimal place**.",
      answer: { type: "number", value: 70.8, tolerance: 0.05, display: "70.8 cm²" },
      traps: [
        {
          spec: { type: "number", value: 16.9, tolerance: 0.1 },
          feedback: "{{16.9}} cm is the arc length ({{(115/360) * 2 pi r}}). Use {{(115/360) * pi r^2}} for the sector AREA.",
        },
        {
          spec: { type: "number", value: 221.7, tolerance: 0.2 },
          feedback: "{{221.7}} cm² is the area of the full circle — multiply by the fraction {{115/360}}.",
        },
      ],
      hints: [
        "Use the sector area formula: {{(theta / 360) * pi r^2}}.",
        "Substitute {{theta = 115}} and {{r = 8.4}}, remembering to square {{8.4}}.",
      ],
      solution: [
        "Sector area = {{(115 / 360) * pi * 8.4^2}}.",
        "Evaluate: {{(115 / 360) * pi * 70.56 = 70.8114...}} cm².",
        "Rounded to 1 decimal place: {{70.8}} cm².",
      ],
      commonError: "Using {{2 pi r}} (circumference) instead of {{pi r^2}} (area), or forgetting to square {{8.4}}.",
    },
    {
      id: "exam-c1-q11",
      kind: "short",
      topicId: "fdp-ratio-fractions",
      guideRef: "percentage-multipliers",
      difficulty: "core",
      question: "In a {{20%}} off sale, a mountain bike costs £336. Calculate the **original price** of the bike before the sale, in £.",
      answer: { type: "number", value: 420, display: "£420" },
      traps: [
        {
          spec: { type: "number", value: 403.2, tolerance: 0.05 },
          feedback: "Adding 20% of the SALE price (£336 × 1.2 = £403.20) does not undo a 20% reduction! Since £336 is 80% of the original, divide by 0.80.",
        },
      ],
      hints: [
        "A {{20%}} reduction means the sale price £336 represents {{80%}} of the original price.",
        "Set up {{original * 0.80 = 336}} and divide by the multiplier {{0.80}} to work backwards.",
      ],
      strategy: "Reverse percentage: divide by the multiplier",
      solution: [
        "After a {{20%}} decrease, the multiplier is {{1 - 0.20 = 0.80}}.",
        "So {{0.80 * " + '"original"' + " = 336}}.",
        "Divide by {{0.80}}: original price = {{336 / 0.80 = 420}}, so £420.",
      ],
      commonError: "Finding 20% of £336 and adding it on (£403.20), instead of dividing £336 by {{0.80}}.",
    },
    {
      id: "exam-c1-q12",
      kind: "written",
      topicId: "probability-statistics",
      guideRef: "grouped-data-stem-leaf",
      difficulty: "core",
      question:
        "The grouped frequency table records the daily journey times (in minutes) for {{40}} students:\n\n| Journey time, {{t}} (min) | Frequency ({{f}}) |\n|---|---|\n| {{0 <= t < 10}} | 6 |\n| {{10 <= t < 20}} | 14 |\n| {{20 <= t < 30}} | 12 |\n| {{30 <= t < 40}} | 8 |\n\n(a) Calculate an estimate for the mean journey time, showing your midpoints and {{f x}} totals clearly.\n(b) Explain why your answer to part (a) is only an *estimate*.",
      marks: 4,
      hints: [
        "Find the midpoint {{x}} of each class interval (halfway between the lower and upper boundaries).",
        "Multiply each midpoint {{x}} by its frequency {{f}}, then sum all four {{f x}} values.",
        "Divide the total {{sum f x}} by the total frequency {{40}} (not by 4!).",
        "For part (b), think about what information is lost when raw data are grouped into intervals.",
      ],
      modelAnswer:
        "(a) The class midpoints are 5, 15, 25 and 35. Multiplying midpoint by frequency gives 5×6 = 30, 15×14 = 210, 25×12 = 300, and 35×8 = 280. Summing these gives ∑fx = 30 + 210 + 300 + 280 = 820. Dividing by the total frequency 40 gives an estimated mean of 820 ÷ 40 = 20.5 minutes. (b) It is only an estimate because the exact individual journey times are unknown once grouped, so we assume the values in each class average at its midpoint.",
      markScheme: [
        {
          point: "Finds all four class midpoints correctly: 5, 15, 25, 35",
          keywords: ["5, 15, 25", "15, 25, 35", "midpoint"],
        },
        {
          point: "Computes ∑fx = 30 + 210 + 300 + 280 = 820",
          keywords: ["820"],
        },
        {
          point: "Divides 820 by total frequency 40 to obtain 20.5 minutes",
          keywords: ["20.5"],
        },
        {
          point: "Explains that exact individual times are unknown because the data are grouped",
          keywords: ["exact", "unknown", "individual", "do not know", "don't know"],
        },
      ],
      commonError: "Dividing {{820}} by 4 (the number of rows) instead of 40 (the total frequency), or using upper class bounds instead of midpoints.",
    },
    {
      id: "exam-c1-q13",
      kind: "short",
      topicId: "equations-inequalities",
      guideRef: "simultaneous-equations",
      difficulty: "core",
      question:
        "At a cinema, {{3}} adult tickets and {{2}} child tickets cost S$62.50. Meanwhile, {{2}} adult tickets and {{5}} child tickets cost S$71.00. Calculate the cost of **one adult ticket**, in S$.",
      answer: { type: "number", value: 15.5, display: "S$15.50" },
      traps: [
        {
          spec: { type: "number", value: 8 },
          feedback: "S$8.00 is the cost of one CHILD ticket — the question asks for the cost of one ADULT ticket.",
        },
      ],
      hints: [
        "Write two simultaneous equations using {{a}} for an adult ticket and {{c}} for a child ticket: {{3a + 2c = 62.50}} and {{2a + 5c = 71.00}}.",
        "Eliminate {{c}} by multiplying the first equation by 5 and the second equation by 2, then subtracting.",
        "Solve {{11a = 170.50}} to find {{a}}.",
      ],
      strategy: "Form and solve simultaneous equations",
      solution: [
        "Let {{a}} = adult price and {{c}} = child price: {{3a + 2c = 62.50}} and {{2a + 5c = 71.00}}.",
        "Scale to match {{c}}: {{15a + 10c = 312.50}} and {{4a + 10c = 142.00}}.",
        "Subtract the second scaled equation from the first: {{11a = 170.50}}.",
        "Divide by 11: {{a = 15.50}}, so one adult ticket costs S$15.50 (and one child ticket costs S$8.00).",
      ],
      commonError: "Giving the child ticket price (S$8.00) or forgetting to multiply the right-hand side when scaling the equations.",
    },
    {
      id: "exam-c1-q14",
      kind: "mcq",
      topicId: "transformations-similarity",
      guideRef: "enlargement",
      difficulty: "core",
      question:
        "A rectangular poster measuring {{12}} cm by {{18}} cm is enlarged by a fractional scale factor of {{2/3}}. What are the dimensions of the image poster?",
      options: ["8 cm by 12 cm", "18 cm by 27 cm", "6 cm by 9 cm", "10 cm by 16 cm"],
      answerIndex: 0,
      hints: [
        "Multiply each side length by the scale factor {{2/3}}.",
        "Because {{0 < 2/3 < 1}}, the image is smaller than the original.",
      ],
      explanation:
        "Multiplying both dimensions by {{2/3}} gives {{12 * (2/3) = 8}} cm and {{18 * (2/3) = 12}} cm. Getting {{18}} cm by {{27}} cm divides by {{2/3}} (multiplying by {{3/2}}) instead of multiplying, and {{10}} cm by {{16}} cm wrongly subtracts 2 cm from each side.",
    },
    {
      id: "exam-c1-q15",
      kind: "mcq",
      topicId: "linear-graphs",
      guideRef: "equation-of-a-line",
      difficulty: "core",
      question: "A straight line has gradient {{1.5}} and passes through the point {{(4, 2)}}. Where does this line cross the {{y}}-axis?",
      options: ["(0, 4)", "(0, 8)", "(0, −2)", "(0, −4)"],
      answerIndex: 3,
      hints: [
        "Write the line as {{y = 1.5x + c}}.",
        "Substitute {{x = 4}} and {{y = 2}} to solve for the {{y}}-intercept {{c}}.",
      ],
      explanation:
        "Substituting {{x = 4}}, {{y = 2}} and {{m = 1.5}} into {{y = mx + c}} gives {{2 = 1.5(4) + c}}, so {{2 = 6 + c}} and {{c = -4}}. Thus the line crosses the {{y}}-axis at {{(0, -4)}}. Getting {{(0, 8)}} adds 6 to 2 instead of subtracting, and {{(0, 4)}} computes {{6 - 2}} instead of {{2 - 6}}.",
    },
    {
      id: "exam-c1-q16",
      kind: "mcq",
      topicId: "equations-inequalities",
      guideRef: "inequalities",
      difficulty: "core",
      question: "Which inequality is equivalent to {{5 - 3x > 17}}?",
      options: ["{{x > -4}}", "{{x < 4}}", "{{x < -4}}", "{{x > 4}}"],
      answerIndex: 2,
      hints: [
        "Subtract 5 from both sides to get {{-3x > 12}}.",
        "When dividing both sides of an inequality by a NEGATIVE number ({{-3}}), what happens to the inequality sign?",
      ],
      explanation:
        "Subtracting 5 gives {{-3x > 12}}. Dividing both sides by {{-3}} reverses the inequality sign, yielding {{x < -4}}. You can check with {{x = -5}}: {{5 - 3(-5) = 20 > 17}} (true), whereas {{x = 0}} gives {{5 > 17}} (false). Choosing {{x > -4}} forgets to flip the inequality sign.",
    },
    {
      id: "exam-c1-q17",
      kind: "short",
      topicId: "indices-standard-form",
      guideRef: "standard-form-calculations",
      difficulty: "core",
      question:
        "At closest approach, the distance from Earth to Mars is {{5.46 * 10^7}} km. A spacecraft travels at an average speed of {{2.1 * 10^4}} km/h. Calculate the travel time in hours, giving your answer in **standard form**.",
      answer: {
        type: "number",
        value: 2600,
        standardForm: true,
        display: "{{2.6 * 10^3}} hours",
      },
      traps: [
        {
          spec: { type: "number", value: 1.1466e12 },
          feedback: "Time = Distance ÷ Speed, not Distance × Speed!",
        },
      ],
      hints: [
        "Recall the speed–distance–time formula: {{time = distance / speed}}.",
        "Divide {{(5.46 * 10^7) / (2.1 * 10^4)}} and write your result in standard form {{A * 10^n}} with {{1 <= A < 10}}.",
      ],
      solution: [
        "Use {{time = distance / speed = (5.46 * 10^7) / (2.1 * 10^4)}}.",
        "Divide the front numbers: {{5.46 / 2.1 = 2.6}}.",
        "Subtract powers of 10: {{10^(7 - 4) = 10^3}}.",
        "Travel time = {{2.6 * 10^3}} hours.",
      ],
      commonError: "Multiplying distance by speed, or typing 2600 instead of standard form {{2.6 * 10^3}}.",
    },
    {
      id: "exam-c1-q18",
      kind: "mcq",
      topicId: "angles-bearings",
      guideRef: "back-bearings-angle-rules",
      difficulty: "core",
      diagram:
        '<svg viewBox="0 0 380 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two-leg drone path from A to B on bearing 132 degrees and then from B to C on bearing 058 degrees, with North lines drawn at A and B"><rect x="0" y="0" width="380" height="210" fill="var(--surface)" rx="8"/><line x1="85" y1="95" x2="85" y2="22" stroke="var(--ink-2)" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="190" y1="168" x2="190" y2="70" stroke="var(--ink-2)" stroke-width="1.6" stroke-dasharray="4,3"/><text x="80" y="18" fill="var(--ink-2)" font-size="12" font-weight="700">N</text><text x="185" y="64" fill="var(--ink-2)" font-size="12" font-weight="700">N</text><line x1="85" y1="95" x2="190" y2="168" stroke="var(--ink)" stroke-width="2.2"/><line x1="190" y1="168" x2="310" y2="92" stroke="var(--ink)" stroke-width="2.2"/><path d="M 85 65 A 30 30 0 0 1 109.7 112.1" fill="none" stroke="var(--brand)" stroke-width="2"/><path d="M 190 134 A 34 34 0 0 1 218.7 149.8" fill="none" stroke="var(--good)" stroke-width="2"/><circle cx="85" cy="95" r="3.5" fill="var(--ink)"/><circle cx="190" cy="168" r="3.5" fill="var(--ink)"/><circle cx="310" cy="92" r="3.5" fill="var(--ink)"/><text x="67" y="102" fill="var(--ink)" font-size="14" font-weight="700">A</text><text x="184" y="190" fill="var(--ink)" font-size="14" font-weight="700">B</text><text x="317" y="96" fill="var(--ink)" font-size="14" font-weight="700">C</text><text x="116" y="76" fill="var(--brand)" font-size="13" font-weight="700">132°</text><text x="206" y="124" fill="var(--good)" font-size="13" font-weight="700">058°</text></svg>',
      question:
        "A survey drone flies from base {{A}} to checkpoint {{B}} on a bearing of {{132°}}, and then flies from {{B}} to checkpoint {{C}} on a bearing of {{058°}}. What is the interior angle {{∠ABC}}?",
      options: ["106°", "74°", "190°", "122°"],
      answerIndex: 0,
      hints: [
        "The North lines at {{A}} and {{B}} are parallel.",
        "Use co-interior angles to find the acute angle between the North line at {{B}} and segment {{BA}}: {{180° - 132°}}.",
        "Add that angle to the bearing {{058°}} on the east side of the North line at {{B}}.",
      ],
      explanation:
        "Because the North lines at {{A}} and {{B}} are parallel, the co-interior angle between {{BA}} and the North line at {{B}} is {{180° - 132° = 48°}}. Segment {{BC}} lies {{58°}} clockwise (east) from North at {{B}}, so the total angle {{∠ABC = 48° + 58° = 106°}}. Subtracting {{132° - 58° = 74°}} or adding {{132° + 58° = 190°}} ignores the parallel North line at {{B}}.",
    },
    {
      id: "exam-c1-q19",
      kind: "mcq",
      topicId: "probability-statistics",
      guideRef: "cumulative-frequency-box-plots",
      difficulty: "core",
      diagram:
        '<svg viewBox="0 0 380 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cumulative frequency S-curve for 80 plants passing through (15, 20), (22, 40), (28, 60) and (40, 80)"><rect x="0" y="0" width="380" height="215" fill="var(--surface)" rx="8"/><g stroke="var(--line)" stroke-width="1"><line x1="60" y1="138" x2="345" y2="138"/><line x1="60" y1="101" x2="345" y2="101"/><line x1="60" y1="64" x2="345" y2="64"/><line x1="60" y1="27" x2="345" y2="27"/></g><line x1="60" y1="175" x2="345" y2="175" stroke="var(--ink)" stroke-width="1.8"/><line x1="60" y1="175" x2="60" y2="20" stroke="var(--ink)" stroke-width="1.8"/><path d="M 60 175 C 120 173, 145 156, 165 138 C 190 116, 200 112, 214 101 C 232 86, 245 76, 256 64 C 282 38, 308 29, 340 27" fill="none" stroke="var(--brand)" stroke-width="2.6"/><circle cx="165" cy="138" r="3.5" fill="var(--brand)"/><circle cx="214" cy="101" r="3.5" fill="var(--brand)"/><circle cx="256" cy="64" r="3.5" fill="var(--brand)"/><line x1="256" y1="175" x2="256" y2="64" stroke="var(--bad)" stroke-width="1.4" stroke-dasharray="4,3"/><line x1="60" y1="64" x2="256" y2="64" stroke="var(--bad)" stroke-width="1.4" stroke-dasharray="4,3"/><g font-size="11" fill="var(--ink-2)" text-anchor="end"><text x="53" y="179">0</text><text x="53" y="142">20</text><text x="53" y="105">40</text><text x="53" y="68">60</text><text x="53" y="31">80</text></g><g font-size="11" fill="var(--ink-2)" text-anchor="middle"><text x="60" y="191">0</text><text x="165" y="191">15</text><text x="214" y="191">22</text><text x="256" y="191">28</text><text x="340" y="191">40</text></g><text x="202" y="208" fill="var(--ink-2)" font-size="11" text-anchor="middle">Plant height (cm)</text><text x="16" y="104" fill="var(--ink-2)" font-size="11" transform="rotate(-90 16 104)" text-anchor="middle">Cumulative freq.</text></svg>',
      question:
        "The cumulative frequency diagram shows the heights of {{80}} plants, passing through {{(15, 20)}}, {{(22, 40)}} and {{(28, 60)}}. How many plants have a height **greater than {{28}} cm**?",
      options: ["60 plants", "20 plants", "28 plants", "52 plants"],
      answerIndex: 1,
      hints: [
        "Cumulative frequency counts how many plants are LESS THAN OR EQUAL TO a given height.",
        "Read the cumulative frequency at {{28}} cm ({{60}}), then subtract from the total of {{80}} plants.",
      ],
      explanation:
        "The point {{(28, 60)}} means {{60}} plants have a height of {{28}} cm or less. Therefore the number of plants taller than {{28}} cm is {{80 - 60 = 20}} plants. Answering {{60}} plants forgets to subtract from {{80}}, and {{52}} plants wrongly subtracts the height {{28}} from {{80}}.",
    },

    // =========================================================================
    // CHALLENGE (Q20–Q25)
    // =========================================================================
    {
      id: "exam-c1-q20",
      kind: "short",
      topicId: "pythagoras-trigonometry",
      guideRef: "trig-finding-lengths",
      difficulty: "challenge",
      diagram:
        '<svg viewBox="0 0 340 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ladder of length L leaning against a vertical wall at height 4.8 m, making an angle of 62 degrees with the horizontal ground"><rect x="0" y="0" width="340" height="210" fill="var(--surface)" rx="8"/><line x1="230" y1="25" x2="230" y2="170" stroke="var(--ink)" stroke-width="3"/><line x1="65" y1="170" x2="275" y2="170" stroke="var(--ink)" stroke-width="2.2"/><line x1="120" y1="170" x2="230" y2="38" stroke="var(--brand)" stroke-width="3"/><polyline points="216,170 216,156 230,156" fill="none" stroke="var(--ink)" stroke-width="1.6"/><path d="M 152 170 A 32 32 0 0 0 140.5 145.4" fill="none" stroke="var(--brand)" stroke-width="2"/><text x="156" y="159" fill="var(--brand)" font-size="13" font-weight="700">62°</text><text x="240" y="108" fill="var(--ink)" font-size="14" font-weight="600">4.8 m</text><text x="150" y="96" fill="var(--brand)" font-size="15" font-weight="700">L</text></svg>',
      question:
        "A ladder leans against a vertical wall, reaching a vertical height of {{4.8}} m and making an angle of {{62°}} with the horizontal ground. Calculate the length {{L}} of the ladder, giving your answer to **1 decimal place**.",
      answer: { type: "number", value: 5.4, tolerance: 0.05, display: "5.4 m" },
      traps: [
        {
          spec: { type: "number", value: 4.2, tolerance: 0.05 },
          feedback: "{{4.2}} m is shorter than the vertical wall height ({{4.8}} m), which is impossible for the hypotenuse! When the unknown is on the bottom of {{sin 62° = 4.8 / L}}, DIVIDE: {{L = 4.8 / sin 62°}}.",
        },
        {
          spec: { type: "number", value: 10.2, tolerance: 0.1 },
          feedback: "{{10.2}} m uses {{cos 62°}}, but {{4.8}} m is the OPPOSITE side to {{62°}}, so use sine.",
        },
      ],
      hints: [
        "Relative to the {{62°}} angle, {{4.8}} m is the Opposite side and the ladder {{L}} is the Hypotenuse.",
        "Set up the sine ratio carefully: {{sin 62° = 4.8 / L}}.",
        "Because {{L}} is in the denominator, rearrange by swapping {{L}} and {{sin 62°}}: {{L = 4.8 / sin 62°}}.",
      ],
      strategy: "Unknown in the denominator → divide",
      solution: [
        "Relative to {{62°}}, {{O = 4.8}} m and {{H = L}}, so {{sin 62° = 4.8 / L}}.",
        "Multiply by {{L}} and divide by {{sin 62°}}: {{L = 4.8 / sin 62° = 5.4363...}} m.",
        "Rounded to 1 decimal place: {{5.4}} m (sensible, since the hypotenuse is longer than {{4.8}} m).",
      ],
      commonError: "Multiplying {{4.8 * sin 62° = 4.2}} m instead of dividing {{4.8 / sin 62°}}.",
    },
    {
      id: "exam-c1-q21",
      kind: "short",
      topicId: "surface-area-volume",
      guideRef: "cones-and-reverse-volume",
      difficulty: "challenge",
      question:
        "A cylindrical container has a volume of {{500}} cm³ and a height of {{12}} cm. Using the {{pi}} button on your calculator, calculate the **radius** of the container, giving your answer to **1 decimal place**.",
      answer: { type: "number", value: 3.6, tolerance: 0.05, display: "3.6 cm" },
      traps: [
        {
          spec: { type: "number", value: 13.3, tolerance: 0.1 },
          feedback: "{{13.3}} is {{r^2}} — remember to take the square root to find the radius {{r}}!",
        },
        {
          spec: { type: "number", value: 7.3, tolerance: 0.1 },
          feedback: "{{7.3}} cm is the diameter ({{2r}}) — the question asks for the radius {{r}}.",
        },
      ],
      hints: [
        "Start with the cylinder volume formula: {{V = pi r^2 h}}.",
        "Substitute {{V = 500}} and {{h = 12}}, then isolate {{r^2}} by dividing 500 by {{12 pi}} (put brackets around {{12 pi}} on your calculator!).",
        "Take the square root of {{r^2}} and round to 1 decimal place.",
      ],
      strategy: "Work backwards from the volume formula",
      solution: [
        "Write the volume formula: {{pi * r^2 * 12 = 500}}.",
        "Divide both sides by {{12 pi}}: {{r^2 = 500 / (12 pi) = 13.2629...}}.",
        "Take the square root: {{r = sqrt(13.2629...) = 3.6418...}} cm.",
        "Rounded to 1 decimal place: {{3.6}} cm.",
      ],
      commonError: "Typing {{500 / 12 * pi}} without brackets (which multiplies by {{pi}} instead of dividing) or forgetting the square root.",
    },
    {
      id: "exam-c1-q22",
      kind: "short",
      topicId: "equations-inequalities",
      guideRef: "simple-quadratics",
      difficulty: "challenge",
      question: "Find **both** solutions of the equation {{3(x - 4)^2 = 48}}.",
      answer: {
        type: "list",
        values: [0, 8],
        ordered: false,
        display: "x = 0 or x = 8",
      },
      traps: [
        {
          spec: { type: "list", values: [8], ordered: false },
          feedback: "You only found the positive square root! Remember that {{(x - 4)^2 = 16}} has TWO roots: {{+4}} and {{-4}}.",
        },
      ],
      hints: [
        "Divide both sides by 3 first to isolate the squared bracket: {{(x - 4)^2 = 16}}.",
        "Take BOTH the positive and negative square roots: {{x - 4 = +4}} or {{x - 4 = -4}}.",
        "Add 4 to both equations to obtain the two solutions.",
      ],
      strategy: "Isolate the square and use ±√",
      solution: [
        "Divide both sides by 3: {{(x - 4)^2 = 16}}.",
        "Take the square root of both sides: {{x - 4 = +- 4}}.",
        "Either {{x - 4 = 4 => x = 8}}, or {{x - 4 = -4 => x = 0}}.",
      ],
      commonError: "Forgetting the negative square root {{-4}} and giving only {{x = 8}}.",
    },
    {
      id: "exam-c1-q23",
      kind: "written",
      topicId: "linear-graphs",
      guideRef: "gradients-intercepts-context",
      difficulty: "challenge",
      question:
        "Two mobile phone providers charge a monthly cost {{C}} (in S$) based on {{g}} gigabytes of data used:\n\n- **Plan A**: {{C = 18 + 2.5g}}\n- **Plan B**: {{C = 30 + 1.0g}}\n\n(a) Calculate the exact data usage {{g}} where both plans cost the same, and state that common cost.\n(b) Determine which plan is better value for a student using {{11}} GB per month, showing clear calculations.",
      marks: 3,
      hints: [
        "For part (a), set the two expressions for {{C}} equal to each other: {{18 + 2.5g = 30 + g}}.",
        "Solve for {{g}}, then substitute back into either equation to find the common cost {{C}}.",
        "For part (b), substitute {{g = 11}} into BOTH equations and compare the two monthly bills.",
      ],
      modelAnswer:
        "(a) Set both equations equal: 18 + 2.5g = 30 + 1.0g, so 1.5g = 12 and g = 8 GB. Substituting g = 8 into Plan B gives a common cost of 30 + 8 = S$38 (and Plan A gives 18 + 20 = S$38). (b) For 11 GB: Plan A costs 18 + 2.5 × 11 = S$45.50, while Plan B costs 30 + 11 = S$41.00. Therefore Plan B is cheaper by S$4.50.",
      markScheme: [
        {
          point: "Solves 18 + 2.5g = 30 + g to find g = 8 GB",
          keywords: ["8", "g = 8"],
        },
        {
          point: "Substitutes g = 8 to find the common monthly cost of S$38",
          keywords: ["38"],
        },
        {
          point: "Evaluates both plans at 11 GB (S$45.50 vs S$41.00) and concludes Plan B is cheaper",
          keywords: ["45.5", "41"],
        },
      ],
      commonError: "Stopping after finding {{g = 8}} without calculating the common cost, or stating a conclusion in part (b) without showing both totals.",
    },
    {
      id: "exam-c1-q24",
      kind: "written",
      topicId: "transformations-similarity",
      guideRef: "congruence-similarity",
      difficulty: "challenge",
      diagram:
        '<svg viewBox="0 0 420 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Similar shadow triangles: a tall flagpole of height h with shadow 9.6 m, and a 1.8 m fence post with shadow 2.4 m"><rect x="0" y="0" width="420" height="205" fill="var(--surface)" rx="8"/><line x1="25" y1="168" x2="395" y2="168" stroke="var(--ink)" stroke-width="2"/><polygon points="65,168 65,36 225,168" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="2"/><polyline points="65,156 77,156 77,168" fill="none" stroke="var(--ink)" stroke-width="1.5"/><text x="42" y="106" fill="var(--brand)" font-size="15" font-weight="700">h</text><text x="128" y="186" fill="var(--ink)" font-size="13" font-weight="600">9.6 m</text><polygon points="290,168 290,118 360,168" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="2"/><polyline points="290,158 300,158 300,168" fill="none" stroke="var(--ink)" stroke-width="1.5"/><text x="252" y="147" fill="var(--ink)" font-size="13" font-weight="600">1.8 m</text><text x="310" y="186" fill="var(--ink)" font-size="13" font-weight="600">2.4 m</text></svg>',
      question:
        "On level ground, a vertical flagpole casts a horizontal shadow {{9.6}} m long. At the exact same time, a vertical {{1.8}} m fence post casts a horizontal shadow {{2.4}} m long.\n\n(a) Explain why the two right-angled triangles formed by the sun's rays are similar.\n(b) Calculate the height {{h}} of the flagpole.\n(c) *(Extension)* Calculate the angle of elevation of the sun above the ground, giving your answer to **1 decimal place**.",
      marks: 4,
      hints: [
        "For part (a), compare the right angles and the angle at which the parallel rays of the sun meet the flat ground.",
        "For part (b), find the linear scale factor by dividing the two corresponding shadow lengths: {{9.6 / 2.4}}.",
        "Multiply the fence post's height by that scale factor to get {{h}}.",
        "For part (c), use {{tan theta = opposite / adjacent = 1.8 / 2.4}} and apply {{tan^(-1)}} on your calculator.",
      ],
      modelAnswer:
        "(a) Both objects stand vertically, giving equal 90° angles with the ground, and the parallel sun rays strike the ground at the same angle of elevation. Thus all three angles match (AAA), so the triangles are similar. (b) The scale factor is 9.6 ÷ 2.4 = 4, so the flagpole height is h = 1.8 × 4 = 7.2 metres. (c) Using tan θ = 1.8 / 2.4 = 0.75, we find θ = tan⁻¹(0.75) = 36.9° (to 1 d.p.).",
      markScheme: [
        {
          point: "Justifies similarity via equal 90° angles and equal sun-ray angle (AAA)",
          keywords: ["parallel", "same angle", "equal angles", "aaa", "90"],
        },
        {
          point: "Finds linear scale factor 9.6 ÷ 2.4 = 4",
          keywords: ["4", "scale factor"],
        },
        {
          point: "Calculates flagpole height h = 1.8 × 4 = 7.2 m",
          keywords: ["7.2"],
        },
        {
          point: "Uses inverse tangent tan⁻¹(0.75) to obtain angle of elevation 36.9°",
          keywords: ["36.9", "36.87"],
        },
      ],
      commonError: "Inverting the tangent ratio as {{tan^(-1)(2.4 / 1.8) = 53.1°}} (which finds the angle with the vertical instead of the ground).",
    },
    {
      id: "exam-c1-q25",
      kind: "written",
      topicId: "surface-area-volume",
      guideRef: "prisms-cylinders",
      difficulty: "challenge",
      diagram:
        '<svg viewBox="0 0 420 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trapezoidal cross-section of a swimming pool 25 m long, 1.2 m deep at the shallow end and 2.8 m deep at the deep end, with width 12 m"><rect x="0" y="0" width="420" height="195" fill="var(--surface)" rx="8"/><polygon points="55,48 305,48 305,148 55,90" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="2.2"/><polygon points="305,48 360,26 360,126 305,148" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="1.8"/><polygon points="55,48 110,26 360,26 305,48" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="1.8"/><text x="165" y="42" fill="var(--ink)" font-size="13" font-weight="600">25 m</text><text x="14" y="75" fill="var(--ink)" font-size="13" font-weight="600">1.2 m</text><text x="366" y="84" fill="var(--ink)" font-size="13" font-weight="600">2.8 m</text><text x="330" y="156" fill="var(--brand)" font-size="13" font-weight="700">12 m wide</text></svg>',
      question:
        "A swimming pool is a prism with a uniform trapezoidal side cross-section. The pool is {{25}} m long, {{12}} m wide, {{1.2}} m deep at the shallow end, and {{2.8}} m deep at the deep end.\n\n(a) Calculate the area of the trapezoidal cross-section.\n(b) Calculate the total volume of water needed to fill the pool, in m³.\n(c) Water is pumped into the empty pool at {{15,000}} litres per hour. How many hours will it take to fill the pool completely? (Use {{1 m^3 = 1,000}} litres.)",
      marks: 4,
      hints: [
        "The parallel sides of the trapezium are the two vertical depths ({{1.2}} m and {{2.8}} m), and the perpendicular distance between them is {{25}} m.",
        "Use {{A = (1/2)(a + b)h}} to find the cross-sectional area.",
        "Multiply the cross-sectional area by the width ({{12}} m) to get the prism volume in m³.",
        "Convert m³ into litres by multiplying by 1,000 (or convert 15,000 litres/h to 15 m³/h), then divide to find the time.",
      ],
      modelAnswer:
        "(a) Cross-sectional area of the trapezium = 0.5 × (1.2 + 2.8) × 25 = 0.5 × 4 × 25 = 50 m². (b) Volume of the prism = cross-sectional area × width = 50 × 12 = 600 m³. (c) Converting to litres: 600 × 1,000 = 600,000 litres. Dividing by the flow rate gives time = 600,000 ÷ 15,000 = 40 hours.",
      markScheme: [
        {
          point: "Finds trapezium cross-sectional area = 0.5 × (1.2 + 2.8) × 25 = 50 m²",
          keywords: ["50"],
        },
        {
          point: "Multiplies by 12 m to obtain pool volume = 600 m³",
          keywords: ["600"],
        },
        {
          point: "Converts 600 m³ to 600,000 litres (or 15,000 L/h to 15 m³/h)",
          keywords: ["600000", "600,000", "600 000", "15 m"],
        },
        {
          point: "Divides total volume by flow rate to get 40 hours",
          keywords: ["40"],
        },
      ],
      commonError: "Forgetting the factor of {{1/2}} in the trapezium area formula, or dividing {{600}} by {{15,000}} without converting m³ to litres.",
    },
  ],
};
