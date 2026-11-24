import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "probability-statistics",
  title: "Probability, Grouped Data & Box Plots",
  strand: "Statistics & Probability",
  icon: "🎲",
  summary:
    "Connect theoretical probability with experimental trials, map combined events with Venn & sample-space diagrams, and master grouped averages, scatter plots, cumulative frequency curves, and box plots.",
  intro:
    "Probability asks what we should **expect** before an experiment happens; statistics extracts truth from the **data** after it happens. Together they form the mathematics of uncertainty—from predicting dice rolls and decoding medical tests to comparing two distributions cleanly with box plots and lines of best fit.",
  guide: [
    // =======================================================================
    // 1. THEORETICAL PROBABILITY & RELATIVE FREQUENCY
    // =======================================================================
    {
      id: "theoretical-experimental-probability",
      heading: "Theoretical Probability & Relative Frequency",
      discovery: {
        problem:
          "Maya spins a mysterious 4-colour spinner {{10}} times and lands on Red {{6}} times. Lucas spins the **exact same** spinner {{500}} times and lands on Red {{155}} times. Whose estimate of {{P(Red)}} should you trust more, and what is your best estimate of how many Reds you would get in {{200}} future spins?",
        idea: "Trust **Lucas**! Maya's estimate ({{6/10 = 0.6}}) comes from only {{10}} spins, where random luck causes wild swings. Lucas's **relative frequency** ({{155/500 = 0.31}}) comes from {{500}} trials, so random fluctuations cancel out much better. In {{200}} future spins, the expected count is {{200 * 0.31 = 62}} Reds!",
      },
      body: `Every probability lies between {{0}} (**impossible**) and {{1}} (**certain**), and may be written as an exact fraction, a decimal, or a percentage—**never** as a ratio like {{1 : 4}} or words like "1 in 4" in formal exam answers.

When every individual outcome is **equally likely** (like a fair die or a well-shuffled pack of cards), we use **theoretical probability**:

- {{P(A) = ("number of favourable outcomes") / ("total number of equally likely outcomes")}}
- **Complementary events**: because an event either happens or does not happen, {{P("not" A) = 1 - P(A)}}.
- **Exhaustive, mutually exclusive outcomes**: if a spinner must land on Red, Blue, Green, or Yellow, all their probabilities sum to exactly {{1}}.
- **Expected frequency**: if an event has probability {{p}} and you repeat the experiment {{n}} times, the expected number of successes is:
  {{"Expected frequency" = n * p}}

When outcomes are **not** equally likely (like a weighted die, a drawing pin landing point-up, or rain in Singapore), symmetry cannot tell us the probability. Instead we run trials and calculate the **relative frequency** (experimental probability):

{{"Relative frequency" = ("number of successes") / ("total number of trials")}}

By the **Law of Large Numbers**, the more trials you carry out, the closer the relative frequency settles toward the true underlying probability—making larger samples **more reliable**.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Probability scale from 0 to 1 and convergence of relative frequency toward theoretical probability as trials increase">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface-2)"/>
  <!-- Top Probability Scale -->
  <text x="280" y="24" font-size="13" font-weight="800" fill="var(--ink)" text-anchor="middle">Probability Scale (0 to 1)</text>
  <line x1="60" y1="48" x2="500" y2="48" stroke="var(--brand)" stroke-width="4" stroke-linecap="round"/>
  <circle cx="60" cy="48" r="5" fill="var(--bad)"/>
  <circle cx="280" cy="48" r="5" fill="var(--brand)"/>
  <circle cx="500" cy="48" r="5" fill="var(--good)"/>
  <text x="60" y="68" font-size="11" font-weight="700" fill="var(--bad)" text-anchor="middle">0 (Impossible)</text>
  <text x="280" y="68" font-size="11" font-weight="700" fill="var(--brand)" text-anchor="middle">0.5 (Evens)</text>
  <text x="500" y="68" font-size="11" font-weight="700" fill="var(--good)" text-anchor="middle">1 (Certain)</text>

  <!-- Bottom Relative Frequency Convergence Chart -->
  <rect x="34" y="84" width="492" height="150" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.4"/>
  <text x="280" y="104" font-size="12" font-weight="800" fill="var(--ink)" text-anchor="middle">Relative Frequency Settles Toward True Probability as Trials Grow</text>
  <!-- Axes -->
  <line x1="82" y1="116" x2="82" y2="206" stroke="var(--ink-2)" stroke-width="1.6"/>
  <line x1="82" y1="206" x2="498" y2="206" stroke="var(--ink-2)" stroke-width="1.6"/>
  <!-- True probability dashed line at y=161 (0.5) -->
  <line x1="82" y1="161" x2="498" y2="161" stroke="var(--good)" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="76" y="165" font-size="11" font-weight="700" fill="var(--good)" text-anchor="end">0.5</text>
  <text x="76" y="122" font-size="10" fill="var(--ink-2)" text-anchor="end">1.0</text>
  <text x="76" y="209" font-size="10" fill="var(--ink-2)" text-anchor="end">0.0</text>
  <!-- Oscillating converging polyline -->
  <polyline points="92,126 118,190 148,140 185,174 228,150 275,168 330,156 390,164 450,159 492,161" fill="none" stroke="var(--brand)" stroke-width="2.6" stroke-linejoin="round"/>
  <circle cx="92" cy="126" r="3.5" fill="var(--bad)"/>
  <circle cx="492" cy="161" r="4" fill="var(--good)"/>
  <!-- Annotations -->
  <text x="116" y="124" font-size="10" font-weight="700" fill="var(--bad)">Few trials: noisy</text>
  <text x="412" y="146" font-size="10" font-weight="700" fill="var(--good)" text-anchor="middle">Many trials: reliable!</text>
  <text x="290" y="224" font-size="11" font-weight="600" fill="var(--ink-2)" text-anchor="middle">Number of trials (n):   10  →  50  →  200  →  1,000</text>
</svg>`,
      diagramCaption:
        "Probabilities always stay inside [0, 1]. Experimental relative frequency fluctuates wildly on small samples but converges to the true probability as n increases.",
      whyItWorks:
        "Expected frequency {{n * p}} works because probability {{p}} is the long-run **proportion** of trials that succeed. If a fair coin lands Heads half the time ({{p = 0.5}}), then out of {{400}} flips the expected count is {{400 * 0.5 = 200}}. Note that 'expected' means the theoretical long-run average—getting {{196}} or {{205}} Heads in a real experiment is completely normal!",
      keyPoints: [
        "Probabilities must satisfy {{0 <= P(A) <= 1}}—if your calculation gives {{1.2}} or {{-0.3}}, stop immediately and check!",
        "Mutually exclusive, exhaustive outcomes have probabilities that add to exactly {{1}}, so {{P(\"not\" A) = 1 - P(A)}}.",
        "Expected frequency = {{n * p}} (write the **count**, e.g. {{45}}, never a fraction like {{45/300}}!).",
        "Relative frequency = {{(\"successes\") / (\"trials\")}}; the estimate with the **largest number of trials** is the most reliable.",
        "To judge whether a die or spinner is **biased**, compare the observed count with the theoretical expected count.",
      ],
      strategies: [
        "**Complement shortcut**: if counting 'at least one' or 'not red' looks messy, compute {{1 - P(\"opposite\")}} instead.",
        "**Count vs Probability check**: always ask yourself 'Did the question ask for a **probability** (between {{0}} and {{1}}) or an **expected number of times** (can be larger than {{1}})?'",
        "**Use the biggest dataset**: when given several experiments on the same biased object, combine ALL trials together for the best possible probability estimate!",
      ],
      thinkDeeper:
        "A fair coin is flipped {{5}} times and lands on Heads every single time (HHHHH). A friend claims the 6th flip is now 'overdue' to be Tails. Explain clearly why your friend is falling for the **Gambler's Fallacy**—and what actually changes after {{1,000}} flips instead.",
      workedExamples: [
        {
          title: "Theoretical probability, complement & expected frequency",
          problem:
            "A bag contains {{5}} red, {{3}} blue, and {{4}} green counters. One counter is chosen at random. Find (a) {{P(blue)}}, (b) {{P(\"not\" green)}}, and (c) how many blue counters you would expect if you repeat this (with replacement) {{240}} times.",
          steps: [
            "Total counters = {{5 + 3 + 4 = 12}}.",
            "(a) {{P(blue) = 3/12 = 1/4}} (or {{0.25}}).",
            "(b) {{P(\"not\" green) = 1 - 4/12 = 8/12 = 2/3}}.",
            "(c) Expected blue counters = {{240 * (1/4) = 60}}.",
          ],
          answer: "(a) {{1/4}}, (b) {{2/3}}, (c) {{60}}",
          yourTurn: {
            question:
              "A biased 4-colour spinner has {{P(Red) = 0.35}}, {{P(Blue) = 0.25}}, and {{P(Green) = 0.15}}, with the rest Yellow. How many times would you expect it to land on **Yellow** in {{200}} spins?",
            answer: { type: "number", value: 50, display: "50" },
            solution:
              "{{P(Yellow) = 1 - (0.35 + 0.25 + 0.15) = 1 - 0.75 = 0.25}}. Expected Yellows = {{200 * 0.25 = 50}}.",
          },
        },
        {
          title: "Relative frequency from experimental data",
          problem:
            "A weighted die is rolled {{250}} times and lands on {{6}} exactly {{65}} times. Estimate {{P(6)}} as a decimal, and predict how many {{6}}s you would expect in {{600}} rolls.",
          steps: [
            "Relative frequency of {{6}} = {{65/250 = 13/50 = 0.26}}.",
            "Expected number of {{6}}s in {{600}} rolls = {{600 * 0.26 = 156}}.",
          ],
          answer: "{{P(6) ~= 0.26}}; expected {{156}} sixes",
          yourTurn: {
            question:
              "A charity game wheel is spun {{80}} times and lands on Win {{18}} times. Using this relative frequency, how many Wins would you expect in {{400}} spins?",
            answer: { type: "number", value: 90, display: "90" },
            solution:
              "Relative frequency = {{18/80 = 0.225}}. Expected Wins in {{400}} spins = {{400 * 0.225 = 90}}.",
          },
        },
      ],
    },

    // =======================================================================
    // 2. SAMPLE SPACE DIAGRAMS, TWO-WAY TABLES & VENN DIAGRAMS
    // =======================================================================
    {
      id: "sample-space-tables-venn",
      heading: "Sample Space Diagrams, Two-Way Tables & Venn Diagrams",
      discovery: {
        problem:
          "In a class of {{30}} students, {{18}} study Music, {{15}} study Art, and {{7}} study **both**. A student adds {{18 + 15 = 33}} and says 'Wait—how can there be {{33}} students in a class of {{30}}?' What went wrong, and how many students study **neither**?",
        idea: "The {{7}} students who study **both** were counted **twice**—once inside the {{18}} and again inside the {{15}}! Put {{7}} in the middle overlap first: then **Music only** = {{18 - 7 = 11}}, **Art only** = {{15 - 7 = 8}}, total in at least one = {{11 + 7 + 8 = 26}}, leaving {{30 - 26 = 4}} students studying **neither**!",
      },
      body: `When an experiment involves **two events** or **two categories**, guessing in your head leads to missed or double-counted outcomes. Year 9 gives you three crystal-clear visual tools—each built for a specific job:

1. **Sample Space Diagrams (2D grids)**:
   Best for **two combined random trials** (such as rolling two dice, spinning two spinners, or tossing a coin and a die). List the outcomes of Event 1 across the top and Event 2 down the side. If Event 1 has {{m}} equally likely outcomes and Event 2 has {{n}}, the grid displays all {{m * n}} equally likely pairs systematically!

2. **Two-Way Tables**:
   Best for sorting a population by **two categorical variables** (such as Year 9 vs Year 10, and Bus vs Walk vs Cycle). Every row adds to its **row total**, every column adds to its **column total**, and both totals add to the **grand total** in the bottom-right corner. Read the **denominator** of probability questions carefully: 'chosen from all students' uses the grand total, while 'given that the student is in Year 9' uses only the Year 9 row total!

3. **Venn Diagrams**:
   Best for **overlapping sets** (like Maths {{M}} and Physics {{P}} inside the universal set {{xi}}).
   - **GOLDEN RULE**: ALWAYS fill the **intersection** ({{A ∩ B}}, the middle overlap) FIRST!
   - Then subtract the overlap to find **only A** and **only B**.
   - Finally, subtract the sum of the three circle regions from the total to find **neither** (outside both circles, inside the rectangle {{xi}}).
   - Know the symbols: {{A ∩ B}} means **A AND B** (overlap); {{A ∪ B}} means **A OR B** (everything inside either circle, including the overlap); {{A'}} means **NOT A**.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sample space grid for two 4-sided spinners on the left and a 2-set Venn diagram on the right showing intersection subtracted from each set">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface-2)"/>
  <!-- LEFT PANEL: 4x4 Sample Space Sum Grid -->
  <rect x="16" y="18" width="232" height="214" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.4"/>
  <text x="132" y="40" font-size="13" font-weight="800" fill="var(--ink)" text-anchor="middle">Sample Space (Sum of 1–4)</text>
  <!-- Grid headers -->
  <text x="48" y="66" font-size="12" font-weight="800" fill="var(--ink-2)" text-anchor="middle">+</text>
  <text x="86" y="66" font-size="12" font-weight="800" fill="var(--brand)" text-anchor="middle">1</text>
  <text x="122" y="66" font-size="12" font-weight="800" fill="var(--brand)" text-anchor="middle">2</text>
  <text x="158" y="66" font-size="12" font-weight="800" fill="var(--brand)" text-anchor="middle">3</text>
  <text x="194" y="66" font-size="12" font-weight="800" fill="var(--brand)" text-anchor="middle">4</text>
  <!-- Highlight diagonal sum = 5 -->
  <rect x="178" y="76" width="32" height="28" rx="4" fill="var(--good-soft)"/>
  <rect x="142" y="108" width="32" height="28" rx="4" fill="var(--good-soft)"/>
  <rect x="106" y="140" width="32" height="28" rx="4" fill="var(--good-soft)"/>
  <rect x="70" y="172" width="32" height="28" rx="4" fill="var(--good-soft)"/>
  <!-- Grid lines -->
  <line x1="66" y1="74" x2="214" y2="74" stroke="var(--line)" stroke-width="1.4"/>
  <line x1="66" y1="54" x2="66" y2="202" stroke="var(--line)" stroke-width="1.4"/>
  <!-- Row 1 -->
  <text x="48" y="95" font-size="12" font-weight="800" fill="var(--brand)" text-anchor="middle">1</text>
  <text x="86" y="95" font-size="12" fill="var(--ink)" text-anchor="middle">2</text>
  <text x="122" y="95" font-size="12" fill="var(--ink)" text-anchor="middle">3</text>
  <text x="158" y="95" font-size="12" fill="var(--ink)" text-anchor="middle">4</text>
  <text x="194" y="95" font-size="12" font-weight="800" fill="var(--good)" text-anchor="middle">5</text>
  <!-- Row 2 -->
  <text x="48" y="127" font-size="12" font-weight="800" fill="var(--brand)" text-anchor="middle">2</text>
  <text x="86" y="127" font-size="12" fill="var(--ink)" text-anchor="middle">3</text>
  <text x="122" y="127" font-size="12" fill="var(--ink)" text-anchor="middle">4</text>
  <text x="158" y="127" font-size="12" font-weight="800" fill="var(--good)" text-anchor="middle">5</text>
  <text x="194" y="127" font-size="12" fill="var(--ink)" text-anchor="middle">6</text>
  <!-- Row 3 -->
  <text x="48" y="159" font-size="12" font-weight="800" fill="var(--brand)" text-anchor="middle">3</text>
  <text x="86" y="159" font-size="12" fill="var(--ink)" text-anchor="middle">4</text>
  <text x="122" y="159" font-size="12" font-weight="800" fill="var(--good)" text-anchor="middle">5</text>
  <text x="158" y="159" font-size="12" fill="var(--ink)" text-anchor="middle">6</text>
  <text x="194" y="159" font-size="12" fill="var(--ink)" text-anchor="middle">7</text>
  <!-- Row 4 -->
  <text x="48" y="191" font-size="12" font-weight="800" fill="var(--brand)" text-anchor="middle">4</text>
  <text x="86" y="191" font-size="12" font-weight="800" fill="var(--good)" text-anchor="middle">5</text>
  <text x="122" y="191" font-size="12" fill="var(--ink)" text-anchor="middle">6</text>
  <text x="158" y="191" font-size="12" fill="var(--ink)" text-anchor="middle">7</text>
  <text x="194" y="191" font-size="12" fill="var(--ink)" text-anchor="middle">8</text>
  <text x="132" y="222" font-size="11" font-weight="700" fill="var(--good)" text-anchor="middle">P(sum = 5) = 4/16 = 1/4</text>

  <!-- RIGHT PANEL: Venn Diagram -->
  <rect x="266" y="18" width="278" height="214" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.4"/>
  <text x="405" y="40" font-size="13" font-weight="800" fill="var(--ink)" text-anchor="middle">Venn Diagram (ξ = 30)</text>
  <!-- Outer universal box -->
  <rect x="284" y="52" width="242" height="148" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.4"/>
  <text x="294" y="68" font-size="12" font-weight="700" fill="var(--ink-2)">ξ</text>
  <!-- Two overlapping circles -->
  <circle cx="372" cy="128" r="52" fill="var(--brand-soft)" fill-opacity="0.7" stroke="var(--brand)" stroke-width="2.2"/>
  <circle cx="436" cy="128" r="52" fill="var(--good-soft)" fill-opacity="0.7" stroke="var(--good)" stroke-width="2.2"/>
  <!-- Labels -->
  <text x="342" y="72" font-size="12" font-weight="800" fill="var(--brand)" text-anchor="middle">M (18)</text>
  <text x="466" y="72" font-size="12" font-weight="800" fill="var(--good)" text-anchor="middle">P (15)</text>
  <text x="346" y="133" font-size="16" font-weight="800" fill="var(--ink)" text-anchor="middle">11</text>
  <text x="404" y="133" font-size="16" font-weight="800" fill="var(--bad)" text-anchor="middle">7</text>
  <text x="462" y="133" font-size="16" font-weight="800" fill="var(--ink)" text-anchor="middle">8</text>
  <text x="510" y="189" font-size="14" font-weight="800" fill="var(--ink-2)" text-anchor="middle">4</text>
  <text x="405" y="222" font-size="11" font-weight="700" fill="var(--bad)" text-anchor="middle">Start in the middle: 18−7=11, 15−7=8, outside=4</text>
</svg>`,
      diagramCaption:
        "Left: a 4 × 4 sample space grid makes all 16 equally likely pairs visible at once. Right: fill the Venn intersection (7) first so nobody is double-counted.",
      whyItWorks:
        "Counting the two circles separately ({{|A| + |B|}}) counts every element in the overlap {{A ∩ B}} **twice**. Subtracting the overlap once gives the Inclusion-Exclusion Principle: {{|A ∪ B| = |A| + |B| - |A ∩ B|}}. Similarly, in a 2-dice sample space, {{(2, 5)}} and {{(5, 2)}} are **two distinct** equally likely outcomes—which is why sum = {{7}} occurs {{6}} ways out of {{36}} while sum = {{12}} occurs only once!",
      keyPoints: [
        "Rolling two fair 6-sided dice creates {{6 * 6 = 36}} equally likely ordered pairs—never treat {{(3, 5)}} and {{(5, 3)}} as the same outcome!",
        "In a Venn diagram, **always fill the intersection ({{A ∩ B}}) first**, then subtract it from each circle's total.",
        "Always check that all four Venn regions (**only A**, **both**, **only B**, **neither**) add up to the universal total {{xi}}.",
        "In a two-way table, fill any row or column that has only **one** missing entry, then cascade until every cell is complete.",
        "Watch conditional wording: 'Given that a student is a girl, find P(Walk)' means the denominator is the **total number of girls**, not the whole school!",
      ],
      strategies: [
        "**Inside-out Venn filling**: middle overlap → left-only & right-only → outside 'neither' → sum-check against total.",
        "**Diagonal patterns in dice grids**: sums of two dice run along neat diagonals, making counts effortless and error-proof.",
        "**Highlight the denominator**: underline words like *'chosen from ALL students'* vs *'chosen from those who play Tennis'* before writing your fraction.",
      ],
      thinkDeeper:
        "When you roll two fair 6-sided dice and take the **difference** (larger number minus smaller number), which difference is the **most likely**—is it {{0}} or {{1}}? Sketch the {{6 * 6}} sample space in your head to check!",
      workedExamples: [
        {
          title: "Two fair dice sample space",
          problem:
            "Two fair 6-sided dice are rolled and their scores are **added**. Find (a) {{P(\"sum\" = 7)}} and (b) {{P(\"sum\" >= 10)}}.",
          steps: [
            "Total equally likely outcomes in the {{6 * 6}} sample space = {{36}}.",
            "(a) Pairs summing to {{7}}: {{(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)}} → {{6}} outcomes. {{P(\"sum\" = 7) = 6/36 = 1/6}}.",
            "(b) Pairs summing to {{10, 11, or 12}}: {{(4,6), (5,5), (6,4), (5,6), (6,5), (6,6)}} → {{6}} outcomes. {{P(\"sum\" >= 10) = 6/36 = 1/6}}.",
          ],
          answer: "(a) {{1/6}}, (b) {{1/6}}",
          yourTurn: {
            question:
              "Two fair 6-sided dice are rolled and their scores are added. Find {{P(\"sum\" = 8)}} as a fraction in simplest form.",
            answer: { type: "fraction", n: 5, d: 36, simplest: true, display: "{{5/36}}" },
            solution:
              "The pairs summing to {{8}} are {{(2,6), (3,5), (4,4), (5,3), (6,2)}} — that is {{5}} outcomes out of {{36}}, giving {{5/36}}.",
          },
        },
        {
          title: "Populating a 2-set Venn diagram",
          problem:
            "Out of {{30}} students, {{18}} take Maths ({{M}}), {{15}} take Physics ({{P}}), and {{7}} take **both**. Find how many take neither, and hence find {{P(M ∪ P)}}.",
          steps: [
            "Place {{7}} in the intersection ({{M ∩ P}}).",
            "Maths only = {{18 - 7 = 11}}; Physics only = {{15 - 7 = 8}}.",
            "Total taking at least one ({{M ∪ P}}) = {{11 + 7 + 8 = 26}}.",
            "Neither = {{30 - 26 = 4}}. Therefore {{P(M ∪ P) = 26/30 = 13/15}}.",
          ],
          answer: "Neither = {{4}}; {{P(M ∪ P) = 13/15}}",
          yourTurn: {
            question:
              "In a sports club of {{40}} members, {{24}} play Football, {{19}} play Tennis, and {{8}} play **both**. How many members play **neither** sport?",
            answer: { type: "number", value: 5, display: "5" },
            solution:
              "Football only = {{24 - 8 = 16}}; Tennis only = {{19 - 8 = 11}}; total in circles = {{16 + 8 + 11 = 35}}; neither = {{40 - 35 = 5}}.",
          },
        },
      ],
    },

    // =======================================================================
    // 3. GROUPED DATA AVERAGES, QUARTILES & STEM-AND-LEAF DIAGRAMS
    // =======================================================================
    {
      id: "grouped-data-stem-leaf",
      heading: "Grouped Data Averages, Quartiles & Stem-and-Leaf Diagrams",
      discovery: {
        problem:
          "A table tells you that {{10}} runners finished a race in the interval {{20 <= t < 30}} minutes, without listing their individual times. Why can we only calculate an **estimate** of the mean from this table, and what single representative value should we assign to those {{10}} runners?",
        idea: "Because the exact individual times inside {{20 <= t < 30}} were lost when the data were grouped! The fairest single assumption is that their times average out near the **midpoint** {{(20 + 30) / 2 = 25}} minutes. Using midpoints gives a very good **estimate** of the mean!",
      },
      body: `**1. Averages from a grouped frequency table**
When data are sorted into class intervals (like {{0 <= t < 10}}, {{10 <= t < 20}}):
- **Modal class**: the class interval with the **highest frequency** (write the whole interval, e.g. {{20 <= t < 30}}, NOT the frequency itself!).
- **Median class**: find the middle position using {{(N + 1) / 2}} (or {{N / 2}} for large continuous datasets) and accumulate the frequencies until you cross that position.
- **Estimated mean**:
  1. Find the **midpoint** {{x}} of each class: {{("lower" + "upper") / 2}}.
  2. Multiply each midpoint by its frequency to form the {{fx}} column.
  3. Divide the sum of {{fx}} by the **total frequency** (NEVER by the number of rows!):
  {{"Estimated mean" = (sum fx) / (sum f)}}

**2. Quartiles & Interquartile Range (IQR) from ordered raw data**
For an ordered list of {{n}} values:
- **Median ({{Q_2}})** splits the data into a lower half and an upper half.
- **Lower Quartile ({{Q_1}} or LQ)** is the median of the lower half (25% mark); **Upper Quartile ({{Q_3}} or UQ)** is the median of the upper half (75% mark).
- **Interquartile Range (IQR)** = {{"UQ" - "LQ"}} — measures the spread of the **middle 50%** of the data and completely ignores extreme outliers!
- **Range** = {{"Max" - "Min"}} — measures full spread, but is easily distorted by a single extreme outlier.

**3. Ordered Stem-and-Leaf Diagrams**
A stem-and-leaf diagram displays every exact data value while showing the shape of the distribution like a sideways bar chart:
- Put leading digit(s) in the **stem** and the final digit in the **leaf**.
- Order every row of leaves from **smallest to largest** outward from the stem, keeping digits neatly aligned in columns.
- **ALWAYS include a Key** (for example, {{Key: 2 | 4 = 24}} or {{Key: 3 | 1 = 3.1 cm}}). Without a key, a stem-and-leaf diagram cannot be read!`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ordered stem-and-leaf diagram with key on the left and grouped mean midpoint table on the right">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface-2)"/>
  <!-- Left: Ordered Stem-and-Leaf Diagram (n=11: 12,15,18,19,22,24,27,29,31,34,38) -->
  <rect x="18" y="18" width="234" height="214" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.4"/>
  <text x="135" y="40" font-size="13" font-weight="800" fill="var(--ink)" text-anchor="middle">Ordered Stem &amp; Leaf (n = 11)</text>
  <!-- Vertical stem bar -->
  <line x1="78" y1="54" x2="78" y2="164" stroke="var(--ink)" stroke-width="2.2"/>
  <text x="64" y="80" font-size="15" font-weight="800" fill="var(--brand)" text-anchor="end">1</text>
  <text x="64" y="114" font-size="15" font-weight="800" fill="var(--brand)" text-anchor="end">2</text>
  <text x="64" y="148" font-size="15" font-weight="800" fill="var(--brand)" text-anchor="end">3</text>
  <!-- Leaves with highlights on LQ(18), Med(24), UQ(31) -->
  <text x="96" y="80" font-size="15" font-weight="600" fill="var(--ink)">2</text>
  <text x="124" y="80" font-size="15" font-weight="600" fill="var(--ink)">5</text>
  <circle cx="156" cy="75" r="11" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.6"/>
  <text x="156" y="80" font-size="15" font-weight="800" fill="var(--good)" text-anchor="middle">8</text>
  <text x="184" y="80" font-size="15" font-weight="600" fill="var(--ink)">9</text>

  <text x="96" y="114" font-size="15" font-weight="600" fill="var(--ink)">2</text>
  <circle cx="128" cy="109" r="11" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.6"/>
  <text x="128" y="114" font-size="15" font-weight="800" fill="var(--brand)" text-anchor="middle">4</text>
  <text x="156" y="114" font-size="15" font-weight="600" fill="var(--ink)">7</text>
  <text x="184" y="114" font-size="15" font-weight="600" fill="var(--ink)">9</text>

  <circle cx="100" cy="143" r="11" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.6"/>
  <text x="100" y="148" font-size="15" font-weight="800" fill="var(--bad)" text-anchor="middle">1</text>
  <text x="128" y="148" font-size="15" font-weight="600" fill="var(--ink)">4</text>
  <text x="156" y="148" font-size="15" font-weight="600" fill="var(--ink)">8</text>

  <!-- Key & Quartiles -->
  <rect x="34" y="172" width="202" height="22" rx="6" fill="var(--surface-2)"/>
  <text x="135" y="187" font-size="11" font-weight="800" fill="var(--ink)" text-anchor="middle">Key: 2 | 4 means 24</text>
  <text x="135" y="218" font-size="11" font-weight="700" fill="var(--ink-2)" text-anchor="middle">LQ=18 · Med=24 · UQ=31 · IQR=13</text>

  <!-- Right: Grouped Mean Formula Table -->
  <rect x="268" y="18" width="274" height="214" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.4"/>
  <text x="405" y="40" font-size="13" font-weight="800" fill="var(--ink)" text-anchor="middle">Grouped Mean (Midpoints)</text>
  <!-- Table header -->
  <rect x="282" y="50" width="246" height="24" rx="4" fill="var(--brand-soft)"/>
  <text x="320" y="66" font-size="11" font-weight="800" fill="var(--ink)" text-anchor="middle">Interval</text>
  <text x="380" y="66" font-size="11" font-weight="800" fill="var(--brand)" text-anchor="middle">Mid (x)</text>
  <text x="434" y="66" font-size="11" font-weight="800" fill="var(--ink)" text-anchor="middle">Freq (f)</text>
  <text x="492" y="66" font-size="11" font-weight="800" fill="var(--good)" text-anchor="middle">fx</text>
  <!-- Rows -->
  <text x="320" y="92" font-size="11" fill="var(--ink-2)" text-anchor="middle">0 ≤ t &lt; 10</text>
  <text x="380" y="92" font-size="11" font-weight="700" fill="var(--brand)" text-anchor="middle">5</text>
  <text x="434" y="92" font-size="11" fill="var(--ink)" text-anchor="middle">4</text>
  <text x="492" y="92" font-size="11" font-weight="700" fill="var(--good)" text-anchor="middle">20</text>

  <text x="320" y="114" font-size="11" fill="var(--ink-2)" text-anchor="middle">10 ≤ t &lt; 20</text>
  <text x="380" y="114" font-size="11" font-weight="700" fill="var(--brand)" text-anchor="middle">15</text>
  <text x="434" y="114" font-size="11" fill="var(--ink)" text-anchor="middle">10</text>
  <text x="492" y="114" font-size="11" font-weight="700" fill="var(--good)" text-anchor="middle">150</text>

  <text x="320" y="136" font-size="11" fill="var(--ink-2)" text-anchor="middle">20 ≤ t &lt; 30</text>
  <text x="380" y="136" font-size="11" font-weight="700" fill="var(--brand)" text-anchor="middle">25</text>
  <text x="434" y="136" font-size="11" fill="var(--ink)" text-anchor="middle">16</text>
  <text x="492" y="136" font-size="11" font-weight="700" fill="var(--good)" text-anchor="middle">400</text>

  <text x="320" y="158" font-size="11" fill="var(--ink-2)" text-anchor="middle">30 ≤ t &lt; 40</text>
  <text x="380" y="158" font-size="11" font-weight="700" fill="var(--brand)" text-anchor="middle">35</text>
  <text x="434" y="158" font-size="11" fill="var(--ink)" text-anchor="middle">10</text>
  <text x="492" y="158" font-size="11" font-weight="700" fill="var(--good)" text-anchor="middle">350</text>

  <line x1="282" y1="168" x2="528" y2="168" stroke="var(--ink)" stroke-width="1.4"/>
  <text x="320" y="185" font-size="11" font-weight="800" fill="var(--ink)" text-anchor="middle">Totals</text>
  <text x="434" y="185" font-size="12" font-weight="800" fill="var(--ink)" text-anchor="middle">40</text>
  <text x="492" y="185" font-size="12" font-weight="800" fill="var(--good)" text-anchor="middle">920</text>
  <text x="405" y="216" font-size="13" font-weight="800" fill="var(--brand)" text-anchor="middle">Est. Mean = 920 ÷ 40 = 23</text>
</svg>`,
      diagramCaption:
        "Left: an ordered stem-and-leaf diagram preserves every exact value and requires a Key. Right: grouped mean uses class midpoints x and divides ∑fx by total frequency ∑f.",
      whyItWorks:
        "In a grouped table, dividing {{sum fx}} by the number of rows (4) instead of total frequency (40) would give {{920 / 4 = 230}}—impossible when every value is under {{40}}! Always do a **sanity check**: any valid mean or median MUST lie between the smallest and largest values in the table!",
      keyPoints: [
        "Grouped mean is an **estimate** because the exact raw data values inside each class interval are unknown.",
        "Always divide {{sum fx}} by **total frequency** ({{sum f}}), never by the number of class intervals.",
        "Your estimated mean must sit inside the data range—use this as an instant sanity check!",
        "The **modal class** is the **interval** with the largest frequency (e.g. {{20 <= t < 30}}), NOT the frequency number {{16}}.",
        "Every ordered stem-and-leaf diagram needs **ordered leaves**, aligned spacing, and a **Key**.",
      ],
      strategies: [
        "**Add two columns immediately**: draw `Midpoint (x)` and `fx` beside every grouped frequency table.",
        "**Sanity-check the mean**: verify that your final answer lies comfortably inside the table's class range.",
        "**Count leaves twice**: check that the number of leaves in your stem-and-leaf matches the total number of raw data values before finding the median!",
      ],
      thinkDeeper:
        "Suppose a grouped table has class widths that are **not** all equal—say {{0 <= x < 10}} (f = 5), {{10 <= x < 20}} (f = 9), and {{20 <= x < 50}} (f = 6). What is the midpoint of the third class, and why must you never assume midpoints go up in equal steps?",
      workedExamples: [
        {
          title: "Estimated mean, modal class & median class from grouped data",
          problem:
            "The times (in minutes) of {{40}} students are grouped as: {{0 <= t < 10}} (f = 4), {{10 <= t < 20}} (f = 10), {{20 <= t < 30}} (f = 16), {{30 <= t < 40}} (f = 10). Find the modal class, median class, and estimated mean.",
          steps: [
            "Modal class = highest frequency ({{16}}): {{20 <= t < 30}}.",
            "Cumulative frequencies: {{4}}, {{14}}, {{30}}, {{40}}. The median position ({{20.5}}-th value) falls inside {{20 <= t < 30}}.",
            "Class midpoints: {{5, 15, 25, 35}}.",
            "{{sum fx = (4 * 5) + (10 * 15) + (16 * 25) + (10 * 35) = 20 + 150 + 400 + 350 = 920}}.",
            "Estimated mean = {{920 / 40 = 23}} minutes.",
          ],
          answer: "Modal class: {{20 <= t < 30}}; Median class: {{20 <= t < 30}}; Estimated mean = {{23}} min",
          yourTurn: {
            question:
              "A grouped table has intervals {{0 <= x < 20}} (f = 3), {{20 <= x < 40}} (f = 7), {{40 <= x < 60}} (f = 6), and {{60 <= x < 80}} (f = 4). Calculate the **estimated mean**.",
            answer: { type: "number", value: 41, display: "41" },
            solution:
              "Midpoints are {{10, 30, 50, 70}}. {{sum fx = 30 + 210 + 300 + 280 = 820}}, total frequency {{sum f = 20}}, so estimated mean = {{820 / 20 = 41}}.",
          },
        },
        {
          title: "Median, quartiles & IQR from a stem-and-leaf diagram",
          problem:
            "An ordered stem-and-leaf diagram represents {{11}} quiz scores: {{12, 15, 18, 19, 22, 24, 27, 29, 31, 34, 38}}. Find the median, lower quartile (LQ), upper quartile (UQ), and interquartile range (IQR).",
          steps: [
            "With {{n = 11}}, the median is the {{(11 + 1)/2 = 6}}-th value: **24**.",
            "Lower half (5 values below 24): {{12, 15, 18, 19, 22}} → middle value (3rd) is **LQ = 18**.",
            "Upper half (5 values above 24): {{27, 29, 31, 34, 38}} → middle value (9th) is **UQ = 31**.",
            "{{\"IQR\" = \"UQ\" - \"LQ\" = 31 - 18 = 13}}.",
          ],
          answer: "Median = {{24}}, LQ = {{18}}, UQ = {{31}}, IQR = {{13}}",
          yourTurn: {
            question:
              "Find the **interquartile range (IQR)** of the ordered data set: {{14, 17, 20, 23, 28, 31, 35}}.",
            answer: { type: "number", value: 14, display: "14" },
            solution:
              "Median = {{23}} (4th value). Lower half {{14, 17, 20}} gives LQ = {{17}}; upper half {{28, 31, 35}} gives UQ = {{31}}. IQR = {{31 - 17 = 14}}.",
          },
        },
      ],
    },

    // =======================================================================
    // 4. SCATTER DIAGRAMS, CORRELATION & LINES OF BEST FIT
    // =======================================================================
    {
      id: "scatter-diagrams",
      heading: "Scatter Diagrams, Correlation & Lines of Best Fit",
      discovery: {
        problem:
          "Over {{12}} months in a seaside town, ice-cream sales and sunglasses sales show a very strong **positive correlation**. Does eating ice cream cause people to buy sunglasses—or is something else going on?",
        idea: "No! **Correlation does not prove causation!** A hidden third factor—**hot, sunny weather**—drives BOTH ice-cream sales and sunglasses sales up together!",
      },
      body: `A **scatter diagram** plots paired (bivariate) measurements {{(x, y)}} to reveal whether two variables move together:

- **Positive correlation**: as {{x}} increases, {{y}} tends to **increase** (points slope upwards left-to-right).
- **Negative correlation**: as {{x}} increases, {{y}} tends to **decrease** (points slope downwards left-to-right).
- **Zero (no) correlation**: no clear linear pattern—points form a random cloud (do **not** draw a line of best fit!).

**Drawing a strong Line of Best Fit (by eye)**:
1. Use a ruler to draw a **single straight line** following the overall trend (never join dot-to-dot!).
2. Balance roughly equal numbers of points above and below the line—and it does **NOT** have to pass through the origin {{(0, 0)}}!
3. **Ignore outliers**: an **outlier** is a point that sits far away from the general trend. Do not tilt your line toward an outlier.

**Interpolation vs Extrapolation**:
- **Interpolation** means reading a prediction **inside** the range of the plotted data → generally **reliable** when correlation is strong.
- **Extrapolation** means extending the line **outside** the plotted data range → **unreliable**, because the linear trend may bend, level off, or break down completely outside the observed range!`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three scatter diagrams showing positive correlation with an outlier, negative correlation with interpolation and extrapolation zones, and zero correlation">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface-2)"/>

  <!-- PANEL 1: Positive Correlation + Outlier -->
  <rect x="14" y="18" width="170" height="214" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.4"/>
  <text x="99" y="40" font-size="12" font-weight="800" fill="var(--good)" text-anchor="middle">Positive Correlation</text>
  <line x1="36" y1="60" x2="36" y2="188" stroke="var(--ink-2)" stroke-width="1.5"/>
  <line x1="36" y1="188" x2="168" y2="188" stroke="var(--ink-2)" stroke-width="1.5"/>
  <!-- Line of best fit -->
  <line x1="44" y1="176" x2="162" y2="74" stroke="var(--good)" stroke-width="2.2"/>
  <!-- Points -->
  <circle cx="52" cy="166" r="3.5" fill="var(--brand)"/>
  <circle cx="64" cy="164" r="3.5" fill="var(--brand)"/>
  <circle cx="76" cy="145" r="3.5" fill="var(--brand)"/>
  <circle cx="90" cy="142" r="3.5" fill="var(--brand)"/>
  <circle cx="104" cy="120" r="3.5" fill="var(--brand)"/>
  <circle cx="118" cy="118" r="3.5" fill="var(--brand)"/>
  <circle cx="132" cy="96" r="3.5" fill="var(--brand)"/>
  <circle cx="148" cy="90" r="3.5" fill="var(--brand)"/>
  <circle cx="156" cy="74" r="3.5" fill="var(--brand)"/>
  <!-- Outlier -->
  <circle cx="136" cy="164" r="4.5" fill="var(--bad)"/>
  <circle cx="136" cy="164" r="9" fill="none" stroke="var(--bad)" stroke-width="1.5" stroke-dasharray="3 2"/>
  <text x="136" y="181" font-size="10" font-weight="800" fill="var(--bad)" text-anchor="middle">Outlier</text>
  <text x="99" y="216" font-size="10.5" fill="var(--ink-2)" text-anchor="middle">x ↑ then y ↑ (ignore outlier)</text>

  <!-- PANEL 2: Negative Correlation + Extrapolation -->
  <rect x="195" y="18" width="170" height="214" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.4"/>
  <text x="280" y="40" font-size="12" font-weight="800" fill="var(--brand)" text-anchor="middle">Negative Correlation</text>
  <line x1="217" y1="60" x2="217" y2="188" stroke="var(--ink-2)" stroke-width="1.5"/>
  <line x1="217" y1="188" x2="349" y2="188" stroke="var(--ink-2)" stroke-width="1.5"/>
  <!-- Shaded interpolation band -->
  <rect x="226" y="62" width="84" height="124" fill="var(--brand-soft)" fill-opacity="0.45"/>
  <!-- Line of best fit: solid inside, dashed outside -->
  <line x1="226" y1="74" x2="310" y2="148" stroke="var(--brand)" stroke-width="2.2"/>
  <line x1="310" y1="148" x2="346" y2="180" stroke="var(--bad)" stroke-width="2.2" stroke-dasharray="4 3"/>
  <!-- Points inside range -->
  <circle cx="230" cy="72" r="3.5" fill="var(--brand)"/>
  <circle cx="242" cy="92" r="3.5" fill="var(--brand)"/>
  <circle cx="255" cy="96" r="3.5" fill="var(--brand)"/>
  <circle cx="268" cy="116" r="3.5" fill="var(--brand)"/>
  <circle cx="282" cy="118" r="3.5" fill="var(--brand)"/>
  <circle cx="294" cy="138" r="3.5" fill="var(--brand)"/>
  <circle cx="306" cy="142" r="3.5" fill="var(--brand)"/>
  <text x="268" y="178" font-size="9.5" font-weight="700" fill="var(--brand)" text-anchor="middle">Interpolate</text>
  <text x="331" y="140" font-size="9.5" font-weight="700" fill="var(--bad)" text-anchor="middle">Extrap.</text>
  <text x="280" y="216" font-size="10.5" fill="var(--ink-2)" text-anchor="middle">x ↑ then y ↓ (inside = reliable)</text>

  <!-- PANEL 3: No Correlation -->
  <rect x="376" y="18" width="170" height="214" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.4"/>
  <text x="461" y="40" font-size="12" font-weight="800" fill="var(--ink-2)" text-anchor="middle">Zero Correlation</text>
  <line x1="398" y1="60" x2="398" y2="188" stroke="var(--ink-2)" stroke-width="1.5"/>
  <line x1="398" y1="188" x2="530" y2="188" stroke="var(--ink-2)" stroke-width="1.5"/>
  <!-- Random cloud -->
  <circle cx="412" cy="84" r="3.5" fill="var(--ink-2)"/>
  <circle cx="424" cy="158" r="3.5" fill="var(--ink-2)"/>
  <circle cx="436" cy="112" r="3.5" fill="var(--ink-2)"/>
  <circle cx="452" cy="170" r="3.5" fill="var(--ink-2)"/>
  <circle cx="458" cy="76" r="3.5" fill="var(--ink-2)"/>
  <circle cx="476" cy="130" r="3.5" fill="var(--ink-2)"/>
  <circle cx="486" cy="96" r="3.5" fill="var(--ink-2)"/>
  <circle cx="502" cy="162" r="3.5" fill="var(--ink-2)"/>
  <circle cx="514" cy="82" r="3.5" fill="var(--ink-2)"/>
  <circle cx="518" cy="134" r="3.5" fill="var(--ink-2)"/>
  <text x="461" y="216" font-size="10.5" fill="var(--ink-2)" text-anchor="middle">No pattern → no line of best fit</text>
</svg>`,
      diagramCaption:
        "Identify direction and strength of correlation, ignore outliers when balancing a line of best fit, and beware unreliable extrapolation outside the data range.",
      whyItWorks:
        "A linear model works locally because many curved real-world relationships look nearly straight over a short interval (interpolation). Push too far outside the measured data (extrapolation) and physical limits take over—for example, a child's height grows roughly linearly from age 4 to 12, yet extrapolating that straight line to age 40 would predict a 4-metre-tall giant!",
      keyPoints: [
        "State **both** type of correlation AND the **relationship in context** (e.g. 'Positive correlation: as revision hours increase, exam scores tend to increase').",
        "A line of best fit is a single straight line balanced through the middle of the points—it does **not** need to start at {{(0, 0)}} and should **ignore outliers**.",
        "**Interpolation** (predicting inside the data range) is reliable when correlation is strong; **extrapolation** (predicting outside the data range) is **unreliable**.",
        "Never draw a line of best fit when there is **no (zero) correlation**.",
        "**Correlation does not imply causation**: two variables may move together because of a hidden confounding variable or pure coincidence.",
      ],
      strategies: [
        "**Clear-ruler balance**: slide a transparent ruler over the scatter cloud until the main cluster splits evenly above and below the edge, ignoring any lone outlier.",
        "**Check the x-range before trusting**: compare the requested prediction {{x}} to the minimum and maximum plotted {{x}}-values to spot extrapolation instantly.",
        "**Context sentence template**: write *'As [x-variable] increases, [y-variable] tends to [increase/decrease]'* to earn full exam wording marks.",
      ],
      thinkDeeper:
        "A car's value drops with age (negative correlation) following roughly {{V = 28,000 - 3,500t}} for ages {{t = 1}} to {{6}} years. What absurd value does this straight line predict when {{t = 10}} years, and what real-world reason explains why extrapolation fails here?",
      workedExamples: [
        {
          title: "Using a line of best fit & checking reliability",
          problem:
            "A scatter graph plots daily study hours {{x}} (from {{1}} to {{9}} hours) against test score {{y}}. The line of best fit passes through {{(2, 12)}} and {{(8, 42)}}. (a) Find the equation of the line of best fit, (b) estimate the score for {{5}} study hours, and (c) explain why predicting for {{20}} hours is unreliable.",
          steps: [
            "(a) Gradient {{m = (42 - 12) / (8 - 2) = 30 / 6 = 5}}. Using {{(2, 12)}}: {{12 = 5(2) + c}} → {{c = 2}}, so {{y = 5x + 2}}.",
            "(b) At {{x = 5}} (inside {{1}} to {{9}}, so interpolation): {{y = 5(5) + 2 = 27}}.",
            "(c) {{x = 20}} lies far outside the plotted range ({{1}} to {{9}} hours): that is **extrapolation**, which is unreliable because the linear trend may not continue (and scores have a maximum cap!).",
          ],
          answer: "(a) {{y = 5x + 2}}, (b) {{27}}, (c) Extrapolation outside the data range",
          yourTurn: {
            question:
              "A line of best fit for plant height {{y}} (in cm) after {{x}} weeks (data from {{1}} to {{10}} weeks) has equation {{y = 3x + 10}}. Estimate the plant height after {{6}} weeks (in cm).",
            answer: { type: "number", value: 28, display: "28 cm" },
            solution:
              "{{x = 6}} is inside the data range (interpolation): {{y = 3(6) + 10 = 18 + 10 = 28 cm}}.",
          },
        },
      ],
    },

    // =======================================================================
    // 5. CUMULATIVE FREQUENCY DIAGRAMS & BOX PLOTS
    // =======================================================================
    {
      id: "cumulative-frequency-box-plots",
      heading: "Cumulative Frequency Diagrams & Box Plots",
      discovery: {
        problem:
          "A table says {{12}} students scored in {{0 <= m < 20}} and {{28}} students scored in {{20 <= m < 40}}. By the time you reach **40 marks**, how many students have scored less than {{40}}—and should you plot that cumulative frequency at the **midpoint (30)** or the **upper boundary (40)**?",
        idea: "There are {{12 + 28 = 40}} students who scored less than {{40}}! We are **guaranteed** all {{40}} students are below {{40}}, NOT below {{30}} (some could be at {{38}} or {{39}}!). That is why cumulative frequency is ALWAYS plotted at the **UPPER class boundary**!",
      },
      body: `**1. Cumulative Frequency (CF) Diagrams**
A **cumulative frequency** is a **running total** of frequencies from the start up to the top of each class interval:
- Always plot points at the **UPPER class boundary** of each interval (never the midpoint!).
- Anchor the start of the curve at **(lowest lower boundary, 0)** so the S-curve begins cleanly at zero.
- Join the points with a smooth increasing **S-curve** (or straight segments if asked for a cumulative frequency polygon).

Reading summary statistics from a CF curve with total frequency {{N}}:
- **Lower Quartile (LQ)**: go across from {{0.25 N}} (25%) on the CF axis and read down to the horizontal axis.
- **Median**: go across from {{0.50 N}} (50%) and read down.
- **Upper Quartile (UQ)**: go across from {{0.75 N}} (75%) and read down.
- **Interquartile Range (IQR)** = {{"UQ" - "LQ"}}.
- **'More than {{k}}' questions**: go UP from {{k}} on the horizontal axis to find how many are **less than {{k}}**, then **subtract from {{N}}**!

**2. Box Plots (Box-and-Whisker Diagrams)**
A box plot condenses a distribution into its **5-number summary**:
**Minimum**, **LQ**, **Median**, **UQ**, and **Maximum**.
- Every section (left whisker, left half of box, right half of box, right whisker) contains **25% of the data**—even if one section looks stretched wider!
- **Comparing two box plots (2-mark exam rule)**: ALWAYS make **two separate comparisons in context**:
  1. Compare **average** using the **Median** (e.g. *'Group B has a higher median score of 64 compared with 52, so Group B scored higher on average'*).
  2. Compare **spread / consistency** using the **IQR** (or range) (e.g. *'Group B has a smaller IQR of 14 compared with 22, so Group B's scores are more consistent / less spread out'*).`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cumulative frequency S-curve for N equals 80 aligned directly above its corresponding box plot showing Min, LQ, Median, UQ, Max, and IQR">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface-2)"/>
  <!-- TOP: Cumulative Frequency Curve (x: 0..80 mapped to 70..470, y: 0..80 mapped to 150..30) -->
  <!-- x scale: px(v) = 70 + v * 5.0; y scale: py(cf) = 150 - cf * 1.5 -->
  <rect x="26" y="14" width="508" height="222" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.4"/>
  <!-- Axes -->
  <line x1="70" y1="28" x2="70" y2="150" stroke="var(--ink)" stroke-width="1.8"/>
  <line x1="70" y1="150" x2="480" y2="150" stroke="var(--ink)" stroke-width="1.8"/>
  <!-- CF ticks: 0, 20, 40, 60, 80 -->
  <text x="62" y="154" font-size="10" fill="var(--ink-2)" text-anchor="end">0</text>
  <text x="62" y="124" font-size="10" font-weight="700" fill="var(--good)" text-anchor="end">20 (25%)</text>
  <text x="62" y="94" font-size="10" font-weight="700" fill="var(--brand)" text-anchor="end">40 (50%)</text>
  <text x="62" y="64" font-size="10" font-weight="700" fill="var(--bad)" text-anchor="end">60 (75%)</text>
  <text x="62" y="34" font-size="10" fill="var(--ink-2)" text-anchor="end">80</text>
  <!-- Horizontal dotted lines to curve: LQ=34 (px=240), Med=48 (px=310), UQ=62 (px=380) -->
  <!-- Curve points: (10,0)->(120,150), (34,20)->(240,120), (48,40)->(310,90), (62,60)->(380,60), (76,80)->(450,30) -->
  <line x1="70" y1="120" x2="240" y2="120" stroke="var(--good)" stroke-width="1.4" stroke-dasharray="4 3"/>
  <line x1="240" y1="120" x2="240" y2="188" stroke="var(--good)" stroke-width="1.4" stroke-dasharray="4 3"/>

  <line x1="70" y1="90" x2="310" y2="90" stroke="var(--brand)" stroke-width="1.4" stroke-dasharray="4 3"/>
  <line x1="310" y1="90" x2="310" y2="188" stroke="var(--brand)" stroke-width="1.4" stroke-dasharray="4 3"/>

  <line x1="70" y1="60" x2="380" y2="60" stroke="var(--bad)" stroke-width="1.4" stroke-dasharray="4 3"/>
  <line x1="380" y1="60" x2="380" y2="188" stroke="var(--bad)" stroke-width="1.4" stroke-dasharray="4 3"/>

  <!-- Smooth S-curve -->
  <path d="M 120 150 C 175 148, 210 135, 240 120 C 275 104, 290 100, 310 90 C 335 78, 355 72, 380 60 C 410 46, 428 34, 450 30" fill="none" stroke="var(--brand)" stroke-width="3"/>
  <circle cx="120" cy="150" r="3.5" fill="var(--brand)"/>
  <circle cx="240" cy="120" r="4" fill="var(--good)"/>
  <circle cx="310" cy="90" r="4" fill="var(--brand)"/>
  <circle cx="380" cy="60" r="4" fill="var(--bad)"/>
  <circle cx="450" cy="30" r="3.5" fill="var(--brand)"/>

  <!-- Aligned Box Plot underneath (y = 188 to 214) -->
  <!-- Min=10 (px=120), LQ=34 (px=240), Med=48 (px=310), UQ=62 (px=380), Max=76 (px=450) -->
  <line x1="120" y1="201" x2="240" y2="201" stroke="var(--ink)" stroke-width="2.2"/>
  <line x1="120" y1="191" x2="120" y2="211" stroke="var(--ink)" stroke-width="2.4"/>
  <rect x="240" y="188" width="140" height="26" rx="3" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2.2"/>
  <line x1="310" y1="188" x2="310" y2="214" stroke="var(--brand)" stroke-width="3"/>
  <line x1="380" y1="201" x2="450" y2="201" stroke="var(--ink)" stroke-width="2.2"/>
  <line x1="450" y1="191" x2="450" y2="211" stroke="var(--ink)" stroke-width="2.4"/>
  <!-- Box plot labels -->
  <text x="120" y="229" font-size="10.5" font-weight="700" fill="var(--ink-2)" text-anchor="middle">Min (10)</text>
  <text x="240" y="229" font-size="10.5" font-weight="800" fill="var(--good)" text-anchor="middle">LQ (34)</text>
  <text x="310" y="229" font-size="10.5" font-weight="800" fill="var(--brand)" text-anchor="middle">Med (48)</text>
  <text x="380" y="229" font-size="10.5" font-weight="800" fill="var(--bad)" text-anchor="middle">UQ (62)</text>
  <text x="450" y="229" font-size="10.5" font-weight="700" fill="var(--ink-2)" text-anchor="middle">Max (76)</text>
  <text x="498" y="205" font-size="11" font-weight="800" fill="var(--brand)" text-anchor="middle">IQR = 28</text>
</svg>`,
      diagramCaption:
        "A cumulative frequency curve (top) projects directly onto a box plot (bottom): 25% gives LQ, 50% gives Median, and 75% gives UQ.",
      whyItWorks:
        "The **box** stretches from the 25th percentile (LQ) to the 75th percentile (UQ), so it ALWAYS encloses the **middle 50%** of the population. A narrower box means the middle half of the data is packed tightly together (more consistent), whereas a wider box means greater spread—regardless of whether one extreme outlier stretches a whisker!",
      keyPoints: [
        "ALWAYS plot cumulative frequencies at the **UPPER class boundary**—never at the midpoint!",
        "For total frequency {{N}}: read **LQ** at {{0.25 N}}, **Median** at {{0.50 N}}, and **UQ** at {{0.75 N}}.",
        "For 'how many scored **more than** {{k}}', read CF at {{k}} and subtract it from {{N}} ({{N - \"CF\"}}).",
        "Every one of the four sections of a box plot represents **25%** of the data (even if one whisker is much longer than the other).",
        "When comparing two box plots, always state BOTH a **Median comparison** (average) AND an **IQR comparison** (spread/consistency) **in context**.",
      ],
      strategies: [
        "**Check the last running total**: the final cumulative frequency MUST equal the stated total {{N}} before you plot a single point.",
        "**Use a ruler for CF readings**: draw clean horizontal and vertical dotted lines on the graph so examiners can award method marks.",
        "**M.I.C. box-plot comparison rule**: **M**edian (average) + **I**QR (spread/consistency) + **C**ontext (mention test scores, times, heights, etc.).",
      ],
      thinkDeeper:
        "On a box plot for {{120}} runners' times, the left whisker runs from {{20}} to {{25}} minutes while the right whisker runs from {{40}} to {{65}} minutes. A student claims 'Far more runners are in the right whisker because it is 5 times wider.' Why is that claim false?",
      workedExamples: [
        {
          title: "Reading quartiles & 'more than' from a cumulative frequency curve",
          problem:
            "A cumulative frequency curve for {{80}} students' maths marks gives {{LQ = 34}}, {{Median = 48}}, and {{UQ = 62}}. (a) Find the IQR, and (b) estimate how many students scored **more than** {{62}} marks.",
          steps: [
            "(a) {{\"IQR\" = \"UQ\" - \"LQ\" = 62 - 34 = 28}} marks.",
            "(b) {{62}} is the upper quartile (75% mark), so {{0.75 * 80 = 60}} students scored {{62}} or less.",
            "Number scoring **more than** {{62}} = {{80 - 60 = 20}} students (25% of the group).",
          ],
          answer: "(a) IQR = {{28}}, (b) {{20}} students",
          yourTurn: {
            question:
              "A box plot has Minimum = {{12}}, LQ = {{25}}, Median = {{36}}, UQ = {{51}}, and Maximum = {{68}}. Find its **interquartile range (IQR)**.",
            answer: { type: "number", value: 26, display: "26" },
            solution:
              "{{\"IQR\" = \"UQ\" - \"LQ\" = 51 - 25 = 26}}.",
          },
        },
      ],
    },
  ],
  learn: {
    flashcards: [
      { front: "Theoretical probability formula for equally likely outcomes", back: "{{P(A) = (\"favourable outcomes\") / (\"total outcomes\")}}" },
      { front: "Rule for the probability of an event **NOT** happening", back: "{{P(\"not\" A) = 1 - P(A)}}" },
      { front: "Formula for **expected frequency** in {{n}} trials with probability {{p}}", back: "{{\"Expected frequency\" = n * p}}" },
      { front: "Formula for **relative frequency** (experimental probability)", back: "{{\"Relative frequency\" = (\"number of successes\") / (\"total trials\")}}" },
      { front: "How do you make a relative frequency estimate more reliable?", back: "Increase the **number of trials** (Law of Large Numbers)." },
      { front: "How many equally likely outcomes are in the sample space of rolling two fair 6-sided dice?", back: "{{6 * 6 = 36}} ordered pairs." },
      { front: "Golden rule when filling in a 2-set **Venn diagram**", back: "ALWAYS put the **intersection** ({{A ∩ B}}) in the middle first, then subtract it from each circle total." },
      { front: "Formula for the **estimated mean** from a grouped frequency table", back: "{{\"Estimated mean\" = (sum fx) / (sum f)}}, where {{x}} is each class **midpoint**." },
      { front: "What MUST every ordered stem-and-leaf diagram include?", back: "Leaves ordered smallest-to-largest AND a **Key** (e.g. {{Key: 2 | 4 = 24}})." },
      { front: "Difference between **interpolation** and **extrapolation** on a scatter diagram", back: "**Interpolation** predicts *inside* the plotted data range (reliable); **extrapolation** predicts *outside* the data range (unreliable)." },
      { front: "Where on the horizontal axis do you plot points on a **cumulative frequency** diagram?", back: "At the **UPPER class boundary** of each interval (never the midpoint!)." },
      { front: "How do you read LQ, Median, and UQ from a cumulative frequency curve of total {{N}}?", back: "Go across from {{0.25 N}} (LQ), {{0.50 N}} (Median), and {{0.75 N}} (UQ) and read down." },
      { front: "Formula for the **Interquartile Range (IQR)** and what percentage of data it covers", back: "{{\"IQR\" = \"UQ\" - \"LQ\"}} — covers the **middle 50%** of the data." },
      { front: "What two things must you ALWAYS compare when comparing two box plots?", back: "1) **Median** (average) and 2) **IQR** (spread / consistency), both written **in context**." },
    ],
    mustKnow: [
      "Calculate theoretical probabilities, complementary probabilities {{1 - P(A)}}, and expected frequencies {{n * p}}.",
      "Compute experimental relative frequencies and explain why larger trial counts produce more reliable estimates.",
      "Construct and read 2D sample space diagrams (e.g. two dice or spinners) and complete two-way tables.",
      "Populate 2-set Venn diagrams from summary totals without double-counting the intersection, and read {{P(A ∩ B)}}, {{P(A ∪ B)}}, and {{P(A')}}.",
      "Estimate the mean from grouped frequency tables using class midpoints ({{sum fx / sum f}}) and find the modal and median classes.",
      "Calculate median, lower quartile, upper quartile, range, and IQR from ordered raw data and ordered stem-and-leaf diagrams (with Key).",
      "Describe correlation (positive, negative, zero), spot outliers, draw a balanced line of best fit, and distinguish interpolation from unreliable extrapolation.",
      "Construct cumulative frequency tables and curves (plotting at UPPER class boundaries) and read LQ, Median, UQ, IQR, and 'more than {{k}}' counts.",
      "Draw box plots from 5-number summaries (Min, LQ, Median, UQ, Max) and compare two box plots using Median and IQR in context.",
    ],
    misconceptions: [
      {
        wrong: "Dividing {{sum fx}} by the **number of rows** in a grouped frequency table to find the estimated mean.",
        right: "Always divide {{sum fx}} by the **total frequency** {{sum f}}—and sanity-check that the answer sits inside the data range!",
      },
      {
        wrong: "Putting the full total for Set A directly into the 'only A' part of a Venn diagram without subtracting the overlap.",
        right: "Fill the **intersection first**, then write {{A - \"both\"}} in the 'only A' region so nobody is double-counted.",
      },
      {
        wrong: "Plotting cumulative frequency points at the **midpoints** of each class interval.",
        right: "Midpoints are for estimated mean; cumulative frequency is ALWAYS plotted at the **UPPER class boundary**!",
      },
      {
        wrong: "Forcing a line of best fit to pass through the origin {{(0, 0)}} or joining points dot-to-dot.",
        right: "Draw one straight balanced line through the trend (ignoring outliers)—it only goes through {{(0, 0)}} if the data trend actually points there.",
      },
      {
        wrong: "Assuming a longer whisker on a box plot contains **more data points** than a shorter whisker.",
        right: "Every quarter of a box plot (each whisker and each half-box) contains exactly **25%** of the data; a longer whisker just means those 25% are more spread out.",
      },
      {
        wrong: "Claiming that strong positive correlation proves one variable **causes** the other.",
        right: "Correlation only shows two variables move together—a hidden third variable or coincidence can explain the link.",
      },
    ],
    examMistakes: [
      "Writing a probability as a ratio like {{3 : 10}} or a number greater than {{1}} instead of a fraction, decimal, or percentage in {{[0, 1]}}.",
      "Giving a **probability** (like {{0.2}}) when asked for an **expected number of times** (like {{60}}), or vice versa.",
      "Forgetting to include a **Key** or forgetting to **order** the leaves on a stem-and-leaf diagram.",
      "Writing the frequency (e.g. {{16}}) instead of the class interval (e.g. {{20 <= t < 30}}) for the **modal class**.",
      "Reading the cumulative frequency directly for a **'more than {{k}}'** question instead of subtracting from the total {{N}}.",
      "Comparing two box plots using only one statistic (missing either the median or the IQR) or forgetting to mention the real-world **context**.",
      "Using the grand total instead of the row/column total on a conditional two-way table probability ('given that the student is in Year 9...').",
    ],
    mnemonics: [
      {
        topic: "Cumulative Frequency vs Grouped Mean",
        device: "Mean = Middle, Cumulative = Ceiling",
        explanation: "Use class **Midpoints** for estimated **Mean**, and **Upper boundaries (Ceilings)** for **Cumulative** frequency!",
      },
      {
        topic: "Comparing Two Box Plots",
        device: "M.I.C. Check (Median · IQR · Context)",
        explanation: "Every full-mark box-plot comparison compares the **M**edian (average) AND the **I**QR (spread/consistency), both in **C**ontext.",
      },
      {
        topic: "Venn Diagram Setup",
        device: "Middle First, Subtract the Rest",
        explanation: "Drop the overlap ({{A ∩ B}}) into the centre first, then subtract it to fill 'only A' and 'only B', then subtract the total from {{xi}} for 'neither'.",
      },
    ],
    realWorld: [
      {
        title: "Weather forecasting & tropical rainfall models",
        emoji: "⛈️",
        detail: "Meteorologists run thousands of atmospheric simulations and compute the **relative frequency** of rain to report a 70% chance of afternoon showers in Singapore.",
      },
      {
        title: "Medical screening & two-way contingency tables",
        emoji: "🩺",
        detail: "Hospitals arrange true positives, false positives, true negatives, and false negatives in **two-way tables** to evaluate how accurate a diagnostic test really is.",
      },
      {
        title: "Sports analytics & box-plot consistency",
        emoji: "🏃",
        detail: "Coaches compare athletes using **box plots**: a sprinter with a slightly slower median but a much smaller **IQR** is more reliable under championship pressure.",
      },
      {
        title: "Climate science & scatter-plot trends",
        emoji: "🌍",
        detail: "Scientists plot atmospheric {{CO_2}} against global temperature anomalies on **scatter diagrams**, carefully distinguishing strong interpolation from cautious future extrapolation.",
      },
      {
        title: "Board games & casino house edge",
        emoji: "🎲",
        detail: "In Settlers of Catan, the {{6 * 6}} **sample space** explains why {{7}} is the most common two-dice roll ({{6/36}}) and why tiles numbered {{6}} and {{8}} ({{5/36}} each) are printed in red!",
      },
    ],
    videos: [
      {
        title: "Relative Frequency and Expected Outcomes",
        channel: "Corbettmaths",
        url: "https://www.youtube.com/results?search_query=Corbettmaths+relative+frequency+expected+outcomes",
      },
      {
        title: "Venn Diagrams, Two-Way Tables & Sample Space Diagrams",
        channel: "GCSE Maths Tutor",
        url: "https://www.youtube.com/results?search_query=GCSE+Maths+Tutor+Venn+diagrams+two+way+tables+sample+space",
      },
      {
        title: "Estimated Mean from Grouped Data & Stem-and-Leaf Diagrams",
        channel: "Corbettmaths",
        url: "https://www.youtube.com/results?search_query=Corbettmaths+estimated+mean+grouped+data+stem+and+leaf",
      },
      {
        title: "Scatter Graphs, Cumulative Frequency & Box Plots",
        channel: "Cognito Maths",
        url: "https://www.youtube.com/results?search_query=Cognito+Maths+scatter+graphs+cumulative+frequency+box+plots",
      },
    ],
    formulas: [
      { name: "Theoretical Probability", formula: "{{P(A) = (\"favourable\") / (\"total\")}}", note: "Requires equally likely outcomes" },
      { name: "Complement Rule", formula: "{{P(\"not\" A) = 1 - P(A)}}", note: "All mutually exclusive outcomes sum to 1" },
      { name: "Expected Frequency", formula: "{{\"Expected count\" = n * p}}", note: "Multiply trials n by probability p" },
      { name: "Relative Frequency", formula: "{{\"Relative frequency\" = (\"successes\") / (\"trials\")}}", note: "More trials → more reliable estimate" },
      { name: "Venn Union (Inclusion–Exclusion)", formula: "{{|A ∪ B| = |A| + |B| - |A ∩ B|}}", note: "Fill intersection A ∩ B first" },
      { name: "Estimated Mean (Grouped Data)", formula: "{{\"Mean\" ~= (sum fx) / (sum f)}}", note: "x = class midpoint; divide by total frequency" },
      { name: "Interquartile Range (IQR)", formula: "{{\"IQR\" = \"UQ\" - \"LQ\"}}", note: "Spread of the middle 50% (ignores outliers)" },
      { name: "Cumulative Frequency Quartiles", formula: "{{\"LQ at\" 0.25N, \"Med at\" 0.5N, \"UQ at\" 0.75N}}", note: "Plot CF at UPPER class boundaries" },
      { name: "Range", formula: "{{\"Range\" = \"Max\" - \"Min\"}}", note: "Affected by extreme outliers" },
      { name: "Box Plot 5-Number Summary", formula: "{{\"Min, LQ, Median, UQ, Max\"}}", note: "Compare Median (average) & IQR (spread) in context" },
    ],
  },
};
