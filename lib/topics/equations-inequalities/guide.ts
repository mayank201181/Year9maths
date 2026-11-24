import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "equations-inequalities",
  title: "Equations, Simultaneous Equations & Inequalities",
  strand: "Algebra",
  icon: "⚖️",
  summary:
    "Solve multi-step linear equations with brackets and fractions, capture both roots of simple quadratics, master simultaneous equations and their graphs, and solve inequalities including negative multipliers.",
  intro:
    "An equation is a balance scale: whatever valid operation you perform on one side, you must perform identically on the other. In this unit you progress from linear equations with brackets and fractions, to quadratics with two solutions, to pairs of simultaneous equations linked directly to straight-line intersections, and finally to inequalities where one sign rule separates full marks from a flipped answer.",
  guide: [
    // =========================================================================
    // 1. LINEAR EQUATIONS WITH BRACKETS, BOTH SIDES & FRACTIONS
    // =========================================================================
    {
      id: "linear-equations-brackets-fractions",
      heading: "Linear Equations with Brackets, Both Sides & Fractions",
      discovery: {
        problem:
          "Compare two ways to solve {{(2x - 3)/4 + 1 = 5}}. Way A: subtract {{1}} first, then multiply by {{4}}. Way B: multiply EVERY term by {{4}} first to clear the fraction. Do both give the same {{x}}, and what happens if someone forgets to multiply the {{+1}} by {{4}} in Way B?",
        idea:
          "Way A gives {{(2x - 3)/4 = 4 => 2x - 3 = 16 => 2x = 19 => x = 9.5}}. Way B gives {{(2x - 3) + 4 = 20 => 2x + 1 = 20 => 2x = 19 => x = 9.5}}! Both give {{x = 9.5}}, but ONLY when you multiply EVERY SINGLE TERM on both sides by {{4}} — forgetting the {{+1}} would falsely give {{2x - 3 + 1 = 20}}.",
      },
      body: `A **linear equation** has the unknown (such as {{x}}) only to the power {{1}}. Every linear equation in Year 9 can be solved cleanly by following one reliable pipeline:

### The 5-Step Linear Equation Pipeline
1. **Clear fractions first (if any):** Multiply **every term on both sides** by the Lowest Common Multiple (LCM) of all denominators. Wrap any multi-term numerator in brackets so signs stay protected!
2. **Expand brackets cleanly:** Watch negative numbers outside brackets, e.g. {{-3(x - 4) = -3x + 12}}.
3. **Collect unknowns on one side:** Subtract the **smaller** {{x}}-term from both sides so the coefficient of {{x}} stays positive!
4. **Collect constants on the other side:** Undo addition/subtraction using inverse operations.
5. **Divide by the coefficient of {{x}}, then CHECK:** Substitute your answer back into BOTH sides of the original equation.

### Handling Two Fractions Safely
For an equation like {{(x + 2)/3 - (x - 1)/4 = 2}}:
- The LCM of {{3}} and {{4}} is {{12}}.
- Multiply every term by {{12}}: {{4(x + 2) - 3(x - 1) = 24}}.
- Notice the minus sign before {{3(x - 1)}}! Expanding gives {{4x + 8 - 3x + 3 = 24}}, so {{x + 11 = 24}}, giving {{x = 13}}.
- **Check:** {{(13 + 2)/3 - (13 - 1)/4 = 15/3 - 12/4 = 5 - 3 = 2}} ✓!`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Step-by-step balance pipeline solving (x + 2)/3 - (x - 1)/4 = 2 by multiplying every term by the LCM 12">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="25" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)">Clearing Denominators Safely: Multiply EVERY Term by the LCM</text>
  <!-- Equation box -->
  <rect x="65" y="40" width="430" height="44" rx="9" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.8"/>
  <text x="280" y="67" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)">(x + 2)/3  −  (x − 1)/4  =  2     [LCM of 3 &amp; 4 is 12]</text>
  <!-- Three step cards -->
  <rect x="24" y="106" width="160" height="94" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="104" y="128" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">1. ×12 to ALL terms</text>
  <text x="104" y="156" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">4(x + 2) − 3(x − 1)</text>
  <text x="104" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">= 24</text>

  <line x1="184" y1="153" x2="196" y2="153" stroke="var(--ink-2)" stroke-width="2"/>
  <polygon points="196,148 204,153 196,158" fill="var(--ink-2)"/>

  <rect x="204" y="106" width="160" height="94" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="284" y="128" text-anchor="middle" font-size="12" font-weight="700" fill="var(--bad)">2. Expand (− × − = +)</text>
  <text x="284" y="156" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">4x + 8 − 3x + 3 = 24</text>
  <text x="284" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">x + 11 = 24</text>

  <line x1="364" y1="153" x2="376" y2="153" stroke="var(--ink-2)" stroke-width="2"/>
  <polygon points="376,148 384,153 376,158" fill="var(--ink-2)"/>

  <rect x="384" y="106" width="152" height="94" rx="10" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.8"/>
  <text x="460" y="128" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">3. Solve &amp; Check</text>
  <text x="460" y="156" text-anchor="middle" font-size="16" font-weight="800" fill="var(--good)">x = 13</text>
  <text x="460" y="180" text-anchor="middle" font-size="12" fill="var(--ink)">15/3 − 12/4 = 5 − 3 = 2 ✓</text>

  <text x="280" y="232" text-anchor="middle" font-size="12" fill="var(--ink-2)">Watch the two biggest traps: multiplying the constant 2 by 12, and turning −3(−1) into +3.</text>
</svg>`,
      diagramCaption:
        "Multiplying every single term by the LCM removes every denominator in one clean line — always wrap numerators in brackets.",
      whyItWorks:
        "If two expressions are equal ({{L = R}}), multiplying both sides by any non-zero number {{k}} preserves equality ({{kL = kR}}) because the distributive law scales every additive term equally.",
      keyPoints: [
        "When multiplying by a denominator (or LCM), multiply **every single term** on BOTH sides, including plain integers.",
        "Always put invisible brackets around fraction numerators when there is a minus sign in front of the fraction.",
        "Collect the unknown on whichever side currently has the **larger** coefficient of {{x}} to avoid negative coefficients.",
        "Never leave an equation unchecked — a 5-second substitution catches 100% of sign slips.",
      ],
      strategies: [
        "Look for a shortcut before expanding: for {{5(x - 2) = 35}}, divide both sides by {{5}} immediately to get {{x - 2 = 7}}!",
        "Move the smaller {{x}}-term first so you work with positive coefficients.",
        "Leave non-integer answers as exact simplified fractions unless the question asks for a decimal.",
      ],
      thinkDeeper:
        "What happens if you try to solve {{3(x + 2) = 3x + 6}}? What about {{3(x + 2) = 3x + 10}}? One is true for EVERY number {{x}} (an identity) and one has NO solution at all — which is which?",
      workedExamples: [
        {
          title: "Unknown on Both Sides with Negative Brackets",
          problem: "Solve {{5(x - 2) - 2(x - 4) = x + 10}}.",
          steps: [
            "Expand both brackets carefully: {{5x - 10 - 2x + 8 = x + 10}} (note {{-2 * (-4) = +8}}!).",
            "Simplify the left-hand side: {{3x - 2 = x + 10}}.",
            "Subtract {{x}} from both sides: {{2x - 2 = 10}}.",
            "Add {{2}} to both sides: {{2x = 12}}, so {{x = 6}}.",
            "Check: LHS {{= 5(4) - 2(2) = 20 - 4 = 16}}; RHS {{= 6 + 10 = 16}} ✓.",
          ],
          answer: "{{x = 6}}",
          yourTurn: {
            question: "Solve {{4(x - 3) - (x - 5) = x + 7}}.",
            answer: { type: "number", value: 7 },
            solution:
              "Expand: {{4x - 12 - x + 5 = x + 7 => 3x - 7 = x + 7 => 2x = 14 => x = 7}}.",
          },
        },
        {
          title: "Equation with Fractions on Both Sides",
          problem: "Solve {{(2x + 1)/3 = (x + 7)/2}}.",
          steps: [
            "The LCM of {{3}} and {{2}} is {{6}}. Multiply both sides by {{6}} (cross-multiply): {{2(2x + 1) = 3(x + 7)}}.",
            "Expand both sides: {{4x + 2 = 3x + 21}}.",
            "Subtract {{3x}} from both sides: {{x + 2 = 21}}.",
            "Subtract {{2}}: {{x = 19}}.",
            "Check: LHS {{= 39/3 = 13}}; RHS {{= 26/2 = 13}} ✓.",
          ],
          answer: "{{x = 19}}",
          yourTurn: {
            question: "Solve {{(3x - 1)/4 = (x + 5)/2}}.",
            answer: { type: "number", value: 11 },
            solution:
              "Multiply both sides by {{4}}: {{3x - 1 = 2(x + 5) => 3x - 1 = 2x + 10 => x = 11}}.",
          },
        },
      ],
    },

    // =========================================================================
    // 2. FINDING BOTH SOLUTIONS OF SIMPLE QUADRATIC EQUATIONS
    // =========================================================================
    {
      id: "simple-quadratics",
      heading: "Finding Both Solutions of Simple Quadratic Equations",
      discovery: {
        problem:
          "How many numbers square to give {{25}}? Now solve {{(x - 3)^2 = 25}} — why does this equation have TWO completely different answers, and why is one of them negative?",
        idea:
          "BOTH {{+5}} and {{-5}} square to give {{25}}! So {{x - 3}} can equal {{+5}} (giving {{x = 8}}) OR {{x - 3}} can equal {{-5}} (giving {{x = -2}}). Check both: {{(8 - 3)^2 = 5^2 = 25}} and {{(-2 - 3)^2 = (-5)^2 = 25}}!",
      },
      body: `A **quadratic equation** contains {{x^2}} (and no higher power). Unlike a linear equation (which has one solution), a quadratic equation typically has **TWO solutions** — and losing the second solution is the single most common exam mistake!

### Type 1: Direct Square Root ({{x^2 = k}} and {{a(x + b)^2 = c}})
1. Isolate the squared part first (undo addition/subtraction and division BEFORE taking any square root!).
2. Take the square root of both sides, ALWAYS writing **{{+-}}** (plus or minus):
   - If {{x^2 = 36}}, then {{x = 6}} **or** {{x = -6}}.
   - If {{3(x + 1)^2 = 48}}, divide by {{3}} to get {{(x + 1)^2 = 16}}, then {{x + 1 = +-4}}, giving {{x = 3}} or {{x = -5}}.
- Note: if {{x^2 = 0}}, there is one repeated solution {{x = 0}}. If {{x^2 = -9}}, there are **no real solutions** because no real number squares to a negative!

### Type 2: The Zero-Product Property — Factorised Quadratics
If the product of two numbers is zero ({{A * B = 0}}), then **at least one of them MUST be zero** ({{A = 0}} or {{B = 0}}).
- Example: {{(x - 4)(x + 7) = 0}} → either {{x - 4 = 0}} (so {{x = 4}}) or {{x + 7 = 0}} (so {{x = -7}}).
- Example with a common factor: {{x^2 - 5x = 0}} → factorise to {{x(x - 5) = 0}} → {{x = 0}} or {{x = 5}}. **NEVER divide both sides by {{x}}** — dividing by {{x}} silently deletes the solution {{x = 0}}!

### Type 3: Rearrange to {{= 0}} and Factorise ({{x^2 + bx + c = 0}})
The Zero-Product Property ONLY works when the right-hand side is **ZERO**!
- To solve {{x^2 + 3x = 18}}, subtract {{18}} first to get {{x^2 + 3x - 18 = 0}}, factorise into {{(x + 6)(x - 3) = 0}}, then read off {{x = -6}} or {{x = 3}}.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two paths to both quadratic solutions: taking plus or minus square root for (x - 3) squared = 25, and zero-product property for (x - 8)(x + 2) = 0">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="25" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)">Every Quadratic Has Up to TWO Solutions — Never Drop One!</text>
  <!-- Left branch: ± square root -->
  <rect x="20" y="44" width="250" height="168" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.8"/>
  <text x="145" y="67" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">Method A: Isolate Square → ±√</text>
  <text x="145" y="92" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">(x − 3)² = 25</text>
  <line x1="145" y1="100" x2="88" y2="128" stroke="var(--good)" stroke-width="2"/>
  <line x1="145" y1="100" x2="202" y2="128" stroke="var(--bad)" stroke-width="2"/>
  <rect x="34" y="130" width="106" height="66" rx="8" fill="var(--surface)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="87" y="152" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">x − 3 = +5</text>
  <text x="87" y="178" text-anchor="middle" font-size="15" font-weight="800" fill="var(--ink)">x = 8</text>
  <rect x="150" y="130" width="106" height="66" rx="8" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="203" y="152" text-anchor="middle" font-size="12" font-weight="700" fill="var(--bad)">x − 3 = −5</text>
  <text x="203" y="178" text-anchor="middle" font-size="15" font-weight="800" fill="var(--ink)">x = −2</text>

  <!-- Right branch: Zero-product -->
  <rect x="290" y="44" width="250" height="168" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.8"/>
  <text x="415" y="67" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">Method B: Make = 0 → Factorise</text>
  <text x="415" y="92" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">x² − 6x − 16 = 0  →  (x−8)(x+2) = 0</text>
  <line x1="415" y1="100" x2="358" y2="128" stroke="var(--good)" stroke-width="2"/>
  <line x1="415" y1="100" x2="472" y2="128" stroke="var(--bad)" stroke-width="2"/>
  <rect x="304" y="130" width="106" height="66" rx="8" fill="var(--surface)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="357" y="152" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">x − 8 = 0</text>
  <text x="357" y="178" text-anchor="middle" font-size="15" font-weight="800" fill="var(--ink)">x = 8</text>
  <rect x="420" y="130" width="106" height="66" rx="8" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="473" y="152" text-anchor="middle" font-size="12" font-weight="700" fill="var(--bad)">x + 2 = 0</text>
  <text x="473" y="178" text-anchor="middle" font-size="15" font-weight="800" fill="var(--ink)">x = −2</text>

  <text x="280" y="234" text-anchor="middle" font-size="12" fill="var(--ink-2)">Both equations are algebraically identical — and both split cleanly into x = 8 and x = −2!</text>
</svg>`,
      diagramCaption:
        "Whether you take ±√ or factorise with = 0, a quadratic splits into two linear equations giving both solutions.",
      whyItWorks:
        "For any real number {{r}}, {{(-r)^2 = r^2}}, so {{u^2 = k}} (with {{k > 0}}) has two symmetric roots {{u = +sqrt(k)}} and {{u = -sqrt(k)}}. Equivalently, {{u^2 - k = (u - sqrt(k))(u + sqrt(k)) = 0}}, and the product of two real numbers equals zero if and only if at least one factor is zero.",
      keyPoints: [
        "Whenever you take a square root to solve an equation, ALWAYS write **{{+-}}** to capture BOTH roots.",
        "Isolate {{x^2}} or {{(x + b)^2}} completely BEFORE taking the square root.",
        "For factorised quadratics, the right-hand side MUST be **{{0}}** before splitting into two linear equations.",
        "Never divide both sides of an equation like {{x^2 = 7x}} by {{x}} — move {{7x}} across and factorise {{x(x - 7) = 0}} so you keep {{x = 0}}!",
      ],
      strategies: [
        "If {{x}} appears ONLY inside one square like {{2(x - 4)^2 = 50}}, isolate and take {{+-sqrt(25)}} instead of expanding!",
        "If both {{x^2}} and {{x}} terms appear, collect EVERYTHING on one side {{= 0}} and factorise.",
        "Check BOTH answers in the original equation — each one should make LHS = RHS.",
      ],
      thinkDeeper:
        "Why doesn't the zero-product rule work for {{(x - 2)(x + 1) = 6}}? You CANNOT say {{x - 2 = 6}} or {{x + 1 = 6}} — give a counterexample of two numbers multiplying to {{6}} where neither is {{6}}, then find the true solutions by expanding and setting {{= 0}}.",
      workedExamples: [
        {
          title: "Solving by Isolating a Squared Bracket",
          problem: "Find both solutions of {{2(x + 3)^2 - 7 = 43}}.",
          steps: [
            "Add {{7}} to both sides: {{2(x + 3)^2 = 50}}.",
            "Divide both sides by {{2}}: {{(x + 3)^2 = 25}}.",
            "Take the square root with {{+-}}: {{x + 3 = 5}} or {{x + 3 = -5}}.",
            "Solve both linear equations: {{x = 2}} or {{x = -8}}.",
            "Check {{x = -8}}: {{2(-8 + 3)^2 - 7 = 2(-5)^2 - 7 = 50 - 7 = 43}} ✓.",
          ],
          answer: "{{x = 2}} or {{x = -8}}",
          yourTurn: {
            question: "Find both solutions of {{3(x - 2)^2 = 27}}.",
            answer: {
              type: "list",
              values: [5, -1],
              ordered: false,
              display: "{{x = 5}} or {{x = -1}}",
            },
            solution:
              "Divide by {{3}}: {{(x - 2)^2 = 9}}, so {{x - 2 = +-3}}, giving {{x = 5}} or {{x = -1}}.",
          },
        },
        {
          title: "Solving by Rearranging to Zero and Factorising",
          problem: "Find both solutions of {{x^2 - 2x = 24}}.",
          steps: [
            "Rearrange so the right-hand side is {{0}}: {{x^2 - 2x - 24 = 0}}.",
            "Factorise (two numbers multiplying to {{-24}} and adding to {{-2}} are {{-6}} and {{+4}}): {{(x - 6)(x + 4) = 0}}.",
            "Set each bracket to {{0}}: {{x - 6 = 0 => x = 6}}, or {{x + 4 = 0 => x = -4}}.",
            "Check {{x = -4}}: {{(-4)^2 - 2(-4) = 16 + 8 = 24}} ✓.",
          ],
          answer: "{{x = 6}} or {{x = -4}}",
          yourTurn: {
            question: "Find both solutions of {{x^2 + 4x = 21}}.",
            answer: {
              type: "list",
              values: [3, -7],
              ordered: false,
              display: "{{x = 3}} or {{x = -7}}",
            },
            solution:
              "{{x^2 + 4x - 21 = 0 => (x + 7)(x - 3) = 0 => x = -7}} or {{x = 3}}.",
          },
        },
      ],
    },

    // =========================================================================
    // 3. SOLVING LINEAR SIMULTANEOUS EQUATIONS
    // =========================================================================
    {
      id: "simultaneous-equations",
      heading: "Solving Linear Simultaneous Equations",
      discovery: {
        problem:
          "At a school café, {{2}} coffees and {{1}} muffin cost {{£7}}, while {{2}} coffees and {{3}} muffins cost {{£13}}. Without using formal algebra yet, how can you instantly find the price of ONE muffin — and then one coffee?",
        idea:
          "Comparing the two orders, the {{2}} coffees are identical, so the extra {{2}} muffins must account for the extra {{£6}}! Thus {{1}} muffin costs {{£3}}, and then {{2}} coffees cost {{7 - 3 = £4}}, so {{1}} coffee costs {{£2}}. That exact idea — subtracting matching terms to eliminate one unknown — is the **elimination method**!",
      },
      body: `A **pair of simultaneous equations** gives two relationships linking two unknowns (usually {{x}} and {{y}}). Your goal is to find the single pair of values {{(x, y)}} that makes **BOTH equations true at the same time**.

### Method 1: Elimination (Best for {{ax + by = c}} Form)
1. **Line up** the {{x}}-terms, {{y}}-terms, and constants neatly in columns and label equations **(1)** and **(2)**.
2. **Match coefficients** of either {{x}} or {{y}} by multiplying one or both equations by well-chosen integers (multiply EVERY term, including the right-hand side!).
3. **Eliminate using the SSS / DSA sign rule:**
   - **S**ame **S**igns → **S**ubtract the equations (e.g. {{+3y}} and {{+3y}}, or {{-2y}} and {{-2y}}).
   - **D**ifferent **S**igns → **A**dd the equations (e.g. {{+3y}} and {{-3y}}).
4. **Solve** the resulting single-variable equation.
5. **Substitute back** into either original equation to find the second unknown, then **check in the OTHER original equation**!

### Method 2: Substitution (Best When One Variable Is Already Isolated)
When one equation looks like {{y = 2x - 1}} or {{x = 5 - 3y}}, substitute that entire expression (in brackets!) into the other equation:
- Given {{y = 2x - 1}} and {{3x + 2y = 19}}, substitute to get {{3x + 2(2x - 1) = 19 => 7x - 2 = 19 => x = 3}}, then {{y = 2(3) - 1 = 5}}.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Elimination method walkthrough solving 3x + 2y = 16 and 2x - y = 6 by scaling the second equation by 2 and adding because signs are different">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="25" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)">Elimination Method: Scale → SSS / DSA → Substitute → Check</text>
  <!-- Step 1 -->
  <rect x="18" y="44" width="166" height="156" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.6"/>
  <text x="101" y="66" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">1. Match y-coefficients</text>
  <text x="101" y="94" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">(1)  3x + 2y = 16</text>
  <text x="101" y="118" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">(2)  2x −  y = 6</text>
  <text x="101" y="148" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">Multiply (2) by 2:</text>
  <text x="101" y="172" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">(3)  4x − 2y = 12</text>

  <!-- Arrow -->
  <line x1="184" y1="122" x2="196" y2="122" stroke="var(--ink-2)" stroke-width="2"/>
  <polygon points="196,117 204,122 196,127" fill="var(--ink-2)"/>

  <!-- Step 2 -->
  <rect x="204" y="44" width="166" height="156" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.8"/>
  <text x="287" y="66" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">2. Different Signs → ADD</text>
  <text x="287" y="94" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">  3x + 2y = 16</text>
  <text x="287" y="116" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">+ 4x − 2y = 12</text>
  <line x1="224" y1="126" x2="350" y2="126" stroke="var(--ink)" stroke-width="1.5"/>
  <text x="287" y="150" text-anchor="middle" font-size="14" font-weight="800" fill="var(--brand)">7x = 28</text>
  <text x="287" y="176" text-anchor="middle" font-size="16" font-weight="800" fill="var(--good)">x = 4</text>

  <!-- Arrow -->
  <line x1="370" y1="122" x2="382" y2="122" stroke="var(--ink-2)" stroke-width="2"/>
  <polygon points="382,117 390,122 382,127" fill="var(--ink-2)"/>

  <!-- Step 3 -->
  <rect x="390" y="44" width="152" height="156" rx="10" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.8"/>
  <text x="466" y="66" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">3. Find y &amp; Check</text>
  <text x="466" y="94" text-anchor="middle" font-size="12" fill="var(--ink)">In (1): 3(4) + 2y = 16</text>
  <text x="466" y="116" text-anchor="middle" font-size="12" fill="var(--ink)">12 + 2y = 16 → 2y = 4</text>
  <text x="466" y="142" text-anchor="middle" font-size="16" font-weight="800" fill="var(--good)">y = 2</text>
  <text x="466" y="170" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Check (2): 2(4)−2 = 6 ✓</text>

  <text x="280" y="232" text-anchor="middle" font-size="12" fill="var(--ink-2)">SSS = Same Signs Subtract   |   DSA = Different Signs Add   (ALWAYS check in the other equation!)</text>
</svg>`,
      diagramCaption:
        "Elimination cancels one variable cleanly: multiply to match coefficients, add if signs differ (or subtract if signs match), then check in the unused equation.",
      whyItWorks:
        "If {{A = B}} and {{C = D}}, then adding equals to equals preserves equality ({{A + C = B + D}}), and subtracting equals from equals also preserves equality ({{A - C = B - D}}). Matching a coefficient first guarantees that one unknown drops out completely.",
      keyPoints: [
        "When scaling an equation, multiply **ALL THREE** parts (the {{x}}-term, the {{y}}-term, AND the constant).",
        "Remember **SSS / DSA**: Same Signs Subtract; Different Signs Add.",
        "Always find **BOTH** unknowns ({{x}} AND {{y}}) — stopping after finding {{x}} loses half the marks!",
        "Check your pair {{(x, y)}} in the equation you did NOT use for substitution.",
      ],
      strategies: [
        "Choose whichever variable is easier to eliminate — look for a coefficient of {{1}} or {{-1}}, or opposite signs already waiting to add!",
        "If one equation already has {{y = ...}} or {{x = ...}}, substitution is faster and less error-prone than rearranging for elimination.",
        "When subtracting equations with negatives, write the subtraction term-by-term (e.g. {{3y - (-2y) = 5y}}) to avoid sign slips.",
      ],
      thinkDeeper:
        "What happens if you try to eliminate {{x}} from {{2x + y = 7}} and {{4x + 2y = 10}}? You get {{0 = 4}}! What does that tell you about the two equations — and about their graphs?",
      workedExamples: [
        {
          title: "Elimination Requiring Both Equations to Be Scaled",
          problem: "Solve simultaneously: {{3x + 4y = 22}} and {{2x + 3y = 16}}.",
          steps: [
            "Eliminate {{x}} by matching to {{6x}}: multiply (1) by {{2}} → {{6x + 8y = 44}}; multiply (2) by {{3}} → {{6x + 9y = 48}}.",
            "Both {{6x}} terms have the SAME sign (positive), so subtract (1) from (2): {{(6x - 6x) + (9y - 8y) = 48 - 44}}.",
            "Simplify: {{y = 4}}.",
            "Substitute {{y = 4}} into (2): {{2x + 3(4) = 16 => 2x + 12 = 16 => 2x = 4 => x = 2}}.",
            "Check in (1): {{3(2) + 4(4) = 6 + 16 = 22}} ✓.",
          ],
          answer: "{{x = 2, y = 4}}",
          yourTurn: {
            question: "Solve simultaneously: {{2x + 3y = 19}} and {{3x + 2y = 16}}. Enter your answer as `x, y`.",
            answer: {
              type: "list",
              values: [2, 5],
              ordered: true,
              display: "{{x = 2, y = 5}}",
            },
            solution:
              "Scale to {{6x}}: {{6x + 9y = 57}} and {{6x + 4y = 32}}. Subtract: {{5y = 25 => y = 5}}. In (1): {{2x + 15 = 19 => x = 2}}.",
          },
        },
        {
          title: "Solving by Substitution",
          problem: "Solve simultaneously: {{y = 3x - 5}} and {{2x + 3y = 18}}.",
          steps: [
            "Replace {{y}} with {{(3x - 5)}} in the second equation: {{2x + 3(3x - 5) = 18}}.",
            "Expand and simplify: {{2x + 9x - 15 = 18 => 11x - 15 = 18}}.",
            "Solve for {{x}}: {{11x = 33 => x = 3}}.",
            "Find {{y}}: {{y = 3(3) - 5 = 4}}.",
            "Check in {{2x + 3y = 18}}: {{2(3) + 3(4) = 6 + 12 = 18}} ✓.",
          ],
          answer: "{{x = 3, y = 4}}",
          yourTurn: {
            question: "Solve simultaneously: {{y = 2x - 1}} and {{5x - y = 13}}. Enter your answer as `x, y`.",
            answer: {
              type: "list",
              values: [4, 7],
              ordered: true,
              display: "{{x = 4, y = 7}}",
            },
            solution:
              "Substitute: {{5x - (2x - 1) = 13 => 3x + 1 = 13 => 3x = 12 => x = 4}}, then {{y = 2(4) - 1 = 7}}.",
          },
        },
      ],
    },

    // =========================================================================
    // 4. CONNECTING SOLUTIONS OF EQUATIONS TO GRAPHS
    // =========================================================================
    {
      id: "equations-and-graphs",
      heading: "Connecting Solutions of Equations to Graphs",
      discovery: {
        problem:
          "Every point on the line {{y = 2x - 1}} satisfies {{y = 2x - 1}}, and every point on the line {{y = 5 - x}} satisfies {{y = 5 - x}}. What is special about the single point where those two lines CROSS?",
        idea:
          "The crossing point lies on **BOTH** lines at once, so its coordinates {{(x, y)}} satisfy BOTH equations simultaneously! Solving {{2x - 1 = 5 - x}} gives {{3x = 6 => x = 2}}, and {{y = 3}}, so the lines cross at {{(2, 3)}}.",
      },
      body: `Algebra and coordinate geometry are two views of the exact same mathematics. Every equation draws a picture, and every **solution** has a concrete geometric meaning:

### 1. Simultaneous Equations = Intersection Point of Two Lines
- Each linear equation in {{x}} and {{y}} defines a **straight line**.
- The **solution** {{(x, y)}} of a pair of linear simultaneous equations is the exact **intersection point** where the two lines cross!
- **Three geometric cases:**
  1. **Different gradients** (e.g. {{y = 2x + 1}} and {{y = -x + 4}}) → the lines cross at **one unique point** → **one solution**.
  2. **Same gradient, different y-intercepts** (e.g. {{y = 2x + 1}} and {{y = 2x - 3}}) → **parallel lines** that never meet → **no solution**.
  3. **Identical equations** (e.g. {{y = 2x + 1}} and {{2y = 4x + 2}}) → the **same line** on top of itself → **infinitely many solutions**.

### 2. Solving One-Variable Equations from a Graph
- The solutions of {{f(x) = 0}} (such as {{x^2 - 2x - 3 = 0}}) are the **{{x}}-intercepts** (roots) where the graph {{y = f(x)}} crosses the {{x}}-axis ({{y = 0}}).
- To solve {{f(x) = k}} (for example, {{x^2 - 2x - 3 = 5}}) from the graph of {{y = f(x)}}, draw the horizontal line {{y = 5}} and read off the **{{x}}-coordinates** of every intersection!
- More generally, the {{x}}-coordinates where {{y = f(x)}} and {{y = g(x)}} intersect are the solutions to the equation {{f(x) = g(x)}}.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coordinate grid showing straight lines y = 2x - 1 and y = 5 - x intersecting at the point (2, 3), which is the solution of the simultaneous equations">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="22" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Simultaneous Solution = Intersection Point (2, 3)</text>
  <!-- Grid: x from -1 to 6, y from -2 to 6; plot area x: 52..304 (36px/unit), y: 224..32 (24px/unit) -->
  <!-- x0 = 52 + 1*36 = 88; y0 = 224 - 2*24 = 176 -->
  <g stroke="var(--line)" stroke-width="1">
    <line x1="52" y1="32" x2="52" y2="224"/>
    <line x1="88" y1="32" x2="88" y2="224"/>
    <line x1="124" y1="32" x2="124" y2="224"/>
    <line x1="160" y1="32" x2="160" y2="224"/>
    <line x1="196" y1="32" x2="196" y2="224"/>
    <line x1="232" y1="32" x2="232" y2="224"/>
    <line x1="268" y1="32" x2="268" y2="224"/>
    <line x1="304" y1="32" x2="304" y2="224"/>
    <line x1="52" y1="32" x2="304" y2="32"/>
    <line x1="52" y1="56" x2="304" y2="56"/>
    <line x1="52" y1="80" x2="304" y2="80"/>
    <line x1="52" y1="104" x2="304" y2="104"/>
    <line x1="52" y1="128" x2="304" y2="128"/>
    <line x1="52" y1="152" x2="304" y2="152"/>
    <line x1="52" y1="176" x2="304" y2="176"/>
    <line x1="52" y1="200" x2="304" y2="200"/>
    <line x1="52" y1="224" x2="304" y2="224"/>
  </g>
  <!-- Axes -->
  <line x1="52" y1="176" x2="310" y2="176" stroke="var(--ink)" stroke-width="2"/>
  <line x1="88" y1="228" x2="88" y2="28" stroke="var(--ink)" stroke-width="2"/>
  <text x="314" y="180" font-size="11" font-weight="700" fill="var(--ink)">x</text>
  <text x="88" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">y</text>
  <!-- Axis tick labels -->
  <text x="124" y="191" text-anchor="middle" font-size="10" fill="var(--ink-2)">1</text>
  <text x="160" y="191" text-anchor="middle" font-size="10" fill="var(--ink-2)">2</text>
  <text x="196" y="191" text-anchor="middle" font-size="10" fill="var(--ink-2)">3</text>
  <text x="232" y="191" text-anchor="middle" font-size="10" fill="var(--ink-2)">4</text>
  <text x="268" y="191" text-anchor="middle" font-size="10" fill="var(--ink-2)">5</text>
  <text x="79" y="156" text-anchor="end" font-size="10" fill="var(--ink-2)">1</text>
  <text x="79" y="132" text-anchor="end" font-size="10" fill="var(--ink-2)">2</text>
  <text x="79" y="108" text-anchor="end" font-size="10" fill="var(--ink-2)">3</text>
  <text x="79" y="84" text-anchor="end" font-size="10" fill="var(--ink-2)">4</text>
  <text x="79" y="60" text-anchor="end" font-size="10" fill="var(--ink-2)">5</text>
  <!-- Line 1: y = 2x - 1 from x = -0.5 (y=-2) to x = 3.5 (y=6) -->
  <!-- px(-0.5) = 70, py(-2) = 224; px(3.5) = 214, py(6) = 32 -->
  <line x1="70" y1="224" x2="214" y2="32" stroke="var(--brand)" stroke-width="2.8"/>
  <!-- Line 2: y = 5 - x from x = -1 (y=6) to x = 6 (y=-1) -->
  <!-- px(-1) = 52, py(6) = 32; px(6) = 304, py(-1) = 200 -->
  <line x1="52" y1="32" x2="304" y2="200" stroke="var(--bad)" stroke-width="2.8"/>
  <!-- Dashed drop lines from (2, 3): px(2)=160, py(3)=104 -->
  <line x1="160" y1="104" x2="160" y2="176" stroke="var(--good)" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="88" y1="104" x2="160" y2="104" stroke="var(--good)" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="160" cy="104" r="6" fill="var(--good)" stroke="var(--surface)" stroke-width="2"/>
  <text x="172" y="96" font-size="12" font-weight="800" fill="var(--good)">(2, 3)</text>
  <!-- Legend card on right -->
  <rect x="336" y="42" width="206" height="178" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="439" y="66" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">Blue:  y = 2x − 1</text>
  <text x="439" y="88" text-anchor="middle" font-size="13" font-weight="700" fill="var(--bad)">Orange:  y = 5 − x</text>
  <line x1="354" y1="102" x2="524" y2="102" stroke="var(--line)" stroke-width="1.5"/>
  <text x="439" y="124" text-anchor="middle" font-size="12" fill="var(--ink)">At the crossing point:</text>
  <text x="439" y="146" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">2x − 1 = 5 − x  ⇒  x = 2</text>
  <text x="439" y="168" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">y = 2(2) − 1 = 3</text>
  <text x="439" y="198" text-anchor="middle" font-size="13" font-weight="800" fill="var(--good)">Solution: (2, 3) ✓</text>
</svg>`,
      diagramCaption:
        "The point (2, 3) lies on both y = 2x − 1 and y = 5 − x, so x = 2, y = 3 solves the simultaneous pair.",
      whyItWorks:
        "By definition, the graph of an equation is the set of ALL points {{(x, y)}} that make the equation true. Therefore, a point lies on BOTH graphs if and only if its coordinates satisfy BOTH equations simultaneously.",
      keyPoints: [
        "The solution to two simultaneous linear equations is the intersection coordinate {{(x, y)}} — always write {{x}} FIRST, then {{y}}!",
        "Two lines with the **same gradient** and **different y-intercepts** are parallel, so their simultaneous equations have **no solution**.",
        "The roots (solutions) of {{f(x) = 0}} are the **{{x}}-intercepts** where {{y = f(x)}} crosses the {{x}}-axis.",
        "To solve {{f(x) = k}} graphically, intersect {{y = f(x)}} with the horizontal line {{y = k}} and read the **{{x}}-values**.",
      ],
      strategies: [
        "Set {{y = y}} (equate the two right-hand sides) whenever both lines are written in {{y = mx + c}} form.",
        "Check gradients BEFORE trying to solve: equal gradients immediately reveal parallel lines (no solution) or identical lines.",
        "Verify any graph reading algebraically by substituting the coordinates into both line equations.",
      ],
      thinkDeeper:
        "The graph of {{y = x^2 - 4x + 3}} crosses the {{x}}-axis at {{x = 1}} and {{x = 3}}, and has its lowest point (vertex) at {{(2, -1)}}. How many solutions does {{x^2 - 4x + 3 = k}} have when {{k = 2}}, when {{k = -1}}, and when {{k = -2}}?",
      workedExamples: [
        {
          title: "Finding the Intersection Point of Two Lines Algebraically",
          problem:
            "Find the exact coordinates of the point where the lines {{y = 3x - 4}} and {{y = 11 - 2x}} intersect.",
          steps: [
            "At the intersection point, both {{y}}-values are equal, so set {{3x - 4 = 11 - 2x}}.",
            "Add {{2x}} to both sides: {{5x - 4 = 11}}.",
            "Add {{4}} and divide by {{5}}: {{5x = 15 => x = 3}}.",
            "Find {{y}} using the first line: {{y = 3(3) - 4 = 5}}.",
            "Check on the second line: {{11 - 2(3) = 5}} ✓. Intersection is {{(3, 5)}}.",
          ],
          answer: "{{(3, 5)}}",
          yourTurn: {
            question:
              "Find the coordinates of the intersection point of {{y = 4x - 7}} and {{y = x + 5}}. Enter as `(x, y)`.",
            answer: {
              type: "list",
              values: [4, 9],
              ordered: true,
              display: "(4, 9)",
            },
            solution:
              "Set {{4x - 7 = x + 5 => 3x = 12 => x = 4}}, then {{y = 4 + 5 = 9}}, giving {{(4, 9)}}.",
          },
        },
        {
          title: "Using a Graph of {{y = x^2 - 3x - 4}} to Solve Related Equations",
          problem:
            "The curve {{y = x^2 - 3x - 4}} is drawn on a grid. What straight line should you draw on the same grid to solve {{x^2 - 3x - 4 = 6}}, and what are the solutions?",
          steps: [
            "Since the curve already plots {{y = x^2 - 3x - 4}}, setting {{y = 6}} gives the equation {{x^2 - 3x - 4 = 6}} — so draw the horizontal line {{y = 6}}.",
            "Algebraic check: {{x^2 - 3x - 4 = 6 => x^2 - 3x - 10 = 0 => (x - 5)(x + 2) = 0}}.",
            "The line {{y = 6}} cuts the parabola at {{x = 5}} and {{x = -2}}.",
          ],
          answer: "Draw {{y = 6}}; solutions {{x = 5}} and {{x = -2}}",
          yourTurn: {
            question:
              "The line {{y = 2x + 3}} and the line {{x + y = 12}} cross at a point {{P}}. Find the coordinates of {{P}} as `(x, y)`.",
            answer: {
              type: "list",
              values: [3, 9],
              ordered: true,
              display: "(3, 9)",
            },
            solution:
              "Substitute {{y = 2x + 3}} into {{x + y = 12}}: {{x + 2x + 3 = 12 => 3x = 9 => x = 3}}, then {{y = 9}}, so {{(3, 9)}}.",
          },
        },
      ],
    },

    // =========================================================================
    // 5. SIMPLIFYING & SOLVING INEQUALITIES (INCLUDING NEGATIVES)
    // =========================================================================
    {
      id: "inequalities",
      heading: "Simplifying & Solving Inequalities (Including Negatives)",
      discovery: {
        problem:
          "Start with the true statement {{2 < 5}}. Multiply BOTH sides by {{-1}}: you get {{-2}} on the left and {{-5}} on the right. Which number is GREATER on the number line — {{-2}} or {{-5}}? What happened to the `<` sign?",
        idea:
          "On the number line, {{-2}} lies to the RIGHT of {{-5}}, so {{-2 > -5}}! Multiplying (or dividing) by a negative reflects the entire number line across {{0}}, reversing left and right — so **the inequality sign MUST flip**!",
      },
      body: `An **inequality** compares two expressions using {{<}} (less than), {{>}} (greater than), {{<=}} (less than or equal to), or {{>=}} (greater than or equal to). Instead of one isolated value, its solution is an entire **range** of numbers.

### 1. Number-Line Notation
- **Open (hollow) circle ○** for strict inequalities {{<}} and {{>}} — the boundary value is **NOT included**.
- **Closed (filled) circle ●** for inclusive inequalities {{<=}} and {{>=}} — the boundary value **IS included**.
- An arrow extends right for {{> / >=}} and left for {{< / <=}}; a **double inequality** like {{-2 < x <= 3}} is drawn as a segment connecting an open circle at {{-2}} to a filled circle at {{3}}.

### 2. Solving Linear Inequalities & The Negative Flip Rule
Solve a linear inequality using the exact same inverse operations as an equation — WITH ONE CRUCIAL RULE:
- **Adding or subtracting** any number (positive or negative) keeps the sign unchanged.
- **Multiplying or dividing by a POSITIVE number** keeps the sign unchanged.
- **Multiplying or dividing by a NEGATIVE number FLIPS the inequality sign!** ({{< <-> >}}, {{<= <-> >=}}).

**Pro Tip to Avoid Flipping Errors:** If the coefficient of {{x}} is negative (e.g. {{7 - 3x > 19}}), you can either divide by {{-3}} and flip ({{-3x > 12 => x < -4}}), OR add {{3x}} to move it to the positive side ({{7 > 19 + 3x => -12 > 3x => -4 > x}}, which reads the exact same way: {{x < -4}}!).

### 3. Double Inequalities & Listing Integer Solutions
For a double inequality like {{-5 <= 2x + 1 < 9}}, apply every operation to **ALL THREE PARTS** at once:
- Subtract {{1}}: {{-6 <= 2x < 8}}
- Divide by {{2}}: {{-3 <= x < 4}}
- Integer solutions: {{-3, -2, -1, 0, 1, 2, 3}} (notice {{-3}} IS included, while {{4}} is NOT!).`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Number line showing the double inequality -2 less than x less than or equal to 3 with an open circle at -2 and closed circle at 3, plus the negative flip rule">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="25" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)">Number Lines &amp; The Negative-Multiplier Flip Rule</text>
  <!-- Top half: number line for -2 < x <= 3 -->
  <text x="280" y="50" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">Double Inequality:   −2 &lt; x ≤ 3   (Integers: −1, 0, 1, 2, 3)</text>
  <!-- Axis from x=-4 (60) to x=5 (500): 9 units, ~48px/unit: start 64 + (n+4)*48 -->
  <line x1="46" y1="98" x2="514" y2="98" stroke="var(--ink)" stroke-width="2"/>
  <polygon points="46,98 54,93 54,103" fill="var(--ink)"/>
  <polygon points="514,98 506,93 506,103" fill="var(--ink)"/>
  <!-- Ticks -4..5 -->
  <g stroke="var(--ink)" stroke-width="1.5">
    <line x1="64" y1="92" x2="64" y2="104"/>
    <line x1="112" y1="92" x2="112" y2="104"/>
    <line x1="160" y1="92" x2="160" y2="104"/>
    <line x1="208" y1="92" x2="208" y2="104"/>
    <line x1="256" y1="92" x2="256" y2="104"/>
    <line x1="304" y1="92" x2="304" y2="104"/>
    <line x1="352" y1="92" x2="352" y2="104"/>
    <line x1="400" y1="92" x2="400" y2="104"/>
    <line x1="448" y1="92" x2="448" y2="104"/>
    <line x1="496" y1="92" x2="496" y2="104"/>
  </g>
  <g font-size="11" font-weight="700" fill="var(--ink-2)" text-anchor="middle">
    <text x="64" y="120">−4</text>
    <text x="112" y="120">−3</text>
    <text x="160" y="120">−2</text>
    <text x="208" y="120">−1</text>
    <text x="256" y="120">0</text>
    <text x="304" y="120">1</text>
    <text x="352" y="120">2</text>
    <text x="400" y="120">3</text>
    <text x="448" y="120">4</text>
    <text x="496" y="120">5</text>
  </g>
  <!-- Highlighted interval (-2 at 160 to 3 at 400) -->
  <line x1="166" y1="74" x2="400" y2="74" stroke="var(--brand)" stroke-width="4"/>
  <circle cx="160" cy="74" r="6" fill="var(--surface)" stroke="var(--brand)" stroke-width="2.5"/>
  <circle cx="400" cy="74" r="6" fill="var(--brand)" stroke="var(--brand)" stroke-width="2.5"/>
  <text x="160" y="62" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">open ○ (not −2)</text>
  <text x="400" y="62" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">closed ● (includes 3)</text>

  <!-- Bottom comparison box: Flip rule -->
  <rect x="28" y="142" width="504" height="90" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.8"/>
  <text x="280" y="165" text-anchor="middle" font-size="13" font-weight="700" fill="var(--bad)">WARNING: Dividing or Multiplying by a NEGATIVE Flips the Sign!</text>
  <text x="155" y="194" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">−3x ≥ 12</text>
  <line x1="215" y1="189" x2="295" y2="189" stroke="var(--bad)" stroke-width="2"/>
  <polygon points="295,184 305,189 295,194" fill="var(--bad)"/>
  <text x="255" y="182" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">÷ (−3) &amp; FLIP!</text>
  <text x="385" y="194" text-anchor="middle" font-size="15" font-weight="800" fill="var(--good)">x ≤ −4</text>
  <text x="280" y="220" text-anchor="middle" font-size="12" fill="var(--ink-2)">Quick test: x = −5 gives −3(−5) = 15 ≥ 12 ✓   |   x = 0 gives 0 ≥ 12 ✗</text>
</svg>`,
      diagramCaption:
        "Hollow circles exclude endpoints (<, >), solid circles include them (≤, ≥), and dividing by a negative always reverses the inequality symbol.",
      whyItWorks:
        "If {{a < b}}, then {{b - a > 0}}. Multiplying by a negative number {{-k}} (with {{k > 0}}) gives {{(-k)(b - a) < 0}}, so {{-kb + ka < 0}}, which rearranges to {{-ka > -kb}} — the inequality has reversed direction!",
      keyPoints: [
        "Open circle ○ = strict ({{<, >}}, endpoint excluded); filled circle ● = inclusive ({{<=, >=}}, endpoint included).",
        "Multiplying or dividing BOTH sides by a **negative** number reverses the inequality sign.",
        "Keep the inequality symbol on EVERY line of working — NEVER replace it with `=` while solving!",
        "When solving a double inequality, perform every operation on ALL THREE sections simultaneously.",
      ],
      strategies: [
        "Test one simple number inside your final solution range (like {{x = 0}} or an integer just inside the boundary) in the ORIGINAL inequality to verify the direction of the sign!",
        "To avoid ever forgetting a sign flip, move any negative {{x}}-term to the other side by adding it first.",
        "Always re-read whether a question asks for the inequality, the **list of integers**, or the **largest/smallest integer**.",
      ],
      thinkDeeper:
        "Suppose {{a < b}} and BOTH {{a}} and {{b}} are positive. What happens to the inequality when you take reciprocals ({{1/a}} vs {{1/b}})? Test {{2 < 5}} vs {{1/2}} and {{1/5}} — why does the sign flip?",
      workedExamples: [
        {
          title: "Inequality with a Negative Coefficient of {{x}}",
          problem: "Solve the inequality {{11 - 4x <= 27}}.",
          steps: [
            "Subtract {{11}} from both sides: {{-4x <= 16}}.",
            "Divide both sides by {{-4}} AND **flip** {{<=}} to {{>=}}: {{x >= -4}}.",
            "Alternative (no flip): add {{4x}} → {{11 <= 27 + 4x => -16 <= 4x => -4 <= x}}, i.e. {{x >= -4}}.",
            "Check with {{x = 0}} (which satisfies {{x >= -4}}): {{11 - 4(0) = 11 <= 27}} ✓.",
          ],
          answer: "{{x >= -4}}",
          yourTurn: {
            question: "Solve the inequality {{9 - 3x > 24}}.",
            answer: {
              type: "text",
              accept: ["x < -5", "-5 > x"],
              display: "{{x < -5}}",
            },
            solution:
              "Subtract {{9}}: {{-3x > 15}}. Divide by {{-3}} and flip the sign: {{x < -5}}.",
          },
        },
        {
          title: "Double Inequality and Integer Solutions",
          problem: "List ALL integer values of {{n}} that satisfy {{-7 < 2n - 3 <= 5}}.",
          steps: [
            "Add {{3}} to ALL THREE parts: {{-4 < 2n <= 8}}.",
            "Divide ALL THREE parts by {{2}} (positive, so signs stay the same): {{-2 < n <= 4}}.",
            "Since {{-2}} is strictly excluded ({{<}}) and {{4}} is included ({{<=}}), the integers are {{-1, 0, 1, 2, 3, 4}}.",
          ],
          answer: "{{-1, 0, 1, 2, 3, 4}}",
          yourTurn: {
            question: "List ALL integer values of {{n}} that satisfy {{-3 <= 2n + 1 < 7}}. Separate with commas.",
            answer: {
              type: "list",
              values: [-2, -1, 0, 1, 2],
              ordered: false,
              display: "−2, −1, 0, 1, 2",
            },
            solution:
              "Subtract {{1}}: {{-4 <= 2n < 6}}. Divide by {{2}}: {{-2 <= n < 3}}. Integers: {{-2, -1, 0, 1, 2}}.",
          },
        },
      ],
    },
  ],
  learn: {
    flashcards: [
      {
        front: "How do you clear fractions cleanly in an equation like {{(x + 1)/3 + 2 = x/4}}?",
        back: "Multiply **EVERY term on both sides** by the LCM of the denominators ({{12}}), remembering to multiply the plain integer {{2}} by {{12}} as well.",
      },
      {
        front: "What is the first step when solving {{5x - 3 = 2x + 12}}?",
        back: "Subtract the smaller {{x}}-term ({{2x}}) from both sides to get {{3x - 3 = 12}}, keeping the coefficient of {{x}} positive.",
      },
      {
        front: "Solve {{x^2 = 49}} — how many solutions are there?",
        back: "TWO solutions: {{x = 7}} and {{x = -7}} (written {{x = +-7}}), because {{(-7)^2 = 49}} as well!",
      },
      {
        front: "Solve {{(x - 4)^2 = 9}} without expanding.",
        back: "Take {{+-sqrt(9)}}: {{x - 4 = 3}} or {{x - 4 = -3}}, giving {{x = 7}} or {{x = 1}}.",
      },
      {
        front: "Why must you NEVER divide both sides of {{x^2 = 6x}} by {{x}}?",
        back: "Dividing by {{x}} loses the solution {{x = 0}}! Instead rearrange to {{x^2 - 6x = 0}}, factorise {{x(x - 6) = 0}}, giving {{x = 0}} or {{x = 6}}.",
      },
      {
        front: "What does the Zero-Product Property state?",
        back: "If {{A * B = 0}}, then {{A = 0}} or {{B = 0}} (or both). It ONLY works when one side of the equation equals **zero**!",
      },
      {
        front: "What does **SSS / DSA** mean for solving simultaneous equations by elimination?",
        back: "Once coefficients match: **S**ame **S**igns **S**ubtract; **D**ifferent **S**igns **A**dd.",
      },
      {
        front: "When is the **substitution method** quicker than elimination for simultaneous equations?",
        back: "When one equation already has {{x}} or {{y}} as the subject (e.g. {{y = 3x - 2}}).",
      },
      {
        front: "How do the solutions of two linear simultaneous equations appear on a coordinate grid?",
        back: "As the **intersection point** {{(x, y)}} where the two straight lines cross.",
      },
      {
        front: "When does a pair of linear simultaneous equations have NO solution?",
        back: "When the two lines are **parallel** (same gradient {{m}}, different {{y}}-intercepts {{c}}), so they never intersect.",
      },
      {
        front: "How do you solve {{f(x) = k}} from the graph of {{y = f(x)}}?",
        back: "Draw the horizontal line {{y = k}} and read off the **{{x}}-coordinates** of every intersection point.",
      },
      {
        front: "What is the difference between an open circle ○ and a closed circle ● on an inequality number line?",
        back: "Open circle ○ excludes the boundary ({{<}} or {{>}}); closed circle ● includes the boundary ({{<=}} or {{>=}}).",
      },
      {
        front: "When MUST you flip an inequality sign?",
        back: "Whenever you **multiply or divide both sides by a negative number** (e.g. {{-2x < 10 => x > -5}}).",
      },
      {
        front: "How do you solve a double inequality like {{-5 < 3x + 1 <= 10}}?",
        back: "Apply each inverse operation to **ALL THREE** parts simultaneously: {{-6 < 3x <= 9 => -2 < x <= 3}}.",
      },
    ],
    mustKnow: [
      "Solve linear equations with single brackets, unknowns on both sides, and fractional terms by clearing denominators with the LCM.",
      "Check solutions of any equation by substituting back into the original left-hand and right-hand sides.",
      "Find BOTH solutions of simple quadratics {{x^2 = k}} and {{a(x + b)^2 = c}} using {{+-sqrt(...)}}.",
      "Solve factorised quadratics {{(x - p)(x - q) = 0}} and rearrange {{x^2 + bx + c = 0}} to solve via factorising.",
      "Solve pairs of linear simultaneous equations accurately by both elimination (scaling + SSS/DSA) and substitution.",
      "Form and solve simultaneous equations from real-life word problems.",
      "Interpret the solution of simultaneous equations as the intersection point {{(x, y)}} of two straight lines, and spot parallel lines (no solution).",
      "Represent inequalities on number lines with open ○ and closed ● circles, and list all integer solutions.",
      "Solve linear inequalities — including reversing the sign when multiplying or dividing by a negative — and solve double inequalities.",
    ],
    misconceptions: [
      {
        wrong: "Solving {{x^2 = 16}} and writing only {{x = 4}}.",
        right: "Always capture BOTH roots: {{x = 4}} or {{x = -4}} ({{x = +-4}}).",
      },
      {
        wrong: "Dividing {{x^2 = 5x}} by {{x}} to get only {{x = 5}}.",
        right: "Rearrange to {{x^2 - 5x = 0}} and factorise {{x(x - 5) = 0}} so you keep BOTH {{x = 0}} and {{x = 5}}.",
      },
      {
        wrong: "Solving {{(x + 2)/3 + 1 = 4}} by multiplying only the fraction and RHS by {{3}}: {{x + 2 + 1 = 12}}.",
        right: "Multiply **every term** by {{3}}: {{(x + 2) + 3 = 12 => x = 7}}.",
      },
      {
        wrong: "Solving {{-3x > 12}} by dividing by {{-3}} without flipping: {{x > -4}}.",
        right: "Dividing by a negative FLIPS the inequality sign: {{x < -4}}.",
      },
      {
        wrong: "Writing {{(x - 3)(x + 5) = 0}} gives {{x = -3}} or {{x = 5}}.",
        right: "Set each bracket to {{0}}: {{x - 3 = 0 => x = +3}} and {{x + 5 = 0 => x = -5}} (opposite signs to the constants inside the brackets!).",
      },
      {
        wrong: "Replacing `<` with `=` while solving an inequality and forgetting which way the sign points at the end.",
        right: "Keep the inequality symbol on every single line of working and test a sample number in the original inequality.",
      },
    ],
    examMistakes: [
      "Forgetting to multiply the right-hand side constant when scaling an equation in simultaneous elimination.",
      "Expanding a negative bracket in front of a fraction numerator wrongly, e.g. {{-(x - 4) = -x - 4}} instead of {{-x + 4}}.",
      "Stopping after finding {{x}} in simultaneous equations and forgetting to substitute back to find {{y}}.",
      "Applying the zero-product rule when the right-hand side is NOT zero (e.g. {{(x - 1)(x + 2) = 4}}).",
      "Using an open circle instead of a closed circle (or vice versa) on an inequality number line.",
      "Including an endpoint when listing integers for a strict inequality like {{-2 < x <= 3}} (putting {{-2}} in the list by mistake).",
      "Reversing {{(x, y)}} coordinates when stating the intersection point of two graphed lines.",
    ],
    mnemonics: [
      {
        topic: "Elimination Sign Rule",
        device: "SSS / DSA — Same Signs Subtract, Different Signs Add",
        explanation:
          "Once the coefficients of {{x}} or {{y}} match in size, subtract the equations if their signs are the same ({{+3y}} & {{+3y}}) and add if their signs differ ({{+3y}} & {{-3y}}).",
      },
      {
        topic: "Inequality Circles",
        device: "Extra Ink on the Sign = Extra Ink in the Circle!",
        explanation:
          "The symbols {{<=}} and {{>=}} have an extra line underneath (more ink), so they get a filled-in closed circle ● (more ink); strict {{<}} and {{>}} stay hollow ○.",
      },
      {
        topic: "Negative Inequality Rule",
        device: "Multiply or Divide by Minus → Flip the Mouth!",
        explanation:
          "Whenever you multiply or divide both sides of an inequality by a negative number, reverse the direction of the inequality mouth immediately.",
      },
    ],
    realWorld: [
      {
        title: "Break-Even Analysis in Business",
        emoji: "💼",
        detail:
          "Comparing two pricing plans — say {{C = 20 + 0.5n}} vs {{C = 5 + 1.25n}} — uses simultaneous equations and line intersections to find the exact break-even point where one plan becomes cheaper.",
      },
      {
        title: "Engineering Safety Limits (Inequalities)",
        emoji: "🌉",
        detail:
          "Bridge load ratings, lift weight limits ({{80n + 150 <= 1200}}), and aircraft altitude bands are all expressed as linear and double inequalities whose integer solutions set exact passenger limits.",
      },
      {
        title: "Projectile & Braking Physics",
        emoji: "⚽",
        detail:
          "Finding when a thrown ball hits a given height {{h}} leads to simple quadratic equations with TWO solutions — one on the way up and one on the way down!",
      },
      {
        title: "Circuit Analysis & Navigation",
        emoji: "🛰️",
        detail:
          "Electrical engineers solve systems of simultaneous linear equations (Kirchhoff's laws) to find currents in every branch of a microchip, and GPS receivers solve intersecting equations to pinpoint your coordinates.",
      },
    ],
    videos: [
      {
        title: "Solving Linear Equations with Brackets & Fractions",
        channel: "Corbettmaths",
        url: "https://www.youtube.com/results?search_query=Corbettmaths+solving+equations+with+fractions+brackets",
      },
      {
        title: "Solving Simple Quadratics & Factorised Quadratics",
        channel: "GCSE Maths Tutor",
        url: "https://www.youtube.com/results?search_query=GCSE+Maths+Tutor+solving+quadratics+by+factorising",
      },
      {
        title: "Simultaneous Equations — Elimination, Substitution & Graphs",
        channel: "Corbettmaths",
        url: "https://www.youtube.com/results?search_query=Corbettmaths+simultaneous+equations+elimination+graphical",
      },
      {
        title: "Solving Linear & Double Inequalities (Including Negatives)",
        channel: "GCSE Maths Tutor",
        url: "https://www.youtube.com/results?search_query=GCSE+Maths+Tutor+solving+inequalities+negative+number+line",
      },
    ],
    formulas: [
      {
        name: "Clearing Fractions (LCM Rule)",
        formula: "{{a/p + b/q = c  =>  aq + bp = cpq}}",
        note: "Multiply EVERY term on both sides by the LCM of denominators.",
      },
      {
        name: "Direct Square Root Rule",
        formula: "{{x^2 = k  (k > 0)  =>  x = +sqrt(k)  or  x = -sqrt(k)}}",
        note: "Always include BOTH positive and negative roots.",
      },
      {
        name: "Shifted Square Equation",
        formula: "{{a(x + b)^2 = c  =>  x = -b +- sqrt(c/a)}}",
        note: "Divide by a first, then take ±√, then subtract b.",
      },
      {
        name: "Zero-Product Property",
        formula: "{{(x - p)(x - q) = 0  =>  x = p  or  x = q}}",
        note: "Requires 0 on the right-hand side.",
      },
      {
        name: "Elimination Sign Rule (SSS / DSA)",
        formula: "{{ax + by = c,   ax + dy = e  =>  (b - d)y = c - e}}",
        note: "Same Signs Subtract; Different Signs Add.",
      },
      {
        name: "Line Intersection Condition",
        formula: "{{y = m_1 x + c_1   and   y = m_2 x + c_2  =>  m_1 x + c_1 = m_2 x + c_2}}",
        note: "Unique solution whenever m₁ ≠ m₂; parallel (no solution) if m₁ = m₂ and c₁ ≠ c₂.",
      },
      {
        name: "Graphical Roots of f(x) = k",
        formula: "{{f(x) = k}}  →  {{x}}-values where {{y = f(x)}} meets {{y = k}}",
        note: "For f(x) = 0, read the x-intercepts on the x-axis.",
      },
      {
        name: "Negative Multiplier Flip Rule",
        formula: "{{-ax < b  (a > 0)  =>  x > -b/a}}",
        note: "Multiplying or dividing by a negative reverses the inequality sign.",
      },
      {
        name: "Double Inequality Operations",
        formula: "{{p < ax + b <= q  (a > 0)  =>  (p - b)/a < x <= (q - b)/a}}",
        note: "Apply every inverse operation to ALL THREE parts at once.",
      },
    ],
  },
};
