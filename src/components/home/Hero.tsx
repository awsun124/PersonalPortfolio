import profileImg from "@/assets/profile-cutout.png";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import ComputerConstellation from "@/components/home/ComputerConstellation";

const Hero = () => (
  <section id="home" className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] items-center gap-8 lg:gap-4 min-h-[75svh] py-6 lg:translate-x-6">
    <div className="relative z-10 py-6">
      <img
        src={profileImg}
        alt="Andy Sun"
        width={612}
        height={408}
        fetchPriority="high"
        className="w-48 h-48 sm:w-56 sm:h-56 object-cover mb-8"
      />
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">Duke University · CS & Statistics</p>
      <h1 className="text-5xl sm:text-6xl xl:text-7xl leading-[1.08] mb-6">
        Hi, I'm<br /> <span className="text-accent">Andy.</span>
      </h1>
      <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md">
        I study Computer Science and Statistics at Duke. Unfamiliarity motivates me to explore. Building and innovating lets me turn that curiosity into something real through code, AI, and machine learning.
      </p>
      <div className="flex flex-wrap items-center gap-5 mt-8">
        <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:bg-primary/90 transition-colors">
          View Projects <ArrowDown className="w-4 h-4" />
        </a>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-5 py-3 text-sm font-medium hover:bg-border transition-colors">
          Let's Chat <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
    <ComputerConstellation />
  </section>
);

export default Hero;
