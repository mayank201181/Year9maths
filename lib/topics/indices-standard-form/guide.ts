import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "indices-standard-form",
  title: "Indices, Change of Base & Standard Form",
  strand: "Number & Ratio",
  icon: "🚀",
  summary: "Tame huge and tiny numbers with index laws, zero & negative powers, base changes and standard form.",
  intro:
    "How do astronomers weigh galaxies ({{2 * 10^30}} kg) and biologists measure viruses ({{3 * 10^(-8)}} m) without drowning in rows of zeros? The secret is **powers (indices)**. Once you understand how index laws emerge directly from counting repeated factors, zero powers, negative powers, changing bases and standard form all click together into one remarkably compact system.",

  guide: [
    // =========================================================================
    // SECTION 1: index-laws
    // =========================================================================
    {
      id: "index-laws",
      heading: "Index Laws: Multiplying, Dividing & Powers of Powers",
      discovery: {
        problem:
          "Expand {{2^3 * 2^4}} and {{(2^3)^4}} completely into strings of 2s multiplied together. Why does one equal {{2^7}} while the other equals {{2^12}}? And in {{(3x^2)^4}}, what happens to the coefficient 3?",
        idea:
          "{{2^3 * 2^4 = (2*2*2) * (2*2*2*2)}} has {{3 + 4 = 7}} factors of 2, giving {{2^7}}. By contrast, {{(2^3)^4 = 2^3 * 2^3 * 2^3 * 2^3}} is 4 groups of 3 factors — {{3 * 4 = 12}} factors of 2, giving {{2^12}}. And {{(3x^2)^4 = 3x^2 * 3x^2 * 3x^2 * 3x^2 = 3^4 * x^8 = 81x^8}} — the outside power hits the **coefficient too**!",
      },
      body:
        "An index (or exponent) counts how many times a **base** is multiplied by itself. Every index law is simply a shortcut for counting factors — provided the **bases match**.\n\n" +
        "### The Four Essential Laws\n" +
        "| Rule | Formula | Example | Watch Out! |\n" +
        "|---|---|---|---|\n" +
        "| Multiply (same base) | {{a^m * a^n = a^(m+n)}} | {{x^4 * x^3 = x^7}} | Base stays {{a}} ({{2^3 * 2^4 = 2^7}}, NOT {{4^7}}!) |\n" +
        "| Divide (same base) | {{a^m / a^n = a^(m-n)}} | {{y^9 / y^2 = y^7}} | Subtract top power minus bottom power |\n" +
        "| Power of a power | {{(a^m)^n = a^(mn)}} | {{(p^3)^5 = p^15}} | Multiply exponents, don't add them |\n" +
        "| Power of a product | {{(ab)^n = a^n b^n}} | {{(3x^2)^3 = 27x^6}} | Raise the numerical coefficient to power {{n}} too! |\n\n" +
        "### Multi-Variable & Coefficient Expressions\n" +
        "Treat **numbers** with ordinary arithmetic and each **letter** separately with index laws:\n" +
        "- Multiplying: {{4x^3y^2 * 5x^2y^5 = (4 * 5) * x^(3+2) * y^(2+5) = 20x^5y^7}}.\n" +
        "- Dividing: {{(18a^6b^3)/(6a^2b) = (18/6) * a^(6-2) * b^(3-1) = 3a^4b^2}} (remember a lone letter {{b}} means {{b^1}}!).\n" +
        "- Raising a bracket to a power: apply the outer power to **every factor** inside the bracket — numbers and every variable alike!",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The core index laws illustrated by counting repeated factors and coefficient power warning">' +
        '<rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>' +
        '<text x="280" y="23" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Index Laws: Count the Factors (Same Base Only!)</text>' +
        '<rect x="16" y="38" width="166" height="106" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>' +
        '<text x="99" y="57" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">Multiply → Add</text>' +
        '<text x="99" y="79" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">aᵐ × aⁿ = aᵐ⁺ⁿ</text>' +
        '<text x="99" y="102" text-anchor="middle" font-size="11" fill="var(--ink-2)">(a·a·a) × (a·a)</text>' +
        '<text x="99" y="122" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">= a⁵  (3 + 2 factors)</text>' +
        '<rect x="197" y="38" width="166" height="106" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>' +
        '<text x="280" y="57" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">Divide → Subtract</text>' +
        '<text x="280" y="79" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">aᵐ ÷ aⁿ = aᵐ⁻ⁿ</text>' +
        '<text x="280" y="102" text-anchor="middle" font-size="11" fill="var(--ink-2)">(a·a·a·a·a) / (a·a)</text>' +
        '<text x="280" y="122" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">= a³  (2 cancel out)</text>' +
        '<rect x="378" y="38" width="166" height="106" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>' +
        '<text x="461" y="57" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">Power → Multiply</text>' +
        '<text x="461" y="79" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">(aᵐ)ⁿ = aᵐⁿ</text>' +
        '<text x="461" y="102" text-anchor="middle" font-size="11" fill="var(--ink-2)">(a³) × (a³)</text>' +
        '<text x="461" y="122" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">= a⁶  (2 groups of 3)</text>' +
        '<rect x="16" y="158" width="528" height="78" rx="10" fill="var(--brand-soft)" stroke="var(--bad)" stroke-width="1.5"/>' +
        '<text x="280" y="178" text-anchor="middle" font-size="12" font-weight="800" fill="var(--bad)">COEFFICIENT ALERT: The outer power hits EVERY factor inside!</text>' +
        '<text x="280" y="202" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">(3x²y)³  =  3³ · (x²)³ · y³  =  27x⁶y³</text>' +
        '<text x="280" y="224" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">Not 3x⁶y³ and not 9x⁶y³ — cube the 3 to get 27!</text>' +
        '</svg>',
      diagramCaption: "When in doubt about any index law, expand a tiny example with 2s or 3s — counting factors never lies.",
      workedExamples: [
        {
          title: "Raising Coefficients & Multiple Variables to a Power",
          problem: "Simplify {{(3x^4y^2)^3}} completely.",
          steps: [
            "Apply the cube (power 3) to EVERY factor inside the bracket: {{3^3 * (x^4)^3 * (y^2)^3}}.",
            "Evaluate the number: {{3^3 = 3 * 3 * 3 = 27}}.",
            "Multiply the indices for each letter: {{(x^4)^3 = x^(4*3) = x^12}} and {{(y^2)^3 = y^(2*3) = y^6}}.",
            "Combine: {{27x^12y^6}}.",
          ],
          answer: "{{27x^12y^6}}",
          yourTurn: {
            question: "Simplify {{(2a^3b)^4}} completely.",
            answer: { type: "expression", expr: "16a^12b^4", form: "simplified", display: "{{16a^12b^4}}" },
            solution: "Raise every factor to the power 4: {{2^4 * (a^3)^4 * b^4 = 16a^12b^4}}.",
          },
        },
        {
          title: "Combined Multiplication & Division with Coefficients",
          problem: "Simplify {{(8m^5 * 3m^2)/(6m^4)}}.",
          steps: [
            "Simplify the numerator first: multiply coefficients ({{8 * 3 = 24}}) and add powers ({{m^(5+2) = m^7}}) ⇒ {{24m^7}}.",
            "Divide by the denominator {{6m^4}}: divide coefficients ({{24 / 6 = 4}}) and subtract powers ({{m^(7-4) = m^3}}).",
            "Final simplified answer: {{4m^3}}.",
          ],
          answer: "{{4m^3}}",
          yourTurn: {
            question: "Simplify {{(12p^6 * 2p^3)/(8p^5)}}.",
            answer: { type: "expression", expr: "3p^4", form: "simplified", display: "{{3p^4}}" },
            solution: "Numerator = {{24p^9}}. Divide by {{8p^5}}: {{24/8 = 3}} and {{p^(9-5) = p^4}} ⇒ {{3p^4}}.",
          },
        },
      ],
      whyItWorks:
        "For positive integers {{m}} and {{n}}, {{a^m}} means a product of {{m}} copies of {{a}}. Multiplying two such products lays {{m}} copies next to {{n}} copies ({{m + n}} total). Dividing cancels {{n}} copies from {{m}} copies ({{m - n}} left). Taking {{n}} copies of a group of {{m}} gives an {{m * n}} grid of factors.",
      keyPoints: [
        "Index laws ONLY combine powers that have the **exact same base** — never combine {{2^3 * 3^4}} into {{6^7}}!",
        "When multiplying or dividing terms with numbers, **multiply/divide the coefficients normally**, while adding/subtracting the indices.",
        "A variable with no visible index has index **1** ({{x = x^1}}).",
        "In {{(kx^m)^n}}, raise the coefficient {{k}} to the power {{n}} as well: {{k^n x^(mn)}}.",
      ],
      strategies: [
        "Tidy the numerator and denominator separately before dividing top by bottom.",
        "Handle numerical coefficients first, then work alphabetically letter by letter ({{a}}, then {{b}}, then {{c}}).",
        "Sense-check a power law with {{2^2}} and {{2^3}} whenever you hesitate between adding and multiplying exponents.",
      ],
      thinkDeeper:
        "Why is {{2^5 + 2^5 = 2^6}} (and NOT {{2^10}} or {{4^5}})? Use factorising ({{2^5(1 + 1)}}) to work out what {{3^7 + 3^7 + 3^7}} equals as a single power of 3!",
    },

    // =========================================================================
    // SECTION 2: zero-negative-indices
    // =========================================================================
    {
      id: "zero-negative-indices",
      heading: "Zero & Negative Indices and Change of Base",
      discovery: {
        problem:
          "Follow the pattern: {{2^4 = 16}}, {{2^3 = 8}}, {{2^2 = 4}}, {{2^1 = 2}}. Each step down divides by 2. Continue dividing by 2 three more times — what must {{2^0}}, {{2^(-1)}} and {{2^(-2)}} equal?",
        idea:
          "{{2 / 2 = 1}}, so {{2^0 = 1}}! Divide by 2 again: {{2^(-1) = 1/2}}. Divide by 2 again: {{2^(-2) = 1/4 = 1/(2^2)}}. A **negative index never creates a negative number** — it creates the **reciprocal** (1 over the positive power)!",
      },
      body:
        "Index laws remain consistent for zero and negative integers through two exact definitions (for any non-zero base {{a != 0}}):\n\n" +
        "### 1. Zero Index: {{a^0 = 1}}\n" +
        "Using the division law, {{a^3 / a^3 = a^(3-3) = a^0}}. Yet any non-zero number divided by itself equals **1**, so {{a^0 = 1}}!\n" +
        "- {{7^0 = 1}}, {{(-5)^0 = 1}}, {{(3x)^0 = 1}}.\n" +
        "- **Watch brackets**: {{5x^0 = 5 * 1 = 5}} (only {{x}} is raised to 0), whereas {{(5x)^0 = 1}}!\n\n" +
        "### 2. Negative Indices: {{a^(-n) = 1/(a^n)}}\n" +
        "A minus sign in the exponent means **take the reciprocal**:\n" +
        "- {{3^(-2) = 1/(3^2) = 1/9}}.\n" +
        "- {{2^(-4) = 1/(2^4) = 1/16}}.\n" +
        "- For a **fraction** base, flipping gives the reciprocal instantly: {{(a/b)^(-n) = (b/a)^n}}, so {{(2/5)^(-2) = (5/2)^2 = 25/4}}.\n\n" +
        "### 3. Change of Base\n" +
        "When bases look different — like 2, 4, 8, 16, 32 or 3, 9, 27, 81 — check if they belong to the **same power family**!\n\n" +
        "| Base Family | Key Powers to Know Instantly |\n" +
        "|---|---|\n" +
        "| Base **2** | {{2^1 = 2}}, {{2^2 = 4}}, {{2^3 = 8}}, {{2^4 = 16}}, {{2^5 = 32}}, {{2^6 = 64}} |\n" +
        "| Base **3** | {{3^1 = 3}}, {{3^2 = 9}}, {{3^3 = 27}}, {{3^4 = 81}} |\n" +
        "| Base **5** | {{5^1 = 5}}, {{5^2 = 25}}, {{5^3 = 125}}, {{5^4 = 625}} |\n\n" +
        "Replace each composite base with a **bracketed power** of the common prime base (e.g. {{8^4 = (2^3)^4 = 2^12}} and {{1/4 = 2^(-2)}}), apply the index laws, and match the exponents on both sides to solve equations!",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Power staircase deriving zero and negative indices alongside common change-of-base families">' +
        '<rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>' +
        '<text x="280" y="23" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">The Power Staircase (÷2 each step) &amp; Change of Base</text>' +
        '<rect x="16" y="38" width="276" height="198" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>' +
        '<text x="154" y="57" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">Halving Pattern for Base 2</text>' +
        '<text x="64" y="80" font-size="12" font-weight="700" fill="var(--ink)">2³  =  8</text>' +
        '<text x="64" y="102" font-size="12" font-weight="700" fill="var(--ink)">2²  =  4</text>' +
        '<text x="64" y="124" font-size="12" font-weight="700" fill="var(--ink)">2¹  =  2</text>' +
        '<rect x="34" y="132" width="144" height="24" rx="6" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.4"/>' +
        '<text x="64" y="149" font-size="12" font-weight="800" fill="var(--brand)">2⁰  =  1</text>' +
        '<text x="64" y="174" font-size="12" font-weight="800" fill="var(--good)">2⁻¹ =  1/2</text>' +
        '<text x="64" y="196" font-size="12" font-weight="800" fill="var(--good)">2⁻² =  1/4</text>' +
        '<text x="64" y="218" font-size="12" font-weight="800" fill="var(--good)">2⁻³ =  1/8</text>' +
        '<line x1="210" y1="74" x2="210" y2="212" stroke="var(--bad)" stroke-width="2"/>' +
        '<polygon points="210,218 205,208 215,208" fill="var(--bad)"/>' +
        '<text x="248" y="142" text-anchor="middle" font-size="11" font-weight="800" fill="var(--bad)">÷ 2</text>' +
        '<text x="248" y="157" text-anchor="middle" font-size="10" fill="var(--ink-2)">every step</text>' +
        '<text x="248" y="172" text-anchor="middle" font-size="10" fill="var(--ink-2)">down!</text>' +
        '<rect x="308" y="38" width="236" height="198" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>' +
        '<text x="426" y="57" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">Change of Base Toolkit</text>' +
        '<rect x="322" y="70" width="208" height="44" rx="8" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.2"/>' +
        '<text x="426" y="88" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">4 = 2²   ·   8 = 2³   ·   16 = 2⁴</text>' +
        '<text x="426" y="105" text-anchor="middle" font-size="11" fill="var(--brand)">e.g.  8⁴ = (2³)⁴ = 2¹²</text>' +
        '<rect x="322" y="124" width="208" height="44" rx="8" fill="var(--surface)" stroke="var(--good)" stroke-width="1.2"/>' +
        '<text x="426" y="142" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">9 = 3²   ·   27 = 3³   ·   81 = 3⁴</text>' +
        '<text x="426" y="159" text-anchor="middle" font-size="11" fill="var(--good)">e.g.  1/27 = 3⁻³</text>' +
        '<rect x="322" y="178" width="208" height="44" rx="8" fill="var(--brand-soft)" stroke="var(--bad)" stroke-width="1.2"/>' +
        '<text x="426" y="196" text-anchor="middle" font-size="11" font-weight="800" fill="var(--bad)">Reciprocal Fraction Rule</text>' +
        '<text x="426" y="213" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">(a/b)⁻ⁿ = (b/a)ⁿ  (flip &amp; drop −)</text>' +
        '</svg>',
      diagramCaption: "Negative exponents flip the base into a reciprocal rather than making the answer negative.",
      workedExamples: [
        {
          title: "Evaluating Zero & Negative Indices Together",
          problem: "Evaluate {{4^0 + 3^(-2)}} as an exact improper fraction.",
          steps: [
            "Any non-zero number to the power 0 is 1: {{4^0 = 1}}.",
            "Apply the negative index rule: {{3^(-2) = 1/(3^2) = 1/9}}.",
            "Add the results: {{1 + 1/9 = 9/9 + 1/9 = 10/9}}.",
          ],
          answer: "{{10/9}}",
          yourTurn: {
            question: "Evaluate {{7^0 + 2^(-3)}} as an improper fraction in its simplest form.",
            answer: { type: "fraction", n: 9, d: 8, simplest: true, form: "improper" },
            solution: "{{7^0 = 1}} and {{2^(-3) = 1/(2^3) = 1/8}}, so {{1 + 1/8 = 9/8}}.",
          },
        },
        {
          title: "Solving an Index Equation via Change of Base",
          problem: "Solve {{4^x * 8^2 = 16^3}} for {{x}}.",
          steps: [
            "Spot the shared prime base: 4, 8 and 16 are all powers of **2** ({{4 = 2^2}}, {{8 = 2^3}}, {{16 = 2^4}}).",
            "Rewrite every term in base 2 using brackets: {{(2^2)^x * (2^3)^2 = (2^4)^3}}.",
            "Apply the power-of-a-power law: {{2^(2x) * 2^6 = 2^12}}.",
            "Combine the left side: {{2^(2x + 6) = 2^12}}.",
            "Since the bases are equal, equate exponents: {{2x + 6 = 12}} ⇒ {{2x = 6}} ⇒ {{x = 3}}.",
          ],
          answer: "{{x = 3}}",
          yourTurn: {
            question: "Write {{9^4 * 27^2}} as a single power of 3 in the form {{3^n}}. Find the value of {{n}}.",
            answer: { type: "number", value: 14 },
            solution: "{{9 = 3^2}} and {{27 = 3^3}}, so {{(3^2)^4 * (3^3)^2 = 3^8 * 3^6 = 3^14}}, giving {{n = 14}}.",
          },
        },
      ],
      whyItWorks:
        "If {{a^m / a^n = a^(m-n)}} is to hold even when {{m <= n}}, then setting {{m = n}} forces {{a^0 = a^n / a^n = 1}}, and setting {{m = 0}} forces {{a^(-n) = a^0 / a^n = 1 / a^n}}. Defining zero and negative indices this way preserves all three index laws across all integers without exception.",
      keyPoints: [
        "{{a^0 = 1}} for every {{a != 0}} — NEVER 0!",
        "{{a^(-n) = 1/(a^n)}} — a negative index means reciprocal, NOT a negative value ({{2^(-3) = 1/8}}, never {{ -8 }}!).",
        "To evaluate {{(p/q)^(-n)}}, flip the fraction to {{(q/p)^n}} first, then apply the positive power.",
        "Always put brackets around the substituted power when changing base: {{8^x = (2^3)^x = 2^(3x)}}.",
      ],
      strategies: [
        "Memorise the core powers of 2 (up to {{2^6 = 64}}), 3 (up to {{3^4 = 81}}) and 5 (up to {{5^3 = 125}}).",
        "When solving an index equation with a fraction like {{1/27}}, convert to a negative power ({{3^(-3)}}) straight away.",
        "Check brackets carefully: {{5x^0 = 5}}, while {{(5x)^0 = 1}}.",
      ],
      thinkDeeper:
        "What is the value of {{(1/2)^(-3) + (-2)^3}}? Notice why the first term is positive (+8) while the second term is negative (−8), making the entire expression vanish!",
    },

    // =========================================================================
    // SECTION 3: standard-form-conversions
    // =========================================================================
    {
      id: "standard-form-conversions",
      heading: "Standard Form for Very Large & Very Small Numbers",
      discovery: {
        problem:
          "Earth is about 150,000,000 km from the Sun, and a red blood cell is about 0.0000075 m wide. How can scientists write both numbers compactly so you can compare the sizes of two huge or tiny numbers in one glance?",
        idea:
          "Separate every number into its **leading digits** (a number {{A}} strictly between 1 and 10) and its **scale** (a power of 10, {{10^n}}): {{1.5 * 10^8}} km and {{7.5 * 10^(-6)}} m. Because {{A}} is always between 1 and 10, the exponent {{n}} instantly tells you the order of magnitude!",
      },
      body:
        "A number is in **standard form** (scientific notation) when written as:\n" +
        "> **{{A * 10^n}}** where **{{1 <= A < 10}}** and **{{n}} is an integer**.\n\n" +
        "### 1. Checking Whether a Number Is Valid Standard Form\n" +
        "- {{4.7 * 10^5}} → **Valid** ({{1 <= 4.7 < 10}}).\n" +
        "- {{12.5 * 10^4}} → **NOT valid** (12.5 is ≥ 10; fix it to {{1.25 * 10^5}}).\n" +
        "- {{0.82 * 10^(-3)}} → **NOT valid** (0.82 is < 1; fix it to {{8.2 * 10^(-4)}}).\n\n" +
        "### 2. Converting Ordinary ↔ Standard Form\n" +
        "- **Large numbers (≥ 10)** have a **positive power** {{n > 0}}: count how many places the decimal point moves left to sit right after the first non-zero digit.\n" +
        "    `470,000` → decimal moves **5** places left → {{4.7 * 10^5}}.\n" +
        "- **Small numbers (between 0 and 1)** have a **negative power** {{n < 0}}: count how many places the decimal point moves right to sit right after the first non-zero digit (a great sanity check: for `0.00047`, there are **4** zeros in total before the 4, including the zero before the decimal point ⇒ {{10^(-4)}}!).\n" +
        "    `0.00047` → decimal moves **4** places right → {{4.7 * 10^(-4)}}.\n\n" +
        "### 3. Ordering Standard Form Numbers\n" +
        "1. Compare the **powers of 10** first — the larger exponent ALWAYS wins (remember {{ -3 > -4 }}, just like temperature: −3°C is warmer than −4°C!).\n" +
        "2. Only if two numbers share the **same power of 10**, compare their front numbers {{A}}.",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Anatomy of standard form A times 10 to the n for large and small numbers">' +
        '<rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>' +
        '<text x="280" y="23" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Standard Form Anatomy:  A × 10ⁿ   (1 ≤ A &lt; 10)</text>' +
        '<rect x="132" y="36" width="296" height="54" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.8"/>' +
        '<text x="215" y="64" text-anchor="middle" font-size="22" font-weight="800" fill="var(--brand)">A</text>' +
        '<text x="260" y="64" text-anchor="middle" font-size="20" font-weight="800" fill="var(--ink)">×</text>' +
        '<text x="315" y="64" text-anchor="middle" font-size="22" font-weight="800" fill="var(--good)">10ⁿ</text>' +
        '<text x="215" y="82" text-anchor="middle" font-size="10" font-weight="700" fill="var(--brand)">1 ≤ A &lt; 10</text>' +
        '<text x="315" y="82" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">integer n</text>' +
        '<rect x="16" y="106" width="254" height="130" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>' +
        '<text x="143" y="126" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">LARGE NUMBER (n &gt; 0)</text>' +
        '<text x="143" y="156" text-anchor="middle" font-size="16" font-weight="800" fill="var(--ink)">4 7 0 0 0 0 .</text>' +
        '<path d="M 192 162 Q 140 184 94 162" fill="none" stroke="var(--good)" stroke-width="2"/>' +
        '<polygon points="92,161 102,160 99,169" fill="var(--good)"/>' +
        '<text x="143" y="191" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">5 places left</text>' +
        '<text x="143" y="218" text-anchor="middle" font-size="15" font-weight="800" fill="var(--brand)">= 4.7 × 10⁵</text>' +
        '<rect x="290" y="106" width="254" height="130" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/>' +
        '<text x="417" y="126" text-anchor="middle" font-size="12" font-weight="800" fill="var(--bad)">SMALL NUMBER (n &lt; 0)</text>' +
        '<text x="417" y="156" text-anchor="middle" font-size="16" font-weight="800" fill="var(--ink)">0 . 0 0 0 4 7</text>' +
        '<path d="M 380 162 Q 416 184 452 162" fill="none" stroke="var(--bad)" stroke-width="2"/>' +
        '<polygon points="454,161 444,160 447,169" fill="var(--bad)"/>' +
        '<text x="417" y="191" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">4 places right (4 leading 0s)</text>' +
        '<text x="417" y="218" text-anchor="middle" font-size="15" font-weight="800" fill="var(--brand)">= 4.7 × 10⁻⁴</text>' +
        '</svg>',
      diagramCaption: "Count decimal-point jumps, never just trailing zeros — 470,000 has 4 zeros, NOT 5, yet its exponent is 10⁵!",
      workedExamples: [
        {
          title: "Converting Large & Small Numbers to Standard Form",
          problem: "Write (a) `470,000` and (b) `0.00047` in standard form.",
          steps: [
            "(a) Place the decimal point after the first non-zero digit: `4.7`. From `470,000.` to `4.7` is **5** places left, and the number is large ⇒ {{4.7 * 10^5}}.",
            "(b) Place the decimal point after the 4: `4.7`. From `0.00047` to `4.7` is **4** places right, and the number is tiny (< 1) ⇒ {{4.7 * 10^(-4)}}.",
          ],
          answer: "(a) {{4.7 * 10^5}}, (b) {{4.7 * 10^(-4)}}",
          yourTurn: {
            question: "Write `0.000 062` in standard form.",
            answer: { type: "number", value: 6.2e-5, standardForm: true, display: "{{6.2 * 10^(-5)}}" },
            solution: "Move the decimal point 5 places right (there are 5 leading zeros in total) to get {{6.2 * 10^(-5)}}.",
          },
        },
        {
          title: "Ordering Numbers in Standard Form",
          problem: "Write {{3.8 * 10^(-3)}}, {{9.1 * 10^(-4)}}, {{4.2 * 10^(-3)}} and {{1.5 * 10^(-2)}} in order from smallest to largest.",
          steps: [
            "Compare the exponents first: {{ -4 < -3 < -2 }}.",
            "Smallest exponent is {{ -4 }}: {{9.1 * 10^(-4)}} comes first (even though 9.1 looks big!).",
            "Break the tie at {{10^(-3)}} by comparing {{3.8 < 4.2}}: {{3.8 * 10^(-3)}} then {{4.2 * 10^(-3)}}.",
            "Largest exponent is {{ -2 }}: {{1.5 * 10^(-2)}} comes last.",
          ],
          answer: "{{9.1 * 10^(-4)}}, {{3.8 * 10^(-3)}}, {{4.2 * 10^(-3)}}, {{1.5 * 10^(-2)}}",
          yourTurn: {
            question: "Convert {{5.04 * 10^4}} into an ordinary number.",
            answer: { type: "number", value: 50400, allowFraction: false, display: "50,400" },
            solution: "Multiply 5.04 by {{10^4 = 10000}} (shift decimal point 4 places right): `50,400`.",
          },
        },
      ],
      whyItWorks:
        "Multiplying by {{10^n}} shifts every digit {{n}} columns to the left in base 10, while multiplying by {{10^(-n) = 1/(10^n)}} shifts every digit {{n}} columns to the right. Restricting {{A}} to {{1 <= A < 10}} guarantees every positive number has a **unique** standard form representation, making size comparisons instant.",
      keyPoints: [
        "Always check {{1 <= A < 10}} — `10 × 10^4` and `0.5 × 10^3` are NOT in standard form!",
        "The exponent {{n}} counts **place-value shifts**, NOT the number of trailing zeros (`470,000` has 4 zeros but {{10^5}}).",
        "A **negative** exponent means a small positive number between 0 and 1, NOT a negative number.",
        "When ordering, compare powers of 10 first; remember {{10^(-2) > 10^(-3) > 10^(-4)}}.",
      ],
      strategies: [
        "For small decimals like `0.00047`, count ALL zeros before the first non-zero digit (including the `0.` at the front) — that count equals the negative power (`4` → {{10^(-4)}})!",
        "When converting back to an ordinary number, write extra zeros as scaffolding, hop the decimal point one digit at a time, then tidy up.",
        "If an ordering question mixes ordinary numbers and standard form, convert all of them into standard form first.",
      ],
      thinkDeeper:
        "Can the number `0` be written in standard form? Check the condition {{1 <= A < 10}} to explain why standard form only applies to non-zero numbers!",
    },

    // =========================================================================
    // SECTION 4: standard-form-calculations
    // =========================================================================
    {
      id: "standard-form-calculations",
      heading: "Calculating in Standard Form",
      discovery: {
        problem:
          "Multiply {{(4 * 10^5) * (6 * 10^3)}}. Separating numbers and powers of 10 gives {{24 * 10^8}}. Why is that not finished yet — and when you rewrite `24` as `2.4`, does the power become {{10^9}} or {{10^7}}?",
        idea:
          "`24` is not between 1 and 10, so replace `24` by {{2.4 * 10^1}}! Then {{24 * 10^8 = (2.4 * 10^1) * 10^8 = 2.4 * 10^9}}. Think of a **see-saw**: dividing the front number by 10 MUST be balanced by multiplying the power of 10 by 10 (adding 1 to the exponent)!",
      },
      body:
        "Standard form turns monstrous multiplication and division into Year 7 mental arithmetic — as long as you remember to **adjust** at the end.\n\n" +
        "### 1. Multiplying & Dividing in Standard Form\n" +
        "- **Multiply**: group front numbers and powers of 10 separately:\n" +
        "    {{(A * 10^m) * (B * 10^n) = (A * B) * 10^(m+n)}}\n" +
        "- **Divide**: divide front numbers and subtract powers of 10:\n" +
        "    {{(A * 10^m) / (B * 10^n) = (A / B) * 10^(m-n)}}\n" +
        "- **Adjust** if the new front number falls outside {{1 <= A < 10}}:\n" +
        "  - Too big (e.g. {{24 * 10^8}}): replace {{24 = 2.4 * 10^1}} ⇒ {{2.4 * 10^9}} (front ÷10, exponent **+1**).\n" +
        "  - Too small (e.g. {{0.4 * 10^5}}): replace {{0.4 = 4 * 10^(-1)}} ⇒ {{4 * 10^4}} (front ×10, exponent **−1**).\n\n" +
        "### 2. Adding & Subtracting in Standard Form\n" +
        "**Warning**: You CANNOT just add the front numbers when the powers of 10 differ (that's like adding 3 hundreds and 4 tens to get 7!). Use either method:\n" +
        "- **Method A — Match the larger power of 10** (best for large exponents like {{10^8}} and {{10^7}}):\n" +
        "    {{3.2 * 10^5 + 4 * 10^4 = 3.2 * 10^5 + 0.4 * 10^5 = 3.6 * 10^5}}\n" +
        "- **Method B — Convert to ordinary numbers** (great for small powers like {{10^3}} or {{10^(-2)}}), add/subtract, then convert back to standard form.",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Adjustment see-saw for multiplying and dividing in standard form plus matching powers for addition">' +
        '<rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>' +
        '<text x="280" y="23" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">The Standard Form Adjustment See-Saw &amp; Matching Powers</text>' +
        '<rect x="16" y="38" width="254" height="104" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>' +
        '<text x="143" y="57" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">Front ≥ 10?  Divide A, Add Power</text>' +
        '<text x="143" y="81" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">24 × 10⁸</text>' +
        '<text x="143" y="103" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">(24 ÷ 10)  ×  (10⁸ × 10¹)</text>' +
        '<text x="143" y="128" text-anchor="middle" font-size="14" font-weight="800" fill="var(--good)">=  2.4 × 10⁹</text>' +
        '<rect x="290" y="38" width="254" height="104" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/>' +
        '<text x="417" y="57" text-anchor="middle" font-size="12" font-weight="800" fill="var(--bad)">Front &lt; 1?  Multiply A, Subtract Power</text>' +
        '<text x="417" y="81" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">0.4 × 10⁵</text>' +
        '<text x="417" y="103" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">(0.4 × 10)  ×  (10⁵ × 10⁻¹)</text>' +
        '<text x="417" y="128" text-anchor="middle" font-size="14" font-weight="800" fill="var(--bad)">=  4 × 10⁴</text>' +
        '<rect x="16" y="156" width="528" height="80" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>' +
        '<text x="280" y="176" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">Adding &amp; Subtracting: Match the Powers of 10 First!</text>' +
        '<text x="280" y="201" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">3.2 × 10⁵  +  4 × 10⁴   =   3.2 × 10⁵  +  0.4 × 10⁵   =   3.6 × 10⁵</text>' +
        '<text x="280" y="224" text-anchor="middle" font-size="11" fill="var(--ink-2)">Think of 10⁵ as a unit ("like terms"): 3.2 units + 0.4 units = 3.6 units!</text>' +
        '</svg>',
      diagramCaption: "Whenever A moves out of [1, 10), rewrite A itself in standard form and combine the powers of 10 — you will never shift the wrong way.",
      workedExamples: [
        {
          title: "Multiplying & Adjusting into Standard Form",
          problem: "Work out {{(4 * 10^5) * (6 * 10^3)}} and give your answer in standard form.",
          steps: [
            "Multiply the front numbers: {{4 * 6 = 24}}.",
            "Add the powers of 10: {{10^5 * 10^3 = 10^8}}.",
            "Combine: {{24 * 10^8}} (not yet standard form because 24 ≥ 10).",
            "Rewrite {{24 = 2.4 * 10^1}}, so {{2.4 * 10^1 * 10^8 = 2.4 * 10^9}}.",
          ],
          answer: "{{2.4 * 10^9}}",
          yourTurn: {
            question: "Work out {{(5 * 10^4) * (7 * 10^6)}} and give your answer in standard form.",
            answer: { type: "number", value: 3.5e11, standardForm: true, display: "{{3.5 * 10^11}}" },
            solution: "{{5 * 7 = 35}} and {{10^4 * 10^6 = 10^10}}. Adjust: {{35 * 10^10 = 3.5 * 10^1 * 10^10 = 3.5 * 10^11}}.",
          },
        },
        {
          title: "Adding Standard Form Numbers with Different Powers",
          problem: "Calculate {{3.2 * 10^5 + 4 * 10^4}}, giving your answer in standard form.",
          steps: [
            "Match both terms to the higher power {{10^5}}: {{4 * 10^4 = 0.4 * 10^5}}.",
            "Factor out {{10^5}} and add the front numbers: {{(3.2 + 0.4) * 10^5 = 3.6 * 10^5}}.",
            "Check {{1 <= 3.6 < 10}} — already valid standard form!",
          ],
          answer: "{{3.6 * 10^5}}",
          yourTurn: {
            question: "Work out {{6.5 * 10^4 - 8 * 10^3}} and give your answer in standard form.",
            answer: { type: "number", value: 5.7e4, standardForm: true, display: "{{5.7 * 10^4}}" },
            solution: "Match to {{10^4}}: {{8 * 10^3 = 0.8 * 10^4}}. Subtract: {{(6.5 - 0.8) * 10^4 = 5.7 * 10^4}}.",
          },
        },
      ],
      whyItWorks:
        "Because multiplication is commutative and associative, {{(A * 10^m)(B * 10^n) = (AB)(10^m * 10^n) = (AB) * 10^(m+n)}}. For addition, rewriting both numbers with the same power {{10^k}} lets you use the distributive law {{p * 10^k + q * 10^k = (p + q) * 10^k}} — just like collecting like terms {{3.2x + 0.4x = 3.6x}}!",
      keyPoints: [
        "Multiply/divide the front numbers and add/subtract the powers of 10 separately — watch double negatives like {{10^4 / 10^(-2) = 10^(4 - (-2)) = 10^6}}!",
        "ALWAYS finish by adjusting {{A}} so {{1 <= A < 10}}.",
        "If {{A}} gets 10 times smaller, add 1 to the exponent; if {{A}} gets 10 times bigger, subtract 1 from the exponent.",
        "For addition/subtraction, NEVER add exponents — match powers of 10 first (or convert to ordinary numbers).",
      ],
      strategies: [
        "To avoid shifting the exponent the wrong way when adjusting {{0.25 * 10^(-3)}}, explicitly write {{(2.5 * 10^(-1)) * 10^(-3) = 2.5 * 10^(-4)}}!",
        "When dividing {{(2 * 10^5) / (8 * 10^2)}}, write {{2/8 = 0.25}}, then adjust {{0.25 * 10^3 = 2.5 * 10^2}}.",
        "On a calculator, use the `×10ˣ` (or `EXP`) button rather than typing `× 10 ^`, especially when dividing!",
      ],
      thinkDeeper:
        "What happens when you subtract {{3.4 * 10^6 - 3.35 * 10^6}}? You get {{0.05 * 10^6}} — how many places must the decimal point jump to restore valid standard form, and what is the final exponent?",
    },
  ],

  learn: {
    flashcards: [
      { front: "What is the multiplication index law for matching bases?", back: "{{a^m * a^n = a^(m+n)}} — keep the base the same and **add** the powers." },
      { front: "What is the division index law for matching bases?", back: "{{a^m / a^n = a^(m-n)}} — keep the base the same and **subtract** the powers." },
      { front: "What is the power-of-a-power law?", back: "{{(a^m)^n = a^(mn)}} — **multiply** the powers together." },
      { front: "Simplify {{(3x^2)^3}}.", back: "{{27x^6}} — remember to cube the coefficient 3 as well ({{3^3 = 27}})!" },
      { front: "What does {{a^0}} equal (for {{a != 0}})?", back: "**1** (NOT 0!) — because {{a^n / a^n = a^0 = 1}}." },
      { front: "What is the difference between {{5x^0}} and {{(5x)^0}}?", back: "{{5x^0 = 5 * 1 = 5}}, whereas {{(5x)^0 = 1}}." },
      { front: "What does a negative index {{a^(-n)}} mean?", back: "The **reciprocal** {{1/(a^n)}} — never a negative number!" },
      { front: "Evaluate {{(2/3)^(-2)}}.", back: "Flip the fraction and square: {{(3/2)^2 = 9/4}}." },
      { front: "How do you write {{8^4}} as a power of 2?", back: "Replace 8 with {{2^3}}: {{(2^3)^4 = 2^12}}." },
      { front: "What are the two conditions for {{A * 10^n}} to be in valid standard form?", back: "{{1 <= A < 10}} AND {{n}} is an integer." },
      { front: "Convert `0.00054` into standard form.", back: "{{5.4 * 10^(-4)}} (4 leading zeros → power −4)." },
      { front: "How do you adjust {{32 * 10^6}} into valid standard form?", back: "Rewrite {{32 = 3.2 * 10^1}}, so {{3.2 * 10^7}}." },
      { front: "How do you adjust {{0.5 * 10^(-4)}} into valid standard form?", back: "Rewrite {{0.5 = 5 * 10^(-1)}}, so {{5 * 10^(-5)}}." },
      { front: "How do you add {{4.2 * 10^6 + 5 * 10^5}}?", back: "Match powers of 10: {{4.2 * 10^6 + 0.5 * 10^6 = 4.7 * 10^6}}." },
    ],
    mustKnow: [
      "Apply the three core index laws ({{a^m * a^n}}, {{a^m / a^n}}, {{(a^m)^n}}) accurately to numbers and multi-variable algebra.",
      "Raise numerical coefficients inside brackets to the outer power, e.g. {{(4x^3)^2 = 16x^6}}.",
      "Evaluate zero indices ({{a^0 = 1}}) and distinguish {{5x^0}} from {{(5x)^0}}.",
      "Convert negative integer indices (including fraction bases) into exact positive-index fractions.",
      "Rewrite powers of 4, 8, 16, 32, 9, 27, 81, 25, 125 into a common prime base to simplify or solve index equations.",
      "Convert very large and very small ordinary numbers into standard form {{A * 10^n}} ({{1 <= A < 10}}) and back.",
      "Order mixed sets of standard form numbers (including negative powers of 10) from smallest to largest.",
      "Multiply and divide numbers in standard form and adjust the result back into {{1 <= A < 10}}.",
      "Add and subtract numbers in standard form by matching powers of 10 or converting to ordinary numbers.",
      "Watch carefully for subtracting negative exponents when dividing in standard form (e.g. {{10^3 / 10^(-2) = 10^5}}).",
    ],
    misconceptions: [
      { wrong: "Never write: {{2^3 * 2^4 = 4^7}} (multiplying the bases).", right: "Write instead: Keep the base unchanged and add the indices: **{{2^7}}**." },
      { wrong: "Never write: {{5^0 = 0}}.", right: "Write instead: Any non-zero base to the power 0 equals **1** ({{5^0 = 1}})." },
      { wrong: "Never write: {{2^(-3) = -6}} or {{ -8 }}.", right: "Write instead: A negative index gives the reciprocal: **{{2^(-3) = 1/(2^3) = 1/8}}**." },
      { wrong: "Never write: {{(3x^2)^2 = 3x^4}} (forgetting to square the 3).", right: "Write instead: Square every factor inside the bracket: **{{9x^4}}**." },
      { wrong: "Never write: {{24 * 10^5}} as a final standard form answer, or adjust it to {{2.4 * 10^4}}.", right: "Write instead: {{24 = 2.4 * 10^1}}, so **{{2.4 * 10^6}}** (front ÷10 ⇒ exponent +1)." },
      { wrong: "Never write: {{3 * 10^4 + 2 * 10^5 = 5 * 10^9}}.", right: "Write instead: Match powers of 10 first: {{0.3 * 10^5 + 2 * 10^5 =}} **{{2.3 * 10^5}}**." },
    ],
    examMistakes: [
      "Subtracting the wrong way with negative powers: {{10^4 / 10^(-3) = 10^(4 - (-3)) = 10^7}}, NOT {{10^1}}!",
      "Adjusting {{0.4 * 10^(-3)}} the wrong way to {{4 * 10^(-2)}} instead of {{4 * 10^(-4)}} ({{ -3 - 1 = -4 }}!).",
      "Counting only the zeros *after* the decimal point in `0.0004` (3 zeros) instead of all leading zeros (4 → {{4 * 10^(-4)}}).",
      "Thinking {{9.5 * 10^(-5)}} is bigger than {{1.2 * 10^(-4)}} because 9.5 > 1.2 — always compare exponents first!",
      "Forgetting that {{8^x = (2^3)^x = 2^(3x)}} multiplies the indices rather than adding ({{2^(3+x)}}).",
      "Leaving {{x^1}} as {{x^0}} or dropping the invisible exponent 1 on a lone letter {{x}} when multiplying {{x * x^4 = x^5}}.",
      "Typing `4 × 10^6 ÷ 2 × 10^3` into a calculator without brackets or the `×10ˣ` key (which computes `(4 × 10^6 ÷ 2) × 10^3 = 2 × 10^9` instead of {{2 * 10^3}}!).",
    ],
    mnemonics: [
      {
        topic: "Core Index Laws",
        device: "MAD – SPM (Multiply Add, Divide Subtract, Power Multiply)",
        explanation: "With matching bases: Multiply → Add indices; Divide → Subtract indices; Power of a power → Multiply indices.",
      },
      {
        topic: "Negative Indices",
        device: "Negative Power Flips, Never Minus",
        explanation: "A minus sign in the exponent flips the base upside down into a fraction (reciprocal); it never puts a minus sign in front of the answer.",
      },
      {
        topic: "Standard Form Adjustment",
        device: "See-Saw Balance: Front Down → Power Up",
        explanation: "Divide the front number by 10? Add 1 to the exponent. Multiply the front number by 10? Subtract 1 from the exponent.",
      },
    ],
    realWorld: [
      {
        title: "Astronomy & Interstellar Distances",
        emoji: "🌌",
        detail: "The Sun's mass is {{1.99 * 10^30}} kg and one light-year is {{9.46 * 10^12}} km — standard form lets astrophysicists calculate orbits cleanly using index laws.",
      },
      {
        title: "Microbiology & Nanotechnology",
        emoji: "🔬",
        detail: "A DNA double helix is {{2.5 * 10^(-9)}} m wide (2.5 nanometres), while a human hair is {{7 * 10^(-5)}} m thick — dividing in standard form reveals a hair is ~28,000 times wider!",
      },
      {
        title: "Computer Memory & Binary Powers of 2",
        emoji: "💻",
        detail: "Digital storage grows in powers of 2: 1 kibibyte is {{2^10 = 1024}} bytes, and a 64-bit processor addresses up to {{2^64 ≈ 1.84 * 10^19}} memory locations.",
      },
      {
        title: "Chemistry & Avogadro's Constant",
        emoji: "⚗️",
        detail: "One mole of water molecules contains {{6.02 * 10^23}} molecules, and a single carbon atom weighs roughly {{1.99 * 10^(-23)}} g — multiplying their exponents cancels {{10^23 * 10^(-23) = 10^0 = 1}}!",
      },
    ],
    videos: [
      { title: "Laws of Indices (Multiplying, Dividing, Powers & Brackets)", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=corbettmaths+laws+of+indices" },
      { title: "Zero & Negative Indices and Change of Base", channel: "GCSE Maths Tutor", url: "https://www.youtube.com/results?search_query=gcse+maths+tutor+negative+indices+change+of+base" },
      { title: "Standard Form Conversions & Ordering", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=corbettmaths+standard+form" },
      { title: "Multiplying, Dividing, Adding & Subtracting Standard Form", channel: "GCSE Maths Tutor", url: "https://www.youtube.com/results?search_query=gcse+maths+tutor+standard+form+calculations" },
    ],
    formulas: [
      { name: "Multiplication Law", formula: "{{a^m * a^n = a^(m+n)}}", note: "Same base: add indices." },
      { name: "Division Law", formula: "{{a^m / a^n = a^(m-n)}}", note: "Same base: subtract indices." },
      { name: "Power of a Power", formula: "{{(a^m)^n = a^(mn)}}", note: "Multiply the indices." },
      { name: "Power of a Product", formula: "{{(ab)^n = a^n b^n}}", note: "Apply the power to coefficients AND variables." },
      { name: "Zero Index", formula: "{{a^0 = 1}}", note: "True for every non-zero base a ≠ 0." },
      { name: "Negative Index", formula: "{{a^(-n) = 1/(a^n)}}", note: "Reciprocal with positive exponent." },
      { name: "Negative Power of a Fraction", formula: "{{(a/b)^(-n) = (b/a)^n}}", note: "Flip the fraction, then apply the positive power." },
      { name: "Standard Form Definition", formula: "{{A * 10^n}}", note: "Requires 1 ≤ A < 10 and integer n." },
      { name: "Standard Form Multiplication", formula: "{{(A * 10^m)(B * 10^n) = (AB) * 10^(m+n)}}", note: "Adjust A back into [1, 10) at the end." },
      { name: "Standard Form Division", formula: "{{(A * 10^m) / (B * 10^n) = (A/B) * 10^(m-n)}}", note: "Watch double negatives in m − n and adjust A." },
    ],
  },
};
