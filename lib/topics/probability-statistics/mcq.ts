import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // MCQ PAPER 1 — Probability, Sample Spaces, Grouped Data & Box Plot Basics
  // =========================================================================
  {
    id: "probability-statistics-m1",
    title: "MCQ Paper 1 — Core Probability, Averages & Diagrams",
    questions: [
      {
        id: "probability-statistics-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "theoretical-experimental-probability",
        question:
          "A bag contains {{4}} red, {{5}} blue, and {{3}} green counters. One counter is chosen at random. What is {{P(\"not\" red)}}?",
        options: ["{{1/3}}", "{{5/12}}", "{{2/3}}", "{{3/4}}"],
        answerIndex: 2,
        hints: [
          "Find the total number of counters first: {{4 + 5 + 3 = 12}}.",
          "Use {{P(\"not\" red) = 1 - P(red)}}.",
        ],
        explanation:
          "There are {{12}} counters in total and {{4}} are red, so {{P(red) = 4/12 = 1/3}} and {{P(\"not\" red) = 1 - 1/3 = 2/3}}. Notice {{1/3}} is {{P(red)}} rather than {{P(\"not\" red)}}.",
      },
      {
        id: "probability-statistics-m1-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "theoretical-experimental-probability",
        question:
          "A biased 4-section spinner has {{P(Red) = 0.2}}, {{P(Blue) = 0.35}}, and {{P(Green) = 0.15}}, with the remaining section Yellow. How many times would you expect it to land on **Yellow** in {{300}} spins?",
        options: ["{{90}}", "{{75}}", "{{105}}", "{{210}}"],
        answerIndex: 0,
        hints: [
          "All four probabilities must add up to {{1}}, so find {{P(Yellow)}} first.",
          "Multiply {{P(Yellow)}} by {{300}}.",
        ],
        explanation:
          "{{P(Yellow) = 1 - (0.2 + 0.35 + 0.15) = 1 - 0.7 = 0.3}}. Expected frequency = {{300 * 0.3 = 90}}. Multiplying {{0.7 * 300}} gives {{210}}, which is the expected count for NOT Yellow.",
      },
      {
        id: "probability-statistics-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "theoretical-experimental-probability",
        question:
          "A drawing pin is dropped {{150}} times and lands point-up {{36}} times. What is the **relative frequency** of landing point-up as a decimal?",
        options: ["{{0.18}}", "{{0.24}}", "{{0.36}}", "{{0.76}}"],
        answerIndex: 1,
        hints: [
          "Relative frequency = successes ÷ total trials.",
          "Compute {{36 / 150}}.",
        ],
        explanation:
          "Relative frequency = {{36 / 150 = 6 / 25 = 0.24}}. Notice {{0.76}} is the relative frequency of landing point-down, and {{0.36}} wrongly assumes {{100}} trials.",
      },
      {
        id: "probability-statistics-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sample-space-tables-venn",
        question:
          "Two fair 6-sided dice are rolled and their scores are **added**. What is {{P(\"sum\" = 9)}}?",
        options: ["{{1/12}}", "{{1/6}}", "{{5/36}}", "{{1/9}}"],
        answerIndex: 3,
        hints: [
          "There are {{6 * 6 = 36}} equally likely ordered pairs.",
          "List every ordered pair whose sum is {{9}}: {{(3,6), (4,5), (5,4), (6,3)}}.",
        ],
        explanation:
          "There are {{4}} favourable ordered pairs out of {{36}}, giving {{4/36 = 1/9}}. Treating {{(3,6)}} and {{(6,3)}} as the same outcome wrongly halves the numerator to give {{2/36 = 1/18}}.",
      },
      {
        id: "probability-statistics-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sample-space-tables-venn",
        question:
          "Out of {{40}} students, {{22}} play Badminton, {{18}} play Chess, and {{9}} play **both**. How many students play **neither**?",
        options: ["{{0}}", "{{5}}", "{{9}}", "{{13}}"],
        answerIndex: 2,
        hints: [
          "Fill the middle overlap ({{9}}) first, then subtract {{9}} from {{22}} and from {{18}}.",
          "Add Badminton-only + both + Chess-only, then subtract from {{40}}.",
        ],
        explanation:
          "Badminton only = {{22 - 9 = 13}}; Chess only = {{18 - 9 = 9}}. Total playing at least one = {{13 + 9 + 9 = 31}}, leaving {{40 - 31 = 9}} playing neither. Forgetting to subtract the overlap wrongly makes {{22 + 18 = 40}} (zero neither).",
      },
      {
        id: "probability-statistics-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sample-space-tables-venn",
        question:
          "In a two-way table of {{60}} Year 9 students, {{14}} boys take the bus, {{16}} boys walk, {{18}} girls take the bus, and {{12}} girls walk. One student is picked at random from all {{60}}. What is {{P(\"Walk\")}}?",
        options: ["{{7/15}}", "{{8/15}}", "{{4/15}}", "{{2/5}}"],
        answerIndex: 0,
        hints: [
          "Add the boys who walk and the girls who walk.",
          "Divide the total walkers by {{60}} and simplify.",
        ],
        explanation:
          "Total students who walk = {{16 + 12 = 28}} out of {{60}}, so {{P(\"Walk\") = 28/60 = 7/15}}. Notice {{8/15}} is {{P(\"Bus\") = 32/60}}.",
      },
      {
        id: "probability-statistics-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "grouped-data-stem-leaf",
        question:
          "A grouped table records race times: {{0 <= t < 10}} (f = 2), {{10 <= t < 20}} (f = 5), {{20 <= t < 30}} (f = 8), {{30 <= t < 40}} (f = 5). What is the **estimated mean** time?",
        options: ["{{20}}", "{{23}}", "{{25}}", "{{115}}"],
        answerIndex: 1,
        hints: [
          "Find the four class midpoints: {{5, 15, 25, 35}}.",
          "Compute {{sum fx}} and divide by the total frequency {{2 + 5 + 8 + 5 = 20}}.",
        ],
        explanation:
          "{{sum fx = 2(5) + 5(15) + 8(25) + 5(35) = 10 + 75 + 200 + 175 = 460}}. Dividing by total frequency {{20}} gives {{460 / 20 = 23}}. Dividing {{460}} by {{4}} rows wrongly gives {{115}} (outside the data range!).",
      },
      {
        id: "probability-statistics-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "grouped-data-stem-leaf",
        question:
          "Find the **interquartile range (IQR)** of the ordered data set: {{11, 14, 16, 19, 23, 27, 30}}.",
        options: ["{{19}}", "{{16}}", "{{11}}", "{{13}}"],
        answerIndex: 3,
        hints: [
          "The median is the 4th value ({{19}}). Find the median of the lower three values (LQ) and the upper three values (UQ).",
          "Calculate {{\"IQR\" = \"UQ\" - \"LQ\"}}.",
        ],
        explanation:
          "Lower half {{11, 14, 16}} gives {{LQ = 14}}; upper half {{23, 27, 30}} gives {{UQ = 27}}. Therefore {{\"IQR\" = 27 - 14 = 13}}. Notice {{19}} is the range ({{30 - 11}}) and also the median.",
      },
      {
        id: "probability-statistics-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "grouped-data-stem-leaf",
        question:
          "An ordered stem-and-leaf diagram (Key: {{3 | 5 = 35}}) has rows `1 | 2 6 8`, `2 | 1 4 7 9`, and `3 | 0 5`. What is the **median**?",
        options: ["{{21}}", "{{23}}", "{{24}}", "{{27}}"],
        answerIndex: 2,
        hints: [
          "Count the total number of leaves: {{3 + 4 + 2 = 9}} values.",
          "Find the {{(9 + 1)/2 = 5}}-th value in order.",
        ],
        explanation:
          "Counting in order: 1st = 12, 2nd = 16, 3rd = 18, 4th = 21, **5th = 24**. Forgetting to include the stem digit {{2}} or miscounting to the 6th value wrongly gives {{27}}.",
      },
      {
        id: "probability-statistics-m1-q10",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "scatter-diagrams",
        question:
          "A scatter diagram plots daily outdoor temperature against household heating cost in winter. As outdoor temperature increases, heating cost tends to decrease. Which correlation is this?",
        options: [
          "Negative correlation",
          "Positive correlation",
          "Zero correlation",
          "Direct proportion",
        ],
        answerIndex: 0,
        hints: ["Does one variable go **down** as the other goes **up**?"],
        explanation:
          "When one variable decreases as the other increases, the points slope downwards left-to-right, showing **negative correlation**.",
      },
      {
        id: "probability-statistics-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "scatter-diagrams",
        question:
          "A café plots daily temperatures from {{12°C}} to {{30°C}} against iced-tea sales and draws a line of best fit. Why is using this line to predict sales at {{55°C}} **unreliable**?",
        options: [
          "It uses interpolation inside the data",
          "It uses extrapolation outside the data",
          "It ignores the vertical axis intercept",
          "It requires a curved bar chart instead",
        ],
        answerIndex: 1,
        hints: [
          "Compare {{55°C}} with the plotted range {{12°C}} to {{30°C}}.",
          "What is the statistical name for predicting **outside** the measured data range?",
        ],
        explanation:
          "{{55°C}} lies far outside the measured range ({{12°C}}–{{30°C}}), so predicting there is **extrapolation**, which is unreliable because the linear relationship may break down beyond observed values.",
      },
      {
        id: "probability-statistics-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "scatter-diagrams",
        question:
          "When drawing a line of best fit by eye on a scatter diagram that contains one clear **outlier**, how should you treat that outlier?",
        options: [
          "Force the line straight through it",
          "Join it to the origin at zero",
          "Tilt the line halfway toward it",
          "Ignore it and follow the main trend",
        ],
        answerIndex: 3,
        hints: [
          "An outlier does not follow the overall relationship.",
          "Should a single freak data point distort predictions for everyone else?",
        ],
        explanation:
          "An outlier sits far from the pattern, so you should **ignore it** and balance the straight line evenly through the main cluster of points.",
      },
      {
        id: "probability-statistics-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cumulative-frequency-box-plots",
        question:
          "When plotting a **cumulative frequency** diagram from a grouped table, at which horizontal value should you plot the cumulative frequency for the class {{20 <= x < 30}}?",
        options: [
          "At the lower boundary {{20}}",
          "At the upper boundary {{30}}",
          "At the class midpoint {{25}}",
          "At the class width value {{10}}",
        ],
        answerIndex: 1,
        hints: [
          "Remember the mnemonic: *Mean = Middle, Cumulative = Ceiling*.",
          "Up to which value are ALL observations in {{20 <= x < 30}} guaranteed to lie?",
        ],
        explanation:
          "Cumulative frequency counts everything **less than** the top of each interval, so it is ALWAYS plotted at the **upper class boundary** ({{30}}). Plotting at the midpoint ({{25}}) is a classic exam mistake.",
      },
      {
        id: "probability-statistics-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cumulative-frequency-box-plots",
        question:
          "A cumulative frequency curve represents {{60}} students' test scores. Which three cumulative frequency values do you read across from to find the **LQ**, **Median**, and **UQ**?",
        options: [
          "{{10}}, {{30}}, and {{50}}",
          "{{20}}, {{30}}, and {{40}}",
          "{{15}}, {{30}}, and {{45}}",
          "{{25}}, {{50}}, and {{75}}",
        ],
        answerIndex: 2,
        hints: [
          "Find {{25%}}, {{50%}}, and {{75%}} of {{N = 60}}.",
          "Calculate {{0.25 * 60}}, {{0.50 * 60}}, and {{0.75 * 60}}.",
        ],
        explanation:
          "For {{N = 60}}, {{25%}} is {{15}} (LQ), {{50%}} is {{30}} (Median), and {{75%}} is {{45}} (UQ). Reading at {{25, 50, 75}} only works when {{N = 100}}.",
      },
      {
        id: "probability-statistics-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "cumulative-frequency-box-plots",
        question:
          "A box plot shows Minimum = {{15}}, LQ = {{28}}, Median = {{40}}, UQ = {{54}}, and Maximum = {{72}}. What are its **IQR** and **Range**?",
        options: [
          "IQR = {{26}}, Range = {{57}}",
          "IQR = {{57}}, Range = {{26}}",
          "IQR = {{14}}, Range = {{57}}",
          "IQR = {{26}}, Range = {{40}}",
        ],
        answerIndex: 0,
        hints: [
          "{{\"IQR\" = \"UQ\" - \"LQ\"}} and {{\"Range\" = \"Max\" - \"Min\"}}.",
          "Compute {{54 - 28}} and {{72 - 15}}.",
        ],
        explanation:
          "{{\"IQR\" = 54 - 28 = 26}} and {{\"Range\" = 72 - 15 = 57}}. Swapping the two formulas reverses the pair, while {{54 - 40 = 14}} measures only the upper half of the box.",
      },
    ],
  },

  // =========================================================================
  // MCQ PAPER 2 — Deeper Probability, Tables, Scatter & Cumulative Frequency
  // =========================================================================
  {
    id: "probability-statistics-m2",
    title: "MCQ Paper 2 — Sample Spaces, Venn & Comparing Box Plots",
    questions: [
      {
        id: "probability-statistics-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "theoretical-experimental-probability",
        question:
          "Cards numbered {{1}} to {{20}} are placed in a hat and one card is drawn at random. What is the probability of picking a **prime number**?",
        options: ["{{7/20}}", "{{2/5}}", "{{9/20}}", "{{1/2}}"],
        answerIndex: 1,
        hints: [
          "Remember that {{1}} is NOT prime, and {{2}} IS the only even prime!",
          "Count all primes from {{1}} to {{20}}: {{2, 3, 5, 7, 11, 13, 17, 19}}.",
        ],
        explanation:
          "There are {{8}} prime numbers up to {{20}} ({{2, 3, 5, 7, 11, 13, 17, 19}}), so {{P(prime) = 8/20 = 2/5}}. Counting {{1}} as prime wrongly gives {{9/20}}, and forgetting {{2}} wrongly gives {{7/20}}.",
      },
      {
        id: "probability-statistics-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "theoretical-experimental-probability",
        question:
          "A biased spinner lands on Gold {{42}} times in {{200}} spins. Using this relative frequency, how many Golds would you expect in {{500}} spins?",
        options: ["{{84}}", "{{95}}", "{{126}}", "{{105}}"],
        answerIndex: 3,
        hints: [
          "Find the relative frequency first: {{42 / 200 = 0.21}}.",
          "Multiply {{0.21 * 500}} (or multiply {{42}} by {{2.5}}).",
        ],
        explanation:
          "Relative frequency = {{42 / 200 = 0.21}}, so expected Golds in {{500}} spins = {{500 * 0.21 = 105}}. Doubling {{42}} to {{84}} corresponds to {{400}} spins, not {{500}}.",
      },
      {
        id: "probability-statistics-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "theoretical-experimental-probability",
        question:
          "Four students test the same bent coin: Ali does {{20}} flips (12 Heads), Bella does {{50}} flips (28 Heads), Chen does {{400}} flips (244 Heads), and Dev does {{120}} flips (70 Heads). Whose single estimate of {{P(Heads)}} is **most reliable**?",
        options: [
          "Ali ({{12/20 = 0.60}})",
          "Bella ({{28/50 = 0.56}})",
          "Chen ({{244/400 = 0.61}})",
          "Dev ({{70/120 ~= 0.58}})",
        ],
        answerIndex: 2,
        hints: [
          "Reliability of an experimental probability depends on the **number of trials**.",
          "Which student carried out the most flips?",
        ],
        explanation:
          "Chen carried out the largest number of trials ({{400}} flips), so random fluctuation affects Chen's relative frequency the least, making it the most reliable single estimate.",
      },
      {
        id: "probability-statistics-m2-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "sample-space-tables-venn",
        question:
          "A fair coin is tossed and a fair 6-sided die is rolled. What is the probability of getting **Heads AND an even number**?",
        options: ["{{1/4}}", "{{1/2}}", "{{1/6}}", "{{1/3}}"],
        answerIndex: 0,
        hints: [
          "Total outcomes in the sample space = {{2 * 6 = 12}}.",
          "Favourable outcomes are {{(H, 2), (H, 4), (H, 6)}}.",
        ],
        explanation:
          "There are {{3}} favourable pairs out of {{12}} equally likely pairs, giving {{3/12 = 1/4}} (also {{(1/2) * (1/2) = 1/4}}). Choosing {{1/2}} counts either Heads or even, not both together.",
      },
      {
        id: "probability-statistics-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sample-space-tables-venn",
        question:
          "Two fair 4-sided spinners numbered {{1, 2, 3, 4}} are spun and their scores are **multiplied**. What is {{P(\"product\" >= 8)}}?",
        options: ["{{1/4}}", "{{3/8}}", "{{5/16}}", "{{1/2}}"],
        answerIndex: 1,
        hints: [
          "There are {{4 * 4 = 16}} equally likely pairs.",
          "List every pair with product at least {{8}}: {{(2,4), (3,3), (3,4), (4,2), (4,3), (4,4)}}.",
        ],
        explanation:
          "Counting carefully, {{6}} pairs give a product of {{8}} or more ({{8, 9, 12, 8, 12, 16}}) out of {{16}}, so {{P = 6/16 = 3/8}}. Forgetting one of {{(2,4)}} or {{(4,2)}} wrongly gives {{5/16}}.",
      },
      {
        id: "probability-statistics-m2-q06",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "sample-space-tables-venn",
        question:
          "In a group of {{50}} students, {{28}} study French, {{24}} study Spanish, and {{6}} study **neither** language. How many students study **both** French and Spanish?",
        options: ["{{2}}", "{{4}}", "{{6}}", "{{8}}"],
        answerIndex: 3,
        hints: [
          "First find how many students study **at least one** language: {{50 - 6 = 44}}.",
          "Compare {{28 + 24 = 52}} with {{44}} — the excess is the double-counted overlap!",
        ],
        explanation:
          "Exactly {{50 - 6 = 44}} students are inside the two Venn circles. Since {{28 + 24 = 52}}, the overlap counted twice is {{52 - 44 = 8}} students. Subtracting {{50}} instead of {{44}} wrongly gives {{2}}.",
      },
      {
        id: "probability-statistics-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "grouped-data-stem-leaf",
        question:
          "A grouped table shows distances (km) of {{30}} walks: {{0 <= d < 5}} (f = 3), {{5 <= d < 10}} (f = 7), {{10 <= d < 15}} (f = 12), {{15 <= d < 20}} (f = 8). Which interval is the **median class**?",
        options: [
          "{{10 <= d < 15}}",
          "{{5 <= d < 10}}",
          "{{15 <= d < 20}}",
          "{{0 <= d < 5}}",
        ],
        answerIndex: 0,
        hints: [
          "Find the running totals (cumulative frequencies): {{3, 10, 22, 30}}.",
          "For {{30}} values, where does the {{15.5}}-th value fall?",
        ],
        explanation:
          "The cumulative frequencies are {{3, 10, 22, 30}}. The {{15}}-th and {{16}}-th values lie between {{10}} and {{22}}, which is inside {{10 <= d < 15}}.",
      },
      {
        id: "probability-statistics-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "grouped-data-stem-leaf",
        question:
          "Estimate the **mean** from this grouped table: {{0 <= x < 4}} (f = 4), {{4 <= x < 8}} (f = 6), {{8 <= x < 12}} (f = 7), {{12 <= x < 16}} (f = 3).",
        options: ["{{7.0}}", "{{8.0}}", "{{7.8}}", "{{8.4}}"],
        answerIndex: 2,
        hints: [
          "Class midpoints are {{2, 6, 10, 14}}.",
          "Calculate {{(4*2 + 6*6 + 7*10 + 3*14) / 20}}.",
        ],
        explanation:
          "{{sum fx = 8 + 36 + 70 + 42 = 156}}, and total frequency {{sum f = 4 + 6 + 7 + 3 = 20}}, so estimated mean = {{156 / 20 = 7.8}}. Taking the average of the midpoints ({{8.0}}) ignores the unequal frequencies.",
      },
      {
        id: "probability-statistics-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "grouped-data-stem-leaf",
        question:
          "An ordered stem-and-leaf diagram (Key: {{4 | 2 = 4.2 cm}}) shows rows `3 | 4 8`, `4 | 1 2 5 9`, `5 | 0 6`. What is the **range** of the data?",
        options: ["{{22 cm}}", "{{2.2 cm}}", "{{1.6 cm}}", "{{2.0 cm}}"],
        answerIndex: 1,
        hints: [
          "Read the Key carefully: `3 | 4` means {{3.4 cm}} and `5 | 6` means {{5.6 cm}}.",
          "Subtract Minimum from Maximum: {{5.6 - 3.4}}.",
        ],
        explanation:
          "Using the Key {{4 | 2 = 4.2 cm}}, the largest value is {{5.6 cm}} and the smallest is {{3.4 cm}}, giving Range = {{5.6 - 3.4 = 2.2 cm}}. Ignoring the decimal point in the Key wrongly gives {{22 cm}}.",
      },
      {
        id: "probability-statistics-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "scatter-diagrams",
        question:
          "A line of best fit for a scatter plot (with {{x}} from {{2}} to {{20}}) has equation {{y = 2.5x + 15}}. What is the estimated value of {{y}} when {{x = 12}}?",
        options: ["{{30}}", "{{35}}", "{{40}}", "{{45}}"],
        answerIndex: 3,
        hints: [
          "Substitute {{x = 12}} into {{y = 2.5x + 15}}.",
          "Multiply {{2.5 * 12}} first, then add {{15}}.",
        ],
        explanation:
          "{{y = 2.5(12) + 15 = 30 + 15 = 45}}. Forgetting to add the y-intercept {{15}} wrongly stops at {{30}}.",
      },
      {
        id: "probability-statistics-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "scatter-diagrams",
        question:
          "Across primary school pupils aged 5–11, shoe size and reading test score show strong **positive correlation**. What is the best statistical conclusion?",
        options: [
          "Older pupils have both larger feet and better reading",
          "Buying bigger shoes directly improves reading ability",
          "Reading more books makes children's feet grow faster",
          "There must be zero correlation in secondary schools",
        ],
        answerIndex: 0,
        hints: [
          "Remember: correlation does NOT prove causation!",
          "What hidden third variable increases both foot size and reading skill?",
        ],
        explanation:
          "**Age** is a confounding variable that drives both shoe size and reading ability upward together—so correlation here does NOT mean one causes the other.",
      },
      {
        id: "probability-statistics-m2-q12",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "scatter-diagrams",
        question:
          "A scatter diagram of students' house numbers against their maths scores shows points scattered randomly all over the grid. What should you conclude?",
        options: [
          "Weak positive correlation; draw a gentle slope",
          "Weak negative correlation; draw a flat line",
          "Zero correlation; do not draw a line of best fit",
          "Strong correlation once the outliers are removed",
        ],
        answerIndex: 2,
        hints: [
          "Is there any linear relationship between a house number and a maths score?",
        ],
        explanation:
          "Randomly scattered points indicate **zero (no) correlation**, so a line of best fit would be meaningless and must NOT be drawn.",
      },
      {
        id: "probability-statistics-m2-q13",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "cumulative-frequency-box-plots",
        question:
          "Five consecutive class intervals have frequencies {{5, 11, 18, 10, 6}}. What are the five **cumulative frequencies** in order?",
        options: [
          "{{5, 11, 18, 10, 6}}",
          "{{5, 16, 29, 39, 45}}",
          "{{5, 16, 34, 46, 52}}",
          "{{5, 16, 34, 44, 50}}",
        ],
        answerIndex: 3,
        hints: [
          "Cumulative frequency is the **running total**: add each new frequency to the previous total.",
          "{{5}}, {{5 + 11 = 16}}, {{16 + 18 = 34}}, ...",
        ],
        explanation:
          "Running totals are {{5}}, {{5 + 11 = 16}}, {{16 + 18 = 34}}, {{34 + 10 = 44}}, and {{44 + 6 = 50}}.",
      },
      {
        id: "probability-statistics-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cumulative-frequency-box-plots",
        question:
          "A cumulative frequency curve shows the exam marks of {{120}} students. At mark {{65}}, the cumulative frequency is {{90}}. How many students scored **more than** {{65}} marks?",
        options: ["{{90}}", "{{30}}", "{{45}}", "{{55}}"],
        answerIndex: 1,
        hints: [
          "A cumulative frequency of {{90}} means {{90}} students scored **65 or less**.",
          "Subtract {{90}} from the total number of students {{120}}.",
        ],
        explanation:
          "Since {{90}} students scored {{65}} or less, the number scoring **more than** {{65}} is {{120 - 90 = 30}}. Answering {{90}} forgets to subtract from {{120}}.",
      },
      {
        id: "probability-statistics-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "cumulative-frequency-box-plots",
        question:
          "Class A has Median = {{62}} and IQR = {{18}} on a test. Class B has Median = {{58}} and IQR = {{10}}. Which statement correctly compares both distributions?",
        options: [
          "Class A scored higher on average, while Class B was more consistent",
          "Class B scored higher on average, while Class A was more consistent",
          "Class A scored higher on average and was also more consistent",
          "Class B scored higher on average and was also more consistent",
        ],
        answerIndex: 0,
        hints: [
          "Higher **median** = higher average score.",
          "**Smaller IQR** = middle 50% packed tighter = **more consistent**!",
        ],
        explanation:
          "Class A's higher median ({{62 > 58}}) means higher scores on average, while Class B's smaller IQR ({{10 < 18}}) means less spread and therefore **more consistent** scores.",
      },
    ],
  },

  // =========================================================================
  // MCQ PAPER 3 — Multi-Step, Conditional Tables, Unequal Widths & Reverse
  // =========================================================================
  {
    id: "probability-statistics-m3",
    title: "MCQ Paper 3 — Conditional Tables, Unequal Widths & Stretch",
    questions: [
      {
        id: "probability-statistics-m3-q01",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "theoretical-experimental-probability",
        question:
          "A bag contains only red, blue, and green marbles. {{P(red) = 0.4}}, and the ratio of blue to green marbles is {{1 : 2}}. What is {{P(green)}}?",
        options: ["{{0.2}}", "{{0.3}}", "{{0.6}}", "{{0.4}}"],
        answerIndex: 3,
        hints: [
          "First find the combined probability of blue or green: {{1 - 0.4 = 0.6}}.",
          "Share {{0.6}} in the ratio {{1 : 2}} ({{3}} parts total).",
        ],
        explanation:
          "Blue and green share the remaining {{1 - 0.4 = 0.6}} in the ratio {{1 : 2}}. One part is {{0.6 / 3 = 0.2}}, so {{P(blue) = 0.2}} and {{P(green) = 2 * 0.2 = 0.4}}.",
      },
      {
        id: "probability-statistics-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "theoretical-experimental-probability",
        question:
          "To test a weighted die, Leo rolls it {{200}} times and gets {{38}} sixes; Mia rolls the same die {{300}} times and gets {{72}} sixes. Combining ALL their data, what is the best estimate of {{P(6)}}?",
        options: ["{{0.19}}", "{{0.22}}", "{{0.24}}", "{{0.215}}"],
        answerIndex: 1,
        hints: [
          "Combine total sixes ({{38 + 72}}) and total rolls ({{200 + 300}}) — do NOT just average {{0.19}} and {{0.24}}!",
          "Compute {{110 / 500}}.",
        ],
        explanation:
          "Combined sixes = {{38 + 72 = 110}} out of {{200 + 300 = 500}} rolls, giving {{110 / 500 = 0.22}}. Averaging {{0.19}} and {{0.24}} wrongly gives {{0.215}} because Mia did more rolls than Leo.",
      },
      {
        id: "probability-statistics-m3-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "theoretical-experimental-probability",
        question:
          "A biased coin has {{P(Heads) = 0.65}}. If it is flipped {{800}} times, how many **Tails** would you expect?",
        options: ["{{280}}", "{{520}}", "{{400}}", "{{320}}"],
        answerIndex: 0,
        hints: [
          "Find {{P(Tails) = 1 - 0.65 = 0.35}} first.",
          "Multiply {{800 * 0.35}}.",
        ],
        explanation:
          "{{P(Tails) = 1 - 0.65 = 0.35}}, so expected Tails = {{800 * 0.35 = 280}}. Multiplying {{800 * 0.65 = 520}} gives expected **Heads** instead of Tails.",
      },
      {
        id: "probability-statistics-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sample-space-tables-venn",
        question:
          "Two fair 6-sided dice are rolled. What is the probability of rolling a **double** (both dice showing the same number)?",
        options: ["{{1/36}}", "{{1/12}}", "{{1/6}}", "{{1/3}}"],
        answerIndex: 2,
        hints: [
          "List the doubles: {{(1,1), (2,2), (3,3), (4,4), (5,5), (6,6)}}.",
          "Divide by the {{36}} equally likely pairs.",
        ],
        explanation:
          "There are {{6}} doubles out of {{36}} outcomes, so {{P(double) = 6/36 = 1/6}}. Notice {{1/36}} is the probability of one **specific** double (such as double 6).",
      },
      {
        id: "probability-statistics-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sample-space-tables-venn",
        question:
          "In a survey of {{60}} pupils: {{30}} are in Year 9 ({{18}} prefer Swimming, {{12}} prefer Running) and {{30}} are in Year 10 ({{10}} prefer Swimming, {{20}} prefer Running). A pupil is chosen at random **from Year 9**. What is the probability they prefer Swimming?",
        options: ["{{3/10}}", "{{7/15}}", "{{9/14}}", "{{3/5}}"],
        answerIndex: 3,
        hints: [
          "Watch the denominator: the pupil is chosen **from Year 9** ({{30}} pupils), not from all {{60}}!",
          "Compute {{18 / 30}} and simplify.",
        ],
        explanation:
          "Out of the {{30}} Year 9 pupils, {{18}} prefer Swimming, giving {{18/30 = 3/5}}. Using all {{60}} pupils as the denominator wrongly gives {{18/60 = 3/10}}.",
      },
      {
        id: "probability-statistics-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sample-space-tables-venn",
        question:
          "In a Venn diagram of {{30}} items: {{X}} only has {{9}}, {{X ∩ Y}} has {{6}}, {{Y}} only has {{11}}, and outside both circles has {{4}}. What is {{P(X ∪ Y)}}?",
        options: ["{{1/5}}", "{{13/15}}", "{{2/3}}", "{{1/2}}"],
        answerIndex: 1,
        hints: [
          "{{X ∪ Y}} means everything inside circle {{X}} OR circle {{Y}} (including the overlap).",
          "Add {{9 + 6 + 11}} and divide by {{30}}.",
        ],
        explanation:
          "Elements in {{X ∪ Y}} = {{9 + 6 + 11 = 26}} out of {{30}}, so {{P(X ∪ Y) = 26/30 = 13/15}}. Notice {{6/30 = 1/5}} is {{P(X ∩ Y)}}, and {{20/30 = 2/3}} wrongly excludes the overlap.",
      },
      {
        id: "probability-statistics-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "grouped-data-stem-leaf",
        question:
          "A grouped table has **unequal** class widths: {{0 <= t < 10}} (f = 6), {{10 <= t < 20}} (f = 8), and {{20 <= t < 40}} (f = 6). What is the **estimated mean**?",
        options: ["{{16.5}}", "{{15.0}}", "{{18.0}}", "{{20.0}}"],
        answerIndex: 0,
        hints: [
          "Careful with the third midpoint: the midpoint of {{20 <= t < 40}} is {{(20 + 40)/2 = 30}}, NOT {{25}}!",
          "Compute {{(6*5 + 8*15 + 6*30) / 20}}.",
        ],
        explanation:
          "Midpoints are {{5, 15, 30}}, so {{sum fx = 30 + 120 + 180 = 330}} and total frequency = {{20}}, giving {{330 / 20 = 16.5}}. Assuming the third midpoint is {{25}} wrongly gives {{15.0}}.",
      },
      {
        id: "probability-statistics-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "grouped-data-stem-leaf",
        question:
          "Find the **IQR** of the {{8}} ordered values: {{6, 9, 12, 15, 19, 22, 26, 30}}.",
        options: ["{{12.5}}", "{{14.0}}", "{{13.5}}", "{{24.0}}"],
        answerIndex: 2,
        hints: [
          "Split into lower half ({{6, 9, 12, 15}}) and upper half ({{19, 22, 26, 30}}).",
          "Find the median of each 4-number half: {{LQ = 10.5}} and {{UQ = 24}}, then subtract.",
        ],
        explanation:
          "{{LQ = (9 + 12)/2 = 10.5}} and {{UQ = (22 + 26)/2 = 24}}, so {{\"IQR\" = 24 - 10.5 = 13.5}}. Notice {{24.0}} is the full range ({{30 - 6}}).",
      },
      {
        id: "probability-statistics-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "grouped-data-stem-leaf",
        question:
          "An ordered stem-and-leaf diagram (Key: {{2 | 3 = 23}}) has rows `2 | 3 5 5 8` and `3 | 1 4 4 4 7`. What are the **mode** and **median**?",
        options: [
          "Mode = {{25}}, Median = {{31}}",
          "Mode = {{34}}, Median = {{28}}",
          "Mode = {{4}}, Median = {{31}}",
          "Mode = {{34}}, Median = {{31}}",
        ],
        answerIndex: 3,
        hints: [
          "Mode = value appearing most often (don't forget the stem digit {{3}}!).",
          "There are {{9}} values total, so the median is the 5th value in order.",
        ],
        explanation:
          "{{34}} appears three times (the mode), and the 5th of the {{9}} ordered values ({{23, 25, 25, 28, 31, 34, 34, 34, 37}}) is {{31}}. Writing Mode = {{4}} forgets to read the stem digit.",
      },
      {
        id: "probability-statistics-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "scatter-diagrams",
        question:
          "A straight line of best fit passes through {{(4, 80)}} and {{(10, 50)}}. What value of {{y}} does it predict when {{x = 7}}?",
        options: ["{{65}}", "{{60}}", "{{70}}", "{{55}}"],
        answerIndex: 0,
        hints: [
          "Notice {{x = 7}} is **exactly halfway** between {{x = 4}} and {{x = 10}}!",
          "Or find the gradient {{m = (50 - 80) / (10 - 4) = -5}} and step {{3}} units right from {{(4, 80)}}.",
        ],
        explanation:
          "Since {{7}} is the midpoint of {{4}} and {{10}}, {{y}} is the midpoint of {{80}} and {{50}}: {{(80 + 50)/2 = 65}} (equivalently {{y = -5x + 100}}, giving {{-5(7) + 100 = 65}}).",
      },
      {
        id: "probability-statistics-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "grouped-data-stem-leaf",
        question:
          "Why is the **interquartile range (IQR)** often preferred over the **range** when comparing the spread of two distributions?",
        options: [
          "The IQR is always larger than the range",
          "The IQR uses every single value equally",
          "The IQR is not affected by extreme outliers",
          "The IQR equals half of the data's mean",
        ],
        answerIndex: 2,
        hints: [
          "Which two values determine the range, and which determine the IQR?",
          "What happens if one freak value is ten times larger than all the others?",
        ],
        explanation:
          "Because the IQR measures only the spread of the **middle 50%** ({{UQ - LQ}}), extreme high or low outliers at the ends cannot distort it—unlike the range ({{Max - Min}}).",
      },
      {
        id: "probability-statistics-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cumulative-frequency-box-plots",
        question:
          "On any box plot, approximately what **percentage** of the data lies between the **Lower Quartile (LQ)** and the **Maximum**?",
        options: ["{{50%}}", "{{75%}}", "{{25%}}", "{{66%}}"],
        answerIndex: 1,
        hints: [
          "Each of the 4 sections of a box plot contains {{25%}} of the data.",
          "Count how many sections lie between LQ and Maximum (left half of box + right half of box + right whisker).",
        ],
        explanation:
          "Three of the four quarters lie above the Lower Quartile (LQ → Median, Median → UQ, and UQ → Max), which is {{3 * 25% = 75%}} of the data.",
      },
      {
        id: "probability-statistics-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "cumulative-frequency-box-plots",
        question:
          "A cumulative frequency curve represents {{160}} athletes' scores. Exactly {{20%}} of the athletes scored **more than** {{75}} points. What is the cumulative frequency at {{75}} points?",
        options: ["{{128}}", "{{32}}", "{{140}}", "{{80}}"],
        answerIndex: 0,
        hints: [
          "If {{20%}} scored MORE than {{75}}, what percentage scored {{75}} or LESS?",
          "Calculate {{80%}} of {{160}} (or {{160 - 0.2 * 160}}).",
        ],
        explanation:
          "{{20%}} of {{160}} is {{32}} athletes scoring above {{75}}, so {{160 - 32 = 128}} athletes scored {{75}} or less (CF = {{128}}). Answering {{32}} gives the upper tail rather than the cumulative frequency.",
      },
      {
        id: "probability-statistics-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "cumulative-frequency-box-plots",
        question:
          "A box plot is drawn with Minimum = {{8}}, Range = {{42}}, Lower Quartile = {{16}}, and IQR = {{19}}. What are the **Upper Quartile** and **Maximum**?",
        options: [
          "UQ = {{35}}, Max = {{42}}",
          "UQ = {{27}}, Max = {{50}}",
          "UQ = {{35}}, Max = {{50}}",
          "UQ = {{38}}, Max = {{50}}",
        ],
        answerIndex: 2,
        hints: [
          "Use {{\"UQ\" = \"LQ\" + \"IQR\"}} and {{\"Max\" = \"Min\" + \"Range\"}}.",
          "Calculate {{16 + 19}} and {{8 + 42}}.",
        ],
        explanation:
          "{{\"UQ\" = 16 + 19 = 35}} and {{\"Max\" = 8 + 42 = 50}}. Forgetting to add the Minimum ({{8}}) to the Range wrongly leaves Max = {{42}}.",
      },
      {
        id: "probability-statistics-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "grouped-data-stem-leaf",
        question:
          "A grouped table has intervals {{0 <= x < 10}} (f = 4), {{10 <= x < 20}} (f = {{k}}), and {{20 <= x < 30}} (f = 6). If the **estimated mean** is {{16}}, what is the value of {{k}}?",
        options: ["{{6}}", "{{8}}", "{{12}}", "{{10}}"],
        answerIndex: 3,
        hints: [
          "Use midpoints {{5, 15, 25}}: {{sum fx = 4(5) + 15k + 6(25) = 170 + 15k}} and {{sum f = 10 + k}}.",
          "Solve {{(170 + 15k) / (10 + k) = 16}}.",
        ],
        explanation:
          "Cross-multiplying gives {{170 + 15k = 16(10 + k) = 160 + 16k}}, so {{k = 170 - 160 = 10}}. Check: {{(20 + 150 + 150) / 20 = 320 / 20 = 16}}.",
      },
    ],
  },
];
