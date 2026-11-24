import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK-CHECK QUIZ (10 mixed questions across all 5 sections)
  // =========================================================================
  quiz: [
    {
      id: "probability-statistics-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "theoretical-experimental-probability",
      question:
        "A bag contains {{6}} red, {{5}} blue, and {{9}} green counters. One counter is chosen at random. Find {{P(\"not\" blue)}} as a fraction in simplest form.",
      answer: { type: "fraction", n: 3, d: 4, simplest: true, allowDecimal: true, display: "{{3/4}}" },
      traps: [
        {
          spec: { type: "fraction", n: 1, d: 4, allowDecimal: true },
          feedback: "{{1/4}} is {{P(blue)}} — the question asks for {{P(\"not\" blue) = 1 - 1/4}}!",
        },
      ],
      hints: [
        "Total counters = {{6 + 5 + 9 = 20}}.",
        "Count how many are NOT blue ({{6 + 9 = 15}}), then simplify {{15/20}}.",
      ],
      solution: [
        "Total counters = {{6 + 5 + 9 = 20}}.",
        "Not blue = {{6 + 9 = 15}}, so {{P(\"not\" blue) = 15/20 = 3/4}}.",
      ],
    },
    {
      id: "probability-statistics-quiz-q02",
      kind: "short",
      difficulty: "core",
      guideRef: "theoretical-experimental-probability",
      question:
        "A weighted spinner lands on Star {{54}} times in {{180}} spins. Using this relative frequency, how many Stars would you expect in {{400}} spins?",
      answer: { type: "number", value: 120, display: "120" },
      traps: [
        {
          spec: { type: "number", value: 0.3 },
          feedback: "{{0.3}} is the relative frequency (probability) — multiply by {{400}} to get the **expected number of Stars**!",
        },
      ],
      hints: [
        "Find the relative frequency first: {{54 / 180 = 0.3}}.",
        "Multiply {{0.3 * 400}}.",
      ],
      solution: [
        "Relative frequency = {{54 / 180 = 3/10 = 0.3}}.",
        "Expected Stars in {{400}} spins = {{400 * 0.3 = 120}}.",
      ],
    },
    {
      id: "probability-statistics-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "sample-space-tables-venn",
      question:
        "Two fair 6-sided dice are rolled and their scores are **added**. Find {{P(\"sum\" = 6)}} as a fraction in simplest form.",
      answer: { type: "fraction", n: 5, d: 36, simplest: true, display: "{{5/36}}" },
      traps: [
        {
          spec: { type: "fraction", n: 1, d: 12 },
          feedback: "{{3/36 = 1/12}} forgets that {{(1,5)}} & {{(5,1)}} and {{(2,4)}} & {{(4,2)}} are distinct pairs!",
        },
      ],
      hints: [
        "There are {{6 * 6 = 36}} equally likely ordered pairs.",
        "List every ordered pair that sums to {{6}}: {{(1,5), (2,4), (3,3), (4,2), (5,1)}}.",
      ],
      solution: [
        "Pairs summing to {{6}}: {{(1,5), (2,4), (3,3), (4,2), (5,1)}} — {{5}} outcomes.",
        "{{P(\"sum\" = 6) = 5/36}}.",
      ],
    },
    {
      id: "probability-statistics-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "sample-space-tables-venn",
      question:
        "In a club of {{35}} students, {{19}} are in Drama, {{16}} are in Choir, and {{6}} are in **both**. How many students are in **neither**?",
      answer: { type: "number", value: 6, display: "6" },
      traps: [
        {
          spec: { type: "number", value: 0 },
          feedback: "Don't add {{19 + 16 = 35}} directly — the {{6}} students in **both** were counted twice!",
        },
      ],
      hints: [
        "Drama only = {{19 - 6 = 13}}; Choir only = {{16 - 6 = 10}}.",
        "Subtract {{13 + 6 + 10}} from {{35}}.",
      ],
      solution: [
        "Drama only = {{19 - 6 = 13}}; Choir only = {{16 - 6 = 10}}.",
        "Total in at least one = {{13 + 6 + 10 = 29}}, so neither = {{35 - 29 = 6}}.",
      ],
    },
    {
      id: "probability-statistics-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "grouped-data-stem-leaf",
      question:
        "A grouped frequency table has intervals {{0 <= x < 10}} (f = 3), {{10 <= x < 20}} (f = 7), {{20 <= x < 30}} (f = 6), and {{30 <= x < 40}} (f = 4). Calculate the **estimated mean**.",
      answer: { type: "number", value: 20.5, display: "20.5" },
      traps: [
        {
          spec: { type: "number", value: 102.5 },
          feedback: "Divide {{sum fx = 410}} by the **total frequency** ({{20}}), NOT by the number of rows ({{4}})!",
        },
      ],
      hints: [
        "Midpoints are {{5, 15, 25, 35}}.",
        "Calculate {{sum fx = 3(5) + 7(15) + 6(25) + 4(35)}} and divide by {{3 + 7 + 6 + 4 = 20}}.",
      ],
      solution: [
        "{{sum fx = 15 + 105 + 150 + 140 = 410}} and {{sum f = 20}}.",
        "Estimated mean = {{410 / 20 = 20.5}}.",
      ],
    },
    {
      id: "probability-statistics-quiz-q06",
      kind: "short",
      difficulty: "warmup",
      guideRef: "grouped-data-stem-leaf",
      question:
        "Find the **interquartile range (IQR)** of the ordered data set: {{8, 11, 13, 17, 20, 24, 29}}.",
      answer: { type: "number", value: 13, display: "13" },
      traps: [
        {
          spec: { type: "number", value: 21 },
          feedback: "{{21}} is the full **range** ({{29 - 8}}) — IQR is {{\"UQ\" - \"LQ\"}}!",
        },
      ],
      hints: [
        "Median = {{17}}; lower half = {{8, 11, 13}} → LQ = {{11}}; upper half = {{20, 24, 29}} → UQ = {{24}}.",
      ],
      solution: [
        "Lower quartile {{LQ = 11}}, Upper quartile {{UQ = 24}}.",
        "{{\"IQR\" = 24 - 11 = 13}}.",
      ],
    },
    {
      id: "probability-statistics-quiz-q07",
      kind: "short",
      difficulty: "warmup",
      guideRef: "scatter-diagrams",
      question:
        "A scatter plot's line of best fit (for {{x}} from {{1}} to {{15}}) has equation {{y = 4x + 12}}. Use it to estimate {{y}} when {{x = 8}}.",
      answer: { type: "number", value: 44, display: "44" },
      hints: ["Substitute {{x = 8}} into {{y = 4x + 12}}."],
      solution: ["{{y = 4(8) + 12 = 32 + 12 = 44}}."],
    },
    {
      id: "probability-statistics-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "cumulative-frequency-box-plots",
      question:
        "A cumulative frequency curve represents {{80}} exam scores. At {{50}} marks, the cumulative frequency is {{52}}. Estimate how many students scored **more than** {{50}} marks.",
      answer: { type: "number", value: 28, display: "28" },
      traps: [
        {
          spec: { type: "number", value: 52 },
          feedback: "{{52}} students scored {{50}} or **less** — subtract {{52}} from {{80}} to find how many scored **more** than {{50}}!",
        },
      ],
      hints: [
        "Cumulative frequency counts scores **less than or equal to** {{50}}.",
        "Subtract {{52}} from the total {{80}}.",
      ],
      solution: ["Number scoring more than {{50}} = {{80 - 52 = 28}}."],
    },
    {
      id: "probability-statistics-quiz-q09",
      kind: "short",
      difficulty: "warmup",
      guideRef: "cumulative-frequency-box-plots",
      question:
        "A box plot has Lower Quartile {{22}} and Upper Quartile {{47}}. What is its **interquartile range (IQR)**?",
      answer: { type: "number", value: 25, display: "25" },
      hints: ["Subtract Lower Quartile from Upper Quartile: {{47 - 22}}."],
      solution: ["{{\"IQR\" = 47 - 22 = 25}}."],
    },
    {
      id: "probability-statistics-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "cumulative-frequency-box-plots",
      marks: 3,
      question:
        "Two classes sit the same science test. Group X has Median {{54}} and IQR {{12}}; Group Y has Median {{60}} and IQR {{22}}. Compare the test performance of the two groups in context.",
      hints: [
        "Make one comparison about the **average** score using the medians.",
        "Make a second comparison about the **spread / consistency** using the IQRs, referring to test scores.",
      ],
      modelAnswer:
        "On average, Group Y scored higher on the science test because its median of 60 is greater than Group X's median of 54. However, Group X's scores were more consistent (less spread out) because its interquartile range of 12 is smaller than Group Y's IQR of 22.",
      markScheme: [
        {
          point: "Compares averages correctly using the medians (Group Y higher on average, 60 > 54)",
          keywords: ["higher", "greater", "on average", "better average"],
        },
        {
          point: "Compares spread/consistency correctly using the IQRs (Group X more consistent / less spread out, 12 < 22)",
          keywords: ["more consistent", "less spread", "smaller spread", "less varied", "more spread"],
        },
        {
          point: "Includes the numerical values or context (science test scores)",
          keywords: ["score", "scores", "marks", "test"],
        },
      ],
      commonError:
        "Forgetting to compare spread (IQR) or assuming a larger IQR means 'more consistent'.",
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS 1 & 2 (15 questions each)
  // =========================================================================
  papers: [
    // -----------------------------------------------------------------------
    // PRACTICE PAPER 1
    // -----------------------------------------------------------------------
    {
      id: "probability-statistics-p1",
      title: "Practice Paper 1 — Probability, Tables & Grouped Data",
      questions: [
        {
          id: "probability-statistics-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "theoretical-experimental-probability",
          question:
            "A biased 4-sided spinner numbered 1–4 has {{P(1) = 0.18}}, {{P(2) = 0.27}}, and {{P(3) = 0.31}}. Find {{P(4)}} as a decimal.",
          answer: { type: "number", value: 0.24, allowFraction: false, display: "0.24" },
          traps: [
            {
              spec: { type: "number", value: 0.76 },
              feedback: "{{0.76}} is the sum of the first three probabilities — subtract it from {{1}}!",
            },
          ],
          hints: [
            "All four probabilities sum to {{1}}.",
            "Add {{0.18 + 0.27 + 0.31 = 0.76}}, then subtract from {{1}}.",
          ],
          solution: [
            "{{0.18 + 0.27 + 0.31 = 0.76}}.",
            "{{P(4) = 1 - 0.76 = 0.24}}.",
          ],
        },
        {
          id: "probability-statistics-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "theoretical-experimental-probability",
          question:
            "A weighted die is rolled {{300}} times and lands on {{5}} exactly {{78}} times. Find the **relative frequency** of rolling a {{5}} as a decimal.",
          answer: { type: "number", value: 0.26, allowFraction: false, display: "0.26" },
          hints: ["Divide successes ({{78}}) by total trials ({{300}})."],
          solution: ["Relative frequency = {{78 / 300 = 26 / 100 = 0.26}}."],
        },
        {
          id: "probability-statistics-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "theoretical-experimental-probability",
          question:
            "A fair 6-sided die is rolled {{450}} times. How many times would you expect it to land on a **multiple of 3**?",
          answer: { type: "number", value: 150, display: "150" },
          traps: [
            {
              spec: { type: "number", value: 75 },
              feedback: "There are **two** multiples of 3 on a 6-sided die ({{3}} and {{6}}), so {{P = 2/6 = 1/3}}, not {{1/6}}!",
            },
          ],
          hints: [
            "Which numbers on {{1, 2, 3, 4, 5, 6}} are multiples of {{3}}? ({{3}} and {{6}}.)",
            "Multiply {{P = 2/6 = 1/3}} by {{450}}.",
          ],
          solution: [
            "Multiples of {{3}} on a die are {{3}} and {{6}}, so {{P = 2/6 = 1/3}}.",
            "Expected count = {{450 * (1/3) = 150}}.",
          ],
        },
        {
          id: "probability-statistics-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "sample-space-tables-venn",
          question:
            "Two fair 6-sided dice are rolled and their scores are **added**. Find {{P(\"sum\" <= 4)}} as a fraction in simplest form.",
          answer: { type: "fraction", n: 1, d: 6, simplest: true, display: "{{1/6}}" },
          traps: [
            {
              spec: { type: "fraction", n: 1, d: 12 },
              feedback: "{{3/36 = 1/12}} only counts sums strictly less than {{4}} — include sum = {{4}} ({{(1,3), (2,2), (3,1)}}) too!",
            },
          ],
          hints: [
            "List every ordered pair with sum {{2, 3, or 4}}: {{(1,1), (1,2), (2,1), (1,3), (2,2), (3,1)}}.",
            "Simplify {{6/36}}.",
          ],
          solution: [
            "There are {{6}} favourable ordered pairs out of {{36}}.",
            "{{P(\"sum\" <= 4) = 6/36 = 1/6}}.",
          ],
        },
        {
          id: "probability-statistics-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "sample-space-tables-venn",
          question:
            "A two-way table surveys {{80}} students who travel either by Cycle or by Bus. There are {{42}} boys in total, of whom {{18}} cycle. Exactly {{24}} girls take the bus. What is the **total number of students who cycle**?",
          answer: { type: "number", value: 32, display: "32" },
          traps: [
            {
              spec: { type: "number", value: 48 },
              feedback: "{{48}} is the total number of students who take the **bus** ({{24 + 24}}) — subtract {{48}} from {{80}} to get cyclists!",
            },
          ],
          hints: [
            "Total girls = {{80 - 42 = 38}}.",
            "Girls who cycle = {{38 - 24 = 14}}; add boys who cycle ({{18}}).",
          ],
          solution: [
            "Total girls = {{80 - 42 = 38}}.",
            "Girls who cycle = {{38 - 24 = 14}}.",
            "Total cyclists = {{18 + 14 = 32}}.",
          ],
        },
        {
          id: "probability-statistics-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "sample-space-tables-venn",
          question:
            "Out of {{45}} pupils, {{26}} play a musical instrument, {{21}} do Drama, and {{9}} do **both**. How many pupils do **neither**?",
          answer: { type: "number", value: 7, display: "7" },
          traps: [
            {
              spec: { type: "number", value: 16 },
              feedback: "Check the circle total: {{(26 - 9) + 9 + (21 - 9) = 38}}, so {{45 - 38 = 7}}.",
            },
          ],
          hints: [
            "Fill the intersection ({{9}}) first: Music only = {{17}}, Drama only = {{12}}.",
            "Subtract {{17 + 9 + 12}} from {{45}}.",
          ],
          solution: [
            "Music only = {{26 - 9 = 17}}; Drama only = {{21 - 9 = 12}}.",
            "Total in circles = {{17 + 9 + 12 = 38}}; neither = {{45 - 38 = 7}}.",
          ],
        },
        {
          id: "probability-statistics-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "grouped-data-stem-leaf",
          question:
            "Calculate the **estimated mean** from this grouped table: {{0 <= x < 20}} (f = 5), {{20 <= x < 40}} (f = 8), {{40 <= x < 60}} (f = 9), {{60 <= x < 80}} (f = 3).",
          answer: { type: "number", value: 38, display: "38" },
          traps: [
            {
              spec: { type: "number", value: 40 },
              feedback: "{{40}} is the average of the four midpoints — remember to weight each midpoint by its frequency!",
            },
          ],
          hints: [
            "Class midpoints are {{10, 30, 50, 70}}.",
            "Sum {{fx = 5(10) + 8(30) + 9(50) + 3(70) = 950}}, then divide by {{sum f = 25}}.",
          ],
          solution: [
            "{{sum fx = 50 + 240 + 450 + 210 = 950}} and {{sum f = 5 + 8 + 9 + 3 = 25}}.",
            "Estimated mean = {{950 / 25 = 38}}.",
          ],
        },
        {
          id: "probability-statistics-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "grouped-data-stem-leaf",
          question:
            "An ordered stem-and-leaf diagram (Key: {{2 | 6 = 26}}) shows rows `1 | 4 7 9`, `2 | 1 3 6 8`, `3 | 2 5 8 9` ({{11}} values). Find its **interquartile range (IQR)**.",
          answer: { type: "number", value: 16, display: "16" },
          traps: [
            {
              spec: { type: "number", value: 25 },
              feedback: "{{25}} is the **range** ({{39 - 14}}) — IQR is {{\"UQ\" - \"LQ\"}}!",
            },
          ],
          hints: [
            "The 6th value is the median ({{26}}). Lower half has 5 values ({{14, 17, 19, 21, 23}}); upper half has 5 values ({{28, 32, 35, 38, 39}}).",
            "Find LQ (3rd value) and UQ (9th value), then subtract.",
          ],
          solution: [
            "LQ = 3rd value = {{19}}; UQ = 9th value = {{35}}.",
            "{{\"IQR\" = 35 - 19 = 16}}.",
          ],
        },
        {
          id: "probability-statistics-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "scatter-diagrams",
          question:
            "A scatter diagram's line of best fit passes through {{(2, 18)}} and {{(6, 34)}}. Estimate the value of {{y}} when {{x = 5}}.",
          answer: { type: "number", value: 30, display: "30" },
          hints: [
            "Find the gradient {{m = (34 - 18) / (6 - 2) = 4}}.",
            "From {{(2, 18)}}, moving {{3}} units right adds {{3 * 4 = 12}} (or step {{1}} unit left from {{(6, 34)}}).",
          ],
          solution: [
            "Gradient {{m = (34 - 18) / (6 - 2) = 16 / 4 = 4}}, so {{y = 4x + 10}}.",
            "When {{x = 5}}: {{y = 4(5) + 10 = 30}}.",
          ],
        },
        {
          id: "probability-statistics-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "cumulative-frequency-box-plots",
          question:
            "On a cumulative frequency curve for {{100}} runners, the cumulative frequency at {{40}} minutes is {{35}}, and at {{70}} minutes it is {{82}}. Estimate how many runners finished **between {{40}} and {{70}} minutes**.",
          answer: { type: "number", value: 47, display: "47" },
          hints: [
            "CF at {{70}} counts everyone finishing under {{70}} min; CF at {{40}} counts everyone finishing under {{40}} min.",
            "Subtract the cumulative frequency at {{40}} from the cumulative frequency at {{70}}.",
          ],
          solution: ["Runners between {{40}} and {{70}} minutes = {{82 - 35 = 47}}."],
        },
        {
          id: "probability-statistics-p1-q11",
          kind: "short",
          difficulty: "warmup",
          guideRef: "cumulative-frequency-box-plots",
          question:
            "A box plot has Minimum = {{14}} and Range = {{38}}. What is the **Maximum** value?",
          answer: { type: "number", value: 52, display: "52" },
          hints: ["Since {{\"Range\" = \"Max\" - \"Min\"}}, add Minimum + Range."],
          solution: ["{{\"Max\" = 14 + 38 = 52}}."],
        },
        {
          id: "probability-statistics-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "cumulative-frequency-box-plots",
          question:
            "A box plot has Upper Quartile = {{64}} and Interquartile Range = {{21}}. What is the **Lower Quartile (LQ)**?",
          answer: { type: "number", value: 43, display: "43" },
          hints: [
            "Recall the formula {{\"IQR\" = \"UQ\" - \"LQ\"}}.",
            "Rearrange to get {{\"LQ\" = \"UQ\" - \"IQR\" = 64 - 21}}.",
          ],
          solution: ["{{\"LQ\" = 64 - 21 = 43}}."],
        },
        {
          id: "probability-statistics-p1-q13",
          kind: "mcq",
          difficulty: "core",
          guideRef: "cumulative-frequency-box-plots",
          question:
            "Why must every point on a cumulative frequency curve be plotted at the **upper class boundary** rather than the class midpoint?",
          options: [
            "All values in that class are guaranteed below the upper boundary",
            "The upper boundary always equals the exact class median value",
            "Class midpoints cannot be calculated for continuous data sets",
            "Plotting at the upper boundary makes the curve straighter",
          ],
          answerIndex: 0,
          hints: [
            "What does a cumulative frequency at a horizontal value {{k}} mean?",
            "Could values in {{20 <= x < 30}} sit above {{25}}?",
          ],
          explanation:
            "Cumulative frequency counts the total number of observations **less than** a threshold; we only know for sure that all values in {{20 <= x < 30}} lie below {{30}}, not below {{25}}.",
        },
        {
          id: "probability-statistics-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "grouped-data-stem-leaf",
          marks: 3,
          question:
            "A grouped table shows {{20}} scores: {{0 <= s < 10}} (f = 4), {{10 <= s < 20}} (f = 10), {{20 <= s < 30}} (f = 6). Calculate the estimated mean showing your working, and explain **why** this value is only an estimate.",
          hints: [
            "Use midpoints {{5, 15, 25}} to find {{sum fx}} and divide by {{20}}.",
            "Explain what information is lost when raw data are placed into class intervals.",
          ],
          modelAnswer:
            "Using class midpoints 5, 15, and 25, sum of fx = (4 × 5) + (10 × 15) + (6 × 25) = 20 + 150 + 150 = 320. Dividing by total frequency 20 gives an estimated mean of 320 / 20 = 16 marks. This is only an estimate because the exact individual raw data values inside each class interval are unknown, so we assume they centre on the midpoints.",
          markScheme: [
            {
              point: "Computes sum of fx = 320 using midpoints 5, 15, 25",
              keywords: ["320"],
            },
            {
              point: "Divides by total frequency 20 to obtain estimated mean 16",
              keywords: ["16", "16."],
            },
            {
              point: "Explains that the exact individual data values are unknown when grouped",
              keywords: ["exact", "unknown", "individual", "raw data", "midpoint"],
            },
          ],
          commonError:
            "Dividing 320 by 3 (number of rows) instead of 20 (total frequency).",
        },
        {
          id: "probability-statistics-p1-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "scatter-diagrams",
          marks: 3,
          question:
            "A student plots revision hours {{x}} (from {{5}} to {{20}} hours) against exam score {{y}} and notices strong positive correlation, with one student at {{(18, 22)}} far below the main trend. Describe what positive correlation means in context, name the unusual point, and explain why predicting a score for {{40}} hours is unreliable.",
          hints: [
            "Explain positive correlation using the words 'revision hours' and 'exam score'.",
            "Use the exact statistical terms **outlier** and **extrapolation**.",
          ],
          modelAnswer:
            "Positive correlation means that as revision hours increase, exam scores tend to increase. The point (18, 22) far from the trend is an outlier and should be ignored when drawing the line of best fit. Predicting at 40 hours is unreliable because 40 lies outside the plotted data range (5 to 20 hours), which is extrapolation where the linear pattern may not continue.",
          markScheme: [
            {
              point: "Interprets positive correlation in context (as hours increase, scores tend to increase)",
              keywords: ["increase", "higher", "go up", "rise"],
            },
            {
              point: "Names the unusual point as an outlier",
              keywords: ["outlier", "anomaly"],
            },
            {
              point: "Explains that 40 hours is outside the data range (extrapolation)",
              keywords: ["extrapolat", "outside", "beyond"],
            },
          ],
          commonError:
            "Forgetting to mention the context (revision hours and exam scores) when describing positive correlation.",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PRACTICE PAPER 2
    // -----------------------------------------------------------------------
    {
      id: "probability-statistics-p2",
      title: "Practice Paper 2 — Conditional Tables, Unequal Widths & Box Plots",
      questions: [
        {
          id: "probability-statistics-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "theoretical-experimental-probability",
          question:
            "Cards numbered {{1}} to {{25}} are shuffled and one card is drawn at random. Find the probability of drawing a **square number** as a fraction in simplest form.",
          answer: { type: "fraction", n: 1, d: 5, simplest: true, allowDecimal: true, display: "{{1/5}}" },
          hints: [
            "List the square numbers from {{1}} to {{25}}: {{1, 4, 9, 16, 25}} (don't forget {{1 = 1^2}}!).",
          ],
          solution: [
            "Square numbers up to {{25}} are {{1, 4, 9, 16, 25}} ({{5}} cards).",
            "{{P(square) = 5/25 = 1/5}}.",
          ],
        },
        {
          id: "probability-statistics-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "theoretical-experimental-probability",
          question:
            "Nadia spins a biased wheel {{150}} times and wins {{27}} times. Sam spins the same wheel {{250}} times and wins {{63}} times. Combining **both** sets of trials, find the best estimate of {{P(\"Win\")}} as a decimal.",
          answer: { type: "number", value: 0.225, allowFraction: false, display: "0.225" },
          traps: [
            {
              spec: { type: "number", value: 0.216 },
              feedback: "Do not average {{0.18}} and {{0.252}} — add total wins ({{90}}) and divide by total spins ({{400}})!",
            },
          ],
          hints: [
            "Total wins = {{27 + 63 = 90}}; total spins = {{150 + 250 = 400}}.",
            "Divide {{90 / 400}}.",
          ],
          solution: [
            "Combined wins = {{27 + 63 = 90}}; combined spins = {{150 + 250 = 400}}.",
            "Best estimate = {{90 / 400 = 9 / 40 = 0.225}}.",
          ],
        },
        {
          id: "probability-statistics-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "theoretical-experimental-probability",
          question:
            "A fair 5-sided spinner is numbered {{1, 2, 3, 4, 5}}. If it is spun {{350}} times, how many times would you expect it to land on an **odd number**?",
          answer: { type: "number", value: 210, display: "210" },
          traps: [
            {
              spec: { type: "number", value: 140 },
              feedback: "{{140}} is for **even** numbers ({{2, 4}}) — there are **three** odd numbers ({{1, 3, 5}}) out of {{5}}!",
            },
          ],
          hints: [
            "Odd numbers on {{1..5}} are {{1, 3, 5}}, so {{P(odd) = 3/5}}.",
            "Calculate {{350 * (3/5)}}.",
          ],
          solution: [
            "{{P(odd) = 3/5}}.",
            "Expected odd results = {{350 * (3/5) = 210}}.",
          ],
        },
        {
          id: "probability-statistics-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "sample-space-tables-venn",
          question:
            "Two fair 5-sided spinners numbered {{1, 2, 3, 4, 5}} are spun together. Find the probability that the **difference** between the two numbers is exactly {{1}}, as a fraction in simplest form.",
          answer: { type: "fraction", n: 8, d: 25, simplest: true, allowDecimal: true, display: "{{8/25}}" },
          traps: [
            {
              spec: { type: "fraction", n: 4, d: 25 },
              feedback: "Remember both orders count: {{(1,2)}} AND {{(2,1)}} both have a difference of {{1}}!",
            },
          ],
          hints: [
            "Total ordered pairs = {{5 * 5 = 25}}.",
            "List adjacent pairs in both orders: {{(1,2),(2,1),(2,3),(3,2),(3,4),(4,3),(4,5),(5,4)}}.",
          ],
          solution: [
            "There are {{8}} pairs with difference {{1}} out of {{25}} equally likely pairs.",
            "{{P(\"diff\" = 1) = 8/25}}.",
          ],
        },
        {
          id: "probability-statistics-p2-q05",
          kind: "short",
          difficulty: "challenge",
          guideRef: "sample-space-tables-venn",
          question:
            "A sports centre has {{60}} members: {{34}} use the Gym, {{29}} use the Pool, and {{11}} use **neither**. How many members use **both** the Gym and the Pool?",
          answer: { type: "number", value: 14, display: "14" },
          traps: [
            {
              spec: { type: "number", value: 3 },
              feedback: "{{34 + 29 - 60 = 3}} forgets the {{11}} members outside both circles! Only {{60 - 11 = 49}} members are inside the circles.",
            },
          ],
          hints: [
            "How many members use **at least one** facility? {{60 - 11 = 49}}.",
            "Subtract {{49}} from {{34 + 29 = 63}} to find the double-counted overlap.",
          ],
          solution: [
            "Members using at least one facility = {{60 - 11 = 49}}.",
            "Overlap (both) = {{(34 + 29) - 49 = 63 - 49 = 14}}.",
          ],
        },
        {
          id: "probability-statistics-p2-q06",
          kind: "short",
          difficulty: "challenge",
          guideRef: "sample-space-tables-venn",
          question:
            "In a survey of {{80}} pupils: among {{40}} girls, {{28}} prefer Science and {{12}} prefer Art; among {{40}} boys, {{16}} prefer Science and {{24}} prefer Art. One pupil is picked at random **from those who prefer Science**. What is the probability the pupil is a **girl**? (Give a simplified fraction.)",
          answer: { type: "fraction", n: 7, d: 11, simplest: true, display: "{{7/11}}" },
          traps: [
            {
              spec: { type: "fraction", n: 7, d: 20 },
              feedback: "{{28/80 = 7/20}} uses ALL {{80}} pupils — the condition restricts the denominator to the {{28 + 16 = 44}} Science pupils!",
            },
          ],
          hints: [
            "Find the total number of pupils who prefer Science: {{28 + 16 = 44}}.",
            "Divide the number of girls who prefer Science ({{28}}) by {{44}} and simplify.",
          ],
          solution: [
            "Total Science pupils = {{28 + 16 = 44}}.",
            "Girls preferring Science = {{28}}, so {{P = 28/44 = 7/11}}.",
          ],
        },
        {
          id: "probability-statistics-p2-q07",
          kind: "short",
          difficulty: "challenge",
          guideRef: "grouped-data-stem-leaf",
          question:
            "A grouped table has **unequal** class widths: {{0 <= t < 10}} (f = 5), {{10 <= t < 30}} (f = 9), and {{30 <= t < 50}} (f = 6). Calculate the **estimated mean**.",
          answer: { type: "number", value: 22.25, display: "22.25" },
          hints: [
            "Check every midpoint carefully: {{5}}, {{(10 + 30)/2 = 20}}, and {{(30 + 50)/2 = 40}}.",
            "Evaluate {{(5*5 + 9*20 + 6*40) / 20}}.",
          ],
          solution: [
            "Midpoints are {{5, 20, 40}}.",
            "{{sum fx = 25 + 180 + 240 = 445}}; {{sum f = 20}}.",
            "Estimated mean = {{445 / 20 = 22.25}}.",
          ],
        },
        {
          id: "probability-statistics-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "grouped-data-stem-leaf",
          question:
            "Find the **interquartile range (IQR)** of the {{10}} ordered numbers: {{5, 8, 10, 13, 15, 19, 22, 25, 28, 31}}.",
          answer: { type: "number", value: 15, display: "15" },
          hints: [
            "Split the {{10}} numbers into a lower half of {{5}} numbers ({{5, 8, 10, 13, 15}}) and an upper half of {{5}} numbers ({{19, 22, 25, 28, 31}}).",
            "Find the middle of each half (LQ and UQ) and subtract.",
          ],
          solution: [
            "Lower half median {{LQ = 10}}; upper half median {{UQ = 25}}.",
            "{{\"IQR\" = 25 - 10 = 15}}.",
          ],
        },
        {
          id: "probability-statistics-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "grouped-data-stem-leaf",
          question:
            "An ordered stem-and-leaf diagram (Key: {{5 | 1 = 5.1}}) has rows `4 | 2 5 8`, `5 | 1 4 7 9`, `6 | 0 3`. What is the **median**?",
          answer: { type: "number", value: 5.4, display: "5.4" },
          traps: [
            {
              spec: { type: "number", value: 54 },
              feedback: "Read the **Key** carefully: {{5 | 1 = 5.1}}, so `5 | 4` represents {{5.4}}, not {{54}}!",
            },
          ],
          hints: [
            "There are {{9}} values, so find the 5th value in order.",
            "Don't forget the decimal point from the Key {{5 | 1 = 5.1}}!",
          ],
          solution: [
            "5th ordered value is `5 | 4` = {{5.4}}.",
          ],
        },
        {
          id: "probability-statistics-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "scatter-diagrams",
          question:
            "A line of best fit showing negative correlation has equation {{y = -2x + 70}}. Estimate the value of {{x}} when {{y = 42}}.",
          answer: { type: "number", value: 14, display: "14" },
          hints: [
            "Substitute {{y = 42}}: {{42 = -2x + 70}}.",
            "Solve {{2x = 70 - 42 = 28}}.",
          ],
          solution: [
            "{{42 = -2x + 70}} → {{2x = 28}} → {{x = 14}}.",
          ],
        },
        {
          id: "probability-statistics-p2-q11",
          kind: "short",
          difficulty: "challenge",
          guideRef: "cumulative-frequency-box-plots",
          question:
            "A cumulative frequency diagram represents {{200}} candidates. Exactly {{15%}} of candidates scored **more than** {{80}} marks. What is the **cumulative frequency** at {{80}} marks?",
          answer: { type: "number", value: 170, display: "170" },
          traps: [
            {
              spec: { type: "number", value: 30 },
              feedback: "{{30}} is the number scoring **more than** {{80}} — subtract {{30}} from {{200}} to get the cumulative frequency (number scoring {{80}} or less)!",
            },
          ],
          hints: [
            "{{15%}} of {{200}} = {{30}} candidates scored above {{80}}.",
            "Cumulative frequency counts those scoring {{80}} or less: {{200 - 30}}.",
          ],
          solution: [
            "Above {{80}}: {{0.15 * 200 = 30}} candidates.",
            "Cumulative frequency at {{80}} = {{200 - 30 = 170}}.",
          ],
        },
        {
          id: "probability-statistics-p2-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "cumulative-frequency-box-plots",
          question:
            "A box plot summarises the heights of {{120}} Year 9 students. Approximately how many students have heights **between the Lower Quartile and the Upper Quartile**?",
          answer: { type: "number", value: 60, display: "60" },
          traps: [
            {
              spec: { type: "number", value: 30 },
              feedback: "{{30}} is {{25%}} (one quarter) — the box from LQ to UQ spans the **middle 50%**!",
            },
          ],
          hints: [
            "The central box stretches from the 25th percentile (LQ) to the 75th percentile (UQ), covering {{50%}} of the data.",
            "Find {{50%}} of {{120}}.",
          ],
          solution: ["Middle {{50%}} of {{120}} students = {{0.5 * 120 = 60}} students."],
        },
        {
          id: "probability-statistics-p2-q13",
          kind: "mcq",
          difficulty: "warmup",
          guideRef: "grouped-data-stem-leaf",
          question:
            "A student draws a stem-and-leaf diagram with rows `1 | 5 2 9` and `2 | 4 1 6` and forgets to include a key. Which two mistakes has the student made?",
          options: [
            "Stems are too small and the diagram has no title",
            "Leaves are unordered and the stems repeat twice",
            "Leaves are unordered and the diagram has no key",
            "Digits lack commas and the diagram has no mean",
          ],
          answerIndex: 2,
          hints: [
            "Check the order of digits in each row (`5 2 9` and `4 1 6`).",
            "What tells the reader whether `1 | 5` means {{15}}, {{1.5}}, or {{150}}?",
          ],
          explanation:
            "An ordered stem-and-leaf diagram must have its **leaves sorted in ascending order** (`1 | 2 5 9` and `2 | 1 4 6`) AND include a **Key** so readers know the place value.",
        },
        {
          id: "probability-statistics-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "sample-space-tables-venn",
          marks: 3,
          question:
            "Out of {{40}} Year 9 pupils, {{25}} play Football, {{18}} play Hockey, and {{7}} play **both**. Find the numbers in all four regions of the Venn diagram, and calculate the probability that a randomly chosen pupil plays **exactly one** of the two sports.",
          hints: [
            "Start with {{7}} in the intersection, then subtract {{7}} from {{25}} and {{18}}.",
            "Sum Football-only and Hockey-only for 'exactly one', then divide by {{40}}.",
          ],
          modelAnswer:
            "Putting 7 in the overlap first: Football only = 25 - 7 = 18, Hockey only = 18 - 7 = 11, and neither = 40 - (18 + 7 + 11) = 4. The number of pupils playing exactly one sport is 18 + 11 = 29, so the probability is 29/40 (or 0.725).",
          markScheme: [
            {
              point: "Finds Football only = 18 and Hockey only = 11",
              keywords: ["18", "11"],
            },
            {
              point: "Finds neither = 4",
              keywords: ["neither = 4", "neither is 4", "outside = 4", "4 play neither", "4"],
            },
            {
              point: "Calculates P(exactly one) = 29/40 (or 0.725)",
              keywords: ["29/40", "0.725"],
            },
          ],
          commonError:
            "Including the 7 who play both inside 'exactly one' (giving 36/40 instead of 29/40).",
        },
        {
          id: "probability-statistics-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "cumulative-frequency-box-plots",
          marks: 3,
          question:
            "Two relay squads run a 200 m time trial. Squad A has Median time {{42 s}} and IQR {{8 s}}; Squad B has Median time {{46 s}} and IQR {{14 s}}. Make **two** distinct statistical comparisons between Squad A and Squad B in context—remembering that in a race, a **lower** time means **faster**!",
          hints: [
            "Compare medians carefully: who was **faster** on average ({{42 s < 46 s}})?",
            "Compare IQRs: who had **more consistent** / less spread-out race times ({{8 s < 14 s}})?",
          ],
          modelAnswer:
            "Squad A was faster on average because its median time of 42 seconds is lower than Squad B's median time of 46 seconds. Squad A's running times were also more consistent (less spread out) because its IQR of 8 seconds is smaller than Squad B's IQR of 14 seconds.",
          markScheme: [
            {
              point: "States Squad A was faster on average (lower median time 42 s < 46 s)",
              keywords: ["faster", "quicker", "shorter time", "lower time"],
            },
            {
              point: "States Squad A was more consistent / less spread out (smaller IQR 8 s < 14 s)",
              keywords: ["more consistent", "less spread", "smaller spread", "less varied"],
            },
            {
              point: "References the race / running time context",
              keywords: ["time", "times", "seconds", "race", "running"],
            },
          ],
          commonError:
            "Saying Squad B performed better because 46 > 42, forgetting that a higher race time is SLOWER!",
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 AoPS-style stretch problems, all difficulty: "challenge")
  // =========================================================================
  challenge: [
    {
      id: "probability-statistics-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "theoretical-experimental-probability",
      strategy: "Form an equation from probabilities summing to 1",
      question:
        "A jar contains only red, blue, and green tokens. {{P(red) = x}}, {{P(blue) = 2x}}, and {{P(green) = 0.28}}. Find {{P(blue)}} as a decimal.",
      answer: { type: "number", value: 0.48, allowFraction: false, display: "0.48" },
      traps: [
        {
          spec: { type: "number", value: 0.24 },
          feedback: "{{0.24}} is {{x = P(red)}} — the question asks for {{P(blue) = 2x}}!",
        },
      ],
      hints: [
        "Set the sum of all three probabilities equal to {{1}}: {{x + 2x + 0.28 = 1}}.",
        "Solve {{3x = 0.72}} for {{x}}, then double it for {{P(blue)}}.",
      ],
      solution: [
        "{{3x + 0.28 = 1}} → {{3x = 0.72}} → {{x = 0.24}}.",
        "{{P(blue) = 2x = 2(0.24) = 0.48}}.",
      ],
    },
    {
      id: "probability-statistics-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "sample-space-tables-venn",
      strategy: "Systematic sample-space counting by divisibility",
      question:
        "Two fair 6-sided dice are rolled and their scores are **multiplied**. Find the probability that the **product is a multiple of 6**, as a fraction in simplest form.",
      answer: { type: "fraction", n: 5, d: 12, simplest: true, display: "{{5/12}}" },
      traps: [
        {
          spec: { type: "fraction", n: 11, d: 36 },
          feedback: "{{11/36}} only counts pairs containing a {{6}} — don't forget pairs like {{(2,3)}}, {{(3,2)}}, {{(3,4)}}, and {{(4,3)}} whose product is ALSO a multiple of {{6}}!",
        },
      ],
      hints: [
        "A product is a multiple of {{6}} either when **at least one die shows 6** OR when **one die shows 3 and the other shows an even number (2 or 4)**.",
        "Count pairs with a {{6}}: {{11}} pairs (row 6 has 6, column 6 has 6, minus the double-counted {{(6,6)}}).",
        "Add the remaining pairs {{(2,3), (3,2), (4,3), (3,4)}} ({{4}} more pairs) → {{15 / 36}}.",
      ],
      solution: [
        "Pairs containing at least one {{6}}: {{6 + 6 - 1 = 11}} outcomes.",
        "Other pairs divisible by both {{2}} and {{3}}: {{(2,3), (3,2), (4,3), (3,4)}} → {{4}} outcomes.",
        "Total = {{15}} out of {{36}}, so {{P = 15/36 = 5/12}}.",
      ],
    },
    {
      id: "probability-statistics-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "sample-space-tables-venn",
      strategy: "Algebra inside a Venn diagram",
      question:
        "In a Venn diagram of {{60}} people, circle {{A}} contains {{3x}} people in total, circle {{B}} contains {{2x}} people in total, the overlap {{A ∩ B}} contains {{x}} people, and {{12}} people are outside both circles. Find how many people are in **{{A}} only**.",
      answer: { type: "number", value: 24, display: "24" },
      traps: [
        {
          spec: { type: "number", value: 12 },
          feedback: "{{12}} is {{x}} (the overlap) — **{{A}} only** is {{3x - x = 2x}}!",
        },
        {
          spec: { type: "number", value: 36 },
          feedback: "{{36}} is the entire circle {{A}} ({{3x}}) — subtract the overlap {{x}} to get **{{A}} only**!",
        },
      ],
      hints: [
        "Write each disjoint Venn region in terms of {{x}}: {{A}} only = {{3x - x = 2x}}, overlap = {{x}}, {{B}} only = {{2x - x = x}}, outside = {{12}}.",
        "Sum all four regions to {{60}}: {{2x + x + x + 12 = 60}}.",
        "Solve for {{x}}, then evaluate {{A}} only = {{2x}}.",
      ],
      solution: [
        "Disjoint regions: {{A}} only = {{2x}}, both = {{x}}, {{B}} only = {{x}}, outside = {{12}}.",
        "{{4x + 12 = 60}} → {{4x = 48}} → {{x = 12}}.",
        "{{A}} only = {{2x = 24}}.",
      ],
    },
    {
      id: "probability-statistics-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "grouped-data-stem-leaf",
      strategy: "Reverse grouped mean equation",
      question:
        "A grouped table has intervals {{0 <= x < 10}} (f = 4), {{10 <= x < 20}} (f = 8), and {{20 <= x < 30}} (f = {{k}}). Given that the **estimated mean** is exactly {{17}}, find the value of {{k}}.",
      answer: { type: "number", value: 8, display: "8" },
      hints: [
        "Use midpoints {{5, 15, 25}} to express {{sum fx = 4(5) + 8(15) + 25k = 140 + 25k}}.",
        "Total frequency is {{sum f = 12 + k}}.",
        "Set {{(140 + 25k) / (12 + k) = 17}}, cross-multiply, and solve for {{k}}.",
      ],
      solution: [
        "{{sum fx = 20 + 120 + 25k = 140 + 25k}}, and {{sum f = 12 + k}}.",
        "{{140 + 25k = 17(12 + k) = 204 + 17k}}.",
        "{{8k = 64}} → {{k = 8}}.",
      ],
    },
    {
      id: "probability-statistics-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "grouped-data-stem-leaf",
      strategy: "Work through totals for combined means",
      question:
        "Class A has {{24}} students with a mean score of {{65}}. Class B has {{16}} students with a mean score of {{75}}. Calculate the **combined mean** score of all {{40}} students together.",
      answer: { type: "number", value: 69, display: "69" },
      traps: [
        {
          spec: { type: "number", value: 70 },
          feedback: "You averaged {{65}} and {{75}} directly — that only works when both classes have the **same** size! Compute total marks ÷ total students.",
        },
      ],
      hints: [
        "Total marks in Class A = {{24 * 65}}; total marks in Class B = {{16 * 75}}.",
        "Add both totals and divide by {{24 + 16 = 40}}.",
      ],
      solution: [
        "Class A total = {{24 * 65 = 1,560}}; Class B total = {{16 * 75 = 1,200}}.",
        "Combined total = {{2,760}} across {{40}} students.",
        "Combined mean = {{2,760 / 40 = 69}}.",
      ],
    },
    {
      id: "probability-statistics-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "grouped-data-stem-leaf",
      strategy: "Convert mean to sum, add the outlier, divide again",
      question:
        "The mean of {{7}} test scores is {{14}}. An 8th student sits the test late and scores an outlier mark of {{38}}. What is the **new mean** of all {{8}} scores?",
      answer: { type: "number", value: 17, display: "17" },
      hints: [
        "First find the total of the original {{7}} scores: {{7 * 14 = 98}}.",
        "Add the 8th score ({{38}}), then divide by {{8}}.",
      ],
      solution: [
        "Original total = {{7 * 14 = 98}}.",
        "New total = {{98 + 38 = 136}} across {{8}} students.",
        "New mean = {{136 / 8 = 17}}.",
      ],
    },
    {
      id: "probability-statistics-ch-q07",
      kind: "short",
      difficulty: "challenge",
      guideRef: "cumulative-frequency-box-plots",
      strategy: "Linear interpolation inside the median class",
      question:
        "A grouped table of {{80}} exam scores has cumulative frequency {{30}} at {{40}} marks and cumulative frequency {{70}} at {{60}} marks. Assuming scores are spread evenly across the interval {{40 <= m < 60}}, use **linear interpolation** to estimate the **median** mark.",
      answer: { type: "number", value: 45, display: "45" },
      traps: [
        {
          spec: { type: "number", value: 50 },
          feedback: "{{50}} is the midpoint of the class, but the 40th student sits only **one-quarter** of the way through the {{40}} students in this interval!",
        },
      ],
      hints: [
        "For {{N = 80}}, the median sits at cumulative frequency {{40}}.",
        "Between CF {{30}} and CF {{70}} there are {{40}} students; CF {{40}} is {{(40 - 30) / (70 - 30) = 1/4}} of the way through the interval.",
        "Move {{1/4}} of the class width ({{60 - 40 = 20}}) above {{40}}.",
      ],
      solution: [
        "Median position = {{0.5 * 80 = 40}}.",
        "Fraction through the class = {{(40 - 30) / (70 - 30) = 10 / 40 = 1/4}}.",
        "Estimated median = {{40 + (1/4)(60 - 40) = 40 + 5 = 45}}.",
      ],
    },
    {
      id: "probability-statistics-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "theoretical-experimental-probability",
      strategy: "Compare expected vs observed frequencies & refute Gambler's Fallacy",
      marks: 3,
      question:
        "A 6-sided die is rolled {{600}} times and lands on {{6}} exactly {{145}} times. Calculate how many sixes you would **expect** if the die were fair, state with a reason whether the die appears biased, and explain why a friend's claim that 'the next roll is guaranteed NOT to be a 6 because too many 6s already appeared' is wrong.",
      hints: [
        "For a fair die, {{P(6) = 1/6}}, so multiply {{600 * (1/6)}}.",
        "Compare {{145}} with your expected value.",
        "Remember that each die roll is **independent**—dice have no memory!",
      ],
      modelAnswer:
        "If the die were fair, P(6) = 1/6, so we would expect 600 × (1/6) = 100 sixes. Because 145 is much higher than 100 across a large sample of 600 rolls, there is strong evidence that the die is biased toward 6. The friend's claim is wrong (the Gambler's Fallacy) because each roll is independent and the die has no memory of previous rolls—past sixes never force the next roll to avoid 6.",
      markScheme: [
        {
          point: "Calculates expected frequency 100 sixes for a fair die",
          keywords: ["100"],
        },
        {
          point: "Concludes the die appears biased because 145 is far above 100",
          keywords: ["biased", "not fair", "unfair"],
        },
        {
          point: "Refutes the friend's claim: rolls are independent / die has no memory",
          keywords: ["independent", "no memory", "gambler", "does not remember", "each roll"],
        },
      ],
      commonError:
        "Agreeing with the Gambler's Fallacy that future rolls 'balance out' past rolls.",
    },
  ],
};
