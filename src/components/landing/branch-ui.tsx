/**
 * Branch Labs — shared landing primitives, ported from the New Design folder
 * (concepts/shared.jsx + the design-system bundle). These mirror the DS
 * Button / Eyebrow / TrlFace / BranchField so the Docusaurus landing page
 * matches the "Manifesto" (Direction B) home concept.
 *
 * Colors and tokens resolve from the `.bl-landing` scope defined in
 * src/css/custom.css; on dark sections the `.on-dark` class flips them.
 */
import React, { type CSSProperties, type ReactNode } from 'react';

export const BL = {
  raisin: '#212234',
  slate: '#7a7e90',
  lavender: '#d3daed',
  green: '#74f681',
  greenStrong: '#0dcc20',
  pear: '#c0e533',
  white: '#ffffff',
} as const;

export type Project = {
  n: string;
  name: string;
  stage: string;
  trl: number;
  blurb: string;
  fund: string;
};

export const PROJECTS: Project[] = [
  { n: '01', name: 'NeuroSuit', stage: 'Prototype', trl: 4, blurb: 'Session-based haptic-and-VR suit for deep immersion.', fund: 'EU consortium' },
  { n: '02', name: 'GhostFlat', stage: 'Prototype', trl: 6, blurb: 'AI-generated navigable VR recreation of a Warsaw apartment.', fund: 'Grant + studio' },
  { n: '03', name: 'Remindr-visor', stage: 'Research', trl: 2, blurb: 'Contemplative AR glasses: unobtrusive, periodic, kind.', fund: 'Self-funded' },
  { n: '04', name: 'AirSentry', stage: 'Prototype', trl: 5, blurb: 'Wrist-worn limonene & fragrance allergen detector.', fund: 'Kickstarter' },
  { n: '05', name: 'Survival-pod', stage: 'Research', trl: 3, blurb: 'Towable off-grid expedition micro-shelter.', fund: 'Partnership' },
  { n: '06', name: 'ThermalShield', stage: 'Field', trl: 7, blurb: 'Phase-change-material crop frost protection.', fund: 'Grant' },
];

/* ---- Button ------------------------------------------------------------- */
type Variant = 'default' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'default' | 'lg';

const VARIANTS: Record<Variant, CSSProperties> = {
  default: { background: 'var(--gradient-green)', color: 'var(--accent-fg)', border: '0' },
  secondary: { background: 'var(--bg-panel)', color: 'var(--fg)', border: '0' },
  outline: { background: 'transparent', color: 'var(--fg)', border: '1px solid var(--border)' },
  ghost: { background: 'transparent', color: 'var(--fg)', border: '0' },
};
const SIZES: Record<Size, CSSProperties> = {
  sm: { height: 36, padding: '0 12px', fontSize: 13 },
  default: { height: 40, padding: '0 16px', fontSize: 14 },
  lg: { height: 44, padding: '0 32px', fontSize: 14 },
};

export function Button({
  variant = 'default',
  size = 'default',
  style,
  children,
  ...rest
}: {
  variant?: Variant;
  size?: Size;
  style?: CSSProperties;
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      style={{
        ...VARIANTS[variant],
        ...SIZES[size],
        borderRadius: 'var(--radius-md)',
        fontFamily: 'var(--font-sans)',
        fontWeight: 500,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), opacity var(--dur-base) var(--ease-out)',
        ...style,
      }}
      onMouseEnter={(e) => {
        const t = e.currentTarget;
        if (variant === 'default') t.style.opacity = '0.9';
        if (variant === 'secondary') t.style.opacity = '0.85';
        if (variant === 'outline' || variant === 'ghost') t.style.background = 'var(--bg-subtle)';
        if (variant === 'ghost') t.style.color = 'var(--accent-strong)';
      }}
      onMouseLeave={(e) => {
        const t = e.currentTarget;
        t.style.opacity = '1';
        if (variant === 'outline' || variant === 'ghost') t.style.background = 'transparent';
        if (variant === 'ghost') t.style.color = 'var(--fg)';
      }}
    >
      {children}
    </button>
  );
}

/* ---- Eyebrow ------------------------------------------------------------ */
export function Eyebrow({
  kind = 'pill',
  children,
  style,
}: {
  kind?: 'pill' | 'plain';
  children: ReactNode;
  style?: CSSProperties;
}) {
  const base: CSSProperties = {
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    fontFamily: 'var(--font-sans)',
  };
  if (kind === 'pill') {
    return (
      <span
        style={{
          ...base,
          background: 'var(--bg-panel)',
          color: 'var(--fg)',
          borderRadius: 'var(--radius-pill)',
          padding: '5px 14px',
          width: 'fit-content',
          display: 'inline-block',
          ...style,
        }}
      >
        {children}
      </span>
    );
  }
  return <span style={{ ...base, color: 'var(--fg-muted)', ...style }}>{children}</span>;
}

/* ---- TRL face (9-pip readiness glyph) ----------------------------------- */
const TRL_PIPS: [number, number][] = [
  [0, -24], [-6.93, -12], [6.93, -12], [-13.86, 0], [0, 0], [13.86, 0], [-6.93, 12], [6.93, 12], [0, 24],
];
const TRL_FACES: Record<number, number[]> = {
  1: [5], 2: [4, 6], 3: [4, 5, 6], 4: [2, 3, 7, 8], 5: [2, 3, 5, 7, 8],
  6: [1, 3, 5, 6, 8, 9], 7: [2, 3, 4, 5, 6, 7, 8], 8: [1, 2, 3, 4, 6, 7, 8, 9], 9: [1, 2, 3, 4, 5, 6, 7, 8, 9],
};
export function TrlFace({
  trl,
  size = 30,
  on = BL.green,
  off = 'rgba(211,218,237,0.22)',
  style,
}: {
  trl: number;
  size?: number;
  on?: string;
  off?: string;
  style?: CSSProperties;
}) {
  const lit = TRL_FACES[trl] || [];
  return (
    <svg width={size} height={size * (56 / 36)} viewBox="-18 -28 36 56" style={style} aria-hidden="true">
      {TRL_PIPS.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill={lit.includes(i + 1) ? on : off} />
      ))}
    </svg>
  );
}

/* ---- BranchField (procedural branching wallpaper) -----------------------
 * The studio's signature version-control motif, generated procedurally rather
 * than shipped as a static image — ported verbatim from the design-system
 * bundle (components/BranchField/BranchField.tsx). preserveAspectRatio="none"
 * lets it squeeze to fill any container while non-scaling-stroke keeps the line
 * weight constant. Drop it inside a position:relative element with `fill` and
 * layer content above it.
 */
const VB_W = 1200;
const VB_H = 400;

function buildPaths(strands: number, nodes: number, spread: number, vertical: boolean, invert: boolean): string[] {
  // Run axis = the long dimension; cross axis carries the strand offset + lens spread.
  const runLen = vertical ? VB_H : VB_W;
  const crossMid = vertical ? VB_W / 2 : VB_H / 2;
  const pinch: number[] = [];
  for (let i = 0; i <= nodes; i++) pinch.push((i / nodes) * runLen);
  const pt = (u: number, v: number) => (vertical ? `${v} ${u}` : `${u} ${v}`);
  const out: string[] = [];
  for (let k = 0; k < strands; k++) {
    const t = strands === 1 ? 0 : (k - (strands - 1) / 2) / ((strands - 1) / 2); // -1..1
    const off = t * spread;
    // Default: strands meet at the nodes (incl. both ends) and bow apart between.
    // Inverted: strands start spread at the nodes/ends and converge at the
    // midpoints — the reverse phase.
    const nodeV = invert ? crossMid + off : crossMid;
    const midV = invert ? crossMid : crossMid + off;
    let d = `M ${pt(pinch[0], nodeV)}`;
    for (let s = 0; s < pinch.length - 1; s++) {
      const u0 = pinch[s];
      const u1 = pinch[s + 1];
      const mid = (u0 + u1) / 2;
      const du = (u1 - u0) * 0.36;
      d += ` C ${pt(u0 + du, nodeV)} ${pt(mid - du, midV)} ${pt(mid, midV)}`;
      d += ` C ${pt(mid + du, midV)} ${pt(u1 - du, nodeV)} ${pt(u1, nodeV)}`;
    }
    out.push(d);
  }
  return out;
}

export function BranchField({
  strands = 9,
  nodes = 3,
  thickness = 1.5,
  lockThickness = true,
  color = 'var(--fg)',
  spreadRatio = 0.34,
  orientation = 'horizontal',
  invert = false,
  opacity = 1,
  fill = true,
  style,
  className,
}: {
  strands?: number;
  nodes?: number;
  thickness?: number;
  lockThickness?: boolean;
  color?: string;
  spreadRatio?: number;
  orientation?: 'horizontal' | 'vertical';
  invert?: boolean;
  opacity?: number;
  fill?: boolean;
  style?: CSSProperties;
  className?: string;
}) {
  const vertical = orientation === 'vertical';
  // Spread is a fraction of the cross axis (width when vertical, height when horizontal).
  const crossLen = vertical ? VB_W : VB_H;
  const spread = crossLen * Math.max(0, Math.min(0.5, spreadRatio));
  const paths = buildPaths(
    Math.max(1, Math.round(strands)),
    Math.max(1, Math.round(nodes)),
    spread,
    vertical,
    invert,
  );
  const fillStyle: CSSProperties = fill
    ? { position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }
    : { display: 'block', width: '100%', height: '100%' };
  return (
    <svg
      className={className}
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ ...fillStyle, ...style }}
    >
      <g
        fill="none"
        stroke={color}
        strokeWidth={thickness}
        strokeLinecap="round"
        opacity={opacity}
        vectorEffect={lockThickness ? 'non-scaling-stroke' : undefined}
      >
        {paths.map((d, i) => (
          <path key={i} d={d} vectorEffect={lockThickness ? 'non-scaling-stroke' : undefined} />
        ))}
      </g>
    </svg>
  );
}
