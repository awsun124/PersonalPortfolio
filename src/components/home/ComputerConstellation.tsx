import { useId, useState, type CSSProperties } from "react";

type Constellation = {
  points: string;
  detail?: boolean;
  accent?: boolean;
  monitor?: "projects" | "journey";
};

// Each vertex is a star; the connecting segments form the workstation.
const workspace: Constellation[] = [
  // Complete screen outlines are clipped by the figure silhouette below.
  { points: "263,276 104,276 104,84 263,84 263,276", monitor: "projects" },
  { points: "250,262 117,262 117,98 250,98 250,262", detail: true, monitor: "projects" },
  { points: "345,139 549,139 549,280 345,280 345,139", monitor: "journey" },
  { points: "358,152 535,152 535,265 358,265 358,152", detail: true, monitor: "journey" },
  { points: "167,276 165,311 141,321 216,321 195,311 195,276" },
  { points: "464,280 464,311 442,322 503,322 484,311 484,280" },
  // A few code strokes and a data chart, rather than tiny UI details.
  { points: "130,117 237,117", detail: true, monitor: "projects" },
  { points: "134,140 163,140 174,149 223,149", detail: true, monitor: "projects" },
  { points: "149,169 205,169", detail: true, monitor: "projects" },
  { points: "149,188 230,188", detail: true, monitor: "projects" },
  { points: "134,207 181,207 193,219 222,219", detail: true, monitor: "projects" },
  { points: "395,226 421,203 447,211 477,181 513,169", accent: true, monitor: "journey" },
  { points: "395,172 395,245 516,245", detail: true, monitor: "journey" },
  // Desk edges stay behind the arms and chair.
  { points: "540,315 109,315 60,367 320,390 585,367 540,315" },
  { points: "60,367 60,382 320,405 585,382 585,367" },
  { points: "320,390 320,405" },
  { points: "109,315 109,327" },
  { points: "82,384 82,531 96,531 100,386" },
  { points: "560,384 560,531 547,531 542,386" },
  // Keyboard and mouse visible either side of the seated developer.
  { points: "126,334 207,334 224,355 113,355 126,334" },
  { points: "123,345 215,345", detail: true },
  { points: "148,334 144,355", detail: true },
  { points: "176,334 178,355", detail: true },
  { points: "466,340 478,333 491,339 499,353 485,359 470,354 466,340" },
];

const person: Constellation[] = [
  // Rounded straight hair, tapered at the nape, seen from behind.
  { points: "275,255 262,238 255,216 259,192 276,175 303,168 328,173 349,187 358,211 351,237 337,255" },
  { points: "262,217 273,193 286,181 304,178 326,184 343,200 351,218", detail: true },
  { points: "269,231 283,250 306,260 330,250 345,230", detail: true },
  { points: "282,247 284,268 305,277 330,268 331,247" },
  // Shirt and relaxed arms reaching toward the keyboard and mouse.
  { points: "284,268 251,279 230,303 212,335 189,342 182,352 199,366 227,357 251,326" },
  { points: "330,268 365,280 388,303 411,336 465,342 470,352 455,361 402,356 371,328" },
  { points: "251,279 270,291 306,298 345,289 365,280", detail: true },
  { points: "251,326 257,349 253,380" },
  { points: "371,328 366,350 371,380" },
];

const chair: Constellation[] = [
  // A low, curved chair back represented by a handful of star nodes.
  { points: "235,361 271,369 309,372 352,369 390,361 382,403 374,451 346,463 308,469 269,464 245,451 235,361" },
  { points: "251,384 277,391 310,394 346,390 373,383", detail: true },
  { points: "245,410 270,424 310,431 351,422 380,407", detail: true },
  { points: "242,398 218,393 212,371 193,371" },
  { points: "384,398 410,393 416,372 438,372" },
];

const chairBase: Constellation[] = [
  // Legs, chair stem, and wheel spokes.
  { points: "251,445 248,487 231,508 251,514 271,496 278,452" },
  { points: "367,445 374,485 397,503 380,512 352,495 345,450" },
  { points: "301,460 301,514 265,534 231,543" },
  { points: "316,460 316,514 353,534 389,543" },
  { points: "308,514 308,553" },
  { points: "301,514 275,504 258,505", detail: true },
  { points: "316,514 343,504 360,505", detail: true },
];

// Masks hide rear lines without painting any color over the page background.
const figureOutline = "275,255 262,238 255,216 259,192 276,175 303,168 328,173 349,187 358,211 351,237 337,255 331,247 330,268 365,280 388,303 411,336 465,342 470,352 455,361 402,356 371,328 366,350 371,390 253,390 253,368 257,349 251,326 227,357 199,366 182,352 189,342 212,335 230,303 251,279 284,268 282,247";
const chairOutline = "235,361 271,369 309,372 352,369 390,361 382,403 374,451 346,463 308,469 269,464 245,451";

const ComputerConstellation = () => {
  const maskId = useId();
  const [activeTarget, setActiveTarget] = useState<string | null>(null);
  const layers = [
    { shapes: workspace, mask: `${maskId}-workspace` },
    { shapes: person, mask: `${maskId}-chair` },
    { shapes: chairBase, mask: `${maskId}-chair` },
    { shapes: chair, mask: undefined },
  ];

  return (
    <div className="computer-constellation w-full max-w-2xl mx-auto lg:-translate-x-8 lg:scale-[1.15]" data-active-target={activeTarget}>
      <svg viewBox="40 65 560 500" fill="none" className="w-full h-auto">
        <circle data-desk-cable cx="170" cy="385" r="1" opacity="0" />
        <rect data-desk-leg x="82" y="384" width="18" height="147" opacity="0" />
        <defs>
          <mask id={`${maskId}-workspace`} maskUnits="userSpaceOnUse" x="0" y="0" width="640" height="600">
            <rect width="640" height="600" fill="white" />
            <polygon points={figureOutline} fill="black" />
            <polygon points={chairOutline} fill="black" />
          </mask>
          <mask id={`${maskId}-chair`} maskUnits="userSpaceOnUse" x="0" y="0" width="640" height="600">
            <rect width="640" height="600" fill="white" />
            <polygon points={chairOutline} fill="black" />
          </mask>
        </defs>
        {layers.map(({ shapes, mask }, layerIndex) => {
          const stars = Array.from(new Map(shapes.flatMap(({ points, detail, monitor, accent }) =>
            points.split(" ").map((point) => [point, { point, detail, monitor, accent }] as const),
          )).values());

          return (
            <g key={layerIndex} mask={mask ? `url(#${mask})` : undefined}>
              {shapes.map(({ points, detail, accent, monitor }, index) => (
                <polyline
                  key={points}
                  points={points}
                  stroke={accent ? "rgb(var(--accent))" : "currentColor"}
                  strokeWidth={detail ? 0.7 : 1.15}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength="1"
                  data-monitor={monitor ?? (layerIndex === 1 ? "about" : undefined)}
                  data-graph={accent || undefined}
                  className="constellation-line monitor-line"
                  style={{ "--delay": `${0.35 + (index % 11) * 0.1}s` } as CSSProperties}
                />
              ))}
              {stars.map(({ point, detail, monitor, accent }, index) => {
                const [x, y] = point.split(",").map(Number);
                return (
                  <g key={point} data-monitor={monitor ?? (layerIndex === 1 ? "about" : undefined)} data-graph={accent || undefined} className="constellation-star monitor-node" style={{ "--delay": `${(index % 13) * 0.06}s` } as CSSProperties}>
                    {!detail && <circle cx={x} cy={y} r="4.5" fill="currentColor" opacity="0.06" />}
                    <circle cx={x} cy={y} r={detail ? 1 : 1.8} fill="currentColor" opacity={detail ? 0.55 : 0.9} />
                  </g>
                );
              })}
            </g>
          );
        })}
        {[
          { id: "projects", label: "view projects ↗", x: 104, y: 84, width: 159, height: 192, labelX: 180, labelY: 248 },
          { id: "journey", label: "my journey ↗", x: 345, y: 139, width: 204, height: 141, labelX: 454, labelY: 256 },
        ].map((monitor) => (
          <a
            key={monitor.id}
            href={`#${monitor.id}`}
            aria-label={monitor.id === "projects" ? "View projects" : "My journey"}
            className="monitor-link"
            onMouseEnter={() => setActiveTarget(monitor.id)}
            onMouseLeave={() => setActiveTarget(null)}
            onFocus={() => setActiveTarget(monitor.id)}
            onBlur={() => setActiveTarget(null)}
          >
            <rect x={monitor.x} y={monitor.y} width={monitor.width} height={monitor.height} fill="transparent" />
            <text x={monitor.labelX} y={monitor.labelY} textAnchor="middle" className="monitor-label">{monitor.label}</text>
          </a>
        ))}
        <a
          href="#about"
          aria-label="About me"
          className="monitor-link"
          onMouseEnter={() => setActiveTarget("about")}
          onMouseLeave={() => setActiveTarget(null)}
          onFocus={() => setActiveTarget("about")}
          onBlur={() => setActiveTarget(null)}
        >
          <polygon points={figureOutline} fill="transparent" />
          <text x="306" y="321" textAnchor="middle" className="monitor-label">about me ↗</text>
        </a>
        <g fill="rgb(var(--accent))" pointerEvents="none" aria-hidden="true">
          {[
            { x: 104, y: 84, delay: "3s", points: "104,118 104,84 143,84" },
            { x: 549, y: 139, delay: "6s", points: "508,139 549,139 549,173" },
            { x: 303, y: 168, delay: "9s", points: "276,175 303,168 328,173 349,187" },
          ].map(({ x, y, delay, points }) => (
            <g key={x} className="constellation-idle-cue" style={{ "--delay": delay } as CSSProperties}>
              <polyline points={points} fill="none" stroke="rgb(var(--accent))" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
              <circle cx={x} cy={y} r="7" opacity="0.15" />
              <circle cx={x} cy={y} r="2.5" opacity="0.8" />
              <circle cx={x} cy={y} r="5" fill="none" stroke="rgb(var(--accent))" strokeWidth="0.8" className="constellation-node-ripple" />
            </g>
          ))}
        </g>
        <path d="M104 78v12m-6-6h12M549 133v12m-6-6h12M308 548v10m-5-5h10" stroke="currentColor" strokeWidth="0.8" className="constellation-glimmer" />
      </svg>
    </div>
  );
};

export default ComputerConstellation;
