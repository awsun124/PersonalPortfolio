import Navbar from "@/components/Navbar";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import Hero from "@/components/home/Hero";
import ProjectsSection from "@/components/home/ProjectsSection";

const HomePage = () => (
  <div className="space-background min-h-screen animate-fade-in">
    <Navbar />
    <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="my-12 animate-fade-in space-y-6">
        <Hero />
        <AboutSection />
      </div>
      <ProjectsSection />
      <ContactSection />
    </main>
  </div>
);

export default HomePage;
