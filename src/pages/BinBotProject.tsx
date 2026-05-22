import Header from "@/components/Header";
import { ArrowLeft } from "lucide-react";
import binbotCadImg from "@/assets/binbot-cad.png";

const BinBotProject = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back link */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>

        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
            BinBot Recycling Sorter
          </h1>
          <p className="text-muted-foreground text-lg">2024</p>
        </div>


        <section className="mb-12">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Incorrect recycling is a critical issue that BinBot aimed to address through the use of a smart recycling bin that automatically sorts waste.
            </p>
          </div>
        </section>

        {/* System Design */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            System Design
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Sorting process:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>A user places a trash item into the bin opening.</li>
              <li>A time-of-flight (ToF) sensor detects the object and prompts a camera to capture an image.</li>
              <li>The image is analyzed using the <strong>Gemini API</strong>, which classifies the object as recyclable or non-recyclable.</li>
              <li>A <strong>servo motor mechanism</strong> activates a flap that directs the item into the correct compartment.</li>
            </ul>
            <p>Tools used:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong>Raspberry Pi</strong> as the central control</li>
              <li><strong>Camera module</strong> to capture image</li>
              <li><strong>Time-of-flight sensor</strong> for object detection</li>
              <li><strong>Servo motors</strong> for mechanical operation</li>
              <li>A custom-built structure made from <strong>laser-cut panels</strong> and <strong>3D-printed parts</strong></li>
            </ul>
            <p>
              We designed the bin structure and internal mechanism in Onshape before building anything physical.
            </p>
          </div>

          {/* CAD Image */}
          <div className="mt-8 rounded-2xl overflow-hidden bg-muted">
            <img
              src={binbotCadImg}
              alt="BinBot CAD design in Onshape"
              className="w-full max-w-lg mx-auto h-auto object-contain p-4"
            />
            <p className="text-center text-sm text-muted-foreground pb-4">
              CAD model of the BinBot sorting mechanism
            </p>
          </div>
        </section>

        {/* Results */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Results
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The final prototype sorted items with high accuracy and showed that even a small automated bin can cut down on common recycling mistakes.
              </p>
            </div>

            {/* Demo Video - vertical, to the right */}
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="rounded-2xl overflow-hidden bg-muted">
                <video
                  controls
                  className="w-full rounded-2xl"
                  preload="metadata"
                >
                  <source src="/videos/binbot-demo.mp4" type="video/mp4" />
                  <source src="/videos/binbot-demo.mov" type="video/quicktime" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-2">
                Demo video of BinBot in action
              </p>
            </div>
          </div>
        </section>

        {/* Devpost Submission */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Devpost Submission
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            This project was a group effort and was submitted to Devpost. The submission includes the final video presentation and full project details.
          </p>
          <div className="text-center">
            <a
              href="https://devpost.com/software/binbot-sznvca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all"
            >
              View on Devpost →
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BinBotProject;
