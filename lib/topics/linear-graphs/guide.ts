import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "linear-graphs",
  title: "Linear Graphs & Inequality Regions",
  strand: "Algebra",
  icon: "📈",
  summary: "Plot explicit and implicit straight lines, master y = mx + c, interpret rates of change, and map inequality regions.",
  intro:
    "A straight-line equation is more than a rule for filling in a table of numbers — it is a picture of a constant rate of change. Whether you are comparing mobile phone tariffs, reading a distance–time graph, or carving out a safe operating region with inequalities, every linear graph comes down to two ideas: where the line starts and how steeply it climbs or falls.",
  guide: [
    {
      id: "explicit-implicit-graphs",
      heading: "Plotting Explicit & Implicit Linear Functions",
      discovery: {
        problem:
          "You need to draw the straight line {{2x + 3y = 12}} on a grid, without rearranging it into {{y = mx + c}} first. What are the two easiest coordinate pairs on this line to find in your head?",
        idea:
          "Put {{x = 0}} to cover up the {{2x}} term: {{3y = 12}} gives {{y = 4}}, so {{(0, 4)}} is on the line. Put {{y = 0}} to cover up the {{3y}} term: {{2x = 12}} gives {{x = 6}}, so {{(6, 0)}} is on the line. Join those two intercepts — and pick one middle point like {{(3, 2)}} to verify your ruler did not slip!",
      },
      body:
        "Linear equations appear in two main disguises, and knowing how to plot both saves minutes in an exam.\n\n**1. Explicit form ({{y = mx + c}})** has {{y}} isolated on the left. Pick at least three easy {{x}}-values (such as {{x = -1, 0, 2}}), substitute each into the rule to get {{y}}, plot the coordinates, and draw a single straight line extending across the whole grid. Why three points when two determine a line? The third point is your built-in error detector — if the three dots do not line up on one ruler edge, you immediately catch an arithmetic slip!\n\n**2. Implicit form ({{ax + by = c}})** keeps {{x}} and {{y}} on the same side. You *can* rearrange it to make {{y}} the subject, or use the **cover-up intercept method**:\n- Set {{x = 0}} to find the **{{y}}-intercept** {{(0, c/b)}}.\n- Set {{y = 0}} to find the **{{x}}-intercept** {{(c/a, 0)}}.\n- Check one extra point in between.\n\n**3. Horizontal and vertical lines** are special cases where one variable is missing:\n- **{{y = k}}** means *every* point has {{y}}-coordinate {{k}} (e.g. {{(-2, 3), (0, 3), (4, 3)}}), forming a **horizontal** line parallel to the {{x}}-axis.\n- **{{x = k}}** means *every* point has {{x}}-coordinate {{k}} (e.g. {{(-2, -1), (-2, 0), (-2, 4)}}), forming a **vertical** line parallel to the {{y}}-axis.",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coordinate grid plotting 2x + 3y = 12 via cover-up intercepts together with y = 2 and x = -2">' +
        '<rect x="0" y="0" width="560" height="250" rx="10" fill="var(--surface)"/>' +
        '<g stroke="var(--line)" stroke-width="1">' +
        '<line x1="45" y1="35" x2="45" y2="215"/><line x1="70" y1="35" x2="70" y2="215"/><line x1="95" y1="35" x2="95" y2="215"/>' +
        '<line x1="120" y1="35" x2="120" y2="215"/><line x1="145" y1="35" x2="145" y2="215"/><line x1="170" y1="35" x2="170" y2="215"/>' +
        '<line x1="195" y1="35" x2="195" y2="215"/><line x1="220" y1="35" x2="220" y2="215"/><line x1="245" y1="35" x2="245" y2="215"/>' +
        '<line x1="270" y1="35" x2="270" y2="215"/><line x1="295" y1="35" x2="295" y2="215"/>' +
        '<line x1="45" y1="35" x2="295" y2="35"/><line x1="45" y1="65" x2="295" y2="65"/><line x1="45" y1="95" x2="295" y2="95"/>' +
        '<line x1="45" y1="125" x2="295" y2="125"/><line x1="45" y1="155" x2="295" y2="155"/><line x1="45" y1="185" x2="295" y2="185"/>' +
        '<line x1="45" y1="215" x2="295" y2="215"/>' +
        '</g>' +
        '<line x1="40" y1="185" x2="305" y2="185" stroke="var(--ink)" stroke-width="1.8"/>' +
        '<line x1="120" y1="220" x2="120" y2="28" stroke="var(--ink)" stroke-width="1.8"/>' +
        '<text x="307" y="189" font-size="12" font-weight="700" fill="var(--ink)">x</text>' +
        '<text x="116" y="22" font-size="12" font-weight="700" fill="var(--ink)">y</text>' +
        '<text x="70" y="200" font-size="10" text-anchor="middle" fill="var(--ink-2)">−2</text>' +
        '<text x="195" y="200" font-size="10" text-anchor="middle" fill="var(--ink-2)">3</text>' +
        '<text x="270" y="200" font-size="10" text-anchor="middle" fill="var(--ink-2)">6</text>' +
        '<text x="111" y="129" font-size="10" text-anchor="end" fill="var(--ink-2)">2</text>' +
        '<text x="111" y="69" font-size="10" text-anchor="end" fill="var(--ink-2)">4</text>' +
        '<line x1="70" y1="35" x2="70" y2="215" stroke="var(--bad)" stroke-width="2.4" stroke-dasharray="6 4"/>' +
        '<line x1="45" y1="125" x2="295" y2="125" stroke="var(--good)" stroke-width="2.4" stroke-dasharray="6 4"/>' +
        '<line x1="82.5" y1="35" x2="295" y2="205" stroke="var(--brand)" stroke-width="3"/>' +
        '<circle cx="120" cy="65" r="5" fill="var(--brand)" stroke="var(--surface)" stroke-width="1.5"/>' +
        '<circle cx="270" cy="185" r="5" fill="var(--brand)" stroke="var(--surface)" stroke-width="1.5"/>' +
        '<circle cx="195" cy="125" r="4.5" fill="var(--good)" stroke="var(--surface)" stroke-width="1.5"/>' +
        '<text x="128" y="60" font-size="11" font-weight="700" fill="var(--brand)">(0, 4)</text>' +
        '<text x="270" y="175" font-size="11" font-weight="700" text-anchor="middle" fill="var(--brand)">(6, 0)</text>' +
        '<text x="204" y="118" font-size="10.5" font-weight="700" fill="var(--good)">(3, 2) check</text>' +
        '<text x="260" y="118" font-size="11" font-weight="700" fill="var(--good)">y = 2</text>' +
        '<text x="54" y="52" font-size="11" font-weight="700" fill="var(--bad)">x = −2</text>' +
        '<rect x="330" y="24" width="212" height="202" rx="10" fill="var(--surface-2)" stroke="var(--line)"/>' +
        '<text x="344" y="48" font-size="13" font-weight="800" fill="var(--ink)">Cover-Up: 2x + 3y = 12</text>' +
        '<rect x="344" y="60" width="184" height="44" rx="7" fill="var(--brand-soft)"/>' +
        '<text x="354" y="78" font-size="11.5" font-weight="700" fill="var(--brand)">1. Set x = 0 (cover 2x)</text>' +
        '<text x="354" y="95" font-size="11.5" fill="var(--ink)">3y = 12 → y = 4  ⇒  (0, 4)</text>' +
        '<rect x="344" y="112" width="184" height="44" rx="7" fill="var(--brand-soft)"/>' +
        '<text x="354" y="130" font-size="11.5" font-weight="700" fill="var(--brand)">2. Set y = 0 (cover 3y)</text>' +
        '<text x="354" y="147" font-size="11.5" fill="var(--ink)">2x = 12 → x = 6  ⇒  (6, 0)</text>' +
        '<text x="344" y="178" font-size="11.5" font-weight="700" fill="var(--good)">y = k → Horizontal line</text>' +
        '<text x="344" y="198" font-size="11.5" font-weight="700" fill="var(--bad)">x = k → Vertical line</text>' +
        '<text x="344" y="216" font-size="10.5" fill="var(--ink-2)">Always check a 3rd point!</text>' +
        '</svg>',
      diagramCaption: "Implicit equations plot fast via intercepts (0, 4) and (6, 0); y = 2 is horizontal and x = −2 is vertical.",
      whyItWorks:
        "A graph is the set of ALL points (x, y) that make an equation true. Because a linear equation has power 1 on both x and y, every step of +1 in x changes y by a constant amount — so every valid point sits on one unbroken straight line. Setting x = 0 pinpoints where that line crosses the y-axis, and setting y = 0 pinpoints where it crosses the x-axis.",
      keyPoints: [
        "An **explicit** linear equation has {{y}} alone on one side ({{y = mx + c}}); an **implicit** equation keeps both variables together ({{ax + by = c}}).",
        "Plot at least **three** points for any straight line: two draw the line and the third checks your arithmetic.",
        "Use the **cover-up method** for {{ax + by = c}}: substitute {{x = 0}} for the {{y}}-intercept and {{y = 0}} for the {{x}}-intercept.",
        "{{y = k}} is always a **horizontal** line; {{x = k}} is always a **vertical** line — think 'which coordinate stays fixed?'",
        "To test whether a point {{(a, b)}} lies on a line, substitute {{x = a}} and {{y = b}} and check if both sides are equal.",
      ],
      strategies: [
        "Cover-up intercepts first: faster and less error-prone than rearranging when {{a}} and {{b}} both divide {{c}}.",
        "Always check a third point — one tiny sign error turns a line into a bent V-shape.",
        "For horizontal/vertical lines, list two concrete points first (e.g. for {{x = -2}}: {{(-2, 0)}} and {{(-2, 3)}}) so you never mix up the axes.",
      ],
      thinkDeeper:
        "If you try the cover-up method on {{3x - 2y = 0}}, both intercepts give the same point {{(0, 0)}}! Why does that happen, and what should you do to find a second clean integer point on {{3x - 2y = 0}}?",
      workedExamples: [
        {
          title: "Plotting an explicit linear function from a table",
          problem: "Complete a table of values for {{y = 2x - 3}} for {{x = -1, 0, 2, 4}} and test whether {{(5, 7)}} lies on the line.",
          steps: [
            "Substitute each {{x}}-value carefully, paying attention to negative multiplication:",
            "When {{x = -1}}: {{y = 2(-1) - 3 = -2 - 3 = -5}} → {{(-1, -5)}}.",
            "When {{x = 0}}: {{y = 2(0) - 3 = -3}} → {{(0, -3)}}.",
            "When {{x = 2}}: {{y = 2(2) - 3 = 4 - 3 = 1}} → {{(2, 1)}}.",
            "When {{x = 4}}: {{y = 2(4) - 3 = 8 - 3 = 5}} → {{(4, 5)}}.",
            "Test {{(5, 7)}}: {{2(5) - 3 = 10 - 3 = 7}}, which equals the {{y}}-coordinate {{7}}, so yes — {{(5, 7)}} lies on the line.",
          ],
          answer: "{{(-1, -5), (0, -3), (2, 1), (4, 5)}}; yes, {{(5, 7)}} is on the line.",
          yourTurn: {
            question: "Find the {{y}}-coordinate when {{x = -3}} on the line {{y = 4x + 5}}.",
            answer: { type: "number", value: -7, display: "−7" },
            solution: "Substitute {{x = -3}}: {{y = 4(-3) + 5 = -12 + 5 = -7}}.",
          },
        },
        {
          title: "Using the cover-up method on an implicit equation",
          problem: "Find the {{x}}-intercept and {{y}}-intercept of the line {{5x - 2y = 20}}.",
          steps: [
            "For the **{{y}}-intercept**, set {{x = 0}}: {{-2y = 20}}, so {{y = 20 / (-2) = -10}}. Point: {{(0, -10)}}.",
            "For the **{{x}}-intercept**, set {{y = 0}}: {{5x = 20}}, so {{x = 20 / 5 = 4}}. Point: {{(4, 0)}}.",
            "Check a third point {{x = 2}}: {{5(2) - 2y = 20}} → {{10 - 2y = 20}} → {{-2y = 10}} → {{y = -5}}. Indeed {{(2, -5)}} sits halfway between {{(0, -10)}} and {{(4, 0)}}.",
          ],
          answer: "{{x}}-intercept {{(4, 0)}} and {{y}}-intercept {{(0, -10)}}.",
          yourTurn: {
            question: "Find the coordinates of the {{x}}-intercept of {{3x + 4y = 24}}. Write as {{(x, y)}}.",
            answer: { type: "list", values: [8, 0], ordered: true, display: "(8, 0)" },
            solution: "Set {{y = 0}}: {{3x = 24}}, so {{x = 8}}. The {{x}}-intercept is {{(8, 0)}}.",
          },
        },
      ],
    },
    {
      id: "equation-of-a-line",
      heading: "Finding the Equation of a Straight Line (y = mx + c)",
      discovery: {
        problem:
          "A straight line passes through {{A(1, 1)}} and {{B(4, 7)}}. Every time {{x}} increases by {{1}}, how much does {{y}} increase? Now step backwards from {{(1, 1)}} to {{x = 0}} to find where the line crosses the {{y}}-axis.",
        idea:
          "From {{x = 1}} to {{x = 4}} is {{3}} steps right, and {{y}} climbs from {{1}} to {{7}} ({{6}} steps up). So each {{+1}} step in {{x}} gives {{6 / 3 = +2}} in {{y}} (gradient {{m = 2}}). Stepping {{1}} unit left from {{(1, 1)}} drops {{y}} by {{2}}, landing at {{(0, -1)}} — so {{c = -1}} and the equation is {{y = 2x - 1}}!",
      },
      body:
        "Every non-vertical straight line can be written in **gradient–intercept form**:\n\n**{{y = mx + c}}**\n\n- **{{m}} is the gradient (slope)**: the change in {{y}} for every **{{+1}}** unit step in {{x}}.\n  **{{m = (y_2 - y_1) / (x_2 - x_1) = \"rise\" / \"run\"}}**\n- **{{c}} is the {{y}}-intercept**: the value of {{y}} where the line crosses the {{y}}-axis, at {{(0, c)}}.\n\n**Reading the sign of {{m}} at a glance (always read left to right):**\n- Sloping **uphill** → **positive** gradient ({{m > 0}}).\n- Sloping **downhill** → **negative** gradient ({{m < 0}}).\n- Perfectly **flat** (horizontal) → **zero** gradient ({{m = 0}}, giving {{y = c}}).\n\n**Finding {{y = mx + c}} from two points {{(x_1, y_1)}} and {{(x_2, y_2)}}:**\n1. Compute {{m = (y_2 - y_1) / (x_2 - x_1)}} (keep the points in the **same order** top and bottom!).\n2. Substitute {{m}} and either point into {{y = mx + c}} to solve for {{c}}.\n3. Check by substituting the *other* point into your final equation.\n\n**Parallel lines** travel in the exact same direction, so they **always have the exact same gradient {{m}}** — just a different {{y}}-intercept {{c}}. Watch out for equations not yet in {{y = mx + c}} form: {{2y = 6x + 5}} rearranges to {{y = 3x + 2.5}}, so its gradient is {{3}}, NOT {{6}}!",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gradient triangle for y = 2x - 1 between (1, 1) and (4, 7), alongside parallel line y = 2x + 3">' +
        '<rect x="0" y="0" width="560" height="250" rx="10" fill="var(--surface)"/>' +
        '<g stroke="var(--line)" stroke-width="1">' +
        '<line x1="35" y1="35" x2="35" y2="235"/><line x1="80" y1="35" x2="80" y2="235"/><line x1="125" y1="35" x2="125" y2="235"/>' +
        '<line x1="170" y1="35" x2="170" y2="235"/><line x1="215" y1="35" x2="215" y2="235"/><line x1="260" y1="35" x2="260" y2="235"/>' +
        '<line x1="305" y1="35" x2="305" y2="235"/>' +
        '<line x1="35" y1="35" x2="305" y2="35"/><line x1="35" y1="75" x2="305" y2="75"/><line x1="35" y1="115" x2="305" y2="115"/>' +
        '<line x1="35" y1="155" x2="305" y2="155"/><line x1="35" y1="195" x2="305" y2="195"/><line x1="35" y1="215" x2="305" y2="215"/>' +
        '</g>' +
        '<line x1="30" y1="215" x2="315" y2="215" stroke="var(--ink)" stroke-width="1.8"/>' +
        '<line x1="80" y1="240" x2="80" y2="26" stroke="var(--ink)" stroke-width="1.8"/>' +
        '<text x="318" y="219" font-size="12" font-weight="700" fill="var(--ink)">x</text>' +
        '<text x="76" y="21" font-size="12" font-weight="700" fill="var(--ink)">y</text>' +
        '<text x="125" y="230" font-size="10" text-anchor="middle" fill="var(--ink-2)">1</text>' +
        '<text x="260" y="230" font-size="10" text-anchor="middle" fill="var(--ink-2)">4</text>' +
        '<text x="72" y="159" font-size="10" text-anchor="end" fill="var(--ink-2)">3</text>' +
        '<text x="72" y="79" font-size="10" text-anchor="end" fill="var(--ink-2)">7</text>' +
        '<polygon points="125,195 260,195 260,75" fill="var(--brand-soft)" opacity="0.65"/>' +
        '<line x1="125" y1="195" x2="260" y2="195" stroke="var(--good)" stroke-width="2.2" stroke-dasharray="5 3"/>' +
        '<line x1="260" y1="195" x2="260" y2="75" stroke="var(--bad)" stroke-width="2.2" stroke-dasharray="5 3"/>' +
        '<line x1="35" y1="195" x2="215" y2="35" stroke="var(--ink-2)" stroke-width="2.4" stroke-dasharray="6 4"/>' +
        '<line x1="80" y1="235" x2="305" y2="35" stroke="var(--brand)" stroke-width="3"/>' +
        '<circle cx="125" cy="195" r="5" fill="var(--brand)" stroke="var(--surface)" stroke-width="1.5"/>' +
        '<circle cx="260" cy="75" r="5" fill="var(--brand)" stroke="var(--surface)" stroke-width="1.5"/>' +
        '<circle cx="80" cy="235" r="4.5" fill="var(--bad)" stroke="var(--surface)" stroke-width="1.5"/>' +
        '<circle cx="80" cy="155" r="4.5" fill="var(--ink-2)" stroke="var(--surface)" stroke-width="1.5"/>' +
        '<text x="128" y="185" font-size="10.5" font-weight="700" fill="var(--ink)">(1, 1)</text>' +
        '<text x="266" y="72" font-size="10.5" font-weight="700" fill="var(--ink)">(4, 7)</text>' +
        '<text x="192" y="210" font-size="11" font-weight="700" text-anchor="middle" fill="var(--good)">run = 4 − 1 = 3</text>' +
        '<text x="265" y="140" font-size="11" font-weight="700" fill="var(--bad)">rise = 6</text>' +
        '<text x="108" y="88" font-size="11" font-weight="700" fill="var(--ink-2)">y = 2x + 3 (parallel)</text>' +
        '<rect x="336" y="22" width="208" height="206" rx="10" fill="var(--surface-2)" stroke="var(--line)"/>' +
        '<text x="350" y="46" font-size="13" font-weight="800" fill="var(--ink)">Gradient &amp; Intercept</text>' +
        '<rect x="350" y="58" width="180" height="48" rx="7" fill="var(--brand-soft)"/>' +
        '<text x="360" y="77" font-size="11.5" font-weight="700" fill="var(--brand)">m = (y₂ − y₁) / (x₂ − x₁)</text>' +
        '<text x="360" y="96" font-size="11.5" fill="var(--ink)">m = (7 − 1) / (4 − 1) = 6/3 = 2</text>' +
        '<text x="350" y="126" font-size="11.5" font-weight="700" fill="var(--ink)">Find c using (1, 1):</text>' +
        '<text x="350" y="144" font-size="11.5" fill="var(--ink)">1 = 2(1) + c  ⇒  c = −1</text>' +
        '<text x="350" y="168" font-size="12.5" font-weight="800" fill="var(--brand)">Equation: y = 2x − 1</text>' +
        '<line x1="350" y1="180" x2="528" y2="180" stroke="var(--line)"/>' +
        '<text x="350" y="198" font-size="11" font-weight="700" fill="var(--ink)">Parallel lines: same m</text>' +
        '<text x="350" y="215" font-size="10.5" fill="var(--ink-2)">y = 2x − 1  ∥  y = 2x + 3</text>' +
        '</svg>',
      diagramCaption: "Any right-angled triangle on the line gives the same ratio rise/run = m; parallel lines share the same gradient.",
      whyItWorks:
        "All right-angled gradient triangles drawn on the same straight line are mathematically similar triangles — their angles match, so the ratio of vertical side (rise) to horizontal side (run) is identical no matter which two points on the line you choose.",
      keyPoints: [
        "In **{{y = mx + c}}**, {{m}} is the **gradient** and {{c}} is the **{{y}}-intercept** {{(0, c)}}.",
        "Gradient formula: **{{m = (y_2 - y_1) / (x_2 - x_1)}}** — always keep **{{y}} on top** and subtract in the same order.",
        "Rearrange any implicit equation to **make {{y}} the subject** before reading off {{m}} and {{c}}.",
        "**Parallel lines** have **identical gradients** ({{m_1 = m_2}}).",
        "When reading gradient from a graph, always read **axis scales** carefully — 1 grid square does not always equal 1 unit!",
      ],
      strategies: [
        "Pick lattice intersections: when reading a gradient off a drawn graph, choose two points where the line crosses grid corners cleanly.",
        "Always check the sign visually: downhill from left to right MUST have a negative {{m}}.",
        "Back-check {{c}} using the second point: if both given points satisfy your final {{y = mx + c}}, your equation is guaranteed right.",
      ],
      thinkDeeper:
        "Why does a vertical line like {{x = 5}} have NO finite gradient (its gradient is not defined) rather than a gradient of {{0}}? Try plugging {{(5, 1)}} and {{(5, 4)}} into {{m = (y_2 - y_1) / (x_2 - x_1)}} to see what happens.",
      workedExamples: [
        {
          title: "Equation of a line through two points with a negative gradient",
          problem: "Find the equation of the straight line passing through {{(-2, 11)}} and {{(4, -7)}}.",
          steps: [
            "Compute the gradient: {{m = (-7 - 11) / (4 - (-2)) = -18 / 6 = -3}}.",
            "Write {{y = -3x + c}} and substitute {{(4, -7)}}: {{-7 = -3(4) + c}} → {{-7 = -12 + c}} → {{c = 5}}.",
            "Check with the other point {{(-2, 11)}}: {{-3(-2) + 5 = 6 + 5 = 11}} ✓.",
          ],
          answer: "{{y = -3x + 5}}",
          yourTurn: {
            question: "Find the gradient of the straight line passing through {{(1, 9)}} and {{(5, 1)}}.",
            answer: { type: "number", value: -2, display: "−2" },
            solution: "{{m = (1 - 9) / (5 - 1) = -8 / 4 = -2}}.",
          },
        },
        {
          title: "Finding a parallel line from an implicit equation",
          problem: "Find the equation of the line parallel to {{3x + 2y = 10}} that passes through {{(4, 1)}}.",
          steps: [
            "Rearrange {{3x + 2y = 10}} into {{y = mx + c}}: {{2y = -3x + 10}}, so {{y = -3/2 x + 5}}.",
            "Parallel lines share the same gradient, so {{m = -3/2}}.",
            "Substitute {{(4, 1)}} into {{y = -3/2 x + c}}: {{1 = -3/2 (4) + c}} → {{1 = -6 + c}} → {{c = 7}}.",
          ],
          answer: "{{y = -3/2 x + 7}} (or {{y = -1.5x + 7}})",
          yourTurn: {
            question: "A line is parallel to {{y = 5x - 4}} and passes through {{(2, 13)}}. Find its {{y}}-intercept {{c}}.",
            answer: { type: "number", value: 3, display: "3" },
            solution: "Parallel means {{m = 5}}. Substitute {{(2, 13)}} into {{y = 5x + c}}: {{13 = 5(2) + c}} → {{13 = 10 + c}} → {{c = 3}}.",
          },
        },
      ],
    },
    {
      id: "gradients-intercepts-context",
      heading: "Gradients & Intercepts in Real-Life Contexts",
      discovery: {
        problem:
          "A taxi app charges according to the formula {{C = 1.5d + 4}}, where {{C}} is the fare in dollars and {{d}} is the distance in km. You sit in the cab for {{0}} km and step straight out — how much does the meter say? Now ride {{1}} extra km — how much does the meter jump?",
        idea:
          "At {{d = 0}}, {{C = 4}}: the {{y}}-intercept {{4}} is the **fixed standing charge (flag-fall)** of $4 before you even move. Each extra {{1}} km adds {{$1.50}}: the gradient {{1.5}} is the **rate of change** ($1.50 per km).",
      },
      body:
        "In real-world graphs, the axes carry **units** — and those units tell you immediately what the gradient and intercept mean!\n\n**1. Interpreting the {{y}}-intercept ({{c}}):**\nSet the horizontal variable to {{0}}. The {{y}}-intercept has the **exact same unit as the vertical axis** and represents the **initial / starting / fixed value**:\n- Taxi or electrician bill: fixed **call-out / standing charge**.\n- Water tank graph: **initial volume** of water at {{t = 0}}.\n- Distance–time graph: **starting distance** from home.\n\n**2. Interpreting the gradient ({{m}}):**\nBecause {{m = \"change in vertical\" / \"change in horizontal\"}}, its unit is always **(vertical unit) per (horizontal unit)**:\n- Cost ($) vs distance (km) → **cost per km** ($/km).\n- Distance (km) vs time (hours) → **speed** (km/h). A steeper line means faster; a horizontal flat section means **stationary (speed = 0)**; a negative gradient means **returning toward the start**.\n- Volume (litres) vs time (minutes) → **flow rate** (L/min). Negative gradient means **draining**.\n- Conversion graphs (e.g. SGD to GBP, km to miles): passing through {{(0, 0)}} means **direct proportion** ({{y = mx}}), and the gradient is the **exchange / conversion rate**.\n\n**3. Comparing two deals (break-even intersection):**\nWhen two tariffs are plotted on the same axes, the **intersection point** is where both options cost the exact same amount. Before that point, the lower starting line is cheaper; after that point, the shallower (smaller-gradient) line wins!",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Taxi fare graph C = 1.5d + 4 showing y-intercept as $4 fixed charge and gradient as $1.50 per km">' +
        '<rect x="0" y="0" width="560" height="250" rx="10" fill="var(--surface)"/>' +
        '<g stroke="var(--line)" stroke-width="1">' +
        '<line x1="70" y1="30" x2="70" y2="210"/><line x1="130" y1="30" x2="130" y2="210"/><line x1="190" y1="30" x2="190" y2="210"/>' +
        '<line x1="250" y1="30" x2="250" y2="210"/><line x1="310" y1="30" x2="310" y2="210"/>' +
        '<line x1="70" y1="30" x2="310" y2="30"/><line x1="70" y1="70" x2="310" y2="70"/><line x1="70" y1="110" x2="310" y2="110"/>' +
        '<line x1="70" y1="150" x2="310" y2="150"/><line x1="70" y1="190" x2="310" y2="190"/>' +
        '</g>' +
        '<line x1="70" y1="210" x2="322" y2="210" stroke="var(--ink)" stroke-width="1.8"/>' +
        '<line x1="70" y1="210" x2="70" y2="22" stroke="var(--ink)" stroke-width="1.8"/>' +
        '<text x="190" y="242" font-size="11.5" font-weight="700" text-anchor="middle" fill="var(--ink)">Distance d (km)</text>' +
        '<text x="20" y="122" font-size="11.5" font-weight="700" text-anchor="middle" transform="rotate(-90 20 122)" fill="var(--ink)">Fare C ($)</text>' +
        '<text x="70" y="225" font-size="10" text-anchor="middle" fill="var(--ink-2)">0</text>' +
        '<text x="130" y="225" font-size="10" text-anchor="middle" fill="var(--ink-2)">2</text>' +
        '<text x="190" y="225" font-size="10" text-anchor="middle" fill="var(--ink-2)">4</text>' +
        '<text x="250" y="225" font-size="10" text-anchor="middle" fill="var(--ink-2)">6</text>' +
        '<text x="310" y="225" font-size="10" text-anchor="middle" fill="var(--ink-2)">8</text>' +
        '<text x="62" y="174" font-size="10" text-anchor="end" fill="var(--ink-2)">4</text>' +
        '<text x="62" y="114" font-size="10" text-anchor="end" fill="var(--ink-2)">10</text>' +
        '<text x="62" y="54" font-size="10" text-anchor="end" fill="var(--ink-2)">16</text>' +
        '<polygon points="190,110 250,110 250,80" fill="var(--brand-soft)" opacity="0.7"/>' +
        '<line x1="190" y1="110" x2="250" y2="110" stroke="var(--good)" stroke-width="2" stroke-dasharray="4 3"/>' +
        '<line x1="250" y1="110" x2="250" y2="80" stroke="var(--bad)" stroke-width="2" stroke-dasharray="4 3"/>' +
        '<line x1="70" y1="170" x2="310" y2="50" stroke="var(--brand)" stroke-width="3"/>' +
        '<circle cx="70" cy="170" r="5.5" fill="var(--bad)" stroke="var(--surface)" stroke-width="1.5"/>' +
        '<circle cx="190" cy="110" r="4.5" fill="var(--brand)"/>' +
        '<circle cx="250" cy="80" r="4.5" fill="var(--brand)"/>' +
        '<text x="80" y="185" font-size="10.5" font-weight="700" fill="var(--bad)">y-intercept = $4</text>' +
        '<text x="80" y="198" font-size="10" fill="var(--ink-2)">(fixed flag-fall)</text>' +
        '<text x="220" y="124" font-size="10.5" font-weight="700" text-anchor="middle" fill="var(--good)">+2 km</text>' +
        '<text x="256" y="100" font-size="10.5" font-weight="700" fill="var(--bad)">+$3</text>' +
        '<text x="155" y="68" font-size="11.5" font-weight="800" fill="var(--brand)">C = 1.5d + 4</text>' +
        '<rect x="342" y="22" width="204" height="206" rx="10" fill="var(--surface-2)" stroke="var(--line)"/>' +
        '<text x="355" y="45" font-size="13" font-weight="800" fill="var(--ink)">Reading Real Graphs</text>' +
        '<rect x="354" y="56" width="180" height="44" rx="7" fill="var(--brand-soft)"/>' +
        '<text x="364" y="73" font-size="11" font-weight="700" fill="var(--brand)">Gradient m = Δy / Δx</text>' +
        '<text x="364" y="90" font-size="11" fill="var(--ink)">+$3 / 2 km = $1.50 per km</text>' +
        '<text x="355" y="120" font-size="11" font-weight="700" fill="var(--ink)">Distance–Time Graph:</text>' +
        '<text x="355" y="137" font-size="10.5" fill="var(--ink-2)">• Gradient = speed (m/s or km/h)</text>' +
        '<text x="355" y="153" font-size="10.5" fill="var(--ink-2)">• Flat line = stationary (0 speed)</text>' +
        '<text x="355" y="169" font-size="10.5" fill="var(--ink-2)">• Negative slope = heading back</text>' +
        '<line x1="354" y1="181" x2="532" y2="181" stroke="var(--line)"/>' +
        '<text x="355" y="198" font-size="10.5" font-weight="700" fill="var(--good)">Always state units in</text>' +
        '<text x="355" y="214" font-size="10.5" font-weight="700" fill="var(--good)">context explanations!</text>' +
        '</svg>',
      diagramCaption: "Units on the axes decode every graph: y-intercept carries the vertical unit ($), gradient carries vertical/horizontal ($/km).",
      whyItWorks:
        "Dimensional analysis (tracking units) guarantees you never misinterpret a graph: dividing a vertical change in metres by a horizontal change in seconds literally produces metres per second (m/s), which is speed!",
      keyPoints: [
        "The **{{y}}-intercept {{c}}** gives the **starting value or fixed charge** when the horizontal variable is {{0}}.",
        "The **gradient {{m}}** gives the **rate of change** — its unit is always **(vertical unit) per (horizontal unit)**.",
        "On a **distance–time graph**: gradient = **speed**, horizontal line = **stationary**, negative gradient = **returning**.",
        "A **conversion graph** through {{(0, 0)}} shows direct proportion ({{y = kx}}), where {{k}} is the conversion factor.",
        "In exam 'interpret in context' questions, **always mention both the number AND the real-world quantity with units** (e.g. 'the cost increases by £3.50 per hour', never just 'the gradient is 3.5').",
      ],
      strategies: [
        "Unit-check trick: write the fraction with units attached — e.g. {{(\"£18\") / (\"6 hours\") = \"£3 per hour\"}} — to instantly name what the gradient measures.",
        "Zero-plug trick: ask 'what is happening when {{x = 0}}?' to phrase the {{y}}-intercept naturally in context.",
      ],
      thinkDeeper:
        "A leaking water tank starts with {{240}} litres and empties at {{15}} litres per minute. What is the equation for volume {{V}} after {{t}} minutes, and what does the **{{t}}-intercept** (where the line hits the horizontal axis) represent in real life?",
      workedExamples: [
        {
          title: "Interpreting a draining tank graph",
          problem:
            "The volume {{V}} (litres) of water in a tank after {{t}} minutes is modelled by {{V = 180 - 12t}}. Interpret the {{y}}-intercept, the gradient, and find when the tank is empty.",
          steps: [
            "Write in {{V = mt + c}} form: {{m = -12}} and {{c = 180}}.",
            "**{{y}}-intercept ({{180}})**: at {{t = 0}}, the tank initially holds **{{180}} litres** of water.",
            "**Gradient ({{-12}})**: the volume decreases at a constant rate of **{{12}} litres per minute** (it is draining).",
            "**Tank empty** means {{V = 0}}: {{180 - 12t = 0}} → {{12t = 180}} → {{t = 15}} minutes.",
          ],
          answer: "Initial volume {{180}} L; drains at {{12}} L/min; empty after {{15}} minutes.",
          yourTurn: {
            question: "A plumber charges a call-out fee plus an hourly rate: {{C = 45h + 60}}, where {{C}} is in £ and {{h}} is hours worked. What is the total bill for a {{4}}-hour job (in £)?",
            answer: { type: "number", value: 240, display: "£240" },
            solution: "Substitute {{h = 4}}: {{C = 45(4) + 60 = 180 + 60 = £240}}.",
          },
        },
        {
          title: "Speed from a distance–time graph",
          problem:
            "A cyclist travels steadily from {{10}} km away from school to {{34}} km away from school between {{09:00}} and {{10:30}}. Calculate the gradient and interpret it in context.",
          steps: [
            "Vertical change (distance): {{34 - 10 = 24}} km.",
            "Horizontal change (time): {{10:30 - 09:00 = 1.5}} hours (be careful: {{1}} h {{30}} min is {{1.5}} h, NOT {{1.3}} h!).",
            "Gradient {{= 24 / 1.5 = 16}} km/h.",
          ],
          answer: "Gradient is {{16}}, meaning the cyclist travels at a constant speed of **{{16}} km/h**.",
          yourTurn: {
            question: "A train covers {{105}} km in {{1}} hour {{15}} minutes at constant speed. Find the gradient of its distance–time graph in km/h.",
            answer: { type: "number", value: 84, display: "84 km/h" },
            solution: "Convert {{1}} h {{15}} min to {{1.25}} hours. Speed (gradient) {{= 105 / 1.25 = 84}} km/h.",
          },
        },
      ],
    },
    {
      id: "inequality-regions",
      heading: "Plotting & Shading Inequality Regions",
      discovery: {
        problem:
          "The straight line {{y = x}} splits the coordinate plane into two halves. On one side, {{y > x}}; on the other side, {{y < x}}. Which side contains the point {{(2, 5)}}, and should the boundary line {{y = x}} be solid or dashed for {{y >= x}}?",
        idea:
          "Test {{(2, 5)}} in {{y >= x}}: is {{5 >= 2}}? YES! So the entire half-plane above the line {{y = x}} satisfies {{y >= x}}. Because {{>=}} includes 'or equal to', points *on* the line count — so draw a **solid** line.",
      },
      body:
        "A linear equation like {{x + y = 5}} defines a 1D **line**. Replacing {{=}} with {{<, <=, >, >=}} defines an entire 2D **half-plane (region)** on one side of that boundary line.\n\n**The 4-step method for plotting an inequality region:**\n1. **Draw the boundary line** by temporarily swapping the inequality sign for {{=}} (e.g. for {{2x + y < 6}}, plot {{2x + y = 6}}).\n2. **Choose solid vs dashed:**\n   - **Solid line (───)** for **{{<=}}** or **{{>=}}** (boundary points are *included*).\n   - **Dashed line (- - -)** for **{{<}}** or **{{>}}** (boundary points are *excluded*).\n3. **Test one point not on the line** — **{{(0, 0)}}** is the easiest whenever the line does not pass through the origin!\n   - Substitute its coordinates into the inequality.\n   - If the statement is **true**, that side is the **wanted** region; if **false**, the **other** side is wanted.\n4. **Read the shading instruction carefully!** In UK/IGCSE exams, read whether you are asked to shade the *wanted* region OR leave the wanted region **unshaded** (shading out the unwanted parts) and label it **{{R}}**.\n\n**Simultaneous inequality regions:**\nWhen two or three inequalities hold together (such as {{x >= 1}}, {{y < 4}}, and {{y >= x}}), the solution region **{{R}}** is the overlap where **ALL** inequalities are true at once. **Integer points** inside {{R}} are lattice points {{(x, y)}} with whole-number coordinates — remember that points on a **solid** boundary count, whereas points on a **dashed** boundary do **NOT** count!",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Shaded triangular inequality region R bounded by solid x = 1, dashed y = 4, and solid y = x">' +
        '<rect x="0" y="0" width="560" height="250" rx="10" fill="var(--surface)"/>' +
        '<g stroke="var(--line)" stroke-width="1">' +
        '<line x1="49" y1="45" x2="49" y2="237"/><line x1="85" y1="45" x2="85" y2="237"/><line x1="121" y1="45" x2="121" y2="237"/>' +
        '<line x1="157" y1="45" x2="157" y2="237"/><line x1="193" y1="45" x2="193" y2="237"/><line x1="229" y1="45" x2="229" y2="237"/>' +
        '<line x1="265" y1="45" x2="265" y2="237"/><line x1="301" y1="45" x2="301" y2="237"/>' +
        '<line x1="49" y1="45" x2="301" y2="45"/><line x1="49" y1="77" x2="301" y2="77"/><line x1="49" y1="109" x2="301" y2="109"/>' +
        '<line x1="49" y1="141" x2="301" y2="141"/><line x1="49" y1="173" x2="301" y2="173"/><line x1="49" y1="205" x2="301" y2="205"/>' +
        '<line x1="49" y1="237" x2="301" y2="237"/>' +
        '</g>' +
        '<polygon points="121,173 121,77 229,77" fill="var(--brand-soft)" opacity="0.85"/>' +
        '<line x1="45" y1="205" x2="308" y2="205" stroke="var(--ink)" stroke-width="1.8"/>' +
        '<line x1="85" y1="242" x2="85" y2="35" stroke="var(--ink)" stroke-width="1.8"/>' +
        '<text x="311" y="209" font-size="12" font-weight="700" fill="var(--ink)">x</text>' +
        '<text x="81" y="29" font-size="12" font-weight="700" fill="var(--ink)">y</text>' +
        '<text x="121" y="220" font-size="10" text-anchor="middle" fill="var(--ink-2)">1</text>' +
        '<text x="157" y="220" font-size="10" text-anchor="middle" fill="var(--ink-2)">2</text>' +
        '<text x="229" y="220" font-size="10" text-anchor="middle" fill="var(--ink-2)">4</text>' +
        '<text x="77" y="81" font-size="10" text-anchor="end" fill="var(--ink-2)">4</text>' +
        '<text x="77" y="177" font-size="10" text-anchor="end" fill="var(--ink-2)">1</text>' +
        '<line x1="121" y1="45" x2="121" y2="237" stroke="var(--brand)" stroke-width="2.8"/>' +
        '<line x1="49" y1="77" x2="301" y2="77" stroke="var(--bad)" stroke-width="2.6" stroke-dasharray="7 5"/>' +
        '<line x1="49" y1="237" x2="265" y2="45" stroke="var(--good)" stroke-width="2.8"/>' +
        '<text x="150" y="102" font-size="18" font-weight="800" fill="var(--brand)">R</text>' +
        '<circle cx="157" cy="109" r="4.5" fill="var(--good)" stroke="var(--surface)" stroke-width="1.5"/>' +
        '<text x="165" y="114" font-size="10.5" font-weight="700" fill="var(--good)">(2, 3) ✓</text>' +
        '<circle cx="85" cy="205" r="4" fill="var(--bad)"/>' +
        '<text x="268" y="69" font-size="10.5" font-weight="700" fill="var(--bad)">y = 4</text>' +
        '<text x="125" y="57" font-size="10.5" font-weight="700" fill="var(--brand)">x = 1</text>' +
        '<text x="255" y="100" font-size="10.5" font-weight="700" fill="var(--good)">y = x</text>' +
        '<rect x="330" y="22" width="214" height="206" rx="10" fill="var(--surface-2)" stroke="var(--line)"/>' +
        '<text x="344" y="46" font-size="13" font-weight="800" fill="var(--ink)">Region R Inequalities</text>' +
        '<text x="344" y="72" font-size="11.5" font-weight="700" fill="var(--brand)">───  x ≥ 1  (solid, right)</text>' +
        '<text x="344" y="94" font-size="11.5" font-weight="700" fill="var(--bad)">- - -  y &lt; 4  (dashed, below)</text>' +
        '<text x="344" y="116" font-size="11.5" font-weight="700" fill="var(--good)">───  y ≥ x  (solid, above)</text>' +
        '<line x1="344" y1="130" x2="530" y2="130" stroke="var(--line)"/>' +
        '<text x="344" y="150" font-size="11.5" font-weight="700" fill="var(--ink)">Test point (2, 3):</text>' +
        '<text x="344" y="169" font-size="11" fill="var(--ink-2)">2 ≥ 1 ✓   3 &lt; 4 ✓   3 ≥ 2 ✓</text>' +
        '<text x="344" y="191" font-size="10.5" font-weight="700" fill="var(--bad)">Note: (2, 4) is NOT in R</text>' +
        '<text x="344" y="208" font-size="10.5" fill="var(--ink-2)">because y = 4 is dashed!</text>' +
        '</svg>',
      diagramCaption: "Region R is bounded by x ≥ 1 (solid), y < 4 (dashed), and y ≥ x (solid); test point (2, 3) verifies all three.",
      whyItWorks:
        "A straight line cuts the 2D plane into two connected halves. Because linear expressions change smoothly without jumping, the expression ax + by − c cannot switch from positive to negative without crossing zero (the line itself). Therefore testing a single point on one side tells you the truth value for EVERY point on that entire side!",
      keyPoints: [
        "**Solid boundary line** for **{{<=}}** or **{{>=}}** (points on the line ARE included); **dashed boundary line** for **{{<}}** or **{{>}}** (points on the line are NOT included).",
        "Always use a **test point** not on the line — {{(0, 0)}} works whenever the boundary does not pass through the origin.",
        "When {{y}} is isolated with a **positive** coefficient: {{y > mx + c}} is **above** the line and {{y < mx + c}} is **below** the line.",
        "Be careful with **negative {{y}}** coefficients (e.g. {{2x - y <= 4}}): either test a point directly OR remember to **flip the sign** when dividing by {{-1}} ({{y >= 2x - 4}}).",
        "Always check whether integer lattice points lie on a **solid** edge (count them!) or a **dashed** edge (exclude them!).",
      ],
      strategies: [
        "Never guess 'above/below' from an implicit inequality — plug in {{(0, 0)}} in 3 seconds and know for certain.",
        "If the boundary passes through {{(0, 0)}} (like {{y = 2x}}), test an easy axis point like {{(1, 0)}} or {{(0, 1)}} instead.",
        "To describe a shaded region from a graph, find each boundary's equation first, then test an interior point of {{R}} to pick the exact inequality symbol (<, ≤, >, ≥).",
      ],
      thinkDeeper:
        "Look at the region {{R}} in the diagram above ({{x >= 1}}, {{y < 4}}, {{y >= x}}). How many **integer** coordinate points {{(x, y)}} satisfy all three inequalities? Watch out for the corners {{(1, 4)}} and {{(4, 4)}}!",
      workedExamples: [
        {
          title: "Testing points against an implicit inequality",
          problem: "Determine whether {{(0, 0)}} and {{(3, 2)}} satisfy the inequality {{2x + 3y < 10}}.",
          steps: [
            "Test {{(0, 0)}}: {{2(0) + 3(0) = 0}}. Is {{0 < 10}}? **Yes** — so {{(0, 0)}} IS in the region.",
            "Test {{(3, 2)}}: {{2(3) + 3(2) = 6 + 6 = 12}}. Is {{12 < 10}}? **No** — so {{(3, 2)}} is NOT in the region.",
            "Because the sign is strict ({{<}}), the boundary {{2x + 3y = 10}} is drawn as a **dashed** line, and the required region is the half-plane containing {{(0, 0)}}.",
          ],
          answer: "{{(0, 0)}} is inside the region; {{(3, 2)}} is outside; boundary is dashed.",
          yourTurn: {
            question: "Which side of {{3x - y <= 6}} contains the point {{(3, 2)}}? Evaluate {{3x - y}} at {{(3, 2)}}.",
            answer: { type: "number", value: 7, display: "7" },
            solution: "{{3(3) - 2 = 9 - 2 = 7}}. Since {{7 <= 6}} is false, {{(3, 2)}} is outside the region.",
          },
        },
        {
          title: "Counting integer points in a simultaneous inequality region",
          problem: "List all integer coordinate pairs {{(x, y)}} that satisfy {{x >= 1}}, {{y <= 3}}, and {{y > x}}.",
          steps: [
            "Since {{x >= 1}} and {{y <= 3}} with {{y > x}}, the largest possible integer {{y}} is {{3}}, so {{x}} can only be {{1}} or {{2}}.",
            "Try {{x = 1}}: we need {{1 < y <= 3}} (remember {{y > x}} is strict, so {{y = 1}} is excluded!). Valid {{y}}: {{2, 3}} → {{(1, 2), (1, 3)}}.",
            "Try {{x = 2}}: we need {{2 < y <= 3}}. Valid {{y}}: {{3}} → {{(2, 3)}}.",
            "Try {{x = 3}}: we need {{3 < y <= 3}}, which has no integer solutions.",
          ],
          answer: "3 integer points: {{(1, 2), (1, 3), (2, 3)}}.",
          yourTurn: {
            question: "How many integer coordinate points {{(x, y)}} satisfy {{x >= 0}}, {{y >= 0}}, and {{x + y <= 2}}?",
            answer: { type: "number", value: 6, display: "6" },
            solution: "For {{x = 0}}: {{(0, 0), (0, 1), (0, 2)}} (3). For {{x = 1}}: {{(1, 0), (1, 1)}} (2). For {{x = 2}}: {{(2, 0)}} (1). Total = {{3 + 2 + 1 = 6}}.",
          },
        },
      ],
    },
  ],
  learn: {
    flashcards: [
      { front: "In {{y = mx + c}}, what do {{m}} and {{c}} represent?", back: "{{m}} is the **gradient** (slope / rate of change) and {{c}} is the **{{y}}-intercept**, where the line crosses the {{y}}-axis at {{(0, c)}}." },
      { front: "State the gradient formula through {{(x_1, y_1)}} and {{(x_2, y_2)}}.", back: "{{m = (y_2 - y_1) / (x_2 - x_1)}} (vertical rise divided by horizontal run)." },
      { front: "What does the graph of {{y = 5}} look like?", back: "A **horizontal** straight line crossing the {{y}}-axis at {{(0, 5)}} — gradient {{m = 0}}." },
      { front: "What does the graph of {{x = -3}} look like?", back: "A **vertical** straight line crossing the {{x}}-axis at {{(-3, 0)}} — its gradient is not defined (division by zero)." },
      { front: "How does the cover-up method plot {{ax + by = c}}?", back: "Set {{x = 0}} to find the {{y}}-intercept {{(0, c/b)}}, set {{y = 0}} to find the {{x}}-intercept {{(c/a, 0)}}, join them, and check a 3rd point." },
      { front: "When are two straight lines parallel?", back: "When they have the **exact same gradient** ({{m_1 = m_2}}) after both equations are written in {{y = mx + c}} form." },
      { front: "What is the gradient of {{2y = 8x - 6}}?", back: "Divide by {{2}} first: {{y = 4x - 3}}, so the gradient is **{{4}}** (not {{8}}!)." },
      { front: "How do you test whether {{(3, 11)}} lies on {{y = 4x - 1}}?", back: "Substitute {{x = 3}}: {{y = 4(3) - 1 = 11}}. It matches the {{y}}-coordinate, so **yes**, it lies on the line." },
      { front: "In a real-life cost graph {{C = 3h + 25}}, what do {{25}} and {{3}} mean?", back: "{{25}} is the **fixed standing / call-out charge** (at {{h = 0}}); {{3}} is the **rate per hour** (cost increases by {{3}} for each extra hour)." },
      { front: "On a distance–time graph, what do a steep line, a flat line, and a downward line represent?", back: "Steep line = **fast constant speed**; flat (horizontal) line = **stationary (stopped)**; downward line (negative gradient) = **returning toward the start**." },
      { front: "When do you draw a SOLID vs DASHED boundary line for an inequality region?", back: "**Solid (───)** for {{<=}} or {{>=}} (boundary included); **dashed (- - -)** for {{<}} or {{>}} (boundary excluded)." },
      { front: "How do you decide which side of a boundary line satisfies an inequality?", back: "Substitute a **test point** not on the line (usually {{(0, 0)}}). If the inequality is true, keep that side; if false, take the opposite side." },
      { front: "What if the boundary line passes through {{(0, 0)}}, like {{y = 2x}}?", back: "You cannot test {{(0, 0)}} because it lies ON the line — test an easy off-line point such as {{(1, 0)}} or {{(0, 1)}} instead." },
      { front: "What makes a conversion graph show direct proportion?", back: "It is a straight line passing through the **origin {{(0, 0)}}**, with equation {{y = mx}}." },
    ],
    mustKnow: [
      "Generate a table of values and plot any explicit linear function {{y = mx + c}}, including negative {{x}}-values and negative gradients.",
      "Plot implicit linear equations {{ax + by = c}} quickly using the cover-up intercept method (or by rearranging into {{y = mx + c}}).",
      "Recognise and sketch horizontal lines ({{y = k}}) and vertical lines ({{x = k}}) without mixing them up.",
      "Calculate the gradient {{m = (y_2 - y_1) / (x_2 - x_1)}} accurately from two points or from a drawn graph with non-unit axis scales.",
      "Find the equation {{y = mx + c}} from a graph, from a gradient and one point, or from two coordinate points.",
      "Identify parallel lines by rearranging into {{y = mx + c}} and comparing gradients.",
      "Interpret the gradient (rate of change with units) and {{y}}-intercept (fixed / initial value with units) in real-life tariff, tank, conversion, and distance–time graphs.",
      "Draw solid ({{<=, >=}}) vs dashed ({{<, >}}) boundaries and use a test point to identify a single or combined inequality region {{R}}.",
      "Write down the inequalities that define a given shaded region on a coordinate grid.",
      "List or count integer coordinate pairs inside a region {{R}}, carefully respecting solid vs dashed boundaries.",
    ],
    misconceptions: [
      { wrong: "The line {{x = 4}} is horizontal because the {{x}}-axis is horizontal.", right: "{{x = 4}} is a **vertical** line! Every point on it — {{(4, 0), (4, 1), (4, 2)}} — sits vertically above {{x = 4}}." },
      { wrong: "Gradient is run divided by rise: {{(x_2 - x_1)/(y_2 - y_1)}}.", right: "Gradient is always **rise over run**: {{m = (y_2 - y_1)/(x_2 - x_1)}} — vertical change on top!" },
      { wrong: "The gradient of {{3y = 6x + 9}} is {{6}} and its {{y}}-intercept is {{9}}.", right: "Always isolate **single {{y}}** first! Dividing by {{3}} gives {{y = 2x + 3}}, so {{m = 2}} and {{c = 3}}." },
      { wrong: "If a graph goes up 2 grid squares and right 1 grid square, the gradient is {{2}}.", right: "Check the **axis scales**! If 1 vertical square = {{10}} metres and 1 horizontal square = {{2}} seconds, the gradient is {{20 / 2 = 10}} m/s, not {{2}}." },
      { wrong: "For {{2x - y <= 4}}, the '{{<=}}' sign means shade *below* the line.", right: "Because {{y}} is **negative**, rearranging flips the sign: {{y >= 2x - 4}} (which is **above** the line!). Always verify with a test point like {{(0, 0)}}." },
      { wrong: "In {{y = 5 - 3x}}, the gradient is {{5}} and the {{y}}-intercept is {{-3}}.", right: "The gradient is ALWAYS the coefficient of **{{x}}**, regardless of order! Here {{m = -3}} and {{c = 5}}." },
    ],
    examMistakes: [
      "Mixing up the order of subtraction in {{m = (y_2 - y_1)/(x_2 - x_1)}} (computing {{y_2 - y_1}} on top but {{x_1 - x_2}} on the bottom) — flips the sign of the gradient!",
      "Forgetting to include the minus sign in {{y = 7 - 2x}} and writing {{m = 2}} instead of {{m = -2}}.",
      "Writing 'the gradient is 4' instead of interpreting it in context with units ('the hire cost increases by £4 per hour').",
      "Converting {{1}} hour {{30}} minutes into {{1.3}} hours instead of {{1.5}} hours when calculating speed from a distance–time graph.",
      "Drawing a solid line instead of a dashed line for a strict inequality ({{<}} or {{>}}) — costs a guaranteed mark on graph questions.",
      "Counting an integer point that sits on a **dashed** boundary line as inside the region {{R}}.",
      "Shading the wanted region when the exam question explicitly asked you to 'shade the unwanted regions and leave {{R}} unshaded'.",
    ],
    mnemonics: [
      {
        topic: "Gradient formula",
        device: "Rise before you Run (Y to the sky!)",
        explanation: "The vertical change ({{Delta y}}, rising toward the sky) always goes on the TOP of the fraction; horizontal run ({{Delta x}}) goes on the BOTTOM.",
      },
      {
        topic: "Horizontal & vertical lines",
        device: "HOY – VUX",
        explanation: "**H**orizontal lines have **0** gradient and equation **Y** = k. **V**ertical lines have **U**ndefined gradient and equation **X** = k.",
      },
      {
        topic: "Solid vs dashed inequalities",
        device: "Extra ink in the sign = extra ink on the line",
        explanation: "{{<=}} and {{>=}} have the extra solid bar underneath → draw a **solid** line. {{<}} and {{>}} have no bar → draw a **dashed** line.",
      },
    ],
    realWorld: [
      { emoji: "🚕", title: "Ride-Hailing & Utility Tariffs", detail: "Taxi meters, electricity bills, and plumber invoices all follow C = mx + c: a fixed standing/flag-fall charge c plus a constant rate m per km, kWh, or hour." },
      { emoji: "🚅", title: "Train Timetables & Distance–Time Graphs", detail: "Rail planners plot every train as a line on a distance–time chart: steeper slopes mean express trains, flat segments show station stops, and crossings show where trains pass each other." },
      { emoji: "💱", title: "Currency & Unit Conversion", detail: "Live exchange charts (e.g. SGD to AUD or °C to °F) are linear functions — SGD↔AUD passes through (0, 0), whereas °F = 1.8°C + 32 has y-intercept 32." },
      { emoji: "🏭", title: "Linear Programming & Budget Constraints", detail: "Airlines, factories, and nutritionists plot simultaneous inequality regions (like budget ≤ $500 and weight ≤ 20 kg) to find the optimal mix inside the feasible region R." },
    ],
    videos: [
      { title: "Equation of a Straight Line y = mx + c — Corbettmaths", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=Corbettmaths+equation+of+a+line+y%3Dmx%2Bc" },
      { title: "Plotting Straight Line Graphs & Cover-Up Method — Maths Genie", channel: "Maths Genie", url: "https://www.youtube.com/results?search_query=Maths+Genie+drawing+linear+graphs+gcse" },
      { title: "Real-Life Graphs: Gradients & Intercepts — Cognito", channel: "Cognito", url: "https://www.youtube.com/results?search_query=Cognito+GCSE+Maths+real+life+graphs+gradient+intercept" },
      { title: "Shading Inequality Regions on Graphs — Corbettmaths", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=Corbettmaths+graphical+inequalities+regions" },
    ],
    formulas: [
      { name: "Gradient–Intercept Form", formula: "{{y = mx + c}}", note: "{{m}} = gradient, {{c}} = {{y}}-intercept at {{(0, c)}}" },
      { name: "Implicit (Standard) Form", formula: "{{ax + by = c}}", note: "Cover-up intercepts: {{(0, c/b)}} and {{(c/a, 0)}}" },
      { name: "Gradient from Two Points", formula: "{{m = (y_2 - y_1) / (x_2 - x_1)}}", note: "Keep the two points in the same order top and bottom" },
      { name: "Parallel Lines Condition", formula: "{{m_1 = m_2}}", note: "Equal gradients after rewriting both lines as {{y = mx + c}}" },
      { name: "Horizontal Line", formula: "{{y = k}}", note: "Parallel to the {{x}}-axis; gradient {{m = 0}}" },
      { name: "Vertical Line", formula: "{{x = k}}", note: "Parallel to the {{y}}-axis; gradient is not defined (run = 0)" },
      { name: "Speed on Distance–Time Graph", formula: "{{\"Speed\" = \"Change in distance\" / \"Change in time\"}}", note: "Equals the gradient of the line segment" },
      { name: "Direct Proportion Graph", formula: "{{y = kx}}", note: "Straight line passing through the origin {{(0, 0)}}" },
      { name: "Inclusive Boundary", formula: "{{y <= mx + c}} or {{y >= mx + c}}", note: "Draw a SOLID line; points on the boundary are included" },
      { name: "Strict Boundary", formula: "{{y < mx + c}} or {{y > mx + c}}", note: "Draw a DASHED line; points on the boundary are excluded" },
    ],
  },
};
