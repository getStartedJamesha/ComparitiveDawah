import type { ReactElement } from "react";

/**
 * Small original schematic diagrams for the Science page — simplified,
 * abstract line art (not literal illustrations), drawn as inline SVG so
 * the site stays self-contained: no external images to license, hotlink,
 * or fetch on a Raspberry Pi deploy. Each pairs with a plain-language
 * caption rather than labels baked into the SVG.
 */

const accent = "text-teal-600 dark:text-teal-400";
const muted = "text-slate-300 dark:text-slate-600";
const dim = "text-slate-400 dark:text-slate-500";

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const headLen = 6;
  const hx1 = x2 - headLen * Math.cos(angle - Math.PI / 6);
  const hy1 = y2 - headLen * Math.sin(angle - Math.PI / 6);
  const hx2 = x2 - headLen * Math.cos(angle + Math.PI / 6);
  const hy2 = y2 - headLen * Math.sin(angle + Math.PI / 6);
  return (
    <g className={dim} stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round">
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      <polyline points={`${hx1},${hy1} ${x2},${y2} ${hx2},${hy2}`} />
    </g>
  );
}

function Embryology() {
  return (
    <svg viewBox="0 0 300 100" className="w-full">
      <circle cx="30" cy="50" r="7" className={accent} fill="currentColor" />
      <Arrow x1={44} y1={50} x2={76} y2={50} />
      <path
        d="M 95 50 Q 88 36 105 34 Q 122 32 122 48 Q 122 64 103 62 Q 90 60 95 50 Z"
        className={accent}
        fill="currentColor"
      />
      <Arrow x1={132} y1={50} x2={162} y2={50} />
      <path
        d="M 175 50 Q 172 30 195 28 Q 218 27 220 48 Q 221 68 196 70 Q 174 68 175 50 Z"
        className={accent}
        fill="currentColor"
      />
      <Arrow x1={232} y1={50} x2={258} y2={50} />
      <g>
        <ellipse cx="280" cy="50" rx="17" ry="22" className={muted} fill="currentColor" />
        <line x1="272" y1="36" x2="272" y2="64" className="text-white dark:text-slate-900" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" />
        <line x1="280" y1="32" x2="280" y2="68" className="text-white dark:text-slate-900" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" />
        <line x1="288" y1="36" x2="288" y2="64" className="text-white dark:text-slate-900" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" />
      </g>
    </svg>
  );
}

function CosmicExpansion() {
  const dots = [
    [40, 30], [70, 55], [30, 70], [60, 20], [50, 60],
  ];
  const dotsLater = [
    [15, 15], [80, 50], [5, 80], [70, 5], [45, 65],
  ];
  return (
    <svg viewBox="0 0 300 100" className="w-full">
      <g transform="translate(10, 10)">
        {dots.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={4} className={accent} fill="currentColor" />
        ))}
      </g>
      <text x="45" y="98" textAnchor="middle" className={`${dim} text-[10px]`} fill="currentColor" fontFamily="inherit">
        earlier
      </text>
      <Arrow x1={110} y1={50} x2={150} y2={50} />
      <g transform="translate(160, 0)">
        {dotsLater.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={4} className={accent} fill="currentColor" />
        ))}
        <g className={dim} stroke="currentColor" strokeWidth={1.5} fill="none" strokeDasharray="3 3">
          <circle cx="45" cy="45" r="48" />
        </g>
      </g>
      <text x="205" y="98" textAnchor="middle" className={`${dim} text-[10px]`} fill="currentColor" fontFamily="inherit">
        later — farther apart
      </text>
    </svg>
  );
}

function MountainStability() {
  return (
    <svg viewBox="0 0 300 100" className="w-full">
      <line x1="10" y1="55" x2="290" y2="55" className={dim} stroke="currentColor" strokeWidth={2} />
      <path d="M 110 55 L 150 12 L 190 55 Z" className={accent} fill="currentColor" />
      <path
        d="M 118 55 L 150 88 L 182 55 Z"
        className={muted}
        fill="currentColor"
        opacity={0.6}
        strokeDasharray="4 3"
        stroke="currentColor"
      />
      <text x="150" y="8" textAnchor="middle" className={`${dim} text-[9px]`} fill="currentColor">
        peak (visible)
      </text>
      <text x="150" y="97" textAnchor="middle" className={`${dim} text-[9px]`} fill="currentColor">
        root (below ground)
      </text>
    </svg>
  );
}

function WaterCycle() {
  return (
    <svg viewBox="0 0 300 100" className="w-full">
      <path d="M 10 85 Q 40 70 80 85 T 150 85 T 220 85 T 290 85" className={accent} stroke="currentColor" strokeWidth={2.5} fill="none" strokeLinecap="round" />
      <circle cx="255" cy="20" r="12" className="text-amber-500" fill="currentColor" />
      <ellipse cx="80" cy="30" rx="30" ry="14" className={muted} fill="currentColor" />
      <ellipse cx="60" cy="24" rx="18" ry="11" className={muted} fill="currentColor" />
      <Arrow x1={40} y1={80} x2={55} y2={45} />
      <g className={dim} stroke="currentColor" strokeWidth={2} strokeLinecap="round">
        <line x1="65" y1="48" x2="60" y2="60" />
        <line x1="80" y1="48" x2="75" y2="60" />
        <line x1="95" y1="48" x2="90" y2="60" />
      </g>
      <path d="M 130 78 Q 150 40 170 78" className={dim} stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" />
    </svg>
  );
}

function SeaBarrier() {
  return (
    <svg viewBox="0 0 300 100" className="w-full">
      <rect x="10" y="20" width="130" height="65" rx="6" className={accent} fill="currentColor" opacity={0.25} />
      <rect x="160" y="20" width="130" height="65" rx="6" className={dim} fill="currentColor" opacity={0.3} />
      <path
        d="M 150 15 Q 140 30 150 45 Q 160 60 150 75 Q 140 88 150 95"
        className="text-slate-500 dark:text-slate-300"
        stroke="currentColor"
        strokeWidth={3}
        fill="none"
        strokeLinecap="round"
      />
      <text x="75" y="55" textAnchor="middle" className={`${accent} text-[10px]`} fill="currentColor">
        sea A
      </text>
      <text x="225" y="55" textAnchor="middle" className={`${dim} text-[10px]`} fill="currentColor">
        sea B
      </text>
    </svg>
  );
}

function IronOrigin() {
  const rays = Array.from({ length: 8 }, (_, i) => (i * Math.PI) / 4);
  return (
    <svg viewBox="0 0 300 100" className="w-full">
      <g transform="translate(70, 32)">
        {rays.map((a, i) => (
          <line
            key={i}
            x1={0}
            y1={0}
            x2={Math.cos(a) * 26}
            y2={Math.sin(a) * 26}
            className="text-amber-500"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
          />
        ))}
        <circle cx="0" cy="0" r="10" className="text-amber-500" fill="currentColor" />
      </g>
      <Arrow x1={100} y1={50} x2={220} y2={78} />
      <circle cx="245" cy="85" r="14" className={accent} fill="currentColor" opacity={0.85} />
      <circle cx="240" cy="80" r="3" className="text-white dark:text-slate-900" fill="currentColor" />
      <text x="70" y="8" textAnchor="middle" className={`${dim} text-[9px]`} fill="currentColor">
        supernova
      </text>
      <text x="245" y="72" textAnchor="middle" className={`${dim} text-[9px]`} fill="currentColor">
        earth
      </text>
    </svg>
  );
}

function CelestialOrbits() {
  return (
    <svg viewBox="0 0 300 100" className="w-full">
      <circle cx="150" cy="50" r="11" className="text-amber-500" fill="currentColor" />
      <ellipse cx="150" cy="50" rx="55" ry="24" className={dim} stroke="currentColor" strokeWidth={1.5} fill="none" strokeDasharray="3 3" />
      <ellipse cx="150" cy="50" rx="95" ry="40" className={dim} stroke="currentColor" strokeWidth={1.5} fill="none" strokeDasharray="3 3" />
      <circle cx="150" cy="26" r="4" className={accent} fill="currentColor" />
      <circle cx="245" cy="50" r="5" className={accent} fill="currentColor" />
      <circle cx="63" cy="65" r="4.5" className={accent} fill="currentColor" />
    </svg>
  );
}

const diagrams: Record<string, () => ReactElement> = {
  embryology: Embryology,
  "cosmic-expansion": CosmicExpansion,
  "mountains-stability": MountainStability,
  "water-cycle": WaterCycle,
  "sea-barrier": SeaBarrier,
  "iron-origin": IronOrigin,
  "celestial-orbits": CelestialOrbits,
};

const diagramCaptions: Record<string, string> = {
  embryology: "sperm-drop → clinging clot → lump of flesh → bone, then muscle",
  "cosmic-expansion": "the same set of points, farther apart over time",
  "mountains-stability": "a mountain's visible peak vs. its deeper stabilizing root",
  "water-cycle": "evaporation → clouds → rainfall → rivers back to the sea",
  "sea-barrier": "two bodies of water meeting without fully mixing",
  "iron-origin": "iron formed in a supernova, later arriving on Earth",
  "celestial-orbits": "bodies following distinct paths around a center",
};

export function ScienceDiagram({ id }: { id: string }) {
  const Diagram = diagrams[id];
  if (!Diagram) return null;
  return (
    <figure className="mt-4 rounded-xl border border-slate-100 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
      <Diagram />
      {diagramCaptions[id] && (
        <figcaption className="mt-2 text-center text-xs text-slate-400 dark:text-slate-500">
          {diagramCaptions[id]}
        </figcaption>
      )}
    </figure>
  );
}
