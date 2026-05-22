import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

const projects = [
  {
    id: "penalty-kick-prediction",
    title: "Predicting Penalty Kick Direction",
    category: "Machine Learning",
    date: "2025",
  },
  {
    id: "binbot-recycling",
    title: "BinBot Recycling Sorter",
    category: "Computer Vision",
    date: "2024",
  },
  {
    id: "carmates-app",
    title: "Carmates App",
    category: "App Development",
    date: "2023",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeroSection />

        <section id="projects" className="py-12">
          <div className="flex items-center justify-between mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                key={project.id}
                href={`/project/${project.id}`}
                className={`block rounded-3xl border border-border bg-card p-6 hover:scale-[1.02] hover:shadow-lg transition-all animate-slide-up stagger-${Math.min(
                  index + 1,
                  3
                )}`}
              >
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    {project.category} • {project.date}
                  </p>

                  <h3 className="text-2xl font-bold">{project.title}</h3>

                  <p className="text-muted-foreground">View project →</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="my-20 rounded-[2.5rem] bg-card p-12 md:p-16 text-center animate-scale-in"
        >
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Contact Me
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Feel free to reach out!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.linkedin.com/in/andy-sun-7b75a9266"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all"
              >
                LinkedIn
              </a>

              <a
                href="mailto:awsun1230@gmail.com"
                className="px-10 py-4 rounded-full border border-border bg-background font-medium hover:bg-muted hover:scale-105 transition-all"
              >
                Email: awsun1230@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;