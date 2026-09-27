import profileImg from "@/assets/profile-cutout.png";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import ComputerConstellation from "@/components/home/ComputerConstellation";

const Hero = () => (
  <section id="home" className="grid lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.9fr)] items-center gap-8 lg:gap-3 pt-2 pb-6 lg:pl-6 xl:pl-10 lg:translate-x-6">
    <div className="relative z-10">
      <img
        src={profileImg}
        alt="Andy Sun"
        width={612}
        height={408}
        fetchPriority="high"
        className="w-52 h-52 sm:w-64 sm:h-64 object-cover mb-4"
      />
      <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground mb-3">Duke University · CS & Statistics</p>
      <h1 className="text-6xl sm:text-7xl xl:text-[5rem] leading-[1.08] mb-4">
        Hi, I'm<br /> <span className="text-accent">Andy.</span>
      </h1>
      <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-xl">
        I study Computer Science and Statistics at Duke. Unfamiliarity motivates me to explore. Building and innovating lets me turn that curiosity into something real through code, AI, and machine learning.
      </p>
      <div className="flex flex-wrap items-center gap-5 mt-5">
        <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-4 text-base sm:text-lg font-medium hover:bg-primary/90 transition-colors">
          View Projects <ArrowDown className="w-5 h-5" />
        </a>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-6 py-4 text-base sm:text-lg font-medium hover:bg-border transition-colors">
          Let's Chat <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
    </div>
    <ComputerConstellation />
  </section>
);

export default Hero;
