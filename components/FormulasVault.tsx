"use client";
import { useState } from "react";
import Link from "next/link";
import type { FormulaFact, Misconception } from "@/lib/types";
import { Rich, RichInline } from "./Rich";
import { PrintButton } from "./Certificate";

export interface VaultTopicData {
  id: string;
  title: string;
  icon: string;
  strand: string;
  misconceptions: Misconception[];
  examMistakes: string[];
  formulas: FormulaFact[];
}

type ViewTab = "all" | "traps" | "cheatsheet";

const SUBJECT_CARDS = [
  {
    "title": "1. Indices, Standard Form & Percentage Multipliers",
    "badge": "Number & Ratio",
    "lines": [
      "`a^m × a^n = a^(m+n)` · `a^m ÷ a^n = a^(m−n)` · `(a^m)^n = a^(mn)` · `a^0 = 1` · `a^(−n) = 1/a^n`.",
      "Standard form: `A × 10^n` where **`1 ≤ A < 10`** (never `0.4 × 10^5` or `12 × 10^3`!).",
      "Percentage increase by `r%` → multiply by `1 + r/100`; decrease by `r%` → multiply by `1 − r/100`. For reverse %, **divide** by the multiplier."
    ]
  },
  {
    "title": "2. Algebra, Equations & Inequalities",
    "badge": "Algebra",
    "lines": [
      "Quadratics like `x^2 = 25` have **two** solutions: `x = 5` **and** `x = −5` (`±√`).",
      "Always **flip** the inequality sign (`<` ↔ `>`) when multiplying or dividing both sides by a **negative** number.",
      "Straight line `y = mx + c`: gradient `m = (y₂ − y₁)/(x₂ − x₁)` and `y`-intercept `(0, c)`. Dashed line for `<, >`; solid line for `≤, ≥`."
    ]
  },
  {
    "title": "3. Polygons, Bearings, Pythagoras & SOHCAHTOA",
    "badge": "Geometry",
    "lines": [
      "Polygon interior sum = `(n − 2) × 180°` · Exterior angle sum = `360°` · Interior + Exterior = `180°`.",
      "Bearings: measure **from North**, **clockwise**, **3 digits** (e.g. `045°`). Back bearing = `± 180°`.",
      "Pythagoras `a^2 + b^2 = c^2` (`c` is hypotenuse) · `sin θ = O/H`, `cos θ = A/H`, `tan θ = O/A` (calculator in **DEG** mode!)."
    ]
  },
  {
    "title": "4. Sectors, 3D Measure, Units & Grouped Statistics",
    "badge": "Measure & Stats",
    "lines": [
      "Sector arc = `(θ/360) × 2πr`, sector perimeter = `arc + 2r`, sector area = `(θ/360) × πr^2`.",
      "Cone volume = `(1/3)πr^2h` · Cylinder volume = `πr^2h` · `1 m^2 = 10,000 cm^2` · `1 m^3 = 1,000,000 cm^3`.",
      "Grouped mean uses **class midpoints** (`∑fx / ∑f`); plot cumulative frequency at **upper class boundaries**; `IQR = UQ − LQ`."
    ]
  }
];

export function FormulasVault({ topics }: { topics: VaultTopicData[] }) {
  const [tab, setTab] = useState<ViewTab>("all");
  const [strandFilter, setStrandFilter] = useState<string>("All");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const visibleTopics = topics.filter((t) => (strandFilter === "All" ? true : t.strand === strandFilter));

  const totalTraps = topics.reduce((s, t) => s + t.misconceptions.length, 0);
  const totalMistakes = topics.reduce((s, t) => s + t.examMistakes.length, 0);
  const totalFormulas = topics.reduce((s, t) => s + t.formulas.length, 0);

  return (
    <div className="space-y-6 print:space-y-3">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap gap-2">
            <span className="chip border-0 bg-bad-soft text-bad">❌→✅ {totalTraps} Mark-Scheme Swaps</span>
            <span className="chip border-0 bg-accent-soft text-warn">⚠️ {totalMistakes} Examiner Warnings</span>
            <span className="chip border-0 bg-brand-soft text-brand">📖 {totalFormulas} Key Rules &amp; Definitions</span>
          </div>
          <h1 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl print:text-xl">
            🎯 Year 9 Maths Formula & Mark-Saver Vault
          </h1>
          <p className="mt-1 max-w-3xl text-ink-2 print:hidden">
            What <strong>earns marks</strong> vs what <strong>loses marks</strong> in Year 9 Mathematics — mark-scheme phrasing, key formulae and examiner traps in one printable vault.
          </p>
        </div>
        <PrintButton label="Print Cheat-Sheet" />
      </header>

      {/* High-Yield Year 9 Maths Quick-Reference Cards */}
      <section aria-label="Year 9 Maths Non-Negotiable Exam Rules" className="grid gap-3 md:grid-cols-2">
        {SUBJECT_CARDS.map((c) => (
          <article key={c.title} className="card border-l-4 border-brand p-4">
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-extrabold text-ink">{c.title}</h2>
              <span className="chip shrink-0 border-0 bg-brand-soft text-xs text-brand">{c.badge}</span>
            </div>
            <ul className="mt-2 space-y-1.5 text-sm text-ink-2">
              {c.lines.map((line, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden className="text-brand font-bold">•</span>
                  <span className="min-w-0 flex-1">
                    <RichInline text={line} />
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {/* Filters */}
      <div className="no-print flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-surface p-3">
        <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Vault view">
          <button type="button" role="tab" aria-selected={tab === "all"} onClick={() => setTab("all")} className={`btn btn-sm ${tab === "all" ? "btn-primary" : "btn-secondary"}`}>
            All ({totalTraps + totalFormulas})
          </button>
          <button type="button" role="tab" aria-selected={tab === "traps"} onClick={() => setTab("traps")} className={`btn btn-sm ${tab === "traps" ? "btn-primary" : "btn-secondary"}`}>
            ❌→✅ Never Write / Write Instead ({totalTraps})
          </button>
          <button type="button" role="tab" aria-selected={tab === "cheatsheet"} onClick={() => setTab("cheatsheet")} className={`btn btn-sm ${tab === "cheatsheet" ? "btn-primary" : "btn-secondary"}`}>
            📖 Formulas, Rules &amp; Definitions ({totalFormulas})
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {["All","Number & Ratio","Algebra","Geometry & Measure","Statistics & Probability"].map((s) => (
            <button key={s} type="button" onClick={() => setStrandFilter(s)} className={`chip cursor-pointer text-xs ${strandFilter === s ? "border-brand bg-brand-soft text-brand" : ""}`}>
              {s === "All" ? "All Strands" : s}
            </button>
          ))}
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter e.g. bearings, cone, IQR, SOHCAHTOA…"
            aria-label="Filter exam vault"
            className="input h-9 w-52 text-sm"
          />
        </div>
      </div>

      {/* Topic-by-Topic Exam Vault */}
      <div className="space-y-6">
        {visibleTopics.map((t) => {
          const traps = t.misconceptions.filter((m) => !q || m.wrong.toLowerCase().includes(q) || m.right.toLowerCase().includes(q));
          const mistakes = t.examMistakes.filter((m) => !q || m.toLowerCase().includes(q));
          const formulas = t.formulas.filter((f) => !q || f.name.toLowerCase().includes(q) || f.formula.toLowerCase().includes(q) || (f.note ?? "").toLowerCase().includes(q));

          const showTraps = tab !== "cheatsheet" && (traps.length > 0 || mistakes.length > 0);
          const showFormulas = tab !== "traps" && formulas.length > 0;
          if (!showTraps && !showFormulas) return null;

          return (
            <section key={t.id} id={`vault-${t.id}`} className="card space-y-4 p-4 sm:p-5 break-inside-avoid">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wide text-brand">{t.strand}</div>
                  <h2 className="text-xl font-black">
                    <span aria-hidden>{t.icon} </span>
                    {t.title}
                  </h2>
                </div>
                <div className="no-print flex flex-wrap gap-2">
                  <Link href={`/topic/${t.id}?tab=revise`} className="btn btn-secondary btn-sm">
                    🧠 Flashcards &amp; Revise
                  </Link>
                  <Link href={`/topic/${t.id}?tab=practise`} className="btn btn-primary btn-sm">
                    ✏️ Practise →
                  </Link>
                </div>
              </div>

              {showTraps && traps.length > 0 ? (
                <div>
                  <h3 className="text-sm font-black uppercase tracking-wider text-bad">
                    ❌ Never Write This → ✅ Write This Instead (CIE Mark-Scheme Precision)
                  </h3>
                  <ul className="mt-2 space-y-2.5">
                    {traps.map((m, idx) => (
                      <li key={idx} className="grid overflow-hidden rounded-xl border border-line sm:grid-cols-2">
                        <div className="bg-bad-soft p-3.5 text-sm">
                          <div className="text-xs font-black uppercase tracking-wider text-bad">❌ Loses Marks — Never Write</div>
                          <p className="mt-1 line-through decoration-bad/60">
                            <RichInline text={m.wrong} />
                          </p>
                        </div>
                        <div className="bg-good-soft p-3.5 text-sm">
                          <div className="text-xs font-black uppercase tracking-wider text-good">✅ Earns Marks — Write Instead</div>
                          <p className="mt-1 font-semibold">
                            <RichInline text={m.right} />
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {showTraps && mistakes.length > 0 ? (
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-warn">⚠️ Examiner Report Warnings</h3>
                  <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                    {mistakes.map((x, idx) => (
                      <li key={idx} className="flex gap-2.5 rounded-xl border border-line bg-surface-2 p-3 text-sm">
                        <span aria-hidden className="font-black text-warn">!</span>
                        <span className="min-w-0 flex-1">
                          <RichInline text={x} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {showFormulas && formulas.length > 0 ? (
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-brand">📖 Key Formulas, Rules &amp; Definitions</h3>
                  <dl className="mt-2 grid gap-3 sm:grid-cols-2">
                    {formulas.map((f, idx) => (
                      <div key={idx} className="min-w-0 rounded-xl border border-line bg-surface p-3.5">
                        <dt className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
                          <RichInline text={f.name} />
                        </dt>
                        <dd className="mt-1 overflow-x-auto">
                          <Rich text={f.formula} className="text-[0.98rem] font-semibold text-ink" />
                          {f.note ? <Rich text={f.note} className="mt-0.5 text-xs text-ink-2" /> : null}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ) : null}
            </section>
          );
        })}
      </div>
    </div>
  );
}
