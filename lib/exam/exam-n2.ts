import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  id: "exam-n2",
  title: "Year 9 Maths Mock Paper 2 (Non-Calculator)",
  calculator: false,
  minutes: 60,
  questions: [
    // =========================================================================
    // WARMUP (Q01–Q06)
    // =========================================================================
    {
      id: "exam-n2-q01",
      kind: "short",
      topicId: "indices-standard-form",
      guideRef: "index-laws",
      difficulty: "warmup",
      question: "Simplify {{(3x^4)^2 * 2x^3}} fully.",
      answer: {
        type: "expression",
        expr: "18x^11",
        form: "simplified",
        display: "{{18x^11}}",
      },
      traps: [
        {
          spec: { type: "expression", expr: "6x^11" },
          feedback: "Remember to square the coefficient 3 inside the bracket as well: {{3^2 = 9}}, then {{9 * 2 = 18}}.",
        },
        {
          spec: { type: "expression", expr: "18x^9" },
          feedback: "For a power of a power, multiply the indices: {{(x^4)^2 = x^8}}, then add 3 to get {{x^11}}.",
        },
      ],
      hints: [
        "Deal with the squared bracket first: square BOTH the coefficient {{3}} and {{x^4}}.",
        "Then multiply the numerical coefficients and add the powers of {{x}}.",
      ],
      solution: [
        "Raise both factors in the bracket to the power 2: {{(3x^4)^2 = 3^2 * (x^4)^2 = 9x^8}}.",
        "Multiply by {{2x^3}}: {{9 * 2 = 18}} and {{x^8 * x^3 = x^(8 + 3) = x^11}}.",
        "Final answer: {{18x^11}}.",
      ],
      commonError: "Forgetting to square the coefficient 3, or adding {{4 + 2 = 6}} instead of multiplying {{4 * 2 = 8}}.",
    },
    {
      id: "exam-n2-q02",
      kind: "short",
      topicId: "transformations-similarity",
      guideRef: "reflection-translation",
      difficulty: "warmup",
      question:
        "Point {{P(-3, 5)}} is translated 7 units in the positive {{x}}-direction and 9 units in the negative {{y}}-direction. Write down the coordinates of the image point {{P'}}.",
      answer: { type: "list", values: [4, -4], ordered: true, display: "(4, −4)" },
      traps: [
        {
          spec: { type: "list", values: [-10, 14], ordered: true },
          feedback: "You subtracted the translation vector instead of adding it: move right (+7) and down (−9).",
        },
      ],
      hints: [
        "Moving 7 units in the positive {{x}}-direction adds 7 to the {{x}}-coordinate.",
        "Moving 9 units in the negative {{y}}-direction subtracts 9 from the {{y}}-coordinate.",
      ],
      solution: [
        "New {{x}}-coordinate: {{-3 + 7 = 4}}.",
        "New {{y}}-coordinate: {{5 - 9 = -4}}.",
        "Image coordinates: {{(4, -4)}}.",
      ],
      commonError: "Reversing the signs on the translation vector or swapping the {{x}} and {{y}} coordinates.",
    },
    {
      id: "exam-n2-q03",
      kind: "mcq",
      topicId: "linear-graphs",
      guideRef: "explicit-implicit-graphs",
      difficulty: "warmup",
      question: "At which point does the straight line {{3x + 4y = 24}} cross the {{y}}-axis?",
      options: ["(0, 6)", "(6, 0)", "(0, 8)", "(8, 0)"],
      answerIndex: 0,
      hints: [
        "Every point on the {{y}}-axis has {{x = 0}}.",
        "Substitute {{x = 0}} into {{3x + 4y = 24}} (the cover-up method) and solve for {{y}}.",
      ],
      explanation:
        "On the {{y}}-axis, {{x = 0}}. Substituting {{x = 0}} gives {{4y = 24}}, so {{y = 6}}, which is the point {{(0, 6)}}. Choosing {{(8, 0)}} finds the {{x}}-intercept instead, and {{(6, 0)}} swaps the {{x}} and {{y}} coordinates.",
    },
    {
      id: "exam-n2-q04",
      kind: "mcq",
      topicId: "pythagoras-trigonometry",
      guideRef: "right-triangle-language",
      difficulty: "warmup",
      diagram:
        '<svg viewBox="0 0 340 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right-angled triangle PQR with right angle at Q and acute angle theta marked at vertex R"><rect x="0" y="0" width="340" height="190" fill="var(--surface)" rx="8"/><polygon points="80,45 80,150 265,150" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="2.2"/><polyline points="80,134 96,134 96,150" fill="none" stroke="var(--ink)" stroke-width="1.8"/><path d="M 232 150 A 33 33 0 0 1 237 134" fill="none" stroke="var(--brand)" stroke-width="2"/><text x="64" y="45" fill="var(--ink)" font-size="14" font-weight="700">P</text><text x="63" y="160" fill="var(--ink)" font-size="14" font-weight="700">Q</text><text x="272" y="158" fill="var(--ink)" font-size="14" font-weight="700">R</text><text x="215" y="143" fill="var(--brand)" font-size="15" font-weight="700">θ</text></svg>',
      question:
        "In right-angled triangle {{PQR}}, {{∠Q = 90°}} and angle {{theta}} is marked at vertex {{R}}. Which statement correctly identifies the **hypotenuse** and the **opposite** side to angle {{theta}}?",
      options: [
        "Hypotenuse is PR; opposite is QR",
        "Hypotenuse is QR; opposite is PQ",
        "Hypotenuse is PR; opposite is PQ",
        "Hypotenuse is PQ; opposite is PR",
      ],
      answerIndex: 2,
      hints: [
        "The hypotenuse is always the longest side, directly opposite the {{90°}} angle.",
        "The opposite side to {{theta}} is the side that does NOT touch vertex {{R}}.",
      ],
      explanation:
        "The hypotenuse is directly across from the right angle at {{Q}}, so it is side {{PR}}. Relative to angle {{theta}} at vertex {{R}}, the side directly across from {{R}} is {{PQ}} (opposite), while {{QR}} is the adjacent side. Calling {{QR}} the opposite confuses the adjacent and opposite sides.",
    },
    {
      id: "exam-n2-q05",
      kind: "mcq",
      topicId: "angles-bearings",
      guideRef: "back-bearings-angle-rules",
      difficulty: "warmup",
      question: "The bearing of town {{B}} from town {{A}} is {{074°}}. What is the bearing of town {{A}} from town {{B}}?",
      options: ["106°", "164°", "286°", "254°"],
      answerIndex: 3,
      hints: [
        "A back bearing reverses the direction by {{180°}}.",
        "Since {{074°}} is less than {{180°}}, add {{180°}} to find the return bearing.",
      ],
      explanation:
        "To find the back bearing of {{A}} from {{B}}, add {{180°}} whenever the forward bearing is less than {{180°}}: {{74° + 180° = 254°}}. Subtracting from {{180°}} gives the co-interior angle {{106°}} (measured anticlockwise from North), and subtracting from {{360°}} gives {{286°}}.",
    },
    {
      id: "exam-n2-q06",
      kind: "mcq",
      topicId: "probability-statistics",
      guideRef: "scatter-diagrams",
      difficulty: "warmup",
      question:
        "A scatter diagram plots the age of used cars (in years) against their resale price, showing that older cars generally sell for less. Which description matches this relationship?",
      options: [
        "Positive correlation (price rises with age)",
        "Zero correlation (no link between age and price)",
        "Constant correlation (price stays unchanged)",
        "Negative correlation (price falls as age rises)",
      ],
      answerIndex: 3,
      hints: [
        "When one variable increases while the other tends to decrease, the points slope downwards from left to right.",
        "A downward trend on a scatter graph represents negative correlation.",
      ],
      explanation:
        "Because resale price decreases as car age increases, the plotted points slope downwards from left to right, showing negative correlation. Positive correlation would mean older cars sell for more, and zero correlation would mean no clear trend at all.",
    },

    // =========================================================================
    // CORE (Q07–Q19)
    // =========================================================================
    {
      id: "exam-n2-q07",
      kind: "short",
      topicId: "fdp-ratio-fractions",
      guideRef: "percentage-multipliers",
      difficulty: "core",
      question:
        "A coat normally costs £80. It is reduced by {{15%}} in a winter sale, and a member's voucher then takes an extra {{10%}} off the sale price. What is the final price of the coat, in £?",
      answer: { type: "number", value: 61.2, display: "£61.20" },
      traps: [
        {
          spec: { type: "number", value: 60 },
          feedback: "You cannot add 15% + 10% = 25% off £80 because the second 10% is taken off the ALREADY reduced sale price (£68).",
        },
        {
          spec: { type: "number", value: 68 },
          feedback: "£68 is the price after the first 15% discount — now apply the extra 10% off £68.",
        },
      ],
      hints: [
        "Find the price after the {{15%}} reduction first (or multiply by {{0.85}}).",
        "Then take {{10%}} off that NEW price (multiply by {{0.90}}), rather than subtracting {{25%}} of £80.",
      ],
      strategy: "Apply percentage multipliers sequentially",
      solution: [
        "First reduction of {{15%}}: {{10%}} of £80 is £8 and {{5%}} is £4, so {{15%}} is £12.",
        "Sale price = {{80 - 12 = 68}} (£68).",
        "Extra {{10%}} off £68: {{10%}} of £68 is £6.80.",
        "Final price = {{68 - 6.80 = 61.20}}, so £61.20.",
      ],
      commonError: "Combining a 15% discount and a 10% discount into a single 25% discount (£60).",
    },
    {
      id: "exam-n2-q08",
      kind: "short",
      topicId: "indices-standard-form",
      guideRef: "standard-form-calculations",
      difficulty: "core",
      question: "Work out {{(3.6 * 10^5) / (9 * 10^(-2))}}, giving your answer in standard form.",
      answer: {
        type: "number",
        value: 4e6,
        standardForm: true,
        display: "{{4 * 10^6}}",
      },
      traps: [
        {
          spec: { type: "number", value: 4e2 },
          feedback: "Watch the subtraction of a negative index: {{5 - (-2) = 7}}, not {{5 - 2 = 3}}.",
        },
        {
          spec: { type: "number", value: 4e8 },
          feedback: "When adjusting {{0.4 * 10^7}} to standard form, multiplying 0.4 by 10 means dividing {{10^7}} by 10, giving {{10^6}}, not {{10^8}}.",
        },
      ],
      hints: [
        "Divide the front numbers ({{3.6 / 9}}) and divide the powers of 10 separately using index laws.",
        "When dividing powers of 10, subtract the indices carefully: {{5 - (-2)}}.",
        "Adjust {{0.4 * 10^7}} so the front number lies between 1 and 10.",
      ],
      solution: [
        "Divide the mantissas: {{3.6 / 9 = 0.4}}.",
        "Divide the powers of 10: {{10^5 / 10^(-2) = 10^(5 - (-2)) = 10^7}}.",
        "Adjust into standard form: {{0.4 * 10^7 = (4 * 10^(-1)) * 10^7 = 4 * 10^6}}.",
      ],
      commonError: "Writing {{10^(5 - 2) = 10^3}} instead of {{10^(5 - (-2)) = 10^7}}, or leaving {{0.4 * 10^7}} unadjusted.",
    },
    {
      id: "exam-n2-q09",
      kind: "short",
      topicId: "algebraic-expressions",
      guideRef: "geometric-algebra",
      difficulty: "core",
      diagram:
        '<svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Large rectangle of width x plus 6 cm and height x plus 2 cm with a square of side x cm cut out from the top right corner"><rect x="0" y="0" width="360" height="210" fill="var(--surface)" rx="8"/><path d="M 65 40 L 185 40 L 185 110 L 285 110 L 285 165 L 65 165 Z" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="2.2"/><rect x="185" y="40" width="100" height="70" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.6" stroke-dasharray="5,4"/><text x="155" y="188" fill="var(--ink)" font-size="14" font-weight="600">(x + 6) cm</text><text x="10" y="108" fill="var(--ink)" font-size="13" font-weight="600">(x + 2)</text><text x="24" y="124" fill="var(--ink)" font-size="13" font-weight="600">cm</text><text x="218" y="32" fill="var(--ink-2)" font-size="13" font-weight="600">x cm</text><text x="294" y="80" fill="var(--ink-2)" font-size="13" font-weight="600">x cm</text><text x="212" y="80" fill="var(--ink-2)" font-size="12">cut out</text></svg>',
      question:
        "A rectangle measuring {{(x + 6)}} cm by {{(x + 2)}} cm has a square of side {{x}} cm cut out from one corner. Write a fully simplified algebraic expression for the **remaining shaded area**, in cm².",
      answer: {
        type: "expression",
        expr: "8x + 12",
        form: "simplified",
        display: "{{8x + 12}} cm²",
      },
      traps: [
        {
          spec: { type: "expression", expr: "x^2 + 8x + 12" },
          feedback: "{{x^2 + 8x + 12}} is the full rectangle — remember to subtract the {{x^2}} cut-out square!",
        },
        {
          spec: { type: "expression", expr: "8x + 8" },
          feedback: "Check the constant term when expanding {{(x + 6)(x + 2)}}: {{6 * 2 = 12}}, not {{6 + 2 = 8}}.",
        },
      ],
      hints: [
        "Find the area of the whole outer rectangle by expanding {{(x + 6)(x + 2)}}.",
        "Subtract the area of the cut-out square ({{x^2}}) and simplify.",
      ],
      strategy: "Whole minus cut-out",
      solution: [
        "Area of the full rectangle = {{(x + 6)(x + 2) = x^2 + 2x + 6x + 12 = x^2 + 8x + 12}}.",
        "Area of the cut-out square = {{x * x = x^2}}.",
        "Remaining shaded area = {{(x^2 + 8x + 12) - x^2 = 8x + 12}} cm².",
      ],
      commonError: "Forgetting to subtract {{x^2}} or adding 6 and 2 instead of multiplying them for the constant term.",
    },
    {
      id: "exam-n2-q10",
      kind: "short",
      topicId: "equations-inequalities",
      guideRef: "simple-quadratics",
      difficulty: "core",
      question: "Find both solutions of the quadratic equation {{x^2 - 5x - 14 = 0}}.",
      answer: {
        type: "list",
        values: [-2, 7],
        ordered: false,
        display: "x = −2 or x = 7",
      },
      traps: [
        {
          spec: { type: "list", values: [2, -7], ordered: false },
          feedback: "You found the right factorised brackets {{(x - 7)(x + 2) = 0}}, but remember to set each bracket to 0: {{x - 7 = 0}} gives {{x = +7}} and {{x + 2 = 0}} gives {{x = -2}}.",
        },
      ],
      hints: [
        "Look for two integers that multiply to {{-14}} and add to {{-5}}.",
        "Factorise into {{(x - 7)(x + 2) = 0}}.",
        "Apply the zero-product property: set each bracket equal to zero to find both values of {{x}}.",
      ],
      solution: [
        "Find two numbers multiplying to {{-14}} and summing to {{-5}}: {{-7}} and {{+2}}.",
        "Factorise: {{(x - 7)(x + 2) = 0}}.",
        "Set each factor to zero: {{x - 7 = 0 => x = 7}}, or {{x + 2 = 0 => x = -2}}.",
      ],
      commonError: "Reading the solutions directly from the signs inside the brackets (giving {{-7}} and {{+2}} instead of {{+7}} and {{-2}}).",
    },
    {
      id: "exam-n2-q11",
      kind: "written",
      topicId: "linear-graphs",
      guideRef: "gradients-intercepts-context",
      difficulty: "core",
      question:
        "The total bill {{C}} (in £) for a plumbing repair lasting {{t}} hours is modelled by the linear equation {{C = 35t + 45}}.\n\n(a) Explain what the {{y}}-intercept ({{45}}) and the gradient ({{35}}) represent in this real-life context.\n(b) Work out how many hours a repair lasted if the total bill was £185.",
      marks: 3,
      hints: [
        "Set {{t = 0}} to see what {{C = 45}} represents before any time is spent working.",
        "Check how much {{C}} increases every time {{t}} increases by 1 hour.",
        "For part (b), substitute {{C = 185}} into {{C = 35t + 45}} and solve for {{t}}.",
      ],
      modelAnswer:
        "(a) The intercept 45 represents a fixed call-out fee of £45 charged even when 0 hours are worked. The gradient 35 represents the hourly labour rate of £35 per hour. (b) Setting 35t + 45 = 185 gives 35t = 140, so t = 140 ÷ 35 = 4 hours.",
      markScheme: [
        {
          point: "Interprets 45 as the fixed / initial / call-out fee (£45 before work begins)",
          keywords: ["fixed", "call-out", "callout", "initial", "standing", "base fee", "starting"],
        },
        {
          point: "Interprets 35 as the hourly rate (£35 per hour / each additional hour)",
          keywords: ["per hour", "hourly", "each hour", "every hour"],
        },
        {
          point: "Solves 35t + 45 = 185 to obtain t = 4 hours",
          keywords: ["4", "t = 4", "4 hours"],
        },
      ],
      commonError: "Swapping the meanings of gradient and intercept, or dividing 185 by 35 without first subtracting 45.",
    },
    {
      id: "exam-n2-q12",
      kind: "mcq",
      topicId: "transformations-similarity",
      guideRef: "rotation",
      difficulty: "core",
      question:
        "Point {{A(4, 1)}} is rotated {{90°}} anticlockwise about the origin {{(0, 0)}}. What are the coordinates of its image {{A'}}?",
      options: ["(1, −4)", "(−1, 4)", "(−4, −1)", "(−4, 1)"],
      answerIndex: 1,
      hints: [
        "Picture the L-shape from {{(0, 0)}} to {{(4, 1)}}: 4 units right, then 1 unit up.",
        "Rotate that L-shape {{90°}} anticlockwise: '4 right' turns into '4 up', and '1 up' turns into '1 left'.",
      ],
      explanation:
        "Rotating {{90°}} anticlockwise about the origin maps {{(x, y)}} to {{(-y, x)}}. Applying this to {{(4, 1)}} sends 4 right to 4 up and 1 up to 1 left, landing at {{(-1, 4)}}. Choosing {{(1, -4)}} rotates {{90°}} clockwise instead, and {{(-4, -1)}} is a {{180°}} rotation.",
    },
    {
      id: "exam-n2-q13",
      kind: "short",
      topicId: "pythagoras-trigonometry",
      guideRef: "pythagoras-theorem",
      difficulty: "core",
      question: "Calculate the exact distance between the points {{A(-2, 1)}} and {{B(4, 9)}} on a coordinate grid.",
      answer: { type: "number", value: 10 },
      traps: [
        {
          spec: { type: "number", value: 14 },
          feedback: "14 is the horizontal change plus vertical change (6 + 8). Use Pythagoras' theorem for the diagonal straight-line distance.",
        },
        {
          spec: { type: "number", value: 100 },
          feedback: "{{100}} is {{d^2}} — remember to take the square root of 100!",
        },
      ],
      hints: [
        "Find the horizontal run {{Delta x = 4 - (-2)}} and the vertical rise {{Delta y = 9 - 1}}.",
        "Treat the segment {{AB}} as the hypotenuse of a right-angled triangle with legs 6 and 8.",
        "Apply Pythagoras' theorem: {{d = sqrt(6^2 + 8^2)}}.",
      ],
      strategy: "Form a right-angled triangle on the grid",
      solution: [
        "Horizontal difference: {{4 - (-2) = 6}}.",
        "Vertical difference: {{9 - 1 = 8}}.",
        "Distance: {{d = sqrt(6^2 + 8^2) = sqrt(36 + 64) = sqrt(100) = 10}} units.",
      ],
      commonError: "Calculating {{4 - 2 = 2}} instead of {{4 - (-2) = 6}} for the horizontal distance.",
    },
    {
      id: "exam-n2-q14",
      kind: "short",
      topicId: "surface-area-volume",
      guideRef: "prisms-cylinders",
      difficulty: "core",
      diagram:
        '<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Solid right cylinder with radius 5 cm and height 12 cm"><rect x="0" y="0" width="320" height="210" fill="var(--surface)" rx="8"/><path d="M 95 55 L 95 160 A 65 20 0 0 0 225 160 L 225 55" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="2.2"/><ellipse cx="160" cy="55" rx="65" ry="20" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2.2"/><path d="M 95 160 A 65 20 0 0 1 225 160" fill="none" stroke="var(--ink-2)" stroke-width="1.5" stroke-dasharray="5,4"/><line x1="160" y1="55" x2="225" y2="55" stroke="var(--brand)" stroke-width="2.2"/><circle cx="160" cy="55" r="2.8" fill="var(--brand)"/><text x="176" y="48" fill="var(--brand)" font-size="13" font-weight="700">5 cm</text><text x="236" y="114" fill="var(--ink)" font-size="14" font-weight="600">12 cm</text></svg>',
      question:
        "A solid right cylinder has base radius {{5}} cm and height {{12}} cm. Find its **exact total surface area** in terms of {{pi}}, in cm².",
      answer: {
        type: "expression",
        expr: "170*pi",
        form: "simplified",
        display: "{{170pi}} cm²",
      },
      traps: [
        {
          spec: { type: "expression", expr: "120*pi" },
          feedback: "{{120pi}} is only the curved surface area — remember to add the top and bottom circular faces ({{2 * 25pi = 50pi}}).",
        },
        {
          spec: { type: "expression", expr: "145*pi" },
          feedback: "A closed solid cylinder has TWO circular ends (top and bottom), not just one!",
        },
        {
          spec: { type: "expression", expr: "300*pi" },
          feedback: "{{300pi}} is the volume ({{pi r^2 h}}), not the total surface area.",
        },
      ],
      hints: [
        "Unroll the net of a closed cylinder: it consists of TWO circles plus ONE curved rectangle of width {{2 pi r}} and height {{h}}.",
        "Calculate the area of the two circular ends: {{2 * pi * 5^2}}.",
        "Calculate the curved surface area {{2 * pi * 5 * 12}} and add the two parts together.",
      ],
      solution: [
        "Area of the two circular ends = {{2 * pi * r^2 = 2 * pi * 5^2 = 50pi}} cm².",
        "Curved surface area = {{2 * pi * r * h = 2 * pi * 5 * 12 = 120pi}} cm².",
        "Total surface area = {{50pi + 120pi = 170pi}} cm².",
      ],
      commonError: "Including only one circular end ({{145pi}}), omitting both ends ({{120pi}}), or computing volume ({{300pi}}) instead.",
    },
    {
      id: "exam-n2-q15",
      kind: "short",
      topicId: "probability-statistics",
      guideRef: "sample-space-tables-venn",
      difficulty: "core",
      question:
        "In a group of {{40}} Year 9 students, {{24}} study Spanish, {{18}} study Art, and {{7}} study both Spanish and Art. One student is selected at random. Find the probability that this student studies **neither** Spanish nor Art, giving your answer as a fraction in simplest form.",
      answer: { type: "fraction", n: 1, d: 8, simplest: true },
      traps: [
        {
          spec: { type: "fraction", n: 7, d: 8 },
          feedback: "{{7/8}} is the probability of studying AT LEAST ONE of the subjects — subtract from 1 for neither.",
        },
        {
          spec: { type: "fraction", n: 7, d: 40 },
          feedback: "{{7/40}} is the probability of studying BOTH subjects, not neither.",
        },
      ],
      hints: [
        "Draw a two-circle Venn diagram and place {{7}} in the middle overlap FIRST.",
        "Subtract the overlap from each total: Spanish only = {{24 - 7}}, Art only = {{18 - 7}}.",
        "Subtract the sum inside the circles from {{40}} to find how many study neither, then divide by {{40}} and simplify.",
      ],
      strategy: "Fill the Venn overlap first",
      solution: [
        "Spanish only = {{24 - 7 = 17}}; Art only = {{18 - 7 = 11}}; both = {{7}}.",
        "Students studying at least one subject = {{17 + 7 + 11 = 35}}.",
        "Students studying neither = {{40 - 35 = 5}}.",
        "Probability = {{5/40 = 1/8}}.",
      ],
      commonError: "Forgetting to subtract the overlap of 7 before adding 24 and 18.",
    },
    {
      id: "exam-n2-q16",
      kind: "mcq",
      topicId: "equations-inequalities",
      guideRef: "equations-and-graphs",
      difficulty: "core",
      question:
        "The straight lines {{y = 2x - 1}} and {{y = -x + 8}} are plotted on the same pair of axes. What are the coordinates of their point of intersection?",
      options: ["(3, 5)", "(5, 3)", "(3, 11)", "(9, 17)"],
      answerIndex: 0,
      hints: [
        "At the intersection point, both lines have the same {{y}}-value, so set {{2x - 1 = -x + 8}}.",
        "Solve for {{x}}, then substitute back into either equation to find {{y}}.",
      ],
      explanation:
        "Setting {{2x - 1 = -x + 8}} gives {{3x = 9}}, so {{x = 3}}. Substituting {{x = 3}} into {{y = 2x - 1}} gives {{y = 5}} (and checking in {{y = -3 + 8 = 5}} confirms it). Therefore the lines meet at {{(3, 5)}}. Writing {{(5, 3)}} reverses the coordinates, and {{(9, 17)}} comes from writing {{2x - x = 9}} instead of adding {{x}} to both sides.",
    },
    {
      id: "exam-n2-q17",
      kind: "mcq",
      topicId: "transformations-similarity",
      guideRef: "congruence-similarity",
      difficulty: "core",
      question:
        "Two triangles each have sides of length {{6}} cm and {{9}} cm, together with a {{40°}} angle that is **not** between those two sides (an ASS configuration). Which statement is always true?",
      options: [
        "They are always congruent by SAS",
        "They are always congruent by RHS",
        "They need not be congruent (ASS)",
        "They are always similar by AAA",
      ],
      answerIndex: 2,
      hints: [
        "Recall the four valid triangle congruence conditions: SSS, SAS, ASA and RHS.",
        "For SAS, the known angle MUST be the included angle between the two known sides.",
      ],
      explanation:
        "Because the {{40°}} angle is NOT included between the {{6}} cm and {{9}} cm sides, this is an ASS (side-side-angle) arrangement. Two different non-congruent triangles can satisfy ASS (one acute and one obtuse), so ASS does not guarantee congruence. SAS requires the angle to lie between the two given sides, and RHS requires a {{90°}} angle.",
    },
    {
      id: "exam-n2-q18",
      kind: "written",
      topicId: "probability-statistics",
      guideRef: "cumulative-frequency-box-plots",
      difficulty: "core",
      diagram:
        '<svg viewBox="0 0 460 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dual box plots comparing Class 9A (min 18, LQ 32, median 42, UQ 48, max 56) and Class 9B (min 14, LQ 24, median 38, UQ 50, max 58) on a 0 to 60 mark scale"><rect x="0" y="0" width="460" height="195" fill="var(--surface)" rx="8"/><line x1="75" y1="152" x2="435" y2="152" stroke="var(--ink)" stroke-width="1.8"/><g font-size="11" fill="var(--ink-2)" text-anchor="middle"><line x1="75" y1="152" x2="75" y2="158" stroke="var(--ink)"/><text x="75" y="172">0</text><line x1="135" y1="152" x2="135" y2="158" stroke="var(--ink)"/><text x="135" y="172">10</text><line x1="195" y1="152" x2="195" y2="158" stroke="var(--ink)"/><text x="195" y="172">20</text><line x1="255" y1="152" x2="255" y2="158" stroke="var(--ink)"/><text x="255" y="172">30</text><line x1="315" y1="152" x2="315" y2="158" stroke="var(--ink)"/><text x="315" y="172">40</text><line x1="375" y1="152" x2="375" y2="158" stroke="var(--ink)"/><text x="375" y="172">50</text><line x1="435" y1="152" x2="435" y2="158" stroke="var(--ink)"/><text x="435" y="172">60</text></g><text x="255" y="189" fill="var(--ink-2)" font-size="11" text-anchor="middle">Science test score (out of 60)</text><text x="14" y="54" fill="var(--ink)" font-size="13" font-weight="700">Class 9A</text><line x1="183" y1="49" x2="267" y2="49" stroke="var(--ink)" stroke-width="2"/><line x1="183" y1="39" x2="183" y2="59" stroke="var(--ink)" stroke-width="2"/><rect x="267" y="33" width="96" height="32" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2.2"/><line x1="327" y1="33" x2="327" y2="65" stroke="var(--brand)" stroke-width="2.6"/><line x1="363" y1="49" x2="411" y2="49" stroke="var(--ink)" stroke-width="2"/><line x1="411" y1="39" x2="411" y2="59" stroke="var(--ink)" stroke-width="2"/><text x="14" y="114" fill="var(--ink)" font-size="13" font-weight="700">Class 9B</text><line x1="159" y1="109" x2="219" y2="109" stroke="var(--ink)" stroke-width="2"/><line x1="159" y1="99" x2="159" y2="119" stroke="var(--ink)" stroke-width="2"/><rect x="219" y="93" width="156" height="32" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2"/><line x1="303" y1="93" x2="303" y2="125" stroke="var(--ink)" stroke-width="2.6"/><line x1="375" y1="109" x2="423" y2="109" stroke="var(--ink)" stroke-width="2"/><line x1="423" y1="99" x2="423" y2="119" stroke="var(--ink)" stroke-width="2"/></svg>',
      question:
        "The box plots show the 60-mark science test results for two classes:\n\n- **Class 9A**: Min = 18, LQ = 32, Median = 42, UQ = 48, Max = 56\n- **Class 9B**: Min = 14, LQ = 24, Median = 38, UQ = 50, Max = 58\n\nMake **two** distinct statistical comparisons between Class 9A and Class 9B in context, supporting each with exact values.",
      marks: 3,
      hints: [
        "Always make ONE comparison about average (using the medians) and ONE comparison about spread (using the interquartile ranges).",
        "Calculate the IQR for both classes: {{IQR = UQ - LQ}}.",
        "Interpret both numbers in context — which class scored higher on average, and which class had more consistent scores?",
      ],
      modelAnswer:
        "First, Class 9A had a higher median score (42 vs 38), so Class 9A performed better on average on the science test. Second, the interquartile range for Class 9A is 48 − 32 = 16 marks, compared to 50 − 24 = 26 marks for Class 9B. Because 16 is smaller than 26, Class 9A's test scores were less spread out and more consistent than Class 9B's.",
      markScheme: [
        {
          point: "Compares medians (42 vs 38) to state Class 9A scored higher on average",
          keywords: ["higher average", "on average", "better on average", "higher median", "scored higher"],
        },
        {
          point: "Calculates both IQRs accurately: Class 9A = 16 and Class 9B = 26",
          keywords: ["16", "26", "48 - 32", "50 - 24"],
        },
        {
          point: "Interprets the smaller IQR in context (Class 9A scores are more consistent / less spread out)",
          keywords: ["consistent", "less spread", "more spread", "narrower", "varied"],
        },
      ],
      commonError: "Quoting numbers without interpreting them in context, or comparing only min/max instead of median and IQR.",
    },
    {
      id: "exam-n2-q19",
      kind: "short",
      topicId: "angles-bearings",
      guideRef: "polygon-angles",
      difficulty: "core",
      question:
        "An irregular pentagon has four interior angles of {{110°}}, {{95°}}, {{125°}} and {{108°}}. Calculate the size of its fifth interior angle.",
      answer: { type: "number", value: 102, display: "102°" },
      traps: [
        {
          spec: { type: "number", value: 108 },
          feedback: "{{108°}} is the interior angle of a REGULAR pentagon — this pentagon is irregular, so subtract the four given angles from {{540°}}.",
        },
        {
          spec: { type: "number", value: 282 },
          feedback: "{{720°}} is the interior angle sum of a hexagon (6 sides). A pentagon has 5 sides, so its sum is {{(5 - 2) * 180° = 540°}}.",
        },
      ],
      hints: [
        "Find the interior angle sum of a 5-sided polygon using {{(n - 2) * 180°}}.",
        "Add the four given angles together and subtract your total from {{540°}}.",
      ],
      solution: [
        "Interior angle sum of a pentagon ({{n = 5}}) = {{(5 - 2) * 180° = 3 * 180° = 540°}}.",
        "Sum of the four given angles = {{110° + 95° + 125° + 108° = 438°}}.",
        "Fifth interior angle = {{540° - 438° = 102°}}.",
      ],
      commonError: "Using {{360°}} (the exterior angle sum) or {{720°}} (a hexagon) instead of {{540°}}.",
    },

    // =========================================================================
    // CHALLENGE (Q20–Q25)
    // =========================================================================
    {
      id: "exam-n2-q20",
      kind: "short",
      topicId: "indices-standard-form",
      guideRef: "zero-negative-indices",
      difficulty: "challenge",
      question: "Find the exact value of {{x}} that satisfies {{9^x = 27^4}}.",
      answer: { type: "number", value: 6, display: "x = 6" },
      traps: [
        {
          spec: { type: "number", value: 12 },
          feedback: "{{27}} is {{3 * 9}}, NOT {{9^3}} — rewrite both sides as powers of base 3: {{9 = 3^2}} and {{27 = 3^3}}.",
        },
      ],
      hints: [
        "Both 9 and 27 are powers of the same smaller base — which prime number?",
        "Replace {{9}} with {{3^2}} and {{27}} with {{3^3}}, then use the power-of-a-power law {{(a^m)^n = a^(mn)}}.",
        "Once both sides have base 3, equate the exponents and solve for {{x}}.",
      ],
      strategy: "Rewrite both sides with a common base",
      solution: [
        "Rewrite both bases as powers of 3: {{9 = 3^2}} and {{27 = 3^3}}.",
        "Substitute into the equation: {{(3^2)^x = (3^3)^4}}, which simplifies to {{3^(2x) = 3^12}}.",
        "Since the bases are equal, equate the powers: {{2x = 12}}, so {{x = 6}}.",
      ],
      commonError: "Dividing 27 by 9 to get 3 and writing {{x = 3 * 4 = 12}} instead of using powers of 3.",
    },
    {
      id: "exam-n2-q21",
      kind: "short",
      topicId: "fdp-ratio-fractions",
      guideRef: "ratio-problems",
      difficulty: "challenge",
      question:
        "In a box of fruit, the ratio of apples to pears is {{3 : 4}} and the ratio of pears to oranges is {{6 : 5}}. Write the ratio of **apples to oranges** in its simplest form.",
      answer: { type: "ratio", parts: [9, 10], simplest: true },
      traps: [
        {
          spec: { type: "ratio", parts: [3, 5] },
          feedback: "You cannot combine {{3 : 4}} and {{6 : 5}} directly because pears has different part numbers (4 and 6). Scale both ratios so pears matches first.",
        },
      ],
      hints: [
        "Pears appears in both ratios (4 parts in the first, 6 parts in the second).",
        "Find the lowest common multiple of 4 and 6 ({{12}}) and scale each ratio so pears equals 12 parts.",
        "Read off apples : oranges from your combined ratio and check whether it simplifies.",
      ],
      strategy: "Match the shared bridging quantity",
      solution: [
        "The LCM of 4 and 6 is 12.",
        "Scale apples : pears by 3 → {{9 : 12}}.",
        "Scale pears : oranges by 2 → {{12 : 10}}.",
        "Combine to get apples : pears : oranges = {{9 : 12 : 10}}, so apples : oranges = {{9 : 10}}.",
      ],
      commonError: "Ignoring the different pear numbers and writing {{3 : 5}}, or forgetting to scale both terms in each ratio.",
    },
    {
      id: "exam-n2-q22",
      kind: "short",
      topicId: "pythagoras-trigonometry",
      guideRef: "similar-right-triangles-ratios",
      difficulty: "challenge",
      diagram:
        '<svg viewBox="0 0 420 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two similar right-angled triangles ABC and DEF with right angles at B and E, equal acute angles theta at A and D, AC equals 10 cm and DF equals 25 cm"><rect x="0" y="0" width="420" height="190" fill="var(--surface)" rx="8"/><polygon points="30,145 126,145 126,73" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="2"/><polyline points="114,145 114,133 126,133" fill="none" stroke="var(--ink)" stroke-width="1.6"/><text x="58" y="139" fill="var(--brand)" font-size="13" font-weight="700">θ</text><text x="16" y="152" fill="var(--ink)" font-size="13" font-weight="700">A</text><text x="131" y="152" fill="var(--ink)" font-size="13" font-weight="700">B</text><text x="131" y="72" fill="var(--ink)" font-size="13" font-weight="700">C</text><text x="48" y="98" fill="var(--ink)" font-size="12" font-weight="600">10 cm</text><polygon points="195,155 375,155 375,35" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="2.2"/><polyline points="360,155 360,140 375,140" fill="none" stroke="var(--ink)" stroke-width="1.8"/><text x="230" y="148" fill="var(--brand)" font-size="14" font-weight="700">θ</text><text x="180" y="162" fill="var(--ink)" font-size="13" font-weight="700">D</text><text x="382" y="162" fill="var(--ink)" font-size="13" font-weight="700">E</text><text x="382" y="34" fill="var(--ink)" font-size="13" font-weight="700">F</text><text x="242" y="80" fill="var(--ink)" font-size="13" font-weight="600">25 cm</text><text x="275" y="176" fill="var(--brand)" font-size="13" font-weight="700">DE = ?</text></svg>',
      question:
        "Right-angled triangles {{ABC}} and {{DEF}} are similar, with right angles at {{B}} and {{E}} and {{∠A = ∠D = theta}}. Given that {{sin theta = 3/5}}, {{AC = 10}} cm and {{DF = 25}} cm, find the exact length of side {{DE}}, in cm.",
      answer: { type: "number", value: 20, display: "20 cm" },
      traps: [
        {
          spec: { type: "number", value: 15 },
          feedback: "{{15}} cm is the opposite side {{EF}} — now use Pythagoras' theorem on triangle {{DEF}} to find the adjacent side {{DE}}.",
        },
        {
          spec: { type: "number", value: 8 },
          feedback: "{{8}} cm is side {{AB}} in the smaller triangle — multiply by the scale factor {{25 / 10 = 2.5}} to find {{DE}}.",
        },
      ],
      hints: [
        "Since both right triangles share angle {{theta}}, {{sin theta = 3/5}} applies to triangle {{DEF}} as well.",
        "Use {{sin theta = EF / DF = 3/5}} with {{DF = 25}} to calculate the opposite side {{EF}}.",
        "Apply Pythagoras' theorem ({{DE^2 = DF^2 - EF^2}}) to find the adjacent side {{DE}}.",
      ],
      strategy: "Use constant trig ratios across similar triangles",
      solution: [
        "In right triangle {{DEF}}, {{sin theta = EF / DF = 3/5}}.",
        "Since {{DF = 25}} cm, {{EF = (3/5) * 25 = 15}} cm.",
        "By Pythagoras' theorem: {{DE^2 = 25^2 - 15^2 = 625 - 225 = 400}}.",
        "Therefore {{DE = sqrt(400) = 20}} cm.",
      ],
      commonError: "Giving the opposite side {{EF = 15}} cm instead of the adjacent side {{DE = 20}} cm.",
    },
    {
      id: "exam-n2-q23",
      kind: "mcq",
      topicId: "linear-graphs",
      guideRef: "equation-of-a-line",
      difficulty: "challenge",
      question:
        "Line {{L}} has equation {{2y - 6x = 10}}. Which line is **parallel** to line {{L}} and passes through the point {{(0, -4)}}?",
      options: [
        "{{y = 6x - 4}}",
        "{{y = 3x - 4}}",
        "{{y = -3x - 4}}",
        "{{y = 3x + 4}}",
      ],
      answerIndex: 1,
      hints: [
        "Parallel lines always have the exact same gradient {{m}}.",
        "Rearrange {{2y - 6x = 10}} into the explicit form {{y = mx + c}} to read off the true gradient {{m}}.",
        "Combine that gradient with the {{y}}-intercept {{c = -4}} from the point {{(0, -4)}}.",
      ],
      explanation:
        "Rearranging {{2y - 6x = 10}} gives {{2y = 6x + 10}}, and dividing every term by 2 yields {{y = 3x + 5}}, so the gradient is {{m = 3}}. A parallel line passing through {{(0, -4)}} has gradient 3 and {{y}}-intercept {{-4}}, giving {{y = 3x - 4}}. Picking {{y = 6x - 4}} forgets to divide by 2, and {{y = -3x - 4}} misses the sign change when moving {{-6x}} to the right-hand side.",
    },
    {
      id: "exam-n2-q24",
      kind: "written",
      topicId: "surface-area-volume",
      guideRef: "cones-and-reverse-volume",
      difficulty: "challenge",
      diagram:
        '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Solid cone with base radius 5 cm, vertical height 12 cm, and slant height labelled l"><rect x="0" y="0" width="320" height="220" fill="var(--surface)" rx="8"/><path d="M 160 28 L 85 168 A 75 22 0 0 0 235 168 Z" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="2.2"/><path d="M 85 168 A 75 22 0 0 1 235 168" fill="none" stroke="var(--ink-2)" stroke-width="1.5" stroke-dasharray="5,4"/><line x1="160" y1="28" x2="160" y2="168" stroke="var(--brand)" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="160" y1="168" x2="235" y2="168" stroke="var(--brand)" stroke-width="2"/><polyline points="160,156 172,156 172,168" fill="none" stroke="var(--brand)" stroke-width="1.5"/><text x="115" y="114" fill="var(--brand)" font-size="13" font-weight="700">12 cm</text><text x="184" y="185" fill="var(--brand)" font-size="13" font-weight="700">5 cm</text><text x="208" y="96" fill="var(--ink)" font-size="14" font-weight="700">l</text></svg>',
      question:
        "A solid cone has base radius {{r = 5}} cm and vertical height {{h = 12}} cm.\n\n(a) Calculate the **exact volume** of the cone in terms of {{pi}}.\n(b) Find the slant height {{l}}, and hence calculate the **exact total surface area** of the cone in terms of {{pi}}.\n\n(Cone volume = {{(1/3) pi r^2 h}}; curved surface area = {{pi r l}}.)",
      marks: 4,
      hints: [
        "For part (a), substitute {{r = 5}} and {{h = 12}} into {{(1/3) pi r^2 h}} — cancel {{12 / 3 = 4}} early to keep the arithmetic simple.",
        "For part (b), the vertical height, base radius and slant height form a right-angled triangle: {{l = sqrt(r^2 + h^2)}}.",
        "Compute the curved surface area {{pi r l}} using your slant height {{l}}.",
        "Remember that TOTAL surface area of a solid cone includes the circular base {{pi r^2}} as well as the curved surface!",
      ],
      modelAnswer:
        "(a) Volume = (1/3) × π × 5² × 12 = (1/3) × 25 × 12 × π = 100π cm³. (b) By Pythagoras' theorem, slant height l = √(5² + 12²) = √(25 + 144) = √169 = 13 cm. Curved surface area = πrl = π × 5 × 13 = 65π cm², and base area = πr² = 25π cm². Therefore total surface area = 65π + 25π = 90π cm².",
      markScheme: [
        {
          point: "Calculates exact cone volume = 100π cm³",
          keywords: ["100pi", "100π", "100 pi"],
        },
        {
          point: "Applies Pythagoras' theorem to find slant height l = 13 cm",
          keywords: ["13", "169"],
        },
        {
          point: "Finds curved surface area = 65π cm²",
          keywords: ["65pi", "65π", "65 pi"],
        },
        {
          point: "Adds the circular base area (25π) to get total surface area = 90π cm²",
          keywords: ["90pi", "90π", "90 pi"],
        },
      ],
      commonError: "Using vertical height 12 instead of slant height 13 in {{pi r l}}, or forgetting to add the base circle {{25pi}}.",
    },
    {
      id: "exam-n2-q25",
      kind: "written",
      topicId: "algebraic-expressions",
      guideRef: "factorising-rearranging",
      difficulty: "challenge",
      question:
        "(a) Factorise {{3x^2 - 27}} completely.\n(b) Prove algebraically that for every integer {{n}}, the expression {{(n + 4)^2 - (n - 2)^2}} is always a multiple of {{12}}.",
      marks: 4,
      hints: [
        "In part (a), always take out the highest common numerical factor FIRST before checking for a difference of two squares.",
        "In part (b), carefully expand {{(n + 4)^2}} and {{(n - 2)^2}}, keeping brackets around the second expansion when subtracting!",
        "Alternatively, in part (b), treat {{A^2 - B^2 = (A - B)(A + B)}} with {{A = n + 4}} and {{B = n - 2}}.",
        "Factorise {{12}} out of your simplified expression to show it equals {{12 * " + '"an integer"' + "}}.",
      ],
      strategy: "Common factor first, then difference of squares",
      modelAnswer:
        "(a) Take out the common factor 3: 3(x² − 9), then factorise the difference of two squares to get 3(x − 3)(x + 3). (b) Expand both squares: (n + 4)² = n² + 8n + 16 and (n − 2)² = n² − 4n + 4. Subtracting gives (n² + 8n + 16) − (n² − 4n + 4) = 12n + 12 = 12(n + 1). Since n is an integer, n + 1 is also an integer, so 12(n + 1) is always a multiple of 12.",
      markScheme: [
        {
          point: "Factorises 3x² − 27 completely to 3(x − 3)(x + 3)",
          keywords: ["3(x - 3)(x + 3)", "3(x-3)(x+3)", "3(x + 3)(x - 3)", "3(x+3)(x-3)"],
        },
        {
          point: "Expands both squares accurately (or applies difference of squares: 6(2n + 2))",
          keywords: ["n^2 + 8n + 16", "n² + 8n + 16", "2n + 2", "6(2n + 2)"],
        },
        {
          point: "Subtracts accurately (handling the double negative) to obtain 12n + 12",
          keywords: ["12n + 12", "12n+12"],
        },
        {
          point: "Factorises to 12(n + 1) to complete the proof that it is a multiple of 12",
          keywords: ["12(n + 1)", "12(n+1)"],
        },
      ],
      commonError: "Stopping at {{3(x^2 - 9)}} in part (a), or forgetting to distribute the minus sign to {{-4n}} and {{+4}} in part (b).",
    },
  ],
};
