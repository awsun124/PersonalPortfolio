import FeatureList from "@/components/projects/FeatureList";
import ProjectPage from "@/components/projects/ProjectPage";
import { BarChart3, Database, Workflow } from "lucide-react";

const contributions = [
  {
    title: "Data Integration",
    description:
      "Designed and built components of a centralized Airtable data system connecting company, people, podcast, event, and content records, helping consolidate hundreds of previously distributed records into a unified structure.",
    icon: Database,
  },
  {
    title: "Automation & Integration",
    description:
      "Built Airtable automations and custom workflows to synchronize podcast and event data, process related guest and company information, and reduce repetitive manual data entry across interconnected tables.",
    icon: Workflow,
  },
  {
    title: "Content Analytics",
    description:
      "Used Python, Pandas, and Matplotlib to analyze 900+ podcast episodes and investigate audience engagement, episode performance, topic trends, guest impact, episode length, and viewing behavior.",
    icon: BarChart3,
  },
];

const SuncastProject = () => {
  return (
    <ProjectPage title="Automated Data Integration System" year="2026">
      <p className="text-lg text-muted-foreground leading-relaxed mb-16">
        Through Duke Impact Investing Club, I worked with a team on a data systems and analytics project for Suncast Media. The project focused on organizing interconnected content data, improving repeatable workflows, and exploring podcast performance.
      </p>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
          Contributions
        </h2>
        <FeatureList features={contributions} />
      </section>
    </ProjectPage>
  );
};

export default SuncastProject;
