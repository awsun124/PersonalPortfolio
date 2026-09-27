import Navbar from "@/components/Navbar";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import Hero from "@/components/home/Hero";
import ProjectsSection from "@/components/home/ProjectsSection";

const HomePage = () => (
  <div className="space-background min-h-screen">
    <Navbar />
    <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="border-b border-accent/25 pb-5 mb-2">
        <a href="#home" className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
          <img src="/favicon.svg" alt="" width={32} height={32} className="h-8 w-8 shrink-0" />
          <span className="font-semibold text-foreground">Andy Sun</span>
          <span aria-hidden="true" className="text-accent/60">/</span>
          <span>Portfolio</span>
        </a>
      </div>
      <div className="animate-fade-in space-y-6">
        <Hero />
        <AboutSection />
      </div>
      <ProjectsSection />
      <ContactSection />
    </main>
  </div>
);

export default HomePage;
