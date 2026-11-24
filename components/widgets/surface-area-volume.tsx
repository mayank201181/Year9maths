"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

function gcd(a: number, b: number): number {
  let x = Math.abs(Math.round(a));
  let y = Math.abs(Math.round(b));
  while (y !== 0) {
    const t = x % y;
    x = y;
    y = t;
  }
  return x || 1;
}

function fmtExactPi(num: number, den: number): string {
  const g = gcd(num, den);
  const n = num / g;
  const d = den / g;
  if (d === 1) return `${n}π`;
  return `${n}π / ${d}`;
}

function SectorExplorer() {
  const [radius, setRadius] = useState(6);
  const [angle, setAngle] = useState(120);
  const [displayMode, setDisplayMode] = useState<"exact" | "decimal">("exact");

  const fracG = gcd(angle, 360);
  const fracNum = angle / fracG;
  const fracDen = 360 / fracG;

  const arcExact = fmtExactPi(angle * 2 * radius, 360);
  const areaExact = fmtExactPi(angle * radius * radius, 360);
  const arcDec = (angle / 360) * 2 * Math.PI * radius;
  const areaDec = (angle / 360) * Math.PI * radius * radius;
  const perimDec = arcDec + 2 * radius;

  // SVG geometry
  const cx = 135;
  const cy = 120;
  const svgR = 32 + (radius / 15) * 60;
  const rad = (angle * Math.PI) / 180;
  const x1 = cx + svgR;
  const y1 = cy;
  const x2 = cx + svgR * Math.cos(-rad);
  const y2 = cy + svgR * Math.sin(-rad);
  const largeArc = angle > 180 ? 1 : 0;

  const sectorPath = `M ${cx} ${cy} L ${x1.toFixed(1)} ${y1.toFixed(1)} A ${svgR.toFixed(1)} ${svgR.toFixed(1)} 0 ${largeArc} 0 ${x2.toFixed(1)} ${y2.toFixed(1)} Z`;
  const arcPath = `M ${x1.toFixed(1)} ${y1.toFixed(1)} A ${svgR.toFixed(1)} ${svgR.toFixed(1)} 0 ${largeArc} 0 ${x2.toFixed(1)} ${y2.toFixed(1)}`;

  const angleArcR = 22;
  const ax1 = cx + angleArcR;
  const ay1 = cy;
  const ax2 = cx + angleArcR * Math.cos(-rad);
  const ay2 = cy + angleArcR * Math.sin(-rad);
  const angleArcPath = `M ${ax1.toFixed(1)} ${ay1.toFixed(1)} A ${angleArcR} ${angleArcR} 0 ${largeArc} 0 ${ax2.toFixed(1)} ${ay2.toFixed(1)}`;

  return (
    <WidgetFrame
      title="Circle Sector Slicer"
      tryThis={[
        "Set {{r = 6}} and {{theta = 120°}}: compare the arc length ({{4pi}}) with the total perimeter ({{4pi + 12}}).",
        "Double the radius from {{5}} to {{10}} at the same angle: arc length doubles, but what happens to the **area**?",
      ]}
      caption={
        <span>
          A <strong>{angle}°</strong> sector is{" "}
          <strong>
            {fracNum}/{fracDen}
          </strong>{" "}
          of the full circle. Notice how the perimeter always adds{" "}
          <strong>2r = {2 * radius} cm</strong> (the two green straight edges) to the blue curved arc.
        </span>
      }
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 items-center">
        <div className="min-w-0 rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 270 240"
            className="w-full h-auto"
            role="img"
            aria-label={`Interactive circle sector with radius ${radius} cm and angle ${angle} degrees`}
          >
            <circle
              cx={cx}
              cy={cy}
              r={svgR}
              fill="none"
              stroke="var(--line)"
              strokeWidth={2}
              strokeDasharray="4 4"
            />
            <path d={sectorPath} fill="var(--brand-soft)" />
            <path
              d={arcPath}
              fill="none"
              stroke="var(--brand)"
              strokeWidth={4.5}
              strokeLinecap="round"
            />
            <line
              x1={cx}
              y1={cy}
              x2={x1}
              y2={y1}
              stroke="var(--good)"
              strokeWidth={3}
              strokeLinecap="round"
            />
            <line
              x1={cx}
              y1={cy}
              x2={x2}
              y2={y2}
              stroke="var(--good)"
              strokeWidth={3}
              strokeLinecap="round"
            />
            <path d={angleArcPath} fill="none" stroke="var(--ink)" strokeWidth={1.8} />
            <circle cx={cx} cy={cy} r={3.2} fill="var(--ink)" />
            <text
              x={cx}
              y={228}
              textAnchor="middle"
              fontSize={12}
              fontWeight={700}
              fill="var(--ink-2)"
            >
              r = {radius} cm · θ = {angle}° ({fracNum}/{fracDen} of circle)
            </text>
          </svg>
        </div>

        <div className="min-w-0 space-y-4">
          <Segmented
            label="Answer display mode"
            value={displayMode}
            onChange={setDisplayMode}
            options={[
              { value: "exact", label: "Exact (in π)" },
              { value: "decimal", label: "Decimal (1 d.p.)" },
            ]}
          />
          <Slider
            label="Radius (r)"
            value={radius}
            min={2}
            max={15}
            step={1}
            onChange={setRadius}
            format={(v) => `${v} cm`}
          />
          <Slider
            label="Central angle (θ)"
            value={angle}
            min={15}
            max={345}
            step={15}
            onChange={setAngle}
            format={(v) => `${v}°`}
          />

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <Readout
              label="Arc Length"
              value={displayMode === "exact" ? `${arcExact} cm` : `${arcDec.toFixed(1)} cm`}
              tone="brand"
            />
            <Readout
              label="Sector Area"
              value={displayMode === "exact" ? `${areaExact} cm²` : `${areaDec.toFixed(1)} cm²`}
              tone="ink"
            />
            <div className="sm:col-span-2">
              <Readout
                label="Total Perimeter (Arc + 2r)"
                value={
                  displayMode === "exact"
                    ? `${arcExact} + ${2 * radius} cm`
                    : `${perimDec.toFixed(1)} cm`
                }
                tone="good"
              />
            </div>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

function CylinderConeBuilder() {
  const [solid, setSolid] = useState<"cylinder" | "cone">("cone");
  const [radius, setRadius] = useState(6);
  const [height, setHeight] = useState(8);

  const slant = Math.hypot(radius, height);
  const isIntSlant = Math.abs(slant - Math.round(slant)) < 1e-9;
  const slantStr = isIntSlant ? `${Math.round(slant)}` : slant.toFixed(2);

  const cylVol = Math.PI * radius * radius * height;
  const coneVol = cylVol / 3;
  const cylCsa = 2 * Math.PI * radius * height;
  const cylTotalSa = 2 * Math.PI * radius * radius + cylCsa;
  const coneCsa = Math.PI * radius * slant;
  const coneTotalSa = Math.PI * radius * radius + coneCsa;

  // Scaled visual coordinates
  const rx = 22 + (radius / 10) * 52;
  const ry = Math.max(10, rx * 0.28);
  const hPx = 46 + (height / 15) * 96;
  const baseY = 192;
  const topY = baseY - hPx;
  const cx = 135;

  return (
    <WidgetFrame
      title="Cylinder & Cone 3D Explorer"
      tryThis={[
        "Pick **Solid Cone** with {{r = 6, h = 8}} (or {{r = 3, h = 4}}): watch the slant height {{l}} snap to an exact Pythagorean triple!",
        "Switch back and forth between **Closed Cylinder** and **Solid Cone** with the same {{r}} and {{h}}: verify that the cone volume is always exactly {{1/3}} of the cylinder.",
      ]}
      caption={
        solid === "cone" ? (
          <span>
            Pythagoras inside the cone gives slant height{" "}
            <strong>
              l = √({radius}² + {height}²) = {slantStr} cm
            </strong>
            . Volume uses perpendicular height <strong>h = {height} cm</strong>, while curved surface area uses{" "}
            <strong>l = {slantStr} cm</strong>.
          </span>
        ) : (
          <span>
            Unrolling this cylinder produces two circles of area{" "}
            <strong>{radius * radius}π cm²</strong> each plus a rectangle of width{" "}
            <strong>{2 * radius}π cm</strong> and height <strong>{height} cm</strong>.
          </span>
        )
      }
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 items-center">
        <div className="min-w-0 rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 270 230"
            className="w-full h-auto"
            role="img"
            aria-label={`Interactive 3D ${solid} with radius ${radius} cm and height ${height} cm`}
          >
            {solid === "cylinder" ? (
              <g>
                <ellipse
                  cx={cx}
                  cy={baseY}
                  rx={rx}
                  ry={ry}
                  fill="var(--surface)"
                  stroke="var(--ink-2)"
                  strokeWidth={1.4}
                  strokeDasharray="4 4"
                />
                <path
                  d={`M ${cx - rx} ${topY} L ${cx - rx} ${baseY} A ${rx} ${ry} 0 0 0 ${cx + rx} ${baseY} L ${cx + rx} ${topY}`}
                  fill="var(--surface)"
                  stroke="var(--ink)"
                  strokeWidth={2}
                />
                <ellipse
                  cx={cx}
                  cy={topY}
                  rx={rx}
                  ry={ry}
                  fill="var(--brand-soft)"
                  stroke="var(--brand)"
                  strokeWidth={2.2}
                />
                <line
                  x1={cx}
                  y1={topY}
                  x2={cx + rx}
                  y2={topY}
                  stroke="var(--brand)"
                  strokeWidth={2.4}
                />
                <text
                  x={cx + rx / 2}
                  y={topY - 6}
                  textAnchor="middle"
                  fontSize={12}
                  fontWeight={700}
                  fill="var(--brand)"
                >
                  r = {radius}
                </text>
                <line
                  x1={cx + rx + 14}
                  y1={topY}
                  x2={cx + rx + 14}
                  y2={baseY}
                  stroke="var(--good)"
                  strokeWidth={2.2}
                />
                <text
                  x={cx + rx + 20}
                  y={(topY + baseY) / 2 + 4}
                  fontSize={12}
                  fontWeight={700}
                  fill="var(--good)"
                >
                  h = {height}
                </text>
              </g>
            ) : (
              <g>
                <ellipse
                  cx={cx}
                  cy={baseY}
                  rx={rx}
                  ry={ry}
                  fill="var(--brand-soft)"
                  stroke="var(--ink)"
                  strokeWidth={2}
                />
                <path
                  d={`M ${cx - rx} ${baseY} L ${cx} ${topY} L ${cx + rx} ${baseY}`}
                  fill="var(--surface)"
                  fillOpacity={0.72}
                  stroke="var(--ink)"
                  strokeWidth={2}
                  strokeLinejoin="round"
                />
                <path
                  d={`M ${cx - rx} ${baseY} A ${rx} ${ry} 0 0 0 ${cx + rx} ${baseY}`}
                  fill="none"
                  stroke="var(--ink)"
                  strokeWidth={2}
                />
                {/* Internal right triangle */}
                <line
                  x1={cx}
                  y1={topY}
                  x2={cx}
                  y2={baseY}
                  stroke="var(--good)"
                  strokeWidth={2.4}
                  strokeDasharray="5 3"
                />
                <line
                  x1={cx}
                  y1={baseY}
                  x2={cx + rx}
                  y2={baseY}
                  stroke="var(--brand)"
                  strokeWidth={2.4}
                />
                <line
                  x1={cx}
                  y1={topY}
                  x2={cx + rx}
                  y2={baseY}
                  stroke="var(--bad)"
                  strokeWidth={2.6}
                />
                <polyline
                  points={`${cx},${baseY - 10} ${cx + 10},${baseY - 10} ${cx + 10},${baseY}`}
                  fill="none"
                  stroke="var(--ink)"
                  strokeWidth={1.5}
                />
                <text
                  x={cx - 6}
                  y={(topY + baseY) / 2 + 4}
                  textAnchor="end"
                  fontSize={12}
                  fontWeight={700}
                  fill="var(--good)"
                >
                  h = {height}
                </text>
                <text
                  x={cx + rx / 2}
                  y={baseY - 5}
                  textAnchor="middle"
                  fontSize={12}
                  fontWeight={700}
                  fill="var(--brand)"
                >
                  r = {radius}
                </text>
                <text
                  x={cx + rx / 2 + 12}
                  y={(topY + baseY) / 2 - 4}
                  fontSize={12}
                  fontWeight={700}
                  fill="var(--bad)"
                >
                  l = {slantStr}
                </text>
              </g>
            )}
            <text
              x={cx}
              y={220}
              textAnchor="middle"
              fontSize={11}
              fontWeight={700}
              fill="var(--ink-2)"
            >
              {solid === "cone"
                ? `Cone V = 1/3 × Cylinder V (${coneVol.toFixed(1)} vs ${cylVol.toFixed(1)} cm³)`
                : `Cylinder V = 3 × matching Cone V (${cylVol.toFixed(1)} cm³)`}
            </text>
          </svg>
        </div>

        <div className="min-w-0 space-y-4">
          <Segmented
            label="3D solid type"
            value={solid}
            onChange={setSolid}
            options={[
              { value: "cylinder", label: "Closed Cylinder" },
              { value: "cone", label: "Solid Cone" },
            ]}
          />
          <Slider
            label="Base radius (r)"
            value={radius}
            min={2}
            max={10}
            step={1}
            onChange={setRadius}
            format={(v) => `${v} cm`}
          />
          <Slider
            label="Perpendicular height (h)"
            value={height}
            min={3}
            max={15}
            step={1}
            onChange={setHeight}
            format={(v) => `${v} cm`}
          />

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <Readout
              label="Volume"
              value={
                solid === "cylinder"
                  ? `${radius * radius * height}π (${cylVol.toFixed(1)} cm³)`
                  : `${fmtExactPi(radius * radius * height, 3)} (${coneVol.toFixed(1)} cm³)`
              }
              tone="brand"
            />
            <Readout
              label="Curved SA"
              value={
                solid === "cylinder"
                  ? `${2 * radius * height}π (${cylCsa.toFixed(1)} cm²)`
                  : isIntSlant
                    ? `${radius * Math.round(slant)}π (${coneCsa.toFixed(1)} cm²)`
                    : `${coneCsa.toFixed(1)} cm²`
              }
              tone="ink"
            />
            <div className="sm:col-span-2">
              <Readout
                label="Total Surface Area"
                value={
                  solid === "cylinder"
                    ? `${2 * radius * radius + 2 * radius * height}π cm² (${cylTotalSa.toFixed(1)} cm²)`
                    : isIntSlant
                      ? `${radius * radius + radius * Math.round(slant)}π cm² (${coneTotalSa.toFixed(1)} cm²)`
                      : `${coneTotalSa.toFixed(1)} cm²`
                }
                tone="good"
              />
            </div>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "sector-explorer",
    title: "Circle Sector Slicer",
    blurb:
      "Drag the radius and central angle to see arc length, sector area, and total perimeter update in exact π form and decimals.",
    Component: SectorExplorer,
  },
  {
    id: "cylinder-cone-builder",
    title: "Cylinder & Cone 3D Explorer",
    blurb:
      "Switch between a cylinder and a cone with matching radius and height to watch the 1 : 3 volume rule and cone slant height live.",
    Component: CylinderConeBuilder,
  },
];
