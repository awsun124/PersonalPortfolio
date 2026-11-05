import ProjectPage from "@/components/projects/ProjectPage";

const DigitalTwinProject = () => (
  <ProjectPage title="North Carolina Digital Twin" year="2026">
    <div className="flex flex-wrap items-center gap-3 mb-6">
      <p className="text-accent">Research at Duke University</p>
      <span className="rounded-full border border-accent/30 px-3 py-1 text-sm text-accent">
        Ongoing
      </span>
    </div>

    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
      Contributing data pipelines to a digital twin studying populations and
      healthcare access in North Carolina. Initial work focuses on processing
      Census data and validating workflows on Duke’s computing cluster.
    </p>

  </ProjectPage>
);

export default DigitalTwinProject;
