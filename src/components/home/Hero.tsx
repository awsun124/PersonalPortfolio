import profileImg from "@/assets/profile.png";
import { ChevronDown } from "lucide-react";

const Hero = () => (
  <section className="hero-space-panel relative max-w-6xl mx-auto min-h-[calc(87svh-9rem)] rounded-[2.5rem] overflow-hidden flex items-center text-white">
    <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 p-8 pb-24 md:p-12 md:pb-24 lg:p-16 lg:pb-24">
      <div className="order-2 max-w-2xl space-y-4 md:space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight animate-slide-down">
          Hi, I'm Andy
        </h1>
        <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-xl animate-slide-up stagger-1">
          I am a student at <strong className="font-bold bg-gradient-to-r from-blue-700 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">Duke University</strong>, studying Computer Science and Statistics, with experience building <strong className="font-bold bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 bg-clip-text text-transparent">full-stack software</strong> and <strong className="font-bold bg-gradient-to-r from-fuchsia-600 to-violet-600 dark:from-pink-400 dark:to-violet-400 bg-clip-text text-transparent">AI/ML applications</strong>.
          <span className="block mt-3">Thank you for visiting my page!</span>
        </p>
      </div>

      <div className="order-1 w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden flex-shrink-0 animate-scale-in ring-2 ring-cyan-300/50 shadow-[0_0_55px_rgba(56,189,248,0.28)]">
        <img
          src={profileImg}
          alt="Andy Sun"
          className="w-full h-full object-cover object-[55%_40%]"
        />
      </div>
    </div>

    <a
      href="#about"
      className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex flex-col items-center gap-1 text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors group"
      aria-label="Scroll to About section"
    >
      <span>Learn More</span>
      <ChevronDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
    </a>
  </section>
);

export default Hero;
