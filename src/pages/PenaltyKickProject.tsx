import Header from "@/components/Header";
import { ArrowLeft } from "lucide-react";
import angleToolImg from "@/assets/angle-tool.png";
import distanceToolImg from "@/assets/distance-tool.png";
import correlationImg from "@/assets/correlation-charts.png";
import logisticImg from "@/assets/logistic-regression-3d.png";

const PenaltyKickProject = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back link */}
        <a href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>

        {/* Title & Date */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-3">
            Using Image Analysis to Predict Football (Soccer) Penalty Kick Direction
          </h1>
          <p className="text-lg text-muted-foreground">2023–2025</p>
        </header>

        {/* Summary */}
        <p className="text-lg text-muted-foreground leading-relaxed mb-16">
          This research analyzes professional soccer penalty kicks using image analysis and statistical modeling to identify biomechanical variables that correlate with shot direction. The final predictive model achieved an 85% accuracy in predicting the direction of a penalty kick.
        </p>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Overview</h2>
          <p className="text-foreground/80 leading-relaxed">
            The study analyzes five biomechanical variables from the kicker's form at the moment of contact: the non-kicking foot angle, kicking foot angle, chest angle, face angle, and kicking knee angle. The dataset consists of 200 penalty kick clips collected from professional tournaments across the past decade. Only right-footed penalty kicks were included due to the limited number of left-footed clips available.
          </p>
        </section>

        {/* Methodology */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Methodology</h2>

          {/* Part 1 */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Part 1</h3>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <p className="text-foreground/80 leading-relaxed">
                  Penalty kick clips were collected from YouTube recordings of professional matches. The videos were slowed down to 0.25× speed to capture a precise snapshot at the moment the player struck the ball. A custom program called <strong>angleTool</strong> was coded to analyze the five biomechanical variables by measuring the relevant angles from the images.
                </p>
              </div>
              <div className="flex-shrink-0 md:w-80">
                <img
                  src={angleToolImg}
                  alt="angleTool measuring biomechanical angles of a penalty kicker"
                  className="w-full rounded-2xl border border-border"
                />
                <p className="text-xs text-muted-foreground mt-2 text-center">angleTool measuring kicker angles</p>
              </div>
            </div>
          </div>

          {/* Part 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Part 2</h3>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <p className="text-foreground/80 leading-relaxed">
                  After the moment of contact was captured, the video was resumed until the ball reached the goal net and another snapshot was taken. A second custom program called <strong>distanceTool</strong> was coded to measure the horizontal distance of the ball from the center of the goal frame.
                </p>
              </div>
              <div className="flex-shrink-0 md:w-80">
                <img
                  src={distanceToolImg}
                  alt="distanceTool measuring ball distance from center of goal"
                  className="w-full rounded-2xl border border-border"
                />
                <p className="text-xs text-muted-foreground mt-2 text-center">distanceTool measuring ball position</p>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Results</h2>

          <p className="text-foreground/80 leading-relaxed mb-8">
            The dataset was divided using a systematic selection process so that 100 clips were used as experimental data. The analysis revealed that two variables (non-kicking foot and kicking knee angle) showed the strongest correlation with shot direction, with coefficients of determination of R² = 0.426 and R² = 0.416.
          </p>

          <div className="mb-10">
            <img
              src={correlationImg}
              alt="Scatter plots showing correlation between angles and shot distance"
              className="w-full max-w-2xl mx-auto rounded-2xl border border-border scale-y-[1.1] origin-top"
            />
            <p className="text-xs text-muted-foreground mt-2 mb-14 text-center">Correlation analysis of biomechanical variables</p>
          </div>

          <p className="text-foreground/80 leading-relaxed mb-6">
            A logistic regression model was developed using these two variables. A multivariable equation was created to calculate a predicted value Z, which was then used in a logistic function P = e<sup>Z</sup> / (1 + e<sup>Z</sup>) to estimate the probability that the player kicked the ball to the right side of the goal.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-8">
            Binary values were assigned to represent direction, where 0 represented a left side kick and 1 represented a right side kick. Log loss was calculated across each experimental data point, and the Excel Solver add-in tool was used to minimize log loss by adjusting the parameters A, B, and C in the multivariable equation.
          </p>

          <div className="mb-10">
            <img
              src={logisticImg}
              alt="3D logistic regression surface plot"
              className="w-full max-w-2xl mx-auto rounded-2xl border border-border"
            />
            <p className="text-xs text-muted-foreground mt-2 text-center">Logistic regression model visualization</p>
          </div>

          <p className="text-foreground/80 leading-relaxed font-medium">
            The finalized model achieved an <strong>85%</strong> accuracy in predicting the direction of a penalty kick.
          </p>
        </section>

        {/* Full Paper PDF */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Full Paper</h2>
          <div className="rounded-2xl border border-border overflow-hidden mb-4 bg-muted">
            <object
              data="/documents/ImageAnalysisPredict.pdf"
              type="application/pdf"
              className="w-full h-[600px] md:h-[800px]"
            >
              <p className="p-8 text-center text-muted-foreground">
                PDF preview is not available in your browser.{" "}
                <a href="/documents/ImageAnalysisPredict.pdf" download className="text-primary underline">Download the PDF</a> to view it.
              </p>
            </object>
          </div>
          <a
            href="/documents/ImageAnalysisPredict.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all"
          >
            Download PDF
          </a>
        </section>
      </main>
    </div>
  );
};

export default PenaltyKickProject;
