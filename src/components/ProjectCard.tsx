import type { ProjectSummary } from "@/data/projects";

type ProjectCardProps = {
  project: ProjectSummary;
  index: number;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => (
  <a
    href={`/project/${project.id}`}
    className={`space-card block rounded-3xl p-6 hover:scale-[1.02] transition-all animate-slide-up stagger-${Math.min(index + 1, 3)}`}
  >
    <div className="space-y-3">
      <p className="text-sm text-cyan-200/80">
        {project.category} • {project.year}
      </p>
      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
      <p className="text-slate-300">View project →</p>
    </div>
  </a>
);

export default ProjectCard;
