import ProjectPage from "@/components/projects/ProjectPage";
import { BrainCircuit, ChartNoAxesCombined, Database, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: BrainCircuit,
    title: "AI news investigator",
    description: "Searches articles, checks excerpts, and compares past briefings. Saves its sources and tool calls.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "NBA prediction models",
    description: "Estimates win probabilities from team strength, scoring margins, rest, and confirmed player absences.",
  },
  {
    icon: ShieldCheck,
    title: "Time-based evaluation",
    description: "Trains on earlier games and tests on later ones. Forecasts close one hour before tipoff.",
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
      I built Courtside to keep up with the NBA and the 76ers, and to try out
      ideas in AI and statistics. It collects league news, uses an agent to
      investigate stories, and predicts game outcomes with models trained on
      historical results.
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
        Building the news agent
      </h2>
      <p className="text-foreground/80 leading-relaxed mb-6">
        The news pipeline collects coverage from GNews, RSS feeds, and
        FreeNewsApi.ai, groups reports about the same event, and ranks up to ten
        stories. The optional investigator then uses tools to examine the saved
        evidence and compare how a story has developed across editions.
        Summaries must quote retrieved evidence, and headline-only sources are
        excluded from model input.
      </p>
      <p className="text-foreground/80 leading-relaxed">
        I set limits on the agent’s steps, runtime, model calls, and input size.
        It saves its sources and tool history so I can review what it did.
        The ranking code calculates story scores separately, and the agent can’t
        change them.
      </p>
    </section>

    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
        Training the prediction models
      </h2>
      <p className="text-foreground/80 leading-relaxed mb-6">
        The prediction research compares Elo, logistic regression, regularized
        scoring-margin models, boosted trees, and ensembles. The selected
        strength model blends two ridge regressions with an adaptive margin
        rating, converting predicted scoring margins into win probabilities.
        Features capture opponent strength, home court, and rest using results
        available before each forecast.
      </p>
      <p className="text-foreground/80 leading-relaxed mb-6">
        Model selection uses four expanding chronological validation folds.
        The production pipeline also checks official NBA injury reports and
        recent player box scores, applying a validation-selected adjustment for
        confirmed absences. Questionable players remain explicitly uncertain,
        and existing long-term absences receive a smaller or zero additional
        penalty.
      </p>
      <div className="p-6 rounded-2xl border border-border bg-muted/30">
        <p className="text-sm font-medium text-primary mb-2">Historical evaluation · February 1–April 12, 2026</p>
        <p className="text-2xl md:text-3xl font-bold tracking-tight mb-3">375 of 501 winners · 74.9%</p>
        <p className="text-sm text-foreground/70 leading-relaxed">
          Historical test: 0.17856 Brier score (probability error). Live results
          are tracked separately.
        </p>
      </div>
    </section>

    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
        Tracking predictions over time
      </h2>
      <p className="text-foreground/80 leading-relaxed mb-6">
        GitHub Actions runs the prediction worker on a schedule. It refreshes
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
        toward accuracy once their final results are available.
      </p>
    </section>

    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
        Building the app
      </h2>
      <p className="text-foreground/80 leading-relaxed mb-6">
        I built the news, rankings, stats, and predictions views with React and
        TypeScript, including team filters, bookmarks, unread markers, and spoiler controls.
        FastAPI serves saved briefings and forecasts, backed by SQLite locally
        or PostgreSQL in deployment. Python handles collection, agent
        tool use, feature engineering, and model evaluation.
      </p>
      <p className="text-foreground/80 leading-relaxed mb-8">
        My favorite part has been saving predictions before games start,
        checking them afterward, and seeing where the models get things wrong.
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
