import FeatureList from "@/components/projects/FeatureList";
import ProjectPage from "@/components/projects/ProjectPage";
import { Bot, Cloud, Code2 } from "lucide-react";

const contributions = [
  {
    title: "AI-Powered Chatbot",
    description:
      "Developed features for an AI-powered chatbot prototype, contributing across React/TypeScript frontend development and backend API integration.",
    icon: Bot,
  },
  {
    title: "AI Systems",
    description:
      "Worked with intent classification, knowledge retrieval, and source citation functionality to help route requests and provide relevant, grounded responses.",
    icon: Cloud,
  },
  {
    title: "Observability & Development",
    description:
      "Worked with application logging and metrics to support debugging and evaluation while developing and testing features within an existing codebase.",
    icon: Code2,
  },
];

const AspidaProject = () => {
  return (
    <ProjectPage title="Intelligent Information Assistant" year="2026">
      <p className="text-lg text-muted-foreground leading-relaxed mb-16">
        During my summer 2026 internship at Aspida, I worked as a Software Engineering Intern on an AI-powered chatbot project, contributing across the application stack and gaining hands-on experience building AI-enabled software in a production engineering environment.
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

export default AspidaProject;
