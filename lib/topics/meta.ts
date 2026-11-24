// ---------------------------------------------------------------------------
// Topic registry: order, strand, icon and the fixed guide-section outline.
// Section ids here are the contract shared by guide authors (who must use
// them) and question / drill authors (whose guideRef must point at them).
// Pure data — safe to import from Node scripts.
//
// Source: Tanglin Trust School Middle School Curriculum Overview — Year 9
// Mathematics (p. 9): Units 1–10 plus Gippsland Units G1 (Statistics) & G2 (Bearings).
// ---------------------------------------------------------------------------
import type { Strand } from "../types.ts";

export interface SectionPlan {
  id: string;
  heading: string;
  /** What this section must teach. */
  covers: string;
  /** IGCSE look-ahead. */
  stretch?: boolean;
}

export interface TopicMeta {
  id: string;
  title: string;
  strand: Strand;
  icon: string;
  /** Which Tanglin Year 9 Maths unit(s) this topic covers. */
  curriculum: string;
  sections: SectionPlan[];
}

export const STRANDS: Strand[] = [
  "Number & Ratio",
  "Algebra",
  "Geometry & Measure",
  "Statistics & Probability",
];

export const TOPIC_META: TopicMeta[] = [
  // =========================== NUMBER & RATIO =============================
  {
    id: "fdp-ratio-fractions",
    title: "FDP, Ratio & Algebraic Fractions",
    strand: "Number & Ratio",
    icon: "⚖️",
    curriculum: "Year 9 Term 1 Unit 3 — Recurring Decimals, Decimal Multipliers & % Change, Ratio Problems & Algebraic Fractions",
    sections: [
      {
        id: "recurring-decimals",
        heading: "Fractions to Decimals & Recurring Decimals",
        covers: "Converting fractions to terminating and recurring decimals via short division; dot notation; spotting denominators with prime factors other than 2 and 5; converting recurring decimals back to exact fractions.",
      },
      {
        id: "percentage-multipliers",
        heading: "Decimal Multipliers & Percentage Change",
        covers: "Decimal multipliers for increase, decrease and repeated percentage change; calculating percentage change ((new − old)/old × 100%); reverse percentages by dividing by the multiplier.",
      },
      {
        id: "ratio-problems",
        heading: "Ratio Problems, Scaling & Direct Sharing",
        covers: "Sharing in a given ratio, finding totals from one part or the difference between parts, combining two ratios (a:b and b:c), and unit-ratio/best-buy comparisons.",
      },
      {
        id: "algebraic-fractions",
        heading: "Simplifying, Multiplying & Dividing Algebraic Fractions",
        covers: "Cancelling common numerical and algebraic factors (factorise first, never cancel across addition!); multiplying and dividing algebraic fractions by flipping the divisor and simplifying fully.",
      },
    ],
  },
  {
    id: "indices-standard-form",
    title: "Indices, Change of Base & Standard Form",
    strand: "Number & Ratio",
    icon: "🚀",
    curriculum: "Year 9 Term 2 Unit 8 — Index Laws, Zero & Negative Indices, Change of Base & Standard Form",
    sections: [
      {
        id: "index-laws",
        heading: "Index Laws: Multiplying, Dividing & Powers of Powers",
        covers: "a^m × a^n = a^(m+n), a^m ÷ a^n = a^(m−n), (a^m)^n = a^(mn), coefficients raised to powers, and simplifying multi-variable algebraic index expressions.",
      },
      {
        id: "zero-negative-indices",
        heading: "Zero & Negative Indices and Change of Base",
        covers: "Deriving a^0 = 1 and a^(−n) = 1/a^n from division patterns; rewriting numbers with a common base (e.g. 8 = 2^3, 9 = 3^2, 1/4 = 2^(−2)) to simplify or solve simple index equations.",
      },
      {
        id: "standard-form-conversions",
        heading: "Standard Form for Very Large & Very Small Numbers",
        covers: "Writing numbers in A × 10^n with 1 ≤ A < 10 and integer n; converting large (n > 0) and small (n < 0) ordinary numbers to standard form and back; ordering standard form numbers.",
      },
      {
        id: "standard-form-calculations",
        heading: "Calculating in Standard Form",
        covers: "Multiplying and dividing in standard form using index laws and adjusting A back into 1 ≤ A < 10; adding and subtracting by matching powers of 10 or converting to ordinary numbers.",
      },
    ],
  },

  // =============================== ALGEBRA ================================
  {
    id: "algebraic-expressions",
    title: "Algebraic Expressions & Rearranging",
    strand: "Algebra",
    icon: "🔤",
    curriculum: "Year 9 Term 1 Unit 1 — Expanding Pairs of Brackets, Geometric Expressions, Indices Evaluation, Factorising & Rearranging",
    sections: [
      {
        id: "expanding-double-brackets",
        heading: "Expanding & Simplifying Pairs of Brackets",
        covers: "Expanding (x + a)(x + b) and (ax + b)(cx + d) with area-grid and FOIL methods; careful sign tracking with negatives; squaring brackets (x − a)^2 and difference of two squares (x + a)(x − a).",
      },
      {
        id: "geometric-algebra",
        heading: "Brackets in Geometric Area & Perimeter Problems",
        covers: "Forming and simplifying algebraic expressions for perimeters, shaded areas, compound L-shapes and frames with algebraic side lengths.",
      },
      {
        id: "evaluating-expressions",
        heading: "Evaluating Expressions with Indices & Negatives",
        covers: "Substituting positive, negative and fractional values into expressions containing powers and brackets; distinguishing −x^2 vs (−x)^2 and 2x^2 vs (2x)^2.",
      },
      {
        id: "factorising-rearranging",
        heading: "Factorising & Rearranging Simple Formulae",
        covers: "Taking out the highest common factor (numbers and powers), factorising simple quadratics x^2 + bx + c and x^2 − a^2; changing the subject of a formula using inverse operations and factorising when the subject appears twice.",
      },
    ],
  },
  {
    id: "equations-inequalities",
    title: "Equations, Simultaneous Equations & Inequalities",
    strand: "Algebra",
    icon: "⚖️",
    curriculum: "Year 9 Term 2 Unit 6 — Linear Equations with Brackets/Fractions, Simple Quadratics, Simultaneous Equations & Inequalities",
    sections: [
      {
        id: "linear-equations-brackets-fractions",
        heading: "Linear Equations with Brackets, Both Sides & Fractions",
        covers: "Expanding single brackets, collecting unknowns on one side, clearing denominators cleanly when fractions appear, and checking solutions by substitution.",
      },
      {
        id: "simple-quadratics",
        heading: "Finding Both Solutions of Simple Quadratic Equations",
        covers: "Solving x^2 = k and a(x + b)^2 = c (remembering ±√!), plus factorised quadratics (x − p)(x − q) = 0 and x^2 + bx + c = 0 via the zero-product property.",
      },
      {
        id: "simultaneous-equations",
        heading: "Solving Linear Simultaneous Equations",
        covers: "Solving pairs of linear equations by elimination (scaling equations, SSS/DSA sign rule) and substitution; forming simultaneous equations from word problems.",
      },
      {
        id: "equations-and-graphs",
        heading: "Connecting Solutions of Equations to Graphs",
        covers: "Interpreting the solution of simultaneous equations as the intersection point (x, y) of two straight lines; reading roots of equations from graph intersections.",
      },
      {
        id: "inequalities",
        heading: "Simplifying & Solving Inequalities (Including Negatives)",
        covers: "Number-line representation (open vs closed circles), solving linear and double inequalities, flipping the inequality sign when multiplying or dividing by a negative number, and listing integer solutions.",
      },
    ],
  },
  {
    id: "linear-graphs",
    title: "Linear Graphs & Inequality Regions",
    strand: "Algebra",
    icon: "📈",
    curriculum: "Year 9 Term 3 Unit 10 — Explicit & Implicit Linear Graphs, Equation of a Line, Context & Shading Inequality Regions",
    sections: [
      {
        id: "explicit-implicit-graphs",
        heading: "Plotting Explicit & Implicit Linear Functions",
        covers: "Generating coordinate tables for y = mx + c and plotting implicit equations like 2x + 3y = 12 using the cover-up intercept method; recognising horizontal (y = k) and vertical (x = k) lines.",
      },
      {
        id: "equation-of-a-line",
        heading: "Finding the Equation of a Straight Line (y = mx + c)",
        covers: "Calculating gradient m = (y₂ − y₁)/(x₂ − x₁) from a graph or two points; finding y-intercept c; writing y = mx + c and identifying parallel lines with equal gradients.",
      },
      {
        id: "gradients-intercepts-context",
        heading: "Gradients & Intercepts in Real-Life Contexts",
        covers: "Interpreting the y-intercept as a fixed/initial value (standing charge, starting distance) and the gradient as a rate of change (cost per unit, speed, flow rate) in distance–time and conversion graphs.",
      },
      {
        id: "inequality-regions",
        heading: "Plotting & Shading Inequality Regions",
        covers: "Drawing solid boundaries (≤, ≥) vs dashed boundaries (<, >); testing a point such as (0, 0) to determine the required side; identifying regions satisfying two or three simultaneous inequalities.",
      },
    ],
  },

  // ========================== GEOMETRY & MEASURE ==========================
  {
    id: "angles-bearings",
    title: "Angles in Polygons, Parallel Lines & Bearings",
    strand: "Geometry & Measure",
    icon: "🧭",
    curriculum: "Year 9 Term 1 Unit 5 & Gippsland Unit G2 — Parallel Lines, Polygon Angles & Three-Figure Bearings / Back Bearings",
    sections: [
      {
        id: "parallel-lines-angles",
        heading: "Corresponding, Alternate & Co-Interior Angles",
        covers: "Exact geometric reasoning with parallel lines and transversals: corresponding angles are equal, alternate angles are equal, co-interior angles sum to 180°, plus vertically opposite and straight-line angles.",
      },
      {
        id: "polygon-angles",
        heading: "Interior & Exterior Angles in Polygons",
        covers: "Deriving interior sum (n − 2) × 180° from triangulation; exterior angle sum = 360° for any convex polygon; regular polygon interior + exterior = 180°; finding n from an interior or exterior angle.",
      },
      {
        id: "three-figure-bearings",
        heading: "Measuring & Drawing Three-Figure Bearings",
        covers: "Three rules of bearings: measured from North, clockwise, written as three digits (e.g. 045°); scale drawings and compass-direction bearings (NE = 045°, SW = 225°).",
      },
      {
        id: "back-bearings-angle-rules",
        heading: "Calculating Missing Angles & Back Bearings",
        covers: "Using parallel North lines and co-interior/alternate angle rules to calculate bearings without a protractor; finding back bearings (±180° rule) and multi-leg bearing journeys.",
      },
    ],
  },
  {
    id: "transformations-similarity",
    title: "Transformations, Congruence & Similarity",
    strand: "Geometry & Measure",
    icon: "🔷",
    curriculum: "Year 9 Term 3 Unit 9 — Reflection, Rotation, Translation, Enlargement, Congruent & Similar 2D Shapes",
    sections: [
      {
        id: "reflection-translation",
        heading: "Reflections & Translations",
        covers: "Reflecting shapes in x = a, y = b, y = x and y = −x; translating by column vectors (dx, dy); fully describing a reflection (mirror line equation) or translation (column vector).",
      },
      {
        id: "rotation",
        heading: "Rotations & Describing Rotations Fully",
        covers: "Rotating 90° clockwise/anticlockwise and 180° about the origin or any centre (a, b); stating all three details: rotation, angle + direction (unless 180°), and centre coordinates.",
      },
      {
        id: "enlargement",
        heading: "Enlargements (Integer & Fractional Scale Factors)",
        covers: "Enlarging from a given centre using ray lines and vector distances; integer and fractional (0 < k < 1) scale factors; finding the centre of enlargement by joining corresponding vertices.",
      },
      {
        id: "congruence-similarity",
        heading: "Congruent & Similar 2D Shapes",
        covers: "Congruence conditions for triangles (SSS, SAS, ASA, RHS — why AAA and ASS fail); similar shapes (equal angles, proportional sides); finding missing lengths using the linear scale factor.",
      },
    ],
  },
  {
    id: "pythagoras-trigonometry",
    title: "Pythagoras' Theorem & Trigonometry",
    strand: "Geometry & Measure",
    icon: "📐",
    curriculum: "Year 9 Term 2 Unit 7 — Right-Angled Triangle Language, Pythagoras' Theorem, Similar Right Triangles & SOHCAHTOA",
    sections: [
      {
        id: "right-triangle-language",
        heading: "Labelling Right-Angled Triangles",
        covers: "Identifying the hypotenuse (longest side, opposite 90°), perpendicular height, and opposite vs adjacent sides relative to a marked acute angle θ.",
      },
      {
        id: "pythagoras-theorem",
        heading: "Pythagoras' Theorem in 2D Problems",
        covers: "Using a^2 + b^2 = c^2 to find the hypotenuse (add squares) or a shorter side (subtract squares); testing right-angled triangles; coordinate distance and isosceles triangle height problems.",
      },
      {
        id: "similar-right-triangles-ratios",
        heading: "Similarity of Right-Angled Triangles & Trig Ratios",
        covers: "Why all right-angled triangles with the same acute angle θ are similar, giving constant side ratios: sin θ = O/H, cos θ = A/H, tan θ = O/A (SOHCAHTOA).",
      },
      {
        id: "trig-finding-lengths",
        heading: "Using Trigonometry to Find Missing Lengths (Extension: Angles)",
        covers: "Setting up sin/cos/tan equations to find missing lengths, multiplying when the unknown is on top vs dividing when the unknown is on the bottom (x = O / sin θ), calculator DEG mode check, plus clearly marked Extension work on finding angles via inverse trig.",
      },
    ],
  },
  {
    id: "surface-area-volume",
    title: "Sectors, Surface Area, Volume & Accuracy",
    strand: "Geometry & Measure",
    icon: "🧊",
    curriculum: "Year 9 Term 1 Unit 2 — Sectors of Circles, Cubes/Cuboids/Prisms/Cylinders/Cones SA & Volume, Reverse Volume, Unit Conversions & Accuracy",
    sections: [
      {
        id: "circle-sectors",
        heading: "Area & Perimeter of Sectors of a Circle",
        covers: "Arc length = (θ/360) × 2πr, sector area = (θ/360) × πr^2, and sector perimeter = arc length + 2r (don't forget the two straight radii!); leaving answers exact in terms of π or rounded.",
      },
      {
        id: "prisms-cylinders",
        heading: "Surface Area & Volume of Cubes, Cuboids, Prisms & Cylinders",
        covers: "Volume of any prism = cross-sectional area × length; cylinder volume = πr^2h and total surface area = 2πr^2 + 2πrh (curved surface unrolls into a rectangle of width 2πr).",
      },
      {
        id: "cones-and-reverse-volume",
        heading: "Cones & Finding Missing Dimensions from Volume",
        covers: "Cone volume = (1/3)πr^2h and surface area = πr^2 + πrl (using Pythagoras to find slant height l); working backwards from given volume to find missing length, height or radius of cuboids and prisms.",
      },
      {
        id: "area-volume-units",
        heading: "Converting Between Units of Area & Volume",
        covers: "Why 1 m^2 = 10,000 cm^2 (100^2) and 1 m^3 = 1,000,000 cm^3 (100^3); 1 cm^2 = 100 mm^2; 1 litre = 1,000 cm^3 = 1,000 ml; converting compound units cleanly.",
      },
      {
        id: "measurement-accuracy",
        heading: "Accuracy of Measurement & Error Intervals",
        covers: "Lower and upper bounds for rounded measurements (nearest integer, 10, 1 d.p., 1 s.f.); writing error intervals as LB ≤ x < UB (strict < on the upper bound!).",
      },
    ],
  },

  // ====================== STATISTICS & PROBABILITY ========================
  {
    id: "probability-statistics",
    title: "Probability, Grouped Data & Box Plots",
    strand: "Statistics & Probability",
    icon: "🎲",
    curriculum: "Year 9 Term 1 Unit 4 (Probability) & Gippsland Unit G1 (Statistics) — Relative Frequency, Sample Spaces, Venn/Two-Way Tables, Grouped Mean, Stem-and-Leaf, Scatter, Cumulative Frequency & Box Plots",
    sections: [
      {
        id: "theoretical-experimental-probability",
        heading: "Theoretical Probability & Relative Frequency",
        covers: "Equally likely outcomes P(A) = favourable/total, P(not A) = 1 − P(A), expected frequency = n × p; relative frequency = successes/trials and why larger trial counts give more reliable estimates.",
      },
      {
        id: "sample-space-tables-venn",
        heading: "Sample Space Diagrams, Two-Way Tables & Venn Diagrams",
        covers: "Listing combined outcomes systematically in sample space grids, completing and reading two-way tables, and populating 2-set Venn diagrams (remembering to subtract the overlap from 'only A' and 'only B').",
      },
      {
        id: "grouped-data-stem-leaf",
        heading: "Grouped Data Averages, Quartiles & Stem-and-Leaf Diagrams",
        covers: "Estimating the mean from grouped tables using class midpoints (∑fx / ∑f), finding modal class and median class; finding median, LQ, UQ and IQR from raw data; constructing and reading ordered stem-and-leaf diagrams with keys.",
      },
      {
        id: "scatter-diagrams",
        heading: "Scatter Diagrams, Correlation & Lines of Best Fit",
        covers: "Positive, negative and zero correlation; drawing a balanced line of best fit by eye; interpolation vs unreliable extrapolation; identifying outliers and why correlation does not prove causation.",
      },
      {
        id: "cumulative-frequency-box-plots",
        heading: "Cumulative Frequency Diagrams & Box Plots",
        covers: "Running totals plotted at UPPER class boundaries; smooth S-curve; reading median (50%), LQ (25%), UQ (75%) and IQR = UQ − LQ; drawing and comparing box plots using median (average) and IQR (spread) in context.",
      },
    ],
  },
];

export function metaById(id: string): TopicMeta | undefined {
  return TOPIC_META.find((t) => t.id === id);
}
