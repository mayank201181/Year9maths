import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "fdp-ratio-fractions",
  title: "FDP, Ratio & Algebraic Fractions",
  strand: "Number & Ratio",
  icon: "⚖️",
  summary: "Master recurring decimals, decimal multipliers, ratio bridges and simplifying algebraic fractions.",
  intro:
    "Fractions, decimals, percentages and ratios are not four separate topics — they are four dialects of the same mathematical language: **proportional scaling**. In this unit you will discover why some fractions terminate while others loop forever, turn any percentage change into a single multiplication, bridge multi-part ratios with bar models, and cancel algebraic fractions without falling into the addition trap.",

  guide: [
    // =========================================================================
    // SECTION 1: recurring-decimals
    // =========================================================================
    {
      id: "recurring-decimals",
      heading: "Fractions to Decimals & Recurring Decimals",
      discovery: {
        problem:
          "Use short division to convert {{1/8}} and {{1/7}} into decimals. Why does {{1/8}} stop cleanly after three decimal places, while {{1/7}} loops forever? And bonus puzzle: if {{1/3}} = 0.333…, what is {{3 * 1/3}} as a recurring decimal?",
        idea:
          "Our base-10 place-value system is built from powers of {{10 = 2 * 5}}. Because {{8 = 2^3}} only uses the prime factor 2, we can multiply top and bottom by {{5^3 = 125}} to get {{125/1000 = 0.125}}. By contrast, 7 can never divide a power of 10, so remainders must eventually repeat (there are only 6 possible non-zero remainders when dividing by 7!). And {{3 * 0.333... = 0.999... = 1}} — an exact equality, not an approximation!",
      },
      body:
        "Every fraction {{p/q}} (in its simplest form) produces either a **terminating decimal** (which stops) or a **recurring decimal** (which repeats a block of digits forever).\n\n" +
        "### 1. Spotting Terminating vs Recurring Without Dividing\n" +
        "First simplify the fraction fully so numerator and denominator share no common factors. Then inspect the **prime factorisation of the denominator**:\n" +
        "- If the denominator has **only prime factors of 2 and/or 5**, the decimal **terminates** (because you can scale the denominator up to {{10}}, {{100}}, {{1000}}, …).\n" +
        "- If the simplified denominator has **any other prime factor** (such as 3, 7, 11, 13, …), the decimal **recurs**.\n\n" +
        "| Fraction | Simplified | Denominator Primes | Decimal | Type |\n" +
        "|---|---|---|---|---|\n" +
        "| {{3/40}} | {{3/40}} | {{2^3 * 5}} (only 2 and 5) | 0.075 | Terminating |\n" +
        "| {{9/15}} | {{3/5}} | {{5}} (3 cancelled!) | 0.6 | Terminating |\n" +
        "| {{5/12}} | {{5/12}} | {{2^2 * 3}} (has a 3) | 0.416̇ | Recurring |\n" +
        "| {{2/11}} | {{2/11}} | {{11}} (not 2 or 5) | 0.1̇8̇ | Recurring |\n\n" +
        "### 2. Dot Notation for Recurring Decimals\n" +
        "We place a dot above the **first and last digits** of the repeating cycle:\n" +
        "- `0.7̇` means `0.7777…` (1 repeating digit).\n" +
        "- `0.3̇4̇` means `0.343434…` (2 repeating digits).\n" +
        "- `0.1̇42857̇` means `0.142857142857…` (dots mark only the start and end of the 6-digit cycle).\n" +
        "- `0.27̇` means `0.27777…` (the 2 does **not** repeat; only the 7 repeats).\n\n" +
        "### 3. Converting a Recurring Decimal Back to an Exact Fraction\n" +
        "To kill the infinite tail, align two multiples of {{x}} whose **repeating decimal parts are identical**, then subtract:\n" +
        "1. Let {{x}} equal the recurring decimal (write out 5–6 digits so alignment is crystal clear).\n" +
        "2. Multiply by powers of 10 ({{10}}, {{100}}, {{1000}}, …) until two equations share the **exact same infinite tail** after the decimal point.\n" +
        "3. Subtract the smaller equation from the larger one — the recurring digits cancel completely!\n" +
        "4. Divide to solve for {{x}} and **simplify the fraction fully**.",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Terminating vs recurring prime factor test and algebraic subtraction method">' +
        '<rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>' +
        '<text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Terminating vs Recurring &amp; the Tail-Cancellation Trick</text>' +
        '<rect x="16" y="38" width="252" height="92" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>' +
        '<text x="142" y="58" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">TERMINATING (only 2s &amp; 5s)</text>' +
        '<text x="142" y="80" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">3/40 = 3 / (2³ × 5)</text>' +
        '<text x="142" y="100" text-anchor="middle" font-size="11" fill="var(--ink-2)">Multiply top &amp; bottom by 5² = 25</text>' +
        '<text x="142" y="119" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">= 75 / 1000 = 0.075 (stops!)</text>' +
        '<rect x="292" y="38" width="252" height="92" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/>' +
        '<text x="418" y="58" text-anchor="middle" font-size="12" font-weight="800" fill="var(--bad)">RECURRING (other prime factor)</text>' +
        '<text x="418" y="80" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">5/12 = 5 / (2² × 3)</text>' +
        '<text x="418" y="100" text-anchor="middle" font-size="11" fill="var(--ink-2)">Factor 3 never divides 10ⁿ</text>' +
        '<text x="418" y="119" text-anchor="middle" font-size="12" font-weight="800" fill="var(--bad)">= 0.416666… = 0.416̇ (loops!)</text>' +
        '<rect x="16" y="144" width="528" height="94" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>' +
        '<text x="280" y="164" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">Converting x = 0.27̇ = 0.27777… back to a fraction</text>' +
        '<text x="40" y="187" font-size="12" font-weight="700" fill="var(--ink)">100x  =  27 . 7777…</text>' +
        '<text x="40" y="206" font-size="12" font-weight="700" fill="var(--ink)">− 10x  =   2 . 7777…</text>' +
        '<line x1="36" y1="213" x2="215" y2="213" stroke="var(--ink)" stroke-width="1.5"/>' +
        '<text x="40" y="230" font-size="12" font-weight="800" fill="var(--good)"> 90x  =  25 . 0000…</text>' +
        '<rect x="242" y="176" width="84" height="34" rx="8" fill="var(--surface)" stroke="var(--good)" stroke-width="1.2"/>' +
        '<text x="284" y="191" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">Same tails</text>' +
        '<text x="284" y="204" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">cancel to 0!</text>' +
        '<text x="346" y="200" font-size="13" font-weight="800" fill="var(--ink)">⇒  x = 25/90 = 5/18</text>' +
        '</svg>',
      diagramCaption: "Always simplify the fraction before testing the denominator's prime factors; align identical recurring tails before subtracting.",
      workedExamples: [
        {
          title: "Testing & Converting a Fraction to a Recurring Decimal",
          problem: "Without a calculator, explain whether {{5/12}} terminates or recurs, then write it as a decimal in dot notation.",
          steps: [
            "Check simplest form: {{HCF(5, 12) = 1}}, so {{5/12}} is already simplified.",
            "Prime factorise the denominator: {{12 = 2^2 * 3}}. Because 3 is a prime factor other than 2 or 5, the decimal **recurs**.",
            "Use short division {{5 / 12}}: 12 into 5 is 0 (rem 5); 12 into 50 is 4 (rem 2); 12 into 20 is 1 (rem 8); 12 into 80 is 6 (rem 8).",
            "Remainder 8 repeats immediately, so the digit 6 repeats forever: 0.41666… = 0.416̇.",
          ],
          answer: "Recurs; 0.416̇",
          yourTurn: {
            question: "Convert {{7/40}} to an exact decimal.",
            answer: { type: "number", value: 0.175, allowFraction: false },
            solution: "{{40 = 2^3 * 5}} has only prime factors 2 and 5, so it terminates. Multiply top and bottom by 25: {{7/40 = 175/1000 = 0.175}}.",
          },
        },
        {
          title: "Recurring Decimal with a Non-Repeating Digit to a Fraction",
          problem: "Prove algebraically that 0.27̇ = {{5/18}}.",
          steps: [
            "Let {{x = 0.27777...}}",
            "Shift the non-repeating digit past the decimal point: {{10x = 2.7777...}}",
            "Shift one full repeating cycle further: {{100x = 27.7777...}}",
            "Subtract to eliminate the infinite tail: {{100x - 10x = 27.7777... - 2.7777...}} ⇒ {{90x = 25}}.",
            "Divide and simplify: {{x = 25/90 = 5/18}} (dividing top and bottom by 5).",
          ],
          answer: "{{5/18}}",
          yourTurn: {
            question: "Convert 0.45̇ (0.4555…) to a fraction in its simplest form.",
            answer: { type: "fraction", n: 41, d: 90, simplest: true },
            solution: "Let {{x = 0.4555...}}. Then {{10x = 4.5555...}} and {{100x = 45.5555...}}. Subtracting gives {{90x = 41}}, so {{x = 41/90}} (41 is prime, so it is already simplified).",
          },
        },
      ],
      whyItWorks:
        "A terminating decimal with {{k}} decimal places is simply an integer divided by {{10^k = 2^k * 5^k}}. So {{p/q}} can equal an integer over {{10^k}} if and only if every prime factor of the reduced denominator {{q}} already divides {{2^k * 5^k}} — meaning {{q}} can have no primes other than 2 and 5. Meanwhile, subtracting {{100x - 10x}} works because shifting by one full period aligns every single infinitely-many digit identically after the decimal point.",
      keyPoints: [
        "Always simplify {{p/q}} first — e.g. {{9/15 = 3/5}} terminates even though 15 has a factor of 3.",
        "Terminating test: reduced denominator has ONLY prime factors 2 and/or 5.",
        "Dots go on the first and last digits of the repeating cycle only (e.g. 0.1̇23̇ means 0.123123…).",
        "To convert a recurring decimal to a fraction, pick two powers of 10 with matching infinite tails and subtract.",
      ],
      strategies: [
        "Prime-factor check before dividing to predict whether the decimal terminates.",
        "Write at least 5 decimal digits under each other so matching tails line up visually.",
        "Quick sanity check: 1 repeating digit over 9, 2 repeating digits over 99, 1 fixed + 1 repeating over 90.",
      ],
      thinkDeeper:
        "If a simplified fraction has denominator {{2^a * 5^b}}, how many decimal places does its terminating decimal have? Test {{1/4}}, {{1/5}}, {{1/8}}, {{1/20}} and {{1/40}} to spot the rule involving {{max(a, b)}}!",
    },

    // =========================================================================
    // SECTION 2: percentage-multipliers
    // =========================================================================
    {
      id: "percentage-multipliers",
      heading: "Decimal Multipliers & Percentage Change",
      discovery: {
        problem:
          "A £100 jacket increases in price by 20% in autumn, then drops by 20% in the winter sale. Is its sale price back to £100? Work out the exact price and explain what happened.",
        idea:
          "After a 20% rise, the price is {{100 * 1.2 = 120}} pounds. Taking 20% off £120 removes £24 (not £20!), leaving {{120 * 0.8 = 96}} pounds. Using multipliers makes the reason instant: {{1.2 * 0.8 = 0.96}}, which is a **4% decrease** overall — because the second 20% acted on a larger base!",
      },
      body:
        "Finding 10% and 5% works for mental arithmetic, but for exam fluency, compound change and reverse percentages, **decimal multipliers** are faster, cleaner and far less error-prone.\n\n" +
        "### 1. Building a Decimal Multiplier\n" +
        "Start from **100% = 1**:\n" +
        "- **Increase by {{r}}%**: new percentage is {{(100 + r)}}%, so multiplier {{m = 1 + r/100}}.\n" +
        "- **Decrease by {{r}}%**: new percentage is {{(100 - r)}}%, so multiplier {{m = 1 - r/100}}.\n\n" +
        "| Change | New % of Original | Decimal Multiplier |\n" +
        "|---|---|---|\n" +
        "| Increase by 18% | 118% | {{1.18}} |\n" +
        "| Increase by 4.5% | 104.5% | {{1.045}} |\n" +
        "| Decrease by 15% | 85% | {{0.85}} |\n" +
        "| Decrease by 3.2% | 96.8% | {{0.968}} |\n\n" +
        "### 2. Repeated (Compound) Percentage Change\n" +
        "If an amount changes by the same percentage {{r}}% for {{n}} periods (years, months, bounces), multiply by {{m}} repeatedly:\n" +
        "> **New Value = Original × {{m^n}}**\n\n" +
        "For different consecutive changes (say +10% then −15%), multiply their multipliers together: {{1.10 * 0.85 = 0.935}} (an overall decrease of 6.5%).\n\n" +
        "### 3. Percentage Change Formula\n" +
        "To compare a new value to an original value, **always divide by the ORIGINAL value**:\n" +
        "> **Percentage Change = {{((\"New\" - \"Original\") / \"Original\") * 100}}%**\n\n" +
        "### 4. Reverse Percentages (Working Backwards)\n" +
        "If you are given the **after** value and need the **original** (100%) value, **invert the multiplier by dividing**:\n" +
        "> **Original = New Value ÷ Multiplier**\n\n" +
        "Never find {{r}}% of the *new* value and add/subtract it — that percentage belongs to the unknown original, not the new figure!",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Decimal multiplier forward and reverse percentage machine diagram">' +
        '<rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>' +
        '<text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">The Multiplier Machine: Forward (× m) &amp; Reverse (÷ m)</text>' +
        '<rect x="28" y="64" width="144" height="64" rx="12" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>' +
        '<text x="100" y="92" text-anchor="middle" font-size="13" font-weight="800" fill="var(--brand)">ORIGINAL</text>' +
        '<text x="100" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">(100%)</text>' +
        '<rect x="388" y="64" width="144" height="64" rx="12" fill="var(--surface-2)" stroke="var(--good)" stroke-width="2"/>' +
        '<text x="460" y="92" text-anchor="middle" font-size="13" font-weight="800" fill="var(--good)">NEW VALUE</text>' +
        '<text x="460" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">(100 ± r)%</text>' +
        '<path d="M 176 80 Q 280 40 382 80" fill="none" stroke="var(--brand)" stroke-width="2.5"/>' +
        '<polygon points="384,81 373,73 376,84" fill="var(--brand)"/>' +
        '<text x="280" y="53" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">× m   (or × mⁿ for n years)</text>' +
        '<path d="M 384 114 Q 280 154 178 114" fill="none" stroke="var(--bad)" stroke-width="2.5"/>' +
        '<polygon points="176,113 187,121 184,110" fill="var(--bad)"/>' +
        '<text x="280" y="150" text-anchor="middle" font-size="12" font-weight="800" fill="var(--bad)">÷ m   (Reverse Percentage!)</text>' +
        '<rect x="24" y="172" width="248" height="64" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>' +
        '<text x="148" y="192" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Increase by r%:  m = 1 + r/100</text>' +
        '<text x="148" y="210" text-anchor="middle" font-size="11" fill="var(--ink-2)">e.g. +9% GST ⇒ m = 1.09</text>' +
        '<text x="148" y="226" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">Before GST = Final ÷ 1.09</text>' +
        '<rect x="288" y="172" width="248" height="64" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>' +
        '<text x="412" y="192" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Decrease by r%:  m = 1 − r/100</text>' +
        '<text x="412" y="210" text-anchor="middle" font-size="11" fill="var(--ink-2)">e.g. −15% sale ⇒ m = 0.85</text>' +
        '<text x="412" y="226" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">Original Price = Sale ÷ 0.85</text>' +
        '</svg>',
      diagramCaption: "Draw the two-box arrow diagram whenever you meet a reverse percentage: if the original is missing, divide by the multiplier.",
      workedExamples: [
        {
          title: "Compound Depreciation with a Decimal Multiplier",
          problem: "A bicycle costing £450 loses 12% of its value each year. Calculate its value after 3 years, correct to the nearest penny.",
          steps: [
            "Decrease by 12% leaves {{100 - 12 = 88}}%, so the yearly multiplier is {{0.88}}.",
            "Apply the multiplier 3 times: {{450 * 0.88^3}}.",
            "Evaluate: {{0.88^3 = 0.681472}}, and {{450 * 0.681472 = 306.6624}}.",
            "Round to 2 decimal places for money: £306.66.",
          ],
          answer: "£306.66",
          yourTurn: {
            question: "A scooter worth £600 loses 15% of its value each year. Find its exact value after 2 years.",
            answer: { type: "number", value: 433.5, display: "£433.50" },
            solution: "Multiplier for −15% is {{0.85}}. After 2 years: {{600 * 0.85^2 = 600 * 0.7225 = 433.50}}, so £433.50.",
          },
        },
        {
          title: "Reverse Percentage After a Discount",
          problem: "In a 15% off sale, a camera costs £272. Work out its original price before the sale.",
          steps: [
            "A 15% decrease leaves {{100 - 15 = 85}}% of the original price, so the multiplier is {{0.85}}.",
            "Write the forward equation: {{Original * 0.85 = 272}}.",
            "Undo multiplying by 0.85: {{Original = 272 / 0.85 = 320}}.",
            "Quick check: 15% of £320 is £48, and {{320 - 48 = 272}} ✓",
          ],
          answer: "£320",
          yourTurn: {
            question: "After a 12% pay rise, Maya's weekly wage is £336. What was her original weekly wage?",
            answer: { type: "number", value: 300, display: "£300" },
            solution: "A 12% increase gives multiplier {{1.12}}. Original wage = {{336 / 1.12 = 300}}, so £300.",
          },
        },
      ],
      whyItWorks:
        "Adding {{r}}% of {{x}} gives {{x + (r/100)x = x(1 + r/100)}} by factorising out {{x}}. That single factor {{(1 + r/100)}} is the decimal multiplier! Because multiplication is associative, applying {{m}} repeatedly gives {{x * m * m * ... = x * m^n}}, and solving {{x * m = y}} for the original {{x}} immediately yields {{x = y / m}}.",
      keyPoints: [
        "Watch single-digit percentages carefully: +5% is {{1.05}} (NOT {{1.5}}!) and −4% is {{0.96}} (NOT {{0.6}}!).",
        "Repeated change uses powers of the multiplier ({{m^n}}), never simple multiplication ({{n * r}}%).",
        "Percentage change ALWAYS divides by the **original** amount, never the new amount.",
        "Reverse percentage: if the question asks for the price *before* a rise or sale, **divide** by the multiplier.",
      ],
      strategies: [
        "Always write the one-line equation `Original × m = New` before touching the calculator.",
        "Combine successive multipliers first (e.g. `1.15 × 0.80 = 0.92`) to see the net percentage change instantly.",
        "Check reverse percentage answers forwards: apply the percentage to your answer and verify you land on the given value.",
      ],
      thinkDeeper:
        "If an investment grows by {{25}}% one year, what percentage decrease the next year brings it *exactly* back to the starting amount? Notice it is NOT 25%!",
    },

    // =========================================================================
    // SECTION 3: ratio-problems
    // =========================================================================
    {
      id: "ratio-problems",
      heading: "Ratio Problems, Scaling & Direct Sharing",
      discovery: {
        problem:
          "Ali and Mei share stickers in the ratio {{3 : 5}}. Mei and Ravi share stickers in the ratio {{2 : 7}}. Why can't we just write {{3 : 5 : 7}}? How do we link all three people into one ratio?",
        idea:
          "In the first ratio Mei has 5 parts, while in the second ratio Mei has 2 parts — the 'parts' are different sizes! Scale the first ratio by 2 (giving {{6 : 10}}) and the second ratio by 5 (giving {{10 : 35}}). Now Mei has **10 equal parts** in both ratios, so {{Ali : Mei : Ravi = 6 : 10 : 35}}!",
      },
      body:
        "A ratio compares quantities in **equal-sized parts**. Almost every ratio problem boils down to a single superpower: **find the value of ONE part**.\n\n" +
        "### 1. Three Classic Sharing Problems\n" +
        "Suppose Priya and Liam share money in the ratio {{4 : 9}}:\n" +
        "- **Given the total** (say £169): total parts = {{4 + 9 = 13}}, so 1 part = {{169 / 13 = 13}}.\n" +
        "- **Given one person's share** (say Priya gets £52): 4 parts = £52, so 1 part = {{52 / 4 = 13}}.\n" +
        "- **Given the difference** (say Liam gets £65 more than Priya): difference = {{9 - 4 = 5}} parts = £65, so 1 part = {{65 / 5 = 13}}.\n\n" +
        "### 2. Combining Two Ratios ({{a : b}} and {{b : c}})\n" +
        "To merge two ratios that share a common link {{b}}:\n" +
        "1. Find the **LCM** of the two numbers representing the shared item {{b}}.\n" +
        "2. Multiply *every* number in the first ratio to scale {{b}} up to the LCM.\n" +
        "3. Multiply *every* number in the second ratio to scale {{b}} up to the same LCM.\n" +
        "4. Write {{a : b : c}} together and check if all three share a common factor to simplify.\n\n" +
        "### 3. Unit Ratios ({{1 : n}}) & Best-Buy Comparisons\n" +
        "Writing a ratio in the form {{1 : n}} (divide both sides by the first number) or finding the **unit price** (cost per 100 g, per litre, or per item) puts different pack sizes on a fair, identical footing.\n" +
        "> **Best Buy Rule**: Compare either **cost per same amount** (smaller is better) or **amount per £1** (larger is better) — and always show both values clearly!",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar model for part-difference ratio sharing and LCM bridge for combining two ratios">' +
        '<rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>' +
        '<text x="280" y="23" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Bar Models &amp; the LCM Ratio Bridge</text>' +
        '<rect x="16" y="36" width="254" height="200" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>' +
        '<text x="143" y="56" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">Difference Bar Model (4 : 9)</text>' +
        '<text x="26" y="88" font-size="11" font-weight="700" fill="var(--ink)">Priya</text>' +
        '<rect x="64" y="74" width="20" height="22" fill="var(--brand-soft)" stroke="var(--brand)"/><rect x="84" y="74" width="20" height="22" fill="var(--brand-soft)" stroke="var(--brand)"/>' +
        '<rect x="104" y="74" width="20" height="22" fill="var(--brand-soft)" stroke="var(--brand)"/><rect x="124" y="74" width="20" height="22" fill="var(--brand-soft)" stroke="var(--brand)"/>' +
        '<text x="26" y="122" font-size="11" font-weight="700" fill="var(--ink)">Liam</text>' +
        '<rect x="64" y="108" width="20" height="22" fill="var(--brand-soft)" stroke="var(--brand)"/><rect x="84" y="108" width="20" height="22" fill="var(--brand-soft)" stroke="var(--brand)"/>' +
        '<rect x="104" y="108" width="20" height="22" fill="var(--brand-soft)" stroke="var(--brand)"/><rect x="124" y="108" width="20" height="22" fill="var(--brand-soft)" stroke="var(--brand)"/>' +
        '<rect x="144" y="108" width="20" height="22" fill="var(--surface)" stroke="var(--good)" stroke-width="1.6"/><rect x="164" y="108" width="20" height="22" fill="var(--surface)" stroke="var(--good)" stroke-width="1.6"/>' +
        '<rect x="184" y="108" width="20" height="22" fill="var(--surface)" stroke="var(--good)" stroke-width="1.6"/><rect x="204" y="108" width="20" height="22" fill="var(--surface)" stroke="var(--good)" stroke-width="1.6"/>' +
        '<rect x="224" y="108" width="20" height="22" fill="var(--surface)" stroke="var(--good)" stroke-width="1.6"/>' +
        '<line x1="144" y1="138" x2="244" y2="138" stroke="var(--good)" stroke-width="2"/>' +
        '<text x="194" y="155" text-anchor="middle" font-size="11" font-weight="800" fill="var(--good)">5 extra parts = £65</text>' +
        '<text x="143" y="182" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">1 part = £65 ÷ 5 = £13</text>' +
        '<text x="143" y="204" text-anchor="middle" font-size="11" font-weight="800" fill="var(--brand)">Total = 13 × £13 = £169</text>' +
        '<text x="143" y="224" text-anchor="middle" font-size="10" fill="var(--ink-2)">Always find 1 part first!</text>' +
        '<rect x="286" y="36" width="258" height="200" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>' +
        '<text x="415" y="56" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">Combining A : M &amp; M : R</text>' +
        '<text x="342" y="84" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink-2)">A</text>' +
        '<text x="415" y="84" text-anchor="middle" font-size="11" font-weight="800" fill="var(--good)">M (bridge)</text>' +
        '<text x="490" y="84" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink-2)">R</text>' +
        '<text x="342" y="108" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">3</text>' +
        '<text x="415" y="108" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">5</text>' +
        '<text x="524" y="108" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">× 2</text>' +
        '<text x="415" y="132" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">2</text>' +
        '<text x="490" y="132" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">7</text>' +
        '<text x="524" y="132" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">× 5</text>' +
        '<line x1="306" y1="146" x2="526" y2="146" stroke="var(--line)" stroke-width="1.5"/>' +
        '<rect x="385" y="156" width="60" height="26" rx="6" fill="var(--brand-soft)" stroke="var(--good)" stroke-width="1.5"/>' +
        '<text x="342" y="174" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">6</text>' +
        '<text x="415" y="174" text-anchor="middle" font-size="13" font-weight="800" fill="var(--good)">10</text>' +
        '<text x="490" y="174" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">35</text>' +
        '<text x="415" y="204" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">LCM(5, 2) = 10 matches M</text>' +
        '<text x="415" y="224" text-anchor="middle" font-size="11" font-weight="800" fill="var(--brand)">A : M : R = 6 : 10 : 35</text>' +
        '</svg>',
      diagramCaption: "Bar models expose part differences instantly, while scaling the shared term to its LCM bridges two separate ratios.",
      workedExamples: [
        {
          title: "Sharing from the Difference Between Parts",
          problem: "Priya and Liam share prize money in the ratio {{4 : 9}}. Liam receives £65 more than Priya. Find the total prize money.",
          steps: [
            "Find the difference in parts: {{9 - 4 = 5}} parts.",
            "Those 5 extra parts are worth £65, so 1 part = {{65 / 5 = 13}} pounds.",
            "Total parts = {{4 + 9 = 13}} parts.",
            "Total prize money = {{13 * 13 = 169}} pounds.",
          ],
          answer: "£169",
          yourTurn: {
            question: "Noah and Zara share marbles in the ratio {{3 : 8}}. Zara has 35 more marbles than Noah. How many marbles do they have altogether?",
            answer: { type: "number", value: 77 },
            solution: "Difference = {{8 - 3 = 5}} parts = 35 marbles, so 1 part = 7 marbles. Total = {{(3 + 8) * 7 = 11 * 7 = 77}} marbles.",
          },
        },
        {
          title: "Combining Two Ratios into a Single Three-Part Ratio",
          problem: "In a fruit punch, the ratio of apple juice to mango juice is {{4 : 3}}, and the ratio of mango juice to lime juice is {{5 : 2}}. Write the ratio `apple : mango : lime` in its simplest form.",
          steps: [
            "Identify the shared item: **mango** (3 in the first ratio, 5 in the second).",
            "Find {{LCM(3, 5) = 15}}.",
            "Scale `apple : mango = 4 : 3` by 5 ⇒ {{20 : 15}}.",
            "Scale `mango : lime = 5 : 2` by 3 ⇒ {{15 : 6}}.",
            "Combine: {{20 : 15 : 6}}. Since {{HCF(20, 15, 6) = 1}}, it is already in simplest form.",
          ],
          answer: "20 : 15 : 6",
          yourTurn: {
            question: "Given that {{a : b = 2 : 3}} and {{b : c = 4 : 5}}, write the ratio {{a : b : c}} in its simplest form.",
            answer: { type: "ratio", parts: [8, 12, 15], simplest: true },
            solution: "{{LCM(3, 4) = 12}}. Scale {{2 : 3}} by 4 to get {{8 : 12}}, and scale {{4 : 5}} by 3 to get {{12 : 15}}. Combined: {{8 : 12 : 15}}.",
          },
        },
      ],
      whyItWorks:
        "A ratio {{a : b}} only fixes the *relative* sizes {{ka : kb}} for any scaling factor {{k > 0}}. Drawing bars makes each unit {{k}} visible as a single block. When combining {{a : b}} and {{b : c}}, multiplying the first ratio by one constant and the second by another preserves both internal proportions while making the middle block sizes identical.",
      keyPoints: [
        "Always check whether a given number is the **total**, **one person's share**, or the **difference** between shares.",
        "Convert mixed units (e.g. cm and m, g and kg) to the **same unit** before simplifying a ratio.",
        "To link {{a : b}} and {{b : c}}, scale the shared letter {{b}} to its LCM.",
        "For ratio {{a : b}}, the fraction belonging to the first part is {{a/(a + b)}}, NOT {{a/b}}!",
      ],
      strategies: [
        "Label every ratio column with initials (`P : L` or `A : M : R`) so you never swap numbers.",
        "Draw a quick bar sketch whenever a ratio changes after items are given away or added.",
        "In best-buy questions, convert both offers to a common unit (e.g. cost per 100 g or per 1 item).",
      ],
      thinkDeeper:
        "Sam and Jo share sweets in the ratio {{2 : 3}}. Sam then gives 4 sweets to Jo, and the new ratio becomes {{1 : 4}}. Notice the **total** number of sweets never changed! How can matching the total number of parts (5 parts in both!) solve this in two lines?",
    },

    // =========================================================================
    // SECTION 4: algebraic-fractions
    // =========================================================================
    {
      id: "algebraic-fractions",
      heading: "Simplifying, Multiplying & Dividing Algebraic Fractions",
      discovery: {
        problem:
          "A student looks at {{(x + 6)/x}}, crosses out both {{x}}s, and writes 6. Test the claim by substituting {{x = 2}} into {{(x + 6)/x}}. What happens — and why is crossing out {{x}} illegal here, yet totally legal in {{(6x)/x}}?",
        idea:
          "When {{x = 2}}, {{(2 + 6)/2 = 8/2 = 4}}, NOT 6! In {{(6x)/x}}, {{x}} is a **factor** multiplying the entire top and bottom, so {{x/x = 1}}. In {{(x + 6)/x}}, {{x}} is only a **term** being added on top. Golden rule: **you can ONLY cancel common factors, never terms across + or −!**",
      },
      body:
        "Algebraic fractions obey the **exact same rules** as numerical fractions — cancelling common factors, multiplying straight across, and flipping the divisor to divide.\n\n" +
        "### 1. Simplifying Algebraic Fractions: Factorise First!\n" +
        "- **Monomial fractions** (single terms top and bottom): cancel numerical coefficients by their HCF, and subtract powers of matching letters using index laws:\n" +
        "    {{(12x^3y)/(18xy^2) = (2x^2)/(3y)}}\n" +
        "- **Sums or differences on top or bottom**: **factorise BOTH numerator and denominator completely** (common factor, difference of two squares {{a^2 - b^2 = (a-b)(a+b)}}, or simple quadratics) before cancelling any whole bracket:\n" +
        "    {{(3x + 6)/(x^2 + 2x) = (3(x + 2))/(x(x + 2)) = 3/x}}\n\n" +
        "### 2. Multiplying Algebraic Fractions\n" +
        "Factorise any sums, **cross-cancel** any common numerical or algebraic factors between *any* numerator and *any* denominator, then multiply top × top and bottom × bottom:\n" +
        "    {{(4x)/(3y) * (9y^2)/(10x^2) = (2 * 3y)/(1 * 5x) = (6y)/(5x)}}\n\n" +
        "### 3. Dividing Algebraic Fractions (Keep – Change – Flip)\n" +
        "Dividing by a fraction is identical to multiplying by its **reciprocal**:\n" +
        "1. **Keep** the first fraction as it is.\n" +
        "2. **Change** {{÷}} to {{*}}.\n" +
        "3. **Flip** the second fraction upside down.\n" +
        "4. **Factorise**, cancel common factors, and multiply across!\n\n" +
        "> **Careful**: Never cancel *before* flipping a division! Flip first, then cancel.",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Legal vs illegal cancelling in algebraic fractions and Keep-Change-Flip division">' +
        '<rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>' +
        '<text x="280" y="23" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Algebraic Fractions: Factorise First, Cancel Only Factors!</text>' +
        '<rect x="16" y="38" width="252" height="96" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.6"/>' +
        '<text x="142" y="58" text-anchor="middle" font-size="12" font-weight="800" fill="var(--bad)">✗ NEVER Cancel Across + or −</text>' +
        '<text x="142" y="83" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">(x + 6) / x  ≠  6</text>' +
        '<line x1="89" y1="88" x2="103" y2="70" stroke="var(--bad)" stroke-width="2"/>' +
        '<line x1="145" y1="88" x2="159" y2="70" stroke="var(--bad)" stroke-width="2"/>' +
        '<text x="142" y="106" text-anchor="middle" font-size="11" fill="var(--ink-2)">Test x = 2: (2 + 6)/2 = 4 ≠ 6</text>' +
        '<text x="142" y="124" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">x is a TERM here, not a factor!</text>' +
        '<rect x="292" y="38" width="252" height="96" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.6"/>' +
        '<text x="418" y="58" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">✓ FACTORISE, Then Cancel Brackets</text>' +
        '<text x="418" y="82" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">(3x + 6) / (x² + 2x)</text>' +
        '<text x="418" y="103" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">= 3(x + 2) / [ x(x + 2) ]</text>' +
        '<text x="418" y="124" text-anchor="middle" font-size="13" font-weight="800" fill="var(--good)">= 3 / x   (whole factor cancels!)</text>' +
        '<rect x="16" y="148" width="528" height="90" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>' +
        '<text x="280" y="168" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">Dividing Algebraic Fractions: Keep – Change – Flip</text>' +
        '<text x="95" y="200" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">(6a² / 5b) ÷ (9a / 10b²)</text>' +
        '<text x="210" y="200" text-anchor="middle" font-size="14" font-weight="800" fill="var(--brand)">→</text>' +
        '<text x="328" y="200" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">(6a² / 5b) × (10b² / 9a)</text>' +
        '<text x="444" y="200" text-anchor="middle" font-size="14" font-weight="800" fill="var(--good)">→</text>' +
        '<text x="500" y="200" text-anchor="middle" font-size="14" font-weight="800" fill="var(--good)">4ab / 3</text>' +
        '<text x="280" y="226" text-anchor="middle" font-size="11" fill="var(--ink-2)">Flip the SECOND fraction first, then cancel numbers (6 &amp; 9, 10 &amp; 5) and powers (a²/a, b²/b).</text>' +
        '</svg>',
      diagramCaption: "Factorising exposes hidden brackets that multiply the whole numerator and denominator, making cancellation completely safe.",
      workedExamples: [
        {
          title: "Factorising Before Cancelling",
          problem: "Simplify {{(3x^2 + 6x)/(9x + 18)}} fully.",
          steps: [
            "Factorise the numerator by taking out the HCF {{3x}}: {{3x^2 + 6x = 3x(x + 2)}}.",
            "Factorise the denominator by taking out the HCF {{9}}: {{9x + 18 = 9(x + 2)}}.",
            "Cancel the common bracket factor {{(x + 2)}}: {{(3x(x + 2))/(9(x + 2)) = (3x)/9}}.",
            "Cancel the numerical factor 3: {{(3x)/9 = x/3}}.",
          ],
          answer: "{{x/3}}",
          yourTurn: {
            question: "Simplify {{(4x + 12)/(x^2 + 3x)}} fully.",
            answer: { type: "expression", expr: "4/x", form: "simplified", display: "{{4/x}}" },
            solution: "Factorise top and bottom: {{(4(x + 3))/(x(x + 3))}}. Cancel the common factor {{(x + 3)}} to get {{4/x}}.",
          },
        },
        {
          title: "Dividing Algebraic Fractions",
          problem: "Work out {{(6a^2)/(5b) ÷ (9a)/(10b^2)}} and simplify your answer fully.",
          steps: [
            "Keep the first fraction, change ÷ to ×, and flip the second fraction: {{(6a^2)/(5b) * (10b^2)/(9a)}}.",
            "Cancel numbers diagonally: 6 and 9 divide by 3 (leaving 2 and 3); 10 and 5 divide by 5 (leaving 2 and 1).",
            "Cancel variables using index laws: {{a^2 / a = a}} on top, and {{b^2 / b = b}} on top.",
            "Multiply the remaining numerators and denominators: {{(2 * a * 2 * b)/(1 * 3) = (4ab)/3}}.",
          ],
          answer: "{{(4ab)/3}}",
          yourTurn: {
            question: "Work out {{(8x)/(3y) ÷ (4x^2)/(9y)}} and simplify fully.",
            answer: { type: "expression", expr: "6/x", form: "simplified", display: "{{6/x}}" },
            solution: "Flip the divisor: {{(8x)/(3y) * (9y)/(4x^2) = (72xy)/(12x^2y) = 6/x}}.",
          },
        },
      ],
      whyItWorks:
        "Cancelling a factor {{k}} from {{(kA)/(kB)}} works because {{(kA)/(kB) = (k/k) * (A/B) = 1 * (A/B) = A/B}} (provided {{k != 0}}). Addition does not split multiplicatively like that: {{(A + k)/(B + k)}} cannot be written as {{(k/k) * (A/B)}}. Factorising rewrites a sum as a product so the multiplicative cancellation law applies.",
      keyPoints: [
        "NEVER cancel individual terms separated by + or − signs.",
        "Always factorise both numerator and denominator completely before cancelling.",
        "Look out for difference of two squares: {{x^2 - a^2 = (x - a)(x + a)}}.",
        "For division, flip the second fraction BEFORE cancelling anything.",
      ],
      strategies: [
        "Substitute a small test number (like {{x = 2}} or {{x = 3}}) into both the original and your simplified fraction — if the values differ, catch the mistake immediately!",
        "Cancel common factors *before* multiplying large numbers together to keep arithmetic tiny.",
        "Remember that a whole expression like {{3x}} can be written as {{(3x)/1}} before flipping in a division.",
      ],
      thinkDeeper:
        "What does {{(x - 5)/(5 - x)}} simplify to (for {{x != 5}})? Try plugging in {{x = 7}} and {{x = 2}}, then factorise {{ -1 }} out of the denominator to prove your answer!",
    },
  ],

  learn: {
    flashcards: [
      { front: "When does a simplified fraction {{p/q}} give a terminating decimal?", back: "When the prime factors of the denominator {{q}} are **only 2 and/or 5**." },
      { front: "What does the dot notation `0.27̇` mean?", back: "`0.27777…` — the 2 does not repeat, and only the 7 repeats forever." },
      { front: "What exact fraction is 0.7̇ (`0.777…`)?", back: "{{7/9}} (since {{10x - x = 9x = 7}})." },
      { front: "What exact fraction is 0.2̇3̇ (`0.2323…`)?", back: "{{23/99}} (since {{100x - x = 99x = 23}})." },
      { front: "What is the decimal multiplier for a 6% increase?", back: "{{1.06}} (because {{100% + 6% = 106% = 1.06}})." },
      { front: "What is the decimal multiplier for a 17.5% decrease?", back: "{{0.825}} (because {{100% - 17.5% = 82.5% = 0.825}})." },
      { front: "How do you calculate the original price after a 20% discount?", back: "Divide the sale price by **0.8** (NOT add 20% of the sale price!)." },
      { front: "What is the formula for percentage change?", back: "{{((\"New\" - \"Original\") / \"Original\") * 100}}% — always divide by the **original** value." },
      { front: "If an amount grows by 8% per year for 4 years, what single multiplier is used?", back: "{{1.08^4}}" },
      { front: "If Alice and Ben share in the ratio {{3 : 7}}, what fraction does Alice receive?", back: "{{3/10}} (her parts divided by total parts {{3 + 7 = 10}})." },
      { front: "How do you combine {{a : b = 2 : 5}} and {{b : c = 3 : 4}}?", back: "Match {{b}} to {{LCM(5, 3) = 15}}: scale first by 3 ({{6 : 15}}) and second by 5 ({{15 : 20}}) ⇒ {{6 : 15 : 20}}." },
      { front: "Why can you NOT cancel the {{x}} in {{(x + 4)/x}}?", back: "Because {{x}} is an added **term**, not a common **factor** multiplying the whole numerator." },
      { front: "What is the first step when simplifying {{(x^2 - 9)/(2x + 6)}}?", back: "**Factorise** top and bottom: {{((x - 3)(x + 3))/(2(x + 3))}}, then cancel {{(x + 3)}} ⇒ {{(x - 3)/2}}." },
      { front: "How do you divide one algebraic fraction by another?", back: "**Keep** the first fraction, **Change** ÷ to ×, **Flip** the second fraction, then cancel and multiply." },
    ],
    mustKnow: [
      "Identify whether a simplified fraction terminates or recurs from the prime factors of its denominator.",
      "Convert fractions to recurring decimals using short division and write them accurately in dot notation.",
      "Prove algebraically that a recurring decimal (including mixed non-repeating + repeating digits) equals an exact fraction.",
      "Write down the decimal multiplier for any percentage increase or decrease, including decimals like 2.5%.",
      "Calculate repeated (compound) percentage increases and decreases using {{Original * m^n}}.",
      "Find an original amount using reverse percentages by dividing by the decimal multiplier.",
      "Solve ratio sharing problems given a total, one share, or the difference between two shares.",
      "Combine two ratios {{a : b}} and {{b : c}} by scaling the common term to its LCM.",
      "Factorise numerators and denominators (HCF or difference of two squares) to simplify algebraic fractions.",
      "Multiply and divide algebraic fractions cleanly using cross-cancellation and Keep–Change–Flip.",
    ],
    misconceptions: [
      { wrong: "Never write: {{9/15}} recurs because 15 has a factor of 3.", right: "Write instead: Simplify first! {{9/15 = 3/5}}, whose denominator is 5, so it **terminates** as 0.6." },
      { wrong: "Never write: A 5% increase has multiplier 1.5.", right: "Write instead: 5% is {{0.05}}, so a 5% increase has multiplier **1.05** (1.5 would be a 50% increase!)." },
      { wrong: "Never write: To undo a 20% sale discount, add 20% back onto the sale price.", right: "Write instead: The sale price is 80% of the original, so **divide by 0.8** to recover 100%." },
      { wrong: "Never write: If {{a : b = 3 : 5}}, then {{a}} is {{3/5}} of the total.", right: "Write instead: Total parts = {{3 + 5 = 8}}, so {{a}} is **{{3/8}}** of the total." },
      { wrong: "Never write: {{(x + 5)/x = 5}} by crossing out the {{x}}s.", right: "Write instead: You cannot cancel across `+`; {{(x + 5)/x = 1 + 5/x}} (already simplified as a single fraction)." },
      { wrong: "Never write: {{(a)/(b) ÷ (c)/(d) = (b)/(a) * (c)/(d)}} (flipping the first fraction).", right: "Write instead: Always flip the **second** fraction (the divisor): {{(a)/(b) * (d)/(c)}}." },
    ],
    examMistakes: [
      "Forgetting to simplify the final fraction after converting a recurring decimal (e.g. leaving {{25/90}} instead of {{5/18}}).",
      "Confusing 0.27̇ (`0.2777… = 25/90`) with 0.2̇7̇ (`0.2727… = 27/99`) — check carefully where the dots sit!",
      "Using simple interest instead of compound multipliers (multiplying a 10% rise by 3 years to get +30% instead of {{1.1^3 = 1.331}}, i.e. +33.1%).",
      "Dividing by the *new* value instead of the *original* value when computing percentage increase or decrease.",
      "Forgetting to convert ratio quantities into the same units (e.g. simplifying `40 cm : 2 m` as `20 : 1` instead of `40 cm : 200 cm = 1 : 5`).",
      "Cancelling before flipping when dividing algebraic fractions.",
      "Dropping a factor of 1 when an entire numerator cancels out (e.g. writing {{(x + 2)/(3(x + 2)) = 3}} instead of {{1/3}}).",
    ],
    mnemonics: [
      {
        topic: "Terminating Decimals",
        device: "2 and 5 Stay Alive",
        explanation: "Once simplified, if the denominator's prime factors are ONLY 2s and 5s, the decimal terminates cleanly; any other prime sends it into an endless recurring loop.",
      },
      {
        topic: "Reverse Percentages",
        device: "Forward Multiply, Back Divide (FMBD)",
        explanation: "Going forward from original to new? Multiply by the decimal multiplier. Working backwards to the original? Divide by the multiplier.",
      },
      {
        topic: "Algebraic Fractions",
        device: "Factorise Before You Slash — Keep, Change, Flip",
        explanation: "Factorise sums into brackets before cancelling anything; for division, Keep the 1st, Change ÷ to ×, Flip the 2nd.",
      },
    ],
    realWorld: [
      {
        title: "Singapore GST & Receipt Reverse Percentages",
        emoji: "🧾",
        detail: "When a Singapore café bill shows $21.80 inclusive of 9% GST, the pre-GST price is found by dividing by 1.09 ($20.00), NOT by subtracting 9% of $21.80!",
      },
      {
        title: "Compound Savings & Vehicle Depreciation",
        emoji: "🚗",
        detail: "Bank accounts, inflation and car resale values all evolve by repeated decimal multipliers ({{P * m^n}}), explaining why small yearly rates snowball dramatically over a decade.",
      },
      {
        title: "Supermarket Best-Buy & Shrinkflation",
        emoji: "🛒",
        detail: "Comparing a 350 g cereal box at £2.45 with a 500 g box at £3.40 uses unit ratios (cost per 100 g: 70p vs 68p) so marketing tricks never fool you.",
      },
      {
        title: "Formula Simplification in Physics & Graphics",
        emoji: "⚙️",
        detail: "Simplifying algebraic fractions such as {{(v^2 - u^2)/(v - u) = v + u}} lets engineers cancel bottlenecks and compute trajectories far faster.",
      },
    ],
    videos: [
      { title: "Converting Recurring Decimals to Fractions (Algebraic Proof)", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=corbettmaths+recurring+decimals+to+fractions" },
      { title: "Decimal Multipliers, Compound & Reverse Percentages", channel: "GCSE Maths Tutor", url: "https://www.youtube.com/results?search_query=gcse+maths+tutor+reverse+percentages+multipliers" },
      { title: "Combining Ratios & Ratio Difference Problems", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=corbettmaths+combining+ratios+difference" },
      { title: "Simplifying, Multiplying & Dividing Algebraic Fractions", channel: "GCSE Maths Tutor", url: "https://www.youtube.com/results?search_query=gcse+maths+tutor+simplifying+multiplying+dividing+algebraic+fractions" },
    ],
    formulas: [
      { name: "Terminating Decimal Test", formula: "{{q = 2^a * 5^b}}", note: "Simplified fraction p/q terminates iff denominator has only prime factors 2 and 5." },
      { name: "Single Repeating Digit", formula: "0.ȧ = {{a/9}}", note: "For a single repeating digit a (from 1 to 8)." },
      { name: "Two Repeating Digits", formula: "0.ȧḃ = {{(10a + b)/99}}", note: "Multiply by 100, subtract x, then simplify." },
      { name: "Percentage Increase Multiplier", formula: "{{m = 1 + r/100}}", note: "New = Original × m." },
      { name: "Percentage Decrease Multiplier", formula: "{{m = 1 - r/100}}", note: "New = Original × m." },
      { name: "Compound Percentage Change", formula: "{{\"New\" = \"Original\" * m^n}}", note: "For n identical periods at multiplier m." },
      { name: "Percentage Change", formula: "{{((\"New\" - \"Original\") / \"Original\") * 100}}%", note: "Always divide by the original value." },
      { name: "Reverse Percentage", formula: "{{\"Original\" = \"New\" / m}}", note: "Divide by the multiplier to recover 100%." },
      { name: "Part-to-Whole Fraction from Ratio", formula: "{{a : b => a/(a + b)}}", note: "First share as a fraction of the total." },
      { name: "Dividing Algebraic Fractions", formula: "{{(A/B) ÷ (C/D) = (A/B) * (D/C)}}", note: "Keep, Change, Flip, then factorise and cancel." },
    ],
  },
};
