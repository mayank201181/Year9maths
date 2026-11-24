import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  id: "exam-n1",
  title: "Year 9 Maths Mock Paper 1 (Non-Calculator)",
  calculator: false,
  minutes: 60,
  questions: [
    // =========================================================================
    // WARMUP (Q01–Q06)
    // =========================================================================
    {
      id: "exam-n1-q01",
      kind: "short",
      topicId: "indices-standard-form",
      guideRef: "standard-form-conversions",
      difficulty: "warmup",
      question: "Write {{0.00048}} in standard form.",
      answer: {
        type: "number",
        value: 0.00048,
        standardForm: true,
        display: "{{4.8 * 10^(-4)}}",
      },
      traps: [
        {
          spec: { type: "number", value: 48000 },
          feedback: "A number smaller than 1 always has a negative power of 10, not a positive power.",
        },
        {
          spec: { type: "number", value: 0.0048 },
          feedback: "Recount the decimal places carefully — moving the first non-zero digit 4 into the units column takes 4 steps, not 3.",
        },
      ],
      hints: [
        "Standard form is written as {{A * 10^n}} where {{1 <= A < 10}}.",
        "Move the decimal point to the right until the number is {{4.8}}, counting how many places it shifts.",
      ],
      solution: [
        "Place the decimal point after the first non-zero digit to obtain {{A = 4.8}}.",
        "From {{4.8}} back to {{0.00048}}, the decimal point shifts 4 places to the left, so the power of 10 is {{-4}}.",
        "Therefore {{0.00048 = 4.8 * 10^(-4)}}.",
      ],
      commonError: "Writing {{48 * 10^(-5)}} (leaving A ≥ 10) or using a positive exponent for a small decimal.",
    },
    {
      id: "exam-n1-q02",
      kind: "short",
      topicId: "algebraic-expressions",
      guideRef: "evaluating-expressions",
      difficulty: "warmup",
      question: "Find the value of {{3x^2 - 5x + 4}} when {{x = -2}}.",
      answer: { type: "number", value: 26 },
      traps: [
        {
          spec: { type: "number", value: 2 },
          feedback: "Remember that {{(-2)^2 = +4}}, not {{-4}}, so {{3x^2 = 3 * 4 = 12}}.",
        },
        {
          spec: { type: "number", value: 6 },
          feedback: "Check the middle term: subtracting {{5 * (-2)}} means {{-(-10) = +10}}.",
        },
        {
          spec: { type: "number", value: 50 },
          feedback: "Apply indices before multiplication: {{3x^2}} means {{3 * (x^2)}}, not {{(3x)^2}}.",
        },
      ],
      hints: [
        "Substitute {{(-2)}} inside brackets: {{3(-2)^2 - 5(-2) + 4}}.",
        "Square {{-2}} first before multiplying by 3, and watch the double negative in {{-5(-2)}}.",
      ],
      solution: [
        "Substitute {{x = -2}}: {{3(-2)^2 - 5(-2) + 4}}.",
        "Evaluate the power first: {{(-2)^2 = 4}}, so {{3 * 4 = 12}}.",
        "Evaluate {{-5 * (-2) = +10}}.",
        "Add the terms: {{12 + 10 + 4 = 26}}.",
      ],
      commonError: "Evaluating {{3(-2)^2}} as {{(3 * -2)^2 = 36}} or writing {{(-2)^2 = -4}}.",
    },
    {
      id: "exam-n1-q03",
      kind: "mcq",
      topicId: "angles-bearings",
      guideRef: "three-figure-bearings",
      difficulty: "warmup",
      question: "A sailing boat travels due South-West from a lighthouse. What is its three-figure bearing?",
      options: ["045°", "225°", "135°", "315°"],
      answerIndex: 1,
      hints: [
        "Bearings are always measured clockwise from North ({{000°}}).",
        "South is {{180°}} and West is {{270°}} — South-West lies exactly halfway between them.",
      ],
      explanation:
        "Starting at North ({{000°}}) and turning clockwise: East is {{090°}}, South is {{180°}}, and West is {{270°}}. Halfway between South and West is {{180° + 45° = 225°}}. A common mistake is {{135°}}, which is South-East, or {{315°}}, which is North-West.",
    },
    {
      id: "exam-n1-q04",
      kind: "short",
      topicId: "fdp-ratio-fractions",
      guideRef: "ratio-problems",
      difficulty: "warmup",
      question: "Maya and Kai share S$135 in the ratio {{4 : 5}}. How much money, in S$, does Kai receive?",
      answer: { type: "number", value: 75, display: "S$75" },
      traps: [
        {
          spec: { type: "number", value: 60 },
          feedback: "S$60 is Maya's share (4 parts). The question asks for Kai's share (5 parts).",
        },
        {
          spec: { type: "number", value: 15 },
          feedback: "S$15 is the value of 1 part — multiply by 5 to find Kai's share.",
        },
      ],
      hints: [
        "Add the ratio parts together to find the total number of equal parts.",
        "Divide S$135 by the total parts to find 1 part, then multiply by Kai's 5 parts.",
      ],
      solution: [
        "Total parts = {{4 + 5 = 9}}.",
        "Value of 1 part = {{135 / 9 = 15}} (S$15).",
        "Kai receives 5 parts = {{5 * 15 = 75}}, so S$75.",
      ],
      commonError: "Dividing by 4 or 5 separately instead of dividing by the total number of parts (9).",
    },
    {
      id: "exam-n1-q05",
      kind: "mcq",
      topicId: "probability-statistics",
      guideRef: "theoretical-experimental-probability",
      difficulty: "warmup",
      question:
        "A biased four-colour spinner can land on red, blue, green or yellow. The probabilities of landing on red, blue and green are {{0.28}}, {{0.35}} and {{0.19}}. What is the probability of landing on yellow?",
      options: ["0.18", "0.22", "0.82", "0.12"],
      answerIndex: 0,
      hints: [
        "The probabilities of all mutually exclusive outcomes must add up to 1.",
        "Add {{0.28 + 0.35 + 0.19}}, then subtract your sum from {{1}}.",
      ],
      explanation:
        "Since the spinner must land on one of the four colours, all probabilities sum to 1. First add {{0.28 + 0.35 + 0.19 = 0.82}}, then subtract from 1 to get {{1 - 0.82 = 0.18}}. Giving {{0.82}} forgets to subtract from 1, and {{0.22}} comes from a carrying error when subtracting {{0.82}} from {{1.00}}.",
    },
    {
      id: "exam-n1-q06",
      kind: "mcq",
      topicId: "surface-area-volume",
      guideRef: "area-volume-units",
      difficulty: "warmup",
      question: "Convert {{3.5}} m² into cm².",
      options: ["350 cm²", "3,500 cm²", "35,000 cm²", "350,000 cm²"],
      answerIndex: 2,
      hints: [
        "Remember that {{1 m = 100 cm}}, so a 1 m by 1 m square is 100 cm by 100 cm.",
        "Multiply by {{100^2 = 10,000}}, not by 100.",
      ],
      explanation:
        "Because area is two-dimensional, {{1 m^2 = 100 cm * 100 cm = 10,000 cm^2}}. Multiplying {{3.5 * 10,000}} gives {{35,000 cm^2}}. Choosing {{350 cm^2}} mistakenly uses the length conversion factor (100) instead of squaring it.",
    },

    // =========================================================================
    // CORE (Q07–Q19)
    // =========================================================================
    {
      id: "exam-n1-q07",
      kind: "short",
      topicId: "algebraic-expressions",
      guideRef: "expanding-double-brackets",
      difficulty: "core",
      question: "Expand and simplify {{(2x - 3)(x + 5)}}.",
      answer: {
        type: "expression",
        expr: "2x^2 + 7x - 15",
        form: "simplified",
        display: "{{2x^2 + 7x - 15}}",
      },
      traps: [
        {
          spec: { type: "expression", expr: "2x^2 - 15" },
          feedback: "You missed the two cross terms ({{2x * 5}} and {{-3 * x}}). Use a 2×2 area grid or FOIL.",
        },
        {
          spec: { type: "expression", expr: "2x^2 + 13x - 15" },
          feedback: "Check the sign on {{-3 * x}}: {{10x - 3x = 7x}}, not {{13x}}.",
        },
      ],
      hints: [
        "Multiply every term in the first bracket by every term in the second bracket (4 products in total).",
        "The four products are {{2x * x}}, {{2x * 5}}, {{-3 * x}} and {{-3 * 5}}.",
        "Collect the two {{x}} terms: {{10x - 3x}}.",
      ],
      solution: [
        "Multiply out all four pairs: {{2x * x = 2x^2}}, {{2x * 5 = +10x}}, {{-3 * x = -3x}}, and {{-3 * 5 = -15}}.",
        "Combine the like terms: {{10x - 3x = 7x}}.",
        "Final expanded expression: {{2x^2 + 7x - 15}}.",
      ],
      commonError: "Forgetting the middle {{x}} terms or dropping the minus sign on {{-3}}.",
    },
    {
      id: "exam-n1-q08",
      kind: "short",
      topicId: "equations-inequalities",
      guideRef: "linear-equations-brackets-fractions",
      difficulty: "core",
      question: "Solve the equation {{(3x - 1)/2 + 4 = 2x + 1}}.",
      answer: { type: "number", value: 5, display: "x = 5" },
      traps: [
        {
          spec: { type: "number", value: 1 },
          feedback: "When multiplying the whole equation by 2 to clear the fraction, remember to multiply the +4 by 2 as well.",
        },
        {
          spec: { type: "number", value: 3 },
          feedback: "Check each term after multiplying by 2: {{3x - 1 + 8 = 4x + 2}}, which simplifies to {{3x + 7 = 4x + 2}}.",
        },
      ],
      hints: [
        "Clear the denominator by multiplying every term on BOTH sides by 2 (or subtract 4 from both sides first).",
        "If you subtract 4 first: {{(3x - 1)/2 = 2x - 3}}.",
        "Now multiply both sides by 2 to get {{3x - 1 = 4x - 6}}, then solve for {{x}}.",
      ],
      strategy: "Clear denominators first",
      solution: [
        "Multiply every term on both sides by 2: {{(3x - 1) + 8 = 4x + 2}}.",
        "Simplify the left-hand side: {{3x + 7 = 4x + 2}}.",
        "Subtract {{3x}} from both sides: {{7 = x + 2}}.",
        "Subtract 2 from both sides: {{x = 5}}. Check: {{(15 - 1)/2 + 4 = 11}} and {{2(5) + 1 = 11}}.",
      ],
      commonError: "Multiplying only the fraction and the right-hand side by 2, while forgetting to multiply {{+4}} by 2.",
    },
    {
      id: "exam-n1-q09",
      kind: "written",
      topicId: "angles-bearings",
      guideRef: "parallel-lines-angles",
      difficulty: "core",
      diagram:
        '<svg viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parallel lines AB and CD with transversal PQ forming an isosceles triangle PQR where PQ equals PR and angle APQ is 64 degrees"><rect x="0" y="0" width="420" height="210" fill="var(--surface)" rx="8"/><line x1="30" y1="45" x2="390" y2="45" stroke="var(--ink)" stroke-width="2"/><line x1="30" y1="165" x2="390" y2="165" stroke="var(--ink)" stroke-width="2"/><polyline points="115,39 125,45 115,51" fill="none" stroke="var(--brand)" stroke-width="2"/><polyline points="115,159 125,165 115,171" fill="none" stroke="var(--brand)" stroke-width="2"/><line x1="160" y1="165" x2="220" y2="45" stroke="var(--ink)" stroke-width="2"/><line x1="220" y1="45" x2="280" y2="165" stroke="var(--ink)" stroke-width="2"/><line x1="184" y1="100" x2="196" y2="108" stroke="var(--brand)" stroke-width="2.2"/><line x1="256" y1="100" x2="244" y2="108" stroke="var(--brand)" stroke-width="2.2"/><path d="M 192 45 A 28 28 0 0 0 207 70" fill="none" stroke="var(--brand)" stroke-width="2"/><path d="M 208 69 A 26 26 0 0 0 232 69" fill="none" stroke="var(--bad)" stroke-width="2"/><text x="36" y="38" fill="var(--ink)" font-size="14" font-weight="600">A</text><text x="378" y="38" fill="var(--ink)" font-size="14" font-weight="600">B</text><text x="36" y="185" fill="var(--ink)" font-size="14" font-weight="600">C</text><text x="378" y="185" fill="var(--ink)" font-size="14" font-weight="600">D</text><text x="216" y="36" fill="var(--ink)" font-size="14" font-weight="700">P</text><text x="152" y="185" fill="var(--ink)" font-size="14" font-weight="700">Q</text><text x="276" y="185" fill="var(--ink)" font-size="14" font-weight="700">R</text><text x="160" y="72" fill="var(--brand)" font-size="13" font-weight="700">64°</text><text x="216" y="92" fill="var(--bad)" font-size="14" font-weight="700">x</text></svg>',
      question:
        "Lines AB and CD are parallel. Point P lies on AB, while points Q and R lie on CD so that {{PQ = PR}} and {{∠APQ = 64°}}. Calculate angle {{x = ∠QPR}}, giving a full geometric reason for each step.",
      marks: 3,
      hints: [
        "Look for a Z-angle between the parallel lines AB and CD to find {{∠PQR}}.",
        "The tick marks show {{PQ = PR}}, which tells you what type of triangle PQR is.",
        "Once you know both base angles of triangle PQR, use the angle sum of a triangle ({{180°}}).",
      ],
      modelAnswer:
        "First, ∠PQR = 64° because alternate angles between parallel lines are equal. Second, triangle PQR is isosceles since PQ and PR have equal length, so its base angles are equal: ∠PRQ = 64°. Finally, angles in a triangle sum to 180°, giving x = 180° − 64° − 64° = 52°.",
      markScheme: [
        {
          point: "Finds ∠PQR = 64° citing alternate angles on parallel lines",
          keywords: ["alternate"],
        },
        {
          point: "Uses the isosceles triangle property to deduce base angle ∠PRQ = 64°",
          keywords: ["isosceles", "base angles", "prq"],
        },
        {
          point: "Subtracts from 180° (angle sum of a triangle) to obtain x = 52°",
          keywords: ["52"],
        },
      ],
      commonError: "Writing 'Z-angles' instead of the formal term 'alternate angles', or forgetting to justify why ∠PRQ = ∠PQR.",
    },
    {
      id: "exam-n1-q10",
      kind: "mcq",
      topicId: "linear-graphs",
      guideRef: "equation-of-a-line",
      difficulty: "core",
      question: "A straight line passes through the points {{(2, 7)}} and {{(6, -1)}}. What is the equation of this line?",
      options: [
        "{{y = 2x + 3}}",
        "{{y = -2x + 7}}",
        "{{y = -2x + 11}}",
        "{{y = -1/2 x + 8}}",
      ],
      answerIndex: 2,
      hints: [
        "Find the gradient first using {{m = (y_2 - y_1)/(x_2 - x_1)}}.",
        "Substitute {{m = -2}} and the point {{(2, 7)}} into {{y = mx + c}} to find the y-intercept {{c}}.",
      ],
      explanation:
        "The gradient is {{m = (-1 - 7)/(6 - 2) = -8/4 = -2}}. Substituting {{(2, 7)}} into {{y = -2x + c}} gives {{7 = -4 + c}}, so {{c = 11}} and the equation is {{y = -2x + 11}}. A frequent slip is using the y-coordinate 7 directly as the intercept ({{y = -2x + 7}}), or inverting the gradient formula to get {{-1/2}}.",
    },
    {
      id: "exam-n1-q11",
      kind: "short",
      topicId: "pythagoras-trigonometry",
      guideRef: "pythagoras-theorem",
      difficulty: "core",
      diagram:
        '<svg viewBox="0 0 340 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right-angled triangle with hypotenuse 17 cm, vertical side 8 cm, and horizontal base labelled x"><rect x="0" y="0" width="340" height="190" fill="var(--surface)" rx="8"/><polygon points="65,150 275,150 65,45" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="2.2"/><polyline points="65,134 81,134 81,150" fill="none" stroke="var(--ink)" stroke-width="1.8"/><text x="26" y="102" fill="var(--ink)" font-size="14" font-weight="600">8 cm</text><text x="178" y="84" fill="var(--ink)" font-size="14" font-weight="600">17 cm</text><text x="165" y="172" fill="var(--brand)" font-size="15" font-weight="700">x</text></svg>',
      question:
        "A right-angled triangle has a hypotenuse of {{17}} cm and one shorter side of {{8}} cm. Calculate the exact length of the other shorter side {{x}}, in cm.",
      answer: { type: "number", value: 15, display: "15 cm" },
      traps: [
        {
          spec: { type: "number", value: 9 },
          feedback: "You subtracted 17 − 8 directly. Pythagoras' theorem requires squaring the lengths first: {{17^2 - 8^2}}.",
        },
        {
          spec: { type: "number", value: 225 },
          feedback: "{{225}} is {{x^2}} — don't forget to take the square root at the end!",
        },
      ],
      hints: [
        "Since you are finding a shorter side (not the hypotenuse), subtract the squares: {{x^2 = 17^2 - 8^2}}.",
        "Calculate {{17^2 = 289}} and {{8^2 = 64}}, subtract them, and take the square root.",
      ],
      solution: [
        "Write Pythagoras' theorem with the hypotenuse {{17}} on its own: {{x^2 + 8^2 = 17^2}}.",
        "Rearrange: {{x^2 = 17^2 - 8^2 = 289 - 64 = 225}}.",
        "Take the square root: {{x = sqrt(225) = 15}} cm (the 8–15–17 Pythagorean triple).",
      ],
      commonError: "Adding {{17^2 + 8^2}} instead of subtracting, or stopping at {{x^2 = 225}} without taking the square root.",
    },
    {
      id: "exam-n1-q12",
      kind: "mcq",
      topicId: "transformations-similarity",
      guideRef: "enlargement",
      difficulty: "core",
      question:
        "Triangle P has vertices {{(2, 1)}}, {{(4, 1)}} and {{(2, 5)}}. It is enlarged by scale factor {{3}} with centre of enlargement {{(1, 1)}}. What are the coordinates of the image of {{(2, 5)}}?",
      options: ["(6, 15)", "(5, 13)", "(3, 12)", "(4, 13)"],
      answerIndex: 3,
      hints: [
        "Find the vector from the centre of enlargement {{(1, 1)}} to the vertex {{(2, 5)}}.",
        "Multiply that vector by the scale factor 3, then add it back onto the centre {{(1, 1)}}.",
      ],
      explanation:
        "The displacement from the centre {{(1, 1)}} to {{(2, 5)}} is {{(2 - 1, 5 - 1) = (1, 4)}}. Multiplying by scale factor 3 gives {{(3, 12)}}. Adding this vector to the centre {{(1, 1)}} lands at {{(1 + 3, 1 + 12) = (4, 13)}}. Choosing {{(6, 15)}} wrongly enlarges from the origin {{(0, 0)}}, and {{(3, 12)}} forgets to add back the centre coordinates.",
    },
    {
      id: "exam-n1-q13",
      kind: "short",
      topicId: "fdp-ratio-fractions",
      guideRef: "recurring-decimals",
      difficulty: "core",
      question: "Convert the recurring decimal {{0.454545...}} (with both 4 and 5 recurring) into a fraction in its simplest form.",
      answer: { type: "fraction", n: 5, d: 11, simplest: true },
      traps: [
        {
          spec: { type: "fraction", n: 9, d: 20 },
          feedback: "{{9/20 = 0.45}} is the terminating decimal, not the recurring decimal {{0.454545...}}.",
        },
        {
          spec: { type: "fraction", n: 45, d: 90 },
          feedback: "When two digits recur, multiply by 100 and subtract {{x}}, giving {{99x = 45}}, not {{90x}}.",
        },
      ],
      hints: [
        "Let {{x = 0.454545...}}. Since 2 digits repeat, multiply both sides by 100.",
        "Subtract {{x}} from {{100x}} so the recurring tails cancel: {{99x = 45}}.",
        "Divide by 99 and cancel the highest common factor of 45 and 99.",
      ],
      strategy: "Multiply by 10^k to align the recurring tail",
      solution: [
        "Let {{x = 0.454545...}}, so {{100x = 45.454545...}}.",
        "Subtract the first equation from the second: {{99x = 45}}.",
        "Solve and simplify by dividing numerator and denominator by 9: {{x = 45/99 = 5/11}}.",
      ],
      commonError: "Leaving the answer unsimplified as {{45/99}} or dividing by 100 instead of 99.",
    },
    {
      id: "exam-n1-q14",
      kind: "short",
      topicId: "equations-inequalities",
      guideRef: "inequalities",
      difficulty: "core",
      question: "List all the integer values of {{x}} that satisfy the double inequality {{-7 < 2x + 1 <= 5}}.",
      answer: {
        type: "list",
        values: [-3, -2, -1, 0, 1, 2],
        ordered: false,
        display: "−3, −2, −1, 0, 1, 2",
      },
      traps: [
        {
          spec: { type: "list", values: [-4, -3, -2, -1, 0, 1, 2], ordered: false },
          feedback: "The inequality has a strict {{<}} at {{-4}}, so {{-4}} is NOT included.",
        },
        {
          spec: { type: "list", values: [-3, -2, -1, 0, 1], ordered: false },
          feedback: "The inequality has {{<=}} at 2, so 2 IS included in the solution set.",
        },
      ],
      hints: [
        "Subtract 1 from all three parts of the inequality first.",
        "Divide all three parts by 2 to isolate {{x}} in the middle.",
        "Check both endpoints carefully: strict {{<}} excludes the endpoint, whereas {{<=}} includes it.",
      ],
      solution: [
        "Subtract 1 from all three parts: {{-8 < 2x <= 4}}.",
        "Divide all three parts by 2: {{-4 < x <= 2}}.",
        "Since {{x}} must be strictly greater than {{-4}} and less than or equal to 2, the integers are {{-3, -2, -1, 0, 1, 2}}.",
      ],
      commonError: "Including {{-4}} despite the strict {{<}} sign, or forgetting to apply the operations to both ends of the inequality.",
    },
    {
      id: "exam-n1-q15",
      kind: "mcq",
      topicId: "surface-area-volume",
      guideRef: "measurement-accuracy",
      difficulty: "core",
      question: "The mass {{m}} of a suitcase is recorded as {{6.4}} kg, rounded to 1 decimal place. Which error interval correctly describes {{m}}?",
      options: [
        "{{6.35 <= m < 6.45}}",
        "{{6.35 <= m <= 6.45}}",
        "{{6.35 < m <= 6.45}}",
        "{{6.3 <= m < 6.5}}",
      ],
      answerIndex: 0,
      hints: [
        "Half of the rounding unit ({{0.1}} kg) is {{0.05}} kg.",
        "A value of {{6.35}} rounds up to {{6.4}}, whereas {{6.45}} rounds up to {{6.5}} — which symbol is strict?",
      ],
      explanation:
        "Half of 1 decimal place ({{0.1}}) is {{0.05}}, giving a lower bound of {{6.4 - 0.05 = 6.35}} and an upper bound of {{6.4 + 0.05 = 6.45}}. Because {{6.35}} rounds to {{6.4}} while {{6.45}} rounds up to {{6.5}}, the error interval must use {{<=}} on the left and strict {{<}} on the right: {{6.35 <= m < 6.45}}.",
    },
    {
      id: "exam-n1-q16",
      kind: "short",
      topicId: "indices-standard-form",
      guideRef: "zero-negative-indices",
      difficulty: "core",
      question: "Calculate the exact value of {{(2^(-3) * 8^2) / 4^0}}.",
      answer: { type: "number", value: 8 },
      traps: [
        {
          spec: { type: "number", value: 2 },
          feedback: "Remember that any non-zero number to the power 0 equals 1, so {{4^0 = 1}}, not 4.",
        },
        {
          spec: { type: "number", value: -8 },
          feedback: "A negative index means a reciprocal ({{2^(-3) = 1/8}}), not a negative number.",
        },
      ],
      hints: [
        "Rewrite {{8}} as a power of 2: {{8 = 2^3}}.",
        "Use {{(2^3)^2 = 2^6}} and remember that {{a^0 = 1}} for any non-zero {{a}}.",
        "Add the indices when multiplying powers of the same base: {{2^(-3) * 2^6}}.",
      ],
      strategy: "Change to a common base",
      solution: [
        "Rewrite {{8^2}} with base 2: {{8^2 = (2^3)^2 = 2^6}}.",
        "Note that {{4^0 = 1}}.",
        "Combine powers of 2: {{(2^(-3) * 2^6) / 1 = 2^(-3 + 6) = 2^3 = 8}}.",
      ],
      commonError: "Evaluating {{2^(-3)}} as {{-8}} or {{4^0}} as {{0}} or {{4}}.",
    },
    {
      id: "exam-n1-q17",
      kind: "short",
      topicId: "equations-inequalities",
      guideRef: "simultaneous-equations",
      difficulty: "core",
      question:
        "Solve the simultaneous equations {{3x + 2y = 18}} and {{5x - 2y = 14}}. Give your answer as coordinates {{(x, y)}}.",
      answer: { type: "list", values: [4, 3], ordered: true, display: "(4, 3)" },
      traps: [
        {
          spec: { type: "list", values: [3, 4], ordered: true },
          feedback: "Write x first and y second: {{x = 4}} and {{y = 3}}, so {{(4, 3)}}.",
        },
      ],
      hints: [
        "Look at the {{y}} terms: one is {{+2y}} and the other is {{-2y}} (different signs).",
        "Add the two equations together to eliminate {{y}} and find {{x}}.",
        "Substitute your value of {{x}} back into {{3x + 2y = 18}} to find {{y}}.",
      ],
      strategy: "Elimination (Different Signs Add)",
      solution: [
        "Add the two equations: {{(3x + 5x) + (2y - 2y) = 18 + 14}}, giving {{8x = 32}}.",
        "Divide by 8: {{x = 4}}.",
        "Substitute {{x = 4}} into {{3x + 2y = 18}}: {{12 + 2y = 18}}, so {{2y = 6}} and {{y = 3}}.",
        "Check in the second equation: {{5(4) - 2(3) = 20 - 6 = 14}}. Solution: {{(4, 3)}}.",
      ],
      commonError: "Subtracting instead of adding when the coefficients have opposite signs, giving {{4y}} instead of eliminating {{y}}.",
    },
    {
      id: "exam-n1-q18",
      kind: "written",
      topicId: "probability-statistics",
      guideRef: "grouped-data-stem-leaf",
      difficulty: "core",
      question:
        "The ordered quiz scores (out of 50) for 11 students are:\n\n{{19, 24, 26, 29, 31, 34, 35, 38, 41, 44, 47}}\n\nFind the median, lower quartile (LQ), upper quartile (UQ) and interquartile range (IQR), showing clearly how you locate each value.",
      marks: 3,
      hints: [
        "For {{n = 11}} ordered values, the median is at position {{(11 + 1)/2 = 6}}th.",
        "The lower quartile is the median of the 5 values below the median (position {{(11 + 1)/4 = 3}}rd), and the upper quartile is at position {{3(11 + 1)/4 = 9}}th.",
        "Subtract the lower quartile from the upper quartile to obtain the IQR.",
      ],
      modelAnswer:
        "With 11 values in order, the median is the 6th value, so median = 34. The lower quartile is the 3rd value (middle of the lower five scores), giving LQ = 26, and the upper quartile is the 9th value (middle of the upper five scores), giving UQ = 41. Therefore IQR = 41 − 26 = 15 marks.",
      markScheme: [
        {
          point: "Locates the 6th value to obtain median = 34",
          keywords: ["median = 34", "median is 34", "6th"],
        },
        {
          point: "Finds both quartiles correctly: LQ = 26 (3rd value) and UQ = 41 (9th value)",
          keywords: ["lq = 26", "lower quartile = 26", "lower quartile is 26", "41 - 26", "26 and 41"],
        },
        {
          point: "Calculates IQR = UQ − LQ = 15",
          keywords: ["15", "iqr = 15", "iqr is 15"],
        },
      ],
      commonError: "Computing the full range (47 − 19 = 28) instead of the interquartile range (UQ − LQ).",
    },
    {
      id: "exam-n1-q19",
      kind: "mcq",
      topicId: "pythagoras-trigonometry",
      guideRef: "similar-right-triangles-ratios",
      difficulty: "core",
      diagram:
        '<svg viewBox="0 0 340 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right-angled triangle ABC with right angle at B, AB equals 5 cm, BC equals 12 cm, and AC equals 13 cm"><rect x="0" y="0" width="340" height="190" fill="var(--surface)" rx="8"/><polygon points="80,150 250,150 250,40" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="2.2"/><polyline points="234,150 234,134 250,134" fill="none" stroke="var(--ink)" stroke-width="1.8"/><path d="M 110 150 A 30 30 0 0 0 105 134" fill="none" stroke="var(--brand)" stroke-width="2"/><text x="64" y="158" fill="var(--ink)" font-size="14" font-weight="700">A</text><text x="258" y="158" fill="var(--ink)" font-size="14" font-weight="700">B</text><text x="256" y="38" fill="var(--ink)" font-size="14" font-weight="700">C</text><text x="150" y="172" fill="var(--ink)" font-size="13" font-weight="600">5 cm</text><text x="260" y="100" fill="var(--ink)" font-size="13" font-weight="600">12 cm</text><text x="130" y="82" fill="var(--ink)" font-size="13" font-weight="600">13 cm</text></svg>',
      question:
        "In right-angled triangle {{ABC}}, {{∠B = 90°}}, {{AB = 5}} cm, {{BC = 12}} cm and {{AC = 13}} cm. What is the exact value of {{tan A}}?",
      options: ["{{5/12}}", "{{12/5}}", "{{12/13}}", "{{5/13}}"],
      answerIndex: 1,
      hints: [
        "Label the sides relative to angle {{A}}: the side directly across from {{A}} is the Opposite, and the side next to {{A}} (not the hypotenuse) is the Adjacent.",
        "Recall TOA from SOHCAHTOA: {{tan(theta) = O / A}}.",
      ],
      explanation:
        "Relative to angle {{A}}, the Opposite side is {{BC = 12}} cm, the Adjacent side is {{AB = 5}} cm, and the Hypotenuse is {{AC = 13}} cm. Using {{tan A = O/A}} gives {{12/5}}. Choosing {{5/12}} puts Adjacent over Opposite, while {{12/13}} is {{sin A}} and {{5/13}} is {{cos A}}.",
    },

    // =========================================================================
    // CHALLENGE (Q20–Q25)
    // =========================================================================
    {
      id: "exam-n1-q20",
      kind: "short",
      topicId: "surface-area-volume",
      guideRef: "circle-sectors",
      difficulty: "challenge",
      diagram:
        '<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sector of a circle with radius 9 cm and central angle 120 degrees"><rect x="0" y="0" width="340" height="200" fill="var(--surface)" rx="8"/><path d="M 170 155 L 270 155 A 100 100 0 0 0 120 68.4 Z" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="2.2"/><path d="M 198 155 A 28 28 0 0 0 156 130.8" fill="none" stroke="var(--brand)" stroke-width="2"/><text x="172" y="128" fill="var(--brand)" font-size="13" font-weight="700">120°</text><text x="205" y="176" fill="var(--ink)" font-size="14" font-weight="600">9 cm</text><text x="106" y="124" fill="var(--ink)" font-size="14" font-weight="600">9 cm</text></svg>',
      question:
        "A sector of a circle has radius {{9}} cm and central angle {{120°}}. Find the **exact perimeter** of the sector in terms of {{pi}}.",
      answer: {
        type: "expression",
        expr: "6*pi + 18",
        form: "simplified",
        display: "{{6pi + 18}} cm",
      },
      traps: [
        {
          spec: { type: "expression", expr: "6*pi" },
          feedback: "{{6pi}} is only the curved arc length — add the two straight radii ({{9 + 9 = 18}}) for the full perimeter!",
        },
        {
          spec: { type: "expression", expr: "27*pi" },
          feedback: "{{27pi}} is the area of the sector, not its perimeter.",
        },
      ],
      hints: [
        "First express the sector as a fraction of a full circle: {{120° / 360° = 1/3}}.",
        "Calculate the curved arc length using {{(1/3) * 2 pi r}} with {{r = 9}}.",
        "Remember that the perimeter of a sector equals the arc length PLUS the two straight radii.",
      ],
      strategy: "Trace the whole boundary",
      solution: [
        "Fraction of the full circle = {{120 / 360 = 1/3}}.",
        "Arc length = {{(1/3) * 2 * pi * 9 = (1/3) * 18pi = 6pi}} cm.",
        "Perimeter = arc length + two radii = {{6pi + 9 + 9 = 6pi + 18}} cm.",
      ],
      commonError: "Giving only the arc length ({{6pi}}) and forgetting to include the two straight edges of length {{r}}.",
    },
    {
      id: "exam-n1-q21",
      kind: "short",
      topicId: "fdp-ratio-fractions",
      guideRef: "algebraic-fractions",
      difficulty: "challenge",
      question: "Simplify the algebraic fraction {{(x^2 - 9) / (x^2 + 5x + 6)}} fully.",
      answer: {
        type: "expression",
        expr: "(x - 3)/(x + 2)",
        display: "{{(x - 3)/(x + 2)}}",
      },
      hints: [
        "Never cancel {{x^2}} across addition or subtraction! Factorise both numerator and denominator first.",
        "Recognise {{x^2 - 9}} as a difference of two squares: {{(x - 3)(x + 3)}}.",
        "Factorise {{x^2 + 5x + 6}} into two brackets whose numbers multiply to 6 and add to 5, then cancel the common factor.",
      ],
      strategy: "Factorise before cancelling",
      solution: [
        "Factorise the numerator (difference of two squares): {{x^2 - 9 = (x - 3)(x + 3)}}.",
        "Factorise the denominator: {{x^2 + 5x + 6 = (x + 2)(x + 3)}}.",
        "Cancel the common factor {{(x + 3)}} from top and bottom to get {{(x - 3)/(x + 2)}}.",
      ],
      commonError: "Illegally cancelling {{x^2}} with {{x^2}} to write {{-9 / (5x + 6)}}.",
    },
    {
      id: "exam-n1-q22",
      kind: "short",
      topicId: "angles-bearings",
      guideRef: "polygon-angles",
      difficulty: "challenge",
      question: "Each interior angle of a regular polygon is {{156°}}. How many sides does the polygon have?",
      answer: { type: "number", value: 15 },
      traps: [
        {
          spec: { type: "number", value: 24 },
          feedback: "{{24°}} is the exterior angle — divide {{360°}} by {{24°}} to find the number of sides.",
        },
        {
          spec: { type: "number", value: 12 },
          feedback: "Check the division: {{360 / 24 = 15}} (since {{24 * 10 = 240}} and {{24 * 5 = 120}}).",
        },
      ],
      hints: [
        "Use the exterior-angle shortcut instead of solving a long interior-angle equation.",
        "Interior + exterior = {{180°}}, so find one exterior angle first.",
        "The exterior angles of any convex polygon sum to {{360°}}, so {{n = 360° / " + '"exterior angle"' + "}}.",
      ],
      strategy: "Switch to exterior angles",
      solution: [
        "Each exterior angle = {{180° - 156° = 24°}}.",
        "Since the exterior angles of a regular {{n}}-gon are equal and sum to {{360°}}, {{n = 360 / 24}}.",
        "Simplify {{360 / 24 = 30 / 2 = 15}}, so the polygon has 15 sides.",
      ],
      commonError: "Stopping after finding the exterior angle (24°) or making an algebraic slip in {{180(n - 2)/n = 156}}.",
    },
    {
      id: "exam-n1-q23",
      kind: "mcq",
      topicId: "linear-graphs",
      guideRef: "inequality-regions",
      difficulty: "challenge",
      question:
        "A region {{R}} on a coordinate grid satisfies all three inequalities {{x >= 1}}, {{y > 2}} and {{x + y <= 6}}. Which of the following points lies in region {{R}}?",
      options: ["(1, 2)", "(4, 3)", "(0, 4)", "(2, 4)"],
      answerIndex: 3,
      hints: [
        "Test each coordinate pair {{(x, y)}} against all three inequalities one by one.",
        "Pay close attention to strict ({{>}}) versus non-strict ({{>=}}, {{<=}}) boundaries.",
        "Check whether {{y = 2}} satisfies {{y > 2}}, and whether {{4 + 3 <= 6}}.",
      ],
      explanation:
        "Testing {{(2, 4)}}: {{2 >= 1}} (true), {{4 > 2}} (true), and {{2 + 4 = 6 <= 6}} (true), so {{(2, 4)}} lies in region {{R}}. The tempting point {{(1, 2)}} fails {{y > 2}} because the boundary {{y = 2}} is dashed (strict inequality), {{(4, 3)}} gives {{4 + 3 = 7 > 6}}, and {{(0, 4)}} fails {{x >= 1}}.",
    },
    {
      id: "exam-n1-q24",
      kind: "written",
      topicId: "transformations-similarity",
      guideRef: "congruence-similarity",
      difficulty: "challenge",
      diagram:
        '<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with segment DE parallel to BC where AD is 6 cm, DB is 9 cm, DE is 8 cm and AE is 10 cm"><rect x="0" y="0" width="400" height="220" fill="var(--surface)" rx="8"/><polygon points="195,28 70,190 330,190" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="2.2"/><line x1="145" y1="93" x2="249" y2="93" stroke="var(--brand)" stroke-width="2.4"/><polyline points="190,88 198,93 190,98" fill="none" stroke="var(--brand)" stroke-width="2"/><polyline points="190,185 198,190 190,195" fill="none" stroke="var(--brand)" stroke-width="2"/><text x="191" y="21" fill="var(--ink)" font-size="14" font-weight="700">A</text><text x="53" y="198" fill="var(--ink)" font-size="14" font-weight="700">B</text><text x="336" y="198" fill="var(--ink)" font-size="14" font-weight="700">C</text><text x="128" y="96" fill="var(--ink)" font-size="14" font-weight="700">D</text><text x="256" y="96" fill="var(--ink)" font-size="14" font-weight="700">E</text><text x="132" y="60" fill="var(--ink)" font-size="13" font-weight="600">6 cm</text><text x="72" y="145" fill="var(--ink)" font-size="13" font-weight="600">9 cm</text><text x="186" y="110" fill="var(--brand)" font-size="13" font-weight="700">8 cm</text><text x="234" y="60" fill="var(--ink)" font-size="13" font-weight="600">10 cm</text></svg>',
      question:
        "In triangle {{ABC}}, point {{D}} lies on {{AB}} and point {{E}} lies on {{AC}} so that {{DE}} is parallel to {{BC}}. Given {{AD = 6}} cm, {{DB = 9}} cm, {{DE = 8}} cm and {{AE = 10}} cm:\n\n(a) Explain why triangles {{ADE}} and {{ABC}} are similar.\n(b) Calculate the exact lengths {{BC}} and {{EC}}.",
      marks: 4,
      hints: [
        "For part (a), compare all three angles of the smaller triangle {{ADE}} and the larger triangle {{ABC}}.",
        "Before finding the scale factor, compute the FULL side length {{AB = AD + DB}}.",
        "Use the linear scale factor {{AB / AD}} to find {{BC}} and the full length {{AC}}.",
        "Once you know {{AC}}, subtract {{AE}} to find {{EC}}.",
      ],
      strategy: "Separate the two overlapping triangles",
      modelAnswer:
        "(a) Angle A is shared by both triangles. Because DE is parallel to BC, ∠ADE = ∠ABC and ∠AED = ∠ACB as corresponding angles. Since all three pairs of angles match (AAA), triangles ADE and ABC are similar. (b) The full side AB = 6 + 9 = 15 cm, so the scale factor from ADE to ABC is 15 ÷ 6 = 2.5. Therefore BC = 8 × 2.5 = 20 cm, and AC = 10 × 2.5 = 25 cm. Subtracting AE gives EC = 25 − 10 = 15 cm.",
      markScheme: [
        {
          point: "Justifies similarity via corresponding angles on parallel lines (and shared angle A)",
          keywords: ["corresponding", "aaa", "equal angles"],
        },
        {
          point: "Finds full side AB = 15 cm and scale factor 2.5 (or 5/2)",
          keywords: ["2.5", "5/2", "scale factor"],
        },
        {
          point: "Calculates BC = 8 × 2.5 = 20 cm",
          keywords: ["20"],
        },
        {
          point: "Finds full side AC = 25 cm and subtracts AE to get EC = 15 cm",
          keywords: ["25", "ec = 15", "25 - 10"],
        },
      ],
      commonError: "Using {{9 / 6 = 1.5}} as the scale factor instead of the full side ratio {{(6 + 9) / 6 = 2.5}}, or stopping at {{AC = 25}} cm instead of finding {{EC}}.",
    },
    {
      id: "exam-n1-q25",
      kind: "written",
      topicId: "algebraic-expressions",
      guideRef: "factorising-rearranging",
      difficulty: "challenge",
      question:
        "Rearrange the formula {{t = (3x + 5) / (x - 2)}} to make {{x}} the subject. Show every algebraic step clearly.",
      marks: 4,
      hints: [
        "Multiply both sides by the denominator {{(x - 2)}} and expand the bracket.",
        "Move all terms containing {{x}} to one side of the equals sign and all other terms to the opposite side.",
        "When the subject {{x}} appears in two terms, factorise {{x}} out into a single bracket.",
        "Divide both sides by the bracket multiplying {{x}}.",
      ],
      strategy: "Collect subject terms, then factorise",
      modelAnswer:
        "Multiply both sides by (x − 2) and expand: t(x − 2) = 3x + 5, so tx − 2t = 3x + 5. Collect the x terms on the left and non-x terms on the right: tx − 3x = 2t + 5. Factorise x out of the left side: x(t − 3) = 2t + 5. Divide both sides by (t − 3) to obtain x = (2t + 5)/(t − 3).",
      markScheme: [
        {
          point: "Multiplies by (x − 2) and expands to tx − 2t = 3x + 5",
          keywords: ["tx - 2t", "tx-2t", "t(x - 2)", "t(x-2)"],
        },
        {
          point: "Collects all x terms on one side: tx − 3x = 2t + 5 (or 3x − tx = −2t − 5)",
          keywords: ["tx - 3x", "tx-3x", "3x - tx", "3x-tx"],
        },
        {
          point: "Factorises x out: x(t − 3) = 2t + 5 (or x(3 − t) = −2t − 5)",
          keywords: ["x(t - 3)", "x(t-3)", "x(3 - t)", "x(3-t)", "factoris"],
        },
        {
          point: "Divides by (t − 3) to get x = (2t + 5)/(t − 3) (or equivalent)",
          keywords: ["/(t - 3)", "/(t-3)", "/(3 - t)", "/(3-t)", "divide by (t - 3)"],
        },
      ],
      commonError: "Leaving {{x}} on both sides of the equation (e.g. {{x = (tx - 2t - 5)/3}}) instead of collecting and factorising.",
    },
  ],
};
