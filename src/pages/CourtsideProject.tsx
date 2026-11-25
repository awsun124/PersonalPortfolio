import ProjectPage from "@/components/projects/ProjectPage";
import { BrainCircuit, ChartNoAxesCombined, Database, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: BrainCircuit,
    title: "News investigator",
    description: "Uses local rules to check saved excerpts, flag conflicting reports, and record citations and tool calls.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "NBA prediction models",
    description: "Estimates win probabilities from team strength, scoring margins, rest, and confirmed player absences.",
  },
  {
    icon: ShieldCheck,
    title: "News quality checks",
    description: "Tests citations, source restrictions, and tool limits in CI. Reviewed failures become regression tests.",
  },
  {
    icon: Database,
    title: "Saved forecasts & results",
    description: "Keeps original forecasts and checks them against final scores. Tracks live results separately from backtests.",
  },
];

const CourtsideProject = () => (
  <ProjectPage title="Courtside" year="2026">
    <p className="text-lg text-muted-foreground leading-relaxed mb-16">
      Basketball has been one of my longtime interests, so I built Courtside
      to keep up with the NBA while exploring software development and
      machine learning. It groups NBA coverage into daily
      briefings, checks the supporting excerpts, and predicts game outcomes
      with models trained on historical results.
    </p>

    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
        Project highlights
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {highlights.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-muted/30">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-sm text-foreground/70">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
        Checking the news
      </h2>
      <p className="text-foreground/80 leading-relaxed mb-6">
        The news pipeline groups coverage from GNews, RSS feeds, and
        FreeNewsApi.ai into distinct stories. A rules-based investigator searches
        saved articles, checks permitted excerpts, and compares earlier briefings.
        It flags conflicting player-availability reports and saves citations
        and tool calls. It runs locally without a paid model API.
      </p>
      <p className="text-foreground/80 leading-relaxed">
        I set limits on runtime, retrieval, and tool calls. Article text is
        treated as evidence, and suspicious instructions are excluded. Sources
        limited to headline attribution stay out of investigation input.
        Separate ranking code calculates story scores.
      </p>
    </section>

    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
        Training the prediction models
      </h2>
      <p className="text-foreground/80 leading-relaxed mb-6">
        I compared Elo, logistic regression, scoring-margin models, boosted
        trees, and model blends using earlier games to predict later ones.
        The selected model combines team-strength ratings and opponent-adjusted
        scoring margins with home court and rest. Bookmaker odds appear beside
        forecasts for comparison and are never model inputs.
      </p>
      <p className="text-foreground/80 leading-relaxed mb-6">
        Official NBA injury reports and recent player box scores inform an
        adjustment for confirmed absences. Questionable players remain uncertain,
        and long-term absences receive a smaller or zero additional penalty.
      </p>
      <div className="p-6 rounded-2xl border border-border bg-muted/30">
        <p className="text-sm font-medium text-primary mb-2">Historical evaluation · February 1–April 12, 2026</p>
        <p className="text-2xl md:text-3xl font-bold tracking-tight mb-3">375 of 501 winners · 74.9%</p>
        <p className="text-sm text-foreground/70 leading-relaxed">
          The frozen original model scored 0.1795 Brier (probability error).
          An injury adjustment chosen on January games kept the same 375 correct
          picks and improved Brier to 0.1786 on these same 501 games. That
          comparison reused the test set. Live results are tracked separately.
        </p>
      </div>
    </section>

    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
        Tracking predictions over time
      </h2>
      <p className="text-foreground/80 leading-relaxed mb-6">
        GitHub Actions refreshes predictions at 6 AM Eastern and hourly from noon
        through 11 PM. It refreshes
        results and upcoming games, generates forecasts, checks player
        availability, and saves immutable observations. The latest valid forecast
        recorded before the one-hour cutoff becomes the displayed and graded
        prediction. Later score corrections can update settlement without
        rewriting the original forecast.
      </p>
      <p className="text-foreground/80 leading-relaxed">
        Only one prediction job can run at a time. The app reuses saved
        bookmaker prices and limits monthly API requests to control usage.
        Opening a page loads saved data without making new provider requests.
        Missing injury reports and prices are labeled, and games only count
        toward accuracy once their final results are available. The app shows
        the previous seven days of results.
      </p>
    </section>

    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
        Testing and reviewing briefings
      </h2>
      <p className="text-foreground/80 leading-relaxed mb-6">
        The news-quality workflow runs investigator tests and 33 development
        cases on pushes and pull requests. It checks citations, source
        restrictions, and tool limits, and saves reports for review. These
        checks help catch regressions but do not establish factual accuracy.
      </p>
      <p className="text-foreground/80 leading-relaxed">
        I also built a tool to review saved live briefings and turn failures
        into regression cases. Reviews caught a missing game result and a
        cut-off sentence, which now have tests. Collection failures open a
        GitHub issue that closes automatically when the workflow recovers.
      </p>
    </section>

    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
        Building the app
      </h2>
      <p className="text-foreground/80 leading-relaxed mb-6">
        I built the news, rankings, stats, and predictions views with React and
        TypeScript, including team filters, bookmarks, read status, and an option to hide game spoilers.
        FastAPI serves saved briefings and forecasts, backed by SQLite locally
        or PostgreSQL in deployment. Python handles collection, evidence checks, feature engineering, and model
        evaluation. The frontend runs on Vercel, the API on Render, and the
        database on Neon.
      </p>
      <p className="text-foreground/80 leading-relaxed mb-8">
        My favorite part has been saving predictions before games start,
        checking them afterward, and seeing where the models get things right
        and where they miss.
      </p>
      <a
        href="https://courtside-agent.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 mr-3 mb-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all"
      >
        Visit Courtside →
      </a>
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
