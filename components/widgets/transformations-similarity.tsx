"use client";

import { useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, makePlane, PlaneGrid, type WidgetDef } from "./kit";

type Pt = [number, number];
type Mode = "reflect" | "translate" | "rotate" | "enlarge";
type Mirror = "x=a" | "y=b" | "y=x" | "y=-x";
type RotDir = "90acw" | "90cw" | "180";

const BASE_TRI: Pt[] = [
  [1, 1],
  [3, 1],
  [1, 2],
];

function fmtN(v: number): string {
  const c = Number(v.toFixed(2));
  return c < 0 ? `−${Math.abs(c)}` : String(c);
}

function fmtCoord([x, y]: Pt): string {
  return `(${fmtN(x)}, ${fmtN(y)})`;
}

function TransformStudio() {
  const [mode, setMode] = useState<Mode>("reflect");
  const [mirror, setMirror] = useState<Mirror>("y=x");
  const [lineK, setLineK] = useState(0);
  const [dx, setDx] = useState(-4);
  const [dy, setDy] = useState(2);
  const [rotDir, setRotDir] = useState<RotDir>("90acw");
  const [cx, setCx] = useState(0);
  const [cy, setCy] = useState(0);
  const [sf, setSf] = useState(2);

  const plane = makePlane({ width: 320, height: 320, xMin: -6, xMax: 6, yMin: -6, yMax: 6, pad: 24 });

  const transform = ([x, y]: Pt): Pt => {
    if (mode === "reflect") {
      if (mirror === "x=a") return [2 * lineK - x, y];
      if (mirror === "y=b") return [x, 2 * lineK - y];
      if (mirror === "y=x") return [y, x];
      return [-y, -x];
    }
    if (mode === "translate") return [x + dx, y + dy];
    if (mode === "rotate") {
      const vx = x - cx;
      const vy = y - cy;
      if (rotDir === "90acw") return [cx - vy, cy + vx];
      if (rotDir === "90cw") return [cx + vy, cy - vx];
      return [cx - vx, cy - vy];
    }
    return [cx + sf * (x - cx), cy + sf * (y - cy)];
  };

  const img = BASE_TRI.map(transform);
  const polyStr = (pts: Pt[]) => pts.map(([x, y]) => `${plane.px(x)},${plane.py(y)}`).join(" ");

  let description = "";
  if (mode === "reflect") {
    description =
      mirror === "x=a"
        ? `Reflection in vertical line x = ${fmtN(lineK)}`
        : mirror === "y=b"
          ? `Reflection in horizontal line y = ${fmtN(lineK)}`
          : mirror === "y=x"
            ? "Reflection in diagonal line y = x"
            : "Reflection in diagonal line y = −x";
  } else if (mode === "translate") {
    description = `Translation by vector (${fmtN(dx)}, ${fmtN(dy)})`;
  } else if (mode === "rotate") {
    const turn = rotDir === "90acw" ? "90° anticlockwise" : rotDir === "90cw" ? "90° clockwise" : "180°";
    description = `Rotation ${turn} about centre (${fmtN(cx)}, ${fmtN(cy)})`;
  } else {
    description = `Enlargement, scale factor ${sf}, centre (${fmtN(cx)}, ${fmtN(cy)})`;
  }

  return (
    <WidgetFrame
      title="2D Transformation Studio"
      tryThis={[
        "Reflect in y = x and check how every (x, y) swaps cleanly to (y, x).",
        "Switch to Enlarge, set scale factor 0.5, and watch the image shrink towards centre C!",
        "Switch to Rotate, move centre C to (1, 1), and compare 90° ACW vs 180°.",
      ]}
      caption={
        <span>
          <strong>Full exam description:</strong> {description}. Notice that{" "}
          {mode === "enlarge" && sf !== 1
            ? "angles stay identical while lengths multiply by " + sf + " (similar, not congruent)."
            : mode === "reflect"
              ? "shape and size stay identical (congruent), but orientation flips!"
              : "shape, size, and orientation all stay identical (congruent)!"}
        </span>
      }
    >
      <div className="space-y-4">
        <Segmented<Mode>
          label="Transformation type"
          value={mode}
          onChange={setMode}
          options={[
            { value: "reflect", label: "Reflect" },
            { value: "translate", label: "Translate" },
            { value: "rotate", label: "Rotate" },
            { value: "enlarge", label: "Enlarge" },
          ]}
        />

        <div className="grid gap-4 md:grid-cols-2 md:items-start">
          <div className="min-w-0 rounded-xl border border-line bg-surface-2 p-2">
            <svg viewBox="0 0 320 320" className="h-auto w-full" role="img" aria-label="Interactive coordinate grid showing triangle ABC and its transformed image A'B'C'">
              <PlaneGrid plane={plane} step={2} />

              {/* Mirror line */}
              {mode === "reflect" && mirror === "x=a" ? (
                <line x1={plane.px(lineK)} y1={plane.py(-6)} x2={plane.px(lineK)} y2={plane.py(6)} stroke="var(--bad)" strokeWidth={2} strokeDasharray="5,4" />
              ) : null}
              {mode === "reflect" && mirror === "y=b" ? (
                <line x1={plane.px(-6)} y1={plane.py(lineK)} x2={plane.px(6)} y2={plane.py(lineK)} stroke="var(--bad)" strokeWidth={2} strokeDasharray="5,4" />
              ) : null}
              {mode === "reflect" && mirror === "y=x" ? (
                <line x1={plane.px(-6)} y1={plane.py(-6)} x2={plane.px(6)} y2={plane.py(6)} stroke="var(--bad)" strokeWidth={2} strokeDasharray="5,4" />
              ) : null}
              {mode === "reflect" && mirror === "y=-x" ? (
                <line x1={plane.px(-6)} y1={plane.py(6)} x2={plane.px(6)} y2={plane.py(-6)} stroke="var(--bad)" strokeWidth={2} strokeDasharray="5,4" />
              ) : null}

              {/* Translation vector arrows */}
              {mode === "translate"
                ? BASE_TRI.map((p, i) => (
                    <line
                      key={i}
                      x1={plane.px(p[0])}
                      y1={plane.py(p[1])}
                      x2={plane.px(img[i][0])}
                      y2={plane.py(img[i][1])}
                      stroke="var(--bad)"
                      strokeWidth={1.3}
                      strokeDasharray="4,3"
                    />
                  ))
                : null}

              {/* Enlargement rays */}
              {mode === "enlarge"
                ? BASE_TRI.map((p, i) => {
                    const farX = Math.abs(img[i][0] - cx) >= Math.abs(p[0] - cx) ? img[i][0] : p[0];
                    const farY = Math.abs(img[i][1] - cy) >= Math.abs(p[1] - cy) ? img[i][1] : p[1];
                    return (
                      <line
                        key={i}
                        x1={plane.px(cx)}
                        y1={plane.py(cy)}
                        x2={plane.px(farX)}
                        y2={plane.py(farY)}
                        stroke="var(--bad)"
                        strokeWidth={1.3}
                        strokeDasharray="4,3"
                      />
                    );
                  })
                : null}

              {/* Rotation arms to A and A' */}
              {mode === "rotate" ? (
                <>
                  <line x1={plane.px(cx)} y1={plane.py(cy)} x2={plane.px(BASE_TRI[0][0])} y2={plane.py(BASE_TRI[0][1])} stroke="var(--bad)" strokeWidth={1.5} strokeDasharray="4,3" />
                  <line x1={plane.px(cx)} y1={plane.py(cy)} x2={plane.px(img[0][0])} y2={plane.py(img[0][1])} stroke="var(--good)" strokeWidth={1.5} strokeDasharray="4,3" />
                </>
              ) : null}

              {/* Original triangle */}
              <polygon points={polyStr(BASE_TRI)} fill="var(--brand-soft)" stroke="var(--brand)" strokeWidth={2} />
              {/* Image triangle */}
              <polygon points={polyStr(img)} fill="var(--surface)" fillOpacity={0.65} stroke="var(--good)" strokeWidth={2.2} />

              {/* Vertex dots */}
              {BASE_TRI.map(([x, y], i) => (
                <circle key={`o${i}`} cx={plane.px(x)} cy={plane.py(y)} r={3} fill="var(--brand)" />
              ))}
              {img.map(([x, y], i) => (
                <circle key={`i${i}`} cx={plane.px(x)} cy={plane.py(y)} r={3} fill="var(--good)" />
              ))}

              {/* Centre marker */}
              {mode === "rotate" || mode === "enlarge" ? (
                <g>
                  <circle cx={plane.px(cx)} cy={plane.py(cy)} r={4.5} fill="var(--bad)" />
                  <text x={plane.px(cx) + 7} y={plane.py(cy) - 5} fontSize={11} fontWeight={700} fill="var(--bad)">
                    C
                  </text>
                </g>
              ) : null}
            </svg>
          </div>

          <div className="min-w-0 space-y-3">
            {mode === "reflect" ? (
              <div className="space-y-3">
                <Segmented<Mirror>
                  label="Mirror line"
                  value={mirror}
                  onChange={setMirror}
                  options={[
                    { value: "x=a", label: "x = a" },
                    { value: "y=b", label: "y = b" },
                    { value: "y=x", label: "y = x" },
                    { value: "y=-x", label: "y = −x" },
                  ]}
                />
                {mirror === "x=a" || mirror === "y=b" ? (
                  <Slider label={mirror === "x=a" ? "Mirror position a" : "Mirror position b"} value={lineK} min={-2} max={3} step={1} onChange={setLineK} format={fmtN} />
                ) : null}
              </div>
            ) : null}

            {mode === "translate" ? (
              <div className="space-y-3">
                <Slider label="Horizontal shift dx" value={dx} min={-5} max={3} step={1} onChange={setDx} format={fmtN} />
                <Slider label="Vertical shift dy" value={dy} min={-5} max={4} step={1} onChange={setDy} format={fmtN} />
              </div>
            ) : null}

            {mode === "rotate" ? (
              <div className="space-y-3">
                <Segmented<RotDir>
                  label="Rotation angle"
                  value={rotDir}
                  onChange={setRotDir}
                  options={[
                    { value: "90acw", label: "90° ACW" },
                    { value: "90cw", label: "90° CW" },
                    { value: "180", label: "180°" },
                  ]}
                />
                <Slider label="Centre x" value={cx} min={-2} max={2} step={1} onChange={setCx} format={fmtN} />
                <Slider label="Centre y" value={cy} min={-2} max={2} step={1} onChange={setCy} format={fmtN} />
              </div>
            ) : null}

            {mode === "enlarge" ? (
              <div className="space-y-3">
                <Segmented<string>
                  label="Scale factor"
                  value={String(sf)}
                  onChange={(v) => setSf(Number(v))}
                  options={[
                    { value: "0.5", label: "k = ½" },
                    { value: "1.5", label: "k = 1.5" },
                    { value: "2", label: "k = 2" },
                  ]}
                />
                <Slider label="Centre x" value={cx} min={-2} max={2} step={1} onChange={setCx} format={fmtN} />
                <Slider label="Centre y" value={cy} min={-2} max={2} step={1} onChange={setCy} format={fmtN} />
              </div>
            ) : null}

            <div className="grid grid-cols-1 gap-2 pt-1">
              {BASE_TRI.map((p, i) => {
                const name = ["A", "B", "C"][i];
                return (
                  <Readout
                    key={name}
                    label={`Vertex ${name} → ${name}'`}
                    value={`${fmtCoord(p)} → ${fmtCoord(img[i])}`}
                    tone="brand"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

function SimilarityLab() {
  const [base, setBase] = useState(4);
  const [height, setHeight] = useState(3);
  const [k, setK] = useState(1.5);

  const hyp = Math.hypot(base, height);
  const b2 = Number((base * k).toFixed(2));
  const h2 = Number((height * k).toFixed(2));
  const hyp2 = Number((hyp * k).toFixed(2));
  const area1 = Number((0.5 * base * height).toFixed(2));
  const area2 = Number((0.5 * b2 * h2).toFixed(2));
  const angleDeg = (Math.atan2(height, base) * 180) / Math.PI;

  const scalePx = 14;
  const s1w = base * scalePx;
  const s1h = height * scalePx;
  const s2w = b2 * scalePx;
  const s2h = h2 * scalePx;
  const yFloor = 195;

  return (
    <WidgetFrame
      title="Similar Triangles & Scale Factor Lab"
      tryThis={[
        "Set scale factor k = 2 and compare the side ratio (2) with the area ratio (4 = 2²).",
        "Set k = 0.5 to see a fractional enlargement — does the angle θ change at all?",
        "Try base = 4, height = 3 (a 3–4–5 triangle) and verify all three sides scale by the exact same k.",
      ]}
      caption={
        <span>
          Every pair of corresponding sides has ratio <strong>{k}</strong>, both triangles have the exact same acute angle{" "}
          <strong>{angleDeg.toFixed(1)}°</strong>, and the area multiplies by{" "}
          <strong>
            k² = {Number((k * k).toFixed(2))}
          </strong>
          .
        </span>
      }
    >
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-3">
          <Slider label="Original base (cm)" value={base} min={2} max={6} step={1} onChange={setBase} />
          <Slider label="Original height (cm)" value={height} min={2} max={5} step={1} onChange={setHeight} />
          <Slider label="Scale factor k" value={k} min={0.5} max={2.5} step={0.25} onChange={setK} />
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-2">
          <svg viewBox="0 0 500 220" className="h-auto w-full" role="img" aria-label="Two similar right-angled triangles side by side scaled by factor k">
            {/* Original triangle on left */}
            <polygon
              points={`40,${yFloor} ${40 + s1w},${yFloor} 40,${yFloor - s1h}`}
              fill="var(--brand-soft)"
              stroke="var(--brand)"
              strokeWidth={2.2}
            />
            <polyline points={`40,${yFloor - 10} 50,${yFloor - 10} 50,${yFloor}`} fill="none" stroke="var(--ink-2)" strokeWidth={1.5} />
            <text x={40 + s1w / 2} y={yFloor + 16} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--brand)">
              {base} cm
            </text>
            <text x={32} y={yFloor - s1h / 2} textAnchor="end" fontSize={11} fontWeight={700} fill="var(--brand)">
              {height}
            </text>
            <text x={40 + s1w / 2 + 12} y={yFloor - s1h / 2 - 4} fontSize={10.5} fontWeight={700} fill="var(--ink-2)">
              {hyp.toFixed(2)}
            </text>
            <text x={40 + s1w - 28} y={yFloor - 6} fontSize={10} fontWeight={700} fill="var(--bad)">
              {angleDeg.toFixed(0)}°
            </text>

            {/* Arrow */}
            <text x={200} y={110} textAnchor="middle" fontSize={12} fontWeight={800} fill="var(--good)">
              × {k}
            </text>
            <line x1={175} y1={118} x2={225} y2={118} stroke="var(--good)" strokeWidth={2} />
            <polygon points="229,118 221,114 221,122" fill="var(--good)" />

            {/* Scaled triangle on right */}
            <polygon
              points={`260,${yFloor} ${260 + s2w},${yFloor} 260,${yFloor - s2h}`}
              fill="var(--surface)"
              stroke="var(--good)"
              strokeWidth={2.4}
            />
            <polyline points={`260,${yFloor - 10} 270,${yFloor - 10} 270,${yFloor}`} fill="none" stroke="var(--ink-2)" strokeWidth={1.5} />
            <text x={260 + s2w / 2} y={yFloor + 16} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--good)">
              {b2} cm
            </text>
            <text x={252} y={yFloor - s2h / 2} textAnchor="end" fontSize={11} fontWeight={700} fill="var(--good)">
              {h2}
            </text>
            <text x={260 + s2w / 2 + 14} y={yFloor - s2h / 2 - 4} fontSize={10.5} fontWeight={700} fill="var(--ink-2)">
              {hyp2}
            </text>
            <text x={260 + s2w - 28} y={yFloor - 6} fontSize={10} fontWeight={700} fill="var(--bad)">
              {angleDeg.toFixed(0)}°
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Length ratio" value={`× ${k}`} tone="brand" />
          <Readout label="Angle θ" value={`${angleDeg.toFixed(1)}° (equal)`} tone="good" />
          <Readout label="Original area" value={`${area1} cm²`} tone="ink" />
          <Readout label="Image area" value={`${area2} cm²`} tone="good" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "transform-studio",
    title: "2D Transformation Studio",
    blurb: "Test reflections, translations, rotations, and enlargements live on a coordinate plane and inspect every vertex image.",
    Component: TransformStudio,
  },
  {
    id: "similarity-lab",
    title: "Similar Triangles & Scale Factor Lab",
    blurb: "Scale a triangle by integer or fractional factors to verify that angles stay fixed while sides scale by k and areas scale by k².",
    Component: SimilarityLab,
  },
];
