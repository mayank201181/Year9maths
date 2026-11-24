// ---------------------------------------------------------------------------
// 60-second Fluency Sprint: quick-fire recall of Year 9 Maths skills across
// Number & Ratio, Algebra, Geometry & Measure, and Statistics & Probability.
//
// Pure (no React, no registry import) so it can be unit-tested directly by
// Node: callers pass in the drills (ALL_DRILLS in the app).
// ---------------------------------------------------------------------------
import type { Drill, Rng } from "./drills/types.ts";
import type { AnswerSpec, Strand, Trap } from "./types.ts";
import { displayAnswer } from "./answerCheck.ts";
import { TOPIC_META } from "./topics/meta.ts";

export type SprintMode = "number" | "algebra" | "geometry" | "stats" | "mixed";
/** A mode tied to one strand (everything except "mixed"). */
export type SprintStrandMode = Exclude<SprintMode, "mixed">;

export const SPRINT_MODES: readonly SprintMode[] = ["number", "algebra", "geometry", "stats", "mixed"];

/** Which strand each mode draws from. */
export const SPRINT_MODE_STRAND: Record<SprintStrandMode, Strand> = {
  number: "Number & Ratio",
  algebra: "Algebra",
  geometry: "Geometry & Measure",
  stats: "Statistics & Probability",
};

/** Length of a timed sprint. */
export const SPRINT_SECONDS = 60;

/** Highest drill level used (1 = basics, 2 = core) — sprint items must be quick. */
export const SPRINT_MAX_LEVEL = 2;
/** Generation tier used for every sprint item (friendly numbers, core facts). */
export const SPRINT_TIER = 1;

export interface SprintModeInfo {
  label: string;
  icon: string;
  description: string;
  /** Two sample prompts (plain text). */
  example: string;
}

export const SPRINT_MODE_INFO: Record<SprintMode, SprintModeInfo> = {
  number: {
    label: "Number & Ratio",
    icon: "⚖️",
    description: "Decimal multipliers, ratio sharing, index laws, negative powers & standard form conversions.",
    example: "Write 0.0045 in standard form · Multiplier for a 15% decrease?",
  },
  algebra: {
    label: "Algebra",
    icon: "🔤",
    description: "Expanding brackets, evaluating indices, solving linear & quadratic equations, inequalities & gradients.",
    example: "Expand (x + 3)(x − 5) · Gradient of y = −2x + 7?",
  },
  geometry: {
    label: "Geometry & Measure",
    icon: "📐",
    description: "Polygon & parallel-line angles, bearings, Pythagoras triples, SOHCAHTOA setup, sector & unit conversions.",
    example: "Exterior angle of a regular octagon? · Back bearing of 065°?",
  },
  stats: {
    label: "Statistics & Probability",
    icon: "🎲",
    description: "Complementary probability, expected frequency, midpoints, quartiles & IQR calculations.",
    example: "Expected 6s in 120 dice rolls? · Midpoint of 20 < t ≤ 30?",
  },
  mixed: {
    label: "Full Year 9 Mixed Sprint",
    icon: "⚡",
    description: "All 4 strands interleaved — build rapid automatic recall across every Year 9 Maths unit.",
    example: "Indices, brackets, bearings, Pythagoras & IQR in 60 seconds",
  },
};

export interface SprintItem {
  key: string;
  prompt: string;
  answer: AnswerSpec;
  answerText: string;
  traps?: Trap[];
  diagram?: string;
  drillId: string;
  topicId: string;
}

export function isSprintMode(v: unknown): v is SprintMode {
  return typeof v === "string" && (SPRINT_MODES as readonly string[]).includes(v);
}

export function sprintBestKey(mode: SprintMode): string {
  return `sprint:${mode}`;
}

export function sprintAwardKey(mode: SprintMode, day: string): string {
  return `sprint:${day}:${mode}`;
}

export function sprintStars(score: number): number {
  return Math.max(0, Math.min(5, Math.floor(score / 5)));
}

const STRAND_OF_TOPIC = new Map<string, Strand>(TOPIC_META.map((t) => [t.id, t.strand]));

export function strandOfTopic(topicId: string): Strand | undefined {
  return STRAND_OF_TOPIC.get(topicId);
}

export function sprintPool(mode: SprintMode, drills: readonly Drill[]): Drill[] {
  return drills.filter((d) => {
    if (d.level > SPRINT_MAX_LEVEL) return false;
    const strand = strandOfTopic(d.topicId);
    if (!strand) return false;
    return mode === "mixed" || strand === SPRINT_MODE_STRAND[mode];
  });
}

export function sprintPoolSizes(drills: readonly Drill[]): Record<SprintMode, number> {
  const out = {} as Record<SprintMode, number>;
  for (const m of SPRINT_MODES) out[m] = sprintPool(m, drills).length;
  return out;
}

function itemFrom(drill: Drill, rng: Rng): SprintItem | null {
  try {
    const it = drill.generate(rng, SPRINT_TIER);
    const prompt = typeof it?.prompt === "string" ? it.prompt.trim() : "";
    if (!prompt || !it.answer) return null;
    const answerText = displayAnswer(it.answer);
    if (!answerText) return null;
    return {
      key: `${drill.id}::${prompt}::${answerText}`,
      prompt,
      answer: it.answer,
      answerText,
      traps: it.traps?.length ? it.traps : undefined,
      diagram: it.diagram || undefined,
      drillId: drill.id,
      topicId: drill.topicId,
    };
  } catch {
    return null;
  }
}

export function sprintItem(pool: readonly Drill[], rng: Rng): SprintItem | null {
  if (!pool.length) return null;
  const byTopic = new Map<string, Drill[]>();
  for (const d of pool) {
    const list = byTopic.get(d.topicId);
    if (list) list.push(d);
    else byTopic.set(d.topicId, [d]);
  }
  const topics = [...byTopic.values()];
  let withDiagram: SprintItem | null = null;
  for (let i = 0; i < 12; i++) {
    const drill = rng.pick(rng.pick(topics));
    const item = itemFrom(drill, rng);
    if (!item) continue;
    if (!item.diagram) return item;
    withDiagram ??= item;
  }
  if (withDiagram) return withDiagram;
  for (const d of pool) {
    const item = itemFrom(d, rng);
    if (item) return item;
  }
  return null;
}
