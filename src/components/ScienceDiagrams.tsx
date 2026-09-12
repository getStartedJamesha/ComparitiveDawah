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

function HeavensEarthJoined() {
  return (
    <svg viewBox="0 0 300 100" className="w-full">
      <g transform="translate(55, 50)">
        <circle cx="-10" cy="0" r="26" className={accent} fill="currentColor" opacity={0.6} />
        <circle cx="14" cy="0" r="22" className={dim} fill="currentColor" opacity={0.6} />
      </g>
      <Arrow x1={110} y1={50} x2={160} y2={50} />
      <circle cx="205" cy="50" r="22" className={accent} fill="currentColor" />
      <circle cx="270" cy="50" r="18" className={dim} fill="currentColor" />
    </svg>
  );
}

function SkyWithoutPillars() {
  return (
    <svg viewBox="0 0 300 100" className="w-full">
      <rect x="20" y="10" width="260" height="14" rx="4" className={accent} fill="currentColor" />
      <line x1="10" y1="85" x2="290" y2="85" className={dim} stroke="currentColor" strokeWidth={2} />
      <g className="text-slate-400 dark:text-slate-500" stroke="currentColor" strokeWidth={1.5} strokeDasharray="3 4">
        <line x1="80" y1="24" x2="80" y2="85" />
        <line x1="150" y1="24" x2="150" y2="85" />
        <line x1="220" y1="24" x2="220" y2="85" />
      </g>
    </svg>
  );
}

function AtmosphereShield() {
  return (
    <svg viewBox="0 0 300 100" className="w-full">
      <circle cx="150" cy="50" r="40" className={dim} stroke="currentColor" strokeWidth={2} strokeDasharray="4 4" fill="none" />
      <circle cx="150" cy="50" r="22" className={accent} fill="currentColor" />
      <g className="text-amber-500" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
        <line x1="40" y1="20" x2="98" y2="42" />
        <line x1="255" y1="25" x2="205" y2="45" />
        <line x1="250" y1="80" x2="200" y2="60" />
      </g>
    </svg>
  );
}

function SeaDarknessLayers() {
  return (
    <svg viewBox="0 0 300 100" className="w-full">
      <circle cx="270" cy="15" r="8" className="text-amber-500" fill="currentColor" />
      <rect x="20" y="15" width="260" height="70" rx="4" className={accent} fill="currentColor" opacity={0.15} />
      <rect x="20" y="40" width="260" height="45" rx="0" className={accent} fill="currentColor" opacity={0.35} />
      <rect x="20" y="60" width="260" height="25" rx="0" className={accent} fill="currentColor" opacity={0.6} />
      <g className="text-slate-500 dark:text-slate-300" stroke="currentColor" strokeWidth={1.5} fill="none">
        <path d="M 20 40 Q 60 34 100 40 T 180 40 T 260 40" />
        <path d="M 20 60 Q 60 54 100 60 T 180 60 T 260 60" />
      </g>
    </svg>
  );
}

function Fingerprint() {
  return (
    <svg viewBox="0 0 300 100" className="w-full">
      <g transform="translate(150, 50)" className={accent} stroke="currentColor" strokeWidth={2.5} fill="none" strokeLinecap="round">
        <path d="M -35 10 Q -35 -25 0 -25 Q 35 -25 35 10 Q 35 30 15 30" />
        <path d="M -25 12 Q -25 -14 0 -14 Q 25 -14 25 10 Q 25 24 10 24" />
        <path d="M -14 12 Q -14 -4 0 -4 Q 14 -4 14 10" />
      </g>
    </svg>
  );
}

function DayNightWrapping() {
  return (
    <svg viewBox="0 0 300 100" className="w-full">
      <g transform="translate(150, 50)">
        <circle r="38" className="text-slate-700 dark:text-slate-300" fill="currentColor" />
        <path d="M 0 -38 Q 30 -20 0 0 Q -30 20 0 38 A 38 38 0 0 0 0 -38 Z" className={accent} fill="currentColor" />
      </g>
    </svg>
  );
}

function LowestPoint() {
  return (
    <svg viewBox="0 0 300 100" className="w-full">
      <line x1="10" y1="40" x2="290" y2="40" className={dim} stroke="currentColor" strokeWidth={1.5} strokeDasharray="3 3" />
      <path
        d="M 10 40 L 100 40 Q 150 40 170 75 Q 190 40 240 40 L 290 40"
        className={accent}
        stroke="currentColor"
        strokeWidth={2.5}
        fill="none"
      />
      <circle cx="170" cy="75" r="4" className="text-amber-500" fill="currentColor" />
    </svg>
  );
}

function FluidOrigin() {
  return (
    <svg viewBox="0 0 300 100" className="w-full">
      <path
        d="M 60 20 C 60 20 30 55 30 72 C 30 87 45 95 60 95 C 75 95 90 87 90 72 C 90 55 60 20 60 20 Z"
        className={accent}
        fill="currentColor"
      />
      <Arrow x1={115} y1={55} x2={175} y2={55} />
      <circle cx="220" cy="55" r="20" className={dim} stroke="currentColor" strokeWidth={2.5} fill="none" />
      <circle cx="220" cy="55" r="7" className={accent} fill="currentColor" />
    </svg>
  );
}

function ThreeDarknesses() {
  return (
    <svg viewBox="0 0 300 100" className="w-full">
      <g transform="translate(150, 50)">
        <circle r="46" className={accent} fill="currentColor" opacity={0.2} />
        <circle r="32" className={accent} fill="currentColor" opacity={0.45} />
        <circle r="18" className={accent} fill="currentColor" opacity={0.75} />
        <circle r="5" className="text-white dark:text-slate-900" fill="currentColor" />
      </g>
    </svg>
  );
}

function MilkOrigin() {
  return (
    <svg viewBox="0 0 300 100" className="w-full">
      <g transform="translate(65, 55)" className={dim} stroke="currentColor" strokeWidth={2.5} fill="none" strokeLinecap="round">
        <ellipse cx="0" cy="0" rx="34" ry="18" />
        <circle cx="-38" cy="-8" r="10" fill="none" />
        <line x1="-18" y1="16" x2="-18" y2="34" />
        <line x1="0" y1="18" x2="0" y2="36" />
        <line x1="18" y1="16" x2="18" y2="34" />
      </g>
      <Arrow x1={135} y1={55} x2={185} y2={55} />
      <path d="M 205 30 L 245 30 L 240 85 L 210 85 Z" className={dim} stroke="currentColor" strokeWidth={2} fill="none" />
      <path d="M 208 55 L 242 55 L 240 85 L 210 85 Z" className={accent} fill="currentColor" opacity={0.8} />
    </svg>
  );
}

function BeeBehavior() {
  const hex = (cx: number, cy: number, r: number) => {
    const pts = Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i - Math.PI / 6;
      return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
    });
    return pts.join(" ");
  };
  return (
    <svg viewBox="0 0 300 100" className="w-full">
      <g className={dim} stroke="currentColor" strokeWidth={1.5} fill="none">
        <polygon points={hex(90, 50, 24)} />
        <polygon points={hex(134, 26, 24)} />
        <polygon points={hex(134, 74, 24)} />
        <polygon points={hex(178, 50, 24)} />
      </g>
      <g transform="translate(220, 50) rotate(-10)">
        <ellipse cx="16" cy="-10" rx="12" ry="7" className="text-slate-300 dark:text-slate-600" fill="currentColor" opacity={0.7} />
        <ellipse cx="16" cy="10" rx="12" ry="7" className="text-slate-300 dark:text-slate-600" fill="currentColor" opacity={0.7} />
        <ellipse cx="0" cy="0" rx="20" ry="11" className="text-amber-500" fill="currentColor" />
        <line x1="-8" y1="-10" x2="-8" y2="10" className="text-slate-900 dark:text-slate-950" stroke="currentColor" strokeWidth={2.5} />
        <line x1="2" y1="-10" x2="2" y2="10" className="text-slate-900 dark:text-slate-950" stroke="currentColor" strokeWidth={2.5} />
      </g>
    </svg>
  );
}

function PainReceptors() {
  return (
    <svg viewBox="0 0 300 100" className="w-full">
      <rect x="20" y="15" width="260" height="70" rx="8" className={muted} fill="currentColor" opacity={0.3} />
      <rect x="20" y="15" width="260" height="24" rx="8" className={accent} fill="currentColor" opacity={0.6} />
      <rect x="20" y="39" width="260" height="24" className={accent} fill="currentColor" opacity={0.35} />
      {[70, 130, 190, 250].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy={27} r={4} className="text-amber-500" fill="currentColor" />
          <line x1={x} y1={20} x2={x} y2={5} className="text-amber-500" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}

function TimeRelativity() {
  const clock = (cx: number, cy: number, r: number, hourAngle: number) => (
    <g>
      <circle cx={cx} cy={cy} r={r} className={dim} stroke="currentColor" strokeWidth={2} fill="none" />
      <line
        x1={cx}
        y1={cy}
        x2={cx + r * 0.5 * Math.cos(hourAngle)}
        y2={cy + r * 0.5 * Math.sin(hourAngle)}
        className={accent}
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <line
        x1={cx}
        y1={cy}
        x2={cx + r * 0.75 * Math.cos(hourAngle + 2)}
        y2={cy + r * 0.75 * Math.sin(hourAngle + 2)}
        className={accent}
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </g>
  );
  return (
    <svg viewBox="0 0 300 100" className="w-full">
      <g transform="translate(55, 50)">{clock(0, 0, 34, -1.2)}</g>
      <Arrow x1={105} y1={50} x2={150} y2={50} />
      <g transform="translate(230, 50)">
        {Array.from({ length: 5 }, (_, i) => (
          <g key={i} transform={`translate(${(i - 2) * 16}, 0)`}>
            {clock(0, 0, 12, -1.2)}
          </g>
        ))}
      </g>
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
  "heavens-earth-joined": HeavensEarthJoined,
  "sky-without-pillars": SkyWithoutPillars,
  "atmosphere-shield": AtmosphereShield,
  "sea-darkness-layers": SeaDarknessLayers,
  fingerprints: Fingerprint,
  "day-night-wrapping": DayNightWrapping,
  "lowest-point-earth": LowestPoint,
  "nutfah-fluid-origin": FluidOrigin,
  "three-darknesses": ThreeDarknesses,
  "milk-origin": MilkOrigin,
  "bee-behavior": BeeBehavior,
  "pain-receptors-skin": PainReceptors,
  "time-relativity": TimeRelativity,
};

const diagramCaptions: Record<string, string> = {
  embryology: "sperm-drop → clinging clot → lump of flesh → bone, then muscle",
  "cosmic-expansion": "the same set of points, farther apart over time",
  "mountains-stability": "a mountain's visible peak vs. its deeper stabilizing root",
  "water-cycle": "evaporation → clouds → rainfall → rivers back to the sea",
  "sea-barrier": "two bodies of water meeting without fully mixing",
  "iron-origin": "iron formed in a supernova, later arriving on Earth",
  "celestial-orbits": "bodies following distinct paths around a center",
  "heavens-earth-joined": "one joined mass, then separated",
  "sky-without-pillars": "the sky held up with no visible supporting structure",
  "atmosphere-shield": "a surrounding layer deflecting incoming debris",
  "sea-darkness-layers": "light fading through successive layers of depth",
  fingerprints: "a distinct, individual pattern",
  "day-night-wrapping": "day and night curving continuously around a globe",
  "lowest-point-earth": "a dip below the surrounding elevation",
  "nutfah-fluid-origin": "a small quantity of fluid, developing into a cell",
  "three-darknesses": "three nested layers of darkness around a center",
  "milk-origin": "from a grazing animal to a pure, separate product",
  "bee-behavior": "structured cells built in a repeating hexagonal pattern",
  "pain-receptors-skin": "sensation points concentrated near the surface",
  "time-relativity": "one unit of time on one scale, many on another",
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
