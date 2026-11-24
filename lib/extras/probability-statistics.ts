import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "In a room of just **23** people, there is already a better than 50% chance two people share a birthday—and why did a 17th-century gambler's argument over an interrupted dice game launch all of modern probability?",
  didYouKnow: [
    "In **Settlers of Catan**, rolling two 6-sided dice makes **7** the most frequent sum ({{6/36 = 1/6}}), while **6** and **8** come second ({{5/36}} each)—that is why their number tokens are printed in bright red!",
    "Statistician **John Tukey** invented BOTH the **stem-and-leaf diagram** AND the **box plot** in the 1970s so scientists could inspect datasets rapidly using only pencil and paper!",
    "In **Anscombe's Quartet**, four wildly different scatter diagrams have the **exact same** mean, spread, and line of best fit—proving why you should ALWAYS plot a scatter graph before trusting summary numbers alone.",
    "The **Gambler's Fallacy** got its name in Monte Carlo in 1913, when a roulette wheel landed on Black **26 times in a row** and gamblers lost millions betting on Red because they thought Red was 'overdue'.",
    "Weather apps rarely predict rain with 100% certainty: instead they run dozens of 'ensemble' simulations with tiny starting tweaks and report the **relative frequency** of rain across those runs.",
  ],
  activities: [
    {
      title: "The Drawing-Pin / Bottle-Cap Relative Frequency Experiment",
      emoji: "📌",
      materials: [
        "One plastic bottle cap (or coin/thumbtack)",
        "Tally sheet & pen",
        "Calculator",
      ],
      steps: [
        "Toss the bottle cap {{10}} times and record how many times it lands **open-side up**. Calculate your relative frequency.",
        "Keep tossing until you reach {{50}} total tosses, then {{100}} total tosses, recording the running relative frequency after every {{10}} tosses.",
        "Plot a quick line graph of relative frequency (y-axis) against total tosses (x-axis).",
        "Watch how wildly the graph jumps between {{10}} and {{30}} tosses—and how calmly it flattens out near {{100}} tosses!",
      ],
      maths:
        "Because a bottle cap is NOT symmetrical, theoretical probability cannot tell you {{P(\"open-side up\")}}. Running a large number of trials invokes the **Law of Large Numbers**, turning noisy small-sample luck into a stable empirical probability.",
    },
    {
      title: "Build a Two-Dice Difference Sample Space Race",
      emoji: "🎲",
      materials: [
        "Two 6-sided dice",
        "A sheet of paper numbered 0, 1, 2, 3, 4, 5 along the bottom",
        "Six counters (or coins)",
      ],
      steps: [
        "Place one counter on each 'horse' numbered {{0, 1, 2, 3, 4, 5}}. Each time you roll two dice, subtract the smaller score from the larger score and move that horse forward one step.",
        "Before starting, predict which horse will win a race to {{8}} steps—many people pick {{0}} or {{2}}!",
        "Play the race and record the winner, then build the complete {{6 * 6}} **sample space grid** of differences.",
        "Count how many of the {{36}} squares give each difference: {{0}} has {{6}}, **{{1}} has {{10}}**, {{2}} has {{8}}, {{3}} has {{6}}, {{4}} has {{4}}, and {{5}} has only {{2}}!",
      ],
      maths:
        "Horse **1** has probability {{10/36 = 5/18}}—nearly twice as likely as horse {{0}} ({{6/36}}) and five times as likely as horse {{5}} ({{2/36}}). Listing the full sample space turns a surprising paradox into an instant visual proof!",
    },
  ],
  bonusDiagrams: [
    {
      title: "Full 6 × 6 Two-Dice Sum Sample Space (36 Equally Likely Outcomes)",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Complete 6 by 6 sample space table of sums of two dice highlighting the main diagonal of six 7s">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface-2)"/>
  <text x="175" y="26" font-size="13" font-weight="800" fill="var(--ink)" text-anchor="middle">Two Fair Dice — Sum Grid (36 pairs)</text>
  <!-- Grid box on left: cols x = 68, 102, 136, 170, 204, 238, 272; rows y = 52, 82, 112, 142, 172, 202, 232 -->
  <rect x="34" y="36" width="276" height="202" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.4"/>
  <!-- Highlight diagonal sum = 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) -->
  <rect x="260" y="62" width="30" height="24" rx="4" fill="var(--good-soft)"/>
  <rect x="224" y="90" width="30" height="24" rx="4" fill="var(--good-soft)"/>
  <rect x="188" y="118" width="30" height="24" rx="4" fill="var(--good-soft)"/>
  <rect x="152" y="146" width="30" height="24" rx="4" fill="var(--good-soft)"/>
  <rect x="116" y="174" width="30" height="24" rx="4" fill="var(--good-soft)"/>
  <rect x="80" y="202" width="30" height="24" rx="4" fill="var(--good-soft)"/>

  <!-- Column headers -->
  <text x="58" y="55" font-size="11" font-weight="800" fill="var(--ink-2)" text-anchor="middle">+</text>
  <text x="95" y="55" font-size="11" font-weight="800" fill="var(--brand)" text-anchor="middle">1</text>
  <text x="131" y="55" font-size="11" font-weight="800" fill="var(--brand)" text-anchor="middle">2</text>
  <text x="167" y="55" font-size="11" font-weight="800" fill="var(--brand)" text-anchor="middle">3</text>
  <text x="203" y="55" font-size="11" font-weight="800" fill="var(--brand)" text-anchor="middle">4</text>
  <text x="239" y="55" font-size="11" font-weight="800" fill="var(--brand)" text-anchor="middle">5</text>
  <text x="275" y="55" font-size="11" font-weight="800" fill="var(--brand)" text-anchor="middle">6</text>

  <!-- Row 1 -->
  <text x="58" y="79" font-size="11" font-weight="800" fill="var(--brand)" text-anchor="middle">1</text>
  <text x="95" y="79" font-size="11" fill="var(--ink)" text-anchor="middle">2</text>
  <text x="131" y="79" font-size="11" fill="var(--ink)" text-anchor="middle">3</text>
  <text x="167" y="79" font-size="11" fill="var(--ink)" text-anchor="middle">4</text>
  <text x="203" y="79" font-size="11" fill="var(--ink)" text-anchor="middle">5</text>
  <text x="239" y="79" font-size="11" fill="var(--ink)" text-anchor="middle">6</text>
  <text x="275" y="79" font-size="11" font-weight="800" fill="var(--good)" text-anchor="middle">7</text>

  <!-- Row 2 -->
  <text x="58" y="107" font-size="11" font-weight="800" fill="var(--brand)" text-anchor="middle">2</text>
  <text x="95" y="107" font-size="11" fill="var(--ink)" text-anchor="middle">3</text>
  <text x="131" y="107" font-size="11" fill="var(--ink)" text-anchor="middle">4</text>
  <text x="167" y="107" font-size="11" fill="var(--ink)" text-anchor="middle">5</text>
  <text x="203" y="107" font-size="11" fill="var(--ink)" text-anchor="middle">6</text>
  <text x="239" y="107" font-size="11" font-weight="800" fill="var(--good)" text-anchor="middle">7</text>
  <text x="275" y="107" font-size="11" fill="var(--ink)" text-anchor="middle">8</text>

  <!-- Row 3 -->
  <text x="58" y="135" font-size="11" font-weight="800" fill="var(--brand)" text-anchor="middle">3</text>
  <text x="95" y="135" font-size="11" fill="var(--ink)" text-anchor="middle">4</text>
  <text x="131" y="135" font-size="11" fill="var(--ink)" text-anchor="middle">5</text>
  <text x="167" y="135" font-size="11" fill="var(--ink)" text-anchor="middle">6</text>
  <text x="203" y="135" font-size="11" font-weight="800" fill="var(--good)" text-anchor="middle">7</text>
  <text x="239" y="135" font-size="11" fill="var(--ink)" text-anchor="middle">8</text>
  <text x="275" y="135" font-size="11" fill="var(--ink)" text-anchor="middle">9</text>

  <!-- Row 4 -->
  <text x="58" y="163" font-size="11" font-weight="800" fill="var(--brand)" text-anchor="middle">4</text>
  <text x="95" y="163" font-size="11" fill="var(--ink)" text-anchor="middle">5</text>
  <text x="131" y="163" font-size="11" fill="var(--ink)" text-anchor="middle">6</text>
  <text x="167" y="163" font-size="11" font-weight="800" fill="var(--good)" text-anchor="middle">7</text>
  <text x="203" y="163" font-size="11" fill="var(--ink)" text-anchor="middle">8</text>
  <text x="239" y="163" font-size="11" fill="var(--ink)" text-anchor="middle">9</text>
  <text x="275" y="163" font-size="11" fill="var(--ink)" text-anchor="middle">10</text>

  <!-- Row 5 -->
  <text x="58" y="191" font-size="11" font-weight="800" fill="var(--brand)" text-anchor="middle">5</text>
  <text x="95" y="191" font-size="11" fill="var(--ink)" text-anchor="middle">6</text>
  <text x="131" y="191" font-size="11" font-weight="800" fill="var(--good)" text-anchor="middle">7</text>
  <text x="167" y="191" font-size="11" fill="var(--ink)" text-anchor="middle">8</text>
  <text x="203" y="191" font-size="11" fill="var(--ink)" text-anchor="middle">9</text>
  <text x="239" y="191" font-size="11" fill="var(--ink)" text-anchor="middle">10</text>
  <text x="275" y="191" font-size="11" fill="var(--ink)" text-anchor="middle">11</text>

  <!-- Row 6 -->
  <text x="58" y="219" font-size="11" font-weight="800" fill="var(--brand)" text-anchor="middle">6</text>
  <text x="95" y="219" font-size="11" font-weight="800" fill="var(--good)" text-anchor="middle">7</text>
  <text x="131" y="219" font-size="11" fill="var(--ink)" text-anchor="middle">8</text>
  <text x="167" y="219" font-size="11" fill="var(--ink)" text-anchor="middle">9</text>
  <text x="203" y="219" font-size="11" fill="var(--ink)" text-anchor="middle">10</text>
  <text x="239" y="219" font-size="11" fill="var(--ink)" text-anchor="middle">11</text>
  <text x="275" y="219" font-size="11" fill="var(--ink)" text-anchor="middle">12</text>

  <!-- Right Panel: Key probabilities -->
  <rect x="328" y="36" width="212" height="202" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.4"/>
  <text x="434" y="62" font-size="13" font-weight="800" fill="var(--ink)" text-anchor="middle">Diagonal Symmetry</text>
  <line x1="346" y1="72" x2="522" y2="72" stroke="var(--line)" stroke-width="1"/>
  <text x="346" y="96" font-size="12" font-weight="700" fill="var(--good)">Sum = 7:   6/36 = 1/6</text>
  <text x="346" y="120" font-size="12" font-weight="600" fill="var(--ink)">Sum = 6 or 8:   5/36 each</text>
  <text x="346" y="144" font-size="12" font-weight="600" fill="var(--ink)">Sum = 5 or 9:   4/36 = 1/9</text>
  <text x="346" y="168" font-size="12" font-weight="600" fill="var(--ink)">Sum = 4 or 10:  3/36 = 1/12</text>
  <text x="346" y="192" font-size="12" font-weight="600" fill="var(--ink)">Sum = 2 or 12:  1/36 each</text>
  <text x="434" y="222" font-size="11" font-weight="700" fill="var(--brand)" text-anchor="middle">Always count ordered pairs!</text>
</svg>`,
      caption:
        "Sums run along clean diagonals: 7 appears six times (6/36 = 1/6), making it the peak of the triangular distribution.",
    },
    {
      title: "Anatomy of a Box Plot — Four Equal 25% Quarters",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Anatomy of a box plot showing each of the four regions holds 25 percent of the data even when widths differ">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface-2)"/>
  <text x="280" y="32" font-size="15" font-weight="800" fill="var(--ink)" text-anchor="middle">Every Section Holds 25% of the Data (Regardless of Width!)</text>
  <!-- Box plot container -->
  <rect x="26" y="48" width="508" height="176" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.4"/>
  <!-- Min=66, LQ=140, Med=240, UQ=330, Max=494 (intentionally skewed right!) -->
  <!-- Quarter brackets above -->
  <rect x="66" y="64" width="74" height="24" rx="5" fill="var(--surface-2)"/>
  <text x="103" y="80" font-size="12" font-weight="800" fill="var(--ink-2)" text-anchor="middle">25%</text>

  <rect x="140" y="64" width="100" height="24" rx="5" fill="var(--brand-soft)"/>
  <text x="190" y="80" font-size="12" font-weight="800" fill="var(--brand)" text-anchor="middle">25%</text>

  <rect x="240" y="64" width="90" height="24" rx="5" fill="var(--good-soft)"/>
  <text x="285" y="80" font-size="12" font-weight="800" fill="var(--good)" text-anchor="middle">25%</text>

  <rect x="330" y="64" width="164" height="24" rx="5" fill="var(--bad-soft)"/>
  <text x="412" y="80" font-size="12" font-weight="800" fill="var(--bad)" text-anchor="middle">25% (more spread out!)</text>

  <!-- Box plot graphic at y=126 -->
  <line x1="66" y1="126" x2="140" y2="126" stroke="var(--ink)" stroke-width="2.6"/>
  <line x1="66" y1="108" x2="66" y2="144" stroke="var(--ink)" stroke-width="2.8"/>
  <rect x="140" y="102" width="190" height="48" rx="4" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2.4"/>
  <line x1="240" y1="102" x2="240" y2="150" stroke="var(--brand)" stroke-width="3.6"/>
  <line x1="330" y1="126" x2="494" y2="126" stroke="var(--ink)" stroke-width="2.6"/>
  <line x1="494" y1="108" x2="494" y2="144" stroke="var(--ink)" stroke-width="2.8"/>

  <!-- Labels below -->
  <text x="66" y="170" font-size="12" font-weight="800" fill="var(--ink)" text-anchor="middle">Min</text>
  <text x="140" y="170" font-size="12" font-weight="800" fill="var(--brand)" text-anchor="middle">LQ</text>
  <text x="240" y="170" font-size="12" font-weight="800" fill="var(--brand)" text-anchor="middle">Median</text>
  <text x="330" y="170" font-size="12" font-weight="800" fill="var(--good)" text-anchor="middle">UQ</text>
  <text x="494" y="170" font-size="12" font-weight="800" fill="var(--ink)" text-anchor="middle">Max</text>

  <!-- IQR bracket -->
  <line x1="140" y1="194" x2="330" y2="194" stroke="var(--brand)" stroke-width="2.2"/>
  <line x1="140" y1="188" x2="140" y2="200" stroke="var(--brand)" stroke-width="2.2"/>
  <line x1="330" y1="188" x2="330" y2="200" stroke="var(--brand)" stroke-width="2.2"/>
  <text x="235" y="212" font-size="12" font-weight="800" fill="var(--brand)" text-anchor="middle">IQR = UQ − LQ (Middle 50%)</text>
</svg>`,
      caption:
        "Even when the right whisker stretches much further than the left whisker, both whiskers contain the exact same 25% of observations.",
    },
  ],
  history: {
    title: "1654: How an Interrupted Dice Game Invented Probability Theory",
    story:
      "In the summer of 1654, French nobleman Chevalier de Méré wrote to mathematician **Blaise Pascal** with a puzzling question: if two players stop a fair game of dice early while one is ahead, how should they divide the prize pot fairly? Pascal wrote immediately to **Pierre de Fermat** in Toulouse. Over a legendary exchange of letters, Pascal and Fermat solved the 'Problem of Points' by listing every equally likely future outcome in a **sample space** and weighting each player's fair share by their exact chance of winning. From that single summer correspondence grew modern probability theory—and three centuries later, American statistician **John Tukey** completed the toolkit by creating the **stem-and-leaf plot** and **box plot** so anyone can see the shape and spread of real data at a single glance.",
  },
};
