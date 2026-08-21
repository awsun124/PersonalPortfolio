import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const ProjectsSection = () => (
  <section id="projects" className="scroll-mt-32 py-12">
    <div className="flex items-center justify-between mb-12 animate-slide-up">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
        Projects
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  </section>
);

export default ProjectsSection;
