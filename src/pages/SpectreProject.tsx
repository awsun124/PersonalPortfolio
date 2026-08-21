import ProjectPage from "@/components/projects/ProjectPage";
import { Brain, Download, Music, Server } from "lucide-react";

const SpectreProject = () => {
  return (
    <ProjectPage title="Spectre Music Genre Classifier" year="2026">
      <p className="text-lg text-muted-foreground leading-relaxed mb-16">
        Spectre is a full-stack music genre classifier built around a CNN trained on the GTZAN dataset, achieving 82.7% accuracy. Users can upload a WAV file, watch the scan progress, and get a predicted genre with model confidence and similar-song matches.
      </p>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Overview</h2>
        <p className="text-foreground/80 leading-relaxed">
          The project connects a React frontend with a FastAPI backend. The frontend handles the upload flow, circular loading interface, prediction display, and similar-song cards. The backend loads trained PyTorch weights, converts audio into mel spectrogram chunks, and runs the CNN to classify each song.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Features</h2>

        <div className="grid gap-4">
          <div className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-muted/30">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0">
              <Music className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Audio Upload</h4>
              <p className="text-sm text-foreground/70">
                Users can upload WAV files and send them directly to the model backend for analysis.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-muted/30">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">CNN Prediction</h4>
              <p className="text-sm text-foreground/70">
                The model predicts one of ten GTZAN genres and returns a confidence score based on chunk-level probabilities.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-muted/30">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Similar Song Search</h4>
              <p className="text-sm text-foreground/70">
                Spectre compares learned CNN embeddings against a cached GTZAN song library to return close matches.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-muted/30">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Downloadable Matches</h4>
              <p className="text-sm text-foreground/70">
                Similar-song results include download links for the matched GTZAN audio files.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Build</h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          Spectre uses React and Vite for the interface, FastAPI for the local inference API, PyTorch for the CNN, and librosa for audio preprocessing. The model was trained in a Jupyter notebook, then exported as saved weights for the backend.
        </p>

        <a
          href="https://github.com/awsun124/Spectre"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all"
        >
          View on GitHub →
        </a>
      </section>
    </ProjectPage>
  );
};

export default SpectreProject;
