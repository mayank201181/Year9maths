import type { TopicPractice } from "../../types.ts";

const SVG_LINE_EQ =
  '<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Straight line on a coordinate grid passing through (0, 1) and (2, 5)">' +
  '<rect x="0" y="0" width="400" height="240" rx="10" fill="var(--surface)"/>' +
  '<g stroke="var(--line)" stroke-width="1">' +
  '<line x1="60" y1="36" x2="60" y2="224"/><line x1="100" y1="36" x2="100" y2="224"/><line x1="140" y1="36" x2="140" y2="224"/>' +
  '<line x1="180" y1="36" x2="180" y2="224"/><line x1="220" y1="36" x2="220" y2="224"/><line x1="260" y1="36" x2="260" y2="224"/>' +
  '<line x1="300" y1="36" x2="300" y2="224"/>' +
  '<line x1="60" y1="48" x2="300" y2="48"/><line x1="60" y1="70" x2="300" y2="70"/><line x1="60" y1="92" x2="300" y2="92"/>' +
  '<line x1="60" y1="114" x2="300" y2="114"/><line x1="60" y1="136" x2="300" y2="136"/><line x1="60" y1="158" x2="300" y2="158"/>' +
  '<line x1="60" y1="180" x2="300" y2="180"/><line x1="60" y1="202" x2="300" y2="202"/><line x1="60" y1="224" x2="300" y2="224"/>' +
  '</g>' +
  '<line x1="52" y1="180" x2="314" y2="180" stroke="var(--ink)" stroke-width="1.8"/>' +
  '<line x1="140" y1="230" x2="140" y2="28" stroke="var(--ink)" stroke-width="1.8"/>' +
  '<text x="320" y="184" font-size="12" font-weight="700" fill="var(--ink)">x</text>' +
  '<text x="136" y="22" font-size="12" font-weight="700" fill="var(--ink)">y</text>' +
  '<text x="60" y="195" font-size="10" text-anchor="middle" fill="var(--ink-2)">−2</text>' +
  '<text x="100" y="195" font-size="10" text-anchor="middle" fill="var(--ink-2)">−1</text>' +
  '<text x="180" y="195" font-size="10" text-anchor="middle" fill="var(--ink-2)">1</text>' +
  '<text x="220" y="195" font-size="10" text-anchor="middle" fill="var(--ink-2)">2</text>' +
  '<text x="260" y="195" font-size="10" text-anchor="middle" fill="var(--ink-2)">3</text>' +
  '<text x="300" y="195" font-size="10" text-anchor="middle" fill="var(--ink-2)">4</text>' +
  '<text x="132" y="162" font-size="10" text-anchor="end" fill="var(--ink-2)">1</text>' +
  '<text x="132" y="118" font-size="10" text-anchor="end" fill="var(--ink-2)">3</text>' +
  '<text x="132" y="74" font-size="10" text-anchor="end" fill="var(--ink-2)">5</text>' +
  '<text x="132" y="206" font-size="10" text-anchor="end" fill="var(--ink-2)">−1</text>' +
  '<line x1="80" y1="224" x2="240" y2="48" stroke="var(--brand)" stroke-width="3"/>' +
  '<circle cx="140" cy="158" r="5" fill="var(--bad)" stroke="var(--surface)" stroke-width="1.5"/>' +
  '<circle cx="220" cy="70" r="5" fill="var(--brand)" stroke="var(--surface)" stroke-width="1.5"/>' +
  '<text x="150" y="162" font-size="11" font-weight="700" fill="var(--bad)">(0, 1)</text>' +
  '<text x="230" y="74" font-size="11" font-weight="700" fill="var(--brand)">(2, 5)</text>' +
  '</svg>';

const SVG_DIST_TIME =
  '<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Distance-time graph rising from (0, 0) to (1.5, 45), flat to (2.5, 45), and returning to (4, 0)">' +
  '<rect x="0" y="0" width="460" height="240" rx="10" fill="var(--surface)"/>' +
  '<g stroke="var(--line)" stroke-width="1">' +
  '<line x1="70" y1="45" x2="70" y2="195"/><line x1="112.5" y1="45" x2="112.5" y2="195"/><line x1="155" y1="45" x2="155" y2="195"/>' +
  '<line x1="197.5" y1="45" x2="197.5" y2="195"/><line x1="240" y1="45" x2="240" y2="195"/><line x1="282.5" y1="45" x2="282.5" y2="195"/>' +
  '<line x1="325" y1="45" x2="325" y2="195"/><line x1="367.5" y1="45" x2="367.5" y2="195"/><line x1="410" y1="45" x2="410" y2="195"/>' +
  '<line x1="70" y1="45" x2="410" y2="45"/><line x1="70" y1="82.5" x2="410" y2="82.5"/><line x1="70" y1="120" x2="410" y2="120"/>' +
  '<line x1="70" y1="157.5" x2="410" y2="157.5"/><line x1="70" y1="195" x2="410" y2="195"/>' +
  '</g>' +
  '<line x1="70" y1="195" x2="425" y2="195" stroke="var(--ink)" stroke-width="1.8"/>' +
  '<line x1="70" y1="195" x2="70" y2="30" stroke="var(--ink)" stroke-width="1.8"/>' +
  '<text x="240" y="230" font-size="11.5" font-weight="700" text-anchor="middle" fill="var(--ink)">Time (hours)</text>' +
  '<text x="22" y="120" font-size="11.5" font-weight="700" text-anchor="middle" transform="rotate(-90 22 120)" fill="var(--ink)">Distance (km)</text>' +
  '<text x="70" y="210" font-size="10" text-anchor="middle" fill="var(--ink-2)">0</text>' +
  '<text x="155" y="210" font-size="10" text-anchor="middle" fill="var(--ink-2)">1</text>' +
  '<text x="240" y="210" font-size="10" text-anchor="middle" fill="var(--ink-2)">2</text>' +
  '<text x="325" y="210" font-size="10" text-anchor="middle" fill="var(--ink-2)">3</text>' +
  '<text x="410" y="210" font-size="10" text-anchor="middle" fill="var(--ink-2)">4</text>' +
  '<text x="60" y="161" font-size="10" text-anchor="end" fill="var(--ink-2)">15</text>' +
  '<text x="60" y="124" font-size="10" text-anchor="end" fill="var(--ink-2)">30</text>' +
  '<text x="60" y="86" font-size="10" text-anchor="end" fill="var(--ink-2)">45</text>' +
  '<text x="60" y="49" font-size="10" text-anchor="end" fill="var(--ink-2)">60</text>' +
  '<polyline points="70,195 197.5,82.5 282.5,82.5 410,195" fill="none" stroke="var(--brand)" stroke-width="3.2"/>' +
  '<circle cx="70" cy="195" r="4.5" fill="var(--brand)"/>' +
  '<circle cx="197.5" cy="82.5" r="4.5" fill="var(--brand)"/>' +
  '<circle cx="282.5" cy="82.5" r="4.5" fill="var(--brand)"/>' +
  '<circle cx="410" cy="195" r="4.5" fill="var(--brand)"/>' +
  '<text x="197.5" y="72" font-size="10.5" font-weight="700" text-anchor="middle" fill="var(--ink)">(1.5, 45)</text>' +
  '<text x="282.5" y="72" font-size="10.5" font-weight="700" text-anchor="middle" fill="var(--ink)">(2.5, 45)</text>' +
  '</svg>';

const SVG_SOLID_TRIANGLE =
  '<svg viewBox="0 0 380 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Shaded solid triangle bounded by x >= 1, y >= 1, and x + y <= 5">' +
  '<rect x="0" y="0" width="380" height="240" rx="10" fill="var(--surface)"/>' +
  '<g stroke="var(--line)" stroke-width="1">' +
  '<line x1="70" y1="30" x2="70" y2="205"/><line x1="115" y1="30" x2="115" y2="205"/><line x1="160" y1="30" x2="160" y2="205"/>' +
  '<line x1="205" y1="30" x2="205" y2="205"/><line x1="250" y1="30" x2="250" y2="205"/><line x1="295" y1="30" x2="295" y2="205"/>' +
  '<line x1="70" y1="30" x2="295" y2="30"/><line x1="70" y1="65" x2="295" y2="65"/><line x1="70" y1="100" x2="295" y2="100"/>' +
  '<line x1="70" y1="135" x2="295" y2="135"/><line x1="70" y1="170" x2="295" y2="170"/><line x1="70" y1="205" x2="295" y2="205"/>' +
  '</g>' +
  '<polygon points="115,170 250,170 115,65" fill="var(--brand-soft)" opacity="0.85"/>' +
  '<line x1="65" y1="205" x2="312" y2="205" stroke="var(--ink)" stroke-width="1.8"/>' +
  '<line x1="70" y1="210" x2="70" y2="20" stroke="var(--ink)" stroke-width="1.8"/>' +
  '<text x="316" y="209" font-size="12" font-weight="700" fill="var(--ink)">x</text>' +
  '<text x="66" y="16" font-size="12" font-weight="700" fill="var(--ink)">y</text>' +
  '<text x="115" y="220" font-size="10" text-anchor="middle" fill="var(--ink-2)">1</text>' +
  '<text x="160" y="220" font-size="10" text-anchor="middle" fill="var(--ink-2)">2</text>' +
  '<text x="205" y="220" font-size="10" text-anchor="middle" fill="var(--ink-2)">3</text>' +
  '<text x="250" y="220" font-size="10" text-anchor="middle" fill="var(--ink-2)">4</text>' +
  '<text x="295" y="220" font-size="10" text-anchor="middle" fill="var(--ink-2)">5</text>' +
  '<text x="61" y="174" font-size="10" text-anchor="end" fill="var(--ink-2)">1</text>' +
  '<text x="61" y="139" font-size="10" text-anchor="end" fill="var(--ink-2)">2</text>' +
  '<text x="61" y="104" font-size="10" text-anchor="end" fill="var(--ink-2)">3</text>' +
  '<text x="61" y="69" font-size="10" text-anchor="end" fill="var(--ink-2)">4</text>' +
  '<text x="61" y="34" font-size="10" text-anchor="end" fill="var(--ink-2)">5</text>' +
  '<line x1="115" y1="30" x2="115" y2="205" stroke="var(--brand)" stroke-width="2.6"/>' +
  '<line x1="70" y1="170" x2="295" y2="170" stroke="var(--good)" stroke-width="2.6"/>' +
  '<line x1="70" y1="30" x2="295" y2="205" stroke="var(--bad)" stroke-width="2.6"/>' +
  '<text x="150" y="142" font-size="18" font-weight="800" fill="var(--brand)">R</text>' +
  '<text x="225" y="122" font-size="11" font-weight="700" fill="var(--bad)">x + y = 5</text>' +
  '<text x="120" y="45" font-size="10.5" font-weight="700" fill="var(--brand)">x = 1</text>' +
  '<text x="262" y="163" font-size="10.5" font-weight="700" fill="var(--good)">y = 1</text>' +
  '</svg>';

export const practice: TopicPractice = {
  quiz: [
    {
      id: "linear-graphs-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "explicit-implicit-graphs",
      question: "Find the value of {{y}} on the line {{y = 5x - 7}} when {{x = 4}}.",
      answer: { type: "number", value: 13, display: "13" },
      hints: ["Substitute {{x = 4}} into {{5x - 7}}."],
      solution: ["Substitute {{x = 4}}: {{y = 5(4) - 7 = 20 - 7 = 13}}."],
    },
    {
      id: "linear-graphs-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "explicit-implicit-graphs",
      question: "Which equation gives the **horizontal** line passing through {{(3, -2)}}?",
      options: ["{{x = 3}}", "{{y = -2}}", "{{y = 3x - 2}}", "{{x = -2}}"],
      answerIndex: 1,
      hints: [
        "Every point on a horizontal line shares the same {{y}}-coordinate.",
        "Read the {{y}}-coordinate of {{(3, -2)}}.",
      ],
      explanation:
        "A horizontal line has equation {{y = k}}. Since the line passes through {{(3, -2)}}, every point on it has {{y = -2}}.",
    },
    {
      id: "linear-graphs-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "explicit-implicit-graphs",
      question: "Use the cover-up method to find the {{y}}-intercept of {{2x + 5y = 30}}. Write your answer as coordinates {{(x, y)}}.",
      answer: { type: "list", values: [0, 6], ordered: true, display: "(0, 6)" },
      hints: [
        "On the {{y}}-axis, {{x = 0}}.",
        "Solve {{5y = 30}} for {{y}}.",
      ],
      traps: [
        { spec: { type: "list", values: [6, 0], ordered: true }, feedback: "Coordinates are (x, y): on the y-axis, x is 0 so write (0, 6)." },
        { spec: { type: "list", values: [15, 0], ordered: true }, feedback: "(15, 0) is the x-intercept; set x = 0 for the y-intercept." },
      ],
      solution: ["Set {{x = 0}}: {{5y = 30}} → {{y = 6}}.", "The {{y}}-intercept is {{(0, 6)}}."],
    },
    {
      id: "linear-graphs-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "equation-of-a-line",
      question: "Calculate the gradient of the straight line passing through {{(1, 4)}} and {{(5, 16)}}.",
      answer: { type: "number", value: 3, display: "3" },
      hints: [
        "Use {{m = (y_2 - y_1) / (x_2 - x_1)}}.",
        "Divide {{16 - 4}} by {{5 - 1}}.",
      ],
      traps: [
        { spec: { type: "fraction", n: 1, d: 3, allowDecimal: true }, feedback: "You put run over rise — put vertical change (y₂ − y₁) on top!" },
      ],
      solution: ["{{m = (16 - 4) / (5 - 1) = 12 / 4 = 3}}."],
    },
    {
      id: "linear-graphs-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "equation-of-a-line",
      question: "Find the gradient of the straight line {{4y = 8x - 12}}.",
      answer: { type: "number", value: 2, display: "2" },
      hints: [
        "Isolate {{y}} first by dividing every term by {{4}}.",
        "Read the coefficient of {{x}} once the equation is in {{y = mx + c}} form.",
      ],
      traps: [
        { spec: { type: "number", value: 8 }, feedback: "Don't forget to divide both sides by 4 so y is on its own!" },
      ],
      solution: ["Divide by {{4}}: {{y = 2x - 3}}.", "The gradient is {{m = 2}}."],
    },
    {
      id: "linear-graphs-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "equation-of-a-line",
      question: "Write the equation of the line with gradient {{-2}} and {{y}}-intercept {{5}} in the form {{y = mx + c}}.",
      answer: { type: "expression", expr: "-2x + 5", display: "{{y = -2x + 5}}" },
      hints: [
        "Substitute {{m = -2}} and {{c = 5}} into {{y = mx + c}}.",
        "Check that {{-2}} multiplies {{x}} and {{+5}} is the constant term.",
      ],
      solution: ["With {{m = -2}} and {{c = 5}}, the equation is {{y = -2x + 5}}."],
    },
    {
      id: "linear-graphs-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "gradients-intercepts-context",
      question: "A plumber's invoice {{C}} (in £) for {{h}} hours of work is modelled by {{C = 35h + 40}}. What does the gradient {{35}} represent?",
      options: [
        "The fixed call-out fee of £35",
        "The maximum job length of 35 hours",
        "The hourly labour rate of £35/hour",
        "The £35 discount for long repairs",
      ],
      answerIndex: 2,
      hints: [
        "The gradient has units (vertical unit) per (horizontal unit).",
        "Here the vertical axis is £ and the horizontal axis is hours.",
      ],
      explanation:
        "The gradient {{35}} has units £ per hour, meaning each extra hour of work adds £35 to the bill. The fixed call-out fee is the {{y}}-intercept, £40.",
    },
    {
      id: "linear-graphs-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "gradients-intercepts-context",
      question: "A van's distance–time graph is a straight line from {{(0, 0)}} to {{(2, 70)}} (time in hours, distance in km). Find its speed in km/h.",
      answer: { type: "number", value: 35, display: "35 km/h" },
      hints: [
        "Speed equals the gradient of a distance–time graph.",
        "Calculate {{70 / 2}}.",
      ],
      solution: ["Gradient (speed) {{= (70 - 0) / (2 - 0) = 35}} km/h."],
    },
    {
      id: "linear-graphs-quiz-q09",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "inequality-regions",
      question: "Which description correctly matches the inequality region {{y >= 3x - 2}}?",
      options: [
        "Solid boundary line, region above the line",
        "Solid boundary line, region below the line",
        "Dashed boundary line, region above the line",
        "Dashed boundary line, region below the line",
      ],
      answerIndex: 0,
      hints: [
        "Does {{>=}} include points on the boundary line?",
        "Test {{(0, 0)}}: is {{0 >= -2}} true?",
      ],
      explanation:
        "The inclusive sign {{>=}} requires a **solid** boundary line, and since {{y}} is greater than or equal to {{3x - 2}} (and {{(0, 0)}} above the line satisfies {{0 >= -2}}), the wanted region lies **above** the line.",
    },
    {
      id: "linear-graphs-quiz-q10",
      kind: "short",
      difficulty: "core",
      guideRef: "inequality-regions",
      question: "How many integer coordinate points {{(x, y)}} satisfy BOTH {{0 <= x <= 2}} and {{0 <= y <= 1}}?",
      answer: { type: "number", value: 6, display: "6" },
      hints: [
        "List the valid integers for {{x}}: {{0, 1, 2}}.",
        "List the valid integers for {{y}}: {{0, 1}}, then multiply the counts.",
      ],
      solution: ["Valid {{x}}: {{0, 1, 2}} (3 values). Valid {{y}}: {{0, 1}} (2 values).", "Total integer points {{= 3 * 2 = 6}}."],
    },
  ],
  papers: [
    {
      id: "linear-graphs-p1",
      title: "Practice Paper 1 — Core Linear Graphs & Regions",
      questions: [
        {
          id: "linear-graphs-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "explicit-implicit-graphs",
          question: "Find the value of {{y}} when {{x = -3}} on the line {{y = 2x + 9}}.",
          answer: { type: "number", value: 3, display: "3" },
          hints: ["Substitute {{x = -3}} into {{2x + 9}}."],
          traps: [
            { spec: { type: "number", value: 15 }, feedback: "Watch the sign: 2 × (−3) is −6, not +6!" },
          ],
          solution: ["{{y = 2(-3) + 9 = -6 + 9 = 3}}."],
        },
        {
          id: "linear-graphs-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "explicit-implicit-graphs",
          question: "Write the equation of the **vertical** straight line passing through {{(5, -2)}}.",
          answer: { type: "text", accept: ["x = 5", "x=5"], display: "{{x = 5}}" },
          hints: [
            "All points on a vertical line have the exact same {{x}}-coordinate.",
            "Remember VUX: Vertical lines have equation {{x = k}}.",
          ],
          traps: [
            { spec: { type: "text", accept: ["y = -2", "y=-2", "y = −2"] }, feedback: "y = −2 is a horizontal line; a vertical line keeps x constant." },
          ],
          solution: ["Every point on the vertical line through {{(5, -2)}} has {{x = 5}}, so the equation is {{x = 5}}."],
        },
        {
          id: "linear-graphs-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "explicit-implicit-graphs",
          question: "Find the {{x}}-intercept of the implicit line {{3x - 2y = 18}}. Write your answer as coordinates {{(x, y)}}.",
          answer: { type: "list", values: [6, 0], ordered: true, display: "(6, 0)" },
          hints: [
            "At the {{x}}-intercept, {{y = 0}}.",
            "Cover up {{-2y}} to solve {{3x = 18}}.",
          ],
          traps: [
            { spec: { type: "list", values: [0, -9], ordered: true }, feedback: "(0, −9) is the y-intercept; set y = 0 to find the x-intercept." },
          ],
          solution: ["Set {{y = 0}}: {{3x = 18}} → {{x = 6}}.", "The {{x}}-intercept is {{(6, 0)}}."],
        },
        {
          id: "linear-graphs-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "equation-of-a-line",
          question: "Calculate the gradient of the line joining {{(-2, 3)}} and {{(4, 15)}}.",
          answer: { type: "number", value: 2, display: "2" },
          hints: [
            "Use {{m = (y_2 - y_1) / (x_2 - x_1)}}.",
            "Remember {{4 - (-2) = 4 + 2 = 6}}.",
          ],
          traps: [
            { spec: { type: "number", value: 6 }, feedback: "Check the denominator: 4 − (−2) = 6, not 4 − 2 = 2!" },
          ],
          solution: ["{{m = (15 - 3) / (4 - (-2)) = 12 / 6 = 2}}."],
        },
        {
          id: "linear-graphs-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "equation-of-a-line",
          question: "Calculate the gradient of the straight line passing through {{(2, 10)}} and {{(7, -5)}}.",
          answer: { type: "number", value: -3, display: "−3" },
          hints: [
            "Subtract {{y}}-values on top: {{-5 - 10 = -15}}.",
            "Divide by {{7 - 2 = 5}}.",
          ],
          traps: [
            { spec: { type: "number", value: 3 }, feedback: "Check the sign: y drops from 10 down to −5 as x increases, so the gradient is negative!" },
          ],
          solution: ["{{m = (-5 - 10) / (7 - 2) = -15 / 5 = -3}}."],
        },
        {
          id: "linear-graphs-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "equation-of-a-line",
          diagram: SVG_LINE_EQ,
          question: "Use the coordinate graph to write the equation of the straight line in the form {{y = mx + c}}.",
          answer: { type: "expression", expr: "2x + 1", display: "{{y = 2x + 1}}" },
          hints: [
            "Read the {{y}}-intercept directly where the line crosses the {{y}}-axis: {{(0, 1)}}.",
            "Compute the gradient between {{(0, 1)}} and {{(2, 5)}}: rise {{= 4}}, run {{= 2}}.",
          ],
          solution: [
            "{{y}}-intercept {{c = 1}} (from {{(0, 1)}}).",
            "Gradient {{m = (5 - 1) / (2 - 0) = 4 / 2 = 2}}.",
            "Equation: {{y = 2x + 1}}.",
          ],
        },
        {
          id: "linear-graphs-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "equation-of-a-line",
          question: "A straight line has gradient {{4}} and passes through {{(3, 7)}}. Find its {{y}}-intercept {{c}}.",
          answer: { type: "number", value: -5, display: "−5" },
          hints: [
            "Substitute {{m = 4}}, {{x = 3}}, and {{y = 7}} into {{y = mx + c}}.",
            "Solve {{7 = 12 + c}}.",
          ],
          solution: ["Substitute {{(3, 7)}} into {{y = 4x + c}}: {{7 = 4(3) + c}} → {{7 = 12 + c}} → {{c = -5}}."],
        },
        {
          id: "linear-graphs-p1-q08",
          kind: "mcq",
          difficulty: "core",
          guideRef: "equation-of-a-line",
          question: "Which equation represents a line **parallel** to {{2x + y = 9}}?",
          options: ["{{y = 2x + 9}}", "{{2y = 4x - 3}}", "{{x + 2y = 9}}", "{{4x + 2y = 5}}"],
          answerIndex: 3,
          hints: [
            "Rewrite {{2x + y = 9}} as {{y = -2x + 9}} — its gradient is {{-2}}.",
            "Rearrange each option into {{y = mx + c}} to find which one also has {{m = -2}}.",
          ],
          explanation:
            "Rearranging {{4x + 2y = 5}} gives {{2y = -4x + 5}}, so {{y = -2x + 2.5}}, which has the exact same gradient {{m = -2}} as {{y = -2x + 9}}.",
        },
        {
          id: "linear-graphs-p1-q09",
          kind: "written",
          difficulty: "core",
          guideRef: "equation-of-a-line",
          marks: 3,
          question: "Show algebraically that the lines {{L_1: 6x - 2y = 10}} and {{L_2: y = 3x + 4}} are parallel, and explain why they never meet.",
          hints: [
            "Rearrange {{L_1}} so that {{y}} is the subject ({{y = mx + c}}).",
            "Compare the gradients of {{L_1}} and {{L_2}}.",
            "Compare their {{y}}-intercepts to explain why they never cross.",
          ],
          modelAnswer:
            "Rearranging L1: 6x − 2y = 10 gives 2y = 6x − 10, so y = 3x − 5. Both L1 and L2 have the same gradient (m = 3), which proves they are parallel. Because their y-intercepts are different (−5 versus 4), the two lines are distinct and stay a constant vertical distance apart, so they never intersect.",
          markScheme: [
            { point: "Rearrange L1 correctly to y = 3x − 5", keywords: ["3x - 5", "3x-5", "2y = 6x - 10"] },
            { point: "State both lines have equal gradient m = 3 (hence parallel)", keywords: ["same gradient", "equal gradient", "gradient is 3", "m = 3", "gradients are 3"] },
            { point: "Note different y-intercepts (−5 and 4) so they never intersect", keywords: ["-5", "intercept", "different"] },
          ],
        },
        {
          id: "linear-graphs-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "gradients-intercepts-context",
          question: "A bicycle hire shop charges {{C = 8h + 12}} (in $) for {{h}} hours. How many hours can Maya hire a bike if her total bill is {{$60}}?",
          answer: { type: "number", value: 6, display: "6 hours" },
          hints: [
            "Substitute {{C = 60}} into {{C = 8h + 12}}.",
            "Subtract {{12}} from {{60}}, then divide by {{8}}.",
          ],
          solution: ["{{8h + 12 = 60}} → {{8h = 48}} → {{h = 6}} hours."],
        },
        {
          id: "linear-graphs-p1-q11",
          kind: "written",
          difficulty: "core",
          guideRef: "gradients-intercepts-context",
          marks: 2,
          question: "The temperature {{T}} (°C) of a mug of tea after {{m}} minutes is given by {{T = 82 - 3.5m}}. Interpret the meaning of {{82}} and {{-3.5}} in this real-world context.",
          hints: [
            "What is the temperature when {{m = 0}} minutes?",
            "How much does the temperature change for every {{+1}} minute?",
          ],
          modelAnswer:
            "82 means the initial starting temperature of the tea at m = 0 is 82 °C. −3.5 means the temperature decreases (cools) at a steady rate of 3.5 °C per minute.",
          markScheme: [
            { point: "Identify 82 as the initial/starting temperature (82 °C at t = 0)", keywords: ["initial", "starting", "starts", "at 0", "beginning"] },
            { point: "Identify −3.5 as a decrease/cooling rate of 3.5 °C per minute", keywords: ["decreases", "drops", "falls", "cools", "per minute", "every minute"] },
          ],
        },
        {
          id: "linear-graphs-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "gradients-intercepts-context",
          question: "A car travels {{90}} km at constant speed in {{1}} hour {{30}} minutes. Calculate the gradient of its distance–time graph in km/h.",
          answer: { type: "number", value: 60, display: "60 km/h" },
          hints: [
            "Convert {{1}} hour {{30}} minutes into decimal hours: {{1.5}} hours (NOT {{1.3}}!).",
            "Divide {{90}} km by {{1.5}} hours.",
          ],
          solution: ["Time {{= 1.5}} hours.", "Gradient (speed) {{= 90 / 1.5 = 60}} km/h."],
        },
        {
          id: "linear-graphs-p1-q13",
          kind: "mcq",
          difficulty: "core",
          guideRef: "inequality-regions",
          question: "Testing {{(0, 0)}} in {{x + 2y < 8}} gives {{0 < 8}} (true). Which description matches the wanted region?",
          options: [
            "Dashed boundary line, keeping the origin side",
            "Solid boundary line, keeping the origin side",
            "Dashed boundary line, opposite the origin side",
            "Solid boundary line, opposite the origin side",
          ],
          answerIndex: 0,
          hints: [
            "Strict inequality ({{<}}) means dashed line.",
            "Because {{(0, 0)}} makes the statement true, the origin side is the wanted side.",
          ],
          explanation:
            "The strict sign {{<}} demands a dashed boundary line, and because {{(0, 0)}} satisfies {{0 < 8}}, the wanted half-plane is the side containing the origin.",
        },
        {
          id: "linear-graphs-p1-q14",
          kind: "short",
          difficulty: "core",
          guideRef: "inequality-regions",
          question: "How many integer coordinate points {{(x, y)}} satisfy ALL three inequalities {{x >= 1}}, {{x <= 4}}, and {{1 < y < 4}}?",
          answer: { type: "number", value: 8, display: "8" },
          hints: [
            "List the allowed integers for {{x}}: {{1, 2, 3, 4}}.",
            "Remember {{1 < y < 4}} is strict at both ends, so {{y}} can only be {{2}} or {{3}}.",
          ],
          traps: [
            { spec: { type: "number", value: 16 }, feedback: "Watch the strict signs in 1 < y < 4: y = 1 and y = 4 are excluded!" },
          ],
          solution: ["Allowed {{x}}: {{1, 2, 3, 4}} (4 values). Allowed {{y}}: {{2, 3}} (2 values).", "Total integer points {{= 4 * 2 = 8}}."],
        },
        {
          id: "linear-graphs-p1-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "inequality-regions",
          marks: 3,
          question: "Describe how to draw the region {{R}} for {{2x + y < 6}} on axes, stating the two intercepts of the line, the line style, and how to pick the correct side.",
          hints: [
            "Use the cover-up method on {{2x + y = 6}} to get both axis intercepts.",
            "Decide whether {{<}} requires a solid or dashed boundary.",
            "Explain what happens when you test {{(0, 0)}}.",
          ],
          modelAnswer:
            "Plot the boundary 2x + y = 6 using its intercepts (0, 6) and (3, 0). Draw it as a dashed line because the inequality < is strict. Test the origin (0, 0): 2(0) + 0 = 0 < 6 is true, so the required region R is the side containing (0, 0).",
          markScheme: [
            { point: "Find both intercepts (0, 6) and (3, 0)", keywords: ["(0, 6)", "(3, 0)", "(0,6)", "(3,0)"] },
            { point: "State the boundary is drawn as a dashed line", keywords: ["dashed", "dotted", "broken"] },
            { point: "Use a test point such as (0, 0) and identify the origin side as true", keywords: ["(0, 0)", "(0,0)", "origin", "test"] },
          ],
        },
      ],
    },
    {
      id: "linear-graphs-p2",
      title: "Practice Paper 2 — Equations, Contexts & Inequalities",
      questions: [
        {
          id: "linear-graphs-p2-q01",
          kind: "short",
          difficulty: "core",
          guideRef: "explicit-implicit-graphs",
          question: "Find the {{x}}-coordinate where the line {{y = -4x + 18}} intersects the horizontal line {{y = 2}}.",
          answer: { type: "number", value: 4, display: "4" },
          hints: [
            "Substitute {{y = 2}} into {{y = -4x + 18}}.",
            "Solve {{2 = -4x + 18}} by moving {{4x}} to the left.",
          ],
          solution: ["{{2 = -4x + 18}} → {{4x = 16}} → {{x = 4}}."],
        },
        {
          id: "linear-graphs-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "explicit-implicit-graphs",
          question: "Find the {{y}}-intercept of the implicit line {{4x - 3y = 12}}. Write your answer as coordinates {{(x, y)}}.",
          answer: { type: "list", values: [0, -4], ordered: true, display: "(0, −4)" },
          hints: [
            "Set {{x = 0}} to cover up {{4x}}.",
            "Keep the negative sign: solve {{-3y = 12}}.",
          ],
          traps: [
            { spec: { type: "list", values: [0, 4], ordered: true }, feedback: "Watch the minus sign: −3y = 12 gives y = −4, not +4!" },
          ],
          solution: ["Set {{x = 0}}: {{-3y = 12}} → {{y = -4}}.", "The {{y}}-intercept is {{(0, -4)}}."],
        },
        {
          id: "linear-graphs-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "equation-of-a-line",
          question: "Find the equation of the straight line passing through {{(2, 1)}} and {{(6, 13)}} in the form {{y = mx + c}}.",
          answer: { type: "expression", expr: "3x - 5", display: "{{y = 3x - 5}}" },
          hints: [
            "Calculate {{m = (13 - 1) / (6 - 2)}}.",
            "Substitute {{m = 3}} and {{(2, 1)}} into {{y = mx + c}} to find {{c}}.",
          ],
          solution: [
            "Gradient {{m = (13 - 1) / (6 - 2) = 12 / 4 = 3}}.",
            "Using {{(2, 1)}}: {{1 = 3(2) + c}} → {{c = -5}}.",
            "Equation: {{y = 3x - 5}}. Check with {{(6, 13)}}: {{3(6) - 5 = 13}} ✓.",
          ],
        },
        {
          id: "linear-graphs-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "equation-of-a-line",
          question: "Find the equation of the straight line through {{(-3, 10)}} and {{(3, -2)}} in the form {{y = mx + c}}.",
          answer: { type: "expression", expr: "-2x + 4", display: "{{y = -2x + 4}}" },
          hints: [
            "Compute {{m = (-2 - 10) / (3 - (-3)) = -12 / 6}}.",
            "Substitute {{m = -2}} and {{(3, -2)}} into {{y = mx + c}}.",
          ],
          solution: [
            "Gradient {{m = (-2 - 10) / (3 - (-3)) = -12 / 6 = -2}}.",
            "Using {{(3, -2)}}: {{-2 = -2(3) + c}} → {{-2 = -6 + c}} → {{c = 4}}.",
            "Equation: {{y = -2x + 4}}.",
          ],
        },
        {
          id: "linear-graphs-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "equation-of-a-line",
          question: "Write the equation of the line **parallel** to {{y = 4x - 7}} that passes through {{(2, 5)}}.",
          answer: { type: "expression", expr: "4x - 3", display: "{{y = 4x - 3}}" },
          hints: [
            "Parallel lines share the exact same gradient: {{m = 4}}.",
            "Substitute {{(2, 5)}} into {{y = 4x + c}} to solve for {{c}}.",
          ],
          solution: [
            "Gradient {{m = 4}}.",
            "Substitute {{(2, 5)}}: {{5 = 4(2) + c}} → {{5 = 8 + c}} → {{c = -3}}.",
            "Equation: {{y = 4x - 3}}.",
          ],
        },
        {
          id: "linear-graphs-p2-q06",
          kind: "short",
          difficulty: "challenge",
          guideRef: "equation-of-a-line",
          question: "Rearrange the implicit equation {{6x + 4y = 20}} into {{y = mx + c}} and state its gradient {{m}}.",
          answer: { type: "number", value: -1.5, display: "−1.5" },
          hints: [
            "Subtract {{6x}} from both sides to get {{4y = -6x + 20}}.",
            "Divide every term by {{4}} and simplify {{-6 / 4}}.",
          ],
          traps: [
            { spec: { type: "number", value: 1.5 }, feedback: "Moving 6x to the right side turns it into −6x, so the gradient is negative!" },
            { spec: { type: "number", value: -6 }, feedback: "Remember to divide both sides by 4 to isolate a single y." },
          ],
          solution: ["{{4y = -6x + 20}} → {{y = -3/2 x + 5}}.", "Gradient {{m = -3/2 = -1.5}}."],
        },
        {
          id: "linear-graphs-p2-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "explicit-implicit-graphs",
          question: "The straight line {{kx - 2y = 10}} passes through the point {{(4, 3)}}. What is the value of {{k}}?",
          options: ["2", "3", "4", "5"],
          answerIndex: 2,
          hints: [
            "Substitute {{x = 4}} and {{y = 3}} into {{kx - 2y = 10}}.",
            "Solve {{4k - 6 = 10}}.",
          ],
          explanation:
            "Substituting {{(4, 3)}} gives {{4k - 2(3) = 10}} → {{4k - 6 = 10}} → {{4k = 16}} → {{k = 4}}.",
        },
        {
          id: "linear-graphs-p2-q08",
          kind: "written",
          difficulty: "core",
          guideRef: "equation-of-a-line",
          marks: 3,
          question: "Decide whether the three points {{A(1, 2)}}, {{B(4, 8)}}, and {{C(7, 13)}} lie on the same straight line. Justify your answer using gradients.",
          hints: [
            "Compute the gradient of segment {{AB}}.",
            "Compute the gradient of segment {{BC}}.",
            "Three points lie on one straight line if and only if both gradients are equal.",
          ],
          modelAnswer:
            "Gradient of AB = (8 − 2) / (4 − 1) = 6/3 = 2. Gradient of BC = (13 − 8) / (7 − 4) = 5/3. Because the gradients 2 and 5/3 are different (not equal), the three points are not collinear and do not lie on the same straight line.",
          markScheme: [
            { point: "Find gradient of AB = 6/3 = 2", keywords: ["6/3", "gradient of ab is 2", "m = 2", "= 2"] },
            { point: "Find gradient of BC = 5/3 (or AC = 11/6)", keywords: ["5/3", "11/6", "1.67", "1.83"] },
            { point: "Conclude points do NOT lie on one line because gradients are different", keywords: ["not equal", "different", "not collinear", "do not lie"] },
          ],
        },
        {
          id: "linear-graphs-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "gradients-intercepts-context",
          diagram: SVG_DIST_TIME,
          question: "The distance–time graph shows a delivery van's round trip. Calculate the van's speed during the first stage (from {{t = 0}} to {{t = 1.5}} hours), in km/h.",
          answer: { type: "number", value: 30, display: "30 km/h" },
          hints: [
            "Read the distance reached at {{t = 1.5}} hours: {{45}} km.",
            "Calculate speed = gradient {{= 45 / 1.5}}.",
          ],
          solution: ["Distance {{= 45}} km in {{1.5}} hours.", "Speed {{= 45 / 1.5 = 30}} km/h."],
        },
        {
          id: "linear-graphs-p2-q10",
          kind: "written",
          difficulty: "core",
          guideRef: "gradients-intercepts-context",
          marks: 3,
          question: "A van leaves a depot at {{08:00}}, travels steadily to a town {{45}} km away by {{09:30}}, pauses until {{10:30}}, and drives steadily back to the depot by {{12:00}}. Describe all three stages of its distance–time graph using speeds and gradients.",
          hints: [
            "Stage 1 (08:00–09:30): {{45}} km in {{1.5}} hours.",
            "Stage 2 (09:30–10:30): distance stays constant at {{45}} km.",
            "Stage 3 (10:30–12:00): distance falls {{45}} km in {{1.5}} hours (watch the sign of the gradient!).",
          ],
          modelAnswer:
            "Stage 1 (08:00 to 09:30) rises linearly with gradient +30 km/h, showing steady outward travel at 30 km/h. Stage 2 (09:30 to 10:30) is a horizontal flat line with gradient 0 km/h because the van is stationary for 1 hour. Stage 3 (10:30 to 12:00) slopes downward with negative gradient −30 km/h, showing the van returning to the depot at 30 km/h.",
          markScheme: [
            { point: "Stage 1: positive gradient/speed of 30 km/h", keywords: ["30 km/h", "+30", "30"] },
            { point: "Stage 2: horizontal/flat line, stationary, gradient 0", keywords: ["stationary", "horizontal", "flat", "0 km/h", "zero"] },
            { point: "Stage 3: negative gradient −30 km/h (returning at 30 km/h)", keywords: ["-30", "negative", "returning", "downward"] },
          ],
        },
        {
          id: "linear-graphs-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "gradients-intercepts-context",
          question: "Gym A charges {{C = 20m + 50}} and Gym B charges {{C = 30m + 10}} (in £, for {{m}} months). After how many months do both gyms cost the exact same total?",
          answer: { type: "number", value: 4, display: "4 months" },
          hints: [
            "Set both expressions equal: {{20m + 50 = 30m + 10}}.",
            "Subtract {{20m}} and subtract {{10}} from both sides.",
          ],
          solution: ["{{20m + 50 = 30m + 10}} → {{40 = 10m}} → {{m = 4}} months (both cost £130)."],
        },
        {
          id: "linear-graphs-p2-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "inequality-regions",
          question: "To test whether {{(2, -1)}} lies in the region {{3x - 2y <= 9}}, evaluate {{3x - 2y}} at {{(2, -1)}}.",
          answer: { type: "number", value: 8, display: "8" },
          hints: [
            "Substitute {{x = 2}} and {{y = -1}} into {{3x - 2y}}.",
            "Watch the double negative: {{-2 * (-1) = +2}}.",
          ],
          traps: [
            { spec: { type: "number", value: 4 }, feedback: "Watch the sign: −2 × (−1) = +2, so 6 + 2 = 8, not 6 − 2!" },
          ],
          solution: ["{{3(2) - 2(-1) = 6 + 2 = 8}}. Since {{8 <= 9}} is true, {{(2, -1)}} IS inside the region."],
        },
        {
          id: "linear-graphs-p2-q13",
          kind: "mcq",
          difficulty: "core",
          guideRef: "inequality-regions",
          question: "Which inequality is equivalent to {{4x - 2y >= 10}} when rearranged with {{y}} as the subject?",
          options: ["{{y >= 2x - 5}}", "{{y <= 2x - 5}}", "{{y <= 2x + 5}}", "{{y < 2x - 5}}"],
          answerIndex: 1,
          hints: [
            "Move {{-2y}} to the right so it becomes positive: {{4x >= 2y + 10}}.",
            "Subtract {{10}} and divide by {{2}} (or remember to flip {{>=}} to {{<=}} if dividing by {{-2}}).",
          ],
          explanation:
            "Adding {{2y}} and subtracting {{10}} gives {{4x - 10 >= 2y}}, so {{2x - 5 >= y}}, which is {{y <= 2x - 5}}.",
        },
        {
          id: "linear-graphs-p2-q14",
          kind: "short",
          difficulty: "challenge",
          guideRef: "inequality-regions",
          question: "Find the area (in square units) of the triangular region defined by {{x >= 0}}, {{y >= 0}}, and {{3x + 2y <= 12}}.",
          answer: { type: "number", value: 12, display: "12" },
          hints: [
            "Use cover-up on {{3x + 2y = 12}} to find its intercepts {{(4, 0)}} and {{(0, 6)}}.",
            "Area of a right-angled triangle {{= 1/2 * \"base\" * \"height\"}}.",
          ],
          traps: [
            { spec: { type: "number", value: 24 }, feedback: "Don't forget to divide by 2 for the area of a triangle!" },
          ],
          solution: [
            "Intercepts of {{3x + 2y = 12}} are {{(4, 0)}} and {{(0, 6)}}.",
            "Right-angled triangle has base {{4}} and height {{6}}, so Area {{= 1/2 * 4 * 6 = 12}} square units.",
          ],
        },
        {
          id: "linear-graphs-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "inequality-regions",
          marks: 3,
          question: "A triangular region {{R}} has corners {{(0, 0)}}, {{(0, 4)}}, and {{(4, 0)}}. The two axis edges are solid and the slanted edge is dashed. Write the three inequalities that define {{R}} and explain why {{(2, 2)}} is NOT in {{R}}.",
          hints: [
            "The solid axis edges are {{x >= 0}} and {{y >= 0}}.",
            "Find the equation of the slanted edge through {{(0, 4)}} and {{(4, 0)}}, then pick the strict sign.",
            "Substitute {{(2, 2)}} into the slanted inequality.",
          ],
          modelAnswer:
            "The three inequalities are x >= 0, y >= 0, and x + y < 4 (equivalently y < −x + 4). At the point (2, 2), we get 2 + 2 = 4, which lies directly on the boundary line. Because the slanted inequality is strict (<) and drawn dashed, boundary points are excluded, so (2, 2) is not inside R.",
          markScheme: [
            { point: "State x ≥ 0 and y ≥ 0 for the solid axis boundaries", keywords: ["x >= 0", "x ≥ 0", "y >= 0", "y ≥ 0"] },
            { point: "State x + y < 4 (or y < −x + 4) for the dashed slanted boundary", keywords: ["x + y < 4", "y < -x + 4", "y < 4 - x"] },
            { point: "Show 2 + 2 = 4 lies on the strict/dashed boundary so it is excluded", keywords: ["excluded", "strict", "2 + 2 = 4", "on the boundary"] },
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      id: "linear-graphs-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "equation-of-a-line",
      strategy: "Set up an equation from the gradient formula",
      question: "A straight line with gradient {{2}} passes through the points {{(a, 3)}} and {{(2a, 11)}}. Find the value of {{a}}.",
      answer: { type: "number", value: 4, display: "4" },
      hints: [
        "Plug {{(a, 3)}} and {{(2a, 11)}} directly into {{m = (y_2 - y_1) / (x_2 - x_1)}}.",
        "Simplify the denominator {{2a - a}} to {{a}}.",
        "Solve {{8 / a = 2}}.",
      ],
      solution: [
        "{{m = (11 - 3) / (2a - a) = 8 / a}}.",
        "Since {{m = 2}}, {{8 / a = 2}} → {{a = 4}}.",
        "Check: from {{(4, 3)}} to {{(8, 11)}}, rise is {{8}} and run is {{4}}, giving {{m = 2}} ✓.",
      ],
    },
    {
      id: "linear-graphs-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "equation-of-a-line",
      strategy: "Keep implicit form invariant for parallel lines",
      question: "Line {{P}} has equation {{2x + 3y = 15}}. Line {{Q}} is parallel to {{P}} and passes through {{(6, 2)}}. Find the {{x}}-coordinate where Line {{Q}} crosses the {{x}}-axis.",
      answer: { type: "number", value: 9, display: "9" },
      hints: [
        "Two lines parallel to {{2x + 3y = 15}} can both be written as {{2x + 3y = k}} for some constant {{k}}!",
        "Substitute {{(6, 2)}} into {{2x + 3y = k}} to find {{k}} instantly.",
        "Now set {{y = 0}} in Line {{Q}}'s equation to find its {{x}}-intercept.",
      ],
      solution: [
        "Parallel to {{2x + 3y = 15}} means Line {{Q}} has the form {{2x + 3y = k}}.",
        "Substitute {{(6, 2)}}: {{k = 2(6) + 3(2) = 12 + 6 = 18}}, so Line {{Q}} is {{2x + 3y = 18}}.",
        "Set {{y = 0}}: {{2x = 18}} → {{x = 9}}.",
      ],
      solutions: [
        {
          label: "Using y = mx + c",
          steps: [
            "Rewrite {{P}} as {{y = -2/3 x + 5}}, so {{m = -2/3}}.",
            "Line {{Q}} through {{(6, 2)}}: {{2 = -2/3 (6) + c}} → {{2 = -4 + c}} → {{c = 6}}, giving {{y = -2/3 x + 6}}.",
            "Set {{y = 0}}: {{2/3 x = 6}} → {{x = 9}}.",
          ],
        },
      ],
    },
    {
      id: "linear-graphs-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "explicit-implicit-graphs",
      strategy: "Find all three vertices before computing area",
      question: "Calculate the area (in square units) of the triangle enclosed by the lines {{y = 2x}}, {{y = -x + 9}}, and the {{x}}-axis ({{y = 0}}).",
      answer: { type: "number", value: 27, display: "27" },
      hints: [
        "Find where each slanted line crosses the {{x}}-axis ({{y = 0}}) to get the base of the triangle.",
        "Find the top vertex by solving {{2x = -x + 9}} simultaneously.",
        "The {{y}}-coordinate of that top vertex is the perpendicular height of the triangle!",
      ],
      solution: [
        "{{y = 2x}} crosses the {{x}}-axis at {{(0, 0)}}; {{y = -x + 9}} crosses at {{(9, 0)}} → base {{= 9}}.",
        "Intersection of {{y = 2x}} and {{y = -x + 9}}: {{2x = -x + 9}} → {{3x = 9}} → {{x = 3}}, {{y = 6}} → height {{= 6}}.",
        "Area {{= 1/2 * 9 * 6 = 27}} square units.",
      ],
    },
    {
      id: "linear-graphs-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "gradients-intercepts-context",
      strategy: "Model both rates as linear functions and intersect",
      question: "Tank A starts with {{140}} litres and fills at {{6}} litres/min. At the exact same moment, Tank B starts with {{320}} litres and drains at {{9}} litres/min. After how many minutes do both tanks hold the exact same volume?",
      answer: { type: "number", value: 12, display: "12 minutes" },
      hints: [
        "Write linear models: {{V_A = 140 + 6t}} and {{V_B = 320 - 9t}}.",
        "Notice the gap between them starts at {{320 - 140 = 180}} litres and shrinks by {{6 + 9 = 15}} litres every minute!",
        "Solve {{140 + 6t = 320 - 9t}}.",
      ],
      solution: [
        "Set {{140 + 6t = 320 - 9t}}.",
        "Add {{9t}} and subtract {{140}}: {{15t = 180}} → {{t = 12}} minutes.",
        "Check: Tank A holds {{140 + 72 = 212}} L and Tank B holds {{320 - 108 = 212}} L ✓.",
      ],
    },
    {
      id: "linear-graphs-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "inequality-regions",
      diagram: SVG_SOLID_TRIANGLE,
      strategy: "Count lattice points systematically column by column",
      question: "The shaded triangle {{R}} is defined by {{x >= 1}}, {{y >= 1}}, and {{x + y <= 5}}, with all three boundary lines solid. How many integer coordinate points {{(x, y)}} lie inside or on the boundary of {{R}}?",
      answer: { type: "number", value: 10, display: "10" },
      hints: [
        "Count systematically for each integer value of {{x = 1, 2, 3, 4}}.",
        "Since all edges are solid, include points where {{x + y = 5}} as well as {{x = 1}} and {{y = 1}}.",
        "Notice the counts per column form a triangular number: {{4 + 3 + 2 + 1}}.",
      ],
      solution: [
        "For {{x = 1}}: {{y in {1, 2, 3, 4}}} → {{4}} points.",
        "For {{x = 2}}: {{y in {1, 2, 3}}} → {{3}} points.",
        "For {{x = 3}}: {{y in {1, 2}}} → {{2}} points.",
        "For {{x = 4}}: {{y in {1}}} → {{1}} point. Total {{= 4 + 3 + 2 + 1 = 10}}.",
      ],
    },
    {
      id: "linear-graphs-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "inequality-regions",
      strategy: "Test the vertices of a feasible inequality region",
      question: "A feasible region is defined by {{x >= 0}}, {{y >= 0}}, {{y <= 6}}, and {{2x + y <= 10}}. Find the **maximum** possible value of {{3x + 2y}} for a point {{(x, y)}} in this region.",
      answer: { type: "number", value: 18, display: "18" },
      hints: [
        "The maximum of a linear expression always occurs at one of the corner vertices of the region.",
        "Find all four corners: {{(0, 0)}}, {{(5, 0)}}, {{(0, 6)}}, and the intersection of {{y = 6}} with {{2x + y = 10}}.",
        "Evaluate {{3x + 2y}} at every corner and pick the largest!",
      ],
      solution: [
        "Find the corners: {{(0, 0)}}, {{(5, 0)}}, {{(0, 6)}}, and where {{y = 6}} meets {{2x + y = 10}}: {{2x + 6 = 10}} → {{x = 2}}, giving {{(2, 6)}}.",
        "Evaluate {{3x + 2y}}: at {{(0, 0)}} → {{0}}; at {{(5, 0)}} → {{15}}; at {{(0, 6)}} → {{12}}; at {{(2, 6)}} → {{3(2) + 2(6) = 18}}.",
        "Maximum value is {{18}} (achieved at {{(2, 6)}}).",
      ],
    },
    {
      id: "linear-graphs-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "equation-of-a-line",
      marks: 4,
      strategy: "Use the two known points to lock in the whole line first",
      question: "The three points {{P(-1, 5)}}, {{Q(3, k)}}, and {{R(7, -11)}} all lie on the same straight line. Find the equation of the line and the value of {{k}}, showing clear algebraic working.",
      hints: [
        "Use the two fully known points {{P(-1, 5)}} and {{R(7, -11)}} to compute the gradient {{m}}.",
        "Substitute {{P(-1, 5)}} into {{y = mx + c}} to find {{c}}.",
        "Finally plug {{x = 3}} into your equation to find {{k}} (or spot that {{Q}} is the exact midpoint of {{PR}}!).",
      ],
      modelAnswer:
        "Using P(−1, 5) and R(7, −11), the gradient is m = (−11 − 5) / (7 − (−1)) = −16/8 = −2. Substituting P(−1, 5) into y = −2x + c gives 5 = 2 + c, so c = 3. The equation of the line is y = −2x + 3. Substituting x = 3 gives y = −2(3) + 3 = −3, so k = −3.",
      markScheme: [
        { point: "Compute gradient m = −16/8 = −2 from P and R", keywords: ["-2", "-16/8", "gradient is -2"] },
        { point: "Find y-intercept c = 3", keywords: ["c = 3", "intercept is 3", "+ 3"] },
        { point: "State the line equation y = −2x + 3", keywords: ["y = -2x + 3", "y=-2x+3", "-2x + 3"] },
        { point: "Substitute x = 3 (or use midpoint) to find k = −3", keywords: ["k = -3", "-3"] },
      ],
    },
    {
      id: "linear-graphs-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "gradients-intercepts-context",
      marks: 3,
      strategy: "Translate a word problem into intersecting distance–time lines",
      question: "Two runners compete along a straight {{10}} km course. Runner A starts at {{0}} km and runs at a steady {{12}} km/h. Runner B starts {{2}} km ahead and runs at a steady {{8}} km/h. Write distance–time equations for both runners, find when Runner A catches Runner B, and state how far from the start they meet.",
      hints: [
        "Use {{d = mt + c}} where {{c}} is starting distance and {{m}} is speed.",
        "Set the two distances equal to solve for time {{t}} in hours.",
        "Substitute {{t}} back into either equation to find the meeting distance {{d}}.",
      ],
      modelAnswer:
        "Runner A: d = 12t. Runner B: d = 8t + 2. Setting them equal: 12t = 8t + 2 gives 4t = 2, so t = 0.5 hours (30 minutes). At t = 0.5 hours, the distance from the start is d = 12(0.5) = 6 km (check Runner B: 8(0.5) + 2 = 6 km).",
      markScheme: [
        { point: "Write both equations d = 12t and d = 8t + 2", keywords: ["12t", "8t + 2", "8t+2"] },
        { point: "Solve intersection to get t = 0.5 hours (30 minutes)", keywords: ["0.5", "30 min", "half an hour", "1/2"] },
        { point: "Calculate meeting distance d = 6 km", keywords: ["6 km", "6km"] },
      ],
    },
  ],
};
