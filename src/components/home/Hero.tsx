import { useId, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import profileImg from "@/assets/profile-cutout.png";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import ComputerConstellation from "@/components/home/ComputerConstellation";
import BackpackSketch from "@/components/home/BackpackSketch";

const Hero = () => {
  const cableId = useId();
  const [legBounds, setLegBounds] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const [cablePath, setCablePath] = useState("");

  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Measure both SVGs so the cable stays attached as the columns resize.
    const updateCable = () => {
      const start = hero.querySelector("[data-cable-end]")?.getBoundingClientRect();
      const end = hero.querySelector("[data-desk-cable]")?.getBoundingClientRect();
      if (!start || !end) return;
      const bounds = hero.getBoundingClientRect();
      const x1 = start.x + start.width / 2 - bounds.x;
      const y1 = start.y + start.height / 2 - bounds.y;
      const x2 = end.x + end.width / 2 - bounds.x;
      const y2 = end.y + end.height / 2 - bounds.y;
      const leg = hero.querySelector("[data-desk-leg]")?.getBoundingClientRect();
      if (leg) setLegBounds({ x: leg.x - bounds.x, y: leg.y - bounds.y, width: leg.width, height: leg.height });
      const bend = Math.max(20, Math.abs(x2 - x1) / 2);
      setCablePath(`M ${x1} ${y1} C ${x1 + bend} ${y1 + 4}, ${x2 - bend} ${y2 + 90}, ${x2} ${y2}`);
    };
    const observer = new ResizeObserver(updateCable);
    observer.observe(hero);
    hero.querySelectorAll("svg").forEach((svg) => observer.observe(svg));
    window.addEventListener("resize", updateCable);
    updateCable();
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateCable);
    };
  }, []);

  return (
  <section ref={heroRef} id="home" className="relative grid lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.9fr)] items-center gap-8 lg:gap-3 pt-2 pb-6 lg:min-h-[calc(100svh-7rem)] lg:pl-6 xl:pl-10 lg:translate-x-6">
    <svg aria-hidden="true" focusable="false" className="computer-constellation pointer-events-none absolute inset-0 hidden h-full w-full lg:block" fill="none">
      <defs>
        <linearGradient id={`${cableId}-fade`}>
          <stop offset="0%" stopColor="currentColor" />
          <stop offset="80%" stopColor="currentColor" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
        <mask id={`${cableId}-leg`}>
          <rect width="100%" height="100%" fill="white" />
          <rect {...legBounds} fill="black" />
        </mask>
      </defs>
      <path d={cablePath} mask={`url(#${cableId}-leg)`} stroke={`url(#${cableId}-fade)`} strokeWidth="0.8" strokeLinecap="round" pathLength="1" className="constellation-line" style={{ "--delay": "0.45s" } as CSSProperties} />
    </svg>
    <div className="relative z-10 flex flex-col lg:self-stretch lg:pt-8">
      <p className="text-sm xl:text-base uppercase tracking-[0.18em] text-muted-foreground mb-4">Duke University · CS & Statistics</p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        <div className="min-w-0">
          <h1 className="text-6xl sm:text-7xl xl:text-[5.5rem] 2xl:text-8xl leading-[1.08]">
            Hi, I'm<br /> <span className="text-accent">Andy.</span>
          </h1>
        </div>
        <img
          src={profileImg}
          alt="Andy Sun"
          width={612}
          height={408}
          fetchPriority="high"
          className="w-44 h-44 lg:w-36 lg:h-36 xl:w-48 xl:h-48 2xl:w-56 2xl:h-56 shrink-0 rounded-full bg-[#D5C3B5] object-cover"
        />
      </div>
      <p className="text-muted-foreground text-lg sm:text-xl xl:text-2xl leading-relaxed max-w-xl">
        I study Computer Science and Statistics at Duke. Unfamiliarity motivates me to explore. Building and innovating lets me turn that curiosity into something real through code, AI, and machine learning.
      </p>
      <BackpackSketch />
      <div className="flex flex-wrap items-center gap-5 mt-5 lg:mt-auto lg:pt-4">
        <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-4 text-base sm:text-lg font-medium hover:bg-primary/90 transition-colors">
          View Projects <ArrowDown className="w-5 h-5" />
        </a>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-6 py-4 text-base sm:text-lg font-medium hover:bg-border transition-colors">
          Let's Connect <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
    </div>
    <ComputerConstellation />
  </section>
  );
};

export default Hero;
