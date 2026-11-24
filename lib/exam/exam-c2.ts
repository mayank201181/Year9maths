import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  id: "exam-c2",
  title: "Year 9 Maths Mock Paper 4 (Calculator)",
  calculator: true,
  minutes: 60,
  questions: [
    // =========================================================================
    // WARMUP (Q01–Q06)
    // =========================================================================
    {
      id: "exam-c2-q01",
      kind: "mcq",
      topicId: "fdp-ratio-fractions",
      guideRef: "percentage-multipliers",
      difficulty: "warmup",
      question: "A laptop originally priced at £640 is reduced to £544 in a clearance sale. What is the **percentage decrease** in price?",
      options: ["17.6%", "15%", "12%", "85%"],
      answerIndex: 1,
      hints: [
        "Percentage change is always {{(" + '"change"' + " / " + '"original"' + ") * 100%}}.",
        "Subtract £544 from £640 to find the drop in price, then divide by the ORIGINAL price £640.",
      ],
      explanation:
        "The reduction is {{640 - 544 = 96}} (£96). Dividing by the original price £640 gives {{96 / 640 = 0.15}}, which is a {{15%}} decrease. Getting {{17.6%}} wrongly divides by the new price (£544), and {{85%}} is the percentage of the price still remaining rather than the decrease.",
    },
    {
      id: "exam-c2-q02",
      kind: "mcq",
      topicId: "indices-standard-form",
      guideRef: "standard-form-conversions",
      difficulty: "warmup",
      question: "Which number is written correctly in standard form and equals {{0.0000725}}?",
      options: [
        "{{7.25 * 10^(-5)}}",
        "{{7.25 * 10^(-4)}}",
        "{{72.5 * 10^(-6)}}",
        "{{7.25 * 10^5}}",
      ],
      answerIndex: 0,
      hints: [
        "In standard form {{A * 10^n}}, the leading number {{A}} must satisfy {{1 <= A < 10}}.",
        "Count how many places the decimal point shifts from {{0.0000725}} to {{7.25}}.",
      ],
      explanation:
        "Shifting the decimal point 5 places to the right turns {{0.0000725}} into {{7.25}}, so {{0.0000725 = 7.25 * 10^(-5)}}. Although {{72.5 * 10^(-6)}} has the same numerical value, {{72.5}} is not between 1 and 10, so it is NOT in standard form; {{7.25 * 10^(-4)}} counts only the zeros after the decimal point.",
    },
    {
      id: "exam-c2-q03",
      kind: "short",
      topicId: "algebraic-expressions",
      guideRef: "expanding-double-brackets",
      difficulty: "warmup",
      question: "Expand and simplify {{(x - 7)^2}}.",
      answer: {
        type: "expression",
        expr: "x^2 - 14x + 49",
        form: "simplified",
        display: "{{x^2 - 14x + 49}}",
      },
      traps: [
        {
          spec: { type: "expression", expr: "x^2 - 49" },
          feedback: "{{(x - 7)^2}} means {{(x - 7)(x - 7)}}, NOT {{x^2 - 7^2}}. Multiply out all four terms!",
        },
        {
          spec: { type: "expression", expr: "x^2 + 49" },
          feedback: "You missed the middle cross terms: {{-7x - 7x = -14x}}.",
        },
        {
          spec: { type: "expression", expr: "x^2 - 14x - 49" },
          feedback: "Check the last term: {{(-7) * (-7) = +49}}, not {{-49}}.",
        },
      ],
      hints: [
        "Rewrite the square as a product of two identical brackets: {{(x - 7)(x - 7)}}.",
        "Multiply all four pairs and watch the signs: {{(-7) * (-7) = +49}}.",
      ],
      solution: [
        "Write out the repeated bracket: {{(x - 7)(x - 7)}}.",
        "Expand all four products: {{x^2 - 7x - 7x + 49}}.",
        "Collect like terms: {{x^2 - 14x + 49}}.",
      ],
      commonError: "Writing {{x^2 - 49}} or {{x^2 + 49}} by squaring each term individually and forgetting the {{-14x}} term.",
    },
    {
      id: "exam-c2-q04",
      kind: "mcq",
      topicId: "transformations-similarity",
      guideRef: "reflection-translation",
      difficulty: "warmup",
      question: "Point {{Q(2, -5)}} is reflected in the line {{y = x}}. What are the coordinates of the image point {{Q'}}?",
      options: ["(−2, −5)", "(2, 5)", "(−5, 2)", "(5, −2)"],
      answerIndex: 2,
      hints: [
        "Reflecting across the diagonal mirror line {{y = x}} swaps the {{x}} and {{y}} coordinates.",
        "Apply {{(x, y) -> (y, x)}} to {{(2, -5)}}.",
      ],
      explanation:
        "Reflection in the line {{y = x}} maps every point {{(x, y)}} to {{(y, x)}}, so {{(2, -5)}} reflects to {{(-5, 2)}}. Getting {{(-2, -5)}} reflects in the {{y}}-axis, {{(2, 5)}} reflects in the {{x}}-axis, and {{(5, -2)}} reflects in {{y = -x}}.",
    },
    {
      id: "exam-c2-q05",
      kind: "mcq",
      topicId: "angles-bearings",
      guideRef: "three-figure-bearings",
      difficulty: "warmup",
      question: "A hiker walks from camp {{P}} to ridge {{Q}} on a bearing of {{295°}}. In which compass quadrant is the hiker walking?",
      options: [
        "Between North and East",
        "Between East and South",
        "Between South and West",
        "Between West and North",
      ],
      answerIndex: 3,
      hints: [
        "Remember the four main compass bearings clockwise from North: N = {{000°}}/{{360°}}, E = {{090°}}, S = {{180°}}, W = {{270°}}.",
        "Compare {{295°}} with {{270°}} (West) and {{360°}} (North).",
      ],
      explanation:
        "Because bearings increase clockwise from North ({{000°}}), West is {{270°}} and North is {{360°}}. Since {{270° < 295° < 360°}}, the hiker is walking between West and North (25° north of West).",
    },
    {
      id: "exam-c2-q06",
      kind: "mcq",
      topicId: "linear-graphs",
      guideRef: "explicit-implicit-graphs",
      difficulty: "warmup",
      question: "Which equation represents a **horizontal** straight line passing through the point {{(4, -3)}}?",
      options: ["{{x = 4}}", "{{y = -3}}", "{{y = 4x - 3}}", "{{x = -3}}"],
      answerIndex: 1,
      hints: [
        "On a horizontal line, every point stays at the exact same height (same {{y}}-coordinate).",
        "Check which coordinate is {{-3}} at {{(4, -3)}}.",
      ],
      explanation:
        "Every point on a horizontal line through {{(4, -3)}} has {{y}}-coordinate equal to {{-3}} (such as {{(0, -3)}}, {{(1, -3)}}, {{(4, -3)}}), so its equation is {{y = -3}}. The equation {{x = 4}} is the VERTICAL line through {{(4, -3)}}.",
    },

    // =========================================================================
    // CORE (Q07–Q19)
    // =========================================================================
    {
      id: "exam-c2-q07",
      kind: "short",
      topicId: "indices-standard-form",
      guideRef: "standard-form-calculations",
      difficulty: "core",
      question: "Calculate {{(4.2 * 10^6) + (8.5 * 10^5)}}, giving your answer in **standard form**.",
      answer: {
        type: "number",
        value: 5.05e6,
        standardForm: true,
        display: "{{5.05 * 10^6}}",
      },
      traps: [
        {
          spec: { type: "number", value: 1.27e7 },
          feedback: "You added {{4.2 + 8.5 = 12.7}} directly, but the powers of 10 ({{10^6}} and {{10^5}}) do not match! Rewrite {{8.5 * 10^5}} as {{0.85 * 10^6}} first.",
        },
        {
          spec: { type: "number", value: 1.27e12 },
          feedback: "Never add powers of 10 when adding standard-form numbers — align the powers of 10 first.",
        },
      ],
      hints: [
        "Match the powers of 10 before adding: rewrite {{8.5 * 10^5}} as {{0.85 * 10^6}} (or convert both to ordinary numbers).",
        "Add {{4.2 + 0.85}} while keeping {{10^6}} unchanged.",
      ],
      solution: [
        "Match both terms to {{10^6}}: {{8.5 * 10^5 = 0.85 * 10^6}}.",
        "Add the front numbers: {{(4.2 + 0.85) * 10^6 = 5.05 * 10^6}}.",
        "Check in ordinary form: {{4,200,000 + 850,000 = 5,050,000 = 5.05 * 10^6}}.",
      ],
      commonError: "Adding {{4.2 + 8.5 = 12.7}} without aligning place values first.",
    },
    {
      id: "exam-c2-q08",
      kind: "short",
      topicId: "fdp-ratio-fractions",
      guideRef: "percentage-multipliers",
      difficulty: "core",
      question:
        "A new electric car costs £32,000 and depreciates in value by {{14%}} each year. Calculate the value of the car after {{3}} years, to the **nearest pound (£)**.",
      answer: { type: "number", value: 20354, display: "£20,354" },
      traps: [
        {
          spec: { type: "number", value: 18560 },
          feedback: "£18,560 subtracts 14% of £32,000 three times (simple depreciation). Compound depreciation uses {{32000 * 0.86^3}}.",
        },
        {
          spec: { type: "number", value: 47409 },
          feedback: "Depreciates means decreases in value — use multiplier {{0.86}}, not {{1.14}}.",
        },
      ],
      hints: [
        "Find the decimal multiplier for a {{14%}} decrease: {{1 - 0.14 = 0.86}}.",
        "Apply the multiplier 3 times: {{32000 * 0.86^3}}, then round to the nearest whole pound.",
      ],
      strategy: "Use compound decay multipliers",
      solution: [
        "Annual decay multiplier = {{1 - 0.14 = 0.86}}.",
        "Value after 3 years = {{32000 * 0.86^3 = 32000 * 0.636056 = 20353.792}}.",
        "Rounded to the nearest pound: £20,354.",
      ],
      commonError: "Subtracting {{3 * 14% = 42%}} in one go (£18,560) instead of cubing the multiplier {{0.86}}.",
    },
    {
      id: "exam-c2-q09",
      kind: "short",
      topicId: "pythagoras-trigonometry",
      guideRef: "trig-finding-lengths",
      difficulty: "core",
      diagram:
        '<svg viewBox="0 0 360 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right-angled triangle with base adjacent to 28 degrees equal to 16.5 cm and vertical opposite side labelled x"><rect x="0" y="0" width="360" height="190" fill="var(--surface)" rx="8"/><polygon points="55,150 285,150 285,48" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="2.2"/><polyline points="269,150 269,134 285,134" fill="none" stroke="var(--ink)" stroke-width="1.8"/><path d="M 98 150 A 43 43 0 0 0 93.4 132.9" fill="none" stroke="var(--brand)" stroke-width="2"/><text x="104" y="144" fill="var(--brand)" font-size="13" font-weight="700">28°</text><text x="148" y="172" fill="var(--ink)" font-size="14" font-weight="600">16.5 cm</text><text x="295" y="104" fill="var(--brand)" font-size="15" font-weight="700">x</text></svg>',
      question:
        "In the right-angled triangle shown, the side adjacent to the {{28°}} angle has length {{16.5}} cm. Calculate the length {{x}} of the side opposite the {{28°}} angle, giving your answer to **1 decimal place**.",
      answer: { type: "number", value: 8.8, tolerance: 0.05, display: "8.8 cm" },
      traps: [
        {
          spec: { type: "number", value: 7.7, tolerance: 0.05 },
          feedback: "{{7.7}} cm comes from {{16.5 * sin 28°}}, but {{16.5}} cm is the ADJACENT side, not the hypotenuse. Use {{tan 28°}}!",
        },
        {
          spec: { type: "number", value: 31.0, tolerance: 0.1 },
          feedback: "In {{tan 28° = x / 16.5}}, {{x}} is in the numerator, so MULTIPLY {{16.5 * tan 28°}}, do not divide.",
        },
      ],
      hints: [
        "Relative to {{28°}}, you know the Adjacent side ({{16.5}} cm) and want the Opposite side ({{x}}).",
        "O and A point to TOA: {{tan 28° = x / 16.5}}.",
        "Multiply both sides by {{16.5}} and round your calculator output to 1 decimal place.",
      ],
      solution: [
        "Since we have Opposite ({{x}}) and Adjacent ({{16.5}}), use tangent: {{tan 28° = x / 16.5}}.",
        "Multiply both sides by {{16.5}}: {{x = 16.5 * tan 28° = 8.7732...}} cm.",
        "Rounded to 1 decimal place: {{8.8}} cm.",
      ],
      commonError: "Choosing sine or cosine instead of tangent when the hypotenuse is not involved.",
    },
    {
      id: "exam-c2-q10",
      kind: "short",
      topicId: "surface-area-volume",
      guideRef: "cones-and-reverse-volume",
      difficulty: "core",
      diagram:
        '<svg viewBox="0 0 320 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Solid cone with base radius 4.5 cm and vertical height 11.0 cm"><rect x="0" y="0" width="320" height="215" fill="var(--surface)" rx="8"/><path d="M 160 28 L 90 165 A 70 20 0 0 0 230 165 Z" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="2.2"/><path d="M 90 165 A 70 20 0 0 1 230 165" fill="none" stroke="var(--ink-2)" stroke-width="1.5" stroke-dasharray="5,4"/><line x1="160" y1="28" x2="160" y2="165" stroke="var(--brand)" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="160" y1="165" x2="230" y2="165" stroke="var(--brand)" stroke-width="2"/><polyline points="160,153 172,153 172,165" fill="none" stroke="var(--brand)" stroke-width="1.5"/><text x="108" y="108" fill="var(--brand)" font-size="13" font-weight="700">11.0 cm</text><text x="176" y="182" fill="var(--brand)" font-size="13" font-weight="700">4.5 cm</text></svg>',
      question:
        "A solid cone has base radius {{4.5}} cm and vertical height {{11.0}} cm. Using the {{pi}} button on your calculator, calculate the **volume** of the cone, giving your answer to **1 decimal place**.\n\n(Volume of a cone = {{(1/3) pi r^2 h}}.)",
      answer: { type: "number", value: 233.3, tolerance: 0.05, display: "233.3 cm³" },
      traps: [
        {
          spec: { type: "number", value: 699.8, tolerance: 0.2 },
          feedback: "{{699.8}} cm³ is the volume of a cylinder ({{pi r^2 h}}) — remember to divide by 3 for a cone!",
        },
      ],
      hints: [
        "Substitute {{r = 4.5}} and {{h = 11.0}} into {{V = (1/3) * pi * r^2 * h}}.",
        "Square {{4.5}} first ({{20.25}}), multiply by {{11}} and {{pi}}, and divide by {{3}}.",
      ],
      solution: [
        "Use the cone volume formula: {{V = (1/3) * pi * 4.5^2 * 11}}.",
        "Calculate: {{V = (1/3) * pi * 20.25 * 11 = 74.25 * pi = 233.2632...}} cm³.",
        "Rounded to 1 decimal place: {{233.3}} cm³.",
      ],
      commonError: "Forgetting the factor of {{1/3}} (giving cylinder volume {{699.8}} cm³) or forgetting to square {{4.5}}.",
    },
    {
      id: "exam-c2-q11",
      kind: "short",
      topicId: "equations-inequalities",
      guideRef: "linear-equations-brackets-fractions",
      difficulty: "core",
      question: "Solve the equation {{4(2x - 1.5) = 3(x + 2.5)}}.",
      answer: { type: "number", value: 2.7, display: "x = 2.7" },
      traps: [
        {
          spec: { type: "number", value: 0.3 },
          feedback: "To eliminate {{-6}} on the left-hand side, ADD 6 to {{7.5}} (giving {{13.5}}), rather than subtracting 6.",
        },
        {
          spec: { type: "number", value: 1.7 },
          feedback: "Multiply EVERY term inside the brackets: {{3 * 2.5 = 7.5}}, not {{2.5}}.",
        },
      ],
      hints: [
        "Expand the brackets on BOTH sides carefully: {{8x - 6 = 3x + 7.5}}.",
        "Subtract {{3x}} from both sides, then add 6 to both sides.",
        "Divide by 5 to find {{x}}.",
      ],
      solution: [
        "Expand both sides: {{8x - 6 = 3x + 7.5}}.",
        "Subtract {{3x}} from both sides: {{5x - 6 = 7.5}}.",
        "Add 6 to both sides: {{5x = 13.5}}.",
        "Divide by 5: {{x = 13.5 / 5 = 2.7}}.",
      ],
      commonError: "Forgetting to multiply the constant inside each bracket, or subtracting 6 instead of adding 6.",
    },
    {
      id: "exam-c2-q12",
      kind: "short",
      topicId: "transformations-similarity",
      guideRef: "congruence-similarity",
      difficulty: "core",
      question:
        "Two pentagons {{A}} and {{B}} are mathematically similar. A side of length {{7.5}} cm on pentagon {{A}} corresponds to a side of length {{12.0}} cm on pentagon {{B}}. Another side on pentagon {{A}} has length {{9.2}} cm. Calculate the exact length of the corresponding side on pentagon {{B}}, in cm.",
      answer: { type: "number", value: 14.72, display: "14.72 cm" },
      traps: [
        {
          spec: { type: "number", value: 13.7 },
          feedback: "Similar shapes scale by MULTIPLYING by a constant scale factor ({{12.0 / 7.5 = 1.6}}), not by adding {{4.5}} cm to every side!",
        },
        {
          spec: { type: "number", value: 5.75 },
          feedback: "Pentagon B is larger than pentagon A — multiply {{9.2}} by {{1.6}}, rather than dividing.",
        },
      ],
      hints: [
        "Calculate the linear scale factor from pentagon {{A}} to pentagon {{B}}: {{12.0 / 7.5}}.",
        "Multiply {{9.2}} cm by that scale factor.",
      ],
      strategy: "Find the multiplicative scale factor",
      solution: [
        "Linear scale factor from {{A}} to {{B}} = {{12.0 / 7.5 = 1.6}}.",
        "Corresponding side on pentagon {{B}} = {{9.2 * 1.6 = 14.72}} cm.",
      ],
      commonError: "Adding the difference ({{12.0 - 7.5 = 4.5}} cm) to {{9.2}} cm instead of multiplying by the scale factor {{1.6}}.",
    },
    {
      id: "exam-c2-q13",
      kind: "short",
      topicId: "angles-bearings",
      guideRef: "parallel-lines-angles",
      difficulty: "core",
      diagram:
        '<svg viewBox="0 0 380 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two parallel horizontal lines crossed by a transversal, showing two co-interior angles labelled (3x + 14) degrees and (5x - 18) degrees"><rect x="0" y="0" width="380" height="190" fill="var(--surface)" rx="8"/><line x1="35" y1="48" x2="345" y2="48" stroke="var(--ink)" stroke-width="2"/><line x1="35" y1="142" x2="345" y2="142" stroke="var(--ink)" stroke-width="2"/><polyline points="75,42 85,48 75,54" fill="none" stroke="var(--brand)" stroke-width="2"/><polyline points="75,136 85,142 75,148" fill="none" stroke="var(--brand)" stroke-width="2"/><line x1="165" y1="16" x2="215" y2="174" stroke="var(--ink)" stroke-width="2.2"/><path d="M 184 74 A 27 27 0 0 0 202 48" fill="none" stroke="var(--brand)" stroke-width="2"/><path d="M 232 142 A 27 27 0 0 0 196 116" fill="none" stroke="var(--bad)" stroke-width="2"/><text x="210" y="76" fill="var(--brand)" font-size="13" font-weight="700">(3x + 14)°</text><text x="225" y="128" fill="var(--bad)" font-size="13" font-weight="700">(5x − 18)°</text></svg>',
      question:
        "Two parallel lines are intersected by a transversal, forming a pair of **co-interior** angles of {{(3x + 14)°}} and {{(5x - 18)°}}. Calculate the value of {{x}}.",
      answer: { type: "number", value: 23, display: "x = 23" },
      traps: [
        {
          spec: { type: "number", value: 16 },
          feedback: "Co-interior (allied) angles between parallel lines SUM TO 180° — they are NOT equal (unlike alternate or corresponding angles).",
        },
      ],
      hints: [
        "Co-interior (allied) angles between parallel lines add up to {{180°}}.",
        "Form the equation {{(3x + 14) + (5x - 18) = 180}} and collect like terms.",
        "Solve {{8x - 4 = 180}} for {{x}}.",
      ],
      solution: [
        "Co-interior angles on parallel lines sum to {{180°}}: {{(3x + 14) + (5x - 18) = 180}}.",
        "Simplify the left-hand side: {{8x - 4 = 180}}.",
        "Add 4 to both sides: {{8x = 184}}, so {{x = 184 / 8 = 23}}.",
        "Check: {{3(23) + 14 = 83°}} and {{5(23) - 18 = 97°}}; {{83° + 97° = 180°}}.",
      ],
      commonError: "Setting the two co-interior angles equal to each other ({{3x + 14 = 5x - 18}}) instead of summing them to {{180°}}.",
    },
    {
      id: "exam-c2-q14",
      kind: "short",
      topicId: "linear-graphs",
      guideRef: "equation-of-a-line",
      difficulty: "core",
      question: "Find the **gradient** of the straight line joining the points {{(-3, 5)}} and {{(5, 1)}}.",
      answer: { type: "number", value: -0.5, allowFraction: true, display: "−0.5" },
      traps: [
        {
          spec: { type: "number", value: 0.5 },
          feedback: "As x increases from −3 to 5, y DECREASES from 5 to 1 — so the gradient must be negative!",
        },
        {
          spec: { type: "number", value: -2 },
          feedback: "Gradient is rise over run {{(y_2 - y_1)/(x_2 - x_1)}}, not run over rise!",
        },
      ],
      hints: [
        "Use the gradient formula {{m = (y_2 - y_1)/(x_2 - x_1)}}.",
        "Watch the double negative in the denominator: {{5 - (-3) = 8}}.",
      ],
      solution: [
        "Substitute {{(-3, 5)}} and {{(5, 1)}} into {{m = (y_2 - y_1)/(x_2 - x_1)}}.",
        "Compute: {{m = (1 - 5) / (5 - (-3)) = -4 / 8 = -1/2 = -0.5}}.",
      ],
      commonError: "Calculating {{5 - 3 = 2}} in the denominator instead of {{5 - (-3) = 8}}, or inverting rise over run.",
    },
    {
      id: "exam-c2-q15",
      kind: "mcq",
      topicId: "probability-statistics",
      guideRef: "scatter-diagrams",
      difficulty: "core",
      question:
        "A scatter diagram records daily temperatures between {{14°C}} and {{28°C}} against ice-cream sales at a park, showing strong positive correlation. A student uses the line of best fit to predict sales on a day when the temperature is {{45°C}}. Why is this prediction unreliable?",
      options: [
        "45°C is outside the data range (extrapolation)",
        "45°C is inside the data range (interpolation)",
        "Positive correlation cannot predict any sales",
        "Lines of best fit must pass through the origin",
      ],
      answerIndex: 0,
      hints: [
        "Compare {{45°C}} with the observed temperature range of {{14°C}} to {{28°C}}.",
        "Predicting far beyond the measured data range assumes the straight-line trend continues forever, which may fail.",
      ],
      explanation:
        "Because {{45°C}} lies well outside the measured data range ({{14°C}} to {{28°C}}), this prediction is **extrapolation** and is unreliable — at extreme heat, fewer people may visit the park at all. Interpolation (predicting inside the range) is much more reliable, and a line of best fit does NOT have to pass through the origin.",
    },
    {
      id: "exam-c2-q16",
      kind: "short",
      topicId: "algebraic-expressions",
      guideRef: "factorising-rearranging",
      difficulty: "core",
      question: "Factorise {{12 a^2 b - 18 a b^3}} completely.",
      answer: {
        type: "expression",
        expr: "6*a*b*(2*a - 3*b^2)",
        form: "factorised",
        display: "{{6ab(2a - 3b^2)}}",
      },
      hints: [
        "Find the highest common factor of the numbers ({{12}} and {{18}}), of the powers of {{a}} ({{a^2}} and {{a}}), and of the powers of {{b}} ({{b}} and {{b^3}}).",
        "Take the full HCF {{6ab}} outside a single bracket, then divide each original term by {{6ab}} to find what stays inside.",
      ],
      solution: [
        "HCF of 12 and 18 is 6; lowest power of {{a}} is {{a}}; lowest power of {{b}} is {{b}}, so full HCF = {{6ab}}.",
        "Divide each term by {{6ab}}: {{12a^2 b / (6ab) = 2a}} and {{-18a b^3 / (6ab) = -3b^2}}.",
        "Factorised form: {{6ab(2a - 3b^2)}}. Expand back to check: {{12a^2 b - 18a b^3}}.",
      ],
      commonError: "Factorising only partially (e.g. {{6(2a^2 b - 3a b^3)}} or {{3ab(4a - 6b^2)}}) without taking out the FULL highest common factor.",
    },
    {
      id: "exam-c2-q17",
      kind: "mcq",
      topicId: "indices-standard-form",
      guideRef: "index-laws",
      difficulty: "core",
      question: "Simplify {{(15 m^7 n^2) / (3 m^2 n^5)}} fully, leaving only positive indices.",
      options: [
        "{{5 m^5 n^3}}",
        "{{12 m^5 / n^3}}",
        "{{5 m^5 / n^3}}",
        "{{5 m^9 / n^7}}",
      ],
      answerIndex: 2,
      hints: [
        "Divide the numerical coefficients ({{15 / 3}}) and subtract indices for each variable separately.",
        "Notice {{n^2 / n^5 = n^(2 - 5) = n^(-3)}} — rewrite {{n^(-3)}} with a positive index in the denominator.",
      ],
      explanation:
        "Dividing each part: {{15 / 3 = 5}}, {{m^(7 - 2) = m^5}}, and {{n^(2 - 5) = n^(-3) = 1/n^3}}, combining to {{5 m^5 / n^3}}. Writing {{12 m^5 / n^3}} subtracts {{15 - 3}} instead of dividing, and {{5 m^5 n^3}} puts {{n^3}} in the numerator instead of the denominator.",
    },
    {
      id: "exam-c2-q18",
      kind: "written",
      topicId: "transformations-similarity",
      guideRef: "rotation",
      difficulty: "core",
      diagram:
        '<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coordinate grid showing Triangle A with vertices (1,1), (4,1), (1,3) in Quadrant 1 and Triangle B with vertices (-1,-1), (-4,-1), (-1,-3) in Quadrant 3"><rect x="0" y="0" width="320" height="240" fill="var(--surface)" rx="8"/><g stroke="var(--line)" stroke-width="1"><line x1="40" y1="20" x2="40" y2="220"/><line x1="64" y1="20" x2="64" y2="220"/><line x1="88" y1="20" x2="88" y2="220"/><line x1="112" y1="20" x2="112" y2="220"/><line x1="136" y1="20" x2="136" y2="220"/><line x1="184" y1="20" x2="184" y2="220"/><line x1="208" y1="20" x2="208" y2="220"/><line x1="232" y1="20" x2="232" y2="220"/><line x1="256" y1="20" x2="256" y2="220"/><line x1="280" y1="20" x2="280" y2="220"/><line x1="40" y1="24" x2="280" y2="24"/><line x1="40" y1="48" x2="280" y2="48"/><line x1="40" y1="72" x2="280" y2="72"/><line x1="40" y1="96" x2="280" y2="96"/><line x1="40" y1="144" x2="280" y2="144"/><line x1="40" y1="168" x2="280" y2="168"/><line x1="40" y1="192" x2="280" y2="192"/><line x1="40" y1="216" x2="280" y2="216"/></g><line x1="35" y1="120" x2="288" y2="120" stroke="var(--ink)" stroke-width="1.8"/><line x1="160" y1="14" x2="160" y2="225" stroke="var(--ink)" stroke-width="1.8"/><polygon points="184,96 256,96 184,48" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2.2"/><polygon points="136,144 64,144 136,192" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="2.2"/><circle cx="160" cy="120" r="3" fill="var(--ink)"/><text x="200" y="88" fill="var(--brand)" font-size="14" font-weight="700">A</text><text x="108" y="164" fill="var(--bad)" font-size="14" font-weight="700">B</text><text x="288" y="114" fill="var(--ink)" font-size="12" font-weight="600">x</text><text x="166" y="20" fill="var(--ink)" font-size="12" font-weight="600">y</text><text x="165" y="133" fill="var(--ink-2)" font-size="11">O</text></svg>',
      question:
        "Triangle {{A}} has vertices {{(1, 1)}}, {{(4, 1)}} and {{(1, 3)}}. Triangle {{B}} has vertices {{(-1, -1)}}, {{(-4, -1)}} and {{(-1, -3)}}.\n\n(a) Describe **fully** the single transformation that maps triangle {{A}} onto triangle {{B}}.\n(b) A student claims that triangle {{B}} is a reflection of triangle {{A}} in the {{y}}-axis. Explain clearly why this student is wrong.",
      marks: 3,
      hints: [
        "Compare the coordinates of corresponding vertices: {{(1, 1) -> (-1, -1)}}, {{(4, 1) -> (-4, -1)}}, {{(1, 3) -> (-1, -3)}}.",
        "When describing a rotation fully, you MUST state the type (rotation), the angle (and direction unless it is {{180°}}), and the centre coordinates.",
        "For part (b), work out where vertex {{(1, 1)}} actually goes under a reflection in the {{y}}-axis.",
      ],
      modelAnswer:
        "(a) It is a rotation of 180° about the origin (0, 0) (note: for 180°, clockwise and anticlockwise give the same image). (b) Reflecting triangle A in the y-axis keeps all y-coordinates positive — for example, (1, 1) would map to (−1, 1) in Quadrant 2 rather than (−1, −1) in Quadrant 3.",
      markScheme: [
        {
          point: "Identifies the transformation as a rotation of 180°",
          keywords: ["180"],
        },
        {
          point: "Gives the exact centre of rotation as the origin (0, 0)",
          keywords: ["origin", "(0, 0)", "(0,0)"],
        },
        {
          point: "Explains why y-axis reflection fails (e.g. (1, 1) maps to (−1, 1) / y-coordinates remain positive)",
          keywords: ["(-1, 1)", "(-1,1)", "positive", "quadrant 2", "y-coordinate"],
        },
      ],
      commonError: "Writing only 'rotated 180°' without stating the centre {{(0, 0)}}, which loses a mark in every Year 9 / IGCSE mark scheme.",
    },
    {
      id: "exam-c2-q19",
      kind: "mcq",
      topicId: "equations-inequalities",
      guideRef: "equations-and-graphs",
      difficulty: "core",
      question:
        "The quadratic curve {{y = x^2 - 2x - 8}} crosses the {{x}}-axis at two points. What are the {{x}}-coordinates of these two points?",
      options: [
        "{{x = -4}} and {{x = 2}}",
        "{{x = 2}} and {{x = 4}}",
        "{{x = -2}} and {{x = -4}}",
        "{{x = -2}} and {{x = 4}}",
      ],
      answerIndex: 3,
      hints: [
        "Where a graph crosses the {{x}}-axis, {{y = 0}}, so solve {{x^2 - 2x - 8 = 0}}.",
        "Factorise {{x^2 - 2x - 8 = (x - 4)(x + 2)}} and set each bracket equal to 0.",
      ],
      explanation:
        "At the {{x}}-axis, {{y = 0}}, giving {{x^2 - 2x - 8 = 0}}. Factorising gives {{(x - 4)(x + 2) = 0}}, so the roots are {{x = -2}} and {{x = 4}}. Choosing {{x = -4}} and {{x = 2}} forgets to flip the signs from inside the brackets.",
    },

    // =========================================================================
    // CHALLENGE (Q20–Q25)
    // =========================================================================
    {
      id: "exam-c2-q20",
      kind: "short",
      topicId: "pythagoras-trigonometry",
      guideRef: "pythagoras-theorem",
      difficulty: "challenge",
      diagram:
        '<svg viewBox="0 0 340 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Isosceles triangle with two equal sloping sides of 13.4 cm, horizontal base 10.8 cm, and dashed vertical height h"><rect x="0" y="0" width="340" height="205" fill="var(--surface)" rx="8"/><polygon points="170,30 75,165 265,165" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="2.2"/><line x1="170" y1="30" x2="170" y2="165" stroke="var(--brand)" stroke-width="1.8" stroke-dasharray="5,4"/><polyline points="170,153 182,153 182,165" fill="none" stroke="var(--brand)" stroke-width="1.5"/><line x1="114" y1="95" x2="128" y2="103" stroke="var(--ink)" stroke-width="2"/><line x1="226" y1="95" x2="212" y2="103" stroke="var(--ink)" stroke-width="2"/><text x="64" y="92" fill="var(--ink)" font-size="13" font-weight="600">13.4 cm</text><text x="226" y="92" fill="var(--ink)" font-size="13" font-weight="600">13.4 cm</text><text x="150" y="186" fill="var(--ink)" font-size="14" font-weight="600">10.8 cm</text><text x="178" y="114" fill="var(--brand)" font-size="15" font-weight="700">h</text></svg>',
      question:
        "An isosceles triangle has two equal sloping sides of length {{13.4}} cm and a horizontal base of length {{10.8}} cm. Calculate the **area** of the triangle, giving your answer to **1 decimal place**.",
      answer: { type: "number", value: 66.2, tolerance: 0.05, display: "66.2 cm²" },
      traps: [
        {
          spec: { type: "number", value: 72.4, tolerance: 0.1 },
          feedback: "{{72.4}} cm² used the sloping side {{13.4}} cm as the height. You need the PERPENDICULAR height {{h}} using Pythagoras first!",
        },
        {
          spec: { type: "number", value: 12.3, tolerance: 0.1 },
          feedback: "{{12.3}} cm is the perpendicular height {{h}} — now finish by finding {{Area = (1/2) * 10.8 * h}}!",
        },
      ],
      hints: [
        "Drop a perpendicular line from the apex to bisect the base into two equal halves of {{10.8 / 2 = 5.4}} cm.",
        "Use Pythagoras' theorem on one right-angled half: {{h = sqrt(13.4^2 - 5.4^2)}}.",
        "Keep full calculator accuracy for {{h}}, then compute {{Area = (1/2) * base * h}} and round only at the very end.",
      ],
      strategy: "Split an isosceles triangle into two right-angled halves",
      solution: [
        "Half the base = {{10.8 / 2 = 5.4}} cm.",
        "Perpendicular height: {{h = sqrt(13.4^2 - 5.4^2) = sqrt(179.56 - 29.16) = sqrt(150.4) = 12.2637...}} cm.",
        "Area = {{0.5 * 10.8 * 12.2637... = 66.2243...}} cm².",
        "Rounded to 1 decimal place: {{66.2}} cm².",
      ],
      commonError: "Using the full base {{10.8}} cm in Pythagoras instead of half the base {{5.4}} cm, or using the slanted side {{13.4}} cm as the height.",
    },
    {
      id: "exam-c2-q21",
      kind: "short",
      topicId: "surface-area-volume",
      guideRef: "measurement-accuracy",
      difficulty: "challenge",
      question:
        "A rectangular steel plate has length {{14}} cm and width {{9}} cm, both measured to the **nearest centimetre**. Calculate the exact **upper bound** for the area of the plate, in cm².",
      answer: { type: "number", value: 137.75, display: "137.75 cm²" },
      traps: [
        {
          spec: { type: "number", value: 126.5 },
          feedback: "Find the upper bound of EACH measurement first ({{14.5}} cm and {{9.5}} cm), then multiply them — do not just add 0.5 to {{14 * 9}}!",
        },
        {
          spec: { type: "number", value: 114.75 },
          feedback: "{{114.75}} cm² is the LOWER bound ({{13.5 * 8.5}}). The question asks for the UPPER bound.",
        },
      ],
      hints: [
        "To the nearest centimetre, half of 1 cm is {{0.5}} cm.",
        "Write down the upper bound of the length ({{14.5}} cm) and the upper bound of the width ({{9.5}} cm).",
        "To maximise a product {{L * W}}, multiply {{UB(L) * UB(W)}}.",
      ],
      solution: [
        "Upper bound of length = {{14 + 0.5 = 14.5}} cm.",
        "Upper bound of width = {{9 + 0.5 = 9.5}} cm.",
        "Upper bound of area = {{14.5 * 9.5 = 137.75}} cm².",
      ],
      commonError: "Using {{14.4 * 9.4}} instead of {{14.5 * 9.5}}, or computing {{14 * 9 = 126}} first and adding {{0.5}}.",
    },
    {
      id: "exam-c2-q22",
      kind: "written",
      topicId: "angles-bearings",
      guideRef: "back-bearings-angle-rules",
      difficulty: "challenge",
      diagram:
        '<svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ship journey from port P to island Q on bearing 062 degrees for 18 km, then from Q to lighthouse R on bearing 152 degrees for 24 km, with North lines at P and Q"><rect x="0" y="0" width="380" height="220" fill="var(--surface)" rx="8"/><line x1="75" y1="120" x2="75" y2="30" stroke="var(--ink-2)" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="185" y1="62" x2="185" y2="12" stroke="var(--ink-2)" stroke-width="1.5" stroke-dasharray="4,3"/><text x="70" y="24" fill="var(--ink-2)" font-size="12" font-weight="700">N</text><text x="180" y="10" fill="var(--ink-2)" font-size="12" font-weight="700">N</text><line x1="75" y1="120" x2="185" y2="62" stroke="var(--ink)" stroke-width="2.2"/><line x1="185" y1="62" x2="262" y2="195" stroke="var(--ink)" stroke-width="2.2"/><line x1="75" y1="120" x2="262" y2="195" stroke="var(--brand)" stroke-width="2" stroke-dasharray="6,4"/><path d="M 75 90 A 30 30 0 0 1 101.5 106" fill="none" stroke="var(--brand)" stroke-width="2"/><path d="M 185 36 A 26 26 0 0 1 198 84.5" fill="none" stroke="var(--good)" stroke-width="2"/><circle cx="75" cy="120" r="3.5" fill="var(--ink)"/><circle cx="185" cy="62" r="3.5" fill="var(--ink)"/><circle cx="262" cy="195" r="3.5" fill="var(--ink)"/><text x="58" y="128" fill="var(--ink)" font-size="14" font-weight="700">P</text><text x="193" y="57" fill="var(--ink)" font-size="14" font-weight="700">Q</text><text x="270" y="202" fill="var(--ink)" font-size="14" font-weight="700">R</text><text x="86" y="78" fill="var(--brand)" font-size="12" font-weight="700">062°</text><text x="208" y="68" fill="var(--good)" font-size="12" font-weight="700">152°</text><text x="115" y="110" fill="var(--ink)" font-size="12" font-weight="600">18 km</text><text x="234" y="132" fill="var(--ink)" font-size="12" font-weight="600">24 km</text></svg>',
      question:
        "A ferry sails from port {{P}} to island {{Q}} on a bearing of {{062°}} for {{18}} km. At {{Q}}, it turns onto a bearing of {{152°}} and sails {{24}} km to lighthouse {{R}}.\n\n(a) Show, using parallel North lines and angle rules, that {{∠PQR = 90°}}.\n(b) Calculate the direct straight-line distance {{PR}} from port {{P}} to lighthouse {{R}}.\n(c) *(Extension)* Calculate the three-figure bearing of lighthouse {{R}} from port {{P}}, to the **nearest degree**.",
      marks: 4,
      hints: [
        "For part (a), find the back bearing of {{P}} from {{Q}} ({{062° + 180° = 242°}}) — or find the co-interior angle at {{Q}} ({{180° - 62° = 118°}}).",
        "Compare that angle with the bearing {{152°}} to prove {{∠PQR = 90°}}.",
        "For part (b), apply Pythagoras' theorem to right-angled triangle {{PQR}} with legs {{18}} km and {{24}} km.",
        "For part (c), find {{∠QPR = tan^(-1)(24 / 18)}} and add it to the bearing {{062°}}.",
      ],
      modelAnswer:
        "(a) Because the North lines at P and Q are parallel, the back bearing of P from Q is 062° + 180° = 242° (equivalently, the co-interior angle west of North at Q is 180° − 62° = 118°). Therefore ∠PQR = 242° − 152° = 90° (or 360° − 118° − 152° = 90°). (b) By Pythagoras' theorem in right-angled triangle PQR, PR = √(18² + 24²) = √(324 + 576) = √900 = 30 km. (c) In triangle PQR, tan(∠QPR) = 24/18 = 4/3, so ∠QPR = tan⁻¹(4/3) = 53.13°. Adding this to 062° gives the bearing of R from P as 062° + 53.13° = 115.13°, which rounds to 115°.",
      markScheme: [
        {
          point: "Uses parallel North lines to find back bearing 242° or co-interior angle 118°",
          keywords: ["242", "118", "co-interior", "back bearing"],
        },
        {
          point: "Shows clearly that ∠PQR = 242° − 152° = 90° (or 360° − 118° − 152° = 90°)",
          keywords: [
            "242° - 152°",
            "242 - 152",
            "242-152",
            "360° - 118° - 152°",
            "360 - 118 - 152",
            "360 - 152 - 118",
            "right angle",
          ],
        },
        {
          point: "Applies Pythagoras' theorem to find PR = 30 km",
          keywords: ["30", "900"],
        },
        {
          point: "Computes ∠QPR ≈ 53.1° and adds to 062° to give bearing 115°",
          keywords: ["115"],
        },
      ],
      commonError: "Giving {{∠QPR = 53°}} as the final bearing instead of adding it to the initial bearing {{062°}}.",
    },
    {
      id: "exam-c2-q23",
      kind: "written",
      topicId: "linear-graphs",
      guideRef: "inequality-regions",
      difficulty: "challenge",
      diagram:
        '<svg viewBox="0 0 320 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coordinate plane showing the triangular region R bounded by x >= 0, y >= 2, and 2x + y <= 10"><rect x="0" y="0" width="320" height="230" fill="var(--surface)" rx="8"/><line x1="48" y1="195" x2="285" y2="195" stroke="var(--ink)" stroke-width="1.8"/><line x1="65" y1="205" x2="65" y2="20" stroke="var(--ink)" stroke-width="1.8"/><polygon points="65,163 65,35 201,163" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2.2"/><line x1="48" y1="163" x2="275" y2="163" stroke="var(--ink-2)" stroke-width="1.5"/><line x1="56" y1="27" x2="235" y2="195" stroke="var(--ink-2)" stroke-width="1.5"/><circle cx="65" cy="163" r="3.5" fill="var(--brand)"/><circle cx="65" cy="35" r="3.5" fill="var(--brand)"/><circle cx="201" cy="163" r="3.5" fill="var(--brand)"/><text x="108" y="138" fill="var(--brand)" font-size="16" font-weight="700">R</text><text x="275" y="156" fill="var(--ink-2)" font-size="12" font-weight="600">y = 2</text><text x="155" y="96" fill="var(--ink-2)" font-size="12" font-weight="600">2x + y = 10</text><text x="288" y="199" fill="var(--ink)" font-size="12" font-weight="600">x</text><text x="71" y="25" fill="var(--ink)" font-size="12" font-weight="600">y</text></svg>',
      question:
        "A closed triangular region {{R}} is defined by the three inequalities {{x >= 0}}, {{y >= 2}} and {{2x + y <= 10}}.\n\n(a) Find the exact coordinates of all three vertices (corners) of region {{R}}.\n(b) Calculate the exact area of region {{R}}, in square units.",
      marks: 3,
      hints: [
        "Each vertex is the intersection of two boundary lines: {{x = 0}}, {{y = 2}}, and {{2x + y = 10}}.",
        "Substitute {{x = 0}} into {{2x + y = 10}} for the top vertex, and substitute {{y = 2}} into {{2x + y = 10}} for the right-hand vertex.",
        "Because {{x = 0}} and {{y = 2}} are perpendicular, region {{R}} is a right-angled triangle — read off its base and height from the vertex coordinates!",
      ],
      modelAnswer:
        "(a) Intersecting x = 0 with y = 2 gives (0, 2). Intersecting x = 0 with 2x + y = 10 gives (0, 10). Intersecting y = 2 with 2x + y = 10 gives 2x + 2 = 10, so x = 4 and the third vertex is (4, 2). (b) Region R is a right-angled triangle of base 4 units (from x = 0 to x = 4) and height 8 units (from y = 2 to y = 10). Therefore Area = 0.5 × 4 × 8 = 16 square units.",
      markScheme: [
        {
          point: "Finds the vertices on the y-axis: (0, 2) and (0, 10)",
          keywords: ["(0, 10)", "(0,10)"],
        },
        {
          point: "Solves 2x + 2 = 10 to find the third vertex (4, 2)",
          keywords: ["(4, 2)", "(4,2)"],
        },
        {
          point: "Uses base 4 and height 8 to calculate Area = 16 square units",
          keywords: ["16"],
        },
      ],
      commonError: "Using height 10 instead of {{10 - 2 = 8}} when calculating the triangle's area (getting 20 instead of 16).",
    },
    {
      id: "exam-c2-q24",
      kind: "short",
      topicId: "algebraic-expressions",
      guideRef: "geometric-algebra",
      difficulty: "challenge",
      question:
        "A closed cuboid has length {{(x + 5)}} cm, width {{x}} cm and height {{3}} cm. Its total surface area is {{150}} cm². Find the positive value of {{x}}.",
      answer: { type: "number", value: 4, display: "x = 4" },
      traps: [
        {
          spec: { type: "number", value: 15 },
          feedback: "Check the sign in {{(x + 15)(x - 4) = 0}}: the roots are {{x = 4}} and {{x = -15}}, so the positive length is {{x = 4}}.",
        },
      ],
      hints: [
        "A cuboid has 3 pairs of opposite rectangular faces: {{SA = 2(lw + lh + wh)}}.",
        "Substitute {{l = x + 5}}, {{w = x}}, {{h = 3}} and set {{2(x(x + 5) + 3(x + 5) + 3x) = 150}}.",
        "Divide both sides by 2, simplify to {{x^2 + 11x - 60 = 0}}, factorise, and reject the negative root.",
      ],
      strategy: "Form a quadratic equation from surface area",
      solution: [
        "Total surface area = {{2[x(x + 5) + 3(x + 5) + 3x] = 2(x^2 + 5x + 3x + 15 + 3x) = 2(x^2 + 11x + 15)}}.",
        "Set equal to {{150}} and divide by 2: {{x^2 + 11x + 15 = 75}}.",
        "Rearrange to zero: {{x^2 + 11x - 60 = 0}}.",
        "Factorise: {{(x + 15)(x - 4) = 0}}, giving {{x = 4}} or {{x = -15}}. Since width must be positive, {{x = 4}}.",
      ],
      commonError: "Forgetting the factor of 2 (counting only 3 faces instead of all 6 faces of the cuboid).",
    },
    {
      id: "exam-c2-q25",
      kind: "written",
      topicId: "probability-statistics",
      guideRef: "sample-space-tables-venn",
      difficulty: "challenge",
      question:
        "A survey of {{120}} Year 9 students recorded how they travel to school and whether they live within {{3}} km or over {{3}} km away:\n\n| Distance | Bus | MRT | Walk | Total |\n|---|---|---|---|---|\n| Within 3 km | 14 | {{a}} | 29 | 55 |\n| Over 3 km | 28 | 34 | {{b}} | {{c}} |\n| Total | 42 | {{d}} | 32 | 120 |\n\n(a) Find the missing numbers {{a}}, {{b}}, {{c}} and {{d}}.\n(b) One of the students who travels by **MRT** is selected at random. Calculate the probability that this student lives **over 3 km** from school, giving your answer both as a fraction in simplest form and as a decimal to **2 decimal places**.",
      marks: 4,
      hints: [
        "Use row and column totals to work out {{a = 55 - 14 - 29}} and {{c = 120 - 55}} first.",
        "Then find {{b}} from the Walk column ({{32 - 29}}) and verify it with the Over 3 km row; find {{d = a + 34}}.",
        "Read part (b) carefully: we ALREADY know the chosen student travels by MRT — so the denominator is the MRT total {{d}}, NOT {{120}}!",
        "Simplify the fraction and convert it to a decimal rounded to 2 decimal places.",
      ],
      modelAnswer:
        "(a) From the top row, a = 55 − 14 − 29 = 12. From the Total column, c = 120 − 55 = 65. From the Walk column, b = 32 − 29 = 3 (check: 28 + 34 + 3 = 65). From the MRT column, d = 12 + 34 = 46 (check: 42 + 46 + 32 = 120). (b) Among the 46 students who travel by MRT, 34 live over 3 km away, so the probability is 34/46 = 17/23, which is 0.74 to 2 decimal places.",
      markScheme: [
        {
          point: "Finds a = 12 and b = 3 accurately",
          keywords: ["a = 12", "12"],
        },
        {
          point: "Finds c = 65 and d = 46 accurately",
          keywords: ["65", "46"],
        },
        {
          point: "Uses the MRT total (46) as denominator and simplifies 34/46 to 17/23",
          keywords: ["17/23", "34/46"],
        },
        {
          point: "Converts accurately to 0.74 (2 d.p.)",
          keywords: ["0.74"],
        },
      ],
      commonError: "Using {{120}} as the denominator in part (b) (giving {{34/120 = 17/60}}) instead of conditioning on the {{46}} MRT travellers.",
    },
  ],
};
