import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "linear-graphs-m1",
    title: "MCQ Paper 1 — Plotting, Gradients & Regions Basics",
    questions: [
      {
        id: "linear-graphs-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "explicit-implicit-graphs",
        question: "Find the value of {{y}} on the line {{y = 3x - 4}} when {{x = -2}}.",
        options: ["−10", "−2", "2", "10"],
        answerIndex: 0,
        hints: [
          "Substitute {{x = -2}} carefully into {{3x - 4}}.",
          "Remember that {{3 * (-2) = -6}}, then subtract {{4}}.",
        ],
        explanation:
          "Substituting {{x = -2}} gives {{y = 3(-2) - 4 = -6 - 4 = -10}}. Getting {{2}} comes from forgetting the minus sign on {{3(-2)}}, and getting {{-2}} comes from adding {{4}} instead of subtracting {{4}}.",
      },
      {
        id: "linear-graphs-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "explicit-implicit-graphs",
        question: "Which of these equations represents a **vertical** straight line?",
        options: ["{{y = -3}}", "{{x = -3}}", "{{y = -3x}}", "{{x + y = -3}}"],
        answerIndex: 1,
        hints: [
          "Every point on a vertical line has the exact same {{x}}-coordinate.",
          "Think of HOY–VUX: Vertical lines have equation {{x = k}}.",
        ],
        explanation:
          "On {{x = -3}}, every point has {{x}}-coordinate {{-3}} (such as {{(-3, 0), (-3, 2), (-3, 5)}}), which forms a vertical line. By contrast, {{y = -3}} is a horizontal line.",
      },
      {
        id: "linear-graphs-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "explicit-implicit-graphs",
        question: "What are the coordinates of the **{{x}}-intercept** of the implicit line {{4x + 5y = 20}}?",
        options: ["(0, 4)", "(4, 0)", "(5, 0)", "(0, 5)"],
        answerIndex: 2,
        hints: [
          "Every point on the {{x}}-axis has {{y = 0}}.",
          "Cover up the {{5y}} term to solve {{4x = 20}}.",
        ],
        explanation:
          "Setting {{y = 0}} gives {{4x = 20}}, so {{x = 5}}, giving the {{x}}-intercept {{(5, 0)}}. The point {{(0, 4)}} is the {{y}}-intercept, not the {{x}}-intercept.",
      },
      {
        id: "linear-graphs-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "explicit-implicit-graphs",
        question: "Which coordinate point lies on the straight line {{y = 2x + 5}}?",
        options: ["(3, 1)", "(2, 7)", "(−2, 9)", "(−3, −1)"],
        answerIndex: 3,
        hints: [
          "Substitute each point's {{x}}-coordinate into {{2x + 5}}.",
          "Check which point produces a result equal to its {{y}}-coordinate.",
        ],
        explanation:
          "For {{(-3, -1)}}: {{y = 2(-3) + 5 = -6 + 5 = -1}}, which matches! For {{(2, 7)}}, {{2(2) + 5 = 9 != 7}}, so it does not lie on the line.",
      },
      {
        id: "linear-graphs-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "equation-of-a-line",
        question: "State the gradient {{m}} and {{y}}-intercept {{c}} of the line {{y = 7 - 2x}}.",
        options: ["{{m = -2, c = 7}}", "{{m = 7, c = -2}}", "{{m = 2, c = 7}}", "{{m = -7, c = 2}}"],
        answerIndex: 0,
        hints: [
          "Rewrite the equation in the standard order {{y = mx + c}}.",
          "The gradient {{m}} is ALWAYS the coefficient multiplying {{x}}, including its sign.",
        ],
        explanation:
          "Rewriting {{y = 7 - 2x}} as {{y = -2x + 7}} shows {{m = -2}} and {{c = 7}}. Picking {{m = 7}} happens when you read the first number instead of the coefficient of {{x}}.",
      },
      {
        id: "linear-graphs-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "equation-of-a-line",
        question: "Calculate the gradient of the straight line joining {{(2, 3)}} and {{(6, 15)}}.",
        options: ["{{1/3}}", "3", "4", "−3"],
        answerIndex: 1,
        hints: [
          "Use {{m = (y_2 - y_1) / (x_2 - x_1)}} with vertical change on top.",
          "Compute {{(15 - 3) / (6 - 2)}}.",
        ],
        explanation:
          "{{m = (15 - 3) / (6 - 2) = 12 / 4 = 3}}. Getting {{1/3}} comes from flipping the formula upside down to run/rise instead of rise/run.",
      },
      {
        id: "linear-graphs-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "equation-of-a-line",
        question: "What is the gradient of the straight line {{3y = 12x - 9}}?",
        options: ["12", "−3", "4", "−9"],
        answerIndex: 2,
        hints: [
          "You cannot read {{m}} until {{y}} is completely on its own.",
          "Divide every term in {{3y = 12x - 9}} by {{3}}.",
        ],
        explanation:
          "Dividing every term by {{3}} gives {{y = 4x - 3}}, so the gradient is {{4}}. Reading {{12}} skips the vital step of isolating single {{y}}.",
      },
      {
        id: "linear-graphs-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "equation-of-a-line",
        question: "Which line is **parallel** to {{y = 5x - 1}}?",
        options: ["{{y = -5x - 1}}", "{{y = 5 - x}}", "{{y = 1/5 x - 1}}", "{{2y = 10x + 7}}"],
        answerIndex: 3,
        hints: [
          "Parallel lines must have the exact same gradient {{m = 5}}.",
          "Rearrange {{2y = 10x + 7}} by dividing both sides by {{2}}.",
        ],
        explanation:
          "Dividing {{2y = 10x + 7}} by {{2}} gives {{y = 5x + 3.5}}, which has gradient {{5}} — identical to {{y = 5x - 1}}. The other lines share the intercept {{-1}} or the digit {{5}}, not the gradient {{5}}.",
      },
      {
        id: "linear-graphs-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "gradients-intercepts-context",
        question: "A taxi fare {{C}} (in $) for a journey of {{d}} km is given by {{C = 2.5d + 3}}. What does the number {{3}} represent?",
        options: [
          "The fixed $3 flag-fall charge at 0 km",
          "The $3 charge added for every 1 km",
          "The 3 km distance before billing starts",
          "The total $3 discount on long journeys",
        ],
        answerIndex: 0,
        hints: [
          "Set {{d = 0}} km in the equation {{C = 2.5d + 3}}.",
          "The {{y}}-intercept represents the starting or fixed value when the horizontal variable is zero.",
        ],
        explanation:
          "When {{d = 0}}, {{C = 3}}, so {{3}} is the fixed $3 flag-fall (standing) charge before travelling any distance. The rate per km is the gradient {{2.5}}, not {{3}}.",
      },
      {
        id: "linear-graphs-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "gradients-intercepts-context",
        question: "On a distance–time graph, what does a **horizontal** line segment represent?",
        options: [
          "The object is moving at constant speed",
          "The object is completely stationary",
          "The object is returning to the start",
          "The object is accelerating steadily",
        ],
        answerIndex: 1,
        hints: [
          "What is the gradient of a horizontal line?",
          "On a distance–time graph, gradient equals speed.",
        ],
        explanation:
          "A horizontal segment has gradient {{0}}, meaning distance is not changing as time passes — so speed is {{0}} and the object is stationary. Constant non-zero speed is shown by a straight sloped line.",
      },
      {
        id: "linear-graphs-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "gradients-intercepts-context",
        question: "A straight-line conversion graph passes through {{(0, 0)}} and {{(8, 5)}}, converting kilometres ({{x}}) to miles ({{y}}). How many miles is {{24}} km?",
        options: ["12 miles", "14 miles", "15 miles", "16 miles"],
        answerIndex: 2,
        hints: [
          "Since the line passes through {{(0, 0)}}, miles and km are in direct proportion.",
          "Compare {{24}} km to {{8}} km — multiply {{5}} miles by the same scale factor.",
        ],
        explanation:
          "The gradient is {{5/8}} miles per km (or simply note {{24 = 3 * 8}}), so {{24}} km {{= 3 * 5 = 15}} miles.",
      },
      {
        id: "linear-graphs-m1-q12",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "inequality-regions",
        question: "How should the boundary line {{y = 2x + 1}} be drawn when plotting the inequality region {{y < 2x + 1}}?",
        options: [
          "A solid line with boundary points included",
          "A solid line with boundary points excluded",
          "A dashed line with boundary points included",
          "A dashed line with boundary points excluded",
        ],
        answerIndex: 3,
        hints: [
          "Check whether {{<}} allows 'or equal to'.",
          "Strict inequalities ({{<, >}}) exclude points on the line.",
        ],
        explanation:
          "Because {{<}} is a strict inequality, points lying directly on {{y = 2x + 1}} do not satisfy {{y < 2x + 1}}, so the boundary is drawn as a **dashed** line with boundary points excluded.",
      },
      {
        id: "linear-graphs-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "inequality-regions",
        question: "Which coordinate point satisfies the inequality {{2x + y > 7}}?",
        options: ["(3, 2)", "(2, 3)", "(1, 4)", "(4, −2)"],
        answerIndex: 0,
        hints: [
          "Substitute each {{(x, y)}} into {{2x + y}}.",
          "Remember {{>}} means strictly greater than {{7}} — equalling {{7}} is not enough!",
        ],
        explanation:
          "For {{(3, 2)}}: {{2(3) + 2 = 8 > 7}} ✓. Watch out for {{(2, 3)}}: {{2(2) + 3 = 7}}, which fails the strict {{>}} sign.",
      },
      {
        id: "linear-graphs-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "inequality-regions",
        question: "Which inequality describes the region to the **left** of and **including** the vertical line through {{(-2, 0)}}?",
        options: ["{{y <= -2}}", "{{x <= -2}}", "{{x < -2}}", "{{x >= -2}}"],
        answerIndex: 1,
        hints: [
          "A vertical line through {{(-2, 0)}} has equation {{x = -2}}.",
          "'To the left' means smaller {{x}}-values, and 'including' means use {{<=}}.",
        ],
        explanation:
          "The vertical boundary is {{x = -2}}. Points to the left have {{x}}-coordinates less than {{-2}}, and including the boundary gives {{x <= -2}}.",
      },
      {
        id: "linear-graphs-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "equation-of-a-line",
        question: "A straight line has gradient {{-3}} and crosses the {{y}}-axis at {{(0, 4)}}. What is its equation?",
        options: ["{{y = 4x - 3}}", "{{y = 3x + 4}}", "{{y = -3x + 4}}", "{{y = -3x - 4}}"],
        answerIndex: 2,
        hints: [
          "Use {{y = mx + c}} where {{m}} is the gradient and {{c}} is the {{y}}-intercept.",
          "Substitute {{m = -3}} and {{c = 4}}.",
        ],
        explanation:
          "Substituting {{m = -3}} and {{c = 4}} into {{y = mx + c}} gives {{y = -3x + 4}}. Writing {{y = 4x - 3}} swaps {{m}} and {{c}}.",
      },
    ],
  },
  {
    id: "linear-graphs-m2",
    title: "MCQ Paper 2 — Finding Equations, Real-Life Rates & Regions",
    questions: [
      {
        id: "linear-graphs-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "explicit-implicit-graphs",
        question: "Find the {{y}}-intercept of the implicit line {{3x - 4y = 24}}.",
        options: ["(0, 6)", "(8, 0)", "(0, −8)", "(0, −6)"],
        answerIndex: 3,
        hints: [
          "On the {{y}}-axis, {{x = 0}}.",
          "Watch the minus sign when covering up {{3x}}: you are left with {{-4y = 24}}.",
        ],
        explanation:
          "Setting {{x = 0}} gives {{-4y = 24}}, so {{y = -6}} and the {{y}}-intercept is {{(0, -6)}}. Getting {{(0, 6)}} forgets the negative sign in front of {{4y}}.",
      },
      {
        id: "linear-graphs-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "equation-of-a-line",
        question: "Calculate the gradient of the line through {{(-3, 5)}} and {{(1, -7)}}.",
        options: ["−3", "3", "−1", "{{-1/3}}"],
        answerIndex: 0,
        hints: [
          "Compute {{m = (-7 - 5) / (1 - (-3))}}.",
          "Be careful with double negatives: {{1 - (-3) = 1 + 3 = 4}}.",
        ],
        explanation:
          "{{m = (-7 - 5) / (1 - (-3)) = -12 / 4 = -3}}. Getting {{3}} comes from subtracting in opposite orders top and bottom.",
      },
      {
        id: "linear-graphs-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "equation-of-a-line",
        question: "A line has gradient {{2}} and passes through {{(3, 11)}}. What is its equation?",
        options: ["{{y = 2x + 11}}", "{{y = 2x + 5}}", "{{y = 2x - 5}}", "{{y = 3x + 2}}"],
        answerIndex: 1,
        hints: [
          "Start with {{y = 2x + c}}.",
          "Substitute {{x = 3}} and {{y = 11}} to solve for {{c}}.",
        ],
        explanation:
          "Substituting {{(3, 11)}} into {{y = 2x + c}} gives {{11 = 6 + c}}, so {{c = 5}} and the line is {{y = 2x + 5}}. Writing {{y = 2x + 11}} mistakes the point's {{y}}-value for the {{y}}-intercept.",
      },
      {
        id: "linear-graphs-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "equation-of-a-line",
        question: "Find the equation of the straight line passing through {{(0, -2)}} and {{(4, 6)}}.",
        options: ["{{y = 4x - 2}}", "{{y = -2x + 6}}", "{{y = 2x - 2}}", "{{y = 2x + 6}}"],
        answerIndex: 2,
        hints: [
          "Notice that {{(0, -2)}} immediately tells you {{c = -2}}.",
          "Find the gradient {{m = (6 - (-2)) / (4 - 0)}}.",
        ],
        explanation:
          "Gradient {{m = (6 - (-2)) / (4 - 0) = 8 / 4 = 2}} and {{y}}-intercept {{c = -2}}, giving {{y = 2x - 2}}.",
      },
      {
        id: "linear-graphs-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "equation-of-a-line",
        question: "Which pair of equations represents two **parallel** straight lines?",
        options: [
          "{{y = 3x + 2}} and {{3y = x + 6}}",
          "{{2x + y = 5}} and {{y = 2x - 1}}",
          "{{y = 4x - 3}} and {{y = -4x - 3}}",
          "{{4x - 2y = 6}} and {{y = 2x + 9}}",
        ],
        answerIndex: 3,
        hints: [
          "Rearrange each implicit equation into {{y = mx + c}} to read its true gradient.",
          "Check {{4x - 2y = 6}}: move {{-2y}} to get {{2y = 4x - 6}}.",
        ],
        explanation:
          "Rearranging {{4x - 2y = 6}} gives {{2y = 4x - 6}}, so {{y = 2x - 3}}, which shares gradient {{m = 2}} with {{y = 2x + 9}}. In {{2x + y = 5}}, the gradient is {{-2}}, not {{2}}.",
      },
      {
        id: "linear-graphs-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "explicit-implicit-graphs",
        question: "At what coordinates does the line {{y = 3x - 12}} cross the **{{x}}-axis**?",
        options: ["(4, 0)", "(0, 4)", "(0, −12)", "(−4, 0)"],
        answerIndex: 0,
        hints: [
          "Every point on the {{x}}-axis has {{y = 0}}.",
          "Solve {{0 = 3x - 12}} for {{x}}.",
        ],
        explanation:
          "Setting {{y = 0}} gives {{3x = 12}}, so {{x = 4}} and the crossing point is {{(4, 0)}}. The point {{(0, -12)}} is the {{y}}-intercept.",
      },
      {
        id: "linear-graphs-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "gradients-intercepts-context",
        question: "The volume {{V}} (litres) of water in a tank after {{t}} minutes is {{V = 500 - 20t}}. What does the gradient {{-20}} mean?",
        options: [
          "The tank starts with 20 litres remaining",
          "The tank drains by 20 litres every minute",
          "The tank fills by 20 litres every minute",
          "The tank empties completely in 20 minutes",
        ],
        answerIndex: 1,
        hints: [
          "The gradient has units of (vertical unit) per (horizontal unit) = litres per minute.",
          "A negative gradient means the volume is decreasing over time.",
        ],
        explanation:
          "The gradient {{-20}} means the volume decreases (drains) at a constant rate of {{20}} litres per minute. Note it actually empties after {{500 / 20 = 25}} minutes.",
      },
      {
        id: "linear-graphs-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "gradients-intercepts-context",
        question: "A runner's distance–time graph is a straight line from {{(0, 0)}} to {{(1.5, 18)}}, where time is in hours and distance is in km. What is the runner's constant speed?",
        options: ["9 km/h", "10 km/h", "12 km/h", "27 km/h"],
        answerIndex: 2,
        hints: [
          "Speed equals the gradient of a distance–time graph: distance ÷ time.",
          "Calculate {{18 / 1.5}} (equivalent to {{36 / 3}}).",
        ],
        explanation:
          "Gradient {{= (18 - 0) / (1.5 - 0) = 18 / 1.5 = 12}} km/h. Multiplying {{18 * 1.5 = 27}} uses the formula backwards.",
      },
      {
        id: "linear-graphs-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "gradients-intercepts-context",
        question: "Electrician A charges {{C = 30h + 50}} and Electrician B charges {{C = 40h + 20}} (in £, for {{h}} hours). For how many hours do both electricians charge the exact same total?",
        options: ["2 hours", "2.5 hours", "3.5 hours", "3 hours"],
        answerIndex: 3,
        hints: [
          "The same cost corresponds to the intersection of the two graphs.",
          "Set {{30h + 50 = 40h + 20}} and solve for {{h}}.",
        ],
        explanation:
          "Setting {{30h + 50 = 40h + 20}} gives {{30 = 10h}}, so {{h = 3}} hours (both cost £140 at {{h = 3}}).",
      },
      {
        id: "linear-graphs-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "gradients-intercepts-context",
        question: "A cyclist rides {{20}} km away from home in {{1}} hour, rests for {{30}} minutes, then rides straight back home in {{1}} hour. What is the gradient of the return section on the distance–time graph?",
        options: ["−20 km/h", "20 km/h", "−10 km/h", "0 km/h"],
        answerIndex: 0,
        hints: [
          "On the return journey, distance from home drops from {{20}} km down to {{0}} km.",
          "Divide the change in distance ({{0 - 20 = -20}} km) by the time taken ({{1}} hour).",
        ],
        explanation:
          "Because distance decreases by {{20}} km over {{1}} hour, the gradient is {{-20 / 1 = -20}} km/h (the minus sign indicates moving back toward home).",
      },
      {
        id: "linear-graphs-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "inequality-regions",
        question: "Substituting the test point {{(0, 0)}} into {{3x + 2y <= 12}} produces {{0 <= 12}}, which is true. What does this tell you?",
        options: [
          "The boundary line must be drawn dashed",
          "The wanted region includes the origin side",
          "The wanted region excludes the origin side",
          "The boundary line passes through the origin",
        ],
        answerIndex: 1,
        hints: [
          "A test point that makes the inequality TRUE lies inside the wanted region.",
          "The origin is {{(0, 0)}}.",
        ],
        explanation:
          "Because {{(0, 0)}} satisfies {{3x + 2y <= 12}}, the entire half-plane containing the origin {{(0, 0)}} is the wanted region (with a solid boundary because of {{<=}}).",
      },
      {
        id: "linear-graphs-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "inequality-regions",
        question: "Which inequality is equivalent to {{2x - y < 6}} when rearranged with {{y}} as the subject?",
        options: ["{{y < 2x - 6}}", "{{y <= 2x - 6}}", "{{y > 2x - 6}}", "{{y > 6 - 2x}}"],
        answerIndex: 2,
        hints: [
          "Add {{y}} to both sides first to make {{y}} positive: {{2x < y + 6}}.",
          "Now subtract {{6}} from both sides, or remember to flip {{<}} to {{>}} if you divide by {{-1}}.",
        ],
        explanation:
          "Adding {{y}} and subtracting {{6}} gives {{2x - 6 < y}}, which reads {{y > 2x - 6}}. Writing {{y < 2x - 6}} forgets to reverse the inequality sign when clearing the minus on {{-y}}.",
      },
      {
        id: "linear-graphs-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "inequality-regions",
        question: "How many integer coordinate points {{(x, y)}} satisfy BOTH {{1 <= x <= 3}} and {{2 < y <= 4}}?",
        options: ["9", "4", "8", "6"],
        answerIndex: 3,
        hints: [
          "List the valid integers for {{x}} first, then the valid integers for {{y}}.",
          "Watch the strict inequality {{2 < y}}: {{y = 2}} is NOT included!",
        ],
        explanation:
          "Valid {{x}}-integers are {{1, 2, 3}} ({{3}} choices) and valid {{y}}-integers are {{3, 4}} ({{2}} choices, since {{y > 2}} excludes {{2}}). That gives {{3 * 2 = 6}} integer points.",
      },
      {
        id: "linear-graphs-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "equation-of-a-line",
        question: "Find the equation of the straight line with gradient {{1/2}} passing through {{(-4, 3)}}.",
        options: ["{{y = 1/2 x + 5}}", "{{y = 1/2 x + 1}}", "{{y = 1/2 x - 1}}", "{{y = 2x + 11}}"],
        answerIndex: 0,
        hints: [
          "Write {{y = 1/2 x + c}} and substitute {{x = -4, y = 3}}.",
          "Calculate {{1/2 * (-4) = -2}}, then solve {{3 = -2 + c}}.",
        ],
        explanation:
          "Substituting {{(-4, 3)}} into {{y = 1/2 x + c}} gives {{3 = -2 + c}}, so {{c = 5}} and the equation is {{y = 1/2 x + 5}}. Getting {{c = 1}} comes from forgetting the minus sign in {{-4}}.",
      },
      {
        id: "linear-graphs-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "inequality-regions",
        question: "Which point lies inside the region defined by ALL three inequalities {{x > 1}}, {{y <= 4}}, and {{x + y < 6}}?",
        options: ["(1, 3)", "(2, 3)", "(2, 4)", "(3, 3)"],
        answerIndex: 1,
        hints: [
          "Check every point against ALL three inequalities — one failure rules it out.",
          "Pay close attention to strict signs ({{>}} and {{<}}): equality fails!",
        ],
        explanation:
          "For {{(2, 3)}}: {{2 > 1}} ✓, {{3 <= 4}} ✓, and {{2 + 3 = 5 < 6}} ✓. Note {{(1, 3)}} fails {{x > 1}}, while {{(2, 4)}} and {{(3, 3)}} both sum to {{6}}, failing {{x + y < 6}}.",
      },
    ],
  },
  {
    id: "linear-graphs-m3",
    title: "MCQ Paper 3 — Exam Mastery & Multi-Step Reasoning",
    questions: [
      {
        id: "linear-graphs-m3-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "explicit-implicit-graphs",
        question: "The straight line {{ax + 3y = 18}} passes through the point {{(2, 4)}}. Find the value of {{a}}.",
        options: ["2", "4", "3", "6"],
        answerIndex: 2,
        hints: [
          "Substitute {{x = 2}} and {{y = 4}} into {{ax + 3y = 18}}.",
          "Solve the resulting linear equation {{2a + 12 = 18}}.",
        ],
        explanation:
          "Substituting {{(2, 4)}} gives {{2a + 3(4) = 18}} → {{2a + 12 = 18}} → {{2a = 6}} → {{a = 3}}.",
      },
      {
        id: "linear-graphs-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "equation-of-a-line",
        question: "Find the equation of the straight line passing through {{(-1, -4)}} and {{(3, 8)}}.",
        options: ["{{y = 3x + 1}}", "{{y = 4x - 4}}", "{{y = 2x + 2}}", "{{y = 3x - 1}}"],
        answerIndex: 3,
        hints: [
          "First find the gradient: {{m = (8 - (-4)) / (3 - (-1))}}.",
          "Substitute {{m = 3}} and {{(3, 8)}} into {{y = mx + c}} to find {{c}}.",
        ],
        explanation:
          "Gradient {{m = (8 + 4) / (3 + 1) = 12 / 4 = 3}}. Using {{(3, 8)}}: {{8 = 3(3) + c}} → {{c = -1}}, giving {{y = 3x - 1}}. Check with {{(-1, -4)}}: {{3(-1) - 1 = -4}} ✓.",
      },
      {
        id: "linear-graphs-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "equation-of-a-line",
        question: "What is the gradient of the implicit straight line {{5x + 2y = 14}}?",
        options: ["−2.5", "2.5", "−5", "7"],
        answerIndex: 0,
        hints: [
          "Rearrange {{5x + 2y = 14}} to isolate {{y}}.",
          "Subtract {{5x}} to get {{2y = -5x + 14}}, then divide by {{2}}.",
        ],
        explanation:
          "Rearranging gives {{2y = -5x + 14}}, so {{y = -2.5x + 7}}. The gradient is {{-2.5}} (not {{2.5}} or {{-5}}).",
      },
      {
        id: "linear-graphs-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "equation-of-a-line",
        question: "Line B is parallel to {{3x - y = 7}} and passes through {{(-2, 1)}}. What is the {{y}}-intercept of Line B?",
        options: ["−7", "7", "−5", "5"],
        answerIndex: 1,
        hints: [
          "Rewrite {{3x - y = 7}} as {{y = 3x - 7}} to find its gradient.",
          "Use {{m = 3}} and substitute {{(-2, 1)}} into {{y = 3x + c}}.",
        ],
        explanation:
          "Since {{3x - y = 7}} rearranges to {{y = 3x - 7}}, its gradient is {{3}}. For parallel Line B through {{(-2, 1)}}: {{1 = 3(-2) + c}} → {{1 = -6 + c}} → {{c = 7}}.",
      },
      {
        id: "linear-graphs-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "explicit-implicit-graphs",
        question: "At what coordinates does the horizontal line {{y = 4}} intersect the line {{2x + y = 10}}?",
        options: ["(4, 3)", "(7, 4)", "(3, 4)", "(5, 4)"],
        answerIndex: 2,
        hints: [
          "At the intersection, both equations are true at once, so {{y}} must equal {{4}}.",
          "Substitute {{y = 4}} into {{2x + y = 10}} and solve for {{x}}.",
        ],
        explanation:
          "Substituting {{y = 4}} gives {{2x + 4 = 10}} → {{2x = 6}} → {{x = 3}}, so the intersection point is {{(3, 4)}}. Remember coordinates are always written {{(x, y)}}.",
      },
      {
        id: "linear-graphs-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "gradients-intercepts-context",
        question: "A car hire cost graph is a straight line passing through {{(2, 110)}} and {{(5, 215)}}, where {{x}} is days hired and {{y}} is total cost in $. What is the fixed booking fee?",
        options: ["$35", "$30", "$50", "$40"],
        answerIndex: 3,
        hints: [
          "First find the daily rate (gradient): {{m = (215 - 110) / (5 - 2)}}.",
          "Then substitute {{m}} and {{(2, 110)}} into {{y = mx + c}} to find the fixed fee {{c}}.",
        ],
        explanation:
          "Daily rate {{m = 105 / 3 = $35}} per day. Using {{(2, 110)}}: {{110 = 35(2) + c}} → {{c = $40}}. Choosing $35 gives the daily rate instead of the fixed fee.",
      },
      {
        id: "linear-graphs-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "gradients-intercepts-context",
        question: "On a distance–time graph, Segment P rises {{6}} km in {{20}} minutes and Segment Q rises {{10}} km in {{30}} minutes. Which comparison is correct?",
        options: [
          "Segment Q is faster at 20 km/h than P",
          "Segment P is faster at 18 km/h than Q",
          "Both segments have the exact same speed",
          "Segment P is faster because 20 is less",
        ],
        answerIndex: 0,
        hints: [
          "Convert both times to hours: {{20}} min {{= 1/3}} h and {{30}} min {{= 1/2}} h.",
          "Compute each speed as distance ÷ time in hours.",
        ],
        explanation:
          "Speed on P {{= 6 / (1/3) = 18}} km/h, while speed on Q {{= 10 / (1/2) = 20}} km/h. Therefore Segment Q has the steeper gradient and faster speed.",
      },
      {
        id: "linear-graphs-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "gradients-intercepts-context",
        question: "A candle is {{24}} cm tall when lit and burns down at a steady rate of {{1.5}} cm per hour. After how many hours is its height {{9}} cm?",
        options: ["6 hours", "10 hours", "12 hours", "16 hours"],
        answerIndex: 1,
        hints: [
          "Write the linear model {{h = 24 - 1.5t}}.",
          "Set {{h = 9}} and solve {{24 - 1.5t = 9}}.",
        ],
        explanation:
          "The candle must burn {{24 - 9 = 15}} cm. At {{1.5}} cm/h, this takes {{15 / 1.5 = 10}} hours. Getting {{6}} hours divides {{9}} by {{1.5}} instead of the height burned.",
      },
      {
        id: "linear-graphs-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "inequality-regions",
        question: "What is the area of the triangular region defined by {{x >= 0}}, {{y >= 0}}, and {{x + y <= 4}}?",
        options: ["4 square units", "6 square units", "8 square units", "16 square units"],
        answerIndex: 2,
        hints: [
          "Find where {{x + y = 4}} crosses both axes: {{(4, 0)}} and {{(0, 4)}}.",
          "The region is a right-angled triangle with base {{4}} and height {{4}}.",
        ],
        explanation:
          "The three vertices are {{(0, 0)}}, {{(4, 0)}}, and {{(0, 4)}}, forming a right-angled triangle of area {{1/2 * 4 * 4 = 8}} square units. Forgetting the {{1/2}} gives {{16}}.",
      },
      {
        id: "linear-graphs-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "inequality-regions",
        question: "Which point can be used as a valid test point for {{y > 2x}} AND lies **inside** the wanted region {{y > 2x}}?",
        options: ["(0, 0)", "(3, 4)", "(2, 4)", "(1, 5)"],
        answerIndex: 3,
        hints: [
          "A valid test point cannot lie on the boundary line {{y = 2x}}.",
          "Check which remaining point makes {{y > 2x}} true.",
        ],
        explanation:
          "{{(0, 0)}} and {{(2, 4)}} both lie ON the boundary {{y = 2x}}, so neither can test which side to shade. For {{(3, 4)}}, {{4 > 6}} is false. For {{(1, 5)}}, {{5 > 2(1) = 2}} is true!",
      },
      {
        id: "linear-graphs-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "equation-of-a-line",
        question: "A straight line with gradient {{2}} passes through {{(k, 5)}} and {{(4, 11)}}. Find the value of {{k}}.",
        options: ["1", "−1", "7", "2"],
        answerIndex: 0,
        hints: [
          "Substitute the coordinates into the gradient formula: {{(11 - 5) / (4 - k) = 2}}.",
          "Simplify the numerator to {{6}}, so {{6 / (4 - k) = 2}}, which means {{4 - k = 3}}.",
        ],
        explanation:
          "{{(11 - 5) / (4 - k) = 2}} → {{6 = 2(4 - k)}} → {{3 = 4 - k}} → {{k = 1}}. Check: from {{(1, 5)}} to {{(4, 11)}} is rise {{6}} over run {{3}}, giving gradient {{2}} ✓.",
      },
      {
        id: "linear-graphs-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "explicit-implicit-graphs",
        question: "Which implicit equation represents the exact same straight line as {{y = -2/3 x + 4}}?",
        options: ["{{3x + 2y = 12}}", "{{2x + 3y = 12}}", "{{2x - 3y = 12}}", "{{2x + 3y = 4}}"],
        answerIndex: 1,
        hints: [
          "Multiply EVERY term in {{y = -2/3 x + 4}} by {{3}} to clear the fraction.",
          "Move the {{-2x}} term to the left-hand side by adding {{2x}}.",
        ],
        explanation:
          "Multiplying every term by {{3}} gives {{3y = -2x + 12}}, and adding {{2x}} yields {{2x + 3y = 12}}. Getting {{2x + 3y = 4}} forgets to multiply the constant {{4}} by {{3}}.",
      },
      {
        id: "linear-graphs-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "inequality-regions",
        question: "A shaded triangle {{R}} has vertices {{(0, 0)}}, {{(0, 6)}}, and {{(3, 0)}}, with all three boundary edges drawn **solid**. Which set of inequalities defines {{R}}?",
        options: [
          "{{x >= 0, y >= 0, x + 2y <= 6}}",
          "{{x >= 0, y >= 0, 2x + y >= 6}}",
          "{{x >= 0, y >= 0, 2x + y <= 6}}",
          "{{x > 0, y > 0, 2x + y < 6}}",
        ],
        answerIndex: 2,
        hints: [
          "Find the slanted boundary through {{(0, 6)}} and {{(3, 0)}}: gradient {{m = -6 / 3 = -2}} and {{c = 6}}.",
          "Rewrite {{y = -2x + 6}} as {{2x + y = 6}}, then test an interior point like {{(1, 1)}}.",
        ],
        explanation:
          "The slanted boundary is {{y = -2x + 6}}, i.e. {{2x + y = 6}}. Testing {{(1, 1)}} gives {{2(1) + 1 = 3 <= 6}}, and solid edges require {{>=}} and {{<=}}, giving {{x >= 0, y >= 0, 2x + y <= 6}}.",
      },
      {
        id: "linear-graphs-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "gradients-intercepts-context",
        question: "Mobile Plan A costs {{A = 0.10m + 15}} and Plan B costs {{B = 0.25m + 6}} (in £, for {{m}} minutes). For which values of {{m}} is Plan A strictly cheaper than Plan B?",
        options: ["{{m < 60}} minutes", "{{m > 40}} minutes", "{{m < 40}} minutes", "{{m > 60}} minutes"],
        answerIndex: 3,
        hints: [
          "First find the break-even intersection where {{0.10m + 15 = 0.25m + 6}}.",
          "Plan A has the smaller gradient ({{0.10}} vs {{0.25}}), so it becomes cheaper AFTER the intersection.",
        ],
        explanation:
          "Solving {{0.10m + 15 < 0.25m + 6}} gives {{9 < 0.15m}}, so {{m > 60}} minutes. Beyond {{60}} minutes, Plan A's lower per-minute rate outweighs its higher monthly fee.",
      },
      {
        id: "linear-graphs-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "inequality-regions",
        question: "What is the greatest possible value of {{x + y}} for an integer point {{(x, y)}} satisfying {{x >= 0}}, {{y >= 0}}, {{x <= 3}}, and {{y < 4}}?",
        options: ["6", "7", "5", "8"],
        answerIndex: 0,
        hints: [
          "Find the largest integer {{x}} allowed by {{x <= 3}}, and the largest integer {{y}} allowed by {{y < 4}}.",
          "Be careful: {{y < 4}} is strict, so {{y = 4}} is NOT allowed!",
        ],
        explanation:
          "The largest allowed integer {{x}} is {{3}} (since {{x <= 3}} is inclusive), and the largest allowed integer {{y}} is {{3}} (since {{y < 4}} is strict). Thus the maximum sum is {{3 + 3 = 6}} at {{(3, 3)}}.",
      },
    ],
  },
];
