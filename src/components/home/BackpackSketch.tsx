import type { CSSProperties } from "react";

const outlines = [
  // Backpack and shoulder strap, leaning against the books.
  "65,151 53,133 43,74 46,51 60,30 82,20 108,17 130,25 147,43 155,64 166,137 155,128 69,137 65,151",
  "78,21 79,10 96,5 107,7 112,20",
  "51,64 58,44 78,31 102,27 127,35 141,51",
  "48,88 41,120 25,133 23,144 30,153 42,154 57,147",
  "84,139 77,87 131,80 144,129",
  "82,96 132,89 137,119 90,126",
  // Two books, drawn in perspective.
  "69,137 155,128 190,143 99,154 69,137 66,147 94,165 190,154 190,143",
  "66,150 64,159 92,176 189,164 190,154",
  "99,154 94,165 92,176",
  // Angled ear cups hang from a broad headband.
  "206.1,84.7 205.4,76.0 212.3,53.8 226.2,36.5 239.8,28.5 252.9,25.0 267.5,27.4 280.7,36.1 290.8,52.4 295.6,70.5 295.3,77.4",
  "214.8,84.3 215.8,77.0 223.1,57.3 235.9,44.4 242.9,41.7 254.7,38.2 271.0,36.8 268.9,41.7 280.4,54.1 286.3,70.1 286.6,76.7",
  "198.5,92.0 206.8,92.3 221.0,112.8 222.8,129.8 215.1,139.2 203.7,129.1 195.0,111.4 198.5,92.0 206.1,84.7 215.1,84.7 227.3,94.4 235.3,109.7 236.3,127.4 231.4,136.0 215.1,139.2",
  "215.1,84.7 222.1,82.9 232.8,89.9 241.8,107.2 242.2,124.9 236.3,130.8 231.4,136.0",
  "273.1,85.4 280.4,76.7 290.8,76.7 294.6,88.5 295.6,102.7 289.7,117.6 281.1,126.7 274.1,125.3 268.6,122.9 267.5,101.7 273.1,85.4",
  "295.3,77.4 304.0,82.9 305.0,102.0 298.4,118.0 289.7,125.6 281.1,126.7 274.1,125.3 281.1,118.3 287.6,101.7 287.0,88.2 284.5,82.3",
  // Computer tower with two front fans.
  "315,25 361,20 418,30 365,36 315,25 315,149 363,162 418,154 418,30",
  "365,36 363,162",
  "374,44 410,39 410,147 372,153 374,44",
  "392,50 403,56 407,68 403,81 393,88 382,84 376,73 380,59 392,50",
  "392,99 402,104 406,116 402,129 392,137 381,132 376,121 380,107 392,99",
];

const details = [
  "56,69 69,130",
  "89,103 124,99",
  "134,88 133,97",
  "327,62 352,67",
  "327,82 352,87",
  "327,102 352,107",
  "392,69 392,50",
  "392,69 403,81",
  "392,69 382,84",
  "392,118 392,99",
  "392,118 402,129",
  "392,118 381,132",
];

const towerTransform = "translate(365 162) scale(0.96) translate(-365 -162)";
const stand = [
  "252.6,160.3 252.6,43.7 257.5,43.7 257.5,160.3 252.6,160.3",
  "242.9,41.7 254.7,38.2 271.0,36.8 268.9,41.7 257.5,43.7 252.6,43.7 242.9,41.7",
  "216.2,166.9 224.1,159.3 252.6,153.0 257.5,153.0 282.4,158.9 291.1,166.9 251.9,176.3 216.2,166.9",
  "216.2,166.9 252.6,155.1",
  "257.5,155.1 291.1,166.9",
];

const cable = "415.88,139.92 436,143 450,154 473,161 502,162 531,156 551,144 573,122 598,109 623,104 639,105";
// Keep the headphones and tower details aligned with their outlines.
const groups = [
  { lines: outlines.slice(0, 9), detail: false },
  { lines: stand, detail: false },
  { lines: outlines.slice(9, 15), detail: false },
  { lines: outlines.slice(15), detail: false, transform: towerTransform },
  { lines: details.slice(0, 3), detail: true },
  { lines: details.slice(3), detail: true, transform: towerTransform },
  { lines: [cable], detail: true },
  { lines: ["93,48 85,55 95,61", "111,46 119,52 112,60", "106,44 102,64"], detail: true, accent: true },
];

const BackpackSketch = () => (
  <svg
    viewBox="10 0 640 185"
    fill="none"
    aria-hidden="true"
    focusable="false"
    className="computer-constellation block w-full h-auto max-w-xl my-3 shrink-0"
  >
    {groups.map(({ lines, detail, transform, accent }, groupIndex) => {
      const nodes = [...new Set(lines.flatMap((points) => points.split(" ")))];

      return (
        <g key={groupIndex} transform={transform}>
          {lines.map((points, index) => (
            <polyline
              key={points}
              points={points}
              stroke={accent ? "rgb(var(--accent))" : "currentColor"}
              strokeWidth={detail ? 0.7 : 1.15}
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength="1"
              className="constellation-line"
              style={{ "--delay": `${0.35 + (index % 11) * 0.1}s` } as CSSProperties}
            />
          ))}
          {nodes.map((point, index) => {
            const [cx, cy] = point.split(",").map(Number);
            return (
              <g key={point} className="constellation-star" style={{ "--delay": `${(index % 13) * 0.06}s` } as CSSProperties}>
                {!detail && <circle cx={cx} cy={cy} r="4.5" fill="currentColor" opacity="0.06" />}
                <circle cx={cx} cy={cy} r={detail ? 1 : 1.35} fill="currentColor" opacity={detail ? 0.55 : 0.9} />
              </g>
            );
          })}
        </g>
      );
    })}
    <g transform={towerTransform} className="constellation-star" style={{ "--delay": "0.6s" } as CSSProperties} stroke="currentColor" strokeWidth="0.7">
      <circle cx="392" cy="69" r="3" />
      <circle cx="392" cy="118" r="3" />
    </g>
    <circle data-cable-end cx="639" cy="105" r="1" opacity="0" />
  </svg>
);

export default BackpackSketch;
