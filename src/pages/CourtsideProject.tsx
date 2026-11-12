import ProjectPage from "@/components/projects/ProjectPage";
import {
  BarChart3,
  BrainCircuit,
  Database,
  Newspaper,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";

const CourtsideProject = () => (
  <ProjectPage title="Courtside AI" year="2026">
    <p className="text-lg text-muted-foreground leading-relaxed mb-16">
      Courtside AI is a personal NBA news briefing app I built around one
      goal: making it easier to stay on top of league news without having to browse
      endless tabs, headlines, and duplicate stories. I wanted a cleaner way to
      follow the stories that matter most and keep up with the latest developments
      in one place. And, of course, I wanted to keep up with all things 76ers
      related.
    </p>

    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
        Overview
      </h2>
      <p className="text-foreground/80 leading-relaxed">
        The app pulls coverage from multiple sources, groups related articles into
        distinct stories, and ranks them by importance so the most covered and
        most significant developments rise to the top. Instead of showing a raw
        feed, it brings scattered NBA reporting together in a focused briefing
        that’s easier to follow than a long list of links.
      </p>
    </section>

    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
        What it does
      </h2>

      <div className="grid gap-4">
        <div className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-muted/30">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0">
            <Newspaper className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Story aggregation</h4>
            <p className="text-sm text-foreground/70">
              It collects NBA coverage from multiple sources, filters it for
              relevance, and groups related reporting so duplicate mentions don’t
              clutter the briefing.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-muted/30">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Ranking and scoring</h4>
            <p className="text-sm text-foreground/70">
              Each story gets scored based on coverage, momentum, and freshness to
              highlight the developments with the strongest evidence and the widest
              reporting base.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-muted/30">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Reliable data flow</h4>
            <p className="text-sm text-foreground/70">
              The backend stores briefings and source metadata in SQLite for
              local storage, with PostgreSQL support for deployment, so the app
              can save daily updates and review older editions.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-muted/30">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0">
            <BrainCircuit className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Tool-using AI investigator</h4>
            <p className="text-sm text-foreground/70">
              The optional agent can search saved articles, retrieve allowed
              evidence, inspect related stories, and compare past briefings. Its
              work is bounded, and it can’t change the numerical rankings.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
        Architecture and AI agent
      </h2>
      <p className="text-foreground/80 leading-relaxed mb-6">
        A key part of the project is an optional, bounded AI investigator. Instead
        of asking a model to answer from a prompt alone, I gave it a small set of
        tools to search saved articles, retrieve permitted evidence, inspect
        related reporting, and compare previous briefings. Its tool calls and
        citations are saved, and it can’t change the numerical story rankings.
        Keeping that investigation separate from the scoring system was an
        important part of the design.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="p-5 rounded-2xl border border-border bg-muted/30">
          <h4 className="font-semibold mb-2">Frontend</h4>
          <p className="text-sm text-foreground/70">
            React and TypeScript power the dashboard, with team filters, story
            browsing, saved reading states, and ranking views.
          </p>
        </div>
        <div className="p-5 rounded-2xl border border-border bg-muted/30">
          <h4 className="font-semibold mb-2">Backend</h4>
          <p className="text-sm text-foreground/70">
            FastAPI handles news collection, processing, ranking, and agent
            orchestration, with SQLite for local storage and PostgreSQL support
            for deployment.
          </p>
        </div>
      </div>
    </section>

    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
        Why I built it
      </h2>
      <p className="text-foreground/80 leading-relaxed">
        I built Courtside AI to get hands-on experience designing AI agents
        around something I genuinely care about: keeping up with the NBA and the
        76ers. I wanted to learn how an agent could use tools to investigate
        stories, while staying grounded in evidence and within clear limits.
      </p>
    </section>

    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
        Tools and stack
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-muted/30">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0">
            <RefreshCcw className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Daily refreshes</h4>
            <p className="text-sm text-foreground/70">
              The app can refresh on a schedule and keep a running backlog of the
              most recent NBA briefings.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-muted/30">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Evidence-aware workflow</h4>
            <p className="text-sm text-foreground/70">
              The app tries to keep the ranking grounded in source coverage and
              evidence instead of pure model speculation.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Build</h2>
      <p className="text-foreground/80 leading-relaxed mb-6">
        This project is a good example of combining an interest I care about with
        the kind of engineering challenges I enjoy: data processing, product
        design, and building something that feels useful in the real world.
      </p>

      <a
        href="https://github.com/awsun124/Courtside-Agent"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all"
      >
        View on GitHub →
      </a>
    </section>
  </ProjectPage>
);

export default CourtsideProject;
