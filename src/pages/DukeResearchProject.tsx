import ProjectPage from "@/components/projects/ProjectPage";
import { Database, Microscope, Network, Sparkles } from "lucide-react";

const DukeResearchProject = () => (
  <ProjectPage title="Duke Research Lab" year="2026">
    <p className="text-lg text-muted-foreground leading-relaxed mb-16">
      I’m currently working in a Duke research lab focused on applied data work,
      where I help build and refine workflows for analyzing large, connected
      datasets. The goal is to turn messy, real-world information into tools that
      are useful for understanding patterns, improving systems, and supporting
      research decisions.
    </p>

    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
        Overview
      </h2>
      <p className="text-foreground/80 leading-relaxed">
        My work in the lab has centered on handling data pipelines, exploring
        relationships across structured data, and translating research questions
        into computational workflows. I’ve spent time cleaning and organizing
        information, validating assumptions, and learning how research teams move
        from raw data to meaningful analysis.
      </p>
    </section>

    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
        What I’m doing
      </h2>

      <div className="grid gap-4">
        <div className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-muted/30">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Data pipelines</h4>
            <p className="text-sm text-foreground/70">
              Building and improving the systems that organize messy data into
              reliable, usable datasets for analysis.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-muted/30">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0">
            <Network className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Systems thinking</h4>
            <p className="text-sm text-foreground/70">
              Looking at how data relates across sources and how those connections
              affect the quality of a larger research system.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-muted/30">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0">
            <Microscope className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Research support</h4>
            <p className="text-sm text-foreground/70">
              Helping turn exploratory questions into reproducible workflows and
              analyses that can be tested and extended.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-muted/30">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Learning by building</h4>
            <p className="text-sm text-foreground/70">
              Getting hands-on experience with real-world data challenges while
              learning how computational research actually works in practice.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
        Why it matters
      </h2>
      <p className="text-foreground/80 leading-relaxed">
        This work has been one of the clearest examples of how I like to learn:
        not just by reading about methods, but by working through the messy parts
        of a real project. It’s pushed me to be more careful with data quality,
        more curious about system design, and more comfortable navigating the full
        research process from exploration to implementation.
      </p>
    </section>
  </ProjectPage>
);

export default DukeResearchProject;
